import test from 'node:test';
import assert from 'node:assert/strict';
import {
  emptyProgress,
  validateProgress,
  nextTask,
  STORAGE_KEY,
  STORAGE_KEY_V1,
  STORAGE_KEY_V2,
  ROADMAP_ID,
  labels,
  migrateProgressV1ToV2,
  loadProgressFromStorage,
} from '../src/progress.mjs';
import { chapters, tasks } from '../src/curriculum.js';
import { tasks as originalTasks } from '../src/curriculum/initial.js';

const ids = tasks.map(t => t.id);

test('backup round-trip keeps statuses and current task', () => {
  const data = { ...emptyProgress(), statuses: { [ids[0]]: 'done', [ids[1]]: 'learning' }, lastTask: ids[1] };
  assert.deepEqual(validateProgress(JSON.parse(JSON.stringify(data)), ids).data, data);
});

test('rejects unrelated files and malformed statuses before importing', () => {
  for (const raw of [
    null,
    {},
    { ...emptyProgress(), roadmapId: 'other' },
    { ...emptyProgress(), statuses: [] },
    { ...emptyProgress(), statuses: { [ids[0]]: 'almost' } },
    { ...emptyProgress(), statuses: { [ids[0]]: 'toString' } }
  ]) {
    assert.throws(() => validateProgress(raw, ids));
  }
});

test('handles newer curricula without polluting current statuses', () => {
  const result = validateProgress({ ...emptyProgress(), statuses: { unknown: 'done', [ids[0]]: 'done' }, lastTask: 'unknown' }, ids);
  assert.equal(result.ignored, 1);
  assert.equal(result.data.lastTask, null);
  assert.deepEqual(result.data.statuses, { [ids[0]]: 'done' });
});

test('resume prioritizes active work then first unfinished task', () => {
  assert.equal(nextTask(tasks, { [ids[2]]: 'learning' }).id, ids[2]);
  assert.equal(nextTask(tasks, { [ids[0]]: 'done' }).id, ids[1]);
  assert.equal(nextTask(tasks, Object.fromEntries(ids.map(id => [id, 'done']))).id, ids[0]);
});

test('curriculum has stable unique IDs and actionable contents', () => {
  assert.equal(new Set(ids).size, tasks.length);
  for (const task of tasks) {
    assert.ok(chapters.some(c => c.id === task.chapter));
    assert.ok(task.todos.length >= 3);
    assert.ok(['Học', 'Luyện', 'Áp dụng'].includes(task.kind));
    for (const [, url] of task.sources || []) {
      if (url.startsWith('./docs/')) assert.ok(url.endsWith('.md'));
      else assert.equal(new URL(url).protocol, 'https:');
    }
  }
  assert.equal(tasks[0].number, '001');
  assert.equal(tasks.at(-1).number, String(tasks.length).padStart(3, '0'));
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
  for (const [before, after] of dependencies) {
    assert.ok(ids.includes(before) && ids.includes(after));
    assert.ok(ids.indexOf(before) < ids.indexOf(after), `${before} must precede ${after}`);
  }
});

test('chapters are contiguous and every task is numbered once', () => {
  assert.equal(new Set(chapters.map(c => c.id)).size, chapters.length);
  const chapterIndexes = tasks.map(t => chapters.findIndex(c => c.id === t.chapter));
  for (let i = 1; i < tasks.length; i++) {
    assert.ok(chapterIndexes[i] >= chapterIndexes[i - 1]);
    assert.equal(tasks[i].number, String(i + 1).padStart(3, '0'));
  }
  for (const c of chapters) assert.ok(tasks.some(t => t.chapter === c.id));
});

// Milestone 2 Schema v2 and Migration Unit Tests
test('v2 schema returns version 2 and initializes checkedTodos, activeTrackId, filterStatus', () => {
  const empty = emptyProgress();
  assert.equal(empty.version, 2);
  assert.equal(empty.roadmapId, ROADMAP_ID);
  assert.equal(STORAGE_KEY, 'khmt-roadmap.progress.v2');
  assert.equal(STORAGE_KEY_V2, 'khmt-roadmap.progress.v2');
  assert.equal(STORAGE_KEY_V1, 'khmt-roadmap.progress.v1');
  assert.deepEqual(empty.checkedTodos, {});
  assert.equal(empty.activeTrackId, 'all');
  assert.equal(empty.filterStatus, 'all');
  assert.equal(empty.lastTask, null);
});

