import fsSync from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import {
  tracks,
  chapters,
  tasks,
  edition,
  capstoneProjects,
  previousTaskIds,
  learnerProfile,
  stages,
} from '../src/curriculum/index.js';
import { freeLibrary } from '../src/curriculum/readings.js';
import { resources } from '../src/curriculum/format.js';

export const VERIFIED_BASE_COMMIT = 'ecbece0e91597ca2790eff51d7ff7f7b8f4a3e2b';
export const VERIFIED_BACKUP_SHA256 = '78094dc6ef2f2dbc0a11caa1e04e0f89eb2ae3138a71ea1d5497c79361cb8077';
export const DEFAULT_BACKUP_PATH = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../docs/backups/ROADMAP-BEFORE-SYLLABUS-REWRITE.md'
);

export function computeCurriculumProvenanceDigest() {
  const canonicalPayload = JSON.stringify({
    version: edition.version,
    tracks: tracks.map((t) => ({ id: t.id, title: t.title, chapterIds: t.chapterIds })),
    chapters: chapters.map((c) => ({ id: c.id, number: c.number, title: c.title, goal: c.goal, evidence: c.evidence })),
    tasks: tasks.map((t) => ({
      id: t.id,
      number: t.number,
      title: t.title,
      chapter: t.chapter,
      trackId: t.trackId,
      todos: t.todos,
      extra: t.extra || null,
      sources: t.sources || [],
    })),
    capstones: capstoneProjects.map((p) => ({ id: p.id, title: p.title, relatedTaskIds: p.relatedTaskIds })),
    freeLibraryCount: Object.keys(freeLibrary).length,
    resourcesCount: Object.keys(resources).length,
  });
  return crypto.createHash('sha256').update(canonicalPayload, 'utf8').digest('hex');
}

export function getGitProvenance(repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')) {
  try {
    const headCommit = execFileSync('git', ['-c', `safe.directory=${repoRoot}`, '-C', repoRoot, 'rev-parse', 'HEAD'], {
      encoding: 'utf8',
    }).trim();
    const curriculumDiff = execFileSync(
      'git',
      ['-c', `safe.directory=${repoRoot}`, '-C', repoRoot, 'diff', VERIFIED_BASE_COMMIT, '--', 'src/curriculum'],
      { encoding: 'utf8' }
    ).trim();
    return {
      gitAvailable: true,
      headCommit,
      matchesVerifiedBaseCommit: headCommit === VERIFIED_BASE_COMMIT,
      curriculumUnmodifiedFromBase: curriculumDiff.length === 0,
    };
  } catch {
    return {
      gitAvailable: false,
      headCommit: 'unknown',
      matchesVerifiedBaseCommit: false,
      curriculumUnmodifiedFromBase: false,
    };
  }
}

