# Hướng Dẫn Tư Duy Bản Chất: Các Giải Thuật Đồ Thị Cốt Lõi (BFS, DFS, Dijkstra, Topo)

> **Tài liệu học tập ngoại tuyến (Offline Conceptual Guide — 06)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — HCMUS  
> **Trọng tâm:** Bất biến duyệt đồ thị, Nhận diện chu trình 3 màu và Cơ chế Dijkstra Min-Heap

---

## 1. Biểu Diễn Đồ Thị: Danh Sách Kề vs Ma Trận Kề

```
┌────────────────────────────────────────────────────────────────────────┐
│                   SO SÁNH CÁCH BIỂU DIỄN ĐỒ THỊ                        │
├─────────────────┬──────────────────────────┬───────────────────────────┤
│ Tiêu chí        │ Danh Sách Kề (Adj List)  │ Ma Trận Kề (Adj Matrix)   │
├─────────────────┼──────────────────────────┼───────────────────────────┤
│ Bộ nhớ          │ O(V + E) (Tối ưu tuyệt   │ O(V^2) (Lãng phí khi đồ   │
│                 │ đối cho đồ thị thưa)     │ thị có ít cạnh)           │
├─────────────────┼──────────────────────────┼───────────────────────────┤
│ Kiểm tra cạnh   │ O(deg(u))                │ O(1)                      │
│ (u, v) có tồn tại?                         │                           │
├─────────────────┼──────────────────────────┼───────────────────────────┤
│ Duyệt mọi đỉnh  │ O(deg(u))                │ O(V) (Phải quét hết dòng) │
│ kề của đỉnh u   │                          │                           │
└─────────────────┴──────────────────────────┴───────────────────────────┘
```
- **Quy tắc thực tế:** 99% các bài toán đồ thị trong thi đấu và phỏng vấn đều dùng **Danh sách kề**: `std::vector<std::vector<Edge>> adj(n);`.

---

## 2. Tìm Kiếm Theo Chiều Rộng (BFS): Quy Tắc Đánh Dấu "Push vs Pop"

BFS sử dụng một hàng đợi FIFO (`std::queue`) để duyệt đồ thị theo từng "lớp sóng" đồng tâm cách gốc khoảng cách $0, 1, 2, \dots$
- **Tính chất cốt lõi:** Tìm đường đi ngắn nhất trên đồ thị **không có trọng số** (hoặc trọng số các cạnh đồng nhất bằng nhau).

### Lỗi Phổ Biến Nhất Gây Cháy Bộ Nhớ (MLE / TLE):
Rất nhiều sinh viên đánh dấu đã thăm khi **lấy phần tử ra khỏi hàng đợi (Pop)**:
```cpp
// SAI LẦM TAI HẠI:
while (!q.empty()) {
    int u = q.front(); q.pop();
    visited[u] = true; // QUÁ TRỄ!
    for (int v : adj[u]) {
        if (!visited[v]) q.push(v);
    }
}
```
- **Vì sao sai?** Giả sử có một đỉnh $V$ nối với 100 đỉnh láng giềng khác. Khi 100 đỉnh láng giềng đó được duyệt, do $V$ chưa bị pop nên chưa có nhãn `visited`, kết quả là **đỉnh $V$ bị đẩy vào hàng đợi 100 lần**! Hàng đợi bùng nổ kích thước theo hàm mũ!
- **Quy tắc vàng của BFS:** **BẮT BUỘC đánh dấu `visited[v] = true` NGAY KHI ĐẨY VÀO HÀNG ĐỢI (`q.push(v)`)!**

---

## 3. Tìm Kiếm Theo Chiều Sâu (DFS) & Mô Hình Tô Màu 3 Trạng Thái Phát Hiện Chu Trình

Khi duyệt đồ thị có hướng, chỉ dùng một mảng `visited` kiểu `bool` là **không đủ** để phát hiện chu trình! (Vì nếu gặp một đỉnh đã thăm nhưng thuộc một nhánh duyệt đã hoàn tất trước đó, đó là cạnh chéo (Cross edge), không phải chu trình).

Để phát hiện chu trình trên đồ thị có hướng một cách chính xác 100%, ta dùng **Mô hình 3 Màu**:

```
┌────────────────────────────────────────────────────────┐
│                   MÔ HÌNH 3 MÀU CỦA DFS                │
├─────────┬──────────────────────────────────────────────┤
│ TRẮNG   │ Đỉnh chưa từng được thăm (color = 0).        │
├─────────┼──────────────────────────────────────────────┤
│ XÁM     │ Đỉnh đang nằm trong Stack đệ quy hiện tại    │
│         │ (đang trong quá trình khám phá, color = 1).  │
├─────────┼──────────────────────────────────────────────┤
│ ĐEN     │ Đỉnh đã duyệt xong hoàn toàn toàn bộ nhánh   │
│         │ con của nó và đã quay lui (color = 2).       │
└─────────┴──────────────────────────────────────────────┘
```

