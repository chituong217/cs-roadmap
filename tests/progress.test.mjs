import test from 'node:test';
import assert from 'node:assert/strict';
import { emptyProgress, validateProgress, nextTask } from '../src/progress.mjs';
import { chapters, tasks } from '../src/curriculum.js';
import { tasks as originalTasks } from '../src/curriculum/initial.js';
const ids = tasks.map(t => t.id);
test('backup round-trip keeps statuses and current task', () => {
  const data = { ...emptyProgress(), statuses: { [ids[0]]: 'done', [ids[1]]: 'learning' }, lastTask: ids[1] };
  assert.deepEqual(validateProgress(JSON.parse(JSON.stringify(data)), ids).data, data);
});
test('rejects unrelated files and malformed statuses before importing', () => {
  for (const raw of [null, {}, { ...emptyProgress(), roadmapId: 'other' }, { ...emptyProgress(), statuses: [] }, { ...emptyProgress(), statuses: { [ids[0]]: 'almost' } }, { ...emptyProgress(), statuses: { [ids[0]]: 'toString' } }]) assert.throws(() => validateProgress(raw, ids));
});
test('handles newer curricula without polluting current statuses', () => {
  const result = validateProgress({ ...emptyProgress(), statuses: { unknown: 'done', [ids[0]]: 'done' }, lastTask: 'unknown' }, ids);
  assert.equal(result.ignored, 1); assert.equal(result.data.lastTask, null); assert.deepEqual(result.data.statuses, { [ids[0]]: 'done' });
});
test('resume prioritizes active work then first unfinished task', () => {
  assert.equal(nextTask(tasks, { [ids[2]]: 'learning' }).id, ids[2]);
  assert.equal(nextTask(tasks, { [ids[0]]: 'done' }).id, ids[1]);
  assert.equal(nextTask(tasks, Object.fromEntries(ids.map(id => [id, 'done']))).id, ids[0]);
});
test('curriculum has stable unique IDs and actionable contents', () => {
  assert.equal(new Set(ids).size, tasks.length);
  for (const task of tasks) { assert.ok(chapters.some(c => c.id === task.chapter)); assert.ok(task.todos.length >= 3); assert.ok(['Học', 'Luyện', 'Áp dụng'].includes(task.kind)); for (const [, url] of task.sources || []) assert.equal(new URL(url).protocol, 'https:'); }
  assert.equal(tasks[0].number, '001'); assert.equal(tasks.at(-1).number, String(tasks.length).padStart(3, '0'));
});
test('full edition preserves every prototype task and backup', () => {
  const statuses = Object.fromEntries(originalTasks.map((task, i) => [task.id, i % 2 ? 'learning' : 'done']));
  assert.deepEqual(validateProgress({ ...emptyProgress(), statuses, lastTask: 'oop-inheritance' }, ids).data.statuses, statuses);
  assert.ok(tasks.length >= 300);
  for (const task of originalTasks) assert.ok(ids.includes(task.id), `Missing previous task ${task.id}`);
});
test('important prerequisites precede the tasks using them', () => {
  const dependencies = [
    ['cpp-types', 'cpp-functions'], ['oop-resource', 'cpp-copy'],
    ['math-induction', 'dsa-complexity'], ['algo-recursion', 'dsa-tree'],
    ['dsa-heap', 'algo-heapsort'], ['dsa-queue', 'graph-bfs'],
    ['graph-bfs', 'graph-dijkstra'], ['dsa-heap', 'graph-dijkstra'],
    ['graph-relax', 'graph-dijkstra'], ['graph-dsu', 'graph-kruskal'],
    ['graph-mst', 'graph-prim'], ['algo-bitmask', 'range-fenwick'],
    ['linear-projection', 'ml-linear'], ['calculus-gradient', 'ml-linear'],
    ['prob-random', 'ml-metrics'], ['py-numpy', 'ml-linear'],
    ['db-transaction', 'api-database'], ['web-js', 'web-react'],
    ['pl-lexer', 'pl-parser'], ['cap-quality', 'cap-deploy'],
  ];
  for (const [before, after] of dependencies) { assert.ok(ids.includes(before) && ids.includes(after)); assert.ok(ids.indexOf(before) < ids.indexOf(after), `${before} must precede ${after}`); }
});
test('chapters are contiguous and every task is numbered once', () => {
  assert.equal(new Set(chapters.map(c => c.id)).size, chapters.length);
  const chapterIndexes = tasks.map(t => chapters.findIndex(c => c.id === t.chapter));
  for (let i = 1; i < tasks.length; i++) { assert.ok(chapterIndexes[i] >= chapterIndexes[i - 1]); assert.equal(tasks[i].number, String(i + 1).padStart(3, '0')); }
  for (const c of chapters) assert.ok(tasks.some(t => t.chapter === c.id));
});
