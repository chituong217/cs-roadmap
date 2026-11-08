import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  BLOCKS,
  CATALOG_COURSES,
  CATALOG_COURSE_MAP,
  computeTopologicalOrder,
  SOURCE_REGISTER,
  SOURCE_MAP,
  M2_SAMPLE_COURSES,
  M3_BLOCK_1_2_COURSES,
  AUTHORED_COURSES,
  AUTHORED_COURSE_MAP,
  COURSE_INTRO_PROGRAMMING,
  COURSE_DISCRETE_MATH,
  COURSE_OPERATING_SYSTEMS_SAMPLE,
  validateSourceRegister,
  validatePrerequisiteDAG,
  validateAuthoredCourse,
  validateParagraphArray,
} from '../src/syllabus/index.mjs';

import {
  STORAGE_KEY_SYLLABUS_V3,
  CURRICULUM_ID_V3,
  createEmptySyllabusProgress,
  validateSyllabusProgressV3,
  loadSyllabusProgressV3,
  loadSyllabusProgressV3Result,
  saveSyllabusProgressV3,
  saveSyllabusProgressV3Result,
  exportSyllabusProgressV3,
  importSyllabusProgressV3,
} from '../src/syllabus-progress.mjs';

import {
  VERIFIED_BACKUP_SHA256,
  runBackupWorkflow,
} from '../scripts/backup-roadmap-v21.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

