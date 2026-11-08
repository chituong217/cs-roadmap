import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactFlow, ReactFlowProvider, Background, Handle, Position, MarkerType, useReactFlow } from '@xyflow/react';
import { ArrowRight, BookOpen, Check, Circle, Clock, Download, ExternalLink, Focus, GitBranch, Layers, Minus, Plus, Search, Upload, X } from 'lucide-react';
import { MAP_GROUPS, MAP_NODES, MAP_LEVELS } from './map-data.generated.mjs';
import {
  MAP_STATUS_LABELS, MAP_STORAGE_KEY, emptyMapProgress, loadMapProgress, saveMapProgress,
  exportMapProgress, validateMapProgress, nextNodeId,
} from './map-progress.mjs';
import '@xyflow/react/dist/style.css';
import '../style.css';
import './map.css';

const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').toLowerCase();
const icons = { unread: Circle, learning: BookOpen, completed: Check, revisit: Clock };
const byId = new Map(MAP_NODES.map(n => [n.id, n]));
const groupById = new Map(MAP_GROUPS.map(g => [g.id, g]));
const IDS = MAP_NODES.map(n => n.id);
const SKIP_LABEL = { fast: 'ĐÃ HỌC · ĐI NHANH', later: 'NÂNG CAO · HỌC SAU' };
// Truy cập localStorage có thể ném lỗi (chế độ riêng tư, khung sandbox); khi đó ứng dụng vẫn chạy, chỉ không lưu.
const store = (() => { try { return window.localStorage; } catch { return null; } })();
// Bố cục cố định: mỗi nhóm một cột, các node xếp theo thứ tự học; vị trí không đổi khi lọc để bản đồ ổn định.
const POS = new Map();
MAP_GROUPS.forEach((g, gi) => MAP_NODES.filter(n => n.groupId === g.id).forEach((n, i) => POS.set(n.id, { x: gi * 420, y: i * 190 })));
const COURSES = [...new Map(MAP_NODES.map(n => [n.courseId, { id: n.courseId, title: n.courseTitle, groupId: n.groupId }])).values()];

function MapNode({ data }) {
  const { node, group, status, active, open } = data;
  const Icon = icons[status];
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <button
        className={`task-node nodrag nopan ${node.skip ? 'optional' : ''} ${active ? 'active' : ''} ${status === 'completed' ? 'done' : status}`}
        style={{ '--track-accent': group.accent }}
        onClick={e => { e.stopPropagation(); open(node.id); }}
        aria-label={`${node.title} · ${group.title}`}
        aria-pressed={active}
      >
        <span className="node-meta">
          <span>{String(node.order).padStart(3, '0')}</span>
          <span className="node-track-tag" style={{ color: group.accent }}>{group.title}</span>
        </span>
        <span className="node-chapter">{node.skip ? `${SKIP_LABEL[node.skip.kind]} · ` : ''}{node.courseTitle}</span>
        <strong>{node.title}</strong>
        <span className="node-bottom">
          <span className="node-status"><Icon size={13} />{MAP_STATUS_LABELS[status]}</span>
          <span className="open-node">Chi tiết <ArrowRight size={14} /></span>
        </span>
      </button>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}
const nodeTypes = { map: MapNode };

