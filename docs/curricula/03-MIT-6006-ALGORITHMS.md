# Hướng Dẫn Giáo Trình: MIT 6.006 — Introduction to Algorithms

> **Tài liệu học tập ngoại tuyến (Offline Curriculum Guide)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — Trường Đại học Khoa học Tự nhiên (HCMUS)  
> **Giảng viên chính:** GS. Erik Demaine & GS. Srini Devadas (Viện Công nghệ Massachusetts - MIT)  
> **Nguồn tham chiếu gốc:** [MIT OpenCourseWare 6.006 Spring 2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)

---

## 1. Triết Lý Sư Phạm MIT 6.006: Giao Diện (Interface) vs Cấu Trúc Dữ Liệu (Data Structure)

Một trong những đóng góp sư phạm vĩ đại nhất của MIT 6.006 là phân định rạch ròi giữa **Giao diện (Interface / ADT)** và **Cấu trúc dữ liệu cụ thể (Data Structure)**:

- **Interface (Giao diện):** Định nghĩa *bài toán* — Cung cấp những thao tác gì, nhận tham số nào và kỳ vọng hành vi ra sao (Ví dụ: `Sequence Interface` hỗ trợ `get_at(i)`, `set_at(i, x)`, `insert_at(i, x)`, `delete_at(i)`).
- **Data Structure (Cấu trúc dữ liệu):** Định nghĩa *giải pháp cài đặt* — Cách thức tổ chức bộ nhớ thực tế và thuật toán thực thi các thao tác trên (Ví dụ: `Static Array`, `Dynamic Array`, `Singly Linked List`, `Doubly Linked List`).

### Bảng So Sánh Chi Phí Các Cấu Trúc Dữ Liệu Dãy (Sequence ADT)

| Thao tác | Static Array | Dynamic Array (Vector) | Singly Linked List | Doubly Linked List |
|---|---|---|---|---|
| `get_at(i)` / `set_at(i)` | $O(1)$ | $O(1)$ | $O(i)$ | $O(i)$ |
| `insert_first(x)` | $O(n)$ | $O(n)$ | $O(1)$ | $O(1)$ |
| `delete_first()` | $O(n)$ | $O(n)$ | $O(1)$ | $O(1)$ |
| `insert_last(x)` | Không hỗ trợ | $O(1)$ amortized | $O(n)$ (hoặc $O(1)$ nếu có tail) | $O(1)$ |
| `delete_last()` | Không hỗ trợ | $O(1)$ amortized | $O(n)$ (cần tìm nút kề cuối) | $O(1)$ |
| `insert_at(i, x)` / `delete_at(i)` | $O(n)$ | $O(n)$ | $O(i)$ | $O(i)$ |

---

## 2. 5 Khối Kiến Thức Cốt Lõi Của MIT 6.006

```
┌──────────────────────────────────────────────────────────────────┐
│                   MIT 6.006: 5 MODULES KIẾN THỨC                 │
├──────────────────────────────────────────────────────────────────┤
│ 1. Sequence & Set Structures: Mảng động, Danh sách liên kết      │
│ 2. Sorting & Search: Merge Sort, Linear-time Sort (Radix Sort)   │
│ 3. Trees & Hashing: Cây nhị phân tìm kiếm cân bằng AVL, Bảng băm │
│ 4. Graph Algorithms: BFS, DFS, Dijkstra, Bellman-Ford            │
│ 5. Dynamic Programming: Khung tư duy 6 bước SRTBOT               │
└──────────────────────────────────────────────────────────────────┘
```

---

## 3. Phân Rã Chi Tiết Từng Module

### Module 1: Sequence & Set Structures (Cấu Trúc Dãy và Tập Hợp)
- **Dynamic Array Amortization (Phân tích khấu hao):**
  - Khi mảng đầy, cấp phát mảng mới có kích thước gấp đôi ($2N$).
  - Chứng minh bằng phương pháp thế hoặc kế toán: Dù thao tác mở rộng tốn $O(N)$, chi phí trung bình qua chuỗi $N$ thao tác chèn chỉ là $O(1)$ mỗi lần.
  - Cảnh báo: Nếu mở rộng thêm 1 phần tử ($N+1$), thao tác chèn sẽ suy biến thành $O(N^2)$ cho chuỗi chèn.

### Module 2: Sorting & Linear-Time Sorting (Sắp Xếp Tuyến Tính)
- **Giới hạn lý thuyết của sắp xếp dựa trên so sánh (Comparison Sort):**
  - Cây quyết định (Decision Tree) với $n!$ hoán vị có chiều cao tối thiểu là $\log_2(n!) = \Omega(n \log n)$. Do đó Merge Sort và Heapsort đạt mức tối ưu tiệm cận tuyệt đối.
- **Sắp xếp thời gian tuyến tính $O(n)$ khi có giả định về tập giá trị:**
  - *Direct Access Array Sort*: Khi các khóa là số nguyên nhỏ phân biệt trong đoạn $[0, u-1]$.
  - *Counting Sort*: Đếm tần số xuất hiện của các khóa trong phạm vi $k$, tích lũy mảng vị trí để đảm bảo tính ổn định (Stability).
  - *Radix Sort (Sắp xếp theo cơ số):* Sắp xếp từ chữ số ít quan trọng nhất (LSD) đến quan trọng nhất (MSD) bằng thuật toán sắp xếp ổn định. Độ phức tạp $O(d \cdot (n + b))$ với $d$ là số chữ số cơ số $b$.

