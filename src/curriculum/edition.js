import { newTasks } from './edition-content.js';

export const learnerProfile = {
  updated: '06/11/2026',
  summary: 'C++ cơ bản ổn; chưa biết debug. DSA đã học nhưng quên nhiều. OOP tới nạp chồng hàm; mạng tới chương 2. Git, Linux và OS chưa học.',
  note: 'Thông tin tự báo và lịch sử học, không tự đánh dấu nhiệm vụ hoàn thành. Toán năm 1 đã học; kiểm tra phần cần dùng trước khi ôn.',
};
// Các điều kiện là kỹ năng cần có, không khóa học theo trạng thái dấu tích.
const courses = [
  ['intro', 'Lối vào từ số 0', 'A', [], 'Viết và giải thích chương trình đầu tiên.', 'Một chương trình nhập/xử lý/xuất với hàm và dãy, tự sửa được yêu cầu nhỏ.', 'Có thể đi nhanh · C++ đã học'],
  ['cpp', 'Kiểm tra và củng cố C++', 'A', ['Biến, điều kiện, vòng lặp, hàm'], 'Xác định phần C++ còn dùng được và phần cần ôn.', 'Tự làm bài kiểm tra và biến thể, chỉ ôn mục chưa tự làm được.', 'Đã học · cần kiểm tra'],
  ['debug', 'Debug C++ từ đầu', 'A', ['Chạy được chương trình C++ nhỏ'], 'Tìm nguyên nhân bằng quan sát thay vì sửa thử.', 'Sửa ba lỗi độc lập và giữ test ngăn lỗi quay lại.', 'Chưa học · ưu tiên mở đầu'],
  ['git', 'Git và lịch sử thay đổi', 'A', ['Có tệp chương trình để thực hành'], 'Hiểu và quản lý thay đổi trong mã nguồn.', 'Tự tạo nhánh, merge, xử lý conflict và khôi phục thay đổi thử.', 'Chưa học'],
  ['tools', 'Linux, shell và công cụ', 'A', ['Tệp, thư mục và chạy chương trình'], 'Làm việc bằng shell với đầu vào/đầu ra và tiến trình.', 'Tự build/test và lọc log, giải thích mỗi lệnh và quyền đang dùng.', 'Chưa học Linux'],
  ['oop', 'Lập trình hướng đối tượng', 'A', ['Hàm, struct, tham chiếu và thời gian sống'], 'Thiết kế lớp và quản lý trách nhiệm/tài nguyên.', 'Sửa một yêu cầu mới, giải thích sao chép, chứa, kế thừa và đa hình.', 'Đang học · tới nạp chồng hàm'],
  ['project', 'Project thư viện C++', 'A', ['C++ cơ bản, lớp và Git căn bản'], 'Ghép lập trình, debug và test vào sản phẩm nhỏ.', 'Người khác chạy lại được, tự sửa một lỗi và một thay đổi yêu cầu.', 'Thực hành tích hợp'],
  ['discrete', 'Toán rời rạc và lập luận', 'A', ['Đại số phổ thông đủ dùng'], 'Chứng minh, đếm và mô tả cấu trúc rời rạc.', 'Tự viết chứng minh, phản ví dụ và bài đếm có giải thích.', 'Đã học · ôn theo bài làm'],
  ['structures', 'Phục hồi cấu trúc dữ liệu', 'A', ['Hàm, con trỏ, đệ quy; lập luận và chi phí cơ bản'], 'Chọn và duy trì cấu trúc dữ liệu đúng.', 'Tự cài phần cốt lõi và test biên; so với cách đơn giản trên dữ liệu nhỏ.', 'Đã học · quên nhiều'],
  ['architecture', 'Dữ liệu, CPU và bộ nhớ', 'B', ['C++ cơ bản; nhị phân được học trong môn'], 'Nối dữ liệu và mã với hoạt động máy tính.', 'Lần một hàm tới assembly và giải thích bố trí dữ liệu/cache.', 'Nền hệ thống'],
  ['system-programming', 'Lập trình hệ thống trên Linux', 'B', ['Shell, debug, con trỏ và bộ nhớ; C được bổ sung'], 'Dùng process, file descriptor và pipe có xử lý lỗi.', 'Shell nhỏ chạy được, không kẹt EOF hoặc bỏ sót lỗi API.', 'Học mới sau công cụ'],
  ['os', 'Hệ điều hành và đồng thời', 'B', ['Bộ nhớ, CPU cơ bản, process/I/O và cấu trúc dữ liệu cần dùng'], 'Hiểu cách OS quản lý tài nguyên và bảo vệ trạng thái.', 'Mô phỏng paging/lập lịch và kiểm thử race/deadlock trên chương trình nhỏ.', 'Chưa học'],
  ['network', 'Mạng máy tính và dịch vụ', 'B', ['Mô hình phân tầng; process/I/O cho bài socket'], 'Hiểu giao thức và chẩn đoán lỗi theo tầng.', 'Quan sát request/gói tin và kiểm dịch vụ khi ngắt kết nối.', 'Đang học · tới chương 2'],
  ['algorithms', 'Thiết kế thuật toán', 'C', ['Cấu trúc dữ liệu, đệ quy và chứng minh cơ bản'], 'Tự tìm lời giải bằng chia để trị, tham lam và DP.', 'Giải bài mới không gắn nhãn, nêu vì sao đúng và chi phí.', 'Đã học một phần · kiểm tra'],
  ['graphs', 'Đồ thị và thuật toán', 'C', ['Stack/queue/heap, biểu diễn đồ thị và chi phí'], 'Chọn thuật toán phù hợp điều kiện của đồ thị.', 'Tự chọn BFS/Dijkstra/Bellman–Ford/MST và dựng phản ví dụ cho cách chọn sai.', 'Ôn kết hợp toán tổ hợp'],
  ['advanced-algo', 'Thuật toán chuyên biệt', 'C', ['Nền DSA và đồ thị tương ứng'], 'Đào sâu truy vấn, chuỗi và thuật toán ngẫu nhiên.', 'Tự giải bài cần kỹ thuật đã chọn, đối chiếu brute force.', 'Đào sâu có lựa chọn'],
  ['math', 'Đại số tuyến tính cho CS', 'C', ['Hệ phương trình và phép toán đại số'], 'Nối vector, phép biến đổi và xấp xỉ với bài toán tính toán.', 'Tính và giải thích phép chiếu/vector riêng trên ví dụ nhỏ.', 'Đã học · kiểm tra và ứng dụng'],
  ['calculus', 'Giải tích và tối ưu cơ bản', 'C', ['Hàm số, mũ/log và đại số'], 'Hiểu biến thiên, tích lũy và gradient.', 'Tính/kiểm tra đạo hàm, gradient và giải thích một bước tối ưu.', 'VTP1–2 đã học'],
  ['statistics', 'Xác suất và thống kê', 'C', ['Đếm; đại số, giải tích theo phần sử dụng'], 'Mô hình hóa bất định và đánh giá bằng dữ liệu.', 'Chọn mô hình/ước lượng phù hợp, nêu giả định và giới hạn suy luận.', 'Đang học · chưa rõ tiến độ'],
  ['database', 'Mô hình dữ liệu và SQL', 'C', ['Tập hợp/quan hệ; lập trình cơ bản'], 'Thiết kế dữ liệu và thao tác SQL giữ bất biến.', 'Dựng DB từ đầu, thử hai phiên giao dịch và backup/restore.', 'Học mới'],
  ['database-internals', 'Bên trong hệ cơ sở dữ liệu', 'C', ['SQL, cây/hash, file I/O và đồng thời cơ bản'], 'Giải thích lưu trữ, query processing và recovery.', 'Mô phỏng page/buffer/transaction và so kết quả truy vấn.', 'Hiểu cơ chế dữ liệu'],
  ['python', 'Python và công cụ dữ liệu', 'C', ['Lập trình cơ bản bằng C++'], 'Học khác biệt ngôn ngữ và xử lý dữ liệu tái lập.', 'Tự xử lý tệp lỗi, test và tạo báo cáo có trục/đơn vị đúng.', 'Ngôn ngữ bổ sung có mục đích'],
  ['theory', 'Lý thuyết tính toán', 'C', ['Logic, tập hợp, quy nạp và thuật toán cơ bản'], 'Phân biệt mô hình, tính được và độ khó tính toán.', 'Dựng automata, theo quy dẫn và nêu đúng giới hạn P/NP.', 'Nền CS'],
  ['languages', 'Ngôn ngữ lập trình và interpreter', 'C', ['Đệ quy, cấu trúc dữ liệu và Python đủ dùng'], 'Hiểu môi trường, kiểu, cách đánh giá và thực thi ngôn ngữ.', 'Dự đoán scope/closure và tự kiểm interpreter bằng chương trình nhỏ.', 'Nền rồi project tự chọn'],
  ['software', 'Kỹ nghệ phần mềm', 'C', ['Có project để cải tiến; Git và debug'], 'Giữ phần mềm thay đổi được bằng thiết kế/test/review.', 'Một vòng yêu cầu → sửa → test → review có bằng chứng.', 'Thói quen dùng từ chặng A'],
  ['web', 'Web và API có dữ liệu', 'C', ['HTTP, SQL, Python và phân quyền cơ bản được dạy trong môn'], 'Ghép giao diện, API và dữ liệu thành luồng hoàn chỉnh.', 'Luồng chính và ca lỗi chạy được từ môi trường sạch.', 'Project ứng dụng'],
  ['security', 'Nền tảng bảo mật ứng dụng', 'C', ['Quyền, HTTP, SQL và ứng dụng thử của mình'], 'Xác định đe dọa và kiểm quyền/đầu vào đúng ranh giới.', 'Tái hiện và ngăn một lỗi bằng test trong môi trường thử.', 'Nền bảo mật'],
  ['graphics', 'Đồ họa máy tính', 'D', ['Vector, phép biến đổi, C++ và toán giao điểm được bổ sung'], 'Hiểu ảnh, camera, tia và ánh sáng bằng renderer nhỏ.', 'Xuất ảnh, test giao điểm và giải thích một artifact.', 'Nền + thực hành CPU'],
  ['hci', 'Tương tác người–máy', 'D', ['Có tác vụ/giao diện nhỏ để quan sát'], 'Thiết kế và đánh giá tương tác từ nhu cầu thực.', 'Người khác làm được tác vụ, có phản hồi và sửa accessibility.', 'Nền + thực hành'],
  ['ai', 'AI và học máy nền tảng', 'D', ['Đồ thị; đại số, gradient, xác suất; Python/NumPy cho ML'], 'Nối tìm kiếm, suy luận và học từ dữ liệu.', 'Chạy bài AI nhỏ và project ML có baseline/split/metric hợp lệ.', 'Nền AI rộng hơn ML'],
  ['parallel', 'Lập trình song song', 'D', ['Luồng/khóa, cache và đo thời gian'], 'Chia công việc đúng và kiểm chứng tăng tốc.', 'Kết quả khớp tuần tự, đo overhead và giải thích giới hạn tăng tốc.', 'Nền song song'],
  ['distributed', 'Hệ phân tán và thiết kế hệ thống', 'D', ['OS, mạng, dữ liệu và đồng thời'], 'Thiết kế dưới lỗi từng phần, retry và dữ liệu cũ.', 'Mô phỏng lỗi/retry và bảo vệ bất biến dịch vụ.', 'Nền phân tán'],
  ['special-platforms', 'Di động và ứng dụng offline', 'D', ['UI, dữ liệu, HTTP; học Kotlin/công cụ khi chọn project'], 'Nhận diện vòng đời và giới hạn ứng dụng di động.', 'Thiết kế luồng offline và thử app nhỏ nếu chọn nhánh.', 'Nhánh tự chọn'],
  ['embedded', 'Nhúng và thiết bị', 'D', ['State machine, buffer, bit; học Rust nếu dùng nguồn Rust'], 'Hiểu tín hiệu, thời gian và ngân sách tài nguyên.', 'Bộ ghi dữ liệu mô phỏng có kiểm quá tải; không buộc mua board.', 'Nhánh tự chọn'],
  ['systems-track', 'Chuyên sâu hệ điều hành', 'D', ['C, RISC-V, OS và process/I/O'], 'Đọc và thay đổi kernel nhỏ có kiểm soát.', 'Một thay đổi xv6 có baseline, diff và test.', 'Nhánh tự chọn'],
  ['data-track', 'Chuyên sâu hệ dữ liệu', 'D', ['DB internals, C++, debug, DSA và đồng thời'], 'Tự xây thành phần lưu trữ rồi xử lý cạnh tranh.', 'Đối chiếu engine nhỏ với mô hình tham chiếu và lịch lỗi.', 'Nhánh tự chọn'],
  ['compiler-track', 'Chuyên sâu ngôn ngữ và compiler', 'D', ['Interpreter, scope, kiểu, stack và bộ nhớ'], 'Nối resolver, bytecode, VM và quản lý bộ nhớ.', 'Interpreter và VM cho cùng kết quả trên test độc lập.', 'Nhánh tự chọn'],
  ['distributed-track', 'Chuyên sâu hệ phân tán', 'D', ['Nền phân tán, network và concurrent testing'], 'Theo thứ tự sự kiện, consensus và deduplication.', 'Trace lỗi tái hiện được và bất biến log/request được kiểm.', 'Nhánh tự chọn'],
  ['professional', 'Đạo đức và đọc nghiên cứu', 'D', ['Một project và mô hình dữ liệu cụ thể'], 'Lập luận về tác động, quyền riêng tư và bằng chứng.', 'Báo cáo giới hạn và nguồn, đọc paper để đặt câu hỏi kiểm chứng.', 'Dùng xuyên chương trình'],
  ['direction', 'Chọn hướng bằng trải nghiệm', 'E', ['Đã thử một số mảng và giữ sản phẩm/bài làm'], 'Chọn hướng từ công việc đã thử và nền cần bổ sung.', 'Một quyết định có bằng chứng và chương trình tiếp nối cụ thể.', 'Không cần học hết các nhánh'],
  ['capstone', 'Đồ án tổng hợp', 'E', ['Nền phù hợp đề tài; yêu cầu và test'], 'Xây sản phẩm có người dùng và thay đổi thực.', 'Người khác dựng/chạy/thử và mình xử lý phản hồi có bằng chứng.', 'Tổng hợp'],
  ['career', 'Thực tập và phát triển tiếp', 'E', ['Có sản phẩm và năng lực phù hợp vị trí'], 'Trình bày việc thật, phỏng vấn và tiếp tục học.', 'Giải thích/sửa mã của mình và đối chiếu yêu cầu công việc.', 'Có thể bắt đầu khi đủ nền phù hợp'],
];
export const stages = { A: 'A · Công cụ và phục hồi nền', B: 'B · Hiểu hệ thống', C: 'C · Nền chung CS', D: 'D · Độ rộng và chuyên sâu', E: 'E · Tổng hợp và bước tiếp' };
export function applyEdition(legacyTasks) {
  const mapped = legacyTasks.map(t => {
    let chapter = t.chapter;
    if (chapter === 'math') {
      if (t.id.startsWith('calculus-')) chapter = 'calculus';
      if (/^(prob-|stats-|math-synthesis)/.test(t.id)) chapter = 'statistics';
    }
    if (chapter === 'theory' && t.id.startsWith('pl-')) chapter = 'languages';
    if (chapter === 'hci-graphics') chapter = t.id.startsWith('gfx-') ? 'graphics' : 'hci';
    return { ...t, chapter };
  });
  const all = [...mapped, ...newTasks];
  // AI cổ điển học sau search, trước khối ML; tránh thành phần chèn cuối môn.
  const aiBasics = all.filter(t => ['ai-games', 'ai-csp', 'ai-uncertainty', 'ai-mdp'].includes(t.id));
  for (const t of aiBasics) all.splice(all.indexOf(t), 1);
  all.splice(all.findIndex(t => t.id === 'ai-astar') + 1, 0, ...aiBasics);
  const chapters = courses.map(([id, title, stage, prerequisites, goal, evidence, baseline], i) => ({ id, title, stage, prerequisites, goal, evidence, baseline, number: String(i + 1).padStart(2, '0') }));
  const tasks = chapters.flatMap(c => all.filter(t => t.chapter === c.id));
  // New conceptual foundations must precede the interpreter project.
  const interpreter = tasks.filter(t => ['pl-lexer', 'pl-parser', 'pl-interpreter'].includes(t.id));
  const filtered = tasks.filter(t => !interpreter.includes(t));
  const endLanguage = filtered.findLastIndex(t => t.chapter === 'languages') + 1;
  filtered.splice(endLanguage, 0, ...interpreter);
  if (filtered.length !== all.length) throw new Error('Có nhiệm vụ chưa được gán vào môn học.');
  return { chapters, tasks: filtered.map((t, i) => ({ ...t, course: chapters.find(c => c.id === t.chapter), number: String(i + 1).padStart(3, '0') })) };
}
