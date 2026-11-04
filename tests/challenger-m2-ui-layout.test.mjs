import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { tracks, chapters, tasks, edition, capstoneProjects, chapterToTrackId } from '../src/curriculum.js';
import {
  emptyProgress,
  labels,
  kindLabels,
  nextTask,
  STORAGE_KEY,
  STORAGE_KEY_V2,
  validateProgress,
  migrateProgressV1ToV2,
  loadProgressFromStorage,
} from '../src/progress.mjs';

/* ========================================================================== */
/* CHALLENGER 2 EMPIRICAL STRESS TEST HARNESS                                  */
/* Milestone 2: UI Canvas & Layout, Coordinates, Filter Combinatorics, Badges */
/* ========================================================================== */

// Exact pure filtering algorithm as implemented in src/main.jsx:215-223
function filterTasks(allTasks, { activeTrackId = 'all', filterStatus = 'all', filterKind = 'all', statuses = {} }) {
  return allTasks.filter(t => {
    if (activeTrackId !== 'all' && t.trackId !== activeTrackId) return false;
    const status = statuses[t.id] || 'todo';
    if (filterStatus !== 'all' && status !== filterStatus) return false;
    if (filterKind !== 'all' && t.kind !== filterKind) return false;
    return true;
  });
}

// Exact pure layout algorithm as implemented in src/main.jsx:226-370
function computeCanvasLayout(allTasks, allTracks, allChapters, { activeTrackId = 'all', filterStatus = 'all', filterKind = 'all', statuses = {}, selected = null }) {
  const visibleTasks = filterTasks(allTasks, { activeTrackId, filterStatus, filterKind, statuses });
  const nodeList = [];
  const edgeList = [];

  if (activeTrackId === 'all') {
    // 7-column layout across all tracks
    allTracks.forEach((track, colIdx) => {
      const colX = colIdx * 430;
      const trackTasks = visibleTasks.filter(t => t.trackId === track.id);
      const allTrackTasks = allTasks.filter(t => t.trackId === track.id);
      const doneTrackCount = allTrackTasks.filter(t => statuses[t.id] === 'done').length;

      // Header node
      nodeList.push({
        id: `track-header-${track.id}`,
        type: 'trackHeader',
        position: { x: colX, y: -90 },
        draggable: false,
        selectable: false,
        focusable: false,
        data: {
          track,
          taskCount: allTrackTasks.length,
          doneCount: doneTrackCount,
        },
      });

      // Tasks in track
      trackTasks.forEach((task, rowIdx) => {
        const taskChapter = allChapters.find(c => c.id === task.chapter);
        nodeList.push({
          id: task.id,
          type: 'task',
          position: { x: colX, y: rowIdx * 198 },
          draggable: false,
          selectable: false,
          focusable: false,
          data: {
            task,
            track,
            chapter: taskChapter,
            active: task.id === selected,
            status: statuses[task.id] || 'todo',
          },
        });
      });

      // Sequential edges within this track
      for (let i = 0; i < trackTasks.length - 1; i++) {
        edgeList.push({
          id: `edge-${trackTasks[i].id}->${trackTasks[i + 1].id}`,
          source: trackTasks[i].id,
          target: trackTasks[i + 1].id,
          type: 'straight',
          markerEnd: {
            type: 'arrowclosed',
            color: track.colorAccent || '#8c9b96',
            width: 14,
            height: 14,
          },
          style: {
            stroke: track.colorAccent || '#8c9b96',
            strokeWidth: 2,
          },
          selectable: false,
          focusable: false,
        });
      }
    });
  } else {
    // Single track layout
    const track = allTracks.find(t => t.id === activeTrackId) || allTracks[0];
    const trackTasks = visibleTasks.filter(t => t.trackId === track.id);
    const allTrackTasks = allTasks.filter(t => t.trackId === track.id);
    const doneTrackCount = allTrackTasks.filter(t => statuses[t.id] === 'done').length;

    nodeList.push({
      id: `track-header-${track.id}`,
      type: 'trackHeader',
      position: { x: 0, y: -90 },
      draggable: false,
      selectable: false,
      focusable: false,
      data: {
        track,
        taskCount: allTrackTasks.length,
        doneCount: doneTrackCount,
      },
    });

    trackTasks.forEach((task, rowIdx) => {
      const taskChapter = allChapters.find(c => c.id === task.chapter);
      nodeList.push({
        id: task.id,
        type: 'task',
        position: { x: 0, y: rowIdx * 198 },
        draggable: false,
        selectable: false,
        focusable: false,
        data: {
          task,
          track,
          chapter: taskChapter,
          active: task.id === selected,
          status: statuses[task.id] || 'todo',
        },
      });
    });

    for (let i = 0; i < trackTasks.length - 1; i++) {
      edgeList.push({
        id: `edge-${trackTasks[i].id}->${trackTasks[i + 1].id}`,
        source: trackTasks[i].id,
        target: trackTasks[i + 1].id,
        type: 'straight',
        markerEnd: {
          type: 'arrowclosed',
          color: track.colorAccent || '#8c9b96',
          width: 14,
          height: 14,
        },
        style: {
          stroke: track.colorAccent || '#8c9b96',
          strokeWidth: 2,
        },
        selectable: false,
        focusable: false,
      });
    }
  }

  return { nodes: nodeList, edges: edgeList, visibleTasks };
}

