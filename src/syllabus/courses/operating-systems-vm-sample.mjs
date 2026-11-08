export const COURSE_OPERATING_SYSTEMS_SAMPLE = {
  id: 'operating-systems',
  code: 'CS-25',
  title: 'Hệ điều hành (Chương mẫu M2: Bộ nhớ ảo và Phân trang)',
  blockId: 'block-4',
  level: 'core',
  prerequisites: [
    {
      courseId: 'computer-architecture',
      type: 'required',
      reason: 'Cần hiểu thanh ghi, chế độ đặc quyền CPU (user/supervisor mode), bộ nhớ cache SRAM/DRAM và vai trò của phần cứng dịch địa chỉ (MMU/TLB).',
    },
    {
      courseId: 'linux-system-programming',
      type: 'required',
      reason: 'Cần hiểu giao diện tiến trình, lời gọi hệ thống (fork, exec, mmap) và bố cục không gian địa chỉ từ góc nhìn ứng dụng trước khi giải phẫu cơ chế bên trong kernel.',
    },
    {
      courseId: 'data-structures',
      type: 'required',
      reason: 'Cần nắm vững mảng, danh sách liên kết, cây nhiều nhánh (radix/page trees) và bảng băm để phân tích cấu trúc bảng trang và thuật toán thay thế trang.',
    },
  ],
  overview: [
    'Môn Hệ điều hành nghiên cứu cách phần mềm hệ thống biến đổi các tài nguyên vật lý thô sơ, hữu hạn của phần cứng (CPU, bộ nhớ DRAM, thiết bị lưu trữ khối) thành các trừu tượng hóa ảo hóa mạnh mẽ, an toàn và dễ sử dụng cho các chương trình ứng dụng. Thay vì mô tả hệ điều hành như một tập lệnh quản trị hệ thống, môn học mổ xẻ sự phối hợp chặt chẽ giữa cơ chế phần cứng (hardware mechanisms) và chính sách điều phối của nhân hệ điều hành (OS kernel policies) qua ba trụ cột: ảo hóa bộ xử lý, ảo hóa bộ nhớ và lưu trữ bền vững chịu lỗi.',
    'Trong khuôn khổ mốc kiểm định chất lượng M2, chương Hệ thống cốt lõi được biên soạn toàn văn dưới đây là Chương Bộ nhớ ảo và Phân trang (`os-virtual-memory`). Chương học giải thích trọn vẹn cách phần cứng MMU và hệ điều hành tạo ra ảo ảnh rằng mỗi tiến trình sở hữu một không gian địa chỉ riêng tư, liên tục và khổng lồ: đi từ bài toán cô lập bộ nhớ, dịch địa chỉ động bằng thanh ghi cơ sở/giới hạn và phân đoạn, sang cơ chế phân trang (paging), bài toán kích thước bảng trang và cấu trúc bảng trang đa cấp (như Sv39 trên RISC-V và 4-level paging trên x86-64), bộ đệm dịch địa chỉ TLB, cơ chế xử lý ngắt thiếu trang (page fault) kết hợp không gian hoán đổi (swap), các chính sách thay thế trang (OPT, FIFO, nghịch lý Belady, LRU, xấp xỉ Clock, Working Set / Thrashing) và các cơ chế tối ưu thực tế như Copy-on-Write (`fork`) cùng các giới hạn vật lý của phần cứng hiện đại.',
  ],
  boundaries: [
    'Luôn tách bạch rõ Cơ chế (Mechanism — phần cứng MMU/TLB và trình xử lý trap của OS thực hiện việc dịch địa chỉ hoặc bắt lỗi thiếu trang như thế nào) với Chính sách (Policy — hệ điều hành quyết định chọn trang nào để trục xuất khi bộ nhớ đầy).',
    'Làm rõ sự khác biệt giữa kiến trúc có TLB do phần cứng tự duyệt bảng trang (hardware-managed TLB như x86-64, RISC-V Sv39) với kiến trúc có TLB do phần mềm xử lý (software-managed TLB).',
    'Đây là chương mẫu hệ thống hoàn chỉnh cho cổng kiểm định M2; bốn chương còn lại của Môn CS-25 (Ảo hóa CPU, Lập lịch CPU, Đồng bộ hóa Kernel & Deadlock, Hệ thống tệp & Crash Consistency) đã được đặc tả trong COURSE-CATALOG.md và sẽ được mở rộng toàn văn ở chặng M4.',
  ],
  sources: [
    {
      sourceId: 'ostep-v110',
      locator: 'Part I — Virtualizing Memory: Chapters 13–23 (Address Spaces, Address Translation, Segmentation, Free-Space Management, Paging, TLBs, Advanced Page Tables, Swapping Mechanisms and Policies)',
      relationship: 'primary',
    },
    {
      sourceId: 'mit-xv6-2025',
      locator: 'Chapter 3: Page Tables (§3.1 Paging hardware Sv39, §3.2 Kernel address space, §3.3 Code: creating an address space) & Chapter 4 (§4.6 Page-fault exceptions)',
      relationship: 'primary',
    },
  ],
  chapters: [
    {
      id: 'os-virtual-memory',
      title: 'Chương 3 (Mẫu M2) — Bộ nhớ ảo và Phân trang (Virtual Memory & Paging)',
      overview: [
        'Chương này giải quyết một trong những câu hỏi nền tảng nhất của Hệ thống Máy tính: làm thế nào hàng chục tiến trình độc lập có thể cùng chia sẻ một bộ nhớ vật lý DRAM hữu hạn mà không thể đọc trộm hay ghi đè dữ liệu của nhau, đồng thời mỗi tiến trình lại nhìn thấy một không gian địa chỉ thống nhất bắt đầu từ địa chỉ cố định và có thể lớn hơn cả dung lượng RAM vật lý? Nội dung dẫn dắt tuần tự qua sáu tiểu mục từ trừu tượng hóa không gian địa chỉ, cơ chế phần cứng MMU và phân đoạn, cấu trúc phân trang và bảng trang cây đa cấp, bộ đệm tăng tốc TLB, quy trình xử lý lỗi thiếu trang và chính sách thay thế trang, đến Copy-on-Write và các giới hạn phần cứng thực tế.',
      ],
      sources: [
        {
          sourceId: 'ostep-v110',
          locator: 'Chapters 13, 14, 15, 16, 18, 19, 20, 21, 22, 23 (Complete Virtual Memory Sequence)',
          relationship: 'primary',
        },
        {
          sourceId: 'mit-xv6-2025',
          locator: 'Chapter 3: Page Tables (RISC-V Sv39 3-level Page Table Architecture)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'os-vm-address-space-abstraction',
          title: 'Trừu tượng hóa Không gian địa chỉ (Address Space) và ba mục tiêu cốt lõi của Bộ nhớ ảo',
          level: 'core',
          paragraphs: [
            'Trong các hệ thống sơ khai không có ảo hóa bộ nhớ, chương trình ứng dụng truy cập trực tiếp vào địa chỉ bộ nhớ vật lý (physical memory), khiến việc chạy đồng thời nhiều tiến trình vừa đòi hỏi trình liên kết phải biết trước vị trí RAM trống, vừa làm toàn bộ hệ thống dễ dàng sập hoặc lộ dữ liệu nếu một tiến trình dùng con trỏ lỗi ghi đè lên vùng nhớ của tiến trình khác hoặc của chính hệ điều hành. Để giải quyết triệt để vấn đề này, hệ điều hành phối hợp với phần cứng tạo ra trừu tượng hóa Không gian địa chỉ (Address Space): một khung nhìn bộ nhớ riêng tư, tuyến tính và có trật tự gồm vùng mã lệnh (Code/Text), vùng dữ liệu tĩnh, vùng nhớ tự do (Heap) mở rộng theo một chiều và ngăn xếp lời gọi (Stack) mở rộng theo chiều ngược lại.',
            'Mọi địa chỉ mà lập trình viên nhìn thấy khi in giá trị một con trỏ trong C/C++ hay trong trình gỡ lỗi GDB đều là *địa chỉ ảo* (virtual address), hoàn toàn không phải là địa chỉ vật lý trên thanh DRAM. Hệ thống bộ nhớ ảo được thiết kế để thỏa mãn đồng thời ba mục tiêu thiết kế: (1) *Tính trong suốt* (Transparency) — chương trình hoạt động như thể nó độc chiếm toàn bộ bộ nhớ mà không cần biết dữ liệu của mình đang được đặt rải rác ở những khung vật lý nào; (2) *Tính hiệu quả* (Efficiency) — cả về thời gian (quá trình dịch địa chỉ không làm chậm từng lệnh nạp/lưu nhờ hỗ trợ phần cứng như TLB) lẫn không gian (cấu trúc dữ liệu quản lý ánh xạ không chiếm quá nhiều RAM); và (3) *Tính bảo vệ và cô lập* (Protection & Isolation) — một tiến trình hoàn toàn không có khả năng tạo ra địa chỉ ảo ánh xạ trái phép sang vùng nhớ vật lý của tiến trình khác hay của nhân hệ điều hành.',
          ],
          sources: [
            {
              sourceId: 'ostep-v110',
              locator: 'Chapter 13: The Abstraction: Address Spaces (§13.1–13.4 The Address Space, Goals of Virtual Memory)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'os-vm-hardware-translation-segmentation',
          title: 'Dịch địa chỉ bằng phần cứng (MMU), Thanh ghi Cơ sở/Giới hạn (Base & Bounds) và Phân đoạn (Segmentation)',
          level: 'core',
          paragraphs: [
            'Để vừa đạt hiệu năng thực thi trực tiếp trên CPU vừa giữ quyền kiểm soát tuyệt đối của hệ điều hành, cơ chế Dịch địa chỉ dựa trên phần cứng (Hardware-based Address Translation) đặt một bộ phận chuyên dụng gọi là Đơn vị Quản lý Bộ nhớ (Memory Management Unit — MMU) ngay trên đường đi của mọi truy cập bộ nhớ từ CPU. Trong mô hình đơn giản nhất gọi là Định vị lại động bằng Thanh ghi Cơ sở và Giới hạn (Dynamic Relocation / Base and Bounds), mỗi khi tiến trình chạy, hệ điều hành nạp địa chỉ bắt đầu vật lý vào thanh ghi `Base` và kích thước không gian địa chỉ vào thanh ghi `Bounds` của MMU. Với mỗi địa chỉ ảo $v$, phần cứng kiểm tra song song điều kiện $0 \\le v < \\text{Bounds}$; nếu hợp lệ, MMU cộng trực tiếp $\\text{physical address} = v + \\text{Base}$ để gửi tới RAM, còn nếu vượt biên thì MMU lập tức phát sinh một ngắt ngoại lệ phần cứng (exception/trap) chuyển CPU về chế độ đặc quyền của kernel để chấm dứt tiến trình vi phạm.',
            'Mô hình một cặp thanh ghi Base/Bounds duy nhất buộc toàn bộ không gian địa chỉ phải nằm liên tiếp trong RAM, gây lãng phí bộ nhớ nghiêm trọng cho khoảng trống chưa dùng rất lớn nằm giữa vùng Heap và vùng Stack — hiện tượng này được gọi là *phân mảnh nội bộ* (internal fragmentation). Cơ chế Phân đoạn (Segmentation) cải tiến bằng cách cấp cho mỗi vùng logic (Code, Heap, Stack) một cặp thanh ghi Base và Bounds độc lập trong MMU, cho phép đặt từng đoạn ở các vị trí vật lý khác nhau và cho phép đánh dấu quyền bảo vệ riêng (như đoạn Code chỉ có quyền Đọc–Thực thi `R-X` để có thể chia sẻ chung một bản sao vật lý giữa nhiều tiến trình, còn Heap và Stack có quyền Đọc–Ghi `RW-`). Tuy nhiên, vì mỗi đoạn vẫn yêu cầu một vùng nhớ vật lý liên tiếp có kích thước khác nhau và biến đổi động khi `mmap`/`sbrk` mở rộng Heap, bộ nhớ vật lý nhanh chóng bị chia cắt thành hàng loạt khe trống nhỏ rời rạc không đủ lớn để cấp phát cho một đoạn mới — hiện tượng *phân mảnh ngoại vi* (external fragmentation), đòi hỏi các thuật toán quản lý vùng trống phức tạp hoặc phải dọn nén bộ nhớ cực kỳ tốn kém.',
          ],
          sources: [
            {
              sourceId: 'ostep-v110',
              locator: 'Chapter 15: Mechanism: Address Translation (Base and Bounds) & Chapter 16: Segmentation (Fine-grained vs Coarse-grained, Sharing, External Fragmentation)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'os-vm-paging-multilevel-tables',
          title: 'Cơ chế Phân trang (Paging), Cấu trúc mục bảng trang (PTE) và Bảng trang đa cấp (Multi-level Page Tables)',
          level: 'core',
          paragraphs: [
            'Để triệt tiêu hoàn toàn hiện tượng phân mảnh ngoại vi của phân đoạn, cơ chế Phân trang (Paging) chia cả không gian địa chỉ ảo lẫn bộ nhớ vật lý thành các khối có kích thước cố định bằng nhau (thường là $4\\text{ KiB} = 2^{12}$ byte): đơn vị trên không gian ảo gọi là *trang* (page), còn đơn vị trên RAM vật lý gọi là *khung trang* (page frame / physical frame). Khi đó, mỗi địa chỉ ảo $m$-bit được tách làm hai phần: $p$ bit cao tạo thành Số hiệu trang ảo (Virtual Page Number — VPN) dùng làm chỉ số tra cứu trong Bảng trang (Page Table) của tiến trình, và $d$ bit thấp ($2^d = \\text{kích thước trang}$, ví dụ $d = 12$ bit cho trang $4\\text{ KiB}$) là Độ dời trong trang (Offset) được giữ nguyên không đổi vì kích thước trang và khung trang bằng nhau. Mỗi mục trong bảng trang (Page Table Entry — PTE) lưu Số hiệu khung vật lý (Physical Frame Number — PFN) kèm các bit điều khiển phần cứng sống còn: bit `Valid` ($V$ — trang này có thuộc phần địa chỉ hợp lệ của tiến trình không), bit `Present` ($P$ — trang hiện đang nằm trong RAM hay đã bị đẩy ra đĩa), các bit quyền truy cập `R/W/X` (Read/Write/Execute), bit `User/Supervisor` ($U$ — ngăn tiến trình chế độ user truy cập trang của kernel), cùng bit `Accessed/Reference` ($A$) và `Dirty` ($D$ — trang đã bị ghi đè kể từ khi nạp vào RAM).',
            'Tuy nhiên, một bảng trang tuyến tính mảng phẳng (linear page table) gặp phải hai chi phí nghiêm trọng: làm chậm truy cập bộ nhớ (vì mỗi lệnh đọc/ghi phải đọc thêm PTE trong RAM) và tốn dung lượng khổng lồ (với địa chỉ 32-bit, trang $4\\text{ KiB}$ và mỗi PTE 4 byte, mỗi tiến trình cần một mảng liên tiếp $2^{20} \\times 4\\text{ B} = 4\\text{ MiB}$ dù chỉ dùng vài trang; với địa chỉ 64-bit hay 39/48-bit thì bảng phẳng là bất khả thi). Giải pháp chuẩn của phần cứng hiện đại là Bảng trang đa cấp dạng cây (Multi-level Page Tables, như cấu trúc 3 cấp Sv39 trên RISC-V của xv6 hoặc 4–5 cấp trên x86-64): phần VPN được chia thành các trường chỉ số $L_2, L_1, L_0$ (mỗi trường 9 bit tương ứng $2^9 = 512$ PTE kích thước 8 byte, vừa khít một trang $4\\text{ KiB}$). Thanh ghi gốc bảng trang của CPU (như `satp` trên RISC-V hoặc `CR3` trên x86-64) trỏ tới trang thư mục gốc; nếu toàn bộ một vùng $2\\text{ MiB}$ hoặc $1\\text{ GiB}$ của không gian địa chỉ không được sử dụng, mục PTE ở cấp cao chỉ cần đặt bit `Valid = 0` và hệ điều hành hoàn toàn không phải cấp phát các trang bảng trang cấp dưới cho nhánh đó, giúp dung lượng bảng trang chỉ tỷ lệ thuận với lượng bộ nhớ ảo thực sự đang sử dụng.',
          ],
          sources: [
            {
              sourceId: 'ostep-v110',
              locator: 'Chapter 18: Paging: Introduction (VPN, Offset, PTE Bits) & Chapter 20: Paging: Smaller Tables (Multi-level Page Tables)',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-xv6-2025',
              locator: 'Chapter 3: §3.1 Paging hardware (RISC-V Sv39 39-bit Virtual Addresses and 3-Level Page Table Tree)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'os-vm-tlb-locality',
          title: 'Bộ đệm dịch địa chỉ (TLB), tính cục bộ không gian/thời gian và quản lý TLB khi chuyển ngữ cảnh',
          level: 'core',
          paragraphs: [
            'Mặc dù bảng trang đa cấp giải quyết triệt để bài toán dung lượng bộ nhớ cho bảng trang, bản thân việc duyệt cây bảng trang $k$ cấp (page table walk) lại đòi hỏi $k$ lần đọc bộ nhớ vật lý chỉ để lấy được địa chỉ PFN trước khi thực hiện lần truy cập thứ $k+1$ tới dữ liệu thật — làm tốc độ chương trình chậm đi nhiều lần. Để khôi phục tốc độ gần như truy cập trực tiếp, MMU tích hợp một bộ nhớ đệm phần cứng kết hợp đầy đủ hoặc kết hợp tập hợp (set-associative hardware cache) cực nhanh gọi là Bộ đệm Dịch Địa chỉ (Translation Lookaside Buffer — TLB), lưu trữ các cặp ánh xạ $\\text{VPN} \\to (\\text{PFN}, \\text{các bit quyền})$ vừa được sử dụng gần nhất. Với mỗi địa chỉ ảo, MMU tra cứu VPN trong TLB trước tiên: nếu trúng bộ đệm (TLB hit, tốn chưa đầy 1 chu kỳ xung nhịp), PFN được xuất ra ngay lập tức mà không cần chạm vào bảng trang trong RAM; chỉ khi trượt bộ đệm (TLB miss), phần cứng (trên x86-64/RISC-V) hoặc trình xử lý ngoại lệ phần mềm mới duyệt bảng trang để nạp ánh xạ mới vào TLB.',
            'Hiệu quả của TLB phụ thuộc hoàn toàn vào hai nguyên lý cục bộ của chương trình: *tính cục bộ không gian* (spatial locality — khi chương trình đọc `a[0]`, các phần tử kế tiếp `a[1], a[2]...` nằm chung trên cùng một trang $4\\text{ KiB}$ nên đều gây TLB hit sau một lần miss duy nhất) và *tính cục bộ thời gian* (temporal locality — các biến và lệnh trong vòng lặp được truy cập lặp lại liên tục trong thời gian ngắn); ngược lại, nếu một chương trình nhảy ngẫu nhiên qua số trang lớn hơn số mục của TLB (TLB reach), tỷ lệ hit sụt giảm mạnh gây hiện tượng nghẽn TLB. Ngoài ra, vì các ánh xạ $\\text{VPN} \\to \\text{PFN}$ trong TLB chỉ đúng cho tiến trình hiện hành, mỗi khi hệ điều hành chuyển ngữ cảnh (context switch) sang tiến trình khác có bảng trang mới, phần cứng/OS hoặc phải xả bỏ toàn bộ các mục TLB không toàn cục (TLB flush — gây chi phí cold-start misses cho tiến trình mới), hoặc gắn thêm trường Định danh Không gian Địa chỉ (Address Space Identifier — ASID / PCID) vào mỗi mục TLB để nhiều tiến trình cùng tồn tại an toàn trong TLB mà không cần xóa trắng khi chuyển ngữ cảnh.',
          ],
          sources: [
            {
              sourceId: 'ostep-v110',
              locator: 'Chapter 19: Paging: Faster Translations (TLBs — Algorithm, Locality, Context Switches, ASIDs)',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-xv6-2025',
              locator: 'Chapter 3: §3.1 Paging hardware (TLB and sfence.vma instruction)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'os-vm-page-faults-replacement',
          title: 'Ngắt thiếu trang (Page Fault), Không gian hoán đổi (Swap) và Chính sách thay thế trang (OPT, FIFO, LRU, Clock, Thrashing)',
          level: 'core',
          paragraphs: [
            'Để hỗ trợ không gian địa chỉ lớn hơn dung lượng DRAM vật lý, hệ điều hành sử dụng một phân vùng trên thiết bị lưu trữ bền vững (SSD/HDD) làm không gian hoán đổi (swap space) để cất giữ các trang hiện chưa hoạt động. Khi CPU truy cập một địa chỉ ảo mà PTE tương ứng có bit `Present = 0` (hoặc chưa được cấp phát khung vật lý), MMU không thể tự hoàn tất việc dịch địa chỉ mà phát sinh một ngắt ngoại lệ đồng bộ gọi là *Lỗi thiếu trang* (Page Fault). Trình xử lý lỗi thiếu trang (page-fault handler) của nhân hệ điều hành được kích hoạt sẽ phân biệt ba trường hợp: (1) địa chỉ không hợp lệ (con trỏ null hoặc vượt ngoài các vùng nhớ đã đăng ký — gửi tín hiệu `SIGSEGV` chấm dứt tiến trình); (2) cấp phát lười (demand zeroing / lazy allocation — cấp một khung RAM mới xóa trắng về 0 rồi cập nhật PTE); hoặc (3) thiếu trang lớn (major page fault — trang đang nằm trên đĩa swap): hệ điều hành chọn một khung trang vật lý, phát lệnh I/O đọc trang từ đĩa vào RAM, phong tỏa tiến trình hiện tại để nhường CPU cho tiến trình khác chạy trong lúc chờ đĩa, và sau khi ngắt hoàn tất I/O báo về thì cập nhật PTE (`Present = 1`, `PFN` mới) rồi cho tiến trình thực thi lại chính câu lệnh vừa gây lỗi.',
            'Khi bộ nhớ RAM đã cạn khung trống, trình nền thu hồi trang (swap daemon / page daemon) phải áp dụng một Chính sách thay thế trang (Page Replacement Policy) để chọn trang trục xuất nhằm cực tiểu hóa số lần đọc đĩa tốn kém (tối ưu Thời gian truy cập bộ nhớ hiệu dụng $\\text{AMAT} = T_M + (1 - h) \\cdot T_D$, nơi $T_D$ lớn hơn $T_M$ hàng chục nghìn lần). Chính sách Tối ưu của Belady (OPT / MIN — trục xuất trang sẽ được truy cập lại muộn nhất trong tương lai) đạt tỷ lệ miss thấp nhất nhưng chỉ dùng làm mốc lý thuyết vì đòi hỏi biết trước tương lai. Chính sách Vào trước – Ra trước (FIFO) bỏ qua tần suất sử dụng và mắc phải *Nghịch lý Belady* (Belady’s Anomaly): tăng thêm số khung RAM vật lý đôi khi lại làm tăng số lỗi thiếu trang trên cùng một chuỗi tham chiếu. Chính sách Ít dùng gần đây nhất (Least Recently Used — LRU) khai thác tính cục bộ thời gian và thỏa mãn tính chất ngăn xếp (stack property, không bị nghịch lý Belady), nhưng duy trì thứ tự LRU chính xác trên mỗi lệnh đọc/ghi RAM là quá đắt đỏ; vì vậy các hệ điều hành thực tế dùng thuật toán Kim đồng hồ (Clock / Second-Chance) quét vòng qua bit `Reference` ($A$) do phần cứng tự bật và ưu tiên giữ lại các trang sạch (`Dirty = 0`) để tránh chi phí ghi ngược ra đĩa. Khi tổng Tập làm việc (Working Set) của các tiến trình đang chạy vượt quá số khung RAM vật lý, hệ thống rơi vào trạng thái *trì trệ hoán đổi* (Thrashing): CPU dành toàn bộ thời gian chờ đọc/ghi trang ra vào đĩa mà không tiến triển được công việc thực tế, đòi hỏi cơ chế kiểm soát tải (admission control / working-set tracking) hoặc kích hoạt bộ xử lý hết bộ nhớ (OOM killer).',
          ],
          sources: [
            {
              sourceId: 'ostep-v110',
              locator: 'Chapter 21: Beyond Physical Memory: Mechanisms (Swap Space, Present Bit, Page Fault Control Flow) & Chapter 22: Beyond Physical Memory: Policies (OPT, FIFO, Belady’s Anomaly, LRU, Clock Algorithm, Dirty Pages, Thrashing)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'os-vm-limits-hardware-realities',
          title: 'Cơ chế Sao chép khi ghi (Copy-on-Write), Ánh xạ tệp (mmap) và Giới hạn phần cứng thực tế',
          level: 'core',
          paragraphs: [
            'Nhờ sự tách biệt giữa trang ảo và khung vật lý cùng các bit quyền trên PTE, hệ điều hành có thể triển khai những tối ưu hóa hệ thống rất mạnh mẽ mà không cần sao chép dữ liệu thừa. Điển hình nhất là cơ chế Sao chép khi ghi (Copy-on-Write — COW) trong lời gọi hệ thống `fork()`: thay vì sao chép toàn bộ các khung trang vật lý của tiến trình cha sang tiến trình con (mà phần lớn sẽ bị vứt bỏ ngay nếu tiến trình con gọi `exec()`), kernel chỉ sao chép cấu trúc bảng trang cho tiến trình con trỏ tới chính các khung vật lý của cha, đồng thời hạ quyền ghi trên PTE của cả hai tiến trình xuống Chỉ-đọc (`Read-Only`) và tăng biến đếm tham chiếu của khung trang. Chừng nào cả hai tiến trình chỉ đọc dữ liệu, không có byte dữ liệu nào bị sao chép; ngay khi một trong hai tiến trình thực hiện lệnh ghi, MMU sẽ phát sinh ngắt lỗi bảo vệ trang (page-protection fault), trình xử lý của kernel lúc này mới cấp phát một khung vật lý mới, sao chép nội dung trang $4\\text{ KiB}$ đó sang khung mới, bật lại quyền Ghi (`RW`) và giảm biến đếm tham chiếu của khung cũ. Tương tự, lời gọi `mmap()` cho phép ánh xạ trực tiếp các khối của tệp trên đĩa vào không gian địa chỉ ảo thông qua bộ đệm trang thống nhất (unified page cache), nạp dữ liệu theo yêu cầu (demand paging) khi tiến trình chạm tới từng trang.',
            'Cuối cùng, hiểu đúng bộ nhớ ảo đòi hỏi nhận thức rõ các giới hạn phần cứng và mặt trái về bảo mật trong các hệ thống thương mại. Thứ nhất, trên các ứng dụng cơ sở dữ liệu hoặc học máy sử dụng hàng trăm gigabyte RAM, trang nhỏ $4\\text{ KiB}$ khiến số lượng trang lên tới hàng chục triệu, làm tràn TLB và biến chi phí duyệt bảng trang 4–5 cấp thành điểm nghẽn lớn; phần cứng hiện đại khắc phục bằng Trang khổng lồ (Huge Pages / Superpages kích thước $2\\text{ MiB}$ hoặc $1\\text{ GiB}$ bằng cách dừng sớm ở PTE cấp trung gian), đổi lại nguy cơ tăng phân mảnh nội bộ. Thứ hai, các bộ xử lý thực thi suy đoán (speculative execution) có thể để lộ dấu vết vi kiến trúc qua bộ nhớ cache khi truy cập thử vào vùng nhớ kernel được ánh xạ chung trong bảng trang người dùng (lỗ hổng Meltdown), buộc các hệ điều hành hiện đại phải áp dụng Cô lập Bảng trang Nhân (Kernel Page-Table Isolation — KPTI), tách bảng trang chế độ user và chế độ kernel làm tăng chi phí chuyển đổi qua lại tại mỗi lời gọi hệ thống.',
          ],
          sources: [
            {
              sourceId: 'ostep-v110',
              locator: 'Chapter 23: Complete Virtual Memory Systems (VAX/VMS, Linux Virtual Memory, Copy-on-Write, Superpages/Huge Pages, KPTI and Meltdown)',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-xv6-2025',
              locator: 'Chapter 4: §4.6 Page-fault exceptions (Copy-on-write fork, Lazy allocation, Demand paging)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
  ],
};
