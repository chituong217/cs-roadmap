import {
  CATALOG_COURSE_MAP,
  AUTHORED_COURSES,
  getAllAuthoredChapterIds,
  getAllAuthoredTopicIds,
} from './syllabus/index.mjs';

export const STORAGE_KEY_SYLLABUS_V3 = 'cs-syllabus.progress.v3';
export const CURRICULUM_ID_V3 = 'cs-syllabus-v3';
export const SYLLABUS_PROGRESS_VERSION = 3;

export const SYLLABUS_STATUS_LABELS = Object.freeze({
  unread: 'Chưa học',
  learning: 'Đang đọc / Đang học',
  completed: 'Đã học nội dung',
  revisit: 'Cần đọc lại / Ôn thêm',
});

export const VALID_SYLLABUS_STATUSES = new Set(Object.keys(SYLLABUS_STATUS_LABELS));

const FORBIDDEN_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

export function getKnownSyllabusIds() {
  const courseIds = new Set(CATALOG_COURSE_MAP.keys());
  const chapterIds = getAllAuthoredChapterIds();
  const topicIds = getAllAuthoredTopicIds();
  const chapterToCourse = new Map();
  const topicToChapter = new Map();
  const topicToCourse = new Map();

  for (const course of CATALOG_COURSE_MAP.values()) {
    for (const ch of course.plannedChapters ?? []) {
      if (ch && typeof ch.id === 'string') {
        chapterIds.add(ch.id);
        chapterToCourse.set(ch.id, course.id);
      }
    }
  }

  for (const course of AUTHORED_COURSES) {
    for (const ch of course.chapters ?? []) {
      if (ch && typeof ch.id === 'string') {
        chapterIds.add(ch.id);
        chapterToCourse.set(ch.id, course.id);
        for (const tp of ch.topics ?? []) {
          if (tp && typeof tp.id === 'string') {
            topicIds.add(tp.id);
            topicToChapter.set(tp.id, ch.id);
            topicToCourse.set(tp.id, course.id);
          }
        }
      }
    }
  }

  return {
    courseIds,
    chapterIds,
    topicIds,
    chapterToCourse,
    topicToChapter,
    topicToCourse,
  };
}

export function createEmptySyllabusProgress(nowIso = new Date().toISOString()) {
  return {
    version: SYLLABUS_PROGRESS_VERSION,
    curriculumId: CURRICULUM_ID_V3,
    updatedAt: nowIso,
    courseStatuses: {},
    chapterStatuses: {},
    topicStatuses: {},
    lastVisited: null,
  };
}

function isPlainObject(val) {
  return Boolean(val) && typeof val === 'object' && !Array.isArray(val);
}

function sanitizeStatusMap(rawMap, validIds) {
  const sanitized = {};
  let ignoredCount = 0;
  if (!isPlainObject(rawMap)) {
    return { sanitized, ignoredCount, validObject: false };
  }
  for (const key of Object.keys(rawMap)) {
    if (!Object.hasOwn(rawMap, key) || FORBIDDEN_KEYS.has(key)) {
      ignoredCount += 1;
      continue;
    }
    const val = rawMap[key];
    if (!validIds.has(key) || typeof val !== 'string' || !VALID_SYLLABUS_STATUSES.has(val)) {
      ignoredCount += 1;
      continue;
    }
    if (val !== 'unread') {
      sanitized[key] = val;
    }
  }
  return { sanitized, ignoredCount, validObject: true };
}

