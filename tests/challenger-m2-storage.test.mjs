import test from 'node:test';
import assert from 'node:assert/strict';
import {
  STORAGE_KEY_V1,
  STORAGE_KEY_V2,
  STORAGE_KEY,
  ROADMAP_ID,
  labels,
  kindLabels,
  emptyProgress,
  migrateProgressV1ToV2,
  validateProgress,
  loadProgressFromStorage,
  nextTask,
} from '../src/progress.mjs';
import { tasks } from '../src/curriculum.js';

/* ========================================================================== */
/* CHALLENGER 1 EMPIRICAL STRESS TEST HARNESS — MILESTONE 2                   */
/* Focus: State Machine, LocalStorage Engine, v1->v2 Migration,               */
/* Boundary Sanitation, Prototype Pollution, and Round-Trip Resiliency        */
/* ========================================================================== */

const allTaskIds = tasks.map(t => t.id);
const validStatuses = ['todo', 'learning', 'done', 'deferred'];

// -----------------------------------------------------------------------------
// SUITE 1: Legacy v1 Migration Stress Tests
// -----------------------------------------------------------------------------
test('CHALLENGER STRESS 1.1: migrateProgressV1ToV2 handles null, undefined, primitives and arrays safely', () => {
  for (const invalidInput of [null, undefined, '', 'legacy', 123, 0, true, false, [], [1, 2, 3]]) {
    const result = migrateProgressV1ToV2(invalidInput, allTaskIds);
    assert.equal(result.version, 2);
    assert.equal(result.roadmapId, ROADMAP_ID);
    assert.deepEqual(result.statuses, {});
    assert.equal(result.lastTask, null);
    assert.deepEqual(result.checkedTodos, {});
    assert.equal(result.activeTrackId, 'all');
    assert.equal(result.filterStatus, 'all');
  }
});

test('CHALLENGER STRESS 1.2: migrateProgressV1ToV2 handles missing and malformed fields gracefully', () => {
  const missingStatuses = { version: 1, roadmapId: ROADMAP_ID };
  const res1 = migrateProgressV1ToV2(missingStatuses, allTaskIds);
  assert.equal(res1.version, 2);
  assert.deepEqual(res1.statuses, {});
  assert.equal(res1.lastTask, null);

  const arrayStatuses = { version: 1, statuses: ['done', 'todo'] };
  const res2 = migrateProgressV1ToV2(arrayStatuses, allTaskIds);
  assert.deepEqual(res2.statuses, {});

  const stringStatuses = { version: 1, statuses: 'done' };
  const res3 = migrateProgressV1ToV2(stringStatuses, allTaskIds);
  assert.deepEqual(res3.statuses, {});
});

test('CHALLENGER STRESS 1.3: migrateProgressV1ToV2 prunes unknown tasks when ids are provided', () => {
  const legacyWithUnknown = {
    version: 1,
    roadmapId: ROADMAP_ID,
    statuses: {
      [allTaskIds[0]]: 'done',
      [allTaskIds[1]]: 'learning',
      'unknown-task-x1': 'done',
      'unknown-task-x2': 'deferred',
      'legacy-removed-task': 'todo',
    },
    lastTask: 'unknown-task-x1',
  };

  const migrated = migrateProgressV1ToV2(legacyWithUnknown, allTaskIds);
  assert.equal(migrated.version, 2);
  assert.equal(migrated.statuses[allTaskIds[0]], 'done');
  assert.equal(migrated.statuses[allTaskIds[1]], 'learning');
  assert.equal(migrated.statuses['unknown-task-x1'], undefined);
  assert.equal(migrated.statuses['unknown-task-x2'], undefined);
  assert.equal(migrated.statuses['legacy-removed-task'], undefined);
  assert.equal(migrated.lastTask, null, 'Unknown lastTask must reset to null');
});