// Text normalization matching src/main.jsx:45-50
const normalize = text =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .toLowerCase();

/* ========================================================================== */
/* SUITE 1: 7-COLUMN ALL-TRACKS COORDINATE VERIFICATION                        */
/* ========================================================================== */

test('CHALLENGER 2: Verify main.jsx source code implements exact layout contracts', () => {
  const mainJsxPath = path.resolve('src/main.jsx');
  assert.ok(fs.existsSync(mainJsxPath), 'src/main.jsx must exist');
  const code = fs.readFileSync(mainJsxPath, 'utf8');

  // Verify column spacing constant (430 px) and vertical row spacing (198 px)
  assert.ok(code.includes('colIdx * 430'), 'Must contain 430px column offset formula');
  assert.ok(code.includes('rowIdx * 198'), 'Must contain 198px row offset formula');
  assert.ok(code.includes('y: -90'), 'Header nodes must be placed at y: -90');
  assert.ok(code.includes("activeTrackId === 'all'"), 'Must handle activeTrackId === all');
  assert.ok(code.includes('STORAGE_KEY_V2'), 'Must reference STORAGE_KEY_V2');

  // Verify Antigravity-style left & right sidebar collapse toggles
  assert.ok(code.includes('PanelLeft'), 'Must include PanelLeft toggle icon');
  assert.ok(code.includes('PanelRight'), 'Must include PanelRight toggle icon');
  assert.ok(code.includes('left-collapsed'), 'Must support left-collapsed workspace class');
  assert.ok(code.includes('right-collapsed'), 'Must support right-collapsed workspace class');
  assert.ok(code.includes('toggleLeftSidebar'), 'Must define toggleLeftSidebar handler');
  assert.ok(code.includes('toggleRightSidebar'), 'Must define toggleRightSidebar handler');

  // Verify keyboard shortcut guard against inputs/textareas/dialogs
  assert.ok(
    code.includes("tag === 'INPUT' || tag === 'TEXTAREA'"),
    'Keyboard shortcuts must ignore events inside INPUT/TEXTAREA elements'
  );

  // Verify centerNode fallback when selected node is filtered out
  assert.ok(
    code.includes("nodes.find(n => n.type === 'task')"),
    'centerNode must fall back to first visible task node when selected node is filtered out'
  );

  // Verify no duplicate Capstone button and no bulky map-heading banner
  const capstoneBtnMatches = code.match(/<span>5 Đồ án Capstone<\/span>/g) || [];
  assert.equal(capstoneBtnMatches.length, 1, 'Must have exactly 1 "5 Đồ án Capstone" button in the UI (no duplicate)');
  assert.ok(!code.includes('className="map-heading"'), 'Must not render bulky map-heading banner that crushes canvas');
  assert.ok(!code.includes('className="capstone-trigger"'), 'Must not render duplicate capstone-trigger in filter bar');

  // Verify concise track tab labels
  for (const track of tracks) {
    assert.ok(track.tabLabel && track.tabLabel.length <= 15, `Track ${track.id} must have a concise tabLabel <= 15 chars`);
  }
});

