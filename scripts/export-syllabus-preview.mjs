import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  BLOCKS,
  CATALOG_COURSE_MAP,
  M2_SAMPLE_COURSES,
  M3_BLOCK_1_2_COURSES,
  AUTHORED_COURSES,
  SOURCE_MAP,
  countWords,
  validateAuthoredCourse,
} from '../src/syllabus/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs', 'syllabus-v3');
const PUBLIC_DIR = path.join(ROOT, 'public');

for (const course of AUTHORED_COURSES) {
  const errs = validateAuthoredCourse(course, CATALOG_COURSE_MAP);
  if (errs.length > 0) {
    console.error(`Validation failed for authored course ${course.id}:`, errs);
    process.exit(1);
  }
}

function renderSyllabusDocument({ title, purpose, statsHeading, statsSummaryLine, courses }) {
  const lines = [];
  lines.push(`# ${title}`);
  lines.push('');
  lines.push(`> **Mục đích tài liệu:** ${purpose}`);
  lines.push('');

  let totalChapters = 0;
  let totalTopics = 0;
  let coreTopics = 0;
  let extensionTopics = 0;
  let totalWords = 0;

  for (const course of courses) {
    totalWords += course.overview.reduce((acc, p) => acc + countWords(p), 0);
    for (const ch of course.chapters) {
      totalChapters += 1;
      totalWords += ch.overview.reduce((acc, p) => acc + countWords(p), 0);
      for (const tp of ch.topics) {
        totalTopics += 1;
        if (tp.level === 'core') coreTopics += 1;
        if (tp.level === 'extension') extensionTopics += 1;
        totalWords += tp.paragraphs.reduce((acc, p) => acc + countWords(p), 0);
      }
    }
  }

  lines.push(`## ${statsHeading}`);
  lines.push('');
  lines.push(`- ${statsSummaryLine}`);
  lines.push(`- **Tổng số chương đã biên soạn toàn văn:** ${totalChapters} chương`);
  lines.push(
    `- **Tổng số tiểu mục (topics) đã biên soạn toàn văn:** ${totalTopics} tiểu mục (${coreTopics} \`core\` + ${extensionTopics} \`extension\`)`
  );
  lines.push(
    `- **Tổng số từ học thuật (chỉ tính phần văn xuôi overview & paragraphs):** ${totalWords.toLocaleString('en-US')} từ`
  );
  lines.push('');
  lines.push('---');
  lines.push('');

  for (const course of courses) {
    const block = BLOCKS.find((b) => b.id === course.blockId);
    lines.push(`## ${course.code}: ${course.title} (\`${course.id}\`)`);
    lines.push('');
    lines.push(`- **Thuộc khối:** ${block ? block.title : course.blockId}`);
    lines.push(`- **Phân loại:** \`${course.level}\``);
    if (course.prerequisites && course.prerequisites.length > 0) {
      lines.push('- **Điều kiện tiên quyết:**');
      for (const pre of course.prerequisites) {
        lines.push(`  - \`${pre.courseId}\` (*${pre.type}*): ${pre.reason}`);
      }
    } else {
      lines.push('- **Điều kiện tiên quyết:** Không yêu cầu (Môn khởi đầu từ số 0).');
    }
    lines.push('');
    lines.push('### Tổng quan môn học');
    lines.push('');
    for (const p of course.overview) {
      lines.push(p);
      lines.push('');
    }
    lines.push('### Giới hạn học thuật (`boundaries`)');
    lines.push('');
    for (const b of course.boundaries) {
      lines.push(`- ${b}`);
    }
    lines.push('');
    lines.push('### Nguồn giáo trình của môn học');
    lines.push('');
    for (const s of course.sources) {
      const meta = SOURCE_MAP.get(s.sourceId);
      lines.push(
        `- **${meta ? meta.title : s.sourceId}** (\`${s.sourceId}\`, *${s.relationship}*): ${s.locator} — URL: ${meta ? meta.url : ''}`
      );
    }
    lines.push('');

    for (const ch of course.chapters) {
      lines.push(`### ${ch.title} (\`${ch.id}\`)`);
      lines.push('');
      for (const p of ch.overview) {
        lines.push(p);
        lines.push('');
      }
      const chSrc = ch.sources.map((s) => `\`${s.sourceId}\` (${s.locator})`).join('; ');
      lines.push(`*Nguồn chương:* ${chSrc}`);
      lines.push('');

      for (let i = 0; i < ch.topics.length; i++) {
        const tp = ch.topics[i];
        lines.push(`#### Tiểu mục ${i + 1}: ${tp.title} (\`${tp.id}\` — mức \`${tp.level}\`)`);
        lines.push('');
        if (Array.isArray(tp.prerequisites) && tp.prerequisites.length > 0) {
          const preText = tp.prerequisites
            .map((pre) => `\`${pre.courseId}\` (*${pre.type}*): ${pre.reason}`)
            .join('; ');
          lines.push(`- **Tiên quyết riêng của tiểu mục:** ${preText}`);
          lines.push('');
        }
        for (const para of tp.paragraphs) {
          lines.push(para);
          lines.push('');
        }
        const tpSrc = tp.sources.map((s) => `\`${s.sourceId}\`: ${s.locator}`).join(' | ');
        lines.push(`> **Nguồn đối chiếu:** ${tpSrc}`);
        lines.push('');
      }
    }

    lines.push('---');
    lines.push('');
  }

  return {
    markdown: lines.join('\n'),
    totalCourses: courses.length,
    totalChapters,
    totalTopics,
    coreTopics,
    extensionTopics,
    totalWords,
  };
}