test('CHALLENGER STRESS 1.4: migrateProgressV1ToV2 preserves custom lastTask when valid or when ids=[]', () => {
  // Valid lastTask in ids list
  const validLast = {
    version: 1,
    statuses: { [allTaskIds[5]]: 'learning' },
    lastTask: allTaskIds[5],
  };
  const resValid = migrateProgressV1ToV2(validLast, allTaskIds);
  assert.equal(resValid.lastTask, allTaskIds[5]);

  // Custom lastTask when ids is empty
  const customLast = {
    version: 1,
    statuses: { 'custom-module-1': 'done' },
    lastTask: 'custom-module-1',
  };
  const resCustom = migrateProgressV1ToV2(customLast, []);
  assert.equal(resCustom.lastTask, 'custom-module-1');
  assert.equal(resCustom.statuses['custom-module-1'], 'done');

  // Empty string or falsy lastTask
  const emptyLast = { version: 1, statuses: {}, lastTask: '' };
  assert.equal(migrateProgressV1ToV2(emptyLast, []).lastTask, null);
  assert.equal(migrateProgressV1ToV2(emptyLast, allTaskIds).lastTask, null);
});

test('CHALLENGER STRESS 1.5: migrateProgressV1ToV2 ignores invalid status strings silently', () => {
  const dirtyV1 = {
    version: 1,
    statuses: {
      [allTaskIds[0]]: 'done',
      [allTaskIds[1]]: 'finished', // invalid
      [allTaskIds[2]]: 'in-progress', // invalid
      [allTaskIds[3]]: 123, // invalid
      [allTaskIds[4]]: null, // invalid
    },
  };
  const res = migrateProgressV1ToV2(dirtyV1, allTaskIds);
  assert.equal(res.statuses[allTaskIds[0]], 'done');
  assert.equal(res.statuses[allTaskIds[1]], undefined);
  assert.equal(res.statuses[allTaskIds[2]], undefined);
  assert.equal(res.statuses[allTaskIds[3]], undefined);
  assert.equal(res.statuses[allTaskIds[4]], undefined);
});

// -----------------------------------------------------------------------------
// SUITE 2: Boundary Inputs & Malicious Payloads Stress Tests
// -----------------------------------------------------------------------------
test('CHALLENGER STRESS 2.1: Prototype pollution resistance in statuses and checkedTodos', () => {
  const pollutionPayloads = [
    JSON.parse('{"version":2,"roadmapId":"hcmus-cs","statuses":{"__proto__":"done"}}'),
    JSON.parse('{"version":2,"roadmapId":"hcmus-cs","statuses":{"constructor":"done"}}'),
    JSON.parse('{"version":2,"roadmapId":"hcmus-cs","statuses":{"toString":"done"}}'),
    JSON.parse('{"version":2,"roadmapId":"hcmus-cs","statuses":{},"checkedTodos":{"__proto__":[0,1]}}'),
    JSON.parse('{"version":2,"roadmapId":"hcmus-cs","statuses":{},"checkedTodos":{"constructor":[0,1]}}'),
  ];

  for (const payload of pollutionPayloads) {
    const res = validateProgress(payload, allTaskIds);
    // Ensure prototype has not been polluted with unexpected properties
    assert.equal(Object.prototype.polluted, undefined);
    assert.equal(Object.prototype.admin, undefined);
    assert.equal(Object.prototype[0], undefined);
    // Res data statuses must not have prototype keys as own properties
    assert.equal(Object.hasOwn(res.data.statuses, '__proto__'), false);
    assert.equal(Object.hasOwn(res.data.statuses, 'constructor'), false);
    assert.equal(Object.hasOwn(res.data.statuses, 'toString'), false);
    assert.equal(Object.keys(res.data.statuses).includes('__proto__'), false);
    assert.equal(Object.keys(res.data.statuses).includes('constructor'), false);
    assert.equal(Object.keys(res.data.statuses).includes('toString'), false);
  }
});

test('CHALLENGER STRESS 2.2: Malicious status value cannot invoke inherited Object.prototype properties', () => {
  for (const prototypeProp of ['toString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf']) {
    const payload = {
      version: 2,
      roadmapId: ROADMAP_ID,
      statuses: { [allTaskIds[0]]: prototypeProp },
    };
    assert.throws(
      () => validateProgress(payload, allTaskIds),
      /Tệp chứa trạng thái không hợp lệ/i,
      `Status value "${prototypeProp}" must be rejected as invalid`
    );
  }
});

