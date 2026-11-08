import { DISCRETE_MATH_CHAPTERS_1_TO_5 } from './discrete-math-part1.mjs';
import { DISCRETE_MATH_CHAPTERS_6_TO_8 } from './discrete-math-part2.mjs';
import { DISCRETE_MATH_CHAPTERS_9_TO_10 } from './discrete-math-recurrences-gf.mjs';

export const COURSE_DISCRETE_MATH = {
  id: 'discrete-math',
  code: 'CS-09',
  title: 'Toán rời rạc và lập luận cho CS',
  blockId: 'block-2',
  level: 'core',
  prerequisites: [
    {
      courseId: 'math-bridge',
      type: 'required',
      reason: 'Cần nắm vững biến số, phương trình đa thức, số phức cơ sở, hàm số, lũy thừa, logarit và ký hiệu tổng cơ bản trước khi bước vào chứng minh toán học, tổ hợp và hệ thức đệ quy.',
    },
    {
      courseId: 'computational-thinking',
      type: 'recommended',
      reason: 'Khái niệm trạng thái, bước chuyển trạng thái và điều kiện dừng giúp gắn kết trực tiếp logic và quy nạp với mô hình máy trạng thái.',
    },
    {
      courseId: 'single-variable-calculus',
      type: 'recommended',
      reason: 'Toàn bộ phần cốt lõi (Chương 1–7, 9–10 và các tiểu mục tổng đại số/ký hiệu tiệm cận của Chương 8) chỉ cần CS-02; riêng tiểu mục mở rộng về phương pháp kẹp tích phân và xấp xỉ Stirling ở Chương 8 cần khái niệm tích phân xác định của CS-11.',
    },
  ],
  overview: [
    'Môn học xây dựng nền tảng ngôn ngữ toán học chính xác và năng lực chứng minh chặt chẽ cho toàn bộ Khoa học Máy tính. Khác với giải tích nghiên cứu các đại lượng biến thiên liên tục, Toán rời rạc nghiên cứu các cấu trúc hữu hạn hoặc đếm được—nơi từng bước suy luận, từng trạng thái của chương trình và từng cấu hình dữ liệu đều được định nghĩa tường minh. Nội dung đi tuần tự từ tập hợp, hàm và quan hệ tương đương; logic mệnh đề, đại số Boolean và logic vị từ đa lượng từ; các phương pháp chứng minh trực tiếp, phản đảo, phản chứng, nguyên lý thứ tự tốt và quy nạp toán học; đến định nghĩa đệ quy, quy nạp cấu trúc, bất biến máy trạng thái, số học modulo và lý thuyết đồ thị, cây, DAG.',
    'Ở nửa sau của môn học, các công cụ định lượng cốt lõi dùng để đếm và phân tích thuật toán được trình bày có hệ thống: nguyên lý đếm bằng song ánh, bao hàm–loại trừ, chuồng bồ câu; biến đổi tổng hữu hạn, cận sơ cấp cho số điều hòa, định nghĩa lượng từ của ký hiệu tiệm cận ($O, \\Omega, \\Theta, o, \\omega$), cùng tiểu mục mở rộng dùng cận kẹp tích phân và công thức Stirling (khi có nền Giải tích CS-11). Đặc biệt, môn học dành hai chương hoàn chỉnh cho Hệ thức đệ quy (từ mô hình hóa bài toán và điều kiện đầu, khai triển lặp, hệ tuyến tính thuần nhất hệ số hằng, phương trình đặc trưng với nghiệm đơn phân biệt, nghiệm bội và nghiệm phức liên hợp, hệ không thuần nhất/nghiệm riêng, đến giới hạn áp dụng và cầu nối sang truy hồi chia để trị) và Hàm sinh (chuỗi lũy thừa hình thức, phép toán đại số, tích chập và giải hệ thức đệ quy bằng phân thức tối giản).',
  ],
  boundaries: [
    'Phần cốt lõi (core) của môn học chỉ yêu cầu Toán nền CS-02; riêng tiểu mục phương pháp kẹp tổng bằng tích phân và công thức Stirling ở Chương 8 được gắn nhãn mở rộng (extension) và khai báo rõ tiên quyết Giải tích một biến (CS-11).',
    'Phương trình đặc trưng chỉ áp dụng cho hệ thức đệ quy tuyến tính hệ số hằng bước lùi cố định; không áp dụng trực tiếp cho hệ thức phi tuyến hoặc truy hồi chia để trị dạng T(n) = aT(n/b) + f(n) (được giải bằng cây đệ quy, Định lý Thầy và Akra–Bazzi ở Môn CS-16).',
    'Chuỗi lũy thừa trong chương Hàm sinh được xử lý dưới góc độ chuỗi lũy thừa hình thức (formal power series); việc xét bán kính hội tụ giải tích thuộc phạm vi Môn CS-11 (Giải tích một biến).',
    'Lý thuyết xác suất rời rạc và liên tục được tách riêng thành Môn CS-13 (Xác suất) và Môn CS-14 (Thống kê suy luận) để bảo đảm độ sâu hoàn chỉnh thay vì ghép sơ lược vào cuối môn Toán rời rạc.',
  ],
  sources: [
    {
      sourceId: 'mit-6042j-2015',
      locator: 'Chapters 1–6, 8–9, 11, 13–15, 21 (Mathematics for Computer Science Textbook & OCW Readings)',
      relationship: 'primary',
    },
    {
      sourceId: 'dmoi-3e',
      locator: 'Chapter 2: Sequences (§2.1 Describing Sequences & §2.4 Solving Recurrence Relations)',
      relationship: 'primary',
    },
    {
      sourceId: 'erickson-algorithms',
      locator: 'Chapter 1: Recursion (§1.4–1.7 Divide-and-Conquer Recurrence Scope Boundary)',
      relationship: 'supplementary',
    },
  ],
  chapters: [
    ...DISCRETE_MATH_CHAPTERS_1_TO_5,
    ...DISCRETE_MATH_CHAPTERS_6_TO_8,
    ...DISCRETE_MATH_CHAPTERS_9_TO_10,
  ],
};
