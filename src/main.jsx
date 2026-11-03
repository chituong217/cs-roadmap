import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactFlow, ReactFlowProvider, Background, Handle, Position, MarkerType, useReactFlow } from '@xyflow/react';
import { ArrowDown, ArrowLeft, ArrowRight, BookOpen, Check, ChevronRight, Circle, Download, ExternalLink, Focus, GitBranch, Minus, Plus, Search, Upload, X } from 'lucide-react';
import { chapters, tasks } from './curriculum';
import { emptyProgress, labels, nextTask, STORAGE_KEY, validateProgress } from './progress.mjs';
import '@xyflow/react/dist/style.css';
import './style.css';

const ids = tasks.map(t => t.id);
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').toLowerCase();
const statusIcon = { todo: Circle, learning: BookOpen, done: Check };
function TaskNode({ data }) {
  const Icon = statusIcon[data.status];
  return <>
    <Handle type="target" position={Position.Top} />
    <button className={`task-node nodrag ${data.active ? 'active' : ''} ${data.status}`} onClick={() => data.open(data.task.id)} aria-label={`${data.task.number} · ${data.task.title}`} aria-pressed={data.active}>
      <span className="node-meta"><span>{data.task.number} <span className="meta-divider">/</span> {data.chapter.number}</span><span className={`kind kind-${data.task.kind}`}>{data.task.kind}</span></span>
      <strong>{data.task.title}</strong>
      <span className="node-bottom"><span className="node-status"><Icon size={13}/>{labels[data.status]}</span><span className="open-node">Chi tiết <ArrowRight size={14}/></span></span>
    </button>
    <Handle type="source" position={Position.Bottom} />
  </>;
}
const nodeTypes = { task: TaskNode };
function loadProgress() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return { data: stored ? validateProgress(JSON.parse(stored), ids).data : emptyProgress(), error: '' };
  } catch { return { data: emptyProgress(), error: 'Chưa đọc được tiến độ đã lưu. Em có thể nhập lại bản sao lưu.' }; }
}
function Roadmap() {
  const [loaded] = useState(loadProgress);
  const [progress, setProgress] = useState(loaded.data);
  const [selected, setSelected] = useState(loaded.data.lastTask || tasks[0].id);
  const [detailOpen, setDetailOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState(loaded.error);
  const [storageError, setStorageError] = useState('');
  const [helpOpen, setHelpOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(() => window.matchMedia('(max-width: 999px)').matches);
  const importRef = useRef(null);
  const detailRef = useRef(null);
  const dialogRef = useRef(null);
  const lastFocus = useRef(null);
  const flow = useReactFlow();
  const current = tasks.find(t => t.id === selected) || tasks[0];
  const index = tasks.indexOf(current);
  const chapter = chapters.find(c => c.id === current.chapter);
  const done = tasks.filter(t => progress.statuses[t.id] === 'done').length;
  const percent = Math.round(done / tasks.length * 100);
  const results = tasks.filter(t => normalize(`${t.number} ${t.title} ${t.todos.join(' ')}`).includes(normalize(query)));

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); setStorageError(''); }
    catch { setStorageError('Trình duyệt chưa lưu được tiến độ. Hãy xuất bản sao lưu trước khi đóng trang.'); }
  }, [progress]);
  useEffect(() => { detailRef.current?.scrollTo({ top: 0 }); }, [selected]);
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
  const center = useCallback((id, duration = 350) => {
    const i = tasks.findIndex(t => t.id === id);
    const el = document.querySelector('.map-canvas');
    const width = el?.clientWidth || 600;
    const zoom = Math.min(1, (width - 48) / 366);
    flow.setViewport({ x: (width - 366 * zoom) / 2, y: 76 - i * 198 * zoom, zoom }, { duration });
  }, [flow]);
  useEffect(() => {
    const canvas = document.querySelector('.map-canvas');
    if (!canvas) return;
    const observer = new ResizeObserver(() => center(selected, 0));
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [center, selected]);
  const open = useCallback(id => {
    lastFocus.current = document.activeElement;
    setSelected(id); setDetailOpen(true); setHelpOpen(false);
    setProgress(p => ({ ...p, lastTask: id }));
    center(id);
  }, [center]);
  const closeDetail = () => { setDetailOpen(false); lastFocus.current?.focus?.(); };
  const nodes = useMemo(() => tasks.map((task, i) => ({ id: task.id, type: 'task', position: { x: 0, y: i * 198 }, draggable: false, selectable: false, focusable: false, data: { task, chapter: chapters.find(c => c.id === task.chapter), active: task.id === selected, status: progress.statuses[task.id] || 'todo', open } })), [selected, progress.statuses, open]);
  const edges = useMemo(() => tasks.slice(1).map((task, i) => ({ id: `edge-${tasks[i].id}`, source: tasks[i].id, target: task.id, type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, color: '#8c9b96', width: 15, height: 15 }, style: { stroke: '#8c9b96', strokeWidth: 1.6 }, selectable: false, focusable: false })), []);
  const setStatus = status => setProgress(p => ({ ...p, lastTask: selected, statuses: { ...p.statuses, [selected]: status } }));
  const exportProgress = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify({ ...progress, exportedAt: new Date().toISOString() }, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = `tien-do-khmt-${new Date().toISOString().slice(0, 10)}.json`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice('Đã tạo bản sao lưu. Giữ tệp này để khôi phục hoặc chuyển sang thiết bị khác.');
  };
  const importProgress = async event => {
    const file = event.target.files?.[0]; event.target.value = '';
    if (!file) return;
    try {
      if (file.size > 1024 * 1024) throw new Error('Tệp quá lớn. Chọn bản sao lưu JSON dưới 1 MB.');
      const { data, ignored } = validateProgress(JSON.parse(await file.text()), ids);
      setProgress(p => ({ ...p, statuses: { ...p.statuses, ...data.statuses }, lastTask: data.lastTask || p.lastTask }));
      if (data.lastTask) { setSelected(data.lastTask); center(data.lastTask); }
      setNotice(`Đã nhập tiến độ. Các nhiệm vụ không có trong tệp vẫn được giữ nguyên.${ignored ? ` Bỏ qua ${ignored} mục chưa có trong bản thử.` : ''}`);
    } catch (err) { setNotice(err instanceof SyntaxError ? 'Không đọc được JSON. Tiến độ hiện tại được giữ nguyên.' : err.message); }
  };
  const details = <>
    <div className="detail-top"><span>NHIỆM VỤ {current.number}</span><button className="icon-button mobile-close" aria-label="Đóng chi tiết" onClick={closeDetail}><X size={20}/></button><span className="desktop-detail-count">{index + 1} / {tasks.length}</span></div>
    <div className="detail-scroll" ref={detailRef}>
      <div className="detail-eyebrow"><span className={`kind kind-${current.kind}`}>{current.kind}</span><span>{chapter.title}</span></div>
      <h2>{current.title}</h2>
      <div className="status-select" role="group" aria-label="Trạng thái nhiệm vụ">{Object.entries(labels).map(([status, label]) => { const Icon = statusIcon[status]; return <button key={status} aria-pressed={(progress.statuses[selected] || 'todo') === status} className={(progress.statuses[selected] || 'todo') === status ? `chosen ${status}` : ''} onClick={() => setStatus(status)}><Icon size={14}/>{label}</button>; })}</div>
      <h3>Việc cần làm</h3>
      <ul className="todo-list">{current.todos.map(text => <li key={text}><span className="bullet-plus">+</span><span>{text}</span></li>)}</ul>
      {current.extra && <section className="extra"><h3>Thông tin thêm</h3><p>{current.extra}</p></section>}
      {current.sources?.length > 0 && <section className="sources"><h3>Nguồn tham khảo thêm</h3>{current.sources.map(([label, url]) => <a href={url} key={url} target="_blank" rel="noreferrer">{label}<ExternalLink size={14}/></a>)}</section>}
    </div>
    <div className="detail-footer"><button className="icon-button" aria-label="Nhiệm vụ trước" disabled={index === 0} onClick={() => open(tasks[index - 1].id)}><ArrowLeft size={18}/></button><button className="next-button" disabled={index === tasks.length - 1} onClick={() => open(tasks[index + 1].id)}>{index === tasks.length - 1 ? 'Hết bản thử' : 'Nhiệm vụ tiếp theo'}<ArrowRight size={17}/></button></div>
  </>;

  return <div className="app-shell">
    <header className="app-header"><a className="brand" href="#" onClick={e => { e.preventDefault(); open(tasks[0].id); }}><span className="brand-icon"><GitBranch size={21}/></span><span>Lộ trình <b>KHMT</b><small>DÀNH CHO CHÍ TƯỜNG</small></span></a><span className="prototype-tag">Bản thử · 01</span><div className="header-actions"><button aria-label="Xuất tiến độ" onClick={exportProgress} title="Tải tệp sao lưu"><Download size={16}/><span>Xuất tiến độ</span></button><button aria-label="Nhập tiến độ" onClick={() => importRef.current.click()}><Upload size={16}/><span>Nhập tiến độ</span></button><input ref={importRef} type="file" accept=".json,application/json" onChange={importProgress} hidden/></div></header>
    <div className="workspace">
      <aside className="sidebar"><div className="sidebar-top"><span className="eyebrow">ĐƯỜNG ĐI CỦA EM</span><h1>Từng bước,<br/>vững nền.</h1><p>C++ → OOP → project đầu tiên</p></div>
        <div className="progress-box"><div><span>Tiến độ bản thử</span><strong>{percent}%</strong></div><progress value={done} max={tasks.length} aria-label="Tiến độ bản thử"/><small>{done} / {tasks.length} nhiệm vụ hoàn thành</small></div>
        <label className="search-box"><Search size={16}/><input type="search" aria-label="Tìm nhiệm vụ" placeholder="Tìm nhiệm vụ…" value={query} onChange={e => setQuery(e.target.value)}/></label>
        <nav className="chapter-nav" aria-label="Mục lục lộ trình">{query ? <><p className="search-count">{results.length} nhiệm vụ tìm thấy</p>{results.map(t => <button className="search-result" key={t.id} onClick={() => open(t.id)}><span>{t.number}</span>{t.title}</button>)}{!results.length && <p className="empty">Thử tên khác, ví dụ “kế thừa” hoặc “tệp”.</p>}</> : chapters.map(c => { const group = tasks.filter(t => t.chapter === c.id); const count = group.filter(t => progress.statuses[t.id] === 'done').length; return <button className={`chapter-link ${c.id === current.chapter ? 'selected' : ''}`} key={c.id} onClick={() => open(group[0].id)}><span className="chapter-number">{c.number}</span><span><strong>{c.title}</strong><small>{count}/{group.length} hoàn thành</small></span><ChevronRight size={15}/></button>; })}</nav>
        <div className="sidebar-bottom"><span className="local-dot"/><span>Lưu trên trình duyệt này<br/><small>Xuất tiến độ để sao lưu.</small></span></div>
      </aside>
      <main className="map-main"><div className="map-heading"><div><span className="eyebrow">LỘ TRÌNH CÁ NHÂN</span><h2>Nền tảng trước. Đi xa sau.</h2></div><button className="resume-button" onClick={() => open(nextTask(tasks, progress.statuses).id)}>Tiếp tục học<ArrowRight size={15}/></button></div>
        <div className="map-subheading"><span><ArrowDown size={14}/> Học theo thứ tự từ trên xuống</span><button onClick={() => setHelpOpen(v => !v)} aria-expanded={helpOpen}>Cách dùng</button></div>
        <div className="mobile-search"><label className="search-box"><Search size={16}/><input aria-label="Tìm nhiệm vụ trên điện thoại" placeholder="Tìm nhiệm vụ…" value={query} onChange={e => setQuery(e.target.value)}/></label>{query ? <div className="mobile-results">{results.length ? results.map(t => <button key={t.id} onClick={() => { open(t.id); setQuery(''); }}>{t.number} · {t.title}</button>) : <p>Không tìm thấy nhiệm vụ.</p>}</div> : <select aria-label="Chọn chặng" value={current.chapter} onChange={e => open(tasks.find(t => t.chapter === e.target.value).id)}>{chapters.map(c => <option value={c.id} key={c.id}>{c.number} · {c.title}</option>)}</select>}</div>
        <div className="map-canvas"><ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} onInit={() => center(selected, 0)} minZoom={0.35} maxZoom={1.3} nodesConnectable={false} nodesDraggable={false} elementsSelectable={false} edgesFocusable={false} zoomOnDoubleClick={false} panOnScroll deleteKeyCode={null} preventScrolling><Background color="#d9ddd6" gap={22} size={1}/></ReactFlow>
          {helpOpen && <div className="help-card"><button className="icon-button" aria-label="Đóng hướng dẫn" onClick={() => setHelpOpen(false)}><X size={16}/></button><strong>Một nhiệm vụ mỗi bước.</strong><p>Bấm một ô để xem việc cần làm. Cuộn để đi dọc lộ trình, kéo để di chuyển, dùng +/− để phóng to hoặc thu nhỏ.</p><p>Đánh dấu tiến độ trong bảng chi tiết. Đường nối chỉ thứ tự học đề xuất.</p><small>32 nhiệm vụ là nội dung mẫu. Toán, DSA và các môn hệ thống sẽ được bổ sung ở bản đầy đủ.</small></div>}
          <div className="canvas-controls"><button aria-label="Thu nhỏ" onClick={() => flow.zoomOut()}><Minus size={17}/></button><button aria-label="Phóng to" onClick={() => flow.zoomIn()}><Plus size={17}/></button><span/><button aria-label="Về nhiệm vụ đang chọn" onClick={() => center(selected)}><Focus size={17}/></button></div><div className="canvas-caption">Bấm vào ô để mở nhiệm vụ</div>
        </div>
        <footer className="map-footer"><span className="sample-pill">NỘI DUNG MẪU</span><span>4 chặng · {tasks.length} nhiệm vụ · Chưa phải toàn bộ KHMT</span></footer>
      </main>
      <aside className="details desktop-details" aria-label="Chi tiết nhiệm vụ">{!smallScreen && details}</aside>
    </div>
    <dialog ref={dialogRef} className="details mobile-details" aria-labelledby="mobile-task-title" onCancel={closeDetail} onClose={() => setDetailOpen(false)}><div id="mobile-task-title" className="sr-only">Chi tiết nhiệm vụ {current.title}</div>{smallScreen && details}</dialog>
    {(notice || storageError) && <div className="notice" role="status"><span>{storageError || notice}</span>{!storageError && <button className="icon-button" aria-label="Đóng thông báo" onClick={() => setNotice('')}><X size={16}/></button>}</div>}
  </div>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><ReactFlowProvider><Roadmap/></ReactFlowProvider></React.StrictMode>);