const m2Result = renderSyllabusDocument({
  title: 'Bản Đọc Toàn Văn Syllabus v3 — Mốc Kiểm Định M2 (Sample Courses)',
  purpose:
    'Xuất bản toàn văn các môn học và chương mẫu thuộc cổng kiểm định **M2** theo đúng kiến trúc `Khối → Môn → Chương → Tiểu mục` với văn xuôi học thuật giải thích đối tượng, khái niệm, phương pháp, điều kiện áp dụng và giới hạn phạm vi.',
  statsHeading: 'Thống kê định lượng M2',
  statsSummaryLine: `**Số môn mẫu biên soạn ở M2:** ${M2_SAMPLE_COURSES.length} môn (\`CS-04 Lập trình nhập môn\`, \`CS-09 Toán rời rạc và lập luận cho CS\`, và chương mẫu hệ thống của \`CS-25 Hệ điều hành\`)`,
  courses: M2_SAMPLE_COURSES,
});

const m3Result = renderSyllabusDocument({
  title: 'Bản Đọc Toàn Văn Syllabus v3 — Mốc Kiểm Định M3 (Khối I–II: Nền Nhập Môn, Lập Trình & Toán Học + Mẫu Hệ Thống)',
  purpose:
    'Xuất bản toàn văn toàn bộ 14/14 môn thuộc **Khối I (`CS-01`..`CS-06`: Khởi đầu từ số 0 và công cụ học tập)** và **Khối II (`CS-07`..`CS-14`: Nền lập trình và toán học cho Khoa học Máy tính)** cùng chương mẫu bộ nhớ ảo của **`CS-25` (Hệ điều hành)** để phục vụ cổng kiểm định **M3** trước khi sang M4.',
  statsHeading: 'Thống kê định lượng M3',
  statsSummaryLine: `**Số môn đã biên soạn toàn văn ở M3:** ${M3_BLOCK_1_2_COURSES.length + 1} môn (trọn vẹn 14/14 môn \`CS-01\`..\`CS-14\` của Khối I–II + 1 chương mẫu hệ thống \`CS-25\`)`,
  courses: [...M3_BLOCK_1_2_COURSES, ...M2_SAMPLE_COURSES.filter(c => c.id === "operating-systems")],
});

const fullResult = renderSyllabusDocument({
  title: 'Syllabus CS từ số 0 — Bản biên soạn hiện tại',
  purpose: 'Nội dung đã viết được xuất từ cùng dữ liệu với ứng dụng. Các môn chưa hoàn tất không được tính là đã biên soạn. Đây chưa phải bản phát hành đã nghiệm thu.',
  statsHeading: 'Phạm vi đã biên soạn',
  statsSummaryLine: `**Số môn có nội dung:** ${AUTHORED_COURSES.length}/50`,
  courses: AUTHORED_COURSES,
});
fs.writeFileSync(path.join(DOCS_DIR, 'CURRENT-SYLLABUS.md'), fullResult.markdown, 'utf8');
fs.writeFileSync(path.join(DOCS_DIR, 'M2-SAMPLE-SYLLABUS.md'), m2Result.markdown, 'utf8');
fs.writeFileSync(path.join(DOCS_DIR, 'M3-FOUNDATIONS-AND-MATH-SYLLABUS.md'), m3Result.markdown, 'utf8');
if (fs.existsSync(PUBLIC_DIR)) {
  fs.writeFileSync(path.join(PUBLIC_DIR, 'SYLLABUS.md'), fullResult.markdown, 'utf8');
}

console.log(
  `Exported M2-SAMPLE-SYLLABUS.md (${m2Result.totalChapters} chapters, ${m2Result.totalTopics} topics, ${m2Result.totalWords} words)`
);
console.log(
  `Exported M3-FOUNDATIONS-AND-MATH-SYLLABUS.md (${m3Result.totalCourses} courses, ${m3Result.totalChapters} chapters, ${m3Result.totalTopics} topics [${m3Result.coreTopics} core + ${m3Result.extensionTopics} extension], ${m3Result.totalWords} words)`
);

console.log(`Exported CURRENT-SYLLABUS.md & public/SYLLABUS.md (${fullResult.totalCourses} courses, ${fullResult.totalChapters} chapters, ${fullResult.totalTopics} topics, ${fullResult.totalWords} words)`);