test('CHALLENGER 2: 7-column layout has distinct X coordinates and strictly monotonic Y coordinates', () => {
  const { nodes, edges } = computeCanvasLayout(tasks, tracks, chapters, {
    activeTrackId: 'all',
    filterStatus: 'all',
    filterKind: 'all',
    statuses: {},
  });

  // Verify node counts: 7 track headers + 355 tasks = 362 nodes
  assert.equal(nodes.length, 7 + 355, 'All-tracks view must generate exactly 362 nodes (7 headers + 355 tasks)');

  // Verify track header X positions: 0, 430, 860, 1290, 1720, 2150, 2580
  const expectedColumnXs = [0, 430, 860, 1290, 1720, 2150, 2580];
  const distinctXs = new Set();

  tracks.forEach((track, colIdx) => {
    const expectedX = expectedColumnXs[colIdx];
    distinctXs.add(expectedX);

    // Verify Header Node
    const headerNode = nodes.find(n => n.id === `track-header-${track.id}`);
    assert.ok(headerNode, `Header node for ${track.id} must exist`);
    assert.equal(headerNode.position.x, expectedX, `Header for track ${colIdx} must be at X=${expectedX}`);
    assert.equal(headerNode.position.y, -90, `Header for track ${colIdx} must be at Y=-90`);
    assert.equal(headerNode.data.taskCount, tasks.filter(t => t.trackId === track.id).length);

    // Verify Tasks in this column
    const trackTaskNodes = nodes.filter(n => n.type === 'task' && n.data.track.id === track.id);
    const expectedTaskCount = tasks.filter(t => t.trackId === track.id).length;
    assert.equal(trackTaskNodes.length, expectedTaskCount, `Track ${track.id} node count mismatch`);

    // Verify all tasks in this track share exact column X
    for (const node of trackTaskNodes) {
      assert.equal(node.position.x, expectedX, `Task ${node.id} must be at X=${expectedX}`);
    }

    // Verify strictly monotonic Y coordinates
    for (let j = 0; j < trackTaskNodes.length; j++) {
      assert.equal(trackTaskNodes[j].position.y, j * 198, `Task ${trackTaskNodes[j].id} Y position mismatch`);
      if (j > 0) {
        assert.ok(
          trackTaskNodes[j].position.y > trackTaskNodes[j - 1].position.y,
          `Task ${trackTaskNodes[j].id} Y coordinate must be strictly greater than preceding task`
        );
        assert.equal(trackTaskNodes[j].position.y - trackTaskNodes[j - 1].position.y, 198);
      }
    }
  });

  // Verify exactly 7 distinct column X coordinates
  assert.equal(distinctXs.size, 7, 'Must have exactly 7 distinct column X coordinates');
});

/* ========================================================================== */
/* SUITE 2: INDIVIDUAL TRACK VIEW (SINGLE CENTERED LANE)                       */
/* ========================================================================== */

test('CHALLENGER 2: Individual track views generate only active track nodes in single centered lane (X=0)', () => {
  for (const track of tracks) {
    const { nodes, edges } = computeCanvasLayout(tasks, tracks, chapters, {
      activeTrackId: track.id,
      filterStatus: 'all',
      filterKind: 'all',
      statuses: {},
    });

    const expectedTasks = tasks.filter(t => t.trackId === track.id);
    assert.equal(nodes.length, 1 + expectedTasks.length, `Track ${track.id} total nodes must be 1 header + ${expectedTasks.length} tasks`);

    // Verify single centered lane: 100% of nodes must have X === 0
    for (const node of nodes) {
      assert.equal(node.position.x, 0, `Node ${node.id} in track ${track.id} must be centered at X=0`);
    }

    // Verify header node
    const headerNode = nodes.find(n => n.type === 'trackHeader');
    assert.ok(headerNode, `Header node for track ${track.id} must exist`);
    assert.equal(headerNode.id, `track-header-${track.id}`);
    assert.equal(headerNode.position.y, -90);

    // Verify no tasks from ANY other track are present
    const foreignNodes = nodes.filter(n => n.type === 'task' && n.data.task.trackId !== track.id);
    assert.equal(foreignNodes.length, 0, `Single track view for ${track.id} must contain 0 foreign task nodes`);

    // Verify strictly monotonic Y ordering
    const taskNodes = nodes.filter(n => n.type === 'task');
    for (let j = 0; j < taskNodes.length; j++) {
      assert.equal(taskNodes[j].position.y, j * 198);
      if (j > 0) {
        assert.ok(taskNodes[j].position.y > taskNodes[j - 1].position.y);
      }
    }
  }
});

