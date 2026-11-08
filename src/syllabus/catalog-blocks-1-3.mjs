export const BLOCKS_1_TO_3 = [
  {
    id: 'block-1',
    code: 'Khối I',
    title: 'Khối I — Bắt đầu từ số 0',
    description:
      'Xây dựng mặt bằng xuất phát cho người chưa từng học Khoa học Máy tính: từ mô hình tệp, thư mục, tiến trình và môi trường dòng lệnh, qua cầu nối toán học sơ cấp, tư duy tính toán, lập trình nhập môn, thiết kế chương trình và gỡ lỗi, đến quản lý phiên bản mã nguồn bằng Git.',
  },
  {
    id: 'block-2',
    code: 'Khối II',
    title: 'Khối II — Lập trình và toán nền CS',
    description:
      'Đào sâu mô hình bộ nhớ vật lý và quyền sở hữu tài nguyên trong C++, thiết kế hướng đối tượng, cùng hệ thống 6 trụ cột toán học nền tảng của Khoa học Máy tính: Toán rời rạc, Đại số tuyến tính, Giải tích một biến, Giải tích nhiều biến và tối ưu, Xác suất, và Thống kê suy luận.',
  },
  {
    id: 'block-3',
    code: 'Khối III',
    title: 'Khối III — Cấu trúc dữ liệu, thuật toán và lý thuyết',
    description:
      'Nghiên cứu cách tổ chức dữ liệu trong bộ nhớ, các mô hình thiết kế và phân tích độ phức tạp thuật toán, thuật toán trên đồ thị, các kỹ thuật thuật toán mở rộng, cùng nền tảng lý thuyết tính toán (automata, khả năng tính được, độ phức tạp P/NP) và ngữ nghĩa ngôn ngữ lập trình.',
  },
];