test('CHALLENGER STRESS 2.3: validateProgress rejects non-object or corrupt payloads', () => {
  const rejects = [
    null,
    undefined,
    '',
    'not a json object',
    100,
    true,
    false,
    [],
    [1, 2, 3],
    {},
    { version: 2 },
    { roadmapId: ROADMAP_ID },
    { version: 2, roadmapId: 'other-roadmap', statuses: {} },
    { version: 2, roadmapId: ROADMAP_ID, statuses: 'not-an-obj' },
    { version: 2, roadmapId: ROADMAP_ID, statuses: null },
    { version: 2, roadmapId: ROADMAP_ID, statuses: [] },
  ];

  for (const r of rejects) {
    assert.throws(
      () => validateProgress(r, allTaskIds),
      /Tệp không phải bản sao lưu của roadmap này/i,
      `Must throw on invalid payload: ${JSON.stringify(r)}`
    );
  }
});

test('CHALLENGER STRESS 2.4: Version boundary conditions in validateProgress', () => {
  for (const badVer of [0, 3, -1, 1.5, '1', '2', NaN, Infinity, null, undefined]) {
    const payload = {
      version: badVer,
      roadmapId: ROADMAP_ID,
      statuses: {},
    };
    assert.throws(
      () => validateProgress(payload, allTaskIds),
      /Tệp không phải bản sao lưu của roadmap này/i
    );
  }

  // Exactly version 1 and version 2 must be accepted
  assert.ok(validateProgress({ version: 1, roadmapId: ROADMAP_ID, statuses: {} }, allTaskIds));
  assert.ok(validateProgress({ version: 2, roadmapId: ROADMAP_ID, statuses: {} }, allTaskIds));
});

test('CHALLENGER STRESS 2.5: checkedTodos boundary sanitization under extreme inputs', () => {
  const extremePayload = {
    version: 2,
    roadmapId: ROADMAP_ID,
    statuses: { [allTaskIds[0]]: 'learning', [allTaskIds[1]]: 'done' },
    checkedTodos: {
      [allTaskIds[0]]: [
        0,
        1,
        2,
        -1, // negative
        -99, // negative
        1.5, // float
        3.14159, // float
        '0', // string
        '2', // string
        null, // null
        undefined, // undefined
        NaN, // NaN
        Infinity, // Infinity
        {}, // object
        [], // nested array
        1000, // large valid integer
      ],
      [allTaskIds[1]]: 'not-an-array',
      [allTaskIds[2]]: null,
      [allTaskIds[3]]: 42,
      'unknown-task-99': [0, 1, 2],
    },
  };

  const res = validateProgress(extremePayload, allTaskIds);
  // Task 0: only non-negative integers must survive
  assert.deepEqual(res.data.checkedTodos[allTaskIds[0]], [0, 1, 2, 1000]);
  // Task 1, 2, 3: non-array entries must be discarded
  assert.equal(res.data.checkedTodos[allTaskIds[1]], undefined);
  assert.equal(res.data.checkedTodos[allTaskIds[2]], undefined);
  assert.equal(res.data.checkedTodos[allTaskIds[3]], undefined);
  // Unknown task ID: must be omitted
  assert.equal(res.data.checkedTodos['unknown-task-99'], undefined);
});

test('CHALLENGER STRESS 2.6: checkedTodos non-object root is sanitized cleanly', () => {
  for (const badRoot of ['invalid', 123, null, true, [1, 2, 3]]) {
    const payload = {
      version: 2,
      roadmapId: ROADMAP_ID,
      statuses: {},
      checkedTodos: badRoot,
    };
    const res = validateProgress(payload, allTaskIds);
    assert.deepEqual(res.data.checkedTodos, {});
  }
});