export function verifyBackupContent(writtenContent, options = {}) {
  const { expectedSha256 = VERIFIED_BACKUP_SHA256 } = options;
  const sha256 = crypto.createHash('sha256').update(writtenContent, 'utf8').digest('hex');

  let missingTasks = 0;
  let missingTodos = 0;
  let missingExtras = 0;
  let missingSources = 0;
  let missingChaps = 0;
  let missingCapstones = 0;
  let missingTracks = 0;
  let missingFreeLibrary = 0;
  let missingResources = 0;

  for (const tr of tracks) {
    if (!writtenContent.includes(tr.id) || !writtenContent.includes(tr.title) || !writtenContent.includes(tr.description)) {
      missingTracks += 1;
    }
  }
  for (const c of chapters) {
    if (!writtenContent.includes(c.id) || !writtenContent.includes(c.title) || !writtenContent.includes(c.goal) || !writtenContent.includes(c.evidence)) {
      missingChaps += 1;
    }
  }
  for (const t of tasks) {
    if (!writtenContent.includes(`### Node ${t.number}: ${t.title} (\`${t.id}\`)`)) {
      missingTasks += 1;
    }
    for (const td of t.todos) {
      if (!writtenContent.includes(td)) missingTodos += 1;
    }
    if (t.extra && !writtenContent.includes(t.extra)) {
      missingExtras += 1;
    }
    for (const [sTitle, sUrl, sScope] of t.sources || []) {
      if (!writtenContent.includes(sTitle) || !writtenContent.includes(sUrl) || (sScope && !writtenContent.includes(sScope))) {
        missingSources += 1;
      }
    }
  }
  for (const p of capstoneProjects) {
    if (!writtenContent.includes(p.id) || !writtenContent.includes(p.title) || !writtenContent.includes(p.pedagogicalObjective)) {
      missingCapstones += 1;
    }
  }
  for (const [key, [title, url]] of Object.entries(freeLibrary)) {
    if (!writtenContent.includes(key) || !writtenContent.includes(title) || !writtenContent.includes(url)) {
      missingFreeLibrary += 1;
    }
  }
  for (const [key, [title, url]] of Object.entries(resources)) {
    if (!writtenContent.includes(key) || !writtenContent.includes(title) || !writtenContent.includes(url)) {
      missingResources += 1;
    }
  }

  const totalMissing =
    missingTracks +
    missingChaps +
    missingTasks +
    missingTodos +
    missingExtras +
    missingSources +
    missingCapstones +
    missingFreeLibrary +
    missingResources;

  const hashMatches = expectedSha256 ? sha256 === expectedSha256 : true;
  const provenance = getGitProvenance();
  const sourceCurriculumDigest = computeCurriculumProvenanceDigest();

  return {
    ok: totalMissing === 0 && hashMatches && provenance.curriculumUnmodifiedFromBase,
    sha256,
    expectedSha256,
    hashMatches,
    totalMissing,
    bytes: Buffer.byteLength(writtenContent, 'utf8'),
    lines: writtenContent.split('\n').length,
    provenance: {
      ...provenance,
      verifiedBaseCommit: VERIFIED_BASE_COMMIT,
      sourceCurriculumDigest,
    },
    counts: {
      tracks: tracks.length,
      chapters: chapters.length,
      tasks: tasks.length,
      todos: tasks.reduce((a, t) => a + t.todos.length, 0),
      extras: tasks.filter((t) => Boolean(t.extra)).length,
      sources: tasks.reduce((a, t) => a + (t.sources?.length || 0), 0),
      capstones: capstoneProjects.length,
      freeLibrary: Object.keys(freeLibrary).length,
      resources: Object.keys(resources).length,
    },
    verification: {
      missingTracks,
      missingChaps,
      missingTasks,
      missingTodos,
      missingExtras,
      missingSources,
      missingCapstones,
      missingFreeLibrary,
      missingResources,
    },
  };
}

