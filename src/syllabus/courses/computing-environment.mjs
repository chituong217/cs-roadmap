export const COURSE_COMPUTING_ENVIRONMENT = {
  id: 'computing-environment',
  code: 'CS-01',
  title: 'Làm quen máy tính và môi trường học',
  blockId: 'block-1',
  level: 'core',
  prerequisites: [],
  overview: [
    'Môn học đóng vai trò là điểm khởi đầu thực sự từ số 0 cho người học chưa từng sử dụng môi trường lập trình, chưa quen cấu trúc tệp hay cửa sổ dòng lệnh. Thay vì mặc định người học đã biết mở terminal hay cài đặt trình biên dịch, môn học giải thích tuần tự cách máy tính tổ chức dữ liệu lâu dài thành các tệp (files) và thư mục (directories) trên ổ đĩa, sự khác biệt giữa tên tệp, phần mở rộng và định dạng dữ liệu bên trong, cũng như cách xác định vị trí của một tệp thông qua đường dẫn tuyệt đối (absolute path) và đường dẫn tương đối (relative path) tính từ thư mục làm việc hiện tại.',
    'Trên nền tảng hệ thống tệp đó, môn học làm rõ mô hình hai tầng lưu trữ cơ bản (bộ nhớ khả biến RAM đang chạy so với ổ đĩa lưu trữ bền vững), khái niệm tiến trình (process) khi một chương trình được hệ điều hành nạp lên thực thi, và sự khác biệt giữa giao diện đồ họa (GUI) với giao diện dòng lệnh (CLI/Shell). Hai chương cuối trang bị cơ chế vận hành của trình soạn thảo mã nguồn, cách shell tìm chương trình qua biến môi trường `PATH`, mã thoát (exit code), các luồng vào/ra chuẩn và phương pháp tra cứu tài liệu kỹ thuật cùng thông báo lỗi một cách có hệ thống.',
  ],
  boundaries: [
    'Môn học được thiết kế cho người hoàn toàn chưa biết gì về lập trình và hệ điều hành; mọi thuật ngữ nền tảng như byte, tệp văn bản, đường dẫn, thư mục hiện tại, tiến trình và biến môi trường đều được định nghĩa từ gốc trước khi dùng.',
    'Chưa đi vào cấu trúc phần cứng vi kiến trúc (thanh ghi, ALU, pipeline CPU) thuộc Môn CS-22 và CS-23, cũng chưa đi vào lập trình hệ thống POSIX cấp thấp (`fork`, `execve`, bảng trang bộ nhớ ảo) thuộc Môn CS-24 và CS-25.',
    'Trọng tâm của phần dòng lệnh và công cụ ở môn này là hiểu cơ chế điều hướng thư mục, truyền đối số và gọi trình biên dịch cho một chương trình nhỏ; các đường ống xử lý văn bản phức tạp và hệ thống build đa tệp (`Make`/`CMake`) được đặt ở Môn CS-06.',
  ],
  sources: [
    {
      sourceId: 'mit-missing-semester',
      locator: '2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/), Lecture 2: Shell Tools and Scripting (/2020/shell-tools/), & Lecture 5: Command-line Environment (/2020/command-line/)',
      relationship: 'primary',
    },
    {
      sourceId: 'learncpp',
      locator: 'Chapter 0: §0.1–0.8 Introduction to Programming Languages, C/C++, Development Process, and Compiler Configuration',
      relationship: 'primary',
    },
  ],
  chapters: [
    {
      id: 'ce-files-paths',
      title: 'Chương 1 — Hệ thống tệp, thư mục, đường dẫn và mã hóa văn bản',
      overview: [
        'Chương này giải quyết rào cản đầu tiên của người mới bắt đầu: hiểu một "tệp" trên máy tính thực chất là gì và nó nằm ở đâu. Nội dung đi từ biểu diễn dữ liệu dưới dạng dãy byte, sự khác biệt giữa tệp văn bản thuần (plain text) dùng để viết mã nguồn với tệp văn bản có định dạng (như `.docx`, `.pdf`) và tệp nhị phân, đến cấu trúc cây thư mục phân cấp và quy tắc viết đường dẫn trên các hệ điều hành phổ biến.',
      ],
      sources: [
        {
          sourceId: 'mit-missing-semester',
          locator: '2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/ — Navigating in the Shell, Root Directory, Absolute vs Relative Paths)',
          relationship: 'primary',
        },
        {
          sourceId: 'learncpp',
          locator: 'Chapter 0: §0.4–0.5 Introduction to C++ development and source files',
          relationship: 'supplementary',
        },
      ],
      topics: [
        {
          id: 'ce-fp-files-bytes-extensions',
          title: 'Khái niệm tệp (file), dãy byte, phần mở rộng tên tệp và sự khác biệt giữa tên tệp với nội dung thực',
          level: 'core',
          paragraphs: [
            'Ở mức lưu trữ của hệ điều hành, một tệp (file) là một dãy hữu hạn các byte (mỗi byte gồm 8 bit nhị phân biểu diễn một số nguyên từ $0$ đến $255$) được gắn với một tên định danh trên thiết bị lưu trữ. Tiểu mục này làm rõ rằng máy tính không tự hiểu "ý nghĩa" của tệp nếu không có chương trình giải mã dãy byte đó: cùng một chuỗi byte có thể được hiểu là các ký tự văn bản nếu mở bằng trình soạn thảo, hoặc là điểm ảnh/lệnh máy nếu mở bằng chương trình khác.',
            'Nội dung phân biệt rõ **tên tệp và phần mở rộng** (file extension như `.txt`, `.cpp`, `.png`, `.exe`) với **định dạng dữ liệu thực tế** bên trong tệp. Phần mở rộng chỉ là hậu tố quy ước trong tên gọi để gợi ý cho người dùng và giao diện đồ họa biết nên mở tệp bằng phần mềm nào; việc đổi tên một tệp ảnh `hinh.png` thành `code.cpp` hoàn toàn không biến dãy byte ảnh bên trong thành mã nguồn C++ hợp lệ. Phạm vi tiểu mục cũng giải thích vì sao nhiều hệ điều hành mặc định ẩn phần mở rộng tên tệp và vì sao người học lập trình cần bật hiển thị đầy đủ phần mở rộng để không nhầm `main.cpp.txt` với `main.cpp`.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 0: §0.4 Introduction to C++ development (Source code files and extensions)',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-missing-semester',
              locator: '2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/ — Files and directories fundamentals)',
              relationship: 'supplementary',
            },
          ],
        },
        {
          id: 'ce-fp-directory-tree-paths',
          title: 'Cấu trúc cây thư mục phân cấp, thư mục hiện tại (working directory), đường dẫn tuyệt đối và tương đối',
          level: 'core',
          paragraphs: [
            'Để quản lý hàng trăm nghìn tệp, hệ điều hành tổ chức chúng vào các thư mục (directories/folders) lồng nhau tạo thành một cấu trúc cây phân cấp xuất phát từ gốc: trên Linux/macOS là một thư mục gốc duy nhất `/`, còn trên Windows là gốc của từng ổ đĩa logic như `C:\\`. Tiểu mục này định nghĩa khái niệm **thư mục làm việc hiện tại** (current working directory — `cwd`) là vị trí ngữ cảnh mà một chương trình hoặc cửa sổ dòng lệnh đang đứng tại thời điểm thực thi.',
            'Từ khái niệm thư mục hiện tại, nội dung phân biệt hai cách chỉ định vị trí của một tệp hoặc thư mục: **đường dẫn tuyệt đối** (absolute path) luôn bắt đầu từ gốc của hệ thống tệp (ví dụ `/home/user/project/main.cpp` hoặc `C:\\Users\\user\\project\\main.cpp`) nên có ý nghĩa cố định bất kể đang đứng ở đâu; ngược lại, **đường dẫn tương đối** (relative path) mô tả lộ trình đi từ thư mục hiện tại tới đích (ví dụ `src/main.cpp` hoặc `../data/input.txt`), sử dụng hai ký hiệu đặc biệt chuẩn hóa là `.` (chính thư mục hiện tại) và `..` (thư mục cha ngay phía trên). Tiểu mục cũng chỉ rõ sự khác biệt về ký tự phân cách đường dẫn giữa chuẩn POSIX (`/`) và Windows truyền thống (`\\`), cũng như lỗi khi đường dẫn chứa khoảng trắng mà không được đặt trong dấu ngoặc kép.',
          ],
          sources: [
            {
              sourceId: 'mit-missing-semester',
              locator: '2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/ — Navigating in the shell: `pwd`, `cd`, `.`, `..`, `/` vs `\\`)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ce-fp-plaintext-encoding-newlines',
          title: 'Tệp văn bản thuần (plain text) so với tệp nhị phân, bảng mã ASCII/UTF-8 và ký tự xuống dòng LF vs CRLF',
          level: 'core',
          paragraphs: [
            'Mã nguồn chương trình, tệp cấu hình và dữ liệu đầu vào chuẩn trong khoa học máy tính hầu hết được lưu dưới dạng **văn bản thuần** (plain text) thay vì tài liệu văn phòng (rich text như `.docx`). Tiểu mục này giải thích lý do: tệp `.docx` hay `.pdf` chứa hàng loạt cấu trúc đóng gói, thẻ định dạng phông chữ, lề trang và siêu dữ liệu khiến trình biên dịch không thể đọc trực tiếp như các câu lệnh, trong khi tệp văn bản thuần chỉ chứa đúng dãy mã số của từng ký tự văn bản.',
            'Nội dung giới thiệu cơ chế ánh xạ giữa văn bản và con số thông qua bảng mã **ASCII** (dùng 1 byte cho 128 ký tự tiếng Anh, chữ số và ký hiệu điều khiển cơ bản) và chuẩn **Unicode / UTF-8**. Tiểu mục phân biệt rõ ba khái niệm: (1) **Điểm mã Unicode (Unicode scalar value, loại trừ điểm mã surrogate)** như `U+0041` (`\'A\'`), được lược đồ **UTF-8** mã hóa bằng độ dài thay đổi từ **1 đến 4 byte** cho mỗi điểm mã (tương thích ngược hoàn toàn với ASCII ở 128 mã đầu); và (2) **Ký tự cảm nhận bởi người dùng trên màn hình (extended grapheme cluster)** có thể được ghép từ **một hoặc nhiều điểm mã Unicode** (ví dụ chữ tiếng Việt tổ hợp gồm chữ cái cơ sở cộng các dấu thanh/dấu phụ rời, hoặc một biểu tượng emoji ghép bằng Zero Width Joiner như `👩‍💻` gồm 3 điểm mã và chiếm tới 11 byte UTF-8) — do đó kích thước tệp tính theo byte không nhất thiết bằng số điểm mã hay số ký tự hiển thị. Cuối cùng, tiểu mục làm rõ sự khác biệt lịch sử về ký hiệu kết thúc dòng giữa hệ Unix/Linux/macOS (1 byte `LF` — `\\n`, mã `0x0A`) và Windows (2 byte `CRLF` — `\\r\\n`, mã `0x0D 0x0A`).',
          ],
          sources: [
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 0 & Week 1 Notes: Representing Text with ASCII, Unicode Code Points, UTF-8, and Emoji ZWJ Sequences',
              relationship: 'primary',
            },
            {
              sourceId: 'learncpp',
              locator: 'Chapter 4: §4.11 Chars (ASCII representation and newline characters)',
              relationship: 'supplementary',
            },
          ],
        },
      ],
    },
    {
      id: 'ce-storage-memory-os',
      title: 'Chương 2 — Bộ nhớ RAM, lưu trữ ổ đĩa, tiến trình và vai trò của hệ điều hành',
      overview: [
        'Chương này xây dựng mô hình khái niệm tối thiểu về cách máy tính vận hành một chương trình khi người dùng khởi chạy nó. Nội dung làm rõ vì sao máy tính cần cả ổ đĩa lẫn RAM, điều gì xảy ra khi một tệp chương trình trên ổ đĩa biến thành một tiến trình đang chạy trong RAM, và vai trò điều phối của hệ điều hành ở mức người sử dụng và lập trình viên nhập môn.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 0: §0.1–0.3 Introduction to programming languages and machine code execution',
          relationship: 'primary',
        },
        {
          sourceId: 'mit-missing-semester',
          locator: '2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/) & Lecture 5: Command-line Environment (/2020/command-line/ — Processes, Signals, and Job Control)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'ce-smo-ram-vs-disk',
          title: 'Sự khác biệt cơ chế giữa bộ nhớ chính khả biến (RAM) và bộ nhớ lưu trữ bền vững (SSD/HDD)',
          level: 'core',
          paragraphs: [
            'Người mới học thường nhầm lẫn giữa "bộ nhớ" dùng để chứa các biến khi chương trình đang chạy với "dung lượng ổ cứng" dùng để lưu tệp lâu dài. Tiểu mục này phân biệt hai tầng lưu trữ theo ba tiêu chí vật lý và chức năng: (1) **Tính bền vững vật lý (persistence vs. volatility)**: ổ đĩa (SSD/HDD) là bộ nhớ không khả biến (non-volatile), giữ nguyên các tệp mã nguồn và dữ liệu ngay cả khi tắt nguồn máy tính; ngược lại, **RAM** (Random Access Memory) là bộ nhớ khả biến (volatile) cần nguồn điện duy trì và mất dữ liệu khi máy tính mất điện hoặc tắt máy. Riêng khi một **tiến trình kết thúc** trong lúc máy vẫn đang bật, không phải toàn bộ RAM vật lý bị xóa sạch, mà hệ điều hành thu hồi không gian địa chỉ ảo và các khung trang của tiến trình đó để cấp phát lại cho tiến trình khác (nội dung bit vật lý cũ không còn thuộc quyền truy cập của tiến trình đã thoát và không được bảo đảm giữ lại); (2) **Tốc độ truy cập**: CPU đọc/ghi dữ liệu trên RAM nhanh hơn hàng nghìn đến hàng triệu lần so với truy cập tệp trên ổ đĩa; và (3) **Cách sử dụng trong lập trình**: biến số của chương trình nằm trong RAM, muốn giữ kết quả lâu dài qua các lần chạy thì chương trình phải ghi dữ liệu ra tệp trên ổ đĩa.',
            'Bằng mô hình phân tách này, người học giải thích được ngay hiện tượng thực tế: khi đang gõ mã nguồn trong trình soạn thảo nhưng chưa bấm Lưu (Save), những ký tự vừa gõ mới chỉ nằm trong vùng nhớ RAM của trình soạn thảo; chỉ khi thực hiện thao tác ghi tệp, hệ điều hành mới cập nhật dãy byte đó xuống tệp `.cpp` trên ổ đĩa để trình biên dịch trên ổ đĩa có thể đọc được bản mới nhất.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 0: §0.1 Introduction to these tutorials and computer memory basics',
              relationship: 'primary',
            },
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 4 Notes: Memory Hierarchy Overview (RAM vs Persistent Storage)',
              relationship: 'supplementary',
            },
          ],
        },
        {
          id: 'ce-smo-program-vs-process',
          title: 'Phân biệt tệp chương trình thụ động trên đĩa với tiến trình (process) đang thực thi và vai trò của hệ điều hành',
          level: 'core',
          paragraphs: [
            'Tiểu mục này thiết lập sự phân biệt cốt lõi giữa **chương trình (program)** và **tiến trình (process)**. Một chương trình (chẳng hạn tệp thực thi `hello.exe` hoặc `./hello` sau khi biên dịch) chỉ là một tệp nhị phân nằm tĩnh trên ổ đĩa chứa các chỉ thị máy và dữ liệu ban đầu. Khi người dùng yêu cầu chạy chương trình đó, **hệ điều hành (Operating System — OS)** sẽ tạo ra một tiến trình mới: cấp phát cho nó một không gian địa chỉ bộ nhớ riêng biệt, nạp mã máy từ tệp vào RAM, gắn cho nó một mã định danh tiến trình (Process ID — `PID`) và đưa vào hàng đợi để bộ xử lý trung tâm (CPU) thực thi từng lệnh.',
            'Từ định nghĩa này, người học hiểu vì sao từ một tệp chương trình duy nhất trên đĩa có thể mở đồng thời nhiều cửa sổ hoặc chạy nhiều lần song song thành các tiến trình độc lập không làm hỏng biến của nhau. Tiểu mục cũng giới thiệu vai trò bảo vệ và trung gian của hệ điều hành: chương trình của người học không tự ý chạm trực tiếp vào phần cứng ổ đĩa, bàn phím hay màn hình, mà phải gửi yêu cầu qua các dịch vụ chuẩn của hệ điều hành. Nếu một tiến trình cố truy cập một trang bộ nhớ chưa được ánh xạ hoặc vi phạm quyền đọc/ghi phần cứng của trang đó, phần cứng quản lý bộ nhớ (MMU) và hệ điều hành sẽ chặn lại và chấm dứt tiến trình (như lỗi `Segmentation fault` / `Access violation`); ngược lại, nếu chương trình đọc/ghi nhầm chỉ số nhưng địa chỉ đó vẫn nằm trong vùng nhớ hợp lệ đã cấp cho chính tiến trình, hệ điều hành không tự phát hiện được mà dữ liệu nội bộ sẽ bị làm hỏng âm thầm (silent memory corruption) — lý do cần các công cụ kiểm tra bộ nhớ như Valgrind hoặc AddressSanitizer ở các môn sau.',
          ],
          sources: [
            {
              sourceId: 'mit-missing-semester',
              locator: '2020 Edition — Lecture 5: Command-line Environment (/2020/command-line/ — Job Control, Signals, and Processes)',
              relationship: 'primary',
            },
            {
              sourceId: 'ostep-v110',
              locator: 'Chapter 2 (Introduction to Operating Systems), Chapter 4 (§4.1 The Abstraction: A Process), & Chapter 13 (The Abstraction: Address Spaces)',
              relationship: 'supplementary',
            },
            {
              sourceId: 'dive-into-systems',
              locator: 'Chapter 3: §3.3 Debugging Memory with Valgrind (Segmentation faults vs silent memory corruption)',
              relationship: 'supplementary',
            },
          ],
        },
        {
          id: 'ce-smo-gui-vs-cli-permissions',
          title: 'Giao diện đồ họa (GUI) so với giao diện dòng lệnh (CLI) và quyền truy cập tệp cơ bản (đọc, ghi, thực thi)',
          level: 'core',
          paragraphs: [
            'Máy tính cung cấp hai phương thức chính để con người ra lệnh cho hệ điều hành: **Giao diện người dùng đồ họa (GUI — Graphical User Interface)** dựa trên biểu tượng, cửa sổ và thao tác chuột (như File Explorer hay Finder), và **Giao diện dòng lệnh (CLI — Command-Line Interface)** dựa trên việc nhập các câu lệnh văn bản vào một chương trình thông dịch lệnh gọi là **shell**. Tiểu mục này làm rõ rằng GUI và CLI không phải hai thế giới tách rời mà cùng thao tác trên đúng một cây thư mục và cùng một hệ điều hành; việc tạo thư mục bằng lệnh `mkdir` trong terminal lập tức xuất hiện trong cửa sổ File Explorer.',
            'Nội dung giải thích vì sao lập trình viên cần dùng CLI bên cạnh GUI: câu lệnh văn bản chỉ định chính xác tên chương trình, các cờ cấu hình (flags/options), tệp đầu vào/đầu ra, đồng thời có thể lặp lại chính xác hoặc ghép nối tự động mà không phụ thuộc vị trí bấm chuột. Phần cuối giới thiệu mô hình quyền tệp cơ bản của hệ điều hành gồm ba quyền **Đọc (Read — `r`)**, **Ghi (Write — `w`)** và **Thực thi (Execute — `x`)**, giải thích vì sao một tệp kịch bản hoặc tệp nhị phân trên Linux/macOS cần có quyền thực thi (`chmod +x`) thì hệ điều hành mới cho phép khởi chạy như một chương trình.',
          ],
          sources: [
            {
              sourceId: 'mit-missing-semester',
              locator: '2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/ — Using the shell, arguments, and file permissions `ls -l`, `chmod`)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'ce-terminal-toolchain',
      title: 'Chương 3 — Cửa sổ dòng lệnh (Terminal/Shell), biến môi trường PATH và chuỗi công cụ biên dịch',
      overview: [
        'Chương này hướng dẫn người học từ chỗ mở được cửa sổ terminal lần đầu tiên đến chỗ hiểu rõ cơ chế một câu lệnh được shell phân tích, tìm kiếm qua biến môi trường `PATH`, khởi chạy thành tiến trình và trả về trạng thái kết thúc, đồng thời kết nối trực tiếp với quy trình soạn thảo – biên dịch – chạy một chương trình C++.',
      ],
      sources: [
        {
          sourceId: 'mit-missing-semester',
          locator: '2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/ — Environment variables, PATH, streams, and running programs)',
          relationship: 'primary',
        },
        {
          sourceId: 'learncpp',
          locator: 'Chapter 0: §0.5–0.8 Introduction to the compiler, linker, libraries, and IDE vs command line',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'ce-tt-terminal-vs-shell-anatomy',
          title: 'Phân biệt trình giả lập thiết bị đầu cuối (Terminal Emulator) với trình thông dịch lệnh (Shell) và cấu trúc một câu lệnh',
          level: 'core',
          paragraphs: [
            'Trong giao tiếp hàng ngày, các từ "terminal", "console", "command prompt" và "shell" thường bị gọi lẫn lộn, nhưng về mặt kiến trúc phần mềm chúng gồm hai thành phần tách biệt: **Trình giả lập thiết bị đầu cuối (Terminal Emulator)** (như Windows Terminal, GNOME Terminal, iTerm2 hay khung Terminal tích hợp trong VS Code) chỉ là ứng dụng cửa sổ đồ họa có nhiệm vụ hiển thị ký tự lên màn hình và nhận phím bấm từ bàn phím; còn **Shell** (như `bash`, `zsh`, hoặc `PowerShell`) mới là chương trình chạy bên trong terminal đó để đọc dòng văn bản người dùng nhập vào, phân tích cú pháp và yêu cầu hệ điều hành thực thi lệnh.',
            'Tiểu mục phân tích cấu trúc chuẩn của một dòng lệnh: từ đầu tiên là tên lệnh hoặc đường dẫn tới chương trình cần chạy (ví dụ `g++` hoặc `ls`), theo sau là danh sách các **đối số dòng lệnh (command-line arguments)** được tách nhau bởi khoảng trắng, bao gồm các cờ tùy chọn (options/flags như `-Wall`, `-o`) và đường dẫn tệp đích. Người học cũng được làm rõ cơ chế tách từ theo khoảng trắng của shell: nếu tên thư mục là `Bai Tap` mà không bọc trong dấu ngoặc kép `"Bai Tap"`, shell sẽ hiểu nhầm thành hai đối số rời nhau là `Bai` và `Tap`.',
          ],
          sources: [
            {
              sourceId: 'mit-missing-semester',
              locator: '2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/ — What is the shell? Command arguments, whitespace quoting, and shell prompt)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ce-tt-core-filesystem-commands',
          title: 'Các thao tác điều hướng và quản lý tệp cơ bản trên dòng lệnh cùng nguyên tắc an toàn khi xóa/ghi đè',
          level: 'core',
          paragraphs: [
            'Tiểu mục này hệ thống hóa nhóm thao tác cốt lõi để tự chủ trong môi trường dòng lệnh mà không cần học thuộc hàng trăm lệnh: kiểm tra thư mục hiện tại (`pwd`), liệt kê nội dung thư mục kèm tệp ẩn và thông tin chi tiết (`ls`, `ls -la`), di chuyển giữa các thư mục (`cd`), tạo thư mục mới (`mkdir`), sao chép tệp (`cp`), đổi tên hoặc di chuyển tệp (`mv`), và xem nhanh nội dung tệp văn bản ngắn (`cat`, `less`). Mỗi thao tác đều được giải thích dựa trên tác động của nó lên cây thư mục và đường dẫn tương đối/tuyệt đối đã học ở Chương 1.',
            'Đặc biệt, tiểu mục nhấn mạnh sự khác biệt cơ chế giữa việc xóa tệp trong giao diện đồ họa (thường chỉ chuyển tệp vào thư mục Thùng rác / Recycle Bin nên khôi phục được) với lệnh xóa trên dòng lệnh (`rm`): lệnh `rm` tháo bỏ liên kết tệp khỏi thư mục ngay lập tức mà không qua thùng rác và mặc định không hỏi xác nhận lại. Hiểu rõ cơ chế này giúp người mới tránh các thao tác phá hủy dữ liệu ngoài ý muốn khi dùng cờ đệ quy (`rm -r`) hoặc khi ghi đè tệp đích trong `mv`/`cp`.',
          ],
          sources: [
            {
              sourceId: 'mit-missing-semester',
              locator: '2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/ — Navigating and manipulating files `pwd`, `cd`, `ls`, `mv`, `cp`, `mkdir`, `rm`)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ce-tt-env-path-exit-streams',
          title: 'Biến môi trường, cơ chế tìm chương trình qua PATH, mã thoát (exit status) và các luồng chuẩn sơ cấp',
          level: 'core',
          paragraphs: [
            'Khi người dùng gõ một tên lệnh trần như `g++` hoặc `git` mà không ghi đường dẫn đầy đủ, làm sao shell biết tệp thực thi đó nằm ở thư mục nào trên ổ đĩa? Tiểu mục này giải thích khái niệm **biến môi trường (environment variables)** — tập các cặp tên–giá trị mà mỗi tiến trình kế thừa từ tiến trình cha — và vai trò trung tâm của biến **`PATH`**: `PATH` chứa danh sách các thư mục được phân cách nhau (bởi dấu `:` trên POSIX hoặc `;` trên Windows); shell sẽ duyệt tuần tự từng thư mục trong `PATH` từ trái sang phải để tìm tệp thực thi khớp tên. Nhờ cơ chế này, lỗi kinh điển `"command not found"` hay `"is not recognized as an internal or external command"` được chẩn đoán tức thì: hoặc chương trình chưa được cài, hoặc thư mục chứa nó chưa nằm trong `PATH`. Muốn chạy một tệp thực thi nằm ngay tại thư mục hiện tại (vốn mặc định không nằm trong `PATH` vì lý do an toàn), người học phải chỉ định rõ đường dẫn tương đối `./ten_chuong_trinh`.',
            'Phần thứ hai của tiểu mục giới thiệu hai cơ chế giao tiếp chuẩn của mọi tiến trình dòng lệnh: (1) **Mã thoát (exit code / exit status)** — một số nguyên mà tiến trình trả về cho hệ điều hành khi kết thúc, trong đó quy ước toàn cục là `0` biểu thị thành công và mọi giá trị khác `0` biểu thị có lỗi; và (2) Ba kênh văn bản mặc định gồm **đầu vào chuẩn (`stdin`)**, **đầu ra chuẩn (`stdout`)** và **đầu ra báo lỗi chuẩn (`stderr`)**, cùng thao tác chuyển hướng cơ bản (`>` để ghi `stdout` ra tệp, `<` để lấy dữ liệu từ tệp vào `stdin`).',
          ],
          sources: [
            {
              sourceId: 'mit-missing-semester',
              locator: '2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/) & Lecture 2: Shell Tools and Scripting (/2020/shell-tools/ — Exit codes `$?`, `PATH`, `which`, `./program`, `stdin`/`stdout`/`stderr`)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ce-tt-editor-compiler-workflow',
          title: 'Phân biệt trình soạn thảo mã (Code Editor), môi trường tích hợp (IDE) và trình biên dịch (Compiler)',
          level: 'core',
          paragraphs: [
            'Người mới bắt đầu rất dễ đồng nhất phần mềm họ mở lên để gõ code (như Visual Studio Code, CLion, hay Code::Blocks) với chính ngôn ngữ C++ hoặc trình biên dịch. Tiểu mục này tách bạch ba thành phần độc lập trong chuỗi công cụ phát triển phần mềm: (1) **Trình soạn thảo mã nguồn (Text/Code Editor)** chỉ là công cụ giúp đọc, gõ và lưu các tệp văn bản thuần `.cpp`/`.h` kèm tô màu cú pháp; (2) **Trình biên dịch và trình liên kết (Compiler & Linker toolchain)** như GCC (`g++`), Clang (`clang++`) hay MSVC (`cl.exe`) là chương trình dòng lệnh thực sự phân tích cú pháp, kiểm tra kiểu và dịch mã nguồn thành tệp máy thực thi; và (3) **Môi trường phát triển tích hợp (IDE)** là phần mềm đóng gói cả trình soạn thảo, nút bấm gọi trình biên dịch ngầm bên dưới và trình gỡ lỗi vào chung một giao diện.',
            'Việc nắm rõ sự tách biệt này giúp người học chủ động hoàn toàn trước môi trường làm việc: biết cách tự biên dịch một tệp đơn lẻ trực tiếp trên terminal bằng lệnh `g++ -std=c++20 -Wall -Wextra main.cpp -o main` rồi chạy `./main`, đồng thời hiểu rằng khi bấm nút "Run/Build" trong IDE thì thực chất IDE cũng chỉ đang ghép một dòng lệnh tương tự để gọi trình biên dịch ở hậu trường.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 0: §0.5–0.8 Introduction to the compiler, linker, and installing an IDE / command-line configuration',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'ce-docs-navigation',
      title: 'Chương 4 — Phương pháp đọc tài liệu kỹ thuật, giải mã thông báo lỗi và tổ chức không gian học tập',
      overview: [
        'Chương cuối của môn mở đầu trang bị kỹ năng tự học sống còn trong khoa học máy tính: làm thế nào để đọc hiểu một thông báo lỗi dài bằng tiếng Anh kỹ thuật mà không hoảng sợ, cách tra cứu tài liệu tham chiếu chuẩn thay vì sao chép mã nguồn mù quáng, và cách tổ chức thư mục bài tập sạch sẽ, tái lập được.',
      ],
      sources: [
        {
          sourceId: 'mit-missing-semester',
          locator: '2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/) & Lecture 2: Shell Tools and Scripting (/2020/shell-tools/ — Reading manual pages `man`, `--help`, `tldr`)',
          relationship: 'primary',
        },
        {
          sourceId: 'learncpp',
          locator: 'Chapter 0 (§0.9 Configuring your compiler: warning and error levels) & Chapter 3 (§3.1 Syntax and semantic errors)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'ce-dn-anatomy-of-diagnostic',
          title: 'Giải phẫu một thông báo chẩn đoán lỗi (diagnostic message) và nguyên tắc xử lý từ lỗi đầu tiên',
          level: 'core',
          paragraphs: [
            'Khi một lệnh dòng lệnh hoặc trình biên dịch thất bại, nó in ra luồng lỗi chuẩn (`stderr`) một thông báo chẩn đoán có cấu trúc chặt chẽ chứ không phải những dòng chữ ngẫu nhiên. Tiểu mục này hướng dẫn cách đọc các trường thông tin chuẩn trong một thông báo chẩn đoán dạng `duong_dan/ten_tep.cpp:so_dong:so_cot: muc_do: mo_ta_loi`: vị trí tệp xảy ra sự cố, tọa độ dòng và cột nơi công cụ phát hiện bất thường, mức độ nghiêm trọng (`error` ngăn cản việc tạo tệp đích, `warning` cảnh báo cấu trúc tiềm ẩn rủi ro dù vẫn biên dịch được, `note` cung cấp ngữ cảnh bổ sung), và đoạn trích mã nguồn kèm dấu mũ `^` chỉ điểm.',
            'Một quy tắc thực hành quan trọng được giải thích về mặt cơ chế là **luôn đọc và sửa từ thông báo lỗi đầu tiên trên cùng (topmost error)**: khi trình biên dịch gặp một lỗi cú pháp ở dòng 10 (ví dụ thiếu dấu chấm phẩy hoặc viết sai tên kiểu), trạng thái phân tích cú pháp của nó bị lệch khỏi ý đồ của người viết, kéo theo hàng chục thông báo lỗi giả (cascading/spurious errors) ở các dòng 11–50 vốn hoàn toàn đúng. Sửa dứt điểm lỗi gốc đầu tiên rồi dịch lại thường làm biến mất toàn bộ chuỗi lỗi dây chuyền phía sau.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 0 (§0.9 Compiler warnings and errors) & Chapter 1 (§1.1 Compiling your first program)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ce-dn-technical-docs-hierarchy',
          title: 'Phân biệt tài liệu hướng dẫn (tutorial), tài liệu tham chiếu chuẩn (reference manual) và cách tra cứu có kiểm chứng',
          level: 'core',
          paragraphs: [
            'Tài liệu kỹ thuật trong khoa học máy tính được chia thành hai thể loại có mục đích khác hẳn nhau: **Tài liệu hướng dẫn theo lộ trình (Tutorial / Textbook)** (như LearnCpp hoặc giáo trình môn học) giải thích khái niệm theo thứ tự sư phạm cho người mới làm quen; trong khi **Tài liệu tham chiếu kỹ thuật (Reference Manual / Man pages)** (như `man` trên POSIX, cờ `--help` của công cụ dòng lệnh, hoặc trang `cppreference.com` cho C++) là từ điển đặc tả chính xác chữ ký hàm, tham số, giá trị trả về, độ phức tạp, các trường hợp biên và phiên bản chuẩn áp dụng.',
            'Tiểu mục này hướng dẫn người học cách đọc các quy ước ký hiệu phổ biến trong trang hướng dẫn lệnh và tài liệu tham chiếu (chẳng hạn phần đặt trong ngoặc vuông `[OPTION]...` là tùy chọn không bắt buộc, dấu ba chấm `...` chỉ phép lặp nhiều đối số, phần in đậm hoặc ngoài ngoặc là bắt buộc). Đồng thời, tiểu mục đặt ra nguyên tắc vệ sinh học thuật: khi gặp lỗi hoặc hàm lạ, ưu tiên đối chiếu thông báo lỗi gốc với tài liệu tham chiếu để hiểu điều kiện đúng/sai thay vì dán nguyên đoạn mã không hiểu cơ chế từ các diễn đàn vào chương trình.',
          ],
          sources: [
            {
              sourceId: 'mit-missing-semester',
              locator: '2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/) & Lecture 2: Shell Tools and Scripting (/2020/shell-tools/ — Finding help with `man`, `--help`, `tldr`, and reading command synopses)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ce-dn-workspace-hygiene-reproducibility',
          title: 'Tổ chức cây thư mục học tập, tách biệt mã nguồn với tệp sinh ra khi dịch và tính tái lập của môi trường',
          level: 'core',
          paragraphs: [
            'Một thói quen phổ biến gây rối loạn cho người mới học là lưu mọi tệp bài tập với những cái tên mơ hồ (`test1.cpp`, `bai_moi_nhat_final.cpp`) trộn lẫn cùng các tệp thực thi nhị phân ngay trên màn hình Desktop hoặc thư mục Downloads, dẫn đến việc biên dịch nhầm tệp cũ hoặc chạy nhầm chương trình của bài trước. Tiểu mục này trình bày nguyên tắc tổ chức không gian làm việc (workspace hygiene) theo cấu trúc phân cấp: mỗi môn học và mỗi chương/bài toán có thư mục riêng với tên chỉ dùng chữ cái không dấu, chữ số và dấu gạch ngang/gạch dưới, giúp việc điều hướng trên dòng lệnh luôn nhất quán.',
            'Nội dung cũng giải thích sự khác biệt giữa **tệp nguồn gốc (source artifacts)** do con người biên soạn (như `.cpp`, `.h`, `.md`) cần được lưu giữ cẩn thận, với **tệp sinh tự động (build artifacts)** do trình biên dịch tạo ra (như `.o`, `.obj`, `.exe`, `a.out`) có thể xóa đi và tạo lại bất cứ lúc nào từ mã nguồn. Sự phân tách này chuẩn bị trực tiếp mô hình tư duy cho việc dùng tệp `.gitignore` và hệ thống quản lý phiên bản Git ở Môn CS-06.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 0: §0.4–0.7 Organizing projects, source files, and build outputs',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
  ],
};