export const COURSES_BLOCKS_1_TO_3 = [
  {
    id: 'computing-environment',
    code: 'CS-01',
    title: 'Làm quen máy tính và môi trường học',
    blockId: 'block-1',
    level: 'core',
    overview: [
      'Môn học thiết lập mô hình trực quan nhưng chính xác về cách máy tính lưu trữ, định danh và thực thi thông tin trước khi người học viết dòng mã đầu tiên. Nội dung đi từ cấu trúc hệ thống tệp phân cấp, đường dẫn tuyệt đối và tương đối, phần mở rộng tệp và mã hóa văn bản (ASCII, UTF-8), đến sự phân biệt cốt lõi giữa bộ nhớ khả biến (RAM) và thiết bị lưu trữ bền vững. Phần tiếp theo giải thích vai trò của hệ điều hành, tiến trình ứng dụng, giao diện dòng lệnh (terminal/shell), biến môi trường và quy trình cài đặt trình biên dịch cùng trình soạn thảo mã nguồn.',
    ],
    prerequisites: [],
    plannedChapters: [
      { id: 'ce-files-paths', title: 'Hệ thống tệp, thư mục, đường dẫn và mã hóa văn bản', summary: 'Cây thư mục, đường dẫn tuyệt đối/tương đối, byte vs code point vs ký tự UTF-8 hiển thị, phân biệt phần mở rộng tệp với định dạng nội dung.', primaryLocator: 'MIT Missing Semester (2020) Lecture 1: Course Overview + The Shell (/2020/course-overview/)' },
      { id: 'ce-storage-memory-os', title: 'Bộ nhớ, lưu trữ bền vững và vai trò của hệ điều hành', summary: 'Sự khác biệt giữa tệp trên đĩa và dữ liệu trong RAM khi chương trình chạy; khái niệm tiến trình và quyền truy cập cơ bản.', primaryLocator: 'MIT Missing Semester (2020) Lecture 5: Command-line Environment (/2020/command-line/) & Dive Into Systems Ch. 3 (§3.3), Ch. 11–13' },
      { id: 'ce-terminal-toolchain', title: 'Giao diện dòng lệnh, trình soạn thảo và chuỗi công cụ biên dịch', summary: 'Mô hình nhập/xuất của shell, tham số dòng lệnh, đường dẫn tìm kiếm thực thi (PATH) và quy trình từ tệp mã nguồn sang tệp thực thi.', primaryLocator: 'LearnCpp Ch. 0 (§0.1–0.12) & MIT Missing Semester (2020) Lecture 1 (/2020/course-overview/) + Lecture 2 (/2020/shell-tools/)' },
      { id: 'ce-docs-navigation', title: 'Đọc tài liệu kỹ thuật và thông báo từ hệ thống', summary: 'Cấu trúc tài liệu tra cứu, đọc thông báo lỗi của hệ thống/trình biên dịch và thiết lập môi trường học tập tái lập.', primaryLocator: 'LearnCpp Ch. 0 (§0.9–0.12) & MIT Missing Semester (2020) Lecture 1 (/2020/course-overview/)' },
    ],
    boundaries: [
      'Không giả định người học đã biết sử dụng command line, trình biên dịch hay Git trước khi vào môn.',
      'Chưa đi vào lập trình kịch bản shell nâng cao (pipe phức tạp, awk/sed) hoặc cơ chế quản lý bảng trang của hệ điều hành (thuộc Môn 06, 24, 25).',
    ],
    sources: [
      { sourceId: 'mit-missing-semester', locator: '2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/), Lecture 2: Shell Tools and Scripting (/2020/shell-tools/), Lecture 5: Command-line Environment (/2020/command-line/)', relationship: 'primary' },
      { sourceId: 'learncpp', locator: 'Chapter 0: Introduction / Getting Started (§0.1–0.12)', relationship: 'supplementary' },
    ],
  },
  {
    id: 'math-bridge',
    code: 'CS-02',
    title: 'Toán nền cần dùng',
    blockId: 'block-1',
    level: 'core',
    overview: [
      'Môn học đóng vai trò cầu nối toán học từ các phép tính số học cơ bản tới ngôn ngữ đại số và hàm số cần thiết để đọc hiểu Khoa học Máy tính từ số 0. Nội dung trình bày có hệ thống từ số nguyên, phân số, số thực, thứ tự thực hiện phép toán, đến biến số, biểu thức đại số, phương trình và bất phương trình (bao gồm giới thiệu dạng đại số và dạng lượng giác của số phức khi phương trình bậc hai vô nghiệm thực). Trên nền đó, môn học xây dựng khái niệm hàm số, miền xác định, đồ thị, phép hợp hàm, hàm ngược, lũy thừa, căn thức, hàm mũ và logarit (đặc biệt logarit cơ số 2 trong phép chia đôi không gian), hệ tọa độ Descartes, lượng giác cơ sở và ký hiệu tổng/tích hữu hạn.',
    ],
    prerequisites: [],
    plannedChapters: [
      { id: 'mb-numbers-operations', title: 'Hệ thống số, phân số, tỷ lệ và thứ tự phép toán', summary: 'Số nguyên, số hữu tỉ, số thực, giá trị tuyệt đối, quy tắc dấu và điều kiện xác định của phép chia.', primaryLocator: 'OpenStax Prealgebra 2e Ch. 1–4' },
      { id: 'mb-variables-equations', title: 'Biến số, biểu thức đại số, phương trình, bất đẳng thức và số phức cơ sở', summary: 'Biến như đại lượng tổng quát, biến đổi tương đương phương trình bậc nhất/bậc hai, bất đẳng thức cơ bản và biểu diễn số phức a + bi (liên hợp, mô-đun) khi biệt thức âm.', primaryLocator: 'OpenStax Prealgebra 2e Ch. 8–9 & Precalculus 2e Ch. 3 (§3.1 Complex Numbers, §3.2 Quadratic Functions)' },
      { id: 'mb-exponents-logarithms', title: 'Lũy thừa, căn thức, hàm mũ và logarit', summary: 'Quy tắc số mũ, định nghĩa logarit như phép toán ngược của lũy thừa, đổi cơ số và ý nghĩa của log_2(n) khi chia đôi liên tiếp.', primaryLocator: 'OpenStax Precalculus 2e Ch. 4 (§4.1–4.5)' },
      { id: 'mb-functions-graphs', title: 'Hàm số, miền xác định, đồ thị, hợp hàm và hàm ngược', summary: 'Ánh xạ đầu vào–đầu ra, miền xác định, tập giá trị, biểu diễn bằng bảng/công thức/đồ thị, phép hợp hàm và điều kiện khả nghịch.', primaryLocator: 'OpenStax Precalculus 2e Ch. 1 (§1.1–1.7)' },
      { id: 'mb-coordinates-trigonometry', title: 'Hệ tọa độ phẳng, lượng giác cơ sở và biểu diễn cực của số phức', summary: 'Khoảng cách Euclid, phương trình đường thẳng, đường tròn đơn vị, sin/cos/tan, mặt phẳng phức và dạng lượng giác r(cos theta + i sin theta).', primaryLocator: 'OpenStax Precalculus 2e Ch. 5–7 & §8.5 Polar Form of Complex Numbers' },
      { id: 'mb-sequences-summations', title: 'Dãy số, ký hiệu tổng Sigma, tích Pi và đọc lập luận toán học', summary: 'Chỉ số chạy, biên dưới/trên, tách ghép tổng hữu hạn và cách đọc định nghĩa/điều kiện trong văn bản toán.', primaryLocator: 'MIT 6.042J §13.1 & DMOI 3e §2.1' },
    ],
    boundaries: [
      'Cung cấp điểm kiểm tra đầu vào cho từng chương để người đã vững toán phổ thông đi nhanh, nhưng giữ đầy đủ nội dung cho người học lại từ đầu.',
      'Chưa sử dụng giới hạn vô cùng hay đạo hàm/tích phân của giải tích (thuộc Môn 11).',
    ],
    sources: [
      { sourceId: 'openstax-prealgebra-2e', locator: 'Chapters 1–4, 8–9 (Foundations of Numbers & Equations)', relationship: 'primary' },
      { sourceId: 'openstax-precalculus-2e', locator: 'Chapter 1 (§1.1–1.7), Chapter 3 (§3.1 Complex Numbers, §3.2 Quadratic Functions), Chapter 4 (§4.1–4.5), Chapter 8 (§8.5 Polar Form of Complex Numbers)', relationship: 'primary' },
    ],
  },
  {
    id: 'computational-thinking',
    code: 'CS-03',
    title: 'Nhập môn CS và tư duy tính toán',
    blockId: 'block-1',
    level: 'core',
    overview: [
      'Môn học giới thiệu bản chất của Khoa học Máy tính như ngành học về biểu diễn thông tin và quy trình giải quyết vấn đề một cách hữu hạn, xác định. Nội dung bắt đầu từ cách mã hóa dữ liệu thế giới thực thành các trạng thái rời rạc, xác định rõ đầu vào (input), đầu ra (output) và tiền điều kiện/hậu điều kiện của một bài toán. Tiếp theo, môn học làm rõ khái niệm thuật toán, trạng thái máy, bước chuyển trạng thái, tính dừng, phân rã bài toán lớn thành các bài toán con độc lập, và sự khác biệt giữa bài toán, thuật toán giải bài toán với một chương trình cụ thể viết bằng một ngôn ngữ lập trình.',
    ],
    prerequisites: [
      { courseId: 'computing-environment', type: 'co_requisite', reason: 'Cần mô hình tệp và môi trường thực thi cơ bản để đối chiếu biểu diễn dữ liệu với máy tính thật.' },
      { courseId: 'math-bridge', type: 'co_requisite', reason: 'Cần lũy thừa cơ số 2, logarit cơ số 2 và biến số cơ bản để theo dõi biểu diễn nhị phân và phép chia đôi không gian tìm kiếm.' },
    ],
    plannedChapters: [
      { id: 'ct-information-representation', title: 'Biểu diễn thông tin và mã hóa trạng thái rời rạc', summary: 'Mã hóa nhị phân cơ sở, biểu diễn số không âm, ký tự và trạng thái logic đúng/sai.', primaryLocator: 'Harvard CS50x Week 0' },
      { id: 'ct-problems-algorithms', title: 'Bài toán, đặc tả vào/ra và khái niệm thuật toán hữu hạn', summary: 'Phân biệt bài toán (problem specification), thực thể đầu vào (instance), thuật toán (algorithm) và chương trình (program).', primaryLocator: 'Harvard CS50x Week 0 & Erickson Ch. 0' },
      { id: 'ct-state-execution-trace', title: 'Trạng thái, bước chuyển và vết thực thi tuần tự – rẽ nhánh – lặp', summary: 'Mô hình hóa quá trình tính toán như chuỗi biến đổi trạng thái hữu hạn; lần vết (trace) từng bước và điều kiện dừng.', primaryLocator: 'Harvard CS50x Week 0–1' },
      { id: 'ct-abstraction-decomposition', title: 'Trừu tượng hóa, phân rã mô-đun và giới hạn của mô hình', summary: 'Tách giao diện (cái cần làm) khỏi cơ chế (cách thực hiện), đặt giả định rõ ràng và kiểm tra trường hợp biên.', primaryLocator: 'Composing Programs Ch. 1 (§1.1–1.4)' },
    ],
    boundaries: [
      'Không yêu cầu người học biết ký hiệu tiệm cận Big-O hay kiến trúc vi xử lý chi tiết trước khi học môn này.',
      'Chưa đi vào cú pháp chi tiết của một ngôn ngữ lập trình công nghiệp (thuộc Môn 04).',
    ],
    sources: [
      { sourceId: 'harvard-cs50x', locator: 'Week 0 (Scratch / Computational Thinking) & Week 1 Notes', relationship: 'primary' },
      { sourceId: 'composing-programs', locator: 'Chapter 1: §1.1 Getting Started, §1.2 Elements of Programming, §1.3 Defining New Functions, & §1.4 Designing Functions', relationship: 'supplementary' },
    ],
  },
  {
    id: 'intro-programming',
    code: 'CS-04',
    title: 'Lập trình nhập môn',
    blockId: 'block-1',
    level: 'core',
    overview: [
      'Môn học xây dựng năng lực biểu diễn thuật toán thành chương trình thực thi hoàn chỉnh thông qua một ngôn ngữ trục duy nhất là C++ hiện đại ở mức vừa sức người mới bắt đầu. Nội dung đi tuần tự từ cấu trúc chương trình, quá trình biên dịch–liên kết, biến, giá trị, hệ thống kiểu dữ liệu cơ sở và biểu thức, đến các cấu trúc điều khiển rẽ nhánh và vòng lặp gắn với bất biến cơ bản. Trên nền đó, môn học trình bày cơ chế hàm, truyền tham số theo giá trị và tham chiếu hằng, phạm vi danh định (scope), thời gian sống tự động, xử lý chuỗi ký tự (`std::string`), mảng động (`std::vector`), cùng luồng nhập/xuất và xử lý trạng thái lỗi dữ liệu.',
    ],
    prerequisites: [
      { courseId: 'computing-environment', type: 'required', reason: 'Cần biết thao tác tệp, đường dẫn, trình soạn thảo và gọi trình biên dịch từ terminal.' },
      { courseId: 'computational-thinking', type: 'co_requisite', reason: 'Cần mô hình trạng thái, phân rã bài toán và lần vết thực thi để không học cú pháp một cách máy móc.' },
      { courseId: 'math-bridge', type: 'co_requisite', reason: 'Cần nắm biến số, biểu thức đại số, phép chia nguyên/dư và hàm số cơ bản.' },
    ],
    plannedChapters: [
      { id: 'ip-execution-model', title: 'Chương trình đầu tiên, cấu trúc hàm main và mô hình nhập – xử lý – xuất', summary: 'Hành trình từ tệp mã nguồn .cpp qua trình biên dịch thành chương trình chạy được; cấu trúc hàm main, câu lệnh tuần tự, xuất/nhập cơ bản và phân biệt lỗi biên dịch với lỗi khi chạy.', primaryLocator: 'LearnCpp Ch. 0 (§0.4–0.5) & Ch. 1 (§1.1–1.11)' },
      { id: 'ip-types-expressions', title: 'Biến, kiểu dữ liệu cơ sở, biểu thức và phép toán', summary: 'Khởi tạo biến, kiểu số nguyên, kiểu số thực dấu chấm động, boolean, ký tự, hằng số, các toán tử số học/quan hệ/logic và quy tắc chuyển đổi kiểu an toàn.', primaryLocator: 'LearnCpp Ch. 4 (§4.1–4.12) & Ch. 6 (§6.1–6.8)' },
      { id: 'ip-control-flow', title: 'Cấu trúc điều khiển rẽ nhánh, vòng lặp và mô hình hóa bài toán nhỏ', summary: 'Câu lệnh điều kiện if/else, switch, đoản mạch logic, vòng lặp while/for, biến tích lũy, điều kiện dừng và bất biến vòng lặp sơ cấp.', primaryLocator: 'LearnCpp Ch. 8 (§8.1–8.11)' },
      { id: 'ip-functions-scope', title: 'Hàm, truyền tham số, phạm vi biến và ngăn xếp lời gọi cơ bản', summary: 'Phân rã bài toán thành hàm, tham số và giá trị trả về, truyền theo giá trị vs tham chiếu, phạm vi khối (block scope) và thời gian sống của biến cục bộ.', primaryLocator: 'LearnCpp Ch. 2 (§2.1–2.12), Ch. 7 (§7.1–7.5) & Ch. 12 (§12.3–12.6)' },
      { id: 'ip-sequences-strings', title: 'Mảng động std::vector, chuỗi std::string và kiểu bản ghi struct', summary: 'Lưu trữ và duyệt dãy phần tử với std::vector, đánh chỉ số 0-based và kiểm tra biên, thao tác văn bản với std::string, gom nhóm dữ liệu bằng struct (kèm phần mở rộng về std::string_view).', primaryLocator: 'LearnCpp Ch. 5 (§5.7–5.9), Ch. 13 (§13.7–13.10) & Ch. 16 (§16.1–16.8)' },
      { id: 'ip-io-error-handling', title: 'Luồng nhập/xuất tệp, xử lý đầu vào lỗi và chẩn đoán lỗi cơ bản', summary: 'Trạng thái luồng nhập/xuất, đọc/ghi tệp văn bản, kiểm tra dữ liệu đầu vào biên, đọc thông báo lỗi của trình biên dịch và lần vết trạng thái chương trình cơ bản.', primaryLocator: 'LearnCpp Ch. 3 (§3.1–3.5), Ch. 9 (§9.1–9.5) & Ch. 28 (§28.1–28.6)' },
    ],
    boundaries: [
      'Chỉ dùng một ngôn ngữ trục (C++) xuyên suốt môn để xây dựng mô hình thực thi vững chắc; không trộn Python, Java hay Rust ở giai đoạn nhập môn.',
      'Chưa đi vào cấp phát động thủ công (`new`/`delete`), số học con trỏ thô, kế thừa đa hình hay template nâng cao (thuộc Môn 07 và Môn 08).',
    ],
    sources: [
      { sourceId: 'learncpp', locator: 'Chapters 0, 1, 2, 4, 5, 6, 7, 8, 9, 12 (§12.3–12.6), 13 (§13.7), 16, 28', relationship: 'primary' },
      { sourceId: 'harvard-cs50x', locator: 'Weeks 1–2 (C/C++ Compilation, Types, Arrays, Memory Basics)', relationship: 'supplementary' },
    ],
  },
  {
    id: 'program-design-debugging',
    code: 'CS-05',
    title: 'Thiết kế chương trình và debug',
    blockId: 'block-1',
    level: 'core',
    overview: [
      'Môn học chuyển trọng tâm từ việc viết một đoạn mã chạy được sang việc thiết kế chương trình có cấu trúc rõ ràng, kiểm chứng được tính đúng đắn và chẩn đoán lỗi bằng phương pháp khoa học. Nội dung bao gồm thiết kế hợp đồng hàm (tiền điều kiện, hậu điều kiện, bất biến), phân rã chức năng, kiểm soát trạng thái và tác dụng phụ (side effects), xây dựng bộ ca kiểm thử bao phủ trường hợp biên, quy trình tái hiện lỗi tối thiểu, và sử dụng trình gỡ lỗi (debugger) để quan sát call stack, biến cục bộ và luồng điều khiển.',
    ],
    prerequisites: [
      { courseId: 'intro-programming', type: 'required', reason: 'Cần viết và đọc được chương trình có hàm, vòng lặp, mảng và chuỗi để thực hành thiết kế và gỡ lỗi.' },
    ],
    plannedChapters: [
      { id: 'pdd-contracts-decomposition', title: 'Hợp đồng hàm, tiền điều kiện, hậu điều kiện và phân rã mô-đun', summary: 'Đặc tả giao diện hàm, tách hàm thuần (pure computation) khỏi hàm có tác dụng phụ và sử dụng assertions.', primaryLocator: 'LearnCpp Ch. 9 (§9.1–9.6) & Composing Programs §1.2–1.4' },
      { id: 'pdd-scientific-debugging', title: 'Phương pháp chẩn đoán lỗi theo giả thuyết và tái hiện tối thiểu', summary: 'Phân biệt triệu chứng (symptom) với nguyên nhân gốc (root cause), thu hẹp đầu vào gây lỗi và kiểm chứng giả thuyết thay vì sửa mò.', primaryLocator: 'LearnCpp Ch. 3 (§3.1–3.5) & MIT Missing Semester (2020) Lecture 7: Debugging and Profiling (/2020/debugging-profiling/)' },
      { id: 'pdd-debugger-callstack', title: 'Trình gỡ lỗi, điểm dừng (breakpoints), lần bước và khung ngăn xếp', summary: 'Cơ chế stepping (step into/over/out), conditional breakpoints, watch expressions và đọc backtrace khi chương trình dừng bất thường.', primaryLocator: 'LearnCpp Ch. 3 (§3.6–3.10) & MIT Missing Semester (2020) Lecture 7 (/2020/debugging-profiling/)' },
      { id: 'pdd-testing-edge-cases', title: 'Thiết kế ca kiểm thử, phân vùng tương đương và kiểm thử hồi quy', summary: 'Xây dựng test cho miền thông thường, biên rỗng, một phần tử, cực trị, đầu vào dị thường và tự động hóa kiểm tra kết quả.', primaryLocator: 'LearnCpp Ch. 9 (§9.2–9.3) & SWE at Google Ch. 11–12' },
    ],
    boundaries: [
      'Tập trung vào lỗi logic, lỗi trạng thái và sử dụng debugger trên chương trình vừa sức; các công cụ AddressSanitizer/Valgrind gắn với lỗi con trỏ và cấp phát động được đặt ở Môn 07 sau khi học mô hình bộ nhớ.',
    ],
    sources: [
      { sourceId: 'learncpp', locator: 'Chapter 3 (Debugging C++ Programs) & Chapter 9 (Error Detection and Handling)', relationship: 'primary' },
      { sourceId: 'mit-missing-semester', locator: '2020 Edition — Lecture 7: Debugging and Profiling (/2020/debugging-profiling/)', relationship: 'supplementary' },
    ],
  },
  {
    id: 'git-dev-tools',
    code: 'CS-06',
    title: 'Git và công cụ phát triển',
    blockId: 'block-1',
    level: 'core',
    overview: [
      'Môn học trình bày cơ chế quản lý lịch sử mã nguồn và tự động hóa quy trình xây dựng phần mềm. Trọng tâm của phần Git là mô hình đồ thị có hướng không chu trình định địa chỉ theo nội dung (content-addressable DAG) gồm blob, tree, commit và tham chiếu nhánh, giúp người học hiểu bản chất của working tree, staging area, commit, diff, merge 3 chiều, giải quyết xung đột (conflict) và khôi phục trạng thái. Phần công cụ phát triển mở rộng sang dòng lệnh shell, đường ống dữ liệu (pipes), quản lý biên dịch nhiều tệp và môi trường tái lập.',
    ],
    prerequisites: [
      { courseId: 'computing-environment', type: 'required', reason: 'Cần nắm vững cây thư mục, đường dẫn và giao diện dòng lệnh.' },
      { courseId: 'intro-programming', type: 'required', reason: 'Cần có các tệp mã nguồn thực tế để quản lý phiên bản, biên dịch đa tệp và xử lý xung đột.' },
    ],
    plannedChapters: [
      { id: 'gdt-git-object-model', title: 'Mô hình đối tượng bất biến của Git và ba vùng làm việc', summary: 'Cấu trúc blob/tree/commit, mã băm SHA, trạng thái tệp giữa Working Tree, Staging Area (Index) và Repository (.git).', primaryLocator: 'Pro Git 2e Ch. 1–2 & Ch. 10 (§10.1–10.3)' },
      { id: 'gdt-branching-merging', title: 'Nhánh, hợp nhất (Merge), tái định gốc (Rebase) và giải quyết xung đột', summary: 'Nhánh như con trỏ nhẹ tới commit, fast-forward merge vs 3-way merge, cơ chế phát sinh conflict và nguyên tắc lịch sử sạch.', primaryLocator: 'Pro Git 2e Ch. 3 (§3.1–3.6)' },
      { id: 'gdt-history-recovery-remotes', title: 'Truy vết lịch sử, khôi phục trạng thái và đồng bộ kho từ xa', summary: 'Đọc git log/diff/blame, sử dụng reflog/restore/revert/stash an toàn, mô hình fetch/pull/push với remote repository.', primaryLocator: 'Pro Git 2e Ch. 2 (§2.4–2.5), Ch. 6 & Ch. 7 (§7.7, §7.10)' },
      { id: 'gdt-shell-build-systems', title: 'Luồng chuẩn POSIX, đường ống và hệ thống biên dịch đa tệp', summary: 'Luồng stdin/stdout/stderr, kết nối công cụ bằng pipe, tách header/source và cấu hình hệ thống build (Make/CMake cơ bản).', primaryLocator: 'MIT Missing Semester (2020) Lecture 2 (/2020/shell-tools/), Lecture 4 (/2020/data-wrangling/), Lecture 8 (/2020/metaprogramming/) & LearnCpp Ch. 2 (§2.8–2.12)' },
    ],
    boundaries: [
      'Trọng tâm là hiểu mô hình dữ liệu của Git và quy trình build tái lập, không biến môn học thành danh sách học vẹt hàng chục cờ lệnh hiếm dùng.',
    ],
    sources: [
      { sourceId: 'pro-git-2e', locator: 'Chapters 1–3 (Git Basics & Branching), Chapter 6, Chapter 7 (§7.7, §7.10), and Chapter 10 (Git Internals)', relationship: 'primary' },
      { sourceId: 'mit-missing-semester', locator: '2020 Edition — Lecture 2: Shell Tools and Scripting (/2020/shell-tools/), Lecture 4: Data Wrangling (/2020/data-wrangling/), Lecture 6: Version Control (Git) (/2020/version-control/), Lecture 8: Metaprogramming (/2020/metaprogramming/)', relationship: 'primary' },
    ],
  },
  {
    id: 'cpp-memory-model',
    code: 'CS-07',
    title: 'C++ và mô hình bộ nhớ',
    blockId: 'block-2',
    level: 'core',
    overview: [
      'Môn học đi sâu vào mối liên hệ giữa ngữ nghĩa ngôn ngữ C++ và mô hình bộ nhớ của máy tính. Nội dung phân tích địa chỉ bộ nhớ, con trỏ, tham chiếu, hiện tượng bí danh (aliasing), thời gian sống của đối tượng (storage duration: automatic, static, dynamic), sự khác biệt giữa ngăn xếp (stack) và vùng nhớ tự do (heap), cùng các lỗi kinh điển như dangling pointer, memory leak, double free và buffer overflow. Trên cơ sở đó, môn học xây dựng nguyên lý gắn vòng đời tài nguyên với vòng đời đối tượng (RAII), quyền sở hữu độc quyền/chia sẻ (`std::unique_ptr`, `std::shared_ptr`), ngữ nghĩa di chuyển (move semantics), khuôn mẫu (templates) đủ dùng và công cụ kiểm chứng bộ nhớ (AddressSanitizer, UndefinedBehaviorSanitizer).',
    ],
    prerequisites: [
      { courseId: 'intro-programming', type: 'required', reason: 'Cần nắm chắc kiểu dữ liệu, hàm, phạm vi biến và std::vector/std::string cơ bản.' },
      { courseId: 'program-design-debugging', type: 'required', reason: 'Cần kỹ năng sử dụng debugger và đọc call stack trước khi chẩn đoán lỗi con trỏ và bộ nhớ động.' },
    ],
    plannedChapters: [
      { id: 'cppm-addresses-pointers-aliasing', title: 'Địa chỉ ô nhớ, con trỏ, tham chiếu và hiện tượng bí danh (Aliasing)', summary: 'Biểu diễn địa chỉ, toán tử lấy địa chỉ và giải tham chiếu, null pointer, const correctness với con trỏ và tác động của aliasing.', primaryLocator: 'LearnCpp Ch. 12 (§12.1–12.14)' },
      { id: 'cppm-lifetime-stack-heap', title: 'Thời gian sống đối tượng, phân vùng Stack/Heap và cấp phát động', summary: 'Automatic vs static vs dynamic storage duration, chi phí cấp phát động, lỗi con trỏ treo (dangling), rò rỉ (leak) và giải phóng kép.', primaryLocator: 'LearnCpp Ch. 12 (§12.12), Ch. 19 (§19.1–19.5), Ch. 20 (§20.2) & Dive Into Systems Ch. 2, Ch. 3 (§3.3)' },
      { id: 'cppm-raii-ownership-move', title: 'Nguyên lý RAII, mô hình quyền sở hữu và ngữ nghĩa di chuyển', summary: 'Quản lý tài nguyên xác định qua destructor, lvalue/xvalue/prvalue, move constructor/assignment, std::unique_ptr, std::shared_ptr và Rule of Zero/Five.', primaryLocator: 'LearnCpp Ch. 12 (§12.2) & Ch. 22 (§22.1–22.7)' },
      { id: 'cppm-templates-containers-sanitizers', title: 'Khuôn mẫu tổng quát, bố cục bộ nhớ container và kiểm chứng bằng Sanitizer', summary: 'Hàm/lớp khuôn mẫu (templates), iterator invalidation khi std::vector cấp phát lại, phân biệt chuẩn ngôn ngữ với ABI, và phát hiện lỗi bằng ASan/UBSan/Valgrind.', primaryLocator: 'LearnCpp Ch. 11, Ch. 16, Dive Into Systems Ch. 3 (§3.3) & MIT Missing Semester (2020) Lecture 7 (/2020/debugging-profiling/)' },
    ],
    boundaries: [
      'Phân biệt rõ quy định của chuẩn ISO C++ về thời gian sống/hành vi không xác định với bố cục bộ nhớ cụ thể phụ thuộc trình biên dịch và kiến trúc (ABI).',
      'Không dồn template metaprogramming phức tạp vào phần con trỏ cơ bản.',
    ],
    sources: [
      { sourceId: 'learncpp', locator: 'Chapter 11 (Function Templates), Chapter 12 (§12.2 Value categories, §12.7–12.12 References and Pointers), Chapter 19 (Dynamic Allocation), Chapter 20 (§20.2 Stack and Heap), Chapter 22 (Move Semantics and Smart Pointers)', relationship: 'primary' },
      { sourceId: 'dive-into-systems', locator: 'Chapter 2 (§2.1–2.5 C Pointers and Dynamic Memory Allocation) & Chapter 3 (§3.3 Debugging Memory with Valgrind)', relationship: 'supplementary' },
    ],
  },
  {
    id: 'object-oriented-programming',
    code: 'CS-08',
    title: 'Lập trình hướng đối tượng',
    blockId: 'block-2',
    level: 'core',
    overview: [
      'Môn học nghiên cứu phương pháp tổ chức chương trình xung quanh các kiểu dữ liệu trừu tượng đóng gói trạng thái và bảo vệ bất biến (invariants). Nội dung đi từ thiết kế lớp, kiểm soát truy cập, hàm tạo/hàm hủy, hàm thành viên hằng và nạp chồng toán tử, đến sự phân biệt thiết kế giữa quan hệ chứa (composition) và kế thừa (inheritance). Phần tiếp theo trình bày cơ chế đa hình động qua hàm ảo (virtual functions), giao diện trừu tượng (abstract interfaces), quản lý tài nguyên trong cây phân cấp đa hình, các nguyên lý thiết kế giảm kết dính, và đối chiếu phạm vi phù hợp của OOP với thiết kế hàm thuần/dữ liệu phẳng.',
    ],
    prerequisites: [
      { courseId: 'cpp-memory-model', type: 'required', reason: 'Cần hiểu thời gian sống đối tượng, con trỏ/tham chiếu, RAII và quyền sở hữu trước khi học đa hình động và quản lý tài nguyên trong lớp.' },
    ],
    plannedChapters: [
      { id: 'oop-classes-invariants', title: 'Trừu tượng hóa dữ liệu, đóng gói và bất biến của lớp', summary: 'Bảo vệ bất biến trạng thái qua giao diện công khai, hàm tạo (constructors), danh sách khởi tạo thành viên, hàm hủy và đối tượng hằng.', primaryLocator: 'LearnCpp Ch. 14 (§14.1–14.16) & Ch. 15 (§15.1–15.9)' },
      { id: 'oop-copy-operators-composition', title: 'Ngữ nghĩa sao chép, nạp chồng toán tử và quan hệ hợp thành (Composition)', summary: 'Sao chép nông vs sâu, nạp chồng toán tử giữ ngữ nghĩa tự nhiên, và ưu tiên hợp thành (has-a) để giảm phụ thuộc.', primaryLocator: 'LearnCpp Ch. 21 (§21.1–21.14) & Ch. 23 (§23.1–23.3)' },
      { id: 'oop-inheritance-polymorphism', title: 'Kế thừa, điều phối động (Dynamic Dispatch) và giao diện trừu tượng', summary: 'Quan hệ is-a, thứ tự khởi tạo/hủy lớp cơ sở–dẫn xuất, hàm ảo, lớp trừu tượng thuần ảo, virtual destructor, hiện tượng object slicing và mô hình triển khai vtable/vptr điển hình.', primaryLocator: 'LearnCpp Ch. 24 (§24.1–24.9) & Ch. 25 (§25.1–25.11)' },
      { id: 'oop-design-tradeoffs', title: 'Nguyên lý thiết kế hướng đối tượng, mẫu thiết kế cốt lõi và giới hạn của OOP', summary: 'Nguyên lý tách giao diện, đảo ngược phụ thuộc, các mẫu Strategy/Factory/Observer giải quyết bài toán cụ thể, và khi nào thiết kế hàm thuần hiệu quả hơn lớp.', primaryLocator: 'SWE at Google Ch. 8–10 & Composing Programs §2.5–2.7' },
    ],
    boundaries: [
      'Làm rõ rằng vtable/vptr là cơ chế triển khai phổ biến của ABI chứ không phải bố cục bộ nhớ cố định do chuẩn C++ bắt buộc.',
      'Không biến mọi thao tác tính toán đơn giản thành cây kế thừa phức tạp.',
    ],
    sources: [
      { sourceId: 'learncpp', locator: 'Chapters 14, 15, 21, 23, 24, 25 (Classes, Operator Overloading, Composition, Inheritance, Virtual Functions)', relationship: 'primary' },
      { sourceId: 'composing-programs', locator: 'Chapter 2: §2.5 Object-Oriented Programming & §2.7 Object Abstraction', relationship: 'supplementary' },
    ],
  },
  {
    id: 'discrete-math',
    code: 'CS-09',
    title: 'Toán rời rạc và lập luận cho CS',
    blockId: 'block-2',
    level: 'core',
    overview: [
      'Môn học xây dựng nền tảng ngôn ngữ toán học và năng lực chứng minh chặt chẽ cho toàn bộ Khoa học Máy tính. Nội dung bao quát các cấu trúc rời rạc cốt lõi: tập hợp, dãy, hàm, quan hệ tương đương và thứ tự bộ phận; logic mệnh đề, đại số Boolean và logic vị từ với lượng từ; các phương pháp chứng minh trực tiếp, phản đảo, phản chứng và nguyên lý quy nạp toán học; định nghĩa đệ quy, quy nạp cấu trúc và bất biến máy trạng thái; số học nguyên, thuật toán Euclid và đồng dư modulo; lý thuyết đồ thị cơ sở, cây và đồ thị có hướng không chu trình (DAG); tổ hợp, nguyên lý song ánh, bù trừ và Dirichlet; ký hiệu tổng, tích và tiệm cận. Đặc biệt, môn học dành hai chương sâu cho Hệ thức đệ quy (từ mô hình hóa, khai triển lặp, hệ tuyến tính thuần nhất hệ số hằng, phương trình đặc trưng nghiệm đơn/nghiệm bội/nghiệm phức, đến hệ không thuần nhất và giới hạn áp dụng) cùng Hàm sinh (chuỗi lũy thừa hình thức, phép toán đại số và giải truy hồi).',
    ],
    prerequisites: [
      { courseId: 'math-bridge', type: 'required', reason: 'Cần nắm vững biến số, phương trình đa thức, số phức cơ sở, hàm số, lũy thừa, logarit và ký hiệu tổng cơ bản.' },
      { courseId: 'computational-thinking', type: 'recommended', reason: 'Khái niệm trạng thái, bước chuyển trạng thái và điều kiện dừng giúp gắn kết trực tiếp logic và quy nạp với mô hình máy trạng thái.' },
      { courseId: 'single-variable-calculus', type: 'recommended', reason: 'Toàn bộ phần cốt lõi (Chương 1–7, 9–10 và phần tổng đại số/tiệm cận của Chương 8) chỉ cần CS-02; riêng tiểu mục mở rộng về cận kẹp tích phân và xấp xỉ Stirling ở Chương 8 cần khái niệm tích phân xác định của CS-11.' },
    ],
    plannedChapters: [
      { id: 'dm-sets-functions-relations', title: 'Tập hợp, dãy, hàm và quan hệ hai ngôi', summary: 'Tập hợp, tập lũy thừa, tích Descartes, tính đơn ánh/toàn ánh/song ánh của hàm, quan hệ tương đương, phân hoạch và thứ tự bộ phận.', primaryLocator: 'MIT 6.042J §4.1–4.5 & §9.5–9.10' },
      { id: 'dm-logic-predicates', title: 'Logic mệnh đề, đại số Boolean và logic vị từ', summary: 'Phép nối logic, bảng chân trị, kéo theo và phản đảo, tương đương logic, chuẩn tắc CNF/DNF, lượng từ phổ quát/tồn tại và quy tắc phủ định lượng từ.', primaryLocator: 'MIT 6.042J §3.1–3.6' },
      { id: 'dm-proofs-induction', title: 'Phương pháp chứng minh toán học và nguyên lý quy nạp', summary: 'Cấu trúc suy luận hợp lệ, chứng minh trực tiếp, phản đảo, chia trường hợp, phản chứng, phản ví dụ, nguyên lý thứ tự tốt, quy nạp thường và quy nạp mạnh.', primaryLocator: 'MIT 6.042J §1.1–1.9, §2.1–2.4 & §5.1–5.3' },
      { id: 'dm-recursive-definitions-invariants', title: 'Định nghĩa đệ quy, quy nạp cấu trúc và bất biến máy trạng thái', summary: 'Xây dựng kiểu dữ liệu đệ quy, chứng minh bằng quy nạp cấu trúc, mô hình máy trạng thái, bất biến bảo toàn (preserved invariant) và chứng minh tính dừng.', primaryLocator: 'MIT 6.042J §5.4 & Chapter 6 (§6.1–6.4)' },
      { id: 'dm-number-theory-modular', title: 'Số học nguyên, ước chung lớn nhất và đồng dư modulo', summary: 'Phép chia có dư, thuật toán Euclid, bổ đề Bézout, định lý cơ bản của số học, đồng dư thức, điều kiện khả nghịch modulo, định lý Fermat nhỏ và Euler.', primaryLocator: 'MIT 6.042J §8.1–8.9' },
      { id: 'dm-graphs-trees-posets', title: 'Lý thuyết đồ thị cơ sở, cây và cấu trúc phụ thuộc', summary: 'Đồ thị vô hướng/có hướng, bậc đỉnh, đường đi, chu trình, tính liên thông, tính chất tương đương của cây, đồ thị hai phía và sắp xếp topo trên DAG.', primaryLocator: 'MIT 6.042J §9.1–9.11 & §11.1–11.10' },
      { id: 'dm-counting-combinatorics', title: 'Nguyên lý đếm, song ánh, bù trừ và Dirichlet', summary: 'Quy tắc cộng/nhân, hoán vị, tổ hợp, đếm bằng ánh xạ song ánh và k-to-1, công thức nhị thức, nguyên lý bao hàm–loại trừ và nguyên lý chuồng bồ câu.', primaryLocator: 'MIT 6.042J §14.1–14.10' },
      { id: 'dm-sums-products-asymptotics', title: 'Tổng hữu hạn, ước lượng tiệm cận và phương pháp kẹp tích phân', summary: 'Biến đổi tổng hữu hạn, cấp số nhân, tổng triệt tiêu, số điều hòa H_n, định nghĩa lượng từ của O/Omega/Theta/o/omega (cốt lõi) và tiểu mục mở rộng dùng cận tích phân/Stirling (cần CS-11).', primaryLocator: 'MIT 6.042J §13.1–13.7' },
      { id: 'dm-recurrences', title: 'Hệ thức đệ quy (Recurrence Relations)', summary: 'Mô hình hóa và điều kiện đầu, khai triển lặp và kiểm chứng quy nạp, hệ tuyến tính thuần nhất hệ số hằng, phương trình đặc trưng với nghiệm phân biệt, nghiệm bội và nghiệm phức liên hợp, hệ không thuần nhất/nghiệm riêng và giới hạn áp dụng đối với truy hồi chia để trị.', primaryLocator: 'DMOI 3e §2.1, §2.4 & MIT 6.042J §21.1–21.4' },
      { id: 'dm-generating-functions', title: 'Hàm sinh và ứng dụng trong bài toán đếm – truy hồi', summary: 'Biểu diễn dãy bằng chuỗi lũy thừa hình thức, phép dịch chỉ số và phép toán đại số, tổng chập (convolution), giải hệ thức đệ quy bằng phân thức tối giản và phân biệt chuỗi hình thức với hội tụ giải tích.', primaryLocator: 'MIT 6.042J §15.1–15.5' },
    ],
    boundaries: [
      'Phần cốt lõi (core) của môn học không đòi hỏi giải tích; riêng tiểu mục mở rộng về phương pháp kẹp tích phân và công thức Stirling ở Chương 8 được gắn nhãn extension và khai báo rõ tiên quyết Giải tích một biến (CS-11).',
      'Phương trình đặc trưng chỉ áp dụng cho hệ thức đệ quy tuyến tính hệ số hằng; không áp dụng trực tiếp cho hệ thức phi tuyến hoặc truy hồi chia để trị dạng T(n) = aT(n/b) + f(n) (thuộc Môn 16).',
      'Phần xác suất rời rạc và liên tục được tách sang Môn 13 để học trọn vẹn từ không gian mẫu đến định lý giới hạn.',
    ],
    sources: [
      { sourceId: 'mit-6042j-2015', locator: 'Chapters 1–6, 8–9, 11, 13–15, 21 (Mathematics for Computer Science Textbook & Readings)', relationship: 'primary' },
      { sourceId: 'dmoi-3e', locator: 'Chapter 2: Sequences (§2.1 Describing Sequences & §2.4 Solving Recurrence Relations)', relationship: 'primary' },
    ],
  },
  {
    id: 'linear-algebra',
    code: 'CS-10',
    title: 'Đại số tuyến tính',
    blockId: 'block-2',
    level: 'core',
    overview: [
      'Môn học nghiên cứu cấu trúc của không gian vector và các ánh xạ tuyến tính — ngôn ngữ nền tảng của đồ họa máy tính, học máy, tối ưu hóa và tính toán khoa học. Nội dung kết hợp chặt chẽ trực giác hình học với điều kiện đại số: từ hệ phương trình tuyến tính, phép khử Gauss, phân rã LU và đại số ma trận, đến không gian vector, sự độc lập tuyến tính, cơ sở, số chiều và định lý cơ bản của đại số tuyến tính về bốn không gian con (column space, nullspace, row space, left nullspace). Tiếp theo là tích vô hướng, tính trực giao, phép chiếu trực giao, bài toán bình phương tối thiểu (least squares), định thức, trị riêng và vector riêng (eigenvalues/eigenvectors), chéo hóa ma trận, ma trận đối xứng xác định dương và phân rã giá trị kỳ dị (SVD).',
    ],
    prerequisites: [
      { courseId: 'math-bridge', type: 'required', reason: 'Cần nắm hệ phương trình cơ bản, tọa độ phẳng và biến đổi đại số.' },
      { courseId: 'discrete-math', type: 'recommended', reason: 'Tư duy chứng minh, tập hợp và ánh xạ từ Toán rời rạc giúp hiểu sâu không gian vector và hạt nhân/ảnh của ánh xạ tuyến tính.' },
    ],
    plannedChapters: [
      { id: 'la-systems-elimination-matrices', title: 'Hệ phương trình tuyến tính, khử Gauss và phân rã LU', summary: 'Góc nhìn theo hàng và theo cột của Ax = b, phép biến đổi sơ cấp, ma trận bậc thang, phân rã A = LU và điều kiện khả nghịch.', primaryLocator: 'MIT 18.06SC Unit I: Ax = b and the Four Subspaces (Sessions 1–7)' },
      { id: 'la-vector-spaces-subspaces', title: 'Không gian vector, cơ sở, số chiều và bốn không gian con cơ bản', summary: 'Độc lập tuyến tính, hệ sinh, cơ sở, hạng (rank), định lý hạng–số khuyết (rank-nullity) và quan hệ giữa bốn không gian con của ma trận.', primaryLocator: 'MIT 18.06SC Unit I (Sessions 8–13)' },
      { id: 'la-linear-maps-change-of-basis', title: 'Ánh xạ tuyến tính, biểu diễn ma trận và đổi cơ sở', summary: 'Ánh xạ bảo toàn tổ hợp tuyến tính, hạt nhân (kernel) và ảnh (image), ma trận của ánh xạ theo cơ sở và ma trận đồng dạng.', primaryLocator: 'MIT 18.06SC Unit III (Session 30–31)' },
      { id: 'la-orthogonality-least-squares', title: 'Trực giao, phép chiếu, bình phương tối thiểu và trực chuẩn hóa Gram–Schmidt', summary: 'Phần bù trực giao, ma trận chiếu P, xấp xỉ nghiệm hệ vô nghiệm bằng phương trình chuẩn A^T A x_hat = A^T b và phân rã QR.', primaryLocator: 'MIT 18.06SC Unit II (Sessions 14–17)' },
      { id: 'la-determinants-eigenvalues', title: 'Định thức, trị riêng, vector riêng và chéo hóa ma trận', summary: 'Ý nghĩa thể tích có hướng của định thức, đa thức đặc trưng det(A - lambda I) = 0, điều kiện chéo hóa được và tính lũy thừa ma trận A^k.', primaryLocator: 'MIT 18.06SC Unit II (Sessions 18–24)' },
      { id: 'la-symmetric-positive-definite-svd', title: 'Ma trận đối xứng, xác định dương và phân rã giá trị kỳ dị (SVD)', summary: 'Định lý phổ cho ma trận thực đối xứng, dạng toàn phương xác định dương, phân rã A = U Sigma V^T, giả nghịch đảo Moore–Penrose và xấp xỉ hạng thấp.', primaryLocator: 'MIT 18.06SC Unit III (Sessions 27–29, 33)' },
    ],
    boundaries: [
      'Không yêu cầu hoàn tất Giải tích nhiều biến trước khi học Đại số tuyến tính; các ứng dụng đạo hàm ma trận được đặt ở Môn 12 và Môn 36.',
    ],
    sources: [
      { sourceId: 'mit-1806sc', locator: 'Units I, II, and III (Sessions 1–33)', relationship: 'primary' },
    ],
  },
  {
    id: 'single-variable-calculus',
    code: 'CS-11',
    title: 'Giải tích một biến',
    blockId: 'block-2',
    level: 'core',
    overview: [
      'Môn học trang bị các công cụ toán học để phân tích sự biến thiên liên tục, tốc độ tích lũy và xấp xỉ hàm số. Nội dung bắt đầu từ khái niệm giới hạn, tính liên tục, đạo hàm như tốc độ thay đổi tức thời và xấp xỉ tuyến tính cục bộ, quy tắc đạo hàm hàm hợp và hàm ngược, đến bài toán cực trị và phương pháp lặp Newton–Raphson. Phần tích phân xây dựng tổng Riemann, định lý cơ bản của giải tích nối đạo hàm với tích phân xác định, các kỹ thuật tích phân cần thiết (đổi biến, từng phần), tích phân suy rộng (dùng trực tiếp trong phân tích tổng tiệm cận và biến ngẫu nhiên liên tục), cùng chuỗi vô hạn và khai triển Taylor.',
    ],
    prerequisites: [
      { courseId: 'math-bridge', type: 'required', reason: 'Cần nắm vững hàm số, đa thức, hàm mũ, logarit và lượng giác.' },
    ],
    plannedChapters: [
      { id: 'svc-limits-continuity-derivatives', title: 'Giới hạn, tính liên tục và khái niệm đạo hàm', summary: 'Giới hạn hữu hạn và tại vô cùng, so sánh bậc tăng khi x -> inf, định nghĩa đạo hàm và ý nghĩa hình học/vật lý.', primaryLocator: 'MIT 18.01SC Unit 1: Differentiation — Part A (Sessions 1–13)' },
      { id: 'svc-chain-rule-approximations', title: 'Quy tắc dây chuyền, đạo hàm hàm ngược và xấp xỉ tuyến tính/bậc hai', summary: 'Đạo hàm hàm hợp (chain rule), hàm ẩn, xấp xỉ vi phân và đánh giá sai số cục bộ.', primaryLocator: 'MIT 18.01SC Unit 1 Part B (Sessions 14–20) & Unit 2 Part A (Sessions 21–24)' },
      { id: 'svc-optimization-newton', title: 'Cực trị hàm một biến, tính lồi/lõm và phương pháp Newton', summary: 'Điểm dừng, kiểm tra đạo hàm bậc hai, hàm lồi (convex functions), quy tắc L’Hôpital và tìm nghiệm xấp xỉ bằng phương pháp Newton.', primaryLocator: 'MIT 18.01SC Unit 2 Parts B–C (Sessions 25–41) & Unit 5 Part A (Sessions 87–90 L’Hôpital’s Rule)' },
      { id: 'svc-integration-ftc', title: 'Tổng Riemann, tích phân xác định và Định lý cơ bản của giải tích', summary: 'Bài toán diện tích và tích lũy, tổng Riemann trên/dưới, nguyên hàm và hai phần của Định lý cơ bản của giải tích.', primaryLocator: 'MIT 18.01SC Unit 3: The Definite Integral and its Applications (Sessions 42–66)' },
      { id: 'svc-techniques-improper-integrals', title: 'Kỹ thuật tích phân và tích phân suy rộng', summary: 'Phép đổi biến số, tích phân từng phần (cần cho kỳ vọng của phân phối mũ/Gamma/Gaussian), và sự hội tụ của tích phân suy rộng.', primaryLocator: 'MIT 18.01SC Unit 4: Techniques of Integration (Sessions 67–84) & Unit 5 Part A (Sessions 91–93 Improper Integrals)' },
      { id: 'svc-series-taylor', title: 'Dãy số, chuỗi vô hạn và chuỗi Taylor', summary: 'Sự hội tụ của chuỗi số, tiêu chuẩn so sánh tích phân, chuỗi lũy thừa, khai triển Taylor/Maclaurin và phần dư Lagrange.', primaryLocator: 'MIT 18.01SC Unit 5: Exploring the Infinite — Part B (Sessions 94–99: Infinite Series, Power Series, Taylor’s Series)' },
    ],
    boundaries: [
      'Không cắt bỏ phần chuỗi Taylor và tích phân suy rộng vì chúng là nền tảng trực tiếp cho xấp xỉ hàm mất mát, hàm sinh giải tích và hàm mật độ xác suất.',
      'Các kỹ thuật tích phân lượng giác đặc thù hiếm dùng trong CS được đánh dấu ở mức mở rộng (extension).',
    ],
    sources: [
      { sourceId: 'mit-1801sc', locator: 'Units 1–5 (Sessions 1–101: Differentiation, Applications, Definite Integral & FTC, Techniques of Integration, L’Hôpital’s Rule, Improper Integrals, Infinite Series & Taylor’s Series)', relationship: 'primary' },
    ],
  },
  {
    id: 'multivariable-calculus-optimization',
    code: 'CS-12',
    title: 'Giải tích nhiều biến và tối ưu',
    blockId: 'block-2',
    level: 'core',
    overview: [
      'Môn học mở rộng giải tích sang hàm nhiều biến và xây dựng nền tảng cho các bài toán tối ưu hóa trong học máy, đồ họa và tính toán khoa học. Nội dung gồm hình học không gian R^n, tích vô hướng và tích có hướng, hàm nhiều biến, mặt mức (level sets), đạo hàm riêng, khả vi toàn phần, vector gradient, ma trận Jacobian và ma trận Hessian. Quy tắc dây chuyền nhiều biến được trình bày trên đồ thị tính toán (computational graph) để làm rõ cơ sở toán học của lan truyền ngược (backpropagation). Phần tối ưu phân biệt rõ điều kiện cực trị giải tích (điểm dừng, xác định dương của Hessian, nhân tử Lagrange) với các thuật toán tối ưu số học như hạ gradient (gradient descent), rồi kết thúc bằng tích phân bội và công thức đổi biến.',
    ],
    prerequisites: [
      { courseId: 'single-variable-calculus', type: 'required', reason: 'Cần nắm vững đạo hàm, quy tắc dây chuyền một biến, khai triển Taylor và tích phân.' },
      { courseId: 'linear-algebra', type: 'required', reason: 'Cần không gian vector, tích vô hướng, ma trận đối xứng xác định dương và trị riêng để xét ma trận Jacobian/Hessian.' },
    ],
    plannedChapters: [
      { id: 'mco-multivariable-functions-partials', title: 'Hàm nhiều biến, đường đồng mức, đạo hàm riêng và xấp xỉ tuyến tính', summary: 'Miền xác định trong R^n, mặt phẳng tiếp diện, đạo hàm riêng và sự khác biệt giữa tồn tại đạo hàm riêng với tính khả vi toàn phần.', primaryLocator: 'MIT 18.02SC Unit 1 (Sessions 1–22) & Unit 2 Part A (Sessions 23–30)' },
      { id: 'mco-gradient-jacobian-chain-rule', title: 'Đạo hàm theo hướng, Gradient, Jacobian và quy tắc dây chuyền nhiều biến', summary: 'Gradient như hướng tăng nhanh nhất và pháp tuyến mặt mức, ma trận Jacobian của ánh xạ vector và quy tắc dây chuyền trên đồ thị hợp hàm.', primaryLocator: 'MIT 18.02SC Unit 2 Part B: Chain Rule, Gradient and Directional Derivatives (Sessions 34–38)' },
      { id: 'mco-analytic-numerical-optimization', title: 'Cực trị tự do, ma trận Hessian, nhân tử Lagrange và thuật toán Gradient Descent', summary: 'Khai triển Taylor bậc hai nhiều biến, phân loại điểm dừng (cực tiểu, cực đại, yên ngựa) qua Hessian, tối ưu có ràng buộc đẳng thức và điều kiện hội tụ của thuật toán số gradient descent.', primaryLocator: 'MIT 18.02SC Unit 2 Part A (Sessions 31–33) & Part C (Sessions 39–45 Lagrange Multipliers)' },
      { id: 'mco-multiple-integrals', title: 'Tích phân kép, tích phân bội và đổi biến bằng định thức Jacobian', summary: 'Định lý Fubini tính tích phân lặp trên miền phẳng/không gian, đổi biến sang tọa độ cực/cầu và ứng dụng tính tích phân mật độ xác suất đồng thời.', primaryLocator: 'MIT 18.02SC Unit 3 Part A (Sessions 46–56: Double Integrals, Polar Coordinates Session 50, Change of Variables Sessions 53–55) & Unit 4 (Sessions 74–92)' },
    ],
    boundaries: [
      'Phân biệt rõ: cực trị giải tích tìm nghiệm của nabla f(x) = 0, trong khi gradient descent là thuật toán lặp xấp xỉ số học dùng khi không giải được nghiệm đóng.',
      'Giải tích vector trường (định lý Green, Stokes, Gauss) được xếp ở mức mở rộng (extension), không bắt buộc cho luồng học máy/phần mềm cốt lõi.',
    ],
    sources: [
      { sourceId: 'mit-1802sc', locator: 'Unit 1 (Sessions 1–22), Unit 2 (Sessions 23–45), Unit 3 Part A (Sessions 46–56 Double Integrals & Jacobian), Unit 4 (Sessions 74–92 Triple Integrals & Vector Calculus)', relationship: 'primary' },
    ],
  },
  {
    id: 'probability',
    code: 'CS-13',
    title: 'Xác suất',
    blockId: 'block-2',
    level: 'core',
    overview: [
      'Môn học xây dựng mô hình toán học chặt chẽ cho sự bất định và ngẫu nhiên — nền tảng của thuật toán ngẫu nhiên, đánh giá hiệu năng hệ thống, mạng máy tính, thống kê và trí tuệ nhân tạo. Nội dung đi từ tiên đề Kolmogorov trên không gian mẫu và biến cố, xác suất có điều kiện, tính độc lập, công thức xác suất toàn phần và định lý Bayes, đến biến ngẫu nhiên rời rạc (PMF) và liên tục (PDF, CDF). Tiếp theo là kỳ vọng, tính chất tuyến tính của kỳ vọng (ngay cả khi các biến phụ thuộc), phương sai, phân phối đồng thời (joint), phân phối biên (marginal), hiệp phương sai (covariance), hệ số tương quan, các họ phân phối chuẩn mực (Bernoulli, Binomial, Geometric, Poisson, Uniform, Exponential, Normal) cùng các bất đẳng thức xác suất (Markov, Chebyshev), Luật số lớn (LLN) và Định lý giới hạn trung tâm (CLT).',
    ],
    prerequisites: [
      { courseId: 'discrete-math', type: 'required', reason: 'Cần lý thuyết tập hợp, nguyên lý đếm tổ hợp và tổng hữu hạn/chuỗi.' },
      { courseId: 'single-variable-calculus', type: 'required', reason: 'Cần đạo hàm, tích phân xác định và tích phân suy rộng cho biến ngẫu nhiên liên tục.' },
      { courseId: 'multivariable-calculus-optimization', type: 'co_requisite', reason: 'Cần tích phân kép cơ bản khi học phân phối xác suất đồng thời của hai biến liên tục.' },
    ],
    plannedChapters: [
      { id: 'prob-axioms-conditional-bayes', title: 'Không gian mẫu, tiên đề xác suất, tính độc lập và Định lý Bayes', summary: 'Không gian xác suất, xác suất có điều kiện P(A|B), phân biệt xung khắc với độc lập, xác suất toàn phần, cập nhật Bayes và sai lầm bỏ qua tỷ lệ nền (base-rate fallacy).', primaryLocator: 'MIT 18.05 Spring 2022 Classes 1–3 & MIT 6.042J Ch. 16–17' },
      { id: 'prob-discrete-random-variables', title: 'Biến ngẫu nhiên rời rạc, PMF, kỳ vọng và tính tuyến tính của kỳ vọng', summary: 'Biến ngẫu nhiên như hàm từ không gian mẫu vào R, hàm khối xác suất (PMF), kỳ vọng E[X], tính tuyến tính E[X+Y] = E[X]+E[Y], phương sai và các phân phối Bernoulli, Binomial, Geometric, Poisson.', primaryLocator: 'MIT 18.05 Spring 2022 Classes 4–5a & MIT 6.042J Ch. 18 (§18.1–18.5) & Ch. 19 (§19.3)' },
      { id: 'prob-continuous-distributions', title: 'Biến ngẫu nhiên liên tục, hàm mật độ (PDF), hàm phân phối tích lũy (CDF)', summary: 'Mật độ xác suất f(x), quan hệ F\'(x) = f(x), đổi biến biến ngẫu nhiên, phân phối đều, phân phối mũ (tính chất không nhớ) và phân phối chuẩn Gaussian.', primaryLocator: 'MIT 18.05 Spring 2022 Classes 5b–6a' },
      { id: 'prob-joint-covariance-limit-theorems', title: 'Phân phối đồng thời, hiệp phương sai và các định lý giới hạn (LLN, CLT)', summary: 'PMF/PDF đồng thời, phân phối biên và có điều kiện, covariance và correlation (tương quan bằng 0 không suy ra độc lập), bất đẳng thức Markov/Chebyshev/Chernoff, Luật số lớn và Định lý giới hạn trung tâm.', primaryLocator: 'MIT 18.05 Spring 2022 Classes 6b–7 & MIT 6.042J Ch. 19 (§19.1–19.6)' },
    ],
    boundaries: [
      'Làm rõ các điều kiện áp dụng Định lý giới hạn trung tâm (biến độc lập cùng phân phối có phương sai hữu hạn); không áp dụng mù quáng cho phân phối đuôi nặng có phương sai vô hạn.',
    ],
    sources: [
      { sourceId: 'mit-1805-2022', locator: 'Classes 1–9 (Probability, Conditional Probability, Discrete & Continuous Random Variables, Joint Distributions, Law of Large Numbers, Central Limit Theorem)', relationship: 'primary' },
      { sourceId: 'mit-6042j-2015', locator: 'Chapters 16–19 (Events & Probability Spaces, Conditional Probability, Random Variables & Expectation §18.1–18.5, Deviation from the Mean: Markov §19.1, Chebyshev §19.2, Variance §19.3, Chernoff §19.6.2)', relationship: 'supplementary' },
    ],
  },
  {
    id: 'statistics-inference',
    code: 'CS-14',
    title: 'Thống kê và thiết kế suy luận',
    blockId: 'block-2',
    level: 'core',
    overview: [
      'Môn học nghiên cứu bài toán ngược của xác suất: từ dữ liệu quan sát hữu hạn có nhiễu, làm thế nào để ước lượng tham số, định lượng độ bất định và kiểm định giả thuyết về quy luật sinh dữ liệu. Nội dung bao gồm nguyên tắc lấy mẫu, sai lệch chọn mẫu (sampling bias), thống kê mô tả, hàm hợp lý (likelihood) và ước lượng hợp lý cực đại (MLE), suy luận Bayes (prior, posterior, credible intervals), phân phối mẫu và khoảng tin cậy tần suất (frequentist confidence intervals), phương pháp lấy mẫu lặp bootstrap, kiểm định giả thuyết (sai lầm loại I/II, p-value, lực kiểm định power, kích thước hiệu ứng effect size), hồi quy tuyến tính và phân biệt rõ thống kê mô tả, mô hình dự đoán với suy luận nhân quả.',
    ],
    prerequisites: [
      { courseId: 'probability', type: 'required', reason: 'Cần nắm vững biến ngẫu nhiên, kỳ vọng, phương sai, định lý Bayes và Định lý giới hạn trung tâm.' },
      { courseId: 'linear-algebra', type: 'required', reason: 'Cần phép chiếu trực giao và bình phương tối thiểu cho mô hình hồi quy tuyến tính.' },
    ],
    plannedChapters: [
      { id: 'stat-sampling-descriptive-bias', title: 'Quần thể, mẫu ngẫu nhiên, thống kê mô tả và các nguồn sai lệch dữ liệu', summary: 'Phân biệt tham số quần thể với thống kê mẫu, sai lệch chọn mẫu/sống sót, độ lệch (bias) và phương sai (variance) của bộ ước lượng.', primaryLocator: 'MIT 18.05 Spring 2022 Class 10b & OpenIntro Ch. 1' },
      { id: 'stat-likelihood-mle-bayesian', title: 'Hàm hợp lý, ước lượng hợp lý cực đại (MLE) và cập nhật suy luận Bayes', summary: 'Xây dựng hàm log-likelihood, tìm MLE bằng giải tích/số học, cập nhật phân phối hậu nghiệm liên tục/rời rạc và khoảng tin cậy Bayes (credible interval).', primaryLocator: 'MIT 18.05 Spring 2022 Classes 10b–16' },
      { id: 'stat-confidence-intervals-bootstrap', title: 'Khoảng tin cậy tần suất và phương pháp tái lấy mẫu Bootstrap', summary: 'Ý nghĩa đúng của khoảng tin cậy 1 - alpha dưới góc nhìn lấy mẫu lặp, phân phối Student-t và ước lượng sai số chuẩn bằng empirical/parametric bootstrap.', primaryLocator: 'MIT 18.05 Spring 2022 Classes 20–24' },
      { id: 'stat-hypothesis-testing-regression-causality', title: 'Kiểm định giả thuyết, hồi quy tuyến tính và ranh giới dự đoán – nhân quả', summary: 'Giả thuyết H0/HA, bản chất xác suất có điều kiện của p-value, kiểm định z/t/chi-square, power & effect size, kiểm định đa giả thuyết, hồi quy tuyến tính và biến gây nhiễu (confounding) trong suy luận nhân quả.', primaryLocator: 'MIT 18.05 Spring 2022 Classes 17–19, 25–26' },
    ],
    boundaries: [
      'Sửa triệt để ngộ nhận phổ biến: p-value không phải xác suất H0 đúng, và khoảng tin cậy 95% tần suất không gán xác suất 95% cho tham số cố định sau khi đã tính xong một khoảng cụ thể.',
    ],
    sources: [
      { sourceId: 'mit-1805-2022', locator: 'Classes 10b–26 (MLE, Bayesian Inference, NHST, Confidence Intervals, Bootstrap, Linear Regression)', relationship: 'primary' },
    ],
  },
  {
    id: 'data-structures',
    code: 'CS-15',
    title: 'Cấu trúc dữ liệu',
    blockId: 'block-3',
    level: 'core',
    overview: [
      'Môn học nghiên cứu sự tách biệt giữa kiểu dữ liệu trừu tượng (Abstract Data Type — giao diện và đặc tả toán học của các phép toán) với cấu trúc dữ liệu (Data Structure — cách biểu diễn vật lý trong bộ nhớ và thuật toán duy trì bất biến). Nội dung phân tích có hệ thống mảng động và chi phí khấu hao (amortized analysis), danh sách liên kết đơn/đôi, ngăn xếp (stack), hàng đợi (queue), hàng đợi hai đầu (deque), bảng băm (hash tables) với hàm băm và chiến lược xử lý va chạm, cây nhị phân và cây tìm kiếm nhị phân (BST), cây tìm kiếm tự cân bằng (AVL, Red-Black/B-Tree cơ sở), hàng đợi ưu tiên và đống nhị phân (binary heap), cây tiền tố (trie), cấu trúc các tập hợp rời rạc (Disjoint Set Union) và các biểu diễn đồ thị trong bộ nhớ.',
    ],
    prerequisites: [
      { courseId: 'cpp-memory-model', type: 'required', reason: 'Cần nắm vững bộ nhớ liên tiếp vs cấp phát nút qua con trỏ, thời gian sống và độ cục bộ bộ nhớ.' },
      { courseId: 'object-oriented-programming', type: 'required', reason: 'Cần nắm đóng gói bất biến của lớp và khuôn mẫu cơ bản để hiểu thiết kế container.' },
      { courseId: 'discrete-math', type: 'required', reason: 'Cần quy nạp toán học, số học modulo, cây, đồ thị và ký hiệu tiệm cận.' },
    ],
    plannedChapters: [
      { id: 'ds-adt-arrays-lists', title: 'Kiểu dữ liệu trừu tượng (ADT), mảng động và danh sách liên kết', summary: 'Giao diện Sequence/Set, mảng động nhân đôi kích thước và phân tích khấu hao O(1), danh sách liên kết đơn/đôi, đánh đổi giữa truy cập ngẫu nhiên và cục bộ cache.', primaryLocator: "open-data-structures: Ch. 1 Introduction; Ch. 2 Array-Based Lists; Ch. 3 Linked Lists" },
      { id: 'ds-stacks-queues-deques', title: 'Ngăn xếp, hàng đợi, hàng đợi hai đầu và mảng vòng (Circular Buffer)', summary: 'Chính sách LIFO/FIFO, cài đặt bằng mảng vòng và danh sách liên kết, ứng dụng trong quản lý khung lời gọi và duyệt theo mức.', primaryLocator: "open-data-structures: §2.2 ArrayQueue; §2.3 ArrayDeque; §2.4 DualArrayDeque; Ch. 3" },
      { id: 'ds-hash-tables', title: 'Bảng băm, hàm băm và chiến lược giải quyết va chạm', summary: 'Bài toán từ điển động, nguyên lý Dirichlet dẫn tới va chạm tất yếu, giả thiết băm đều đơn giản, nối kết chuỗi (chaining) vs địa chỉ mở (open addressing / linear probing), hệ số tải (load factor) và rehashing.', primaryLocator: "open-data-structures: Ch. 5 Hash Tables; mit-6006-2020: Lecture 4: Hashing" },
      { id: 'ds-bst-balanced-trees', title: 'Cây nhị phân, cây tìm kiếm nhị phân (BST) và cơ chế tự cân bằng (AVL)', summary: 'Bất biến thứ tự BST, các phép duyệt cây, suy biến O(n) khi dữ liệu có thứ tự, bất biến chiều cao của cây AVL và bốn phép xoay bảo toàn thứ tự trung thứ tự.', primaryLocator: "open-data-structures: Ch. 6 Binary Trees; Ch. 9 Red-Black Trees; Ch. 14 B-Trees; mit-6006-2020: Lectures 6–7: Binary Trees; AVL Trees" },
      { id: 'ds-heaps-priority-queues', title: 'Đống nhị phân (Binary Heap) và hàng đợi ưu tiên', summary: 'Biểu diễn cây nhị phân hoàn chỉnh trên mảng phẳng, bất biến max-heap/min-heap, thao tác sift-up/sift-down và thuật toán tạo đống tuyến tính O(n) (Build-Heap).', primaryLocator: "open-data-structures: §10.1 BinaryHeap; mit-6006-2020: Lecture 8: Binary Heaps" },
      { id: 'ds-tries-dsu-graph-reps', title: 'Cây tiền tố (Trie), tập hợp rời rạc (DSU) và biểu diễn đồ thị', summary: 'Cây tìm kiếm theo ký tự, cấu trúc Disjoint Set với gộp theo hạng và nén đường đi, so sánh ma trận kề, danh sách kề và danh sách cạnh.', primaryLocator: "cp-algorithms: Aho-Corasick: Construction of the trie; Disjoint Set Union; open-data-structures: Ch. 12 Graphs" },
    ],
    boundaries: [
      'Mỗi cấu trúc dữ liệu đều được định nghĩa bằng bất biến cấu trúc, bảng độ phức tạp trường hợp xấu nhất/trung bình/khấu hao và điều kiện suy biến; việc viết mã cài đặt là phương tiện minh họa cơ chế, không thay thế phân tích.',
    ],
    sources: [
      { sourceId: 'open-data-structures', locator: 'Chapters 1–6, 10, 12 (Arrays, Lists, Hash Tables, Binary Trees, Heaps, Graphs)', relationship: 'primary' },
      { sourceId: 'mit-6006-2020', locator: 'Lectures 2, 4, 6, 7, 8 (Data Structures, Hashing, Binary Trees, AVL, Binary Heaps)', relationship: 'primary' },
    ],
  },
  {
    id: 'algorithms-design-analysis',
    code: 'CS-16',
    title: 'Phân tích và thiết kế thuật toán',
    blockId: 'block-3',
    level: 'core',
    overview: [
      'Môn học nghiên cứu các nguyên lý thiết kế thuật toán tổng quát và phương pháp chứng minh tính đúng đắn cùng độ phức tạp tài nguyên. Nội dung mở đầu bằng mô hình máy RAM, kích thước đầu vào, phân tích trường hợp xấu nhất, trung bình và khấu hao, cùng các kỹ thuật giải hệ thức truy hồi chia để trị (phương pháp thế, cây đệ quy, Định lý Thợ — Master Theorem và Akra–Bazzi tổng quát). Tiếp theo là bài toán tìm kiếm và sắp xếp (tìm kiếm nhị phân trên mảng và trên không gian lời giải đơn điệu, Merge Sort, Quicksort ngẫu nhiên, Heapsort, cận dưới Omega(n log n) cho mô hình so sánh, Counting/Radix Sort), chiến lược Chia để trị, Quy hoạch động (cấu trúc con tối ưu, bài toán con gối nhau, DAG trạng thái), Tham lam (tính chất lựa chọn tham lam và chứng minh đổi chỗ) và Quay lui / Nhánh cận.',
    ],
    prerequisites: [
      { courseId: 'data-structures', type: 'required', reason: 'Cần nắm vững mảng, bảng băm, cây, đống nhị phân và phân tích khấu hao cơ bản.' },
      { courseId: 'discrete-math', type: 'required', reason: 'Cần quy nạp toán học, bất biến vòng lặp, tổng tiệm cận và hệ thức đệ quy.' },
      { courseId: 'probability', type: 'recommended', reason: 'Cần kỳ vọng và biến ngẫu nhiên chỉ thị để phân tích trường hợp trung bình của Quicksort ngẫu nhiên và bảng băm.' },
    ],
    plannedChapters: [
      { id: 'ada-cost-models-divide-conquer-recurrences', title: 'Mô hình chi phí, tính đúng đắn và truy hồi chia để trị (Master Theorem)', summary: 'Mô hình Word-RAM, chứng minh tính đúng đắn bằng bất biến vòng lặp và quy nạp, giải truy hồi T(n) = aT(n/b) + f(n) bằng cây đệ quy, phương pháp thế và Định lý Thợ.', primaryLocator: "mit-6006-2020: Lectures 1, 3; erickson-algorithms: Ch. 0–1; Appendix II: Solving Recurrences" },
      { id: 'ada-searching-sorting-lower-bounds', title: 'Tìm kiếm nhị phân, các thuật toán sắp xếp và cận dưới lý thuyết thông tin', summary: 'Tìm kiếm nhị phân và chặt nhị phân trên hàm đơn điệu, Merge Sort, Heapsort, Quicksort phân hoạch Hoare/Lomuto và chọn chốt ngẫu nhiên, cây quyết định chứng minh cận dưới Omega(n log n) và sắp xếp tuyến tính theo chữ số.', primaryLocator: "mit-6006-2020: Lectures 3, 5, 8; erickson-algorithms: Ch. 1 Recursion; open-data-structures: Ch. 11 Sorting Algorithms" },
      { id: 'ada-divide-and-conquer-paradigm', title: 'Mô hình thiết kế Chia để trị (Divide and Conquer)', summary: 'Phân rã bài toán thành các bài toán con độc lập cùng dạng, nhân số nguyên lớn Karatsuba, tìm phần tử trung vị/thứ k (Quickselect), cặp điểm gần nhất và biến đổi Fourier nhanh (FFT mức khái niệm).', primaryLocator: "erickson-algorithms: Ch. 1 Recursion; Fast Fourier Transforms notes; cp-algorithms: https://cp-algorithms.com/geometry/nearest_points.html — Algorithm; Evaluation of the complexity" },
      { id: 'ada-dynamic-programming', title: 'Quy hoạch động (Dynamic Programming)', summary: 'Bài toán con gối nhau và cấu trúc con tối ưu, đồ thị phụ thuộc DAG của các bài toán con, ghi nhớ từ trên xuống (memoization) vs điền bảng từ dưới lên (tabulation), tối ưu không gian bộ nhớ và truy vết nghiệm.', primaryLocator: "erickson-algorithms: Ch. 3 Dynamic Programming; mit-6006-2020: Lectures 15–18" },
      { id: 'ada-greedy-algorithms', title: 'Thuật toán Tham lam và kỹ thuật chứng minh tính đúng đắn', summary: 'Tính chất lựa chọn tham lam (greedy choice property), kỹ thuật chứng minh "tham lam luôn dẫn trước" và lập luận trao đổi (exchange argument), phản ví dụ khi tham lam thất bại.', primaryLocator: "erickson-algorithms: Ch. 4 Greedy Algorithms; Matroids notes" },
      { id: 'ada-backtracking-branch-bound', title: 'Quay lui (Backtracking) và Nhánh cận (Branch and Bound)', summary: 'Duyệt không gian trạng thái dạng cây, cắt tỉa nhánh vi phạm ràng buộc (pruning) và sử dụng cận đánh giá để tìm nghiệm tối ưu cho bài toán tổ hợp.', primaryLocator: "erickson-algorithms: Ch. 2 Backtracking; Fast Exponential Algorithms notes" },
    ],
    boundaries: [
      'Không trình bày thuật toán như mẹo giải bài thi lập trình; mọi kỹ thuật thiết kế (đặc biệt Tham lam và Quy hoạch động) đều phải đi kèm điều kiện áp dụng và phương pháp chứng minh hoặc phản ví dụ.',
    ],
    sources: [
      { sourceId: 'erickson-algorithms', locator: 'Chapters 1–4 (Recursion, Backtracking, Dynamic Programming, Greedy Algorithms)', relationship: 'primary' },
      { sourceId: 'mit-6006-2020', locator: 'Lectures 1, 3, 5, 15–18 (Asymptotics, Sorting, Dynamic Programming)', relationship: 'primary' },
    ],
  },
  {
    id: 'graph-algorithms',
    code: 'CS-17',
    title: 'Thuật toán đồ thị',
    blockId: 'block-3',
    level: 'core',
    overview: [
      'Môn học nghiên cứu các thuật toán khám phá cấu trúc, tìm đường đi tối ưu, xây dựng mạng kết nối chi phí nhỏ nhất và luồng cực đại trên đồ thị. Nội dung phân tầng rõ điều kiện áp dụng của từng thuật toán: từ duyệt theo chiều rộng (BFS) và chiều sâu (DFS), phân loại cạnh, phát hiện chu trình, sắp xếp topo trên DAG và phân rã thành phần liên thông mạnh (SCC — Kosaraju/Tarjan), đến bài toán đường đi ngắn nhất từ một nguồn với bốn trường hợp trọng số (không trọng số: BFS; trọng số 0/1: 0-1 BFS; trên DAG: quy hoạch động theo thứ tự topo; trọng số không âm: Dijkstra; có trọng số âm và phát hiện chu trình âm: Bellman–Ford) và mọi cặp đỉnh (Floyd–Warshall, Johnson). Tiếp theo là cây khung nhỏ nhất (Kruskal, Prim dựa trên tính chất lát cắt), đường đi Euler/Hamilton, cùng bài toán luồng cực đại – lát cắt cực tiểu (Ford–Fulkerson, Edmonds–Karp) và cặp ghép trên đồ thị hai phía.',
    ],
    prerequisites: [
      { courseId: 'data-structures', type: 'required', reason: 'Cần hàng đợi, ngăn xếp, hàng đợi ưu tiên (min-heap), Disjoint Set Union và biểu diễn đồ thị.' },
      { courseId: 'algorithms-design-analysis', type: 'required', reason: 'Cần tư duy tham lam, quy hoạch động và chứng minh bất biến.' },
    ],
    plannedChapters: [
      { id: 'ga-traversal-dag-scc', title: 'Duyệt đồ thị (BFS, DFS), sắp xếp Topo và Thành phần liên thông mạnh (SCC)', summary: 'Cây BFS và khoảng cách theo số cạnh, thời gian vào/ra của DFS, phân loại cạnh (tree, back, forward, cross), phát hiện chu trình, sắp xếp topo (Kahn & DFS) và thuật toán Kosaraju/Tarjan tìm SCC.', primaryLocator: "erickson-algorithms: Ch. 5 Basic Graph Algorithms; Ch. 6 Depth-First Search; mit-6006-2020: Lectures 9–10" },
      { id: 'ga-shortest-paths-sssp', title: 'Đường đi ngắn nhất từ một nguồn và điều kiện trọng số', summary: 'Phép nới lỏng cạnh (relaxation), quy hoạch động đường đi ngắn nhất trên DAG, thuật toán Dijkstra cho trọng số không âm (và phản ví dụ khi có cạnh âm), thuật toán Bellman–Ford giải trọng số âm và phát hiện chu trình âm.', primaryLocator: "erickson-algorithms: Ch. 8 Shortest Paths; mit-6006-2020: Lectures 11–13" },
      { id: 'ga-all-pairs-shortest-paths', title: 'Đường đi ngắn nhất giữa mọi cặp đỉnh (APSP)', summary: 'Quy hoạch động theo tập đỉnh trung gian trong thuật toán Floyd–Warshall O(V^3) và kỹ thuật tái gán trọng số không âm trong thuật toán Johnson O(V E + V^2 log V).', primaryLocator: "erickson-algorithms: Ch. 9 All-Pairs Shortest Paths; mit-6006-2020: Lecture 14: Johnson" },
      { id: 'ga-minimum-spanning-trees', title: 'Cây khung nhỏ nhất (MST), tính chất lát cắt và chu trình', summary: 'Bài toán kết nối mạng chi phí cực tiểu, định lý cạnh an toàn trên lát cắt (Cut Property), thuật toán Kruskal (với DSU), thuật toán Prim và Borůvka.', primaryLocator: "erickson-algorithms: Ch. 7 Minimum Spanning Trees" },
      { id: 'ga-flows-cuts-matching', title: 'Luồng cực đại, lát cắt cực tiểu và cặp ghép đồ thị hai phía', summary: 'Mạng luồng, đồ thị thặng dư (residual graph), đường tăng luồng, định lý Max-Flow Min-Cut của Ford–Fulkerson, thuật toán Edmonds–Karp và quy dẫn bài toán cặp ghép cực đại về luồng.', primaryLocator: "erickson-algorithms: Ch. 10 Maximum Flows and Minimum Cuts; Ch. 11 Applications" },
    ],
    boundaries: [
      'Tuyệt đối không gộp chung các thuật toán đường đi ngắn nhất; mỗi thuật toán phải gắn với tiền điều kiện trọng số cạnh và phản ví dụ khi vi phạm điều kiện đó.',
    ],
    sources: [
      { sourceId: 'erickson-algorithms', locator: 'Chapters 5–11 (Basic Graph Algorithms, DAGs, MSTs, Shortest Paths, All-Pairs Shortest Paths, Maximum Flows & Minimum Cuts, Applications of Flows)', relationship: 'primary' },
      { sourceId: 'mit-6006-2020', locator: 'Lectures 9–14 (Breadth-First Search, Depth-First Search, Weighted Shortest Paths, Bellman-Ford, Dijkstra, APSP)', relationship: 'primary' },
    ],
  },
  {
    id: 'advanced-algorithms',
    code: 'CS-18',
    title: 'Thuật toán mở rộng',
    blockId: 'block-3',
    level: 'extension',
    overview: [
      'Môn học mở rộng hộp công cụ thuật toán sang các miền bài toán chuyên biệt thường gặp trong hệ thống tìm kiếm văn bản, cơ sở dữ liệu, mật mã, đồ họa và tối ưu tổ hợp. Nội dung gồm các thuật toán khớp chuỗi văn bản (Knuth–Morris–Pratt, hàm tiền tố, Z-algorithm, băm cuốn Rabin–Karp, Aho–Corasick cơ sở), cấu trúc dữ liệu truy vấn trên đoạn (mảng cộng dồn, bảng thưa Sparse Table, cây Fenwick, cây phân đoạn Segment Tree và cập nhật lười), thuật toán số học nâng cao, thuật toán ngẫu nhiên (Monte Carlo vs Las Vegas), thuật toán xấp xỉ có tỷ lệ bảo đảm cho bài toán khó và hình học tính toán nhập môn (tích có hướng, bao lồi).',
    ],
    prerequisites: [
      { courseId: 'algorithms-design-analysis', type: 'required', reason: 'Cần nắm chắc chia để trị, quy hoạch động và phân tích tiệm cận.' },
      { courseId: 'graph-algorithms', type: 'required', reason: 'Cần nền tảng đồ thị, cây và luồng.' },
      { courseId: 'probability', type: 'required', reason: 'Cần xác suất cho phân tích thuật toán ngẫu nhiên và băm chuỗi.' },
    ],
    plannedChapters: [
      { id: 'aa-string-algorithms', title: 'Thuật toán xử lý chuỗi và khớp mẫu chính xác', summary: 'Băm đa thức Rabin–Karp và xác suất va chạm, tự động hữu hạn chuỗi, hàm tiền tố và thuật toán Knuth–Morris–Pratt (KMP) tuyến tính.', primaryLocator: "cp-algorithms: String Processing: Prefix function; Z-function; Rabin-Karp; Aho-Corasick" },
      { id: 'aa-range-query-structures', title: 'Cấu trúc dữ liệu truy vấn và cập nhật trên đoạn', summary: 'Phân tách thao tác tĩnh (Prefix Sum, Sparse Table cho bài toán RMQ) và động (cây Fenwick/Binary Indexed Tree, cây phân đoạn Segment Tree và Lazy Propagation).', primaryLocator: "cp-algorithms: Sparse Table; Fenwick Tree; Segment Tree" },
      { id: 'aa-randomized-approximation', title: 'Thuật toán ngẫu nhiên và thuật toán xấp xỉ có cận bảo đảm', summary: 'Phân biệt Las Vegas (luôn đúng, thời gian kỳ vọng đa thức) và Monte Carlo (thời gian xác định, xác suất sai số có cận), cùng thuật toán xấp xỉ cho Vertex Cover, Set Cover và TSP metric.', primaryLocator: "erickson-algorithms: Discrete Probability notes; Approximation Algorithms notes; cp-algorithms: Primality tests; Binary Exponentiation" },
      { id: 'aa-computational-geometry-intro', title: 'Hình học tính toán nhập môn', summary: 'Biểu diễn điểm/đoạn thẳng tránh sai số dấu chấm động, phép kiểm tra hướng rẽ bằng tích có hướng (orientation predicate), kiểm tra giao điểm đoạn thẳng và thuật toán tìm bao lồi (Convex Hull).', primaryLocator: "cp-algorithms: Basic Geometry; Check if two segments intersect; Convex hull construction" },
    ],
    boundaries: [
      'Đánh dấu rõ là môn mở rộng (extension); không đồng nhất việc giải đố lập trình thi đấu (competitive programming) với toàn bộ nền tảng Khoa học Máy tính.',
    ],
    sources: [
      { sourceId: 'cp-algorithms', locator: 'String Processing, Data Structures (Fenwick/Segment Trees), and Geometry Sections', relationship: 'primary' },
      { sourceId: 'erickson-algorithms', locator: 'Selected Advanced Topics & Randomized Algorithms Notes', relationship: 'supplementary' },
    ],
  },
  {
    id: 'formal-languages-computability',
    code: 'CS-19',
    title: 'Ngôn ngữ hình thức và khả năng tính toán',
    blockId: 'block-3',
    level: 'core',
    overview: [
      'Môn học khảo sát câu hỏi nền tảng nhất của Khoa học Máy tính: máy tính có thể và không thể giải quyết những bài toán nào bằng thuật toán hữu hạn? Nội dung đi theo phân cấp Chomsky từ các mô hình bộ nhớ hữu hạn đến mô hình tính toán tổng quát: ngôn ngữ chính quy, otomat hữu hạn đơn định và không đơn định (DFA/NFA), biểu thức chính quy và bổ đề bơm (Pumping Lemma) chứng minh một ngôn ngữ không chính quy; văn phạm phi ngữ cảnh (CFG) và otomat đẩy xuống (PDA) làm nền tảng cho bộ phân tích cú pháp; Máy Turing, luận đề Church–Turing, sự khác biệt giữa tập đếm được và không đếm được (chứng minh đường chéo hóa Cantor), bài toán dừng (Halting Problem), tính quyết định được (decidability), quy dẫn ánh xạ (mapping reductions) và định lý Rice.',
    ],
    prerequisites: [
      { courseId: 'discrete-math', type: 'required', reason: 'Cần nắm chắc logic, tập hợp, hàm song ánh, chứng minh phản chứng và quy nạp cấu trúc.' },
      { courseId: 'algorithms-design-analysis', type: 'required', reason: 'Cần khái niệm thuật toán xác định để đối chiếu với mô hình máy Turing.' },
    ],
    plannedChapters: [
      { id: 'flc-regular-languages-automata', title: 'Ngôn ngữ chính quy, Otomat hữu hạn (DFA/NFA) và Biểu thức chính quy', summary: 'Bảng chữ cái, chuỗi, ngôn ngữ, mô hình DFA và NFA, phép dựng tập con (subset construction) chứng minh DFA tương đương NFA, biểu thức chính quy và Bổ đề bơm.', primaryLocator: "erickson-algorithms: Models of Computation notes 1–4; mit-6045j-2011: Lectures 3–5: DFA/NFA; regular expressions; pumping lemma" },
      { id: 'flc-context-free-grammars-pda', title: 'Văn phạm phi ngữ cảnh (CFG), cây dẫn xuất và Otomat đẩy xuống (PDA)', summary: 'Quy tắc sản xuất, tính nhập nhằng (ambiguity) của văn phạm, dạng chuẩn Chomsky (CNF), mô hình PDA có ngăn xếp và giới hạn của ngôn ngữ phi ngữ cảnh.', primaryLocator: "erickson-algorithms: Models of Computation: 5 Context-Free Languages and Grammars; illinois-cs273-notes: Ch. 13 Pushdown Automatas; Ch. 15 CFG to PDA; Ch. 17 PDA to CFG conversion" },
      { id: 'flc-turing-machines-church-turing', title: 'Máy Turing, tính tương đương của các mô hình và Luận đề Church–Turing', summary: 'Định nghĩa hình thức của Máy Turing, các biến thể (đa băng, không đơn định), máy Turing vạn năng (Universal Turing Machine — chương trình như dữ liệu) và phân biệt ngôn ngữ nhận biết được (Turing-recognizable) với quyết định được (decidable).', primaryLocator: "erickson-algorithms: Models of Computation: 6 Turing Machines; 8 Universal Models; 9 Nondeterministic Turing Machines; mit-6045j-2011: Lectures 6–7" },
      { id: 'flc-undecidability-reductions', title: 'Chứng minh đường chéo hóa, Bài toán dừng (Halting Problem) và Quy dẫn bất khả quyết', summary: 'Tập vô hạn đếm được vs không đếm được, chứng minh Bài toán dừng không quyết định được, kỹ thuật quy dẫn A <=_m B và Định lý Rice về các tính chất ngữ nghĩa không tầm thường của chương trình.', primaryLocator: "erickson-algorithms: Models of Computation: 7 Undecidability; mit-6045j-2011: Lectures 8–9: Undecidability; mapping reductions and Rice’s theorem" },
    ],
    boundaries: [
      'Phân biệt biểu thức chính quy trong lý thuyết ngôn ngữ hình thức với regex mở rộng có backreference trong thư viện ngôn ngữ lập trình thực tế.',
    ],
    sources: [
      { sourceId: 'mit-6045j-2011', locator: 'Lectures 1–12 (Finite Automata, Regular Expressions, CFGs, Turing Machines, Undecidability, Rice\'s Theorem)', relationship: 'primary' },
    ],
  },
  {
    id: 'computational-complexity',
    code: 'CS-20',
    title: 'Độ phức tạp tính toán',
    blockId: 'block-3',
    level: 'core',
    overview: [
      'Nếu môn Khả năng tính toán phân ranh giới giữa bài toán giải được và không giải được, thì môn Độ phức tạp tính toán phân loại các bài toán giải được theo lượng tài nguyên (thời gian và không gian bộ nhớ) cần thiết khi kích thước mã hóa đầu vào tăng lên. Nội dung trình bày cách đo kích thước đầu vào theo số bit mã hóa (phân biệt đa thức thực với giả đa thức — pseudo-polynomial), lớp P, lớp NP dưới cả hai góc nhìn (máy Turing không đơn định đa thức và bộ kiểm chứng đa thức — polynomial-time verifier với chứng cứ ngắn), lớp co-NP, khái niệm quy dẫn thời gian đa thức (Karp/Cook reductions), định lý Cook–Levin cho bài toán SAT, chuỗi các bài toán NP-đầy đủ kinh điển (3-SAT, Clique, Independent Set, Vertex Cover, Hamiltonian Cycle, Subset Sum, Knapsack), độ phức tạp không gian (PSPACE) và các chiến lược kỹ nghệ khi đối diện bài toán NP-khó.',
    ],
    prerequisites: [
      { courseId: 'formal-languages-computability', type: 'required', reason: 'Cần mô hình Máy Turing, ngôn ngữ quyết định và kỹ thuật quy dẫn.' },
      { courseId: 'graph-algorithms', type: 'required', reason: 'Cần nắm các bài toán đồ thị đa thức (2-SAT, MST, Shortest Path, Matching) để đối chiếu với các bài toán đồ thị NP-khó (3-SAT, TSP, Clique).' },
    ],
    plannedChapters: [
      { id: 'cc-encoding-time-classes-p-np', title: 'Mã hóa đầu vào, lớp phức tạp thời gian, lớp P và lớp NP', summary: 'Ảnh hưởng của cách mã hóa số nguyên (nhị phân vs nhất phân) lên độ phức tạp, định nghĩa lớp TIME(f(n)), lớp P, định nghĩa lớp NP qua bộ kiểm chứng (verifier) và chứng cứ (certificate), cùng bài toán mở P vs NP.', primaryLocator: "erickson-algorithms: Ch. 12 NP-Hardness; mit-6045-2020: Lectures 13–14: Time Complexity; P and NP" },
      { id: 'cc-polynomial-reductions-cook-levin', title: 'Quy dẫn thời gian đa thức, tính NP-khó, NP-đầy đủ và Định lý Cook–Levin', summary: 'Định nghĩa A <=_P B, chiều đúng của phép quy dẫn để chứng minh tính khó (quy dẫn bài toán đã biết là NP-khó sang bài toán mới), ý tưởng định lý Cook–Levin đưa bài toán mạch/máy Turing về SAT và 3-SAT.', primaryLocator: "mit-6045-2020: Lecture 15: Polynomial-Time Reductions; Cook–Levin; NP-completeness; mit-6045j-2011: Lecture 16: NP-completeness; erickson-algorithms: Ch. 12 NP-Hardness" },
      { id: 'cc-classic-np-complete-problems', title: 'Hệ thống các bài toán NP-đầy đủ kinh điển và sai lầm thường gặp khi quy dẫn', summary: 'Chuỗi quy dẫn từ 3-SAT sang Independent Set, Vertex Cover, Clique, Hamiltonian Cycle/TSP, 3-Coloring và Subset Sum; phân tích lỗi quy dẫn ngược chiều.', primaryLocator: "erickson-algorithms: Ch. 12 NP-Hardness; mit-6045-2020: Lecture 16: Clique; Vertex Cover; Independent Set; Subset Sum; Knapsack" },
      { id: 'cc-space-complexity-coping-strategies', title: 'Độ phức tạp không gian (L, PSPACE) và chiến lược giải quyết bài toán NP-khó', summary: 'Quan hệ giữa thời gian và không gian, định lý Savitch, và các hướng tiếp cận thực tế khi gặp bài toán NP-khó: giải đúng trên trường hợp đặc biệt (cây, DAG), tham số hóa (FPT), xấp xỉ có cận, hoặc dùng bộ giải SAT/ILP.', primaryLocator: "mit-6045-2020: Lectures 19–20: Space Complexity; PSPACE-complete problems; erickson-algorithms: Ch. 12 NP-Hardness; Approximation Algorithms; Fast Exponential Algorithms" },
    ],
    boundaries: [
      'Khẳng định rõ: NP là viết tắt của Nondeterministic Polynomial time (thời gian đa thức không đơn định), tuyệt đối không có nghĩa là "Not Polynomial" (không đa thức); và P != NP hiện vẫn là giả thuyết mở chưa được chứng minh.',
    ],
    sources: [
      { sourceId: 'erickson-algorithms', locator: 'Chapter 12: NP-Hardness (§12.1–12.16)', relationship: 'primary' },
      { sourceId: 'mit-6045j-2011', locator: 'Lectures 13–19 (Complexity Theory, P vs NP, NP-Completeness, Space Complexity)', relationship: 'primary' },
    ],
  },
  {
    id: 'programming-languages-foundations',
    code: 'CS-21',
    title: 'Nền tảng ngôn ngữ lập trình',
    blockId: 'block-3',
    level: 'core',
    overview: [
      'Môn học tách các nguyên lý ngữ nghĩa phổ quát của ngôn ngữ lập trình ra khỏi cú pháp bề mặt của từng ngôn ngữ riêng lẻ. Nội dung nghiên cứu cách một chương trình được biểu diễn thành cây cú pháp trừu tượng (AST) và được đánh giá trong mô hình môi trường (environment model): sự gắn kết tên–giá trị (binding), tầm vực tĩnh (lexical/static scoping) so với tầm vực động (dynamic scoping), hàm như giá trị hạng nhất (first-class functions), bao đóng (closures), thứ tự đánh giá nghiêm ngặt (eager/applicative) so với đánh giá lười (lazy/normal-order), biến đổi trạng thái so với dữ liệu bất biến, hệ thống kiểu tĩnh/động, kiểm tra kiểu và suy diễn kiểu cơ bản, cùng cấu trúc của một bộ thông dịch (interpreter).',
    ],
    prerequisites: [
      { courseId: 'object-oriented-programming', type: 'required', reason: 'Cần kinh nghiệm với một ngôn ngữ biên dịch tĩnh (C++) để đối chiếu các cơ chế ngôn ngữ.' },
      { courseId: 'data-structures', type: 'required', reason: 'Cần cấu trúc cây (AST), bảng băm (bảng ký hiệu/môi trường) và ngăn xếp.' },
      { courseId: 'formal-languages-computability', type: 'recommended', reason: 'Văn phạm phi ngữ cảnh (CFG) giúp hiểu rõ quá trình phân tích cú pháp (parsing).' },
    ],
    plannedChapters: [
      { id: 'plf-syntax-ast-evaluation', title: 'Cú pháp bề mặt, Cây cú pháp trừu tượng (AST) và thứ tự đánh giá biểu thức', summary: 'Phân tích từ vựng (lexing) và phân tích cú pháp (parsing) thành AST, phân biệt biểu thức (expression) với câu lệnh (statement), đánh giá applicative-order vs normal-order và short-circuiting.', primaryLocator: "composing-programs: Version 2 (/pages/): §1.2 Elements of Programming; §1.5 Control; §3.4 Interpreters for Languages with Combination; crafting-interpreters: Ch. 4 Scanning; Ch. 5 Representing Code; Ch. 6 Parsing Expressions; Ch. 7 Evaluating Expressions; sicp-comparison: §1.1.5 The Substitution Model — Applicative order versus normal order; §4.2.2 An Interpreter with Lazy Evaluation — memoized thunks" },
      { id: 'plf-environments-scope-closures', title: 'Mô hình môi trường, tầm vực tĩnh (Lexical Scope) và Bao đóng (Closures)', summary: 'Khung môi trường (environment frames), chuỗi tra cứu tên biến theo vị trí định nghĩa trong mã nguồn (lexical scoping), hàm bậc cao và cách closure giữ lại môi trường tạo ra nó.', primaryLocator: "composing-programs: Version 2 (/pages/): §1.3 Defining New Functions; §1.6 Higher-Order Functions; §3.5; crafting-interpreters: Ch. 8 Statements and State; Ch. 10 Functions; Ch. 11 Resolving and Binding" },
      { id: 'plf-state-mutation-type-systems', title: 'Trạng thái khả biến, tính bất biến và Hệ thống kiểu dữ liệu', summary: 'Hệ quả của phép gán và chia sẻ định danh đối tượng (identity vs equality), lập trình hàm bất biến, kiểm tra kiểu tĩnh vs động, an toàn kiểu (type soundness) và đa hình tham số (generics).', primaryLocator: "composing-programs: Version 2 (/pages/): §2.4 Mutable Data; §2.7 Object Abstraction; crafting-interpreters: Ch. 7: Design Note Static and Dynamic Typing; cornell-cs6110-2011: Lecture 26 §1: Soundness from the Operational Perspective" },
      { id: 'plf-interpreters-runtime-models', title: 'Kiến trúc bộ thông dịch (Tree-Walk Interpreter) và quản lý bộ nhớ tự động', summary: 'Vòng lặp Eval–Apply đệ quy trên AST, biểu diễn giá trị lúc chạy, xử lý luồng điều khiển và nguyên lý thu gom rác cơ bản (Reference Counting vs Tracing Mark-and-Sweep).', primaryLocator: "composing-programs: Version 2 (/pages/): §3.3 Exceptions; §3.4; §3.5; §2.9 Recursive Objects: Garbage Collection; crafting-interpreters: Ch. 7–10; Ch. 18 Types of Values; Ch. 26 Garbage Collection" },
    ],
    boundaries: [
      'Tập trung vào ngữ nghĩa ngôn ngữ và mô hình đánh giá; các kỹ thuật biên dịch tối ưu hóa mã máy, thanh ghi và SSA được đặt ở Nhánh chuyên sâu Compiler & Runtime (Khối VII).',
    ],
    sources: [
      { sourceId: 'composing-programs', locator: 'Chapters 1–3 (Functions, Data, State, and Interpreting Computer Programs)', relationship: 'primary' },
      { sourceId: 'crafting-interpreters', locator: 'Part II: A Tree-Walk Interpreter (Chapters 4–11) & Chapter 26 (Garbage Collection)', relationship: 'primary' },
    ],
  },
];
