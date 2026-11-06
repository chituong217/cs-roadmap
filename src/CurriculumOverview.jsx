import React, { useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { stages, learnerProfile } from './curriculum/edition.js';

export default function CurriculumOverview({ open, onClose, chapters, tasks, statuses, onChoose }) {
  const ref = useRef(null);
  const focus = useRef(null);
  useEffect(() => {
    if (open && !ref.current.open) { focus.current = document.activeElement; ref.current.showModal(); }
    if (!open && ref.current.open) { ref.current.close(); focus.current?.focus?.(); }
  }, [open]);
  return <dialog ref={ref} className="curriculum-dialog" aria-labelledby="curriculum-title" onCancel={onClose} onClose={onClose}>
    <div className="overview-header"><div><span className="eyebrow">CHƯƠNG TRÌNH 2.1</span><h2 id="curriculum-title">Biết mình học gì, vì sao.</h2></div><button className="icon-button" aria-label="Đóng chương trình" onClick={onClose}><X/></button></div>
    <div className="overview-scroll">
      <section className="learner-card"><h3>Điểm xuất phát của bạn</h3><p>{learnerProfile.summary}</p><small>{learnerProfile.note} · Cập nhật {learnerProfile.updated}</small><button onClick={() => { onChoose('debug-reproduce'); onClose(); }}>Bắt đầu học debug <ArrowRight size={16}/></button></section>
      <p className="overview-explanation">Một môn chính mỗi lúc, ôn phần thiếu và tiếp tục môn trường. Đường dọc là thứ tự đề xuất; điều kiện đầu vào dưới đây mới là nền cần dùng. Mở từng môn để xem mục tiêu và cách kiểm chứng.</p>
      {Object.entries(stages).map(([stage, label]) => <section className="stage-section" key={stage}><h3>{label}</h3>{chapters.filter(c => c.stage === stage).map(c => {
        const group = tasks.filter(t => t.chapter === c.id);
        const done = group.filter(t => statuses[t.id] === 'done').length;
        return <details className="course-card" key={c.id}><summary><span className="course-number">{c.number}</span><span><strong>{c.title}</strong><small>{c.baseline} · {done}/{group.length} ô hoàn thành</small></span></summary><div className="course-body"><p>{c.goal}</p><dl><dt>Đầu vào cần có</dt><dd>{c.prerequisites.join('; ') || 'Không yêu cầu biết lập trình.'}</dd><dt>Bằng chứng chuyển tiếp</dt><dd>{c.evidence}</dd></dl><button onClick={() => { onChoose(group[0].id); onClose(); }}>Mở môn này <ArrowRight size={15}/></button></div></details>;
      })}</section>)}
      <p className="overview-explanation">Nguồn chính và chương/mục đọc ở từng nhiệm vụ. Nhánh chuyên sâu có thể học sau; không cần hoàn thành mọi nhánh để xong nền chung. Dấu tích là tiến độ tự ghi, không phải chứng nhận năng lực.</p>
    </div>
  </dialog>;
}
