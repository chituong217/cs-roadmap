import { chapters as initialChapters, tasks as initialTasks } from './initial.js';
import { cppBasics, cppAdvanced, gitExtra, foundationSections } from './foundations.js';
import { systemSections } from './systems.js';
import { engineeringSections } from './engineering.js';
import { futureSections } from './future.js';
import { expandTasks } from './details/index.js';
import { reviseTasks, withPlacements } from './revision.js';
import { attachReadings } from './readings.js';
import { tracks, chapterToTrackId, capstoneProjects } from './tracks.js';

const old = initialTasks.map(t => ({ ...t }));
// Giữ ID của 32 nhiệm vụ cũ để mọi bản sao lưu tiếp tục dùng được.
const oldByChapter = id => old.filter(t => t.chapter === id);
const cpp = oldByChapter('cpp');
cpp.splice(1, 0, ...cppBasics.tasks);
const oop = oldByChapter('oop');
oop.splice(oop.length - 1, 0, ...cppAdvanced.tasks);
const replacements = {
  'oop-resource': { extra: 'Khi lớp tự sở hữu con trỏ cấp phát động, sao chép mặc định có thể không đủ an toàn. Dùng string và vector trước; nhiệm vụ tiếp theo sẽ xét sâu hơn quyền sở hữu và sao chép.' },
  'project-review': { todos: ['Thêm tìm kiếm sách theo một phần tên mà không phá chức năng tìm theo mã.', 'Tự lần theo đường đi từ menu tới dữ liệu trước khi sửa.', 'Chạy lại bảng tình huống kiểm thử và đọc git diff trước khi commit.', 'Ghi lại phần còn yếu để ôn; tiếp tục công cụ, toán rời rạc rồi cấu trúc dữ liệu.'] },
};
for (const task of old) Object.assign(task, replacements[task.id] || {});
const first = initialChapters.map(chapter => ({ chapter, tasks: chapter.id === 'cpp' ? cpp : chapter.id === 'oop' ? oop : chapter.id === 'git' ? [...oldByChapter('git'), ...gitExtra.tasks] : oldByChapter(chapter.id) }));
const byId = new Map([...engineeringSections, ...futureSections].map(s => [s.chapter.id, s]));
// Một chuỗi duy nhất; chương chỉ phục vụ mục lục. Kiến thức nền đứng trước nơi sử dụng.
// Đệ quy cần trước duyệt cây; thao tác bit cần trước lowbit của Fenwick.
const foundationOrdered = foundationSections.map(s => ({ chapter: s.chapter, tasks: s.tasks.map(t => ({ ...t })) }));
const algorithmSection = foundationOrdered.find(s => s.chapter.id === 'algorithms');
const recursion = algorithmSection.tasks.filter(t => t.id.startsWith('algo-recursion'));
algorithmSection.tasks = algorithmSection.tasks.filter(t => !t.id.startsWith('algo-recursion'));
const structures = foundationOrdered.find(s => s.chapter.id === 'structures');
structures.tasks.splice(structures.tasks.findIndex(t => t.id === 'dsa-tree'), 0, ...recursion.map(t => ({ ...t, chapter: 'structures' })));
const advanced = foundationOrdered.find(s => s.chapter.id === 'advanced-algo');
const bitmaskIndex = advanced.tasks.findIndex(t => t.id === 'algo-bitmask');
advanced.tasks.unshift(...advanced.tasks.splice(bitmaskIndex, 1));
const sections = [
  ...first, ...foundationOrdered, ...systemSections,
  byId.get('python'), byId.get('web'), byId.get('software'), byId.get('theory'),
  byId.get('security'), byId.get('hci-graphics'), byId.get('ai'), byId.get('distributed'),
  byId.get('professional'), byId.get('direction'), byId.get('capstone'), byId.get('career'),
];

export const chapters = sections.map(({ chapter }, i) => ({
  ...chapter,
  trackId: chapterToTrackId[chapter.id] || 'track-0',
  number: String(i + 1).padStart(2, '0')
}));

const expanded = expandTasks(sections.flatMap(s => s.tasks));
export const baselineTaskIds = expanded.map(t => t.id);

