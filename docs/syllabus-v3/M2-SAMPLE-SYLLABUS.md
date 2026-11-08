# Bản Đọc Toàn Văn Syllabus v3 — Mốc Kiểm Định M2 (Sample Courses)

> **Mục đích tài liệu:** Xuất bản toàn văn các môn học và chương mẫu thuộc cổng kiểm định **M2** theo đúng kiến trúc `Khối → Môn → Chương → Tiểu mục` với văn xuôi học thuật giải thích đối tượng, khái niệm, phương pháp, điều kiện áp dụng và giới hạn phạm vi.

## Thống kê định lượng M2

- **Số môn mẫu biên soạn ở M2:** 3 môn (`CS-04 Lập trình nhập môn`, `CS-09 Toán rời rạc và lập luận cho CS`, và chương mẫu hệ thống của `CS-25 Hệ điều hành`)
- **Tổng số chương đã biên soạn toàn văn:** 17 chương
- **Tổng số tiểu mục (topics) đã biên soạn toàn văn:** 64 tiểu mục (61 `core` + 3 `extension`)
- **Tổng số từ học thuật (chỉ tính phần văn xuôi overview & paragraphs):** 19,977 từ

---

## CS-04: Lập trình nhập môn (`intro-programming`)

- **Thuộc khối:** Khối I — Bắt đầu từ số 0
- **Phân loại:** `core`
- **Điều kiện tiên quyết:**
  - `computing-environment` (*required*): Cần biết thao tác với tệp văn bản, đường dẫn thư mục, cửa sổ dòng lệnh và cách gọi trình biên dịch trước khi viết chương trình đầu tiên.
  - `computational-thinking` (*co_requisite*): Cần nắm khái niệm đầu vào, đầu ra, trạng thái và phân rã bước giải hữu hạn khi diễn đạt chúng bằng cú pháp ngôn ngữ lập trình.
  - `math-bridge` (*co_requisite*): Cần biến số, phép chia lấy dư, hàm số cơ bản và ký hiệu chỉ số dãy để đọc hiểu biểu thức số học và vòng lặp.

### Tổng quan môn học

Môn học mở ra lối đi tuần tự cho người bắt đầu học lập trình hoàn toàn từ số 0, sử dụng C++ chuẩn ở phần tập con vừa sức làm ngôn ngữ trục duy nhất. Thay vì dồn ép các chi tiết kiến trúc hệ thống hay tối ưu hóa cấp thấp ngay từ đầu, môn học dẫn dắt người học đi từ việc viết, biên dịch và chạy một chương trình nhỏ có nhập – xử lý – xuất, qua cách lưu trữ trạng thái bằng biến và các kiểu dữ liệu cơ sở, cách xây dựng biểu thức tính toán, đến các cấu trúc điều khiển rẽ nhánh và vòng lặp để giải quyết những bài toán có điều kiện và lặp lại.

Khi người học đã tự viết được các đoạn chương trình tuần tự và lặp, môn học giới thiệu cơ chế chia nhỏ bài toán bằng hàm, truyền tham số và phạm vi biến cục bộ, rồi mở rộng sang cách xử lý dãy dữ liệu với `std::vector`, chuỗi văn bản `std::string` và bản ghi `struct`. Chương cuối trang bị kỹ năng làm việc với tệp văn bản, kiểm tra dữ liệu đầu vào bị lỗi, đọc thông báo của trình biên dịch và lần vết trạng thái để tự tìm lỗi (debugging cơ bản). Các cơ chế hệ thống hoặc tối ưu hóa sâu hơn (như bảng ký hiệu của trình liên kết hay kiểu xem chuỗi không sở hữu `std::string_view`) được đánh dấu rõ ở mức mở rộng (`extension`) hoặc chuyển sang các môn tiếp theo (`CS-05`, `CS-07`, `CS-23`).

### Giới hạn học thuật (`boundaries`)

- Chỉ sử dụng một ngôn ngữ trục (C++) xuyên suốt môn để xây dựng mô hình thực thi nhất quán; không trộn nhiều ngôn ngữ lập trình ở giai đoạn nhập môn.
- Trọng tâm nền tảng (`core`) giới hạn ở biến cục bộ, hàm, `std::vector`, `std::string`, `struct` và luồng I/O cơ bản; chưa đi vào cấp phát động thủ công (`new`/`delete`), số học con trỏ thô, kế thừa đa hình hay bố cục ABI cấp thấp (thuộc Môn CS-07, CS-08 và CS-23).
- Các chủ đề có liên quan tới thời gian sống vùng nhớ hoặc chuỗi công cụ nhiều tệp (như liên kết đa đơn vị dịch và `std::string_view`) được tách thành tiểu mục mở rộng (`extension`) có ghi rõ điều kiện kiến thức nền, không bắt người mới học thuộc ở vòng đầu.

### Nguồn giáo trình của môn học

- **Learn C++ — Comprehensive C++ Programming Tutorials** (`learncpp`, *primary*): Chapters 0, 1, 2, 3 (§3.1–3.5), 4, 5, 6, 7, 8, 9 (§9.1–9.5), 12 (§12.3–12.6), 13 (§13.7–13.10), 16 (§16.1–16.8), 28 (§28.1–28.6) — URL: https://www.learncpp.com/
- **CS50x: Introduction to Computer Science — Syllabus & Weeks 0–5** (`harvard-cs50x`, *supplementary*): Weeks 1–2 Lecture Notes (Source Code to Executable, Basic Types, Arrays, Strings, Debugging Basics) — URL: https://cs50.harvard.edu/x/syllabus/

### Chương 1 — Chương trình đầu tiên, cấu trúc hàm main và mô hình nhập – xử lý – xuất (`ip-execution-model`)

Chương mở đầu giúp người mới chưa từng lập trình hiểu một chương trình C++ là gì và làm thế nào để biến một tệp văn bản mã nguồn thành một chương trình chạy được trên máy tính. Nội dung đi từ cấu trúc tối thiểu của một chương trình có hàm `main`, cách máy tính thực thi tuần tự từng câu lệnh, cách hiển thị kết quả và nhận dữ liệu từ bàn phím, đến cách đọc thông báo lỗi của trình biên dịch; phần chi tiết về các pha dịch và liên kết đa tệp được đặt ở tiểu mục mở rộng cuối chương.

*Nguồn chương:* `learncpp` (Chapter 0 (§0.4–0.7 Introduction to C++ Development & Compiling) and Chapter 1 (§1.1–1.11 C++ Basics)); `harvard-cs50x` (Week 1 Notes: From Source Code to Machine Code and First Programs)

#### Tiểu mục 1: Khái niệm mã nguồn, biên dịch chương trình đầu tiên và điểm vào hàm main() (`ip-exec-first-program-main` — mức `core`)

Tiểu mục này giới thiệu khái niệm tệp mã nguồn (`.cpp`), vai trò của trình biên dịch trong việc dịch văn bản mã nguồn sang tệp thực thi của máy tính, và cấu trúc khung của một chương trình C++ tối thiểu. Trong môi trường có hệ điều hành (hosted environment), hàm toàn cục `main()` là điểm bắt đầu chuẩn cho luồng logic do lập trình viên viết; chuẩn ngôn ngữ cũng quy định rằng các đối tượng có thời gian lưu trữ tĩnh (static storage duration) ở phạm vi ngoài hàm có thể được khởi tạo trước khi luồng thực thi đi vào câu lệnh đầu tiên của `main()`.

Phạm vi của tiểu mục tập trung vào những thành phần xuất hiện ngay trong chương trình đầu tiên: chỉ thị `#include <iostream>` để sử dụng thư viện nhập/xuất chuẩn, thân hàm `main()` đặt trong cặp ngoặc nhọn `{}`, câu lệnh kết thúc bằng dấu chấm phẩy, chú thích mã nguồn và ý nghĩa của giá trị nguyên trả về từ `return 0;` khi chương trình kết thúc bình thường. Người học chỉ cần nền tảng thao tác tệp và terminal từ Môn CS-01, chưa cần biết cấu trúc tệp nhị phân của hệ điều hành.

> **Nguồn đối chiếu:** `learncpp`: Chapter 0 (§0.4–0.5 Introduction to C++ development and the compiler) & Chapter 1 (§1.1 Statements and the structure of a program, §1.2 Comments)

#### Tiểu mục 2: Mô hình thực thi tuần tự và giao tiếp cơ bản qua std::cout, std::cin (`ip-exec-sequential-statements-io` — mức `core`)

Nội dung trình bày mô hình thực thi tuần tự từ trên xuống dưới của các câu lệnh bên trong một hàm, kết nối trực tiếp với mô hình "Đầu vào (Input) → Xử lý (Process) → Đầu ra (Output)" đã học ở Môn CS-03. Tiểu mục giải thích sự khác biệt giữa biểu thức (tổ hợp tính ra một giá trị) và câu lệnh (bước hành động hoàn chỉnh), đồng thời giới thiệu cách xuất văn bản và số ra màn hình bằng `std::cout` với toán tử `<<` cũng như cách đọc giá trị từ bàn phím vào chương trình bằng `std::cin` với toán tử `>>`.

Trọng tâm cần phân biệt ở chặng đầu là chiều di chuyển dữ liệu của hai toán tử luồng, cách xuống dòng bằng ký tự `'\n'` so với `std::endl`, và việc chương trình dừng chờ người dùng nhập dữ liệu rồi nhấn Enter. Phạm vi dừng ở việc đọc/xuất các giá trị hợp lệ để viết được các chương trình tính toán nhỏ; cơ chế vùng đệm cấp thấp và xử lý khi người dùng nhập sai định dạng được tách sang Chương 6.

> **Nguồn đối chiếu:** `learncpp`: Chapter 1: §1.5 Introduction to iostream: cout, cin, and endl & §1.10 Introduction to expressions

#### Tiểu mục 3: Phân biệt lỗi cú pháp khi biên dịch, cảnh báo của trình biên dịch và lỗi khi chương trình chạy (`ip-exec-compile-vs-runtime-errors` — mức `core`)

Người mới học lập trình thường bối rối trước các thông báo dài từ công cụ biên dịch; tiểu mục này dạy cách phân loại và đọc hiểu hai nhóm lỗi cơ bản nhất. Lỗi thời điểm biên dịch (compile-time syntax/type error) xảy ra khi mã nguồn vi phạm quy tắc ngữ pháp hoặc kiểu dữ liệu của C++, khiến trình biên dịch từ chối tạo tệp thực thi và chỉ ra số dòng, số cột nơi phát hiện sai lệch. Ngược lại, lỗi thời gian chạy (runtime/logic error) xảy ra khi chương trình đã dịch thành công nhưng tính sai công thức hoặc gặp trạng thái bất hợp lệ trong lúc đang chạy.

Tiểu mục cũng làm rõ vai trò của cảnh báo biên dịch (compiler warnings, bật qua các cờ như `-Wall -Wextra`): dù mã nguồn hợp lệ về mặt cú pháp, cảnh báo chỉ ra các mẫu viết có nguy cơ cao gây lỗi ngầm. Người học nắm được quy trình đọc lỗi từ thông báo đầu tiên trên xuống thay vì sửa mò ở cuối tệp.

> **Nguồn đối chiếu:** `learncpp`: Chapter 0: §0.9 Configuring your compiler: warning and error levels & Chapter 3: §3.1 Syntax and semantic errors

#### Tiểu mục 4: Mở rộng: Bốn pha dịch (Tiền xử lý, Biên dịch, Hợp dịch, Liên kết) và đơn vị dịch (`ip-exec-translation-linking-extension` — mức `extension`)

Ở mức mở rộng cho người học muốn hiểu sâu hơn điều gì diễn ra phía sau lệnh gọi trình biên dịch, tiểu mục này phân tách quy trình dịch thành bốn bước: tiền xử lý (preprocessing — xử lý các chỉ thị `#include` để tạo đơn vị dịch), biên dịch (compilation — kiểm tra kiểu và dịch sang hợp ngữ), hợp dịch (assembly — tạo tệp mã đối tượng `.o`/`.obj`) và liên kết (linking — ghép các tệp đối tượng cùng thư viện chuẩn thành tệp thực thi).

Sự phân biệt giữa pha biên dịch và pha liên kết giúp giải thích vì sao lỗi viết sai tên hàm hoặc sai kiểu tham số bị báo ngay khi dịch từng tệp, trong khi lỗi khai báo hàm mà quên viết phần định nghĩa lại chỉ xuất hiện ở bước liên kết (`undefined reference`). Kiến thức này là cầu nối tự nhiên sang Chương 4 khi tách chương trình thành nhiều tệp `.h`/`.cpp` và sang Môn CS-06 (Git và hệ thống build).

> **Nguồn đối chiếu:** `learncpp`: Chapter 0: §0.5 Introduction to the compiler, linker, and libraries | `harvard-cs50x`: Week 1 Lecture Notes: Compiling (Preprocessing, Compiling, Assembling, Linking)

### Chương 2 — Biến, kiểu dữ liệu cơ sở, biểu thức và phép toán (`ip-types-expressions`)

Sau khi biết cấu trúc chương trình, người học cần công cụ để lưu trữ và biến đổi dữ liệu. Chương này trình bày khái niệm biến, sự khác nhau giữa khởi tạo và gán giá trị, các kiểu dữ liệu cơ sở của C++ (số nguyên, số thực dấu chấm động, giá trị chân lý Boolean, ký tự và hằng số), cùng các phép toán số học, so sánh và chuyển đổi kiểu tường minh.

*Nguồn chương:* `learncpp` (Chapter 1 (§1.3–1.6 Variables and Initialization), Chapter 4 (§4.1–4.12 Fundamental Data Types), and Chapter 6 (§6.1–6.7 Operators))

#### Tiểu mục 1: Biến, định danh, khởi tạo (Initialization), phép gán (Assignment) và biến chưa khởi tạo (`ip-types-variables-initialization` — mức `core`)

Tiểu mục này giải thích cách chương trình đặt tên cho một vùng lưu trữ dữ liệu thông qua biến (variable) và quy tắc đặt tên định danh hợp lệ. Nội dung phân biệt rõ hai thao tác dễ nhầm đối với người mới: khởi tạo (cung cấp giá trị ban đầu ngay khi biến được tạo ra, ưu tiên cú pháp khởi tạo ngoặc nhọn `{}` để trình biên dịch cảnh báo nếu có ép kiểu làm hẹp miền giá trị) và phép gán (dùng toán tử `=` để thay đổi giá trị của một biến đã tồn tại).

Điểm giới hạn quan trọng cần nắm ngay từ đầu là biến cục bộ kiểu cơ sở trong C++ không tự động nhận giá trị `0` nếu lập trình viên khai báo mà bỏ trống phần khởi tạo. Việc đọc giá trị từ một biến chưa khởi tạo sẽ dẫn tới hành vi không xác định (Undefined Behavior — UB), làm kết quả chương trình không thể đoán trước; do đó nguyên tắc xuyên suốt môn học là luôn khởi tạo biến ngay tại điểm khai báo.

> **Nguồn đối chiếu:** `learncpp`: Chapter 1: §1.3 Objects and variables, §1.4 Variable assignment and initialization, §1.6 Uninitialized variables and undefined behavior

#### Tiểu mục 2: Kiểu số nguyên, giới hạn miền giá trị hữu hạn và hiện tượng tràn số (`ip-types-integers-range-overflow` — mức `core`)

Nội dung giới thiệu cách C++ biểu diễn số nguyên qua các kiểu có kích thước hữu hạn trong bộ nhớ (như `int`, `long long` và các kiểu độ rộng cố định trong `<cstdint>`), đồng thời phân biệt số nguyên có dấu (`signed`, lưu được cả số âm, số 0 và số dương) với số nguyên không dấu (`unsigned`, chỉ lưu số không âm). Vì mỗi kiểu chỉ dùng một số lượng bit hữu hạn, miền giá trị biểu diễn được luôn có cận dưới và cận trên cố định.

Tiểu mục làm rõ hệ quả khi kết quả phép tính vượt ra ngoài miền biểu diễn: tràn số nguyên có dấu là hành vi không xác định trong C++, còn số nguyên không dấu sẽ cuộn vòng theo modulo $2^k$ (khiến phép trừ như `0u - 1u` biến thành một số dương rất lớn). Từ đó, chương trình giải thích vì sao người mới nên ưu tiên dùng số nguyên có dấu cho các phép tính số học và biến đếm thông thường, cũng như thận trọng khi so sánh giữa kiểu có dấu và kiểu `std::size_t` không dấu.

> **Nguồn đối chiếu:** `learncpp`: Chapter 4: §4.3 Object sizes and the sizeof operator, §4.4 Signed integers, §4.5 Unsigned integers, and why to avoid them, §4.6 Fixed-width integers and size_t

#### Tiểu mục 3: Kiểu số thực dấu chấm động (float, double), kiểu bool, ký tự char và hằng số (`ip-types-floating-bool-char-const` — mức `core`)

Tiểu mục trình bày ba nhóm kiểu cơ sở còn lại cùng khái niệm hằng số. Với số thực dấu chấm động (`float`, `double`), nội dung giải thích ý nghĩa của độ chính xác hữu hạn: trên hầu hết các nền tảng hiện đại (nơi trình biên dịch hiện thực theo chuẩn IEEE 754 / IEC 60559, kiểm tra được qua `std::numeric_limits<double>::is_iec559`, dù chuẩn C++ không bắt buộc mọi kiến trúc phần cứng đều phải dùng định dạng IEEE 754), các phân số thập phân như `0.1` được lưu dưới dạng xấp xỉ nhị phân hữu hạn, nên việc so sánh hai số thực sau tính toán cần xét độ lệch tuyệt đối/tương đối thay vì dùng `==` trực tiếp.

Tiếp theo, tiểu mục giới thiệu kiểu `bool` (`true`/`false`) cho điều kiện logic, kiểu `char` cho ký tự đơn (phân biệt ký tự chữ số `'5'` với giá trị số `5` và các ký tự thoát như `'\n'`, `'\t'`), cùng cách dùng `const` và `constexpr` để đặt tên cho các hằng số không được phép sửa đổi sau khi khởi tạo. Chi tiết biểu diễn bit dấu–mũ–định trị ở mức phần cứng của IEEE 754 được để dành cho Môn CS-22 và CS-23.

> **Nguồn đối chiếu:** `learncpp`: Chapter 4 (§4.8 Floating point numbers, §4.9 Boolean values, §4.11 Chars) and Chapter 5 (§5.1 Constant variables, §5.5 Constant expressions and constexpr)

#### Tiểu mục 4: Phép toán số học, chia nguyên vs chia thực, độ ưu tiên toán tử và ép kiểu tường minh (static_cast) (`ip-types-arithmetic-casts` — mức `core`)

Nội dung bao quát các toán tử số học (`+`, `-`, `*`, `/`, `%`), toán tử quan hệ (`<`, `<=`, `>`, `>=`, `==`, `!=`) và quy tắc độ ưu tiên toán tử trong biểu thức phức hợp. Điểm trọng tâm dễ gây lỗi nhất cho người mới là sự khác biệt giữa phép chia hai số nguyên (`7 / 2` cho thương nguyên `3`, bỏ phần dư) và phép chia có ít nhất một toán hạng số thực (`7.0 / 2` cho `3.5`), đi kèm toán tử lấy phần dư `a % b` (yêu cầu số chia $b \neq 0$).

Tiểu mục cũng giải thích quy tắc chuyển đổi kiểu ngầm định khi biểu thức pha trộn nhiều kiểu số, cách sử dụng `static_cast<T>(bieu_thuc)` để chủ động chuyển đổi kiểu một cách an toàn và rõ ý đồ (chẳng hạn chuyển tổng nguyên sang `double` trước khi tính trung bình cộng), đồng thời lưu ý không vừa đọc vừa biến đổi cùng một biến bằng `++`/`--` nhiều lần trong một biểu thức đơn lẻ.

> **Nguồn đối chiếu:** `learncpp`: Chapter 6 (§6.1 Operator precedence and associativity, §6.2 Arithmetic operators, §6.4 Increment/decrement operators) & Chapter 10 (§10.6 Explicit type conversion and static_cast)

### Chương 3 — Cấu trúc điều khiển rẽ nhánh, vòng lặp và mô hình hóa bài toán nhỏ (`ip-control-flow`)

Chương này trang bị các cấu trúc điều khiển luồng thực thi giúp chương trình ra quyết định dựa trên điều kiện dữ liệu và tự động lặp lại công việc. Nội dung đi từ câu lệnh điều kiện `if`/`else`, `switch` và lượng giá đoản mạch của toán tử logic, sang vòng lặp `while`, `for`, `do-while`, cách dùng biến đếm và biến tích lũy, cách xác định điều kiện dừng và tránh lỗi lệch một bước (off-by-one) khi giải các bài toán nhỏ.

*Nguồn chương:* `learncpp` (Chapter 6 (§6.8 Logical operators) and Chapter 8 (§8.1–8.11 Control Flow: Conditionals, Switch, Loops, Break and Continue))

#### Tiểu mục 1: Rẽ nhánh có điều kiện (if/else, switch), phân chia trường hợp biên và lượng giá đoản mạch (`ip-cf-conditionals-short-circuit` — mức `core`)

Tiểu mục trình bày cách dùng cấu trúc `if`, `else if`, `else` để chia miền giá trị đầu vào thành các nhánh xử lý tương ứng, cùng cấu trúc `switch` khi phân nhánh theo các giá trị nguyên rời rạc (kèm vai trò của `break` để tránh rơi xuyên qua nhánh tiếp theo — `fallthrough`). Trọng tâm rèn luyện là cách sắp xếp thứ tự điều kiện sao cho các trường hợp biên (như giá trị bằng 0, số âm hoặc đúng bằng ngưỡng) được xử lý chính xác, không bị nhánh rộng hơn đứng trước che khuất.