function Details({ node, status, setStatus, openNode, onClose }) {
  const group = groupById.get(node.groupId);
  return (
    <>
      <div className="detail-top">
        <span>NODE {String(node.order).padStart(3, '0')} · {group.title.toUpperCase()}</span>
        <button className="icon-button mobile-close" aria-label="Đóng chi tiết" onClick={onClose}><X size={20} /></button>
      </div>
      <div className="detail-scroll" tabIndex={0} aria-label="Nội dung chi tiết node">
        <div className="detail-eyebrow">
          <span className="track-pill" style={{ backgroundColor: group.accent + '20', color: group.accent }}>{group.title}</span>
          <span>{node.courseTitle} · {node.stage}</span>
        </div>
        <h2>{node.title}</h2>
        {node.skip && (
          <div className="optional-note">
            <strong>{node.skip.kind === 'fast' ? 'Có thể đi nhanh' : 'Có thể học sau'}</strong>
            <p>{node.skip.reason}</p>
          </div>
        )}
        <div className="status-select" role="group" aria-label="Trạng thái node">
          {Object.entries(MAP_STATUS_LABELS).map(([key, label]) => {
            const Icon = icons[key];
            return (
              <button key={key} aria-pressed={status === key} className={status === key ? `chosen ${key === 'completed' ? 'done' : key}` : ''} onClick={() => setStatus(key)}>
                <Icon size={14} />{label}
              </button>
            );
          })}
        </div>
        <h3>Nội dung cần nắm</h3>
        <div className="scope">{node.scope.map((p, i) => <p key={i}>{p}</p>)}</div>
        <details className="fold">
          <summary>Kiến thức đầu vào</summary>
          <ul>
            {node.needs.map(id => (
              <li key={id}><button className="link-btn" onClick={() => openNode(id)}>{byId.get(id).title}</button></li>
            ))}
            {node.needsText.map(t => <li key={t}>{t}</li>)}
            {!node.needs.length && !node.needsText.length && <li>Không cần nền riêng.</li>}
          </ul>
        </details>
        <details className="fold">
          <summary>Mức độ</summary>
          <p>{MAP_LEVELS[node.level]}{node.level === 'core' ? ': thuộc phần nền, nên nắm trước khi đi tiếp.' : ': có thể học sau khi xong phần nền.'}</p>
        </details>
        <details className="fold">
          <summary>Nguồn tham khảo miễn phí</summary>
          {node.sources.map(s => (
            <div className="reading" key={s.sourceId}>
              <a href={s.url} target="_blank" rel="noreferrer">{s.title}<ExternalLink size={12} /></a>
              {s.locator && <small>{s.locator}</small>}
            </div>
          ))}
        </details>
        <details className="fold">
          <summary>Chủ đề giáo trình đã gộp ({node.topics.length})</summary>
          <ul>{node.topics.map(t => <li key={t.id}>{t.title}</li>)}</ul>
        </details>
      </div>
    </>
  );
}

