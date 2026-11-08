# Danh Mục Môn Học Toàn Chương Trình Khoa Học Máy Tính (CS Syllabus v3 — M1)

> **Trạng thái:** M1 Hoàn tất kiểm định cấu trúc & đối chiếu ACM/IEEE/AAAI CS2023.
> **Tổng số khối kiến thức:** 7 khối | **Tổng số môn học:** 50 môn (`CS-01` đến `CS-50`) | **Tổng số nguồn gốc đã đăng ký:** 52 nguồn.

## 1. Triết lý tổ chức từ con số 0

Chương trình được thiết kế cho người tự học bắt đầu hoàn toàn từ con số 0 (chưa biết sử dụng dòng lệnh, chưa từng viết chương trình, nền tảng toán học phổ thông cần được củng cố lại từ đầu) và tiến dần một cách tuần tự đến chuẩn Cử nhân Khoa học Máy tính hoàn chỉnh theo khung tham chiếu quốc tế ACM/IEEE/AAAI CS2023 kết hợp chiều sâu toán học của MIT 6.042J, DMOI, CLRS, OSTEP và CS:APP. Khác với danh sách nhiệm vụ rời rạc trước đây, mỗi môn học trong danh mục này được định nghĩa bằng đối tượng nghiên cứu, câu hỏi cốt lõi, phạm vi chương mục, điều kiện tiên quyết phân loại rõ (`required`, `recommended`, `co_requisite`) và giới hạn phạm vi học thuật minh bạch (`boundaries`).

## 2. Tổng quan 7 Khối Kiến Thức

| Mã khối | Tên khối kiến thức | Số môn | Mục tiêu học thuật cốt lõi |
| :--- | :--- | :---: | :--- |
| `block-1` | **Khối I — Bắt đầu từ số 0** | 6 | Xây dựng mặt bằng xuất phát cho người chưa từng học Khoa học Máy tính: từ mô hình tệp, thư mục, tiến trình và môi trường dòng lệnh, qua cầu nối toán học sơ cấp, tư duy tính toán, lập trình nhập môn, thiết kế chương trình và gỡ lỗi, đến quản lý phiên bản mã nguồn bằng Git. |
| `block-2` | **Khối II — Lập trình và toán nền CS** | 8 | Đào sâu mô hình bộ nhớ vật lý và quyền sở hữu tài nguyên trong C++, thiết kế hướng đối tượng, cùng hệ thống 6 trụ cột toán học nền tảng của Khoa học Máy tính: Toán rời rạc, Đại số tuyến tính, Giải tích một biến, Giải tích nhiều biến và tối ưu, Xác suất, và Thống kê suy luận. |
| `block-3` | **Khối III — Cấu trúc dữ liệu, thuật toán và lý thuyết** | 7 | Nghiên cứu cách tổ chức dữ liệu trong bộ nhớ, các mô hình thiết kế và phân tích độ phức tạp thuật toán, thuật toán trên đồ thị, các kỹ thuật thuật toán mở rộng, cùng nền tảng lý thuyết tính toán (automata, khả năng tính được, độ phức tạp P/NP) và ngữ nghĩa ngôn ngữ lập trình. |
| `block-4` | **Khối IV — Hệ thống máy tính** | 7 | Đi xuyên suốt từ mức cổng logic và mạch số, lên kiến trúc tập lệnh và vi kiến trúc CPU/Cache, giao diện lập trình hệ thống Unix/Linux, cơ chế bên trong của hệ điều hành (ảo hóa CPU, bộ nhớ ảo, hệ thống tệp), lập trình đồng thời và song song, mạng máy tính TCP/IP đến các hệ thống phân tán chịu lỗi. |
| `block-5` | **Khối V — Dữ liệu và xây dựng phần mềm** | 6 | Nghiên cứu mô hình dữ liệu quan hệ, đại số quan hệ, chuẩn hóa và giao dịch SQL, đi sâu vào kiến trúc bên trong hệ quản trị cơ sở dữ liệu (lưu trữ trang, B+Tree, tối ưu hóa truy vấn, MVCC, WAL recovery), cùng các nguyên lý kỹ nghệ phần mềm quy mô lớn, kiến trúc ứng dụng Web, vận hành hệ thống tin cậy và bảo mật. |
| `block-6` | **Khối VI — Trí tuệ, tương tác và các nền tảng** | 8 | Mở rộng độ rộng chương trình sang các lĩnh vực nền tảng của Khoa học Máy tính hiện đại: Trí tuệ nhân tạo cổ điển và suy luận xác suất, Học máy thống kê, Học sâu và các kiến trúc mô hình hiện đại, Đồ họa máy tính, Tương tác người–máy (HCI), Hệ thống di động – nhúng – thời gian thực, Tính toán khoa học, cùng Đạo đức và phương pháp nghiên cứu. |
| `block-7` | **Khối VII — Syllabus chuyên sâu và tổng hợp** | 8 | Cung cấp các chương trình đào sâu có cấu trúc (Structured Specialization Syllabi) đi từ môn nền đã học sang các cơ chế nâng cao cho từng hướng chuyên ngành (Hệ điều hành & Hệ thống, Hệ quản trị dữ liệu & Lưu trữ, Trình biên dịch & Runtime, Hệ phân tán & Thuật toán nâng cao, Thị giác máy tính, Xử lý ngôn ngữ tự nhiên, Bảo mật chuyên sâu) và môn Đồ án tổng hợp. |

---

## Khối I — Bắt đầu từ số 0

Xây dựng mặt bằng xuất phát cho người chưa từng học Khoa học Máy tính: từ mô hình tệp, thư mục, tiến trình và môi trường dòng lệnh, qua cầu nối toán học sơ cấp, tư duy tính toán, lập trình nhập môn, thiết kế chương trình và gỡ lỗi, đến quản lý phiên bản mã nguồn bằng Git.

### CS-01: Làm quen máy tính và môi trường học (`computing-environment`)
- **Phân loại:** `core` | **Khối:** `block-1`
- **Điều kiện tiên quyết:** Không yêu cầu (Môn khởi đầu từ số 0).

**Bản chất và nội dung môn học:**

Môn học thiết lập mô hình trực quan nhưng chính xác về cách máy tính lưu trữ, định danh và thực thi thông tin trước khi người học viết dòng mã đầu tiên. Nội dung đi từ cấu trúc hệ thống tệp phân cấp, đường dẫn tuyệt đối và tương đối, phần mở rộng tệp và mã hóa văn bản (ASCII, UTF-8), đến sự phân biệt cốt lõi giữa bộ nhớ khả biến (RAM) và thiết bị lưu trữ bền vững. Phần tiếp theo giải thích vai trò của hệ điều hành, tiến trình ứng dụng, giao diện dòng lệnh (terminal/shell), biến môi trường và quy trình cài đặt trình biên dịch cùng trình soạn thảo mã nguồn.

**Cấu trúc chương mục:**
1. **Hệ thống tệp, thư mục, đường dẫn và mã hóa văn bản** (`ce-files-paths`): Cây thư mục, đường dẫn tuyệt đối/tương đối, byte vs code point vs ký tự UTF-8 hiển thị, phân biệt phần mở rộng tệp với định dạng nội dung. *(Nguồn chính: MIT Missing Semester (2020) Lecture 1: Course Overview + The Shell (/2020/course-overview/))*
2. **Bộ nhớ, lưu trữ bền vững và vai trò của hệ điều hành** (`ce-storage-memory-os`): Sự khác biệt giữa tệp trên đĩa và dữ liệu trong RAM khi chương trình chạy; khái niệm tiến trình và quyền truy cập cơ bản. *(Nguồn chính: MIT Missing Semester (2020) Lecture 5: Command-line Environment (/2020/command-line/) & Dive Into Systems Ch. 3 (§3.3), Ch. 11–13)*
3. **Giao diện dòng lệnh, trình soạn thảo và chuỗi công cụ biên dịch** (`ce-terminal-toolchain`): Mô hình nhập/xuất của shell, tham số dòng lệnh, đường dẫn tìm kiếm thực thi (PATH) và quy trình từ tệp mã nguồn sang tệp thực thi. *(Nguồn chính: LearnCpp Ch. 0 (§0.1–0.12) & MIT Missing Semester (2020) Lecture 1 (/2020/course-overview/) + Lecture 2 (/2020/shell-tools/))*
4. **Đọc tài liệu kỹ thuật và thông báo từ hệ thống** (`ce-docs-navigation`): Cấu trúc tài liệu tra cứu, đọc thông báo lỗi của hệ thống/trình biên dịch và thiết lập môi trường học tập tái lập. *(Nguồn chính: LearnCpp Ch. 0 (§0.9–0.12) & MIT Missing Semester (2020) Lecture 1 (/2020/course-overview/))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Không giả định người học đã biết sử dụng command line, trình biên dịch hay Git trước khi vào môn.
- Chưa đi vào lập trình kịch bản shell nâng cao (pipe phức tạp, awk/sed) hoặc cơ chế quản lý bảng trang của hệ điều hành (thuộc Môn 06, 24, 25).

- **Giáo trình / Nguồn chuẩn:** `mit-missing-semester` (The Missing Semester of Your CS Education (2020 Edition) — *2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/), Lecture 2: Shell Tools and Scripting (/2020/shell-tools/), Lecture 5: Command-line Environment (/2020/command-line/)*, vai trò: `primary`); `learncpp` (Learn C++ — Comprehensive C++ Programming Tutorials — *Chapter 0: Introduction / Getting Started (§0.1–0.12)*, vai trò: `supplementary`)

### CS-02: Toán nền cần dùng (`math-bridge`)
- **Phân loại:** `core` | **Khối:** `block-1`
- **Điều kiện tiên quyết:** Không yêu cầu (Môn khởi đầu từ số 0).

**Bản chất và nội dung môn học:**

Môn học đóng vai trò cầu nối toán học từ các phép tính số học cơ bản tới ngôn ngữ đại số và hàm số cần thiết để đọc hiểu Khoa học Máy tính từ số 0. Nội dung trình bày có hệ thống từ số nguyên, phân số, số thực, thứ tự thực hiện phép toán, đến biến số, biểu thức đại số, phương trình và bất phương trình (bao gồm giới thiệu dạng đại số và dạng lượng giác của số phức khi phương trình bậc hai vô nghiệm thực). Trên nền đó, môn học xây dựng khái niệm hàm số, miền xác định, đồ thị, phép hợp hàm, hàm ngược, lũy thừa, căn thức, hàm mũ và logarit (đặc biệt logarit cơ số 2 trong phép chia đôi không gian), hệ tọa độ Descartes, lượng giác cơ sở và ký hiệu tổng/tích hữu hạn.

**Cấu trúc chương mục:**
1. **Hệ thống số, phân số, tỷ lệ và thứ tự phép toán** (`mb-numbers-operations`): Số nguyên, số hữu tỉ, số thực, giá trị tuyệt đối, quy tắc dấu và điều kiện xác định của phép chia. *(Nguồn chính: OpenStax Prealgebra 2e Ch. 1–4)*
2. **Biến số, biểu thức đại số, phương trình, bất đẳng thức và số phức cơ sở** (`mb-variables-equations`): Biến như đại lượng tổng quát, biến đổi tương đương phương trình bậc nhất/bậc hai, bất đẳng thức cơ bản và biểu diễn số phức a + bi (liên hợp, mô-đun) khi biệt thức âm. *(Nguồn chính: OpenStax Prealgebra 2e Ch. 8–9 & Precalculus 2e Ch. 3 (§3.1 Complex Numbers, §3.2 Quadratic Functions))*
3. **Lũy thừa, căn thức, hàm mũ và logarit** (`mb-exponents-logarithms`): Quy tắc số mũ, định nghĩa logarit như phép toán ngược của lũy thừa, đổi cơ số và ý nghĩa của log_2(n) khi chia đôi liên tiếp. *(Nguồn chính: OpenStax Precalculus 2e Ch. 4 (§4.1–4.5))*
4. **Hàm số, miền xác định, đồ thị, hợp hàm và hàm ngược** (`mb-functions-graphs`): Ánh xạ đầu vào–đầu ra, miền xác định, tập giá trị, biểu diễn bằng bảng/công thức/đồ thị, phép hợp hàm và điều kiện khả nghịch. *(Nguồn chính: OpenStax Precalculus 2e Ch. 1 (§1.1–1.7))*
5. **Hệ tọa độ phẳng, lượng giác cơ sở và biểu diễn cực của số phức** (`mb-coordinates-trigonometry`): Khoảng cách Euclid, phương trình đường thẳng, đường tròn đơn vị, sin/cos/tan, mặt phẳng phức và dạng lượng giác r(cos theta + i sin theta). *(Nguồn chính: OpenStax Precalculus 2e Ch. 5–7 & §8.5 Polar Form of Complex Numbers)*
6. **Dãy số, ký hiệu tổng Sigma, tích Pi và đọc lập luận toán học** (`mb-sequences-summations`): Chỉ số chạy, biên dưới/trên, tách ghép tổng hữu hạn và cách đọc định nghĩa/điều kiện trong văn bản toán. *(Nguồn chính: MIT 6.042J §13.1 & DMOI 3e §2.1)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Cung cấp điểm kiểm tra đầu vào cho từng chương để người đã vững toán phổ thông đi nhanh, nhưng giữ đầy đủ nội dung cho người học lại từ đầu.
- Chưa sử dụng giới hạn vô cùng hay đạo hàm/tích phân của giải tích (thuộc Môn 11).

- **Giáo trình / Nguồn chuẩn:** `openstax-prealgebra-2e` (Prealgebra 2e — *Chapters 1–4, 8–9 (Foundations of Numbers & Equations)*, vai trò: `primary`); `openstax-precalculus-2e` (Precalculus 2e — *Chapter 1 (§1.1–1.7), Chapter 3 (§3.1 Complex Numbers, §3.2 Quadratic Functions), Chapter 4 (§4.1–4.5), Chapter 8 (§8.5 Polar Form of Complex Numbers)*, vai trò: `primary`)

### CS-03: Nhập môn CS và tư duy tính toán (`computational-thinking`)
- **Phân loại:** `core` | **Khối:** `block-1`
- **Điều kiện tiên quyết:**
  - `computing-environment` (*co_requisite*): Cần mô hình tệp và môi trường thực thi cơ bản để đối chiếu biểu diễn dữ liệu với máy tính thật.
  - `math-bridge` (*co_requisite*): Cần lũy thừa cơ số 2, logarit cơ số 2 và biến số cơ bản để theo dõi biểu diễn nhị phân và phép chia đôi không gian tìm kiếm.

**Bản chất và nội dung môn học:**

Môn học giới thiệu bản chất của Khoa học Máy tính như ngành học về biểu diễn thông tin và quy trình giải quyết vấn đề một cách hữu hạn, xác định. Nội dung bắt đầu từ cách mã hóa dữ liệu thế giới thực thành các trạng thái rời rạc, xác định rõ đầu vào (input), đầu ra (output) và tiền điều kiện/hậu điều kiện của một bài toán. Tiếp theo, môn học làm rõ khái niệm thuật toán, trạng thái máy, bước chuyển trạng thái, tính dừng, phân rã bài toán lớn thành các bài toán con độc lập, và sự khác biệt giữa bài toán, thuật toán giải bài toán với một chương trình cụ thể viết bằng một ngôn ngữ lập trình.

**Cấu trúc chương mục:**
1. **Biểu diễn thông tin và mã hóa trạng thái rời rạc** (`ct-information-representation`): Mã hóa nhị phân cơ sở, biểu diễn số không âm, ký tự và trạng thái logic đúng/sai. *(Nguồn chính: Harvard CS50x Week 0)*
2. **Bài toán, đặc tả vào/ra và khái niệm thuật toán hữu hạn** (`ct-problems-algorithms`): Phân biệt bài toán (problem specification), thực thể đầu vào (instance), thuật toán (algorithm) và chương trình (program). *(Nguồn chính: Harvard CS50x Week 0 & Erickson Ch. 0)*
3. **Trạng thái, bước chuyển và vết thực thi tuần tự – rẽ nhánh – lặp** (`ct-state-execution-trace`): Mô hình hóa quá trình tính toán như chuỗi biến đổi trạng thái hữu hạn; lần vết (trace) từng bước và điều kiện dừng. *(Nguồn chính: Harvard CS50x Week 0–1)*
4. **Trừu tượng hóa, phân rã mô-đun và giới hạn của mô hình** (`ct-abstraction-decomposition`): Tách giao diện (cái cần làm) khỏi cơ chế (cách thực hiện), đặt giả định rõ ràng và kiểm tra trường hợp biên. *(Nguồn chính: Composing Programs Ch. 1 (§1.1–1.4))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Không yêu cầu người học biết ký hiệu tiệm cận Big-O hay kiến trúc vi xử lý chi tiết trước khi học môn này.
- Chưa đi vào cú pháp chi tiết của một ngôn ngữ lập trình công nghiệp (thuộc Môn 04).

- **Giáo trình / Nguồn chuẩn:** `harvard-cs50x` (CS50x: Introduction to Computer Science — Syllabus & Weeks 0–5 — *Week 0 (Scratch / Computational Thinking) & Week 1 Notes*, vai trò: `primary`); `composing-programs` (Composing Programs — *Chapter 1: §1.1 Getting Started, §1.2 Elements of Programming, §1.3 Defining New Functions, & §1.4 Designing Functions*, vai trò: `supplementary`)

### CS-04: Lập trình nhập môn (`intro-programming`)
- **Phân loại:** `core` | **Khối:** `block-1`
- **Điều kiện tiên quyết:**
  - `computing-environment` (*required*): Cần biết thao tác tệp, đường dẫn, trình soạn thảo và gọi trình biên dịch từ terminal.
  - `computational-thinking` (*co_requisite*): Cần mô hình trạng thái, phân rã bài toán và lần vết thực thi để không học cú pháp một cách máy móc.
  - `math-bridge` (*co_requisite*): Cần nắm biến số, biểu thức đại số, phép chia nguyên/dư và hàm số cơ bản.

**Bản chất và nội dung môn học:**

Môn học xây dựng năng lực biểu diễn thuật toán thành chương trình thực thi hoàn chỉnh thông qua một ngôn ngữ trục duy nhất là C++ hiện đại ở mức vừa sức người mới bắt đầu. Nội dung đi tuần tự từ cấu trúc chương trình, quá trình biên dịch–liên kết, biến, giá trị, hệ thống kiểu dữ liệu cơ sở và biểu thức, đến các cấu trúc điều khiển rẽ nhánh và vòng lặp gắn với bất biến cơ bản. Trên nền đó, môn học trình bày cơ chế hàm, truyền tham số theo giá trị và tham chiếu hằng, phạm vi danh định (scope), thời gian sống tự động, xử lý chuỗi ký tự (`std::string`), mảng động (`std::vector`), cùng luồng nhập/xuất và xử lý trạng thái lỗi dữ liệu.

**Cấu trúc chương mục:**
1. **Chương trình đầu tiên, cấu trúc hàm main và mô hình nhập – xử lý – xuất** (`ip-execution-model`): Hành trình từ tệp mã nguồn .cpp qua trình biên dịch thành chương trình chạy được; cấu trúc hàm main, câu lệnh tuần tự, xuất/nhập cơ bản và phân biệt lỗi biên dịch với lỗi khi chạy. *(Nguồn chính: LearnCpp Ch. 0 (§0.4–0.5) & Ch. 1 (§1.1–1.11))*
2. **Biến, kiểu dữ liệu cơ sở, biểu thức và phép toán** (`ip-types-expressions`): Khởi tạo biến, kiểu số nguyên, kiểu số thực dấu chấm động, boolean, ký tự, hằng số, các toán tử số học/quan hệ/logic và quy tắc chuyển đổi kiểu an toàn. *(Nguồn chính: LearnCpp Ch. 4 (§4.1–4.12) & Ch. 6 (§6.1–6.8))*
3. **Cấu trúc điều khiển rẽ nhánh, vòng lặp và mô hình hóa bài toán nhỏ** (`ip-control-flow`): Câu lệnh điều kiện if/else, switch, đoản mạch logic, vòng lặp while/for, biến tích lũy, điều kiện dừng và bất biến vòng lặp sơ cấp. *(Nguồn chính: LearnCpp Ch. 8 (§8.1–8.11))*
4. **Hàm, truyền tham số, phạm vi biến và ngăn xếp lời gọi cơ bản** (`ip-functions-scope`): Phân rã bài toán thành hàm, tham số và giá trị trả về, truyền theo giá trị vs tham chiếu, phạm vi khối (block scope) và thời gian sống của biến cục bộ. *(Nguồn chính: LearnCpp Ch. 2 (§2.1–2.12), Ch. 7 (§7.1–7.5) & Ch. 12 (§12.3–12.6))*
5. **Mảng động std::vector, chuỗi std::string và kiểu bản ghi struct** (`ip-sequences-strings`): Lưu trữ và duyệt dãy phần tử với std::vector, đánh chỉ số 0-based và kiểm tra biên, thao tác văn bản với std::string, gom nhóm dữ liệu bằng struct (kèm phần mở rộng về std::string_view). *(Nguồn chính: LearnCpp Ch. 5 (§5.7–5.9), Ch. 13 (§13.7–13.10) & Ch. 16 (§16.1–16.8))*
6. **Luồng nhập/xuất tệp, xử lý đầu vào lỗi và chẩn đoán lỗi cơ bản** (`ip-io-error-handling`): Trạng thái luồng nhập/xuất, đọc/ghi tệp văn bản, kiểm tra dữ liệu đầu vào biên, đọc thông báo lỗi của trình biên dịch và lần vết trạng thái chương trình cơ bản. *(Nguồn chính: LearnCpp Ch. 3 (§3.1–3.5), Ch. 9 (§9.1–9.5) & Ch. 28 (§28.1–28.6))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Chỉ dùng một ngôn ngữ trục (C++) xuyên suốt môn để xây dựng mô hình thực thi vững chắc; không trộn Python, Java hay Rust ở giai đoạn nhập môn.
- Chưa đi vào cấp phát động thủ công (`new`/`delete`), số học con trỏ thô, kế thừa đa hình hay template nâng cao (thuộc Môn 07 và Môn 08).

- **Giáo trình / Nguồn chuẩn:** `learncpp` (Learn C++ — Comprehensive C++ Programming Tutorials — *Chapters 0, 1, 2, 4, 5, 6, 7, 8, 9, 12 (§12.3–12.6), 13 (§13.7), 16, 28*, vai trò: `primary`); `harvard-cs50x` (CS50x: Introduction to Computer Science — Syllabus & Weeks 0–5 — *Weeks 1–2 (C/C++ Compilation, Types, Arrays, Memory Basics)*, vai trò: `supplementary`)

### CS-05: Thiết kế chương trình và debug (`program-design-debugging`)
- **Phân loại:** `core` | **Khối:** `block-1`
- **Điều kiện tiên quyết:**
  - `intro-programming` (*required*): Cần viết và đọc được chương trình có hàm, vòng lặp, mảng và chuỗi để thực hành thiết kế và gỡ lỗi.

**Bản chất và nội dung môn học:**

Môn học chuyển trọng tâm từ việc viết một đoạn mã chạy được sang việc thiết kế chương trình có cấu trúc rõ ràng, kiểm chứng được tính đúng đắn và chẩn đoán lỗi bằng phương pháp khoa học. Nội dung bao gồm thiết kế hợp đồng hàm (tiền điều kiện, hậu điều kiện, bất biến), phân rã chức năng, kiểm soát trạng thái và tác dụng phụ (side effects), xây dựng bộ ca kiểm thử bao phủ trường hợp biên, quy trình tái hiện lỗi tối thiểu, và sử dụng trình gỡ lỗi (debugger) để quan sát call stack, biến cục bộ và luồng điều khiển.

**Cấu trúc chương mục:**
1. **Hợp đồng hàm, tiền điều kiện, hậu điều kiện và phân rã mô-đun** (`pdd-contracts-decomposition`): Đặc tả giao diện hàm, tách hàm thuần (pure computation) khỏi hàm có tác dụng phụ và sử dụng assertions. *(Nguồn chính: LearnCpp Ch. 9 (§9.1–9.6) & Composing Programs §1.2–1.4)*
2. **Phương pháp chẩn đoán lỗi theo giả thuyết và tái hiện tối thiểu** (`pdd-scientific-debugging`): Phân biệt triệu chứng (symptom) với nguyên nhân gốc (root cause), thu hẹp đầu vào gây lỗi và kiểm chứng giả thuyết thay vì sửa mò. *(Nguồn chính: LearnCpp Ch. 3 (§3.1–3.5) & MIT Missing Semester (2020) Lecture 7: Debugging and Profiling (/2020/debugging-profiling/))*
3. **Trình gỡ lỗi, điểm dừng (breakpoints), lần bước và khung ngăn xếp** (`pdd-debugger-callstack`): Cơ chế stepping (step into/over/out), conditional breakpoints, watch expressions và đọc backtrace khi chương trình dừng bất thường. *(Nguồn chính: LearnCpp Ch. 3 (§3.6–3.10) & MIT Missing Semester (2020) Lecture 7 (/2020/debugging-profiling/))*
4. **Thiết kế ca kiểm thử, phân vùng tương đương và kiểm thử hồi quy** (`pdd-testing-edge-cases`): Xây dựng test cho miền thông thường, biên rỗng, một phần tử, cực trị, đầu vào dị thường và tự động hóa kiểm tra kết quả. *(Nguồn chính: LearnCpp Ch. 9 (§9.2–9.3) & SWE at Google Ch. 11–12)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Tập trung vào lỗi logic, lỗi trạng thái và sử dụng debugger trên chương trình vừa sức; các công cụ AddressSanitizer/Valgrind gắn với lỗi con trỏ và cấp phát động được đặt ở Môn 07 sau khi học mô hình bộ nhớ.

- **Giáo trình / Nguồn chuẩn:** `learncpp` (Learn C++ — Comprehensive C++ Programming Tutorials — *Chapter 3 (Debugging C++ Programs) & Chapter 9 (Error Detection and Handling)*, vai trò: `primary`); `mit-missing-semester` (The Missing Semester of Your CS Education (2020 Edition) — *2020 Edition — Lecture 7: Debugging and Profiling (/2020/debugging-profiling/)*, vai trò: `supplementary`)

### CS-06: Git và công cụ phát triển (`git-dev-tools`)
- **Phân loại:** `core` | **Khối:** `block-1`
- **Điều kiện tiên quyết:**
  - `computing-environment` (*required*): Cần nắm vững cây thư mục, đường dẫn và giao diện dòng lệnh.
  - `intro-programming` (*required*): Cần có các tệp mã nguồn thực tế để quản lý phiên bản, biên dịch đa tệp và xử lý xung đột.

**Bản chất và nội dung môn học:**

Môn học trình bày cơ chế quản lý lịch sử mã nguồn và tự động hóa quy trình xây dựng phần mềm. Trọng tâm của phần Git là mô hình đồ thị có hướng không chu trình định địa chỉ theo nội dung (content-addressable DAG) gồm blob, tree, commit và tham chiếu nhánh, giúp người học hiểu bản chất của working tree, staging area, commit, diff, merge 3 chiều, giải quyết xung đột (conflict) và khôi phục trạng thái. Phần công cụ phát triển mở rộng sang dòng lệnh shell, đường ống dữ liệu (pipes), quản lý biên dịch nhiều tệp và môi trường tái lập.

**Cấu trúc chương mục:**
1. **Mô hình đối tượng bất biến của Git và ba vùng làm việc** (`gdt-git-object-model`): Cấu trúc blob/tree/commit, mã băm SHA, trạng thái tệp giữa Working Tree, Staging Area (Index) và Repository (.git). *(Nguồn chính: Pro Git 2e Ch. 1–2 & Ch. 10 (§10.1–10.3))*
2. **Nhánh, hợp nhất (Merge), tái định gốc (Rebase) và giải quyết xung đột** (`gdt-branching-merging`): Nhánh như con trỏ nhẹ tới commit, fast-forward merge vs 3-way merge, cơ chế phát sinh conflict và nguyên tắc lịch sử sạch. *(Nguồn chính: Pro Git 2e Ch. 3 (§3.1–3.6))*
3. **Truy vết lịch sử, khôi phục trạng thái và đồng bộ kho từ xa** (`gdt-history-recovery-remotes`): Đọc git log/diff/blame, sử dụng reflog/restore/revert/stash an toàn, mô hình fetch/pull/push với remote repository. *(Nguồn chính: Pro Git 2e Ch. 2 (§2.4–2.5), Ch. 6 & Ch. 7 (§7.7, §7.10))*
4. **Luồng chuẩn POSIX, đường ống và hệ thống biên dịch đa tệp** (`gdt-shell-build-systems`): Luồng stdin/stdout/stderr, kết nối công cụ bằng pipe, tách header/source và cấu hình hệ thống build (Make/CMake cơ bản). *(Nguồn chính: MIT Missing Semester (2020) Lecture 2 (/2020/shell-tools/), Lecture 4 (/2020/data-wrangling/), Lecture 8 (/2020/metaprogramming/) & LearnCpp Ch. 2 (§2.8–2.12))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Trọng tâm là hiểu mô hình dữ liệu của Git và quy trình build tái lập, không biến môn học thành danh sách học vẹt hàng chục cờ lệnh hiếm dùng.

