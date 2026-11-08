// Sinh src/map/map-data.generated.mjs từ giáo trình + specs, để trang bản đồ không phải nạp toàn bộ nội dung 50 môn.
// Chạy: node scripts/build-map-data.mjs   (kiểm tra đồng bộ: node scripts/build-map-data.mjs --check)
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { MAP_GROUPS, MAP_NODES, MAP_LEVELS } from '../src/map/nodes.mjs';

const out = new URL('../src/map/map-data.generated.mjs', import.meta.url);
const text =
  '// FILE SINH TỰ ĐỘNG bởi scripts/build-map-data.mjs — không sửa tay.\n' +
  `export const MAP_GROUPS = ${JSON.stringify(MAP_GROUPS)};\n` +
  `export const MAP_LEVELS = ${JSON.stringify(MAP_LEVELS)};\n` +
  `export const MAP_NODES = ${JSON.stringify(MAP_NODES)};\n`;
if (process.argv.includes('--check')) {
  const ok = existsSync(out) && readFileSync(out, 'utf8') === text;
  if (!ok) { console.error('map-data.generated.mjs đã lỗi thời. Chạy: node scripts/build-map-data.mjs'); process.exit(1); }
  console.log('map-data.generated.mjs đồng bộ.');
} else {
  writeFileSync(out, text);
  console.log(`Đã ghi ${MAP_NODES.length} node.`);
}
