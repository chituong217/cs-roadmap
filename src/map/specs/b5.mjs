// Khối V — Dữ liệu và xây dựng phần mềm
export const B5 = [
  // ── Mô hình dữ liệu và CSDL
  { id: 'n-mo-hinh-quan-he', t: 'Mô hình quan hệ, ràng buộc và đại số quan hệ', c: 'data-modeling-databases', cov: ['dmd-relational-model-algebra'],
    p: [
      'Quan hệ là tập bộ gồm các thuộc tính có miền giá trị; khóa xác định duy nhất một bộ, và khóa ngoại cùng ràng buộc miền bảo đảm toàn vẹn tham chiếu giữa các bảng. Đại số quan hệ có sáu phép cơ sở (chọn, chiếu, hợp, hiệu, tích Descartes, đổi tên) và kết nối là tổ hợp của chúng.',
      'Phép toán đại số là nền ngữ nghĩa của truy vấn, và việc phân biệt tập (đại số) với bag (SQL) quyết định kết quả khi có bản ghi trùng.',
    ] },
  { id: 'n-sql-null', t: 'SQL, bag semantics và NULL', c: 'data-modeling-databases', cov: ['dmd-sql-semantics-null-queries'],
    p: [
      'SQL làm việc trên bag (cho phép trùng) với thứ tự không xác định trừ khi ORDER BY; gom nhóm và hàm tổng hợp xử lý từng nhóm. NULL nghĩa là giá trị không biết, nên so sánh với NULL cho UNKNOWN chứ không đúng hay sai, và outer join sinh NULL cho phần không khớp.',
      'Truy vấn con và CTE chia truy vấn thành bước; đệ quy cần điều kiện dừng để không lặp vô hạn.',
    ] },
  { id: 'n-er-chuan-hoa', t: 'Thiết kế ER, phụ thuộc hàm và chuẩn hóa', c: 'data-modeling-databases', cov: ['dmd-er-functional-dependencies-normalization'],
    p: [
      'Mô hình ER chuyển thành quan hệ, và thiết kế kém gây dị thường cập nhật, chèn, xóa. Phụ thuộc hàm X→Y và bao đóng của X cho phép tìm khóa và đánh giá thiết kế.',
      'Các dạng chuẩn từ 1NF đến BCNF loại dần dư thừa; việc phân rã phải thỏa hai tiêu chí là không mất thông tin (lossless) và bảo toàn phụ thuộc, vốn không phải lúc nào cũng đạt đồng thời với BCNF.',
    ] },
  { id: 'n-giao-dich-chi-muc', t: 'Giao dịch, cô lập, chỉ mục và vận hành dữ liệu', c: 'data-modeling-databases', cov: ['dmd-transactions-isolation-indexing-ops'],
    p: [
      'ACID gồm nguyên tử, nhất quán, cô lập và bền vững; các mức cô lập thực tế cho phép những dị thường khác nhau (đọc bẩn, không lặp lại, bóng ma), nên mức mặc định của một hệ không nhất thiết là serializable.',
      'Chỉ mục tăng tốc đọc đổi lấy chi phí ghi, và kế hoạch EXPLAIN cho thấy chỉ mục có được dùng không; sao lưu, phục hồi và quyền truy cập hoàn thiện việc vận hành dữ liệu.',
    ] },

  // ── Nội bộ CSDL
  { id: 'n-trang-buffer-pool', t: 'Trang dữ liệu và buffer pool', c: 'database-internals', cov: ['dbi-storage-pages-buffer-pool'],
    p: [
      'Bản ghi độ dài biến đổi lưu trong trang kiểu slotted page, với mảng khe trỏ tới bản ghi để di chuyển mà không đổi định danh. Buffer pool giữ trang trong các frame, ghim (pin) trang đang dùng và đánh dấu bẩn (dirty) khi đã sửa.',
      'Chính sách thay thế của CSDL tự quản lý vì biết mẫu truy cập tốt hơn hệ điều hành, nên cần tách biệt với bộ nhớ đệm trang của OS.',
    ] },
  { id: 'n-btree-lsm', t: 'B+Tree, băm động và LSM', c: 'database-internals', cov: ['dbi-bplustree-lsm-indexes'],
    p: [
      'B+Tree giữ bất biến về số khóa mỗi nút và độ cao đều, tách và gộp nút khi tràn hoặc thiếu; truy cập đồng thời dùng latch crabbing. Băm động mở rộng bảng dần mà không băm lại toàn bộ.',
      'LSM tree ghi vào memtable rồi xả thành SSTable bất biến và compaction gộp chúng, đổi khuếch đại ghi và đọc lấy thông lượng ghi cao.',
    ] },
  { id: 'n-sap-xep-join', t: 'Sắp xếp ngoài, join và thực thi truy vấn', c: 'database-internals', cov: ['dbi-Sorting-joins-query-execution'],
    p: [
      'Sắp xếp ngoài tạo các run đã sắp rồi trộn nhiều đường khi dữ liệu vượt bộ nhớ. Join có ba chiến lược chính (nested loop, sort-merge, hash join) với chi phí I/O khác nhau tùy kích thước bảng và chỉ mục.',
      'Bộ thực thi dùng mô hình iterator hoặc vector hóa; toán tử chặn (như sắp xếp) phải đọc hết đầu vào trước khi cho đầu ra đầu tiên.',
    ] },
  { id: 'n-toi-uu-truy-van', t: 'Tối ưu hóa truy vấn theo chi phí', c: 'database-internals', cov: ['dbi-query-optimization'],
    p: [
      'Bộ tối ưu biến đổi truy vấn thành dạng tương đương rẻ hơn khi đủ điều kiện ngữ nghĩa, rồi ước lượng chi phí dựa trên cardinality; histogram ước lượng độ chọn nhưng giả định độc lập giữa cột thường sai khi có tương quan.',
      'Thuật toán kiểu Selinger dùng quy hoạch động chọn thứ tự join và lưu các thứ tự đáng quan tâm; ước lượng sai là nguồn chính của kế hoạch tồi.',
    ] },
  { id: 'n-serializable-mvcc', t: 'Serializability, khóa hai pha và MVCC', c: 'database-internals', cov: ['dbi-concurrency-control-mvcc'],
    p: [
      'Lịch khả tuần tự hóa theo xung đột có đồ thị thứ tự không chu trình. Khóa hai pha đảm bảo điều đó, khóa nhiều độ mịn với khóa ý định cho phép khóa ở nhiều cấp, và deadlock được phát hiện hoặc phòng ngừa.',
      'MVCC giữ nhiều phiên bản để đọc không chặn ghi; snapshot isolation tránh nhiều dị thường nhưng còn write skew, nên không tương đương serializable.',
    ] },
  { id: 'n-wal-aries', t: 'WAL và phục hồi ARIES', c: 'database-internals', cov: ['dbi-wal-aries-recovery'],
    p: [
      'Chính sách STEAL, NO-FORCE cho hiệu năng cao nhưng đòi hỏi WAL với hai quy tắc: ghi log trước khi ghi trang và ghi log commit trước khi báo thành công. LSN gắn thứ tự với trang, và checkpoint rút ngắn việc phục hồi.',
      'ARIES phục hồi qua ba pha analysis, redo (lặp lại lịch sử) và undo, ghi CLR để undo không bị lặp lại nếu sập tiếp.',
    ] },

  // ── Công nghệ phần mềm
  { id: 'n-yeu-cau-module', t: 'Yêu cầu, mô hình miền và ranh giới module', c: 'software-engineering', cov: ['se-requirements-domain-architecture'],
    p: [
      'Yêu cầu tốt kiểm chứng được qua tiêu chí chấp nhận và dùng ngôn ngữ của miền bài toán. Ẩn thông tin giữ quyết định dễ đổi sau ranh giới module, cohesion cao và coupling thấp làm module dễ hiểu và thay.',
      'Hợp đồng công khai của API không chỉ là tài liệu: người dùng thường phụ thuộc cả vào hành vi ngầm (luật Hyrum), nên tiến hóa phải tính tới điều đó.',
    ] },
  { id: 'n-kien-truc-kiem-thu', t: 'Kiến trúc kiểm thử', c: 'software-engineering', cov: ['se-testing-architecture-verification'],
    p: [
      'Kiểm thử đơn vị, tích hợp và luồng người dùng khác nhau về phạm vi và độ tin cậy; một bài kiểm thử cần oracle xác định đúng sai. Fake và mock thay phụ thuộc, nhưng thiết kế dễ kiểm (tiêm phụ thuộc) quan trọng hơn công cụ.',
      'Kiểm thử theo tính chất sinh nhiều đầu vào, kiểm chuỗi trạng thái và hồi quy giữ lại lỗi đã sửa; test không chứng minh vắng lỗi.',
    ] },
  { id: 'n-review-refactor', t: 'Review, refactoring và tiến hóa hệ thống', c: 'software-engineering', cov: ['se-code-review-refactoring-deprecation'],
    p: [
      'Một thay đổi review được nhỏ, có mục đích rõ và đi kèm kiểm thử. Refactoring đổi cấu trúc mà bảo toàn hành vi, an toàn chỉ khi có kiểm thử đủ tin cậy.',
      'Deprecation, migration và nợ kỹ thuật là chi phí của tiến hóa; gỡ bỏ cần lộ trình cho người dùng thay vì đổi đột ngột.',
    ] },
  { id: 'n-phu-thuoc-ci', t: 'Phụ thuộc, CI và phối hợp phát triển', c: 'software-engineering', cov: ['se-dependencies-ci-collaboration'],
    p: [
      'Phụ thuộc tạo thành đồ thị với ràng buộc phiên bản; SemVer báo hiệu mức tương thích nhưng không bảo đảm, và lockfile ghim phiên bản để dựng tái lập. CI cho phản hồi nhanh bằng build tái lập và kiểm thử tự động.',
      'Phối hợp nhóm cần ghi lại quyết định (ADR) và quy trình phát hành có kiểm soát.',
    ] },

  // ── Ứng dụng web và mạng
  { id: 'n-html-css-a11y', t: 'HTML có ngữ nghĩa, CSS và khả năng truy cập', c: 'web-network-applications', cov: ['wna-document-semantics-layout-a11y'],
    p: [
      'HTML ngữ nghĩa dựng DOM với vai trò và tên truy cập được cho công nghệ hỗ trợ; box model và bố cục đáp ứng (flex, grid, media query) điều khiển hiển thị trên nhiều cỡ màn hình. Form, focus và phản hồi lỗi rõ ràng quyết định ứng dụng có dùng được hay không, kể cả với bàn phím.',
    ] },
  { id: 'n-js-event-loop', t: 'JavaScript, event loop và trạng thái bất đồng bộ', c: 'web-network-applications', cov: ['wna-dom-event-loop-async-state'],
    p: [
      'JavaScript tương tác với DOM qua sự kiện; event loop chạy task rồi microtask (Promise), và lỗi bất đồng bộ phải bắt đúng chỗ vì không đi qua try/catch bên ngoài. Giao diện có thể nhận phản hồi đến muộn hoặc sai thứ tự, nên cần hủy yêu cầu cũ hoặc bỏ qua kết quả lỗi thời.',
    ] },
  { id: 'n-http-api-backend', t: 'HTTP, hợp đồng API và backend', c: 'web-network-applications', cov: ['wna-http-api-contracts-backend'],
    p: [
      'Method, mã trạng thái và idempotency tạo hợp đồng thử lại an toàn (GET, PUT, DELETE idempotent, POST thì không). Cache dùng freshness và kiểm chứng bằng ETag, và dữ liệu riêng của người dùng phải cẩn thận để không bị cache dùng chung.',
      'Backend gồm route, kiểm tra đầu vào, nhóm kết nối tài nguyên và ranh giới giao dịch.',
    ] },
  { id: 'n-session-origin', t: 'Phiên, origin, CORS và triển khai', c: 'web-network-applications', cov: ['wna-sessions-auth-browser-security'],
    p: [
      'Cookie giữ phiên với vòng đời và thuộc tính bảo vệ (HttpOnly, Secure, SameSite). Origin là đơn vị cô lập của trình duyệt; CORS nới lỏng có kiểm soát việc đọc chéo origin, còn CSRF là yêu cầu giả mạo dùng cookie có sẵn và cần chống bằng cách khác.',
      'Triển khai gồm đóng gói, cấu hình theo môi trường và kiểm thử đầu-cuối trên luồng thật.',
    ] },

  // ── Vận hành, hiệu năng, độ tin cậy
  { id: 'n-service-container', t: 'Service, container và môi trường tái lập', c: 'operations-performance-reliability', cov: ['opr-services-containers-isolation'],
    p: [
      'Service cần giám sát tiến trình và dừng êm (drain) để không cắt ngang yêu cầu đang xử lý. Container cô lập bằng namespaces (nhìn thấy gì) và cgroups (dùng bao nhiêu), nên không phải máy ảo.',
      'Artifact, cấu hình và dữ liệu bền vững phải tách bạch để môi trường dựng lại được.',
    ] },
  { id: 'n-quan-sat-slo', t: 'Telemetry, SLI/SLO và độ trễ đuôi', c: 'operations-performance-reliability', cov: ['opr-observability-metrics-tracing'],
    p: [
      'Log, metric và trace bổ sung nhau: sự kiện chi tiết, số liệu tổng hợp và đường đi của một yêu cầu. Phân vị p50, p95, p99 mô tả độ trễ đuôi tốt hơn trung bình, và tổng hợp phân vị không thể làm bằng cách lấy trung bình phân vị.',
      'SLI đo, SLO đặt mục tiêu, ngân sách lỗi cho biết còn bao nhiêu rủi ro; cảnh báo nên dẫn tới hành động.',
    ] },
  { id: 'n-do-hieu-nang', t: 'Đo hiệu năng và xác định điểm nghẽn', c: 'operations-performance-reliability', cov: ['opr-profiling-bottleneck-analysis'],
    p: [
      'Phương pháp USE kiểm utilization, saturation và errors cho từng tài nguyên. Lấy mẫu và flame graph chỉ ra thời gian đi đâu, kể cả thời gian chờ (off-CPU).',
      'Đo hiệu năng cần giả thuyết rõ và benchmark kiểm soát được nhiễu; tối ưu chỗ không phải điểm nghẽn chỉ lãng phí công.',
    ] },
  { id: 'n-qua-tai-backpressure', t: 'Quá tải, backpressure và lỗi dây chuyền', c: 'operations-performance-reliability', cov: ['opr-overload-backpressure-resilience'],
    p: [
      'Hàng đợi tuân theo định luật Little (số việc trong hệ bằng tốc độ đến nhân thời gian ở lại), và khi tải vượt công suất, hàng đợi dài vô hạn thay vì tự ổn định. Giới hạn tốc độ, backpressure và giảm tải giữ hệ thống ở vùng ổn định.',
      'Thử lại thiếu kiểm soát khuếch đại quá tải thành lỗi dây chuyền; ngân sách thử lại và jitter giúp phục hồi.',
    ] },

  // ── An ninh và quyền riêng tư
  { id: 'n-mo-hinh-de-doa', t: 'Mô hình đe dọa và nguyên tắc thiết kế an toàn', c: 'security-privacy', cov: ['sp-threat-modeling-trust-boundaries'],
    p: [
      'Mô hình đe dọa xác định tài sản cần bảo vệ, đối thủ có thể làm gì và các ranh giới tin cậy dữ liệu đi qua. Quyền tối thiểu và từ chối mặc định thu hẹp thiệt hại, và kiểm tra phải đặt ở bên có thẩm quyền chứ không ở phía client.',
      'Phòng thủ nhiều lớp chấp nhận một lớp có thể hỏng, nhưng các giả định phải được ghi ra và đánh giá rủi ro dựa trên khả năng và hậu quả.',
    ] },
  { id: 'n-mat-ma-xac-thuc', t: 'Mật mã ứng dụng, xác thực và phân quyền', c: 'security-privacy', cov: ['sp-applied-cryptography-auth'],
    p: [
      'Hàm băm, MAC, mã hóa có xác thực (AEAD) và chữ ký giải các bài toán khác nhau (toàn vẹn, xác thực nguồn, bí mật, không chối bỏ), và dùng nhầm công cụ là lỗi phổ biến. Mật khẩu lưu bằng hàm dẫn xuất khóa chậm có muối để chống đoán ngoại tuyến.',
      'Xác thực chứng minh bạn là ai (kèm MFA và vòng đời phiên), phân quyền quyết định bạn được làm gì (RBAC, ABAC và quyền theo từng đối tượng).',
    ] },
  { id: 'n-loi-bo-nho-injection', t: 'Lỗi bộ nhớ và tấn công chèn mã', c: 'security-privacy', cov: ['sp-memory-injection-vulnerabilities'],
    p: [
      'Lỗi hỏng bộ nhớ được giảm nhẹ bằng nhiều lớp (canary, ASLR, DEP) nhưng không loại bỏ gốc. Chèn lệnh (SQL, command) xảy ra khi dữ liệu bị diễn giải như cú pháp, nên giải pháp là tách dữ liệu khỏi lệnh bằng tham số hóa.',
      'XSS phụ thuộc ngữ cảnh của đầu ra (HTML, thuộc tính, JS), còn CSRF và SSRF là hai ranh giới khác nhau: một lừa trình duyệt người dùng, một lừa máy chủ gọi tới nơi nội bộ.',
    ] },
  { id: 'n-bi-mat-chuoi-cung-ung', t: 'Bí mật, chuỗi cung ứng và quyền riêng tư', c: 'security-privacy', cov: ['sp-secrets-supply-chain-privacy'],
    p: [
      'Bí mật và khóa có vòng đời (tạo, lưu, xoay, thu hồi) và cần kế hoạch phản ứng khi bị lộ. Phụ thuộc bên thứ ba mở rộng bề mặt tấn công, nên cách ly và thu hẹp quyền để hạn chế hậu quả.',
      'Quyền riêng tư dựa trên tối thiểu hóa dữ liệu; dữ liệu ẩn danh vẫn có thể bị tái định danh khi kết hợp với nguồn khác.',
    ] },
];