Nội dung tiếp theo giải thích các toán tử kết hợp điều kiện `!` (NOT), `&&` (AND), `||` (OR) và cơ chế lượng giá đoản mạch (short-circuit evaluation): với `A && B`, nếu `A` đã sai thì `B` không được tính; với `A || B`, nếu `A` đã đúng thì `B` không được tính. Người học nắm được cách dùng tính chất này để đặt điều kiện bảo vệ ở vế trái (như kiểm tra mẫu số khác `0` hoặc chỉ số nằm trong phạm vi) trước khi thực hiện phép tính ở vế phải.

> **Nguồn đối chiếu:** `learncpp`: Chapter 6 (§6.8 Logical operators and short circuit evaluation) & Chapter 8 (§8.2 If statements and blocks, §8.5 Switch statement basics, §8.6 Switch fallthrough)

#### Tiểu mục 2: Vòng lặp while, for, do-while và điều kiện dừng hữu hạn (`ip-cf-loops-termination` — mức `core`)

Tiểu mục giới thiệu ba cấu trúc lặp chuẩn của C++ và tiêu chí chọn cấu trúc phù hợp với bài toán: vòng lặp `for (khởi_tạo; điều_kiện; cập_nhật)` khi biết rõ miền chạy hoặc số lần lặp; vòng lặp `while (điều_kiện)` khi số bước lặp phụ thuộc vào trạng thái biến đổi động (như đọc dữ liệu cho tới hết hoặc chia liên tiếp); và `do-while` khi thân vòng lặp cần chạy ít nhất một lần trước khi kiểm tra điều kiện.

Để chương trình không bị treo do lặp vô hạn, người học cần xác định rõ biến trạng thái nào thay đổi trong thân vòng lặp và vì sao mỗi bước lặp lại đưa biến đó tiến gần hơn tới điều kiện dừng. Tiểu mục cũng chỉ ra các lỗi điều kiện dừng phổ biến ở người mới như quên cập nhật biến lặp, viết nhầm dấu chấm phẩy ngay sau `while (...)`, hoặc dùng biến không dấu đếm lùi với điều kiện `>= 0`.

> **Nguồn đối chiếu:** `learncpp`: Chapter 8: §8.8 Introduction to loops and while statements, §8.9 Do while statements, §8.10 For statements

#### Tiểu mục 3: Mẫu biến đếm, biến tích lũy, kiểm tra biên lệch một đơn vị (Off-by-one) và trực giác bất biến vòng lặp (`ip-cf-loop-invariants-accumulators` — mức `core`)

Nội dung đi vào cách giải các bài toán cơ bản bằng vòng lặp thông qua các mẫu biến trạng thái điển hình: biến đếm số lần xuất hiện, biến tích lũy tổng hoặc tích, và biến theo dõi giá trị lớn nhất/nhỏ nhất. Tiểu mục giải thích vì sao biến tích lũy tổng cần khởi tạo bằng `0`, biến tích lũy tích khởi tạo bằng `1`, còn bài toán tìm cực trị cần khởi tạo từ phần tử hợp lệ đầu tiên thay vì một hằng số tùy ý.

Để phòng tránh lỗi lệch một đơn vị (off-by-one — lặp thiếu bước cuối hoặc thừa một bước), người học được làm quen với trực giác bất biến vòng lặp (loop invariant): nêu rõ sau $k$ bước lặp thì biến kết quả đang biểu diễn giá trị của phạm vi nào, rồi kiểm tra tại bước đầu tiên ($k = 0$) và bước vừa thoát khỏi vòng lặp. Cách hình thức hóa đầy đủ bất biến bằng quy nạp máy trạng thái sẽ được phát triển sâu hơn ở Môn CS-09 (Toán rời rạc).

> **Nguồn đối chiếu:** `learncpp`: Chapter 8: §8.8 While statements (Loop variables and accumulators) & §8.10 For statements (Off-by-one errors)

#### Tiểu mục 4: Vòng lặp lồng nhau, điều khiển dừng sớm (break, continue) và ước lượng số bước lặp (`ip-cf-nested-loops-early-exit` — mức `core`)

Tiểu mục này mở rộng sang cấu trúc vòng lặp đặt bên trong một vòng lặp khác (nested loops) để giải các bài toán duyệt bảng hai chiều hoặc xét các cặp phần tử, đồng thời giải thích cơ chế của câu lệnh `break` (thoát ngay khỏi vòng lặp trong cùng hiện hành) và `continue` (bỏ qua phần còn lại của lượt lặp hiện tại để sang lượt kế tiếp).

Thông qua việc đếm tổng số lần thân vòng lặp trong được thực thi khi vòng ngoài chạy $n$ lần và vòng trong chạy $m$ lần (tổng cộng $n \times m$ bước), người học hình thành trực giác đầu tiên về chi phí thời gian tăng theo kích thước dữ liệu đầu vào trước khi học ký hiệu tiệm cận chính thức ở các môn sau.

> **Nguồn đối chiếu:** `learncpp`: Chapter 8: §8.8 Nested loops & §8.11 Break and continue

### Chương 4 — Hàm, truyền tham số, phạm vi biến và ngăn xếp lời gọi cơ bản (`ip-functions-scope`)

Khi chương trình dài hơn vài chục dòng, đặt toàn bộ mã trong `main()` khiến việc đọc hiểu và kiểm tra trở nên rất khó khăn. Chương này trình bày cách chia nhỏ bài toán thành các hàm độc lập có đầu vào (tham số) và đầu ra (giá trị trả về) rõ ràng, sự khác biệt giữa truyền tham số theo giá trị với truyền theo tham chiếu, quy tắc phạm vi khối (block scope) và mô hình ngăn xếp lời gọi hàm cơ bản.

*Nguồn chương:* `learncpp` (Chapter 2 (§2.1–2.12 Functions and Files), Chapter 7 (§7.1–7.5 Scope and Duration), and Chapter 12 (§12.3–12.6 References and Pass by Reference))

#### Tiểu mục 1: Khái niệm hàm, tham số, giá trị trả về và tách khai báo với định nghĩa hàm (`ip-fn-declaration-definition-contracts` — mức `core`)

Tiểu mục trình bày cách đóng gói một công việc tính toán thành một hàm có tên, danh sách tham số đầu vào (parameters) và kiểu trả về (return type, hoặc `void` khi hàm không trả về giá trị). Người học nắm được cách gọi hàm, cách câu lệnh `return` gửi kết quả về cho nơi gọi, và lợi ích của việc tách một bài toán phức tạp thành các hàm con có nhiệm vụ đơn nhất, dễ kiểm tra riêng lẻ.

Nội dung cũng phân biệt khai báo hàm (function declaration / prototype — thông báo chữ ký hàm cho trình biên dịch trước khi hàm được gọi) với định nghĩa hàm (function definition — chứa thân hàm thực sự), giúp người học hiểu nguyên tắc tổ chức tệp tiêu đề (`.h`) và tệp mã nguồn (`.cpp`) ở mức cơ sở.

> **Nguồn đối chiếu:** `learncpp`: Chapter 2: §2.1 Introduction to functions, §2.2 Function return values, §2.4 Function parameters and arguments, §2.7 Forward declarations and definitions, §2.11 Header files

#### Tiểu mục 2: Truyền tham số theo giá trị (Pass-by-Value), theo tham chiếu (T&) và tham chiếu hằng (const T&) (`ip-fn-value-vs-reference` — mức `core`)

Tiểu mục giải thích cơ chế truyền tham số mặc định của C++ là truyền theo giá trị (pass-by-value): hàm nhận một bản sao độc lập của đối số, nên việc sửa đổi tham số bên trong hàm không làm thay đổi biến của nơi gọi. Tiếp theo, tiểu mục giới thiệu kiểu tham chiếu (`T&`) như một tên gọi khác (alias) gắn trực tiếp với biến đã có, cho phép hàm cập nhật biến của người gọi khi cần thiết.

Trên cơ sở đó, chương trình làm rõ quy tắc chọn cách truyền tham số: dùng truyền theo giá trị cho các kiểu dữ liệu cơ sở nhỏ (`int`, `double`, `bool`, `char`); dùng tham chiếu hằng (`const T&`) khi truyền các đối tượng lớn như `std::vector` hoặc `std::string` mà hàm chỉ cần đọc, vừa tránh phải sao chép toàn bộ dữ liệu vừa được trình biên dịch bảo đảm không làm thay đổi đối tượng gốc.

> **Nguồn đối chiếu:** `learncpp`: Chapter 12: §12.3 Lvalue references, §12.4 Lvalue references to const, §12.5 Pass by lvalue reference, §12.6 Pass by const lvalue reference

#### Tiểu mục 3: Phạm vi khối (Block Scope), thời gian sống tự động của biến cục bộ và hiện tượng che khuất tên (`ip-fn-scope-lifetime-shadowing` — mức `core`)

Tiểu mục phân biệt hai thuộc tính cốt lõi của biến: phạm vi tên gọi (scope — vùng mã nguồn trong cặp ngoặc `{}` nơi tên biến có thể được truy cập) và thời gian sống (lifetime — khoảng thời gian biến tồn tại trong bộ nhớ khi chương trình chạy). Các biến cục bộ khai báo trong hàm hoặc trong khối lệnh có thời gian sống tự động: được tạo ra khi luồng thực thi đi vào điểm khai báo và tự động bị hủy khi thoát khỏi khối `{}` chứa nó.

Nội dung cũng giải thích hiện tượng che khuất tên (variable shadowing) khi khai báo một biến mới ở khối bên trong trùng tên với biến ở khối bao ngoài, gây nhầm lẫn về đối tượng đang được cập nhật, đồng thời nêu lý do vì sao nên hạn chế biến toàn cục có thể thay đổi tự do để tránh các tác dụng phụ khó lường giữa các hàm.

> **Nguồn đối chiếu:** `learncpp`: Chapter 2 (§2.5 Introduction to local scope) & Chapter 7 (§7.1 Compound statements/blocks, §7.3 Local variables, §7.5 Variable shadowing)

#### Tiểu mục 4: Mô hình ngăn xếp lời gọi (Call Stack) và giới thiệu hàm đệ quy cơ sở (`ip-fn-call-stack-activation` — mức `core`)

Nội dung cung cấp mô hình trực quan về ngăn xếp lời gọi (call stack): mỗi khi một hàm được gọi, chương trình tạo một khung làm việc riêng (stack frame) chứa các tham số và biến cục bộ của lần gọi đó; khi hàm kết thúc, khung này được dọn bỏ và chương trình quay lại đúng vị trí vừa gọi ở hàm trước. Mô hình này giúp người học hiểu rõ vì sao biến cục bộ của các hàm khác nhau hoàn toàn độc lập với nhau.

Từ mô hình khung ngăn xếp, tiểu mục giới thiệu khái niệm hàm tự gọi lại chính nó (đệ quy — recursion) trên bài toán nhỏ, nhấn mạnh điều kiện bắt buộc phải có trường hợp dừng cơ sở (base case) và bước thu nhỏ đầu vào, cũng như hiện tượng tràn ngăn xếp (stack overflow) nếu đệ quy không dừng. Việc thiết kế đệ quy sâu và phân tích truy hồi sẽ được học kỹ ở Môn CS-09 và CS-16.

> **Nguồn đối chiếu:** `learncpp`: Chapter 3 (§3.7 Using an integrated debugger: The call stack) & Chapter 20 (§20.2 The stack and the heap, §20.3 Recursion) | `harvard-cs50x`: Week 2 & Week 4 Notes: Call Stack and Stack Frames

### Chương 5 — Mảng động std::vector, chuỗi std::string và kiểu bản ghi struct (`ip-sequences-strings`)

Chương này mở rộng khả năng biểu diễn dữ liệu từ các biến đơn lẻ sang danh sách nhiều phần tử cùng kiểu với `std::vector`, văn bản với `std::string` và cấu trúc gom nhóm nhiều thuộc tính liên quan với `struct`. Trọng tâm của chương là cách đánh chỉ số từ `0`, kiểm tra biên hợp lệ, các mẫu duyệt – tìm kiếm – thống kê trên dãy, và cách tổ chức bảng dữ liệu bằng vector các bản ghi `struct`.

*Nguồn chương:* `learncpp` (Chapter 5 (§5.7–5.9 std::string and std::string_view), Chapter 13 (§13.7–13.10 Structs), and Chapter 16 (§16.1–16.8 Dynamic arrays: std::vector))

#### Tiểu mục 1: Lưu trữ dãy phần tử với std::vector, đánh chỉ số 0-based và an toàn biên truy cập (`ip-seq-vector-contiguous-indexing` — mức `core`)

Tiểu mục giới thiệu `std::vector<T>` như cấu trúc mảng động chuẩn để lưu trữ một dãy phần tử cùng kiểu nằm liên tiếp nhau. Người học nắm được cách khởi tạo vector, thêm phần tử vào cuối bằng `push_back`, kiểm tra số lượng phần tử hiện có bằng `size()`, kiểm tra rỗng bằng `empty()`, và quy tắc đánh chỉ số bắt đầu từ `0` đến `size() - 1`.

Điểm giới hạn quan trọng cần nắm vững là điều kiện hợp lệ của chỉ số: một vector rỗng không có phần tử `v[0]`, và toán tử `v[i]` không tự động kiểm tra biên nên việc truy cập chỉ số âm hoặc $\ge \text{size}()$ sẽ gây hành vi không xác định (vượt biên mảng). Tiểu mục đối chiếu `v[i]` với phương thức `v.at(i)` có kiểm tra biên để người học biết cách phát hiện sớm lỗi chỉ số.

> **Nguồn đối chiếu:** `learncpp`: Chapter 16: §16.1 Introduction to containers and arrays, §16.2 Introduction to std::vector and list constructors, §16.3 std::vector and the unsigned length and subscript problem

#### Tiểu mục 2: Các mẫu bài toán cơ sở trên dãy: Duyệt tuần tự, Tìm kiếm tuyến tính, Lọc và Cực trị (`ip-seq-traversal-linear-patterns` — mức `core`)

Nội dung hệ thống hóa các mẫu thuật toán cơ sở trên mảng một chiều mà người học sẽ gặp xuyên suốt các môn sau: duyệt qua mọi phần tử bằng vòng lặp theo chỉ số hoặc vòng lặp theo phạm vi (`for (const auto& x : v)`); tính tổng, trung bình và đếm số phần tử thỏa điều kiện; tìm vị trí xuất hiện đầu tiên của một giá trị (tìm kiếm tuyến tính); tìm giá trị lớn nhất/nhỏ nhất; và lọc hoặc biến đổi các phần tử sang một vector kết quả mới.

Tiểu mục đặc biệt nhấn mạnh việc kiểm tra các trường hợp biên trước khi xử lý dãy (dãy rỗng, dãy có đúng 1 phần tử, dãy có mọi phần tử bằng nhau) và cách giữ chỉ số lân cận `i + 1` hoặc `i - 1` luôn nằm trong miền `[0, n - 1]` khi so sánh hai phần tử kề nhau.

> **Nguồn đối chiếu:** `learncpp`: Chapter 16: §16.4 Passing std::vector, §16.6 Arrays and loops, §16.8 Range-based for loops (for-each)

#### Tiểu mục 3: Xử lý chuỗi văn bản với std::string và gom nhóm dữ liệu bản ghi bằng struct (`ip-seq-strings-structs` — mức `core`)

Phần đầu của tiểu mục trình bày lớp `std::string` để lưu trữ và thao tác với chuỗi ký tự: lấy độ dài chuỗi, truy cập từng ký tự, nối chuỗi, so sánh hai chuỗi theo thứ tự từ điển và tìm kiếm chuỗi con, đồng thời giải thích vì sao `std::string` an toàn và tiện lợi hơn mảng ký tự kết thúc bằng byte `'\0'` kiểu C.

Phần thứ hai giới thiệu từ khóa `struct` để định nghĩa một kiểu dữ liệu bản ghi mới gom nhiều trường dữ liệu liên quan (ví dụ thông tin một mặt hàng hoặc một sinh viên gồm tên kiểu `std::string`, mã số kiểu `int` và điểm kiểu `double`). Kết hợp `std::vector<Record>` với các hàm nhận `const Record&`, người học có thể biểu diễn và xử lý các bảng dữ liệu có cấu trúc hoàn chỉnh.

> **Nguồn đối chiếu:** `learncpp`: Chapter 5 (§5.7 Introduction to std::string) and Chapter 13 (§13.7 Introduction to structs, members, and member selection, §13.8 Struct aggregate initialization, §13.10 Passing and returning structs)

#### Tiểu mục 4: Mở rộng: Góc nhìn chuỗi không sở hữu (std::string_view) và lưu ý về thời gian sống (`ip-seq-string-view-extension` — mức `extension`)

Ở mức mở rộng sau khi đã nắm vững tham chiếu hằng `const std::string&` và thời gian sống của biến cục bộ, tiểu mục này giới thiệu `std::string_view` (C++17) như một đối tượng nhẹ dùng để đọc một dãy ký tự liên tiếp sẵn có mà không sở hữu vùng nhớ đó. Trong khi truyền `std::string` theo giá trị luôn tạo một đối tượng chuỗi độc lập (có thể dùng vùng đệm chuỗi ngắn nội bộ — Small String Optimization cho chuỗi ngắn hoặc cấp phát vùng nhớ động cho chuỗi dài), `std::string_view` tránh được việc tạo đối tượng `std::string` tạm khi đối số truyền vào là hằng chuỗi `"..."` hoặc một lát cắt chuỗi.

Điểm giới hạn bắt buộc khi dùng `std::string_view` là tính phụ thuộc vào thời gian sống của chuỗi gốc: vì `std::string_view` chỉ giữ tham chiếu tới vùng ký tự bên dưới, nếu chuỗi gốc bị hủy hoặc bị sửa đổi cấp phát lại, việc tiếp tục đọc qua `std::string_view` sẽ dẫn tới lỗi truy cập vùng nhớ đã giải phóng (dangling view). Chủ đề này kết nối trực tiếp với mô hình thời gian sống và con trỏ ở Môn CS-07.

> **Nguồn đối chiếu:** `learncpp`: Chapter 5: §5.8 Introduction to std::string_view & §5.9 std::string_view (part 2 — ownership and lifetime issues)

### Chương 6 — Luồng nhập/xuất tệp, xử lý đầu vào lỗi và chẩn đoán lỗi cơ bản (`ip-io-error-handling`)

Chương cuối của môn nhập môn hướng dẫn cách làm việc với dữ liệu thực tế từ bàn phím và tệp văn bản, nơi dữ liệu có thể chứa khoảng trắng, kéo dài nhiều dòng hoặc bị nhập sai định dạng. Đồng thời, chương trang bị quy trình kiểm tra dữ liệu đầu vào, cách tách hàm tính toán khỏi lệnh nhập/xuất để tự kiểm thử, và cách lần vết trạng thái chương trình để tìm lỗi trước khi học chuyên sâu về thiết kế và trình gỡ lỗi ở Môn CS-05.

*Nguồn chương:* `learncpp` (Chapter 3 (§3.1–3.5 Basic Debugging), Chapter 9 (§9.1–9.5 Error Detection, Testing, and Invalid Input), and Chapter 28 (§28.1–28.6 I/O Streams and File I/O))

#### Tiểu mục 1: Đọc dữ liệu theo từ (>>), đọc nguyên dòng (std::getline) và kiểm tra trạng thái luồng (`ip-io-token-vs-line-streams` — mức `core`)

Tiểu mục làm rõ sự khác biệt giữa hai cách đọc dữ liệu văn bản trong C++: toán tử trích xuất `>>` bỏ qua khoảng trắng dẫn đầu và dừng lại ngay khi gặp khoảng trắng kế tiếp, trong khi `std::getline(stream, str)` đọc trọn vẹn cả dòng bao gồm dấu cách cho tới ký tự xuống dòng `'\n'`. Khi chuyển từ phép đọc `>>` sang `std::getline`, bộ đệm thường còn sót lại ký tự `'\n'` của lần nhập trước: nếu muốn bỏ qua mọi khoảng trắng dẫn đầu để đọc ngay dòng có nội dung tiếp theo thì có thể dùng bộ điều chỉnh `std::ws` (`std::getline(std::cin >> std::ws, str)`), nhưng cần lưu ý `std::ws` cũng sẽ ăn mất các dấu cách thụt đầu dòng và bỏ qua luôn cả những dòng trống có chủ đích; nếu bài toán yêu cầu giữ nguyên khoảng trắng đầu dòng hoặc nhận biết dòng rỗng thì phải loại bỏ riêng phần còn lại của dòng trước (chẳng hạn bằng `ignore`) thay vì dùng `std::ws`.

Nội dung tiếp theo giải thích cách kiểm tra một phép đọc có thành công hay không bằng cách đặt trực tiếp biểu thức đọc vào điều kiện (`if (std::cin >> x)` hoặc `while (std::cin >> x)`), cách nhận biết trạng thái kết thúc dữ liệu (EOF) và cách khôi phục luồng bằng `clear()` kết hợp `ignore()` khi người dùng nhập ký tự không khớp với kiểu số mong đợi.

> **Nguồn đối chiếu:** `learncpp`: Chapter 5 (§5.7 std::getline and std::ws), Chapter 9 (§9.5 std::cin and handling invalid input), and Chapter 28 (§28.5 Stream states and input validation)

#### Tiểu mục 2: Đọc/ghi tệp văn bản với std::ifstream, std::ofstream và xử lý chuỗi bằng std::stringstream (`ip-io-files-stringstreams` — mức `core`)

Tiểu mục mở rộng mô hình luồng sang tệp lưu trữ trên đĩa thông qua thư viện `<fstream>`: sử dụng `std::ifstream` để đọc dữ liệu từ tệp và `std::ofstream` để ghi kết quả ra tệp. Người học nắm được cách kiểm tra tệp có mở thành công hay không trước khi đọc/ghi, cũng như cơ chế tệp tự động được đóng lại an toàn khi biến luồng đi ra khỏi phạm vi hàm.

Bên cạnh luồng tệp, tiểu mục giới thiệu `<sstream>` (`std::istringstream` và `std::ostringstream`) cho phép coi một chuỗi `std::string` trong bộ nhớ như một luồng nhập/xuất, rất hữu ích khi cần tách các trường dữ liệu trên một dòng văn bản đã đọc bằng `std::getline` hoặc định dạng dữ liệu thành chuỗi.