test('Step 1 Backup file exists and contains complete verified v2.1.0 snapshot', () => {
  const backupPath = path.join(ROOT, 'docs', 'backups', 'ROADMAP-BEFORE-SYLLABUS-REWRITE.md');
  assert.equal(fs.existsSync(backupPath), true, 'Backup file must exist');
  const stat = fs.statSync(backupPath);
  assert.ok(stat.size > 850_000, 'Backup file must contain full academic text (>850 KB UTF-8)');
  const content = fs.readFileSync(backupPath, 'utf8');
  assert.match(content, /ecbece0e91597ca2790eff51d7ff7f7b8f4a3e2b/, 'Must record verified commit hash');
  assert.match(content, /https:\/\/chituong217\.github\.io\/cs-roadmap\//, 'Must record live URL');
  assert.match(content, /Tổng số Nhiệm vụ \(Nodes\/Tasks\):\*\* 419/, 'Must contain all 419 tasks');
});

test('M1 Source Register is valid, browser-safe, and matches SOURCE-REGISTER.json (registered sources)', () => {
  const errors = validateSourceRegister(SOURCE_REGISTER);
  assert.deepEqual(errors, []);
  assert.ok(SOURCE_REGISTER.length >= 42, 'Must preserve the baseline source coverage');

  const jsonPath = path.join(ROOT, 'docs', 'syllabus-v3', 'SOURCE-REGISTER.json');
  const jsonRecords = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  assert.deepEqual(SOURCE_REGISTER, jsonRecords, 'sources.mjs must match SOURCE-REGISTER.json exactly');

  const sourcesMjsRaw = fs.readFileSync(path.join(ROOT, 'src', 'syllabus', 'sources.mjs'), 'utf8');
  assert.equal(/node:fs|readFileSync/.test(sourcesMjsRaw), false, 'sources.mjs must be pure ESM without node:fs');

  assert.equal(SOURCE_MAP.get('mit-6042j-2015')?.verificationLevel, 'section_read_for_authoring');
  assert.equal(SOURCE_MAP.get('dmoi-3e')?.verificationLevel, 'section_read_for_authoring');
  assert.equal(SOURCE_MAP.get('ostep-v110')?.verificationLevel, 'section_read_for_authoring');
  assert.equal(SOURCE_MAP.get('learncpp')?.verificationLevel, 'section_read_for_authoring');
});

test('M1 Catalog has 7 blocks, 50 courses, and an acyclic prerequisite DAG', () => {
  assert.equal(BLOCKS.length, 7);
  assert.equal(CATALOG_COURSES.length, 50);

  const dagErrors = validatePrerequisiteDAG(CATALOG_COURSES);
  assert.deepEqual(dagErrors, []);

  const topo = computeTopologicalOrder(CATALOG_COURSES);
  assert.equal(topo.length, 50);

  // Verify every required prerequisite appears earlier in topological order
  const pos = new Map(topo.map((c, idx) => [c.id, idx]));
  for (const course of CATALOG_COURSES) {
    for (const pre of course.prerequisites ?? []) {
      if (pre.type === 'required') {
        assert.ok(
          pos.get(pre.courseId) < pos.get(course.id),
          `Required prerequisite ${pre.courseId} must precede ${course.id} in topological sort`
        );
      }
    }
  }
});

test('M1 Cycle detector catches artificial required dependency cycles', () => {
  const cyclicCourses = [
    {
      id: 'course-a',
      prerequisites: [{ courseId: 'course-b', type: 'required', reason: 'Cần course-b để học course-a.' }],
    },
    {
      id: 'course-b',
      prerequisites: [{ courseId: 'course-a', type: 'required', reason: 'Cần course-a để học course-b.' }],
    },
  ];
  const errors = validatePrerequisiteDAG(cyclicCourses);
  assert.ok(errors.some((e) => e.includes('required cycle')));
});

test('M2 & M3 Authored courses pass schema, catalog membership, chapter membership, word count, source locator, and anti-checklist checks', () => {
  assert.equal(M2_SAMPLE_COURSES.length, 3);
  assert.equal(M3_BLOCK_1_2_COURSES.length, 14);
  assert.equal(AUTHORED_COURSES.length, 50, 'Every catalog course must have authored content');

  for (const course of AUTHORED_COURSES) {
    const errors = validateAuthoredCourse(course, CATALOG_COURSE_MAP);
    assert.deepEqual(errors, [], `Course ${course.id} had validation errors: ${errors.join('; ')}`);
  }

  // Verify every single course in Block I and Block II (CS-01 .. CS-14) is fully authored and matches all catalog plannedChapters
  const block1And2Catalog = CATALOG_COURSES.filter(
    (c) => c.blockId === 'block-1' || c.blockId === 'block-2'
  );
  assert.equal(block1And2Catalog.length, 14);
  for (const catCourse of block1And2Catalog) {
    const authored = AUTHORED_COURSE_MAP.get(catCourse.id);
    assert.ok(authored, `Course ${catCourse.id} (${catCourse.code}) in ${catCourse.blockId} must be authored in M3`);
    assert.deepEqual(
      authored.chapters.map((ch) => ch.id),
      catCourse.plannedChapters.map((ch) => ch.id),
      `Course ${catCourse.id} authored chapters must match catalog plannedChapters in exact order`
    );
  }

  // Verify globally unique chapter IDs and topic IDs across all 15 authored courses
  const seenChapters = new Set();
  const seenTopics = new Set();
  for (const course of AUTHORED_COURSES) {
    for (const ch of course.chapters) {
      assert.equal(seenChapters.has(ch.id), false, `Duplicate chapter id across courses: ${ch.id}`);
      seenChapters.add(ch.id);
      for (const tp of ch.topics) {
        assert.equal(seenTopics.has(tp.id), false, `Duplicate topic id across courses: ${tp.id}`);
        seenTopics.add(tp.id);
      }
    }
  }
  assert.equal(seenChapters.size, AUTHORED_COURSES.reduce((n,c)=>n+c.chapters.length,0));
  assert.equal(seenTopics.size, AUTHORED_COURSES.reduce((n,c)=>n+c.chapters.reduce((m,ch)=>m+ch.topics.length,0),0));

  // Verify M2 gate local math fix on R(n) upper bound in discrete-math-part2.mjs
  const spaChapter = COURSE_DISCRETE_MATH.chapters.find((ch) => ch.id === 'dm-sums-products-asymptotics');
  const stirlingTopic = spaChapter.topics.find((tp) => tp.id === 'dm-spa-harmonic-integral-stirling');
  assert.match(
    stirlingTopic.paragraphs[1],
    /1 \\le R\(n\) \\le \(n\+1\)\\ln\(n\+1\) - n\\ln n = \\ln n \+ \(n\+1\)\\ln\(1 \+ 1\/n\) = O\(\\ln n\)/,
    'Must use exact algebraic difference for R(n) upper bound as required by CODEX-M2-GATE-DECISION.md'
  );

  // Codex Finding 2.3: reject authored course whose id does not exist in catalog
  const fakeCourseErrors = validateAuthoredCourse(
    { ...COURSE_INTRO_PROGRAMMING, id: 'does-not-exist' },
    CATALOG_COURSE_MAP
  );
  assert.ok(
    fakeCourseErrors.some((e) => e.includes('không tồn tại trong catalog')),
    'Must reject authored course id not in catalog'
  );

  // Codex Finding 2.3: reject authored chapter whose id is not in catalog plannedChapters
  const badChapterCourse = {
    ...COURSE_INTRO_PROGRAMMING,
    chapters: [
      {
        ...COURSE_INTRO_PROGRAMMING.chapters[0],
        id: 'ip-unplanned-chapter-id',
      },
    ],
  };
  const badChapterErrors = validateAuthoredCourse(badChapterCourse, CATALOG_COURSE_MAP);
  assert.ok(
    badChapterErrors.some((e) => e.includes('không thuộc danh sách chương của môn')),
    'Must reject chapter id not in catalog plannedChapters'
  );

  // Rejects disguised checklist or imperative task prompt
  const badParagraphErrors = validateParagraphArray(
    ['Hãy tự viết một chương trình kiểm tra số nguyên tố và nộp lên GitHub.'],
    'test-bad',
    5
  );
  assert.ok(badParagraphErrors.length > 0, 'Must reject imperative task command');
});

test('M2 Discrete Math (CS-09) has all 10 chapters and all 6 mandatory Recurrence topics + 4 Generating Function topics', () => {
  assert.equal(COURSE_DISCRETE_MATH.chapters.length, 10);

  const recChapter = COURSE_DISCRETE_MATH.chapters.find((ch) => ch.id === 'dm-recurrences');
  assert.ok(recChapter, 'Must include dm-recurrences chapter');

  const expectedRecurrenceTopics = [
    'dm-recurrences-modeling',
    'dm-recurrences-iteration-induction',
    'dm-recurrences-linear-homogeneous-distinct',
    'dm-recurrences-repeated-complex-roots',
    'dm-recurrences-nonhomogeneous-particular',
    'dm-recurrences-limits-divide-conquer-bridge',
  ];
  assert.deepEqual(
    recChapter.topics.map((t) => t.id),
    expectedRecurrenceTopics
  );

  const gfChapter = COURSE_DISCRETE_MATH.chapters.find((ch) => ch.id === 'dm-generating-functions');
  assert.ok(gfChapter, 'Must include dm-generating-functions chapter');
  assert.equal(gfChapter.topics.length, 4);
});

test('M2 Operating Systems sample (CS-25) has full Virtual Memory chapter with 6 distinct topics', () => {
  const vmChapter = COURSE_OPERATING_SYSTEMS_SAMPLE.chapters.find((ch) => ch.id === 'os-virtual-memory');
  assert.ok(vmChapter, 'Must include os-virtual-memory chapter');

  const expectedVmTopics = [
    'os-vm-address-space-abstraction',
    'os-vm-hardware-translation-segmentation',
    'os-vm-paging-multilevel-tables',
    'os-vm-tlb-locality',
    'os-vm-page-faults-replacement',
    'os-vm-limits-hardware-realities',
  ];
  assert.deepEqual(
    vmChapter.topics.map((t) => t.id),
    expectedVmTopics
  );
});

test('M2 Progress v3 is isolated from v1/v2, rejects legacy task imports, and preserves state on corrupt JSON', () => {
  assert.equal(STORAGE_KEY_SYLLABUS_V3, 'cs-syllabus.progress.v3');
  assert.equal(CURRICULUM_ID_V3, 'cs-syllabus-v3');

  const mockStore = new Map();
  const storage = {
    getItem: (k) => (mockStore.has(k) ? mockStore.get(k) : null),
    setItem: (k, v) => mockStore.set(k, String(v)),
  };

  // Seed legacy v2 storage to ensure v3 never reads or mutates it
  const legacyV2Raw = JSON.stringify({
    version: 2,
    statuses: { 'task-01': 'done' },
    checkedTodos: { 'task-01:0': true },
  });
  storage.setItem('khmt-roadmap.progress.v2', legacyV2Raw);

  const initial = loadSyllabusProgressV3(storage);
  assert.deepEqual(initial.courseStatuses, {});
  assert.deepEqual(initial.topicStatuses, {});

  // Save valid v3 progress
  const saved = saveSyllabusProgressV3(
    {
      ...initial,
      courseStatuses: { 'discrete-math': 'learning' },
      chapterStatuses: { 'dm-recurrences': 'learning' },
      topicStatuses: { 'dm-recurrences-modeling': 'completed' },
      lastVisited: {
        courseId: 'discrete-math',
        chapterId: 'dm-recurrences',
        topicId: 'dm-recurrences-modeling',
      },
    },
    storage
  );
  assert.equal(saved.topicStatuses['dm-recurrences-modeling'], 'completed');
  assert.equal(storage.getItem('khmt-roadmap.progress.v2'), legacyV2Raw);

  // Reject importing legacy v2 JSON into v3
  const rejectLegacy = importSyllabusProgressV3(legacyV2Raw, saved, storage);
  assert.equal(rejectLegacy.ok, false);
  assert.match(rejectLegacy.error, /lộ trình nhiệm vụ cũ \(v1\/v2\)/);
  assert.equal(rejectLegacy.progress.topicStatuses['dm-recurrences-modeling'], 'completed');

  // Reject corrupt JSON without losing current progress
  const rejectCorrupt = importSyllabusProgressV3('{corrupt json', saved, storage);
  assert.equal(rejectCorrupt.ok, false);
  assert.equal(rejectCorrupt.progress.topicStatuses['dm-recurrences-modeling'], 'completed');

  // Round-trip export and import with unknown IDs filtered out safely
  const exported = exportSyllabusProgressV3(saved);
  const parsedExport = JSON.parse(exported);
  parsedExport.topicStatuses['unknown-topic-id'] = 'completed';
  const reimported = importSyllabusProgressV3(JSON.stringify(parsedExport), createEmptySyllabusProgress(), storage);
  assert.equal(reimported.ok, true);
  assert.equal(reimported.ignoredCount, 1);
  assert.equal(reimported.progress.topicStatuses['dm-recurrences-modeling'], 'completed');
  assert.equal(reimported.progress.topicStatuses['unknown-topic-id'], undefined);

  // Codex Finding 2.1 (P1): Reject structurally incomplete v3 payload missing status maps
  let setItemCalls = 0;
  const countingStorage = {
    getItem: (k) => storage.getItem(k),
    setItem: (k, v) => {
      setItemCalls += 1;
      storage.setItem(k, v);
    },
  };
  const incompleteV3Raw = JSON.stringify({
    version: 3,
    curriculumId: 'cs-syllabus-v3',
  });
  const rejectIncomplete = importSyllabusProgressV3(incompleteV3Raw, saved, countingStorage);
  assert.equal(rejectIncomplete.ok, false, 'Must reject payload missing courseStatuses/chapterStatuses/topicStatuses');
  assert.equal(setItemCalls, 0, 'Must not write to storage when import is rejected');
  assert.equal(
    rejectIncomplete.progress.topicStatuses['dm-recurrences-modeling'],
    'completed',
    'Must preserve existing progress when incomplete payload is rejected'
  );

  // Valid empty v3 export (with explicit empty maps) is still accepted
  const validEmptyExport = exportSyllabusProgressV3(createEmptySyllabusProgress());
  const acceptValidEmpty = importSyllabusProgressV3(validEmptyExport, saved, countingStorage);
  assert.equal(acceptValidEmpty.ok, true, 'Must accept valid empty v3 export that has explicit status maps');
  assert.deepEqual(acceptValidEmpty.progress.topicStatuses, {});
});

test('Codex Finding 2.3 (P2): Storage read/write exceptions are handled gracefully and lastVisited hierarchy is enforced', () => {
  const existingProgress = {
    ...createEmptySyllabusProgress(),
    courseStatuses: { 'discrete-math': 'learning' },
    chapterStatuses: { 'dm-recurrences': 'learning' },
    topicStatuses: { 'dm-recurrences-modeling': 'completed' },
  };

  // SecurityError on getItem does not throw
  const throwingReadStorage = {
    getItem: () => {
      const err = new Error('Storage disabled in private mode');
      err.name = 'SecurityError';
      throw err;
    },
    setItem: () => {},
  };
  const fallbackLoaded = loadSyllabusProgressV3(throwingReadStorage);
  assert.deepEqual(fallbackLoaded.topicStatuses, {});
  const loadResult = loadSyllabusProgressV3Result(throwingReadStorage);
  assert.equal(loadResult.ok, false);
  assert.equal(loadResult.storageError, true);

  // QuotaExceededError on setItem does not throw or overwrite existing progress on import
  const throwingWriteStorage = {
    getItem: () => null,
    setItem: () => {
      const err = new Error('Storage quota exceeded');
      err.name = 'QuotaExceededError';
      throw err;
    },
  };
  const saveResult = saveSyllabusProgressV3Result(existingProgress, throwingWriteStorage);
  assert.equal(saveResult.ok, false);
  assert.equal(saveResult.storageError, true);

  const validExport = exportSyllabusProgressV3(createEmptySyllabusProgress());
  const failedImportOnWrite = importSyllabusProgressV3(validExport, existingProgress, throwingWriteStorage);
  assert.equal(failedImportOnWrite.ok, false);
  assert.equal(failedImportOnWrite.storageError, true);
  assert.equal(
    failedImportOnWrite.progress.topicStatuses['dm-recurrences-modeling'],
    'completed',
    'Existing in-memory progress must remain intact if storage.setItem throws'
  );

  // Hierarchy check: reject mismatched courseId / chapterId / topicId in lastVisited
  const mismatchedHierarchyRaw = JSON.stringify({
    version: 3,
    curriculumId: 'cs-syllabus-v3',
    courseStatuses: {},
    chapterStatuses: {},
    topicStatuses: {},
    lastVisited: {
      courseId: 'intro-programming',
      chapterId: 'ip-execution-model',
      topicId: 'dm-recurrences-modeling', // belongs to discrete-math, not intro-programming!
    },
  });
  const hierarchyCheck = validateSyllabusProgressV3(mismatchedHierarchyRaw);
  assert.equal(hierarchyCheck.valid, false);
  assert.match(hierarchyCheck.error, /không thuộc chương/);
});

test('Codex Finding 2.2 (P2): Backup script defaults to verify-only, checks provenance & SHA-256, and refuses overwrite', async () => {
  const verifyResult = await runBackupWorkflow({ verifyOnly: true });
  assert.equal(verifyResult.ok, true, `Backup verification failed: ${verifyResult.error || ''}`);
  assert.equal(verifyResult.action, 'verified_existing_snapshot');
  assert.equal(verifyResult.sha256, VERIFIED_BACKUP_SHA256);

  const refuseOverwriteResult = await runBackupWorkflow({ verifyOnly: false, forceOverwrite: false });
  assert.equal(refuseOverwriteResult.ok, false, 'Must refuse overwriting verified backup without force flag');
  assert.equal(refuseOverwriteResult.action, 'refused_overwrite');
});

test('Codex Re-Review Finding 1 (P2): Default-parameter localStorage getter throwing SecurityError is caught safely across load/save/import', () => {
  const originalDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  const existingProgress = {
    ...createEmptySyllabusProgress(),
    courseStatuses: { 'discrete-math': 'learning' },
    chapterStatuses: { 'dm-recurrences': 'learning' },
    topicStatuses: { 'dm-recurrences-modeling': 'completed' },
  };
  const validEmptyExport = exportSyllabusProgressV3(createEmptySyllabusProgress());

  try {
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      get() {
        const err = new Error('Access to localStorage is denied by browser privacy settings');
        err.name = 'SecurityError';
        throw err;
      },
    });

    // 1. Default call to loadSyllabusProgressV3Result() without arguments must NOT throw
    const loadRes = loadSyllabusProgressV3Result();
    assert.equal(loadRes.ok, false);
    assert.equal(loadRes.storageError, true);
    assert.equal(loadRes.source, 'storage_error');
    assert.match(loadRes.error, /SecurityError/);

    // 2. Default call to convenience loadSyllabusProgressV3() without arguments returns fallback empty progress without throwing
    const fallback = loadSyllabusProgressV3();
    assert.deepEqual(fallback.topicStatuses, {});

    // 3. Default call to saveSyllabusProgressV3Result(progress) without storage arg returns ok: false, storageError: true
    const saveRes = saveSyllabusProgressV3Result(existingProgress);
    assert.equal(saveRes.ok, false);
    assert.equal(saveRes.storageError, true);
    assert.match(saveRes.error, /SecurityError/);

    // 4. Default call to convenience wrapper saveSyllabusProgressV3(progress) throws controlled Error from saveResult
    assert.throws(() => saveSyllabusProgressV3(existingProgress), /SecurityError/);

    // 5. Default call to importSyllabusProgressV3(jsonInput, currentProgress) without storage arg preserves currentProgress and returns ok: false
    const importRes = importSyllabusProgressV3(validEmptyExport, existingProgress);
    assert.equal(importRes.ok, false);
    assert.equal(importRes.storageError, true);
    assert.equal(importRes.progress.topicStatuses['dm-recurrences-modeling'], 'completed');
  } finally {
    if (originalDescriptor) {
      Object.defineProperty(globalThis, 'localStorage', originalDescriptor);
    } else {
      delete globalThis.localStorage;
    }
  }
});

