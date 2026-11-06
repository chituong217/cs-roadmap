# Tuyển Tập Bài Tập Thực Chiến: Tập Hợp Rời Rạc & Cây Khung (DSU & Kruskal)

> **Tài liệu luyện tập ngoại tuyến (Offline Practice Set — 04)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — HCMUS  
> **Hệ thống chấm trực tuyến:** [CSES Problem Set](https://cses.fi/problemset/) | [LeetCode](https://leetcode.com/) | [VNOI](https://oj.vnoi.info/)

---

## Danh Mục Bài Tập Tuyển Chọn

| Mã bài | Tên bài toán | Nền tảng | Mức độ | Trọng tâm tư duy |
|---|---|---|---|---|
| **DSU-01** | [Road Reparation](https://cses.fi/problemset/task/1675) | CSES 1675 | Cốt lõi | Cây khung nhỏ nhất (Kruskal), kiểm tra tính liên thông |
| **DSU-02** | [Road Construction](https://cses.fi/problemset/task/1676) | CSES 1676 | Cốt lõi | Theo dõi số thành phần liên thông & kích thước cực đại |
| **DSU-03** | [Building Roads](https://cses.fi/problemset/task/1666) | CSES 1666 | Khởi động | Tìm đại diện thành phần liên thông, nối các cụm đảo |
| **DSU-04** | [Redundant Connection](https://leetcode.com/problems/redundant-connection/) | LeetCode 684 | Phỏng vấn | Phát hiện cạnh tạo chu trình trong đồ thị vô hướng |
| **DSU-05** | [Accounts Merge](https://leetcode.com/problems/accounts-merge/) | LeetCode 721 | Nâng cao | Hợp nhất tài khoản dùng chung email bằng DSU |

---

## Chi Tiết Từng Bài Toán

### Bài 1: Road Reparation (CSES 1675)
- **Đề bài tóm tắt:** Đất nước có $n$ thành phố và $m$ con đường nối hai chiều có chi phí sửa chữa. Tìm **chi phí tối thiểu** để sửa chữa một số con đường sao cho mọi thành phố đều có thể đi lại được với nhau. Nếu không thể kết nối toàn bộ đất nước, in ra `IMPOSSIBLE` ($n \le 10^5, m \le 2 \cdot 10^5, c_i \le 10^9$).
- **Tư duy bản chất (Thuật toán Kruskal):**
  1. Đọc toàn bộ danh sách cạnh vào mảng `std::vector<Edge>` với `struct Edge { int u, v; long long cost; };`.
  2. Sắp xếp các cạnh tăng dần theo `cost` ($O(M \log M)$).
  3. Khởi tạo `DisjointSetUnion dsu(n)`. Biến `total_cost = 0`, `edges_count = 0`.
  4. Lần lượt duyệt từng cạnh:
     ```cpp
     if (dsu.unite(e.u, e.v)) {
         total_cost += e.cost;
         edges_count++;
     }
     ```
  5. **Kiểm tra tính liên thông:** Cây khung của đồ thị $n$ đỉnh bắt buộc phải có **đúng $n - 1$ cạnh**.
     Nếu `edges_count == n - 1`: In ra `total_cost`. Ngược lại in `IMPOSSIBLE`.
- **Lưu ý kiểu dữ liệu:** Chi phí tối đa lên tới $10^5 \times 10^9 = 10^{14} \implies$ **Bắt buộc dùng `long long` cho `total_cost`**!

---

### Bài 2: Road Construction (CSES 1676)
- **Đề bài tóm tắt:** Có $n$ thành phố và ban đầu không có con đường nào. Lần lượt có $m$ con đường được xây dựng nối giữa hai thành phố $a$ và $b$. Sau mỗi lần xây dựng con đường, hãy in ra 2 số:
  1. Số lượng thành phần liên thông còn lại trong đồ thị.
  2. Kích thước (số thành phố) của thành phần liên thông lớn nhất hiện tại.
- **Tư duy bản chất:**
  - Tích hợp trực tiếp hai biến toàn cục vào cấu trúc DSU:
    - `num_components = n;`
    - `max_component_size = 1;`
  - Khi thực hiện hàm `unite(u, v)`:
    - Nếu hai đỉnh đã cùng gốc: Bỏ qua, không có gì thay đổi.
    - Nếu khác gốc:
      - `num_components--;`
      - Gộp kích thước của hai cây: `new_size = size[root_u] + size[root_v]`.
      - Cập nhật kỷ lục: `max_component_size = max(max_component_size, new_size)`.
- **Độ phức tạp:** $O(M \cdot \alpha(N)) \approx O(M)$ — chạy gần như tức thời trong $0.08$ giây!

---

### Bài 3: Building Roads (CSES 1666)
- **Đề bài tóm tắt:** Cho đồ thị vô hướng $n$ đỉnh, $m$ cạnh. Tìm **số lượng con đường tối thiểu cần xây thêm** để đồ thị trở nên liên thông hoàn toàn, và in ra các cặp đỉnh cần nối.
- **Tư duy bản chất:**
  - Nạp toàn bộ các cạnh ban đầu vào DSU.
  - Sau khi nạp xong, gom các đỉnh gốc đại diện của các thành phần liên thông:
    ```cpp
    std::vector<int> representatives;
    for (int i = 1; i <= n; i++) {
        if (dsu.find(i) == i) {
            representatives.push_back(i);
        }
    }
    ```
  - Nếu có $K$ thành phần liên thông, số cạnh tối thiểu cần xây thêm là **$K - 1$**.
  - Các cạnh cần nối chỉ đơn giản là nối đỉnh đại diện thứ $0$ với toàn bộ các đỉnh đại diện còn lại: `(rep[0], rep[i])` với $i = 1 \dots K-1$.

---

### Bài 4: Redundant Connection (LeetCode 684)
- **Đề bài tóm tắt:** Cho một đồ thị vô hướng ban đầu là một cây gồm $n$ đỉnh (có $n-1$ cạnh), sau đó bị thêm vào đúng 1 cạnh thứ $n$ tạo thành một chu trình. Hãy tìm cạnh được thêm vào đó (nếu có nhiều cạnh thỏa mãn, trả về cạnh xuất hiện sau cùng trong danh sách input).
- **Tư duy bản chất (Phát hiện chu trình bằng DSU):**
  - Khởi tạo DSU gồm $n$ đỉnh rời rạc.
  - Duyệt qua từng cạnh $[u, v]$ trong danh sách đề bài cho:
    - Kiểm tra `if (dsu.same(u, v))`:
      - Vì trước đó $u$ và $v$ vốn đã có đường đi nối với nhau trong thành phần liên thông, **việc thêm cạnh $(u, v)$ này chắc chắn sẽ đóng kín một chu trình**!
      - Đây chính là cạnh thừa cần tìm $\implies$ Trả về ngay cạnh $[u, v]$ này!
    - Nếu chưa cùng tập hợp: `dsu.unite(u, v)`.

---

### Bài 5: Accounts Merge (LeetCode 721)
- **Đề bài tóm tắt:** Cho danh sách các tài khoản, mỗi tài khoản gồm tên người dùng và một danh sách các email. Hai tài khoản chắc chắn thuộc về cùng một người nếu chúng có chung ít nhất một địa chỉ email. Hãy hợp nhất các tài khoản đó lại.
- **Tư duy bản chất:**
  - Ánh xạ mỗi email sang một chỉ số số nguyên duy nhất (ID) bằng `std::unordered_map<string, int> emailToId`.
  - Với mỗi tài khoản: Lấy email đầu tiên làm đại diện và gọi `dsu.unite(email1, email_k)` với toàn bộ các email còn lại trong tài khoản đó.
  - Gom các email có cùng `dsu.find(id)` vào cùng một nhóm, sắp xếp danh sách email theo thứ tự bảng chữ cái và ghép với tên chủ sở hữu.
- **Độ phức tạp:** $O(N \cdot K \log(N \cdot K))$ với $N$ là số tài khoản và $K$ là số email mỗi tài khoản.
