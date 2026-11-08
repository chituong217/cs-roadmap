import test from 'node:test';
import assert from 'node:assert/strict';
import { MAP_NODES, MAP_GROUPS } from '../src/map/nodes.mjs';
import { SPECS } from '../src/map/specs/index.mjs';
import { getAllAuthoredTopicIds, AUTHORED_COURSES } from '../src/syllabus/index.mjs';

test('mọi spec có id duy nhất và nằm trong namespace n-', () => {
  const ids = SPECS.map(s => s.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every(id => id.startsWith('n-')));
});
test('không topic nào bị mất hoặc bị gán cho nhiều node (các môn đã có node)', () => {
  const seen = new Map();
  for (const n of MAP_NODES) for (const t of n.covers) {
    assert.ok(getAllAuthoredTopicIds().has(t), `${n.id}: topic lạ ${t}`);
    assert.ok(!seen.has(t), `${t} bị gán cho ${seen.get(t)} và ${n.id}`);
    seen.set(t, n.id);
  }
  const done = new Set(MAP_NODES.map(n => n.courseId));
  for (const c of AUTHORED_COURSES) if (done.has(c.id))
    for (const ch of c.chapters) for (const t of ch.topics) assert.ok(seen.has(t.id), `môn ${c.id}: mất ${t.id}`);
});
test('chỉ có thể xong khi cả 50 môn đã có node', { skip: process.env.MAP_PARTIAL === '1' }, () => {
  assert.equal(new Set(MAP_NODES.map(n => n.courseId)).size, AUTHORED_COURSES.length);
});
test('thứ tự học: tiên quyết luôn đứng trước, không có chu trình', () => {
  const order = new Map(MAP_NODES.map(n => [n.id, n.order]));
  for (const n of MAP_NODES) for (const r of n.needs) assert.ok(order.get(r) < n.order, `${n.id} cần ${r} đứng sau`);
});
test('mô tả là văn xuôi, không phải checklist hay lời giao việc', () => {
  const imperative = /^(hãy|làm|viết|cài|chạy|thực hành|tự|xây)\b/i;
  for (const n of MAP_NODES) {
    assert.ok(n.scope.length >= 1 && n.scope.length <= 4, n.id);
    const words = n.scope.join(' ').split(/\s+/).length;
    assert.ok(words >= 40 && words <= 330, `${n.id}: ${words} từ`);
    for (const p of n.scope) assert.ok(!/^[-*•\d]/.test(p) && !imperative.test(p), `${n.id}: ${p.slice(0, 30)}`);
  }
  assert.ok(MAP_GROUPS.length === 7);
});
