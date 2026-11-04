import test from 'node:test';
import assert from 'node:assert/strict';
import { tracks, chapters, tasks, edition, capstoneProjects, chapterToTrackId } from '../src/curriculum.js';

/* ========================================================================== */
/* CHALLENGER 1 EMPIRICAL STRESS TEST HARNESS                                  */
/* Milestone 1: Curriculum Graph, DAG Invariants, Chapter & Track Verification*/
/* ========================================================================== */

// Extract common task and chapter structures
const allTaskIds = tasks.map(t => t.id);
const taskIdSet = new Set(allTaskIds);
const allChapterIds = chapters.map(c => c.id);
const validTrackIds = ['track-0', 'track-1', 'track-2', 'track-3', 'track-4', 'track-5', 'track-6'];

// Comprehensive canonical prerequisite chains combining foundational, system, and cross-track flows
const canonicalPrerequisiteChains = [
  // Track 0 -> Track 1 (C++ Foundations -> OOP)
  ['cpp-types', 'cpp-functions'],
  ['cpp-functions', 'oop-class'],
  ['oop-class', 'oop-inheritance'],
  ['oop-inheritance', 'oop-virtual'],
  ['cpp-pointers', 'oop-resource'],
  ['oop-resource', 'cpp-copy'],
  ['cpp-copy', 'cpp-smart'],

  // Track 4 -> Track 2 (Discrete Math -> DSA Foundations)
  ['math-logic', 'math-proofs'],
  ['math-proofs', 'math-induction'],
  ['math-induction', 'dsa-complexity'],
  ['dsa-complexity', 'algo-recursion'],
  ['algo-recursion', 'dsa-tree'],
  ['dsa-tree', 'dsa-bst'],
  ['dsa-bst', 'dsa-balanced'],
  ['dsa-vector', 'dsa-heap'],
  ['dsa-heap', 'algo-heapsort'],

  // Track 2 (Data Structures -> Graph Algorithms)
  ['dsa-queue', 'graph-bfs'],
  ['dsa-stack', 'graph-dfs'],
  ['graph-bfs', 'graph-dijkstra'],
  ['dsa-heap', 'graph-dijkstra'],
  ['graph-relax', 'graph-dijkstra'],
  ['graph-dsu', 'graph-kruskal'],
  ['graph-mst', 'graph-prim'],

  // Track 2 (Dynamic Programming core sequences)
  ['algo-dp', 'algo-knapsack'],
  ['algo-dp', 'algo-sequence-dp'],
  ['algo-dp', 'algo-edit-distance'],
  ['algo-dp', 'algo-lis'],
  ['algo-bitmask', 'range-fenwick'],

  // Track 3 (Computer Systems & Networking)
  ['net-layers', 'net-ip'],
  ['net-ip', 'net-udp-tcp'],
  ['net-udp-tcp', 'net-http'],

  // Track 4 (Linear Algebra & Probability/Statistics)
  ['linear-vectors', 'linear-transform'],
  ['linear-transform', 'linear-eigen'],
  ['linear-projection', 'ml-linear'],
  ['calculus-gradient', 'ml-linear'],
  ['prob-events', 'prob-bayes'],
  ['prob-bayes', 'prob-random'],
  ['prob-random', 'prob-distributions'],
  ['prob-random', 'ml-metrics'],
  ['prob-distributions', 'stats-sampling'],
  ['stats-sampling', 'stats-testing'],

  // Track 5 (Developer Tooling & Linux)
  ['tools-shell', 'tools-pipes'],
  ['tools-pipes', 'tools-permissions'],
  ['tools-permissions', 'tools-build'],
  ['git-first', 'git-branch'],
  ['git-branch', 'git-remote'],

  // Track 6 (Specialization: Python, Web, DB, ML, Capstone)
  ['py-syntax', 'py-collections'],
  ['py-collections', 'py-functions'],
  ['py-numpy', 'ml-linear'],
  ['web-html', 'web-css'],
  ['web-css', 'web-js'],
  ['web-js', 'web-react'],
  ['db-relations', 'api-database'],
  ['db-transaction', 'api-database'],
  ['api-fastapi', 'api-release'],
  ['pl-lexer', 'pl-parser'],
  ['ml-problem', 'ml-split'],
  ['ml-split', 'ml-linear'],
  ['ml-linear', 'ml-logistic'],
  ['cap-problem', 'cap-spec'],
  ['cap-spec', 'cap-design'],
  ['cap-design', 'cap-build'],
  ['cap-quality', 'cap-deploy'],
];

