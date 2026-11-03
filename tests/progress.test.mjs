import test from 'node:test';
import assert from 'node:assert/strict';
import { emptyProgress, validateProgress, nextTask } from '../src/progress.mjs';
import { chapters, tasks } from '../src/curriculum.js';
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
  assert.equal(tasks[0].number, '001'); assert.equal(tasks.at(-1).number, '032');
});
