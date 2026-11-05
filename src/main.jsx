import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactFlow, ReactFlowProvider, Background, Handle, Position, MarkerType, useReactFlow } from '@xyflow/react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckSquare,
  Square,
  ChevronRight,
  Circle,
  Download,
  ExternalLink,
  Focus,
  GitBranch,
  Minus,
  Plus,
  Search,
  Upload,
  X,
  MessageSquare,
  Clock,
  FolderGit2,
  RotateCcw,
  Layers,
  PanelLeft,
  PanelRight,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import PromptDialog from './PromptDialog';
import { tracks, chapters, tasks, edition, capstoneProjects, chapterToTrackId } from './curriculum';
import {
  emptyProgress,
  labels,
  kindLabels,
  nextTask,
  STORAGE_KEY,
  STORAGE_KEY_V2,
  validateProgress,
  loadProgressFromStorage,
} from './progress.mjs';
import '@xyflow/react/dist/style.css';
import './style.css';

const ids = tasks.map(t => t.id);
const normalize = text =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .toLowerCase();

const statusIcon = { todo: Circle, learning: BookOpen, done: Check, deferred: Clock };

function TaskNode({ data }) {
  const Icon = statusIcon[data.status] || Circle;
  const trackAccent = data.track?.colorAccent || '#23654f';
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <button
        className={`task-node nodrag nopan ${data.task.optional ? 'optional' : ''} ${data.active ? 'active' : ''} ${data.status}`}
        style={{ '--track-accent': trackAccent }}
        onClick={event => {
          event.stopPropagation();
          data.open(data.task.id);
        }}
        aria-label={`${data.task.number} · ${data.task.title}`}
        aria-pressed={data.active}
      >
        <span className="node-meta">
          <span>
            {data.task.number} <span className="meta-divider">/</span> {data.chapter?.number || '00'}
          </span>
          <span className="node-track-tag" style={{ color: trackAccent }}>
            {data.track?.shortTitle || `T${data.track?.trackNumber}`}
          </span>
          <span className={`kind kind-${data.task.kind}`}>{data.task.kind}</span>
        </span>
        <span className="node-chapter">
          {data.task.optional ? 'NÂNG CAO · CÓ THỂ BỎ QUA' : data.chapter?.title}
        </span>
        <strong>{data.task.title}</strong>
        <span className="node-bottom">
          <span className="node-status">
            <Icon size={13} />
            {labels[data.status] || data.status}
          </span>
          <span className="open-node">
            Chi tiết <ArrowRight size={14} />
          </span>
        </span>
      </button>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

function TrackHeaderNode({ data }) {
  return (
    <div
      className="track-header-node nodrag nopan"
      style={{ '--track-accent': data.track.colorAccent }}
      onClick={data.onSelectTrack}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          data.onSelectTrack?.();
        }
      }}
      role="button"
      tabIndex={0}
      title="Bấm để lọc theo riêng Track này"
    >
      <div className="track-header-badge" style={{ backgroundColor: data.track.colorAccent }}>
        Track {data.track.trackNumber}
      </div>
      <strong>{data.track.shortTitle}</strong>
      <div className="track-header-meta">
        <span>{data.taskCount} nhiệm vụ</span>
        <span>•</span>
        <span>{data.doneCount} hoàn thành</span>
      </div>
    </div>
  );
}

const nodeTypes = {
  task: TaskNode,
  trackHeader: TrackHeaderNode,
};

function loadInitialProgress() {
  if (typeof localStorage === 'undefined') {
    return { data: emptyProgress(), error: '' };
  }
  const result = loadProgressFromStorage(localStorage, ids);
  return {
    data: result.data,
    error: result.error,
    notice: result.migrated ? 'Đã tự động nâng cấp tiến độ học tập sang phiên bản v2.' : '',
  };
}