test('CHALLENGER STRESS 2.7: activeTrackId and filterStatus boundary sanitization', () => {
  // Non-string activeTrackId falls back to 'all'
  for (const badTrack of [123, null, undefined, true, [], {}]) {
    const payload = {
      version: 2,
      roadmapId: ROADMAP_ID,
      statuses: {},
      activeTrackId: badTrack,
    };
    const res = validateProgress(payload, allTaskIds);
    assert.equal(res.data.activeTrackId, 'all');
  }

  // String activeTrackId is preserved
  const validTrackPayload = {
    version: 2,
    roadmapId: ROADMAP_ID,
    statuses: {},
    activeTrackId: 'track-3',
  };
  assert.equal(validateProgress(validTrackPayload, allTaskIds).data.activeTrackId, 'track-3');

  // filterStatus accepts only 'all', 'todo', 'learning', 'done', 'deferred'
  for (const validStatus of ['all', ...validStatuses]) {
    const res = validateProgress({ version: 2, roadmapId: ROADMAP_ID, statuses: {}, filterStatus: validStatus }, allTaskIds);
    assert.equal(res.data.filterStatus, validStatus);
  }

  // Invalid filterStatus falls back to 'all'
  for (const invalidStatus of ['unknown', 'inprogress', 123, null, undefined, false, {}]) {
    const res = validateProgress({ version: 2, roadmapId: ROADMAP_ID, statuses: {}, filterStatus: invalidStatus }, allTaskIds);
    assert.equal(res.data.filterStatus, 'all');
  }
});

// -----------------------------------------------------------------------------
// SUITE 3: Storage Engine Integration & Resilience (loadProgressFromStorage)
// -----------------------------------------------------------------------------
test('CHALLENGER STRESS 3.1: loadProgressFromStorage handles null, undefined, or empty storage', () => {
  assert.deepEqual(loadProgressFromStorage(null, allTaskIds), { data: emptyProgress(), migrated: false, error: '' });
  assert.deepEqual(loadProgressFromStorage(undefined, allTaskIds), { data: emptyProgress(), migrated: false, error: '' });

  const emptyStore = new Map();
  const mockStorage = { getItem: k => emptyStore.get(k) || null, setItem: (k, v) => emptyStore.set(k, v) };
  const loaded = loadProgressFromStorage(mockStorage, allTaskIds);
  assert.deepEqual(loaded.data, emptyProgress());
  assert.equal(loaded.migrated, false);
  assert.equal(loaded.error, '');
});

test('CHALLENGER STRESS 3.2: loadProgressFromStorage handles corrupted JSON in v2 key without crashing', () => {
  const store = new Map();
  store.set(STORAGE_KEY_V2, '{{{ corrupt unparseable json ...');
  const mockStorage = { getItem: k => store.get(k) || null, setItem: (k, v) => store.set(k, v) };

  const loaded = loadProgressFromStorage(mockStorage, allTaskIds);
  assert.equal(loaded.migrated, false);
  assert.deepEqual(loaded.data, emptyProgress());
  assert.ok(loaded.error.length > 0, 'Must provide user-facing error message');
  assert.ok(loaded.error.includes('tiến độ'), 'Error message should be in Vietnamese');
});

test('CHALLENGER STRESS 3.3: loadProgressFromStorage auto-migration flow from v1 to v2', () => {
  const store = new Map();
  const v1Data = {
    version: 1,
    roadmapId: ROADMAP_ID,
    statuses: { [allTaskIds[0]]: 'done', [allTaskIds[1]]: 'learning' },
    lastTask: allTaskIds[1],
  };
  store.set(STORAGE_KEY_V1, JSON.stringify(v1Data));

  const mockStorage = {
    getItem: k => store.get(k) || null,
    setItem: (k, v) => store.set(k, String(v)),
  };

  // First load: migrates v1 to v2 and persists to STORAGE_KEY_V2
  const first = loadProgressFromStorage(mockStorage, allTaskIds);
  assert.equal(first.migrated, true);
  assert.equal(first.data.version, 2);
  assert.equal(first.data.statuses[allTaskIds[0]], 'done');
  assert.equal(first.data.statuses[allTaskIds[1]], 'learning');
  assert.equal(first.data.lastTask, allTaskIds[1]);

  // Check storage key was written
  assert.ok(store.has(STORAGE_KEY_V2));
  const storedV2 = JSON.parse(store.get(STORAGE_KEY_V2));
  assert.equal(storedV2.version, 2);

  // Second load: reads v2 directly with migrated: false
  const second = loadProgressFromStorage(mockStorage, allTaskIds);
  assert.equal(second.migrated, false);
  assert.equal(second.data.statuses[allTaskIds[0]], 'done');
});

