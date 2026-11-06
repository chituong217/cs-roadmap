# Hướng Dẫn Tư Duy Bản Chất: Cấu Trúc Tập Hợp Rời Rạc (Disjoint Set Union - DSU)

> **Tài liệu học tập ngoại tuyến (Offline Conceptual Guide — 05)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — HCMUS  
> **Trọng tâm:** Tiến hóa giải thuật, Chứng minh chiều cao $\log N$ và Ứng dụng trong Kruskal

---

## 1. Bài Toán Kết Nối Động (Dynamic Connectivity)

Giả sử ta có $N$ đối tượng được đánh số từ $1$ đến $N$. Hệ thống liên tục nhận hai loại truy vấn:
1. `unite(u, v)`: Tạo một liên kết trực tiếp giữa đối tượng $u$ và $v$.
2. `same(u, v)`: Kiểm tra xem $u$ và $v$ có thuộc cùng một mạng lưới liên thông hay không.

Nếu dùng cấu trúc đồ thị thông thường và chạy BFS/DFS cho mỗi truy vấn kiểm tra, thời gian sẽ là $O(V + E)$ cho mỗi lần hỏi. Nếu có $M$ truy vấn, tổng thời gian lên tới $O(M \cdot (V + E)) \approx O(M \cdot N)$ $\implies$ Quá chậm!

**Cấu trúc Tập hợp Rời rạc (Disjoint Set Union - DSU)** giải quyết bài toán này với thời gian gần như hằng số $O(\alpha(N)) \approx O(1)$ cho mỗi thao tác.

---

## 2. Tiến Hóa Của Cấu Trúc Dữ Liệu DSU

```
┌────────────────────────────────────────────────────────────────────────┐
│                   BẢNG TIẾN HÓA CẤU TRÚC DỮ LIỆU DSU                   │
├───────────────────┬───────────────────────┬────────────────────────────┤
│ Phiên bản         │ Thao tác `find(x)`    │ Thao tác `unite(x, y)`     │
├───────────────────┼───────────────────────┼────────────────────────────┤
│ 1. QuickFind      │ O(1)                  │ O(N) (quét toàn bộ mảng)   │
│ 2. QuickUnion     │ O(N) (suy biến cây)   │ O(1) (sau khi tìm được gốc)│
│ 3. Union by Size  │ O(log N)              │ O(log N)                   │
│ 4. Path Compress  │ O(alpha(N)) ≈ O(1)    │ O(alpha(N)) ≈ O(1)         │
└───────────────────┴───────────────────────┴────────────────────────────┘
```

---

## 3. Bước Đột Phá 1: Gộp Theo Kích Thước (Union by Size / Rank)

Trong QuickUnion cơ bản, nếu ta luôn gán `parent[rootA] = rootB` một cách tùy tiện, một chuỗi thao tác như `unite(1, 2)`, `unite(2, 3)`, `unite(3, 4)` sẽ biến cây thành một danh sách liên kết thẳng đứng có chiều cao $N$. Khi đó, hàm `find()` phải leo $N$ bậc $\to$ mất $O(N)$.

### Nguyên Tắc Gộp Theo Size:
Khi gộp hai cây, **luôn luôn gắn gốc của cây có ít phần tử hơn làm con của gốc cây có nhiều phần tử hơn**.

```
    Cây A (Lớn hơn)          Cây B (Nhỏ hơn)
          (1)                      (4)
         /   \                     /
       (2)   (3)                 (5)

===> KẾT QUẢ GỘP ĐÚNG (Gốc 4 làm con của Gốc 1):
                (1)
              /  |  \
            (2) (3) (4)
                    /
                  (5)
(Chiều cao của cây lớn nhất không bị tăng lên!)
```

### Chứng Minh Toán Học: Chiều Cao Tối Đa Là $\le \lfloor \log_2 N \rfloor$
- **Bổ đề:** Một cây DSU có chiều cao $h$ (với quy tắc Union by Size) phải chứa **ít nhất $2^h$ nút**.
- **Chứng minh bằng Quy nạp:**
  - Với $h = 0$: Cây 1 nút, kích thước $2^0 = 1$ (Đúng).
  - Giả sử mệnh đề đúng với chiều cao $h - 1$.
  - Để một cây có chiều cao tăng từ $h - 1$ lên $h$, nó bắt buộc phải được gộp với một cây khác có **chiều cao ít nhất là $h - 1$** (nếu gộp với cây thấp hơn, chiều cao cây mới vẫn là $h - 1$).
  - Theo giả thiết quy nạp, cả hai cây đều có ít nhất $2^{h-1}$ nút.
  - Tổng số nút của cây mới sau khi gộp ít nhất là:
    $$\text{Size} \ge 2^{h-1} + 2^{h-1} = 2^h$$