/* -------------------------------------------------------------------------- */
/* 1. CYCLE DETECTION & 3-COLOR DFS ORACLE                                    */
/* -------------------------------------------------------------------------- */

test('CHALLENGER ORACLE: 3-color DFS correctly detects synthetic cycles', () => {
  // Oracle verification: Prove our DFS cycle detector catches cycles
  const cyclicAdj = new Map([
    ['A', ['B']],
    ['B', ['C']],
    ['C', ['A']], // Cycle: A -> B -> C -> A
    ['D', ['E']],
    ['E', []]
  ]);

  const color = new Map();
  for (const node of cyclicAdj.keys()) color.set(node, 0);

  let detectedCycle = null;
  function dfs(u, path = []) {
    color.set(u, 1);
    path.push(u);
    for (const v of cyclicAdj.get(u) || []) {
      if (color.get(v) === 1) {
        detectedCycle = [...path.slice(path.indexOf(v)), v];
        return true;
      }
      if (color.get(v) === 0) {
        if (dfs(v, path)) return true;
      }
    }
    path.pop();
    color.set(u, 2);
    return false;
  }

  for (const node of cyclicAdj.keys()) {
    if (color.get(node) === 0 && dfs(node)) break;
  }

  assert.ok(detectedCycle !== null, 'DFS oracle must detect synthetic cycle');
  assert.deepEqual(detectedCycle, ['A', 'B', 'C', 'A'], 'DFS oracle must extract exact cycle path');
});

test('EMPIRICAL STRESS TEST 1: Curriculum DAG is strictly acyclic under 3-color DFS', () => {
  const adj = new Map();
  for (const id of allTaskIds) adj.set(id, []);

  // 1. Explicit prerequisites if declared on task objects
  for (const task of tasks) {
    if (Array.isArray(task.prerequisites)) {
      for (const prereqId of task.prerequisites) {
        if (adj.has(prereqId)) {
          adj.get(prereqId).push(task.id);
        }
      }
    }
  }

  // 2. Add all canonical prerequisite chains
  for (const [before, after] of canonicalPrerequisiteChains) {
    if (adj.has(before) && adj.has(after)) {
      adj.get(before).push(after);
    }
  }

  // 3-color DFS: 0 = White (unvisited), 1 = Gray (visiting/in recursion stack), 2 = Black (finished)
  const color = new Map(allTaskIds.map(id => [id, 0]));
  let cyclePath = null;

  function dfs(u, path = []) {
    color.set(u, 1);
    path.push(u);
    for (const v of adj.get(u) || []) {
      if (color.get(v) === 1) {
        cyclePath = [...path.slice(path.indexOf(v)), v];
        return true;
      }
      if (color.get(v) === 0) {
        if (dfs(v, path)) return true;
      }
    }
    path.pop();
    color.set(u, 2);
    return false;
  }

  for (const id of allTaskIds) {
    if (color.get(id) === 0) {
      if (dfs(id)) break;
    }
  }

  assert.equal(cyclePath, null, `Adversarial 3-color DFS detected a cycle: ${cyclePath?.join(' -> ')}`);

  // Verify all nodes transitioned to Black (2)
  for (const id of allTaskIds) {
    assert.equal(color.get(id), 2, `Node ${id} did not finish traversal (color: ${color.get(id)})`);
  }
});