> **Nguồn đối chiếu:** `learncpp`: Chapter 28: §28.4 Stream classes for strings & §28.6 Basic file I/O

#### Tiểu mục 3: Kiểm tra miền hợp lệ của đầu vào và tách hàm tính toán khỏi giao diện nhập/xuất (`ip-io-separation-and-contracts` — mức `core`)

Ngay cả khi đọc đúng kiểu dữ liệu (ví dụ đọc thành công một số nguyên `int`), giá trị đó vẫn có thể vi phạm miền hợp lệ của bài toán (như số lượng phần tử âm, mẫu số bằng `0`, hoặc tháng ngoài miền `1..12`). Tiểu mục này giới thiệu khái niệm tiền điều kiện (preconditions) của hàm và cách kiểm tra, từ chối sớm các đầu vào bất hợp lệ trước khi thực hiện phép tính.

Đồng thời, tiểu mục hướng dẫn nguyên tắc tổ chức chương trình: tách phần đọc/in dữ liệu (`std::cin`/`std::cout`) ra khỏi các hàm tính toán cốt lõi (hàm nhận dữ liệu qua tham số và trả kết quả qua `return`), giúp hàm tính toán có thể được gọi lại nhiều lần với các bộ dữ liệu kiểm thử khác nhau.

> **Nguồn đối chiếu:** `learncpp`: Chapter 9: §9.1 Introduction to testing your code & §9.4 Detecting and handling errors

#### Tiểu mục 4: Quy trình tìm lỗi (Debugging) cơ bản: Tái hiện lỗi, lần vết trạng thái và chuẩn bị cho Debugger (`ip-io-basic-debugging-tracing` — mức `core`)

Khi chương trình chạy ra kết quả sai với dự kiến, người mới thường xóa sửa ngẫu nhiên nhiều dòng mã cùng lúc. Tiểu mục cuối của môn nhập môn thiết lập quy trình chẩn đoán lỗi có trật tự: xác định bộ đầu vào nhỏ nhất làm lộ lỗi, dự đoán giá trị của các biến qua từng bước thực thi (chạy tay / trace table), và kiểm chứng xem tại dòng lệnh nào trạng thái thực tế bắt đầu lệch khỏi trạng thái dự đoán.

Người học nắm được cách quan sát trạng thái biến tại các điểm chốt và làm quen với khái niệm điểm dừng (breakpoint) cùng chạy từng bước (step) trong trình gỡ lỗi tích hợp, tạo cầu nối trực tiếp sang Môn CS-05 (Thiết kế chương trình và debug) nơi kỹ thuật kiểm thử và sử dụng debugger được rèn luyện toàn diện.

> **Nguồn đối chiếu:** `learncpp`: Chapter 3: §3.2 The debugging process, §3.3 A strategy for debugging, §3.4 Basic debugging tactics

---

## CS-09: Toán rời rạc và lập luận cho CS (`discrete-math`)

- **Thuộc khối:** Khối II — Lập trình và toán nền CS
- **Phân loại:** `core`
- **Điều kiện tiên quyết:**
  - `math-bridge` (*required*): Cần nắm vững biến số, phương trình đa thức, số phức cơ sở, hàm số, lũy thừa, logarit và ký hiệu tổng cơ bản trước khi bước vào chứng minh toán học, tổ hợp và hệ thức đệ quy.
  - `computational-thinking` (*recommended*): Khái niệm trạng thái, bước chuyển trạng thái và điều kiện dừng giúp gắn kết trực tiếp logic và quy nạp với mô hình máy trạng thái.
  - `single-variable-calculus` (*recommended*): Toàn bộ phần cốt lõi (Chương 1–7, 9–10 và các tiểu mục tổng đại số/ký hiệu tiệm cận của Chương 8) chỉ cần CS-02; riêng tiểu mục mở rộng về phương pháp kẹp tích phân và xấp xỉ Stirling ở Chương 8 cần khái niệm tích phân xác định của CS-11.

### Tổng quan môn học

Môn học xây dựng nền tảng ngôn ngữ toán học chính xác và năng lực chứng minh chặt chẽ cho toàn bộ Khoa học Máy tính. Khác với giải tích nghiên cứu các đại lượng biến thiên liên tục, Toán rời rạc nghiên cứu các cấu trúc hữu hạn hoặc đếm được—nơi từng bước suy luận, từng trạng thái của chương trình và từng cấu hình dữ liệu đều được định nghĩa tường minh. Nội dung đi tuần tự từ tập hợp, hàm và quan hệ tương đương; logic mệnh đề, đại số Boolean và logic vị từ đa lượng từ; các phương pháp chứng minh trực tiếp, phản đảo, phản chứng, nguyên lý thứ tự tốt và quy nạp toán học; đến định nghĩa đệ quy, quy nạp cấu trúc, bất biến máy trạng thái, số học modulo và lý thuyết đồ thị, cây, DAG.

Ở nửa sau của môn học, các công cụ định lượng cốt lõi dùng để đếm và phân tích thuật toán được trình bày có hệ thống: nguyên lý đếm bằng song ánh, bao hàm–loại trừ, chuồng bồ câu; biến đổi tổng hữu hạn, cận sơ cấp cho số điều hòa, định nghĩa lượng từ của ký hiệu tiệm cận ($O, \Omega, \Theta, o, \omega$), cùng tiểu mục mở rộng dùng cận kẹp tích phân và công thức Stirling (khi có nền Giải tích CS-11). Đặc biệt, môn học dành hai chương hoàn chỉnh cho Hệ thức đệ quy (từ mô hình hóa bài toán và điều kiện đầu, khai triển lặp, hệ tuyến tính thuần nhất hệ số hằng, phương trình đặc trưng với nghiệm đơn phân biệt, nghiệm bội và nghiệm phức liên hợp, hệ không thuần nhất/nghiệm riêng, đến giới hạn áp dụng và cầu nối sang truy hồi chia để trị) và Hàm sinh (chuỗi lũy thừa hình thức, phép toán đại số, tích chập và giải hệ thức đệ quy bằng phân thức tối giản).

### Giới hạn học thuật (`boundaries`)

- Phần cốt lõi (core) của môn học chỉ yêu cầu Toán nền CS-02; riêng tiểu mục phương pháp kẹp tổng bằng tích phân và công thức Stirling ở Chương 8 được gắn nhãn mở rộng (extension) và khai báo rõ tiên quyết Giải tích một biến (CS-11).
- Phương trình đặc trưng chỉ áp dụng cho hệ thức đệ quy tuyến tính hệ số hằng bước lùi cố định; không áp dụng trực tiếp cho hệ thức phi tuyến hoặc truy hồi chia để trị dạng T(n) = aT(n/b) + f(n) (được giải bằng cây đệ quy, Định lý Thầy và Akra–Bazzi ở Môn CS-16).
- Chuỗi lũy thừa trong chương Hàm sinh được xử lý dưới góc độ chuỗi lũy thừa hình thức (formal power series); việc xét bán kính hội tụ giải tích thuộc phạm vi Môn CS-11 (Giải tích một biến).
- Lý thuyết xác suất rời rạc và liên tục được tách riêng thành Môn CS-13 (Xác suất) và Môn CS-14 (Thống kê suy luận) để bảo đảm độ sâu hoàn chỉnh thay vì ghép sơ lược vào cuối môn Toán rời rạc.

### Nguồn giáo trình của môn học

- **Mathematics for Computer Science (MIT 6.042J Spring 2015)** (`mit-6042j-2015`, *primary*): Chapters 1–6, 8–9, 11, 13–15, 21 (Mathematics for Computer Science Textbook & OCW Readings) — URL: https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/
- **Discrete Mathematics: An Open Introduction** (`dmoi-3e`, *primary*): Chapter 2: Sequences (§2.1 Describing Sequences & §2.4 Solving Recurrence Relations) — URL: https://discrete.openmathbooks.org/dmoi3/
- **Algorithms** (`erickson-algorithms`, *supplementary*): Chapter 1: Recursion (§1.4–1.7 Divide-and-Conquer Recurrence Scope Boundary) — URL: https://jeffe.cs.illinois.edu/teaching/algorithms/

### Chương 1 — Tập hợp, dãy, hàm và quan hệ hai ngôi (`dm-sets-functions-relations`)

Chương mở đầu thiết lập bộ từ vựng cấu trúc cho toàn bộ Toán rời rạc và Khoa học Máy tính: cách gom nhóm các đối tượng phân biệt không thứ tự thành tập hợp, cách biểu diễn các phần tử có thứ tự và có lặp bằng dãy hay bộ (tuples), cách mô hình hóa phép biến đổi xác định bằng hàm số, và cách biểu diễn mối liên hệ tổng quát giữa các phần tử bằng quan hệ hai ngôi. Người học nắm được điều kiện để một hàm khả nghịch thông qua tính đơn ánh và toàn ánh, cũng như cách quan hệ tương đương phân hoạch một tập hợp thành các lớp tương đương rời nhau.

*Nguồn chương:* `mit-6042j-2015` (Chapter 4: Mathematical Data Types (§4.1 Sets, §4.2 Sequences, §4.3 Functions, §4.4 Binary Relations) & Chapter 9 (§9.5–9.10 Equivalence and Partial Orders))

#### Tiểu mục 1: Tập hợp, phép toán tập hợp, tập lũy thừa (Power Set) và tích Descartes (`dm-sfr-sets-power-cartesian` — mức `core`)

Một tập hợp (set) là một bộ sưu tập không tính thứ tự và không tính lặp của các đối tượng toán học được xác định rõ ràng gọi là phần tử; hai tập hợp $A$ và $B$ bằng nhau khi và chỉ khi chúng có cùng các phần tử ($\forall x, x \in A \iff x \in B$). Từ quan hệ bao hàm tập con ($A \subseteq B$), ta xây dựng các phép toán đại số tập hợp gồm hợp ($A \cup B$), giao ($A \cap B$), hiệu ($A \setminus B$), hiệu đối xứng ($A \oplus B$) và phần bù ($\overline{A}$ trên vũ trụ $U$), tuân theo các luật kết hợp, phân phối và luật De Morgan $\overline{A \cup B} = \overline{A} \cap \overline{B}$.

Để mô hình hóa không gian mọi lựa chọn con hoặc các bản ghi dữ liệu có thứ tự, ta định nghĩa hai phép dựng tập hợp cốt lõi. Tập lũy thừa $\mathcal{P}(A)$ là tập hợp chứa tất cả các tập con của $A$; nếu $A$ hữu hạn có $|A| = n$ phần tử thì $|\mathcal{P}(A)| = 2^n$, vì mỗi phần tử của $A$ có hai trạng thái độc lập (thuộc hoặc không thuộc một tập con) — tương ứng trực tiếp với một xâu nhị phân độ dài $n$. Tích Descartes $A \times B = \{(a, b) \mid a \in A, b \in B\}$ tạo ra tập các cặp có thứ tự, mở rộng thành tích $n$-ngôi $A_1 \times \dots \times A_n$ làm nền tảng toán học cho kiểu dữ liệu bản ghi (`struct`) và bảng trong cơ sở dữ liệu quan hệ.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 4: §4.1 Sets and §4.2 Sequences

#### Tiểu mục 2: Hàm số, miền xác định, ảnh, đơn ánh (Injection), toàn ánh (Surjection) và song ánh (Bijection) (`dm-sfr-functions-injections-bijections` — mức `core`)

Một hàm toàn phần $f: A \to B$ là một quy tắc gán mỗi phần tử $a$ thuộc miền xác định (domain) $A$ với đúng một phần tử duy nhất $f(a)$ thuộc miền đích (codomain) $B$; trong Khoa học Máy tính, cần phân biệt hàm toàn phần với hàm bộ phận (partial function) vốn có thể không xác định trên một số đầu vào (tương ứng chương trình báo lỗi hoặc lặp vô hạn). Tập hợp các giá trị thực sự đạt được $f(A) = \{f(a) \mid a \in A\} \subseteq B$ được gọi là ảnh (image/range) của hàm, và phép hợp hàm $(g \circ f)(x) = g(f(x))$ đòi hỏi miền đích của $f$ phải khớp với miền xác định của $g$.

Bản chất ánh xạ của hàm được phân loại qua ba tính chất nền tảng: hàm $f: A \to B$ là đơn ánh (injective / one-to-one) nếu không có hai đầu vào khác nhau nào sinh ra cùng một đầu ra ($f(a_1) = f(a_2) \implies a_1 = a_2$, tức phép mã hóa không va chạm); là toàn ánh (surjective / onto) nếu mọi phần tử trong miền đích $B$ đều có ít nhất một tạo ảnh trong $A$ ($f(A) = B$); và là song ánh (bijective) nếu đồng thời vừa đơn ánh vừa toàn ánh. Một hàm $f$ có hàm ngược hai phía $f^{-1}: B \to A$ khi và chỉ khi $f$ là song ánh; trên các tập hữu hạn, sự tồn tại của một đơn ánh, toàn ánh hay song ánh giữa $A$ và $B$ kéo theo các quan hệ lực lượng tương ứng $|A| \le |B|$, $|A| \ge |B|$ và $|A| = |B|$.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 4: §4.3 Functions & §4.5 Finite Cardinality

#### Tiểu mục 3: Quan hệ hai ngôi, tính chất phản xạ – đối xứng – bắc cầu, quan hệ tương đương và phân hoạch (`dm-sfr-equivalence-partitions` — mức `core`)

Một quan hệ hai ngôi $R$ từ tập $A$ sang tập $B$ là một tập con bất kỳ của tích Descartes $A \times B$; khi $A = B$, ta gọi $R \subseteq A \times A$ là một quan hệ trên tập $A$ và ký hiệu $a R b$ thay cho $(a, b) \in R$. Một quan hệ trên $A$ được đặc trưng bởi các tính chất cấu trúc: tính phản xạ ($\forall a \in A, a R a$), tính đối xứng ($\forall a, b \in A, a R b \implies b R a$), tính phản xứng ($\forall a, b \in A, (a R b \land b R a) \implies a = b$) và tính bắc cầu ($\forall a, b, c \in A, (a R b \land b R c) \implies a R c$).

Một quan hệ đồng thời thỏa mãn ba tính chất phản xạ, đối xứng và bắc cầu được gọi là quan hệ tương đương (equivalence relation), tiêu biểu như quan hệ đồng dư modulo $m$ trên tập số nguyên hoặc quan hệ liên thông hai chiều trên đồ thị. Với mỗi phần tử $a \in A$, lớp tương đương $[a]_R = \{x \in A \mid x R a\}$ gom tất cả các phần tử tương đương với $a$. Định lý cơ bản về quan hệ tương đương khẳng định rằng họ các lớp tương đương của $R$ tạo thành một phân hoạch (partition) của tập $A$ — tức là các tập con khác rỗng, đôi một rời nhau ($[a]_R \cap [b]_R = \emptyset$ nếu $a \not\!R b$) và có hợp bằng toàn bộ $A$.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 4 (§4.4 Binary Relations) & Chapter 9 (§9.10 Equivalence Relations and Partitions)

### Chương 2 — Logic mệnh đề, đại số Boolean và logic vị từ (`dm-logic-predicates`)

Chương này cung cấp hệ thống quy tắc hình thức để biểu diễn các khẳng định toán học và điều kiện trong chương trình mà không bị nhập nhằng bởi ngôn ngữ tự nhiên. Nội dung đi từ logic mệnh đề, các phép nối chân trị, bản chất của phép kéo theo $P \implies Q$, tương đương logic và các dạng chuẩn tắc hội/tuyển (CNF/DNF), đến logic vị từ với lượng từ phổ quát $\forall$, lượng từ tồn tại $\exists$ và quy tắc biến đổi phủ định trên các biểu thức đa lượng từ lồng nhau.

*Nguồn chương:* `mit-6042j-2015` (Chapter 3: Logical Formulas (§3.1–3.6 Propositions, Equivalence, Normal Forms, Predicates and Quantifiers))

#### Tiểu mục 1: Mệnh đề, phép nối chân trị, bản chất của phép kéo theo (P => Q), đảo và phản đảo (`dm-lp-propositions-implication` — mức `core`)

Một mệnh đề (proposition) là một câu khẳng định có giá trị chân lý xác định: hoặc đúng ($\text{T}$), hoặc sai ($\text{F}$), nhưng không thể vừa đúng vừa sai. Từ các mệnh đề nguyên tử, ta xây dựng các công thức phức hợp bằng phép phủ định ($\neg P$), phép hội ($P \land Q$), phép tuyển ($P \lor Q$), phép tuyển loại trừ ($P \oplus Q$), phép kéo theo ($P \implies Q$) và phép tương đương hai chiều ($P \iff Q$). Trong đó, phép kéo theo $P \implies Q$ ("nếu $P$ thì $Q$") chỉ nhận giá trị sai trong duy nhất một trường hợp là giả thiết $P$ đúng nhưng kết luận $Q$ sai; khi giả thiết $P$ sai, mệnh đề $P \implies Q$ được coi là đúng rỗng (vacuously true) vì cam kết điều kiện không bị vi phạm.

Từ mệnh đề kéo theo $P \implies Q$, việc phân biệt rõ ba mệnh đề liên đới có ý nghĩa quyết định trong chứng minh toán học và kiểm tra điều kiện lập trình: mệnh đề đảo (converse) là $Q \implies P$, mệnh đề nghịch (inverse) là $\neg P \implies \neg Q$, và mệnh đề phản đảo (contrapositive) là $\neg Q \implies \neg P$. Bảng chân trị chứng minh rằng $P \implies Q$ luôn tương đương logic hoàn toàn với mệnh đề phản đảo $\neg Q \implies \neg P$ (và tương đương với $\neg P \lor Q$), nhưng không tương đương với mệnh đề đảo $Q \implies P$; nhầm lẫn giữa chiều thuận và chiều đảo là nguồn gốc của ngụy biện khẳng định hậu kiện.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 3: §3.1 Propositions from Propositions & §3.2 Propositional Logic in Computer Programs

#### Tiểu mục 2: Tương đương logic, hằng đúng, dạng chuẩn tắc tuyển (DNF), chuẩn tắc hội (CNF) và bài toán SAT (`dm-lp-equivalence-cnf-dnf-sat` — mức `core`)

Một công thức mệnh đề được gọi là hằng đúng (tautology / valid) nếu nó luôn nhận giá trị $\text{T}$ dưới mọi phép gán chân trị của các biến thành phần; được gọi là thỏa mãn được (satisfiable) nếu tồn tại ít nhất một phép gán làm nó đúng; và là mâu thuẫn (unsatisfiable) nếu luôn nhận giá trị $\text{F}$. Hai công thức $F$ và $G$ tương đương logic ($F \equiv G$) khi và chỉ khi $F \iff G$ là hằng đúng. Nhờ các luật đại số mệnh đề (giao hoán, kết hợp, phân phối, hấp thụ, De Morgan $\neg(P \land Q) \equiv \neg P \lor \neg Q$), mọi công thức phức tạp đều có thể biến đổi tương đương về dạng chuẩn.

Hai dạng chuẩn tắc quan trọng nhất là Dạng chuẩn tắc tuyển (Disjunctive Normal Form — DNF, tức tuyển của các mệnh đề hội sơ cấp, đọc trực tiếp từ các dòng có giá trị $\text{T}$ trong bảng chân trị) và Dạng chuẩn tắc hội (Conjunctive Normal Form — CNF, tức hội của các mệnh đề tuyển gọi là các mệnh đề con / clauses). Mặc dù mọi công thức đều đưa được về DNF hoặc CNF tương đương, việc chuyển trực tiếp từ DNF sang CNF bằng luật phân phối có thể làm kích thước công thức bùng nổ theo hàm mũ. Bài toán kiểm tra xem một công thức dạng CNF có thỏa mãn được hay không (CNF-SAT) chính là bài toán NP-đầy đủ gốc trong lý thuyết độ phức tạp tính toán.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 3: §3.3 Equivalence and Validity, §3.4 The Algebra of Propositions, §3.5 The SAT Problem

#### Tiểu mục 3: Logic vị từ, miền diễn dịch, lượng từ lồng nhau và quy tắc De Morgan cho lượng từ (`dm-lp-predicates-quantifiers-negation` — mức `core`)

Logic mệnh đề không đủ sức biểu đạt các khẳng định phụ thuộc biến trên tập vô hạn hoặc tập kích thước biến thiên. Logic vị từ mở rộng ngôn ngữ bằng các vị từ $P(x, y)$ (hàm trả về giá trị chân lý khi thay $x, y$ từ một miền diễn dịch $D$ xác định) kết hợp với lượng từ phổ quát $\forall x \in D, P(x)$ ("với mọi $x$ thuộc $D$, $P(x)$ đúng") và lượng từ tồn tại $\exists x \in D, P(x)$ ("tồn tại ít nhất một $x$ thuộc $D$ sao cho $P(x)$ đúng"). Khi miền $D = \{x_1, \dots, x_n\}$ hữu hạn, $\forall x \in D, P(x)$ tương đương với hội $P(x_1) \land \dots \land P(x_n)$, còn $\exists x \in D, P(x)$ tương đương với tuyển $P(x_1) \lor \dots \lor P(x_n)$ (do đó trên tập rỗng $D = \emptyset$, khẳng định $\forall$ luôn đúng rỗng còn khẳng định $\exists$ luôn sai).

Khi nhiều lượng từ khác loại được đặt lồng nhau, thứ tự của chúng quyết định hoàn toàn ý nghĩa mệnh đề: khẳng định $\forall x \, \exists y, P(x, y)$ cho phép chọn $y$ phụ thuộc vào từng $x$ đã cho, trong khi khẳng định mạnh hơn rất nhiều $\exists y \, \forall x, P(x, y)$ đòi hỏi phải tồn tại một phần tử $y$ cố định duy nhất thỏa mãn đồng thời cho mọi $x$. Khi phủ định một mệnh đề có lượng từ, quy tắc De Morgan tổng quát đòi hỏi đổi mọi lượng từ $\forall$ thành $\exists$, đổi $\exists$ thành $\forall$ và đẩy dấu phủ định vào vị từ bên trong: $\neg(\forall x \, \exists y, P(x, y)) \equiv \exists x \, \forall y, \neg P(x, y)$. Đây là công cụ cơ sở để xây dựng phản ví dụ hoặc viết điều kiện dừng của thuật toán tìm kiếm.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 3: §3.6 Predicate Formulas (Quantifiers, Order of Quantifiers, Negating Quantifiers)

