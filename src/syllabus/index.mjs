import { M5_COURSES } from './m5.mjs';
export { M5_COURSES };
import { M4_BLOCK_3_4_COURSES } from './m4.mjs';
export { M4_BLOCK_3_4_COURSES };
import {
  BLOCKS,
  CATALOG_COURSES,
  CATALOG_COURSE_MAP,
  getCourseById,
  getCoursesByBlock,
  computeTopologicalOrder,
} from './catalog.mjs';
import { SOURCE_REGISTER, SOURCE_MAP, VALID_VERIFICATION_LEVELS } from './sources.mjs';
import {
  VALID_LEVELS,
  VALID_PREREQ_TYPES,
  VALID_SOURCE_RELATIONSHIPS,
  countWords,
  validateSourceRegister,
  validateParagraphArray,
  validateSourceRefs,
  validatePrerequisiteDAG,
  validateAuthoredCourse,
} from './schema.mjs';
import { COURSE_COMPUTING_ENVIRONMENT } from './courses/computing-environment.mjs';
import { COURSE_MATH_BRIDGE } from './courses/math-bridge.mjs';
import { COURSE_COMPUTATIONAL_THINKING } from './courses/computational-thinking.mjs';
import { COURSE_INTRO_PROGRAMMING } from './courses/intro-programming.mjs';
import { COURSE_PROGRAM_DESIGN_DEBUGGING } from './courses/program-design-debugging.mjs';
import { COURSE_GIT_DEV_TOOLS } from './courses/git-dev-tools.mjs';
import { COURSE_CPP_MEMORY_MODEL } from './courses/cpp-memory-model.mjs';
import { COURSE_OBJECT_ORIENTED_PROGRAMMING } from './courses/object-oriented-programming.mjs';
import { COURSE_DISCRETE_MATH } from './courses/discrete-math.mjs';
import { COURSE_LINEAR_ALGEBRA } from './courses/linear-algebra.mjs';
import { COURSE_SINGLE_VARIABLE_CALCULUS } from './courses/single-variable-calculus.mjs';
import { COURSE_MULTIVARIABLE_CALCULUS_OPTIMIZATION } from './courses/multivariable-calculus-optimization.mjs';
import { COURSE_PROBABILITY } from './courses/probability.mjs';
import { COURSE_STATISTICS_INFERENCE } from './courses/statistics-inference.mjs';
import { COURSE_OPERATING_SYSTEMS_SAMPLE } from './courses/operating-systems-vm-sample.mjs';

export const M2_SAMPLE_COURSES = [
  COURSE_INTRO_PROGRAMMING,
  COURSE_DISCRETE_MATH,
  COURSE_OPERATING_SYSTEMS_SAMPLE,
];

export const M3_BLOCK_1_2_COURSES = [
  COURSE_COMPUTING_ENVIRONMENT,
  COURSE_MATH_BRIDGE,
  COURSE_COMPUTATIONAL_THINKING,
  COURSE_INTRO_PROGRAMMING,
  COURSE_PROGRAM_DESIGN_DEBUGGING,
  COURSE_GIT_DEV_TOOLS,
  COURSE_CPP_MEMORY_MODEL,
  COURSE_OBJECT_ORIENTED_PROGRAMMING,
  COURSE_DISCRETE_MATH,
  COURSE_LINEAR_ALGEBRA,
  COURSE_SINGLE_VARIABLE_CALCULUS,
  COURSE_MULTIVARIABLE_CALCULUS_OPTIMIZATION,
  COURSE_PROBABILITY,
  COURSE_STATISTICS_INFERENCE,
];

export const AUTHORED_COURSES = [
  ...M3_BLOCK_1_2_COURSES,
  ...M4_BLOCK_3_4_COURSES,
  ...M5_COURSES,
];

export const AUTHORED_COURSE_MAP = new Map(
  AUTHORED_COURSES.map((course) => [course.id, course])
);

export function getAuthoredCourseById(courseId) {
  return AUTHORED_COURSE_MAP.get(courseId) ?? null;
}

export function getAllAuthoredChapterIds() {
  const ids = new Set();
  for (const course of AUTHORED_COURSES) {
    for (const ch of course.chapters ?? []) {
      ids.add(ch.id);
    }
  }
  return ids;
}

export function getAllAuthoredTopicIds() {
  const ids = new Set();
  for (const course of AUTHORED_COURSES) {
    for (const ch of course.chapters ?? []) {
      for (const tp of ch.topics ?? []) {
        ids.add(tp.id);
      }
    }
  }
  return ids;
}

export {
  BLOCKS,
  CATALOG_COURSES,
  CATALOG_COURSE_MAP,
  getCourseById,
  getCoursesByBlock,
  computeTopologicalOrder,
  SOURCE_REGISTER,
  SOURCE_MAP,
  VALID_VERIFICATION_LEVELS,
  VALID_LEVELS,
  VALID_PREREQ_TYPES,
  VALID_SOURCE_RELATIONSHIPS,
  countWords,
  validateSourceRegister,
  validateParagraphArray,
  validateSourceRefs,
  validatePrerequisiteDAG,
  validateAuthoredCourse,
  COURSE_COMPUTING_ENVIRONMENT,
  COURSE_MATH_BRIDGE,
  COURSE_COMPUTATIONAL_THINKING,
  COURSE_INTRO_PROGRAMMING,
  COURSE_PROGRAM_DESIGN_DEBUGGING,
  COURSE_GIT_DEV_TOOLS,
  COURSE_CPP_MEMORY_MODEL,
  COURSE_OBJECT_ORIENTED_PROGRAMMING,
  COURSE_DISCRETE_MATH,
  COURSE_LINEAR_ALGEBRA,
  COURSE_SINGLE_VARIABLE_CALCULUS,
  COURSE_MULTIVARIABLE_CALCULUS_OPTIMIZATION,
  COURSE_PROBABILITY,
  COURSE_STATISTICS_INFERENCE,
  COURSE_OPERATING_SYSTEMS_SAMPLE,
};
