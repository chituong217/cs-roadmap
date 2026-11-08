import React, { useEffect, useRef, useState } from 'react';
import { Copy, X } from 'lucide-react';
import { buildMapPrompt, blankMapPrompt, chatTitle } from './map-prompt.mjs';

export default function MapPrompt({ open, onClose, node, byId }) {
  const dialog = useRef(null);
  const text = useRef(null);
  const [blank, setBlank] = useState(false);
  const [message, setMessage] = useState('');
  const prompt = blank ? blankMapPrompt() : buildMapPrompt(node, byId);
  useEffect(() => {
    if (open && !dialog.current.open) { setBlank(false); setMessage(''); dialog.current.showModal(); }
    if (!open && dialog.current.open) dialog.current.close();
  }, [open]);
  useEffect(() => { setMessage(''); }, [blank, node.id]);
  async function copy(value, name) {
    try { await navigator.clipboard.writeText(value); setMessage(`Đã sao chép ${name}.`); }
    catch {
      if (name === 'prompt') { text.current.focus(); text.current.select(); }
      setMessage('Trình duyệt chưa cho sao chép. Nội dung đã được chọn sẵn, nhấn Ctrl+C để sao chép.');
    }
  }
  return (
    <dialog ref={dialog} className="prompt-dialog" aria-labelledby="prompt-title" onCancel={onClose} onClose={onClose}>
      <div className="prompt-top">
        <div><span className="eyebrow">HỌC CÙNG AI</span><h2 id="prompt-title">{node.kind === 'project' ? 'Prompt cho dự án này' : 'Prompt cho node này'}</h2></div>
        <button className="icon-button" aria-label="Đóng prompt" onClick={onClose}><X size={20} /></button>
      </div>
      <div className="prompt-body">
        <div className="prompt-mode" role="group" aria-label="Chọn loại prompt">
          <button aria-pressed={!blank} onClick={() => setBlank(false)}>Node đang chọn</button>
          <button aria-pressed={blank} onClick={() => setBlank(true)}>Mẫu để tự điền</button>
        </div>
        <p className="prompt-node-name">{blank ? 'Thay số, tên và nội dung node trong phần “Node đang học”.' : chatTitle(node)}</p>
        <p className="prompt-note">Dán vào một chat mới với AI bạn dùng (Claude, ChatGPT…). Prompt đã có sẵn nội dung cần nắm, kiến thức đầu vào, nguồn đọc và cách dạy.</p>
        <label className="sr-only" htmlFor="map-prompt-text">Nội dung prompt học tập</label>
        <textarea id="map-prompt-text" ref={text} value={prompt} readOnly spellCheck={false} />
        <p className="prompt-feedback" role="status">{message}</p>
      </div>
      <div className="prompt-actions">
        <button onClick={() => copy(blank ? 'Node [SỐ NODE]: [TÊN NODE]' : chatTitle(node), 'tên chat')}>Sao chép tên chat</button>
        <button className="prompt-copy" onClick={() => copy(prompt, 'prompt')}><Copy size={16} />Sao chép prompt</button>
      </div>
    </dialog>
  );
}
