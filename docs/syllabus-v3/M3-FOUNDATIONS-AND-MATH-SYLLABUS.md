# Bản Đọc Toàn Văn Syllabus v3 — Mốc Kiểm Định M3 (Khối I–II: Nền Nhập Môn, Lập Trình & Toán Học + Mẫu Hệ Thống)

> **Mục đích tài liệu:** Xuất bản toàn văn toàn bộ 14/14 môn thuộc **Khối I (`CS-01`..`CS-06`: Khởi đầu từ số 0 và công cụ học tập)** và **Khối II (`CS-07`..`CS-14`: Nền lập trình và toán học cho Khoa học Máy tính)** cùng chương mẫu bộ nhớ ảo của **`CS-25` (Hệ điều hành)** để phục vụ cổng kiểm định **M3** trước khi sang M4.

## Thống kê định lượng M3

- **Số môn đã biên soạn toàn văn ở M3:** 15 môn (trọn vẹn 14/14 môn `CS-01`..`CS-14` của Khối I–II + 1 chương mẫu hệ thống `CS-25`)
- **Tổng số chương đã biên soạn toàn văn:** 71 chương
- **Tổng số tiểu mục (topics) đã biên soạn toàn văn:** 225 tiểu mục (220 `core` + 5 `extension`)
- **Tổng số từ học thuật (chỉ tính phần văn xuôi overview & paragraphs):** 76,872 từ

---

## CS-01: Làm quen máy tính và môi trường học (`computing-environment`)

- **Thuộc khối:** Khối I — Bắt đầu từ số 0
- **Phân loại:** `core`
- **Điều kiện tiên quyết:** Không yêu cầu (Môn khởi đầu từ số 0).

### Tổng quan môn học

Môn học đóng vai trò là điểm khởi đầu thực sự từ số 0 cho người học chưa từng sử dụng môi trường lập trình, chưa quen cấu trúc tệp hay cửa sổ dòng lệnh. Thay vì mặc định người học đã biết mở terminal hay cài đặt trình biên dịch, môn học giải thích tuần tự cách máy tính tổ chức dữ liệu lâu dài thành các tệp (files) và thư mục (directories) trên ổ đĩa, sự khác biệt giữa tên tệp, phần mở rộng và định dạng dữ liệu bên trong, cũng như cách xác định vị trí của một tệp thông qua đường dẫn tuyệt đối (absolute path) và đường dẫn tương đối (relative path) tính từ thư mục làm việc hiện tại.

Trên nền tảng hệ thống tệp đó, môn học làm rõ mô hình hai tầng lưu trữ cơ bản (bộ nhớ khả biến RAM đang chạy so với ổ đĩa lưu trữ bền vững), khái niệm tiến trình (process) khi một chương trình được hệ điều hành nạp lên thực thi, và sự khác biệt giữa giao diện đồ họa (GUI) với giao diện dòng lệnh (CLI/Shell). Hai chương cuối trang bị cơ chế vận hành của trình soạn thảo mã nguồn, cách shell tìm chương trình qua biến môi trường `PATH`, mã thoát (exit code), các luồng vào/ra chuẩn và phương pháp tra cứu tài liệu kỹ thuật cùng thông báo lỗi một cách có hệ thống.

### Giới hạn học thuật (`boundaries`)

- Môn học được thiết kế cho người hoàn toàn chưa biết gì về lập trình và hệ điều hành; mọi thuật ngữ nền tảng như byte, tệp văn bản, đường dẫn, thư mục hiện tại, tiến trình và biến môi trường đều được định nghĩa từ gốc trước khi dùng.
- Chưa đi vào cấu trúc phần cứng vi kiến trúc (thanh ghi, ALU, pipeline CPU) thuộc Môn CS-22 và CS-23, cũng chưa đi vào lập trình hệ thống POSIX cấp thấp (`fork`, `execve`, bảng trang bộ nhớ ảo) thuộc Môn CS-24 và CS-25.
- Trọng tâm của phần dòng lệnh và công cụ ở môn này là hiểu cơ chế điều hướng thư mục, truyền đối số và gọi trình biên dịch cho một chương trình nhỏ; các đường ống xử lý văn bản phức tạp và hệ thống build đa tệp (`Make`/`CMake`) được đặt ở Môn CS-06.

### Nguồn giáo trình của môn học

- **The Missing Semester of Your CS Education (2020 Edition)** (`mit-missing-semester`, *primary*): 2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/), Lecture 2: Shell Tools and Scripting (/2020/shell-tools/), & Lecture 5: Command-line Environment (/2020/command-line/) — URL: https://missing.csail.mit.edu/2020/
- **Learn C++ — Comprehensive C++ Programming Tutorials** (`learncpp`, *primary*): Chapter 0: §0.1–0.8 Introduction to Programming Languages, C/C++, Development Process, and Compiler Configuration — URL: https://www.learncpp.com/

### Chương 1 — Hệ thống tệp, thư mục, đường dẫn và mã hóa văn bản (`ce-files-paths`)

Chương này giải quyết rào cản đầu tiên của người mới bắt đầu: hiểu một "tệp" trên máy tính thực chất là gì và nó nằm ở đâu. Nội dung đi từ biểu diễn dữ liệu dưới dạng dãy byte, sự khác biệt giữa tệp văn bản thuần (plain text) dùng để viết mã nguồn với tệp văn bản có định dạng (như `.docx`, `.pdf`) và tệp nhị phân, đến cấu trúc cây thư mục phân cấp và quy tắc viết đường dẫn trên các hệ điều hành phổ biến.

*Nguồn chương:* `mit-missing-semester` (2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/ — Navigating in the Shell, Root Directory, Absolute vs Relative Paths)); `learncpp` (Chapter 0: §0.4–0.5 Introduction to C++ development and source files)

#### Tiểu mục 1: Khái niệm tệp (file), dãy byte, phần mở rộng tên tệp và sự khác biệt giữa tên tệp với nội dung thực (`ce-fp-files-bytes-extensions` — mức `core`)

Ở mức lưu trữ của hệ điều hành, một tệp (file) là một dãy hữu hạn các byte (mỗi byte gồm 8 bit nhị phân biểu diễn một số nguyên từ $0$ đến $255$) được gắn với một tên định danh trên thiết bị lưu trữ. Tiểu mục này làm rõ rằng máy tính không tự hiểu "ý nghĩa" của tệp nếu không có chương trình giải mã dãy byte đó: cùng một chuỗi byte có thể được hiểu là các ký tự văn bản nếu mở bằng trình soạn thảo, hoặc là điểm ảnh/lệnh máy nếu mở bằng chương trình khác.

Nội dung phân biệt rõ **tên tệp và phần mở rộng** (file extension như `.txt`, `.cpp`, `.png`, `.exe`) với **định dạng dữ liệu thực tế** bên trong tệp. Phần mở rộng chỉ là hậu tố quy ước trong tên gọi để gợi ý cho người dùng và giao diện đồ họa biết nên mở tệp bằng phần mềm nào; việc đổi tên một tệp ảnh `hinh.png` thành `code.cpp` hoàn toàn không biến dãy byte ảnh bên trong thành mã nguồn C++ hợp lệ. Phạm vi tiểu mục cũng giải thích vì sao nhiều hệ điều hành mặc định ẩn phần mở rộng tên tệp và vì sao người học lập trình cần bật hiển thị đầy đủ phần mở rộng để không nhầm `main.cpp.txt` với `main.cpp`.

> **Nguồn đối chiếu:** `learncpp`: Chapter 0: §0.4 Introduction to C++ development (Source code files and extensions) | `mit-missing-semester`: 2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/ — Files and directories fundamentals)

#### Tiểu mục 2: Cấu trúc cây thư mục phân cấp, thư mục hiện tại (working directory), đường dẫn tuyệt đối và tương đối (`ce-fp-directory-tree-paths` — mức `core`)

Để quản lý hàng trăm nghìn tệp, hệ điều hành tổ chức chúng vào các thư mục (directories/folders) lồng nhau tạo thành một cấu trúc cây phân cấp xuất phát từ gốc: trên Linux/macOS là một thư mục gốc duy nhất `/`, còn trên Windows là gốc của từng ổ đĩa logic như `C:\`. Tiểu mục này định nghĩa khái niệm **thư mục làm việc hiện tại** (current working directory — `cwd`) là vị trí ngữ cảnh mà một chương trình hoặc cửa sổ dòng lệnh đang đứng tại thời điểm thực thi.

Từ khái niệm thư mục hiện tại, nội dung phân biệt hai cách chỉ định vị trí của một tệp hoặc thư mục: **đường dẫn tuyệt đối** (absolute path) luôn bắt đầu từ gốc của hệ thống tệp (ví dụ `/home/user/project/main.cpp` hoặc `C:\Users\user\project\main.cpp`) nên có ý nghĩa cố định bất kể đang đứng ở đâu; ngược lại, **đường dẫn tương đối** (relative path) mô tả lộ trình đi từ thư mục hiện tại tới đích (ví dụ `src/main.cpp` hoặc `../data/input.txt`), sử dụng hai ký hiệu đặc biệt chuẩn hóa là `.` (chính thư mục hiện tại) và `..` (thư mục cha ngay phía trên). Tiểu mục cũng chỉ rõ sự khác biệt về ký tự phân cách đường dẫn giữa chuẩn POSIX (`/`) và Windows truyền thống (`\`), cũng như lỗi khi đường dẫn chứa khoảng trắng mà không được đặt trong dấu ngoặc kép.

> **Nguồn đối chiếu:** `mit-missing-semester`: 2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/ — Navigating in the shell: `pwd`, `cd`, `.`, `..`, `/` vs `\`)

#### Tiểu mục 3: Tệp văn bản thuần (plain text) so với tệp nhị phân, bảng mã ASCII/UTF-8 và ký tự xuống dòng LF vs CRLF (`ce-fp-plaintext-encoding-newlines` — mức `core`)

Mã nguồn chương trình, tệp cấu hình và dữ liệu đầu vào chuẩn trong khoa học máy tính hầu hết được lưu dưới dạng **văn bản thuần** (plain text) thay vì tài liệu văn phòng (rich text như `.docx`). Tiểu mục này giải thích lý do: tệp `.docx` hay `.pdf` chứa hàng loạt cấu trúc đóng gói, thẻ định dạng phông chữ, lề trang và siêu dữ liệu khiến trình biên dịch không thể đọc trực tiếp như các câu lệnh, trong khi tệp văn bản thuần chỉ chứa đúng dãy mã số của từng ký tự văn bản.

Nội dung giới thiệu cơ chế ánh xạ giữa văn bản và con số thông qua bảng mã **ASCII** (dùng 1 byte cho 128 ký tự tiếng Anh, chữ số và ký hiệu điều khiển cơ bản) và chuẩn **Unicode / UTF-8**. Tiểu mục phân biệt rõ ba khái niệm: (1) **Điểm mã Unicode (Unicode scalar value, loại trừ điểm mã surrogate)** như `U+0041` (`'A'`), được lược đồ **UTF-8** mã hóa bằng độ dài thay đổi từ **1 đến 4 byte** cho mỗi điểm mã (tương thích ngược hoàn toàn với ASCII ở 128 mã đầu); và (2) **Ký tự cảm nhận bởi người dùng trên màn hình (extended grapheme cluster)** có thể được ghép từ **một hoặc nhiều điểm mã Unicode** (ví dụ chữ tiếng Việt tổ hợp gồm chữ cái cơ sở cộng các dấu thanh/dấu phụ rời, hoặc một biểu tượng emoji ghép bằng Zero Width Joiner như `👩‍💻` gồm 3 điểm mã và chiếm tới 11 byte UTF-8) — do đó kích thước tệp tính theo byte không nhất thiết bằng số điểm mã hay số ký tự hiển thị. Cuối cùng, tiểu mục làm rõ sự khác biệt lịch sử về ký hiệu kết thúc dòng giữa hệ Unix/Linux/macOS (1 byte `LF` — `\n`, mã `0x0A`) và Windows (2 byte `CRLF` — `\r\n`, mã `0x0D 0x0A`).

> **Nguồn đối chiếu:** `harvard-cs50x`: Week 0 & Week 1 Notes: Representing Text with ASCII, Unicode Code Points, UTF-8, and Emoji ZWJ Sequences | `learncpp`: Chapter 4: §4.11 Chars (ASCII representation and newline characters)

### Chương 2 — Bộ nhớ RAM, lưu trữ ổ đĩa, tiến trình và vai trò của hệ điều hành (`ce-storage-memory-os`)

Chương này xây dựng mô hình khái niệm tối thiểu về cách máy tính vận hành một chương trình khi người dùng khởi chạy nó. Nội dung làm rõ vì sao máy tính cần cả ổ đĩa lẫn RAM, điều gì xảy ra khi một tệp chương trình trên ổ đĩa biến thành một tiến trình đang chạy trong RAM, và vai trò điều phối của hệ điều hành ở mức người sử dụng và lập trình viên nhập môn.

*Nguồn chương:* `learncpp` (Chapter 0: §0.1–0.3 Introduction to programming languages and machine code execution); `mit-missing-semester` (2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/) & Lecture 5: Command-line Environment (/2020/command-line/ — Processes, Signals, and Job Control))

#### Tiểu mục 1: Sự khác biệt cơ chế giữa bộ nhớ chính khả biến (RAM) và bộ nhớ lưu trữ bền vững (SSD/HDD) (`ce-smo-ram-vs-disk` — mức `core`)

Người mới học thường nhầm lẫn giữa "bộ nhớ" dùng để chứa các biến khi chương trình đang chạy với "dung lượng ổ cứng" dùng để lưu tệp lâu dài. Tiểu mục này phân biệt hai tầng lưu trữ theo ba tiêu chí vật lý và chức năng: (1) **Tính bền vững vật lý (persistence vs. volatility)**: ổ đĩa (SSD/HDD) là bộ nhớ không khả biến (non-volatile), giữ nguyên các tệp mã nguồn và dữ liệu ngay cả khi tắt nguồn máy tính; ngược lại, **RAM** (Random Access Memory) là bộ nhớ khả biến (volatile) cần nguồn điện duy trì và mất dữ liệu khi máy tính mất điện hoặc tắt máy. Riêng khi một **tiến trình kết thúc** trong lúc máy vẫn đang bật, không phải toàn bộ RAM vật lý bị xóa sạch, mà hệ điều hành thu hồi không gian địa chỉ ảo và các khung trang của tiến trình đó để cấp phát lại cho tiến trình khác (nội dung bit vật lý cũ không còn thuộc quyền truy cập của tiến trình đã thoát và không được bảo đảm giữ lại); (2) **Tốc độ truy cập**: CPU đọc/ghi dữ liệu trên RAM nhanh hơn hàng nghìn đến hàng triệu lần so với truy cập tệp trên ổ đĩa; và (3) **Cách sử dụng trong lập trình**: biến số của chương trình nằm trong RAM, muốn giữ kết quả lâu dài qua các lần chạy thì chương trình phải ghi dữ liệu ra tệp trên ổ đĩa.

Bằng mô hình phân tách này, người học giải thích được ngay hiện tượng thực tế: khi đang gõ mã nguồn trong trình soạn thảo nhưng chưa bấm Lưu (Save), những ký tự vừa gõ mới chỉ nằm trong vùng nhớ RAM của trình soạn thảo; chỉ khi thực hiện thao tác ghi tệp, hệ điều hành mới cập nhật dãy byte đó xuống tệp `.cpp` trên ổ đĩa để trình biên dịch trên ổ đĩa có thể đọc được bản mới nhất.

> **Nguồn đối chiếu:** `learncpp`: Chapter 0: §0.1 Introduction to these tutorials and computer memory basics | `harvard-cs50x`: Week 4 Notes: Memory Hierarchy Overview (RAM vs Persistent Storage)

#### Tiểu mục 2: Phân biệt tệp chương trình thụ động trên đĩa với tiến trình (process) đang thực thi và vai trò của hệ điều hành (`ce-smo-program-vs-process` — mức `core`)

Tiểu mục này thiết lập sự phân biệt cốt lõi giữa **chương trình (program)** và **tiến trình (process)**. Một chương trình (chẳng hạn tệp thực thi `hello.exe` hoặc `./hello` sau khi biên dịch) chỉ là một tệp nhị phân nằm tĩnh trên ổ đĩa chứa các chỉ thị máy và dữ liệu ban đầu. Khi người dùng yêu cầu chạy chương trình đó, **hệ điều hành (Operating System — OS)** sẽ tạo ra một tiến trình mới: cấp phát cho nó một không gian địa chỉ bộ nhớ riêng biệt, nạp mã máy từ tệp vào RAM, gắn cho nó một mã định danh tiến trình (Process ID — `PID`) và đưa vào hàng đợi để bộ xử lý trung tâm (CPU) thực thi từng lệnh.

Từ định nghĩa này, người học hiểu vì sao từ một tệp chương trình duy nhất trên đĩa có thể mở đồng thời nhiều cửa sổ hoặc chạy nhiều lần song song thành các tiến trình độc lập không làm hỏng biến của nhau. Tiểu mục cũng giới thiệu vai trò bảo vệ và trung gian của hệ điều hành: chương trình của người học không tự ý chạm trực tiếp vào phần cứng ổ đĩa, bàn phím hay màn hình, mà phải gửi yêu cầu qua các dịch vụ chuẩn của hệ điều hành. Nếu một tiến trình cố truy cập một trang bộ nhớ chưa được ánh xạ hoặc vi phạm quyền đọc/ghi phần cứng của trang đó, phần cứng quản lý bộ nhớ (MMU) và hệ điều hành sẽ chặn lại và chấm dứt tiến trình (như lỗi `Segmentation fault` / `Access violation`); ngược lại, nếu chương trình đọc/ghi nhầm chỉ số nhưng địa chỉ đó vẫn nằm trong vùng nhớ hợp lệ đã cấp cho chính tiến trình, hệ điều hành không tự phát hiện được mà dữ liệu nội bộ sẽ bị làm hỏng âm thầm (silent memory corruption) — lý do cần các công cụ kiểm tra bộ nhớ như Valgrind hoặc AddressSanitizer ở các môn sau.

> **Nguồn đối chiếu:** `mit-missing-semester`: 2020 Edition — Lecture 5: Command-line Environment (/2020/command-line/ — Job Control, Signals, and Processes) | `ostep-v110`: Chapter 2 (Introduction to Operating Systems), Chapter 4 (§4.1 The Abstraction: A Process), & Chapter 13 (The Abstraction: Address Spaces) | `dive-into-systems`: Chapter 3: §3.3 Debugging Memory with Valgrind (Segmentation faults vs silent memory corruption)

#### Tiểu mục 3: Giao diện đồ họa (GUI) so với giao diện dòng lệnh (CLI) và quyền truy cập tệp cơ bản (đọc, ghi, thực thi) (`ce-smo-gui-vs-cli-permissions` — mức `core`)

Máy tính cung cấp hai phương thức chính để con người ra lệnh cho hệ điều hành: **Giao diện người dùng đồ họa (GUI — Graphical User Interface)** dựa trên biểu tượng, cửa sổ và thao tác chuột (như File Explorer hay Finder), và **Giao diện dòng lệnh (CLI — Command-Line Interface)** dựa trên việc nhập các câu lệnh văn bản vào một chương trình thông dịch lệnh gọi là **shell**. Tiểu mục này làm rõ rằng GUI và CLI không phải hai thế giới tách rời mà cùng thao tác trên đúng một cây thư mục và cùng một hệ điều hành; việc tạo thư mục bằng lệnh `mkdir` trong terminal lập tức xuất hiện trong cửa sổ File Explorer.

Nội dung giải thích vì sao lập trình viên cần dùng CLI bên cạnh GUI: câu lệnh văn bản chỉ định chính xác tên chương trình, các cờ cấu hình (flags/options), tệp đầu vào/đầu ra, đồng thời có thể lặp lại chính xác hoặc ghép nối tự động mà không phụ thuộc vị trí bấm chuột. Phần cuối giới thiệu mô hình quyền tệp cơ bản của hệ điều hành gồm ba quyền **Đọc (Read — `r`)**, **Ghi (Write — `w`)** và **Thực thi (Execute — `x`)**, giải thích vì sao một tệp kịch bản hoặc tệp nhị phân trên Linux/macOS cần có quyền thực thi (`chmod +x`) thì hệ điều hành mới cho phép khởi chạy như một chương trình.

> **Nguồn đối chiếu:** `mit-missing-semester`: 2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/ — Using the shell, arguments, and file permissions `ls -l`, `chmod`)

### Chương 3 — Cửa sổ dòng lệnh (Terminal/Shell), biến môi trường PATH và chuỗi công cụ biên dịch (`ce-terminal-toolchain`)

Chương này hướng dẫn người học từ chỗ mở được cửa sổ terminal lần đầu tiên đến chỗ hiểu rõ cơ chế một câu lệnh được shell phân tích, tìm kiếm qua biến môi trường `PATH`, khởi chạy thành tiến trình và trả về trạng thái kết thúc, đồng thời kết nối trực tiếp với quy trình soạn thảo – biên dịch – chạy một chương trình C++.

*Nguồn chương:* `mit-missing-semester` (2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/ — Environment variables, PATH, streams, and running programs)); `learncpp` (Chapter 0: §0.5–0.8 Introduction to the compiler, linker, libraries, and IDE vs command line)

#### Tiểu mục 1: Phân biệt trình giả lập thiết bị đầu cuối (Terminal Emulator) với trình thông dịch lệnh (Shell) và cấu trúc một câu lệnh (`ce-tt-terminal-vs-shell-anatomy` — mức `core`)

Trong giao tiếp hàng ngày, các từ "terminal", "console", "command prompt" và "shell" thường bị gọi lẫn lộn, nhưng về mặt kiến trúc phần mềm chúng gồm hai thành phần tách biệt: **Trình giả lập thiết bị đầu cuối (Terminal Emulator)** (như Windows Terminal, GNOME Terminal, iTerm2 hay khung Terminal tích hợp trong VS Code) chỉ là ứng dụng cửa sổ đồ họa có nhiệm vụ hiển thị ký tự lên màn hình và nhận phím bấm từ bàn phím; còn **Shell** (như `bash`, `zsh`, hoặc `PowerShell`) mới là chương trình chạy bên trong terminal đó để đọc dòng văn bản người dùng nhập vào, phân tích cú pháp và yêu cầu hệ điều hành thực thi lệnh.

Tiểu mục phân tích cấu trúc chuẩn của một dòng lệnh: từ đầu tiên là tên lệnh hoặc đường dẫn tới chương trình cần chạy (ví dụ `g++` hoặc `ls`), theo sau là danh sách các **đối số dòng lệnh (command-line arguments)** được tách nhau bởi khoảng trắng, bao gồm các cờ tùy chọn (options/flags như `-Wall`, `-o`) và đường dẫn tệp đích. Người học cũng được làm rõ cơ chế tách từ theo khoảng trắng của shell: nếu tên thư mục là `Bai Tap` mà không bọc trong dấu ngoặc kép `"Bai Tap"`, shell sẽ hiểu nhầm thành hai đối số rời nhau là `Bai` và `Tap`.

> **Nguồn đối chiếu:** `mit-missing-semester`: 2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/ — What is the shell? Command arguments, whitespace quoting, and shell prompt)

#### Tiểu mục 2: Các thao tác điều hướng và quản lý tệp cơ bản trên dòng lệnh cùng nguyên tắc an toàn khi xóa/ghi đè (`ce-tt-core-filesystem-commands` — mức `core`)

Tiểu mục này hệ thống hóa nhóm thao tác cốt lõi để tự chủ trong môi trường dòng lệnh mà không cần học thuộc hàng trăm lệnh: kiểm tra thư mục hiện tại (`pwd`), liệt kê nội dung thư mục kèm tệp ẩn và thông tin chi tiết (`ls`, `ls -la`), di chuyển giữa các thư mục (`cd`), tạo thư mục mới (`mkdir`), sao chép tệp (`cp`), đổi tên hoặc di chuyển tệp (`mv`), và xem nhanh nội dung tệp văn bản ngắn (`cat`, `less`). Mỗi thao tác đều được giải thích dựa trên tác động của nó lên cây thư mục và đường dẫn tương đối/tuyệt đối đã học ở Chương 1.

Đặc biệt, tiểu mục nhấn mạnh sự khác biệt cơ chế giữa việc xóa tệp trong giao diện đồ họa (thường chỉ chuyển tệp vào thư mục Thùng rác / Recycle Bin nên khôi phục được) với lệnh xóa trên dòng lệnh (`rm`): lệnh `rm` tháo bỏ liên kết tệp khỏi thư mục ngay lập tức mà không qua thùng rác và mặc định không hỏi xác nhận lại. Hiểu rõ cơ chế này giúp người mới tránh các thao tác phá hủy dữ liệu ngoài ý muốn khi dùng cờ đệ quy (`rm -r`) hoặc khi ghi đè tệp đích trong `mv`/`cp`.

> **Nguồn đối chiếu:** `mit-missing-semester`: 2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/ — Navigating and manipulating files `pwd`, `cd`, `ls`, `mv`, `cp`, `mkdir`, `rm`)

#### Tiểu mục 3: Biến môi trường, cơ chế tìm chương trình qua PATH, mã thoát (exit status) và các luồng chuẩn sơ cấp (`ce-tt-env-path-exit-streams` — mức `core`)

Khi người dùng gõ một tên lệnh trần như `g++` hoặc `git` mà không ghi đường dẫn đầy đủ, làm sao shell biết tệp thực thi đó nằm ở thư mục nào trên ổ đĩa? Tiểu mục này giải thích khái niệm **biến môi trường (environment variables)** — tập các cặp tên–giá trị mà mỗi tiến trình kế thừa từ tiến trình cha — và vai trò trung tâm của biến **`PATH`**: `PATH` chứa danh sách các thư mục được phân cách nhau (bởi dấu `:` trên POSIX hoặc `;` trên Windows); shell sẽ duyệt tuần tự từng thư mục trong `PATH` từ trái sang phải để tìm tệp thực thi khớp tên. Nhờ cơ chế này, lỗi kinh điển `"command not found"` hay `"is not recognized as an internal or external command"` được chẩn đoán tức thì: hoặc chương trình chưa được cài, hoặc thư mục chứa nó chưa nằm trong `PATH`. Muốn chạy một tệp thực thi nằm ngay tại thư mục hiện tại (vốn mặc định không nằm trong `PATH` vì lý do an toàn), người học phải chỉ định rõ đường dẫn tương đối `./ten_chuong_trinh`.

Phần thứ hai của tiểu mục giới thiệu hai cơ chế giao tiếp chuẩn của mọi tiến trình dòng lệnh: (1) **Mã thoát (exit code / exit status)** — một số nguyên mà tiến trình trả về cho hệ điều hành khi kết thúc, trong đó quy ước toàn cục là `0` biểu thị thành công và mọi giá trị khác `0` biểu thị có lỗi; và (2) Ba kênh văn bản mặc định gồm **đầu vào chuẩn (`stdin`)**, **đầu ra chuẩn (`stdout`)** và **đầu ra báo lỗi chuẩn (`stderr`)**, cùng thao tác chuyển hướng cơ bản (`>` để ghi `stdout` ra tệp, `<` để lấy dữ liệu từ tệp vào `stdin`).

> **Nguồn đối chiếu:** `mit-missing-semester`: 2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/) & Lecture 2: Shell Tools and Scripting (/2020/shell-tools/ — Exit codes `$?`, `PATH`, `which`, `./program`, `stdin`/`stdout`/`stderr`)

#### Tiểu mục 4: Phân biệt trình soạn thảo mã (Code Editor), môi trường tích hợp (IDE) và trình biên dịch (Compiler) (`ce-tt-editor-compiler-workflow` — mức `core`)

Người mới bắt đầu rất dễ đồng nhất phần mềm họ mở lên để gõ code (như Visual Studio Code, CLion, hay Code::Blocks) với chính ngôn ngữ C++ hoặc trình biên dịch. Tiểu mục này tách bạch ba thành phần độc lập trong chuỗi công cụ phát triển phần mềm: (1) **Trình soạn thảo mã nguồn (Text/Code Editor)** chỉ là công cụ giúp đọc, gõ và lưu các tệp văn bản thuần `.cpp`/`.h` kèm tô màu cú pháp; (2) **Trình biên dịch và trình liên kết (Compiler & Linker toolchain)** như GCC (`g++`), Clang (`clang++`) hay MSVC (`cl.exe`) là chương trình dòng lệnh thực sự phân tích cú pháp, kiểm tra kiểu và dịch mã nguồn thành tệp máy thực thi; và (3) **Môi trường phát triển tích hợp (IDE)** là phần mềm đóng gói cả trình soạn thảo, nút bấm gọi trình biên dịch ngầm bên dưới và trình gỡ lỗi vào chung một giao diện.

Việc nắm rõ sự tách biệt này giúp người học chủ động hoàn toàn trước môi trường làm việc: biết cách tự biên dịch một tệp đơn lẻ trực tiếp trên terminal bằng lệnh `g++ -std=c++20 -Wall -Wextra main.cpp -o main` rồi chạy `./main`, đồng thời hiểu rằng khi bấm nút "Run/Build" trong IDE thì thực chất IDE cũng chỉ đang ghép một dòng lệnh tương tự để gọi trình biên dịch ở hậu trường.

> **Nguồn đối chiếu:** `learncpp`: Chapter 0: §0.5–0.8 Introduction to the compiler, linker, and installing an IDE / command-line configuration

### Chương 4 — Phương pháp đọc tài liệu kỹ thuật, giải mã thông báo lỗi và tổ chức không gian học tập (`ce-docs-navigation`)

Chương cuối của môn mở đầu trang bị kỹ năng tự học sống còn trong khoa học máy tính: làm thế nào để đọc hiểu một thông báo lỗi dài bằng tiếng Anh kỹ thuật mà không hoảng sợ, cách tra cứu tài liệu tham chiếu chuẩn thay vì sao chép mã nguồn mù quáng, và cách tổ chức thư mục bài tập sạch sẽ, tái lập được.

*Nguồn chương:* `mit-missing-semester` (2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/) & Lecture 2: Shell Tools and Scripting (/2020/shell-tools/ — Reading manual pages `man`, `--help`, `tldr`)); `learncpp` (Chapter 0 (§0.9 Configuring your compiler: warning and error levels) & Chapter 3 (§3.1 Syntax and semantic errors))

#### Tiểu mục 1: Giải phẫu một thông báo chẩn đoán lỗi (diagnostic message) và nguyên tắc xử lý từ lỗi đầu tiên (`ce-dn-anatomy-of-diagnostic` — mức `core`)

Khi một lệnh dòng lệnh hoặc trình biên dịch thất bại, nó in ra luồng lỗi chuẩn (`stderr`) một thông báo chẩn đoán có cấu trúc chặt chẽ chứ không phải những dòng chữ ngẫu nhiên. Tiểu mục này hướng dẫn cách đọc các trường thông tin chuẩn trong một thông báo chẩn đoán dạng `duong_dan/ten_tep.cpp:so_dong:so_cot: muc_do: mo_ta_loi`: vị trí tệp xảy ra sự cố, tọa độ dòng và cột nơi công cụ phát hiện bất thường, mức độ nghiêm trọng (`error` ngăn cản việc tạo tệp đích, `warning` cảnh báo cấu trúc tiềm ẩn rủi ro dù vẫn biên dịch được, `note` cung cấp ngữ cảnh bổ sung), và đoạn trích mã nguồn kèm dấu mũ `^` chỉ điểm.

Một quy tắc thực hành quan trọng được giải thích về mặt cơ chế là **luôn đọc và sửa từ thông báo lỗi đầu tiên trên cùng (topmost error)**: khi trình biên dịch gặp một lỗi cú pháp ở dòng 10 (ví dụ thiếu dấu chấm phẩy hoặc viết sai tên kiểu), trạng thái phân tích cú pháp của nó bị lệch khỏi ý đồ của người viết, kéo theo hàng chục thông báo lỗi giả (cascading/spurious errors) ở các dòng 11–50 vốn hoàn toàn đúng. Sửa dứt điểm lỗi gốc đầu tiên rồi dịch lại thường làm biến mất toàn bộ chuỗi lỗi dây chuyền phía sau.

> **Nguồn đối chiếu:** `learncpp`: Chapter 0 (§0.9 Compiler warnings and errors) & Chapter 1 (§1.1 Compiling your first program)

#### Tiểu mục 2: Phân biệt tài liệu hướng dẫn (tutorial), tài liệu tham chiếu chuẩn (reference manual) và cách tra cứu có kiểm chứng (`ce-dn-technical-docs-hierarchy` — mức `core`)

Tài liệu kỹ thuật trong khoa học máy tính được chia thành hai thể loại có mục đích khác hẳn nhau: **Tài liệu hướng dẫn theo lộ trình (Tutorial / Textbook)** (như LearnCpp hoặc giáo trình môn học) giải thích khái niệm theo thứ tự sư phạm cho người mới làm quen; trong khi **Tài liệu tham chiếu kỹ thuật (Reference Manual / Man pages)** (như `man` trên POSIX, cờ `--help` của công cụ dòng lệnh, hoặc trang `cppreference.com` cho C++) là từ điển đặc tả chính xác chữ ký hàm, tham số, giá trị trả về, độ phức tạp, các trường hợp biên và phiên bản chuẩn áp dụng.

Tiểu mục này hướng dẫn người học cách đọc các quy ước ký hiệu phổ biến trong trang hướng dẫn lệnh và tài liệu tham chiếu (chẳng hạn phần đặt trong ngoặc vuông `[OPTION]...` là tùy chọn không bắt buộc, dấu ba chấm `...` chỉ phép lặp nhiều đối số, phần in đậm hoặc ngoài ngoặc là bắt buộc). Đồng thời, tiểu mục đặt ra nguyên tắc vệ sinh học thuật: khi gặp lỗi hoặc hàm lạ, ưu tiên đối chiếu thông báo lỗi gốc với tài liệu tham chiếu để hiểu điều kiện đúng/sai thay vì dán nguyên đoạn mã không hiểu cơ chế từ các diễn đàn vào chương trình.

> **Nguồn đối chiếu:** `mit-missing-semester`: 2020 Edition — Lecture 1: Course Overview + The Shell (/2020/course-overview/) & Lecture 2: Shell Tools and Scripting (/2020/shell-tools/ — Finding help with `man`, `--help`, `tldr`, and reading command synopses)

#### Tiểu mục 3: Tổ chức cây thư mục học tập, tách biệt mã nguồn với tệp sinh ra khi dịch và tính tái lập của môi trường (`ce-dn-workspace-hygiene-reproducibility` — mức `core`)

Một thói quen phổ biến gây rối loạn cho người mới học là lưu mọi tệp bài tập với những cái tên mơ hồ (`test1.cpp`, `bai_moi_nhat_final.cpp`) trộn lẫn cùng các tệp thực thi nhị phân ngay trên màn hình Desktop hoặc thư mục Downloads, dẫn đến việc biên dịch nhầm tệp cũ hoặc chạy nhầm chương trình của bài trước. Tiểu mục này trình bày nguyên tắc tổ chức không gian làm việc (workspace hygiene) theo cấu trúc phân cấp: mỗi môn học và mỗi chương/bài toán có thư mục riêng với tên chỉ dùng chữ cái không dấu, chữ số và dấu gạch ngang/gạch dưới, giúp việc điều hướng trên dòng lệnh luôn nhất quán.

Nội dung cũng giải thích sự khác biệt giữa **tệp nguồn gốc (source artifacts)** do con người biên soạn (như `.cpp`, `.h`, `.md`) cần được lưu giữ cẩn thận, với **tệp sinh tự động (build artifacts)** do trình biên dịch tạo ra (như `.o`, `.obj`, `.exe`, `a.out`) có thể xóa đi và tạo lại bất cứ lúc nào từ mã nguồn. Sự phân tách này chuẩn bị trực tiếp mô hình tư duy cho việc dùng tệp `.gitignore` và hệ thống quản lý phiên bản Git ở Môn CS-06.

> **Nguồn đối chiếu:** `learncpp`: Chapter 0: §0.4–0.7 Organizing projects, source files, and build outputs

---

## CS-02: Toán nền cần dùng (`math-bridge`)

- **Thuộc khối:** Khối I — Bắt đầu từ số 0
- **Phân loại:** `core`
- **Điều kiện tiên quyết:** Không yêu cầu (Môn khởi đầu từ số 0).

### Tổng quan môn học

Môn học xây dựng cầu nối toán học từ số 0 cho người học bị hổng kiến thức phổ thông hoặc đã lâu không dùng toán, giúp người học sẵn sàng trước khi bước vào lập trình nhập môn (`CS-04`), toán rời rạc (`CS-09`), đại số tuyến tính (`CS-10`) và giải tích (`CS-11`). Thay vì ôn dàn trải các mẹo biến đổi đánh đố, môn học đi thẳng vào bản chất của từng đối tượng toán học xuất hiện thường xuyên trong khoa học máy tính: các tập hợp số, phép chia nguyên đi kèm số dư, giá trị tuyệt đối, biến số, phương trình, bất phương trình và số phức cơ bản.

Tiếp nối nền tảng đại số sơ cấp đó, môn học làm rõ quy tắc lũy thừa và căn thức, định nghĩa logarit như phép toán ngược của lũy thừa cùng ý nghĩa trực quan của $\log_2 n$ trong các quá trình chia đôi liên tiếp. Ba chương cuối trang bị khái niệm hàm số như một ánh xạ đầu vào – đầu ra có miền xác định rõ ràng, hợp hàm, hàm một-một và hàm ngược, hệ tọa độ Descartes, khoảng cách Euclid, lượng giác trên đường tròn đơn vị cùng dạng lượng giác của số phức, và kết thúc bằng cách đọc – viết thành thạo ký hiệu chỉ số dãy $a_i$, tổng $\Sigma$ và tích $\Pi$.

### Giới hạn học thuật (`boundaries`)

- Không giả định người học còn nhớ sẵn công thức logarit, lượng giác, số phức hay ký hiệu tổng Sigma; mọi ký hiệu đều được định nghĩa từ con số cụ thể trước khi tổng quát hóa.
- Tập trung vào ý nghĩa cấu trúc, điều kiện xác định của biểu thức và khả năng chuyển đổi giữa công thức toán với biểu thức trong chương trình; không sa đà vào các bài toán biến đổi lượng giác hoặc bất đẳng thức sơ cấp mẹo mực.
- Chưa đi vào chứng minh quy nạp hình thức hay hệ thức đệ quy bậc cao (thuộc Môn CS-09), và chưa dùng giới hạn vô cùng hay đạo hàm/tích phân (thuộc Môn CS-11).

### Nguồn giáo trình của môn học

- **Prealgebra 2e** (`openstax-prealgebra-2e`, *primary*): Chapters 1–5 (Whole Numbers, Integers, Fractions, Decimals) & Chapters 8–9 (Solving Linear Equations, Math Models) — URL: https://openstax.org/details/books/prealgebra-2e
- **Precalculus 2e** (`openstax-precalculus-2e`, *primary*): Chapter 1 (Functions), Chapters 2–3 (Linear/Polynomial/§3.1 Complex Numbers), Chapter 4 (Exponential and Logarithmic Functions), Chapters 5–7 (Trigonometry), Chapter 8 (§8.5 Polar Form of Complex Numbers), Chapter 11 (§11.1–11.4 Sequences and Series) — URL: https://openstax.org/details/books/precalculus-2e

### Chương 1 — Hệ thống các tập hợp số, thứ tự phép tính, phép chia có dư và giá trị tuyệt đối (`mb-numbers-operations`)

Chương mở đầu hệ thống hóa các tập hợp số từ tự nhiên, nguyên, hữu tỉ đến thực, quy tắc ưu tiên phép toán và hai khái niệm gắn liền trực tiếp với biểu diễn dữ liệu trong máy tính: định lý chia Euclid (thương nguyên và số dư) cùng các hàm làm tròn sàn/trần và giá trị tuyệt đối như khoảng cách hình học trên trục số.

*Nguồn chương:* `openstax-prealgebra-2e` (Chapters 1, 3, 4, 5: Whole Numbers, Integers, Fractions, Decimals, and Order of Operations)

#### Tiểu mục 1: Các tập hợp số chuẩn (N, Z, Q, R), biểu diễn thập phân – phân số và quy tắc thứ tự ưu tiên phép toán (`mb-no-number-sets-order-of-ops` — mức `core`)

Tiểu mục này xây dựng bức tranh phân cấp của các tập hợp số cơ bản: tập số tự nhiên $\mathbb{N} = \{0, 1, 2, \dots\}$ dùng để đếm số lượng và đánh chỉ số vị trí; tập số nguyên $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$ mở rộng thêm số đối âm để biểu diễn độ dịch chuyển hai chiều; tập số hữu tỉ $\mathbb{Q}$ gồm các tỉ số $p/q$ ($p \in \mathbb{Z}, q \in \mathbb{Z} \setminus \{0\}$) có biểu diễn thập phân hữu hạn hoặc tuần hoàn; và tập số thực $\mathbb{R}$ lấp đầy trục số liên tục bằng cách bổ sung các số vô tỉ như $\sqrt{2}, \pi, e$. Việc phân biệt rõ một đại lượng thuộc $\mathbb{Z}$ hay $\mathbb{R}$ là cơ sở trực tiếp để chọn kiểu số nguyên (`int`, `long long`) hay số dấu chấm động (`double`) khi lập trình.

Nội dung tiếp theo rà soát quy tắc thứ tự thực hiện phép tính (ngoặc đơn $\to$ lũy thừa $\to$ nhân/chia từ trái sang phải $\to$ cộng/trừ từ trái sang phải), các tính chất giao hoán, kết hợp, phân phối của phép cộng và phép nhân, cùng điều kiện tối giản phân số và quy đồng mẫu số. Tiểu mục nhấn mạnh các điểm dễ nhầm dấu như sự khác biệt giữa $(-a)^2 = a^2$ với $-a^2 = -(a^2)$, hoặc sai lầm khi tự ý tách mẫu số $\frac{a}{b+c} \neq \frac{a}{b} + \frac{a}{c}$.

> **Nguồn đối chiếu:** `openstax-prealgebra-2e`: Chapter 1 (§1.1–1.5), Chapter 3 (§3.1–3.5 Integers), Chapter 4 (Fractions), Chapter 5 (Decimals and Real Numbers)

#### Tiểu mục 2: Phép chia nguyên có dư, hàm sàn (floor), hàm trần (ceiling) và ứng dụng tách chữ số theo cơ số (`mb-no-integer-division-remainder` — mức `core`)

Khác với phép chia thực tạo ra số thập phân (như $17 / 5 = 3.4$), rất nhiều bài toán tính toán rời rạc đòi hỏi chia $a$ đối tượng thành các nhóm kích thước $d > 0$ và tách riêng **thương nguyên (quotient)** $q$ cùng **số dư (remainder)** $r$ sao cho $a = q \cdot d + r$ với $0 \le r < d$. Tiểu mục này làm rõ ý nghĩa toán học của cặp phép toán thương nguyên và lấy dư, đồng thời chỉ ra ứng dụng cơ bản của chúng trong việc kiểm tra tính chia hết ($r = 0$), chu kỳ vòng tròn (như đồng hồ 24 giờ hoặc tuần 7 ngày) và thuật toán tách từng chữ số của một số nguyên dương $n$ trong hệ cơ số $10$ thông qua chữ số hàng đơn vị $n \bmod 10$ và phần còn lại $\lfloor n/10 \rfloor$.

Tiểu mục cũng định nghĩa chính xác hai hàm làm tròn chuẩn trên trục số thực: **hàm sàn (floor)** $\lfloor x \rfloor$ là số nguyên lớn nhất không vượt quá $x$ (ví dụ $\lfloor 3.7 \rfloor = 3$, nhưng $\lfloor -3.7 \rfloor = -4$ vì $-4 \le -3.7 < -3$), và **hàm trần (ceiling)** $\lceil x \rceil$ là số nguyên nhỏ nhất không nhỏ hơn $x$ (ví dụ $\lceil 3.1 \rceil = 4$, $\lceil -3.7 \rceil = -3$). Người học được lưu ý sự khác biệt giữa làm tròn xuống theo hàm sàn $\lfloor x \rfloor$ với phép cắt bỏ phần thập phân về phía $0$ (truncation toward zero) của phép chia nguyên trên số âm trong C++.

> **Nguồn đối chiếu:** `openstax-prealgebra-2e`: Chapter 1 (§1.5 Divide Whole Numbers) & Chapter 3 (§3.5 Divide Integers) | `mit-6042j-2015`: Chapter 8: §8.1 Divisibility and the Division Algorithm (elementary preview)

#### Tiểu mục 3: Giá trị tuyệt đối, khoảng cách một chiều trên trục số và bất đẳng thức tam giác (`mb-no-absolute-value-distance` — mức `core`)

Giá trị tuyệt đối $|x|$ của một số thực $x$ thường bị nhớ máy móc là "bỏ dấu trừ", dẫn tới lúng túng khi $x$ là một biểu thức chứa biến chưa biết dấu. Tiểu mục này định nghĩa $|x|$ theo hai góc nhìn tương đương: (1) Định nghĩa từng phần (piecewise): $|x| = x$ nếu $x \ge 0$ và $|x| = -x$ nếu $x < 0$ (trong đó $-x$ là một số dương vì $x$ âm); và (2) Ý nghĩa hình học: $|x|$ là khoảng cách từ điểm $x$ tới gốc $0$ trên trục số, do đó $|a - b| = |b - a|$ chính là khoảng cách không âm giữa hai điểm $a$ và $b$ bất kỳ trên trục thực.

Từ ý nghĩa khoảng cách đó, người học hiểu ngay vì sao điều kiện "sai số giữa giá trị xấp xỉ $x$ và giá trị thực $x_0$ không vượt quá $\varepsilon > 0$" được viết gọn là $|x - x_0| \le \varepsilon$, tương đương với khoảng đối xứng $x_0 - \varepsilon \le x \le x_0 + \varepsilon$. Tiểu mục kết thúc bằng bất đẳng thức tam giác $|u + v| \le |u| + |v|$ và hệ quả $|u - w| \le |u - v| + |v - w|$, nền tảng để đánh giá tổng sai số tích lũy trong tính toán số và giải tích.

> **Nguồn đối chiếu:** `openstax-prealgebra-2e`: Chapter 3: §3.1 Introduction to Integers and Absolute Value | `openstax-precalculus-2e`: Chapter 1 & Appendix A: Real Numbers, Absolute Value Equations and Inequalities

### Chương 2 — Biến số, biểu thức đại số, phương trình, bất phương trình và số phức cơ bản (`mb-variables-equations`)

Chương này chuyển từ tính toán trên các con số cố định sang lập luận tổng quát bằng ký hiệu đại số. Nội dung làm rõ vai trò của biến số trong toán học so với biến trong lập trình, các phép biến đổi tương đương trên phương trình bậc nhất/bậc hai, hệ hai phương trình tuyến tính, quy tắc đổi chiều bất phương trình và mở rộng trường số thực sang số phức $a + bi$.

*Nguồn chương:* `openstax-prealgebra-2e` (Chapter 2 (Language of Algebra) & Chapter 8 (Solving Linear Equations)); `openstax-precalculus-2e` (Chapter 2 (Linear Functions), Chapter 3 (§3.1 Complex Numbers, §3.2 Quadratic Functions))

#### Tiểu mục 1: Biến số, biểu thức đại số, hằng đẳng thức cơ bản và phân biệt biến toán học với biến lập trình (`mb-ve-variables-identities-equations` — mức `core`)

Trong đại số, một **biến (variable)** là một ký hiệu chữ (như $x, n, k$) đại diện cho một giá trị chưa biết hoặc một phần tử tùy ý thuộc tập xác định. Tiểu mục này giúp người học phân biệt rạch ròi hai khái niệm cùng mang tên "biến": trong toán học, một phương trình như $x = x + 1$ là mệnh đề vô nghiệm vì không có số nào bằng chính nó cộng thêm $1$; còn trong lập trình (Môn CS-04), `x = x + 1` là thao tác gán cập nhật trạng thái ô nhớ (lấy giá trị cũ của `x` cộng $1$ rồi ghi đè vào ô nhớ `x`).

Nội dung tiếp theo hệ thống hóa cách thu gọn biểu thức đại số, đặt nhân tử chung và ba hằng đẳng thức bậc hai cốt lõi thường xuất hiện khi phân tích số bước chạy của thuật toán: $(a+b)^2 = a^2 + 2ab + b^2$, $(a-b)^2 = a^2 - 2ab + b^2$ và hiệu hai bình phương $a^2 - b^2 = (a-b)(a+b)$. Người học được rèn thói quen kiểm tra điều kiện mẫu số khác $0$ trước khi rút gọn phân thức đại số.

> **Nguồn đối chiếu:** `openstax-prealgebra-2e`: Chapter 2 (§2.1–2.4 Use the Language of Algebra, Evaluate and Simplify Expressions)

#### Tiểu mục 2: Phương trình bậc nhất, hệ hai phương trình tuyến tính, phương trình bậc hai và biệt thức Delta (`mb-ve-linear-quadratic-systems` — mức `core`)

Giải một phương trình là tìm tất cả các giá trị của ẩn làm cho hai vế bằng nhau thông qua các phép biến đổi bảo toàn tập nghiệm (cộng/trừ cùng một số cho hai vế, nhân/chia hai vế với cùng một số **khác $0$**). Với phương trình bậc nhất $ax + b = 0$, việc xét riêng $a \neq 0$ (nghiệm duy nhất $x = -b/a$) và $a = 0$ (vô nghiệm nếu $b \neq 0$, vô số nghiệm nếu $b = 0$) dạy cho người học thói quen không bao giờ chia cho một biểu thức khi chưa kiểm tra biểu thức đó có thể bằng $0$ hay không. Với hệ hai phương trình bậc nhất hai ẩn, tiểu mục giới thiệu phương pháp thế và phương pháp khử cùng ý nghĩa hình học của giao điểm hai đường thẳng (cắt nhau tại 1 điểm, song song vô nghiệm, hoặc trùng nhau) — bước đệm trực quan cho Đại số tuyến tính (`CS-10`).

Đối với phương trình bậc hai $ax^2 + bx + c = 0$ ($a \neq 0$), tiểu mục trình bày cơ chế hoàn thành bình phương để suy ra biệt thức $\Delta = b^2 - 4ac$ và công thức nghiệm $x = \frac{-b \pm \sqrt{\Delta}}{2a}$, cùng định lý Viète ($x_1 + x_2 = -b/a, x_1 x_2 = c/a$). Phương trình bậc hai sẽ xuất hiện lại trực tiếp dưới dạng phương trình đặc trưng của hệ thức truy hồi tuyến tính bậc hai ở Môn CS-09 và đa thức đặc trưng tìm trị riêng ma trận $2 \times 2$ ở Môn CS-10.

> **Nguồn đối chiếu:** `openstax-precalculus-2e`: Chapter 3 (§3.2 Quadratic Functions) & Chapter 9 (§9.1 Systems of Linear Equations: Two Variables)

#### Tiểu mục 3: Bất đẳng thức, bất phương trình, quy tắc nhân/chia với số âm và bảng xét dấu (`mb-ve-inequalities-sign-analysis` — mức `core`)

Trong phân tích thuật toán và kiểm tra biên dữ liệu, ta làm việc với các bất đẳng thức ($<, \le, >, \ge$) nhiều không kém phương trình. Tiểu mục này làm rõ các tính chất bắc cầu ($a \le b \land b \le c \implies a \le c$), cộng hai vế với cùng một đại lượng, và quy tắc quan trọng nhất về dấu: khi nhân hoặc chia hai vế của một bất phương trình với một số dương $c > 0$ thì chiều bất đẳng thức giữ nguyên, nhưng khi nhân hoặc chia với một số âm $c < 0$ thì chiều bất đẳng thức **bắt buộc phải đảo ngược** (vì phép nhân với $-1$ là phép lấy đối xứng qua gốc $0$ trên trục số).

Từ quy tắc dấu đó, tiểu mục hướng dẫn cách giải bất phương trình tích/thương dạng $(x - r_1)(x - r_2) \ge 0$ hoặc $\frac{P(x)}{Q(x)} > 0$ bằng phương pháp lập trục xét dấu của từng nhân tử trên các khoảng được chia bởi các nghiệm, thay vì nhân chéo mẫu số $Q(x)$ khi chưa biết dấu của $Q(x)$.

> **Nguồn đối chiếu:** `openstax-prealgebra-2e`: Chapter 8: §8.4 Solve Linear Inequalities | `openstax-precalculus-2e`: Chapter 3: Polynomial and Rational Inequalities

#### Tiểu mục 4: Mở rộng sang tập số phức C: đơn vị ảo i, dạng đại số a + bi, số phức liên hợp và môđun (`mb-ve-complex-numbers-intro` — mức `core`)

Khi biệt thức $\Delta = b^2 - 4ac < 0$, phương trình bậc hai không có nghiệm trên tập số thực $\mathbb{R}$ vì bình phương của mọi số thực đều không âm. Để mọi phương trình đa thức đều có đủ nghiệm, toán học mở rộng $\mathbb{R}$ sang tập **số phức $\mathbb{C}$** bằng cách đưa vào đơn vị ảo $i$ thỏa mãn định nghĩa $i^2 = -1$. Mỗi số phức có dạng đại số $z = a + bi$ với phần thực $\operatorname{Re}(z) = a \in \mathbb{R}$ và phần ảo $\operatorname{Im}(z) = b \in \mathbb{R}$; hai số phức bằng nhau khi và chỉ khi cả phần thực lẫn phần ảo tương ứng bằng nhau.

Tiểu mục trình bày các phép toán cộng, trừ, nhân hai số phức (theo đúng quy tắc phân phối đại số và thay $i^2 = -1$), khái niệm **số phức liên hợp (complex conjugate)** $\bar{z} = a - bi$, và **môđun (modulus/absolute value)** $|z| = \sqrt{a^2 + b^2}$ thỏa mãn đẳng thức then chốt $z \cdot \bar{z} = a^2 + b^2 = |z|^2$. Nhờ đẳng thức này, phép chia hai số phức $\frac{z_1}{z_2}$ ($z_2 \neq 0$) được thực hiện bằng cách nhân cả tử và mẫu với số phức liên hợp $\bar{z}_2$ để khử $i$ ở mẫu. Nền tảng này chuẩn bị trực tiếp cho trường hợp nghiệm phức của hệ thức đệ quy (`CS-09`) và trị riêng phức của ma trận thực (`CS-10`).

> **Nguồn đối chiếu:** `openstax-precalculus-2e`: Chapter 3: §3.1 Complex Numbers (Imaginary unit i, operations, complex conjugates, quadratic equations with complex roots)

### Chương 3 — Lũy thừa, căn thức, logarit và trực giác tăng trưởng theo cấp số nhân (`mb-exponents-logarithms`)

Chương này giải thích cặp phép toán xuất hiện dày đặc nhất trong khoa học máy tính: lũy thừa (đặc biệt là lũy thừa cơ số $2$ của hệ nhị phân) và phép toán ngược của nó là logarit, làm rõ điều kiện xác định, các quy tắc biến đổi đại số, công thức đổi cơ số và ý nghĩa trực quan của $\log_2 n$ trong tìm kiếm nhị phân, chiều cao cây cân bằng cùng độ dài biểu diễn bit.

*Nguồn chương:* `openstax-precalculus-2e` (Chapter 4: Exponential and Logarithmic Functions (§4.1–4.6))

#### Tiểu mục 1: Quy tắc lũy thừa với số mũ nguyên/hữu tỉ, căn thức và ký hiệu khoa học (scientific notation) (`mb-el-exponents-radicals-rules` — mức `core`)

Xuất phát từ định nghĩa $a^n = \underbrace{a \cdot a \cdots a}_{n \text{ thừa số}}$ với số nguyên dương $n$, tiểu mục này dẫn dắt vì sao quy tắc cộng số mũ khi nhân cùng cơ số $a^m \cdot a^n = a^{m+n}$ và trừ số mũ khi chia $\frac{a^m}{a^n} = a^{m-n}$ (với $a \neq 0$) tất yếu dẫn tới định nghĩa nhất quán cho số mũ không $a^0 = 1$ và số mũ nguyên âm $a^{-n} = \frac{1}{a^n}$. Tiếp theo, quy tắc lũy thừa của lũy thừa $(a^m)^n = a^{mn}$ mở rộng tự nhiên sang số mũ phân số $a^{1/k} = \sqrt[k]{a}$ và $a^{m/k} = (\sqrt[k]{a})^m$ (với $a > 0$).

Tiểu mục cũng làm rõ **ký hiệu khoa học (scientific notation)** $m \times 10^e$ (ví dụ $6.022 \times 10^{23}$ hoặc $1.5 \times 10^{-9}$, viết trong C++ là `1.5e-9`) và bảng các lũy thừa của $2$ ($2^{10} = 1\,024 \approx 10^3$, $2^{20} \approx 10^6$, $2^{30} \approx 10^9$, $2^{32} \approx 4.29 \times 10^9$). Sự đối chiếu này giúp người học ước lượng nhẩm ngay khả năng lưu trữ của kiểu số nguyên 32-bit/64-bit và dung lượng bộ nhớ.

> **Nguồn đối chiếu:** `openstax-precalculus-2e`: Appendix A.2 & Chapter 4 (§4.1 Exponential Functions and Laws of Exponents)

#### Tiểu mục 2: Định nghĩa logarit như số mũ cần tìm, các quy tắc biến đổi logarit và công thức đổi cơ số (`mb-el-logarithm-definition-properties` — mức `core`)

Nhiều người học sợ logarit vì quên mất câu hỏi gốc mà nó trả lời: với cơ số $b > 0, b \neq 1$ và số dương $x > 0$, biểu thức $\log_b(x)$ đơn giản là **"cần nâng cơ số $b$ lên lũy thừa bao nhiêu để thu được $x$?"**, tức là: $$y = \log_b(x) \iff b^y = x$$ Chẳng hạn $\log_2(8) = 3$ vì $2^3 = 8$; $\log_{10}(1000) = 3$ vì $10^3 = 1000$; $\log_b(1) = 0$ vì $b^0 = 1$; và $\log_b(b^k) = k$. Điều kiện xác định bắt buộc là đối số bên trong logarit phải thực sự dương ($x > 0$) vì không có lũy thừa thực nào của $b > 0$ sinh ra số âm hoặc số $0$.

Vì logarit chính là số mũ, mọi tính chất của logarit đều là bản dịch trực tiếp từ quy tắc số mũ: nhân hai số tương ứng với cộng hai số mũ nên $\log_b(u \cdot v) = \log_b(u) + \log_b(v)$; chia hai số tương ứng với trừ số mũ nên $\log_b(u / v) = \log_b(u) - \log_b(v)$; nâng lũy thừa tương ứng với nhân số mũ nên $\log_b(u^k) = k \log_b(u)$. Tiểu mục cũng chứng minh **công thức đổi cơ số** $\log_a(x) = \frac{\log_b(x)}{\log_b(a)}$, giải thích vì sao hai logarit khác cơ số ($\log_2 n$ và $\ln n$) chỉ chênh nhau một hằng số nhân cố định $\frac{1}{\ln 2}$.

> **Nguồn đối chiếu:** `openstax-precalculus-2e`: Chapter 4: §4.3 Logarithmic Functions & §4.5 Logarithmic Properties (Product, Quotient, Power, Change-of-Base)

#### Tiểu mục 3: Ý nghĩa của log2(n) trong khoa học máy tính: số lần chia đôi liên tiếp, số phép so sánh tìm kiếm nhị phân và số chữ số biểu diễn (`mb-el-binary-logarithm-cs-intuition` — mức `core`)

Trong khoa học máy tính, logarit cơ số $2$ (thường viết tắt là $\lg n$ hoặc $\log_2 n$) xuất hiện ở khắp mọi nơi, nhưng cần tách bạch chính xác **ba đại lượng đếm** rất dễ bị gộp chung: (1) **Số bước chia đôi liên tiếp từ $n$ về $1$ phần tử**: nếu $n = 2^k$ là lũy thừa của $2$ và mỗi bước thay kích thước hiện tại $m$ bằng $m/2$, thì chuỗi $n \to n/2 \to \dots \to 1$ có đúng **$k = \log_2 n$ bước chia đôi** (ví dụ $n = 8$: $8 \to 4 \to 2 \to 1$ gồm đúng $\log_2 8 = 3$ bước chia đôi; với $n \ge 1$ bất kỳ mà mỗi bước lấy phần nguyên dưới $\lfloor m/2 \rfloor$ cho tới khi chạm $1$, số bước chia đôi là $\lfloor \log_2 n \rfloor$, hoặc là $\lceil \log_2 n \rceil$ nếu chia tròn lên $\lceil m/2 \rceil$); (2) **Số phép so sánh phần tử tối đa của thuật toán tìm kiếm nhị phân (binary search)** trên mảng đã sắp xếp gồm $n \ge 1$ phần tử: ngay cả sau $\lfloor \log_2 n \rfloor$ lần thu hẹp miền ứng viên về còn tối đa $1$ phần tử, thuật toán vẫn cần thêm $1$ phép so sánh để kiểm tra phần tử cuối cùng đó có khớp khóa cần tìm hay không, nên tổng số phép so sánh phần tử ở trường hợp xấu nhất là tối đa **$\lfloor \log_2 n \rfloor + 1$ phép so sánh** (ví dụ với $n = 8$, tối đa $\lfloor \log_2 8 \rfloor + 1 = 4$ phép so sánh điểm giữa).

Đại lượng thứ ba là (3) **Số chữ số (hoặc số bit) cần để biểu diễn một số nguyên dương $n \ge 1$**: trong hệ nhị phân (cơ số $2$), vì một số nguyên dương có đúng $b$ bit (với bit cao nhất bằng $1$ mang trọng số $2^{b-1}$) nằm trong miền $2^{b-1} \le n < 2^b \iff b - 1 \le \log_2 n < b \iff b - 1 = \lfloor \log_2 n \rfloor$, nên số bit cần để viết $n$ là **$b = \lfloor \log_2 n \rfloor + 1$ bit** (ví dụ $8_{10} = 1000_2$ cần $\lfloor \log_2 8 \rfloor + 1 = 4$ bit); hoàn toàn tương tự, trong hệ thập phân (cơ số $10$), số chữ số cần để viết $n$ là $\lfloor \log_{10} n \rfloor + 1$. Tiểu mục đặt song song tốc độ tăng của $\log_2 n$, $n$ và $2^n$ (khi $n = 10^9$ thì $\log_2 n \approx 29.9$, chỉ cần tối đa $30$ phép so sánh tìm kiếm nhị phân) để người học thấy trực quan sự chênh lệch khổng lồ giữa tăng trưởng logarit, tuyến tính và hàm mũ.

> **Nguồn đối chiếu:** `openstax-precalculus-2e`: Chapter 4: §4.6 Exponential and Logarithmic Equations & Modeling Growth | `harvard-cs50x`: Week 0 Notes: Binary Representation, Halving Problem Size, and Binary Search Comparisons

### Chương 4 — Hàm số, miền xác định, hợp hàm, hàm ngược và biến đổi đồ thị (`mb-functions-graphs`)

Chương này xây dựng khái niệm hàm số (function) như một quy tắc ánh xạ tất định từ tập đầu vào (domain) sang tập đầu ra (codomain/range) — khái niệm nền tảng chung của cả giải tích, toán rời rạc lẫn thiết kế hàm trong ngôn ngữ lập trình, bao gồm hàm định nghĩa từng phần, phép hợp hàm, tính chất đơn ánh/toàn ánh/song ánh để tồn tại hàm ngược và tốc độ thay đổi trung bình trên đồ thị.

*Nguồn chương:* `openstax-precalculus-2e` (Chapter 1: Functions (§1.1–1.7 Function Notation, Domain/Range, Composition, Transformations, Inverse Functions))

#### Tiểu mục 1: Khái niệm hàm số f: A -> B, miền xác định (domain), miền giá trị (range) và hàm cho bởi nhiều công thức (`mb-fg-function-domain-range` — mức `core`)

Một **hàm số (function)** $f$ từ tập hợp $A$ vào tập hợp $B$ (ký hiệu $f: A \to B$) là một quy tắc gán **mỗi** đầu vào $x \in A$ với **đúng một** đầu ra duy nhất $y = f(x) \in B$. Tập hợp các đầu vào hợp lệ $A$ được gọi là **miền xác định (domain)**, tập đích $B$ là **miền đi (codomain)**, và tập hợp các giá trị thực sự được tạo ra $\{f(x) \mid x \in A\}$ là **miền giá trị / ảnh (range / image)**. Tiểu mục làm rõ rằng có thể có hai đầu vào khác nhau cùng cho ra một đầu ra (như $f(-2) = f(2) = 4$ với $f(x) = x^2$), nhưng tuyệt đối không thể có một đầu vào $x$ lại ứng với hai giá trị $f(x)$ khác nhau.

Nội dung tiếp theo rèn cách xác định miền xác định tự nhiên của một biểu thức giải tích (mẫu số khác $0$, biểu thức dưới căn bậc chẵn $\ge 0$, biểu thức trong logarit $> 0$) và cách đọc **hàm định nghĩa từng phần (piecewise-defined function)** — dạng hàm dùng các công thức khác nhau trên các miền con rời nhau của đầu vào, tương ứng trực tiếp với cấu trúc rẽ nhánh `if / else if / else` trong lập trình.

> **Nguồn đối chiếu:** `openstax-precalculus-2e`: Chapter 1: §1.1 Functions and Function Notation & §1.2 Domain and Range (including piecewise functions)

#### Tiểu mục 2: Phép hợp hàm (f o g)(x), tính chất một-một (injective), toàn ánh (surjective) và điều kiện tồn tại hàm ngược (`mb-fg-composition-invertibility` — mức `core`)

Khi nối đầu ra của hàm $g$ làm đầu vào của hàm $f$, ta thu được **hàm hợp (composite function)** $(f \circ g)(x) = f(g(x))$, với điều kiện $g(x)$ phải nằm trong miền xác định của $f$. Tiểu mục này nhấn mạnh rằng thứ tự hợp hàm rất quan trọng vì phép hợp hàm nói chung **không có tính giao hoán**: ví dụ với $f(x) = x + 1$ và $g(x) = x^2$ thì $f(g(x)) = x^2 + 1$, khác hẳn với $g(f(x)) = (x + 1)^2$.

Để trả lời câu hỏi "khi nào từ đầu ra $y = f(x)$ có thể khôi phục duy nhất đầu vào $x$ ban đầu?", tiểu mục giới thiệu khái niệm **hàm một-một / đơn ánh (one-to-one / injective)**: $x_1 \neq x_2 \implies f(x_1) \neq f(x_2)$ (trên đồ thị tương ứng với tiêu chuẩn đường thẳng ngang chỉ cắt đồ thị tối đa một điểm). Khi $f: A \to B$ vừa là một-một vừa phủ kín toàn bộ $B$ (**toàn ánh / surjective**), $f$ là một **song ánh (bijection)** và có **hàm ngược (inverse function)** $f^{-1}: B \to A$ thỏa mãn $f^{-1}(f(x)) = x$ và $f(f^{-1}(y)) = y$. Với các hàm không một-một trên toàn bộ $\mathbb{R}$ như $f(x) = x^2$, người học hiểu vì sao phải **thu hẹp miền xác định** về $[0, \infty)$ thì mới định nghĩa được hàm ngược duy nhất $f^{-1}(y) = \sqrt{y}$.

> **Nguồn đối chiếu:** `openstax-precalculus-2e`: Chapter 1: §1.4 Composition of Functions & §1.7 Inverse Functions

#### Tiểu mục 3: Hình dáng đồ thị, tốc độ thay đổi trung bình và sự khác biệt hành vi của các họ hàm sơ cấp (`mb-fg-elementary-families-graphs` — mức `core`)

Tiểu mục này xây dựng trực giác hình học trên mặt phẳng tọa độ về các họ hàm cơ bản: hàm bậc nhất $f(x) = ax + b$ có **tốc độ thay đổi trung bình (average rate of change / hệ số góc slope)** $\frac{f(x_2) - f(x_1)}{x_2 - x_1} = a$ không đổi trên mọi khoảng; hàm bậc hai $f(x) = ax^2 + bx + c$ có đồ thị parabol đối xứng với một đỉnh cực tiểu (khi $a > 0$) hoặc cực đại (khi $a < 0$); hàm đa thức bậc cao và hàm phân thức hữu tỉ (với các đường tiệm cận đứng và tiệm cận ngang); cùng cặp hàm ngược nhau là hàm mũ $b^x$ và hàm logarit $\log_b x$ đối xứng nhau qua đường phân giác $y = x$.

Nội dung cũng giải thích các phép biến đổi đồ thị cơ bản có quy luật rõ ràng: cộng hằng số ngoài hàm $f(x) + c$ dịch đồ thị theo phương thẳng đứng, thay $x$ bởi $x - h$ trong $f(x - h)$ dịch đồ thị theo phương ngang, và nhân hệ số làm co giãn hoặc lật đối xứng đồ thị. Khái niệm tốc độ thay đổi trung bình $\frac{\Delta y}{\Delta x}$ ở chương này là bước chuẩn bị trực tiếp cho khái niệm đạo hàm ở Môn CS-11.

> **Nguồn đối chiếu:** `openstax-precalculus-2e`: Chapter 1 (§1.3 Rates of Change and Behavior of Graphs, §1.5 Transformation of Functions) & Chapter 2 (§2.1 Linear Functions)

### Chương 5 — Hệ tọa độ Descartes, lượng giác trên đường tròn đơn vị và dạng cực của số phức (`mb-coordinates-trigonometry`)

Chương này trang bị nền tảng hình học giải tích và lượng giác thiết yếu cho đại số tuyến tính, giải tích, đồ họa máy tính, xử lý tín hiệu và dạng lượng giác/mũ của số phức khi giải hệ thức đệ quy: từ công thức khoảng cách Euclid và phương trình đường tròn, đến số đo góc bằng radian, định nghĩa $\sin/\cos/\tan$ trên đường tròn đơn vị, công thức cộng góc và công thức De Moivre.

*Nguồn chương:* `openstax-precalculus-2e` (Chapter 2 (§2.1 Distance Formula), Chapters 5–7 (Trigonometric Functions and Identities), Chapter 8 (§8.5 Polar Form of Complex Numbers & De Moivre’s Theorem))

#### Tiểu mục 1: Hệ tọa độ vuông góc Descartes, công thức khoảng cách Euclid hai chiều và phương trình đường tròn (`mb-ct-cartesian-distance-circles` — mức `core`)

Hệ tọa độ Descartes biểu diễn mỗi điểm $P$ trên mặt phẳng bằng một cặp số thực có thứ tự $(x, y)$, cho phép chuyển các bài toán hình học thành đại số và ngược lại. Áp dụng định lý Pythagoras cho tam giác vuông tạo bởi độ lệch hoành độ $\Delta x = x_2 - x_1$ và độ lệch tung độ $\Delta y = y_2 - y_1$, ta thu được **khoảng cách Euclid** giữa hai điểm $P_1(x_1, y_1)$ và $P_2(x_2, y_2)$: $$d(P_1, P_2) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$ cùng tọa độ trung điểm $M\left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$.

Từ công thức khoảng cách, quỹ tích tất cả các điểm $(x, y)$ cách tâm $I(a, b)$ một khoảng không đổi $R > 0$ có phương trình chính tắc là $(x - a)^2 + (y - b)^2 = R^2$. Đặc biệt, khi tâm đặt tại gốc tọa độ $(0, 0)$ và bán kính $R = 1$, ta có **đường tròn đơn vị (unit circle)** $x^2 + y^2 = 1$ — cấu trúc trung tâm để định nghĩa các hàm lượng giác cho góc quay bất kỳ.

> **Nguồn đối chiếu:** `openstax-precalculus-2e`: Appendix A & Chapter 5 (§5.2 Unit Circle: Sine and Cosine Functions)

#### Tiểu mục 2: Đơn vị đo góc radian, định nghĩa sin/cos/tan trên đường tròn đơn vị và các đẳng thức lượng giác cơ bản (`mb-ct-radians-unit-circle-trig` — mức `core`)

Trong giải tích và thư viện toán của các ngôn ngữ lập trình (như `<cmath>` trong C++), góc luôn được đo bằng **radian** chứ không phải độ: góc $1\text{ rad}$ là góc ở tâm chắn cung có độ dài đúng bằng bán kính $R$, do đó cả vòng tròn có số đo $2\pi\text{ rad} = 360^\circ$ (hay $\pi\text{ rad} = 180^\circ$, $\pi/2\text{ rad} = 90^\circ$). Với góc định hướng $\theta \in \mathbb{R}$ bất kỳ quay từ tia $Ox$ dương trên đường tròn đơn vị $x^2 + y^2 = 1$, hoành độ giao điểm được định nghĩa là $\cos \theta$, tung độ là $\sin \theta$, và tỉ số $\tan \theta = \frac{\sin \theta}{\cos \theta}$ (khi $\cos \theta \neq 0$).

Cách định nghĩa trên đường tròn đơn vị làm hiển nhiên ngay các tính chất cốt lõi mà không cần học vẹt: miền giá trị bị chặn $-1 \le \cos \theta, \sin \theta \le 1$; tính tuần hoàn chu kỳ $2\pi$; tính chẵn/lẻ $\cos(-\theta) = \cos \theta$, $\sin(-\theta) = -\sin \theta$; hằng đẳng thức Pythagoras $\cos^2 \theta + \sin^2 \theta = 1$; và công thức cộng góc $\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta$, $\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta$ (cơ sở của phép quay tọa độ 2D trong Đại số tuyến tính và đồ họa máy tính). Tiểu mục cũng giới thiệu các hàm lượng giác ngược $\arcsin, \arccos, \arctan$ cùng hàm `atan2(y, x)` xác định góc chính xác trên cả 4 góc phần tư.

> **Nguồn đối chiếu:** `openstax-precalculus-2e`: Chapter 5 (§5.1 Angles and Radians, §5.2–5.3 Unit Circle Trig) & Chapter 6–7 (§6.3 Inverse Trig, §7.1–7.2 Sum and Difference Identities)

#### Tiểu mục 3: Biểu diễn hình học của số phức, dạng lượng giác r(cos theta + i sin theta) và công thức De Moivre (`mb-ct-complex-polar-demoivre` — mức `core`)

Khi đặt số phức $z = a + bi \neq 0$ lên mặt phẳng tọa độ (mặt phẳng phức Argand) tại điểm $(a, b)$, khoảng cách từ gốc tới điểm đó là môđun $r = |z| = \sqrt{a^2 + b^2} > 0$ và góc định hướng hợp với tia thực dương là đối số (argument) $\theta$. Thay $a = r \cos \theta$ và $b = r \sin \theta$, ta thu được **dạng lượng giác (polar form)** của số phức: $$z = r(\cos \theta + i \sin \theta)$$ Dạng biểu diễn này làm sáng tỏ ý nghĩa hình học của phép nhân số phức: khi nhân hai số phức $z_1 = r_1(\cos\theta_1 + i\sin\theta_1)$ và $z_2 = r_2(\cos\theta_2 + i\sin\theta_2)$, áp dụng công thức cộng góc cho thấy môđun được nhân lại ($r_1 r_2$) còn góc quay được cộng thêm ($\theta_1 + \theta_2$).

Lặp lại phép nhân đó $n$ lần dẫn trực tiếp tới **Công thức De Moivre**: $$[r(\cos \theta + i \sin \theta)]^n = r^n(\cos(n\theta) + i \sin(n\theta))$$ Công thức này đóng vai trò then chốt khi giải hệ thức đệ quy tuyến tính ở Môn CS-09: khi phương trình đặc trưng có cặp nghiệm phức liên hợp $r(\cos\theta \pm i\sin\theta)$, lũy thừa bậc $n$ của chúng kết hợp lại thành tổ hợp thực $r^n(c_1 \cos(n\theta) + c_2 \sin(n\theta))$ mô tả các dãy dao động tuần hoàn.

> **Nguồn đối chiếu:** `openstax-precalculus-2e`: Chapter 8: §8.5 Polar Form of Complex Numbers (Product, Quotient, and De Moivre’s Theorem)

### Chương 6 — Dãy số, ký hiệu chỉ số, tổng Sigma (Σ), tích Pi (Π) và cấp số cộng/nhân cơ sở (`mb-sequences-summations`)

Chương cuối của môn Toán nền trang bị ngôn ngữ ký hiệu chuẩn để biểu diễn các tập dữ liệu có thứ tự và các phép tính tích lũy lặp (đánh chỉ số 0-based so với 1-based, công thức tường minh so với quy tắc truy hồi, biến đổi đại số trên ký hiệu tổng $\Sigma$ và tích $\Pi$, cùng tổng cấp số cộng và cấp số nhân) — cầu nối trực tiếp sang mảng/vector và vòng lặp `for` trong lập trình (`CS-04`) cũng như quy nạp và phân tích độ phức tạp trong Toán rời rạc (`CS-09`).

*Nguồn chương:* `openstax-precalculus-2e` (Chapter 11: Sequences, Probability and Counting Theory (§11.1 Sequences and Their Notations, §11.2 Arithmetic Sequences, §11.3 Geometric Sequences and Series))

#### Tiểu mục 1: Khái niệm dãy số, ký hiệu chỉ số (subscript), đánh chỉ số từ 0 so với từ 1, công thức tường minh và truy hồi cơ bản (`mb-ss-sequences-index-notation` — mức `core`)

Một **dãy số (sequence)** là một danh sách có thứ tự các số $a_0, a_1, a_2, \dots, a_k, \dots$, về bản chất là một hàm số mà miền xác định là tập các số nguyên không âm $\mathbb{N}$ (hoặc $\mathbb{Z}^+$). Chữ số nhỏ viết thấp ở chân ký hiệu trong $a_i$ được gọi là **chỉ số (index / subscript)** dùng để xác định vị trí của phần tử trong dãy, hoàn toàn tương ứng với truy cập phần tử `a[i]` của mảng/vector trong lập trình. Tiểu mục làm rõ mối quan hệ số lượng phần tử trên đoạn chỉ số nguyên $[L, R]$: số các số nguyên từ $L$ đến $R$ (tính cả hai đầu mút, với $L \le R$) luôn là $R - L + 1$; do đó dãy đánh chỉ số từ $1$ đến $n$ có $n - 1 + 1 = n$ phần tử, còn dãy đánh chỉ số từ $0$ (zero-based indexing chuẩn trong C++) có $n$ phần tử nằm ở các chỉ số $0, 1, \dots, n - 1$.

Nội dung tiếp theo phân biệt hai cách xác định một dãy số: (1) **Công thức số hạng tổng quát (explicit / closed-form formula)** cho phép tính trực tiếp $a_n$ chỉ từ chỉ số $n$ (ví dụ $a_n = 2n + 1$); và (2) **Quy tắc truy hồi cơ bản (recursive definition)** định nghĩa phần tử đầu tiên (điều kiện đầu $a_0$) và quy tắc tính $a_n$ từ phần tử đứng ngay trước $a_{n-1}$ (ví dụ $a_0 = 3, a_n = a_{n-1} + 5$ với $n \ge 1$).

> **Nguồn đối chiếu:** `openstax-precalculus-2e`: Chapter 11: §11.1 Sequences and Their Notations (Explicit vs Recursive Formulas)

#### Tiểu mục 2: Ký hiệu tổng Sigma (Σ) và tích Pi (Π): biến chạy, cận dưới/trên, quy tắc tuyến tính và phép đổi biến chỉ số (`mb-ss-sigma-pi-notation-mechanics` — mức `core`)

Thay vì viết dấu ba chấm mơ hồ $f(m) + f(m+1) + \dots + f(n)$, toán học dùng **ký hiệu tổng Sigma** $\sum_{i=m}^n f(i)$ để biểu diễn chính xác tổng của các số hạng $f(i)$ khi **biến chạy (index of summation / dummy variable)** $i$ lần lượt nhận các giá trị nguyên từ cận dưới $m$ đến cận trên $n$ (theo quy ước chuẩn, nếu $m > n$ thì tổng rỗng có giá trị bằng $0$, phần tử trung hòa của phép cộng). Tương tự, **ký hiệu tích Pi** $\prod_{i=m}^n f(i) = f(m) \cdot f(m+1) \cdots f(n)$ biểu diễn tích liên tiếp (với tích rỗng bằng $1$ và giai thừa $n! = \prod_{i=1}^n i$). Người học thấy ngay sự tương ứng một-một giữa $\sum_{i=m}^n f(i)$ với một vòng lặp `for (int i = m; i <= n; ++i) sum += f(i);`.

Tiểu mục trình bày chi tiết các quy tắc thao tác đại số trên ký hiệu $\Sigma$: (1) Tên biến chạy là biến giả cục bộ ($\sum_{i=1}^n a_i = \sum_{k=1}^n a_k$); (2) Tổng của một hằng số $c$ không phụ thuộc biến chạy trên đoạn $[m, n]$ bằng $\sum_{i=m}^n c = (n - m + 1)c$; (3) Tính chất tuyến tính cho phép đưa thừa số hằng ra ngoài và tách tổng: $\sum_{i=m}^n (\alpha a_i + \beta b_i) = \alpha \sum_{i=m}^n a_i + \beta \sum_{i=m}^n b_i$; và (4) Phép tách khoảng chỉ số $\sum_{i=1}^n a_i = \sum_{i=1}^k a_i + \sum_{i=k+1}^n a_i$ cùng phép dịch chỉ số $\sum_{i=1}^n f(i) = \sum_{j=0}^{n-1} f(j+1)$.

> **Nguồn đối chiếu:** `openstax-precalculus-2e`: Chapter 11: §11.1 Summation Notation and Properties of Sigma

#### Tiểu mục 3: Cấp số cộng, cấp số nhân và hai công thức tổng nền tảng nhất cho phân tích thuật toán (`mb-ss-arithmetic-geometric-intro` — mức `core`)

Tiểu mục cuối giới thiệu hai họ dãy số có quy luật đơn giản nhất nhưng xuất hiện trong hầu hết các phép đếm bước chạy của vòng lặp: **Cấp số cộng (Arithmetic sequence)** là dãy mà hiệu hai số hạng liên tiếp luôn bằng một công sai không đổi $d$ ($a_n = a_0 + nd$), với tổng các số hạng đầu bằng trung bình cộng của số đầu và số cuối nhân với số lượng số hạng, đặc biệt là tổng $n$ số nguyên dương đầu tiên $\sum_{i=1}^n i = 1 + 2 + \dots + n = \frac{n(n+1)}{2}$ (suy ra từ việc ghép cặp đối xứng $(1+n) + (2 + (n-1)) + \dots$).

Đối ngẫu với cấp số cộng là **Cấp số nhân (Geometric sequence)** mà tỉ số giữa hai số hạng liên tiếp luôn bằng một công bội không đổi $r$ ($g_n = g_0 r^n$). Bằng kỹ thuật nhân tổng $S = \sum_{i=0}^n r^i$ với $r$ rồi lấy hiệu $(1 - r)S = (1 + r + \dots + r^n) - (r + r^2 + \dots + r^{n+1}) = 1 - r^{n+1}$ để triệt tiêu các số hạng ở giữa, người học nắm được công thức đóng $\sum_{i=0}^n r^i = \frac{1 - r^{n+1}}{1 - r} = \frac{r^{n+1} - 1}{r - 1}$ khi $r \neq 1$ (và bằng $n + 1$ khi $r = 1$), đặc biệt là đẳng thức nhị phân $\sum_{i=0}^{k-1} 2^i = 1 + 2 + 4 + \dots + 2^{k-1} = 2^k - 1$. Các kỹ thuật chứng minh tổng cao hơn và chuỗi vô hạn sẽ được phát triển sâu ở Môn CS-09 và CS-11.

> **Nguồn đối chiếu:** `openstax-precalculus-2e`: Chapter 11: §11.2 Arithmetic Sequences and Series & §11.3 Geometric Sequences and Series

---

## CS-03: Nhập môn CS và tư duy tính toán (`computational-thinking`)

- **Thuộc khối:** Khối I — Bắt đầu từ số 0
- **Phân loại:** `core`
- **Điều kiện tiên quyết:**
  - `computing-environment` (*co_requisite*): Cần mô hình tệp, byte và tiến trình để đối chiếu khái niệm biểu diễn thông tin và thực thi thuật toán.
  - `math-bridge` (*co_requisite*): Cần lũy thừa cơ số 2, logarit cơ số 2 và dãy số để phân tích hệ nhị phân và số bước tìm kiếm.

### Tổng quan môn học

Môn học trả lời câu hỏi nền tảng trước khi người học gõ dòng mã lệnh đầu tiên: Khoa học máy tính thực chất nghiên cứu điều gì, và làm thế nào một cỗ máy chỉ biết bật/tắt hai trạng thái vật lý lại có thể biểu diễn mọi loại thông tin và giải quyết các bài toán phức tạp? Nội dung bắt đầu từ nguyên lý biểu diễn thông tin rời rạc bằng bit và byte, hệ đếm nhị phân và thập lục phân theo giá trị vị trí, đến cách mã hóa văn bản, hình ảnh và âm thanh thành các con số.

Trên nền biểu diễn dữ liệu đó, môn học định nghĩa chính xác khái niệm bài toán tính toán (computational problem), thể hiện đầu vào (instance), thuật toán (algorithm) như một quy trình hữu hạn không mơ hồ và sự khác biệt giữa thuật toán với chương trình cụ thể. Hai chương cuối rèn luyện kỹ năng cốt lõi nhất của người học lập trình: mô hình hóa trạng thái, lập bảng lần vết thực thi từng bước (dry-run execution trace), tìm kiếm tuần tự so với tìm kiếm chia đôi, phát hiện vòng lặp vô hạn, và phương pháp phân rã bài toán lớn thành các tầng trừu tượng độc lập.

### Giới hạn học thuật (`boundaries`)

- Tập trung hoàn toàn vào mô hình tư duy tính toán, biểu diễn thông tin, đặc tả đầu vào/đầu ra và lần vết thuật toán bằng mã giả hoặc sơ đồ rõ ràng; chưa đi vào cú pháp chi tiết của C++ (thuộc Môn CS-04).
- Phần so sánh số bước thực hiện (như $n$ bước của tìm kiếm tuyến tính so với $\approx \log_2 n$ bước của tìm kiếm nhị phân) dừng ở việc đếm trực tiếp và lập bảng so sánh; định nghĩa lượng từ hình thức của ký hiệu $O, \Omega, \Theta$ nằm ở Môn CS-09 và CS-16.
- Biểu diễn số âm bù hai (two’s complement) và chuẩn dấu chấm động IEEE 754 ở mức phần cứng chỉ được giới thiệu khái niệm tồn tại giới hạn hữu hạn bit; chi tiết mạch cộng/trừ bit và trường экспонент/mantissa nằm ở Môn CS-22 và CS-23.

### Nguồn giáo trình của môn học

- **CS50x: Introduction to Computer Science — Syllabus & Weeks 0–5** (`harvard-cs50x`, *primary*): Week 0 (Scratch / Computational Thinking: Binary, Representation, Algorithms, Pseudocode, Abstraction) & Week 3 (Linear vs Binary Search intuition) — URL: https://cs50.harvard.edu/x/syllabus/
- **Composing Programs** (`composing-programs`, *supplementary*): Chapter 1: §1.1–1.4 Building Abstractions with Functions (Computational Processes, Black-Box Abstraction, Designing Functions) — URL: https://composingprograms.com/pages/

### Chương 1 — Biểu diễn thông tin rời rạc: Bit, hệ nhị phân, hệ thập lục phân và mã hóa đa phương tiện (`ct-information-representation`)

Chương này giải thích cơ chế thống nhất phía sau mọi dữ liệu số: vì sao phần cứng máy tính chọn hệ nhị phân hai trạng thái, cách hệ đếm theo vị trí biểu diễn số tự nhiên trong cơ số $2$, $10$, $16$, và cách cùng một dãy bit có thể biểu diễn số lượng, chữ cái, màu sắc hoặc âm thanh tùy theo quy ước ngữ cảnh.

*Nguồn chương:* `harvard-cs50x` (Week 0 Lecture Notes: Information Representation — Binary, Bits, Bytes, ASCII, Unicode, RGB, and Audio Sampling)

#### Tiểu mục 1: Đơn vị thông tin nhị phân (bit), tổ hợp $2^k$ trạng thái và hệ đếm theo vị trí (cơ số 10, cơ số 2, cơ số 16) (`ct-ir-bits-positional-numeration` — mức `core`)

Ở tầng vật lý, việc chế tạo các linh kiện điện tử phân biệt chính xác 10 mức điện áp khác nhau rất dễ bị nhiễu, trong khi phân biệt hai trạng thái đối lập (có điện / không có điện, cao / thấp) lại cực kỳ bền vững. Mỗi phần tử lưu trữ một trong hai trạng thái đó được gọi là một **chữ số nhị phân (binary digit — bit)**, ký hiệu là `0` hoặc `1`. Một bit biểu diễn được $2^1 = 2$ khả năng; ghép $k$ bit độc lập tạo thành $2^k$ chuỗi bit phân biệt (ví dụ 1 byte gồm $8$ bit biểu diễn được $2^8 = 256$ trạng thái khác nhau, từ `00000000` đến `11111111`, tương ứng với các số nguyên không âm từ $0$ đến $2^8 - 1 = 255$).

Tiểu mục này làm rõ bản chất của **hệ đếm theo vị trí (positional numeral system)** với cơ số $b \ge 2$: một chuỗi chữ số $d_{k-1} d_{k-2} \dots d_1 d_0$ trong cơ số $b$ (với $0 \le d_i < b$) luôn có giá trị bằng tổng các lũy thừa của $b$: $$\sum_{i=0}^{k-1} d_i \cdot b^i$$ Trong hệ thập phân ($b=10$), các cột có trọng số $10^0=1, 10^1=10, 10^2=100, \dots$; hoàn toàn tương tự, trong **hệ nhị phân ($b=2$)**, các cột từ phải sang trái có trọng số $2^0=1, 2^1=2, 2^2=4, 2^3=8, 2^4=16, \dots$ (ví dụ $1101_2 = 1\cdot 8 + 1\cdot 4 + 0\cdot 2 + 1\cdot 1 = 13_{10}$). Để đổi ngược một số tự nhiên $n$ sang nhị phân, ta chia liên tiếp $n$ cho $2$ và ghi lại các số dư từ dưới lên (hoặc tách $n$ thành tổng các lũy thừa của $2$ lớn nhất không vượt quá nó). Cuối cùng, tiểu mục giới thiệu **hệ thập lục phân (hexadecimal, cơ số $16$)** dùng 16 ký hiệu `0–9` và `A–F` (ứng với $10$ đến $15$): vì $16 = 2^4$, mỗi chữ số hex gom gọn đúng một cụm $4$ bit nhị phân (nibble), và 1 byte ($8$ bit) luôn viết gọn thành đúng 2 chữ số hex từ `0x00` đến `0xFF`.

> **Nguồn đối chiếu:** `harvard-cs50x`: Week 0 Notes: Binary and Positional Notation ($2^0, 2^1, 2^2, \dots$) & Week 4 Notes: Hexadecimal (`0x` notation)

#### Tiểu mục 2: Mã hóa văn bản, màu sắc điểm ảnh, âm thanh số và nguyên lý diễn giải phụ thuộc ngữ cảnh (`ct-ir-context-dependent-encoding` — mức `core`)

Vì bộ nhớ máy tính chỉ chứa toàn các con số nhị phân, để lưu trữ thế giới thực ta phải thiết lập các **quy ước ánh xạ (encoding schemes)** chuyển đổi các đối tượng phi số thành số. Đối với văn bản, bảng mã **ASCII** dùng 1 byte (7 bit hiệu dụng) cho 128 ký tự tiếng Anh và dấu câu cơ bản, chẳng hạn chuỗi 3 byte có giá trị thập phân `72 73 33` khi được giải mã như văn bản ASCII sẽ hiện ra chuỗi `"HI!"`. Mở rộng lên toàn bộ ngôn ngữ loài người, bộ chuẩn **Unicode** gán mỗi đơn vị nguyên tử văn bản với một **giá trị vô hướng Unicode (Unicode scalar value; loại trừ các điểm mã surrogate)** như `U+0041`, được chuẩn **UTF-8** mã hóa bằng độ dài thay đổi từ **1 đến 4 byte** cho mỗi giá trị vô hướng Unicode; đồng thời một **ký tự hoặc biểu tượng hiển thị trên màn hình (user-perceived character / extended grapheme cluster)** có thể được tạo thành từ **một hoặc nhiều điểm mã ghép lại** (như chữ tiếng Việt tổ hợp chữ cái + dấu thanh, hoặc một emoji ghép bằng ký tự nối độ rộng bằng không `ZWJ` như `👩‍💻` gồm 3 điểm mã `U+1F469` + `U+200D` + `U+1F4BB`, chiếm 11 byte UTF-8).

Đối với hình ảnh kỹ thuật số dạng lưới điểm ảnh (raster bitmap), mỗi điểm ảnh (pixel) thường được biểu diễn trong mô hình màu cộng **RGB** bằng 3 byte chỉ cường độ Đỏ (Red), Lục (Green), Lam (Blue) từ $0$ đến $255$; khi đó cũng chính 3 byte có giá trị `72 73 33` nêu trên nếu nằm trong tệp ảnh lại được màn hình diễn giải thành một điểm ảnh màu vàng sẫm. Tương tự, âm thanh liên tục được số hóa bằng cách lấy mẫu (sampling) biên độ sóng âm hàng chục nghìn lần mỗi giây và lượng tử hóa (quantization) mỗi mẫu thành một số nguyên hữu hạn bit. Qua đó, người học nắm được nguyên lý cốt lõi: **cùng một dãy bit trong bộ nhớ không tự mang kiểu dữ liệu cố hữu; ý nghĩa của nó hoàn toàn do kiểu dữ liệu và ngữ cảnh mà chương trình áp đặt lên khi đọc**.

> **Nguồn đối chiếu:** `harvard-cs50x`: Week 0 Notes: Representing Text (ASCII, Unicode Code Points, UTF-8, Emoji ZWJ Sequences), Colors (RGB), Images, Video, and Sound in Binary

#### Tiểu mục 3: Giới hạn của biểu diễn hữu hạn bit: hiện tượng tràn số nguyên (overflow) và sai số xấp xỉ thực (`ct-ir-finite-precision-limits` — mức `core`)

Trong toán học thuần túy, tập số nguyên $\mathbb{Z}$ là vô hạn và giữa hai số thực bất kỳ luôn có vô số số thực khác; nhưng trong máy tính thực tế, mỗi biến chỉ được cấp một số lượng bit cố định (như $8, 16, 32$ hoặc $64$ bit). Tiểu mục này giải thích hệ quả tất yếu của giới hạn vật lý đó. Thứ nhất, khi kết quả của một phép cộng hoặc nhân vượt quá giá trị lớn nhất mà $k$ bit có thể biểu diễn (ví dụ cộng thêm $1$ vào byte không dấu đang chứa $255 = 11111111_2$), bit nhớ thứ $9$ bị tràn ra ngoài phạm vi lưu trữ, gây ra hiện tượng **tràn số nguyên (integer overflow)** làm giá trị quay vòng về $00000000_2 = 0$ (giống như công-tơ-mét xe máy 5 chữ số đi qua `99999` quay về `00000`).

Thứ hai, khi biểu diễn số thực bằng một số lượng bit hữu hạn (số dấu chấm động — floating-point), máy tính chỉ lưu được một tập hữu hạn các điểm rời rạc trên trục số thực. Những phân số rất đơn giản trong hệ cơ số $10$ như $1/10 = 0.1$ khi đổi sang hệ cơ số $2$ lại là phân số nhị phân vô hạn tuần hoàn $0.0001100110011\dots_2$, buộc phải cắt cụt ở bit cuối và dẫn tới sai số làm tròn nhỏ (floating-point imprecision, khiến `0.1 + 0.2` trong máy tính xấp xỉ `0.30000000000000004`). Nhận thức sớm hai giới hạn này giúp người học không bao giờ coi số trong máy tính đồng nhất tuyệt đối với số lý tưởng trong toán học.

> **Nguồn đối chiếu:** `harvard-cs50x`: Week 1 Notes: Limitations of Finite Bits — Integer Overflow and Floating-Point Imprecision

### Chương 2 — Bài toán tính toán, đặc tả Đầu vào – Đầu ra và khái niệm Thuật toán (`ct-problems-algorithms`)

Chương này xây dựng định nghĩa chuẩn xác về bài toán tính toán, thể hiện đầu vào (instance) và thuật toán hữu hạn, giúp người học phân biệt rõ "bài toán yêu cầu kết quả gì" với "thuật toán làm từng bước như thế nào để ra kết quả đó", đồng thời làm quen với cách đếm và so sánh chi phí số bước của hai thuật toán giải cùng một bài toán khi kích thước dữ liệu tăng.

*Nguồn chương:* `harvard-cs50x` (Week 0 & Week 3 Notes: Algorithms, Inputs/Outputs, Searching, and Running Time Comparison)

#### Tiểu mục 1: Phân biệt bài toán tổng quát (computational problem), thể hiện đầu vào (instance) và hợp đồng Đầu vào – Đầu ra (`ct-pa-problem-instance-contract` — mức `core`)

Trước khi nghĩ cách giải, người học cần định nghĩa chính xác bài toán đang xét. Trong khoa học máy tính, một **bài toán tính toán (computational problem)** là một đặc tả tổng quát mô tả mối quan hệ cần thỏa mãn giữa tập các **đầu vào hợp lệ (inputs)** và **đầu ra mong muốn (outputs)** tương ứng. Một **thể hiện của bài toán (problem instance)** là một bộ dữ liệu đầu vào cụ thể được gán cho các tham số của bài toán đó. Ví dụ: "Cho một dãy gồm $n$ số nguyên và một số mục tiêu $k$, hãy tìm vị trí xuất hiện của $k$ trong dãy (hoặc báo không tồn tại)" là *bài toán tìm kiếm*; còn bộ dữ liệu cụ thể $A = [4, 9, 1, 7], k = 1$ là một *thể hiện (instance)* của bài toán đó.

Tiểu mục này rèn luyện kỹ năng viết **đặc tả Đầu vào – Đầu ra (Input/Output specification)** cho mọi bài toán trước khi viết thuật toán: (1) Đầu vào gồm những đại lượng nào, kiểu gì, miền giá trị và **điều kiện biên (boundary/preconditions)** ra sao (chẳng hạn dãy có được phép rỗng $n = 0$ không? các phần tử có thể trùng nhau hoặc âm không? dãy đã được sắp xếp tăng dần chưa?); và (2) Đầu ra cần trả về giá trị gì trong trường hợp thông thường cũng như trong các trường hợp đặc biệt. Nhiều lỗi lập trình thực tế bắt nguồn từ việc bắt tay vào viết code ngay khi chưa làm rõ các trường hợp biên của đặc tả bài toán.

> **Nguồn đối chiếu:** `harvard-cs50x`: Week 0 Notes: Problem Solving as Input -> Algorithm -> Output | `erickson-algorithms`: Chapter 0: §0.1 What is an algorithm? (Problems vs Instances and unambiguous specification)

#### Tiểu mục 2: Định nghĩa thuật toán, bốn tính chất bắt buộc và sự khác biệt giữa thuật toán, mã giả với chương trình (`ct-pa-algorithm-properties-pseudocode` — mức `core`)

Một **thuật toán (algorithm)** là một dãy hữu hạn các chỉ thị được xác định rõ ràng, thực hiện theo từng bước để biến đổi một đầu vào hợp lệ của bài toán thành đầu ra đúng tương ứng. Để một quy trình được coi là một thuật toán hợp lệ, nó phải thỏa mãn bốn tính chất cốt lõi: (1) **Tính xác định / không mơ hồ (Definiteness / Unambiguity)**: mỗi bước phải rõ nghĩa tuyệt đối, không dựa vào cảm tính như "chọn một số trông có vẻ hợp lý"; (2) **Tính khả thi (Effectiveness)**: mỗi bước cơ bản phải thực hiện được bằng một lượng thao tác sơ cấp hữu hạn; (3) **Tính dừng (Finiteness / Termination)**: với mọi đầu vào hợp lệ, quy trình bắt buộc phải kết thúc sau một số hữu hạn bước chứ không rơi vào vòng lặp vô tận; và (4) **Tính đúng đắn (Correctness)**: khi kết thúc, kết quả tạo ra phải thỏa mãn đặc tả đầu ra cho **mọi** thể hiện đầu vào hợp lệ, không chỉ đúng trên vài ví dụ thử nghiệm.

Tiểu mục phân biệt rõ ba mức biểu diễn: **Thuật toán** là ý tưởng và cấu trúc logic của các bước giải (độc lập với ngôn ngữ lập trình); **Mã giả (Pseudocode)** là cách diễn đạt thuật toán bằng ngôn ngữ tự nhiên có cấu trúc thụt lề rõ ràng (gồm gán biến, rẽ nhánh `if/else`, vòng lặp `while/for`) để con người đọc và kiểm tra logic mà không bị vướng vào dấu chấm phẩy hay khai báo thư viện; còn **Chương trình (Program)** là bản cài đặt cụ thể của thuật toán đó bằng quy tắc cú pháp nghiêm ngặt của một ngôn ngữ như C++ để trình biên dịch dịch được.

> **Nguồn đối chiếu:** `harvard-cs50x`: Week 0 Notes: Algorithms and Expressing Logic in Structured Pseudocode

#### Tiểu mục 3: Đếm số bước thực hiện theo kích thước đầu vào n: đối chiếu tìm kiếm tuần tự và tìm kiếm chia đôi (`ct-pa-step-counting-linear-vs-binary` — mức `core`)

Cùng một bài toán có thể có nhiều thuật toán đều cho kết quả đúng nhưng tiêu tốn số bước thực hiện chênh lệch nhau hàng triệu lần khi kích thước dữ liệu $n$ lớn lên. Tiểu mục này minh họa trực quan qua bài toán tìm một tên người trong danh bạ có $n$ trang: **Thuật toán 1 (Tìm kiếm tuần tự / Linear Search)** lật từng trang từ đầu đến cuối; trong trường hợp xấu nhất (tên cần tìm nằm ở trang cuối hoặc không có trong danh bạ), thuật toán phải thực hiện $n$ phép so sánh trang (tăng tuyến tính theo $n$).

Ngược lại, nếu danh bạ **đã được sắp xếp theo thứ tự bảng chữ cái** (điều kiện tiên quyết bắt buộc), **Thuật toán 2 (Tìm kiếm nhị phân / Binary Search)** mở ngay trang chính giữa để so sánh: nếu chưa trúng, nhờ tính thứ tự nó biết chắc tên cần tìm chỉ có thể nằm ở nửa bên trái hoặc nửa bên phải, qua đó loại bỏ hoàn toàn ít nhất một nửa số trang còn lại chỉ sau 1 lần so sánh điểm giữa. Theo đúng sự phân biệt giữa số bước chia đôi và số phép so sánh đã học ở Môn CS-02: chỉ cần tối đa $\lfloor \log_2 n \rfloor$ lần chia đôi là thu hẹp miền ứng viên từ $n$ trang về còn tối đa $1$ trang, cộng thêm $1$ lần so sánh để kiểm tra trang cuối cùng đó cho tổng cộng tối đa **$\lfloor \log_2 n \rfloor + 1$ phép so sánh trang**. Vì vậy, khi $n$ tăng gấp đôi từ $1\,000\,000$ lên $2\,000\,000$ trang, tìm kiếm tuần tự tốn thêm $1\,000\,000$ phép so sánh, còn tìm kiếm nhị phân chỉ tốn thêm **đúng $1$ phép so sánh điểm giữa** (từ tối đa $20$ lên $21$ phép so sánh). Ví dụ kinh điển này giúp người học hiểu vì sao ta đo hiệu quả thuật toán theo tốc độ tăng của số bước theo $n$, và vì sao một thuật toán nhanh thường đòi hỏi dữ liệu đầu vào phải thỏa mãn một cấu trúc hoặc điều kiện nhất định.

> **Nguồn đối chiếu:** `harvard-cs50x`: Week 0 & Week 3 Notes: Phonebook Search — Linear Search ($n$) vs Binary Search ($\lfloor\log_2 n\rfloor + 1$ comparisons) and Preconditions

### Chương 3 — Trạng thái, biến đổi trạng thái, điều khiển luồng và bảng lần vết thực thi (Execution Trace) (`ct-state-execution-trace`)

Chương này dạy cơ chế vận hành bên trong của một thuật toán mệnh lệnh: trạng thái của quá trình tính toán được lưu trữ trong các biến như thế nào, các bước tuần tự – rẽ nhánh – lặp làm biến đổi trạng thái đó theo thời gian ra sao, và cách lập bảng lần vết bằng tay để kiểm chứng tính đúng đắn, phát hiện lỗi lệch một bước cùng điều kiện dừng.

*Nguồn chương:* `harvard-cs50x` (Week 0 & Week 1 Notes: Variables, Conditionals, Loops, and Tracing Execution Step by Step)

#### Tiểu mục 1: Khái niệm trạng thái (state), biến nhớ như hộp chứa có tên và bản chất cập nhật theo thời gian của phép gán (`ct-set-state-variables-assignment` — mức `core`)

Tại mỗi thời điểm trong quá trình chạy, toàn bộ thông tin mà thuật toán đang ghi nhớ được gọi là **trạng thái (state)** của hệ thống, được biểu diễn thông qua tập hợp các giá trị hiện tại của các **biến (variables)**. Mỗi biến có thể hình dung như một ô nhớ được dán nhãn tên định danh và tại mỗi thời điểm chỉ giữ một giá trị xác định. Khi thuật toán thực hiện một **phép gán (assignment)** dạng `x <- biểu_thức` (hoặc `x = biểu_thức` trong C++), quy trình luôn diễn ra theo hai pha tách biệt theo thời gian: (Pha 1) Đọc các giá trị hiện có trong trạng thái cũ để tính xong giá trị của `biểu_thức` ở vế phải; (Pha 2) Ghi đè giá trị vừa tính được vào ô nhớ của biến `x` ở vế trái, tạo ra trạng thái mới.

Hiểu rõ mô hình chuyển trạng thái hai pha này giúp người mới tránh được một trong những ngộ nhận phổ biến nhất khi mới học lập trình: bài toán **hoán đổi giá trị hai biến `a` và `b` (swap)**. Nếu viết hai bước gán liên tiếp `a <- b` rồi `b <- a`, thì ngay ở bước đầu tiên giá trị gốc của `a` đã bị ghi đè mất bởi giá trị của `b`, khiến cả hai biến cùng mang giá trị của `b`. Trong mô hình gán tuần tự từng biến đơn lẻ đang xét, cách chuẩn mực, an toàn và rõ ràng nhất để bảo toàn thông tin qua bước chuyển trạng thái là dùng một biến tạm `temp` theo 3 bước: `temp <- a`, `a <- b`, `b <- temp` (hoặc gọi hàm thư viện chuẩn `std::swap(a, b)` khi vào ngôn ngữ C++).

> **Nguồn đối chiếu:** `harvard-cs50x`: Week 0 & Week 4 Notes: State, Variables, and the Classic Swap Problem (Using a Temporary Variable)

#### Tiểu mục 2: Ba cấu trúc điều khiển cơ bản (tuần tự, rẽ nhánh, lặp) và kỹ thuật lập bảng lần vết trạng thái (Trace Table) (`ct-set-control-flow-trace-tables` — mức `core`)

Mọi thuật toán mệnh lệnh đều được lắp ghép từ ba cấu trúc điều khiển luồng cơ bản: (1) **Tuần tự (Sequence)**: thực hiện bước $A$ xong mới chuyển sang bước $B$; (2) **Rẽ nhánh có điều kiện (Selection / Conditional)**: kiểm tra một biểu thức logic đúng/sai (Boolean condition) tại trạng thái hiện tại để quyết định đi theo nhánh lệnh này hay nhánh lệnh khác; và (3) **Lặp (Iteration / Loop)**: lặp đi lặp lại một khối bước chừng nào điều kiện duy trì vòng lặp còn đúng. Khi các cấu trúc này lồng nhau (ví dụ một câu lệnh rẽ nhánh nằm bên trong một vòng lặp), trạng thái của các biến thay đổi liên tục qua từng vòng.

Để không đoán mò kết quả của thuật toán, tiểu mục này trang bị kỹ thuật **lập bảng lần vết thực thi (execution trace table / dry run)**: kẻ một bảng mà mỗi cột là một biến của thuật toán cùng cột điều kiện kiểm tra và cột đầu ra, còn mỗi hàng ghi lại chính xác giá trị của các biến sau từng bước hoặc từng vòng lặp trên một bộ đầu vào nhỏ (chẳng hạn $n = 4$). Việc tự tay điền bảng lần vết giúp người học nhìn tận mắt cơ chế tích lũy tổng (`sum`), đếm số lượng (`count`), hay cập nhật giá trị lớn nhất tạm thời (`current_max`) qua từng phần tử của dãy.

> **Nguồn đối chiếu:** `harvard-cs50x`: Week 0 & Week 1 Notes: Conditionals, Loops, Boolean Expressions, and Step-by-Step Tracing

#### Tiểu mục 3: Điều kiện dừng vòng lặp, lỗi lệch một bước (off-by-one) và trực giác về bất biến vòng lặp (`ct-set-termination-off-by-one-invariants` — mức `core`)

Một vòng lặp chỉ kết thúc khi trạng thái biến thay đổi theo một hướng làm cho điều kiện lặp cuối cùng phải trở thành sai. Nếu thân vòng lặp quên cập nhật biến điều khiển, hoặc cập nhật biến đi xa dần khỏi ngưỡng dừng (ví dụ lặp khi $i > 0$ nhưng mỗi bước lại tăng $i \leftarrow i + 1$), thuật toán sẽ rơi vào **vòng lặp vô hạn (infinite loop)**, vi phạm tính dừng của thuật toán. Ngay cả khi vòng lặp dừng lại, việc dùng nhầm dấu so sánh nghiêm ngặt `$<$` với `$\le$` hoặc khởi tạo chỉ số bắt đầu từ $1$ thay vì $0$ sẽ dẫn tới **lỗi lệch một đơn vị (off-by-one error / fencepost error)** — làm vòng lặp chạy thiếu phần tử cuối, thừa một bước, hoặc đọc tràn ra ngoài biên của dãy.

Để kiểm soát tính đúng đắn của vòng lặp một cách có cơ sở, tiểu mục giới thiệu trực giác ban đầu về **bất biến vòng lặp (loop invariant)**: một khẳng định về mối quan hệ giữa các biến mà luôn giữ đúng ngay trước vòng lặp đầu tiên và tiếp tục được bảo toàn sau mỗi bước lặp (ví dụ: "sau khi xét xong phần tử thứ $k$, biến `max_val` luôn chứa giá trị lớn nhất trong $k$ phần tử đầu tiên"). Khi vòng lặp kết thúc ở phần tử thứ $n$, tính chất đó lập tức bảo đảm `max_val` là giá trị lớn nhất của toàn bộ $n$ phần tử. Khái niệm trực quan này sẽ được hình thức hóa bằng quy nạp toán học ở Môn CS-09 và phân tích thuật toán ở Môn CS-16.

> **Nguồn đối chiếu:** `harvard-cs50x`: Week 1 & Week 2 Notes: Infinite Loops, Off-by-One Fencepost Errors, and Loop Conditions

### Chương 4 — Trừu tượng hóa (Abstraction) và phân rã bài toán theo mô-đun (`ct-abstraction-decomposition`)

Chương cuối của môn học giải thích nguyên lý tư duy quan trọng nhất giúp con người xây dựng được những hệ thống phần mềm hàng triệu dòng lệnh mà không bị quá tải nhận thức: nguyên lý trừu tượng hóa hộp đen tách biệt giao diện với cài đặt, phương pháp phân rã bài toán từ trên xuống kết hợp kiểm chứng từ dưới lên, và các mẫu biến đổi dữ liệu cơ sở.

*Nguồn chương:* `composing-programs` (Chapter 1: §1.1 Getting Started, §1.2 Elements of Programming, §1.3 Defining New Functions, & §1.4 Designing Functions (Black-Box Abstraction)); `harvard-cs50x` (Week 0 & Week 1 Notes: Abstraction and Problem Decomposition)

#### Tiểu mục 1: Nguyên lý trừu tượng hóa hộp đen (black-box abstraction): tách biệt giao diện "làm gì" với cài đặt "làm như thế nào" (`ct-ad-black-box-abstraction` — mức `core`)

Khi sử dụng một khái niệm hoặc một công cụ phức tạp, con người không thể cùng lúc giữ trong đầu mọi chi tiết cấp thấp của nó. **Trừu tượng hóa (Abstraction)** là việc ẩn đi các chi tiết thực hiện bên trong của một quy trình và chỉ giữ lại một tên gọi cùng hợp đồng giao tiếp rõ ràng ở bên ngoài. Trong mô hình **trừu tượng hóa hộp đen (black-box abstraction)**, một thành phần được nhìn nhận qua hai mặt tách biệt: **Giao diện (Interface — What it does)** quy định thành phần đó nhận đầu vào gì và cam kết trả về đầu ra gì; còn **Cài đặt (Implementation — How it works)** là chuỗi bước thuật toán cụ thể bên trong hộp đen để tạo ra kết quả đó.

Lợi ích quyết định của sự tách biệt này là tính thay thế độc lập: khi phần còn lại của hệ thống chỉ phụ thuộc vào giao diện của hộp đen `SapXep(danh_sach)`, ta có thể thay thế thuật toán sắp xếp chậm bên trong hộp đen bằng một thuật toán sắp xếp nhanh hơn mà không phải sửa bất kỳ bước nào ở phần chương trình gọi nó. Toàn bộ ngành khoa học máy tính được tổ chức thành các tầng trừu tượng xếp chồng lên nhau: từ vật lý bán dẫn $\to$ cổng logic `0/1` $\to$ tập lệnh máy $\to$ hệ điều hành $\to$ ngôn ngữ lập trình bậc cao $\to$ ứng dụng.

> **Nguồn đối chiếu:** `composing-programs`: Chapter 1: §1.2 Elements of Programming, §1.3 Defining New Functions, & §1.4 Designing Functions (Black-Box Abstraction) | `harvard-cs50x`: Week 0 Notes: Abstraction — Simplifying Complexity by Layering

#### Tiểu mục 2: Phân rã từ trên xuống (top-down decomposition), ghép nối từ dưới lên và kiểm chứng từng bài toán con (`ct-ad-top-down-decomposition` — mức `core`)

Khi đứng trước một bài toán lớn nhiều yêu cầu (chẳng hạn: đọc bảng điểm của một lớp học, loại bỏ các dòng dữ liệu lỗi, tính điểm trung bình từng học sinh và in ra danh sách học sinh đạt học bổng), người mới thường cố viết một mạch từ dòng đầu đến dòng cuối trong một khối duy nhất nên nhanh chóng bị rối. **Phân rã bài toán (Problem Decomposition)** giải quyết vấn đề này bằng cách chia bài toán gốc thành các **bài toán con (subproblems)** nhỏ hơn, sao cho mỗi bài toán con chỉ đảm nhận đúng một trách nhiệm rõ ràng và giao tiếp với nhau qua dữ liệu đầu vào/đầu ra minh bạch.

Tiểu mục trình bày sự kết hợp giữa hai chiều thiết kế: **Thiết kế từ trên xuống (Top-down refinement)** phác thảo luồng chính của bài toán lớn bằng cách giả sử đã có sẵn các hộp đen giải các bài toán con, sau đó mới lần lượt đi sâu vào chi tiết từng hộp đen cho đến khi đủ đơn giản để viết mã trực tiếp; ngược lại, **Xây dựng và kiểm chứng từ dưới lên (Bottom-up construction)** cài đặt và kiểm tra độc lập từng hộp đen nhỏ trên các dữ liệu mẫu trước khi ghép chúng lại thành hệ thống hoàn chỉnh. Tư duy phân rã và kiểm chứng từng phần này là nền tảng trực tiếp để thiết kế hàm ở Môn CS-04 và kỹ thuật gỡ lỗi khoa học ở Môn CS-05.

> **Nguồn đối chiếu:** `composing-programs`: Chapter 1: §1.4 Designing Functions (Single Responsibility, Decomposition, and Testing Sub-components) | `learncpp`: Chapter 2 (§2.1 Introduction to Functions) & Chapter 3 (§3.1–3.2 Modular Program Design and Verification)

#### Tiểu mục 3: Trừu tượng hóa dữ liệu sơ cấp và các mẫu biến đổi dãy kinh điển (duyệt, lọc, tích lũy, tìm cực trị) (`ct-ad-data-representation-patterns` — mức `core`)

Bên cạnh trừu tượng hóa quy trình xử lý, tư duy tính toán còn dựa trên **trừu tượng hóa dữ liệu (data abstraction)**: chọn cách gom nhóm các thông tin liên quan thành một cấu trúc hợp lý để thuật toán thao tác tự nhiên nhất (chẳng hạn biểu diễn một học sinh bằng một bản ghi gồm mã số, họ tên, điểm số; hoặc biểu diễn toàn bộ lớp học bằng một dãy có thứ tự các bản ghi đó). Việc chọn cách tổ chức dữ liệu phù hợp thường quyết định trực tiếp thuật toán sẽ đơn giản hay phức tạp.

Cuối cùng, tiểu mục đúc kết bốn mẫu thuật toán nền tảng (algorithmic patterns) xuất hiện lặp đi lặp lại trên mọi dãy dữ liệu mà người học sẽ cài đặt bằng C++ ngay trong Môn CS-04: (1) **Biến đổi từng phần tử (Mapping/Traversal)** — đi qua mọi phần tử $x$ và áp dụng cùng một phép tính; (2) **Lọc theo điều kiện (Filtering)** — giữ lại những phần tử thỏa mãn vị từ kiểm tra $P(x)$; (3) **Tích lũy / Thu gọn (Accumulation / Reduction)** — khởi tạo một biến tích lũy ở giá trị trung hòa (như `sum = 0` hoặc `prod = 1`) rồi gộp dần từng phần tử vào biến đó; và (4) **Tìm kiếm / Cực trị (Searching / Extrema)** — tìm phần tử đầu tiên thỏa mãn điều kiện hoặc giữ lại phần tử lớn nhất/nhỏ nhất từng gặp trong quá trình duyệt.

> **Nguồn đối chiếu:** `harvard-cs50x`: Week 0 & Week 2 Notes: Sequences, Iteration Patterns, Accumulation, and Searching | `composing-programs`: Chapter 2: §2.1–2.3 Sequences and Data Abstraction Fundamentals

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

## CS-05: Thiết kế chương trình và debug (`program-design-debugging`)

- **Thuộc khối:** Khối I — Bắt đầu từ số 0
- **Phân loại:** `core`
- **Điều kiện tiên quyết:**
  - `intro-programming` (*required*): Cần biết viết hàm, vòng lặp, mảng động std::vector, chuỗi std::string và chạy chương trình C++ cơ bản trước khi học thiết kế mô-đun và gỡ lỗi có hệ thống.

### Tổng quan môn học

Môn học giải quyết khoảng trống lớn nhất của người mới học xong cú pháp nhập môn: khi chương trình biên dịch thành công nhưng chạy ra kết quả sai hoặc tự dừng đột ngột, làm thế nào để tìm ra đúng nguyên nhân mà không sửa mò ngẫu nhiên? Nội dung bắt đầu từ việc thiết kế chương trình sao cho lỗi khó ẩn nấp ngay từ đầu thông qua hợp đồng hàm (tiền điều kiện, hậu điều kiện, bất biến), sự tách biệt giữa hàm tính toán thuần túy (pure function) với hàm có tác dụng phụ (side effects) làm thay đổi trạng thái hoặc vào/ra, và việc dùng `assert` để bắt lỗi vi phạm giả định ngay tại điểm phát sinh.

Trên nền thiết kế có hợp đồng đó, môn học trình bày phương pháp gỡ lỗi theo phương pháp khoa học (scientific debugging): tách biệt triệu chứng quan sát được (symptom) với nguyên nhân gốc (root cause), cô lập ca đầu vào tối thiểu tái hiện lỗi, đặt giả thuyết có thể bác bỏ và khoanh vùng nhị phân (wolf-fence / binary search). Hai chương cuối dẫn dắt người học từ con số 0 làm chủ trình gỡ lỗi tương tác (`gdb`/`lldb` và giao diện debugger trong IDE) để đặt điểm dừng (breakpoints), đi từng bước lệnh (step over/into/out), đọc ngăn xếp lời gọi (call stack / backtrace), và thiết kế bộ ca kiểm thử tự động bao phủ các miền tương đương cùng trường hợp biên.

### Giới hạn học thuật (`boundaries`)

- Hướng dẫn sử dụng trình gỡ lỗi (`gdb`/`lldb`/IDE debugger) bắt đầu hoàn toàn từ số 0: giải thích cờ biên dịch `-g` là gì, điểm dừng hoạt động ra sao và đọc khung ngăn xếp từ hàm `main` đi vào như thế nào.
- Trọng tâm của môn này là lỗi logic thuật toán, lỗi trạng thái biến, lỗi vượt biên chỉ số `std::vector`/`std::string` và quy trình kiểm thử hàm; các lỗi bộ nhớ cấp thấp liên quan tới con trỏ thô và cấp phát động (`new`/`delete`) cùng công cụ AddressSanitizer được đặt ở Môn CS-07 sau khi học mô hình bộ nhớ.
- Chưa đi vào kiểm thử tích hợp quy mô hệ thống phân tán hay giàn giả lập phụ thuộc (mocking frameworks) của công nghệ phần mềm lớn (thuộc Môn CS-31).

### Nguồn giáo trình của môn học

- **Learn C++ — Comprehensive C++ Programming Tutorials** (`learncpp`, *primary*): Chapter 3 (§3.1–3.10 Debugging C++ Programs) & Chapter 9 (§9.1–9.6 Error Detection, Testing, and Assert) — URL: https://www.learncpp.com/
- **The Missing Semester of Your CS Education (2020 Edition)** (`mit-missing-semester`, *primary*): Lecture 7: Debugging and Profiling (Debugging Methodology, GDB/LLDB, Backtraces) — URL: https://missing.csail.mit.edu/2020/
- **Software Engineering at Google** (`swe-at-google`, *supplementary*): Chapter 11 (Testing Overview) & Chapter 12 (Unit Testing) — URL: https://abseil.io/resources/swe-book/html/toc.html

### Chương 1 — Hợp đồng hàm (Preconditions, Postconditions, Invariants), tác dụng phụ và kiểm tra giả định bằng Assert (`pdd-contracts-decomposition`)

Chương này dạy cách thiết kế từng hàm như một đơn vị tính toán có cam kết rõ ràng thông qua tiền điều kiện, hậu điều kiện và bất biến dữ liệu. Khi mỗi hàm nêu rõ nó đòi hỏi điều kiện gì ở đầu vào, đảm bảo điều gì ở đầu ra và tách biệt tính toán thuần túy khỏi tác dụng phụ I/O, việc kiểm tra đúng/sai của một chương trình dài được quy về kiểm tra từng hàm ngắn một cách độc lập.

*Nguồn chương:* `learncpp` (Chapter 9: §9.4 Detecting and handling errors & §9.6 Assert and static_assert); `composing-programs` (Chapter 1: §1.2–1.4 Pure vs Non-Pure Functions and Functional Contracts)

#### Tiểu mục 1: Khái niệm hợp đồng hàm: Tiền điều kiện (Preconditions), Hậu điều kiện (Postconditions) và Bất biến dữ liệu (`pdd-cd-preconditions-postconditions-invariants` — mức `core`)

Mọi lời gọi hàm là một sự phối hợp giữa hai bên: **bên gọi (caller)** truyền đối số vào và **bên được gọi (callee — chính thân hàm)** thực hiện tính toán rồi trả kết quả. **Hợp đồng hàm (Function Contract)** quy định rõ trách nhiệm của hai bên qua ba thành phần: (1) **Tiền điều kiện (Precondition)** là điều kiện mà các tham số đầu vào và trạng thái ban đầu bắt buộc phải thỏa mãn *trước khi* hàm bắt đầu chạy (ví dụ hàm `timKiemNhiPhan(v, k)` có tiền điều kiện là vector `v` đã được sắp xếp không giảm; hàm `tinhTrungBinh(v)` có tiền điều kiện `!v.empty()`); (2) **Hậu điều kiện (Postcondition)** là cam kết về giá trị trả về và trạng thái sau khi hàm kết thúc, *nếu* tiền điều kiện ban đầu đã được tôn trọng; và (3) **Bất biến (Invariant)** là tính chất luôn giữ đúng trước và sau mỗi thao tác hợp lệ trên một cấu trúc dữ liệu.

Giá trị cốt lõi của hợp đồng hàm nằm ở việc phân định rõ lỗi thuộc về đâu: nếu tiền điều kiện bị vi phạm (bên gọi truyền một vector chưa sắp xếp vào hàm tìm kiếm nhị phân), lỗi nằm ở nơi gọi hàm chứ không phải ở thuật toán bên trong hàm; ngược lại, nếu mọi tiền điều kiện đều thỏa mãn mà kết quả trả về vi phạm hậu điều kiện, lỗi chắc chắn nằm ở cài đặt thân hàm đó.

> **Nguồn đối chiếu:** `learncpp`: Chapter 9: §9.4 Detecting and handling errors (Function assumptions, caller vs callee responsibilities)

#### Tiểu mục 2: Phân biệt hàm tính toán thuần túy (pure function) với hàm có tác dụng phụ (side effects) và kiến trúc tách biệt I/O (`pdd-cd-pure-functions-vs-side-effects` — mức `core`)

Một nguồn gây lỗi và gây khó khăn lớn khi kiểm thử ở người mới là trộn lẫn lệnh nhập/xuất (`std::cin`, `std::cout`) và biến toàn cục ngay vào giữa vòng lặp tính toán của hàm. Tiểu mục này phân biệt hai loại hàm: **Hàm thuần túy (Pure function)** là hàm mà giá trị trả về chỉ phụ thuộc duy nhất vào các đối số đầu vào của nó và hoàn toàn không gây ra **tác dụng phụ (side effects)** nào ra môi trường bên ngoài (không sửa biến toàn cục, không sửa đối số truyền tham chiếu, không đọc bàn phím hay in ra màn hình). Ngược lại, hàm có tác dụng phụ là hàm làm biến đổi trạng thái bên ngoài phạm vi cục bộ của nó hoặc tương tác với luồng I/O.

Khi thiết kế chương trình theo nguyên tắc **đẩy tác dụng phụ và I/O ra lớp vỏ ngoài cùng (I/O at the boundaries)** và giữ cho toàn bộ phần lõi thuật toán là các hàm nhận dữ liệu qua tham số rồi trả về kết quả qua `return`, người học thu được hai lợi ích tức thì: thứ nhất, hàm tính toán luôn cho ra cùng một kết quả mỗi khi gọi lại với cùng đối số nên rất dễ suy luận; thứ hai, có thể gọi hàm đó hàng trăm lần trong một chương trình kiểm thử tự động mà không cần người dùng ngồi gõ bàn phím cho `std::cin`.

> **Nguồn đối chiếu:** `composing-programs`: Chapter 1: §1.2.5 Pure Functions vs Non-Pure Functions (Side Effects) | `learncpp`: Chapter 2 (§2.2–2.4 Function return values and parameters) & Chapter 7 (§7.8 Why non-const global variables are evil)

#### Tiểu mục 3: Sử dụng assert (<cassert>) và static_assert: phân biệt phát hiện lỗi lập trình nội bộ với xử lý dữ liệu lỗi từ người dùng (`pdd-cd-assertions-vs-error-handling` — mức `core`)

Để biến các tiền điều kiện, hậu điều kiện và bất biến từ lời ghi chú thụ động thành hàng rào kiểm tra tự động khi chạy, C++ cung cấp macro `assert(bieu_thuc_dieu_kien)` trong thư viện `<cassert>`. Khi chương trình chạy ở chế độ gỡ lỗi (debug build), nếu `bieu_thuc_dieu_kien` có giá trị `false`, `assert` sẽ dừng chương trình ngay tại chỗ và in ra chính xác tên tệp, số dòng cùng biểu thức vừa bị vi phạm (thay vì để trạng thái sai âm thầm lan truyền thêm hàng trăm dòng nữa mới gây kết quả sai ở cuối chương trình). Đối với các điều kiện có thể kiểm tra ngay tại thời điểm biên dịch (như kích thước kiểu dữ liệu hoặc hằng số cấu hình), từ khóa `static_assert` cho phép trình biên dịch báo lỗi ngay trước khi tạo tệp chạy.

Tiểu mục nhấn mạnh ranh giới sử dụng cực kỳ quan trọng giữa **`assert`** và **xử lý lỗi thời gian chạy (error handling)**: `assert` chỉ dùng để bắt **lỗi logic của chính người lập trình (programmer bugs / contract violations)** — những tình huống không bao giờ được phép xảy ra nếu mã nguồn viết đúng (ví dụ chỉ số nội bộ `idx < v.size()`) và có thể bị tắt đi khi biên dịch bản phát hành có định nghĩa macro `NDEBUG`. Ngược lại, đối với **các tình huống lỗi đến từ môi trường bên ngoài** (như người dùng nhập chữ vào chỗ cần số, hoặc tệp dữ liệu trên đĩa không tồn tại), chương trình tuyệt đối không được dùng `assert` mà phải kiểm tra bằng câu lệnh điều kiện `if` và xử lý/báo lỗi an toàn ngay cả trong bản phát hành. Ngoài ra, biểu thức đặt bên trong `assert(...)` tuyệt đối không được chứa tác dụng phụ (như `assert(++i < n)`), vì khi tắt `assert` thì phép tăng `++i` cũng sẽ biến mất.

> **Nguồn đối chiếu:** `learncpp`: Chapter 9: §9.6 Assert and static_assert (Assertions vs error handling, NDEBUG, and side-effect pitfalls)

### Chương 2 — Phương pháp chẩn đoán lỗi khoa học (Scientific Debugging) và tái hiện lỗi tối thiểu (`pdd-scientific-debugging`)

Chương này thay thế thói quen "sửa đại một dấu `<=` thành `<` rồi chạy thử xem may ra đúng không" bằng quy trình chẩn đoán lỗi có kỷ luật theo phương pháp khoa học: phân biệt triệu chứng quan sát được ở cuối chương trình với nguyên nhân gốc nơi trạng thái bắt đầu nhiễm lỗi, thu gọn ca đầu vào tái hiện tối thiểu, khoanh vùng nhị phân và dùng thực nghiệm kiểm chứng giả thuyết.

*Nguồn chương:* `learncpp` (Chapter 3: §3.1–3.5 The debugging process, strategy, and basic debugging tactics); `mit-missing-semester` (Lecture 7: Debugging and Profiling — Systematic Debugging and Reproducibility)

#### Tiểu mục 1: Chuỗi nhân quả của lỗi phần mềm: Nguyên nhân gốc (Defect/Bug) -> Trạng thái nhiễm lỗi (Infected State) -> Triệu chứng (Failure) (`pdd-sd-symptom-fault-root-cause` — mức `core`)

Khi một chương trình chạy sai, thứ người học nhìn thấy trên màn hình (một con số kết quả sai ở dòng in cuối cùng, hoặc thông báo chương trình bị dừng đột ngột) mới chỉ là **triệu chứng bên ngoài (symptom / observable failure)** chứ thường không phải là dòng lệnh chứa lỗi. Tiểu mục này phân tích cơ chế lan truyền lỗi theo ba chặng thời gian: (1) **Khiếm khuyết trong mã nguồn (Defect / Root cause)** tại một dòng lệnh $L_1$ thực hiện phép tính hoặc cập nhật sai; (2) Khi luồng thực thi đi qua $L_1$, nó tạo ra một **trạng thái nhiễm lỗi (infected state)** trong các biến nhớ nhưng chương trình vẫn tiếp tục chạy qua các dòng $L_2, L_3, \dots$ mà chưa báo lỗi; và (3) Mãi tới dòng $L_k$ ở rất xa phía sau, trạng thái nhiễm lỗi đó mới gây ra **triệu chứng thất bại (failure)** nhìn thấy được.

Do khoảng cách giữa dòng gây lỗi gốc $L_1$ và dòng xuất hiện triệu chứng $L_k$, mọi nỗ lực chỉ nhìn chằm chằm vào dòng $L_k$ hoặc thêm các câu lệnh `if` vá tạm ở cuối hàm để ép kết quả cho khớp một ví dụ mẫu đều chỉ là "chữa triệu chứng", khiến chương trình càng thêm rối và tiếp tục sai trên dữ liệu khác. Mục tiêu của quá trình gỡ lỗi là truy ngược dòng thời gian từ $L_k$ về đúng thời điểm trạng thái biến bắt đầu lệch khỏi giá trị đúng dự kiến tại $L_1$.

> **Nguồn đối chiếu:** `learncpp`: Chapter 3: §3.1 Syntax and semantic errors & §3.2 The debugging process (Finding the root cause)

#### Tiểu mục 2: Tái hiện lỗi tất định, thu gọn ca đầu vào tối thiểu (Minimal Reproducible Example) và vòng lặp giả thuyết – thực nghiệm (`pdd-sd-minimal-reproduction-hypothesis` — mức `core`)

Điều kiện tiên quyết để tìm ra nguyên nhân lỗi là phải làm cho lỗi đó **tái hiện được một cách ổn định (reproducible)** trên một bộ đầu vào xác định. Nếu lỗi xuất hiện trên một tệp dữ liệu lớn gồm $10\,000$ số nguyên, người học không thể lần vết bằng mắt qua $10\,000$ vòng lặp; bước đầu tiên bắt buộc là **thu gọn ca đầu vào tối thiểu (input minimization / minimal reproducible example — MRE)**: cắt bớt dần dữ liệu đầu vào cho tới khi chỉ còn một dãy rất nhỏ (chẳng hạn 2 hoặc 3 phần tử như `[-5, -2]`) mà chương trình vẫn chạy sai. Ngay trong quá trình cắt giảm dữ liệu đó, đặc điểm chung của các đầu vào gây lỗi (ví dụ: "chỉ sai khi tất cả các số trong dãy đều là số âm") thường đã lộ diện.

Sau khi có ca tái hiện nhỏ, việc gỡ lỗi tuân theo đúng **vòng lặp phương pháp khoa học**: (1) Quan sát dữ liệu đầu vào và kết quả sai thực tế so với kết quả đúng tính bằng tay; (2) Nêu một **giả thuyết cụ thể (hypothesis)** về vị trí và cơ chế gây sai (ví dụ: "biến `max_val` được khởi tạo bằng `0` nên khi mảng toàn số âm thì không phần tử nào lớn hơn `0`"); (3) Dùng công cụ quan sát (in trạng thái trung gian hoặc đặt điểm dừng debugger) để kiểm tra dự đoán của giả thuyết đó; và (4) Chỉ sửa mã nguồn khi giả thuyết đã được bằng chứng trạng thái xác nhận, đồng thời chỉ thay đổi **một yếu tố mỗi lần** để biết chắc thay đổi nào giải quyết được lỗi.

> **Nguồn đối chiếu:** `learncpp`: Chapter 3: §3.2 The debugging process & §3.3 A strategy for debugging (Reproducing the problem and narrowing down) | `mit-missing-semester`: Lecture 7: Debugging — Reproducing bugs and minimal test cases

#### Tiểu mục 3: Khoanh vùng nhị phân trong không gian thực thi (Wolf-Fence) và kỹ thuật ghi vết chẩn đoán có cấu trúc (`pdd-sd-binary-isolation-logging` — mức `core`)

Khi một chương trình trải qua chuỗi nhiều bước xử lý $S_1 \to S_2 \to \dots \to S_m$ và kết quả cuối cùng bị sai, thay vì kiểm tra tuần tự từ $S_1$, ta áp dụng nguyên lý **tìm kiếm nhị phân trên luồng thực thi (binary search / wolf-fence debugging)**: kiểm tra trạng thái dữ liệu ở ngay điểm giữa $S_{m/2}$. Nếu tại điểm giữa dữ liệu đã sai, lỗi chắc chắn nằm ở nửa đầu ($S_1 \dots S_{m/2}$); nếu tại điểm giữa dữ liệu hoàn toàn đúng theo đặc tả, lỗi chắc chắn nằm ở nửa sau ($S_{m/2+1} \dots S_m$). Chỉ sau vài bước chia đôi, vùng nghi vấn từ hàng trăm dòng mã được cô lập xuống một hàm hoặc một vòng lặp duy nhất.

Tiểu mục cũng làm rõ cách sử dụng kỹ thuật in trạng thái chẩn đoán (diagnostic logging) một cách chuẩn xác khi chưa mở debugger, đồng thời chỉ ra các cạm bẫy của việc dùng `std::cout` bừa bãi: nên in thông tin gỡ lỗi ra luồng lỗi chuẩn **`std::cerr`** thay vì `std::cout` bởi vì `std::cerr` không bị giữ lại trong vùng đệm (unbuffered) — nếu chương trình bị sập đột ngột ngay dòng kế tiếp, nội dung trong vùng đệm `std::cout` có thể chưa kịp xuất ra màn hình khiến người học tưởng nhầm chương trình sập ở dòng trước đó; ngoài ra việc in ra `std::cerr` không làm bẩn luồng kết quả chuẩn `std::cout` khi so sánh kết quả tự động.

> **Nguồn đối chiếu:** `learncpp`: Chapter 3: §3.4 Basic debugging tactics & §3.5 More debugging tactics (Using std::cerr vs std::cout) | `mit-missing-semester`: Lecture 7: Print debugging, logging, and binary search isolation

### Chương 3 — Làm chủ trình gỡ lỗi tương tác (Interactive Debugger): Breakpoints, Stepping và Khung ngăn xếp (Call Stack) (`pdd-debugger-callstack`)

Chương này hướng dẫn người mới bắt đầu hoàn toàn từ số 0 cách sử dụng công cụ mạnh nhất để quan sát bên trong một chương trình đang chạy: trình gỡ lỗi tương tác (`gdb`, `lldb` hoặc giao diện gỡ lỗi trực quan trong VS Code / IDE) để đặt điểm dừng, đi từng bước lệnh, theo dõi biến và đọc vết ngăn xếp lời gọi hàm mà không phải thêm rồi xóa hàng chục câu lệnh in tạm trong mã nguồn.

*Nguồn chương:* `learncpp` (Chapter 3: §3.6–3.9 Using an integrated debugger (Stepping, Breakpoints, Watching variables, The call stack)); `mit-missing-semester` (Lecture 7: Debuggers — GDB/LLDB interactive execution, breakpoints, and stack frames)

#### Tiểu mục 1: Biên dịch kèm thông tin gỡ lỗi (-g), cơ chế Điểm dừng (Breakpoint) và Điểm dừng có điều kiện (`pdd-dc-debug-symbols-breakpoints` — mức `core`)

Mặc định khi trình biên dịch dịch tệp `.cpp` sang mã máy, tệp thực thi chỉ chứa địa chỉ ô nhớ và lệnh máy thô mà không giữ lại tên biến hay số dòng mã nguồn gốc. Để trình gỡ lỗi biết lệnh máy nào ứng với dòng thứ mấy của tệp `main.cpp` và biến `tong` nằm ở đâu, người học cần biên dịch chương trình ở **chế độ gỡ lỗi (debug build)** bằng cách truyền cờ **`-g`** (kèm tắt tối ưu hóa `-O0`, ví dụ `g++ -std=c++20 -g -O0 main.cpp -o main`). Cờ `-g` nhúng bảng ánh xạ ký hiệu gỡ lỗi (debug symbols) vào tệp thực thi mà không làm thay đổi logic của chương trình.

Khi chạy chương trình bên trong trình gỡ lỗi (`gdb ./main`, `lldb ./main` hoặc bấm `F5` trong IDE), công cụ cốt lõi đầu tiên là **Điểm dừng (Breakpoint)**: một dấu đánh dấu gắn vào một dòng mã nguồn hoặc tên hàm để yêu cầu trình gỡ lỗi **tạm dừng (pause/suspend)** tiến trình ngay *trước khi* dòng lệnh đó được thực thi. Khi tiến trình đang tạm dừng tại điểm dừng, toàn bộ thời gian như đứng yên để người học kiểm tra giá trị hiện tại của mọi biến. Đối với các vòng lặp chạy hàng nghìn lần nhưng lỗi chỉ xảy ra ở vòng thứ $k = 500$, việc đặt **Điểm dừng có điều kiện (Conditional Breakpoint)** (ví dụ dừng tại dòng 25 chỉ khi `i == 500` hoặc `sum < 0`) giúp bỏ qua 499 vòng đầu tiên và dừng lại chính xác tại khoảnh khắc trạng thái sắp chuyển sang sai.

> **Nguồn đối chiếu:** `learncpp`: Chapter 3: §3.6 Using an integrated debugger: Stepping & §3.7 Running to a point and breakpoints | `mit-missing-semester`: Lecture 7: Compiling with debug symbols (`-g`) and setting breakpoints (`break`, conditional breakpoints)

#### Tiểu mục 2: Ba thao tác đi từng bước lệnh (Step Over, Step Into, Step Out) và theo dõi biểu thức trạng thái (Watches) (`pdd-dc-stepping-watches-inspection` — mức `core`)

Sau khi chương trình đã tạm dừng tại một điểm dừng, trình gỡ lỗi cung cấp ba thao tác điều khiển luồng thực thi từng bước mà mọi lập trình viên phải phân biệt chính xác dựa trên cách chúng xử lý **lời gọi hàm**: (1) **Step Over (`next` / `F10`)**: thực thi dòng lệnh hiện tại và dừng ở dòng kế tiếp trong *cùng hàm hiện tại*; nếu dòng hiện tại có gọi một hàm con `tinhToan(x)`, trình gỡ lỗi sẽ chạy trọn vẹn hàm `tinhToan(x)` ở tốc độ bình thường rồi dừng lại ngay sau khi hàm đó trả về — rất hữu ích khi ta tin rằng hàm con đó đã đúng (như các hàm thư viện chuẩn `std::sort`, `v.push_back`) và không muốn đi lạc vào mã nguồn bên trong nó; (2) **Step Into (`step` / `F11`)**: nếu dòng hiện tại có gọi một hàm do ta viết, trình gỡ lỗi sẽ bước **vào bên trong** dòng lệnh đầu tiên của hàm con đó để kiểm tra từng bước bên trong; và (3) **Step Out / Finish (`finish` / `Shift+F11`)**: chạy nốt phần còn lại của hàm con hiện tại cho đến khi nó `return` và dừng lại ngay tại nơi gọi hàm ở tầng ngoài.

Trong khi đi từng bước, người học sử dụng cửa sổ biến cục bộ (Locals), lệnh in giá trị (`print` trong `gdb`/`lldb`) hoặc danh sách **Biểu thức theo dõi (Watch expressions)** để quan sát không chỉ từng biến đơn lẻ mà cả giá trị của các biểu thức phức hợp (như `v[i]`, `v.size()`, `left <= right`) tự động cập nhật sau mỗi bước lệnh, kèm theo **Điểm canh dữ liệu (Watchpoint / Data Breakpoint)** để yêu cầu debugger tự động dừng ngay khi một biến cụ thể bị thay đổi giá trị.

> **Nguồn đối chiếu:** `learncpp`: Chapter 3: §3.6 Stepping (Step into, Step over, Step out) & §3.8 Watching variables

#### Tiểu mục 3: Cấu trúc Ngăn xếp lời gọi (Call Stack), Khung kích hoạt (Stack Frame) và đọc vết ngăn xếp (Backtrace) khi chương trình sập (`pdd-dc-callstack-frames-backtrace` — mức `core`)

Khi hàm `main()` gọi hàm `xuLyLop()`, rồi bên trong `xuLyLop()` lại gọi `tinhDiemTrungBinh()`, máy tính làm thế nào để nhớ được từng hàm đang chạy dở ở dòng nào và biến cục bộ của hàm nào thuộc về hàm đó? Tiểu mục này giải thích cơ chế **Ngăn xếp lời gọi (Call Stack)**: mỗi khi một hàm được gọi, một **khung ngăn xếp (stack frame / activation record)** mới chứa các tham số, biến cục bộ của lần gọi đó và địa chỉ quay về (return address) được đẩy (push) lên đỉnh ngăn xếp; khi hàm đó thực hiện `return`, khung của nó được lấy ra (pop) khỏi đỉnh ngăn xếp và luồng điều khiển quay trở lại đúng dòng đang chờ của hàm gọi phía dưới.

Hiểu rõ Call Stack cho phép người học đọc thành thạo **vết ngăn xếp (Backtrace / Stack Trace)** — bảng danh sách các khung hàm từ đỉnh ngăn xếp (hàm đang chạy tại thời điểm dừng, frame `#0`) đi ngược xuống đáy ngăn xếp (`main()`). Khi một chương trình bị dừng bất thường do vi phạm `assert` hoặc truy cập ngoài biên `v.at(i)`, chỉ cần mở chương trình trong debugger và xem Backtrace (`bt` trong `gdb`/`lldb`), người học không chỉ biết chương trình dừng ở hàm nào mà còn có thể chuyển ngữ cảnh lên/xuống giữa các khung hàm (`frame`) để xem hàm cha đã truyền những giá trị đối số nào vào khiến hàm con gặp sự cố.

> **Nguồn đối chiếu:** `learncpp`: Chapter 3: §3.9 Using an integrated debugger: The call stack | `mit-missing-semester`: Lecture 7: Stack traces, backtraces (`bt`), and inspecting stack frames

### Chương 4 — Thiết kế ca kiểm thử (Test Cases), phân vùng tương đương, phân tích biên và kiểm thử hồi quy (`pdd-testing-edge-cases`)

Chương cuối trang bị phương pháp kiểm chứng chủ động cho chương trình: thay vì gõ tay vài con số dễ dãi như `1 2 3` rồi vội kết luận chương trình đã đúng, người học biết cách thiết kế một bộ ca kiểm thử có hệ thống dựa trên phân vùng tương đương, phân tích giá trị biên, độ bao phủ nhánh/vòng lặp và viết hàm tự động hóa việc chạy kiểm tra hồi quy sau mỗi lần sửa mã.

*Nguồn chương:* `learncpp` (Chapter 9: §9.1–9.3 Introduction to testing your code and code coverage); `swe-at-google` (Chapter 11 (Testing Overview) & Chapter 12 (Unit Testing))

#### Tiểu mục 1: Phân vùng tương đương (Equivalence Partitioning), Phân tích giá trị biên (Boundary Value Analysis) và danh mục trường hợp đặc biệt (`pdd-tec-equivalence-boundary-analysis` — mức `core`)

Vì miền đầu vào của một hàm thường có hàng tỷ khả năng (chẳng hạn mọi vector số nguyên), ta không thể kiểm thử toàn bộ (exhaustive testing) mà phải chọn một tập nhỏ các ca kiểm thử đại diện có khả năng phát hiện lỗi cao nhất. Phương pháp **Phân vùng tương đương (Equivalence Partitioning)** chia miền đầu vào thành các nhóm (phân vùng) mà thuật toán xử lý theo cùng một nhánh logic (ví dụ với hàm tính thuế theo bậc thu nhập: nhóm âm không hợp lệ, nhóm miễn thuế $[0, 11]$, nhóm bậc một $(11, 18]$, nhóm bậc cao $> 18$), từ đó chọn ít nhất một giá trị đại diện nằm giữa mỗi phân vùng.

Tuy nhiên, phần lớn các lỗi lệch một đơn vị (`<` so với `<=`) lại nằm ngay trên ranh giới giữa hai phân vùng. Do đó, phương pháp **Phân tích giá trị biên (Boundary Value Analysis)** yêu cầu kiểm thử trực tiếp các giá trị nằm ngay tại biên và sát hai bên biên (ví dụ với ngưỡng $11$: thử $10, 11, 12$). Đối với các thuật toán trên dãy và số nguyên, tiểu mục hệ thống hóa danh mục các ca biên bắt buộc phải xét: dãy rỗng ($n = 0$), dãy chỉ có $1$ phần tử ($n = 1$), dãy có $2$ phần tử (đúng thứ tự và ngược thứ tự), dãy mà mọi phần tử đều bằng nhau, số $0$, số âm, phần tử cần tìm nằm ở ngay đầu dãy (`index 0`) hoặc cuối dãy (`index n-1`), và các giá trị cực đại/cực tiểu của kiểu dữ liệu (`INT_MAX`, `INT_MIN`) dễ gây tràn số khi cộng hoặc nhân.

> **Nguồn đối chiếu:** `learncpp`: Chapter 9: §9.2 Code coverage & §9.3 Common semantic errors in C++ (Boundary and edge case testing)

#### Tiểu mục 2: Kiểm thử hộp đen so với kiểm thử hộp trắng và các mức độ bao phủ mã nguồn (Statement, Branch, Loop Coverage) (`pdd-tec-glassbox-coverage-metrics` — mức `core`)

Việc thiết kế ca kiểm thử dựa trên hai góc nhìn bổ sung cho nhau: **Kiểm thử hộp đen (Black-box testing)** chỉ dựa vào đặc tả Đầu vào – Đầu ra của hàm mà không nhìn vào mã nguồn bên trong, giúp phát hiện các trường hợp đặc tả yêu cầu nhưng người lập trình quên xử lý; ngược lại, **Kiểm thử hộp trắng / hộp kính (White-box / Glass-box testing)** nhìn trực tiếp vào cấu trúc câu lệnh bên trong hàm để thiết kế các đầu vào ép chương trình phải đi qua mọi nhánh lệnh.

Tiểu mục làm rõ ba mức **độ bao phủ mã nguồn (code coverage)** trong kiểm thử hộp trắng: (1) **Bao phủ câu lệnh (Statement coverage)**: mỗi dòng lệnh trong hàm được chạy qua ít nhất một lần; (2) **Bao phủ nhánh (Branch coverage)**: mọi điều kiện `if` đều được thử cả trường hợp `true` lẫn trường hợp `false` (kể cả khi không viết nhánh `else` tường minh); và (3) **Bao phủ vòng lặp (Loop coverage — quy tắc 0, 1, 2)**: thử các đầu vào làm vòng lặp chạy $0$ lần (bỏ qua luôn), chạy đúng $1$ lần, và chạy nhiều hơn $1$ lần. Tiểu mục cũng nhấn mạnh giới hạn quan trọng: đạt 100% bao phủ câu lệnh hay nhánh là điều kiện cần để không bỏ sót vùng mã chết, nhưng **chưa phải là điều kiện đủ để chứng minh hàm không còn lỗi** (chẳng hạn khi công thức tính toán trong câu lệnh đó bị thiếu xét trường hợp chia cho 0 hoặc tràn số).

> **Nguồn đối chiếu:** `learncpp`: Chapter 9: §9.2 Code coverage (Statement, branch, and loop 0-1-2 testing)

#### Tiểu mục 3: Viết hàm kiểm thử đơn vị tự kiểm (Self-checking Unit Tests) và kiểm thử hồi quy (Regression Testing) (`pdd-tec-unit-test-harness-regression` — mức `core`)

Nếu việc kiểm thử được thực hiện bằng cách chạy chương trình, gõ đầu vào từ bàn phím rồi dùng mắt tự đọc kết quả trên màn hình, người học sẽ ngại chạy lại toàn bộ các ca kiểm thử cũ mỗi khi sửa một dòng mã mới. Tiểu mục này hướng dẫn cách viết các **hàm kiểm thử đơn vị tự kiểm (self-checking unit tests)** ngay trong C++: tách các hàm thuật toán ra khỏi `main`, sau đó viết một hàm `chayKiemThu()` gọi trực tiếp hàm cần kiểm tra với từng bộ đầu vào chuẩn và dùng `assert(ketQuaThucTe == ketQuaMongDoi)` để máy tính tự động đối chiếu kết quả.

Hơn nữa, mỗi khi phát hiện và sửa xong một lỗi mới trong quá trình debug, ca đầu vào tối thiểu đã làm lộ lỗi đó phải được giữ lại vĩnh viễn trong hàm `chayKiemThu()` để phục vụ **kiểm thử hồi quy (regression testing)**. Nhờ vậy, bất kỳ lần chỉnh sửa hay tối ưu hóa mã nguồn nào trong tương lai nếu vô tình làm hỏng lại trường hợp cũ hoặc phá vỡ các trường hợp biên đã đúng trước đó đều sẽ bị bộ kiểm thử hồi quy phát hiện tức khắc chỉ bằng một lệnh chạy.

> **Nguồn đối chiếu:** `learncpp`: Chapter 9: §9.1 Introduction to testing your code (Writing automated test functions and preserving tests) | `swe-at-google`: Chapter 11 & Chapter 12: Automated Testing and Regression Prevention

---

## CS-06: Git và công cụ phát triển (`git-dev-tools`)

- **Thuộc khối:** Khối I — Bắt đầu từ số 0
- **Phân loại:** `core`
- **Điều kiện tiên quyết:**
  - `computing-environment` (*required*): Cần nắm vững cây thư mục, đường dẫn tương đối/tuyệt đối, quyền tệp và thao tác cửa sổ dòng lệnh cơ bản.
  - `intro-programming` (*required*): Cần có kinh nghiệm viết, biên dịch và chạy chương trình C++ để thực hành quản lý lịch sử mã nguồn và tách chương trình đa tệp.

### Tổng quan môn học

Môn học giải quyết hai bài toán thực tế xuất hiện ngay khi chương trình của người học vượt quá một tệp đơn lẻ: (1) Làm thế nào để lưu lại toàn bộ lịch sử tiến hóa của mã nguồn, thử nghiệm ý tưởng mới mà không sợ làm hỏng bản đang chạy tốt, và khôi phục lại bất kỳ trạng thái nào trong quá khứ mà không phải sao chép thư mục kiểu `project_v1`, `project_final_2`? và (2) Làm thế nào để kết nối các công cụ dòng lệnh và tự động hóa việc biên dịch một dự án gồm nhiều tệp `.h`/`.cpp`? Thay vì dạy Git như một danh sách câu lệnh gõ theo quán tính, môn học bắt đầu từ số 0 bằng cách giải thích mô hình dữ liệu bên dưới của Git: một kho lưu trữ định địa chỉ theo nội dung (content-addressable storage) lưu các ảnh chụp toàn cục (snapshots) thông qua ba đối tượng bất biến `blob`, `tree`, `commit` tạo thành một đồ thị có hướng không chu trình (DAG).

Khi đã hiểu một `commit` thực chất là một nút bất biến trỏ tới cây thư mục và các `commit` cha, người học tự suy luận được cơ chế của ba vùng làm việc (`Working Tree`, `Staging Area / Index`, `.git Repository`), bản chất của nhánh (`branch`) và con trỏ `HEAD`, sự khác biệt giữa hợp nhất chuyển tiếp nhanh (`fast-forward`), hợp nhất ba chiều (`3-way merge`) và tái định gốc (`rebase`), cũng như cách giải quyết xung đột (`merge conflict`) và cứu dữ liệu bằng `restore`, `revert`, `reflog`. Chương cuối mở rộng kỹ năng dòng lệnh sang các đường ống xử lý văn bản POSIX (`|`, `grep`, `find`) và cơ chế biên dịch gia tăng (incremental build) với `Make` và `CMake`.

### Giới hạn học thuật (`boundaries`)

- Dạy Git từ con số 0 thông qua mô hình đối tượng (`blob`, `tree`, `commit`) và đồ thị lịch sử trước khi đi vào các thao tác nhánh và khôi phục; tuyệt đối không dạy kiểu học vẹt chuỗi lệnh `git add . && git commit && git push` mà không hiểu điều gì xảy ra trong `.git`.
- Phần hệ thống build (`Make` và `CMake`) tập trung vào đồ thị phụ thuộc giữa tệp nguồn (`.cpp`), tệp tiêu đề (`.h`), tệp đối tượng (`.o`) và tệp thực thi cho dự án C++ vừa sức; chưa đi vào đóng gói phân phối đa nền tảng quy mô công nghiệp hay CI/CD đám mây (thuộc Môn CS-31).

### Nguồn giáo trình của môn học

- **Pro Git (2nd Edition)** (`pro-git-2e`, *primary*): Chapters 1–3 (Git Basics & Git Branching), Chapter 7 (Git Tools: Reset, Stash, Blame), and Chapter 10 (§10.1–10.3 Git Internals: Plumbing, Porcelain, Git Objects, Git References) — URL: https://git-scm.com/book/en/v2
- **The Missing Semester of Your CS Education (2020 Edition)** (`mit-missing-semester`, *primary*): Lecture 2 (Shell Tools and Scripting), Lecture 6 (Version Control — Git Data Model), and Lecture 8 (Metaprogramming — Build Systems & Make) — URL: https://missing.csail.mit.edu/2020/
- **Learn C++ — Comprehensive C++ Programming Tutorials** (`learncpp`, *supplementary*): Chapter 2: §2.8–2.12 Programs with multiple code files, header files, and header guards — URL: https://www.learncpp.com/

### Chương 1 — Mô hình đối tượng bất biến của Git (Blob, Tree, Commit) và ba vùng làm việc (`gdt-git-object-model`)

Chương mở đầu giải thích từ gốc vì sao hệ thống quản lý phiên bản Git cần thiết và cơ chế lưu trữ định địa chỉ theo mã băm bên trong thư mục `.git`. Hiểu rõ ba đối tượng bất biến `blob`, `tree`, `commit` trên đồ thị DAG cùng sự chuyển dịch trạng thái tệp giữa ba vùng `Working Tree`, `Staging Area (Index)` và `Repository` là chìa khóa để làm chủ mọi thao tác Git về sau.

*Nguồn chương:* `pro-git-2e` (Chapter 1 (§1.1–1.3 What is Git? Snapshots, Not Differences; The Three States), Chapter 2 (§2.1–2.3 Recording Changes), & Chapter 10 (§10.2 Git Objects)); `mit-missing-semester` (Lecture 6: Version Control (Git) — Git’s Data Model from First Principles)

#### Tiểu mục 1: Bản chất ảnh chụp trạng thái (Snapshots) và ba đối tượng bất biến định địa chỉ theo mã băm: Blob, Tree, Commit (`gdt-gom-snapshots-content-addressable-dag` — mức `core`)

Nhiều người mới lầm tưởng Git lưu trữ lịch sử như một danh sách các bản vá "dòng nào được thêm, dòng nào bị xóa" giữa các phiên bản; thực tế, Git nhìn dữ liệu như một chuỗi các **ảnh chụp toàn cảnh (snapshots)** của toàn bộ cây thư mục dự án theo thời gian. Để lưu trữ hàng nghìn ảnh chụp mà không bị trùng lặp dữ liệu, bên dưới thư mục `.git/objects`, Git hoạt động như một **kho lưu trữ định địa chỉ theo nội dung (content-addressable filesystem)**: mỗi đối tượng dữ liệu được đưa qua hàm băm mật mã (SHA-1 40 ký tự hex hoặc SHA-256) để tạo ra một mã định danh duy nhất; nếu một tệp không thay đổi nội dung giữa hai phiên bản, mã băm của nó giữ nguyên và Git chỉ việc trỏ lại tới đúng đối tượng cũ mà không tốn thêm dung lượng.

Toàn bộ lịch sử của Git được xây dựng từ đúng ba kiểu đối tượng bất biến (immutable objects): (1) **`blob` (binary large object)** chỉ lưu thuần túy mảng byte nội dung của một tệp (không lưu tên tệp hay quyền tệp); (2) **`tree`** tương ứng với một thư mục, lưu danh sách các mục gồm tên tệp/thư mục con, quyền truy cập và mã băm trỏ tới các `blob` hoặc `tree` con; và (3) **`commit`** lưu một ảnh chụp tại một thời điểm, gồm mã băm của `tree` gốc đại diện cho toàn bộ dự án, thông tin tác giả/thời gian, thông điệp mô tả lý do thay đổi (commit message), và quan trọng nhất là **mã băm của một hoặc nhiều `commit` cha (parent commits)** ngay trước nó. Nhờ các liên kết trỏ ngược về cha này, các `commit` tạo thành một **đồ thị có hướng không chu trình (Directed Acyclic Graph — DAG)** biểu diễn toàn bộ lịch sử tiến hóa của mã nguồn.

> **Nguồn đối chiếu:** `pro-git-2e`: Chapter 1 (§1.3 Snapshots, Not Differences) & Chapter 10 (§10.2 Git Objects: blob, tree, commit) | `mit-missing-semester`: Lecture 6: Git’s data model — Snapshots, blobs, trees, commits, and content-addressed DAG

#### Tiểu mục 2: Cơ chế của ba vùng làm việc: Working Tree, Staging Area (Index) và .git Repository (`gdt-gom-three-trees-workflow` — mức `core`)

Khi làm việc trong một thư mục dự án đã được khởi tạo bằng `git init` (tạo ra thư mục ẩn `.git`), mỗi tệp được quản lý thông qua sự phối hợp của ba vùng tách biệt: (1) **Thư mục làm việc (Working Tree / Working Directory)** là các tệp mã nguồn thực tế trên ổ đĩa mà người học đang mở và sửa bằng trình soạn thảo; (2) **Vùng chuẩn bị (Staging Area / Index)** là một tệp nhị phân trong `.git/index` đóng vai trò bản nháp định hình chính xác những thay đổi nào sẽ được đưa vào ảnh chụp (`commit`) kế tiếp; và (3) **Kho lưu trữ (`.git` Repository)** là cơ sở dữ liệu chứa vĩnh viễn các đối tượng `commit`, `tree`, `blob` đã được ghi nhận.

Mô hình ba vùng này giải thích rõ vòng đời trạng thái của tệp khi chạy `git status`: một tệp mới tạo chưa từng được Git biết tới ở trạng thái **Untracked**; khi chạy `git add <tệp>`, Git tính mã băm nội dung hiện tại của tệp để tạo đối tượng `blob` và ghi nhận nó vào **Staging Area (Staged)**; khi chạy `git commit`, Git đóng gói đúng những gì đang nằm trong Staging Area thành một đối tượng `tree` và `commit` mới trong Repository. Việc có vùng trung gian Staging Area cho phép lập trình viên tách một buổi làm việc lớn đã sửa 5 tệp thành 2 `commit` độc lập có ý nghĩa logic riêng biệt (chỉ `git add` các tệp hoặc từng cụm dòng thuộc thay đổi thứ nhất rồi `commit`, sau đó mới `add` và `commit` phần còn lại).

> **Nguồn đối chiếu:** `pro-git-2e`: Chapter 1 (§1.3 The Three States) & Chapter 2 (§2.2 Recording Changes to the Repository)

#### Tiểu mục 3: Quy tắc loại trừ tệp sinh tự động bằng .gitignore và nguyên tắc tạo Commit nguyên tử (Atomic Commits) (`gdt-gom-gitignore-atomic-commits` — mức `core`)

Như đã học ở Môn CS-01, quá trình biên dịch và gỡ lỗi sinh ra nhiều tệp nhị phân trung gian (`.o`, `.obj`, `.exe`, `a.out`, thư mục `build/`, `.vscode/`). Nếu đưa các tệp sinh tự động này vào Git, kho lưu trữ sẽ phình to nhanh chóng và mỗi lần biên dịch lại sẽ báo hàng loạt tệp bị thay đổi gây nhiễu loạn lịch sử. Tiểu mục này hướng dẫn cách viết tệp cấu hình **`.gitignore`** với các mẫu ký tự đại diện (glob patterns như `*.o`, `*.out`, `build/`) để yêu cầu Git tự động bỏ qua các tệp sinh tự động, đồng thời lưu ý rằng `.gitignore` chỉ có tác dụng với các tệp chưa được theo dõi (untracked) — nếu lỡ `git add` một tệp nhị phân từ trước thì phải gỡ nó khỏi Index bằng `git rm --cached <tệp>`.

Phần thứ hai trình bày nguyên tắc kỷ luật kỹ thuật khi ghi lịch sử: mỗi `commit` nên là một **đơn vị thay đổi nguyên tử (atomic commit)** — giải quyết trọn vẹn một mục tiêu logic duy nhất và giữ cho dự án ở trạng thái biên dịch được, accompanied bởi một thông điệp commit giải thích rõ *đã thay đổi gì và vì sao cần thay đổi như vậy*. Trước khi `git add` và `git commit`, thói quen chạy `git diff` (xem thay đổi giữa Working Tree và Staging Area) cùng `git diff --staged` (xem chính xác những dòng sắp được đưa vào commit) giúp chặn đứng việc vô tình lưu các đoạn mã thử nghiệm tạm bợ vào lịch sử.

> **Nguồn đối chiếu:** `pro-git-2e`: Chapter 2: §2.2 Ignoring Files (`.gitignore` patterns and `git diff` / `git diff --staged`)

### Chương 2 — Nhánh (Branches), con trỏ HEAD, Hợp nhất (Merge), Tái định gốc (Rebase) và giải quyết xung đột (`gdt-branching-merging`)

Chương này giải thích vì sao hệ thống nhánh của Git lại cực kỳ nhẹ và nhanh: một nhánh không phải là một bản sao toàn bộ thư mục dự án, mà chỉ là một tệp văn bản nhỏ chứa mã băm 40 ký tự trỏ vào một `commit` trên đồ thị DAG, từ đó làm rõ con trỏ `HEAD`, sự khác biệt giữa `fast-forward merge`, `3-way merge` và `rebase`, cùng quy trình xử lý xung đột hợp nhất.

*Nguồn chương:* `pro-git-2e` (Chapter 3: Git Branching (§3.1 Branches in a Nutshell, §3.2 Basic Branching and Merging, §3.6 Rebasing))

#### Tiểu mục 1: Bản chất của Nhánh (Branch) như con trỏ động trên DAG, con trỏ HEAD và trạng thái Detached HEAD (`gdt-bm-branches-head-pointers` — mức `core`)

Trong Git, một **nhánh (branch)** (như `main` hay `feature/login`) thực chất chỉ là một tham chiếu có tên (lưu trong `.git/refs/heads/`) chứa mã băm của một `commit` cụ thể — tức là một nhãn dán trỏ vào đỉnh mới nhất của một chuỗi phát triển. Việc tạo một nhánh mới (`git branch ten_nhanh` hoặc `git switch -c ten_nhanh`) hoàn toàn không sao chép các tệp mã nguồn sang thư mục khác mà chỉ tốn 41 byte để ghi một mã băm mới. Vậy làm sao Git biết hiện tại người dùng đang đứng ở nhánh nào? Git dùng một con trỏ đặc biệt tên là **`HEAD`**: thông thường `HEAD` trỏ vào tên nhánh hiện tại (ví dụ `HEAD -> main`), và khi người dùng tạo một `commit` mới, cả nhánh hiện tại lẫn `HEAD` tự động dịch chuyển tiến lên trỏ vào `commit` vừa tạo.

Khi người dùng chuyển nhánh (`git switch ten_nhanh`), Git thực hiện hai việc: (1) Đổi `HEAD` sang trỏ vào nhánh đích; và (2) Cập nhật các tệp trong Working Tree và Staging Area cho khớp với ảnh chụp `tree` của `commit` mà nhánh đích đang trỏ tới. Tiểu mục cũng giải thích hiện tượng **`Detached HEAD` (HEAD tách rời)**: xảy ra khi người dùng checkout trực tiếp vào một mã băm `commit` cũ thay vì tên nhánh; lúc này `HEAD` trỏ thẳng vào `commit` đó chứ không gắn với nhánh nào, nên nếu tạo thêm `commit` mới rồi chuyển sang nhánh khác mà không gắn nhãn nhánh cho nó, `commit` mới đó sẽ trở thành mồ côi (dangling/unreachable) không có nhánh nào trỏ tới.

> **Nguồn đối chiếu:** `pro-git-2e`: Chapter 3 (§3.1 Branches in a Nutshell — Switching branches, HEAD pointer) & Chapter 10 (§10.3 Git References)

#### Tiểu mục 2: Cơ chế hợp nhất nhánh: Fast-Forward Merge so với Three-Way Merge và tổ tiên chung gần nhất (Merge Base) (`gdt-bm-fast-forward-vs-three-way-merge` — mức `core`)

Khi công việc trên nhánh phụ `feature` đã hoàn tất và cần tích hợp vào nhánh `main` qua lệnh `git merge feature` (đang đứng tại `main`), Git xét cấu trúc hình học của đồ thị DAG giữa hai đỉnh `main` và `feature` để chọn một trong hai cơ chế: (1) **Hợp nhất chuyển tiếp nhanh (Fast-Forward Merge)**: nếu kể từ lúc tách nhánh `feature`, nhánh `main` chưa hề có thêm `commit` mới nào (tức `commit` hiện tại của `main` chính là tổ tiên trực tiếp của `feature`), Git không cần tạo `commit` mới mà chỉ việc trượt con trỏ `main` tiến thẳng lên trùng với `feature`, giữ nguyên lịch sử tuyến tính.

(2) **Hợp nhất ba chiều (Three-Way Merge)**: nếu cả `main` lẫn `feature` đều đã có thêm các `commit` mới rẽ thành hai nhánh phân kỳ trên đồ thị DAG, con trỏ `main` không thể trượt thẳng sang `feature` mà không làm mất các `commit` trên `main`. Khi đó, Git tìm nút **tổ tiên chung gần nhất (common ancestor / merge base)** $B$ của hai đỉnh $M$ (`main`) và $F$ (`feature`), đối chiếu **ba ảnh chụp** $(B, M, F)$ để tự động gộp những thay đổi từ cả hai phía, rồi tạo ra một **`merge commit` mới có hai `commit` cha** là $M$ và $F$. Việc hiểu vai trò của tổ tiên chung $B$ giúp người học thấy vì sao Git biết chính xác bên nào đã sửa dòng nào kể từ khi tách nhánh.

> **Nguồn đối chiếu:** `pro-git-2e`: Chapter 3: §3.2 Basic Branching and Merging (Fast-forward vs Three-way merge and common ancestor)

#### Tiểu mục 3: Nguyên nhân phát sinh xung đột hợp nhất (Merge Conflict), cách giải quyết và sự đánh đổi giữa Merge với Rebase (`gdt-bm-conflicts-and-rebasing` — mức `core`)

Trong phép hợp nhất ba chiều giữa tổ tiên chung $B$ và hai nhánh $M, F$, nếu nhánh $M$ sửa tệp `a.cpp` còn nhánh $F$ sửa tệp `b.cpp` (hoặc sửa hai hàm cách xa nhau trong cùng một tệp), Git tự động gộp cả hai thay đổi. Tuy nhiên, nếu kể từ tổ tiên chung $B$, cả $M$ và $F$ **cùng sửa đổi một vùng dòng trùng nhau** theo hai cách khác nhau, thuật toán không thể tự đoán ý định con người nên tạm dừng quá trình hợp nhất và báo **Xung đột hợp nhất (Merge Conflict)**. Tại vùng xung đột trong tệp, Git chèn các dấu phân cách chuẩn: phần giữa `<<<<<<< HEAD` và `=======` là nội dung của nhánh hiện tại ($M$), còn phần giữa `=======` và `>>>>>>> feature` là nội dung đến từ nhánh đang gộp vào ($F$). Cách giải quyết chuẩn là đọc hiểu logic của cả hai bên, biên tập lại đoạn mã đúng cuối cùng, xóa bỏ hoàn toàn cả ba dòng dấu phân cách `<<<`, `===`, `>>>`, biên dịch và chạy kiểm thử xác nhận chương trình hoạt động đúng, rồi mới `git add` tệp đó để đánh dấu đã giải quyết xong và `git commit` hoàn tất.

Phần cuối tiểu mục đối chiếu `git merge` với **`git rebase` (tái định gốc)**: thay vì giữ nguyên hai nhánh phân kỳ rồi nối lại bằng một `merge commit`, lệnh `rebase` lấy từng `commit` riêng của nhánh `feature`, tính lại thay đổi và **phát lại (replay) thành các `commit` hoàn toàn mới (với mã băm mới)** nối tiếp lên trên đỉnh mới nhất của `main`, tạo ra lịch sử phẳng tuyến tính. Tiểu mục nhấn mạnh **Quy tắc vàng của Rebase**: chỉ được `rebase` các `commit` cục bộ của riêng mình chưa chia sẻ cho ai; tuyệt đối không `rebase` các nhánh công khai mà người khác đã dựa vào để phát triển, vì việc viết lại mã băm lịch sử sẽ làm lệch đồ thị của toàn đội.

> **Nguồn đối chiếu:** `pro-git-2e`: Chapter 3: §3.2 Basic Merge Conflicts & §3.6 Rebasing (The Perils of Rebasing — Golden Rule)

### Chương 3 — Truy vết lịch sử, khôi phục trạng thái an toàn và đồng bộ với kho lưu trữ từ xa (Remotes) (`gdt-history-recovery-remotes`)

Chương này hướng dẫn cách khai thác đồ thị lịch sử của Git để điều tra nguyên nhân lỗi trong mã nguồn (`log --graph`, `diff`, `blame`, tìm kiếm nhị phân `bisect`), cách hoàn tác sai lầm một cách an toàn mà không làm mất mã nguồn (`restore`, `revert`, `reset`, `reflog`), và cơ chế đồng bộ với kho lưu trữ từ xa trên mạng qua các nhánh theo dõi `origin/main` (`fetch`, `pull`, `push`).

*Nguồn chương:* `pro-git-2e` (Chapter 2 (§2.3–2.5 Viewing History, Undoing Things, Working with Remotes), Chapter 3 (§3.5 Remote Branches), & Chapter 7 (§7.7 Reset Demystified, §7.10 Debugging with Git))

#### Tiểu mục 1: Điều tra lịch sử mã nguồn: git log --graph, git show, git blame và tìm kiếm nhị phân commit gây lỗi bằng git bisect (`gdt-hrr-inspecting-history-blame-bisect` — mức `core`)

Lịch sử commit có chất lượng là một công cụ chẩn đoán lỗi vô giá. Tiểu mục này trình bày cách quan sát đồ thị DAG trực tiếp trên terminal bằng `git log --oneline --graph --all`, xem chi tiết bản vá của một commit bất kỳ bằng `git show <commit>`, và so sánh sự khác biệt giữa hai mốc thời gian hoặc hai nhánh bất kỳ bằng `git diff <moc_A> <moc_B>`. Khi phát hiện một dòng mã khả nghi và cần biết dòng đó được viết từ bao giờ, bởi ai và nhằm giải quyết vấn đề gì, lệnh `git blame <tệp>` sẽ gắn từng dòng trong tệp với mã commit cuối cùng đã chạm vào dòng đó, cho phép tra ngược về commit message gốc.

Đặc biệt, khi phát hiện chương trình hiện tại bị lỗi (bad) nhưng biết chắc cách đây 100 commit chương trình vẫn chạy đúng (good), thay vì kiểm tra thủ công từng commit một, công cụ **`git bisect`** áp dụng trực tiếp thuật toán **tìm kiếm nhị phân trên đồ thị DAG** đã học ở Môn CS-03 và CS-05: nó tự động nhảy tới commit nằm chính giữa khoảng nghi vấn để người dùng (hoặc một script kiểm thử tự động) đánh dấu là `good` hay `bad`, qua đó chỉ cần tối đa $\lceil \log_2(100) \rceil = 7$ bước kiểm tra để chỉ đích danh commit đầu tiên đã đưa lỗi vào dự án.

> **Nguồn đối chiếu:** `pro-git-2e`: Chapter 2 (§2.3 Viewing the Commit History) & Chapter 7 (§7.10 Debugging with Git: File Annotation `git blame` and Binary Search `git bisect`)

#### Tiểu mục 2: Phân biệt cơ chế hoàn tác: git restore, git revert, git reset (--soft/--mixed/--hard) và lưới an toàn git reflog (`gdt-hrr-safe-undo-restore-revert-reflog` — mức `core`)

Một trong những nguyên nhân lớn nhất gây mất dữ liệu ở người mới dùng Git là không phân biệt được lệnh hoàn tác nào tác động lên vùng nào trong ba vùng làm việc: (1) **`git restore`** dùng để hủy các thay đổi chưa commit ở Working Tree (`git restore <tệp>`) hoặc đưa tệp từ Staging Area quay lại trạng thái Unstaged (`git restore --staged <tệp>`); lưu ý rằng các dòng mã mới viết trong Working Tree chưa từng được `git add` hay `git commit` nếu bị `git restore` đè lên sẽ mất hẳn vì Git chưa từng tạo đối tượng `blob` cho chúng; (2) **`git revert <commit>`** là cách hoàn tác **an toàn cho lịch sử đã chia sẻ**: nó không xóa commit cũ khỏi đồ thị DAG mà tạo ra một **commit mới** chứa bản vá đảo ngược chính xác các thay đổi của `<commit>` cũ; và (3) **`git reset`** di chuyển trực tiếp con trỏ nhánh hiện tại lùi về một commit khác: `--soft` chỉ lùi con trỏ nhánh (giữ nguyên Staging và Working Tree), `--mixed` (mặc định) lùi con trỏ nhánh và cập nhật lại Staging Area (nhưng giữ nguyên Working Tree), còn `--hard` ghi đè cả Working Tree nên có nguy cơ xóa mất các thay đổi chưa được commit.

Tiểu mục cũng giới thiệu "chiếc phao cứu sinh" của Git là **`git reflog` (Reference Logs)**: ngay cả khi người dùng lỡ chạy `git reset --hard` làm con trỏ nhánh lùi mất vài commit vừa tạo, hoặc xóa nhầm một nhánh vừa làm xong, các đối tượng `commit` đã từng được tạo trong `.git/objects` thực chất **chưa bị xóa ngay** (chúng vẫn tồn tại âm thầm trước khi bộ dọn rác định kỳ chạy sau nhiều tuần). Lệnh `git reflog` ghi lại nhật ký cục bộ mọi vị trí mà con trỏ `HEAD` đã từng đứng, cho phép tìm lại mã băm của commit tưởng như đã mất và khôi phục lại nhánh chỉ trong vài giây.

> **Nguồn đối chiếu:** `pro-git-2e`: Chapter 2 (§2.4 Undoing Things), Chapter 7 (§7.7 Reset Demystified), & Chapter 10 (§10.7 Maintenance and Data Recovery — `git reflog`)

#### Tiểu mục 3: Kho lưu trữ từ xa (Remotes), nhánh theo dõi từ xa (origin/main) và sự khác biệt giữa git fetch, git pull và git push (`gdt-hrr-remotes-fetch-pull-push` — mức `core`)

Git là một hệ thống quản lý phiên bản **phân tán (distributed)**: khi sao chép một dự án từ máy chủ (như GitHub hay GitLab) về máy cá nhân bằng `git clone <url>`, máy cá nhân nhận được toàn bộ cơ sở dữ liệu lịch sử `.git` chứ không chỉ bản chụp mới nhất. Máy chủ từ xa đó được Git lưu dưới một tên định danh mặc định là **`origin`**. Để đồng bộ hóa mà không cần kết nối mạng liên tục, Git duy trì trong máy cục bộ các **nhánh theo dõi từ xa (remote-tracking branches)** có dạng `origin/main`: đây là các con trỏ chỉ đọc (read-only bookmarks) ghi nhớ vị trí lần cuối cùng mà máy cục bộ biết về nhánh `main` trên máy chủ `origin`.

Tách bạch nhánh cục bộ `main` với con trỏ theo dõi `origin/main` giúp người học hiểu rõ ba lệnh mạng: (1) **`git fetch origin`** tải về toàn bộ các đối tượng `commit`/`tree`/`blob` mới từ máy chủ và cập nhật con trỏ `origin/main`, nhưng **hoàn toàn không chạm vào** nhánh `main` hay các tệp đang làm việc của người dùng, cho phép kiểm tra thay đổi từ xa một cách an toàn trước khi gộp; (2) **`git pull`** thực chất là lệnh gộp hai bước liên tiếp: chạy `git fetch` xong rồi lập tức chạy `git merge origin/main` (hoặc `git rebase` nếu dùng `--rebase`) vào nhánh hiện tại; và (3) **`git push origin main`** đẩy các đối tượng mới từ máy cục bộ lên máy chủ và yêu cầu máy chủ tiến con trỏ `main` của nó lên — thao tác này sẽ bị máy chủ từ chối (non-fast-forward rejected) nếu trên máy chủ đã có commit mới của người khác mà máy cục bộ chưa `fetch` và tích hợp về trước.

> **Nguồn đối chiếu:** `pro-git-2e`: Chapter 2 (§2.5 Working with Remotes) & Chapter 3 (§3.5 Remote Branches — `origin/main`, `fetch` vs `pull`, and `push`)

### Chương 4 — Đường ống dữ liệu POSIX (Pipes) và hệ thống biên dịch đa tệp (Multi-file Builds, Make & CMake) (`gdt-shell-build-systems`)

Chương cuối kết nối kỹ năng dòng lệnh với quy trình xây dựng phần mềm thực tế: kết hợp các công cụ nhỏ qua luồng chuẩn `stdin`/`stdout`/`stderr` và đường ống `|` để tra cứu văn bản (`grep`, `find`), tách biệt tệp tiêu đề `.h` với tệp cài đặt `.cpp` tuân thủ quy tắc một định nghĩa (ODR), và tự động hóa việc biên dịch gia tăng theo đồ thị phụ thuộc với `Make` và `CMake`.

*Nguồn chương:* `mit-missing-semester` (Lecture 1 (Streams & Pipes), Lecture 2 (Shell Tools: grep, find), & Lecture 8 (Metaprogramming — Build Systems, Dependencies, and Make)); `learncpp` (Chapter 2: §2.8–2.12 Multi-file programs, header files (`.h`), and header guards (`#ifndef` / `#pragma once`))

#### Tiểu mục 1: Chuyển hướng luồng chuẩn (stdin, stdout, stderr), đường ống (Pipes |) và các công cụ tìm kiếm dòng lệnh (grep, find) (`gdt-sbs-posix-streams-pipes-filters` — mức `core`)

Triết lý thiết kế kinh điển của môi trường Unix/POSIX là: mỗi công cụ dòng lệnh chỉ làm thật tốt một việc đơn giản, nhận đầu vào là các dòng văn bản từ `stdin` và xuất kết quả ra `stdout`, để người dùng có thể ghép nối chúng lại bằng **toán tử đường ống (Pipe `|`)**. Khi viết `lenh_A | lenh_B`, hệ điều hành nối trực tiếp luồng `stdout` của tiến trình `lenh_A` vào luồng `stdin` của tiến trình `lenh_B` thông qua một vùng đệm trong bộ nhớ mà không cần ghi ra tệp tạm trên đĩa. Đồng thời, vì thông báo lỗi được xuất riêng ra kênh `stderr` (số hiệu descriptor `2`), luồng lỗi không bị trộn lẫn vào dữ liệu đi qua đường ống (hoặc có thể chuyển hướng riêng bằng `2> error.log`).

Trên nền tảng đường ống đó, tiểu mục trang bị nhóm công cụ tra cứu thiết yếu khi làm việc với mã nguồn nhiều tệp: tìm kiếm nhanh mọi tệp theo tên hoặc phần mở rộng trong cây thư mục (`find`), tìm kiếm tất cả các dòng trong dự án có chứa tên một hàm, biến hoặc mẫu biểu thức chính quy cơ bản (`grep -rn` hoặc công cụ hiện đại `rg`), đếm số dòng/từ (`wc -l`), sắp xếp và lọc trùng (`sort`, `uniq`). Việc kết hợp đường ống giúp lập trình viên kiểm tra nhanh kết quả thử nghiệm hoặc lọc nhật ký lỗi lớn chỉ bằng một dòng lệnh.

> **Nguồn đối chiếu:** `mit-missing-semester`: Lecture 1 (Connecting programs: `<`, `>`, `>>`, `|`) & Lecture 2 (Shell Tools: `find`, `grep`, `rg`)

#### Tiểu mục 2: Tổ chức chương trình C++ nhiều tệp: Tách biệt tệp tiêu đề (.h/.hpp) và tệp cài đặt (.cpp), Header Guards và Quy tắc một định nghĩa (ODR) (`gdt-sbs-multifile-cpp-headers-guards` — mức `core`)

Khi chương trình lớn dần, việc để toàn bộ mã nguồn trong một tệp `main.cpp` duy nhất khiến thời gian biên dịch lại kéo dài và khó tái sử dụng các mô-đun. Trong C++, một dự án nhiều tệp được tổ chức bằng cách tách **khai báo giao diện (declarations)** — gồm nguyên mẫu hàm (function prototypes), định nghĩa kiểu `struct`/`class` và hằng số — vào các **tệp tiêu đề (header files `.h` / `.hpp`)**, còn phần **định nghĩa cài đặt thân hàm (definitions)** được đặt trong các **tệp mã nguồn (`.cpp`)** tương ứng. Bất kỳ tệp `.cpp` nào cần gọi hàm của mô-đun đó chỉ việc `#include "ten_module.h"` để trình biên dịch biết chữ ký hàm mà kiểm tra kiểu.

Tiểu mục giải thích cơ chế vật lý của chỉ thị tiền xử lý `#include`: nó đơn thuần sao chép nguyên văn toàn bộ nội dung tệp `.h` dán đè vào vị trí `#include` trước khi biên dịch. Do đó, nếu tệp `main.cpp` include cả `a.h` và `b.h`, mà bản thân `b.h` cũng include `a.h`, thì nội dung của `a.h` sẽ bị dán hai lần vào cùng một đơn vị dịch, làm định nghĩa kiểu `struct` bị lặp lại và vi phạm **Quy tắc một định nghĩa (One Definition Rule — ODR)**. Để ngăn chặn lỗi này, mọi tệp tiêu đề bắt buộc phải được bảo vệ bởi **Header Guards** (`#ifndef TEN_MODULE_H` / `#define TEN_MODULE_H` ... `#endif` hoặc chỉ thị `#pragma once`). Đồng thời, người học nắm vững lý do vì sao không được định nghĩa thân hàm thông thường (không phải `inline` hay `template`) hoặc biến toàn cục không hằng trực tiếp trong tệp `.h`: nếu hai tệp `.cpp` cùng include tệp `.h` đó, mỗi tệp `.o` sẽ sinh ra một bản sao ký hiệu giống hệt nhau và bị trình liên kết (linker) báo lỗi `multiple definition` ở pha cuối.

> **Nguồn đối chiếu:** `learncpp`: Chapter 2: §2.7 Forward declarations, §2.8 Programs with multiple code files, §2.11 Header files, and §2.12 Header guards

#### Tiểu mục 3: Đồ thị phụ thuộc biên dịch (Build Dependency Graph), biên dịch gia tăng với Make và cấu hình dự án C++ bằng CMake (`gdt-sbs-dependency-graph-make-cmake` — mức `core`)

Trong một dự án gồm $20$ tệp `.cpp`, nếu người học chỉ sửa đúng $1$ dòng trong tệp `math_utils.cpp`, việc gọi `g++` biên dịch lại từ đầu cả $20$ tệp là sự lãng phí lớn. Quy trình biên dịch chuẩn tách quá trình thành hai bước: (Bước 1) Biên dịch từng tệp `.cpp` độc lập thành tệp mã máy đối tượng `.o` bằng cờ `-c` (`g++ -c math_utils.cpp -o math_utils.o`); và (Bước 2) Liên kết tất cả các tệp `.o` lại thành tệp thực thi cuối cùng (`g++ main.o math_utils.o -o app`). Khi chỉ sửa `math_utils.cpp`, ta chỉ cần dịch lại duy nhất `math_utils.o` rồi liên kết lại.

Để tự động hóa quy trình này mà không phải nhớ tệp nào vừa được sửa, các **hệ thống xây dựng (build systems)** như **`Make`** biểu diễn dự án dưới dạng một **đồ thị có hướng không chu trình (DAG) của các phụ thuộc tệp**: mỗi quy tắc trong `Makefile` có dạng `tep_dich: danh_sach_tep_phu_thuoc` kèm câu lệnh tạo đích; `Make` so sánh dấu thời gian sửa đổi (modification timestamps) trên hệ thống tệp — nếu bất kỳ tệp phụ thuộc nào (như `.cpp` hoặc `.h`) có thời gian mới hơn tệp đích `.o`, `Make` mới chạy lại lệnh dịch cho nhánh đó. Cuối cùng, tiểu mục giới thiệu **`CMake`** (`CMakeLists.txt` với `cmake_minimum_required`, `project`, `set(CMAKE_CXX_STANDARD 20)`, `add_executable`) như một bộ sinh cấu hình build đa nền tảng hiện đại: thay vì viết `Makefile` thủ công phụ thuộc hệ điều hành, lập trình viên khai báo các mục tiêu (targets) và tệp nguồn trong `CMakeLists.txt`, rồi chạy quy trình biên dịch ngoài thư mục nguồn (`cmake -B build && cmake --build build`) để giữ thư mục mã nguồn luôn sạch sẽ.

> **Nguồn đối chiếu:** `mit-missing-semester`: Lecture 8: Metaprogramming — Build systems, dependency graphs, targets, prerequisites, and Make | `learncpp`: Chapter 0 (§0.5 Compiler and Linker) & Chapter 2 (§2.8 Compiling multi-file projects)

---

## CS-07: C++ và mô hình bộ nhớ (`cpp-memory-model`)

- **Thuộc khối:** Khối II — Lập trình và toán nền CS
- **Phân loại:** `core`
- **Điều kiện tiên quyết:**
  - `intro-programming` (*required*): Cần nắm chắc kiểu dữ liệu cơ sở, hàm, phạm vi khối, tham chiếu cơ bản và std::vector/std::string từ Môn CS-04.
  - `program-design-debugging` (*required*): Cần biết đọc khung ngăn xếp lời gọi (Call Stack), sử dụng debugger và viết kiểm thử trước khi làm việc với con trỏ và cấp phát động.

### Tổng quan môn học

Môn học mở cánh cửa đi từ lập trình cú pháp bề mặt xuống tầng cơ chế bộ nhớ thực tế của máy tính thông qua ngôn ngữ C++. Ở Môn CS-04, người học làm việc với các biến cục bộ và `std::vector` như những hộp chứa an toàn; sang môn này, người học giải phẫu những gì thực sự nằm bên dưới: địa chỉ bộ nhớ ảo của từng byte, sự khác biệt bản chất giữa tham chiếu (`T&`) và đối tượng con trỏ (`T*`), hiện tượng bí danh (aliasing) khi nhiều đường dẫn cùng trỏ vào một ô nhớ, và hệ thống kiểm soát tính hằng (`const` correctness) ở mức con trỏ.

Trên nền tảng địa chỉ đó, môn học phân tích ba chế độ thời gian lưu trữ đối tượng (automatic, static, dynamic storage duration), cơ chế vận hành của vùng nhớ ngăn xếp (Stack) so với vùng nhớ tự do (Heap / Free Store), và nguyên nhân vật lý của bốn lỗi bộ nhớ nguy hiểm nhất (dangling pointer, memory leak, double free, buffer overflow). Hai chương cuối xây dựng phương pháp quản lý tài nguyên hiện đại của C++: nguyên lý gắn vòng đời tài nguyên với vòng đời đối tượng (RAII), phân loại giá trị lvalue/rvalue, ngữ nghĩa di chuyển (move semantics), con trỏ thông minh (`std::unique_ptr`, `std::shared_ptr`), khuôn mẫu tổng quát (`template`), sự mất hiệu lực của iterator khi `std::vector` cấp phát lại, và cách dùng công cụ Sanitizer (`ASan`, `UBSan`) để bắt lỗi bộ nhớ tự động.

### Giới hạn học thuật (`boundaries`)

- Phân biệt rạch ròi giữa **quy định của chuẩn ngôn ngữ ISO C++** (về thời gian sống đối tượng, thời điểm lưu trữ, quy tắc lvalue/rvalue và hành vi không xác định — Undefined Behavior) với **cơ chế triển khai cụ thể của trình biên dịch và hệ điều hành (ABI / Platform implementation)** như việc bố trí vùng nhớ Stack tăng/giảm theo địa chỉ hay kích thước con trỏ 64-bit.
- Trọng tâm của phần khuôn mẫu (`template`) ở môn này là viết hàm/lớp tổng quát theo kiểu dữ liệu để hiểu cách `std::vector<T>` và `std::unique_ptr<T>` hoạt động; không sa đà vào lập trình siêu mẫu (template metaprogramming / SFINAE) phức tạp.
- Chưa đi vào đồng bộ hóa bộ nhớ đa luồng (`std::atomic`, memory ordering fences) — nội dung đó thuộc Môn CS-26 (Lập trình đồng thời).

### Nguồn giáo trình của môn học

- **Learn C++ — Comprehensive C++ Programming Tutorials** (`learncpp`, *primary*): Chapter 7 (§7.4–7.11 Storage Duration), Chapter 11 (Function Templates), Chapter 12 (§12.1–12.14 Value Categories, References, and Pointers), Chapter 19 (§19.1–19.5 Dynamic Memory Allocation), Chapter 20 (§20.2 Stack and Heap), and Chapter 22 (§22.1–22.7 Move Semantics and Smart Pointers) — URL: https://www.learncpp.com/
- **Dive Into Systems** (`dive-into-systems`, *primary*): Chapter 2: In-Depth C/C++ Pointers, Memory Allocation, Stack vs Heap, and Valgrind/Sanitizer Debugging — URL: https://diveintosystems.org/book/
- **The Missing Semester of Your CS Education (2020 Edition)** (`mit-missing-semester`, *supplementary*): Lecture 7: Debugging and Profiling — Memory Debuggers and Sanitizers (ASan, UBSan, Valgrind) — URL: https://missing.csail.mit.edu/2020/

### Chương 1 — Địa chỉ ô nhớ, Con trỏ (Pointers), Tham chiếu (References), Const Correctness và Bí danh (Aliasing) (`cppm-addresses-pointers-aliasing`)

Chương này xây dựng mô hình bộ nhớ đánh địa chỉ theo byte và làm rõ cơ chế gián tiếp (indirection): làm thế nào một biến có thể lưu địa chỉ của một đối tượng khác, sự khác biệt cơ chế giữa con trỏ (`T*`), con trỏ rỗng (`nullptr`) với tham chiếu (`T&`), quy tắc `const` với con trỏ, số học con trỏ trên mảng liên tiếp và các hậu quả logic khi hai tên gọi cùng trỏ vào một vùng nhớ (aliasing).

*Nguồn chương:* `learncpp` (Chapter 12: Compound Types: References and Pointers (§12.1–12.14)); `dive-into-systems` (Chapter 2: §2.1–2.3 Pointers and Indirection)

#### Tiểu mục 1: Mô hình bộ nhớ đánh địa chỉ theo byte, toán tử sizeof, căn chỉnh địa chỉ (alignment) và toán tử lấy địa chỉ (&) (`cppm-apa-memory-addresses-layout` — mức `core`)

Ở góc nhìn của một tiến trình đang chạy, bộ nhớ chính (RAM ảo mà hệ điều hành cấp cho tiến trình) là một dãy lớn các ô nhớ 1 byte liền kề nhau, trong đó mỗi byte được gán một con số định danh duy nhất gọi là **địa chỉ bộ nhớ (memory address)**, thường được viết dưới dạng thập lục phân (như `0x7ffd42a1b04c`). Một đối tượng kiểu `char` chiếm $1$ byte tại một địa chỉ, trong khi một đối tượng nhiều byte như `int` (thường $4$ byte) hoặc `double` ($8$ byte) chiếm một dãy các byte liên tiếp nhau, và địa chỉ của cả đối tượng chính là địa chỉ của byte đầu tiên (byte có địa chỉ nhỏ nhất) của nó.

Tiểu mục này giải thích toán tử **`sizeof(T)`** trả về số byte mà kiểu `T` chiếm giữ tại thời điểm biên dịch, cùng khái niệm **căn chỉnh bộ nhớ (memory alignment — `alignof`)**: phần cứng CPU đọc/ghi dữ liệu hiệu quả nhất khi một biến kích thước $k$ byte được đặt tại địa chỉ chia hết cho $k$ (ví dụ biến `int` 4 byte đặt ở địa chỉ chia hết cho $4$). Chính quy tắc căn chỉnh này giải thích vì sao trình biên dịch đôi khi chèn thêm các byte đệm trống (padding bytes) vào giữa các trường của một `struct`, khiến `sizeof(struct)` có thể lớn hơn tổng `sizeof` của từng trường thành viên cộng lại. Khi áp dụng **toán tử lấy địa chỉ một ngôi `&x`** (address-of operator) lên một đối tượng lvalue `x` có kiểu `T`, biểu thức trả về địa chỉ bộ nhớ nơi `x` đang cư trú, có kiểu là `T*`.

> **Nguồn đối chiếu:** `learncpp`: Chapter 4 (§4.3 Object sizes and the sizeof operator) & Chapter 12 (§12.7 Introduction to pointers and address-of operator `&`)

#### Tiểu mục 2: Kiểu con trỏ (T*), toán tử giải tham chiếu (*), con trỏ rỗng (nullptr) và sự khác biệt cơ chế giữa Con trỏ với Tham chiếu (`cppm-apa-pointers-dereference-nullptr` — mức `core`)

Một **con trỏ (pointer)** có kiểu `T*` là một đối tượng biến thực thụ trong bộ nhớ mà giá trị lưu bên trong nó chính là địa chỉ của một đối tượng khác có kiểu `T` (trên kiến trúc 64-bit phổ biến hiện nay, bản thân biến con trỏ `T*` luôn có kích thước cố định 8 byte bất kể `T` là `char` 1 byte hay một `struct` rộng 1000 byte). Khi đã có một con trỏ `p` đang giữ địa chỉ hợp lệ của đối tượng `x`, áp dụng **toán tử giải tham chiếu (dereference operator `*p`)** sẽ đi theo địa chỉ lưu trong `p` để truy cập trực tiếp (đọc hoặc ghi) vào chính đối tượng `x` tại đích; tương tự, toán tử mũi tên `p->thanh_vien` là dạng viết gọn chuẩn của `(*p).thanh_vien`.

Khác với tham chiếu (`T&` — vốn bắt buộc phải được gắn cố định với một đối tượng có thật ngay lúc khởi tạo và không bao giờ đổi sang trỏ đối tượng khác được), biến con trỏ `T*` có hai đặc tính linh hoạt nhưng tiềm ẩn rủi ro: (1) Con trỏ có thể được gán lại (`p = &y`) để đổi sang trỏ tới một đối tượng khác trong quá trình chạy; và (2) Con trỏ có thể ở trạng thái "không trỏ vào đối tượng nào cả", được biểu diễn chuẩn xác trong C++ hiện đại bằng từ khóa **`nullptr`** (thay thế cho macro `NULL` hay số `0` dễ gây nhập nhằng kiểu). Tiểu mục nhấn mạnh quy tắc sống còn: **giải tham chiếu một con trỏ đang bằng `nullptr` hoặc một con trỏ chưa khởi tạo (wild pointer) là Hành vi không xác định (Undefined Behavior — UB)**, thường dẫn tới lỗi phân đoạn bộ nhớ (Segmentation Fault) làm hệ điều hành chấm dứt tiến trình ngay lập tức.

> **Nguồn đối chiếu:** `learncpp`: Chapter 12: §12.7 Introduction to pointers, §12.8 Null pointers (`nullptr`), and Pointers vs References comparison | `dive-into-systems`: Chapter 2: §2.1 Pointer Basics and Null Pointer Dereference

#### Tiểu mục 3: Tính đúng đắn của hằng với con trỏ (const T* vs T* const), hiện tượng Bí danh (Aliasing) và số học con trỏ trên mảng liên tiếp (`cppm-apa-const-pointers-aliasing-arithmetic` — mức `core`)

Khi kết hợp từ khóa `const` với con trỏ, vị trí của `const` so với dấu sao `*` quyết định thành phần nào bị khóa không cho sửa: (1) **Con trỏ tới hằng (`const T* p`)** không cho phép sửa giá trị của đối tượng đích thông qua `*p`, nhưng bản thân biến con trỏ `p` vẫn có thể đổi sang trỏ tới địa chỉ khác; (2) **Con trỏ hằng (`T* const p`)** khóa chặt địa chỉ lưu trong `p` (không thể gán `p = &other`), nhưng vẫn cho phép sửa đối tượng đích qua `*p`; và (3) **`const T* const p`** khóa cả hai. Quy tắc đọc từ phải sang trái giúp người học không bao giờ nhầm lẫn chữ ký hàm nhận con trỏ.

Tiểu mục cũng phân tích sâu hiện tượng **Bí danh (Aliasing)**: tình huống xảy ra khi hai hoặc nhiều tên biến, tham chiếu hoặc con trỏ cùng trỏ tới một vùng nhớ vật lý (hoặc các vùng nhớ chồng lấn nhau). Khi có aliasing, một phép ghi qua con trỏ `*p = 0` sẽ âm thầm làm thay đổi giá trị đọc được từ `*q` hoặc biến `x`, có thể làm hỏng thuật toán nếu hàm giả định hai tham số đầu vào là độc lập (ví dụ hàm nhân ma trận `nhan(A, B, A)` vừa đọc từ `A` vừa ghi đè kết quả vào chính `A`, hoặc phép gán tự thân `x = x`). Cuối cùng, tiểu mục giải thích **số học con trỏ (pointer arithmetic)**: khi `p` trỏ vào một phần tử của mảng liên tiếp các đối tượng kiểu `T`, biểu thức `p + k` không cộng thêm $k$ byte mà tiến địa chỉ lên $k \times \operatorname{sizeof}(T)$ byte để trỏ đúng vào phần tử thứ $k$ tiếp theo, đồng thời chỉ rõ rằng số học con trỏ chỉ hợp lệ trong phạm vi cùng một mảng liên tiếp (kể cả vị trí sát sau phần tử cuối `one-past-the-end`, nhưng không được giải tham chiếu vị trí sát sau đó).

> **Nguồn đối chiếu:** `learncpp`: Chapter 12 (§12.9 Pointers and const) & Chapter 17 (§17.8–17.9 Pointer arithmetic and subscripting)

### Chương 2 — Thời gian lưu trữ (Storage Duration), phân vùng Stack/Heap và bốn lỗi bộ nhớ kinh điển (`cppm-lifetime-stack-heap`)

Chương này làm rõ vòng đời của một đối tượng từ lúc được cấp vùng nhớ, khởi tạo, tồn tại đến lúc bị hủy và thu hồi vùng nhớ, giải thích sự khác biệt cơ chế giữa bộ nhớ tự động trên ngăn xếp (Stack) với bộ nhớ cấp phát động trên vùng nhớ tự do (Heap), và cách nhận diện các lỗi bộ nhớ nghiêm trọng.

*Nguồn chương:* `learncpp` (Chapter 7 (§7.4–7.11 Scope, Duration, and Linkage), Chapter 19 (§19.1–19.3 Dynamic Memory Allocation), & Chapter 20 (§20.2 The Stack and the Heap)); `dive-into-systems` (Chapter 2: §2.4–2.6 Dynamic Memory Allocation, Stack vs Heap, and Memory Bugs)

#### Tiểu mục 1: Ba thời gian lưu trữ chuẩn (Automatic, Static, Dynamic) và cơ chế phân vùng Stack so với Heap (Free Store) (`cppm-lsh-storage-duration-stack-vs-heap` — mức `core`)

Chuẩn ISO C++ phân biệt rạch ròi giữa **Phạm vi tên gọi (Scope)** — một thuộc tính tại thời điểm biên dịch cho biết tên định danh có thể được nhìn thấy ở vùng mã nguồn nào — với **Thời gian lưu trữ (Storage Duration)** — thuộc tính tại thời điểm chạy quyết định khi nào vùng nhớ của đối tượng được tạo ra và thu hồi: (1) **Lưu trữ tự động (Automatic storage duration)**: áp dụng cho các biến cục bộ và tham số hàm; chúng được cấp phát tự động khi luồng thực thi đi vào khối lệnh và bị hủy tự động theo đúng thứ tự ngược lại (LIFO) ngay khi thoát khỏi khối lệnh; (2) **Lưu trữ tĩnh (Static storage duration)**: áp dụng cho biến toàn cục và biến `static`; được cấp phát một lần duy nhất và tồn tại xuyên suốt thời gian chạy của chương trình; và (3) **Lưu trữ động (Dynamic storage duration)**: đối tượng được tạo và hủy theo yêu cầu tường minh tại thời điểm chạy, hoàn toàn tách rời khỏi phạm vi khối nơi nó được tạo.

Trên các hệ điều hành hiện đại, thời gian lưu trữ tự động và lưu trữ động được hiện thực hóa trên hai phân vùng bộ nhớ có đặc tính đối lập nhau: **Ngăn xếp (The Call Stack)** quản lý các biến tự động bằng cách chỉ dịch chuyển một thanh ghi con trỏ ngăn xếp (stack pointer) khi vào/ra hàm nên tốc độ cấp phát gần như tức thời ($O(1)$ rất nhỏ) và vùng nhớ nằm liền kề nhau rất thân thiện với bộ nhớ đệm CPU (cache), nhưng tổng dung lượng Stack bị giới hạn chặt (thường chỉ vài megabyte — đệ quy quá sâu hoặc khai báo mảng cục bộ khổng lồ sẽ gây **Tràn ngăn xếp / Stack Overflow**). Ngược lại, **Vùng nhớ tự do (The Heap / Free Store)** là bể bộ nhớ lớn hàng gigabyte cho phép cấp phát những khối dữ liệu có kích thước chỉ biết lúc chạy hoặc cần sống lâu hơn hàm tạo ra nó, đổi lại chi phí tìm kiếm/quản lý khối trống của bộ cấp phát (allocator) chậm hơn và truy cập gián tiếp qua con trỏ.

> **Nguồn đối chiếu:** `learncpp`: Chapter 20: §20.2 The stack and the heap & Chapter 19: §19.1 Dynamic memory allocation with new and delete | `dive-into-systems`: Chapter 2: §2.4 Dynamic Memory Allocation and Stack vs. Heap Memory Layout

#### Tiểu mục 2: Cơ chế cấp phát động thủ công (new / delete) và vì sao quản lý thủ công dễ thất bại khi có nhiều nhánh thoát (`cppm-lsh-dynamic-allocation-new-delete` — mức `core`)

Để hiểu cách `std::vector`, `std::string` hay các cấu trúc dữ liệu dạng nút (danh sách liên kết, cây nhị phân ở Môn CS-15) xin thêm bộ nhớ từ hệ thống, người học cần nắm cơ chế của cặp toán tử cấp phát động cấp thấp trong C++: biểu thức **`new T(...)`** thực hiện hai bước liên tiếp — xin bộ cấp phát một khối nhớ đủ kích thước trên Heap, sau đó gọi hàm tạo (constructor) để khởi tạo đối tượng kiểu `T` tại đó và trả về con trỏ `T*` giữ địa chỉ khối nhớ; ngược lại, biểu thức **`delete p`** gọi hàm hủy (destructor) của đối tượng tại `*p` rồi trả khối nhớ đó về cho Heap để tái sử dụng (đối với mảng cấp phát bằng `new T[n]`, bắt buộc phải giải phóng bằng `delete[] p`; trộn lẫn `new[]` với `delete` đơn lẻ là hành vi không xác định).

Tiểu mục phân tích vì sao việc bắt lập trình viên tự viết từng cặp `new` và `delete` bằng tay trong mã ứng dụng lại rất mong manh: chỉ cần giữa dòng `new` và dòng `delete` ở cuối hàm có một câu lệnh `return` sớm khi gặp điều kiện đặc biệt, một lệnh `break`, hoặc một ngoại lệ (exception) được ném ra từ hàm con, luồng thực thi sẽ nhảy qua mặt dòng `delete` và làm vùng nhớ đó không bao giờ được thu hồi. Nhận thức về điểm yếu cấu trúc này là động lực trực tiếp dẫn tới nguyên lý RAII ở Chương 3.

> **Nguồn đối chiếu:** `learncpp`: Chapter 19: §19.1 Dynamic memory allocation with new and delete & §19.2 Dynamically allocating arrays

#### Tiểu mục 3: Bốn hiểm họa bộ nhớ kinh điển: Dangling Pointer (Use-After-Free), Memory Leak, Double Free và Buffer Overflow (`cppm-lsh-four-classic-memory-hazards` — mức `core`)

Tiểu mục này giải phẫu cơ chế nguyên nhân và hậu quả của bốn loại lỗi bộ nhớ kinh điển trong C/C++: (1) **Con trỏ treo / Tham chiếu treo (Dangling Pointer / Dangling Reference & Use-After-Free)**: xảy ra khi một con trỏ hoặc tham chiếu vẫn giữ địa chỉ của một đối tượng đã kết thúc thời gian sống — chẳng hạn một hàm trả về địa chỉ hoặc tham chiếu tới biến cục bộ trên Stack (biến này bị hủy ngay khi hàm `return`), hoặc truy cập `*p` sau khi đã gọi `delete p`. Nguy hiểm nhất của lỗi này là vùng nhớ vừa giải phóng có thể chưa bị ghi đè ngay nên chương trình trông như vẫn chạy đúng trong vài bước trước khi vùng nhớ đó được cấp cho biến khác và gây hỏng dữ liệu ngẫu nhiên; (2) **Rò rỉ bộ nhớ (Memory Leak)**: xảy ra khi con trỏ cuối cùng giữ địa chỉ một khối nhớ trên Heap bị gán đè sang địa chỉ khác hoặc ra khỏi phạm vi mà chưa `delete`, khiến khối nhớ đó bị bỏ quên vĩnh viễn cho tới khi tiến trình kết thúc.

(3) **Giải phóng kép (Double Free)**: xảy ra khi hai con trỏ cùng trỏ vào một khối nhớ trên Heap (do sao chép địa chỉ nông — shallow copy) và cả hai đều gọi `delete` lên cùng địa chỉ đó, làm hỏng cấu trúc sổ cái quản lý của bộ cấp phát Heap; và (4) **Tràn vùng đệm (Buffer Overflow / Out-of-bounds Read & Write)**: đọc hoặc ghi vượt quá biên của mảng tĩnh hoặc khối nhớ động, làm ghi đè lên các biến lân cận hoặc thông tin điều khiển trên Stack/Heap — đây đồng thời là lỗ hổng bảo mật nghiêm trọng nhất trong lịch sử phần mềm hệ thống.

> **Nguồn đối chiếu:** `learncpp`: Chapter 12 (§12.12 Return by reference and dangling references) & Chapter 19 (§19.1 Dangling pointers and memory leaks) | `dive-into-systems`: Chapter 2: §3.3 Debugging Memory with Valgrind (Use-after-free, leaks, double free, out-of-bounds)

### Chương 3 — Nguyên lý RAII, phân loại giá trị (lvalue/rvalue), Ngữ nghĩa di chuyển (Move Semantics) và Con trỏ thông minh (`cppm-raii-ownership-move`)

Chương này trình bày giải pháp căn cơ của C++ hiện đại để vừa giữ được hiệu năng điều khiển bộ nhớ trực tiếp vừa loại bỏ lỗi quên giải phóng tài nguyên: gói tài nguyên vào đối tượng có thời gian sống tự động (RAII), chuyển giao tài nguyên bằng move semantics và thể hiện rõ quyền sở hữu trong hệ thống kiểu bằng `std::unique_ptr` / `std::shared_ptr`.

*Nguồn chương:* `learncpp` (Chapter 12 (§12.2 Value categories: lvalues and rvalues) & Chapter 22 (§22.1–22.7 Move Semantics and Smart Pointers))

#### Tiểu mục 1: Nguyên lý RAII (Resource Acquisition Is Initialization) và cơ chế thu hồi tài nguyên tất định qua Hàm hủy (Destructor) (`cppm-rom-raii-deterministic-destruction` — mức `core`)

Ý tưởng trung tâm của **RAII (Resource Acquisition Is Initialization — Gắn việc chiếm giữ tài nguyên với việc khởi tạo đối tượng)** dựa trên một bảo đảm tuyệt đối của chuẩn C++: mọi đối tượng có **thời gian lưu trữ tự động (trên Stack)** đều chắc chắn được gọi **hàm hủy (destructor)** ngay khi luồng thực thi rời khỏi phạm vi khối chứa nó — bất kể hàm kết thúc ở cuối khối, thoát sớm qua `return` ở giữa hàm, hay bị tháo ngăn xếp (stack unwinding) do ngoại lệ. Do đó, thay vì cầm trực tiếp con trỏ thô tới bộ nhớ Heap (hoặc tệp đang mở, ổ cắm mạng, khóa mutex), ta bọc con trỏ đó làm thành viên bên trong một đối tượng quản lý nằm trên Stack: hàm tạo (constructor) xin cấp phát tài nguyên, còn hàm hủy (destructor) tự động thực hiện `delete` hoặc đóng tệp.

Chính nguyên lý RAII giải thích vì sao ngay từ Môn CS-04 người học có thể dùng `std::vector<int>` và `std::string` để chứa hàng triệu phần tử trên Heap mà không hề phải viết một dòng `delete` nào: bản thân biến `v` là một đối tượng nhỏ trên Stack (gồm con trỏ trỏ vào mảng trên Heap, số phần tử hiện có `size` và dung lượng đã cấp `capacity`), và khi `v` ra khỏi hàm, hàm hủy `~vector()` tự động trả toàn bộ mảng trên Heap về cho hệ thống.

> **Nguồn đối chiếu:** `learncpp`: Chapter 15 (§15.4 Introduction to destructors) & Chapter 22 (§22.1 Introduction to smart pointers and move semantics — RAII)

#### Tiểu mục 2: Phân loại biểu thức lvalue / rvalue, tham chiếu rvalue (T&&) và cơ chế Ngữ nghĩa di chuyển (Move Semantics vs Copy) (`cppm-rom-lvalue-rvalue-move-semantics` — mức `core`)

Phân loại giá trị (value category) mô tả cách một biểu thức tham gia thao tác với đối tượng, không phải thời gian sống của đối tượng đó. Tiểu mục phân biệt lvalue (biểu thức xác định danh tính đối tượng, như tên biến v), prvalue (tính một giá trị hoặc khởi tạo đối tượng kết quả, như 42) và xvalue (xác định đối tượng có tài nguyên có thể được tái sử dụng). Rvalue bao gồm prvalue và xvalue. Biểu thức std::move(v) là xvalue chỉ tới chính v: phép ép kiểu này không tạo bản sao, không tự chuyển tài nguyên và không hủy v; v vẫn sống tới cuối phạm vi của nó. Người học đối chiếu phân loại biểu thức với kiểu dữ liệu và lifetime để tránh coi mọi rvalue là đối tượng tạm sắp bị hủy.

Ngữ nghĩa di chuyển được thực hiện bởi move constructor hoặc move assignment được chọn qua overload resolution; std::move chỉ tạo điều kiện cho việc chọn thao tác đó. Với lớp sở hữu một vùng đệm động, một cách cài đặt là chuyển quyền sở hữu con trỏ rồi đặt nguồn vào trạng thái hợp lệ không còn sở hữu vùng đệm. Trường hợp này có thể tránh sao chép từng phần tử, nhưng không phải mọi move đều có chi phí O(1), cũng không phải mọi nguồn sau move đều rỗng hoặc null. Với kiểu thư viện chuẩn, bảo đảm chung khi không có quy định riêng là trạng thái hợp lệ nhưng không xác định cụ thể; chỉ gọi thao tác mà tiền điều kiện còn được đáp ứng. Sao chép vector có chi phí theo số phần tử; phép gán có thể tái sử dụng dung lượng sẵn có thay vì luôn cấp phát mới. Tiểu mục giới hạn ở nguyên lý sở hữu, trường hợp buffer điển hình và cách tra hợp đồng của từng kiểu.

> **Nguồn đối chiếu:** `learncpp`: Chapter 12 (§12.2 Value categories: lvalues and rvalues) & Chapter 22 (§22.2 R-value references, §22.3 Move constructors and move assignment, §22.4 std::move)

#### Tiểu mục 3: Mô hình quyền sở hữu bộ nhớ với std::unique_ptr, std::shared_ptr, std::weak_ptr và Quy tắc Số Không / Số Năm (Rule of Zero / Five) (`cppm-rom-smart-pointers-ownership-rules` — mức `core`)

Để biểu diễn rõ ràng "ai chịu trách nhiệm giải phóng đối tượng trên Heap" ngay trong chữ ký kiểu dữ liệu, thư viện chuẩn `<memory>` cung cấp các **con trỏ thông minh (smart pointers)** dựa trên RAII: (1) **`std::unique_ptr<T>` (tạo bằng `std::make_unique<T>(...)`)** thể hiện **quyền sở hữu độc quyền (exclusive ownership)**: tại mọi thời điểm chỉ có duy nhất một `unique_ptr` sở hữu đối tượng đích; nó cấm hoàn toàn phép sao chép (copy bị xóa) và chỉ cho phép chuyển giao quyền sở hữu bằng phép di chuyển (`std::move`), đồng thời có kích thước và tốc độ tương đương một con trỏ thô (`zero-overhead abstraction`); (2) **`std::shared_ptr<T>` (tạo bằng `std::make_shared<T>(...)`)** thể hiện **quyền sở hữu chia sẻ (shared ownership)** thông qua một khối điều khiển đếm số lượng tham chiếu (reference counting): đối tượng đích chỉ bị hủy khi `shared_ptr` cuối cùng trỏ tới nó bị hủy; và (3) **`std::weak_ptr<T>`** là con trỏ quan sát không tăng bộ đếm sở hữu, dùng để phá vỡ **chu trình tham chiếu vòng (reference cycle)** giữa hai `shared_ptr` trỏ lẫn nhau gây rò rỉ bộ nhớ. Những hàm chỉ mượn đối tượng để đọc/ghi tạm thời mà không can dự vào quyền sở hữu thì vẫn nhận tham chiếu `T&` / `const T&` hoặc con trỏ thô `T*` như bình thường.

Từ sự phân biệt giữa lớp ứng dụng và lớp quản lý tài nguyên, tiểu mục đúc kết **Quy tắc Số Không (Rule of Zero)** và **Quy tắc Số Năm (Rule of Five)**: các lớp nghiệp vụ thông thường chỉ nên ghép từ các thành viên đã tự quản lý bộ nhớ (`std::string`, `std::vector`, `std::unique_ptr`) để **không phải tự viết** bất kỳ hàm hủy hay hàm sao chép/di chuyển nào (Rule of Zero); ngược lại, nếu viết một lớp cấu trúc dữ liệu cấp thấp trực tiếp nắm giữ tài nguyên thô và phải tự định nghĩa một trong năm hàm đặc biệt (Destructor, Copy Constructor, Copy Assignment, Move Constructor, Move Assignment), thì phải định nghĩa hoặc chỉ định rõ cả năm hàm đó (Rule of Five) để tránh lỗi sao chép nông và giải phóng kép.

> **Nguồn đối chiếu:** `learncpp`: Chapter 22: §22.5 std::unique_ptr, §22.6 std::shared_ptr, and §22.7 Circular dependency issues with std::shared_ptr, and std::weak_ptr

### Chương 4 — Khuôn mẫu tổng quát (Templates), mất hiệu lực Iterator của Container và công cụ Sanitizer (ASan/UBSan) (`cppm-templates-containers-sanitizers`)

Chương cuối hoàn thiện nền tảng C++ cốt lõi trước khi bước sang Cấu trúc dữ liệu (`CS-15`): cách trình biên dịch sinh mã cho các hàm và lớp khuôn mẫu `template<typename T>`, điều gì xảy ra trong bộ nhớ khi `std::vector` đầy và phải cấp phát lại, sự khác biệt giữa chuẩn ngôn ngữ với ABI, và cách bật AddressSanitizer / UndefinedBehaviorSanitizer để bắt lỗi bộ nhớ tức thì.

*Nguồn chương:* `learncpp` (Chapter 11 (§11.6–11.8 Function Templates), Chapter 16 (§16.9–16.10 std::vector capacity and reallocation), & Chapter 26 (§26.1 Template classes)); `mit-missing-semester` (Lecture 7: Debugging and Profiling — Sanitizers (`-fsanitize=address,undefined`) and Valgrind)

#### Tiểu mục 1: Khuôn mẫu hàm và lớp (Function & Class Templates), cơ chế khởi tạo khuôn mẫu (Template Instantiation) và lý do đặt trong Header (`cppm-tcs-function-class-templates` — mức `core`)

Khi viết một thuật toán hoán đổi hai giá trị `swap(a, b)` hoặc một cấu trúc mảng động, logic các bước hoàn toàn giống nhau cho dù phần tử là `int`, `double` hay `std::string`. Thay vì sao chép mã nguồn cho từng kiểu, C++ cung cấp **Khuôn mẫu (Templates)** với cú pháp `template <typename T>`. Tiểu mục này làm rõ rằng bản thân một khuôn mẫu **chưa phải là mã máy thực thi**, mà là một bản thiết kế (blueprint): chỉ khi trình biên dịch gặp lời gọi cụ thể như `maxVal<int>(3, 5)` hoặc khai báo `MyVector<double>`, nó mới thực hiện **khởi tạo khuôn mẫu (template instantiation)** — tự động thay thế `T` bằng kiểu cụ thể để sinh ra một hàm hoặc lớp thực sự rồi kiểm tra kiểu trên bản sinh ra đó.

Hiểu cơ chế khởi tạo khuôn mẫu tại thời điểm biên dịch giải thích trực tiếp một quy tắc kỹ thuật mà người mới hay vấp phải khi tách tệp: khác với hàm thông thường (khai báo ở `.h`, định nghĩa ở `.cpp`), **toàn bộ định nghĩa của khuôn mẫu hàm và lớp thông thường bắt buộc phải nằm trọn trong tệp tiêu đề (`.h` / `.hpp`)**. Lý do là khi trình biên dịch dịch một tệp `main.cpp` có dùng `MyVector<int>`, nó phải nhìn thấy ngay toàn bộ thân hàm của `MyVector<T>` tại chỗ để sinh mã cho kiểu `int`; nếu giấu thân hàm trong `my_vector.cpp`, đơn vị dịch `main.cpp` không thể tự sinh mã và trình liên kết sẽ báo lỗi `undefined reference`.

> **Nguồn đối chiếu:** `learncpp`: Chapter 11 (§11.6 Function templates, §11.7 Function template instantiation) & Chapter 26 (§26.1 Template classes and header organization)

#### Tiểu mục 2: Bố cục bộ nhớ của std::vector (size vs capacity), cơ chế cấp phát lại (reallocation) và lỗi mất hiệu lực con trỏ/iterator (`cppm-tcs-vector-reallocation-iterator-invalidation` — mức `core`)

Một đối tượng `std::vector<T>` duy trì một mảng liên tiếp trên Heap thông qua hai đại lượng tách biệt: **`size()`** là số phần tử thực tế đang chứa, còn **`capacity()`** là tổng số ô nhớ phần tử mà khối Heap hiện tại có thể chứa trước khi đầy (luôn có $\text{size} \le \text{capacity}$). Chừng nào $\text{size} < \text{capacity}$, thao tác `v.push_back(x)` chỉ đặt phần tử mới vào ô trống kế tiếp trong khối Heap sẵn có với chi phí hằng số $O(1)$. Nhưng ngay tại thời điểm $\text{size} == \text{capacity}$, khối nhớ cũ đã hết chỗ; để đảm bảo các phần tử vẫn nằm liên tiếp trong bộ nhớ, `std::vector` bắt buộc phải thực hiện **cấp phát lại (reallocation)**: xin một khối nhớ **hoàn toàn mới** ở địa chỉ khác trên Heap có dung lượng lớn gấp hệ số nhân (thường gấp $2$ lần hoặc $1.5$ lần), di chuyển/sao chép toàn bộ các phần tử từ khối cũ sang khối mới, rồi **giải phóng (`delete`) khối nhớ cũ**.

Cơ chế cấp phát lại này dẫn tới một cạm bẫy cực kỳ quan trọng gọi là **Mất hiệu lực con trỏ, tham chiếu và bộ lặp (Pointer / Reference / Iterator Invalidation)**: nếu trước khi gọi `v.push_back(...)`, chương trình đang giữ một con trỏ `int* p = &v[0]`, một tham chiếu `int& ref = v[0]` hoặc một `iterator` trỏ vào phần tử của `v`, thì ngay sau cú `push_back` gây vượt `capacity`, khối nhớ cũ đã bị giải phóng và mọi con trỏ/tham chiếu/`iterator` cũ lập tức biến thành **con trỏ treo (dangling)** trỏ vào vùng nhớ đã chết. Nắm vững quy tắc này giúp lập trình viên không bao giờ vừa lưu địa chỉ phần tử của `vector` vừa thêm phần tử mới vào nó (hoặc phải gọi `v.reserve(N)` cấp đủ dung lượng trước).

> **Nguồn đối chiếu:** `learncpp`: Chapter 16: §16.9–16.10 std::vector length vs capacity, reallocation, and reference/iterator invalidation

#### Tiểu mục 3: Phân biệt Chuẩn ngôn ngữ ISO C++ với ABI và tự động phát hiện lỗi bộ nhớ bằng AddressSanitizer (ASan) / UBSan (`cppm-tcs-iso-standard-abi-sanitizers` — mức `core`)

Để suy luận chính xác về hành vi chương trình C++, người học cần phân biệt hai tầng quy tắc: **Chuẩn ngôn ngữ ISO C++ (Language Standard)** định nghĩa máy trừu tượng, quy tắc phạm vi, thời gian sống và phân loại các hành vi thành xác định (well-defined), phụ thuộc cài đặt (implementation-defined như `sizeof(int)`), không chỉ định thứ tự (unspecified như thứ tự tính các đối số trong một số biểu thức) và **Hành vi không xác định (Undefined Behavior — UB)**; trong khi đó, **Giao diện nhị phân ứng dụng (Application Binary Interface — ABI)** (như Itanium C++ ABI trên Linux/macOS hay MSVC ABI trên Windows) là quy ước cụ thể của trình biên dịch và hệ điều hành về cách truyền tham số qua thanh ghi CPU, cách mã hóa tên hàm (name mangling) và cách sắp xếp byte trong đối tượng. Trình biên dịch có quyền tối ưu hóa mã máy dựa trên giả định rằng chương trình không bao giờ rơi vào UB; vì vậy một chương trình có UB dù hôm nay chạy "trông có vẻ đúng" trên máy này vẫn có thể sập hoặc cho kết quả sai hoàn toàn khi bật cờ tối ưu hóa `-O2` hoặc đổi phiên bản trình biên dịch.

Vì các lỗi UB và lỗi bộ nhớ (như đọc vượt biên mảng 1 phần tử hoặc dùng vùng nhớ vừa `delete`) đôi khi không làm chương trình sập ngay lập tức, việc chỉ chạy thử thông thường không đủ để phát hiện chúng. Tiểu mục này trang bị cách sử dụng các công cụ kiểm chứng động hiện đại tích hợp sẵn trong GCC và Clang là **AddressSanitizer (`ASan`)** và **UndefinedBehaviorSanitizer (`UBSan`)** thông qua cờ biên dịch `-fsanitize=address,undefined -g -O1`: trình biên dịch sẽ tự động chèn các vùng đệm canh gác (redzones) và mã kiểm tra quanh mọi thao tác truy cập bộ nhớ/số học, giúp chương trình dừng lại ngay tại dòng lệnh vi phạm đầu tiên và in ra báo cáo chi tiết (kèm call stack vị trí cấp phát, vị trí giải phóng và vị trí truy cập trái phép) cho các lỗi tràn vùng đệm Stack/Heap, use-after-free, use-after-return, double free, memory leak và tràn số nguyên có dấu.

> **Nguồn đối chiếu:** `mit-missing-semester`: Lecture 7: Debugging and Profiling — Dynamic analysis with AddressSanitizer, UndefinedBehaviorSanitizer, and Valgrind | `dive-into-systems`: Chapter 2: §3.3 Debugging Memory with Valgrind with Valgrind and Sanitizers

---

## CS-08: Lập trình hướng đối tượng (`object-oriented-programming`)

- **Thuộc khối:** Khối II — Lập trình và toán nền CS
- **Phân loại:** `core`
- **Điều kiện tiên quyết:**
  - `cpp-memory-model` (*required*): Cần nắm vững thời gian sống đối tượng, con trỏ/tham chiếu, nguyên lý RAII, ngữ nghĩa sao chép/di chuyển và con trỏ thông minh trước khi thiết kế lớp và cây phân cấp đa hình.

### Tổng quan môn học

Môn học nghiên cứu lập trình hướng đối tượng (Object-Oriented Programming — OOP) không phải như một nghi thức viết `class`, `get`/`set` cho mọi thứ, mà như một phương pháp kỹ thuật nhằm **bảo vệ bất biến dữ liệu (class invariants)** và **tách biệt mã nguồn gọi khỏi chi tiết biểu diễn bên trong**. Nội dung bắt đầu từ sự khác biệt giữa một bản ghi dữ liệu trần (`struct` với các trường độc lập) và một lớp (`class`) mà các trường thành viên bị ràng buộc bởi một bất biến chặt chẽ, cơ chế kiểm soát truy cập (`public`/`private`), vòng đời khởi tạo qua danh sách khởi tạo thành viên (member initializer list), hàm thành viên hằng (`const` member functions) và con trỏ ẩn `this`.

Tiếp theo, môn học làm rõ cách một kiểu dữ liệu tự định nghĩa hành xử tự nhiên như các kiểu cơ sở thông qua ngữ nghĩa sao chép sâu/nông, nạp chồng toán tử (operator overloading) và sự phân biệt thiết kế giữa quan hệ hợp thành (`composition` — "có một / được ghép từ") với kế thừa (`inheritance` — "là một"). Hai chương cuối đi sâu vào cơ chế đa hình thời gian chạy (runtime polymorphism) qua hàm ảo (`virtual`), giao diện thuần ảo (abstract interfaces), điều kiện cần `virtual destructor` khi hủy đa hình, hiện tượng cắt lát đối tượng (`object slicing`), mô hình triển khai bảng hàm ảo (`vtable`/`vptr`) điển hình của ABI so với chuẩn ISO C++, cùng các nguyên lý thiết kế giảm kết dính, ba mẫu thiết kế cốt lõi (`Strategy`, `Factory`, `Observer`) và ranh giới khi nào không nên lạm dụng OOP.

### Giới hạn học thuật (`boundaries`)

- Phân biệt rõ quy định ngữ nghĩa của chuẩn ISO C++ về lời gọi hàm ảo (`virtual` dispatch) với cơ chế triển khai phổ biến bằng con trỏ `vptr` và bảng `vtable` trong các ABI thực tế (như Itanium C++ ABI).
- Không áp đặt giáo điều "mọi thứ đều phải là đối tượng và cây kế thừa sâu"; chỉ rõ những bài toán mà dữ liệu phẳng (`struct`), hàm thuần túy và đa hình tĩnh (`template`) đơn giản và hiệu quả hơn kế thừa đa hình động.

### Nguồn giáo trình của môn học

- **Learn C++ — Comprehensive C++ Programming Tutorials** (`learncpp`, *primary*): Chapter 14 (§14.1–14.16 Introduction to Classes), Chapter 15 (§15.1–15.9 More on Classes), Chapter 21 (§21.1–21.14 Operator Overloading), Chapter 23 (§23.1–23.3 Object Relationships / Composition), Chapter 24 (§24.1–24.9 Inheritance), and Chapter 25 (§25.1–25.11 Virtual Functions and Polymorphism) — URL: https://www.learncpp.com/
- **Software Engineering at Google** (`swe-at-google`, *supplementary*): Chapters 8–10 (Style Guides, Code Review, Documentation) & Design for Maintainability / Preferring Composition over Inheritance — URL: https://abseil.io/resources/swe-book/html/toc.html
- **Composing Programs** (`composing-programs`, *supplementary*): Chapter 2: §2.5 Object-Oriented Programming & §2.7 Object Abstraction — URL: https://composingprograms.com/pages/

### Chương 1 — Trừu tượng hóa dữ liệu, Đóng gói (Encapsulation) và Bảo vệ bất biến của lớp (Class Invariants) (`oop-classes-invariants`)

Chương mở đầu giải thích lý do tồn tại của `class`: khi nào ta nên giữ nguyên một `struct` dữ liệu công khai, khi nào ta phải đóng gói các trường dữ liệu vào vùng `private` để bảo vệ một bất biến (class invariant), cơ chế chính xác mà C++ khởi tạo từng thành viên của một đối tượng qua danh sách khởi tạo, và vai trò của con trỏ ẩn `this` cùng hàm thành viên hằng `const`.

*Nguồn chương:* `learncpp` (Chapter 14 (§14.1–14.16 Classes, Member Functions, Access Specifiers, Constructors) & Chapter 15 (§15.1–15.5 The hidden `this` pointer, Destructors))

#### Tiểu mục 1: Khái niệm Bất biến của lớp (Class Invariant), cơ chế Đóng gói (Encapsulation) và tiêu chuẩn chọn struct hay class (`oop-ci-invariants-encapsulation-struct-vs-class` — mức `core`)

Ở mức cú pháp thuần túy của C++, từ khóa `struct` và `class` chỉ khác nhau ở mức truy cập mặc định (`public` cho `struct`, `private` cho `class`). Tuy nhiên, về mặt thiết kế phần mềm, sự khác biệt nằm ở **Bất biến của lớp (Class Invariant)**: một điều kiện ràng buộc giữa các biến thành viên mà luôn phải giữ đúng tại mọi thời điểm quan sát được từ bên ngoài lớp. Nếu một điểm tọa độ 2D `Point { double x; double y; }` cho phép `x` và `y` thay đổi hoàn toàn độc lập sang bất kỳ số thực nào mà không bao giờ tạo ra trạng thái vô lý, nó không có bất biến phức tạp và nên được thiết kế như một `struct` có các trường `public`.

Ngược lại, xét kiểu phân số `Fraction` (cần bất biến mẫu số `den > 0` và tối giản), kiểu ngày tháng `Date` (không thể có ngày 31 tháng 2), hoặc lớp mảng động `Vector` (bắt buộc `size <= capacity` và con trỏ `data` khớp dung lượng): nếu cho phép mã bên ngoài tự ý gán `v.size = 1000` mà không cấp phát lại `v.data`, bất biến lập tức bị phá vỡ và dẫn tới lỗi bộ nhớ. **Đóng gói (Encapsulation)** giải quyết bài toán này bằng cách đặt các biến thành viên vào vùng `private` và chỉ cung cấp các hàm thành viên `public` có kiểm tra và duy trì bất biến: hàm tạo (constructor) thiết lập bất biến lúc đối tượng ra đời, mọi hàm thành viên giả định bất biến đang đúng khi bắt đầu và cam kết khôi phục bất biến trước khi trả về. Tiểu mục cũng chỉ ra ngộ nhận phổ biến: việc đặt biến `private` rồi lại viết cặp hàm `getX()` / `setX(val)` cho phép gán bất kỳ giá trị nào mà không kiểm tra thực chất không bảo vệ được bất biến nào cả.

> **Nguồn đối chiếu:** `learncpp`: Chapter 14: §14.2 Introduction to classes, §14.5 Public and private members and access specifiers, & §14.6 Access functions and encapsulation (Class invariants)

#### Tiểu mục 2: Hàm tạo (Constructors), Danh sách khởi tạo thành viên (Member Initializer List), thứ tự khởi tạo thực tế và từ khóa explicit (`oop-ci-constructors-initializer-lists-order` — mức `core`)

Khi một đối tượng của lớp được tạo ra, C++ đảm bảo rằng tất cả các biến thành viên của nó phải được khởi tạo trước khi dòng lệnh đầu tiên bên trong thân cặp ngoặc nhọn `{ ... }` của **hàm tạo (constructor)** bắt đầu chạy. Do đó, nếu lập trình viên viết `ten_thanh_vien = gia_tri;` bên trong thân hàm tạo, đối tượng thành viên đó thực chất bị khởi tạo mặc định trước rồi mới bị gán đè lại (vừa tốn chi phí hai lần, vừa bị lỗi biên dịch nếu thành viên đó là hằng `const`, là tham chiếu `T&`, hoặc thuộc một lớp không có hàm tạo mặc định). Cú pháp chuẩn xác là sử dụng **Danh sách khởi tạo thành viên (Member Initializer List)** ngay sau dấu hai chấm `: thanh_vien_1{...}, thanh_vien_2{...}` để khởi tạo trực tiếp từng thành viên.

Một quy tắc cơ chế cực kỳ quan trọng dễ gây lỗi subtle (tinh vi) là: **các biến thành viên của lớp luôn được khởi tạo theo đúng thứ tự chúng được khai báo trong định nghĩa `class`, chứ hoàn toàn KHÔNG theo thứ tự viết trong danh sách khởi tạo của constructor**. Nếu trong `class` khai báo `int m_a;` trước `int m_b;`, nhưng trong constructor lại viết `: m_b{x}, m_a{m_b + 1}`, thì `m_a` sẽ được khởi tạo trước bằng giá trị rác chưa khởi tạo của `m_b` (gây Undefined Behavior). Cuối cùng, tiểu mục giải thích cách dùng từ khóa **`explicit`** trước các constructor nhận một đối số để ngăn trình biên dịch tự ý chuyển đổi kiểu ngầm định ngoài ý muốn.

> **Nguồn đối chiếu:** `learncpp`: Chapter 14: §14.9 Introduction to constructors, §14.10 Constructor member initializer lists (initialization order rule), and §14.16 Converting constructors and the explicit keyword

#### Tiểu mục 3: Con trỏ ẩn this, hàm thành viên hằng (const member functions) và thành viên tĩnh của lớp (static members) (`oop-ci-this-const-static-members` — mức `core`)

Khi có 10 đối tượng `Student s1, s2, ..., s10` cùng gọi hàm thành viên `s1.gpa()`, tất cả chúng đều dùng chung một đoạn mã máy duy nhất của hàm `Student::gpa()`; vậy làm sao hàm đó biết nó đang đọc điểm của `s1` chứ không phải `s2`? Tiểu mục này giải thích cơ chế **con trỏ ẩn `this`**: khi biên dịch, trình biên dịch ngầm chuyển lời gọi `s1.gpa()` thành `Student::gpa(&s1)`, truyền địa chỉ của đối tượng gọi vào một tham số con trỏ ẩn tên là `this`. Mọi truy cập biến thành viên `m_score` bên trong hàm thực chất là `this->m_score`.

Cơ chế con trỏ `this` làm sáng tỏ ngay ý nghĩa của **hàm thành viên hằng (`const` member function)** có từ khóa `const` đặt ở cuối chữ ký hàm (ví dụ `double gpa() const`): từ khóa `const` này biến con trỏ ẩn `this` từ kiểu `Student* const` thành **`const Student* const`**, nhờ đó trình biên dịch cấm hàm sửa đổi bất kỳ biến thành viên thông thường nào và cho phép gọi hàm đó trên các đối tượng hằng hoặc tham chiếu hằng (`const Student&`). Phần cuối phân biệt thành viên đối tượng thông thường với **thành viên tĩnh (`static` data members và `static` member functions)**: thành viên `static` thuộc về toàn bộ lớp chứ không nằm trong từng đối tượng riêng lẻ, do đó hàm thành viên `static` không có con trỏ `this`.

> **Nguồn đối chiếu:** `learncpp`: Chapter 14 (§14.4 Const class objects and const member functions) & Chapter 15 (§15.1 The hidden `this` pointer, §15.6–15.7 Static member variables and functions)

### Chương 2 — Ngữ nghĩa sao chép (Shallow vs Deep Copy), Nạp chồng toán tử và Hợp thành đối tượng (Composition) (`oop-copy-operators-composition`)

Chương này nghiên cứu cách các đối tượng tương tác và kết hợp với nhau: điều gì xảy ra trong bộ nhớ khi sao chép nông so với sao chép sâu một đối tượng quản lý tài nguyên, cách xử lý tự gán và định nghĩa các phép toán tự nhiên (`==`, `<`, `+`, `[]`, `<<`) cho lớp mà không làm biến dạng ngữ nghĩa, và cách xây dựng các hệ thống phức hợp bằng quan hệ hợp thành (`composition` / `has-a`).

*Nguồn chương:* `learncpp` (Chapter 14 (§14.14 Copy constructors), Chapter 21 (§21.1–21.14 Operator Overloading, Deep vs Shallow Copy), & Chapter 23 (§23.1–23.3 Object Relationships: Composition and Aggregation))

#### Tiểu mục 1: Sao chép nông (Shallow Copy) so với Sao chép sâu (Deep Copy), toán tử gán sao chép và mẫu Copy-and-Swap (`oop-coc-shallow-vs-deep-copy-assignment` — mức `core`)

Mặc định, nếu lập trình viên không tự viết hàm tạo sao chép (copy constructor `T(const T&)`) và toán tử gán sao chép (copy assignment `T& operator=(const T&)`), trình biên dịch sẽ tự sinh phiên bản mặc định thực hiện **sao chép từng thành viên (memberwise / shallow copy)**. Đối với các lớp chỉ chứa kiểu cơ sở hoặc các thành viên đã tuân thủ RAII (`std::vector`, `std::string`), sao chép mặc định hoạt động hoàn hảo. Nhưng đối với một lớp cấu trúc dữ liệu cấp thấp trực tiếp giữ một con trỏ thô `T* m_data` trỏ ra Heap, sao chép nông chỉ chép nguyên xi địa chỉ trong `m_data`, khiến hai đối tượng `a` và `b` cùng trỏ chung vào một mảng trên Heap (aliasing ngoài ý muốn): sửa `a` làm hỏng `b`, và khi cả hai ra khỏi phạm vi sẽ gây lỗi **giải phóng kép (`double free`)**.

Để hai đối tượng độc lập nhau về trạng thái, lớp quản lý bộ nhớ thô phải cài đặt **sao chép sâu (deep copy)**: cấp phát một khối nhớ riêng trên Heap cho đối tượng đích rồi sao chép giá trị từng phần tử sang. Khi viết toán tử gán `operator=`, tiểu mục phân tích hai yêu cầu an toàn bắt buộc: phải xử lý đúng trường hợp **tự gán (`a = a` — self-assignment)** (nếu xóa vùng nhớ cũ của `this` trước khi chép từ tham số nguồn thì khi tự gán sẽ đọc phải vùng nhớ vừa xóa!) và phải đảm bảo an toàn ngoại lệ thông qua thành ngữ **Copy-and-Swap** (tạo bản sao tạm trước rồi hoán đổi con trỏ bằng `std::swap`).

> **Nguồn đối chiếu:** `learncpp`: Chapter 21: §21.12 Overloading the assignment operator (Self-assignment) & §21.13 Shallow vs. deep copying

#### Tiểu mục 2: Nguyên tắc nạp chồng toán tử (Operator Overloading): toán tử so sánh, số học, truy cập chỉ số [] và luồng xuất << (`oop-coc-operator-overloading-semantics` — mức `core`)

**Nạp chồng toán tử (Operator Overloading)** cho phép định nghĩa ý nghĩa của các ký hiệu toán tử quen thuộc (`+`, `-`, `*`, `==`, `<`, `[]`, `()`, `<<`) cho các kiểu dữ liệu người dùng tự định nghĩa (như số phức `Complex`, phân số `Fraction`, vector toán học `Vec3`, ma trận `Matrix`). Tiểu mục này phân loại cách cài đặt theo bản chất của toán tử: (1) Các toán tử làm thay đổi vế trái hoặc gắn chặt với biểu diễn bộ nhớ như `=`, `[]`, `()`, `+=` được cài đặt làm **hàm thành viên** (trong đó `operator[]` thường cần cả phiên bản trả về `T&` để gán và phiên bản `const T&` `const` để đọc trên đối tượng hằng); (2) Các toán tử đối xứng hai ngôi như `+`, `-`, `==`, `<` hoặc toán tử luồng `std::ostream& operator<<(std::ostream&, const T&)` (mà vế trái là luồng `std::cout` chứ không phải lớp của ta) được cài đặt làm **hàm thông thường hoặc hàm `friend`**.

Tiểu mục đặc biệt nhấn mạnh quy tắc kỷ luật ngữ nghĩa: chỉ nạp chồng toán tử khi phép toán đó có ý nghĩa hiển nhiên, trực quan và tuân thủ đúng các tính chất toán học mà người đọc mong đợi (chẳng hạn nạp chồng `a + b` không được phép làm thay đổi giá trị của `a` hay `b`, và toán tử `<` dùng để sắp xếp phải thỏa mãn tính chất thứ tự nghiêm ngặt — strict weak ordering). Nếu một hành động không có sự tương ứng tự nhiên với toán tử, hãy viết một hàm thành viên có tên rõ nghĩa thay vì lạm dụng toán tử gây khó hiểu.

> **Nguồn đối chiếu:** `learncpp`: Chapter 21: §21.1–21.10 Overloading arithmetic, I/O (`<<`, `>>`), comparison (`==`, `<`), and subscript (`[]`) operators

#### Tiểu mục 3: Quan hệ Hợp thành (Composition — part-of) so với Kết tập (Aggregation — has-a) và cách xây dựng hệ thống từ các phần độc lập (`oop-coc-composition-vs-aggregation` — mức `core`)

Phần lớn các đối tượng phức tạp trong thế giới thực cũng như trong phần mềm được tạo nên bằng cách lắp ghép các đối tượng nhỏ hơn lại với nhau làm biến thành viên. Tiểu mục này phân biệt hai sắc thái của quan hệ chứa đựng: (1) **Hợp thành (Composition — quan hệ "là một bộ phận của" / `part-of`)**: đối tượng tổng thể nắm quyền sở hữu độc quyền đối với đối tượng thành phần, chịu trách nhiệm tạo ra nó và khi đối tượng tổng thể bị hủy thì thành phần đó cũng bị hủy theo (ví dụ một đối tượng `Graph` chứa `std::vector<Node>` bên trong nó); và (2) **Kết tập (Aggregation — quan hệ tham chiếu / `has-a`)**: đối tượng chứa chỉ giữ con trỏ hoặc tham chiếu không sở hữu tới một đối tượng tồn tại độc lập bên ngoài và có thể được chia sẻ bởi nhiều nơi khác.

Thiết kế dựa trên **Hợp thành (Composition)** mang lại tính mô-đun rất cao: lớp bên ngoài chỉ giao tiếp với các thành viên bên trong thông qua giao diện `public` của chúng mà không phụ thuộc vào chi tiết cài đặt nội bộ của thành viên, đồng thời có thể dễ dàng thay đổi hoặc kiểm thử từng thành phần một cách độc lập.

> **Nguồn đối chiếu:** `learncpp`: Chapter 23: §23.1 Object relationships, §23.2 Composition, and §23.3 Aggregation

### Chương 3 — Kế thừa (Inheritance), Đa hình động (Virtual Dispatch), Giao diện trừu tượng và Mô hình vtable/vptr (`oop-inheritance-polymorphism`)

Chương này phân tích cơ chế kế thừa và đa hình thời gian chạy: một lớp dẫn xuất mở rộng lớp cơ sở như thế nào, điều gì xảy ra khi gọi một hàm ảo (`virtual`) qua con trỏ/tham chiếu cơ sở, vì sao hủy đa hình qua base thiếu virtual destructor có thể gây hành vi không xác định, hiện tượng cắt lát đối tượng (`object slicing`) và cơ chế bảng hàm ảo bên dưới.

*Nguồn chương:* `learncpp` (Chapter 24 (§24.1–24.9 Inheritance) & Chapter 25 (§25.1–25.11 Virtual Functions, Abstract Classes, Virtual Destructors, vtable, Object Slicing))

#### Tiểu mục 1: Kế thừa công khai (Public Inheritance — is-a), bố cục đối tượng cơ sở – dẫn xuất, thứ tự khởi tạo/hủy và Nguyên lý thay thế Liskov (LSP) (`oop-ip-inheritance-construction-order-liskov` — mức `core`)

**Kế thừa công khai (`class Derived : public Base`)** mô hình hóa quan hệ phân loại **"là một" (`is-a`)**: mọi đối tượng của lớp dẫn xuất `Derived` đồng thời là một đối tượng đặc biệt hóa của lớp cơ sở `Base`. Về mặt bố cục bộ nhớ, một đối tượng `Derived` chứa trọn vẹn một **đối tượng con lớp cơ sở (`Base` subobject)** ở phần đầu, nối tiếp bằng các biến thành viên mới được thêm riêng ở `Derived`. Chính cấu trúc lồng nhau này quy định thứ tự vòng đời bất biến: khi tạo một đối tượng `Derived`, **hàm tạo của lớp cơ sở `Base` luôn chạy hoàn tất trước**, sau đó mới đến các thành viên và thân hàm tạo của `Derived`; ngược lại, khi đối tượng bị hủy, **hàm hủy của `Derived` chạy trước**, rồi mới gọi ngược lên hàm hủy của `Base` (vì phần `Derived` có thể còn dùng tới dữ liệu của `Base`, nhưng `Base` không bao giờ biết tới `Derived`).

Để kiểm tra xem một thiết kế kế thừa có đúng đắn về mặt logic hay không, tiểu mục giới thiệu **Nguyên lý thay thế Liskov (Liskov Substitution Principle — LSP)**: bất kỳ đoạn mã nào làm việc đúng với con trỏ/tham chiếu tới lớp cơ sở `Base` đều phải tiếp tục làm việc đúng theo hợp đồng khi ta truyền vào đó một đối tượng thuộc lớp dẫn xuất `Derived` mà không cần biết kiểu cụ thể của nó. Những ví dụ kinh điển như cho hình vuông `Square` kế thừa từ hình chữ nhật `Rectangle` có hàm `setWidth()` và `setHeight()` độc lập sẽ vi phạm LSP (vì hàm kiểm thử `Rectangle` kỳ vọng đổi chiều rộng không làm đổi chiều cao), chứng minh rằng "là một" trong ngôn ngữ đời thường không tự động đồng nghĩa với "là một" về mặt hành vi hợp đồng trong phần mềm.

> **Nguồn đối chiếu:** `learncpp`: Chapter 24: §24.1–24.5 Introduction to inheritance, Order of construction of derived classes, Constructors and initialization of derived classes, and Access specifiers (`protected`)

#### Tiểu mục 2: Liên kết tĩnh so với Liên kết động (Dynamic Dispatch), từ khóa virtual / override, Lớp thuần ảo (Interface) và Virtual Destructor (`oop-ip-virtual-functions-abstract-destructors` — mức `core`)

Mặc định trong C++, các lời gọi hàm thành viên thông thường sử dụng **liên kết tĩnh tại thời điểm biên dịch (static / early binding)** dựa trên kiểu tĩnh của con trỏ hoặc tham chiếu: nếu `Base* p = &derivedObj;` mà hàm `speak()` không phải hàm ảo, lời gọi `p->speak()` sẽ luôn gọi `Base::speak()`. Để chương trình quyết định hàm nào được gọi tại **thời điểm chạy (runtime / dynamic dispatch / late binding)** dựa trên **kiểu thực tế (dynamic type)** của đối tượng mà `p` đang trỏ tới, hàm đó ở lớp cơ sở phải được khai báo với từ khóa **`virtual`**, và ở lớp dẫn xuất nên gắn từ khóa **`override`** (để trình biên dịch báo lỗi ngay nếu người viết gõ lệch chữ ký hàm hoặc thiếu `const`). Khi một hàm ảo được khai báo bằng `= 0` (ví dụ `virtual double area() const = 0;`), nó trở thành **hàm thuần ảo (pure virtual function)** và lớp chứa nó trở thành **lớp cơ sở trừu tượng (abstract class / interface)** — không thể khởi tạo trực tiếp đối tượng của lớp trừu tượng mà bắt buộc các lớp dẫn xuất cụ thể phải định nghĩa đầy đủ mọi hàm thuần ảo.

Thiết kế hàm hủy của lớp cơ sở phụ thuộc hợp đồng sở hữu. Nếu cho phép hủy đối tượng dẫn xuất thông qua con trỏ cơ sở với delete, lớp cơ sở cần public virtual destructor để việc hủy đa hình đúng. Một thiết kế khác là protected nonvirtual destructor, ngăn mã bên ngoài xóa đối tượng qua Base và dành việc hủy cho cơ chế sở hữu được quy định. Việc có hàm virtual không tự buộc mọi lớp phải cung cấp public virtual destructor. Trong trường hợp thông thường đang xét, delete một Derived qua Base có destructor không virtual gây hành vi không xác định; không được mô tả như bảo đảm chỉ chạy destructor Base. Tiểu mục đối chiếu quyền truy cập destructor, kiểu tĩnh của con trỏ, kiểu động của đối tượng và cách dùng std::unique_ptr<Base> để lựa chọn hợp đồng rõ ràng.

> **Nguồn đối chiếu:** `learncpp`: Chapter 25: §25.1 Pointers and references to the base class of derived objects, §25.2 Virtual functions and polymorphism, §25.3 The override and final specifiers, §25.4 Virtual destructors, and §25.7 Pure virtual functions, abstract base classes, and interface classes

#### Tiểu mục 3: Mô hình triển khai bảng hàm ảo (vtable / vptr) của ABI, chi phí thực thi và hiện tượng Cắt lát đối tượng (Object Slicing) (`oop-ip-vtable-abi-and-object-slicing` — mức `core`)

Làm thế nào chương trình đang chạy chỉ nhìn vào một con trỏ `Base* p` lại tìm ra đúng địa chỉ hàm `Derived::speak()`? Tiểu mục này phân biệt rõ: chuẩn ISO C++ chỉ quy định hành vi ngữ nghĩa của lời gọi hàm ảo, nhưng hầu hết mọi trình biên dịch và **ABI thực tế** hiện thực hóa cơ chế này bằng **Bảng hàm ảo (`vtable` — virtual method table)** và **Con trỏ bảng ảo ẩn (`vptr`)**. Cụ thể, với mỗi lớp có hàm `virtual`, trình biên dịch tạo ra một mảng tĩnh chỉ đọc các con trỏ hàm gọi là `vtable` của lớp đó; đồng thời chèn thêm một con trỏ ẩn `vptr` (thường tốn $8$ byte ở đầu mỗi đối tượng) được constructor tự động gán trỏ vào `vtable` của đúng lớp thực tế. Khi gọi `p->speak()`, CPU thực hiện giải tham chiếu gián tiếp qua `p->vptr[chi_so_ham]` để nhảy tới đúng hàm của `Derived`. Hiểu cơ chế `vtable`/`vptr` giúp người học giải thích vì sao lớp có hàm `virtual` tăng thêm kích thước 1 con trỏ cho mỗi đối tượng, vì sao lời gọi hàm ảo tốn thêm một bước tra bảng và khó được nội tuyến hóa (`inline`) hơn hàm thường, và vì sao không được gọi hàm ảo để kỳ vọng hành vi của `Derived` ngay bên trong constructor/destructor của `Base` (vì tại thời điểm đó phần `Derived` chưa được tạo hoặc đã bị hủy, nên `vptr` đang trỏ vào `vtable` của `Base`).

Phần cuối giải thích hiện tượng **Cắt lát đối tượng (Object Slicing)**: nếu một hàm nhận tham số **theo giá trị** `void xuLy(Base b)` (thay vì tham chiếu `const Base& b` hoặc con trỏ `Base*`) và người dùng truyền một đối tượng `Derived d` vào đó, thì chỉ có phần đối tượng con `Base` bên trong `d` được sao chép vào biến cục bộ `b` (với `vptr` của `b` là của `Base`), còn toàn bộ các biến thành viên và hành vi riêng của `Derived` bị "cắt bỏ" mất. Vì vậy, đa hình động trong C++ luôn phải đi qua con trỏ hoặc tham chiếu, và các container đa hình phải lưu `std::vector<std::unique_ptr<Base>>` chứ không thể lưu `std::vector<Base>`.

> **Nguồn đối chiếu:** `learncpp`: Chapter 25: §25.5 Early binding and late binding, §25.6 The virtual table (`vtable` and `*__vptr`), and §25.9 Object slicing

### Chương 4 — Nguyên lý thiết kế hướng đối tượng, các Mẫu thiết kế cốt lõi (Strategy, Factory, Observer) và giới hạn của OOP (`oop-design-tradeoffs`)

Chương cuối tổng hợp cách sử dụng OOP một cách chín chắn trong kỹ nghệ phần mềm: tăng độ gắn kết nội tại (cohesion), giảm độ kết dính phụ thuộc (coupling), ưu tiên hợp thành hơn kế thừa sâu, giải quyết ba bài toán kiến trúc phổ biến bằng mẫu thiết kế (`Strategy`, `Factory`, `Observer`) và nhận biết rõ ranh giới khi nào đa hình tĩnh (`template`), `std::variant` hoặc mảng dữ liệu phẳng vượt trội hơn OOP.

*Nguồn chương:* `learncpp` (Chapter 23 (§23.1–23.3 Object Relationships) & Chapter 25 (§25.7 Interface classes)); `swe-at-google` (Chapters 8–10 & Software Design Principles (Modularity, Coupling, Composition over Inheritance)); `composing-programs` (Chapter 2: §2.5–2.7 Object-Oriented Programming vs Functional/Generic Approaches)

#### Tiểu mục 1: Độ gắn kết (Cohesion), Độ kết dính (Coupling), Đảo ngược phụ thuộc (DIP) và nguyên tắc Ưu tiên Hợp thành hơn Kế thừa (`oop-dt-coupling-cohesion-composition-over-inheritance` — mức `core`)

Chất lượng của một thiết kế mô-đun được đánh giá qua hai thước đo đối ngẫu: **Độ gắn kết nội tại cao (High Cohesion)** — mọi thành viên trong một lớp đều phục vụ chung một trách nhiệm rõ ràng duy nhất (Single Responsibility); và **Độ kết dính phụ thuộc thấp (Low Coupling)** — các lớp phụ thuộc vào nhau ít nhất có thể, chỉ giao tiếp qua các giao diện trừu tượng mỏng ổn định (**Đảo ngược phụ thuộc — Dependency Inversion Principle**: cả mô-đun cấp cao lẫn mô-đun cấp thấp đều phụ thuộc vào giao diện trừu tượng `Interface`, thay vì mô-đun cấp cao gọi trực tiếp chi tiết cài đặt cấp thấp).

Từ góc nhìn giảm kết dính đó, tiểu mục phân tích vì sao kỹ nghệ phần mềm hiện đại luôn nhấn mạnh nguyên tắc **"Ưu tiên Hợp thành hơn Kế thừa cài đặt" (Prefer Composition over Inheritance)**: kế thừa lớp (`class D : public B`) tạo ra mối liên kết cứng nhất trong ngôn ngữ (lớp con bị phụ thuộc chặt vào chi tiết của lớp cha — bài toán lớp cơ sở mong manh / fragile base class problem — và dễ dẫn tới sự bùng nổ tổ hợp các lớp con như `BufferedEncryptedFileStream`, `BufferedCompressedFileStream`). Ngược lại, nếu tách từng khía cạnh hành vi (như bộ nén, bộ mã hóa, nguồn lưu trữ) thành các thành phần giao diện độc lập rồi lắp ghép chúng bằng **Hợp thành (Composition)** bên trong một đối tượng, ta có thể kết hợp linh hoạt mọi biến thể tại thời điểm chạy mà chỉ cần số lượng lớp tuyến tính.

> **Nguồn đối chiếu:** `learncpp`: Chapter 23 (§23.2 Composition vs Inheritance) & Chapter 25 (§25.7 Interface classes and loose coupling) | `swe-at-google`: Chapters 8–12: Designing for Maintainability and Testing via Dependency Injection / Composition

#### Tiểu mục 2: Ba mẫu thiết kế kinh điển giải quyết bài toán thực tế: Strategy, Factory và Observer (`oop-dt-core-design-patterns` — mức `core`)

Thay vì học thuộc lòng hai mươi mấy mẫu thiết kế như giáo điều hình thức, tiểu mục này chọn lọc ba mẫu thiết kế nền tảng xuất hiện thường xuyên nhất và giải thích đúng bài toán kỹ thuật mà mỗi mẫu giải quyết: (1) **Mẫu Chiến lược (Strategy Pattern)**: khi một lớp cần thực hiện một thuật toán có thể thay đổi linh hoạt (ví dụ tính cước vận chuyển theo đường bộ/đường hàng không, hoặc chọn chính sách nén dữ liệu), thay vì nhồi hàng chục nhánh `if/else` vào lớp chính hay tạo cây kế thừa cố định, ta đóng gói họ thuật toán đó dưới một giao diện chung (hoặc đối tượng hàm `std::function`) và truyền chiến lược vào đối tượng chính qua hợp thành; (2) **Mẫu Nhà máy (Factory Function / Factory Method)**: tách riêng logic quyết định *khởi tạo lớp dẫn xuất cụ thể nào* (trả về `std::unique_ptr<BaseInterface>`) ra khỏi đoạn mã sử dụng đối tượng đó, giúp mã nghiệp vụ hoàn toàn không cần `#include` hay biết tên các lớp cài đặt cụ thể.

(3) **Mẫu Quan sát / Đăng ký – Phát hành (Observer / Publish–Subscribe Pattern)**: khi trạng thái của một đối tượng trung tâm (Subject/Model) thay đổi và cần thông báo cho nhiều thành phần khác (như giao diện hiển thị, bộ ghi nhật ký, bộ thống kê) cập nhật theo mà không muốn đối tượng trung tâm bị gắn chặt vào danh sách cố định các lớp đó, đối tượng trung tâm chỉ giữ một danh sách các con trỏ/giao diện `Observer` đăng ký nhận thông báo. Tiểu mục cũng chỉ rõ rủi ro vòng đời trong C++ khi dùng Observer: nếu một `Observer` bị hủy mà chưa hủy đăng ký khỏi `Subject`, con trỏ trong `Subject` sẽ biến thành con trỏ treo (dangling pointer).

> **Nguồn đối chiếu:** `learncpp`: Chapter 25 (§25.7 Interface classes) & Chapter 20 (§20.1 Function pointers / callbacks and std::function as lightweight strategies) | `composing-programs`: Chapter 2: §2.5–2.7 Generic Operations and Message Passing Patterns

#### Tiểu mục 3: Ranh giới áp dụng của OOP: Đa hình động (virtual) so với Đa hình tĩnh (Templates), kiểu biến thể (std::variant) và dữ liệu phẳng (`oop-dt-when-not-to-use-oop` — mức `core`)

Lập trình hướng đối tượng với kế thừa và hàm ảo không phải là công cụ vạn năng cho mọi bài toán. Tiểu mục này thiết lập bảng tiêu chí rõ ràng để chọn mô hình biểu diễn phù hợp trong C++: (1) **Đa hình động qua lớp cơ sở và `virtual`** phù hợp khi tập hợp các kiểu con là **mở (open set)** và chỉ được xác định tại **thời điểm chạy** (ví dụ danh sách các thành phần giao diện không đồng nhất hoặc plugin nạp lúc chạy); (2) Ngược lại, nếu kiểu dữ liệu đã biết cố định tại **thời điểm biên dịch** (như thuật toán sắp xếp hay cấu trúc `std::vector<T>`), **Đa hình tĩnh qua Khuôn mẫu (`template`)** vượt trội hoàn toàn vì không tốn bộ nhớ cho `vptr`, không phải cấp phát từng phần tử rời rạc trên Heap, và trình biên dịch có thể nội tuyến hóa (`inline`) toàn bộ lời gọi hàm.

Hơn nữa, nếu tập hợp các kiểu dữ liệu là một **tập đóng cố định đã biết trước (closed set of types)** — chẳng hạn các nút của một cây biểu thức toán học (`Number`, `Add`, `Multiply`) hoặc các trạng thái của một máy trạng thái hữu hạn — việc dùng kiểu tổng có gắn thẻ **`std::variant`** kết hợp hàm `std::visit` cho phép lưu trữ trực tiếp trên vùng nhớ phẳng không cần cấp phát Heap qua con trỏ và dễ dàng thêm các phép toán mới mà không phải sửa từng lớp. Cuối cùng, trong các bài toán xử lý mảng dữ liệu lớn đòi hỏi hiệu năng cao (đồ họa, mô phỏng vật lý, học máy), việc lưu các bản ghi dữ liệu đồng nhất nằm liền kề nhau trong `std::vector<Struct>` luôn nhanh hơn gấp nhiều lần so với mảng các con trỏ `std::vector<unique_ptr<Base>>` nhảy ngẫu nhiên khắp Heap làm trượt bộ nhớ đệm CPU (cache miss).

> **Nguồn đối chiếu:** `learncpp`: Chapter 25 (§25.6 Virtual table overhead) & Chapter 16 (§16.1 Contiguous memory benefits of std::vector) | `composing-programs`: Chapter 2: §2.7 Object Abstraction and Dispatching on Type vs Data-Directed Programming

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

## CS-10: Đại số tuyến tính (`linear-algebra`)

- **Thuộc khối:** Khối II — Lập trình và toán nền CS
- **Phân loại:** `core`
- **Điều kiện tiên quyết:**
  - `math-bridge` (*required*): Cần nắm vững biến số, hệ phương trình cơ bản, tọa độ phẳng, lượng giác trên đường tròn đơn vị và số phức từ Môn CS-02.
  - `discrete-math` (*recommended*): Tư duy chứng minh, tập hợp và ánh xạ đơn ánh/toàn ánh/song ánh từ Môn CS-09 giúp hiểu sâu cấu trúc không gian vector cùng hạt nhân và ảnh của ánh xạ tuyến tính.

### Tổng quan môn học

Môn học xây dựng ngôn ngữ toán học trung tâm của học máy (Machine Learning), thị giác máy tính, đồ họa 3D, tối ưu hóa và tính toán khoa học: không gian vector và ánh xạ tuyến tính. Thay vì dạy Đại số tuyến tính như những bảng số vô hồn chỉ dùng để bấm máy giải hệ phương trình hay tính định thức cơ học, môn học đi theo đúng trục tư tưởng của Gilbert Strang (MIT 18.06SC): đặt song song góc nhìn hình học và góc nhìn đại số ngay từ phương trình $Ax = b$, trong đó tích ma trận–vector $Ax$ không chỉ là những tích vô hướng từng hàng mà chính là **tổ hợp tuyến tính các cột của ma trận $A$**.

Từ thuật toán khử Gauss và phân rã $PA = LU$, môn học phát triển khái niệm không gian vector, độc lập tuyến tính, cơ sở, số chiều, hạng (rank) và **Định lý cơ bản của Đại số tuyến tính về Bốn không gian con** (Column space, Nullspace, Row space, Left nullspace). Các chương tiếp theo làm rõ bản chất của ánh xạ tuyến tính và phép đổi cơ sở, tính trực giao, phép chiếu trực giao giải bài toán xấp xỉ **Bình phương tối thiểu (Least Squares)** khi hệ $Ax = b$ vô nghiệm, trực chuẩn hóa Gram–Schmidt ($A = QR$), ý nghĩa hình học của định thức, bài toán **Trị riêng – Vector riêng (Eigenvalues & Eigenvectors)** để phân tích hệ động lực $A^k x_0$, và kết thúc ở đỉnh cao là **Ma trận đối xứng xác định dương** cùng **Phân rã giá trị kỳ dị (Singular Value Decomposition — SVD)** $A = U\Sigma V^T$ cho ma trận kích thước bất kỳ.

### Giới hạn học thuật (`boundaries`)

- Môn học tự trọn vẹn trên nền tảng Toán nền (`CS-02`), hoàn toàn không yêu cầu phải học xong Giải tích nhiều biến trước; các đạo hàm theo vector/ma trận (gradient, Jacobian, Hessian) sẽ được xây dựng ở Môn CS-12 trên chính nền tảng ma trận và dạng toàn phương của môn này.
- Tránh lối học tính định thức cấp 4–5 bằng tay hoặc tìm ma trận nghịch đảo bằng phần bù đại số cơ học; nhấn mạnh rằng trong tính toán thực tế trên máy tính, giải hệ $Ax = b$ dùng phân rã $LU$ hoặc $QR$ chứ không tính tường minh $A^{-1}$.

### Nguồn giáo trình của môn học

- **Linear Algebra (MIT 18.06SC)** (`mit-1806sc`, *primary*): Unit I: Ax = b and the Four Subspaces, Unit II: Least Squares, Determinants and Eigenvalues, and Unit III: Positive Definite Matrices and SVD — URL: https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/syllabus/

### Chương 1 — Hệ phương trình tuyến tính Ax = b, Khử Gauss, Đại số ma trận và Phân rã PA = LU (`la-systems-elimination-matrices`)

Chương mở đầu thiết lập hai góc nhìn nền tảng về hệ phương trình tuyến tính $Ax = b$ (hình ảnh theo hàng và hình ảnh theo cột), trình bày thuật toán khử Gauss để tìm các phần tử chốt (pivots), bốn cách hiểu phép nhân ma trận $AB$, điều kiện tồn tại ma trận nghịch đảo $A^{-1}$ và cách ghi lại toàn bộ quá trình khử Gauss thành phân rã thừa số $PA = LU$.

*Nguồn chương:* `mit-1806sc` (Unit I: introductory lecture pages (Geometry of Linear Equations, Elimination, Matrix Operations, Inverses, Transposes, Permutations, and PA = LU))

#### Tiểu mục 1: Hai góc nhìn hình học của hệ Ax = b: Giao của các siêu phẳng (Row Picture) so với Tổ hợp tuyến tính các cột (Column Picture) (`la-sem-row-column-pictures-matrix-vector` — mức `core`)

Xét một hệ gồm $m$ phương trình tuyến tính với $n$ ẩn số, được viết gọn dưới dạng ma trận $Ax = b$, trong đó $A \in \mathbb{R}^{m \times n}$, vector ẩn $x \in \mathbb{R}^n$ và vector vế phải $b \in \mathbb{R}^m$. Tiểu mục này đối chiếu hai cách nhìn hoàn toàn khác nhau nhưng tương đương về cùng một phương trình $Ax = b$: (1) **Hình ảnh theo hàng (Row Picture)** xem mỗi phương trình thứ $i$ (tức tích vô hướng của hàng thứ $i$ của $A$ với $x$ bằng $b_i$) là một đường thẳng (trong $\mathbb{R}^2$), một mặt phẳng (trong $\mathbb{R}^3$) hoặc một siêu phẳng (trong $\mathbb{R}^n$), và nghiệm $x$ là điểm giao chung của tất cả $m$ siêu phẳng đó; (2) **Hình ảnh theo cột (Column Picture)** gọi $a_1, a_2, \dots, a_n \in \mathbb{R}^m$ là $n$ vector cột của ma trận $A$, và định nghĩa tích ma trận–vector $Ax$ chính là **tổ hợp tuyến tính (linear combination)** của các cột với hệ số là các thành phần của $x$: $$Ax = x_1 a_1 + x_2 a_2 + \dots + x_n a_n = b$$

Góc nhìn theo cột chuyển câu hỏi đại số "hệ $Ax = b$ có nghiệm hay không với mọi vế phải $b \in \mathbb{R}^m$?" thành câu hỏi hình học sâu sắc: "các tổ hợp tuyến tính của $n$ vector cột $a_1, \dots, a_n$ có lấp đầy toàn bộ không gian $\mathbb{R}^m$ hay chỉ nằm gọn trong một mặt phẳng/đường thẳng suy biến?". Chính định nghĩa $Ax$ như tổ hợp các cột là chìa khóa xuyên suốt cả môn học để hiểu không gian cột, hạng ma trận và phép chiếu.

> **Nguồn đối chiếu:** `mit-1806sc`: Unit I, The Geometry of Linear Equations (Row Picture vs. Column Picture of Ax = b)

#### Tiểu mục 2: Thuật toán khử Gauss (Gaussian Elimination), phần tử chốt (Pivots), thế ngược và các trường hợp suy biến (`la-sem-gaussian-elimination-pivots-multipliers` — mức `core`)

Để giải hệ $Ax = b$ một cách có thuật toán trên máy tính, **phép khử Gauss (Gaussian Elimination)** biến đổi hệ phương trình gốc về dạng tam giác trên (hoặc dạng bậc thang — row echelon form $Ux = c$) bằng chuỗi phép biến đổi sơ cấp theo hàng bảo toàn tập nghiệm: lấy một hàng trừ đi bội số $\ell_{ij} = \frac{a_{ij}}{a_{jj}}$ của hàng chốt phía trên để triệt tiêu các hệ số nằm dưới đường chéo về $0$, sau đó giải từ phương trình cuối ngược lên đầu bằng **thế ngược (back substitution)**. Phần tử khác $0$ đầu tiên dùng để khử cột thứ $j$ được gọi là **phần tử chốt (pivot)** (về định nghĩa, phần tử chốt không bao giờ được bằng $0$).

Tiểu mục phân tích rõ hai tình huống khi vị trí dự kiến làm chốt bị bằng $0$ trong quá trình khử: (1) **Hỏng tạm thời (Temporary failure)**: bên dưới vị trí $0$ đó trên cùng cột vẫn còn một số khác $0$; ta chỉ cần thực hiện **đổi chỗ hai hàng (row exchange / partial pivoting)** để đưa số khác $0$ (thực tế trong giải tích số thường chọn số có trị tuyệt đối lớn nhất trên cột để giảm sai số làm tròn dấu chấm động) lên làm chốt và tiếp tục khử bình thường; và (2) **Thất bại thực sự (Complete failure / Singular case)**: cả vị trí hiện tại lẫn toàn bộ các phần tử bên dưới nó trên cùng cột đều bằng $0$; lúc này cột đó không có phần tử chốt, ma trận vuông bị suy biến (không khả nghịch), và hệ phương trình hoặc vô nghiệm (nếu vế phải sau khi khử dẫn tới $0 = c \neq 0$) hoặc có vô số nghiệm.

> **Nguồn đối chiếu:** `mit-1806sc`: Unit I, Elimination with Matrices (Pivots, Multipliers, Row Exchanges, Failure of Elimination)

#### Tiểu mục 3: Bốn góc nhìn của phép nhân ma trận AB, ma trận nghịch đảo, ma trận hoán vị và phân rã PA = LU (`la-sem-matrix-multiplication-inverses-lu` — mức `core`)

Với hai ma trận $A \in \mathbb{R}^{m \times n}$ và $B \in \mathbb{R}^{n \times p}$ (số cột của $A$ bắt buộc bằng số hàng của $B$), tích $C = AB \in \mathbb{R}^{m \times p}$ có thể được hiểu theo bốn cách tương đương: (1) Phần tử lẻ $c_{ij}$ là tích vô hướng của hàng $i$ của $A$ với cột $j$ của $B$; (2) **Theo cột**: cột thứ $j$ của $AB$ chính là $A b_j$ (tổ hợp tuyến tính các cột của $A$); (3) **Theo hàng**: hàng thứ $i$ của $AB$ là hàng $i$ của $A$ nhân với $B$ (tổ hợp tuyến tính các hàng của $B$); và (4) **Tổng các ma trận hạng 1 (Column-times-Row)**: $AB = \sum_{k=1}^n (\text{cột } k \text{ của } A)(\text{hàng } k \text{ của } B)$ — góc nhìn thứ tư này là nền tảng trực tiếp của phân rã giá trị kỳ dị SVD ở Chương 6. Phép nhân ma trận có tính kết hợp $(AB)C = A(BC)$, phân phối với phép cộng, nhưng **không có tính giao hoán** ($AB \neq BA$ nói chung), và chuyển vị đảo thứ tự tích: $(AB)^T = B^T A^T$.

Đối với ma trận vuông $A \in \mathbb{R}^{n \times n}$, $A$ được gọi là **khả nghịch (invertible / nonsingular)** nếu tồn tại $A^{-1}$ sao cho $A^{-1}A = AA^{-1} = I_n$, tương đương với việc khử Gauss tạo ra đủ $n$ phần tử chốt khác $0$ và phương trình $Ax = 0$ chỉ có nghiệm tầm thường $x = 0$ (thuật toán Gauss–Jordan tìm $A^{-1}$ bằng cách khử ma trận ghép $[A \mid I] \to [I \mid A^{-1}]$). Tuy nhiên, trong tính toán khoa học, thay vì tốn chi phí tính $A^{-1}$, mỗi bước trừ hàng trong khử Gauss được biểu diễn bằng một ma trận sơ cấp $E_{ij}$ mà nghịch đảo của nó chỉ đơn giản là đổi dấu các hệ số nhân $\ell_{ij}$; gom toàn bộ các hệ số nhân $\ell_{ij}$ vào một ma trận tam giác dưới có đường chéo bằng $1$ là $L$ (Lower triangular) và kết hợp với ma trận hoán vị hàng $P$ (Permutation matrix thỏa mãn $P^{-1} = P^T$), ta thu được **Phân rã $PA = LU$**. Một khi đã phân rã $PA = LU$ (tốn $\approx \frac{1}{3}n^3$ phép toán), với mọi vector vế phải $b$ mới, ta chỉ cần giải hai hệ tam giác cực nhanh $Lc = Pb$ (thế xuôi) rồi $Ux = c$ (thế ngược) trong $O(n^2)$ phép toán.

> **Nguồn đối chiếu:** `mit-1806sc`: Unit I, Multiplication and Inverse Matrices, Factorization into A = LU, Transposes and Permutations (PA = LU)

### Chương 2 — Không gian vector, Độc lập tuyến tính, Cơ sở, Số chiều và Bốn không gian con cơ bản (`la-vector-spaces-subspaces`)

Chương này xây dựng cấu trúc đại số cốt lõi của không gian vector: thế nào là một không gian con, khi nào một hệ vector là độc lập tuyến tính và tạo thành cơ sở, định nghĩa hạng (rank) của ma trận, cấu trúc nghiệm tổng quát của $Ax = b$, và Định lý cơ bản của Đại số tuyến tính kết nối bốn không gian con của mọi ma trận $m \times n$.

*Nguồn chương:* `mit-1806sc` (Unit I: vector-space lecture pages (Column Space, Nullspace, Solving Ax = 0 and Ax = b, Independence, Basis, Dimension, and the Four Fundamental Subspaces))

#### Tiểu mục 1: Không gian vector, điều kiện đóng của Không gian con (Subspace), Không gian cột C(A) và Không gian nghiệm thuần nhất N(A) (`la-vss-subspaces-column-nullspace` — mức `core`)

Một **không gian vector (vector space)** trên trường số thực $\mathbb{R}$ (điển hình là $\mathbb{R}^n$ hoặc không gian các ma trận, đa thức, hàm số) là một tập hợp trang bị phép cộng hai vector và phép nhân vector với một vô hướng thỏa mãn 8 tiên đề đại số chuẩn. Một tập con khác rỗng $S \subseteq V$ được gọi là một **không gian con (subspace)** nếu và chỉ nếu nó **đóng kín đối với mọi tổ hợp tuyến tính**: với mọi $u, v \in S$ và mọi số thực $\alpha, \beta \in \mathbb{R}$, vector $\alpha u + \beta v$ vẫn phải nằm trong $S$. Điều kiện này kéo theo một hệ quả kiểm tra tức thì: **mọi không gian con bắt buộc phải chứa vector không $\mathbf{0}$** (khi chọn $\alpha = \beta = 0$); bất kỳ đường thẳng hay mặt phẳng nào trong $\mathbb{R}^n$ không đi qua gốc tọa độ đều không phải là không gian con (mà chỉ là tập affine dịch chuyển).

Từ một ma trận $A \in \mathbb{R}^{m \times n}$, hai không gian con quan trọng nhất xuất hiện ngay lập tức ở hai phía không gian khác nhau: (1) **Không gian cột (Column Space) $C(A) \subseteq \mathbb{R}^m$** là tập hợp tất cả các tổ hợp tuyến tính của các cột của $A$, tức $C(A) = \{Ax \mid x \in \mathbb{R}^n\}$; hệ phương trình $Ax = b$ có nghiệm khi và chỉ khi vector vế phải $b$ nằm trong không gian cột $C(A)$; và (2) **Không gian hạt nhân / Không gian không (Nullspace) $N(A) \subseteq \mathbb{R}^n$** là tập hợp tất cả các nghiệm của hệ phương trình thuần nhất $Ax = 0$, tức $N(A) = \{x \in \mathbb{R}^n \mid Ax = 0\}$ (luôn là không gian con vì nếu $Ax_1 = 0$ và $Ax_2 = 0$ thì $A(\alpha x_1 + \beta x_2) = \alpha Ax_1 + \beta Ax_2 = 0$).

> **Nguồn đối chiếu:** `mit-1806sc`: Unit I, Column Space and Nullspace & Solving Ax = 0: Pivot Variables, Special Solutions

#### Tiểu mục 2: Dạng bậc thang rút gọn RREF, biến chốt so với biến tự do, Hạng ma trận (Rank) và nghiệm tổng quát x = x_p + x_n (`la-vss-rref-rank-complete-solution` — mức `core`)

Để tìm toàn bộ không gian $N(A)$ của một ma trận $A \in \mathbb{R}^{m \times n}$ bất kỳ, thuật toán khử Gauss tiếp tục khử ngược cả các phần tử phía trên mỗi chốt về $0$ và chia mỗi hàng có chốt cho chính giá trị chốt đó để thu được **Dạng bậc thang rút gọn theo hàng (Reduced Row Echelon Form — $R = \operatorname{rref}(A)$)**. Số lượng các phần tử chốt khác $0$ xuất hiện trong quá trình khử là một bất biến nội tại của ma trận được gọi là **Hạng của ma trận (Rank — ký hiệu $r = \operatorname{rank}(A)$)**, luôn thỏa mãn $r \le \min(m, n)$. Các cột thứ $j$ có chứa phần tử chốt tương ứng với $r$ **biến chốt (pivot variables)**, còn $n - r$ cột không có chốt tương ứng với $n - r$ **biến tự do (free variables)**.

Bằng cách lần lượt gán một biến tự do bằng $1$ và các biến tự do còn lại bằng $0$, ta giải ra được đúng $n - r$ **nghiệm cơ sở đặc biệt (special solutions)** $s_1, \dots, s_{n-r} \in N(A)$, và mọi nghiệm của $Ax = 0$ đều là tổ hợp tuyến tính của chúng. Hơn nữa, khi xét hệ không thuần nhất $Ax = b$ (với $b \in C(A)$), **nghiệm tổng quát đầy đủ (complete solution)** luôn có cấu trúc cộng tính: $$x_{\text{complete}} = x_p + x_n$$ trong đó $x_p$ là một **nghiệm riêng (particular solution)** thỏa mãn $Ax_p = b$ (tìm được bằng cách đặt tất cả các biến tự do bằng $0$), còn $x_n \in N(A)$ là nghiệm tổng quát của hệ thuần nhất $Ax_n = 0$. Tiểu mục hệ thống hóa 4 trường hợp của hạng $r$ so với $m$ và $n$: hạng cột đầy đủ ($r = n$: không có biến tự do, $N(A) = \{0\}$, có $0$ hoặc $1$ nghiệm), hạng hàng đầy đủ ($r = m$: $C(A) = \mathbb{R}^m$, luôn có nghiệm với mọi $b$), ma trận vuông khả nghịch ($r = m = n$: duy nhất 1 nghiệm), và trường hợp $r < m, r < n$ ($0$ hoặc vô số nghiệm).

> **Nguồn đối chiếu:** `mit-1806sc`: Unit I, (Solving Ax = 0) & (Solving Ax = b: Row Reduced Form R)

#### Tiểu mục 3: Độc lập tuyến tính, Hệ sinh, Cơ sở (Basis), Số chiều (Dimension) và Định lý cơ bản về Bốn không gian con (`la-vss-independence-basis-dimension-four-subspaces` — mức `core`)

Một hệ các vector $v_1, v_2, \dots, v_k$ được gọi là **độc lập tuyến tính (linearly independent)** nếu tổ hợp tuyến tính duy nhất của chúng cho ra vector không $\mathbf{0}$ là tổ hợp tầm thường (tất cả hệ số $c_1 = c_2 = \dots = c_k = 0$). Nếu xếp các vector đó thành các cột của ma trận $A$, thì chúng độc lập tuyến tính khi và chỉ khi không gian hạt nhân $N(A)$ chỉ chứa duy nhất vector $\mathbf{0}$ (tức hạng $r = k$, không có biến tự do). Một tập vector vừa **sinh ra (span)** toàn bộ không gian con $V$ (mọi vector trong $V$ biểu diễn được qua chúng), vừa **độc lập tuyến tính** (không thừa vector nào) được gọi là một **cơ sở (basis)** của $V$. Tuy một không gian con có vô số bộ cơ sở khác nhau, nhưng mọi cơ sở của cùng một không gian con luôn có **cùng một số lượng vector**; con số bất biến đó được định nghĩa là **số chiều (dimension — $\dim(V)$)** của không gian con.

Kết hợp các khái niệm trên cho cả ma trận $A \in \mathbb{R}^{m \times n}$ và ma trận chuyển vị $A^T \in \mathbb{R}^{n \times m}$, ta đạt tới **Định lý cơ bản của Đại số tuyến tính (Fundamental Theorem of Linear Algebra — Part 1)** mô tả **Bốn không gian con cơ bản**: (1) **Không gian hàng (Row Space) $C(A^T) \subseteq \mathbb{R}^n$** có số chiều bằng $r$ (cơ sở là $r$ hàng khác $0$ của ma trận bậc thang $R$); (2) **Không gian cột (Column Space) $C(A) \subseteq \mathbb{R}^m$** cũng có số chiều đúng bằng $r$ (với quy tắc quan trọng: cơ sở của $C(A)$ là $r$ cột chốt lấy từ **ma trận gốc $A$** chứ không lấy từ $R$, vì phép biến đổi hàng làm thay đổi không gian cột); (3) **Không gian hạt nhân (Nullspace) $N(A) \subseteq \mathbb{R}^n$** có số chiều bằng $n - r$, thiết lập đẳng thức **Định lý Hạng – Số khuyết (Rank-Nullity Theorem)**: $$\dim C(A) + \dim N(A) = r + (n - r) = n$$ và (4) **Không gian hạt nhân trái (Left Nullspace) $N(A^T) \subseteq \mathbb{R}^m$** (gồm các vector $y$ sao cho $A^T y = 0 \iff y^T A = 0^T$) có số chiều bằng $m - r$.

> **Nguồn đối chiếu:** `mit-1806sc`: Unit I, (Independence, Basis, and Dimension) & (The Four Fundamental Subspaces)

### Chương 3 — Ánh xạ tuyến tính (Linear Transformations), Biểu diễn ma trận và Phép đổi cơ sở (`la-linear-maps-change-of-basis`)

Chương này làm sáng tỏ bản chất sâu xa của ma trận: mỗi ma trận thực chất là bảng tọa độ của một ánh xạ tuyến tính (phép quay, phép chiếu, phép phản xạ, phép đạo hàm) khi ta chọn một bộ cơ sở cho không gian đầu vào và không gian đầu ra. Đổi bộ cơ sở sẽ làm thay đổi ma trận biểu diễn theo quy tắc đồng dạng $B = M^{-1}AM$.

*Nguồn chương:* `mit-1806sc` (Unit III: (Linear Transformations and Their Matrices) & (Change of Basis; Image Compression))

#### Tiểu mục 1: Định nghĩa Ánh xạ tuyến tính T: V -> W, tính chất bảo toàn tổ hợp tuyến tính, Hạt nhân (Kernel) và Ảnh (Image/Range) (`la-lmcb-linear-transformations-kernel-image` — mức `core`)

Một ánh xạ $T: V \to W$ từ không gian vector $V$ vào không gian vector $W$ được gọi là một **ánh xạ tuyến tính (linear transformation / linear map)** nếu nó bảo toàn phép cộng vector và phép nhân vô hướng, tức là thỏa mãn điều kiện gộp: $$T(\alpha u + \beta v) = \alpha T(u) + \beta T(v), \quad \forall u, v \in V,\; \forall \alpha, \beta \in \mathbb{R}$$ Hệ quả tất yếu đầu tiên là mọi ánh xạ tuyến tính đều phải biến vector không thành vector không: $T(\mathbf{0}_V) = \mathbf{0}_W$ (do đó phép tịnh tiến $f(x) = x + v_0$ với $v_0 \neq 0$ không phải là ánh xạ tuyến tính trên $\mathbb{R}^n$). Các ví dụ trực quan trong hình học và giải tích gồm: phép quay quanh gốc tọa độ một góc $\theta$, phép chiếu vuông góc lên một đường thẳng/mặt phẳng, phép lấy đạo hàm $D(p) = p'(x)$ trên không gian các đa thức, và phép tính tích phân.

Mỗi ánh xạ tuyến tính $T: V \to W$ gắn liền với hai không gian con: **Hạt nhân (Kernel)** $\ker(T) = \{v \in V \mid T(v) = \mathbf{0}_W\} \subseteq V$ (ánh xạ $T$ là đơn ánh / một-một khi và chỉ khi $\ker(T) = \{\mathbf{0}_V\}$) và **Ảnh (Image / Range)** $\operatorname{Im}(T) = \{T(v) \mid v \in V\} \subseteq W$ (ánh xạ $T$ là toàn ánh khi $\operatorname{Im}(T) = W$). Khi biểu diễn qua ma trận $A$, $\ker(T)$ chính là Nullspace $N(A)$ và $\operatorname{Im}(T)$ chính là Column Space $C(A)$.

> **Nguồn đối chiếu:** `mit-1806sc`: Unit III, Linear Transformations and Their Matrices (Linearity conditions, geometric examples, Kernel and Range)

#### Tiểu mục 2: Xây dựng ma trận của ánh xạ tuyến tính theo cơ sở và ý nghĩa của phép nhân ma trận như phép hợp ánh xạ (`la-lmcb-matrix-of-linear-map` — mức `core`)

Vì ánh xạ tuyến tính bảo toàn tổ hợp tuyến tính, nếu ta biết ảnh $T(v_1), T(v_2), \dots, T(v_n)$ của một bộ cơ sở $\mathcal{B}_V = \{v_1, \dots, v_n\}$ của $V$, thì giá trị của $T(v)$ tại **mọi** vector $v = c_1 v_1 + \dots + c_n v_n \in V$ đều được xác định duy nhất bởi $T(v) = c_1 T(v_1) + \dots + c_n T(v_n)$. Khi chọn cơ sở $\mathcal{B}_V = \{v_1, \dots, v_n\}$ cho đầu vào $V$ và cơ sở $\mathcal{B}_W = \{w_1, \dots, w_m\}$ cho đầu ra $W$, ma trận biểu diễn $A \in \mathbb{R}^{m \times n}$ của ánh xạ $T$ được xây dựng theo một quy tắc duy nhất: **cột thứ $j$ của ma trận $A$ chính là vector tọa độ của ảnh $T(v_j)$ được khai triển theo cơ sở đầu ra $\mathcal{B}_W$**.

Chẳng hạn trong $\mathbb{R}^2$ với cơ sở chính tắc $e_1 = (1, 0)^T, e_2 = (0, 1)^T$, phép quay ngược chiều kim đồng hồ góc $\theta$ biến $e_1$ thành $(\cos\theta, \sin\theta)^T$ (cột 1) và biến $e_2$ thành $(-\sin\theta, \cos\theta)^T$ (cột 2), cho ta ngay ma trận quay $R(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}$. Góc nhìn này cũng giải thích vì sao định nghĩa phép nhân hai ma trận $AB$ lại có quy tắc hàng-nhân-cột như ở Chương 1: ma trận tích $AB$ không phải quy ước ngẫu nhiên mà chính là ma trận biểu diễn của **ánh xạ hợp $(T_A \circ T_B)(x) = T_A(T_B(x))$** (thực hiện biến đổi $B$ trước rồi thực hiện biến đổi $A$ sau).

> **Nguồn đối chiếu:** `mit-1806sc`: Unit III, Constructing the Matrix of a Linear Transformation from Basis Inputs and Outputs

#### Tiểu mục 3: Ma trận chuyển cơ sở (Change-of-Basis Matrix), biến đổi tọa độ và hai ma trận đồng dạng B = M^{-1} A M (`la-lmcb-change-of-basis-similarity` — mức `core`)

Cùng một vector vật lý trong không gian sẽ có các bộ số tọa độ khác nhau khi được đo trên các hệ trục cơ sở khác nhau (ví dụ trong nén ảnh JPEG hay xử lý tín hiệu, thay vì biểu diễn tín hiệu theo cơ sở điểm ảnh từng vị trí rời rạc, người ta đổi sang cơ sở sóng/tần số Fourier hoặc Wavelet để loại bỏ các hệ số tần số cao gần bằng $0$). Nếu các cột của ma trận khả nghịch $M$ là các vector của bộ cơ sở mới $w_1, \dots, w_n$ viết trong cơ sở chuẩn, thì một vector có tọa độ $c$ trong cơ sở mới sẽ có tọa độ trong cơ sở chuẩn là $x = Mc$, và ngược lại tọa độ trong cơ sở mới là $c = M^{-1}x$.

Khi xét một phép biến đổi tuyến tính $T: V \to V$ từ một không gian vào chính nó, nếu trong cơ sở chuẩn ánh xạ $T$ có ma trận là $A$ ($x \mapsto Ax$), thì trong bộ cơ sở mới xác định bởi các cột của $M$, cũng chính ánh xạ $T$ đó được biểu diễn bởi ma trận: $$B = M^{-1} A M$$ (bởi vì đi từ tọa độ mới $c$, nhân $M$ để đổi sang cơ sở chuẩn, nhân $A$ để thực hiện biến đổi, rồi nhân $M^{-1}$ để đổi kết quả về lại cơ sở mới). Hai ma trận $A$ và $B$ liên hệ với nhau qua $B = M^{-1}AM$ được gọi là **hai ma trận đồng dạng (similar matrices)**: chúng đại diện cho cùng một toán tử tuyến tính nhìn từ hai hệ quy chiếu khác nhau, do đó luôn có cùng hạng, cùng định thức, cùng vết (trace) và cùng tập hợp các trị riêng.

> **Nguồn đối chiếu:** `mit-1806sc`: Unit III, Change of Basis, Image Compression, and Similar Matrices ($B = M^{-1}AM$)

### Chương 4 — Tính trực giao (Orthogonality), Phép chiếu, Bình phương tối thiểu (Least Squares) và Phân rã QR (`la-orthogonality-least-squares`)

Chương này giải quyết bài toán thực tế phổ biến nhất trong khoa học dữ liệu và học máy: khi có nhiều phương trình quan sát hơn số ẩn ($m > n$) và dữ liệu có nhiễu làm cho hệ $Ax = b$ vô nghiệm ($b \notin C(A)$), làm thế nào để tìm nghiệm xấp xỉ tốt nhất $\hat{x}$ bằng phép chiếu trực giao của $b$ lên không gian cột $C(A)$?

*Nguồn chương:* `mit-1806sc` (Unit II: orthogonality lecture pages (Orthogonal Vectors and Subspaces, Projections onto Subspaces, Projection Matrices and Least Squares, Orthogonal Matrices and Gram–Schmidt))

#### Tiểu mục 1: Tích vô hướng, độ dài chuẩn Euclid, tính trực giao và Phần bù trực giao của Bốn không gian con (`la-ols-orthogonal-subspaces-complements` — mức `core`)

Trên không gian $\mathbb{R}^n$, **tích vô hướng (dot product / inner product)** của hai vector cột $x, y \in \mathbb{R}^n$ được viết gọn bằng phép nhân ma trận là $x^T y = \sum_{i=1}^n x_i y_i$. Tích vô hướng định nghĩa **độ dài (norm / length)** của một vector là $\|x\| = \sqrt{x^T x} \ge 0$ và góc $\theta$ giữa hai vector khác không qua $\cos\theta = \frac{x^T y}{\|x\|\|y\|}$ (luôn thỏa mãn bất đẳng thức Cauchy–Schwarz $|x^T y| \le \|x\|\|y\|$). Hai vector $x$ và $y$ được gọi là **trực giao / vuông góc (orthogonal)** khi và chỉ khi $x^T y = 0$, tương đương với định lý Pythagoras $\|x + y\|^2 = \|x\|^2 + \|y\|^2$. Mở rộng lên tập hợp, hai không gian con $V$ và $W$ là trực giao nếu mọi vector $v \in V$ đều vuông góc với mọi vector $w \in W$.

Điều này dẫn tới **Định lý cơ bản của Đại số tuyến tính — Phần 2 (Orthogonality of the Four Subspaces)**: trong $\mathbb{R}^n$, không gian hạt nhân $N(A)$ không chỉ có số chiều bù với không gian hàng $C(A^T)$ ($r + (n-r) = n$), mà $N(A)$ chính là **phần bù trực giao (orthogonal complement)** của $C(A^T)$ (ký hiệu $N(A) = C(A^T)^\perp$), bởi vì $Ax = 0$ có nghĩa là $x$ vuông góc với từng hàng của $A$ nên vuông góc với mọi tổ hợp tuyến tính của các hàng. Hoàn toàn đối xứng trong $\mathbb{R}^m$, không gian hạt nhân trái $N(A^T)$ là phần bù trực giao của không gian cột $C(A)$: $N(A^T) = C(A)^\perp$.

> **Nguồn đối chiếu:** `mit-1806sc`: Unit II, Orthogonal Vectors and Subspaces (Fundamental Theorem Part 2: Row Space perp Nullspace)

#### Tiểu mục 2: Phép chiếu trực giao lên không gian con, ma trận chiếu P, Phương trình chuẩn A^T A x_hat = A^T b và hồi quy Bình phương tối thiểu (`la-ols-projections-normal-equations-least-squares` — mức `core`)

Khi hệ phương trình $Ax = b$ có nhiều phương trình hơn số ẩn ($m > n$) và dữ liệu thực nghiệm có nhiễu, vector $b$ hầu như chắc chắn nằm ngoài không gian cột $C(A)$ nên hệ $Ax = b$ vô nghiệm. Thay vì bỏ cuộc, ta tìm vector $\hat{x} \in \mathbb{R}^n$ sao cho điểm $p = A\hat{x} \in C(A)$ nằm gần $b$ nhất theo nghĩa cực tiểu hóa bình phương độ dài vector sai số $\|e\|^2 = \|b - A\hat{x}\|^2 = \sum_{i=1}^m (b_i - (A\hat{x})_i)^2$ — bài toán **Bình phương tối thiểu (Least Squares)**. Về mặt hình học, điểm $p = A\hat{x}$ gần $b$ nhất trên không gian con $C(A)$ chính là **hình chiếu vuông góc (orthogonal projection)** của $b$ xuống $C(A)$, nghĩa là vector sai số $e = b - A\hat{x}$ bắt buộc phải **vuông góc với toàn bộ không gian cột $C(A)$**.

Theo định lý phần bù trực giao vừa học ở tiểu mục trước, một vector vuông góc với $C(A)$ khi và chỉ khi nó nằm trong không gian hạt nhân trái $N(A^T)$, tức là $A^T e = 0 \iff A^T(b - A\hat{x}) = 0$. Khai triển đẳng thức hình học này cho ta **Hệ phương trình chuẩn (Normal Equations)** trứ danh: $$A^T A \hat{x} = A^T b$$ Tiểu mục chứng minh điều kiện áp dụng cực kỳ quan trọng: ma trận vuông đối xứng $A^T A \in \mathbb{R}^{n \times n}$ là **khả nghịch khi và chỉ khi các cột của ma trận $A$ là độc lập tuyến tính** ($\operatorname{rank}(A) = n$, bởi vì $N(A^T A) = N(A)$). Khi đó nghiệm bình phương tối thiểu duy nhất là $\hat{x} = (A^T A)^{-1} A^T b$, hình chiếu là $p = A\hat{x} = A(A^T A)^{-1}A^T b = Pb$, trong đó **ma trận chiếu (projection matrix)** $P = A(A^T A)^{-1}A^T$ luôn thỏa mãn hai tính chất đặc trưng: đối xứng ($P^T = P$) và lũy đẳng ($P^2 = P$ — chiếu thêm lần thứ hai lên cùng mặt phẳng không làm thay đổi hình chiếu). Đây chính là công thức cốt lõi để khớp đường thẳng/đa thức hồi quy tuyến tính qua đám mây điểm dữ liệu.

> **Nguồn đối chiếu:** `mit-1806sc`: Unit II, (Projections onto Subspaces) & (Projection Matrices and Least Squares)

#### Tiểu mục 3: Hệ cơ sở trực chuẩn (Orthonormal Basis), ma trận trực giao Q^T Q = I, quá trình Gram–Schmidt và phân rã A = QR (`la-ols-orthonormal-bases-gram-schmidt-qr` — mức `core`)

Mọi phép tính hình chiếu và tọa độ đều trở nên đơn giản triệt để nếu các vector cơ sở $q_1, q_2, \dots, q_n$ đôi một vuông góc với nhau ($q_i^T q_j = 0$ khi $i \neq j$) và đều có độ dài đơn vị ($\|q_i\| = 1$) — gọi là một **hệ trực chuẩn (orthonormal system)**. Khi ghép các cột trực chuẩn $q_1, \dots, q_n$ thành ma trận $Q \in \mathbb{R}^{m \times n}$, ta luôn có $Q^T Q = I_n$ (nếu $Q$ là ma trận vuông $n \times n$, nó được gọi là **ma trận trực giao / orthogonal matrix** với $Q^T = Q^{-1}$, bảo toàn độ dài $\|Qx\| = \|x\|$ và góc giữa mọi vector như phép quay và phản xạ). Với cột trực chuẩn, ma trận $Q^T Q = I$ biến hệ phương trình chuẩn bình phương tối thiểu phức tạp thành phép nhân tức thời $\hat{x} = Q^T b$ mà không cần giải hệ hay nghịch đảo ma trận nào!

Làm thế nào để biến một hệ các cột độc lập tuyến tính $a_1, a_2, \dots, a_n$ bất kỳ thành một hệ trực chuẩn $q_1, q_2, \dots, q_n$ sinh ra cùng không gian cột? **Quá trình trực chuẩn hóa Gram–Schmidt** thực hiện tuần tự: giữ hướng của $a_1$ và chia cho độ dài của nó để được $q_1 = a_1 / \|a_1\|$; ở bước thứ $k$, lấy vector $a_k$ **trừ đi các hình chiếu của nó lên tất cả các hướng trực chuẩn đã xây dựng trước đó** $q_1, \dots, q_{k-1}$ để giữ lại đúng phần dư vuông góc hoàn toàn mới: $$A_k = a_k - \sum_{j=1}^{k-1} (q_j^T a_k) q_j, \qquad q_k = \frac{A_k}{\|A_k\|}$$ Viết ngược lại mối liên hệ tổ hợp tuyến tính giữa $a_k$ và $q_1, \dots, q_k$ dưới dạng ma trận (với $r_{jk} = q_j^T a_k = 0$ khi $j > k$), toàn bộ quá trình Gram–Schmidt được đóng gói thành **Phân rã $A = QR$**, trong đó $Q$ có các cột trực chuẩn và $R$ là ma trận tam giác trên khả nghịch. Thay $A = QR$ vào phương trình chuẩn cho thấy $A^T A \hat{x} = A^T b$ rút gọn thành hệ tam giác trên bền vững về mặt số học: $R\hat{x} = Q^T b$.

> **Nguồn đối chiếu:** `mit-1806sc`: Unit II, Orthogonal Matrices and Gram–Schmidt ($Q^T Q = I$ and $A = QR$ Factorization)

### Chương 5 — Định thức (Determinants), Trị riêng và Vector riêng (Eigenvalues & Eigenvectors) và Chéo hóa ma trận (`la-determinants-eigenvalues`)

Chương này chuyển từ các bài toán tĩnh ($Ax = b$) sang các bài toán động lực ($A^k x_0$ và hệ phương trình vi phân/sai phân): làm thế nào để hiểu định thức như hệ số co giãn thể tích có hướng, tìm những phương đặc biệt trong không gian mà khi ma trận $A$ tác động lên chỉ bị co giãn theo một hệ số $\lambda$ ($Ax = \lambda x$) chứ không bị đổi hướng, và chéo hóa ma trận $A = S\Lambda S^{-1}$.

*Nguồn chương:* `mit-1806sc` (Unit II: determinant and eigenvalue lecture pages (Properties of Determinants, Cofactor Formulas and Volume, Eigenvalues and Eigenvectors, Diagonalization and Powers of A, Markov Matrices))

#### Tiểu mục 1: Ba tiên đề xác định Định thức det(A), các tính chất đại số và ý nghĩa hình học là hệ số co giãn thể tích có hướng (`la-de-determinant-properties-geometric-volume` — mức `core`)

Thay vì mở đầu bằng công thức tổng hoán vị rối rắm, định thức $\det(A)$ của một ma trận vuông $A \in \mathbb{R}^{n \times n}$ được xác định duy nhất từ **ba tính chất nền tảng**: (1) Định thức của ma trận đơn vị bằng $1$ ($\det(I) = 1$); (2) Đổi chỗ hai hàng làm định thức đổi dấu; và (3) Định thức là hàm tuyến tính theo từng hàng riêng lẻ. Từ ba quy tắc này suy ra toàn bộ các tính chất cốt lõi: nếu hai hàng bằng nhau thì $\det(A) = 0$; lấy một hàng trừ đi bội số của hàng khác (bước khử Gauss) **không làm thay đổi định thức**; do đó nếu khử Gauss với $k$ lần đổi chỗ hàng đưa $A$ về ma trận tam giác trên $U$, thì định thức tính được ngay trong $O(n^3)$ bằng **tích các phần tử chốt trên đường chéo**: $\det(A) = (-1)^k u_{11} u_{22} \cdots u_{nn}$. Nhờ vậy, $A$ khả nghịch khi và chỉ khi $\det(A) \neq 0$, định thức của tích bằng tích các định thức $\det(AB) = \det(A)\det(B)$, và $\det(A^T) = \det(A)$.

Về mặt ý nghĩa hình học, trị tuyệt đối $|\det(A)|$ chính là **thể tích $n$ chiều của hình hộp (parallelepiped)** tạo bởi các hàng (hoặc các cột) của $A$ — đồng thời là **hệ số phóng đại thể tích (volume scaling factor)** khi ánh xạ tuyến tính $x \mapsto Ax$ biến đổi một miền bất kỳ trong không gian (đó là lý do vì sao khi đổi biến trong tích phân bội ở Môn CS-12 hay đổi biến mật độ xác suất ở Môn CS-13, phần tử thể tích luôn phải nhân với trị tuyệt đối định thức Jacobian $|\det J|$). Dấu của $\det(A)$ cho biết phép biến đổi bảo toàn định hướng không gian ($\det(A) > 0$, như phép quay) hay lật ngược định hướng gương ($\det(A) < 0$, như phép phản xạ).

> **Nguồn đối chiếu:** `mit-1806sc`: Unit II, Properties of Determinants, Determinant Formulas and Cofactors, Cramer’s Rule, Inverse Matrix, and Volume

#### Tiểu mục 2: Trị riêng (Eigenvalues), Vector riêng (Eigenvectors), đa thức đặc trưng det(A - lambda I) = 0, Vết (Trace) và Định thức (`la-de-eigenvalues-eigenvectors-characteristic` — mức `core`)

Hầu hết các vector $x$ khi nhân với ma trận vuông $A$ đều bị xoay sang một phương khác; tuy nhiên, những vector **khác không ($x \neq \mathbf{0}$)** mà sau khi nhân với $A$ vẫn nằm trên đúng đường thẳng phương ban đầu của chính nó được gọi là các **vector riêng (eigenvectors)** của $A$, và hệ số co giãn $\lambda$ tương ứng được gọi là **trị riêng (eigenvalue)**: $$Ax = \lambda x \iff (A - \lambda I)x = \mathbf{0} \quad (x \neq \mathbf{0})$$ Phương trình $(A - \lambda I)x = \mathbf{0}$ có nghiệm khác không $x \in N(A - \lambda I)$ khi và chỉ khi ma trận $(A - \lambda I)$ bị suy biến (không khả nghịch), tức là $\lambda$ phải là nghiệm của **phương trình đặc trưng (characteristic equation)** bậc $n$: $$\det(A - \lambda I) = 0$$ Sau khi giải tìm được mỗi trị riêng $\lambda_i$, không gian con riêng (eigenspace) tương ứng được tìm bằng cách giải hệ thuần nhất $(A - \lambda_i I)x = \mathbf{0}$.

Tiểu mục làm rõ hai bất biến kiểm tra cực kỳ hữu ích nối các hệ số của ma trận $A$ với toàn bộ $n$ trị riêng $\lambda_1, \lambda_2, \dots, \lambda_n$ (tính cả bội đại số): **Tổng tất cả các trị riêng luôn bằng Vết của ma trận (Trace — tổng các phần tử trên đường chéo chính)**: $\sum_{i=1}^n \lambda_i = \operatorname{tr}(A) = \sum_{i=1}^n a_{ii}$; và **Tích tất cả các trị riêng luôn bằng Định thức của ma trận**: $\prod_{i=1}^n \lambda_i = \det(A)$. Tiểu mục cũng chỉ ra rằng một ma trận có các phần tử hoàn toàn là số thực vẫn có thể có các cặp **trị riêng phức liên hợp** $\lambda = a \pm bi$ (điển hình là ma trận quay $90^\circ$ $\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$ không giữ nguyên phương của bất kỳ vector thực nào và có phương trình đặc trưng $\lambda^2 + 1 = 0 \implies \lambda = \pm i$, biểu thị sự xuất hiện của chuyển động quay/dao động).

> **Nguồn đối chiếu:** `mit-1806sc`: Unit II, Eigenvalues and Eigenvectors ($det(A - \lambda I) = 0$, Trace, Determinant, and Complex Eigenvalues)

#### Tiểu mục 3: Điều kiện Chéo hóa ma trận A = S Lambda S^{-1}, tính lũy thừa A^k cho hệ động lực u_{k+1} = A u_k và Ma trận Markov (`la-de-diagonalization-matrix-powers-markov` — mức `core`)

Giả sử ma trận $A \in \mathbb{R}^{n \times n}$ có đủ **$n$ vector riêng độc lập tuyến tính** $x_1, x_2, \dots, x_n$. Khi xếp $n$ vector riêng đó thành các cột của ma trận $S = \begin{bmatrix} x_1 & x_2 & \cdots & x_n \end{bmatrix}$, tính độc lập tuyến tính đảm bảo $S$ khả nghịch, và phép nhân theo cột $AS = \begin{bmatrix} \lambda_1 x_1 & \cdots & \lambda_n x_n \end{bmatrix} = S \Lambda$ (với $\Lambda = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$ là ma trận đường chéo chứa các trị riêng) dẫn tới **Phân rã chéo hóa (Diagonalization)**: $$A = S \Lambda S^{-1} \iff S^{-1} A S = \Lambda$$ Khi nâng lên lũy thừa bậc $k$, các cặp $S^{-1}S = I$ ở giữa tự động triệt tiêu nhau: $A^k = (S\Lambda S^{-1})(S\Lambda S^{-1})\cdots(S\Lambda S^{-1}) = S \Lambda^k S^{-1}$, trong đó $\Lambda^k = \operatorname{diag}(\lambda_1^k, \dots, \lambda_n^k)$. Đối với bài toán hệ động lực rời rạc $u_{k+1} = A u_k \implies u_k = A^k u_0$, nếu khai triển trạng thái đầu theo cơ sở vector riêng $u_0 = c_1 x_1 + \dots + c_n x_n$ (với $c = S^{-1}u_0$), thì trạng thái ở bước thứ $k$ được tách rời hoàn toàn thành: $$u_k = c_1 \lambda_1^k x_1 + c_2 \lambda_2^k x_2 + \dots + c_n \lambda_n^k x_n$$ (đây cũng chính là cách đại số tuyến tính giải hệ thức đệ quy bậc cao như Fibonacci $F_{k+1} = F_k + F_{k-1}$ bằng cách đặt vector trạng thái $u_k = (F_{k+1}, F_k)^T$). Khi $k \to \infty$, hệ tiến về $0$ nếu mọi $|\lambda_i| < 1$, bùng nổ nếu có $|\lambda_i| > 1$, và tiến về trạng thái dừng (steady state) nếu trị riêng trội có $\lambda_1 = 1$ và các $|\lambda_i| < 1$ còn lại tắt dần.

Tiểu mục nhấn mạnh rõ **điều kiện áp dụng và giới hạn của chéo hóa**: (1) Khả năng chéo hóa ($A$ có đủ $n$ vector riêng độc lập) và khả năng nghịch đảo ($\det A \neq 0$, không có trị riêng $\lambda = 0$) là **hai tính chất hoàn toàn độc lập nhau**; (2) Nếu mọi $n$ trị riêng đều phân biệt ($\lambda_i \neq \lambda_j$) thì các vector riêng tương ứng chắc chắn độc lập tuyến tính và $A$ luôn chéo hóa được; nhưng nếu có **trị riêng lặp (repeated eigenvalues)**, số vector riêng độc lập tìm được từ $N(A - \lambda I)$ (bội hình học — geometric multiplicity) có thể **nhỏ hơn** số lần lặp của nghiệm trong đa thức đặc trưng (bội đại số — algebraic multiplicity), chẳng hạn ma trận $\begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$ có $\lambda = 1$ bội 2 nhưng chỉ có 1 đường thẳng vector riêng nên **không chéo hóa được** (defective matrix). Cuối cùng, tiểu mục giới thiệu **Ma trận chuyển trạng thái Markov** (mọi phần tử $a_{ij} \ge 0$ và tổng mỗi cột bằng $1$): luôn có trị riêng lớn nhất $\lambda_1 = 1$, mọi $|\lambda_i| \le 1$, và vector riêng ứng với $\lambda_1 = 1$ chính là phân phối xác suất dừng (nền tảng của thuật toán xếp hạng trang web PageRank và chuỗi Markov).

> **Nguồn đối chiếu:** `mit-1806sc`: Unit II, (Diagonalization and Powers of A) & (Markov Matrices; Fourier Series)

### Chương 6 — Ma trận đối xứng, Định lý phổ (Spectral Theorem), Ma trận xác định dương và Phân rã giá trị kỳ dị (SVD) (`la-symmetric-positive-definite-svd`)

Chương cuối đưa người học tới những cấu trúc ma trận đẹp nhất và có ứng dụng rộng nhất trong học máy, tối ưu hóa và khoa học dữ liệu hiện đại: ma trận thực đối xứng ($A = A^T$) luôn chéo hóa trực giao được ($A = Q\Lambda Q^T$), ma trận xác định dương ($x^T A x > 0$) đóng vai trò "số dương" của thế giới ma trận, và Phân rã giá trị kỳ dị $A = U\Sigma V^T$ chéo hóa được **mọi ma trận** chữ nhật bất kỳ.

*Nguồn chương:* `mit-1806sc` (Unit III: Positive Definite Matrices and Applications (Symmetric Matrices, Positive Definite Matrices and Minima, Singular Value Decomposition SVD, and Pseudoinverses))

#### Tiểu mục 1: Ma trận thực đối xứng (A = A^T) và Định lý phổ (Spectral Theorem): Trị riêng thực, Vector riêng trực chuẩn và A = Q Lambda Q^T (`la-spds-symmetric-matrices-spectral-theorem` — mức `core`)

Một ma trận vuông thực $A \in \mathbb{R}^{n \times n}$ thỏa mãn $A^T = A$ (phần tử đối xứng qua đường chéo bằng nhau $a_{ij} = a_{ji}$) sở hữu hai tính chất kỳ diệu mà ma trận vuông tổng quát không có: (1) **Tất cả các trị riêng của ma trận thực đối xứng đều là số thực** (không bao giờ có phần ảo khác 0); và (2) **Các vector riêng ứng với các trị riêng khác nhau luôn vuông góc với nhau**, hơn nữa ngay cả khi có trị riêng lặp bội $k$, không gian con riêng của nó vẫn luôn có đủ đúng $k$ chiều để chọn được một cơ sở trực chuẩn (ma trận thực đối xứng không bao giờ bị suy biến thiếu vector riêng!).

Vì luôn chọn được đủ $n$ vector riêng đôi một trực chuẩn $q_1, \dots, q_n$, ma trận vector riêng $S$ trong phân rã chéo hóa $A = S\Lambda S^{-1}$ trở thành một ma trận trực giao $Q$ (với $Q^{-1} = Q^T$). Ta thu được **Định lý phổ (Spectral Theorem)**: mọi ma trận thực đối xứng $A$ đều phân rã được thành tích trực giao và tổng của $n$ ma trận chiếu hạng 1 vuông góc nhau: $$A = Q \Lambda Q^T = \sum_{i=1}^n \lambda_i q_i q_i^T$$ Định lý phổ là trụ cột lý thuyết để phân tích ma trận hiệp phương sai (covariance matrix) trong Phân tích thành phần chính (PCA) và ma trận đạo hàm bậc hai Hessian trong tối ưu hóa.

> **Nguồn đối chiếu:** `mit-1806sc`: Unit III, Symmetric Matrices and Positive Definiteness (Real eigenvalues, perpendicular eigenvectors, $A = Q\Lambda Q^T$)

#### Tiểu mục 2: Dạng toàn phương x^T A x, Ma trận xác định dương (Positive Definite) / nửa xác định dương và bốn tiêu chuẩn tương đương (`la-spds-positive-definite-quadratic-forms` — mức `core`)

Với một ma trận thực đối xứng $A = A^T \in \mathbb{R}^{n \times n}$, hàm bậc hai $f(x) = x^T A x = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j$ được gọi là **dạng toàn phương (quadratic form)** gắn với $A$. Ma trận đối xứng $A$ được gọi là **xác định dương (Positive Definite — PD)** nếu năng lượng dạng toàn phương của nó thực sự dương với mọi vector khác không: $$x^T A x > 0, \quad \forall x \in \mathbb{R}^n \setminus \{\mathbf{0}\}$$ (Nếu điều kiện làm yếu thành $x^T A x \ge 0$ với mọi $x$, $A$ được gọi là **nửa xác định dương / Positive Semidefinite — PSD**). Về mặt hình học giải tích, đồ thị của $z = x^T A x$ khi $A$ xác định dương có hình chiếc bát paraboloid hướng bề lõm lên trên với điểm cực tiểu toàn cục chặt duy nhất tại $x = \mathbf{0}$, và các mặt mức $x^T A x = c > 0$ là các mặt cầu dẹt (ellipsoids) có các trục chính nằm dọc theo các vector riêng trực chuẩn $q_i$ của $A$.

Tiểu mục trình bày **bốn tiêu chuẩn tương đương** để nhận biết một ma trận đối xứng $A$ là xác định dương mà không cần thử mọi vector $x$: (1) **Tất cả $n$ trị riêng đều dương** ($\lambda_i > 0$); (2) **Tất cả $n$ phần tử chốt (pivots)** trong khử Gauss (không cần đổi hàng) đều dương; (3) **Tất cả $n$ định thức con chính dẫn đầu (leading principal minors)** ở góc trên bên trái cấp $1 \times 1, 2 \times 2, \dots, n \times n$ đều dương (Tiêu chuẩn Sylvester); và (4) **$A$ phân tích được dưới dạng $A = R^T R$** với $R$ là một ma trận có các cột độc lập tuyến tính (nếu các cột của $R$ phụ thuộc tuyến tính thì $R^T R$ luôn là ma trận nửa xác định dương PSD vì $x^T R^T R x = \|Rx\|^2 \ge 0$).

> **Nguồn đối chiếu:** `mit-1806sc`: Unit III, Positive Definite Matrices and Minima (Quadratic forms, ellipsoids, eigenvalues/pivots/determinants tests, $R^T R$)

#### Tiểu mục 3: Phân rã giá trị kỳ dị (SVD: A = U Sigma V^T), xấp xỉ hạng thấp Eckart–Young và Giả nghịch đảo Moore–Penrose A^+ (`la-spds-svd-low-rank-pseudoinverse` — mức `core`)

Phân rã chéo hóa $A = Q\Lambda Q^T$ chỉ áp dụng được cho ma trận **vuông và đối xứng**. Vậy với một ma trận dữ liệu chữ nhật bất kỳ $A \in \mathbb{R}^{m \times n}$ (có thể $m \neq n$ và bị suy biến hạng $r$), làm thế nào để chéo hóa nó bằng các cơ sở trực chuẩn? Ý tưởng xuất phát từ việc cho phép chọn **hai bộ cơ sở trực chuẩn khác nhau**: một cơ sở trực chuẩn $v_1, \dots, v_n$ trong không gian đầu vào $\mathbb{R}^n$ và một cơ sở trực chuẩn $u_1, \dots, u_m$ trong không gian đầu ra $\mathbb{R}^m$ sao cho $A v_i = \sigma_i u_i$. Bằng cách xét ma trận đối xứng nửa xác định dương $A^T A \in \mathbb{R}^{n \times n}$, ta chọn $V = \begin{bmatrix} v_1 & \cdots & v_n \end{bmatrix}$ là các vector riêng trực chuẩn của $A^T A$ ứng với các trị riêng $\lambda_1 \ge \dots \ge \lambda_r > 0$ (và $\lambda_{r+1} = \dots = \lambda_n = 0$), đặt các **giá trị kỳ dị (singular values)** $\sigma_i = \sqrt{\lambda_i} > 0$, và đặt $u_i = \frac{1}{\sigma_i} A v_i$ (là các vector riêng trực chuẩn của $AA^T$). Kết quả là **Phân rã giá trị kỳ dị (Singular Value Decomposition — SVD)** tồn tại cho **mọi ma trận $A \in \mathbb{R}^{m \times n}$**: $$A = U \Sigma V^T = \sum_{i=1}^r \sigma_i u_i v_i^T$$ trong đó $U \in \mathbb{R}^{m \times m}$ trực giao, $V \in \mathbb{R}^{n \times n}$ trực giao, và $\Sigma \in \mathbb{R}^{m \times n}$ chỉ có các số dương $\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_r > 0$ trên đường chéo. Hơn nữa, SVD phơi bày trực tiếp cơ sở trực chuẩn của cả **Bốn không gian con cơ bản**: $r$ cột đầu của $V$ là cơ sở trực chuẩn của $C(A^T)$, $n-r$ cột cuối của $V$ là cơ sở trực chuẩn của $N(A)$, $r$ cột đầu của $U$ là cơ sở trực chuẩn của $C(A)$, và $m-r$ cột cuối của $U$ là cơ sở trực chuẩn của $N(A^T)$.

Từ khai triển tổng các ma trận hạng 1 $\sum_{i=1}^r \sigma_i u_i v_i^T$ được sắp theo thứ tự giảm dần của $\sigma_i$, việc chỉ giữ lại $k < r$ số hạng lớn nhất $A_k = \sum_{i=1}^k \sigma_i u_i v_i^T$ cho ra **xấp xỉ hạng $k$ tốt nhất (Eckart–Young Theorem)** của ma trận $A$ (ứng dụng trực tiếp trong giảm chiều dữ liệu PCA, hệ gợi ý và nén ma trận trọng số). Cuối cùng, khi $A$ không vuông hoặc suy biến ($r < n$) khiến $(A^T A)^{-1}$ không tồn tại, SVD định nghĩa **Giả nghịch đảo Moore–Penrose (Pseudoinverse) $A^+ = V \Sigma^+ U^T$** (trong đó $\Sigma^+$ đảo chiều $\Sigma$ và nghịch đảo các $\sigma_i > 0$ thành $1/\sigma_i$, giữ nguyên các số $0$): vector $x^+ = A^+ b$ chính là nghiệm bình phương tối thiểu có độ dài chuẩn $\|x^+\|$ nhỏ nhất.

> **Nguồn đối chiếu:** `mit-1806sc`: Unit III: Singular Value Decomposition; Left and Right Inverses; Pseudoinverse

---

## CS-11: Giải tích một biến (`single-variable-calculus`)

- **Thuộc khối:** Khối II — Lập trình và toán nền CS
- **Phân loại:** `core`
- **Điều kiện tiên quyết:**
  - `math-bridge` (*required*): Cần nắm vững hàm số, miền xác định, hợp hàm, hàm ngược, đa thức, hàm mũ, logarit và lượng giác từ Môn CS-02.

### Tổng quan môn học

Môn học xây dựng bộ công cụ toán học để phân tích sự biến thiên liên tục, tốc độ tích lũy và xấp xỉ hàm số — nền tảng không thể thiếu cho tối ưu hóa học máy, phân tích tiệm cận thuật toán, xác suất liên tục và tính toán khoa học. Theo cấu trúc của MIT 18.01SC, môn học mở đầu từ khái niệm giới hạn hữu hạn và giới hạn tại vô cùng, tính liên tục, và định nghĩa đạo hàm như giới hạn của tỉ số biến thiên $\lim_{\Delta x \to 0} \frac{f(x+\Delta x)-f(x)}{\Delta x}$, kết nối trực tiếp ý nghĩa hình học (hệ số góc tiếp tuyến) với ý nghĩa tính toán (xấp xỉ tuyến tính cục bộ).

Từ các quy tắc tính đạo hàm, quy tắc dây chuyền (chain rule) cho hàm hợp và đạo hàm của hàm ngược ($\ln x, \arctan x$), môn học phát triển lý thuyết cực trị hàm một biến, tính lồi/lõm (convexity — khái niệm trụ cột của tối ưu hóa), quy tắc L’Hôpital để so sánh bậc tăng trưởng tiệm cận, và thuật toán lặp số học Newton–Raphson tìm nghiệm. Nửa sau của môn học xây dựng tổng Riemann, tích phân xác định, hai phần của **Định lý cơ bản của giải tích (Fundamental Theorem of Calculus)** nối liền đạo hàm với tích phân, các kỹ thuật đổi biến và tích phân từng phần, **tích phân suy rộng** trên miền vô hạn (dùng trực tiếp cho cận kẹp tổng ở `CS-09` và biến ngẫu nhiên liên tục ở `CS-13`), rồi kết thúc bằng sự hội tụ của chuỗi số vô hạn và **khai triển chuỗi Taylor/Maclaurin kèm phần dư Lagrange**.

### Giới hạn học thuật (`boundaries`)

- Không cắt bỏ phần tích phân suy rộng và chuỗi Taylor/Maclaurin vì đây là cơ sở trực tiếp để chứng minh cận tổng tích phân (`CS-09`), hàm mật độ xác suất chuẩn/mũ (`CS-13`) và xấp xỉ bậc hai trong tối ưu hóa (`CS-12`, `CS-36`).
- Các kỹ thuật tích phân phân thức hữu tỉ bậc cao phức tạp hoặc đổi biến lượng giác đặc thù ít xuất hiện trong Khoa học Máy tính được thu gọn và đánh dấu ở mức mở rộng (`extension`).

### Nguồn giáo trình của môn học

- **Single Variable Calculus (MIT 18.01SC)** (`mit-1801sc`, *primary*): Units 1–5: Differentiation; Applications of Differentiation; The Definite Integral and its Applications; Techniques of Integration; Exploring the Infinite (L’Hospital and Improper Integrals, Sessions 87–93; Taylor Series, Sessions 94–101) — URL: https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/syllabus/

### Chương 1 — Giới hạn, Tính liên tục và Khái niệm Đạo hàm (`svc-limits-continuity-derivatives`)

Chương mở đầu chuyển từ tốc độ thay đổi trung bình trên một khoảng hữu hạn $\Delta x$ (đã biết ở Môn CS-02) sang tốc độ thay đổi tức thời tại một điểm bằng công cụ giới hạn một phía/hai phía và tính liên tục, đồng thời phân biệt tính liên tục với tính khả vi tại các điểm gãy góc và thiết lập bảng đạo hàm của các hàm sơ cấp từ định nghĩa.

*Nguồn chương:* `mit-1801sc` (Unit 1, Part A: Definition and Basic Rules (Sessions 1–12); Part B: Implicit Differentiation and Inverse Functions (Sessions 13–20))

#### Tiểu mục 1: Khái niệm giới hạn một phía/hai phía, giới hạn tại vô cùng, tính liên tục và Định lý giá trị trung gian (IVT) (`svc-lcd-limits-continuity-ivt` — mức `core`)

Ký hiệu giới hạn $\lim_{x \to a} f(x) = L$ diễn đạt rằng giá trị $f(x)$ có thể tiến gần tùy ý tới số thực $L$ miễn là $x$ tiến đủ gần tới $a$ (nhưng $x \neq a$) từ cả hai phía trái ($x \to a^-$) và phải ($x \to a^+$); giới hạn hai phía chỉ tồn tại khi và chỉ khi cả hai giới hạn một phía đều tồn tại và bằng nhau. Khi xét $x \to \infty$, giới hạn mô tả hành vi tiệm cận của hàm số ở quy mô lớn — cơ sở trực tiếp để định nghĩa các ký hiệu $o(g(n))$, $\omega(g(n))$ và $\Theta(g(n))$ trong phân tích thuật toán. Một hàm số $f$ được gọi là **liên tục tại $x = a$** nếu $\lim_{x \to a} f(x) = f(a)$ (hàm xác định tại $a$, có giới hạn hữu hạn khi $x \to a$, và giá trị giới hạn khớp đúng với giá trị hàm tại điểm đó; không có bước nhảy đứt đoạn hay tiệm cận đứng).

Trên một đoạn đóng hữu hạn $[a, b]$, mọi hàm liên tục đều thỏa mãn hai định lý nền tảng của giải tích và tính toán số: (1) **Định lý Giá trị trung gian (Intermediate Value Theorem — IVT)**: nếu $f$ liên tục trên $[a, b]$ và $f(a)$ trái dấu với $f(b)$ ($f(a)\cdot f(b) < 0$), thì chắc chắn tồn tại ít nhất một nghiệm $c \in (a, b)$ sao cho $f(c) = 0$ — đây chính là cơ sở chứng minh tính đúng đắn của **thuật toán chia đôi tìm nghiệm (bisection method)**; và (2) **Định lý Giá trị cực trị Weierstrass (Extreme Value Theorem)**: mọi hàm liên tục trên đoạn đóng và bị chặn $[a, b]$ đều đạt được giá trị lớn nhất toàn cục (global maximum) và giá trị nhỏ nhất toàn cục (global minimum) trên đoạn đó.

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 1, Sessions 4–5: Limits and Continuity; Discontinuity (foundations for intermediate and extreme value properties)

#### Tiểu mục 2: Định nghĩa Đạo hàm như giới hạn của tỉ số sai phân, ý nghĩa tiếp tuyến/vận tốc và quan hệ giữa Khả vi với Liên tục (`svc-lcd-derivative-definition-differentiability` — mức `core`)

Trên khoảng $[x, x + \Delta x]$, tốc độ thay đổi trung bình của hàm $f$ là hệ số góc của dây cung (secant line) $\frac{\Delta y}{\Delta x} = \frac{f(x + \Delta x) - f(x)}{\Delta x}$. Khi cho độ rộng bước $\Delta x \to 0$, nếu giới hạn hữu hạn tồn tại thì giới hạn đó được định nghĩa là **đạo hàm (derivative)** của $f$ tại $x$: $$f'(x) = \frac{df}{dx} = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}$$ Về mặt hình học, $f'(x_0)$ là hệ số góc của đường thẳng tiếp tuyến (tangent line) $y = f(x_0) + f'(x_0)(x - x_0)$ ôm sát đồ thị tại điểm $(x_0, f(x_0))$; về mặt mô hình hóa, $f'(x)$ là tốc độ thay đổi tức thời (instantaneous rate of change) cho biết độ nhạy của đầu ra $f(x)$ khi đầu vào $x$ dịch chuyển một lượng vô cùng nhỏ.

Tiểu mục nhấn mạnh chiều suy luận một chiều giữa tính khả vi (differentiability — tồn tại đạo hàm hữu hạn) và tính liên tục: **nếu hàm $f$ khả vi tại $x_0$ thì nó bắt buộc phải liên tục tại $x_0$** (vì $f(x_0 + \Delta x) - f(x_0) = \frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}\cdot \Delta x \to f'(x_0)\cdot 0 = 0$); nhưng **ngược lại không đúng**: một hàm hoàn toàn liên tục vẫn có thể **không khả vi** tại những điểm gãy góc nhọn (corner/kink, nơi đạo hàm trái khác đạo hàm phải) hoặc tiếp tuyến thẳng đứng. Ví dụ quan trọng nhất trong Khoa học Máy tính là hàm trị tuyệt đối $f(x) = |x|$ và hàm kích hoạt mạng nơ-ron $\operatorname{ReLU}(x) = \max(0, x)$: cả hai đều liên tục tại $x = 0$, nhưng tại $x = 0$ đạo hàm trái (bằng $-1$ hoặc $0$) khác đạo hàm phải (bằng $+1$), nên đạo hàm $f'(0)$ không tồn tại theo nghĩa cổ điển.

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 1, Sessions 1–5: Introduction to Derivatives, Examples, Rate of Change, Limits and Continuity, and Discontinuity

#### Tiểu mục 3: Quy tắc đạo hàm của tổng, tích (Product Rule), thương (Quotient Rule), đa thức, lượng giác và tính chất đặc trưng của e^x (`svc-lcd-differentiation-rules-elementary` — mức `core`)

Từ định nghĩa giới hạn của tỉ số sai phân, tiểu mục dẫn xuất các quy tắc đại số cho phép tính đạo hàm của tổ hợp hàm mà không cần tính lại giới hạn từ đầu: tính chất tuyến tính $(af + bg)' = af' + bg'$, đạo hàm của lũy thừa $(x^n)' = n x^{n-1}$, **Quy tắc đạo hàm của tích (Product Rule)** $(uv)' = u'v + uv'$ (xuất phát từ việc diện tích hình chữ nhật $(u + \Delta u)(v + \Delta v) - uv = v\,\Delta u + u\,\Delta v + \Delta u\,\Delta v$ mà phần góc $\Delta u\,\Delta v$ là vô cùng bé bậc cao), và **Quy tắc đạo hàm của thương (Quotient Rule)** $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ khi $v(x) \neq 0$.

Đối với các hàm siêu việt, sử dụng giới hạn lượng giác cơ bản $\lim_{\theta \to 0} \frac{\sin\theta}{\theta} = 1$ (khi $\theta$ đo bằng radian!) suy ra $(\sin x)' = \cos x$ và $(\cos x)' = -\sin x$. Đối với hàm mũ $a^x$ ($a > 0$), định nghĩa đạo hàm cho $(a^x)' = a^x \cdot \lim_{\Delta x \to 0} \frac{a^{\Delta x} - 1}{\Delta x}$; cơ số tự nhiên **$e \approx 2.71828\dots$** được định nghĩa chính xác là cơ số duy nhất làm cho hệ số tỉ lệ tại $x = 0$ bằng đúng $1$ ($\lim_{h \to 0} \frac{e^h - 1}{h} = 1$), nhờ đó hàm mũ tự nhiên $f(x) = e^x$ bằng chính đạo hàm của nó: $(e^x)' = e^x$. Cuối cùng, tiểu mục giới thiệu đạo hàm cấp hai $f''(x) = \frac{d^2 f}{dx^2}$ và đạo hàm cấp $k$ $f^{(k)}(x)$ đo tốc độ thay đổi của chính đạo hàm.

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 1, Sessions 6–12: Calculating Derivatives, Sine and Cosine, Product Rule, Quotient Rule, Chain Rule, and Higher Derivatives; Part B: Exponential Functions

### Chương 2 — Quy tắc dây chuyền (Chain Rule), Đạo hàm hàm ngược và Xấp xỉ tuyến tính / bậc hai (`svc-chain-rule-approximations`)

Chương này trang bị quy tắc tính đạo hàm quan trọng nhất đối với Khoa học Máy tính và Học máy: quy tắc dây chuyền cho hàm hợp $(f(g(x)))'$, cách tìm đạo hàm của các hàm ngược ($\ln x$, $a^x$, $\arcsin x$, $\arctan x$), và sử dụng đạo hàm bậc nhất/bậc hai để xấp xỉ hàm phức tạp quanh một điểm kèm đánh giá sai số.

*Nguồn chương:* `mit-1801sc` (Unit 1, Session 11: Chain Rule; Part B: Implicit Differentiation and Inverse Functions; Unit 2, Part A: Approximation and Curve Sketching (Sessions 23–28))

#### Tiểu mục 1: Quy tắc dây chuyền (Chain Rule) cho hàm hợp y = f(u(x)): cơ chế nhân hệ số nhạy cảm qua các tầng (`svc-cra-chain-rule-composite` — mức `core`)

Khi một hàm phức hợp được tạo thành từ việc ghép nối liên tiếp hai ánh xạ $x \mapsto u = g(x) \mapsto y = f(u)$, một biến thiên nhỏ $\Delta x$ ở đầu vào gây ra biến thiên $\Delta u \approx g'(x)\,\Delta x$ ở biến trung gian, và biến thiên $\Delta u$ đó lại được tầng thứ hai khuếch đại thành $\Delta y \approx f'(u)\,\Delta u \approx f'(g(x))\cdot g'(x)\,\Delta x$. Lấy giới hạn khi $\Delta x \to 0$ (khi cả $g$ khả vi tại $x$ và $f$ khả vi tại $u = g(x)$), ta thu được **Quy tắc dây chuyền (Chain Rule)**: $$(f \circ g)'(x) = f'(g(x)) \cdot g'(x) \quad \text{hay dưới ký hiệu Leibniz:} \quad \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

Với chuỗi hợp gồm $m$ tầng $y = f_m(f_{m-1}(\dots f_1(x)\dots))$, đạo hàm tổng thể từ đầu vào $x$ tới đầu ra $y$ chính là **tích của các đạo hàm cục bộ của từng tầng dọc theo đường truyền**: $\frac{dy}{dx} = \frac{dy}{du_{m-1}} \cdots \frac{du_2}{du_1} \cdot \frac{du_1}{dx}$. Hiểu quy tắc dây chuyền như phép nhân độ nhạy dọc theo chuỗi biến trung gian giúp người học nắm ngay bản chất một chiều của thuật toán **lan truyền ngược (backpropagation)** và đạo hàm tự động (automatic differentiation) sẽ được mở rộng lên đồ thị nhiều biến ở Môn CS-12 và CS-37.

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 1, Part A, Session 11: Chain Rule

#### Tiểu mục 2: Đạo hàm hàm ẩn, đạo hàm hàm ngược (ln x, arctan x) và kỹ thuật lấy đạo hàm qua logarit (`svc-cra-implicit-inverse-logarithmic-derivatives` — mức `core`)

Áp dụng trực tiếp quy tắc dây chuyền vào đẳng thức định nghĩa của hàm ngược $f(f^{-1}(y)) = y$ bằng cách lấy đạo hàm hai vế theo $y$, ta có $f'(f^{-1}(y)) \cdot (f^{-1})'(y) = 1$, suy ra công thức tổng quát cho **đạo hàm của hàm ngược**: $$(f^{-1})'(y) = \frac{1}{f'(f^{-1}(y))} \quad \text{(với điều kiện } f'(x) \neq 0 \text{ tại } x = f^{-1}(y)\text{)}$$ Áp dụng công thức này cho hàm ngược của $e^x$ là logarit tự nhiên $y = \ln x \iff e^y = x$, ta thu được ngay $(\ln x)' = \frac{1}{e^y} = \frac{1}{x}$ với $x > 0$ (và kết hợp quy tắc dây chuyền: $(\ln |u(x)|)' = \frac{u'(x)}{u(x)}$, $(a^x)' = (e^{x \ln a})' = a^x \ln a$, $(\log_b x)' = \frac{1}{x \ln b}$).

Hoàn toàn tương tự, từ $(\tan \theta)' = 1 + \tan^2 \theta$ và $(\sin \theta)' = \cos \theta = \sqrt{1 - \sin^2 \theta}$, công thức đạo hàm hàm ngược cho ta $(\arctan x)' = \frac{1}{1 + x^2}$ trên toàn bộ $\mathbb{R}$ và $(\arcsin x)' = \frac{1}{\sqrt{1 - x^2}}$ với $|x| < 1$. Tiểu mục cũng trình bày kỹ thuật **lấy đạo hàm qua logarit (logarithmic differentiation)**: khi cần lấy đạo hàm của một tích/thương gồm rất nhiều thừa số hoặc hàm vừa có biến ở cơ số vừa có biến ở số mũ như $y = x^x = e^{x \ln x}$ ($x > 0$), việc lấy $\ln y$ biến tích thành tổng và đưa số mũ xuống dưới giúp tính đạo hàm $\frac{y'}{y} = (\ln y)'$ dễ dàng (ví dụ $(x^x)' = x^x(\ln x + 1)$).

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 1, Part B: Implicit Differentiation and Inverse Functions (Sessions 13–20)

#### Tiểu mục 3: Xấp xỉ tuyến tính (Linearization), Xấp xỉ bậc hai và các công thức xấp xỉ gần 0 thường dùng trong CS (`svc-cra-linear-quadratic-approximations` — mức `core`)

Ở lân cận rất gần một điểm $x_0$, đường cong khả vi $y = f(x)$ gần như trùng khít với đường tiếp tuyến của nó tại $x_0$. Thay đường cong bằng tiếp tuyến cho ta **Xấp xỉ tuyến tính (Linear Approximation / Tangent Line Approximation)**: $$f(x) \approx L(x) = f(x_0) + f'(x_0)(x - x_0)$$ Khi cần xét thêm độ cong để biết đồ thị uốn lên trên hay xuống dưới tiếp tuyến (hoặc khi tại điểm cực trị có $f'(x_0) = 0$ làm xấp xỉ tuyến tính chỉ còn là hằng số phẳng), ta khớp thêm đạo hàm cấp hai $f''(x_0)$ để thu được **Xấp xỉ bậc hai (Quadratic Approximation)**: $$f(x) \approx Q(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2}(x - x_0)^2$$ với sai số còn lại tỉ lệ với $(x - x_0)^3$ khi $x \to x_0$.

Tại gốc $x_0 = 0$ (khi $|x|$ rất nhỏ, $|x| \ll 1$), các xấp xỉ bậc nhất và bậc hai này tạo thành bộ công cụ ước lượng nhanh xuất hiện liên tục trong phân tích thuật toán ngẫu nhiên, xác suất và giải tích tiệm cận: $\ln(1 + x) \approx x - \frac{x^2}{2}$, $e^x \approx 1 + x + \frac{x^2}{2}$ (từ đó giải thích vì sao trong xác suất với $p$ rất nhỏ, $(1 - p)^n = e^{n \ln(1-p)} \approx e^{-np}$), $(1 + x)^r \approx 1 + rx + \frac{r(r-1)}{2}x^2$, $\sin x \approx x$, và $\cos x \approx 1 - \frac{x^2}{2}$.

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 2, Part A, Sessions 23–26: Linear Approximation, Examples, Introduction to Quadratic Approximation, and Using Quadratic Approximations

### Chương 3 — Cực trị hàm một biến, Tính lồi (Convexity), Quy tắc L’Hôpital và Phương pháp Newton–Raphson (`svc-optimization-newton`)

Chương này ứng dụng đạo hàm cấp một và cấp hai để giải quyết ba bài toán lớn: tìm điểm cực đại/cực tiểu địa phương và toàn cục cùng nhận diện hàm lồi (convex function — nơi mọi điểm dừng đều là cực tiểu toàn cục), khử các dạng vô định $0/0$ hoặc $\infty/\infty$ bằng quy tắc L’Hôpital để chứng minh thứ bậc tăng trưởng tiệm cận, và thiết kế thuật toán lặp Newton–Raphson hội tụ bậc hai.

*Nguồn chương:* `mit-1801sc` (Unit 2, Parts A–B: Curve Sketching and Optimization; Part C, Sessions 34–35: Mean Value Theorem; Unit 5, Part A, Sessions 87–90: L’Hospital’s Rule)

#### Tiểu mục 1: Điểm tới hạn (Critical Points), điều kiện cực trị địa phương/toàn cục, tính lồi/lõm (Convexity) và bất đẳng thức Jensen cơ sở (`svc-on-critical-points-extrema-convexity` — mức `core`)

Để tìm điểm cực đại hoặc cực tiểu của một hàm $f$ trên một miền, trước hết ta tìm các **điểm tới hạn (critical points)** — những điểm thuộc miền xác định mà tại đó hoặc **đạo hàm bằng không ($f'(x_0) = 0$, điểm dừng / stationary point)** hoặc **đạo hàm không tồn tại**. Theo Định lý Fermat, nếu $f$ đạt cực trị địa phương tại một điểm nằm bên trong khoảng mở và khả vi tại đó, thì bắt buộc $f'(x_0) = 0$. Tuy nhiên, tiểu mục nhấn mạnh rằng $f'(x_0) = 0$ mới chỉ là **điều kiện cần chứ chưa phải điều kiện đủ** (ví dụ $f(x) = x^3$ có $f'(0) = 0$ nhưng $x = 0$ chỉ là điểm uốn đi ngang chứ không phải cực trị). Để kết luận cực trị địa phương, ta kiểm tra sự đổi dấu của $f'(x)$ khi đi qua $x_0$ (Tiêu chuẩn đạo hàm cấp một) hoặc dùng **Tiêu chuẩn đạo hàm cấp hai**: tại điểm dừng $f'(x_0) = 0$, nếu $f''(x_0) > 0$ thì $x_0$ là **cực tiểu địa phương chặt**, nếu $f''(x_0) < 0$ thì $x_0$ là **cực đại địa phương chặt**, còn nếu $f''(x_0) = 0$ thì tiêu chuẩn bậc hai chưa kết luận được. Khi tìm **cực trị toàn cục (global extrema)** trên đoạn đóng $[a, b]$, ta bắt buộc phải so sánh giá trị của $f$ tại các điểm tới hạn bên trong $(a, b)$ với giá trị tại **hai đầu mút biên $f(a)$ và $f(b)$**.

Đặc biệt quan trọng đối với tối ưu hóa và học máy là khái niệm **Hàm lồi (Convex function)** trên một khoảng $I$: về mặt hình học, mọi dây cung nối hai điểm trên đồ thị đều nằm phía trên hoặc trùng với đồ thị: $$f(\theta x + (1-\theta)y) \le \theta f(x) + (1-\theta)f(y), \quad \forall x, y \in I,\; \forall \theta \in [0, 1]$$ Khi $f$ khả vi hai lần, $f$ là hàm lồi trên $I$ khi và chỉ khi **$f''(x) \ge 0$ với mọi $x \in I$** (và lồi chặt khi $f''(x) > 0$; hàm $-f$ có $f''(x) \le 0$ được gọi là **hàm lõm / concave** như hàm $\ln x$ trên $(0, \infty)$). Tính chất quý giá nhất của hàm lồi khả vi là đồ thị của nó luôn nằm phía trên mọi đường tiếp tuyến ($f(y) \ge f(x) + f'(x)(y - x)$), dẫn tới hệ quả vàng của tối ưu hóa lồi: **với hàm lồi, mọi điểm dừng thỏa mãn $f'(x^*) = 0$ đều tự động là điểm cực tiểu toàn cục (global minimum)**, không bao giờ bị mắc kẹt ở cực tiểu địa phương giả!

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 2, Sessions 27–30: Sketching Graphs and Optimization Problems (first/second derivative and concavity methods)

#### Tiểu mục 2: Định lý giá trị trung bình Lagrange (MVT), Quy tắc L’Hôpital và chứng minh thứ bậc tăng trưởng tiệm cận (log n << n^a << b^n) (`svc-on-mvt-lhopital-asymptotic-rates` — mức `core`)

**Định lý Giá trị trung bình (Mean Value Theorem — MVT)** phát biểu rằng nếu hàm $f$ liên tục trên đoạn đóng $[a, b]$ và khả vi trên khoảng mở $(a, b)$, thì tồn tại ít nhất một điểm $c \in (a, b)$ sao cho tốc độ thay đổi tức thời tại $c$ bằng đúng tốc độ thay đổi trung bình trên cả đoạn: $$f'(c) = \frac{f(b) - f(a)}{b - a} \iff f(b) - f(a) = f'(c)(b - a)$$ Định lý MVT là cầu nối dùng thông tin cục bộ của đạo hàm để chặn sai số toàn cục: nếu $|f'(x)| \le L$ trên toàn khoảng thì $|f(b) - f(a)| \le L|b - a|$ (tính chất Lipschitz — cực kỳ quan trọng để chứng minh sự hội tụ của các thuật toán lặp).

Khi tính giới hạn của thương $\lim_{x \to a} \frac{f(x)}{g(x)}$ (với $a$ hữu hạn hoặc $a = \infty$) mà cả tử lẫn mẫu cùng tiến về $0$ (**dạng vô định $0/0$**) hoặc cùng tiến ra $\pm\infty$ (**dạng vô định $\infty/\infty$**), **Quy tắc L’Hôpital** cho biết nếu $f, g$ khả vi, $g'(x) \neq 0$ quanh $a$ và giới hạn của tỉ số hai đạo hàm $\lim_{x \to a} \frac{f'(x)}{g'(x)} = L$ tồn tại, thì $\lim_{x \to a} \frac{f(x)}{g(x)} = L$. Tiểu mục lưu ý rõ điều kiện áp dụng: tuyệt đối không được áp dụng L’Hôpital khi giới hạn **không phải** dạng vô định $0/0$ hay $\infty/\infty$; còn các dạng vô định như $0 \cdot \infty$, $1^\infty$, $0^0$ phải được biến đổi đại số hoặc lấy logarit để đưa về $0/0$ hoặc $\infty/\infty$ trước. Áp dụng quy tắc L’Hôpital khi $x \to \infty$ chứng minh chặt chẽ bảng thứ bậc tăng trưởng tiệm cận của Khoa học Máy tính: với mọi số mũ dương $p, a > 0$ và cơ số $b > 1$, ta luôn có $\lim_{x \to \infty} \frac{(\ln x)^p}{x^a} = 0$ (mọi lũy thừa của logarit đều tăng chậm hơn mọi lũy thừa dương của $x$, tức $(\ln n)^p = o(n^a)$) và $\lim_{x \to \infty} \frac{x^a}{b^x} = 0$ (mọi đa thức đều tăng chậm hơn hàm mũ, tức $n^a = o(b^n)$).

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 2, Part C, Sessions 34–35: Introduction to and Using the Mean Value Theorem; Unit 5, Part A, Sessions 87–90: L’Hospital’s Rule, Examples, and Rates of Growth

#### Tiểu mục 3: Thuật toán lặp Newton–Raphson tìm nghiệm f(x) = 0, tốc độ hội tụ bậc hai và các điều kiện thất bại (`svc-on-newtons-method-convergence` — mức `core`)

Nhiều phương trình thực tế như $\cos x = x$ hoặc $x e^x = 2$ không thể giải ra nghiệm đóng bằng công thức đại số sơ cấp; tương tự trong bài toán tối ưu hóa, ta cần tìm nghiệm của phương trình đạo hàm bằng không $g'(x) = 0$. **Phương pháp Newton–Raphson (Newton’s Method)** giải bài toán tìm nghiệm $f(x) = 0$ bằng cách lặp lại ý tưởng xấp xỉ tuyến tính: xuất phát từ một điểm đoán $x_n$, thay đường cong $y = f(x)$ bằng đường tiếp tuyến của nó tại $x_n$ là $y = f(x_n) + f'(x_n)(x - x_n)$, rồi lấy giao điểm của tiếp tuyến đó với trục hoành ($y = 0$) làm điểm xấp xỉ tốt hơn kế tiếp $x_{n+1}$: $$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \quad \text{(với } f'(x_n) \neq 0\text{)}$$ (Ví dụ khi áp dụng cho $f(x) = x^2 - A = 0$ để tính căn bậc hai $\sqrt{A}$, công thức Newton cho ra thuật toán trung bình cộng cực nhanh $x_{n+1} = \frac{1}{2}\left(x_n + \frac{A}{x_n}\right)$).

Tiểu mục phân tích **tốc độ hội tụ bậc hai (quadratic convergence)** và **các điều kiện thất bại** của phương pháp Newton: khi điểm khởi tạo $x_0$ đã nằm đủ gần một nghiệm đơn $x^*$ (nơi $f'(x^*) \neq 0$ và $f''$ liên tục), sai số ở bước sau tỉ lệ với **bình phương** sai số bước trước ($|x_{n+1} - x^*| \approx \frac{|f''(x^*)|}{2|f'(x^*)|}|x_n - x^*|^2$), nghĩa là số chữ số thập phân chính xác **tăng gấp đôi sau mỗi bước lặp**! Tuy nhiên, phương pháp Newton sẽ thất bại hoặc suy giảm hiệu năng trong ba trường hợp cần cảnh giác: (1) Nếu tại một bước lặp gặp điểm có tiếp tuyến gần nằm ngang ($f'(x_n) \approx 0$), phép chia cho $f'(x_n)$ bắn $x_{n+1}$ ra rất xa; (2) Nếu chọn $x_0$ xa nghiệm, dãy lặp có thể rơi vào chu kỳ dao động tuần hoàn hoặc phân kỳ (như với $f(x) = x^{1/3}$); và (3) Nếu áp dụng Newton để giải bài toán tối ưu $g'(x) = 0$ ($x_{n+1} = x_n - \frac{g'(x_n)}{g''(x_n)}$), thuật toán chỉ hút về cực tiểu nhưng cũng có thể hút về cực đại nếu $g''(x_n) < 0$.

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 2, Part B, Session 33: Newton’s Method

### Chương 4 — Tổng Riemann, Tích phân xác định và Định lý cơ bản của Giải tích (FTC) (`svc-integration-ftc`)

Chương này xây dựng phép toán ngược của đạo hàm — tích phân — từ bài toán tính tổng tích lũy liên tục qua tổng Riemann trái, phải, điểm giữa và hình thang, giải thích mối liên hệ hình học với phương pháp kẹp tổng rời rạc, và trình bày hai phần của Định lý cơ bản của giải tích (FTC 1 & FTC 2) kết nối hai nhánh phép tính vi phân và tích phân thành một thể thống nhất.

*Nguồn chương:* `mit-1801sc` (Unit 3, Part A: Definition of the Definite Integral and First Fundamental Theorem; Part B: Second Fundamental Theorem, Areas, Volumes)

#### Tiểu mục 1: Tổng Riemann trái/phải/giữa, định nghĩa Tích phân xác định và liên hệ giữa tổng rời rạc với tích phân liên tục (`svc-iftc-riemann-sums-definite-integral` — mức `core`)

Làm thế nào để tính tổng lượng tích lũy của một đại lượng biến thiên liên tục $f(x)$ trên đoạn $[a, b]$ (như diện tích có dấu dưới đồ thị, quãng đường đi được từ vận tốc $v(t)$, hoặc xác suất tích lũy từ hàm mật độ)? Phương pháp **Tổng Riemann (Riemann Sum)** chia đoạn $[a, b]$ thành $n$ đoạn con có độ rộng $\Delta x = \frac{b - a}{n}$ bởi các điểm chia $x_i = a + i\,\Delta x$, và xấp xỉ giá trị hàm trên mỗi đoạn thứ $i$ bằng một hình chữ nhật có chiều cao $f(x_i^*)$: $$S_n = \sum_{i=1}^n f(x_i^*) \, \Delta x$$ Tùy cách chọn điểm mẫu $x_i^*$, ta có tổng Riemann đầu mút trái ($x_{i-1}$), đầu mút phải ($x_i$), điểm giữa (midpoint rule), hoặc kết hợp hai đầu mút thành hình thang (trapezoidal rule — dùng trực tiếp để ước lượng số học tích phân trên máy tính). Khi hàm $f$ liên tục (hoặc liên tục từng khúc) trên $[a, b]$, khi cho $n \to \infty$ ($\Delta x \to 0$), mọi tổng Riemann đều hội tụ về cùng một giá trị duy nhất gọi là **tích phân xác định (definite integral)**: $$\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i^*)\,\Delta x$$

Góc nhìn tổng Riemann khi đặt bước chia đơn vị $\Delta x = 1$ trên các điểm nguyên $x = 1, 2, \dots, n$ giải thích trực tiếp cơ chế hình học của **phương pháp kẹp tổng bằng tích phân** đã gặp ở Môn CS-09: tổng rời rạc $\sum_{i=1}^n f(i)$ chính là tổng diện tích của $n$ hình chữ nhật có đáy bằng $1$, do đó khi $f$ đơn điệu tăng hoặc giảm, diện tích các hình chữ nhật này luôn kẹp chặt hoặc bị kẹp chặt bởi diện tích đường cong liên tục $\int_1^n f(x)\,dx$. Tiểu mục cũng tổng hợp các tính chất cơ bản của tích phân xác định: tính tuyến tính, tính cộng tính trên khoảng $\int_a^c f = \int_a^b f + \int_b^c f$, quy ước đảo cận $\int_b^a f = -\int_a^b f$, và tính bảo toàn bất đẳng thức (nếu $f(x) \le g(x)$ trên $[a, b]$ thì $\int_a^b f(x)\,dx \le \int_a^b g(x)\,dx$).

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 3, Sessions 43–46: Definite Integrals, Adding Areas of Rectangles, Easy Integrals, and Riemann Sums; Sessions 63–64: Numerical Integration

#### Tiểu mục 2: Nguyên hàm (Antiderivative) và Hai phần của Định lý cơ bản của Giải tích (FTC 1 & FTC 2) (`svc-iftc-fundamental-theorem-of-calculus` — mức `core`)

Nếu chỉ dựa vào định nghĩa giới hạn của tổng Riemann $\lim_{n \to \infty} \sum_{i=1}^n f(x_i)\,\Delta x$, việc tính tích phân của những hàm rất đơn giản cũng cực kỳ vất vả. Bước ngoặt vĩ đại của giải tích là phát hiện ra rằng bài toán tính diện tích tích lũy (tích phân) và bài toán tìm hệ số góc tiếp tuyến (đạo hàm) thực chất là **hai phép toán ngược nhau** thông qua **Định lý cơ bản của Giải tích (Fundamental Theorem of Calculus — FTC)**.

Định lý gồm hai phần gắn kết chặt chẽ: **Phần 1 (FTC 1 — Đạo hàm của hàm tích lũy diện tích theo cận trên)**: nếu $f$ là hàm liên tục trên $[a, b]$ và ta định nghĩa hàm tích lũy $F(x) = \int_a^x f(t)\,dt$, thì tốc độ thay đổi tức thời của diện tích $F(x)$ khi cận trên $x$ dịch chuyển chính là chiều cao đường cong tại điểm đó: $$\frac{d}{dx} \int_a^x f(t)\,dt = f(x)$$ (Kết hợp với quy tắc dây chuyền khi cận trên là một hàm khả vi $g(x)$: $\frac{d}{dx} \int_a^{g(x)} f(t)\,dt = f(g(x)) \cdot g'(x)$ — công thức này sẽ được dùng trực tiếp ở Môn CS-13 để chứng minh đạo hàm của hàm phân phối xác suất tích lũy $F_X(x) = \int_{-\infty}^x f_X(t)\,dt$ chính là hàm mật độ xác suất $f_X(x) = F_X'(x)$!). **Phần 2 (FTC 2 — Công thức Newton–Leibniz)**: nếu $f$ liên tục trên $[a, b]$ và $G(x)$ là một **nguyên hàm (antiderivative)** bất kỳ của $f$ (tức $G'(x) = f(x)$), thì tổng tích lũy trên cả đoạn $[a, b]$ bằng hiệu giá trị của nguyên hàm tại hai đầu mút: $$\int_a^b f(x)\,dx = G(b) - G(a) = \Big[ G(x) \Big]_a^b$$

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 2, Session 37: Antiderivatives; Unit 3, Sessions 47–52: First and Second Fundamental Theorems of Calculus and Applications

### Chương 5 — Kỹ thuật Tích phân (Đổi biến, Từng phần) và Tích phân suy rộng (Improper Integrals) (`svc-techniques-improper-integrals`)

Chương này trang bị hai kỹ thuật biến đổi tích phân cốt lõi nhất (phép đổi biến $u$-substitution ngược với quy tắc dây chuyền, và tích phân từng phần ngược với quy tắc đạo hàm của tích) cùng lý thuyết tích phân suy rộng trên miền vô hạn $[a, \infty)$ hoặc $( -\infty, \infty )$ — công cụ bắt buộc để làm việc với biến ngẫu nhiên liên tục và ước lượng tổng tiệm cận.

*Nguồn chương:* `mit-1801sc` (Unit 2, Session 38: Integration by Substitution; Unit 4, Part B: Integration by Parts; Unit 5, Part A, Sessions 91–93: Improper Integrals, Integral Comparison, and Singularities)

#### Tiểu mục 1: Phép đổi biến số (u-Substitution) và Tích phân từng phần (Integration by Parts) gắn với bài toán xác suất – tiệm cận (`svc-tii-substitution-integration-by-parts` — mức `core`)

Vì tích phân là phép toán ngược của đạo hàm, mỗi quy tắc đạo hàm lớn đều sinh ra một kỹ thuật tích phân đối ngẫu: (1) Đảo ngược quy tắc dây chuyền $(F(g(x)))' = F'(g(x))g'(x) = f(g(x))g'(x)$ cho ta **Phép đổi biến số (Substitution Rule)**: bằng cách đặt biến mới $u = g(x)$ và vi phân $du = g'(x)\,dx$, tích phân xác định đổi cả biểu thức lẫn **đổi luôn hai cận tích phân** theo biến mới: $$\int_a^b f(g(x))\,g'(x)\,dx = \int_{g(a)}^{g(b)} f(u)\,du$$ (với điều kiện $g'$ liên tục trên $[a, b]$ và $f$ liên tục trên miền giá trị của $g$).

(2) Đảo ngược quy tắc đạo hàm của tích $(u(x)v(x))' = u'(x)v(x) + u(x)v'(x)$ bằng cách lấy tích phân hai vế và chuyển vế cho ta công thức **Tích phân từng phần (Integration by Parts)**: $$\int_a^b u(x)\,v'(x)\,dx = \Big[ u(x)v(x) \Big]_a^b - \int_a^b v(x)\,u'(x)\,dx \quad \text{hay} \quad \int u\,dv = uv - \int v\,du$$ Tiểu mục minh họa trực tiếp hai ứng dụng của tích phân từng phần xuất hiện ngay trong chương trình CS: tính nguyên hàm $\int \ln x\,dx = x\ln x - x + C$ (bằng cách đặt $u = \ln x, dv = dx$) dùng để kẹp $\ln(n!)$ ở Môn CS-09, và tính tích phân $\int_0^\infty x \lambda e^{-\lambda x}\,dx = \frac{1}{\lambda}$ (bằng cách đặt $u = x, dv = \lambda e^{-\lambda x}dx$) dùng để tính kỳ vọng $E[X]$ và phương sai của phân phối mũ / phân phối chuẩn ở Môn CS-13.

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 2, Session 38: Integration by Substitution; Unit 4, Part B: Integration by Parts (Session 76)

#### Tiểu mục 2: Tích phân suy rộng (Improper Integrals) trên miền vô hạn và hàm không bị chặn: định nghĩa giới hạn, p-integrals và tiêu chuẩn so sánh (`svc-tii-improper-integrals-convergence` — mức `core`)

Định nghĩa tổng Riemann ban đầu đòi hỏi đoạn lấy tích phân $[a, b]$ phải hữu hạn và hàm $f$ phải bị chặn. Tuy nhiên, trong phân tích tiệm cận khi $n \to \infty$ và trong lý thuyết xác suất liên tục trên $(0, \infty)$ hoặc $(-\infty, \infty)$, ta cần tính diện tích dưới đường cong kéo dài tới vô cực — gọi là **Tích phân suy rộng loại I (Improper Integral over an infinite interval)**. Tích phân suy rộng không phải là phép thế số "$\infty$" trực tiếp vào nguyên hàm, mà được định nghĩa chặt chẽ là **giới hạn của tích phân xác định trên đoạn hữu hạn $[a, R]$ khi $R \to \infty$**: $$\int_a^\infty f(x)\,dx = \lim_{R \to \infty} \int_a^R f(x)\,dx$$ Nếu giới hạn bên phải tồn tại và là một số thực hữu hạn, ta nói tích phân suy rộng **hội tụ (converges)**; nếu giới hạn bằng $\pm\infty$ hoặc không tồn tại, tích phân **phân kỳ (diverges)**. Đối với tích phân trên toàn trục thực $\int_{-\infty}^\infty f(x)\,dx$, chuẩn định nghĩa bắt buộc phải tách tại một điểm trung gian (như $0$) thành $\int_{-\infty}^0 f(x)\,dx + \int_0^\infty f(x)\,dx$ và đòi hỏi **cả hai phần phải hội tụ độc lập nhau**. Tương tự, khi hàm $f(x)$ tiến ra vô cùng tại một đầu mút $a$ (như $\int_0^1 x^{-p}\,dx$, tích phân suy rộng loại II), ta lấy giới hạn $\lim_{\varepsilon \to 0^+} \int_{a+\varepsilon}^b f(x)\,dx$.

Tiểu mục chứng minh chuẩn mực hội tụ quan trọng nhất để đối chiếu là họ **$p$-integrals trên $[1, \infty)$**: $$\int_1^\infty \frac{1}{x^p}\,dx \quad \begin{cases} \text{hội tụ về } \dfrac{1}{p-1} & \text{khi } p > 1, \\ \text{phân kỳ ra } +\infty & \text{khi } p \le 1 \text{ (tại } p=1 \text{ nguyên hàm là } \ln R \to \infty\text{)}. \end{cases}$$ (Ngược lại, quanh điểm kỳ dị $0$ trên $(0, 1]$, $\int_0^1 x^{-p}\,dx$ hội tụ khi $p < 1$ và phân kỳ khi $p \ge 1$). Đối với những hàm không tìm được nguyên hàm sơ cấp (như hàm mật độ Gaussian $e^{-x^2/2}$), ta dùng **Tiêu chuẩn so sánh trực tiếp và so sánh giới hạn (Comparison & Limit Comparison Tests)**: với $0 \le f(x) \le g(x)$ khi $x$ đủ lớn, nếu tích phân của hàm lớn $\int_a^\infty g(x)\,dx$ hội tụ thì $\int_a^\infty f(x)\,dx$ chắc chắn hội tụ (chẳng hạn với $x \ge 1$ thì $0 < e^{-x^2} \le e^{-x}$, mà $\int_1^\infty e^{-x}\,dx = e^{-1} < \infty$ nên tích phân Gaussian $\int_{-\infty}^\infty e^{-x^2}\,dx$ hội tụ hữu hạn về $\sqrt{\pi}$).

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 5, Part A, Sessions 91–93: Improper Integrals, Integral Comparison, and Indefinite Integrals and Singularities

#### Tiểu mục 3: Phân tích phân thức tối giản (Partial Fractions) và đổi biến lượng giác (Mở rộng) (`svc-tii-special-substitutions-partial-fractions` — mức `extension`)

Tiểu mục mở rộng này tổng hợp hai kỹ thuật giải tích bổ trợ cho việc tìm nguyên hàm của các hàm phân thức và căn thức bậc hai: (1) **Phương pháp tách phân thức tối giản (Partial Fraction Decomposition)** chia một phân thức hữu tỉ thực sự $\frac{P(x)}{Q(x)}$ (với $\deg P < \deg Q$) thành tổng các phân thức đơn giản dạng $\frac{A}{(x - r)^k}$ hoặc $\frac{Bx + C}{(x^2 + px + q)^k}$ để lấy nguyên hàm thành hàm logarit và $\arctan$ — đây chính là cùng một kỹ thuật đại số được dùng để tách hàm sinh hữu tỉ ở Chương 10 của Môn CS-09.

(2) **Phép đổi biến lượng giác (Trigonometric Substitution)** sử dụng các hằng đẳng thức Pythagoras trên đường tròn đơn vị để khử căn thức bậc hai: đặt $x = a \sin\theta$ cho $\sqrt{a^2 - x^2}$ (chẳng hạn để chứng minh diện tích hình tròn bán kính $R$ bằng $2\int_{-R}^R \sqrt{R^2 - x^2}\,dx = \pi R^2$), đặt $x = a \tan\theta$ cho $\sqrt{a^2 + x^2}$ hoặc $\frac{1}{a^2 + x^2}$, và đặt $x = a \sec\theta$ cho $\sqrt{x^2 - a^2}$.

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 4, Part A, Session 72: Trig Substitution; Part B, Sessions 74–75: Integration by Partial Fractions and Advanced Partial Fractions

### Chương 6 — Chuỗi vô hạn (Infinite Series), Chuỗi lũy thừa và Khai triển Chuỗi Taylor / Maclaurin (`svc-series-taylor`)

Chương cuối của môn Giải tích một biến hoàn thiện lý thuyết giới hạn của tổng vô hạn $\sum_{n=0}^\infty a_n$ thông qua dãy tổng riêng phần, các tiêu chuẩn kiểm tra hội tụ (cấp số nhân, tiêu chuẩn tích phân, tiêu chuẩn so sánh và tỉ số D’Alembert), bán kính hội tụ của chuỗi lũy thừa và biểu diễn các hàm khả vi bằng chuỗi Taylor/Maclaurin kèm công thức đánh giá sai số phần dư Lagrange.

*Nguồn chương:* `mit-1801sc` (Unit 5, Part A, Session 92: Integral Comparison; Part B, Sessions 94–101: Infinite Series, Series Comparison, Power Series, Taylor’s Series, and Operations on Power Series)

#### Tiểu mục 1: Dãy tổng riêng phần, sự hội tụ của Chuỗi số vô hạn, chuỗi cấp số nhân, Tiêu chuẩn tích phân và Tiêu chuẩn tỉ số D’Alembert (`svc-st-infinite-series-convergence-tests` — mức `core`)

Cho một dãy số thực $(a_n)_{n=1}^\infty$, biểu thức tổng vô hạn $\sum_{n=1}^\infty a_n$ được định nghĩa chặt chẽ qua giới hạn của **dãy các tổng riêng phần (sequence of partial sums)** $S_N = \sum_{n=1}^N a_n$ khi $N \to \infty$: nếu $\lim_{N \to \infty} S_N = S$ tồn tại hữu hạn thì chuỗi **hội tụ (converges)** về tổng $S$; ngược lại chuỗi **phân kỳ (diverges)**. Điều kiện cần cơ bản nhất để một chuỗi $\sum a_n$ hội tụ là số hạng tổng quát phải tiến về không ($\lim_{n \to \infty} a_n = 0$ — nếu $\lim a_n \neq 0$ thì chuỗi chắc chắn phân kỳ theo **Test for Divergence**); nhưng tiểu mục nhấn mạnh rằng **$a_n \to 0$ hoàn toàn KHÔNG đủ để suy ra chuỗi hội tụ**, với phản ví dụ kinh điển là **chuỗi điều hòa (harmonic series)** $\sum_{n=1}^\infty \frac{1}{n} = +\infty$ có $1/n \to 0$ nhưng tổng riêng phần $H_N = \Theta(\ln N) \to \infty$.

Tiểu mục hệ thống hóa các chuẩn mực hội tụ quan trọng nhất: (1) **Chuỗi cấp số nhân (Geometric series)** $\sum_{n=0}^\infty a r^n$ hội tụ về $\frac{a}{1 - r}$ khi và chỉ khi $|r| < 1$, và phân kỳ khi $|r| \ge 1$; (2) **Tiêu chuẩn tích phân (Integral Test)**: với hàm $f(x)$ dương, liên tục và đơn điệu giảm trên $[1, \infty)$ có $a_n = f(n)$, chuỗi $\sum_{n=1}^\infty a_n$ và tích phân suy rộng $\int_1^\infty f(x)\,dx$ cùng hội tụ hoặc cùng phân kỳ, từ đó suy ra **$p$-series $\sum_{n=1}^\infty \frac{1}{n^p}$ hội tụ khi và chỉ khi $p > 1$**; (3) **Tiêu chuẩn so sánh và Tiêu chuẩn tỉ số (Ratio Test)**: xét $L = \lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right|$, nếu $L < 1$ thì chuỗi hội tụ tuyệt đối (tốc độ giảm nhanh hơn cấp số nhân), nếu $L > 1$ thì chuỗi phân kỳ, còn nếu $L = 1$ thì tiêu chuẩn tỉ số chưa kết luận được; và (4) Sự khác biệt giữa **hội tụ tuyệt đối** ($\sum |a_n| < \infty$) với **hội tụ có điều kiện** (như chuỗi đan dấu $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n} = \ln 2$ theo tiêu chuẩn Leibniz).

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 5, Part A, Session 92: Integral Comparison; Part B, Sessions 94–96: Infinite Series, Series Comparison, and Stacking Blocks

#### Tiểu mục 2: Chuỗi lũy thừa, bán kính hội tụ, Chuỗi Taylor / Maclaurin và Định lý Taylor với phần dư Lagrange (`svc-st-power-series-taylor-maclaurin-remainder` — mức `core`)

Một **chuỗi lũy thừa (power series)** tâm tại $x_0$ có dạng $\sum_{n=0}^\infty c_n (x - x_0)^n$. Khác với hàm sinh hình thức ở Môn CS-09 (nơi $x$ chỉ là ký hiệu đánh dấu vị trí và không thay số), trong giải tích ta coi chuỗi lũy thừa là một hàm số thực của $x$: theo tiêu chuẩn tỉ số, luôn tồn tại một **bán kính hội tụ (radius of convergence)** $R \in [0, \infty]$ sao cho chuỗi hội tụ tuyệt đối với mọi $x$ nằm trong khoảng mở $|x - x_0| < R$ và phân kỳ khi $|x - x_0| > R$; bên trong khoảng hội tụ $(-R + x_0, x_0 + R)$, chuỗi lũy thừa có thể được lấy đạo hàm và tích phân từng số hạng một cách hợp lệ.

Khi một hàm $f(x)$ khả vi đến cấp $N+1$ quanh tâm $x_0$, mở rộng xấp xỉ tuyến tính và bậc hai ở Chương 2 lên bậc $N$ bằng cách khớp tất cả các đạo hàm từ cấp $0$ đến cấp $N$ tại $x_0$ cho ta **Đa thức Taylor bậc $N$** $P_N(x) = \sum_{k=0}^N \frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$. Quan trọng hơn cả là **Định lý Taylor với phần dư Lagrange (Taylor’s Theorem with Lagrange Remainder)** cho biết chính xác sai số cắt cụt $R_N(x) = f(x) - P_N(x)$: tồn tại một điểm $c$ nằm giữa $x_0$ và $x$ sao cho: $$f(x) = \sum_{k=0}^N \frac{f^{(k)}(x_0)}{k!}(x - x_0)^k + \frac{f^{(N+1)}(c)}{(N+1)!}(x - x_0)^{N+1}$$ Khi $R_N(x) \to 0$ lúc $N \to \infty$, hàm $f(x)$ bằng đúng **Chuỗi Taylor** của nó (và khi $x_0 = 0$ gọi là **Chuỗi Maclaurin**). Tiểu mục hệ thống hóa 5 khai triển Maclaurin cốt lõi cùng miền hội tụ mà mọi người học CS cần nắm vững: $$e^x = \sum_{n=0}^\infty \frac{x^n}{n!}\; (\forall x \in \mathbb{R}), \qquad \frac{1}{1-x} = \sum_{n=0}^\infty x^n\; (|x| < 1), \qquad \ln(1+x) = \sum_{n=1}^\infty (-1)^{n-1}\frac{x^n}{n}\; (-1 < x \le 1)$$ cùng $\sin x = \sum_{n=0}^\infty (-1)^n \frac{x^{2n+1}}{(2n+1)!}$, $\cos x = \sum_{n=0}^\infty (-1)^n \frac{x^{2n}}{(2n)!}$ ($\forall x \in \mathbb{R}$, qua đó giải thích công thức Euler $e^{i\theta} = \cos\theta + i\sin\theta$) và chuỗi nhị thức tổng quát $(1+x)^\alpha = \sum_{n=0}^\infty \binom{\alpha}{n}x^n$ ($|x| < 1$).

> **Nguồn đối chiếu:** `mit-1801sc`: Unit 5, Part B, Sessions 97–100: Power Series, Taylor’s Series, Taylor’s Series Continued, and Operations on Power Series

---

## CS-12: Giải tích nhiều biến và tối ưu (`multivariable-calculus-optimization`)

- **Thuộc khối:** Khối II — Lập trình và toán nền CS
- **Phân loại:** `core`
- **Điều kiện tiên quyết:**
  - `single-variable-calculus` (*required*): Cần nắm vững đạo hàm, quy tắc dây chuyền một biến, khai triển Taylor bậc hai và tích phân xác định/suy rộng từ Môn CS-11.
  - `linear-algebra` (*required*): Cần nắm vững không gian R^n, tích vô hướng, phép nhân ma trận, định thức, trị riêng và ma trận đối xứng xác định dương từ Môn CS-10 để làm việc với Gradient, Jacobian và Hessian.

### Tổng quan môn học

Trong các bài toán thực tế của Khoa học Máy tính — từ huấn luyện mô hình học máy có hàng triệu trọng số, mô phỏng ánh sáng và vật lý 3D trong đồ họa, đến phân tích phân phối xác suất đồng thời của nhiều biến — hàm số hầu như không bao giờ chỉ phụ thuộc vào một biến đơn lẻ $x \in \mathbb{R}$ mà nhận đầu vào là một vector nhiều chiều $\mathbf{x} = (x_1, x_2, \dots, x_n)^T \in \mathbb{R}^n$. Môn học này hợp nhất hai nhánh **Giải tích một biến (`CS-11`)** và **Đại số tuyến tính (`CS-10`)** để xây dựng phép tính vi tích phân trên không gian nhiều chiều: từ hình học vector, đường/mặt đồng mức (level sets), đạo hàm riêng, mặt phẳng tiếp diện và điều kiện khả vi toàn phần, đến đạo hàm theo hướng, vector **Gradient ($\nabla f$)**, ma trận **Jacobian ($J$)** và quy tắc dây chuyền nhiều biến trên **đồ thị tính toán (computational graph)**.

Chương 3 của môn học đi sâu vào lý thuyết và thuật toán **Tối ưu hóa (Optimization)**: sử dụng khai triển Taylor bậc hai nhiều biến và ma trận đạo hàm bậc hai **Hessian ($H$)** để phân loại các điểm dừng thành cực tiểu địa phương, cực đại địa phương và **điểm yên ngựa (saddle points)**; giải bài toán tối ưu có ràng buộc bằng **Nhân tử Lagrange**; và đối chiếu giải tích cực trị với thuật toán tối ưu số học **Hạ Gradient (Gradient Descent)** kèm điều kiện bước nhảy hội tụ. Chương cuối trang bị tích phân kép/bội (Định lý Fubini) và công thức đổi biến qua định thức Jacobian (tọa độ cực/cầu, chuẩn hóa tích phân Gaussian).

### Giới hạn học thuật (`boundaries`)

- Phân biệt rạch ròi giữa **điều kiện cực trị giải tích** (giải hệ phương trình $\nabla f(\mathbf{x}) = \mathbf{0}$ và xét tính xác định dương của ma trận Hessian) với **thuật toán tối ưu số học lặp** (như Gradient Descent $\mathbf{x}_{k+1} = \mathbf{x}_k - \eta \nabla f(\mathbf{x}_k)$ dùng khi không thể giải nghiệm đóng của $\nabla f(\mathbf{x}) = \mathbf{0}$).
- Phần giải tích vector trường cổ điển trong vật lý (tích phân đường/mặt của trường lực, các định lý Green, Stokes và Gauss/Divergence) được đặt ở một tiểu mục mở rộng (`extension`), không bắt buộc cho luồng Học máy và Hệ thống phần mềm cốt lõi.

### Nguồn giáo trình của môn học

- **Multivariable Calculus (MIT 18.02SC)** (`mit-1802sc`, *primary*): Unit 1: Vectors and Matrices; Unit 2: Partial Derivatives (Parts A–C); Unit 3, Part A: Double Integrals (Sessions 47–55); Unit 4, Part A: Triple Integrals (Sessions 74–78) — URL: https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/syllabus/

### Chương 1 — Hàm nhiều biến, Đường/Mặt đồng mức, Đạo hàm riêng và Tính khả vi toàn phần (`mco-multivariable-functions-partials`)

Chương mở đầu xây dựng trực giác hình học cho hàm số nhiều biến $f: \mathbb{R}^n \to \mathbb{R}$ thông qua các lát cắt và đường đồng mức, định nghĩa đạo hàm riêng theo từng trục tọa độ, xấp xỉ tuyến tính bằng mặt phẳng tiếp diện và làm rõ vì sao việc tồn tại mọi đạo hàm riêng chưa đủ đảm bảo hàm khả vi toàn phần.

*Nguồn chương:* `mit-1802sc` (Unit 1, Part A: Vectors, Determinants and Planes; Unit 2, Part A, Sessions 24–31: Functions of Two Variables, Level Curves, Partial Derivatives, Approximation, and Optimization)

#### Tiểu mục 1: Hình học không gian R^n, phương trình mặt phẳng/siêu phẳng, đồ thị hàm nhiều biến và Đường/Mặt đồng mức (Level Sets / Contours) (`mco-mfp-vectors-planes-level-sets` — mức `core`)

Trước khi xét sự biến thiên của hàm nhiều biến, tiểu mục này củng cố ngôn ngữ hình học trong $\mathbb{R}^n$ và $\mathbb{R}^3$: tích vô hướng $\mathbf{u} \cdot \mathbf{v} = \mathbf{u}^T \mathbf{v}$ đo góc và hình chiếu, tích có hướng $\mathbf{u} \times \mathbf{v}$ trong $\mathbb{R}^3$ tạo ra một vector pháp tuyến vuông góc với cả $\mathbf{u}$ lẫn $\mathbf{v}$ có độ dài bằng diện tích hình bình hành, và phương trình của một **mặt phẳng / siêu phẳng (hyperplane)** đi qua điểm $\mathbf{x}_0$ có vector pháp tuyến $\mathbf{n} \neq \mathbf{0}$ luôn có dạng $\mathbf{n} \cdot (\mathbf{x} - \mathbf{x}_0) = 0$ (tức $\mathbf{w}^T \mathbf{x} + b = 0$ — ranh giới quyết định tuyến tính cơ bản nhất trong học máy).

Đối với hàm vô hướng $n$ biến $f: \mathbb{R}^n \to \mathbb{R}$, **đồ thị (graph)** của nó là tập hợp các điểm $(\mathbf{x}, z) \in \mathbb{R}^{n+1}$ sao cho $z = f(\mathbf{x})$ (với $n = 2$, đồ thị $z = f(x, y)$ là một mặt cong trong không gian 3 chiều). Vì không thể vẽ trực tiếp đồ thị khi $n \ge 3$, công cụ trực quan hóa quan trọng nhất là **Tập đồng mức (Level Set)**: tập hợp tất cả các điểm đầu vào trong $\mathbb{R}^n$ cùng nhận một giá trị hàm không đổi $c$: $$L_c = \{\mathbf{x} \in \mathbb{R}^n \mid f(\mathbf{x}) = c\}$$ Khi $n = 2$, $f(x, y) = c$ tạo thành các **đường đồng mức (level curves / contour lines)** trên mặt phẳng $(x, y)$ (giống như các đường cao độ trên bản đồ địa hình: nơi các đường đồng mức xếp khích sát nhau là nơi mặt hàm dốc đứng, nơi các đường thưa nhau là sườn thoải, và các vòng khép kín đồng tâm báo hiệu đỉnh cực đại hoặc đáy thung lũng cực tiểu). Khi $n = 3$, $f(x, y, z) = c$ là một **mặt đồng mức (level surface / isosurface)**.

> **Nguồn đối chiếu:** `mit-1802sc`: Unit 1, Part A: Vectors, Determinants and Planes; Unit 2, Sessions 24–25: Functions of Two Variables: Graphs; Level Curves and Contour Plots

#### Tiểu mục 2: Đạo hàm riêng bậc nhất (Partial Derivatives), đạo hàm riêng cấp cao và Định lý Clairaut về tính đối xứng của đạo hàm hỗn hợp (`mco-mfp-partial-derivatives-clavaut` — mức `core`)

Để đo tốc độ thay đổi của hàm nhiều biến $f(x_1, \dots, x_n)$ khi chỉ cho **duy nhất một biến $x_i$ thay đổi** còn tất cả $n - 1$ biến còn lại được giữ cố định như hằng số, ta định nghĩa **Đạo hàm riêng theo $x_i$ (Partial Derivative)** tại $\mathbf{x}$: $$\frac{\partial f}{\partial x_i}(\mathbf{x}) = f_{x_i}(\mathbf{x}) = \lim_{h \to 0} \frac{f(x_1, \dots, x_i + h, \dots, x_n) - f(x_1, \dots, x_i, \dots, x_n)}{h}$$ Về mặt hình học với $z = f(x, y)$ tại điểm $(x_0, y_0)$, việc giữ cố định $y = y_0$ tương ứng với việc dùng mặt phẳng thẳng đứng $y = y_0$ cắt mặt cong $z = f(x, y)$ tạo thành một đường cong một biến, và $f_x(x_0, y_0)$ chính là hệ số góc tiếp tuyến của đường giao tuyến đó theo hướng trục $Ox$ (tương tự $f_y(x_0, y_0)$ là độ dốc theo hướng trục $Oy$). Về mặt tính toán, mọi quy tắc đạo hàm một biến ở Môn CS-11 đều áp dụng nguyên vẹn khi xem các biến khác là hằng số.

Khi lấy đạo hàm riêng tiếp lần thứ hai, từ một hàm $n$ biến ta thu được $n^2$ đạo hàm riêng cấp hai $\frac{\partial^2 f}{\partial x_i \partial x_j} = \frac{\partial}{\partial x_i}\left(\frac{\partial f}{\partial x_j}\right)$, gồm $n$ đạo hàm thuần $\frac{\partial^2 f}{\partial x_i^2}$ và các **đạo hàm riêng hỗn hợp (mixed partial derivatives)**. **Định lý Clairaut (Schwarz’s Theorem)** bảo đảm rằng nếu các đạo hàm riêng cấp hai liên tục trên một lân cận mở quanh điểm đang xét (hàm lớp $C^2$), thì thứ tự lấy đạo hàm không làm thay đổi kết quả: $$\frac{\partial^2 f}{\partial x_i \partial x_j} = \frac{\partial^2 f}{\partial x_j \partial x_i}$$ Chính định lý này giải thích vì sao ma trận đạo hàm bậc hai Hessian $H(\mathbf{x})$ của các hàm trơn luôn là một **ma trận thực đối xứng** ($H^T = H$), cho phép áp dụng trọn vẹn Định lý phổ của Môn CS-10!

> **Nguồn đối chiếu:** `mit-1802sc`: Unit 2, Session 26: Partial Derivatives; Session 30: Second Derivative Test

#### Tiểu mục 3: Mặt phẳng tiếp diện, Xấp xỉ tuyến tính nhiều biến và sự khác biệt giữa tồn tại đạo hàm riêng với Khả vi toàn phần (`mco-mfp-tangent-plane-total-differentiability` — mức `core`)

Ở hàm một biến, sự tồn tại của đạo hàm $f'(x_0)$ đồng nghĩa với việc đồ thị có đường tiếp tuyến xấp xỉ tốt hàm quanh $x_0$ và hàm chắc chắn liên tục tại $x_0$. Sang hàm nhiều biến, đây là một điểm tinh tế rất dễ ngộ nhận: hai đạo hàm riêng $f_x(x_0, y_0)$ và $f_y(x_0, y_0)$ chỉ nhìn hàm dọc theo **đúng hai đường thẳng vuông góc** song song với trục $Ox$ và trục $Oy$, hoàn toàn mù thông tin về hành vi của hàm khi tiến về $(x_0, y_0)$ theo các hướng chéo như $y = x$. Do đó, một hàm hai biến có thể tồn tại cả $f_x(0, 0)$ lẫn $f_y(0, 0)$ nhưng lại bị đứt đoạn (không liên tục) ngay tại $(0, 0)$ (phản ví dụ kinh điển: $f(x, y) = \frac{xy}{x^2 + y^2}$ với $f(0,0) = 0$ có $f_x(0,0) = f_y(0,0) = 0$, nhưng dọc theo đường chéo $y = x$ giá trị hàm luôn bằng $1/2 \not\to 0$).

Để đảm bảo mặt cong thực sự phẳng cục bộ theo **mọi hướng** tiến về $\mathbf{x}_0$, hàm $f: \mathbb{R}^n \to \mathbb{R}$ được định nghĩa là **khả vi toàn phần (totally differentiable)** tại $\mathbf{x}_0$ nếu tồn tại các đạo hàm riêng tại $\mathbf{x}_0$ sao cho **xấp xỉ tuyến tính (linear approximation / tangent hyperplane)** $L(\mathbf{x}) = f(\mathbf{x}_0) + \sum_{i=1}^n \frac{\partial f}{\partial x_i}(\mathbf{x}_0)(x_i - x_{0,i})$ có phần dư tiến về $0$ nhanh hơn khoảng cách Euclid $\|\mathbf{x} - \mathbf{x}_0\|$: $$\lim_{\mathbf{h} \to \mathbf{0}} \frac{f(\mathbf{x}_0 + \mathbf{h}) - f(\mathbf{x}_0) - \sum_{i=1}^n \frac{\partial f}{\partial x_i}(\mathbf{x}_0) h_i}{\|\mathbf{h}\|} = 0$$ Tiểu mục nêu rõ **điều kiện đủ thực hành (Sufficient Condition for Differentiability)**: nếu tất cả các đạo hàm riêng bậc nhất $\frac{\partial f}{\partial x_i}$ tồn tại trên một lân cận mở quanh $\mathbf{x}_0$ và **liên tục tại $\mathbf{x}_0$** (hàm thuộc lớp $C^1$), thì $f$ chắc chắn khả vi toàn phần (và do đó liên tục) tại $\mathbf{x}_0$.

> **Nguồn đối chiếu:** `mit-1802sc`: Unit 2, Session 27: Approximation Formula; Session 32: Total Differentials and the Chain Rule

### Chương 2 — Đạo hàm theo hướng, Vector Gradient, Ma trận Jacobian và Quy tắc dây chuyền trên Đồ thị tính toán (`mco-gradient-jacobian-chain-rule`)

Chương này đóng gói các đạo hàm riêng thành hai đối tượng đại số tuyến tính mạnh mẽ — vector Gradient $\nabla f$ (cho hàm vô hướng) và ma trận Jacobian $J_F$ (cho ánh xạ vector) — từ đó chứng minh hai tính chất hình học cốt lõi của Gradient (hướng tăng nhanh nhất và pháp tuyến mặt đồng mức) cùng quy tắc dây chuyền nhiều biến trên đồ thị tính toán làm cơ sở trực tiếp cho thuật toán Lan truyền ngược (Backpropagation).

*Nguồn chương:* `mit-1802sc` (Unit 2, Part B: Chain Rule, Gradient and Directional Derivatives (Sessions 32–38))

#### Tiểu mục 1: Vector Gradient nabla f(x), Đạo hàm theo hướng đơn vị u và hai tính chất hình học cốt lõi của Gradient (`mco-gjcr-gradient-directional-derivative-geometry` — mức `core`)

Với một hàm vô hướng khả vi $f: \mathbb{R}^n \to \mathbb{R}$, khi xếp tất cả $n$ đạo hàm riêng bậc nhất thành một vector cột trong không gian đầu vào $\mathbb{R}^n$, ta thu được **vector Gradient**: $$\nabla f(\mathbf{x}) = \begin{bmatrix} \dfrac{\partial f}{\partial x_1}(\mathbf{x}) & \dfrac{\partial f}{\partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial f}{\partial x_n}(\mathbf{x}) \end{bmatrix}^T \in \mathbb{R}^n$$ Nhờ vector Gradient, công thức xấp xỉ tuyến tính viết gọn thành tích vô hướng $f(\mathbf{x} + \mathbf{h}) \approx f(\mathbf{x}) + \nabla f(\mathbf{x}) \cdot \mathbf{h}$. Từ đây, nếu ta đứng tại $\mathbf{x}$ và bước đi theo hướng của một **vector đơn vị $\mathbf{u}$ bất kỳ** (với $\|\mathbf{u}\| = 1$, đặt $\mathbf{h} = s\mathbf{u}$), tốc độ thay đổi tức thời của hàm $f$ dọc theo hướng $\mathbf{u}$ được gọi là **Đạo hàm theo hướng (Directional Derivative)** $D_{\mathbf{u}} f(\mathbf{x}) = \left.\frac{d}{ds} f(\mathbf{x} + s\mathbf{u})\right|_{s=0}$ và bằng đúng tích vô hướng: $$D_{\mathbf{u}} f(\mathbf{x}) = \nabla f(\mathbf{x}) \cdot \mathbf{u} = \|\nabla f(\mathbf{x})\| \, \|\mathbf{u}\| \cos\theta = \|\nabla f(\mathbf{x})\| \cos\theta$$ (Lưu ý bắt buộc: vector chỉ hướng $\mathbf{u}$ phải được chuẩn hóa về độ dài $\|\mathbf{u}\| = 1$ trước khi nhân vô hướng với $\nabla f$).

Công thức $D_{\mathbf{u}} f(\mathbf{x}) = \|\nabla f(\mathbf{x})\| \cos\theta$ (khi $\nabla f(\mathbf{x}) \neq \mathbf{0}$) lập tức chứng minh **hai định lý hình học quan trọng nhất của Giải tích nhiều biến**: (1) **Hướng tăng nhanh nhất và giảm nhanh nhất**: vì $\cos\theta \in [-1, 1]$ đạt cực đại bằng $+1$ khi $\theta = 0$ (tức $\mathbf{u}$ cùng hướng với $\nabla f$) và đạt cực tiểu bằng $-1$ khi $\theta = \pi$ (tức $\mathbf{u}$ ngược hướng với $\nabla f$), **vector Gradient $\nabla f(\mathbf{x})$ luôn chỉ đúng hướng làm hàm $f$ tăng nhanh nhất** với tốc độ tăng cực đại bằng $\|\nabla f(\mathbf{x})\|$; ngược lại, **vector âm Gradient $-\nabla f(\mathbf{x})$ chỉ đúng hướng làm hàm $f$ giảm nhanh nhất (steepest descent)**; và (2) **Tính vuông góc với đường/mặt đồng mức**: nếu di chuyển tiếp tuyến dọc theo đường/mặt đồng mức $f(\mathbf{x}(t)) = c$, giá trị hàm không đổi nên đạo hàm theo hướng tiếp tuyến bằng $0$ ($\cos\theta = 0 \implies \theta = 90^\circ$); do đó **tại mọi điểm, vector Gradient $\nabla f(\mathbf{x}_0)$ luôn vuông góc (là vector pháp tuyến) với đường đồng mức / mặt đồng mức đi qua điểm đó**!

> **Nguồn đối chiếu:** `mit-1802sc`: Unit 2, Sessions 35–38: Gradient Definition, Perpendicularity to Level Curves, Proof, Example, and Directional Derivatives

#### Tiểu mục 2: Ma trận Jacobian J_F của ánh xạ vector F: R^n -> R^m và Quy tắc dây chuyền nhiều biến dưới dạng nhân ma trận Jacobian (`mco-gjcr-jacobian-matrix-multivariable-chain-rule` — mức `core`)

Mở rộng từ hàm vô hướng $f: \mathbb{R}^n \to \mathbb{R}$ sang một **ánh xạ nhận vector và trả về vector** $F: \mathbb{R}^n \to \mathbb{R}^m$ gồm $m$ hàm thành phần $F(\mathbf{x}) = (f_1(\mathbf{x}), f_2(\mathbf{x}), \dots, f_m(\mathbf{x}))^T$, đạo hàm bậc nhất toàn phần của $F$ tại $\mathbf{x}$ là một ma trận kích thước $m \times n$ gọi là **Ma trận Jacobian (Jacobian Matrix)** $J_F(\mathbf{x}) = \frac{\partial(f_1, \dots, f_m)}{\partial(x_1, \dots, x_n)}$, trong đó phần tử ở hàng $i$, cột $j$ là $\frac{\partial f_i}{\partial x_j}(\mathbf{x})$ (hay nói cách khác: **hàng thứ $i$ của ma trận Jacobian chính là chuyển vị của vector Gradient của hàm thành phần thứ $i$, $(\nabla f_i)^T$**): $$J_F(\mathbf{x}) = \begin{bmatrix} \dfrac{\partial f_1}{\partial x_1} & \cdots & \dfrac{\partial f_1}{\partial x_n} \\[6pt] \vdots & \ddots & \vdots \\[6pt] \dfrac{\partial f_m}{\partial x_1} & \cdots & \dfrac{\partial f_m}{\partial x_n} \end{bmatrix} \in \mathbb{R}^{m \times n}$$ Ý nghĩa cốt lõi nối trực tiếp về Chương 3 của Đại số tuyến tính (`CS-10`) là: tại lân cận điểm $\mathbf{x}_0$, ánh xạ phi tuyến $F(\mathbf{x}_0 + \Delta\mathbf{x}) \approx F(\mathbf{x}_0) + J_F(\mathbf{x}_0)\,\Delta\mathbf{x}$ được xấp xỉ bởi một **ánh xạ tuyến tính có ma trận chính là $J_F(\mathbf{x}_0)$**.

Nhờ ngôn ngữ ma trận Jacobian, **Quy tắc dây chuyền nhiều biến (Multivariable Chain Rule)** cho hàm hợp của hai ánh xạ khả vi $\mathbf{x} \in \mathbb{R}^n \xrightarrow{G} \mathbf{u} = G(\mathbf{x}) \in \mathbb{R}^k \xrightarrow{F} \mathbf{y} = F(G(\mathbf{x})) \in \mathbb{R}^m$ có dạng hoàn toàn giống hệt một biến — đạo hàm của hàm hợp bằng **tích ma trận của các ma trận Jacobian**: $$J_{F \circ G}(\mathbf{x}) = J_F(G(\mathbf{x})) \cdot J_G(\mathbf{x}) \in \mathbb{R}^{m \times n}$$ Viết cụ thể cho từng thành phần đơn lẻ (khi một hàm vô hướng $z = f(u_1, \dots, u_k)$ phụ thuộc vào $k$ biến trung gian $u_r(x_1, \dots, x_n)$), đạo hàm riêng của $z$ theo một biến đầu vào $x_j$ là **tổng các tích dọc theo tất cả $k$ đường truyền trung gian nối từ $x_j$ tới $z$**: $$\frac{\partial z}{\partial x_j} = \sum_{r=1}^k \frac{\partial z}{\partial u_r} \cdot \frac{\partial u_r}{\partial x_j}$$

> **Nguồn đối chiếu:** `mit-1802sc`: Unit 2, Sessions 32–34: Total Differentials and the Chain Rule, Examples, and the Chain Rule with More Variables; Unit 3, Session 53: Change of Variables

#### Tiểu mục 3: Quy tắc dây chuyền trên Đồ thị tính toán (Computational Graph) và cơ sở toán học của Lan truyền ngược (Reverse-Mode Autodiff) (`mco-gjcr-computational-graphs-backprop-foundation` — mức `core`)

Trong các hệ thống tính toán hiện đại và mạng nơ-ron sâu, một biểu thức toán học phức tạp tính hàm mất mát vô hướng $L(\boldsymbol{\theta}) \in \mathbb{R}$ từ hàng triệu tham số $\boldsymbol{\theta} \in \mathbb{R}^n$ được biểu diễn dưới dạng một **Đồ thị tính toán có hướng không chu trình (Computational Graph — DAG)**, trong đó mỗi nút là một biến trung gian $v_i$ thực hiện một phép toán cơ sở trên các nút cha đi vào nó. Tại mỗi nút trung gian $u$, nếu đầu ra cuối cùng $L$ phụ thuộc vào $u$ thông qua một tập các nút con trực tiếp $v_1, v_2, \dots, v_m$ (tức có các cạnh có hướng $u \to v_r$), thì quy tắc dây chuyền nhiều biến khẳng định đạo hàm toàn phần (độ nhạy $\bar{u} = \frac{\partial L}{\partial u}$) được gom về từ các nút con theo công thức: $$\frac{\partial L}{\partial u} = \sum_{r=1}^m \frac{\partial L}{\partial v_r} \cdot \frac{\partial v_r}{\partial u}$$

Tiểu mục này giải thích vì sao cấu trúc nhân ma trận Jacobian dẫn tới sự khác biệt hiệu năng khổng lồ giữa hai chiều tính đạo hàm trên đồ thị tính toán khi có $n \gg 1$ đầu vào và chỉ có $m = 1$ đầu ra vô hướng $L$: nếu nhân các ma trận Jacobian từ trái sang phải hay từ phải sang trái? Do phép nhân ma trận có tính kết hợp, nếu tính từ đầu vào đi xuôi lên (**Forward-mode AD**), ta phải đẩy đạo hàm theo từng biến đầu vào một nên tốn $n$ lượt duyệt đồ thị; ngược lại, nếu bắt đầu từ nút đầu ra vô hướng $\frac{\partial L}{\partial L} = 1$ và nhân ngược từ trái sang phải dạng **vector-hàng nhân ma trận Jacobian ($v^T J$)** đi lùi về đầu vào theo thứ tự topo ngược (**Reverse-mode Automatic Differentiation / Backpropagation**), ta tính được **đồng thời toàn bộ vector Gradient $\nabla_{\boldsymbol{\theta}} L \in \mathbb{R}^n$ chỉ trong đúng 1 lượt truyền xuôi và 1 lượt truyền ngược**! Đây chính là cầu nối toán học trực tiếp giữa Giải tích nhiều biến và Môn Học sâu (`CS-37`).

> **Nguồn đối chiếu:** `mit-1802sc`: Unit 2, Sessions 32–34: Total Differentials and the Chain Rule; the Chain Rule with More Variables (mathematical foundation) | `d2l-ai`: Chapter 2 (§2.4 Calculus, Gradients, and Chain Rule) & Chapter 5 (§5.3 Forward and Backward Propagation on Computational Graphs)

### Chương 3 — Cực trị tự do, Ma trận Hessian, Nhân tử Lagrange và Thuật toán Hạ Gradient (Gradient Descent) (`mco-analytic-numerical-optimization`)

Chương này tổng hợp toàn bộ kiến thức về Gradient, khai triển Taylor bậc hai và ma trận đối xứng xác định dương (`CS-10`) để giải quyết bài toán tối ưu hóa nhiều biến: phân loại cực tiểu, cực đại và điểm yên ngựa qua ma trận Hessian, giải bài toán tối ưu có ràng buộc bằng Nhân tử Lagrange, và phân tích thuật toán lặp Hạ Gradient (Gradient Descent).

*Nguồn chương:* `mit-1802sc` (Unit 2, Part A, Sessions 28–31: Optimization Problems, Least Squares, Second Derivative Test, and Example; Part C, Sessions 39–41: Lagrange Multipliers)

#### Tiểu mục 1: Ma trận Hessian H(x), khai triển Taylor bậc hai nhiều biến và phân loại Điểm dừng (Cực tiểu, Cực đại, Điểm yên ngựa) (`mco-ano-hessian-taylor-stationary-saddle` — mức `core`)

Với hàm khả vi hai lần liên tục $f: \mathbb{R}^n \to \mathbb{R}$, gom tất cả $n^2$ đạo hàm riêng cấp hai thành một ma trận vuông đối xứng $n \times n$ cho ta **Ma trận Hessian**: $$H(\mathbf{x}) = \nabla^2 f(\mathbf{x}) = \left[ \frac{\partial^2 f}{\partial x_i \partial x_j}(\mathbf{x}) \right]_{i,j=1}^n \in \mathbb{R}^{n \times n}$$ Sử dụng vector Gradient $\nabla f(\mathbf{x}_0)$ cho bậc nhất và dạng toàn phương của ma trận Hessian cho bậc hai, **Khai triển Taylor bậc hai nhiều biến** quanh $\mathbf{x}_0$ với bước dịch chuyển $\mathbf{h} = \mathbf{x} - \mathbf{x}_0$ có dạng ma trận cực kỳ cô đọng: $$f(\mathbf{x}_0 + \mathbf{h}) = f(\mathbf{x}_0) + \nabla f(\mathbf{x}_0)^T \mathbf{h} + \frac{1}{2} \mathbf{h}^T H(\mathbf{x}_0) \mathbf{h} + o(\|\mathbf{h}\|^2)$$

Tại một **điểm dừng (stationary / critical point)** $\mathbf{x}^*$ nơi $\nabla f(\mathbf{x}^*) = \mathbf{0}$ (mặt phẳng tiếp diện nằm ngang, mọi đạo hàm riêng bậc nhất đều bằng $0$), số hạng bậc nhất biến mất và sự thay đổi của hàm $f(\mathbf{x}^* + \mathbf{h}) - f(\mathbf{x}^*) \approx \frac{1}{2}\mathbf{h}^T H(\mathbf{x}^*) \mathbf{h}$ hoàn toàn được quyết định bởi dấu của **dạng toàn phương của ma trận đối xứng $H(\mathbf{x}^*)$** đã học ở Chương 6 của Môn CS-10: (1) Nếu $H(\mathbf{x}^*)$ **xác định dương (Positive Definite — mọi trị riêng $\lambda_i > 0$)**, thì $\mathbf{h}^T H \mathbf{h} > 0$ theo mọi hướng $\mathbf{h} \neq \mathbf{0}$, nên $\mathbf{x}^*$ là **điểm cực tiểu địa phương chặt (strict local minimum)** (trong 2 biến: $D = f_{xx}f_{yy} - f_{xy}^2 > 0$ và $f_{xx} > 0$); (2) Nếu $H(\mathbf{x}^*)$ **xác định âm (Negative Definite — mọi trị riêng $\lambda_i < 0$)**, $\mathbf{x}^*$ là **điểm cực đại địa phương chặt**; (3) Nếu $H(\mathbf{x}^*)$ có **cả trị riêng dương lẫn trị riêng âm (Indefinite)**, hàm cong lên theo phương vector riêng này nhưng lại cong xuống theo phương vector riêng khác, tạo thành **Điểm yên ngựa (Saddle Point)** (trong 2 biến: $D = f_{xx}f_{yy} - f_{xy}^2 < 0$, điển hình là $f(x,y) = x^2 - y^2$ tại $(0,0)$); và (4) Nếu $H(\mathbf{x}^*)$ có trị riêng bằng $0$ (suy biến), bậc hai chưa đủ kết luận. Đặc biệt, nếu $H(\mathbf{x})$ nửa xác định dương ($H(\mathbf{x}) \succeq 0$) trên toàn bộ một miền lồi, thì $f$ là **hàm lồi nhiều biến** và mọi điểm dừng $\nabla f(\mathbf{x}^*) = \mathbf{0}$ đều là **cực tiểu toàn cục**.

> **Nguồn đối chiếu:** `mit-1802sc`: Unit 2, Session 30: Second Derivative Test (local extrema and saddle points); Session 31: Example

#### Tiểu mục 2: Tối ưu hóa có ràng buộc đẳng thức và Phương pháp Nhân tử Lagrange (nabla f = lambda nabla g) (`mco-ano-lagrange-multipliers-constrained` — mức `core`)

Trong nhiều bài toán thực tế, ta không tìm cực trị của $f(\mathbf{x})$ trên toàn không gian tự do mà phải tuân theo một (hoặc nhiều) điều kiện ràng buộc đẳng thức $g(\mathbf{x}) = c$ (ví dụ: cực đại hóa entropy xác suất với ràng buộc tổng xác suất $\sum p_i = 1$, hoặc trong PCA ở Môn CS-10/CS-36 tìm phương $\mathbf{u}$ cực đại hóa phương sai $\mathbf{u}^T S \mathbf{u}$ dưới ràng buộc độ dài đơn vị $g(\mathbf{u}) = \mathbf{u}^T \mathbf{u} = 1$). Điểm cực trị có ràng buộc thường **không phải** là điểm có $\nabla f = \mathbf{0}$.

Cơ chế hình học của **Phương pháp Nhân tử Lagrange (Method of Lagrange Multipliers)** dựa trực tiếp vào tính vuông góc của Gradient với mặt đồng mức: khi điểm $\mathbf{x}$ bị buộc phải di chuyển trên mặt ràng buộc $g(\mathbf{x}) = c$, nếu tại $\mathbf{x}$ hình chiếu của $\nabla f(\mathbf{x})$ dọc theo mặt tiếp diện của mặt $g = c$ vẫn còn khác $0$, ta vẫn có thể trượt dọc theo mặt ràng buộc theo hướng đó để làm tăng (hoặc giảm) thêm giá trị của $f$. Do đó, tại điểm đạt cực trị trên mặt ràng buộc $\mathbf{x}^*$ (với điều kiện chính quy $\nabla g(\mathbf{x}^*) \neq \mathbf{0}$), mọi hướng tiếp tuyến với mặt $g = c$ đều phải vuông góc với $\nabla f(\mathbf{x}^*)$, nghĩa là hai vector pháp tuyến $\nabla f(\mathbf{x}^*)$ và $\nabla g(\mathbf{x}^*)$ bắt buộc phải **song song (cùng phương) với nhau**: $$\nabla f(\mathbf{x}^*) = \lambda \, \nabla g(\mathbf{x}^*), \qquad g(\mathbf{x}^*) = c$$ Số vô hướng $\lambda$ được gọi là **nhân tử Lagrange** (tương đương việc tìm điểm dừng của hàm Lagrange $\mathcal{L}(\mathbf{x}, \lambda) = f(\mathbf{x}) - \lambda (g(\mathbf{x}) - c)$). Ví dụ kinh điển: cực đại hóa $f(\mathbf{u}) = \mathbf{u}^T S \mathbf{u}$ với $g(\mathbf{u}) = \mathbf{u}^T \mathbf{u} = 1$ có $\nabla f = 2S\mathbf{u}$ và $\nabla g = 2\mathbf{u}$, nên điều kiện Lagrange $2S\mathbf{u} = \lambda (2\mathbf{u}) \iff S\mathbf{u} = \lambda \mathbf{u}$ xác định các hướng dừng trên mặt cầu đơn vị là **vector riêng của ma trận đối xứng $S$**. Tại một vector riêng đơn vị, giá trị $f(\mathbf{u})$ bằng trị riêng tương ứng; vì vậy để chọn cực đại toàn cục ta lấy vector riêng ứng với trị riêng lớn nhất $\lambda_{\max}$, còn cực tiểu toàn cục ứng với trị riêng nhỏ nhất.

> **Nguồn đối chiếu:** `mit-1802sc`: Unit 2, Part C, Sessions 39–41: Constrained Optimization and Lagrange Multipliers

#### Tiểu mục 3: Đối chiếu cực trị giải tích với Thuật toán số Hạ Gradient (Gradient Descent), hệ số học (Learning Rate) và số điều kiện (`mco-ano-gradient-descent-step-size-conditioning` — mức `core`)

Khi hàm mục tiêu $f(\mathbf{x})$ là hàm bậc hai đơn giản (như bình phương tối thiểu $f(\mathbf{x}) = \|A\mathbf{x} - \mathbf{b}\|^2$ có $\nabla f(\mathbf{x}) = 2A^T(A\mathbf{x} - \mathbf{b}) = \mathbf{0}$), phương trình $\nabla f(\mathbf{x}) = \mathbf{0}$ là hệ tuyến tính nên giải được nghiệm đóng giải tích. Nhưng với hầu hết các mô hình phi tuyến trong học máy (như hồi quy Logistic hay mạng nơ-ron), hệ $\nabla f(\mathbf{x}) = \mathbf{0}$ là hệ phương trình siêu việt không có công thức nghiệm đóng, hoặc số chiều $n$ lên tới hàng triệu khiến việc lưu và nghịch đảo ma trận Hessian $n \times n$ ($O(n^2)$ bộ nhớ, $O(n^3)$ tính toán trong phương pháp Newton $\mathbf{x}_{k+1} = \mathbf{x}_k - H(\mathbf{x}_k)^{-1}\nabla f(\mathbf{x}_k)$) trở nên bất khả thi. Khi đó, ta sử dụng thuật toán tối ưu lặp bậc nhất **Hạ Gradient (Gradient Descent)**: xuất phát từ $\mathbf{x}_0$, ở mỗi bước đi ngược hướng Gradient một bước nhỏ tỉ lệ với **tốc độ học / cỡ bước (step size / learning rate) $\eta > 0$**: $$\mathbf{x}_{k+1} = \mathbf{x}_k - \eta \, \nabla f(\mathbf{x}_k)$$

Bằng cách xét hàm bậc hai lồi chặt $f(\mathbf{x}) = \frac{1}{2}\mathbf{x}^T A \mathbf{x}$ (với ma trận Hessian $A$ đối xứng xác định dương có các trị riêng $0 < \lambda_{\min} \le \dots \le \lambda_{\max}$), tiểu mục phân tích rõ cơ chế hội tụ và các hiện tượng thực tế của Gradient Descent: trong hệ tọa độ vector riêng của $A$, mỗi thành phần thứ $i$ thu hẹp theo cấp số nhân $z_{k+1, i} = (1 - \eta \lambda_i) z_{k, i}$. Do đó, thuật toán **chỉ hội tụ khi $|1 - \eta \lambda_{\max}| < 1 \iff 0 < \eta < \frac{2}{\lambda_{\max}}$**: nếu chọn $\eta$ quá nhỏ, thuật toán bò rất chậm; nếu chọn $\eta > \frac{2}{\lambda_{\max}}$, bước nhảy vọt qua đáy thung lũng làm giá trị hàm dao động ngày càng lớn và **bùng nổ phân kỳ (divergence / exploding loss)**. Hơn nữa, khi tỉ số giữa độ cong lớn nhất và độ cong nhỏ nhất (**số điều kiện / condition number $\kappa = \frac{\lambda_{\max}}{\lambda_{\min}} \gg 1$**) rất lớn (thung lũng hẹp và dốc đứng ở hai bên sườn nhưng lại gần như phẳng dọc theo đáy), cỡ bước $\eta$ bị chặn nhỏ bởi $2/\lambda_{\max}$ khiến quỹ đạo Gradient Descent dội qua lại hình chữ chi (zig-zag) giữa hai vách hẹp và tiến về cực tiểu rất chậm theo hướng $\lambda_{\min}$ — giải thích lý do thực tế phải chuẩn hóa đặc trưng (feature scaling) và dùng các biến thể có quán tính (Momentum / Adam).

> **Nguồn đối chiếu:** `mit-1802sc`: Unit 2, Session 29: Least Squares; Sessions 35–38: Gradient and Directional Derivatives (directional foundation; algorithmic analysis is supported by Dive into Deep Learning) | `d2l-ai`: Chapter 12: §12.1 Optimization and Deep Learning (Local Minima, Saddle Points) & §12.3 Gradient Descent and Conditioning

### Chương 4 — Tích phân kép, Tích phân bội, Định lý Fubini và Công thức đổi biến qua Định thức Jacobian (`mco-multiple-integrals`)

Chương cuối mở rộng tích phân Riemann sang miền hai chiều và nhiều chiều thông qua Định lý Fubini tính tích phân lặp, kỹ thuật dựng hình để đổi thứ tự lấy tích phân và công thức đổi biến tổng quát nhân với trị tuyệt đối định thức Jacobian $|\det J|$ (tọa độ cực/cầu, chuẩn hóa tích phân Gaussian) — công cụ thiết yếu để tính xác suất đồng thời, phân phối biên và kỳ vọng của vector ngẫu nhiên liên tục ở Môn CS-13.

*Nguồn chương:* `mit-1802sc` (Unit 3, Part A: Double Integrals (Sessions 47–55); Unit 4, Part A: Triple Integrals (Sessions 74–78); vector calculus extensions in Unit 3 Parts B–C and Unit 4 Parts B–C)

#### Tiểu mục 1: Tích phân kép và tích phân bội trên miền phẳng/không gian, Định lý Fubini tính tích phân lặp và kỹ thuật đổi thứ tự lấy tích phân (`mco-mi-double-triple-integrals-fubini` — mức `core`)

Tương tự như tích phân một biến chia đoạn $[a, b]$ thành các đoạn nhỏ $\Delta x$, **tích phân kép (double integral)** $\iint_R f(x, y)\,dA$ trên một miền phẳng $R \subseteq \mathbb{R}^2$ chia miền $R$ thành lưới các ô chữ nhật diện tích $\Delta A = \Delta x \, \Delta y$ và lấy giới hạn của tổng Riemann hai chiều $\sum f(x_i^*, y_j^*)\,\Delta A$ khi lưới chia mịn dần (biểu diễn thể tích có dấu bên dưới mặt $z = f(x, y)$ hoặc tổng xác suất khi $f(x, y) \ge 0$ là hàm mật độ xác suất đồng thời). Theo **Định lý Fubini**, khi $f$ liên tục trên hình chữ nhật $[a, b] \times [c, d]$ (hoặc khi tích phân của $|f|$ hữu hạn), tích phân kép có thể được tính bằng hai lần lấy tích phân một biến liên tiếp (**tích phân lặp / iterated integral**) theo bất kỳ thứ tự nào: $$\iint_{[a,b]\times[c,d]} f(x, y)\,dA = \int_a^b \left( \int_c^d f(x, y)\,dy \right) dx = \int_c^d \left( \int_a^b f(x, y)\,dx \right) dy$$ (trong đó khi tính tích phân bên trong theo $y$, biến $x$ được giữ cố định như hằng số).

Đối với các miền phẳng $R$ không phải hình chữ nhật (như miền tam giác $0 \le x \le y < \infty$ khi tính xác suất biến ngẫu nhiên $X \le Y$ ở Môn CS-13), tiểu mục hướng dẫn quy trình vẽ hình miền lấy tích phân để xác định **cận biến thiên của biến trong phụ thuộc vào biến ngoài**: nếu cắt theo các dải thẳng đứng (cố định $x \in [a, b]$ ở ngoài), cận của $y$ ở tích phân trong sẽ chạy từ đường biên dưới $y = g_1(x)$ đến đường biên trên $y = g_2(x)$; ngược lại, nếu cắt theo dải nằm ngang (cố định $y \in [c, d]$ ở ngoài), cận của $x$ sẽ chạy từ biên trái $x = h_1(y)$ sang biên phải $x = h_2(y)$. Kỹ thuật **đổi thứ tự lấy tích phân (`dx dy` $\leftrightarrow$ `dy dx`)** bằng cách dựng lại miền hình học $R$ đặc biệt quan trọng khi nguyên hàm bên trong không tính được theo thứ tự ban đầu (như $\int_0^1 \int_x^1 e^{y^2}\,dy\,dx$ không có nguyên hàm sơ cấp theo $y$, nhưng đổi thứ tự thành $\int_0^1 \int_0^y e^{y^2}\,dx\,dy = \int_0^1 y e^{y^2}\,dy$ lại tính được ngay lập tức!).

> **Nguồn đối chiếu:** `mit-1802sc`: Unit 3, Sessions 47–49: Definition, Examples, and Exchanging the Order of Double Integration; Unit 4, Sessions 74–77: Triple Integrals in Rectangular, Cylindrical, and Spherical Coordinates

#### Tiểu mục 2: Công thức đổi biến trong tích phân bội với trị tuyệt đối Định thức Jacobian |det J|, tọa độ cực và tích phân chuẩn Gaussian (`mco-mi-jacobian-change-of-variables-gaussian` — mức `core`)

Khi miền lấy tích phân hoặc biểu thức dưới dấu tích phân có tính đối xứng tròn/elip hoặc phụ thuộc vào tổ hợp biến $(u, v)$, ta thực hiện phép đổi biến khả nghịch một-một $(x, y) = T(u, v) = (x(u, v), y(u, v))$ biến miền $R_{uv}$ sang miền $R_{xy}$. Một ô chữ nhật vô cùng bé diện tích $\Delta u \, \Delta v$ trong mặt phẳng $(u, v)$ khi qua ánh xạ $T$ sẽ bị biến thành một hình bình hành cong trong mặt phẳng $(x, y)$ được căng bởi hai vector tiếp tuyến $\begin{bmatrix} x_u \\ y_u \end{bmatrix}\Delta u$ và $\begin{bmatrix} x_v \\ y_v \end{bmatrix}\Delta v$. Theo đúng ý nghĩa hình học của định thức ở Chương 5 Môn CS-10, diện tích của hình bình hành đó bằng trị tuyệt đối định thức của ma trận Jacobian nhân với $\Delta u \, \Delta v$! Từ đó ta có **Công thức đổi biến tổng quát trong tích phân bội**: $$\iint_{R_{xy}} f(x, y)\,dx\,dy = \iint_{R_{uv}} f(x(u, v), y(u, v)) \, \left| \det J_T(u, v) \right| \, du\,dv$$ trong đó $\det J_T(u, v) = \frac{\partial(x, y)}{\partial(u, v)} = \det \begin{bmatrix} x_u & x_v \\ y_u & y_v \end{bmatrix}$ là **định thức Jacobian** (tổng quát hoàn toàn cho $n$ biến: $d\mathbf{x} = |\det J_T(\mathbf{u})|\,d\mathbf{u}$).

Áp dụng công thức này cho phép đổi sang **tọa độ cực (polar coordinates)** $x = r\cos\theta, y = r\sin\theta$ cho ta định thức Jacobian $\det \begin{bmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{bmatrix} = r(\cos^2\theta + \sin^2\theta) = r$, giải thích vì sao phần tử diện tích trong tọa độ cực bắt buộc có thêm thừa số $r$: **$dx\,dy = r\,dr\,d\theta$** (và trong tọa độ cầu 3D là $\rho^2 \sin\phi\,d\rho\,d\phi\,d\theta$). Nhờ đổi biến sang tọa độ cực, tiểu mục trình bày phép chứng minh kinh điển của Poisson cho **Tích phân Gaussian chuẩn** (nền tảng của phân phối chuẩn trong Xác suất `CS-13`): đặt $I = \int_{-\infty}^\infty e^{-x^2/2}\,dx$, bình phương thành tích phân kép trên toàn mặt phẳng $\mathbb{R}^2$: $$I^2 = \left(\int_{-\infty}^\infty e^{-x^2/2}\,dx\right)\left(\int_{-\infty}^\infty e^{-y^2/2}\,dy\right) = \iint_{\mathbb{R}^2} e^{-(x^2+y^2)/2}\,dx\,dy = \int_0^{2\pi} \int_0^\infty e^{-r^2/2} \, r\,dr\,d\theta = 2\pi \Big[-e^{-r^2/2}\Big]_0^\infty = 2\pi \implies \int_{-\infty}^\infty e^{-x^2/2}\,dx = \sqrt{2\pi}$$

> **Nguồn đối chiếu:** `mit-1802sc`: Unit 3, Session 50: Double Integrals in Polar Coordinates; Sessions 53–55: Change of Variables, Polar Coordinates, and Example; Unit 4, Sessions 76–77: Spherical Coordinates

#### Tiểu mục 3: Giải tích trường vector cơ sở: Tích phân đường, trường bảo toàn (Gradient Field), toán tử Divergence và Curl (Mở rộng) (`mco-mi-vector-fields-divergence-stokes` — mức `extension`)

Tiểu mục mở rộng này giới thiệu ngôn ngữ giải tích trường vector dành cho người học đi sâu vào mô phỏng vật lý, thủy động lực học, đồ họa máy tính 3D và phương trình đạo hàm riêng: một **trường vector (vector field)** $\mathbf{F}(\mathbf{x})$ gắn mỗi điểm trong không gian với một vector (như trường vận tốc dòng chảy hay trường lực). Khi tích phân thành phần tiếp tuyến của $\mathbf{F}$ dọc theo một đường cong định hướng $C$, ta được **tích phân đường (line integral)** $\int_C \mathbf{F} \cdot d\mathbf{r}$. Nếu trường vector $\mathbf{F}$ chính là Gradient của một hàm thế năng vô hướng ($\mathbf{F} = \nabla f$, gọi là **trường bảo toàn / conservative field**), thì Định lý cơ bản cho tích phân đường khẳng định $\int_C \nabla f \cdot d\mathbf{r} = f(\mathbf{B}) - f(\mathbf{A})$ chỉ phụ thuộc vào điểm đầu $\mathbf{A}$ và điểm cuối $\mathbf{B}$ mà không phụ thuộc vào đường đi (và tích phân trên mọi đường cong kín đều bằng $0$).

Cuối cùng, tiểu mục tóm lược ý nghĩa của hai toán tử vi phân trường vector và ba định lý tích phân biên kinh điển (đều là tổng quát hóa nhiều chiều của Định lý cơ bản của giải tích FTC — tích phân của đạo hàm bên trong miền bằng tích phân của hàm trên biên của miền): **Độ phân kỳ (Divergence)** $\operatorname{div} \mathbf{F} = \nabla \cdot \mathbf{F} = \sum_{i=1}^n \frac{\partial F_i}{\partial x_i}$ đo mật độ nguồn phát/thu thông lượng tại một điểm (gắn với Định lý thông lượng Green–Gauss / Divergence Theorem $\iiint_E (\nabla \cdot \mathbf{F})\,dV = \iint_{\partial E} \mathbf{F}\cdot \mathbf{n}\,dS$), và **Độ xoáy (Curl)** $\operatorname{curl} \mathbf{F} = \nabla \times \mathbf{F}$ đo xu hướng quay cục bộ quanh một trục (gắn với Định lý Green trên mặt phẳng và Định lý Stokes trên mặt cong $\iint_S (\nabla \times \mathbf{F})\cdot \mathbf{n}\,dS = \oint_{\partial S} \mathbf{F}\cdot d\mathbf{r}$).

> **Nguồn đối chiếu:** `mit-1802sc`: Unit 3, Part B (Vector Calculus in 2D: Line Integrals, Conservative Fields, Green’s Theorem) & Unit 4 (Vector Calculus in 3D: Divergence Theorem and Stokes’ Theorem)

---

## CS-13: Xác suất (`probability`)

- **Thuộc khối:** Khối II — Lập trình và toán nền CS
- **Phân loại:** `core`
- **Điều kiện tiên quyết:**
  - `discrete-math` (*required*): Cần nắm vững đại số tập hợp, nguyên lý đếm tổ hợp, công thức nhị thức, tổng hữu hạn và chuỗi từ Môn CS-09.
  - `single-variable-calculus` (*required*): Cần nắm vững đạo hàm, Định lý cơ bản của giải tích (FTC), tích phân từng phần, tích phân suy rộng và chuỗi lũy thừa từ Môn CS-11.
  - `multivariable-calculus-optimization` (*co_requisite*): Cần tích phân kép (Định lý Fubini) và đổi biến khi học phân phối xác suất đồng thời của hai biến ngẫu nhiên liên tục ở Chương 4.

### Tổng quan môn học

Môn học xây dựng ngôn ngữ toán học chặt chẽ để mô hình hóa sự bất định và ngẫu nhiên — trụ cột của thuật toán ngẫu nhiên (randomized algorithms), cấu trúc dữ liệu băm, phân tích hiệu năng hệ thống và mạng máy tính, mật mã học, học máy và trí tuệ nhân tạo. Theo giáo trình MIT 18.05 kết hợp MIT 6.042J, môn học xuất phát từ không gian mẫu $\Omega$, đại số các biến cố và ba tiên đề xác suất Kolmogorov, sau đó phát triển xác suất có điều kiện $P(A \mid B)$, sự phân biệt cốt lõi giữa hai biến cố xung khắc (disjoint) với hai biến cố độc lập (independent), quy tắc nhân, công thức xác suất toàn phần và **Định lý Bayes** kèm phân tích sai lầm bỏ qua tỷ lệ nền (base-rate fallacy).

Từ biến cố, môn học nâng lên khái niệm **Biến ngẫu nhiên (Random Variable)**: biến ngẫu nhiên rời rạc với hàm khối xác suất (PMF), kỳ vọng $E[X]$, phương sai $\operatorname{Var}(X)$, các họ phân phối chuẩn mực (Bernoulli, Binomial, Geometric, Poisson) và đặc biệt là công cụ mạnh nhất của xác suất tổ hợp trong CS — **Tính chất tuyến tính của kỳ vọng (Linearity of Expectation)** kết hợp biến ngẫu nhiên chỉ thị (indicator random variables) áp dụng đúng ngay cả khi các biến phụ thuộc nhau. Hai chương cuối mở rộng sang biến ngẫu nhiên liên tục với hàm mật độ (PDF) và hàm phân phối tích lũy (CDF), các phân phối Uniform, Exponential (tính chất không nhớ), Normal/Gaussian, phân phối đồng thời (joint), phân phối biên (marginal), hiệp phương sai (covariance), hệ số tương quan, các bất đẳng thức đuôi (Markov, Chebyshev, Chernoff), **Luật số lớn (LLN)** và **Định lý giới hạn trung tâm (CLT)**.

### Giới hạn học thuật (`boundaries`)

- Phân biệt rõ biến ngẫu nhiên rời rạc (tính xác suất tại từng điểm $P(X = x)$ bằng PMF và dùng tổng $\Sigma$) với biến ngẫu nhiên liên tục (nơi xác suất tại một điểm đơn lẻ luôn bằng $0$, $P(X = x) = 0$, và mật độ $f_X(x)$ có thể lớn hơn $1$ miễn là tích phân $\int_{-\infty}^\infty f_X(x)\,dx = 1$).
- Làm rõ các điều kiện áp dụng: tính tuyến tính của kỳ vọng $E[X + Y] = E[X] + E[Y]$ **không cần giả thiết độc lập**, nhưng tính cộng tính của phương sai $\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y)$ đòi hỏi các biến không tương quan/độc lập; tương quan bằng $0$ ($operatorname{Cov}(X,Y) = 0$) không suy ra độc lập; và Định lý giới hạn trung tâm (CLT) chuẩn đòi hỏi các biến có phương sai hữu hạn.

### Nguồn giáo trình của môn học

- **Introduction to Probability and Statistics (MIT 18.05)** (`mit-1805-2022`, *primary*): Classes 1–9: Probability, Conditional Probability, Independence, Bayes’ Theorem, Discrete & Continuous Random Variables, Expectation, Variance, Joint Distributions, Covariance, Law of Large Numbers, and Central Limit Theorem — URL: https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/pages/syllabus/
- **Mathematics for Computer Science (MIT 6.042J Spring 2015)** (`mit-6042j-2015`, *primary*): MCS 2015: Chapters 16–19 — Events and Probability Spaces, Conditional Probability, Random Variables, Expectation (§18.4–18.5), and Deviation Bounds (§19.1–19.6) — URL: https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/

### Chương 1 — Không gian xác suất, Tiên đề Kolmogorov, Xác suất có điều kiện, Tính độc lập và Định lý Bayes (`prob-axioms-conditional-bayes`)

Chương mở đầu thiết lập nền tảng tiên đề Kolmogorov trên không gian mẫu và các biến cố (kèm cận hợp Boole Union Bound), làm rõ cơ chế cập nhật niềm tin khi có thêm thông tin mới thông qua xác suất có điều kiện, công thức xác suất toàn phần và Định lý Bayes, đồng thời sửa các ngộ nhận trực giác phổ biến nhất về sự khác biệt giữa xung khắc với độc lập, độc lập đôi một với độc lập toàn phần, và sai lầm bỏ qua tỷ lệ nền (base-rate fallacy).

*Nguồn chương:* `mit-1805-2022` (Classes 1a–1b (Introduction; Counting and Sets), Class 2 (Probability: Terminology and Examples), and Class 3 (Conditional Probability, Independence, Bayes’ Theorem)); `mit-6042j-2015` (Chapter 16 (Events and Probability Spaces) & Chapter 17 (Conditional Probability and Independence))

#### Tiểu mục 1: Không gian mẫu (Sample Space), Biến cố (Events), Ba tiên đề Kolmogorov và các quy tắc suy diễn từ tiên đề (`prob-acb-sample-space-kolmogorov-axioms` — mức `core`)

Mọi mô hình xác suất đều bắt đầu bằng việc định nghĩa một **Không gian mẫu (Sample Space) $\Omega$** — tập hợp tất cả các kết quả sơ cấp (outcomes $\omega \in \Omega$) loại trừ lẫn nhau của một phép thử ngẫu nhiên (không gian mẫu có thể hữu hạn, vô hạn đếm được như số lần tung đồng xu cho tới khi ngửa, hoặc liên tục không đếm được như thời gian chờ một gói tin mạng). Một **Biến cố (Event) $A \subseteq \Omega$** là một tập hợp con của không gian mẫu; phép hợp $A \cup B$ biểu diễn biến cố "ít nhất một trong hai xảy ra", phép giao $A \cap B$ biểu diễn "cả hai cùng xảy ra", và phần bù $A^c = \Omega \setminus A$ biểu diễn "biến cố $A$ không xảy ra". Hai biến cố được gọi là **xung khắc / rời nhau (mutually exclusive / disjoint)** nếu chúng không thể đồng thời xảy ra: $A \cap B = \emptyset$.

**Hàm xác suất $P$** gán mỗi biến cố $A$ với một số thực $P(A)$ thỏa mãn **Ba tiên đề Kolmogorov**: (1) **Tính không âm**: $P(A) \ge 0$ với mọi $A \subseteq \Omega$; (2) **Tính chuẩn hóa**: $P(\Omega) = 1$; và (3) **Tính cộng tính đếm được (Countable Additivity)**: nếu dãy biến cố $A_1, A_2, \dots$ đôi một xung khắc ($A_i \cap A_j = \emptyset$ với mọi $i \neq j$), thì xác suất của hợp bằng tổng các xác suất: $P\left(\bigcup_{i=1}^\infty A_i\right) = \sum_{i=1}^\infty P(A_i)$. Chỉ từ ba tiên đề tối giản này, ta chứng minh được toàn bộ các quy tắc cơ bản: $P(\emptyset) = 0$; quy tắc phần bù $P(A^c) = 1 - P(A)$; tính đơn điệu ($A \subseteq B \implies P(A) \le P(B)$); công thức bù trừ $P(A \cup B) = P(A) + P(B) - P(A \cap B)$; và một công cụ cực kỳ lợi hại để chặn xác suất thất bại của thuật toán ngẫu nhiên là **Cận hợp Boole (Union Bound)**: với các biến cố $A_1, \dots, A_n$ **bất kỳ (không cần xung khắc cũng không cần độc lập)**, luôn có: $$P(A_1 \cup A_2 \cup \dots \cup A_n) \le \sum_{i=1}^n P(A_i)$$

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 2: Probability: Terminology and Examples; Class 1b: Counting and Sets | `mit-6042j-2015`: MCS 2015 §16.1–16.5: Events and Probability Spaces; §16.5.2: The Union Bound

#### Tiểu mục 2: Xác suất có điều kiện P(A|B), Quy tắc nhân, Phân biệt Xung khắc với Độc lập và Độc lập đôi một so với Độc lập toàn phần (`prob-acb-conditional-probability-independence` — mức `core`)

Khi biết biến cố $B$ (với $P(B) > 0$) đã xảy ra, không gian mẫu hiệu dụng bị thu hẹp từ $\Omega$ về tập $B$, và tỷ trọng của phần biến cố $A$ nằm bên trong $B$ được định nghĩa là **Xác suất có điều kiện của $A$ khi biết $B$ (Conditional Probability)**: $$P(A \mid B) = \frac{P(A \cap B)}{P(B)} \iff P(A \cap B) = P(B) \, P(A \mid B)$$ Đẳng thức vế phải chính là **Quy tắc nhân xác suất (Multiplication Rule / Chain Rule)**, mở rộng tự nhiên cho $n$ biến cố dọc theo cây xác suất: $P(A_1 \cap A_2 \cap A_3) = P(A_1)\,P(A_2 \mid A_1)\,P(A_3 \mid A_1 \cap A_2)$.

Hai biến cố $A$ và $B$ được định nghĩa là **độc lập (independent)** nếu việc biết $B$ xảy ra hoàn toàn không làm thay đổi xác suất của $A$ (tức $P(A \mid B) = P(A)$ khi $P(B) > 0$), hay dưới dạng đối xứng tổng quát: $$P(A \cap B) = P(A)\,P(B)$$ Tiểu mục này giải quyết triệt để **hai ngộ nhận phổ biến nhất** của người học xác suất: (1) **Đánh đồng "Xung khắc (Disjoint)" với "Độc lập (Independent)"**: đây là hai khái niệm gần như trái ngược nhau! Nếu $A$ và $B$ có xác suất dương ($P(A) > 0, P(B) > 0$) và **xung khắc** ($A \cap B = \emptyset$), thì chúng **phụ thuộc vào nhau một cách cực đoan nhất**, bởi vì biết $B$ đã xảy ra lập tức ép $P(A \mid B) = 0 \neq P(A)$; và (2) **Nhầm Độc lập đôi một (Pairwise Independence) với Độc lập toàn phần (Mutual Independence)**: một họ $n$ biến cố $A_1, \dots, A_n$ là độc lập toàn phần nếu xác suất giao của **mọi tập con bất kỳ** đều bằng tích xác suất; việc chỉ có $P(A_i \cap A_j) = P(A_i)P(A_j)$ cho từng cặp hai biến cố (độc lập đôi một) **không đủ** suy ra $P(A_1 \cap A_2 \cap A_3) = P(A_1)P(A_2)P(A_3)$ (phản ví dụ kinh điển trong mật mã học: tung hai đồng xu công bằng độc lập $A_1, A_2$ và đặt $A_3 = A_1 \oplus A_2$ là phép XOR của hai đồng xu; bất kỳ 2 trong 3 biến cố đều độc lập, nhưng biết 2 biến cố sẽ xác định hoàn toàn biến cố thứ 3!).

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 3: Conditional Probability, Independence, Bayes’ Theorem | `mit-6042j-2015`: MCS 2015 §17.1–17.8: Conditional Probability, Independence, and Mutual Independence

#### Tiểu mục 3: Công thức xác suất toàn phần (Law of Total Probability), Định lý Bayes và Sai lầm bỏ qua tỷ lệ nền (Base-Rate Fallacy) (`prob-acb-total-probability-bayes-base-rate` — mức `core`)

Khi không gian mẫu $\Omega$ được chia thành một phân hoạch gồm các kịch bản rời nhau $H_1, H_2, \dots, H_k$ (tức $H_i \cap H_j = \emptyset$ và $\bigcup_{i=1}^k H_i = \Omega$), bất kỳ biến cố quan sát $E$ nào cũng được tách thành hợp các phần xung khắc $E = \bigcup_{i=1}^k (E \cap H_i)$, dẫn tới **Công thức xác suất toàn phần (Law of Total Probability)**: $$P(E) = \sum_{i=1}^k P(E \cap H_i) = \sum_{i=1}^k P(E \mid H_i)\,P(H_i)$$ Công thức này cho phép thực hiện chiến lược "chia để trị trong xác suất": tính xác suất của biến cố phức tạp $E$ bằng cách xét từng trường hợp giả định $H_i$ đơn giản rồi lấy trung bình có trọng số.

Khi bài toán đảo ngược chiều — ta biết xác suất thuận $P(E \mid H_i)$ (nếu giả thuyết $H_i$ đúng thì khả năng xuất hiện bằng chứng $E$ là bao nhiêu) và quan sát thấy bằng chứng $E$ đã xảy ra, làm thế nào để tính xác suất ngược $P(H_i \mid E)$ (khả năng giả thuyết $H_i$ là nguyên nhân thực sự khi đã thấy $E$)? Kết hợp định nghĩa xác suất có điều kiện với công thức xác suất toàn phần ở mẫu số cho ta **Định lý Bayes (Bayes’ Theorem)**: $$P(H_i \mid E) = \frac{P(E \mid H_i)\,P(H_i)}{P(E)} = \frac{P(E \mid H_i)\,P(H_i)}{\sum_{j=1}^k P(E \mid H_j)\,P(H_j)}$$ Trong ngôn ngữ suy luận, $P(H_i)$ là **xác suất tiên nghiệm / tỷ lệ nền (prior / base rate)** trước khi có bằng chứng, $P(E \mid H_i)$ là **độ hợp lý (likelihood)**, và $P(H_i \mid E)$ là **xác suất hậu nghiệm (posterior)** sau khi cập nhật bằng chứng. Tiểu mục phân tích kỹ **Sai lầm bỏ qua tỷ lệ nền (Base-Rate Fallacy)** trong chẩn đoán y khoa và hệ thống phát hiện xâm nhập mạng / lọc rác: ngay cả khi một bộ phát hiện có độ nhạy và độ đặc hiệu lên tới $99\%$ ($P(+\mid \text{Tấn công}) = 0.99$, dương tính giả $P(+\mid \text{Bình thường}) = 0.01$), nếu tỷ lệ nền các gói tin tấn công thực tế rất hiếm ($P(\text{Tấn công}) = 10^{-4}$), thì khi còi báo động kêu ($+$), xác suất đó thực sự là tấn công $P(\text{Tấn công} \mid +)$ chỉ vào khoảng $\frac{0.99 \times 10^{-4}}{0.99\times 10^{-4} + 0.01\times 0.9999} \approx 0.98\%$ (hơn $99\%$ cảnh báo là báo động giả do số lượng gói tin bình thường áp đảo)!

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 3: Conditional Probability, Independence, Bayes’ Theorem

### Chương 2 — Biến ngẫu nhiên rời rạc, PMF, Kỳ vọng, Tính tuyến tính của Kỳ vọng và Phương sai (`prob-discrete-random-variables`)

Chương này chuyển từ các biến cố định tính sang các đại lượng định lượng qua Biến ngẫu nhiên rời rạc, trình bày hàm khối xác suất (PMF), kỳ vọng $E[X]$, phương pháp biến ngẫu nhiên chỉ thị (indicator variables) dựa trên tính tuyến tính của kỳ vọng để phân tích thuật toán ngẫu nhiên (như bài toán băm và trung bình của Quicksort), phương sai và bốn phân phối rời rạc cốt lõi.

*Nguồn chương:* `mit-1805-2022` (Class 4a (Discrete Random Variables), Class 4b (Expected Value of Discrete Random Variables), and Class 5a (Variance of Discrete Random Variables)); `mit-6042j-2015` (MCS 2015 Chapter 18: Random Variables; §18.4–18.5: Great Expectations and Linearity of Expectation; §19.3: Properties of Variance)

#### Tiểu mục 1: Định nghĩa Biến ngẫu nhiên như hàm X: Omega -> R, Hàm khối xác suất (PMF) và các họ phân phối rời rạc chuẩn mực (Bernoulli, Binomial, Geometric, Poisson) (`prob-drv-random-variables-pmf-cdf` — mức `core`)

Mặc dù mang tên là "biến ngẫu nhiên", về mặt toán học một **Biến ngẫu nhiên (Random Variable) $X$** không phải là một biến số đại số cũng không phải là một con số ngẫu nhiên mơ hồ, mà là một **hàm số thực xác định trên không gian mẫu $X: \Omega \to \mathbb{R}$** gán mỗi kết quả sơ cấp $\omega \in \Omega$ với một giá trị số thực $X(\omega)$ (chẳng hạn số lần so sánh của thuật toán trên đầu vào $\omega$, hoặc số gói tin bị rớt). Khi miền giá trị của $X$ là một tập hợp hữu hạn hoặc vô hạn đếm được $\{x_1, x_2, \dots\}$, $X$ được gọi là **biến ngẫu nhiên rời rạc (discrete random variable)** và phân phối của nó được đặc trưng hoàn toàn bởi **Hàm khối xác suất (Probability Mass Function — PMF)** $p_X(x) = P(X = x) = P(\{\omega \in \Omega \mid X(\omega) = x\})$ thỏa mãn $p_X(x) \ge 0$ và $\sum_x p_X(x) = 1$, cùng **Hàm phân phối tích lũy (CDF)** $F_X(x) = P(X \le x) = \sum_{t \le x} p_X(t)$ (là hàm bậc thang không giảm từ $0$ lên $1$).

Tiểu mục phân tích cơ chế sinh dữ liệu và PMF của **bốn họ phân phối rời rạc cốt lõi nhất**: (1) **$X \sim \operatorname{Bernoulli}(p)$** nhận giá trị $1$ (thành công) với xác suất $p$ và $0$ (thất bại) với xác suất $1-p$ — viên gạch cơ sở của mọi phép thử nhị phân; (2) **Phân phối Nhị thức $X \sim \operatorname{Binomial}(n, p)$** đếm tổng số lần thành công trong $n$ phép thử $\operatorname{Bernoulli}(p)$ **độc lập** ($X = I_1 + \dots + I_n$), có PMF $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$ với $k = 0, 1, \dots, n$; (3) **Phân phối Hình học $X \sim \operatorname{Geometric}(p)$** đếm số lần thử độc lập cho tới lần thành công đầu tiên, có PMF $P(X = k) = (1-p)^{k-1} p$ ($k = 1, 2, \dots$, hoặc đếm số lần thất bại trước khi thành công) với tính chất không nhớ rời rạc $P(X > m + k \mid X > m) = P(X > k) = (1-p)^k$; và (4) **Phân phối Poisson $X \sim \operatorname{Poisson}(\lambda)$** với $\lambda > 0$ có PMF $P(X = k) = e^{-\lambda} \frac{\lambda^k}{k!}$ ($k = 0, 1, 2, \dots$, tổng bằng $1$ nhờ chuỗi Maclaurin $\sum_{k=0}^\infty \frac{\lambda^k}{k!} = e^\lambda$), xuất hiện như giới hạn của $\operatorname{Binomial}(n, p)$ khi số phép thử $n \to \infty$, xác suất đơn lẻ $p \to 0$ sao cho tốc độ trung bình $np = \lambda$ cố định (luật các biến cố hiếm — mô hình hóa số yêu cầu truy cập gửi tới máy chủ web hoặc số lỗi bit trong một khoảng thời gian).

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 4a: Discrete Random Variables, PMF, CDF, Bernoulli, Binomial, Geometric, and Poisson Distributions | `mit-6042j-2015`: Chapter 18: §18.1–18.4 Random Variables, Independence, and Binomial Distributions

#### Tiểu mục 2: Kỳ vọng E[X], Định lý Nhà thống kê vô thức (LOTUS), Tính tuyến tính của Kỳ vọng và kỹ thuật Biến ngẫu nhiên chỉ thị (Indicator Variables) (`prob-drv-expectation-linearity-indicators` — mức `core`)

**Kỳ vọng (Expected Value / Mean) $E[X]$** (còn ký hiệu là $\mu_X$) của biến ngẫu nhiên rời rạc $X$ là trung bình cộng có trọng số xác suất của tất cả các giá trị mà $X$ có thể nhận (với điều kiện chuỗi hội tụ tuyệt đối $\sum_x |x| p_X(x) < \infty$): $$E[X] = \sum_x x \, P(X = x)$$ Khi cần tính kỳ vọng của một hàm $g(X)$ (như $X^2$ hay $2^X$), theo **Định lý Nhà thống kê vô thức (Law of the Unconscious Statistician — LOTUS)**, ta không cần tìm PMF của biến mới $Y = g(X)$ mà tính trực tiếp từ PMF của $X$: $E[g(X)] = \sum_x g(x) P(X = x)$ (lưu ý quan trọng: với hàm phi tuyến $g$, nói chung **$E[g(X)] \neq g(E[X])$**, ví dụ $E[X^2] \neq (E[X])^2$). Đối với một **Biến ngẫu nhiên chỉ thị (Indicator Random Variable)** $I_A$ của biến cố $A$ (nhận giá trị $1$ nếu $A$ xảy ra và $0$ nếu $A$ không xảy ra), kỳ vọng của nó bằng đúng xác suất của biến cố: **$E[I_A] = 1 \cdot P(A) + 0 \cdot P(A^c) = P(A)$**.

Định lý quan trọng bậc nhất trong phân tích thuật toán ngẫu nhiên là **Tính chất tuyến tính của Kỳ vọng (Linearity of Expectation)**: với mọi hằng số $a_i \in \mathbb{R}$ và các biến ngẫu nhiên $X_1, X_2, \dots, X_n$ trên cùng không gian mẫu có kỳ vọng hữu hạn (khả tích: $E[|X_i|] < \infty$), kỳ vọng của tổng hữu hạn bằng tổng các kỳ vọng: $$E\left[ \sum_{i=1}^n a_i X_i \right] = \sum_{i=1}^n a_i E[X_i]$$ Điều kỳ diệu làm nên sức mạnh của định lý này là nó **hoàn toàn KHÔNG đòi hỏi các biến $X_1, \dots, X_n$ phải độc lập với nhau** (trong mô hình rời rạc có thể chứng minh bằng cách phân phối tổng hữu hạn qua tổng kỳ vọng; tính khả tích đảm bảo các phép cộng hợp lệ)! Kết hợp Tính tuyến tính của kỳ vọng với Biến chỉ thị tạo ra phương pháp giải chuẩn mực trong CS: để tính kỳ vọng của một đại lượng đếm phức tạp $X$ (như số cặp xung đột trong bảng băm có $m$ ô, số điểm cố định của một hoán vị ngẫu nhiên, hay số phép so sánh của thuật toán Randomized Quicksort), ta phân rã $X = I_1 + I_2 + \dots + I_n$ thành tổng các biến chỉ thị $I_i \in \{0, 1\}$, nhờ đó $E[X] = \sum_{i=1}^n E[I_i] = \sum_{i=1}^n P(I_i = 1)$ mà không cần tìm phân phối phức tạp của $X$ hay bận tâm việc các $I_i$ phụ thuộc chặt vào nhau! (Ví dụ: với $X \sim \operatorname{Binomial}(n, p) = \sum_{i=1}^n I_i$, ta có ngay $E[X] = n p$ chỉ trong 1 dòng mà không cần biến đổi tổng tổ hợp).

> **Nguồn đối chiếu:** `mit-6042j-2015`: MCS 2015 §18.4–18.5: Great Expectations, Indicator Random Variables, and Linearity of Expectation | `mit-1805-2022`: Class 4b: Expected Value of Discrete Random Variables

#### Tiểu mục 3: Phương sai Var(X), Độ lệch chuẩn sigma_X, công thức E[X^2] - (E[X])^2 và quy tắc biến đổi bậc hai Var(aX + b) = a^2 Var(X) (`prob-drv-variance-standard-deviation` — mức `core`)

Kỳ vọng $E[X]$ chỉ cho biết vị trí trọng tâm của phân phối mà không cho biết các giá trị của $X$ tập trung sát quanh $E[X]$ hay phân tán rất xa (ví dụ biến hằng $X = 0$ và biến nhận $\pm 1000$ với xác suất $1/2$ đều có cùng kỳ vọng $E[X] = 0$). Để đo mức độ phân tán quanh kỳ vọng $\mu = E[X]$, ta định nghĩa **Phương sai (Variance)** là kỳ vọng của bình phương độ lệch khỏi trung bình: $$\operatorname{Var}(X) = \sigma_X^2 = E\big[(X - \mu)^2\big] = E[X^2] - (E[X])^2 \ge 0$$ (trong đó đẳng thức thực hành $E[(X-\mu)^2] = E[X^2 - 2\mu X + \mu^2] = E[X^2] - 2\mu E[X] + \mu^2 = E[X^2] - \mu^2$ suy ra trực tiếp từ tính tuyến tính của kỳ vọng; và $\operatorname{Var}(X) = 0$ khi và chỉ khi $X$ là hằng số với xác suất bằng $1$). Vì $\operatorname{Var}(X)$ có đơn vị là bình phương đơn vị của $X$, ta lấy căn bậc hai không âm để có **Độ lệch chuẩn (Standard Deviation)** $\sigma_X = \sqrt{\operatorname{Var}(X)}$ cùng đơn vị đo với $X$.

Khác với kỳ vọng ($E[aX + b] = aE[X] + b$), phép dịch chuyển cộng thêm hằng số $b$ không làm thay đổi độ phân tán của đám mây dữ liệu, còn phép co giãn nhân với $a$ được bình phương lên trong độ lệch, nên phương sai tuân theo quy tắc bậc hai: $$\operatorname{Var}(aX + b) = a^2 \operatorname{Var}(X)$$ Hơn nữa, nếu $X_1, \dots, X_n$ là các biến ngẫu nhiên **độc lập** (hoặc đôi một không tương quan), thì phương sai của tổng bằng tổng các phương sai: $\operatorname{Var}(X_1 + \dots + X_n) = \sum_{i=1}^n \operatorname{Var}(X_i)$. Áp dụng cho biến chỉ thị $I \sim \operatorname{Bernoulli}(p)$ có $E[I^2] = E[I] = p \implies \operatorname{Var}(I) = p - p^2 = p(1-p)$, tổng của $n$ phép thử độc lập $X \sim \operatorname{Binomial}(n, p)$ có ngay phương sai $\operatorname{Var}(X) = np(1-p)$; tương tự $\operatorname{Geometric}(p)$ có $E[X] = 1/p, \operatorname{Var}(X) = \frac{1-p}{p^2}$, và $\operatorname{Poisson}(\lambda)$ có cả kỳ vọng lẫn phương sai đều bằng $\lambda$.

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 5a: Variance and Standard Deviation ($operatorname{Var}(X) = E[X^2] - E[X]^2$, $operatorname{Var}(aX+b) = a^2\operatorname{Var}(X)$) | `mit-6042j-2015`: MCS 2015 §19.3: Properties of Variance

### Chương 3 — Biến ngẫu nhiên liên tục, Hàm mật độ (PDF), Hàm phân phối tích lũy (CDF) và Phân phối Chuẩn (Gaussian) (`prob-continuous-distributions`)

Chương này sử dụng phép tính đạo hàm, tích phân từng phần và tích phân suy rộng từ Môn CS-11 để xây dựng lý thuyết biến ngẫu nhiên liên tục: giải thích ý nghĩa vật lý của hàm mật độ xác suất $f_X(x)$, mối quan hệ đạo hàm – nguyên hàm với hàm phân phối tích lũy $F_X(x)$, quy tắc tìm phân phối khi đổi biến, và ba phân phối liên tục quan trọng nhất (Đều, Mũ, Chuẩn Gaussian).

*Nguồn chương:* `mit-1805-2022` (Class 5b (Continuous Random Variables), Class 5c (Gallery of Continuous Random Variables), Class 5d (Manipulating Random Variables), and Class 6a (Continuous Expectation and Variance))

#### Tiểu mục 1: Hàm mật độ xác suất (PDF) f_X(x), Hàm phân phối tích lũy (CDF) F_X(x), quan hệ F'(x) = f(x) và kỳ vọng/phương sai liên tục (`prob-cd-pdf-cdf-continuous-lotus` — mức `core`)

Khi một biến ngẫu nhiên $X$ nhận giá trị trên một khoảng liên tục của trục số thực (như thời gian phản hồi của truy vấn cơ sở dữ liệu hay sai số đo lường), xác suất để $X$ rơi trúng chính xác một số thực đơn lẻ $x$ với độ chính xác vô hạn chữ số thập phân luôn bằng $0$: **$P(X = x) = 0$** (do đó với biến liên tục, $P(a \le X \le b) = P(a < X < b)$). Thay vì gán xác suất cho từng điểm, một **Biến ngẫu nhiên liên tục** được xác định bởi một **Hàm mật độ xác suất (Probability Density Function — PDF) $f_X(x) \ge 0$** sao cho xác suất để $X$ rơi vào đoạn $[a, b]$ bằng **diện tích dưới đường cong mật độ** trên đoạn đó: $$P(a \le X \le b) = \int_a^b f_X(x)\,dx, \qquad \text{với điều kiện chuẩn hóa } \int_{-\infty}^\infty f_X(x)\,dx = 1$$ Tiểu mục nhấn mạnh điểm rất dễ nhầm: **$f_X(x)$ KHÔNG phải là xác suất $P(X = x)$**, mà là mật độ xác suất trên một đơn vị độ dài (với khoảng rất nhỏ $dx$, $P(x \le X \le x + dx) \approx f_X(x)\,dx$); vì vậy giá trị của $f_X(x)$ hoàn toàn **có thể lớn hơn $1$** (ví dụ phân phối đều trên đoạn $[0, 1/2]$ có mật độ $f_X(x) = 2 > 1$), miễn là tổng diện tích tích phân bằng $1$.

**Hàm phân phối tích lũy (Cumulative Distribution Function — CDF)** $F_X(x) = P(X \le x) = \int_{-\infty}^x f_X(t)\,dt$ luôn là một hàm liên tục không giảm có $\lim_{x \to -\infty} F_X(x) = 0$, $\lim_{x \to +\infty} F_X(x) = 1$, và $P(a < X \le b) = F_X(b) - F_X(a)$. Áp dụng trực tiếp **Định lý cơ bản của Giải tích (FTC 1)** từ Môn CS-11, tại mọi điểm mà $f_X$ liên tục, đạo hàm của CDF chính là PDF: $$F_X'(x) = \frac{d}{dx} \int_{-\infty}^x f_X(t)\,dt = f_X(x)$$ Mọi công thức kỳ vọng, LOTUS và phương sai ở Chương 2 chuyển sang trường hợp liên tục bằng cách thay tổng $\Sigma$ bằng tích phân suy rộng: $E[X] = \int_{-\infty}^\infty x f_X(x)\,dx$, $E[g(X)] = \int_{-\infty}^\infty g(x) f_X(x)\,dx$, và $\operatorname{Var}(X) = \int_{-\infty}^\infty (x - \mu)^2 f_X(x)\,dx = E[X^2] - (E[X])^2$.

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 5b & Class 6a: Continuous Random Variables, PDF vs Probability, CDF and Fundamental Theorem of Calculus, Continuous Expectation and Variance

#### Tiểu mục 2: Ba họ phân phối liên tục nền tảng: Phân phối Đều Uniform(a, b), Phân phối Mũ Exponential(lambda) và Phân phối Chuẩn Normal(mu, sigma^2) (`prob-cd-uniform-exponential-normal` — mức `core`)

Tiểu mục này xây dựng ba họ phân phối liên tục xuất hiện xuyên suốt trong mô phỏng hệ thống và học máy: (1) **Phân phối Đều $X \sim \operatorname{Uniform}(a, b)$** có mật độ phẳng $f_X(x) = \frac{1}{b - a}$ trên $[a, b]$ (và bằng $0$ ở ngoài), với $E[X] = \frac{a+b}{2}$ và $\operatorname{Var}(X) = \frac{(b-a)^2}{12}$ — phân phối đặc biệt $U \sim \operatorname{Uniform}(0, 1)$ chính là đầu ra cơ bản của mọi bộ sinh số giả ngẫu nhiên (PRNG) trong ngôn ngữ lập trình; (2) **Phân phối Mũ $X \sim \operatorname{Exponential}(\lambda)$** (với tốc độ $\lambda > 0$) mô hình hóa thời gian chờ liên tục giữa các sự kiện trong quá trình Poisson, có PDF $f_X(x) = \lambda e^{-\lambda x}$ và CDF $F_X(x) = 1 - e^{-\lambda x}$ cho $x \ge 0$ (tích phân từng phần cho $E[X] = 1/\lambda$ và $\operatorname{Var}(X) = 1/\lambda^2$). Đây là phân phối liên tục duy nhất có **tính chất không nhớ (memoryless property)**: $P(X > s + t \mid X > s) = \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = e^{-\lambda t} = P(X > t)$.

(3) **Phân phối Chuẩn / Gaussian $X \sim \mathcal{N}(\mu, \sigma^2)$** có hàm mật độ hình chuông đối xứng quanh kỳ vọng $\mu$ với phương sai $\sigma^2 > 0$: $$f_X(x) = \frac{1}{\sigma \sqrt{2\pi}} \exp\left( -\frac{(x - \mu)^2}{2\sigma^2} \right), \quad x \in \mathbb{R}$$ (tích phân trên toàn bộ $\mathbb{R}$ bằng $1$ nhờ tích phân Gaussian $\int_{-\infty}^\infty e^{-z^2/2}\,dz = \sqrt{2\pi}$ đã chứng minh bằng tọa độ cực ở Chương 4 Môn CS-12). Khi $\mu = 0, \sigma^2 = 1$, ta có **Phân phối chuẩn tắc (Standard Normal) $Z \sim \mathcal{N}(0, 1)$** với hàm mật độ $\phi(z) = \frac{1}{\sqrt{2\pi}}e^{-z^2/2}$ và CDF $\Phi(z) = P(Z \le z)$. Mọi biến chuẩn $X \sim \mathcal{N}(\mu, \sigma^2)$ đều được **chuẩn hóa (standardization / z-score)** về $Z$ thông qua phép biến đổi tuyến tính $Z = \frac{X - \mu}{\sigma} \sim \mathcal{N}(0, 1)$, nhờ đó $P(a \le X \le b) = \Phi\left(\frac{b-\mu}{\sigma}\right) - \Phi\left(\frac{a-\mu}{\sigma}\right)$ và tuân theo quy tắc thực nghiệm $68\% - 95\% - 99.7\%$ trong phạm vi $\mu \pm 1\sigma, 2\sigma, 3\sigma$.

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 5c: Gallery of Continuous Random Variables (Uniform, Exponential, and Normal Distributions)

#### Tiểu mục 3: Tìm phân phối của hàm biến ngẫu nhiên Y = g(X) qua CDF/Jacobian và thuật toán Sinh mẫu biến đổi ngược (Inverse Transform Sampling) (`prob-cd-transformations-inverse-cdf-sampling` — mức `core`)

Khi biết phân phối của biến liên tục $X$ và định nghĩa một biến mới $Y = g(X)$, làm thế nào để tìm hàm mật độ $f_Y(y)$? Phương pháp tổng quát an toàn nhất luôn đi qua hai bước: (Bước 1) Viết hàm phân phối tích lũy của $Y$ theo $X$: $F_Y(y) = P(Y \le y) = P(g(X) \le y)$ rồi giải bất phương trình $g(X) \le y$ để biểu diễn qua $F_X$; (Bước 2) Lấy đạo hàm $f_Y(y) = F_Y'(y)$ bằng quy tắc dây chuyền. Đặc biệt, khi $g$ là hàm khả vi đơn điệu nghiêm ngặt có hàm ngược $x = g^{-1}(y)$, đạo hàm quy tắc dây chuyền cho công thức đổi biến một chiều với trị tuyệt đối đạo hàm Jacobian: $$f_Y(y) = f_X\big(g^{-1}(y)\big) \cdot \left| \frac{d}{dy} g^{-1}(y) \right|$$

Ứng dụng thuật toán trực tiếp và đẹp nhất của phương pháp CDF là **Định lý Biến đổi tích phân xác suất (Probability Integral Transform)** và **Thuật toán Sinh mẫu biến đổi ngược (Inverse Transform Sampling)**: nếu máy tính chỉ có hàm `rand()` sinh số giả ngẫu nhiên phân phối đều $U \sim \operatorname{Uniform}(0, 1)$, làm thế nào để sinh ra một biến ngẫu nhiên $X$ tuân theo một hàm phân phối mục tiêu $F_X(x)$ bất kỳ (như phân phối mũ $\operatorname{Exponential}(\lambda)$ để mô phỏng lưu lượng mạng)? Định lý chứng minh rằng nếu đặt $X = F_X^{-1}(U)$, thì với mọi $x$: $$P(X \le x) = P\big(F_X^{-1}(U) \le x\big) = P\big(U \le F_X(x)\big) = F_X(x)$$ (bởi vì với $U \sim \operatorname{Uniform}(0,1)$ thì $P(U \le u) = u$ với mọi $u \in [0, 1]$!). Chẳng hạn, giải $1 - e^{-\lambda x} = U \implies X = -\frac{\ln(1 - U)}{\lambda}$ cho phép biến một số ngẫu nhiên đều $U$ thành biến ngẫu nhiên phân phối mũ chính xác chỉ bằng một phép lấy logarit.

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 5d: Manipulating Random Variables (CDF method and inverse-transform simulation)

### Chương 4 — Phân phối đồng thời (Joint Distributions), Hiệp phương sai, Bất đẳng thức đuôi và Các định lý giới hạn (LLN, CLT) (`prob-joint-covariance-limit-theorems`)

Chương cuối kết nối giải tích nhiều biến (`CS-12`) và đại số tuyến tính (`CS-10`) vào xác suất nhiều biến: phân phối đồng thời, phân phối biên, phân phối có điều kiện, hiệp phương sai và ma trận hiệp phương sai, các bất đẳng thức chặn đuôi xác suất (Markov, Chebyshev, Chernoff) và hai định lý trụ cột nối xác suất với thống kê suy luận là Luật số lớn (LLN) và Định lý giới hạn trung tâm (CLT).

*Nguồn chương:* `mit-1805-2022` (Class 6b & Class 7 (Joint Distributions, Marginal and Conditional Distributions, Covariance and Correlation, Law of Large Numbers, and Central Limit Theorem)); `mit-6042j-2015` (MCS 2015 Chapter 19: Deviation from the Mean — §19.1 Markov’s Theorem, §19.2 Chebyshev’s Theorem, §19.3 Properties of Variance, §19.4 Estimation by Random Sampling, and §19.6 Sums of Random Variables (Chernoff Bound in §19.6.2))

#### Tiểu mục 1: Phân phối đồng thời (Joint PMF/PDF), Phân phối biên (Marginal), Phân phối có điều kiện và kiểm tra tính độc lập (`prob-jclt-joint-marginal-conditional-distributions` — mức `core`)

Khi khảo sát đồng thời hai (hoặc nhiều) biến ngẫu nhiên $(X, Y)$ trên cùng không gian mẫu, hành vi chung của chúng được mô tả bởi **Phân phối đồng thời (Joint Distribution)**: ở trường hợp rời rạc là bảng **PMF đồng thời** $p_{X,Y}(x, y) = P(X = x, Y = y)$ với $\sum_x \sum_y p_{X,Y}(x, y) = 1$; ở trường hợp liên tục là mặt **PDF đồng thời** $f_{X,Y}(x, y) \ge 0$ sao cho xác suất cặp $(X, Y)$ rơi vào miền phẳng $R \subseteq \mathbb{R}^2$ bằng tích phân kép $\iint_R f_{X,Y}(x, y)\,dx\,dy$ (sử dụng trực tiếp Định lý Fubini từ Chương 4 Môn CS-12).

Từ phân phối đồng thời của $(X, Y)$, muốn thu lại phân phối của riêng từng biến đơn lẻ — gọi là **Phân phối biên (Marginal Distribution)** — ta "cộng dồn hoặc tích phân khử đi biến kia": $p_X(x) = \sum_y p_{X,Y}(x, y)$ trong rời rạc, và $f_X(x) = \int_{-\infty}^\infty f_{X,Y}(x, y)\,dy$ trong liên tục. Khi biết $X = x$ (với $f_X(x) > 0$), **hàm mật độ có điều kiện** của $Y$ là $f_{Y \mid X}(y \mid x) = \frac{f_{X,Y}(x, y)}{f_X(x)}$. Hai biến ngẫu nhiên $X$ và $Y$ là **độc lập** khi và chỉ khi phân phối đồng thời tách thành tích của hai phân phối biên tại mọi điểm: $$p_{X,Y}(x, y) = p_X(x)\,p_Y(y) \quad \text{hoặc} \quad f_{X,Y}(x, y) = f_X(x)\,f_Y(y)$$ (trong trường hợp liên tục, điều kiện cần đầu tiên để $X$ và $Y$ độc lập là miền giá trị hỗ trợ có mật độ dương của $(X, Y)$ phải là một hình chữ nhật tích Descartes $I_X \times I_Y$; nếu miền hỗ trợ là hình tam giác $0 \le x \le y \le 1$ hoặc hình tròn $x^2 + y^2 \le 1$, ta kết luận ngay lập tức $X$ và $Y$ phụ thuộc nhau mà không cần tính tích phân!). Khi $X, Y$ độc lập, kỳ vọng của tích bằng tích các kỳ vọng: $E[XY] = E[X]E[Y]$.

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 7a: Joint Distributions, Independence (Discrete and Continuous Joint, Marginal, and Conditional Distributions)

#### Tiểu mục 2: Hiệp phương sai Cov(X, Y), Hệ số tương quan tuyến tính rho(X, Y), Ma trận hiệp phương sai và vì sao Cov = 0 không suy ra Độc lập (`prob-jclt-covariance-correlation-matrix` — mức `core`)

Để đo xu hướng hai biến ngẫu nhiên $X$ và $Y$ cùng tăng/cùng giảm hay biến thiên ngược chiều nhau, ta định nghĩa **Hiệp phương sai (Covariance)**: $$\operatorname{Cov}(X, Y) = E\big[(X - \mu_X)(Y - \mu_Y)\big] = E[XY] - E[X]E[Y]$$ Hiệp phương sai có tính đối xứng, có $\operatorname{Cov}(X, X) = \operatorname{Var}(X)$, có tính song tuyến tính $\operatorname{Cov}(aX + bY, Z) = a\operatorname{Cov}(X, Z) + b\operatorname{Cov}(Y, Z)$, và mở rộng công thức phương sai của tổng cho hai biến bất kỳ: $$\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2\operatorname{Cov}(X, Y)$$ Vì $\operatorname{Cov}(X, Y)$ phụ thuộc vào đơn vị đo của $X$ và $Y$, ta chuẩn hóa nó bằng tích hai độ lệch chuẩn để thu được **Hệ số tương quan Pearson (Correlation Coefficient)** không thứ nguyên: $$\rho(X, Y) = \frac{\operatorname{Cov}(X, Y)}{\sigma_X \sigma_Y} \in [-1, 1]$$ (trong đó $|\rho| = 1$ xảy ra khi và chỉ khi $Y = aX + b$ là hàm bậc nhất hoàn hảo của $X$). Với một vector ngẫu nhiên $\mathbf{X} = (X_1, \dots, X_d)^T$, xếp các $\operatorname{Cov}(X_i, X_j)$ thành bảng $d \times d$ cho ta **Ma trận hiệp phương sai $\Sigma = E[(\mathbf{X}-\boldsymbol{\mu})(\mathbf{X}-\boldsymbol{\mu})^T]$** — một ma trận luôn **đối xứng và nửa xác định dương** ($\mathbf{u}^T \Sigma \mathbf{u} = \operatorname{Var}(\mathbf{u}^T \mathbf{X}) \ge 0$, kết nối trực tiếp về Chương 6 Môn CS-10).

Tiểu mục đặc biệt nhấn mạnh chiều suy luận một chiều: **Nếu $X$ và $Y$ độc lập thì $E[XY] = E[X]E[Y] \implies \operatorname{Cov}(X, Y) = 0$ (không tương quan / uncorrelated)**; nhưng **chiều ngược lại SAI: $\operatorname{Cov}(X, Y) = 0$ KHÔNG suy ra $X$ và $Y$ độc lập!** Lý do là $\operatorname{Cov}(X, Y)$ và $\rho(X, Y)$ chỉ đo **mối quan hệ tuyến tính**, hoàn toàn không phát hiện được sự phụ thuộc phi tuyến đối xứng. Phản ví dụ chuẩn: lấy $X \sim \operatorname{Uniform}\{-1, 0, 1\}$ (hoặc $X \sim \mathcal{N}(0, 1)$) và đặt $Y = X^2$; rõ ràng $Y$ phụ thuộc hoàn toàn vào $X$, nhưng do tính đối xứng lẻ $E[X] = 0$ và $E[XY] = E[X^3] = 0$, ta có $\operatorname{Cov}(X, Y) = 0$.

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 7b: Covariance and Correlation (Properties, Variance of Sums, Zero Correlation vs. Independence)

#### Tiểu mục 3: Các bất đẳng thức chặn đuôi (Markov, Chebyshev, Chernoff), Luật số lớn (LLN) và Định lý giới hạn trung tâm (CLT) (`prob-jclt-tail-bounds-lln-clt` — mức `core`)

Trong phân tích thuật toán ngẫu nhiên và lý thuyết học thống kê, việc chỉ biết kỳ vọng $E[X]$ là chưa đủ; ta cần đảm bảo rằng xác suất để $X$ lệch xa khỏi kỳ vọng của nó là cực kỳ nhỏ thông qua hệ thống **ba bất đẳng thức chặn đuôi (tail / concentration bounds)** có độ chặt tăng dần khi biết thêm thông tin về biến ngẫu nhiên: (1) **Bất đẳng thức Markov**: nếu chỉ biết $X \ge 0$ không âm và có kỳ vọng $E[X]$, thì với mọi $a > 0$: $$P(X \ge a) \le \frac{E[X]}{a}$$ (rất tổng quát nhưng cận giảm chậm theo $1/a$); (2) **Bất đẳng thức Chebyshev**: áp dụng Markov cho biến không âm $(X - \mu)^2 \ge c^2$ khi biết thêm phương sai $\operatorname{Var}(X) = \sigma^2$, ta có: $$P(|X - \mu| \ge c) \le \frac{\operatorname{Var}(X)}{c^2} \quad \text{hay} \quad P(|X - \mu| \ge k\sigma) \le \frac{1}{k^2}$$ (cận giảm bậc hai theo $1/c^2$ mà không cần các thành phần độc lập toàn phần); và (3) **Cận Chernoff (Chernoff Bounds)**: khi $X = \sum_{i=1}^n X_i$ là tổng của các biến chỉ thị **độc lập** (có kỳ vọng $\mu = E[X]$), bằng cách áp dụng Markov lên hàm mũ $e^{tX}$ (hàm sinh mômen), xác suất lệch khỏi trung bình một tỉ lệ $(1+\delta)\mu$ giảm **nhanh theo hàm mũ** $P(X \ge (1+\delta)\mu) \le e^{-\frac{\delta^2 \mu}{2+\delta}}$ — đây là công cụ cốt lõi để chứng minh các thuật toán cân bằng tải ngẫu nhiên và băm đạt hiệu năng cao với xác suất $1 - 1/n^c$.

Khi xét trung bình mẫu $\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i$ của một dãy các biến ngẫu nhiên độc lập cùng phân phối (i.i.d.) có kỳ vọng hữu hạn $\mu$ và phương sai hữu hạn $\sigma^2 < \infty$, ta có $E[\bar{X}_n] = \mu$ và $\operatorname{Var}(\bar{X}_n) = \frac{\sigma^2}{n} \to 0$ khi $n \to \infty$. Áp dụng ngay bất đẳng thức Chebyshev cho $\bar{X}_n$ chứng minh **Luật số lớn (Law of Large Numbers — LLN)**: với mọi $\varepsilon > 0$, $\lim_{n \to \infty} P(|\bar{X}_n - \mu| \ge \varepsilon) \le \lim_{n \to \infty} \frac{\sigma^2}{n\varepsilon^2} = 0$, nghĩa là trung bình mẫu $\bar{X}_n$ hội tụ theo xác suất về đúng kỳ vọng lý thuyết $\mu$ (cơ sở toán học của phương pháp mô phỏng Monte Carlo). Đi xa hơn nữa, **Định lý giới hạn trung tâm (Central Limit Theorem — CLT)** chỉ ra hình dáng phân phối của sai số quanh $\mu$: khi nhân độ lệch $(\bar{X}_n - \mu)$ với $\sqrt{n}/\sigma$, biến chuẩn hóa hội tụ theo phân phối về **Phân phối Chuẩn tắc $\mathcal{N}(0, 1)$** bất kể phân phối gốc của từng $X_i$ là rời rạc hay liên tục, lệch hay đối xứng: $$Z_n = \frac{\bar{X}_n - \mu}{\sigma / \sqrt{n}} = \frac{\sum_{i=1}^n X_i - n\mu}{\sigma\sqrt{n}} \;\xrightarrow{d}\; \mathcal{N}(0, 1) \quad \text{khi } n \to \infty$$ Tiểu mục nêu rõ **điều kiện áp dụng và giới hạn của CLT**: các biến phải độc lập (hoặc phụ thuộc yếu) và đặc biệt là **phải có phương sai hữu hạn $\sigma^2 < \infty$**; đối với các phân phối đuôi nặng có phương sai vô hạn (như phân phối Cauchy hay Pareto với $\alpha \le 2$), CLT chuẩn hoàn toàn không áp dụng được.

> **Nguồn đối chiếu:** `mit-6042j-2015`: MCS 2015 §19.1 Markov’s Theorem, §19.2 Chebyshev’s Theorem, §19.4 Estimation by Random Sampling, and §19.6.2 The Chernoff Bound | `mit-1805-2022`: Class 6b & Class 7: Law of Large Numbers, Central Limit Theorem (Conditions and Normal Approximation), and Monte Carlo Simulation

---

## CS-14: Thống kê và thiết kế suy luận (`statistics-inference`)

- **Thuộc khối:** Khối II — Lập trình và toán nền CS
- **Phân loại:** `core`
- **Điều kiện tiên quyết:**
  - `probability` (*required*): Cần nắm vững biến ngẫu nhiên, kỳ vọng, phương sai, định lý Bayes và Định lý giới hạn trung tâm (CLT) từ Môn CS-13.
  - `linear-algebra` (*required*): Cần phép chiếu trực giao và phương trình chuẩn bình phương tối thiểu (A^T A x_hat = A^T b) từ Môn CS-10 cho mô hình hồi quy tuyến tính.

### Tổng quan môn học

Nếu Xác suất (`CS-13`) là bài toán thuận — cho biết trước quy luật phân phối và tham số $\theta$, hãy tính xác suất của các kết quả dữ liệu — thì Thống kê và Suy luận (`CS-14`) là **bài toán ngược (inverse problem)**: đứng trước một mẫu dữ liệu hữu hạn có nhiễu $x_1, x_2, \dots, x_n$ được sinh ra từ một quy luật mà tham số thực $\theta$ chưa biết, làm thế nào để ước lượng $\theta$, định lượng độ bất định của ước lượng đó và ra quyết định khoa học? Bám sát cấu trúc của MIT 18.05 (Classes 10b–26), môn học bắt đầu từ sự phân biệt giữa quần thể (population) và mẫu (sample), các nguồn sai lệch dữ liệu (sampling/survivorship bias), thống kê mô tả bền vững, và sự phân rã **Độ lệch – Phương sai (Bias–Variance Decomposition)** của sai số bình phương trung bình (MSE).

Từ đó, môn học trình bày song song hai trường phái suy luận thống kê chính: **Ước lượng hợp lý cực đại (Maximum Likelihood Estimation — MLE)** và **Suy luận Bayes (Bayesian Inference)** với cập nhật tiên nghiệm $\to$ hậu nghiệm cùng khoảng tin cậy Bayes (credible intervals); tiếp nối bằng **Khoảng tin cậy tần suất (Frequentist Confidence Intervals)**, phân phối Student-$t$ chính xác cho mẫu i.i.d. chuẩn với phương sai dương, phân biệt xấp xỉ lớn mẫu ngoài mô hình chuẩn, và phương pháp tái lấy mẫu **Bootstrap** trên máy tính. Chương cuối giải phẫu bản chất toán học của **Kiểm định giả thuyết (NHST)** (sai lầm loại I/II, lực kiểm định power, định nghĩa xác suất có điều kiện chính xác của $p$-value, kiểm định đa giả thuyết trong A/B testing), **Hồi quy tuyến tính** dưới góc nhìn thống kê và ranh giới sống còn giữa **Tương quan dự đoán (Prediction/Correlation)** với **Suy luận nhân quả (Causal Inference / Confounding)**.

### Giới hạn học thuật (`boundaries`)

- Sửa triệt để hai ngộ nhận phổ biến nhất trong khoa học thực nghiệm và khoa học dữ liệu: (1) **$p$-value KHÔNG phải là xác suất để giả thuyết không $H_0$ đúng** ($P(H_0 \mid \text{data})$), mà là xác suất quan sát được thống kê kiểm định cực đoan như mẫu hiện tại *giả sử rằng $H_0$ đang đúng* ($P(\text{data cực đoan} \mid H_0)$); và (2) **Khoảng tin cậy tần suất $95\%$** là phát biểu về xác suất bao phủ của quy trình tạo khoảng khi lấy mẫu lặp lại (trước khi cố định mẫu), chứ sau khi đã thay số ra một khoảng cố định $[a, b]$ thì tham số hằng $\theta$ nằm trong đó hoặc không (xác suất là $0$ hoặc $1$), khác về bản chất với khoảng tin cậy hậu nghiệm Bayes (credible interval) nơi $\Theta$ được mô hình hóa là biến ngẫu nhiên.
- Phân biệt rõ ý nghĩa thống kê ($p < \alpha$, dễ dàng đạt được chỉ bằng cách tăng kích thước mẫu $n$ lên thật lớn) với ý nghĩa thực tiễn / độ lớn hiệu ứng (effect size).

### Nguồn giáo trình của môn học

- **Introduction to Probability and Statistics (MIT 18.05)** (`mit-1805-2022`, *primary*): Classes 10a–10b: Introduction to Statistics and Maximum Likelihood Estimates; Classes 11–16: Bayesian Updating and Probability Intervals; Classes 17–20: NHST and Comparison of Inference; Classes 22–24: Confidence Intervals and Bootstrap; Class 26: Linear Regression — URL: https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/pages/syllabus/

### Chương 1 — Quần thể, Mẫu ngẫu nhiên, Thống kê mô tả, Sai lệch dữ liệu và Phân rã Độ lệch – Phương sai (Bias–Variance) (`stat-sampling-descriptive-bias`)

Chương mở đầu thiết lập khung khái niệm của suy luận thống kê: phân biệt tham số cố định của quần thể với thống kê biến thiên theo mẫu, nhận diện các sai lệch hệ thống trong thu thập dữ liệu mà thuật toán không thể tự sửa, và đánh giá chất lượng của một bộ ước lượng điểm qua Độ lệch (Bias) và Phương sai (Variance).

*Nguồn chương:* `mit-1805-2022` (Class 10a: Introduction to Statistics; Class 22: Confidence Intervals Based on Normal Data (statistics and sample variance); Class 23b: Confidence Intervals for the Mean of Non-normal Data)

#### Tiểu mục 1: Phân biệt Tham số quần thể (Parameter) với Thống kê mẫu (Statistic), mẫu i.i.d. và các sai lệch thu thập dữ liệu (Sampling & Survivorship Bias) (`stat-sdb-population-sample-biases` — mức `core`)

Trong thống kê suy luận, ta cần phân biệt rạch ròi hai tầng đối tượng: **Quần thể / Phân phối sinh dữ liệu (Population / Data-generating distribution)** được đặc trưng bởi các **tham số thực chưa biết (parameters)** như kỳ vọng lý thuyết $\mu$, phương sai $\sigma^2$ hoặc tỷ lệ $p$; và **Mẫu quan sát (Sample)** gồm $n$ biến ngẫu nhiên $X_1, X_2, \dots, X_n$ được rút ra từ quần thể đó (trong mô hình chuẩn là **mẫu ngẫu nhiên đơn giản độc lập cùng phân phối — i.i.d.**). Bất kỳ hàm số nào tính toán thuần túy từ dữ liệu mẫu mà không chứa tham số chưa biết — chẳng hạn trung bình mẫu $\bar{X} = \frac{1}{n}\sum_{i=1}^n X_i$ hay phương sai mẫu $S^2$ — đều được gọi là một **Thống kê (Statistic)** hoặc **Bộ ước lượng (Estimator) $\hat{\theta}(X_1, \dots, X_n)$**. Vì phụ thuộc vào mẫu ngẫu nhiên $X_1, \dots, X_n$, bản thân mỗi thống kê $\hat{\theta}$ là một **biến ngẫu nhiên** có một phân phối xác suất riêng gọi là **Phân phối mẫu (Sampling Distribution)**.

Trước khi áp dụng bất kỳ công thức toán học nào, người học phải kiểm tra giả định đại diện của mẫu: nếu quá trình thu thập dữ liệu bị nhiễm **Sai lệch chọn mẫu (Sampling / Selection Bias)** (chỉ thu thập từ một nhóm con không đại diện cho quần thể mục tiêu), **Sai lệch sống sót (Survivorship Bias)** (chỉ quan sát các trường hợp còn tồn tại/thành công mà bỏ sót các trường hợp đã thất bại/rời bỏ hệ thống), hoặc **Sai lệch không phản hồi (Non-response Bias)**, thì ngay cả khi kích thước mẫu $n$ lên tới hàng chục triệu bản ghi (Big Data), trung bình mẫu vẫn hội tụ theo Luật số lớn về một giá trị **sai lệch hoàn toàn** so với tham số thực của quần thể.

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 10a: Introduction to Statistics; Class 17a: The Frequentist School of Statistics (parameters and repeated sampling)

#### Tiểu mục 2: Thống kê mô tả vị trí và độ phân tán: Trung bình (Mean) so với Trung vị (Median), Phương sai mẫu chia (n - 1) và Khoảng tứ phân vị (IQR) (`stat-sdb-descriptive-robust-summaries` — mức `core`)

Để tóm tắt một tập dữ liệu thực nghiệm $x_1, \dots, x_n$, ta dùng các thước đo vị trí trung tâm và độ phân tán, nhưng mỗi thước đo có **độ bền vững (robustness)** rất khác nhau trước **dữ liệu ngoại lai (outliers)** và các phân phối lệch đuôi nặng (như độ trễ mạng tail latency hay phân phối thu nhập): **Trung bình mẫu (Sample Mean)** $\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i$ sử dụng mọi giá trị dữ liệu nhưng cực kỳ nhạy cảm với ngoại lai (chỉ cần 1 giá trị cực lớn cũng kéo lệch toàn bộ $\bar{x}$); ngược lại, **Trung vị (Median — phân vị thứ $50\%$, $Q_2$)** chỉ phụ thuộc vào phần tử đứng giữa sau khi sắp xếp nên hoàn toàn không bị ảnh hưởng khi một vài điểm ở đuôi tăng vọt. Đó là lý do trong kỹ nghệ hệ thống (`CS-33`), người ta luôn báo cáo độ trễ theo các phân vị `p50` (trung vị), `p95`, `p99` thay vì chỉ nhìn trung bình cộng.

Tương tự đối với độ phân tán, bên cạnh **Khoảng tứ phân vị bền vững (Interquartile Range — $\operatorname{IQR} = Q_3 - Q_1$)** chứa $50\%$ dữ liệu ở giữa, thước đo phổ biến nhất là **Phương sai mẫu không chệch (Sample Variance)**: $$S^2 = \frac{1}{n - 1} \sum_{i=1}^n (X_i - \bar{X})^2$$ Tiểu mục chứng minh đại số rõ ràng vì sao mẫu số của $S^2$ lại chia cho **$n - 1$ (hiệu chỉnh Bessel / Bessel’s correction)** thay vì chia cho $n$: bởi vì trung bình mẫu $\bar{X}$ chính là điểm làm cực tiểu hóa tổng bình phương độ lệch trên chính mẫu đó, nên trung bình của $\sum_{i=1}^n (X_i - \bar{X})^2 = \sum_{i=1}^n (X_i - \mu)^2 - n(\bar{X} - \mu)^2$ có kỳ vọng bằng $n\sigma^2 - n(\sigma^2/n) = (n - 1)\sigma^2$; chia cho $n - 1$ giúp kỳ vọng của bộ ước lượng khớp chính xác với phương sai thực của quần thể: $E[S^2] = \sigma^2$.

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 6a: Continuous Random Variables: Expectation and Variance; Class 22: Confidence Intervals Based on Normal Data (sample mean and sample variance)

#### Tiểu mục 3: Độ lệch (Bias), Phương sai (Variance), Sai số chuẩn (Standard Error), tính vững (Consistency) và Phân rã MSE = Bias^2 + Variance (`stat-sdb-bias-variance-mse-consistency` — mức `core`)

Khi dùng một thống kê $\hat{\theta} = \hat{\theta}(X_1, \dots, X_n)$ để ước lượng tham số thực $\theta$, sai số ước lượng được đánh giá qua hai khía cạnh độc lập: (1) **Độ chệch / Độ lệch (Bias)**: $\operatorname{Bias}(\hat{\theta}) = E[\hat{\theta}] - \theta$ đo xem về trung bình qua nhiều lần lấy mẫu, bộ ước lượng có bắn trúng tâm $\theta$ hay bị lệch hệ thống sang một bên (nếu $E[\hat{\theta}] = \theta$, ta nói $\hat{\theta}$ là **bộ ước lượng không chệch / unbiased estimator**, như $E[\bar{X}] = \mu$ và $E[S^2] = \sigma^2$); và (2) **Phương sai của bộ ước lượng $\operatorname{Var}(\hat{\theta})$** cùng căn bậc hai của nó là **Sai số chuẩn (Standard Error — $\operatorname{SE}(\hat{\theta}) = \sqrt{\operatorname{Var}(\hat{\theta})}$)** (ví dụ sai số chuẩn của trung bình mẫu là $\operatorname{SE}(\bar{X}) = \frac{\sigma}{\sqrt{n}}$, giảm chậm theo căn bậc hai của kích thước mẫu $1/\sqrt{n}$).

Khi đo tổng chất lượng của bộ ước lượng bằng **Sai số bình phương trung bình (Mean Squared Error — $\operatorname{MSE}(\hat{\theta}) = E\big[(\hat{\theta} - \theta)^2\big]$)**, bằng cách thêm bớt kỳ vọng $E[\hat{\theta}]$ ở bên trong bình phương, tiểu mục chứng minh **Đẳng thức phân rã Độ lệch – Phương sai (Bias–Variance Decomposition)** — nguyên lý nền tảng của cả thống kê lẫn học máy (`CS-36`): $$\operatorname{MSE}(\hat{\theta}) = E\big[(\hat{\theta} - \theta)^2\big] = \operatorname{Var}(\hat{\theta}) + \big(\operatorname{Bias}(\hat{\theta})\big)^2$$ Đẳng thức này giải thích vì sao trong học máy và thống kê hiện đại (như hồi quy chính quy hóa Ridge/Lasso), đôi khi người ta chủ động chấp nhận một độ chệch nhỏ ($\operatorname{Bias} \neq 0$) để đổi lấy việc làm giảm mạnh phương sai $\operatorname{Var}(\hat{\theta})$, giúp tổng sai số $\operatorname{MSE}$ thấp hơn hẳn bộ ước lượng không chệch! Cuối cùng, một dãy ước lượng $\hat{\theta}_n$ được gọi là **vững (consistent)** nếu nó hội tụ theo xác suất tới tham số thực: với mọi $\varepsilon > 0$, $P(|\hat{\theta}_n - \theta| > \varepsilon) \to 0$ khi $n \to \infty$. Khi Bias và Variance đều tiến về $0$, MSE cũng tiến về $0$ và suy ra tính vững; đây là một **điều kiện đủ**, không phải định nghĩa tương đương cho mọi bộ ước lượng.

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 10a: Introduction to Statistics (estimator foundations); Class 22: Confidence Intervals Based on Normal Data (standard errors); the bias–variance identity in this topic is derived algebraically

### Chương 2 — Hàm hợp lý (Likelihood), Ước lượng hợp lý cực đại (MLE) và Suy luận Bayes (Bayesian Inference) (`stat-likelihood-mle-bayesian`)

Chương này trình bày hai phương pháp xây dựng bộ ước lượng tham số từ nguyên lý gốc: cực đại hóa hàm log-hợp lý $L(\theta) = P(\text{data} \mid \theta)$ trong MLE (cơ sở của hầu hết các hàm mất mát Cross-Entropy và bình phương tối thiểu trong học máy), và cập nhật phân phối hậu nghiệm $f(\theta \mid \text{data}) \propto f(\text{data} \mid \theta) f(\theta)$ trong suy luận Bayes.

*Nguồn chương:* `mit-1805-2022` (Class 10b: Maximum Likelihood Estimates; Classes 11–14: Discrete Priors, Probabilistic Prediction, and Continuous Priors/Data; Class 15: Beta Distributions and Conjugate Priors; Class 16b: Probability Intervals)

#### Tiểu mục 1: Hàm hợp lý L(theta), Hàm Log-Likelihood ell(theta), Ước lượng hợp lý cực đại (MLE) và liên hệ với hàm mất mát Học máy (`stat-lmb-likelihood-function-mle-loss` — mức `core`)

Giả sử mẫu dữ liệu quan sát được $x_1, x_2, \dots, x_n$ được sinh độc lập từ phân phối có PMF hoặc PDF là $f(x \mid \theta)$. Khi giữ dữ liệu $x_1, \dots, x_n$ cố định tại các giá trị thực tế vừa thu được và xem xác suất/mật độ đồng thời của mẫu như một **hàm số của tham số chưa biết $\theta$**, ta thu được **Hàm hợp lý (Likelihood Function)**: $$L(\theta) = f(x_1, x_2, \dots, x_n \mid \theta) = \prod_{i=1}^n f(x_i \mid \theta)$$ Nguyên lý **Ước lượng hợp lý cực đại (Maximum Likelihood Estimation — MLE)** chọn giá trị $\hat{\theta}_{\text{MLE}}$ làm cho dữ liệu thực tế vừa quan sát được có khả năng xuất hiện cao nhất: $\hat{\theta}_{\text{MLE}} = \arg\max_\theta L(\theta)$. Vì hàm logarit tự nhiên $\ln(cdot)$ là hàm tăng nghiêm ngặt bảo toàn điểm cực trị và biến tích $n$ thừa số (rất dễ bị tràn dưới số thực `underflow` về `0.0` trên máy tính khi $n$ lớn) thành **tổng các logarit**, trong cả giải tích lẫn lập trình ta luôn cực đại hóa **Hàm Log-Likelihood**: $$\ell(\theta) = \ln L(\theta) = \sum_{i=1}^n \ln f(x_i \mid \theta)$$ bằng cách giải phương trình đạo hàm (hoặc gradient) $\frac{d\ell}{d\theta} = 0$ và kiểm tra điều kiện biên (chẳng hạn với $\operatorname{Uniform}(0, \theta)$ trên $x_i \in [0, \theta]$, $L(\theta) = \theta^{-n}$ giảm nghiêm ngặt trên $\theta \ge \max_i x_i$ nên $\hat{\theta}_{\text{MLE}} = \max_i x_i$ nằm ngay tại biên chứ không phải nơi đạo hàm bằng $0$!).

Tiểu mục chỉ ra mối liên hệ trực tiếp giữa MLE và **Học máy (`CS-36`, `CS-37`)**: việc cực đại hóa Log-Likelihood $\max_\theta \sum_{i=1}^n \ln P(y_i \mid x_i; \theta)$ hoàn toàn tương đương với việc **cực tiểu hóa hàm mất mát Âm Log-Likelihood (Negative Log-Likelihood — NLL)**: (1) Nếu giả thiết nhiễu tuân theo phân phối chuẩn Gaussian $y_i \sim \mathcal{N}(\mathbf{w}^T \mathbf{x}_i, \sigma^2)$, thì cực đại hóa $\ell(\mathbf{w})$ chính là **cực tiểu hóa tổng bình phương sai số (Least Squares / MSE Loss)** $\sum (y_i - \mathbf{w}^T \mathbf{x}_i)^2$; và (2) Nếu nhãn phân loại $y_i \in \{0, 1\}$ tuân theo phân phối Bernoulli với xác suất dự đoán $\hat{p}_i$, thì âm Log-Likelihood $-\sum [y_i \ln \hat{p}_i + (1-y_i)\ln(1-\hat{p}_i)]$ chính là **hàm mất mát Binary Cross-Entropy**!

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 10b: Maximum Likelihood Estimates (Likelihood and Log-Likelihood)

#### Tiểu mục 2: Suy luận Bayes: Phân phối tiên nghiệm (Prior), Hậu nghiệm (Posterior), Tiên nghiệm liên hợp (Beta–Binomial) và ước lượng MAP (`stat-lmb-bayesian-updating-conjugate-map` — mức `core`)

Khác với trường phái tần suất (Frequentist — xem tham số $\theta$ là một hằng số cố định chưa biết), **Trường phái suy luận Bayes (Bayesian Inference)** mô hình hóa sự bất định của chúng ta về tham số bằng cách xem bản thân $\Theta$ là một **biến ngẫu nhiên** có **phân phối tiên nghiệm (Prior distribution) $f(\theta)$** trước khi nhìn thấy dữ liệu. Khi thu thập được dữ liệu $D = (x_1, \dots, x_n)$ có hàm hợp lý $f(D \mid \theta) = L(\theta)$, định lý Bayes cập nhật niềm tin tiên nghiệm thành **phân phối hậu nghiệm (Posterior distribution) $f(\theta \mid D)$**: $$f(\theta \mid D) = \frac{f(D \mid \theta)\,f(\theta)}{\int f(D \mid \theta')\,f(\theta')\,d\theta'} \;\propto\; L(\theta) \cdot f(\theta) \quad (\text{Posterior} \propto \text{Likelihood} \times \text{Prior})$$ (Mẫu số $\int f(D \mid \theta')f(\theta')\,d\theta'$ không phụ thuộc vào $\theta$ nên chỉ đóng vai trò hằng số chuẩn hóa giúp diện tích dưới hàm hậu nghiệm bằng $1$). Quá trình cập nhật có tính tuần tự tự nhiên: phân phối hậu nghiệm của ngày hôm nay trở thành phân phối tiên nghiệm khi có thêm dữ liệu mới vào ngày mai.

Tiểu mục minh họa sức mạnh của **Tiên nghiệm liên hợp (Conjugate Priors)** qua cặp mô hình kinh điển **Beta–Binomial**: khi ước lượng xác suất thành công $p \in [0, 1]$ của đồng xu hoặc tỷ lệ nhấp chuột (CTR), nếu chọn tiên nghiệm thuộc họ phân phối $\operatorname{Beta}(a, b)$ có mật độ $f(p) \propto p^{a-1}(1-p)^{b-1}$ và quan sát thấy $k$ lần thành công cùng $n - k$ lần thất bại (Likelihood $\propto p^k(1-p)^{n-k}$), thì nhân Likelihood với Prior chỉ việc cộng số mũ để cho ngay phân phối hậu nghiệm cùng họ là **$\operatorname{Beta}(a + k, b + n - k)$**! Nhờ đó, khi mới có rất ít dữ liệu (ví dụ tung $1$ lần ra ngửa: $n=1, k=1$), trong khi MLE kết luận cực đoan $\hat{p}_{\text{MLE}} = 1/1 = 100\%$, thì kỳ vọng hậu nghiệm Bayes $\frac{a + k}{a + b + n}$ (công thức làm trơn Laplace / additive smoothing khi $a=b=1$: $\frac{k+1}{n+2}$) điều tiết ước lượng một cách hợp lý nhờ thông tin tiên nghiệm; còn khi dữ liệu $n \to \infty$, dữ liệu áp đảo hoàn toàn tiên nghiệm và hậu nghiệm hội tụ về cùng kết quả với MLE. Cuối cùng, điểm cực đại của mật độ hậu nghiệm $\hat{\theta}_{\text{MAP}} = \arg\max_\theta [\ln L(\theta) + \ln f(\theta)]$ được gọi là **Ước lượng hậu nghiệm cực đại (MAP)** — trong đó số hạng $-\ln f(\theta)$ với tiên nghiệm Gaussian chính là **số hạng chính quy hóa $L_2$ (Weight Decay / Ridge Regularization)** trong học máy!

> **Nguồn đối chiếu:** `mit-1805-2022`: Classes 11, 13, and 14: Bayesian Updating with Discrete and Continuous Priors/Data; Class 15: Beta Distributions, Conjugate Priors: Beta and Normal

#### Tiểu mục 3: Khoảng tin cậy Bayes (Bayesian Credible Intervals) và Phân phối dự đoán hậu nghiệm (Posterior Predictive Distribution) (`stat-lmb-credible-intervals-posterior-predictive` — mức `core`)

Vì suy luận Bayes cung cấp trọn vẹn hàm mật độ hậu nghiệm $f(\theta \mid D)$ của tham số $\Theta$ khi đã biết dữ liệu $D$, ta định lượng độ bất định trực tiếp bằng một **Khoảng tin cậy Bayes mức $1 - \alpha$ (Bayesian Credible Interval)** $[a, b]$ sao cho tích phân mật độ hậu nghiệm trên đoạn đó bằng $1 - \alpha$ (ví dụ $95\%$): $$P(a \le \Theta \le b \mid D) = \int_a^b f(\theta \mid D)\,d\theta = 1 - \alpha$$ (thường chọn khoảng đối xứng theo hai phân vị đuôi $\alpha/2$ và $1 - \alpha/2$ của phân phối hậu nghiệm, hoặc khoảng có mật độ hậu nghiệm cao nhất — HPD). Trong khung Bayes, phát biểu "sau khi quan sát dữ liệu $D$, xác suất để tham số $\Theta$ nằm trong $[a, b]$ bằng $95\%$" là hoàn toàn hợp lệ về mặt toán học.

Hơn nữa, khi cần dự đoán một quan sát mới $X_{\text{new}}$ trong tương lai, thay vì chỉ cắm một điểm ước lượng đơn lẻ $\hat{\theta}$ vào $f(x_{\text{new}} \mid \hat{\theta})$ (bỏ qua độ bất định của bản thân $\hat{\theta}$), suy luận Bayes lấy trung bình có trọng số qua mọi giá trị có thể của $\theta$ theo mật độ hậu nghiệm để tạo ra **Phân phối dự đoán hậu nghiệm (Posterior Predictive Distribution)**: $f(x_{\text{new}} \mid D) = \int f(x_{\text{new}} \mid \theta)\,f(\theta \mid D)\,d\theta$.

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 12a: Bayesian Updating: Probabilistic Prediction; Class 16b: Probability Intervals

### Chương 3 — Khoảng tin cậy tần suất (Frequentist Confidence Intervals), Phân phối Student-t và Tái lấy mẫu Bootstrap (`stat-confidence-intervals-bootstrap`)

Chương này trình bày cách trường phái tần suất định lượng độ bất định khi tham số $\theta$ được xem là hằng số cố định: xây dựng khoảng tin cậy ngẫu nhiên dựa trên thống kê chốt chuẩn hóa, sử dụng phân phối Student-$t$ với $n-1$ bậc tự do khi mẫu i.i.d. chuẩn có phương sai dương chưa biết, phân biệt kết quả chính xác này với xấp xỉ ngoài mô hình chuẩn, giải thích đúng xác suất bao phủ dài hạn và áp dụng phương pháp tái lấy mẫu Bootstrap bằng máy tính khi không biết phân phối lý thuyết.

*Nguồn chương:* `mit-1805-2022` (Class 22 (Confidence Intervals Based on Normal Data), Class 23a (Confidence Intervals: Three Views), Class 23b (Mean of Non-normal Data), and Class 24 (Bootstrap Confidence Intervals))

#### Tiểu mục 1: Xây dựng Khoảng tin cậy tần suất mức (1 - alpha), phân phối Student-t khi chưa biết sigma và giải thích đúng xác suất bao phủ (`stat-cib-frequentist-ci-student-t` — mức `core`)

Trong thống kê tần suất, tham số thực $\mu$ của quần thể là một **hằng số cố định**, còn trung bình mẫu $\bar{X}$ là biến ngẫu nhiên. Dựa vào Định lý giới hạn trung tâm (hoặc khi dữ liệu chuẩn), biến chuẩn hóa $Z = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} \approx \mathcal{N}(0, 1)$ nằm trong đoạn đối xứng $[-z_{\alpha/2}, z_{\alpha/2}]$ với xác suất $1 - \alpha$ (ví dụ với $1 - \alpha = 95\%, \alpha = 0.05$, phân vị chuẩn $z_{0.025} \approx 1.96$). Giải bất đẳng thức $-z_{\alpha/2} \le \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} \le z_{\alpha/2}$ để cô lập $\mu$ ở giữa cho ta **Khoảng tin cậy tần suất mức $1 - \alpha$**: $$\left[ \bar{X} - z_{\alpha/2} \frac{\sigma}{\sqrt{n}}, \; \bar{X} + z_{\alpha/2} \frac{\sigma}{\sqrt{n}} \right]$$ Trong thực tế, phương sai quần thể $\sigma^2$ hầu như không bao giờ biết trước mà phải thay bằng độ lệch chuẩn mẫu $S = \sqrt{\frac{1}{n-1}\sum (X_i - \bar{X})^2}$. Nếu $X_1, \dots, X_n$ là mẫu i.i.d. từ $\mathcal{N}(\mu, \sigma^2)$ với $n \ge 2$ và $\sigma^2 > 0$, việc thay $\sigma$ bằng độ lệch chuẩn mẫu $S$ cho thống kê $\frac{\bar{X} - \mu}{S / \sqrt{n}}$ có **phân phối Student-$t$ chính xác với $n - 1$ bậc tự do ($t_{n-1}$)** — một phân phối hình chuông đối xứng quanh $0$ nhưng có **đuôi dày hơn** $\mathcal{N}(0, 1)$ (và hội tụ về $\mathcal{N}(0, 1)$ khi $n \to \infty$), cho khoảng tin cậy chính xác trong mô hình chuẩn là $\bar{X} \pm t_{n-1, \alpha/2} \frac{S}{\sqrt{n}}$. Ngoài mô hình chuẩn, không thể suy ra phân phối Student-$t$ chính xác chỉ từ việc thay $\sigma$ bằng $S$: với mẫu i.i.d. đủ lớn và phương sai hữu hạn dương có thể dùng xấp xỉ lớn mẫu, nhưng phải thận trọng khi mẫu nhỏ, đuôi nặng hoặc các quan sát phụ thuộc nhau.

Tiểu mục giải thích rõ **ý nghĩa đúng đắn của Khoảng tin cậy tần suất $95\%$**: trong biểu thức $P\left(\mu \in \left[\bar{X} - c, \bar{X} + c\right]\right) = 0.95$, cái ngẫu nhiên là **hai đầu mút của khoảng $\left[\bar{X} - c, \bar{X} + c\right]$** (nó nhảy sang vị trí mới mỗi khi lấy một mẫu dữ liệu mới), còn $\mu$ đứng yên! Vì vậy, "độ tin cậy $95\%$" là phát biểu về **tỷ lệ thành công dài hạn của quy trình tạo khoảng**: nếu lặp lại việc lấy mẫu độc lập $100$ lần và tính $100$ khoảng tin cậy, thì về kỳ vọng có khoảng $95$ khoảng sẽ chụp trúng hằng số $\mu$ và $5$ khoảng trượt ra ngoài. Một khi đã thu thập xong một mẫu cụ thể và tính ra con số $[12.4, 15.8]$, tuyệt đối không được nói "tham số $\mu$ có xác suất $95\%$ rơi vào $[12.4, 15.8]$" trong khung tần suất.

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 22, §5.1–5.2: t-Confidence Intervals for the Mean from Normal Data; Class 23a–23b: Three Views and Non-normal Data

#### Tiểu mục 2: Phương pháp Tái lấy mẫu Bootstrap (Empirical & Parametric Bootstrap): dùng máy tính ước lượng phân phối mẫu của thống kê bất kỳ (`stat-cib-bootstrap-resampling-principle` — mức `core`)

Các công thức giải tích dùng $\mathcal{N}(0, 1)$ hay $t_{n-1}$ ở trên chỉ áp dụng thuận lợi cho **trung bình mẫu $\bar{X}$**. Vậy nếu ta cần tìm sai số chuẩn và khoảng tin cậy cho **trung vị mẫu (sample median)**, phân vị `p99` của độ trễ hệ thống, hệ số tương quan, hay tỷ số hai đại lượng mà không hề có công thức giải tích cho phân phối mẫu của chúng và cũng không thể đi thu thập thêm $1000$ mẫu mới từ thế giới thực thì làm thế nào? **Phương pháp Bootstrap** (do Bradley Efron đề xuất) giải quyết bài toán này bằng nguyên lý thay thế (plug-in principle): vì hàm phân phối thực nghiệm của mẫu hiện tại $(x_1, x_2, \dots, x_n)$ là xấp xỉ tốt nhất mà ta có về phân phối của quần thể, ta dùng máy tính để **lấy mẫu lại có hoàn lại (resampling with replacement)** từ chính mẫu gốc!

Cụ thể, trong **Bootstrap thực nghiệm (Empirical / Nonparametric Bootstrap)**, từ mẫu gốc kích thước $n$, máy tính rút ngẫu nhiên **có hoàn lại** $n$ phần tử để tạo thành một mẫu giả lập $x_1^*, x_2^*, \dots, x_n^*$ và tính giá trị thống kê mục tiêu $\hat{\theta}^*$ trên mẫu đó; lặp lại quy trình này $B$ lần (ví dụ $B = 10\,000$ lần trên CPU chỉ mất vài mili-giây) tạo ra $B$ giá trị $\hat{\theta}_1^*, \dots, \hat{\theta}_B^*$. Độ lệch chuẩn của $B$ giá trị này ước lượng trực tiếp sai số chuẩn $\operatorname{SE}(\hat{\theta})$, và độ lệch phân phối của $(\hat{\theta}^* - \hat{\theta})$ quanh $0$ ước lượng trực tiếp phân phối của $(\hat{\theta} - \theta)$ để lập khoảng tin cậy Bootstrap. Tiểu mục cũng nêu rõ **giới hạn của Bootstrap**: nếu mẫu gốc ban đầu quá nhỏ ($n$ rất bé) hoặc bị lệch chọn mẫu không đại diện cho quần thể, hoặc thống kê phụ thuộc vào cực trị biên (như $\max X_i$), thì việc lấy mẫu lại từ chính mẫu gốc đó không thể tự sinh ra thông tin còn thiếu.

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 24: Bootstrap Confidence Intervals

### Chương 4 — Kiểm định giả thuyết (NHST, p-value, Power), Hồi quy tuyến tính và Ranh giới Dự đoán – Nhân quả (`stat-hypothesis-testing-regression-causality`)

Chương cuối trang bị khung lý thuyết chặt chẽ cho việc ra quyết định dựa trên dữ liệu và thiết kế thử nghiệm A/B (A/B testing): kiểm định giả thuyết thống kê (sai lầm loại I/II, lực kiểm định power, định nghĩa xác suất có điều kiện của $p$-value, hiệu chỉnh đa giả thuyết), phân tích hồi quy tuyến tính và phân biệt mối tương quan dự đoán với tác động nhân quả trước biến gây nhiễu (confounder).

*Nguồn chương:* `mit-1805-2022` (Classes 17a–19: The Frequentist School of Statistics and NHST I–III; Class 26: Linear Regression)

#### Tiểu mục 1: Kiểm định giả thuyết (H0 vs HA), Sai lầm loại I/II, Lực kiểm định (Power), bản chất xác suất có điều kiện của p-value và Kiểm định đa giả thuyết (`stat-htrc-nhst-errors-power-pvalue` — mức `core`)

Trong **Kiểm định giả thuyết thống kê (Null Hypothesis Significance Testing — NHST)** (chẳng hạn kiểm tra xem thuật toán gợi ý mới $B$ có làm tăng tỷ lệ chuyển đổi so với thuật toán hiện hành $A$ trong một thử nghiệm A/B hay không), ta thiết lập hai giả thuyết đối lập: **Giả thuyết không (Null Hypothesis $H_0$)** đại diện cho trạng thái mặc định "không có sự khác biệt thực sự / hiệu ứng bằng $0$" (mọi chênh lệch quan sát được chỉ là do biến thiên ngẫu nhiên của mẫu), và **Giả thuyết đối (Alternative Hypothesis $H_A$)** đại diện cho hiệu ứng thực sự tồn tại. Từ mẫu dữ liệu, ta tính một **Thống kê kiểm định (Test Statistic) $T$** (như thống kê $z$, thống kê $t$ một mẫu/hai mẫu, hoặc thống kê $\chi^2$ kiểm định tính độc lập / độ khớp). Vì quyết định bác bỏ hay không bác bỏ $H_0$ dựa trên mẫu ngẫu nhiên, luôn có hai loại sai lầm: **Sai lầm loại I (Type I Error — False Positive)** là bác bỏ $H_0$ khi thực tế $H_0$ đúng (được khống chế bởi **mức ý nghĩa $\alpha = P(\text{Bác bỏ } H_0 \mid H_0)$**, thường đặt $\alpha = 0.05$ hoặc $0.01$); và **Sai lầm loại II (Type II Error — False Negative)** là không bác bỏ được $H_0$ khi thực tế $H_A$ đúng (với xác suất $\beta$). Đại lượng **$1 - \beta = P(\text{Bác bỏ } H_0 \mid H_A)$** được gọi là **Lực kiểm định (Statistical Power)** — khả năng phát hiện ra hiệu ứng thực khi nó tồn tại, phụ thuộc vào cỡ mẫu $n$, độ lớn hiệu ứng thực (effect size) và mức $\alpha$ (dùng để tính cỡ mẫu cần thiết trước khi chạy thí nghiệm).

**Giá trị $p$ ($p$-value)** được định nghĩa chính xác là: **xác suất (tính dưới giả định $H_0$ là đúng!) để thống kê kiểm định $T$ nhận giá trị cực đoan bằng hoặc hơn giá trị $t_{\text{obs}}$ vừa quan sát được trong mẫu**: $$p\text{-value} = P(T \text{ cực đoan hơn } t_{\text{obs}} \mid H_0 \text{ đúng})$$ Ta bác bỏ $H_0$ ở mức $\alpha$ khi $p\text{-value} \le \alpha$. Tiểu mục nhấn mạnh ba sai lầm nghiêm trọng phải tránh: (1) **$p$-value KHÔNG phải là $P(H_0 \mid \text{data})$** (nhầm lẫn chiều điều kiện $P(\text{data} \mid H_0)$ với $P(H_0 \mid \text{data})$ mà quên tỷ lệ nền Prior của Định lý Bayes); (2) **$p$-value nhỏ (ý nghĩa thống kê) không đồng nghĩa với hiệu ứng lớn (ý nghĩa thực tiễn)**: với cùng một độ lớn hiệu ứng khác $0$ và mô hình phù hợp, tăng cỡ mẫu thường giúp phát hiện những khác biệt rất nhỏ; mức $p$ cụ thể còn phụ thuộc tỷ lệ nền, phương sai và thiết kế lấy mẫu, nên luôn phải báo cáo kèm **Khoảng tin cậy của độ lớn hiệu ứng (Effect Size)**; và (3) **Bẫy kiểm định đa giả thuyết (Multiple Testing / $p$-hacking)**: nếu thử nghiệm đồng thời $m = 20$ đặc trưng hoàn toàn vô tác dụng ($H_0$ đúng hết) ở mức $\alpha = 0.05$, thì kỳ vọng sẽ có $20 \times 0.05 = 1$ đặc trưng ngẫu nhiên vượt ngưỡng $p < 0.05$ (nếu các phép kiểm định độc lập, xác suất có ít nhất 1 báo động giả là $1 - 0.95^{20} \approx 64\%$!), do đó bắt buộc phải hiệu chỉnh ngưỡng (như **Hiệu chỉnh Bonferroni** chia mức ý nghĩa cho số phép thử $\alpha / m$, hoặc kiểm soát tỷ lệ phát hiện sai — FDR).

> **Nguồn đối chiếu:** `mit-1805-2022`: Classes 17b–19: NHST I–III (test statistics, p-values, z/t tests, and chi-square tests)

#### Tiểu mục 2: Mô hình Hồi quy tuyến tính thống kê Y = X beta + epsilon, tính chất của ước lượng OLS, hệ số R^2 và chẩn đoán phần dư (`stat-htrc-linear-regression-residuals` — mức `core`)

Ở Chương 4 của Đại số tuyến tính (`CS-10`), ta đã tìm nghiệm bình phương tối thiểu $\hat{\boldsymbol{\beta}} = (X^T X)^{-1} X^T \mathbf{y}$ như một bài toán hình học chiếu vector $\mathbf{y}$ lên không gian cột $C(X)$. Sang môn Thống kê, ta đặt mô hình xác suất sinh dữ liệu $Y_i = \beta_0 + \beta_1 x_{i,1} + \dots + \beta_p x_{i,p} + \varepsilon_i$ (viết dưới dạng ma trận $\mathbf{Y} = X\boldsymbol{\beta} + \boldsymbol{\varepsilon}$), trong đó các sai số ngẫu nhiên $\varepsilon_i$ có kỳ vọng bằng $0$ ($E[\varepsilon_i] = 0$), có cùng phương sai không đổi $\operatorname{Var}(\varepsilon_i) = \sigma^2$ (**tính phương sai đồng nhất / homoscedasticity**) và đôi một không tương quan. Dưới các giả định này (và khi thêm giả định $\varepsilon_i \sim \mathcal{N}(0, \sigma^2)$ thì ước lượng bình phương tối thiểu OLS trùng khớp hoàn toàn với ước lượng hợp lý cực đại MLE!), bộ ước lượng $\hat{\boldsymbol{\beta}} = (X^T X)^{-1} X^T \mathbf{Y}$ là **không chệch ($E[\hat{\boldsymbol{\beta}}] = \boldsymbol{\beta}$)** và có ma trận hiệp phương sai $\operatorname{Cov}(\hat{\boldsymbol{\beta}}) = \sigma^2 (X^T X)^{-1}$.

Nhờ Định lý Pythagoras trực giao giữa vector khớp $\hat{\mathbf{y}} = X\hat{\boldsymbol{\beta}}$ và vector phần dư $\mathbf{e} = \mathbf{y} - \hat{\mathbf{y}}$, tổng biến thiên toàn phần $\operatorname{TSS} = \sum (y_i - \bar{y})^2$ tách thành tổng biến thiên giải thích được bởi mô hình $\operatorname{ESS} = \sum (\hat{y}_i - \bar{y})^2$ cộng với tổng bình phương phần dư $\operatorname{RSS} = \sum (y_i - \hat{y}_i)^2$, định nghĩa **Hệ số xác định $R^2 = 1 - \frac{\operatorname{RSS}}{\operatorname{TSS}} \in [0, 1]$**. Tiểu mục lưu ý rõ việc kiểm tra đồ thị phần dư (residual plots) để phát hiện quan hệ phi tuyến bị bỏ sót hoặc phương sai thay đổi (heteroscedasticity), cũng như hiện tượng đa cộng tuyến (multicollinearity) khi các cột của $X$ gần phụ thuộc tuyến tính làm ma trận $X^T X$ suy biến và đẩy phương sai của $\hat{\boldsymbol{\beta}}$ tăng vọt.

> **Nguồn đối chiếu:** `mit-1805-2022`: Class 26: Linear Regression (Reading and Slides: Linear and Multiple Regression)

#### Tiểu mục 3: Ranh giới giữa Tương quan dự đoán và Suy luận nhân quả: Biến gây nhiễu (Confounder), Nghịch lý Simpson và Thí nghiệm ngẫu nhiên hóa (RCT / A/B Test) (`stat-htrc-correlation-confounding-causality` — mức `core`)

Một mô hình thống kê hay học máy có thể đạt độ chính xác dự đoán rất cao nhờ khai thác mối tương quan giữa biến đầu vào $X$ và biến kết quả $Y$ (tức $P(Y \mid X)$), nhưng **Tương quan không suy ra Nhân quả (Correlation does not imply Causation)**: việc quan sát thấy những người dùng nhận nhiều email thông báo ($X$ cao) có mức độ chi tiêu cao ($Y$ cao) hoàn toàn không chứng minh rằng "nếu hệ thống chủ động gửi dồn dập thêm email cho người dùng (can thiệp lên $X$) thì họ sẽ chi tiêu nhiều hơn". Nguyên nhân phổ biến nhất tạo ra tương quan giả tạo giữa $X$ và $Y$ là sự tồn tại của một **Biến gây nhiễu ẩn (Confounding Variable / Confounder) $Z$** cùng tác động lên cả $X$ lẫn $Y$ ($X \leftarrow Z \to Y$, chẳng hạn mức độ gắn bó sẵn có của người dùng $Z$ vừa khiến họ bật nhận nhiều thông báo $X$, vừa khiến họ mua hàng nhiều $Y$). Thậm chí, khi một biến gây nhiễu phân tầng bị gộp chung lại mà không kiểm soát, chiều của mối liên hệ có thể **đảo ngược hoàn toàn** giữa từng nhóm con và toàn thể — hiện tượng nổi tiếng gọi là **Nghịch lý Simpson (Simpson’s Paradox)**.

Tiểu mục chốt lại sự khác biệt cơ chế giữa hai câu hỏi: (1) **Câu hỏi dự đoán quan sát**: "Khi thấy $X = x$, giá trị kỳ vọng của $Y$ là bao nhiêu?" — chỉ cần phân phối có điều kiện $E[Y \mid X = x]$ từ dữ liệu quan sát thụ động; và (2) **Câu hỏi can thiệp nhân quả (Causal Intervention)**: "Nếu ta thay đổi chính sách/thuật toán để áp đặt $X := x$, kết quả $Y$ sẽ thay đổi ra sao?". Để trả lời câu hỏi nhân quả mà hạn chế sai lệch do phân bổ điều trị liên quan tới biến gây nhiễu $Z$, tiêu chuẩn vàng trong khoa học máy tính và khoa học thực nghiệm là **Thí nghiệm đối chứng ngẫu nhiên hóa (Randomized Controlled Trial — RCT / Online A/B Testing)**: việc dùng bộ sinh ngẫu nhiên chia người dùng vào nhóm thử nghiệm (Treatment $T=1$) và nhóm đối chứng (Control $T=0$) làm phân bổ điều trị độc lập với các đặc điểm có trước can thiệp theo cơ chế ngẫu nhiên hóa. Hai mẫu hữu hạn vẫn có thể mất cân bằng ngẫu nhiên; chênh lệch quan sát phải được phân tích cùng độ bất định. Diễn giải tác động nhân quả còn cần giả định phù hợp về tuân thủ phân bổ, thiếu dữ liệu, đo lường và sự can thiệp giữa người dùng; không phải mọi chênh lệch trong một lần thử đều là hiệu ứng thực sự.

> **Nguồn đối chiếu:** `openintro-statistics`: Chapter 1 resources, §1.3 Data collection principles and §1.4 Experiments (random assignment, controls and experimental design) | `mit-1805-2022`: Class 7b: Covariance and Correlation; Class 26: Linear Regression (association foundations, not a complete treatment of causal inference) | `mit-6042j-2015`: MCS 2015 §17.6: Simpson’s Paradox (aggregation and the reversal of conditional associations)

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
