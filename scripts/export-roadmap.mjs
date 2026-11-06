import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { tracks, chapters, tasks, edition, capstoneProjects } from '../src/curriculum.js';

const lines = [
  '# Lộ trình KHMT Toàn diện · HCMUS & Chuẩn Quốc tế (7 Tracks)',
  '',
  `${chapters.length} chặng · ${tasks.length} nhiệm vụ · 7 tiến trình học tập · phiên bản ${edition.version}`,
  '',
  edition.scope,
  '',
  `Đối tượng mục tiêu: ${edition.targetAudience}`,
  '',
  'Đọc từ trên xuống theo thứ tự đề xuất. Phần đã biết có thể tự kiểm tra qua các ô chẩn đoán (placement) để đi nhanh. Ô vàng là nâng cao có thể để học sau, không tính vào điều kiện hoàn thành vòng nền. Không phải đợi học hết mới ứng tuyển thực tập.',
  '',
  `Nguồn đọc được chọn là sách mở/tài liệu công khai miễn phí; chỉ đọc phạm vi ghi trong ô, không mua sách, khóa học, chứng chỉ hay gói chấm bài. Ngày rà nguồn: ${edition.lastUpdated}.`,
  '',
  'Khung tham chiếu: Khoa CNTT ĐH KHTN (HCMUS), [roadmap.sh Computer Science](https://roadmap.sh/computer-science), [CS2023](https://csed.acm.org/knowledge-areas/), [OSSU](https://github.com/ossu/computer-science), [TeachYourselfCS](https://teachyourselfcs.com/). Nhiệm vụ và thứ tự được biên soạn riêng theo năng lực và mục tiêu xét chuyên ngành KHMT.',
  '',
  '---',
  '',
  '## Bảng Tổng quan 7 Tiến trình Học tập (7 Tracks)',
  '',
  '| Track | Tên tiến trình | Trọng tâm sư phạm | Môn học HCMUS tương ứng | Số chặng | Số nhiệm vụ | Thời lượng ước tính |',
  '|---|---|---|---|---|---|---|',
];

for (const tr of tracks) {
  const trChapters = chapters.filter(c => c.trackId === tr.id);
  const trTasks = tasks.filter(t => t.trackId === tr.id);
  const hcmusCourses = tr.hcmusAlignment.join(', ');
  lines.push(`| **${tr.id.toUpperCase()}** | **${tr.shortTitle}** | ${tr.description} | ${hcmusCourses} | ${trChapters.length} chặng | ${trTasks.length} nhiệm vụ | ~${tr.totalEstimatedHours}h |`);
}

lines.push(
  '',
  '---',
  '',
  '## 5 Đồ án Thực hành Trọng điểm (Practical Capstone Mini-Projects)',
  '',
  'Nhằm chuyển hóa lý thuyết thành kỹ năng kỹ nghệ phần mềm thực chiến, lộ trình tích hợp 5 đồ án capstone theo tiêu chuẩn công nghiệp và yêu cầu đồ án môn học HCMUS:',
  ''
);

for (const proj of capstoneProjects) {
  lines.push(
    `### ${proj.title}`,
    '',
    `- **Tiến trình phụ trách:** ${proj.targetTrack}`,
    `- **Mục tiêu sư phạm:** ${proj.pedagogicalObjective}`,
    `- **Nhiệm vụ liên kết:** ${proj.relatedTaskIds.map(id => `\`${id}\``).join(', ')}`,
    '',
    '**Phạm vi kỹ thuật:**',
    ...proj.technicalScope.map(s => `- ${s}`),
    '',
    '**Tiêu chí kiểm chứng chất lượng (Verification Gates):**',
    ...proj.verificationCriteria.map(v => `- [ ] ${v}`),
    ''
  );
}

lines.push(
  '---',
  '',
  '## Mục lục',
  ''
);

for (const tr of tracks) {
  const trChapters = chapters.filter(c => c.trackId === tr.id);
  const trTasks = tasks.filter(t => t.trackId === tr.id);
  lines.push(`### ${tr.title} (${trChapters.length} chặng, ${trTasks.length} nhiệm vụ)`);
  for (const c of trChapters) {
    const chTasks = tasks.filter(t => t.chapter === c.id);
    lines.push(`- ${c.number}. ${c.title} (${chTasks.length} nhiệm vụ)`);
  }
  lines.push('');
}

lines.push(
  '---',
  '',
  '# Nội dung Chi tiết Lộ trình Học tập (Roadmap Content)',
  ''
);

for (const tr of tracks) {
  const trChapters = chapters.filter(c => c.trackId === tr.id);
  lines.push(
    `# ${tr.title}`,
    '',
    `> **Mục tiêu:** ${tr.description}`,
    `> **Môn học HCMUS:** ${tr.hcmusAlignment.join(' · ')} | **Thời lượng ước tính:** ~${tr.totalEstimatedHours} giờ`,
    ''
  );

  for (const c of trChapters) {
    lines.push(`## ${c.number}. ${c.title}`, '', `**Mục tiêu:** ${c.goal}`, '', `**Đầu vào:** ${c.prerequisites.join('; ') || 'Không cần biết lập trình.'}`, '', `**Bằng chứng:** ${c.evidence}`, '', `**Điểm xuất phát:** ${c.baseline}`, '');
    const chTasks = tasks.filter(t => t.chapter === c.id);
    for (const t of chTasks) {
      lines.push(
        `### ${t.number} · ${t.title}`,
        '',
        `**Loại:** ${t.kind} | **Mức độ:** ${t.level === 'bridge' ? 'Nhập môn (có thể đi nhanh)' : t.optional ? 'Chuyên sâu (có thể học sau)' : 'Bắt buộc nền'} | **Track:** ${tr.shortTitle} (\`${t.trackId}\`)`,
        '',
        '**Việc cần làm:**',
        '',
        ...t.todos.map(x => `- [ ] ${x}`),
        ''
      );

      if (t.optionalReason) {
        lines.push(`**Khi nào quay lại:** ${t.optionalReason}`, '');
      }
      if (t.reviewTargets?.length) {
        lines.push(
          '**Ô cần ôn theo kết quả kiểm tra:**',
          '',
          ...t.reviewTargets.map(id => {
            const target = tasks.find(x => x.id === id);
            return target ? `- [ ] ${target.number} · ${target.title} (\`${target.id}\`)` : `- [ ] \`${id}\``;
          }),
          ''
        );
      }
      if (t.extra) {
        lines.push('**Thông tin thêm & Lưu ý bản chất:**', '', t.extra, '');
      }
      if (t.sources?.length) {
        lines.push(
          '**Nguồn tham khảo miễn phí:**',
          '',
          ...t.sources.map(([title, url, scope, access]) => `- [${title}](${url})\n  - **Phần cần đọc:** ${scope}\n  - **Truy cập:** ${access}`),
          ''
        );
      }
    }
  }
}

const publicDirectory = fileURLToPath(new URL('../public/', import.meta.url));
await mkdir(publicDirectory, { recursive: true });
await writeFile(new URL('../public/ROADMAP.md', import.meta.url), lines.join('\n'), 'utf8');
console.log(`Đã xuất ${tasks.length} nhiệm vụ / ${chapters.length} chặng thuộc 7 tracks vào public/ROADMAP.md thành công.`);
