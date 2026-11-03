export const STORAGE_KEY = 'khmt-roadmap.progress.v1';
export const ROADMAP_ID = 'hcmus-cs';
export const labels = { todo: 'Chưa học', learning: 'Đang học', done: 'Hoàn thành', deferred: 'Để học sau' };
export function emptyProgress() { return { version: 1, roadmapId: ROADMAP_ID, statuses: {}, lastTask: null }; }
export function validateProgress(raw, ids) {
  if (!raw || raw.version !== 1 || raw.roadmapId !== ROADMAP_ID || !raw.statuses || typeof raw.statuses !== 'object' || Array.isArray(raw.statuses)) throw new Error('Tệp không phải bản sao lưu của roadmap này.');
  const statuses = {};
  let ignored = 0;
  for (const [id, status] of Object.entries(raw.statuses)) {
    if (!Object.hasOwn(labels, status)) throw new Error('Tệp chứa trạng thái không hợp lệ.');
    if (ids.includes(id)) statuses[id] = status;
    else ignored++;
  }
  return { data: { ...emptyProgress(), statuses, lastTask: ids.includes(raw.lastTask) ? raw.lastTask : null }, ignored };
}
export function nextTask(tasks, statuses) { return tasks.find(t => statuses[t.id] === 'learning') || tasks.find(t => statuses[t.id] !== 'done' && !(t.optional && statuses[t.id] === 'deferred')) || tasks[0]; }