export const pedagogicalEnrichments = {
  // Track 0: Foundations & Gap Remediation
  'cpp-pointers': {
    extra: 'Bản chất vùng nhớ & con trỏ: Địa chỉ ô nhớ (Hexadecimal), giá trị, và kích thước con trỏ (8 bytes trên hệ thống 64-bit). Phân biệt const int* p (giá trị hằng) vs int* const p (địa chỉ hằng). Tuyệt đối không trả về tham chiếu/con trỏ tới biến cục bộ trên Stack vì vùng nhớ đó sẽ bị thu hồi ngay khi hàm kết thúc frame.'
  },
  'cpp-copy': {
    extra: 'Quy tắc Rule of Zero / Rule of Three / Rule of Five: Khi một lớp tự sở hữu tài nguyên động (heap memory, file descriptor), mặc định phép gán nông (shallow copy) sẽ dẫn đến lỗi Double-Free thảm họa. Bắt buộc triển khai đầy đủ Destructor, Copy Constructor, Copy Assignment Operator, Move Constructor và Move Assignment Operator; hoặc tốt nhất là áp dụng Rule of Zero bằng cách sử dụng std::unique_ptr và std::vector.'
  },
  'cpp-smart': {
    extra: 'Quản lý tài nguyên hiện đại RAII: std::unique_ptr biểu diễn quyền sở hữu độc quyền (move-only semantics), tự động giải phóng vùng nhớ khi ra khỏi phạm vi. std::shared_ptr đồng sở hữu qua biến đếm tham chiếu (Reference Counting). Dùng std::weak_ptr để phá vỡ hiện tượng tham chiếu vòng (Circular Reference) gây rò rỉ bộ nhớ giữa các shared_ptr.'
  },

  // Track 1: Programming & OOP
  'oop-virtual': {
    extra: 'Cơ chế Đa hình Động (Dynamic Polymorphism): Trình biên dịch chèn con trỏ bảng ảo vptr vào mỗi đối tượng và tạo bảng vtable chứa con trỏ hàm ảo. Khi xóa đối tượng lớp con qua con trỏ lớp cha, nếu lớp cha KHÔNG có virtual destructor, destructor của lớp con sẽ không được gọi -> dẫn đến rò rỉ tài nguyên nghiêm trọng. Gắn liền với Mini-Project 1: Space Invaders C++ (phân cấp Entity -> Alien/Ship).'
  },
  'oop-review': {
    extra: 'Rà soát chuẩn mực OOP và 5 nguyên lý SOLID: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion. Áp dụng GoF Design Patterns: Factory Pattern sinh đối tượng, Strategy Pattern thay đổi thuật toán lúc chạy, Observer Pattern thông báo sự kiện giữa các module.'
  },

  // Track 2: Algorithms & Data Structures
  'dsa-balanced': {
    extra: 'Cây AVL tự cân bằng: Hệ số cân bằng Balance Factor BF = h_left - h_right in {-1, 0, 1}. Nắm vững 4 phép xoay: Xoay Đơn (Left Rotation - RR, Right Rotation - LL) và Xoay Kép (Left-Right Rotation - LR, Right-Left Rotation - RL) để đảm bảo chiều cao cây luôn là O(log n), ngăn chặn hiện tượng cây suy biến thành danh sách liên kết.'
  },
  'graph-dijkstra': {
    extra: 'Thuật toán Dijkstra tìm đường đi ngắn nhất từ một nguồn: Sử dụng hàng đợi ưu tiên Min-Heap (std::priority_queue) với độ phức tạp O((V + E) log V). Điều kiện tiên quyết: Trọng số cạnh phải KHÔNG ÂM. Nếu có trọng số âm, Dijkstra có thể chốt nhãn sai; khi đó bắt buộc dùng Bellman-Ford O(V*E) để phát hiện chu trình âm. Gắn liền với Mini-Project 3: Graph Routing Engine.'
  },
  'graph-mst': {
    extra: 'Cây khung nhỏ nhất (MST): Thuật toán Kruskal sắp xếp E cạnh tăng dần và dùng cấu trúc tập hợp rời rạc Disjoint Set Union (DSU) với 2 kỹ thuật tối ưu: Path Compression (nén đường đi) và Union by Rank (gộp theo hạng) đạt độ phức tạp O(E log E). So sánh với thuật toán Prim phát triển lát cắt từ một đỉnh bằng Min-Heap O((V + E) log V).'
  },
  'algo-dp': {
    extra: 'Quy hoạch động (Dynamic Programming): Xác định 2 điều kiện tiên quyết: Cấu trúc con tối ưu (Optimal Substructure) và Bài toán con gối nhau (Overlapping Subproblems). Quy trình 5 bước: Định nghĩa trạng thái dp[i], tìm hệ thức truy hồi chuyển trạng thái, xác định bài toán cơ sở (base cases), xác định thứ tự tính toán (Topo order), và tối ưu không gian bộ nhớ (ví dụ: nén mảng 1 chiều trong bài toán Ba lô 0/1 Knapsack).'
  },

  // Track 3: Computer Systems & Networking
  'net-sockets': {
    extra: 'Lập trình Socket mạng mức thấp: Các hàm hệ thống socket(), bind(), listen(), accept(), connect(), send(), recv(), close(). Lưu ý cốt tử: TCP là giao thức byte stream, không bảo toàn ranh giới thông điệp -> bắt buộc tự cài đặt Message Framing (phân tách ký tự delimiter hoặc thêm header độ dài uint32_t payload_length) để tránh hiện tượng dính gói/phân mảnh gói tin (Packet Coalescing/Fragmentation). Gắn liền với Mini-Project 2: Multi-threaded Web Server.'
  },
  'net-udp-tcp': {
    extra: 'Tầng Giao vận (Transport Layer): So sánh UDP (phi kết nối, truyền nhanh không đảm bảo) vs TCP (hướng kết nối, tin cậy). Nắm vững cơ chế bắt tay 3 bước (3-way handshake: SYN -> SYN-ACK -> ACK), ngắt kết nối 4 bước (FIN -> ACK -> FIN -> ACK), Sequence/ACK numbers, Điều khiển luồng qua Sliding Window, và Điều khiển tắc nghẽn (AIMD, Slow Start, Congestion Avoidance, Fast Retransmit).'
  },
  'net-ip': {
    extra: 'Tầng Mạng & Kỹ thuật chia mạng con (CIDR Subnetting): Tính toán chính xác Network ID, Broadcast Address, Subnet Mask và dải Host khả dụng từ ký hiệu CIDR (ví dụ /24, /27). Hiểu rõ vai trò của NAT (Network Address Translation), DHCP (DORA process), và ICMP (Ping/Traceroute).'
  },

  // Track 4: Mathematical Foundations
  'math-logic': {
    extra: 'Logic toán học cho KHMT: Bảng chân trị, các luật De Morgan, luật kéo theo (p -> q tương đương ~p v q), mệnh đề phản đảo (~q -> ~p). Logic vị từ với lượng từ với mọi và tồn tại. Kỹ thuật chứng minh: chứng minh trực tiếp, phản đảo, phản chứng, và nguyên lý cực hạn.'
  },
  'math-induction': {
    extra: 'Quy nạp toán học: Ba bước nền tảng: Bước cơ sở (Base case), Giả thiết quy nạp (Inductive hypothesis), và Bước quy nạp (Inductive step). Áp dụng quy nạp mạnh và quy nạp cấu trúc để chứng minh tính đúng của thuật toán (Algorithm Correctness) và bất biến vòng lặp (Loop Invariants).'
  },
  'prob-bayes': {
    extra: 'Định lý Bayes và Suy diễn xác suất: P(A|B) = P(B|A)*P(A) / P(B). Phân biệt rõ Prior (tiền nghiệm P(A)), Likelihood (hợp lý P(B|A)), và Posterior (hậu nghiệm P(A|B)). Là cơ sở toán học trực tiếp cho thuật toán phân lớp Naive Bayes Classifier và các thuật toán học máy xác suất. Gắn liền với Mini-Project 4: Naive Bayes Spam Classifier.'
  },
  'stats-sampling': {
    extra: 'Định lý Giới hạn Trung tâm (CLT) & Suy diễn thống kê: Trung bình của một số lượng lớn biến ngẫu nhiên độc lập cùng phân phối (i.i.d) sẽ hội tụ về phân phối chuẩn Gaussian N(mu, sigma^2/n). Ước lượng hợp lý cực đại (MLE - Maximum Likelihood Estimation) là nền tảng tối ưu hóa hàm mất mát (Loss Function) trong Machine Learning.'
  },

  // Track 5: Developer Tooling & Engineering Practice
  'tools-shell': {
    extra: 'Dòng lệnh POSIX/Linux & Pipes: Làm chủ 3 luồng chuẩn: Standard Input (stdin - 0), Standard Output (stdout - 1), Standard Error (stderr - 2). Kỹ thuật đường ống pipe | kết hợp các tiện ích Unix (grep, awk, sed, find, xargs). Phân quyền file chmod (Read=4, Write=2, Execute=1).'
  },
  'git-branch': {
    extra: 'Git nâng cao & Giải quyết xung đột: Phân biệt Fast-forward merge vs 3-way merge commit. Phân tích và giải quyết thủ công merge conflicts (<<<<<<< HEAD, =======, >>>>>>>). Kỹ thuật interactive rebase (git rebase -i) để squash/gộp commit tạo lịch sử tuyến tính sạch sẽ, git stash tạm cất thay đổi, và quy chuẩn Conventional Commits.'
  },
  'tools-memory': {
    extra: 'Chẩn đoán và diệt lỗi bộ nhớ: Tích hợp AddressSanitizer (ASan) và UBSan qua cờ -fsanitize=address,undefined -g trên GCC/Clang để bắt lập tức lỗi Use-After-Free, Out-of-bounds, Stack Overflow lúc runtime. Dùng Valgrind Memcheck để rà soát toàn diện rò rỉ bộ nhớ (Definitely/Indirectly lost).'
  },
  'tools-build': {
    extra: 'Tự động hóa build với CMake hiện đại: Viết CMakeLists.txt tổ chức dự án đa thư mục chuẩn công nghiệp (src, include, tests). Quản lý cờ biên dịch chuẩn (-Wall -Wextra -std=c++17 -O2). Gắn liền với Mini-Project 5: Production-Ready C++ Project Scaffold & CI/CD với GitHub Actions.'
  },

  // Track 6: CS Specialization Readiness
  'db-transaction': {
    extra: 'Hệ quản trị CSDL quan hệ: Chuẩn hóa dữ liệu (1NF, 2NF, 3NF, BCNF) để loại bỏ trùng lặp và dị thường cập nhật. Hiểu sâu cơ chế chỉ mục B-Tree Index và tính chất ACID của Transaction: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập), Durability (Bền vững).'
  },
  'direction-choose': {
    extra: 'Chiến lược xét tuyển chuyên ngành KHMT HCMUS: Căn cứ điểm GPA tích lũy giai đoạn cơ sở (Năm 1 + Năm 2) với các môn cơ sở ngành cốt lõi (NMLT, KTLT, CTDL&GT, OOP, MMT, Toán rời rạc, Xác suất thống kê). Mục tiêu GPA an toàn: >= 8.0 - 8.5+. Chuẩn bị sớm portfolio 5 Capstone Mini-Projects để tạo lợi thế vượt trội.'
  }
};

export const tasks = attachReadings(withPlacements(reviseTasks(expanded))).map((t, i) => {
  const enrichment = pedagogicalEnrichments[t.id];
  return {
    ...t,
    trackId: chapterToTrackId[t.chapter] || 'track-0',
    extra: enrichment?.extra ? (t.extra ? `${t.extra} ${enrichment.extra}` : enrichment.extra) : t.extra,
    number: String(i + 1).padStart(3, '0')
  };
});

export const edition = {
  version: '2.0.0',
  title: 'Lộ trình KHMT Toàn diện · HCMUS & Chuẩn Quốc tế (7 Tracks)',
  scope: 'Lộ trình tự học cá nhân hóa chuẩn HCMUS và quốc tế; 7 tiến trình (tracks) có thứ tự rõ ràng, giải quyết dứt điểm lỗ hổng năm 1, gắn kết HK1 năm 2 và tối ưu xét tuyển chuyên ngành KHMT.',
  targetAudience: 'Sinh viên Năm 2 ĐH KHTN (HCMUS) chuẩn bị xét tuyển chuyên ngành Khoa học Máy tính',
  lastUpdated: '04/11/2026',
};

export { tracks, chapterToTrackId, capstoneProjects };
