export const STORAGE_KEY_V1 = 'khmt-roadmap.progress.v1';
export const STORAGE_KEY_V2 = 'khmt-roadmap.progress.v2';
export const STORAGE_KEY = STORAGE_KEY_V2;
export const ROADMAP_ID = 'hcmus-cs';

export const labels = {
  todo: 'Chưa học',
  learning: 'Đang học',
  done: 'Hoàn thành',
  deferred: 'Để học sau',
  reviewed: 'Đã học · cần kiểm tra',
  revisit: 'Cần ôn',
};

export const kindLabels = {
  all: 'Tất cả',
  'Học': 'Học',
  'Luyện': 'Luyện',
  'Áp dụng': 'Áp dụng',
};

export function emptyProgress() {
  return {
    version: 2,
    roadmapId: ROADMAP_ID,
    statuses: {},
    lastTask: null,
    checkedTodos: {},
    activeTrackId: 'all',
    filterStatus: 'all',
  };
}

export function migrateProgressV1ToV2(rawV1, ids = []) {
  if (!rawV1 || typeof rawV1 !== 'object') {
    return emptyProgress();
  }
  const statuses = {};
  if (rawV1.statuses && typeof rawV1.statuses === 'object' && !Array.isArray(rawV1.statuses)) {
    for (const [id, status] of Object.entries(rawV1.statuses)) {
      if (Object.hasOwn(labels, status)) {
        if (!ids.length || ids.includes(id)) {
          statuses[id] = status;
        }
      }
    }
  }
  const lastTask = (ids.length ? ids.includes(rawV1.lastTask) : Boolean(rawV1.lastTask)) ? rawV1.lastTask : null;
  return {
    version: 2,
    roadmapId: ROADMAP_ID,
    statuses,
    lastTask,
    checkedTodos: {},
    activeTrackId: 'all',
    filterStatus: 'all',
  };
}

export function validateProgress(raw, ids = []) {
  if (
    !raw ||
    (raw.version !== 1 && raw.version !== 2) ||
    raw.roadmapId !== ROADMAP_ID ||
    !raw.statuses ||
    typeof raw.statuses !== 'object' ||
    Array.isArray(raw.statuses)
  ) {
    throw new Error('Tệp không phải bản sao lưu của roadmap này.');
  }

  const statuses = {};
  let ignored = 0;
  for (const [id, status] of Object.entries(raw.statuses)) {
    if (!Object.hasOwn(labels, status)) {
      throw new Error('Tệp chứa trạng thái không hợp lệ.');
    }
    if (!ids.length || ids.includes(id)) {
      statuses[id] = status;
    } else {
      ignored++;
    }
  }

  const checkedTodos = {};
  if (raw.checkedTodos && typeof raw.checkedTodos === 'object' && !Array.isArray(raw.checkedTodos)) {
    for (const [id, list] of Object.entries(raw.checkedTodos)) {
      if ((!ids.length || ids.includes(id)) && Array.isArray(list)) {
        checkedTodos[id] = list.filter(n => Number.isInteger(n) && n >= 0);
      }
    }
  }

  const activeTrackId = typeof raw.activeTrackId === 'string' ? raw.activeTrackId : 'all';
  const filterStatus = (typeof raw.filterStatus === 'string' && ['all', ...Object.keys(labels)].includes(raw.filterStatus))
    ? raw.filterStatus
    : 'all';
  const lastTask = (ids.length ? ids.includes(raw.lastTask) : Boolean(raw.lastTask)) ? raw.lastTask : null;

  return {
    data: {
      version: 2,
      roadmapId: ROADMAP_ID,
      statuses,
      lastTask,
      checkedTodos,
      activeTrackId,
      filterStatus,
    },
    ignored,
  };
}

export function loadProgressFromStorage(storage, ids = []) {
  if (!storage) {
    return { data: emptyProgress(), migrated: false, error: '' };
  }
  try {
    const rawV2 = storage.getItem(STORAGE_KEY_V2);
    if (rawV2) {
      const parsed = JSON.parse(rawV2);
      const validated = validateProgress(parsed, ids);
      return { data: validated.data, migrated: false, error: '' };
    }

    const rawV1 = storage.getItem(STORAGE_KEY_V1);
    if (rawV1) {
      const parsed = JSON.parse(rawV1);
      const migrated = migrateProgressV1ToV2(parsed, ids);
      try {
        storage.setItem(STORAGE_KEY_V2, JSON.stringify(migrated));
      } catch (err) {
        console.warn('Cannot write migrated v2 to storage:', err);
      }
      return { data: migrated, migrated: true, error: '' };
    }

    return { data: emptyProgress(), migrated: false, error: '' };
  } catch (err) {
    return { data: emptyProgress(), migrated: false, error: 'Chưa đọc được tiến độ đã lưu. Em có thể nhập lại bản sao lưu.' };
  }
}

export function nextTask(tasks, statuses, lastTask = null) {
  const pending = t => statuses[t.id] !== 'done' && !(t.optional && statuses[t.id] === 'deferred');
  const last = tasks.find(t => t.id === lastTask);
  const inRoute = last && last.optional && statuses[last.id] === 'done'
    ? tasks.slice(tasks.indexOf(last) + 1).find(t => t.chapter === last.chapter && pending(t)) : null;
  return tasks.find(t => statuses[t.id] === 'learning')
    || inRoute
    || tasks.find(t => statuses[t.id] === 'revisit')
    || (!Object.keys(statuses).length && tasks.find(t => t.id === 'debug-reproduce'))
    || tasks.find(t => !t.optional && pending(t))
    || tasks.find(t => !(t.optional && statuses[t.id] === 'deferred') && statuses[t.id] !== 'done')
    || tasks[0];
}