function validateLastVisitedHierarchy(rawLastVisited, knownIds) {
  if (rawLastVisited === undefined || rawLastVisited === null) {
    return { valid: true, value: null, error: null };
  }
  if (!isPlainObject(rawLastVisited)) {
    return {
      valid: false,
      value: null,
      error: 'Trường lastVisited phải là null hoặc một đối tượng hợp lệ.',
    };
  }

  const { courseId = null, chapterId = null, topicId = null } = rawLastVisited;

  if (courseId !== null && (typeof courseId !== 'string' || !knownIds.courseIds.has(courseId))) {
    return {
      valid: false,
      value: null,
      error: `lastVisited.courseId '${courseId}' không tồn tại trong danh mục môn học.`,
    };
  }

  if (chapterId !== null && (typeof chapterId !== 'string' || !knownIds.chapterIds.has(chapterId))) {
    return {
      valid: false,
      value: null,
      error: `lastVisited.chapterId '${chapterId}' không tồn tại trong danh mục chương.`,
    };
  }

  if (topicId !== null && (typeof topicId !== 'string' || !knownIds.topicIds.has(topicId))) {
    return {
      valid: false,
      value: null,
      error: `lastVisited.topicId '${topicId}' không tồn tại trong danh mục tiểu mục.`,
    };
  }

  let resolvedCourseId = courseId;
  let resolvedChapterId = chapterId;

  if (topicId !== null) {
    const expectedChapter = knownIds.topicToChapter?.get(topicId) ?? null;
    const expectedCourse = knownIds.topicToCourse?.get(topicId) ?? null;
    if (resolvedChapterId !== null && expectedChapter && resolvedChapterId !== expectedChapter) {
      return {
        valid: false,
        value: null,
        error: `Quan hệ cha–con không hợp lệ trong lastVisited: tiểu mục '${topicId}' thuộc chương '${expectedChapter}', không thuộc chương '${resolvedChapterId}'.`,
      };
    }
    if (resolvedCourseId !== null && expectedCourse && resolvedCourseId !== expectedCourse) {
      return {
        valid: false,
        value: null,
        error: `Quan hệ cha–con không hợp lệ trong lastVisited: tiểu mục '${topicId}' thuộc môn '${expectedCourse}', không thuộc môn '${resolvedCourseId}'.`,
      };
    }
    resolvedChapterId = resolvedChapterId ?? expectedChapter;
    resolvedCourseId = resolvedCourseId ?? expectedCourse;
  }

  if (resolvedChapterId !== null) {
    const expectedCourse = knownIds.chapterToCourse?.get(resolvedChapterId) ?? null;
    if (resolvedCourseId !== null && expectedCourse && resolvedCourseId !== expectedCourse) {
      return {
        valid: false,
        value: null,
        error: `Quan hệ cha–con không hợp lệ trong lastVisited: chương '${resolvedChapterId}' thuộc môn '${expectedCourse}', không thuộc môn '${resolvedCourseId}'.`,
      };
    }
    resolvedCourseId = resolvedCourseId ?? expectedCourse;
  }

  if (!resolvedCourseId && !resolvedChapterId && !topicId) {
    return { valid: true, value: null, error: null };
  }

  return {
    valid: true,
    error: null,
    value: {
      courseId: resolvedCourseId,
      chapterId: resolvedChapterId,
      topicId: topicId ?? null,
    },
  };
}

export function validateSyllabusProgressV3(payload, knownIds = getKnownSyllabusIds()) {
  let parsed = payload;
  if (typeof payload === 'string') {
    try {
      parsed = JSON.parse(payload);
    } catch {
      return {
        valid: false,
        error: 'Tệp JSON bị lỗi cú pháp, không thể đọc dữ liệu tiến độ.',
        data: null,
        ignoredCount: 0,
      };
    }
  }

  if (!isPlainObject(parsed)) {
    return {
      valid: false,
      error: 'Dữ liệu tiến độ phải là một đối tượng JSON hợp lệ.',
      data: null,
      ignoredCount: 0,
    };
  }

  if (
    parsed.version === 1 ||
    parsed.version === 2 ||
    Object.hasOwn(parsed, 'checkedTodos') ||
    (Object.hasOwn(parsed, 'statuses') && !Object.hasOwn(parsed, 'curriculumId'))
  ) {
    return {
      valid: false,
      error:
        'Tệp này thuộc lộ trình nhiệm vụ cũ (v1/v2), không phải tiến độ Syllabus v3. Hệ thống không tự động chuyển trạng thái hoàn thành nhiệm vụ cũ sang chương trình mới; dữ liệu hiện tại được giữ nguyên.',
      data: null,
      ignoredCount: 0,
    };
  }

  if (parsed.version !== SYLLABUS_PROGRESS_VERSION || parsed.curriculumId !== CURRICULUM_ID_V3) {
    return {
      valid: false,
      error: `Tệp không đúng định dạng Syllabus v3 (yêu cầu version=${SYLLABUS_PROGRESS_VERSION}, curriculumId="${CURRICULUM_ID_V3}").`,
      data: null,
      ignoredCount: 0,
    };
  }

  // Kiểm tra bắt buộc 3 bản đồ trạng thái của cấu trúc xuất v3 (phân biệt bản xuất hợp lệ có map rỗng {} với payload cụt thiếu map)
  const requiredMaps = ['courseStatuses', 'chapterStatuses', 'topicStatuses'];
  for (const mapField of requiredMaps) {
    if (!Object.hasOwn(parsed, mapField) || !isPlainObject(parsed[mapField])) {
      return {
        valid: false,
        error: `Tệp tiến độ Syllabus v3 thiếu hoặc sai kiểu trường cấu trúc bắt buộc '${mapField}' (phải là một đối tượng JSON). Dữ liệu hiện tại được giữ nguyên.`,
        data: null,
        ignoredCount: 0,
      };
    }
  }

  const coursesRes = sanitizeStatusMap(parsed.courseStatuses, knownIds.courseIds);
  const chaptersRes = sanitizeStatusMap(parsed.chapterStatuses, knownIds.chapterIds);
  const topicsRes = sanitizeStatusMap(parsed.topicStatuses, knownIds.topicIds);

  const lastVisitedRes = validateLastVisitedHierarchy(parsed.lastVisited, knownIds);
  if (!lastVisitedRes.valid) {
    return {
      valid: false,
      error: lastVisitedRes.error,
      data: null,
      ignoredCount: 0,
    };
  }

  const updatedAt =
    typeof parsed.updatedAt === 'string' && parsed.updatedAt.trim().length > 0
      ? parsed.updatedAt
      : new Date().toISOString();

  return {
    valid: true,
    error: null,
    ignoredCount: coursesRes.ignoredCount + chaptersRes.ignoredCount + topicsRes.ignoredCount,
    data: {
      version: SYLLABUS_PROGRESS_VERSION,
      curriculumId: CURRICULUM_ID_V3,
      updatedAt,
      courseStatuses: coursesRes.sanitized,
      chapterStatuses: chaptersRes.sanitized,
      topicStatuses: topicsRes.sanitized,
      lastVisited: lastVisitedRes.value,
    },
  };
}