- **Giáo trình / Nguồn chuẩn:** `pro-git-2e` (Pro Git (2nd Edition) — *Chapters 1–3 (Git Basics & Branching), Chapter 6, Chapter 7 (§7.7, §7.10), and Chapter 10 (Git Internals)*, vai trò: `primary`); `mit-missing-semester` (The Missing Semester of Your CS Education (2020 Edition) — *2020 Edition — Lecture 2: Shell Tools and Scripting (/2020/shell-tools/), Lecture 4: Data Wrangling (/2020/data-wrangling/), Lecture 6: Version Control (Git) (/2020/version-control/), Lecture 8: Metaprogramming (/2020/metaprogramming/)*, vai trò: `primary`)

---

## Khối II — Lập trình và toán nền CS

Đào sâu mô hình bộ nhớ vật lý và quyền sở hữu tài nguyên trong C++, thiết kế hướng đối tượng, cùng hệ thống 6 trụ cột toán học nền tảng của Khoa học Máy tính: Toán rời rạc, Đại số tuyến tính, Giải tích một biến, Giải tích nhiều biến và tối ưu, Xác suất, và Thống kê suy luận.

### CS-07: C++ và mô hình bộ nhớ (`cpp-memory-model`)
- **Phân loại:** `core` | **Khối:** `block-2`
- **Điều kiện tiên quyết:**
  - `intro-programming` (*required*): Cần nắm chắc kiểu dữ liệu, hàm, phạm vi biến và std::vector/std::string cơ bản.
  - `program-design-debugging` (*required*): Cần kỹ năng sử dụng debugger và đọc call stack trước khi chẩn đoán lỗi con trỏ và bộ nhớ động.

**Bản chất và nội dung môn học:**

Môn học đi sâu vào mối liên hệ giữa ngữ nghĩa ngôn ngữ C++ và mô hình bộ nhớ của máy tính. Nội dung phân tích địa chỉ bộ nhớ, con trỏ, tham chiếu, hiện tượng bí danh (aliasing), thời gian sống của đối tượng (storage duration: automatic, static, dynamic), sự khác biệt giữa ngăn xếp (stack) và vùng nhớ tự do (heap), cùng các lỗi kinh điển như dangling pointer, memory leak, double free và buffer overflow. Trên cơ sở đó, môn học xây dựng nguyên lý gắn vòng đời tài nguyên với vòng đời đối tượng (RAII), quyền sở hữu độc quyền/chia sẻ (`std::unique_ptr`, `std::shared_ptr`), ngữ nghĩa di chuyển (move semantics), khuôn mẫu (templates) đủ dùng và công cụ kiểm chứng bộ nhớ (AddressSanitizer, UndefinedBehaviorSanitizer).

**Cấu trúc chương mục:**
1. **Địa chỉ ô nhớ, con trỏ, tham chiếu và hiện tượng bí danh (Aliasing)** (`cppm-addresses-pointers-aliasing`): Biểu diễn địa chỉ, toán tử lấy địa chỉ và giải tham chiếu, null pointer, const correctness với con trỏ và tác động của aliasing. *(Nguồn chính: LearnCpp Ch. 12 (§12.1–12.14))*
2. **Thời gian sống đối tượng, phân vùng Stack/Heap và cấp phát động** (`cppm-lifetime-stack-heap`): Automatic vs static vs dynamic storage duration, chi phí cấp phát động, lỗi con trỏ treo (dangling), rò rỉ (leak) và giải phóng kép. *(Nguồn chính: LearnCpp Ch. 12 (§12.12), Ch. 19 (§19.1–19.5), Ch. 20 (§20.2) & Dive Into Systems Ch. 2, Ch. 3 (§3.3))*
3. **Nguyên lý RAII, mô hình quyền sở hữu và ngữ nghĩa di chuyển** (`cppm-raii-ownership-move`): Quản lý tài nguyên xác định qua destructor, lvalue/xvalue/prvalue, move constructor/assignment, std::unique_ptr, std::shared_ptr và Rule of Zero/Five. *(Nguồn chính: LearnCpp Ch. 12 (§12.2) & Ch. 22 (§22.1–22.7))*
4. **Khuôn mẫu tổng quát, bố cục bộ nhớ container và kiểm chứng bằng Sanitizer** (`cppm-templates-containers-sanitizers`): Hàm/lớp khuôn mẫu (templates), iterator invalidation khi std::vector cấp phát lại, phân biệt chuẩn ngôn ngữ với ABI, và phát hiện lỗi bằng ASan/UBSan/Valgrind. *(Nguồn chính: LearnCpp Ch. 11, Ch. 16, Dive Into Systems Ch. 3 (§3.3) & MIT Missing Semester (2020) Lecture 7 (/2020/debugging-profiling/))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Phân biệt rõ quy định của chuẩn ISO C++ về thời gian sống/hành vi không xác định với bố cục bộ nhớ cụ thể phụ thuộc trình biên dịch và kiến trúc (ABI).
- Không dồn template metaprogramming phức tạp vào phần con trỏ cơ bản.

- **Giáo trình / Nguồn chuẩn:** `learncpp` (Learn C++ — Comprehensive C++ Programming Tutorials — *Chapter 11 (Function Templates), Chapter 12 (§12.2 Value categories, §12.7–12.12 References and Pointers), Chapter 19 (Dynamic Allocation), Chapter 20 (§20.2 Stack and Heap), Chapter 22 (Move Semantics and Smart Pointers)*, vai trò: `primary`); `dive-into-systems` (Dive Into Systems — *Chapter 2 (§2.1–2.5 C Pointers and Dynamic Memory Allocation) & Chapter 3 (§3.3 Debugging Memory with Valgrind)*, vai trò: `supplementary`)

### CS-08: Lập trình hướng đối tượng (`object-oriented-programming`)
- **Phân loại:** `core` | **Khối:** `block-2`
- **Điều kiện tiên quyết:**
  - `cpp-memory-model` (*required*): Cần hiểu thời gian sống đối tượng, con trỏ/tham chiếu, RAII và quyền sở hữu trước khi học đa hình động và quản lý tài nguyên trong lớp.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu phương pháp tổ chức chương trình xung quanh các kiểu dữ liệu trừu tượng đóng gói trạng thái và bảo vệ bất biến (invariants). Nội dung đi từ thiết kế lớp, kiểm soát truy cập, hàm tạo/hàm hủy, hàm thành viên hằng và nạp chồng toán tử, đến sự phân biệt thiết kế giữa quan hệ chứa (composition) và kế thừa (inheritance). Phần tiếp theo trình bày cơ chế đa hình động qua hàm ảo (virtual functions), giao diện trừu tượng (abstract interfaces), quản lý tài nguyên trong cây phân cấp đa hình, các nguyên lý thiết kế giảm kết dính, và đối chiếu phạm vi phù hợp của OOP với thiết kế hàm thuần/dữ liệu phẳng.

**Cấu trúc chương mục:**
1. **Trừu tượng hóa dữ liệu, đóng gói và bất biến của lớp** (`oop-classes-invariants`): Bảo vệ bất biến trạng thái qua giao diện công khai, hàm tạo (constructors), danh sách khởi tạo thành viên, hàm hủy và đối tượng hằng. *(Nguồn chính: LearnCpp Ch. 14 (§14.1–14.16) & Ch. 15 (§15.1–15.9))*
2. **Ngữ nghĩa sao chép, nạp chồng toán tử và quan hệ hợp thành (Composition)** (`oop-copy-operators-composition`): Sao chép nông vs sâu, nạp chồng toán tử giữ ngữ nghĩa tự nhiên, và ưu tiên hợp thành (has-a) để giảm phụ thuộc. *(Nguồn chính: LearnCpp Ch. 21 (§21.1–21.14) & Ch. 23 (§23.1–23.3))*
3. **Kế thừa, điều phối động (Dynamic Dispatch) và giao diện trừu tượng** (`oop-inheritance-polymorphism`): Quan hệ is-a, thứ tự khởi tạo/hủy lớp cơ sở–dẫn xuất, hàm ảo, lớp trừu tượng thuần ảo, virtual destructor, hiện tượng object slicing và mô hình triển khai vtable/vptr điển hình. *(Nguồn chính: LearnCpp Ch. 24 (§24.1–24.9) & Ch. 25 (§25.1–25.11))*
4. **Nguyên lý thiết kế hướng đối tượng, mẫu thiết kế cốt lõi và giới hạn của OOP** (`oop-design-tradeoffs`): Nguyên lý tách giao diện, đảo ngược phụ thuộc, các mẫu Strategy/Factory/Observer giải quyết bài toán cụ thể, và khi nào thiết kế hàm thuần hiệu quả hơn lớp. *(Nguồn chính: SWE at Google Ch. 8–10 & Composing Programs §2.5–2.7)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Làm rõ rằng vtable/vptr là cơ chế triển khai phổ biến của ABI chứ không phải bố cục bộ nhớ cố định do chuẩn C++ bắt buộc.
- Không biến mọi thao tác tính toán đơn giản thành cây kế thừa phức tạp.

- **Giáo trình / Nguồn chuẩn:** `learncpp` (Learn C++ — Comprehensive C++ Programming Tutorials — *Chapters 14, 15, 21, 23, 24, 25 (Classes, Operator Overloading, Composition, Inheritance, Virtual Functions)*, vai trò: `primary`); `composing-programs` (Composing Programs — *Chapter 2: §2.5 Object-Oriented Programming & §2.7 Object Abstraction*, vai trò: `supplementary`)

### CS-09: Toán rời rạc và lập luận cho CS (`discrete-math`)
- **Phân loại:** `core` | **Khối:** `block-2`
- **Điều kiện tiên quyết:**
  - `math-bridge` (*required*): Cần nắm vững biến số, phương trình đa thức, số phức cơ sở, hàm số, lũy thừa, logarit và ký hiệu tổng cơ bản.
  - `computational-thinking` (*recommended*): Khái niệm trạng thái, bước chuyển trạng thái và điều kiện dừng giúp gắn kết trực tiếp logic và quy nạp với mô hình máy trạng thái.
  - `single-variable-calculus` (*recommended*): Toàn bộ phần cốt lõi (Chương 1–7, 9–10 và phần tổng đại số/tiệm cận của Chương 8) chỉ cần CS-02; riêng tiểu mục mở rộng về cận kẹp tích phân và xấp xỉ Stirling ở Chương 8 cần khái niệm tích phân xác định của CS-11.

**Bản chất và nội dung môn học:**

Môn học xây dựng nền tảng ngôn ngữ toán học và năng lực chứng minh chặt chẽ cho toàn bộ Khoa học Máy tính. Nội dung bao quát các cấu trúc rời rạc cốt lõi: tập hợp, dãy, hàm, quan hệ tương đương và thứ tự bộ phận; logic mệnh đề, đại số Boolean và logic vị từ với lượng từ; các phương pháp chứng minh trực tiếp, phản đảo, phản chứng và nguyên lý quy nạp toán học; định nghĩa đệ quy, quy nạp cấu trúc và bất biến máy trạng thái; số học nguyên, thuật toán Euclid và đồng dư modulo; lý thuyết đồ thị cơ sở, cây và đồ thị có hướng không chu trình (DAG); tổ hợp, nguyên lý song ánh, bù trừ và Dirichlet; ký hiệu tổng, tích và tiệm cận. Đặc biệt, môn học dành hai chương sâu cho Hệ thức đệ quy (từ mô hình hóa, khai triển lặp, hệ tuyến tính thuần nhất hệ số hằng, phương trình đặc trưng nghiệm đơn/nghiệm bội/nghiệm phức, đến hệ không thuần nhất và giới hạn áp dụng) cùng Hàm sinh (chuỗi lũy thừa hình thức, phép toán đại số và giải truy hồi).

**Cấu trúc chương mục:**
1. **Tập hợp, dãy, hàm và quan hệ hai ngôi** (`dm-sets-functions-relations`): Tập hợp, tập lũy thừa, tích Descartes, tính đơn ánh/toàn ánh/song ánh của hàm, quan hệ tương đương, phân hoạch và thứ tự bộ phận. *(Nguồn chính: MIT 6.042J §4.1–4.5 & §9.5–9.10)*
2. **Logic mệnh đề, đại số Boolean và logic vị từ** (`dm-logic-predicates`): Phép nối logic, bảng chân trị, kéo theo và phản đảo, tương đương logic, chuẩn tắc CNF/DNF, lượng từ phổ quát/tồn tại và quy tắc phủ định lượng từ. *(Nguồn chính: MIT 6.042J §3.1–3.6)*
3. **Phương pháp chứng minh toán học và nguyên lý quy nạp** (`dm-proofs-induction`): Cấu trúc suy luận hợp lệ, chứng minh trực tiếp, phản đảo, chia trường hợp, phản chứng, phản ví dụ, nguyên lý thứ tự tốt, quy nạp thường và quy nạp mạnh. *(Nguồn chính: MIT 6.042J §1.1–1.9, §2.1–2.4 & §5.1–5.3)*
4. **Định nghĩa đệ quy, quy nạp cấu trúc và bất biến máy trạng thái** (`dm-recursive-definitions-invariants`): Xây dựng kiểu dữ liệu đệ quy, chứng minh bằng quy nạp cấu trúc, mô hình máy trạng thái, bất biến bảo toàn (preserved invariant) và chứng minh tính dừng. *(Nguồn chính: MIT 6.042J §5.4 & Chapter 6 (§6.1–6.4))*
5. **Số học nguyên, ước chung lớn nhất và đồng dư modulo** (`dm-number-theory-modular`): Phép chia có dư, thuật toán Euclid, bổ đề Bézout, định lý cơ bản của số học, đồng dư thức, điều kiện khả nghịch modulo, định lý Fermat nhỏ và Euler. *(Nguồn chính: MIT 6.042J §8.1–8.9)*
6. **Lý thuyết đồ thị cơ sở, cây và cấu trúc phụ thuộc** (`dm-graphs-trees-posets`): Đồ thị vô hướng/có hướng, bậc đỉnh, đường đi, chu trình, tính liên thông, tính chất tương đương của cây, đồ thị hai phía và sắp xếp topo trên DAG. *(Nguồn chính: MIT 6.042J §9.1–9.11 & §11.1–11.10)*
7. **Nguyên lý đếm, song ánh, bù trừ và Dirichlet** (`dm-counting-combinatorics`): Quy tắc cộng/nhân, hoán vị, tổ hợp, đếm bằng ánh xạ song ánh và k-to-1, công thức nhị thức, nguyên lý bao hàm–loại trừ và nguyên lý chuồng bồ câu. *(Nguồn chính: MIT 6.042J §14.1–14.10)*
8. **Tổng hữu hạn, ước lượng tiệm cận và phương pháp kẹp tích phân** (`dm-sums-products-asymptotics`): Biến đổi tổng hữu hạn, cấp số nhân, tổng triệt tiêu, số điều hòa H_n, định nghĩa lượng từ của O/Omega/Theta/o/omega (cốt lõi) và tiểu mục mở rộng dùng cận tích phân/Stirling (cần CS-11). *(Nguồn chính: MIT 6.042J §13.1–13.7)*
9. **Hệ thức đệ quy (Recurrence Relations)** (`dm-recurrences`): Mô hình hóa và điều kiện đầu, khai triển lặp và kiểm chứng quy nạp, hệ tuyến tính thuần nhất hệ số hằng, phương trình đặc trưng với nghiệm phân biệt, nghiệm bội và nghiệm phức liên hợp, hệ không thuần nhất/nghiệm riêng và giới hạn áp dụng đối với truy hồi chia để trị. *(Nguồn chính: DMOI 3e §2.1, §2.4 & MIT 6.042J §21.1–21.4)*
10. **Hàm sinh và ứng dụng trong bài toán đếm – truy hồi** (`dm-generating-functions`): Biểu diễn dãy bằng chuỗi lũy thừa hình thức, phép dịch chỉ số và phép toán đại số, tổng chập (convolution), giải hệ thức đệ quy bằng phân thức tối giản và phân biệt chuỗi hình thức với hội tụ giải tích. *(Nguồn chính: MIT 6.042J §15.1–15.5)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Phần cốt lõi (core) của môn học không đòi hỏi giải tích; riêng tiểu mục mở rộng về phương pháp kẹp tích phân và công thức Stirling ở Chương 8 được gắn nhãn extension và khai báo rõ tiên quyết Giải tích một biến (CS-11).
- Phương trình đặc trưng chỉ áp dụng cho hệ thức đệ quy tuyến tính hệ số hằng; không áp dụng trực tiếp cho hệ thức phi tuyến hoặc truy hồi chia để trị dạng T(n) = aT(n/b) + f(n) (thuộc Môn 16).
- Phần xác suất rời rạc và liên tục được tách sang Môn 13 để học trọn vẹn từ không gian mẫu đến định lý giới hạn.

- **Giáo trình / Nguồn chuẩn:** `mit-6042j-2015` (Mathematics for Computer Science (MIT 6.042J Spring 2015) — *Chapters 1–6, 8–9, 11, 13–15, 21 (Mathematics for Computer Science Textbook & Readings)*, vai trò: `primary`); `dmoi-3e` (Discrete Mathematics: An Open Introduction — *Chapter 2: Sequences (§2.1 Describing Sequences & §2.4 Solving Recurrence Relations)*, vai trò: `primary`)

### CS-10: Đại số tuyến tính (`linear-algebra`)
- **Phân loại:** `core` | **Khối:** `block-2`
- **Điều kiện tiên quyết:**
  - `math-bridge` (*required*): Cần nắm hệ phương trình cơ bản, tọa độ phẳng và biến đổi đại số.
  - `discrete-math` (*recommended*): Tư duy chứng minh, tập hợp và ánh xạ từ Toán rời rạc giúp hiểu sâu không gian vector và hạt nhân/ảnh của ánh xạ tuyến tính.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu cấu trúc của không gian vector và các ánh xạ tuyến tính — ngôn ngữ nền tảng của đồ họa máy tính, học máy, tối ưu hóa và tính toán khoa học. Nội dung kết hợp chặt chẽ trực giác hình học với điều kiện đại số: từ hệ phương trình tuyến tính, phép khử Gauss, phân rã LU và đại số ma trận, đến không gian vector, sự độc lập tuyến tính, cơ sở, số chiều và định lý cơ bản của đại số tuyến tính về bốn không gian con (column space, nullspace, row space, left nullspace). Tiếp theo là tích vô hướng, tính trực giao, phép chiếu trực giao, bài toán bình phương tối thiểu (least squares), định thức, trị riêng và vector riêng (eigenvalues/eigenvectors), chéo hóa ma trận, ma trận đối xứng xác định dương và phân rã giá trị kỳ dị (SVD).

**Cấu trúc chương mục:**
1. **Hệ phương trình tuyến tính, khử Gauss và phân rã LU** (`la-systems-elimination-matrices`): Góc nhìn theo hàng và theo cột của Ax = b, phép biến đổi sơ cấp, ma trận bậc thang, phân rã A = LU và điều kiện khả nghịch. *(Nguồn chính: MIT 18.06SC Unit I: Ax = b and the Four Subspaces (Sessions 1–7))*
2. **Không gian vector, cơ sở, số chiều và bốn không gian con cơ bản** (`la-vector-spaces-subspaces`): Độc lập tuyến tính, hệ sinh, cơ sở, hạng (rank), định lý hạng–số khuyết (rank-nullity) và quan hệ giữa bốn không gian con của ma trận. *(Nguồn chính: MIT 18.06SC Unit I (Sessions 8–13))*
3. **Ánh xạ tuyến tính, biểu diễn ma trận và đổi cơ sở** (`la-linear-maps-change-of-basis`): Ánh xạ bảo toàn tổ hợp tuyến tính, hạt nhân (kernel) và ảnh (image), ma trận của ánh xạ theo cơ sở và ma trận đồng dạng. *(Nguồn chính: MIT 18.06SC Unit III (Session 30–31))*
4. **Trực giao, phép chiếu, bình phương tối thiểu và trực chuẩn hóa Gram–Schmidt** (`la-orthogonality-least-squares`): Phần bù trực giao, ma trận chiếu P, xấp xỉ nghiệm hệ vô nghiệm bằng phương trình chuẩn A^T A x_hat = A^T b và phân rã QR. *(Nguồn chính: MIT 18.06SC Unit II (Sessions 14–17))*
5. **Định thức, trị riêng, vector riêng và chéo hóa ma trận** (`la-determinants-eigenvalues`): Ý nghĩa thể tích có hướng của định thức, đa thức đặc trưng det(A - lambda I) = 0, điều kiện chéo hóa được và tính lũy thừa ma trận A^k. *(Nguồn chính: MIT 18.06SC Unit II (Sessions 18–24))*
6. **Ma trận đối xứng, xác định dương và phân rã giá trị kỳ dị (SVD)** (`la-symmetric-positive-definite-svd`): Định lý phổ cho ma trận thực đối xứng, dạng toàn phương xác định dương, phân rã A = U Sigma V^T, giả nghịch đảo Moore–Penrose và xấp xỉ hạng thấp. *(Nguồn chính: MIT 18.06SC Unit III (Sessions 27–29, 33))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Không yêu cầu hoàn tất Giải tích nhiều biến trước khi học Đại số tuyến tính; các ứng dụng đạo hàm ma trận được đặt ở Môn 12 và Môn 36.

- **Giáo trình / Nguồn chuẩn:** `mit-1806sc` (Linear Algebra (MIT 18.06SC) — *Units I, II, and III (Sessions 1–33)*, vai trò: `primary`)

### CS-11: Giải tích một biến (`single-variable-calculus`)
- **Phân loại:** `core` | **Khối:** `block-2`
- **Điều kiện tiên quyết:**
  - `math-bridge` (*required*): Cần nắm vững hàm số, đa thức, hàm mũ, logarit và lượng giác.

**Bản chất và nội dung môn học:**

Môn học trang bị các công cụ toán học để phân tích sự biến thiên liên tục, tốc độ tích lũy và xấp xỉ hàm số. Nội dung bắt đầu từ khái niệm giới hạn, tính liên tục, đạo hàm như tốc độ thay đổi tức thời và xấp xỉ tuyến tính cục bộ, quy tắc đạo hàm hàm hợp và hàm ngược, đến bài toán cực trị và phương pháp lặp Newton–Raphson. Phần tích phân xây dựng tổng Riemann, định lý cơ bản của giải tích nối đạo hàm với tích phân xác định, các kỹ thuật tích phân cần thiết (đổi biến, từng phần), tích phân suy rộng (dùng trực tiếp trong phân tích tổng tiệm cận và biến ngẫu nhiên liên tục), cùng chuỗi vô hạn và khai triển Taylor.

**Cấu trúc chương mục:**
1. **Giới hạn, tính liên tục và khái niệm đạo hàm** (`svc-limits-continuity-derivatives`): Giới hạn hữu hạn và tại vô cùng, so sánh bậc tăng khi x -> inf, định nghĩa đạo hàm và ý nghĩa hình học/vật lý. *(Nguồn chính: MIT 18.01SC Unit 1: Differentiation — Part A (Sessions 1–13))*
2. **Quy tắc dây chuyền, đạo hàm hàm ngược và xấp xỉ tuyến tính/bậc hai** (`svc-chain-rule-approximations`): Đạo hàm hàm hợp (chain rule), hàm ẩn, xấp xỉ vi phân và đánh giá sai số cục bộ. *(Nguồn chính: MIT 18.01SC Unit 1 Part B (Sessions 14–20) & Unit 2 Part A (Sessions 21–24))*
3. **Cực trị hàm một biến, tính lồi/lõm và phương pháp Newton** (`svc-optimization-newton`): Điểm dừng, kiểm tra đạo hàm bậc hai, hàm lồi (convex functions), quy tắc L’Hôpital và tìm nghiệm xấp xỉ bằng phương pháp Newton. *(Nguồn chính: MIT 18.01SC Unit 2 Parts B–C (Sessions 25–41) & Unit 5 Part A (Sessions 87–90 L’Hôpital’s Rule))*
4. **Tổng Riemann, tích phân xác định và Định lý cơ bản của giải tích** (`svc-integration-ftc`): Bài toán diện tích và tích lũy, tổng Riemann trên/dưới, nguyên hàm và hai phần của Định lý cơ bản của giải tích. *(Nguồn chính: MIT 18.01SC Unit 3: The Definite Integral and its Applications (Sessions 42–66))*
5. **Kỹ thuật tích phân và tích phân suy rộng** (`svc-techniques-improper-integrals`): Phép đổi biến số, tích phân từng phần (cần cho kỳ vọng của phân phối mũ/Gamma/Gaussian), và sự hội tụ của tích phân suy rộng. *(Nguồn chính: MIT 18.01SC Unit 4: Techniques of Integration (Sessions 67–84) & Unit 5 Part A (Sessions 91–93 Improper Integrals))*
6. **Dãy số, chuỗi vô hạn và chuỗi Taylor** (`svc-series-taylor`): Sự hội tụ của chuỗi số, tiêu chuẩn so sánh tích phân, chuỗi lũy thừa, khai triển Taylor/Maclaurin và phần dư Lagrange. *(Nguồn chính: MIT 18.01SC Unit 5: Exploring the Infinite — Part B (Sessions 94–99: Infinite Series, Power Series, Taylor’s Series))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Không cắt bỏ phần chuỗi Taylor và tích phân suy rộng vì chúng là nền tảng trực tiếp cho xấp xỉ hàm mất mát, hàm sinh giải tích và hàm mật độ xác suất.
- Các kỹ thuật tích phân lượng giác đặc thù hiếm dùng trong CS được đánh dấu ở mức mở rộng (extension).

- **Giáo trình / Nguồn chuẩn:** `mit-1801sc` (Single Variable Calculus (MIT 18.01SC) — *Units 1–5 (Sessions 1–101: Differentiation, Applications, Definite Integral & FTC, Techniques of Integration, L’Hôpital’s Rule, Improper Integrals, Infinite Series & Taylor’s Series)*, vai trò: `primary`)

### CS-12: Giải tích nhiều biến và tối ưu (`multivariable-calculus-optimization`)
- **Phân loại:** `core` | **Khối:** `block-2`
- **Điều kiện tiên quyết:**
  - `single-variable-calculus` (*required*): Cần nắm vững đạo hàm, quy tắc dây chuyền một biến, khai triển Taylor và tích phân.
  - `linear-algebra` (*required*): Cần không gian vector, tích vô hướng, ma trận đối xứng xác định dương và trị riêng để xét ma trận Jacobian/Hessian.

**Bản chất và nội dung môn học:**

Môn học mở rộng giải tích sang hàm nhiều biến và xây dựng nền tảng cho các bài toán tối ưu hóa trong học máy, đồ họa và tính toán khoa học. Nội dung gồm hình học không gian R^n, tích vô hướng và tích có hướng, hàm nhiều biến, mặt mức (level sets), đạo hàm riêng, khả vi toàn phần, vector gradient, ma trận Jacobian và ma trận Hessian. Quy tắc dây chuyền nhiều biến được trình bày trên đồ thị tính toán (computational graph) để làm rõ cơ sở toán học của lan truyền ngược (backpropagation). Phần tối ưu phân biệt rõ điều kiện cực trị giải tích (điểm dừng, xác định dương của Hessian, nhân tử Lagrange) với các thuật toán tối ưu số học như hạ gradient (gradient descent), rồi kết thúc bằng tích phân bội và công thức đổi biến.

**Cấu trúc chương mục:**
1. **Hàm nhiều biến, đường đồng mức, đạo hàm riêng và xấp xỉ tuyến tính** (`mco-multivariable-functions-partials`): Miền xác định trong R^n, mặt phẳng tiếp diện, đạo hàm riêng và sự khác biệt giữa tồn tại đạo hàm riêng với tính khả vi toàn phần. *(Nguồn chính: MIT 18.02SC Unit 1 (Sessions 1–22) & Unit 2 Part A (Sessions 23–30))*
2. **Đạo hàm theo hướng, Gradient, Jacobian và quy tắc dây chuyền nhiều biến** (`mco-gradient-jacobian-chain-rule`): Gradient như hướng tăng nhanh nhất và pháp tuyến mặt mức, ma trận Jacobian của ánh xạ vector và quy tắc dây chuyền trên đồ thị hợp hàm. *(Nguồn chính: MIT 18.02SC Unit 2 Part B: Chain Rule, Gradient and Directional Derivatives (Sessions 34–38))*
3. **Cực trị tự do, ma trận Hessian, nhân tử Lagrange và thuật toán Gradient Descent** (`mco-analytic-numerical-optimization`): Khai triển Taylor bậc hai nhiều biến, phân loại điểm dừng (cực tiểu, cực đại, yên ngựa) qua Hessian, tối ưu có ràng buộc đẳng thức và điều kiện hội tụ của thuật toán số gradient descent. *(Nguồn chính: MIT 18.02SC Unit 2 Part A (Sessions 31–33) & Part C (Sessions 39–45 Lagrange Multipliers))*
4. **Tích phân kép, tích phân bội và đổi biến bằng định thức Jacobian** (`mco-multiple-integrals`): Định lý Fubini tính tích phân lặp trên miền phẳng/không gian, đổi biến sang tọa độ cực/cầu và ứng dụng tính tích phân mật độ xác suất đồng thời. *(Nguồn chính: MIT 18.02SC Unit 3 Part A (Sessions 46–56: Double Integrals, Polar Coordinates Session 50, Change of Variables Sessions 53–55) & Unit 4 (Sessions 74–92))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Phân biệt rõ: cực trị giải tích tìm nghiệm của nabla f(x) = 0, trong khi gradient descent là thuật toán lặp xấp xỉ số học dùng khi không giải được nghiệm đóng.
- Giải tích vector trường (định lý Green, Stokes, Gauss) được xếp ở mức mở rộng (extension), không bắt buộc cho luồng học máy/phần mềm cốt lõi.

