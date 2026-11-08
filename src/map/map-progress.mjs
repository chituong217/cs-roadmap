// Tiến độ bản đồ mới: lưu riêng, không chuyển đổi từ tiến độ cũ (v2) hay bản đọc (v3).
export const MAP_STORAGE_KEY = 'cs-map.progress.v1';
export const MAP_STATUS_LABELS = Object.freeze({
  unread: 'Chưa học',
  learning: 'Đang học',
  completed: 'Đã nắm',
  revisit: 'Cần ôn',
});
const BAD = new Set(['__proto__', 'constructor', 'prototype']);

export const emptyMapProgress = () => ({ version: 1, statuses: {}, lastNode: null });

export function validateMapProgress(raw, knownIds) {
  if (!raw || typeof raw !== 'object' || raw.version !== 1 || raw.kind !== 'cs-map-progress' && raw.kind !== undefined)
    throw new Error('Tệp không phải bản sao lưu tiến độ bản đồ mới (cs-map.progress.v1).');
  const known = new Set(knownIds);
  const statuses = {};
  let ignored = 0;
  for (const [id, st] of Object.entries(raw.statuses ?? {})) {
    if (BAD.has(id) || !known.has(id) || !Object.hasOwn(MAP_STATUS_LABELS, st) || st === 'unread') { ignored++; continue; }
    statuses[id] = st;
  }
  const lastNode = known.has(raw.lastNode) ? raw.lastNode : null;
  return { data: { version: 1, statuses, lastNode }, ignored };
}

export function loadMapProgress(storage, knownIds) {
  try {
    const text = storage.getItem(MAP_STORAGE_KEY);
    if (!text) return { data: emptyMapProgress(), error: '' };
    return { data: validateMapProgress(JSON.parse(text), knownIds).data, error: '' };
  } catch {
    return { data: emptyMapProgress(), error: 'Không đọc được tiến độ đã lưu; bắt đầu lại từ trống.' };
  }
}

export function saveMapProgress(storage, progress) {
  try { storage.setItem(MAP_STORAGE_KEY, JSON.stringify(progress)); return true; } catch { return false; }
}

export function exportMapProgress(progress) {
  return JSON.stringify({ kind: 'cs-map-progress', ...progress, exportedAt: new Date().toISOString() }, null, 2);
}

// Node "Tiếp tục học": node đang học đầu tiên, nếu không có thì node chưa học đầu tiên theo thứ tự.
export function nextNodeId(nodes, statuses, lastNode) {
  const sorted = [...nodes].sort((a, b) => a.order - b.order);
  return (
    sorted.find(n => statuses[n.id] === 'learning')?.id ??
    sorted.find(n => !statuses[n.id] || statuses[n.id] === 'revisit')?.id ??
    lastNode ?? sorted[0]?.id
  );
}