### Chương 3 — Phương pháp chứng minh toán học và nguyên lý quy nạp (`dm-proofs-induction`)

Trong Khoa học Máy tính, kiểm thử trên vài triệu bộ đầu vào không bao giờ thay thế được chứng minh toán học cho tính đúng đắn trên mọi đầu vào khả dĩ. Chương này trình bày cấu trúc của một chứng minh hợp lệ cùng các chiến lược chứng minh cốt lõi (trực tiếp, phản đảo, phản chứng, chia trường hợp, phản ví dụ), nguyên lý thứ tự tốt (Well-Ordering Principle), quy nạp toán học thường và quy nạp mạnh, đồng thời phân tích các ngụy biện quy nạp kinh điển.

*Nguồn chương:* `mit-6042j-2015` (Chapter 1 (§1.1–1.9 What is a Proof?), Chapter 2 (§2.1–2.4 The Well Ordering Principle), and Chapter 5 (§5.1–5.3 Induction))

#### Tiểu mục 1: Chứng minh trực tiếp, chứng minh bằng phản đảo, chứng minh phản chứng và phản ví dụ (`dm-pi-direct-contrapositive-contradiction` — mức `core`)

Một chứng minh toán học là một dãy hữu hạn các bước suy luận hợp lệ đi từ các tiên đề (axioms), định nghĩa và các bổ đề đã biết tới kết luận cần chứng minh. Với mệnh đề dạng kéo theo $P \implies Q$, chứng minh trực tiếp bắt đầu bằng việc giả sử $P$ đúng và sử dụng chuỗi quy tắc suy diễn (như Modus Ponens: từ $A$ và $A \implies B$ suy ra $B$) để dẫn tới $Q$. Khi giả thiết $P$ chứa cấu trúc phủ định hoặc khó khai thác trực tiếp (ví dụ "nếu $n^2$ chẵn thì $n$ chẵn"), phương pháp chứng minh bằng phản đảo chuyển bài toán sang chứng minh mệnh đề tương đương $\neg Q \implies \neg P$ ("nếu $n$ lẻ thì $n^2$ lẻ"), giúp giả thiết mới trở nên cụ thể và dễ biến đổi đại số.

Phương pháp chứng minh bằng phản chứng (proof by contradiction) dựa trên sự tương đương $\neg P \implies \text{False} \equiv P$: để chứng minh mệnh đề $S$ đúng, ta giả sử $\neg S$ đúng rồi suy diễn logic cho đến khi thu được một mâu thuẫn вида $R \land \neg R$ (chẳng hạn chứng minh $\sqrt{2}$ là số vô tỉ hoặc tập số nguyên tố là vô hạn). Ngược lại, để bác bỏ một mệnh đề phổ quát $\forall x \in D, P(x)$, ta không cần biến đổi đại số tổng quát mà chỉ cần chỉ ra đúng một phản ví dụ (counterexample) cụ thể $x_0 \in D$ sao cho $P(x_0)$ sai.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 1: §1.4 Proving an Implication, §1.5 Proving an If and Only If, §1.6 Proof by Cases, §1.7 Proof by Contradiction

#### Tiểu mục 2: Nguyên lý thứ tự tốt (Well-Ordering Principle) và Quy nạp toán học thường (`dm-pi-well-ordering-ordinary-induction` — mức `core`)

Nguyên lý thứ tự tốt (Well-Ordering Principle — WOP) phát biểu rằng mọi tập con khác rỗng của tập các số nguyên không âm $\mathbb{N}$ đều có một phần tử nhỏ nhất. Nguyên lý tưởng chừng hiển nhiên này là công cụ mạnh mẽ để chứng minh bằng phản chứng: nếu một tính chất $P(n)$ bị nghi ngờ không đúng với mọi $n \in \mathbb{N}$, thì tập hợp các phản ví dụ $C = \{n \in \mathbb{N} \mid \neg P(n)\}$ là khác rỗng, do đó theo WOP phải tồn tại phản ví dụ nhỏ nhất $m \in C$; việc chỉ ra một phần tử nhỏ hơn $m$ cũng vi phạm tính chất (hoặc chứng minh $m$ không thể tồn tại) sẽ buộc $C = \emptyset$.

Tương đương về mặt logic với WOP là Nguyên lý quy nạp toán học thường (Ordinary Induction) dùng để chứng minh mệnh đề $\forall n \ge b, P(n)$. Một chứng minh quy nạp hợp lệ gồm hai phần bắt buộc: Bước cơ sở (Base case) kiểm chứng trực tiếp rằng $P(b)$ đúng tại giá trị khởi đầu $b$; và Bước quy nạp (Inductive step) chứng minh rằng với mọi $k \ge b$ bất kỳ, nếu giả thiết quy nạp $P(k)$ đúng thì mệnh đề kế tiếp $P(k + 1)$ cũng phải đúng ($\forall k \ge b, P(k) \implies P(k+1)$). Sai lầm phổ biến nhất của người mới học là nhầm mệnh đề $P(n)$ với một biểu thức số (ví dụ viết "$P(n) = n(n+1)/2$" thay vì mệnh đề có giá trị chân lý "$P(n)$: tổng $\sum_{i=1}^n i = n(n+1)/2$").

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 2 (§2.1–2.4 Well Ordering Proofs) & Chapter 5 (§5.1 Ordinary Induction)

#### Tiểu mục 3: Quy nạp mạnh (Strong Induction), lựa chọn số trường hợp cơ sở và chẩn đoán ngụy biện quy nạp (`dm-pi-strong-induction-false-proofs` — mức `core`)

Trong nhiều bài toán Khoa học Máy tính—như phân tích thuật toán chia đôi kích thước $n \to \lfloor n/2 \rfloor$, phân tích một hợp số $n = a \cdot b$ thành tích hai số nhỏ hơn, hay giải hệ thức đệ quy bậc hai $T(n) = T(n-1) + T(n-2)$—trạng thái tại $n+1$ không chỉ phụ thuộc vào trạng thái ngay sát trước $n$ mà phụ thuộc vào các giá trị nhỏ hơn nằm sâu hơn trong quá khứ. Quy nạp mạnh (Strong Induction) giải quyết vấn đề này bằng cách cho phép giả thiết quy nạp ở bước chuyển tiếp giả sử $P(b), P(b+1), \dots, P(k)$ đều đồng thời đúng cho mọi chỉ số từ mốc cơ sở $b$ đến $k$, để từ đó suy ra $P(k+1)$ đúng.

Khi sử dụng quy nạp mạnh hoặc quy nạp nhảy nhiều bước, điều kiện sống còn để chứng minh không bị thủng là mọi chỉ số cơ sở chưa đủ điều kiện áp dụng phép lùi quy nạp đều phải được kiểm tra tường minh ở Bước cơ sở. Ví dụ, nếu bước quy nạp lùi từ $k+1$ về $k$ và $k-1$, phép lùi này chỉ hợp lệ khi $k - 1 \ge b$, tức $k+1 \ge b+2$; do đó Bước cơ sở bắt buộc phải kiểm tra độc lập cả hai trường hợp $P(b)$ và $P(b+1)$. Việc quên kiểm tra biên áp dụng của bước quy nạp chính là kẽ hở tạo nên ngụy biện nổi tiếng "mọi con ngựa đều có cùng màu" (nơi phép lấy giao hai tập con cỡ $k$ bị rỗng và sụp đổ tại bước chuyển từ $1$ lên $2$).

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 5: §5.1.5 A Faulty Induction Proof (All Horses are the Same Color) & §5.2 Strong Induction

### Chương 4 — Định nghĩa đệ quy, quy nạp cấu trúc và bất biến máy trạng thái (`dm-recursive-definitions-invariants`)

Chương này kết nối trực tiếp phương pháp quy nạp toán học với hai trụ cột của lập trình và hệ thống: một là các kiểu dữ liệu được định nghĩa đệ quy (như danh sách liên kết, cây nhị phân, biểu thức cú pháp) đi kèm phương pháp quy nạp cấu trúc; hai là mô hình máy trạng thái (state machines) dùng để chứng minh tính đúng đắn từng phần (partial correctness) thông qua bất biến bảo toàn và chứng minh tính dừng (termination) thông qua hàm biến thiên giảm nghiêm ngặt.

*Nguồn chương:* `mit-6042j-2015` (Chapter 5 (§5.4 State Machines) and Chapter 6 (§6.1–6.4 Recursive Data Types and Structural Induction))

#### Tiểu mục 1: Kiểu dữ liệu đệ quy, tính không nhập nhằng và nguyên lý quy nạp cấu trúc (Structural Induction) (`dm-rdi-recursive-datatypes-structural-induction` — mức `core`)

Một tập hợp hoặc kiểu dữ liệu đệ quy $S$ được định nghĩa thông qua ba thành phần: một tập các phần tử cơ sở (base cases) thuộc $S$; một tập các quy tắc kiến tạo (constructor cases) cho phép ghép các phần tử đã thuộc $S$ để tạo ra phần tử mới thuộc $S$; và điều khoản đóng khẳng định không có phần tử nào thuộc $S$ ngoài những phần tử sinh ra từ số bước hữu hạn các quy tắc trên. Cây nhị phân có gốc, xâu ngoặc cân bằng và cây cú pháp trừu tượng (AST) của trình biên dịch đều được định nghĩa theo cấu trúc này, cho phép định nghĩa các hàm đệ quy (như tính số nút, chiều cao cây hay lượng giá biểu thức) bám sát từng quy tắc kiến tạo.

Để chứng minh một tính chất $P(x)$ đúng với mọi phần tử $x \in S$, phương pháp Quy nạp cấu trúc (Structural Induction) thực hiện: (1) chứng minh $P(b)$ đúng với mọi phần tử cơ sở $b$; và (2) với mỗi quy tắc kiến tạo $c(x_1, \dots, x_m)$, giả sử giả thiết quy nạp $P(x_1), \dots, P(x_m)$ đúng trên các thành phần con, rồi chứng minh $P(c(x_1, \dots, x_m))$ cũng đúng. Nhờ tính tương ứng 1–1 giữa định nghĩa cấu trúc dữ liệu, định nghĩa hàm đệ quy trên cấu trúc đó và chứng minh quy nạp cấu trúc, lập trình viên có thể chứng minh chặt chẽ các định lý như "mọi cây nhị phân đầy đủ có $L$ nút lá thì có đúng $L - 1$ nút trong" mà không cần quy đổi về chỉ số số nguyên.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 6: §6.1 Recursive Data Types, §6.2 Strings of Brackets, §6.3 Functions on Recursively-Defined Data Types, §6.4 Arithmetic Expressions

#### Tiểu mục 2: Mô hình máy trạng thái, trạng thái khả đạt và phương pháp Bất biến bảo toàn (Preserved Invariants) (`dm-rdi-state-machines-preserved-invariants` — mức `core`)

