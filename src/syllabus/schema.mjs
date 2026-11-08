import { SOURCE_MAP, VALID_VERIFICATION_LEVELS } from './sources.mjs';

export const VALID_LEVELS = new Set(['core', 'extension', 'specialization']);
export const VALID_PREREQ_TYPES = new Set(['required', 'recommended', 'co_requisite']);
export const VALID_SOURCE_RELATIONSHIPS = new Set(['primary', 'supplementary']);

const IMPERATIVE_START_REGEX =
  /^(Hãy\s|Tự\s(viết|cài|làm|chạy|thử|kiểm)|Chạy\s(lệnh|thử)|Ghi\s(lại|chép)|Nộp\s|Chứng\sminh\srằng\sbạn)/i;
const BULLET_START_REGEX = /^(\s*[-*•]\s|\s*\[\s?[xX]?\s?\]\s|\s*\d+\.\s)/;
const BANNED_MARKETING_REGEX = /(bảo đảm đậu|cam kết việc làm|chuẩn quốc tế 100%|chắc chắn trúng tuyển)/i;

export function countWords(text) {
  if (typeof text !== 'string') return 0;
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function validateSourceRegister(register) {
  const errors = [];
  if (!Array.isArray(register) || register.length === 0) {
    return ['SOURCE-REGISTER.json phải là mảng khác rỗng.'];
  }
  const seenIds = new Set();
  for (const record of register) {
    if (!record || typeof record !== 'object') {
      errors.push('Bản ghi nguồn không hợp lệ.');
      continue;
    }
    if (!record.id || typeof record.id !== 'string') {
      errors.push('Bản ghi nguồn thiếu id.');
    } else if (seenIds.has(record.id)) {
      errors.push(`Trùng id nguồn: ${record.id}`);
    } else {
      seenIds.add(record.id);
    }
    if (!record.title || !record.authorsOrOrg || !record.url || !record.freeAccessRoute || !record.scopeUsed) {
      errors.push(`Nguồn ${record.id} thiếu trường bắt buộc (title/authorsOrOrg/url/freeAccessRoute/scopeUsed).`);
    }
    if (!VALID_VERIFICATION_LEVELS.has(record.verificationLevel)) {
      errors.push(`Nguồn ${record.id} có verificationLevel không hợp lệ: ${record.verificationLevel}`);
    }
  }
  return errors;
}

export function validateParagraphArray(paragraphs, contextLabel, minTotalWords = 50) {
  const errors = [];
  if (!Array.isArray(paragraphs) || paragraphs.length === 0) {
    errors.push(`${contextLabel}: phải là mảng đoạn văn khác rỗng.`);
    return errors;
  }
  let totalWords = 0;
  paragraphs.forEach((p, idx) => {
    if (typeof p !== 'string' || p.trim().length < 30) {
      errors.push(`${contextLabel} [đoạn ${idx + 1}]: quá ngắn hoặc không phải chuỗi.`);
      return;
    }
    if (BULLET_START_REGEX.test(p.trim())) {
      errors.push(`${contextLabel} [đoạn ${idx + 1}]: không được ngụy trang gạch đầu dòng checklist thành đoạn văn.`);
    }
    if (IMPERATIVE_START_REGEX.test(p.trim())) {
      errors.push(`${contextLabel} [đoạn ${idx + 1}]: mở đầu bằng mệnh lệnh giao việc ('${p.trim().slice(0, 30)}...').`);
    }
    if (BANNED_MARKETING_REGEX.test(p)) {
      errors.push(`${contextLabel} [đoạn ${idx + 1}]: chứa cụm từ cam kết/quảng cáo bị cấm.`);
    }
    totalWords += countWords(p);
  });
  if (totalWords < minTotalWords) {
    errors.push(`${contextLabel}: tổng số từ (${totalWords}) thấp hơn ngưỡng tối thiểu (${minTotalWords} từ).`);
  }
  return errors;
}

export function validateSourceRefs(sources, contextLabel) {
  const errors = [];
  if (!Array.isArray(sources) || sources.length === 0) {
    errors.push(`${contextLabel}: phải có ít nhất 1 nguồn tham chiếu.`);
    return errors;
  }
  for (const ref of sources) {
    if (!ref || typeof ref !== 'object') {
      errors.push(`${contextLabel}: SourceRef không hợp lệ.`);
      continue;
    }
    if (!SOURCE_MAP.has(ref.sourceId)) {
      errors.push(`${contextLabel}: sourceId '${ref.sourceId}' không tồn tại trong SOURCE-REGISTER.json.`);
    }
    if (typeof ref.locator !== 'string' || ref.locator.trim().length < 4) {
      errors.push(`${contextLabel}: nguồn '${ref.sourceId}' thiếu locator chương/mục cụ thể.`);
    }
    if (!VALID_SOURCE_RELATIONSHIPS.has(ref.relationship)) {
      errors.push(`${contextLabel}: relationship '${ref.relationship}' không hợp lệ.`);
    }
  }
  return errors;
}

export function validatePrerequisiteDAG(courses) {
  const errors = [];
  const courseMap = new Map();
  for (const c of courses) {
    if (courseMap.has(c.id)) {
      errors.push(`Trùng ID môn học trong catalog: ${c.id}`);
    }
    courseMap.set(c.id, c);
  }

  for (const c of courses) {
    for (const pre of c.prerequisites || []) {
      if (!courseMap.has(pre.courseId)) {
        errors.push(`Môn '${c.id}' trỏ tới điều kiện trước không tồn tại: '${pre.courseId}'.`);
      }
      if (pre.courseId === c.id) {
        errors.push(`Môn '${c.id}' tự phụ thuộc vào chính nó.`);
      }
      if (!VALID_PREREQ_TYPES.has(pre.type)) {
        errors.push(`Môn '${c.id}' có loại điều kiện trước không hợp lệ: '${pre.type}'.`);
      }
      if (typeof pre.reason !== 'string' || pre.reason.trim().length < 10) {
        errors.push(`Môn '${c.id}' -> '${pre.courseId}' thiếu lý do điều kiện trước cụ thể.`);
      }
    }
  }

  // Kiểm tra chu trình trên đồ thị cạnh 'required' bằng DFS 3 màu (0: unvisited, 1: visiting, 2: visited)
  const state = new Map();
  const pathStack = [];

  function dfs(courseId) {
    state.set(courseId, 1);
    pathStack.push(courseId);
    const course = courseMap.get(courseId);
    const reqs = (course?.prerequisites || []).filter((p) => p.type === 'required');
    for (const r of reqs) {
      if (!courseMap.has(r.courseId)) continue;
      const st = state.get(r.courseId) || 0;
      if (st === 1) {
        const cycleStart = pathStack.indexOf(r.courseId);
        const cycle = [...pathStack.slice(cycleStart), r.courseId].join(' -> ');
        errors.push(`Phát hiện chu trình điều kiện bắt buộc (required cycle): ${cycle}`);
      } else if (st === 0) {
        dfs(r.courseId);
      }
    }
    pathStack.pop();
    state.set(courseId, 2);
  }

  for (const c of courses) {
    if ((state.get(c.id) || 0) === 0) {
      dfs(c.id);
    }
  }

  return errors;
}

/**
 * Validates an authored course against schema rules AND catalog hierarchy/identity when provided.
 * @param {object} course - Authored course object
 * @param {Set<string> | Map<string, object> | Array<object> | null} catalogRef - Catalog courses or IDs
 */
export function validateAuthoredCourse(course, catalogRef = null) {
  const errors = [];
  if (!course || typeof course !== 'object') {
    return ['Đối tượng môn học không hợp lệ.'];
  }
  const prefix = `Môn [${course.id || 'unknown'}]`;
  if (!course.id || typeof course.id !== 'string') errors.push(`${prefix}: thiếu id.`);
  if (!course.title || typeof course.title !== 'string') errors.push(`${prefix}: thiếu title.`);
  if (!VALID_LEVELS.has(course.level)) errors.push(`${prefix}: level '${course.level}' không hợp lệ.`);

  let catalogIds = null;
  let catalogCourseMap = null;
  if (catalogRef instanceof Map) {
    catalogCourseMap = catalogRef;
    catalogIds = new Set(catalogRef.keys());
  } else if (catalogRef instanceof Set) {
    catalogIds = catalogRef;
  } else if (Array.isArray(catalogRef)) {
    catalogCourseMap = new Map(catalogRef.map((c) => [c.id, c]));
    catalogIds = new Set(catalogCourseMap.keys());
  }

  if (catalogIds) {
    if (!course.id || !catalogIds.has(course.id)) {
      errors.push(`${prefix}: id môn học '${course.id}' không tồn tại trong catalog.`);
    }
    for (const pre of course.prerequisites || []) {
      if (!catalogIds.has(pre.courseId)) {
        errors.push(`${prefix}: prerequisite '${pre.courseId}' không nằm trong catalog.`);
      }
      if (pre.courseId === course.id) {
        errors.push(`${prefix}: môn học không được tự phụ thuộc vào chính nó.`);
      }
      if (!VALID_PREREQ_TYPES.has(pre.type)) {
        errors.push(`${prefix}: loại prerequisite '${pre.type}' không hợp lệ.`);
      }
    }
  }

  const catalogEntry = catalogCourseMap && course.id ? catalogCourseMap.get(course.id) : null;
  if (catalogEntry) {
    if (course.blockId && course.blockId !== catalogEntry.blockId) {
      errors.push(`${prefix}: blockId '${course.blockId}' lệch với catalog ('${catalogEntry.blockId}').`);
    }
    if (course.code && catalogEntry.code && course.code !== catalogEntry.code) {
      errors.push(`${prefix}: code '${course.code}' lệch với catalog ('${catalogEntry.code}').`);
    }
    const authoredPrereqs = Array.isArray(course.prerequisites) ? course.prerequisites : [];
    const catalogPrereqs = Array.isArray(catalogEntry.prerequisites) ? catalogEntry.prerequisites : [];
    const authoredPreMap = new Map();
    for (const pre of authoredPrereqs) {
      if (pre?.courseId) {
        if (authoredPreMap.has(pre.courseId)) {
          errors.push(`${prefix}: trùng lặp prerequisite '${pre.courseId}' trong môn đã viết.`);
        }
        authoredPreMap.set(pre.courseId, pre.type);
      }
    }
    const catalogPreMap = new Map();
    for (const pre of catalogPrereqs) {
      if (pre?.courseId) {
        catalogPreMap.set(pre.courseId, pre.type);
      }
    }
    for (const [catCourseId, catType] of catalogPreMap.entries()) {
      if (!authoredPreMap.has(catCourseId)) {
        errors.push(
          `${prefix}: thiếu prerequisite '${catCourseId}' (loại '${catType}') đã khai báo trong catalog.`
        );
      } else if (authoredPreMap.get(catCourseId) !== catType) {
        errors.push(
          `${prefix}: prerequisite '${catCourseId}' có loại '${authoredPreMap.get(catCourseId)}' lệch với catalog ('${catType}').`
        );
      }
    }
    for (const [authCourseId, authType] of authoredPreMap.entries()) {
      if (!catalogPreMap.has(authCourseId)) {
        errors.push(
          `${prefix}: prerequisite '${authCourseId}' (loại '${authType}') có trong môn đã viết nhưng thiếu trong catalog.`
        );
      }
    }
  }

  errors.push(...validateParagraphArray(course.overview, `${prefix}.overview`, 110));
  errors.push(...validateSourceRefs(course.sources, `${prefix}.sources`));

  if (!Array.isArray(course.boundaries) || course.boundaries.length === 0) {
    errors.push(`${prefix}: phải có ít nhất 1 giới hạn học thuật (boundaries).`);
  } else {
    course.boundaries.forEach((b, i) => {
      if (typeof b !== 'string' || b.trim().length < 25) {
        errors.push(`${prefix}.boundaries[${i}]: quá ngắn.`);
      }
    });
  }

  if (!Array.isArray(course.chapters) || course.chapters.length === 0) {
    errors.push(`${prefix}: phải có ít nhất 1 chương (chapters).`);
    return errors;
  }

  const plannedChapterIds = catalogEntry?.plannedChapters
    ? new Set(catalogEntry.plannedChapters.map((ch) => ch.id))
    : null;

  const chapterIds = new Set();
  const topicIds = new Set();

  for (const ch of course.chapters) {
    const chLabel = `${prefix} -> Chương [${ch.id || 'unknown'}]`;
    if (!ch.id || typeof ch.id !== 'string') {
      errors.push(`${chLabel}: thiếu id.`);
    } else {
      if (chapterIds.has(ch.id)) {
        errors.push(`${chLabel}: trùng id chương '${ch.id}'.`);
      } else {
        chapterIds.add(ch.id);
      }
      if (plannedChapterIds && !plannedChapterIds.has(ch.id)) {
        errors.push(`${chLabel}: id chương '${ch.id}' không thuộc danh sách chương của môn '${course.id}' trong catalog.`);
      }
    }

    if (!ch.title || typeof ch.title !== 'string') errors.push(`${chLabel}: thiếu title.`);
    errors.push(...validateParagraphArray(ch.overview, `${chLabel}.overview`, 65));
    errors.push(...validateSourceRefs(ch.sources, `${chLabel}.sources`));

    if (ch.prerequisites) {
      for (const pre of ch.prerequisites) {
        if (catalogIds && !catalogIds.has(pre.courseId)) {
          errors.push(`${chLabel}: prerequisite '${pre.courseId}' không nằm trong catalog.`);
        }
      }
    }

    if (!Array.isArray(ch.topics) || ch.topics.length === 0) {
      errors.push(`${chLabel}: phải có ít nhất 1 tiểu mục (topics).`);
      continue;
    }

    for (const tp of ch.topics) {
      const tpLabel = `${chLabel} -> Tiểu mục [${tp.id || 'unknown'}]`;
      if (!tp.id || typeof tp.id !== 'string') {
        errors.push(`${tpLabel}: thiếu id.`);
      } else if (topicIds.has(tp.id)) {
        errors.push(`${tpLabel}: trùng id tiểu mục '${tp.id}'.`);
      } else {
        topicIds.add(tp.id);
      }
      if (!tp.title || typeof tp.title !== 'string') errors.push(`${tpLabel}: thiếu title.`);
      if (!VALID_LEVELS.has(tp.level)) errors.push(`${tpLabel}: level '${tp.level}' không hợp lệ.`);
      errors.push(...validateParagraphArray(tp.paragraphs, `${tpLabel}.paragraphs`, 55));
      errors.push(...validateSourceRefs(tp.sources, `${tpLabel}.sources`));
      if (tp.prerequisites) {
        for (const pre of tp.prerequisites) {
          if (catalogIds && !catalogIds.has(pre.courseId)) {
            errors.push(`${tpLabel}: prerequisite '${pre.courseId}' không nằm trong catalog.`);
          }
        }
      }
    }
  }

  return errors;
}
