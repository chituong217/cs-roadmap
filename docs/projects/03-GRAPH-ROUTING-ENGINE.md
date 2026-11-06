# Đặc Tả Đồ Án Capstone 03: Động Cơ Tìm Đường Đồ Thị Hiệu Năng Cao (Graph Routing Engine)

> **Tài liệu đặc tả kỹ thuật đồ án (Capstone Project Specification — 03)**  
> **Lĩnh vực:** Cấu Trúc Dữ Liệu & Giải Thuật Nâng Cao, Kỹ Thuật Đồ Thị  
> **Ánh xạ lộ trình:** Track 2 (DSA Cốt Lõi & Giải Thuật Thực Chiến)  
> **Công cụ:** C++17, Dữ liệu bản đồ OpenStreetMap (OSM), Benchmark Suite, GoogleTest (GTest), ASan

---

## 1. Mục Tiêu & Tổng Quan Đồ Án

Xây dựng một **Động cơ Tìm đường Đồ thị (Routing Engine)** hiệu năng cao mô phỏng hệ thống dẫn đường tương tự Google Maps trên bản đồ mạng lưới giao thông thực tế:
1. **Nạp và nén dữ liệu mạng lưới đường bộ:** Đọc dữ liệu bản đồ gồm hàng trăm nghìn nút (tọa độ vĩ độ/kinh độ) và các cung đường có hướng có trọng số chiều dài.
2. **Hiện thực và tối ưu hóa giải thuật tìm đường:**
   - Cài đặt thuật toán **Dijkstra** chuẩn mực.
   - Cài đặt thuật toán **A* Search** với hàm ước lượng khoảng cách Euclid / Haversine (Heuristic function).
   - Cài đặt thuật toán **Dijkstra Hai Chiều (Bidirectional Dijkstra)** để thu hẹp không gian tìm kiếm.
3. **Phân tích đối chuẩn định lượng (Benchmarking Suite):** So sánh số lượng đỉnh phải duyệt và thời gian thực thi (micro-seconds) giữa các thuật toán trên cùng một tập truy vấn.
4. **Kiểm thử tự động:** Vượt qua 100% các ca kiểm thử đơn vị với GoogleTest và bảo đảm an toàn bộ nhớ tuyệt đối với AddressSanitizer.

---

## 2. Kiến Trúc Hệ Thống

```
       DỮ LIỆU BẢN ĐỒ GIAO THÔNG (NODES.CSV & EDGES.CSV)
                              │
                              ▼
┌────────────────────────────────────────────────────────┐
│                   GraphStorage                         │
│  - std::vector<Coordinate> coordinates                 │
│  - std::vector<std::vector<Edge>> adjacencyList        │
│  - Spatial Index (R-Tree / Grid) để tìm nút gần nhất   │
└─────────────────────────────┬──────────────────────────┘
                              │
            ┌─────────────────┼─────────────────┐
            ▼                 ▼                 ▼
   ┌─────────────────┐┌─────────────────┐┌─────────────────┐
   │ DijkstraRouter  ││   AStarRouter   ││BiDijkstraRouter │
   │ - Min-Heap      ││ - Heuristic h() ││ - Forward Search│
   │ - Uninformed    ││ - Consistent h  ││ - Backward Search
   └────────┬────────┘└────────┬────────┘└────────┬────────┘
            └─────────────────┼─────────────────┘
                              │
                              ▼
┌────────────────────────────────────────────────────────┐
│                   RouteResponse                        │
│  - Total Distance (meters)                             │
│  - Total Execution Time (microseconds)                 │
│  - Visited Nodes Count (Nodes explored)                │
│  - Reconstructed Path (List of Coordinates)            │
└────────────────────────────────────────────────────────┘
```

---

## 3. 4 Mốc Phát Triển Dự Án (M1 – M4 Milestones)

### Mốc M1: Mô Hình Hóa Đồ Thị & Trình Phân Tích Dữ Liệu Tọa Độ
- **Mục tiêu:**
  - Thiết kế cấu trúc lưu trữ đồ thị giao thông nén tối ưu bộ nhớ: Mỗi đỉnh lưu `lat`, `lon` (tọa độ thực). Mỗi cạnh lưu `targetNode`, `lengthMeters`, `speedLimit`.
  - Đọc tệp dữ liệu mạng lưới đường bộ mẫu ($\ge 100.000$ đỉnh và $\ge 250.000$ cạnh) vào bộ nhớ trong thời gian $< 1.5$ giây.
