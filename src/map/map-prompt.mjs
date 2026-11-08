// Tạo prompt để dán vào một chat AI, nhờ AI dạy đúng node đang chọn trên bản đồ.
export const TEACHING_PLUGIN = '[@chituongedu](plugin://chituongedu@workspace-shared-with-me)';

export const LEARNER_NOTE =
  'Tôi là sinh viên năm 2 ngành Máy tính và CNTT, ĐH Khoa học Tự nhiên (HCMUS), hướng Khoa học máy tính. ' +
  'Năm 1 tôi đã học Nhập môn CNTT, Cơ sở lập trình (C++), Toán rời rạc, Vi tích phân 1–2, Đại số tuyến tính và Cấu trúc dữ liệu & Giải thuật (nhưng quên nhiều); ' +
  'học kỳ này tôi đang học OOP, Mạng máy tính, Toán tổ hợp và Xác suất thống kê. Git, Linux và hệ điều hành tôi chưa học. ' +
  'Đừng mặc định tôi mới hoàn toàn hoặc đã vững chỉ vì từng học môn đó. Tôi muốn hiểu bản chất và tự làm được.';

export function chatTitle(node) {
  return node.kind === 'project' ? node.title : `Node ${node.order}: ${node.title}`;
}

function priorityLine(node) {
  if (node.skip?.kind === 'fast') return `Ôn nhanh: ${node.skip.reason}`;
  if (node.skip?.kind === 'later') return `Có thể học sau: ${node.skip.reason}`;
  return node.level === 'core' ? 'Phần nền: nên nắm trước khi đi tiếp.' : 'Phần mở rộng: học sau khi vững phần nền.';
}

function buildProjectPrompt(node, byId) {
  const title = node.title;
  const uses = [...(node.needs || []), ...(node.uses || [])].map(id => byId.get(id)?.title).filter(Boolean);
  const sources = (node.sources || []).map(s => `- ${s.title}: ${s.url}`);
  const list = a => a.map(t => `- ${t}`).join('\n');
  return `${title}

Dùng ${TEACHING_PLUGIN} làm phương pháp dạy học cho cuộc trò chuyện này. Nếu công cụ này chưa được chọn hoặc không truy cập được, nói rõ, không tự nhận đã kích hoạt hay đọc nó.

Tên cuộc trò chuyện mong muốn: "${title}".

${LEARNER_NOTE}

Tôi muốn làm dự án sau và cần bạn đóng vai người hướng dẫn, không làm thay tôi.

Dự án: ${node.title} (${node.time}).

Mục tiêu:
${node.scope.join('\n\n')}

Sản phẩm cần có:
${list(node.build)}

Tiêu chí xong:
${list(node.done)}
${node.stretch ? `\nHướng mở rộng: ${node.stretch}\n` : ''}${uses.length ? `\nKiến thức dự án dùng (tôi có thể cần ôn một số):\n${list(uses)}\n` : ''}${sources.length ? `\nNguồn tham khảo miễn phí:\n${sources.join('\n')}\n` : ''}
Cách hướng dẫn:
1. Bắt đầu bằng việc hỏi tôi đang ở đâu: đã làm gì, dùng ngôn ngữ nào, còn thiếu kiến thức nào trong danh sách trên. Nếu thiếu, ôn ngắn rồi mới làm.
2. Cùng tôi chia dự án thành các mốc nhỏ, mỗi mốc có kết quả kiểm tra được. Mỗi lượt chỉ làm một mốc, không giao toàn bộ dự án một lúc.
3. Không viết thay phần cốt lõi. Khi tôi bí, gợi ý tăng dần: câu hỏi dẫn dắt, rồi hướng tiếp cận, rồi đoạn mã nhỏ minh họa. Nếu tôi xin lời giải đầy đủ thì cung cấp và ghi nhận phần đó là được hướng dẫn.
4. Khi tôi gửi mã hoặc kết quả, nhận xét thẳng: phần nào đúng, lỗi quan trọng nhất ở đâu, vì sao sai, cách kiểm chứng. Không nói đã chạy mã nếu bạn chỉ đọc.
5. Nhắc tôi viết kiểm thử và ghi lại quyết định thiết kế. Hỏi vì sao tôi chọn cách này trước khi góp ý.
6. Đối chiếu với từng mục trong "Tiêu chí xong"; chưa có bằng chứng thì chưa kết luận xong.
7. Chỉ dùng nguồn miễn phí hợp pháp, không bịa nguồn hay kết quả. Nếu chưa chắc, nói rõ và đề xuất cách kiểm chứng.
8. Cuối buổi, tóm tắt mốc đã xong, lỗi còn mắc và việc tiếp theo để tôi dán sang chat sau.

Bắt đầu bằng câu hỏi ở bước 1.`;
}