- **Giáo trình / Nguồn chuẩn:** `mit-1802sc` (Multivariable Calculus (MIT 18.02SC) — *Unit 1 (Sessions 1–22), Unit 2 (Sessions 23–45), Unit 3 Part A (Sessions 46–56 Double Integrals & Jacobian), Unit 4 (Sessions 74–92 Triple Integrals & Vector Calculus)*, vai trò: `primary`)

### CS-13: Xác suất (`probability`)
- **Phân loại:** `core` | **Khối:** `block-2`
- **Điều kiện tiên quyết:**
  - `discrete-math` (*required*): Cần lý thuyết tập hợp, nguyên lý đếm tổ hợp và tổng hữu hạn/chuỗi.
  - `single-variable-calculus` (*required*): Cần đạo hàm, tích phân xác định và tích phân suy rộng cho biến ngẫu nhiên liên tục.
  - `multivariable-calculus-optimization` (*co_requisite*): Cần tích phân kép cơ bản khi học phân phối xác suất đồng thời của hai biến liên tục.

**Bản chất và nội dung môn học:**

Môn học xây dựng mô hình toán học chặt chẽ cho sự bất định và ngẫu nhiên — nền tảng của thuật toán ngẫu nhiên, đánh giá hiệu năng hệ thống, mạng máy tính, thống kê và trí tuệ nhân tạo. Nội dung đi từ tiên đề Kolmogorov trên không gian mẫu và biến cố, xác suất có điều kiện, tính độc lập, công thức xác suất toàn phần và định lý Bayes, đến biến ngẫu nhiên rời rạc (PMF) và liên tục (PDF, CDF). Tiếp theo là kỳ vọng, tính chất tuyến tính của kỳ vọng (ngay cả khi các biến phụ thuộc), phương sai, phân phối đồng thời (joint), phân phối biên (marginal), hiệp phương sai (covariance), hệ số tương quan, các họ phân phối chuẩn mực (Bernoulli, Binomial, Geometric, Poisson, Uniform, Exponential, Normal) cùng các bất đẳng thức xác suất (Markov, Chebyshev), Luật số lớn (LLN) và Định lý giới hạn trung tâm (CLT).

**Cấu trúc chương mục:**
1. **Không gian mẫu, tiên đề xác suất, tính độc lập và Định lý Bayes** (`prob-axioms-conditional-bayes`): Không gian xác suất, xác suất có điều kiện P(A|B), phân biệt xung khắc với độc lập, xác suất toàn phần, cập nhật Bayes và sai lầm bỏ qua tỷ lệ nền (base-rate fallacy). *(Nguồn chính: MIT 18.05 Spring 2022 Classes 1–3 & MIT 6.042J Ch. 16–17)*
2. **Biến ngẫu nhiên rời rạc, PMF, kỳ vọng và tính tuyến tính của kỳ vọng** (`prob-discrete-random-variables`): Biến ngẫu nhiên như hàm từ không gian mẫu vào R, hàm khối xác suất (PMF), kỳ vọng E[X], tính tuyến tính E[X+Y] = E[X]+E[Y], phương sai và các phân phối Bernoulli, Binomial, Geometric, Poisson. *(Nguồn chính: MIT 18.05 Spring 2022 Classes 4–5a & MIT 6.042J Ch. 18 (§18.1–18.5) & Ch. 19 (§19.3))*
3. **Biến ngẫu nhiên liên tục, hàm mật độ (PDF), hàm phân phối tích lũy (CDF)** (`prob-continuous-distributions`): Mật độ xác suất f(x), quan hệ F'(x) = f(x), đổi biến biến ngẫu nhiên, phân phối đều, phân phối mũ (tính chất không nhớ) và phân phối chuẩn Gaussian. *(Nguồn chính: MIT 18.05 Spring 2022 Classes 5b–6a)*
4. **Phân phối đồng thời, hiệp phương sai và các định lý giới hạn (LLN, CLT)** (`prob-joint-covariance-limit-theorems`): PMF/PDF đồng thời, phân phối biên và có điều kiện, covariance và correlation (tương quan bằng 0 không suy ra độc lập), bất đẳng thức Markov/Chebyshev/Chernoff, Luật số lớn và Định lý giới hạn trung tâm. *(Nguồn chính: MIT 18.05 Spring 2022 Classes 6b–7 & MIT 6.042J Ch. 19 (§19.1–19.6))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Làm rõ các điều kiện áp dụng Định lý giới hạn trung tâm (biến độc lập cùng phân phối có phương sai hữu hạn); không áp dụng mù quáng cho phân phối đuôi nặng có phương sai vô hạn.

- **Giáo trình / Nguồn chuẩn:** `mit-1805-2022` (Introduction to Probability and Statistics (MIT 18.05) — *Classes 1–9 (Probability, Conditional Probability, Discrete & Continuous Random Variables, Joint Distributions, Law of Large Numbers, Central Limit Theorem)*, vai trò: `primary`); `mit-6042j-2015` (Mathematics for Computer Science (MIT 6.042J Spring 2015) — *Chapters 16–19 (Events & Probability Spaces, Conditional Probability, Random Variables & Expectation §18.1–18.5, Deviation from the Mean: Markov §19.1, Chebyshev §19.2, Variance §19.3, Chernoff §19.6.2)*, vai trò: `supplementary`)

### CS-14: Thống kê và thiết kế suy luận (`statistics-inference`)
- **Phân loại:** `core` | **Khối:** `block-2`
- **Điều kiện tiên quyết:**
  - `probability` (*required*): Cần nắm vững biến ngẫu nhiên, kỳ vọng, phương sai, định lý Bayes và Định lý giới hạn trung tâm.
  - `linear-algebra` (*required*): Cần phép chiếu trực giao và bình phương tối thiểu cho mô hình hồi quy tuyến tính.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu bài toán ngược của xác suất: từ dữ liệu quan sát hữu hạn có nhiễu, làm thế nào để ước lượng tham số, định lượng độ bất định và kiểm định giả thuyết về quy luật sinh dữ liệu. Nội dung bao gồm nguyên tắc lấy mẫu, sai lệch chọn mẫu (sampling bias), thống kê mô tả, hàm hợp lý (likelihood) và ước lượng hợp lý cực đại (MLE), suy luận Bayes (prior, posterior, credible intervals), phân phối mẫu và khoảng tin cậy tần suất (frequentist confidence intervals), phương pháp lấy mẫu lặp bootstrap, kiểm định giả thuyết (sai lầm loại I/II, p-value, lực kiểm định power, kích thước hiệu ứng effect size), hồi quy tuyến tính và phân biệt rõ thống kê mô tả, mô hình dự đoán với suy luận nhân quả.

**Cấu trúc chương mục:**
1. **Quần thể, mẫu ngẫu nhiên, thống kê mô tả và các nguồn sai lệch dữ liệu** (`stat-sampling-descriptive-bias`): Phân biệt tham số quần thể với thống kê mẫu, sai lệch chọn mẫu/sống sót, độ lệch (bias) và phương sai (variance) của bộ ước lượng. *(Nguồn chính: MIT 18.05 Spring 2022 Class 10b & OpenIntro Ch. 1)*
2. **Hàm hợp lý, ước lượng hợp lý cực đại (MLE) và cập nhật suy luận Bayes** (`stat-likelihood-mle-bayesian`): Xây dựng hàm log-likelihood, tìm MLE bằng giải tích/số học, cập nhật phân phối hậu nghiệm liên tục/rời rạc và khoảng tin cậy Bayes (credible interval). *(Nguồn chính: MIT 18.05 Spring 2022 Classes 10b–16)*
3. **Khoảng tin cậy tần suất và phương pháp tái lấy mẫu Bootstrap** (`stat-confidence-intervals-bootstrap`): Ý nghĩa đúng của khoảng tin cậy 1 - alpha dưới góc nhìn lấy mẫu lặp, phân phối Student-t và ước lượng sai số chuẩn bằng empirical/parametric bootstrap. *(Nguồn chính: MIT 18.05 Spring 2022 Classes 20–24)*
4. **Kiểm định giả thuyết, hồi quy tuyến tính và ranh giới dự đoán – nhân quả** (`stat-hypothesis-testing-regression-causality`): Giả thuyết H0/HA, bản chất xác suất có điều kiện của p-value, kiểm định z/t/chi-square, power & effect size, kiểm định đa giả thuyết, hồi quy tuyến tính và biến gây nhiễu (confounding) trong suy luận nhân quả. *(Nguồn chính: MIT 18.05 Spring 2022 Classes 17–19, 25–26)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Sửa triệt để ngộ nhận phổ biến: p-value không phải xác suất H0 đúng, và khoảng tin cậy 95% tần suất không gán xác suất 95% cho tham số cố định sau khi đã tính xong một khoảng cụ thể.

- **Giáo trình / Nguồn chuẩn:** `mit-1805-2022` (Introduction to Probability and Statistics (MIT 18.05) — *Classes 10b–26 (MLE, Bayesian Inference, NHST, Confidence Intervals, Bootstrap, Linear Regression)*, vai trò: `primary`)

---

## Khối III — Cấu trúc dữ liệu, thuật toán và lý thuyết

Nghiên cứu cách tổ chức dữ liệu trong bộ nhớ, các mô hình thiết kế và phân tích độ phức tạp thuật toán, thuật toán trên đồ thị, các kỹ thuật thuật toán mở rộng, cùng nền tảng lý thuyết tính toán (automata, khả năng tính được, độ phức tạp P/NP) và ngữ nghĩa ngôn ngữ lập trình.

### CS-15: Cấu trúc dữ liệu (`data-structures`)
- **Phân loại:** `core` | **Khối:** `block-3`
- **Điều kiện tiên quyết:**
  - `cpp-memory-model` (*required*): Cần nắm vững bộ nhớ liên tiếp vs cấp phát nút qua con trỏ, thời gian sống và độ cục bộ bộ nhớ.
  - `object-oriented-programming` (*required*): Cần nắm đóng gói bất biến của lớp và khuôn mẫu cơ bản để hiểu thiết kế container.
  - `discrete-math` (*required*): Cần quy nạp toán học, số học modulo, cây, đồ thị và ký hiệu tiệm cận.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu sự tách biệt giữa kiểu dữ liệu trừu tượng (Abstract Data Type — giao diện và đặc tả toán học của các phép toán) với cấu trúc dữ liệu (Data Structure — cách biểu diễn vật lý trong bộ nhớ và thuật toán duy trì bất biến). Nội dung phân tích có hệ thống mảng động và chi phí khấu hao (amortized analysis), danh sách liên kết đơn/đôi, ngăn xếp (stack), hàng đợi (queue), hàng đợi hai đầu (deque), bảng băm (hash tables) với hàm băm và chiến lược xử lý va chạm, cây nhị phân và cây tìm kiếm nhị phân (BST), cây tìm kiếm tự cân bằng (AVL, Red-Black/B-Tree cơ sở), hàng đợi ưu tiên và đống nhị phân (binary heap), cây tiền tố (trie), cấu trúc các tập hợp rời rạc (Disjoint Set Union) và các biểu diễn đồ thị trong bộ nhớ.

**Cấu trúc chương mục:**
1. **Kiểu dữ liệu trừu tượng (ADT), mảng động và danh sách liên kết** (`ds-adt-arrays-lists`): Giao diện Sequence/Set, mảng động nhân đôi kích thước và phân tích khấu hao O(1), danh sách liên kết đơn/đôi, đánh đổi giữa truy cập ngẫu nhiên và cục bộ cache. *(Nguồn chính: open-data-structures: Ch. 1 Introduction; Ch. 2 Array-Based Lists; Ch. 3 Linked Lists)*
2. **Ngăn xếp, hàng đợi, hàng đợi hai đầu và mảng vòng (Circular Buffer)** (`ds-stacks-queues-deques`): Chính sách LIFO/FIFO, cài đặt bằng mảng vòng và danh sách liên kết, ứng dụng trong quản lý khung lời gọi và duyệt theo mức. *(Nguồn chính: open-data-structures: §2.2 ArrayQueue; §2.3 ArrayDeque; §2.4 DualArrayDeque; Ch. 3)*
3. **Bảng băm, hàm băm và chiến lược giải quyết va chạm** (`ds-hash-tables`): Bài toán từ điển động, nguyên lý Dirichlet dẫn tới va chạm tất yếu, giả thiết băm đều đơn giản, nối kết chuỗi (chaining) vs địa chỉ mở (open addressing / linear probing), hệ số tải (load factor) và rehashing. *(Nguồn chính: open-data-structures: Ch. 5 Hash Tables; mit-6006-2020: Lecture 4: Hashing)*
4. **Cây nhị phân, cây tìm kiếm nhị phân (BST) và cơ chế tự cân bằng (AVL)** (`ds-bst-balanced-trees`): Bất biến thứ tự BST, các phép duyệt cây, suy biến O(n) khi dữ liệu có thứ tự, bất biến chiều cao của cây AVL và bốn phép xoay bảo toàn thứ tự trung thứ tự. *(Nguồn chính: open-data-structures: Ch. 6 Binary Trees; Ch. 9 Red-Black Trees; Ch. 14 B-Trees; mit-6006-2020: Lectures 6–7: Binary Trees; AVL Trees)*
5. **Đống nhị phân (Binary Heap) và hàng đợi ưu tiên** (`ds-heaps-priority-queues`): Biểu diễn cây nhị phân hoàn chỉnh trên mảng phẳng, bất biến max-heap/min-heap, thao tác sift-up/sift-down và thuật toán tạo đống tuyến tính O(n) (Build-Heap). *(Nguồn chính: open-data-structures: §10.1 BinaryHeap; mit-6006-2020: Lecture 8: Binary Heaps)*
6. **Cây tiền tố (Trie), tập hợp rời rạc (DSU) và biểu diễn đồ thị** (`ds-tries-dsu-graph-reps`): Cây tìm kiếm theo ký tự, cấu trúc Disjoint Set với gộp theo hạng và nén đường đi, so sánh ma trận kề, danh sách kề và danh sách cạnh. *(Nguồn chính: cp-algorithms: Aho-Corasick: Construction of the trie; Disjoint Set Union; open-data-structures: Ch. 12 Graphs)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Mỗi cấu trúc dữ liệu đều được định nghĩa bằng bất biến cấu trúc, bảng độ phức tạp trường hợp xấu nhất/trung bình/khấu hao và điều kiện suy biến; việc viết mã cài đặt là phương tiện minh họa cơ chế, không thay thế phân tích.

- **Giáo trình / Nguồn chuẩn:** `open-data-structures` (Open Data Structures (in C++) — *Chapters 1–6, 10, 12 (Arrays, Lists, Hash Tables, Binary Trees, Heaps, Graphs)*, vai trò: `primary`); `mit-6006-2020` (Introduction to Algorithms (MIT 6.006) — *Lectures 2, 4, 6, 7, 8 (Data Structures, Hashing, Binary Trees, AVL, Binary Heaps)*, vai trò: `primary`)

### CS-16: Phân tích và thiết kế thuật toán (`algorithms-design-analysis`)
- **Phân loại:** `core` | **Khối:** `block-3`
- **Điều kiện tiên quyết:**
  - `data-structures` (*required*): Cần nắm vững mảng, bảng băm, cây, đống nhị phân và phân tích khấu hao cơ bản.
  - `discrete-math` (*required*): Cần quy nạp toán học, bất biến vòng lặp, tổng tiệm cận và hệ thức đệ quy.
  - `probability` (*recommended*): Cần kỳ vọng và biến ngẫu nhiên chỉ thị để phân tích trường hợp trung bình của Quicksort ngẫu nhiên và bảng băm.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu các nguyên lý thiết kế thuật toán tổng quát và phương pháp chứng minh tính đúng đắn cùng độ phức tạp tài nguyên. Nội dung mở đầu bằng mô hình máy RAM, kích thước đầu vào, phân tích trường hợp xấu nhất, trung bình và khấu hao, cùng các kỹ thuật giải hệ thức truy hồi chia để trị (phương pháp thế, cây đệ quy, Định lý Thợ — Master Theorem và Akra–Bazzi tổng quát). Tiếp theo là bài toán tìm kiếm và sắp xếp (tìm kiếm nhị phân trên mảng và trên không gian lời giải đơn điệu, Merge Sort, Quicksort ngẫu nhiên, Heapsort, cận dưới Omega(n log n) cho mô hình so sánh, Counting/Radix Sort), chiến lược Chia để trị, Quy hoạch động (cấu trúc con tối ưu, bài toán con gối nhau, DAG trạng thái), Tham lam (tính chất lựa chọn tham lam và chứng minh đổi chỗ) và Quay lui / Nhánh cận.

