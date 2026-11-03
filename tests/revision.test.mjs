import test from 'node:test';
import assert from 'node:assert/strict';
import { tasks, chapters, baselineTaskIds } from '../src/curriculum/index.js';
import { freeLibrary } from '../src/curriculum/readings.js';
import { emptyProgress, nextTask, validateProgress } from '../src/progress.mjs';
import { buildLearningPrompt, blankLearningPrompt, chatTitle, teachingPlugin } from '../src/learning-prompt.mjs';

test('every 1.1 task ID and saved status survives the expanded curriculum', () => {
  assert.equal(baselineTaskIds.length, 339);
  const statuses = Object.fromEntries(baselineTaskIds.map(id => [id, 'done']));
  const restored = validateProgress({ ...emptyProgress(), statuses, lastTask: 'dl-modalities' }, tasks.map(t => t.id)).data;
  assert.deepEqual(restored.statuses, statuses);
  assert.equal(restored.lastTask, 'dl-modalities');
  assert.ok(tasks.length > baselineTaskIds.length);
  assert.equal(chapters.length, 27);
});

test('deferring optional work does not complete it or prevent resuming required work', () => {
  const sample = [{ id: 'a', optional: false }, { id: 'b', optional: true }, { id: 'c', optional: false }];
  assert.equal(nextTask(sample, { a: 'done', b: 'deferred' }).id, 'c');
  assert.equal(nextTask(sample, { a: 'done', b: 'learning' }).id, 'b');
  assert.equal(nextTask(sample, { a: 'deferred', b: 'deferred' }).id, 'a');
  const restored = validateProgress({ ...emptyProgress(), statuses: { b: 'deferred' } }, ['a', 'b', 'c']).data;
  assert.equal(restored.statuses.b, 'deferred');
  assert.notEqual(restored.statuses.b, 'done');
});

test('optional labels include a reason and core systems remain required', () => {
  for (const t of tasks.filter(t => t.optional)) assert.ok(t.optionalReason?.length > 30, t.id);
  for (const id of ['graph-dijkstra', 'graph-mst', 'os-process', 'db-transaction', 'theory-dfa', 'ml-split']) assert.equal(tasks.find(t => t.id === id).optional, false, id);
  for (const id of ['graph-flow', 'range-fenwick', 'dl-attention', 'linear-svd']) assert.equal(tasks.find(t => t.id === id).optional, true, id);
});

test('placement tasks route to real lessons without changing another chapter order', () => {
  const ids = new Set(tasks.map(t => t.id));
  const entries = tasks.filter(t => t.diagnostic);
  assert.equal(entries.length, 9);
  for (const entry of entries) {
    assert.equal(tasks.find(t => t.chapter === entry.chapter).id, entry.id);
    assert.ok(entry.reviewTargets.length >= 3);
    for (const id of entry.reviewTargets) assert.ok(ids.has(id), id);
  }
  const position = id => tasks.findIndex(t => t.id === id);
  for (const [before, after] of [['linear-eigen', 'linear-svd'], ['prob-distributions', 'prob-poisson'], ['prob-poisson', 'prob-normal'], ['ml-unsupervised', 'ml-pca'], ['dl-network', 'dl-modalities'], ['dl-modalities', 'dl-embedding'], ['dl-embedding', 'dl-attention']]) assert.ok(position(before) < position(after));
});

test('assigned readings have a concrete scope and a free access route', () => {
  const approved = new Set(Object.values(freeLibrary).map(([, url]) => url));
  const sourced = tasks.filter(t => t.sources?.length);
  assert.ok(sourced.length > 250);
  for (const t of sourced) {
    assert.equal(t.sourcePolicy, 'free');
    for (const [label, url, scope, access] of t.sources) {
      assert.ok(approved.has(url), t.id);
      assert.ok(label.length > 3 && scope.length > 30 && access.includes('miễn phí'), t.id);
      assert.doesNotMatch(url, /coursera|edx\.org|amazon|springer|oreilly/);
    }
  }
  assert.equal(tasks.find(t => t.id === 'net-udp-tcp').sources[0][0].includes('Dordal'), true);
});

test('learning prompt contains the selected task and preserves the teaching plugin mention', () => {
  const task = tasks.find(t => t.id === 'graph-dijkstra');
  const prompt = buildLearningPrompt(task, tasks);
  assert.ok(prompt.startsWith(chatTitle(task)));
  assert.ok(prompt.includes(teachingPlugin));
  for (const todo of task.todos) assert.ok(prompt.includes(todo));
  for (const [, url, scope] of task.sources) assert.ok(prompt.includes(url) && prompt.includes(scope));
  assert.ok(prompt.includes('Không tự nhận đã đổi tên'));
  assert.ok(prompt.includes('không tự nhận đã kích hoạt'));
  assert.doesNotMatch(prompt, /\[SỐ NODE\]|\[TÊN NODE\]/);
  assert.match(blankLearningPrompt(), /\[SỐ NODE\].*\[TÊN NODE\]/);
});
