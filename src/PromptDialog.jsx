import React, { useEffect, useRef, useState } from 'react';
import { Copy, X } from 'lucide-react';
import { buildLearningPrompt, blankLearningPrompt, chatTitle } from './learning-prompt.mjs';

export default function PromptDialog({ open, onClose, task, tasks }) {
  const dialog = useRef(null);
  const text = useRef(null);
  const [blank, setBlank] = useState(false);
  const [message, setMessage] = useState('');
  const prompt = blank ? blankLearningPrompt() : buildLearningPrompt(task, tasks);
  useEffect(() => {
    if (open && !dialog.current.open) { setBlank(false); setMessage(''); dialog.current.showModal(); }
    if (!open && dialog.current.open) dialog.current.close();
  }, [open]);
  useEffect(() => { setMessage(''); }, [blank, task.id]);
  async function copy(value, name) {
    try { await navigator.clipboard.writeText(value); setMessage(`Đã sao chép ${name}.`); }
    catch {
      if (name === 'prompt') { text.current.focus(); text.current.select(); }
      setMessage('Trình duyệt chưa cho sao chép. Chọn nội dung rồi nhấn Ctrl+C hoặc dùng menu sao chép.');
    }
  }
  return <dialog ref={dialog} className="prompt-dialog" aria-labelledby="prompt-title" onCancel={onClose} onClose={onClose}>
    <div className="prompt-top"><div><span className="eyebrow">HỌC CÙNG CHATGPT</span><h2 id="prompt-title">Prompt cho từng node</h2></div><button className="icon-button" aria-label="Đóng prompt" onClick={onClose}><X size={20}/></button></div>
    <div className="prompt-body">
      <div className="prompt-mode" role="group" aria-label="Chọn loại prompt"><button aria-pressed={!blank} onClick={() => setBlank(false)}>Node đang chọn</button><button aria-pressed={blank} onClick={() => setBlank(true)}>Mẫu để tự điền</button></div>
      <p className="prompt-node-name">{blank ? 'Thay số, tên và mô tả node trong phần Ô đang học.' : chatTitle(task)}</p>
      <p className="prompt-note">Dán vào một chat mới và chọn <a href="plugin://chituongedu@workspace-shared-with-me">@chituongedu</a> nếu chưa hiện thành thẻ plugin. Chữ nhắc tên trong prompt không bảo đảm tự kích hoạt plugin.</p>
      <label className="sr-only" htmlFor="learning-prompt">Nội dung prompt học tập</label><textarea id="learning-prompt" ref={text} value={prompt} readOnly spellCheck={false}/>
      <p className="prompt-note">Prompt có yêu cầu tên chat theo mẫu “Node X: Tên node”. Nếu thanh bên chưa đúng, dùng menu đổi tên của chat; nút dưới sao chép sẵn tên để dán.</p>
      <a className="prompt-doc-link" href="https://learn.chatgpt.com/docs/projects" target="_blank" rel="noreferrer">Hướng dẫn quản lý và đổi tên chat ↗</a>
      <p className="prompt-feedback" role="status">{message}</p>
    </div>
    <div className="prompt-actions"><button onClick={() => copy(blank ? 'Node [SỐ NODE]: [TÊN NODE]' : chatTitle(task), 'tên chat')}>Sao chép tên chat</button><button className="prompt-copy" onClick={() => copy(prompt, 'prompt')}><Copy size={16}/>Sao chép prompt</button></div>
  </dialog>;
}
