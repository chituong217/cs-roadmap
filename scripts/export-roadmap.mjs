import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { chapters, tasks, edition } from '../src/curriculum.js';
const lines = ['# Lộ trình KHMT · Chí Tường', '', `${chapters.length} chặng · ${tasks.length} nhiệm vụ · phiên bản ${edition.version}`, '', edition.scope, '', 'Đọc từ trên xuống theo thứ tự đề xuất. Phần đã biết có thể tự kiểm tra để đi nhanh. Không phải đợi học hết mới ứng tuyển thực tập.', '', 'Khung tham chiếu: [roadmap.sh Computer Science](https://roadmap.sh/computer-science), [CS2023](https://csed.acm.org/knowledge-areas/), [OSSU](https://github.com/ossu/computer-science). Nhiệm vụ và thứ tự được biên soạn riêng; không phải chương trình chính thức của các nguồn này.', '', '## Mục lục', ''];
for (const c of chapters) lines.push(`- ${c.number}. ${c.title} (${tasks.filter(t => t.chapter === c.id).length} nhiệm vụ)`);
for (const c of chapters) {
  lines.push('', `## ${c.number}. ${c.title}`, '');
  for (const t of tasks.filter(t => t.chapter === c.id)) {
    lines.push(`### ${t.number} · ${t.title}`, '', `${t.kind}`, '', '**Việc cần làm:**', '', ...t.todos.map(x => `- ${x}`), '');
    if (t.extra) lines.push('**Thông tin thêm:**', '', t.extra, '');
    if (t.sources?.length) lines.push('**Nguồn tham khảo thêm:**', '', ...t.sources.map(([title, url]) => `- [${title}](${url})`), '');
  }
}
const publicDirectory = fileURLToPath(new URL('../public/', import.meta.url));
await mkdir(publicDirectory, { recursive: true });
await writeFile(new URL('../public/ROADMAP.md', import.meta.url), lines.join('\n'), 'utf8');
console.log(`Đã xuất ${tasks.length} nhiệm vụ / ${chapters.length} chặng.`);
