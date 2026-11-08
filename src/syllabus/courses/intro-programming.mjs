export const COURSE_INTRO_PROGRAMMING = {
  id: 'intro-programming',
  code: 'CS-04',
  title: 'Lập trình nhập môn',
  blockId: 'block-1',
  level: 'core',
  prerequisites: [
    {
      courseId: 'computing-environment',
      type: 'required',
      reason: 'Cần biết thao tác với tệp văn bản, đường dẫn thư mục, cửa sổ dòng lệnh và cách gọi trình biên dịch trước khi viết chương trình đầu tiên.',
    },
    {
      courseId: 'computational-thinking',
      type: 'co_requisite',
      reason: 'Cần nắm khái niệm đầu vào, đầu ra, trạng thái và phân rã bước giải hữu hạn khi diễn đạt chúng bằng cú pháp ngôn ngữ lập trình.',
    },
    {
      courseId: 'math-bridge',
      type: 'co_requisite',
      reason: 'Cần biến số, phép chia lấy dư, hàm số cơ bản và ký hiệu chỉ số dãy để đọc hiểu biểu thức số học và vòng lặp.',
    },
  ],
  overview: [
    'Môn học mở ra lối đi tuần tự cho người bắt đầu học lập trình hoàn toàn từ số 0, sử dụng C++ chuẩn ở phần tập con vừa sức làm ngôn ngữ trục duy nhất. Thay vì dồn ép các chi tiết kiến trúc hệ thống hay tối ưu hóa cấp thấp ngay từ đầu, môn học dẫn dắt người học đi từ việc viết, biên dịch và chạy một chương trình nhỏ có nhập – xử lý – xuất, qua cách lưu trữ trạng thái bằng biến và các kiểu dữ liệu cơ sở, cách xây dựng biểu thức tính toán, đến các cấu trúc điều khiển rẽ nhánh và vòng lặp để giải quyết những bài toán có điều kiện và lặp lại.',
    'Khi người học đã tự viết được các đoạn chương trình tuần tự và lặp, môn học giới thiệu cơ chế chia nhỏ bài toán bằng hàm, truyền tham số và phạm vi biến cục bộ, rồi mở rộng sang cách xử lý dãy dữ liệu với `std::vector`, chuỗi văn bản `std::string` và bản ghi `struct`. Chương cuối trang bị kỹ năng làm việc với tệp văn bản, kiểm tra dữ liệu đầu vào bị lỗi, đọc thông báo của trình biên dịch và lần vết trạng thái để tự tìm lỗi (debugging cơ bản). Các cơ chế hệ thống hoặc tối ưu hóa sâu hơn (như bảng ký hiệu của trình liên kết hay kiểu xem chuỗi không sở hữu `std::string_view`) được đánh dấu rõ ở mức mở rộng (`extension`) hoặc chuyển sang các môn tiếp theo (`CS-05`, `CS-07`, `CS-23`).',
  ],
  boundaries: [
    'Chỉ sử dụng một ngôn ngữ trục (C++) xuyên suốt môn để xây dựng mô hình thực thi nhất quán; không trộn nhiều ngôn ngữ lập trình ở giai đoạn nhập môn.',
    'Trọng tâm nền tảng (`core`) giới hạn ở biến cục bộ, hàm, `std::vector`, `std::string`, `struct` và luồng I/O cơ bản; chưa đi vào cấp phát động thủ công (`new`/`delete`), số học con trỏ thô, kế thừa đa hình hay bố cục ABI cấp thấp (thuộc Môn CS-07, CS-08 và CS-23).',
    'Các chủ đề có liên quan tới thời gian sống vùng nhớ hoặc chuỗi công cụ nhiều tệp (như liên kết đa đơn vị dịch và `std::string_view`) được tách thành tiểu mục mở rộng (`extension`) có ghi rõ điều kiện kiến thức nền, không bắt người mới học thuộc ở vòng đầu.',
  ],
  sources: [
    {
      sourceId: 'learncpp',
      locator: 'Chapters 0, 1, 2, 3 (§3.1–3.5), 4, 5, 6, 7, 8, 9 (§9.1–9.5), 12 (§12.3–12.6), 13 (§13.7–13.10), 16 (§16.1–16.8), 28 (§28.1–28.6)',
      relationship: 'primary',
    },
    {
      sourceId: 'harvard-cs50x',
      locator: 'Weeks 1–2 Lecture Notes (Source Code to Executable, Basic Types, Arrays, Strings, Debugging Basics)',
      relationship: 'supplementary',
    },
  ],
  chapters: [
    {
      id: 'ip-execution-model',
      title: 'Chương 1 — Chương trình đầu tiên, cấu trúc hàm main và mô hình nhập – xử lý – xuất',
      overview: [
        'Chương mở đầu giúp người mới chưa từng lập trình hiểu một chương trình C++ là gì và làm thế nào để biến một tệp văn bản mã nguồn thành một chương trình chạy được trên máy tính. Nội dung đi từ cấu trúc tối thiểu của một chương trình có hàm `main`, cách máy tính thực thi tuần tự từng câu lệnh, cách hiển thị kết quả và nhận dữ liệu từ bàn phím, đến cách đọc thông báo lỗi của trình biên dịch; phần chi tiết về các pha dịch và liên kết đa tệp được đặt ở tiểu mục mở rộng cuối chương.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 0 (§0.4–0.7 Introduction to C++ Development & Compiling) and Chapter 1 (§1.1–1.11 C++ Basics)',
          relationship: 'primary',
        },
        {
          sourceId: 'harvard-cs50x',
          locator: 'Week 1 Notes: From Source Code to Machine Code and First Programs',
          relationship: 'supplementary',
        },
      ],
      topics: [
        {
          id: 'ip-exec-first-program-main',
          title: 'Khái niệm mã nguồn, biên dịch chương trình đầu tiên và điểm vào hàm main()',
          level: 'core',
          paragraphs: [
            'Tiểu mục này giới thiệu khái niệm tệp mã nguồn (`.cpp`), vai trò của trình biên dịch trong việc dịch văn bản mã nguồn sang tệp thực thi của máy tính, và cấu trúc khung của một chương trình C++ tối thiểu. Trong môi trường có hệ điều hành (hosted environment), hàm toàn cục `main()` là điểm bắt đầu chuẩn cho luồng logic do lập trình viên viết; chuẩn ngôn ngữ cũng quy định rằng các đối tượng có thời gian lưu trữ tĩnh (static storage duration) ở phạm vi ngoài hàm có thể được khởi tạo trước khi luồng thực thi đi vào câu lệnh đầu tiên của `main()`.',
            'Phạm vi của tiểu mục tập trung vào những thành phần xuất hiện ngay trong chương trình đầu tiên: chỉ thị `#include <iostream>` để sử dụng thư viện nhập/xuất chuẩn, thân hàm `main()` đặt trong cặp ngoặc nhọn `{}`, câu lệnh kết thúc bằng dấu chấm phẩy, chú thích mã nguồn và ý nghĩa của giá trị nguyên trả về từ `return 0;` khi chương trình kết thúc bình thường. Người học chỉ cần nền tảng thao tác tệp và terminal từ Môn CS-01, chưa cần biết cấu trúc tệp nhị phân của hệ điều hành.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 0 (§0.4–0.5 Introduction to C++ development and the compiler) & Chapter 1 (§1.1 Statements and the structure of a program, §1.2 Comments)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-exec-sequential-statements-io',
          title: 'Mô hình thực thi tuần tự và giao tiếp cơ bản qua std::cout, std::cin',
          level: 'core',
          paragraphs: [
            'Nội dung trình bày mô hình thực thi tuần tự từ trên xuống dưới của các câu lệnh bên trong một hàm, kết nối trực tiếp với mô hình "Đầu vào (Input) → Xử lý (Process) → Đầu ra (Output)" đã học ở Môn CS-03. Tiểu mục giải thích sự khác biệt giữa biểu thức (tổ hợp tính ra một giá trị) và câu lệnh (bước hành động hoàn chỉnh), đồng thời giới thiệu cách xuất văn bản và số ra màn hình bằng `std::cout` với toán tử `<<` cũng như cách đọc giá trị từ bàn phím vào chương trình bằng `std::cin` với toán tử `>>`.',
            'Trọng tâm cần phân biệt ở chặng đầu là chiều di chuyển dữ liệu của hai toán tử luồng, cách xuống dòng bằng ký tự `\'\\n\'` so với `std::endl`, và việc chương trình dừng chờ người dùng nhập dữ liệu rồi nhấn Enter. Phạm vi dừng ở việc đọc/xuất các giá trị hợp lệ để viết được các chương trình tính toán nhỏ; cơ chế vùng đệm cấp thấp và xử lý khi người dùng nhập sai định dạng được tách sang Chương 6.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 1: §1.5 Introduction to iostream: cout, cin, and endl & §1.10 Introduction to expressions',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-exec-compile-vs-runtime-errors',
          title: 'Phân biệt lỗi cú pháp khi biên dịch, cảnh báo của trình biên dịch và lỗi khi chương trình chạy',
          level: 'core',
          paragraphs: [
            'Người mới học lập trình thường bối rối trước các thông báo dài từ công cụ biên dịch; tiểu mục này dạy cách phân loại và đọc hiểu hai nhóm lỗi cơ bản nhất. Lỗi thời điểm biên dịch (compile-time syntax/type error) xảy ra khi mã nguồn vi phạm quy tắc ngữ pháp hoặc kiểu dữ liệu của C++, khiến trình biên dịch từ chối tạo tệp thực thi và chỉ ra số dòng, số cột nơi phát hiện sai lệch. Ngược lại, lỗi thời gian chạy (runtime/logic error) xảy ra khi chương trình đã dịch thành công nhưng tính sai công thức hoặc gặp trạng thái bất hợp lệ trong lúc đang chạy.',
            'Tiểu mục cũng làm rõ vai trò của cảnh báo biên dịch (compiler warnings, bật qua các cờ như `-Wall -Wextra`): dù mã nguồn hợp lệ về mặt cú pháp, cảnh báo chỉ ra các mẫu viết có nguy cơ cao gây lỗi ngầm. Người học nắm được quy trình đọc lỗi từ thông báo đầu tiên trên xuống thay vì sửa mò ở cuối tệp.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 0: §0.9 Configuring your compiler: warning and error levels & Chapter 3: §3.1 Syntax and semantic errors',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-exec-translation-linking-extension',
          title: 'Mở rộng: Bốn pha dịch (Tiền xử lý, Biên dịch, Hợp dịch, Liên kết) và đơn vị dịch',
          level: 'extension',
          paragraphs: [
            'Ở mức mở rộng cho người học muốn hiểu sâu hơn điều gì diễn ra phía sau lệnh gọi trình biên dịch, tiểu mục này phân tách quy trình dịch thành bốn bước: tiền xử lý (preprocessing — xử lý các chỉ thị `#include` để tạo đơn vị dịch), biên dịch (compilation — kiểm tra kiểu và dịch sang hợp ngữ), hợp dịch (assembly — tạo tệp mã đối tượng `.o`/`.obj`) và liên kết (linking — ghép các tệp đối tượng cùng thư viện chuẩn thành tệp thực thi).',
            'Sự phân biệt giữa pha biên dịch và pha liên kết giúp giải thích vì sao lỗi viết sai tên hàm hoặc sai kiểu tham số bị báo ngay khi dịch từng tệp, trong khi lỗi khai báo hàm mà quên viết phần định nghĩa lại chỉ xuất hiện ở bước liên kết (`undefined reference`). Kiến thức này là cầu nối tự nhiên sang Chương 4 khi tách chương trình thành nhiều tệp `.h`/`.cpp` và sang Môn CS-06 (Git và hệ thống build).',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 0: §0.5 Introduction to the compiler, linker, and libraries',
              relationship: 'primary',
            },
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 1 Lecture Notes: Compiling (Preprocessing, Compiling, Assembling, Linking)',
              relationship: 'supplementary',
            },
          ],
        },
      ],
    },
    {
      id: 'ip-types-expressions',
      title: 'Chương 2 — Biến, kiểu dữ liệu cơ sở, biểu thức và phép toán',
      overview: [
        'Sau khi biết cấu trúc chương trình, người học cần công cụ để lưu trữ và biến đổi dữ liệu. Chương này trình bày khái niệm biến, sự khác nhau giữa khởi tạo và gán giá trị, các kiểu dữ liệu cơ sở của C++ (số nguyên, số thực dấu chấm động, giá trị chân lý Boolean, ký tự và hằng số), cùng các phép toán số học, so sánh và chuyển đổi kiểu tường minh.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 1 (§1.3–1.6 Variables and Initialization), Chapter 4 (§4.1–4.12 Fundamental Data Types), and Chapter 6 (§6.1–6.7 Operators)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'ip-types-variables-initialization',
          title: 'Biến, định danh, khởi tạo (Initialization), phép gán (Assignment) và biến chưa khởi tạo',
          level: 'core',
          paragraphs: [
            'Tiểu mục này giải thích cách chương trình đặt tên cho một vùng lưu trữ dữ liệu thông qua biến (variable) và quy tắc đặt tên định danh hợp lệ. Nội dung phân biệt rõ hai thao tác dễ nhầm đối với người mới: khởi tạo (cung cấp giá trị ban đầu ngay khi biến được tạo ra, ưu tiên cú pháp khởi tạo ngoặc nhọn `{}` để trình biên dịch cảnh báo nếu có ép kiểu làm hẹp miền giá trị) và phép gán (dùng toán tử `=` để thay đổi giá trị của một biến đã tồn tại).',
            'Điểm giới hạn quan trọng cần nắm ngay từ đầu là biến cục bộ kiểu cơ sở trong C++ không tự động nhận giá trị `0` nếu lập trình viên khai báo mà bỏ trống phần khởi tạo. Việc đọc giá trị từ một biến chưa khởi tạo sẽ dẫn tới hành vi không xác định (Undefined Behavior — UB), làm kết quả chương trình không thể đoán trước; do đó nguyên tắc xuyên suốt môn học là luôn khởi tạo biến ngay tại điểm khai báo.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 1: §1.3 Objects and variables, §1.4 Variable assignment and initialization, §1.6 Uninitialized variables and undefined behavior',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-types-integers-range-overflow',
          title: 'Kiểu số nguyên, giới hạn miền giá trị hữu hạn và hiện tượng tràn số',
          level: 'core',
          paragraphs: [
            'Nội dung giới thiệu cách C++ biểu diễn số nguyên qua các kiểu có kích thước hữu hạn trong bộ nhớ (như `int`, `long long` và các kiểu độ rộng cố định trong `<cstdint>`), đồng thời phân biệt số nguyên có dấu (`signed`, lưu được cả số âm, số 0 và số dương) với số nguyên không dấu (`unsigned`, chỉ lưu số không âm). Vì mỗi kiểu chỉ dùng một số lượng bit hữu hạn, miền giá trị biểu diễn được luôn có cận dưới và cận trên cố định.',
            'Tiểu mục làm rõ hệ quả khi kết quả phép tính vượt ra ngoài miền biểu diễn: tràn số nguyên có dấu là hành vi không xác định trong C++, còn số nguyên không dấu sẽ cuộn vòng theo modulo $2^k$ (khiến phép trừ như `0u - 1u` biến thành một số dương rất lớn). Từ đó, chương trình giải thích vì sao người mới nên ưu tiên dùng số nguyên có dấu cho các phép tính số học và biến đếm thông thường, cũng như thận trọng khi so sánh giữa kiểu có dấu và kiểu `std::size_t` không dấu.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 4: §4.3 Object sizes and the sizeof operator, §4.4 Signed integers, §4.5 Unsigned integers, and why to avoid them, §4.6 Fixed-width integers and size_t',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-types-floating-bool-char-const',
          title: 'Kiểu số thực dấu chấm động (float, double), kiểu bool, ký tự char và hằng số',
          level: 'core',
          paragraphs: [
            'Tiểu mục trình bày ba nhóm kiểu cơ sở còn lại cùng khái niệm hằng số. Với số thực dấu chấm động (`float`, `double`), nội dung giải thích ý nghĩa của độ chính xác hữu hạn: trên hầu hết các nền tảng hiện đại (nơi trình biên dịch hiện thực theo chuẩn IEEE 754 / IEC 60559, kiểm tra được qua `std::numeric_limits<double>::is_iec559`, dù chuẩn C++ không bắt buộc mọi kiến trúc phần cứng đều phải dùng định dạng IEEE 754), các phân số thập phân như `0.1` được lưu dưới dạng xấp xỉ nhị phân hữu hạn, nên việc so sánh hai số thực sau tính toán cần xét độ lệch tuyệt đối/tương đối thay vì dùng `==` trực tiếp.',
            'Tiếp theo, tiểu mục giới thiệu kiểu `bool` (`true`/`false`) cho điều kiện logic, kiểu `char` cho ký tự đơn (phân biệt ký tự chữ số `\'5\'` với giá trị số `5` và các ký tự thoát như `\'\\n\'`, `\'\\t\'`), cùng cách dùng `const` và `constexpr` để đặt tên cho các hằng số không được phép sửa đổi sau khi khởi tạo. Chi tiết biểu diễn bit dấu–mũ–định trị ở mức phần cứng của IEEE 754 được để dành cho Môn CS-22 và CS-23.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 4 (§4.8 Floating point numbers, §4.9 Boolean values, §4.11 Chars) and Chapter 5 (§5.1 Constant variables, §5.5 Constant expressions and constexpr)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-types-arithmetic-casts',
          title: 'Phép toán số học, chia nguyên vs chia thực, độ ưu tiên toán tử và ép kiểu tường minh (static_cast)',
          level: 'core',
          paragraphs: [
            'Nội dung bao quát các toán tử số học (`+`, `-`, `*`, `/`, `%`), toán tử quan hệ (`<`, `<=`, `>`, `>=`, `==`, `!=`) và quy tắc độ ưu tiên toán tử trong biểu thức phức hợp. Điểm trọng tâm dễ gây lỗi nhất cho người mới là sự khác biệt giữa phép chia hai số nguyên (`7 / 2` cho thương nguyên `3`, bỏ phần dư) và phép chia có ít nhất một toán hạng số thực (`7.0 / 2` cho `3.5`), đi kèm toán tử lấy phần dư `a % b` (yêu cầu số chia $b \\neq 0$).',
            'Tiểu mục cũng giải thích quy tắc chuyển đổi kiểu ngầm định khi biểu thức pha trộn nhiều kiểu số, cách sử dụng `static_cast<T>(bieu_thuc)` để chủ động chuyển đổi kiểu một cách an toàn và rõ ý đồ (chẳng hạn chuyển tổng nguyên sang `double` trước khi tính trung bình cộng), đồng thời lưu ý không vừa đọc vừa biến đổi cùng một biến bằng `++`/`--` nhiều lần trong một biểu thức đơn lẻ.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 6 (§6.1 Operator precedence and associativity, §6.2 Arithmetic operators, §6.4 Increment/decrement operators) & Chapter 10 (§10.6 Explicit type conversion and static_cast)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'ip-control-flow',
      title: 'Chương 3 — Cấu trúc điều khiển rẽ nhánh, vòng lặp và mô hình hóa bài toán nhỏ',
      overview: [
        'Chương này trang bị các cấu trúc điều khiển luồng thực thi giúp chương trình ra quyết định dựa trên điều kiện dữ liệu và tự động lặp lại công việc. Nội dung đi từ câu lệnh điều kiện `if`/`else`, `switch` và lượng giá đoản mạch của toán tử logic, sang vòng lặp `while`, `for`, `do-while`, cách dùng biến đếm và biến tích lũy, cách xác định điều kiện dừng và tránh lỗi lệch một bước (off-by-one) khi giải các bài toán nhỏ.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 6 (§6.8 Logical operators) and Chapter 8 (§8.1–8.11 Control Flow: Conditionals, Switch, Loops, Break and Continue)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'ip-cf-conditionals-short-circuit',
          title: 'Rẽ nhánh có điều kiện (if/else, switch), phân chia trường hợp biên và lượng giá đoản mạch',
          level: 'core',
          paragraphs: [
            'Tiểu mục trình bày cách dùng cấu trúc `if`, `else if`, `else` để chia miền giá trị đầu vào thành các nhánh xử lý tương ứng, cùng cấu trúc `switch` khi phân nhánh theo các giá trị nguyên rời rạc (kèm vai trò của `break` để tránh rơi xuyên qua nhánh tiếp theo — `fallthrough`). Trọng tâm rèn luyện là cách sắp xếp thứ tự điều kiện sao cho các trường hợp biên (như giá trị bằng 0, số âm hoặc đúng bằng ngưỡng) được xử lý chính xác, không bị nhánh rộng hơn đứng trước che khuất.',
            'Nội dung tiếp theo giải thích các toán tử kết hợp điều kiện `!` (NOT), `&&` (AND), `||` (OR) và cơ chế lượng giá đoản mạch (short-circuit evaluation): với `A && B`, nếu `A` đã sai thì `B` không được tính; với `A || B`, nếu `A` đã đúng thì `B` không được tính. Người học nắm được cách dùng tính chất này để đặt điều kiện bảo vệ ở vế trái (như kiểm tra mẫu số khác `0` hoặc chỉ số nằm trong phạm vi) trước khi thực hiện phép tính ở vế phải.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 6 (§6.8 Logical operators and short circuit evaluation) & Chapter 8 (§8.2 If statements and blocks, §8.5 Switch statement basics, §8.6 Switch fallthrough)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-cf-loops-termination',
          title: 'Vòng lặp while, for, do-while và điều kiện dừng hữu hạn',
          level: 'core',
          paragraphs: [
            'Tiểu mục giới thiệu ba cấu trúc lặp chuẩn của C++ và tiêu chí chọn cấu trúc phù hợp với bài toán: vòng lặp `for (khởi_tạo; điều_kiện; cập_nhật)` khi biết rõ miền chạy hoặc số lần lặp; vòng lặp `while (điều_kiện)` khi số bước lặp phụ thuộc vào trạng thái biến đổi động (như đọc dữ liệu cho tới hết hoặc chia liên tiếp); và `do-while` khi thân vòng lặp cần chạy ít nhất một lần trước khi kiểm tra điều kiện.',
            'Để chương trình không bị treo do lặp vô hạn, người học cần xác định rõ biến trạng thái nào thay đổi trong thân vòng lặp và vì sao mỗi bước lặp lại đưa biến đó tiến gần hơn tới điều kiện dừng. Tiểu mục cũng chỉ ra các lỗi điều kiện dừng phổ biến ở người mới như quên cập nhật biến lặp, viết nhầm dấu chấm phẩy ngay sau `while (...)`, hoặc dùng biến không dấu đếm lùi với điều kiện `>= 0`.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 8: §8.8 Introduction to loops and while statements, §8.9 Do while statements, §8.10 For statements',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-cf-loop-invariants-accumulators',
          title: 'Mẫu biến đếm, biến tích lũy, kiểm tra biên lệch một đơn vị (Off-by-one) và trực giác bất biến vòng lặp',
          level: 'core',
          paragraphs: [
            'Nội dung đi vào cách giải các bài toán cơ bản bằng vòng lặp thông qua các mẫu biến trạng thái điển hình: biến đếm số lần xuất hiện, biến tích lũy tổng hoặc tích, và biến theo dõi giá trị lớn nhất/nhỏ nhất. Tiểu mục giải thích vì sao biến tích lũy tổng cần khởi tạo bằng `0`, biến tích lũy tích khởi tạo bằng `1`, còn bài toán tìm cực trị cần khởi tạo từ phần tử hợp lệ đầu tiên thay vì một hằng số tùy ý.',
            'Để phòng tránh lỗi lệch một đơn vị (off-by-one — lặp thiếu bước cuối hoặc thừa một bước), người học được làm quen với trực giác bất biến vòng lặp (loop invariant): nêu rõ sau $k$ bước lặp thì biến kết quả đang biểu diễn giá trị của phạm vi nào, rồi kiểm tra tại bước đầu tiên ($k = 0$) và bước vừa thoát khỏi vòng lặp. Cách hình thức hóa đầy đủ bất biến bằng quy nạp máy trạng thái sẽ được phát triển sâu hơn ở Môn CS-09 (Toán rời rạc).',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 8: §8.8 While statements (Loop variables and accumulators) & §8.10 For statements (Off-by-one errors)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-cf-nested-loops-early-exit',
          title: 'Vòng lặp lồng nhau, điều khiển dừng sớm (break, continue) và ước lượng số bước lặp',
          level: 'core',
          paragraphs: [
            'Tiểu mục này mở rộng sang cấu trúc vòng lặp đặt bên trong một vòng lặp khác (nested loops) để giải các bài toán duyệt bảng hai chiều hoặc xét các cặp phần tử, đồng thời giải thích cơ chế của câu lệnh `break` (thoát ngay khỏi vòng lặp trong cùng hiện hành) và `continue` (bỏ qua phần còn lại của lượt lặp hiện tại để sang lượt kế tiếp).',
            'Thông qua việc đếm tổng số lần thân vòng lặp trong được thực thi khi vòng ngoài chạy $n$ lần và vòng trong chạy $m$ lần (tổng cộng $n \\times m$ bước), người học hình thành trực giác đầu tiên về chi phí thời gian tăng theo kích thước dữ liệu đầu vào trước khi học ký hiệu tiệm cận chính thức ở các môn sau.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 8: §8.8 Nested loops & §8.11 Break and continue',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'ip-functions-scope',
      title: 'Chương 4 — Hàm, truyền tham số, phạm vi biến và ngăn xếp lời gọi cơ bản',
      overview: [
        'Khi chương trình dài hơn vài chục dòng, đặt toàn bộ mã trong `main()` khiến việc đọc hiểu và kiểm tra trở nên rất khó khăn. Chương này trình bày cách chia nhỏ bài toán thành các hàm độc lập có đầu vào (tham số) và đầu ra (giá trị trả về) rõ ràng, sự khác biệt giữa truyền tham số theo giá trị với truyền theo tham chiếu, quy tắc phạm vi khối (block scope) và mô hình ngăn xếp lời gọi hàm cơ bản.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 2 (§2.1–2.12 Functions and Files), Chapter 7 (§7.1–7.5 Scope and Duration), and Chapter 12 (§12.3–12.6 References and Pass by Reference)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'ip-fn-declaration-definition-contracts',
          title: 'Khái niệm hàm, tham số, giá trị trả về và tách khai báo với định nghĩa hàm',
          level: 'core',
          paragraphs: [
            'Tiểu mục trình bày cách đóng gói một công việc tính toán thành một hàm có tên, danh sách tham số đầu vào (parameters) và kiểu trả về (return type, hoặc `void` khi hàm không trả về giá trị). Người học nắm được cách gọi hàm, cách câu lệnh `return` gửi kết quả về cho nơi gọi, và lợi ích của việc tách một bài toán phức tạp thành các hàm con có nhiệm vụ đơn nhất, dễ kiểm tra riêng lẻ.',
            'Nội dung cũng phân biệt khai báo hàm (function declaration / prototype — thông báo chữ ký hàm cho trình biên dịch trước khi hàm được gọi) với định nghĩa hàm (function definition — chứa thân hàm thực sự), giúp người học hiểu nguyên tắc tổ chức tệp tiêu đề (`.h`) và tệp mã nguồn (`.cpp`) ở mức cơ sở.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 2: §2.1 Introduction to functions, §2.2 Function return values, §2.4 Function parameters and arguments, §2.7 Forward declarations and definitions, §2.11 Header files',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-fn-value-vs-reference',
          title: 'Truyền tham số theo giá trị (Pass-by-Value), theo tham chiếu (T&) và tham chiếu hằng (const T&)',
          level: 'core',
          paragraphs: [
            'Tiểu mục giải thích cơ chế truyền tham số mặc định của C++ là truyền theo giá trị (pass-by-value): hàm nhận một bản sao độc lập của đối số, nên việc sửa đổi tham số bên trong hàm không làm thay đổi biến của nơi gọi. Tiếp theo, tiểu mục giới thiệu kiểu tham chiếu (`T&`) như một tên gọi khác (alias) gắn trực tiếp với biến đã có, cho phép hàm cập nhật biến của người gọi khi cần thiết.',
            'Trên cơ sở đó, chương trình làm rõ quy tắc chọn cách truyền tham số: dùng truyền theo giá trị cho các kiểu dữ liệu cơ sở nhỏ (`int`, `double`, `bool`, `char`); dùng tham chiếu hằng (`const T&`) khi truyền các đối tượng lớn như `std::vector` hoặc `std::string` mà hàm chỉ cần đọc, vừa tránh phải sao chép toàn bộ dữ liệu vừa được trình biên dịch bảo đảm không làm thay đổi đối tượng gốc.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 12: §12.3 Lvalue references, §12.4 Lvalue references to const, §12.5 Pass by lvalue reference, §12.6 Pass by const lvalue reference',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-fn-scope-lifetime-shadowing',
          title: 'Phạm vi khối (Block Scope), thời gian sống tự động của biến cục bộ và hiện tượng che khuất tên',
          level: 'core',
          paragraphs: [
            'Tiểu mục phân biệt hai thuộc tính cốt lõi của biến: phạm vi tên gọi (scope — vùng mã nguồn trong cặp ngoặc `{}` nơi tên biến có thể được truy cập) và thời gian sống (lifetime — khoảng thời gian biến tồn tại trong bộ nhớ khi chương trình chạy). Các biến cục bộ khai báo trong hàm hoặc trong khối lệnh có thời gian sống tự động: được tạo ra khi luồng thực thi đi vào điểm khai báo và tự động bị hủy khi thoát khỏi khối `{}` chứa nó.',
            'Nội dung cũng giải thích hiện tượng che khuất tên (variable shadowing) khi khai báo một biến mới ở khối bên trong trùng tên với biến ở khối bao ngoài, gây nhầm lẫn về đối tượng đang được cập nhật, đồng thời nêu lý do vì sao nên hạn chế biến toàn cục có thể thay đổi tự do để tránh các tác dụng phụ khó lường giữa các hàm.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 2 (§2.5 Introduction to local scope) & Chapter 7 (§7.1 Compound statements/blocks, §7.3 Local variables, §7.5 Variable shadowing)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-fn-call-stack-activation',
          title: 'Mô hình ngăn xếp lời gọi (Call Stack) và giới thiệu hàm đệ quy cơ sở',
          level: 'core',
          paragraphs: [
            'Nội dung cung cấp mô hình trực quan về ngăn xếp lời gọi (call stack): mỗi khi một hàm được gọi, chương trình tạo một khung làm việc riêng (stack frame) chứa các tham số và biến cục bộ của lần gọi đó; khi hàm kết thúc, khung này được dọn bỏ và chương trình quay lại đúng vị trí vừa gọi ở hàm trước. Mô hình này giúp người học hiểu rõ vì sao biến cục bộ của các hàm khác nhau hoàn toàn độc lập với nhau.',
            'Từ mô hình khung ngăn xếp, tiểu mục giới thiệu khái niệm hàm tự gọi lại chính nó (đệ quy — recursion) trên bài toán nhỏ, nhấn mạnh điều kiện bắt buộc phải có trường hợp dừng cơ sở (base case) và bước thu nhỏ đầu vào, cũng như hiện tượng tràn ngăn xếp (stack overflow) nếu đệ quy không dừng. Việc thiết kế đệ quy sâu và phân tích truy hồi sẽ được học kỹ ở Môn CS-09 và CS-16.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 3 (§3.7 Using an integrated debugger: The call stack) & Chapter 20 (§20.2 The stack and the heap, §20.3 Recursion)',
              relationship: 'primary',
            },
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 2 & Week 4 Notes: Call Stack and Stack Frames',
              relationship: 'supplementary',
            },
          ],
        },
      ],
    },
    {
      id: 'ip-sequences-strings',
      title: 'Chương 5 — Mảng động std::vector, chuỗi std::string và kiểu bản ghi struct',
      overview: [
        'Chương này mở rộng khả năng biểu diễn dữ liệu từ các biến đơn lẻ sang danh sách nhiều phần tử cùng kiểu với `std::vector`, văn bản với `std::string` và cấu trúc gom nhóm nhiều thuộc tính liên quan với `struct`. Trọng tâm của chương là cách đánh chỉ số từ `0`, kiểm tra biên hợp lệ, các mẫu duyệt – tìm kiếm – thống kê trên dãy, và cách tổ chức bảng dữ liệu bằng vector các bản ghi `struct`.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 5 (§5.7–5.9 std::string and std::string_view), Chapter 13 (§13.7–13.10 Structs), and Chapter 16 (§16.1–16.8 Dynamic arrays: std::vector)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'ip-seq-vector-contiguous-indexing',
          title: 'Lưu trữ dãy phần tử với std::vector, đánh chỉ số 0-based và an toàn biên truy cập',
          level: 'core',
          paragraphs: [
            'Tiểu mục giới thiệu `std::vector<T>` như cấu trúc mảng động chuẩn để lưu trữ một dãy phần tử cùng kiểu nằm liên tiếp nhau. Người học nắm được cách khởi tạo vector, thêm phần tử vào cuối bằng `push_back`, kiểm tra số lượng phần tử hiện có bằng `size()`, kiểm tra rỗng bằng `empty()`, và quy tắc đánh chỉ số bắt đầu từ `0` đến `size() - 1`.',
            'Điểm giới hạn quan trọng cần nắm vững là điều kiện hợp lệ của chỉ số: một vector rỗng không có phần tử `v[0]`, và toán tử `v[i]` không tự động kiểm tra biên nên việc truy cập chỉ số âm hoặc $\\ge \\text{size}()$ sẽ gây hành vi không xác định (vượt biên mảng). Tiểu mục đối chiếu `v[i]` với phương thức `v.at(i)` có kiểm tra biên để người học biết cách phát hiện sớm lỗi chỉ số.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 16: §16.1 Introduction to containers and arrays, §16.2 Introduction to std::vector and list constructors, §16.3 std::vector and the unsigned length and subscript problem',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-seq-traversal-linear-patterns',
          title: 'Các mẫu bài toán cơ sở trên dãy: Duyệt tuần tự, Tìm kiếm tuyến tính, Lọc và Cực trị',
          level: 'core',
          paragraphs: [
            'Nội dung hệ thống hóa các mẫu thuật toán cơ sở trên mảng một chiều mà người học sẽ gặp xuyên suốt các môn sau: duyệt qua mọi phần tử bằng vòng lặp theo chỉ số hoặc vòng lặp theo phạm vi (`for (const auto& x : v)`); tính tổng, trung bình và đếm số phần tử thỏa điều kiện; tìm vị trí xuất hiện đầu tiên của một giá trị (tìm kiếm tuyến tính); tìm giá trị lớn nhất/nhỏ nhất; và lọc hoặc biến đổi các phần tử sang một vector kết quả mới.',
            'Tiểu mục đặc biệt nhấn mạnh việc kiểm tra các trường hợp biên trước khi xử lý dãy (dãy rỗng, dãy có đúng 1 phần tử, dãy có mọi phần tử bằng nhau) và cách giữ chỉ số lân cận `i + 1` hoặc `i - 1` luôn nằm trong miền `[0, n - 1]` khi so sánh hai phần tử kề nhau.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 16: §16.4 Passing std::vector, §16.6 Arrays and loops, §16.8 Range-based for loops (for-each)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-seq-strings-structs',
          title: 'Xử lý chuỗi văn bản với std::string và gom nhóm dữ liệu bản ghi bằng struct',
          level: 'core',
          paragraphs: [
            'Phần đầu của tiểu mục trình bày lớp `std::string` để lưu trữ và thao tác với chuỗi ký tự: lấy độ dài chuỗi, truy cập từng ký tự, nối chuỗi, so sánh hai chuỗi theo thứ tự từ điển và tìm kiếm chuỗi con, đồng thời giải thích vì sao `std::string` an toàn và tiện lợi hơn mảng ký tự kết thúc bằng byte `\'\\0\'` kiểu C.',
            'Phần thứ hai giới thiệu từ khóa `struct` để định nghĩa một kiểu dữ liệu bản ghi mới gom nhiều trường dữ liệu liên quan (ví dụ thông tin một mặt hàng hoặc một sinh viên gồm tên kiểu `std::string`, mã số kiểu `int` và điểm kiểu `double`). Kết hợp `std::vector<Record>` với các hàm nhận `const Record&`, người học có thể biểu diễn và xử lý các bảng dữ liệu có cấu trúc hoàn chỉnh.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 5 (§5.7 Introduction to std::string) and Chapter 13 (§13.7 Introduction to structs, members, and member selection, §13.8 Struct aggregate initialization, §13.10 Passing and returning structs)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-seq-string-view-extension',
          title: 'Mở rộng: Góc nhìn chuỗi không sở hữu (std::string_view) và lưu ý về thời gian sống',
          level: 'extension',
          paragraphs: [
            'Ở mức mở rộng sau khi đã nắm vững tham chiếu hằng `const std::string&` và thời gian sống của biến cục bộ, tiểu mục này giới thiệu `std::string_view` (C++17) như một đối tượng nhẹ dùng để đọc một dãy ký tự liên tiếp sẵn có mà không sở hữu vùng nhớ đó. Trong khi truyền `std::string` theo giá trị luôn tạo một đối tượng chuỗi độc lập (có thể dùng vùng đệm chuỗi ngắn nội bộ — Small String Optimization cho chuỗi ngắn hoặc cấp phát vùng nhớ động cho chuỗi dài), `std::string_view` tránh được việc tạo đối tượng `std::string` tạm khi đối số truyền vào là hằng chuỗi `"..."` hoặc một lát cắt chuỗi.',
            'Điểm giới hạn bắt buộc khi dùng `std::string_view` là tính phụ thuộc vào thời gian sống của chuỗi gốc: vì `std::string_view` chỉ giữ tham chiếu tới vùng ký tự bên dưới, nếu chuỗi gốc bị hủy hoặc bị sửa đổi cấp phát lại, việc tiếp tục đọc qua `std::string_view` sẽ dẫn tới lỗi truy cập vùng nhớ đã giải phóng (dangling view). Chủ đề này kết nối trực tiếp với mô hình thời gian sống và con trỏ ở Môn CS-07.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 5: §5.8 Introduction to std::string_view & §5.9 std::string_view (part 2 — ownership and lifetime issues)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'ip-io-error-handling',
      title: 'Chương 6 — Luồng nhập/xuất tệp, xử lý đầu vào lỗi và chẩn đoán lỗi cơ bản',
      overview: [
        'Chương cuối của môn nhập môn hướng dẫn cách làm việc với dữ liệu thực tế từ bàn phím và tệp văn bản, nơi dữ liệu có thể chứa khoảng trắng, kéo dài nhiều dòng hoặc bị nhập sai định dạng. Đồng thời, chương trang bị quy trình kiểm tra dữ liệu đầu vào, cách tách hàm tính toán khỏi lệnh nhập/xuất để tự kiểm thử, và cách lần vết trạng thái chương trình để tìm lỗi trước khi học chuyên sâu về thiết kế và trình gỡ lỗi ở Môn CS-05.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 3 (§3.1–3.5 Basic Debugging), Chapter 9 (§9.1–9.5 Error Detection, Testing, and Invalid Input), and Chapter 28 (§28.1–28.6 I/O Streams and File I/O)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'ip-io-token-vs-line-streams',
          title: 'Đọc dữ liệu theo từ (>>), đọc nguyên dòng (std::getline) và kiểm tra trạng thái luồng',
          level: 'core',
          paragraphs: [
            'Tiểu mục làm rõ sự khác biệt giữa hai cách đọc dữ liệu văn bản trong C++: toán tử trích xuất `>>` bỏ qua khoảng trắng dẫn đầu và dừng lại ngay khi gặp khoảng trắng kế tiếp, trong khi `std::getline(stream, str)` đọc trọn vẹn cả dòng bao gồm dấu cách cho tới ký tự xuống dòng `\'\\n\'`. Khi chuyển từ phép đọc `>>` sang `std::getline`, bộ đệm thường còn sót lại ký tự `\'\\n\'` của lần nhập trước: nếu muốn bỏ qua mọi khoảng trắng dẫn đầu để đọc ngay dòng có nội dung tiếp theo thì có thể dùng bộ điều chỉnh `std::ws` (`std::getline(std::cin >> std::ws, str)`), nhưng cần lưu ý `std::ws` cũng sẽ ăn mất các dấu cách thụt đầu dòng và bỏ qua luôn cả những dòng trống có chủ đích; nếu bài toán yêu cầu giữ nguyên khoảng trắng đầu dòng hoặc nhận biết dòng rỗng thì phải loại bỏ riêng phần còn lại của dòng trước (chẳng hạn bằng `ignore`) thay vì dùng `std::ws`.',
            'Nội dung tiếp theo giải thích cách kiểm tra một phép đọc có thành công hay không bằng cách đặt trực tiếp biểu thức đọc vào điều kiện (`if (std::cin >> x)` hoặc `while (std::cin >> x)`), cách nhận biết trạng thái kết thúc dữ liệu (EOF) và cách khôi phục luồng bằng `clear()` kết hợp `ignore()` khi người dùng nhập ký tự không khớp với kiểu số mong đợi.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 5 (§5.7 std::getline and std::ws), Chapter 9 (§9.5 std::cin and handling invalid input), and Chapter 28 (§28.5 Stream states and input validation)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-io-files-stringstreams',
          title: 'Đọc/ghi tệp văn bản với std::ifstream, std::ofstream và xử lý chuỗi bằng std::stringstream',
          level: 'core',
          paragraphs: [
            'Tiểu mục mở rộng mô hình luồng sang tệp lưu trữ trên đĩa thông qua thư viện `<fstream>`: sử dụng `std::ifstream` để đọc dữ liệu từ tệp và `std::ofstream` để ghi kết quả ra tệp. Người học nắm được cách kiểm tra tệp có mở thành công hay không trước khi đọc/ghi, cũng như cơ chế tệp tự động được đóng lại an toàn khi biến luồng đi ra khỏi phạm vi hàm.',
            'Bên cạnh luồng tệp, tiểu mục giới thiệu `<sstream>` (`std::istringstream` và `std::ostringstream`) cho phép coi một chuỗi `std::string` trong bộ nhớ như một luồng nhập/xuất, rất hữu ích khi cần tách các trường dữ liệu trên một dòng văn bản đã đọc bằng `std::getline` hoặc định dạng dữ liệu thành chuỗi.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 28: §28.4 Stream classes for strings & §28.6 Basic file I/O',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-io-separation-and-contracts',
          title: 'Kiểm tra miền hợp lệ của đầu vào và tách hàm tính toán khỏi giao diện nhập/xuất',
          level: 'core',
          paragraphs: [
            'Ngay cả khi đọc đúng kiểu dữ liệu (ví dụ đọc thành công một số nguyên `int`), giá trị đó vẫn có thể vi phạm miền hợp lệ của bài toán (như số lượng phần tử âm, mẫu số bằng `0`, hoặc tháng ngoài miền `1..12`). Tiểu mục này giới thiệu khái niệm tiền điều kiện (preconditions) của hàm và cách kiểm tra, từ chối sớm các đầu vào bất hợp lệ trước khi thực hiện phép tính.',
            'Đồng thời, tiểu mục hướng dẫn nguyên tắc tổ chức chương trình: tách phần đọc/in dữ liệu (`std::cin`/`std::cout`) ra khỏi các hàm tính toán cốt lõi (hàm nhận dữ liệu qua tham số và trả kết quả qua `return`), giúp hàm tính toán có thể được gọi lại nhiều lần với các bộ dữ liệu kiểm thử khác nhau.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 9: §9.1 Introduction to testing your code & §9.4 Detecting and handling errors',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ip-io-basic-debugging-tracing',
          title: 'Quy trình tìm lỗi (Debugging) cơ bản: Tái hiện lỗi, lần vết trạng thái và chuẩn bị cho Debugger',
          level: 'core',
          paragraphs: [
            'Khi chương trình chạy ra kết quả sai với dự kiến, người mới thường xóa sửa ngẫu nhiên nhiều dòng mã cùng lúc. Tiểu mục cuối của môn nhập môn thiết lập quy trình chẩn đoán lỗi có trật tự: xác định bộ đầu vào nhỏ nhất làm lộ lỗi, dự đoán giá trị của các biến qua từng bước thực thi (chạy tay / trace table), và kiểm chứng xem tại dòng lệnh nào trạng thái thực tế bắt đầu lệch khỏi trạng thái dự đoán.',
            'Người học nắm được cách quan sát trạng thái biến tại các điểm chốt và làm quen với khái niệm điểm dừng (breakpoint) cùng chạy từng bước (step) trong trình gỡ lỗi tích hợp, tạo cầu nối trực tiếp sang Môn CS-05 (Thiết kế chương trình và debug) nơi kỹ thuật kiểm thử và sử dụng debugger được rèn luyện toàn diện.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 3: §3.2 The debugging process, §3.3 A strategy for debugging, §3.4 Basic debugging tactics',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
  ],
};
