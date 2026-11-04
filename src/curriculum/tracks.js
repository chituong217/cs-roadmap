/**
 * Single Source of Truth for the 7 Curriculum Tracks and Practical Capstone Mini-Projects.
 * Conforms to HCMUS Year 2 CS Curriculum Standards and International CS Benchmarks (CS2023, OSSU, TeachYourselfCS).
 */

export const tracks = [
  {
    id: 'track-0',
    trackNumber: 0,
    slug: 'foundations-remediation',
    title: 'Track 0: Nền tảng Lập trình & Bổ khuyết Lỗ hổng (Foundations & Gap Remediation)',
    shortTitle: 'Vá nền C++ & Bộ nhớ',
    tabLabel: 'C++ & Bộ nhớ',
    description: 'Xóa tan rào cản con trỏ, giải phóng nỗi sợ segmentation fault, làm chủ cơ chế phân vùng bộ nhớ Stack vs Heap, cấp phát động new/delete, triết lý RAII, Rule of 0/3/5, Smart Pointers (unique_ptr, shared_ptr, weak_ptr) và C++ STL hiện đại.',
    icon: 'Terminal',
    colorAccent: '#0284c7',
    hcmusAlignment: ['Nhập môn lập trình (CSC10001)', 'Kỹ thuật lập trình (CSC10002)'],
    totalEstimatedHours: 60,
    chapterIds: ['cpp', 'project'],
  },
  {
    id: 'track-1',
    trackNumber: 1,
    slug: 'programming-oop',
    title: 'Track 1: Lập trình Hướng đối tượng & Thiết kế Phần mềm (Programming & OOP)',
    shortTitle: 'OOP & Thiết kế Phần mềm',
    tabLabel: 'OOP',
    description: 'Nắm chắc điểm 10 môn OOP (CSC10003) HK1 Năm 2: 4 tính chất cốt lõi (Đóng gói, Kế thừa, Đa hình, Trừu tượng), cơ chế bảng hàm ảo vtable/vptr, virtual destructor ở lớp cha, nạp chồng toán tử an toàn, nguyên lý SOLID và GoF Design Patterns (Factory, Strategy, Observer, Singleton).',
    icon: 'Boxes',
    colorAccent: '#8b5cf6',
    hcmusAlignment: ['Lập trình hướng đối tượng (CSC10003)'],
    totalEstimatedHours: 70,
    chapterIds: ['oop'],
  },
  {
    id: 'track-2',
    trackNumber: 2,
    slug: 'algorithms-data-structures',
    title: 'Track 2: Cấu trúc Dữ liệu & Giải thuật Cốt lõi (Algorithms & Data Structures)',
    shortTitle: 'DSA Cốt lõi & Giải thuật',
    tabLabel: 'DSA',
    description: 'Lấp dứt điểm lỗ hổng thuật toán sắp xếp (Quicksort phân hoạch Hoare/Lomuto, Mergesort, Heapsort), Cây (BST, AVL với 4 phép xoay LL/RR/LR/RL, Binary Heap), Đồ thị (BFS/DFS, Topological sort, Dijkstra với Priority Queue, Bellman-Ford, Floyd-Warshall, Kruskal với DSU nén đường đi, Prim), và Quy hoạch động (Knapsack, LIS O(n log n), LCS).',
    icon: 'Network',
    colorAccent: '#10b981',
    hcmusAlignment: ['Cấu trúc dữ liệu và giải thuật (CSC10004)'],
    totalEstimatedHours: 110,
    chapterIds: ['structures', 'algorithms', 'graphs', 'advanced-algo'],
  },
  {
    id: 'track-3',
    trackNumber: 3,
    slug: 'systems-networking',
    title: 'Track 3: Hệ thống Máy tính & Mạng Máy tính (Computer Systems & Networking)',
    shortTitle: 'Kiến trúc & Mạng Máy tính',
    tabLabel: 'Mạng & OS',
    description: 'Hoàn thành xuất sắc môn Mạng máy tính (CSC10008) HK1 Năm 2: Mô hình 5 tầng TCP/IP, TCP 3-way handshake và 4-way termination, điều khiển luồng (Sliding Window), điều khiển tắc nghẽn (AIMD, Slow Start), socket programming đa luồng, message framing chống dính gói, chia mạng con CIDR subnetting, DNS, HTTP/1.1 vs HTTP/2 vs HTTP/3 và thực hành Wireshark.',
    icon: 'Cpu',
    colorAccent: '#f59e0b',
    hcmusAlignment: ['Kiến trúc máy tính (CSC10007)', 'Hệ điều hành (CSC10005)', 'Mạng máy tính (CSC10008)'],
    totalEstimatedHours: 85,
    chapterIds: ['architecture', 'os', 'network'],
  },
  {
    id: 'track-4',
    trackNumber: 4,
    slug: 'mathematical-foundations',
    title: 'Track 4: Cơ sở Toán học cho Khoa học Máy tính (Mathematical Foundations)',
    shortTitle: 'Toán Rời rạc & Xác suất Thống kê',
    tabLabel: 'Toán & XS',
    description: 'Tối ưu hóa điểm số môn Toán rời rạc & tổ hợp (MTH00040) và Xác suất Thống kê cho CNTT (MTH00041) HK1 Năm 2: Logic mệnh đề & vị từ, chứng minh quy nạp, hệ thức truy hồi, hàm sinh (Generating Functions), nguyên lý Dirichlet, Định lý Bayes, biến ngẫu nhiên và phân phối (Bernoulli, Poisson, Gaussian Normal), Định lý Giới hạn Trung tâm (CLT), MLE và kiểm định giả thuyết.',
    icon: 'Sigma',
    colorAccent: '#ec4899',
    hcmusAlignment: ['Toán rời rạc & tổ hợp (MTH00040)', 'Xác suất thống kê cho CNTT (MTH00041)', 'Đại số tuyến tính (MTH00030)'],
    totalEstimatedHours: 80,
    chapterIds: ['discrete', 'math'],
  },
  {
    id: 'track-5',
    trackNumber: 5,
    slug: 'developer-tooling-engineering',
    title: 'Track 5: Công cụ Phát triển & Kỹ thuật Kỹ nghệ (Developer Tooling & Engineering Practice)',
    shortTitle: 'Công cụ & Kỹ thuật Thực chiến',
    tabLabel: 'Công cụ',
    description: 'Bổ khuyết toàn diện Missing Semester: Git CLI chuyên nghiệp (phân nhánh, giải quyết xung đột merge, interactive rebase, stash, cherry-pick, PR workflow, Conventional Commits), Debugger GDB/LLDB/VS Code, diệt lỗi bộ nhớ với AddressSanitizer/Valgrind, POSIX shell & pipes, CMake đa mô-đun và tự động hóa CI/CD với GitHub Actions.',
    icon: 'Wrench',
    colorAccent: '#6366f1',
    hcmusAlignment: ['Thực hành Kỹ thuật Lập trình', 'Phương pháp Phát triển Phần mềm (CSC13001)'],
    totalEstimatedHours: 65,
    chapterIds: ['git', 'tools', 'software'],
  },
  {
    id: 'track-6',
    trackNumber: 6,
    slug: 'cs-specialization-readiness',
    title: 'Track 6: Định hướng & Sẵn sàng Chuyên ngành KHMT (CS Specialization Readiness)',
    shortTitle: 'Sẵn sàng Chuyên ngành KHMT',
    tabLabel: 'Chuyên ngành',
    description: 'Chiến lược tối ưu CPA/GPA xét tuyển chuyên ngành KHMT cuối Năm 2: Hệ quản trị CSDL quan hệ (SQL, chuẩn hóa 1NF/2NF/3NF/BCNF, chỉ mục B-Tree, giao dịch ACID), Web RESTful API, Nhập môn AI & Machine Learning (NumPy, Scikit-learn, PyTorch cơ bản), Lý thuyết tính toán (Automata, P vs NP) và xây dựng 5 Capstone Projects portfolio chứng minh năng lực kỹ nghệ.',
    icon: 'GraduationCap',
    colorAccent: '#14b8a6',
    hcmusAlignment: ['Hệ quản trị cơ sở dữ liệu (CSC10006)', 'Nhập môn Trí tuệ Nhân tạo (CSC14001)', 'Xét tuyển Chuyên ngành KHMT (Cuối Năm 2)'],
    totalEstimatedHours: 120,
    chapterIds: ['database', 'python', 'web', 'theory', 'security', 'hci-graphics', 'ai', 'distributed', 'professional', 'direction', 'capstone', 'career'],
  },
];