- **Tiêu chí nghiệm thu:** Nạp thành công toàn bộ đồ thị, in ra số lượng đỉnh, số lượng cạnh và bộ nhớ RAM tiêu thụ $< 50$ MB.

### Mốc M2: Thuật Toán Dijkstra Chuẩn & Mô Hình Truy Vết Đường Đi
- **Mục tiêu:**
  - Cài đặt thuật toán Dijkstra tìm đường đi ngắn nhất từ đỉnh $S$ đến đỉnh $T$.
  - Lưu trữ mảng `parent[]` để tái tạo lại chính xác chuỗi các đỉnh trên hành trình tối ưu.
- **Tiêu chí nghiệm thu:**
  - Trả về chính xác khoảng cách đường đi ngắn nhất.
  - Xử lý mượt mà trường hợp không có đường đi (đồ thị không liên thông) trả về `PathNotFound`.
  - Viết 10 bài test đơn vị với GoogleTest kiểm chứng tính đúng trên các đồ thị mẫu nhỏ có thể kiểm tra bằng tay.

### Mốc M3: Thuật Toán A* Search Với Hàm Heuristic Nhất Quán (Consistent)
- **Mục tiêu:**
  - Định nghĩa hàm ước lượng khoảng cách $h(u, T)$ là khoảng cách đường chim bay (Euclidean Distance hoặc Haversine Formula) chia cho vận tốc tối đa cho phép:
    $$h(u, T) = \frac{\text{Distance}(u, T)}{V_{\max}}$$
  - **Chứng minh tính hợp lệ (Admissible & Consistent):** Vì đường chim bay luôn là đường ngắn nhất, $h(u, T) \le \text{Khoảng cách thực tế } d(u, T)$ $\implies$ A* luôn bảo đảm tìm ra nghiệm tối ưu tuyệt đối!
- **Tiêu chí nghiệm thu:**
  - A* tìm ra kết quả có độ dài đường đi **chính xác 100% bằng với Dijkstra**.
  - Số lượng đỉnh A* phải duyệt giảm ít nhất **60% – 80%** so với Dijkstra thông thường!

### Mốc M4: Dijkstra Hai Chiều (Bidirectional) & Bộ Đối Chuẩn Hiệu Năng
- **Mục tiêu:**
  - Cài đặt thuật toán Dijkstra hai chiều: Một tìm kiếm tiến từ nguồn $S$, một tìm kiếm lùi từ đích $T$. Hai vùng tìm kiếm gặp nhau ở giữa, giảm bán kính duyệt đi một nửa!
  - Xây dựng công cụ đo đạc (Benchmarking Suite) chạy $1.000$ truy vấn ngẫu nhiên, xuất bảng so sánh chi tiết:
    - Thời gian trung bình ($\mu s$).
    - Số đỉnh trung bình đã duyệt.
    - Bộ nhớ tiêu thụ.
- **Kiểm toán an toàn bộ nhớ:** Chạy toàn bộ benchmark dưới AddressSanitizer bảo đảm 0 bytes rò rỉ.

---

## 4. Tiêu Chí Nghiệm Thu Định Lượng

```
┌────────────────────────────────────────────────────────────────────────┐
│                   BẢNG CHỈ TIÊU ĐỊNH LƯỢNG NGHIỆM THU                  │
├─────────────────┬──────────────────┬─────────────────┬─────────────────┤
│ Thuật toán      │ Thời gian tb     │ Số đỉnh duyệt tb│ Độ chính xác    │
├─────────────────┼──────────────────┼─────────────────┼─────────────────┤
│ Standard Dijk   │ < 40 ms          │ ~ 45.000 đỉnh   │ 100% tối ưu     │
│ A* Search       │ < 10 ms          │ < 10.000 đỉnh   │ 100% tối ưu     │
│ Bidirectional   │ < 8 ms           │ < 8.000 đỉnh    │ 100% tối ưu     │
└─────────────────┴──────────────────┴─────────────────┴─────────────────┘
```
- **Bộ nhớ:** Không vượt quá $64$ MB cho đồ thị $100.000$ đỉnh.
- **Kiểm thử tự động:** $100\%$ các bài kiểm thử trong `tests/` vượt qua màu xanh.