Mọi thuật toán lặp, giao thức mạng hay tiến trình đồng thời đều có thể được mô hình hóa chính xác dưới dạng một Máy trạng thái (State Machine) gồm một tập trạng thái $Q$, một trạng thái khởi đầu $q_0 \in Q$ và một quan hệ chuyển trạng thái $\delta \subseteq Q \times Q$ (viết $q \to q'$). Một thực thi (execution) là một dãy trạng thái $q_0 \to q_1 \to q_2 \to \dots$, và một trạng thái $q$ được gọi là khả đạt (reachable) nếu tồn tại một dãy chuyển hữu hạn đi từ $q_0$ tới $q$.

Để chứng minh hệ thống không bao giờ rơi vào trạng thái lỗi (hoặc khi dừng sẽ cho kết quả đúng — partial correctness), ta sử dụng Nguyên lý Bất biến (Invariant Principle): một vị từ $P(q)$ trên trạng thái là một bất biến bảo toàn (preserved invariant) nếu với mọi bước chuyển hợp lệ $q \to q'$, việc $P(q)$ đúng kéo theo $P(q')$ cũng đúng ($P(q) \land (q \to q') \implies P(q')$). Bằng quy nạp theo số bước chuyển, nếu $P(q_0)$ đúng tại trạng thái đầu và $P$ được bảo toàn qua mọi phép chuyển, thì $P(q)$ chắc chắn đúng tại mọi trạng thái khả đạt $q$. Đôi khi một tính chất đích $G(q)$ là đúng nhưng không đủ mạnh để tự chứng minh bước chuyển tiếp $G(q) \implies G(q')$; kỹ thuật cốt lõi khi đó là làm mạnh bất biến (strengthening the invariant) bằng cách hội thêm điều kiện về các biến phụ trợ.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 5: §5.4 State Machines (§5.4.1 States and Transitions, §5.4.2 Invariant Principle)

#### Tiểu mục 3: Tính đúng đắn từng phần vs Tính đúng đắn toàn phần và chứng minh tính dừng bằng biến giảm (`dm-rdi-termination-ranking-functions` — mức `core`)

Trong xác minh thuật toán, tính đúng đắn toàn phần (total correctness) được tách thành hai mệnh đề độc lập: (1) Tính đúng đắn từng phần (partial correctness) phát biểu rằng *nếu* thuật toán dừng tại một trạng thái kết thúc, thì trạng thái đó thỏa mãn hậu điều kiện của bài toán (được chứng minh bằng bất biến bảo toàn kết hợp với phủ định của điều kiện tiếp tục lặp); và (2) Tính dừng (termination) phát biểu rằng mọi chuỗi thực thi xuất phát từ đầu vào hợp lệ đều phải kết thúc sau một số hữu hạn bước.

Công cụ chuẩn mực để chứng minh tính dừng của một máy trạng thái là xây dựng một biến dẫn xuất (derived variable / ranking function) $f: Q \to \mathbb{N}$ gán mỗi trạng thái với một số nguyên không âm (hoặc giá trị trong một tập có thứ tự tốt) sao cho $f$ giảm nghiêm ngặt qua mỗi bước chuyển: $\forall (q \to q'), f(q') < f(q)$. Theo Nguyên lý thứ tự tốt, một dãy các số nguyên không âm giảm nghiêm ngặt $f(q_0) > f(q_1) > f(q_2) > \dots \ge 0$ không thể kéo dài vô hạn (và có độ dài tối đa là $f(q_0)$ bước), do đó thuật toán bắt buộc phải dừng và đồng thời $f(q_0)$ cung cấp luôn một cận trên cho số bước thực thi.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 5: §5.4.3 Partial Correctness and Termination & Derived Variables

### Chương 5 — Số học nguyên, ước chung lớn nhất và đồng dư modulo (`dm-number-theory-modular`)

Số học nguyên từng được coi là ngành toán thuần túy nhất nhưng nay lại là nền tảng trực tiếp của hàm băm, phát hiện lỗi, bộ sinh số giả ngẫu nhiên và mật mã khóa công khai hiện đại. Chương này trình bày phép chia Euclid, thuật toán Euclid tìm ước chung lớn nhất, đồng nhất thức Bézout, định lý cơ bản của số học, vành số học đồng dư modulo $n$, điều kiện tồn tại nghịch đảo nhân và các định lý Fermat nhỏ, Euler.

*Nguồn chương:* `mit-6042j-2015` (Chapter 8: Number Theory (§8.1–8.9 Divisibility, GCD, Prime Mysteries, Modular Arithmetic, Euler and Fermat Theorems))

#### Tiểu mục 1: Phép chia có dư, thuật toán Euclid, đồng nhất thức Bézout và phân tích thừa số nguyên tố duy nhất (`dm-ntm-divisibility-euclid-bezout` — mức `core`)

Định lý phép chia có dư khẳng định rằng với mọi số nguyên $a$ và số nguyên dương $b > 0$, tồn tại duy nhất cặp số nguyên thương $q$ và số dư $r$ sao cho $a = q b + r$ với $0 \le r < b$. Dựa trên bất biến $\gcd(a, b) = \gcd(b, a \bmod b)$, thuật toán Euclid thay thế cặp $(a, b)$ bằng $(b, a \bmod b)$ lặp đi lặp lại cho tới khi số dư bằng $0$; vì sau mỗi hai bước số dư giảm đi ít nhất một nửa, thuật toán dừng sau không quá $2 \lceil \log_2 b \rceil$ phép chia — một thuật toán thời gian đa thức theo số bit biểu diễn đầu vào.

Bằng cách truy vết ngược các phép chia của thuật toán Euclid (Extended Euclidean Algorithm), ta thu được Bổ đề Bézout: ước chung lớn nhất $\gcd(a, b)$ chính là số nguyên dương nhỏ nhất biểu diễn được dưới dạng tổ hợp tuyến tính nguyên $s a + t b = \gcd(a, b)$ với $s, t \in \mathbb{Z}$ (hệ số Bézout). Bổ đề Bézout là chìa khóa để chứng minh Bổ đề Euclid (nếu số nguyên tố $p \mid a b$ và $p \nmid a$ thì $p \mid b$), từ đó suy ra Định lý cơ bản của số học: mọi số nguyên lớn hơn $1$ đều phân tích được một cách duy nhất (không kể thứ tự) thành tích của các thừa số nguyên tố.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 8: §8.1 Divisibility, §8.2 The Greatest Common Divisor (Euclid’s Algorithm & Pulverizer/Bézout), §8.3 Prime Mysteries (Fundamental Theorem of Arithmetic)

#### Tiểu mục 2: Quan hệ đồng dư modulo n, tính tương thích số học và điều kiện tồn tại nghịch đảo nhân (`dm-ntm-modular-arithmetic-inverses` — mức `core`)

Với số nguyên dương $n > 1$, hai số nguyên $a$ và $b$ được gọi là đồng dư theo modulo $n$, ký hiệu $a \equiv b \pmod n$, nếu $n \mid (a - b)$ (tương đương với việc $a$ và $b$ có cùng số dư khi chia cho $n$). Quan hệ đồng dư là một quan hệ tương đương phân hoạch $\mathbb{Z}$ thành đúng $n$ lớp thặng dư $\mathbb{Z}_n = \{[0], [1], \dots, [n-1]\}$, và tương thích hoàn toàn với phép cộng, phép trừ và phép nhân: nếu $a \equiv a' \pmod n$ và $b \equiv b' \pmod n$ thì $(a + b) \equiv (a' + b') \pmod n$ và $a b \equiv a' b' \pmod n$, cho phép lấy dư ở từng bước trung gian để chống tràn số nguyên trong lập trình.

Tuy nhiên, phép chia (giản ước nhân tử chung) trong đồng dư modulo không được phép thực hiện tùy tiện: từ $2 \cdot 3 \equiv 2 \cdot 0 \pmod 6$ không thể suy ra $3 \equiv 0 \pmod 6$. Một phần tử $a$ chỉ có thể giản ước được khi nó có nghịch đảo nhân modulo $n$, tức là tồn tại số nguyên $a^{-1}$ sao cho $a \cdot a^{-1} \equiv 1 \pmod n$. Nhờ đồng nhất thức Bézout $s a + t n = \gcd(a, n)$, ta chứng minh được điều kiện cần và đủ: $a$ có nghịch đảo nhân theo modulo $n$ khi và chỉ khi $a$ và $n$ nguyên tố cùng nhau ($\gcd(a, n) = 1$), và hệ số Bézout $s \bmod n$ chính là nghịch đảo $a^{-1}$ cần tìm, tính được trong thời gian $O(\log n)$.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 8: §8.5 Modular Arithmetic & §8.6 Arithmetic with a Prime Modulus / Multiplicative Inverses

#### Tiểu mục 3: Hàm phi Euler, Định lý Fermat nhỏ, Định lý Euler và Định lý thặng dư Trung Hoa (`dm-ntm-fermat-euler-crt` — mức `core`)

Tập hợp các lớp thặng dư trong $\{1, 2, \dots, n-1\}$ nguyên tố cùng nhau với $n$ tạo thành nhóm nhân các phần tử khả nghịch $\mathbb{Z}_n^*$; lực lượng của tập này được ký hiệu bởi hàm phi Euler $\phi(n) = |\mathbb{Z}_n^*|$ (với số nguyên tố $p$, $\phi(p) = p - 1$; với tích hai số nguyên tố phân biệt $n = p q$, $\phi(p q) = (p - 1)(q - 1)$). Bằng cách nhân toàn bộ các phần tử của $\mathbb{Z}_n^*$ với một phần tử $a \in \mathbb{Z}_n^*$ và sử dụng tính song ánh của phép nhân với phần tử khả nghịch, ta thu được Định lý Euler: với mọi $a$ thỏa mãn $\gcd(a, n) = 1$, ta luôn có $a^{\phi(n)} \equiv 1 \pmod n$.

Trong trường hợp đặc biệt khi mô-đun là một số nguyên tố $p$, định lý Euler rút gọn thành Định lý Fermat nhỏ: $a^{p-1} \equiv 1 \pmod p$ với mọi $p \nmid a$, cho phép rút gọn số mũ lớn theo modulo $p - 1$ và tính nghịch đảo nhân qua lũy thừa nhanh $a^{-1} \equiv a^{p-2} \pmod p$. Bên cạnh đó, khi mô-đun $N = m_1 m_2 \cdots m_k$ là tích của các thừa số đôi một nguyên tố cùng nhau, Định lý thặng dư Trung Hoa (Chinese Remainder Theorem — CRT) thiết lập một song ánh bảo toàn cả phép cộng lẫn phép nhân giữa $\mathbb{Z}_N$ và tích trực tiếp $\mathbb{Z}_{m_1} \times \dots \times \mathbb{Z}_{m_k}$, cho phép thực hiện các phép toán số lớn bằng cách tính song song trên các mô-đun nhỏ.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 8: §8.6 Fermat’s Little Theorem, §8.7 Arithmetic with an Arbitrary Modulus (Euler’s Theorem), §8.9 RSA Public Key Encryption

### Chương 6 — Lý thuyết đồ thị cơ sở, cây và cấu trúc phụ thuộc (`dm-graphs-trees-posets`)

Đồ thị là ngôn ngữ toán học tự nhiên nhất để mô hình hóa mạng lưới kết nối, quan hệ phụ thuộc tiên quyết và cấu trúc phân cấp trong Khoa học Máy tính. Chương này trình bày định nghĩa hình thức và các bất biến cơ bản của đồ thị vô hướng và đồ thị có hướng: từ bậc đỉnh, đường đi, chu trình, tính liên thông và đồ thị hai phía (bipartite graphs), đến các đặc trưng tương đương của cây (trees) và cấu trúc thứ tự bộ phận cùng sắp xếp tô-pô trên đồ thị có hướng không chu trình (DAG).

*Nguồn chương:* `mit-6042j-2015` (Chapter 9: Directed Graphs & Partial Orders (§9.1–9.11) and Chapter 11: Simple Graphs (§11.1–11.10))

#### Tiểu mục 1: Đồ thị đơn vô hướng, bậc đỉnh, Bổ đề bắt tay, đường đi, chu trình và thành phần liên thông (`dm-gtp-undirected-degrees-connectivity` — mức `core`)

Một đồ thị đơn vô hướng (simple undirected graph) $G = (V, E)$ bao gồm một tập đỉnh $V$ và một tập cạnh $E$, trong đó mỗi cạnh là một tập con gồm đúng 2 đỉnh phân biệt $\{u, v\} \subseteq V$ (không có khuyên tự nối một đỉnh với chính nó và không có đa cạnh song song). Bậc của một đỉnh $\deg(v)$ là số cạnh liên thuộc với đỉnh đó. Vì mỗi cạnh $\{u, v\} \in E$ đóng góp đúng 1 đơn vị vào bậc của $u$ và 1 đơn vị vào bậc của $v$, việc đếm tổng bậc theo hai cách dẫn trực tiếp tới Bổ đề bắt tay (Handshaking Lemma): $\sum_{v \in V} \deg(v) = 2|E|$, kéo theo hệ quả bất biến là trong mọi đồ thị hữu hạn, số đỉnh có bậc lẻ luôn là một số chẵn.

Một dãy bước đi (walk) là dãy xen kẽ các đỉnh và cạnh nối tiếp nhau; một đường đi đơn (path) là dãy bước đi không lặp lại đỉnh nào; và một chu trình (cycle) là dãy bước đi đóng có độ dài ít nhất 3 chỉ trùng đỉnh đầu và đỉnh cuối. Quan hệ "tồn tại đường đi giữa $u$ và $v$" là một quan hệ tương đương trên tập đỉnh $V$, phân hoạch đồ thị thành các thành phần liên thông (connected components) rời nhau. Ngoài ra, một đồ thị được gọi là hai phía (bipartite) nếu tập đỉnh $V$ có thể phân hoạch thành hai tập $L, R$ sao cho mọi cạnh chỉ nối một đỉnh thuộc $L$ với một đỉnh thuộc $R$; định lý đặc trưng khẳng định đồ thị là hai phía khi và chỉ khi nó không chứa bất kỳ chu trình độ dài lẻ nào.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 11: §11.1 Vertex Adjacency and Degrees, §11.4 Walk Relations and Connectivity, §11.9 Bipartite Graphs and Matchings

#### Tiểu mục 2: Cây (Trees), các định nghĩa tương đương, tính chất lá và cây khung (Spanning Trees) (`dm-gtp-trees-characterizations` — mức `core`)

Một cây tự do (free tree) là một đồ thị vô hướng vừa liên thông vừa không chứa chu trình (acyclic); một đồ thị không chứa chu trình nói chung (có thể gồm nhiều thành phần liên thông) được gọi là một rừng (forest), trong đó mỗi thành phần liên thông là một cây. Mọi cây hữu hạn có ít nhất $2$ đỉnh luôn có ít nhất $2$ đỉnh lá (đỉnh có bậc bằng $1$), được chứng minh dễ dàng bằng cách xét hai đầu mút của một đường đi đơn có độ dài cực đại trong cây: vì đường đi là cực đại và cây không có chu trình, hai đầu mút đó không thể có thêm bất kỳ đỉnh kề nào khác.

Trên một đồ thị hữu hạn $G = (V, E)$ với $n = |V| \ge 1$ đỉnh, sáu tính chất sau là hoàn toàn tương đương và mỗi tính chất đều định nghĩa một cây: (1) $G$ liên thông và không có chu trình; (2) giữa mọi cặp đỉnh $u, v \in V$ tồn tại duy nhất một đường đi đơn; (3) $G$ liên thông và xóa bất kỳ cạnh nào cũng làm đồ thị mất tính liên thông (liên thông cực tiểu); (4) $G$ không có chu trình và thêm bất kỳ cạnh mới nào cũng tạo ra đúng một chu trình (không chu trình cực đại); (5) $G$ liên thông và có đúng $|E| = n - 1$ cạnh; (6) $G$ không có chu trình và có đúng $|E| = n - 1$ cạnh. Mọi đồ thị liên thông đều chứa ít nhất một đồ thị con giữ nguyên tập đỉnh $V$ và là cây, gọi là cây khung (spanning tree).

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 11: §11.10 Forests and Trees (Leaves, Equivalent Characterizations, Spanning Trees)

#### Tiểu mục 3: Đồ thị có hướng, Đồ thị không chu trình (DAG), Thứ tự bộ phận (Posets) và Sắp xếp Tô-pô (`dm-gtp-digraphs-dags-topological-sort` — mức `core`)

Trong đồ thị có hướng (directed graph / digraph) $G = (V, E)$, mỗi cạnh là một cặp có thứ tự $(u, v) \in V \times V$ đi từ đuôi $u$ tới đầu $v$, tách bậc của mỗi đỉnh thành bậc vào $\text{in-deg}(v)$ và bậc ra $\text{out-deg}(v)$ thỏa mãn $\sum_{v \in V} \text{in-deg}(v) = \sum_{v \in V} \text{out-deg}(v) = |E|$. Khi đồ thị có hướng không chứa bất kỳ chu trình có hướng nào, ta thu được Đồ thị có hướng không chu trình (Directed Acyclic Graph — DAG), cấu trúc chuẩn để biểu diễn đồ thị điều kiện tiên quyết môn học, đồ thị phụ thuộc biên dịch (`Makefile`) và lịch biểu tác vụ.

Về mặt đại số quan hệ, quan hệ khả đạt trên một DAG tương ứng với một Thứ tự bộ phận nghiêm ngặt (strict partial order: không phản xạ, phản xứng và bắc cầu). Trong một tập thứ tự bộ phận hữu hạn khác rỗng, luôn tồn tại ít nhất một phần tử cực tiểu (minimal element — đỉnh có bậc vào bằng $0$). Bằng cách lặp lại thao tác lấy ra một phần tử cực tiểu rồi xóa nó khỏi DAG, ta chứng minh được mọi DAG hữu hạn đều có ít nhất một Sắp xếp Tô-pô (Topological Sort / Linear Extension): một thứ tự toàn phần tuyến tính của các đỉnh sao cho với mọi cung $(u, v) \in E$, đỉnh $u$ luôn đứng trước đỉnh $v$. Ngoài ra, độ dài chuỗi phụ thuộc dài nhất (critical path) quy định thời gian tối thiểu để hoàn tất toàn bộ tác vụ ngay cả khi có vô hạn bộ xử lý song song.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 9: §9.1–9.4 Digraphs and Walk Relations, §9.5 Directed Acyclic Graphs & Scheduling, §9.6–9.9 Partial Orders, Linear Extensions (Topological Sort), and Dilworth’s Lemma

### Chương 7 — Nguyên lý đếm, song ánh, bù trừ và Dirichlet (`dm-counting-combinatorics`)

Đếm lực lượng của một tập hợp hữu hạn là bước cốt lõi để xác định kích thước không gian tìm kiếm, phân tích độ phức tạp trung bình của thuật toán và tính xác suất rời rạc. Chương này trình bày hệ thống các nguyên lý tổ hợp từ quy tắc cộng, quy tắc nhân, ánh xạ song ánh và ánh xạ $k$-tới-$1$, đến hoán vị, tổ hợp, hệ số nhị thức và đa thức, nguyên lý bao hàm–loại trừ (Inclusion–Exclusion) và nguyên lý chuồng bồ câu (Pigeonhole Principle).

*Nguồn chương:* `mit-6042j-2015` (Chapter 14: Cardinality Rules (§14.1–14.10 Counting by Mapping, Product/Sum/Division Rules, Binomial Theorem, Inclusion-Exclusion, Pigeonhole Principle))

#### Tiểu mục 1: Quy tắc cộng, Quy tắc nhân, Quy tắc chia ($k$-to-$1$) và Phương pháp đếm bằng Song ánh (`dm-cc-sum-product-bijection-division` — mức `core`)

Hai quy tắc sơ cấp nhất của tổ hợp là Quy tắc cộng (Sum Rule: nếu các tập hữu hạn $A_1, \dots, A_m$ đôi một rời nhau thì $|A_1 \cup \dots \cup A_m| = \sum_{i=1}^m |A_i|$) và Quy tắc nhân tổng quát (Product Rule: nếu một quy trình gồm $m$ bước tuần tự, bước $1$ có $n_1$ cách chọn, và với mỗi kết quả của các bước trước, bước $i$ luôn có đúng $n_i$ cách chọn độc lập về số lượng, thì tổng số kết quả tạo thành là $n_1 \cdot n_2 \cdots n_m$). Quy tắc chia (Division Rule) xử lý trường hợp đếm trùng có tính đối xứng: nếu ánh xạ $f: A \to B$ là toàn ánh sao cho mọi phần tử $b \in B$ đều có đúng $k$ tạo ảnh trong $A$ (ánh xạ $k$-to-$1$), thì $|B| = |A| / k$.

Khi một tập hợp $S$ có cấu trúc phức tạp khó đếm trực tiếp, kỹ thuật mạnh nhất là xây dựng một song ánh (bijection) tường minh $f: S \to T$ sang một tập $T$ đã biết rõ công thức lực lượng (như tập các xâu nhị phân có ràng buộc). Chẳng hạn, bài toán chia $n$ vật giống hệt nhau vào $k$ hộp phân biệt ($x_1 + x_2 + \dots + x_k = n$ với $x_i \ge 0$) được giải quyết trọn vẹn bằng cách thiết lập song ánh với tập các xâu gồm $n$ ngôi sao và $k - 1$ vách ngăn (stars and bars), cho ngay kết quả $\binom{n + k - 1}{k - 1}$ mà không cần tách trường hợp phức tạp.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 14: §14.1 Counting One Thing by Counting Another (Bijection), §14.2 Counting Sequences (Product & Sum Rules), §14.4 The Generalized Product Rule, §14.5 The Division Rule

#### Tiểu mục 2: Hoán vị, Tổ hợp, Định lý Nhị thức Newton và Chứng minh Tổ hợp (Combinatorial Proofs) (`dm-cc-permutations-combinations-binomial` — mức `core`)

Từ quy tắc nhân và quy tắc chia, số dãy có thứ tự gồm $k$ phần tử phân biệt lấy từ tập $n$ phần tử ($k$-permutations) là $P(n, k) = n(n-1)\cdots(n-k+1) = \frac{n!}{(n-k)!}$. Khi bỏ qua thứ tự sắp xếp giữa $k$ phần tử được chọn, mỗi tập con cỡ $k$ tương ứng với đúng $k!$ thứ tự hoán vị khác nhau; áp dụng quy tắc chia $k!$-to-$1$ ta thu được số tập con cỡ $k$ (tổ hợp) là $\binom{n}{k} = \frac{n!}{k!(n-k)!}$. Khi chia $n$ phần tử phân biệt vào $m$ nhóm có kích thước cố định $k_1 + k_2 + \dots + k_m = n$, công thức tổng quát hóa thành hệ số đa thức $\binom{n}{k_1, k_2, \dots, k_m} = \frac{n!}{k_1! k_2! \cdots k_m!}$.

Hệ số nhị thức $\binom{n}{k}$ xuất hiện trong khai triển Định lý Nhị thức $(x + y)^n = \sum_{k=0}^n \binom{n}{k} x^{n-k} y^k$ vì số hạng $x^{n-k} y^k$ hình thành từ việc chọn đúng $k$ nhân tử đóng góp biến $y$ trong số $n$ nhân tử $(x+y)$. Để chứng minh các đồng nhất thức tổ hợp như đẳng thức Pascal $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$ hay đẳng thức Vandermonde $\binom{m+n}{r} = \sum_{k=0}^r \binom{m}{k}\binom{n}{r-k}$, phương pháp Chứng minh tổ hợp (double counting) đặt ra một câu hỏi đếm duy nhất rồi đếm tập kết quả theo hai cách khác nhau, giúp thấy rõ bản chất cấu trúc hơn rất nhiều so với việc biến đổi giai thừa thuần túy.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 14: §14.6 Counting Subsets, §14.7 Sequences with Repetitions (Bookkeeper Rule & Multinomials), §14.8 The Binomial Theorem, §14.10 Combinatorial Proof

#### Tiểu mục 3: Nguyên lý Bao hàm – Loại trừ (Inclusion–Exclusion) và Nguyên lý Chuồng bồ câu (Dirichlet) (`dm-cc-inclusion-exclusion-pigeonhole` — mức `core`)

Khi các tập hợp $A_1, \dots, A_n$ không rời nhau mà giao nhau chồng chéo, việc cộng trực tiếp lực lượng $\sum |A_i|$ sẽ đếm lặp những phần tử thuộc nhiều tập hợp. Nguyên lý Bao hàm – Loại trừ (Inclusion–Exclusion Principle) hiệu chỉnh chính xác số lần đếm bằng tổng đan dấu trên mọi giao của các tập con chỉ số khác rỗng: $|\bigcup_{i=1}^n A_i| = \sum_{k=1}^n (-1)^{k+1} \sum_{1 \le i_1 < \dots < i_k \le n} |A_{i_1} \cap \dots \cap A_{i_k}|$. Một phần tử nằm trong đúng $m \ge 1$ tập hợp sẽ được đếm $\sum_{k=1}^m (-1)^{k+1} \binom{m}{k} = 1 - (1 - 1)^m = 1$ lần, chứng minh tính đúng đắn tuyệt đối của công thức (ứng dụng kinh điển trong bài toán đếm số toàn ánh, số mất thứ tự derangements và hàm phi Euler).

Ở chiều ngược lại, Nguyên lý Chuồng bồ câu (Pigeonhole Principle / Dirichlet) khẳng định một định lý tồn tại không kiến tạo: nếu xếp $N$ vật vào $K$ hộp mà $N > K$, thì chắc chắn tồn tại ít nhất một hộp chứa từ $2$ vật trở lên; tổng quát hơn, luôn tồn tại một hộp chứa ít nhất $\lceil N / K \rceil$ vật. Trong Khoa học Máy tính, nguyên lý này chứng minh sự tất yếu của va chạm bảng băm (hash collisions) khi không gian khóa lớn hơn kích thước bảng, chứng minh định lý không tồn tại thuật toán nén không mất dữ liệu nào làm ngắn được mọi xâu đầu vào, và chứng minh Bổ đề bơm (Pumping Lemma) trong lý thuyết ngôn ngữ hình thức.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 14: §14.9 The Pigeonhole Principle & §14.11 Inclusion-Exclusion

### Chương 8 — Tổng hữu hạn, ước lượng tiệm cận và phương pháp kẹp tích phân (`dm-sums-products-asymptotics`)

Khi phân tích số bước thực thi của vòng lặp hoặc đệ quy, kết quả ban đầu hầu như luôn xuất hiện dưới dạng các tổng hữu hạn hoặc tích hữu hạn phụ thuộc vào kích thước đầu vào $n$. Chương này trang bị trước hết các kỹ thuật đại số cốt lõi chỉ cần nền tảng CS-02: rút gọn tổng dạng đóng (cấp số cộng, cấp số nhân, tổng sai phân triệt tiêu, phương pháp nhiễu loạn), cận sơ cấp chia nhóm theo lũy thừa của $2$ cho chuỗi điều hòa $H_n$ và tích giai thừa, cùng định nghĩa lượng từ chặt chẽ của hệ thống ký hiệu tiệm cận ($O, \Omega, \Theta, o, \omega$). Riêng kỹ thuật kẹp tổng bằng tích phân xác định và xấp xỉ Stirling đầy đủ được tách rõ thành tiểu mục mở rộng (extension) có khai báo tiên quyết Giải tích một biến (CS-11).

*Nguồn chương:* `mit-6042j-2015` (Chapter 13: Sums & Asymptotics (§13.1–13.7 Closed Forms, Integral Method, Stirling’s Approximation, Asymptotic Notation))

#### Tiểu mục 1: Biến đổi tổng hữu hạn, cấp số nhân, tổng triệt tiêu (Telescoping) và cận sơ cấp cho số điều hòa (`dm-spa-closed-form-sums-perturbation` — mức `core`)

Mục tiêu đầu tiên khi gặp một tổng $\sum_{i=1}^n a_i$ là tìm biểu thức dạng đóng (closed form) — một công thức có số phép toán cố định không phụ thuộc vào $n$. Ba tổng cơ sở xuất hiện liên tục trong phân tích thuật toán là tổng cấp số cộng $\sum_{i=1}^n i = \frac{n(n+1)}{2}$, tổng bình phương $\sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}$, và tổng cấp số nhân $\sum_{i=0}^n r^i = \frac{1 - r^{n+1}}{1 - r}$ (với $r \neq 1$). Tổng cấp số nhân giải thích hai hiện tượng trái ngược trong thuật toán: khi $0 < r < 1$ (như $r = 1/2$), tổng bị chặn trên bởi hằng số $\frac{1}{1-r}$ dù $n \to \infty$, nghĩa là số hạng đầu tiên thống trị toàn bộ tổng; ngược lại khi $r > 1$ (như $r = 2$ trên cây nhị phân đầy đủ), $\sum_{i=0}^n 2^i = 2^{n+1} - 1$, nghĩa là riêng tầng cuối cùng đã lớn hơn tổng tất cả các tầng trước cộng lại.

Với các tổng dạng $\sum_{i=1}^n i r^i$, kỹ thuật nhiễu loạn đại số (perturbation method — nhân tổng $S_n$ với $r$ rồi lấy $S_n - r S_n$ để quy về tổng cấp số nhân mà chưa cần dùng đạo hàm giải tích) cho phép đưa về dạng đóng $\frac{r - (n+1)r^{n+1} + n r^{n+2}}{(1-r)^2}$. Với các tổng phân thức dạng $\sum_{i=1}^n \frac{1}{i(i+1)}$, phép tách thành hiệu sai phân $a_i = f(i) - f(i+1) = \frac{1}{i} - \frac{1}{i+1}$ biến tổng thành tổng triệt tiêu (telescoping sum), nơi mọi số hạng trung gian tự khử lẫn nhau chỉ để lại biên đầu trừ biên cuối $1 - \frac{1}{n+1}$. Đối với Số điều hòa $H_n = \sum_{i=1}^n \frac{1}{i}$ (không có dạng đóng sơ cấp), ngay cả khi chưa dùng tích phân, phép chia nhóm các số hạng theo lũy thừa của $2$ ($1 + \frac{1}{2} + (\frac{1}{3}+\frac{1}{4}) + (\frac{1}{5}+\dots+\frac{1}{8}) + \dots$) chứng minh hoàn toàn bằng đại số sơ cấp rằng $1 + \frac{k}{2} \le H_{2^k} \le 1 + k$, từ đó suy ra $H_n = \Theta(\log n)$; tương tự, bất đẳng thức $(n/2)^{n/2} \le n! \le n^n$ lấy logarit cơ số $2$ cho ngay $\log_2(n!) = \Theta(n \log n)$ đủ dùng cho phân tích cận dưới sắp xếp so sánh.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 13: §13.1 The Value of an Annuity & §13.2 Sums of Powers (Perturbation Method)

#### Tiểu mục 2: Phương pháp kẹp tổng bằng tích phân và xấp xỉ Stirling cho giai thừa (Mở rộng — cần Giải tích CS-11) (`dm-spa-harmonic-integral-stirling` — mức `extension`)

- **Tiên quyết riêng của tiểu mục:** `single-variable-calculus` (*required*): Cần khái niệm tích phân xác định, liên hệ diện tích hình phẳng và nguyên hàm của 1/x cùng ln(x) từ Môn CS-11.

Tiểu mục mở rộng này dành cho người học đã nắm hoặc đang học song song Giải tích một biến (CS-11) để thu được các hệ số tiệm cận sắc nét hơn cận chia nhóm sơ cấp. Khi cần ước lượng tổng $\sum_{i=1}^n f(i)$ của một hàm dương đơn điệu khả tích $f$, phương pháp Kẹp tích phân (Integral Bound Method) so sánh tổng diện tích các hình chữ nhật đơn vị với diện tích dưới đường cong liên tục $y = f(x)$: nếu $f$ đơn điệu giảm trên $[1, \infty)$ thì $\int_1^{n+1} f(x)\,dx \le \sum_{i=1}^n f(i) \le f(1) + \int_1^n f(x)\,dx$; nếu $f$ đơn điệu tăng thì $\int_1^n f(x)\,dx + f(1) \le \sum_{i=1}^n f(i) \le \int_1^{n+1} f(x)\,dx$ (hoặc kẹp với biên dịch trái $\int_0^n f(x)\,dx$ khi $f$ xác định trên $[0, \infty)$). Áp dụng cận tích phân cho hàm giảm $f(x) = 1/x$, ta chứng minh được $\ln(n+1) \le H_n \le 1 + \ln n$, xác lập hệ số dẫn đầu chính xác theo logarit tự nhiên $H_n = \ln n + O(1)$ (và sâu hơn trong giải tích là $H_n = \ln n + \gamma + O(1/n)$ với hằng số Euler–Mascheroni $\gamma \approx 0.5772$).