/* ========================================================================== */
/* SUITE 3: EDGE SOURCES & TARGETS REFERENTIAL INTEGRITY (160 COMBINATIONS)    */
/* ========================================================================== */

test('CHALLENGER 2: Stress-test 160 filter combinatorics: edge sources and targets exist in generated nodes', () => {
  const trackOptions = ['all', ...tracks.map(t => t.id)]; // 8 options
  const statusOptions = ['all', 'todo', 'learning', 'done', 'deferred']; // 5 options
  const kindOptions = ['all', 'Học', 'Luyện', 'Áp dụng']; // 4 options

  // Create a realistic synthetic status distribution
  const syntheticStatuses = {};
  tasks.forEach((t, idx) => {
    if (idx % 7 === 0) syntheticStatuses[t.id] = 'done';
    else if (idx % 11 === 0) syntheticStatuses[t.id] = 'learning';
    else if (idx % 13 === 0 && t.optional) syntheticStatuses[t.id] = 'deferred';
    else syntheticStatuses[t.id] = 'todo';
  });

  let totalCombinationsTested = 0;

  for (const activeTrackId of trackOptions) {
    for (const filterStatus of statusOptions) {
      for (const filterKind of kindOptions) {
        totalCombinationsTested++;
        const { nodes, edges, visibleTasks } = computeCanvasLayout(tasks, tracks, chapters, {
          activeTrackId,
          filterStatus,
          filterKind,
          statuses: syntheticStatuses,
        });

        const nodeIdSet = new Set(nodes.map(n => n.id));
        const nodeMap = new Map(nodes.map(n => [n.id, n]));

        // Check edge sources and targets
        for (const edge of edges) {
          assert.ok(nodeIdSet.has(edge.source), `Edge source ${edge.source} missing from nodes in combo (${activeTrackId}, ${filterStatus}, ${filterKind})`);
          assert.ok(nodeIdSet.has(edge.target), `Edge target ${edge.target} missing from nodes in combo (${activeTrackId}, ${filterStatus}, ${filterKind})`);
          assert.notEqual(edge.source, edge.target, `Edge cannot be self-referential: ${edge.id}`);

          const sourceNode = nodeMap.get(edge.source);
          const targetNode = nodeMap.get(edge.target);

          // Both source and target must belong to the exact same track
          assert.equal(sourceNode.data.track.id, targetNode.data.track.id, `Edge ${edge.id} links across different tracks`);

          // Edge must point strictly downward
          assert.ok(
            targetNode.position.y > sourceNode.position.y,
            `Edge ${edge.id} must be strictly downward directed (${targetNode.position.y} > ${sourceNode.position.y})`
          );

          // If in "all" tracks, both must share same column X
          if (activeTrackId === 'all') {
            assert.equal(sourceNode.position.x, targetNode.position.x, `Edge ${edge.id} crosses columns horizontally`);
          }
        }

        // Verify edge count invariant
        if (activeTrackId !== 'all') {
          const trackTaskCount = visibleTasks.length;
          const expectedEdges = Math.max(0, trackTaskCount - 1);
          assert.equal(edges.length, expectedEdges, `Edge count mismatch for combo (${activeTrackId}, ${filterStatus}, ${filterKind})`);
        }
      }
    }
  }

  assert.equal(totalCombinationsTested, 160, 'Must have stress-tested exactly 160 filter combinatorics');
});

/* ========================================================================== */
/* SUITE 4: FILTER COMBINATORICS & BOUNDARY CONDITIONS                         */
/* ========================================================================== */