export const chapterToTrackId = {
  // Track 0: Foundations & Gap Remediation
  cpp: 'track-0',
  project: 'track-0',

  // Track 1: Programming & OOP
  oop: 'track-1',

  // Track 2: Algorithms & Data Structures
  structures: 'track-2',
  algorithms: 'track-2',
  graphs: 'track-2',
  'advanced-algo': 'track-2',

  // Track 3: Computer Systems & Networking
  architecture: 'track-3',
  os: 'track-3',
  network: 'track-3',

  // Track 4: Mathematical Foundations
  discrete: 'track-4',
  math: 'track-4',

  // Track 5: Developer Tooling & Engineering Practice
  git: 'track-5',
  tools: 'track-5',
  software: 'track-5',

  // Track 6: CS Specialization Readiness
  database: 'track-6',
  python: 'track-6',
  web: 'track-6',
  theory: 'track-6',
  security: 'track-6',
  'hci-graphics': 'track-6',
  ai: 'track-6',
  distributed: 'track-6',
  professional: 'track-6',
  direction: 'track-6',
  capstone: 'track-6',
  career: 'track-6',
};

export function getTrackByChapterId(chapterId) {
  const trackId = chapterToTrackId[chapterId];
  return tracks.find(t => t.id === trackId) || tracks[0];
}