### Module 3: Trees & Hashing (Cây Cân Bằng AVL & Bảng Băm)
- **Cây nhị phân tìm kiếm (BST):**
  - Bất biến BST: Với mọi nút $x$, mọi khóa ở cây con trái $< x.key$ và mọi khóa ở cây con phải $> x.key$.
  - Suy biến thành đường thẳng $O(n)$ khi chèn mảng đã sắp xếp.
- **Cây cân bằng AVL (Adelson-Velsky & Landis):**
  - Bất biến AVL: Với mọi nút $x$, độ chênh lệch chiều cao hai cây con $|height(left) - height(right)| \le 1$.
  - Khôi phục cân bằng qua các phép quay cây (Rotations): Quay đơn (Left/Right) và quay kép (Left-Right/Right-Left). Đảm bảo chiều cao luôn $h \le 1.44 \log_2(n) \to$ Các thao tác tìm kiếm, chèn, xóa luôn đạt $O(\log n)$.
- **Bảng băm (Hash Tables):**
  - Giải quyết va chạm: Nối kết (Chaining) và Dò mở (Open Addressing: Linear Probing, Double Hashing).
  - Giả định băm ngẫu nhiên đơn giản (Simple Uniform Hashing Assumption - SUHA) cho thời gian kỳ vọng $O(1)$.

### Module 4: Graph Algorithms (Thuật Toán Đồ Thị)
- **Biểu diễn đồ thị:** Danh sách kề ($V + E$) vs Ma trận kề ($V^2$).
- **Breadth-First Search (BFS):**
  - Tìm đường đi ngắn nhất trên đồ thị không trọng số.
  - Cơ chế: Hàng đợi FIFO + nhãn khoảng cách $d[v] = d[u] + 1$.
- **Depth-First Search (DFS):**
  - Duyệt toàn diện đồ thị, tính thời gian bắt đầu và kết thúc (`start_time`, `finish_time`).
  - Phân loại cạnh: Tree edges, Back edges (báo hiệu chu trình), Forward edges, Cross edges.
  - Sắp xếp tô-pô (Topological Sort): Đảo ngược thứ tự thời gian hoàn thành (finish time) trên DAG.
- **Đường đi ngắn nhất có trọng số:**
  - *Dijkstra (Trọng số không âm):* Sử dụng Min-Heap. Độ phức tạp $O((V + E) \log V)$.
  - *Bellman-Ford (Cho phép trọng số âm):* Nới lỏng (Relax) toàn bộ $E$ cạnh trong $V-1$ vòng lặp. Phát hiện chu trình âm qua vòng lặp thứ $V$. Độ phức tạp $O(V \cdot E)$.
  - *DAG Shortest Paths:* Sắp xếp tô-pô trước, sau đó nới lỏng các cạnh theo thứ tự tô-pô trong thời gian $O(V + E)$.

### Module 5: Dynamic Programming — Khung Tư Duy 6 Bước SRTBOT
MIT 6.006 chuẩn hóa tư duy Quy hoạch động thành khung 6 bước **SRTBOT**:

1. **S — Subproblems (Bài toán con):** Định nghĩa bài toán con là gì? Thường là:
   - Tiền tố (Prefixes) $x[:i]$ ($O(n)$ bài toán con).
   - Hậu tố (Suffixes) $x[i:]$ ($O(n)$ bài toán con).
   - Đoạn con (Substrings / Subarrays) $x[i:j]$ ($O(n^2)$ bài toán con).
2. **R — Relate (Hệ thức truy hồi):** Biểu diễn nghiệm của bài toán con hiện tại qua nghiệm của các bài toán con nhỏ hơn:
   $$DP(i) = \min_{j} / \max_{j} \{ \text{chi phí} + DP(j) \}$$
3. **T — Topological Order (Thứ tự Tô-pô):** Xác định thứ tự lặp (vòng for) để đảm bảo khi tính $DP(i)$, toàn bộ các bài toán con phụ thuộc đã có kết quả.
4. **B — Base Cases (Trường hợp cơ sở):** Các bài toán con nhỏ nhất không cần chia nhỏ nữa (Ví dụ: $DP(0) = 0$).
5. **O — Original Problem (Bài toán gốc):** Lấy đáp án của đề bài từ bài toán con nào (Ví dụ: $DP(n)$ hoặc $\max_{i} DP(i)$).
6. **T — Time & Space Complexity (Thời gian & Không gian):** 
   $$\text{Thời gian} = (\text{Số lượng bài toán con}) \times (\text{Thời gian chuyển trạng thái không tính đệ quy})$$

---

## 4. Cách Vận Dụng MIT 6.006 Vào Môn DSA Tại HCMUS

1. Khi gặp một bài toán thuật toán trong kỳ thi, **đừng vội viết mã ngay**.
2. Hãy áp dụng tư duy MIT 6.006:
   - Đây là bài toán tìm kiếm trên không gian nào?
   - Cần cấu trúc dữ liệu gì hỗ trợ các thao tác cốt lõi?
   - Bất biến (Invariant) của giải thuật là gì?
   - Nếu là Quy hoạch động: Viết đủ 6 bước của khung SRTBOT ra nháp trước khi gõ code.
