export const COURSE_PROGRAM_DESIGN_DEBUGGING = {
  id: 'program-design-debugging',
  code: 'CS-05',
  title: 'Thiết kế chương trình và debug',
  blockId: 'block-1',
  level: 'core',
  prerequisites: [
    {
      courseId: 'intro-programming',
      type: 'required',
      reason: 'Cần biết viết hàm, vòng lặp, mảng động std::vector, chuỗi std::string và chạy chương trình C++ cơ bản trước khi học thiết kế mô-đun và gỡ lỗi có hệ thống.',
    },
  ],
  overview: [
    'Môn học giải quyết khoảng trống lớn nhất của người mới học xong cú pháp nhập môn: khi chương trình biên dịch thành công nhưng chạy ra kết quả sai hoặc tự dừng đột ngột, làm thế nào để tìm ra đúng nguyên nhân mà không sửa mò ngẫu nhiên? Nội dung bắt đầu từ việc thiết kế chương trình sao cho lỗi khó ẩn nấp ngay từ đầu thông qua hợp đồng hàm (tiền điều kiện, hậu điều kiện, bất biến), sự tách biệt giữa hàm tính toán thuần túy (pure function) với hàm có tác dụng phụ (side effects) làm thay đổi trạng thái hoặc vào/ra, và việc dùng `assert` để bắt lỗi vi phạm giả định ngay tại điểm phát sinh.',
    'Trên nền thiết kế có hợp đồng đó, môn học trình bày phương pháp gỡ lỗi theo phương pháp khoa học (scientific debugging): tách biệt triệu chứng quan sát được (symptom) với nguyên nhân gốc (root cause), cô lập ca đầu vào tối thiểu tái hiện lỗi, đặt giả thuyết có thể bác bỏ và khoanh vùng nhị phân (wolf-fence / binary search). Hai chương cuối dẫn dắt người học từ con số 0 làm chủ trình gỡ lỗi tương tác (`gdb`/`lldb` và giao diện debugger trong IDE) để đặt điểm dừng (breakpoints), đi từng bước lệnh (step over/into/out), đọc ngăn xếp lời gọi (call stack / backtrace), và thiết kế bộ ca kiểm thử tự động bao phủ các miền tương đương cùng trường hợp biên.',
  ],
  boundaries: [
    'Hướng dẫn sử dụng trình gỡ lỗi (`gdb`/`lldb`/IDE debugger) bắt đầu hoàn toàn từ số 0: giải thích cờ biên dịch `-g` là gì, điểm dừng hoạt động ra sao và đọc khung ngăn xếp từ hàm `main` đi vào như thế nào.',
    'Trọng tâm của môn này là lỗi logic thuật toán, lỗi trạng thái biến, lỗi vượt biên chỉ số `std::vector`/`std::string` và quy trình kiểm thử hàm; các lỗi bộ nhớ cấp thấp liên quan tới con trỏ thô và cấp phát động (`new`/`delete`) cùng công cụ AddressSanitizer được đặt ở Môn CS-07 sau khi học mô hình bộ nhớ.',
    'Chưa đi vào kiểm thử tích hợp quy mô hệ thống phân tán hay giàn giả lập phụ thuộc (mocking frameworks) của công nghệ phần mềm lớn (thuộc Môn CS-31).',
  ],
  sources: [
    {
      sourceId: 'learncpp',
      locator: 'Chapter 3 (§3.1–3.10 Debugging C++ Programs) & Chapter 9 (§9.1–9.6 Error Detection, Testing, and Assert)',
      relationship: 'primary',
    },
    {
      sourceId: 'mit-missing-semester',
      locator: 'Lecture 7: Debugging and Profiling (Debugging Methodology, GDB/LLDB, Backtraces)',
      relationship: 'primary',
    },
    {
      sourceId: 'swe-at-google',
      locator: 'Chapter 11 (Testing Overview) & Chapter 12 (Unit Testing)',
      relationship: 'supplementary',
    },
  ],
  chapters: [
    {
      id: 'pdd-contracts-decomposition',
      title: 'Chương 1 — Hợp đồng hàm (Preconditions, Postconditions, Invariants), tác dụng phụ và kiểm tra giả định bằng Assert',
      overview: [
        'Chương này dạy cách thiết kế từng hàm như một đơn vị tính toán có cam kết rõ ràng thông qua tiền điều kiện, hậu điều kiện và bất biến dữ liệu. Khi mỗi hàm nêu rõ nó đòi hỏi điều kiện gì ở đầu vào, đảm bảo điều gì ở đầu ra và tách biệt tính toán thuần túy khỏi tác dụng phụ I/O, việc kiểm tra đúng/sai của một chương trình dài được quy về kiểm tra từng hàm ngắn một cách độc lập.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 9: §9.4 Detecting and handling errors & §9.6 Assert and static_assert',
          relationship: 'primary',
        },
        {
          sourceId: 'composing-programs',
          locator: 'Chapter 1: §1.2–1.4 Pure vs Non-Pure Functions and Functional Contracts',
          relationship: 'supplementary',
        },
      ],
      topics: [
        {
          id: 'pdd-cd-preconditions-postconditions-invariants',
          title: 'Khái niệm hợp đồng hàm: Tiền điều kiện (Preconditions), Hậu điều kiện (Postconditions) và Bất biến dữ liệu',
          level: 'core',
          paragraphs: [
            'Mọi lời gọi hàm là một sự phối hợp giữa hai bên: **bên gọi (caller)** truyền đối số vào và **bên được gọi (callee — chính thân hàm)** thực hiện tính toán rồi trả kết quả. **Hợp đồng hàm (Function Contract)** quy định rõ trách nhiệm của hai bên qua ba thành phần: (1) **Tiền điều kiện (Precondition)** là điều kiện mà các tham số đầu vào và trạng thái ban đầu bắt buộc phải thỏa mãn *trước khi* hàm bắt đầu chạy (ví dụ hàm `timKiemNhiPhan(v, k)` có tiền điều kiện là vector `v` đã được sắp xếp không giảm; hàm `tinhTrungBinh(v)` có tiền điều kiện `!v.empty()`); (2) **Hậu điều kiện (Postcondition)** là cam kết về giá trị trả về và trạng thái sau khi hàm kết thúc, *nếu* tiền điều kiện ban đầu đã được tôn trọng; và (3) **Bất biến (Invariant)** là tính chất luôn giữ đúng trước và sau mỗi thao tác hợp lệ trên một cấu trúc dữ liệu.',
            'Giá trị cốt lõi của hợp đồng hàm nằm ở việc phân định rõ lỗi thuộc về đâu: nếu tiền điều kiện bị vi phạm (bên gọi truyền một vector chưa sắp xếp vào hàm tìm kiếm nhị phân), lỗi nằm ở nơi gọi hàm chứ không phải ở thuật toán bên trong hàm; ngược lại, nếu mọi tiền điều kiện đều thỏa mãn mà kết quả trả về vi phạm hậu điều kiện, lỗi chắc chắn nằm ở cài đặt thân hàm đó.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 9: §9.4 Detecting and handling errors (Function assumptions, caller vs callee responsibilities)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'pdd-cd-pure-functions-vs-side-effects',
          title: 'Phân biệt hàm tính toán thuần túy (pure function) với hàm có tác dụng phụ (side effects) và kiến trúc tách biệt I/O',
          level: 'core',
          paragraphs: [
            'Một nguồn gây lỗi và gây khó khăn lớn khi kiểm thử ở người mới là trộn lẫn lệnh nhập/xuất (`std::cin`, `std::cout`) và biến toàn cục ngay vào giữa vòng lặp tính toán của hàm. Tiểu mục này phân biệt hai loại hàm: **Hàm thuần túy (Pure function)** là hàm mà giá trị trả về chỉ phụ thuộc duy nhất vào các đối số đầu vào của nó và hoàn toàn không gây ra **tác dụng phụ (side effects)** nào ra môi trường bên ngoài (không sửa biến toàn cục, không sửa đối số truyền tham chiếu, không đọc bàn phím hay in ra màn hình). Ngược lại, hàm có tác dụng phụ là hàm làm biến đổi trạng thái bên ngoài phạm vi cục bộ của nó hoặc tương tác với luồng I/O.',
            'Khi thiết kế chương trình theo nguyên tắc **đẩy tác dụng phụ và I/O ra lớp vỏ ngoài cùng (I/O at the boundaries)** và giữ cho toàn bộ phần lõi thuật toán là các hàm nhận dữ liệu qua tham số rồi trả về kết quả qua `return`, người học thu được hai lợi ích tức thì: thứ nhất, hàm tính toán luôn cho ra cùng một kết quả mỗi khi gọi lại với cùng đối số nên rất dễ suy luận; thứ hai, có thể gọi hàm đó hàng trăm lần trong một chương trình kiểm thử tự động mà không cần người dùng ngồi gõ bàn phím cho `std::cin`.',
          ],
          sources: [
            {
              sourceId: 'composing-programs',
              locator: 'Chapter 1: §1.2.5 Pure Functions vs Non-Pure Functions (Side Effects)',
              relationship: 'primary',
            },
            {
              sourceId: 'learncpp',
              locator: 'Chapter 2 (§2.2–2.4 Function return values and parameters) & Chapter 7 (§7.8 Why non-const global variables are evil)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'pdd-cd-assertions-vs-error-handling',
          title: 'Sử dụng assert (<cassert>) và static_assert: phân biệt phát hiện lỗi lập trình nội bộ với xử lý dữ liệu lỗi từ người dùng',
          level: 'core',
          paragraphs: [
            'Để biến các tiền điều kiện, hậu điều kiện và bất biến từ lời ghi chú thụ động thành hàng rào kiểm tra tự động khi chạy, C++ cung cấp macro `assert(bieu_thuc_dieu_kien)` trong thư viện `<cassert>`. Khi chương trình chạy ở chế độ gỡ lỗi (debug build), nếu `bieu_thuc_dieu_kien` có giá trị `false`, `assert` sẽ dừng chương trình ngay tại chỗ và in ra chính xác tên tệp, số dòng cùng biểu thức vừa bị vi phạm (thay vì để trạng thái sai âm thầm lan truyền thêm hàng trăm dòng nữa mới gây kết quả sai ở cuối chương trình). Đối với các điều kiện có thể kiểm tra ngay tại thời điểm biên dịch (như kích thước kiểu dữ liệu hoặc hằng số cấu hình), từ khóa `static_assert` cho phép trình biên dịch báo lỗi ngay trước khi tạo tệp chạy.',
            'Tiểu mục nhấn mạnh ranh giới sử dụng cực kỳ quan trọng giữa **`assert`** và **xử lý lỗi thời gian chạy (error handling)**: `assert` chỉ dùng để bắt **lỗi logic của chính người lập trình (programmer bugs / contract violations)** — những tình huống không bao giờ được phép xảy ra nếu mã nguồn viết đúng (ví dụ chỉ số nội bộ `idx < v.size()`) và có thể bị tắt đi khi biên dịch bản phát hành có định nghĩa macro `NDEBUG`. Ngược lại, đối với **các tình huống lỗi đến từ môi trường bên ngoài** (như người dùng nhập chữ vào chỗ cần số, hoặc tệp dữ liệu trên đĩa không tồn tại), chương trình tuyệt đối không được dùng `assert` mà phải kiểm tra bằng câu lệnh điều kiện `if` và xử lý/báo lỗi an toàn ngay cả trong bản phát hành. Ngoài ra, biểu thức đặt bên trong `assert(...)` tuyệt đối không được chứa tác dụng phụ (như `assert(++i < n)`), vì khi tắt `assert` thì phép tăng `++i` cũng sẽ biến mất.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 9: §9.6 Assert and static_assert (Assertions vs error handling, NDEBUG, and side-effect pitfalls)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'pdd-scientific-debugging',
      title: 'Chương 2 — Phương pháp chẩn đoán lỗi khoa học (Scientific Debugging) và tái hiện lỗi tối thiểu',
      overview: [
        'Chương này thay thế thói quen "sửa đại một dấu `<=` thành `<` rồi chạy thử xem may ra đúng không" bằng quy trình chẩn đoán lỗi có kỷ luật theo phương pháp khoa học: phân biệt triệu chứng quan sát được ở cuối chương trình với nguyên nhân gốc nơi trạng thái bắt đầu nhiễm lỗi, thu gọn ca đầu vào tái hiện tối thiểu, khoanh vùng nhị phân và dùng thực nghiệm kiểm chứng giả thuyết.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 3: §3.1–3.5 The debugging process, strategy, and basic debugging tactics',
          relationship: 'primary',
        },
        {
          sourceId: 'mit-missing-semester',
          locator: 'Lecture 7: Debugging and Profiling — Systematic Debugging and Reproducibility',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'pdd-sd-symptom-fault-root-cause',
          title: 'Chuỗi nhân quả của lỗi phần mềm: Nguyên nhân gốc (Defect/Bug) -> Trạng thái nhiễm lỗi (Infected State) -> Triệu chứng (Failure)',
          level: 'core',
          paragraphs: [
            'Khi một chương trình chạy sai, thứ người học nhìn thấy trên màn hình (một con số kết quả sai ở dòng in cuối cùng, hoặc thông báo chương trình bị dừng đột ngột) mới chỉ là **triệu chứng bên ngoài (symptom / observable failure)** chứ thường không phải là dòng lệnh chứa lỗi. Tiểu mục này phân tích cơ chế lan truyền lỗi theo ba chặng thời gian: (1) **Khiếm khuyết trong mã nguồn (Defect / Root cause)** tại một dòng lệnh $L_1$ thực hiện phép tính hoặc cập nhật sai; (2) Khi luồng thực thi đi qua $L_1$, nó tạo ra một **trạng thái nhiễm lỗi (infected state)** trong các biến nhớ nhưng chương trình vẫn tiếp tục chạy qua các dòng $L_2, L_3, \\dots$ mà chưa báo lỗi; và (3) Mãi tới dòng $L_k$ ở rất xa phía sau, trạng thái nhiễm lỗi đó mới gây ra **triệu chứng thất bại (failure)** nhìn thấy được.',
            'Do khoảng cách giữa dòng gây lỗi gốc $L_1$ và dòng xuất hiện triệu chứng $L_k$, mọi nỗ lực chỉ nhìn chằm chằm vào dòng $L_k$ hoặc thêm các câu lệnh `if` vá tạm ở cuối hàm để ép kết quả cho khớp một ví dụ mẫu đều chỉ là "chữa triệu chứng", khiến chương trình càng thêm rối và tiếp tục sai trên dữ liệu khác. Mục tiêu của quá trình gỡ lỗi là truy ngược dòng thời gian từ $L_k$ về đúng thời điểm trạng thái biến bắt đầu lệch khỏi giá trị đúng dự kiến tại $L_1$.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 3: §3.1 Syntax and semantic errors & §3.2 The debugging process (Finding the root cause)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'pdd-sd-minimal-reproduction-hypothesis',
          title: 'Tái hiện lỗi tất định, thu gọn ca đầu vào tối thiểu (Minimal Reproducible Example) và vòng lặp giả thuyết – thực nghiệm',
          level: 'core',
          paragraphs: [
            'Điều kiện tiên quyết để tìm ra nguyên nhân lỗi là phải làm cho lỗi đó **tái hiện được một cách ổn định (reproducible)** trên một bộ đầu vào xác định. Nếu lỗi xuất hiện trên một tệp dữ liệu lớn gồm $10\\,000$ số nguyên, người học không thể lần vết bằng mắt qua $10\\,000$ vòng lặp; bước đầu tiên bắt buộc là **thu gọn ca đầu vào tối thiểu (input minimization / minimal reproducible example — MRE)**: cắt bớt dần dữ liệu đầu vào cho tới khi chỉ còn một dãy rất nhỏ (chẳng hạn 2 hoặc 3 phần tử như `[-5, -2]`) mà chương trình vẫn chạy sai. Ngay trong quá trình cắt giảm dữ liệu đó, đặc điểm chung của các đầu vào gây lỗi (ví dụ: "chỉ sai khi tất cả các số trong dãy đều là số âm") thường đã lộ diện.',
            'Sau khi có ca tái hiện nhỏ, việc gỡ lỗi tuân theo đúng **vòng lặp phương pháp khoa học**: (1) Quan sát dữ liệu đầu vào và kết quả sai thực tế so với kết quả đúng tính bằng tay; (2) Nêu một **giả thuyết cụ thể (hypothesis)** về vị trí và cơ chế gây sai (ví dụ: "biến `max_val` được khởi tạo bằng `0` nên khi mảng toàn số âm thì không phần tử nào lớn hơn `0`"); (3) Dùng công cụ quan sát (in trạng thái trung gian hoặc đặt điểm dừng debugger) để kiểm tra dự đoán của giả thuyết đó; và (4) Chỉ sửa mã nguồn khi giả thuyết đã được bằng chứng trạng thái xác nhận, đồng thời chỉ thay đổi **một yếu tố mỗi lần** để biết chắc thay đổi nào giải quyết được lỗi.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 3: §3.2 The debugging process & §3.3 A strategy for debugging (Reproducing the problem and narrowing down)',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-missing-semester',
              locator: 'Lecture 7: Debugging — Reproducing bugs and minimal test cases',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'pdd-sd-binary-isolation-logging',
          title: 'Khoanh vùng nhị phân trong không gian thực thi (Wolf-Fence) và kỹ thuật ghi vết chẩn đoán có cấu trúc',
          level: 'core',
          paragraphs: [
            'Khi một chương trình trải qua chuỗi nhiều bước xử lý $S_1 \\to S_2 \\to \\dots \\to S_m$ và kết quả cuối cùng bị sai, thay vì kiểm tra tuần tự từ $S_1$, ta áp dụng nguyên lý **tìm kiếm nhị phân trên luồng thực thi (binary search / wolf-fence debugging)**: kiểm tra trạng thái dữ liệu ở ngay điểm giữa $S_{m/2}$. Nếu tại điểm giữa dữ liệu đã sai, lỗi chắc chắn nằm ở nửa đầu ($S_1 \\dots S_{m/2}$); nếu tại điểm giữa dữ liệu hoàn toàn đúng theo đặc tả, lỗi chắc chắn nằm ở nửa sau ($S_{m/2+1} \\dots S_m$). Chỉ sau vài bước chia đôi, vùng nghi vấn từ hàng trăm dòng mã được cô lập xuống một hàm hoặc một vòng lặp duy nhất.',
            'Tiểu mục cũng làm rõ cách sử dụng kỹ thuật in trạng thái chẩn đoán (diagnostic logging) một cách chuẩn xác khi chưa mở debugger, đồng thời chỉ ra các cạm bẫy của việc dùng `std::cout` bừa bãi: nên in thông tin gỡ lỗi ra luồng lỗi chuẩn **`std::cerr`** thay vì `std::cout` bởi vì `std::cerr` không bị giữ lại trong vùng đệm (unbuffered) — nếu chương trình bị sập đột ngột ngay dòng kế tiếp, nội dung trong vùng đệm `std::cout` có thể chưa kịp xuất ra màn hình khiến người học tưởng nhầm chương trình sập ở dòng trước đó; ngoài ra việc in ra `std::cerr` không làm bẩn luồng kết quả chuẩn `std::cout` khi so sánh kết quả tự động.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 3: §3.4 Basic debugging tactics & §3.5 More debugging tactics (Using std::cerr vs std::cout)',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-missing-semester',
              locator: 'Lecture 7: Print debugging, logging, and binary search isolation',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'pdd-debugger-callstack',
      title: 'Chương 3 — Làm chủ trình gỡ lỗi tương tác (Interactive Debugger): Breakpoints, Stepping và Khung ngăn xếp (Call Stack)',
      overview: [
        'Chương này hướng dẫn người mới bắt đầu hoàn toàn từ số 0 cách sử dụng công cụ mạnh nhất để quan sát bên trong một chương trình đang chạy: trình gỡ lỗi tương tác (`gdb`, `lldb` hoặc giao diện gỡ lỗi trực quan trong VS Code / IDE) để đặt điểm dừng, đi từng bước lệnh, theo dõi biến và đọc vết ngăn xếp lời gọi hàm mà không phải thêm rồi xóa hàng chục câu lệnh in tạm trong mã nguồn.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 3: §3.6–3.9 Using an integrated debugger (Stepping, Breakpoints, Watching variables, The call stack)',
          relationship: 'primary',
        },
        {
          sourceId: 'mit-missing-semester',
          locator: 'Lecture 7: Debuggers — GDB/LLDB interactive execution, breakpoints, and stack frames',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'pdd-dc-debug-symbols-breakpoints',
          title: 'Biên dịch kèm thông tin gỡ lỗi (-g), cơ chế Điểm dừng (Breakpoint) và Điểm dừng có điều kiện',
          level: 'core',
          paragraphs: [
            'Mặc định khi trình biên dịch dịch tệp `.cpp` sang mã máy, tệp thực thi chỉ chứa địa chỉ ô nhớ và lệnh máy thô mà không giữ lại tên biến hay số dòng mã nguồn gốc. Để trình gỡ lỗi biết lệnh máy nào ứng với dòng thứ mấy của tệp `main.cpp` và biến `tong` nằm ở đâu, người học cần biên dịch chương trình ở **chế độ gỡ lỗi (debug build)** bằng cách truyền cờ **`-g`** (kèm tắt tối ưu hóa `-O0`, ví dụ `g++ -std=c++20 -g -O0 main.cpp -o main`). Cờ `-g` nhúng bảng ánh xạ ký hiệu gỡ lỗi (debug symbols) vào tệp thực thi mà không làm thay đổi logic của chương trình.',
            'Khi chạy chương trình bên trong trình gỡ lỗi (`gdb ./main`, `lldb ./main` hoặc bấm `F5` trong IDE), công cụ cốt lõi đầu tiên là **Điểm dừng (Breakpoint)**: một dấu đánh dấu gắn vào một dòng mã nguồn hoặc tên hàm để yêu cầu trình gỡ lỗi **tạm dừng (pause/suspend)** tiến trình ngay *trước khi* dòng lệnh đó được thực thi. Khi tiến trình đang tạm dừng tại điểm dừng, toàn bộ thời gian như đứng yên để người học kiểm tra giá trị hiện tại của mọi biến. Đối với các vòng lặp chạy hàng nghìn lần nhưng lỗi chỉ xảy ra ở vòng thứ $k = 500$, việc đặt **Điểm dừng có điều kiện (Conditional Breakpoint)** (ví dụ dừng tại dòng 25 chỉ khi `i == 500` hoặc `sum < 0`) giúp bỏ qua 499 vòng đầu tiên và dừng lại chính xác tại khoảnh khắc trạng thái sắp chuyển sang sai.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 3: §3.6 Using an integrated debugger: Stepping & §3.7 Running to a point and breakpoints',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-missing-semester',
              locator: 'Lecture 7: Compiling with debug symbols (`-g`) and setting breakpoints (`break`, conditional breakpoints)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'pdd-dc-stepping-watches-inspection',
          title: 'Ba thao tác đi từng bước lệnh (Step Over, Step Into, Step Out) và theo dõi biểu thức trạng thái (Watches)',
          level: 'core',
          paragraphs: [
            'Sau khi chương trình đã tạm dừng tại một điểm dừng, trình gỡ lỗi cung cấp ba thao tác điều khiển luồng thực thi từng bước mà mọi lập trình viên phải phân biệt chính xác dựa trên cách chúng xử lý **lời gọi hàm**: (1) **Step Over (`next` / `F10`)**: thực thi dòng lệnh hiện tại và dừng ở dòng kế tiếp trong *cùng hàm hiện tại*; nếu dòng hiện tại có gọi một hàm con `tinhToan(x)`, trình gỡ lỗi sẽ chạy trọn vẹn hàm `tinhToan(x)` ở tốc độ bình thường rồi dừng lại ngay sau khi hàm đó trả về — rất hữu ích khi ta tin rằng hàm con đó đã đúng (như các hàm thư viện chuẩn `std::sort`, `v.push_back`) và không muốn đi lạc vào mã nguồn bên trong nó; (2) **Step Into (`step` / `F11`)**: nếu dòng hiện tại có gọi một hàm do ta viết, trình gỡ lỗi sẽ bước **vào bên trong** dòng lệnh đầu tiên của hàm con đó để kiểm tra từng bước bên trong; và (3) **Step Out / Finish (`finish` / `Shift+F11`)**: chạy nốt phần còn lại của hàm con hiện tại cho đến khi nó `return` và dừng lại ngay tại nơi gọi hàm ở tầng ngoài.',
            'Trong khi đi từng bước, người học sử dụng cửa sổ biến cục bộ (Locals), lệnh in giá trị (`print` trong `gdb`/`lldb`) hoặc danh sách **Biểu thức theo dõi (Watch expressions)** để quan sát không chỉ từng biến đơn lẻ mà cả giá trị của các biểu thức phức hợp (như `v[i]`, `v.size()`, `left <= right`) tự động cập nhật sau mỗi bước lệnh, kèm theo **Điểm canh dữ liệu (Watchpoint / Data Breakpoint)** để yêu cầu debugger tự động dừng ngay khi một biến cụ thể bị thay đổi giá trị.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 3: §3.6 Stepping (Step into, Step over, Step out) & §3.8 Watching variables',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'pdd-dc-callstack-frames-backtrace',
          title: 'Cấu trúc Ngăn xếp lời gọi (Call Stack), Khung kích hoạt (Stack Frame) và đọc vết ngăn xếp (Backtrace) khi chương trình sập',
          level: 'core',
          paragraphs: [
            'Khi hàm `main()` gọi hàm `xuLyLop()`, rồi bên trong `xuLyLop()` lại gọi `tinhDiemTrungBinh()`, máy tính làm thế nào để nhớ được từng hàm đang chạy dở ở dòng nào và biến cục bộ của hàm nào thuộc về hàm đó? Tiểu mục này giải thích cơ chế **Ngăn xếp lời gọi (Call Stack)**: mỗi khi một hàm được gọi, một **khung ngăn xếp (stack frame / activation record)** mới chứa các tham số, biến cục bộ của lần gọi đó và địa chỉ quay về (return address) được đẩy (push) lên đỉnh ngăn xếp; khi hàm đó thực hiện `return`, khung của nó được lấy ra (pop) khỏi đỉnh ngăn xếp và luồng điều khiển quay trở lại đúng dòng đang chờ của hàm gọi phía dưới.',
            'Hiểu rõ Call Stack cho phép người học đọc thành thạo **vết ngăn xếp (Backtrace / Stack Trace)** — bảng danh sách các khung hàm từ đỉnh ngăn xếp (hàm đang chạy tại thời điểm dừng, frame `#0`) đi ngược xuống đáy ngăn xếp (`main()`). Khi một chương trình bị dừng bất thường do vi phạm `assert` hoặc truy cập ngoài biên `v.at(i)`, chỉ cần mở chương trình trong debugger và xem Backtrace (`bt` trong `gdb`/`lldb`), người học không chỉ biết chương trình dừng ở hàm nào mà còn có thể chuyển ngữ cảnh lên/xuống giữa các khung hàm (`frame`) để xem hàm cha đã truyền những giá trị đối số nào vào khiến hàm con gặp sự cố.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 3: §3.9 Using an integrated debugger: The call stack',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-missing-semester',
              locator: 'Lecture 7: Stack traces, backtraces (`bt`), and inspecting stack frames',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'pdd-testing-edge-cases',
      title: 'Chương 4 — Thiết kế ca kiểm thử (Test Cases), phân vùng tương đương, phân tích biên và kiểm thử hồi quy',
      overview: [
        'Chương cuối trang bị phương pháp kiểm chứng chủ động cho chương trình: thay vì gõ tay vài con số dễ dãi như `1 2 3` rồi vội kết luận chương trình đã đúng, người học biết cách thiết kế một bộ ca kiểm thử có hệ thống dựa trên phân vùng tương đương, phân tích giá trị biên, độ bao phủ nhánh/vòng lặp và viết hàm tự động hóa việc chạy kiểm tra hồi quy sau mỗi lần sửa mã.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 9: §9.1–9.3 Introduction to testing your code and code coverage',
          relationship: 'primary',
        },
        {
          sourceId: 'swe-at-google',
          locator: 'Chapter 11 (Testing Overview) & Chapter 12 (Unit Testing)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'pdd-tec-equivalence-boundary-analysis',
          title: 'Phân vùng tương đương (Equivalence Partitioning), Phân tích giá trị biên (Boundary Value Analysis) và danh mục trường hợp đặc biệt',
          level: 'core',
          paragraphs: [
            'Vì miền đầu vào của một hàm thường có hàng tỷ khả năng (chẳng hạn mọi vector số nguyên), ta không thể kiểm thử toàn bộ (exhaustive testing) mà phải chọn một tập nhỏ các ca kiểm thử đại diện có khả năng phát hiện lỗi cao nhất. Phương pháp **Phân vùng tương đương (Equivalence Partitioning)** chia miền đầu vào thành các nhóm (phân vùng) mà thuật toán xử lý theo cùng một nhánh logic (ví dụ với hàm tính thuế theo bậc thu nhập: nhóm âm không hợp lệ, nhóm miễn thuế $[0, 11]$, nhóm bậc một $(11, 18]$, nhóm bậc cao $> 18$), từ đó chọn ít nhất một giá trị đại diện nằm giữa mỗi phân vùng.',
            'Tuy nhiên, phần lớn các lỗi lệch một đơn vị (`<` so với `<=`) lại nằm ngay trên ranh giới giữa hai phân vùng. Do đó, phương pháp **Phân tích giá trị biên (Boundary Value Analysis)** yêu cầu kiểm thử trực tiếp các giá trị nằm ngay tại biên và sát hai bên biên (ví dụ với ngưỡng $11$: thử $10, 11, 12$). Đối với các thuật toán trên dãy và số nguyên, tiểu mục hệ thống hóa danh mục các ca biên bắt buộc phải xét: dãy rỗng ($n = 0$), dãy chỉ có $1$ phần tử ($n = 1$), dãy có $2$ phần tử (đúng thứ tự và ngược thứ tự), dãy mà mọi phần tử đều bằng nhau, số $0$, số âm, phần tử cần tìm nằm ở ngay đầu dãy (`index 0`) hoặc cuối dãy (`index n-1`), và các giá trị cực đại/cực tiểu của kiểu dữ liệu (`INT_MAX`, `INT_MIN`) dễ gây tràn số khi cộng hoặc nhân.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 9: §9.2 Code coverage & §9.3 Common semantic errors in C++ (Boundary and edge case testing)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'pdd-tec-glassbox-coverage-metrics',
          title: 'Kiểm thử hộp đen so với kiểm thử hộp trắng và các mức độ bao phủ mã nguồn (Statement, Branch, Loop Coverage)',
          level: 'core',
          paragraphs: [
            'Việc thiết kế ca kiểm thử dựa trên hai góc nhìn bổ sung cho nhau: **Kiểm thử hộp đen (Black-box testing)** chỉ dựa vào đặc tả Đầu vào – Đầu ra của hàm mà không nhìn vào mã nguồn bên trong, giúp phát hiện các trường hợp đặc tả yêu cầu nhưng người lập trình quên xử lý; ngược lại, **Kiểm thử hộp trắng / hộp kính (White-box / Glass-box testing)** nhìn trực tiếp vào cấu trúc câu lệnh bên trong hàm để thiết kế các đầu vào ép chương trình phải đi qua mọi nhánh lệnh.',
            'Tiểu mục làm rõ ba mức **độ bao phủ mã nguồn (code coverage)** trong kiểm thử hộp trắng: (1) **Bao phủ câu lệnh (Statement coverage)**: mỗi dòng lệnh trong hàm được chạy qua ít nhất một lần; (2) **Bao phủ nhánh (Branch coverage)**: mọi điều kiện `if` đều được thử cả trường hợp `true` lẫn trường hợp `false` (kể cả khi không viết nhánh `else` tường minh); và (3) **Bao phủ vòng lặp (Loop coverage — quy tắc 0, 1, 2)**: thử các đầu vào làm vòng lặp chạy $0$ lần (bỏ qua luôn), chạy đúng $1$ lần, và chạy nhiều hơn $1$ lần. Tiểu mục cũng nhấn mạnh giới hạn quan trọng: đạt 100% bao phủ câu lệnh hay nhánh là điều kiện cần để không bỏ sót vùng mã chết, nhưng **chưa phải là điều kiện đủ để chứng minh hàm không còn lỗi** (chẳng hạn khi công thức tính toán trong câu lệnh đó bị thiếu xét trường hợp chia cho 0 hoặc tràn số).',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 9: §9.2 Code coverage (Statement, branch, and loop 0-1-2 testing)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'pdd-tec-unit-test-harness-regression',
          title: 'Viết hàm kiểm thử đơn vị tự kiểm (Self-checking Unit Tests) và kiểm thử hồi quy (Regression Testing)',
          level: 'core',
          paragraphs: [
            'Nếu việc kiểm thử được thực hiện bằng cách chạy chương trình, gõ đầu vào từ bàn phím rồi dùng mắt tự đọc kết quả trên màn hình, người học sẽ ngại chạy lại toàn bộ các ca kiểm thử cũ mỗi khi sửa một dòng mã mới. Tiểu mục này hướng dẫn cách viết các **hàm kiểm thử đơn vị tự kiểm (self-checking unit tests)** ngay trong C++: tách các hàm thuật toán ra khỏi `main`, sau đó viết một hàm `chayKiemThu()` gọi trực tiếp hàm cần kiểm tra với từng bộ đầu vào chuẩn và dùng `assert(ketQuaThucTe == ketQuaMongDoi)` để máy tính tự động đối chiếu kết quả.',
            'Hơn nữa, mỗi khi phát hiện và sửa xong một lỗi mới trong quá trình debug, ca đầu vào tối thiểu đã làm lộ lỗi đó phải được giữ lại vĩnh viễn trong hàm `chayKiemThu()` để phục vụ **kiểm thử hồi quy (regression testing)**. Nhờ vậy, bất kỳ lần chỉnh sửa hay tối ưu hóa mã nguồn nào trong tương lai nếu vô tình làm hỏng lại trường hợp cũ hoặc phá vỡ các trường hợp biên đã đúng trước đó đều sẽ bị bộ kiểm thử hồi quy phát hiện tức khắc chỉ bằng một lệnh chạy.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 9: §9.1 Introduction to testing your code (Writing automated test functions and preserving tests)',
              relationship: 'primary',
            },
            {
              sourceId: 'swe-at-google',
              locator: 'Chapter 11 & Chapter 12: Automated Testing and Regression Prevention',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
  ],
};
