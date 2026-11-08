export const BLOCKS_4_TO_5 = [
  {
    id: 'block-4',
    code: 'Khối IV',
    title: 'Khối IV — Hệ thống máy tính',
    description:
      'Đi xuyên suốt từ mức cổng logic và mạch số, lên kiến trúc tập lệnh và vi kiến trúc CPU/Cache, giao diện lập trình hệ thống Unix/Linux, cơ chế bên trong của hệ điều hành (ảo hóa CPU, bộ nhớ ảo, hệ thống tệp), lập trình đồng thời và song song, mạng máy tính TCP/IP đến các hệ thống phân tán chịu lỗi.',
  },
  {
    id: 'block-5',
    code: 'Khối V',
    title: 'Khối V — Dữ liệu và xây dựng phần mềm',
    description:
      'Nghiên cứu mô hình dữ liệu quan hệ, đại số quan hệ, chuẩn hóa và giao dịch SQL, đi sâu vào kiến trúc bên trong hệ quản trị cơ sở dữ liệu (lưu trữ trang, B+Tree, tối ưu hóa truy vấn, MVCC, WAL recovery), cùng các nguyên lý kỹ nghệ phần mềm quy mô lớn, kiến trúc ứng dụng Web, vận hành hệ thống tin cậy và bảo mật.',
  },
];