test('EMPIRICAL STRESS TEST 2: Combined Intra-Chapter Sequential Edges + Prerequisite Chains Remain Acyclic', () => {
  // Stress-test: what happens if every task within a chapter strictly precedes the next task (t_i -> t_{i+1})?
  // If a cross-track prerequisite points from a later chapter to an earlier chapter, this will create a cycle!
  const adj = new Map();
  for (const id of allTaskIds) adj.set(id, []);

  // Intra-chapter sequential edges
  for (let i = 0; i < tasks.length - 1; i++) {
    const tCurrent = tasks[i];
    const tNext = tasks[i + 1];
    if (tCurrent.chapter === tNext.chapter) {
      adj.get(tCurrent.id).push(tNext.id);
    }
  }

  // Cross-track / canonical prerequisites
  for (const [before, after] of canonicalPrerequisiteChains) {
    if (adj.has(before) && adj.has(after)) {
      adj.get(before).push(after);
    }
  }

  const color = new Map(allTaskIds.map(id => [id, 0]));
  let cycle = null;

  function dfs(u, path = []) {
    color.set(u, 1);
    path.push(u);
    for (const v of adj.get(u) || []) {
      if (color.get(v) === 1) {
        cycle = [...path.slice(path.indexOf(v)), v];
        return true;
      }
      if (color.get(v) === 0) {
        if (dfs(v, path)) return true;
      }
    }
    path.pop();
    color.set(u, 2);
    return false;
  }

  for (const id of allTaskIds) {
    if (color.get(id) === 0) {
      if (dfs(id)) break;
    }
  }

  assert.equal(cycle, null, `Combined intra-chapter + prerequisite graph contains a cycle: ${cycle?.join(' -> ')}`);
});

/* -------------------------------------------------------------------------- */
/* 2. TOPOLOGICAL SORTING INVARIANT VERIFICATION                               */
/* -------------------------------------------------------------------------- */

test('EMPIRICAL STRESS TEST 3: Topological sorting invariant (index(prereq) < index(dependent))', () => {
  const indexMap = new Map(allTaskIds.map((id, idx) => [id, idx]));

  // Check canonical pairs
  for (const [prereq, dependent] of canonicalPrerequisiteChains) {
    assert.ok(indexMap.has(prereq), `Prerequisite ${prereq} missing from curriculum tasks`);
    assert.ok(indexMap.has(dependent), `Dependent task ${dependent} missing from curriculum tasks`);

    const idxPrereq = indexMap.get(prereq);
    const idxDependent = indexMap.get(dependent);

    assert.ok(
      idxPrereq < idxDependent,
      `Topological violation: Prerequisite '${prereq}' (idx ${idxPrereq}) must precede dependent '${dependent}' (idx ${idxDependent})`
    );
  }

  // Check any explicit prerequisites declared in task objects
  for (const task of tasks) {
    if (Array.isArray(task.prerequisites)) {
      const idxTask = indexMap.get(task.id);
      for (const p of task.prerequisites) {
        assert.ok(indexMap.has(p), `Task ${task.id} has non-existent prerequisite ${p}`);
        const idxP = indexMap.get(p);
        assert.ok(
          idxP < idxTask,
          `Topological violation: Explicit prerequisite '${p}' (idx ${idxP}) must precede task '${task.id}' (idx ${idxTask})`
        );
      }
    }
  }
});

test('EMPIRICAL STRESS TEST 4: Kahn algorithm computes complete topological sort of full dependency graph', () => {
  const inDegree = new Map();
  const adj = new Map();

  for (const id of allTaskIds) {
    inDegree.set(id, 0);
    adj.set(id, []);
  }

  for (const [u, v] of canonicalPrerequisiteChains) {
    if (adj.has(u) && adj.has(v)) {
      adj.get(u).push(v);
      inDegree.set(v, inDegree.get(v) + 1);
    }
  }

  // Also include explicit task prerequisites
  for (const t of tasks) {
    if (Array.isArray(t.prerequisites)) {
      for (const p of t.prerequisites) {
        if (adj.has(p) && adj.has(t.id)) {
          adj.get(p).push(t.id);
          inDegree.set(t.id, inDegree.get(t.id) + 1);
        }
      }
    }
  }

  // Kahn's algorithm
  const queue = [];
  for (const [id, deg] of inDegree.entries()) {
    if (deg === 0) queue.push(id);
  }

  const topoOrder = [];
  while (queue.length > 0) {
    const u = queue.shift();
    topoOrder.push(u);

    for (const v of adj.get(u)) {
      inDegree.set(v, inDegree.get(v) - 1);
      if (inDegree.get(v) === 0) {
        queue.push(v);
      }
    }
  }

  assert.equal(
    topoOrder.length,
    allTaskIds.length,
    `Kahn's algorithm failed to resolve all vertices (${topoOrder.length} / ${allTaskIds.length}). Remaining vertices have cyclic dependencies.`
  );
});

