import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { chapters, tasks, edition } from '../src/curriculum.js';
const lines = ['# Lộ trình KHMT · Chí Tường', '', `${chapters.length} chặng · ${tasks.length} nhiệm vụ · phiên bản ${edition.version}`, '', edition.scope, '', 'Đọc từ trên xuống theo thứ tự đề xuất. Phần đã biết có thể tự kiểm tra để đi nhanh. Ô vàng là nâng cao có thể để học sau, không tính thành hoàn thành. Không phải đợi học hết mới ứng tuyển thực tập.', '', 'Nguồn đọc được chọn là sách mở/tài liệu công khai miễn phí; chỉ đọc phạm vi ghi trong ô, không mua sách, khóa học, chứng chỉ hay gói chấm bài. Ngày rà nguồn: 03/11/2026.', '', 'Khung tham chiếu: [roadmap.sh Computer Science](https://roadmap.sh/computer-science), [CS2023](https://csed.acm.org/knowledge-areas/), [OSSU](https://github.com/ossu/computer-science). Nhiệm vụ và thứ tự được biên soạn riêng; không phải chương trình chính thức của các nguồn này.', '', '## Mục lục', ''];
for (const c of chapters) lines.push(`- ${c.number}. ${c.title} (${tasks.filter(t => t.chapter === c.id).length} nhiệm vụ)`);
for (const c of chapters) {
  lines.push('', `## ${c.number}. ${c.title}`, '');
  for (const t of tasks.filter(t => t.chapter === c.id)) {
    lines.push(`### ${t.number} · ${t.title}`, '', `${t.kind} · ${t.optional ? 'Nâng cao — có thể học sau' : 'Bắt buộc'}`, '', '**Việc cần làm:**', '', ...t.todos.map(x => `- ${x}`), '');
    if (t.optionalReason) lines.push(`**Khi nào quay lại:** ${t.optionalReason}`, '');
    if (t.reviewTargets) lines.push('**Ô cần ôn theo bài làm:**', '', ...t.reviewTargets.map(id => { const target = tasks.find(x => x.id === id); return `- ${target.number} · ${target.title}`; }), '');
    if (t.extra) lines.push('**Thông tin thêm:**', '', t.extra, '');
    if (t.sources?.length) lines.push('**Nguồn tham khảo miễn phí:**', '', ...t.sources.map(([title, url, scope, access]) => `- [${title}](${url})\n  - Phần cần đọc: ${scope}\n  - ${access}`), '');
  }
}
const publicDirectory = fileURLToPath(new URL('../public/', import.meta.url));
await mkdir(publicDirectory, { recursive: true });
await writeFile(new URL('../public/ROADMAP.md', import.meta.url), lines.join('\n'), 'utf8');
console.log(`Đã xuất ${tasks.length} nhiệm vụ / ${chapters.length} chặng.`);
