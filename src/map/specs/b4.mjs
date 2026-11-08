// Khối IV — Hệ thống máy tính
export const B4 = [
  // ── Logic số và tổ chức máy tính
  { id: 'n-so-nhi-phan-ieee', t: 'Số nguyên bù hai, dấu chấm động và ký tự', c: 'digital-logic-computer-organization', cov: ['dlco-binary-numbers-ieee754'],
    p: [
      'Cùng một dãy bit mang nghĩa khác nhau tùy độ rộng và quy ước diễn giải. Số nguyên có dấu dùng bù hai, trong đó phép cộng là một mạch duy nhất cho cả số có dấu và không dấu; mở rộng dấu giữ nguyên giá trị khi tăng độ rộng, và tràn xảy ra khi kết quả vượt miền biểu diễn.',
      'Chuẩn IEEE 754 biểu diễn số thực bằng dấu, mũ và phần định trị nên chỉ xấp xỉ, có giá trị đặc biệt (vô cùng, NaN) và sai số làm tròn; văn bản lưu bằng bảng mã như Unicode với UTF-8 độ dài biến thiên.',
    ] },
  { id: 'n-mach-to-hop-alu', t: 'Đại số Boolean, mạch tổ hợp và ALU', c: 'digital-logic-computer-organization', cov: ['dlco-boolean-combinational-alu'],
    p: [
      'Cổng logic cài đặt các phép Boolean; bảng chân trị và biểu thức tương đương cho thấy một chức năng có nhiều cách cài đặt. Mạch tổ hợp có đầu ra chỉ phụ thuộc đầu vào hiện tại; Mux chọn một trong nhiều đường, DMux phân phối một đường tới nhiều nơi, và bus mang nhiều bit song song.',
      'Mạch cộng nối thành khối số học–logic (ALU) với đầu vào điều khiển chọn phép toán và cờ trạng thái báo kết quả bằng 0, âm hay tràn.',
    ] },
  { id: 'n-mach-tuan-tu-ram', t: 'Xung nhịp, thanh ghi và bộ nhớ RAM', c: 'digital-logic-computer-organization', cov: ['dlco-sequential-registers-ram'],
    p: [
      'Mạch tuần tự có trạng thái: đầu ra phụ thuộc cả trạng thái hiện tại, và xung nhịp đồng bộ việc chuyển sang trạng thái kế tiếp, với ràng buộc về thời gian lan truyền tín hiệu. Thanh ghi có tín hiệu nạp giữ giá trị qua nhiều chu kỳ, và bộ đếm chương trình là thanh ghi tăng dần hoặc nhảy.',
      'Bộ nhớ có địa chỉ ghép nhiều thanh ghi với bộ chọn theo địa chỉ; mô hình RAM coi truy cập mất đồng đều thời gian, lý tưởng hóa so với phần cứng thật.',
    ] },
  { id: 'n-cpu-chu-trinh-lenh', t: 'Datapath, điều khiển và chu trình lệnh CPU', c: 'digital-logic-computer-organization', cov: ['dlco-datapath-control-cpu-cycle'],
    p: [
      'Lệnh máy là một số nhị phân; bộ giải mã chuyển các trường của nó thành tín hiệu điều khiển cho datapath (đường đi dữ liệu). Mỗi chu trình CPU lấy lệnh, giải mã, thực hiện và ghi kết quả, còn lệnh nhảy thay đổi bộ đếm chương trình.',
      'Bản đồ địa chỉ cho biết vùng nào ứng với bộ nhớ hay thiết bị; ghép ALU, thanh ghi, bộ nhớ và điều khiển thành một máy tính hoàn chỉnh cho thấy phần mềm chạy được trên phần cứng như thế nào.',
    ] },

  // ── Kiến trúc máy tính
  { id: 'n-isa-riscv', t: 'ISA RISC-V và quy ước gọi hàm', c: 'computer-architecture', cov: ['ca-isa-riscv-calling-convention'],
    p: [
      'ISA là hợp đồng giữa phần cứng và phần mềm: trạng thái kiến trúc (thanh ghi, bộ đếm chương trình, bộ nhớ) và cách mã hóa lệnh. RISC-V dùng định dạng lệnh đều, truy cập bộ nhớ chỉ qua load/store, và điều khiển luồng bằng lệnh rẽ nhánh và nhảy.',
      'ABI quy định thanh ghi nào do bên gọi hay bên được gọi bảo toàn và bố cục stack frame, để mã biên dịch riêng gọi được nhau; sai quy ước phá hỏng giá trị im lặng.',
    ] },
  { id: 'n-pipeline', t: 'Pipeline và các loại xung đột', c: 'computer-architecture', cov: ['ca-pipelining-hazards'],
    p: [
      'Chia lệnh thành các tầng chạy gối nhau tăng thông lượng nhưng không giảm độ trễ của từng lệnh, và chi phí thanh ghi giữa tầng cùng tầng chậm nhất giới hạn lợi ích. Xung đột dữ liệu xảy ra khi lệnh cần kết quả chưa có và được xử lý bằng forwarding hoặc stall; xung đột cấu trúc là tranh chấp tài nguyên.',
      'Xung đột điều khiển do nhánh được giảm bằng dự đoán nhánh, và suy đoán sai buộc phải xả lệnh nhưng vẫn giữ trạng thái kiến trúc đúng.',
    ] },
  { id: 'n-cache', t: 'Phân cấp bộ nhớ và cache', c: 'computer-architecture', cov: ['ca-memory-hierarchy-caches'],
    p: [
      'Tính cục bộ theo thời gian và không gian cho phép bộ nhớ nhỏ nhanh chứa phần hay dùng. Địa chỉ được tách thành offset, index và tag; cache ánh xạ trực tiếp, kết hợp tập hay kết hợp đầy đủ, chính sách thay thế và chính sách ghi (write-through, write-back) quyết định hành vi và loại miss (bắt buộc, dung lượng, xung đột).',
      'AMAT (thời gian truy cập trung bình) kết hợp thời gian trúng, tỉ lệ trượt và phạt trượt; nó chỉ hợp lệ khi các giả định về mẫu truy cập được nêu rõ, và bố cục dữ liệu trong mã nguồn thay đổi hiệu năng đáng kể.',
    ] },
  { id: 'n-vm-io-song-song', t: 'MMU, I/O, ngắt và song song phần cứng', c: 'computer-architecture', cov: ['ca-hardware-vm-io-parallelism'],
    p: [
      'MMU dịch địa chỉ ảo sang vật lý bằng bảng trang, TLB lưu các dịch gần đây, và đặc quyền ngăn chương trình người dùng truy cập vùng của hệ điều hành. Với thiết bị, polling hỏi liên tục, ngắt báo khi có sự kiện, và DMA chuyển khối dữ liệu mà không tốn CPU.',
      'Thời gian CPU bằng số lệnh nhân CPI nhân chu kỳ đồng hồ; đa lõi tăng thông lượng nhưng tăng tốc bị giới hạn bởi phần tuần tự theo định luật Amdahl.',
    ] },

  // ── Lập trình hệ thống Linux
  { id: 'n-c-lien-ket-elf', t: 'C cầu nối, liên kết và ELF', c: 'linux-system-programming', cov: ['lsp-c-bridge-linking-elf'],
    p: [
      'Trong C, vùng đệm là mảng không có kiểm tra biên nên hợp đồng kích thước thuộc về người viết, và vòng đời của vùng nhớ do người dùng quản lý. Quá trình dịch tạo object file với bảng symbol, liên kết ghép chúng thành tệp ELF thực thi, và bộ nạp đưa vào bộ nhớ.',
      'API hệ thống báo lỗi bằng giá trị trả về cùng biến errno, và cần phân biệt ranh giới thư viện với kernel để biết lỗi do tầng nào.',
    ] },
  { id: 'n-syscall-tien-trinh', t: 'Lời gọi hệ thống, tiến trình và tín hiệu', c: 'linux-system-programming', cov: ['lsp-syscalls-processes-signals'],
    p: [
      'Lời gọi hệ thống chuyển từ chế độ người dùng sang kernel để dùng dịch vụ có đặc quyền. fork tạo tiến trình con bản sao, exec thay chương trình đang chạy, wait thu hồi con để tránh tiến trình zombie; tổ hợp này là nền của shell.',
      'Tín hiệu là thông báo bất đồng bộ làm gián đoạn chương trình; handler chỉ nên làm việc an toàn trong ngữ cảnh gián đoạn, và các lời gọi hệ thống có thể bị ngắt cần xử lý lại.',
    ] },
  { id: 'n-descriptor-pipe', t: 'File descriptor, I/O và đường ống', c: 'linux-system-programming', cov: ['lsp-descriptors-io-pipes'],
    p: [
      'File descriptor là chỉ số tới một đối tượng mở trong kernel, có thể dùng chung giữa các tiến trình; buffer của thư viện tách khỏi buffer của kernel. Đọc và ghi có thể chỉ hoàn thành một phần, nên phải lặp đến khi xong, và EOF khác lỗi; chế độ không chặn trả về ngay nếu chưa có dữ liệu.',
      'Pipe nối đầu ra tiến trình này với đầu vào tiến trình kia, dup2 chuyển hướng descriptor; phải đóng đúng các đầu thừa thì mới nhận được EOF.',
    ] },
  { id: 'n-tep-quyen-ipc', t: 'Inode, quyền truy cập và giao tiếp liên tiến trình', c: 'linux-system-programming', cov: ['lsp-filesystem-permissions-ipc'],
    p: [
      'Tên tệp là liên kết tới inode, vì thế một tệp có thể có nhiều tên và xóa tên không nhất thiết xóa dữ liệu. Quyền rwx áp cho chủ, nhóm và người khác; nguyên tắc quyền tối thiểu chỉ cấp đúng thứ cần.',
      'Giao tiếp liên tiến trình chọn giữa pipe (luồng một chiều giữa tiến trình liên quan), socket (hai chiều, qua mạng được) và bộ nhớ chia sẻ (nhanh nhất nhưng cần tự đồng bộ).',
    ] },

  // ── Hệ điều hành
  { id: 'n-ao-hoa-cpu', t: 'Ảo hóa CPU: tiến trình, trap và chuyển ngữ cảnh', c: 'operating-systems', cov: ['os-cpu-virtualization-mechanisms'],
    p: [
      'Hệ điều hành tạo ảo giác mỗi tiến trình có CPU riêng; tiến trình có trạng thái (sẵn sàng, chạy, chặn) lưu trong khối điều khiển PCB. Thực thi trực tiếp có giới hạn cho chương trình chạy thẳng trên CPU nhưng thoát về kernel qua trap, và ngắt đồng hồ bảo đảm hệ điều hành lấy lại quyền điều khiển.',
      'Chuyển ngữ cảnh lưu và khôi phục trạng thái thanh ghi giữa các tiến trình; cần phân biệt cơ chế (làm thế nào) với chính sách (chọn ai chạy).',
    ] },
  { id: 'n-lap-lich-cpu', t: 'Chính sách lập lịch CPU', c: 'operating-systems', cov: ['os-cpu-scheduling-policies'],
    p: [
      'Chính sách lập lịch tối ưu các chỉ số khác nhau: thời gian quay vòng, thời gian phản hồi, công bằng. FIFO đơn giản nhưng có hiệu ứng đoàn xe, SJF/STCF tối ưu thời gian quay vòng nhưng cần biết độ dài công việc trước.',
      'Round-robin cải thiện phản hồi bằng lát thời gian, hàng đợi phản hồi nhiều mức học hành vi công việc, chia phần theo tỉ lệ (lottery, stride) cấp CPU theo trọng số, và đa lõi thêm vấn đề cân bằng tải và ái lực bộ nhớ đệm.',
    ] },
  { id: 'n-bo-nho-ao-dich-dia-chi', t: 'Không gian địa chỉ và dịch địa chỉ', c: 'operating-systems', cov: ['os-vm-address-space-abstraction', 'os-vm-hardware-translation-segmentation'],
    p: [
      'Không gian địa chỉ là bộ nhớ riêng ảo của mỗi tiến trình với ba mục tiêu: trong suốt, bảo vệ và hiệu quả. MMU dịch địa chỉ ảo sang vật lý, từ cơ chế đơn giản nhất là thanh ghi cơ sở/giới hạn đến phân đoạn, vốn gây phân mảnh ngoài.',
    ] },
  { id: 'n-phan-trang-tlb', t: 'Phân trang, bảng trang đa cấp và TLB', c: 'operating-systems', cov: ['os-vm-paging-multilevel-tables', 'os-vm-tlb-locality'],
    p: [
      'Phân trang chia bộ nhớ thành khung kích thước cố định, loại bỏ phân mảnh ngoài; mục bảng trang (PTE) chứa số khung và bit trạng thái. Bảng trang phẳng quá lớn nên dùng bảng đa cấp, chỉ cấp phần dùng tới.',
      'Mỗi truy cập tốn thêm tra bảng, nên TLB lưu các dịch gần đây dựa trên tính cục bộ; chuyển ngữ cảnh phải xử lý TLB (xả hoặc gắn nhãn tiến trình).',
    ] },
  { id: 'n-loi-trang-hoan-doi', t: 'Page fault, thay thế trang và giới hạn thực tế', c: 'operating-systems', cov: ['os-vm-page-faults-replacement', 'os-vm-limits-hardware-realities'],
    p: [
      'Khi trang không có trong bộ nhớ, ngắt thiếu trang đưa trang từ không gian hoán đổi lên; chính sách thay thế (FIFO, LRU và xấp xỉ như clock) chọn trang bị đuổi, và quá nhiều thiếu trang gây thrashing.',
      'Sao chép khi ghi (copy-on-write) giúp fork rẻ và ánh xạ tệp (mmap) xem tệp như bộ nhớ; thực tế bị chi phối bởi phần cứng như cache và TLB, nên mô hình thuần túy chỉ là xấp xỉ.',
    ] },
  { id: 'n-dong-bo-kernel', t: 'Đồng bộ trong kernel và deadlock', c: 'operating-systems', cov: ['os-synchronization-deadlocks-kernel'],
    p: [
      'Kernel có cấu trúc dữ liệu dùng chung với các bất biến phải giữ, vùng găng và thao tác nguyên tử bảo vệ chúng. Spinlock chờ bận hợp với đoạn rất ngắn và ngữ cảnh ngắt không được ngủ, khóa ngủ nhường CPU khi chờ lâu.',
      'Deadlock cần bốn điều kiện (loại trừ tương hỗ, giữ và chờ, không chiếm đoạt, chờ vòng); có thể phòng ngừa, tránh hoặc phát hiện và phục hồi, mỗi cách có chi phí riêng.',
    ] },
  { id: 'n-io-he-thong-tep', t: 'I/O, hệ thống tệp và nhất quán khi sập', c: 'operating-systems', cov: ['os-io-storage-filesystems'],
    p: [
      'Thiết bị được điều khiển qua driver và hàng đợi I/O; hệ thống tệp bố trí inode, cấp phát block và tìm đường dẫn qua thư mục. Sập giữa chừng làm cấu trúc không nhất quán nên cần fsck hoặc journal ghi trước ý định rồi mới áp dụng.',
      'Ở giao diện ứng dụng cần phân biệt nguyên tử (thay đổi trọn vẹn hoặc không) với bền vững (đã xuống đĩa), vì ghi xong chưa chắc đã bền nếu chưa đồng bộ.',
    ] },

  // ── Đồng thời và song song
  { id: 'n-thread-race', t: 'Thread, data race và mô hình bộ nhớ', c: 'concurrency-parallelism', cov: ['cp-threads-races-memory-model'],
    p: [
      'Thread có ngăn xếp riêng nhưng dùng chung dữ liệu của tiến trình, nên phải biết trạng thái nào riêng, nào chung và vòng đời của thread. Data race (hai truy cập không đồng bộ, ít nhất một ghi) gây hành vi không xác định, khác với lỗi logic do thứ tự thực thi mà vẫn đúng ngữ nghĩa.',
      'Mô hình bộ nhớ định nghĩa quan hệ xảy ra-trước; thao tác nguyên tử đọc-sửa-ghi và thứ tự bộ nhớ cho phép công bố dữ liệu từ thread này sang thread khác một cách đúng.',
    ] },
  { id: 'n-khoa-condvar', t: 'Mutex, biến điều kiện và semaphore', c: 'concurrency-parallelism', cov: ['cp-locks-condition-variables-semaphores'],
    p: [
      'Mutex bảo vệ vùng găng, và phạm vi khóa phải bao trọn bất biến cần giữ. Biến điều kiện cho phép chờ một điều kiện (predicate), luôn kiểm tra lại trong vòng lặp vì có thể bị đánh thức giả; mẫu nhà sản xuất–người tiêu dùng là ví dụ.',
      'Semaphore đếm tổng quát hóa mutex và dùng cho tài nguyên có số lượng; bài toán độc giả–người viết cho thấy đánh đổi giữa song song và công bằng.',
    ] },
  { id: 'n-loi-dong-thoi-su-kien', t: 'Lỗi đồng thời và thiết kế theo sự kiện', c: 'concurrency-parallelism', cov: ['cp-concurrency-bugs-event-driven'],
    p: [
      'Deadlock, livelock (hoạt động mà không tiến triển) và starvation (bị bỏ đói) là ba kiểu lỗi tiến triển khác nhau. Lỗi đồng thời khó tái hiện; công cụ phát hiện race và kiểm thử ngẫu nhiên giúp ích nhưng không chứng minh được vắng lỗi.',
      'Thiết kế theo sự kiện dùng vòng lặp sự kiện với I/O không chặn dựa trên trạng thái sẵn sàng, và cần áp suất ngược (backpressure) để bên nhận chậm không làm tràn bộ nhớ.',
    ] },
  { id: 'n-song-song-hieu-nang', t: 'Phân rã song song và đo hiệu năng', c: 'concurrency-parallelism', cov: ['cp-parallel-decomposition-performance'],
    p: [
      'Work là tổng công việc, span là đường găng dài nhất, và chúng cho cận tăng tốc; chia miền là cách phân rã dữ liệu phổ biến. Độ hạt (granularity), cân bằng tải và hiện tượng false sharing (hai thread ghi vào cùng dòng cache) quyết định hiệu quả thực tế.',
      'Định luật Amdahl giới hạn tăng tốc theo phần tuần tự, quy mô bài toán lớn hơn có thể cải thiện hiệu quả, và kết luận chỉ đáng tin khi có phép đo đúng.',
    ] },

  // ── Mạng máy tính
  { id: 'n-phan-lop-mang', t: 'Phân lớp, độ trễ và framing ứng dụng', c: 'computer-networks', cov: ['cn-layering-metrics-application-framing'],
    p: [
      'Mỗi lớp cung cấp dịch vụ cho lớp trên bằng giao thức của nó và đóng gói dữ liệu của lớp trên. Độ trễ, thông lượng và tích băng thông–trễ (BDP) cho biết có bao nhiêu dữ liệu đang "trên đường" và đủ để lấp đầy đường truyền.',
      'DNS dịch tên và HTTP theo mô hình yêu cầu–phản hồi; khi viết ứng dụng trên socket, framing xác định ranh giới thông điệp trong luồng byte và dữ liệu nhận được phải coi là không đáng tin.',
    ] },
  { id: 'n-tcp-tin-cay', t: 'Truyền tin tin cậy và TCP', c: 'computer-networks', cov: ['cn-transport-reliability-tcp'],
    p: [
      'UDP không bảo đảm gì; độ tin cậy được xây dựng từ ACK, bộ đếm thời gian, số thứ tự và dừng-chờ, rồi cải thiện bằng cửa sổ trượt cho phép nhiều gói chưa xác nhận. Không gian số thứ tự phải đủ lớn so với cửa sổ để không nhầm lẫn gói cũ với mới.',
      'TCP thêm bắt tay ba bước, máy trạng thái kết nối đóng từng chiều, truyền lại khi mất và điều khiển luồng theo cửa sổ nhận để người gửi không làm tràn bên nhận.',
    ] },
  { id: 'n-tac-nghen', t: 'Điều khiển tắc nghẽn và hàng đợi', c: 'computer-networks', cov: ['cn-congestion-control'],
    p: [
      'Cửa sổ tắc nghẽn cwnd tăng theo khởi động chậm rồi cộng tăng nhân giảm (AIMD) để chia sẻ đường truyền ổn định. Mất gói được phát hiện bằng ACK trùng (truyền lại nhanh) hoặc hết hạn, và là tín hiệu để giảm tốc độ.',
      'Bộ đệm quá lớn gây bufferbloat làm trễ tăng mạnh, và quản lý hàng đợi chủ động (AQM) đánh dấu hoặc bỏ gói sớm; công bằng giữa các luồng có nhiều định nghĩa khác nhau.',
    ] },
  { id: 'n-ip-dinh-tuyen', t: 'IP, CIDR và định tuyến', c: 'computer-networks', cov: ['cn-network-ip-cidr-routing'],
    p: [
      'Địa chỉ IP gồm phần tiền tố mạng và phần máy; CIDR cho tiền tố độ dài bất kỳ, và bộ định tuyến chuyển tiếp theo khớp tiền tố dài nhất. Định tuyến trong miền dùng distance-vector hoặc link-state, giữa các miền dùng BGP dựa trên chính sách.',
      'ARP, DHCP, ICMP và NAT là các giao thức đồng hành giải quyết cấp địa chỉ, báo lỗi và dùng chung địa chỉ; IPv6 và MTU kéo theo cách xử lý phân mảnh khác.',
    ] },
  { id: 'n-lan-tls', t: 'LAN, tầng liên kết và TLS', c: 'computer-networks', cov: ['cn-link-layer-lan-tls'],
    p: [
      'Switch Ethernet học địa chỉ MAC từ khung đi qua, và cây khung (spanning tree) ngăn vòng lặp. Mạng không dây dùng chung kênh và có cách đóng khung, phát hiện lỗi riêng (CRC).',
      'TLS bảo vệ kênh bằng mã hóa và xác thực dựa trên chứng chỉ, nhưng không che giấu ai đang nói chuyện với ai, và không bảo vệ khi đầu cuối đã bị chiếm.',
    ] },

  // ── Hệ thống phân tán
  { id: 'n-ptan-loi-dong-ho', t: 'Mô hình lỗi, RPC và đồng hồ logic', c: 'distributed-systems', cov: ['dsys-failure-models-clocks-ordering'],
    p: [
      'Trong hệ phân tán, một phần có thể hỏng trong khi phần khác vẫn chạy, và giả định về thời gian (đồng bộ, bán đồng bộ, bất đồng bộ) quyết định điều gì có thể phát hiện. Một lời gọi RPC hết hạn không cho biết lệnh đã chạy hay chưa, nên thử lại có thể thực hiện hai lần.',
      'Quan hệ xảy ra-trước thay cho thời gian vật lý; đồng hồ Lamport cho thứ tự nhất quán còn vector clock phát hiện được các sự kiện đồng thời.',
    ] },
  { id: 'n-nhan-ban-nhat-quan', t: 'Nhân bản, mô hình nhất quán và CAP', c: 'distributed-systems', cov: ['dsys-replication-consistency-cap'],
    p: [
      'Primary–backup nhân bản qua một nút chính, và việc chuyển quyền an toàn cần cơ chế ngăn nút cũ còn ghi (fencing). Các mô hình nhất quán (tuyến tính hóa, tuần tự, cuối cùng) được định nghĩa qua lịch sử thao tác mà client quan sát được.',
      'CAP chỉ nói khi mạng bị chia cắt không thể có cả nhất quán và sẵn sàng; quorum đọc–ghi cho nhất quán có điều kiện, nhưng không tự động bảo đảm tuyến tính hóa.',
    ] },
  { id: 'n-dong-thuan-raft', t: 'Đồng thuận và Raft', c: 'distributed-systems', cov: ['dsys-consensus-raft'],
    p: [
      'Raft chia nhiệm kỳ (term) và bầu leader theo đa số, với trạng thái bền vững (term, phiếu bầu, log) phải ghi đĩa trước khi trả lời. Log được giữ nhất quán nhờ tính chất log matching, và ứng viên chỉ thắng nếu log của nó không cũ hơn đa số.',
      'Một mục chỉ được commit khi nhân bản trên đa số và thuộc term hiện tại của leader, để an toàn khi đổi leader. Snapshot cắt gọn log, thay đổi thành viên cần thủ tục an toàn riêng, và hệ chịu được lỗi của ít hơn một nửa số nút.',
    ] },
  { id: 'n-giao-dich-phan-manh', t: 'Cam kết nguyên tử, idempotency và phân mảnh', c: 'distributed-systems', cov: ['dsys-distributed-transactions-idempotency-sharding'],
    p: [
      'Hai pha commit (2PC) cho nhiều nút cùng commit hoặc cùng hủy, nhưng nút tham gia đã bỏ phiếu thuận không thể tự quyết nếu điều phối viên sập, nên 2PC có thể bị chặn. Idempotency và định danh yêu cầu cho phép thử lại an toàn; "đúng một lần" chỉ đạt được trong phạm vi hẹp có khử trùng lặp.',
      'Phân mảnh chia dữ liệu theo khoảng hoặc băm, có nguy cơ điểm nóng và cần di chuyển dữ liệu mà vẫn định tuyến đúng.',
    ] },
];