/* -------------------------------------------------------------------------- */
/* 3. CHAPTER CONTIGUITY INVARIANT VERIFICATION                                */
/* -------------------------------------------------------------------------- */

test('EMPIRICAL STRESS TEST 5: Chapter contiguity across all 27 chapters', () => {
  assert.equal(chapters.length, 27, 'Curriculum must have exactly 27 chapters');

  for (const ch of chapters) {
    const taskIndices = [];
    tasks.forEach((t, idx) => {
      if (t.chapter === ch.id) taskIndices.push(idx);
    });

    assert.ok(taskIndices.length > 0, `Chapter ${ch.id} has 0 tasks`);

    const minIdx = Math.min(...taskIndices);
    const maxIdx = Math.max(...taskIndices);
    const span = maxIdx - minIdx + 1;

    // Invariant: all tasks in chapter must form an unbroken contiguous block in tasks array
    assert.equal(
      span,
      taskIndices.length,
      `Chapter '${ch.id}' tasks are not contiguous! Indices span ${minIdx}..${maxIdx} (length ${span}), but count is ${taskIndices.length}`
    );

    // Verify every element in this slice belongs to the chapter
    const slice = tasks.slice(minIdx, maxIdx + 1);
    for (const t of slice) {
      assert.equal(t.chapter, ch.id, `Contiguity breach: Task ${t.id} in chapter block has chapter ${t.chapter}, expected ${ch.id}`);
    }
  }
});

test('EMPIRICAL STRESS TEST 6: Monotonic zero-padded 3-digit task numbering (001..355)', () => {
  assert.ok(tasks.length >= 355, `Expected at least 355 tasks, got ${tasks.length}`);
  for (let i = 0; i < tasks.length; i++) {
    const expected = String(i + 1).padStart(3, '0');
    assert.equal(
      tasks[i].number,
      expected,
      `Task at index ${i} ('${tasks[i].id}') has number '${tasks[i].number}', expected '${expected}'`
    );
  }
});

/* -------------------------------------------------------------------------- */
/* 4. TRACK MAPPING COMPLETENESS (TRACKS 0..6)                                 */
/* -------------------------------------------------------------------------- */

test('EMPIRICAL STRESS TEST 7: 100% of tasks have a valid trackId strictly in tracks 0..6', () => {
  const validSet = new Set(validTrackIds);
  const trackTaskCounts = new Map(validTrackIds.map(id => [id, 0]));

  for (let i = 0; i < tasks.length; i++) {
    const t = tasks[i];
    assert.ok(typeof t.trackId === 'string' && t.trackId.length > 0, `Task ${t.id} (idx ${i}) has missing or empty trackId`);
    assert.ok(
      validSet.has(t.trackId),
      `Task ${t.id} (idx ${i}) has invalid trackId '${t.trackId}' (expected one of ${validTrackIds.join(', ')})`
    );

    // Check trackId matches chapter's trackId
    const expectedTrackId = chapterToTrackId[t.chapter];
    assert.ok(expectedTrackId, `Chapter ${t.chapter} has no mapped trackId in chapterToTrackId`);
    assert.equal(
      t.trackId,
      expectedTrackId,
      `Task ${t.id} trackId '${t.trackId}' does not match chapter trackId '${expectedTrackId}'`
    );

    trackTaskCounts.set(t.trackId, trackTaskCounts.get(t.trackId) + 1);
  }

  // Confirm all 7 tracks have non-zero task distribution
  for (const trackId of validTrackIds) {
    const count = trackTaskCounts.get(trackId);
    assert.ok(count > 0, `Track ${trackId} has zero assigned tasks!`);
  }

  // Log breakdown for evidence
  const totalTasks = tasks.length;
  let sum = 0;
  for (const trackId of validTrackIds) {
    sum += trackTaskCounts.get(trackId);
  }
  assert.equal(sum, totalTasks, 'Sum of tasks across tracks 0..6 must equal total tasks');
});

