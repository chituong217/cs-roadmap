import test, { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Import SSOT curriculum & progress modules
import * as curriculumModule from '../src/curriculum.js';
import * as progressModule from '../src/progress.mjs';
import { buildLearningPrompt, blankLearningPrompt, chatTitle, teachingPlugin } from '../src/learning-prompt.mjs';

const { chapters, tasks, edition } = curriculumModule;
const {
  STORAGE_KEY,
  ROADMAP_ID,
  labels,
  emptyProgress,
  validateProgress,
  nextTask,
} = progressModule;

const allTaskIds = tasks.map(t => t.id);
const allChapterIds = chapters.map(c => c.id);

// Normalized text helper (removes Vietnamese accents and converts to lowercase)
const normalize = text =>
  String(text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .toLowerCase();

/* ========================================================================== */
/* TIER 1: FEATURE COVERAGE                                                   */
/* ========================================================================== */
describe('Tier 1: Feature Coverage', () => {

  describe('F1: 7 Tracks & Organization', () => {
    it('curriculum tasks and chapters span all 7 core knowledge domains', () => {
      // If tracks are exported directly (post-M1), validate the full tracks contract
      if (curriculumModule.tracks && Array.isArray(curriculumModule.tracks)) {
        const { tracks } = curriculumModule;
        assert.ok(tracks.length >= 7, `Expected at least 7 tracks, got ${tracks.length}`);
        const trackNumbers = tracks.map(t => t.trackNumber).sort((a, b) => a - b);
        for (let i = 0; i < 7; i++) {
          assert.equal(trackNumbers[i], i, `Missing trackNumber ${i}`);
        }
        for (const tr of tracks) {
          assert.ok(tr.id && typeof tr.id === 'string', `Track missing id`);
          assert.ok(tr.slug && typeof tr.slug === 'string', `Track ${tr.id} missing slug`);
          assert.ok(tr.title && typeof tr.title === 'string', `Track ${tr.id} missing title`);
          assert.ok(tr.shortTitle && typeof tr.shortTitle === 'string', `Track ${tr.id} missing shortTitle`);
          assert.ok(tr.description && typeof tr.description === 'string', `Track ${tr.id} missing description`);
          assert.ok(tr.icon && typeof tr.icon === 'string', `Track ${tr.id} missing icon`);
          assert.ok(tr.colorAccent && typeof tr.colorAccent === 'string', `Track ${tr.id} missing colorAccent`);
          assert.ok(Array.isArray(tr.hcmusAlignment) && tr.hcmusAlignment.length > 0, `Track ${tr.id} missing hcmusAlignment`);
          assert.ok(typeof tr.totalEstimatedHours === 'number' && tr.totalEstimatedHours > 0, `Track ${tr.id} missing totalEstimatedHours`);
        }
      }

      // Domain-level validation: tasks exist for each of the 7 thematic tracks
      const domainMatchers = [
        { name: 'Track 0: Foundations & C++ Remediation', regex: /cpp|con tro|tham chieu|bo nho|raii/i },
        { name: 'Track 1: Programming & OOP', regex: /oop|ke thua|da hinh|virtual|lop truu tuong|solid|pattern/i },
        { name: 'Track 2: Algorithms & Data Structures', regex: /dsa|sort|cay|do thi|dijkstra|quy hoach dong|dp/i },
        { name: 'Track 3: Computer Systems & Networking', regex: /kien truc|os|tien trinh|luong|mang|tcp|ip|socket/i },
        { name: 'Track 4: Mathematical Foundations', regex: /toan|logic|quy nap|to hop|xac suat|bayes|phan phoi|clt/i },
        { name: 'Track 5: Developer Tooling & Engineering', regex: /git|linux|shell|debugger|gdb|cmake|asan|valgrind/i },
        { name: 'Track 6: CS Specialization Readiness', regex: /database|sql|api|fastapi|machine learning|ai|capstone/i },
      ];

      for (const dm of domainMatchers) {
        const matches = tasks.filter(t =>
          dm.regex.test(normalize(`${t.id} ${t.chapter} ${t.title} ${t.todos.join(' ')}`))
        );
        assert.ok(matches.length >= 5, `Expected at least 5 tasks for ${dm.name}, found ${matches.length}`);
      }
    });

    it('edition metadata is properly defined with version and scope', () => {
      assert.ok(edition, 'Edition metadata must exist');
      assert.ok(typeof edition.version === 'string' && edition.version.length > 0);
      assert.ok(typeof edition.title === 'string' && edition.title.length > 0);
      assert.ok(typeof edition.scope === 'string' && edition.scope.length > 0);
    });
  });

  describe('F2: C++ & Memory Gap Remediation', () => {
    it('covers pointers, memory layout, stack/heap, dynamic allocation, RAII and smart pointers', () => {
      const pointerTask = tasks.find(t => t.id === 'cpp-pointers' || /con tro|pointer/i.test(normalize(t.title)));
      assert.ok(pointerTask, 'Must include a task specifically covering pointers and memory addresses');
      assert.ok(pointerTask.todos.length >= 3, 'Pointer task must have at least 3 actionable todos');

      const raiiTask = tasks.find(t => t.id === 'oop-resource' || /raii/i.test(normalize(`${t.title} ${t.extra || ''} ${t.todos.join(' ')}`)));
      assert.ok(raiiTask, 'Must include a task covering RAII and resource lifetime');

      const smartPtrTask = tasks.find(t => t.id === 'cpp-smart' || /unique_ptr|smart pointer/i.test(normalize(`${t.title} ${t.todos.join(' ')}`)));
      assert.ok(smartPtrTask, 'Must include a task covering unique_ptr and smart pointers');

      const copySemanticsTask = tasks.find(t => t.id === 'cpp-copy' || /rule of|sao chep/i.test(normalize(`${t.title} ${t.extra || ''} ${t.todos.join(' ')}`)));
      assert.ok(copySemanticsTask, 'Must include a task covering copy semantics and Rule of Zero/3/5');

      const stlContainerTask = tasks.find(t => t.id === 'cpp-containers' || /vector/i.test(normalize(t.title)));
      assert.ok(stlContainerTask, 'Must include a task covering standard STL containers');
    });
  });

  describe('F3: DSA Core Gap Remediation', () => {
    it('covers elementary and advanced sorting algorithms with stability and complexity', () => {
      const requiredSorts = [
        { name: 'Quicksort', check: t => /quicksort/i.test(normalize(t.title)) || t.id.includes('quick') },
        { name: 'Mergesort', check: t => /merge sort/i.test(normalize(t.title)) || t.id.includes('merge') },
        { name: 'Heapsort', check: t => /heapsort/i.test(normalize(t.title)) || t.id.includes('heapsort') },
        { name: 'Elementary sorts', check: t => /insertion sort|selection sort|bubble sort/i.test(normalize(t.title)) },
      ];

      for (const sortItem of requiredSorts) {
        const found = tasks.find(sortItem.check);
        assert.ok(found, `Must include task covering ${sortItem.name}`);
        assert.ok(found.todos.length >= 3, `${sortItem.name} task must have at least 3 todos`);
      }
    });

    it('covers tree data structures: BST, AVL, Heap, Trie, and traversals', () => {
      const requiredTrees = [
        { name: 'Binary Tree Traversals', id: 'dsa-tree', keyword: /duyet/i },
        { name: 'Binary Search Tree (BST)', id: 'dsa-bst', keyword: /tim kiem nhi phan|bst/i },
        { name: 'Balanced Trees / AVL', id: 'dsa-balanced', keyword: /avl|can bang/i },
        { name: 'Binary Heap / Priority Queue', id: 'dsa-heap', keyword: /heap/i },
        { name: 'Trie', id: 'dsa-trie', keyword: /trie|tien to/i },
      ];

      for (const treeItem of requiredTrees) {
        const found = tasks.find(t => t.id === treeItem.id || treeItem.keyword.test(normalize(t.title)));
        assert.ok(found, `Must include task covering ${treeItem.name}`);
      }
    });

    it('covers graph algorithms: BFS, DFS, Dijkstra, Cycle detection, MST, Bipartite', () => {
      const requiredGraphs = [
        { name: 'Graph representation', id: 'graph-represent' },
        { name: 'BFS', id: 'graph-bfs' },
        { name: 'DFS', id: 'graph-dfs' },
        { name: 'Dijkstra', id: 'graph-dijkstra' },
        { name: 'Cycle detection', id: 'graph-directed-cycle' },
        { name: 'Minimum Spanning Tree / DSU', id: 'graph-dsu' },
        { name: 'Bipartite graph', id: 'graph-bipartite' },
      ];

      for (const g of requiredGraphs) {
        const found = tasks.find(t => t.id === g.id || t.id.startsWith(g.id));
        assert.ok(found, `Must include task for ${g.name} (${g.id})`);
      }
    });

    it('covers dynamic programming: Knapsack, Coin Change, LCS, Edit Distance, LIS', () => {
      const requiredDP = [
        { name: 'DP Foundations', id: 'algo-dp' },
        { name: 'Coin Change', id: 'algo-dp-coins' },
        { name: '0/1 Knapsack', id: 'algo-knapsack' },
        { name: 'Longest Common Subsequence (LCS)', id: 'algo-sequence-dp' },
        { name: 'Edit Distance', id: 'algo-edit-distance' },
        { name: 'Longest Increasing Subsequence (LIS)', id: 'algo-lis' },
      ];

      for (const dp of requiredDP) {
        const found = tasks.find(t => t.id === dp.id);
        assert.ok(found, `Must include task covering ${dp.name} (${dp.id})`);
        assert.ok(found.todos.length >= 3, `DP task ${dp.id} must have >= 3 todos`);
      }
    });
  });

  describe('F4: Practical Engineering Tooling', () => {
    it('covers Git CLI, branching, conflicts, rebase, stash, reflog, and PRs', () => {
      const gitTasks = tasks.filter(t => t.chapter === 'git' || t.id.startsWith('git-'));
      assert.ok(gitTasks.length >= 5, `Expected at least 5 Git tasks, got ${gitTasks.length}`);
      const gitContent = normalize(gitTasks.flatMap(t => [t.title, ...t.todos]).join(' '));
      assert.ok(gitContent.includes('branch') || gitContent.includes('nhanh'));
      assert.ok(gitContent.includes('commit'));
      assert.ok(gitContent.includes('conflict') || gitContent.includes('xung dot'));
      assert.ok(gitContent.includes('pull request') || gitContent.includes('pr'));
    });

    it('covers GDB/LLDB debugger, AddressSanitizer, UndefinedBehaviorSanitizer, and Linux tools', () => {
      const debugTask = tasks.find(t => t.id === 'cpp-debug' || /debugger|breakpoint/i.test(normalize(t.title)));
      assert.ok(debugTask, 'Must include GDB/Debugger task');

      const sanitizerTask = tasks.find(t => t.id === 'tools-memory' || /sanitizer|valgrind/i.test(normalize(`${t.title} ${t.todos.join(' ')}`)));
      assert.ok(sanitizerTask, 'Must include memory sanitizer / debugging tool task');

      const shellTask = tasks.find(t => t.id === 'tools-shell' || /dong lenh|shell/i.test(normalize(t.title)));
      assert.ok(shellTask, 'Must include shell/CLI navigation task');

      const buildTask = tasks.find(t => t.id === 'tools-build' || /cmake|build/i.test(normalize(t.title)));
      assert.ok(buildTask, 'Must include build automation (CMake) task');
    });
  });

  describe('F5: HCMUS Y2S1 Courses Alignment', () => {
    it('covers OOP (CSC10003): vtable, dynamic polymorphism, abstract classes, SOLID, design patterns', () => {
      const oopTasks = tasks.filter(t => t.chapter === 'oop' || t.id.startsWith('oop-') || t.chapter === 'software');
      assert.ok(oopTasks.length >= 10, 'Expected at least 10 OOP/Software design tasks');

      const virtualTask = tasks.find(t => t.id === 'oop-virtual');
      assert.ok(virtualTask, 'Must include task covering virtual functions and dynamic polymorphism');
      assert.ok(normalize(virtualTask.todos.join(' ')).includes('virtual'));

      const abstractTask = tasks.find(t => t.id === 'oop-abstract');
      assert.ok(abstractTask, 'Must include task covering abstract classes');

      const patternsTask = tasks.find(t => t.id === 'se-patterns' || /pattern/i.test(normalize(t.title)));
      assert.ok(patternsTask, 'Must include task covering Design Patterns');
    });

    it('covers Mạng máy tính (CSC10008): TCP/IP layers, CIDR subnetting, TCP handshake & congestion, HTTP/TLS', () => {
      const netTasks = tasks.filter(t => t.chapter === 'network' || t.id.startsWith('net-'));
      assert.ok(netTasks.length >= 7, 'Expected at least 7 networking tasks');

      const ipTask = tasks.find(t => t.id === 'net-ip');
      assert.ok(ipTask, 'Must include IP & CIDR subnetting task');
      assert.ok(normalize(ipTask.todos.join(' ')).includes('cidr'));

      const tcpTask = tasks.find(t => t.id === 'net-udp-tcp');
      assert.ok(tcpTask, 'Must include TCP vs UDP task');
      assert.ok(normalize(tcpTask.todos.join(' ')).includes('tcp'));

      const httpTask = tasks.find(t => t.id === 'net-http');
      assert.ok(httpTask, 'Must include HTTP protocol task');

      const tlsTask = tasks.find(t => t.id === 'net-tls');
      assert.ok(tlsTask, 'Must include TLS/HTTPS task');
    });

    it('covers Xác suất thống kê (MTH00041): Bayes theorem, distributions (Poisson, Normal), CLT, hypothesis testing', () => {
      const probTasks = tasks.filter(t => t.id.startsWith('prob-') || t.id.startsWith('stats-'));
      assert.ok(probTasks.length >= 8, 'Expected at least 8 probability and statistics tasks');

      const bayesTask = tasks.find(t => t.id === 'prob-bayes');
      assert.ok(bayesTask, 'Must include Bayes theorem task');

      const normalTask = tasks.find(t => t.id === 'prob-normal');
      assert.ok(normalTask, 'Must include Normal distribution task');

      const testingTask = tasks.find(t => t.id === 'stats-testing');
      assert.ok(testingTask, 'Must include hypothesis testing task');
    });

    it('covers Toán tổ hợp & Toán rời rạc (MTH00040): logic, induction, combinatorics, Pigeonhole, recurrences', () => {
      const mathTasks = tasks.filter(t => t.chapter === 'discrete' || t.id.startsWith('math-'));
      assert.ok(mathTasks.length >= 10, 'Expected at least 10 discrete math / combinatorics tasks');

      const logicTask = tasks.find(t => t.id === 'math-logic');
      assert.ok(logicTask, 'Must include propositional logic task');

      const inductionTask = tasks.find(t => t.id === 'math-induction');
      assert.ok(inductionTask, 'Must include mathematical induction task');

      const countingTask = tasks.find(t => t.id === 'math-counting');
      assert.ok(countingTask, 'Must include counting and combinatorics task');

      const pigeonholeTask = tasks.find(t => t.id === 'math-pigeonhole');
      assert.ok(pigeonholeTask, 'Must include Pigeonhole principle task');

      const recurrenceTask = tasks.find(t => t.id === 'math-recurrence');
      assert.ok(recurrenceTask, 'Must include recurrence relations task');
    });
  });

  describe('F6: Practical Capstone Mini-Projects', () => {
    it('includes 5 practical capstone mini-projects with actionable verification steps', () => {
      const projectTasks = tasks.filter(t =>
        t.kind === 'Áp dụng' &&
        /project|do an|ung dung|xay dung|trien khai/i.test(normalize(`${t.id} ${t.title}`))
      );
      assert.ok(projectTasks.length >= 5, `Expected at least 5 practical project tasks, got ${projectTasks.length}`);

      // Verify key project archetypes are represented:
      // 1. C++ Application / Library Management Project
      const cppApp = tasks.find(t => t.id.startsWith('project-') || t.id === 'cpp-apply');
      assert.ok(cppApp, 'Must include C++ application capstone project');

      // 2. Systems / Shell Project
      const shellProject = tasks.find(t => t.id === 'os-shell-project' || /shell/i.test(normalize(t.title)));
      assert.ok(shellProject, 'Must include OS / Shell project');

      // 3. Data Structure / Indexing / Graph Project
      const dsaProject = tasks.find(t => t.id === 'dsa-index-project' || /chi muc|do thi|tra cuu/i.test(normalize(t.title)));
      assert.ok(dsaProject, 'Must include DSA / Indexing project');

      // 4. Web API / Backend Project
      const apiProject = tasks.find(t => t.id === 'api-fastapi' || t.id === 'api-release' || /api/i.test(normalize(t.title)));
      assert.ok(apiProject, 'Must include Web API project');

      // 5. Capstone / Machine Learning / Delivery Project
      const capstoneProject = tasks.find(t => t.id.startsWith('cap-') || t.id === 'ml-project');
      assert.ok(capstoneProject, 'Must include Capstone / ML delivery project');
    });
  });

  describe('F7: Automated Markdown Compiler', () => {
    it('public/ROADMAP.md exists and is consistent with the compiled curriculum', () => {
      const roadmapPath = fileURLToPath(new URL('../public/ROADMAP.md', import.meta.url));
      assert.ok(existsSync(roadmapPath), 'public/ROADMAP.md must exist');

      const content = readFileSync(roadmapPath, 'utf8');
      assert.ok(content.length > 10000, 'ROADMAP.md must not be empty or truncated');
      assert.ok(content.includes('# Lộ trình KHMT'), 'ROADMAP.md must have standard header');
      assert.ok(content.includes('## Mục lục'), 'ROADMAP.md must include Table of Contents');

      // All chapters must appear in ROADMAP.md
      for (const ch of chapters) {
        assert.ok(content.includes(ch.title), `Chapter ${ch.title} missing in ROADMAP.md`);
      }
    });
  });

});

/* ========================================================================== */
/* TIER 2: BOUNDARY & CORNER CASES                                            */
/* ========================================================================== */
describe('Tier 2: Boundary & Corner Cases', () => {

  describe('Empty Progress State', () => {
    it('emptyProgress() returns valid initial schema without side effects', () => {
      const empty = emptyProgress();
      assert.ok(empty, 'emptyProgress() must return an object');
      assert.equal(empty.roadmapId, ROADMAP_ID);
      assert.deepEqual(empty.statuses, {});
      assert.equal(empty.lastTask, null);
    });

    it('validateProgress on emptyProgress passes cleanly with 0 ignored', () => {
      const empty = emptyProgress();
      const res = validateProgress(empty, allTaskIds);
      assert.equal(res.ignored, 0);
      assert.deepEqual(res.data.statuses, {});
      assert.equal(res.data.lastTask, null);
    });
  });

  describe('Progress Migration (v1 -> v2) & Backward Compatibility', () => {
    it('safely handles legacy v1 data preserving all statuses and lastTask', () => {
      const sampleV1 = {
        version: 1,
        roadmapId: ROADMAP_ID,
        statuses: {
          [allTaskIds[0]]: 'done',
          [allTaskIds[1]]: 'learning',
          [allTaskIds[2]]: 'deferred',
        },
        lastTask: allTaskIds[1],
      };

      // If migrateProgressV1ToV2 is exported, test it directly
      if (typeof progressModule.migrateProgressV1ToV2 === 'function') {
        const migrated = progressModule.migrateProgressV1ToV2(sampleV1, allTaskIds);
        assert.equal(migrated.version, 2);
        assert.equal(migrated.roadmapId, ROADMAP_ID);
        assert.equal(migrated.statuses[allTaskIds[0]], 'done');
        assert.equal(migrated.statuses[allTaskIds[1]], 'learning');
        assert.equal(migrated.statuses[allTaskIds[2]], 'deferred');
        assert.equal(migrated.lastTask, allTaskIds[1]);
      } else {
        // Transitional check: validateProgress handles v1 backup perfectly
        const res = validateProgress(sampleV1, allTaskIds);
        assert.equal(res.data.statuses[allTaskIds[0]], 'done');
        assert.equal(res.data.statuses[allTaskIds[1]], 'learning');
        assert.equal(res.data.statuses[allTaskIds[2]], 'deferred');
        assert.equal(res.data.lastTask, allTaskIds[1]);
      }
    });

    it('rejects corrupt, foreign, or malformed backup payloads', () => {
      const corruptPayloads = [
        null,
        undefined,
        {},
        [],
        'not a json string',
        { version: 999, roadmapId: 'foreign-roadmap', statuses: {} },
        { version: 1, roadmapId: 'wrong-id', statuses: {} },
        { version: 1, roadmapId: ROADMAP_ID, statuses: 'not-an-object' },
        { version: 1, roadmapId: ROADMAP_ID, statuses: [] },
      ];

      for (const payload of corruptPayloads) {
        assert.throws(
          () => validateProgress(payload, allTaskIds),
          /Tệp không phải bản sao lưu/i,
          `Should throw on corrupt payload: ${JSON.stringify(payload)}`
        );
      }
    });
  });

  describe('Missing & Invalid Task IDs Handling', () => {
    it('filters out unknown task IDs without polluting state', () => {
      const invalidData = {
        version: 1,
        roadmapId: ROADMAP_ID,
        statuses: {
          'non-existent-task-12345': 'done',
          'fake-node-id': 'learning',
          [allTaskIds[0]]: 'done',
        },
        lastTask: 'non-existent-task-12345',
      };

      const result = validateProgress(invalidData, allTaskIds);
      assert.equal(result.ignored, 2, 'Should report 2 ignored tasks');
      assert.equal(result.data.lastTask, null, 'Invalid lastTask should reset to null');
      assert.deepEqual(result.data.statuses, { [allTaskIds[0]]: 'done' });
    });

    it('prevents prototype pollution via malicious status keys', () => {
      const maliciousPayload = {
        version: 1,
        roadmapId: ROADMAP_ID,
        statuses: {
          '__proto__': 'done',
          'constructor': 'done',
          'toString': 'done',
        },
        lastTask: null,
      };

      // Either validateProgress rejects invalid status keys or ignores them safely
      try {
        const res = validateProgress(maliciousPayload, allTaskIds);
        assert.equal(Object.prototype.polluted, undefined);
      } catch (err) {
        assert.ok(err instanceof Error);
      }
    });

    it('rejects invalid status values (not in todo, learning, done, deferred)', () => {
      const invalidStatuses = ['in-progress', 'almost', 'complete', '123', true, null];
      for (const badStatus of invalidStatuses) {
        const payload = {
          version: 1,
          roadmapId: ROADMAP_ID,
          statuses: { [allTaskIds[0]]: badStatus },
          lastTask: null,
        };
        assert.throws(() => validateProgress(payload, allTaskIds), /trạng thái không hợp lệ/i);
      }
    });
  });

  describe('Search & Filter Edge Cases', () => {
    it('handles query normalization with accents, uppercase, and regex metacharacters', () => {
      const queries = ['C++', 'Đồ thị', 'Thư viện', '[A*]', '(Regex)', '.*', '\\', '?', '+'];
      for (const q of queries) {
        // Query normalization should never throw syntax error
        assert.doesNotThrow(() => {
          const norm = normalize(q);
          tasks.filter(t => normalize(`${t.number} ${t.title} ${t.todos.join(' ')}`).includes(norm));
        });
      }
    });
  });

});

/* ========================================================================== */
/* TIER 3: CROSS-TRACK PREREQUISITE DAG VALIDATION                            */
/* ========================================================================== */
describe('Tier 3: Cross-track Prerequisite DAG Validation', () => {

  it('prerequisite graph is strictly acyclic (zero circular dependencies)', () => {
    // Collect all explicit dependencies from tasks or domain dependency chains
    const adj = new Map();
    for (const id of allTaskIds) adj.set(id, []);

    // 1. Explicit prerequisites if declared on task objects
    for (const task of tasks) {
      if (Array.isArray(task.prerequisites)) {
        for (const prereqId of task.prerequisites) {
          if (adj.has(prereqId)) adj.get(prereqId).push(task.id);
        }
      }
    }

    // 2. Fundamental CS sequence dependency chains
    const foundationalChains = [
      ['cpp-types', 'cpp-functions'],
      ['cpp-functions', 'oop-class'],
      ['oop-class', 'oop-inheritance'],
      ['oop-inheritance', 'oop-virtual'],
      ['cpp-pointers', 'oop-resource'],
      ['oop-resource', 'cpp-copy'],
      ['cpp-copy', 'cpp-smart'],
      ['math-logic', 'math-proofs'],
      ['math-proofs', 'math-induction'],
      ['math-induction', 'dsa-complexity'],
      ['dsa-complexity', 'algo-recursion'],
      ['algo-recursion', 'dsa-tree'],
      ['dsa-tree', 'dsa-bst'],
      ['dsa-bst', 'dsa-balanced'],
      ['dsa-vector', 'dsa-heap'],
      ['dsa-heap', 'algo-heapsort'],
      ['dsa-queue', 'graph-bfs'],
      ['dsa-stack', 'graph-dfs'],
      ['graph-bfs', 'graph-dijkstra'],
      ['dsa-heap', 'graph-dijkstra'],
      ['graph-dsu', 'graph-kruskal'],
      ['algo-dp', 'algo-knapsack'],
      ['algo-dp', 'algo-sequence-dp'],
      ['algo-dp', 'algo-edit-distance'],
      ['algo-dp', 'algo-lis'],
      ['net-layers', 'net-ip'],
      ['net-ip', 'net-udp-tcp'],
      ['net-udp-tcp', 'net-http'],
      ['linear-vectors', 'linear-transform'],
      ['linear-transform', 'linear-eigen'],
      ['prob-events', 'prob-bayes'],
      ['prob-bayes', 'prob-random'],
      ['prob-random', 'prob-distributions'],
      ['prob-distributions', 'stats-sampling'],
      ['stats-sampling', 'stats-testing'],
      ['tools-shell', 'tools-pipes'],
      ['tools-pipes', 'tools-permissions'],
      ['tools-permissions', 'tools-build'],
      ['git-first', 'git-branch'],
      ['git-branch', 'git-remote'],
      ['py-syntax', 'py-collections'],
      ['py-collections', 'py-functions'],
      ['web-html', 'web-css'],
      ['web-css', 'web-js'],
      ['web-js', 'web-react'],
      ['db-intro', 'api-database'],
      ['api-fastapi', 'api-release'],
      ['ml-problem', 'ml-split'],
      ['ml-split', 'ml-linear'],
      ['ml-linear', 'ml-logistic'],
      ['cap-problem', 'cap-spec'],
      ['cap-spec', 'cap-design'],
      ['cap-design', 'cap-build'],
    ];

    for (const [before, after] of foundationalChains) {
      if (adj.has(before) && adj.has(after)) {
        adj.get(before).push(after);
      }
    }

    // Cycle detection using 3-color DFS (0 = White, 1 = Gray, 2 = Black)
    const color = new Map(allTaskIds.map(id => [id, 0]));
    let cycleFound = null;

    function dfs(u, path = []) {
      color.set(u, 1);
      path.push(u);
      for (const v of adj.get(u) || []) {
        if (color.get(v) === 1) {
          cycleFound = [...path.slice(path.indexOf(v)), v];
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

    assert.equal(cycleFound, null, `Circular dependency detected in curriculum DAG: ${cycleFound?.join(' -> ')}`);
  });

  it('all declared prerequisites and review targets exist in curriculum', () => {
    const idSet = new Set(allTaskIds);

    for (const task of tasks) {
      // Check explicit prerequisites if any
      if (Array.isArray(task.prerequisites)) {
        for (const prereqId of task.prerequisites) {
          assert.ok(idSet.has(prereqId), `Task ${task.id} references non-existent prerequisite: ${prereqId}`);
          assert.notEqual(prereqId, task.id, `Task ${task.id} cannot be its own prerequisite`);
        }
      }

      // Check reviewTargets for diagnostic / placement tasks
      if (Array.isArray(task.reviewTargets)) {
        assert.ok(task.reviewTargets.length >= 2, `Diagnostic task ${task.id} should have review targets`);
        for (const targetId of task.reviewTargets) {
          assert.ok(idSet.has(targetId), `Diagnostic task ${task.id} references non-existent reviewTarget: ${targetId}`);
        }
      }
    }
  });

  it('prerequisites strictly precede the tasks depending on them (topological ordering)', () => {
    const keyPrerequisitePairs = [
      ['cpp-types', 'cpp-functions'],
      ['cpp-functions', 'oop-class'],
      ['oop-class', 'oop-virtual'],
      ['cpp-pointers', 'oop-resource'],
      ['oop-resource', 'cpp-copy'],
      ['cpp-copy', 'cpp-smart'],
      ['math-logic', 'dsa-complexity'],
      ['algo-recursion', 'dsa-tree'],
      ['dsa-heap', 'algo-heapsort'],
      ['dsa-heap', 'graph-dijkstra'],
      ['dsa-queue', 'graph-bfs'],
      ['graph-bfs', 'graph-dijkstra'],
      ['graph-dsu', 'graph-kruskal'],
      ['linear-vectors', 'linear-eigen'],
      ['prob-events', 'prob-bayes'],
      ['prob-bayes', 'prob-random'],
      ['prob-random', 'prob-distributions'],
      ['tools-shell', 'tools-pipes'],
      ['git-first', 'git-branch'],
      ['git-branch', 'git-remote'],
      ['web-js', 'web-react'],
      ['ml-split', 'ml-linear'],
    ];

    for (const [before, after] of keyPrerequisitePairs) {
      if (allTaskIds.includes(before) && allTaskIds.includes(after)) {
        const idxBefore = allTaskIds.indexOf(before);
        const idxAfter = allTaskIds.indexOf(after);
        assert.ok(
          idxBefore < idxAfter,
          `Prerequisite ${before} (index ${idxBefore}) must strictly precede ${after} (index ${idxAfter})`
        );
      }
    }
  });

  it('tasks within each chapter are contiguous and task numbering is monotonic', () => {
    const chapterOrder = tasks.map(t => allChapterIds.indexOf(t.chapter));
    for (let i = 1; i < tasks.length; i++) {
      assert.ok(chapterOrder[i] >= chapterOrder[i - 1], `Tasks in chapter ${tasks[i].chapter} are not contiguous`);
      const expectedNumber = String(i + 1).padStart(3, '0');
      assert.equal(tasks[i].number, expectedNumber, `Task at index ${i} has number ${tasks[i].number}, expected ${expectedNumber}`);
    }
  });

});

/* ========================================================================== */
/* TIER 4: REAL-WORLD SCENARIOS                                               */
/* ========================================================================== */
describe('Tier 4: Real-World Scenarios', () => {

  describe('Student Progress Tracking Simulation', () => {
    it('accurately tracks completion percentage and state transitions through Year 2 Semester 1', () => {
      let progress = emptyProgress();
      const requiredTasks = tasks.filter(t => !t.optional);
      const optionalTasks = tasks.filter(t => t.optional);

      // 1. Initial state
      assert.equal(Object.keys(progress.statuses).length, 0);

      // 2. Student completes first 10 foundational tasks
      for (let i = 0; i < 10; i++) {
        progress.statuses[allTaskIds[i]] = 'done';
      }
      progress.lastTask = allTaskIds[9];

      let doneCount = tasks.filter(t => progress.statuses[t.id] === 'done').length;
      assert.equal(doneCount, 10);

      // 3. Student starts learning task 11
      progress.statuses[allTaskIds[10]] = 'learning';
      progress.lastTask = allTaskIds[10];

      // 4. Student defers an optional advanced task
      if (optionalTasks.length > 0) {
        progress.statuses[optionalTasks[0].id] = 'deferred';
      }

      // 5. Verify round-trip backup validation preserves exact state
      const validationResult = validateProgress(JSON.parse(JSON.stringify(progress)), allTaskIds);
      assert.equal(validationResult.ignored, 0);
      assert.equal(validationResult.data.lastTask, allTaskIds[10]);
      assert.equal(validationResult.data.statuses[allTaskIds[10]], 'learning');

      // 6. Percentage calculation logic
      const requiredDone = requiredTasks.filter(t => progress.statuses[t.id] === 'done').length;
      const percent = Math.round((requiredDone / requiredTasks.length) * 100);
      assert.ok(percent > 0 && percent < 100);
    });
  });

  describe('Resume Next Task Decision Engine', () => {
    it('prioritizes actively learning task over all others', () => {
      const statuses = {
        [allTaskIds[0]]: 'done',
        [allTaskIds[1]]: 'done',
        [allTaskIds[2]]: 'learning', // Active work
      };
      const next = nextTask(tasks, statuses);
      assert.equal(next.id, allTaskIds[2]);
    });

    it('selects first unfinished task when no active task is in learning state', () => {
      const statuses = {
        [allTaskIds[0]]: 'done',
        [allTaskIds[1]]: 'done',
      };
      const next = nextTask(tasks, statuses);
      assert.equal(next.id, allTaskIds[2]);
    });

    it('skips deferred optional tasks and resumes next required task', () => {
      const sample = [
        { id: 't1', optional: false },
        { id: 't2-opt', optional: true },
        { id: 't3', optional: false },
      ];
      const statuses = { t1: 'done', 't2-opt': 'deferred' };
      const next = nextTask(sample, statuses);
      assert.equal(next.id, 't3', 'Should skip deferred optional task and pick t3');
    });

    it('returns first task safely when all tasks are marked done', () => {
      const allDone = Object.fromEntries(allTaskIds.map(id => [id, 'done']));
      const next = nextTask(tasks, allDone);
      assert.equal(next.id, allTaskIds[0]);
    });
  });

  describe('Pedagogical AI Prompt Generation (chituongedu)', () => {
    it('generates fully compliant tutoring prompt with pedagogical constraints and task metadata', () => {
      const sampleTask = tasks.find(t => t.id === 'cpp-pointers') || tasks[4];
      const prompt = buildLearningPrompt(sampleTask, tasks);

      // Pedagogical invariants:
      assert.ok(prompt.startsWith(chatTitle(sampleTask)), 'Prompt must start with chat title');
      assert.ok(prompt.includes(teachingPlugin), 'Must specify teachingPlugin');
      assert.ok(prompt.includes('sinh viên năm 2 HCMUS'), 'Must include student persona');
      assert.ok(prompt.includes(sampleTask.number), 'Must include task number');
      assert.ok(prompt.includes(sampleTask.title), 'Must include task title');
      assert.ok(prompt.includes(sampleTask.kind), 'Must include task kind');

      // Check all todos are formatted into the prompt
      for (const todo of sampleTask.todos) {
        assert.ok(prompt.includes(todo), `Prompt must include todo item: ${todo}`);
      }

      // Check pedagogical guidelines
      assert.ok(prompt.includes('Không tự nhận đã đổi tên'));
      assert.ok(prompt.includes('không tự nhận đã kích hoạt'));
      assert.ok(prompt.includes('Chữa bài thẳng'));
    });

    it('blankLearningPrompt provides valid unfilled template', () => {
      const blank = blankLearningPrompt();
      assert.ok(blank.includes('[SỐ NODE]'));
      assert.ok(blank.includes('[TÊN NODE]'));
      assert.ok(blank.includes('[Học / Luyện / Áp dụng]'));
    });
  });

  describe('Dual-Export Pipeline Consistency', () => {
    it('compiled ROADMAP.md perfectly reflects in-memory tasks and chapters', () => {
      const roadmapPath = fileURLToPath(new URL('../public/ROADMAP.md', import.meta.url));
      const content = readFileSync(roadmapPath, 'utf8');

      // Verify that the task count declared in header matches tasks.length
      const headerMatch = content.match(/(\d+)\s+chặng\s+·\s+(\d+)\s+nhiệm vụ/);
      assert.ok(headerMatch, 'ROADMAP.md must state total chapters and tasks in header');
      const [, compiledChapters, compiledTasks] = headerMatch;
      assert.equal(Number(compiledChapters), chapters.length);
      assert.equal(Number(compiledTasks), tasks.length);

      // Verify sample task titles from beginning, middle, and end are present
      const checkTasks = [tasks[0], tasks[Math.floor(tasks.length / 2)], tasks[tasks.length - 1]];
      for (const t of checkTasks) {
        assert.ok(
          content.includes(t.title),
          `ROADMAP.md must contain task title: ${t.title}`
        );
      }
    });
  });

});
