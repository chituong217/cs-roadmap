# Lộ trình KHMT Toàn diện · HCMUS & Chuẩn Quốc tế (7 Tracks)

27 chặng · 355 nhiệm vụ · 7 tiến trình học tập · phiên bản 2.0.0

Lộ trình tự học cá nhân hóa chuẩn HCMUS và quốc tế; 7 tiến trình (tracks) có thứ tự rõ ràng, giải quyết dứt điểm lỗ hổng năm 1, gắn kết HK1 năm 2 và tối ưu xét tuyển chuyên ngành KHMT.

Đối tượng mục tiêu: Sinh viên Năm 2 ĐH KHTN (HCMUS) chuẩn bị xét tuyển chuyên ngành Khoa học Máy tính

Đọc từ trên xuống theo thứ tự đề xuất. Phần đã biết có thể tự kiểm tra qua các ô chẩn đoán (placement) để đi nhanh. Ô vàng là nâng cao có thể để học sau, không tính vào điều kiện hoàn thành vòng nền. Không phải đợi học hết mới ứng tuyển thực tập.

Nguồn đọc được chọn là sách mở/tài liệu công khai miễn phí; chỉ đọc phạm vi ghi trong ô, không mua sách, khóa học, chứng chỉ hay gói chấm bài. Ngày rà nguồn: 04/11/2026.

Khung tham chiếu: Khoa CNTT ĐH KHTN (HCMUS), [roadmap.sh Computer Science](https://roadmap.sh/computer-science), [CS2023](https://csed.acm.org/knowledge-areas/), [OSSU](https://github.com/ossu/computer-science), [TeachYourselfCS](https://teachyourselfcs.com/). Nhiệm vụ và thứ tự được biên soạn riêng theo năng lực và mục tiêu xét chuyên ngành KHMT.

---

## Bảng Tổng quan 7 Tiến trình Học tập (7 Tracks)

| Track | Tên tiến trình | Trọng tâm sư phạm | Môn học HCMUS tương ứng | Số chặng | Số nhiệm vụ | Thời lượng ước tính |
|---|---|---|---|---|---|---|
| **TRACK-0** | **Tư duy Lập trình & Mô hình Thực thi** | Làm chủ mô hình thực thi mã nguồn, bản đồ bộ nhớ vật lý Stack vs Heap, bản chất địa chỉ ô nhớ và con trỏ, tư duy trừu tượng hóa dữ liệu (ADT), chi phí khấu hao mảng động, tư duy đệ quy và quy nạp, bất biến vòng lặp, và phương pháp gỡ lỗi khoa học. | Nhập môn lập trình (CSC10001), Kỹ thuật lập trình (CSC10002) | 2 chặng | 19 nhiệm vụ | ~60h |
| **TRACK-1** | **OOP & Thiết kế Phần mềm** | Nắm chắc điểm 10 môn OOP (CSC10003) HK1 Năm 2: 4 tính chất cốt lõi (Đóng gói, Kế thừa, Đa hình, Trừu tượng), cơ chế bảng hàm ảo vtable/vptr, virtual destructor ở lớp cha, nạp chồng toán tử an toàn, nguyên lý SOLID và GoF Design Patterns (Factory, Strategy, Observer, Singleton). | Lập trình hướng đối tượng (CSC10003) | 1 chặng | 20 nhiệm vụ | ~70h |
| **TRACK-2** | **DSA Cốt lõi & Giải thuật** | Lấp dứt điểm lỗ hổng thuật toán sắp xếp (Quicksort phân hoạch Hoare/Lomuto, Mergesort, Heapsort), Cây (BST, AVL với 4 phép xoay LL/RR/LR/RL, Binary Heap), Đồ thị (BFS/DFS, Topological sort, Dijkstra với Priority Queue, Bellman-Ford, Floyd-Warshall, Kruskal với DSU nén đường đi, Prim), và Quy hoạch động (Knapsack, LIS O(n log n), LCS). | Cấu trúc dữ liệu và giải thuật (CSC10004) | 4 chặng | 82 nhiệm vụ | ~110h |
| **TRACK-3** | **Kiến trúc & Mạng Máy tính** | Hoàn thành xuất sắc môn Mạng máy tính (CSC10008) HK1 Năm 2: Mô hình 5 tầng TCP/IP, TCP 3-way handshake và 4-way termination, điều khiển luồng (Sliding Window), điều khiển tắc nghẽn (AIMD, Slow Start), socket programming đa luồng, message framing chống dính gói, chia mạng con CIDR subnetting, DNS, HTTP/1.1 vs HTTP/2 vs HTTP/3 và thực hành Wireshark. | Kiến trúc máy tính (CSC10007), Hệ điều hành (CSC10005), Mạng máy tính (CSC10008) | 3 chặng | 38 nhiệm vụ | ~85h |
| **TRACK-4** | **Toán Rời rạc & Xác suất Thống kê** | Tối ưu hóa điểm số môn Toán rời rạc & tổ hợp (MTH00040) và Xác suất Thống kê cho CNTT (MTH00041) HK1 Năm 2: Logic mệnh đề & vị từ, chứng minh quy nạp, hệ thức truy hồi, hàm sinh (Generating Functions), nguyên lý Dirichlet, Định lý Bayes, biến ngẫu nhiên và phân phối (Bernoulli, Poisson, Gaussian Normal), Định lý Giới hạn Trung tâm (CLT), MLE và kiểm định giả thuyết. | Toán rời rạc & tổ hợp (MTH00040), Xác suất thống kê cho CNTT (MTH00041), Đại số tuyến tính (MTH00030) | 2 chặng | 34 nhiệm vụ | ~80h |
| **TRACK-5** | **Công cụ & Kỹ thuật Thực chiến** | Bổ khuyết toàn diện Missing Semester: Git CLI chuyên nghiệp (phân nhánh, giải quyết xung đột merge, interactive rebase, stash, cherry-pick, PR workflow, Conventional Commits), Debugger GDB/LLDB/VS Code, diệt lỗi bộ nhớ với AddressSanitizer/Valgrind, POSIX shell & pipes, CMake đa mô-đun và tự động hóa CI/CD với GitHub Actions. | Thực hành Kỹ thuật Lập trình, Phương pháp Phát triển Phần mềm (CSC13001) | 3 chặng | 27 nhiệm vụ | ~65h |
| **TRACK-6** | **Sẵn sàng Chuyên ngành KHMT** | Chiến lược tối ưu CPA/GPA xét tuyển chuyên ngành KHMT cuối Năm 2: Hệ quản trị CSDL quan hệ (SQL, chuẩn hóa 1NF/2NF/3NF/BCNF, chỉ mục B-Tree, giao dịch ACID), Web RESTful API, Nhập môn AI & Machine Learning (NumPy, Scikit-learn, PyTorch cơ bản), Lý thuyết tính toán (Automata, P vs NP) và xây dựng 5 Capstone Projects portfolio chứng minh năng lực kỹ nghệ. | Hệ quản trị cơ sở dữ liệu (CSC10006), Nhập môn Trí tuệ Nhân tạo (CSC14001), Xét tuyển Chuyên ngành KHMT (Cuối Năm 2) | 12 chặng | 135 nhiệm vụ | ~120h |

---

## 5 Đồ án Thực hành Trọng điểm (Practical Capstone Mini-Projects)

Nhằm chuyển hóa lý thuyết thành kỹ năng kỹ nghệ phần mềm thực chiến, lộ trình tích hợp 5 đồ án capstone theo tiêu chuẩn công nghiệp và yêu cầu đồ án môn học HCMUS:

### Mini-Project 1: Game Arcade 2D Space Invaders / Battle City C++

- **Tiến trình phụ trách:** Track 1: Lập trình Hướng đối tượng & Thiết kế Phần mềm (Programming & OOP)
- **Mục tiêu sư phạm:** Làm chủ toàn diện các nguyên lý OOP, SOLID và GoF Design Patterns trên C++17; xóa bỏ hoàn toàn thói quen dùng con trỏ thô (raw pointer) sở hữu tài nguyên, đảm bảo an toàn bộ nhớ tuyệt đối bằng RAII.
- **Nhiệm vụ liên kết:** `oop-class`, `oop-inheritance`, `oop-virtual`, `oop-abstract`, `cpp-smart`, `oop-review`, `project-review`

**Phạm vi kỹ thuật:**
- Phân cấp lớp thực thể: Base class Entity với các phương thức thuần ảo update(float dt) = 0, render() = 0; các lớp con kế thừa Ship, Alien, Bullet, Obstacle.
- Quản lý vòng đời và bộ nhớ: Lưu trữ danh sách thực thể bằng std::vector<std::unique_ptr<Entity>> để tự động thu hồi tài nguyên, áp dụng Rule of Zero và virtual destructor ở lớp cha để ngăn rò rỉ vùng nhớ.
- Mẫu thiết kế (Design Patterns): Factory Pattern (AlienFactory sinh biến thể quái vật theo wave), Strategy Pattern (MovementStrategy: di chuyển zig-zag, di chuyển săn đuổi), Observer Pattern (ScoreManager & SoundManager lắng nghe sự kiện OnAlienDestroyed).
- Xử lý va chạm (Collision Detection) giữa Bullet và Alien/Obstacle dựa trên hình hộp bao AABB (Axis-Aligned Bounding Box).

**Tiêu chí kiểm chứng chất lượng (Verification Gates):**
- [ ] Biên dịch sạch với các cờ nghiêm ngặt: -Wall -Wextra -pedantic -std=c++17.
- [ ] Kiểm thử rò rỉ bộ nhớ với AddressSanitizer (-fsanitize=address,undefined): Chơi 30 phút liên tục, chuyển wave, thoát game đảm bảo 0 bytes leaked (0 memory leaks).
- [ ] Định dạng mã chuẩn theo Google C++ Style Guide hoặc clang-format.

### Mini-Project 2: Multi-threaded HTTP/1.1 Web Server & Socket Chat Server

- **Tiến trình phụ trách:** Track 3: Hệ thống Máy tính & Mạng Máy tính (Computer Systems & Networking)
- **Mục tiêu sư phạm:** Làm chủ lập trình mạng socket mức thấp (BSD POSIX Sockets / Winsock), hiểu sâu sắc cơ chế truyền byte stream của TCP, giải quyết triệt để vấn đề dính gói / phân mảnh và xử lý đồng thời đa luồng.
- **Nhiệm vụ liên kết:** `net-sockets`, `net-http`, `os-threads`, `os-synchronization`, `os-producer`, `net-review`, `net-service-project`

**Phạm vi kỹ thuật:**
- Giao thức tầng giao vận: Khởi tạo socket, bind, listen, accept, read/recv, write/send trên nền TCP.
- Phân tích cú pháp HTTP/1.1: Tự viết parser bóc tách Request Line (Method GET/POST, Path, Version), Request Headers (Host, Content-Type, Content-Length) và Request Body.
- Phục vụ tài nguyên tĩnh: Đọc file HTML, CSS, JS, ảnh PNG/JPEG và trả về Response với đúng Status Code (200 OK, 404 Not Found, 400 Bad Request) và MIME Content-Type.
- Đóng khung thông điệp (Message Framing): Với tính năng Chat Server, thiết kế nhị phân header có uint32_t payload_length + uint16_t msg_type để ngăn hiện tượng TCP Packet Coalescing / Fragmentation.
- Kiến trúc đồng thời: Dựng Thread Pool với hàng đợi tác vụ thread-safe (Task Queue) bảo vệ bởi std::mutex và std::condition_variable phục vụ hàng chục client đồng thời.

**Tiêu chí kiểm chứng chất lượng (Verification Gates):**
- [ ] Kiểm thử tải bằng Apache Bench: ab -n 1000 -c 20 http://localhost:8080/ đạt 100% requests thành công, không gặp deadlock hay crash.
- [ ] Kiểm tra ngắt kết nối đột ngột: Client đóng socket giữa chừng không làm server bị SIGPIPE hoặc crash.
- [ ] Bắt gói tin bằng Wireshark xác nhận đúng bắt tay 3 bước TCP SYN -> SYN-ACK -> ACK và đóng kết nối 4 bước FIN -> ACK.

### Mini-Project 3: Graph Routing Engine & Benchmarking (Hệ thống Tìm đường Thông minh)

- **Tiến trình phụ trách:** Track 2: Cấu trúc Dữ liệu & Giải thuật Cốt lõi (Algorithms & Data Structures)
- **Mục tiêu sư phạm:** Củng cố sâu sắc cấu trúc dữ liệu đồ thị, thành thạo các thuật toán tìm đường kinh điển và đo lường độ phức tạp tiệm cận trong thực tế (Benchmarking).
- **Nhiệm vụ liên kết:** `graph-bfs`, `graph-dijkstra`, `graph-kruskal`, `graph-shortest-review`, `graph-mst-practice`, `dsa-index-project`

**Phạm vi kỹ thuật:**
- Nạp dữ liệu bản đồ: Đọc file đồ thị thực tế (tọa độ các đỉnh V và danh sách cạnh có trọng số E biểu diễn mạng lưới giao thông).
- Cài đặt thuật toán từ đầu (From scratch): BFS cho đồ thị không trọng số; Dijkstra với Binary Min-Heap tự viết; A* với hàm Heuristic khoảng cách Euclid / Manhattan; Bellman-Ford phát hiện chu trình âm; Kruskal với DSU (Path Compression & Union by Rank) tìm cây khung nhỏ nhất (MST).
- Tối ưu hóa: So sánh hiệu năng giữa cấu trúc Danh sách kề (Adjacency List) và Ma trận kề (Adjacency Matrix) trên đồ thị thưa vs đồ thị dày.

**Tiêu chí kiểm chứng chất lượng (Verification Gates):**
- [ ] Benchmarking: Sinh đồ thị ngẫu nhiên từ 10^3 đến 10^5 đỉnh với mật độ cạnh khác nhau, đo thời gian thực thi (milliseconds) và lượng RAM tiêu thụ.
- [ ] Đối chiếu lý thuyết Big-O: Vẽ biểu đồ thời gian thực thi theo kích thước dữ liệu, so sánh đường cong thực nghiệm với O((V + E) log V).
- [ ] Kiểm thử độ chính xác: Xác nhận kết quả tìm đường khớp 100% với giải thuật tham chiếu trên các test case phức tạp.

### Mini-Project 4: Naive Bayes Spam Classifier & Monte Carlo Simulation

- **Tiến trình phụ trách:** Track 4: Cơ sở Toán học cho Khoa học Máy tính (Mathematical Foundations)
- **Mục tiêu sư phạm:** Chuyển hóa lý thuyết xác suất, Định lý Bayes và thống kê suy diễn thành ứng dụng Khoa học Dữ liệu / Trí tuệ Nhân tạo thực tế bằng Python.
- **Nhiệm vụ liên kết:** `prob-bayes`, `prob-random`, `prob-distributions`, `stats-sampling`, `math-synthesis`, `ml-linear`, `ml-metrics`, `ml-project`

**Phạm vi kỹ thuật:**
- Mô phỏng Monte Carlo: Lập trình mô phỏng quá trình tung xúc xắc và tổng biến ngẫu nhiên độc lập để kiểm chứng trực quan Định lý Giới hạn Trung tâm (CLT), vẽ biểu đồ Histogram hội tụ về đường cong Gaussian chuẩn N(mu, sigma^2).
- Bộ phân loại thư rác (Naive Bayes Classifier): Tiền xử lý văn bản (tokenization, lowercase, loại bỏ stopwords, tính tần suất từ).
- Mô hình xác suất: Ước lượng tiền nghiệm P(Spam), P(Ham) và hợp lý P(w_i|Spam), P(w_i|Ham).
- Kỹ thuật số học: Áp dụng Laplace smoothing (+1) tránh xác suất bằng 0 cho từ mới; tính toán trên thang Log-probability log P(C) + sum log P(w_i|C) để chống lỗi tràn số thực dưới (Underflow).

**Tiêu chí kiểm chứng chất lượng (Verification Gates):**
- [ ] Đánh giá trên bộ dữ liệu SMS Spam Collection dataset: Tính ma trận nhầm lẫn (Confusion Matrix), Accuracy, Precision, Recall và F1-Score.
- [ ] Đạt F1-Score >= 0.92 trên tập test độc lập.
- [ ] Kiểm thử phân loại thời gian thực: Nhập tin nhắn mới và đưa ra nhãn Spam/Ham kèm xác suất tin cậy hậu nghiệm (posterior probability).

### Mini-Project 5: Production-Ready C++ Project Scaffold & CI/CD Pipeline

- **Tiến trình phụ trách:** Track 5: Công cụ Phát triển & Kỹ thuật Kỹ nghệ (Developer Tooling & Engineering Practice)
- **Mục tiêu sư phạm:** Làm chủ quy trình kỹ thuật phần mềm hiện đại, sẵn sàng cho các đồ án lớn môn học tại HCMUS và môi trường kỹ nghệ tại các công ty công nghệ.
- **Nhiệm vụ liên kết:** `tools-shell`, `tools-build`, `tools-memory`, `git-first`, `git-branch`, `git-remote`, `se-collaboration`, `cap-quality`

**Phạm vi kỹ thuật:**
- Quản lý mã nguồn & Quy chuẩn Git: Khởi tạo Git repo với Feature Branch Workflow, Conventional Commits (feat, fix, refactor, test, docs).
- Git Hooks: Cấu hình pre-commit hook tự động chạy clang-format kiểm tra chuẩn mã hóa và chặn commit nếu vi phạm.
- Hệ thống Build hiện đại với CMake: Cấu hình CMakeLists.txt phân tầng đa thư mục: src/ (mã nguồn thư viện), include/ (header công khai), app/ (file main), tests/ (unit tests). Quản lý cờ biên dịch chuẩn (-Wall -Wextra -Werror -std=c++17 -O2).
- Unit Testing: Tích hợp Google Test (GTest) hoặc Catch2 viết bài kiểm thử tự động cho toàn bộ logic nghiệp vụ.
- Tự động hóa CI/CD: Viết workflow GitHub Actions (.github/workflows/ci.yml) tự động kích hoạt mỗi khi có Push hoặc Pull Request: kiểm tra format mã, biên dịch trên Ubuntu, chạy toàn bộ test suite, và chạy kiểm tra AddressSanitizer.

**Tiêu chí kiểm chứng chất lượng (Verification Gates):**
- [ ] Chạy cmake -B build -S . && cmake --build build hoàn thành không có cảnh báo nào.
- [ ] Chạy ctest trong thư mục build đạt 100% bài test pass.
- [ ] Tự tạo Pull Request trên GitHub và xác nhận badge build GitHub Actions chuyển màu xanh lá (All checks passed).

---

## Mục lục

### Track 0: Tư duy Lập trình & Mô hình Thực thi Máy tính (Computational Thinking & Execution Model) (2 chặng, 19 nhiệm vụ)
- 01. Tư duy lập trình và mô hình thực thi (12 nhiệm vụ)
- 04. Thiết kế hệ thống và đánh giá hiệu năng (7 nhiệm vụ)

### Track 1: Lập trình Hướng đối tượng & Thiết kế Phần mềm (Programming & OOP) (1 chặng, 20 nhiệm vụ)
- 02. Lập trình hướng đối tượng (20 nhiệm vụ)

### Track 2: Cấu trúc Dữ liệu & Giải thuật Cốt lõi (Algorithms & Data Structures) (4 chặng, 82 nhiệm vụ)
- 07. Cấu trúc dữ liệu (20 nhiệm vụ)
- 08. Tư duy và thuật toán cơ bản (24 nhiệm vụ)
- 09. Đồ thị và đường đi (28 nhiệm vụ)
- 10. Truy vấn, chuỗi và tổng hợp DSA (10 nhiệm vụ)

### Track 3: Hệ thống Máy tính & Mạng Máy tính (Computer Systems & Networking) (3 chặng, 38 nhiệm vụ)
- 12. Máy tính hoạt động như thế nào (13 nhiệm vụ)
- 13. Hệ điều hành và đồng thời (13 nhiệm vụ)
- 14. Mạng máy tính (12 nhiệm vụ)

### Track 4: Cơ sở Toán học cho Khoa học Máy tính (Mathematical Foundations) (2 chặng, 34 nhiệm vụ)
- 06. Toán rời rạc cho lập trình (12 nhiệm vụ)
- 11. Đại số tuyến tính, giải tích và xác suất (22 nhiệm vụ)

### Track 5: Công cụ Phát triển & Kỹ thuật Kỹ nghệ (Developer Tooling & Engineering Practice) (3 chặng, 27 nhiệm vụ)
- 03. Lưu và quản lý mã nguồn (6 nhiệm vụ)
- 05. Công cụ, Linux và cách tự học (9 nhiệm vụ)
- 18. Kỹ thuật phần mềm và làm việc nhóm (12 nhiệm vụ)

### Track 6: Định hướng & Sẵn sàng Chuyên ngành KHMT (CS Specialization Readiness) (12 chặng, 135 nhiệm vụ)
- 15. SQL và cơ sở dữ liệu (17 nhiệm vụ)
- 16. Python để làm công cụ và xử lý dữ liệu (11 nhiệm vụ)
- 17. Web và API cho sản phẩm đầu tiên (12 nhiệm vụ)
- 19. Lý thuyết tính toán và ngôn ngữ lập trình (12 nhiệm vụ)
- 20. Bảo mật ứng dụng (10 nhiệm vụ)
- 21. Đồ họa, giao diện và khả năng tiếp cận (8 nhiệm vụ)
- 22. Nền tảng AI và Machine Learning (20 nhiệm vụ)
- 23. Hệ phân tán và thiết kế hệ thống (12 nhiệm vụ)
- 24. Trách nhiệm nghề nghiệp và đọc nghiên cứu (6 nhiệm vụ)
- 25. Chọn hướng chuyên sâu có căn cứ (7 nhiệm vụ)
- 26. Đồ án lớn có người dùng và bằng chứng (10 nhiệm vụ)
- 27. Thực tập, phỏng vấn và phát triển nghề (10 nhiệm vụ)

---

# Nội dung Chi tiết Lộ trình Học tập (Roadmap Content)

# Track 0: Tư duy Lập trình & Mô hình Thực thi Máy tính (Computational Thinking & Execution Model)

> **Mục tiêu:** Làm chủ mô hình thực thi mã nguồn, bản đồ bộ nhớ vật lý Stack vs Heap, bản chất địa chỉ ô nhớ và con trỏ, tư duy trừu tượng hóa dữ liệu (ADT), chi phí khấu hao mảng động, tư duy đệ quy và quy nạp, bất biến vòng lặp, và phương pháp gỡ lỗi khoa học.
> **Môn học HCMUS:** Nhập môn lập trình (CSC10001) · Kỹ thuật lập trình (CSC10002) | **Thời lượng ước tính:** ~60 giờ

## 01. Tư duy lập trình và mô hình thực thi

### 001 · Tư duy phân tích bài toán và ca biên

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Thiết lập phản xạ 3 pha: Tiền điều kiện (Preconditions) -> Xử lý bất biến -> Hậu điều kiện (Postconditions). Thiết lập phản xạ 3 pha khi tiếp cận bài toán: Tiền điều kiện (Preconditions) -> Xử lý bảo toàn bất biến -> Hậu điều kiện (Postconditions).
- [ ] Thiết kế bộ dữ liệu thử ca biên trước khi viết mã: Tập rỗng, 1 phần tử, cực trị miền số nguyên, mảng toàn số âm. Thiết kế bộ dữ liệu thử ca biên trước khi viết mã: Tập rỗng, 1 phần tử, cực trị miền số nguyên, mảng toàn số âm, mảng toàn số bằng nhau.
- [ ] Phân tích chi phí tính toán: Phân biệt giải thuật tối ưu O(N) quét 1 lần với các giải pháp dư thừa; loại bỏ hoàn toàn biến toàn cục để triệt tiêu hiệu ứng phụ. Phân tích chi phí tính toán: Phân biệt giải thuật tối ưu O(N) quét 1 lần với các giải pháp lặp lồng nhau dư thừa; loại bỏ hoàn toàn biến toàn cục để triệt tiêu hiệu ứng phụ (side effects).
- [ ] Ghi lại các giả định ngầm của bài toán và kiểm chứng độc lập xem giả định có luôn đúng trong mọi trường hợp hay không.
- [ ] Không nhìn mã cũ, đổi riêng yêu cầu tính tổng thành tổng các số không âm, giữ cách tìm max ban đầu. Sửa hàm tính tổng rồi giải thích vì sao các hàm còn lại không cần đổi; nếu cần gợi ý, ghi đúng mục cần ôn, không đánh dấu cả chặng đã vững.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 1 C++ Basics và 4 Fundamental Data Types; ưu tiên khởi tạo, giới hạn kiểu và undefined behavior.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 002 · Mô hình thực thi: Từ mã nguồn đến mã máy

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Hiểu chuỗi biên dịch: Preprocessor -> Compiler (AST/Assembly) -> Assembler -> Linker. Nắm vững chuỗi biến đổi mã nguồn: Preprocessor (xử lý chỉ thị tiền xử lý) -> Compiler (phân tích cú pháp AST, sinh mã hợp ngữ) -> Assembler (sinh mã máy Object) -> Linker (liên kết thư viện tạo file thực thi).
- [ ] Phân biệt 3 loại lỗi bản chất: Lỗi biên dịch (Compile-time), Lỗi liên kết (Linker: thiếu định nghĩa hàm/thư viện), Lỗi thực thi (Runtime: Segfault, chia 0, tràn stack). Phân biệt bản chất 3 loại lỗi: Lỗi cú pháp/biên dịch (Compile-time), Lỗi liên kết (Linker: thiếu định nghĩa hàm/thư viện), Lỗi thực thi (Runtime: Segfault, chia cho 0, tràn stack).
- [ ] Hiểu tác động của các cờ tối ưu hóa (-O2, -O3): Inlining hàm, loại bỏ mã chết và tối ưu hóa vòng lặp. Hiểu tác động của các cờ tối ưu hóa của trình biên dịch (-O2, -O3): Inlining hàm, loại bỏ mã chết (dead code elimination) và tối ưu hóa vòng lặp.
- [ ] Tách biệt môi trường phát triển (Debug mode: giữ ký hiệu gỡ lỗi, kiểm tra biên) và môi trường phát hành (Release mode: tối ưu tốc độ tối đa).

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 0: compiler/linker, compiling, warning level và language standard.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 003 · Biểu diễn dữ liệu nhị phân và số học máy tính

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Bản chất số nguyên có dấu: Bù 2 (Two's Complement) và hiểm họa Undefined Behavior khi tràn số nguyên có dấu. Bản chất số nguyên có dấu: Cơ chế Bù 2 (Two's Complement) và hiểm họa Undefined Behavior (UB) khi tràn số nguyên có dấu; phân biệt với phép quay vòng (wrap-around) của số không dấu.
- [ ] Bản chất số thực IEEE 754: Mantissa, Exponent và sai số làm tròn; tuyệt đối không so sánh bằng == mà dùng khoảng sai số epsilon. Bản chất số thực IEEE 754: Phân tách Sign, Exponent, Mantissa và hiểu sai số làm tròn (rounding error); tuyệt đối không so sánh hai số thực bằng toán tử == mà dùng khoảng sai số epsilon |a - b| < eps.
- [ ] Đánh đổi không gian và độ chính xác (Space-Precision Tradeoff): Khi nào bắt buộc dùng số 64-bit để tránh tràn số thuật toán. Đánh đổi không gian và độ chính xác (Space-Precision Tradeoff): Nhận biết giới hạn 32-bit (khoảng 2*10^9) để chủ động chọn kiểu 64-bit trong các bài toán tích lũy, lũy thừa, tổng mảng.
- [ ] Tránh lỗi ép kiểu pha trộn (mixed signed/unsigned comparison) khi so sánh chỉ số nguyên với kích thước container (size_t).

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 1 C++ Basics và 4 Fundamental Data Types; ưu tiên khởi tạo, giới hạn kiểu và undefined behavior.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 004 · Bất biến vòng lặp và luồng điều khiển

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Thiết kế vòng lặp bằng phương pháp Bất biến vòng lặp (Loop Invariant): Khởi đầu, Bảo toàn, Kết thúc. Thiết kế vòng lặp bằng phương pháp Bất biến vòng lặp (Loop Invariant): Chứng minh thuật toán đúng bằng 3 bước: Khởi đầu (Initialization), Bảo toàn (Maintenance), và Kết thúc (Termination).
- [ ] Chứng minh tính dừng của giải thuật: Ngăn chặn triệt để vòng lặp vô tận (Infinite Loop) trong các bước nhảy chia đôi. Chứng minh tính dừng của giải thuật: Xác định đại lượng suy giảm nghiêm ngặt (Monotonic Variant) sau mỗi bước lặp để ngăn chặn triệt để vòng lặp vô tận.
- [ ] Tư duy xử lý dữ liệu theo luồng (Data Streaming / Online Algorithm): Xử lý tuần tự không cần nạp toàn bộ vào bộ nhớ. Tư duy xử lý dữ liệu theo luồng (Data Streams / Online Processing): Cập nhật kết quả tức thì (Running Min/Max/Avg) với bộ nhớ O(1) mà không cần lưu trữ toàn bộ dữ liệu vào RAM.
- [ ] Tách biệt điều kiện dừng thuật toán khỏi điều kiện kiểm tra tính hợp lệ của từng phần tử dữ liệu.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 8 Control Flow và 9 Error Detection and Handling: if, loop, kiểm tra đầu vào.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 005 · Bộ nhớ tuyến tính và tính cục bộ (Locality)

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Bản chất mảng vật lý: Các ô nhớ liên tục trong RAM, truy xuất ngẫu nhiên O(1) qua công thức base + i * sizeof(T). Bản chất mảng vật lý trong kiến trúc máy tính: Khối ô nhớ liên tục trong RAM, truy xuất ngẫu nhiên O(1) thông qua phép tính địa chỉ trực tiếp base + i * sizeof(T).
- [ ] Nguyên lý Tính cục bộ của bộ nhớ (Locality of Reference): CPU Cache Line (64 bytes) và lý do duyệt mảng tuần tự nhanh gấp 10 lần duyệt ngẫu nhiên. Nguyên lý Tính cục bộ của bộ nhớ (Locality of Reference): Hiểu cơ chế CPU Cache Line (64 bytes); tại sao duyệt mảng tuần tự nhanh gấp nhiều lần duyệt nhảy cóc hoặc danh sách liên kết.
- [ ] Kỹ thuật biến đổi tại chỗ (In-place Transformation) với không gian bộ nhớ O(1). Kỹ thuật biến đổi mảng tại chỗ (In-place Transformation): Đảo ngược mảng bằng 2 con trỏ đối xứng với không gian bộ nhớ phụ O(1).
- [ ] Tư duy ranh giới mảng: Hiểu nguyên nhân gây lỗi Segmentation Fault và tràn bộ đệm (Buffer Overflow) khi truy cập chỉ số ngoài khoảng [0, N-1].

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 16 Dynamic arrays: chỉ số, duyệt và kích thước; đối chiếu thêm phần C-style arrays nếu đang dùng mảng thuần.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 006 · Mô hình khung hàm (Stack Frame) và truyền tham số

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Hiểu bản chất cuộc gọi hàm trong máy tính: Khung hàm Stack Frame, lưu thanh ghi, địa chỉ trả về (Return address) và con trỏ khung. Mô hình Khung hàm (Stack Frame) trong kiến trúc máy tính: Cơ chế cấp phát vùng nhớ cục bộ, lưu trữ thanh ghi, địa chỉ trả về (Return address) và con trỏ khung (Base pointer).
- [ ] Phân biệt Pass-by-Value vs Pass-by-Reference dưới góc nhìn phần cứng: Truyền tham chiếu thực chất là truyền địa chỉ ô nhớ qua thanh ghi, tương đương con trỏ hằng T* const. Bản chất Pass-by-Value vs Pass-by-Reference: Truyền tham chiếu thực chất là truyền địa chỉ ô nhớ qua thanh ghi CPU (tương đương con trỏ hằng T* const), loại bỏ hoàn toàn chi phí sao chép đối tượng lớn.
- [ ] Bất biến tham chiếu hằng (const T&): Bảo vệ dữ liệu chỉ đọc, ngăn chặn hiệu ứng phụ và cho phép liên kết an toàn với giá trị tạm thời (rvalue). Bất biến tham chiếu hằng (const T&): Bảo vệ dữ liệu chỉ đọc, ngăn chặn hiệu ứng lề (Side effects) ngoài ý muốn và cho phép liên kết an toàn với giá trị tạm thời (rvalue).
- [ ] Hiểm họa tham chiếu treo (Dangling Reference): Chứng minh vì sao trả về tham chiếu tới biến cục bộ trên stack là lỗi chí tử làm sập chương trình.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 2 Functions and Files và 12 Compound Types: truyền giá trị, tham chiếu, const reference; làm quiz cuối chương theo đúng phần đã học.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 007 · Tư duy mô-đun hóa và phân tách trách nhiệm

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Phân tách dứt điểm hàm thuần túy (Pure Function: nhận input, tính toán, trả output) khỏi hàm Nhập/Xuất (I/O). Tư duy Mô-đun hóa: Phân tách triệt để hàm thuần túy (Pure Function: chỉ nhận input, tính toán, trả output, không có side-effect) khỏi hàm giao tiếp Nhập/Xuất (I/O).
- [ ] Thiết kế giao diện hàm (Contract): Định nghĩa rõ ràng tiền điều kiện hợp lệ của tham số, xử lý an toàn khi danh sách rỗng (tránh chia cho 0). Thiết kế Hợp đồng Giao diện Hàm (Function Contract): Định nghĩa rõ ràng tiền điều kiện hợp lệ của tham số, phản hồi an toàn khi tập dữ liệu rỗng (ngăn chặn lỗi chia cho 0).
- [ ] Xây dựng tư duy kiểm thử tự động (Unit Testable): Tách biệt logic tính toán để kiểm thử hàng loạt ca biên mà không phụ thuộc bàn phím. Tư duy Kiểm thử Tự động (Unit Testable Architecture): Khi logic tính toán tách rời bàn phím, có thể viết test tự động chạy hàng trăm ca biên trong 1 mili-giây.
- [ ] Tái cấu trúc mã nguồn (Refactoring): Loại bỏ các khối logic lặp lại (DRY - Don't Repeat Yourself), gom nhóm các tham số liên quan thành cấu trúc dữ liệu nhất quán.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 2 Functions and Files và 12 Compound Types: truyền giá trị, tham chiếu, const reference; làm quiz cuối chương theo đúng phần đã học.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 008 · Cơ chế mảng động và chi phí khấu hao

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Bản chất bên trong của mảng động (std::vector): 3 con trỏ quản lý vùng nhớ (Start, Finish, End of Storage) tương ứng với Size và Capacity. Bản chất bên trong của Mảng động (Dynamic Array): 3 con trỏ quản lý vùng nhớ (Start, Finish, End of Storage) tương ứng với Size (kích thước thực) và Capacity (dung lượng cấp phát).
- [ ] Chứng minh chiến lược nhân đôi dung lượng (Capacity Doubling): Vì sao mở rộng gấp đôi cho chi phí trung bình khấu hao O(1) amortized, trong khi tăng thêm 1 phần tử lại suy biến thành O(N^2). Chứng minh toán học Chiến lược Nhân đôi Dung lượng (Capacity Doubling): Vì sao mở rộng 2x giúp chi phí thêm phần tử trung bình đạt O(1) khấu hao (Amortized O(1)), trong khi tăng từng phần tử lại suy biến thành O(N^2).
- [ ] Hiểm họa vô hiệu hóa con trỏ và tham chiếu (Pointer/Iterator Invalidation): Vùng nhớ cũ bị hủy khi vector tái cấp phát; nguyên tắc quản lý chỉ số an toàn. Hiểm họa Vô hiệu hóa Con trỏ/Tham chiếu (Pointer/Iterator Invalidation): Khi vector tái cấp phát vùng nhớ mới, toàn bộ địa chỉ cũ bị hủy; cách phòng tránh con trỏ treo.
- [ ] Sử dụng mảng động an toàn: Phân biệt kiểm tra biên chủ động với truy xuất chỉ số trực tiếp; tư duy đặt trước dung lượng (reserve) để triệt tiêu chi phí cấp phát lại.

**Thông tin thêm & Lưu ý bản chất:**

Mảng động mở rộng bằng cách cấp phát vùng nhớ mới gấp đôi và chuyển dữ liệu sang. Không giả định địa chỉ phần tử luôn giữ nguyên.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 5: std::string; chương 16: std::vector, thêm/xóa và giới hạn chỉ số.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 009 · Bản chất địa chỉ ô nhớ và con trỏ

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Bản chất con trỏ trong máy tính: Biến số nguyên 64-bit lưu địa chỉ một byte trong không gian nhớ phẳng của tiến trình. Con trỏ dưới góc nhìn phần cứng: Không có gì thần bí, chỉ là một biến số nguyên 64-bit lưu địa chỉ một byte trong không gian nhớ phẳng của tiến trình.
- [ ] Ba thảm họa quản lý bộ nhớ kinh điển: Dangling Pointer (con trỏ treo), Memory Leak (rò rỉ bộ nhớ), và Double Free (giải phóng hai lần). Ba thảm họa quản lý bộ nhớ kinh điển: Dangling Pointer (con trỏ treo), Memory Leak (rò rỉ bộ nhớ), và Double Free (giải phóng hai lần).
- [ ] Mô hình quyền sở hữu (Ownership Mental Model): Phân biệt rõ người tạo vùng nhớ (owner), người mượn đọc tạm (observer), và trách nhiệm giải phóng tài nguyên. Mô hình Quyền sở hữu (Ownership Mental Model): Phân định dứt khoát đối tượng sở hữu vùng nhớ (Owner), đối tượng mượn tạm để quan sát (Observer), và thời điểm thu hồi tài nguyên.
- [ ] Phân biệt con trỏ null (nullptr - địa chỉ 0 an toàn để kiểm tra) với con trỏ chưa khởi tạo (chứa giá trị rác ngẫu nhiên).

**Thông tin thêm & Lưu ý bản chất:**

Thời gian sống là khoảng thời gian đối tượng còn tồn tại và được phép sử dụng. Tránh truy cập đối tượng đã bị hủy. Bản chất vùng nhớ & con trỏ: Địa chỉ ô nhớ (Hexadecimal), giá trị, và kích thước con trỏ (8 bytes trên hệ thống 64-bit). Phân biệt const int* p (giá trị hằng) vs int* const p (địa chỉ hằng). Tuyệt đối không trả về tham chiếu/con trỏ tới biến cục bộ trên Stack vì vùng nhớ đó sẽ bị thu hồi ngay khi hàm kết thúc frame.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 12: references,pointers,null và dangling pointers; chưa học cả pointer arithmetic ở vòng này.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.
- [Offline Guide: Bản chất Vùng nhớ, Con trỏ & RAII](./docs/guides/01-MEMORY-POINTERS-RAII.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về bản chất vùng nhớ, con trỏ và nguyên lý RAII.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 010 · Phương pháp gỡ lỗi khoa học và cô lập lỗi

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Quy trình gỡ lỗi 4 bước khoa học: Tái hiện ca tối thiểu -> Đặt giả thuyết -> Chặt nhị phân không gian tìm kiếm qua Call Stack -> Kiểm chứng giả thuyết. Quy trình Gỡ lỗi Khoa học 4 bước: (1) Thu nhỏ trường hợp gây lỗi thành ca tối thiểu (Minimal Reproducible Example) -> (2) Đặt giả thuyết về nguyên nhân gốc rễ -> (3) Chặt nhị phân không gian tìm kiếm -> (4) Kiểm chứng và viết test hồi quy.
- [ ] Kỹ năng đọc Call Stack (Ngăn xếp cuộc gọi) và Frame Variables: Hiểu cách chương trình đi tới điểm crash (Segmentation Fault). Kỹ năng đọc Call Stack (Ngăn xếp cuộc gọi): Lần ngược chuỗi gọi hàm để xác định chính xác ngữ cảnh và đường đi dẫn tới điểm crash.
- [ ] Sử dụng công cụ giám sát bộ nhớ (AddressSanitizer) để tự động bắt lỗi tràn biên mảng và truy cập vùng nhớ đã giải phóng. Sử dụng công cụ giám sát bộ nhớ (AddressSanitizer): Tự động phát hiện lỗi tràn biên mảng (heap/stack buffer overflow) và truy cập vùng nhớ sau khi giải phóng (use-after-free).
- [ ] Gỡ lỗi dựa trên bằng chứng: Kiểm tra biến tại các mốc then chốt thay vì đoán mò hoặc in log bừa bãi.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 3 Debugging: stepping,breakpoints,watch và call stack.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 011 · Tư duy bền vững dữ liệu và luồng I/O

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Bản chất I/O: Tách biệt bộ nhớ RAM (biến động, tốc độ nano giây) với Ổ cứng/Disk (bền vững, tốc độ micro/mili giây qua hệ điều hành). Bản chất của I/O: Tách biệt bộ nhớ RAM (biến động, tốc độ nano giây) với Ổ cứng/Disk (bền vững, tốc độ micro/mili giây qua hệ điều hành).
- [ ] Cơ chế vùng đệm (I/O Buffering): Tại sao hệ điều hành đọc/ghi theo khối (4KB/8KB) thay vì từng byte; tác động của thao tác flush. Cơ chế Vùng đệm I/O (Buffering): Tại sao hệ điều hành đọc/ghi theo khối (4KB/8KB) thay vì từng byte; tác động của thao tác flush đối với hiệu năng và an toàn dữ liệu.
- [ ] Thiết kế định dạng dữ liệu và xử lý lỗi hỏng tệp (Data Corruption Handling): Đọc vào cấu trúc tạm và kiểm tra toàn vẹn trước khi cập nhật trạng thái. Thiết kế Định dạng Dữ liệu & Tính Bền vững: Đọc dữ liệu vào vùng nhớ tạm, kiểm tra toàn vẹn cấu trúc trước khi cập nhật trạng thái hệ thống.
- [ ] Xử lý lỗi hỏng tệp (Data Corruption): Phát hiện dữ liệu thiếu trường hoặc sai định dạng; dừng an toàn và thông báo vị trí lỗi thay vì âm thầm ghi đè làm mất dữ liệu gốc.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 28 Input and Output: file I/O, trạng thái stream và lỗi mở/đọc tệp.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 012 · Mô hình hóa thực thể và thiết kế hệ thống dữ liệu

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Mô hình hóa thực thể: Tổ chức dữ liệu dựa trên các thuộc tính bất biến và khóa định danh duy nhất (Unique Identifier). Tư duy Mô hình hóa Thực thể: Trừu tượng hóa đối tượng thế giới thực thành cấu trúc dữ liệu với các thuộc tính bất biến và khóa định danh duy nhất (Unique ID).
- [ ] Tách biệt 3 tầng kiến trúc độc lập: Tầng Dữ liệu (Data Model) <-> Tầng Nghiệp vụ (Business Rules) <-> Tầng Giao tiếp (I/O Interface). Kiến trúc 3 tầng phân tách trách nhiệm: Tầng Dữ liệu (Data Model) <-> Tầng Nghiệp vụ cốt lõi (Business Logic) <-> Tầng Giao tiếp (I/O Interface).
- [ ] Kiểm tra toàn vẹn trạng thái (State Integrity): Đảm bảo hệ thống không bao giờ rơi vào trạng thái nửa vời khi một thao tác gặp lỗi. Bảo vệ Tính toàn vẹn Trạng thái (State Integrity Invariant): Mọi thao tác biến đổi dữ liệu phải đảm bảo trạng thái hệ thống luôn hợp lệ; nếu một bước thất bại phải hoàn tác (Rollback) an toàn.
- [ ] Đóng gói logic nghiệp vụ: Giữ các quy tắc kiểm tra (như kiểm tra trùng mã, kiểm tra ràng buộc) độc lập hoàn toàn với việc nhập xuất dữ liệu.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 28 Input and Output: file I/O, trạng thái stream và lỗi mở/đọc tệp.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

## 04. Thiết kế hệ thống và đánh giá hiệu năng

### 039 · Phân tích yêu cầu kỹ thuật và ranh giới hệ thống

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Xác định ranh giới hệ thống: Liệt kê các bất biến nghiệp vụ bắt buộc phải bảo vệ (ví dụ: một tài nguyên không thể ở hai trạng thái mâu thuẫn). Xác định ranh giới hệ thống: Liệt kê các bất biến nghiệp vụ bắt buộc phải bảo vệ (một tài nguyên không thể đồng thời ở hai trạng thái xung đột).
- [ ] Lập ma trận thao tác: Đầu vào, kết quả mong đợi, và các tình huống từ chối hợp lệ (trùng mã, không tồn tại, trạng thái xung đột). Lập ma trận thao tác: Đầu vào, kết quả mong đợi, và các tình huống từ chối hợp lệ (trùng mã, không tồn tại, trạng thái xung đột).
- [ ] Quy định rõ phạm vi phiên bản đầu: Tập trung vào tính đúng đắn của logic cốt lõi trước khi thêm tính năng phức tạp. Thiết kế kiến trúc hệ thống 3 tầng phân tách trách nhiệm rõ rệt: Tầng Dữ liệu (Data Model) <-> Tầng Nghiệp vụ cốt lõi (Business Logic) <-> Tầng Giao tiếp (I/O).
- [ ] Quy định rõ phạm vi phiên bản đầu: Tập trung vào tính đúng đắn của logic cốt lõi trước khi mở rộng tính năng phức tạp.

### 040 · Thiết kế mô hình thực thể và quan hệ dữ liệu

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Thiết kế các thực thể độc lập và quan hệ liên kết qua mã định danh, không dùng chỉ số mảng làm khóa định danh lâu dài. Thiết kế các thực thể độc lập và quan hệ dữ liệu liên kết qua khóa định danh duy nhất (Unique ID), không dùng chỉ số mảng làm khóa định danh lâu dài.
- [ ] Xác lập Nguồn chân lý duy nhất (Single Source of Truth) cho từng trạng thái, ngăn chặn hiện tượng dữ liệu mâu thuẫn ở hai nơi. Xác lập Nguồn chân lý duy nhất (Single Source of Truth - SSOT) cho từng trạng thái, ngăn chặn hiện tượng dữ liệu mâu thuẫn ở hai nơi.
- [ ] Tách biệt triệt để quy tắc nghiệp vụ khỏi giao diện hiển thị, đảm bảo logic có thể chạy độc lập không cần nhập xuất bàn phím. Tách biệt triệt để quy tắc nghiệp vụ khỏi giao diện hiển thị, đảm bảo toàn bộ logic có thể chạy độc lập và kiểm thử tự động không cần bàn phím.
- [ ] Xây dựng cơ chế khôi phục trạng thái (State Rollback): Đảm bảo khi một thao tác nhiều bước bị gián đoạn, dữ liệu không bao giờ bị rơi vào trạng thái nửa vời.

### 041 · Kiến trúc điều phối luồng dữ liệu

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Xây dựng kiến trúc điều phối tuần tự: Tiếp nhận yêu cầu -> Kiểm tra tính hợp lệ -> Kích hoạt nghiệp vụ -> Phản hồi kết quả rõ ràng. Xây dựng kiến trúc điều phối tuần tự: Tiếp nhận yêu cầu -> Xác thực dữ liệu đầu vào (Validation) -> Kích hoạt nghiệp vụ -> Phản hồi kết quả rõ ràng.
- [ ] Phân biệt rõ 3 trạng thái phản hồi: Thành công, Không tìm thấy, và Bị từ chối kèm nguyên nhân kỹ thuật cụ thể. Phân biệt rõ ràng 3 trạng thái phản hồi: Thành công, Không tìm thấy, và Bị từ chối kèm nguyên nhân kỹ thuật cụ thể.
- [ ] Xử lý dữ liệu đầu vào bất thường một cách an toàn mà không làm sập hoặc treo luồng xử lý của hệ thống. Xử lý dữ liệu đầu vào bất thường một cách an toàn mà không làm sập hoặc treo luồng xử lý của hệ thống.
- [ ] Tách biệt hoàn toàn luồng điều phối (Controller) khỏi phần hiển thị kết quả (View), giúp hệ thống dễ dàng thay thế giao diện (Console, Web API, Test Suite).

### 042 · Cơ chế lưu trữ bền vững nguyên tử và khôi phục

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Thiết kế cơ chế ghi tệp nguyên tử (Atomic Write): Ghi sang tệp tạm rồi hoán đổi tệp để tránh hỏng dữ liệu khi mất nguồn giữa chừng. Thiết kế cơ chế ghi tệp nguyên tử (Atomic Write): Ghi sang tệp tạm (.tmp) rồi thực hiện thao tác hoán đổi tên tệp (Atomic Rename) để tránh hỏng dữ liệu khi mất nguồn giữa chừng.
- [ ] Đọc và khôi phục toàn vẹn dữ liệu: Nạp toàn bộ vào vùng nhớ tạm, kiểm tra tính toàn vẹn quan hệ trước khi ghi đè trạng thái đang chạy. Đọc và khôi phục toàn vẹn dữ liệu: Nạp toàn bộ vào vùng nhớ tạm, kiểm tra tính toàn vẹn quan hệ trước khi ghi đè trạng thái đang chạy.
- [ ] Xử lý lỗi hỏng dữ liệu: Báo rõ dòng và vị trí lỗi, dừng an toàn thay vì âm thầm ghi đè làm mất dữ liệu gốc. Xử lý lỗi hỏng dữ liệu (Data Corruption): Báo rõ dòng và vị trí lỗi, dừng an toàn thay vì âm thầm ghi đè làm mất dữ liệu gốc.
- [ ] Hiểu cơ chế đồng bộ hóa I/O: Tác động của bộ đệm hệ điều hành và cách sử dụng thao tác đồng bộ xuống đĩa cứng (fsync/flush) để đảm bảo độ bền dữ liệu.

### 043 · Chiến lược kiểm thử tự động và ca biên

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Xây dựng bộ kiểm thử ca biên tự động: Dữ liệu rỗng, dữ liệu cực trị, thao tác trùng lặp và thao tác sai thứ tự logic. Xây dựng bộ kiểm thử ca biên tự động: Dữ liệu rỗng, dữ liệu cực trị, thao tác trùng lặp và thao tác sai thứ tự logic.
- [ ] Kiểm tra tính nhất quán: Chạy chuỗi thao tác ngẫu nhiên và đối chiếu trạng thái hệ thống với mô hình kiểm chứng độc lập. Kiểm tra tính nhất quán hệ thống: Chạy chuỗi thao tác ngẫu nhiên (Fuzzing) và đối chiếu trạng thái hệ thống với mô hình kiểm chứng độc lập.
- [ ] Ghi lại trường hợp tối thiểu gây lỗi (Minimal Failing Case) để khoanh vùng và sửa chữa tận gốc rễ. Ghi lại trường hợp tối thiểu gây lỗi (Minimal Failing Case) để khoanh vùng và sửa chữa tận gốc rễ.
- [ ] Đo đạc độ bao phủ kiểm thử (Test Coverage) và đảm bảo 100% các nhánh xử lý lỗi nghiệp vụ đều có ca thử tương ứng.

### 044 · Đo lường hiệu năng và tính cục bộ bộ nhớ

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Thiết kế kịch bản đo đạc tài nguyên: Đo thời gian thực thi và dung lượng bộ nhớ khi kích thước dữ liệu tăng từ 10^2 đến 10^5. Thiết kế kịch bản đo đạc tài nguyên: Đo thời gian thực thi và dung lượng bộ nhớ khi kích thước dữ liệu tăng từ 10^2 đến 10^5 phần tử.
- [ ] Đánh giá tính cục bộ của bộ nhớ (Memory Locality): So sánh chi phí lưu trữ liên tục trên mảng vs cấp phát rời rạc trên heap. Đánh giá tính cục bộ của bộ nhớ (Memory Locality): So sánh chi phí lưu trữ liên tục trên mảng vs cấp phát rời rạc trên heap để quan sát hiệu ứng CPU Cache Hit/Miss.
- [ ] Viết tài liệu kiến trúc kỹ thuật: Ghi rõ quyết định thiết kế, các đánh đổi kỹ thuật (Trade-offs) và giới hạn hoạt động của hệ thống. Viết tài liệu kiến trúc kỹ thuật: Ghi rõ quyết định thiết kế, các đánh đổi kỹ thuật (Trade-offs) và giới hạn hoạt động của hệ thống.
- [ ] Đảm bảo dự án có thể biên dịch và chạy độc lập từ checkout sạch mà không phụ thuộc đường dẫn tuyệt đối của máy cá nhân.

### 045 · Tái cấu trúc theo nguyên lý thiết kế phần mềm sạch

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Tư duy Lập trình & Mô hình Thực thi (`track-0`)

**Việc cần làm:**

- [ ] Thêm tìm kiếm sách theo một phần tên mà không phá chức năng tìm theo mã. Đánh giá lại sự phân tách trách nhiệm giữa các mô-đun: Giảm độ phụ thuộc (Loose Coupling) và tăng tính gắn kết (High Cohesion).
- [ ] Tự lần theo đường đi từ menu tới dữ liệu trước khi sửa. Thử nghiệm mở rộng tính năng mới (ví dụ: thêm cơ chế chỉ mục tra cứu) mà không phải sửa đổi mã nguồn các mô-đun đã ổn định (Open/Closed Principle).
- [ ] Chạy lại bảng tình huống kiểm thử và đọc git diff trước khi commit. Chạy lại toàn bộ bộ kiểm thử tự động để bảo đảm không phát sinh lỗi hồi quy (Regression Bugs) sau khi tái cấu trúc.
- [ ] Ghi lại phần còn yếu để ôn; tiếp tục công cụ, toán rời rạc rồi cấu trúc dữ liệu. Đúc kết bài học kỹ thuật: Phân tích các quyết định thiết kế đã phải thay đổi trong quá trình phát triển và lý do kỹ thuật đằng sau.
- [ ] Đưa README cho một người khác dựng và chạy thử; tự xử lý một lỗi họ tái hiện được. Lưu commit trước/sau và test ngăn lỗi quay lại.

# Track 1: Lập trình Hướng đối tượng & Thiết kế Phần mềm (Programming & OOP)

> **Mục tiêu:** Nắm chắc điểm 10 môn OOP (CSC10003) HK1 Năm 2: 4 tính chất cốt lõi (Đóng gói, Kế thừa, Đa hình, Trừu tượng), cơ chế bảng hàm ảo vtable/vptr, virtual destructor ở lớp cha, nạp chồng toán tử an toàn, nguyên lý SOLID và GoF Design Patterns (Factory, Strategy, Observer, Singleton).
> **Môn học HCMUS:** Lập trình hướng đối tượng (CSC10003) | **Thời lượng ước tính:** ~70 giờ

## 02. Lập trình hướng đối tượng

### 013 · Tự kiểm tra trước chặng OOP

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Làm các mục sau trước khi mở lời giải cũ. Ghi từng mục: tự làm được / cần gợi ý / chưa học; không cộng thành điểm đoán mức giỏi chung.
- [ ] Viết hàm sửa tên một sách qua tham chiếu và dự đoán sự khác biệt nếu truyền bằng giá trị.
- [ ] Dùng vector chứa ba cuốn sách, tìm theo mã và xử lý mã không tồn tại mà không truy cập sai chỉ số.
- [ ] Nếu đã học lớp: tự viết lớp Sach có dữ liệu private và hàm cập nhật tên; nếu chưa học, ghi chưa học rồi bắt đầu ô Lớp, đối tượng và đóng gói.
- [ ] Sau khi thử, chỉ ôn lại mục chưa tự làm được theo các liên kết bên dưới. Chưa học là điểm bắt đầu bình thường; không tự đánh dấu cả chặng hoàn thành và không cần làm lại toàn bộ kho 28tech.

**Ô cần ôn theo kết quả kiểm tra:**

- [ ] 006 · Mô hình khung hàm (Stack Frame) và truyền tham số (`cpp-functions`)
- [ ] 008 · Cơ chế mảng động và chi phí khấu hao (`cpp-containers`)
- [ ] 014 · Lớp, đối tượng và đóng gói (`oop-class`)

**Thông tin thêm & Lưu ý bản chất:**

Bài tự kiểm tra để chọn điểm ôn, không có chấm tự động. Code cũ chỉ mở sau lượt thử; khi đã tự làm được một mục, vẫn kiểm tra bằng ca biên hoặc biến thể trước khi đi nhanh qua phần tương ứng.

### 014 · Lớp, đối tượng và đóng gói

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Chuyển struct Sach thành class với dữ liệu private. Tư duy Đóng gói (Encapsulation): Bảo vệ Bất biến Trạng thái (Class Invariant) bên trong lớp, không cho thế giới bên ngoài tự ý thay đổi dữ liệu trái quy tắc.
- [ ] Phân biệt lớp với hai đối tượng sách có dữ liệu khác nhau. Phân biệt rõ ràng: Trừu tượng hóa Dữ liệu (Dữ liệu nào thuộc bản chất đối tượng) vs Dịch vụ Điều phối (Thao tác nào thuộc hệ thống quản lý).
- [ ] Viết phương thức xem thông tin và thay đổi dữ liệu có kiểm tra. Phân biệt Đóng gói thực chất với việc máy móc viết Getter/Setter làm thủng màng bảo vệ dữ liệu (Tell, Don't Ask principle).
- [ ] Giải thích vì sao không để mọi nơi tùy ý sửa mã sách. Hiểu ranh giới giao diện công khai (Public Interface): Chỉ công khai những hành vi đối tượng cam kết phục vụ, giấu kín 100% chi tiết cài đặt và cấu trúc lưu trữ nội bộ.

**Thông tin thêm & Lưu ý bản chất:**

Bản chất Đóng gói (Encapsulation): Bảo vệ bất biến (Invariants) của đối tượng bằng cách ẩn giấu trạng thái nội bộ trong phân vùng private. Chỉ cung cấp các phương thức thao tác nghiệp vụ có kiểm tra tính hợp lệ qua giao diện công khai (public interface), triệt tiêu thói quen xấu viết getter/setter cơ học làm lộ dữ liệu nội bộ.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 14 Introduction to Classes: member functions, access control, encapsulation.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 015 · Viết lớp Sach

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Tạo hai đối tượng Sach và kiểm tra chúng không dùng chung dữ liệu ngoài ý muốn. Thiết kế Hợp đồng Giao diện Lớp (Class Interface Design): Chỉ thêm các phương thức thực sự phục vụ ca sử dụng nghiệp vụ, loại bỏ các hàm dư thừa làm rò rỉ trạng thái.
- [ ] Chỉ cho đổi tên thành chuỗi không rỗng. Bảo vệ bất biến ngay từ đầu vào: Kiểm tra tính hợp lệ của tham số trong mọi phương thức thay đổi trạng thái (Mutators).
- [ ] Viết hàm in thông tin một sách qua giao diện công khai. Áp dụng nguyên tắc Bất biến chỉ đọc (Const-Correctness): Đánh dấu const cho mọi phương thức không làm thay đổi trạng thái đối tượng, cho phép dùng an toàn với tham chiếu hằng.
- [ ] Thử sửa trực tiếp dữ liệu private và đọc thông báo của trình biên dịch. Thực hành ranh giới kiểm thử: Kiểm chứng việc truy cập trực tiếp dữ liệu private bị trình biên dịch từ chối ngay tại compile-time.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 14 Introduction to Classes: member functions, access control, encapsulation.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 016 · Constructor và khởi tạo đối tượng

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Phân biệt khởi tạo thành viên với gán giá trị trong thân constructor. Tư duy Khởi tạo Toàn vẹn (Complete Initialization Invariant): Đảm bảo đối tượng luôn ở trạng thái hoàn toàn hợp lệ ngay sau khi rời khỏi Constructor; cấm tuyệt đối mô hình nửa vời bắt người gọi phải tự gọi thêm hàm init().
- [ ] Viết constructor có tham số và dùng danh sách khởi tạo. Bản chất Danh sách Khởi tạo (Member Initializer List): Khởi tạo trực tiếp ô nhớ của thuộc tính thay vì tạo mặc định rồi gán đè trong thân hàm constructor (tối ưu hiệu năng và bắt buộc đối với hằng số, tham chiếu).
- [ ] Xác định dữ liệu hợp lệ tối thiểu để một cuốn sách được tạo. Thứ tự khởi tạo thực tế của phần cứng: Luôn theo thứ tự khai báo biến trong định nghĩa class, không phụ thuộc vào thứ tự viết trong initializer list.
- [ ] So sánh một đối tượng được khởi tạo đầy đủ với đối tượng phải gọi nhiều setter mới dùng được. Thiết kế Constructor tối giản: Chỉ cung cấp các constructor thực sự có ý nghĩa nghiệp vụ, tránh tạo quá nhiều biến thể gây nhập nhằng.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 14: constructors, member initializer lists, default constructors.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 017 · Khởi tạo và kiểm tra dữ liệu

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Viết lớp Ngay với ngày, tháng, năm và phương thức kiểm tra hợp lệ. Tư duy Thiết kế Trạng thái Bất biến (State Validation & Invariant Enforcement): Ngăn chặn triệt để việc tạo ra một đối tượng mang trạng thái bất hợp lệ (Invalid State).
- [ ] Xét số ngày từng tháng và năm nhuận. Mô hình hóa Miền Giá trị Hợp lệ: Thiết kế các luật kiểm tra biên độc lập, phân tách logic kiểm tra ràng buộc thành các vị từ (Predicates) có thể kiểm thử tự động.
- [ ] Thử ngày 29/2 ở năm nhuận và năm không nhuận, ngày 0 và tháng 13. Chiến lược Xử lý khi Khởi tạo Thất bại: Ném ngoại lệ có ý nghĩa hoặc sử dụng Factory Pattern trả về kiểu Optional/Result để người gọi nhận diện lỗi tường minh.
- [ ] Quy định rõ cách chương trình phản hồi khi đầu vào không hợp lệ. Xây dựng bộ kiểm thử ca biên toàn diện: Thử nghiệm các giá trị biên, giá trị ngoài miền và xác nhận đối tượng không bao giờ rơi vào trạng thái không xác định.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 14: constructors, member initializer lists, default constructors.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 018 · const trong thiết kế lớp

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Đánh dấu phương thức chỉ đọc bằng const. Nguyên lý Hợp đồng Bất biến (Const Contract): Đặt const sau phương thức để cam kết với trình biên dịch và người gọi rằng phương thức này chỉ đọc, không làm thay đổi bất kỳ byte nào của đối tượng.
- [ ] Truyền đối tượng sách vào hàm bằng const Sach&. Truyền tham chiếu hằng (const T&): Tiêu chuẩn vàng để truyền đối tượng trong C++ — không tốn chi phí sao chép bộ nhớ và đảm bảo an toàn tuyệt đối cho dữ liệu gốc.
- [ ] Thử gọi phương thức thay đổi dữ liệu trên đối tượng const và giải thích lỗi. Kiểm tra tính nhất quán Const (Const-Correctness): Đảm bảo phương thức const không được phép trả về tham chiếu hoặc con trỏ không-const trỏ vào dữ liệu nội bộ của lớp.
- [ ] Rà lại giao diện lớp: thao tác nào chỉ đọc, thao tác nào thay đổi trạng thái. Kiểm chứng tại thời điểm biên dịch: Cố ý gọi thao tác sửa đổi trên một đối tượng const để xác nhận trình biên dịch phát hiện và chặn đứng lỗi.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 14: const class objects và const member functions.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 019 · Quan hệ chứa giữa các lớp

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Tạo lớp ThuVien chứa vector<Sach>. Nguyên lý Thiết kế Hợp thành (Composition over Inheritance): Ưu tiên quan hệ Has-A (Chứa/Hợp thành) thay vì lạm dụng Is-A (Kế thừa); ngăn chặn lỗi thiết kế Lớp Cơ sở Dễ vỡ (Fragile Base Class).
- [ ] Đưa việc kiểm tra mã sách trùng vào ThuVien. Phân định ranh giới trách nhiệm: Đối tượng chứa quản lý vòng đời và giữ bất biến trên tập hợp; đối tượng thành phần chỉ chịu trách nhiệm về tính toàn vẹn của chính nó.
- [ ] Phân biệt ThuVien chứa Sach với Sach là một loại ThuVien. Thiết kế liên kết lỏng (Loose Coupling): Các thành phần giao tiếp qua định danh hoặc hợp đồng giao diện, giảm thiểu tối đa sự phụ thuộc trực tiếp vào kiểu dữ liệu cụ thể.
- [ ] Vẽ sơ đồ lớp đơn giản, ghi rõ đối tượng nào sở hữu danh sách sách. Vẽ sơ đồ cấu trúc lớp (Class Diagram) làm rõ mối quan hệ sở hữu và trách nhiệm điều phối dòng dữ liệu giữa các thành phần.

**Thông tin thêm & Lưu ý bản chất:**

Nguyên lý Composition over Inheritance: Ưu tiên quan hệ Has-A (chứa) thay vì lạm dụng Is-A (kế thừa). Đóng gói các đối tượng con vào lớp cha giúp giảm độ kết dính (loose coupling), ngăn chặn lỗi thiết kế Lớp cơ sở mong manh (Fragile Base Class problem) và cho phép linh hoạt thay đổi thành phần lúc chạy.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 23 Object Relationships: composition, aggregation và association.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 020 · Tổ chức lớp ThuVien

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Thêm phương thức themSach, timSach và hienThiDanhSach. Thiết kế Giao diện Điều phối Bộ nhớ: Định nghĩa chữ ký và kiểu trả về rõ ràng cho các thao tác quản lý (Thêm, Tìm kiếm, Xóa), đặc biệt xử lý an toàn ca không tìm thấy.
- [ ] Quy định kết quả khi không tìm thấy mã sách. Bảo vệ toàn vẹn dữ liệu nội bộ: Không bao giờ trả về tham chiếu trực tiếp tới container nội bộ để bên ngoài tùy ý sửa đổi làm phá vỡ bất biến danh sách.
- [ ] Thử thư viện rỗng, thêm trùng mã và tìm sách sau khi thêm. Tách biệt hoàn toàn Tầng Logic Nghiệp vụ khỏi Tầng Nhập/Xuất (I/O): Lớp nghiệp vụ nhận dữ liệu thuần túy và trả kết quả, không chứa mã nhập xuất bàn phím hay giao diện.
- [ ] Giữ thao tác nhập từ bàn phím ở ngoài lớp dữ liệu. Xây dựng bộ test kiểm thử tự động: Kiểm tra hoạt động của lớp nghiệp vụ với dữ liệu cố định trong bộ nhớ RAM mà không cần tương tác người dùng.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 23 Object Relationships: composition, aggregation và association.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 021 · Kế thừa trong C++

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Bản chất Kế thừa trong Thiết kế: Kế thừa thực chất là quan hệ chuyên biệt hóa (Specialization / Is-A) và chia sẻ giao diện, TUYỆT ĐỐI KHÔNG dùng kế thừa chỉ để tái sử dụng lại vài dòng mã.
- [ ] Xét khi nào SinhVien có thể được xem là một Nguoi. undefined
- [ ] Nguyên lý Thay thế Liskov (LSP - Liskov Substitution Principle): Đối tượng của lớp con phải có thể thay thế hoàn hảo cho đối tượng của lớp cha mà không làm thay đổi tính đúng đắn của chương trình.
- [ ] Cơ chế Khởi tạo và Phân hủy theo tầng: Constructor của lớp cha luôn thực thi trước lớp con để dựng nền tảng; Destructor của lớp con luôn thực thi trước lớp cha để dọn dẹp phần mở rộng.
- [ ] In thông báo để quan sát thứ tự chạy constructor và destructor của lớp cha, lớp con. Phân định quyền truy cập 3 mức: Public (giao diện chung), Protected (chỉ dành cho lớp dẫn xuất kế thừa), Private (đóng gói tuyệt đối bên trong lớp).
- [ ] undefined

**Thông tin thêm & Lưu ý bản chất:**

Thuộc tính giống nhau chưa đủ để quyết định kế thừa. Xét xem đối tượng lớp con có thể dùng hợp lý ở nơi cần lớp cha hay không. Bản chất Kế thừa (Inheritance): Xây dựng phân cấp kiểu dữ liệu IS-A chân chính. Phân định rõ 3 mức truy cập public, protected, private; thứ tự thực thi constructor (lớp cha trước con sau) và destructor (lớp con trước cha sau). Cảnh báo: truyền đối tượng con theo giá trị vào hàm nhận lớp cha sẽ gây hiện tượng cắt cụt đối tượng (Object Slicing).

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 24 Inheritance: basic inheritance, constructors/destructors và access specifiers.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 022 · Viết Nguoi và SinhVien

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Viết Nguoi chứa họ tên; SinhVien bổ sung mã số và điểm. Cài đặt Kế thừa Chuẩn mực: Lớp con gọi tường minh constructor của lớp cha trong danh sách khởi tạo để truyền dữ liệu nền tảng.
- [ ] Khởi tạo phần Nguoi bằng constructor của lớp cha. Khai thác Giao diện dùng chung: Viết các hàm xử lý nhận tham chiếu tới lớp cha, cho phép dùng chung cho mọi lớp con mà không cần biết kiểu cụ thể.
- [ ] Thử truy cập các thành viên có quyền khác nhau; giải thích những dòng không biên dịch. Phân tích ranh giới: So sánh sự khác biệt giữa quan hệ Kế thừa (SinhVien kế thừa Nguoi) vs quan hệ Chứa (LopHoc chứa danh sách SinhVien) để tránh lỗi thiết kế kinh điển.
- [ ] So sánh với LopHoc chứa danh sách SinhVien và giải thích vì sao đây là quan hệ chứa. Kiểm tra tính độc lập: Đảm bảo việc sửa đổi thuộc tính riêng của một đối tượng con không gây ra bất kỳ tác dụng phụ nào tới các đối tượng khác.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 24 Inheritance: basic inheritance, constructors/destructors và access specifiers.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 023 · Hàm ảo và đa hình

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Tạo lớp NhanVien và hai lớp con có cách tính lương khác nhau. Làm chủ cơ chế Dynamic Dispatch: Trình biên dịch chèn con trỏ bảng ảo vptr (8 bytes) vào đầu mỗi đối tượng và tạo bảng vtable chứa con trỏ hàm ảo trong phân vùng dữ liệu chỉ đọc (.rodata); lời gọi ptr->method() thực thi qua tra cứu gián tiếp lúc chạy.
- [ ] Gọi tinhLuong qua tham chiếu NhanVien khi có và khi không có virtual. Bắt buộc khai báo virtual destructor (virtual
- [ ] Dùng override và thử cố ý viết sai chữ ký để đọc lỗi biên dịch. Base()) ở mọi lớp cơ sở đa hình để ngăn chặn lỗi rò rỉ bộ nhớ thảm họa khi giải phóng đối tượng con qua con trỏ lớp cha.
- [ ] Tìm hiểu vì sao lớp cha cần destructor ảo khi xóa đối tượng con qua con trỏ lớp cha. Tạo ví dụ truyền đối tượng con theo giá trị để quan sát hiện tượng cắt cụt đối tượng (object slicing) làm mất sạch phần dữ liệu riêng của lớp con, rồi chuyển sang dùng tham chiếu const Base& hoặc con trỏ.
- [ ] Phân biệt override đúng chữ ký với tạo hàm nạp chồng do sai tham số/const; dùng từ khóa override để compiler kiểm tra tại thời điểm biên dịch.
- [ ] Tham khảo cẩm nang cơ chế đa hình động và thiết kế phần mềm sạch tại docs/guides/02-VIRTUAL-DISPATCH-OOP-SOLID.md.

**Thông tin thêm & Lưu ý bản chất:**

Muốn quan sát đa hình lúc chạy, gọi qua con trỏ hoặc tham chiếu lớp cha. Sao chép đối tượng con thành đối tượng lớp cha có thể làm mất phần dữ liệu riêng của lớp con. Cơ chế Đa hình Động (Dynamic Polymorphism Under The Hood): Trình biên dịch chèn con trỏ bảng ảo vptr (8 bytes) vào đầu mỗi đối tượng và tạo bảng vtable chứa con trỏ hàm ảo trong phân vùng dữ liệu chỉ đọc (.rodata); CPU gọi hàm qua 3 bước tra cứu gián tiếp. BẮT BUỘC khai báo virtual destructor (virtual ~Base()) ở mọi lớp cơ sở đa hình để ngăn chặn lỗi rò rỉ bộ nhớ thảm họa khi giải phóng đối tượng con qua con trỏ lớp cha. Gắn liền với Mini-Project 1: Space Invaders C++ (phân cấp Entity -> Alien/Ship). Tài liệu: docs/guides/02-VIRTUAL-DISPATCH-OOP-SOLID.md và docs/projects/01-SPACE-INVADERS-CPP.md.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 25 Virtual Functions: virtual dispatch, override, abstract classes và virtual destructor.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.
- [Offline Guide: Cơ chế Đa hình Động vptr/vtable & 5 Nguyên lý SOLID](./docs/guides/02-VIRTUAL-DISPATCH-OOP-SOLID.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về cơ chế đa hình động vptr/vtable và 5 nguyên lý SOLID.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 024 · Tính lương bằng đa hình

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Viết NhanVienToanThoiGian và NhanVienTheoGio. Tư duy Đa hình Động trong Thiết kế: Viết các hàm nghiệp vụ chỉ làm việc với Hợp đồng Giao diện Lớp cha (Base Contract), hoàn toàn độc lập với các lớp con cụ thể.
- [ ] Viết một hàm nhận const NhanVien& và in lương, không kiểm tra loại nhân viên. Mở rộng không cần sửa đổi (Open/Closed Principle): Khi thêm một lớp con mới với thuật toán xử lý riêng, toàn bộ mã điều phối cũ không cần phải sửa đổi hay thêm chuỗi if-else kiểm tra loại đối tượng.
- [ ] Truyền từng đối tượng con vào cùng hàm và kiểm tra kết quả. Kiểm chứng Đa hình Thực tế: Truyền các đối tượng con khác nhau qua con trỏ hoặc tham chiếu lớp cha, đối chiếu kết quả thực thi lúc chạy để thấy cơ chế dynamic dispatch hoạt động.
- [ ] Thử số giờ bằng 0 và dữ liệu âm; quy định dữ liệu nào bị từ chối. Thiết kế phương thức hằng (const virtual method) cho các thao tác tính toán không làm thay đổi trạng thái đối tượng.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 25 Virtual Functions: virtual dispatch, override, abstract classes và virtual destructor.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 025 · Lớp trừu tượng

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Đổi tinhLuong thành hàm thuần ảo. Bản chất Lớp Trừu tượng (Abstract Class): Đóng vai trò là một Bản Đặc tả Giao diện (Pure Interface Contract), định nghĩa những hành vi mà mọi lớp con bắt buộc phải cam kết thực hiện.
- [ ] Quan sát vì sao không thể tạo trực tiếp đối tượng lớp trừu tượng. Khai báo Phương thức Thuần ảo (Pure Virtual Function: virtual Ret method() = 0;): Ngăn chặn việc khởi tạo trực tiếp đối tượng của lớp trừu tượng, chỉ cho phép dùng làm kiểu con trỏ/tham chiếu điều phối.
- [ ] Phân biệt giao diện chung với cách cài đặt riêng của từng lớp con. Tách rời Bản hợp đồng khỏi Cài đặt cụ thể: Người gọi chỉ phụ thuộc vào giao diện trừu tượng, cho phép hoán đổi các bộ cài đặt khác nhau (ví dụ: bộ lưu trữ RAM vs File vs Database) một cách liền mạch.
- [ ] Chỉ thêm một lớp con mới và kiểm tra hàm in lương chung vẫn dùng được. Kiểm chứng Liskov Substitution: Đảm bảo mọi lớp con thực thi đầy đủ giao diện và tuân thủ đúng các ràng buộc của lớp trừu tượng cơ sở.

**Thông tin thêm & Lưu ý bản chất:**

Lớp trừu tượng (Abstract Base Class) & Giao diện thuần ảo (= 0): Định nghĩa hợp đồng hành vi bắt buộc mà mọi lớp con phải tuân thủ. Không thể khởi tạo trực tiếp đối tượng từ lớp trừu tượng; trình biên dịch cưỡng chế kiểm tra tính đầy đủ của các hàm ảo tại thời điểm biên dịch, bảo đảm nguyên lý đa hình an toàn.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 25 Virtual Functions: virtual dispatch, override, abstract classes và virtual destructor.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.
- [Offline Guide: Cơ chế Đa hình Động vptr/vtable & 5 Nguyên lý SOLID](./docs/guides/02-VIRTUAL-DISPATCH-OOP-SOLID.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về cơ chế đa hình động vptr/vtable và 5 nguyên lý SOLID.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 026 · Quản lý tài nguyên an toàn

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Theo dõi constructor và destructor khi đối tượng rời khỏi phạm vi. Tư duy Vòng đời Đối tượng và Thu hồi Tài nguyên: Theo dõi chính xác thời điểm Constructor được kích hoạt (cấp phát) và Destructor được gọi (thu hồi) khi đối tượng rời khỏi phạm vi (Scope).
- [ ] Tìm hiểu RAII: gắn việc giải phóng tài nguyên với thời gian sống của đối tượng. Nguyên lý Tự quản lý Tài nguyên: Ưu tiên thiết kế các lớp tự quản lý dữ liệu thông qua các cấu trúc dữ liệu chuẩn (std::vector, std::string) thay vì tự rải con trỏ thô new/delete rải rác.
- [ ] Dùng string và vector để lớp tự quản lý dữ liệu mà không tự new/delete. Mô hình Quản lý Tài nguyên An toàn khi có Ngoại lệ: Đảm bảo khi một thao tác gặp sự cố giữa chừng, toàn bộ các đối tượng đã khởi tạo trên stack đều được giải phóng sạch sẽ qua cơ chế Stack Unwinding.
- [ ] Thử sao chép một Sach chỉ chứa string và số; thay đổi bản sao rồi kiểm tra bản gốc. Kiểm chứng hành vi sao chép: Đảm bảo việc sao chép đối tượng tạo ra vùng dữ liệu độc lập, tránh hiện tượng sửa đổi dữ liệu chéo ngoài ý muốn.

**Thông tin thêm & Lưu ý bản chất:**

Khi lớp tự sở hữu con trỏ cấp phát động, sao chép mặc định có thể không đủ an toàn. Dùng string và vector trước; nhiệm vụ tiếp theo sẽ xét sâu hơn quyền sở hữu và sao chép.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 22 Move Semantics and Smart Pointers: RAII, resource ownership và std::unique_ptr.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.
- [Offline Guide: Bản chất Vùng nhớ, Con trỏ & RAII](./docs/guides/01-MEMORY-POINTERS-RAII.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về bản chất vùng nhớ, con trỏ và nguyên lý RAII.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 027 · Bản chất bộ nhớ và cơ chế sao chép

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Phân biệt phân vùng Stack vs Heap, cơ chế lưu địa chỉ ô nhớ của con trỏ và mảng động. Vẽ phân vùng bộ nhớ Stack vs Heap: biến con trỏ 8 bytes nằm trên Stack lưu địa chỉ ô nhớ Heap được cấp phát.
- [ ] Vẽ hai đối tượng sau phép gán mặc định để thấy nguy cơ sao chép nông (shallow copy) gây lỗi Double-Free thảm họa. Minh họa hiểm họa sao chép nông (shallow copy): hai con trỏ trỏ chung một địa chỉ Heap, khi đối tượng thứ nhất bị hủy thì đối tượng thứ hai bị lỗi Double-Free thảm họa hoặc giải tham chiếu con trỏ treo.
- [ ] Hiểu triết lý Rule of Zero: ưu tiên dùng std::vector và std::string tự quản lý bộ nhớ để sao chép an toàn tuyệt đối. Thực hành cài đặt sao chép sâu (deep copy) thủ công: cấp phát vùng nhớ Heap mới độc lập và sao chép từng phần tử dữ liệu.
- [ ] Áp dụng triết lý Rule of Zero: thay vì viết thủ công destructor và copy constructor dễ gây rò rỉ, sử dụng std::vector và std::string tự động quản lý vòng đời tài nguyên an toàn tuyệt đối.
- [ ] Đọc cẩm nang bộ nhớ và con trỏ ngoại tuyến tại docs/guides/01-MEMORY-POINTERS-RAII.md.

**Thông tin thêm & Lưu ý bản chất:**

Hiểu rõ Stack vs Heap: sao chép nông khiến hai con trỏ trỏ cùng ô nhớ Heap; dùng Rule of Zero với container chuẩn để triệt tiêu lỗi bộ nhớ. Mô hình nhận thức bộ nhớ vật lý: Biến con trỏ trên Stack lưu địa chỉ vùng nhớ Heap. Khi sao chép nông (shallow copy), hai con trỏ trỏ chung một ô nhớ Heap, dẫn tới lỗi Double-Free thảm họa hoặc con trỏ treo (dangling pointer) khi đối tượng bị hủy. Giải pháp bản chất: Triệt để áp dụng Rule of Zero bằng cách sử dụng các container chuẩn như std::vector và std::string tự động quản lý vòng đời bộ nhớ, thay vì tự viết destructor/copy constructor thủ công dễ rò rỉ. Đọc cẩm nang tại docs/guides/01-MEMORY-POINTERS-RAII.md.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 14/21: copy constructor, assignment, shallow/deep copying; đối chiếu quyền sở hữu trước khi tự cấp phát.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 028 · unique_ptr và tự động giải phóng vùng nhớ

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Tạo đối tượng bằng std::make_unique và quan sát cơ chế tự hủy giải phóng ô nhớ Heap khi ra khỏi scope. Tư duy Quản lý Quyền sở hữu Tài nguyên (Ownership Mental Model): Vùng nhớ Heap phải có một chủ sở hữu duy nhất, rõ ràng chịu trách nhiệm thu hồi khi hoàn thành nhiệm vụ.
- [ ] Sử dụng std::unique_ptr để quản lý độc quyền tài nguyên mà không cần gọi delete thủ công. Sử dụng con trỏ sở hữu độc quyền (std::unique_ptr): Khởi tạo an toàn bằng std::make_unique, loại bỏ hoàn toàn việc gọi delete thủ công rải rác trong mã nguồn.
- [ ] Dùng vector<unique_ptr<NhanVien>> để quản lý danh sách đa hình; lớp cha bắt buộc có virtual destructor. Tránh lỗi nhận thức kinh điển: Tuyệt đối không tạo hai con trỏ quản lý độc quyền từ cùng một địa chỉ ô nhớ thô vì sẽ gây thảm họa Double-Free.
- [ ] Quản lý mảng đa hình an toàn với std::vector<std::unique_ptr<LopCha>>: Lớp cha bắt buộc có virtual destructor để destructor của lớp con được kích hoạt đúng khi đối tượng bị giải phóng.
- [ ] Tham khảo hướng dẫn thực hành tại docs/guides/01-MEMORY-POINTERS-RAII.md.

**Thông tin thêm & Lưu ý bản chất:**

unique_ptr tự động gọi delete khi ra khỏi scope; quản lý vòng đời rõ ràng mà không cần rải delete thủ công. Quản lý tài nguyên hiện đại RAII: std::unique_ptr biểu diễn quyền sở hữu độc quyền (exclusive ownership), tự động giải phóng vùng nhớ Heap khi đối tượng ra khỏi phạm vi (scope) mà không cần gọi delete thủ công. Sử dụng std::make_unique để khởi tạo an toàn. Tuyệt đối không tạo hai unique_ptr từ cùng một địa chỉ con trỏ thô. Đọc cẩm nang tại docs/guides/01-MEMORY-POINTERS-RAII.md.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 22 Move Semantics and Smart Pointers: RAII, resource ownership và std::unique_ptr.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 029 · Nạp chồng toán tử vừa đủ

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Tìm hiểu Euclid: thay cặp số bằng số thứ hai và số dư đến khi số dư bằng 0 để tìm UCLN. Tư duy Đại số Kiểu Dữ liệu (Value Semantics & Operator Invariants): Nạp chồng toán tử nhằm mục đích giúp kiểu dữ liệu tự định nghĩa hoạt động trực quan và tự nhiên như kiểu dữ liệu nguyên thủy.
- [ ] Viết lớp PhanSo chuẩn hóa dấu và rút gọn. Bảo toàn Tính chất Đại số: Toán tử số học (+) không được làm thay đổi toán hạng đầu vào; toán tử so sánh (==) phải thỏa mãn tính phản xạ, đối xứng và bắc cầu.
- [ ] Cài + và ==; thử mẫu bằng 0, phân số âm, hai biểu diễn bằng nhau và giới hạn tránh tràn. Phân biệt Toán tử Thành viên vs Toán tử Tự do Đối xứng: Toán tử thay đổi trạng thái (+=, -=) là phương thức thành viên; toán tử hai ngôi đối xứng (+, -) nên là hàm tự do để hỗ trợ chuyển đổi kiểu ngầm định ở cả hai vế.
- [ ] Phòng chống lỗi tràn số trong các phép tính toán tử: Đưa dữ liệu về dạng chuẩn tắc (Canonical Form) trước khi so sánh hoặc tính toán.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 21 Operator Overloading: ý nghĩa toán tử, member/non-member và operator<<.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 030 · Template và thư viện chuẩn

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Viết hàm template tìm phần tử lớn hơn trong hai giá trị. Đa hình Thời gian Biên dịch (Compile-time Polymorphism): Sử dụng Template để xây dựng các giải thuật và cấu trúc dữ liệu tổng quát, hoạt động trên mọi kiểu dữ liệu thỏa mãn điều kiện mà không tốn chi phí vtable lúc chạy.
- [ ] Dùng sort với comparator đúng; không dùng <= làm điều kiện so sánh nghiêm ngặt. Cơ chế Khởi tạo Mẫu (Template Instantiation): Trình biên dịch tự động sinh mã máy chuyên biệt hóa (Specialized Code) cho từng kiểu dữ liệu được sử dụng trong chương trình.
- [ ] Dùng iterator, find và lambda đơn giản trên vector sách. Thiết kế Hàm So sánh Tùy biến (Custom Comparators): Xây dựng hàm so sánh theo quan hệ Thứ tự Bộ phận Nghiêm ngặt (Strict Weak Ordering: f(a, a) luôn bằng false) để tránh lỗi lặp vô tận trong các hàm sắp xếp.
- [ ] Khai thác Thư viện Thuật toán Chuẩn: Kết hợp các thuật toán tổng quát (std::sort, std::find) với biểu thức Lambda để viết mã nguồn ngắn gọn, tối ưu và biểu đạt trực tiếp ý định thuật toán.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Các bài Function templates trong chương 11 và Class templates trong chương 13; chỉ cú pháp và ví dụ cơ bản.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 031 · Ngoại lệ và giữ trạng thái hợp lệ

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] So sánh trả mã lỗi với ném ngoại lệ ở thao tác đọc tệp. Chiến lược Xử lý Sự cố & Đảm bảo An toàn Trạng thái (Exception Safety Guarantees): Phân biệt 3 mức cam kết an toàn: Cam kết Cơ bản (không rò rỉ tài nguyên), Cam kết Mạnh (hoàn tác trạng thái nguyên vẹn như trước khi gọi nếu thất bại - Commit or Rollback), và Cam kết Không Ném (Nothrow guarantee).
- [ ] Bắt ngoại lệ ở lớp giao tiếp, không bỏ qua mọi lỗi bằng catch rỗng. Xử lý lỗi có phương pháp: Ném ngoại lệ khi và chỉ khi một hàm không thể hoàn thành được nhiệm vụ đã cam kết trong hợp đồng giao diện.
- [ ] Thử lỗi giữa một thao tác cập nhật; tránh để dữ liệu thay đổi một nửa. Mô hình Cập nhật Nguyên tử (Atomic Update Pattern): Đọc và tính toán trên cấu trúc tạm thời, chỉ ghi đè vào trạng thái chính của hệ thống khi mọi bước kiểm tra đều thành công.
- [ ] Phân định ranh giới xử lý lỗi: Bắt và xử lý ngoại lệ ở tầng có đủ ngữ cảnh (Tầng Giao tiếp / Điều phối), không dùng khối catch rỗng làm nuốt chửng lỗi hệ thống.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Chương 27 Exceptions: throw/try/catch, stack unwinding và exception safety.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

### 032 · Rà lại thiết kế OOP

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** OOP & Thiết kế Phần mềm (`track-1`)

**Việc cần làm:**

- [ ] Rà các lớp Sach, ThuVien và NhanVien: dữ liệu nào đang được bảo vệ đúng chỗ? Rà soát chuẩn mực thiết kế OOP và 5 nguyên lý SOLID: Single Responsibility (mỗi lớp 1 lý do thay đổi), Open/Closed (mở rộng qua đa hình, đóng sửa đổi), Liskov Substitution (lớp con thay thế hoàn hảo lớp cha), Interface Segregation (chia nhỏ giao diện), Dependency Inversion (phụ thuộc vào abstraction).
- [ ] Tìm một quan hệ kế thừa không hợp lý và đổi thành quan hệ chứa nếu cần. Áp dụng GoF Design Patterns thực chiến: Factory Pattern đóng gói khởi tạo, Strategy Pattern hoán đổi thuật toán lúc chạy, Observer Pattern phân tách liên kết giữa các thành phần.
- [ ] Tách khai báo lớp vào tệp .h và định nghĩa phương thức vào tệp .cpp. Kiểm tra const-correctness, quyền sở hữu bộ nhớ, giá trị trả về khi thất bại và loại bỏ các getter/setter làm phá vỡ tính đóng gói.
- [ ] Biên dịch toàn bộ chương trình; kiểm tra mỗi tệp có thể được hiểu qua giao diện công khai. Thử biên dịch từ thư mục sạch để phát hiện thiếu include hoặc phụ thuộc vòng; tham khảo cẩm nang tại docs/guides/02-VIRTUAL-DISPATCH-OOP-SOLID.md.
- [ ] Nhận một yêu cầu thêm loại người dùng mới: chỉ ra phần nào dùng chứa, phần nào thật sự cần đa hình, sửa mã và chạy lại test cũ; tự giải thích thứ tự khởi tạo/hủy và quyền sở hữu.

**Thông tin thêm & Lưu ý bản chất:**

Rà soát chuẩn mực OOP và 5 nguyên lý SOLID: Single Responsibility (mỗi lớp 1 lý do thay đổi), Open/Closed (mở rộng qua đa hình, đóng sửa đổi), Liskov Substitution (lớp con thay thế hoàn hảo lớp cha), Interface Segregation (chia nhỏ giao diện), Dependency Inversion (phụ thuộc vào abstraction). Áp dụng GoF Design Patterns: Factory Pattern đóng gói khởi tạo, Strategy Pattern thay đổi thuật toán lúc chạy, Observer Pattern phân tách liên kết. Tài liệu: docs/guides/02-VIRTUAL-DISPATCH-OOP-SOLID.md.

**Nguồn tham khảo miễn phí:**

- [LearnCpp](https://www.learncpp.com/)
  - **Phần cần đọc:** Quiz cuối chương 14,24,25: tự làm phần lớp, kế thừa và đa hình; kiểm chứng bằng project của mình.
  - **Truy cập:** Toàn bộ bài viết và quiz trên trang được đọc miễn phí.

# Track 2: Cấu trúc Dữ liệu & Giải thuật Cốt lõi (Algorithms & Data Structures)

> **Mục tiêu:** Lấp dứt điểm lỗ hổng thuật toán sắp xếp (Quicksort phân hoạch Hoare/Lomuto, Mergesort, Heapsort), Cây (BST, AVL với 4 phép xoay LL/RR/LR/RL, Binary Heap), Đồ thị (BFS/DFS, Topological sort, Dijkstra với Priority Queue, Bellman-Ford, Floyd-Warshall, Kruskal với DSU nén đường đi, Prim), và Quy hoạch động (Knapsack, LIS O(n log n), LCS).
> **Môn học HCMUS:** Cấu trúc dữ liệu và giải thuật (CSC10004) | **Thời lượng ước tính:** ~110 giờ

## 07. Cấu trúc dữ liệu

### 067 · Tự kiểm tra cấu trúc dữ liệu đã học

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Làm các mục sau trước khi mở lời giải cũ. Ghi từng mục: tự làm được / cần gợi ý / chưa học; không cộng thành điểm đoán mức giỏi chung.
- [ ] Không mở bài 28tech cũ: đếm tần suất một dãy và giải thích chi phí của cách đang dùng.
- [ ] Vẽ các con trỏ trước/sau khi xóa nút đầu danh sách; thử danh sách rỗng và một nút.
- [ ] Chọn stack hay queue cho kiểm tra ngoặc và xử lý người đến trước; giải thích bằng thứ tự lấy phần tử.
- [ ] Dự đoán kết quả một hàm đệ quy tổng từ 1 đến n, ghi điểm dừng và thứ tự trở về.
- [ ] Sau khi thử, chỉ ôn lại mục chưa tự làm được theo các liên kết bên dưới. Chưa học là điểm bắt đầu bình thường; không tự đánh dấu cả chặng hoàn thành và không cần làm lại toàn bộ kho 28tech.

**Ô cần ôn theo kết quả kiểm tra:**

- [ ] 075 · Bảng băm và va chạm (`dsa-hash`)
- [ ] 070 · Danh sách liên kết đơn (`dsa-linked`)
- [ ] 072 · Stack và LIFO (`dsa-stack`)
- [ ] 077 · Đệ quy và ngăn xếp lời gọi (`algo-recursion`)

**Thông tin thêm & Lưu ý bản chất:**

Bài tự kiểm tra để chọn điểm ôn, không có chấm tự động. Code cũ chỉ mở sau lượt thử; khi đã tự làm được một mục, vẫn kiểm tra bằng ca biên hoặc biến thể trước khi đi nhanh qua phần tương ứng.

### 068 · Big-O, Theta và chi phí bộ nhớ

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Đếm thao tác của vòng lặp tuyến tính, lồng nhau và nhân đôi biến. Xác định biến kích thước đầu vào n; với đồ thị dùng thêm V,E thay vì ép mọi chi phí vào một n không rõ.
- [ ] Phân biệt chặn trên với chặn chặt; nêu trường hợp tốt, xấu khi liên quan. Đếm tổng số lần chạy thân vòng lặp, nhất là vòng trong phụ thuộc chỉ số vòng ngoài.
- [ ] Ước lượng bộ nhớ của mảng và bảng n×n trước khi cài đặt. Phân biệt bộ nhớ đầu vào, đầu ra và bộ nhớ phụ; ghi cả ngăn xếp đệ quy khi có.
- [ ] So n, n log n, n², 2^n bằng vài giới hạn dữ liệu để nhận ra giải pháp nào đáng thử trước khi code.
- [ ] Không coi Big-O là số giây chạy cụ thể hoặc kết luận hai cách cùng Big-O luôn nhanh như nhau.

**Nguồn tham khảo miễn phí:**

- [Open Data Structures — bản C++](https://opendatastructures.org/)
  - **Phần cần đọc:** Chương Introduction: Mathematical Background và phân tích thời gian/bộ nhớ.
  - **Truy cập:** Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.

### 069 · Mảng động và chi phí khấu hao

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Mô phỏng mảng tự tăng dung lượng theo hệ số 2. Tách kích thước đang dùng với dung lượng được cấp phát; định nghĩa rõ khi nào phải tăng vùng chứa.
- [ ] Theo dõi tổng số phần tử đã sao chép sau nhiều lần thêm. Ghi số phần tử bị sao chép ở các lần dung lượng 1→2→4→8, tính tổng tới n lần thêm.
- [ ] Phân biệt chi phí một lần thêm xấu nhất với chi phí khấu hao; so sánh với vector. Cài phiên bản thử trên số nguyên với push_back và truy cập, không vội hỗ trợ mọi tính năng của std::vector.
- [ ] Dùng ví dụ tăng dung lượng mỗi lần thêm đúng 1 để so vì sao tổng chi phí khác hẳn tăng theo hệ số.

**Nguồn tham khảo miễn phí:**

- [Open Data Structures — bản C++](https://opendatastructures.org/)
  - **Phần cần đọc:** Chương Array-Based Lists: ArrayStack,Resizing và amortized analysis.
  - **Truy cập:** Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.

### 070 · Danh sách liên kết đơn

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Vẽ các nút và con trỏ trước, sau khi chèn hoặc xóa. Viết struct Node gồm dữ liệu và next, dùng nullptr để biểu diễn hết danh sách.
- [ ] Cài thêm đầu, tìm và xóa theo giá trị. Vẽ riêng việc đổi các liên kết trước khi giải phóng nút bị xóa để không làm mất phần sau.
- [ ] Xử lý danh sách rỗng, xóa đầu và xóa phần tử cuối; giải phóng mọi nút. Xác định khi nào cần sửa head hoặc tail, đặc biệt danh sách chỉ có một nút.
- [ ] Sau khi xóa toàn bộ, đưa head/tail về trạng thái rỗng, không giữ địa chỉ đã giải phóng.
- [ ] Tính chi phí tìm vị trí so với thao tác thay liên kết sau khi đã biết vị trí.

**Nguồn tham khảo miễn phí:**

- [Open Data Structures — bản C++](https://opendatastructures.org/)
  - **Phần cần đọc:** Chương Linked Lists: SLList,DLList; chỉ cài danh sách đơn trước.
  - **Truy cập:** Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.

### 071 · Sửa danh sách không mất nút

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cài đảo danh sách liên kết tại chỗ. Giữ ba biến previous,current,next, dự đoán liên kết trước và sau một vòng đảo.
- [ ] Thử 0, 1, 2 và nhiều nút. Không ghi đè current->next trước khi giữ địa chỉ đoạn còn lại.
- [ ] Dùng công cụ kiểm tra bộ nhớ; ghi rõ đối tượng nào sở hữu và hủy từng nút. Đối chiếu dãy giá trị sau đảo với bản sao được đảo bằng mảng, rồi đảo lần hai phải về ban đầu.
- [ ] Với mọi ca thử, duyệt tới nullptr và kiểm tra không tạo chu trình hoặc làm mất nút.

**Nguồn tham khảo miễn phí:**

- [Open Data Structures — bản C++](https://opendatastructures.org/)
  - **Phần cần đọc:** Chương Linked Lists: SLList,DLList; chỉ cài danh sách đơn trước.
  - **Truy cập:** Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.

### 072 · Stack và LIFO

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cài push, pop, top bằng vector. Chọn đầu vector làm đáy và cuối làm đỉnh để tránh dịch toàn bộ phần tử khi push/pop.
- [ ] Quy định hành vi khi lấy từ stack rỗng. Viết giao diện rõ ràng cho top/pop lúc rỗng, không đọc back của vector rỗng.
- [ ] Dùng stack kiểm tra dấu ngoặc; giải thích vì sao thứ tự vào sau ra trước phù hợp. Với kiểm tra ngoặc, lưu loại ngoặc mở và đối chiếu đúng loại khi gặp ngoặc đóng.
- [ ] Thử chuỗi rỗng, ngoặc đóng xuất hiện trước và chuỗi còn dư ngoặc mở; xác định có bỏ qua ký tự không phải ngoặc hay không.

**Nguồn tham khảo miễn phí:**

- [Open Data Structures — bản C++](https://opendatastructures.org/)
  - **Phần cần đọc:** Chương Array-Based Lists: ArrayStack,ArrayQueue,ArrayDeque; so thứ tự truy cập.
  - **Truy cập:** Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.

### 073 · Queue, deque và hàng đợi vòng

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cài hàng đợi vòng bằng mảng có giới hạn. Vẽ các vị trí head,tail,count và công thức đưa chỉ số quay lại đầu mảng.
- [ ] Phân biệt trạng thái rỗng và đầy khi đầu trùng cuối. Chọn một quy ước nhất quán: giữ count hoặc chừa một ô để phân biệt đầy với rỗng.
- [ ] Thử nhiều lần thêm, lấy vượt một vòng; so sánh queue với deque. Thử dung lượng 1, lấy khi rỗng, thêm khi đầy và thao tác xen kẽ qua nhiều lần quay vòng.
- [ ] So deque cho phép lấy ở hai đầu với queue chỉ dùng một đầu vào một đầu ra, chọn theo thao tác cần có.

**Nguồn tham khảo miễn phí:**

- [Open Data Structures — bản C++](https://opendatastructures.org/)
  - **Phần cần đọc:** Chương Array-Based Lists: ArrayStack,ArrayQueue,ArrayDeque; so thứ tự truy cập.
  - **Truy cập:** Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.

### 074 · Chọn stack hay queue

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Làm bài kiểm tra ngoặc và mô phỏng hàng chờ phục vụ. Trong bài ngoặc, lần theo từng ký tự và nội dung stack, giải thích vì sao một lỗi loại ngoặc không thể sửa bằng các ký tự phía sau.
- [ ] Giải CSES Nearest Smaller Values sau khi tự nghĩ cách duyệt vét cạn. Với hàng chờ, ghi thứ tự khách vào và ra để đối chiếu tính FIFO.
- [ ] Dùng stack đơn điệu và giải thích vì sao mỗi phần tử bị lấy ra nhiều nhất một lần. Trong Nearest Smaller Values, lưu chỉ số để lấy cả giá trị lẫn vị trí, xử lý các phần tử bằng nhau đúng yêu cầu nhỏ hơn nghiêm ngặt.
- [ ] So kết quả stack đơn điệu với duyệt ngược từng phần tử trên dữ liệu nhỏ ngẫu nhiên.

**Nguồn tham khảo miễn phí:**

- [Open Data Structures — bản C++](https://opendatastructures.org/)
  - **Phần cần đọc:** Chương Array-Based Lists: ArrayStack,ArrayQueue,ArrayDeque; so thứ tự truy cập.
  - **Truy cập:** Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.

### 075 · Bảng băm và va chạm

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Tự cài bảng băm chuỗi với phương pháp nối chuỗi xử lý va chạm. Chọn số bucket, hàm băm và quy tắc chuẩn hóa khóa; dùng cùng quy tắc cho thêm, tìm, xóa.
- [ ] Phân biệt khóa bằng nhau với hai khóa có cùng giá trị băm. Tạo hai khóa cố ý rơi cùng bucket để xác nhận vẫn phân biệt bằng so sánh khóa thật.
- [ ] Quan sát hệ số tải; phân biệt chi phí kỳ vọng với xấu nhất. Khi số phần tử tăng, tính hệ số tải và mô tả việc rehash phải phân phối lại khóa thế nào.
- [ ] Thử xóa một khóa trong chuỗi va chạm mà các khóa còn lại vẫn tìm được.
- [ ] Không dùng vị trí bucket làm định danh lâu dài vì nó có thể đổi sau rehash.

**Nguồn tham khảo miễn phí:**

- [Open Data Structures — bản C++](https://opendatastructures.org/)
  - **Phần cần đọc:** Chương Hash Tables: ChainedHashTable,LinearHashTable và điều kiện tải.
  - **Truy cập:** Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.

### 076 · Đếm và tra cứu bằng bảng băm

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Viết đếm tần suất từ và tìm hai số có tổng cho trước. Với hai số có tổng bằng x, xét rõ có được dùng cùng một vị trí hai lần hay không.
- [ ] Thử khóa lặp, không có đáp án và dữ liệu toàn giống nhau. Thử phần tử lặp, số âm, không có đáp án và hai giá trị bằng nhau từ hai vị trí khác nhau.
- [ ] So sánh unordered_map với map và nêu lý do chọn cho từng bài. Với từ, chốt có phân biệt hoa thường và dấu câu không; đừng trộn quy tắc chuẩn hóa với cơ chế băm.
- [ ] Đo và giải thích vì sao map có thứ tự khóa còn unordered_map không cam kết thứ tự duyệt.

**Nguồn tham khảo miễn phí:**

- [Open Data Structures — bản C++](https://opendatastructures.org/)
  - **Phần cần đọc:** Chương Hash Tables: ChainedHashTable,LinearHashTable và điều kiện tải.
  - **Truy cập:** Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.

### 077 · Đệ quy và ngăn xếp lời gọi

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Viết giai thừa và tổng mảng bằng đệ quy với điều kiện dừng rõ. Với mỗi hàm, viết điều kiện dừng và đại lượng giảm dần để tiến tới nó.
- [ ] Vẽ từng lời gọi và giá trị trả về cho đầu vào nhỏ. Vẽ khung lời gọi chứa tham số và phần việc còn chờ sau lời gọi con, không chỉ vẽ các giá trị trả về.
- [ ] Đổi sang vòng lặp; xét giới hạn độ sâu thay vì mặc định đệ quy luôn an toàn. Kiểm tra đầu vào ngoài miền như giai thừa số âm trước khi đệ quy.
- [ ] Tính cả thời gian lẫn độ sâu stack; không mặc định tail recursion sẽ luôn được compiler tối ưu.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 5 Complete search: generating subsets/permutations,backtracking và pruning.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 078 · Sinh cấu hình bằng đệ quy

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Sinh mọi chuỗi nhị phân độ dài n nhỏ. Với sinh chuỗi nhị phân, xem vị trí hiện tại là trạng thái và hai ký tự 0/1 là lựa chọn.
- [ ] Giải CSES Tower of Hanoi và kiểm tra số bước. Dự đoán số chuỗi 2^n, kiểm tra không thiếu và không trùng khi n nhỏ.
- [ ] Giải thích chi phí theo số kết quả cần sinh. Với Hanoi, viết rõ cọc nguồn, trung gian, đích và thứ tự ba bước đệ quy.
- [ ] Mô phỏng cả trạng thái ba cọc để kiểm tra không đặt đĩa lớn lên đĩa nhỏ, không chỉ kiểm tra tổng số dòng in.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 5 Complete search: generating subsets/permutations,backtracking và pruning.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 079 · Cây nhị phân và các kiểu duyệt

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Biểu diễn nút, con trái, con phải; phân biệt chiều cao với độ sâu. Xác định một quy ước chiều cao của cây rỗng và cây lá rồi dùng nhất quán trong hàm.
- [ ] Cài preorder, inorder, postorder bằng đệ quy; vẽ thứ tự trên cùng một cây. Tạo cây có cả nhánh trái/phải và một cây lệch để phân biệt thứ tự preorder,inorder,postorder.
- [ ] Thử cây rỗng và cây lệch; tính chi phí theo số nút và chiều cao. Viết riêng tính số nút, số lá và chiều cao bằng cách kết hợp kết quả cây con.
- [ ] Phân biệt duyệt inorder cho kết quả có thứ tự ở BST với cây nhị phân bất kỳ không có bảo đảm đó.

**Nguồn tham khảo miễn phí:**

- [Open Data Structures — bản C++](https://opendatastructures.org/)
  - **Phần cần đọc:** Chương Binary Trees: biểu diễn,traversals và BinarySearchTree.
  - **Truy cập:** Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.

### 080 · Cây tìm kiếm nhị phân

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cài tìm, chèn và xóa trong BST. Quy định mọi khóa bên trái nhỏ hơn và bên phải lớn hơn, hoặc ghi rõ cách xử lý trùng nếu chọn khác.
- [ ] Xử lý ba trường hợp xóa nút không con, một con và hai con. Ở trường hợp xóa hai con, tìm successor/predecessor, thay dữ liệu phù hợp rồi xóa nút thay thế ở vị trí cũ.
- [ ] Chèn dãy tăng để quan sát BST thường có thể trở thành danh sách. Sau mỗi thao tác, duyệt inorder và kiểm tra bất biến toàn cây.
- [ ] Tính thời gian theo chiều cao h, không tự ghi O(log n) khi cây chưa được giữ cân bằng.
- [ ] Thử xóa gốc, xóa khóa không có và xóa tới danh sách rỗng.

**Nguồn tham khảo miễn phí:**

- [Open Data Structures — bản C++](https://opendatastructures.org/)
  - **Phần cần đọc:** Chương Binary Trees: biểu diễn,traversals và BinarySearchTree.
  - **Truy cập:** Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.

### 081 · Duy trì bất biến BST

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Viết kiểm tra BST bằng giới hạn dưới và trên. Truyền khoảng khóa hợp lệ xuống cây con, không chỉ so từng nút với hai con trực tiếp.
- [ ] Tạo chuỗi chèn, xóa ngẫu nhiên và đối chiếu với std::set. Tạo cây có một nút nằm sâu vi phạm giới hạn của tổ tiên để test bắt được lỗi tinh vi.
- [ ] Quy định cách xử lý khóa trùng; không chỉ kiểm tra cha với con trực tiếp. Nếu dùng giá trị biên của kiểu số, tránh trừ/cộng 1 gây tràn; có thể biểu diễn giới hạn mở bằng trạng thái riêng.
- [ ] Với chuỗi thao tác ngẫu nhiên, giữ seed và in lại lịch sử ngắn gây sai để tái hiện.

**Nguồn tham khảo miễn phí:**

- [Open Data Structures — bản C++](https://opendatastructures.org/)
  - **Phần cần đọc:** Chương Binary Trees: biểu diễn,traversals và BinarySearchTree.
  - **Truy cập:** Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.

### 082 · AVL và cây cân bằng

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Theo dõi hệ số cân bằng, phép xoay trái và phải của AVL. Tự dựng bốn kiểu mất cân bằng LL, RR, LR, RL rồi xác định một hay hai phép xoay cần dùng.
- [ ] Tự cài chèn AVL rồi kiểm tra thứ tự inorder và chiều cao. Sau xoay, cập nhật chiều cao theo thứ tự từ dưới lên; kiểm tra liên kết với cha hoặc gốc.
- [ ] Đọc vai trò của cây đỏ đen, B-tree và B+tree; chưa cần tự cài mọi biến thể. Giữ kiểm tra độc lập về thứ tự BST và chênh lệch chiều cao để một phép xoay sai không bị bỏ sót.
- [ ] Đo chiều cao khi chèn dãy tăng so với BST thường.
- [ ] Với B/B+tree, tập trung lý do gom nhiều khóa trong một nút giúp truy cập khối lưu trữ; không cần cài cả họ cây ở nhiệm vụ này.

**Khi nào quay lại:** Quay lại khi cần cấu trúc tra cứu chuyên sâu hoặc luyện DSA nâng cao. BST, bảng băm và heap vẫn là nền cần học.

**Thông tin thêm & Lưu ý bản chất:**

Cây AVL tự cân bằng: Hệ số cân bằng Balance Factor BF = h_left - h_right in {-1, 0, 1}. Nắm vững 4 phép xoay: Xoay Đơn (Left Rotation - RR, Right Rotation - LL) và Xoay Kép (Left-Right Rotation - LR, Right-Left Rotation - RL) để đảm bảo chiều cao cây luôn là O(log n), ngăn chặn hiện tượng cây suy biến thành danh sách liên kết.

**Nguồn tham khảo miễn phí:**

- [MIT 6.006 — lecture notes, Spring 2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/)
  - **Phần cần đọc:** Lecture 7: Binary Trees, Part 2: AVL; ôn Binary Trees ở Lecture 6 trước khi học phép xoay.
  - **Truy cập:** Lecture notes, bài tập và lời giải công khai miễn phí trên OCW.

### 083 · Heap và hàng đợi ưu tiên

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cài sift-up, sift-down, push và pop trên mảng. Với chỉ số mảng bắt đầu từ 0, viết công thức cha (i−1)/2 và hai con 2i+1,2i+2.
- [ ] Phân biệt heap với một mảng đã sắp xếp. Giữ bất biến mỗi nút không lớn hơn con trong min-heap hoặc không nhỏ hơn con trong max-heap.
- [ ] Tạo min-heap bằng priority_queue và kiểm tra phần tử trùng. Thử build-heap từ dưới lên, so với chèn từng phần tử và phân biệt chi phí hai cách.
- [ ] Khi pop, đổi gốc với phần tử cuối, thu kích thước rồi phục hồi bằng sift-down; xử lý heap một phần tử.
- [ ] Đối chiếu các lần lấy phần tử với kết quả sort trên cùng dữ liệu.

**Nguồn tham khảo miễn phí:**

- [Open Data Structures — bản C++](https://opendatastructures.org/)
  - **Phần cần đọc:** Chương Heaps: BinaryHeap; cài và kiểm tra invariant.
  - **Truy cập:** Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.

### 084 · Giữ phần tử tốt nhất bằng heap

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Giải bài giữ k phần tử lớn nhất của luồng dữ liệu. Giữ min-heap có tối đa k phần tử để đỉnh là phần nhỏ nhất trong nhóm k lớn nhất đang giữ.
- [ ] So sánh heap kích thước k với sắp xếp toàn bộ. Chỉ thay đỉnh khi số mới tốt hơn nó và heap đã đủ k phần tử.
- [ ] Thử k=1, k=n và quy định đầu vào k không hợp lệ. Định nghĩa kết quả khi luồng có ít hơn k phần tử hoặc k không dương trước khi chạy.
- [ ] Thử dữ liệu tăng, giảm, trùng và số âm; đối chiếu bằng sort toàn bộ phiên bản nhỏ.

**Nguồn tham khảo miễn phí:**

- [Open Data Structures — bản C++](https://opendatastructures.org/)
  - **Phần cần đọc:** Chương Heaps: BinaryHeap; cài và kiểm tra invariant.
  - **Truy cập:** Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.

### 085 · Trie cho tiền tố chuỗi

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cài thêm từ, kiểm tra từ đầy đủ và tìm tiền tố. Mỗi cạnh biểu diễn một ký tự của bảng chữ cái đã chốt, mỗi nút có cờ/số đếm kết thúc từ.
- [ ] Phân biệt nút kết thúc từ với nút chỉ biểu diễn tiền tố. Thêm cả an và anh để kiểm tra tiền tố có thể đồng thời là một từ hoàn chỉnh.
- [ ] Ước lượng bộ nhớ; quy định bảng chữ cái thay vì giả định mọi chuỗi Unicode là a–z. Viết tìm từ theo đúng toàn bộ ký tự, phân biệt tìm tiền tố chỉ cần đi hết chuỗi tiền tố.
- [ ] Nếu có từ trùng, chốt dùng cờ hay số đếm; nếu luyện xóa từ, không xóa nút vẫn phục vụ từ khác.
- [ ] Ước lượng số nút theo tổng độ dài, so chi phí mảng con cố định với cấu trúc thưa.

**Khi nào quay lại:** Quay lại khi cần cấu trúc tra cứu chuyên sâu hoặc luyện DSA nâng cao. BST, bảng băm và heap vẫn là nền cần học.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 26 String algorithms: trie,string hashing và xử lý chuỗi; chọn đúng cấu trúc của ô đang học.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 086 · Nâng cấp tra cứu thư viện

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Lập chỉ mục mã sách bằng bảng băm; giữ danh sách sách là nguồn dữ liệu chính và tránh con trỏ treo khi vector đổi vùng nhớ.
- [ ] Thử thêm,sửa,xóa và đối chiếu kết quả mọi truy vấn với duyệt tuyến tính để phát hiện chỉ mục cũ hoặc thiếu.
- [ ] Đo riêng truy vấn,xây/cập nhật chỉ mục và bộ nhớ phụ. Tra tên có thể duyệt tuyến tính; chỉ nâng cấp trie nếu đã học ô vàng tương ứng và có nhu cầu.
- [ ] Nếu bổ sung trie, chốt tập ký tự/giới hạn tiếng Việt và kiểm tra hành vi khi nhập ký tự không hỗ trợ.
- [ ] Nếu bỏ qua trie, chỉ bắt buộc lập chỉ mục mã bằng bảng băm và tra tên bằng duyệt tuyến tính; thử thêm/xóa để chứng minh chỉ mục không lệch. Trie là phần nâng cấp sau khi tự làm được ô tương ứng.

## 08. Tư duy và thuật toán cơ bản

### 087 · Tự kiểm tra thuật toán đã học ở 28tech

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Làm các mục sau trước khi mở lời giải cũ. Ghi từng mục: tự làm được / cần gợi ý / chưa học; không cộng thành điểm đoán mức giỏi chung.
- [ ] Tự cài binary search trên [1,3,5,7], thử tìm 1,7 và 4; giải thích nửa mảng còn giữ lại.
- [ ] Tính tổng đoạn bằng prefix sum trên dãy có số âm, nói rõ chỉ số hai đầu.
- [ ] Đếm cách lên bậc thang khi đi 1 hoặc 2 bậc; tự nêu trạng thái và điều kiện đầu, chưa xem bài DP cũ.
- [ ] Sau khi thử, chỉ ôn lại mục chưa tự làm được theo các liên kết bên dưới. Chưa học là điểm bắt đầu bình thường; không tự đánh dấu cả chặng hoàn thành và không cần làm lại toàn bộ kho 28tech.

**Ô cần ôn theo kết quả kiểm tra:**

- [ ] 088 · Tìm kiếm tuyến tính và nhị phân (`algo-search`)
- [ ] 097 · Prefix sum và mảng hiệu (`algo-prefix`)
- [ ] 104 · Khung tư duy quy hoạch động (SRTBOT) (`algo-dp`)

**Thông tin thêm & Lưu ý bản chất:**

Bài tự kiểm tra để chọn điểm ôn, không có chấm tự động. Code cũ chỉ mở sau lượt thử; khi đã tự làm được một mục, vẫn kiểm tra bằng ca biên hoặc biến thể trước khi đi nhanh qua phần tương ứng.

### 088 · Tìm kiếm tuyến tính và nhị phân

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cắt bỏ 50% không gian tìm kiếm trong O(1) nhờ tính đơn điệu của mảng đã sắp xếp. Mô hình nhận thức: Mảng tăng dần có tính đơn điệu, cho phép cắt bỏ 50% không gian tìm kiếm trong O(1). Bất biến: target luôn nằm trong đoạn [low, high].
- [ ] Cài đặt chuẩn lower_bound (vị trí đầu tiên >= x) và upper_bound (vị trí đầu tiên > x). Logic cốt lõi: Cài đặt chuẩn lower_bound (vị trí đầu tiên >= target) và upper_bound (vị trí đầu tiên > target). Tính mid = low + (high - low) / 2 chống tràn số nguyên.
- [ ] Dùng mid = low + (high - low) / 2 tránh tràn số; xử lý mảng rỗng và phần tử trùng lặp. C++ chuẩn mực: Vòng lặp while (low <= high), khi a[mid] >= target thì lưu ans = mid và thu hẹp high = mid - 1; ngược lại low = mid + 1.
- [ ] Xử lý chuẩn xác mảng rỗng, phần tử trùng lặp và giá trị ngoài biên.
- [ ] Đọc cẩm nang tìm kiếm nhị phân tại docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md và bài tập tại docs/exercises/02-BINARY-SEARCH-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Tìm kiếm nhị phân trên mảng đã sắp xếp: Dựa trên tính đơn điệu để cắt bỏ 50% không gian tìm kiếm trong O(1). Bất biến: target luôn nằm trong [low, high]. Tính mid = low + (high - low) / 2 chống tràn số. Cài đặt chuẩn lower_bound (vị trí đầu tiên >= target) và upper_bound (vị trí đầu tiên > target). Tài liệu: docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md và docs/exercises/02-BINARY-SEARCH-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** §3.3 Binary search: vị trí,điều kiện đơn điệu và tìm trên đáp án.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Guide: Sắp xếp Quicksort/Merge Sort & Tìm kiếm Nhị phân trên tập kết quả](./docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về tư duy chia để trị trong Merge Sort/Quicksort và tìm kiếm nhị phân.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 089 · Chặt nhị phân trên kết quả (Binary Search on Answer)

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Chuyển bài toán tối ưu thành bài toán kiểm tra tính khả thi can(mid) có tính đơn điệu FFFF...TTTT. Mô hình nhận thức: Khuôn mẫu Chặt nhị phân kết quả (Binary Search on Answer) chuyển bài toán tối ưu thành bài toán kiểm tra tính khả thi can(mid) có tính đơn điệu FFFF...TTTT hoặc TTTT...FFFF.
- [ ] Dùng phạm vi long long tới 10^18 và dừng cộng sớm chống tràn số trong CSES Factory Machines. Logic cốt lõi: Trong CSES Factory Machines, hàm can(T) tính tổng sản lượng sum(T / k). Nếu tổng >= target, lưu T và tìm tiếp bên trái (high = mid - 1); ngược lại low = mid + 1.
- [ ] Xác định đúng cận low, high và điều kiện cập nhật để tìm giá trị khả thi nhỏ nhất/lớn nhất. C++ chuẩn mực: Sử dụng long long cho low, high, mid với miền giá trị lên tới 10^18; dừng sớm trong vòng lặp can() ngay khi total >= target để chống tràn số long long.
- [ ] Tự liệt kê bảng kiểm thử cho vài máy nhỏ để xác nhận can(ans) đúng và can(ans - 1) sai.
- [ ] Tham khảo docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md và bài tập tại docs/exercises/02-BINARY-SEARCH-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Chặt nhị phân trên kết quả (Binary Search on Answer): Chuyển bài toán tối ưu thành bài toán kiểm tra tính khả thi can(mid) có tính đơn điệu (FFFF...TTTT hoặc TTTT...FFFF). Trong CSES Factory Machines, hàm can(T) tính tổng sản lượng sum(T/k) với phạm vi long long tới 10^18 và dừng sớm chống tràn số. Tài liệu: docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md và docs/exercises/02-BINARY-SEARCH-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** §3.3 Binary search: vị trí,điều kiện đơn điệu và tìm trên đáp án.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Guide: Sắp xếp Quicksort/Merge Sort & Tìm kiếm Nhị phân trên tập kết quả](./docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về tư duy chia để trị trong Merge Sort/Quicksort và tìm kiếm nhị phân.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.
- [Offline Exercises: Tuyển tập bài tập Tìm kiếm nhị phân CSES & LeetCode](./docs/exercises/02-BINARY-SEARCH-EXERCISES.md)
  - **Phần cần đọc:** Bộ bài tập tuyển chọn bài bản về tìm kiếm nhị phân trên tập kết quả CSES và LeetCode.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 090 · Insertion sort

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cài cách chèn phần tử tiếp theo vào đoạn đầu đã sắp xếp. Mô hình nhận thức Sắp xếp Chèn (Insertion Sort): Duy trì bất biến đoạn tiền tố a[0..i-1] luôn luôn được sắp xếp có thứ tự; phần tử a[i] được chèn vào đúng vị trí của nó bằng cách dịch chuyển các phần tử lớn hơn sang phải.
- [ ] Viết bất biến của đoạn đã sắp, đếm phép dịch khi mảng tăng và giảm. Bảo toàn Tính ổn định (Stability): Sử dụng điều kiện so sánh nghiêm ngặt (a[j] > key) để các phần tử có khóa bằng nhau giữ nguyên thứ tự ban đầu.
- [ ] Kiểm tra tính ổn định bằng các bản ghi có khóa bằng nhau. Phân tích độ phức tạp theo Nghịch thế (Inversions): Số phép dịch chuyển bằng chính xác số cặp nghịch thế trong mảng; chạy cực nhanh O(N) trên mảng gần như đã sắp xếp.
- [ ] Hiểu giới hạn chặn dưới của các thuật toán đổi chỗ kề nhau: Bất kỳ thuật toán nào chỉ so sánh 2 phần tử cạnh nhau đều bị chặn dưới bởi Omega(N^2) trong trường hợp trung bình.

**Nguồn tham khảo miễn phí:**

- [MIT 6.006 — lecture notes, Spring 2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/)
  - **Phần cần đọc:** Lecture 3 Sorting và Lecture 8 Binary Heaps; với selection/bubble, chạy tay và kiểm chứng theo nhiệm vụ, không cần tìm một video riêng cho từng thuật toán.
  - **Truy cập:** Lecture notes, bài tập và lời giải công khai miễn phí trên OCW.

### 091 · Selection sort

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Mỗi lượt chọn phần tử nhỏ nhất của đoạn chưa sắp và đưa về đầu. Mô hình nhận thức Sắp xếp Chọn (Selection Sort): Tại lượt i, quét tìm phần tử nhỏ nhất trong đoạn chưa sắp xếp a[i..n-1] rồi hoán đổi về vị trí a[i].
- [ ] Đếm số so sánh, hoán đổi rồi so với insertion sort. Bất biến giải thuật: Đoạn a[0..i] không chỉ có thứ tự mà còn chứa đúng i phần tử nhỏ nhất của toàn bộ mảng ban đầu.
- [ ] Tự tạo ví dụ làm thay đổi thứ tự hai bản ghi cùng khóa để xét tính ổn định. Bản chất Không Ổn định: Phép hoán đổi từ xa qua nhiều phần tử làm đảo lộn thứ tự tương đối của các phần tử có khóa bằng nhau.
- [ ] Đặc điểm tài nguyên: Số phép hoán đổi luôn là tối thiểu O(N) dù số phép so sánh luôn là bậc hai O(N^2); phù hợp khi chi phí ghi ô nhớ (flash memory write) đắt đỏ.

**Nguồn tham khảo miễn phí:**

- [MIT 6.006 — lecture notes, Spring 2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/)
  - **Phần cần đọc:** Lecture 3 Sorting và Lecture 8 Binary Heaps; với selection/bubble, chạy tay và kiểm chứng theo nhiệm vụ, không cần tìm một video riêng cho từng thuật toán.
  - **Truy cập:** Lecture notes, bài tập và lời giải công khai miễn phí trên OCW.

### 092 · Bubble sort

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cài so sánh hai phần tử kề nhau và đổi chỗ khi sai thứ tự. Mô hình nhận thức Sắp xếp Nổi bọt (Bubble Sort): Quét liên tục các cặp phần tử kề nhau, phần tử lớn hơn nổi dần về cuối mảng như bọt khí.
- [ ] Thêm cờ dừng sớm nếu cả lượt không đổi chỗ. Tối ưu Dừng sớm (Early Exit Optimization): Dùng cờ swapped để nhận diện mảng đã có thứ tự sau 1 lượt duyệt, đưa thời gian trường hợp tốt nhất về O(N).
- [ ] Chứng minh sau một lượt phần tử lớn nhất của đoạn chưa xử lý về cuối; so trường hợp tốt và xấu. Chứng minh tính ổn định: Chỉ hoán đổi khi a[j] > a[j+1] (không hoán đổi khi bằng nhau), bảo toàn tuyệt đối thứ tự tương đối.
- [ ] Đối chiếu với Insertion Sort để thấy Insertion Sort luôn tối ưu hơn về hằng số phép gán và số bước duyệt.

**Nguồn tham khảo miễn phí:**

- [MIT 6.006 — lecture notes, Spring 2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/)
  - **Phần cần đọc:** Lecture 3 Sorting và Lecture 8 Binary Heaps; với selection/bubble, chạy tay và kiểm chứng theo nhiệm vụ, không cần tìm một video riêng cho từng thuật toán.
  - **Truy cập:** Lecture notes, bài tập và lời giải công khai miễn phí trên OCW.

### 093 · Merge sort và chia để trị (Divide and Conquer)

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Chia đôi bài toán độc lập với hệ thức truy hồi T(N) = 2T(N/2) + O(N) đạt O(N log N) trong mọi trường hợp. Mô hình nhận thức: Chia để trị (Divide and Conquer). Hệ thức truy hồi T(N) = 2T(N/2) + O(N) chứng minh thời gian O(N log N) trong mọi trường hợp.
- [ ] Bảo toàn bất biến ổn định (Stable Sort): khi hai khóa bằng nhau a[i] <= a[j], luôn nhặt phần tử bên trái trước. Bất biến ổn định (Stable Sort): khi hai phần tử bằng nhau (a[i] <= a[j]), luôn ưu tiên nhặt phần tử bên trái vào mảng đệm để bảo toàn thứ tự ban đầu.
- [ ] Sử dụng mảng đệm truyền tham chiếu để tránh cấp phát lặp lại trong đệ quy. Logic cốt lõi: Hàm merge(a, left, mid, right, temp) dùng hai con trỏ i = left, j = mid + 1 quét đồng thời hai nửa đã sắp xếp, sau đó chép ngược từ temp về a.
- [ ] C++ chuẩn mực: Cấp phát mảng đệm temp một lần từ ngoài rồi truyền tham chiếu (vector<int>& temp) để triệt tiêu chi phí cấp phát lặp lại trong đệ quy.
- [ ] Tham khảo cẩm nang sắp xếp tại docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md và bài tập tại docs/exercises/01-SORTING-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Merge Sort & Chia để trị (Divide and Conquer): Hệ thức truy hồi T(N) = 2T(N/2) + O(N) chứng minh thời gian O(N log N) trong mọi trường hợp. Bất biến ổn định (Stable Sort): khi a[i] <= a[j], luôn nhặt phần tử bên trái trước để bảo toàn thứ tự ban đầu. Sử dụng mảng đệm temp truyền tham chiếu vector<int>& để tránh cấp phát lặp lại trong đệ quy. Tài liệu: docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md và docs/exercises/01-SORTING-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [MIT 6.006 — lecture notes, Spring 2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/)
  - **Phần cần đọc:** Lecture 3 Sorting và Lecture 8 Binary Heaps; với selection/bubble, chạy tay và kiểm chứng theo nhiệm vụ, không cần tìm một video riêng cho từng thuật toán.
  - **Truy cập:** Lecture notes, bài tập và lời giải công khai miễn phí trên OCW.
- [Offline Guide: Sắp xếp Quicksort/Merge Sort & Tìm kiếm Nhị phân trên tập kết quả](./docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về tư duy chia để trị trong Merge Sort/Quicksort và tìm kiếm nhị phân.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 094 · Quicksort và cơ chế phân hoạch

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Hiểu bản chất phân hoạch: Lomuto (con trỏ chậm/nhanh) vs Hoare (hai con trỏ dồn vào giữa). Mô hình nhận thức: Phân hoạch (Partitioning) chia mảng quanh pivot: bên trái <= pivot, bên phải >= pivot, đưa pivot về vị trí tuyệt đối mà không cần mảng đệm (in-place).
- [ ] Chọn pivot ngẫu nhiên (Randomized Pivot) hoặc Median-of-Three để triệt tiêu nguy cơ O(N²) khi mảng đã sắp sẵn. So sánh Hoare vs Lomuto: Hoare dùng hai con trỏ dồn từ hai đầu vào giữa, tối ưu gấp 3 lần số phép đổi chỗ so với Lomuto.
- [ ] Sắp xếp tại chỗ (in-place) với chi phí trung bình O(N log N) và ngăn xếp O(log N). Chống suy biến O(N²): Chọn pivot ngẫu nhiên (Randomized Pivot) bằng cách đổi chỗ phần tử ngẫu nhiên với a[left] trước khi phân hoạch để ngăn trường hợp xấu nhất trên mảng đã sắp.
- [ ] C++ chuẩn mực: Cài đặt Hoare partition cẩn thận với vòng lặp do-while, điều kiện dừng đệ quy left >= right, chi phí ngăn xếp O(log N).
- [ ] Tham khảo docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md và bài tập tại docs/exercises/01-SORTING-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Quicksort & Cơ chế phân hoạch: Phân hoạch Lomuto (con trỏ chậm/nhanh) vs Hoare (hai con trỏ dồn từ hai đầu vào giữa, tối ưu gấp 3 lần số phép đổi chỗ). Khắc phục suy biến O(N²) bằng Randomized Pivot (chọn ngẫu nhiên một phần tử đổi chỗ với a[left]). Sắp xếp tại chỗ (in-place) với ngăn xếp O(log N). Tài liệu: docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md và docs/exercises/01-SORTING-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [MIT 6.006 — lecture notes, Spring 2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/)
  - **Phần cần đọc:** Lecture 3 Sorting và Lecture 8 Binary Heaps; với selection/bubble, chạy tay và kiểm chứng theo nhiệm vụ, không cần tìm một video riêng cho từng thuật toán.
  - **Truy cập:** Lecture notes, bài tập và lời giải công khai miễn phí trên OCW.
- [Offline Guide: Sắp xếp Quicksort/Merge Sort & Tìm kiếm Nhị phân trên tập kết quả](./docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về tư duy chia để trị trong Merge Sort/Quicksort và tìm kiếm nhị phân.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 095 · Heapsort

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Xây max-heap rồi lần lượt đưa phần tử lớn nhất về cuối mảng. Mô hình nhận thức Sắp xếp Vun đống (Heap Sort): Tận dụng cấu trúc dữ liệu Max-Heap để liên tục trích xuất phần tử lớn nhất về cuối mảng.
- [ ] Thu nhỏ vùng heap và phục hồi bất biến sau mỗi lần lấy. Bản chất thuật toán 2 pha: Pha 1 xây Max-Heap O(N) bằng sift-down từ dưới lên; Pha 2 liên tục hoán đổi gốc a[0] với a[i], giảm kích thước heap và sift-down gốc mới mất O(N log N).
- [ ] So tính ổn định, bộ nhớ và thời gian với merge sort, quicksort. Ưu thế Tuyệt đối về Bộ nhớ: Hoàn toàn in-place với bộ nhớ phụ O(1), không tốn mảng đệm như Merge Sort và không có nguy cơ suy biến O(N^2) như Quicksort.
- [ ] Đánh đổi: Heap Sort không ổn định và không thân thiện với CPU Cache do các bước nhảy chỉ số 2i+1, 2i+2 cách xa nhau trên RAM.

**Nguồn tham khảo miễn phí:**

- [MIT 6.006 — lecture notes, Spring 2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/)
  - **Phần cần đọc:** Lecture 3 Sorting và Lecture 8 Binary Heaps; với selection/bubble, chạy tay và kiểm chứng theo nhiệm vụ, không cần tìm một video riêng cho từng thuật toán.
  - **Truy cập:** Lecture notes, bài tập và lời giải công khai miễn phí trên OCW.

### 096 · Kiểm chứng thuật toán sắp xếp

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Sinh dữ liệu nhỏ, so kết quả từng cách với std::sort. Phương pháp Kiểm chứng Thuật toán Sắp xếp Toàn diện: Đối chiếu kết quả với thư viện chuẩn (std::sort) trên các tập dữ liệu cực trị.
- [ ] Thử rỗng, tăng, giảm, trùng và giá trị cực biên. Kiểm tra Bảo toàn Đa tập (Multiset Invariant): Thuật toán không chỉ sắp xếp tăng dần mà phải chứng minh không làm rơi rụng hoặc nhân đôi bất kỳ phần tử nào.
- [ ] Giải CSES Distinct Numbers; tách lỗi thuật toán khỏi lỗi nhập xuất. Thiết kế bộ kiểm thử chuyên biệt: Mảng rỗng, mảng 1 phần tử, mảng đã tăng dần, mảng giảm dần, mảng toàn giá trị trùng, và mảng có kích thước lũy thừa của 2.
- [ ] Đo lường thời gian thực thi (Benchmarking): Phân biệt chi phí thuật toán với chi phí Nhập/Xuất dữ liệu (I/O).

**Nguồn tham khảo miễn phí:**

- [MIT 6.006 — lecture notes, Spring 2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/)
  - **Phần cần đọc:** Lecture 3 Sorting và Lecture 8 Binary Heaps; với selection/bubble, chạy tay và kiểm chứng theo nhiệm vụ, không cần tìm một video riêng cho từng thuật toán.
  - **Truy cập:** Lecture notes, bài tập và lời giải công khai miễn phí trên OCW.
- [Offline Exercises: Tuyển tập bài tập Sắp xếp CSES & VNOI](./docs/exercises/01-SORTING-EXERCISES.md)
  - **Phần cần đọc:** Bộ bài tập tuyển chọn bài bản về thuật toán sắp xếp trên CSES và VNOI kèm phân tích chi tiết.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 097 · Prefix sum và mảng hiệu

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Xây tổng tiền tố để trả lời tổng một đoạn. Mô hình nhận thức Mảng Cộng dồn (Prefix Sum): Tích phân rời rạc trên mảng, tiền xử lý trong O(N) để trả lời truy vấn tổng đoạn con [L, R] trong O(1): sum(L..R) = prefix[R+1] - prefix[L].
- [ ] Dùng mảng hiệu cho nhiều cập nhật đoạn rồi khôi phục giá trị. Mô hình Mảng Hiệu (Difference Array): Vi phân rời rạc trên mảng, cho phép thực hiện thao tác cộng giá trị V vào đoạn [L, R] trong O(1) bằng cách diff[L] += V và diff[R+1] -= V.
- [ ] Viết rõ chỉ số 0 hay 1; thử đoạn một phần tử và toàn mảng. Khôi phục Mảng Gốc: Lấy tổng tiền tố của mảng hiệu để khôi phục toàn bộ mảng ban đầu sau hàng loạt truy vấn cập nhật đoạn.
- [ ] Lưu ý kiểu dữ liệu: Sử dụng kiểu 64-bit (long long) cho mảng prefix sum để chống tràn số khi tổng các phần tử vượt quá 2*10^9.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 9 Range queries: prefix sums,binary indexed tree và segment tree; chỉ đọc cấu trúc tương ứng ô hiện tại.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 098 · Kỹ thuật hai con trỏ và cửa sổ trượt

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Hai con trỏ ngược chiều trên mảng sắp xếp: tăng L khi tổng nhỏ, giảm R khi tổng lớn, chi phí đúng O(N). Mô hình nhận thức: Kỹ thuật hai con trỏ ngược chiều (Opposite Direction) trên mảng đã sắp xếp: L = 0, R = N - 1. Nếu a[L] + a[R] < target thì tăng L, nếu > target thì giảm R; mỗi bước loại bỏ 1 ứng viên mà không bao giờ quay lui -> chi phí đúng O(N).
- [ ] Phân biệt hai con trỏ ngược chiều với cửa sổ trượt (Sliding Window) cùng chiều co giãn. Logic cốt lõi: Phân biệt với Cửa sổ trượt (Sliding Window) cùng chiều: mở rộng biên phải (right++) nạp trạng thái, co biên trái (left++) khi vi phạm ràng buộc.
- [ ] Nhận diện bẫy số âm: cửa sổ trượt theo tổng chỉ bảo toàn tính đơn điệu khi mảng toàn số không âm. C++ chuẩn mực & Cảnh báo bẫy: Cửa sổ trượt theo tổng chỉ bảo toàn tính đơn điệu khi mảng toàn số không âm; với dữ liệu có số âm, bài toán tổng đoạn bắt buộc giải bằng Prefix Sum kết hợp Hash Map O(N).
- [ ] Tham khảo cẩm nang tại docs/guides/04-TWO-POINTERS-SLIDING-WINDOW.md và bài tập tại docs/exercises/03-TWO-POINTERS-SLIDING-WINDOW-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Kỹ thuật hai con trỏ (Two Pointers): Con trỏ ngược chiều trên mảng sắp xếp (L = 0, R = N - 1) loại bỏ 1 ứng viên mỗi bước trong O(N). Phân biệt với Cửa sổ trượt (Sliding Window) cùng chiều: mở rộng right++ và co left++ khi vi phạm ràng buộc. Cảnh báo: cửa sổ trượt theo tổng chỉ bảo toàn đơn điệu khi mảng toàn số không âm; có số âm phải dùng Prefix Sum + Hash Map. Tài liệu: docs/guides/04-TWO-POINTERS-SLIDING-WINDOW.md và docs/exercises/03-TWO-POINTERS-SLIDING-WINDOW-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 8 Amortized analysis: two pointers và sliding window.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Guide: Hai Con Trỏ & Cửa Sổ Trượt (Two Pointers & Sliding Window)](./docs/guides/04-TWO-POINTERS-SLIDING-WINDOW.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về kỹ thuật hai con trỏ, cửa sổ trượt và bẫy số âm.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 099 · Thực hành hai con trỏ và cửa sổ trượt

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Giải CSES Sum of Two Values (hai con trỏ kẹp) và Playlist (cửa sổ trượt dãy con không lặp). Mô hình nhận thức: Đoạn con liên tiếp hợp lệ dài nhất/ngắn nhất. Mỗi phần tử được thêm đúng 1 lần và loại tối đa 1 lần -> tổng số thao tác <= 2N, đạt O(N) thời gian khấu hao (amortized).
- [ ] Chứng minh mỗi con trỏ chỉ đi một chiều từ 0 đến N, tổng số thao tác <= 2N đạt O(N) khấu hao. Logic cốt lõi: Trong CSES Playlist (dãy con không lặp), dùng map/unordered_map lưu vị trí xuất hiện gần nhất lastPos[val]. Khi gặp phần tử lặp, co con trỏ trái left = max(left, lastPos[val] + 1) và cập nhật maxLen = max(maxLen, right - left + 1).
- [ ] Xử lý dữ liệu trùng lặp và giữ chỉ số gốc khi cần xuất kết quả. C++ chuẩn mực: Trong CSES Sum of Two Values, lưu cặp {giá trị, chỉ số ban đầu} trước khi sort để xuất đúng vị trí 1-based index theo yêu cầu đề bài.
- [ ] Đối chiếu với vét cạn O(N²) trên dữ liệu nhỏ.
- [ ] Tham khảo docs/guides/04-TWO-POINTERS-SLIDING-WINDOW.md và bài tập tại docs/exercises/03-TWO-POINTERS-SLIDING-WINDOW-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Thực hành Hai con trỏ & Cửa sổ trượt: Trong CSES Playlist (dãy con không lặp), dùng map/unordered_map lưu vị trí xuất hiện gần nhất lastPos[val], co left = max(left, lastPos[val] + 1) đạt O(N) khấu hao (mỗi phần tử thêm/bỏ tối đa 1 lần). Trong CSES Sum of Two Values, lưu cặp {giá trị, chỉ số gốc} trước khi sort. Tài liệu: docs/guides/04-TWO-POINTERS-SLIDING-WINDOW.md và docs/exercises/03-TWO-POINTERS-SLIDING-WINDOW-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 8 Amortized analysis: two pointers và sliding window.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Guide: Hai Con Trỏ & Cửa Sổ Trượt (Two Pointers & Sliding Window)](./docs/guides/04-TWO-POINTERS-SLIDING-WINDOW.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về kỹ thuật hai con trỏ, cửa sổ trượt và bẫy số âm.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.
- [Offline Exercises: Tuyển tập bài tập Hai con trỏ & Cửa sổ trượt CSES](./docs/exercises/03-TWO-POINTERS-SLIDING-WINDOW-EXERCISES.md)
  - **Phần cần đọc:** Bộ bài tập tuyển chọn bài bản về hai con trỏ và cửa sổ trượt trên CSES kèm hướng dẫn.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 100 · Quay lui và cắt tỉa

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Sinh tập con, hoán vị và lời giải n quân hậu với n nhỏ. Mô hình nhận thức Quay lui (Backtracking): Khám phá Không gian Trạng thái (State Space Tree) theo chiều sâu kết hợp Cắt tỉa (Pruning).
- [ ] Phân biệt trạng thái hiện tại với lựa chọn tiếp theo. Quy trình 4 pha bất biến: (1) Kiểm tra trạng thái đích -> (2) Lựa chọn ứng viên hợp lệ -> (3) Đệ quy tiến sang trạng thái kế tiếp -> (4) Hoàn tác lựa chọn (Backtrack) để làm sạch không gian cho nhánh kế tiếp.
- [ ] Hoàn tác đúng sau mỗi nhánh; chỉ cắt khi có lý do không thể tạo lời giải hợp lệ. Kỹ thuật Cắt tỉa nhánh cận (Branch and Bound): Loại bỏ ngay lập tức toàn bộ cây con đệ quy khi nhận thấy nhánh hiện tại không thể dẫn tới lời giải hợp lệ hoặc tối ưu.
- [ ] Mô hình hóa bài toán N-Queens: Quản lý xung đột hàng, cột, đường chéo chính (r - c) và đường chéo phụ (r + c) bằng mảng boolean O(1).

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 5 Complete search: generating subsets/permutations,backtracking và pruning.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 101 · Kiểm tra lời giải quay lui

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Giải CSES Creating Strings và Chessboard and Queens. Tư duy Khử trùng lặp trong Không gian Tìm kiếm: Sắp xếp các phần tử ban đầu và bỏ qua các lựa chọn trùng lặp ở cùng độ sâu đệ quy (if (i > start && a[i] == a[i-1]) continue).
- [ ] Tránh sinh lặp khi đầu vào có ký tự trùng. Kỹ thuật sinh tổ hợp, hoán vị và tập con: Hiểu bản chất nhị phân của tập con (mỗi phần tử có 2 lựa chọn: chọn hoặc không chọn).
- [ ] So số lời giải với bộ kiểm thử nhỏ tự liệt kê. Phân tích độ phức tạp thời gian cấp số nhân: Hiểu vì sao quay lui chỉ áp dụng được cho N nhỏ (N <= 20 với 2^N, N <= 12 với N!).
- [ ] Viết bộ sinh dữ liệu kiểm thử nhỏ để xác nhận giải thuật quay lui tìm đủ và không sót bất kỳ nghiệm nào.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 5 Complete search: generating subsets/permutations,backtracking và pruning.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 102 · Tham lam và cách chứng minh

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Giải bài chọn nhiều khoảng không giao nhau bằng sắp theo thời điểm kết thúc. Mô hình nhận thức Giải thuật Tham lam (Greedy Algorithm): Luôn đưa ra lựa chọn có vẻ tốt nhất ở thời điểm hiện tại (cục bộ) với hy vọng dẫn tới kết quả tối ưu toàn cục.
- [ ] Viết lập luận trao đổi cho lựa chọn đầu tiên. Hai điều kiện tiên quyết: Tính chất Lựa chọn Tham lam (Greedy Choice Property) và Cấu trúc con Tối ưu (Optimal Substructure).
- [ ] Tạo phản ví dụ cho chọn khoảng bắt đầu sớm nhất và chọn khoảng ngắn nhất. Kỹ thuật Chứng minh bằng Lập luận Trao đổi (Exchange Argument): Giả sử tồn tại một lời giải tối ưu khác, chứng minh rằng việc hoán đổi bước đầu tiên của nó thành lựa chọn tham lam không làm giảm chất lượng lời giải.
- [ ] Nhận diện ranh giới thất bại: Phân biệt bài toán đổi tiền có hệ tiền tệ chính quy (Canonical Coin System giải được bằng tham lam) vs hệ tiền tệ bất kỳ (bắt buộc dùng Quy hoạch động).

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 6 Greedy algorithms: chiến lược và điều kiện đúng; viết phản ví dụ trước khi chấp nhận một greedy mới.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 103 · Phân biệt tham lam đúng và sai

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Giải CSES Movie Festival và Ferris Wheel. Tư duy Bài toán Xếp lịch Khoảng (Interval Scheduling): Sắp xếp các công việc tăng dần theo THỜI ĐIỂM KẾ THÚC (End Time), luôn chọn công việc kết thúc sớm nhất để giải phóng tài nguyên cho các việc sau.
- [ ] Thử bài đổi tiền với hệ đồng 1,3,4 để thấy tham lam có thể sai. Bài toán Thuyền cứu hộ (Ferris Wheel / Two Sum Greedy): Sắp xếp mảng và dùng 2 con trỏ ghép người nặng nhất với người nhẹ nhất có thể chở cùng.
- [ ] Giải thích lựa chọn và chứng minh, không chỉ ghi mã được chấp nhận. Tự tìm phản ví dụ (Counter-examples): Rèn luyện phản xạ luôn tìm ca biên phản chứng trước khi tin vào một chiến lược tham lam trực giác.
- [ ] Đo lường độ phức tạp: Phần lớn thuật toán tham lam tốn thời gian ở bước sắp xếp O(N log N), bước duyệt tham lam chỉ tốn O(N).

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 6 Greedy algorithms: chiến lược và điều kiện đúng; viết phản ví dụ trước khi chấp nhận một greedy mới.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Algorithms — Jeff Erickson](https://jeffe.cs.illinois.edu/teaching/algorithms/)
  - **Phần cần đọc:** Đọc chương Greedy Algorithms hoặc Dynamic Programming theo ô đang luyện; chọn một bài cần tự lập luận. Đây là nguồn đào sâu sau khi đã học khái niệm, không thay bài nhập môn.
  - **Truy cập:** Toàn bộ sách và từng chương PDF miễn phí; dùng sau nền đệ quy, cấu trúc dữ liệu và chứng minh.

### 104 · Khung tư duy quy hoạch động (SRTBOT)

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Áp dụng khung SRTBOT: Subproblems, Relate (truy hồi), Topo order trên DAG, Base cases, Original problem, Time. Mô hình nhận thức: Khung tư duy 6 bước SRTBOT (MIT 6.006): Subproblems (định nghĩa trạng thái), Relate (truy hồi), Topological order (thứ tự tính trên DAG bài toán con), Base cases (cơ sở), Original problem (lấy đáp án), Time complexity (số trạng thái x chi phí chuyển).
- [ ] Phân biệt Đệ quy có nhớ (Top-down) với Lập bảng có thứ tự (Bottom-up). Logic cốt lõi: Xác định 2 điều kiện tiên quyết: Cấu trúc con tối ưu (Optimal Substructure) và Bài toán con gối nhau (Overlapping Subproblems).
- [ ] Xác định 2 điều kiện tiên quyết: Cấu trúc con tối ưu và Bài toán con gối nhau. C++ chuẩn mực: Phân biệt Top-down Memoization (đệ quy có nhớ) vs Bottom-up Tabulation (lập bảng theo thứ tự topo thân thiện cache CPU).
- [ ] Tính bộ nhớ trước và sau khi tối ưu; với bài cầu thang, đối chiếu với Fibonacci.
- [ ] Tham khảo cẩm nang quy hoạch động tại docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md và bài tập tại docs/exercises/06-DYNAMIC-PROGRAMMING-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Quy hoạch động (Dynamic Programming): Khung tư duy 6 bước SRTBOT (Subproblems, Relate, Topo order trên DAG, Base cases, Original problem, Time). 2 điều kiện tiên quyết: Cấu trúc con tối ưu và Bài toán con gối nhau. So sánh Top-down Memoization vs Bottom-up Tabulation. Tài liệu: docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md và docs/exercises/06-DYNAMIC-PROGRAMMING-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 7 Dynamic programming: coin change,LIS,knapsack và trạng thái; chỉ làm chủ đề tương ứng ô đang học.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 105 · Đổi tiền bằng quy hoạch động

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Giải CSES Minimizing Coins và Coin Combinations I, II. Mô hình Đổi tiền (Coin Change): Phân biệt rõ hai bài toán: (1) Tìm số đồng xu ít nhất (Min Coins) vs (2) Đếm số cách đổi tiền (Count Ways).
- [ ] Phân biệt đếm thứ tự chọn với đếm tổ hợp. Bản chất Thứ tự Vòng lặp: Duyệt đồng xu ở vòng ngoài -> đếm số TỔ HỢP (không phân biệt thứ tự); Duyệt đồng xu ở vòng trong -> đếm số HOÁN VỊ (phân biệt thứ tự đồng xu rút ra).
- [ ] Thử tổng bằng 0 và trường hợp không ghép được; dùng modulo khi đề yêu cầu. Xử lý trạng thái cơ sở và giá trị vô cực (INF): Khởi tạo dp[0] = 0, các trạng thái khác = INF; kiểm tra dp[w - coin] != INF trước khi cập nhật để tránh cộng tràn số.
- [ ] Tối ưu không gian bộ nhớ: Nén bảng trạng thái về mảng 1D duyệt xuôi (cho phép dùng lại một đồng xu nhiều lần - Unbounded Knapsack).

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 7 Dynamic programming: coin change,LIS,knapsack và trạng thái; chỉ làm chủ đề tương ứng ô đang học.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 106 · Ba lô 0/1 (Knapsack) và kỹ thuật nén mảng

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Thiết lập trạng thái 2D dp[i][w] biểu diễn giá trị lớn nhất khi xét i vật với sức chứa tối đa w. Mô hình nhận thức: Ba lô 0/1 (0/1 Knapsack): trạng thái 2D dp[i][w] là giá trị lớn nhất khi xét i vật với sức chứa tối đa w. Truy hồi: dp[i][w] = max(dp[i-1][w], dp[i-1][w - weight[i]] + value[i]).
- [ ] Bản chất nén mảng 1D: bắt buộc duyệt ngược w từ W về weight[i] để ngăn vật i bị chọn lặp lại nhiều lần. Logic cốt lõi & Bản chất nén mảng 1D: BẮT BUỘC cho w chạy giảm dần từ W về weight[i]. Lý do vật lý: nếu duyệt tăng dần, dp[w - weight[i]] đã bị cập nhật bởi chính vật i ở vòng lặp hiện tại khiến vật i bị dùng vô hạn lần (thành Unbounded Knapsack)!
- [ ] Giải CSES Book Shop và phân biệt với Unbounded Knapsack (duyệt xuôi). C++ chuẩn mực: Cài đặt CSES Book Shop với vector<int> dp(W + 1, 0), lặp vật i từ 0..n-1, lặp lùi w từ W về price[i] cập nhật dp[w] = max(dp[w], dp[w - price[i]] + pages[i]).
- [ ] Tham khảo docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md và bài tập tại docs/exercises/06-DYNAMIC-PROGRAMMING-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Ba lô 0/1 (Knapsack): Trạng thái dp[i][w] = max(dp[i-1][w], dp[i-1][w - weight[i]] + value[i]). Bản chất nén mảng 1D: BẮT BUỘC duyệt ngược w từ W về weight[i] để ngăn vật i bị chọn lặp lại trong cùng lượt (khác Unbounded Knapsack duyệt xuôi). CSES Book Shop. Tài liệu: docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md và docs/exercises/06-DYNAMIC-PROGRAMMING-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 7 Dynamic programming: coin change,LIS,knapsack và trạng thái; chỉ làm chủ đề tương ứng ô đang học.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Guide: Khung tư duy Quy hoạch động SRTBOT, Ba lô 0/1, LIS & LCS](./docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về khung tư duy 6 bước SRTBOT, Ba lô 0/1, LIS và LCS.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 107 · Dãy con chung dài nhất (LCS)

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Xây dựng lưới trạng thái 2D dp[i][j] trên tiền tố chuỗi: ghép chéo khi ký tự khớp, lấy max hai nhánh khi khác. Mô hình nhận thức: Dãy con chung dài nhất (LCS). Lưới trạng thái 2D dp[i][j] biểu diễn độ dài LCS của hai tiền tố S[0..i-1] và T[0..j-1]. Cơ sở: dp[0][j] = dp[i][0] = 0.
- [ ] Truy vết ngược từ ô (N, M) về (0, 0) để khôi phục chuỗi con chung thực tế. Logic cốt lõi: Nếu S[i-1] == T[j-1] thì dp[i][j] = dp[i-1][j-1] + 1; ngược lại dp[i][j] = max(dp[i-1][j], dp[i][j-1]). Thời gian O(N*M), không gian O(N*M).
- [ ] Phân biệt dãy con (subsequence không cần liền) với chuỗi con liên tiếp (substring). C++ chuẩn mực & Truy vết: Khôi phục chuỗi con chung bằng cách đi lùi từ ô (N, M) về (0, 0); nếu hai ký tự bằng nhau thì đưa ký tự vào kết quả và lùi chéo (i-1, j-1), ngược lại lùi về ô lớn hơn. Đảo ngược chuỗi kết quả.
- [ ] Phân biệt subsequence (không cần liền) với substring (liên tiếp).
- [ ] Tham khảo docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md và bài tập tại docs/exercises/06-DYNAMIC-PROGRAMMING-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Dãy con chung dài nhất (LCS): Lưới trạng thái 2D dp[i][j] trên tiền tố chuỗi: nếu S[i-1] == T[j-1] thì dp[i][j] = dp[i-1][j-1] + 1; ngược lại max(dp[i-1][j], dp[i][j-1]). Truy vết từ ô (N, M) về (0, 0) để khôi phục chuỗi. Tài liệu: docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md và docs/exercises/06-DYNAMIC-PROGRAMMING-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [MIT 6.006 — lecture notes, Spring 2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/)
  - **Phần cần đọc:** Các lecture Dynamic Programming về LCS và edit distance; làm ví dụ bảng nhỏ trước bài tập tổng hợp.
  - **Truy cập:** Lecture notes, bài tập và lời giải công khai miễn phí trên OCW.
- [Offline Guide: Khung tư duy Quy hoạch động SRTBOT, Ba lô 0/1, LIS & LCS](./docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về khung tư duy 6 bước SRTBOT, Ba lô 0/1, LIS và LCS.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 108 · Edit distance

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Viết DP cho chèn, xóa và thay ký tự với chi phí đã chọn. Mô hình Khoảng cách Soạn thảo Levenshtein (Edit Distance): Độ dài biến đổi tối thiểu giữa hai chuỗi thông qua 3 thao tác: Chèn, Xóa, Thay thế.
- [ ] Giải thích mỗi nhánh chuyển và ý nghĩa hàng/cột cơ sở. Đồ thị DAG trên lưới 2D: Mỗi ô (i, j) nhận chuyển tiếp từ 3 ô lân cận: (i-1, j) là phép Xóa, (i, j-1) là phép Chèn, (i-1, j-1) là phép Thay thế (nếu ký tự khác nhau).
- [ ] Truy vết một chuỗi thao tác, áp dụng thật để kiểm tra ra đúng chuỗi đích. Cơ sở khởi tạo: dp[i][0] = i (xóa i ký tự để thành rỗng), dp[0][j] = j (chèn j ký tự từ rỗng).
- [ ] Ứng dụng thực tế: Cơ chế diff của Git, thuật toán kiểm tra chính tả (Spell Checker) và gióng hàng chuỗi sinh học (Bioinformatics DNA Alignment).

**Nguồn tham khảo miễn phí:**

- [MIT 6.006 — lecture notes, Spring 2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/)
  - **Phần cần đọc:** Các lecture Dynamic Programming về LCS và edit distance; làm ví dụ bảng nhỏ trước bài tập tổng hợp.
  - **Truy cập:** Lecture notes, bài tập và lời giải công khai miễn phí trên OCW.

### 109 · Dãy con tăng dài nhất (LIS)

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] So sánh giải pháp cơ bản O(N²) với giải pháp tối ưu O(N log N). Mô hình nhận thức: Dãy con tăng dài nhất (LIS). Thuật toán cơ bản O(N²) dùng dp[i] = 1 + max({dp[j] | j < i, a[j] < a[i]}).
- [ ] Mô hình mảng tails: tails[len] lưu phần tử kết thúc nhỏ nhất của dãy con tăng độ dài len. Logic cốt lõi tối ưu O(N log N): Duy trì mảng tails, trong đó tails[len] lưu phần tử kết thúc nhỏ nhất của một dãy con tăng độ dài len. Bất biến: mảng tails luôn tăng nghiêm ngặt.
- [ ] Dùng std::lower_bound tìm vị trí cập nhật trong tails; độ dài LIS chính là tails.size(). C++ chuẩn mực: Với mỗi phần tử x, dùng std::lower_bound tìm vị trí đầu tiên trong tails có giá trị >= x. Nếu tìm thấy thì ghi đè *it = x (tối ưu đuôi); nếu không thì tails.push_back(x). Độ dài LIS chính là tails.size().
- [ ] Đối chiếu hai phương pháp trên dữ liệu nhỏ.
- [ ] Tham khảo docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md và bài tập tại docs/exercises/06-DYNAMIC-PROGRAMMING-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Dãy con tăng dài nhất (LIS): Từ O(N²) cơ bản tối ưu lên O(N log N) bằng mảng tails. Invariant: mảng tails luôn tăng nghiêm ngặt, tails[len] lưu đuôi nhỏ nhất của dãy tăng độ dài len. Với mỗi phần tử, dùng std::lower_bound tìm vị trí cập nhật trong tails. Độ dài LIS là tails.size(). Tài liệu: docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md và docs/exercises/06-DYNAMIC-PROGRAMMING-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 7 Dynamic programming: coin change,LIS,knapsack và trạng thái; chỉ làm chủ đề tương ứng ô đang học.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Guide: Khung tư duy Quy hoạch động SRTBOT, Ba lô 0/1, LIS & LCS](./docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về khung tư duy 6 bước SRTBOT, Ba lô 0/1, LIS và LCS.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 110 · Tự dựng trạng thái DP

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Giải CSES Grid Paths I, Edit Distance và Increasing Subsequence. Tư duy Quy hoạch động trên Lưới và Đồ thị DAG: Định nghĩa trạng thái theo tọa độ (r, c); thứ tự tính toán tự nhiên theo dòng và cột.
- [ ] Tự viết mô tả trạng thái trước khi code. Kỹ thuật Tối ưu Không gian Bộ nhớ (Rolling Array / State Compression): Nhận diện trạng thái hiện tại chỉ phụ thuộc vào dòng trước đó để nén ma trận 2D về 2 dòng O(N).
- [ ] Đối chiếu với vét cạn cho dữ liệu nhỏ và giải thích hai bài không dùng chung một trạng thái. Phương pháp Truy vết Nghiệm Tối ưu (Reconstruction): Sử dụng mảng cha hoặc đi ngược từ đích về nguồn theo đúng các bước chuyển tối ưu để in ra chuỗi hành động.
- [ ] Kiểm chứng tính đúng đắn: So sánh kết quả của thuật toán Quy hoạch động với thuật toán Đệ quy vét cạn trên các ca kiểm thử kích thước nhỏ.
- [ ] Làm một bài DP mới không được cho sẵn tên trạng thái; viết trạng thái, điều kiện đầu, chuyển tiếp và thứ tự tính, rồi so với vét cạn trên dữ liệu nhỏ.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 7 Dynamic programming: coin change,LIS,knapsack và trạng thái; chỉ làm chủ đề tương ứng ô đang học.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Algorithms — Jeff Erickson](https://jeffe.cs.illinois.edu/teaching/algorithms/)
  - **Phần cần đọc:** Đọc chương Greedy Algorithms hoặc Dynamic Programming theo ô đang luyện; chọn một bài cần tự lập luận. Đây là nguồn đào sâu sau khi đã học khái niệm, không thay bài nhập môn.
  - **Truy cập:** Toàn bộ sách và từng chương PDF miễn phí; dùng sau nền đệ quy, cấu trúc dữ liệu và chứng minh.
- [Offline Exercises: Tuyển tập bài tập Quy hoạch động kinh điển CSES](./docs/exercises/06-DYNAMIC-PROGRAMMING-EXERCISES.md)
  - **Phần cần đọc:** Bộ bài tập tuyển chọn bài bản về quy hoạch động ba lô, dãy con tăng và khoảng cách biến đổi chuỗi CSES.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

## 09. Đồ thị và đường đi

### 111 · Tự kiểm tra đồ thị đã học

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Làm các mục sau trước khi mở lời giải cũ. Ghi từng mục: tự làm được / cần gợi ý / chưa học; không cộng thành điểm đoán mức giỏi chung.
- [ ] Từ bốn cạnh nhỏ, tự dựng danh sách kề và xử lý một đỉnh cô lập; ghi rõ có hướng hay vô hướng.
- [ ] Chạy tay BFS từ một nguồn, ghi khoảng cách theo số cạnh và cha để truy đường đi.
- [ ] Cho một đồ thị có cạnh trọng số 5 và 1, tìm tình huống BFS không cho đường có tổng trọng số nhỏ nhất.
- [ ] Sau khi thử, chỉ ôn lại mục chưa tự làm được theo các liên kết bên dưới. Chưa học là điểm bắt đầu bình thường; không tự đánh dấu cả chặng hoàn thành và không cần làm lại toàn bộ kho 28tech.

**Ô cần ôn theo kết quả kiểm tra:**

- [ ] 112 · Biểu diễn đồ thị trong chương trình (`graph-represent`)
- [ ] 115 · Duyệt đồ thị theo chiều rộng (BFS) (`graph-bfs`)
- [ ] 123 · Thuật toán Dijkstra với Min-Heap (`graph-dijkstra`)

**Thông tin thêm & Lưu ý bản chất:**

Bài tự kiểm tra để chọn điểm ôn, không có chấm tự động. Code cũ chỉ mở sau lượt thử; khi đã tự làm được một mục, vẫn kiểm tra bằng ca biên hoặc biến thể trước khi đi nhanh qua phần tương ứng.

### 112 · Biểu diễn đồ thị trong chương trình

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cài danh sách kề và ma trận kề. Mô hình nhận thức: Biểu diễn đồ thị là chọn cấu trúc dữ liệu lưu trữ quan hệ giữa các đỉnh. Đánh đổi: Ma trận kề (Adjacency Matrix) tốn O(V²) bộ nhớ, kiểm tra cạnh trong O(1); Danh sách kề (Adjacency List) tốn O(V + E) bộ nhớ, duyệt đỉnh kề trong O(deg(u)).
- [ ] Đọc đúng cạnh vô hướng hai chiều và cạnh có hướng một chiều. Logic cốt lõi: Với đồ thị thưa (E << V²), luôn ưu tiên danh sách kề vector<vector<pair<int, int>>> để triệt tiêu lãng phí RAM.
- [ ] So chi phí bộ nhớ trên đồ thị thưa, dày; thử đỉnh cô lập và cạnh trùng. C++ chuẩn mực: Cấp phát mảng danh sách kề với kích thước n + 1 để dùng trực tiếp nhãn đỉnh 1-based index; xử lý đồ thị vô hướng bằng cách thêm hai cạnh đối xứng (u->v và v->u) với cùng trọng số.
- [ ] Tham khảo cẩm nang đồ thị tại docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 11 Basics of graphs: biểu diễn và thuật ngữ.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 113 · Duyệt đồ thị theo chiều sâu (DFS)

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Duyệt theo chiều sâu bằng Call Stack, đánh dấu visited trên danh sách kề đạt O(V + E). Mô hình nhận thức: Khám phá không gian trạng thái theo chiều sâu qua ngăn xếp (Call Stack) trên danh sách kề O(V + E). Kỹ thuật tô 3 màu phát hiện chu trình có hướng: 0 (chưa thăm), 1 (đang trong nhánh đệ quy hiện tại), 2 (đã duyệt xong hoàn tất).
- [ ] Phát hiện chu trình có hướng bằng kỹ thuật tô 3 màu (0: chưa thăm, 1: đang duyệt, 2: hoàn tất). Logic cốt lõi: Gặp cạnh nối tới đỉnh màu 1 chính là cạnh ngược (Back-edge) chứng minh có chu trình; cạnh tới đỉnh màu 2 là Forward/Cross-edge không tạo chu trình.
- [ ] Đếm thành phần liên thông và phòng chống tràn ngăn xếp (Stack Overflow) trên đồ thị sâu. C++ chuẩn mực: Cài đặt vector<int> color(n + 1, 0), phòng chống tràn bộ nhớ ngăn xếp (Stack Overflow) trên đồ thị sâu bằng cách tăng kích thước stack hoặc dùng ngăn xếp tường minh.
- [ ] Tham khảo cẩm nang tại docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md và bài tập tại docs/exercises/05-GRAPH-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Duyệt đồ thị theo chiều sâu (DFS): Sử dụng Call Stack khám phá các nhánh đồ thị đạt O(V + E). Kỹ thuật tô 3 màu phát hiện chu trình có hướng: 0 (chưa thăm), 1 (đang trong ngăn xếp đệ quy), 2 (hoàn tất). Gặp cạnh nối tới đỉnh màu 1 chính là cạnh ngược (back-edge) chứng minh có chu trình! Tài liệu: docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md và docs/exercises/05-GRAPH-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 12 Graph traversal: DFS,BFS,connectivity,cycle và bipartiteness.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Guide: Thuật toán Đồ thị BFS/DFS, Tô màu 3 trạng thái & Dijkstra Min-Heap](./docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về các giải thuật đồ thị BFS/DFS, tô màu 3 trạng thái và Dijkstra.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 114 · Duyệt vùng và nối các thành phần

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Giải CSES Counting Rooms và Building Roads. Mô hình Loang trên Lưới 2D (Flood Fill / Matrix DFS): Coi mỗi ô (r, c) là một đỉnh, các ô chung cạnh đi được là các cạnh đồ thị.
- [ ] Biến ô lưới hợp lệ thành đỉnh, tự xác định các hướng kề. Logic cốt lõi (CSES Counting Rooms): Dùng mảng dịch hướng dx[] = {-1, 1, 0, 0}, dy[] = {0, 0, -1, 1} để duyệt 4 ô kề gọn gàng; kiểm tra biên 0 <= nr < N và 0 <= nc < M trước khi gọi đệ quy.
- [ ] Kiểm tra lưới toàn tường, một phòng và nhiều vùng tách rời. Đếm Thành phần Liên thông (CSES Building Roads): Duyệt DFS từ từng đỉnh chưa thăm để đếm số thành phần liên thông C; nối đại diện của C thành phần bằng đúng C - 1 cạnh để đồ thị liên thông hoàn toàn.
- [ ] Phân tích độ phức tạp: Mỗi ô/đỉnh được thăm đúng 1 lần, chi phí O(N*M) hoặc O(V + E).

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 12 Graph traversal: DFS,BFS,connectivity,cycle và bipartiteness.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Exercises: Tuyển tập bài tập Đồ thị BFS/DFS & Dijkstra CSES](./docs/exercises/05-GRAPH-EXERCISES.md)
  - **Phần cần đọc:** Bộ bài tập tuyển chọn bài bản về duyệt đồ thị, tìm đường ngắn nhất Dijkstra trên CSES.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 115 · Duyệt đồ thị theo chiều rộng (BFS)

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Dùng std::queue duyệt theo từng lớp khoảng cách, tìm đường đi ngắn nhất trên đồ thị không trọng số. Mô hình nhận thức: Duyệt theo từng lớp sóng khoảng cách bằng hàng đợi queue<int>. Tính chất: Tìm đường đi ngắn nhất tính theo số cạnh trên đồ thị không trọng số.
- [ ] Quy tắc vàng: đánh dấu visited[v] = true ngay khi PUSH vào queue, không chờ pop để tránh MLE/TLE. Logic cốt lõi & Quy tắc vàng: BẮT BUỘC đánh dấu visited[v] = true ngay khi PUSH vào queue; tuyệt đối không chờ tới lúc pop mới đánh dấu để tránh đẩy một đỉnh nhiều lần gây tràn bộ nhớ (MLE) và TLE!
- [ ] Lưu vết qua mảng parent để khôi phục đường đi ngắn nhất thực tế. C++ chuẩn mực & Truy vết: Khởi tạo dist nguồn bằng 0, các đỉnh khác bằng -1 hoặc INF. Cập nhật dist[v] = dist[u] + 1 và parent[v] = u khi relax. Truy ngược parent từ đích về nguồn và đảo ngược mảng để in đường đi.
- [ ] Tham khảo docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md và bài tập tại docs/exercises/05-GRAPH-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Duyệt đồ thị theo chiều rộng (BFS): Dùng std::queue duyệt theo từng lớp khoảng cách, tìm đường đi ngắn nhất trên đồ thị không trọng số. Quy tắc vàng: BẮT BUỘC đánh dấu visited[v] = true ngay khi PUSH vào queue (không chờ pop) để tránh MLE/TLE. Lưu vết qua mảng parent. Tài liệu: docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md và docs/exercises/05-GRAPH-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 12 Graph traversal: DFS,BFS,connectivity,cycle và bipartiteness.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Guide: Thuật toán Đồ thị BFS/DFS, Tô màu 3 trạng thái & Dijkstra Min-Heap](./docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về các giải thuật đồ thị BFS/DFS, tô màu 3 trạng thái và Dijkstra.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 116 · Tìm đường trên đồ thị không trọng số

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Giải CSES Message Route và Labyrinth. Mô hình Truy vết Đường đi Ngắn nhất (Path Reconstruction): Mảng parent[v] = u ghi lại đỉnh cha trực tiếp dẫn tới v trong cây BFS.
- [ ] Báo không có đường khi đích chưa được thăm. Logic cốt lõi (CSES Message Route): Khi BFS chạm tới đỉnh đích, dùng vòng lặp while (curr != source) { path.push_back(curr); curr = parent[curr]; } để khôi phục chuỗi đỉnh, sau đó đảo ngược vector.
- [ ] Thử nguồn trùng đích và nhiều đường ngắn nhất. BFS trên Lưới (CSES Labyrinth): Lưu ký tự hướng di chuyển ('U', 'D', 'L', 'R') tại mỗi ô để in ra chuỗi bước đi ngắn nhất; kiểm tra an toàn ca không có đường đi (dist[dest] == -1).
- [ ] Đảm bảo dọn sạch cấu trúc visited và queue giữa các lần chạy kiểm thử.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 12 Graph traversal: DFS,BFS,connectivity,cycle và bipartiteness.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Exercises: Tuyển tập bài tập Đồ thị BFS/DFS & Dijkstra CSES](./docs/exercises/05-GRAPH-EXERCISES.md)
  - **Phần cần đọc:** Bộ bài tập tuyển chọn bài bản về duyệt đồ thị, tìm đường ngắn nhất Dijkstra trên CSES.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 117 · Phát hiện chu trình vô hướng

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Dùng DFS, bỏ đúng cạnh cha khi xét cạnh quay về đỉnh đã thăm. Phát hiện Chu trình trên Đồ thị Vô hướng: Chu trình tồn tại khi và chỉ khi duyệt tới một đỉnh kề v đã được thăm (visited[v] == true) và v KHÔNG PHẢI LÀ CHA TRỰC TIẾP (v != parent) của đỉnh hiện tại.
- [ ] Lưu ID cạnh để không bỏ nhầm cạnh song song. Logic cốt lõi: Trong hàm DFS(u, p), duyệt đỉnh kề v: nếu v == p thì bỏ qua; nếu visited[v] thì phát hiện chu trình! Ngược lại gọi đệ quy DFS(v, u).
- [ ] Truy vết một chu trình; thử cây, tam giác và đồ thị nhiều thành phần. Xử lý Đồ thị Rời rạc: Bắt buộc lặp vòng for từ đỉnh 1 đến V để chạy DFS trên mọi thành phần liên thông, tránh bỏ sót chu trình nằm ở các cụm tách biệt.
- [ ] Truy vết chu trình: Lưu mảng parent để lần ngược từ u về v và in ra toàn bộ các đỉnh tạo nên chu trình.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 12 Graph traversal: DFS,BFS,connectivity,cycle và bipartiteness.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 118 · Phát hiện chu trình có hướng

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Dùng ba trạng thái chưa thăm, đang trên đường DFS và đã kết thúc. Phát hiện Chu trình trên Đồ thị Có hướng bằng DFS 3 Trạng thái (3-Coloring Algorithm): Trạng thái 0 (Trắng - chưa thăm), 1 (Xám - đang trong call stack đệ quy), 2 (Đen - đã duyệt xong hoàn tất toàn bộ con).
- [ ] Giải thích vì sao cạnh tới đỉnh đã kết thúc không đủ kết luận có chu trình. Logic cốt lõi: Gặp cạnh u -> v với color[v] == 1 chứng minh tồn tại cạnh ngược (Back-edge), tức v là tổ tiên của u trong cây DFS -> có chu trình! Gặp color[v] == 2 là cạnh chéo (Cross-edge) an toàn, không tạo chu trình.
- [ ] Truy vết chu trình qua cạnh về đỉnh đang trên đường DFS. Truy vết chu trình: Dùng mảng parent, khi gặp cạnh ngược u -> v, truy ngược từ u về v để xuất chuỗi đỉnh tạo chu trình.
- [ ] So sánh với đồ thị vô hướng: Khẳng định vì sao mảng boolean 2 trạng thái là không đủ trên đồ thị có hướng.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 12 Graph traversal: DFS,BFS,connectivity,cycle và bipartiteness.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 119 · Đồ thị hai phía

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Tô hai màu bằng BFS trên mọi thành phần. Mô hình Đồ thị Hai phía (Bipartite Graph) & Bài toán Tô 2 màu (2-Coloring): Đồ thị có thể chia tập đỉnh thành 2 tập độc lập sao cho mọi cạnh chỉ nối giữa hai tập khác nhau.
- [ ] Phát hiện cạnh nối hai đỉnh cùng màu, thử tam giác và chu trình chẵn. Định lý Cốt lõi: Một đồ thị là hai phía khi và chỉ khi nó KHÔNG CHỨA BẤT KỲ CHU TRÌNH ĐỘ DÀI LẺ NÀO.
- [ ] Giải thích quan hệ với chu trình lẻ; cài bài chia nhóm không có hai người xung đột cùng nhóm. Logic thuật toán: Dùng BFS hoặc DFS tô màu xen kẽ (màu 1 và màu 2). Nếu đỉnh kề v đã tô màu và có cùng màu với đỉnh hiện tại u (color[v] == color[u]) -> Mâu thuẫn! Kết luận đồ thị không thể chia hai phía.
- [ ] Ứng dụng thực tế: Phân bổ tài nguyên xung đột, bài toán ghép cặp cực đại (Bipartite Matching).

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 12 Graph traversal: DFS,BFS,connectivity,cycle và bipartiteness.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 120 · Sắp xếp Topo (Topological Sort) trên DAG

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Mô hình hóa thứ tự phụ thuộc và môn học tiên quyết thành thứ tự topo trên DAG. Mô hình nhận thức: Sắp xếp các đỉnh trên đồ thị có hướng không chu trình (DAG) thành hàng ngang sao cho mọi cạnh u -> v đều có chiều từ trái sang phải. Ứng dụng: lập lịch tác vụ, thứ tự môn học tiên quyết.
- [ ] Thuật toán Kahn: tính bán bậc vào (indegree), dùng queue thu nạp các đỉnh có indegree = 0. Logic cốt lõi (Thuật toán Kahn): Tính bán bậc vào inDegree của mọi đỉnh. Đẩy tất cả đỉnh có inDegree == 0 vào queue. Khi lấy đỉnh u ra, duyệt đỉnh kề v, giảm inDegree[v]--; nếu inDegree[v] == 0 thì nạp v vào queue.
- [ ] Phát hiện chu trình nếu số đỉnh được sắp xếp nhỏ hơn tổng số đỉnh V. C++ chuẩn mực & Phát hiện chu trình: Đếm số đỉnh đã lấy ra; nếu số đỉnh < V thì đồ thị có chu trình, trả về rỗng báo lỗi! So sánh với cách sắp topo bằng DFS (ngược thứ tự thời điểm kết thúc finish time).
- [ ] Tham khảo docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md và bài tập tại docs/exercises/05-GRAPH-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Sắp xếp Topo (Topological Sort) trên DAG: Mô hình hóa thứ tự phụ thuộc và môn học tiên quyết. Thuật toán Kahn (BFS theo indegree): nạp các đỉnh có indegree == 0 vào queue, giảm indegree đỉnh kề khi duyệt. Nếu số đỉnh lấy ra < V, phát hiện đồ thị có chu trình. Tài liệu: docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md và docs/exercises/05-GRAPH-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 16 Directed graphs: topological sorting và xử lý DAG.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Guide: Thuật toán Đồ thị BFS/DFS, Tô màu 3 trạng thái & Dijkstra Min-Heap](./docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về các giải thuật đồ thị BFS/DFS, tô màu 3 trạng thái và Dijkstra.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 121 · Lập lịch phụ thuộc

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Giải CSES Course Schedule. Quy hoạch động trên Đồ thị DAG (DP on DAG): Mọi bài toán Quy hoạch động thực chất là tìm đường đi trên một DAG bài toán con.
- [ ] Tạo ví dụ kế hoạch môn học và chỉ ra chu trình yêu cầu lẫn nhau. Logic cốt lõi (CSES Longest Flight Route): Sắp xếp topo các đỉnh trước, sau đó duyệt theo thứ tự topo để tính dp[v] = max(dp[v], dp[u] + 1) đảm bảo khi tính v thì mọi đỉnh u trỏ tới v đã được tối ưu hoàn toàn.
- [ ] Tính đường dài nhất trên DAG theo thứ tự topo, không áp dụng tùy tiện cho đồ thị có chu trình. Ưu thế vượt trội: Giải bài toán Đường đi Dài nhất (Longest Path) trong thời gian tuyến tính O(V + E) trên DAG (trong khi trên đồ thị tổng quát bài toán này là NP-hard).
- [ ] Khởi tạo cơ sở an toàn: Gán dp[source] = 0, các đỉnh khác = -INF; chỉ chuyển trạng thái từ các đỉnh đi tới được (dp[u] != -INF).

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 16 Directed graphs: topological sorting và xử lý DAG.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 122 · Khoảng cách và thao tác relax

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Khởi tạo nguồn bằng 0, đỉnh chưa tới bằng vô cực. Bản chất Phép Thư giãn Cạnh (Edge Relaxation): Bất đẳng thức tam giác dist[v] <= dist[u] + weight(u, v). Nếu dist[u] + w < dist[v], ta tìm thấy đường đi ngắn hơn tới v qua u -> cập nhật dist[v] = dist[u] + w.
- [ ] Theo dõi thao tác thử đi qua một cạnh để cải thiện khoảng cách. Điều kiện tiên quyết: Chỉ thực hiện relax khi đỉnh xuất phát u đã đi tới được từ nguồn (dist[u] != INF).
- [ ] Lưu cha khi cập nhật; tránh cộng vào giá trị vô cực gây tràn. Bảo vệ chống tràn số nguyên: Khi khởi tạo dist với vô cực (INF = 1e18), kiểm tra dist[u] != INF trước khi cộng w để tránh tràn số long long sang số âm.
- [ ] Đồng bộ mảng cha: Luôn cập nhật parent[v] = u đồng thời với dist[v] để cây đường đi ngắn nhất luôn phản ánh chính xác khoảng cách tối ưu mới.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 13 Shortest paths: đọc đúng mục Bellman–Ford,Dijkstra hoặc Floyd–Warshall cần dùng; đối chiếu giả thiết trọng số.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 123 · Thuật toán Dijkstra với Min-Heap

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Xác định bài toán đường đi ngắn nhất từ một nguồn trên đồ thị có trọng số không âm; phân biệt khoảng cách đang biết với khoảng cách đã được chốt tối ưu.
- [ ] Mô hình nhận thức & Bất biến tham lam: Tìm đường đi ngắn nhất từ một nguồn trên đồ thị có trọng số KHÔNG ÂM. Nhãn dist[u] nhỏ nhất lấy ra từ Min-Heap được chốt vĩnh viễn (permanently finalized) vì không có đường vòng qua đỉnh chưa xét nào có tổng trọng số nhỏ hơn.
- [ ] Logic cốt lõi & Tỉa bản ghi cũ: Dùng priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<...>> lưu {khoảng cách, đỉnh}. Kỹ thuật Lazy Deletion: if (d > dist[u]) continue; để bỏ qua các bản ghi lỗi thời đã có đường tốt hơn.
- [ ] Cài danh sách kề. C++ chuẩn mực: Khởi tạo dist bằng INF (1e18 với long long), cập nhật dist[v] = dist[u] + w và đẩy vào heap khi relax thành công. Độ phức tạp O((V + E) log V). Cảnh báo: khi có cạnh âm, Dijkstra thất bại hoàn toàn, bắt buộc dùng Bellman-Ford O(V*E).
- [ ] Tham khảo docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md và bài tập tại docs/exercises/05-GRAPH-EXERCISES.md.
- [ ] undefined

**Thông tin thêm & Lưu ý bản chất:**

Dijkstra yêu cầu trọng số cạnh không âm; cạnh âm có thể làm hỏng lập luận chốt khoảng cách. Thuật toán Dijkstra tìm đường đi ngắn nhất từ một nguồn: Sử dụng hàng đợi ưu tiên Min-Heap (std::priority_queue) với độ phức tạp O((V + E) log V). Điều kiện tiên quyết: Trọng số cạnh phải KHÔNG ÂM (nhãn nhỏ nhất lấy ra được chốt vĩnh viễn). Kỹ thuật tỉa bản ghi lỗi thời: if (d > dist[u]) continue. Gắn liền với Mini-Project 3: Graph Routing Engine. Tài liệu: docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md và docs/exercises/05-GRAPH-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 13 Shortest paths: đọc đúng mục Bellman–Ford,Dijkstra hoặc Floyd–Warshall cần dùng; đối chiếu giả thiết trọng số.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Guide: Thuật toán Đồ thị BFS/DFS, Tô màu 3 trạng thái & Dijkstra Min-Heap](./docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về các giải thuật đồ thị BFS/DFS, tô màu 3 trạng thái và Dijkstra.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 124 · Đường đi ngắn nhất với Dijkstra

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Giải CSES Shortest Routes I. Cài đặt Thực chiến Dijkstra (CSES Shortest Routes I): Sử dụng kiểu 64-bit (long long) cho mảng khoảng cách dist[] để chứa đường đi lên tới 10^14; khởi tạo dist[source] = 0, các đỉnh khác = 1e18.
- [ ] Khôi phục đường đi trong phiên bản tự đặt của bài. Kỹ thuật Tỉa Bản ghi Cũ (Lazy Deletion Invariant): Khi pop cặp {d, u} từ priority_queue, kiểm tra ngay: if (d > dist[u]) continue; triệt tiêu hoàn toàn chi phí duyệt lại các đường đi kém hơn đã bị đè.
- [ ] Thử cạnh trọng số 0, cạnh song song và đỉnh không tới được; so với vét cạn trên đồ thị rất nhỏ. Truy vết đường đi (CSES Shortest Routes with Path): Khôi phục dãy đỉnh từ mảng parent và kiểm tra tính liên thông trước khi xuất kết quả.
- [ ] Phân tích độ phức tạp: Heap chứa tối đa E phần tử, mỗi thao tác push/pop tốn O(log E) = O(log V) -> tổng thời gian O(E log V).

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 13 Shortest paths: đọc đúng mục Bellman–Ford,Dijkstra hoặc Floyd–Warshall cần dùng; đối chiếu giả thiết trọng số.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Exercises: Tuyển tập bài tập Đồ thị BFS/DFS & Dijkstra CSES](./docs/exercises/05-GRAPH-EXERCISES.md)
  - **Phần cần đọc:** Bộ bài tập tuyển chọn bài bản về duyệt đồ thị, tìm đường ngắn nhất Dijkstra trên CSES.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 125 · Bellman–Ford và chu trình âm

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Lặp relax các cạnh tối đa n−1 lượt cho đường đi đơn. Thuật toán Bellman-Ford: Tìm đường đi ngắn nhất từ nguồn trên đồ thị có thể chứa CẠNH MANG TRỌNG SỐ ÂM.
- [ ] Dùng lượt bổ sung phát hiện chu trình âm đi tới được từ nguồn. Nguyên lý cốt lõi: Một đường đi đơn ngắn nhất chứa tối đa V - 1 cạnh. Do đó, lặp đúng V - 1 vòng, mỗi vòng quét qua toàn bộ E cạnh và thực hiện relax: if (dist[u] + w < dist[v]) dist[v] = dist[u] + w.
- [ ] Phân biệt chu trình âm bất kỳ với chu trình ảnh hưởng đến bài toán đang hỏi. Phát hiện Chu trình Âm (Negative Cycle Detection): Thực hiện thêm lượt relax thứ V; nếu vẫn còn ít nhất một cạnh có thể giảm dist[v], chứng minh đồ thị chứa chu trình âm!
- [ ] Độ phức tạp: O(V * E). Phù hợp khi E nhỏ hoặc khi bắt buộc phải xử lý trọng số âm mà Dijkstra bất lực.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 13 Shortest paths: đọc đúng mục Bellman–Ford,Dijkstra hoặc Floyd–Warshall cần dùng; đối chiếu giả thiết trọng số.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 126 · Kiểm tra Bellman–Ford

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cài thuật toán, dừng sớm khi một lượt không còn cập nhật. Cài đặt và Truy vết Chu trình Âm (CSES Cycle Finding): Lưu mảng parent trong quá trình relax. Nếu ở lượt thứ V có đỉnh v được cập nhật, ta tìm thấy chu trình âm!
- [ ] Thử cạnh âm không có chu trình âm, chu trình âm tới được và chu trình âm tách khỏi nguồn. Kỹ thuật bước vào chu trình: Đi lùi V bước theo con trỏ parent từ đỉnh v (for (int i = 0; i < n; i++) v = parent[v];) để đảm bảo chắc chắn con trỏ đã nằm bên trong chu trình âm.
- [ ] So với Dijkstra trên đồ thị không âm, chỉ so khi cả hai cùng có điều kiện áp dụng. Truy vết và in chu trình: Lần theo parent từ v cho đến khi gặp lại chính v, lưu các đỉnh và đảo ngược vector để in đúng chiều chu trình.
- [ ] Xử lý trường hợp chu trình âm không chạm tới được từ nguồn xuất phát: Khởi tạo dist của tất cả các đỉnh bằng 0 để phát hiện chu trình âm ở mọi thành phần liên thông.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 13 Shortest paths: đọc đúng mục Bellman–Ford,Dijkstra hoặc Floyd–Warshall cần dùng; đối chiếu giả thiết trọng số.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 127 · Floyd–Warshall

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Viết DP theo tập đỉnh trung gian đã được phép dùng. Thuật toán Floyd-Warshall: Tìm đường đi ngắn nhất giữa TẤT CẢ các cặp đỉnh (All-Pairs Shortest Paths) trên đồ thị không có chu trình âm.
- [ ] Cài ba vòng lặp đúng thứ tự, khởi tạo đường chéo và cạnh trùng. Bản chất Quy hoạch động: Trạng thái dp[k][i][j] là khoảng cách ngắn nhất từ i tới j chỉ sử dụng các đỉnh trung gian trong tập {1..k}. Truy hồi: dp[k][i][j] = min(dp[k-1][i][j], dp[k-1][i][k] + dp[k-1][k][j]).
- [ ] Giải CSES Shortest Routes II với giới hạn n phù hợp O(n³). Thứ tự vòng lặp BẮT BUỘC: Vòng lặp đỉnh trung gian k PHẢI nằm ở ngoài cùng (for k: for i: for j:). Nén không gian bộ nhớ về ma trận 2D d[i][j].
- [ ] Phát hiện chu trình âm: Sau khi chạy xong, nếu tồn tại đỉnh i có d[i][i] < 0, đồ thị chứa chu trình âm. Độ phức tạp O(V³), áp dụng tối ưu khi V <= 500.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 13 Shortest paths: đọc đúng mục Bellman–Ford,Dijkstra hoặc Floyd–Warshall cần dùng; đối chiếu giả thiết trọng số.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 128 · Chọn thuật toán đường đi

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Tự lập bốn dữ liệu: không trọng số, không âm, có cạnh âm, hỏi mọi cặp. Ma trận So sánh và Ra quyết định Lựa chọn Giải thuật Đường đi Ngắn nhất:
- [ ] Chọn BFS, Dijkstra, Bellman–Ford hoặc Floyd theo điều kiện và kích thước. 1. Đồ thị không trọng số: BFS O(V + E) — Đơn giản nhất, nhanh nhất.
- [ ] Đối chiếu kết quả các thuật toán trên những dữ liệu mà chúng cùng áp dụng. 2. Đồ thị có hướng không chu trình (DAG): DP theo Topological Sort O(V + E) — Nhanh nhất, hỗ trợ cả cạnh âm và tìm đường dài nhất.
- [ ] 3. Trọng số không âm, một nguồn: Dijkstra với Min-Heap O(E log V) — Tiêu chuẩn vàng thực tế.
- [ ] 4. Trọng số có thể âm, một nguồn: Bellman-Ford O(V * E) — Bắt buộc khi có cạnh âm hoặc cần tìm chu trình âm.
- [ ] 5. Mọi cặp đỉnh, V nhỏ (V <= 500): Floyd-Warshall O(V³) — 3 vòng lặp siêu gọn gàng.
- [ ] Tự chọn BFS,Dijkstra hoặc Bellman–Ford cho ba đề không có nhãn thuật toán; nêu dữ kiện quyết định lựa chọn và dựng một phản ví dụ cho cách chọn sai.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 13 Shortest paths: đọc đúng mục Bellman–Ford,Dijkstra hoặc Floyd–Warshall cần dùng; đối chiếu giả thiết trọng số.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 129 · Tập hợp rời rạc Disjoint Set Union (DSU)

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Mô hình hóa các lớp tương đương và thành phần liên thông động bằng cấu trúc rừng cây DSU. Mô hình nhận thức: Rừng cây Disjoint Set Union quản lý phân hoạch các lớp tương đương và thành phần liên thông động. Mỗi tập hợp có một đỉnh gốc đại diện (Representative).
- [ ] Kỹ thuật Nén đường đi (Path Compression) làm phẳng cây trực tiếp về gốc đại diện. Logic cốt lõi (2 kỹ thuật tối ưu): (1) Nén đường đi (Path Compression: parent[u] = find(parent[u])) làm phẳng cây về chiều cao xấp xỉ 1; (2) Gộp theo kích thước (Union by Size): luôn treo cây có số phần tử ít hơn vào gốc cây lớn hơn.
- [ ] Kỹ thuật Gộp theo kích thước (Union by Size) đưa chi phí thao tác về gần O(1) nghịch đảo Ackermann alpha(N). C++ chuẩn mực: Đóng gói struct DSU gồm vector<int> parent, sz và các hàm find(u), unite(u, v), same(u, v). Chi phí mỗi thao tác đạt O(alpha(N)) xấp xỉ O(1) khấu hao.
- [ ] Tham khảo cẩm nang tại docs/guides/05-DISJOINT-SET-UNION-DSU.md và bài tập tại docs/exercises/04-DSU-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Tập hợp rời rạc Disjoint Set Union (DSU): Quản lý phân hoạch các lớp tương đương và thành phần liên thông động. Hai kỹ thuật tối ưu bắt buộc: Path Compression (parent[u] = find(parent[u])) và Union by Size/Rank, đưa chi phí mỗi thao tác về O(alpha(N)) gần như O(1) khấu hao. Tài liệu: docs/guides/05-DISJOINT-SET-UNION-DSU.md và docs/exercises/04-DSU-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 15 Spanning trees: Kruskal,union-find và Prim.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Guide: Cấu trúc Tập hợp Rời rạc (DSU) & Cây khung nhỏ nhất Kruskal](./docs/guides/05-DISJOINT-SET-UNION-DSU.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về cấu trúc DSU, chứng minh chiều cao log N và Kruskal.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 130 · Cây khung nhỏ nhất MST

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Phân biệt cây khung nhỏ nhất với cây đường đi ngắn nhất từ một nguồn. Khái niệm Cây khung Nhỏ nhất (Minimum Spanning Tree - MST): Cây con chứa toàn bộ V đỉnh của đồ thị vô hướng liên thông sao cho tổng trọng số của V - 1 cạnh là nhỏ nhất có thể.
- [ ] Trên đồ thị vô hướng có trọng số, tự liệt kê vài cây khung để so tổng cạnh. Định lý Lát cắt (Cut Property): Với mọi lát cắt phân hoạch tập đỉnh thành hai tập (S và V - S), cạnh có trọng số nhỏ nhất nối qua lát cắt luôn luôn thuộc về ít nhất một cây khung nhỏ nhất.
- [ ] Hiểu tính chất lát cắt và trường hợp đồ thị không liên thông. Phân biệt bản chất: Cây khung nhỏ nhất (tối ưu hóa tổng chi phí toàn mạng) KHÔNG PHẢI là Cây đường đi ngắn nhất (Shortest Path Tree - tối ưu khoảng cách từ một nguồn).
- [ ] Trọng số âm trên MST: Thuật toán MST hoàn toàn hoạt động bình thường với cạnh âm trên đồ thị vô hướng (khác với Dijkstra).

**Thông tin thêm & Lưu ý bản chất:**

Bài MST tiêu chuẩn ở đây dùng đồ thị vô hướng. Không liên thông thì không có một cây khung phủ toàn bộ, chỉ có rừng khung. Cây khung nhỏ nhất (MST): Thuật toán Kruskal sắp xếp E cạnh tăng dần và dùng cấu trúc tập hợp rời rạc Disjoint Set Union (DSU) với 2 kỹ thuật tối ưu: Path Compression (nén đường đi) và Union by Rank (gộp theo hạng) đạt độ phức tạp O(E log E). So sánh với thuật toán Prim phát triển lát cắt từ một đỉnh bằng Min-Heap O((V + E) log V).

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 15 Spanning trees: Kruskal,union-find và Prim.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 131 · Cây khung nhỏ nhất (MST) và Thuật toán Kruskal

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Dựa trên tính chất lát cắt (Cut Property): sắp xếp E cạnh tăng dần theo trọng số. Mô hình nhận thức & Tính chất lát cắt: Tìm cây khung nhỏ nhất (MST) trên đồ thị vô hướng. Tính chất lát cắt (Cut Property) chứng minh cạnh nhỏ nhất nối qua một lát cắt an toàn luôn thuộc về một MST nào đó.
- [ ] Dùng DSU để kiểm tra và kết nạp cạnh an toàn không tạo chu trình trong O(E log E). Logic cốt lõi: Sắp xếp toàn bộ E cạnh theo trọng số tăng dần trong O(E log E). Duyệt tuần tự từng cạnh (u, v, w): dùng DSU kiểm tra find(u) != find(v); nếu khác thành phần thì kết nạp cạnh vào MST và gọi unite(u, v).
- [ ] Dừng thuật toán ngay khi đã chọn đủ V - 1 cạnh hoặc phát hiện đồ thị không liên thông. C++ chuẩn mực: Dừng thuật toán ngay khi đã chọn đủ V - 1 cạnh. Nếu duyệt hết cạnh mà số cạnh chọn < V - 1, kết luận đồ thị không liên thông (chỉ có rừng khung). Tổng chi phí O(E log E).
- [ ] Tham khảo docs/guides/05-DISJOINT-SET-UNION-DSU.md và bài tập tại docs/exercises/04-DSU-EXERCISES.md.

**Thông tin thêm & Lưu ý bản chất:**

Thuật toán Kruskal tìm MST: Dựa trên tính chất lát cắt (Cut Property). Sắp xếp E cạnh tăng dần trong O(E log E), duyệt từng cạnh và dùng DSU kết nạp nếu không tạo chu trình (find(u) != find(v)). Dừng khi đủ V - 1 cạnh hoặc báo đồ thị không liên thông. Tài liệu: docs/guides/05-DISJOINT-SET-UNION-DSU.md và docs/exercises/04-DSU-EXERCISES.md.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 15 Spanning trees: Kruskal,union-find và Prim.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 132 · Prim

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Mở rộng tập đỉnh đã thuộc cây bằng cạnh ra ngoài rẻ nhất. Thuật toán Prim tìm Cây khung Nhỏ nhất (MST): Xuất phát từ một đỉnh tùy ý, duy trì cây khung đang lớn dần và liên tục kết nạp cạnh có trọng số nhỏ nhất nối từ cây ra một đỉnh chưa thuộc cây.
- [ ] Cài bằng min-heap và danh sách kề. Cài đặt bằng Min-Heap: Lưu các cặp {trọng số cạnh, đỉnh đích}. Khi lấy đỉnh u ra khỏi heap, nếu u chưa vào cây thì đánh dấu vào cây, cộng trọng số và nạp toàn bộ các cạnh kề từ u sang các đỉnh chưa vào cây vào heap.
- [ ] So sánh điều đang được tối thiểu hóa với Dijkstra để tránh dùng nhầm. Độ phức tạp: O(E log V) với nhị phân heap. So sánh Prim vs Kruskal: Prim ưu thế trên đồ thị dày (Dense Graph: E xấp xỉ V²), Kruskal ưu thế trên đồ thị thưa (Sparse Graph: E xấp xỉ V).
- [ ] Xử lý an toàn: Nếu số đỉnh được kết nạp vào cây < V khi heap đã rỗng, kết luận đồ thị không liên thông.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 15 Spanning trees: Kruskal,union-find và Prim.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 133 · Đối chiếu Prim và Kruskal

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Giải CSES Road Reparation bằng cả hai cách. Thực hành So sánh và Đánh giá Giải thuật MST (CSES Road Reparation): Cài đặt cả hai phương pháp Kruskal (DSU) và Prim (Priority Queue) trên cùng một bộ dữ liệu.
- [ ] Kiểm tra tổng trọng số bằng nhau, dù tập cạnh có thể khác khi không duy nhất. Kiểm chứng Tính đúng đắn: Hai thuật toán có thể chọn các tập cạnh khác nhau nếu đồ thị có các cạnh cùng trọng số, nhưng tổng trọng số của cây khung nhỏ nhất BẮT BUỘC phải bằng nhau.
- [ ] Thử đồ thị không liên thông, cạnh âm và chỉ một đỉnh. Đo lường thời gian thực thi: Đánh giá chi phí sắp xếp E cạnh trong Kruskal so với chi phí đẩy/lấy từ Priority Queue trong Prim trên đồ thị thưa vs đồ thị dày.
- [ ] Xử lý ca biên: Đồ thị không liên thông, đồ thị 1 đỉnh, đồ thị có đa cạnh và khuyên.
- [ ] Tự tính MST trên một đồ thị có trọng số bằng nhau và thành phần tách rời; giải thích lúc nào trả về cây, lúc nào chỉ có rừng khung, rồi đối chiếu hai cách cài.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 15 Spanning trees: Kruskal,union-find và Prim.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.
- [Offline Exercises: Tuyển tập bài tập DSU & Cây khung CSES](./docs/exercises/04-DSU-EXERCISES.md)
  - **Phần cần đọc:** Bộ bài tập tuyển chọn bài bản về DSU và cây khung nhỏ nhất trên hệ thống CSES.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 134 · Thành phần liên thông mạnh

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Phân biệt đi tới được một chiều với hai chiều. Thành phần Liên thông Mạnh (Strongly Connected Components - SCC) trên Đồ thị Có hướng: Tập con đỉnh cực đại sao cho giữa hai đỉnh bất kỳ luôn có đường đi hai chiều tới nhau.
- [ ] Cài Kosaraju bằng hai lượt DFS và đồ thị đảo. Thuật toán Kosaraju 2 pha DFS O(V + E): Pha 1 chạy DFS trên đồ thị gốc để ghi lại thứ tự hoàn thành (Finish Time) trên stack; Pha 2 đảo ngược toàn bộ các cạnh (Transpose Graph G^T) và chạy DFS theo thứ tự đỉnh trên stack để trích xuất từng SCC.
- [ ] Co mỗi SCC thành một đỉnh và kiểm tra đồ thị thu được không có chu trình. Thuật toán Tarjan: Chỉ dùng 1 lượt DFS duy nhất kết hợp 2 mảng đánh số num[] và low[] cùng một ngăn xếp stack để tìm các đỉnh gốc của SCC trong O(V + E).
- [ ] Co Đồ thị (Condensation Graph): Co mỗi SCC thành một siêu đỉnh; đồ thị mới tạo thành BẮT BUỘC là một đồ thị DAG, cho phép áp dụng Quy hoạch động hoặc Sắp xếp Topo.

**Khi nào quay lại:** Quay lại khi đi sâu thuật toán, thi lập trình hoặc bài toán thực tế cần kỹ thuật này; không cần để học tiếp mạng hay cơ sở dữ liệu.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 17 Strong connectivity: SCC và đồ thị co.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 135 · Đường đi Euler

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Phân biệt đi qua mỗi cạnh một lần với đi qua mỗi đỉnh một lần. Đường đi và Chu trình Euler: Đường đi qua mỗi CẠNH của đồ thị đúng 1 lần.
- [ ] Xét điều kiện bậc và liên thông cho đồ thị vô hướng có cạnh. Điều kiện Euler trên Đồ thị Vô hướng: Đồ thị liên thông (bỏ qua các đỉnh cô lập) và có đúng 0 đỉnh bậc lẻ (Chu trình Euler) hoặc đúng 2 đỉnh bậc lẻ (Đường đi Euler bắt đầu từ 1 đỉnh lẻ và kết thúc ở đỉnh lẻ còn lại).
- [ ] Cài Hierholzer với ID cạnh riêng để xử lý cạnh song song. Thuật toán Hierholzer O(V + E): Dùng ngăn xếp duyệt đệ quy/vòng lặp, đi dọc theo các cạnh chưa thăm cho đến khi kẹt, sau đó đẩy đỉnh kẹt vào danh sách kết quả; đảo ngược danh sách để thu được chu trình Euler.
- [ ] Phân biệt rõ ràng: Chu trình Euler (đi qua mọi CẠNH đúng 1 lần, giải trong O(E)) vs Chu trình Hamilton (đi qua mọi ĐỈNH đúng 1 lần, bài toán NP-đầy đủ).

**Khi nào quay lại:** Quay lại khi đi sâu thuật toán, thi lập trình hoặc bài toán thực tế cần kỹ thuật này; không cần để học tiếp mạng hay cơ sở dữ liệu.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 19 Paths and circuits: Eulerian paths.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 136 · Luồng cực đại và mạng dư

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Vẽ luồng, sức chứa và cạnh ngược trong một mạng nhỏ. Mạng Luồng Cực đại (Maximum Flow): Đồ thị có hướng với sức chứa dung lượng (Capacity) trên mỗi cạnh, tìm giá trị luồng lớn nhất từ nguồn S tới đích T.
- [ ] Cài Edmonds–Karp cho kích thước nhỏ; cập nhật cả cạnh thuận và ngược. Định lý Lát cắt Cực tiểu - Luồng Cực đại (Max-Flow Min-Cut Theorem): Giá trị luồng cực đại từ S tới T luôn luôn bằng dung lượng của lát cắt hẹp nhất phân tách S và T.
- [ ] Kiểm tra bảo toàn luồng, giới hạn sức chứa và giá trị lát cắt cuối. Thuật toán Edmonds-Karp O(V * E²): Sử dụng BFS để liên tục tìm đường tăng luồng (Augmenting Path) ngắn nhất trên Đồ thị Dư (Residual Graph); tăng luồng dọc theo đường và bổ sung cạnh dư ngược để cho phép giải thuật rút lại lựa chọn cũ.
- [ ] Thuật toán Dinic O(V² * E): Sử dụng BFS phân tầng (Level Graph) kết hợp DFS tìm luồng chặn (Blocking Flow) tăng tốc độ giải quyết trên các mạng luồng lớn.

**Khi nào quay lại:** Quay lại khi đi sâu thuật toán, thi lập trình hoặc bài toán thực tế cần kỹ thuật này; không cần để học tiếp mạng hay cơ sở dữ liệu.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 20 Flows and cuts: residual graph,max flow và min cut.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 137 · Bài toán trên cây

**Loại:** Luyện | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Tính kích thước cây con và đường kính cây không trọng số. Quy hoạch động trên Cây (Tree DP): Cây có cấu trúc đệ quy tự nhiên (gốc và các cây con không chu trình), cho phép tính toán bài toán con từ lá lên gốc (Bottom-up).
- [ ] Giải CSES Subordinates và Tree Diameter. Bài toán Cây con Độc lập (CSES Subordinates): Dùng 1 lượt DFS tính kích thước cây con sz[u] = 1 + sum(sz[v]) với v là con của u.
- [ ] Chọn gốc rõ ràng, tránh đi ngược về cha; thử cây dây và cây hình sao. Bài toán Đường kính Cây (Tree Diameter): Tìm khoảng cách lớn nhất giữa 2 đỉnh bất kỳ trên cây: Phương pháp 1 dùng 2 lượt BFS (BFS từ đỉnh bất kỳ tìm đỉnh xa nhất X, BFS từ X tìm đỉnh xa nhất Y); Phương pháp 2 dùng Tree DP tính 2 nhánh con sâu nhất tại mỗi đỉnh.
- [ ] Kỹ thuật Rerooting (Đổi gốc quy hoạch động): Chuyển gốc từ cha sang con trong O(1) để tính đáp án cho toàn bộ V đỉnh làm gốc trong tổng thời gian O(V).

**Khi nào quay lại:** Quay lại khi đi sâu thuật toán, thi lập trình hoặc bài toán thực tế cần kỹ thuật này; không cần để học tiếp mạng hay cơ sở dữ liệu.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 14 Tree algorithms và 18 Tree queries; chỉ học duyệt cây/subtree/DP đang yêu cầu.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 138 · Project tìm đường và nối mạng

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Đọc một đồ thị từ tệp và cho chọn nguồn, đích. Xây dựng Hệ thống Định tuyến & Phân tích Đồ thị Thực tế (Graph Routing Engine Capstone): Tích hợp toàn diện các thuật toán đồ thị cốt lõi vào một ứng dụng hoàn chỉnh.
- [ ] Hiển thị đường ngắn nhất bằng Dijkstra khi trọng số không âm. Kiến trúc mô-đun hóa: Tách biệt Bộ đọc dữ liệu (Parser) <-> Động cơ thuật toán (Dijkstra, A*, Kruskal, Kahn Topo) <-> Tầng giao tiếp kết quả.
- [ ] Thêm chế độ nối tất cả địa điểm bằng MST; giải thích vì sao kết quả phục vụ yêu cầu khác tìm đường. Hỗ trợ đa chế độ: Tìm đường ngắn nhất giữa 2 địa điểm, tối ưu hóa mạng lưới liên kết với chi phí thấp nhất (MST), và kiểm tra tính hợp lệ của luồng công việc phụ thuộc (DAG).
- [ ] Kiểm thử tự động với dữ liệu quy mô lớn: Benchmark thời gian thực thi trên đồ thị giao thông thực tế có hàng chục nghìn đỉnh và cạnh.

## 10. Truy vấn, chuỗi và tổng hợp DSA

### 139 · Bitmask và tập con

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Dùng phép bit để thêm, xóa, kiểm tra một phần tử trong tập nhỏ. Ôn AND, OR, XOR, NOT và dịch bit trên kiểu unsigned, viết trạng thái 4 phần tử dưới dạng nhị phân.
- [ ] Liệt kê tập con và tránh dịch bit quá độ rộng kiểu. Thêm phần tử i bằng OR với 1<<i, kiểm tra bằng AND và xóa bằng mặt nạ phù hợp; hiểu biểu thức trước khi dùng.
- [ ] Giải một bài DP tập con nhỏ rồi nêu vì sao 2^n giới hạn kích thước đầu vào. Chọn kiểu literal và số bit đủ rộng, không dịch quá hoặc bằng độ rộng kiểu, không dịch giá trị âm để mô phỏng tập.
- [ ] Phân biệt số trạng thái 2^n với số chuyển từ mỗi trạng thái khi tính độ phức tạp.
- [ ] Làm bài gán hoặc chọn nhóm với n nhỏ, đối chiếu liệt kê và giữ mô tả ý nghĩa từng bit.

**Khi nào quay lại:** Phần đào sâu thuật toán. Có thể để sau vòng nền; ô luyện tổng hợp phía sau có lựa chọn chỉ dùng kiến thức nền.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 10 Bit manipulation: thao tác bit và biểu diễn tập con.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 140 · Fenwick tree

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cài cập nhật một điểm và tổng tiền tố. Dùng chỉ số 1..n cho bản đầu; hiểu lowbit(i) lấy bit 1 thấp nhất và khoảng mà bit[i] đại diện.
- [ ] Giải thích lowbit và các đoạn mà một ô quản lý. Viết sum(i) bằng cách trừ lowbit, update(i,delta) bằng cách cộng lowbit, kiểm tra mọi vòng đều tiến tới điểm dừng.
- [ ] So với prefix sum khi dữ liệu thay đổi nhiều lần. Phân biệt cộng thêm delta với gán thành giá trị mới; nếu bài yêu cầu gán, tính delta từ giá trị cũ.
- [ ] Lấy tổng [l,r] bằng hai tổng tiền tố theo quy ước đã chốt.
- [ ] Thử cập nhật phần tử đầu, cuối, cập nhật nhiều lần và delta âm; so mọi kết quả với mảng thường.

**Khi nào quay lại:** Phần đào sâu thuật toán. Có thể để sau vòng nền; ô luyện tổng hợp phía sau có lựa chọn chỉ dùng kiến thức nền.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 9 Range queries: prefix sums,binary indexed tree và segment tree; chỉ đọc cấu trúc tương ứng ô hiện tại.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 141 · Segment tree

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cài truy vấn min hoặc sum trên đoạn và cập nhật một điểm. Chọn một đại lượng duy nhất cho bản đầu như tổng, định nghĩa mỗi nút lưu kết quả của đoạn nào.
- [ ] Viết rõ phần tử trung hòa cho truy vấn ngoài đoạn. Viết ba trường hợp truy vấn: không giao, phủ toàn bộ và giao một phần; ghép đúng phép toán.
- [ ] Giải CSES Dynamic Range Sum Queries, đối chiếu mảng thường trên dữ liệu nhỏ. Chọn phần tử trung hòa đúng như 0 cho tổng, giá trị rất lớn cho min.
- [ ] Khi cập nhật một điểm, lần ngược lên cập nhật mọi tổ tiên ảnh hưởng.
- [ ] Thử n không phải lũy thừa của 2 và cả truy vấn đoạn chỉ có một vị trí.
- [ ] Chỉ học lazy propagation sau khi bản cập nhật điểm đã đúng và thật sự cần cập nhật đoạn, không trộn hai phiên bản ngay.

**Khi nào quay lại:** Phần đào sâu thuật toán. Có thể để sau vòng nền; ô luyện tổng hợp phía sau có lựa chọn chỉ dùng kiến thức nền.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 9 Range queries: prefix sums,binary indexed tree và segment tree; chỉ đọc cấu trúc tương ứng ô hiện tại.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 142 · Chọn cấu trúc truy vấn

**Loại:** Luyện | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Giải một bài tổng tĩnh và một bài tổng động bằng cách phù hợp. Lập bảng thao tác bài yêu cầu và tần suất: chỉ hỏi tổng tĩnh, cập nhật điểm hay cập nhật đoạn.
- [ ] Thử đoạn đầu, cuối, một phần tử và nhiều cập nhật cùng điểm. Chọn prefix sum cho không đổi dữ liệu, Fenwick cho tổng động phù hợp, segment tree khi phép gộp/truy vấn đòi hỏi.
- [ ] Giải thích khi nào prefix sum đơn giản hơn Fenwick hoặc segment tree. Tự sinh một chuỗi xen kẽ update/query, kiểm tra từng câu trả lời với cách duyệt trực tiếp.
- [ ] Đo cả chi phí khởi tạo và số thao tác, không kết luận cấu trúc phức tạp luôn tốt hơn ở dữ liệu nhỏ.

**Khi nào quay lại:** Phần đào sâu thuật toán. Có thể để sau vòng nền; ô luyện tổng hợp phía sau có lựa chọn chỉ dùng kiến thức nền.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 9 Range queries: prefix sums,binary indexed tree và segment tree; chỉ đọc cấu trúc tương ứng ô hiện tại.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 143 · KMP và hàm tiền tố

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Tính bảng tiền tố bằng tay cho chuỗi có mẫu lặp. Định nghĩa pi[i] là độ dài tiền tố đúng đồng thời là hậu tố của đoạn kết thúc tại i; không lấy cả đoạn làm tiền tố đúng của chính nó.
- [ ] Cài tìm mọi lần xuất hiện, kể cả các lần chồng lên nhau. Tính tay trên chuỗi như abababca để thấy lúc khớp tiếp và lúc lùi qua pi.
- [ ] So kết quả với tìm kiếm vét cạn; xử lý mẫu rỗng theo quy định riêng. Trong tìm kiếm, giữ số ký tự mẫu đã khớp; khi sai không quay con trỏ văn bản lùi lại.
- [ ] Sau một lần tìm thấy, lùi trạng thái theo pi để không bỏ các lần xuất hiện chồng nhau.
- [ ] Thử mẫu dài hơn văn bản, toàn cùng ký tự và không có kết quả; so với tìm vét cạn.

**Khi nào quay lại:** Phần đào sâu thuật toán. Có thể để sau vòng nền; ô luyện tổng hợp phía sau có lựa chọn chỉ dùng kiến thức nền.

**Nguồn tham khảo miễn phí:**

- [CP-Algorithms — Prefix function / KMP](https://cp-algorithms.com/string/prefix-function.html)
  - **Phần cần đọc:** Đọc toàn bài Prefix function: định nghĩa pi,thuật toán tuyến tính và ứng dụng KMP; tự dựng bảng trên chuỗi có tiền tố lặp.
  - **Truy cập:** Toàn bộ bài viết và ví dụ miễn phí từ dự án CP-Algorithms.

### 144 · Rolling hash và giới hạn va chạm

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cài băm đa thức để so chuỗi con trong một bài thử. Chọn cơ số, modulus và quy ước chuyển ký tự thành số; tính trước lũy thừa cần dùng.
- [ ] Phân biệt xác suất va chạm nhỏ với bảo đảm bằng nhau. Từ băm tiền tố suy ra công thức chuỗi con với cùng hệ số chuẩn hóa, chú ý chỉ số và số dư âm.
- [ ] Đối chiếu ký tự thật khi cần kết quả chắc chắn; không dùng rolling hash làm băm mật khẩu. Dùng kiểu đủ rộng cho tích trung gian hoặc phép nhân modulo phù hợp giới hạn.
- [ ] Tạo bộ so chuỗi con ngẫu nhiên với so ký tự thật, ghi nhận băm bằng nhau chưa bảo đảm chuỗi bằng nhau.
- [ ] Nếu dùng hai modulus để giảm rủi ro, vẫn nêu đó là giảm xác suất va chạm chứ không biến thành chứng minh tuyệt đối.

**Khi nào quay lại:** Phần đào sâu thuật toán. Có thể để sau vòng nền; ô luyện tổng hợp phía sau có lựa chọn chỉ dùng kiến thức nền.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 26 String algorithms: trie,string hashing và xử lý chuỗi; chọn đúng cấu trúc của ô đang học.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 145 · Mã hóa Huffman

**Loại:** Áp dụng | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Đếm tần suất ký tự trong tệp thử, xây cây bằng min-heap. Mỗi lá chứa ký tự và tần suất, mỗi lần gộp lấy hai cây nhẹ nhất rồi đưa tổng trở lại heap.
- [ ] Sinh bảng mã tiền tố và giải mã lại đúng dữ liệu gốc. Duyệt cây gán 0/1 cho cạnh, kiểm tra không mã ký tự nào là tiền tố của mã ký tự khác.
- [ ] Tính cả chi phí lưu cây; xử lý tệp rỗng và chỉ có một loại ký tự. Quy định mã cho dữ liệu chỉ một ký tự duy nhất và lưu đủ thông tin để biết số ký tự/bit hợp lệ.
- [ ] Khi ghi thành byte, mô tả bit đệm cuối tệp và cách giải mã biết phải dừng.
- [ ] So kích thước gốc, dữ liệu bit và metadata, có thể tệp nhỏ bị nén xong còn lớn hơn.
- [ ] Đọc lại kết quả giải mã và so từng byte với đầu vào để kiểm tra round-trip.

**Khi nào quay lại:** Phần đào sâu thuật toán. Có thể để sau vòng nền; ô luyện tổng hợp phía sau có lựa chọn chỉ dùng kiến thức nền.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 6: mục Huffman coding; vẽ cây và kiểm tra prefix code.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 146 · Sàng nguyên tố và lũy thừa nhanh

**Loại:** Luyện | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Cài sàng Eratosthenes với giới hạn bộ nhớ rõ. Với sàng, khởi tạo 0 và 1 không nguyên tố, đánh dấu từ p² khi p còn là nguyên tố và p² trong giới hạn.
- [ ] Cài lũy thừa nhị phân và kiểm tra với phép nhân lặp ở số nhỏ. Dùng điều kiện hoặc kiểu tránh tràn khi tính p*p, kể cả lúc chỉ kiểm tra giới hạn vòng lặp.
- [ ] Viết bộ thử cho UCLN, nguyên tố và modulo; chú ý 0, 1 và giá trị lớn. Với lũy thừa nhanh, tách bit thấp của số mũ, nhân vào kết quả khi cần rồi bình phương cơ số.
- [ ] Quy định đầu vào số mũ không âm và trường hợp số mũ 0, đặc biệt modulus bằng 1 nếu hỗ trợ.
- [ ] Kiểm tra kết quả nhỏ bằng chia thử/nguyên mẫu nhân lặp rồi mới chạy kích thước lớn.

**Khi nào quay lại:** Phần đào sâu thuật toán. Có thể để sau vòng nền; ô luyện tổng hợp phía sau có lựa chọn chỉ dùng kiến thức nền.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 21 Number theory: sieve và modular exponentiation.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 147 · Thuật toán ngẫu nhiên và đo thực nghiệm

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Dùng bộ sinh ngẫu nhiên chuẩn với seed được ghi lại để tạo dữ liệu thử. Giữ seed và mô tả cách sinh dữ liệu, phân biệt dữ liệu ngẫu nhiên đều với dữ liệu gần sắp hoặc nhiều phần tử trùng.
- [ ] So pivot ngẫu nhiên với pivot cố định trong quicksort. Chạy mỗi chiến lược trên cùng các bộ đầu vào và nhiều seed để tránh một lần may mắn.
- [ ] Phân biệt một lần đo nhanh với lập luận về chi phí kỳ vọng. Báo số lần so sánh hoặc phân hoạch bên cạnh thời gian nếu muốn hiểu cơ chế cải thiện.
- [ ] Tách randomness giúp hiệu năng trung bình với thuật toán trả lời đúng có xác suất, vì đây là hai kiểu bảo đảm khác nhau.

**Khi nào quay lại:** Phần đào sâu thuật toán. Có thể để sau vòng nền; ô luyện tổng hợp phía sau có lựa chọn chỉ dùng kiến thức nền.

**Nguồn tham khảo miễn phí:**

- [Competitive Programmer’s Handbook — Antti Laaksonen](https://cses.fi/book/book.pdf)
  - **Phần cần đọc:** Chương 24 Probability: randomized algorithms và đo xác suất/thời gian thực nghiệm.
  - **Truy cập:** Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.

### 148 · Tự chọn thuật toán khi không có nhãn

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** DSA Cốt lõi & Giải thuật (`track-2`)

**Việc cần làm:**

- [ ] Chọn 8 bài chưa làm trong CSES từ nhiều nhóm, giấu tên nhóm khi đọc. Đọc ràng buộc rồi ước lượng thuật toán tuyến tính, n log n, n² hay lũy thừa có cơ hội chạy được.
- [ ] Với mỗi bài viết ràng buộc, cách vét cạn và hướng tối ưu trước khi code. Viết ít nhất một bộ dữ liệu tự tính đáp án và một ca biên trước khi code.
- [ ] Sau vài ngày giải lại các bài đã xem lời giải; giữ danh sách sai lầm thay vì chỉ đếm bài. Nếu mắc, thu nhỏ bài hoặc viết vét cạn để khám phá cấu trúc; khi xem gợi ý, ghi rõ mức trợ giúp đã dùng.
- [ ] Sau vài ngày làm lại từ đầu và giải thích vì sao cách khác không phù hợp, không chỉ thuộc đoạn mã cũ.
- [ ] Theo dõi lỗi theo nhóm như hiểu đề, mô hình, công thức, chỉ số, overflow để ôn đúng phần yếu.
- [ ] Nếu đã để các ô vàng học sau, chọn tám bài chỉ cần mảng, hash, sắp xếp, tìm kiếm, đệ quy, DP cơ bản hoặc BFS/Dijkstra; không chọn bài buộc dùng Fenwick,KMP hay max flow chưa học.

# Track 3: Hệ thống Máy tính & Mạng Máy tính (Computer Systems & Networking)

> **Mục tiêu:** Hoàn thành xuất sắc môn Mạng máy tính (CSC10008) HK1 Năm 2: Mô hình 5 tầng TCP/IP, TCP 3-way handshake và 4-way termination, điều khiển luồng (Sliding Window), điều khiển tắc nghẽn (AIMD, Slow Start), socket programming đa luồng, message framing chống dính gói, chia mạng con CIDR subnetting, DNS, HTTP/1.1 vs HTTP/2 vs HTTP/3 và thực hành Wireshark.
> **Môn học HCMUS:** Kiến trúc máy tính (CSC10007) · Hệ điều hành (CSC10005) · Mạng máy tính (CSC10008) | **Thời lượng ước tính:** ~85 giờ

## 12. Máy tính hoạt động như thế nào

### 171 · Tự kiểm tra nền máy tính và hệ thống

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Làm các mục sau trước khi mở lời giải cũ. Ghi từng mục: tự làm được / cần gợi ý / chưa học; không cộng thành điểm đoán mức giỏi chung.
- [ ] Đổi 13 sang nhị phân, kiểm tra bằng cộng các lũy thừa hai.
- [ ] Giải thích vì sao con trỏ tới biến cục bộ không còn dùng được sau khi hàm kết thúc.
- [ ] Nếu đã học hệ thống, phân biệt một tiến trình với một luồng bằng ví dụ bộ nhớ dùng chung; chưa học thì ghi rõ để học ở chặng OS.
- [ ] Sau khi thử, chỉ ôn lại mục chưa tự làm được theo các liên kết bên dưới. Chưa học là điểm bắt đầu bình thường; không tự đánh dấu cả chặng hoàn thành và không cần làm lại toàn bộ kho 28tech.

**Ô cần ôn theo kết quả kiểm tra:**

- [ ] 172 · Nhị phân, hexadecimal và phép bit (`arch-bits`)
- [ ] 179 · Stack, heap và bố trí dữ liệu (`arch-layout`)
- [ ] 189 · Luồng và dữ liệu dùng chung (`os-threads`)

**Thông tin thêm & Lưu ý bản chất:**

Bài tự kiểm tra để chọn điểm ôn, không có chấm tự động. Code cũ chỉ mở sau lượt thử; khi đã tự làm được một mục, vẫn kiểm tra bằng ca biên hoặc biến thể trước khi đi nhanh qua phần tương ứng.

### 172 · Nhị phân, hexadecimal và phép bit

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Đổi số giữa hệ 2, 10 và 16. Dùng cùng một giá trị biểu diễn trên 8 bit, đổi sang hexadecimal bằng nhóm bốn bit.
- [ ] Biểu diễn số nguyên không dấu và số âm bù hai trên số bit cố định. Với bù hai, thử −1, giá trị nhỏ nhất và phép đổi dấu trong giới hạn biểu diễn; phân biệt giá trị số với dãy bit.
- [ ] Thử AND, OR, XOR, dịch bit trên kiểu unsigned và ghi giới hạn dịch. Tạo mặt nạ lấy/đặt/xóa một bit trên unsigned, ghi rõ vị trí bit bắt đầu từ 0.
- [ ] Đối chiếu phép dịch với nhân/chia lũy thừa 2 chỉ trong điều kiện kiểu và miền giá trị thích hợp.
- [ ] Không suy ra tràn signed C++ luôn quấn vòng chỉ từ mô hình phần cứng bù hai.

**Nguồn tham khảo miễn phí:**

- [Dive Into Systems — sách mở](https://diveintosystems.org/book/)
  - **Phần cần đọc:** Phần Binary and Data Representation: integer,floating point và text; theo dõi giới hạn biểu diễn trong chương trình nhỏ.
  - **Truy cập:** Toàn bộ bản web miễn phí. Ví dụ dùng C; chỉ chuyển ý tưởng sang C++ khi hai ngôn ngữ có hành vi tương ứng.

### 173 · Số thực dấu phẩy động

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Tách phần dấu, mũ và trị trong một biểu diễn minh họa. Trên mô hình số thực nhị phân nhỏ, chỉ rõ độ chính xác hữu hạn và vì sao nhiều phân số thập phân không biểu diễn chính xác.
- [ ] So sánh 0.1+0.2 với 0.3, thử giá trị rất lớn cộng giá trị rất nhỏ. Thử mất mát độ chính xác khi trừ hai số gần nhau và khi cộng các số có độ lớn chênh lệch.
- [ ] Chọn so sánh gần đúng theo độ lớn và ngữ cảnh; không dùng một epsilon cố định cho mọi bài. Tìm hiểu vai trò NaN, vô cực và số rất nhỏ ở mức nhận diện trong tính toán.
- [ ] Viết so sánh gần đúng có xét cả sai số tuyệt đối và tương đối khi phù hợp; chọn ngưỡng theo bài toán.
- [ ] Phân biệt lỗi biểu diễn số với thuật toán sai, giữ dữ liệu và phép tính đủ để tái hiện.

**Nguồn tham khảo miễn phí:**

- [Dive Into Systems — sách mở](https://diveintosystems.org/book/)
  - **Phần cần đọc:** Phần Binary and Data Representation: integer,floating point và text; theo dõi giới hạn biểu diễn trong chương trình nhỏ.
  - **Truy cập:** Toàn bộ bản web miễn phí. Ví dụ dùng C; chỉ chuyển ý tưởng sang C++ khi hai ngôn ngữ có hành vi tương ứng.

### 174 · ASCII, Unicode và UTF-8

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Xem byte của chuỗi tiếng Việt trong tệp UTF-8. Lưu tệp cùng chuỗi tiếng Việt và xem byte hexadecimal, đối chiếu với ký tự trên màn hình.
- [ ] Phân biệt byte, code point và ký tự người dùng nhìn thấy. Phân biệt encoding UTF-8 với phông chữ hiển thị, lỗi phông không có nghĩa byte đang khác.
- [ ] Thử đếm string.size trong C++ để thấy vì sao không phải luôn là số chữ hiển thị. Thử ký tự nhìn giống nhau nhưng có cách kết hợp dấu khác để thấy đếm byte/code point/grapheme là các bài khác.
- [ ] Không cắt chuỗi UTF-8 ở vị trí byte tùy tiện rồi giả định còn là văn bản hợp lệ.
- [ ] Khi xử lý chuỗi C++ cơ bản, ghi rõ thao tác đang theo byte hay nhờ thư viện Unicode xử lý theo ký tự.

**Nguồn tham khảo miễn phí:**

- [Dive Into Systems — sách mở](https://diveintosystems.org/book/)
  - **Phần cần đọc:** Phần Binary and Data Representation: integer,floating point và text; theo dõi giới hạn biểu diễn trong chương trình nhỏ.
  - **Truy cập:** Toàn bộ bản web miễn phí. Ví dụ dùng C; chỉ chuyển ý tưởng sang C++ khi hai ngôn ngữ có hành vi tương ứng.

### 175 · Cổng logic và mạch tổ hợp

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Lập bảng chân trị cho NAND, AND, OR và XOR. Với mỗi cổng, lập bảng mọi tổ hợp đầu vào và kiểm tra đầu ra trước khi ghép mạch.
- [ ] Dựng half adder và full adder bằng mô phỏng. Dựng XOR từ cổng cơ bản rồi dùng nó cho bit tổng của bộ cộng.
- [ ] Kiểm tra mọi đầu vào với số bit nhỏ thay vì chỉ nhìn sơ đồ. Trong full adder, phân biệt hai bit cần cộng với carry-in và hai đầu ra sum/carry-out.
- [ ] Ghép vài full adder để cộng nhiều bit, thử trường hợp phát sinh carry cuối.
- [ ] Dùng phần mềm mô phỏng để chạy đủ đầu vào của mạch nhỏ; không xem dây nối đẹp là bằng chứng mạch đúng.

**Nguồn tham khảo miễn phí:**

- [Dive Into Systems — sách mở](https://diveintosystems.org/book/)
  - **Phần cần đọc:** Phần Computer Architecture: gates,circuits,memory và CPU execution; chưa yêu cầu toàn bộ thiết kế CPU.
  - **Truy cập:** Toàn bộ bản web miễn phí. Ví dụ dùng C; chỉ chuyển ý tưởng sang C++ khi hai ngôn ngữ có hành vi tương ứng.

### 176 · Mạch tuần tự và bộ nhớ

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Phân biệt mạch tổ hợp với mạch có trạng thái. Chọn mô hình phần tử nhớ theo khóa học, ghi lúc nào đầu vào được chốt theo clock.
- [ ] Theo dõi một thanh ghi qua các nhịp clock trong mô phỏng. Theo dõi trạng thái cũ, tín hiệu ghi và trạng thái mới trong bảng từng nhịp.
- [ ] Ghép thanh ghi, bộ chọn và bộ nhớ trong một thiết kế giản lược. Dùng multiplexor chọn dữ liệu/địa chỉ, phân biệt chọn ô cần đọc với cho phép ghi.
- [ ] Kiểm tra không ghi khi write-enable tắt, ghi đúng ô khi bật và ô khác giữ dữ liệu.
- [ ] Nêu rõ mô hình được giản lược; chưa cần đi sâu điện tử hoặc timing vật lý ở ô này.

**Nguồn tham khảo miễn phí:**

- [Dive Into Systems — sách mở](https://diveintosystems.org/book/)
  - **Phần cần đọc:** Phần Computer Architecture: gates,circuits,memory và CPU execution; chưa yêu cầu toàn bộ thiết kế CPU.
  - **Truy cập:** Toàn bộ bản web miễn phí. Ví dụ dùng C; chỉ chuyển ý tưởng sang C++ khi hai ngôn ngữ có hành vi tương ứng.

### 177 · CPU thực thi lệnh

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Theo dõi chu trình lấy lệnh, giải mã và thực thi trên mô hình đơn giản. Đặt một chương trình ngắn trong bộ nhớ mô phỏng, khởi tạo PC và thanh ghi theo quy ước CPU đang dùng.
- [ ] Phân biệt thanh ghi, ALU, bộ đếm chương trình và RAM. Mỗi lệnh ghi PC trước/sau, toán hạng lấy ở đâu, phép ALU và giá trị được ghi lại.
- [ ] Chạy tay chương trình cộng các số, ghi giá trị thanh ghi sau từng bước. Thử lệnh nhảy có điều kiện và phân biệt địa chỉ lệnh với dữ liệu nằm ở địa chỉ đó.
- [ ] Vẽ đường đi dữ liệu giữa bộ nhớ, thanh ghi, ALU và khối điều khiển cho một phép cộng.
- [ ] Không đồng nhất CPU mô hình của khóa với toàn bộ chi tiết x86/ARM ngoài thực tế.

**Nguồn tham khảo miễn phí:**

- [Dive Into Systems — sách mở](https://diveintosystems.org/book/)
  - **Phần cần đọc:** Phần Computer Architecture: gates,circuits,memory và CPU execution; chưa yêu cầu toàn bộ thiết kế CPU.
  - **Truy cập:** Toàn bộ bản web miễn phí. Ví dụ dùng C; chỉ chuyển ý tưởng sang C++ khi hai ngôn ngữ có hành vi tương ứng.

### 178 · Đọc assembly của chương trình C++ nhỏ

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Biên dịch hàm cộng, vòng lặp và lời gọi hàm sang assembly. Giữ một hàm thật ngắn và đánh dấu tham số, kết quả để lần theo quy ước gọi hàm compiler sinh.
- [ ] Nhận ra lệnh nạp, lưu, nhảy có điều kiện và gọi hàm. Nhận ra so sánh và nhảy thực hiện vòng lặp, đọc/ghi bộ nhớ khác thao tác trên thanh ghi.
- [ ] Đối chiếu bản Debug với bản tối ưu; không giả định mỗi dòng C++ ứng với một lệnh máy. So bản không tối ưu và bản tối ưu trên cùng mã nguồn để thấy lệnh có thể bị gộp hoặc loại.
- [ ] Kiểm tra kết quả chạy vẫn đúng theo ngữ nghĩa chương trình, không suy số dòng assembly ra hiệu năng tuyệt đối.
- [ ] Chỉ cần đọc và giải thích đoạn nhỏ, chưa yêu cầu tự viết ứng dụng assembly hoàn chỉnh.

**Nguồn tham khảo miễn phí:**

- [Dive Into Systems — sách mở](https://diveintosystems.org/book/)
  - **Phần cần đọc:** Phần Assembly Programming: registers,instructions,procedure calls và stack; chọn kiến trúc máy đang dùng để đối chiếu.
  - **Truy cập:** Toàn bộ bản web miễn phí. Ví dụ dùng C; chỉ chuyển ý tưởng sang C++ khi hai ngôn ngữ có hành vi tương ứng.

### 179 · Stack, heap và bố trí dữ liệu

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Theo dõi biến tự động, vùng cấp phát động và vùng dữ liệu tĩnh trong một chương trình. Tạo struct có char và int theo hai thứ tự, xem sizeof/alignof và giải thích padding.
- [ ] Kiểm tra sizeof của struct có padding. Theo dõi một lời gọi hàm có biến tự động và một đối tượng cấp phát động được giải phóng đúng cách.
- [ ] Đọc một dãy byte theo big-endian và little-endian; tách quy ước lưu khỏi giá trị số. Đọc dãy byte giả lập theo big/little endian, tự tính lại giá trị để không lẫn byte cao/thấp.
- [ ] Phân biệt stack/heap trong mô hình cấp phát phổ biến với khái niệm thời gian sống do C++ quy định.
- [ ] Không dựa vào địa chỉ in ra ở một lần chạy để khẳng định mọi máy bố trí bộ nhớ giống hệt.

**Nguồn tham khảo miễn phí:**

- [Dive Into Systems — sách mở](https://diveintosystems.org/book/)
  - **Phần cần đọc:** Phần Assembly Programming: registers,instructions,procedure calls và stack; chọn kiến trúc máy đang dùng để đối chiếu.
  - **Truy cập:** Toàn bộ bản web miễn phí. Ví dụ dùng C; chỉ chuyển ý tưởng sang C++ khi hai ngôn ngữ có hành vi tương ứng.

### 180 · Phân cấp bộ nhớ và locality

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Phân biệt cache CPU, RAM và thiết bị lưu trữ. Viết sơ đồ các tầng thanh ghi/cache/RAM/lưu trữ và so dung lượng, độ trễ ở mức tương đối.
- [ ] So sánh duyệt mảng liên tiếp với truy cập bước nhảy lớn. Tạo hai vòng lặp làm cùng số phép toán nhưng thứ tự truy cập khác, giữ kích thước đủ để quan sát.
- [ ] Liên hệ locality không gian, thời gian với cách tổ chức dữ liệu; đo thay vì suy đoán tốc độ. Tách locality không gian do dùng địa chỉ gần nhau với locality thời gian do dùng lại dữ liệu.
- [ ] Đo trong bản build thích hợp, ngăn công việc bị tối ưu mất nếu phép đo phụ thuộc kết quả.
- [ ] Liên hệ duyệt vector với danh sách liên kết, nhưng không kết luận chỉ từ Big-O hoặc một lần đo.

**Nguồn tham khảo miễn phí:**

- [Dive Into Systems — sách mở](https://diveintosystems.org/book/)
  - **Phần cần đọc:** Phần Memory Hierarchy và Computer Architecture: locality,cache,pipeline và I/O; đọc mục tương ứng, không cần hết chương trong một lượt.
  - **Truy cập:** Toàn bộ bản web miễn phí. Ví dụ dùng C; chỉ chuyển ý tưởng sang C++ khi hai ngôn ngữ có hành vi tương ứng.

### 181 · Pipeline và giới hạn tăng tốc

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Mô phỏng các giai đoạn pipeline trên chuỗi lệnh ngắn. Dùng các giai đoạn lấy lệnh, giải mã, thực thi đơn giản, vẽ bảng thời gian của vài lệnh.
- [ ] Nhận diện phụ thuộc dữ liệu và nhánh gây chờ. Tạo một phụ thuộc lệnh sau cần kết quả lệnh trước, xác định chỗ phải chờ hoặc cần forwarding trong mô hình.
- [ ] Dùng định luật Amdahl để tính giới hạn khi chỉ tăng tốc một phần chương trình. Thử một nhánh để thấy pipeline có thể phải bỏ công việc suy đoán sai.
- [ ] Với Amdahl, đặt tỷ lệ phần có thể tăng tốc và hệ số tăng tốc, tính tổng thời gian mới theo cùng giả thiết.
- [ ] Phân biệt giảm thời gian hoàn tất một tác vụ với tăng số tác vụ đi qua pipeline mỗi đơn vị thời gian.

**Nguồn tham khảo miễn phí:**

- [Dive Into Systems — sách mở](https://diveintosystems.org/book/)
  - **Phần cần đọc:** Phần Memory Hierarchy và Computer Architecture: locality,cache,pipeline và I/O; đọc mục tương ứng, không cần hết chương trong một lượt.
  - **Truy cập:** Toàn bộ bản web miễn phí. Ví dụ dùng C; chỉ chuyển ý tưởng sang C++ khi hai ngôn ngữ có hành vi tương ứng.

### 182 · Ngắt, I/O và ranh giới phần cứng

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Theo dõi dữ liệu từ thiết bị đến chương trình ở mức khái niệm. Theo dõi yêu cầu đọc một khối dữ liệu: ứng dụng yêu cầu, OS/driver làm việc, thiết bị hoàn tất và chương trình nhận kết quả.
- [ ] Phân biệt polling với interrupt và vai trò DMA. So kiểm tra trạng thái liên tục với được thông báo bằng ngắt.
- [ ] Giải thích vì sao chờ I/O khác với CPU đang tính toán. Nêu DMA chuyển dữ liệu mà không bắt CPU xử lý từng byte, nhưng CPU vẫn tham gia cấu hình/xử lý hoàn tất.
- [ ] Tạo ví dụ tác vụ chờ đĩa hoặc mạng so với vòng tính toán thuần để liên hệ tới lập lịch.
- [ ] Giữ phân biệt mô hình khái niệm với chi tiết một thiết bị cụ thể.

**Nguồn tham khảo miễn phí:**

- [Dive Into Systems — sách mở](https://diveintosystems.org/book/)
  - **Phần cần đọc:** Phần Memory Hierarchy và Computer Architecture: locality,cache,pipeline và I/O; đọc mục tương ứng, không cần hết chương trong một lượt.
  - **Truy cập:** Toàn bộ bản web miễn phí. Ví dụ dùng C; chỉ chuyển ý tưởng sang C++ khi hai ngôn ngữ có hành vi tương ứng.

### 183 · Làm một phần Nand to Tetris

**Loại:** Áp dụng | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Hoàn thành các bài mạch cơ bản và ALU bằng công cụ của khóa. Đọc hợp đồng đầu vào/đầu ra và tệp test cho từng chip trước khi nối cổng.
- [ ] Chạy bộ kiểm thử đi kèm, sửa từng đầu ra sai. Làm lần lượt cổng cơ bản → bộ chọn → bộ cộng → ALU; chạy test sau mỗi bước.
- [ ] Viết chương trình assembly nhỏ trên CPU mô phỏng; ghi liên hệ với C++ đã học. Với một test sai, lần ngược tín hiệu từ đầu ra đến khối con thay vì thay dây tùy ý.
- [ ] Lưu từng phiên bản chạy đúng và giải thích được một tín hiệu điều khiển của ALU.
- [ ] Kết thúc bằng một chương trình assembly nhỏ chạy trên mô hình để nối phần mạch với thực thi chương trình.

**Khi nào quay lại:** Lab hệ thống dài hơn mức nền. Nên quay lại nếu chọn hệ thống, C++ hoặc muốn củng cố bằng project này.

**Nguồn tham khảo miễn phí:**

- [Nand to Tetris — project guidelines](https://www.nand2tetris.org/course)
  - **Phần cần đọc:** Project 1 Boolean Logic,2 Boolean Arithmetic và 4 Machine Language: dùng hướng dẫn,slide,software và test miễn phí; ALU thuộc Project 2, không bắt mua sách.
  - **Truy cập:** Chỉ dùng hướng dẫn project, slide, phần mềm và test công khai miễn phí; không yêu cầu mua sách hoặc khóa Coursera.

## 13. Hệ điều hành và đồng thời

### 184 · Kernel, user mode và system call

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Phân biệt chương trình ứng dụng với nhân hệ điều hành. Vẽ ranh giới ứng dụng, thư viện hệ thống, system call và kernel trong một thao tác đọc tệp.
- [ ] Theo dõi thao tác mở tệp đi qua system call. Phân biệt gọi hàm thư viện với chắc chắn phát sinh system call ngay, vì có thể có bộ đệm.
- [ ] Quan sát lời gọi hệ thống của chương trình tự viết trong môi trường học tập. Chạy công cụ theo dõi trên chương trình tự tạo, nhận ra open/read/write/close hoặc tương đương của môi trường.
- [ ] Giải thích vì sao ứng dụng không được tự ý truy cập mọi bộ nhớ hay thiết bị.
- [ ] Tách lỗi API trả về khỏi lỗi chương trình do truy cập vùng nhớ không hợp lệ.

**Nguồn tham khảo miễn phí:**

- [Operating Systems: Three Easy Pieces, v1.10](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  - **Phần cần đọc:** Chương 2 Introduction,4 Processes và 6 Limited Direct Execution.
  - **Truy cập:** Đọc các chương PDF riêng trong Free Book Chapters: toàn bộ nội dung sách được đọc miễn phí. Bỏ qua Buy PDF/bản in trả phí.

### 185 · Tiến trình và không gian địa chỉ

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Chạy hai bản cùng chương trình và quan sát PID, bộ nhớ riêng. Mô hình nhận thức Tiến trình vs Luồng (Process vs Thread): Tiến trình sở hữu không gian địa chỉ ảo độc lập (Page Directory/Page Tables) và PID riêng, phân lập hoàn toàn bộ nhớ; Luồng (Thread) chia sẻ chung không gian địa chỉ và Heap nhưng có Call Stack và tập thanh ghi riêng.
- [ ] Phân biệt chương trình trên đĩa với tiến trình đang chạy. Đo lường chi phí chuyển ngữ cảnh (Context Switching Overhead): CPU phải lưu/khôi phục toàn bộ thanh ghi, chuyển đổi con trỏ bảng trang và xả bộ đệm TLB (Translation Lookaside Buffer), dẫn tới hiện tượng ô nhiễm cache CPU.
- [ ] Tìm hiểu tạo tiến trình, exec và wait trong môi trường POSIX. Theo dõi vòng đời tiến trình: tạo (fork/clone) → sẵn sàng (ready) → thực thi (running) → chờ (blocked/waiting) → kết thúc (terminated).
- [ ] Nhận diện và xử lý triệt để tiến trình Zombie (con đã kết thúc nhưng cha chưa wait) và Orphan (cha kết thúc trước con).
- [ ] Không suy diễn việc hai tiến trình in ra cùng một địa chỉ con trỏ ảo có nghĩa là chúng trỏ chung một ô nhớ vật lý trong RAM.

**Thông tin thêm & Lưu ý bản chất:**

Tiến trình vs Luồng (Process vs Thread): Mỗi tiến trình có không gian địa chỉ ảo độc lập (Page Directory/Tables) và PID riêng, cách ly bộ nhớ hoàn toàn; Luồng (Thread) chia sẻ chung không gian địa chỉ và Heap nhưng có Call Stack và tập thanh ghi riêng. Chi phí chuyển ngữ cảnh (Context Switching Overhead): CPU phải lưu/khôi phục thanh ghi, chuyển con trỏ bảng trang và xả bộ đệm TLB (Translation Lookaside Buffer).

**Nguồn tham khảo miễn phí:**

- [Operating Systems: Three Easy Pieces, v1.10](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  - **Phần cần đọc:** Chương 4 Processes và 5 Process API; làm homework mô phỏng/process API đi kèm.
  - **Truy cập:** Đọc các chương PDF riêng trong Free Book Chapters: toàn bộ nội dung sách được đọc miễn phí. Bỏ qua Buy PDF/bản in trả phí.

### 186 · Tạo và chờ tiến trình con

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Viết chương trình POSIX tạo con, chạy một lệnh đơn giản rồi chờ kết quả. Kiểm tra kết quả fork hoặc API tạo tiến trình, tách nhánh cha/con rõ ràng.
- [ ] Kiểm tra mã kết thúc và xử lý tạo tiến trình thất bại. Trong nhánh con, chuẩn bị đối số đúng cho exec; nếu exec thành công, mã cũ sau nó không chạy tiếp.
- [ ] Phân biệt đầu ra có thể xen kẽ với một thứ tự được bảo đảm. Ở cha, chờ đúng con và giải mã trạng thái kết thúc thay vì mặc định mọi giá trị wait là mã thoát trực tiếp.
- [ ] Thử lệnh không tồn tại, lệnh thoát lỗi và lệnh chạy lâu.
- [ ] Không nhân bản thêm tiến trình ngoài ý muốn do vòng lặp hoặc nhánh con tiếp tục chạy phần mã của cha.

**Nguồn tham khảo miễn phí:**

- [Operating Systems: Three Easy Pieces, v1.10](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  - **Phần cần đọc:** Chương 4 Processes và 5 Process API; làm homework mô phỏng/process API đi kèm.
  - **Truy cập:** Đọc các chương PDF riêng trong Free Book Chapters: toàn bộ nội dung sách được đọc miễn phí. Bỏ qua Buy PDF/bản in trả phí.

### 187 · Lập lịch CPU

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Mô phỏng FCFS, round robin và một thuật toán ưu tiên trên cùng tập tiến trình. Lập bảng thời điểm tới, CPU burst và thời gian bắt đầu/kết thúc cho từng tiến trình giả định.
- [ ] Tính thời gian chờ, đáp ứng và hoàn tất. Với round robin, đặt quantum rõ và cập nhật hàng chờ khi tác vụ mới tới.
- [ ] Thử công việc dài chen với công việc ngắn; giải thích đánh đổi công bằng và thông lượng. Tính response time từ lần được chạy đầu tiên, phân biệt với waiting time và turnaround.
- [ ] Thay quantum nhỏ/lớn để phân tích chuyển ngữ cảnh và độ đáp ứng trong mô hình.
- [ ] Nêu giả thiết bỏ qua I/O hoặc chi phí chuyển ngữ cảnh nếu dùng để tính, không gọi kết quả mô phỏng là hiệu năng OS thật.

**Nguồn tham khảo miễn phí:**

- [Operating Systems: Three Easy Pieces, v1.10](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  - **Phần cần đọc:** Chương 7 CPU Scheduling,8 Multi-level Feedback và 9 Lottery Scheduling; chỉ so các chính sách đang học.
  - **Truy cập:** Đọc các chương PDF riêng trong Free Book Chapters: toàn bộ nội dung sách được đọc miễn phí. Bỏ qua Buy PDF/bản in trả phí.

### 188 · Bộ nhớ ảo và phân trang

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Dịch địa chỉ ảo sang trang và offset trên ví dụ số nhỏ. Bản chất Bộ nhớ ảo (Virtual Memory) & Phân trang (Paging): CPU phát ra địa chỉ ảo gồm số hiệu trang (VPN) và độ dịch (Offset); MMU dịch sang địa chỉ khung trang vật lý (PFN) qua bảng trang đa cấp (Multi-level Page Tables).
- [ ] Phân biệt page table, TLB và page fault. Hiểu vai trò của bộ đệm dịch địa chỉ siêu tốc TLB (Translation Lookaside Buffer): giảm số lần truy xuất RAM khi dịch địa chỉ từ nhiều lần xuống còn 1 chu kỳ clock nếu TLB Hit.
- [ ] Mô phỏng một chính sách thay trang; không đồng nhất cache miss với page fault. Phân tích cơ chế ngắt thiếu trang (Page Fault Interrupt): Khi bit Present = 0, CPU kích hoạt trap chuyển sang Kernel Mode để nạp trang từ đĩa (Swap space) vào RAM và cập nhật lại Page Table.
- [ ] So sánh chính sách thay thế trang FIFO, LRU (Least Recently Used) và Clock Algorithm; nhận diện hiện tượng suy biến tráo trang liên tục (Thrashing) khi RAM không đủ cho Working Set.
- [ ] Phân biệt rõ phân quyền trang nhớ (Read/Write/Execute bit) giúp bảo vệ bộ nhớ và ngăn chặn tấn công thực thi mã độc trên Stack.

**Thông tin thêm & Lưu ý bản chất:**

Bộ nhớ ảo & Phân trang (Paging): CPU phát ra địa chỉ ảo gồm số hiệu trang (VPN) và độ dịch (Offset); MMU dịch sang địa chỉ vật lý (PFN) qua bảng trang đa cấp. Bộ đệm TLB (Translation Lookaside Buffer) rút ngắn thời gian dịch địa chỉ còn 1 chu kỳ clock. Cơ chế ngắt thiếu trang (Page Fault) khi trang bị swap ra đĩa.

**Nguồn tham khảo miễn phí:**

- [Operating Systems: Three Easy Pieces, v1.10](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  - **Phần cần đọc:** Chương 13 Address Spaces,15 Address Translation,18 Paging và 19 TLBs.
  - **Truy cập:** Đọc các chương PDF riêng trong Free Book Chapters: toàn bộ nội dung sách được đọc miễn phí. Bỏ qua Buy PDF/bản in trả phí.

### 189 · Luồng và dữ liệu dùng chung

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Tạo hai std::thread, join trước khi kết thúc chương trình. Bản chất đồng thời đa luồng: Các luồng dùng chung vùng dữ liệu tĩnh và Heap nhưng sở hữu Call Stack riêng biệt; tuyệt đối không truyền tham chiếu biến cục bộ Stack sang luồng khác có vòng đời dài hơn.
- [ ] Phân biệt vùng dữ liệu chung với stack riêng của mỗi luồng. Hiểu rõ cơ chế join() chặn luồng cha chờ luồng con hoàn tất, và detach() tách luồng chạy ngầm độc lập.
- [ ] Giải thích vì sao đa luồng không mặc nhiên làm chương trình nhanh hơn. Phân biệt Race Condition (lỗi logic thứ tự thực thi) vs Data Race (lỗi truy cập đồng thời vào ô nhớ không đồng bộ dẫn tới Undefined Behavior).
- [ ] Nhận thức đúng về hiệu năng: Đa luồng chỉ tăng tốc khi bài toán có thể song song hóa (Định luật Amdahl); số lượng luồng vượt quá số nhân CPU vật lý sẽ phản tác dụng do Context Switching Overhead.
- [ ] Sử dụng ThreadSanitizer (TSan) với cờ -fsanitize=thread -g để phát hiện tự động các điểm tranh chấp dữ liệu lúc chạy.

**Thông tin thêm & Lưu ý bản chất:**

Đồng thời đa luồng & An toàn bộ nhớ: Các luồng chia sẻ Heap chung nhưng có ngăn xếp riêng. Ngăn chặn Race Condition và Data Race bằng std::mutex, std::lock_guard (RAII) và phát hiện tự động bằng ThreadSanitizer (TSan: -fsanitize=thread -g).

**Nguồn tham khảo miễn phí:**

- [Operating Systems: Three Easy Pieces, v1.10](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  - **Phần cần đọc:** Chương 26 Concurrency and Threads,27 Thread API và 28 Locks.
  - **Truy cập:** Đọc các chương PDF riêng trong Free Book Chapters: toàn bộ nội dung sách được đọc miễn phí. Bỏ qua Buy PDF/bản in trả phí.

### 190 · Tái hiện và sửa race condition

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Tạo ví dụ nhiều luồng tăng một biến chung; coi đây là ví dụ lỗi cần sửa. Tách thao tác tăng thành đọc–tính–ghi để hình dung việc hai luồng xen nhau làm mất cập nhật.
- [ ] Dùng mutex và lock_guard bảo vệ thao tác. Hiểu data race trong C++ có thể gây undefined behavior, không chỉ cho ra một số đếm sai dự đoán được.
- [ ] Chạy ThreadSanitizer nếu có; không coi một lần cho kết quả đúng là đã hết data race. Đặt cùng một mutex bao quanh toàn bộ thao tác cần nguyên tử, không chỉ khóa riêng dòng ghi.
- [ ] Dùng RAII như lock_guard để mở khóa đúng khi có return hoặc lỗi.
- [ ] So với atomic counter cho đúng thao tác đơn giản; không dùng volatile như cách chữa data race.
- [ ] Sau sửa, chạy lại công cụ và test nhưng biết nhiều lần chạy đúng vẫn không thay thế lập luận đồng bộ.

**Nguồn tham khảo miễn phí:**

- [Operating Systems: Three Easy Pieces, v1.10](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  - **Phần cần đọc:** Chương 26 Concurrency and Threads,27 Thread API và 28 Locks.
  - **Truy cập:** Đọc các chương PDF riêng trong Free Book Chapters: toàn bộ nội dung sách được đọc miễn phí. Bỏ qua Buy PDF/bản in trả phí.

### 191 · Mutex, condition variable và semaphore

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Phân biệt khóa bảo vệ dữ liệu với tín hiệu thông báo điều kiện. Xác định dữ liệu nào mutex bảo vệ và yêu cầu mọi đường truy cập dùng cùng quy tắc.
- [ ] Dùng condition_variable cùng predicate để chờ dữ liệu. Khi dùng condition_variable, kiểm tra điều kiện dưới khóa bằng predicate để chịu được wakeup không đúng lúc mong đợi.
- [ ] Mô tả vai trò semaphore đếm tài nguyên hữu hạn và so với mutex. Phân biệt thông báo có sự kiện với bảo đảm điều kiện vẫn đúng lúc luồng lấy lại khóa.
- [ ] Với semaphore, đặt số tài nguyên ban đầu và ghép acquire/release hợp lệ.
- [ ] Không ngủ một khoảng cố định để giả làm đồng bộ giữa các luồng.

**Nguồn tham khảo miễn phí:**

- [Operating Systems: Three Easy Pieces, v1.10](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  - **Phần cần đọc:** Chương 28 Locks,30 Condition Variables và 31 Semaphores; đọc bài producer–consumer.
  - **Truy cập:** Đọc các chương PDF riêng trong Free Book Chapters: toàn bộ nội dung sách được đọc miễn phí. Bỏ qua Buy PDF/bản in trả phí.

### 192 · Hàng đợi producer–consumer

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Cài queue có giới hạn cho một nhóm producer và consumer. Định nghĩa điều kiện producer có thể thêm là queue chưa đầy, consumer có thể lấy là queue chưa rỗng.
- [ ] Chờ đúng khi đầy hoặc rỗng, mở khóa khi chờ bằng condition variable. Dùng một mutex bảo vệ queue/trạng thái dừng, chờ bằng predicate phù hợp.
- [ ] Thiết kế cách dừng để mọi luồng thoát, không kẹt khi hết dữ liệu. Sau thêm/bớt, thông báo phía có thể tiến tiếp; tránh giữ khóa trong phần xử lý công việc lâu không cần bảo vệ queue.
- [ ] Chọn giao thức kết thúc như cờ đóng queue, phân biệt đóng với queue tạm thời rỗng.
- [ ] Thử đóng khi queue rỗng, khi còn việc và khi producer đang chờ đầy; join được mọi luồng.
- [ ] Đối chiếu số công việc tạo và xử lý để phát hiện mất hoặc xử lý lặp trong yêu cầu đúng-một-lần của ví dụ bộ nhớ chung.
- [ ] Cho hai producer và hai consumer chạy lặp, kiểm tra mọi mã công việc xuất hiện đúng một lần; tự tái hiện lỗi trước khi sửa và giải thích bất biến được khóa bảo vệ.

**Nguồn tham khảo miễn phí:**

- [Operating Systems: Three Easy Pieces, v1.10](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  - **Phần cần đọc:** Chương 28 Locks,30 Condition Variables và 31 Semaphores; đọc bài producer–consumer.
  - **Truy cập:** Đọc các chương PDF riêng trong Free Book Chapters: toàn bộ nội dung sách được đọc miễn phí. Bỏ qua Buy PDF/bản in trả phí.

### 193 · Deadlock và thứ tự khóa

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Tạo sơ đồ chờ của hai tác vụ cần hai tài nguyên. Vẽ thứ tự A giữ khóa 1 chờ khóa 2, B giữ khóa 2 chờ khóa 1 để xác định chu trình chờ.
- [ ] Nêu các điều kiện gây deadlock và phân biệt với starvation. Tách deadlock khỏi luồng chờ lâu nhưng hệ vẫn có tiến triển hoặc livelock cứ đổi trạng thái mà không làm việc.
- [ ] Sửa bằng thứ tự khóa thống nhất hoặc scoped_lock trên các mutex cần dùng. Chọn một thứ tự lấy nhiều khóa và áp dụng ở mọi đường mã.
- [ ] Nếu dùng scoped_lock cho nhiều mutex, hiểu nó giúp lấy nhóm khóa theo cơ chế tránh deadlock phù hợp, không sửa mọi vấn đề thiết kế tài nguyên.
- [ ] Thử lại lịch xen kẽ từng gây kẹt và tránh tạo bài test có thể treo vô hạn mà không có timeout/chẩn đoán.

**Nguồn tham khảo miễn phí:**

- [Operating Systems: Three Easy Pieces, v1.10](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  - **Phần cần đọc:** Chương 32 Concurrency Bugs: deadlock và các điều kiện phát sinh.
  - **Truy cập:** Đọc các chương PDF riêng trong Free Book Chapters: toàn bộ nội dung sách được đọc miễn phí. Bỏ qua Buy PDF/bản in trả phí.

### 194 · Tệp, thư mục và độ bền dữ liệu

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Phân biệt file descriptor, nội dung tệp và metadata. Phân biệt tên đường dẫn, mục thư mục, đối tượng tệp và handle/file descriptor đang mở.
- [ ] Theo dõi tạo, ghi, đóng, đổi tên tệp. Quan sát buffer ở thư viện, cache OS và thiết bị để thấy ghi xong trong chương trình chưa luôn là bền trước mất điện.
- [ ] Đọc vai trò buffer, flush và journal; không coi đóng chương trình bình thường là mô phỏng đủ mọi sự cố mất điện. Đọc cơ chế đồng bộ như fsync ở hệ đang học và điều kiện liên quan thư mục/đổi tên khi cần bền vững.
- [ ] Thử lỗi đầy đĩa bằng mô phỏng hoặc môi trường giới hạn an toàn, không lấp ổ làm việc thật.
- [ ] Nêu vai trò journal trong khôi phục nhất quán và giới hạn bảo đảm, không coi journal thay cho backup.

**Nguồn tham khảo miễn phí:**

- [Operating Systems: Three Easy Pieces, v1.10](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  - **Phần cần đọc:** Chương 39 Files and Directories,40 File System Implementation và 42 FSCK and Journaling.
  - **Truy cập:** Đọc các chương PDF riêng trong Free Book Chapters: toàn bộ nội dung sách được đọc miễn phí. Bỏ qua Buy PDF/bản in trả phí.

### 195 · Pipe và giao tiếp giữa tiến trình

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Kết nối đầu ra tiến trình con với đầu vào tiến trình khác bằng pipe. Xác định tiến trình nào sở hữu đầu đọc/ghi và đóng các bản sao không dùng ở cả cha lẫn con.
- [ ] Đóng các đầu pipe không dùng để nhận EOF đúng. Đọc tới EOF chỉ sau khi mọi đầu ghi liên quan đã đóng; giữ một đầu ghi thừa có thể khiến chờ mãi.
- [ ] Thử dữ liệu lớn hơn bộ đệm và tránh chờ sai thứ tự gây kẹt. Với lượng dữ liệu lớn, tránh để cả hai phía đều chờ bên kia trong khi pipe bị đầy.
- [ ] Kiểm tra số byte thực đọc/ghi và xử lý bị ngắt hoặc lỗi theo API đang dùng.
- [ ] Thử tiến trình con kết thúc sớm và dữ liệu rỗng để kiểm tra mã xử lý kết thúc đúng.

**Nguồn tham khảo miễn phí:**

- [Operating Systems: Three Easy Pieces, v1.10](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  - **Phần cần đọc:** Chương 5 Process API và mục Projects: Unix shell; pipe cần đối chiếu API hệ điều hành khi cài.
  - **Truy cập:** Đọc các chương PDF riêng trong Free Book Chapters: toàn bộ nội dung sách được đọc miễn phí. Bỏ qua Buy PDF/bản in trả phí.

### 196 · Project shell tối giản

**Loại:** Áp dụng | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Viết vòng lặp đọc lệnh, chạy lệnh ngoài bằng tiến trình con và wait. Chốt cú pháp phiên bản đầu chỉ có lệnh và đối số đơn giản, ghi rõ chưa hỗ trợ quote/escape phức tạp.
- [ ] Thêm lệnh cd nội bộ và xử lý lệnh không tồn tại. Cài built-in cd trong tiến trình shell để thay thư mục làm việc của chính shell, không chỉ của một con ngắn hạn.
- [ ] Thêm một pipeline hai lệnh sau khi bản cơ bản ổn; ghi giới hạn cú pháp được hỗ trợ. Sau mỗi lệnh ngoài, wait và báo lỗi với tên lệnh cùng nguyên nhân đủ hiểu.
- [ ] Với pipeline hai lệnh, tạo hai con và gắn đúng đầu pipe bằng thao tác chuyển descriptor, đóng phần dư.
- [ ] Thêm thoát shell, xử lý dòng trống và EOF; thử sau lỗi lệnh shell vẫn nhận lệnh mới.
- [ ] Dùng bài test lệnh tạo đầu ra dài để phát hiện kẹt buffer hoặc chờ sai thứ tự.

**Khi nào quay lại:** Lab hệ thống dài hơn mức nền. Nên quay lại nếu chọn hệ thống, C++ hoặc muốn củng cố bằng project này.

**Nguồn tham khảo miễn phí:**

- [Operating Systems: Three Easy Pieces, v1.10](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  - **Phần cần đọc:** Chương 5 Process API và mục Projects: Unix shell; pipe cần đối chiếu API hệ điều hành khi cài.
  - **Truy cập:** Đọc các chương PDF riêng trong Free Book Chapters: toàn bộ nội dung sách được đọc miễn phí. Bỏ qua Buy PDF/bản in trả phí.

## 14. Mạng máy tính

### 197 · Tầng mạng và đóng gói dữ liệu

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Theo dõi một yêu cầu web qua ứng dụng, vận chuyển, mạng và liên kết. Chọn một lần mở trang web và ghi tầng nào chịu trách nhiệm tên miền, cổng, địa chỉ IP và địa chỉ liên kết.
- [ ] Phân biệt thông điệp, segment, packet và frame theo tầng. Vẽ cách dữ liệu ứng dụng được bọc thêm header rồi được tháo ở phía nhận.
- [ ] Dùng mô hình TCP/IP làm khung, đối chiếu OSI để đọc tài liệu. Phân biệt chức năng định tuyến gói giữa mạng với vận chuyển dữ liệu tới đúng tiến trình ứng dụng.
- [ ] Chỉ ra địa chỉ nguồn/đích ở tầng IP và cổng ở tầng vận chuyển, không gọi chúng là cùng một địa chỉ.
- [ ] Giữ sơ đồ ở mức mô hình; chi tiết phần cứng hoặc giao thức cụ thể sẽ được đi vào ở các ô tiếp theo.

**Thông tin thêm & Lưu ý bản chất:**

Mô hình 5 tầng TCP/IP & Đóng gói dữ liệu: Ứng dụng (Application: HTTP/DNS) -> Vận chuyển (Transport: TCP/UDP Segment) -> Mạng (Network: IP Packet) -> Liên kết dữ liệu (Data Link: Ethernet Frame) -> Vật lý (Physical: Bits).

**Nguồn tham khảo miễn phí:**

- [An Introduction to Computer Networks — Peter L. Dordal](https://intronetworks.cs.luc.edu/current/html/index.html)
  - **Phần cần đọc:** Chương 1 An Overview of Networks: layers,packets,forwarding và IETF/OSI.
  - **Truy cập:** Toàn bộ bản sách web miễn phí từ tác giả.

### 198 · IP, subnet và định tuyến

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Tính phần mạng, phần host của vài địa chỉ IPv4 với CIDR. Làm ví dụ địa chỉ /24 và /26, viết mask nhị phân rồi AND với địa chỉ để tìm mạng.
- [ ] Phân biệt địa chỉ cục bộ, gateway, NAT và địa chỉ công khai. Kiểm tra hai máy có cùng subnet theo mask đang xét, không chỉ nhìn ba số đầu giống nhau.
- [ ] Theo dõi lựa chọn tuyến bằng tiền tố dài nhất trên một bảng nhỏ. Theo dõi gói tới máy cùng mạng và gói đi qua gateway khi khác mạng.
- [ ] Với bảng tuyến nhỏ, chọn mục khớp dài nhất rồi xét tuyến mặc định.
- [ ] Nhận diện IPv6 tồn tại và mục đích không gian địa chỉ lớn hơn; không áp mọi quy tắc IPv4 máy móc sang IPv6.

**Thông tin thêm & Lưu ý bản chất:**

Tầng Mạng & Kỹ thuật chia mạng con (CIDR Subnetting): Tính toán chính xác Network ID, Broadcast Address, Subnet Mask và dải Host khả dụng từ ký hiệu CIDR (ví dụ /24, /27). Hiểu rõ vai trò của NAT (Network Address Translation), DHCP (DORA process), và ICMP (Ping/Traceroute).

**Nguồn tham khảo miễn phí:**

- [An Introduction to Computer Networks — Peter L. Dordal](https://intronetworks.cs.luc.edu/current/html/index.html)
  - **Phần cần đọc:** Chương 9 IP version 4: delivery,subnets,NAT; đọc thêm routing ở chương 13 khi cần.
  - **Truy cập:** Toàn bộ bản sách web miễn phí từ tác giả.

### 199 · Ethernet, MAC, ARP và Wi-Fi

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Phân biệt địa chỉ MAC trong liên kết với địa chỉ IP dùng định tuyến. Theo dõi frame tới gateway có MAC đích là gateway, trong khi IP đích vẫn có thể là server xa.
- [ ] Theo dõi một máy tìm MAC của gateway bằng ARP. Đọc bảng ARP của chính máy hoặc mô hình học tập, phân biệt bản ghi cache với thông tin cố định mọi lúc.
- [ ] Mô tả vì sao thông tin liên kết có thể đổi qua mỗi chặng. Dùng một ví dụ router nhận frame rồi tạo frame mới trên liên kết tiếp theo.
- [ ] Phân biệt việc Wi-Fi kết nối được mạng cục bộ với DNS/Internet/app đã hoạt động.
- [ ] Không tự thu hoặc thử giả mạo lưu lượng của mạng không được phép trong bài nhập môn này.

**Nguồn tham khảo miễn phí:**

- [An Introduction to Computer Networks — Peter L. Dordal](https://intronetworks.cs.luc.edu/current/html/index.html)
  - **Phần cần đọc:** Chương 2 Ethernet Basics,4 Wireless LANs và §10.2 ARP.
  - **Truy cập:** Toàn bộ bản sách web miễn phí từ tác giả.

### 200 · DNS từ tên đến địa chỉ

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Tra bản ghi A, AAAA và CNAME của một tên miền bằng công cụ phù hợp. Tra từng loại A/AAAA/CNAME và đọc phần trả lời, TTL cùng mã lỗi thay vì chỉ xem một địa chỉ cuối.
- [ ] Phân biệt recursive resolver với authoritative server. Vẽ đường hỏi từ ứng dụng tới resolver và các máy chủ có thẩm quyền ở mức khái niệm.
- [ ] Quan sát cache và TTL; thử tên không tồn tại và giải thích lỗi. So truy vấn lặp lại để nhận ra cache có thể rút ngắn đường xử lý.
- [ ] Thử tên không tồn tại và một tên có nhiều bản ghi; không mặc định một tên chỉ có một IP.
- [ ] Phân biệt lỗi phân giải tên với server ở địa chỉ đó từ chối kết nối.

**Nguồn tham khảo miễn phí:**

- [An Introduction to Computer Networks — Peter L. Dordal](https://intronetworks.cs.luc.edu/current/html/index.html)
  - **Phần cần đọc:** §1.11 và §10.1 DNS: từ tên tới địa chỉ và cache.
  - **Truy cập:** Toàn bộ bản sách web miễn phí từ tác giả.

### 201 · UDP và TCP

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Phân biệt datagram với luồng byte. Bản chất Tầng Giao vận (Transport Layer): Phân biệt ranh giới UDP (phi kết nối, truyền datagram độc lập nhanh không đảm bảo) vs TCP (hướng kết nối, dòng byte tin cậy tuyệt đối).
- [ ] Theo dõi bắt tay, số thứ tự, ACK, truyền lại và điều khiển luồng. Làm chủ quy trình bắt tay 3 bước (3-way handshake: SYN -> SYN-ACK -> ACK) và đóng kết nối 4 bước (FIN -> ACK -> FIN -> ACK); theo dõi số thứ tự Sequence Number và ACK Number khi truyền lại gói mất.
- [ ] Tự tạo ví dụ dữ liệu đến nhiều lần đọc dù phía gửi chỉ gọi send một lần. Hiểu sâu cơ chế điều khiển luồng (Flow Control) qua Cửa sổ trượt (Sliding Window do bên nhận quảng bá để bảo vệ bộ đệm máy nhận).
- [ ] Làm chủ cơ chế điều khiển tắc nghẽn (Congestion Control) bảo vệ toàn mạng: Khởi động chậm (Slow Start), Tránh tắc nghẽn (AIMD - Additive Increase Multiplicative Decrease), Truyền lại nhanh (Fast Retransmit/Fast Recovery).
- [ ] Tham khảo cẩm nang socket và mạng mức thấp tại docs/guides/08-NETWORK-SOCKETS-HTTP-TCP.md.

**Thông tin thêm & Lưu ý bản chất:**

Tầng Giao vận (Transport Layer): So sánh UDP (phi kết nối, truyền nhanh không đảm bảo) vs TCP (hướng kết nối, tin cậy). Nắm vững cơ chế bắt tay 3 bước (3-way handshake: SYN -> SYN-ACK -> ACK), ngắt kết nối 4 bước (FIN -> ACK -> FIN -> ACK), Sequence/ACK numbers, Điều khiển luồng qua Sliding Window, và Điều khiển tắc nghẽn (AIMD, Slow Start, Congestion Avoidance, Fast Retransmit). Tài liệu: docs/guides/08-NETWORK-SOCKETS-HTTP-TCP.md.

**Nguồn tham khảo miễn phí:**

- [An Introduction to Computer Networks — Peter L. Dordal](https://intronetworks.cs.luc.edu/current/html/index.html)
  - **Phần cần đọc:** Các chương UDP Transport và TCP Transport; so reliability,ordering và message/byte stream.
  - **Truy cập:** Toàn bộ bản sách web miễn phí từ tác giả.
- [Offline Guide: Mạng mức thấp, Socket TCP & Định khung thông điệp HTTP/1.1](./docs/guides/08-NETWORK-SOCKETS-HTTP-TCP.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về lập trình mạng socket mức thấp và định khung TCP.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 202 · Độ trễ, băng thông và nghẽn

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Tách thời gian truyền, lan truyền, xử lý và xếp hàng. Viết công thức thời gian đẩy L bit lên liên kết tốc độ R là L/R và thời gian lan truyền theo khoảng cách/tốc độ tín hiệu.
- [ ] Tính thời gian tải tệp trong mô hình có giả thiết rõ. Giữ đơn vị bit/byte, ms/s rõ khi tính một ví dụ tải tệp.
- [ ] Phân biệt điều khiển luồng bảo vệ bên nhận với điều khiển nghẽn bảo vệ mạng. Xét nút thắt băng thông trên một đường nhiều liên kết thay vì cộng tốc độ các đường thành tốc độ tải.
- [ ] Quan sát độ trễ xếp hàng tăng khi tải gần hoặc vượt khả năng phục vụ.
- [ ] Ghi mô hình đã bỏ qua handshake, retransmission, TLS hoặc thiết lập kết nối nếu phép tính giản lược không chứa chúng.

**Nguồn tham khảo miễn phí:**

- [An Introduction to Computer Networks — Peter L. Dordal](https://intronetworks.cs.luc.edu/current/html/index.html)
  - **Phần cần đọc:** §1.2 Data Rate,Throughput and Bandwidth, chương 7 Packets và phần TCP congestion control.
  - **Truy cập:** Toàn bộ bản sách web miễn phí từ tác giả.

### 203 · HTTP request và response

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Dùng curl xem method, status, header và body. Gửi request cục bộ bằng curl, đọc request line, status code, Content-Type và body.
- [ ] So GET, POST, PUT, PATCH và DELETE theo ngữ nghĩa. So phản hồi thành công, 404, 401/403 và lỗi validation theo cách ứng dụng đang dùng.
- [ ] Phân biệt cookie, cache HTTP và kết nối TCP; không giả định một yêu cầu luôn tạo một kết nối mới. Phân biệt semantics an toàn/idempotent của method với việc lập trình viên có thể cài sai semantics.
- [ ] Quan sát header cache và cookie trong một ví dụ, không coi chúng là dữ liệu được TCP tự hiểu.
- [ ] Ghi HTTP là giao thức ứng dụng; phiên bản cụ thể có cơ chế truyền khác, không suy rằng tất cả luôn nằm trên TCP.

**Thông tin thêm & Lưu ý bản chất:**

Giao thức HTTP & Kiến trúc Web: Cấu trúc Request/Response (Request Line, Headers, Body), mã trạng thái (200 OK, 301/302 Redirect, 400 Bad Request, 401/403 Auth, 404 Not Found, 500 Internal Error). Message Framing trong HTTP qua Content-Length header hoặc Chunked Transfer Encoding. Tài liệu: docs/guides/08-NETWORK-SOCKETS-HTTP-TCP.md.

**Nguồn tham khảo miễn phí:**

- [MDN — Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
  - **Phần cần đọc:** Mục HTTP và Web security: request/response,HTTPS/TLS; bài quan sát gói tin thực hiện trên kết nối của mình.
  - **Truy cập:** Chỉ dùng bài viết và bài thực hành MDN miễn phí; không yêu cầu khóa đối tác hoặc MDN Plus.
- [Offline Guide: Mạng mức thấp, Socket TCP & Định khung thông điệp HTTP/1.1](./docs/guides/08-NETWORK-SOCKETS-HTTP-TCP.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về lập trình mạng socket mức thấp và định khung TCP.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 204 · TLS, HTTPS và chứng chỉ

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Theo dõi mục đích xác thực máy chủ, bảo mật và toàn vẹn. Phân biệt chứng chỉ xác thực tên máy chủ, quá trình thỏa thuận khóa và mã hóa dữ liệu ứng dụng.
- [ ] Xem thông tin chứng chỉ của một trang HTTPS hợp lệ. Xem tên miền trong chứng chỉ, thời gian hiệu lực và chuỗi tin cậy qua công cụ trình duyệt.
- [ ] Phân biệt HTTPS với bảo đảm nội dung trang luôn đáng tin; không bỏ kiểm tra chứng chỉ để chữa lỗi. Giải thích vì sao kẻ nghe đường truyền không đọc được body HTTPS bình thường nhưng vẫn có thể quan sát một số metadata.
- [ ] Khi kết nối lỗi chứng chỉ, kiểm tra tên, thời gian hệ thống và cấu hình trước, không tắt xác minh như cách sửa mặc định.
- [ ] Không đồng nhất khóa công khai dùng xác thực/trao đổi khóa với khóa đối xứng thường dùng cho phần dữ liệu truyền.

**Nguồn tham khảo miễn phí:**

- [MDN — Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
  - **Phần cần đọc:** Mục HTTP và Web security: request/response,HTTPS/TLS; bài quan sát gói tin thực hiện trên kết nối của mình.
  - **Truy cập:** Chỉ dùng bài viết và bài thực hành MDN miễn phí; không yêu cầu khóa đối tác hoặc MDN Plus.

### 205 · Quan sát gói tin của chính mình

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Dùng Wireshark hoặc công cụ học tập bắt lưu lượng tự tạo được phép. Chọn đúng interface và lưu lượng do mình chủ động tạo, đóng các ứng dụng riêng tư không cần thiết khi thực hành.
- [ ] Nhận ra DNS, TCP handshake và các trường HTTP khi không mã hóa. Dùng filter để theo một cuộc kết nối thay vì đọc tất cả gói trên màn hình.
- [ ] Với HTTPS, chỉ mô tả phần quan sát được; không thu lưu lượng riêng tư của người khác. Với một phiên TCP, đối chiếu thời gian, cờ và số thứ tự của các gói liên quan.
- [ ] Với HTTPS, ghi rõ trường nào nhìn thấy và phần nào đã mã hóa; không bịa nội dung body từ packet capture.
- [ ] Chỉ lưu mẫu đã loại thông tin nhạy cảm nếu đưa vào báo cáo hoặc repository.

**Nguồn tham khảo miễn phí:**

- [MDN — Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
  - **Phần cần đọc:** Mục HTTP và Web security: request/response,HTTPS/TLS; bài quan sát gói tin thực hiện trên kết nối của mình.
  - **Truy cập:** Chỉ dùng bài viết và bài thực hành MDN miễn phí; không yêu cầu khóa đối tác hoặc MDN Plus.

### 206 · Socket và đóng khung thông điệp

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Viết TCP echo client và server cục bộ bằng C++ trong môi trường phù hợp. Vòng đời chuẩn mực Socket API: Máy chủ thực thi socket() -> bind(port) -> listen() -> accept() -> recv()/send() -> close(); máy khách thực thi socket() -> connect() -> send()/recv() -> close().
- [ ] Xử lý đọc/ghi một phần và kết nối bị đóng. Bản chất cốt tử: TCP là dòng byte (byte stream) KHÔNG bảo toàn ranh giới thông điệp của tầng ứng dụng; một lệnh send() không tương ứng với một lệnh recv().
- [ ] Quy định thông điệp kết thúc bằng ký tự phân tách hoặc độ dài; không coi recv là một thông điệp hoàn chỉnh. Triệt tiêu lỗi dính gói (Packet Coalescing) và phân mảnh (Fragmentation) bằng kỹ thuật Định khung thông điệp (Message Framing): Phân tách bằng ký tự đặc biệt (Delimiter-based: \r\n\r\n) hoặc Gắn tiền tố độ dài (Length-prefix: uint32_t payload_length).
- [ ] Kiến trúc máy chủ mạng đa luồng: Dùng Thread Pool tiếp nhận các socket client từ accept() hoặc Non-blocking I/O để phục vụ đồng thời hàng nghìn kết nối.
- [ ] Đọc cẩm nang chuyên sâu socket và HTTP Server tại docs/guides/08-NETWORK-SOCKETS-HTTP-TCP.md.

**Thông tin thêm & Lưu ý bản chất:**

Lập trình Socket mạng mức thấp: Các hàm hệ thống socket(), bind(), listen(), accept(), connect(), send(), recv(), close(). Lưu ý cốt tử: TCP là giao thức byte stream, không bảo toàn ranh giới thông điệp -> bắt buộc tự cài đặt Message Framing (phân tách ký tự delimiter hoặc thêm header độ dài uint32_t payload_length) để tránh hiện tượng dính gói/phân mảnh gói tin (Packet Coalescing/Fragmentation). Gắn liền với Mini-Project 2: Multi-threaded Web Server. Tài liệu: docs/guides/08-NETWORK-SOCKETS-HTTP-TCP.md và docs/projects/02-MULTITHREADED-WEB-SERVER.md.

**Nguồn tham khảo miễn phí:**

- [An Introduction to Computer Networks — Peter L. Dordal](https://intronetworks.cs.luc.edu/current/html/index.html)
  - **Phần cần đọc:** Các chương UDP Transport và TCP Transport: socket examples,read/write và message framing.
  - **Truy cập:** Toàn bộ bản sách web miễn phí từ tác giả.
- [Offline Guide: Mạng mức thấp, Socket TCP & Định khung thông điệp HTTP/1.1](./docs/guides/08-NETWORK-SOCKETS-HTTP-TCP.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về lập trình mạng socket mức thấp và định khung TCP.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 207 · Dịch vụ tra cứu sách qua mạng

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Cho client gửi mã sách, server trả dữ liệu hoặc lỗi không tồn tại. Đặc tả các thông điệp tìm sách, tìm thấy, không có và sai yêu cầu trước khi viết hai phía.
- [ ] Giới hạn kích thước yêu cầu và xử lý yêu cầu sai định dạng. Tách parse/validate thông điệp khỏi tra cứu dữ liệu và mã socket.
- [ ] Thử nhiều client, ngắt giữa chừng và timeout; bảo vệ dữ liệu chung nếu dùng nhiều luồng. Chọn phục vụ tuần tự cho bản đầu, sau đó mới thêm nhiều client để không trộn lỗi giao thức với lỗi đồng thời.
- [ ] Khi nhiều client sửa dữ liệu, xác định vùng cần khóa và tránh giữ khóa trong thời gian chờ mạng dài.
- [ ] Có timeout hoặc giới hạn hợp lý cho kết nối không gửi đủ dữ liệu, không để một client chiếm tài nguyên vô hạn.
- [ ] Ghi ví dụ request/response và một ca client bị ngắt để người khác chạy lại.

**Nguồn tham khảo miễn phí:**

- [An Introduction to Computer Networks — Peter L. Dordal](https://intronetworks.cs.luc.edu/current/html/index.html)
  - **Phần cần đọc:** Các chương UDP Transport và TCP Transport: socket examples,read/write và message framing.
  - **Truy cập:** Toàn bộ bản sách web miễn phí từ tác giả.

### 208 · Chẩn đoán lỗi theo từng tầng

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Kiến trúc & Mạng Máy tính (`track-3`)

**Việc cần làm:**

- [ ] Tự tạo lỗi tên miền, cổng không có dịch vụ và HTTP 404 trên môi trường thử. Với mỗi lỗi tự tạo, ghi dấu hiệu cụ thể: DNS không ra địa chỉ, TCP bị từ chối hay HTTP trả lỗi có body.
- [ ] Chọn công cụ kiểm tra phù hợp từng tầng. Kiểm tra cấu hình địa chỉ/cổng và dịch vụ đang nghe trước khi nghi mọi lỗi do mạng.
- [ ] Ghi bằng chứng rồi mới sửa; phân biệt không kết nối được với ứng dụng trả lỗi. Dùng lệnh quan sát phù hợp hệ điều hành, đọc kết quả thay vì chỉ sao chép chuỗi lệnh chẩn đoán.
- [ ] Chọn thay đổi nhỏ đủ kiểm tra giả thuyết, giữ nguyên các phần còn lại để biết điều gì thực sự sửa lỗi.
- [ ] Viết lại một cây quyết định ngắn từ triệu chứng tới tầng cần kiểm tra cho project của mình.
- [ ] Tự chẩn đoán một lỗi DNS và một lỗi cổng dịch vụ trong môi trường của mình; ghi quan sát phân biệt hai lỗi, không chỉ chép một danh sách lệnh.

**Nguồn tham khảo miễn phí:**

- [An Introduction to Computer Networks — Peter L. Dordal](https://intronetworks.cs.luc.edu/current/html/index.html)
  - **Phần cần đọc:** §1.14 Some Useful Utilities và phần ICMP; làm thí nghiệm DNS/port nhỏ theo nhiệm vụ.
  - **Truy cập:** Toàn bộ bản sách web miễn phí từ tác giả.

# Track 4: Cơ sở Toán học cho Khoa học Máy tính (Mathematical Foundations)

> **Mục tiêu:** Tối ưu hóa điểm số môn Toán rời rạc & tổ hợp (MTH00040) và Xác suất Thống kê cho CNTT (MTH00041) HK1 Năm 2: Logic mệnh đề & vị từ, chứng minh quy nạp, hệ thức truy hồi, hàm sinh (Generating Functions), nguyên lý Dirichlet, Định lý Bayes, biến ngẫu nhiên và phân phối (Bernoulli, Poisson, Gaussian Normal), Định lý Giới hạn Trung tâm (CLT), MLE và kiểm định giả thuyết.
> **Môn học HCMUS:** Toán rời rạc & tổ hợp (MTH00040) · Xác suất thống kê cho CNTT (MTH00041) · Đại số tuyến tính (MTH00030) | **Thời lượng ước tính:** ~80 giờ

## 06. Toán rời rạc cho lập trình

### 055 · Mệnh đề và phép suy luận

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Lập bảng chân trị cho AND, OR, NOT và kéo theo. Logic toán học cho KHMT: Bảng chân trị, các luật De Morgan, kéo theo p→q tương đương ¬p v q, mệnh đề đảo và phản đảo ¬q→¬p.
- [ ] Phân biệt mệnh đề đảo, phản đảo và tương đương. Logic vị từ với lượng từ với mọi và tồn tại; dịch điều kiện kiểm tra dữ liệu thành biểu thức logic rồi tìm phản ví dụ.
- [ ] Biến một điều kiện kiểm tra dữ liệu thành biểu thức logic rồi thử phản ví dụ. Kỹ thuật chứng minh: chứng minh trực tiếp, chứng minh bằng phản đảo, và chứng minh bằng phản chứng (giả sử điều ngược lại rồi suy ra mâu thuẫn).

**Thông tin thêm & Lưu ý bản chất:**

Logic toán học cho KHMT: Bảng chân trị, các luật De Morgan, luật kéo theo (p -> q tương đương ~p v q), mệnh đề phản đảo (~q -> ~p). Logic vị từ với lượng từ với mọi và tồn tại. Kỹ thuật chứng minh: chứng minh trực tiếp, phản đảo, phản chứng, và nguyên lý cực hạn.

**Nguồn tham khảo miễn phí:**

- [Mathematics for Computer Science — MIT 6.042J, 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/)
  - **Phần cần đọc:** Trong giáo trình MIT 2015: các phần Propositions,Predicate Formulas và Quantifiers; làm bài phủ định và phản ví dụ.
  - **Truy cập:** Toàn bộ giáo trình PDF được MIT cung cấp miễn phí, cùng các chương lẻ.

### 056 · Lượng từ và phủ định

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Viết phát biểu mọi phần tử dương và có ít nhất một phần tử dương bằng lượng từ. Chỉ rõ miền đang xét như số nguyên hay phần tử một vector; cùng một phát biểu có thể đổi đúng sai khi đổi miền.
- [ ] Phủ định đúng hai phát biểu trên. Phủ định từng lượng từ rồi phủ định mệnh đề bên trong, không chỉ thêm chữ không ở đầu câu.
- [ ] Tìm ví dụ cho thấy đổi thứ tự với mọi và tồn tại có thể đổi ý nghĩa. Dùng ví dụ với mọi x tồn tại y>x và tồn tại y lớn hơn mọi x trên số nguyên để kiểm tra thứ tự lượng từ.
- [ ] Dịch phát biểu qua vòng lặp có điều kiện dừng sớm để nối cách viết toán với kiểm tra trong chương trình.

**Nguồn tham khảo miễn phí:**

- [Mathematics for Computer Science — MIT 6.042J, 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/)
  - **Phần cần đọc:** Trong giáo trình MIT 2015: các phần Propositions,Predicate Formulas và Quantifiers; làm bài phủ định và phản ví dụ.
  - **Truy cập:** Toàn bộ giáo trình PDF được MIT cung cấp miễn phí, cùng các chương lẻ.

### 057 · Tập hợp, hàm và quan hệ

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Làm bài hợp, giao, hiệu và tích Descartes trên tập hữu hạn. Với mỗi phép tập hợp, vẽ hoặc liệt kê kết quả trên hai tập nhỏ có phần giao và một tập rỗng.
- [ ] Phân biệt đơn ánh, toàn ánh và song ánh bằng ví dụ. Khi xét hàm, chỉ rõ miền xác định và miền đích trước khi kết luận đơn ánh/toàn ánh.
- [ ] Nhận diện quan hệ tương đương và thứ tự bộ phận trong bài toán nhóm dữ liệu. Kiểm tra quan hệ bằng từng tính chất: phản xạ, đối xứng, bắc cầu; nêu cặp phần tử làm tính chất thất bại.
- [ ] Dùng quan hệ cùng số dư để lập lớp tương đương, và quan hệ phụ thuộc công việc để hình dung thứ tự bộ phận.

**Nguồn tham khảo miễn phí:**

- [Mathematics for Computer Science — MIT 6.042J, 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/)
  - **Phần cần đọc:** Phần Mathematical Data Types: sets,sequences,functions và relations.
  - **Truy cập:** Toàn bộ giáo trình PDF được MIT cung cấp miễn phí, cùng các chương lẻ.

### 058 · Chứng minh và phản ví dụ

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Viết một chứng minh trực tiếp và một chứng minh phản chứng ngắn. Tách dữ kiện được phép dùng khỏi điều đang cần chứng minh; viết các bước suy ra có lý do.
- [ ] Bác bỏ một mệnh đề sai bằng phản ví dụ nhỏ nhất tìm được. Với phản chứng, bắt đầu từ phủ định đúng của kết luận rồi chỉ ra mâu thuẫn cụ thể với giả thiết hoặc định lý đã biết.
- [ ] Ghi giả thiết trước mỗi lập luận; không coi thử nhiều ví dụ là chứng minh. Khi mệnh đề sai, tìm đầu vào nhỏ và kiểm tra nó thỏa giả thiết nhưng không thỏa kết luận.
- [ ] Đọc lại để loại lập luận vòng tròn như dùng chính kết quả cần chứng minh làm một bước trung gian.

**Nguồn tham khảo miễn phí:**

- [Mathematics for Computer Science — MIT 6.042J, 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/)
  - **Phần cần đọc:** Phần Proofs: direct proof,contrapositive,contradiction; chọn bài có lời giải để đối chiếu sau khi tự viết.
  - **Truy cập:** Toàn bộ giáo trình PDF được MIT cung cấp miễn phí, cùng các chương lẻ.

### 059 · Quy nạp toán học

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Chứng minh tổng các số từ 1 đến n bằng quy nạp. Quy nạp toán học 3 bước chuẩn mực: Bước cơ sở (Base case tại n=0 hoặc n=1), Giả thiết quy nạp (Inductive Hypothesis giả sử đúng với n=k), và Bước chuyển quy nạp (Inductive Step chứng minh đúng với n=k+1).
- [ ] Viết rõ cơ sở, giả thiết và bước chuyển. Phân biệt Quy nạp toán học thông thường với Quy nạp mạnh (Strong Induction): được phép sử dụng giả thiết đúng cho toàn bộ các giá trị từ 1 đến k.
- [ ] Áp dụng quy nạp mạnh để chứng minh một tính chất của cách phân rã số nguyên. Áp dụng quy nạp cấu trúc để chứng minh tính chất bất biến trên Cây nhị phân và đồ thị có hướng không chu trình (DAG).
- [ ] Nối trực tiếp chứng minh quy nạp với tính đúng của các hàm đệ quy và giải thuật chia để trị.

**Thông tin thêm & Lưu ý bản chất:**

Quy nạp toán học 3 bước chuẩn mực: Bước cơ sở (Base case), Giả thiết quy nạp (Inductive hypothesis), và Bước quy nạp (Inductive step). Áp dụng quy nạp mạnh và quy nạp cấu trúc để chứng minh tính đúng của thuật toán (Algorithm Correctness) và bất biến vòng lặp (Loop Invariants).

**Nguồn tham khảo miễn phí:**

- [Mathematics for Computer Science — MIT 6.042J, 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/)
  - **Phần cần đọc:** Phần Induction: simple/strong induction; làm cả cơ sở và bước quy nạp.
  - **Truy cập:** Toàn bộ giáo trình PDF được MIT cung cấp miễn phí, cùng các chương lẻ.

### 060 · Bất biến vòng lặp

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Xác định điều luôn đúng trước mỗi vòng của thuật toán tìm max. Bất biến vòng lặp (Loop Invariants): Công cụ chứng minh tính đúng của thuật toán qua 3 tính chất bắt buộc.
- [ ] Kiểm tra khởi đầu, bảo toàn và kết thúc. 1. Khởi đầu (Initialization): Bất biến luôn đúng trước khi vòng lặp bắt đầu lượt đầu tiên.
- [ ] Viết bất biến cho thao tác chèn vào đoạn đã sắp xếp; nối nó với tính đúng thuật toán. 2. Bảo toàn (Maintenance): Nếu bất biến đúng trước một vòng lặp, nó tiếp tục đúng trước vòng lặp kế tiếp.
- [ ] 3. Kết thúc (Termination): Khi vòng lặp dừng, bất biến cung cấp tính chất hữu ích để chứng minh kết quả thuật toán hoàn toàn chính xác.

**Nguồn tham khảo miễn phí:**

- [Mathematics for Computer Science — MIT 6.042J, 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/)
  - **Phần cần đọc:** Phần State Machines: invariant và termination; áp dụng cho vòng lặp đang viết.
  - **Truy cập:** Toàn bộ giáo trình PDF được MIT cung cấp miễn phí, cùng các chương lẻ.

### 061 · Quy tắc đếm và tổ hợp

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Phân biệt quy tắc cộng, nhân, hoán vị, chỉnh hợp và tổ hợp. Trước khi chọn công thức, xác định chọn bao nhiêu đối tượng, có lặp và có xét thứ tự hay không.
- [ ] Đếm số chuỗi và số cách chọn nhóm khi có hoặc không xét thứ tự. Dùng n nhỏ để liệt kê rồi so các cách đếm, chẳng hạn chọn 2 người từ 4 người khác với xếp 2 ghế.
- [ ] Đối chiếu kết quả bằng liệt kê với tập nhỏ. Khi chia cho số hoán vị, giải thích mỗi kết quả đã bị đếm lại đúng bao nhiêu lần.
- [ ] Đặt thêm điều kiện như ít nhất một người thuộc nhóm A, thử cách đếm trực tiếp và đếm bù.

**Nguồn tham khảo miễn phí:**

- [Mathematics for Computer Science — MIT 6.042J, 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/)
  - **Phần cần đọc:** Phần Counting: bijection,product/sum rules,pigeonhole và inclusion–exclusion.
  - **Truy cập:** Toàn bộ giáo trình PDF được MIT cung cấp miễn phí, cùng các chương lẻ.

### 062 · Nguyên lý bồ câu và bao hàm loại trừ

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Chứng minh một bài trùng số dư bằng nguyên lý bồ câu. Nguyên lý Bồ câu (Pigeonhole Principle - Dirichlet): Dạng cơ bản (n+1 bồ câu vào n chuồng -> tồn tại chuồng chứa ít nhất 2 bồ câu) và dạng tổng quát ceil(N/k).
- [ ] Đếm hợp của hai rồi ba tập có phần giao. Ứng dụng nguyên lý Dirichlet chứng minh sự trùng lặp số dư modulo, sự va chạm trong hàm băm (Hash Collision) và sự tồn tại dãy con đơn điệu (Định lý Erdős–Szekeres).
- [ ] Tự tạo ví dụ cho thấy cộng số lượng từng tập sẽ đếm trùng. Nguyên lý Bao hàm - Loại trừ (Inclusion-Exclusion Principle): Đếm hợp của hai, ba và nhiều tập hợp có phần giao nhau.
- [ ] Kiểm tra bằng tập hữu hạn cụ thể để đối chiếu trực tiếp giữa công thức giải tích và phép đếm liệt kê độc lập.

**Thông tin thêm & Lưu ý bản chất:**

Nguyên lý Bồ câu (Pigeonhole Principle - Dirichlet): Dạng cơ bản (n+1 bồ câu vào n chuồng) và dạng tổng quát ceil(N/k). Ứng dụng chứng minh sự trùng lặp số dư modulo, sự va chạm trong hàm băm (Hash Collision). Nguyên lý Bao hàm - Loại trừ (Inclusion-Exclusion Principle).

**Nguồn tham khảo miễn phí:**

- [Mathematics for Computer Science — MIT 6.042J, 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/)
  - **Phần cần đọc:** Phần Counting: bijection,product/sum rules,pigeonhole và inclusion–exclusion.
  - **Truy cập:** Toàn bộ giáo trình PDF được MIT cung cấp miễn phí, cùng các chương lẻ.

### 063 · Chia hết, UCLN và số học modulo

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Tự cài Euclid và giải thích vì sao số dư giảm. Trong Euclid, dùng tính chất gcd(a,b)=gcd(b,a mod b), xử lý trường hợp một số bằng 0 và quy ước dấu.
- [ ] Học cộng, nhân, lũy thừa modulo; xét tràn khi nhân. Với phép toán modulo, chuẩn hóa kết quả âm theo quy ước đang dùng trong mã.
- [ ] Phân biệt phép chia thông thường với nghịch đảo modulo và điều kiện tồn tại. Tính lũy thừa bằng bình phương liên tiếp, giảm modulo ở từng bước; xét kiểu số đủ lớn cho phép nhân trung gian.
- [ ] Kiểm tra gcd(a,m)=1 trước khi tìm nghịch đảo; không thay phép chia bằng chia hai số dư thông thường.

**Nguồn tham khảo miễn phí:**

- [Mathematics for Computer Science — MIT 6.042J, 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/)
  - **Phần cần đọc:** Phần Number Theory: divisibility,GCD và modular arithmetic.
  - **Truy cập:** Toàn bộ giáo trình PDF được MIT cung cấp miễn phí, cùng các chương lẻ.

### 064 · Tổng và truy hồi

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Tính tổng cấp số cộng, cấp số nhân và tổng log đơn giản. Hệ thức truy hồi và Phân tích độ phức tạp: Vẽ cây đệ quy (Recursion Tree) xác định số lượng nút ở mỗi tầng, chi phí tại mỗi nút và chiều cao của cây.
- [ ] Vẽ cây truy hồi cho T(n)=2T(n/2)+n ở kích thước là lũy thừa của 2. Nắm chắc Định lý Thợ (Master Theorem) giải các phương trình truy hồi dạng T(N) = aT(N/b) + O(N^d) cho thuật toán chia để trị (như Merge Sort: T(N) = 2T(N/2) + O(N) -> O(N log N)).
- [ ] So sánh với đếm thao tác thực tế; ghi điều kiện khi dùng một công thức truy hồi. Phân biệt 3 trường hợp của Master Theorem dựa trên sự so sánh giữa a và b^d.
- [ ] Phương pháp thế (Substitution Method) và chứng minh bằng quy nạp để chốt chặn trên chặt chẽ (Tight Upper Bound).

**Thông tin thêm & Lưu ý bản chất:**

Hệ thức truy hồi & Phân tích thuật toán: Định lý Thợ (Master Theorem) T(N) = aT(N/b) + O(N^d) giải các phương trình truy hồi chia để trị. Phương pháp cây đệ quy (Recursion Tree) và phương pháp thế (Substitution Method).

**Nguồn tham khảo miễn phí:**

- [Mathematics for Computer Science — MIT 6.042J, 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/)
  - **Phần cần đọc:** Phần Sums and Asymptotics,Recurrences; chưa cần giải mọi dạng truy hồi.
  - **Truy cập:** Toàn bộ giáo trình PDF được MIT cung cấp miễn phí, cùng các chương lẻ.

### 065 · Ngôn ngữ của cây và đồ thị

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Phân biệt đỉnh, cạnh, đường đi, chu trình, liên thông và bậc. Tự vẽ một đồ thị có đỉnh cô lập, một chu trình và nhiều thành phần, gắn tên từng đối tượng.
- [ ] Phân biệt đồ thị có hướng, vô hướng, có trọng số. Phân biệt đường đi đơn không lặp đỉnh với chu trình quay về điểm đầu theo quy ước đang học.
- [ ] Chứng minh cây n đỉnh có n−1 cạnh bằng một cách phù hợp. Kiểm tra tổng bậc trong đồ thị vô hướng bằng hai lần số cạnh, xử lý cạnh tự khuyên nếu cho phép.
- [ ] Với tính chất cây, nêu rõ vô hướng và liên thông; n−1 cạnh riêng lẻ chưa đủ nếu thiếu điều kiện thích hợp.

**Nguồn tham khảo miễn phí:**

- [Mathematics for Computer Science — MIT 6.042J, 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/)
  - **Phần cần đọc:** Phần Directed Graphs,Simple Graphs và Trees: ngôn ngữ nền, chưa cần toàn bộ định lý nâng cao.
  - **Truy cập:** Toàn bộ giáo trình PDF được MIT cung cấp miễn phí, cùng các chương lẻ.

### 066 · Giải bài toán rời rạc có lập luận

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Chọn một bài logic, một bài đếm và một bài quy nạp trong bộ bài tập MIT. Chọn bài có đáp án để đối chiếu nhưng che lời giải trong lượt đầu; viết đầy đủ miền và giả thiết.
- [ ] Tự giải trước khi xem đáp án, ghi điểm còn thiếu trong lập luận. Sau khi xem đáp án, chỉ ra bước mình thiếu hoặc dùng sai chứ không chép lại toàn bộ.
- [ ] Sửa lời giải để người khác kiểm tra được từng bước. Làm một biến thể đổi điều kiện để kiểm tra kỹ thuật còn dùng được hay không.
- [ ] Giữ một lời giải đã sửa ở dạng người khác đọc có thể kiểm chứng mà không cần nghe giải thích miệng.
- [ ] Viết trọn một chứng minh quy nạp chưa xem mẫu, nêu mệnh đề và bước quy nạp; nhờ người khác hoặc ChatGPT tìm bước suy ra thiếu căn cứ rồi tự sửa.

**Nguồn tham khảo miễn phí:**

- [Mathematics for Computer Science — MIT 6.042J, 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/)
  - **Phần cần đọc:** Phần Proofs: direct proof,contrapositive,contradiction; chọn bài có lời giải để đối chiếu sau khi tự viết.
  - **Truy cập:** Toàn bộ giáo trình PDF được MIT cung cấp miễn phí, cùng các chương lẻ.

## 11. Đại số tuyến tính, giải tích và xác suất

### 149 · Tự kiểm tra nền toán trước khi học tiếp

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Làm các mục sau trước khi mở lời giải cũ. Ghi từng mục: tự làm được / cần gợi ý / chưa học; không cộng thành điểm đoán mức giỏi chung.
- [ ] Giải hệ hai phương trình hai ẩn và kiểm tra bằng thế lại; không nhớ cách khử thì ghi đúng bước bị mắc.
- [ ] Tính đạo hàm (2x+1)² và giải thích quy tắc đã dùng.
- [ ] Với hai lần tung đồng xu độc lập, liệt kê không gian mẫu và tính xác suất đúng một lần ngửa.
- [ ] Sau khi thử, chỉ ôn lại mục chưa tự làm được theo các liên kết bên dưới. Chưa học là điểm bắt đầu bình thường; không tự đánh dấu cả chặng hoàn thành và không cần làm lại toàn bộ kho 28tech.

**Ô cần ôn theo kết quả kiểm tra:**

- [ ] 150 · Vector và hệ phương trình tuyến tính (`linear-vectors`)
- [ ] 157 · Đạo hàm và quy tắc dây chuyền (`calculus-derivative`)
- [ ] 161 · Không gian mẫu và xác suất (`prob-events`)

**Thông tin thêm & Lưu ý bản chất:**

Bài tự kiểm tra để chọn điểm ôn, không có chấm tự động. Code cũ chỉ mở sau lượt thử; khi đã tự làm được một mục, vẫn kiểm tra bằng ca biên hoặc biến thể trước khi đi nhanh qua phần tương ứng.

### 150 · Vector và hệ phương trình tuyến tính

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Biểu diễn một hệ phương trình thành Ax=b. Chốt kích thước A là m×n, x có n thành phần và b có m thành phần trước khi nhân.
- [ ] Tính tổng vector, nhân vô hướng và giải hệ nhỏ bằng khử Gauss. Khử Gauss bằng các phép biến đổi hàng bảo toàn tập nghiệm, ghi từng bước trên hệ 2–3 ẩn.
- [ ] Vẽ hai phương trình hai ẩn để phân biệt vô nghiệm, một nghiệm và vô số nghiệm. Dùng hàng toàn 0 và hàng dạng 0=c với c khác 0 để nhận diện bậc tự do hoặc mâu thuẫn.
- [ ] Thay nghiệm tìm được trở lại từng phương trình, không chỉ đọc kết quả từ hàng cuối.
- [ ] Phân biệt giải hệ số thực chính xác trên giấy với tính số gần đúng trong chương trình.

**Nguồn tham khảo miễn phí:**

- [MIT 18.06 — Linear Algebra, Spring 2010](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - **Phần cần đọc:** Lecture 1 The Geometry of Linear Equations và Lecture 2 Elimination with Matrices.
  - **Truy cập:** Dùng video, ghi chú và bài tập OCW miễn phí; không cần mua sách giáo trình của khóa.

### 151 · Không gian vector, cơ sở và hạng

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Phân biệt độc lập tuyến tính với hai vector chỉ khác hệ số. Kiểm tra một tập có đóng với cộng và nhân vô hướng hay không trước khi gọi nó là không gian con.
- [ ] Tìm cơ sở và số chiều của không gian sinh bởi một bộ vector nhỏ. Viết quan hệ tuyến tính của các vector và tìm hệ số, dùng trường hợp chỉ nghiệm 0 để xét độc lập.
- [ ] Liên hệ hạng, số ẩn tự do và nghiệm của hệ tuyến tính. Dùng các cột chốt sau khử Gauss để tìm cơ sở không gian cột của ma trận gốc.
- [ ] So số chiều không gian nghiệm và hạng theo số cột, kiểm tra trên ma trận vuông lẫn chữ nhật.
- [ ] Phân biệt một cơ sở với danh sách mọi vector có thể sinh ra từ cơ sở đó.

**Nguồn tham khảo miễn phí:**

- [MIT 18.06 — Linear Algebra, Spring 2010](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - **Phần cần đọc:** Các bài Vector Spaces and Subspaces,Column Space and Nullspace,Independence,Basis and Dimension.
  - **Truy cập:** Dùng video, ghi chú và bài tập OCW miễn phí; không cần mua sách giáo trình của khóa.

### 152 · Ma trận là một phép biến đổi

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Viết nhân ma trận và vector bằng C++ trên kích thước nhỏ. Xem các cột của ma trận là ảnh của các vector cơ sở, dùng chúng để dự đoán hình biến đổi.
- [ ] Dùng ma trận 2×2 để quay hoặc kéo giãn các điểm. Viết điều kiện số cột bên trái bằng số hàng bên phải trong phép nhân ma trận.
- [ ] Thử hai thứ tự nhân khác nhau; giải thích vì sao AB không nhất thiết bằng BA. Thử quay rồi co giãn so với co giãn rồi quay một điểm không nằm trên trục đặc biệt.
- [ ] Kiểm tra biến đổi tuyến tính giữ vector 0; tịnh tiến cần cách biểu diễn khác như tọa độ thuần nhất ở phần đồ họa.
- [ ] Đối chiếu cài đặt vòng lặp với kết quả tính tay cho ma trận 2×2 không đối xứng.

**Nguồn tham khảo miễn phí:**

- [MIT 18.06 — Linear Algebra, Spring 2010](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - **Phần cần đọc:** Các bài Matrix Multiplication và Linear Transformations and Their Matrices.
  - **Truy cập:** Dùng video, ghi chú và bài tập OCW miễn phí; không cần mua sách giáo trình của khóa.

### 153 · Trực giao và bình phương tối thiểu

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Tính tích vô hướng, độ dài và phép chiếu lên một hướng. Tính phép chiếu bằng tích vô hướng và kiểm tra phần dư vuông góc với hướng chiếu.
- [ ] Khớp một đường thẳng cho vài điểm bằng bình phương tối thiểu. Với dữ liệu x,y nhỏ, lập ma trận có cột hằng số và cột x để khớp y≈a+bx.
- [ ] Phân biệt nghiệm chính xác với nghiệm làm tổng bình phương sai số nhỏ nhất. Giải thích điều kiện bình phương tối thiểu tìm phần dư nhỏ, không bắt mọi điểm phải nằm trên đường.
- [ ] Kiểm tra điều kiện khả nghịch nếu dùng phương trình chuẩn; biết thư viện số thường dùng phân rã như QR/SVD thay vì tự đảo ma trận một cách mù quáng.
- [ ] Vẽ điểm dữ liệu và phần dư để đọc ý nghĩa nghiệm, không chỉ báo hai hệ số.

**Nguồn tham khảo miễn phí:**

- [MIT 18.06 — Linear Algebra, Spring 2010](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - **Phần cần đọc:** Các bài Orthogonal Vectors and Subspaces,Projections onto Subspaces và Least Squares Approximations.
  - **Truy cập:** Dùng video, ghi chú và bài tập OCW miễn phí; không cần mua sách giáo trình của khóa.

### 154 · Trị riêng và vector riêng

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Dùng ma trận đối xứng 2×2, tìm nghiệm của det(A−λI)=0 rồi tìm vector v khác 0 thỏa Av=λv.
- [ ] Tính Av cho một vector riêng và một vector không phải vector riêng; vẽ để phân biệt hướng chỉ co giãn với hướng bị đổi.
- [ ] Thay từng cặp λ,v vào phương trình để kiểm tra; phân biệt bội đại số với số vector riêng độc lập khi gặp trị riêng lặp.
- [ ] Giải thích vai trò của các hướng riêng trong phép biến đổi và vì sao không phải mọi ma trận đều chéo hóa được.
- [ ] Tự giải một ma trận 2×2 mới rồi kiểm tra bằng phép nhân, không chỉ nhìn đáp án của thư viện.

**Nguồn tham khảo miễn phí:**

- [MIT 18.06 — Linear Algebra, Spring 2010](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - **Phần cần đọc:** Các bài Eigenvalues and Eigenvectors,Diagonalization và Symmetric Matrices.
  - **Truy cập:** Dùng video, ghi chú và bài tập OCW miễn phí; không cần mua sách giáo trình của khóa.

### 155 · SVD và xấp xỉ hạng thấp

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Ôn chuyển vị, trực giao, hạng và trị riêng trước khi đọc A=UΣVᵀ; ghi kích thước của ba ma trận trong dạng đầy đủ và dạng rút gọn.
- [ ] Dùng ma trận chữ nhật 3×2 để phân biệt SVD với phân rã trị riêng của ma trận vuông; kiểm tra phép nhân có đúng kích thước.
- [ ] Trên ma trận có sẵn phân rã, giữ một singular value lớn nhất rồi tính lại xấp xỉ hạng 1; so sai số với bản giữ cả hai.
- [ ] Giải thích việc bỏ hướng ít đóng góp làm giảm bộ nhớ nhưng mất thông tin; liên hệ PCA ở mức ý tưởng.
- [ ] Không cần tự viết bộ giải SVD số; dùng thư viện sau khi học NumPy nếu muốn kiểm tra trên dữ liệu lớn hơn.

**Khi nào quay lại:** Đào sâu đại số tuyến tính, ML và tính toán số. PCA nhập môn phía sau có thể học từ phép chiếu và vector riêng.

**Nguồn tham khảo miễn phí:**

- [MIT 18.06 — Linear Algebra, Spring 2010](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - **Phần cần đọc:** Bài Singular Value Decomposition; ôn orthogonality và eigenvalues trước, không cần cả khóa ngay trong ô này.
  - **Truy cập:** Dùng video, ghi chú và bài tập OCW miễn phí; không cần mua sách giáo trình của khóa.

### 156 · Hàm số, giới hạn và liên tục

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Ôn hàm mũ, logarit và lượng giác cần cho giải tích. Vẽ miền xác định trước khi tính, tránh lấy log số không dương hoặc chia cho 0 mà không nhận ra.
- [ ] Phân biệt giá trị hàm tại điểm với giới hạn tại điểm đó. Tính giới hạn trái/phải của một hàm từng đoạn và so với giá trị được gán tại điểm.
- [ ] Làm bài giới hạn và xét liên tục cho một hàm từng đoạn. Phân biệt một điểm bị khuyết có thể bù để liên tục với giới hạn hai phía không tồn tại.
- [ ] Dùng biến đổi đại số để giải vài giới hạn dạng vô định; không thay giá trị trực tiếp rồi coi 0/0 là kết quả.
- [ ] Ôn ý nghĩa log là hàm ngược của mũ, quy tắc log để phục vụ thuật toán và đạo hàm sau đó.

**Nguồn tham khảo miễn phí:**

- [OpenStax — Calculus Volume 1](https://openstax.org/details/books/calculus-volume-1)
  - **Phần cần đọc:** Chương 1 Functions and Graphs và 2 Limits: chỉ ôn hàm,giới hạn và liên tục cần cho đạo hàm.
  - **Truy cập:** Toàn bộ sách web/PDF và bài tập trong sách miễn phí; chọn bản đọc, không mua bản in.

### 157 · Đạo hàm và quy tắc dây chuyền

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Giải thích đạo hàm là tốc độ thay đổi cục bộ. Từ tỉ số chênh lệch với h nhỏ, nối tới định nghĩa đạo hàm tại điểm và đơn vị tốc độ thay đổi.
- [ ] Tính đạo hàm đa thức, mũ, log và hàm hợp. Tách quy tắc tổng, tích, thương rồi quy tắc hàm hợp, làm ví dụ cần hơn một quy tắc.
- [ ] Đối chiếu đạo hàm giải tích với sai phân hữu hạn tại vài điểm không có vấn đề miền xác định. Thử một điểm hàm có góc như |x| tại 0 để thấy không phải nơi nào cũng có đạo hàm.
- [ ] Với sai phân hữu hạn, thay nhiều h để thấy h quá nhỏ cũng có thể tăng lỗi làm tròn.
- [ ] Không dùng kiểm tra gần đúng vài điểm làm chứng minh công thức đúng với mọi x.

**Nguồn tham khảo miễn phí:**

- [OpenStax — Calculus Volume 1](https://openstax.org/details/books/calculus-volume-1)
  - **Phần cần đọc:** Chương 3 Derivatives: định nghĩa,quy tắc đạo hàm và chain rule.
  - **Truy cập:** Toàn bộ sách web/PDF và bài tập trong sách miễn phí; chọn bản đọc, không mua bản in.

### 158 · Tích phân và tổng tích lũy

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Liên hệ tổng Riemann với diện tích có dấu. Chọn ví dụ hàm có phần nằm dưới trục để phân biệt diện tích hình học với tích phân có dấu.
- [ ] Tính tích phân cơ bản, dùng định lý cơ bản của giải tích đúng điều kiện. Tính một tổng chữ nhật và quy tắc hình thang trên cùng khoảng, ghi độ rộng bước.
- [ ] Xấp xỉ tích phân bằng chương trình C++ và khảo sát sai số khi tăng số đoạn. Dùng nguyên hàm khi đủ điều kiện rồi so với kết quả xấp xỉ số.
- [ ] Thử tăng gấp đôi số đoạn, quan sát sai số so nghiệm đã biết thay vì chỉ nhìn các số gần nhau.
- [ ] Ghi điều kiện hàm và khoảng xét; không dùng công thức qua điểm kỳ dị mà chưa kiểm tra tính tồn tại tích phân.

**Nguồn tham khảo miễn phí:**

- [OpenStax — Calculus Volume 1](https://openstax.org/details/books/calculus-volume-1)
  - **Phần cần đọc:** Chương 5 Integration: Riemann sums,definite integrals và Fundamental Theorem of Calculus.
  - **Truy cập:** Toàn bộ sách web/PDF và bài tập trong sách miễn phí; chọn bản đọc, không mua bản in.

### 159 · Đạo hàm riêng và gradient

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Tính gradient của một hàm hai biến. Với f(x,y), tính đạo hàm theo x khi giữ y cố định và ngược lại.
- [ ] Dùng quy tắc dây chuyền cho hàm nhiều lớp đơn giản. Dùng f(x,y)=x²+2y² để tính gradient tại một điểm cụ thể rồi kiểm tra bằng sai phân.
- [ ] Vẽ vài đường đồng mức và giải thích hướng tăng nhanh nhất tại một điểm. Phân biệt gradient là vector đạo hàm riêng với đạo hàm theo một hướng, cần chú ý chuẩn hóa hướng.
- [ ] Áp dụng quy tắc dây chuyền qua một biểu thức trung gian, ghi phụ thuộc của từng biến.
- [ ] So dấu và độ lớn từng thành phần với thay đổi giá trị hàm khi dịch một bước nhỏ.

**Nguồn tham khảo miễn phí:**

- [OpenStax — Calculus Volume 3](https://openstax.org/details/books/calculus-volume-3)
  - **Phần cần đọc:** Chương 4 Differentiation of Functions of Several Variables: partial derivatives,chain rule,gradient; phần thuật toán gradient descent thực hiện theo nhiệm vụ, không cần đọc toàn bộ tối ưu nâng cao.
  - **Truy cập:** Toàn bộ sách web/PDF miễn phí; chỉ đọc phần được chỉ định.

### 160 · Gradient descent trên hàm nhỏ

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Tự cài tìm cực tiểu hàm bậc hai bằng gradient descent. Viết vòng cập nhật x mới = x cũ − bước_học × gradient, theo dõi giá trị hàm và độ lớn gradient.
- [ ] Thử bước học nhỏ, vừa và quá lớn; ghi diễn biến giá trị hàm. Đặt điều kiện dừng gồm số vòng tối đa và mức cải thiện hoặc gradient, tránh vòng lặp không giới hạn.
- [ ] Phân biệt điểm dừng với cực tiểu toàn cục trong trường hợp tổng quát. Thử nhiều điểm khởi tạo, giữ cùng cách đo khi so các bước học.
- [ ] Trên hàm bậc hai lồi, so nghiệm với nghiệm tính tay; trên hàm không lồi, phân biệt việc thuật toán dừng với chứng minh tối ưu toàn cục.
- [ ] Kiểm tra dữ liệu NaN/Inf nếu bước học quá lớn, không tiếp tục in kết quả như thể bình thường.

**Nguồn tham khảo miễn phí:**

- [OpenStax — Calculus Volume 3](https://openstax.org/details/books/calculus-volume-3)
  - **Phần cần đọc:** Chương 4 Differentiation of Functions of Several Variables: partial derivatives,chain rule,gradient; phần thuật toán gradient descent thực hiện theo nhiệm vụ, không cần đọc toàn bộ tối ưu nâng cao.
  - **Truy cập:** Toàn bộ sách web/PDF miễn phí; chỉ đọc phần được chỉ định.

### 161 · Không gian mẫu và xác suất

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Liệt kê không gian mẫu của hai lần tung xúc xắc. Mỗi phần tử không gian mẫu phải mô tả một kết quả đủ chi tiết, chẳng hạn cặp hai mặt xúc xắc có thứ tự.
- [ ] Tính hợp, giao, xác suất có điều kiện và phân biệt độc lập với xung khắc. Chỉ dùng số kết quả thuận lợi chia tổng số khi các kết quả đang đếm thực sự đồng khả năng.
- [ ] Kiểm tra kết quả bằng đếm trực tiếp khi các kết quả đồng khả năng. Với xác suất có điều kiện, thu miền xét về biến cố điều kiện có xác suất dương.
- [ ] Dùng ví dụ hai biến cố có giao để phân biệt độc lập với loại trừ nhau; kiểm tra theo công thức thay vì cảm giác.
- [ ] Đối chiếu xác suất luôn trong [0,1] và các trường hợp biến cố chắc chắn/bất khả.

**Nguồn tham khảo miễn phí:**

- [OpenIntro Statistics, 4th edition](https://www.openintro.org/book/os/)
  - **Phần cần đọc:** Chương 3 Probability: sample space,conditional probability,independence và Bayes.
  - **Truy cập:** Toàn bộ PDF miễn phí: chọn FREE PDF, đặt khoản đóng góp tùy chọn bằng $0. Không cần mua bản in hoặc tài nguyên giáo viên.

### 162 · Bayes và tỷ lệ nền

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Giải bài kiểm tra dương tính với số người thực có tình trạng hiếm được cho trước. Định lý Bayes và Suy diễn xác suất: P(A|B) = P(B|A)*P(A) / P(B). Phân biệt rõ Tiền nghiệm (Prior P(A)), Khả năng hợp lý (Likelihood P(B|A)), Bằng chứng biên (Marginal Evidence P(B)), và Hậu nghiệm (Posterior P(A|B)).
- [ ] Dựng bảng số lượng thay vì chỉ thay công thức. Chọn số liệu cụ thể như 10.000 người, tỷ lệ nền 1%, sensitivity 90% và specificity 95%, dựng đủ bảng bốn ô thật/dự đoán để tính xác suất dương tính thật.
- [ ] Đổi tỷ lệ nền và quan sát vì sao xác suất sau khi có kết quả thay đổi. Quan sát trực giác: Khi tỷ lệ nền rất thấp, một xét nghiệm có độ chính xác cao vẫn cho ra tỷ lệ dương tính giả đáng kinh ngạc do mẫu số P(B) bị chi phối bởi người không có bệnh.
- [ ] Là nền tảng toán học trực tiếp cho thuật toán phân loại Naive Bayes (Multinomial Naive Bayes Spam Classifier).
- [ ] Đọc tài liệu đặc tả đồ án toán và phân loại xác suất tại docs/projects/04-NAIVE-BAYES-CLASSIFIER.md.

**Thông tin thêm & Lưu ý bản chất:**

Định lý Bayes và Suy diễn xác suất: P(A|B) = P(B|A)*P(A) / P(B). Phân biệt rõ Prior (tiền nghiệm P(A)), Likelihood (hợp lý P(B|A)), và Posterior (hậu nghiệm P(A|B)). Là cơ sở toán học trực tiếp cho thuật toán phân lớp Naive Bayes Classifier và các thuật toán học máy xác suất. Gắn liền với Mini-Project 4: Naive Bayes Spam Classifier. Tài liệu: docs/projects/04-NAIVE-BAYES-CLASSIFIER.md.

**Nguồn tham khảo miễn phí:**

- [OpenIntro Statistics, 4th edition](https://www.openintro.org/book/os/)
  - **Phần cần đọc:** Chương 3 Probability: sample space,conditional probability,independence và Bayes.
  - **Truy cập:** Toàn bộ PDF miễn phí: chọn FREE PDF, đặt khoản đóng góp tùy chọn bằng $0. Không cần mua bản in hoặc tài nguyên giáo viên.

### 163 · Biến ngẫu nhiên, kỳ vọng và phương sai

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Viết phân phối của tổng hai xúc xắc. Biến ngẫu nhiên (Random Variables): Phân biệt biến rời rạc với hàm khối xác suất (PMF) vs biến liên tục với hàm mật độ xác suất (PDF) và hàm phân phối tích lũy (CDF).
- [ ] Tính kỳ vọng, phương sai và phân biệt biến rời rạc với liên tục. Tính chất Tuyến tính của Kỳ vọng (Linearity of Expectation): E[X + Y] = E[X] + E[Y] luôn đúng với mọi biến ngẫu nhiên, kể cả khi X và Y phụ thuộc lẫn nhau!
- [ ] Làm ví dụ tuyến tính của kỳ vọng; kiểm tra điều kiện khi cộng phương sai. Tính kỳ vọng E[X], mô-men bậc hai E[X²], và phương sai Var(X) = E[X²] - (E[X])² trên cùng một phân phối cụ thể.
- [ ] Điều kiện cộng phương sai: Var(X + Y) = Var(X) + Var(Y) + 2Cov(X, Y); chỉ được cộng trực tiếp khi Cov(X, Y) = 0 (độc lập hoặc không tương quan).
- [ ] Tính kỳ vọng và phương sai của các trò chơi xác suất để xác định giá trị kỳ vọng âm/dương trong lý thuyết quyết định.

**Thông tin thêm & Lưu ý bản chất:**

Biến ngẫu nhiên (Random Variables): Rời rạc (PMF) vs Liên tục (PDF/CDF). Tính chất Tuyến tính của Kỳ vọng (Linearity of Expectation): E[X + Y] = E[X] + E[Y] luôn đúng với mọi biến ngẫu nhiên, kể cả khi X và Y phụ thuộc lẫn nhau! Phương sai Var(X) = E[X^2] - (E[X])^2.

**Nguồn tham khảo miễn phí:**

- [OpenIntro Statistics, 4th edition](https://www.openintro.org/book/os/)
  - **Phần cần đọc:** Chương 3–4: random variables,expectation,variance; đọc đúng mục Bernoulli/binomial,Poisson hoặc normal theo ô hiện tại.
  - **Truy cập:** Toàn bộ PDF miễn phí: chọn FREE PDF, đặt khoản đóng góp tùy chọn bằng $0. Không cần mua bản in hoặc tài nguyên giáo viên.

### 164 · Bernoulli và phân phối nhị thức

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Phân biệt một phép thử Bernoulli với số lần thành công trong n phép thử độc lập có cùng xác suất p.
- [ ] Với n=4,p=0.3, lập xác suất cho các giá trị từ 0 đến 4; kiểm tra tổng bằng 1 và tính xác suất ít nhất một thành công.
- [ ] Tính kỳ vọng, phương sai và giải thích ý nghĩa trong bài toán; chỉ rõ giả thiết độc lập và p không đổi.
- [ ] Tạo một tình huống xác suất thay đổi giữa các lần thử để giải thích vì sao không được áp dụng nhị thức máy móc.

**Nguồn tham khảo miễn phí:**

- [OpenIntro Statistics, 4th edition](https://www.openintro.org/book/os/)
  - **Phần cần đọc:** Chương 3–4: random variables,expectation,variance; đọc đúng mục Bernoulli/binomial,Poisson hoặc normal theo ô hiện tại.
  - **Truy cập:** Toàn bộ PDF miễn phí: chọn FREE PDF, đặt khoản đóng góp tùy chọn bằng $0. Không cần mua bản in hoặc tài nguyên giáo viên.

### 165 · Phân phối Poisson và số sự kiện

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Mô tả biến đếm sự kiện trong một khoảng; giải nghĩa λ là số sự kiện kỳ vọng trên khoảng đang xét.
- [ ] Với trung bình 3 yêu cầu/phút, tính xác suất không có yêu cầu và có ít nhất một yêu cầu trong một phút.
- [ ] Đổi sang khoảng hai phút và giải thích khi nào có thể đổi λ thành 6; xét giả thiết tốc độ ổn định, các khoảng độc lập.
- [ ] Phân biệt mô hình Poisson với số thành công trong một số phép thử cố định; không dùng mô hình chỉ vì dữ liệu là số nguyên.

**Nguồn tham khảo miễn phí:**

- [OpenIntro Statistics, 4th edition](https://www.openintro.org/book/os/)
  - **Phần cần đọc:** Chương 3–4: random variables,expectation,variance; đọc đúng mục Bernoulli/binomial,Poisson hoặc normal theo ô hiện tại.
  - **Truy cập:** Toàn bộ PDF miễn phí: chọn FREE PDF, đặt khoản đóng góp tùy chọn bằng $0. Không cần mua bản in hoặc tài nguyên giáo viên.

### 166 · Phân phối chuẩn và chuẩn hóa

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Giải nghĩa μ,σ; phân biệt mật độ tại một điểm với xác suất trong một khoảng.
- [ ] Chuẩn hóa Z=(X−μ)/σ với σ>0, tính xác suất khoảng bằng bảng hoặc công cụ miễn phí, rồi diễn giải về đơn vị gốc.
- [ ] So hai phân phối có cùng μ nhưng khác σ; nhận xét dữ liệu lệch hoặc có ngoại lệ có thể không phù hợp giả thiết chuẩn.
- [ ] Phân biệt dữ liệu gốc có phân phối chuẩn với phân phối của trung bình mẫu; chưa suy ra mọi dữ liệu trở thành chuẩn khi n lớn.

**Nguồn tham khảo miễn phí:**

- [OpenIntro Statistics, 4th edition](https://www.openintro.org/book/os/)
  - **Phần cần đọc:** Chương 3–4: random variables,expectation,variance; đọc đúng mục Bernoulli/binomial,Poisson hoặc normal theo ô hiện tại.
  - **Truy cập:** Toàn bộ PDF miễn phí: chọn FREE PDF, đặt khoản đóng góp tùy chọn bằng $0. Không cần mua bản in hoặc tài nguyên giáo viên.

### 167 · Lấy mẫu, ước lượng và khoảng tin cậy

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Phân biệt tổng thể, mẫu, tham số và thống kê mẫu. Định lý Giới hạn Trung tâm (Central Limit Theorem - CLT): Trung bình của n biến ngẫu nhiên độc lập cùng phân phối (i.i.d) có kỳ vọng mu và phương sai hữu hạn sigma² sẽ hội tụ về phân phối chuẩn Gaussian N(mu, sigma²/n) khi n đủ lớn, bất kể phân phối gốc là gì.
- [ ] Mô phỏng nhiều mẫu để thấy trung bình mẫu dao động. Mô phỏng lấy mẫu lặp lại nhiều lần để trực quan hóa hình chuông Gauss của trung bình mẫu và khoảng tin cậy 95%.
- [ ] Giải thích khoảng tin cậy theo quy trình lấy mẫu lặp lại, không diễn giải sai một tham số cố định. Ước lượng Hợp lý Cực đại (Maximum Likelihood Estimation - MLE): Phương pháp tìm bộ tham số theta tối đa hóa xác suất quan sát được dữ liệu L(theta) = prod P(x_i | theta).
- [ ] Chuyển sang Log-Likelihood: biến tích thành tổng sum log P(x_i | theta), là nền tảng toán học trực tiếp để tối ưu hóa hàm mất mát (Negative Log-Likelihood / Cross-Entropy Loss) trong Machine Learning.
- [ ] Tham khảo ứng dụng trong đồ án phân loại văn bản tại docs/projects/04-NAIVE-BAYES-CLASSIFIER.md.

**Thông tin thêm & Lưu ý bản chất:**

Định lý Giới hạn Trung tâm (CLT) & Suy diễn thống kê: Trung bình của một số lượng lớn biến ngẫu nhiên độc lập cùng phân phối (i.i.d) sẽ hội tụ về phân phối chuẩn Gaussian N(mu, sigma^2/n). Ước lượng hợp lý cực đại (MLE - Maximum Likelihood Estimation) là nền tảng tối ưu hóa hàm mất mát (Loss Function) trong Machine Learning. Tài liệu: docs/projects/04-NAIVE-BAYES-CLASSIFIER.md.

**Nguồn tham khảo miễn phí:**

- [OpenIntro Statistics, 4th edition](https://www.openintro.org/book/os/)
  - **Phần cần đọc:** Chương 5 Foundations for Inference: sampling,confidence intervals và hypothesis tests; tiếp tục ví dụ một mẫu ở chương 6–7 khi cần.
  - **Truy cập:** Toàn bộ PDF miễn phí: chọn FREE PDF, đặt khoản đóng góp tùy chọn bằng $0. Không cần mua bản in hoặc tài nguyên giáo viên.

### 168 · Kiểm định và kích thước hiệu ứng

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Đặt giả thuyết không, giả thuyết đối và mức ý nghĩa cho ví dụ so sánh. Chọn trước đại lượng kiểm định, giả thuyết, mức ý nghĩa và một hay hai phía theo câu hỏi.
- [ ] Phân biệt p-value với xác suất giả thuyết không đúng. Hiểu p-value là mức độ dữ liệu hoặc cực đoan hơn dưới giả thuyết không và mô hình, không phải xác suất giả thuyết đúng/sai.
- [ ] Báo cả độ lớn khác biệt và độ không chắc chắn; tránh thử nhiều giả thuyết rồi chỉ giữ kết quả đẹp. Phân biệt không bác bỏ với chứng minh hai nhóm như nhau.
- [ ] Báo effect size và khoảng tin cậy khi phù hợp, xét khác biệt có ý nghĩa thực tế hay chỉ do mẫu lớn.
- [ ] Ghi số phép thử đã làm và cách xử lý kiểm định nhiều lần, tránh chỉ trình bày lần cho p nhỏ.

**Nguồn tham khảo miễn phí:**

- [OpenIntro Statistics, 4th edition](https://www.openintro.org/book/os/)
  - **Phần cần đọc:** Chương 5 Foundations for Inference: sampling,confidence intervals và hypothesis tests; tiếp tục ví dụ một mẫu ở chương 6–7 khi cần.
  - **Truy cập:** Toàn bộ PDF miễn phí: chọn FREE PDF, đặt khoản đóng góp tùy chọn bằng $0. Không cần mua bản in hoặc tài nguyên giáo viên.

### 169 · Tương quan và hồi quy

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Tạo dữ liệu nhỏ có nhiễu và khớp hồi quy tuyến tính. Xác định đơn vị của biến giải thích và biến đáp ứng trước khi đọc hệ số.
- [ ] Vẽ phần dư, nhận diện điểm ngoại lệ và quan hệ không tuyến tính. Tách dữ liệu dùng khớp khỏi dữ liệu kiểm tra nếu muốn đánh giá dự đoán ngoài mẫu.
- [ ] Tạo ví dụ một biến thứ ba gây tương quan; không suy ra nhân quả chỉ từ đường hồi quy. Xem residual theo giá trị dự đoán và theo biến đầu vào để phát hiện xu hướng còn sót.
- [ ] Thử bỏ một điểm ngoại lệ có lý do kiểm tra dữ liệu rồi so hệ số, không bỏ điểm chỉ để kết quả đẹp.
- [ ] Viết một câu giải thích tương quan không đủ cho nhân quả bằng biến gây nhiễu cụ thể trong dữ liệu giả.

**Nguồn tham khảo miễn phí:**

- [OpenIntro Statistics, 4th edition](https://www.openintro.org/book/os/)
  - **Phần cần đọc:** Chương 8 Introduction to Linear Regression: association,residual và giới hạn suy luận nhân quả.
  - **Truy cập:** Toàn bộ PDF miễn phí: chọn FREE PDF, đặt khoản đóng góp tùy chọn bằng $0. Không cần mua bản in hoặc tài nguyên giáo viên.

### 170 · Mô phỏng và báo cáo kết quả

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Toán Rời rạc & Xác suất Thống kê (`track-4`)

**Việc cần làm:**

- [ ] Mô phỏng xác suất một bài đếm hoặc trò chơi xúc xắc bằng C++. Viết lời giải lý thuyết trước khi mô phỏng để có mốc đối chiếu, nêu rõ giả thiết đồng khả năng hay độc lập.
- [ ] Ghi seed, số lần thử, kết quả lý thuyết và thực nghiệm. Dùng bộ sinh ngẫu nhiên và phân phối thư viện phù hợp, ghi seed để tái lập.
- [ ] Viết một trang giải thích sai khác và giới hạn; sau này chuyển sang Python để vẽ thuận tiện hơn. Chạy vài cỡ số lần thử tăng dần, báo độ dao động thay vì mong tần suất trùng chính xác xác suất lý thuyết.
- [ ] Lưu mã, cấu hình và bảng kết quả gốc trước khi làm báo cáo.
- [ ] Kết luận mô phỏng hỗ trợ kiểm tra lập luận, không thay chứng minh khi bài yêu cầu kết quả chính xác tổng quát.
- [ ] Giao bản báo cáo và dữ liệu nhỏ cho người khác tính lại một kết quả; nếu dùng code mô phỏng, chờ phần Python hoặc dùng ngôn ngữ đang biết, không coi Python là điều kiện để hoàn thành toán.

**Nguồn tham khảo miễn phí:**

- [OpenIntro Statistics, 4th edition](https://www.openintro.org/book/os/)
  - **Phần cần đọc:** Chương 1–2: dữ liệu,thiết kế nghiên cứu,tóm tắt và đồ thị; chọn lại đúng mục inference của chương 5 theo câu hỏi báo cáo.
  - **Truy cập:** Toàn bộ PDF miễn phí: chọn FREE PDF, đặt khoản đóng góp tùy chọn bằng $0. Không cần mua bản in hoặc tài nguyên giáo viên.

# Track 5: Công cụ Phát triển & Kỹ thuật Kỹ nghệ (Developer Tooling & Engineering Practice)

> **Mục tiêu:** Bổ khuyết toàn diện Missing Semester: Git CLI chuyên nghiệp (phân nhánh, giải quyết xung đột merge, interactive rebase, stash, cherry-pick, PR workflow, Conventional Commits), Debugger GDB/LLDB/VS Code, diệt lỗi bộ nhớ với AddressSanitizer/Valgrind, POSIX shell & pipes, CMake đa mô-đun và tự động hóa CI/CD với GitHub Actions.
> **Môn học HCMUS:** Thực hành Kỹ thuật Lập trình · Phương pháp Phát triển Phần mềm (CSC13001) | **Thời lượng ước tính:** ~65 giờ

## 03. Lưu và quản lý mã nguồn

### 033 · Tạo kho Git đầu tiên

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Khởi tạo Git trong thư mục project thử, không khởi tạo ở thư mục chứa mọi tài liệu cá nhân. Mô hình nhận thức Git: Git là một đồ thị có hướng không chu trình định địa chỉ theo nội dung (Content-Addressable DAG) gồm các đối tượng bất biến: Blobs (nội dung tệp), Trees (thư mục), Commits (ảnh chụp trạng thái + metadata tác giả + con trỏ cha) định danh bằng mã băm SHA.
- [ ] Tạo .gitignore cho tệp biên dịch và thư mục do công cụ sinh ra. Làm chủ 3 vùng làm việc: Thư mục làm việc (Working Tree), Vùng chỉ mục chuẩn bị (Staging Area / Index), và Kho lưu trữ lịch sử (Git Repository / .git).
- [ ] Xem git status, thêm đúng tệp nguồn rồi tạo commit đầu tiên. Dùng git diff (so Working Tree với Index) và git diff --cached (so Index với HEAD commit gần nhất) để kiểm soát chính xác từng byte thay đổi.
- [ ] Xem lịch sử và đối chiếu những tệp thực sự nằm trong commit. Sau commit, dùng git log --graph --oneline để trực quan hóa cấu trúc nhánh và topo đồ thị DAG.

**Thông tin thêm & Lưu ý bản chất:**

Mô hình nhận thức Git: Git là một đồ thị có hướng không chu trình định địa chỉ theo nội dung (Content-Addressable DAG) gồm các đối tượng bất biến: Blobs (nội dung tệp), Trees (thư mục), Commits (ảnh chụp trạng thái + metadata tác giả + con trỏ cha) định danh bằng mã băm SHA. 3 vùng làm việc: Working Tree, Staging Area (Index), Repository (.git).

**Nguồn tham khảo miễn phí:**

- [Pro Git, 2nd edition](https://git-scm.com/book/en/v2)
  - **Phần cần đọc:** Pro Git §1.6 First-Time Git Setup, §2.1 Getting a Git Repository.
  - **Truy cập:** Toàn bộ sách điện tử miễn phí; không cần mua bản in.

### 034 · Lưu một thay đổi có chủ đích

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Sửa một lỗi trong lớp ThuVien. Tái hiện lỗi với dữ liệu nhỏ rồi lưu cả bản sửa lẫn cách kiểm chứng; thông điệp commit cần giúp đọc lại lý do.
- [ ] Dùng git diff để xem đúng phần thay đổi. Nếu vô tình sửa thêm định dạng hoặc tệp khác, tách chúng khỏi commit sửa lỗi.
- [ ] Tạo commit với thông điệp mô tả lỗi đã sửa. Kiểm tra trạng thái sau commit, nhận diện phần còn chưa lưu thay vì nghĩ mọi thay đổi đều đã được ghi nhận.
- [ ] Dùng git show để đọc lại thay đổi; không đưa tệp dữ liệu riêng tư vào kho mã.

**Nguồn tham khảo miễn phí:**

- [Pro Git, 2nd edition](https://git-scm.com/book/en/v2)
  - **Phần cần đọc:** Pro Git §2.2 Recording Changes, §2.3 Viewing History; thử stage và đọc diff trước commit.
  - **Truy cập:** Toàn bộ sách điện tử miễn phí; không cần mua bản in.

### 035 · Làm tính năng trên nhánh riêng

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Tạo nhánh them-tim-kiem và thêm tìm sách theo tên. Bản chất nhánh (Branch) trong Git: Nhánh thực chất chỉ là một con trỏ nhẹ di động (movable pointer chứa mã hash SHA) trỏ tới đỉnh một commit; chuyển nhánh (git switch/checkout) chỉ là dời con trỏ HEAD.
- [ ] Commit thay đổi, quay lại nhánh chính và quan sát sự khác biệt. Phân biệt rõ ràng: Fast-Forward Merge (chỉ cần dời con trỏ nhánh về phía trước khi không có rẽ nhánh) vs 3-way Merge Commit (ghép 2 nhánh có chung tổ tiên gần nhất Merge Base).
- [ ] Gộp nhánh sau khi biên dịch và thử chức năng thành công. Làm chủ Interactive Rebase (git rebase -i): Viết lại lịch sử tuyến tính sạch sẽ bằng cách reorder, squash/gộp nhiều commit nhỏ, hoặc edit commit trước khi mở Pull Request.
- [ ] Tự tạo một xung đột nhỏ trên tệp thử, đọc hai phía và chọn nội dung cần giữ. Kỹ thuật phân tích và giải quyết xung đột (Merge Conflicts): Đọc hiểu điểm mốc chung, nhánh hiện tại (HEAD) và nhánh đang gộp (INCOMING); áp dụng quy chuẩn Conventional Commits (feat, fix, docs, refactor).

**Thông tin thêm & Lưu ý bản chất:**

Git nâng cao & Giải quyết xung đột: Phân biệt Fast-forward merge vs 3-way merge commit. Phân tích và giải quyết thủ công merge conflicts (<<<<<<< HEAD, =======, >>>>>>>). Kỹ thuật interactive rebase (git rebase -i) để squash/gộp commit tạo lịch sử tuyến tính sạch sẽ, git stash tạm cất thay đổi, và quy chuẩn Conventional Commits.

**Nguồn tham khảo miễn phí:**

- [Pro Git, 2nd edition](https://git-scm.com/book/en/v2)
  - **Phần cần đọc:** Pro Git §3.1–3.2: branch và basic branching/merging.
  - **Truy cập:** Toàn bộ sách điện tử miễn phí; không cần mua bản in.

### 036 · Remote, GitHub và pull request

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Đưa project tự viết lên repository, kiểm tra tệp công khai trước khi push. Phân biệt repository trên máy với repository trên GitHub, kiểm tra đúng remote bằng git remote -v.
- [ ] Phân biệt commit cục bộ, push, fetch và pull. Đọc diff toàn bộ nhánh trước push, kiểm tra dữ liệu mẫu không chứa thông tin người thật hoặc khóa.
- [ ] Mở một pull request từ nhánh tính năng; viết mô tả thay đổi và cách đã thử. Trong pull request, ghi vấn đề, thay đổi quan trọng và lệnh/tình huống đã dùng để thử.
- [ ] Thử fetch để xem thay đổi từ xa trước khi gộp; không dùng force push để chữa mọi lỗi bị từ chối.

**Nguồn tham khảo miễn phí:**

- [Pro Git, 2nd edition](https://git-scm.com/book/en/v2)
  - **Phần cần đọc:** Pro Git §2.5 Working with Remotes và chương 6 GitHub: pull requests và góp thay đổi.
  - **Truy cập:** Toàn bộ sách điện tử miễn phí; không cần mua bản in.

### 037 · Khôi phục thay đổi bằng Git

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Trong repository thử, sửa một tệp rồi xem diff trước khi khôi phục. Dùng một repository riêng có vài tệp giả để thử, viết rõ mục đích khôi phục nội dung hay đảo một commit.
- [ ] Dùng revert để đảo một commit đã chia sẻ; đọc commit đảo ngược. So git restore với git revert: một thao tác thay nội dung làm việc, một thao tác tạo commit mới đảo thay đổi.
- [ ] Thực hành stash và đọc reflog; phân biệt thao tác giữ lịch sử với viết lại lịch sử. Trước khi thử reset hoặc thao tác có thể bỏ dữ liệu, xem trợ giúp, tạo nhánh giữ mốc và xác định chính xác phần sẽ mất.
- [ ] Mở stash ra kiểm tra nội dung trước khi xóa; dùng reflog để tìm mốc vừa di chuyển và khôi phục qua một nhánh mới.

**Nguồn tham khảo miễn phí:**

- [Pro Git, 2nd edition](https://git-scm.com/book/en/v2)
  - **Phần cần đọc:** Pro Git §2.4 Undoing Things; chỉ đọc thêm reflog trong chương 7 khi cần tìm commit.
  - **Truy cập:** Toàn bộ sách điện tử miễn phí; không cần mua bản in.

### 038 · Đọc và góp ý mã của người khác

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Chọn một thay đổi nhỏ trong project nhóm hoặc repository luyện tập. Đọc yêu cầu và ca kiểm thử trước, sau đó lần theo phần mã thay đổi tới nơi được gọi.
- [ ] Đọc yêu cầu, diff và chạy thử trước khi góp ý. Tách lỗi ảnh hưởng hành vi khỏi gợi ý phong cách; ưu tiên nhận xét có đầu vào tái hiện được.
- [ ] Viết nhận xét có tình huống gây lỗi và đề xuất sửa; xử lý phản hồi bằng một commit rõ ràng. Nêu ví dụ cụ thể như thêm sách trùng mã vẫn thành công, thay vì viết chung là code chưa tốt.
- [ ] Khi nhận góp ý, kiểm chứng lại rồi phản hồi điều đã sửa hoặc lý do chưa sửa, tránh thay đổi máy móc để được chấp thuận.

**Nguồn tham khảo miễn phí:**

- [Pro Git, 2nd edition](https://git-scm.com/book/en/v2)
  - **Phần cần đọc:** Pro Git chương 6: contributing to a project và pull request; tập đọc diff thật.
  - **Truy cập:** Toàn bộ sách điện tử miễn phí; không cần mua bản in.
- [Software Engineering at Google — bản web](https://abseil.io/resources/swe-book/html/toc.html)
  - **Phần cần đọc:** Các chương Code Review,Knowledge Sharing và How to Work Well on Teams.
  - **Truy cập:** Toàn bộ bản HTML của sách miễn phí; không cần O’Reilly subscription.

## 05. Công cụ, Linux và cách tự học

### 046 · Làm việc bằng dòng lệnh

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Dùng PowerShell hiện tại hoặc một môi trường Linux học tập; không cần đổi hệ điều hành chính. Làm chủ dòng lệnh POSIX/Linux & Pipes: Hiểu bản chất 3 luồng dữ liệu chuẩn: Standard Input (stdin - 0), Standard Output (stdout - 1), Standard Error (stderr - 2).
- [ ] Di chuyển thư mục, liệt kê tệp và dùng đường dẫn có khoảng trắng. Kỹ thuật đường ống pipe | kết nối stdout của tiến trình trước thành stdin của tiến trình sau, kết hợp các công cụ Unix kinh điển (grep, awk, sed, sort, uniq, xargs) thành các pipeline xử lý dữ liệu mạnh mẽ.
- [ ] Xem trợ giúp một lệnh, kiểm tra thư mục hiện tại trước thao tác với tệp. Làm chủ điều hướng luồng: chuyển hướng ghi đè >, nối thêm >>, và gộp kênh lỗi 2>&1.
- [ ] Phân quyền tập tin trên hệ thống Linux theo hệ bát phân (Octal notation): Read (4), Write (2), Execute (1) trên 3 cấp độ Owner, Group, Others qua lệnh chmod.

**Thông tin thêm & Lưu ý bản chất:**

Dòng lệnh POSIX/Linux & Pipes: Làm chủ 3 luồng chuẩn: Standard Input (stdin - 0), Standard Output (stdout - 1), Standard Error (stderr - 2). Kỹ thuật đường ống pipe | kết hợp các tiện ích Unix (grep, awk, sed, find, xargs). Phân quyền file chmod (Read=4, Write=2, Execute=1).

**Nguồn tham khảo miễn phí:**

- [MIT Missing Semester — bản 2020](https://missing.csail.mit.edu/2020/)
  - **Phần cần đọc:** Bài Course Overview + The Shell: điều hướng, quoting và lệnh cơ bản; làm phần Exercises.
  - **Truy cập:** Bài viết, video và bài tập công khai miễn phí.

### 047 · Lọc và ghép dữ liệu văn bản

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Tạo tệp log giả chứa thời điểm, mức lỗi và thông điệp. Quy định trước đầu ra mong đợi, ví dụ thống kê số lỗi theo loại từ một tệp log có 20 dòng tự tạo.
- [ ] Lọc các dòng lỗi, đếm và sắp xếp nhóm thông điệp bằng công cụ dòng lệnh. Tách từng bước lọc, chọn cột, nhóm, đếm và sắp xếp; xem kết quả trung gian trước khi nối pipeline.
- [ ] Lưu kết quả vào tệp mới và so sánh với việc tính bằng chương trình C++. Thử log có dòng trống, thông điệp chứa khoảng trắng và không có lỗi; phân biệt stdout với stderr.
- [ ] Ghi rõ pipeline dành cho shell nào và so số đếm với chương trình tham chiếu ngắn.

**Nguồn tham khảo miễn phí:**

- [MIT Missing Semester — bản 2020](https://missing.csail.mit.edu/2020/)
  - **Phần cần đọc:** Bài Shell Tools and Scripting, Data Wrangling: pipe,grep,sort,uniq và xử lý văn bản.
  - **Truy cập:** Bài viết, video và bài tập công khai miễn phí.

### 048 · Tiến trình và quyền trên Linux

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Trong môi trường Linux học tập, xem tiến trình của một chương trình do mình mở. Xem người sở hữu và các nhóm quyền trước khi thay đổi, giải thích quyền x trên tệp khác quyền x trên thư mục.
- [ ] Phân biệt quyền đọc, ghi và chạy trên tệp, thư mục. Dùng một chương trình do mình mở để thử chạy nền, xem PID và gửi tín hiệu dừng; không chọn tiến trình lạ.
- [ ] Thử cấp quyền tối thiểu cho tệp thử; dừng đúng tiến trình của mình bằng tín hiệu thông thường. Không dùng quyền quản trị chỉ vì một lệnh báo bị từ chối; kiểm tra đường dẫn và quyền thực sự cần.
- [ ] Thử chương trình ghi vào tệp không có quyền trên môi trường học tập và quan sát cách ứng dụng báo lỗi.

**Nguồn tham khảo miễn phí:**

- [MIT Missing Semester — bản 2020](https://missing.csail.mit.edu/2020/)
  - **Phần cần đọc:** Bài Command-line Environment: job control,processes,signals và quyền tệp trong bài Shell.
  - **Truy cập:** Bài viết, video và bài tập công khai miễn phí.

### 049 · Tự động hóa việc build C++

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Viết CMakeLists cho project thư viện nhiều tệp. Tự động hóa build với Modern CMake (Target-based CMake 3.20+): Tổ chức cấu trúc dự án C++ chuẩn công nghiệp (include/, src/, tests/).
- [ ] Build ở thư mục riêng, cấu hình Debug và chạy debugger. Sử dụng triết lý Target: Quản lý thư viện và thực thi qua target_include_directories(target PUBLIC/PRIVATE), target_link_libraries(target PUBLIC/PRIVATE), target_compile_features(target PRIVATE cxx_std_17).
- [ ] Xóa riêng thư mục build thử rồi build lại từ mã nguồn; ghi hướng dẫn tái lập. Tích hợp FetchContent tự động tải và liên kết thư viện ngoài (GoogleTest / Catch2) mà không cần cài đặt thủ công vào hệ thống.
- [ ] Thiết lập quy trình CI/CD và scaffold hoàn chỉnh gắn liền với đồ án tại docs/projects/05-DEVOPS-CPP-SCAFFOLD.md.

**Thông tin thêm & Lưu ý bản chất:**

Tự động hóa build với CMake hiện đại (Target-based CMake 3.20+): Viết CMakeLists.txt tổ chức dự án đa thư mục chuẩn công nghiệp (src, include, tests) với target_include_directories và target_link_libraries. Quản lý cờ biên dịch chuẩn (-Wall -Wextra -std=c++17 -O2). Gắn liền với Mini-Project 5: Production-Ready C++ Project Scaffold & CI/CD với GitHub Actions. Tài liệu: docs/projects/05-DEVOPS-CPP-SCAFFOLD.md.

**Nguồn tham khảo miễn phí:**

- [MIT Missing Semester — bản 2020](https://missing.csail.mit.edu/2020/)
  - **Phần cần đọc:** Bài Metaprogramming: build systems,dependencies và testing; dựng Makefile nhỏ thay vì học hết các công cụ.
  - **Truy cập:** Bài viết, video và bài tập công khai miễn phí.

### 050 · Tìm lỗi bộ nhớ bằng công cụ

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Chạy chương trình thử dưới AddressSanitizer và UndefinedBehaviorSanitizer nếu bộ công cụ hỗ trợ. Chẩn đoán và diệt lỗi bộ nhớ lúc runtime: Tích hợp AddressSanitizer (ASan) và UndefinedBehaviorSanitizer (UBSan) qua cờ biên dịch -fsanitize=address,undefined -g trên GCC/Clang để bắt lập tức lỗi Use-After-Free, Heap-Buffer-Overflow, Stack-Overflow.
- [ ] Cố ý tạo truy cập vượt mảng trong tệp thử rồi đọc vị trí được báo. Sử dụng ThreadSanitizer (TSan) với cờ -fsanitize=thread -g để phát hiện triệt để Data Race trong ứng dụng đa luồng.
- [ ] Sửa nguyên nhân và chạy lại; không chỉ tắt cảnh báo. Phân tích stack trace từ báo cáo ASan: đối chiếu chính xác dòng cấp phát bộ nhớ, dòng giải phóng và dòng truy cập trái phép.
- [ ] Sử dụng Valgrind Memcheck để rà soát rò rỉ bộ nhớ (Definitely Lost, Indirectly Lost, Still Reachable).

**Thông tin thêm & Lưu ý bản chất:**

Chẩn đoán và diệt lỗi bộ nhớ: Tích hợp AddressSanitizer (ASan) và UBSan qua cờ -fsanitize=address,undefined -g trên GCC/Clang để bắt lập tức lỗi Use-After-Free, Out-of-bounds, Stack Overflow lúc runtime. Dùng Valgrind Memcheck để rà soát toàn diện rò rỉ bộ nhớ (Definitely/Indirectly lost).

**Nguồn tham khảo miễn phí:**

- [MIT Missing Semester — bản 2020](https://missing.csail.mit.edu/2020/)
  - **Phần cần đọc:** Bài Debugging and Profiling: debugging,memory và profiling; phân biệt tìm lỗi với đo hiệu năng.
  - **Truy cập:** Bài viết, video và bài tập công khai miễn phí.

### 051 · Đo trước khi tối ưu

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Chọn thao tác tìm sách và tạo ba kích thước dữ liệu tăng dần. Xác định câu hỏi cần đo như tìm theo mã tăng chậm ra sao khi số sách tăng, cùng đơn vị thời gian.
- [ ] Dùng đồng hồ đo hoặc profiler, lặp nhiều lần và ghi cấu hình máy. Chuẩn bị dữ liệu ngoài vùng đang bấm giờ, giữ cùng input khi so hai cách tìm.
- [ ] Tách thời gian đọc tệp khỏi thời gian tìm kiếm; ghi kết luận trong giới hạn phép đo. Chạy nhiều lượt, báo cách tóm tắt và độ dao động, nêu cache nóng/lạnh nếu ảnh hưởng rõ.
- [ ] Nếu kết quả quá ngắn để đo ổn định, tăng số lần thao tác hoặc kích thước; không kết luận từ chênh lệch sát sai số.

**Nguồn tham khảo miễn phí:**

- [MIT Missing Semester — bản 2020](https://missing.csail.mit.edu/2020/)
  - **Phần cần đọc:** Bài Debugging and Profiling: debugging,memory và profiling; phân biệt tìm lỗi với đo hiệu năng.
  - **Truy cập:** Bài viết, video và bài tập công khai miễn phí.

### 052 · Đọc tài liệu kỹ thuật tiếng Anh

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Chọn tài liệu của vector hoặc Git, đọc một mục ngắn. Đọc mục mô tả hành vi, tham số, giá trị trả về, lỗi và điều kiện vô hiệu hóa nếu có.
- [ ] Ghi ý nghĩa của tham số, kết quả trả về và một điều kiện dễ dùng sai. Với mỗi từ mới, lưu câu chứa từ và một ví dụ mình dùng được, tránh danh sách dịch nghĩa rời rạc.
- [ ] Viết ví dụ chạy được từ tài liệu; ghi lại từ mới trong ngữ cảnh, không chép cả trang. Chuyển ví dụ tài liệu thành biến thể nhỏ, dự đoán kết quả rồi kiểm tra để biết mình hiểu hay chỉ chạy lại.
- [ ] Khi phải dùng bản dịch, đối chiếu tên API và điều kiện quan trọng với bản gốc.

**Nguồn tham khảo miễn phí:**

- [MIT Missing Semester — bản 2020](https://missing.csail.mit.edu/2020/)
  - **Phần cần đọc:** Bài Q&A: cách tự tìm tài liệu; áp dụng trực tiếp lên tài liệu vector/Git ở nhiệm vụ.
  - **Truy cập:** Bài viết, video và bài tập công khai miễn phí.

### 053 · Dùng AI mà vẫn tự kiểm soát mã

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Tự giải một bài trước, rồi yêu cầu AI nhận xét một lỗi cụ thể. Giữ yêu cầu, lời giải tự làm và bộ test trước khi hỏi AI; yêu cầu nó chỉ ra giả định hoặc ca phản ví dụ cụ thể.
- [ ] Kiểm chứng đề xuất bằng tài liệu và ca kiểm thử do mình nghĩ ra. Với mã được gợi ý, đọc toàn bộ diff và giải thích được vòng lặp, quyền sở hữu, trường hợp lỗi trước khi nhận vào project.
- [ ] Đóng câu trả lời, tự sửa lại mã và giải thích từng phần; không gửi khóa hay dữ liệu riêng tư. Tự thiết kế ít nhất một ca mà lời giải dễ sai, không chỉ chạy test do chính câu trả lời tạo ra.
- [ ] Nếu chưa hiểu đoạn mã, thu nhỏ ví dụ hoặc quay lại bài nền; không đánh dấu đã học chỉ vì chương trình chạy.

### 054 · Tạo nhịp học và ôn lại

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Chọn vài buổi học cố định phù hợp lịch môn trên trường. Ưu tiên lịch môn đang học, dành các phiên ngắn để vá đúng lỗ hổng thay vì mở nhiều khóa cùng lúc.
- [ ] Sau mỗi nhóm nhiệm vụ, giải lại một bài cũ không nhìn lời giải. Mỗi phiên chốt một việc quan sát được như tự cài hàm hoặc sửa một lỗi tái hiện, không dùng số giờ xem video làm kết quả duy nhất.
- [ ] Lưu nhật ký lỗi gồm tình huống, nguyên nhân và cách sửa; dùng lỗi lặp lại để chọn phần cần ôn. Chọn một bài cũ cách vài ngày, đổi dữ kiện hoặc điều kiện và làm lại không xem; nếu mắc, ghi phần cần ôn cụ thể.
- [ ] Cuối tuần giảm hoặc tăng khối lượng theo việc thật sự làm được, giữ một khoảng nghỉ và thời gian xử lý bài trên trường.

## 18. Kỹ thuật phần mềm và làm việc nhóm

### 249 · Yêu cầu, user story và tình huống biên

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Phỏng vấn một người dùng thử về cách họ mượn, trả và tìm sách. Hỏi người dùng về lần làm gần nhất, dữ liệu cần nhập và chỗ thường sai, không chỉ hỏi họ muốn thêm tính năng gì.
- [ ] Chuyển nhu cầu thành yêu cầu quan sát được. Viết điều kiện chấp nhận theo tình huống cụ thể như sách đã mượn thì thao tác thứ hai bị từ chối.
- [ ] Ghi các tình huống từ chối và xung đột; phân biệt mong muốn giao diện với quy tắc nghiệp vụ. Phân biệt yêu cầu chức năng với yêu cầu chất lượng như thời gian đáp ứng hoặc khả năng khôi phục.
- [ ] Đưa câu chữ mơ hồ như nhanh, dễ dùng, bảo mật thành điều quan sát/kiểm tra được trong phạm vi project.
- [ ] Xác nhận các quy tắc xung đột và ưu tiên bản đầu trước khi code.

**Nguồn tham khảo miễn phí:**

- [Software Engineering at Google — bản web](https://abseil.io/resources/swe-book/html/toc.html)
  - **Phần cần đọc:** Chương Documentation, mục Design Docs; chương What Is Software Engineering? Chỉ áp dụng phần phù hợp project nhỏ.
  - **Truy cập:** Toàn bộ bản HTML của sách miễn phí; không cần O’Reilly subscription.

### 250 · Chia module theo trách nhiệm

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Vẽ luồng từ giao diện qua nghiệp vụ đến kho dữ liệu. Chọn ranh giới theo trách nhiệm hoặc chính sách thay đổi: giao diện nhập xuất, nghiệp vụ và lưu trữ.
- [ ] Đưa phần dễ thay đổi sau một giao diện nhỏ. Vẽ phụ thuộc để phần quy tắc mượn trả không phải biết chi tiết HTTP hoặc SQL ở mọi nơi.
- [ ] Thử đổi lưu tệp sang database mà không sửa quy tắc mượn trả; không chia lớp chỉ để có nhiều lớp. Định nghĩa đầu vào, kết quả và lỗi của module để bên gọi dùng mà không đọc nội bộ.
- [ ] Thử thay một thành phần bằng bản giả trong test để kiểm chứng mức ghép nối.
- [ ] Không tạo interface cho mọi lớp khi chỉ có một cách dùng đơn giản và chưa có lợi ích rõ.

**Nguồn tham khảo miễn phí:**

- [Software Engineering at Google — bản web](https://abseil.io/resources/swe-book/html/toc.html)
  - **Phần cần đọc:** Chương Documentation, mục Design Docs; chương What Is Software Engineering? Chỉ áp dụng phần phù hợp project nhỏ.
  - **Truy cập:** Toàn bộ bản HTML của sách miễn phí; không cần O’Reilly subscription.

### 251 · Dùng UML để giải thích đúng việc

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Vẽ class diagram cho dữ liệu chính và quan hệ sở hữu. Class diagram ghi quan hệ chứa/kế thừa, lực lượng và thành viên quan trọng, không chép mọi dòng mã vào hình.
- [ ] Vẽ sequence diagram cho một lượt mượn sách. Sequence diagram phân biệt lời gọi, phản hồi và nhánh lỗi, chỉ rõ nơi transaction diễn ra.
- [ ] Vẽ state machine cho phiếu mượn; kiểm tra các sơ đồ cùng mô tả một hành vi thống nhất. State machine dùng trạng thái thực như đang mượn/đã trả và điều kiện chuyển, tránh coi mỗi màn hình là trạng thái nghiệp vụ.
- [ ] Lần theo một tình huống trên cả ba hình để phát hiện mâu thuẫn về dữ liệu, quyền sở hữu hoặc thời điểm cập nhật.
- [ ] Chỉ giữ sơ đồ giúp giải thích một quyết định hoặc luồng khó; cập nhật khi mã thay đổi.

**Nguồn tham khảo miễn phí:**

- [Software Engineering at Google — bản web](https://abseil.io/resources/swe-book/html/toc.html)
  - **Phần cần đọc:** Mục Design Docs trong chương Documentation: dùng hình để giải thích quyết định; UML chỉ vẽ đúng ký hiệu cần cho nhiệm vụ.
  - **Truy cập:** Toàn bộ bản HTML của sách miễn phí; không cần O’Reilly subscription.

### 252 · Design pattern từ vấn đề cụ thể

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Dùng Strategy khi có nhiều cách tính phí hoặc sắp xếp thật sự cần thay. Với Strategy, tách điểm biến đổi như cách tính phí khỏi dữ liệu và điều phối chung.
- [ ] Dùng Adapter để ghép giao diện cũ với bộ lưu mới. Với Adapter, giữ hợp đồng bên gọi cần rồi chuyển sang API của thành phần có sẵn.
- [ ] Thử dependency injection qua constructor để kiểm thử; không học thuộc tên rồi nhét pattern vào mọi lớp. Dùng dependency injection để thay clock, bộ lưu hoặc dịch vụ ngoài bằng bản giả có kiểm soát trong test.
- [ ] So phiên bản trước/sau bằng một yêu cầu thay đổi thật, kiểm tra chi phí thêm abstraction có đáng.
- [ ] Nêu một chỗ không cần pattern và giữ mã trực tiếp đơn giản, tránh xem pattern là danh sách phải dùng đủ.

**Thông tin thêm & Lưu ý bản chất:**

GoF Design Patterns thực chiến: Strategy Pattern thay đổi thuật toán lúc chạy, Factory Pattern đóng gói khởi tạo đối tượng, Observer Pattern phát sóng sự kiện phân tách module, Dependency Injection tách ghép nối cứng. Tuân thủ 5 nguyên lý SOLID để tạo kiến trúc phần mềm sạch và dễ kiểm thử. Tài liệu: docs/guides/02-VIRTUAL-DISPATCH-OOP-SOLID.md.

**Nguồn tham khảo miễn phí:**

- [Game Programming Patterns — bản web](https://gameprogrammingpatterns.com/contents.html)
  - **Phần cần đọc:** Chọn một chương phù hợp lỗi thiết kế đang gặp, như Observer,State hoặc Command; đọc Problem/Motivation và When to Use, không học thuộc mọi pattern.
  - **Truy cập:** Toàn bộ sách web miễn phí; chỉ đọc pattern được chỉ định và áp dụng khi có vấn đề phù hợp.

### 253 · Unit test kiểm tra quy tắc nghiệp vụ

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Tách phần nghiệp vụ đủ để chạy test không cần trình duyệt. Mỗi test có arrange–act–assert rõ: chuẩn bị trạng thái, gọi một hành vi và kiểm tra kết quả cùng trạng thái sau.
- [ ] Viết ca sách đã mượn, trả lặp và độc giả không tồn tại. Dùng fake repository hoặc dữ liệu bộ nhớ khi đang kiểm quy tắc nghiệp vụ, không gọi mạng ngoài vô tình.
- [ ] Sửa giả một điều kiện để xác nhận test thất bại; coverage cao chưa đủ chứng minh test có ích. Thử lỗi và ca biên như mượn không tồn tại, trả lặp, danh sách rỗng chứ không chỉ luồng thành công.
- [ ] Không assert mọi chi tiết nội bộ dễ thay đổi nếu hợp đồng công khai vẫn giữ đúng.
- [ ] Chạy từng test riêng để chắc nó không phụ thuộc thứ tự hoặc dữ liệu còn lại từ test khác.

**Nguồn tham khảo miễn phí:**

- [Software Engineering at Google — bản web](https://abseil.io/resources/swe-book/html/toc.html)
  - **Phần cần đọc:** Các chương Unit Testing và Test Doubles: test hành vi,giữ test rõ ràng và chọn fake/stub khi thật sự cần.
  - **Truy cập:** Toàn bộ bản HTML của sách miễn phí; không cần O’Reilly subscription.

### 254 · Integration test và end-to-end test

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Viết test API với cơ sở dữ liệu thử được khởi tạo riêng. Chọn test tích hợp cho ranh giới thật như API↔database, xác nhận schema và transaction khớp.
- [ ] Thêm một luồng người dùng từ đăng nhập tới mượn rồi trả qua giao diện. Tạo database/test schema riêng với tài khoản phù hợp, không dùng tên kết nối mơ hồ có thể trỏ dữ liệu đang dùng.
- [ ] Kiểm tra dọn dữ liệu thử và không chạm dữ liệu thật; giữ test độc lập thứ tự chạy. Với E2E, giữ một số luồng quan trọng và kiểm tra bằng nội dung người dùng thấy, không chỉ chờ một khoảng thời gian cứng.
- [ ] Xử lý trạng thái nền hoặc request bất đồng bộ bằng điều kiện quan sát được thay vì sleep ngẫu nhiên.
- [ ] Khi test thất bại, lưu request, dữ liệu thử và bước tái hiện đủ để sửa đúng ranh giới hỏng.

**Nguồn tham khảo miễn phí:**

- [Software Engineering at Google — bản web](https://abseil.io/resources/swe-book/html/toc.html)
  - **Phần cần đọc:** Các chương Testing Overview và Larger Testing.
  - **Truy cập:** Toàn bộ bản HTML của sách miễn phí; không cần O’Reilly subscription.

### 255 · Refactor có bảo vệ hành vi

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Chọn một hàm dài trong project, ghi hành vi hiện tại bằng test. Ghi rõ hành vi cần giữ và điều muốn cải thiện như tách I/O khỏi tính toán hoặc giảm đoạn trùng.
- [ ] Tách phần tính toán khỏi nhập xuất và xóa mã trùng có thật. Thực hiện từng thay đổi nhỏ, chạy test liên quan sau mỗi bước để biết bước nào gây sai.
- [ ] Chạy test trước, sau; không vừa thay kiến trúc vừa thêm nhiều tính năng trong cùng bước. Kiểm tra diff không vô tình thêm tính năng, đổi định dạng dữ liệu hoặc bỏ xử lý lỗi.
- [ ] Dùng tên mô tả nghiệp vụ, giảm tham số/biến dùng chung khi nó giúp hiểu rõ trách nhiệm.
- [ ] Đánh giá bằng khả năng giải thích và thay đổi một trường hợp cụ thể, không chỉ bằng số dòng giảm.

**Nguồn tham khảo miễn phí:**

- [Software Engineering at Google — bản web](https://abseil.io/resources/swe-book/html/toc.html)
  - **Phần cần đọc:** Chương Large-Scale Changes: đọc ý tưởng thay đổi có kiểm soát; áp dụng ở phạm vi nhỏ, không làm hệ thống lớn của Google.
  - **Truy cập:** Toàn bộ bản HTML của sách miễn phí; không cần O’Reilly subscription.

### 256 · Tự động kiểm tra mỗi thay đổi

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Tạo GitHub Actions chạy cài phụ thuộc, test và build. Chọn đúng phiên bản runtime/compiler tương thích dự án và dùng file lock/phiên bản phụ thuộc đã kiểm tra.
- [ ] Thử một nhánh có test hỏng để thấy pipeline chặn đúng. Pipeline cần chạy trên checkout sạch, không dựa tệp build sẵn từ máy cá nhân.
- [ ] Lưu phiên bản phụ thuộc, không in bí mật ra log và không dùng workflow lấy từ nguồn không hiểu. Tách lệnh test và build để đọc lỗi dễ hơn, giữ log đủ biết bước nào hỏng.
- [ ] Cố ý tạo một nhánh làm test thất bại rồi sửa lại để chắc CI thật sự được kích hoạt.
- [ ] Giới hạn quyền workflow cần dùng, không đưa secret vào mã hoặc log, không chạy mã từ nguồn lạ với quyền cao.

**Nguồn tham khảo miễn phí:**

- [GitHub Actions — tài liệu](https://docs.github.com/en/actions)
  - **Phần cần đọc:** Các mục workflows,jobs,steps,triggers và artifacts; cấu hình pipeline test/build nhỏ của project.
  - **Truy cập:** Tài liệu miễn phí; có thể viết và kiểm tra cấu hình tại máy, không cần mua gói CI.

### 257 · Container và môi trường tái lập

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Phân biệt image, container, volume và máy ảo. Đọc Dockerfile theo từng bước: base image, thư mục làm việc, phụ thuộc, mã ứng dụng và lệnh khởi động.
- [ ] Đóng gói ứng dụng với Dockerfile tối thiểu, dùng người chạy không đặc quyền khi phù hợp. Tạo .dockerignore để tránh đưa node_modules, venv, dữ liệu riêng hoặc secret vào build context.
- [ ] Chạy API cùng database trên môi trường thử; không đóng gói khóa bí mật vào image. Phân biệt dữ liệu trong lớp ghi của container với dữ liệu cần volume để tồn tại qua lần thay container.
- [ ] Kiểm tra container truy cập database bằng tên/địa chỉ phù hợp, localhost bên trong không mặc nhiên là máy chủ bên ngoài.
- [ ] Dừng và tạo lại môi trường thử để xác nhận hướng dẫn tái lập được, không chỉ chạy được một lần.

**Nguồn tham khảo miễn phí:**

- [Docker — Get started](https://docs.docker.com/get-started/)
  - **Phần cần đọc:** Get started: containers,images,Dockerfile,persisting data và multi-container apps; chỉ cần dựng lại môi trường project.
  - **Truy cập:** Tài liệu miễn phí; thực hành trên Docker Engine cho môi trường cá nhân phù hợp, không cần dịch vụ cloud trả phí.

### 258 · Log và dấu vết lỗi có ích

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Thêm request ID, mức log và thời điểm cho API. Chốt log ở các ranh giới quan trọng: nhận request, kết thúc nghiệp vụ, lỗi I/O/transaction và trả phản hồi.
- [ ] Ghi lỗi đủ để chẩn đoán nhưng không log mật khẩu hoặc thông tin riêng tư. Giữ cấu trúc nhất quán để lọc theo request ID, tránh một request tạo hàng trăm dòng không cần thiết.
- [ ] Theo một request thất bại từ đầu tới transaction; thêm chỉ số độ trễ và tỷ lệ lỗi. Đo độ trễ và tỷ lệ lỗi theo cùng định nghĩa, phân biệt lỗi người dùng bị từ chối với lỗi hệ thống.
- [ ] Tái hiện một ca hỏng rồi dùng chính log để xác định bước đầu tiên sai.
- [ ] Rà xem có token, mật khẩu, nội dung nhạy cảm hoặc dữ liệu cá nhân bị đưa vào log ngoài nhu cầu hay không.

**Nguồn tham khảo miễn phí:**

- [Site Reliability Engineering — sách web Google](https://sre.google/sre-book/table-of-contents/)
  - **Phần cần đọc:** Chương Monitoring Distributed Systems và Troubleshooting: tín hiệu,log,correlation và tái hiện lỗi.
  - **Truy cập:** Toàn bộ sách web miễn phí; chỉ chọn chương liên quan, không cần dùng Google Cloud.

### 259 · Tối ưu theo nút thắt đo được

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Tạo kịch bản tải nhỏ trên dịch vụ của mình và ghi cấu hình. Viết kịch bản gồm tỷ lệ đọc/ghi, dữ liệu, số client, thời gian chạy và môi trường để phép đo có thể lặp.
- [ ] Đo phân vị độ trễ, throughput và số truy vấn database. Làm nóng hệ thống nếu cần, nhưng ghi rõ cách đo và phân biệt cache nóng/lạnh.
- [ ] Sửa một nút thắt, đo lại cùng điều kiện; tránh kết luận từ một lần chạy duy nhất. Báo p50,p95 hoặc phân vị phù hợp cùng lỗi/timeout, không chỉ thời gian trung bình.
- [ ] Tìm nút thắt bằng bằng chứng như query lặp, I/O hoặc CPU, chỉ đổi một yếu tố mỗi lần so.
- [ ] Kiểm tra tính đúng vẫn giữ khi tăng tải; hệ trả nhanh nhưng mất phiếu mượn không phải tối ưu thành công.

**Nguồn tham khảo miễn phí:**

- [Site Reliability Engineering — sách web Google](https://sre.google/sre-book/table-of-contents/)
  - **Phần cần đọc:** Chương Handling Overload và Monitoring Distributed Systems: tìm nút thắt bằng số đo trước khi tối ưu.
  - **Truy cập:** Toàn bộ sách web miễn phí; chỉ chọn chương liên quan, không cần dùng Google Cloud.

### 260 · Làm một vòng phát triển theo nhóm

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Công cụ & Kỹ thuật Thực chiến (`track-5`)

**Việc cần làm:**

- [ ] Tách tính năng thành issue nhỏ, mỗi issue có ví dụ hành vi và cách kiểm tra. Viết issue có ví dụ đầu vào/đầu ra, phạm vi và cách tự kiểm tra để người khác hiểu việc không cần hỏi lại toàn bộ.
- [ ] Chia việc qua nhánh, pull request và review. Chia thay đổi đủ nhỏ để review, báo sớm giao diện hoặc dữ liệu nào sẽ ảnh hưởng người khác.
- [ ] Tổng kết một lỗi phối hợp, cập nhật tài liệu hoặc quy ước để tránh lặp lại. Khi xung đột, đối chiếu ý nghĩa hai thay đổi thay vì chỉ chọn một phía cho hết conflict.
- [ ] Review cả hành vi lỗi và test, không chỉ hình thức mã.
- [ ] Cuối vòng, chốt một cải tiến quy trình cụ thể từ sự cố đã gặp và áp dụng vào vòng sau.
- [ ] Nhờ một người review pull request có thay đổi thực; trả lời góp ý, sửa và giải thích phần trách nhiệm của mình bằng diff và kết quả kiểm tra.

**Nguồn tham khảo miễn phí:**

- [Software Engineering at Google — bản web](https://abseil.io/resources/swe-book/html/toc.html)
  - **Phần cần đọc:** Các chương Code Review,Knowledge Sharing và How to Work Well on Teams.
  - **Truy cập:** Toàn bộ bản HTML của sách miễn phí; không cần O’Reilly subscription.

# Track 6: Định hướng & Sẵn sàng Chuyên ngành KHMT (CS Specialization Readiness)

> **Mục tiêu:** Chiến lược tối ưu CPA/GPA xét tuyển chuyên ngành KHMT cuối Năm 2: Hệ quản trị CSDL quan hệ (SQL, chuẩn hóa 1NF/2NF/3NF/BCNF, chỉ mục B-Tree, giao dịch ACID), Web RESTful API, Nhập môn AI & Machine Learning (NumPy, Scikit-learn, PyTorch cơ bản), Lý thuyết tính toán (Automata, P vs NP) và xây dựng 5 Capstone Projects portfolio chứng minh năng lực kỹ nghệ.
> **Môn học HCMUS:** Hệ quản trị cơ sở dữ liệu (CSC10006) · Nhập môn Trí tuệ Nhân tạo (CSC14001) · Xét tuyển Chuyên ngành KHMT (Cuối Năm 2) | **Thời lượng ước tính:** ~120 giờ

## 15. SQL và cơ sở dữ liệu

### 209 · Tự kiểm tra SQL và dữ liệu

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Làm các mục sau trước khi mở lời giải cũ. Ghi từng mục: tự làm được / cần gợi ý / chưa học; không cộng thành điểm đoán mức giỏi chung.
- [ ] Từ bảng sách có mã trùng, chỉ ra cột nào có thể làm khóa và ràng buộc cần thêm.
- [ ] Nếu đã học SQL, viết truy vấn lấy người đang mượn sách từ hai bảng và kiểm tra trường hợp không có lượt mượn.
- [ ] Mô tả hai người cùng thấy còn một sách rồi cùng mượn; đề xuất điều cần đảm bảo dù chưa biết cú pháp transaction.
- [ ] Sau khi thử, chỉ ôn lại mục chưa tự làm được theo các liên kết bên dưới. Chưa học là điểm bắt đầu bình thường; không tự đánh dấu cả chặng hoàn thành và không cần làm lại toàn bộ kho 28tech.

**Ô cần ôn theo kết quả kiểm tra:**

- [ ] 210 · Bảng, khóa và ràng buộc (`db-relations`)
- [ ] 212 · JOIN và quan hệ nhiều bảng (`db-join`)
- [ ] 216 · Transaction và ACID (`db-transaction`)

**Thông tin thêm & Lưu ý bản chất:**

Bài tự kiểm tra để chọn điểm ôn, không có chấm tự động. Code cũ chỉ mở sau lượt thử; khi đã tự làm được một mục, vẫn kiểm tra bằng ca biên hoặc biến thể trước khi đi nhanh qua phần tương ứng.

### 210 · Bảng, khóa và ràng buộc

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Biến Sach, DocGia và PhieuMuon thành bảng. Viết một vài hàng mẫu cho mỗi bảng để thấy khóa chính đại diện bản ghi nào.
- [ ] Chọn khóa chính, khóa ngoại, NOT NULL và UNIQUE theo quy tắc nghiệp vụ. Chốt kiểu dữ liệu cho mã, tên, ngày và trạng thái; không lưu mọi thứ bằng chuỗi chỉ để dễ nhập.
- [ ] Phân biệt NULL với 0 và chuỗi rỗng. Vẽ khóa ngoại của phiếu tới sách/độc giả, chọn hành vi khi muốn xóa bản ghi được tham chiếu.
- [ ] Thử INSERT vi phạm từng ràng buộc và đọc thông báo; bảo vệ ở database chứ không chỉ kiểm tra ở form.
- [ ] Dùng IS NULL/IS NOT NULL đúng ngữ nghĩa, thử phép so sánh với NULL để hiểu logic ba giá trị.

**Thông tin thêm & Lưu ý bản chất:**

Mô hình CSDL quan hệ & Chuẩn hóa: Thiết kế bảng, khóa chính (Primary Key), khóa ngoại (Foreign Key). Chuẩn hóa 1NF (Tính nguyên tử), 2NF (Loại bỏ phụ thuộc một phần), 3NF (Loại bỏ phụ thuộc bắc cầu) để triệt tiêu 3 dị thường dữ liệu (Thêm, Sửa, Xóa). Tài liệu: docs/guides/09-DATABASE-ACID-TRANSACTIONS.md.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Tutorial chương 2 The SQL Language và chương 5 Data Definition: primary/foreign keys,constraints.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.

### 211 · SELECT, lọc và sắp xếp

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tạo dữ liệu thư viện mẫu bằng SQL. Viết rõ cột cần lấy thay vì dùng SELECT * trong mọi truy vấn ứng dụng.
- [ ] Viết WHERE, ORDER BY, LIMIT và phép lọc có NULL. Thử điều kiện kết hợp AND/OR có dấu ngoặc và tên có dấu/chuỗi chứa ký tự đặc biệt.
- [ ] Thử dữ liệu trùng và điều kiện biên; không dựa vào thứ tự hàng nếu thiếu ORDER BY. Dùng ORDER BY có tiêu chí phụ duy nhất khi cần kết quả ổn định giữa các trang.
- [ ] Kiểm tra LIMIT không tự làm kết quả có thứ tự, và bộ lọc NULL cần cách viết riêng.
- [ ] Đối chiếu kết quả với bảng nhỏ liệt kê tay trước khi thử dữ liệu lớn.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Chương 7 Queries: SELECT,WHERE,ORDER BY,LIMIT và NULL.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.

### 212 · JOIN và quan hệ nhiều bảng

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Viết INNER JOIN, LEFT JOIN giữa độc giả và phiếu mượn. Ghi khóa nối và lực lượng một–nhiều trước khi chạy, dự đoán số hàng có thể được nhân.
- [ ] Tự tính kết quả trên tập nhỏ trước khi chạy. Tạo độc giả chưa có phiếu để thấy INNER JOIN bỏ họ còn LEFT JOIN có thể giữ.
- [ ] Thấy vì sao một hàng có thể xuất hiện nhiều lần do quan hệ một–nhiều. Thử đặt điều kiện của bảng phải trong ON rồi trong WHERE để quan sát khác biệt với LEFT JOIN.
- [ ] Nêu vì sao DISTINCT không phải cách chữa mặc định cho mọi kết quả bị nhân do nối sai.
- [ ] Kiểm tra tổng hợp sau JOIN không vô tình đếm sách/độc giả nhiều lần.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Tutorial phần Joins Between Tables và chương 7 Table Expressions.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.

### 213 · GROUP BY và truy vấn con

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Thống kê lượt mượn theo sách và độc giả. Chọn nhóm theo mã định danh rồi lấy tên phù hợp, không gộp hai người cùng tên thành một người.
- [ ] Phân biệt WHERE lọc hàng với HAVING lọc nhóm. Phân biệt COUNT(*) với COUNT(cột) khi cột có NULL.
- [ ] Viết truy vấn sách chưa được mượn bằng NOT EXISTS; xét tác động của NULL. Tách lọc từng hàng trước nhóm với lọc tổng hợp sau nhóm bằng ví dụ dễ tính.
- [ ] So NOT EXISTS với cách dùng NOT IN khi truy vấn con có NULL để hiểu nguy cơ khác kết quả.
- [ ] Tự viết truy vấn lồng hoặc JOIN tương đương ở một bài nhỏ và đối chiếu tập hàng.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Chương 7 Table Expressions: grouping,HAVING,subqueries.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.

### 214 · Mô hình ER và chuẩn hóa

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Vẽ quan hệ, lực lượng và thuộc tính cho thư viện. Phân biệt đầu sách, bản sách vật lý và phiếu mượn nếu mở rộng nhiều bản; chốt phiên bản đang hỗ trợ.
- [ ] Tìm phụ thuộc hàm và ví dụ bất thường khi thêm, sửa, xóa. Viết phụ thuộc hàm có lý do nghiệp vụ, không suy từ một bộ dữ liệu tình cờ không trùng.
- [ ] Phân rã tới dạng chuẩn phù hợp như 3NF; kiểm tra không mất thông tin khi nối lại. Tạo ví dụ lưu tên độc giả lặp trong mọi phiếu để thấy sửa một chỗ có thể làm lệch thông tin.
- [ ] Khi phân rã, kiểm tra khóa/khóa ngoại và phép nối không làm mất hay sinh hàng giả.
- [ ] Chỉ denormalize khi có nhu cầu đo được và có cách duy trì dữ liệu nhất quán.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Chương 5 Data Definition: constraints,keys; phần chuẩn hóa thực hiện theo ví dụ tách bảng trong ô.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.
- [Offline Guide: CSDL Quan hệ, Chỉ mục B+Tree & Giao dịch ACID 4 mức cô lập](./docs/guides/09-DATABASE-ACID-TRANSACTIONS.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về chuẩn hóa CSDL 1NF-3NF, chỉ mục B+Tree và giao dịch ACID.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 215 · DDL và thay đổi cấu trúc

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tạo schema bằng script thay vì chỉ thao tác tay. Lưu script tạo schema vào repository, chạy từ database thử rỗng để kiểm tra không phụ thuộc thao tác tay đã quên.
- [ ] Thêm cột hoặc ràng buộc trên bản dữ liệu thử. Trước thêm ràng buộc, kiểm tra dữ liệu cũ có vi phạm không và cách làm sạch hợp lệ.
- [ ] Viết migration có bước kiểm tra và phương án quay lại khi phù hợp. Viết thứ tự thay đổi schema với ứng dụng, tránh triển khai mã mới đọc một cột chưa có.
- [ ] Thử migration trên bản sao dữ liệu, ghi cách backup/khôi phục và giới hạn của bước rollback.
- [ ] Không dùng xóa rồi tạo lại database làm mặc định mỗi khi sửa schema chứa dữ liệu cần giữ.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Chương 5: Creating Tables,Modifying Tables và Dependencies.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.

### 216 · Transaction và ACID

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Gộp kiểm tra sách và tạo phiếu mượn vào một giao dịch. Làm chủ 4 tính chất A.C.I.D của Giao dịch (Transaction): Atomicity (Tính nguyên tử — cơ chế Write-Ahead Logging/WAL để rollback toàn bộ khi lỗi), Consistency (Tính nhất quán — bảo toàn mọi ràng buộc toàn vẹn), Isolation (Tính cô lập — các giao dịch chạy song song độc lập), Durability (Tính bền vững — ghi Redo Log và đẩy xuống đĩa qua hàm hệ thống fsync()).
- [ ] Phân biệt atomicity, consistency, isolation và durability. Vẽ các bước đọc trạng thái sách, kiểm tra, tạo phiếu và cập nhật liên quan; chọn ranh giới BEGIN/COMMIT chuẩn mực.
- [ ] Thử rollback ở giữa thao tác để xác nhận không lưu nửa chừng. Cố ý gây lỗi ở một bước giữa và kiểm tra ROLLBACK đưa mọi dữ liệu về trạng thái ban đầu như thể chưa từng xảy ra.
- [ ] Đặt transaction ngắn vừa đủ, không giữ khóa trong lúc chờ người dùng hoặc I/O mạng.
- [ ] Tham khảo cẩm nang CSDL quan hệ và ACID tại docs/guides/09-DATABASE-ACID-TRANSACTIONS.md.

**Thông tin thêm & Lưu ý bản chất:**

4 Tính chất A.C.I.D của Giao dịch CSDL: Atomicity (Tính nguyên tử — cơ chế Write-Ahead Logging/WAL để rollback toàn bộ khi lỗi), Consistency (Tính nhất quán — bảo toàn ràng buộc), Isolation (Tính cô lập — các giao dịch chạy song song độc lập), Durability (Tính bền vững — ghi Redo Log và đẩy xuống đĩa qua hàm hệ thống fsync()). Tài liệu: docs/guides/09-DATABASE-ACID-TRANSACTIONS.md.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Tutorial Transactions; chương 13 Concurrency Control: isolation,row locks và serialization failures.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.
- [Offline Guide: CSDL Quan hệ, Chỉ mục B+Tree & Giao dịch ACID 4 mức cô lập](./docs/guides/09-DATABASE-ACID-TRANSACTIONS.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về chuẩn hóa CSDL 1NF-3NF, chỉ mục B+Tree và giao dịch ACID.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 217 · Hai người cùng mượn một sách

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Phân tích 4 mức độ cô lập chuẩn SQL: Read Uncommitted, Read Committed, Repeatable Read, Serializable; đánh đổi giữa tính an toàn dữ liệu và tốc độ xử lý.
- [ ] Hiểu bản chất 3 hiện tượng đọc bất thường: Đọc bẩn (Dirty Read — đọc dữ liệu dang dở chưa commit của giao dịch khác), Đọc không lặp lại (Non-repeatable Read — giá trị dòng bị thay đổi giữa 2 lần đọc), Đọc bóng ma (Phantom Read — xuất hiện thêm dòng mới thỏa mãn điều kiện truy vấn).
- [ ] Mở hai kết nối độc lập (session A/B) tới database thử để tái hiện tình huống cạnh tranh mượn cùng một cuốn sách.
- [ ] Tìm hiểu cơ chế đa phiên bản MVCC (Multi-Version Concurrency Control) trong PostgreSQL giúp hạn chế đọc bóng ma mà không cần khóa toàn bảng.
- [ ] Nếu giao dịch bị hủy do xung đột cạnh tranh hoặc deadlock, thiết kế cơ chế thử lại (retry) toàn bộ giao dịch có giới hạn và exponential backoff.
- [ ] Đọc cẩm nang tại docs/guides/09-DATABASE-ACID-TRANSACTIONS.md.

**Thông tin thêm & Lưu ý bản chất:**

4 Mức độ cô lập giao dịch chuẩn SQL: Read Uncommitted, Read Committed, Repeatable Read, Serializable; đánh đổi giữa tính toàn vẹn dữ liệu và thông lượng xử lý. Bản chất 3 hiện tượng đọc bất thường: Đọc bẩn (Dirty Read), Đọc không lặp lại (Non-repeatable Read), Đọc bóng ma (Phantom Read). Cơ chế đa phiên bản MVCC trong PostgreSQL. Tài liệu: docs/guides/09-DATABASE-ACID-TRANSACTIONS.md.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Tutorial Transactions; chương 13 Concurrency Control: isolation,row locks và serialization failures.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.

### 218 · Index và kế hoạch thực thi

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] So truy vấn theo mã sách trước và sau khi có index. Bản chất Chỉ mục B+Tree trong CSDL quan hệ: Nút trung gian chỉ lưu khóa định tuyến (Routing Keys) với bậc phân nhánh cao (B hàng trăm phần tử/trang đĩa 4KB), cây lùn (3–4 tầng cho hàng triệu dòng) tối ưu hóa số lần Disk I/O.
- [ ] Đọc EXPLAIN, rồi EXPLAIN ANALYZE chỉ với câu lệnh thử đã hiểu sẽ thực thi. Các nút lá chứa con trỏ dữ liệu và được liên kết đôi theo thứ tự tăng dần; truy vấn khoảng (BETWEEN) quét trực tiếp trên danh sách liên kết lá mà không cần duyệt ngược lên cây.
- [ ] Phân biệt quét tuần tự, quét chỉ mục và chi phí duy trì index khi ghi. Nắm chắc Quy tắc tiền tố bên trái nhất (Leftmost Prefix Rule) trên chỉ mục kết hợp INDEX(A, B, C): chỉ mục chỉ có tác dụng khi điều kiện lọc chứa tiền tố liên tục từ A.
- [ ] Đọc kết quả EXPLAIN / EXPLAIN ANALYZE: phân biệt Sequential Scan (quét tuần tự toàn bảng) vs Index Scan vs Index Only Scan.
- [ ] Cân nhắc đánh đổi: Index tăng tốc độ truy vấn đọc nhưng làm giảm tốc độ ghi (INSERT/UPDATE/DELETE) và tiêu tốn dung lượng ổ đĩa. Tài liệu: docs/guides/09-DATABASE-ACID-TRANSACTIONS.md.

**Thông tin thêm & Lưu ý bản chất:**

Bản chất Chỉ mục B+Tree trong CSDL quan hệ: Nút trung gian chỉ lưu khóa định tuyến (Routing Keys) với bậc phân nhánh cao (B hàng trăm phần tử/trang đĩa 4KB), cây lùn (3–4 tầng cho hàng triệu dòng) tối ưu hóa số lần Disk I/O. Danh sách liên kết đôi giữa các lá hỗ trợ truy vấn khoảng (BETWEEN) cực nhanh. Nắm chắc Quy tắc tiền tố bên trái nhất (Leftmost Prefix Rule) trên chỉ mục kết hợp INDEX(A, B, C). Tài liệu: docs/guides/09-DATABASE-ACID-TRANSACTIONS.md.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Chương 11 Indexes và chương 14 Performance Tips: Using EXPLAIN; đo trên dữ liệu của mình.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.
- [Offline Guide: CSDL Quan hệ, Chỉ mục B+Tree & Giao dịch ACID 4 mức cô lập](./docs/guides/09-DATABASE-ACID-TRANSACTIONS.md)
  - **Phần cần đọc:** Tài liệu hướng dẫn chuyên sâu ngoại tuyến về chuẩn hóa CSDL 1NF-3NF, chỉ mục B+Tree và giao dịch ACID.
  - **Truy cập:** Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.

### 219 · Chọn index theo truy vấn

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tạo tập dữ liệu đủ lớn để đo có ý nghĩa. Giữ nguyên truy vấn và dữ liệu khi so không index, index đơn và index ghép.
- [ ] Thử index ghép với các thứ tự cột và điều kiện lọc khác nhau. Thay điều kiện lọc theo từng cột, theo hai cột, ORDER BY và giới hạn để xem planner chọn gì.
- [ ] Ghi thời gian, số hàng và kế hoạch; không thêm index cho mọi cột theo cảm tính. Ghi cả trường hợp database chọn quét tuần tự vì lấy phần lớn bảng, không kết luận index bị hỏng.
- [ ] Kiểm tra thống kê dữ liệu và độ chọn lọc trước khi ép một chiến lược.
- [ ] Đánh giá lợi ích đọc so với chi phí ghi/lưu trữ, chỉ giữ các index phục vụ truy vấn thật sự cần.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Chương 11 Indexes và chương 14 Performance Tips: Using EXPLAIN; đo trên dữ liệu của mình.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.

### 220 · CTE và view để tổ chức truy vấn

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Viết một truy vấn tổng hợp mượn sách bằng subquery, rồi tách cùng logic thành CTE có tên rõ; so hai kết quả.
- [ ] Tạo view cho một truy vấn cần dùng lại, đọc định nghĩa và phân biệt view thông thường với bản sao dữ liệu.
- [ ] Thay đổi dữ liệu gốc rồi truy vấn view để kiểm tra; xét quyền truy cập và sự phụ thuộc khi đổi cấu trúc bảng.
- [ ] Dùng EXPLAIN để quan sát thay vì mặc định CTE hoặc view luôn làm truy vấn nhanh hơn.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Chương 7 WITH Queries và Tutorial Views; không chuyển sang window function trước khi xong CTE/view.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.

### 221 · Window function và xếp hạng

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Dùng dữ liệu mượn sách theo độc giả để so GROUP BY với hàm OVER: bản nào giữ được từng hàng ban đầu.
- [ ] Viết ROW_NUMBER,RANK và DENSE_RANK theo số lượt mượn; thêm hai hàng bằng điểm để giải thích sự khác biệt.
- [ ] Viết tổng lũy kế với PARTITION BY,ORDER BY và khung ROWS tường minh; thử ngày trùng nhau để phát hiện mặc định dễ gây nhầm.
- [ ] Kiểm tra kết quả trên bảng nhỏ tính tay được; thêm khóa phụ khi cần thứ tự xác định giữa các hàng bằng nhau.

**Khi nào quay lại:** Quay lại khi cần phân tích dữ liệu nâng cao hoặc yêu cầu dữ liệu vượt lựa chọn SQL đang dùng.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Tutorial Window Functions và chương 4 Window Function Calls: partition,ordering,frame.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.

### 222 · Truy vấn có tham số và quyền truy cập

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Đọc cách driver gửi giá trị tách khỏi cấu trúc SQL. Viết truy vấn có placeholder theo driver, truyền giá trị qua tham số riêng, kể cả giá trị chứa dấu nháy.
- [ ] Thử đầu vào chứa dấu nháy trong môi trường cục bộ với truy vấn tham số. Phân biệt tham số cho giá trị với tên bảng/cột thường cần danh sách cho phép nếu ứng dụng cho chọn động.
- [ ] Tạo tài khoản ứng dụng có quyền tối thiểu; không dùng tài khoản quản trị cho mọi thao tác. Tài khoản ứng dụng chỉ có quyền đọc/ghi cần thiết trên schema phù hợp, không mặc định được tạo/xóa mọi bảng.
- [ ] Không đưa mật khẩu kết nối vào repository hoặc thông báo lỗi trả về client.
- [ ] Thử một yêu cầu trái phép ở mức API và một thao tác bị quyền database chặn để thấy hai lớp bảo vệ khác nhau.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Chương 21 Database Roles và phần Prepared Statements; dùng parameter binding ở thư viện kết nối.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.

### 223 · Sao lưu phải khôi phục được

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tạo bản dump dữ liệu thử và ghi phiên bản công cụ. Ghi rõ đang backup schema, dữ liệu và thành phần nào khác như role/quyền có cần tái tạo.
- [ ] Khôi phục vào cơ sở dữ liệu thử mới, không ghi đè dữ liệu đang dùng. Dùng lệnh dump chính thức phù hợp phiên bản, lưu tệp trong nơi có quyền truy cập phù hợp dữ liệu.
- [ ] So số hàng, ràng buộc và vài truy vấn nghiệp vụ sau khôi phục. Khôi phục vào một database mới đặt tên rõ là thử, ghi lại lệnh và thời gian cần thiết.
- [ ] Chạy kiểm tra số hàng, khóa ngoại và một lượt mượn trả thật trên bản khôi phục.
- [ ] Định nghĩa dữ liệu có thể mất tối đa từ lần backup trước và thời gian chấp nhận để phục hồi nếu project có người dùng.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Chương 25 Backup and Restore: SQL dump và restore vào database mới.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.

### 224 · Khi nào cân nhắc NoSQL

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Phân biệt mô hình key–value, document, graph với quan hệ. Với từng mô hình, lấy một truy vấn cụ thể và mô tả bản ghi/key/document/quan hệ sẽ lưu.
- [ ] Thiết kế cùng một yêu cầu theo SQL và một mô hình khác. So cách cập nhật dữ liệu lặp, nối thông tin và bảo vệ ràng buộc với phương án quan hệ.
- [ ] Nêu truy vấn, nhất quán, cập nhật và vận hành cần đánh đổi; không coi NoSQL là luôn nhanh hơn. Kiểm tra bảo đảm transaction/nhất quán của sản phẩm cụ thể nếu định dùng, không suy từ nhãn NoSQL.
- [ ] Dùng dữ liệu nhỏ mô hình hóa cùng một nghiệp vụ rồi chỉ ra thao tác nào đơn giản, thao tác nào khó hơn.
- [ ] Giữ PostgreSQL cho project hiện tại nếu chưa có lý do thay đo được; đây là bài so mô hình chứ không bắt chuyển công nghệ.

**Khi nào quay lại:** Quay lại khi cần phân tích dữ liệu nâng cao hoặc yêu cầu dữ liệu vượt lựa chọn SQL đang dùng.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Chương 8: JSON Types; đối chiếu giới hạn PostgreSQL với yêu cầu dữ liệu trước khi quyết định chuyển hệ khác.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.

### 225 · Chuyển thư viện sang cơ sở dữ liệu

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Thay tệp lưu bằng PostgreSQL qua driver phù hợp. Tạo migration schema và công cụ nhập dữ liệu tệp cũ vào database thử, kiểm tra mã trùng/tham chiếu hỏng trước khi commit.
- [ ] Giữ giao diện nghiệp vụ tách khỏi câu SQL. Viết lớp hoặc module truy cập dữ liệu với giao diện nhỏ để nghiệp vụ không gắn chặt chuỗi SQL ở mọi nơi.
- [ ] Chạy lại ca mượn trả, cạnh tranh và khôi phục; giữ bản sao dữ liệu cũ trước khi chuyển. Quản lý mở/đóng kết nối, transaction và lỗi driver theo một quy tắc nhất quán.
- [ ] Chạy lại mọi test mượn/trả, tìm sách và lỗi đầu vào; bổ sung bài hai người cùng mượn.
- [ ] So dữ liệu trước/sau chuyển và thử khôi phục backup; chỉ bỏ tệp cũ khi đã có bản sao và xác nhận chuyển đủ.
- [ ] Dựng database rỗng từ script, chạy ca hai phiên cùng mượn sách rồi kiểm tra trạng thái cuối; tự backup và restore sang database mới trước khi chốt.

**Nguồn tham khảo miễn phí:**

- [PostgreSQL — tài liệu chính thức](https://www.postgresql.org/docs/current/)
  - **Phần cần đọc:** Tutorial chương 2–3, chương 13 Concurrency Control và 25 Backup/Restore: chỉ xem lại mục cần cho project.
  - **Truy cập:** Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.

## 16. Python để làm công cụ và xử lý dữ liệu

### 226 · Tự kiểm tra trước khi chuyển sang Python

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Làm các mục sau trước khi mở lời giải cũ. Ghi từng mục: tự làm được / cần gợi ý / chưa học; không cộng thành điểm đoán mức giỏi chung.
- [ ] Viết bằng C++ hoặc Python một hàm đếm từ trong danh sách; nói rõ dữ liệu vào, ra và ca rỗng.
- [ ] Nếu đã dùng Python, dự đoán a=[1]; b=a; b.append(2), rồi giải thích a thay đổi hay không.
- [ ] Thử đọc tệp JSON lỗi và mô tả cách báo lỗi; chưa biết Python thì đi từ ô Chuyển từ C++ sang Python.
- [ ] Sau khi thử, chỉ ôn lại mục chưa tự làm được theo các liên kết bên dưới. Chưa học là điểm bắt đầu bình thường; không tự đánh dấu cả chặng hoàn thành và không cần làm lại toàn bộ kho 28tech.

**Ô cần ôn theo kết quả kiểm tra:**

- [ ] 227 · Chuyển từ C++ sang Python (`py-syntax`)
- [ ] 228 · List, tuple, dict và set (`py-collections`)
- [ ] 230 · Tệp, ngoại lệ, JSON và CSV (`py-files`)

**Thông tin thêm & Lưu ý bản chất:**

Bài tự kiểm tra để chọn điểm ôn, không có chấm tự động. Code cũ chỉ mở sau lượt thử; khi đã tự làm được một mục, vẫn kiểm tra bằng ca biên hoặc biến thể trước khi đi nhanh qua phần tương ứng.

### 227 · Chuyển từ C++ sang Python

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Viết lại một bài xử lý danh sách bằng Python. So int của Python với số nguyên có độ rộng cố định trong C++, đồng thời hiểu bộ nhớ/thời gian vẫn hữu hạn.
- [ ] So kiểu động, thụt dòng, phép chia và vòng lặp với C++. Thử /, //, % với số dương và âm, kiểm tra quy tắc thay vì giả định giống C++.
- [ ] Giữ hiểu biết thuật toán; không học lại toàn bộ nhập môn từ đầu. Viết input→chuyển kiểu→kiểm tra→xử lý→output cho một bài cũ để nhận diện lỗi cú pháp và lỗi dữ liệu riêng.
- [ ] Thử enumerate, range và vòng for trên phần tử để tránh dùng chỉ số khi không cần.
- [ ] Giữ thuật toán đã biết, chỉ tra cú pháp và cấu trúc tương ứng khi chuyển.

**Nguồn tham khảo miễn phí:**

- [Python Tutorial — tài liệu chính thức](https://docs.python.org/3/tutorial/)
  - **Phần cần đọc:** Tutorial chương 3 An Informal Introduction và 4 More Control Flow Tools.
  - **Truy cập:** Toàn bộ tutorial miễn phí; phù hợp người đã biết một ngôn ngữ lập trình.

### 228 · List, tuple, dict và set

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Giải đếm tần suất và nhóm dữ liệu bằng dict. Phân biệt list có thứ tự/thay đổi được, tuple bất biến ở cấp phần tử tham chiếu, set loại trùng và dict ánh xạ khóa→giá trị.
- [ ] Thử hai biến cùng tham chiếu một list, so với bản sao. Thử a=b, a=b.copy() và dữ liệu list lồng nhau để thấy sao chép nông không sao chép toàn bộ đối tượng con.
- [ ] Phân biệt phần tử có thể băm với dữ liệu thay đổi được; không mặc định mọi đối tượng dùng làm khóa. Viết bài gom sách theo năm bằng dict chứa list, kiểm tra khóa chưa có bằng cách xử lý rõ.
- [ ] Không dựa vào thứ tự set để xuất kết quả cần ổn định.
- [ ] Chọn cấu trúc theo phép thêm/tìm/duyệt cần có thay vì chuyển mọi mảng C++ thành một dạng duy nhất.

**Nguồn tham khảo miễn phí:**

- [Python Tutorial — tài liệu chính thức](https://docs.python.org/3/tutorial/)
  - **Phần cần đọc:** Tutorial chương 5 Data Structures: lists,tuples,sets,dictionaries và copying.
  - **Truy cập:** Toàn bộ tutorial miễn phí; phù hợp người đã biết một ngôn ngữ lập trình.

### 229 · Hàm, module và môi trường ảo

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tách chương trình Python thành module có điểm chạy rõ. Viết điểm chạy if __name__ == '__main__' và thử import module không tự chạy menu.
- [ ] Tạo venv, cài một thư viện và lưu phiên bản phụ thuộc. Kiểm tra python/pip đang trỏ vào venv đã tạo trước khi cài thư viện.
- [ ] Thử bẫy đối số mặc định là list thay đổi được, rồi sửa bằng giá trị mặc định phù hợp. Ghi file phụ thuộc và thử tạo lại môi trường mới từ file đó.
- [ ] Với đối số mặc định list, gọi hai lần để thấy trạng thái bị chia sẻ rồi dùng None và tạo list trong hàm.
- [ ] Phân biệt import tên từ module với sao chép cả mã module vào project.

**Nguồn tham khảo miễn phí:**

- [Python Tutorial — tài liệu chính thức](https://docs.python.org/3/tutorial/)
  - **Phần cần đọc:** Tutorial chương 4 Defining Functions,6 Modules và 12 Virtual Environments and Packages.
  - **Truy cập:** Toàn bộ tutorial miễn phí; phù hợp người đã biết một ngôn ngữ lập trình.

### 230 · Tệp, ngoại lệ, JSON và CSV

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Đọc dữ liệu thư viện bằng context manager with. Mở tệp với encoding phù hợp như UTF-8 và dùng with để đóng cả khi có lỗi.
- [ ] Bắt đúng lỗi không tìm thấy tệp và sai định dạng. Tách lỗi I/O với lỗi parse JSON/CSV, báo tên tệp và dòng khi có thể mà không che mất nguyên nhân.
- [ ] Xuất JSON/CSV có tiếng Việt; kiểm tra round-trip đọc lại dữ liệu. Với CSV, dùng thư viện csv thay vì split dấu phẩy vì trường có thể chứa dấu phẩy hoặc dấu nháy.
- [ ] Kiểm tra JSON đọc lại có đúng kiểu và trường bắt buộc, không mặc định parse thành công đồng nghĩa dữ liệu hợp lệ.
- [ ] Thử Unicode, trường thiếu, dữ liệu rỗng và tệp không đủ quyền trong môi trường thử.

**Nguồn tham khảo miễn phí:**

- [Python Tutorial — tài liệu chính thức](https://docs.python.org/3/tutorial/)
  - **Phần cần đọc:** Tutorial chương 7 Input and Output,8 Errors and Exceptions; phần JSON trong thư viện chuẩn.
  - **Truy cập:** Toàn bộ tutorial miễn phí; phù hợp người đã biết một ngôn ngữ lập trình.

### 231 · Kiểu gợi ý và lớp trong Python

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Viết lớp hoặc dataclass cho dữ liệu sách. Chọn dataclass cho dữ liệu đơn giản, thêm phương thức chỉ khi có hành vi hoặc quy tắc cần giữ.
- [ ] Thêm type hints cho hàm nhận và trả dữ liệu. Ghi kiểu cho tham số và kết quả, thử một bộ kiểm tra kiểu tĩnh trên ví dụ nhỏ nếu môi trường hỗ trợ.
- [ ] Phân biệt gợi ý kiểu với kiểm tra dữ liệu lúc chạy; không dùng annotation thay validation. Dùng validation riêng ở biên nhập liệu, ví dụ năm phải là số trong miền chấp nhận.
- [ ] Thử hai instance có list mặc định để nhận ra cần default_factory khi dùng dataclass với dữ liệu thay đổi.
- [ ] So object Python được tham chiếu và C++ value semantics để tránh dự đoán sai về sao chép.

**Nguồn tham khảo miễn phí:**

- [Python Tutorial — tài liệu chính thức](https://docs.python.org/3/tutorial/)
  - **Phần cần đọc:** Tutorial chương 9 Classes; phần typing của thư viện chuẩn để đọc type hints.
  - **Truy cập:** Toàn bộ tutorial miễn phí; phù hợp người đã biết một ngôn ngữ lập trình.

### 232 · Iterator, generator và dữ liệu lớn

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Duyệt một tệp theo từng dòng thay vì đọc hết. Viết generator dùng yield, gọi next vài lần rồi duyệt phần còn lại để thấy trạng thái được giữ.
- [ ] Viết generator lọc bản ghi theo điều kiện. Phân biệt iterable có thể tạo iterator với iterator đang tiêu thụ và có thể hết.
- [ ] So thời gian và bộ nhớ trên dữ liệu tăng dần; giải thích tính lười của generator. Xử lý lỗi parse theo từng dòng với số dòng, không giữ tất cả dữ liệu chỉ để báo một lỗi.
- [ ] Đo bộ nhớ tương đối khi xử lý tệp lớn theo dòng, bảo đảm tác vụ thật sự được tiêu thụ chứ không chỉ tạo generator.
- [ ] Xác định tài nguyên tệp còn mở tới khi nào nếu generator còn đang dùng nó.

**Nguồn tham khảo miễn phí:**

- [Python Tutorial — tài liệu chính thức](https://docs.python.org/3/tutorial/)
  - **Phần cần đọc:** Tutorial chương 9: Iterators,Generators và Generator Expressions.
  - **Truy cập:** Toàn bộ tutorial miễn phí; phù hợp người đã biết một ngôn ngữ lập trình.

### 233 · Kiểm thử Python bằng pytest

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Viết test cho hàm đọc và chuẩn hóa bản ghi. Tách hàm thuần dễ test khỏi đọc terminal hoặc ghi tệp, xác định kết quả đúng trước khi viết assert.
- [ ] Dùng tham số hóa cho rỗng, hợp lệ và lỗi. Dùng tmp_path cho các test đọc/ghi để không phụ thuộc file trên máy người chạy.
- [ ] Chạy test bằng một lệnh, kiểm tra test thực sự phát hiện phiên bản cố ý sai. Thêm test ngoại lệ theo đúng kiểu lỗi và kiểm tra dữ liệu gốc không bị thay đổi ngoài ý muốn.
- [ ] Cố ý làm một lỗi như bỏ kiểm tra mã trùng để chắc test liên quan báo đỏ.
- [ ] Mỗi test tự tạo trạng thái cần dùng, không dựa test khác đã chạy trước.

**Nguồn tham khảo miễn phí:**

- [pytest — How-to guides](https://docs.pytest.org/en/stable/how-to/index.html)
  - **Phần cần đọc:** How-to: assertions,fixtures,parametrize và temporary directories; làm test cho code tự viết.
  - **Truy cập:** Tài liệu và thư viện miễn phí.

### 234 · Mảng số với NumPy

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tạo mảng, đọc shape, dtype và chọn lát cắt. So list lồng nhau với ndarray, kiểm tra shape sau mỗi phép chọn cột/hàng.
- [ ] Viết phép nhân ma trận và phép toán vector hóa. Phân biệt nhân từng phần tử bằng * với nhân ma trận bằng @ trên ví dụ không vuông.
- [ ] Thử broadcasting có hình dạng khác nhau; kiểm tra kết quả bằng ví dụ nhỏ. Thử broadcasting (n,1) với (n,) để thấy có thể tạo ma trận n×n ngoài ý định.
- [ ] Phân biệt view và copy khi cắt mảng, sửa một lát rồi kiểm tra mảng gốc.
- [ ] Chọn dtype đủ miền giá trị; NumPy int có thể tràn theo độ rộng kiểu dù int Python không có cùng giới hạn cố định.

**Nguồn tham khảo miễn phí:**

- [NumPy — Absolute basics for beginners](https://numpy.org/doc/stable/user/absolute_beginners.html)
  - **Phần cần đọc:** Các mục array creation,shape,indexing,broadcasting và basic operations; tự kiểm tra shape trước khi tính.
  - **Truy cập:** Toàn bộ tài liệu và ví dụ đọc/chạy tại máy miễn phí.

### 235 · Đọc và làm sạch dữ liệu bảng

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Đọc CSV bằng pandas, xem thiếu dữ liệu, trùng và kiểu cột. Xem head, shape, dtypes và thống kê thiếu trước khi sửa dữ liệu.
- [ ] Nhóm, nối bảng và tổng hợp số lượt mượn. Quy định cách xử lý dòng trùng, ngày sai và giá trị thiếu theo ý nghĩa cột, không điền 0 cho mọi cột.
- [ ] Không sửa dữ liệu gốc âm thầm; lưu quy tắc làm sạch và báo số hàng bị loại. Khi merge, kiểm tra khóa trùng và số hàng tăng bất thường do quan hệ nhiều–nhiều.
- [ ] Ghi mỗi bước làm sạch cùng số hàng ảnh hưởng để người khác tái hiện.
- [ ] Lưu bản kết quả mới và kiểm tra schema, tổng số bản ghi, vài thống kê so với dữ liệu gốc.

**Nguồn tham khảo miễn phí:**

- [pandas — Introductory tutorials](https://pandas.pydata.org/docs/getting_started/intro_tutorials/)
  - **Phần cần đọc:** Intro tutorials: read/write tabular data,select subsets,summary statistics,reshape và combine tables.
  - **Truy cập:** Tutorial và dữ liệu ví dụ công khai miễn phí.

### 236 · Báo cáo dữ liệu bằng biểu đồ

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Vẽ lượt mượn theo thời gian và phân bố một đại lượng có ý nghĩa. Chọn biểu đồ đường cho diễn biến thời gian, cột cho nhóm rời rạc và histogram cho phân bố theo mục tiêu.
- [ ] Đặt trục, đơn vị, chú thích và khoảng thời gian rõ. Sắp thời gian đúng, ghi ngày/tháng và đơn vị trên trục; không trộn các đơn vị vào một tỷ lệ khó hiểu.
- [ ] Đối chiếu con số trên hình với bảng gốc; xuất một báo cáo ngắn tái tạo được. Kiểm tra số tổng trong hình khớp bảng và nêu rõ dữ liệu đã lọc khoảng nào.
- [ ] Dùng nhãn, nét hoặc ký hiệu cùng màu để đọc được khi không phân biệt màu.
- [ ] Đưa mã tạo hình, dữ liệu đầu vào và cách chạy vào cùng báo cáo, không chỉ lưu ảnh cuối.

**Nguồn tham khảo miễn phí:**

- [Matplotlib — Tutorials](https://matplotlib.org/stable/tutorials/index.html)
  - **Phần cần đọc:** Quick start và các bài về Figure/Axes: line,scatter,histogram; đặt trục,đơn vị và legend đúng.
  - **Truy cập:** Tài liệu miễn phí; chạy hình ở máy cá nhân.

## 17. Web và API cho sản phẩm đầu tiên

### 237 · HTML và cấu trúc nội dung

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tạo trang danh sách sách bằng HTML có heading, danh sách và form. Dùng heading theo cấp, form có label gắn đúng id và thông báo lỗi gắn với trường liên quan.
- [ ] Gắn label với input, dùng button cho hành động. Chọn link cho điều hướng, button cho hành động; khai báo type của button trong form để tránh submit ngoài ý muốn.
- [ ] Kiểm tra điền form và đi tới các nút bằng bàn phím. Dùng cấu trúc danh sách/bảng phù hợp dữ liệu, không dùng thẻ chỉ vì nó trông đúng mặc định.
- [ ] Thử nhập bằng bàn phím, nhấn Enter và đọc thứ tự nội dung khi chưa có CSS.
- [ ] Tạo dữ liệu giả có tên dài để kiểm tra cấu trúc không phụ thuộc một ví dụ ngắn đẹp.

**Nguồn tham khảo miễn phí:**

- [MDN — Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
  - **Phần cần đọc:** Core modules: Structuring content with HTML,forms và semantic structure.
  - **Truy cập:** Chỉ dùng bài viết và bài thực hành MDN miễn phí; không yêu cầu khóa đối tác hoặc MDN Plus.

### 238 · CSS và bố cục đáp ứng

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Dùng box model, flex hoặc grid để làm danh sách và bảng chi tiết. Quan sát content,padding,border,margin của một ô trong DevTools để tìm nguyên nhân tràn.
- [ ] Thử trên chiều rộng nhỏ, xử lý chữ dài không tràn. Đặt kích thước linh hoạt, kiểm tra min-width và wrap cho tên sách dài.
- [ ] Đảm bảo tương phản chữ và trạng thái không chỉ phân biệt bằng màu. Dùng media query khi bố cục thật sự cần đổi, không tạo quá nhiều kích thước cố định cho từng thiết bị.
- [ ] Giữ trạng thái focus nhìn thấy, không xóa outline mà không có thay thế.
- [ ] Thử tăng cỡ chữ/zoom và kiểm tra nút, ô nhập vẫn bấm được, không đè lên nội dung.

**Nguồn tham khảo miễn phí:**

- [MDN — Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
  - **Phần cần đọc:** Core modules: CSS styling basics,CSS layout và responsive design.
  - **Truy cập:** Chỉ dùng bài viết và bài thực hành MDN miễn phí; không yêu cầu khóa đối tác hoặc MDN Plus.

### 239 · JavaScript và sự kiện giao diện

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Viết biến, hàm, mảng, object và xử lý sự kiện click. Phân biệt const giữ tham chiếu biến với việc object bên trong không thể thay đổi; thử cập nhật thuộc tính để hiểu.
- [ ] Đổi trạng thái một nhiệm vụ trên trang bằng thao tác người dùng. Đọc target/currentTarget và sự kiện nổi lên trong ví dụ danh sách có nút con.
- [ ] Đọc lỗi trong console; phân biệt dữ liệu ứng dụng với phần tử giao diện. Gắn xử lý sự kiện một cách rõ ràng, tránh tạo nhiều listener lặp sau mỗi lần cập nhật.
- [ ] Khi đưa tên sách ra DOM, dùng cơ chế văn bản thay vì ghép vào HTML tùy ý.
- [ ] Thử thao tác nhiều lần liên tiếp và kiểm tra dữ liệu, trạng thái nút, nội dung hiển thị đồng bộ.

**Nguồn tham khảo miễn phí:**

- [MDN — Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
  - **Phần cần đọc:** Dynamic scripting with JavaScript: variables,functions,events và DOM.
  - **Truy cập:** Chỉ dùng bài viết và bài thực hành MDN miễn phí; không yêu cầu khóa đối tác hoặc MDN Plus.

### 240 · Gọi API bất đồng bộ

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Dùng fetch và async/await lấy dữ liệu từ API cục bộ. Kiểm tra response.ok/status trước khi parse theo định dạng mong đợi, không coi body mọi phản hồi luôn là JSON hợp lệ.
- [ ] Hiển thị đang tải, rỗng, lỗi và thành công. Dùng try/catch/finally để tắt trạng thái tải và báo lỗi dễ hiểu.
- [ ] Phân biệt lỗi mạng với phản hồi HTTP lỗi; không mặc định fetch tự ném lỗi cho 404. Thử mạng chậm hoặc hai yêu cầu tìm kiếm gửi gần nhau; tránh phản hồi cũ ghi đè kết quả mới.
- [ ] Hủy yêu cầu không còn cần bằng cơ chế phù hợp hoặc kiểm tra phiên yêu cầu trước khi cập nhật.
- [ ] Không gửi khóa bí mật của server trong mã frontend; mọi người mở trang đều có thể tải mã này.

**Nguồn tham khảo miễn phí:**

- [MDN — Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
  - **Phần cần đọc:** Dynamic scripting: asynchronous JavaScript và Fetch API; xử lý loading,error và phản hồi đến sai thứ tự.
  - **Truy cập:** Chỉ dùng bài viết và bài thực hành MDN miễn phí; không yêu cầu khóa đối tác hoặc MDN Plus.

### 241 · React vừa đủ để dựng giao diện

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chia danh sách sách và bảng chi tiết thành component. Xác định state tối thiểu cần giữ, ví dụ selectedId và danh sách; các giá trị suy ra không nhất thiết có state riêng.
- [ ] Dùng props và state; cập nhật mảng mà không sửa trực tiếp state cũ. Truyền callback từ phần quản lý dữ liệu xuống component nút, tránh mỗi ô giữ một bản sao danh sách riêng.
- [ ] Đặt key ổn định và chỉ dùng effect khi đồng bộ với hệ thống bên ngoài; không cần học cả hệ sinh thái lúc này. Thử thêm/xóa/sắp lại danh sách với key là ID để không gắn nhầm trạng thái của ô.
- [ ] Khi cập nhật dựa vào state cũ, dùng kiểu cập nhật phù hợp để tránh giá trị cũ trong nhiều thao tác liên tiếp.
- [ ] Với effect có fetch/subscription, kiểm tra dependency và cleanup; không dùng effect để chữa mọi phép tính có thể làm ngay khi render.

**Khi nào quay lại:** Có thể dùng JavaScript thuần cho giao diện project; quay lại React khi muốn theo frontend hoặc sản phẩm cần quản lý giao diện phức tạp hơn.

**Nguồn tham khảo miễn phí:**

- [React — Learn](https://react.dev/learn)
  - **Phần cần đọc:** Learn: Describing the UI,Adding Interactivity và Managing State; chưa cần toàn bộ ecosystem.
  - **Truy cập:** Toàn bộ tài liệu và ví dụ tương tác trên trang miễn phí.

### 242 · Thiết kế API theo yêu cầu

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Liệt kê tài nguyên sách, độc giả và phiếu mượn. Với mỗi endpoint ghi method,path, tham số, request mẫu, response thành công và các lỗi cần xử lý.
- [ ] Viết ví dụ request/response, status và định dạng lỗi cho từng thao tác. Phân biệt mã tài nguyên do hệ thống cấp với vị trí hàng trong database.
- [ ] Quy định phân trang, tìm kiếm và hành vi khi tài nguyên không tồn tại. Quy định trường nào bắt buộc, kiểu dữ liệu, miền giá trị và cách phản hồi trường không hợp lệ.
- [ ] Chốt phân trang cần thứ tự ổn định và giới hạn tối đa để tránh một request lấy toàn bộ dữ liệu lớn.
- [ ] Không thay định dạng lỗi tùy từng endpoint nếu client cần xử lý thống nhất.

**Nguồn tham khảo miễn phí:**

- [FastAPI — Tutorial / User Guide](https://fastapi.tiangolo.com/tutorial/)
  - **Phần cần đọc:** Tutorial: First Steps,Path/Query Parameters,Request Body,Response Model và Status Code.
  - **Truy cập:** Toàn bộ tutorial miễn phí; chạy ứng dụng và test trên máy.

### 243 · Dựng API thư viện bằng FastAPI

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tạo endpoint đọc, tạo, sửa sách với schema kiểm tra dữ liệu. Dựng một endpoint đơn giản chạy được rồi thêm model đầu vào/đầu ra, không dồn toàn bộ dự án vào một tệp.
- [ ] Tổ chức router, phần nghiệp vụ và truy cập dữ liệu riêng. Cấu hình kết nối/cấu hình môi trường ở nơi riêng, tránh tạo phụ thuộc vòng giữa router và nghiệp vụ.
- [ ] Xem tài liệu OpenAPI tự sinh và thử cả dữ liệu sai. Xem tài liệu OpenAPI có đúng hợp đồng mình muốn, không chỉ chấp nhận mọi thứ tự sinh.
- [ ] Thử thiếu trường, sai kiểu, mã không tồn tại và dữ liệu hợp lệ qua HTTP thực.
- [ ] Chọn sync/async theo thư viện I/O dùng; khai báo async không tự làm thao tác blocking trở thành không chặn.

**Nguồn tham khảo miễn phí:**

- [FastAPI — Tutorial / User Guide](https://fastapi.tiangolo.com/tutorial/)
  - **Phần cần đọc:** Tutorial: First Steps,Path/Query Parameters,Request Body,Response Model và Status Code.
  - **Truy cập:** Toàn bộ tutorial miễn phí; chạy ứng dụng và test trên máy.

### 244 · Kết nối API với PostgreSQL

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Dùng driver hoặc ORM phổ biến, học transaction và vòng đời kết nối của công cụ đã chọn. Quy định một đơn vị công việc cần transaction nào, kết nối/session được tạo và đóng ở đâu trong mỗi request.
- [ ] Giữ quy tắc mượn trả trong giao dịch đúng ranh giới. Nếu dùng ORM, đọc SQL sinh ra và kiểm tra không xuất hiện nhiều query ngoài ý muốn khi lặp danh sách.
- [ ] Không nối trực tiếp chuỗi đầu vào vào SQL; chạy lại bài cạnh tranh. Map lỗi ràng buộc thành lỗi API phù hợp, không trả nguyên thông tin kết nối hoặc stack trace.
- [ ] Không giữ transaction trong lúc chờ dịch vụ ngoài nếu có thể tách rõ an toàn.
- [ ] Viết test tạo phiếu thành công, mượn trùng, dữ liệu liên quan không có và rollback khi một bước thất bại.

**Nguồn tham khảo miễn phí:**

- [FastAPI — Tutorial / User Guide](https://fastapi.tiangolo.com/tutorial/)
  - **Phần cần đọc:** Tutorial: SQL (Relational) Databases và Dependencies; đối chiếu PostgreSQL transaction trước khi ghép luồng mượn sách.
  - **Truy cập:** Toàn bộ tutorial miễn phí; chạy ứng dụng và test trên máy.

### 245 · Đăng nhập và phân quyền cơ bản

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Theo tutorial bảo mật của framework, dùng thư viện băm mật khẩu phù hợp. Chốt mô hình đăng nhập bằng session cookie hoặc bearer token theo tutorial phù hợp, không trộn hai cách mà chưa hiểu luồng.
- [ ] Phân biệt xác thực ai đang gọi với cho phép họ làm gì. Dùng thư viện password hashing và kiểm tra mật khẩu qua hàm verify; không tự so một chuỗi mã hóa ngẫu nhiên.
- [ ] Thêm quyền độc giả và quản lý; kiểm tra phía server cho từng thao tác nhạy cảm. Xác định cách lưu phiên, hết hạn, đăng xuất và xử lý khi thông tin xác thực không còn hợp lệ.
- [ ] Mọi endpoint ghi/sửa phải kiểm tra quyền và quyền trên đối tượng cụ thể, không tin role do client gửi.
- [ ] Với cookie, kiểm tra CSRF và thuộc tính cookie; với token, xét nơi lưu và nguy cơ lộ qua log hoặc XSS.
- [ ] Thử người chưa đăng nhập, vai trò sai và người đúng vai trò nhưng không sở hữu dữ liệu cần sửa.

**Thông tin thêm & Lưu ý bản chất:**

Không tự viết thuật toán mã hóa hoặc lưu mật khẩu dạng rõ. Với cookie, cần xét HttpOnly, Secure, SameSite và bảo vệ CSRF theo mô hình dùng.

**Nguồn tham khảo miễn phí:**

- [FastAPI — Tutorial / User Guide](https://fastapi.tiangolo.com/tutorial/)
  - **Phần cần đọc:** Tutorial Security: Current User,OAuth2/JWT và password hashing; bổ sung kiểm tra quyền đối tượng tại server.
  - **Truy cập:** Toàn bộ tutorial miễn phí; chạy ứng dụng và test trên máy.
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
  - **Phần cần đọc:** Authentication,Password Storage và Authorization Cheat Sheets: đối chiếu phần ứng dụng còn thiếu sau tutorial.
  - **Truy cập:** Toàn bộ bài viết miễn phí; chỉ thực hành trên ứng dụng và tài khoản thử của mình.

### 246 · Kiểm tra API như người dùng bên ngoài

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Thử thiếu trường, sai kiểu, tài nguyên không có và không đủ quyền. Lập ma trận endpoint × loại lỗi × status/body mong đợi, giữ thông báo đủ để client xử lý.
- [ ] Kiểm tra giới hạn kích thước, phân trang và thông báo lỗi không lộ chi tiết nội bộ. Thử vượt giới hạn chuỗi, trang quá lớn, ID sai kiểu và trường không được phép sửa.
- [ ] Viết test để người A không sửa hoặc xem phiếu riêng của người B. Tạo hai tài khoản thử, dùng ID của tài khoản kia để kiểm tra quyền trên từng bản ghi.
- [ ] Xác nhận lỗi phía server không để transaction dở hoặc tài nguyên kết nối bị rò.
- [ ] Viết test hồi quy cho ca từng phát hiện sai quyền hoặc dữ liệu, không chỉ test các phản hồi 200.
- [ ] Tự gửi request bằng công cụ ngoài giao diện: thiếu token, sai chủ sở hữu, dữ liệu sai và request lặp; ghi status/body và kiểm tra dữ liệu không bị đổi trái phép.

**Nguồn tham khảo miễn phí:**

- [FastAPI — Tutorial / User Guide](https://fastapi.tiangolo.com/tutorial/)
  - **Phần cần đọc:** Tutorial: Handling Errors,Testing và Security; tự gửi cả request không đi qua giao diện.
  - **Truy cập:** Toàn bộ tutorial miễn phí; chạy ứng dụng và test trên máy.

### 247 · Ghép giao diện với API

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Thay dữ liệu giả trên trang sách bằng API thật. Chốt trạng thái của mỗi thao tác: đang gửi, thành công, thất bại; nút phải phản ánh được trạng thái hiện tại.
- [ ] Hiển thị rõ kết quả mượn trả và lỗi từ server. Nếu khóa nút để tránh bấm lặp, vẫn bảo vệ trùng ở server vì client có thể gửi lại bằng cách khác.
- [ ] Xử lý bấm hai lần và phản hồi đến không đúng thứ tự; không để trạng thái giao diện nói thành công khi giao dịch thất bại. Chỉ cập nhật danh sách thành công khi đã có xác nhận, hoặc có cơ chế rollback rõ nếu dùng cập nhật lạc quan.
- [ ] Thử token hết hạn, request timeout và server trả lỗi nghiệp vụ như sách vừa được người khác mượn.
- [ ] Kiểm tra giao diện không giữ thông báo thành công cũ sau khi một thao tác mới thất bại.
- [ ] Nếu không học React, dùng trang HTML và JavaScript thuần để hoàn thành cùng luồng; tiêu chí là request, trạng thái lỗi và dữ liệu đúng, không phải tên framework.

**Nguồn tham khảo miễn phí:**

- [MDN — Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
  - **Phần cần đọc:** Dynamic scripting: asynchronous JavaScript và Fetch API; xử lý loading,error và phản hồi đến sai thứ tự.
  - **Truy cập:** Chỉ dùng bài viết và bài thực hành MDN miễn phí; không yêu cầu khóa đối tác hoặc MDN Plus.

### 248 · Chạy sản phẩm trên môi trường thử

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Build frontend; triển khai backend và database ở môi trường phát triển được phép. Tách cấu hình phát triển và triển khai; đặt URL API ở cấu hình có kiểm soát, không ghi cứng localhost cho người dùng thật.
- [ ] Cấu hình biến môi trường, HTTPS và CORS đúng miền cần dùng. Build từ mã nguồn sạch với đúng phụ thuộc rồi kiểm tra tệp đầu ra thực sự được phục vụ.
- [ ] Kiểm tra từ một trình duyệt sạch; biết GitHub Pages chỉ chứa frontend, không chạy backend Python. Cho frontend gọi đúng miền backend và cấu hình CORS theo mô hình xác thực; không mở mọi nguồn chỉ để hết lỗi.
- [ ] Kiểm tra HTTPS, routing, biến môi trường, log và kết nối database từ môi trường mới.
- [ ] Ghi cách nâng phiên bản và quay lại bản cũ nếu lỗi, giữ dữ liệu thật độc lập với việc thay mã.
- [ ] Không đưa backend Python/database vào GitHub Pages như thể đây là dịch vụ chạy server; dùng nền tảng phù hợp cho các phần đó.

**Nguồn tham khảo miễn phí:**

- [FastAPI — Tutorial / User Guide](https://fastapi.tiangolo.com/tutorial/)
  - **Phần cần đọc:** Deployment: Concepts và Server Workers; triển khai thử bằng tiến trình/container tại máy, không cần thuê dịch vụ.
  - **Truy cập:** Toàn bộ tutorial miễn phí; chạy ứng dụng và test trên máy.

## 19. Lý thuyết tính toán và ngôn ngữ lập trình

### 261 · Ngôn ngữ hình thức và DFA

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Phân biệt bảng chữ cái, chuỗi và tập chuỗi hợp lệ. Viết tập trạng thái, trạng thái đầu, tập chấp nhận và bảng chuyển cho từng ký tự của bảng chữ cái.
- [ ] Vẽ DFA nhận chuỗi có số lượng ký tự a chẵn. Thử chuỗi rỗng và các chuỗi độ dài 1–4, theo dõi trạng thái sau từng ký tự.
- [ ] Mô phỏng trên dữ liệu đúng, sai và chuỗi rỗng; không đồng nhất DFA với mọi chương trình. Giải thích mỗi trạng thái giữ thông tin gì về tiền tố đã đọc, như chẵn/lẻ số a.
- [ ] Kiểm tra hàm chuyển xác định đúng một trạng thái kế tiếp cho mỗi cặp trạng thái/ký tự trong DFA đầy đủ.
- [ ] Không đồng nhất trạng thái chấp nhận với phải dừng ngay khi tới; kết quả phụ thuộc sau khi đọc hết chuỗi.

**Nguồn tham khảo miễn phí:**

- [MIT 6.045J — Automata, Computability, and Complexity](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/)
  - **Phần cần đọc:** Lecture notes phần finite automata,regular languages và nondeterminism; chọn bài chuyển NFA/DFA nhỏ.
  - **Truy cập:** Chỉ dùng lecture notes, video và bài tập OCW công khai miễn phí; không bắt mua sách của syllabus.

### 262 · NFA và regular expression

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Viết regex cho một định dạng đầu vào đơn giản. Xác định NFA có thể có nhiều nhánh và nếu dùng epsilon thì cần tính epsilon-closure đúng.
- [ ] Chuyển NFA nhỏ sang DFA bằng tập trạng thái. Mỗi trạng thái DFA khi chuyển đổi biểu diễn một tập trạng thái NFA, trạng thái chấp nhận chứa ít nhất một trạng thái chấp nhận gốc.
- [ ] Đối chiếu các chuỗi được chấp nhận; xét giới hạn của mô hình chính quy. So toàn bộ chuỗi ngắn tới một độ dài giới hạn giữa NFA,DFA và regex bằng bộ thử.
- [ ] Phân biệt regex theo lý thuyết ngôn ngữ chính quy với các tiện ích regex thực tế có thể có tính năng vượt mô hình cơ bản.
- [ ] Dùng ví dụ yêu cầu nhớ số lượng cân bằng để hiểu một số ngôn ngữ không thể nhận bằng DFA hữu hạn.

**Nguồn tham khảo miễn phí:**

- [MIT 6.045J — Automata, Computability, and Complexity](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/)
  - **Phần cần đọc:** Lecture notes phần finite automata,regular languages và nondeterminism; chọn bài chuyển NFA/DFA nhỏ.
  - **Truy cập:** Chỉ dùng lecture notes, video và bài tập OCW công khai miễn phí; không bắt mua sách của syllabus.

### 263 · Văn phạm phi ngữ cảnh và PDA

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Viết văn phạm cho biểu thức có dấu ngoặc. Ghi terminal, nonterminal, luật sinh và ký hiệu bắt đầu trước khi sinh vài chuỗi.
- [ ] Vẽ cây phân tích và tìm ví dụ mơ hồ. Vẽ hai cây khác nhau cho cùng biểu thức nếu grammar mơ hồ, nối với kết quả tính có thể khác.
- [ ] Liên hệ stack với việc nhận dấu ngoặc lồng nhau và phân biệt với DFA. Tách ưu tiên toán tử bằng các tầng biểu thức/term/factor trong ví dụ số học.
- [ ] Với PDA, chỉ ra stack lưu điều gì khi đọc dấu mở và giảm thế nào khi đọc dấu đóng.
- [ ] Thử chuỗi đóng trước mở, thiếu đóng và ngoặc lồng; không chỉ thử biểu thức hợp lệ.

**Nguồn tham khảo miễn phí:**

- [MIT 6.045J — Automata, Computability, and Complexity](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/)
  - **Phần cần đọc:** Phần context-free languages,grammars và pushdown automata.
  - **Truy cập:** Chỉ dùng lecture notes, video và bài tập OCW công khai miễn phí; không bắt mua sách của syllabus.

### 264 · Máy Turing và khả năng tính toán

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Theo dõi máy Turing đơn giản trên một chuỗi ngắn. Chọn mô hình máy với băng, đầu đọc/ghi, trạng thái và quy tắc chuyển rõ, chạy tay từng bước trên input nhỏ.
- [ ] Phân biệt bài toán quyết định với bài toán tối ưu. Phân biệt máy dừng chấp nhận, dừng từ chối và chạy mãi nếu mô hình cho phép.
- [ ] Đọc ý nghĩa Church–Turing thesis như một luận đề, không coi là định lý chứng minh bằng thử nghiệm. Viết một bài toán quyết định dưới dạng trả yes/no rồi so với bài tìm một đối tượng thỏa điều kiện.
- [ ] Nêu ý của luận đề Church–Turing nối khả năng tính toán hiệu quả theo nghĩa cơ học với mô hình, không coi nó tự là bảo đảm chạy nhanh.
- [ ] Tách tính được về nguyên tắc khỏi tính được trong tài nguyên thực tế.

**Nguồn tham khảo miễn phí:**

- [MIT 6.045J — Automata, Computability, and Complexity](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/)
  - **Phần cần đọc:** Phần Turing machines,decidability,undecidability và halting problem; chú ý mô hình và giả thiết.
  - **Truy cập:** Chỉ dùng lecture notes, video và bài tập OCW công khai miễn phí; không bắt mua sách của syllabus.

### 265 · Bài toán không quyết định được

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Trình bày phát biểu bài toán dừng với đầu vào chương trình và dữ liệu. Ghi đầu vào bài toán dừng là mô tả chương trình và input của nó, yêu cầu thuật toán quyết định đúng cho mọi cặp.
- [ ] Đọc một chứng minh phản chứng ở mức phù hợp. Theo dõi giả sử có bộ quyết định rồi dựng chương trình đảo hành vi trên chính mô tả của nó.
- [ ] Phân biệt không có thuật toán tổng quát với không giải được mọi trường hợp cụ thể. Chỉ ra chỗ tạo mâu thuẫn, không dùng câu máy không đủ mạnh thay cho lập luận.
- [ ] Nêu vài chương trình cụ thể vẫn biết chắc dừng hoặc không dừng; kết quả không quyết định tổng quát không cấm phân tích từng trường hợp.
- [ ] Phân biệt undecidable với NP-hard hoặc đơn giản là bài chưa biết cách giải nhanh.

**Nguồn tham khảo miễn phí:**

- [MIT 6.045J — Automata, Computability, and Complexity](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/)
  - **Phần cần đọc:** Phần Turing machines,decidability,undecidability và halting problem; chú ý mô hình và giả thiết.
  - **Truy cập:** Chỉ dùng lecture notes, video và bài tập OCW công khai miễn phí; không bắt mua sách của syllabus.

### 266 · P, NP và phép quy dẫn

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Phân biệt tìm lời giải với kiểm tra chứng cứ trong thời gian đa thức. Gắn kích thước input với cách mã hóa, tránh coi một thuật toán phụ thuộc giá trị số là tự động đa thức theo số bit.
- [ ] Giải thích NP-hard và NP-complete; NP không có nghĩa là chắc chắn không đa thức. Với NP, mô tả chứng cứ và bộ kiểm tra đa thức trên một bài ví dụ.
- [ ] Theo dõi một quy dẫn đơn giản, chú ý đúng chiều quy dẫn; P so với NP vẫn là câu hỏi mở. Theo một phép quy dẫn A→B, giải thích nếu giải B hiệu quả thì dùng được để giải A, không đảo mũi tên tùy ý.
- [ ] Phân biệt NP-complete thuộc NP và NP-hard, trong khi NP-hard không tự yêu cầu thuộc NP.
- [ ] Không gọi mọi bài tối ưu là NP chỉ vì khó; nêu phiên bản quyết định và quan hệ của nó với bài tối ưu.

**Nguồn tham khảo miễn phí:**

- [MIT 6.045J — Automata, Computability, and Complexity](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/)
  - **Phần cần đọc:** Phần polynomial time,NP-completeness và reductions; phân biệt chưa biết thuật toán nhanh với đã chứng minh không tồn tại.
  - **Truy cập:** Chỉ dùng lecture notes, video và bài tập OCW công khai miễn phí; không bắt mua sách của syllabus.

### 267 · Khi bài toán không có lời giải nhanh đã biết

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] So tìm đường ngắn nhất với đường Hamilton hoặc TSP. Giữ cùng một đồ thị để so yêu cầu ít chi phí từ s tới t với yêu cầu thăm mọi đỉnh, chỉ ra ràng buộc nào tạo khác biệt.
- [ ] Tự giải chính xác trên n nhỏ bằng vét cạn/DP tập con. Với TSP nhỏ, kiểm tra mọi tour hoặc DP tập con, nêu tăng trưởng tài nguyên khi n tăng.
- [ ] Thử heuristic trên dữ liệu lớn hơn và báo rõ không bảo đảm tối ưu. Tạo heuristic gần nhất hoặc cải thiện cục bộ, so với tối ưu trên các trường hợp nhỏ biết đáp án.
- [ ] Báo gap trên dữ liệu đã thử và trường hợp heuristic kém, không biến kết quả thực nghiệm thành bảo đảm xấp xỉ nếu chưa chứng minh.
- [ ] Chọn giới hạn kích thước/thời gian và cách dừng rõ cho bộ giải thử.

**Nguồn tham khảo miễn phí:**

- [MIT 6.045J — Automata, Computability, and Complexity](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/)
  - **Phần cần đọc:** Phần polynomial time,NP-completeness và reductions; phân biệt chưa biết thuật toán nhanh với đã chứng minh không tồn tại.
  - **Truy cập:** Chỉ dùng lecture notes, video và bài tập OCW công khai miễn phí; không bắt mua sách của syllabus.

### 268 · Hệ kiểu, phạm vi và cách đánh giá

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] So kiểu tĩnh của C++ với kiểm tra lúc chạy trong Python. Viết ví dụ kiểu không phù hợp bị C++ báo khi biên dịch và Python chỉ báo khi đường chạy tương ứng thực thi.
- [ ] Phân biệt phạm vi từ vựng với thời gian sống của giá trị. Phân biệt một biến đang thấy theo lexical scope với đối tượng nó tham chiếu còn sống bao lâu.
- [ ] Theo dõi truyền giá trị, tham chiếu và closure qua ví dụ ngắn. Dùng hàm lồng/closure nhỏ để quan sát biến được giữ hoặc tra cứu, đối chiếu quy tắc của ngôn ngữ đang dùng.
- [ ] So truyền một object/list rồi thay nội dung với gán tên tham số sang object mới trong Python.
- [ ] Không diễn giải type hints Python như cưỡng chế kiểu lúc chạy.

**Nguồn tham khảo miễn phí:**

- [Composing Programs — 2nd edition](https://composingprograms.com/pages/)
  - **Phần cần đọc:** 2nd edition: chương 1 Building Abstractions with Functions,2 Building Abstractions with Data và 3 Interpreting Computer Programs; chỉ đọc scope,environment và functional/object-oriented theo nhiệm vụ.
  - **Truy cập:** Bản sách mở miễn phí. Ví dụ Python/Scheme: đọc để hiểu cơ chế, không bắt học thêm cả ngôn ngữ trước.

### 269 · Cùng bài toán qua nhiều cách lập trình

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Viết xử lý danh sách theo vòng lặp, hàm thuần và đối tượng. Chọn một yêu cầu duy nhất như lọc và tính tổng sách theo năm, dùng cùng dữ liệu để so ba cách.
- [ ] Chỉ ra phần có trạng thái thay đổi, tác dụng phụ và phần dễ kiểm thử. Ở cách hàm thuần, không sửa đầu vào và đưa phụ thuộc thành tham số rõ.
- [ ] Chọn cách đơn giản nhất cho bài; không coi một phong cách luôn tốt hơn. Ở cách hướng đối tượng, chỉ giữ trạng thái/hành vi thực sự thuộc đối tượng, không biến mọi phép tính thành lớp.
- [ ] So cách test, cách thay một quy tắc và độ rõ ràng, không chỉ so số dòng.
- [ ] Chỉ ra nơi tác dụng phụ cần thiết như ghi tệp và gom nó về ranh giới dễ kiểm soát.

**Nguồn tham khảo miễn phí:**

- [Composing Programs — 2nd edition](https://composingprograms.com/pages/)
  - **Phần cần đọc:** 2nd edition: chương 1 Building Abstractions with Functions,2 Building Abstractions with Data và 3 Interpreting Computer Programs; chỉ đọc scope,environment và functional/object-oriented theo nhiệm vụ.
  - **Truy cập:** Bản sách mở miễn phí. Ví dụ Python/Scheme: đọc để hiểu cơ chế, không bắt học thêm cả ngôn ngữ trước.

### 270 · Viết lexer cho ngôn ngữ nhỏ

**Loại:** Áp dụng | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chốt cú pháp số, tên biến, dấu +−*/ và dấu ngoặc. Viết ví dụ input và danh sách token mong đợi có loại, lexeme và vị trí bắt đầu.
- [ ] Tách chuỗi thành token có vị trí để báo lỗi. Phân biệt dấu trừ là token với cách parser hiểu trừ một ngôi/hai ngôi nếu đặc tả có hỗ trợ.
- [ ] Thử token không hợp lệ và số sai định dạng; giữ đặc tả ngắn. Xử lý khoảng trắng, kết thúc input và ký tự lạ bằng quy tắc rõ, báo dòng/cột thích hợp.
- [ ] Với tên và số nhiều ký tự, đọc hết phần thuộc token rồi mới chuyển giá trị, không chỉ cắt từng ký tự.
- [ ] Dùng nguồn tham khảo để hiểu ý tưởng; không chép ví dụ Java rồi nghĩ Python có cùng mọi quy tắc chạy.

**Khi nào quay lại:** Project đào sâu ngôn ngữ và trình biên dịch. Các ô lý thuyết tính toán và hệ kiểu trước đó vẫn thuộc nền KHMT.

**Nguồn tham khảo miễn phí:**

- [Composing Programs — 2nd edition](https://composingprograms.com/pages/)
  - **Phần cần đọc:** 2nd edition: chương 3 Interpreting Computer Programs, mục Exceptions,Interpreters và Languages for Abstraction; đặc tả lexer/parser và test lấy từ nhiệm vụ, không phải bản chép code Scheme sang Python.
  - **Truy cập:** Bản sách mở miễn phí. Ví dụ Python/Scheme: đọc để hiểu cơ chế, không bắt học thêm cả ngôn ngữ trước.

### 271 · Parser và cây cú pháp trừu tượng

**Loại:** Áp dụng | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Viết parser đệ quy xuống cho biểu thức có ưu tiên toán tử. Viết grammar nêu rõ ưu tiên và kết hợp của +,−,*,/ cùng ngoặc; AST phải phản ánh cấu trúc đó.
- [ ] Dựng AST rồi đánh giá biểu thức. Tách các hàm parse theo tầng ưu tiên, phân biệt tiêu thụ token với nhìn trước.
- [ ] Thử 2+3*4, biểu thức có ngoặc và thiếu ngoặc; báo đúng vị trí lỗi. Với 8−3−1, kiểm tra kết hợp trái cho kết quả theo đặc tả; với 2+3*4, nhân nằm sâu hơn cộng.
- [ ] Thử thiếu toán hạng, token thừa sau biểu thức và ngoặc không đóng, báo vị trí đủ để sửa.
- [ ] Tách dựng AST khỏi đánh giá để in cây và test parser độc lập.

**Khi nào quay lại:** Project đào sâu ngôn ngữ và trình biên dịch. Các ô lý thuyết tính toán và hệ kiểu trước đó vẫn thuộc nền KHMT.

**Nguồn tham khảo miễn phí:**

- [Composing Programs — 2nd edition](https://composingprograms.com/pages/)
  - **Phần cần đọc:** 2nd edition: chương 3 Interpreting Computer Programs, mục Exceptions,Interpreters và Languages for Abstraction; đặc tả lexer/parser và test lấy từ nhiệm vụ, không phải bản chép code Scheme sang Python.
  - **Truy cập:** Bản sách mở miễn phí. Ví dụ Python/Scheme: đọc để hiểu cơ chế, không bắt học thêm cả ngôn ngữ trước.

### 272 · Interpreter có biến và kiểm thử

**Loại:** Áp dụng | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Thêm phép gán và môi trường lưu biến vào interpreter. Định nghĩa bảng môi trường ánh xạ tên→giá trị, chốt phép gán tạo mới hay bắt buộc có tên trước.
- [ ] Phân biệt lỗi cú pháp, tên chưa tồn tại và lỗi khi đánh giá. Với mỗi loại AST, viết quy tắc đánh giá và cách lỗi lan lên thay vì bắt mọi lỗi rồi trả 0.
- [ ] Viết test và README mô tả cú pháp được hỗ trợ; so compiler với interpreter ở mức cơ chế. Thử tên chưa tồn tại, chia cho 0 và biểu thức có tác dụng cập nhật biến theo thứ tự đặc tả.
- [ ] Test cả lexer, parser và interpreter rồi thêm vài ca end-to-end từ chuỗi tới kết quả.
- [ ] README nêu cú pháp được hỗ trợ, ví dụ chạy và những gì chưa có như hàm hoặc vòng lặp để tránh ngộ nhận đây là ngôn ngữ hoàn chỉnh.

**Khi nào quay lại:** Project đào sâu ngôn ngữ và trình biên dịch. Các ô lý thuyết tính toán và hệ kiểu trước đó vẫn thuộc nền KHMT.

**Nguồn tham khảo miễn phí:**

- [Composing Programs — 2nd edition](https://composingprograms.com/pages/)
  - **Phần cần đọc:** 2nd edition: chương 3 Interpreting Computer Programs, mục Exceptions,Interpreters và Languages for Abstraction; đặc tả lexer/parser và test lấy từ nhiệm vụ, không phải bản chép code Scheme sang Python.
  - **Truy cập:** Bản sách mở miễn phí. Ví dụ Python/Scheme: đọc để hiểu cơ chế, không bắt học thêm cả ngôn ngữ trước.

## 20. Bảo mật ứng dụng

### 273 · Tài sản, đối thủ và mô hình đe dọa

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Vẽ nơi dữ liệu đi qua trong ứng dụng thư viện. Vẽ client, API, database, dịch vụ ngoài và đường dữ liệu đi qua; gắn danh tính nào được tin ở mỗi ranh giới.
- [ ] Liệt kê dữ liệu cần bảo vệ và ranh giới tin cậy. Xác định tài sản như thông tin độc giả, quyền quản lý và tính đúng phiếu mượn, không chỉ mật khẩu.
- [ ] Chọn vài nguy cơ thực tế theo đối tượng sử dụng; ưu tiên theo tác động và khả năng xảy ra. Viết tình huống đe dọa cụ thể: đổi ID để đọc phiếu người khác, gửi input quá lớn, lộ khóa trong log.
- [ ] Với mỗi tình huống, ghi điều kiện xảy ra, tác động, biện pháp giảm và cách kiểm tra biện pháp đó.
- [ ] Ưu tiên nguy cơ liên quan kiến trúc đang dùng, không chép nguyên một checklist dài không có ngữ cảnh.

**Nguồn tham khảo miễn phí:**

- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
  - **Phần cần đọc:** Threat Modeling Cheat Sheet: assets,trust boundaries,threats và mitigations.
  - **Truy cập:** Toàn bộ bài viết miễn phí; chỉ thực hành trên ứng dụng và tài khoản thử của mình.

### 274 · Encoding, hashing và encryption

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] So Base64, hàm băm và mã hóa bằng mục đích, đầu vào, đầu ra. Lấy cùng một dữ liệu thử qua Base64, băm và mã hóa bằng thư viện để so có khóa/khả năng khôi phục/mục đích.
- [ ] Phân biệt băm toàn vẹn với băm mật khẩu có salt và chi phí tính toán. Phân biệt chống đọc trộm với phát hiện sửa đổi; mã hóa không tự thay thế mọi yêu cầu xác thực và toàn vẹn.
- [ ] Dùng thư viện được duy trì; không tự thiết kế thuật toán bảo mật. Với mật khẩu, tìm hiểu salt ngẫu nhiên và thuật toán password hashing phù hợp, dùng hàm verify của thư viện.
- [ ] Không dùng SHA đơn thuần, encoding hoặc mã hóa có thể giải ngược như cách lưu mật khẩu mặc định.
- [ ] Đọc cách thư viện quản lý nonce/IV/key trong ví dụ đang dùng; không tái dùng giá trị cần duy nhất hoặc tự chế giao thức.

**Nguồn tham khảo miễn phí:**

- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
  - **Phần cần đọc:** Cryptographic Storage và Password Storage Cheat Sheets: phân biệt encoding,hashing,encryption; không tự thiết kế crypto.
  - **Truy cập:** Toàn bộ bài viết miễn phí; chỉ thực hành trên ứng dụng và tài khoản thử của mình.

### 275 · Ngăn SQL injection trong môi trường thử

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tạo đầu vào chứa ký tự đặc biệt cho API của mình. Dùng dữ liệu thử có dấu nháy và chuỗi giống cú pháp SQL để kiểm tra nó vẫn được xử lý như giá trị.
- [ ] Xác nhận driver dùng tham số tách khỏi câu SQL. Rà toàn bộ đường tạo truy vấn, không chỉ một endpoint đã có prepared statement.
- [ ] Kiểm tra phân quyền database và thông báo lỗi; chỉ thực hành trên hệ thống mình sở hữu hoặc được phép. Nếu cần tên cột sắp xếp động, chọn từ danh sách cho phép do server kiểm soát.
- [ ] Kiểm tra thông báo lỗi không lộ schema/kết nối và tài khoản database không có quyền ngoài nhu cầu.
- [ ] Viết một test hồi quy cho đường từng nối chuỗi input vào SQL, chỉ thực hành trên ứng dụng của mình hoặc được phép.

**Nguồn tham khảo miễn phí:**

- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
  - **Phần cần đọc:** SQL Injection Prevention Cheat Sheet: prepared statements và allow-list.
  - **Truy cập:** Toàn bộ bài viết miễn phí; chỉ thực hành trên ứng dụng và tài khoản thử của mình.

### 276 · XSS và đưa dữ liệu ra giao diện

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Phân biệt dữ liệu văn bản với HTML có thể thực thi. Liệt kê những nơi hiển thị dữ liệu do người dùng kiểm soát như tên sách, tên độc giả, thông báo và phần xem trước.
- [ ] Thử tên sách chứa ký tự < và > để kiểm tra hiển thị văn bản đúng. Ưu tiên chèn văn bản bằng cơ chế escape mặc định; xem kỹ các API bỏ qua escape của framework.
- [ ] Tránh chèn HTML tùy ý; nếu thật sự cần HTML, dùng cơ chế làm sạch phù hợp ngữ cảnh. Thử input có thẻ/ký tự HTML trong dữ liệu giả để xác nhận được hiển thị như chữ khi đó là yêu cầu.
- [ ] Nếu nghiệp vụ thật sự cho HTML, chọn bộ sanitizer theo ngữ cảnh, không tự lọc bằng vài lần replace.
- [ ] Xét URL và thuộc tính HTML như những ngữ cảnh riêng, không coi một cách escape dùng được cho tất cả nơi chèn.

**Nguồn tham khảo miễn phí:**

- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
  - **Phần cần đọc:** Cross Site Scripting Prevention Cheat Sheet: output encoding theo context và safe sinks.
  - **Truy cập:** Toàn bộ bài viết miễn phí; chỉ thực hành trên ứng dụng và tài khoản thử của mình.

### 277 · Cookie, CORS và CSRF

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Phân biệt nguồn gốc trình duyệt, quyền đọc phản hồi và việc gửi yêu cầu. Vẽ yêu cầu từ trang cùng nguồn và từ trang khác, xác định trình duyệt tự đính kèm thông tin xác thực nào.
- [ ] Kiểm tra cấu hình cookie và CSRF theo mô hình đăng nhập đã chọn. Hiểu CORS chủ yếu kiểm soát việc mã nguồn khác đọc phản hồi theo chính sách trình duyệt, không bảo đảm request nguy hiểm không được gửi.
- [ ] Không dùng CORS như cơ chế phân quyền phía server. Với đăng nhập cookie, áp dụng cơ chế CSRF do framework hỗ trợ và kiểm tra thuộc tính SameSite/Secure/HttpOnly phù hợp.
- [ ] Không dùng GET cho thao tác thay đổi dữ liệu vì tên endpoint có vẻ kín.
- [ ] Thử yêu cầu thiếu token/nguồn không hợp lệ trong môi trường cục bộ và kiểm tra server từ chối đúng, không chỉ frontend ẩn thao tác.

**Nguồn tham khảo miễn phí:**

- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
  - **Phần cần đọc:** Cross-Site Request Forgery Prevention và Session Management Cheat Sheets; CORS đối chiếu thêm MDN.
  - **Truy cập:** Toàn bộ bài viết miễn phí; chỉ thực hành trên ứng dụng và tài khoản thử của mình.

### 278 · Kiểm tra quyền theo từng đối tượng

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tạo hai tài khoản thử có vai trò giống nhau. Tạo A,B có cùng role và một tài khoản quản lý, lập quyền mong đợi cho từng tài nguyên/thao tác.
- [ ] Thay ID tài nguyên trong request và xác nhận không đọc/sửa tài nguyên trái phép. Thử đổi ID ở path, query và body, kể cả endpoint phụ như tải tệp hoặc xem lịch sử.
- [ ] Thêm test phân quyền ở server, không chỉ ẩn nút trên giao diện. Kiểm tra server suy người dùng từ phiên hợp lệ, không tin userId/role client tự khai.
- [ ] Xét quyền cho cả đọc, sửa, xóa và liệt kê; một endpoint chi tiết an toàn chưa đủ nếu danh sách vẫn lộ.
- [ ] Giữ ca kiểm thử quyền sau refactor để lỗi không quay lại khi thêm chức năng.

**Nguồn tham khảo miễn phí:**

- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
  - **Phần cần đọc:** Authorization và Insecure Direct Object Reference Prevention Cheat Sheets: kiểm tra quyền mỗi request và từng đối tượng.
  - **Truy cập:** Toàn bộ bài viết miễn phí; chỉ thực hành trên ứng dụng và tài khoản thử của mình.

### 279 · Quản lý bí mật và phụ thuộc

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Đưa khóa, mật khẩu kết nối vào cấu hình môi trường, không commit. Phân biệt giá trị cấu hình công khai ở frontend với secret chỉ được giữ ở server.
- [ ] Kiểm tra lịch sử mã nguồn của project thử trước khi công khai. Kiểm tra file env, history Git, log, ảnh chụp và tệp build xem có chứa thông tin xác thực không.
- [ ] Lập cách thay khóa nếu lộ và cập nhật thư viện theo cảnh báo có liên quan. Nếu một secret đã lộ, ưu tiên thu hồi/thay secret và đánh giá nơi bị lộ; chỉ xóa dòng khỏi commit mới không làm secret cũ hết hiệu lực.
- [ ] Theo dõi phụ thuộc trực tiếp/gián tiếp, đọc cảnh báo trong bối cảnh phiên bản/chức năng thật dùng rồi cập nhật và test.
- [ ] Tài khoản ứng dụng hoặc token tự động hóa chỉ nhận quyền và thời gian cần thiết, tránh dùng khóa quản trị cho mọi tác vụ.

**Nguồn tham khảo miễn phí:**

- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
  - **Phần cần đọc:** Secrets Management và Vulnerable Dependency Management Cheat Sheets.
  - **Truy cập:** Toàn bộ bài viết miễn phí; chỉ thực hành trên ứng dụng và tài khoản thử của mình.

### 280 · Đầu vào, upload và giới hạn tài nguyên

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Giới hạn độ dài chuỗi, kích thước request và loại tệp được phép. Validate kiểu, miền giá trị, độ dài và trường được phép tại server kể cả client đã kiểm trước.
- [ ] Không tin tên tệp người dùng để tạo đường dẫn trực tiếp. Với upload, giới hạn kích thước, kiểm tra nội dung theo nhu cầu và tạo tên lưu do server kiểm soát.
- [ ] Thử dữ liệu rất dài và sai kiểu trên môi trường thử; kiểm tra timeout và giới hạn tần suất phù hợp. Chuẩn hóa/kiểm tra đường dẫn để không thoát khỏi vùng lưu cho phép, không nối thẳng tên tệp input vào đường dẫn hệ thống.
- [ ] Đặt giới hạn tài nguyên như số bản ghi, thời gian xử lý hoặc tần suất theo mô hình app; kiểm tra phản hồi khi vượt ngưỡng.
- [ ] Thử các giá trị sát biên và dữ liệu sai định dạng, xác nhận lỗi không làm mất trạng thái hoặc sập dịch vụ.

**Nguồn tham khảo miễn phí:**

- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
  - **Phần cần đọc:** Input Validation,File Upload và Denial of Service Cheat Sheets.
  - **Truy cập:** Toàn bộ bài viết miễn phí; chỉ thực hành trên ứng dụng và tài khoản thử của mình.

### 281 · Cấu hình triển khai an toàn

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Bật HTTPS hợp lệ ở môi trường triển khai, kiểm tra cấu hình reverse proxy. Kiểm tra TLS kết thúc ở đâu và đoạn proxy→app có nằm trong ranh giới tin cậy đã chọn hay không.
- [ ] Không công khai trang debug, cổng database hoặc stack trace nội bộ. Chỉ tin các header chuyển tiếp từ proxy được cấu hình, không mặc định client bất kỳ khai đúng địa chỉ/HTTPS.
- [ ] Gắn quyền tối thiểu cho ứng dụng và kiểm tra bản sao lưu có kiểm soát truy cập. Tắt debug công khai, dùng cấu hình production đúng công cụ và kiểm tra trang lỗi thực tế.
- [ ] Không mở cổng database ra ngoài nếu ứng dụng không cần; kiểm tra các rule mạng theo kiến trúc thử.
- [ ] Thử phục hồi dữ liệu với quyền truy cập phù hợp, vì bản sao lưu cũng có thể làm lộ dữ liệu nếu bảo vệ kém.

**Nguồn tham khảo miễn phí:**

- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
  - **Phần cần đọc:** TLS và HTTP Security Headers Cheat Sheets; thử trên cấu hình của project.
  - **Truy cập:** Toàn bộ bài viết miễn phí; chỉ thực hành trên ứng dụng và tài khoản thử của mình.

### 282 · Rà bảo mật một luồng hoàn chỉnh

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn đăng nhập → tìm sách → mượn → trả và lập bảng nguy cơ. Lập ma trận tài khoản × thao tác × đối tượng, ghi cả trường hợp được phép và bị từ chối.
- [ ] Chạy lại các test xác thực, phân quyền, đầu vào và lỗi. Đi qua luồng với input sai, request lặp, phiên hết hạn và lỗi database để xem ranh giới bảo vệ có giữ.
- [ ] Ghi phát hiện, cách sửa và kiểm tra lại; không tuyên bố hệ thống an toàn tuyệt đối sau một checklist. Với mỗi phát hiện, lưu bằng chứng tái hiện tối thiểu, tác động và thay đổi sửa, tránh đưa dữ liệu thật vào báo cáo.
- [ ] Sau sửa, thử đúng tình huống cũ và một biến thể để tránh chỉ chặn một chuỗi input cụ thể.
- [ ] Kết luận phạm vi đã kiểm, điểm còn chưa kiểm và giả thiết môi trường thay vì ghi đã an toàn tuyệt đối.
- [ ] Tạo một test truy cập tài nguyên của người khác bằng hai tài khoản thử; xác nhận server từ chối và không rò dữ liệu, rồi giữ test làm hồi quy.

**Nguồn tham khảo miễn phí:**

- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
  - **Phần cần đọc:** Authorization và Insecure Direct Object Reference Prevention Cheat Sheets: kiểm tra quyền mỗi request và từng đối tượng.
  - **Truy cập:** Toàn bộ bài viết miễn phí; chỉ thực hành trên ứng dụng và tài khoản thử của mình.

## 21. Đồ họa, giao diện và khả năng tiếp cận

### 283 · Pixel, màu và biểu diễn ảnh

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Đọc kích thước, kênh màu và dung lượng một ảnh không nén. Chọn ảnh RGB/RGBA nhỏ, tính số byte thô theo chiều rộng×chiều cao×số kênh với độ sâu kênh đã chọn.
- [ ] Phân biệt độ phân giải, tọa độ ảnh và tọa độ màn hình. Phân biệt dung lượng giải nén trong bộ nhớ với tệp PNG/JPEG nén trên đĩa.
- [ ] Viết thao tác đổi độ sáng hoặc chuyển xám với giới hạn giá trị đúng. Quy định gốc tọa độ, hướng trục và thứ tự kênh của thư viện đang dùng.
- [ ] Khi chỉnh độ sáng, clamp về miền giá trị đúng thay vì để kiểu byte quấn vòng.
- [ ] Thử ảnh một màu và bảng ô màu để kiểm tra từng kênh và pixel biên, không chỉ xem một ảnh phức tạp bằng mắt.

**Nguồn tham khảo miễn phí:**

- [LearnOpenGL — bản web](https://learnopengl.com/)
  - **Phần cần đọc:** Getting started: Textures; màu,kênh và dữ liệu pixel. Chỉ đọc cơ chế ảnh trước khi đụng mã OpenGL.
  - **Truy cập:** Toàn bộ bài viết miễn phí; không yêu cầu sách in hoặc GPU cloud.

### 284 · Biến đổi hình học 2D

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Dùng canvas hoặc công cụ đồ họa để vẽ một đa giác. Định nghĩa điểm dạng vector cột hoặc hàng và dùng nhất quán khi nhân ma trận.
- [ ] Áp dụng tịnh tiến, quay, co giãn bằng ma trận tọa độ thuần nhất. Viết ma trận tịnh tiến, quay, co giãn trong tọa độ thuần nhất 2D; ghi đơn vị góc.
- [ ] Thử đổi thứ tự phép biến đổi, giải thích vị trí hình thay đổi ra sao. Chọn tâm quay rõ, nếu quay quanh tâm khác gốc thì thực hiện chuỗi tịnh tiến–quay–tịnh tiến ngược.
- [ ] Dùng điểm biết trước như (1,0) quay 90° để kiểm tra dấu và hướng trục màn hình.
- [ ] Đổi thứ tự hai phép biến đổi, vẽ và giải thích bằng tọa độ tính được thay vì chỉ nói chúng khác nhau.

**Nguồn tham khảo miễn phí:**

- [LearnOpenGL — bản web](https://learnopengl.com/)
  - **Phần cần đọc:** Getting started: Transformations và Coordinate Systems; phép biến đổi theo thứ tự.
  - **Truy cập:** Toàn bộ bài viết miễn phí; không yêu cầu sách in hoặc GPU cloud.

### 285 · Pipeline đồ họa 3D

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Theo dõi đỉnh từ tọa độ mô hình đến camera, phép chiếu và pixel. Theo dõi một đỉnh qua model, view, projection và phép chia phối cảnh, ghi không gian tọa độ ở từng bước.
- [ ] Phân biệt chiếu phối cảnh với trực giao. Phân biệt vị trí camera với phép biến đổi đưa thế giới về hệ camera.
- [ ] Mô tả vai trò rasterization, depth buffer và shading; không cần tự xây game engine. Thử hai vật cùng kích thước ở độ sâu khác để so chiếu phối cảnh với trực giao.
- [ ] Giải thích depth buffer giữ thông tin để chọn bề mặt nhìn thấy, không chỉ dựa thứ tự vẽ.
- [ ] Với shading, nhận diện vector pháp tuyến, hướng ánh sáng và phần dữ liệu gửi vào shader; chưa yêu cầu xây mọi hiệu ứng nâng cao.

**Khi nào quay lại:** Quay lại khi chọn đồ họa, công cụ trực quan hoặc muốn một project minh họa thuật toán; phần HCI và khả năng tiếp cận vẫn cần học.

**Nguồn tham khảo miễn phí:**

- [LearnOpenGL — bản web](https://learnopengl.com/)
  - **Phần cần đọc:** Getting started: Hello Triangle,Coordinate Systems và Camera; chỉ pipeline nền.
  - **Truy cập:** Toàn bộ bài viết miễn phí; không yêu cầu sách in hoặc GPU cloud.

### 286 · Thiết kế từ tác vụ người dùng

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn một tác vụ quan trọng của thư viện và viết các bước người dùng thực hiện. Mô tả ai làm tác vụ, trong hoàn cảnh nào và cần thông tin gì để quyết định bước tiếp.
- [ ] Vẽ bản nháp giao diện trước khi code. Viết đường đi chính và nhánh lỗi trước khi phác từng màn hình.
- [ ] Giảm việc người dùng phải nhớ, giữ phản hồi lỗi ở gần thao tác gây lỗi. Đặt nhãn theo ngôn ngữ người dùng như mã sách thay vì tên biến/database.
- [ ] Cho thấy trạng thái đang xử lý, kết quả và cách sửa lỗi tại chỗ có liên quan.
- [ ] So bản nháp với nhiệm vụ thật bằng cách tự đi qua thao tác, không chỉ nhận xét giao diện đẹp hay xấu.

**Nguồn tham khảo miễn phí:**

- [W3C WAI — Tutorials](https://www.w3.org/WAI/tutorials/)
  - **Phần cần đọc:** Tutorials: Page Structure,Menus và Forms; quan sát tác vụ thật theo checklist trong ô, không chỉ kiểm tra hình thức.
  - **Truy cập:** Hướng dẫn và ví dụ W3C miễn phí.

### 287 · Quan sát người dùng thử thật

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Nhờ 2–3 người thử một tác vụ với dữ liệu giả, có sự đồng ý. Đưa một yêu cầu tác vụ trung tính như tìm và mượn sách X, không chỉ dẫn nút phải bấm.
- [ ] Quan sát điểm mắc mà không chỉ dẫn ngay. Thông báo đây là thử sản phẩm chứ không chấm năng lực người tham gia, xin phép trước khi ghi lại nội dung.
- [ ] Ghi vấn đề, mức ảnh hưởng và sửa một vòng; không coi mẫu nhỏ là thống kê đại diện. Ghi nơi dừng, thao tác nhầm, thời gian tương đối và câu hỏi phát sinh; tách điều quan sát được với suy đoán lý do.
- [ ] Ưu tiên một vài lỗi ảnh hưởng hoàn thành tác vụ, sửa rồi thử lại với cùng tiêu chí.
- [ ] Không suy tỷ lệ lỗi của 2–3 người thành tỷ lệ chắc chắn của mọi người dùng.

**Nguồn tham khảo miễn phí:**

- [W3C WAI — Tutorials](https://www.w3.org/WAI/tutorials/)
  - **Phần cần đọc:** Tutorials: Page Structure,Menus và Forms; quan sát tác vụ thật theo checklist trong ô, không chỉ kiểm tra hình thức.
  - **Truy cập:** Hướng dẫn và ví dụ W3C miễn phí.

### 288 · Dùng được bằng bàn phím

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Đi toàn bộ luồng chính bằng Tab, Enter, Space và Escape. Kiểm tra Tab đi theo trình tự hợp lý, focus không bị lạc sau khi danh sách đổi hoặc hộp thoại mở.
- [ ] Gắn tên truy cập cho nút chỉ có biểu tượng, label cho input. Mọi nút chỉ có icon phải có tên truy cập, trạng thái đang chọn phải được biểu diễn bằng ngữ nghĩa phù hợp.
- [ ] Kiểm tra focus khi mở/đóng hộp thoại, thứ tự heading và thông báo lỗi. Hộp thoại cần tên, cách đóng bằng bàn phím và trả focus về nơi mở; không giữ người dùng kẹt trong một vùng không thoát được.
- [ ] Thử form có lỗi bằng bàn phím, xác định trường sai và lời hướng dẫn liên quan được tìm thấy.
- [ ] Nếu dùng screen reader để kiểm tra, ghi công cụ và phần đã nghe; không tự nhận đã kiểm khi chỉ nhìn DOM.

**Nguồn tham khảo miễn phí:**

- [W3C WAI — Tutorials](https://www.w3.org/WAI/tutorials/)
  - **Phần cần đọc:** Tutorials: Keyboard access trong menus/forms và labels/instructions; kiểm tra bằng bàn phím thật.
  - **Truy cập:** Hướng dẫn và ví dụ W3C miễn phí.

### 289 · Kiểm tra màn hình nhỏ và trạng thái lỗi

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Thử chiều rộng 320, 768 và màn hình desktop. Thử chuỗi dài, tên không có khoảng trắng, dữ liệu nhiều và cỡ chữ tăng chứ không chỉ trang mẫu ít chữ.
- [ ] Kiểm tra chữ dài, phóng to chữ, danh sách rỗng và mạng chậm. Kiểm tra nút không bị footer/header che, vùng cuộn nội dung thực sự kéo được trên màn hình nhỏ.
- [ ] Sửa tràn ngang, vùng bấm nhỏ và nội dung bị che; dùng chữ hoặc biểu tượng cùng màu trạng thái. Đặt kích thước vùng bấm đủ dùng và khoảng cách để không dễ chọn nhầm thao tác cạnh nhau.
- [ ] Ở trạng thái tải/rỗng/lỗi, vẫn giữ đường đi tiếp như thử lại hoặc quay về, không để canvas trống không giải thích.
- [ ] Đối chiếu cùng một tác vụ trên điện thoại và desktop để chắc phần bị thu gọn vẫn mở được.

**Nguồn tham khảo miễn phí:**

- [W3C WAI — Tutorials](https://www.w3.org/WAI/tutorials/)
  - **Phần cần đọc:** Tutorials: Page Structure,Images và Forms; thử phóng to,màn hình nhỏ,trạng thái lỗi.
  - **Truy cập:** Hướng dẫn và ví dụ W3C miễn phí.

### 290 · Làm một công cụ minh họa thuật toán

**Loại:** Áp dụng | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn BFS hoặc Dijkstra, hiển thị đồ thị nhỏ với số liệu kiểm soát. Tách thuật toán tính kết quả khỏi lớp dựng hình, lưu trạng thái từng bước bằng dữ liệu rõ.
- [ ] Cho chạy từng bước, làm nổi đỉnh và khoảng cách đang xét. Gắn nhãn đỉnh/cạnh và đơn vị trọng số; mũi tên chỉ hướng cạnh có hướng, không dùng trang trí làm sai ý nghĩa.
- [ ] Có đặt lại, chú thích điều kiện áp dụng và đối chiếu kết quả với thuật toán không giao diện. Cho người dùng chọn tốc độ, tiến một bước và đặt lại, trạng thái ban đầu phải dễ hiểu.
- [ ] Với Dijkstra, hiện dist, heap hoặc đỉnh đang chốt theo mức vừa đủ; không gắn nhãn đã tối ưu khi chỉ mới được phát hiện.
- [ ] Dùng một đồ thị có đáp án tính tay và ca không có đường để kiểm tra hình lẫn kết quả trước khi chia sẻ.

**Khi nào quay lại:** Quay lại khi chọn đồ họa, công cụ trực quan hoặc muốn một project minh họa thuật toán; phần HCI và khả năng tiếp cận vẫn cần học.

**Nguồn tham khảo miễn phí:**

- [W3C WAI — Tutorials](https://www.w3.org/WAI/tutorials/)
  - **Phần cần đọc:** Tutorials: Images,Tables và Forms; chọn cách biểu diễn thuật toán mà nhãn và thao tác vẫn dùng được.
  - **Truy cập:** Hướng dẫn và ví dụ W3C miễn phí.

## 22. Nền tảng AI và Machine Learning

### 291 · Tự kiểm tra trước nền tảng AI và ML

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Làm các mục sau trước khi mở lời giải cũ. Ghi từng mục: tự làm được / cần gợi ý / chưa học; không cộng thành điểm đoán mức giỏi chung.
- [ ] Tính tích một ma trận 2×2 với vector, giải thích kích thước kết quả.
- [ ] Tính gradient của x²+2y² tại (1,1) và một bước đi ngược gradient; mắc nền thì quay lại ô toán liên kết.
- [ ] Giải thích vì sao không được dùng điểm test để chọn mô hình; nếu chưa học ML thì ghi chưa học rồi học đúng ô chia dữ liệu.
- [ ] Sau khi thử, chỉ ôn lại mục chưa tự làm được theo các liên kết bên dưới. Chưa học là điểm bắt đầu bình thường; không tự đánh dấu cả chặng hoàn thành và không cần làm lại toàn bộ kho 28tech.

**Ô cần ôn theo kết quả kiểm tra:**

- [ ] 152 · Ma trận là một phép biến đổi (`linear-transform`)
- [ ] 159 · Đạo hàm riêng và gradient (`calculus-gradient`)
- [ ] 295 · Train, validation, test và rò rỉ dữ liệu (`ml-split`)

**Thông tin thêm & Lưu ý bản chất:**

Bài tự kiểm tra để chọn điểm ôn, không có chấm tự động. Code cũ chỉ mở sau lượt thử; khi đã tự làm được một mục, vẫn kiểm tra bằng ca biên hoặc biến thể trước khi đi nhanh qua phần tương ứng.

### 292 · AI, học máy và bài toán tìm kiếm

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Phân biệt luật viết tay, tìm kiếm và học từ dữ liệu. Với bài tìm đường, định nghĩa một trạng thái gồm những thông tin nào để quyết định bước tiếp, không lưu thừa cả lịch sử nếu không cần.
- [ ] Biểu diễn một bài tìm đường bằng trạng thái, hành động và chi phí. Viết trạng thái đầu, điều kiện đạt đích, các hành động hợp lệ và chi phí chuyển.
- [ ] Chọn BFS, uniform-cost search hoặc A* theo điều kiện thay vì gọi mọi lời giải là học máy. So tìm kiếm theo cấu trúc bài toán với mô hình học tham số từ ví dụ có dữ liệu.
- [ ] Với mỗi cách, nêu thông tin phải có sẵn và tiêu chí đánh giá kết quả, tránh gắn nhãn AI thay cho giải thích cơ chế.
- [ ] Làm một ví dụ luật rõ ràng vẫn là giải pháp tốt hơn huấn luyện mô hình không cần thiết.

**Nguồn tham khảo miễn phí:**

- [Dive into Deep Learning — bản web](https://d2l.ai/)
  - **Phần cần đọc:** Chương 1 Introduction: learning problems,data và các giới hạn; phần tìm kiếm đọc riêng MIT AI nếu cần.
  - **Truy cập:** Toàn bộ sách, code và bài tập web miễn phí. Dùng dữ liệu nhỏ/CPU cho ô nền; không cần thuê GPU.

### 293 · A* và heuristic

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tự cài A* trên lưới có chi phí bước không âm. Định nghĩa g(n) là chi phí đã đi, h(n) là ước lượng còn lại và f(n)=g(n)+h(n).
- [ ] Dùng heuristic không vượt chi phí còn lại và hiểu vai trò tính nhất quán khi chốt đỉnh. Trên lưới bốn hướng chi phí bước cố định, xét heuristic Manhattan và kiểm tra điều kiện không vượt chi phí thật.
- [ ] Đối chiếu với Dijkstra; thử heuristic bằng 0 và mô tả số đỉnh phải mở rộng. Phân biệt admissible với consistent; nếu heuristic không consistent thì cách đóng đỉnh/reopen phải được xem lại.
- [ ] Dùng heap theo f, vẫn giữ g tốt nhất và bỏ bản ghi cũ theo cách cài.
- [ ] Đếm số đỉnh mở rộng để so với Dijkstra, đồng thời kiểm tra tổng chi phí đường trả về bằng nhau khi điều kiện tối ưu được bảo đảm.
- [ ] Thử h=0, đích không tới được và chướng ngại làm đường vòng; không xem đường thẳng trên hình là khoảng cách đi được thực tế.

**Nguồn tham khảo miễn phí:**

- [MIT 6.034 — Artificial Intelligence](https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/)
  - **Phần cần đọc:** Lecture videos: Search và Optimal Search — branch and bound,A* và heuristic; chạy tay đồ thị nhỏ trước khi cài.
  - **Truy cập:** Lecture video,notes và bài tập OCW miễn phí; không cần mua sách.

### 294 · Hồi quy, phân loại và phân cụm

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn ví dụ dự đoán số, nhãn và nhóm tương đồng. Ghi một hàng dữ liệu đại diện cho đối tượng hay thời điểm nào, và lúc dự đoán được phép biết những trường gì.
- [ ] Xác định đặc trưng, nhãn, đơn vị dự đoán và cách lấy dữ liệu. Với hồi quy, xác định đơn vị sai số; với phân loại, xác định tập nhãn và chi phí nhầm từng loại.
- [ ] Nêu một baseline đơn giản để mô hình phải vượt qua. Tạo baseline như trung bình, nhãn phổ biến hoặc luật hiện có trước khi dùng mô hình phức tạp.
- [ ] Xem quy mô, thiếu dữ liệu, trùng đối tượng và nhãn sai ở mẫu đầu vào.
- [ ] Nếu không có nhãn, chốt mục tiêu phân cụm khám phá thay vì diễn giải cụm như sự thật đã biết.

**Nguồn tham khảo miễn phí:**

- [scikit-learn — User Guide](https://scikit-learn.org/stable/user_guide.html)
  - **Phần cần đọc:** User Guide: Supervised learning,Unsupervised learning và Choosing the right estimator.
  - **Truy cập:** Tài liệu, code và dữ liệu nhỏ miễn phí; các bài trong roadmap chạy được trên CPU.

### 295 · Train, validation, test và rò rỉ dữ liệu

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Xác định đơn vị chia: hàng độc lập, người dùng, thiết bị hoặc thời gian; tránh cùng đối tượng rò sang train và test.
- [ ] Nếu dự đoán tương lai, giữ thứ tự thời gian và loại thông tin chỉ biết sau thời điểm cần dự đoán.
- [ ] Chỉ fit scaler, imputer, chọn đặc trưng hoặc encoder trên train, rồi áp các tham số đó lên validation/test.
- [ ] Đặt validation cho chọn mô hình/siêu tham số, giữ test tới lúc đã chốt lựa chọn.
- [ ] Kiểm tra bản sao/trùng gần giống giữa các tập, đặc biệt dữ liệu tăng cường hoặc nhiều hàng của một người.
- [ ] Lưu ID hoặc quy tắc chia để mọi mô hình được so trên cùng các phần dữ liệu.

**Nguồn tham khảo miễn phí:**

- [scikit-learn — User Guide](https://scikit-learn.org/stable/user_guide.html)
  - **Phần cần đọc:** Common pitfalls: data leakage; Cross-validation: train_test_split,group/time split.
  - **Truy cập:** Tài liệu, code và dữ liệu nhỏ miễn phí; các bài trong roadmap chạy được trên CPU.

### 296 · Hồi quy tuyến tính từ đầu

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Dùng NumPy cài dự đoán tuyến tính, MSE và gradient descent. Chốt shape X,y,w,b và viết phương trình dự đoán bằng phép nhân ma trận, kiểm tra kích thước mọi bước.
- [ ] Kiểm tra gradient bằng sai phân trên bài nhỏ. Viết rõ MSE đang lấy trung bình theo số mẫu, từ đó suy gradient nhất quán với hệ số đang dùng.
- [ ] So với bộ giải thư viện, ghi đường học và tác động của bước học. Tạo dữ liệu tuyến tính giả biết hệ số để kiểm tra cài đặt có thể học gần đúng khi nhiễu thấp.
- [ ] So gradient giải tích với sai phân trên một vài tham số và kích thước thật nhỏ.
- [ ] Thử dữ liệu chưa chuẩn hóa khiến bước học khó chọn, quan sát loss và kiểm tra overflow/NaN.
- [ ] So với thư viện trên cùng split và phép tiền xử lý, không so hai kết quả khác dữ liệu rồi kết luận thuật toán tốt hơn.

**Nguồn tham khảo miễn phí:**

- [scikit-learn — User Guide](https://scikit-learn.org/stable/user_guide.html)
  - **Phần cần đọc:** Linear Models: Ordinary Least Squares; tự cài bản nhỏ trước khi so với estimator.
  - **Truy cập:** Tài liệu, code và dữ liệu nhỏ miễn phí; các bài trong roadmap chạy được trên CPU.

### 297 · Logistic regression và ngưỡng quyết định

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Dùng sigmoid và log loss cho bài phân loại nhị phân. Định nghĩa nhãn 0/1, logit z và xác suất sigmoid(z), phân biệt xác suất với quyết định sau chọn ngưỡng.
- [ ] Phân biệt điểm số, xác suất ước lượng và nhãn sau chọn ngưỡng. Viết log loss và xem vì sao dự đoán tự tin nhưng sai bị phạt lớn.
- [ ] Xét chuẩn hóa dữ liệu và ổn định số; dùng hàm thư viện phù hợp khi chạy thực tế. Dùng hàm ổn định số hoặc loss nhận logits theo thư viện, tránh tự log(0) do làm tròn.
- [ ] Thử hai ngưỡng để thấy precision/recall có thể thay đổi dù mô hình không đổi.
- [ ] Kiểm tra cách xử lý imbalance và regularization theo bài; không nghĩ đổi tên hồi quy thành phân loại là đủ giải mọi dữ liệu.

**Nguồn tham khảo miễn phí:**

- [scikit-learn — User Guide](https://scikit-learn.org/stable/user_guide.html)
  - **Phần cần đọc:** Linear Models: Logistic regression; Tuning the decision threshold: phân biệt score,probability và nhãn.
  - **Truy cập:** Tài liệu, code và dữ liệu nhỏ miễn phí; các bài trong roadmap chạy được trên CPU.

### 298 · Đánh giá đúng bài toán

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tính confusion matrix, precision, recall và F1 bằng tay trên tập nhỏ. Tự lập 10–20 nhãn thật/dự đoán, đếm TP,FP,TN,FN trước khi dùng thư viện.
- [ ] Tạo ví dụ lớp hiếm mà accuracy cao vẫn vô dụng. Xử lý rõ trường hợp mẫu số bằng 0 theo quy ước đánh giá, không bỏ các ca khó khỏi báo cáo.
- [ ] Chọn metric và ngưỡng theo chi phí sai lầm được nêu rõ; không chỉ báo một con số đẹp. Với lớp hiếm, so luôn dự đoán âm với mô hình thật để thấy accuracy dễ đánh lừa.
- [ ] Chọn ngưỡng bằng validation và chi phí sai lầm, không tối ưu ngưỡng trên test.
- [ ] Nếu dùng ROC-AUC hoặc PR-AUC, hiểu nó đánh giá trên điểm số và xem công cụ đang dùng định nghĩa nào; không thay mọi metric bằng một AUC.
- [ ] Báo số mẫu mỗi lớp để người đọc hiểu độ tin cậy của kết quả.

**Nguồn tham khảo miễn phí:**

- [scikit-learn — User Guide](https://scikit-learn.org/stable/user_guide.html)
  - **Phần cần đọc:** Metrics and scoring: chọn classification/regression metric theo câu hỏi và baseline.
  - **Truy cập:** Tài liệu, code và dữ liệu nhỏ miễn phí; các bài trong roadmap chạy được trên CPU.

### 299 · Overfitting, regularization và kiểm định chéo

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] So lỗi train với validation khi tăng độ phức tạp mô hình. Giữ cùng split, tăng dần độ phức tạp hoặc thời gian huấn luyện và vẽ train/validation loss.
- [ ] Dùng regularization và cross-validation phù hợp cách dữ liệu được tạo. Thử giảm độ phức tạp, thêm regularization hoặc tăng dữ liệu phù hợp, nêu mình đang chữa dấu hiệu nào.
- [ ] Giải thích bias–variance ở mức trực quan và kiểm tra bằng đường học. Trong cross-validation, giữ mọi tiền xử lý được fit bên trong từng fold.
- [ ] Chọn cách chia theo nhóm/thời gian nếu các mẫu không độc lập; K-fold ngẫu nhiên không dùng được cho mọi bài.
- [ ] Báo độ dao động các fold, không coi một lần chia cho điểm tốt nhất là đại diện chắc chắn.
- [ ] Không tiếp tục thử siêu tham số trên test sau khi kết quả validation đã được chốt.

**Nguồn tham khảo miễn phí:**

- [scikit-learn — User Guide](https://scikit-learn.org/stable/user_guide.html)
  - **Phần cần đọc:** Cross-validation,hyper-parameter tuning và validation curves; giữ test tới bước đánh giá cuối.
  - **Truy cập:** Tài liệu, code và dữ liệu nhỏ miễn phí; các bài trong roadmap chạy được trên CPU.

### 300 · Decision tree và random forest

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Huấn luyện cây quyết định, giới hạn độ sâu và quan sát overfitting. Đọc tiêu chí chia, độ sâu, số mẫu tối thiểu ở lá và kiểu dự đoán cuối của cây.
- [ ] So random forest với baseline trên cùng cách chia dữ liệu. Thử cây rất sâu và cây bị giới hạn để quan sát sai khác train/validation.
- [ ] Kiểm tra tầm quan trọng đặc trưng một cách thận trọng; không suy ra quan hệ nhân quả. Với random forest, ghi số cây và cấu hình chính, giữ seed khi so.
- [ ] Kiểm tra feature importance có thể bị ảnh hưởng bởi cách đo, đặc trưng tương quan và rò rỉ dữ liệu.
- [ ] Xem các ví dụ mô hình sai để quyết định sửa đặc trưng/dữ liệu hay thuật toán thay vì chỉ tăng số cây.

**Nguồn tham khảo miễn phí:**

- [scikit-learn — User Guide](https://scikit-learn.org/stable/user_guide.html)
  - **Phần cần đọc:** Decision Trees và Ensemble methods: random forest; xem overfitting,feature importance và giới hạn diễn giải.
  - **Truy cập:** Tài liệu, code và dữ liệu nhỏ miễn phí; các bài trong roadmap chạy được trên CPU.

### 301 · K-means và phân cụm

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Phân biệt nhãn có sẵn với nhóm do thuật toán tìm; không tự gán ý nghĩa nghiệp vụ cho số hiệu cluster.
- [ ] Chạy tay một vòng gán cụm rồi cập nhật tâm trên vài điểm 2D; tính tổng bình phương khoảng cách trước và sau.
- [ ] Thử thay thang đo một thuộc tính, khởi tạo và số cụm; dùng nhiều lần khởi tạo, ghi seed và kiểm tra cụm rỗng.
- [ ] Đánh giá bằng đặc điểm dữ liệu và mục đích sử dụng; dựng ví dụ cụm không lồi khiến K-means không phù hợp.

**Nguồn tham khảo miễn phí:**

- [scikit-learn — User Guide](https://scikit-learn.org/stable/user_guide.html)
  - **Phần cần đọc:** Clustering: K-means,initialization,scaling và limitations.
  - **Truy cập:** Tài liệu, code và dữ liệu nhỏ miễn phí; các bài trong roadmap chạy được trên CPU.

### 302 · PCA và giảm chiều dữ liệu

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Ôn vector riêng và phép chiếu; tạo dữ liệu 2D gần một đường thẳng để giải thích hướng giữ phương sai lớn.
- [ ] Fit bước chuẩn hóa và PCA chỉ trên train, dùng cùng phép biến đổi cho validation/test; không fit lại trên tập đánh giá.
- [ ] Đọc explained variance ratio và chọn số chiều theo mục tiêu; so chất lượng mô hình với bản không giảm chiều.
- [ ] Thử khôi phục dữ liệu từ tọa độ giảm chiều, đo sai số và phân biệt giảm chiều với chọn nguyên vài cột.
- [ ] Nếu chưa học SVD, dùng trực giác phép chiếu và vector riêng; chỉ quay lại ô SVD khi muốn hiểu cách tính số sâu hơn.

**Nguồn tham khảo miễn phí:**

- [scikit-learn — User Guide](https://scikit-learn.org/stable/user_guide.html)
  - **Phần cần đọc:** Decomposing signals in components: PCA; kết hợp Pipelines và preprocessing để tránh leakage.
  - **Truy cập:** Tài liệu, code và dữ liệu nhỏ miễn phí; các bài trong roadmap chạy được trên CPU.

### 303 · Pipeline thí nghiệm tái lập được

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Gói tiền xử lý và mô hình vào pipeline của thư viện. Gói bước chọn cột, xử lý thiếu, encoding/scaling và mô hình thành chuỗi có thể fit lại từ đầu.
- [ ] Lưu seed, phiên bản dữ liệu, tham số và metric. Lưu cách chia cùng phiên bản hoặc dấu nhận diện dữ liệu, không chỉ lưu model cuối.
- [ ] So ít nhất hai mô hình với cùng bộ chia; theo dõi thử nghiệm thay vì ghi đè kết quả cũ. Mỗi thí nghiệm ghi cấu hình, metric validation và ghi chú thay đổi so baseline.
- [ ] Nếu chọn mô hình bằng search, dùng budget và không gian tham số vừa sức, không tìm rộng thiếu kiểm soát.
- [ ] Thử chạy lại từ môi trường sạch và xác nhận chênh lệch trong phạm vi mong đợi; ghi những nguồn không xác định còn tồn tại.
- [ ] Giữ test cuối chưa dùng cho tới khi cần đánh giá lựa chọn đã chốt.

**Nguồn tham khảo miễn phí:**

- [scikit-learn — User Guide](https://scikit-learn.org/stable/user_guide.html)
  - **Phần cần đọc:** Pipelines and composite estimators,Common pitfalls và Model persistence; tái lập bằng dữ liệu/seed/môi trường.
  - **Truy cập:** Tài liệu, code và dữ liệu nhỏ miễn phí; các bài trong roadmap chạy được trên CPU.

### 304 · Tensor và đạo hàm tự động

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tạo tensor có shape phù hợp trong PyTorch. Tạo tensor nhỏ, chỉ bật requires_grad cho tham số cần học và tính một hàm vô hướng để gọi backward.
- [ ] Theo dõi forward, loss, backward và bước optimizer trên bài tuyến tính. Đối chiếu gradient của ví dụ y=x² hoặc hồi quy một biến với công thức tay.
- [ ] So gradient của một tham số với cách tính tay; không quên xóa gradient giữa các bước. Theo vòng lặp zero_grad → forward → loss → backward → step, hiểu gradient có thể được cộng dồn nếu không xóa.
- [ ] Phân biệt tensor chứa dữ liệu với computation graph, tránh vô tình giữ graph qua nhiều bước nếu không cần.
- [ ] Khi quan sát số để log, tách khỏi graph theo cách thư viện hướng dẫn để không giữ tài nguyên ngoài ý muốn.
- [ ] Không dùng no_grad bao quanh phần forward đang cần huấn luyện.

**Khi nào quay lại:** Đào sâu deep learning sau nền ML. Học theo thứ tự trong nhóm nếu chọn AI; có thể chạy ví dụ nhỏ trên CPU, không cần thuê GPU.

**Nguồn tham khảo miễn phí:**

- [PyTorch — Tutorials](https://docs.pytorch.org/tutorials/)
  - **Phần cần đọc:** Tutorial Learn the Basics: Tensors và Automatic Differentiation; chạy ví dụ nhỏ trên CPU rồi so gradient tính tay.
  - **Truy cập:** Toàn bộ tutorial miễn phí; dùng CPU cho ví dụ nhỏ.
- [Dive into Deep Learning — bản web](https://d2l.ai/)
  - **Phần cần đọc:** §2.1 Data Manipulation và §2.5 Automatic Differentiation.
  - **Truy cập:** Toàn bộ sách, code và bài tập web miễn phí. Dùng dữ liệu nhỏ/CPU cho ô nền; không cần thuê GPU.

### 305 · Mạng neural nhỏ và vòng huấn luyện

**Loại:** Luyện | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Huấn luyện MLP trên một bộ dữ liệu nhỏ có sẵn, ghi nguồn và cách chia. Ghi shape dữ liệu theo batch, số đặc trưng và số lớp, thử forward một batch trước khi chạy nhiều epoch.
- [ ] Phân biệt chế độ train/eval và phần không cần gradient lúc đánh giá. Chọn loss phù hợp nhãn/đầu ra; nếu CrossEntropyLoss nhận logits thì không tự softmax lần nữa chỉ vì thấy đây là phân loại.
- [ ] Lưu model, nạp lại và xác nhận dự đoán giống trong điều kiện đã kiểm soát. Tách vòng train và validation, dùng model.train/model.eval đúng khi có dropout hoặc batch normalization.
- [ ] Biết eval không tự tắt autograd; dùng cơ chế không ghi gradient trong phần đánh giá nếu phù hợp.
- [ ] Log loss/metric theo số mẫu nhất quán, không lấy trung bình các batch không đều một cách sai trọng số.
- [ ] Lưu checkpoint cùng cấu hình mô hình/tiền xử lý; nạp lại rồi so dự đoán trên một input cố định.

**Khi nào quay lại:** Đào sâu deep learning sau nền ML. Học theo thứ tự trong nhóm nếu chọn AI; có thể chạy ví dụ nhỏ trên CPU, không cần thuê GPU.

**Nguồn tham khảo miễn phí:**

- [Dive into Deep Learning — bản web](https://d2l.ai/)
  - **Phần cần đọc:** §5.1–5.4: MLP,implementation,forward/backprop và numerical stability.
  - **Truy cập:** Toàn bộ sách, code và bài tập web miễn phí. Dùng dữ liệu nhỏ/CPU cho ô nền; không cần thuê GPU.

### 306 · CNN và phép tích chập

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Dùng ảnh một kênh 4×4 và kernel 2×2, chạy tay từng cửa sổ để tính một feature map; nói rõ phép đang dùng là cross-correlation như thư viện.
- [ ] Chọn stride,padding rồi tính kích thước đầu ra, kiểm tra bằng PyTorch; phân biệt số kênh đầu vào với số filter.
- [ ] Giải thích chia sẻ trọng số, vùng tiếp nhận và pooling; so số tham số với một lớp fully connected trên cùng đầu vào.
- [ ] Huấn luyện mạng CNN nhỏ trên dữ liệu miễn phí và CPU với tập con vừa sức; đối chiếu baseline, split và lỗi dự đoán.

**Khi nào quay lại:** Đào sâu deep learning sau nền ML. Học theo thứ tự trong nhóm nếu chọn AI; có thể chạy ví dụ nhỏ trên CPU, không cần thuê GPU.

**Nguồn tham khảo miễn phí:**

- [Dive into Deep Learning — bản web](https://d2l.ai/)
  - **Phần cần đọc:** §7.1–7.6: convolution,padding,stride,channels,pooling và LeNet; chỉ mạng nhỏ trước.
  - **Truy cập:** Toàn bộ sách, code và bài tập web miễn phí. Dùng dữ liệu nhỏ/CPU cho ô nền; không cần thuê GPU.

### 307 · Embedding và biểu diễn đối tượng bằng vector

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Lập bảng từ vựng nhỏ, ánh xạ token sang ID rồi dùng ma trận embedding để lấy vector; viết shape của ID và tensor kết quả.
- [ ] Phân biệt ID là chỉ mục với khoảng cách có nghĩa; hoán đổi ID và đổi tương ứng các hàng để kiểm tra mô hình biểu diễn.
- [ ] Dùng một bước cập nhật đơn giản để quan sát hàng nào nhận gradient; giải thích vector được học từ mục tiêu và dữ liệu.
- [ ] Xử lý token chưa biết/padding rõ ràng; không khẳng định hai vector gần nhau luôn đồng nghĩa trong mọi tác vụ.

**Khi nào quay lại:** Đào sâu deep learning sau nền ML. Học theo thứ tự trong nhóm nếu chọn AI; có thể chạy ví dụ nhỏ trên CPU, không cần thuê GPU.

**Nguồn tham khảo miễn phí:**

- [Dive into Deep Learning — bản web](https://d2l.ai/)
  - **Phần cần đọc:** Phần Natural Language Processing: Pretraining, mục Word Embedding và Embedding Layers; kiểm tra ID/shape trước khi đọc mô hình lớn.
  - **Truy cập:** Toàn bộ sách, code và bài tập web miễn phí. Dùng dữ liệu nhỏ/CPU cho ô nền; không cần thuê GPU.

### 308 · Scaled dot-product attention và mask

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Giải nghĩa query,key,value rồi ghi shape Q,K,V trên chuỗi ba token; xác định phép nhân QKᵀ hợp lệ.
- [ ] Tính điểm, chia cho căn bậc hai kích thước key, softmax theo trục key rồi nhân V trên dữ liệu nhỏ.
- [ ] Thêm causal mask và padding mask, kiểm tra trọng số vị trí bị chặn bằng 0 sau softmax; tránh hàng bị mask hết.
- [ ] So kết quả chạy tay với thư viện; không đồng nhất một phép attention với toàn bộ Transformer hoặc mô hình ngôn ngữ.

**Khi nào quay lại:** Đào sâu deep learning sau nền ML. Học theo thứ tự trong nhóm nếu chọn AI; có thể chạy ví dụ nhỏ trên CPU, không cần thuê GPU.

**Nguồn tham khảo miễn phí:**

- [Dive into Deep Learning — bản web](https://d2l.ai/)
  - **Phần cần đọc:** §11.1 Queries,Keys,and Values; §11.3 Attention Scoring Functions; chưa cần toàn chương Transformer.
  - **Truy cập:** Toàn bộ sách, code và bài tập web miễn phí. Dùng dữ liệu nhỏ/CPU cho ô nền; không cần thuê GPU.

### 309 · Dùng LLM và đánh giá đầu ra

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tạo tập câu hỏi nhỏ có đáp án hoặc tiêu chí kiểm tra rõ. Tách tập câu hỏi dùng phát triển prompt khỏi tập giữ lại để đánh giá, ghi đáp án/tiêu chí trước khi xem đầu ra.
- [ ] So prompt trực tiếp với thêm ngữ cảnh tài liệu; ghi nguồn cho nội dung được trích. Bao gồm câu hỏi có tài liệu trả lời, tài liệu thiếu dữ kiện, mơ hồ và chứa chỉ dẫn gây nhiễu trong nội dung được truy xuất.
- [ ] Thử câu hỏi ngoài tài liệu và yêu cầu gây nhiễu; đo lỗi thay vì coi trả lời trôi chảy là đúng. Với câu trả lời cần nguồn, kiểm tra đoạn trích thật sự hỗ trợ kết luận, không chỉ tồn tại một URL.
- [ ] Đo tỷ lệ đúng theo tiêu chí, mức từ chối phù hợp, chi phí và thời gian nếu có dữ liệu, không đánh giá chỉ bằng giọng văn.
- [ ] Nếu dùng RAG, tách lỗi không truy xuất được đoạn đúng với lỗi mô hình diễn giải sai đoạn đã có.
- [ ] Giữ dữ liệu thử công khai/giả lập và giới hạn chi tiêu nếu dùng API, lưu phiên bản mô hình/cấu hình để so các lần chạy.

**Thông tin thêm & Lưu ý bản chất:**

Nếu cần API trả phí, chọn hạn mức trước; có thể dùng mô hình cục bộ hoặc dữ liệu giả. Không gửi dữ liệu riêng tư vào dịch vụ chưa được phép.

**Nguồn tham khảo miễn phí:**

- [Dive into Deep Learning — bản web](https://d2l.ai/)
  - **Phần cần đọc:** Phần Natural Language Processing và các mục về language models; dùng rubric và dữ liệu thử nhỏ trong nhiệm vụ, không bắt gọi API trả phí.
  - **Truy cập:** Toàn bộ sách, code và bài tập web miễn phí. Dùng dữ liệu nhỏ/CPU cho ô nền; không cần thuê GPU.

### 310 · Project ML có baseline và phân tích lỗi

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn một bộ dữ liệu công khai có giấy phép rõ, phạm vi nhỏ. Đồ án Học máy Thống kê — Bộ phân loại Thư rác Naive Bayes (Multinomial Naive Bayes Spam Classifier): Vận dụng trực tiếp Định lý Bayes với giả định độc lập có điều kiện giữa các từ vựng.
- [ ] Dựng baseline, pipeline, mô hình cải thiện và đánh giá test cuối. Kỹ thuật tính toán xác suất trên không gian Log (Log-space Probability): log P(Spam|W) = log P(Spam) + sum log P(w_i|Spam) để ngăn chặn triệt để hiện tượng tràn số thực dưới (Floating-point Underflow) khi nhân hàng trăm xác suất nhỏ hơn 1.
- [ ] Phân tích ví dụ sai, giới hạn áp dụng và viết báo cáo để người khác chạy lại; không chỉ nộp notebook có điểm số. Kỹ thuật làm trơn Laplace (Laplace Add-1 Smoothing) xử lý các từ vựng mới chưa từng xuất hiện trong tập huấn luyện.
- [ ] Đánh giá toàn diện mô hình: Ma trận nhầm lẫn (Confusion Matrix), Accuracy, Precision, Recall, và F1-Score; mô phỏng Monte Carlo Cross-Validation đánh giá độ tin cậy.
- [ ] Tham khảo đặc tả kỹ thuật chi tiết tại docs/projects/04-NAIVE-BAYES-CLASSIFIER.md.
- [ ] Người khác phải chạy lại được từ hướng dẫn, dữ liệu công khai và seed; đối chiếu baseline bằng cùng split/metric và tự giải thích ba lỗi mô hình điển hình.

**Thông tin thêm & Lưu ý bản chất:**

Đồ án Học máy Thống kê — Phân loại Thư rác Naive Bayes (Multinomial Naive Bayes Spam Classifier): Vận dụng Định lý Bayes với giả định độc lập có điều kiện, chuyển sang không gian Log chống tràn số thực dưới (Underflow), kỹ thuật làm trơn Laplace (Add-1 Smoothing), Ma trận nhầm lẫn và F1-Score. Tài liệu: docs/projects/04-NAIVE-BAYES-CLASSIFIER.md.

**Nguồn tham khảo miễn phí:**

- [scikit-learn — User Guide](https://scikit-learn.org/stable/user_guide.html)
  - **Phần cần đọc:** Pipelines and composite estimators,Common pitfalls và Model persistence; tái lập bằng dữ liệu/seed/môi trường.
  - **Truy cập:** Tài liệu, code và dữ liệu nhỏ miễn phí; các bài trong roadmap chạy được trên CPU.

## 23. Hệ phân tán và thiết kế hệ thống

### 311 · Thiết kế từ tải và yêu cầu

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chốt người dùng, tính năng, độ trễ và mức sẵn sàng mong muốn cho thư viện. Viết một kịch bản tải cụ thể với số người hoạt động, lượt đọc/ghi và dữ liệu mỗi lượt, kèm khoảng biến động dự kiến.
- [ ] Ước lượng số yêu cầu, dữ liệu và giả thiết thay vì chọn công nghệ trước. Phân biệt yêu cầu phải có như không mượn trùng với mong muốn như tải nhanh ở giờ cao điểm.
- [ ] Vẽ một server và một database làm phương án ban đầu. Từ giả thiết suy ra số request/giây và dung lượng, ghi đơn vị để người khác kiểm tra.
- [ ] Bắt đầu một app/database, chỉ thêm thành phần khi nó giải một nút thắt hoặc yêu cầu đã chỉ ra.
- [ ] Ghi rủi ro chưa biết cần đo thay vì đưa ngay một kiến trúc nhiều service theo mẫu.

**Nguồn tham khảo miễn phí:**

- [Site Reliability Engineering — sách web Google](https://sre.google/sre-book/table-of-contents/)
  - **Phần cần đọc:** Các chương Service Level Objectives và Load Balancing at the Frontend: giới hạn tải và mục tiêu phục vụ.
  - **Truy cập:** Toàn bộ sách web miễn phí; chỉ chọn chương liên quan, không cần dùng Google Cloud.

### 312 · Tăng cấu hình và chia tải

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Phân biệt scale up với scale out. Nguyên lý mở rộng hệ thống (Scalability Principles): Phân biệt Scale-Up (Vertical Scaling — tăng CPU/RAM cho một máy chủ) vs Scale-Out (Horizontal Scaling — nhân bản nhiều máy chủ ứng dụng chạy song song).
- [ ] Đặt load balancer trước nhiều bản ứng dụng và xét nơi lưu session. Thiết kế tầng ứng dụng phi trạng thái (Stateless Application Tier): Chuyển toàn bộ session, tệp và trạng thái dùng chung sang Redis/Database để bất kỳ instance nào cũng có thể xử lý request.
- [ ] Nêu phần vẫn là nút thắt nếu database chưa thay đổi. Nguyên lý bộ cân bằng tải (Load Balancer): Hoạt động ở tầng 4 (TCP) hoặc tầng 7 (HTTP); làm chủ các thuật toán điều phối Round Robin, Weighted Least Connections, và Băm nhất quán (Consistent Hashing).
- [ ] Đo lường các chỉ số hiệu năng then chốt: Throughput (RPS - Requests Per Second), Latency ở các phân vị p50, p95, p99, và Độ sẵn sàng (High Availability: 99.9% vs 99.99%).

**Thông tin thêm & Lưu ý bản chất:**

Nguyên lý Mở rộng Hệ thống (Scalability Principles): Phân biệt Scale-Up (Vertical Scaling) vs Scale-Out (Horizontal Scaling). Thiết kế tầng ứng dụng phi trạng thái (Stateless Application Tier), các thuật toán cân bằng tải (Round Robin, Least Connections, Consistent Hashing), đo lường Throughput (RPS), Latency (p50, p95, p99), và High Availability.

**Nguồn tham khảo miễn phí:**

- [Site Reliability Engineering — sách web Google](https://sre.google/sre-book/table-of-contents/)
  - **Phần cần đọc:** Các chương Service Level Objectives và Load Balancing at the Frontend: giới hạn tải và mục tiêu phục vụ.
  - **Truy cập:** Toàn bộ sách web miễn phí; chỉ chọn chương liên quan, không cần dùng Google Cloud.

### 313 · Cache và dữ liệu cũ

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Thêm cache cho truy vấn đọc nhiều, ít thay đổi. Chiến lược lưu bộ đệm phân tán (Distributed Caching): Mô hình Cache-Aside (Lazy Loading) — ứng dụng đọc cache trước, nếu miss mới truy vấn DB và nạp ngược lại cache với thời gian sống TTL (Time-To-Live) phù hợp.
- [ ] Chọn cache key, TTL và quy tắc vô hiệu hóa khi sửa dữ liệu. Hiểu rõ chiến lược vô hiệu hóa cache (Cache Invalidation) khi dữ liệu gốc bị cập nhật để bảo đảm tính nhất quán cuối cùng (Eventual Consistency).
- [ ] Thử cache miss, dữ liệu cũ và cache bị mất; hệ thống vẫn phải có nguồn dữ liệu gốc. Phòng chống 3 thảm họa cache kinh điển: 1. Thủng cache (Cache Penetration) — dùng Bloom Filter hoặc lưu giá trị rỗng; 2. Sập cache hàng loạt (Cache Avalanche) — thêm jitter ngẫu nhiên vào TTL; 3. Nứt cache khóa nóng (Cache Stampede) — dùng khóa phân tán Mutex để chỉ một luồng nạp lại DB.
- [ ] Không để sự cố dừng cache làm tê liệt hoặc mất mát nguồn dữ liệu chính.

**Thông tin thêm & Lưu ý bản chất:**

Chiến lược lưu bộ đệm phân tán (Distributed Caching): Mô hình Cache-Aside (Lazy Loading), thiết lập TTL hợp lý, phòng chống 3 thảm họa cache: Cache Penetration (dùng Bloom Filter), Cache Avalanche (thêm jitter ngẫu nhiên vào TTL), và Cache Stampede (dùng Mutex Locking).

**Nguồn tham khảo miễn phí:**

- [Site Reliability Engineering — sách web Google](https://sre.google/sre-book/table-of-contents/)
  - **Phần cần đọc:** Các chương Addressing Cascading Failures,Handling Overload và Data Processing Pipelines: lỗi,retry và kiểm soát tải; dựng ví dụ nhỏ theo nhiệm vụ.
  - **Truy cập:** Toàn bộ sách web miễn phí; chỉ chọn chương liên quan, không cần dùng Google Cloud.

### 314 · Replication và sharding

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Phân biệt nhân bản dữ liệu với chia tập dữ liệu. Vẽ một bản chính và các replica, phân biệt ghi được chấp nhận lúc nào với replica đã áp dụng xong.
- [ ] Theo dõi một lần ghi và một lần đọc từ replica bị chậm. Tạo timeline ghi ở một nơi rồi đọc nơi khác còn cũ để hiểu replication lag.
- [ ] Chọn khóa chia dữ liệu và thử tình huống phân bố lệch; không chia nhỏ khi chưa có nhu cầu đo được. Với sharding, chọn key và thử dữ liệu lệch một nhóm nhận phần lớn tải.
- [ ] Liệt kê truy vấn phải đi nhiều shard và cách xử lý khóa/quan hệ bị chia.
- [ ] Ghi đánh đổi failover, nhất quán, backup và vận hành; nhân bản không tự thay cho sao lưu khỏi lỗi xóa nhầm.

**Nguồn tham khảo miễn phí:**

- [MIT 6.5840 — Distributed Systems](https://pdos.csail.mit.edu/6.824/)
  - **Phần cần đọc:** Schedule/lecture notes: replication,consistency,fault tolerance và partitions; chỉ đọc phần khái niệm,không bắt làm hết lab sau đại học.
  - **Truy cập:** Chỉ đọc lecture notes/paper công khai miễn phí theo chủ đề; không yêu cầu đăng ký MIT, Gradescope hay dịch vụ cloud. Đây là nguồn sau đại học, chỉ đọc phạm vi đã ghi.

### 315 · Lỗi từng phần và CAP

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Phân biệt server chết với server chậm mà chưa biết tình trạng. Dùng ví dụ request timeout mà server có thể đã commit để thấy client không biết chắc tác vụ đã xảy ra chưa.
- [ ] Mô tả đánh đổi consistency và availability khi có network partition theo định nghĩa CAP. Đọc định nghĩa consistency/availability trong CAP, không đồng nhất C với chữ consistency của ACID.
- [ ] Không diễn giải CAP là tùy ý chọn hai trong ba mọi lúc. Khi hai phần mạng không liên lạc, chỉ ra một thao tác cụ thể phải chờ/từ chối hay trả dữ liệu có thể cũ.
- [ ] Tách lỗi kết nối, tiến trình chết và phản hồi chậm, vì cùng triệu chứng timeout có nhiều nguyên nhân.
- [ ] Chỉ nêu bảo đảm trong mô hình/giả thiết đã chọn, không dùng khẩu hiệu chọn hai trong ba cho mọi tình huống.

**Nguồn tham khảo miễn phí:**

- [MIT 6.5840 — Distributed Systems](https://pdos.csail.mit.edu/6.824/)
  - **Phần cần đọc:** Schedule/lecture notes: replication,consistency,fault tolerance và partitions; chỉ đọc phần khái niệm,không bắt làm hết lab sau đại học.
  - **Truy cập:** Chỉ đọc lecture notes/paper công khai miễn phí theo chủ đề; không yêu cầu đăng ký MIT, Gradescope hay dịch vụ cloud. Đây là nguồn sau đại học, chỉ đọc phạm vi đã ghi.

### 316 · Hàng đợi cho tác vụ nền

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tách gửi thông báo giả khỏi request mượn sách. Định nghĩa một message có ID, nội dung tối thiểu, số lần thử và cách nhận biết đã xử lý.
- [ ] Định nghĩa trạng thái tác vụ và cách ghi nhận hoàn thành. Chỉ ACK khi phần công việc cần bảo đảm đã được ghi nhận theo thiết kế, không báo xong trước khi lưu.
- [ ] Thử worker chết giữa chừng; chấp nhận thông điệp có thể được giao lại. Thử worker chết sau xử lý nhưng trước ACK để quan sát việc message có thể được giao lại.
- [ ] Cho handler chịu được lặp hoặc dùng ghi nhận idempotency phù hợp; không dựa vào niềm tin queue luôn giao đúng một lần.
- [ ] Theo dõi backlog, thời gian chờ và tác vụ thất bại quá số lần thử để có chỗ xử lý riêng.

**Nguồn tham khảo miễn phí:**

- [Site Reliability Engineering — sách web Google](https://sre.google/sre-book/table-of-contents/)
  - **Phần cần đọc:** Các chương Addressing Cascading Failures,Handling Overload và Data Processing Pipelines: lỗi,retry và kiểm soát tải; dựng ví dụ nhỏ theo nhiệm vụ.
  - **Truy cập:** Toàn bộ sách web miễn phí; chỉ chọn chương liên quan, không cần dùng Google Cloud.

### 317 · Idempotency và thử lại an toàn

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Thêm idempotency key cho thao tác tạo phiếu mượn hoặc tác vụ phù hợp. Chọn key đại diện một ý định nghiệp vụ, quy định cùng key nhưng payload khác phải bị xử lý rõ.
- [ ] Gửi lại cùng yêu cầu sau timeout và kiểm tra không tạo hai bản ghi. Lưu key và kết quả cùng ranh giới giao dịch thích hợp để hai request đồng thời không tạo hai thao tác.
- [ ] Dùng timeout, backoff và giới hạn số lần thử; không retry mọi lỗi vô hạn. Phân biệt lỗi nên thử lại như tạm mất kết nối với lỗi dữ liệu/quyền thường không nên lặp.
- [ ] Dùng backoff có giới hạn và độ ngẫu nhiên khi phù hợp để tránh mọi client thử lại cùng lúc.
- [ ] Thử timeout sau commit rồi gửi lại cùng key, kiểm tra dữ liệu cuối và phản hồi không mâu thuẫn.
- [ ] Nêu phạm vi bảo đảm của cơ chế, không tự gọi toàn bộ hệ thống exactly-once nếu còn tác dụng phụ ngoài giao dịch chưa kiểm soát.

**Nguồn tham khảo miễn phí:**

- [Site Reliability Engineering — sách web Google](https://sre.google/sre-book/table-of-contents/)
  - **Phần cần đọc:** Các chương Addressing Cascading Failures,Handling Overload và Data Processing Pipelines: lỗi,retry và kiểm soát tải; dựng ví dụ nhỏ theo nhiệm vụ.
  - **Truy cập:** Toàn bộ sách web miễn phí; chỉ chọn chương liên quan, không cần dùng Google Cloud.

### 318 · Đồng thuận và leader ở mức nền tảng

**Loại:** Học | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tìm hiểu vì sao nhiều bản sao cần thống nhất thứ tự cập nhật. Vẽ 3 hoặc 5 nút, đặt ai là leader/follower và theo dõi term cùng log index.
- [ ] Theo dõi leader, term và đa số trong một ví dụ Raft nhỏ. Mô phỏng mất leader, bầu lại bằng đa số và điều xảy ra khi một phần mạng không đủ đa số.
- [ ] Phân biệt đã nhận, đã ghi log và đã commit; không tự triển khai Raft để dùng thật ngay. Phân biệt log mới được nhận ở một nút với entry đã commit theo quy tắc giao thức.
- [ ] Đọc tại sao leader cũ hoặc bản ghi cũ không được tự ý ghi đè quyết định đã commit.
- [ ] Dùng mô phỏng/đọc paper để hiểu an toàn và tiến triển, chưa tự khẳng định bản demo của mình đủ dùng cho dữ liệu thật.

**Khi nào quay lại:** Quay lại khi đào sâu hệ phân tán; phần lỗi, retry, cache và thiết kế từ yêu cầu vẫn là kiến thức nền trong roadmap.

**Nguồn tham khảo miễn phí:**

- [MIT 6.5840 — Distributed Systems](https://pdos.csail.mit.edu/6.824/)
  - **Phần cần đọc:** Lecture notes/paper về Raft: leader election,log replication và safety; mô phỏng ba nút trước khi thử lab.
  - **Truy cập:** Chỉ đọc lecture notes/paper công khai miễn phí theo chủ đề; không yêu cầu đăng ký MIT, Gradescope hay dịch vụ cloud. Đây là nguồn sau đại học, chỉ đọc phạm vi đã ghi.

### 319 · Monolith, service và giao tiếp

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] So monolith có module rõ với tách thành nhiều service. Với một luồng mượn, đánh dấu ranh giới giao dịch nếu tách người dùng, sách và phiếu thành các service.
- [ ] Phân biệt REST, RPC và sự kiện theo yêu cầu giao tiếp. Liệt kê thứ gì trở thành lời gọi mạng có timeout, retry và version interface.
- [ ] Liệt kê chi phí triển khai, quan sát và lỗi liên dịch vụ trước khi chọn microservices. So phát triển một module trong monolith với triển khai độc lập thật sự cần cho nhóm/tải.
- [ ] Chọn REST/RPC/sự kiện theo nhu cầu đồng bộ, hợp đồng và dữ liệu, không theo nhãn công nghệ phổ biến.
- [ ] Giữ monolith có module rõ nếu tách service chỉ làm tăng lỗi mà chưa giải vấn đề cụ thể.

**Nguồn tham khảo miễn phí:**

- [MIT 6.5840 — Distributed Systems](https://pdos.csail.mit.edu/6.824/)
  - **Phần cần đọc:** Schedule: case studies về storage/services; chọn một case để so trade-off với monolith thư viện,không sao chép quy mô hệ thống lớn.
  - **Truy cập:** Chỉ đọc lecture notes/paper công khai miễn phí theo chủ đề; không yêu cầu đăng ký MIT, Gradescope hay dịch vụ cloud. Đây là nguồn sau đại học, chỉ đọc phạm vi đã ghi.

### 320 · Theo dõi lỗi xuyên nhiều thành phần

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Gắn correlation ID từ API sang hàng đợi và worker. Tạo một correlation ID được truyền theo request/tác vụ, giữ cùng định dạng trong log app và worker.
- [ ] Đo độ trễ, backlog và số lần thử lại. Theo một tác vụ từ nhận, đưa queue, lấy xử lý, ghi database tới hoàn tất.
- [ ] Tạo lỗi ở một thành phần thử rồi chẩn đoán bằng log và chỉ số. Đặt chỉ số backlog, thời gian xử lý, retry và lỗi theo tiêu chí rõ.
- [ ] Chủ động làm một thành phần thử bị chậm hoặc dừng, kiểm tra log/chỉ số đủ phân biệt nghẽn với lỗi dữ liệu.
- [ ] Không log toàn bộ payload nhạy cảm chỉ để tiện trace; chọn trường định danh tối thiểu đủ chẩn đoán.

**Nguồn tham khảo miễn phí:**

- [Site Reliability Engineering — sách web Google](https://sre.google/sre-book/table-of-contents/)
  - **Phần cần đọc:** Chương Monitoring Distributed Systems và Troubleshooting: tín hiệu,log,correlation và tái hiện lỗi.
  - **Truy cập:** Toàn bộ sách web miễn phí; chỉ chọn chương liên quan, không cần dùng Google Cloud.

### 321 · Cloud, chi phí và vận hành vừa đủ

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Phân biệt máy ảo, container, dịch vụ quản lý và serverless. Chốt thành phần nào cần chạy liên tục, phần nào có thể chạy theo yêu cầu và nơi dữ liệu phải giữ bền.
- [ ] Lập bảng CPU, RAM, lưu trữ, băng thông và giới hạn ngân sách dự kiến. Dự tính cả lưu trữ, backup và lưu lượng ra ngoài, không chỉ giá máy chạy app.
- [ ] Dựng môi trường thử trong phạm vi được phép; thiết lập hạn mức/cảnh báo nếu dùng tài khoản tính phí. Ghi hạn mức dịch vụ miễn phí nếu dùng và cơ chế cảnh báo/giới hạn tài khoản, không giả định luôn miễn phí.
- [ ] Viết tài liệu cấu hình để dựng lại, giữ bí mật ngoài mã và cấp quyền tối thiểu.
- [ ] Thử dừng môi trường học tập sau khi dùng, xác nhận tài nguyên có tính phí không còn chạy ngoài ý định.

**Nguồn tham khảo miễn phí:**

- [Site Reliability Engineering — sách web Google](https://sre.google/sre-book/table-of-contents/)
  - **Phần cần đọc:** Chương Embracing Risk và Service Level Objectives: đánh đổi,ngân sách tài nguyên; lập bảng chi phí giả định, không cần mở tài khoản trả phí.
  - **Truy cập:** Toàn bộ sách web miễn phí; chỉ chọn chương liên quan, không cần dùng Google Cloud.

### 322 · Thiết kế phiên bản lớn hơn của thư viện

**Loại:** Áp dụng | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Vẽ thiết kế đáp ứng tải đã ước lượng, chọn ít thành phần nhất cần thiết. Lập sơ đồ của bản đang chạy trước, chọn một thay đổi như cache hoặc worker để kiểm chứng lợi ích.
- [ ] Mô tả ba tình huống lỗi và cách khôi phục. Đặt chỉ số trước/sau và dữ liệu tải giống nhau, kiểm tra cả tính đúng nghiệp vụ.
- [ ] Làm một thử nghiệm cache hoặc worker, đo kết quả rồi cập nhật thiết kế; không coi sơ đồ là hệ thống đã chạy. Mô tả sự cố thành phần mới hỏng, dữ liệu chậm và request lặp, nêu đường phục hồi.
- [ ] Triển khai thí nghiệm nhỏ có thể quay lại, không chuyển toàn bộ kiến trúc cùng lúc.
- [ ] Báo thành phần đã thực sự chạy và phần chỉ mới là đề xuất để người đọc không nhầm sơ đồ với bằng chứng triển khai.

**Khi nào quay lại:** Quay lại khi đào sâu hệ phân tán; phần lỗi, retry, cache và thiết kế từ yêu cầu vẫn là kiến thức nền trong roadmap.

**Nguồn tham khảo miễn phí:**

- [MIT 6.5840 — Distributed Systems](https://pdos.csail.mit.edu/6.824/)
  - **Phần cần đọc:** Schedule: case studies về storage/services; chọn một case để so trade-off với monolith thư viện,không sao chép quy mô hệ thống lớn.
  - **Truy cập:** Chỉ đọc lecture notes/paper công khai miễn phí theo chủ đề; không yêu cầu đăng ký MIT, Gradescope hay dịch vụ cloud. Đây là nguồn sau đại học, chỉ đọc phạm vi đã ghi.

## 24. Trách nhiệm nghề nghiệp và đọc nghiên cứu

### 323 · Dữ liệu cá nhân và sự đồng ý

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Lập danh sách dữ liệu thật sự cần cho project. Lập bảng trường dữ liệu, mục đích dùng, nơi lưu, ai xem và khi nào không còn cần giữ.
- [ ] Dùng dữ liệu giả khi thử, giảm thông tin định danh trong log. Phân biệt dữ liệu thật cần cho chức năng với dữ liệu chỉ thu vì có thể hữu ích sau này.
- [ ] Quy định ai được xem, thời gian giữ và cách xóa; tra yêu cầu pháp lý hiện hành nếu triển khai có dữ liệu thật. Tạo dữ liệu giả cho test/demo, kiểm tra file export và log không vô tình chép thông tin người dùng thật.
- [ ] Thiết kế cách sửa/xóa thông tin và quyền truy cập theo phạm vi project, ghi các hạn chế còn lại.
- [ ] Nếu đưa vào sử dụng thật, xác minh quy định và yêu cầu đồng ý hiện hành theo hoàn cảnh, không suy từ ví dụ học tập ra tư vấn pháp lý chung.

**Nguồn tham khảo miễn phí:**

- [ACM Code of Ethics — PDF chính thức](https://www.acm.org/binaries/content/assets/about/acm-code-of-ethics-and-professional-conduct.pdf)
  - **Phần cần đọc:** ACM Code of Ethics §1.2 Avoid harm,§1.4 Be fair và §1.6 Respect privacy; gắn vào dữ liệu của project.
  - **Truy cập:** Toàn bộ văn bản quy tắc đọc công khai miễn phí.

### 324 · Giấy phép mã nguồn và dữ liệu

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Đọc license của một thư viện, bộ dữ liệu và ảnh đang dùng. Ghi tên, phiên bản, nguồn và license của từng tài nguyên thật sự được phân phối trong project.
- [ ] Ghi nguồn, yêu cầu ghi công và điều kiện phân phối liên quan. Đọc phần sử dụng, sửa đổi, phân phối và ghi công, phân biệt mã nguồn, dữ liệu, hình ảnh có thể có giấy phép khác nhau.
- [ ] Thay tài nguyên không rõ quyền sử dụng; không coi nội dung có trên mạng là tự do tái sử dụng. Kiểm tra điều kiện khi đưa lên repository công khai hoặc cho người khác tải bản chạy.
- [ ] Nếu quyền không rõ, hỏi chủ sở hữu hoặc thay bằng tài nguyên có điều kiện phù hợp, không tự gán một license mới lên thứ mình không sở hữu.
- [ ] Giữ tệp ghi công/license cần thiết trong bản phát hành chứ không chỉ ở ghi chú cá nhân.

**Nguồn tham khảo miễn phí:**

- [ACM Code of Ethics — PDF chính thức](https://www.acm.org/binaries/content/assets/about/acm-code-of-ethics-and-professional-conduct.pdf)
  - **Phần cần đọc:** ACM Code of Ethics §1.5 Respect the work required to produce new ideas,inventions,creative works,and computing artifacts; đọc thêm LICENSE của thư viện/dataset thực sự dùng.
  - **Truy cập:** Toàn bộ văn bản quy tắc đọc công khai miễn phí.

### 325 · Sai lệch, tác động và giới hạn hệ thống

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn một tính năng ML hoặc xếp hạng trong project. Xác định ai bị ảnh hưởng nếu mô hình hoặc phần mềm trả sai, kể cả người không trực tiếp dùng hệ thống.
- [ ] Xác định nhóm có thể chịu lỗi nhiều hơn và hậu quả của lỗi. Chọn vài nhóm dữ liệu có ý nghĩa để so sai số nếu đủ dữ liệu và quyền dùng, báo số mẫu từng nhóm.
- [ ] Thiết kế phản hồi, sửa sai hoặc người kiểm tra khi cần; nói rõ độ không chắc chắn. Tạo đường phản hồi/sửa thông tin và tránh trình bày điểm số mô hình như kết luận chắc chắn.
- [ ] Xét quyết định nào nên có người xem lại thay vì tự động hóa toàn bộ.
- [ ] Ghi giới hạn và tình huống không nên dùng sản phẩm bằng ngôn ngữ người dùng hiểu, không chỉ thuật ngữ kỹ thuật.

**Nguồn tham khảo miễn phí:**

- [ACM Code of Ethics — PDF chính thức](https://www.acm.org/binaries/content/assets/about/acm-code-of-ethics-and-professional-conduct.pdf)
  - **Phần cần đọc:** ACM Code of Ethics §1.2 Avoid harm,§1.4 Be fair và §1.6 Respect privacy; gắn vào dữ liệu của project.
  - **Truy cập:** Toàn bộ văn bản quy tắc đọc công khai miễn phí.

### 326 · Đọc một paper theo ba lượt

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn một bài nhập môn gần project, có bản gốc từ tác giả hoặc hội nghị. Lượt đầu xem tiêu đề, abstract, hình/bảng chính và kết luận để xác định vấn đề, đóng góp cùng phạm vi.
- [ ] Lượt đầu đọc vấn đề và kết luận, lượt hai đọc phương pháp và thí nghiệm, lượt ba kiểm tra lập luận quan trọng. Lượt hai đọc phương pháp, dữ liệu, baseline, metric và điểm khó hiểu; tra đúng kiến thức nền còn thiếu.
- [ ] Viết một trang nêu đóng góp, giả thiết, baseline và điều chưa được chứng minh. Lượt ba kiểm tra giả định, chi tiết thuật toán, lập luận hoặc thiết kế thí nghiệm liên quan câu hỏi của mình.
- [ ] Tách điều tác giả thật sự báo cáo khỏi suy luận mình tự thêm; ghi trang/hình làm bằng chứng.
- [ ] Bản tóm tắt phải nêu ít nhất một giới hạn hoặc câu hỏi chưa được bài trả lời, không chỉ liệt kê thuật ngữ.
- [ ] Không cần đọc mọi paper tới lượt ba; chọn mức sâu theo mục đích dùng.

**Nguồn tham khảo miễn phí:**

- [S. Keshav — How to Read a Paper](https://svr-sk818-web.cl.cam.ac.uk/keshav/publications/htrap.html)
  - **Phần cần đọc:** Đọc toàn bộ bài How to Read a Paper: three-pass approach; bài ngắn,không phải yêu cầu đọc cả một giáo trình.
  - **Truy cập:** Bài viết và bản PDF tác giả công khai miễn phí.

### 327 · Tái tạo một kết quả nhỏ

**Loại:** Áp dụng | **Mức độ:** Nâng cao (có thể học sau) | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn một bảng hoặc hình có dữ liệu, mã hay mô tả đủ để thử. Chọn kết quả đủ nhỏ để chạy trong tài nguyên có, ghi tiêu chí thế nào được xem là tái tạo gần đúng.
- [ ] Ghi môi trường, phiên bản, seed và cấu hình. Kiểm tra quyền dùng mã/dữ liệu, phiên bản và hướng dẫn từ tác giả trước khi cài môi trường.
- [ ] So kết quả với bài gốc; giải thích sai khác trong giới hạn bằng chứng, không tự nhận xác nhận toàn bộ nghiên cứu. Giữ tập chia, metric, seed và tiền xử lý càng khớp mô tả càng tốt; liệt kê phần buộc phải khác.
- [ ] Nếu kết quả không khớp, so dữ liệu, cấu hình, cách tính metric và log trước khi kết luận bài sai.
- [ ] Lưu lệnh chạy, đầu ra gốc và biểu đồ tạo từ đầu ra đó.
- [ ] Chỉ tuyên bố đã tái tạo phần thực sự làm, không dùng một hình khớp để xác nhận toàn bộ công trình.

**Khi nào quay lại:** Đặc biệt phù hợp hướng nghiên cứu/ML; nếu chưa chọn hướng này, có thể để sau và giữ các kỹ năng đọc, kiểm chứng cơ bản.

**Nguồn tham khảo miễn phí:**

- [S. Keshav — How to Read a Paper](https://svr-sk818-web.cl.cam.ac.uk/keshav/publications/htrap.html)
  - **Phần cần đọc:** Đọc toàn bộ bài How to Read a Paper: three-pass approach; bài ngắn,không phải yêu cầu đọc cả một giáo trình.
  - **Truy cập:** Bài viết và bản PDF tác giả công khai miễn phí.

### 328 · Đặt câu hỏi có thể kiểm chứng

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Từ một điểm yếu quan sát được, viết câu hỏi và giả thuyết. Viết câu hỏi đủ cụ thể như thay cách biểu diễn có giảm lỗi ở nhóm nào dưới cùng dữ liệu và budget.
- [ ] Chọn một yếu tố thay đổi, baseline và phép đo phù hợp. Phân biệt giả thuyết, biến can thiệp, biến giữ cố định và đại lượng quan sát.
- [ ] Làm thử nghiệm nhỏ hoặc đề cương để trao đổi với giảng viên; tách kết quả đo khỏi phỏng đoán. Chọn baseline có sức cạnh tranh tương xứng, tránh chọn bản yếu để cải tiến trông tốt.
- [ ] Đặt trước cách so, số lần chạy hoặc cách thể hiện bất định nếu có yếu tố ngẫu nhiên.
- [ ] Sau thử nghiệm, tách kết quả trực tiếp quan sát với giải thích cơ chế còn cần bằng chứng thêm.
- [ ] Dùng kết quả và câu hỏi còn mở để trao đổi với giảng viên, không chờ ý tưởng nghe thật lớn mới bắt đầu.

**Nguồn tham khảo miễn phí:**

- [S. Keshav — How to Read a Paper](https://svr-sk818-web.cl.cam.ac.uk/keshav/publications/htrap.html)
  - **Phần cần đọc:** Đọc toàn bộ bài How to Read a Paper: three-pass approach; bài ngắn,không phải yêu cầu đọc cả một giáo trình.
  - **Truy cập:** Bài viết và bản PDF tác giả công khai miễn phí.

## 25. Chọn hướng chuyên sâu có căn cứ

### 329 · Nhìn lại bằng sản phẩm đã làm

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Lập danh sách project thư viện, shell, interpreter, minh họa thuật toán và ML. Với từng project, ghi phần tự làm, phần có mẫu/gợi ý, phần đã được người khác dùng hoặc review.
- [ ] Ghi phần mình thích làm, phần làm tốt có bằng chứng và phần còn yếu. Dùng bằng chứng như test, báo cáo, demo và lỗi đã sửa để đánh giá năng lực, không chỉ mức thích thú ban đầu.
- [ ] Chọn hai hướng muốn tìm hiểu sâu hơn; không chọn chỉ vì tên ngành đang phổ biến. Phân biệt không thích một mảng với chưa có nền nên làm gì cũng mắc, thử bổ sung một lỗ hổng rồi đánh giá lại.
- [ ] Chọn hai hướng để khảo sát bằng nhiệm vụ nhỏ, không mở đồng thời nhiều khóa dài.
- [ ] Giữ một bảng so công việc thường ngày, nền cần có và sản phẩm mình muốn làm ở mỗi hướng.

**Nguồn tham khảo miễn phí:**

- [OSSU Computer Science — curriculum](https://github.com/ossu/computer-science)
  - **Phần cần đọc:** Đọc mục Organization,Core CS,Advanced CS và Final project để so phạm vi; chọn một hướng,không học hết mọi nhánh Advanced và không chuyển sang khóa trả phí.
  - **Truy cập:** Đọc cấu trúc Core/Advanced và Final project miễn phí. Các khóa bên ngoài không được mặc định miễn phí; chỉ dùng nguồn đã chọn riêng trong roadmap.

### 330 · Đối chiếu công việc với điều mình muốn

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Đọc khoảng 10 mô tả thực tập hoặc junior hiện hành của hai hướng đã chọn. Lưu link, thời điểm đọc và cấp độ của tin tuyển để tránh so intern với senior.
- [ ] Ghi kỹ năng lặp lại, loại nhiệm vụ và yêu cầu thật sự bắt buộc. Tách yêu cầu bắt buộc, mong muốn và công nghệ gắn với riêng một công ty.
- [ ] So với phần mình đã làm; phân biệt yêu cầu tuyển dụng cụ thể với danh sách công nghệ dài. Gom kỹ năng theo năng lực như thiết kế API, SQL, thử nghiệm mô hình thay vì chỉ đếm tên framework.
- [ ] Đối chiếu từng yêu cầu với bằng chứng mình có hoặc một việc cụ thể cần làm thêm.
- [ ] Không suy toàn thị trường từ một tin rất dài hoặc một bài chia sẻ cá nhân; dùng nhiều nguồn và cập nhật khi chuẩn bị ứng tuyển.

**Nguồn tham khảo miễn phí:**

- [OSSU Computer Science — curriculum](https://github.com/ossu/computer-science)
  - **Phần cần đọc:** Đọc mục Organization,Core CS,Advanced CS và Final project để so phạm vi; chọn một hướng,không học hết mọi nhánh Advanced và không chuyển sang khóa trả phí.
  - **Truy cập:** Đọc cấu trúc Core/Advanced và Final project miễn phí. Các khóa bên ngoài không được mặc định miễn phí; chỉ dùng nguồn đã chọn riêng trong roadmap.

### 331 · Khảo sát hướng kỹ sư phần mềm và backend

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Đọc lại quyết định API, transaction, test và vận hành trong project. Chọn một luồng mình đã xây và giải thích được yêu cầu, mô hình dữ liệu, transaction, phân quyền và lỗi.
- [ ] Chọn một điểm đào sâu: database, độ tin cậy hoặc hiệu năng. Nếu muốn đi backend, làm thử một cải tiến có kiểm chứng như giảm query lặp hoặc chống request tạo phiếu lặp.
- [ ] Viết kế hoạch cải thiện có phép đo; nếu chọn hướng này, tiếp tục đào sâu hệ thống thay vì học thêm hàng loạt framework. Đọc một tài liệu nền sâu hơn của database/hệ điều hành/mạng liên quan nút thắt thật.
- [ ] So công việc xây và vận hành dịch vụ với việc chỉ viết endpoint theo tutorial.
- [ ] Chốt một sản phẩm và một nền tảng chính để đào sâu, giữ đổi framework là lựa chọn có lý do chứ không mục tiêu học tự thân.

**Nguồn tham khảo miễn phí:**

- [OSSU Computer Science — curriculum](https://github.com/ossu/computer-science)
  - **Phần cần đọc:** Đọc mục Organization,Core CS,Advanced CS và Final project để so phạm vi; chọn một hướng,không học hết mọi nhánh Advanced và không chuyển sang khóa trả phí.
  - **Truy cập:** Đọc cấu trúc Core/Advanced và Final project miễn phí. Các khóa bên ngoài không được mặc định miễn phí; chỉ dùng nguồn đã chọn riêng trong roadmap.

### 332 · Khảo sát hướng ML và nghiên cứu AI

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Đối chiếu khả năng toán, thí nghiệm và đọc paper với project ML đã làm. Chọn loại bài toán và xác định muốn tập trung dùng mô hình, xây pipeline/serving hay nghiên cứu thuật toán.
- [ ] Chọn một bài toán cụ thể như ảnh, ngôn ngữ hoặc dữ liệu bảng. Đối chiếu bản thân đã tự thiết kế split, baseline, metric và phân tích lỗi hay chỉ chạy notebook có sẵn.
- [ ] Phân biệt công việc dùng mô hình, huấn luyện mô hình và nghiên cứu phương pháp; chọn mục tiêu phù hợp giai đoạn hiện tại. Nếu thích nghiên cứu, thử đọc sâu/tái tạo một kết quả nhỏ và trao đổi với nhóm hoặc giảng viên phù hợp.
- [ ] Nếu thích ML engineering, thử đóng gói dự đoán cùng kiểm tra dữ liệu vào một dịch vụ nhỏ.
- [ ] Ghi phần toán, dữ liệu và kỹ thuật phần mềm còn thiếu theo mục tiêu, không coi biết một API LLM là đã đủ mọi việc AI.

**Nguồn tham khảo miễn phí:**

- [OSSU Computer Science — curriculum](https://github.com/ossu/computer-science)
  - **Phần cần đọc:** Đọc mục Organization,Core CS,Advanced CS và Final project để so phạm vi; chọn một hướng,không học hết mọi nhánh Advanced và không chuyển sang khóa trả phí.
  - **Truy cập:** Đọc cấu trúc Core/Advanced và Final project miễn phí. Các khóa bên ngoài không được mặc định miễn phí; chỉ dùng nguồn đã chọn riêng trong roadmap.

### 333 · Khảo sát hướng hệ thống và ngôn ngữ

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Xem lại trải nghiệm làm shell, interpreter và xử lý đồng thời. Chọn một câu hỏi đo được như chi phí cấp phát, hiệu năng I/O hoặc độ trễ xử lý mạng trong chương trình tự viết.
- [ ] Chọn một điểm đào sâu: OS, compiler, mạng hoặc hiệu năng C++. Đọc lab/giáo trình có môi trường học tập rõ, không thử sửa hệ thống đang dùng hằng ngày để học tùy tiện.
- [ ] Tìm giáo trình/lab và yêu cầu nền của hướng đó, thiết kế một thử nghiệm có thể hoàn thành. Làm một phần nhỏ rồi dùng debugger/profiler/test để hiểu cơ chế.
- [ ] Với compiler, cải tiến interpreter theo đặc tả; với OS/mạng, chọn lab mô phỏng hoặc sandbox của khóa.
- [ ] So mức hứng thú với công việc lần lỗi, đo, đọc mã và kiểm tra giả thiết, không chỉ thích hình ảnh kỹ sư hệ thống.

**Nguồn tham khảo miễn phí:**

- [OSSU Computer Science — curriculum](https://github.com/ossu/computer-science)
  - **Phần cần đọc:** Đọc mục Organization,Core CS,Advanced CS và Final project để so phạm vi; chọn một hướng,không học hết mọi nhánh Advanced và không chuyển sang khóa trả phí.
  - **Truy cập:** Đọc cấu trúc Core/Advanced và Final project miễn phí. Các khóa bên ngoài không được mặc định miễn phí; chỉ dùng nguồn đã chọn riêng trong roadmap.

### 334 · Nhận diện các hướng khác trong KHMT

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Khảo sát đồ họa, HCI, an toàn thông tin và nền tảng di động/nhúng. Với mỗi hướng quan tâm, xem đầu vào nền như toán hình học, điện tử, lập trình đồng thời hay thiết kế trải nghiệm.
- [ ] Với một hướng quan tâm, đọc syllabus nhập môn và xem một project thật. Chọn một tutorial/lab chính thức ngắn có sản phẩm chạy được để thử chất công việc.
- [ ] Ghi kiến thức cần bổ sung; không bắt bản thân học chuyên sâu tất cả các hướng. Ghi tác vụ hằng ngày gồm gì: dựng shader, nghiên cứu người dùng, rà quyền, tối ưu tài nguyên thiết bị…
- [ ] Không biến ô khảo sát thành cam kết học chuyên sâu mọi nhánh; giữ tối đa vài hướng có lý do thử.
- [ ] Nếu phát hiện hướng phù hợp hơn, lập phần bổ sung từ chỗ nền đã có thay vì bỏ sạch những gì đã học.

**Nguồn tham khảo miễn phí:**

- [OSSU Computer Science — curriculum](https://github.com/ossu/computer-science)
  - **Phần cần đọc:** Đọc mục Organization,Core CS,Advanced CS và Final project để so phạm vi; chọn một hướng,không học hết mọi nhánh Advanced và không chuyển sang khóa trả phí.
  - **Truy cập:** Đọc cấu trúc Core/Advanced và Final project miễn phí. Các khóa bên ngoài không được mặc định miễn phí; chỉ dùng nguồn đã chọn riêng trong roadmap.

### 335 · Chốt một hướng để tập trung

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn một hướng chính trong 3–6 tháng tới, một câu hỏi hoặc sản phẩm cụ thể. Viết một câu quyết định hướng chính, loại sản phẩm và đối tượng/ngữ cảnh dùng trong vòng học tới.
- [ ] Chọn một giáo trình/khóa chính và một project, tránh gom nhiều nguồn song song. Chọn một nguồn chính có bài thực hành và kiểm tra yêu cầu nền trước khi bắt đầu.
- [ ] Xếp phần đọc, bài tập và mốc demo; sau một vòng hoàn thành mới đánh giá lại hướng. Chia project thành mốc demo nhỏ có đầu ra thật, dự trù thời gian theo lịch trường và mức mình đã làm được.
- [ ] Đặt điểm đánh giá lại bằng bằng chứng: sản phẩm, phản hồi, bài tập tự làm, mức quan tâm tới việc thực tế.
- [ ] Giữ một danh sách thứ chưa học để tránh rẽ liên tục theo bài đăng mới, chỉ thêm khi phục vụ mục tiêu đang làm.

**Thông tin thêm & Lưu ý bản chất:**

Chiến lược xét tuyển chuyên ngành KHMT HCMUS: Căn cứ điểm GPA tích lũy giai đoạn cơ sở (Năm 1 + Năm 2) với các môn cơ sở ngành cốt lõi (NMLT, KTLT, CTDL&GT, OOP, MMT, Toán rời rạc, Xác suất thống kê). Mục tiêu GPA an toàn: >= 8.0 - 8.5+. Chuẩn bị sớm portfolio 5 Capstone Mini-Projects để tạo lợi thế vượt trội.

**Nguồn tham khảo miễn phí:**

- [OSSU Computer Science — curriculum](https://github.com/ossu/computer-science)
  - **Phần cần đọc:** Đọc mục Organization,Core CS,Advanced CS và Final project để so phạm vi; chọn một hướng,không học hết mọi nhánh Advanced và không chuyển sang khóa trả phí.
  - **Truy cập:** Đọc cấu trúc Core/Advanced và Final project miễn phí. Các khóa bên ngoài không được mặc định miễn phí; chỉ dùng nguồn đã chọn riêng trong roadmap.

## 26. Đồ án lớn có người dùng và bằng chứng

### 336 · Chọn vấn đề đủ cụ thể

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn nhu cầu thật có thể tiếp cận người dùng hoặc bộ dữ liệu hợp lệ. Viết bối cảnh và một tình huống thật người dùng đang xử lý bằng cách nào, điểm nào gây mất thời gian hoặc sai sót.
- [ ] Mô tả người gặp vấn đề, cách đang xử lý và điểm bất tiện. Trao đổi với người có nhu cầu nếu tiếp cận được; nếu dùng dữ liệu công khai, xác minh câu hỏi và quyền dùng trước.
- [ ] Chốt một phiên bản nhỏ kiểm chứng được; có thể tiếp tục thư viện hoặc chọn đề tài theo hướng chính. Chốt một tác vụ cốt lõi giải được trong phạm vi tài nguyên hiện tại thay vì tạo nền tảng nhiều chức năng.
- [ ] Nêu cách chứng minh phiên bản đầu hữu ích như hoàn thành một lượt nghiệp vụ hoặc vượt baseline có ý nghĩa.
- [ ] Kiểm tra đề tài cần gì từ người khác/dịch vụ ngoài để không bị kẹt ở một phụ thuộc chưa có.

### 337 · Viết yêu cầu và cách nghiệm thu

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Viết các luồng chính cùng ví dụ đầu vào, đầu ra. Viết user flow chính cùng các nhánh không hợp lệ, xác định đầu vào/đầu ra người dùng thực sự thấy.
- [ ] Đặt tiêu chí chức năng, độ trễ hoặc chất lượng mô hình có số đo phù hợp. Gắn mỗi yêu cầu quan trọng với một ví dụ chấp nhận được và một ví dụ phải từ chối.
- [ ] Ghi ngoài phạm vi và giả thiết; xin phản hồi người dùng/giảng viên trước khi mở rộng. Nếu có chỉ tiêu tốc độ/ML, ghi dữ liệu, cách đo và ngưỡng hợp lý, không tự đặt số đẹp mà chưa biết nền.
- [ ] Nêu rõ những gì chưa làm như thanh toán, quy mô rất lớn hoặc hỗ trợ nhiều nền tảng.
- [ ] Đưa bản ngắn cho người phản hồi và ghi thay đổi yêu cầu trước khi code phần lớn sản phẩm.

### 338 · Thiết kế vừa đủ để bắt tay làm

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Vẽ dữ liệu, thành phần và đường đi của một yêu cầu chính. Vẽ thành phần và nguồn dữ liệu chính, chỉ ra nơi validation, quyền và transaction hoặc pipeline đánh giá được thực hiện.
- [ ] Ghi hai lựa chọn quan trọng, phương án khác và lý do chọn. Chọn hai quyết định có đánh đổi thật như lưu quan hệ hay document, đồng bộ hay worker, baseline ML nào.
- [ ] Chia thành các lát nhỏ mỗi lát chạy được, tránh làm toàn bộ nền tảng rồi mới có demo. Ghi phương án tối giản cùng lý do đủ ở quy mô dự kiến trước khi thêm cache/service.
- [ ] Tách lát đầu tiên đi xuyên hệ thống để sớm phát hiện rủi ro giao diện/dữ liệu.
- [ ] Đặt quy ước ID, lỗi, cấu hình và cấu trúc thư mục ở mức nhóm có thể làm việc nhất quán, không tạo bộ quy tắc quá lớn.

### 339 · Làm một luồng hoàn chỉnh đầu tiên

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Làm từ nhập liệu đến xử lý và hiển thị kết quả với phạm vi nhỏ. Chọn một ví dụ nhỏ từ yêu cầu và chạy từ input thật đến output hiển thị, tránh chỉ demo từng hàm tách rời.
- [ ] Có xử lý lỗi và lưu dữ liệu/thí nghiệm theo đúng loại project. Dùng dữ liệu giả ban đầu nhưng đi qua đúng ranh giới chính như API/database hoặc tiền xử lý/model.
- [ ] Demo cho người dùng thử, ghi điều khác với dự đoán ban đầu. Xử lý ít nhất một lỗi có ý nghĩa như dữ liệu sai hoặc không tìm thấy, giữ trạng thái nhất quán.
- [ ] Lưu hướng dẫn chạy lát đầu và một bộ test ngắn để lần sau không phá phần đã có.
- [ ] Cho người dùng/giảng viên xem sớm để phát hiện mình đang giải sai bài toán trước khi mở rộng.

### 340 · Hoàn thiện các tính năng cốt lõi

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Thực hiện từng lát còn lại bằng nhánh, review và test. Xếp thứ tự tính năng theo điều kiện phụ thuộc và mức quan trọng của yêu cầu, không theo phần dễ trang trí nhất.
- [ ] Ưu tiên quy tắc nghiệp vụ hoặc đánh giá chất lượng trước trang trí. Mỗi nhánh hoặc thay đổi phải có cách tự thử, cập nhật test cho quy tắc vừa thêm.
- [ ] Cập nhật tài liệu khi quyết định thay đổi; không để README mô tả hành vi cũ. Giữ một bản có thể chạy ở mốc chính, tránh nhiều tuần chỉ có mã chưa ghép được.
- [ ] Theo dõi thay đổi phạm vi: tính năng mới cần thay mốc nào hoặc loại bớt phần nào, không cứ cộng thêm.
- [ ] Nếu dùng AI/thư viện, đọc và kiểm chứng phần tích hợp, ghi đúng đóng góp thay vì nhận toàn bộ là tự viết.

### 341 · Kiểm chứng chức năng và chất lượng

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chạy lại test, ca biên, dữ liệu lỗi và các luồng quan trọng. Lập ma trận yêu cầu→test/bằng chứng, kiểm tra còn yêu cầu quan trọng nào chưa được chứng minh.
- [ ] Đo hiệu năng hoặc metric mô hình theo tiêu chí đã chốt. Chạy dữ liệu rỗng, biên, lỗi, request lặp hoặc các nhóm dữ liệu khó tùy loại project.
- [ ] Kiểm tra bảo mật, khả năng tiếp cận và quyền dùng dữ liệu ở mức phù hợp project. So hiệu năng/metric với tiêu chí trên cùng môi trường và tập dữ liệu, báo cách đo và độ dao động khi liên quan.
- [ ] Thử quyền truy cập, dữ liệu nhập, nguồn tài nguyên/giấy phép và giao diện bàn phím nếu sản phẩm có các phần đó.
- [ ] Rà log, dữ liệu mẫu và file cấu hình trước công khai; tách lỗi chưa sửa theo mức ảnh hưởng.
- [ ] Chốt một phiên bản release candidate để sửa lỗi, tránh đổi thêm nhiều tính năng ngay trước demo.
- [ ] Chọn một thay đổi yêu cầu chưa chuẩn bị trước, tự tìm chỗ sửa, bổ sung test và chạy lại luồng chính; ghi phần cần trợ giúp thay vì chỉ nộp demo chạy theo kịch bản.

### 342 · Đưa đồ án tới người dùng thử

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Triển khai môi trường demo hoặc đóng gói bản chạy theo loại sản phẩm. Dựng từ checkout sạch bằng lệnh trong README để phát hiện file thiếu hoặc đường dẫn chỉ có trên máy mình.
- [ ] Hướng dẫn khởi động, dữ liệu mẫu và khôi phục khi lỗi. Tách bí mật/cấu hình triển khai khỏi mã, lưu dữ liệu cần giữ ở nơi không mất khi thay bản ứng dụng.
- [ ] Kiểm tra từ máy hoặc môi trường sạch; chuẩn bị phương án khi dịch vụ ngoài không hoạt động. Kiểm tra URL/cổng, HTTPS, liên kết tài nguyên và API từ một môi trường khác với máy đang phát triển.
- [ ] Thử khởi động lại, khôi phục backup và quay về phiên bản cũ trên môi trường thử.
- [ ] Chuẩn bị dữ liệu demo và phương án chạy cục bộ nếu mạng/dịch vụ ngoài không sẵn có.
- [ ] Chỉ ghi triển khai thành công sau khi người khác thực sự mở hoặc chạy được luồng chính.

### 343 · Sửa theo phản hồi và sự cố thật

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Thu phản hồi có sự đồng ý, ghi tình huống tái hiện cụ thể. Đưa người thử một tác vụ có dữ liệu giả, quan sát lỗi mà không chỉ dẫn thao tác liên tục.
- [ ] Phân biệt lỗi, yêu cầu mới và sở thích cá nhân. Ghi browser/phiên bản, dữ liệu và bước tái hiện cho mỗi bug; không chỉ lưu nhận xét không chạy.
- [ ] Sửa vấn đề ảnh hưởng lớn trước, đo lại và viết ghi chú phiên bản. Phân biệt lỗi trái yêu cầu, điểm gây khó dùng và ý tưởng tính năng mới để ưu tiên đúng.
- [ ] Sửa vấn đề ảnh hưởng hoàn thành tác vụ trước, thêm test hoặc ca kiểm lại tương ứng.
- [ ] Thông báo thay đổi và mời thử lại đúng tình huống đã lỗi, ghi điều gì đã cải thiện và điều còn hạn chế.

### 344 · Viết báo cáo kỹ thuật có bằng chứng

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Mô tả vấn đề, thiết kế, phần tự làm, phần dùng thư viện và kết quả đo. Báo cáo cần nối vấn đề→thiết kế→cài đặt→kiểm chứng, không chỉ kể theo ngày mình đã code.
- [ ] Chọn vài quyết định khó để giải thích đánh đổi. Nêu nguồn dữ liệu, thư viện, model hoặc dịch vụ ngoài và phần tự phát triển chính xác.
- [ ] Ghi giới hạn và thất bại có bài học; đính kèm cách chạy lại, không chỉ ảnh màn hình. Chọn số đo có ý nghĩa và kèm cấu hình, cách lấy mẫu hoặc tập test, tránh số đẹp không có cách lặp.
- [ ] Giải thích một quyết định đã phải đổi vì bằng chứng mới, nêu lý do kỹ thuật chứ không kể lan man.
- [ ] Gắn link mã, hướng dẫn chạy, test và vài hình có nhãn đúng; phân biệt tính năng chạy thật với ý tưởng tương lai.
- [ ] Viết giới hạn để người đọc biết sản phẩm dùng được trong điều kiện nào.

### 345 · Trình bày và bảo vệ đồ án

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chuẩn bị demo ngắn đi qua một luồng thật và một trường hợp lỗi. Chọn luồng ngắn thể hiện giá trị chính, chuẩn bị input và trạng thái ban đầu ổn định.
- [ ] Tự trả lời vì sao chọn cấu trúc dữ liệu, mô hình hoặc kiến trúc đó. Có một tình huống lỗi được xử lý để chứng minh hiểu hệ thống, không chỉ một đường thành công dựng sẵn.
- [ ] Nhờ người khác hỏi sâu; sửa phần mình chưa giải thích được trước khi đưa vào hồ sơ. Tập giải thích cấu trúc dữ liệu, giao dịch, mô hình hoặc thuật toán bằng yêu cầu nó phục vụ.
- [ ] Chuẩn bị trả lời điều gì xảy ra khi dữ liệu tăng, hai người thao tác cùng lúc hoặc một thành phần hỏng.
- [ ] Nhờ người khác hỏi ở phần mình tự làm, ghi câu chưa trả lời được và quay lại kiểm tra mã/tài liệu.
- [ ] Không dùng video hoặc ảnh thay cho một tính năng chưa chạy mà không nói rõ đó là bản mô phỏng.

## 27. Thực tập, phỏng vấn và phát triển nghề

### 346 · Chọn lúc bắt đầu ứng tuyển

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Đối chiếu yêu cầu thực tập hiện hành với project và kiến thức đang có. Chọn một vài vị trí thực tập cụ thể và đánh dấu phần bắt buộc đã có bằng chứng, phần có thể học thêm ngắn hạn.
- [ ] Nếu đã tự viết, kiểm thử và giải thích được một sản phẩm phù hợp, bắt đầu ứng tuyển song song học tiếp. Tự kiểm tra có thể dựng project từ đầu, giải thích phần chính và tự sửa một lỗi mới hay chưa.
- [ ] Không chờ đánh dấu hết roadmap; ghi các lỗ hổng thực tế để bổ sung trước buổi phỏng vấn. Nếu nền còn yếu, chọn một nhóm lỗ hổng trực tiếp ảnh hưởng vị trí thay vì ôn lại mọi môn từ đầu.
- [ ] Bắt đầu nộp phù hợp khi đủ cơ sở, dùng phản hồi thật để điều chỉnh; không đợi hoàn thành mọi ô nâng cao.
- [ ] Tiếp tục học trên trường và giữ thời gian ứng tuyển/phỏng vấn vừa sức thay vì bỏ sạch một phía.

### 347 · Chọn sản phẩm đưa vào hồ sơ

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn 2–3 project tốt nhất, mỗi project cho thấy một năng lực khác nhau. Với mỗi project, ghi vấn đề, người dùng/dữ liệu, chức năng chạy được và phần cá nhân đóng góp.
- [ ] Dọn repository, README, dữ liệu mẫu, license và hướng dẫn chạy. Ưu tiên một repo hoàn chỉnh có test/hướng dẫn hơn nhiều repo tutorial chưa sửa gì.
- [ ] Nêu đóng góp cá nhân trong project nhóm, không nhận toàn bộ công của nhóm. Kiểm tra link demo, dữ liệu mẫu, lệnh build và ảnh minh họa từ góc nhìn người chưa biết dự án.
- [ ] Gắn số đo chỉ khi có phương pháp và kết quả lưu lại; nêu giới hạn của demo.
- [ ] Dọn secret, dữ liệu người thật và tài nguyên không rõ quyền trước khi chia sẻ công khai.

### 348 · Viết CV dựa trên việc đã làm

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn độ dài và bố cục dễ đọc, ưu tiên học vấn, project/kinh nghiệm phù hợp, kỹ năng và liên kết bằng chứng. Đưa liên kết repository/demo và kỹ năng thật sự đã sử dụng.
- [ ] Mỗi mô tả project nên nói mình làm phần gì, dùng cách nào và kết quả quan sát được; tránh chỉ liệt kê tên công nghệ.
- [ ] Điều chỉnh CV theo vị trí cụ thể; không bịa số người dùng, tốc độ hoặc kinh nghiệm. Không ghi thành thạo nếu chỉ mới làm một bài theo mẫu; dùng mức mô tả trung thực và có ví dụ bảo vệ được.
- [ ] Với số liệu, lưu cách đo để trả lời khi được hỏi, không tự thêm tỷ lệ tăng tốc hoặc số người dùng.
- [ ] Kiểm tra chính tả, link, thông tin liên hệ và file PDF mở được trước khi gửi đúng phiên bản cho vị trí đó.

### 349 · Ôn DSA cho phỏng vấn

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn bài mới ở mảng, hash, cây, đồ thị và DP theo vị trí mục tiêu. Trong một lượt thử, đọc lại đề bằng lời mình và hỏi/làm rõ điều kiện như phần tử trùng, rỗng và giới hạn.
- [ ] Nói rõ yêu cầu, cách đơn giản, hướng cải thiện và độ phức tạp. Trình bày cách vét cạn đúng trước khi tối ưu, giải thích điểm nghẽn và cấu trúc giúp giảm nó.
- [ ] Code trong thời gian giới hạn vừa sức, tự chạy ca biên rồi xem lại lỗi; không chỉ học thuộc mẫu. Code có biến/tên rõ, tự chạy một ví dụ và một ca biên, nói chi phí thời gian/bộ nhớ theo biến phù hợp.
- [ ] Sau lượt, phân loại lỗi do thuật toán hay do không diễn đạt/không kiểm tra, sửa đúng loại.
- [ ] Giải lại một biến thể sau vài ngày để kiểm tra hiểu cấu trúc, không chỉ thuộc một bài quen.

### 350 · Vấn đáp nền tảng CS

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Tự giải thích process/thread, TCP/UDP, index/transaction và stack/heap. Với mỗi cặp khái niệm, lấy tình huống trong project để giải thích khác biệt, không dừng ở định nghĩa sách.
- [ ] Với mỗi cặp, tạo tình huống phải chọn và giải thích điều kiện. Ví dụ vì sao transaction ngăn mượn trùng, index phục vụ truy vấn nào, TCP cần framing ra sao.
- [ ] Nếu chỉ nhớ định nghĩa, quay lại bài thực hành tương ứng thay vì nhồi câu trả lời mẫu. Nếu chưa biết chi tiết, nêu giới hạn hiểu biết và cách đo/đọc để xác minh thay vì đoán chắc.
- [ ] Tự vẽ luồng một request từ trình duyệt tới dữ liệu và chỉ ra chỗ mạng, OS, database cùng tham gia.
- [ ] Quay lại nhiệm vụ thực hành khi không giải thích được một hành vi chính mình đã xây.

### 351 · Phỏng vấn thử bằng project thật

**Loại:** Luyện | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Nhờ bạn hoặc người có kinh nghiệm hỏi về một phần mã đã viết. Chọn một project trong CV và cho người hỏi đọc README trước, không tập theo câu hỏi chỉ có mình biết.
- [ ] Vẽ luồng dữ liệu và chẩn đoán một lỗi giả định. Dành phần hỏi về quyết định, lỗi đã gặp, test và giới hạn; dùng mã hoặc hình để hỗ trợ khi cần.
- [ ] Thừa nhận điều chưa biết, nêu cách kiểm chứng; ghi lại chỗ nói được nhưng chưa làm được. Thử một yêu cầu thay đổi nhỏ để xem mình lần được chỗ sửa và dự đoán ảnh hưởng.
- [ ] Tập trả lời ngắn có bằng chứng, hỏi lại khi câu hỏi chưa rõ và thừa nhận điều chưa kiểm chứng.
- [ ] Sau buổi, ghi 2–3 việc sửa cụ thể trong project hoặc kiến thức, không chỉ tự nhận phỏng vấn chưa tốt.
- [ ] Tắt lời giải và công cụ sinh code trong một phần phỏng vấn thử; tự giải thích một module và sửa một lỗi nhỏ để kiểm tra mình có thật sự làm chủ project.

### 352 · Ứng tuyển có theo dõi

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn vị trí phù hợp mức hiện tại và đọc kỹ cách nộp. Đọc kỹ vai trò, địa điểm/hình thức, thời gian thực tập và cách nộp, không gửi một bộ hồ sơ không liên quan cho mọi vị trí.
- [ ] Lưu nơi ứng tuyển, yêu cầu, ngày, phản hồi và việc cần chuẩn bị. Giữ bảng theo dõi vị trí, link, phiên bản CV, ngày nộp, vòng hiện tại và phần cần chuẩn bị.
- [ ] Tự kiểm tra người nhận, tệp và thông tin trước khi gửi; lịch sự hỏi phản hồi khi phù hợp. Chỉ cung cấp thông tin cần thiết qua kênh tuyển dụng đáng tin, tự kiểm người nhận và tệp đính kèm trước gửi.
- [ ] Nếu nhận bài tuyển dụng, làm rõ phạm vi/thời hạn và quy tắc dùng công cụ; nộp đúng phần tự làm.
- [ ] Dùng phản hồi hoặc câu hỏi gặp thật để chọn bài ôn, không xem một lần bị từ chối là kết luận về toàn bộ năng lực.

### 353 · Làm việc trong nhóm khi mới vào nghề

**Loại:** Học | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Đọc hướng dẫn dự án, dựng môi trường rồi hoàn thành một việc nhỏ có review. Dựng môi trường theo tài liệu rồi chạy test/luồng chính trước khi sửa code của nhóm.
- [ ] Báo sớm khi mắc kẹt, kèm điều đã thử và bằng chứng. Khi nhận việc, xác nhận hành vi mong đợi, phạm vi và cách kiểm tra, hỏi người phụ trách khi có quyết định ảnh hưởng nhiều nơi.
- [ ] Ghi lại kiến thức hệ thống và chủ động kiểm tra tác động trước khi sửa mã đang được dùng. Nếu kẹt, báo bối cảnh, lỗi, bước tái hiện và điều đã thử để người khác hỗ trợ được.
- [ ] Gửi thay đổi nhỏ có giải thích/test, xử lý review bằng kiểm chứng chứ không phòng thủ hoặc làm theo không hiểu.
- [ ] Ghi lại quy tắc hệ thống và bài học từ bug, nhưng không chép bí mật hay dữ liệu nội bộ ra hồ sơ công khai.

### 354 · Đóng góp mã nguồn mở vừa sức

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Chọn dự án đang dùng, đọc hướng dẫn đóng góp và dựng được test. Chọn dự án thật sự dùng hoặc hiểu nhu cầu, đọc CONTRIBUTING, quy trình issue và cách chạy test.
- [ ] Tái hiện một lỗi nhỏ hoặc cải thiện ví dụ/tài liệu có ích. Tái hiện lỗi trên phiên bản phù hợp hoặc xác định đoạn tài liệu/ví dụ gây khó hiểu cho người dùng.
- [ ] Gửi thay đổi đúng phạm vi, đáp ứng review; không tạo pull request chỉ để đếm thành tích. Kiểm tra đã có issue/PR tương tự, trao đổi phạm vi theo quy ước dự án trước thay đổi lớn.
- [ ] Làm bản sửa nhỏ với test hoặc ví dụ chứng minh, viết PR mô tả vấn đề và cách xác nhận.
- [ ] Kiên nhẫn với review, không tạo nhiều thay đổi hình thức để lấy số lượng thành tích.
- [ ] Nếu thay đổi chưa được nhận, vẫn lưu bài học kỹ thuật và hiểu lý do, không tự nhận là đã được merge.

### 355 · Lập vòng phát triển tiếp theo

**Loại:** Áp dụng | **Mức độ:** Bắt buộc nền | **Track:** Sẵn sàng Chuyên ngành KHMT (`track-6`)

**Việc cần làm:**

- [ ] Nhìn lại việc đã làm, phản hồi từ project/phỏng vấn và điểm còn yếu. Đối chiếu mục tiêu vòng trước với sản phẩm, bài tự làm và phản hồi, phân biệt đã xem với tự làm được.
- [ ] Chọn một kỹ năng nền cần củng cố, một mảng sâu và một sản phẩm cho vòng tiếp. Chọn một điểm nền đang cản trở việc thực tế và một mảng sâu phục vụ hướng chính, tránh danh sách quá nhiều.
- [ ] Giữ nhịp đọc, làm, nhận review và sửa; cập nhật hướng đi bằng kết quả thực tế. Gắn việc đọc với một bài kiểm chứng hoặc tính năng nhỏ, có mốc đưa cho người khác xem.
- [ ] Đánh giá lại dựa trên việc hoàn thành và chất lượng phản hồi, điều chỉnh khối lượng nếu lịch trường/công việc thay đổi.
- [ ] Giữ portfolio và nhật ký lỗi cập nhật bằng thay đổi có thật, không cần biến mọi tuần thành một project mới.