Đối với giai thừa $n!$, việc lấy logarit biến tích thành tổng $\ln(n!) = \sum_{i=1}^n \ln i$. Áp dụng trực tiếp bất đẳng thức kẹp tích phân hình chữ nhật cho hàm đơn điệu tăng $f(x) = \ln x$ với nguyên hàm $\int \ln x\,dx = x \ln x - x$, ta thu được cận hai phía $n \ln n - n + 1 \le \ln(n!) \le (n+1)\ln(n+1) - n$, qua đó suy ra trực tiếp rằng phần dư $R(n) = \ln(n!) - (n \ln n - n)$ thỏa mãn $1 \le R(n) \le (n+1)\ln(n+1) - n\ln n = \ln n + (n+1)\ln(1 + 1/n) = O(\ln n)$, tức $\ln(n!) = n \ln n - n + O(\ln n)$ (riêng hai cận hình chữ nhật này mới chặn trên phần dư bởi $O(\ln n)$ chứ chưa tự chứng minh cận dưới $\Omega(\ln n)$ của phần dư; để có cả $\Omega(\ln n)$ cần kẹp tinh hơn bằng hình thang theo tính lõm của $\ln x$ trên từng đoạn $[k, k+1]$). Cần phân biệt rõ kết quả kẹp tích phân hình chữ nhật này với **Công thức xấp xỉ Stirling** đầy đủ ở mức tương đương tiệm cận $n! \sim \sqrt{2\pi n} \left(\frac{n}{e}\right)^n$ (tức $\ln(n!) = n \ln n - n + \frac{1}{2}\ln(2\pi n) + O(1/n)$): cận hình chữ nhật đơn giản chỉ cho biết phần dư là $O(\ln n)$ chứ chưa tự suy ra hệ số $1/2$ trước $\ln n$ và hằng số $\sqrt{2\pi}$; để chứng minh công thức Stirling đầy đủ cần xấp xỉ hình thang/Euler–Maclaurin kết hợp tích phân Wallis hoặc phương pháp Laplace trong giải tích.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 13: §13.3 Approximating Sums (Integral Bounds), §13.4 Hanging Out Over the Barn (Harmonic Numbers), §13.5 Products and Stirling’s Approximation

#### Tiểu mục 3: Hệ thống ký hiệu tiệm cận (O, Omega, Theta, o, omega), định nghĩa lượng từ và các bẫy suy luận (`dm-spa-asymptotic-notations-pitfalls` — mức `core`)

Ký hiệu tiệm cận mô tả hành vi tăng trưởng của các hàm không âm $f, g: \mathbb{N} \to \mathbb{R}_{\ge 0}$ khi $n \to \infty$ mà không phụ thuộc vào hệ số hằng của phần cứng. Cận trên tiệm cận $f(n) = O(g(n))$ được định nghĩa chính xác bằng lượng từ: $\exists c > 0, \exists n_0 \in \mathbb{N}, \forall n \ge n_0, f(n) \le c \cdot g(n)$ (tương ứng $\limsup_{n \to \infty} f(n)/g(n) < \infty$). Đối xứng lại, cận dưới tiệm cận $f(n) = \Omega(g(n))$ đòi hỏi $\exists c > 0, \exists n_0 \in \mathbb{N}, \forall n \ge n_0, f(n) \ge c \cdot g(n)$; và cận chặt hai phía $f(n) = \Theta(g(n))$ đòi hỏi đồng thời $f = O(g)$ và $f = \Omega(g)$. Hai ký hiệu chặt nghiêm ngặt là $f(n) = o(g(n))$ (tức $\lim_{n \to \infty} f(n)/g(n) = 0$) và $f(n) = \omega(g(n))$ (tức $\lim_{n \to \infty} f(n)/g(n) = \infty$), thiết lập thứ bậc tăng trưởng chuẩn: $1 \prec \log n \prec n^a \prec b^n \prec n! \prec n^n$ (với $a > 0, b > 1$).

Nắm vững định nghĩa lượng từ giúp tránh ba ngụy biện tiệm cận rất phổ biến: (1) Hằng số $c$ trong định nghĩa $O(g(n))$ bắt buộc phải cố định độc lập với $n$; do đó tổng gồm $n$ số hạng mà mỗi số hạng là $O(i)$ không thể suy luận cơ học thành "$O(1) + \dots + O(n) = O(n)$" mà thực chất là $\sum_{i=1}^n c i = \Theta(n^2)$; (2) Quan hệ $f(n) = O(g(n))$ không bảo toàn qua phép lấy hàm mũ: $2n = O(n)$ nhưng $2^{2n} = 4^n \neq O(2^n)$ vì tỷ số $4^n / 2^n = 2^n \to \infty$; và (3) Ký hiệu dấu bằng trong $f(n) = O(g(n))$ thực chất là quan hệ thuộc tập hợp một chiều $f \in O(g)$ chứ không có tính đối xứng.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 13: §13.7 Asymptotic Notation (Little Oh, Big Oh, Theta, Omega, and Asymptotic Blunders)

### Chương 9 — Hệ thức đệ quy (Recurrence Relations) (`dm-recurrences`)

Hệ thức đệ quy (recurrence relation) là phương trình biểu diễn số hạng thứ $n$ của một dãy thông qua một hoặc nhiều số hạng đứng trước nó từ một mốc chỉ số trở đi, kết hợp với các điều kiện đầu (initial conditions) để xác định duy nhất toàn bộ dãy. Trong Khoa học Máy tính, hệ thức đệ quy xuất hiện ở khắp nơi: từ việc đếm số cấu trúc tổ hợp có ràng buộc (xâu nhị phân tránh mẫu, lát gạch, Tháp Hà Nội) đến phương trình biểu diễn thời gian thực thi của các thuật toán đệ quy và quy hoạch động.

Chương này trình bày một cách hệ thống và trọn vẹn lý thuyết giải hệ thức đệ quy: bắt đầu từ mô hình hóa bài toán thành phương trình truy hồi và vai trò của bậc truy hồi đối với số điều kiện đầu; phương pháp khai triển lặp kết hợp chứng minh quy nạp; lý thuyết không gian nghiệm của hệ thức đệ quy tuyến tính thuần nhất hệ số hằng và phương trình đặc trưng trong trường hợp nghiệm đơn phân biệt; cấu trúc nghiệm bội dạng $n^j r^n$ và nghiệm phức liên hợp khi đa thức đặc trưng có nghiệm lặp hoặc nghiệm phức; phương pháp hệ số bất định (kèm quy tắc nhân $n^s$ khi cộng hưởng) cho hệ không thuần nhất; và cuối cùng là ranh giới điều kiện áp dụng giữa phương trình đặc trưng với các hệ thức chia để trị thuộc Môn CS-16.

*Nguồn chương:* `dmoi-3e` (Chapter 2: Sequences (§2.1 Describing Sequences & §2.4 Solving Recurrence Relations)); `mit-6042j-2015` (Chapter 21: Recurrences (§21.1 The Towers of Hanoi & §21.4 Linear Recurrences))

#### Tiểu mục 1: Khái niệm hệ thức đệ quy, bậc của hệ thức, điều kiện đầu và mô hình hóa bài toán (`dm-recurrences-modeling` — mức `core`)

Một hệ thức đệ quy (recurrence relation) cho dãy $(a_n)_{n \ge 0}$ là một phương trình liên hệ các số hạng của dãy tại các chỉ số lệch nhau từ một mốc $n \ge n_0$ trở đi; khi hệ thức liên hệ $a_n$ với các số hạng đứng trước thuộc cửa sổ lùi hữu hạn $a_{n-1}, a_{n-2}, \dots, a_{n-k}$ (trong đó cả $a_n$ và $a_{n-k}$ đều thực sự xuất hiện), số nguyên dương $k$ được gọi là bậc (order) của hệ thức truy hồi. Bản thân phương trình truy hồi chỉ quy định quy luật liên hệ giữa các số hạng liên tiếp mà chưa xác định một dãy duy nhất nếu thiếu các điều kiện đầu (initial conditions). Tuy nhiên, để $k$ điều kiện đầu $a_0, a_1, \dots, a_{k-1}$ xác định **duy nhất** toàn bộ dãy $(a_n)_{n \ge 0}$ theo chiều tăng của chỉ số, hệ thức đệ quy phải viết được dưới dạng truy hồi tiến tường minh đơn trị $a_n = F(n, a_{n-1}, \dots, a_{n-k})$ mà vế phải luôn xác định trên miền giá trị của dãy với mọi $n \ge k$ (ngược lại, các quan hệ ẩn hoặc phi tuyến đa trị như $a_n^2 = a_{n-1}$, hoặc biểu thức phân thức có mẫu số triệt tiêu tại một chỉ số $n$, có thể sinh ra nhiều dãy nghiệm hoặc không tồn tại nghiệm). Đối với lớp quan trọng nhất là hệ thức đệ quy *tuyến tính thuần nhất bậc $k$* dạng $a_n = c_1 a_{n-1} + \dots + c_k a_{n-k}$ với $c_k \neq 0$, điều kiện đơn trị này luôn thỏa mãn theo cả hai chiều chỉ số và tập tất cả các nghiệm tạo thành một không gian vector đúng $k$ chiều được định vị duy nhất bởi bộ $k$ giá trị đầu $(a_0, \dots, a_{k-1})$.

Kỹ năng nền tảng nhất khi làm việc với hệ thức đệ quy là mô hình hóa bài toán đếm hoặc bài toán quá trình thành phương trình truy hồi bằng cách phân hoạch tập các cấu hình kích thước $n$ theo lựa chọn ở vị trí cuối cùng (hoặc đầu tiên) thành các lớp rời nhau quy về kích thước nhỏ hơn. Trong bài toán Tháp Hà Nội với $n$ đĩa, để chuyển $n$ đĩa từ cọc nguồn sang cọc đích mà không bao giờ đặt đĩa lớn lên đĩa nhỏ, ta bắt buộc phải chuyển $n-1$ đĩa trên cùng sang cọc trung gian ($T_{n-1}$ bước), chuyển đĩa lớn nhất sang cọc đích ($1$ bước), rồi chuyển $n-1$ đĩa từ cọc trung gian về cọc đích ($T_{n-1}$ bước), thu được hệ bậc nhất $T_n = 2 T_{n-1} + 1$ với điều kiện đầu $T_0 = 0$ (hoặc $T_1 = 1$). Tương tự, khi đếm số xâu nhị phân độ dài $n$ không chứa hai bit `11` liên tiếp, ta phân hoạch theo bit cuối cùng: nếu bit cuối là `0` thì $n-1$ bit đầu là bất kỳ xâu hợp lệ nào độ dài $n-1$ (có $a_{n-1}$ xâu); nếu bit cuối là `1` thì bit kế trước bắt buộc phải là `0` và $n-2$ bit đầu là xâu hợp lệ độ dài $n-2$ (có $a_{n-2}$ xâu), dẫn tới hệ thức Fibonacci $a_n = a_{n-1} + a_{n-2}$ với $n \ge 2$ và hai điều kiện đầu $a_0 = 1, a_1 = 2$.

> **Nguồn đối chiếu:** `dmoi-3e`: Chapter 2: §2.1 Describing Sequences & §2.4 Solving Recurrence Relations (Introduction and Modeling) | `mit-6042j-2015`: Chapter 21: §21.1 The Towers of Hanoi & §21.4.1 Climbing Stairs / Fibonacci Modeling

#### Tiểu mục 2: Phương pháp khai triển lặp (Iteration / Unrolling), sai phân triệt tiêu và chứng minh bằng quy nạp (`dm-recurrences-iteration-induction` — mức `core`)

Trước khi dùng tới các công cụ đại số bậc cao, phương pháp trực tiếp nhất để tìm công thức dạng đóng (closed-form solution) của các hệ thức đệ quy bậc nhất dạng $a_n = c \cdot a_{n-1} + g(n)$ là phương pháp khai triển lặp ngược (backward substitution / unrolling) hoặc khai triển sai phân triệt tiêu (telescoping). Trong khai triển lặp ngược, ta thay thế liên tiếp $a_{n-1} = c \cdot a_{n-2} + g(n-1)$, rồi thay $a_{n-2}$ qua $a_{n-3}$... sau $i$ bước khai triển ta nhận diện mẫu tổng quát $a_n = c^i a_{n-i} + \sum_{j=0}^{i-1} c^j g(n-j)$. Khi đẩy số bước khai triển chạm tới điều kiện đầu tại $i = n$ (tức $n - i = 0$), biểu thức quy hoàn toàn về một tổng hữu hạn quen thuộc (cấp số cộng, cấp số nhân hoặc tổng sai phân): chẳng hạn với Tháp Hà Nội $T_n = 2 T_{n-1} + 1$, sau $n$ bước khai triển ta được $T_n = 2^n T_0 + \sum_{j=0}^{n-1} 2^j = 2^n - 1$; với hệ $a_n = a_{n-1} + n$, tổng sai phân $\sum_{k=1}^n (a_k - a_{k-1}) = a_n - a_0$ cho ngay $a_n = a_0 + \frac{n(n+1)}{2}$.

Một nguyên tắc phương pháp luận bắt buộc trong Toán rời rạc là phân biệt rõ quá trình *khám phá công thức* (heuristic discovery qua khai triển vài bước rồi nhận diện quy luật dấu chấm lửng `...`) với quá trình *chứng minh tính đúng đắn* của công thức đó. Mọi biểu thức dạng đóng dự đoán được từ phép khai triển lặp đều có thể chứa sai sót ở chỉ số biên của dấu tổng hoặc số mũ; do đó, bước khép kín quy trình chuẩn mực là sử dụng Quy nạp toán học (thường hoặc mạnh tùy theo bậc $k$ của hệ thức) để kiểm chứng rằng công thức dạng đóng thỏa mãn tất cả các điều kiện đầu và thỏa mãn chính xác phương trình truy hồi tại bước chuyển tiếp.

> **Nguồn đối chiếu:** `dmoi-3e`: Chapter 2: §2.4 Solving Recurrence Relations — Telescoping and Iteration | `mit-6042j-2015`: Chapter 21: §21.1.2 Guess and Verify by Induction

#### Tiểu mục 3: Hệ thức đệ quy tuyến tính thuần nhất hệ số hằng và Phương trình đặc trưng (Nghiệm đơn phân biệt) (`dm-recurrences-linear-homogeneous-distinct` — mức `core`)

Một hệ thức đệ quy được gọi là *tuyến tính thuần nhất hệ số hằng* (linear homogeneous recurrence relation with constant coefficients) bậc $k$ nếu nó viết được dưới dạng chuẩn $a_n - c_1 a_{n-1} - c_2 a_{n-2} - \dots - c_k a_{n-k} = 0$, trong đó các hệ số $c_1, c_2, \dots, c_k$ là các hằng số cố định (không phụ thuộc vào $n$), $c_k \neq 0$, các số hạng $a_{n-i}$ chỉ xuất hiện ở bậc nhất (tuyến tính) và vế phải bằng $0$ (thuần nhất). Tính chất cấu trúc cốt lõi của hệ tuyến tính thuần nhất là Nguyên lý chồng chất nghiệm (Superposition / Linearity Principle): nếu hai dãy $(u_n)$ và $(v_n)$ đều là nghiệm của phương trình thuần nhất, thì mọi tổ hợp tuyến tính $w_n = \alpha u_n + \beta v_n$ (với hằng số $\alpha, \beta$ bất kỳ) cũng là nghiệm; hơn nữa, tập hợp tất cả các nghiệm của phương trình bậc $k$ tạo thành một không gian vector có số chiều đúng bằng $k$.

Vì nghiệm của phương trình bậc nhất $a_n = c_1 a_{n-1}$ có dạng hàm mũ $a_n = r^n$, ta tìm kiếm các nghiệm cơ sở khác không có dạng $a_n = r^n$ ($r \neq 0$) cho hệ bậc $k$. Thay $a_n = r^n$ vào phương trình thuần nhất và chia hai vế cho $r^{n-k}$, ta thu được Phương trình đặc trưng (Characteristic Equation): $r^k - c_1 r^{k-1} - c_2 r^{k-2} - \dots - c_{k-1} r - c_k = 0$. Khi đa thức đặc trưng bậc $k$ này có đúng $k$ nghiệm đơn phân biệt $r_1, r_2, \dots, r_k$, thì $k$ dãy hàm mũ $(r_1^n), (r_2^n), \dots, (r_k^n)$ là độc lập tuyến tính (nhờ định thức Vandermonde của các nghiệm phân biệt khác $0$) và lập thành một cơ sở của không gian nghiệm. Khi đó, nghiệm tổng quát của hệ thuần nhất có dạng duy nhất $a_n = \alpha_1 r_1^n + \alpha_2 r_2^n + \dots + \alpha_k r_k^n$, và các hằng số $\alpha_1, \dots, \alpha_k$ được xác định duy nhất bằng cách giải hệ $k$ phương trình tuyến tính sinh ra từ $k$ điều kiện đầu $a_0, a_1, \dots, a_{k-1}$ (điển hình như công thức Binet cho dãy Fibonacci từ phương trình $r^2 - r - 1 = 0$ với hai nghiệm $r_{1,2} = \frac{1 \pm \sqrt{5}}{2}$).

> **Nguồn đối chiếu:** `dmoi-3e`: Chapter 2: §2.4 Solving Recurrence Relations — The Characteristic Root Technique (Distinct Roots) | `mit-6042j-2015`: Chapter 21: §21.4.1 Solving Homogeneous Linear Recurrences (Characteristic Equation and Distinct Roots)

#### Tiểu mục 4: Nghiệm bội của phương trình đặc trưng (Repeated Roots) và trường hợp Nghiệm phức liên hợp (`dm-recurrences-repeated-complex-roots` — mức `core`)

Khi đa thức đặc trưng $P(r) = r^k - c_1 r^{k-1} - \dots - c_k$ có nghiệm bội (repeated root), số nghiệm phân biệt ít hơn $k$ nên chỉ riêng các dãy dạng $r^n$ không đủ tạo thành cơ sở $k$ chiều cho không gian nghiệm. Cơ chế toán học giải thích các nghiệm bổ sung xuất phát từ tính chất của nghiệm bội: nếu $r$ là nghiệm có bội $m \ge 2$ của $P(x) = 0$, thì $r$ đồng thời là nghiệm của các đạo hàm hình thức $P'(x) = 0, P''(x) = 0, \dots, P^{(m-1)}(x) = 0$ (hoặc nhìn hoàn toàn bằng đại số sai phân qua toán tử dịch chuyển $E(a_n) = a_{n+1}$, toán tử $(E - r I)^m$ triệt tiêu mọi đa thức theo $n$ bậc nhỏ hơn $m$ nhân với $r^n$). Hệ quả là một nghiệm đặc trưng $r$ có bội $m$ đóng góp đúng $m$ nghiệm cơ sở độc lập tuyến tính là $r^n, \, n r^n, \, n^2 r^n, \, \dots, \, n^{m-1} r^n$, tức thành phần đóng góp của nghiệm $r$ trong nghiệm tổng quát có dạng $( \alpha_0 + \alpha_1 n + \alpha_2 n^2 + \dots + \alpha_{m-1} n^{m-1} ) r^n$. Chẳng hạn, hệ $a_n = 4 a_{n-1} - 4 a_{n-2}$ có phương trình đặc trưng $r^2 - 4r + 4 = (r - 2)^2 = 0$ với nghiệm kép $r = 2$ (bội $m = 2$), nên nghiệm tổng quát là $a_n = (\alpha_0 + \alpha_1 n) 2^n$.

Trong trường hợp đa thức đặc trưng hệ số thực có cặp nghiệm phức liên hợp $r_{1,2} = a \pm b i$ (với $b \neq 0$, ví dụ hệ $a_n = a_{n-1} - a_{n-2}$ có phương trình $r^2 - r + 1 = 0$ với nghiệm $\frac{1 \pm i\sqrt{3}}{2}$), công thức tổ hợp tuyến tính tổng quát $c_1 r_1^n + c_2 r_2^n$ vẫn hoàn toàn hợp lệ trên trường số phức $\mathbb{C}$ (sử dụng kiến thức số phức và dạng lượng giác đã thiết lập ở Môn CS-02). Để biểu diễn nghiệm của một dãy thực bằng các hàm giá trị thực, ta chuyển nghiệm phức sang dạng lượng giác $r = \rho (\cos \theta \pm i \sin \theta)$ với mô-đun $\rho = \sqrt{a^2 + b^2}$ và góc $\theta = \text{atan2}(b, a)$. Theo công thức De Moivre, $r^n = \rho^n (\cos(n\theta) \pm i \sin(n\theta))$; việc kết hợp tuyến tính hai nghiệm liên hợp cho phép viết thành phần nghiệm thực tương ứng dưới dạng $\rho^n ( A \cos(n\theta) + B \sin(n\theta) )$ với $A, B \in \mathbb{R}$, làm lộ rõ bản chất dao động tuần hoàn biên độ $\rho^n$ của dãy.

> **Nguồn đối chiếu:** `dmoi-3e`: Chapter 2: §2.4 Characteristic Root Technique — Repeated Roots | `mit-6042j-2015`: Chapter 21: §21.4.1 Homogeneous Linear Recurrences (Multiple Roots Theorem and Complex Roots)

#### Tiểu mục 5: Hệ thức đệ quy tuyến tính không thuần nhất, nghiệm riêng và phương pháp hệ số bất định (`dm-recurrences-nonhomogeneous-particular` — mức `core`)

