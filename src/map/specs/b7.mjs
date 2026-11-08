// Khối VII — Syllabus chuyên sâu và tổng hợp
export const B7 = [
  // ── Hệ điều hành thực hành (kiểu xv6/RISC-V)
  { id: 'n-os-khoi-dong-sv39', t: 'Khởi động RISC-V, Sv39 và đường đi syscall', c: 'spec-systems-os', cov: ['ssos-boot-pagetables-traps'],
    p: [
      'Từ entry assembly, kernel thiết lập chế độ đặc quyền, ngăn xếp và khởi tạo để tạo tiến trình đầu tiên. Sv39 là bảng trang ba cấp của RISC-V; quyền trong mục bảng trang (đọc, ghi, thực thi, người dùng) và ánh xạ kernel quyết định ai truy cập được gì.',
      'Trampoline và trapframe lưu và khôi phục trạng thái khi vào kernel; có những việc phần cứng không tự làm. Bộ điều phối syscall đọc đối số từ trapframe, phải sao chép dữ liệu qua ranh giới user–kernel an toàn, rồi trở về user.',
    ] },
  { id: 'n-os-lazy-cow', t: 'Cấp phát lười, COW fork và chuyển ngữ cảnh', c: 'spec-systems-os', cov: ['ssos-cow-lazy-allocation-scheduling'],
    p: [
      'Cấp phát lười hứa một miền địa chỉ nhưng chỉ cấp trang khi fault, nên handler phải kiểm tra fault nằm trong miền được hứa. Fork COW chia sẻ trang vật lý, đếm tham chiếu để biết khi nào được giải phóng, và ghi vào trang chung kích hoạt sao chép.',
      'copyout từ kernel có thể gặp lỗi giữa chừng và cần kiểm thử các trường hợp đó; chuyển ngữ cảnh qua swtch với khóa tiến trình và sleep/wakeup dễ gây mất đánh thức nếu sai thứ tự.',
    ] },
  { id: 'n-os-khoa-fs-log', t: 'Khóa kernel, buffer cache và logging hệ thống tệp', c: 'spec-systems-os', cov: ['ssos-kernel-locking-fs-logging'],
    p: [
      'Spinlock phải vô hiệu hóa ngắt cục bộ và dùng rào bộ nhớ đúng để tránh deadlock và thứ tự sai. Buffer cache giữ danh tính khối và đồng bộ hoàn tất thiết bị; inode và thư mục có hai loại tham chiếu (liên kết trên đĩa và tham chiếu trong bộ nhớ) với vòng đời khác nhau.',
      'Log ghi các cập nhật nhóm rồi commit và phát lại khi khởi động, bảo đảm nguyên tử sau sập trong phạm vi nhất định mà không thay thế các giao thức cao hơn.',
    ] },

  // ── CSDL và lưu trữ nâng cao
  { id: 'n-db-bplustree-lsm-dong-thoi', t: 'Buffer pool đồng thời, B+Tree và LSM', c: 'spec-database-storage', cov: ['sdbs-concurrent-bplustree-lsm'],
    p: [
      'Buffer pool đồng thời cần định danh frame ổn định, page guard tự giải phóng và chính sách thay thế như LRU-K. B+Tree đồng thời dùng crabbing: giữ latch cha đến khi biết con an toàn (không tách hay gộp), và phải có đường khởi động lại khi giả định sai.',
      'Quét theo khoảng dùng latch bên cạnh, và việc thu hồi trang phải tránh người đọc còn tham chiếu. Đường ghi LSM và compaction phải xử lý tombstone đúng để xóa không hồi sinh dữ liệu cũ.',
    ] },
  { id: 'n-db-vector-mvcc-gc', t: 'Thực thi vector hóa, MVCC và thu gom phiên bản', c: 'spec-database-storage', cov: ['sdbs-vectorized-execution-mvcc-gc'],
    p: [
      'Thực thi theo lô xử lý nhiều bản ghi mỗi lần gọi với selection vector, và quyết định khi nào vật chất hóa kết quả trung gian; JIT sinh mã cho từng pipeline. MVCC lưu nhiều phiên bản kèm quy tắc nhìn thấy theo dấu thời gian.',
      'Thu gom phiên bản cũ dựa trên watermark của snapshot đang đọc, và một người đọc chạy lâu giữ rác lại.',
    ] },
  { id: 'n-db-cot-phan-tan', t: 'Lưu trữ cột, nén và truy vấn phân tán', c: 'spec-database-storage', cov: ['sdbs-columnar-olap-distributed-storage'],
    p: [
      'Lưu theo hàng (NSM) hợp với OLTP, theo cột (DSM) hợp với OLAP, và PAX là thỏa hiệp. Nén bằng từ điển hay RLE cho phép thực thi trực tiếp trên dữ liệu mã hóa.',
      'Join phân tán tốn chi phí trao đổi (broadcast, shuffle) và dữ liệu lệch làm một nút quá tải; giảm dữ liệu chuyển và giữ snapshot nhất quán là hai mối quan tâm chính.',
    ] },

  // ── Trình biên dịch và runtime
  { id: 'n-cc-frontend-pratt', t: 'Front-end: parser Pratt, phân giải tên và chẩn đoán', c: 'spec-compilers-runtime', cov: ['scr-frontend-pratt-semantic-resolution'],
    p: [
      'Parser Pratt dùng sức liên kết toán tử để phân tích biểu thức gọn. Phân giải tên gắn mỗi định danh với khai báo qua ngữ cảnh ngữ nghĩa, tách khỏi phân tích cú pháp. Chẩn đoán lỗi tốt cần phục hồi parser để báo nhiều lỗi và giữ vị trí nguồn.',
    ] },
  { id: 'n-cc-bytecode-vm', t: 'Bytecode, máy ảo ngăn xếp và upvalue', c: 'spec-compilers-runtime', cov: ['scr-bytecode-vm-closures-upvalues'],
    p: [
      'Chunk bytecode gồm lệnh và bảng hằng, chạy trong vòng dispatch trên máy ảo ngăn xếp. Mỗi lời gọi có khung với biến cục bộ và địa chỉ trở về.',
      'Closure bắt biến bằng upvalue: upvalue mở trỏ vào ngăn xếp, và khi biến ra khỏi phạm vi thì được đóng (chuyển lên heap) để các closure chia sẻ cùng biến.',
    ] },
  { id: 'n-cc-ir-gc', t: 'IR/SSA, tối ưu luồng dữ liệu và thu gom rác', c: 'spec-compilers-runtime', cov: ['scr-ir-dataflow-gc-runtime'],
    p: [
      'Chương trình chia thành basic block nối thành đồ thị luồng điều khiển; SSA gán mỗi biến một lần và dùng phi để hợp nhất. Lan truyền hằng và loại mã chết phải bảo toàn ngữ nghĩa.',
      'Thu gom rác tracing ba màu cần bất biến khi cấp phát cùng lúc, và đo runtime kèm kiểm tra ngữ nghĩa qua nhiều tầng bảo đảm tối ưu không đổi hành vi.',
    ] },

  // ── Hệ phân tán nâng cao
  { id: 'n-ds-raft-an-toan', t: 'An toàn Raft, lưu bền và snapshot', c: 'spec-distributed-systems-advanced', cov: ['sdsa-raft-safety-persistence-snapshots'],
    p: [
      'An toàn Raft được tổ chức qua năm tính chất; phản ví dụ cho thấy majority của một entry thuộc term cũ chưa đủ để commit, chỉ commit khi entry thuộc term hiện tại. Phải ghi bền trước khi phản hồi và xử lý RPC đến trễ.',
      'Snapshot dùng chỉ số tuyệt đối và cài đặt nguyên tử để khôi phục nhất quán.',
    ] },
  { id: 'n-ds-kv-tuyen-tinh', t: 'KV tuyến tính hóa và khử yêu cầu lặp', c: 'spec-distributed-systems-advanced', cov: ['sdsa-linearizable-kv-deduplication'],
    p: [
      'Từ submit tới kết quả đúng thao tác cần danh tính để người chờ nhận đúng kết quả. Leader cũ có thể phục vụ đọc lỗi thời nên cần rào đọc để đạt tuyến tính hóa.',
      'Khử lặp dùng ID yêu cầu và thứ tự client, trạng thái khử lặp nằm trong máy trạng thái và snapshot; kiểm thử lịch sử có giới hạn khi hiệu ứng không chắc chắn.',
    ] },
  { id: 'n-ds-shard-cau-hinh', t: 'KV phân mảnh và đổi cấu hình có phục hồi', c: 'spec-distributed-systems-advanced', cov: ['sdsa-sharded-raft-reconfiguration'],
    p: [
      'Phiên bản cấu hình (epoch) khác thành viên nhóm Raft: nó quyết định nhóm nào có quyền phục vụ shard. Di chuyển shard theo trình tự freeze–install–delete bảo đảm một chủ sở hữu tại mọi thời điểm.',
      'Bộ điều khiển có thể sập giữa chừng nên cần phục hồi và fencing; giao dịch xuyên shard và kiểm bất biến nằm ở phạm vi mở rộng.',
    ] },

  // ── Thị giác máy tính
  { id: 'n-cv-loc-dac-trung', t: 'Lọc ảnh, đặc trưng và hình học nhiều góc nhìn', c: 'spec-computer-vision', cov: ['scv-image-filtering-features-geometry'],
    p: [
      'Lọc ảnh và gradient phát hiện biên ở nhiều thang đo; điểm đặc trưng cục bộ và mô tả cho phép khớp ảnh. Homography ước lượng bằng RANSAC chống ngoại lai, và hình học epipolar cùng hiệu chỉnh camera cho độ sâu từ hai ảnh.',
    ] },
  { id: 'n-cv-phat-hien-phan-doan', t: 'Phát hiện vật thể, phân đoạn và Vision Transformer', c: 'spec-computer-vision', cov: ['scv-detection-segmentation-vit'],
    p: [
      'Hộp bao được so bằng IoU và loại dự đoán trùng bằng NMS; phát hiện một giai đoạn nhanh hơn, hai giai đoạn chính xác hơn, và đa tỉ lệ xử lý vật thể to nhỏ.',
      'Phân đoạn ngữ nghĩa gán nhãn cho pixel, phân đoạn thực thể tách từng vật thể (U-Net là kiến trúc điển hình), còn Vision Transformer cắt ảnh thành patch embedding.',
    ] },
  { id: 'n-cv-danh-gia-trien-khai', t: 'Đánh giá mAP, độ bền vững và triển khai', c: 'spec-computer-vision', cov: ['scv-evaluation-robustness-deployment'],
    p: [
      'AP và mAP phụ thuộc protocol (ngưỡng IoU, cách nội suy), nên so sánh phải cùng protocol. Đổi miền làm hiệu năng giảm, tăng cường dữ liệu giúp nhưng phải tránh rò rỉ giữa các tập.',
      'Triển khai đánh đổi tốc độ và độ chính xác, và cần nhìn nhận độ bất định cùng giới hạn của quyết định tự động.',
    ] },

  // ── Xử lý ngôn ngữ tự nhiên
  { id: 'n-nlp-token-lm', t: 'Tách từ con, mô hình ngôn ngữ và embedding', c: 'spec-natural-language-processing', cov: ['snlp-tokenization-language-models-embeddings'],
    p: [
      'Văn bản Unicode được tách thành đơn vị từ con (BPE) cân bằng giữa từ vựng và độ dài chuỗi. Mô hình n-gram ước lượng xác suất từ đếm với làm trơn, và perplexity đo chất lượng mô hình ngôn ngữ.',
      'Embedding phân tán như Word2Vec với lấy mẫu âm học biểu diễn từ dựa trên ngữ cảnh.',
    ] },
  { id: 'n-nlp-seq2seq-transformer', t: 'Seq2Seq, giải mã và Transformer tiền huấn luyện', c: 'spec-natural-language-processing', cov: ['snlp-seq2seq-pretrained-transformers'],
    p: [
      'Seq2Seq huấn luyện có điều kiện với teacher forcing; giải mã chọn giữa tham lam, beam search và lấy mẫu với temperature hoặc nucleus. Kiến trúc chỉ mã hóa như BERT thấy ngữ cảnh hai chiều, còn tự hồi quy sinh từng token.',
      'Tinh chỉnh (kể cả LoRA) thích nghi mô hình cho tác vụ nhưng bị giới hạn bởi chất lượng và lượng dữ liệu.',
    ] },
  { id: 'n-nlp-danh-gia-rag', t: 'Đánh giá NLP, RAG và ảo giác', c: 'spec-natural-language-processing', cov: ['snlp-evaluation-retrieval-hallucination'],
    p: [
      'Metric phải phù hợp loại đầu ra (nhãn, span, văn bản sinh), và văn bản sinh cần đánh giá bởi con người. Truy hồi–sinh (RAG) neo câu trả lời vào tài liệu tìm được nhưng chất lượng truy hồi quyết định kết quả.',
      'Mô hình có thể tạo thông tin sai nghe hợp lý, nên cần cơ chế từ chối khi thiếu bằng chứng; prompt injection là rủi ro khi dữ liệu không tin cậy lẫn vào chỉ dẫn.',
    ] },

  // ── An ninh nâng cao
  { id: 'n-sec-nhi-phan-fuzz', t: 'Bảo vệ nhị phân, TOCTOU và fuzzing', c: 'spec-security-advanced', cov: ['ssa-binary-mitigations-fuzzing'],
    p: [
      'ASLR, NX, canary và CFI làm khai thác khó hơn nhưng đều có giới hạn. TOCTOU là điều kiện tranh chấp giữa kiểm tra và dùng, tránh bằng cách gắn kiểm tra với chính tài nguyên.',
      'Fuzzing hướng độ phủ với sanitizer tìm lỗi tự động, và thực thi ký hiệu bổ sung nhưng bị giới hạn bởi bùng nổ đường đi.',
    ] },
  { id: 'n-sec-giao-thuc', t: 'An toàn giao thức: TLS 1.3, OAuth/OIDC và zero trust', c: 'spec-security-advanced', cov: ['ssa-protocol-security-oauth-zerotrust'],
    p: [
      'TLS 1.3 cho bí mật chuyển tiếp, và 0-RTT đánh đổi bằng nguy cơ phát lại. OAuth 2.0 với Authorization Code và PKCE cùng OIDC tách ủy quyền khỏi xác thực danh tính.',
      'Kiểm token (ví dụ JWT) phải đi kèm phân quyền mức đối tượng; zero trust và mTLS không coi ranh giới mạng là đủ tin cậy.',
    ] },
  { id: 'n-sec-kiem-toan-su-co', t: 'Kiểm toán thiết kế, nhật ký và ứng phó sự cố', c: 'spec-security-advanced', cov: ['ssa-audit-incident-response'],
    p: [
      'Rà thiết kế theo luồng dữ liệu và quyền; nhật ký kiểm toán cần toàn vẹn chống sửa đổi mà vẫn bảo vệ quyền riêng tư. Ứng phó sự cố gồm cô lập, bảo toàn bằng chứng và khôi phục.',
      'Rút kinh nghiệm sau sự cố kèm kiểm tra rằng bản sửa thực sự chặn được lỗi.',
    ] },

  // ── Tổng hợp và viết kỹ thuật
  { id: 'n-capstone-dinh-hinh', t: 'Định hình bài toán và tài liệu thiết kế', c: 'capstone-synthesis-technical-writing', cov: ['cstw-problem-scoping-design-doc'],
    p: [
      'Dự án bắt đầu từ câu hỏi rõ, đặc tả và phạm vi giới hạn. Tài liệu thiết kế nêu các phương án, lý do chọn và độ bất định; kế hoạch dựa trên bằng chứng và nhận diện rủi ro.',
    ] },
  { id: 'n-capstone-trien-khai', t: 'Triển khai phân đoạn và kiểm chứng', c: 'capstone-synthesis-technical-writing', cov: ['cstw-incremental-implementation-verification'],
    p: [
      'Triển khai bằng lát cắt đầu–cuối sớm và kiểm thử bất biến, rồi mở rộng dần. Benchmark cần baseline và lặp lại được, còn quan sát và tiêm lỗi cho thấy hành vi khi hỏng nhưng không chứng minh được vắng lỗi.',
    ] },
  { id: 'n-capstone-viet-bao-cao', t: 'Viết báo cáo kỹ thuật và artifact tái lập', c: 'capstone-synthesis-technical-writing', cov: ['cstw-technical-writing-reproducible-artifact'],
    p: [
      'Báo cáo tốt có cấu trúc rõ và độ mạnh của tuyên bố khớp với bằng chứng. Hình và bảng thể hiện kết quả cùng độ bất định; artifact được đóng gói để người khác chạy lại và dự án được trình bày như bằng chứng năng lực.',
    ] },
];