export function buildMapPrompt(node, byId = new Map()) {
  if (node.kind === 'project') return buildProjectPrompt(node, byId);
  const title = chatTitle(node);
  const needs = (node.needs || []).map(id => byId.get(id)?.title).filter(Boolean);
  const needsText = node.needsText || [];
  const sources = (node.sources || []).map(s => `- ${s.title}: ${s.url}${s.locator ? `\n  Phần cần đọc: ${s.locator}` : ''}`);
  const topics = (node.topics || []).map(t => `- ${t.title}`);
  return `${title}

Dùng ${TEACHING_PLUGIN} làm phương pháp dạy học cho cuộc trò chuyện này. Nếu công cụ này chưa được chọn hoặc không truy cập được, nói rõ, không tự nhận đã kích hoạt hay đọc nó.

Tên cuộc trò chuyện mong muốn: "${title}". Nếu có công cụ đổi tên chat hiện tại, hãy dùng; nếu không, dùng đúng tên này làm tiêu đề đầu tiên và nói ngắn rằng tôi có thể đổi tên thủ công.

${LEARNER_NOTE}

Node đang học:
- Tên node: ${node.title}
- Môn / chặng: ${node.courseTitle} · ${node.stage}
- Mức ưu tiên: ${priorityLine(node)}
${needs.length || needsText.length ? `\nKiến thức đầu vào:\n${[...needs.map(t => `- Node: ${t}`), ...needsText.map(t => `- ${t}`)].join('\n')}\n` : ''}
Nội dung cần nắm:
${node.scope.join('\n\n')}
${topics.length ? `\nCác mục giáo trình thuộc node này:\n${topics.join('\n')}\n` : ''}${sources.length ? `\nNguồn tham khảo miễn phí và phạm vi đọc:\n${sources.join('\n')}\n` : ''}
Cách dạy:
1. Bám đủ "Nội dung cần nắm" của node này; không dồn mọi thứ vào một lượt và không tự nhảy sang node khác.
2. Với phần tôi từng học, hỏi một kiểm tra ngắn rồi chờ tôi trả lời để quyết định cần ôn gì. Với phần mới, giải thích nền cần thiết trước, không bắt tôi đoán kiến thức chưa học.
3. Giảng tuần tự: vấn đề cần giải quyết → khái niệm → cơ chế và lý do → ví dụ → luyện tập. Giải nghĩa thuật ngữ, ký hiệu trước khi dùng; nêu điều kiện áp dụng, giới hạn và lỗi dễ nhầm.
4. Dùng hình, bảng hoặc ví dụ chạy tay khi giúp hiểu cấu trúc hay diễn biến, có nhãn rõ; không thêm để trang trí.
5. Cho tôi tự làm bài vừa sức. Khi tôi bí, gợi ý tăng dần; khi kiểm tra, dừng chờ câu trả lời, không để đáp án ngay bên dưới.
6. Chữa bài thẳng: phần nào đúng, lỗi đầu tiên quan trọng ở đâu, vì sao sai, cách sửa. Không nói đã chạy code nếu chỉ đọc.
7. Cuối node, kiểm tra bằng bài hoặc giải thích không gợi ý. Phân biệt đã được giảng, làm được có gợi ý và tự làm được; chưa kiểm tra thì chưa kết luận đã vững.
8. Chỉ dùng nguồn miễn phí hợp pháp, chỉ đọc phần liên quan; không bịa nguồn hay kết quả. Nếu chưa chắc, nói rõ và đề xuất cách kiểm chứng.
9. Khi cần tiếp nối ở chat khác, ghi ngắn: node, phần đã học, bài tự làm, lỗi còn mắc và việc tiếp theo.

Bắt đầu với node trên theo đúng cách này.`;
}

export function blankMapPrompt() {
  return buildMapPrompt({
    order: '[SỐ NODE]', title: '[TÊN NODE]', courseTitle: '[MÔN]', stage: '[CHẶNG]', level: 'core',
    needs: [], needsText: [], topics: [], sources: [],
    scope: ['[DÁN PHẦN "NỘI DUNG CẦN NẮM" CỦA NODE]'],
  });
}