test('CHALLENGER 2: Boundary filters (0 results, 1 result, all results) produce valid canvas invariants', () => {
  // Boundary 1: Zero matching tasks (synthetic impossible status)
  const emptyResultTasks = filterTasks(tasks, {
    activeTrackId: 'track-0',
    filterStatus: 'deferred',
    statuses: {}, // all tasks default to 'todo', so 0 deferred
  });
  assert.equal(emptyResultTasks.length, 0, 'Should have 0 deferred tasks when statuses is empty');

  const { nodes: zeroNodes, edges: zeroEdges } = computeCanvasLayout(tasks, tracks, chapters, {
    activeTrackId: 'track-0',
    filterStatus: 'deferred',
    filterKind: 'all',
    statuses: {},
  });
  // Must generate 1 header node, 0 task nodes, 0 edges, without error
  assert.equal(zeroNodes.length, 1, '0-task view must generate exactly 1 header node');
  assert.equal(zeroNodes[0].type, 'trackHeader');
  assert.equal(zeroEdges.length, 0, '0-task view must generate 0 edges');

  // Boundary 2: Zero matching tasks in "all" tracks view
  const { nodes: allZeroNodes, edges: allZeroEdges } = computeCanvasLayout(tasks, tracks, chapters, {
    activeTrackId: 'all',
    filterStatus: 'deferred',
    filterKind: 'all',
    statuses: {},
  });
  assert.equal(allZeroNodes.length, 7, '0-task all-tracks view must generate exactly 7 header nodes');
  assert.equal(allZeroEdges.length, 0, '0-task all-tracks view must generate 0 edges');

  // Boundary 3: Exactly 1 matching task in a track
  const oneTaskStatuses = { [tasks[0].id]: 'learning' };
  const { nodes: oneNodes, edges: oneEdges } = computeCanvasLayout(tasks, tracks, chapters, {
    activeTrackId: 'track-0',
    filterStatus: 'learning',
    filterKind: 'all',
    statuses: oneTaskStatuses,
  });
  assert.equal(oneNodes.length, 2, '1-task view must generate 1 header + 1 task = 2 nodes');
  assert.equal(oneEdges.length, 0, '1-task view must generate exactly 0 edges');
  assert.equal(oneNodes[1].id, tasks[0].id);
  assert.equal(oneNodes[1].position.x, 0);
  assert.equal(oneNodes[1].position.y, 0);
});

/* ========================================================================== */
/* SUITE 5: FILTER COUNT BADGES MATHEMATICAL ACCURACY                          */
/* ========================================================================== */

test('CHALLENGER 2: Status pill count badges match exact task counts under arbitrary progress states', () => {
  // Test with 3 different progress profiles
  const profiles = [
    { name: 'Initial Empty', statuses: {} },
    {
      name: 'Simulated Mid-Semester',
      statuses: Object.fromEntries(
        tasks.map((t, idx) => {
          if (idx < 50) return [t.id, 'done'];
          if (idx < 70) return [t.id, 'learning'];
          if (idx < 80 && t.optional) return [t.id, 'deferred'];
          return [t.id, 'todo'];
        })
      ),
    },
    {
      name: 'Graduated 100% Done',
      statuses: Object.fromEntries(tasks.map(t => [t.id, 'done'])),
    },
  ];

  for (const profile of profiles) {
    const statusCounts = {};
    let totalCounted = 0;

    for (const statusKey of Object.keys(labels)) {
      const count = tasks.filter(t => (profile.statuses[t.id] || 'todo') === statusKey).length;
      statusCounts[statusKey] = count;
      totalCounted += count;
    }

    // Partition invariant: sum of status pill badges MUST equal total tasks exactly
    assert.equal(
      totalCounted,
      tasks.length,
      `Status counts sum (${totalCounted}) must equal total tasks (${tasks.length}) for profile ${profile.name}`
    );

    // Profile-specific assertions
    if (profile.name === 'Initial Empty') {
      assert.equal(statusCounts.todo, tasks.length);
      assert.equal(statusCounts.done, 0);
      assert.equal(statusCounts.learning, 0);
      assert.equal(statusCounts.deferred, 0);
    } else if (profile.name === 'Graduated 100% Done') {
      assert.equal(statusCounts.done, tasks.length);
      assert.equal(statusCounts.todo, 0);
    }
  }
});

