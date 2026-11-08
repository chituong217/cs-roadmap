import { readdir, writeFile } from 'node:fs/promises';
import { validateAuthoredCourse, CATALOG_COURSE_MAP, SOURCE_MAP } from '../src/syllabus/index.mjs';
const dir = new URL('../src/syllabus/courses/', import.meta.url);
const courses = new Map();
for (const name of await readdir(dir)) {
  if (!name.endsWith('.mjs') || name === 'operating-systems-vm-sample.mjs') continue;
  for (const c of Object.values(await import(new URL(name, dir)))) {
    if (!c?.id || !Array.isArray(c.chapters) || !['block-3','block-4'].includes(c.blockId)) continue;
    const errors = validateAuthoredCourse(c, CATALOG_COURSE_MAP);
    if (errors.length) throw new Error(`${name}: ${errors.join('; ')}`);
    courses.set(c.id,c);
  }
}
const ordered = [...courses.values()].sort((a,b)=>a.code.localeCompare(b.code));
const lines = ['# M4 — Bản biên soạn đang kiểm tra', '', `Hiện có ${ordered.length}/14 môn. Đây là bản nháp, chưa nghiệm thu toàn bộ nội dung.`, ''];
for (const c of ordered) {
  lines.push(`## ${c.code} — ${c.title}`, '', ...c.overview.flatMap(p=>[p,'']));
  lines.push('Điều kiện đầu vào: '+c.prerequisites.map(p=>`${p.courseId} (${p.type}): ${p.reason}`).join('; '),'');
  for (const ch of c.chapters) {
    lines.push(`### ${ch.title}`, '', ...ch.overview.flatMap(p=>[p,'']));
    for (const t of ch.topics) {
      lines.push(`#### ${t.title} — ${t.level}`, '', ...t.paragraphs.flatMap(p=>[p,'']));
      for (const ref of t.sources) lines.push(`Nguồn: [${ref.sourceId}](${SOURCE_MAP.get(ref.sourceId)?.url || ''}) — ${ref.locator}`,'');
    }
  }
}
await writeFile(new URL('../docs/syllabus-v3/M4-DRAFT-SYLLABUS.md',import.meta.url),lines.join('\n'));
console.log(`M4 draft: ${ordered.length}/14 courses`);
