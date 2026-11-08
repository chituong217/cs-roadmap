import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BLOCKS, CATALOG_COURSES, computeTopologicalOrder } from '../src/syllabus/catalog.mjs';
import { SOURCE_REGISTER, SOURCE_MAP } from '../src/syllabus/sources.mjs';
import {
  validateSourceRegister,
  validateParagraphArray,
  validateSourceRefs,
  validatePrerequisiteDAG,
} from '../src/syllabus/schema.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs', 'syllabus-v3');

const sourceErrors = validateSourceRegister(SOURCE_REGISTER);
if (sourceErrors.length > 0) {
  console.error('Source register validation failed:', sourceErrors);
  process.exit(1);
}

const catalogErrors = [];
for (const course of CATALOG_COURSES) {
  const prefix = `CatalogCourse [${course.id}]`;
  catalogErrors.push(...validateParagraphArray(course.overview, `${prefix}.overview`, 60));
  catalogErrors.push(...validateSourceRefs(course.sources, `${prefix}.sources`));
  if (!Array.isArray(course.plannedChapters) || course.plannedChapters.length === 0) {
    catalogErrors.push(`${prefix}: missing plannedChapters`);
  }
  if (!Array.isArray(course.boundaries) || course.boundaries.length === 0) {
    catalogErrors.push(`${prefix}: missing boundaries`);
  }
}

if (catalogErrors.length > 0) {
  console.error('Catalog course validation failed:', catalogErrors);
  process.exit(1);
}

const dagErrors = validatePrerequisiteDAG(CATALOG_COURSES);
if (dagErrors.length > 0) {
  console.error('Prerequisite DAG validation failed:', dagErrors);
  process.exit(1);
}

const topoOrder = computeTopologicalOrder(CATALOG_COURSES);

// 1. Generate COURSE-CATALOG.md
const catalogLines = [];
catalogLines.push('# Danh Mục Môn Học Toàn Chương Trình Khoa Học Máy Tính (CS Syllabus v3 — M1)');
catalogLines.push('');
catalogLines.push('> **Trạng thái:** M1 Hoàn tất kiểm định cấu trúc & đối chiếu ACM/IEEE/AAAI CS2023.');
catalogLines.push(`> **Tổng số khối kiến thức:** ${BLOCKS.length} khối | **Tổng số môn học:** ${CATALOG_COURSES.length} môn (\`CS-01\` đến \`CS-50\`) | **Tổng số nguồn gốc đã đăng ký:** ${SOURCE_REGISTER.length} nguồn.`);
catalogLines.push('');
catalogLines.push('## 1. Triết lý tổ chức từ con số 0');
catalogLines.push('');
catalogLines.push('Chương trình được thiết kế cho người tự học bắt đầu hoàn toàn từ con số 0 (chưa biết sử dụng dòng lệnh, chưa từng viết chương trình, nền tảng toán học phổ thông cần được củng cố lại từ đầu) và tiến dần một cách tuần tự đến chuẩn Cử nhân Khoa học Máy tính hoàn chỉnh theo khung tham chiếu quốc tế ACM/IEEE/AAAI CS2023 kết hợp chiều sâu toán học của MIT 6.042J, DMOI, CLRS, OSTEP và CS:APP. Khác với danh sách nhiệm vụ rời rạc trước đây, mỗi môn học trong danh mục này được định nghĩa bằng đối tượng nghiên cứu, câu hỏi cốt lõi, phạm vi chương mục, điều kiện tiên quyết phân loại rõ (`required`, `recommended`, `co_requisite`) và giới hạn phạm vi học thuật minh bạch (`boundaries`).');
catalogLines.push('');
catalogLines.push('## 2. Tổng quan 7 Khối Kiến Thức');
catalogLines.push('');
catalogLines.push('| Mã khối | Tên khối kiến thức | Số môn | Mục tiêu học thuật cốt lõi |');
catalogLines.push('| :--- | :--- | :---: | :--- |');

for (const block of BLOCKS) {
  const blockCourses = CATALOG_COURSES.filter((c) => c.blockId === block.id);
  catalogLines.push(`| \`${block.id}\` | **${block.title}** | ${blockCourses.length} | ${block.description} |`);
}
catalogLines.push('');