test('CHALLENGER 2: Track switcher badges (done / total) match track decomposition invariants', () => {
  const sampleStatuses = {};
  // Mark first 10 tasks of each track as done
  tracks.forEach(track => {
    const trackTasks = tasks.filter(t => t.trackId === track.id);
    trackTasks.slice(0, 10).forEach(t => {
      sampleStatuses[t.id] = 'done';
    });
  });

  let sumTrackTasks = 0;
  let sumTrackDone = 0;

  tracks.forEach(track => {
    const trackTasks = tasks.filter(t => t.trackId === track.id);
    const trackDone = trackTasks.filter(t => sampleStatuses[t.id] === 'done').length;

    sumTrackTasks += trackTasks.length;
    sumTrackDone += trackDone;

    assert.equal(trackDone, 10, `Track ${track.id} done count mismatch`);
    assert.ok(trackTasks.length >= 10, `Track ${track.id} must have at least 10 tasks`);
  });

  // Verify total sum equals curriculum size
  assert.equal(sumTrackTasks, tasks.length, 'Sum of track tasks must equal curriculum total (355)');
  assert.equal(sumTrackDone, 70, 'Sum of track done tasks must equal 7 * 10 = 70');
});

test('CHALLENGER 2: Search filtering handles accents, cases, and regex characters with exact counts', () => {
  const searchTestCases = [
    { query: 'con trỏ', expectedMinMatches: 3 },
    { query: 'CON TRỎ', expectedMinMatches: 3 },
    { query: 'con tro', expectedMinMatches: 3 },
    { query: 'dijkstra', expectedMinMatches: 2 },
    { query: 'vtable', expectedMinMatches: 1 },
    { query: 'c++', expectedMinMatches: 5 },
    { query: 'tcp', expectedMinMatches: 5 },
    { query: 'tcp/ip', expectedMinMatches: 1 },
    { query: 'không-thể-tìm-thấy-chuỗi-này-xyz-123', expectedMinMatches: 0, expectedExact: 0 },
  ];

  for (const { query, expectedMinMatches, expectedExact } of searchTestCases) {
    const results = tasks.filter(t =>
      normalize(`${t.number} ${t.title} ${t.todos.join(' ')} ${chapters.find(c => c.id === t.chapter)?.title || ''}`).includes(
        normalize(query)
      )
    );

    if (expectedExact !== undefined) {
      assert.equal(results.length, expectedExact, `Query "${query}" expected exact ${expectedExact} matches`);
    } else {
      assert.ok(
        results.length >= expectedMinMatches,
        `Query "${query}" found ${results.length} matches, expected at least ${expectedMinMatches}`
      );
    }
  }
});

/* ========================================================================== */
/* SUITE 6: CAPSTONE PROJECTS NAVIGATION & REFERENTIAL INTEGRITY              */
/* ========================================================================== */

test('CHALLENGER 2: All 5 Capstone Projects link to existing tasks in correct tracks', () => {
  assert.equal(capstoneProjects.length, 5, 'Must have exactly 5 Capstone Projects');

  const allTaskIdSet = new Set(tasks.map(t => t.id));
  const validTrackIdSet = new Set(tracks.map(t => t.id));

  for (const proj of capstoneProjects) {
    assert.ok(proj.id, 'Project must have an id');
    assert.ok(proj.title, 'Project must have a title');
    assert.ok(validTrackIdSet.has(proj.trackId), `Project ${proj.id} has invalid trackId ${proj.trackId}`);
    assert.ok(proj.pedagogicalObjective, `Project ${proj.id} must have pedagogicalObjective`);
    assert.ok(proj.technicalScope.length >= 3, `Project ${proj.id} must have at least 3 technical scopes`);
    assert.ok(proj.verificationCriteria.length >= 3, `Project ${proj.id} must have at least 3 verification criteria`);
    assert.ok(proj.relatedTaskIds.length >= 2, `Project ${proj.id} must link at least 2 tasks`);

    for (const taskId of proj.relatedTaskIds) {
      assert.ok(allTaskIdSet.has(taskId), `Project ${proj.id} links non-existent taskId ${taskId}`);
      const task = tasks.find(t => t.id === taskId);
      // Related task should be in the same track or valid prerequisite
      assert.ok(task, `Task ${taskId} must be resolvable`);
    }
  }
});

