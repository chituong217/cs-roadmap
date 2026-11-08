import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { AUTHORED_COURSES, SOURCE_MAP } from './syllabus/index.mjs';
import {
  SYLLABUS_STATUS_LABELS, loadSyllabusProgressV3Result, saveSyllabusProgressV3Result,
  validateSyllabusProgressV3, exportSyllabusProgressV3, importSyllabusProgressV3,
} from './syllabus-progress.mjs';
import './syllabus-reader.css';

const COURSE_MAP = new Map(AUTHORED_COURSES.map(course => [course.id, course]));
const DEFAULT_SELECTION = { courseId: AUTHORED_COURSES[0].id, chapterId: AUTHORED_COURSES[0].chapters[0].id, topicId: null };
const normalize = text => text.toLocaleLowerCase('vi').normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/đ/g, 'd');
const searchIndex = AUTHORED_COURSES.map(course => ({
  course, title: normalize(`${course.code} ${course.title}`),
  topics: course.chapters.flatMap(chapter => chapter.topics.map(topic => ({
    chapter, topic, text: normalize(`${chapter.title} ${topic.title} ${topic.paragraphs.join(' ')}`),
  }))),
}));
function resolveSelection(raw) {
  if (!raw?.courseId) return null;
  const course = COURSE_MAP.get(raw.courseId);
  if (!course) return null;
  const chapter = raw.chapterId ? course.chapters.find(item => item.id === raw.chapterId) : course.chapters[0];
  if (!chapter || (raw.topicId && !chapter.topics.some(item => item.id === raw.topicId))) return null;
  return { courseId: course.id, chapterId: chapter.id, topicId: raw.topicId || null };
}
function selectionFromHash() {
  const params = new URLSearchParams(window.location.hash.slice(1));
  return resolveSelection({ courseId: params.get('course'), chapterId: params.get('chapter'), topicId: params.get('topic') });
}
function selectionHash(selection) {
  const params = new URLSearchParams({ course: selection.courseId, chapter: selection.chapterId });
  if (selection.topicId) params.set('topic', selection.topicId);
  return `#${params}`;
}
function sameSelection(a, b) {
  return a?.courseId === b?.courseId && a?.chapterId === b?.chapterId && a?.topicId === b?.topicId;
}
function Prose({ text }) {
  return <Markdown skipHtml remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{text}</Markdown>;
}
function StatusControl({ label, value, onChange, id }) {
  return <div className="status-control"><label htmlFor={id}>{label}</label><select id={id} value={value || 'unread'} onChange={event => onChange(event.target.value)}>{Object.entries(SYLLABUS_STATUS_LABELS).map(([status, name]) => <option value={status} key={status}>{name}</option>)}</select></div>;
}
function Sources({ sources }) {
  return <details className="sources"><summary>Nguồn đối chiếu</summary>{sources.map((source, index) => {
    const entry = SOURCE_MAP.get(source.sourceId);
    return <p key={`${source.sourceId}-${index}`}><a href={entry?.url} target="_blank" rel="noreferrer">{entry?.title || source.sourceId}</a><br/><span>{source.locator}</span></p>;
  })}</details>;
}