- **Hệ quả:** Nếu cây có $N$ nút, ta có $2^h \le N \iff h \le \log_2 N$. Do đó, thao tác `find()` không bao giờ vượt quá $O(\log N)$ bước!

---

## 4. Bước Đột Phá 2: Nén Đường Đi (Path Compression)

Khi thực hiện hàm `find(x)`, ta phải leo từ $x$ lên nút gốc `root`.
- **Ý tưởng:** Nếu đã tốn công leo lên tận gốc, tại sao không **gắn trực tiếp mọi nút trên đường đi thẳng vào nút gốc**?
- Lần gọi `find()` tiếp theo trên các nút đó sẽ chỉ tốn đúng 1 bước nhảy $O(1)$!

```cpp
// Cài đặt nén đường đi thanh lịch bằng 1 dòng đệ quy
int find(int x) {
    if (parent[x] == x) return x;
    return parent[x] = find(parent[x]); // Nén đường đi tại đây!
}
```

### Hiệu Quả Khi Kết Hợp Cả Hai Kỹ Thuật
Khi kết hợp cả **Union by Size** và **Path Compression**, Robert Tarjan đã chứng minh độ phức tạp trung bình cho mỗi thao tác là:
$$O(\alpha(N))$$
Trong đó $\alpha(N)$ là hàm Ackermann nghịch đảo. Với mọi giá trị $N$ trong vũ trụ thực tế ($N \le 10^{80}$ - số lượng nguyên tử trong vũ trụ quan sát được), $\alpha(N) \le 4$. Nói cách khác, **DSU chạy trong thời gian hằng số trên thực tế**!

---

## 5. Cài Đặt Lớp DSU Chuẩn C++ Đạt Tiêu Chuẩn Công Nghiệp

Dưới đây là kỹ thuật cài đặt thông minh tiết kiệm bộ nhớ: Sử dụng một mảng duy nhất `parent_or_size`:
- Nếu `parent_or_size[i] < 0`: $i$ là nút gốc, và giá trị tuyệt đối `-parent_or_size[i]` chính là kích thước (size) của cây!
- Nếu `parent_or_size[i] >= 0`: $i$ không phải gốc, và giá trị lưu trữ chính là chỉ số nút cha.

```cpp
#include <vector>
#include <numeric>

class DisjointSetUnion {
private:
    std::vector<int> parent_or_size;
    int num_components;

public:
    DisjointSetUnion(int n) : parent_or_size(n, -1), num_components(n) {}

    // Tìm gốc có nén đường đi
    int find(int u) {
        if (parent_or_size[u] < 0) return u;
        return parent_or_size[u] = find(parent_or_size[u]);
    }

    // Gộp hai tập hợp theo kích thước
    bool unite(int u, int v) {
        int root_u = find(u);
        int root_v = find(v);
        if (root_u == root_v) return false; // Đã cùng một tập hợp

        // Luôn đảm bảo cây root_u có kích thước lớn hơn hoặc bằng root_v
        if (-parent_or_size[root_u] < -parent_or_size[root_v]) {
            std::swap(root_u, root_v);
        }

        // Gộp size của root_v vào root_u
        parent_or_size[root_u] += parent_or_size[root_v];
        // Gán cha của root_v là root_u
        parent_or_size[root_v] = root_u;
        num_components--;
        return true;
    }

    bool same(int u, int v) { return find(u) == find(v); }
    int size(int u) { return -parent_or_size[find(u)]; }
    int count() const { return num_components; }
};
```

---

## 6. Ứng Dụng Cốt Lõi: Thuật Toán Kruskal Tìm Cây Khung Nhỏ Nhất (MST)

Thuật toán Kruskal tìm cây khung nhỏ nhất (Minimum Spanning Tree) hoạt động theo nguyên lý tham lam cực kỳ đơn giản nhờ DSU:
1. Sắp xếp toàn bộ $E$ cạnh của đồ thị theo trọng số tăng dần ($O(E \log E)$).
2. Khởi tạo một DSU với $V$ đỉnh rời rạc.
3. Duyệt qua từng cạnh $(u, v, w)$ theo thứ tự đã sắp xếp:
   - Dùng DSU kiểm tra `if (!dsu.same(u, v))`: Nếu hai đỉnh chưa cùng thành phần liên thông, việc thêm cạnh này **chắc chắn không tạo chu trình**!
   - Gộp `dsu.unite(u, v)`, cộng trọng số $w$ vào tổng chi phí cây khung, và tăng số cạnh đã chọn lên 1.
   - Khi đã chọn đủ $V - 1$ cạnh, lập tức dừng giải thuật.