test('EMPIRICAL STRESS TEST 8: Track definitions, chapter distribution and capstone projects', () => {
  assert.equal(tracks.length, 7, 'Expected exactly 7 tracks');
  for (let i = 0; i < 7; i++) {
    const tr = tracks[i];
    assert.equal(tr.trackNumber, i);
    assert.equal(tr.id, `track-${i}`);
    assert.ok(tr.chapterIds.length > 0, `Track ${tr.id} must contain at least 1 chapter`);

    // Verify all chapters in tr.chapterIds map back to this track
    for (const chId of tr.chapterIds) {
      assert.equal(chapterToTrackId[chId], tr.id);
      const ch = chapters.find(c => c.id === chId);
      assert.ok(ch, `Chapter ${chId} in track ${tr.id} not found in chapters`);
      assert.equal(ch.trackId, tr.id);
    }
  }

  // 5 Capstone Mini-Projects
  assert.equal(capstoneProjects.length, 5, 'Expected exactly 5 capstone projects');
  for (const proj of capstoneProjects) {
    assert.ok(validTrackIds.includes(proj.trackId), `Project ${proj.id} has invalid trackId ${proj.trackId}`);
    for (const taskId of proj.relatedTaskIds) {
      assert.ok(taskIdSet.has(taskId), `Project ${proj.id} references non-existent task ${taskId}`);
    }
  }
});

/* -------------------------------------------------------------------------- */
/* 5. INTEGRITY & DEFENSIVE BOUNDARY CONDITIONS                                */
/* -------------------------------------------------------------------------- */

test('EMPIRICAL STRESS TEST 9: Referential integrity & No Self-Loops or Duplicate IDs', () => {
  // 1. Task ID uniqueness
  assert.equal(taskIdSet.size, allTaskIds.length, 'Task IDs must be strictly unique (no duplicates)');

  // 2. Chapter ID uniqueness
  const chapterIdSet = new Set(allChapterIds);
  assert.equal(chapterIdSet.size, allChapterIds.length, 'Chapter IDs must be strictly unique');

  // 3. Track ID uniqueness
  const trackIdSet = new Set(tracks.map(t => t.id));
  assert.equal(trackIdSet.size, tracks.length, 'Track IDs must be strictly unique');

  // 4. No self-loops in prerequisites or review targets
  for (const t of tasks) {
    if (Array.isArray(t.prerequisites)) {
      for (const p of t.prerequisites) {
        assert.notEqual(t.id, p, `Self-loop detected: Task ${t.id} cannot be its own prerequisite`);
        assert.ok(taskIdSet.has(p), `Task ${t.id} has dangling prerequisite reference ${p}`);
      }
    }
    if (Array.isArray(t.reviewTargets)) {
      for (const r of t.reviewTargets) {
        assert.notEqual(t.id, r, `Self-loop detected: Task ${t.id} cannot be its own review target`);
        assert.ok(taskIdSet.has(r), `Task ${t.id} has dangling reviewTarget reference ${r}`);
      }
    }
  }

  // 5. Diagnostic entry tasks: exactly 9 entry tasks with valid reviewTargets
  const entryTasks = tasks.filter(t => t.id.startsWith('entry-'));
  assert.equal(entryTasks.length, 9, `Expected exactly 9 diagnostic entry tasks, found ${entryTasks.length}`);
  for (const entry of entryTasks) {
    assert.equal(entry.kind, 'Luyện');
    assert.equal(entry.diagnostic, true);
    assert.ok(Array.isArray(entry.reviewTargets) && entry.reviewTargets.length >= 2);
    for (const targetId of entry.reviewTargets) {
      assert.ok(taskIdSet.has(targetId), `Entry task ${entry.id} references missing target ${targetId}`);
    }
  }
});