**Cấu trúc chương mục:**
1. **Mô hình chi phí, tính đúng đắn và truy hồi chia để trị (Master Theorem)** (`ada-cost-models-divide-conquer-recurrences`): Mô hình Word-RAM, chứng minh tính đúng đắn bằng bất biến vòng lặp và quy nạp, giải truy hồi T(n) = aT(n/b) + f(n) bằng cây đệ quy, phương pháp thế và Định lý Thợ. *(Nguồn chính: mit-6006-2020: Lectures 1, 3; erickson-algorithms: Ch. 0–1; Appendix II: Solving Recurrences)*
2. **Tìm kiếm nhị phân, các thuật toán sắp xếp và cận dưới lý thuyết thông tin** (`ada-searching-sorting-lower-bounds`): Tìm kiếm nhị phân và chặt nhị phân trên hàm đơn điệu, Merge Sort, Heapsort, Quicksort phân hoạch Hoare/Lomuto và chọn chốt ngẫu nhiên, cây quyết định chứng minh cận dưới Omega(n log n) và sắp xếp tuyến tính theo chữ số. *(Nguồn chính: mit-6006-2020: Lectures 3, 5, 8; erickson-algorithms: Ch. 1 Recursion; open-data-structures: Ch. 11 Sorting Algorithms)*
3. **Mô hình thiết kế Chia để trị (Divide and Conquer)** (`ada-divide-and-conquer-paradigm`): Phân rã bài toán thành các bài toán con độc lập cùng dạng, nhân số nguyên lớn Karatsuba, tìm phần tử trung vị/thứ k (Quickselect), cặp điểm gần nhất và biến đổi Fourier nhanh (FFT mức khái niệm). *(Nguồn chính: erickson-algorithms: Ch. 1 Recursion; Fast Fourier Transforms notes; cp-algorithms: https://cp-algorithms.com/geometry/nearest_points.html — Algorithm; Evaluation of the complexity)*
4. **Quy hoạch động (Dynamic Programming)** (`ada-dynamic-programming`): Bài toán con gối nhau và cấu trúc con tối ưu, đồ thị phụ thuộc DAG của các bài toán con, ghi nhớ từ trên xuống (memoization) vs điền bảng từ dưới lên (tabulation), tối ưu không gian bộ nhớ và truy vết nghiệm. *(Nguồn chính: erickson-algorithms: Ch. 3 Dynamic Programming; mit-6006-2020: Lectures 15–18)*
5. **Thuật toán Tham lam và kỹ thuật chứng minh tính đúng đắn** (`ada-greedy-algorithms`): Tính chất lựa chọn tham lam (greedy choice property), kỹ thuật chứng minh "tham lam luôn dẫn trước" và lập luận trao đổi (exchange argument), phản ví dụ khi tham lam thất bại. *(Nguồn chính: erickson-algorithms: Ch. 4 Greedy Algorithms; Matroids notes)*
6. **Quay lui (Backtracking) và Nhánh cận (Branch and Bound)** (`ada-backtracking-branch-bound`): Duyệt không gian trạng thái dạng cây, cắt tỉa nhánh vi phạm ràng buộc (pruning) và sử dụng cận đánh giá để tìm nghiệm tối ưu cho bài toán tổ hợp. *(Nguồn chính: erickson-algorithms: Ch. 2 Backtracking; Fast Exponential Algorithms notes)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Không trình bày thuật toán như mẹo giải bài thi lập trình; mọi kỹ thuật thiết kế (đặc biệt Tham lam và Quy hoạch động) đều phải đi kèm điều kiện áp dụng và phương pháp chứng minh hoặc phản ví dụ.

- **Giáo trình / Nguồn chuẩn:** `erickson-algorithms` (Algorithms — *Chapters 1–4 (Recursion, Backtracking, Dynamic Programming, Greedy Algorithms)*, vai trò: `primary`); `mit-6006-2020` (Introduction to Algorithms (MIT 6.006) — *Lectures 1, 3, 5, 15–18 (Asymptotics, Sorting, Dynamic Programming)*, vai trò: `primary`)

### CS-17: Thuật toán đồ thị (`graph-algorithms`)
- **Phân loại:** `core` | **Khối:** `block-3`
- **Điều kiện tiên quyết:**
  - `data-structures` (*required*): Cần hàng đợi, ngăn xếp, hàng đợi ưu tiên (min-heap), Disjoint Set Union và biểu diễn đồ thị.
  - `algorithms-design-analysis` (*required*): Cần tư duy tham lam, quy hoạch động và chứng minh bất biến.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu các thuật toán khám phá cấu trúc, tìm đường đi tối ưu, xây dựng mạng kết nối chi phí nhỏ nhất và luồng cực đại trên đồ thị. Nội dung phân tầng rõ điều kiện áp dụng của từng thuật toán: từ duyệt theo chiều rộng (BFS) và chiều sâu (DFS), phân loại cạnh, phát hiện chu trình, sắp xếp topo trên DAG và phân rã thành phần liên thông mạnh (SCC — Kosaraju/Tarjan), đến bài toán đường đi ngắn nhất từ một nguồn với bốn trường hợp trọng số (không trọng số: BFS; trọng số 0/1: 0-1 BFS; trên DAG: quy hoạch động theo thứ tự topo; trọng số không âm: Dijkstra; có trọng số âm và phát hiện chu trình âm: Bellman–Ford) và mọi cặp đỉnh (Floyd–Warshall, Johnson). Tiếp theo là cây khung nhỏ nhất (Kruskal, Prim dựa trên tính chất lát cắt), đường đi Euler/Hamilton, cùng bài toán luồng cực đại – lát cắt cực tiểu (Ford–Fulkerson, Edmonds–Karp) và cặp ghép trên đồ thị hai phía.

**Cấu trúc chương mục:**
1. **Duyệt đồ thị (BFS, DFS), sắp xếp Topo và Thành phần liên thông mạnh (SCC)** (`ga-traversal-dag-scc`): Cây BFS và khoảng cách theo số cạnh, thời gian vào/ra của DFS, phân loại cạnh (tree, back, forward, cross), phát hiện chu trình, sắp xếp topo (Kahn & DFS) và thuật toán Kosaraju/Tarjan tìm SCC. *(Nguồn chính: erickson-algorithms: Ch. 5 Basic Graph Algorithms; Ch. 6 Depth-First Search; mit-6006-2020: Lectures 9–10)*
2. **Đường đi ngắn nhất từ một nguồn và điều kiện trọng số** (`ga-shortest-paths-sssp`): Phép nới lỏng cạnh (relaxation), quy hoạch động đường đi ngắn nhất trên DAG, thuật toán Dijkstra cho trọng số không âm (và phản ví dụ khi có cạnh âm), thuật toán Bellman–Ford giải trọng số âm và phát hiện chu trình âm. *(Nguồn chính: erickson-algorithms: Ch. 8 Shortest Paths; mit-6006-2020: Lectures 11–13)*
3. **Đường đi ngắn nhất giữa mọi cặp đỉnh (APSP)** (`ga-all-pairs-shortest-paths`): Quy hoạch động theo tập đỉnh trung gian trong thuật toán Floyd–Warshall O(V^3) và kỹ thuật tái gán trọng số không âm trong thuật toán Johnson O(V E + V^2 log V). *(Nguồn chính: erickson-algorithms: Ch. 9 All-Pairs Shortest Paths; mit-6006-2020: Lecture 14: Johnson)*
4. **Cây khung nhỏ nhất (MST), tính chất lát cắt và chu trình** (`ga-minimum-spanning-trees`): Bài toán kết nối mạng chi phí cực tiểu, định lý cạnh an toàn trên lát cắt (Cut Property), thuật toán Kruskal (với DSU), thuật toán Prim và Borůvka. *(Nguồn chính: erickson-algorithms: Ch. 7 Minimum Spanning Trees)*
5. **Luồng cực đại, lát cắt cực tiểu và cặp ghép đồ thị hai phía** (`ga-flows-cuts-matching`): Mạng luồng, đồ thị thặng dư (residual graph), đường tăng luồng, định lý Max-Flow Min-Cut của Ford–Fulkerson, thuật toán Edmonds–Karp và quy dẫn bài toán cặp ghép cực đại về luồng. *(Nguồn chính: erickson-algorithms: Ch. 10 Maximum Flows and Minimum Cuts; Ch. 11 Applications)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Tuyệt đối không gộp chung các thuật toán đường đi ngắn nhất; mỗi thuật toán phải gắn với tiền điều kiện trọng số cạnh và phản ví dụ khi vi phạm điều kiện đó.

- **Giáo trình / Nguồn chuẩn:** `erickson-algorithms` (Algorithms — *Chapters 5–11 (Basic Graph Algorithms, DAGs, MSTs, Shortest Paths, All-Pairs Shortest Paths, Maximum Flows & Minimum Cuts, Applications of Flows)*, vai trò: `primary`); `mit-6006-2020` (Introduction to Algorithms (MIT 6.006) — *Lectures 9–14 (Breadth-First Search, Depth-First Search, Weighted Shortest Paths, Bellman-Ford, Dijkstra, APSP)*, vai trò: `primary`)

### CS-18: Thuật toán mở rộng (`advanced-algorithms`)
- **Phân loại:** `extension` | **Khối:** `block-3`
- **Điều kiện tiên quyết:**
  - `algorithms-design-analysis` (*required*): Cần nắm chắc chia để trị, quy hoạch động và phân tích tiệm cận.
  - `graph-algorithms` (*required*): Cần nền tảng đồ thị, cây và luồng.
  - `probability` (*required*): Cần xác suất cho phân tích thuật toán ngẫu nhiên và băm chuỗi.

**Bản chất và nội dung môn học:**

Môn học mở rộng hộp công cụ thuật toán sang các miền bài toán chuyên biệt thường gặp trong hệ thống tìm kiếm văn bản, cơ sở dữ liệu, mật mã, đồ họa và tối ưu tổ hợp. Nội dung gồm các thuật toán khớp chuỗi văn bản (Knuth–Morris–Pratt, hàm tiền tố, Z-algorithm, băm cuốn Rabin–Karp, Aho–Corasick cơ sở), cấu trúc dữ liệu truy vấn trên đoạn (mảng cộng dồn, bảng thưa Sparse Table, cây Fenwick, cây phân đoạn Segment Tree và cập nhật lười), thuật toán số học nâng cao, thuật toán ngẫu nhiên (Monte Carlo vs Las Vegas), thuật toán xấp xỉ có tỷ lệ bảo đảm cho bài toán khó và hình học tính toán nhập môn (tích có hướng, bao lồi).

**Cấu trúc chương mục:**
1. **Thuật toán xử lý chuỗi và khớp mẫu chính xác** (`aa-string-algorithms`): Băm đa thức Rabin–Karp và xác suất va chạm, tự động hữu hạn chuỗi, hàm tiền tố và thuật toán Knuth–Morris–Pratt (KMP) tuyến tính. *(Nguồn chính: cp-algorithms: String Processing: Prefix function; Z-function; Rabin-Karp; Aho-Corasick)*
2. **Cấu trúc dữ liệu truy vấn và cập nhật trên đoạn** (`aa-range-query-structures`): Phân tách thao tác tĩnh (Prefix Sum, Sparse Table cho bài toán RMQ) và động (cây Fenwick/Binary Indexed Tree, cây phân đoạn Segment Tree và Lazy Propagation). *(Nguồn chính: cp-algorithms: Sparse Table; Fenwick Tree; Segment Tree)*
3. **Thuật toán ngẫu nhiên và thuật toán xấp xỉ có cận bảo đảm** (`aa-randomized-approximation`): Phân biệt Las Vegas (luôn đúng, thời gian kỳ vọng đa thức) và Monte Carlo (thời gian xác định, xác suất sai số có cận), cùng thuật toán xấp xỉ cho Vertex Cover, Set Cover và TSP metric. *(Nguồn chính: erickson-algorithms: Discrete Probability notes; Approximation Algorithms notes; cp-algorithms: Primality tests; Binary Exponentiation)*
4. **Hình học tính toán nhập môn** (`aa-computational-geometry-intro`): Biểu diễn điểm/đoạn thẳng tránh sai số dấu chấm động, phép kiểm tra hướng rẽ bằng tích có hướng (orientation predicate), kiểm tra giao điểm đoạn thẳng và thuật toán tìm bao lồi (Convex Hull). *(Nguồn chính: cp-algorithms: Basic Geometry; Check if two segments intersect; Convex hull construction)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Đánh dấu rõ là môn mở rộng (extension); không đồng nhất việc giải đố lập trình thi đấu (competitive programming) với toàn bộ nền tảng Khoa học Máy tính.

- **Giáo trình / Nguồn chuẩn:** `cp-algorithms` (Algorithms for Competitive Programming (CP-Algorithms) — *String Processing, Data Structures (Fenwick/Segment Trees), and Geometry Sections*, vai trò: `primary`); `erickson-algorithms` (Algorithms — *Selected Advanced Topics & Randomized Algorithms Notes*, vai trò: `supplementary`)

### CS-19: Ngôn ngữ hình thức và khả năng tính toán (`formal-languages-computability`)
- **Phân loại:** `core` | **Khối:** `block-3`
- **Điều kiện tiên quyết:**
  - `discrete-math` (*required*): Cần nắm chắc logic, tập hợp, hàm song ánh, chứng minh phản chứng và quy nạp cấu trúc.
  - `algorithms-design-analysis` (*required*): Cần khái niệm thuật toán xác định để đối chiếu với mô hình máy Turing.

**Bản chất và nội dung môn học:**

Môn học khảo sát câu hỏi nền tảng nhất của Khoa học Máy tính: máy tính có thể và không thể giải quyết những bài toán nào bằng thuật toán hữu hạn? Nội dung đi theo phân cấp Chomsky từ các mô hình bộ nhớ hữu hạn đến mô hình tính toán tổng quát: ngôn ngữ chính quy, otomat hữu hạn đơn định và không đơn định (DFA/NFA), biểu thức chính quy và bổ đề bơm (Pumping Lemma) chứng minh một ngôn ngữ không chính quy; văn phạm phi ngữ cảnh (CFG) và otomat đẩy xuống (PDA) làm nền tảng cho bộ phân tích cú pháp; Máy Turing, luận đề Church–Turing, sự khác biệt giữa tập đếm được và không đếm được (chứng minh đường chéo hóa Cantor), bài toán dừng (Halting Problem), tính quyết định được (decidability), quy dẫn ánh xạ (mapping reductions) và định lý Rice.

**Cấu trúc chương mục:**
1. **Ngôn ngữ chính quy, Otomat hữu hạn (DFA/NFA) và Biểu thức chính quy** (`flc-regular-languages-automata`): Bảng chữ cái, chuỗi, ngôn ngữ, mô hình DFA và NFA, phép dựng tập con (subset construction) chứng minh DFA tương đương NFA, biểu thức chính quy và Bổ đề bơm. *(Nguồn chính: erickson-algorithms: Models of Computation notes 1–4; mit-6045j-2011: Lectures 3–5: DFA/NFA; regular expressions; pumping lemma)*
2. **Văn phạm phi ngữ cảnh (CFG), cây dẫn xuất và Otomat đẩy xuống (PDA)** (`flc-context-free-grammars-pda`): Quy tắc sản xuất, tính nhập nhằng (ambiguity) của văn phạm, dạng chuẩn Chomsky (CNF), mô hình PDA có ngăn xếp và giới hạn của ngôn ngữ phi ngữ cảnh. *(Nguồn chính: erickson-algorithms: Models of Computation: 5 Context-Free Languages and Grammars; illinois-cs273-notes: Ch. 13 Pushdown Automatas; Ch. 15 CFG to PDA; Ch. 17 PDA to CFG conversion)*
3. **Máy Turing, tính tương đương của các mô hình và Luận đề Church–Turing** (`flc-turing-machines-church-turing`): Định nghĩa hình thức của Máy Turing, các biến thể (đa băng, không đơn định), máy Turing vạn năng (Universal Turing Machine — chương trình như dữ liệu) và phân biệt ngôn ngữ nhận biết được (Turing-recognizable) với quyết định được (decidable). *(Nguồn chính: erickson-algorithms: Models of Computation: 6 Turing Machines; 8 Universal Models; 9 Nondeterministic Turing Machines; mit-6045j-2011: Lectures 6–7)*
4. **Chứng minh đường chéo hóa, Bài toán dừng (Halting Problem) và Quy dẫn bất khả quyết** (`flc-undecidability-reductions`): Tập vô hạn đếm được vs không đếm được, chứng minh Bài toán dừng không quyết định được, kỹ thuật quy dẫn A <=_m B và Định lý Rice về các tính chất ngữ nghĩa không tầm thường của chương trình. *(Nguồn chính: erickson-algorithms: Models of Computation: 7 Undecidability; mit-6045j-2011: Lectures 8–9: Undecidability; mapping reductions and Rice’s theorem)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Phân biệt biểu thức chính quy trong lý thuyết ngôn ngữ hình thức với regex mở rộng có backreference trong thư viện ngôn ngữ lập trình thực tế.

- **Giáo trình / Nguồn chuẩn:** `mit-6045j-2011` (Automata, Computability, and Complexity (MIT 6.045J) — *Lectures 1–12 (Finite Automata, Regular Expressions, CFGs, Turing Machines, Undecidability, Rice's Theorem)*, vai trò: `primary`)

### CS-20: Độ phức tạp tính toán (`computational-complexity`)
- **Phân loại:** `core` | **Khối:** `block-3`
- **Điều kiện tiên quyết:**
  - `formal-languages-computability` (*required*): Cần mô hình Máy Turing, ngôn ngữ quyết định và kỹ thuật quy dẫn.
  - `graph-algorithms` (*required*): Cần nắm các bài toán đồ thị đa thức (2-SAT, MST, Shortest Path, Matching) để đối chiếu với các bài toán đồ thị NP-khó (3-SAT, TSP, Clique).

**Bản chất và nội dung môn học:**

Nếu môn Khả năng tính toán phân ranh giới giữa bài toán giải được và không giải được, thì môn Độ phức tạp tính toán phân loại các bài toán giải được theo lượng tài nguyên (thời gian và không gian bộ nhớ) cần thiết khi kích thước mã hóa đầu vào tăng lên. Nội dung trình bày cách đo kích thước đầu vào theo số bit mã hóa (phân biệt đa thức thực với giả đa thức — pseudo-polynomial), lớp P, lớp NP dưới cả hai góc nhìn (máy Turing không đơn định đa thức và bộ kiểm chứng đa thức — polynomial-time verifier với chứng cứ ngắn), lớp co-NP, khái niệm quy dẫn thời gian đa thức (Karp/Cook reductions), định lý Cook–Levin cho bài toán SAT, chuỗi các bài toán NP-đầy đủ kinh điển (3-SAT, Clique, Independent Set, Vertex Cover, Hamiltonian Cycle, Subset Sum, Knapsack), độ phức tạp không gian (PSPACE) và các chiến lược kỹ nghệ khi đối diện bài toán NP-khó.

**Cấu trúc chương mục:**
1. **Mã hóa đầu vào, lớp phức tạp thời gian, lớp P và lớp NP** (`cc-encoding-time-classes-p-np`): Ảnh hưởng của cách mã hóa số nguyên (nhị phân vs nhất phân) lên độ phức tạp, định nghĩa lớp TIME(f(n)), lớp P, định nghĩa lớp NP qua bộ kiểm chứng (verifier) và chứng cứ (certificate), cùng bài toán mở P vs NP. *(Nguồn chính: erickson-algorithms: Ch. 12 NP-Hardness; mit-6045-2020: Lectures 13–14: Time Complexity; P and NP)*
2. **Quy dẫn thời gian đa thức, tính NP-khó, NP-đầy đủ và Định lý Cook–Levin** (`cc-polynomial-reductions-cook-levin`): Định nghĩa A <=_P B, chiều đúng của phép quy dẫn để chứng minh tính khó (quy dẫn bài toán đã biết là NP-khó sang bài toán mới), ý tưởng định lý Cook–Levin đưa bài toán mạch/máy Turing về SAT và 3-SAT. *(Nguồn chính: mit-6045-2020: Lecture 15: Polynomial-Time Reductions; Cook–Levin; NP-completeness; mit-6045j-2011: Lecture 16: NP-completeness; erickson-algorithms: Ch. 12 NP-Hardness)*
3. **Hệ thống các bài toán NP-đầy đủ kinh điển và sai lầm thường gặp khi quy dẫn** (`cc-classic-np-complete-problems`): Chuỗi quy dẫn từ 3-SAT sang Independent Set, Vertex Cover, Clique, Hamiltonian Cycle/TSP, 3-Coloring và Subset Sum; phân tích lỗi quy dẫn ngược chiều. *(Nguồn chính: erickson-algorithms: Ch. 12 NP-Hardness; mit-6045-2020: Lecture 16: Clique; Vertex Cover; Independent Set; Subset Sum; Knapsack)*
4. **Độ phức tạp không gian (L, PSPACE) và chiến lược giải quyết bài toán NP-khó** (`cc-space-complexity-coping-strategies`): Quan hệ giữa thời gian và không gian, định lý Savitch, và các hướng tiếp cận thực tế khi gặp bài toán NP-khó: giải đúng trên trường hợp đặc biệt (cây, DAG), tham số hóa (FPT), xấp xỉ có cận, hoặc dùng bộ giải SAT/ILP. *(Nguồn chính: mit-6045-2020: Lectures 19–20: Space Complexity; PSPACE-complete problems; erickson-algorithms: Ch. 12 NP-Hardness; Approximation Algorithms; Fast Exponential Algorithms)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Khẳng định rõ: NP là viết tắt của Nondeterministic Polynomial time (thời gian đa thức không đơn định), tuyệt đối không có nghĩa là "Not Polynomial" (không đa thức); và P != NP hiện vẫn là giả thuyết mở chưa được chứng minh.

- **Giáo trình / Nguồn chuẩn:** `erickson-algorithms` (Algorithms — *Chapter 12: NP-Hardness (§12.1–12.16)*, vai trò: `primary`); `mit-6045j-2011` (Automata, Computability, and Complexity (MIT 6.045J) — *Lectures 13–19 (Complexity Theory, P vs NP, NP-Completeness, Space Complexity)*, vai trò: `primary`)

### CS-21: Nền tảng ngôn ngữ lập trình (`programming-languages-foundations`)
- **Phân loại:** `core` | **Khối:** `block-3`
- **Điều kiện tiên quyết:**
  - `object-oriented-programming` (*required*): Cần kinh nghiệm với một ngôn ngữ biên dịch tĩnh (C++) để đối chiếu các cơ chế ngôn ngữ.
  - `data-structures` (*required*): Cần cấu trúc cây (AST), bảng băm (bảng ký hiệu/môi trường) và ngăn xếp.
  - `formal-languages-computability` (*recommended*): Văn phạm phi ngữ cảnh (CFG) giúp hiểu rõ quá trình phân tích cú pháp (parsing).

**Bản chất và nội dung môn học:**

Môn học tách các nguyên lý ngữ nghĩa phổ quát của ngôn ngữ lập trình ra khỏi cú pháp bề mặt của từng ngôn ngữ riêng lẻ. Nội dung nghiên cứu cách một chương trình được biểu diễn thành cây cú pháp trừu tượng (AST) và được đánh giá trong mô hình môi trường (environment model): sự gắn kết tên–giá trị (binding), tầm vực tĩnh (lexical/static scoping) so với tầm vực động (dynamic scoping), hàm như giá trị hạng nhất (first-class functions), bao đóng (closures), thứ tự đánh giá nghiêm ngặt (eager/applicative) so với đánh giá lười (lazy/normal-order), biến đổi trạng thái so với dữ liệu bất biến, hệ thống kiểu tĩnh/động, kiểm tra kiểu và suy diễn kiểu cơ bản, cùng cấu trúc của một bộ thông dịch (interpreter).

**Cấu trúc chương mục:**
1. **Cú pháp bề mặt, Cây cú pháp trừu tượng (AST) và thứ tự đánh giá biểu thức** (`plf-syntax-ast-evaluation`): Phân tích từ vựng (lexing) và phân tích cú pháp (parsing) thành AST, phân biệt biểu thức (expression) với câu lệnh (statement), đánh giá applicative-order vs normal-order và short-circuiting. *(Nguồn chính: composing-programs: Version 2 (/pages/): §1.2 Elements of Programming; §1.5 Control; §3.4 Interpreters for Languages with Combination; crafting-interpreters: Ch. 4 Scanning; Ch. 5 Representing Code; Ch. 6 Parsing Expressions; Ch. 7 Evaluating Expressions; sicp-comparison: §1.1.5 The Substitution Model — Applicative order versus normal order; §4.2.2 An Interpreter with Lazy Evaluation — memoized thunks)*
2. **Mô hình môi trường, tầm vực tĩnh (Lexical Scope) và Bao đóng (Closures)** (`plf-environments-scope-closures`): Khung môi trường (environment frames), chuỗi tra cứu tên biến theo vị trí định nghĩa trong mã nguồn (lexical scoping), hàm bậc cao và cách closure giữ lại môi trường tạo ra nó. *(Nguồn chính: composing-programs: Version 2 (/pages/): §1.3 Defining New Functions; §1.6 Higher-Order Functions; §3.5; crafting-interpreters: Ch. 8 Statements and State; Ch. 10 Functions; Ch. 11 Resolving and Binding)*
3. **Trạng thái khả biến, tính bất biến và Hệ thống kiểu dữ liệu** (`plf-state-mutation-type-systems`): Hệ quả của phép gán và chia sẻ định danh đối tượng (identity vs equality), lập trình hàm bất biến, kiểm tra kiểu tĩnh vs động, an toàn kiểu (type soundness) và đa hình tham số (generics). *(Nguồn chính: composing-programs: Version 2 (/pages/): §2.4 Mutable Data; §2.7 Object Abstraction; crafting-interpreters: Ch. 7: Design Note Static and Dynamic Typing; cornell-cs6110-2011: Lecture 26 §1: Soundness from the Operational Perspective)*
4. **Kiến trúc bộ thông dịch (Tree-Walk Interpreter) và quản lý bộ nhớ tự động** (`plf-interpreters-runtime-models`): Vòng lặp Eval–Apply đệ quy trên AST, biểu diễn giá trị lúc chạy, xử lý luồng điều khiển và nguyên lý thu gom rác cơ bản (Reference Counting vs Tracing Mark-and-Sweep). *(Nguồn chính: composing-programs: Version 2 (/pages/): §3.3 Exceptions; §3.4; §3.5; §2.9 Recursive Objects: Garbage Collection; crafting-interpreters: Ch. 7–10; Ch. 18 Types of Values; Ch. 26 Garbage Collection)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Tập trung vào ngữ nghĩa ngôn ngữ và mô hình đánh giá; các kỹ thuật biên dịch tối ưu hóa mã máy, thanh ghi và SSA được đặt ở Nhánh chuyên sâu Compiler & Runtime (Khối VII).

- **Giáo trình / Nguồn chuẩn:** `composing-programs` (Composing Programs — *Chapters 1–3 (Functions, Data, State, and Interpreting Computer Programs)*, vai trò: `primary`); `crafting-interpreters` (Crafting Interpreters — *Part II: A Tree-Walk Interpreter (Chapters 4–11) & Chapter 26 (Garbage Collection)*, vai trò: `primary`)

---

## Khối IV — Hệ thống máy tính

Đi xuyên suốt từ mức cổng logic và mạch số, lên kiến trúc tập lệnh và vi kiến trúc CPU/Cache, giao diện lập trình hệ thống Unix/Linux, cơ chế bên trong của hệ điều hành (ảo hóa CPU, bộ nhớ ảo, hệ thống tệp), lập trình đồng thời và song song, mạng máy tính TCP/IP đến các hệ thống phân tán chịu lỗi.

### CS-22: Logic số và tổ chức máy (`digital-logic-computer-organization`)
- **Phân loại:** `core` | **Khối:** `block-4`
- **Điều kiện tiên quyết:**
  - `discrete-math` (*required*): Cần đại số Boolean, bảng chân trị và hệ đếm/số học nhị phân.
  - `intro-programming` (*required*): Cần hiểu khái niệm biến, địa chỉ và câu lệnh điều khiển để đối chiếu với thanh ghi và lệnh máy.

**Bản chất và nội dung môn học:**

Môn học giải thích cách một máy tính được kiến tạo từ các cổng logic cơ sở dựa trên đại số Boolean. Nội dung đi từ biểu diễn nhị phân của số nguyên (bù hai — two’s complement), dấu chấm động IEEE 754 và văn bản Unicode, đến việc tổng hợp các cổng logic (NAND, AND, OR, NOT, XOR, Multiplexer) thành mạch tổ hợp và đơn vị số học–logic (ALU). Tiếp theo, môn học đưa tín hiệu xung nhịp (clock) và mạch tuần tự (Flip-Flop, thanh ghi, mảng bộ nhớ RAM) vào để lưu trữ trạng thái, rồi kết nối datapath và bộ điều khiển (control unit) thành một mô hình CPU hoàn chỉnh thực thi chu trình nạp–giải mã–thực thi (fetch–decode–execute).

**Cấu trúc chương mục:**
1. **Biểu diễn bit, số nguyên bù hai, dấu chấm động IEEE 754 và mã hóa ký tự** (`dlco-binary-numbers-ieee754`): Hệ nhị phân/thập lục phân, số nguyên có dấu bù hai, tràn số học, cấu trúc dấu–mũ–định trị của IEEE 754 (sai số làm tròn, mất tính kết hợp) và mã hóa UTF-8. *(Nguồn chính: ucb-cs61c-notes: Number Representation; Floating Point)*
2. **Đại số Boolean, mạch tổ hợp và thiết kế khối số học–logic (ALU)** (`dlco-boolean-combinational-alu`): Cổng NAND phổ quát, tối giản biểu thức Boolean, bộ chọn kênh (Mux/Demux), bộ cộng bán phần/toàn phần (Half/Full Adder) và kiến trúc ALU. *(Nguồn chính: nand2tetris: Projects 1 Boolean Logic and 2 Boolean Arithmetic)*
3. **Xung nhịp, mạch tuần tự, thanh ghi và tổ chức bộ nhớ RAM** (`dlco-sequential-registers-ram`): Sự khác biệt giữa mạch tổ hợp và mạch tuần tự có trạng thái, D Flip-Flop, thanh ghi đa bit, bộ đếm chương trình (PC) và giải mã địa chỉ trong RAM. *(Nguồn chính: nand2tetris: Project 3: Sequential Logic; ucb-cs61c-notes: Synchronous Digital Systems)*
4. **Đường dữ liệu (Datapath), tín hiệu điều khiển và chu trình lệnh của CPU mô hình** (`dlco-datapath-control-cpu-cycle`): Mã hóa lệnh máy nhị phân, giải mã trường lệnh, phối hợp ALU–thanh ghi–bộ nhớ trong một chu kỳ lệnh và giới hạn của CPU giáo cụ so với vi xử lý thương mại. *(Nguồn chính: nand2tetris: Project 4: Machine Language; Project 5: Computer Architecture)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Nêu rõ CPU mô hình (như Hack trong Nand2Tetris) là mô hình giảng dạy đã giản lược: không có pipeline, không có cache, không có chế độ đặc quyền kernel/user và không đại diện cho vi kiến trúc thương mại hiện đại (được học ở Môn 23).

- **Giáo trình / Nguồn chuẩn:** `nand2tetris` (From Nand to Tetris: Building a Modern Computer From First Principles — *Chapters 1–5 (Boolean Logic, Boolean Arithmetic, Sequential Logic, Machine Language, Computer Architecture)*, vai trò: `primary`); `ucb-cs61c-notes` (CS 61C: Great Ideas in Computer Architecture — Course Notes — *Number Representation, Floating Point, and Synchronous Digital Systems Notes*, vai trò: `primary`)

### CS-23: Kiến trúc máy tính (`computer-architecture`)
- **Phân loại:** `core` | **Khối:** `block-4`
- **Điều kiện tiên quyết:**
  - `digital-logic-computer-organization` (*required*): Cần nắm vững biểu diễn số, mạch tuần tự, thanh ghi, ALU và datapath đơn chu kỳ.
  - `cpp-memory-model` (*required*): Cần hiểu con trỏ, mảng, struct alignment và khung ngăn xếp ở mức ngôn ngữ C/C++.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu hợp đồng giao tiếp giữa phần mềm và phần cứng thông qua Kiến trúc Tập lệnh (ISA — lấy RISC-V làm chuẩn minh họa) cùng các kỹ thuật tổ chức vi kiến trúc giúp tăng hiệu năng thực thi. Nội dung bao gồm tập thanh ghi, các định dạng lệnh RISC-V, quy ước gọi hàm (calling convention, bảo toàn thanh ghi caller-saved vs callee-saved, tổ chức khung ngăn xếp), kỹ thuật đường ống lệnh 5 tầng (pipelining) và xử lý các xung đột cấu trúc, dữ liệu (forwarding/stalling) và điều khiển (branch prediction). Tiếp theo là phân cấp bộ nhớ và bộ nhớ đệm (cache: direct-mapped, set-associative, chính sách ghi, tính cục bộ không gian/thời gian), giao diện phần cứng của bộ nhớ ảo (MMU/TLB), cơ chế vào/ra (I/O, ngắt, DMA), định luật Amdahl và song song mức dữ liệu (SIMD).

**Cấu trúc chương mục:**
1. **Kiến trúc tập lệnh (ISA), hợp ngữ RISC-V và Quy ước gọi hàm (Calling Convention)** (`ca-isa-riscv-calling-convention`): Tách biệt ISA với vi kiến trúc, tập lệnh số học/truy cập bộ nhớ/rẽ nhánh RISC-V, quản lý con trỏ ngăn xếp (sp), địa chỉ trả về (ra) và bảo toàn thanh ghi qua lời gọi hàm đệ quy. *(Nguồn chính: ucb-cs61c-notes: RISC-V; RISC-V Instruction Formats; CALL)*
2. **Đường ống lệnh (Pipelining) và xử lý xung đột (Hazards)** (`ca-pipelining-hazards`): Tăng thông lượng bằng đường ống 5 tầng (IF, ID, EX, MEM, WB), xung đột dữ liệu và đường nhìn trước (forwarding/bypassing), lệnh trễ load-use và xung đột nhánh. *(Nguồn chính: ucb-cs61c-notes: Single-Cycle CPU; Pipelining)*
3. **Phân cấp bộ nhớ, tính cục bộ và Kiến trúc bộ nhớ đệm (Cache)** (`ca-memory-hierarchy-caches`): Khoảng cách tốc độ CPU–DRAM, tính cục bộ thời gian và không gian, tách địa chỉ thành Tag/Index/Offset, cache ánh xạ trực tiếp và kết hợp tập hợp, phân loại 3C misses (compulsory, capacity, conflict) và viết mã thân thiện với cache. *(Nguồn chính: ucb-cs61c-notes: Caches; Performance Programming)*
4. **Hỗ trợ phần cứng cho Bộ nhớ ảo, Ngắt/DMA và Hiệu năng song song (Định luật Amdahl)** (`ca-hardware-vm-io-parallelism`): Chế độ đặc quyền của CPU, MMU/TLB, cơ chế polling vs interrupt-driven I/O vs DMA, công thức thời gian CPU = IC x CPI x Clock Period, Định luật Amdahl và lệnh vector SIMD. *(Nguồn chính: ucb-cs61c-notes: Virtual Memory; Performance Programming)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Phân biệt rõ đặc tả tập lệnh (ISA như RISC-V hoặc x86-64) với một thế hệ vi kiến trúc cụ thể (như thực thi ngoài thứ tự — out-of-order execution hay bộ nhớ đệm nhiều cấp của một dòng chip riêng).

- **Giáo trình / Nguồn chuẩn:** `ucb-cs61c-notes` (CS 61C: Great Ideas in Computer Architecture — Course Notes — *RISC-V, Pipelining, Caches, Virtual Memory, I/O, and Performance Notes*, vai trò: `primary`); `dive-into-systems` (Dive Into Systems — *Chapters 7–9 (Assembly) & Chapter 11 (Storage and Memory Hierarchy)*, vai trò: `supplementary`)

### CS-24: Linux/Unix và lập trình hệ thống (`linux-system-programming`)
- **Phân loại:** `core` | **Khối:** `block-4`
- **Điều kiện tiên quyết:**
  - `git-dev-tools` (*required*): Cần nắm vững dòng lệnh shell, đường dẫn và quy trình build cơ bản.
  - `cpp-memory-model` (*required*): Cần hiểu sâu con trỏ, bố cục bộ nhớ và vùng đệm byte.
  - `computer-architecture` (*required*): Cần hiểu chế độ đặc quyền user/kernel, thanh ghi, ngắt và ngăn xếp.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu giao diện lập trình hệ thống (System Call API) mà qua đó chương trình ở không gian người dùng (user space) yêu cầu nhân hệ điều hành (kernel) thực hiện các thao tác đặc quyền. Nội dung mở đầu bằng phần cầu nối ngôn ngữ C hệ thống (con trỏ, mảng byte, chuỗi kết thúc bằng null, mã lỗi `errno`, quản lý bộ nhớ thủ công) và quá trình biên dịch–liên kết tĩnh/động (ELF, symbol resolution, relocation). Trên nền đó, môn học phân tích vòng đời tiến trình (`fork`, `execve`, `waitpid`), bảng mô tả tệp (file descriptors), vào/ra mức thấp (`open`, `read`, `write` và xử lý đọc/ghi thiếu byte — short counts), chuyển hướng luồng (`dup2`), đường ống liên tiến trình (`pipe`), tín hiệu không đồng bộ (POSIX signals) và giao diện socket cơ sở.

**Cấu trúc chương mục:**
1. **Cầu nối ngôn ngữ C hệ thống, Biên dịch, Liên kết (Linking) và tệp thực thi ELF** (`lsp-c-bridge-linking-elf`): Khác biệt cốt lõi giữa C và C++, thao tác vùng nhớ thô, tệp đối tượng, bảng ký hiệu (symbol table), liên kết tĩnh vs thư viện chia sẻ động và cách hệ điều hành nạp chương trình. *(Nguồn chính: dive-into-systems: Chapter 2: strings, dynamic memory, and §2.9.6 Writing and using your own C libraries)*
2. **Lời gọi hệ thống (System Calls), Vòng đời tiến trình và Tín hiệu (Signals)** (`lsp-syscalls-processes-signals`): Cơ chế chuyển ngữ cảnh từ user mode sang kernel mode qua trap, nguyên lý tách fork() và exec(), thu dọn tiến trình con tránh zombie bằng waitpid(), và xử lý tín hiệu không đồng bộ an toàn. *(Nguồn chính: ostep-v110: Chapter 5: Interlude: Process API; dive-into-systems: Chapter 13: processes and system calls)*
3. **Bảng mô tả tệp (File Descriptors), Vào/Ra mức thấp và Đường ống (Pipes)** (`lsp-descriptors-io-pipes`): Trừu tượng hóa tệp Unix, sự khác biệt giữa FILE* có đệm của thư viện C và file descriptor của kernel, hiện tượng đọc/ghi từng phần (short counts), chia sẻ bảng mở tệp qua fork, dup2() và pipe(). *(Nguồn chính: ostep-v110: Chapter 39: Files and Directories; mit-xv6-2025: Chapter 1: I/O, file descriptors, pipes)*
4. **Cấu trúc hệ thống tệp, Quyền truy cập POSIX và Giao tiếp liên tiến trình cơ sở** (`lsp-filesystem-permissions-ipc`): Inode, liên kết cứng (hard link) vs liên kết mềm (symbolic link), bit quyền rwx/setuid, ánh xạ tệp vào bộ nhớ (mmap) và tổng quan các cơ chế IPC. *(Nguồn chính: ostep-v110: Chapters 14 Memory API and 39 Files and Directories; mit-xv6-2025: Chapter 1: File system; Chapter 3: shared mappings as a VM extension)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Dạy rõ các đặc trưng của ngôn ngữ C hệ thống trước khi đọc mã nguồn hệ thống; không đồng nhất C với C++ và luôn kiểm tra giá trị trả về cùng biến `errno` của mọi lời gọi hệ thống.

- **Giáo trình / Nguồn chuẩn:** `ostep-v110` (Operating Systems: Three Easy Pieces (OSTEP) — *Chapters 5–6 (Process API & Limited Direct Execution) and Chapters 39–40 (Files and Directories)*, vai trò: `primary`); `dive-into-systems` (Dive Into Systems — *Chapters 1–2 (C Programming) & Chapter 13 (Operating Systems and Processes)*, vai trò: `primary`); `mit-xv6-2025` (xv6: a simple, Unix-like teaching operating system (MIT 6.1810) — *Chapter 1: Operating System Interfaces (Processes, I/O, Pipes, File System)*, vai trò: `supplementary`)

### CS-25: Hệ điều hành (`operating-systems`)
- **Phân loại:** `core` | **Khối:** `block-4`
- **Điều kiện tiên quyết:**
  - `computer-architecture` (*required*): Cần hiểu thanh ghi, ngắt phần cứng, chế độ đặc quyền CPU, bộ nhớ cache và MMU/TLB.
  - `linux-system-programming` (*required*): Cần hiểu giao diện tiến trình, lời gọi hệ thống và mô tả tệp từ góc nhìn người dùng trước khi mổ xẻ cơ chế bên trong kernel.
  - `data-structures` (*required*): Cần hàng đợi ưu tiên, cây, bảng băm và bitmap để hiểu bộ lập lịch, bảng trang và cấp phát khối đĩa.

**Bản chất và nội dung môn học:**

Môn học phân tích các cơ chế và chính sách cốt lõi mà hệ điều hành sử dụng để ảo hóa tài nguyên phần cứng hữu hạn, điều phối thực thi đồng thời và lưu trữ dữ liệu bền vững. Nội dung được tổ chức quanh ba trụ cột kinh điển: (1) Ảo hóa CPU — mô hình tiến trình, trạng thái tiến trình, cơ chế thực thi trực tiếp có giới hạn (Limited Direct Execution), chuyển ngữ cảnh (context switch) và các thuật toán lập lịch (FIFO, SJF, Round-Robin, MLFQ, tỷ lệ công bằng); (2) Ảo hóa bộ nhớ — không gian địa chỉ ảo, dịch địa chỉ bằng phần cứng (MMU), phân đoạn, phân trang (paging), bảng trang đa cấp, bộ đệm TLB, ngắt thiếu trang (page fault) và chính sách thay thế trang; (3) Lưu trữ bền vững và bảo vệ — thiết bị khối, lập lịch I/O, thiết kế hệ thống tệp (VSFS/FFS/LFS), tính nhất quán khi sập nguồn (crash consistency, fsck, journaling/WAL) và cơ chế cô lập/bảo vệ tài nguyên.

**Cấu trúc chương mục:**
1. **Ảo hóa CPU: Trừu tượng hóa tiến trình và Cơ chế thực thi trực tiếp có giới hạn** (`os-cpu-virtualization-mechanisms`): Cấu trúc khối điều khiển tiến trình (PCB), tách biệt không gian kernel/user, bảng vector trap, lấy lại quyền điều khiển bằng ngắt đồng hồ (timer interrupt) và lưu/khôi phục thanh ghi khi chuyển ngữ cảnh. *(Nguồn chính: ostep-v110: Chapters 4 Processes, 5 Process API, 6 Limited Direct Execution; mit-xv6-2025: Chapters 2 and 4)*
2. **Chính sách lập lịch CPU và đánh đổi giữa Thời gian quay vòng – Thời gian phản hồi** (`os-cpu-scheduling-policies`): Chỉ số Turnaround Time vs Response Time, hiệu ứng đoàn tàu trong FIFO, tính tối ưu của SJF/STCF, chia sẻ thời gian Round-Robin, hàng đợi phản hồi đa mức (MLFQ) chống bỏ đói và lập lịch đa nhân. *(Nguồn chính: ostep-v110: Chapters 7 Scheduling, 8 Multi-level Feedback, 9 Lottery Scheduling, 10 Multi-CPU Scheduling)*
3. **Bộ nhớ ảo và phân trang (Virtual Memory & Paging)** (`os-virtual-memory`): Trừu tượng hóa không gian địa chỉ, cơ chế dịch địa chỉ MMU, phân đoạn, phân trang (VPN/PFN/Offset), bảng trang đa cấp, bộ đệm TLB, ngắt thiếu trang, không gian swap, chính sách thay thế trang (OPT, FIFO, LRU, Clock, Thrashing) và thực tế phần cứng. *(Nguồn chính: ostep-v110: Chapters 13, 14, 15, 16, 18, 19, 20, 21, 22, 23 (Complete Virtual Memory Sequence); mit-xv6-2025: Chapter 3: Page Tables (RISC-V Sv39 3-level Page Table Architecture))*
4. **Đồng bộ hóa trong nhân hệ điều hành và xử lý Bế tắc (Deadlock)** (`os-synchronization-deadlocks-kernel`): Tương tác giữa ngắt phần cứng và khóa spinlock trong kernel, nguyên nhân và bốn điều kiện cần của deadlock (Coffman conditions), các chiến lược phòng ngừa, tránh né và phát hiện–khôi phục. *(Nguồn chính: ostep-v110: Chapters 26 Threads, 28 Locks, 30 Condition Variables, 32 Concurrency Bugs; mit-xv6-2025: Chapters 6 Locking and 7 Scheduling)*
5. **Thiết bị vào/ra, Hệ thống tệp (File Systems) và Tính nhất quán khi sự cố (Crash Consistency)** (`os-io-storage-filesystems`): Giao thức thiết bị, DMA, trình điều khiển (device drivers), tổ chức đĩa của hệ thống tệp (superblock, bitmap, inode, data blocks), bài toán mất điện giữa chừng và cơ chế Write-Ahead Logging / Journaling. *(Nguồn chính: ostep-v110: Chapters 36 I/O Devices, 37 HDD, 38 RAID, 39 Files and Directories, 40 File System Implementation, 42 FSCK and Journaling, 44 SSD)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Mỗi phần đều tách bạch rõ Cơ chế (Mechanism — làm thế nào phần cứng và OS thực hiện được thao tác) và Chính sách (Policy — thuật toán chọn phương án nào để tối ưu mục tiêu).
- Chương Bộ nhớ ảo (`os-virtual-memory`) trong môn này được biên soạn đầy đủ ở mức mẫu M2.

- **Giáo trình / Nguồn chuẩn:** `ostep-v110` (Operating Systems: Three Easy Pieces (OSTEP) — *Chapters 4–10 (CPU Virtualization), Chapters 13–23 (Memory Virtualization), Chapters 36–43 (Persistence)*, vai trò: `primary`); `mit-xv6-2025` (xv6: a simple, Unix-like teaching operating system (MIT 6.1810) — *Chapters 2–4, 6–8 (Page Tables, Traps, Scheduling, Locking, File System)*, vai trò: `supplementary`)

### CS-26: Lập trình đồng thời và song song (`concurrency-parallelism`)
- **Phân loại:** `core` | **Khối:** `block-4`
- **Điều kiện tiên quyết:**
  - `operating-systems` (*required*): Cần hiểu mô hình luồng, chuyển ngữ cảnh, lập lịch và không gian địa chỉ chia sẻ.
  - `computer-architecture` (*required*): Cần hiểu bộ nhớ đệm (cache lines), tính nhất quán cache cơ bản và Định luật Amdahl.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu các nguyên lý thiết kế, đồng bộ hóa và tối ưu hiệu năng khi nhiều luồng thực thi cùng chia sẻ tài nguyên hoặc phối hợp giải quyết một bài toán. Nội dung phân biệt rõ tính đồng thời (concurrency — cấu trúc điều phối nhiều tác vụ đan xen) với tính song song (parallelism — thực thi đồng thời trên nhiều đơn vị phần cứng), và phân biệt điều kiện tranh chấp logic (race condition) với tranh chấp dữ liệu ở mức bộ nhớ (data race). Tiếp theo là các nguyên thủy đồng bộ hóa (locks/mutexes, biến điều kiện — condition variables, semaphores, thao tác nguyên tử — atomics và rào cản bộ nhớ cơ bản), các mẫu đồng bộ kinh điển (Producer–Consumer với bộ đệm hữu hạn, Readers–Writers), cấu trúc dữ liệu an toàn luồng, phân rã bài toán song song (data parallelism, task parallelism, map-reduce/reduction), hiện tượng chia sẻ giả trên dòng cache (false sharing) và đo lường tăng tốc thực nghiệm.

**Cấu trúc chương mục:**
1. **Mô hình luồng chia sẻ bộ nhớ, Data Race, Race Condition và tính nguyên tử** (`cp-threads-races-memory-model`): Không gian địa chỉ chung với các ngăn xếp luồng riêng, tính không đơn định của bộ lập lịch, phân biệt data race (hành vi không xác định trong C++/C11) với race condition mức nghiệp vụ và khái niệm miền găng (critical section). *(Nguồn chính: ostep-v110: Chapters 26 Threads and 27 Thread API; cpp-draft-concurrency: [intro.races]; [atomics.order])*
2. **Khóa (Locks), Biến điều kiện (Condition Variables) và Đèn hiệu (Semaphores)** (`cp-locks-condition-variables-semaphores`): Đánh giá khóa theo tính loại trừ tương hỗ, tính công bằng và hiệu năng; hỗ trợ phần cứng (Test-and-Set, Compare-and-Swap); mẫu chờ có điều kiện bằng vòng lặp while (Mesa semantics) trên bài toán Producer–Consumer và dùng Semaphore. *(Nguồn chính: ostep-v110: Chapters 28 Locks, 29 Locked Data Structures, 30 Condition Variables, 31 Semaphores)*
3. **Phân loại lỗi đồng thời, lập trình hướng sự kiện (Event-driven) và công cụ phát hiện lỗi** (`cp-concurrency-bugs-event-driven`): Lỗi vi phạm tính nguyên tử, lỗi vi phạm thứ tự, deadlock và cách phòng tránh bằng thứ tự khóa toàn cục; đối chiếu đa luồng với vòng lặp sự kiện I/O không chặn (non-blocking event loop); kiểm chứng bằng ThreadSanitizer. *(Nguồn chính: ostep-v110: Chapters 32 Concurrency Bugs and 33 Event-based Concurrency)*
4. **Phân rã thuật toán song song, Hiện tượng chia sẻ giả (False Sharing) và giới hạn tăng tốc** (`cp-parallel-decomposition-performance`): Mô hình Work–Span (Work vs Critical Path Length), phép thu gọn song song (parallel reduction/prefix scan), cân bằng tải, xung đột dòng cache (false sharing) và phân tích hiệu năng thực nghiệm. *(Nguồn chính: dive-into-systems: Chapter 14: shared memory programming, synchronization and performance; ostep-v110: Chapter 10: multi-CPU scheduling)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Môn học tập trung vào mô hình bộ nhớ chia sẻ trên một máy đa nhân; khi chuyển sang nhiều máy độc lập nối qua mạng không tin cậy, mô hình lỗi thay đổi căn bản và được tách sang Môn 28 (Hệ phân tán).

- **Giáo trình / Nguồn chuẩn:** `ostep-v110` (Operating Systems: Three Easy Pieces (OSTEP) — *Part II: Concurrency (Chapters 26–33)*, vai trò: `primary`); `dive-into-systems` (Dive Into Systems — *Chapter 14 (Shared Memory Parallelism with Pthreads) & Chapter 15 (OpenMP)*, vai trò: `primary`)

### CS-27: Mạng máy tính (`computer-networks`)
- **Phân loại:** `core` | **Khối:** `block-4`
- **Điều kiện tiên quyết:**
  - `linux-system-programming` (*required*): Cần nắm mô tả tệp, vào/ra mức thấp và khái niệm tiến trình để hiểu lập trình socket và đọc/ghi từng phần trên luồng mạng.
  - `graph-algorithms` (*required*): Cần thuật toán đường đi ngắn nhất (Dijkstra, Bellman–Ford) để hiểu định tuyến Link-State và Distance-Vector.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu kiến trúc phân tầng và các giao thức cho phép các hệ thống máy tính truyền thông tin cậy qua môi trường vật lý không hoàn hảo và quy mô toàn cầu. Nội dung trình bày mô hình phân tầng (Application, Transport, Network, Link), nguyên lý đóng gói dữ liệu (encapsulation), phân giải tên miền (DNS), giao thức HTTP và nguyên lý lập trình mạng qua giao diện Socket (đặc biệt giải quyết bài toán đóng khung thông điệp — message framing trên luồng byte TCP). Ở tầng giao vận, môn học đi sâu vào cơ chế truyền tin cậy trên kênh có mất gói/lỗi bit (ACK, timeout, cửa sổ trượt Go-Back-N và Selective Repeat), quản lý kết nối TCP (bắt tay 3 bước, đóng kết nối 4 bước, trạng thái TIME_WAIT), điều khiển luồng và điều khiển tắc nghẽn (Slow Start, AIMD, Fast Retransmit/Recovery). Ở tầng mạng và liên kết, môn học bao quát định địa chỉ IPv4/IPv6, chia mạng con CIDR, NAT, thuật toán định tuyến (Distance Vector, Link State, BGP cơ sở), Ethernet, ARP và bảo mật kênh truyền TLS.

**Cấu trúc chương mục:**
1. **Kiến trúc phân tầng, Độ trễ – Băng thông – Thông lượng, DNS/HTTP và Đóng khung luồng byte** (`cn-layering-metrics-application-framing`): Bốn thành phần độ trễ gói tin (xử lý, hàng đợi, truyền dẫn, lan truyền), tích băng thông–độ trễ (BDP), cơ chế phân giải DNS phân cấp, HTTP và tại sao ứng dụng trên TCP bắt buộc phải tự định nghĩa ranh giới thông điệp (message framing). *(Nguồn chính: dordal-intronetworks: Chapter 1; §7.1 Packet Delay; §10.1 DNS; §17.6 TCP simplex-talk; mdn-learn-web: HTTP messages — https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages)*
2. **Tầng giao vận: UDP, Nguyên lý truyền tin cậy và Quản lý kết nối TCP** (`cn-transport-reliability-tcp`): Ghép kênh/tách kênh theo cổng (ports), cấu trúc UDP, phát hiện lỗi và truyền lại có bộ định thời, cửa sổ trượt (Sliding Window), bắt tay 3 bước của TCP, đóng kết nối 4 bước và điều khiển luồng theo cửa sổ nhận (rwnd). *(Nguồn chính: dordal-intronetworks: Chapters 8 Abstract Sliding Windows, 16 UDP, 17 TCP Basics, 18 TCP Issues)*
3. **Điều khiển tắc nghẽn mạng (Congestion Control)** (`cn-congestion-control`): Sự sụp đổ thông lượng khi tắc nghẽn, điều khiển phản hồi AIMD (tăng cộng tính, giảm nhân tính) hướng tới công bằng và hiệu quả, cửa sổ tắc nghẽn (cwnd), Slow Start, Congestion Avoidance, Fast Retransmit và tổng quan CUBIC/BBR. *(Nguồn chính: dordal-intronetworks: Chapters 19 TCP Reno, 20 Dynamics, 21 Further Dynamics, 22 Newer TCP, 23 Queuing)*
4. **Tầng mạng: IPv4/IPv6, Chia mạng con CIDR, NAT và Thuật toán định tuyến** (`cn-network-ip-cidr-routing`): Cấu trúc gói tin IP, phân mảnh, khớp tiền tố dài nhất (Longest Prefix Match) trong CIDR, cơ chế NAT/DHCP, ICMP, định tuyến nội miền (OSPF/Link-State, RIP/Distance-Vector) và định tuyến liên miền theo chính sách (BGP). *(Nguồn chính: dordal-intronetworks: Chapters 9–15: IPv4, companion protocols, IPv6, routing and BGP)*
5. **Tầng liên kết dữ liệu (Ethernet, ARP, Switching) và Bảo mật giao vận (TLS)** (`cn-link-layer-lan-tls`): Đóng khung tầng liên kết, phát hiện lỗi CRC, đa truy cập CSMA/CD và CSMA/CA (Wi-Fi), phân giải địa chỉ MAC bằng ARP, cầu nối tự học (self-learning switch) và thiết lập kênh mã hóa xác thực bằng TLS. *(Nguồn chính: dordal-intronetworks: Chapters 2–4; §6.1 Encoding and Framing; §7.4 Error Detection; §§29.3–29.5)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Làm rõ sự khác biệt cốt tử: UDP giữ ranh giới datagram nhưng không bảo đảm thứ tự/đến đích, còn TCP bảo đảm thứ tự luồng byte tin cậy nhưng tuyệt đối không giữ ranh giới các lệnh `send()`/`write()` riêng lẻ.

- **Giáo trình / Nguồn chuẩn:** `dordal-intronetworks` (An Introduction to Computer Networks — *Chapters 1–3, 7–14, 22, 29 (Layering, Ethernet, IPv4/CIDR, Routing, UDP, TCP, Congestion Control, DNS, Security)*, vai trò: `primary`)

### CS-28: Hệ phân tán (`distributed-systems`)
- **Phân loại:** `core` | **Khối:** `block-4`
- **Điều kiện tiên quyết:**
  - `operating-systems` (*required*): Cần hiểu lưu trữ bền vững, nhật ký chống sập nguồn (WAL) và quản lý tiến trình.
  - `concurrency-parallelism` (*required*): Cần nắm vững thực thi đan xen, điều kiện tranh chấp và tính nguyên tử.
  - `computer-networks` (*required*): Cần hiểu độ trễ mạng, mất gói, đóng kết nối và vì sao timeout không phân biệt được nút chết với mạng chậm.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu những thách thức nền tảng khi xây dựng một hệ thống hợp nhất từ nhiều nút máy tính độc lập giao tiếp qua mạng không đồng bộ: nơi các nút có thể sập độc lập (partial failure), gói tin có thể trễ, mất hoặc nhân bản, và không tồn tại đồng hồ vật lý chung hoàn hảo. Nội dung đi từ mô hình lỗi và mô hình mạng, đồng hồ logic Lamport và đồng hồ vector xác lập quan hệ xảy ra trước (happens-before), đến các mô hình nhất quán dữ liệu (Linearizability, Sequential Consistency, Eventual Consistency), định lý CAP dưới điều kiện phân mảnh mạng, nhân bản trạng thái (Primary–Backup, State Machine Replication), thuật toán đồng thuận chống lỗi sập nút (Raft), giao dịch phân tán và cam kết hai pha (Two-Phase Commit — 2PC), thiết kế thao tác lũy đẳng (idempotency) khi thử lại (retry), và phân vùng dữ liệu (sharding/consistent hashing).

**Cấu trúc chương mục:**
1. **Mô hình lỗi cục bộ, Mạng không đồng bộ, Đồng hồ logic Lamport và Vector Clocks** (`dsys-failure-models-clocks-ordering`): Lỗi dừng (crash-stop) vs lỗi khôi phục (crash-recovery) vs lỗi Byzantine, bất khả phân biệt giữa nút sập và phân mảnh mạng qua timeout, quan hệ happens-before và thiết lập thứ tự bộ phận/toàn phần của sự kiện. *(Nguồn chính: lamport-time-clocks: Partial ordering; Logical clocks; mit-65840-raft: Ongaro & Ousterhout, Raft extended paper (2014), §2 Replicated state machines; §5.6 Timing and availability)*
2. **Nhân bản dữ liệu, Các mô hình tính nhất quán và Định lý CAP** (`dsys-replication-consistency-cap`): Nhân bản Primary–Backup và Chain Replication, tính tuyến tính hóa (Linearizability) so với nhất quán tuần tự và nhất quán cuối cùng, điều kiện chính xác của định lý CAP khi có phân vùng mạng (Network Partition). *(Nguồn chính: mit-65840-raft: Ongaro & Ousterhout, Raft extended paper (2014), §2 Replicated state machines; §8 Client interaction; gilbert-lynch-cap: §§2–3 CAP formulation and practical implications; amazon-dynamo-2007: §§4.3–4.6)*
3. **Đồng thuận phân tán và Thuật toán Raft** (`dsys-consensus-raft`): Tại sao nhân bản máy trạng thái cần đồng thuận chống split-brain, phân rã bài toán đồng thuận trong Raft: bầu chọn Leader theo nhiệm kỳ (Term), nhân bản nhật ký (Log Replication), điều kiện an toàn bầu cử và thu gọn nhật ký (Snapshotting). *(Nguồn chính: mit-65840-raft: Ongaro & Ousterhout, Raft extended paper (2014), §§2, 5.1–5.6, 6, 7 and 8; Figure 2)*
4. **Giao dịch phân tán (2PC), Lũy đẳng khi thử lại (Idempotency) và Phân mảnh dữ liệu (Sharding)** (`dsys-distributed-transactions-idempotency-sharding`): Giao thức cam kết hai pha (2PC) và điểm nghẽn chặn khi điều phối viên gặp sự cố, tại sao mạng chỉ cung cấp at-least-once/at-most-once và cách đạt hiệu ứng tương đương một lần qua khóa lũy đẳng + khử trùng lặp có trạng thái, cùng băm nhất quán (Consistent Hashing). *(Nguồn chính: mit-6824-2pc-2006: Lecture 13: Two-Phase Commit, pages 1–3; mit-65840-raft: Ongaro & Ousterhout, Raft extended paper (2014), §8 Client interaction; amazon-dynamo-2007: §4.2 Partitioning Algorithm; §4.3 Replication)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Khẳng định rõ: không tồn tại giao thức truyền thông nào tự đạt "exactly-once delivery" thuần túy ở tầng mạng; hiệu ứng xử lý đúng một lần chỉ đạt được khi kết hợp truyền lại (at-least-once) với lưu trữ trạng thái khử trùng lặp hoặc thao tác lũy đẳng ở đầu nhận.

- **Giáo trình / Nguồn chuẩn:** `mit-65840-raft` (MIT 6.5840 Distributed Systems & The Raft Consensus Algorithm — *Raft Consensus Paper (§1–§8) and MIT 6.5840 Lecture Notes on Replication, Consistency, and 2PC*, vai trò: `primary`)

---

## Khối V — Dữ liệu và xây dựng phần mềm

Nghiên cứu mô hình dữ liệu quan hệ, đại số quan hệ, chuẩn hóa và giao dịch SQL, đi sâu vào kiến trúc bên trong hệ quản trị cơ sở dữ liệu (lưu trữ trang, B+Tree, tối ưu hóa truy vấn, MVCC, WAL recovery), cùng các nguyên lý kỹ nghệ phần mềm quy mô lớn, kiến trúc ứng dụng Web, vận hành hệ thống tin cậy và bảo mật.

### CS-29: Mô hình dữ liệu và database (`data-modeling-databases`)
- **Phân loại:** `core` | **Khối:** `block-5`
- **Điều kiện tiên quyết:**
  - `discrete-math` (*required*): Cần lý thuyết tập hợp, quan hệ hai ngôi, tích Descartes và logic vị từ để hiểu đại số quan hệ và chuẩn hóa.
  - `data-structures` (*required*): Cần nắm bảng băm và cây tìm kiếm để hiểu vai trò của chỉ mục.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu nền tảng toán học và kỹ thuật của mô hình cơ sở dữ liệu quan hệ — trụ cột lưu trữ có cấu trúc của các hệ thống thông tin. Nội dung đi từ mô hình thực thể–liên kết (ER), mô hình quan hệ, khóa chính/khóa ngoại và các ràng buộc toàn vẹn, đến đại số quan hệ (Relational Algebra — tập hợp) và ngôn ngữ truy vấn SQL (ngữ nghĩa túi — bag semantics, logic ba giá trị với `NULL`, phép kết nối joins, gom nhóm, truy vấn con và biểu thức bảng chung CTE). Tiếp theo là lý thuyết phụ thuộc hàm (functional dependencies), bao đóng thuộc tính, chuẩn hóa lược đồ (1NF, 2NF, 3NF, BCNF) gắn với tính bảo toàn thông tin (lossless-join) và bảo toàn phụ thuộc, nguyên lý sử dụng chỉ mục và đọc kế hoạch thực thi truy vấn, cùng giao dịch ACID, các mức cô lập và quy trình sao lưu/phục hồi.

**Cấu trúc chương mục:**
1. **Mô hình quan hệ, Ràng buộc toàn vẹn và Đại số quan hệ** (`dmd-relational-model-algebra`): Quan hệ, bộ (tuple), thuộc tính, miền giá trị, siêu khóa/khóa ứng viên/khóa chính/khóa ngoại, và sáu phép toán cơ sở của đại số quan hệ (chọn, chiếu, hợp, hiệu, tích Descartes, đổi tên) cùng các phép kết nối. *(Nguồn chính: UC Berkeley CS 186 Notes: Relational Algebra & PostgreSQL Docs Part I)*
2. **Ngôn ngữ SQL, Ngữ nghĩa túi (Bag Semantics) và Logic ba giá trị của NULL** (`dmd-sql-semantics-null-queries`): Sự khác biệt giữa tập hợp và túi bản ghi, thứ tự đánh giá logic của câu lệnh SELECT–FROM–WHERE–GROUP BY–HAVING–ORDER BY, phép kết nối ngoài (outer joins), các bẫy logic với UNKNOWN/NULL và truy vấn đệ quy. *(Nguồn chính: PostgreSQL Docs Part II (The SQL Language, Ch. 4–9) & CS 186 SQL Notes)*
3. **Thiết kế Thực thể–Liên kết (ER), Phụ thuộc hàm và Lý thuyết chuẩn hóa (3NF, BCNF)** (`dmd-er-functional-dependencies-normalization`): Chuyển đổi sơ đồ ER sang bảng quan hệ, dị thường cập nhật/thêm/xóa do dư thừa dữ liệu, tiên đề Armstrong, bao đóng thuộc tính, phân rã bảo toàn thông tin (lossless-join decomposition) và so sánh BCNF với 3NF. *(Nguồn chính: UC Berkeley CS 186 Notes: ER Diagrams & Functional Dependencies / Normalization)*
4. **Giao dịch ACID, Mức độ cô lập, Sử dụng chỉ mục và An toàn vận hành dữ liệu** (`dmd-transactions-isolation-indexing-ops`): Ý nghĩa của Atomicity, Consistency, Isolation, Durability từ góc nhìn ứng dụng; các hiện tượng đọc bất thường (dirty, non-repeatable, phantom, write skew) và 4 mức cô lập SQL; đọc kế hoạch EXPLAIN, phân quyền và phân biệt sao lưu (backup) với khôi phục giao dịch. *(Nguồn chính: PostgreSQL Docs Ch. 11 (Indexes), Ch. 13 (Concurrency Control), Ch. 25 (Backup and Restore))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Phân biệt rõ: sao lưu định kỳ (backup/dump) bảo vệ trước thảm họa mất ổ đĩa hoặc xóa nhầm dữ liệu, nhưng không thay thế được cơ chế phục hồi giao dịch tức thời (transaction recovery/WAL) của hệ quản trị cơ sở dữ liệu.

- **Giáo trình / Nguồn chuẩn:** `postgresql-docs` (PostgreSQL Current Documentation — *Part II (The SQL Language), Chapter 11 (Indexes), Chapter 13 (Concurrency Control), Chapter 25 (Backup and Restore)*, vai trò: `primary`); `ucb-cs186-notes` (CS 186: Introduction to Database Systems — Course Notes — *SQL, Relational Algebra, ER Diagrams, and Functional Dependencies Notes*, vai trò: `primary`)

### CS-30: Bên trong hệ quản trị dữ liệu (`database-internals`)
- **Phân loại:** `core` | **Khối:** `block-5`
- **Điều kiện tiên quyết:**
  - `data-modeling-databases` (*required*): Cần nắm vững mô hình quan hệ, đại số quan hệ, SQL và khái niệm giao dịch ACID.
  - `operating-systems` (*required*): Cần hiểu bộ nhớ ảo, hệ thống tệp, đệm trang của hệ điều hành và đồng bộ hóa luồng.
  - `data-structures` (*required*): Cần hiểu sâu cây tìm kiếm cân bằng và bảng băm.

**Bản chất và nội dung môn học:**

Môn học mở nắp hộp đen của một hệ quản trị cơ sở dữ liệu (DBMS) để phân tích cách dữ liệu được lưu trữ trên thiết bị khối, nạp vào bộ nhớ, tìm kiếm, kết nối, tối ưu hóa và bảo vệ trước truy cập đồng thời cũng như sự cố sập nguồn. Nội dung đi từ kiến trúc lưu trữ hướng trang (slotted pages, biểu diễn bản ghi cố định/biến đổi, heap files vs sequential files) và bộ quản lý vùng đệm (buffer pool manager: frame, pin count, dirty bit, chính sách thay thế LRU-K/Clock, và vì sao DBMS không giao phó hoàn toàn cho `mmap` của OS), đến cấu trúc chỉ mục B+Tree (bất biến cân bằng, tách/gộp nút, khóa chốt đồng thời — latch crabbing) và LSM-Tree cơ sở. Tiếp theo là thực thi truy vấn (mô hình Iterator/Volcano, sắp xếp ngoài — external merge sort, các thuật toán Nested Loop Join, Sort-Merge Join, Hash Join), bộ tối ưu hóa truy vấn dựa trên chi phí (System R / Selinger optimizer, thống kê histogram), điều khiển đồng thời (khóa hai pha nghiêm ngặt — Strict 2PL, phát hiện deadlock, và kiểm soát đồng thời đa phiên bản MVCC), cùng cơ chế nhật ký ghi trước (Write-Ahead Logging — WAL) và phục hồi sau sự cố theo chuẩn ARIES (Analysis, Redo, Undo).

**Cấu trúc chương mục:**
1. **Kiến trúc lưu trữ trên đĩa, Bố cục trang (Slotted Pages) và Quản lý bộ đệm (Buffer Pool)** (`dbi-storage-pages-buffer-pool`): Chi phí truy cập ngẫu nhiên vs tuần tự trên đĩa/SSD, cấu trúc trang có khe (header, slot array, tuple data), tổ chức tệp heap, quản lý khung trang trong RAM, pin/unpin và kiểm soát thứ tự ghi trang bẩn xuống đĩa. *(Nguồn chính: UC Berkeley CS 186 Notes: Disks, Buffers, Files & CMU 15-445 Lectures 3–5)*
2. **Cấu trúc chỉ mục B+Tree, Băm động và Cây LSM (Log-Structured Merge-Tree)** (`dbi-bplustree-lsm-indexes`): Phân biệt B-Tree và B+Tree (nút nội chỉ giữ khóa định tuyến, nút lá chứa dữ liệu và nối liên kết đôi), thuật toán chèn/xóa chia tách/hợp nhất nút, đồng bộ hóa trên cây (latch crabbing) và đánh đổi đọc/ghi giữa B+Tree với LSM-Tree. *(Nguồn chính: UC Berkeley CS 186 Notes: B+ Trees & CMU 15-445 Lectures 6–8)*
3. **Sắp xếp ngoài (External Merge Sort), Các thuật toán Kết nối (Joins) và Mô hình thực thi truy vấn** (`dbi-Sorting-joins-query-execution`): Sắp xếp dữ liệu lớn hơn RAM bằng K-way External Merge Sort, phân tích chi phí I/O của Block Nested Loop Join, Index Nested Loop Join, Sort-Merge Join và Grace Hash Join, cùng kiến trúc thực thi Iterator/Vectorized. *(Nguồn chính: UC Berkeley CS 186 Notes: Sorting, Iterators, and Joins & CMU 15-445 Lectures 9–12)*
4. **Tối ưu hóa truy vấn dựa trên quy tắc và chi phí (Cost-Based Query Optimization)** (`dbi-query-optimization`): Biến đổi tương đương đại số quan hệ (đẩy phép chọn/chiếu xuống sâu), ước lượng hệ số chọn lọc (selectivity) bằng thống kê, và quy hoạch động Selinger tìm thứ tự kết nối bảng và phương thức truy cập tối ưu. *(Nguồn chính: UC Berkeley CS 186 Notes: Query Optimization & CMU 15-445 Lectures 13–14)*
5. **Điều khiển đồng thời: Tính khả tuần tự (Serializability), Khóa hai pha (2PL) và Đa phiên bản (MVCC)** (`dbi-concurrency-control-mvcc`): Lịch thực thi tương đương xung đột (Conflict Serializability) và đồ thị phụ thuộc, giao thức Khóa hai pha nghiêm ngặt (Strict 2PL), khóa đa độ mịn (Intention Locks), và kiến trúc đa phiên bản MVCC/Snapshot Isolation. *(Nguồn chính: UC Berkeley CS 186 Notes: Concurrency Control & CMU 15-445 Lectures 15–18)*
6. **Nhật ký ghi trước (Write-Ahead Logging) và Thuật toán phục hồi sự cố ARIES** (`dbi-wal-aries-recovery`): Chính sách STEAL/NO-FORCE, quy tắc WAL (bắt buộc đẩy bản ghi log có LSN xuống đĩa trước khi ghi đè trang dữ liệu hoặc xác nhận commit), bảng giao dịch/trang bẩn tại Checkpoint, và ba pha khôi phục Analysis–Redo–Undo cùng Compensation Log Records (CLR). *(Nguồn chính: UC Berkeley CS 186 Notes: Recovery (ARIES) & CMU 15-445 Lectures 19–20)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Không coi việc viết câu lệnh SQL là đã hiểu hệ quản trị cơ sở dữ liệu; môn học tập trung vào cấu trúc dữ liệu trên đĩa, chi phí I/O và các bất biến đảm bảo ACID bên dưới tầng SQL.

- **Giáo trình / Nguồn chuẩn:** `ucb-cs186-notes` (CS 186: Introduction to Database Systems — Course Notes — *Disks/Buffers, B+ Trees, Sorting, Joins, Query Optimization, Concurrency Control, and Recovery Notes*, vai trò: `primary`); `cmu-15445` (CMU 15-445/645: Database Systems — *Lectures 3–20 (Storage, Buffer Pool, Trees, Execution, Optimization, Concurrency, Logging & Recovery)*, vai trò: `primary`)

### CS-31: Kỹ nghệ phần mềm (`software-engineering`)
- **Phân loại:** `core` | **Khối:** `block-5`
- **Điều kiện tiên quyết:**
  - `object-oriented-programming` (*required*): Cần nắm vững thiết kế giao diện, đóng gói và quản lý phụ thuộc giữa các lớp/mô-đun.
  - `program-design-debugging` (*required*): Cần nền tảng hợp đồng hàm, kiểm thử cơ bản và chẩn đoán lỗi.
  - `git-dev-tools` (*required*): Cần nắm quy trình phân nhánh Git, giải quyết xung đột và hệ thống build.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu sự chuyển dịch từ "lập trình" (viết mã để giải một bài toán tại một thời điểm) sang "kỹ nghệ phần mềm" (tích hợp thiết kế, quy trình và công cụ để duy trì và phát triển hệ thống qua thời gian và nhiều người). Nội dung bao gồm phân tích yêu cầu và mô hình hóa miền bài toán (domain modeling), thiết kế biên mô-đun, giao diện trừu tượng và quản lý độ phức tạp (information hiding, coupling vs cohesion, Định luật Hyrum), chiến lược kiểm thử đa tầng (unit, integration, system/end-to-end, kiểm thử bất biến và sử dụng test doubles có chừng mực), quy trình duyệt mã (code review) và tái cấu trúc an toàn (refactoring), quản lý phụ thuộc và phiên bản ngữ nghĩa (Semantic Versioning), tích hợp liên tục (CI) và làm việc nhóm.

**Cấu trúc chương mục:**
1. **Phân tích yêu cầu, Mô hình hóa miền bài toán và Kiến trúc mô-đun** (`se-requirements-domain-architecture`): Yêu cầu chức năng vs phi chức năng, ngôn ngữ chung của miền bài toán, ẩn giấu thông tin (Parnas), độ kết dính (cohesion) và độ ghép nối (coupling), Định luật Hyrum về hợp đồng ngầm của giao diện. *(Nguồn chính: SWE at Google Ch. 1, Ch. 8–10)*
2. **Chiến lược kiểm thử đa tầng, Kiểm thử theo trạng thái và Thiết kế dễ kiểm thử** (`se-testing-architecture-verification`): Tháp kiểm thử (Small/Unit, Medium/Integration, Large/E2E), kiểm thử hành vi công khai thay vì chi tiết cài đặt nội bộ, khi nào nên dùng thực thi thật thay vì lạm dụng mock, và kiểm thử dựa trên tính chất (property-based testing). *(Nguồn chính: SWE at Google Ch. 11–14)*
3. **Duyệt mã (Code Review), Tái cấu trúc (Refactoring) và Tiến hóa mã nguồn** (`se-code-review-refactoring-deprecation`): Tiêu chuẩn đánh giá một thay đổi nguyên tử (atomic change), bảo toàn hành vi khi tái cấu trúc, quản lý nợ kỹ thuật (technical debt) và quy trình loại bỏ tính năng cũ (deprecation). *(Nguồn chính: SWE at Google Ch. 9, Ch. 15–16)*
4. **Quản lý phụ thuộc (Dependency Management), Tích hợp liên tục (CI) và Vòng đời phát triển** (`se-dependencies-ci-collaboration`): Hell phụ thuộc (diamond dependency conflict), Semantic Versioning, biên dịch tái lập (reproducible builds), đường ống kiểm tra tự động CI và ghi chép quyết định kiến trúc (ADR). *(Nguồn chính: SWE at Google Ch. 18, Ch. 21, Ch. 23)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Các mẫu thiết kế (Design Patterns) chỉ được đưa vào như lời giải cho những bài toán kết dính cụ thể, tuyệt đối không bắt học thuộc lòng danh mục 23 mẫu GoF một cách giáo điều.

- **Giáo trình / Nguồn chuẩn:** `swe-at-google` (Software Engineering at Google — *Chapters 1, 8–16, 18, 21, 23 (What is Software Engineering, Style/Review, Testing, Deprecation, Build Systems, Dependency Management, CI)*, vai trò: `primary`)

### CS-32: Web và ứng dụng qua mạng (`web-network-applications`)
- **Phân loại:** `core` | **Khối:** `block-5`
- **Điều kiện tiên quyết:**
  - `computer-networks` (*required*): Cần hiểu DNS, TCP, TLS và cấu trúc thông điệp HTTP.
  - `data-modeling-databases` (*required*): Cần nắm thiết kế lược đồ dữ liệu, truy vấn SQL và giao dịch khi xây dựng tầng lưu trữ của ứng dụng.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu kiến trúc toàn trình của các hệ thống ứng dụng phân tán trên nền tảng Web. Nội dung không chạy theo một framework ngắn hạn mà đi từ các chuẩn nền tảng: cấu trúc tài liệu ngữ nghĩa HTML, mô hình hộp và bố cục CSS, khả năng tiếp cận (accessibility tree, ARIA/keyboard navigation), cây đối tượng tài liệu (DOM), vòng lặp sự kiện (event loop) và lập trình bất đồng bộ trên trình duyệt. Ở phía giao thức và máy chủ, môn học phân tích sâu ngữ nghĩa HTTP (methods, headers, caching, status codes, lũy đẳng), thiết kế hợp đồng API (REST/JSON, xác thực đầu vào, phân trang, xử lý lỗi chuẩn hóa), quản lý phiên và trạng thái xác thực (cookies, tokens, CORS, Same-Origin Policy), kết nối an toàn với tầng cơ sở dữ liệu và triển khai ứng dụng.

**Cấu trúc chương mục:**
1. **Ngữ nghĩa tài liệu HTML, Mô hình bố cục CSS và Cây khả năng tiếp cận (Accessibility)** (`wna-document-semantics-layout-a11y`): Cấu trúc DOM ngữ nghĩa, mô hình hộp (Box Model), bố cục Flexbox/Grid đáp ứng đa kích thước màn hình, quản lý tiêu điểm bàn phím (focus management) và tương phản hiển thị. *(Nguồn chính: MDN Learn Web Development: Core Modules (HTML & CSS) & W3C WAI Tutorials)*
2. **Cây DOM, Vòng lặp sự kiện (Event Loop) và Quản lý trạng thái giao diện bất đồng bộ** (`wna-dom-event-loop-async-state`): Lan truyền sự kiện (capturing/bubbling), mô hình thực thi đơn luồng kết hợp hàng đợi tác vụ bất đồng bộ (Promises/async-await), đồng bộ hóa trạng thái dữ liệu với giao diện và xử lý các trạng thái tải/trống/lỗi. *(Nguồn chính: MDN Learn Web Development: JavaScript & Asynchronous JS)*
3. **Ngữ nghĩa giao thức HTTP, Thiết kế hợp đồng API và Kiến trúc phía máy chủ (Backend)** (`wna-http-api-contracts-backend`): Tính an toàn và lũy đẳng của GET/PUT/DELETE so với POST, cơ chế đệm HTTP (ETag, Cache-Control), định tuyến yêu cầu, trung gian xử lý (middleware), kiểm chứng lược đồ đầu vào và kết nối cơ sở dữ liệu qua connection pool. *(Nguồn chính: MDN HTTP Guides & Server-side Website Programming)*
4. **Quản lý phiên, Xác thực và Mô hình bảo mật trình duyệt (Same-Origin Policy, CORS)** (`wna-sessions-auth-browser-security`): Bản chất không trạng thái của HTTP và cơ chế duy trì phiên qua Cookie (HttpOnly, Secure, SameSite), chính sách cùng nguồn gốc (Same-Origin Policy), cơ chế chia sẻ tài nguyên liên nguồn (CORS) và quy trình đóng gói triển khai. *(Nguồn chính: MDN Web Security & HTTP Cookies)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Đặt nền tảng chuẩn Web (HTML, DOM, HTTP, Web Security) lên trước; mọi thư viện giao diện hay backend framework chỉ được xem là tầng trừu tượng hóa phụ trợ trên nền các chuẩn này.

- **Giáo trình / Nguồn chuẩn:** `mdn-learn-web` (MDN Learn Web Development & HTTP Documentation — *Structuring the Web (HTML), Styling (CSS), Dynamic Scripting (JS), Server-side Programming, and HTTP Documentation*, vai trò: `primary`); `w3c-wai-hci` (W3C Accessibility Fundamentals & Usability Principles — *W3C Web Accessibility Tutorials (Page Structure, Menus, Forms, Carousels)*, vai trò: `supplementary`)

### CS-33: Vận hành và hiệu năng (`operations-performance-reliability`)
- **Phân loại:** `core` | **Khối:** `block-5`
- **Điều kiện tiên quyết:**
  - `operating-systems` (*required*): Cần hiểu lập lịch CPU, bộ nhớ ảo, I/O đĩa và tiến trình để đọc đúng các chỉ số hiệu năng hệ thống.
  - `computer-networks` (*required*): Cần hiểu độ trễ mạng, hàng đợi, kết nối TCP và cân bằng tải.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu các nguyên lý đảm bảo một hệ thống phần mềm hoạt động ổn định, quan sát được và đạt mục tiêu hiệu năng dưới tải thực tế. Nội dung kết hợp góc nhìn hệ thống Linux với kỹ nghệ độ tin cậy (Site Reliability Engineering): quản lý vòng đời dịch vụ nền (daemons, systemd/process supervisors, graceful shutdown), cô lập tài nguyên bằng cơ chế nhân (namespaces, cgroups — bản chất của container), ba trụ cột khả năng quan sát (structured logging, metrics với phân vị độ trễ p50/p95/p99, distributed tracing), phương pháp đo đạc và định vị điểm nghẽn hiệu năng (profiling CPU/memory/I/O, biểu đồ Flame Graph), kiểm soát quá tải (rate limiting, load shedding, backpressure, circuit breaking, retry với exponential backoff và jitter) cùng thiết kế môi trường tái lập.

**Cấu trúc chương mục:**
1. **Vòng đời dịch vụ, Cô lập tài nguyên nhân (Namespaces, Cgroups) và Môi trường tái lập** (`opr-services-containers-isolation`): Quản lý tiến trình dịch vụ, xử lý tín hiệu dừng êm (SIGTERM graceful drain), bản chất của container trên Linux qua sự kết hợp chroot/namespaces/cgroups và đóng gói phụ thuộc tái lập. *(Nguồn chính: Google SRE Book Part II & Linux Containers Documentation)*
2. **Khả năng quan sát (Observability): Nhật ký có cấu trúc, Chỉ số phân vị và Truy vết** (`opr-observability-metrics-tracing`): Tại sao trung bình cộng che giấu đuôi độ trễ (tail latency) và cần dùng phân vị p50/p95/p99, chỉ số SLI/SLO, bốn tín hiệu vàng (Latency, Traffic, Errors, Saturation) và truyền ngữ cảnh truy vết. *(Nguồn chính: Google SRE Book Ch. 4 (Service Level Objectives), Ch. 6 (Monitoring Distributed Systems), Ch. 10)*
3. **Phương pháp luận phân tích hiệu năng và Định vị điểm nghẽn (Profiling)** (`opr-profiling-bottleneck-analysis`): Phương pháp USE (Utilization, Saturation, Errors) cho tài nguyên phần cứng, lấy mẫu ngăn xếp (sampling profilers), đọc biểu đồ Flame Graph và phân biệt nghẽn CPU, nghẽn bộ nhớ/cache với nghẽn chờ I/O hoặc khóa. *(Nguồn chính: MIT Missing Semester Lecture 7 (Profiling) & Dive Into Systems Ch. 11–12)*
4. **Quản lý quá tải, Áp lực ngược (Backpressure) và Phòng chống sụp đổ dây chuyền** (`opr-overload-backpressure-resilience`): Định luật Little (L = lambda W), lý thuyết hàng đợi khi mức sử dụng tiến gần 100%, cơ chế truyền áp lực ngược, cắt tải chủ động (load shedding), và nguy cơ bão thử lại (retry storm) khi thiếu exponential backoff kèm jitter. *(Nguồn chính: Google SRE Book Ch. 21 (Handling Overload) & Ch. 22 (Addressing Cascading Failures))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Tập trung vào cơ chế hệ thống, mô hình hàng đợi và phương pháp đo kiểm; không yêu cầu thuê hạ tầng đám mây thương mại hay biến môn học thành khóa học cú pháp công cụ DevOps.

- **Giáo trình / Nguồn chuẩn:** `google-sre-book` (Site Reliability Engineering: How Google Runs Production Systems — *Chapters 4, 6, 10, 21, 22 (SLOs, Monitoring, Load Balancing, Handling Overload, Cascading Failures)*, vai trò: `primary`); `mit-missing-semester` (The Missing Semester of Your CS Education (2020 Edition) — *Lecture 7: Debugging and Profiling (CPU/Memory Profiling & FlameGraphs)*, vai trò: `supplementary`)

### CS-34: Bảo mật và riêng tư (`security-privacy`)
- **Phân loại:** `core` | **Khối:** `block-5`
- **Điều kiện tiên quyết:**
  - `cpp-memory-model` (*required*): Cần hiểu bố cục khung ngăn xếp, con trỏ và vùng nhớ Heap để hiểu cơ chế lỗ hổng bộ nhớ.
  - `operating-systems` (*required*): Cần hiểu quyền tiến trình, không gian địa chỉ và cơ chế cô lập của hệ điều hành.
  - `web-network-applications` (*required*): Cần hiểu HTTP, SQL, DOM, Cookie và Same-Origin Policy để phân tích bảo mật ứng dụng mạng.

**Bản chất và nội dung môn học:**

Môn học xây dựng tư duy phòng thủ theo mô hình đe dọa (threat modeling): xác định tài sản cần bảo vệ, ranh giới tin cậy (trust boundaries), năng lực của đối thủ và bề mặt tấn công. Nội dung bao quát các nguyên thủy mật mã học ứng dụng và điều kiện an toàn của chúng (băm mật mã, muối và hàm dẫn xuất khóa mật khẩu Argon2/PBKDF2, mã hóa đối xứng xác thực AEAD, mật mã khóa công khai, chữ ký số và chuỗi chứng chỉ PKI/TLS), cơ chế xác thực (authentication) và kiểm soát truy cập (authorization, nguyên lý đặc quyền tối thiểu), các lỗ hổng mức bộ nhớ (buffer overflow, use-after-free), các lỗ hổng tiêm nhiễm do trộn lẫn dữ liệu với mã lệnh (SQL Injection, XSS, CSRF, SSRF), quản lý bí mật và chuỗi cung ứng phần mềm, cơ chế cô lập (sandboxing), cùng các nguyên lý bảo vệ quyền riêng tư dữ liệu.

**Cấu trúc chương mục:**
1. **Mô hình hóa đe dọa (Threat Modeling), Ranh giới tin cậy và Nguyên tắc thiết kế an toàn** (`sp-threat-modeling-trust-boundaries`): Phân tích tài sản, tác nhân đe dọa, bề mặt tấn công, các nguyên lý Saltzer & Schroeder (đặc quyền tối thiểu, phòng thủ chiều sâu, mặc định đóng, thiết kế mở không dựa vào che giấu). *(Nguồn chính: OWASP Threat Modeling Cheat Sheet & OSTEP Ch. 53)*
2. **Nền tảng Mật mã học ứng dụng, Xác thực và Kiểm soát truy cập** (`sp-applied-cryptography-auth`): Phân biệt mã hóa (encryption), băm (hashing) và mã xác thực thông điệp (MAC); tại sao không bao giờ tự chế thuật toán mật mã hoặc lưu mật khẩu bằng băm nhanh không muối; AEAD, chữ ký số, TLS PKI, MFA và mô hình phân quyền RBAC/ABAC. *(Nguồn chính: OSTEP Ch. 54–57 & OWASP Authentication / Password Storage Cheat Sheets)*
3. **Lỗ hổng an toàn bộ nhớ và Lỗ hổng tiêm nhiễm (Injection) qua ranh giới ngôn ngữ** (`sp-memory-injection-vulnerabilities`): Tràn bộ đệm ngăn xếp/heap và các cơ chế giảm thiểu (ASLR, Stack Canaries, NX bit); bản chất chung của SQL Injection, Command Injection và Cross-Site Scripting (XSS) là dữ liệu đầu vào bị diễn giải thành lệnh thực thi, và cách tách biệt triệt để bằng Parameterized Queries / Context-aware Encoding. *(Nguồn chính: OWASP Injection Prevention, XSS Prevention, and CSRF Prevention Cheat Sheets)*
4. **Quản lý bí mật, Chuỗi cung ứng phần mềm, Cô lập (Sandboxing) và Quyền riêng tư dữ liệu** (`sp-secrets-supply-chain-privacy`): Quản lý khóa bí mật ngoài mã nguồn, kiểm tra phụ thuộc phần mềm, thu hẹp hậu quả khi bị xâm nhập bằng sandbox/container, giảm thiểu thu thập dữ liệu và rủi ro tái định danh (re-identification). *(Nguồn chính: OWASP Secrets Management & Privacy by Design Principles)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Mọi kỹ thuật phân tích lỗ hổng chỉ được trình bày để hiểu cơ chế phòng thủ và chỉ được kiểm thử trên môi trường cục bộ hoặc hệ thống do chính người học sở hữu hợp pháp.
- Làm rõ rằng không một công cụ quét tự động hay thư viện đơn lẻ nào tự động bảo đảm hệ thống an toàn tuyệt đối nếu thiết kế ranh giới tin cậy bị sai.

- **Giáo trình / Nguồn chuẩn:** `owasp-cheatsheets` (OWASP Cheat Sheet Series & Web Security Testing Guide — *Threat Modeling, Authentication, Password Storage, SQL Injection Prevention, XSS Prevention, and CSRF Cheat Sheets*, vai trò: `primary`); `ostep-v110` (Operating Systems: Three Easy Pieces (OSTEP) — *Part IV: Security (Chapters 53–57: Intro Security, Authentication, Access Control, Cryptography)*, vai trò: `primary`)

---

## Khối VI — Trí tuệ, tương tác và các nền tảng

Mở rộng độ rộng chương trình sang các lĩnh vực nền tảng của Khoa học Máy tính hiện đại: Trí tuệ nhân tạo cổ điển và suy luận xác suất, Học máy thống kê, Học sâu và các kiến trúc mô hình hiện đại, Đồ họa máy tính, Tương tác người–máy (HCI), Hệ thống di động – nhúng – thời gian thực, Tính toán khoa học, cùng Đạo đức và phương pháp nghiên cứu.

### CS-35: AI nền tảng (`ai-foundations`)
- **Phân loại:** `core` | **Khối:** `block-6`
- **Điều kiện tiên quyết:**
  - `graph-algorithms` (*required*): Cần nắm vững BFS, DFS, Dijkstra, hàng đợi ưu tiên và biểu diễn đồ thị trạng thái.
  - `probability` (*required*): Cần xác suất có điều kiện, định lý Bayes, kỳ vọng và phân phối đồng thời cho Bayes Nets và MDP.
  - `discrete-math` (*required*): Cần logic mệnh đề/vị từ và quy hoạch động cơ bản.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu Trí tuệ Nhân tạo dưới góc nhìn tổng quát về các tác nhân hợp lý (rational agents) ra quyết định trong môi trường xác định, đối kháng hoặc bất định — rộng hơn rất nhiều so với việc chỉ huấn luyện mạng nơ-ron hay gọi API mô hình ngôn ngữ lớn. Nội dung bao quát: mô hình hóa không gian trạng thái, tìm kiếm không có thông tin (BFS, DFS, Uniform Cost Search) và tìm kiếm có thông tin (Greedy Best-First, A* với điều kiện heuristic chấp nhận được — admissible và nhất quán — consistent); tìm kiếm đối kháng trong trò chơi (Minimax, cắt tỉa Alpha–Beta, hàm đánh giá và Monte Carlo Tree Search cơ sở); bài toán thỏa mãn ràng buộc (CSP: backtracking, lan truyền ràng buộc AC-3, heuristic MRV/LCV); biểu diễn tri thức và suy diễn logic; mạng Bayes và suy diễn xác suất; cùng Quá trình quyết định Markov (MDP: phương trình Bellman, Value Iteration, Policy Iteration) và Học tăng cường nhập môn (Q-Learning, đánh đổi thăm dò–khai thác).

**Cấu trúc chương mục:**
1. **Tác nhân hợp lý, Không gian trạng thái và Tìm kiếm Heuristic (UCS, A*)** (`aif-agents-uninformed-informed-search`): Đặc tả bài toán tìm kiếm, tính đầy đủ và tối ưu của BFS/IDS/UCS, tìm kiếm A* và chứng minh tính tối ưu trên cây/đồ thị khi hàm heuristic thỏa tính chấp nhận được (admissibility) và nhất quán (consistency). *(Nguồn chính: UC Berkeley CS 188 Textbook: Search Problems, Uninformed & Informed Search)*
2. **Bài toán thỏa mãn ràng buộc (CSP) và Tìm kiếm đối kháng (Minimax, Alpha–Beta)** (`aif-csp-adversarial-games`): Đồ thị ràng buộc, kiểm tra tiến (forward checking), nhất quán cung AC-3; cây trò chơi tổng bằng không, thuật toán Minimax, cắt tỉa Alpha–Beta, Expectimax cho trò chơi có yếu tố ngẫu nhiên. *(Nguồn chính: UC Berkeley CS 188 Textbook: Constraint Satisfaction Problems & Games)*
3. **Biểu diễn tri thức Logic và Mạng Bayes (Bayesian Networks)** (`aif-logic-probabilistic-reasoning`): Suy diễn trong logic mệnh đề, biểu diễn phân phối xác suất đồng thời gọn qua DAG của mạng Bayes, tính độc lập có điều kiện (d-separation) và suy diễn chính xác/xấp xỉ. *(Nguồn chính: UC Berkeley CS 188 Textbook: Logic & Bayes Nets)*
4. **Quá trình quyết định Markov (MDP) và Học tăng cường nhập môn (Reinforcement Learning)** (`aif-mdp-reinforcement-learning`): Ra quyết định tuần tự dưới chuyển trạng thái ngẫu nhiên, hệ số chiết khấu gamma, phương trình tối ưu Bellman, Value/Policy Iteration, và học không cần mô hình biết trước qua Temporal-Difference / Q-Learning. *(Nguồn chính: UC Berkeley CS 188 Textbook: MDPs & Reinforcement Learning)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Không thu hẹp Trí tuệ Nhân tạo thành Học máy hay sử dụng LLM; môn học giữ đầy đủ nền tảng tìm kiếm, ràng buộc, suy luận xác suất và ra quyết định tuần tự.

- **Giáo trình / Nguồn chuẩn:** `ucb-cs188-notes` (Introduction to Artificial Intelligence — CS 188 Textbook / Notes — *Search, CSPs, Games, Logic, Bayes Nets, MDPs, and Reinforcement Learning Chapters*, vai trò: `primary`)

### CS-36: Machine learning (`machine-learning`)
- **Phân loại:** `core` | **Khối:** `block-6`
- **Điều kiện tiên quyết:**
  - `linear-algebra` (*required*): Cần không gian vector, phép chiếu bình phương tối thiểu, trị riêng và phân rã SVD cho hồi quy và PCA.
  - `multivariable-calculus-optimization` (*required*): Cần gradient, ma trận Hessian, tính lồi và thuật toán hạ gradient (gradient descent).
  - `statistics-inference` (*required*): Cần ước lượng hợp lý cực đại (MLE), suy luận Bayes, phương sai mẫu và đánh đổi bias–variance.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu các nguyên lý toán học và thuật toán cho phép hệ thống tự ước lượng quy luật từ dữ liệu và tổng quát hóa trên dữ liệu chưa từng thấy. Nội dung liên kết trực tiếp Đại số tuyến tính, Giải tích tối ưu và Xác suất thống kê vào quy trình học máy chuẩn mực: biểu diễn đặc trưng, phân chia tập huấn luyện/thẩm định/kiểm tra (train/validation/test split), kiểm định chéo (cross-validation) và phòng chống rò rỉ dữ liệu (data leakage); cực tiểu hóa rủi ro thực nghiệm (ERM), các hàm mất mát và tối ưu hóa; hồi quy tuyến tính (L2/Ridge, L1/Lasso), hồi quy logistic và phân lớp tuyến tính; cây quyết định (entropy/Gini) và các phương pháp tập hợp (Bagging/Random Forest, Gradient Boosting); phương pháp hạt nhân (SVM cơ sở); học không giám sát (phân cụm K-Means, mô hình hỗn hợp Gaussian/EM cơ sở, giảm chiều bằng PCA thông qua SVD); đánh đổi độ lệch–phương sai (bias–variance tradeoff), chính quy hóa và các thước đo đánh giá (Precision, Recall, F1, ROC-AUC, Calibration).

**Cấu trúc chương mục:**
1. **Bản chất bài toán Học máy, Tổng quát hóa, Đánh đổi Bias–Variance và Chống rò rỉ dữ liệu** (`ml-formulation-generalization-leakage`): Không gian giả thuyết, cực tiểu hóa rủi ro thực nghiệm, hiện tượng quá khớp (overfitting) và dưới khớp (underfitting), tách tập dữ liệu nghiêm ngặt và các dạng rò rỉ thông tin từ tập test. *(Nguồn chính: Scikit-learn User Guide §3.1 (Cross-validation) & D2L Ch. 3.6)*
2. **Mô hình tuyến tính cho Hồi quy và Phân lớp, Hàm mất mát và Chính quy hóa (L1/L2)** (`ml-linear-models-regularization`): Liên hệ giữa bình phương tối thiểu và MLE dưới nhiễu Gaussian, hồi quy Ridge/Lasso, hồi quy Logistic với hàm mất mát Cross-Entropy, phân lớp Naive Bayes và tối ưu hóa bằng Stochastic Gradient Descent. *(Nguồn chính: Scikit-learn User Guide §1.1 (Linear Models), §1.9 (Naive Bayes) & D2L Ch. 3–4)*
3. **Cây quyết định, Học tập hợp (Random Forest, Gradient Boosting) và Phương pháp Hạt nhân** (`ml-trees-ensembles-kernels`): Chia vùng không gian đặc trưng bằng độ lợi thông tin (Information Gain / Gini), giảm phương sai bằng Bagging/Random Forest, giảm độ lệch bằng Boosting và ý tưởng lề cực đại trong Support Vector Machines. *(Nguồn chính: Scikit-learn User Guide §1.4 (SVM), §1.10 (Decision Trees), §1.11 (Ensembles))*
4. **Học không giám sát (K-Means, PCA) và Đánh giá mô hình nghiêm ngặt** (`ml-unsupervised-pca-evaluation`): Phân cụm K-Means và giới hạn hình cầu của cụm, giảm số chiều bảo toàn phương sai cực đại bằng Phân tích thành phần chính (PCA qua SVD), lựa chọn metric trên dữ liệu mất cân bằng (PR-AUC vs ROC-AUC) và phân tích sai số. *(Nguồn chính: Scikit-learn User Guide §2.3 (Clustering), §2.5 (Decompositions/PCA), §3.3 (Metrics))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Không dạy học máy như việc gọi hàm `.fit()` và `.predict()` mù quáng; mỗi mô hình đều phải gắn với hàm mục tiêu toán học, giả định về phân phối dữ liệu và kịch bản mô hình thất bại.

- **Giáo trình / Nguồn chuẩn:** `sklearn-user-guide` (Scikit-learn User Guide: Supervised & Unsupervised Learning — *Sections 1.1, 1.4, 1.9–1.11 (Supervised Learning), Sections 2.3, 2.5 (Unsupervised Learning), Section 3 (Model Selection and Evaluation)*, vai trò: `primary`); `d2l-ai` (Dive into Deep Learning (D2L) — *Chapters 3–4 (Linear Neural Networks for Regression and Classification)*, vai trò: `supplementary`)

### CS-37: Deep learning và mô hình hiện đại (`deep-learning-modern-models`)
- **Phân loại:** `core` | **Khối:** `block-6`
- **Điều kiện tiên quyết:**
  - `machine-learning` (*required*): Cần nắm vững hàm mất mát, tổng quát hóa, chính quy hóa, đánh giá mô hình và quy trình huấn luyện.
  - `multivariable-calculus-optimization` (*required*): Cần quy tắc dây chuyền nhiều biến (chain rule) và ma trận Jacobian để hiểu cơ chế lan truyền ngược.
  - `linear-algebra` (*required*): Cần phép nhân ma trận theo lô (batched matrix multiplication) và không gian tích vô hướng.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu cách xây dựng và huấn luyện các biểu diễn phân cấp có khả năng vi phân đầu–cuối (end-to-end differentiable representations). Nội dung bắt đầu từ đại số tensor, đồ thị tính toán động và cơ chế vi phân tự động chiều ngược (reverse-mode automatic differentiation / backpropagation), cùng các vấn đề ổn định số học (triệt tiêu và bùng nổ gradient, khởi tạo trọng số Xavier/He, chuẩn hóa BatchNorm/LayerNorm) và thuật toán tối ưu thích nghi (SGD với Momentum, Adam/AdamW). Trên nền đó, môn học phân tích các kiến trúc cốt lõi theo cấu trúc dữ liệu: mạng tích chập (CNN — tính bất biến dịch chuyển, trường tiếp nhận, kết nối tắt Residual/ResNet) cho dữ liệu lưới không gian, mô hình chuỗi và không gian nhúng (Embeddings, RNN/LSTM), cơ chế chú ý (Scaled Dot-Product Attention, Multi-Head Attention) và kiến trúc Transformer, kết thúc bằng giới hạn tài nguyên tính toán, đánh giá mô hình và kết nối sang các nhánh chuyên sâu CV/NLP.

**Cấu trúc chương mục:**
1. **Đại số Tensor, Đồ thị tính toán và Cơ chế Vi phân tự động (Backpropagation)** (`dl-tensors-autodiff-backprop`): Biểu diễn tensor đa chiều trong bộ nhớ (strides, broadcasting), xây dựng đồ thị tính toán hướng dữ liệu, lan truyền xuôi (forward pass) lưu giá trị trung gian và lan truyền ngược theo quy tắc dây chuyền. *(Nguồn chính: D2L Ch. 2 (§2.1–2.5) & Ch. 5 (§5.1–5.3))*
2. **Ổn định số học, Khởi tạo trọng số, Chuẩn hóa (Normalization) và Tối ưu hóa mạng sâu** (`dl-optimization-stability-regularization`): Hiện tượng vanishing/exploding gradients, hàm kích hoạt phi tuyến (ReLU, GELU, Softmax ổn định log-sum-exp), khởi tạo He/Xavier, Dropout, Weight Decay, Batch/Layer Normalization và bộ tối ưu AdamW. *(Nguồn chính: D2L Ch. 5 (§5.4–5.6), Ch. 8 (§8.5) & Ch. 12)*
3. **Mạng tích chập (CNN), Thiên kiến quy nạp không gian và Kiến trúc Residual** (`dl-convolutional-networks`): Chia sẻ tham số và tương tác cục bộ trong phép tích chập, padding/stride/pooling, đa kênh đặc trưng (channels), trường tiếp nhận hiệu dụng (receptive field) và đường tắt cộng (skip connections) trong ResNet. *(Nguồn chính: D2L Ch. 7–8)*
4. **Biểu diễn chuỗi, Không gian nhúng (Embeddings), Cơ chế Attention và Kiến trúc Transformer** (`dl-sequences-attention-transformers`): Từ biểu diễn rời rạc sang vector dày đặc, hạn chế tuần tự của RNN, cơ chế truy vấn–khóa–giá trị (Query–Key–Value Scaled Dot-Product Attention), mã hóa vị trí (Positional Encoding), kiến trúc Encoder/Decoder Transformer và giới hạn chi phí bậc hai theo độ dài chuỗi. *(Nguồn chính: D2L Ch. 9–11 (RNNs, Attention Mechanisms, and Transformers))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Không coi một chương giới thiệu Transformer là đã bao quát toàn bộ Xử lý ngôn ngữ tự nhiên (NLP) hay Thị giác máy tính (CV); các bài toán đặc thù của từng miền được tách thành các nhánh chuyên sâu riêng ở Khối VII.

- **Giáo trình / Nguồn chuẩn:** `d2l-ai` (Dive into Deep Learning (D2L) — *Chapters 2, 5, 7, 8, 9, 10, 11, 12 (Preliminaries, MLP/Backprop, CNNs, Modern CNNs, RNNs, Attention & Transformers, Optimization)*, vai trò: `primary`)

### CS-38: Đồ họa máy tính (`computer-graphics`)
- **Phân loại:** `core` | **Khối:** `block-6`
- **Điều kiện tiên quyết:**
  - `linear-algebra` (*required*): Cần phép nhân ma trận, tích vô hướng, tích có hướng, đổi cơ sở và biến đổi tuyến tính.
  - `multivariable-calculus-optimization` (*required*): Cần vector pháp tuyến mặt cong, hình học không gian và tích phân mặt cơ sở.
  - `cpp-memory-model` (*required*): Cần viết và tối ưu hóa bộ kết xuất (renderer) trên mảng bộ nhớ khung hình (framebuffer).

**Bản chất và nội dung môn học:**

Môn học nghiên cứu các mô hình toán học, vật lý và thuật toán để biểu diễn hình học 3 chiều và tổng hợp hình ảnh 2 chiều. Thay vì chỉ hướng dẫn gọi hàm của một thư viện đồ họa cụ thể, nội dung đi từ bản chất của ánh sáng, không gian màu, lấy mẫu tín hiệu và hiện tượng răng cưa (aliasing/anti-aliasing), đến đại số hình học 3D (hệ tọa độ đồng nhất — homogeneous coordinates, ma trận biến đổi affine, phép chiếu phối cảnh và trực giao, mô hình camera). Tiếp theo, môn học đối chiếu hai phương pháp kết xuất nền tảng: (1) Đường ống Rasterization (biến đổi đỉnh, cắt xén, nội suy trọng tâm — barycentric interpolation, bộ đệm độ sâu Z-buffer, ánh xạ kết cấu và mipmapping); và (2) Dò tia (Ray Tracing: phát tia, giao điểm tia–mặt cầu/tam giác, cấu trúc tăng tốc không gian BVH, mô hình chiếu sáng cục bộ Blinn–Phong và nguyên lý phản xạ/khúc xạ đệ quy).

**Cấu trúc chương mục:**
1. **Biểu diễn ảnh số, Không gian màu, Lấy mẫu (Sampling) và Chống răng cưa** (`cg-color-images-sampling`): Lưới điểm ảnh (raster image), kênh màu RGB/Alpha, hiệu chỉnh gamma, lấy mẫu tín hiệu không gian 2D, tần số Nyquist và lọc chống răng cưa (supersampling). *(Nguồn chính: Ray Tracing in One Weekend Ch. 2–3 & Graphics Foundations)*
2. **Biến đổi hình học 3D, Tọa độ đồng nhất (Homogeneous Coordinates) và Mô hình Camera** (`cg-transforms-homogeneous-camera`): Biểu diễn thống nhất phép quay, co giãn và tịnh tiến bằng ma trận 4x4 trong tọa độ đồng nhất; chuỗi biến đổi Model–View–Projection (MVP), hình chóp cụt nhìn (viewing frustum) và phép chia phối cảnh. *(Nguồn chính: Ray Tracing in One Weekend Ch. 11–12 & Transformation Matrices)*
3. **Đường ống Rasterization, Nội suy trọng tâm (Barycentric), Z-Buffer và Kết cấu (Textures)** (`cg-rasterization-pipeline-zbuffer-textures`): Rời rạc hóa tam giác lên lưới pixel, hệ tọa độ trọng tâm để nội suy chuẩn xác theo phối cảnh, giải quyết độ nhìn thấy bằng Z-buffer, ánh xạ tọa độ UV, lọc song tuyến (bilinear) và Mipmap. *(Nguồn chính: LearnOpenGL Getting Started / Coordinate Systems / Depth Testing)*
4. **Dò tia (Ray Tracing), Mô hình chiếu sáng bề mặt và Nguyên lý hoạt hình cơ sở** (`cg-raytracing-shading-animation`): Phương trình tia P(t) = A + t b, kiểm tra giao điểm tia–vật thể, phân cấp thể tích bao (BVH), tán xạ khuếch tán (Lambertian), phản xạ gương và điện môi (định luật Snell), cùng nội suy chuyển động theo thời gian. *(Nguồn chính: Ray Tracing in One Weekend Ch. 4–14)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Trọng tâm là hiểu toán học của phép chiếu, rasterization và ray tracing bằng bộ kết xuất phần mềm nhỏ chạy được trên CPU trước khi dùng API phần cứng GPU.

- **Giáo trình / Nguồn chuẩn:** `raytracing-in-one-weekend` (Ray Tracing in One Weekend & LearnOpenGL Foundations — *Chapters 1–14 (Output Image, Vectors, Rays, Spheres, Antialiasing, Diffuse/Metal/Dielectric Materials, Positionable Camera)*, vai trò: `primary`)

### CS-39: Tương tác người–máy (`human-computer-interaction`)
- **Phân loại:** `core` | **Khối:** `block-6`
- **Điều kiện tiên quyết:**
  - `program-design-debugging` (*required*): Cần hiểu thiết kế trạng thái chương trình và xử lý lỗi đầu vào.
  - `web-network-applications` (*recommended*): Có nền tảng giao diện thực tế (HTML/CSS/DOM) để áp dụng và kiểm chứng các nguyên lý tương tác.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu quá trình thiết kế, triển khai và đánh giá các hệ thống tính toán tương tác dựa trên năng lực nhận thức, vận động và bối cảnh thực tế của con người. Nội dung đi từ tâm lý học nhận thức trong tương tác (mô hình nhận thức — mental models vs conceptual model của hệ thống, dấu hiệu gợi mở — affordances & signifiers, ánh xạ tự nhiên, phản hồi, vòng lặp thực thi–đánh giá của Norman, giới hạn trí nhớ làm việc và Định luật Fitts/Hick), đến phương pháp nghiên cứu người dùng và phân tích tác vụ (contextual inquiry, task analysis, tránh câu hỏi dẫn dắt), tạo mẫu độ trung thực thấp/cao (prototyping), các nguyên lý thiết kế giao diện và phòng ngừa lỗi của con người, phương pháp đánh giá khả dụng định tính/định lượng (think-aloud usability testing, heuristic evaluation), và thiết kế tiếp cận toàn diện (accessibility) cùng đạo đức nghiên cứu trên người dùng.

**Cấu trúc chương mục:**
1. **Nhận thức con người, Mô hình tâm智 (Mental Models) và Chu trình tương tác của Norman** (`hci-cognition-mental-models-norman`): Khoảng cách thực thi (Gulf of Execution) và khoảng cách đánh giá (Gulf of Evaluation), signifiers, constraints, phản hồi tức thời, giới hạn chú ý/trí nhớ và Định luật Fitts trong thiết kế mục tiêu tương tác. *(Nguồn chính: HCI Cognitive Foundations & Interaction Design Principles)*
2. **Nghiên cứu nhu cầu người dùng, Phân tích tác vụ phân cấp và Bối cảnh sử dụng** (`hci-user-research-task-analysis`): Quan sát người dùng thực hiện tác vụ thật thay vì chỉ hỏi ý kiến chủ quan, phân rã tác vụ (Hierarchical Task Analysis), xác định các điểm nghẽn nhận thức và đạo đức bảo vệ người tham gia nghiên cứu. *(Nguồn chính: User Research & Task Analysis Methodology)*
3. **Tạo mẫu lặp (Iterative Prototyping), Thiết kế trạng thái và Phòng ngừa lỗi thao tác** (`hci-prototyping-error-prevention`): Phân biệt lỗi trượt thao tác (slips) với lỗi mô hình tư duy (mistakes), thiết kế cơ chế hoàn tác (undo), xác nhận có ý nghĩa cho hành động không thể đảo ngược và kiểm soát tải nhận thức. *(Nguồn chính: Prototyping & Human Error Prevention Principles)*
4. **Đánh giá khả dụng (Usability Evaluation) và Thiết kế tiếp cận toàn diện (Accessibility)** (`hci-usability-evaluation-accessibility`): Đánh giá theo bộ tiêu chuẩn (Heuristic Evaluation của Nielsen), tổ chức phiên thử nghiệm người dùng nghĩ thành lời (Think-Aloud Protocol), và bốn nguyên tắc khả năng tiếp cận POUR (Perceivable, Operable, Understandable, Robust). *(Nguồn chính: W3C WAI Accessibility Fundamentals & Usability Evaluation Guides)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Không thu gọn môn Tương tác người–máy thành một danh sách kiểm tra thẻ HTML/ARIA hay sở thích trang trí màu sắc; trọng tâm là mô hình nhận thức, phân tích tác vụ và đánh giá thực nghiệm với người dùng.

- **Giáo trình / Nguồn chuẩn:** `w3c-wai-hci` (W3C Accessibility Fundamentals & Usability Principles — *W3C Accessibility Principles (POUR) and Usability Evaluation Foundations*, vai trò: `primary`)

### CS-40: Di động, nhúng và hệ thời gian thực (`mobile-embedded-realtime`)
- **Phân loại:** `extension` | **Khối:** `block-6`
- **Điều kiện tiên quyết:**
  - `computer-architecture` (*required*): Cần hiểu ngắt phần cứng, Memory-Mapped I/O và thanh ghi.
  - `operating-systems` (*required*): Cần hiểu lập lịch tiến trình/luồng, đồng bộ hóa và quản lý bộ nhớ.
  - `computer-networks` (*required*): Cần hiểu đặc tính kết nối không dây mất gói và đồng bộ trạng thái.

**Bản chất và nội dung môn học:**

Môn học khảo sát cách các nguyên lý hệ thống và phần mềm thay đổi khi bước ra khỏi môi trường máy chủ/máy tính để bàn sang các nền tảng chịu ràng buộc vật lý nghiêm ngặt về năng lượng, bộ nhớ, kết nối chập chờn và thời hạn phản hồi cứng (deadlines). Nội dung được chia thành ba phần tách biệt rõ ràng: (1) Hệ thống di động — vòng đời ứng dụng do hệ điều hành thu hồi bất kỳ lúc nào, bảo toàn trạng thái, kiến trúc ưu tiên ngoại tuyến (offline-first, đồng bộ hóa xung đột khi có mạng lại) và ngân sách pin/luồng giao diện (UI thread jank); (2) Hệ thống nhúng — tương tác phần cứng qua thanh ghi ánh xạ bộ nhớ (Memory-Mapped I/O, từ khóa `volatile`), giao tiếp ngoại vi (GPIO, UART/SPI/I2C ở mức giao thức), xử lý ngắt (ISR) ngắn gọn kết hợp bộ đệm vòng (ring buffer) và lập trình không cấp phát động; (3) Hệ thống thời gian thực (Real-Time Systems) — phân biệt thời gian thực cứng (hard) và mềm (soft), tính tất định về thời gian thực thi xấu nhất (WCET), lập lịch tuần hoàn Rate-Monotonic (RM) và Earliest Deadline First (EDF), cùng hiện tượng đảo ngược độ ưu tiên (priority inversion) và giao thức kế thừa độ ưu tiên.

**Cấu trúc chương mục:**
1. **Hệ thống di động: Vòng đời bị quản lý, Kiến trúc Offline-First và Ngân sách năng lượng** (`mer-mobile-lifecycle-offline-resource`): Máy trạng thái vòng đời tiến trình di động (Active, Background, Suspended/Killed), lưu và khôi phục trạng thái giao diện, hàng đợi đồng bộ bền vững khi mạng chập chờn và tách tác vụ nặng khỏi luồng vẽ màn hình. *(Nguồn chính: Mobile Systems Lifecycle & Offline Architecture Principles)*
2. **Hệ thống nhúng: Memory-Mapped I/O, Ngoại vi, Trình phục vụ ngắt (ISR) và Bộ đệm vòng** (`mer-embedded-mmio-interrupts-buffers`): Đọc/ghi thanh ghi phần cứng qua địa chỉ cố định, ý nghĩa thực sự của volatile (ngăn trình biên dịch tối ưu hóa bỏ lệnh đọc/ghi MMIO, không thay thế khóa đồng bộ), thiết kế ISR không chặn đẩy dữ liệu vào ring buffer cho vòng lặp chính. *(Nguồn chính: Dive Into Systems Ch. 10–11 & Embedded Systems Foundations)*
3. **Hệ thống thời gian thực: Ràng buộc Deadline, Lập lịch RM/EDF và Đảo ngược độ ưu tiên** (`mer-realtime-scheduling-priority-inversion`): Tại sao "chạy nhanh trung bình" không đồng nghĩa với "thời gian thực", điều kiện khả lập lịch của Rate-Monotonic và Earliest Deadline First, phân tích sự cố đảo ngược độ ưu tiên (kinh điển trên tàu Mars Pathfinder) và giải pháp Priority Inheritance. *(Nguồn chính: OSTEP Scheduling Extensions & Real-Time Scheduling Theory)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Sử dụng bộ mô phỏng và chương trình kiểm chứng cơ chế; không bắt buộc người học phải mua bo mạch vi điều khiển vật lý hay thiết bị di động riêng.

- **Giáo trình / Nguồn chuẩn:** `ostep-v110` (Operating Systems: Three Easy Pieces (OSTEP) — *Chapters 6–9 (Scheduling & Preemption) and Chapter 36 (I/O Devices, Interrupts, Polling, DMA)*, vai trò: `primary`); `dive-into-systems` (Dive Into Systems — *Chapter 11 & Embedded / Low-level C Memory Representation*, vai trò: `supplementary`)

### CS-41: Tính toán khoa học và xử lý dữ liệu (`scientific-computing-data-processing`)
- **Phân loại:** `core` | **Khối:** `block-6`
- **Điều kiện tiên quyết:**
  - `linear-algebra` (*required*): Cần phân rã ma trận LU/QR/SVD và chuẩn vector/ma trận để phân tích hệ số điều kiện.
  - `single-variable-calculus` (*required*): Cần khai triển Taylor và phần dư để ước lượng sai số cắt cụt của các công thức xấp xỉ số.
  - `statistics-inference` (*required*): Cần thống kê mô tả, xử lý nhiễu và nguyên tắc biểu diễn dữ liệu.

**Bản chất và nội dung môn học:**

Môn học nghiên cứu khoảng cách giữa toán học liên tục trên tập số thực lý tưởng và tính toán số học hữu hạn bit trên máy tính, đồng thời trang bị quy trình xử lý dữ liệu thực nghiệm có thể tái lập. Nội dung mở đầu bằng phân tích sai số tuyệt đối/tương đối, số học dấu chấm động IEEE 754, hiện tượng triệt tiêu thảm họa (catastrophic cancellation) khi trừ hai số xấp xỉ nhau, sự khác biệt giữa độ nhạy nội tại của bài toán (conditioning — hệ số điều kiện kappa(A)) và độ ổn định của thuật toán (numerical stability). Tiếp theo là các phương pháp số cốt lõi: giải phương trình phi tuyến, giải hệ phương trình tuyến tính bằng khử Gauss có chọn phần tử trụ (partial pivoting), nội suy đa thức/spline, tính đạo hàm số (sai phân hữu hạn và đánh đổi sai số cắt cụt với sai số làm tròn), tích phân số và phương trình vi phân thường (Euler, Runge–Kutta). Phần xử lý dữ liệu trình bày làm sạch dữ liệu khuyết/ngoại lai, biến đổi bảng dữ liệu, nguyên lý trực quan hóa trung thực (đúng tỷ lệ trục, đơn vị, không bóp méo thông tin) và đóng gói quy trình phân tích tái lập.

**Cấu trúc chương mục:**
1. **Sai số dấu chấm động, Triệt tiêu số học, Hệ số điều kiện và Tính ổn định thuật toán** (`scdp-floating-point-conditioning-stability`): Epsilon máy, mất chữ số có nghĩa khi trừ hai số gần bằng nhau, biến đổi biểu thức để tránh triệt tiêu, phân biệt bài toán có điều kiện xấu (ill-conditioned problem) với thuật toán không ổn định (unstable algorithm). *(Nguồn chính: Numerical Analysis Foundations & CS61C Floating Point Notes)*
2. **Phương pháp số cho Hệ tuyến tính (Pivoting), Nội suy, Tích phân số và Phương trình vi phân** (`scdp-numerical-linear-nonlinear-ode`): Tại sao không tính A^-1 trực tiếp mà dùng phân rã LU có chọn trụ, nội suy và hiện tượng dao động Runge, công thức hình thang/Simpson, sai phân hữu hạn và mô phỏng hệ động lực bằng Runge–Kutta. *(Nguồn chính: MIT 18.01SC Numerical Integration & MIT 18.06SC Numerical Linear Algebra)*
3. **Làm sạch dữ liệu, Trực quan hóa định lượng chính xác và Quy trình tính toán tái lập** (`scdp-data-cleaning-visualization-reproducibility`): Kiểm tra lược đồ, đơn vị đo và miền giá trị, xử lý dữ liệu khuyết có ghi nhận giả định, thiết kế biểu đồ giữ đúng tỷ lệ trục và đơn vị, cố định hạt giống ngẫu nhiên (random seed) và tự động hóa đường ống dữ liệu. *(Nguồn chính: Data Processing & Reproducible Research Guidelines)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Luôn phân biệt rõ tính toán ký hiệu chính xác (symbolic computation) với xấp xỉ số học (numerical approximation), và bắt buộc kèm đơn vị đo cùng điều kiện biên trong mọi mô hình.

- **Giáo trình / Nguồn chuẩn:** `mit-1806sc` (Linear Algebra (MIT 18.06SC) — *Unit I & III: Elimination with Pivoting, Conditioning, and SVD*, vai trò: `primary`); `mit-1801sc` (Single Variable Calculus (MIT 18.01SC) — *Part 2 & 3: Linear/Quadratic Approximations, Newton's Method, and Numerical Integration (Riemann/Trapezoidal/Simpson)*, vai trò: `primary`)

### CS-42: Đạo đức, xã hội và nghiên cứu CS (`ethics-society-cs-research`)
- **Phân loại:** `core` | **Khối:** `block-6`
- **Điều kiện tiên quyết:**
  - `software-engineering` (*required*): Cần hiểu vòng đời xây dựng phần mềm, phụ thuộc mã nguồn mở và kiểm thử.
  - `statistics-inference` (*required*): Cần hiểu kiểm định giả thuyết, sai lệch chọn mẫu và đánh đổi sai lầm loại I/II khi phân tích tính công bằng và kết quả thực nghiệm.

**Bản chất và nội dung môn học:**

Môn học tổng hợp các khía cạnh trách nhiệm nghề nghiệp, tác động xã hội–pháp lý của hệ thống tính toán và phương pháp luận nghiên cứu khoa học trong Khoa học Máy tính. Nội dung phần đạo đức và xã hội phân tích sâu: quyền riêng tư và giám sát dữ liệu, tính công bằng và thiên kiến thuật toán (algorithmic bias — định lý bất khả đồng thời thỏa mãn các tiêu chí công bằng thống kê khác nhau khi tỷ lệ nền khác biệt), tính minh bạch và trách nhiệm giải trình của hệ thống tự động hóa, khả năng tiếp cận như quyền cơ bản, cùng bản quyền và hệ sinh thái giấy phép mã nguồn mở (permissive như MIT/Apache-2.0 so với copyleft như GPL). Phần nghiên cứu khoa học trang bị phương pháp đọc bài báo khoa học ba vòng (three-pass method của Keshav), cách đặt câu hỏi nghiên cứu, thiết kế thực nghiệm có baseline công bằng, kiểm soát biến nhiễu, đánh giá độ tái lập (reproducibility) và trình bày báo cáo kỹ thuật trung thực.

**Cấu trúc chương mục:**
1. **Đạo đức nghề nghiệp ACM, Quyền riêng tư dữ liệu và Thiên kiến thuật toán (Fairness)** (`esr-professional-ethics-privacy-fairness`): Phân tích các nguyên tắc cốt lõi của ACM Code of Ethics, nguồn gốc sai lệch dữ liệu lịch sử, sự đánh đổi toán học giữa các thước đo công bằng (Calibration vs Equalized Odds) và giới hạn của quyết định tự động hóa. *(Nguồn chính: ACM Code of Ethics (2018) & Algorithmic Fairness Foundations)*
2. **Bản quyền phần mềm, Giấy phép mã nguồn mở (MIT, Apache, GPL) và Trách nhiệm hệ thống** (`esr-licenses-ip-societal-impact`): Phân biệt bản quyền (copyright), bằng sáng chế (patent) và giấy phép sử dụng (license); điều kiện kế thừa của giấy phép Copyleft so với Permissive; trách nhiệm khi công bố lỗ hổng bảo mật (coordinated vulnerability disclosure). *(Nguồn chính: Open Source Licensing & SWE at Google Dependency Policies)*
3. **Phương pháp đọc bài báo khoa học 3 vòng và Thiết kế thực nghiệm tái lập trong CS** (`esr-reading-papers-experimental-methodology`): Quy trình 3 vòng của S. Keshav (nắm khung tổng quát -> nắm luận điểm và đồ thị -> tái tạo lập luận và tìm giả định ẩn), cách thiết lập baseline không thiên vị, ablation study, báo cáo phương sai và đóng gói artifact tái lập. *(Nguồn chính: S. Keshav: How to Read a Paper (2007))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Các câu hỏi về quyền riêng tư, độ tin cậy và khả năng tiếp cận được lồng ghép xuyên suốt các môn trước, nhưng môn học này cung cấp khung phân tích hệ thống cùng phương pháp đọc/kiểm chứng công trình khoa học.

- **Giáo trình / Nguồn chuẩn:** `acm-ethics-keshav` (ACM Code of Ethics and Professional Conduct & How to Read a Paper — *ACM Code of Ethics and Professional Conduct (Sections 1–4) & S. Keshav "How to Read a Paper"*, vai trò: `primary`)

---

## Khối VII — Syllabus chuyên sâu và tổng hợp

Cung cấp các chương trình đào sâu có cấu trúc (Structured Specialization Syllabi) đi từ môn nền đã học sang các cơ chế nâng cao cho từng hướng chuyên ngành (Hệ điều hành & Hệ thống, Hệ quản trị dữ liệu & Lưu trữ, Trình biên dịch & Runtime, Hệ phân tán & Thuật toán nâng cao, Thị giác máy tính, Xử lý ngôn ngữ tự nhiên, Bảo mật chuyên sâu) và môn Đồ án tổng hợp.

### CS-43: Chuyên sâu Hệ điều hành và Hệ thống (xv6 Kernel) (`spec-systems-os`)
- **Phân loại:** `specialization` | **Khối:** `block-7`
- **Điều kiện tiên quyết:**
  - `operating-systems` (*required*): Cần nắm vững lý thuyết ảo hóa CPU, bảng trang bộ nhớ ảo, khóa đồng bộ và hệ thống tệp.
  - `linux-system-programming` (*required*): Cần thành thạo ngôn ngữ C hệ thống, con trỏ hàm và giao diện lời gọi hệ thống.
  - `computer-architecture` (*required*): Cần nắm tập lệnh RISC-V, thanh ghi điều khiển trạng thái (CSR) và quy ước gọi hàm.

**Bản chất và nội dung môn học:**

Nhánh chuyên sâu đưa người học từ việc hiểu các cơ chế hệ điều hành ở mức khái niệm (Môn 25) sang việc đọc hiểu, phân tích và mở rộng trực tiếp mã nguồn một nhân hệ điều hành đa xử lý thực thụ dựa trên kiến trúc RISC-V (MIT xv6). Nội dung đi xuyên suốt từ quá trình khởi động máy (bootstrapping) ở chế độ M-mode/S-mode, thiết lập bảng trang hạt nhân và không gian địa chỉ người dùng Sv39, cơ chế chuyển đổi ngữ cảnh qua bảng vector trap (`trampoline` và `trapframe`), thực thi lời gọi hệ thống, cài đặt Copy-on-Write `fork()` qua xử lý ngắt thiếu trang, đồng bộ hóa nhân đa lõi bằng spinlock và sleeplock, tầng đệm khối (buffer cache) và nhật ký giao dịch (logging) của hệ thống tệp, đến giao diện trình điều khiển mạng.

**Cấu trúc chương mục:**
1. **Khởi động nhân RISC-V, Bảng trang Sv39 và Cơ chế Trap/Syscall trong xv6** (`ssos-boot-pagetables-traps`): Quá trình chuyển từ M-mode sang S-mode, ánh xạ bộ nhớ nhân, trang trampoline chia sẻ biên user/kernel, lưu thanh ghi vào trapframe và đường đi toàn trình của một lời gọi hệ thống. *(Nguồn chính: MIT xv6 Book Ch. 2–4)*
2. **Cấp phát trang lười (Lazy Allocation), Copy-on-Write Fork và Bộ lập lịch đa nhân** (`ssos-cow-lazy-allocation-scheduling`): Sử dụng bit PTE và trình xử lý page fault để trì hoãn cấp phát trang vật lý và chia sẻ trang chỉ đọc giữa tiến trình cha–con cho tới khi có lệnh ghi, cùng cơ chế chuyển ngữ cảnh `swtch` trong xv6. *(Nguồn chính: MIT xv6 Book Ch. 4–5 & 6.1810 Labs (Page Tables, Traps, COW))*
3. **Khóa đồng bộ trong Kernel, Tầng Buffer Cache và Nhật ký hệ thống tệp (Crash Recovery)** (`ssos-kernel-locking-fs-logging`): Tại sao phải tắt ngắt trên lõi hiện tại khi giữ spinlock, khi nào dùng sleeplock, thiết kế tầng bio/log/inode/directory trong xv6 và đảm bảo tính nguyên tử của thao tác tệp qua giao dịch log. *(Nguồn chính: MIT xv6 Book Ch. 6–8)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Nhánh chuyên sâu tự chọn dành cho hướng Hệ thống; tập trung vào sự chính xác của bất biến kernel, quản lý trang vật lý và đồng bộ hóa đa lõi.

- **Giáo trình / Nguồn chuẩn:** `mit-xv6-2025` (xv6: a simple, Unix-like teaching operating system (MIT 6.1810) — *xv6 RISC-V Book Chapters 1–9 and MIT 6.1810 Schedule/Lab Specifications*, vai trò: `primary`); `ostep-v110` (Operating Systems: Three Easy Pieces (OSTEP) — *Chapters 18–23, 28–32, 40–42*, vai trò: `supplementary`)

### CS-44: Chuyên sâu Hệ quản trị dữ liệu và Lưu trữ (`spec-database-storage`)
- **Phân loại:** `specialization` | **Khối:** `block-7`
- **Điều kiện tiên quyết:**
  - `database-internals` (*required*): Cần nắm vững kiến trúc trang đĩa, B+Tree cơ bản, các thuật toán Join, 2PL và ARIES WAL.
  - `concurrency-parallelism` (*required*): Cần nắm vững khóa hạt mịn, reader-writer latches và thao tác nguyên tử.

**Bản chất và nội dung môn học:**

Nhánh chuyên sâu đào sâu vào kỹ thuật thiết kế và cài đặt các thành phần cốt lõi của động cơ lưu trữ và xử lý truy vấn hiệu năng cao, đồng thời mở rộng từ hệ cơ sở dữ liệu giao dịch trên một máy (OLTP) sang hệ thống lưu trữ phân tích hướng cột (OLAP) và lưu trữ phân tán. Nội dung gồm thiết kế Buffer Pool có kiểm soát ghim trang và chính sách thay thế chống quét tuần tự (LRU-K), cài đặt B+Tree hỗ trợ truy cập đồng thời bằng kỹ thuật giữ chốt lan truyền (latch crabbing), kiến trúc cây LSM (MemTable, WAL, SSTable, Bloom Filter và chiến lược Compaction tầng/kích thước), thực thi truy vấn vector hóa và biên dịch truy vấn (JIT), kiểm soát đồng thời đa phiên bản (MVCC với thu gom phiên bản cũ — vacuum/garbage collection) và lưu trữ cột có nén dữ liệu.

**Cấu trúc chương mục:**
1. **Đồng bộ hóa hạt mịn trên B+Tree (Latch Crabbing) và Kiến trúc động cơ LSM-Tree** (`sdbs-concurrent-bplustree-lsm`): Phân biệt Lock (mức giao dịch logic) với Latch (mức cấu trúc dữ liệu vật lý), điều kiện nút an toàn cho phép nhả sớm latch tổ tiên, và thiết kế MemTable/SSTable/Bloom Filter/Compaction trong LSM-Tree. *(Nguồn chính: CMU 15-445 Lectures 7–8)*
2. **Thực thi truy vấn Vector hóa, Thiết kế MVCC thực chiến và Thu gom phiên bản rác** (`sdbs-vectorized-execution-mvcc-gc`): So sánh mô hình Volcano tuple-at-a-time với vectorized batch execution trên cache CPU, bố cục lưu trữ phiên bản (append-only vs delta storage) và thu hồi phiên bản không còn giao dịch nào nhìn thấy. *(Nguồn chính: CMU 15-445 Lectures 11–12, 18)*
3. **Lưu trữ hướng cột (Columnar Storage), Nén dữ liệu (Run-Length, Dictionary) và Truy vấn phân tán** (`sdbs-columnar-olap-distributed-storage`): Đánh đổi giữa bố cục hàng (NSM) và bố cục cột (DSM), thực thi trực tiếp trên dữ liệu nén, phân vùng bảng và thực thi kết nối phân tán (Broadcast vs Shuffle Hash Join). *(Nguồn chính: CMU 15-445 Lectures 4, 21–24)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Nhánh chuyên sâu tự chọn dành cho hướng Kỹ thuật Dữ liệu và Hệ thống Lưu trữ; đòi hỏi nền tảng vững về C++, đồng thời và kiến trúc bộ nhớ.

- **Giáo trình / Nguồn chuẩn:** `cmu-15445` (CMU 15-445/645: Database Systems — *Lectures 4, 7–8, 11–12, 18, 21–24 and Project Specifications (Buffer Pool, B+Tree, Query Execution, Concurrency)*, vai trò: `primary`); `ucb-cs186-notes` (CS 186: Introduction to Database Systems — Course Notes — *B+ Trees, Concurrency Control, and Recovery Notes*, vai trò: `supplementary`)

### CS-45: Chuyên sâu Ngôn ngữ, Trình biên dịch và Máy ảo (`spec-compilers-runtime`)
- **Phân loại:** `specialization` | **Khối:** `block-7`
- **Điều kiện tiên quyết:**
  - `programming-languages-foundations` (*required*): Cần nắm vững AST, tầm vực tĩnh, bao đóng (closures) và bộ thông dịch duyệt cây.
  - `computer-architecture` (*required*): Cần hiểu thanh ghi, ngăn xếp phần cứng, lệnh nhảy và bố cục bộ nhớ.
  - `formal-languages-computability` (*required*): Cần nắm otomat hữu hạn và văn phạm phi ngữ cảnh.

**Bản chất và nội dung môn học:**

Nhánh chuyên sâu nghiên cứu toàn bộ đường ống chuyển đổi một ngôn ngữ bậc cao thành mã thực thi hiệu quả cùng hệ thống thời gian chạy (runtime system). Tiếp nối bộ thông dịch duyệt cây ở Môn 21, môn học đi sâu vào: phân tích từ vựng và phân tích cú pháp tiền tố/Pratt parser có phục hồi lỗi; phân tích ngữ nghĩa tĩnh, phân giải biến theo tầm vực tĩnh (static variable resolution) và kiểm tra kiểu; thiết kế biểu diễn trung gian (Intermediate Representation — từ mã byte ngăn xếp, mã ba địa chỉ đến dạng gán đơn tĩnh SSA); phân tích luồng điều khiển (CFG) và luồng dữ liệu (liveness analysis, constant propagation, dead-code elimination); kiến trúc máy ảo mã byte (Bytecode VM: khung gọi hàm, đối tượng chuỗi/hàm, bắt giữ biến tự do qua Upvalues cho Closures); và bộ thu gom rác đánh dấu–quét (Mark-and-Sweep GC) chính xác.

**Cấu trúc chương mục:**
1. **Kiến trúc Front-End: Phân tích cú pháp Pratt, Phân giải tĩnh và Kiểm tra ngữ nghĩa** (`scr-frontend-pratt-semantic-resolution`): Xử lý độ ưu tiên toán tử bằng Vaughan Pratt parser, phát hiện lỗi cú pháp không sập (panic-mode recovery), phân giải khoảng cách khung môi trường tại thời điểm biên dịch và kiểm tra tính hợp lệ của câu lệnh. *(Nguồn chính: Crafting Interpreters Ch. 11, 16–17)*
2. **Biểu diễn mã Byte (Bytecode Chunk), Kiến trúc Máy ảo Ngăn xếp và Cơ chế Upvalues** (`scr-bytecode-vm-closures-upvalues`): Tại sao duyệt AST chậm do phân mảnh bộ nhớ và nhảy con trỏ, thiết kế tập lệnh bytecode đặc khít, vòng lặp giải mã lệnh, quản lý ngăn xếp giá trị/khung gọi hàm và cơ chế đóng (close) upvalue từ stack sang heap. *(Nguồn chính: Crafting Interpreters Part III: A Bytecode Virtual Machine (Ch. 14–15, 18–25))*
3. **Biểu diễn trung gian (IR/SSA), Tối ưu hóa luồng dữ liệu và Thu gom rác (Garbage Collection)** (`scr-ir-dataflow-gc-runtime`): Đồ thị luồng điều khiển (CFG), các phép biến đổi tối ưu bảo toàn ngữ nghĩa, và cài đặt bộ thu gom rác Tracing Mark-and-Sweep ba màu (trắng–xám–đen) an toàn khi cấp phát. *(Nguồn chính: Crafting Interpreters Ch. 26–30)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Nhánh chuyên sâu tự chọn; giúp người học hiểu tận gốc cách các ngôn ngữ hiện đại (Java, Python, JS, C#, Go, Rust) biên dịch và quản lý bộ nhớ bên dưới tầng cú pháp.

- **Giáo trình / Nguồn chuẩn:** `crafting-interpreters` (Crafting Interpreters — *Part III: A Bytecode Virtual Machine (Chapters 14–30)*, vai trò: `primary`)

### CS-46: Chuyên sâu Hệ phân tán và Đồng thuận chịu lỗi (`spec-distributed-systems-advanced`)
- **Phân loại:** `specialization` | **Khối:** `block-7`
- **Điều kiện tiên quyết:**
  - `distributed-systems` (*required*): Cần nắm vững mô hình lỗi, đồng hồ logic, tính tuyến tính hóa và nguyên lý cơ bản của Raft/2PC.
  - `concurrency-parallelism` (*required*): Cần thành thạo xử lý đồng thời đa luồng, khóa và kênh truyền thông không đồng bộ.

**Bản chất và nội dung môn học:**

Nhánh chuyên sâu đi vào thiết kế, cài đặt và kiểm chứng các hệ thống lưu trữ và tính toán phân tán chịu lỗi dưới các kịch bản mạng khắc nghiệt (mất gói, phân vùng mạng kéo dài, khởi động lại nút mất bộ nhớ khả biến, gói tin đến trễ sau khi đã đổi leader). Nội dung tập trung vào: phân tích đầy đủ bốn tính chất an toàn của Raft (Election Safety, Leader Append-Only, Log Matching, Leader Completeness, State Machine Safety); xây dựng dịch vụ Khóa–Giá trị chịu lỗi (Fault-Tolerant Key-Value Store) trên nền Raft với cơ chế phát hiện yêu cầu trùng lặp từ client để bảo đảm tính tuyến tính hóa (Linearizability); kỹ thuật cắt tỉa và cài đặt ảnh chụp trạng thái (Log Compaction & InstallSnapshot); và hệ thống phân mảnh đa nhóm Raft (Sharded KV) với cấu hình động và di chuyển phân mảnh nguyên tử.

**Cấu trúc chương mục:**
1. **Chứng minh an toàn của Raft, Lưu trữ bền vững qua sự cố khởi động lại và Cắt tỉa nhật ký (Snapshots)** (`sdsa-raft-safety-persistence-snapshots`): Tại sao Leader không được trực tiếp đánh dấu commit cho các mục log từ nhiệm kỳ trước chỉ bằng đếm số bản sao (Figure 8 trong bài báo Raft), trạng thái bắt buộc phải ghi đĩa trước khi phản hồi RPC, và giao thức InstallSnapshot. *(Nguồn chính: Raft Paper §5–§7 & MIT 6.5840 Labs 3A–3D)*
2. **Dịch vụ Key-Value Tuyến tính hóa (Linearizable KV) và Khử trùng lặp yêu cầu qua đổi Leader** (`sdsa-linearizable-kv-deduplication`): Xử lý tình huống Leader bị cô lập mạng (stale leader) khi phục vụ lệnh đọc, gắn số thứ tự tuần tự cho mỗi phiên client và lưu bảng kết quả cuối cùng trong máy trạng thái nhân bản để thử lại an toàn. *(Nguồn chính: MIT 6.5840 Lecture Notes & Lab 4 (Fault-tolerant Key/Value Service))*
3. **Hệ thống Lưu trữ Phân mảnh động (Sharded KV) và Phối hợp liên nhóm đồng thuận** (`sdsa-sharded-raft-reconfiguration`): Kiến trúc nhóm điều khiển cấu hình (Shard Controller) tách biệt với các nhóm lưu trữ dữ liệu (Replica Groups), di chuyển dữ liệu phân mảnh khi đổi cấu hình mà không làm mất tính nhất quán hay chặn toàn cục. *(Nguồn chính: MIT 6.5840 Lab 5 (Sharded Key/Value Service) & Spanner/Bigtable Readings)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Nhánh chuyên sâu tự chọn mức cao (dựa trên học liệu công khai của MIT 6.5840); tập trung vào việc duy trì bất biến trạng thái dưới mọi lịch trình đan xen lỗi mạng và sập nút.

- **Giáo trình / Nguồn chuẩn:** `mit-65840-raft` (MIT 6.5840 Distributed Systems & The Raft Consensus Algorithm — *Raft Paper (§5–§8) and MIT 6.5840 Public Lecture Notes & Lab Architectures*, vai trò: `primary`)

### CS-47: Chuyên sâu Thị giác máy tính (Computer Vision) (`spec-computer-vision`)
- **Phân loại:** `specialization` | **Khối:** `block-7`
- **Điều kiện tiên quyết:**
  - `deep-learning-modern-models` (*required*): Cần nắm vững mạng tích chập (CNN), ResNet, Attention/Transformer và quy trình huấn luyện mạng sâu.
  - `linear-algebra` (*required*): Cần phép biến đổi chiếu, SVD và giải hệ phương trình bình phương tối thiểu cho hình học thị giác.

**Bản chất và nội dung môn học:**

Nhánh chuyên sâu nghiên cứu cách trích xuất thông tin cấu trúc, hình học và ngữ nghĩa từ ảnh số và chuỗi video. Nội dung kết hợp cả thị giác máy tính cổ điển dựa trên xử lý tín hiệu/hình học lẫn các kiến trúc học sâu hiện đại: quá trình hình thành ảnh, phép lọc không gian và miền tần số, phát hiện biên và đặc trưng cục bộ bất biến tỷ lệ, hình học nhiều góc nhìn (ma trận Homography, hình học Epipolar, ước lượng độ sâu lập thể), các kiến trúc mạng tích chập và Vision Transformer (ViT), bài toán phát hiện vật thể (Object Detection: vùng đề xuất, khung neo, Non-Maximum Suppression), phân đoạn ảnh ngữ nghĩa và thực thể (Semantic/Instance Segmentation: U-Net, Mask R-CNN), cùng đánh giá định lượng bằng IoU/mAP.

**Cấu trúc chương mục:**
1. **Lọc ảnh, Phát hiện biên/đặc trưng và Hình học nhiều góc nhìn (Multi-View Geometry)** (`scv-image-filtering-features-geometry`): Tích chập 2D rời rạc, bộ lọc Gaussian/Sobel/Canny, mô tả đặc trưng cục bộ, phép biến đổi phẳng Homography, khớp ảnh bằng RANSAC chống ngoại lai và hình học Epipolar. *(Nguồn chính: D2L Ch. 14 & Computer Vision Foundations)*
2. **Phát hiện vật thể (Object Detection), Phân đoạn ảnh (Segmentation) và Vision Transformer** (`scv-detection-segmentation-vit`): Biểu diễn hộp bao, giao trên hợp (IoU), thuật toán lọc hộp trùng Non-Maximum Suppression (NMS), kiến trúc phát hiện một/hai giai đoạn, mạng tích chập đầy đủ và U-Net cho phân đoạn mức điểm ảnh, cùng biểu diễn mảng ảnh (patch embeddings) trong ViT. *(Nguồn chính: D2L Ch. 14 (§14.1–14.11: Object Detection, Semantic Segmentation, Style Transfer))*
3. **Đánh giá hệ thống thị giác (mAP), Độ bền vững trước biến đổi miền và Giới hạn thực tế** (`scv-evaluation-robustness-deployment`): Tính toán đường cong Precision–Recall và Mean Average Precision (mAP) qua nhiều ngưỡng IoU, tăng cường dữ liệu bảo toàn nhãn, hiện tượng suy giảm hiệu năng khi thay đổi ánh sáng/góc máy và tối ưu hóa suy luận. *(Nguồn chính: D2L Ch. 14)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Nhánh chuyên sâu tự chọn; giữ cả nền tảng hình học/xử lý ảnh lẫn học sâu để người học không bị bế tắc khi bài toán cần hiệu chỉnh camera hay ước lượng tọa độ không gian.

- **Giáo trình / Nguồn chuẩn:** `d2l-ai` (Dive into Deep Learning (D2L) — *Chapter 14: Computer Vision (Image Augmentation, Object Detection, Bounding Boxes, Multiscale Detection, R-CNNs, Semantic Segmentation, Fully Convolutional Networks)*, vai trò: `primary`)

### CS-48: Chuyên sâu Xử lý ngôn ngữ tự nhiên (NLP) (`spec-natural-language-processing`)
- **Phân loại:** `specialization` | **Khối:** `block-7`
- **Điều kiện tiên quyết:**
  - `deep-learning-modern-models` (*required*): Cần nắm vững không gian nhúng, cơ chế Attention, kiến trúc Transformer và hàm mất mát Cross-Entropy.
  - `probability` (*required*): Cần quy tắc dây chuyền xác suất có điều kiện và lý thuyết thông tin cơ bản (entropy).

**Bản chất và nội dung môn học:**

Nhánh chuyên sâu nghiên cứu các mô hình tính toán để phân tích, biểu diễn và sinh ngôn ngữ tự nhiên của con người. Nội dung đi từ đặc thù cấu trúc và sự nhập nhằng của ngôn ngữ, chuẩn hóa văn bản Unicode, các thuật toán tách từ con (Subword Tokenization: Byte-Pair Encoding — BPE, WordPiece), mô hình ngôn ngữ thống kê N-gram, độ hỗn loạn (perplexity) và kỹ thuật làm trơn, đến biểu diễn từ phân tán (Word2Vec Skip-gram/CBOW, lấy mẫu âm), mô hình chuỗi–sang–chuỗi (Seq2Seq, tìm kiếm chùm — Beam Search), các kiến trúc Transformer tiền huấn luyện (Encoder-only như BERT cho biểu diễn hai chiều, Decoder-only tự hồi quy cho sinh văn bản, Encoder-Decoder), tinh chỉnh có giám sát, cơ chế truy hồi bổ sung (Retrieval-Augmented Generation), phương pháp đánh giá và phân tích hiện tượng sinh thông tin sai lệch (hallucination).

**Cấu trúc chương mục:**
1. **Tách từ con (Subword Tokenization), Mô hình ngôn ngữ xác suất và Không gian nhúng từ** (`snlp-tokenization-language-models-embeddings`): Tại sao tách từ theo khoảng trắng thất bại trước từ hiếm và ngôn ngữ đa hình thái, thuật toán BPE, mô hình ngôn ngữ tự hồi quy P(w_1...w_T), thước đo Perplexity, và học biểu diễn ngữ nghĩa qua ngữ cảnh trong Word2Vec. *(Nguồn chính: D2L Ch. 9.3, Ch. 15 (§15.1–15.4: Word2Vec, Subword Embedding/BPE))*
2. **Kiến trúc Seq2Seq, Tìm kiếm chùm (Beam Search) và Mô hình Transformer tiền huấn luyện** (`snlp-seq2seq-pretrained-transformers`): Giải mã chuỗi bằng Greedy vs Beam Search vs lấy mẫu nhiệt độ/top-p, sự khác biệt giữa mặt nạ hai chiều (Masked Language Modeling — BERT) và mặt nạ nhân quả tự hồi quy (Causal Language Modeling — GPT), cùng kỹ thuật tinh chỉnh hiệu quả tham số. *(Nguồn chính: D2L Ch. 10 (§10.7–10.8), Ch. 11 & Ch. 15 (§15.8–15.10: BERT & Pretraining))*
3. **Đánh giá tác vụ NLP, Kết hợp truy hồi tri thức và Giới hạn của mô hình ngôn ngữ** (`snlp-evaluation-retrieval-hallucination`): Đánh giá phân lớp/trích xuất thực thể ở mức span so với đánh giá văn bản sinh, nguyên nhân toán học của hiện tượng bịa đặt thông tin (hallucination) trong mô hình xác suất tự hồi quy, tiêm nhiễm câu lệnh (prompt injection) và kiểm chứng bằng nguồn ngoài. *(Nguồn chính: D2L Ch. 16 (Natural Language Processing: Applications))*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Nhánh chuyên sâu tự chọn; phân biệt rõ việc hiểu cơ chế tách token, xác suất tự hồi quy và đánh giá mô hình NLP với việc chỉ viết câu lệnh gọi chatbot.

- **Giáo trình / Nguồn chuẩn:** `d2l-ai` (Dive into Deep Learning (D2L) — *Chapters 10, 11, 15 (Pretraining: Word2Vec, BPE, BERT), and 16 (NLP Applications)*, vai trò: `primary`)

### CS-49: Chuyên sâu Bảo mật hệ thống, Ứng dụng và Mạng (`spec-security-advanced`)
- **Phân loại:** `specialization` | **Khối:** `block-7`
- **Điều kiện tiên quyết:**
  - `security-privacy` (*required*): Cần nắm vững mô hình đe dọa, mật mã ứng dụng cơ sở và các lớp lỗ hổng phổ biến.
  - `linux-system-programming` (*required*): Cần hiểu tệp thực thi ELF, lời gọi hệ thống, mô tả tệp và tín hiệu.
  - `computer-networks` (*required*): Cần nắm chắc TCP/IP, DNS, định tuyến và TLS.

**Bản chất và nội dung môn học:**

Nhánh chuyên sâu đào sâu vào phương pháp phân tích an toàn hệ thống ở ba lớp: nhị phân/hệ điều hành, giao thức mạng và kiến trúc ứng dụng phức tạp. Nội dung trình bày cách phân tích điều kiện khai thác và cơ chế phòng vệ phần cứng/trình biên dịch ở mức nhị phân (Control-Flow Integrity, ASLR, DEP/NX, fuzzing hướng độ phủ — coverage-guided fuzzing và kiểm thử thực thi ký hiệu cơ sở); bảo mật tầng mạng và hệ thống phân tán (tấn công giả mạo DNS/BGP, phân tích bắt tay TLS 1.3, cô lập mạng Zero-Trust, mTLS); kiểm toán mã nguồn và kiến trúc xác thực/ủy quyền tập trung (OAuth 2.0 / OIDC với PKCE, lỗ hổng kiểm soát truy cập mức đối tượng BOLA/IDOR, điều kiện tranh chấp TOCTOU trong giao dịch tài nguyên); cùng quy trình ứng phó sự cố và pháp chứng số cơ bản.

**Cấu trúc chương mục:**
1. **Bảo vệ thực thi nhị phân, Điều kiện tranh chấp TOCTOU và Kiểm thử mờ hướng độ phủ (Fuzzing)** (`ssa-binary-mitigations-fuzzing`): Cơ chế bảo vệ khung ngăn xếp và vùng nhớ động hiện đại, lỗ hổng Time-of-Check to Time-of-Use (TOCTOU) ở tầng hệ thống tệp/ứng dụng, và tự động phát hiện đầu vào gây lỗi bằng coverage-guided fuzzing kết hợp sanitizers. *(Nguồn chính: OSTEP Ch. 53–56 & OWASP Testing Guide)*
2. **Phân tích an toàn giao thức (TLS 1.3, OAuth 2.0/OIDC) và Kiểm soát truy cập phân tán** (`ssa-protocol-security-oauth-zerotrust`): Các tính chất bảo mật tiên tiến của TLS 1.3 (Forward Secrecy, loại bỏ thuật toán yếu), luồng ủy quyền OAuth 2.0 Authorization Code + PKCE, các lỗi xác thực chữ ký token và phòng chống leo thang đặc quyền ngang/dọc. *(Nguồn chính: OWASP OAuth2, JWT, and Authorization Cheat Sheets & Dordal Ch. 29)*
3. **Phương pháp kiểm toán thiết kế an toàn, Nhật ký chống giả mạo và Ứng phó sự cố** (`ssa-audit-incident-response`): Rà soát kiến trúc theo luồng dữ liệu, thiết kế nhật ký kiểm toán (audit logs) phục vụ truy vết, quy trình cô lập, khắc phục nguyên nhân gốc và rút kinh nghiệm không đổ lỗi sau sự cố bảo mật. *(Nguồn chính: OWASP Logging & Incident Response Guidance)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Nhánh chuyên sâu tự chọn; tuân thủ tuyệt đối nguyên tắc đạo đức và pháp luật: chỉ thực hành kiểm thử bảo mật trên môi trường cô lập hoặc tài sản có sự cho phép rõ ràng bằng văn bản.

- **Giáo trình / Nguồn chuẩn:** `owasp-cheatsheets` (OWASP Cheat Sheet Series & Web Security Testing Guide — *Authorization, OAuth2, JWT, Transaction Authorization, and Logging Cheat Sheets*, vai trò: `primary`); `ostep-v110` (Operating Systems: Three Easy Pieces (OSTEP) — *Chapters 53–58 (Security, Access Control, Cryptography, Distributed Security)*, vai trò: `primary`)

### CS-50: Đồ án tổng hợp và trình bày kỹ thuật (`capstone-synthesis-technical-writing`)
- **Phân loại:** `core` | **Khối:** `block-7`
- **Điều kiện tiên quyết:**
  - `software-engineering` (*required*): Cần nắm quy trình thiết kế mô-đun, kiểm thử đa tầng, quản lý phiên bản và tích hợp liên tục.
  - `operations-performance-reliability` (*required*): Cần phương pháp đo đạc hiệu năng, phân vị độ trễ và kiểm chứng độ tin cậy.
  - `ethics-society-cs-research` (*required*): Cần phương pháp thiết kế thực nghiệm tái lập, đạo đức dữ liệu và trình bày báo cáo khoa học.

**Bản chất và nội dung môn học:**

Môn học đóng vai trò đỉnh tích hợp của toàn bộ chương trình Khoa học Máy tính: nơi người học vận dụng đồng thời nền tảng cấu trúc dữ liệu – thuật toán, tư duy hệ thống, mô hình dữ liệu, kỹ nghệ phần mềm và phương pháp đánh giá thực nghiệm để giải quyết một bài toán kỹ thuật hoặc nghiên cứu có chiều sâu. Thay vì cung cấp một danh sách việc làm rập khuôn, môn học trình bày phương pháp luận xác định phạm vi bài toán, lập tài liệu thiết kế kiến trúc (System Design Document & ADR) nêu rõ các phương án đã cân nhắc và lý do đánh đổi, xây dựng hệ thống có kiểm thử tự động và khả năng quan sát, thiết kế bộ thí nghiệm đo kiểm định lượng (độ trễ, thông lượng, bộ nhớ, độ chính xác hoặc hành vi khi gặp lỗi) và viết báo cáo kỹ thuật rõ ràng, trung thực về cả kết quả đạt được lẫn giới hạn của hệ thống.

**Cấu trúc chương mục:**
1. **Định hình bài toán, Đặc tả yêu cầu và Tài liệu thiết kế kiến trúc (Design Doc)** (`cstw-problem-scoping-design-doc`): Xác định mục tiêu và phi mục tiêu (non-goals), ước lượng quy mô và ràng buộc tài nguyên, phân tích ít nhất hai phương án kiến trúc khả thi và ghi lại lý do đánh đổi. *(Nguồn chính: SWE at Google Ch. 8–10 & OSSU Final Project Guidelines)*
2. **Triển khai phân đoạn, Kiểm chứng bất biến và Đánh giá thực nghiệm định lượng** (`cstw-incremental-implementation-verification`): Xây dựng trục xương sống (walking skeleton) từ sớm, kiểm thử tự động các bất biến cốt lõi, thiết lập kịch bản đo tải/độ chính xác có đối chứng (baseline comparison) và kiểm tra hành vi dưới đầu vào biên/lỗi. *(Nguồn chính: SWE at Google Ch. 11–14 & Google SRE Book Ch. 4, 21)*
3. **Phương pháp viết báo cáo kỹ thuật, Trực quan hóa kết quả và Đóng gói tái lập** (`cstw-technical-writing-reproducible-artifact`): Cấu trúc một báo cáo kỹ thuật hoặc bài báo hệ thống, trình bày sơ đồ kiến trúc và biểu đồ thực nghiệm đúng chuẩn mực, viết hướng dẫn để người độc lập dựng và kiểm chứng lại toàn bộ kết quả, cùng phụ lục tự chọn về định hướng nghề nghiệp. *(Nguồn chính: S. Keshav Paper Writing/Reading Notes & ACM Reproducibility Guidelines)*

**Giới hạn phạm vi học thuật (`boundaries`):**
- Đồ án tổng hợp đánh giá năng lực tích hợp kiến thức và bằng chứng kiểm nghiệm thực tế; phần chuẩn bị hồ sơ nghề nghiệp chỉ là phụ lục tùy chọn sau khi đã hoàn thành sản phẩm kỹ thuật.

- **Giáo trình / Nguồn chuẩn:** `swe-at-google` (Software Engineering at Google — *Chapters 8–14 (Design Docs, Code Review, Testing)*, vai trò: `primary`); `ossu-cs` (OSSU Computer Science Curriculum — *Final Project & Evaluation Guidelines*, vai trò: `supplementary`); `acm-ethics-keshav` (ACM Code of Ethics and Professional Conduct & How to Read a Paper — *Technical Writing, Reproducibility, and Ethical Reporting*, vai trò: `supplementary`)
