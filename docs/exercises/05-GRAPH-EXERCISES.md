# Tuyển Tập Bài Tập Thực Chiến: Thuật Toán Đồ Thị (Graph Problem Set)

> **Tài liệu luyện tập ngoại tuyến (Offline Practice Set — 05)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — HCMUS  
> **Hệ thống chấm trực tuyến:** [CSES Problem Set](https://cses.fi/problemset/) | [VNOI](https://oj.vnoi.info/) | [LeetCode](https://leetcode.com/)

---

## Danh Mục Bài Tập Tuyển Chọn

| Mã bài | Tên bài toán | Nền tảng | Mức độ | Trọng tâm tư duy |
|---|---|---|---|---|
| **GRAPH-01** | [Counting Rooms](https://cses.fi/problemset/task/1192) | CSES 1192 | Khởi động | DFS/BFS trên lưới 2D, loang đếm thành phần liên thông |
| **GRAPH-02** | [Labyrinth](https://cses.fi/problemset/task/1193) | CSES 1193 | Cốt lõi | BFS tìm đường ngắn nhất trên lưới, truy vết chuỗi hướng đi |
| **GRAPH-03** | [Shortest Routes I](https://cses.fi/problemset/task/1671) | CSES 1671 | Cốt lõi | Dijkstra Min-Heap, tỉa bản ghi cũ, kiểu số `long long` |
| **GRAPH-04** | [Course Schedule](https://cses.fi/problemset/task/1679) | CSES 1679 | Cốt lõi | Sắp xếp tô-pô (Thuật toán Kahn), phát hiện chu trình phụ thuộc |
| **GRAPH-05** | [Round Trip](https://cses.fi/problemset/task/1669) | CSES 1669 | Vận dụng | Tìm và in chu trình bất kỳ trong đồ thị vô hướng bằng DFS |

---

## Chi Tiết Từng Bài Toán

### Bài 1: Counting Rooms (CSES 1192)
- **Đề bài tóm tắt:** Cho một bản đồ tòa nhà kích thước $n \times m$ ($1 \le n, m \le 1000$). Ký tự `#` là bức tường, ký tự `.` là sàn nhà. Hai ô sàn nhà thuộc cùng một phòng nếu có thể đi lại giữa chúng theo 4 hướng (trên, dưới, trái, phải). Đếm tổng số lượng phòng.
- **Tư duy bản chất (Thuật toán Loang - Flood Fill):**
  - Mảng vector hướng di chuyển: `const int dx[] = {-1, 1, 0, 0}; const int dy[] = {0, 0, -1, 1};`.
  - Duyệt qua từng ô `(i, j)` của bản đồ: Nếu ô đó là sàn nhà `.` và chưa được thăm, ta tăng số phòng `rooms_count++` và kích hoạt hàm loang (DFS hoặc BFS) từ ô đó để đánh dấu toàn bộ các ô thuộc cùng phòng.
- **Độ phức tạp:** $O(N \times M)$ thời gian và không gian.

---

### Bài 2: Labyrinth (CSES 1193)
- **Đề bài tóm tắt:** Cho mê cung $n \times m$, có điểm xuất phát `A` và điểm kết thúc `B`. Tìm đường đi ngắn nhất từ `A` đến `B`. Nếu có đường đi, in ra `YES`, độ dài đường đi và chuỗi ký tự các bước di chuyển gồm `L` (trái), `R` (phải), `U` (lên), `D` (xuống).
- **Tư duy bản chất (BFS & Mảng Truy Vết Hướng Đi):**
  - Vì đồ thị lưới không có trọng số, **BFS đảm bảo 100% tìm ra đường đi có ít bước nhất**!
  - Duy trì hai mảng 2 chiều:
    1. `visited[n][m]`: Đánh dấu đã thăm (đánh dấu ngay khi push vào queue!).
    2. `parent_dir[n][m]`: Lưu ký tự hướng đi (`'L'`, `'R'`, `'U'`, `'D'`) đã dẫn từ ô trước đó tới ô này.
  - Khi BFS chạm tới đích `B`: Lần ngược từ `B` về `A` thông qua mảng tọa độ cha để thu thập các ký tự hướng đi, sau đó đảo ngược chuỗi để có lộ trình chính xác.

---

### Bài 3: Shortest Routes I (CSES 1671)
- **Đề bài tóm tắt:** Có $n$ thành phố và $m$ chuyến bay một chiều có độ dài. Hãy tìm khoảng cách đường bay ngắn nhất từ thành phố 1 đến mọi thành phố còn lại ($n \le 10^5, m \le 2 \cdot 10^5$).
- **Tư duy bản chất:**
  - Áp dụng thuật toán **Dijkstra với Min-Heap**:
    ```cpp
    std::priority_queue<std::pair<long long, int>, 
                        std::vector<std::pair<long long, int>>, 
                        std::greater<std::pair<long long, int>>> pq;
    ```
  - **3 Quy tắc bắt buộc:**
    1. Dùng kiểu `long long` cho mảng `dist`, khởi tạo giá trị vô cùng `1e18`.
    2. Cắt tỉa bản ghi cũ: `if (d > dist[u]) continue;`.
    3. Thư viện I/O nhanh trong C++ để tránh bị TLE do đọc $2 \cdot 10^5$ dòng dữ liệu.

---

### Bài 4: Course Schedule (CSES 1679)
- **Đề bài tóm tắt:** Có $n$ môn học và $m$ ràng buộc tiên quyết: Để học môn $b$, bạn phải hoàn thành môn $a$ trước. Hãy tìm một thứ tự học hợp lệ cho toàn bộ $n$ môn học. Nếu có chu trình phụ thuộc vòng quanh khiến không thể hoàn thành, in ra `IMPOSSIBLE`.
- **Tư duy bản chất (Thuật toán Kahn Sắp Xếp Tô-pô):**
  1. Xây dựng đồ thị có hướng: Cạnh $a \to b$, tăng bán bậc vào `in_degree[b]++`.
  2. Đẩy toàn bộ các môn học không có tiên quyết (`in_degree[i] == 0`) vào hàng đợi.
  3. Lấy từng môn học ra, thêm vào danh sách kết quả `order`.
  4. Duyệt các môn học phụ thuộc $v$: Giảm `in_degree[v]--`. Nếu bằng 0 thì đẩy vào hàng đợi.
  5. **Kiểm tra hợp lệ:** Nếu `order.size() == n`: In ra danh sách các môn học. Nếu `order.size() < n`: Có chu trình $\implies$ In ra `IMPOSSIBLE`.

---

### Bài 5: Round Trip (CSES 1669)
- **Đề bài tóm tắt:** Cho đồ thị vô hướng $n$ đỉnh, $m$ cạnh. Hãy tìm **một chu trình đơn bất kỳ** có độ dài $\ge 4$ (chu trình bắt đầu và kết thúc tại cùng một đỉnh, đi qua ít nhất 3 thành phố khác nhau). Nếu không có chu trình, in `IMPOSSIBLE`.
- **Tư duy bản chất (Truy vết chu trình bằng DFS & Mảng Parent):**
  - Duyệt DFS từ từng đỉnh chưa thăm: Truyền kèm tham số `parent_node` để tránh nhầm cạnh nối ngược lại nút cha trực tiếp là chu trình.
  - Khi duyệt từ đỉnh $u$ sang đỉnh láng giềng $v$:
    - Nếu $v == parent_node$: Bỏ qua (đây chỉ là cạnh vô hướng đi ngược lại).
    - Nếu $v$ đã được thăm (`visited[v] == true`): **Ta đã tìm thấy một chu trình!** Điểm bắt đầu chu trình là $v$, điểm kết thúc là $u$.
    - Lần ngược từ $u$ về $v$ bằng mảng `parent[]` để lấy danh sách các đỉnh của chu trình, in ra độ dài và các đỉnh đó rồi thoát chương trình ngay.
