import { learnerProfile } from './curriculum/edition.js';
export const teachingPlugin = '[@chituongedu](plugin://chituongedu@workspace-shared-with-me)';

export function chatTitle(task) {
  const number = /^\d+$/.test(String(task.number)) ? Number(task.number) : task.number;
  return `Node ${number}: ${task.title}`;
}

export function buildLearningPrompt(task, allTasks = []) {
  const title = chatTitle(task);
  const sources = (task.sources || []).map(([label, url, scope, access]) =>
    `- ${label}: ${url}${scope ? `\n  Phần cần đọc: ${scope}` : ''}${access ? `\n  Truy cập: ${access}` : ''}`);
  const targets = (task.reviewTargets || []).map(id => allTasks.find(t => t.id === id)).filter(Boolean);
  const priority = typeof task.optional !== 'boolean' ? '[Bắt buộc / Nâng cao, có thể để học sau]' : task.level === 'bridge' ? 'Lối vào cho người mới; có thể đi nhanh sau kiểm tra nếu đã biết.' : task.optional ? 'Chuyên sâu, có thể để học sau trong vòng nền.' : 'Bắt buộc trong phần nền của roadmap.';
  return `${title}

Dùng ${teachingPlugin} làm phương pháp dạy học cho cuộc trò chuyện này. Nếu plugin chưa được chọn hoặc không truy cập được, nói rõ, không tự nhận đã kích hoạt hay đọc nó.

Tên cuộc trò chuyện mong muốn: "${title}". Nếu có công cụ đổi tên chat hiện tại, hãy dùng; nếu không có, dùng đúng tên này làm tiêu đề đầu tiên và nói ngắn rằng tôi có thể đổi tên thủ công. Không tự nhận đã đổi tên thanh bên chỉ vì đã viết tiêu đề trong câu trả lời.

Tôi là sinh viên năm 2 HCMUS. Điểm xuất phát cập nhật ${learnerProfile.updated}: ${learnerProfile.summary} ${learnerProfile.note} Đừng mặc định tôi mới hoàn toàn hoặc đã vững chỉ vì từng làm bài. Tôi muốn hiểu bản chất và tự làm được.

Ô đang học:
- Số node: ${task.number}
- Tên node: ${task.title}
- Loại: ${task.kind}
- Mức ưu tiên: ${priority}

${task.course ? `Môn: ${task.course.title}\nĐầu vào: ${task.course.prerequisites.join('; ')}\nMục tiêu môn: ${task.course.goal}\nBằng chứng chuyển tiếp: ${task.course.evidence}\n` : ''}
Việc cần làm:
${task.todos.map(t => `+ ${t}`).join('\n')}
${task.extra ? `\nThông tin thêm:\n${task.extra}\n` : ''}${task.optionalReason ? `\nKhi nào cần quay lại phần này:\n${task.optionalReason}\n` : ''}${targets.length ? `\nCác ô cần ôn tùy bài làm:\n${targets.map(t => `- ${chatTitle(t)}`).join('\n')}\n` : ''}${sources.length ? `\nNguồn tham khảo miễn phí và phạm vi đọc:\n${sources.join('\n')}\n` : ''}
Cách dạy:
1. Đọc đủ nhiệm vụ, lập một mạch học ngắn rồi triển khai phần hiện tại. Bám đủ nội dung ô; không dồn toàn bộ lý thuyết, bài tập và lời giải vào một lượt, không tự nhảy sang node khác.
2. Với phần tôi từng học, dùng một kiểm tra ngắn có giá trị rồi chờ tôi trả lời để quyết định cần ôn gì. Với phần mới, giải thích nền cần thiết trước, không bắt tôi đoán kiến thức chưa học và không mở một khảo sát dài.
3. Giảng tuần tự: vấn đề cần giải quyết → khái niệm → cơ chế và lý do → ví dụ → luyện tập. Giải nghĩa thuật ngữ, ký hiệu trước khi dùng; nêu điều kiện áp dụng, giới hạn và lỗi dễ nhầm.
4. Với thuật toán: giúp tôi tìm ý tưởng, chạy tay dữ liệu nhỏ, hiểu vì sao đúng, tính chi phí và kiểm tra ca biên. Với OOP/phần mềm: dùng tình huống và C++ vừa sức, giải thích lựa chọn thiết kế; không chỉ cho mã để chép.
5. Chủ động dùng hình/bảng/mô phỏng khi giúp hiểu cấu trúc hay diễn biến. Hình phải đúng, dễ đọc, có nhãn; giải thích tôi cần nhìn vào đâu. Không thêm để trang trí và không tự nhận đã chạy mô phỏng khi chưa làm được.
6. Cho tôi tự làm bài phù hợp. Khi tôi bí, gợi ý tăng dần; khi hỏi kiểm tra, dừng chờ câu trả lời, không để đáp án ngay bên dưới. Nếu tôi yêu cầu lời giải đầy đủ, hãy giải thích rõ và ghi nhận đó là bài được hướng dẫn.
7. Chữa bài thẳng: phần nào đúng, lỗi đầu tiên quan trọng ở đâu, vì sao sai, cách sửa và kiểm tra lại. Không mặc định code cũ đúng; không nói đã chạy code nếu chỉ đọc.
8. Khi tôi gửi bài 28tech phù hợp, cho tôi thử lại trước khi xem lời giải cũ, rồi làm một biến thể. Không bắt làm lại toàn bộ kho. Nếu chỉ có đường dẫn mà không đọc được tệp, yêu cầu tôi gửi đúng đề/code cần dùng, không giả vờ đã đọc.
9. Theo dõi những việc đã học và còn thiếu trong chat. Cuối ô, đối chiếu nhiệm vụ và kiểm tra bằng bài/giải thích không gợi ý. Phân biệt đã được giảng, làm được có gợi ý và tự làm được; chưa kiểm tra thì chưa kết luận đã vững. Không dùng số giờ hoặc số câu trả lời thay cho bằng chứng.
10. Chỉ dùng nguồn được đọc miễn phí hợp pháp; không yêu cầu mua sách, trial, chứng chỉ, chấm bài trả phí, API trả phí hay thuê GPU. Chỉ đọc chương/mục liên quan; không bịa nguồn, ràng buộc đề hoặc kết quả kiểm tra. Nếu chưa chắc, nói rõ và đề xuất cách kiểm chứng.
11. Khi kết thúc buổi, nếu cần tiếp nối ở chat khác, ghi ngắn: node, phần đã học, bài tự làm, lỗi còn mắc, mức gợi ý đã dùng và việc tiếp theo. Không tự nhận nhớ hoặc đồng bộ tiến độ giữa các chat.

Bắt đầu với node trên theo đúng cách này.`;
}

export function blankLearningPrompt() {
  return buildLearningPrompt({ number: '[SỐ NODE]', title: '[TÊN NODE]', kind: '[Học / Luyện / Áp dụng]', todos: ['[DÁN TOÀN BỘ PHẦN VIỆC CẦN LÀM CỦA NODE]'], extra: '[Dán thông tin thêm và nguồn tham khảo của node nếu có; xóa dòng này nếu không có.]' });
}