export function buildBackupMarkdown() {
  const provenance = getGitProvenance();
  const outLines = [];
  outLines.push('# SAO LƯU TOÀN BỘ NỘI DUNG HỌC THUẬT ROADMAP TRƯỚC KHI VIẾT LẠI SYLLABUS (v2.1.0)');
  outLines.push('');
  outLines.push('## Metadata Sao lưu & Xác minh Nguồn Chân lý');
  outLines.push('');
  outLines.push('- **Ngày sao lưu:** 2026-11-07 (Asia/Saigon)');
  outLines.push('- **Website đang triển khai:** https://chituong217.github.io/cs-roadmap/');
  outLines.push('- **Repository:** https://github.com/chituong217/cs-roadmap.git');
  outLines.push('- **Đường dẫn local xác minh:** `C:/Users/XAOXIN/OneDrive/Tài liệu/ChatGPT/LXH/cs-roadmap-deploy` (và đồng bộ tại `C:/Users/XAOXIN/Documents/Codex/cs-roadmap-prototype`)');
  outLines.push(`- **Commit đã xác minh (HEAD / origin/main):** \`${VERIFIED_BASE_COMMIT}\` (\`feat: expand CS curriculum while preserving tracks and progress\`; trạng thái nguồn \`src/curriculum\` khớp base: \`${provenance.curriculumUnmodifiedFromBase}\`)`);
  outLines.push('- **Đối chiếu Website vs Repository:** Khớp tuyệt đối 100%. Trang `https://chituong217.github.io/cs-roadmap/` nạp bundle `./assets/index-fspB7yL1.js` và `./assets/curriculum-DypGSE_F.js` (488,500 bytes), trùng khớp từng byte với `dist/` được biên dịch từ commit `ecbece0e91597ca2790eff51d7ff7f7b8f4a3e2b`. Không có độ lệch giữa website đang chạy và mã nguồn tại commit `ecbece0e91597ca2790eff51d7ff7f7b8f4a3e2b`.');
  outLines.push('- **Cách trích xuất:** Trích xuất trực tiếp bằng kịch bản `scripts/backup-roadmap-v21.mjs` từ Single Source of Truth (`src/curriculum/index.js`, `src/curriculum/edition.js`, `src/curriculum/edition-content.js`, `src/curriculum/tracks.js`, `src/curriculum/readings.js`, `src/curriculum/revision.js`, `src/curriculum/format.js`, `src/curriculum/initial.js`, `src/curriculum/foundations.js`, `src/curriculum/systems.js`, `src/curriculum/engineering.js`, `src/curriculum/future.js`, và 15 tệp trong `src/curriculum/details/`). Cách này lấy toàn bộ dữ liệu bên trong bộ nhớ (bao gồm cả hộp thoại Chương trình, hộp thoại 5 Đồ án Capstone, các trường ẩn trong panel chi tiết khi chưa mở node, `reviewTargets`, `optionalReason`, `diagnostic`, `extra`, `todos`, và toàn bộ `sources`).');
  outLines.push('');
  outLines.push('## Thống kê Tổng hợp Bản 2.1.0');
  outLines.push('');
  outLines.push(`- **Phiên bản:** \`${edition.version}\` — ${edition.title}`);
  outLines.push(`- **Phạm vi:** ${edition.scope}`);
  outLines.push(`- **Đối tượng mục tiêu:** ${edition.targetAudience}`);
  outLines.push(`- **Ngày cập nhật nguồn gần nhất:** ${edition.lastUpdated}`);
  outLines.push(`- **Số Track:** ${tracks.length}`);
  outLines.push(`- **Số Chặng lớn (Stages):** ${Object.keys(stages).length} (${Object.keys(stages).join(', ')})`);
  outLines.push(`- **Số Môn / Chặng (Chapters/Courses):** ${chapters.length}`);
  outLines.push(`- **Tổng số Nhiệm vụ (Nodes/Tasks):** ${tasks.length}`);
  outLines.push(`  - Nhiệm vụ bắt buộc (\`optional: false\`): ${tasks.filter((t) => !t.optional).length}`);
  outLines.push(`  - Nhiệm vụ tự chọn / nâng cao / lối vào (\`optional: true\`): ${tasks.filter((t) => t.optional).length} (trong đó \`level: "bridge"\`: ${tasks.filter((t) => t.level === 'bridge').length})`);
  outLines.push(`  - Tổng số mục việc cần làm (\`todos\`): ${tasks.reduce((acc, t) => acc + t.todos.length, 0)}`);
  outLines.push(`  - Số nhiệm vụ có thông tin thêm (\`extra\`): ${tasks.filter((t) => Boolean(t.extra)).length}`);
  outLines.push(`  - Số nhiệm vụ có nguồn tham khảo (\`sources\`): ${tasks.filter((t) => t.sources?.length > 0).length} (Tổng số liên kết nguồn gắn vào node: ${tasks.reduce((acc, t) => acc + (t.sources?.length || 0), 0)})`);
  outLines.push(`  - Số nhiệm vụ có \`reviewTargets\`: ${tasks.filter((t) => t.reviewTargets?.length > 0).length}`);
  outLines.push(`  - Số nhiệm vụ chẩn đoán (\`diagnostic: true\`): ${tasks.filter((t) => t.diagnostic).length}`);
  outLines.push(`  - Số ID nhiệm vụ từ bản 2.0 (\`previousTaskIds\` / \`baselineTaskIds\`): ${previousTaskIds.length}`);
  outLines.push(`- **Số Đồ án Thực hành (Capstone Mini-Projects):** ${capstoneProjects.length}`);
  outLines.push(`- **Số đầu mục Thư viện Nguồn mở (\`freeLibrary\`):** ${Object.keys(freeLibrary).length}`);
  outLines.push(`- **Số đầu mục Nguồn cơ bản (\`resources\`):** ${Object.keys(resources).length}`);
  outLines.push('');
  outLines.push('---');
  outLines.push('');
  outLines.push('## 1. Hồ sơ Người học & Phân chặng Tổng quát (`edition.js`)');
  outLines.push('');
  outLines.push('### 1.1. Hồ sơ điểm xuất phát (`learnerProfile`)');
  outLines.push(`- **Cập nhật:** ${learnerProfile.updated}`);
  outLines.push(`- **Tóm tắt:** ${learnerProfile.summary}`);
  outLines.push(`- **Ghi chú:** ${learnerProfile.note}`);
  outLines.push('');
  outLines.push('### 1.2. Các giai đoạn (`stages`)');
  for (const [k, v] of Object.entries(stages)) {
    const stageChaps = chapters.filter((c) => c.stage === k);
    outLines.push(`- **Stage ${k} (${v}):** ${stageChaps.length} môn (${stageChaps.map((c) => `\`${c.id}\``).join(', ')})`);
  }
  outLines.push('');
  outLines.push('---');
  outLines.push('');
  outLines.push('## 2. Danh mục 7 Tracks (`tracks.js` & `index.js`)');
  outLines.push('');
  for (const tr of tracks) {
    const trChapters = chapters.filter((c) => c.trackId === tr.id);
    const trTasks = tasks.filter((t) => t.trackId === tr.id);
    outLines.push(`### Track ${tr.trackNumber}: ${tr.title} (\`${tr.id}\`)`);
    outLines.push(`- **Slug:** \`${tr.slug}\``);
    outLines.push(`- **Tên ngắn (\`shortTitle\`):** ${tr.shortTitle}`);
    outLines.push(`- **Nhãn tab (\`tabLabel\`):** ${tr.tabLabel}`);
    outLines.push(`- **Biểu tượng (\`icon\`):** \`${tr.icon}\` | **Màu nhấn (\`colorAccent\`):** \`${tr.colorAccent}\``);
    outLines.push(`- **Thời lượng ước tính (\`totalEstimatedHours\`):** ~${tr.totalEstimatedHours} giờ`);
    outLines.push(`- **Môn học HCMUS tương ứng (\`hcmusAlignment\`):** ${tr.hcmusAlignment.join(' · ')}`);
    outLines.push(`- **Mô tả:** ${tr.description}`);
    outLines.push(`- **Các môn/chặng thuộc Track (${trChapters.length}):** ${tr.chapterIds.map((id) => `\`${id}\``).join(', ')}`);
    outLines.push(`- **Tổng số node thuộc Track:** ${trTasks.length}`);
    outLines.push('');
  }
  outLines.push('---');
  outLines.push('');
  outLines.push('## 3. Danh mục 42 Môn / Chặng theo Thứ tự Hiện tại (`chapters`)');
  outLines.push('');
  for (const c of chapters) {
    const cTasks = tasks.filter((t) => t.chapter === c.id);
    outLines.push(`### Môn ${c.number}: ${c.title} (\`${c.id}\`)`);
    outLines.push(`- **Giai đoạn (\`stage\`):** ${c.stage} (${stages[c.stage] || ''})`);
    outLines.push(`- **Track (\`trackId\`):** \`${c.trackId}\``);
    outLines.push(`- **Điểm xuất phát (\`baseline\`):** ${c.baseline}`);
    outLines.push(`- **Đầu vào cần có (\`prerequisites\`):** ${c.prerequisites.length ? c.prerequisites.join('; ') : 'Không cần biết lập trình.'}`);
    outLines.push(`- **Mục tiêu môn (\`goal\`):** ${c.goal}`);
    outLines.push(`- **Bằng chứng chuyển tiếp (\`evidence\`):** ${c.evidence}`);
    outLines.push(`- **Số lượng node (${cTasks.length}):** từ \`${cTasks[0]?.number}\` (\`${cTasks[0]?.id}\`) đến \`${cTasks[cTasks.length - 1]?.number}\` (\`${cTasks[cTasks.length - 1]?.id}\`)`);
    outLines.push(`- **Danh sách ID node theo thứ tự:** ${cTasks.map((t) => `\`${t.id}\``).join(', ')}`);
    outLines.push('');
  }
  outLines.push('---');
  outLines.push('');
  outLines.push('## 4. Nội dung 5 Đồ án Thực hành (Capstone Mini-Projects)');
  outLines.push('');
  for (const proj of capstoneProjects) {
    outLines.push(`### Đồ án ${proj.projectNumber}: ${proj.title} (\`${proj.id}\`)`);
    outLines.push(`- **Track phụ trách (\`trackId\`):** \`${proj.trackId}\` — ${proj.targetTrack}`);
    outLines.push(`- **Mục tiêu sư phạm (\`pedagogicalObjective\`):** ${proj.pedagogicalObjective}`);
    outLines.push(`- **Các node liên kết (\`relatedTaskIds\`):** ${proj.relatedTaskIds.map((id) => `\`${id}\``).join(', ')}`);
    outLines.push('- **Phạm vi kỹ thuật (`technicalScope`):**');
    for (const s of proj.technicalScope) outLines.push(`  - ${s}`);
    outLines.push('- **Tiêu chí kiểm chứng chất lượng (`verificationCriteria`):**');
    for (const v of proj.verificationCriteria) outLines.push(`  - [ ] ${v}`);
    outLines.push('');
  }
  outLines.push('---');
  outLines.push('');
  outLines.push('## 5. Thư viện Nguồn Tham khảo Gốc (`freeLibrary` & `resources`)');
  outLines.push('');
  outLines.push('### 5.1. Bảng `freeLibrary` (`src/curriculum/readings.js`)');
  outLines.push('');
  for (const [key, [title, url, access]] of Object.entries(freeLibrary)) {
    outLines.push(`- **\`${key}\`**: [${title}](${url}) — *Truy cập:* ${access}`);
  }
  outLines.push('');
  outLines.push('### 5.2. Bảng `resources` cơ bản (`src/curriculum/format.js`)');
  outLines.push('');
  for (const [key, [title, url]] of Object.entries(resources)) {
    outLines.push(`- **\`${key}\`**: [${title}](${url})`);
  }
  outLines.push('');
  outLines.push('---');
  outLines.push('');
  outLines.push('## 6. Toàn bộ 419 Node / Nhiệm vụ theo Đúng Thứ tự Toàn cục (001 → 419)');
  outLines.push('');

  for (const c of chapters) {
    const tr = tracks.find((x) => x.id === c.trackId);
    const cTasks = tasks.filter((t) => t.chapter === c.id);
    outLines.push(`## Môn ${c.number}: ${c.title} (\`${c.id}\` · Track \`${c.trackId}\` · Stage \`${c.stage}\`)`);
    outLines.push('');
    outLines.push(`- **Mục tiêu môn:** ${c.goal}`);
    outLines.push(`- **Đầu vào:** ${c.prerequisites.length ? c.prerequisites.join('; ') : 'Không cần biết lập trình.'}`);
    outLines.push(`- **Bằng chứng:** ${c.evidence}`);
    outLines.push(`- **Điểm xuất phát:** ${c.baseline}`);
    outLines.push('');

    for (const t of cTasks) {
      outLines.push(`### Node ${t.number}: ${t.title} (\`${t.id}\`)`);
      outLines.push('');
      outLines.push(`- **ID:** \`${t.id}\` | **Số thứ tự:** \`${t.number}\` | **Môn/Chặng:** \`${t.chapter}\` (${c.number}. ${c.title}) | **Track:** \`${t.trackId}\` (${tr?.shortTitle || ''})`);
      outLines.push(`- **Loại (\`kind\`):** ${t.kind} | **Bắt buộc/Tự chọn (\`optional\`):** ${t.optional ? 'Tự chọn / Có thể học sau (`true`)' : 'Bắt buộc (`false`)'}${t.level ? ` | **Mức (\`level\`):** \`${t.level}\`` : ''}${t.diagnostic ? ` | **Chẩn đoán (\`diagnostic\`):** \`true\`` : ''}`);
      if (t.sourcePolicy || t.sourceChecked) {
        outLines.push(`- **Chính sách nguồn (\`sourcePolicy\`):** ${t.sourcePolicy || 'N/A'} | **Ngày kiểm nguồn (\`sourceChecked\`):** ${t.sourceChecked || 'N/A'}`);
      }
      if (t.optionalReason) {
        outLines.push(`- **Lý do tự chọn / Khi nào quay lại (\`optionalReason\`):** ${t.optionalReason}`);
      }
      if (t.reviewTargets?.length) {
        const targetLabels = t.reviewTargets.map((rid) => {
          const found = tasks.find((x) => x.id === rid);
          return found ? `${found.number} · ${found.title} (\`${found.id}\`)` : `\`${rid}\``;
        });
        outLines.push(`- **Ô cần ôn theo bài làm (\`reviewTargets\`):** ${targetLabels.join('; ')}`);
      }
      outLines.push('');
      outLines.push('**Việc cần làm (`todos`):**');
      outLines.push('');
      for (const todo of t.todos) {
        outLines.push(`- [ ] ${todo}`);
      }
      outLines.push('');
      if (t.extra) {
        outLines.push('**Thông tin thêm (`extra`):**');
        outLines.push('');
        outLines.push(t.extra);
        outLines.push('');
      }
      if (t.sources?.length) {
        outLines.push('**Nguồn tham khảo và phạm vi đọc (`sources`):**');
        outLines.push('');
        for (const [sTitle, sUrl, sScope, sAccess] of t.sources) {
          outLines.push(`- [${sTitle}](${sUrl})`);
          if (sScope) outLines.push(`  - **Phạm vi đọc:** ${sScope}`);
          if (sAccess) outLines.push(`  - **Truy cập:** ${sAccess}`);
        }
        outLines.push('');
      }
    }
  }

  outLines.push('---');
  outLines.push('');
  outLines.push('## 7. Phụ lục Quan hệ Phân loại & Lịch sử ID (v2.0 → v2.1)');
  outLines.push('');
  outLines.push(`- **Tổng số ID gốc bản 2.0 (\`previousTaskIds\`):** ${previousTaskIds.length}`);
  outLines.push(`- **Danh sách \`previousTaskIds\`:** ${previousTaskIds.map((id) => `\`${id}\``).join(', ')}`);
  const addedIn21 = tasks.filter((t) => !previousTaskIds.includes(t.id)).map((t) => t.id);
  outLines.push(`- **Các node bổ sung trong bản 2.1.0 (${addedIn21.length} node):** ${addedIn21.map((id) => `\`${id}\``).join(', ')}`);
  outLines.push('');
  return outLines.join('\n');
}

/**
 * Chạy kiểm chứng hoặc khởi tạo snapshot sao lưu với cơ chế bảo vệ chống ghi đè:
 * - Mặc định (`write: false`, hoặc khi tệp đã tồn tại và `forceOverwrite: false`): KHÔNG GHI ĐÈ tệp đã tồn tại, chỉ đọc và xác minh tính toàn vẹn + SHA-256 + xuất xứ dữ liệu.
 * - Nếu thiếu bất kỳ mục nào hoặc sai lệch SHA-256 / xuất xứ: trả về `ok: false` (và `process.exit(1)` khi chạy CLI).
 */
export async function runBackupWorkflow(options = {}) {
  const {
    backupPath = DEFAULT_BACKUP_PATH,
    verifyOnly = true,
    forceOverwrite = false,
    expectedSha256 = VERIFIED_BACKUP_SHA256,
  } = options;

  const fileExists = fsSync.existsSync(backupPath);

  if (fileExists && !forceOverwrite && !verifyOnly) {
    return {
      ok: false,
      action: 'refused_overwrite',
      backupPath,
      error: `Từ chối ghi đè snapshot lịch sử đã tồn tại tại '${backupPath}'. Sử dụng chế độ --verify (mặc định) để kiểm chứng hoặc chỉ định đường dẫn mới.`,
    };
  }

  if (!fileExists) {
    if (verifyOnly) {
      return {
        ok: false,
        action: 'missing_snapshot',
        backupPath,
        error: `Không tìm thấy tệp snapshot cần xác minh tại '${backupPath}'.`,
      };
    }
    const provenance = getGitProvenance();
    if (!provenance.curriculumUnmodifiedFromBase) {
      return {
        ok: false,
        action: 'provenance_mismatch',
        backupPath,
        error: `Dữ liệu src/curriculum đã thay đổi so với commit gốc '${VERIFIED_BASE_COMMIT}', từ chối tạo snapshot giả danh bản 2.1.0.`,
      };
    }
    await fs.mkdir(path.dirname(backupPath), { recursive: true });
    const content = buildBackupMarkdown();
    await fs.writeFile(backupPath, content, 'utf8');
  } else if (forceOverwrite && !verifyOnly) {
    const provenance = getGitProvenance();
    if (!provenance.curriculumUnmodifiedFromBase) {
      return {
        ok: false,
        action: 'provenance_mismatch',
        backupPath,
        error: `Dữ liệu src/curriculum đã thay đổi so với commit gốc '${VERIFIED_BASE_COMMIT}', từ chối ghi đè snapshot.`,
      };
    }
    const content = buildBackupMarkdown();
    await fs.writeFile(backupPath, content, 'utf8');
  }

  const written = await fs.readFile(backupPath, 'utf8');
  const report = verifyBackupContent(written, { expectedSha256 });
  return {
    ...report,
    action: fileExists && (verifyOnly || !forceOverwrite) ? 'verified_existing_snapshot' : 'wrote_and_verified',
    backupPath,
  };
}

const isCliEntry =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));

if (isCliEntry) {
  const args = new Set(process.argv.slice(2));
  const wantWrite = args.has('--write');
  const forceOverwrite = args.has('--force-overwrite');
  const verifyOnly = !wantWrite;

  const result = await runBackupWorkflow({
    backupPath: DEFAULT_BACKUP_PATH,
    verifyOnly,
    forceOverwrite,
    expectedSha256: VERIFIED_BACKUP_SHA256,
  });

  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) {
    process.exit(1);
  }
}