export function Reader() {
  const [initial] = useState(() => loadSyllabusProgressV3Result());
  const [progress, setProgress] = useState(initial.progress);
  const progressRef = useRef(initial.progress);
  const [sessionOnly, setSessionOnly] = useState(!initial.ok || initial.source === 'no_storage');
  const [storageReason, setStorageReason] = useState(initial.error || (initial.source === 'no_storage' ? 'Trình duyệt chưa cung cấp kho lưu trữ.' : ''));
  const [selection, setSelection] = useState(() => selectionFromHash() || resolveSelection(initial.progress.lastVisited) || DEFAULT_SELECTION);
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState('');
  const [pendingImport, setPendingImport] = useState(null);
  const [importError, setImportError] = useState('');
  const importSequence = useRef(0);
  const fileInput = useRef(null);
  const dialog = useRef(null);
  const cancelButton = useRef(null);
  const pendingFocus = useRef(selection.topicId ? `topic-${selection.topicId}` : (window.location.hash ? 'chapter-heading' : null));
  const course = COURSE_MAP.get(selection.courseId);
  const chapter = course.chapters.find(item => item.id === selection.chapterId);
  const chapterIndex = course.chapters.indexOf(chapter);
  const completedTopics = chapter.topics.filter(topic => progress.topicStatuses[topic.id] === 'completed').length;

  const updateInMemory = useCallback(next => {
    progressRef.current = next;
    setProgress(next);
  }, []);
  const persist = useCallback((next, announce = false) => {
    if (sessionOnly) {
      updateInMemory({ ...next, updatedAt: new Date().toISOString() });
      if (announce) setNotice('Đã cập nhật trong phiên này. Xuất tiến độ để giữ một bản sao.');
      return;
    }
    const result = saveSyllabusProgressV3Result(next);
    if (result.ok) {
      updateInMemory(result.progress);
      if (announce) setNotice('Đã lưu tiến độ trên trình duyệt này.');
    } else {
      updateInMemory({ ...next, updatedAt: new Date().toISOString() });
      setSessionOnly(true);
      setStorageReason(result.error);
      setNotice('Chưa lưu được trên trình duyệt. Thay đổi vẫn còn trong phiên này; bạn có thể xuất ra tệp.');
    }
  }, [sessionOnly, updateInMemory]);
  const navigate = useCallback((raw, { history = true, focus = true } = {}) => {
    const target = resolveSelection(raw);
    if (!target) { setNotice('Liên kết môn, chương hoặc chủ đề không hợp lệ.'); return; }
    pendingFocus.current = focus ? (target.topicId ? `topic-${target.topicId}` : 'chapter-heading') : null;
    setSelection(target);
    if (history && window.location.hash !== selectionHash(target)) window.history.pushState(null, '', selectionHash(target));
    if (!sameSelection(progressRef.current.lastVisited, target)) persist({ ...progressRef.current, lastVisited: target });
    if (focus && sameSelection(selection, target)) {
      requestAnimationFrame(() => document.getElementById(pendingFocus.current)?.focus());
    }
  }, [persist, selection]);
  useEffect(() => {
    const onLocation = () => {
      const target = selectionFromHash();
      if (target) navigate(target, { history: false });
      else if (window.location.hash) setNotice('Liên kết không còn hợp lệ. Bạn vẫn có thể chọn môn từ danh sách.');
    };
    window.addEventListener('hashchange', onLocation);
    window.addEventListener('popstate', onLocation);
    return () => { window.removeEventListener('hashchange', onLocation); window.removeEventListener('popstate', onLocation); };
  }, [navigate]);
  useEffect(() => {
    if (!window.location.hash) window.history.replaceState(null, '', selectionHash(selection));
  }, []);
  useEffect(() => {
    const target = pendingFocus.current && document.getElementById(pendingFocus.current);
    if (target) { target.focus(); target.scrollIntoView({ block: 'start' }); pendingFocus.current = null; }
  }, [selection]);
  useEffect(() => {
    if (pendingImport && dialog.current && !dialog.current.open) {
      dialog.current.showModal();
      cancelButton.current?.focus();
    }
  }, [pendingImport]);

  const matches = useMemo(() => {
    const needle = normalize(query.trim());
    return searchIndex.map(item => ({ ...item, matchedTopics: needle ? item.topics.filter(topic => topic.text.includes(needle)) : [] }))
      .filter(item => !needle || item.title.includes(needle) || item.matchedTopics.length);
  }, [query]);
  function changeStatus(map, id, status) {
    persist({ ...progressRef.current, [map]: { ...progressRef.current[map], [id]: status } }, true);
  }
  function exportProgress() {
    try {
      const blob = new Blob([exportSyllabusProgressV3(progressRef.current)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `cs-syllabus-progress-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.append(anchor);
      anchor.click(); anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setNotice('Đã tạo tệp xuất tiến độ v3 từ trạng thái hiện tại.');
    } catch (error) { setNotice(`Không thể xuất tiến độ: ${error.message}`); }
  }
  async function readImport(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    const sequence = ++importSequence.current;
    setPendingImport(null); setImportError('');
    if (file.size > 5 * 1024 * 1024) { setNotice('Tệp quá lớn: giới hạn nhập tiến độ là 5 MB.'); return; }
    try {
      const raw = await file.text();
      if (sequence !== importSequence.current) return;
      const result = validateSyllabusProgressV3(raw);
      if (!result.valid) { setNotice(`Không nhập tệp: ${result.error}`); return; }
      setPendingImport({ raw, name: file.name, data: result.data, ignoredCount: result.ignoredCount });
    } catch (error) { if (sequence === importSequence.current) setNotice(`Không đọc được tệp: ${error.message}`); }
  }
  function cancelImport() {
    importSequence.current += 1;
    dialog.current?.close();
    setPendingImport(null); setImportError('');
    fileInput.current?.focus();
  }
  function confirmImport() {
    if (!pendingImport) return;
    const result = sessionOnly
      ? importSyllabusProgressV3(pendingImport.raw, progressRef.current, null)
      : importSyllabusProgressV3(pendingImport.raw, progressRef.current);
    if (!result.ok) { setImportError(result.error); return; }
    updateInMemory(result.progress);
    dialog.current?.close(); setPendingImport(null); setImportError('');
    const target = resolveSelection(result.progress.lastVisited);
    if (target) {
      pendingFocus.current = target.topicId ? `topic-${target.topicId}` : 'chapter-heading';
      setSelection(target); window.history.pushState(null, '', selectionHash(target));
    } else fileInput.current?.focus();
    setNotice(sessionOnly ? 'Đã nhập tiến độ vào phiên này; kho lưu trữ cũ được giữ nguyên. Hãy xuất bản sao trước khi đóng trang.' : 'Đã nhập và lưu tiến độ v3. Tiến độ lộ trình cũ được giữ nguyên.');
  }
  const levelLabel = level => level === 'specialization' ? 'CHUYÊN SÂU TỰ CHỌN' : level === 'extension' ? 'MỞ RỘNG' : 'NỀN TẢNG';
  return <>
    <a className="skip-link" href="#reading-content" onClick={event => { event.preventDefault(); document.getElementById('reading-content')?.focus(); }}>Đến nội dung đọc</a>
    <header className="reader-header"><a className="brand" href="./">CS / Học từ gốc</a><span>{AUTHORED_COURSES.length} môn · đọc theo nền tảng</span><a href="./legacy.html">Lộ trình nhiệm vụ cũ</a></header>
    <div className="progress-toolbar" aria-label="Lưu và chuyển tiến độ"><span>{sessionOnly ? 'Tiến độ chỉ trong phiên này' : 'Tiến độ lưu trên trình duyệt'}</span><button onClick={exportProgress}>Xuất tiến độ</button><label className="import-label">Nhập tiến độ<input ref={fileInput} type="file" accept=".json,application/json" onChange={readImport}/></label></div>
    {sessionOnly && <div className="storage-warning" role="status"><strong>Chế độ học trong phiên.</strong> {storageReason} Dữ liệu lưu trước đó được giữ nguyên. Thay đổi mới chỉ nằm trong trang đang mở; xuất tiến độ để giữ một bản sao.</div>}
    <p className="notice" role="status" aria-live="polite">{notice}</p>
    <div className="reader-layout"><aside className="course-sidebar"><label htmlFor="syllabus-search">Tìm môn, chương hoặc nội dung</label><input id="syllabus-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Ví dụ: debug, bộ nhớ, Git…"/><p className="search-count">{matches.length} môn phù hợp</p><nav aria-label="Danh sách môn học">{matches.map(item => <div className="course-nav-item" key={item.course.id}><button aria-current={item.course.id === course.id ? 'page' : undefined} onClick={() => navigate({ courseId: item.course.id })}>{item.course.code} · {item.course.title}<span className="nav-status">{SYLLABUS_STATUS_LABELS[progress.courseStatuses[item.course.id] || 'unread']}</span></button>{query.trim() && item.matchedTopics.slice(0, 4).map(({ chapter: matchedChapter, topic }) => <button className="topic-match" key={topic.id} onClick={() => navigate({ courseId: item.course.id, chapterId: matchedChapter.id, topicId: topic.id })}>{topic.title}</button>)}{query.trim() && item.matchedTopics.length > 4 && <p className="more-matches">Còn {item.matchedTopics.length - 4} chủ đề trong môn này</p>}</div>)}{!matches.length && <p>Không tìm thấy nội dung phù hợp. Thử từ khóa ngắn hơn.</p>}</nav></aside>
      <main id="reading-content" tabIndex={-1} className="reading-main"><p className="eyebrow">SYLLABUS / {course.code} / {levelLabel(course.level)}</p><h1>{course.title}</h1><StatusControl id={`status-course-${course.id}`} label="Trạng thái môn" value={progress.courseStatuses[course.id]} onChange={status => changeStatus('courseStatuses', course.id, status)}/><p className="progress-explanation">Bạn tự ghi trạng thái ở từng cấp. Đã học nội dung không phải chứng nhận đã thành thạo; trạng thái môn và chương không tự đánh dấu các chủ đề bên trong.</p>{course.overview.map((text, index) => <Prose key={index} text={text}/>)}
        <details className="course-boundaries"><summary>Điều kiện đầu vào và phạm vi</summary>{course.prerequisites.length ? course.prerequisites.map(pre => <div key={pre.courseId}><button className="text-link" onClick={() => navigate({ courseId: pre.courseId })}>{COURSE_MAP.get(pre.courseId)?.title || pre.courseId}</button><span> · {pre.type === 'required' ? 'Học trước' : pre.type === 'co_requisite' ? 'Có thể học song song' : 'Khuyến nghị'}</span><p>{pre.reason}</p></div>) : <p>Môn này bắt đầu từ kiến thức nhập môn.</p>}{course.boundaries.map((text, index) => <Prose key={index} text={text}/>)}</details>
        <div className="chapter-picker"><label htmlFor="syllabus-chapter">Chọn chương</label><select id="syllabus-chapter" value={chapter.id} onChange={event => navigate({ courseId: course.id, chapterId: event.target.value })}>{course.chapters.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}</select></div>
        <h2 id="chapter-heading" tabIndex={-1}>{chapter.title}</h2><StatusControl id={`status-chapter-${chapter.id}`} label="Trạng thái chương" value={progress.chapterStatuses[chapter.id]} onChange={status => changeStatus('chapterStatuses', chapter.id, status)}/><p className="chapter-progress">{completedTopics}/{chapter.topics.length} chủ đề được bạn ghi “Đã học nội dung”.</p>{chapter.overview.map((text, index) => <Prose key={index} text={text}/>)}
        <nav className="topic-toc" aria-label="Nội dung chương">{chapter.topics.map(topic => <button key={topic.id} onClick={() => navigate({ courseId: course.id, chapterId: chapter.id, topicId: topic.id })}>{topic.title}</button>)}</nav>
        {chapter.topics.map(topic => <section className="topic-section" key={topic.id}><p className="eyebrow">{levelLabel(topic.level)}</p><h3 id={`topic-${topic.id}`} tabIndex={-1}>{topic.title}</h3><StatusControl id={`status-topic-${topic.id}`} label="Trạng thái chủ đề" value={progress.topicStatuses[topic.id]} onChange={status => changeStatus('topicStatuses', topic.id, status)}/><button className="permalink" onClick={() => navigate({ courseId: course.id, chapterId: chapter.id, topicId: topic.id })}>Liên kết tới chủ đề</button>{topic.paragraphs.map((text, index) => <Prose key={index} text={text}/>)}<Sources sources={topic.sources}/></section>)}
        <nav className="chapter-pagination" aria-label="Đổi chương"><button disabled={chapterIndex === 0} onClick={() => navigate({ courseId: course.id, chapterId: course.chapters[chapterIndex - 1].id })}>← Chương trước</button><span>{chapterIndex + 1}/{course.chapters.length}</span><button disabled={chapterIndex === course.chapters.length - 1} onClick={() => navigate({ courseId: course.id, chapterId: course.chapters[chapterIndex + 1].id })}>Chương sau →</button></nav>
      </main>
    </div>
    {pendingImport && <dialog ref={dialog} aria-labelledby="import-title" onCancel={event => { event.preventDefault(); cancelImport(); }}><h2 id="import-title">Xem trước tiến độ nhập</h2><p>Tệp: <strong>{pendingImport.name}</strong></p><p>Có {Object.keys(pendingImport.data.courseStatuses).length} trạng thái môn, {Object.keys(pendingImport.data.chapterStatuses).length} trạng thái chương và {Object.keys(pendingImport.data.topicStatuses).length} trạng thái chủ đề.</p>{pendingImport.ignoredCount > 0 && <p>Sẽ bỏ qua {pendingImport.ignoredCount} mục có ID hoặc trạng thái không còn hợp lệ.</p>}<p>Nhập sẽ thay toàn bộ tiến độ syllabus v3 hiện tại{sessionOnly ? ' trong phiên này; kho lưu trữ không được ghi lại' : ' trên trình duyệt này'}. Tiến độ lộ trình nhiệm vụ cũ vẫn được giữ. Bạn có thể hủy và xuất bản hiện tại trước.</p>{importError && <p className="import-error" role="alert">{importError}</p>}<div className="dialog-actions"><button ref={cancelButton} onClick={cancelImport}>Hủy nhập</button><button className="primary-button" onClick={confirmImport}>{sessionOnly ? 'Nhập vào phiên này' : 'Xác nhận thay tiến độ v3'}</button></div></dialog>}
  </>;
}
const appRoot = import.meta.hot?.data.root ?? createRoot(document.getElementById('root'));
if (import.meta.hot) import.meta.hot.data.root = appRoot;
appRoot.render(<Reader/>);