export const capstoneProjects = [
  {
    id: 'project-space-invaders',
    projectNumber: 1,
    title: 'Mini-Project 1: Game Arcade 2D Space Invaders / Battle City C++',
    trackId: 'track-1',
    targetTrack: 'Track 1: Lập trình Hướng đối tượng & Thiết kế Phần mềm (Programming & OOP)',
    pedagogicalObjective: 'Làm chủ toàn diện các nguyên lý OOP, SOLID và GoF Design Patterns trên C++17; xóa bỏ hoàn toàn thói quen dùng con trỏ thô (raw pointer) sở hữu tài nguyên, đảm bảo an toàn bộ nhớ tuyệt đối bằng RAII.',
    technicalScope: [
      'Phân cấp lớp thực thể: Base class Entity với các phương thức thuần ảo update(float dt) = 0, render() = 0; các lớp con kế thừa Ship, Alien, Bullet, Obstacle.',
      'Quản lý vòng đời và bộ nhớ: 100% đối tượng trong game được lưu trữ bằng std::vector<std::unique_ptr<Entity>>. Áp dụng triệt để RAII, rule of 0/3/5 và virtual destructor.',
      'Mẫu thiết kế (Design Patterns): Factory Pattern (AlienFactory sinh biến thể quái vật theo wave), Strategy Pattern (MovementStrategy: di chuyển zig-zag, di chuyển săn đuổi), Observer Pattern (ScoreManager & SoundManager lắng nghe sự kiện OnAlienDestroyed).',
      'Xử lý va chạm (Collision Detection) giữa Bullet và Alien/Obstacle dựa trên hình hộp bao AABB (Axis-Aligned Bounding Box).'
    ],
    verificationCriteria: [
      'Biên dịch sạch với các cờ nghiêm ngặt: -Wall -Wextra -pedantic -std=c++17.',
      'Kiểm thử rò rỉ bộ nhớ với AddressSanitizer (-fsanitize=address,undefined): Chơi 30 phút liên tục, chuyển wave, thoát game đảm bảo 0 bytes leaked (0 memory leaks).',
      'Định dạng mã chuẩn theo Google C++ Style Guide hoặc clang-format.'
    ],
    relatedTaskIds: ['oop-class', 'oop-inheritance', 'oop-virtual', 'oop-abstract', 'cpp-smart', 'oop-review', 'project-review']
  },
  {
    id: 'project-web-server',
    projectNumber: 2,
    title: 'Mini-Project 2: Multi-threaded HTTP/1.1 Web Server & Socket Chat Server',
    trackId: 'track-3',
    targetTrack: 'Track 3: Hệ thống Máy tính & Mạng Máy tính (Computer Systems & Networking)',
    pedagogicalObjective: 'Làm chủ lập trình mạng socket mức thấp (BSD POSIX Sockets / Winsock), hiểu sâu sắc cơ chế truyền byte stream của TCP, giải quyết triệt để vấn đề dính gói / phân mảnh và xử lý đồng thời đa luồng.',
    technicalScope: [
      'Giao thức tầng giao vận: Khởi tạo socket, bind, listen, accept, read/recv, write/send trên nền TCP.',
      'Phân tích cú pháp HTTP/1.1: Tự viết parser bóc tách Request Line (Method GET/POST, Path, Version), Request Headers (Host, Content-Type, Content-Length) và Request Body.',
      'Phục vụ tài nguyên tĩnh: Đọc file HTML, CSS, JS, ảnh PNG/JPEG và trả về Response với đúng Status Code (200 OK, 404 Not Found, 400 Bad Request) và MIME Content-Type.',
      'Đóng khung thông điệp (Message Framing): Với tính năng Chat Server, thiết kế nhị phân header có uint32_t payload_length + uint16_t msg_type để ngăn hiện tượng TCP Packet Coalescing / Fragmentation.',
      'Kiến trúc đồng thời: Dựng Thread Pool với hàng đợi tác vụ thread-safe (Task Queue) bảo vệ bởi std::mutex và std::condition_variable phục vụ hàng chục client đồng thời.'
    ],
    verificationCriteria: [
      'Kiểm thử tải bằng Apache Bench: ab -n 1000 -c 20 http://localhost:8080/ đạt 100% requests thành công, không gặp deadlock hay crash.',
      'Kiểm tra ngắt kết nối đột ngột: Client đóng socket giữa chừng không làm server bị SIGPIPE hoặc crash.',
      'Bắt gói tin bằng Wireshark xác nhận đúng bắt tay 3 bước TCP SYN -> SYN-ACK -> ACK và đóng kết nối 4 bước FIN -> ACK.'
    ],
    relatedTaskIds: ['net-sockets', 'net-http', 'os-threads', 'os-synchronization', 'os-producer', 'net-review', 'net-service-project']
  },
  {
    id: 'project-graph-routing',
    projectNumber: 3,
    title: 'Mini-Project 3: Graph Routing Engine & Benchmarking (Hệ thống Tìm đường Thông minh)',
    trackId: 'track-2',
    targetTrack: 'Track 2: Cấu trúc Dữ liệu & Giải thuật Cốt lõi (Algorithms & Data Structures)',
    pedagogicalObjective: 'Củng cố sâu sắc cấu trúc dữ liệu đồ thị, thành thạo các thuật toán tìm đường kinh điển và đo lường độ phức tạp tiệm cận trong thực tế (Benchmarking).',
    technicalScope: [
      'Nạp dữ liệu bản đồ: Đọc file đồ thị thực tế (tọa độ các đỉnh V và danh sách cạnh có trọng số E biểu diễn mạng lưới giao thông).',
      'Cài đặt thuật toán từ đầu (From scratch): BFS cho đồ thị không trọng số; Dijkstra với Binary Min-Heap tự viết; A* với hàm Heuristic khoảng cách Euclid / Manhattan; Bellman-Ford phát hiện chu trình âm; Kruskal với DSU (Path Compression & Union by Rank) tìm cây khung nhỏ nhất (MST).',
      'Tối ưu hóa: So sánh hiệu năng giữa cấu trúc Danh sách kề (Adjacency List) và Ma trận kề (Adjacency Matrix) trên đồ thị thưa vs đồ thị dày.'
    ],
    verificationCriteria: [
      'Benchmarking: Sinh đồ thị ngẫu nhiên từ 10^3 đến 10^5 đỉnh với mật độ cạnh khác nhau, đo thời gian thực thi (milliseconds) và lượng RAM tiêu thụ.',
      'Đối chiếu lý thuyết Big-O: Vẽ biểu đồ thời gian thực thi theo kích thước dữ liệu, so sánh đường cong thực nghiệm với O((V + E) log V).',
      'Kiểm thử độ chính xác: Xác nhận kết quả tìm đường khớp 100% với giải thuật tham chiếu trên các test case phức tạp.'
    ],
    relatedTaskIds: ['graph-bfs', 'graph-dijkstra', 'graph-kruskal', 'graph-shortest-review', 'graph-mst-practice', 'dsa-index-project']
  },
  {
    id: 'project-naive-bayes',
    projectNumber: 4,
    title: 'Mini-Project 4: Naive Bayes Spam Classifier & Monte Carlo Simulation',
    trackId: 'track-4',
    targetTrack: 'Track 4: Cơ sở Toán học cho Khoa học Máy tính (Mathematical Foundations)',
    pedagogicalObjective: 'Chuyển hóa lý thuyết xác suất, Định lý Bayes và thống kê suy diễn thành ứng dụng Khoa học Dữ liệu / Trí tuệ Nhân tạo thực tế bằng Python.',
    technicalScope: [
      'Mô phỏng Monte Carlo: Lập trình mô phỏng quá trình tung xúc xắc và tổng biến ngẫu nhiên độc lập để kiểm chứng trực quan Định lý Giới hạn Trung tâm (CLT), vẽ biểu đồ Histogram hội tụ về đường cong Gaussian chuẩn N(mu, sigma^2).',
      'Bộ phân loại thư rác (Naive Bayes Classifier): Tiền xử lý văn bản (tokenization, lowercase, loại bỏ stopwords, tính tần suất từ).',
      'Mô hình xác suất: Ước lượng tiền nghiệm P(Spam), P(Ham) và hợp lý P(w_i|Spam), P(w_i|Ham).',
      'Kỹ thuật số học: Áp dụng Laplace smoothing (+1) tránh xác suất bằng 0 cho từ mới; tính toán trên thang Log-probability log P(C) + sum log P(w_i|C) để chống lỗi tràn số thực dưới (Underflow).'
    ],
    verificationCriteria: [
      'Đánh giá trên bộ dữ liệu SMS Spam Collection dataset: Tính ma trận nhầm lẫn (Confusion Matrix), Accuracy, Precision, Recall và F1-Score.',
      'Đạt F1-Score >= 0.92 trên tập test độc lập.',
      'Kiểm thử phân loại thời gian thực: Nhập tin nhắn mới và đưa ra nhãn Spam/Ham kèm xác suất tin cậy hậu nghiệm (posterior probability).'
    ],
    relatedTaskIds: ['prob-bayes', 'prob-random', 'prob-distributions', 'stats-sampling', 'math-synthesis', 'ml-linear', 'ml-metrics', 'ml-project']
  },
  {
    id: 'project-cpp-devops',
    projectNumber: 5,
    title: 'Mini-Project 5: Production-Ready C++ Project Scaffold & CI/CD Pipeline',
    trackId: 'track-5',
    targetTrack: 'Track 5: Công cụ Phát triển & Kỹ thuật Kỹ nghệ (Developer Tooling & Engineering Practice)',
    pedagogicalObjective: 'Làm chủ quy trình kỹ thuật phần mềm hiện đại, sẵn sàng cho các đồ án lớn môn học tại HCMUS và môi trường kỹ nghệ tại các công ty công nghệ.',
    technicalScope: [
      'Quản lý mã nguồn & Quy chuẩn Git: Khởi tạo Git repo với Feature Branch Workflow, Conventional Commits (feat, fix, refactor, test, docs).',
      'Git Hooks: Cấu hình pre-commit hook tự động chạy clang-format kiểm tra chuẩn mã hóa và chặn commit nếu vi phạm.',
      'Hệ thống Build hiện đại với CMake: Cấu hình CMakeLists.txt phân tầng đa thư mục: src/ (mã nguồn thư viện), include/ (header công khai), app/ (file main), tests/ (unit tests). Quản lý cờ biên dịch chuẩn (-Wall -Wextra -Werror -std=c++17 -O2).',
      'Unit Testing: Tích hợp Google Test (GTest) hoặc Catch2 viết bài kiểm thử tự động cho toàn bộ logic nghiệp vụ.',
      'Tự động hóa CI/CD: Viết workflow GitHub Actions (.github/workflows/ci.yml) tự động kích hoạt mỗi khi có Push hoặc Pull Request: kiểm tra format mã, biên dịch trên Ubuntu, chạy toàn bộ test suite, và chạy kiểm tra AddressSanitizer.'
    ],
    verificationCriteria: [
      'Chạy cmake -B build -S . && cmake --build build hoàn thành không có cảnh báo nào.',
      'Chạy ctest trong thư mục build đạt 100% bài test pass.',
      'Tự tạo Pull Request trên GitHub và xác nhận badge build GitHub Actions chuyển màu xanh lá (All checks passed).'
    ],
    relatedTaskIds: ['tools-shell', 'tools-build', 'tools-memory', 'git-first', 'git-branch', 'git-remote', 'se-collaboration', 'cap-quality']
  }
];

export function getProjectByTrackId(trackId) {
  return capstoneProjects.filter(p => p.trackId === trackId);
}
