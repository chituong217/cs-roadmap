import test from 'node:test';
import assert from 'node:assert/strict';
import { MAP_NODES } from '../src/map/nodes.mjs';
import { buildMapPrompt, chatTitle } from '../src/map/map-prompt.mjs';

const by = new Map(MAP_NODES.map(n => [n.id, n]));
const projects = MAP_NODES.filter(n => n.kind === 'project');

test('có đủ dự án trải dọc lộ trình', () => {
  assert.ok(projects.length >= 14);
  const groups = new Set(projects.map(p => p.groupId));
  assert.ok(groups.size >= 6, `chỉ có ${groups.size} nhóm có dự án`);
});

test('dự án: mô tả, sản phẩm và tiêu chí đầy đủ', () => {
  for (const p of projects) {
    assert.ok(p.scope.length >= 1 && p.scope.join(' ').split(/\s+/).length >= 40, p.id);
    assert.ok(p.build.length >= 3 && p.done.length >= 3, p.id);
    assert.ok(p.time && p.sources.length >= 1, p.id);
    for (const s of p.sources) assert.match(s.url, /^https:\/\//, p.id);
  }
});

test('dự án: tiên quyết và kiến thức dùng đều tồn tại, đứng trước dự án, không là node học sau', () => {
  for (const p of projects) {
    assert.ok(p.needs.length >= 1, p.id);
    for (const id of [...p.needs, ...p.uses]) {
      const n = by.get(id);
      assert.ok(n, `${p.id}: thiếu ${id}`);
      assert.ok(n.order < p.order, `${p.id}: ${id} phải đứng trước`);
      assert.notEqual(n.skip?.kind, 'later', `${p.id}: ${id} là node học sau`);
    }
  }
});

test('dự án nằm cùng nhóm với node muộn nhất mà nó cần', () => {
  for (const p of projects) {
    const last = [...p.needs, ...p.uses].map(id => by.get(id)).sort((a, b) => b.order - a.order)[0];
    assert.equal(p.groupId, last.groupId, p.id);
  }
});

test('prompt dự án có mục tiêu, tiêu chí xong và yêu cầu hướng dẫn thay vì làm hộ', () => {
  for (const p of projects) {
    const t = buildMapPrompt(p, by);
    assert.ok(t.startsWith(chatTitle(p)), p.id);
    for (const x of [...p.build, ...p.done]) assert.ok(t.includes(x), p.id);
    assert.ok(t.includes('không làm thay tôi'), p.id);
  }
});