function MapView() {
  const flow = useReactFlow();
  const [progress, setProgress] = useState(() =>
    store ? loadMapProgress(store, IDS) : { data: emptyMapProgress(), error: '' }
  );
  const [selected, setSelected] = useState(() => progress.data.lastNode || IDS[0]);
  const [groupFilter, setGroupFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [courseFilter, setCourseFilter] = useState('all');
  const [hideSkip, setHideSkip] = useState(false);
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState(progress.error);
  const importRef = useRef(null);
  const dialogRef = useRef(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const small = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 999px)').matches;
  const closeDetail = () => { if (dialogRef.current?.open) dialogRef.current.close(); setDialogOpen(false); };
  const data = progress.data;
  const statusOf = id => data.statuses[id] || 'unread';

  useEffect(() => { if (store) saveMapProgress(store, data); }, [data]);

  const update = fn => setProgress(p => ({ ...p, data: fn(p.data) }));
  const openNode = id => {
    setSelected(id);
    if (small() && dialogRef.current && !dialogRef.current.open) { setDialogOpen(true); setTimeout(() => dialogRef.current?.showModal(), 0); }
    update(d => ({ ...d, lastNode: id }));
    const n = flow.getNode(id);
    if (n) flow.setCenter(n.position.x + 183, n.position.y + 73, { zoom: 0.9, duration: 300 });
  };
  const setStatus = st => update(d => {
    const statuses = { ...d.statuses };
    if (st === 'unread') delete statuses[selected]; else statuses[selected] = st;
    return { ...d, statuses };
  });

  const visibleIds = useMemo(() => new Set(MAP_NODES.filter(n =>
    (groupFilter === 'all' || n.groupId === groupFilter) &&
    (courseFilter === 'all' || n.courseId === courseFilter) &&
    !(hideSkip && n.skip) &&
    (statusFilter === 'all' || statusOf(n.id) === statusFilter) &&
    (!query || norm([n.title, n.stage, ...n.scope].join(' ')).includes(norm(query)))
  ).map(n => n.id)), [groupFilter, courseFilter, hideSkip, statusFilter, query, data]);

  const nodes = useMemo(() => MAP_NODES.filter(n => visibleIds.has(n.id)).map(n => ({
    id: n.id, type: 'map',
    position: POS.get(n.id),
    data: { node: n, group: groupById.get(n.groupId), status: statusOf(n.id), active: n.id === selected, open: openNode },
  })), [visibleIds, selected, data]);

  const edges = useMemo(() => MAP_NODES.flatMap(n => n.needs.filter(r => visibleIds.has(n.id) && visibleIds.has(r)).map(r => ({
    id: `${r}->${n.id}`, source: r, target: n.id, markerEnd: { type: MarkerType.ArrowClosed, color: '#9ca79b' },
    style: { stroke: '#9ca79b', strokeWidth: 1.6 },
  }))), [visibleIds]);

  const mainNodes = MAP_NODES.filter(n => !n.skip);
  const total = mainNodes.length;
  const done = mainNodes.filter(n => statusOf(n.id) === 'completed').length;
  const current = byId.get(selected);
  const cont = nextNodeId(MAP_NODES, data.statuses, data.lastNode);

  const doExport = () => {
    const url = URL.createObjectURL(new Blob([exportMapProgress(data)], { type: 'application/json' }));
    const a = document.createElement('a');
    a.href = url; a.download = `tien-do-ban-do-${new Date().toISOString().slice(0, 10)}.json`; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice('Đã tạo bản sao lưu tiến độ bản đồ.');
  };
  const doImport = async e => {
    const f = e.target.files?.[0]; e.target.value = '';
    if (!f) return;
    try {
      if (f.size > 1024 * 1024) throw new Error('Tệp quá lớn (giới hạn 1 MB).');
      const { data: d, ignored } = validateMapProgress(JSON.parse(await f.text()), IDS);
      update(cur => ({ ...cur, statuses: { ...cur.statuses, ...d.statuses }, lastNode: d.lastNode || cur.lastNode }));
      setNotice(`Đã nhập tiến độ.${ignored ? ` Bỏ qua ${ignored} mục không thuộc bản đồ này.` : ''}`);
    } catch (err) {
      setNotice(err instanceof SyntaxError ? 'Không đọc được JSON. Tiến độ hiện tại được giữ nguyên.' : err.message);
    }
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <a className="brand" href="#" onClick={e => { e.preventDefault(); openNode(IDS[0]); }}>
          <span className="brand-icon"><GitBranch size={20} /></span>
          <span>Lộ trình <b>KHMT</b><small>{MAP_NODES.length} NODE · BẢN NHÁP</small></span>
        </a>
        <div className="header-actions">
          <a className="header-link" href="./reader.html">Bản đọc dài</a>
          <button onClick={doExport}><Download size={15} /><span>Xuất tiến độ</span></button>
          <button onClick={() => importRef.current.click()}><Upload size={15} /><span>Nhập tiến độ</span></button>
          <input ref={importRef} type="file" accept=".json,application/json" onChange={doImport} hidden />
        </div>
      </header>
      <div className="workspace">
        <aside className="sidebar">
          <div className="sidebar-top">
            <span className="eyebrow">BẢN ĐỒ KIẾN THỨC</span>
            <h1>Từng chủ đề, vững nền.</h1>
          </div>
          <div className="progress-box">
            <div><span>Phần chính đã nắm</span><strong>{total ? Math.round((done / total) * 100) : 0}%</strong></div>
            <progress value={done} max={total} aria-label="Tiến độ" />
            <small>{done}/{total} node chính · {MAP_NODES.length - total} node vàng có thể bỏ qua</small>
          </div>
          <label className="search-box">
            <Search size={15} />
            <input type="search" aria-label="Tìm node" placeholder="Tìm node, khái niệm…" value={query} onChange={e => setQuery(e.target.value)} />
          </label>
          <nav className="chapter-nav" aria-label="Danh sách node">
            <p className="search-count">{visibleIds.size} node</p>
            {MAP_NODES.filter(n => visibleIds.has(n.id)).map((n, i, arr) => (
              <React.Fragment key={n.id}>
              {(i === 0 || arr[i - 1].courseId !== n.courseId) && <p className="course-heading">{n.courseTitle}</p>}
              <button className={`chapter-link ${n.id === selected ? 'selected' : ''}`} onClick={() => openNode(n.id)}>
                <span className="chapter-number">{String(n.order).padStart(3, '0')}</span>
                <span><strong>{n.title}</strong><small>{MAP_STATUS_LABELS[statusOf(n.id)]}</small></span>
              </button>
              </React.Fragment>
            ))}
            {!visibleIds.size && <p className="empty">Không có node phù hợp. Thử từ khóa khác, ví dụ “con trỏ”.</p>}
          </nav>
        </aside>
        <main className="map-main">
          <div className="track-switcher" role="tablist" aria-label="Nhóm kiến thức">
            <button role="tab" aria-selected={groupFilter === 'all'} className={`track-tab ${groupFilter === 'all' ? 'active' : ''}`} onClick={() => { setGroupFilter('all'); setCourseFilter('all'); }}>
              <Layers size={13} /><span className="track-tab-name">Tất cả</span><span className="track-tab-badge">{total}</span>
            </button>
            {MAP_GROUPS.map(g => {
              const list = MAP_NODES.filter(n => n.groupId === g.id && !n.skip);
              return (
                <button key={g.id} role="tab" aria-selected={groupFilter === g.id} className={`track-tab ${groupFilter === g.id ? 'active' : ''}`} style={{ '--track-accent': g.accent }} onClick={() => { setGroupFilter(g.id); setCourseFilter('all'); }}>
                  <span className="track-tab-name">{g.title}</span>
                  <span className="track-tab-badge">{list.filter(n => statusOf(n.id) === 'completed').length}/{list.length}</span>
                </button>
              );
            })}
          </div>
          <div className="filter-bar">
            <div className="filter-group" role="group" aria-label="Lọc theo trạng thái">
              <span className="filter-label">Trạng thái:</span>
              {['all', ...Object.keys(MAP_STATUS_LABELS)].map(k => (
                <button key={k} className={`filter-pill ${statusFilter === k ? 'active' : ''}`} aria-pressed={statusFilter === k} onClick={() => setStatusFilter(k)}>
                  {k === 'all' ? 'Tất cả' : MAP_STATUS_LABELS[k]}
                </button>
              ))}
            </div>
            <label className="filter-group">
              <span className="filter-label">Môn:</span>
              <select aria-label="Lọc theo môn" value={courseFilter} onChange={e => setCourseFilter(e.target.value)}>
                <option value="all">Tất cả môn</option>
                {COURSES.filter(c => groupFilter === 'all' || c.groupId === groupFilter).map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
              </select>
            </label>
            <label className="filter-group skip-toggle">
              <input type="checkbox" checked={hideSkip} onChange={e => setHideSkip(e.target.checked)} />
              <span className="legend-swatch" aria-hidden="true" />
              <span>Ẩn node vàng (đi nhanh / học sau)</span>
            </label>
            <div className="filter-actions">
              <button className="resume-button" onClick={() => openNode(cont)}>Tiếp tục học <ArrowRight size={13} /></button>
            </div>
          </div>
          <div className="map-canvas">
            <ReactFlow key={`${groupFilter}|${courseFilter}|${hideSkip}`} onlyRenderVisibleElements nodes={nodes} edges={edges} nodeTypes={nodeTypes} onNodeClick={(_, n) => openNode(n.id)} onInit={inst => { const n = inst.getNode(selected); if (n) inst.setCenter(n.position.x + 183, n.position.y + 73, { zoom: 0.8 }); else inst.fitView({ padding: 0.25, minZoom: 0.6, maxZoom: 1 }); }}
              minZoom={0.25} maxZoom={1.4} nodesConnectable={false} nodesDraggable={false} elementsSelectable={false}
              zoomOnDoubleClick={false} panOnScroll deleteKeyCode={null} preventScrolling>
              <Background color="#d9ddd6" gap={24} size={1} />
            </ReactFlow>
            <div className="canvas-controls">
              <button aria-label="Thu nhỏ" onClick={() => flow.zoomOut()}><Minus size={16} /></button>
              <button aria-label="Phóng to" onClick={() => flow.zoomIn()}><Plus size={16} /></button>
              <span />
              <button aria-label="Về node đang chọn" onClick={() => openNode(selected)}><Focus size={16} /></button>
              <button aria-label="Toàn cảnh" onClick={() => flow.fitView({ duration: 350, padding: 0.1 })}><Layers size={16} /></button>
            </div>
            <div className="canvas-caption">Bấm vào ô để mở chi tiết</div>
          </div>
        </main>
        <aside className="details desktop-details" aria-label="Chi tiết node">
          <Details node={current} status={statusOf(selected)} setStatus={setStatus} openNode={openNode} onClose={() => {}} />
        </aside>
      </div>
      <dialog ref={dialogRef} className="details mobile-details" aria-label="Chi tiết node" onCancel={closeDetail} onClose={() => setDialogOpen(false)}>
        {dialogOpen && <Details node={current} status={statusOf(selected)} setStatus={setStatus} openNode={openNode} onClose={closeDetail} />}
      </dialog>
      {notice && (
        <div className="notice" role="status">
          <span>{notice}</span>
          <button className="icon-button" aria-label="Đóng thông báo" onClick={() => setNotice('')}><X size={16} /></button>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <ReactFlowProvider><MapView /></ReactFlowProvider>
);