function Roadmap() {
  const [initial] = useState(loadInitialProgress);
  const [progress, setProgress] = useState(initial.data);
  const [activeTrackId, setActiveTrackId] = useState(initial.data.activeTrackId || 'all');
  const [filterStatus, setFilterStatusState] = useState(initial.data.filterStatus || 'all');
  const [filterKind, setFilterKind] = useState('all');
  const [selected, setSelected] = useState(initial.data.lastTask || tasks[0].id);
  const [detailOpen, setDetailOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState(initial.notice || initial.error);
  const [storageError, setStorageError] = useState('');
  const [helpOpen, setHelpOpen] = useState(false);
  const [promptOpen, setPromptOpen] = useState(false);
  const [capstoneOpen, setCapstoneOpen] = useState(false);
  const [leftOpen, setLeftOpen] = useState(() => {
    try {
      return typeof localStorage !== 'undefined' && localStorage.getItem('khmt-roadmap.ui.left') === '0' ? false : true;
    } catch {
      return true;
    }
  });
  const [rightOpen, setRightOpen] = useState(() => {
    try {
      return typeof localStorage !== 'undefined' && localStorage.getItem('khmt-roadmap.ui.right') === '0' ? false : true;
    } catch {
      return true;
    }
  });
  const [smallScreen, setSmallScreen] = useState(() => (typeof window !== 'undefined' ? window.matchMedia('(max-width: 999px)').matches : false));

  const toggleLeftSidebar = useCallback(() => {
    setLeftOpen(prev => {
      const next = !prev;
      try {
        localStorage.setItem('khmt-roadmap.ui.left', next ? '1' : '0');
      } catch {}
      return next;
    });
  }, []);

  const toggleRightSidebar = useCallback(() => {
    setRightOpen(prev => {
      const next = !prev;
      try {
        localStorage.setItem('khmt-roadmap.ui.right', next ? '1' : '0');
      } catch {}
      return next;
    });
  }, []);

  const toggleFocusCanvas = useCallback(() => {
    const anyOpen = leftOpen || rightOpen;
    const next = !anyOpen;
    setLeftOpen(next);
    setRightOpen(next);
    try {
      localStorage.setItem('khmt-roadmap.ui.left', next ? '1' : '0');
      localStorage.setItem('khmt-roadmap.ui.right', next ? '1' : '0');
    } catch {}
  }, [leftOpen, rightOpen]);

  useEffect(() => {
    const onKeyDown = e => {
      const tag = e.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target?.isContentEditable) return;
      if (promptOpen || capstoneOpen) return;
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        toggleLeftSidebar();
      } else if ((e.ctrlKey || e.metaKey) && e.key === '\\') {
        e.preventDefault();
        toggleRightSidebar();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [toggleLeftSidebar, toggleRightSidebar, promptOpen, capstoneOpen]);

  const importRef = useRef(null);
  const detailRef = useRef(null);
  const dialogRef = useRef(null);
  const capstoneDialogRef = useRef(null);
  const lastFocus = useRef(null);
  const flow = useReactFlow();

  const current = tasks.find(t => t.id === selected) || tasks[0];
  const index = tasks.indexOf(current);
  const chapter = chapters.find(c => c.id === current.chapter) || chapters[0];
  const currentTrack = tracks.find(t => t.id === current.trackId) || tracks[0];

  const done = tasks.filter(t => progress.statuses[t.id] === 'done').length;
  const required = tasks.filter(t => !t.optional);
  const requiredDone = required.filter(t => progress.statuses[t.id] === 'done').length;
  const optionalDone = done - requiredDone;
  const percent = Math.round((requiredDone / required.length) * 100);

  // Search results
  const results = tasks.filter(t =>
    normalize(`${t.number} ${t.title} ${t.todos.join(' ')} ${chapters.find(c => c.id === t.chapter)?.title || ''}`).includes(
      normalize(query)
    )
  );

  // Persist progress to LocalStorage v2
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_V2, JSON.stringify(progress));
      setStorageError('');
    } catch {
      setStorageError('Trình duyệt chưa lưu được tiến độ. Hãy xuất bản sao lưu trước khi đóng trang.');
    }
  }, [progress]);

  useEffect(() => {
    detailRef.current?.scrollTo({ top: 0 });
  }, [selected]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 999px)');
    const update = () => setSmallScreen(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (detailOpen && smallScreen && !dialog.open) dialog.showModal();
    if ((!detailOpen || !smallScreen) && dialog.open) dialog.close();
  }, [detailOpen, selected, smallScreen]);

  useEffect(() => {
    const dialog = capstoneDialogRef.current;
    if (!dialog) return;
    if (capstoneOpen && !dialog.open) dialog.showModal();
    if (!capstoneOpen && dialog.open) dialog.close();
  }, [capstoneOpen]);

  // Filter tasks based on track, status, and kind
  const visibleTasks = useMemo(() => {
    return tasks.filter(t => {
      if (activeTrackId !== 'all' && t.trackId !== activeTrackId) return false;
      const status = progress.statuses[t.id] || 'todo';
      if (filterStatus !== 'all' && status !== filterStatus) return false;
      if (filterKind !== 'all' && t.kind !== filterKind) return false;
      return true;
    });
  }, [activeTrackId, filterStatus, filterKind, progress.statuses]);

  // Multi-column or single-track canvas nodes & edges
  const { nodes, edges } = useMemo(() => {
    const nodeList = [];
    const edgeList = [];

    if (activeTrackId === 'all') {
      // 7-column layout across all tracks
      tracks.forEach((track, colIdx) => {
        const colX = colIdx * 430;
        const trackTasks = visibleTasks.filter(t => t.trackId === track.id);
        const allTrackTasks = tasks.filter(t => t.trackId === track.id);
        const doneTrackCount = allTrackTasks.filter(t => progress.statuses[t.id] === 'done').length;

        // Header node
        nodeList.push({
          id: `track-header-${track.id}`,
          type: 'trackHeader',
          position: { x: colX, y: -90 },
          draggable: false,
          selectable: false,
          focusable: false,
          data: {
            track,
            taskCount: allTrackTasks.length,
            doneCount: doneTrackCount,
            onSelectTrack: () => {
              setActiveTrackId(track.id);
              setProgress(p => ({ ...p, activeTrackId: track.id }));
              window.history.replaceState(null, '', `#track-${track.id}`);
              const firstInTrack = tasks.find(t => t.trackId === track.id);
              if (firstInTrack) {
                setSelected(firstInTrack.id);
              }
            },
          },
        });

        // Tasks in track
        trackTasks.forEach((task, rowIdx) => {
          const taskChapter = chapters.find(c => c.id === task.chapter);
          nodeList.push({
            id: task.id,
            type: 'task',
            position: { x: colX, y: rowIdx * 198 },
            draggable: false,
            selectable: false,
            focusable: false,
            data: {
              task,
              track,
              chapter: taskChapter,
              active: task.id === selected,
              status: progress.statuses[task.id] || 'todo',
              open: id => openTask(id),
            },
          });
        });

        // Sequential edges within this track
        for (let i = 0; i < trackTasks.length - 1; i++) {
          edgeList.push({
            id: `edge-${trackTasks[i].id}->${trackTasks[i + 1].id}`,
            source: trackTasks[i].id,
            target: trackTasks[i + 1].id,
            type: 'straight',
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: track.colorAccent || '#8c9b96',
              width: 14,
              height: 14,
            },
            style: {
              stroke: track.colorAccent || '#8c9b96',
              strokeWidth: 2,
            },
            selectable: false,
            focusable: false,
          });
        }
      });
    } else {
      // Single track layout
      const track = tracks.find(t => t.id === activeTrackId) || tracks[0];
      const trackTasks = visibleTasks.filter(t => t.trackId === track.id);
      const allTrackTasks = tasks.filter(t => t.trackId === track.id);
      const doneTrackCount = allTrackTasks.filter(t => progress.statuses[t.id] === 'done').length;

      nodeList.push({
        id: `track-header-${track.id}`,
        type: 'trackHeader',
        position: { x: 0, y: -90 },
        draggable: false,
        selectable: false,
        focusable: false,
        data: {
          track,
          taskCount: allTrackTasks.length,
          doneCount: doneTrackCount,
          onSelectTrack: () => {
            setActiveTrackId('all');
            setProgress(p => ({ ...p, activeTrackId: 'all' }));
            window.history.replaceState(null, '', '#');
          },
        },
      });

      trackTasks.forEach((task, rowIdx) => {
        const taskChapter = chapters.find(c => c.id === task.chapter);
        nodeList.push({
          id: task.id,
          type: 'task',
          position: { x: 0, y: rowIdx * 198 },
          draggable: false,
          selectable: false,
          focusable: false,
          data: {
            task,
            track,
            chapter: taskChapter,
            active: task.id === selected,
            status: progress.statuses[task.id] || 'todo',
            open: id => openTask(id),
          },
        });
      });

      for (let i = 0; i < trackTasks.length - 1; i++) {
        edgeList.push({
          id: `edge-${trackTasks[i].id}->${trackTasks[i + 1].id}`,
          source: trackTasks[i].id,
          target: trackTasks[i + 1].id,
          type: 'straight',
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: track.colorAccent || '#8c9b96',
            width: 14,
            height: 14,
          },
          style: {
            stroke: track.colorAccent || '#8c9b96',
            strokeWidth: 2,
          },
          selectable: false,
          focusable: false,
        });
      }
    }

    return { nodes: nodeList, edges: edgeList };
  }, [activeTrackId, visibleTasks, selected, progress.statuses]);

  // Center canvas on target node (or fallback to first visible task/header node)
  const centerNode = useCallback(
    (id, duration = 350) => {
      const node =
        nodes.find(n => n.id === id) ||
        nodes.find(n => n.type === 'task') ||
        nodes[0];
      const el = document.querySelector('.map-canvas');
      const width = el?.clientWidth || 600;
      if (node) {
        const zoom = Math.min(1, Math.max(0.65, (width - 48) / 450));
        flow.setCenter(node.position.x + 183, node.position.y + 73, { zoom, duration });
      }
    },
    [nodes, flow]
  );

  const openTask = useCallback(
    (id, keepTrack = false) => {
      const targetTask = tasks.find(t => t.id === id);
      if (!targetTask) return;
      lastFocus.current = document.activeElement;
      setSelected(id);
      setDetailOpen(true);
      setRightOpen(true);
      try {
        localStorage.setItem('khmt-roadmap.ui.right', '1');
      } catch {}
      setHelpOpen(false);

      if (!keepTrack && activeTrackId !== 'all' && targetTask.trackId !== activeTrackId) {
        setActiveTrackId(targetTask.trackId);
        setProgress(p => ({ ...p, activeTrackId: targetTask.trackId, lastTask: id }));
      } else {
        setProgress(p => ({ ...p, lastTask: id }));
      }

      window.history.replaceState(null, '', `#task-${id}`);
      setTimeout(() => centerNode(id, 350), 30);
    },
    [activeTrackId, centerNode]
  );

  const handleSelectTrack = useCallback(
    trackId => {
      setActiveTrackId(trackId);
      setProgress(p => ({ ...p, activeTrackId: trackId }));
      window.history.replaceState(null, '', trackId === 'all' ? '#' : `#track-${trackId}`);
      if (trackId !== 'all') {
        const firstInTrack = tasks.find(t => t.trackId === trackId);
        if (firstInTrack) {
          setSelected(firstInTrack.id);
          setTimeout(() => centerNode(firstInTrack.id, 350), 50);
        }
      } else {
        setTimeout(() => centerNode(selected, 350), 50);
      }
    },
    [centerNode, selected]
  );

  // Hash deep linking initial load and listener
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#task-')) {
        const taskId = hash.slice(6);
        const target = tasks.find(t => t.id === taskId);
        if (target) {
          setSelected(taskId);
          setDetailOpen(true);
          setRightOpen(true);
          try {
            localStorage.setItem('khmt-roadmap.ui.right', '1');
          } catch {}
          setActiveTrackId(prev => (prev !== 'all' && target.trackId !== prev ? target.trackId : prev));
          setTimeout(() => centerNode(taskId, 0), 100);
        }
      } else if (hash.startsWith('#track-')) {
        const trackId = hash.slice(7);
        if (tracks.some(t => t.id === trackId)) {
          setActiveTrackId(trackId);
          const firstTask = tasks.find(t => t.trackId === trackId);
          if (firstTask) {
            setSelected(firstTask.id);
            setTimeout(() => centerNode(firstTask.id, 0), 100);
          }
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [centerNode]);

  useEffect(() => {
    const canvas = document.querySelector('.map-canvas');
    if (!canvas) return;
    const observer = new ResizeObserver(() => centerNode(selected, 0));
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [centerNode, selected]);

  const closeDetail = () => {
    setDetailOpen(false);
    lastFocus.current?.focus?.();
  };

  const setStatus = status =>
    setProgress(p => ({
      ...p,
      lastTask: selected,
      statuses: { ...p.statuses, [selected]: status },
    }));

  const setFilterStatus = status => {
    setFilterStatusState(status);
    setProgress(p => ({ ...p, filterStatus: status }));
  };

  const resetFilters = () => {
    setFilterStatusState('all');
    setFilterKind('all');
    setActiveTrackId('all');
    setProgress(p => ({ ...p, filterStatus: 'all', activeTrackId: 'all' }));
    window.history.replaceState(null, '', '#');
    setTimeout(() => centerNode(selected, 350), 50);
  };

  const toggleTodo = (taskId, todoIdx) => {
    setProgress(p => {
      const currentChecked = p.checkedTodos?.[taskId] || [];
      const nextChecked = currentChecked.includes(todoIdx)
        ? currentChecked.filter(i => i !== todoIdx)
        : [...currentChecked, todoIdx];
      return {
        ...p,
        checkedTodos: {
          ...p.checkedTodos,
          [taskId]: nextChecked,
        },
      };
    });
  };

  const exportProgress = () => {
    const url = URL.createObjectURL(
      new Blob([JSON.stringify({ ...progress, exportedAt: new Date().toISOString() }, null, 2)], {
        type: 'application/json',
      })
    );
    const link = document.createElement('a');
    link.href = url;
    link.download = `tien-do-khmt-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice('Đã tạo bản sao lưu v2. Giữ tệp này để khôi phục hoặc chuyển sang thiết bị khác.');
  };

  const importProgress = async event => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    try {
      if (file.size > 1024 * 1024) throw new Error('Tệp quá lớn. Chọn bản sao lưu JSON dưới 1 MB.');
      const parsed = JSON.parse(await file.text());
      const { data, ignored } = validateProgress(parsed, ids);
      setProgress(p => ({
        ...p,
        version: 2,
        statuses: { ...p.statuses, ...data.statuses },
        lastTask: data.lastTask || p.lastTask,
        checkedTodos: { ...(p.checkedTodos || {}), ...(data.checkedTodos || {}) },
        activeTrackId: data.activeTrackId || p.activeTrackId || 'all',
        filterStatus: data.filterStatus || p.filterStatus || 'all',
      }));
      if (data.activeTrackId) setActiveTrackId(data.activeTrackId);
      if (data.filterStatus) setFilterStatusState(data.filterStatus);
      if (data.lastTask) {
        setSelected(data.lastTask);
        centerNode(data.lastTask);
      }
      setNotice(
        `Đã nhập tiến độ.${parsed.version === 1 ? ' (Đã nâng cấp từ bản sao lưu v1 sang v2).' : ''}${
          ignored ? ` Bỏ qua ${ignored} mục chưa có trong phiên bản này.` : ''
        }`
      );
    } catch (err) {
      setNotice(err instanceof SyntaxError ? 'Không đọc được JSON. Tiến độ hiện tại được giữ nguyên.' : err.message);
    }
  };

  const currentCheckedTodos = progress.checkedTodos?.[selected] || [];

  const details = (
    <>
      <div className="detail-top">
        <span>
          NHIỆM VỤ {current.number} · {currentTrack.shortTitle}
        </span>
        <div className="detail-top-actions">
          <span className="desktop-detail-count">
            {index + 1} / {tasks.length}
          </span>
          <button
            className="icon-button desktop-panel-close"
            aria-label="Ẩn thanh chi tiết bên phải"
            title="Ẩn thanh chi tiết bên phải (Ctrl+\)"
            onClick={toggleRightSidebar}
          >
            <PanelRight size={16} />
          </button>
          <button className="icon-button mobile-close" aria-label="Đóng chi tiết" onClick={closeDetail}>
            <X size={20} />
          </button>
        </div>
      </div>
      <div className="detail-scroll" ref={detailRef}>
        <div className="detail-eyebrow">
          <span
            className="track-pill"
            style={{ backgroundColor: currentTrack.colorAccent + '20', color: currentTrack.colorAccent }}
          >
            Track {currentTrack.trackNumber}: {currentTrack.shortTitle}
          </span>
          <span className={`kind kind-${current.kind}`}>{current.kind}</span>
          <span>{chapter.title}</span>
        </div>
        <h2>{current.title}</h2>
        {current.optional && (
          <div className="optional-note">
            <strong>Nâng cao · Có thể bỏ qua trong vòng nền</strong>
            <p>{current.optionalReason}</p>
          </div>
        )}
        <div className="status-select" role="group" aria-label="Trạng thái nhiệm vụ">
          {Object.entries(labels)
            .filter(([status]) => status !== 'deferred' || current.optional)
            .map(([status, label]) => {
              const Icon = statusIcon[status] || Circle;
              const isChosen = (progress.statuses[selected] || 'todo') === status;
              return (
                <button
                  key={status}
                  aria-pressed={isChosen}
                  className={isChosen ? `chosen ${status}` : ''}
                  onClick={() => setStatus(status)}
                >
                  <Icon size={14} />
                  {label}
                </button>
              );
            })}
        </div>
        <div className="todo-header">
          <h3>Việc cần làm</h3>
          <span className="todo-counter">
            {currentCheckedTodos.length}/{current.todos.length} đã xong
          </span>
        </div>
        <ul className="todo-list">
          {current.todos.map((text, todoIdx) => {
            const isChecked = currentCheckedTodos.includes(todoIdx);
            return (
              <li key={text} className={isChecked ? 'todo-item checked' : 'todo-item'}>
                <button
                  type="button"
                  className="todo-checkbox-btn"
                  role="checkbox"
                  aria-checked={isChecked}
                  onClick={() => toggleTodo(selected, todoIdx)}
                  aria-label={isChecked ? `Bỏ đánh dấu việc: ${text}` : `Đánh dấu đã làm: ${text}`}
                >
                  {isChecked ? <CheckSquare size={16} className="checked-icon" /> : <Square size={16} />}
                </button>
                <span className="todo-text">{text}</span>
              </li>
            );
          })}
        </ul>
        {current.reviewTargets?.length > 0 && (
          <section className="review-targets">
            <h3>Ô cần ôn theo bài làm</h3>
            <p>Chỉ mở phần tương ứng với mục chưa tự làm được.</p>
            {current.reviewTargets.map(id => {
              const target = tasks.find(t => t.id === id);
              if (!target) return null;
              return (
                <button key={id} onClick={() => openTask(id)}>
                  {target.number} · {target.title}
                  <ArrowRight size={14} />
                </button>
              );
            })}
          </section>
        )}
        {current.extra && (
          <section className="extra">
            <h3>Thông tin thêm</h3>
            <p>{current.extra}</p>
          </section>
        )}
        {current.sources?.length > 0 && (
          <section className="sources">
            <h3>Nguồn tham khảo miễn phí</h3>
            {current.sources.map(([label, url, scope, access]) => (
              <div className="reading" key={url}>
                <a href={url} target="_blank" rel="noreferrer">
                  {label}
                  <ExternalLink size={14} />
                </a>
                {scope && (
                  <p>
                    <b>Phần cần đọc:</b> {scope}
                  </p>
                )}
                {access && <small>{access}</small>}
              </div>
            ))}
          </section>
        )}
      </div>
      <div className="detail-footer">
        <button
          className="icon-button"
          aria-label="Nhiệm vụ trước"
          disabled={index === 0}
          onClick={() => openTask(tasks[index - 1].id)}
        >
          <ArrowLeft size={18} />
        </button>
        <button
          className="next-button"
          disabled={index === tasks.length - 1}
          onClick={() => openTask(tasks[index + 1].id)}
        >
          {index === tasks.length - 1 ? 'Đã tới cuối lộ trình' : 'Nhiệm vụ tiếp theo'}
          <ArrowRight size={17} />
        </button>
      </div>
    </>
  );

  return (
    <div className="app-shell">
      <header className="app-header">
        <button
          className={`panel-toggle-btn desktop-only-btn ${leftOpen ? 'active' : ''}`}
          onClick={toggleLeftSidebar}
          aria-label={leftOpen ? 'Ẩn thanh bên trái' : 'Hiện thanh bên trái'}
          aria-pressed={leftOpen}
          title={leftOpen ? 'Ẩn thanh mục lục bên trái (Ctrl+B)' : 'Hiện thanh mục lục bên trái (Ctrl+B)'}
        >
          <PanelLeft size={17} />
        </button>
        <a
          className="brand"
          href="#"
          onClick={e => {
            e.preventDefault();
            openTask(tasks[0].id);
          }}
        >
          <span className="brand-icon">
            <GitBranch size={20} />
          </span>
          <span>
            Lộ trình <b>KHMT</b>
            <small>DÀNH CHO CHÍ TƯỜNG · HCMUS Y2</small>
          </span>
        </a>
        <span className="prototype-tag">Lộ trình · {edition.version}</span>
        <div className="header-actions">
          <a
            className="diagnostic-btn-link"
            href="test.html"
            target="_blank"
            rel="noopener noreferrer"
            title="Làm bài test chẩn đoán năng lực C++ & DSA (50 câu) trên trang web riêng"
          >
            <CheckSquare size={14} />
            <span>Test Chẩn đoán (50 câu)</span>
          </a>
          <button
            className={`capstone-header-btn ${capstoneOpen ? 'active' : ''}`}
            aria-label="Xem 5 Đồ án Capstone"
            onClick={() => setCapstoneOpen(v => !v)}
            title="5 Đồ án thực chiến Capstone"
          >
            <FolderGit2 size={15} />
            <span>5 Đồ án Capstone</span>
          </button>
          <button className="prompt-trigger" aria-label="Prompt" onClick={() => setPromptOpen(true)}>
            <MessageSquare size={15} />
            <span>Prompt</span>
          </button>
          <button aria-label="Xuất tiến độ" onClick={exportProgress} title="Tải tệp sao lưu v2">
            <Download size={15} />
            <span>Xuất tiến độ</span>
          </button>
          <button aria-label="Nhập tiến độ" onClick={() => importRef.current.click()}>
            <Upload size={15} />
            <span>Nhập tiến độ</span>
          </button>
          <input ref={importRef} type="file" accept=".json,application/json" onChange={importProgress} hidden />
          <button
            className={`panel-toggle-btn desktop-only-btn ${rightOpen ? 'active' : ''}`}
            onClick={toggleRightSidebar}
            aria-label={rightOpen ? 'Ẩn thanh chi tiết bên phải' : 'Hiện thanh chi tiết bên phải'}
            aria-pressed={rightOpen}
            title={rightOpen ? 'Ẩn thanh chi tiết bên phải (Ctrl+\\)' : 'Hiện thanh chi tiết bên phải (Ctrl+\\)'}
          >
            <PanelRight size={17} />
          </button>
        </div>
      </header>

      <div className={`workspace ${!leftOpen ? 'left-collapsed' : ''} ${!rightOpen ? 'right-collapsed' : ''}`}>
        <aside className="sidebar" aria-hidden={!leftOpen && !smallScreen}>
          <div className="sidebar-top">
            <div className="sidebar-top-row">
              <span className="eyebrow">ĐƯỜNG ĐI CỦA EM</span>
              <button
                className="icon-button desktop-panel-close"
                aria-label="Ẩn thanh mục lục bên trái"
                title="Ẩn thanh mục lục bên trái (Ctrl+B)"
                onClick={toggleLeftSidebar}
              >
                <PanelLeft size={16} />
              </button>
            </div>
            <h1>Từng bước, vững nền.</h1>
            <p>{edition.title}</p>
          </div>
          <div className="progress-box">
            <div>
              <span>Phần bắt buộc</span>
              <strong>{percent}%</strong>
            </div>
            <progress value={requiredDone} max={required.length} aria-label="Tiến độ phần bắt buộc" />
            <small>
              {requiredDone}/{required.length} bắt buộc · {optionalDone}/{tasks.length - required.length} nâng cao
            </small>
          </div>
          <label className="search-box">
            <Search size={15} />
            <input
              type="search"
              aria-label="Tìm nhiệm vụ"
              placeholder="Tìm nhiệm vụ, kỹ năng, mã môn…"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </label>
          <nav className="chapter-nav" aria-label="Mục lục lộ trình">
            {query ? (
              <>
                <p className="search-count">{results.length} nhiệm vụ tìm thấy</p>
                {results.map(t => {
                  const tTrack = tracks.find(tr => tr.id === t.trackId);
                  return (
                    <button className="search-result" key={t.id} onClick={() => openTask(t.id)}>
                      <span className="search-result-num">{t.number}</span>
                      <div className="search-result-content">
                        <strong>{t.title}</strong>
                        <small style={{ color: tTrack?.colorAccent }}>{tTrack?.shortTitle}</small>
                      </div>
                    </button>
                  );
                })}
                {!results.length && <p className="empty">Thử tên khác, ví dụ “con trỏ”, “dijkstra” hoặc “vtable”.</p>}
              </>
            ) : (
              chapters.map(c => {
                const group = tasks.filter(t => t.chapter === c.id);
                const count = group.filter(t => progress.statuses[t.id] === 'done').length;
                const cTrack = tracks.find(tr => tr.id === chapterToTrackId[c.id]);
                return (
                  <button
                    className={`chapter-link ${c.id === current.chapter ? 'selected' : ''}`}
                    key={c.id}
                    onClick={() => openTask(group[0].id)}
                  >
                    <span className="chapter-number">{c.number}</span>
                    <span>
                      <strong>{c.title}</strong>
                      <small>
                        <span style={{ color: cTrack?.colorAccent }}>{cTrack?.shortTitle}</span> · {count}/{group.length}{' '}
                        hoàn thành
                      </small>
                    </span>
                    <ChevronRight size={15} />
                  </button>
                );
              })
            )}
          </nav>
          <div className="sidebar-bottom">
            <span className="local-dot" />
            <span>
              Lưu trên trình duyệt này (LocalStorage v2)
              <br />
              <small>Xuất tiến độ để sao lưu an toàn.</small>
            </span>
          </div>
        </aside>

        <main className="map-main">
          {/* Track Switcher Tab Bar */}
          <div className="track-switcher" role="tablist" aria-label="Chọn tiến trình (Track)">
            <button
              role="tab"
              aria-selected={activeTrackId === 'all'}
              className={`track-tab ${activeTrackId === 'all' ? 'active' : ''}`}
              onClick={() => handleSelectTrack('all')}
              title="Xem toàn cảnh tất cả 7 Tracks"
            >
              <Layers size={13} />
              <span className="track-tab-name">Tất cả</span>
              <span className="track-tab-badge">{tasks.length}</span>
            </button>
            {tracks.map(track => {
              const trackTasks = tasks.filter(t => t.trackId === track.id);
              const trackDone = trackTasks.filter(t => progress.statuses[t.id] === 'done').length;
              const isSelected = activeTrackId === track.id;
              return (
                <button
                  key={track.id}
                  role="tab"
                  aria-selected={isSelected}
                  className={`track-tab ${isSelected ? 'active' : ''}`}
                  style={{ '--track-accent': track.colorAccent }}
                  onClick={() => handleSelectTrack(track.id)}
                  title={`${track.title} — ${track.description}`}
                >
                  <span className="track-tab-pill" style={{ backgroundColor: track.colorAccent }}>
                    T{track.trackNumber}
                  </span>
                  <span className="track-tab-name">{track.tabLabel || track.shortTitle}</span>
                  <span className="track-tab-badge">
                    {trackDone}/{trackTasks.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Compact Consolidated Filter & Toolbar */}
          <div className="filter-bar">
            <div className="filter-group" role="group" aria-label="Lọc theo trạng thái">
              <span className="filter-label">Trạng thái:</span>
              <button
                className={`filter-pill ${filterStatus === 'all' ? 'active' : ''}`}
                onClick={() => setFilterStatus('all')}
              >
                Tất cả
              </button>
              {Object.entries(labels).map(([statusKey, statusLabel]) => {
                const StatusIcon = statusIcon[statusKey] || Circle;
                const count = tasks.filter(t => (progress.statuses[t.id] || 'todo') === statusKey).length;
                return (
                  <button
                    key={statusKey}
                    className={`filter-pill ${filterStatus === statusKey ? 'active' : ''} status-${statusKey}`}
                    onClick={() => setFilterStatus(statusKey)}
                  >
                    <StatusIcon size={12} />
                    <span>{statusLabel}</span>
                    <span className="filter-count">({count})</span>
                  </button>
                );
              })}
            </div>

            <span className="filter-divider" />

            <div className="filter-group" role="group" aria-label="Lọc theo loại">
              <span className="filter-label">Loại:</span>
              {['all', 'Học', 'Luyện', 'Áp dụng'].map(kindKey => (
                <button
                  key={kindKey}
                  className={`filter-pill ${filterKind === kindKey ? 'active' : ''}`}
                  onClick={() => setFilterKind(kindKey)}
                >
                  {kindKey === 'all' ? 'Tất cả' : kindKey}
                </button>
              ))}
            </div>

            <div className="filter-actions">
              <div className="inline-legend" aria-label="Chú giải">
                <span title="Nhiệm vụ bắt buộc">
                  <i className="legend-required" /> Bắt buộc
                </span>
                <span title="Nhiệm vụ nâng cao, có thể học sau">
                  <i className="legend-optional" /> Nâng cao
                </span>
              </div>
              <span className="visible-count-chip" title="Số nhiệm vụ đang hiển thị trên bản đồ">
                {visibleTasks.length}/{tasks.length} ô
              </span>
              {(filterStatus !== 'all' || filterKind !== 'all' || activeTrackId !== 'all') && (
                <button className="filter-reset-btn" onClick={resetFilters} title="Xóa toàn bộ bộ lọc">
                  <RotateCcw size={12} />
                  <span>Đặt lại</span>
                </button>
              )}
              <button className="help-inline-btn" onClick={() => setHelpOpen(v => !v)} aria-expanded={helpOpen}>
                Cách dùng
              </button>
              <button className="resume-button" onClick={() => openTask(nextTask(tasks, progress.statuses).id)}>
                Tiếp tục học
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="mobile-search">
            <label className="search-box">
              <Search size={16} />
              <input
                aria-label="Tìm nhiệm vụ trên điện thoại"
                placeholder="Tìm nhiệm vụ…"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </label>
            {query ? (
              <div className="mobile-results">
                {results.length ? (
                  results.map(t => (
                    <button
                      key={t.id}
                      onClick={() => {
                        openTask(t.id);
                        setQuery('');
                      }}
                    >
                      {t.number} · {t.title}
                    </button>
                  ))
                ) : (
                  <p>Không tìm thấy nhiệm vụ.</p>
                )}
              </div>
            ) : (
              <select
                aria-label="Chọn chặng"
                value={current.chapter}
                onChange={e => openTask(tasks.find(t => t.chapter === e.target.value).id)}
              >
                {chapters.map(c => (
                  <option value={c.id} key={c.id}>
                    {c.number} · {c.title}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="map-canvas">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onlyRenderVisibleElements
              onNodeClick={(_, node) => {
                if (node.type === 'task') {
                  openTask(node.id);
                }
              }}
              onInit={() => centerNode(selected, 0)}
              minZoom={0.25}
              maxZoom={1.4}
              nodesConnectable={false}
              nodesDraggable={false}
              elementsSelectable={false}
              edgesFocusable={false}
              zoomOnDoubleClick={false}
              panOnScroll
              deleteKeyCode={null}
              preventScrolling
            >
              <Background color="#d9ddd6" gap={24} size={1} />
            </ReactFlow>

            {helpOpen && (
              <div className="help-card">
                <button className="icon-button" aria-label="Đóng hướng dẫn" onClick={() => setHelpOpen(false)}>
                  <X size={16} />
                </button>
                <strong>Khám phá Lộ trình 7 Tracks & 5 Đồ án Capstone</strong>
                <p>
                  <b>1. Ẩn/hiện 2 thanh bên (Mới):</b> Bấm nút biểu tượng thanh bên ở góc trái/phải trên cùng (hoặc phím tắt <code>Ctrl+B</code> và <code>Ctrl+\</code>) để thu gọn mục lục trái hoặc chi tiết phải, mở rộng tối đa không gian bản đồ.
                </p>
                <p>
                  <b>2. Track Switcher & Bộ lọc:</b> Bấm vào từng tab Track (T0..T6) để tập trung một chủ đề hoặc chọn “Tất cả các Track” để xem đồ thị 7 làn.
                </p>
                <p>
                  <b>3. 5 Đồ án Capstone:</b> Bấm nút “5 Đồ án Capstone” ở thanh trên cùng để xem các dự án thực chiến chuẩn HCMUS và nhảy tới node tương ứng.
                </p>
                <small>{edition.scope}</small>
                <a href="./ROADMAP.md" target="_blank" rel="noreferrer">
                  Xem toàn bộ nội dung dạng văn bản Markdown ↗
                </a>
              </div>
            )}

            <div className="canvas-controls">
              <button aria-label="Thu nhỏ" onClick={() => flow.zoomOut()} title="Thu nhỏ">
                <Minus size={16} />
              </button>
              <button aria-label="Phóng to" onClick={() => flow.zoomIn()} title="Phóng to">
                <Plus size={16} />
              </button>
              <span />
              <button aria-label="Về nhiệm vụ đang chọn" onClick={() => centerNode(selected)} title="Về nhiệm vụ đang chọn">
                <Focus size={16} />
              </button>
              <button
                aria-label="Toàn cảnh"
                onClick={() => flow.fitView({ duration: 350, padding: 0.15 })}
                title="Xem toàn cảnh đồ thị"
              >
                <Layers size={16} />
              </button>
              <span className="desktop-only-sep" />
              <button
                className="desktop-only-btn"
                aria-label={leftOpen || rightOpen ? 'Mở rộng toàn màn hình bản đồ' : 'Khôi phục 2 thanh bên'}
                onClick={toggleFocusCanvas}
                title={leftOpen || rightOpen ? 'Ẩn cả 2 thanh bên để mở rộng bản đồ' : 'Hiện lại 2 thanh bên'}
              >
                {leftOpen || rightOpen ? <Maximize2 size={15} /> : <Minimize2 size={15} />}
              </button>
            </div>
            <div className="canvas-caption">Bấm vào ô để mở chi tiết · Cuộn để phóng to/thu nhỏ</div>
          </div>

          <footer className="map-footer">
            <span className="sample-pill">LỘ TRÌNH {edition.version}</span>
            <span>
              7 Tracks · {chapters.length} chặng · {tasks.length} nhiệm vụ · 5 Đồ án Capstone · Chuẩn HCMUS & Quốc tế
            </span>
          </footer>
        </main>

        <aside className="details desktop-details" aria-label="Chi tiết nhiệm vụ" aria-hidden={!rightOpen}>
          {!smallScreen && details}
        </aside>
      </div>

      {/* Mobile Details Modal Dialog */}
      <dialog
        ref={dialogRef}
        className="details mobile-details"
        aria-labelledby="mobile-task-title"
        onCancel={closeDetail}
        onClose={() => setDetailOpen(false)}
      >
        <div id="mobile-task-title" className="sr-only">
          Chi tiết nhiệm vụ {current.title}
        </div>
        {smallScreen && details}
      </dialog>

      {/* Capstone Mini-Projects Dialog */}
      <dialog
        ref={capstoneDialogRef}
        className="capstone-dialog"
        aria-labelledby="capstone-title"
        onCancel={() => setCapstoneOpen(false)}
        onClose={() => setCapstoneOpen(false)}
      >
        <div className="capstone-top">
          <div>
            <span className="eyebrow">HCMUS YEAR 2 · CAPSTONE MINI-PROJECTS</span>
            <h2 id="capstone-title">5 Đồ án Thực chiến Capstone</h2>
          </div>
          <button className="icon-button" aria-label="Đóng đồ án" onClick={() => setCapstoneOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <div className="capstone-body">
          <p className="capstone-intro">
            5 đồ án mini mã nguồn mở chuẩn kỹ nghệ, giải quyết trọn vẹn yêu cầu đồ án môn học HK1 Năm 2 (OOP, Mạng máy tính, DSA, Xác suất) và xây dựng portfolio xuất sắc để xét tuyển chuyên ngành Khoa học Máy tính cuối Năm 2.
          </p>
          <div className="capstone-grid">
            {capstoneProjects.map(proj => {
              const projTrack = tracks.find(t => t.id === proj.trackId);
              return (
                <article key={proj.id} className="capstone-card" style={{ '--project-accent': projTrack?.colorAccent }}>
                  <div className="capstone-card-header">
                    <span className="capstone-track-badge" style={{ backgroundColor: projTrack?.colorAccent }}>
                      Đồ án {proj.projectNumber} · {projTrack?.shortTitle}
                    </span>
                    <h3>{proj.title}</h3>
                  </div>
                  <p className="capstone-obj">
                    <strong>Mục tiêu:</strong> {proj.pedagogicalObjective}
                  </p>
                  <div className="capstone-section">
                    <h4>Phạm vi kỹ thuật:</h4>
                    <ul>
                      {proj.technicalScope.map((scope, sIdx) => (
                        <li key={sIdx}>{scope}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="capstone-section">
                    <h4>Tiêu chuẩn nghiệm thu:</h4>
                    <ul>
                      {proj.verificationCriteria.map((crit, cIdx) => (
                        <li key={cIdx}>{crit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="capstone-related">
                    <h4>Nhiệm vụ liên quan trong lộ trình (Bấm để nhảy tới ô):</h4>
                    <div className="capstone-task-pills">
                      {proj.relatedTaskIds.map(taskId => {
                        const taskObj = tasks.find(t => t.id === taskId);
                        if (!taskObj) return null;
                        const isDone = progress.statuses[taskId] === 'done';
                        return (
                          <button
                            key={taskId}
                            type="button"
                            className={`capstone-task-btn ${isDone ? 'done' : ''}`}
                            onClick={() => {
                              setCapstoneOpen(false);
                              openTask(taskId);
                            }}
                            title={`Xem nhiệm vụ: ${taskObj.title}`}
                          >
                            <span className="pill-num">{taskObj.number}</span>
                            <span className="pill-title">{taskObj.title}</span>
                            {isDone && <Check size={11} />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </dialog>

      <PromptDialog open={promptOpen} onClose={() => setPromptOpen(false)} task={current} tasks={tasks} />

      {(notice || storageError) && (
        <div className="notice" role="status">
          <span>{storageError || notice}</span>
          {!storageError && (
            <button className="icon-button" aria-label="Đóng thông báo" onClick={() => setNotice('')}>
              <X size={16} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactFlowProvider>
      <Roadmap />
    </ReactFlowProvider>
  </React.StrictMode>
);