const DEFAULT_STORAGE = Symbol('DEFAULT_STORAGE');

function resolveStorageSafe(storageArg) {
  if (storageArg !== DEFAULT_STORAGE) {
    return {
      ok: true,
      storage: storageArg ?? null,
      error: null,
    };
  }
  try {
    return {
      ok: true,
      storage: globalThis ? globalThis.localStorage : null,
      error: null,
    };
  } catch (err) {
    return {
      ok: false,
      storage: null,
      error: `Không thể truy cập localStorage của trình duyệt (${err?.name || 'SecurityError'}): ${err?.message || String(err)}`,
    };
  }
}

/**
 * Đọc tiến độ Syllabus v3 kèm trạng thái chi tiết để caller phân biệt:
 * - storage chưa có dữ liệu (source: 'empty')
 * - đọc thành công (source: 'storage')
 * - lỗi truy cập/đọc storage như SecurityError (ok: false, storageError: true)
 * - dữ liệu trong storage bị hỏng cấu trúc (ok: false, source: 'corrupt_storage')
 */
export function loadSyllabusProgressV3Result(storage = DEFAULT_STORAGE) {
  const resolved = resolveStorageSafe(storage);
  if (!resolved.ok) {
    return {
      ok: false,
      source: 'storage_error',
      error: resolved.error,
      storageError: true,
      progress: createEmptySyllabusProgress(),
    };
  }

  const targetStorage = resolved.storage;
  if (!targetStorage || typeof targetStorage.getItem !== 'function') {
    return {
      ok: true,
      source: 'no_storage',
      error: null,
      storageError: false,
      progress: createEmptySyllabusProgress(),
    };
  }

  let raw = null;
  try {
    raw = targetStorage.getItem(STORAGE_KEY_SYLLABUS_V3);
  } catch (err) {
    return {
      ok: false,
      source: 'storage_error',
      error: `Không thể đọc kho lưu trữ tiến độ (${err?.name || 'StorageError'}): ${err?.message || String(err)}`,
      storageError: true,
      progress: createEmptySyllabusProgress(),
    };
  }

  if (!raw) {
    return {
      ok: true,
      source: 'empty',
      error: null,
      storageError: false,
      progress: createEmptySyllabusProgress(),
    };
  }

  const res = validateSyllabusProgressV3(raw);
  if (!res.valid) {
    return {
      ok: false,
      source: 'corrupt_storage',
      error: res.error,
      storageError: false,
      progress: createEmptySyllabusProgress(),
    };
  }

  return {
    ok: true,
    source: 'storage',
    error: null,
    storageError: false,
    progress: res.data,
  };
}

