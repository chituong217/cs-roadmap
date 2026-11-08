// Dữ liệu node bản đồ: dựng từ các "spec" viết tay (src/map/specs/*.mjs) + giáo trình 50 môn.
// ID riêng "n-*". Mỗi spec gộp nhiều chủ đề (topic) hoặc cả chương; `cov` ghi chương/topic được gộp để test
// bao phủ kiểm được không mất nội dung. `scope` (các đoạn văn) KHÔNG phải checklist giao việc.
import { BLOCKS, AUTHORED_COURSES, AUTHORED_COURSE_MAP, CATALOG_COURSE_MAP, computeTopologicalOrder } from '../syllabus/index.mjs';
import { SPECS } from './specs/index.mjs';

const ACCENTS = ['#23654f', '#3f5f77', '#866716', '#7a4b6b', '#a4562c', '#2f6f73', '#5a5a8f'];
const SHORT = {
  'block-1': 'Bắt đầu từ số 0', 'block-2': 'Lập trình và toán nền', 'block-3': 'Cấu trúc dữ liệu và thuật toán',
  'block-4': 'Hệ thống máy tính', 'block-5': 'Dữ liệu và phần mềm', 'block-6': 'Trí tuệ và tương tác', 'block-7': 'Chuyên sâu',
};
export const MAP_GROUPS = BLOCKS.map((b, i) => ({ id: b.id, title: SHORT[b.id] || b.title, accent: ACCENTS[i % ACCENTS.length] }));
export const MAP_LEVELS = { core: 'Nền tảng', extension: 'Mở rộng' };
const stripChapter = s => s.replace(/^Chương\s+\d+\s*[—-]\s*/, '');

const courseOrder = computeTopologicalOrder().map(x => x.id || x);
const rank = new Map(courseOrder.map((id, i) => [id, i]));

// topic id -> { course, chapter, topic }
const topicIndex = new Map();
const chapterIndex = new Map();
for (const c of AUTHORED_COURSES) for (const ch of c.chapters) {
  chapterIndex.set(ch.id, { course: c, chapter: ch });
  for (const t of ch.topics) topicIndex.set(t.id, { course: c, chapter: ch, topic: t });
}
export const expandCov = cov => cov.flatMap(id => chapterIndex.has(id) ? chapterIndex.get(id).chapter.topics.map(t => t.id) : [id]);

const specsSorted = [...SPECS].sort((a, b) => rank.get(a.c) - rank.get(b.c) || SPECS.indexOf(a) - SPECS.indexOf(b));
const lastOfCourse = new Map();
const firstOfCourse = new Map();
specsSorted.forEach(s => { lastOfCourse.set(s.c, s.id); if (!firstOfCourse.has(s.c)) firstOfCourse.set(s.c, s.id); });

function buildSources(topicIds) {
  const seen = new Map();
  for (const id of topicIds) for (const s of topicIndex.get(id)?.topic.sources ?? []) {
    const arr = seen.get(s.sourceId) ?? [];
    if (s.locator && !arr.includes(s.locator)) arr.push(s.locator);
    seen.set(s.sourceId, arr);
  }
  return [...seen].map(([sourceId, locs]) => ({ sourceId, locator: locs.slice(0, 3).join('; ') }));
}

let prevInCourse = new Map();
export const MAP_NODES = specsSorted.map((s, i) => {
  const course = AUTHORED_COURSE_MAP.get(s.c);
  const cat = CATALOG_COURSE_MAP.get(s.c);
  const covers = expandCov(s.cov);
  const first = topicIndex.get(covers[0]);
  const prev = prevInCourse.get(s.c);
  const needs = [];
  if (prev) needs.push(prev);
  else for (const p of cat.prerequisites ?? []) if (p.type === 'required' && lastOfCourse.has(p.courseId)) needs.push(lastOfCourse.get(p.courseId));
  for (const n of s.n ?? []) if (!needs.includes(n)) needs.push(n);
  prevInCourse.set(s.c, s.id);
  const needsText = [
    ...(prev ? [] : (cat.prerequisites ?? []).map(p => `Môn ${AUTHORED_COURSE_MAP.get(p.courseId)?.title ?? p.courseId} (${{ required: 'bắt buộc', recommended: 'nên có', co_requisite: 'học song song' }[p.type]})`)),
    ...(s.x ?? []),
  ];
  const allExt = covers.every(id => topicIndex.get(id)?.topic.level === 'extension');
  return {
    id: s.id, title: s.t, groupId: course.blockId, courseId: s.c, courseTitle: course.title,
    stage: stripChapter(first.chapter.title), order: i + 1, level: allExt ? 'extension' : 'core',
    needs, needsText, scope: s.p, covers, sources: buildSources(covers),
  };
});