- **Bất biến phát hiện chu trình:** Trong quá trình DFS từ đỉnh $u$, nếu ta gặp một đỉnh láng giềng $v$ đang có **MÀU XÁM**, ta khẳng định 100%: **Đồ thị chứa chu trình!** (Vì cạnh $u \to v$ chính là một Cạnh ngược - Back Edge trỏ về một tổ tiên đang hoạt động trên ngăn xếp gọi hàm).

---

## 4. Sắp Xếp Tô-Pô (Topological Sort)

Sắp xếp tô-pô là việc sắp xếp các đỉnh của một **Đồ thị có hướng không chu trình (DAG)** thành một hàng ngang sao cho: Với mọi cạnh có hướng $u \to v$, đỉnh $u$ luôn đứng trước đỉnh $v$.
- Ứng dụng: Xác định thứ tự biên dịch các thư viện phần mềm phụ thuộc, lên kế hoạch đăng ký môn học tiên quyết.

### Thuật Toán Kahn (Dựa Trên Bán Bậc Vào - In-degree):
1. Tính bán bậc vào `in_degree[u]` cho toàn bộ $V$ đỉnh (số lượng cạnh trỏ vào đỉnh $u$).
2. Đẩy toàn bộ các đỉnh có `in_degree == 0` vào một hàng đợi.
3. Lấy từng đỉnh $u$ ra khỏi hàng đợi, bổ sung $u$ vào danh sách kết quả tô-pô.
4. Với mỗi đỉnh kề $v$ của $u$, giảm `in_degree[v]--`. Nếu `in_degree[v] == 0`, đẩy $v$ vào hàng đợi.
5. **Kiểm tra chu trình:** Nếu kết thúc thuật toán mà số lượng đỉnh trong danh sách tô-pô $< V$, đồ thị chắc chắn có chu trình phụ thuộc vòng quanh!

---

## 5. Thuật Toán Dijkstra Với Min-Heap

Thuật toán Dijkstra tìm đường đi ngắn nhất từ một đỉnh nguồn đến toàn bộ các đỉnh còn lại trên đồ thị có **trọng số KHÔNG ÂM ($w \ge 0$)**.

### 5.1. Bất Biến Tham Lam Của Dijkstra
Bản chất của Dijkstra là một thuật toán tham lam:
- Tại mỗi bước, lấy ra khỏi Min-Heap đỉnh $u$ có khoảng cách tạm thời nhỏ nhất.
- **Bất biến toán học:** **Khoảng cách `dist[u]` của đỉnh vừa lấy ra khỏi Min-Heap chắc chắn là khoảng cách ngắn nhất tối ưu tuyệt đối, không bao giờ có thể bị cải thiện thêm!**

### 5.2. Kỹ Thuật Tỉa Bản Ghi Cũ (Stale Entry Pruning)
Trong C++, `std::priority_queue` không hỗ trợ thao tác giảm khóa `decrease_key` hiệu quả. Vì vậy, ta chỉ đơn giản là đẩy thêm một cặp mới `(new_dist, u)` vào Min-Heap.
- Khi lấy ra: Ta bắt buộc phải kiểm tra câu lệnh tỉa:
  ```cpp
  if (d > dist[u]) continue; // Bỏ qua bản ghi cũ đã lỗi thời!
  ```
  Nếu không có dòng này, thuật toán sẽ bị lãng phí thời gian duyệt lại đỉnh $u$ nhiều lần.

```cpp
#include <vector>
#include <queue>

struct Edge {
    int to;
    long long weight;
};

std::vector<long long> dijkstra(int startNode, int n, const std::vector<std::vector<Edge>>& adj) {
    const long long INF = 1e18; // Dùng 1e18 chống tràn số với long long
    std::vector<long long> dist(n + 1, INF);
    // Min-Heap lưu cặp {khoảng cách, đỉnh}
    std::priority_queue<std::pair<long long, int>, 
                        std::vector<std::pair<long long, int>>, 
                        std::greater<std::pair<long long, int>>> pq;

    dist[startNode] = 0;
    pq.push({0, startNode});

    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();

        // Tỉa bản ghi cũ lỗi thời trong Heap
        if (d > dist[u]) continue;

        for (const auto& edge : adj[u]) {
            int v = edge.to;
            long long w = edge.weight;
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w; // Nới lỏng (Relaxation)
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}
```

### 5.3. Vì Sao Dijkstra Thất Bại Khi Có Cạnh Âm?
Nếu đồ thị có cạnh âm ($w < 0$), bất biến tham lam bị phá vỡ hoàn toàn!
- Đỉnh $u$ sau khi được chốt tối ưu vẫn có thể bị nới lỏng thành một giá trị nhỏ hơn nếu sau đó ta đi qua một cạnh âm khổng lồ.
- Hàng đợi Min-Heap có thể rơi vào vòng lặp vô tận nếu có chu trình âm $\implies$ Với đồ thị có cạnh âm, bắt buộc phải dùng thuật toán **Bellman-Ford** hoặc **SPFA**.