for (const block of BLOCKS) {
  const blockCourses = CATALOG_COURSES.filter((c) => c.blockId === block.id);
  catalogLines.push('---');
  catalogLines.push('');
  catalogLines.push(`## ${block.title}`);
  catalogLines.push('');
  catalogLines.push(block.description);
  catalogLines.push('');

  for (const course of blockCourses) {
    catalogLines.push(`### ${course.code}: ${course.title} (\`${course.id}\`)`);
    catalogLines.push(`- **Phân loại:** \`${course.level}\` | **Khối:** \`${course.blockId}\``);
    if (!course.prerequisites || course.prerequisites.length === 0) {
      catalogLines.push('- **Điều kiện tiên quyết:** Không yêu cầu (Môn khởi đầu từ số 0).');
    } else {
      catalogLines.push('- **Điều kiện tiên quyết:**');
      for (const p of course.prerequisites) {
        catalogLines.push(`  - \`${p.courseId}\` (*${p.type}*): ${p.reason}`);
      }
    }
    catalogLines.push('');
    catalogLines.push('**Bản chất và nội dung môn học:**');
    catalogLines.push('');
    for (const para of course.overview) {
      catalogLines.push(para);
      catalogLines.push('');
    }
    catalogLines.push('**Cấu trúc chương mục:**');
    for (let i = 0; i < course.plannedChapters.length; i++) {
      const ch = course.plannedChapters[i];
      catalogLines.push(`${i + 1}. **${ch.title}** (\`${ch.id}\`): ${ch.summary} *(Nguồn chính: ${ch.primaryLocator})*`);
    }
    catalogLines.push('');
    catalogLines.push('**Giới hạn phạm vi học thuật (`boundaries`):**');
    for (const b of course.boundaries) {
      catalogLines.push(`- ${b}`);
    }
    catalogLines.push('');
    const srcText = course.sources
      .map((s) => {
        const meta = SOURCE_MAP.get(s.sourceId);
        return `\`${s.sourceId}\` (${meta ? meta.title : s.sourceId} — *${s.locator}*, vai trò: \`${s.relationship}\`)`;
      })
      .join('; ');
    catalogLines.push(`- **Giáo trình / Nguồn chuẩn:** ${srcText}`);
    catalogLines.push('');
  }
}

fs.writeFileSync(path.join(DOCS_DIR, 'COURSE-CATALOG.md'), catalogLines.join('\n'), 'utf8');

