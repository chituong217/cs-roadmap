import { chapters as initialChapters, tasks as initialTasks } from './initial.js';
import { cppBasics, cppAdvanced, gitExtra, foundationSections } from './foundations.js';
import { systemSections } from './systems.js';
import { engineeringSections } from './engineering.js';
import { futureSections } from './future.js';
import { expandTasks } from './details/index.js';
import { reviseTasks, withPlacements } from './revision.js';
import { attachReadings } from './readings.js';
import { tracks as baseTracks, chapterToTrackId as baseChapterToTrackId, capstoneProjects } from './tracks.js';
import { applyEdition } from './edition.js';
export { learnerProfile, stages } from './edition.js';

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

const legacyChapters = sections.map(({ chapter }, i) => ({
  ...chapter,
  trackId: baseChapterToTrackId[chapter.id] || 'track-0',
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
    extra: 'Mô hình nhận thức bộ nhớ vật lý: Biến con trỏ trên Stack lưu địa chỉ vùng nhớ Heap. Khi sao chép nông (shallow copy), hai con trỏ trỏ chung một ô nhớ Heap, dẫn tới lỗi Double-Free thảm họa hoặc con trỏ treo (dangling pointer) khi đối tượng bị hủy. Giải pháp bản chất: Triệt để áp dụng Rule of Zero bằng cách sử dụng các container chuẩn như std::vector và std::string tự động quản lý vòng đời bộ nhớ, thay vì tự viết destructor/copy constructor thủ công dễ rò rỉ. Đọc cẩm nang tại docs/guides/01-MEMORY-POINTERS-RAII.md.'
  },
  'cpp-smart': {
    extra: 'Quản lý tài nguyên hiện đại RAII: std::unique_ptr biểu diễn quyền sở hữu độc quyền (exclusive ownership), tự động giải phóng vùng nhớ Heap khi đối tượng ra khỏi phạm vi (scope) mà không cần gọi delete thủ công. Sử dụng std::make_unique để khởi tạo an toàn. Tuyệt đối không tạo hai unique_ptr từ cùng một địa chỉ con trỏ thô. Đọc cẩm nang tại docs/guides/01-MEMORY-POINTERS-RAII.md.'
  },

  // Track 1: Programming & OOP
  'oop-class': {
    extra: 'Bản chất Đóng gói (Encapsulation): Bảo vệ bất biến (Invariants) của đối tượng bằng cách ẩn giấu trạng thái nội bộ trong phân vùng private. Chỉ cung cấp các phương thức thao tác nghiệp vụ có kiểm tra tính hợp lệ qua giao diện công khai (public interface), triệt tiêu thói quen xấu viết getter/setter cơ học làm lộ dữ liệu nội bộ.'
  },
  'oop-composition': {
    extra: 'Nguyên lý Composition over Inheritance: Ưu tiên quan hệ Has-A (chứa) thay vì lạm dụng Is-A (kế thừa). Đóng gói các đối tượng con vào lớp cha giúp giảm độ kết dính (loose coupling), ngăn chặn lỗi thiết kế Lớp cơ sở mong manh (Fragile Base Class problem) và cho phép linh hoạt thay đổi thành phần lúc chạy.'
  },
  'oop-inheritance': {
    extra: 'Bản chất Kế thừa (Inheritance): Xây dựng phân cấp kiểu dữ liệu IS-A chân chính. Phân định rõ 3 mức truy cập public, protected, private; thứ tự thực thi constructor (lớp cha trước con sau) và destructor (lớp con trước cha sau). Cảnh báo: truyền đối tượng con theo giá trị vào hàm nhận lớp cha sẽ gây hiện tượng cắt cụt đối tượng (Object Slicing).'
  },
  'oop-virtual': {
    extra: 'Cơ chế Đa hình Động (Dynamic Polymorphism Under The Hood): Trình biên dịch chèn con trỏ bảng ảo vptr (8 bytes) vào đầu mỗi đối tượng và tạo bảng vtable chứa con trỏ hàm ảo trong phân vùng dữ liệu chỉ đọc (.rodata); CPU gọi hàm qua 3 bước tra cứu gián tiếp. BẮT BUỘC khai báo virtual destructor (virtual ~Base()) ở mọi lớp cơ sở đa hình để ngăn chặn lỗi rò rỉ bộ nhớ thảm họa khi giải phóng đối tượng con qua con trỏ lớp cha. Gắn liền với Mini-Project 1: Space Invaders C++ (phân cấp Entity -> Alien/Ship). Tài liệu: docs/guides/02-VIRTUAL-DISPATCH-OOP-SOLID.md và docs/projects/01-SPACE-INVADERS-CPP.md.'
  },
  'oop-abstract': {
    extra: 'Lớp trừu tượng (Abstract Base Class) & Giao diện thuần ảo (= 0): Định nghĩa hợp đồng hành vi bắt buộc mà mọi lớp con phải tuân thủ. Không thể khởi tạo trực tiếp đối tượng từ lớp trừu tượng; trình biên dịch cưỡng chế kiểm tra tính đầy đủ của các hàm ảo tại thời điểm biên dịch, bảo đảm nguyên lý đa hình an toàn.'
  },
  'oop-review': {
    extra: 'Rà soát chuẩn mực OOP và 5 nguyên lý SOLID: Single Responsibility (mỗi lớp 1 lý do thay đổi), Open/Closed (mở rộng qua đa hình, đóng sửa đổi), Liskov Substitution (lớp con thay thế hoàn hảo lớp cha), Interface Segregation (chia nhỏ giao diện), Dependency Inversion (phụ thuộc vào abstraction). Áp dụng GoF Design Patterns: Factory Pattern đóng gói khởi tạo, Strategy Pattern thay đổi thuật toán lúc chạy, Observer Pattern phân tách liên kết. Tài liệu: docs/guides/02-VIRTUAL-DISPATCH-OOP-SOLID.md.'
  },

  // Track 2: Algorithms & Data Structures
  'dsa-balanced': {
    extra: 'Cây AVL tự cân bằng: Hệ số cân bằng Balance Factor BF = h_left - h_right in {-1, 0, 1}. Nắm vững 4 phép xoay: Xoay Đơn (Left Rotation - RR, Right Rotation - LL) và Xoay Kép (Left-Right Rotation - LR, Right-Left Rotation - RL) để đảm bảo chiều cao cây luôn là O(log n), ngăn chặn hiện tượng cây suy biến thành danh sách liên kết.'
  },
  'algo-search': {
    extra: 'Tìm kiếm nhị phân trên mảng đã sắp xếp: Dựa trên tính đơn điệu để cắt bỏ 50% không gian tìm kiếm trong O(1). Bất biến: target luôn nằm trong [low, high]. Tính mid = low + (high - low) / 2 chống tràn số. Cài đặt chuẩn lower_bound (vị trí đầu tiên >= target) và upper_bound (vị trí đầu tiên > target). Tài liệu: docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md và docs/exercises/02-BINARY-SEARCH-EXERCISES.md.'
  },
  'algo-binary-practice': {
    extra: 'Chặt nhị phân trên kết quả (Binary Search on Answer): Chuyển bài toán tối ưu thành bài toán kiểm tra tính khả thi can(mid) có tính đơn điệu (FFFF...TTTT hoặc TTTT...FFFF). Trong CSES Factory Machines, hàm can(T) tính tổng sản lượng sum(T/k) với phạm vi long long tới 10^18 và dừng sớm chống tràn số. Tài liệu: docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md và docs/exercises/02-BINARY-SEARCH-EXERCISES.md.'
  },
  'algo-merge': {
    extra: 'Merge Sort & Chia để trị (Divide and Conquer): Hệ thức truy hồi T(N) = 2T(N/2) + O(N) chứng minh thời gian O(N log N) trong mọi trường hợp. Bất biến ổn định (Stable Sort): khi a[i] <= a[j], luôn nhặt phần tử bên trái trước để bảo toàn thứ tự ban đầu. Sử dụng mảng đệm temp truyền tham chiếu vector<int>& để tránh cấp phát lặp lại trong đệ quy. Tài liệu: docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md và docs/exercises/01-SORTING-EXERCISES.md.'
  },
  'algo-quick-heap': {
    extra: 'Quicksort & Cơ chế phân hoạch: Phân hoạch Lomuto (con trỏ chậm/nhanh) vs Hoare (hai con trỏ dồn từ hai đầu vào giữa, tối ưu gấp 3 lần số phép đổi chỗ). Khắc phục suy biến O(N²) bằng Randomized Pivot (chọn ngẫu nhiên một phần tử đổi chỗ với a[left]). Sắp xếp tại chỗ (in-place) với ngăn xếp O(log N). Tài liệu: docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md và docs/exercises/01-SORTING-EXERCISES.md.'
  },
  'algo-two-pointers': {
    extra: 'Kỹ thuật hai con trỏ (Two Pointers): Con trỏ ngược chiều trên mảng sắp xếp (L = 0, R = N - 1) loại bỏ 1 ứng viên mỗi bước trong O(N). Phân biệt với Cửa sổ trượt (Sliding Window) cùng chiều: mở rộng right++ và co left++ khi vi phạm ràng buộc. Cảnh báo: cửa sổ trượt theo tổng chỉ bảo toàn đơn điệu khi mảng toàn số không âm; có số âm phải dùng Prefix Sum + Hash Map. Tài liệu: docs/guides/04-TWO-POINTERS-SLIDING-WINDOW.md và docs/exercises/03-TWO-POINTERS-SLIDING-WINDOW-EXERCISES.md.'
  },
  'algo-two-practice': {
    extra: 'Thực hành Hai con trỏ & Cửa sổ trượt: Trong CSES Playlist (dãy con không lặp), dùng map/unordered_map lưu vị trí xuất hiện gần nhất lastPos[val], co left = max(left, lastPos[val] + 1) đạt O(N) khấu hao (mỗi phần tử thêm/bỏ tối đa 1 lần). Trong CSES Sum of Two Values, lưu cặp {giá trị, chỉ số gốc} trước khi sort. Tài liệu: docs/guides/04-TWO-POINTERS-SLIDING-WINDOW.md và docs/exercises/03-TWO-POINTERS-SLIDING-WINDOW-EXERCISES.md.'
  },
  'graph-dfs': {
    extra: 'Duyệt đồ thị theo chiều sâu (DFS): Sử dụng Call Stack khám phá các nhánh đồ thị đạt O(V + E). Kỹ thuật tô 3 màu phát hiện chu trình có hướng: 0 (chưa thăm), 1 (đang trong ngăn xếp đệ quy), 2 (hoàn tất). Gặp cạnh nối tới đỉnh màu 1 chính là cạnh ngược (back-edge) chứng minh có chu trình! Tài liệu: docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md và docs/exercises/05-GRAPH-EXERCISES.md.'
  },
  'graph-bfs': {
    extra: 'Duyệt đồ thị theo chiều rộng (BFS): Dùng std::queue duyệt theo từng lớp khoảng cách, tìm đường đi ngắn nhất trên đồ thị không trọng số. Quy tắc vàng: BẮT BUỘC đánh dấu visited[v] = true ngay khi PUSH vào queue (không chờ pop) để tránh MLE/TLE. Lưu vết qua mảng parent. Tài liệu: docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md và docs/exercises/05-GRAPH-EXERCISES.md.'
  },
  'graph-topological': {
    extra: 'Sắp xếp Topo (Topological Sort) trên DAG: Mô hình hóa thứ tự phụ thuộc và môn học tiên quyết. Thuật toán Kahn (BFS theo indegree): nạp các đỉnh có indegree == 0 vào queue, giảm indegree đỉnh kề khi duyệt. Nếu số đỉnh lấy ra < V, phát hiện đồ thị có chu trình. Tài liệu: docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md và docs/exercises/05-GRAPH-EXERCISES.md.'
  },
  'graph-dijkstra': {
    extra: 'Thuật toán Dijkstra tìm đường đi ngắn nhất từ một nguồn: Sử dụng hàng đợi ưu tiên Min-Heap (std::priority_queue) với độ phức tạp O((V + E) log V). Điều kiện tiên quyết: Trọng số cạnh phải KHÔNG ÂM (nhãn nhỏ nhất lấy ra được chốt vĩnh viễn). Kỹ thuật tỉa bản ghi lỗi thời: if (d > dist[u]) continue. Gắn liền với Mini-Project 3: Graph Routing Engine. Tài liệu: docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md và docs/exercises/05-GRAPH-EXERCISES.md.'
  },
  'graph-dsu': {
    extra: 'Tập hợp rời rạc Disjoint Set Union (DSU): Quản lý phân hoạch các lớp tương đương và thành phần liên thông động. Hai kỹ thuật tối ưu bắt buộc: Path Compression (parent[u] = find(parent[u])) và Union by Size/Rank, đưa chi phí mỗi thao tác về O(alpha(N)) gần như O(1) khấu hao. Tài liệu: docs/guides/05-DISJOINT-SET-UNION-DSU.md và docs/exercises/04-DSU-EXERCISES.md.'
  },
  'graph-mst': {
    extra: 'Cây khung nhỏ nhất (MST): Thuật toán Kruskal sắp xếp E cạnh tăng dần và dùng cấu trúc tập hợp rời rạc Disjoint Set Union (DSU) với 2 kỹ thuật tối ưu: Path Compression (nén đường đi) và Union by Rank (gộp theo hạng) đạt độ phức tạp O(E log E). So sánh với thuật toán Prim phát triển lát cắt từ một đỉnh bằng Min-Heap O((V + E) log V).'
  },
  'graph-kruskal': {
    extra: 'Thuật toán Kruskal tìm MST: Dựa trên tính chất lát cắt (Cut Property). Sắp xếp E cạnh tăng dần trong O(E log E), duyệt từng cạnh và dùng DSU kết nạp nếu không tạo chu trình (find(u) != find(v)). Dừng khi đủ V - 1 cạnh hoặc báo đồ thị không liên thông. Tài liệu: docs/guides/05-DISJOINT-SET-UNION-DSU.md và docs/exercises/04-DSU-EXERCISES.md.'
  },
  'algo-dp': {
    extra: 'Quy hoạch động (Dynamic Programming): Khung tư duy 6 bước SRTBOT (Subproblems, Relate, Topo order trên DAG, Base cases, Original problem, Time). 2 điều kiện tiên quyết: Cấu trúc con tối ưu và Bài toán con gối nhau. So sánh Top-down Memoization vs Bottom-up Tabulation. Tài liệu: docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md và docs/exercises/06-DYNAMIC-PROGRAMMING-EXERCISES.md.'
  },
  'algo-knapsack': {
    extra: 'Ba lô 0/1 (Knapsack): Trạng thái dp[i][w] = max(dp[i-1][w], dp[i-1][w - weight[i]] + value[i]). Bản chất nén mảng 1D: BẮT BUỘC duyệt ngược w từ W về weight[i] để ngăn vật i bị chọn lặp lại trong cùng lượt (khác Unbounded Knapsack duyệt xuôi). CSES Book Shop. Tài liệu: docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md và docs/exercises/06-DYNAMIC-PROGRAMMING-EXERCISES.md.'
  },
  'algo-sequence-dp': {
    extra: 'Dãy con chung dài nhất (LCS): Lưới trạng thái 2D dp[i][j] trên tiền tố chuỗi: nếu S[i-1] == T[j-1] thì dp[i][j] = dp[i-1][j-1] + 1; ngược lại max(dp[i-1][j], dp[i][j-1]). Truy vết từ ô (N, M) về (0, 0) để khôi phục chuỗi. Tài liệu: docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md và docs/exercises/06-DYNAMIC-PROGRAMMING-EXERCISES.md.'
  },
  'algo-lis': {
    extra: 'Dãy con tăng dài nhất (LIS): Từ O(N²) cơ bản tối ưu lên O(N log N) bằng mảng tails. Invariant: mảng tails luôn tăng nghiêm ngặt, tails[len] lưu đuôi nhỏ nhất của dãy tăng độ dài len. Với mỗi phần tử, dùng std::lower_bound tìm vị trí cập nhật trong tails. Độ dài LIS là tails.size(). Tài liệu: docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md và docs/exercises/06-DYNAMIC-PROGRAMMING-EXERCISES.md.'
  },

  // Track 3: Computer Systems & Networking
  'os-process': {
    extra: 'Tiến trình vs Luồng (Process vs Thread): Mỗi tiến trình có không gian địa chỉ ảo độc lập (Page Directory/Tables) và PID riêng, cách ly bộ nhớ hoàn toàn; Luồng (Thread) chia sẻ chung không gian địa chỉ và Heap nhưng có Call Stack và tập thanh ghi riêng. Chi phí chuyển ngữ cảnh (Context Switching Overhead): CPU phải lưu/khôi phục thanh ghi, chuyển con trỏ bảng trang và xả bộ đệm TLB (Translation Lookaside Buffer).'
  },
  'os-virtual-memory': {
    extra: 'Bộ nhớ ảo & Phân trang (Paging): CPU phát ra địa chỉ ảo gồm số hiệu trang (VPN) và độ dịch (Offset); MMU dịch sang địa chỉ vật lý (PFN) qua bảng trang đa cấp. Bộ đệm TLB (Translation Lookaside Buffer) rút ngắn thời gian dịch địa chỉ còn 1 chu kỳ clock. Cơ chế ngắt thiếu trang (Page Fault) khi trang bị swap ra đĩa.'
  },
  'os-threads': {
    extra: 'Đồng thời đa luồng & An toàn bộ nhớ: Các luồng chia sẻ Heap chung nhưng có ngăn xếp riêng. Ngăn chặn Race Condition và Data Race bằng std::mutex, std::lock_guard (RAII) và phát hiện tự động bằng ThreadSanitizer (TSan: -fsanitize=thread -g).'
  },
  'net-layers': {
    extra: 'Mô hình 5 tầng TCP/IP & Đóng gói dữ liệu: Ứng dụng (Application: HTTP/DNS) -> Vận chuyển (Transport: TCP/UDP Segment) -> Mạng (Network: IP Packet) -> Liên kết dữ liệu (Data Link: Ethernet Frame) -> Vật lý (Physical: Bits).'
  },
  'net-sockets': {
    extra: 'Lập trình Socket mạng mức thấp: Các hàm hệ thống socket(), bind(), listen(), accept(), connect(), send(), recv(), close(). Lưu ý cốt tử: TCP là giao thức byte stream, không bảo toàn ranh giới thông điệp -> bắt buộc tự cài đặt Message Framing (phân tách ký tự delimiter hoặc thêm header độ dài uint32_t payload_length) để tránh hiện tượng dính gói/phân mảnh gói tin (Packet Coalescing/Fragmentation). Gắn liền với Mini-Project 2: Multi-threaded Web Server. Tài liệu: docs/guides/08-NETWORK-SOCKETS-HTTP-TCP.md và docs/projects/02-MULTITHREADED-WEB-SERVER.md.'
  },
  'net-udp-tcp': {
    extra: 'Tầng Giao vận (Transport Layer): So sánh UDP (phi kết nối, truyền nhanh không đảm bảo) vs TCP (hướng kết nối, tin cậy). Nắm vững cơ chế bắt tay 3 bước (3-way handshake: SYN -> SYN-ACK -> ACK), ngắt kết nối 4 bước (FIN -> ACK -> FIN -> ACK), Sequence/ACK numbers, Điều khiển luồng qua Sliding Window, và Điều khiển tắc nghẽn (AIMD, Slow Start, Congestion Avoidance, Fast Retransmit). Tài liệu: docs/guides/08-NETWORK-SOCKETS-HTTP-TCP.md.'
  },
  'net-ip': {
    extra: 'Tầng Mạng & Kỹ thuật chia mạng con (CIDR Subnetting): Tính toán chính xác Network ID, Broadcast Address, Subnet Mask và dải Host khả dụng từ ký hiệu CIDR (ví dụ /24, /27). Hiểu rõ vai trò của NAT (Network Address Translation), DHCP (DORA process), và ICMP (Ping/Traceroute).'
  },
  'net-http': {
    extra: 'Giao thức HTTP & Kiến trúc Web: Cấu trúc Request/Response (Request Line, Headers, Body), mã trạng thái (200 OK, 301/302 Redirect, 400 Bad Request, 401/403 Auth, 404 Not Found, 500 Internal Error). Message Framing trong HTTP qua Content-Length header hoặc Chunked Transfer Encoding. Tài liệu: docs/guides/08-NETWORK-SOCKETS-HTTP-TCP.md.'
  },

  // Track 4: Mathematical Foundations
  'math-logic': {
    extra: 'Logic toán học cho KHMT: Bảng chân trị, các luật De Morgan, luật kéo theo (p -> q tương đương ~p v q), mệnh đề phản đảo (~q -> ~p). Logic vị từ với lượng từ với mọi và tồn tại. Kỹ thuật chứng minh: chứng minh trực tiếp, phản đảo, phản chứng, và nguyên lý cực hạn.'
  },
  'math-induction': {
    extra: 'Quy nạp toán học 3 bước chuẩn mực: Bước cơ sở (Base case), Giả thiết quy nạp (Inductive hypothesis), và Bước quy nạp (Inductive step). Áp dụng quy nạp mạnh và quy nạp cấu trúc để chứng minh tính đúng của thuật toán (Algorithm Correctness) và bất biến vòng lặp (Loop Invariants).'
  },
  'math-pigeonhole': {
    extra: 'Nguyên lý Bồ câu (Pigeonhole Principle - Dirichlet): Dạng cơ bản (n+1 bồ câu vào n chuồng) và dạng tổng quát ceil(N/k). Ứng dụng chứng minh sự trùng lặp số dư modulo, sự va chạm trong hàm băm (Hash Collision). Nguyên lý Bao hàm - Loại trừ (Inclusion-Exclusion Principle).'
  },
  'math-recurrence': {
    extra: 'Hệ thức truy hồi & Phân tích thuật toán: Định lý Thợ (Master Theorem) T(N) = aT(N/b) + O(N^d) giải các phương trình truy hồi chia để trị. Phương pháp cây đệ quy (Recursion Tree) và phương pháp thế (Substitution Method).'
  },
  'prob-random': {
    extra: 'Biến ngẫu nhiên (Random Variables): Rời rạc (PMF) vs Liên tục (PDF/CDF). Tính chất Tuyến tính của Kỳ vọng (Linearity of Expectation): E[X + Y] = E[X] + E[Y] luôn đúng với mọi biến ngẫu nhiên, kể cả khi X và Y phụ thuộc lẫn nhau! Phương sai Var(X) = E[X^2] - (E[X])^2.'
  },
  'prob-bayes': {
    extra: 'Định lý Bayes và Suy diễn xác suất: P(A|B) = P(B|A)*P(A) / P(B). Phân biệt rõ Prior (tiền nghiệm P(A)), Likelihood (hợp lý P(B|A)), và Posterior (hậu nghiệm P(A|B)). Là cơ sở toán học trực tiếp cho thuật toán phân lớp Naive Bayes Classifier và các thuật toán học máy xác suất. Gắn liền với Mini-Project 4: Naive Bayes Spam Classifier. Tài liệu: docs/projects/04-NAIVE-BAYES-CLASSIFIER.md.'
  },
  'stats-sampling': {
    extra: 'Định lý Giới hạn Trung tâm (CLT) & Suy diễn thống kê: Trung bình của một số lượng lớn biến ngẫu nhiên độc lập cùng phân phối (i.i.d) sẽ hội tụ về phân phối chuẩn Gaussian N(mu, sigma^2/n). Ước lượng hợp lý cực đại (MLE - Maximum Likelihood Estimation) là nền tảng tối ưu hóa hàm mất mát (Loss Function) trong Machine Learning. Tài liệu: docs/projects/04-NAIVE-BAYES-CLASSIFIER.md.'
  },

  // Track 5: Developer Tooling & Engineering Practice
  'git-first': {
    extra: 'Mô hình nhận thức Git: Git là một đồ thị có hướng không chu trình định địa chỉ theo nội dung (Content-Addressable DAG) gồm các đối tượng bất biến: Blobs (nội dung tệp), Trees (thư mục), Commits (ảnh chụp trạng thái + metadata tác giả + con trỏ cha) định danh bằng mã băm SHA. 3 vùng làm việc: Working Tree, Staging Area (Index), Repository (.git).'
  },
  'git-branch': {
    extra: 'Git nâng cao & Giải quyết xung đột: Phân biệt Fast-forward merge vs 3-way merge commit. Phân tích và giải quyết thủ công merge conflicts (<<<<<<< HEAD, =======, >>>>>>>). Kỹ thuật interactive rebase (git rebase -i) để squash/gộp commit tạo lịch sử tuyến tính sạch sẽ, git stash tạm cất thay đổi, và quy chuẩn Conventional Commits.'
  },
  'tools-shell': {
    extra: 'Dòng lệnh POSIX/Linux & Pipes: Làm chủ 3 luồng chuẩn: Standard Input (stdin - 0), Standard Output (stdout - 1), Standard Error (stderr - 2). Kỹ thuật đường ống pipe | kết hợp các tiện ích Unix (grep, awk, sed, find, xargs). Phân quyền file chmod (Read=4, Write=2, Execute=1).'
  },
  'tools-memory': {
    extra: 'Chẩn đoán và diệt lỗi bộ nhớ: Tích hợp AddressSanitizer (ASan) và UBSan qua cờ -fsanitize=address,undefined -g trên GCC/Clang để bắt lập tức lỗi Use-After-Free, Out-of-bounds, Stack Overflow lúc runtime. Dùng Valgrind Memcheck để rà soát toàn diện rò rỉ bộ nhớ (Definitely/Indirectly lost).'
  },
  'tools-build': {
    extra: 'Tự động hóa build với CMake hiện đại (Target-based CMake 3.20+): Viết CMakeLists.txt tổ chức dự án đa thư mục chuẩn công nghiệp (src, include, tests) với target_include_directories và target_link_libraries. Quản lý cờ biên dịch chuẩn (-Wall -Wextra -std=c++17 -O2). Gắn liền với Mini-Project 5: Production-Ready C++ Project Scaffold & CI/CD với GitHub Actions. Tài liệu: docs/projects/05-DEVOPS-CPP-SCAFFOLD.md.'
  },
  'se-patterns': {
    extra: 'GoF Design Patterns thực chiến: Strategy Pattern thay đổi thuật toán lúc chạy, Factory Pattern đóng gói khởi tạo đối tượng, Observer Pattern phát sóng sự kiện phân tách module, Dependency Injection tách ghép nối cứng. Tuân thủ 5 nguyên lý SOLID để tạo kiến trúc phần mềm sạch và dễ kiểm thử. Tài liệu: docs/guides/02-VIRTUAL-DISPATCH-OOP-SOLID.md.'
  },

  // Track 6: CS Specialization Readiness
  'db-relations': {
    extra: 'Mô hình CSDL quan hệ & Chuẩn hóa: Thiết kế bảng, khóa chính (Primary Key), khóa ngoại (Foreign Key). Chuẩn hóa 1NF (Tính nguyên tử), 2NF (Loại bỏ phụ thuộc một phần), 3NF (Loại bỏ phụ thuộc bắc cầu) để triệt tiêu 3 dị thường dữ liệu (Thêm, Sửa, Xóa). Tài liệu: docs/guides/09-DATABASE-ACID-TRANSACTIONS.md.'
  },
  'db-index': {
    extra: 'Bản chất Chỉ mục B+Tree trong CSDL quan hệ: Nút trung gian chỉ lưu khóa định tuyến (Routing Keys) với bậc phân nhánh cao (B hàng trăm phần tử/trang đĩa 4KB), cây lùn (3–4 tầng cho hàng triệu dòng) tối ưu hóa số lần Disk I/O. Danh sách liên kết đôi giữa các lá hỗ trợ truy vấn khoảng (BETWEEN) cực nhanh. Nắm chắc Quy tắc tiền tố bên trái nhất (Leftmost Prefix Rule) trên chỉ mục kết hợp INDEX(A, B, C). Tài liệu: docs/guides/09-DATABASE-ACID-TRANSACTIONS.md.'
  },
  'db-transaction': {
    extra: '4 Tính chất A.C.I.D của Giao dịch CSDL: Atomicity (Tính nguyên tử — cơ chế Write-Ahead Logging/WAL để rollback toàn bộ khi lỗi), Consistency (Tính nhất quán — bảo toàn ràng buộc), Isolation (Tính cô lập — các giao dịch chạy song song độc lập), Durability (Tính bền vững — ghi Redo Log và đẩy xuống đĩa qua hàm hệ thống fsync()). Tài liệu: docs/guides/09-DATABASE-ACID-TRANSACTIONS.md.'
  },
  'db-isolation': {
    extra: '4 Mức độ cô lập giao dịch chuẩn SQL: Read Uncommitted, Read Committed, Repeatable Read, Serializable; đánh đổi giữa tính toàn vẹn dữ liệu và thông lượng xử lý. Bản chất 3 hiện tượng đọc bất thường: Đọc bẩn (Dirty Read), Đọc không lặp lại (Non-repeatable Read), Đọc bóng ma (Phantom Read). Cơ chế đa phiên bản MVCC trong PostgreSQL. Tài liệu: docs/guides/09-DATABASE-ACID-TRANSACTIONS.md.'
  },
  'ml-project': {
    extra: 'Đồ án Học máy Thống kê — Phân loại Thư rác Naive Bayes (Multinomial Naive Bayes Spam Classifier): Vận dụng Định lý Bayes với giả định độc lập có điều kiện, chuyển sang không gian Log chống tràn số thực dưới (Underflow), kỹ thuật làm trơn Laplace (Add-1 Smoothing), Ma trận nhầm lẫn và F1-Score. Tài liệu: docs/projects/04-NAIVE-BAYES-CLASSIFIER.md.'
  },
  'dist-scale': {
    extra: 'Nguyên lý Mở rộng Hệ thống (Scalability Principles): Phân biệt Scale-Up (Vertical Scaling) vs Scale-Out (Horizontal Scaling). Thiết kế tầng ứng dụng phi trạng thái (Stateless Application Tier), các thuật toán cân bằng tải (Round Robin, Least Connections, Consistent Hashing), đo lường Throughput (RPS), Latency (p50, p95, p99), và High Availability.'
  },
  'dist-cache': {
    extra: 'Chiến lược lưu bộ đệm phân tán (Distributed Caching): Mô hình Cache-Aside (Lazy Loading), thiết lập TTL hợp lý, phòng chống 3 thảm họa cache: Cache Penetration (dùng Bloom Filter), Cache Avalanche (thêm jitter ngẫu nhiên vào TTL), và Cache Stampede (dùng Mutex Locking).'
  },
  'direction-choose': {
    extra: 'Chiến lược xét tuyển chuyên ngành KHMT HCMUS: Căn cứ điểm GPA tích lũy giai đoạn cơ sở (Năm 1 + Năm 2) với các môn cơ sở ngành cốt lõi (NMLT, KTLT, CTDL&GT, OOP, MMT, Toán rời rạc, Xác suất thống kê). Mục tiêu GPA an toàn: >= 8.0 - 8.5+. Chuẩn bị sớm portfolio 5 Capstone Mini-Projects để tạo lợi thế vượt trội.'
  }
};

// Hiệu chỉnh các khẳng định quá tuyệt đối của bản trước, giữ nhiệm vụ và tài liệu.
pedagogicalEnrichments['oop-virtual'].extra = 'Đa hình động: theo dõi gọi hàm ảo qua con trỏ/tham chiếu lớp cha. vptr/vtable là cách triển khai phổ biến, bố trí và kích thước phụ thuộc ABI/compiler, không do chuẩn C++ bắt buộc. Nếu cho phép delete đối tượng con qua con trỏ Base, destructor Base cần virtual. Đối chiếu mã assembly trên chính compiler đang dùng.';
pedagogicalEnrichments['direction-choose'].extra = 'Chọn chuyên ngành bằng sản phẩm, bài tự làm và đề cương chính thức. Điều kiện/GPA xét tuyển phải tra thông báo HCMUS cho khóa và năm hiện tại; không coi một ngưỡng GPA tự đặt là bảo đảm trúng tuyển.';
const legacyTasks = attachReadings(withPlacements(reviseTasks(expanded))).map((t, i) => {
  const enrichment = pedagogicalEnrichments[t.id];
  return {
    ...t,
    trackId: baseChapterToTrackId[t.chapter] || 'track-0',
    extra: enrichment?.extra ? (t.extra ? `${t.extra} ${enrichment.extra}` : enrichment.extra) : t.extra,
    number: String(i + 1).padStart(3, '0')
  };
});

const revised = applyEdition(legacyTasks);
const newTrack = { intro:'track-0', debug:'track-5', calculus:'track-4', statistics:'track-4', 'system-programming':'track-3', 'systems-track':'track-3', parallel:'track-3', 'database-internals':'track-6', languages:'track-6', graphics:'track-6', hci:'track-6', 'special-platforms':'track-6', embedded:'track-6', 'data-track':'track-6', 'compiler-track':'track-6', 'distributed-track':'track-6' };
export const chapterToTrackId = Object.fromEntries(revised.chapters.map(c => [c.id, newTrack[c.id] || baseChapterToTrackId[c.id]]));
export const chapters = revised.chapters.map(c => ({ ...c, trackId: chapterToTrackId[c.id] }));
export const tasks = revised.tasks.map(t => ({ ...t, trackId: chapterToTrackId[t.chapter] }));
export const previousTaskIds = legacyTasks.map(t => t.id);
export const tracks = baseTracks.map(tr => ({ ...tr, chapterIds: chapters.filter(c => c.trackId === tr.id).map(c => c.id) }));
export const edition = {
  version: '2.1.0',
  title: 'Nền CS rộng · Hiểu hệ thống · Tự làm được',
  scope: 'Chương trình tự học có nền chung và các nhánh chuyên sâu; giữ 7 track và tiến độ cũ. Đường nối là thứ tự gợi ý, không phải mọi môn trước đều là điều kiện bắt buộc. Không thay thế yêu cầu tốt nghiệp HCMUS.',
  targetAudience: 'Sinh viên Năm 2 ĐH KHTN (HCMUS) chuẩn bị xét tuyển chuyên ngành Khoa học Máy tính',
  lastUpdated: '06/11/2026',
};

export { capstoneProjects };