test('Codex Re-Review Finding 4: Intro Programming (CS-04) has exactly 24 topics = 22 core + 2 extension with exact IDs', () => {
  const allTopics = COURSE_INTRO_PROGRAMMING.chapters.flatMap((ch) => ch.topics);
  assert.equal(allTopics.length, 24);
  const coreTopics = allTopics.filter((t) => t.level === 'core');
  const extensionTopics = allTopics.filter((t) => t.level === 'extension');
  assert.equal(coreTopics.length, 22);
  assert.equal(extensionTopics.length, 2);
  assert.deepEqual(
    extensionTopics.map((t) => t.id),
    ['ip-exec-translation-linking-extension', 'ip-seq-string-view-extension']
  );
});

test('Authored prerequisite edges agree with the catalog graph', () => {
  const edges = (course) => course.prerequisites.map(({ courseId, type }) => `${courseId}:${type}`).sort();
  for (const course of AUTHORED_COURSES) {
    assert.deepEqual(edges(course), edges(CATALOG_COURSE_MAP.get(course.id)), course.id);
  }
});

test('M4 covers every planned course and chapter in blocks III and IV', () => {
  const catalog = CATALOG_COURSES.filter(c => ['block-3', 'block-4'].includes(c.blockId));
  assert.equal(catalog.length, 14);
  for (const expected of catalog) {
    const actual = AUTHORED_COURSE_MAP.get(expected.id);
    assert.ok(actual, `Missing M4 course: ${expected.id}`);
    assert.deepEqual(actual.chapters.map(ch => ch.id), expected.plannedChapters.map(ch => ch.id), `Incomplete M4 course: ${expected.id}`);
  }
  const os = AUTHORED_COURSE_MAP.get('operating-systems');
  const sample = COURSE_OPERATING_SYSTEMS_SAMPLE.chapters[0];
  assert.deepEqual(os.chapters.find(ch => ch.id === sample.id), sample, 'Keep the reviewed virtual-memory chapter');
});


test('Full syllabus covers all fifty catalog courses and their planned chapters', () => {
  assert.equal(AUTHORED_COURSES.length, CATALOG_COURSES.length);
  for (const expected of CATALOG_COURSES) {
    const actual = AUTHORED_COURSE_MAP.get(expected.id);
    assert.ok(actual, expected.id);
    assert.deepEqual(actual.chapters.map(ch => ch.id), expected.plannedChapters.map(ch => ch.id), expected.id);
  }
});
