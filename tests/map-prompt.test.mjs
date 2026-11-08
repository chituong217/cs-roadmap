import test from 'node:test';
import assert from 'node:assert/strict';
import { MAP_NODES } from '../src/map/map-data.generated.mjs';
import { buildMapPrompt, blankMapPrompt, chatTitle } from '../src/map/map-prompt.mjs';

const byId = new Map(MAP_NODES.map(n => [n.id, n]));

test('prompt của mọi node có tên, nội dung cần nắm và không còn ô trống', () => {
  for (const n of MAP_NODES) {
    const p = buildMapPrompt(n, byId);
    assert.ok(p.startsWith(chatTitle(n)), n.id);
    for (const para of n.scope) assert.ok(p.includes(para), n.id);
    assert.ok(!/\bundefined\b|\[object|\[SỐ NODE\]/.test(p.replaceAll('undefined behavior', '')), n.id);
    assert.ok(p.includes(n.courseTitle), n.id);
  }
});

test('prompt nêu rõ node đi nhanh / học sau và kiến thức đầu vào', () => {
  const fast = MAP_NODES.find(n => n.skip?.kind === 'fast');
  assert.ok(buildMapPrompt(fast, byId).includes('Ôn nhanh'));
  const later = MAP_NODES.find(n => n.skip?.kind === 'later');
  assert.ok(buildMapPrompt(later, byId).includes('Có thể học sau'));
  const withNeeds = MAP_NODES.find(n => n.needs.length);
  assert.ok(buildMapPrompt(withNeeds, byId).includes(`Node: ${byId.get(withNeeds.needs[0]).title}`));
});

test('mẫu trống có chỗ điền', () => {
  const p = blankMapPrompt();
  assert.ok(p.includes('[TÊN NODE]') && p.includes('[SỐ NODE]'));
});