Một hệ thức đệ quy tuyến tính hệ số hằng được gọi là *không thuần nhất* (nonhomogeneous) khi xuất hiện thành phần ngoại lực khác không $f(n)$ ở vế phải: $a_n - c_1 a_{n-1} - \dots - c_k a_{n-k} = f(n)$. Nếu gọi $(a_n^{(p)})$ là một nghiệm riêng (particular solution) bất kỳ thỏa mãn phương trình không thuần nhất, và $(a_n)$ là một nghiệm tùy ý khác của cùng phương trình đó, thì hiệu của chúng $h_n = a_n - a_n^{(p)}$ làm triệt tiêu vế phải $f(n) - f(n) = 0$ nên $(h_n)$ phải là nghiệm của phương trình thuần nhất liên kết (associated homogeneous recurrence). Do đó, nghiệm tổng quát của hệ không thuần nhất luôn bằng tổng của nghiệm tổng quát hệ thuần nhất cộng với một nghiệm riêng: $a_n = a_n^{(h)} + a_n^{(p)}$. Lưu ý quy trình bắt buộc: ta chỉ được thay các điều kiện đầu $a_0, a_1, \dots, a_{k-1}$ vào nghiệm tổng quát đầy đủ $a_n = a_n^{(h)} + a_n^{(p)}$ ở bước cuối cùng để giải tìm các hằng số $\alpha_i$, tuyệt đối không giải $\alpha_i$ trên riêng phần thuần nhất $a_n^{(h)}$.

Để tìm nghiệm riêng $a_n^{(p)}$ khi $f(n)$ có dạng đa thức $P_d(n)$ bậc $d$, hàm mũ $s^n$ hoặc tích $P_d(n) \cdot s^n$, ta sử dụng Phương pháp hệ số bất định (Method of Undetermined Coefficients) có tính đến hiện tượng cộng hưởng với nghiệm đặc trưng: nếu cơ số $s$ (với đa thức thuần túy $P_d(n)$ thì xem như $s = 1^n$, tức $s = 1$) *không phải* là nghiệm của phương trình đặc trưng thuần nhất, ta chọn nghiệm riêng thử có dạng $a_n^{(p)} = (A_0 + A_1 n + \dots + A_d n^d) s^n$. Ngược lại, nếu $s$ trùng với một nghiệm của phương trình đặc trưng có bội $m \ge 1$, thì mọi số hạng dạng $n^j s^n$ với $j < m$ đều bị vế trái triệt tiêu về $0$; khi đó ta bắt buộc phải nhân thêm thừa số $n^m$ vào dạng thử, tức chọn $a_n^{(p)} = n^m (A_0 + A_1 n + \dots + A_d n^d) s^n$, rồi thế vào phương trình để đồng nhất các hệ số $A_0, \dots, A_d$.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 21: §21.4.2 Inhomogeneous Linear Recurrences (Particular Solution and Wise Guess Rule with Multiplicity) | `dmoi-3e`: Chapter 2: §2.4 Solving Nonhomogeneous Recurrence Relations

#### Tiểu mục 6: Giới hạn áp dụng của phương trình đặc trưng và cầu nối sang truy hồi chia để trị (`dm-recurrences-limits-divide-conquer-bridge` — mức `core`)

Một yêu cầu học thuật cốt lõi khi sử dụng phương trình đặc trưng là nhận diện chính xác điều kiện áp dụng và giới hạn của phương pháp. Kỹ thuật nghiệm đặc trưng dựa hoàn toàn vào ba giả thiết: (1) phương trình phải là *tuyến tính* đối với các số hạng của dãy; (2) các hệ số $c_1, \dots, c_k$ phải là *hằng số* không phụ thuộc vào $n$; và (3) các chỉ số lùi phải là *bước dịch tịnh tiến cố định* $n - 1, n - 2, \dots, n - k$. Khi bất kỳ giả thiết nào trong ba giả thiết này bị vi phạm, việc đặt $a_n = r^n$ đều không rút gọn được về đa thức đặc trưng hằng. Cụ thể, với hệ thức hệ số biến thiên như $a_n = n a_{n-1}$ (dãy giai thừa $n!$), hoặc hệ thức phi tuyến tích chập như số Catalan $C_n = \sum_{i=0}^{n-1} C_i C_{n-1-i}$ hay $a_n = a_{n-1}^2 + 1$, ta không thể dùng phương trình đặc trưng mà phải chuyển sang khai triển tích, đổi biến số (như lấy logarit khi chỉ có phép nhân lũy thừa) hoặc dùng công cụ Hàm sinh ở Chương 10.

Đặc biệt, trong phân tích thuật toán, một lớp hệ thức đệ quy cực kỳ phổ biến khác là *hệ thức đệ quy chia để trị* (divide-and-conquer recurrences) có dạng $T(n) = a T(n/b) + f(n)$ (ví dụ Merge Sort $T(n) = 2 T(n/2) + \Theta(n)$ hoặc Tìm kiếm nhị phân $T(n) = T(n/2) + \Theta(1)$). Ở đây chỉ số không lùi một lượng hằng số $n - k$ mà co lại theo tỷ lệ nhân $n / b$, do đó không áp dụng trực tiếp phương trình đặc trưng theo biến $n$ (dù trong một số trường hợp đặc biệt khi đặt $n = b^m$ ta có thể đổi biến về truy hồi tuyến tính theo $m = \log_b n$). Để giữ mạch kiến thức rõ ràng, toàn bộ các kỹ thuật chuyên biệt cho hệ thức chia để trị—bao gồm Phương pháp cây đệ quy (Recursion-Tree Method), Phương pháp thế (Substitution Method), Định lý Thầy (Master Theorem) và phương pháp Akra–Bazzi—sẽ được nghiên cứu trọn vẹn ở Chương 2 của Môn CS-16 (Phân tích và thiết kế thuật toán).

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 21: §21.2 Merge Sort & §21.3 Divide-and-Conquer Recurrences vs §21.4 Linear Recurrences | `erickson-algorithms`: Chapter 1: Recursion (§1.4–1.7 Solving Divide-and-Conquer Recurrences via Recursion Trees)

### Chương 10 — Hàm sinh và ứng dụng trong bài toán đếm – truy hồi (`dm-generating-functions`)

Hàm sinh (generating functions) là một trong những ý tưởng đẹp và mạnh nhất của Toán rời rạc: nó đóng gói toàn bộ một dãy số vô hạn $(g_0, g_1, g_2, \dots)$ thành một đối tượng đại số duy nhất là một chuỗi lũy thừa hình thức $G(x) = \sum_{n=0}^{\infty} g_n x^n$, biến các thao tác phức tạp trên chỉ số dãy (dịch chuyển, tổng chập, hệ thức đệ quy) thành các phép toán đa thức và phân thức quen thuộc. Chương này trình bày chuỗi lũy thừa hình thức, các phép toán đại số trên hàm sinh, quy tắc tổng chập (convolution) cho bài toán đếm có ràng buộc, và quy trình giải hệ thức đệ quy bằng phân tích phân thức tối giản.

*Nguồn chương:* `mit-6042j-2015` (Chapter 15: Generating Functions (§15.1–15.5 Infinite Series, Operations on Generating Functions, Counting with Generating Functions, Solving Recurrences))

#### Tiểu mục 1: Hàm sinh thường, chuỗi lũy thừa hình thức (Formal Power Series) và các hàm sinh cơ sở (`dm-gf-formal-power-series` — mức `core`)

Hàm sinh thường (Ordinary Generating Function — OGF) của một dãy số vô hạn $(g_0, g_1, g_2, \dots)$ là chuỗi lũy thừa $G(x) = g_0 + g_1 x + g_2 x^2 + \dots = \sum_{n=0}^{\infty} g_n x^n$. Trong Toán rời rạc và tổ hợp, $G(x)$ được đối xử trước hết như một *chuỗi lũy thừa hình thức* (formal power series): biến $x$ không nhất thiết phải nhận một giá trị số thực cụ thể mà đóng vai trò là ký hiệu giữ chỗ (placeholder) gắn thẻ lũy thừa $x^n$ cho số hạng thứ $n$ của dãy; ta ký hiệu $[x^n] G(x) = g_n$ là toán tử trích xuất hệ số của $x^n$. Hai chuỗi lũy thừa hình thức bằng nhau khi và chỉ khi mọi hệ số tương ứng của chúng bằng nhau với mọi $n \ge 0$.

Nhờ định nghĩa phép nhân chuỗi theo quy tắc Cauchy, nghịch đảo nhân của đa thức $(1 - x)$ trong vành chuỗi lũy thừa hình thức chính là chuỗi toàn hệ số $1$: $(1 - x)(1 + x + x^2 + \dots) = 1$, hay $\frac{1}{1 - x} = \sum_{n=0}^{\infty} x^n$. Thay $x$ bởi $a x$ hoặc $x^k$, ta lập tức thu được từ điển các hàm sinh nền tảng: dãy cấp số nhân $(a^n)$ có hàm sinh $\frac{1}{1 - a x} = \sum_{n=0}^{\infty} a^n x^n$; dãy xen kẽ có bước nhảy $k$ có hàm sinh $\frac{1}{1 - x^k} = 1 + x^k + x^{2k} + \dots$; và theo Định lý Nhị thức mở rộng, hàm sinh $\frac{1}{(1 - x)^k} = \sum_{n=0}^{\infty} \binom{n + k - 1}{k - 1} x^n$ đóng gói chính xác số nghiệm nguyên không âm của bài toán chia vật vào $k$ hộp.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 15: §15.1 Infinite Series & Formal Power Series

#### Tiểu mục 2: Các phép biến đổi trên hàm sinh: Tổ hợp tuyến tính, Dịch chỉ số, Đạo hàm và Tích chập (`dm-gf-operations-shifting-differentiation` — mức `core`)

Sức mạnh của hàm sinh nằm ở sự tương ứng 1–1 giữa các phép biến đổi trên dãy $(f_n), (g_n)$ và các phép toán đại số trên hàm sinh $F(x), G(x)$. Phép cộng tuyến tính $\alpha F(x) + \beta G(x)$ tạo ra hàm sinh của dãy $(\alpha f_n + \beta g_n)$. Phép nhân hàm sinh với $x^k$ tương ứng với phép *dịch phải chỉ số* $k$ bước (chèn $k$ số $0$ vào đầu dãy): $x^k G(x) = \sum_{n=k}^{\infty} g_{n-k} x^n$; ngược lại, phép trừ đi các số hạng đầu rồi chia cho $x^k$ tương ứng với phép *dịch trái chỉ số*: $\frac{G(x) - g_0 - g_1 x - \dots - g_{k-1} x^{k-1}}{x^k} = \sum_{n=0}^{\infty} g_{n+k} x^n$.

Khi cần nhân số hạng $g_n$ với chính chỉ số $n$, ta sử dụng phép lấy đạo hàm hình thức: $G'(x) = \sum_{n=1}^{\infty} n g_n x^{n-1}$, suy ra $x G'(x) = \sum_{n=0}^{\infty} n g_n x^n$ (chẳng hạn lấy đạo hàm của $\frac{1}{1-x}$ cho ngay $\frac{1}{(1-x)^2} = \sum_{n=0}^{\infty} (n+1) x^n$). Đặc biệt, phép nhân hai hàm sinh $H(x) = F(x) G(x)$ tương ứng với phép *tích chập* (convolution) của hai dãy: hệ số của $x^n$ trong tích $F(x) G(x)$ bằng tổng mọi cách ghép cặp chỉ số có tổng bằng $n$, tức $h_n = [x^n](F(x)G(x)) = \sum_{k=0}^n f_k g_{n-k}$; hệ quả là nhân một hàm sinh $F(x)$ với $\frac{1}{1-x}$ sẽ tạo ra hàm sinh của dãy tổng tiền tố $s_n = \sum_{k=0}^n f_k$.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 15: §15.2 Operations on Generating Functions (Scaling, Addition, Right-Shift, Differentiation, Products/Convolution)

#### Tiểu mục 3: Mô hình hóa bài toán đếm tổ hợp có ràng buộc bằng Quy tắc Tích chập (`dm-gf-counting-convolutions-partitions` — mức `core`)

Quy tắc tích chập biến hàm sinh thành một cỗ máy tự động cho các bài toán chọn vật có ràng buộc phức tạp: giả sử cần chọn tổng cộng $n$ phần tử từ $m$ loại khác nhau, trong đó số lượng phần tử được phép chọn từ loại thứ $i$ bị ràng buộc bởi tập điều kiện $S_i$ (hoặc có $a_{i, k}$ cách chọn $k$ phần tử thuộc loại $i$). Khi đó, loại thứ $i$ được biểu diễn bởi đa thức/chuỗi nhân tử $A_i(x) = \sum_{k \ge 0} a_{i, k} x^k$, và số cách chọn tổng cộng $n$ phần tử từ cả $m$ loại chính là hệ số $[x^n]$ của hàm sinh tích $A_1(x) A_2(x) \cdots A_m(x)$.

Ví dụ, nếu một loại vật chỉ được chọn số lượng chẵn ($0, 2, 4, \dots$), nhân tử tương ứng là $1 + x^2 + x^4 + \dots = \frac{1}{1 - x^2}$; nếu một loại vật chỉ được chọn tối đa $c$ lần ($0, 1, \dots, c$), nhân tử tương ứng là tổng cấp số nhân hữu hạn $1 + x + \dots + x^c = \frac{1 - x^{c+1}}{1 - x}$. Khi nhân các phân thức này lại với nhau, nhiều thừa số ở tử số và mẫu số tự động giản ước, rút gọn một bài toán tổ hợp tưởng như phải chia hàng chục trường hợp về việc tra cứu một hệ số nhị thức duy nhất từ khai triển $(1 - x)^{-k}$.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 15: §15.3 Counting with Generating Functions

#### Tiểu mục 4: Giải hệ thức đệ quy bằng Hàm sinh, Phân tích phân thức tối giản và Giới hạn chuỗi hình thức (`dm-gf-solving-recurrences-partial-fractions` — mức `core`)

Hàm sinh cung cấp một phương pháp thống nhất và hoàn toàn cơ giới để giải các hệ thức đệ quy tuyến tính (kể cả không thuần nhất) mà không cần nhớ riêng các mẫu đoán nghiệm. Quy trình gồm bốn bước: (1) Đặt $G(x) = \sum_{n=0}^{\infty} a_n x^n$, nhân hai vế của hệ thức đệ quy với $x^n$ rồi lấy tổng trên mọi chỉ số $n \ge k$ nơi hệ thức có hiệu lực; (2) Biến đổi các tổng dịch chỉ số $\sum_{n=k}^{\infty} a_{n-i} x^n = x^i (G(x) - a_0 - \dots - a_{i-1} x^{i-1})$ bằng cách thế trực tiếp các điều kiện đầu vào để thu được một phương trình đại số bậc nhất theo ẩn $G(x)$; (3) Giải phương trình đại số để biểu diễn $G(x)$ dưới dạng phân thức hữu tỉ $\frac{P(x)}{Q(x)}$ (trong đó mẫu số $Q(x) = 1 - c_1 x - c_2 x^2 - \dots - c_k x^k$ chính là đa thức phản chiếu $x^k P_{\text{char}}(1/x)$ của đa thức đặc trưng); và (4) Phân tích $\frac{P(x)}{Q(x)}$ thành tổng các phân thức tối giản (partial fraction decomposition) dạng $\frac{A_j}{(1 - r_i x)^j}$, rồi đọc trực tiếp hệ số $[x^n]$ của từng phân thức để thu được công thức dạng đóng của $a_n$.

Về mặt giới hạn học thuật, cần phân biệt rõ hai góc nhìn về chuỗi lũy thừa: trong đại số và tổ hợp, ta làm việc trên vành chuỗi lũy thừa hình thức $\mathbb{R}[[x]]$, nơi phép cộng, nhân, đạo hàm và nghịch đảo của chuỗi có hệ số tự do $g_0 \neq 0$ đều được định nghĩa thuần túy trên hệ số mà không cần chuỗi hội tụ tại một số thực $x \neq 0$ nào (ví dụ chuỗi $\sum_{n=0}^{\infty} n! x^n$ có bán kính hội tụ bằng $0$ nhưng vẫn là chuỗi hình thức hợp lệ). Ngược lại, khi ta muốn thay một giá trị số cụ thể của $x$ vào $G(x)$ để tính tổng vô hạn hoặc ước lượng tiệm cận bằng giải tích phức, ta bắt buộc phải xét miền hội tụ tuyệt đối $|x| < R$ thuộc phạm vi môn Giải tích.

> **Nguồn đối chiếu:** `mit-6042j-2015`: Chapter 15: §15.4 Finding a Closed Form (Partial Fractions & Solving Linear Recurrences with Generating Functions)

---

## CS-25: Hệ điều hành (Chương mẫu M2: Bộ nhớ ảo và Phân trang) (`operating-systems`)

- **Thuộc khối:** Khối IV — Hệ thống máy tính
- **Phân loại:** `core`
- **Điều kiện tiên quyết:**
  - `computer-architecture` (*required*): Cần hiểu thanh ghi, chế độ đặc quyền CPU (user/supervisor mode), bộ nhớ cache SRAM/DRAM và vai trò của phần cứng dịch địa chỉ (MMU/TLB).
  - `linux-system-programming` (*required*): Cần hiểu giao diện tiến trình, lời gọi hệ thống (fork, exec, mmap) và bố cục không gian địa chỉ từ góc nhìn ứng dụng trước khi giải phẫu cơ chế bên trong kernel.
  - `data-structures` (*required*): Cần nắm vững mảng, danh sách liên kết, cây nhiều nhánh (radix/page trees) và bảng băm để phân tích cấu trúc bảng trang và thuật toán thay thế trang.

### Tổng quan môn học

Môn Hệ điều hành nghiên cứu cách phần mềm hệ thống biến đổi các tài nguyên vật lý thô sơ, hữu hạn của phần cứng (CPU, bộ nhớ DRAM, thiết bị lưu trữ khối) thành các trừu tượng hóa ảo hóa mạnh mẽ, an toàn và dễ sử dụng cho các chương trình ứng dụng. Thay vì mô tả hệ điều hành như một tập lệnh quản trị hệ thống, môn học mổ xẻ sự phối hợp chặt chẽ giữa cơ chế phần cứng (hardware mechanisms) và chính sách điều phối của nhân hệ điều hành (OS kernel policies) qua ba trụ cột: ảo hóa bộ xử lý, ảo hóa bộ nhớ và lưu trữ bền vững chịu lỗi.

Trong khuôn khổ mốc kiểm định chất lượng M2, chương Hệ thống cốt lõi được biên soạn toàn văn dưới đây là Chương Bộ nhớ ảo và Phân trang (`os-virtual-memory`). Chương học giải thích trọn vẹn cách phần cứng MMU và hệ điều hành tạo ra ảo ảnh rằng mỗi tiến trình sở hữu một không gian địa chỉ riêng tư, liên tục và khổng lồ: đi từ bài toán cô lập bộ nhớ, dịch địa chỉ động bằng thanh ghi cơ sở/giới hạn và phân đoạn, sang cơ chế phân trang (paging), bài toán kích thước bảng trang và cấu trúc bảng trang đa cấp (như Sv39 trên RISC-V và 4-level paging trên x86-64), bộ đệm dịch địa chỉ TLB, cơ chế xử lý ngắt thiếu trang (page fault) kết hợp không gian hoán đổi (swap), các chính sách thay thế trang (OPT, FIFO, nghịch lý Belady, LRU, xấp xỉ Clock, Working Set / Thrashing) và các cơ chế tối ưu thực tế như Copy-on-Write (`fork`) cùng các giới hạn vật lý của phần cứng hiện đại.

### Giới hạn học thuật (`boundaries`)

- Luôn tách bạch rõ Cơ chế (Mechanism — phần cứng MMU/TLB và trình xử lý trap của OS thực hiện việc dịch địa chỉ hoặc bắt lỗi thiếu trang như thế nào) với Chính sách (Policy — hệ điều hành quyết định chọn trang nào để trục xuất khi bộ nhớ đầy).
- Làm rõ sự khác biệt giữa kiến trúc có TLB do phần cứng tự duyệt bảng trang (hardware-managed TLB như x86-64, RISC-V Sv39) với kiến trúc có TLB do phần mềm xử lý (software-managed TLB).
- Đây là chương mẫu hệ thống hoàn chỉnh cho cổng kiểm định M2; bốn chương còn lại của Môn CS-25 (Ảo hóa CPU, Lập lịch CPU, Đồng bộ hóa Kernel & Deadlock, Hệ thống tệp & Crash Consistency) đã được đặc tả trong COURSE-CATALOG.md và sẽ được mở rộng toàn văn ở chặng M4.

### Nguồn giáo trình của môn học

- **Operating Systems: Three Easy Pieces (OSTEP)** (`ostep-v110`, *primary*): Part I — Virtualizing Memory: Chapters 13–23 (Address Spaces, Address Translation, Segmentation, Free-Space Management, Paging, TLBs, Advanced Page Tables, Swapping Mechanisms and Policies) — URL: https://pages.cs.wisc.edu/~remzi/OSTEP/
- **xv6: a simple, Unix-like teaching operating system (MIT 6.1810)** (`mit-xv6-2025`, *primary*): Chapter 3: Page Tables (§3.1 Paging hardware Sv39, §3.2 Kernel address space, §3.3 Code: creating an address space) & Chapter 4 (§4.6 Page-fault exceptions) — URL: https://pdos.csail.mit.edu/6.1810/2025/xv6.html

### Chương 3 (Mẫu M2) — Bộ nhớ ảo và Phân trang (Virtual Memory & Paging) (`os-virtual-memory`)

Chương này giải quyết một trong những câu hỏi nền tảng nhất của Hệ thống Máy tính: làm thế nào hàng chục tiến trình độc lập có thể cùng chia sẻ một bộ nhớ vật lý DRAM hữu hạn mà không thể đọc trộm hay ghi đè dữ liệu của nhau, đồng thời mỗi tiến trình lại nhìn thấy một không gian địa chỉ thống nhất bắt đầu từ địa chỉ cố định và có thể lớn hơn cả dung lượng RAM vật lý? Nội dung dẫn dắt tuần tự qua sáu tiểu mục từ trừu tượng hóa không gian địa chỉ, cơ chế phần cứng MMU và phân đoạn, cấu trúc phân trang và bảng trang cây đa cấp, bộ đệm tăng tốc TLB, quy trình xử lý lỗi thiếu trang và chính sách thay thế trang, đến Copy-on-Write và các giới hạn phần cứng thực tế.

