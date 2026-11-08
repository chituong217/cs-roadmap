import { readdir } from 'node:fs/promises';
import { validateAuthoredCourse, CATALOG_COURSE_MAP } from '../src/syllabus/index.mjs';
const directory = new URL('../src/syllabus/courses/', import.meta.url);
let count = 0;
let failures = 0;
const seen = new Set();
const files = await readdir(directory);
for (const file of files.filter(name => name.endsWith('.mjs'))) {
  if (file === 'operating-systems-vm-sample.mjs' && files.includes('operating-systems.mjs')) continue;
  const module = await import(new URL(file, directory));
  for (const course of Object.values(module)) {
    if (!course?.id || !Array.isArray(course.chapters) || seen.has(course.id)) continue;
    seen.add(course.id);
    const errors = validateAuthoredCourse(course, CATALOG_COURSE_MAP);
    count++;
    if (errors.length) { failures++; console.error(file, errors); }
  }
}
console.log(JSON.stringify({ coursesChecked: count, failures }));
if (failures) process.exitCode = 1;
