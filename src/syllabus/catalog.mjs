import { BLOCKS_1_TO_3, COURSES_BLOCKS_1_TO_3 } from './catalog-blocks-1-3.mjs';
import { BLOCKS_4_TO_5, COURSES_BLOCKS_4_TO_5 } from './catalog-blocks-4-5.mjs';
import { BLOCKS_6_TO_7, COURSES_BLOCKS_6_TO_7 } from './catalog-blocks-6-7.mjs';
import { validatePrerequisiteDAG } from './schema.mjs';

export const BLOCKS = [
  ...BLOCKS_1_TO_3,
  ...BLOCKS_4_TO_5,
  ...BLOCKS_6_TO_7,
];

export const CATALOG_COURSES = [
  ...COURSES_BLOCKS_1_TO_3,
  ...COURSES_BLOCKS_4_TO_5,
  ...COURSES_BLOCKS_6_TO_7,
];

export const CATALOG_COURSE_MAP = new Map(
  CATALOG_COURSES.map((course) => [course.id, course])
);

export function getCourseById(courseId) {
  return CATALOG_COURSE_MAP.get(courseId) ?? null;
}

export function getCoursesByBlock(blockId) {
  return CATALOG_COURSES.filter((course) => course.blockId === blockId);
}

/**
 * Computes a topological ordering of all catalog courses using Kahn's algorithm
 * over `required` prerequisite edges. Throws if a cycle exists.
 */
export function computeTopologicalOrder(courses = CATALOG_COURSES) {
  const dagErrors = validatePrerequisiteDAG(courses);
  if (dagErrors.length > 0) {
    throw new Error(`Invalid course prerequisite DAG: ${dagErrors.join('; ')}`);
  }

  const courseMap = new Map(courses.map((c) => [c.id, c]));
  const inDegree = new Map();
  const dependents = new Map();

  for (const course of courses) {
    inDegree.set(course.id, 0);
    dependents.set(course.id, []);
  }

  for (const course of courses) {
    for (const prereq of course.prerequisites ?? []) {
      if (prereq.type === 'required' && courseMap.has(prereq.courseId)) {
        inDegree.set(course.id, (inDegree.get(course.id) ?? 0) + 1);
        dependents.get(prereq.courseId).push(course.id);
      }
    }
  }

  const queue = courses
    .filter((c) => (inDegree.get(c.id) ?? 0) === 0)
    .map((c) => c.id);

  const orderedIds = [];
  while (queue.length > 0) {
    const currentId = queue.shift();
    orderedIds.push(currentId);
    for (const depId of dependents.get(currentId) ?? []) {
      const nextDegree = (inDegree.get(depId) ?? 0) - 1;
      inDegree.set(depId, nextDegree);
      if (nextDegree === 0) {
        queue.push(depId);
      }
    }
  }

  return orderedIds.map((id) => courseMap.get(id));
}