/**
 * Wrapper tiện dụng trả về đối tượng tiến độ (an toàn không ném ngoại lệ kể cả khi getter localStorage ném SecurityError).
 * Khi tích hợp UI cần biết chi tiết lỗi storage, ưu tiên gọi `loadSyllabusProgressV3Result`.
 */
export function loadSyllabusProgressV3(storage = DEFAULT_STORAGE) {
  const res = loadSyllabusProgressV3Result(storage);
  return res.progress;
}

/**
 * Lưu tiến độ Syllabus v3 với hợp đồng lỗi tường minh (không ném ngoại lệ chưa bắt khi getter localStorage hoặc setItem ném QuotaExceededError/SecurityError).
 * Khi tích hợp UI ở M7, ưu tiên dùng hàm Result này thay vì wrapper `saveSyllabusProgressV3`.
 */
export function saveSyllabusProgressV3Result(progress, storage = DEFAULT_STORAGE) {
  const res = validateSyllabusProgressV3(progress);
  if (!res.valid) {
    return {
      ok: false,
      error: res.error,
      storageError: false,
      progress: null,
    };
  }

  const resolved = resolveStorageSafe(storage);
  if (!resolved.ok) {
    return {
      ok: false,
      error: resolved.error,
      storageError: true,
      progress: res.data,
    };
  }

  const updated = {
    ...res.data,
    updatedAt: new Date().toISOString(),
  };

  const targetStorage = resolved.storage;
  if (targetStorage && typeof targetStorage.setItem === 'function') {
    try {
      targetStorage.setItem(STORAGE_KEY_SYLLABUS_V3, JSON.stringify(updated));
    } catch (err) {
      return {
        ok: false,
        error: `Không thể ghi tiến độ vào bộ nhớ trình duyệt (${err?.name || 'StorageWriteError'}): ${err?.message || String(err)}`,
        storageError: true,
        progress: res.data,
      };
    }
  }

  return {
    ok: true,
    error: null,
    storageError: false,
    progress: updated,
  };
}

/**
 * Wrapper tiện dụng trả về progress đã lưu hoặc ném Error nếu lưu thất bại.
 * Lưu ý: Việc resolve `localStorage` mặc định đã nằm trong `saveSyllabusProgressV3Result`,
 * nhưng wrapper này chủ đích throw `new Error(res.error)` khi `res.ok === false`; UI nên dùng `saveSyllabusProgressV3Result`.
 */
export function saveSyllabusProgressV3(progress, storage = DEFAULT_STORAGE) {
  const res = saveSyllabusProgressV3Result(progress, storage);
  if (!res.ok) {
    throw new Error(res.error);
  }
  return res.progress;
}

export function exportSyllabusProgressV3(progress) {
  const res = validateSyllabusProgressV3(progress);
  const safeData = res.valid ? res.data : createEmptySyllabusProgress();
  return JSON.stringify(safeData, null, 2);
}

export function importSyllabusProgressV3(jsonInput, currentProgress, storage = DEFAULT_STORAGE) {
  const res = validateSyllabusProgressV3(jsonInput);
  if (!res.valid) {
    return {
      ok: false,
      error: res.error,
      storageError: false,
      progress: currentProgress,
      ignoredCount: 0,
    };
  }

  const resolved = resolveStorageSafe(storage);
  if (!resolved.ok) {
    return {
      ok: false,
      error: `Tệp hợp lệ nhưng không thể truy cập bộ nhớ trình duyệt để lưu (${resolved.error}). Dữ liệu hiện tại trong bộ nhớ được giữ nguyên.`,
      storageError: true,
      progress: currentProgress,
      ignoredCount: 0,
    };
  }

  const targetStorage = resolved.storage;
  if (targetStorage && typeof targetStorage.setItem === 'function') {
    try {
      targetStorage.setItem(STORAGE_KEY_SYLLABUS_V3, JSON.stringify(res.data));
    } catch (err) {
      return {
        ok: false,
        error: `Tệp hợp lệ nhưng không thể lưu vào bộ nhớ trình duyệt (${err?.name || 'StorageWriteError'}): ${err?.message || String(err)}`,
        storageError: true,
        progress: currentProgress,
        ignoredCount: 0,
      };
    }
  }

  return {
    ok: true,
    error: null,
    storageError: false,
    progress: res.data,
    ignoredCount: res.ignoredCount,
  };
}