/* ========================================================================== */
/* SUITE 7: ZERO SPATIAL COLLISIONS & VISUAL SEPARATION INVARIANTS             */
/* ========================================================================== */

test('CHALLENGER 2: Spatial coordinates have zero collisions across all 160 layout permutations', () => {
  const trackOptions = ['all', ...tracks.map(t => t.id)];
  const statusOptions = ['all', 'todo', 'learning', 'done', 'deferred'];
  const kindOptions = ['all', 'Học', 'Luyện', 'Áp dụng'];

  const sampleStatuses = {};
  tasks.forEach((t, idx) => {
    if (idx % 3 === 0) sampleStatuses[t.id] = 'done';
    else if (idx % 5 === 0) sampleStatuses[t.id] = 'learning';
    else if (idx % 7 === 0 && t.optional) sampleStatuses[t.id] = 'deferred';
    else sampleStatuses[t.id] = 'todo';
  });

  for (const activeTrackId of trackOptions) {
    for (const filterStatus of statusOptions) {
      for (const filterKind of kindOptions) {
        const { nodes } = computeCanvasLayout(tasks, tracks, chapters, {
          activeTrackId,
          filterStatus,
          filterKind,
          statuses: sampleStatuses,
        });

        // Spatial uniqueness: No two nodes should share the exact same (x, y) coordinates
        const coordSet = new Set();
        for (const node of nodes) {
          const coordKey = `${node.position.x},${node.position.y}`;
          assert.ok(
            !coordSet.has(coordKey),
            `Spatial collision detected at ${coordKey} for node ${node.id} in layout (${activeTrackId}, ${filterStatus}, ${filterKind})`
          );
          coordSet.add(coordKey);
        }
      }
    }
  }
});

/* ========================================================================== */
/* SUITE 8: URL HASH PARSER & DEEP LINK STATE SIMULATION                       */
/* ========================================================================== */

test('CHALLENGER 2: Hash deep linking simulation parses #task- and #track- cleanly with fallbacks', () => {
  // Simulator for handleHash logic in src/main.jsx:428-452
  function simulateHashChange(hash, allTasks, allTracks) {
    let selectedTaskId = null;
    let activeTrackId = null;
    let detailOpened = false;

    if (hash.startsWith('#task-')) {
      const taskId = hash.slice(6);
      const target = allTasks.find(t => t.id === taskId);
      if (target) {
        selectedTaskId = taskId;
        detailOpened = true;
        activeTrackId = target.trackId;
      }
    } else if (hash.startsWith('#track-')) {
      const trackId = hash.slice(7);
      if (allTracks.some(t => t.id === trackId)) {
        activeTrackId = trackId;
        const firstTask = allTasks.find(t => t.trackId === trackId);
        if (firstTask) {
          selectedTaskId = firstTask.id;
        }
      }
    }

    return { selectedTaskId, activeTrackId, detailOpened };
  }

  // Case 1: Valid task hash
  const res1 = simulateHashChange('#task-cpp-smart', tasks, tracks);
  assert.equal(res1.selectedTaskId, 'cpp-smart');
  assert.equal(res1.detailOpened, true);
  assert.equal(res1.activeTrackId, 'track-1');

  // Case 2: Non-existent task hash (graceful no-op)
  const res2 = simulateHashChange('#task-non-existent-task-999', tasks, tracks);
  assert.equal(res2.selectedTaskId, null);
  assert.equal(res2.detailOpened, false);

  // Case 3: Valid track hash
  const res3 = simulateHashChange('#track-track-3', tasks, tracks);
  assert.equal(res3.activeTrackId, 'track-3');
  assert.equal(res3.selectedTaskId, tasks.find(t => t.trackId === 'track-3').id);

  // Case 4: Non-existent track hash (graceful no-op)
  const res4 = simulateHashChange('#track-track-999', tasks, tracks);
  assert.equal(res4.activeTrackId, null);

  // Case 5: Empty hash or root hash
  const res5 = simulateHashChange('#', tasks, tracks);
  assert.equal(res5.selectedTaskId, null);
  assert.equal(res5.activeTrackId, null);
});