// 2. Generate PREREQUISITES.md
const prereqLines = [];
prereqLines.push('# Đồ Thị Tiên Quyết (Prerequisite DAG) & Lộ Trình Học Từ Con Số 0');
prereqLines.push('');
prereqLines.push('> **Kiểm định toán học:** Đồ thị tiên quyết bắt buộc (`required`) gồm 50 đỉnh (`CS-01` đến `CS-50`) đã được kiểm tra bằng thuật toán duyệt đồ thị có hướng 3 màu (DFS cycle detection) và sắp xếp tô-pô Kahn: **0 chu trình (DAG hợp lệ 100%)**.');
prereqLines.push('');
prereqLines.push('## 1. Phân biệt 3 loại quan hệ phụ thuộc');
prereqLines.push('');
prereqLines.push('1. **`required` (Tiên quyết bắt buộc):** Người học không thể nắm bắt định nghĩa hoặc chứng minh trong môn đích nếu chưa hoàn thành môn nguồn. Ví dụ: không thể học giải hệ thức đệ quy hay đồ thị trong `discrete-math` (`CS-09`) nếu chưa nắm vững ký hiệu hàm, đa thức, lũy thừa và dãy tổng ở `math-bridge` (`CS-02`).');
prereqLines.push('2. **`recommended` (Khuyến nghị học trước):** Cung cấp trực giác hoặc công cụ bổ trợ giúp hiểu sâu hơn các trường hợp biên, nhưng không chặn việc bắt đầu môn học.');
prereqLines.push('3. **`co_requisite` (Học song hành):** Hai môn bổ trợ trực tiếp cho nhau trong cùng một chặng.');
prereqLines.push('');
prereqLines.push('## 2. Sơ đồ luồng phụ thuộc cốt lõi (Mermaid)');
prereqLines.push('');
prereqLines.push('```mermaid');
prereqLines.push('flowchart TD');
prereqLines.push('  CS01["CS-01: Môi trường Máy tính"] --> CS04["CS-04: Lập trình Nhập môn"]');
prereqLines.push('  CS03["CS-03: Tư duy Tính toán"] --> CS04');
prereqLines.push('  CS04 --> CS05["CS-05: Thiết kế Chương trình & Gỡ lỗi"]');
prereqLines.push('  CS04 --> CS07["CS-07: Bộ nhớ, Con trỏ & C++"]');
prereqLines.push('  CS07 --> CS08["CS-08: Hướng đối tượng & Thiết kế"]');
prereqLines.push('  CS02["CS-02: Toán nền cần dùng"] --> CS09["CS-09: Toán rời rạc"]');
prereqLines.push('  CS02 --> CS10["CS-10: Đại số tuyến tính"]');
prereqLines.push('  CS02 --> CS11["CS-11: Giải tích 1 biến"]');
prereqLines.push('  CS07 --> CS15["CS-15: Cấu trúc dữ liệu"]');
prereqLines.push('  CS09 --> CS15');
prereqLines.push('  CS15 --> CS16["CS-16: Thiết kế & Phân tích Thuật toán"]');
prereqLines.push('  CS09 --> CS16');
prereqLines.push('  CS16 --> CS17["CS-17: Thuật toán Đồ thị"]');
prereqLines.push('  CS09 --> CS20["CS-20: Lý thuyết Tính toán"]');
prereqLines.push('  CS22["CS-22: Logic số & Tổ chức máy"] --> CS23["CS-23: Kiến trúc Máy tính"]');
prereqLines.push('  CS23 --> CS24["CS-24: Lập trình Hệ thống Linux"]');
prereqLines.push('  CS24 --> CS25["CS-25: Hệ điều hành"]');
prereqLines.push('  CS25 --> CS26["CS-26: Đồng thời & Song song"]');
prereqLines.push('  CS25 --> CS27["CS-27: Mạng máy tính"]');
prereqLines.push('  CS26 --> CS28["CS-28: Hệ thống Phân tán"]');
prereqLines.push('  CS27 --> CS28');
prereqLines.push('```');
prereqLines.push('');
prereqLines.push('## 3. Thứ tự Tô-pô chuẩn (Topological Order) từ Con Số 0');
prereqLines.push('');
prereqLines.push('| Thứ tự | Mã môn | ID | Tên môn học | Khối | Tiên quyết bắt buộc (`required`) | Tiên quyết khuyến nghị / song hành |');
prereqLines.push('| :---: | :---: | :--- | :--- | :---: | :--- | :--- |');

topoOrder.forEach((course, idx) => {
  const reqs = (course.prerequisites || []).filter((p) => p.type === 'required').map((p) => `\`${p.courseId}\``);
  const others = (course.prerequisites || [])
    .filter((p) => p.type !== 'required')
    .map((p) => `\`${p.courseId}\` (${p.type})`);
  prereqLines.push(
    `| ${idx + 1} | **${course.code}** | \`${course.id}\` | ${course.title} | \`${course.blockId}\` | ${reqs.length ? reqs.join(', ') : '*(Khởi đầu)*'} | ${others.length ? others.join(', ') : '—'} |`
  );
});

prereqLines.push('');
prereqLines.push('## 4. Chi tiết lý do phụ thuộc của từng môn học');
prereqLines.push('');
for (const course of CATALOG_COURSES) {
  prereqLines.push(`### ${course.code} — ${course.title} (\`${course.id}\`)`);
  if (!course.prerequisites || course.prerequisites.length === 0) {
    prereqLines.push('- **Không có điều kiện tiên quyết:** Thiết kế cho người bắt đầu từ số 0.');
  } else {
    for (const p of course.prerequisites) {
      prereqLines.push(`- **\`${p.courseId}\`** [\`${p.type}\`]: ${p.reason}`);
    }
  }
  prereqLines.push('');
}

fs.writeFileSync(path.join(DOCS_DIR, 'PREREQUISITES.md'), prereqLines.join('\n'), 'utf8');
console.log(`Generated COURSE-CATALOG.md and PREREQUISITES.md successfully (${CATALOG_COURSES.length} courses, DAG valid).`);