export const COURSES_BLOCKS_4_TO_5 = [
  {
    id: 'digital-logic-computer-organization',
    code: 'CS-22',
    title: 'Logic số và tổ chức máy',
    blockId: 'block-4',
    level: 'core',
    overview: [
      'Môn học giải thích cách một máy tính được kiến tạo từ các cổng logic cơ sở dựa trên đại số Boolean. Nội dung đi từ biểu diễn nhị phân của số nguyên (bù hai — two’s complement), dấu chấm động IEEE 754 và văn bản Unicode, đến việc tổng hợp các cổng logic (NAND, AND, OR, NOT, XOR, Multiplexer) thành mạch tổ hợp và đơn vị số học–logic (ALU). Tiếp theo, môn học đưa tín hiệu xung nhịp (clock) và mạch tuần tự (Flip-Flop, thanh ghi, mảng bộ nhớ RAM) vào để lưu trữ trạng thái, rồi kết nối datapath và bộ điều khiển (control unit) thành một mô hình CPU hoàn chỉnh thực thi chu trình nạp–giải mã–thực thi (fetch–decode–execute).',
    ],
    prerequisites: [
      { courseId: 'discrete-math', type: 'required', reason: 'Cần đại số Boolean, bảng chân trị và hệ đếm/số học nhị phân.' },
      { courseId: 'intro-programming', type: 'required', reason: 'Cần hiểu khái niệm biến, địa chỉ và câu lệnh điều khiển để đối chiếu với thanh ghi và lệnh máy.' },
    ],
    plannedChapters: [
      { id: 'dlco-binary-numbers-ieee754', title: 'Biểu diễn bit, số nguyên bù hai, dấu chấm động IEEE 754 và mã hóa ký tự', summary: 'Hệ nhị phân/thập lục phân, số nguyên có dấu bù hai, tràn số học, cấu trúc dấu–mũ–định trị của IEEE 754 (sai số làm tròn, mất tính kết hợp) và mã hóa UTF-8.', primaryLocator: "ucb-cs61c-notes: Number Representation; Floating Point" },
      { id: 'dlco-boolean-combinational-alu', title: 'Đại số Boolean, mạch tổ hợp và thiết kế khối số học–logic (ALU)', summary: 'Cổng NAND phổ quát, tối giản biểu thức Boolean, bộ chọn kênh (Mux/Demux), bộ cộng bán phần/toàn phần (Half/Full Adder) và kiến trúc ALU.', primaryLocator: "nand2tetris: Projects 1 Boolean Logic and 2 Boolean Arithmetic" },
      { id: 'dlco-sequential-registers-ram', title: 'Xung nhịp, mạch tuần tự, thanh ghi và tổ chức bộ nhớ RAM', summary: 'Sự khác biệt giữa mạch tổ hợp và mạch tuần tự có trạng thái, D Flip-Flop, thanh ghi đa bit, bộ đếm chương trình (PC) và giải mã địa chỉ trong RAM.', primaryLocator: "nand2tetris: Project 3: Sequential Logic; ucb-cs61c-notes: Synchronous Digital Systems" },
      { id: 'dlco-datapath-control-cpu-cycle', title: 'Đường dữ liệu (Datapath), tín hiệu điều khiển và chu trình lệnh của CPU mô hình', summary: 'Mã hóa lệnh máy nhị phân, giải mã trường lệnh, phối hợp ALU–thanh ghi–bộ nhớ trong một chu kỳ lệnh và giới hạn của CPU giáo cụ so với vi xử lý thương mại.', primaryLocator: "nand2tetris: Project 4: Machine Language; Project 5: Computer Architecture" },
    ],
    boundaries: [
      'Nêu rõ CPU mô hình (như Hack trong Nand2Tetris) là mô hình giảng dạy đã giản lược: không có pipeline, không có cache, không có chế độ đặc quyền kernel/user và không đại diện cho vi kiến trúc thương mại hiện đại (được học ở Môn 23).',
    ],
    sources: [
      { sourceId: 'nand2tetris', locator: 'Chapters 1–5 (Boolean Logic, Boolean Arithmetic, Sequential Logic, Machine Language, Computer Architecture)', relationship: 'primary' },
      { sourceId: 'ucb-cs61c-notes', locator: 'Number Representation, Floating Point, and Synchronous Digital Systems Notes', relationship: 'primary' },
    ],
  },
  {
    id: 'computer-architecture',
    code: 'CS-23',
    title: 'Kiến trúc máy tính',
    blockId: 'block-4',
    level: 'core',
    overview: [
      'Môn học nghiên cứu hợp đồng giao tiếp giữa phần mềm và phần cứng thông qua Kiến trúc Tập lệnh (ISA — lấy RISC-V làm chuẩn minh họa) cùng các kỹ thuật tổ chức vi kiến trúc giúp tăng hiệu năng thực thi. Nội dung bao gồm tập thanh ghi, các định dạng lệnh RISC-V, quy ước gọi hàm (calling convention, bảo toàn thanh ghi caller-saved vs callee-saved, tổ chức khung ngăn xếp), kỹ thuật đường ống lệnh 5 tầng (pipelining) và xử lý các xung đột cấu trúc, dữ liệu (forwarding/stalling) và điều khiển (branch prediction). Tiếp theo là phân cấp bộ nhớ và bộ nhớ đệm (cache: direct-mapped, set-associative, chính sách ghi, tính cục bộ không gian/thời gian), giao diện phần cứng của bộ nhớ ảo (MMU/TLB), cơ chế vào/ra (I/O, ngắt, DMA), định luật Amdahl và song song mức dữ liệu (SIMD).',
    ],
    prerequisites: [
      { courseId: 'digital-logic-computer-organization', type: 'required', reason: 'Cần nắm vững biểu diễn số, mạch tuần tự, thanh ghi, ALU và datapath đơn chu kỳ.' },
      { courseId: 'cpp-memory-model', type: 'required', reason: 'Cần hiểu con trỏ, mảng, struct alignment và khung ngăn xếp ở mức ngôn ngữ C/C++.' },
    ],
    plannedChapters: [
      { id: 'ca-isa-riscv-calling-convention', title: 'Kiến trúc tập lệnh (ISA), hợp ngữ RISC-V và Quy ước gọi hàm (Calling Convention)', summary: 'Tách biệt ISA với vi kiến trúc, tập lệnh số học/truy cập bộ nhớ/rẽ nhánh RISC-V, quản lý con trỏ ngăn xếp (sp), địa chỉ trả về (ra) và bảo toàn thanh ghi qua lời gọi hàm đệ quy.', primaryLocator: "ucb-cs61c-notes: RISC-V; RISC-V Instruction Formats; CALL" },
      { id: 'ca-pipelining-hazards', title: 'Đường ống lệnh (Pipelining) và xử lý xung đột (Hazards)', summary: 'Tăng thông lượng bằng đường ống 5 tầng (IF, ID, EX, MEM, WB), xung đột dữ liệu và đường nhìn trước (forwarding/bypassing), lệnh trễ load-use và xung đột nhánh.', primaryLocator: "ucb-cs61c-notes: Single-Cycle CPU; Pipelining" },
      { id: 'ca-memory-hierarchy-caches', title: 'Phân cấp bộ nhớ, tính cục bộ và Kiến trúc bộ nhớ đệm (Cache)', summary: 'Khoảng cách tốc độ CPU–DRAM, tính cục bộ thời gian và không gian, tách địa chỉ thành Tag/Index/Offset, cache ánh xạ trực tiếp và kết hợp tập hợp, phân loại 3C misses (compulsory, capacity, conflict) và viết mã thân thiện với cache.', primaryLocator: "ucb-cs61c-notes: Caches; Performance Programming" },
      { id: 'ca-hardware-vm-io-parallelism', title: 'Hỗ trợ phần cứng cho Bộ nhớ ảo, Ngắt/DMA và Hiệu năng song song (Định luật Amdahl)', summary: 'Chế độ đặc quyền của CPU, MMU/TLB, cơ chế polling vs interrupt-driven I/O vs DMA, công thức thời gian CPU = IC x CPI x Clock Period, Định luật Amdahl và lệnh vector SIMD.', primaryLocator: "ucb-cs61c-notes: Virtual Memory; Performance Programming" },
    ],
    boundaries: [
      'Phân biệt rõ đặc tả tập lệnh (ISA như RISC-V hoặc x86-64) với một thế hệ vi kiến trúc cụ thể (như thực thi ngoài thứ tự — out-of-order execution hay bộ nhớ đệm nhiều cấp của một dòng chip riêng).',
    ],
    sources: [
      { sourceId: 'ucb-cs61c-notes', locator: 'RISC-V, Pipelining, Caches, Virtual Memory, I/O, and Performance Notes', relationship: 'primary' },
      { sourceId: 'dive-into-systems', locator: 'Chapters 7–9 (Assembly) & Chapter 11 (Storage and Memory Hierarchy)', relationship: 'supplementary' },
    ],
  },
  {
    id: 'linux-system-programming',
    code: 'CS-24',
    title: 'Linux/Unix và lập trình hệ thống',
    blockId: 'block-4',
    level: 'core',
    overview: [
      'Môn học nghiên cứu giao diện lập trình hệ thống (System Call API) mà qua đó chương trình ở không gian người dùng (user space) yêu cầu nhân hệ điều hành (kernel) thực hiện các thao tác đặc quyền. Nội dung mở đầu bằng phần cầu nối ngôn ngữ C hệ thống (con trỏ, mảng byte, chuỗi kết thúc bằng null, mã lỗi `errno`, quản lý bộ nhớ thủ công) và quá trình biên dịch–liên kết tĩnh/động (ELF, symbol resolution, relocation). Trên nền đó, môn học phân tích vòng đời tiến trình (`fork`, `execve`, `waitpid`), bảng mô tả tệp (file descriptors), vào/ra mức thấp (`open`, `read`, `write` và xử lý đọc/ghi thiếu byte — short counts), chuyển hướng luồng (`dup2`), đường ống liên tiến trình (`pipe`), tín hiệu không đồng bộ (POSIX signals) và giao diện socket cơ sở.',
    ],
    prerequisites: [
      { courseId: 'git-dev-tools', type: 'required', reason: 'Cần nắm vững dòng lệnh shell, đường dẫn và quy trình build cơ bản.' },
      { courseId: 'cpp-memory-model', type: 'required', reason: 'Cần hiểu sâu con trỏ, bố cục bộ nhớ và vùng đệm byte.' },
      { courseId: 'computer-architecture', type: 'required', reason: 'Cần hiểu chế độ đặc quyền user/kernel, thanh ghi, ngắt và ngăn xếp.' },
    ],
    plannedChapters: [
      { id: 'lsp-c-bridge-linking-elf', title: 'Cầu nối ngôn ngữ C hệ thống, Biên dịch, Liên kết (Linking) và tệp thực thi ELF', summary: 'Khác biệt cốt lõi giữa C và C++, thao tác vùng nhớ thô, tệp đối tượng, bảng ký hiệu (symbol table), liên kết tĩnh vs thư viện chia sẻ động và cách hệ điều hành nạp chương trình.', primaryLocator: "dive-into-systems: Chapter 2: strings, dynamic memory, and §2.9.6 Writing and using your own C libraries" },
      { id: 'lsp-syscalls-processes-signals', title: 'Lời gọi hệ thống (System Calls), Vòng đời tiến trình và Tín hiệu (Signals)', summary: 'Cơ chế chuyển ngữ cảnh từ user mode sang kernel mode qua trap, nguyên lý tách fork() và exec(), thu dọn tiến trình con tránh zombie bằng waitpid(), và xử lý tín hiệu không đồng bộ an toàn.', primaryLocator: "ostep-v110: Chapter 5: Interlude: Process API; dive-into-systems: Chapter 13: processes and system calls" },
      { id: 'lsp-descriptors-io-pipes', title: 'Bảng mô tả tệp (File Descriptors), Vào/Ra mức thấp và Đường ống (Pipes)', summary: 'Trừu tượng hóa tệp Unix, sự khác biệt giữa FILE* có đệm của thư viện C và file descriptor của kernel, hiện tượng đọc/ghi từng phần (short counts), chia sẻ bảng mở tệp qua fork, dup2() và pipe().', primaryLocator: "ostep-v110: Chapter 39: Files and Directories; mit-xv6-2025: Chapter 1: I/O, file descriptors, pipes" },
      { id: 'lsp-filesystem-permissions-ipc', title: 'Cấu trúc hệ thống tệp, Quyền truy cập POSIX và Giao tiếp liên tiến trình cơ sở', summary: 'Inode, liên kết cứng (hard link) vs liên kết mềm (symbolic link), bit quyền rwx/setuid, ánh xạ tệp vào bộ nhớ (mmap) và tổng quan các cơ chế IPC.', primaryLocator: "ostep-v110: Chapters 14 Memory API and 39 Files and Directories; mit-xv6-2025: Chapter 1: File system; Chapter 3: shared mappings as a VM extension" },
    ],
    boundaries: [
      'Dạy rõ các đặc trưng của ngôn ngữ C hệ thống trước khi đọc mã nguồn hệ thống; không đồng nhất C với C++ và luôn kiểm tra giá trị trả về cùng biến `errno` của mọi lời gọi hệ thống.',
    ],
    sources: [
      { sourceId: 'ostep-v110', locator: 'Chapters 5–6 (Process API & Limited Direct Execution) and Chapters 39–40 (Files and Directories)', relationship: 'primary' },
      { sourceId: 'dive-into-systems', locator: 'Chapters 1–2 (C Programming) & Chapter 13 (Operating Systems and Processes)', relationship: 'primary' },
      { sourceId: 'mit-xv6-2025', locator: 'Chapter 1: Operating System Interfaces (Processes, I/O, Pipes, File System)', relationship: 'supplementary' },
    ],
  },
  {
    id: 'operating-systems',
    code: 'CS-25',
    title: 'Hệ điều hành',
    blockId: 'block-4',
    level: 'core',
    overview: [
      'Môn học phân tích các cơ chế và chính sách cốt lõi mà hệ điều hành sử dụng để ảo hóa tài nguyên phần cứng hữu hạn, điều phối thực thi đồng thời và lưu trữ dữ liệu bền vững. Nội dung được tổ chức quanh ba trụ cột kinh điển: (1) Ảo hóa CPU — mô hình tiến trình, trạng thái tiến trình, cơ chế thực thi trực tiếp có giới hạn (Limited Direct Execution), chuyển ngữ cảnh (context switch) và các thuật toán lập lịch (FIFO, SJF, Round-Robin, MLFQ, tỷ lệ công bằng); (2) Ảo hóa bộ nhớ — không gian địa chỉ ảo, dịch địa chỉ bằng phần cứng (MMU), phân đoạn, phân trang (paging), bảng trang đa cấp, bộ đệm TLB, ngắt thiếu trang (page fault) và chính sách thay thế trang; (3) Lưu trữ bền vững và bảo vệ — thiết bị khối, lập lịch I/O, thiết kế hệ thống tệp (VSFS/FFS/LFS), tính nhất quán khi sập nguồn (crash consistency, fsck, journaling/WAL) và cơ chế cô lập/bảo vệ tài nguyên.',
    ],
    prerequisites: [
      { courseId: 'computer-architecture', type: 'required', reason: 'Cần hiểu thanh ghi, ngắt phần cứng, chế độ đặc quyền CPU, bộ nhớ cache và MMU/TLB.' },
      { courseId: 'linux-system-programming', type: 'required', reason: 'Cần hiểu giao diện tiến trình, lời gọi hệ thống và mô tả tệp từ góc nhìn người dùng trước khi mổ xẻ cơ chế bên trong kernel.' },
      { courseId: 'data-structures', type: 'required', reason: 'Cần hàng đợi ưu tiên, cây, bảng băm và bitmap để hiểu bộ lập lịch, bảng trang và cấp phát khối đĩa.' },
    ],
    plannedChapters: [
      { id: 'os-cpu-virtualization-mechanisms', title: 'Ảo hóa CPU: Trừu tượng hóa tiến trình và Cơ chế thực thi trực tiếp có giới hạn', summary: 'Cấu trúc khối điều khiển tiến trình (PCB), tách biệt không gian kernel/user, bảng vector trap, lấy lại quyền điều khiển bằng ngắt đồng hồ (timer interrupt) và lưu/khôi phục thanh ghi khi chuyển ngữ cảnh.', primaryLocator: "ostep-v110: Chapters 4 Processes, 5 Process API, 6 Limited Direct Execution; mit-xv6-2025: Chapters 2 and 4" },
      { id: 'os-cpu-scheduling-policies', title: 'Chính sách lập lịch CPU và đánh đổi giữa Thời gian quay vòng – Thời gian phản hồi', summary: 'Chỉ số Turnaround Time vs Response Time, hiệu ứng đoàn tàu trong FIFO, tính tối ưu của SJF/STCF, chia sẻ thời gian Round-Robin, hàng đợi phản hồi đa mức (MLFQ) chống bỏ đói và lập lịch đa nhân.', primaryLocator: "ostep-v110: Chapters 7 Scheduling, 8 Multi-level Feedback, 9 Lottery Scheduling, 10 Multi-CPU Scheduling" },
      { id: 'os-virtual-memory', title: 'Bộ nhớ ảo và phân trang (Virtual Memory & Paging)', summary: 'Trừu tượng hóa không gian địa chỉ, cơ chế dịch địa chỉ MMU, phân đoạn, phân trang (VPN/PFN/Offset), bảng trang đa cấp, bộ đệm TLB, ngắt thiếu trang, không gian swap, chính sách thay thế trang (OPT, FIFO, LRU, Clock, Thrashing) và thực tế phần cứng.', primaryLocator: "ostep-v110: Chapters 13, 14, 15, 16, 18, 19, 20, 21, 22, 23 (Complete Virtual Memory Sequence); mit-xv6-2025: Chapter 3: Page Tables (RISC-V Sv39 3-level Page Table Architecture)" },
      { id: 'os-synchronization-deadlocks-kernel', title: 'Đồng bộ hóa trong nhân hệ điều hành và xử lý Bế tắc (Deadlock)', summary: 'Tương tác giữa ngắt phần cứng và khóa spinlock trong kernel, nguyên nhân và bốn điều kiện cần của deadlock (Coffman conditions), các chiến lược phòng ngừa, tránh né và phát hiện–khôi phục.', primaryLocator: "ostep-v110: Chapters 26 Threads, 28 Locks, 30 Condition Variables, 32 Concurrency Bugs; mit-xv6-2025: Chapters 6 Locking and 7 Scheduling" },
      { id: 'os-io-storage-filesystems', title: 'Thiết bị vào/ra, Hệ thống tệp (File Systems) và Tính nhất quán khi sự cố (Crash Consistency)', summary: 'Giao thức thiết bị, DMA, trình điều khiển (device drivers), tổ chức đĩa của hệ thống tệp (superblock, bitmap, inode, data blocks), bài toán mất điện giữa chừng và cơ chế Write-Ahead Logging / Journaling.', primaryLocator: "ostep-v110: Chapters 36 I/O Devices, 37 HDD, 38 RAID, 39 Files and Directories, 40 File System Implementation, 42 FSCK and Journaling, 44 SSD" },
    ],
    boundaries: [
      'Mỗi phần đều tách bạch rõ Cơ chế (Mechanism — làm thế nào phần cứng và OS thực hiện được thao tác) và Chính sách (Policy — thuật toán chọn phương án nào để tối ưu mục tiêu).',
      'Chương Bộ nhớ ảo (`os-virtual-memory`) trong môn này được biên soạn đầy đủ ở mức mẫu M2.',
    ],
    sources: [
      { sourceId: 'ostep-v110', locator: 'Chapters 4–10 (CPU Virtualization), Chapters 13–23 (Memory Virtualization), Chapters 36–43 (Persistence)', relationship: 'primary' },
      { sourceId: 'mit-xv6-2025', locator: 'Chapters 2–4, 6–8 (Page Tables, Traps, Scheduling, Locking, File System)', relationship: 'supplementary' },
    ],
  },
  {
    id: 'concurrency-parallelism',
    code: 'CS-26',
    title: 'Lập trình đồng thời và song song',
    blockId: 'block-4',
    level: 'core',
    overview: [
      'Môn học nghiên cứu các nguyên lý thiết kế, đồng bộ hóa và tối ưu hiệu năng khi nhiều luồng thực thi cùng chia sẻ tài nguyên hoặc phối hợp giải quyết một bài toán. Nội dung phân biệt rõ tính đồng thời (concurrency — cấu trúc điều phối nhiều tác vụ đan xen) với tính song song (parallelism — thực thi đồng thời trên nhiều đơn vị phần cứng), và phân biệt điều kiện tranh chấp logic (race condition) với tranh chấp dữ liệu ở mức bộ nhớ (data race). Tiếp theo là các nguyên thủy đồng bộ hóa (locks/mutexes, biến điều kiện — condition variables, semaphores, thao tác nguyên tử — atomics và rào cản bộ nhớ cơ bản), các mẫu đồng bộ kinh điển (Producer–Consumer với bộ đệm hữu hạn, Readers–Writers), cấu trúc dữ liệu an toàn luồng, phân rã bài toán song song (data parallelism, task parallelism, map-reduce/reduction), hiện tượng chia sẻ giả trên dòng cache (false sharing) và đo lường tăng tốc thực nghiệm.',
    ],
    prerequisites: [
      { courseId: 'operating-systems', type: 'required', reason: 'Cần hiểu mô hình luồng, chuyển ngữ cảnh, lập lịch và không gian địa chỉ chia sẻ.' },
      { courseId: 'computer-architecture', type: 'required', reason: 'Cần hiểu bộ nhớ đệm (cache lines), tính nhất quán cache cơ bản và Định luật Amdahl.' },
    ],
    plannedChapters: [
      { id: 'cp-threads-races-memory-model', title: 'Mô hình luồng chia sẻ bộ nhớ, Data Race, Race Condition và tính nguyên tử', summary: 'Không gian địa chỉ chung với các ngăn xếp luồng riêng, tính không đơn định của bộ lập lịch, phân biệt data race (hành vi không xác định trong C++/C11) với race condition mức nghiệp vụ và khái niệm miền găng (critical section).', primaryLocator: "ostep-v110: Chapters 26 Threads and 27 Thread API; cpp-draft-concurrency: [intro.races]; [atomics.order]" },
      { id: 'cp-locks-condition-variables-semaphores', title: 'Khóa (Locks), Biến điều kiện (Condition Variables) và Đèn hiệu (Semaphores)', summary: 'Đánh giá khóa theo tính loại trừ tương hỗ, tính công bằng và hiệu năng; hỗ trợ phần cứng (Test-and-Set, Compare-and-Swap); mẫu chờ có điều kiện bằng vòng lặp while (Mesa semantics) trên bài toán Producer–Consumer và dùng Semaphore.', primaryLocator: "ostep-v110: Chapters 28 Locks, 29 Locked Data Structures, 30 Condition Variables, 31 Semaphores" },
      { id: 'cp-concurrency-bugs-event-driven', title: 'Phân loại lỗi đồng thời, lập trình hướng sự kiện (Event-driven) và công cụ phát hiện lỗi', summary: 'Lỗi vi phạm tính nguyên tử, lỗi vi phạm thứ tự, deadlock và cách phòng tránh bằng thứ tự khóa toàn cục; đối chiếu đa luồng với vòng lặp sự kiện I/O không chặn (non-blocking event loop); kiểm chứng bằng ThreadSanitizer.', primaryLocator: "ostep-v110: Chapters 32 Concurrency Bugs and 33 Event-based Concurrency" },
      { id: 'cp-parallel-decomposition-performance', title: 'Phân rã thuật toán song song, Hiện tượng chia sẻ giả (False Sharing) và giới hạn tăng tốc', summary: 'Mô hình Work–Span (Work vs Critical Path Length), phép thu gọn song song (parallel reduction/prefix scan), cân bằng tải, xung đột dòng cache (false sharing) và phân tích hiệu năng thực nghiệm.', primaryLocator: "dive-into-systems: Chapter 14: shared memory programming, synchronization and performance; ostep-v110: Chapter 10: multi-CPU scheduling" },
    ],
    boundaries: [
      'Môn học tập trung vào mô hình bộ nhớ chia sẻ trên một máy đa nhân; khi chuyển sang nhiều máy độc lập nối qua mạng không tin cậy, mô hình lỗi thay đổi căn bản và được tách sang Môn 28 (Hệ phân tán).',
    ],
    sources: [
      { sourceId: 'ostep-v110', locator: 'Part II: Concurrency (Chapters 26–33)', relationship: 'primary' },
      { sourceId: 'dive-into-systems', locator: 'Chapter 14 (Shared Memory Parallelism with Pthreads) & Chapter 15 (OpenMP)', relationship: 'primary' },
    ],
  },
  {
    id: 'computer-networks',
    code: 'CS-27',
    title: 'Mạng máy tính',
    blockId: 'block-4',
    level: 'core',
    overview: [
      'Môn học nghiên cứu kiến trúc phân tầng và các giao thức cho phép các hệ thống máy tính truyền thông tin cậy qua môi trường vật lý không hoàn hảo và quy mô toàn cầu. Nội dung trình bày mô hình phân tầng (Application, Transport, Network, Link), nguyên lý đóng gói dữ liệu (encapsulation), phân giải tên miền (DNS), giao thức HTTP và nguyên lý lập trình mạng qua giao diện Socket (đặc biệt giải quyết bài toán đóng khung thông điệp — message framing trên luồng byte TCP). Ở tầng giao vận, môn học đi sâu vào cơ chế truyền tin cậy trên kênh có mất gói/lỗi bit (ACK, timeout, cửa sổ trượt Go-Back-N và Selective Repeat), quản lý kết nối TCP (bắt tay 3 bước, đóng kết nối 4 bước, trạng thái TIME_WAIT), điều khiển luồng và điều khiển tắc nghẽn (Slow Start, AIMD, Fast Retransmit/Recovery). Ở tầng mạng và liên kết, môn học bao quát định địa chỉ IPv4/IPv6, chia mạng con CIDR, NAT, thuật toán định tuyến (Distance Vector, Link State, BGP cơ sở), Ethernet, ARP và bảo mật kênh truyền TLS.',
    ],
    prerequisites: [
      { courseId: 'linux-system-programming', type: 'required', reason: 'Cần nắm mô tả tệp, vào/ra mức thấp và khái niệm tiến trình để hiểu lập trình socket và đọc/ghi từng phần trên luồng mạng.' },
      { courseId: 'graph-algorithms', type: 'required', reason: 'Cần thuật toán đường đi ngắn nhất (Dijkstra, Bellman–Ford) để hiểu định tuyến Link-State và Distance-Vector.' },
    ],
    plannedChapters: [
      { id: 'cn-layering-metrics-application-framing', title: 'Kiến trúc phân tầng, Độ trễ – Băng thông – Thông lượng, DNS/HTTP và Đóng khung luồng byte', summary: 'Bốn thành phần độ trễ gói tin (xử lý, hàng đợi, truyền dẫn, lan truyền), tích băng thông–độ trễ (BDP), cơ chế phân giải DNS phân cấp, HTTP và tại sao ứng dụng trên TCP bắt buộc phải tự định nghĩa ranh giới thông điệp (message framing).', primaryLocator: "dordal-intronetworks: Chapter 1; §7.1 Packet Delay; §10.1 DNS; §17.6 TCP simplex-talk; mdn-learn-web: HTTP messages — https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages" },
      { id: 'cn-transport-reliability-tcp', title: 'Tầng giao vận: UDP, Nguyên lý truyền tin cậy và Quản lý kết nối TCP', summary: 'Ghép kênh/tách kênh theo cổng (ports), cấu trúc UDP, phát hiện lỗi và truyền lại có bộ định thời, cửa sổ trượt (Sliding Window), bắt tay 3 bước của TCP, đóng kết nối 4 bước và điều khiển luồng theo cửa sổ nhận (rwnd).', primaryLocator: "dordal-intronetworks: Chapters 8 Abstract Sliding Windows, 16 UDP, 17 TCP Basics, 18 TCP Issues" },
      { id: 'cn-congestion-control', title: 'Điều khiển tắc nghẽn mạng (Congestion Control)', summary: 'Sự sụp đổ thông lượng khi tắc nghẽn, điều khiển phản hồi AIMD (tăng cộng tính, giảm nhân tính) hướng tới công bằng và hiệu quả, cửa sổ tắc nghẽn (cwnd), Slow Start, Congestion Avoidance, Fast Retransmit và tổng quan CUBIC/BBR.', primaryLocator: "dordal-intronetworks: Chapters 19 TCP Reno, 20 Dynamics, 21 Further Dynamics, 22 Newer TCP, 23 Queuing" },
      { id: 'cn-network-ip-cidr-routing', title: 'Tầng mạng: IPv4/IPv6, Chia mạng con CIDR, NAT và Thuật toán định tuyến', summary: 'Cấu trúc gói tin IP, phân mảnh, khớp tiền tố dài nhất (Longest Prefix Match) trong CIDR, cơ chế NAT/DHCP, ICMP, định tuyến nội miền (OSPF/Link-State, RIP/Distance-Vector) và định tuyến liên miền theo chính sách (BGP).', primaryLocator: "dordal-intronetworks: Chapters 9–15: IPv4, companion protocols, IPv6, routing and BGP" },
      { id: 'cn-link-layer-lan-tls', title: 'Tầng liên kết dữ liệu (Ethernet, ARP, Switching) và Bảo mật giao vận (TLS)', summary: 'Đóng khung tầng liên kết, phát hiện lỗi CRC, đa truy cập CSMA/CD và CSMA/CA (Wi-Fi), phân giải địa chỉ MAC bằng ARP, cầu nối tự học (self-learning switch) và thiết lập kênh mã hóa xác thực bằng TLS.', primaryLocator: "dordal-intronetworks: Chapters 2–4; §6.1 Encoding and Framing; §7.4 Error Detection; §§29.3–29.5" },
    ],
    boundaries: [
      'Làm rõ sự khác biệt cốt tử: UDP giữ ranh giới datagram nhưng không bảo đảm thứ tự/đến đích, còn TCP bảo đảm thứ tự luồng byte tin cậy nhưng tuyệt đối không giữ ranh giới các lệnh `send()`/`write()` riêng lẻ.',
    ],
    sources: [
      { sourceId: 'dordal-intronetworks', locator: 'Chapters 1–3, 7–14, 22, 29 (Layering, Ethernet, IPv4/CIDR, Routing, UDP, TCP, Congestion Control, DNS, Security)', relationship: 'primary' },
    ],
  },
  {
    id: 'distributed-systems',
    code: 'CS-28',
    title: 'Hệ phân tán',
    blockId: 'block-4',
    level: 'core',
    overview: [
      'Môn học nghiên cứu những thách thức nền tảng khi xây dựng một hệ thống hợp nhất từ nhiều nút máy tính độc lập giao tiếp qua mạng không đồng bộ: nơi các nút có thể sập độc lập (partial failure), gói tin có thể trễ, mất hoặc nhân bản, và không tồn tại đồng hồ vật lý chung hoàn hảo. Nội dung đi từ mô hình lỗi và mô hình mạng, đồng hồ logic Lamport và đồng hồ vector xác lập quan hệ xảy ra trước (happens-before), đến các mô hình nhất quán dữ liệu (Linearizability, Sequential Consistency, Eventual Consistency), định lý CAP dưới điều kiện phân mảnh mạng, nhân bản trạng thái (Primary–Backup, State Machine Replication), thuật toán đồng thuận chống lỗi sập nút (Raft), giao dịch phân tán và cam kết hai pha (Two-Phase Commit — 2PC), thiết kế thao tác lũy đẳng (idempotency) khi thử lại (retry), và phân vùng dữ liệu (sharding/consistent hashing).',
    ],
    prerequisites: [
      { courseId: 'operating-systems', type: 'required', reason: 'Cần hiểu lưu trữ bền vững, nhật ký chống sập nguồn (WAL) và quản lý tiến trình.' },
      { courseId: 'concurrency-parallelism', type: 'required', reason: 'Cần nắm vững thực thi đan xen, điều kiện tranh chấp và tính nguyên tử.' },
      { courseId: 'computer-networks', type: 'required', reason: 'Cần hiểu độ trễ mạng, mất gói, đóng kết nối và vì sao timeout không phân biệt được nút chết với mạng chậm.' },
    ],
    plannedChapters: [
      { id: 'dsys-failure-models-clocks-ordering', title: 'Mô hình lỗi cục bộ, Mạng không đồng bộ, Đồng hồ logic Lamport và Vector Clocks', summary: 'Lỗi dừng (crash-stop) vs lỗi khôi phục (crash-recovery) vs lỗi Byzantine, bất khả phân biệt giữa nút sập và phân mảnh mạng qua timeout, quan hệ happens-before và thiết lập thứ tự bộ phận/toàn phần của sự kiện.', primaryLocator: "lamport-time-clocks: Partial ordering; Logical clocks; mit-65840-raft: Ongaro & Ousterhout, Raft extended paper (2014), §2 Replicated state machines; §5.6 Timing and availability" },
      { id: 'dsys-replication-consistency-cap', title: 'Nhân bản dữ liệu, Các mô hình tính nhất quán và Định lý CAP', summary: 'Nhân bản Primary–Backup và Chain Replication, tính tuyến tính hóa (Linearizability) so với nhất quán tuần tự và nhất quán cuối cùng, điều kiện chính xác của định lý CAP khi có phân vùng mạng (Network Partition).', primaryLocator: "mit-65840-raft: Ongaro & Ousterhout, Raft extended paper (2014), §2 Replicated state machines; §8 Client interaction; gilbert-lynch-cap: §§2–3 CAP formulation and practical implications; amazon-dynamo-2007: §§4.3–4.6" },
      { id: 'dsys-consensus-raft', title: 'Đồng thuận phân tán và Thuật toán Raft', summary: 'Tại sao nhân bản máy trạng thái cần đồng thuận chống split-brain, phân rã bài toán đồng thuận trong Raft: bầu chọn Leader theo nhiệm kỳ (Term), nhân bản nhật ký (Log Replication), điều kiện an toàn bầu cử và thu gọn nhật ký (Snapshotting).', primaryLocator: "mit-65840-raft: Ongaro & Ousterhout, Raft extended paper (2014), §§2, 5.1–5.6, 6, 7 and 8; Figure 2" },
      { id: 'dsys-distributed-transactions-idempotency-sharding', title: 'Giao dịch phân tán (2PC), Lũy đẳng khi thử lại (Idempotency) và Phân mảnh dữ liệu (Sharding)', summary: 'Giao thức cam kết hai pha (2PC) và điểm nghẽn chặn khi điều phối viên gặp sự cố, tại sao mạng chỉ cung cấp at-least-once/at-most-once và cách đạt hiệu ứng tương đương một lần qua khóa lũy đẳng + khử trùng lặp có trạng thái, cùng băm nhất quán (Consistent Hashing).', primaryLocator: "mit-6824-2pc-2006: Lecture 13: Two-Phase Commit, pages 1–3; mit-65840-raft: Ongaro & Ousterhout, Raft extended paper (2014), §8 Client interaction; amazon-dynamo-2007: §4.2 Partitioning Algorithm; §4.3 Replication" },
    ],
    boundaries: [
      'Khẳng định rõ: không tồn tại giao thức truyền thông nào tự đạt "exactly-once delivery" thuần túy ở tầng mạng; hiệu ứng xử lý đúng một lần chỉ đạt được khi kết hợp truyền lại (at-least-once) với lưu trữ trạng thái khử trùng lặp hoặc thao tác lũy đẳng ở đầu nhận.',
    ],
    sources: [
      { sourceId: 'mit-65840-raft', locator: 'Raft Consensus Paper (§1–§8) and MIT 6.5840 Lecture Notes on Replication, Consistency, and 2PC', relationship: 'primary' },
    ],
  },
  {
    id: 'data-modeling-databases',
    code: 'CS-29',
    title: 'Mô hình dữ liệu và database',
    blockId: 'block-5',
    level: 'core',
    overview: [
      'Môn học nghiên cứu nền tảng toán học và kỹ thuật của mô hình cơ sở dữ liệu quan hệ — trụ cột lưu trữ có cấu trúc của các hệ thống thông tin. Nội dung đi từ mô hình thực thể–liên kết (ER), mô hình quan hệ, khóa chính/khóa ngoại và các ràng buộc toàn vẹn, đến đại số quan hệ (Relational Algebra — tập hợp) và ngôn ngữ truy vấn SQL (ngữ nghĩa túi — bag semantics, logic ba giá trị với `NULL`, phép kết nối joins, gom nhóm, truy vấn con và biểu thức bảng chung CTE). Tiếp theo là lý thuyết phụ thuộc hàm (functional dependencies), bao đóng thuộc tính, chuẩn hóa lược đồ (1NF, 2NF, 3NF, BCNF) gắn với tính bảo toàn thông tin (lossless-join) và bảo toàn phụ thuộc, nguyên lý sử dụng chỉ mục và đọc kế hoạch thực thi truy vấn, cùng giao dịch ACID, các mức cô lập và quy trình sao lưu/phục hồi.',
    ],
    prerequisites: [
      { courseId: 'discrete-math', type: 'required', reason: 'Cần lý thuyết tập hợp, quan hệ hai ngôi, tích Descartes và logic vị từ để hiểu đại số quan hệ và chuẩn hóa.' },
      { courseId: 'data-structures', type: 'required', reason: 'Cần nắm bảng băm và cây tìm kiếm để hiểu vai trò của chỉ mục.' },
    ],
    plannedChapters: [
      { id: 'dmd-relational-model-algebra', title: 'Mô hình quan hệ, Ràng buộc toàn vẹn và Đại số quan hệ', summary: 'Quan hệ, bộ (tuple), thuộc tính, miền giá trị, siêu khóa/khóa ứng viên/khóa chính/khóa ngoại, và sáu phép toán cơ sở của đại số quan hệ (chọn, chiếu, hợp, hiệu, tích Descartes, đổi tên) cùng các phép kết nối.', primaryLocator: 'UC Berkeley CS 186 Notes: Relational Algebra & PostgreSQL Docs Part I' },
      { id: 'dmd-sql-semantics-null-queries', title: 'Ngôn ngữ SQL, Ngữ nghĩa túi (Bag Semantics) và Logic ba giá trị của NULL', summary: 'Sự khác biệt giữa tập hợp và túi bản ghi, thứ tự đánh giá logic của câu lệnh SELECT–FROM–WHERE–GROUP BY–HAVING–ORDER BY, phép kết nối ngoài (outer joins), các bẫy logic với UNKNOWN/NULL và truy vấn đệ quy.', primaryLocator: 'PostgreSQL Docs Part II (The SQL Language, Ch. 4–9) & CS 186 SQL Notes' },
      { id: 'dmd-er-functional-dependencies-normalization', title: 'Thiết kế Thực thể–Liên kết (ER), Phụ thuộc hàm và Lý thuyết chuẩn hóa (3NF, BCNF)', summary: 'Chuyển đổi sơ đồ ER sang bảng quan hệ, dị thường cập nhật/thêm/xóa do dư thừa dữ liệu, tiên đề Armstrong, bao đóng thuộc tính, phân rã bảo toàn thông tin (lossless-join decomposition) và so sánh BCNF với 3NF.', primaryLocator: 'UC Berkeley CS 186 Notes: ER Diagrams & Functional Dependencies / Normalization' },
      { id: 'dmd-transactions-isolation-indexing-ops', title: 'Giao dịch ACID, Mức độ cô lập, Sử dụng chỉ mục và An toàn vận hành dữ liệu', summary: 'Ý nghĩa của Atomicity, Consistency, Isolation, Durability từ góc nhìn ứng dụng; các hiện tượng đọc bất thường (dirty, non-repeatable, phantom, write skew) và 4 mức cô lập SQL; đọc kế hoạch EXPLAIN, phân quyền và phân biệt sao lưu (backup) với khôi phục giao dịch.', primaryLocator: 'PostgreSQL Docs Ch. 11 (Indexes), Ch. 13 (Concurrency Control), Ch. 25 (Backup and Restore)' },
    ],
    boundaries: [
      'Phân biệt rõ: sao lưu định kỳ (backup/dump) bảo vệ trước thảm họa mất ổ đĩa hoặc xóa nhầm dữ liệu, nhưng không thay thế được cơ chế phục hồi giao dịch tức thời (transaction recovery/WAL) của hệ quản trị cơ sở dữ liệu.',
    ],
    sources: [
      { sourceId: 'postgresql-docs', locator: 'Part II (The SQL Language), Chapter 11 (Indexes), Chapter 13 (Concurrency Control), Chapter 25 (Backup and Restore)', relationship: 'primary' },
      { sourceId: 'ucb-cs186-notes', locator: 'SQL, Relational Algebra, ER Diagrams, and Functional Dependencies Notes', relationship: 'primary' },
    ],
  },
  {
    id: 'database-internals',
    code: 'CS-30',
    title: 'Bên trong hệ quản trị dữ liệu',
    blockId: 'block-5',
    level: 'core',
    overview: [
      'Môn học mở nắp hộp đen của một hệ quản trị cơ sở dữ liệu (DBMS) để phân tích cách dữ liệu được lưu trữ trên thiết bị khối, nạp vào bộ nhớ, tìm kiếm, kết nối, tối ưu hóa và bảo vệ trước truy cập đồng thời cũng như sự cố sập nguồn. Nội dung đi từ kiến trúc lưu trữ hướng trang (slotted pages, biểu diễn bản ghi cố định/biến đổi, heap files vs sequential files) và bộ quản lý vùng đệm (buffer pool manager: frame, pin count, dirty bit, chính sách thay thế LRU-K/Clock, và vì sao DBMS không giao phó hoàn toàn cho `mmap` của OS), đến cấu trúc chỉ mục B+Tree (bất biến cân bằng, tách/gộp nút, khóa chốt đồng thời — latch crabbing) và LSM-Tree cơ sở. Tiếp theo là thực thi truy vấn (mô hình Iterator/Volcano, sắp xếp ngoài — external merge sort, các thuật toán Nested Loop Join, Sort-Merge Join, Hash Join), bộ tối ưu hóa truy vấn dựa trên chi phí (System R / Selinger optimizer, thống kê histogram), điều khiển đồng thời (khóa hai pha nghiêm ngặt — Strict 2PL, phát hiện deadlock, và kiểm soát đồng thời đa phiên bản MVCC), cùng cơ chế nhật ký ghi trước (Write-Ahead Logging — WAL) và phục hồi sau sự cố theo chuẩn ARIES (Analysis, Redo, Undo).',
    ],
    prerequisites: [
      { courseId: 'data-modeling-databases', type: 'required', reason: 'Cần nắm vững mô hình quan hệ, đại số quan hệ, SQL và khái niệm giao dịch ACID.' },
      { courseId: 'operating-systems', type: 'required', reason: 'Cần hiểu bộ nhớ ảo, hệ thống tệp, đệm trang của hệ điều hành và đồng bộ hóa luồng.' },
      { courseId: 'data-structures', type: 'required', reason: 'Cần hiểu sâu cây tìm kiếm cân bằng và bảng băm.' },
    ],
    plannedChapters: [
      { id: 'dbi-storage-pages-buffer-pool', title: 'Kiến trúc lưu trữ trên đĩa, Bố cục trang (Slotted Pages) và Quản lý bộ đệm (Buffer Pool)', summary: 'Chi phí truy cập ngẫu nhiên vs tuần tự trên đĩa/SSD, cấu trúc trang có khe (header, slot array, tuple data), tổ chức tệp heap, quản lý khung trang trong RAM, pin/unpin và kiểm soát thứ tự ghi trang bẩn xuống đĩa.', primaryLocator: 'UC Berkeley CS 186 Notes: Disks, Buffers, Files & CMU 15-445 Lectures 3–5' },
      { id: 'dbi-bplustree-lsm-indexes', title: 'Cấu trúc chỉ mục B+Tree, Băm động và Cây LSM (Log-Structured Merge-Tree)', summary: 'Phân biệt B-Tree và B+Tree (nút nội chỉ giữ khóa định tuyến, nút lá chứa dữ liệu và nối liên kết đôi), thuật toán chèn/xóa chia tách/hợp nhất nút, đồng bộ hóa trên cây (latch crabbing) và đánh đổi đọc/ghi giữa B+Tree với LSM-Tree.', primaryLocator: 'UC Berkeley CS 186 Notes: B+ Trees & CMU 15-445 Lectures 6–8' },
      { id: 'dbi-Sorting-joins-query-execution', title: 'Sắp xếp ngoài (External Merge Sort), Các thuật toán Kết nối (Joins) và Mô hình thực thi truy vấn', summary: 'Sắp xếp dữ liệu lớn hơn RAM bằng K-way External Merge Sort, phân tích chi phí I/O của Block Nested Loop Join, Index Nested Loop Join, Sort-Merge Join và Grace Hash Join, cùng kiến trúc thực thi Iterator/Vectorized.', primaryLocator: 'UC Berkeley CS 186 Notes: Sorting, Iterators, and Joins & CMU 15-445 Lectures 9–12' },
      { id: 'dbi-query-optimization', title: 'Tối ưu hóa truy vấn dựa trên quy tắc và chi phí (Cost-Based Query Optimization)', summary: 'Biến đổi tương đương đại số quan hệ (đẩy phép chọn/chiếu xuống sâu), ước lượng hệ số chọn lọc (selectivity) bằng thống kê, và quy hoạch động Selinger tìm thứ tự kết nối bảng và phương thức truy cập tối ưu.', primaryLocator: 'UC Berkeley CS 186 Notes: Query Optimization & CMU 15-445 Lectures 13–14' },
      { id: 'dbi-concurrency-control-mvcc', title: 'Điều khiển đồng thời: Tính khả tuần tự (Serializability), Khóa hai pha (2PL) và Đa phiên bản (MVCC)', summary: 'Lịch thực thi tương đương xung đột (Conflict Serializability) và đồ thị phụ thuộc, giao thức Khóa hai pha nghiêm ngặt (Strict 2PL), khóa đa độ mịn (Intention Locks), và kiến trúc đa phiên bản MVCC/Snapshot Isolation.', primaryLocator: 'UC Berkeley CS 186 Notes: Concurrency Control & CMU 15-445 Lectures 15–18' },
      { id: 'dbi-wal-aries-recovery', title: 'Nhật ký ghi trước (Write-Ahead Logging) và Thuật toán phục hồi sự cố ARIES', summary: 'Chính sách STEAL/NO-FORCE, quy tắc WAL (bắt buộc đẩy bản ghi log có LSN xuống đĩa trước khi ghi đè trang dữ liệu hoặc xác nhận commit), bảng giao dịch/trang bẩn tại Checkpoint, và ba pha khôi phục Analysis–Redo–Undo cùng Compensation Log Records (CLR).', primaryLocator: 'UC Berkeley CS 186 Notes: Recovery (ARIES) & CMU 15-445 Lectures 19–20' },
    ],
    boundaries: [
      'Không coi việc viết câu lệnh SQL là đã hiểu hệ quản trị cơ sở dữ liệu; môn học tập trung vào cấu trúc dữ liệu trên đĩa, chi phí I/O và các bất biến đảm bảo ACID bên dưới tầng SQL.',
    ],
    sources: [
      { sourceId: 'ucb-cs186-notes', locator: 'Disks/Buffers, B+ Trees, Sorting, Joins, Query Optimization, Concurrency Control, and Recovery Notes', relationship: 'primary' },
      { sourceId: 'cmu-15445', locator: 'Lectures 3–20 (Storage, Buffer Pool, Trees, Execution, Optimization, Concurrency, Logging & Recovery)', relationship: 'primary' },
    ],
  },
  {
    id: 'software-engineering',
    code: 'CS-31',
    title: 'Kỹ nghệ phần mềm',
    blockId: 'block-5',
    level: 'core',
    overview: [
      'Môn học nghiên cứu sự chuyển dịch từ "lập trình" (viết mã để giải một bài toán tại một thời điểm) sang "kỹ nghệ phần mềm" (tích hợp thiết kế, quy trình và công cụ để duy trì và phát triển hệ thống qua thời gian và nhiều người). Nội dung bao gồm phân tích yêu cầu và mô hình hóa miền bài toán (domain modeling), thiết kế biên mô-đun, giao diện trừu tượng và quản lý độ phức tạp (information hiding, coupling vs cohesion, Định luật Hyrum), chiến lược kiểm thử đa tầng (unit, integration, system/end-to-end, kiểm thử bất biến và sử dụng test doubles có chừng mực), quy trình duyệt mã (code review) và tái cấu trúc an toàn (refactoring), quản lý phụ thuộc và phiên bản ngữ nghĩa (Semantic Versioning), tích hợp liên tục (CI) và làm việc nhóm.',
    ],
    prerequisites: [
      { courseId: 'object-oriented-programming', type: 'required', reason: 'Cần nắm vững thiết kế giao diện, đóng gói và quản lý phụ thuộc giữa các lớp/mô-đun.' },
      { courseId: 'program-design-debugging', type: 'required', reason: 'Cần nền tảng hợp đồng hàm, kiểm thử cơ bản và chẩn đoán lỗi.' },
      { courseId: 'git-dev-tools', type: 'required', reason: 'Cần nắm quy trình phân nhánh Git, giải quyết xung đột và hệ thống build.' },
    ],
    plannedChapters: [
      { id: 'se-requirements-domain-architecture', title: 'Phân tích yêu cầu, Mô hình hóa miền bài toán và Kiến trúc mô-đun', summary: 'Yêu cầu chức năng vs phi chức năng, ngôn ngữ chung của miền bài toán, ẩn giấu thông tin (Parnas), độ kết dính (cohesion) và độ ghép nối (coupling), Định luật Hyrum về hợp đồng ngầm của giao diện.', primaryLocator: 'SWE at Google Ch. 1, Ch. 8–10' },
      { id: 'se-testing-architecture-verification', title: 'Chiến lược kiểm thử đa tầng, Kiểm thử theo trạng thái và Thiết kế dễ kiểm thử', summary: 'Tháp kiểm thử (Small/Unit, Medium/Integration, Large/E2E), kiểm thử hành vi công khai thay vì chi tiết cài đặt nội bộ, khi nào nên dùng thực thi thật thay vì lạm dụng mock, và kiểm thử dựa trên tính chất (property-based testing).', primaryLocator: 'SWE at Google Ch. 11–14' },
      { id: 'se-code-review-refactoring-deprecation', title: 'Duyệt mã (Code Review), Tái cấu trúc (Refactoring) và Tiến hóa mã nguồn', summary: 'Tiêu chuẩn đánh giá một thay đổi nguyên tử (atomic change), bảo toàn hành vi khi tái cấu trúc, quản lý nợ kỹ thuật (technical debt) và quy trình loại bỏ tính năng cũ (deprecation).', primaryLocator: 'SWE at Google Ch. 9, Ch. 15–16' },
      { id: 'se-dependencies-ci-collaboration', title: 'Quản lý phụ thuộc (Dependency Management), Tích hợp liên tục (CI) và Vòng đời phát triển', summary: 'Hell phụ thuộc (diamond dependency conflict), Semantic Versioning, biên dịch tái lập (reproducible builds), đường ống kiểm tra tự động CI và ghi chép quyết định kiến trúc (ADR).', primaryLocator: 'SWE at Google Ch. 18, Ch. 21, Ch. 23' },
    ],
    boundaries: [
      'Các mẫu thiết kế (Design Patterns) chỉ được đưa vào như lời giải cho những bài toán kết dính cụ thể, tuyệt đối không bắt học thuộc lòng danh mục 23 mẫu GoF một cách giáo điều.',
    ],
    sources: [
      { sourceId: 'swe-at-google', locator: 'Chapters 1, 8–16, 18, 21, 23 (What is Software Engineering, Style/Review, Testing, Deprecation, Build Systems, Dependency Management, CI)', relationship: 'primary' },
    ],
  },
  {
    id: 'web-network-applications',
    code: 'CS-32',
    title: 'Web và ứng dụng qua mạng',
    blockId: 'block-5',
    level: 'core',
    overview: [
      'Môn học nghiên cứu kiến trúc toàn trình của các hệ thống ứng dụng phân tán trên nền tảng Web. Nội dung không chạy theo một framework ngắn hạn mà đi từ các chuẩn nền tảng: cấu trúc tài liệu ngữ nghĩa HTML, mô hình hộp và bố cục CSS, khả năng tiếp cận (accessibility tree, ARIA/keyboard navigation), cây đối tượng tài liệu (DOM), vòng lặp sự kiện (event loop) và lập trình bất đồng bộ trên trình duyệt. Ở phía giao thức và máy chủ, môn học phân tích sâu ngữ nghĩa HTTP (methods, headers, caching, status codes, lũy đẳng), thiết kế hợp đồng API (REST/JSON, xác thực đầu vào, phân trang, xử lý lỗi chuẩn hóa), quản lý phiên và trạng thái xác thực (cookies, tokens, CORS, Same-Origin Policy), kết nối an toàn với tầng cơ sở dữ liệu và triển khai ứng dụng.',
    ],
    prerequisites: [
      { courseId: 'computer-networks', type: 'required', reason: 'Cần hiểu DNS, TCP, TLS và cấu trúc thông điệp HTTP.' },
      { courseId: 'data-modeling-databases', type: 'required', reason: 'Cần nắm thiết kế lược đồ dữ liệu, truy vấn SQL và giao dịch khi xây dựng tầng lưu trữ của ứng dụng.' },
    ],
    plannedChapters: [
      { id: 'wna-document-semantics-layout-a11y', title: 'Ngữ nghĩa tài liệu HTML, Mô hình bố cục CSS và Cây khả năng tiếp cận (Accessibility)', summary: 'Cấu trúc DOM ngữ nghĩa, mô hình hộp (Box Model), bố cục Flexbox/Grid đáp ứng đa kích thước màn hình, quản lý tiêu điểm bàn phím (focus management) và tương phản hiển thị.', primaryLocator: 'MDN Learn Web Development: Core Modules (HTML & CSS) & W3C WAI Tutorials' },
      { id: 'wna-dom-event-loop-async-state', title: 'Cây DOM, Vòng lặp sự kiện (Event Loop) và Quản lý trạng thái giao diện bất đồng bộ', summary: 'Lan truyền sự kiện (capturing/bubbling), mô hình thực thi đơn luồng kết hợp hàng đợi tác vụ bất đồng bộ (Promises/async-await), đồng bộ hóa trạng thái dữ liệu với giao diện và xử lý các trạng thái tải/trống/lỗi.', primaryLocator: 'MDN Learn Web Development: JavaScript & Asynchronous JS' },
      { id: 'wna-http-api-contracts-backend', title: 'Ngữ nghĩa giao thức HTTP, Thiết kế hợp đồng API và Kiến trúc phía máy chủ (Backend)', summary: 'Tính an toàn và lũy đẳng của GET/PUT/DELETE so với POST, cơ chế đệm HTTP (ETag, Cache-Control), định tuyến yêu cầu, trung gian xử lý (middleware), kiểm chứng lược đồ đầu vào và kết nối cơ sở dữ liệu qua connection pool.', primaryLocator: 'MDN HTTP Guides & Server-side Website Programming' },
      { id: 'wna-sessions-auth-browser-security', title: 'Quản lý phiên, Xác thực và Mô hình bảo mật trình duyệt (Same-Origin Policy, CORS)', summary: 'Bản chất không trạng thái của HTTP và cơ chế duy trì phiên qua Cookie (HttpOnly, Secure, SameSite), chính sách cùng nguồn gốc (Same-Origin Policy), cơ chế chia sẻ tài nguyên liên nguồn (CORS) và quy trình đóng gói triển khai.', primaryLocator: 'MDN Web Security & HTTP Cookies' },
    ],
    boundaries: [
      'Đặt nền tảng chuẩn Web (HTML, DOM, HTTP, Web Security) lên trước; mọi thư viện giao diện hay backend framework chỉ được xem là tầng trừu tượng hóa phụ trợ trên nền các chuẩn này.',
    ],
    sources: [
      { sourceId: 'mdn-learn-web', locator: 'Structuring the Web (HTML), Styling (CSS), Dynamic Scripting (JS), Server-side Programming, and HTTP Documentation', relationship: 'primary' },
      { sourceId: 'w3c-wai-hci', locator: 'W3C Web Accessibility Tutorials (Page Structure, Menus, Forms, Carousels)', relationship: 'supplementary' },
    ],
  },
  {
    id: 'operations-performance-reliability',
    code: 'CS-33',
    title: 'Vận hành và hiệu năng',
    blockId: 'block-5',
    level: 'core',
    overview: [
      'Môn học nghiên cứu các nguyên lý đảm bảo một hệ thống phần mềm hoạt động ổn định, quan sát được và đạt mục tiêu hiệu năng dưới tải thực tế. Nội dung kết hợp góc nhìn hệ thống Linux với kỹ nghệ độ tin cậy (Site Reliability Engineering): quản lý vòng đời dịch vụ nền (daemons, systemd/process supervisors, graceful shutdown), cô lập tài nguyên bằng cơ chế nhân (namespaces, cgroups — bản chất của container), ba trụ cột khả năng quan sát (structured logging, metrics với phân vị độ trễ p50/p95/p99, distributed tracing), phương pháp đo đạc và định vị điểm nghẽn hiệu năng (profiling CPU/memory/I/O, biểu đồ Flame Graph), kiểm soát quá tải (rate limiting, load shedding, backpressure, circuit breaking, retry với exponential backoff và jitter) cùng thiết kế môi trường tái lập.',
    ],
    prerequisites: [
      { courseId: 'operating-systems', type: 'required', reason: 'Cần hiểu lập lịch CPU, bộ nhớ ảo, I/O đĩa và tiến trình để đọc đúng các chỉ số hiệu năng hệ thống.' },
      { courseId: 'computer-networks', type: 'required', reason: 'Cần hiểu độ trễ mạng, hàng đợi, kết nối TCP và cân bằng tải.' },
    ],
    plannedChapters: [
      { id: 'opr-services-containers-isolation', title: 'Vòng đời dịch vụ, Cô lập tài nguyên nhân (Namespaces, Cgroups) và Môi trường tái lập', summary: 'Quản lý tiến trình dịch vụ, xử lý tín hiệu dừng êm (SIGTERM graceful drain), bản chất của container trên Linux qua sự kết hợp chroot/namespaces/cgroups và đóng gói phụ thuộc tái lập.', primaryLocator: 'Google SRE Book Part II & Linux Containers Documentation' },
      { id: 'opr-observability-metrics-tracing', title: 'Khả năng quan sát (Observability): Nhật ký có cấu trúc, Chỉ số phân vị và Truy vết', summary: 'Tại sao trung bình cộng che giấu đuôi độ trễ (tail latency) và cần dùng phân vị p50/p95/p99, chỉ số SLI/SLO, bốn tín hiệu vàng (Latency, Traffic, Errors, Saturation) và truyền ngữ cảnh truy vết.', primaryLocator: 'Google SRE Book Ch. 4 (Service Level Objectives), Ch. 6 (Monitoring Distributed Systems), Ch. 10' },
      { id: 'opr-profiling-bottleneck-analysis', title: 'Phương pháp luận phân tích hiệu năng và Định vị điểm nghẽn (Profiling)', summary: 'Phương pháp USE (Utilization, Saturation, Errors) cho tài nguyên phần cứng, lấy mẫu ngăn xếp (sampling profilers), đọc biểu đồ Flame Graph và phân biệt nghẽn CPU, nghẽn bộ nhớ/cache với nghẽn chờ I/O hoặc khóa.', primaryLocator: 'MIT Missing Semester Lecture 7 (Profiling) & Dive Into Systems Ch. 11–12' },
      { id: 'opr-overload-backpressure-resilience', title: 'Quản lý quá tải, Áp lực ngược (Backpressure) và Phòng chống sụp đổ dây chuyền', summary: 'Định luật Little (L = lambda W), lý thuyết hàng đợi khi mức sử dụng tiến gần 100%, cơ chế truyền áp lực ngược, cắt tải chủ động (load shedding), và nguy cơ bão thử lại (retry storm) khi thiếu exponential backoff kèm jitter.', primaryLocator: 'Google SRE Book Ch. 21 (Handling Overload) & Ch. 22 (Addressing Cascading Failures)' },
    ],
    boundaries: [
      'Tập trung vào cơ chế hệ thống, mô hình hàng đợi và phương pháp đo kiểm; không yêu cầu thuê hạ tầng đám mây thương mại hay biến môn học thành khóa học cú pháp công cụ DevOps.',
    ],
    sources: [
      { sourceId: 'google-sre-book', locator: 'Chapters 4, 6, 10, 21, 22 (SLOs, Monitoring, Load Balancing, Handling Overload, Cascading Failures)', relationship: 'primary' },
      { sourceId: 'mit-missing-semester', locator: 'Lecture 7: Debugging and Profiling (CPU/Memory Profiling & FlameGraphs)', relationship: 'supplementary' },
    ],
  },
  {
    id: 'security-privacy',
    code: 'CS-34',
    title: 'Bảo mật và riêng tư',
    blockId: 'block-5',
    level: 'core',
    overview: [
      'Môn học xây dựng tư duy phòng thủ theo mô hình đe dọa (threat modeling): xác định tài sản cần bảo vệ, ranh giới tin cậy (trust boundaries), năng lực của đối thủ và bề mặt tấn công. Nội dung bao quát các nguyên thủy mật mã học ứng dụng và điều kiện an toàn của chúng (băm mật mã, muối và hàm dẫn xuất khóa mật khẩu Argon2/PBKDF2, mã hóa đối xứng xác thực AEAD, mật mã khóa công khai, chữ ký số và chuỗi chứng chỉ PKI/TLS), cơ chế xác thực (authentication) và kiểm soát truy cập (authorization, nguyên lý đặc quyền tối thiểu), các lỗ hổng mức bộ nhớ (buffer overflow, use-after-free), các lỗ hổng tiêm nhiễm do trộn lẫn dữ liệu với mã lệnh (SQL Injection, XSS, CSRF, SSRF), quản lý bí mật và chuỗi cung ứng phần mềm, cơ chế cô lập (sandboxing), cùng các nguyên lý bảo vệ quyền riêng tư dữ liệu.',
    ],
    prerequisites: [
      { courseId: 'cpp-memory-model', type: 'required', reason: 'Cần hiểu bố cục khung ngăn xếp, con trỏ và vùng nhớ Heap để hiểu cơ chế lỗ hổng bộ nhớ.' },
      { courseId: 'operating-systems', type: 'required', reason: 'Cần hiểu quyền tiến trình, không gian địa chỉ và cơ chế cô lập của hệ điều hành.' },
      { courseId: 'web-network-applications', type: 'required', reason: 'Cần hiểu HTTP, SQL, DOM, Cookie và Same-Origin Policy để phân tích bảo mật ứng dụng mạng.' },
    ],
    plannedChapters: [
      { id: 'sp-threat-modeling-trust-boundaries', title: 'Mô hình hóa đe dọa (Threat Modeling), Ranh giới tin cậy và Nguyên tắc thiết kế an toàn', summary: 'Phân tích tài sản, tác nhân đe dọa, bề mặt tấn công, các nguyên lý Saltzer & Schroeder (đặc quyền tối thiểu, phòng thủ chiều sâu, mặc định đóng, thiết kế mở không dựa vào che giấu).', primaryLocator: 'OWASP Threat Modeling Cheat Sheet & OSTEP Ch. 53' },
      { id: 'sp-applied-cryptography-auth', title: 'Nền tảng Mật mã học ứng dụng, Xác thực và Kiểm soát truy cập', summary: 'Phân biệt mã hóa (encryption), băm (hashing) và mã xác thực thông điệp (MAC); tại sao không bao giờ tự chế thuật toán mật mã hoặc lưu mật khẩu bằng băm nhanh không muối; AEAD, chữ ký số, TLS PKI, MFA và mô hình phân quyền RBAC/ABAC.', primaryLocator: 'OSTEP Ch. 54–57 & OWASP Authentication / Password Storage Cheat Sheets' },
      { id: 'sp-memory-injection-vulnerabilities', title: 'Lỗ hổng an toàn bộ nhớ và Lỗ hổng tiêm nhiễm (Injection) qua ranh giới ngôn ngữ', summary: 'Tràn bộ đệm ngăn xếp/heap và các cơ chế giảm thiểu (ASLR, Stack Canaries, NX bit); bản chất chung của SQL Injection, Command Injection và Cross-Site Scripting (XSS) là dữ liệu đầu vào bị diễn giải thành lệnh thực thi, và cách tách biệt triệt để bằng Parameterized Queries / Context-aware Encoding.', primaryLocator: 'OWASP Injection Prevention, XSS Prevention, and CSRF Prevention Cheat Sheets' },
      { id: 'sp-secrets-supply-chain-privacy', title: 'Quản lý bí mật, Chuỗi cung ứng phần mềm, Cô lập (Sandboxing) và Quyền riêng tư dữ liệu', summary: 'Quản lý khóa bí mật ngoài mã nguồn, kiểm tra phụ thuộc phần mềm, thu hẹp hậu quả khi bị xâm nhập bằng sandbox/container, giảm thiểu thu thập dữ liệu và rủi ro tái định danh (re-identification).', primaryLocator: 'OWASP Secrets Management & Privacy by Design Principles' },
    ],
    boundaries: [
      'Mọi kỹ thuật phân tích lỗ hổng chỉ được trình bày để hiểu cơ chế phòng thủ và chỉ được kiểm thử trên môi trường cục bộ hoặc hệ thống do chính người học sở hữu hợp pháp.',
      'Làm rõ rằng không một công cụ quét tự động hay thư viện đơn lẻ nào tự động bảo đảm hệ thống an toàn tuyệt đối nếu thiết kế ranh giới tin cậy bị sai.',
    ],
    sources: [
      { sourceId: 'owasp-cheatsheets', locator: 'Threat Modeling, Authentication, Password Storage, SQL Injection Prevention, XSS Prevention, and CSRF Cheat Sheets', relationship: 'primary' },
      { sourceId: 'ostep-v110', locator: 'Part IV: Security (Chapters 53–57: Intro Security, Authentication, Access Control, Cryptography)', relationship: 'primary' },
    ],
  },
];