test('CHALLENGER STRESS 3.4: loadProgressFromStorage handles write failure during migration gracefully', () => {
  const store = new Map();
  const v1Data = {
    version: 1,
    roadmapId: ROADMAP_ID,
    statuses: { [allTaskIds[0]]: 'done' },
    lastTask: allTaskIds[0],
  };
  store.set(STORAGE_KEY_V1, JSON.stringify(v1Data));

  // Storage that throws on setItem (e.g. QuotaExceededError)
  const throwingStorage = {
    getItem: k => store.get(k) || null,
    setItem: () => {
      throw new Error('QuotaExceededError');
    },
  };

  const loaded = loadProgressFromStorage(throwingStorage, allTaskIds);
  assert.equal(loaded.migrated, true);
  assert.equal(loaded.data.version, 2);
  assert.equal(loaded.data.statuses[allTaskIds[0]], 'done');
  assert.equal(loaded.error, '', 'Should still succeed in-memory when setItem fails');
});

test('CHALLENGER STRESS 3.5: loadProgressFromStorage handles corrupted v1 JSON safely', () => {
  const store = new Map();
  store.set(STORAGE_KEY_V1, 'BROKEN_V1_JSON');
  const mockStorage = { getItem: k => store.get(k) || null, setItem: (k, v) => store.set(k, v) };

  const loaded = loadProgressFromStorage(mockStorage, allTaskIds);
  assert.equal(loaded.migrated, false);
  assert.deepEqual(loaded.data, emptyProgress());
  assert.ok(loaded.error.length > 0);
});

// -----------------------------------------------------------------------------
// SUITE 4: Round-Trip Import / Export & Serialization
// -----------------------------------------------------------------------------
test('CHALLENGER STRESS 4.1: Round-trip import/export with empty progress', () => {
  const empty = emptyProgress();
  const serialized = JSON.stringify(empty);
  const parsed = JSON.parse(serialized);
  const validated = validateProgress(parsed, allTaskIds);

  assert.equal(validated.ignored, 0);
  assert.deepEqual(validated.data, empty);
});

test('CHALLENGER STRESS 4.2: Round-trip import/export with all 355 tasks populated', () => {
  const statuses = {};
  const checkedTodos = {};
  for (let i = 0; i < tasks.length; i++) {
    const t = tasks[i];
    statuses[t.id] = validStatuses[i % validStatuses.length];
    checkedTodos[t.id] = [0, 1];
  }

  const fullData = {
    version: 2,
    roadmapId: ROADMAP_ID,
    statuses,
    lastTask: tasks[100].id,
    checkedTodos,
    activeTrackId: 'track-2',
    filterStatus: 'learning',
  };

  // Simulate UI Export with metadata
  const exportedPayload = {
    ...fullData,
    exportedAt: new Date().toISOString(),
  };

  const serialized = JSON.stringify(exportedPayload, null, 2);
  const parsed = JSON.parse(serialized);
  const validated = validateProgress(parsed, allTaskIds);

  assert.equal(validated.ignored, 0);
  assert.equal(validated.data.version, 2);
  assert.equal(validated.data.roadmapId, ROADMAP_ID);
  assert.equal(validated.data.lastTask, tasks[100].id);
  assert.equal(validated.data.activeTrackId, 'track-2');
  assert.equal(validated.data.filterStatus, 'learning');
  assert.equal(Object.keys(validated.data.statuses).length, tasks.length);
  assert.equal(Object.keys(validated.data.checkedTodos).length, tasks.length);

  for (const t of tasks) {
    assert.equal(validated.data.statuses[t.id], statuses[t.id]);
    assert.deepEqual(validated.data.checkedTodos[t.id], [0, 1]);
  }
});

