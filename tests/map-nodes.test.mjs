import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { MAP_NODES } from '../src/map/nodes.mjs';
import * as generated from '../src/map/map-data.generated.mjs';
import { emptyMapProgress, validateMapProgress, exportMapProgress, nextNodeId } from '../src/map/map-progress.mjs';

const ids = MAP_NODES.map(n => n.id);

test('dữ liệu sinh sẵn đồng bộ với giáo trình và specs', () => {
  execFileSync(process.execPath, ['scripts/build-map-data.mjs', '--check'], { stdio: 'pipe' });
  assert.equal(generated.MAP_NODES.length, MAP_NODES.length);
});
test('node không có trường checklist; nguồn có URL https', () => {
  for (const n of generated.MAP_NODES) {
    assert.equal(n.todos, undefined);
    assert.equal(n.checklist, undefined);
    assert.ok(n.sources.length >= 1, `${n.id} thiếu nguồn`);
    for (const s of n.sources) assert.match(s.url, /^https:\/\//, `${n.id}: ${s.sourceId}`);
  }
});
test('node có thể bỏ qua (vàng, học sau) không là tiên quyết của node chính', () => {
  const by = new Map(MAP_NODES.map(n => [n.id, n]));
  for (const n of MAP_NODES) if (n.skip?.kind !== 'later')
    for (const r of n.needs) assert.notEqual(by.get(r).skip?.kind, 'later', `${n.id} cần node học sau ${r}`);
  for (const n of MAP_NODES) if (n.level === 'extension') assert.equal(n.skip?.kind, 'later', n.id);
});
test('node vàng đều có lý do và thuộc hồ sơ người học', () => {
  const kinds = new Set(MAP_NODES.map(n => n.skip?.kind ?? 'core'));
  assert.deepEqual([...kinds].sort(), ['core', 'fast', 'later']);
  for (const n of MAP_NODES) if (n.skip) assert.ok(n.skip.reason.length > 20, n.id);
});
test('ba node mẫu tồn tại và nối đúng thứ tự', () => {
  const by = new Map(MAP_NODES.map(n => [n.id, n]));
  assert.ok(by.get('n-con-tro') && by.get('n-dslk-don') && by.get('n-he-thuc-de-quy'));
  assert.ok(by.get('n-dslk-don').needs.includes('n-con-tro'));
  assert.equal(by.get('n-con-tro').covers.length, 6);
});
test('tiến độ: xuất/nhập khứ hồi, từ chối id lạ và khóa nguy hiểm', () => {
  const p = { ...emptyMapProgress(), statuses: { 'n-con-tro': 'completed' }, lastNode: 'n-con-tro' };
  const { data } = validateMapProgress(JSON.parse(exportMapProgress(p)), ids);
  assert.deepEqual(data.statuses, p.statuses);
  const bad = validateMapProgress(JSON.parse('{"version":1,"statuses":{"x":"completed","__proto__":"completed","n-con-tro":"bogus"}}'), ids);
  assert.ok(bad.ignored >= 2);
  assert.deepEqual(bad.data.statuses, {});
  assert.throws(() => validateMapProgress({ version: 2 }, ids));
});
test('Tiếp tục học: ưu tiên node đang học, rồi node chưa học đầu tiên', () => {
  assert.equal(nextNodeId(MAP_NODES, {}, null), MAP_NODES[0].id);
  assert.equal(nextNodeId(MAP_NODES, { [MAP_NODES[0].id]: 'completed' }, null), MAP_NODES[1].id);
  assert.equal(nextNodeId(MAP_NODES, { [MAP_NODES[5].id]: 'learning' }, null), MAP_NODES[5].id);
});