test('migrateProgressV1ToV2 preserves 100% of user statuses and lastTask', () => {
  const legacyV1 = {
    version: 1,
    roadmapId: ROADMAP_ID,
    statuses: {
      [ids[0]]: 'done',
      [ids[1]]: 'learning',
      [ids[2]]: 'deferred',
      [ids[3]]: 'todo',
    },
    lastTask: ids[1],
  };

  const migrated = migrateProgressV1ToV2(legacyV1, ids);
  assert.equal(migrated.version, 2);
  assert.equal(migrated.roadmapId, ROADMAP_ID);
  assert.equal(migrated.statuses[ids[0]], 'done');
  assert.equal(migrated.statuses[ids[1]], 'learning');
  assert.equal(migrated.statuses[ids[2]], 'deferred');
  assert.equal(migrated.statuses[ids[3]], 'todo');
  assert.equal(migrated.lastTask, ids[1]);
  assert.deepEqual(migrated.checkedTodos, {});
  assert.equal(migrated.activeTrackId, 'all');
  assert.equal(migrated.filterStatus, 'all');
});

test('validateProgress accepts legacy v1 backup and upgrades to v2 schema cleanly', () => {
  const legacyV1Backup = {
    version: 1,
    roadmapId: ROADMAP_ID,
    statuses: {
      [ids[0]]: 'done',
      [ids[5]]: 'learning',
    },
    lastTask: ids[5],
  };

  const result = validateProgress(legacyV1Backup, ids);
  assert.equal(result.ignored, 0);
  assert.equal(result.data.version, 2);
  assert.equal(result.data.roadmapId, ROADMAP_ID);
  assert.equal(result.data.statuses[ids[0]], 'done');
  assert.equal(result.data.statuses[ids[5]], 'learning');
  assert.equal(result.data.lastTask, ids[5]);
  assert.deepEqual(result.data.checkedTodos, {});
  assert.equal(result.data.activeTrackId, 'all');
  assert.equal(result.data.filterStatus, 'all');
});

test('v2 validateProgress supports and validates checkedTodos array indices', () => {
  const payloadWithTodos = {
    version: 2,
    roadmapId: ROADMAP_ID,
    statuses: { [ids[0]]: 'learning' },
    lastTask: ids[0],
    checkedTodos: {
      [ids[0]]: [0, 2],
      [ids[1]]: [1, -5, 'invalid', 4],
      'unknown-task-99': [0, 1],
    },
  };

  const result = validateProgress(payloadWithTodos, ids);
  assert.deepEqual(result.data.checkedTodos[ids[0]], [0, 2]);
  assert.deepEqual(result.data.checkedTodos[ids[1]], [1, 4]); // Cleaned out negative and non-integer
  assert.equal(result.data.checkedTodos['unknown-task-99'], undefined); // Unknown task excluded
});

test('v2 validateProgress preserves valid activeTrackId and filterStatus', () => {
  const customView = {
    version: 2,
    roadmapId: ROADMAP_ID,
    statuses: { [ids[0]]: 'learning' },
    lastTask: ids[0],
    activeTrackId: 'track-2',
    filterStatus: 'learning',
  };

  const result = validateProgress(customView, ids);
  assert.equal(result.data.activeTrackId, 'track-2');
  assert.equal(result.data.filterStatus, 'learning');

  const invalidFilter = {
    ...customView,
    filterStatus: 'not-a-real-status',
  };
  const resultFallback = validateProgress(invalidFilter, ids);
  assert.equal(resultFallback.data.filterStatus, 'all');
});

test('loadProgressFromStorage auto-migrates from v1 key to v2 key when v2 is absent', () => {
  const store = new Map();
  const mockStorage = {
    getItem: key => store.get(key) || null,
    setItem: (key, val) => store.set(key, String(val)),
  };

  // Setup legacy v1 in storage
  const legacyV1 = {
    version: 1,
    roadmapId: ROADMAP_ID,
    statuses: { [ids[0]]: 'done', [ids[2]]: 'learning' },
    lastTask: ids[2],
  };
  mockStorage.setItem(STORAGE_KEY_V1, JSON.stringify(legacyV1));

  // Run loadProgressFromStorage
  const loaded = loadProgressFromStorage(mockStorage, ids);
  assert.equal(loaded.migrated, true);
  assert.equal(loaded.data.version, 2);
  assert.equal(loaded.data.statuses[ids[0]], 'done');
  assert.equal(loaded.data.statuses[ids[2]], 'learning');
  assert.equal(loaded.data.lastTask, ids[2]);

  // Check that v2 key was written to storage
  const rawV2 = mockStorage.getItem(STORAGE_KEY_V2);
  assert.ok(rawV2, 'v2 key must be written to storage after migration');
  const parsedV2 = JSON.parse(rawV2);
  assert.equal(parsedV2.version, 2);
  assert.equal(parsedV2.statuses[ids[0]], 'done');

  // Next call reads directly from v2 without needing migration
  const secondLoad = loadProgressFromStorage(mockStorage, ids);
  assert.equal(secondLoad.migrated, false);
  assert.equal(secondLoad.data.statuses[ids[0]], 'done');
});