*Nguồn chương:* `ostep-v110` (Chapters 13, 14, 15, 16, 18, 19, 20, 21, 22, 23 (Complete Virtual Memory Sequence)); `mit-xv6-2025` (Chapter 3: Page Tables (RISC-V Sv39 3-level Page Table Architecture))

#### Tiểu mục 1: Trừu tượng hóa Không gian địa chỉ (Address Space) và ba mục tiêu cốt lõi của Bộ nhớ ảo (`os-vm-address-space-abstraction` — mức `core`)

Trong các hệ thống sơ khai không có ảo hóa bộ nhớ, chương trình ứng dụng truy cập trực tiếp vào địa chỉ bộ nhớ vật lý (physical memory), khiến việc chạy đồng thời nhiều tiến trình vừa đòi hỏi trình liên kết phải biết trước vị trí RAM trống, vừa làm toàn bộ hệ thống dễ dàng sập hoặc lộ dữ liệu nếu một tiến trình dùng con trỏ lỗi ghi đè lên vùng nhớ của tiến trình khác hoặc của chính hệ điều hành. Để giải quyết triệt để vấn đề này, hệ điều hành phối hợp với phần cứng tạo ra trừu tượng hóa Không gian địa chỉ (Address Space): một khung nhìn bộ nhớ riêng tư, tuyến tính và có trật tự gồm vùng mã lệnh (Code/Text), vùng dữ liệu tĩnh, vùng nhớ tự do (Heap) mở rộng theo một chiều và ngăn xếp lời gọi (Stack) mở rộng theo chiều ngược lại.

Mọi địa chỉ mà lập trình viên nhìn thấy khi in giá trị một con trỏ trong C/C++ hay trong trình gỡ lỗi GDB đều là *địa chỉ ảo* (virtual address), hoàn toàn không phải là địa chỉ vật lý trên thanh DRAM. Hệ thống bộ nhớ ảo được thiết kế để thỏa mãn đồng thời ba mục tiêu thiết kế: (1) *Tính trong suốt* (Transparency) — chương trình hoạt động như thể nó độc chiếm toàn bộ bộ nhớ mà không cần biết dữ liệu của mình đang được đặt rải rác ở những khung vật lý nào; (2) *Tính hiệu quả* (Efficiency) — cả về thời gian (quá trình dịch địa chỉ không làm chậm từng lệnh nạp/lưu nhờ hỗ trợ phần cứng như TLB) lẫn không gian (cấu trúc dữ liệu quản lý ánh xạ không chiếm quá nhiều RAM); và (3) *Tính bảo vệ và cô lập* (Protection & Isolation) — một tiến trình hoàn toàn không có khả năng tạo ra địa chỉ ảo ánh xạ trái phép sang vùng nhớ vật lý của tiến trình khác hay của nhân hệ điều hành.

> **Nguồn đối chiếu:** `ostep-v110`: Chapter 13: The Abstraction: Address Spaces (§13.1–13.4 The Address Space, Goals of Virtual Memory)

#### Tiểu mục 2: Dịch địa chỉ bằng phần cứng (MMU), Thanh ghi Cơ sở/Giới hạn (Base & Bounds) và Phân đoạn (Segmentation) (`os-vm-hardware-translation-segmentation` — mức `core`)

Để vừa đạt hiệu năng thực thi trực tiếp trên CPU vừa giữ quyền kiểm soát tuyệt đối của hệ điều hành, cơ chế Dịch địa chỉ dựa trên phần cứng (Hardware-based Address Translation) đặt một bộ phận chuyên dụng gọi là Đơn vị Quản lý Bộ nhớ (Memory Management Unit — MMU) ngay trên đường đi của mọi truy cập bộ nhớ từ CPU. Trong mô hình đơn giản nhất gọi là Định vị lại động bằng Thanh ghi Cơ sở và Giới hạn (Dynamic Relocation / Base and Bounds), mỗi khi tiến trình chạy, hệ điều hành nạp địa chỉ bắt đầu vật lý vào thanh ghi `Base` và kích thước không gian địa chỉ vào thanh ghi `Bounds` của MMU. Với mỗi địa chỉ ảo $v$, phần cứng kiểm tra song song điều kiện $0 \le v < \text{Bounds}$; nếu hợp lệ, MMU cộng trực tiếp $\text{physical address} = v + \text{Base}$ để gửi tới RAM, còn nếu vượt biên thì MMU lập tức phát sinh một ngắt ngoại lệ phần cứng (exception/trap) chuyển CPU về chế độ đặc quyền của kernel để chấm dứt tiến trình vi phạm.

Mô hình một cặp thanh ghi Base/Bounds duy nhất buộc toàn bộ không gian địa chỉ phải nằm liên tiếp trong RAM, gây lãng phí bộ nhớ nghiêm trọng cho khoảng trống chưa dùng rất lớn nằm giữa vùng Heap và vùng Stack — hiện tượng này được gọi là *phân mảnh nội bộ* (internal fragmentation). Cơ chế Phân đoạn (Segmentation) cải tiến bằng cách cấp cho mỗi vùng logic (Code, Heap, Stack) một cặp thanh ghi Base và Bounds độc lập trong MMU, cho phép đặt từng đoạn ở các vị trí vật lý khác nhau và cho phép đánh dấu quyền bảo vệ riêng (như đoạn Code chỉ có quyền Đọc–Thực thi `R-X` để có thể chia sẻ chung một bản sao vật lý giữa nhiều tiến trình, còn Heap và Stack có quyền Đọc–Ghi `RW-`). Tuy nhiên, vì mỗi đoạn vẫn yêu cầu một vùng nhớ vật lý liên tiếp có kích thước khác nhau và biến đổi động khi `mmap`/`sbrk` mở rộng Heap, bộ nhớ vật lý nhanh chóng bị chia cắt thành hàng loạt khe trống nhỏ rời rạc không đủ lớn để cấp phát cho một đoạn mới — hiện tượng *phân mảnh ngoại vi* (external fragmentation), đòi hỏi các thuật toán quản lý vùng trống phức tạp hoặc phải dọn nén bộ nhớ cực kỳ tốn kém.

> **Nguồn đối chiếu:** `ostep-v110`: Chapter 15: Mechanism: Address Translation (Base and Bounds) & Chapter 16: Segmentation (Fine-grained vs Coarse-grained, Sharing, External Fragmentation)

#### Tiểu mục 3: Cơ chế Phân trang (Paging), Cấu trúc mục bảng trang (PTE) và Bảng trang đa cấp (Multi-level Page Tables) (`os-vm-paging-multilevel-tables` — mức `core`)

Để triệt tiêu hoàn toàn hiện tượng phân mảnh ngoại vi của phân đoạn, cơ chế Phân trang (Paging) chia cả không gian địa chỉ ảo lẫn bộ nhớ vật lý thành các khối có kích thước cố định bằng nhau (thường là $4\text{ KiB} = 2^{12}$ byte): đơn vị trên không gian ảo gọi là *trang* (page), còn đơn vị trên RAM vật lý gọi là *khung trang* (page frame / physical frame). Khi đó, mỗi địa chỉ ảo $m$-bit được tách làm hai phần: $p$ bit cao tạo thành Số hiệu trang ảo (Virtual Page Number — VPN) dùng làm chỉ số tra cứu trong Bảng trang (Page Table) của tiến trình, và $d$ bit thấp ($2^d = \text{kích thước trang}$, ví dụ $d = 12$ bit cho trang $4\text{ KiB}$) là Độ dời trong trang (Offset) được giữ nguyên không đổi vì kích thước trang và khung trang bằng nhau. Mỗi mục trong bảng trang (Page Table Entry — PTE) lưu Số hiệu khung vật lý (Physical Frame Number — PFN) kèm các bit điều khiển phần cứng sống còn: bit `Valid` ($V$ — trang này có thuộc phần địa chỉ hợp lệ của tiến trình không), bit `Present` ($P$ — trang hiện đang nằm trong RAM hay đã bị đẩy ra đĩa), các bit quyền truy cập `R/W/X` (Read/Write/Execute), bit `User/Supervisor` ($U$ — ngăn tiến trình chế độ user truy cập trang của kernel), cùng bit `Accessed/Reference` ($A$) và `Dirty` ($D$ — trang đã bị ghi đè kể từ khi nạp vào RAM).

Tuy nhiên, một bảng trang tuyến tính mảng phẳng (linear page table) gặp phải hai chi phí nghiêm trọng: làm chậm truy cập bộ nhớ (vì mỗi lệnh đọc/ghi phải đọc thêm PTE trong RAM) và tốn dung lượng khổng lồ (với địa chỉ 32-bit, trang $4\text{ KiB}$ và mỗi PTE 4 byte, mỗi tiến trình cần một mảng liên tiếp $2^{20} \times 4\text{ B} = 4\text{ MiB}$ dù chỉ dùng vài trang; với địa chỉ 64-bit hay 39/48-bit thì bảng phẳng là bất khả thi). Giải pháp chuẩn của phần cứng hiện đại là Bảng trang đa cấp dạng cây (Multi-level Page Tables, như cấu trúc 3 cấp Sv39 trên RISC-V của xv6 hoặc 4–5 cấp trên x86-64): phần VPN được chia thành các trường chỉ số $L_2, L_1, L_0$ (mỗi trường 9 bit tương ứng $2^9 = 512$ PTE kích thước 8 byte, vừa khít một trang $4\text{ KiB}$). Thanh ghi gốc bảng trang của CPU (như `satp` trên RISC-V hoặc `CR3` trên x86-64) trỏ tới trang thư mục gốc; nếu toàn bộ một vùng $2\text{ MiB}$ hoặc $1\text{ GiB}$ của không gian địa chỉ không được sử dụng, mục PTE ở cấp cao chỉ cần đặt bit `Valid = 0` và hệ điều hành hoàn toàn không phải cấp phát các trang bảng trang cấp dưới cho nhánh đó, giúp dung lượng bảng trang chỉ tỷ lệ thuận với lượng bộ nhớ ảo thực sự đang sử dụng.

> **Nguồn đối chiếu:** `ostep-v110`: Chapter 18: Paging: Introduction (VPN, Offset, PTE Bits) & Chapter 20: Paging: Smaller Tables (Multi-level Page Tables) | `mit-xv6-2025`: Chapter 3: §3.1 Paging hardware (RISC-V Sv39 39-bit Virtual Addresses and 3-Level Page Table Tree)

#### Tiểu mục 4: Bộ đệm dịch địa chỉ (TLB), tính cục bộ không gian/thời gian và quản lý TLB khi chuyển ngữ cảnh (`os-vm-tlb-locality` — mức `core`)

Mặc dù bảng trang đa cấp giải quyết triệt để bài toán dung lượng bộ nhớ cho bảng trang, bản thân việc duyệt cây bảng trang $k$ cấp (page table walk) lại đòi hỏi $k$ lần đọc bộ nhớ vật lý chỉ để lấy được địa chỉ PFN trước khi thực hiện lần truy cập thứ $k+1$ tới dữ liệu thật — làm tốc độ chương trình chậm đi nhiều lần. Để khôi phục tốc độ gần như truy cập trực tiếp, MMU tích hợp một bộ nhớ đệm phần cứng kết hợp đầy đủ hoặc kết hợp tập hợp (set-associative hardware cache) cực nhanh gọi là Bộ đệm Dịch Địa chỉ (Translation Lookaside Buffer — TLB), lưu trữ các cặp ánh xạ $\text{VPN} \to (\text{PFN}, \text{các bit quyền})$ vừa được sử dụng gần nhất. Với mỗi địa chỉ ảo, MMU tra cứu VPN trong TLB trước tiên: nếu trúng bộ đệm (TLB hit, tốn chưa đầy 1 chu kỳ xung nhịp), PFN được xuất ra ngay lập tức mà không cần chạm vào bảng trang trong RAM; chỉ khi trượt bộ đệm (TLB miss), phần cứng (trên x86-64/RISC-V) hoặc trình xử lý ngoại lệ phần mềm mới duyệt bảng trang để nạp ánh xạ mới vào TLB.

Hiệu quả của TLB phụ thuộc hoàn toàn vào hai nguyên lý cục bộ của chương trình: *tính cục bộ không gian* (spatial locality — khi chương trình đọc `a[0]`, các phần tử kế tiếp `a[1], a[2]...` nằm chung trên cùng một trang $4\text{ KiB}$ nên đều gây TLB hit sau một lần miss duy nhất) và *tính cục bộ thời gian* (temporal locality — các biến và lệnh trong vòng lặp được truy cập lặp lại liên tục trong thời gian ngắn); ngược lại, nếu một chương trình nhảy ngẫu nhiên qua số trang lớn hơn số mục của TLB (TLB reach), tỷ lệ hit sụt giảm mạnh gây hiện tượng nghẽn TLB. Ngoài ra, vì các ánh xạ $\text{VPN} \to \text{PFN}$ trong TLB chỉ đúng cho tiến trình hiện hành, mỗi khi hệ điều hành chuyển ngữ cảnh (context switch) sang tiến trình khác có bảng trang mới, phần cứng/OS hoặc phải xả bỏ toàn bộ các mục TLB không toàn cục (TLB flush — gây chi phí cold-start misses cho tiến trình mới), hoặc gắn thêm trường Định danh Không gian Địa chỉ (Address Space Identifier — ASID / PCID) vào mỗi mục TLB để nhiều tiến trình cùng tồn tại an toàn trong TLB mà không cần xóa trắng khi chuyển ngữ cảnh.

> **Nguồn đối chiếu:** `ostep-v110`: Chapter 19: Paging: Faster Translations (TLBs — Algorithm, Locality, Context Switches, ASIDs) | `mit-xv6-2025`: Chapter 3: §3.1 Paging hardware (TLB and sfence.vma instruction)

#### Tiểu mục 5: Ngắt thiếu trang (Page Fault), Không gian hoán đổi (Swap) và Chính sách thay thế trang (OPT, FIFO, LRU, Clock, Thrashing) (`os-vm-page-faults-replacement` — mức `core`)

Để hỗ trợ không gian địa chỉ lớn hơn dung lượng DRAM vật lý, hệ điều hành sử dụng một phân vùng trên thiết bị lưu trữ bền vững (SSD/HDD) làm không gian hoán đổi (swap space) để cất giữ các trang hiện chưa hoạt động. Khi CPU truy cập một địa chỉ ảo mà PTE tương ứng có bit `Present = 0` (hoặc chưa được cấp phát khung vật lý), MMU không thể tự hoàn tất việc dịch địa chỉ mà phát sinh một ngắt ngoại lệ đồng bộ gọi là *Lỗi thiếu trang* (Page Fault). Trình xử lý lỗi thiếu trang (page-fault handler) của nhân hệ điều hành được kích hoạt sẽ phân biệt ba trường hợp: (1) địa chỉ không hợp lệ (con trỏ null hoặc vượt ngoài các vùng nhớ đã đăng ký — gửi tín hiệu `SIGSEGV` chấm dứt tiến trình); (2) cấp phát lười (demand zeroing / lazy allocation — cấp một khung RAM mới xóa trắng về 0 rồi cập nhật PTE); hoặc (3) thiếu trang lớn (major page fault — trang đang nằm trên đĩa swap): hệ điều hành chọn một khung trang vật lý, phát lệnh I/O đọc trang từ đĩa vào RAM, phong tỏa tiến trình hiện tại để nhường CPU cho tiến trình khác chạy trong lúc chờ đĩa, và sau khi ngắt hoàn tất I/O báo về thì cập nhật PTE (`Present = 1`, `PFN` mới) rồi cho tiến trình thực thi lại chính câu lệnh vừa gây lỗi.

Khi bộ nhớ RAM đã cạn khung trống, trình nền thu hồi trang (swap daemon / page daemon) phải áp dụng một Chính sách thay thế trang (Page Replacement Policy) để chọn trang trục xuất nhằm cực tiểu hóa số lần đọc đĩa tốn kém (tối ưu Thời gian truy cập bộ nhớ hiệu dụng $\text{AMAT} = T_M + (1 - h) \cdot T_D$, nơi $T_D$ lớn hơn $T_M$ hàng chục nghìn lần). Chính sách Tối ưu của Belady (OPT / MIN — trục xuất trang sẽ được truy cập lại muộn nhất trong tương lai) đạt tỷ lệ miss thấp nhất nhưng chỉ dùng làm mốc lý thuyết vì đòi hỏi biết trước tương lai. Chính sách Vào trước – Ra trước (FIFO) bỏ qua tần suất sử dụng và mắc phải *Nghịch lý Belady* (Belady’s Anomaly): tăng thêm số khung RAM vật lý đôi khi lại làm tăng số lỗi thiếu trang trên cùng một chuỗi tham chiếu. Chính sách Ít dùng gần đây nhất (Least Recently Used — LRU) khai thác tính cục bộ thời gian và thỏa mãn tính chất ngăn xếp (stack property, không bị nghịch lý Belady), nhưng duy trì thứ tự LRU chính xác trên mỗi lệnh đọc/ghi RAM là quá đắt đỏ; vì vậy các hệ điều hành thực tế dùng thuật toán Kim đồng hồ (Clock / Second-Chance) quét vòng qua bit `Reference` ($A$) do phần cứng tự bật và ưu tiên giữ lại các trang sạch (`Dirty = 0`) để tránh chi phí ghi ngược ra đĩa. Khi tổng Tập làm việc (Working Set) của các tiến trình đang chạy vượt quá số khung RAM vật lý, hệ thống rơi vào trạng thái *trì trệ hoán đổi* (Thrashing): CPU dành toàn bộ thời gian chờ đọc/ghi trang ra vào đĩa mà không tiến triển được công việc thực tế, đòi hỏi cơ chế kiểm soát tải (admission control / working-set tracking) hoặc kích hoạt bộ xử lý hết bộ nhớ (OOM killer).

> **Nguồn đối chiếu:** `ostep-v110`: Chapter 21: Beyond Physical Memory: Mechanisms (Swap Space, Present Bit, Page Fault Control Flow) & Chapter 22: Beyond Physical Memory: Policies (OPT, FIFO, Belady’s Anomaly, LRU, Clock Algorithm, Dirty Pages, Thrashing)

#### Tiểu mục 6: Cơ chế Sao chép khi ghi (Copy-on-Write), Ánh xạ tệp (mmap) và Giới hạn phần cứng thực tế (`os-vm-limits-hardware-realities` — mức `core`)

Nhờ sự tách biệt giữa trang ảo và khung vật lý cùng các bit quyền trên PTE, hệ điều hành có thể triển khai những tối ưu hóa hệ thống rất mạnh mẽ mà không cần sao chép dữ liệu thừa. Điển hình nhất là cơ chế Sao chép khi ghi (Copy-on-Write — COW) trong lời gọi hệ thống `fork()`: thay vì sao chép toàn bộ các khung trang vật lý của tiến trình cha sang tiến trình con (mà phần lớn sẽ bị vứt bỏ ngay nếu tiến trình con gọi `exec()`), kernel chỉ sao chép cấu trúc bảng trang cho tiến trình con trỏ tới chính các khung vật lý của cha, đồng thời hạ quyền ghi trên PTE của cả hai tiến trình xuống Chỉ-đọc (`Read-Only`) và tăng biến đếm tham chiếu của khung trang. Chừng nào cả hai tiến trình chỉ đọc dữ liệu, không có byte dữ liệu nào bị sao chép; ngay khi một trong hai tiến trình thực hiện lệnh ghi, MMU sẽ phát sinh ngắt lỗi bảo vệ trang (page-protection fault), trình xử lý của kernel lúc này mới cấp phát một khung vật lý mới, sao chép nội dung trang $4\text{ KiB}$ đó sang khung mới, bật lại quyền Ghi (`RW`) và giảm biến đếm tham chiếu của khung cũ. Tương tự, lời gọi `mmap()` cho phép ánh xạ trực tiếp các khối của tệp trên đĩa vào không gian địa chỉ ảo thông qua bộ đệm trang thống nhất (unified page cache), nạp dữ liệu theo yêu cầu (demand paging) khi tiến trình chạm tới từng trang.

Cuối cùng, hiểu đúng bộ nhớ ảo đòi hỏi nhận thức rõ các giới hạn phần cứng và mặt trái về bảo mật trong các hệ thống thương mại. Thứ nhất, trên các ứng dụng cơ sở dữ liệu hoặc học máy sử dụng hàng trăm gigabyte RAM, trang nhỏ $4\text{ KiB}$ khiến số lượng trang lên tới hàng chục triệu, làm tràn TLB và biến chi phí duyệt bảng trang 4–5 cấp thành điểm nghẽn lớn; phần cứng hiện đại khắc phục bằng Trang khổng lồ (Huge Pages / Superpages kích thước $2\text{ MiB}$ hoặc $1\text{ GiB}$ bằng cách dừng sớm ở PTE cấp trung gian), đổi lại nguy cơ tăng phân mảnh nội bộ. Thứ hai, các bộ xử lý thực thi suy đoán (speculative execution) có thể để lộ dấu vết vi kiến trúc qua bộ nhớ cache khi truy cập thử vào vùng nhớ kernel được ánh xạ chung trong bảng trang người dùng (lỗ hổng Meltdown), buộc các hệ điều hành hiện đại phải áp dụng Cô lập Bảng trang Nhân (Kernel Page-Table Isolation — KPTI), tách bảng trang chế độ user và chế độ kernel làm tăng chi phí chuyển đổi qua lại tại mỗi lời gọi hệ thống.

> **Nguồn đối chiếu:** `ostep-v110`: Chapter 23: Complete Virtual Memory Systems (VAX/VMS, Linux Virtual Memory, Copy-on-Write, Superpages/Huge Pages, KPTI and Meltdown) | `mit-xv6-2025`: Chapter 4: §4.6 Page-fault exceptions (Copy-on-write fork, Lazy allocation, Demand paging)

---