test('CHALLENGER STRESS 4.3: JSON serialize/parse stress benchmark under 100 iterations', () => {
  const statuses = Object.fromEntries(allTaskIds.map(id => [id, 'done']));
  const checkedTodos = Object.fromEntries(allTaskIds.map(id => [id, [0, 1, 2]]));
  const payload = {
    version: 2,
    roadmapId: ROADMAP_ID,
    statuses,
    lastTask: allTaskIds[354],
    checkedTodos,
    activeTrackId: 'track-6',
    filterStatus: 'done',
  };

  const start = performance.now();
  for (let i = 0; i < 100; i++) {
    const json = JSON.stringify(payload);
    const parsed = JSON.parse(json);
    const res = validateProgress(parsed, allTaskIds);
    assert.equal(res.ignored, 0);
  }
  const duration = performance.now() - start;
  assert.ok(duration < 500, `100 iterations of serialize/validate took ${duration.toFixed(2)}ms, must be < 500ms`);
});

// -----------------------------------------------------------------------------
// SUITE 5: Task State Machine & Resumption Invariants (nextTask)
// -----------------------------------------------------------------------------
test('CHALLENGER STRESS 5.1: nextTask prioritizes learning status regardless of task order', () => {
  // Task 100 is learning, even though task 0 is todo
  const statuses = {
    [tasks[0].id]: 'todo',
    [tasks[50].id]: 'todo',
    [tasks[100].id]: 'learning',
  };
  assert.equal(nextTask(tasks, statuses).id, tasks[100].id);
});

test('CHALLENGER STRESS 5.2: nextTask picks first learning task if multiple are learning', () => {
  const statuses = {
    [tasks[10].id]: 'learning',
    [tasks[50].id]: 'learning',
  };
  assert.equal(nextTask(tasks, statuses).id, tasks[10].id);
});

test('CHALLENGER STRESS 5.3: nextTask selects first unfinished required task when no task is learning', () => {
  const statuses = {
    [tasks[0].id]: 'done',
    [tasks[1].id]: 'done',
  };
  assert.equal(nextTask(tasks, statuses).id, tasks.find(t => !t.optional).id);
});

test('CHALLENGER STRESS 5.4: nextTask skips optional deferred tasks but resumes required deferred tasks', () => {
  const optionalTask = tasks.find(t => t.optional);
  assert.ok(optionalTask, 'Curriculum must include at least one optional task');

  const optIndex = tasks.indexOf(optionalTask);
  const nextRequired = tasks.slice(optIndex + 1).find(t => !t.optional);
  assert.ok(nextRequired, 'Must have a required task after optional task');

  // Mark all tasks prior to optionalTask as done
  const statuses = {};
  for (let i = 0; i < optIndex; i++) {
    statuses[tasks[i].id] = 'done';
  }
  // Optional task is deferred
  statuses[optionalTask.id] = 'deferred';

  // nextTask must skip the optional task and pick next unfinished required task
  const chosen = nextTask(tasks, statuses);
  assert.notEqual(chosen.id, optionalTask.id, 'Optional deferred task must be skipped');
  assert.equal(chosen.id, nextRequired.id);

  // Contrast: if a required task is deferred, nextTask does NOT skip it
  const requiredTask = tasks.find(t => !t.optional);
  const reqStatuses = { [requiredTask.id]: 'deferred' };
  assert.equal(nextTask(tasks, reqStatuses).id, requiredTask.id, 'Required deferred task must NOT be skipped');
});

test('CHALLENGER STRESS 5.5: nextTask returns tasks[0] safely when 100% of tasks are done', () => {
  const allDoneStatuses = Object.fromEntries(allTaskIds.map(id => [id, 'done']));
  const res = nextTask(tasks, allDoneStatuses);
  assert.equal(res.id, tasks[0].id);
});
