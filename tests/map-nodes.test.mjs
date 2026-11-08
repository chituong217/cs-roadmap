import test from 'node:test';
import assert from 'node:assert/strict';
import { MAP_NODES, MAP_GROUPS } from '../src/map/nodes.mjs';
import { getAllAuthoredTopicIds, AUTHORED_COURSE_MAP } from '../src/syllabus/index.mjs';
import { SOURCE_MAP } from '../src/syllabus/sources.mjs';
import { emptyMapProgress, validateMapProgress, exportMapProgress, nextNodeId } from '../src/map/map-progress.mjs';

const ids = MAP_NODES.map(n => n.id);
const imperative = /^(hãy|làm|viết|cài|chạy|thực hành|tự|giải|xây)\b/i;

test('node ids are unique and own namespace', () => {
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every(id => id.startsWith('n-')));
});
test('covers reference real topics and courses exist', () => {
  const topics = getAllAuthoredTopicIds();
  for (const n of MAP_NODES) {
    assert.ok(AUTHORED_COURSE_MAP.has(n.courseId), n.id);
    assert.ok(MAP_GROUPS.some(g => g.id === n.groupId));
    for (const t of n.covers) assert.ok(topics.has(t), `${n.id}: ${t}`);
    for (const s of n.sources) assert.ok(SOURCE_MAP.has(s.sourceId), s.sourceId);
  }
});
test('scope is prose, no checklist field or imperative/bullet paragraphs', () => {
  for (const n of MAP_NODES) {
    assert.equal(n.todos, undefined);
    assert.equal(n.checklist, undefined);
    assert.ok(n.scope.length >= 2 && n.scope.length <= 4);
    for (const p of n.scope) {
      assert.ok(p.split(/\s+/).length >= 40, `${n.id} too short`);
      assert.ok(!/^[-*•\d]/.test(p) && !imperative.test(p));
    }
  }
});
test('prerequisites are acyclic and never point to later nodes', () => {
  const order = new Map(MAP_NODES.map(n => [n.id, n.order]));
  for (const n of MAP_NODES) for (const r of n.needs) {
    assert.ok(order.has(r)); assert.ok(order.get(r) < n.order, `${n.id} needs later ${r}`);
  }
});
test('progress validation rejects unknown/dangerous ids and round-trips', () => {
  const p = { ...emptyMapProgress(), statuses: { 'n-con-tro': 'completed' }, lastNode: 'n-con-tro' };
  const { data } = validateMapProgress(JSON.parse(exportMapProgress(p)), ids);
  assert.deepEqual(data.statuses, p.statuses);
  const bad = validateMapProgress({ version: 1, statuses: { x: 'completed', __proto__: 'completed', 'n-con-tro': 'bogus' } }, ids);
  assert.equal(bad.ignored >= 2, true);
  assert.throws(() => validateMapProgress({ version: 2 }, ids));
  assert.equal(nextNodeId(MAP_NODES, {}, null), 'n-con-tro');
  assert.equal(nextNodeId(MAP_NODES, { 'n-con-tro': 'completed' }, null), 'n-dslk-don');
});
