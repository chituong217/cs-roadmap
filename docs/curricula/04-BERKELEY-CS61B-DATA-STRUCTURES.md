# Hướng Dẫn Giáo Trình: UC Berkeley CS61B — Data Structures

> **Tài liệu học tập ngoại tuyến (Offline Curriculum Guide)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — Trường Đại học Khoa học Tự nhiên (HCMUS)  
> **Giảng viên chính:** GS. Josh Hug (Đại học California tại Berkeley - UC Berkeley)  
> **Nguồn tham chiếu gốc:** [UC Berkeley CS61B Course Portal](https://fa20.datastructur.es/)

---

## 1. Dấu Ấn Sư Phạm Của Berkeley CS61B: Tiến Hóa Cấu Trúc Dữ Liệu (Evolutionary Design)

Nếu như MIT 6.006 tiếp cận cấu trúc dữ liệu dưới góc nhìn toán học và phân tích tiệm cận, thì **UC Berkeley CS61B** của GS. Josh Hug là đỉnh cao của việc kết hợp **Kỹ thuật phần mềm thực chiến (Software Engineering Rigor)** với **Sự tiến hóa tự nhiên của cấu trúc dữ liệu**.

Thay vì đưa ra ngay cấu trúc dữ liệu hoàn chỉnh để sinh viên học thuộc lòng, CS61B bắt đầu từ một giải pháp ngây thơ (naive), chỉ ra khuyết điểm và các trường hợp biên nguy hiểm (edge cases), sau đó từng bước cải tiến cấu trúc để giải quyết triệt để khuyết điểm đó.

---

## 2. Các Bài Học Tiến Hóa Kinh Điển Trong CS61B

### 2.1. Tiến Hóa Cấu Trúc Danh Sách: Từ Mối Nguy Trỏ Null Đến Nút Canh Gác (Sentinel Node)

Trong mã nguồn của sinh viên mới học, việc cài đặt Danh sách liên kết đơn (Singly Linked List) thường chứa đầy các câu lệnh `if (head == nullptr)` rải rác khắp nơi. Khi xóa hoặc chèn phần tử đầu danh sách, mã rất dễ bị sập vì lỗi giải tham chiếu con trỏ rỗng (`NullPointerException` hoặc `Segmentation Fault`).

CS61B giải quyết bằng mô hình tiến hóa:
1. **Naked Recursive Linked List:** Nút liên kết trần trụi (`IntNode`), người dùng phải tự quản lý từng con trỏ `next`.
2. **Encapsulated List (`SLList`):** Đóng gói bên trong một lớp `SLList` với biến `first`.
3. **Nút Canh Gác (`Sentinel Node`):** Tạo ra một nút giả đặc biệt luôn tồn tại ở đầu danh sách. Danh sách rỗng thực chất là danh sách chỉ chứa nút canh gác này. Nhờ đó, thao tác chèn/xóa tại mọi vị trí đều có cùng một logic con trỏ duy nhất, **loại bỏ 100% các câu lệnh kiểm tra null đặc biệt**.
4. **Danh Sách Liên Kết Đôi Vòng Tròn (`Circular DLList`):** Dùng một nút sentinel duy nhất liên kết vòng tròn cả hai đầu (`sentinel->next` là phần tử đầu tiên, `sentinel->prev` là phần tử cuối cùng), giúp các thao tác `addFirst`, `addLast`, `removeFirst`, `removeLast` đều đạt chi phí $O(1)$ tuyệt đối.

```
       ┌────────────────────────────────────────────────────────┐
       │                                                        │
       ▼                                                        │
┌──────────────┐    next    ┌──────────────┐    next    ┌───────┴──────┐
│   SENTINEL   │ ─────────> │    Nút 1     │ ─────────> │    Nút 2     │
│   (Nút giả)  │ <───────── │   (Dữ liệu)  │ <───────── │   (Dữ liệu)  │
└──────────────┘    prev    └──────────────┘    prev    └──────────────┘
```

---

### 2.2. Tiến Hóa Của Cấu Trúc Tập Hợp Rời Rạc (Disjoint Sets / DSU)

Bài giảng về Disjoint Sets trong CS61B là ví dụ chuẩn mực nhất về cách một nhà khoa học máy tính tối ưu hóa giải thuật từ $O(n)$ xuống $O(\alpha(n))$:

```
┌─────────────────────────────────────────────────────────────────────────┐
│              4 BƯỚC TIẾN HÓA CỦA DISJOINT SETS (CS61B)                  │
├───────────────────┬─────────────────────────┬───────────────────────────┤
│ Phiên bản         │ Thao tác `find(p)`      │ Thao tác `union(p, q)`    │
├───────────────────┼─────────────────────────┼───────────────────────────┤
│ 1. QuickFind      │ $O(1)$ (đọc mảng ID)    │ $O(n)$ (quét đổi toàn bộ) │
│ 2. QuickUnion     │ $O(n)$ (leo cây tìm gốc)│ $O(1)$ (nối 2 gốc)        │
│ 3. Weighted Union │ $O(\log n)$ (cây thấp)  │ $O(\log n)$ (gộp theo size│
│ 4. Path Compress  │ $O(\alpha(n)) \approx 1$│ $O(\alpha(n)) \approx 1$  │
└───────────────────┴─────────────────────────┴───────────────────────────┘
```

- **Bước 1 — QuickFind:** Mảng `id[i]`. `p` và `q` cùng tập khi `id[p] == id[q]`. Nhược điểm: Phép `union` phải duyệt qua toàn bộ $n$ phần tử để đổi nhãn $\to$ Quá chậm ($O(n)$).
- **Bước 2 — QuickUnion:** Thay vì đổi nhãn cả mảng, biểu diễn mỗi tập hợp thành một cái cây. Mảng `parent[i]` lưu cha của nút $i$. Nút gốc tự trỏ vào chính nó hoặc mang giá trị âm. Phép `union` chỉ cần gán `parent[rootP] = rootQ`. Nhược điểm: Cây có thể bị suy biến thành một sợi dây dài ngoằng $\to$ `find` tốn $O(n)$.
- **Bước 3 — Weighted QuickUnion (Gộp theo kích thước / hạng):** Theo dõi số lượng phần tử (size) hoặc chiều cao (rank) của từng cây. Khi gộp hai cây, **luôn luôn gắn gốc của cây nhỏ hơn làm con của gốc cây lớn hơn**.
  - **Chứng minh định lý:** Chiều cao của cây $n$ phần tử trong Weighted QuickUnion tối đa là $\log_2(n)$. Vì để chiều cao tăng thêm 1 đơn vị, kích thước của cây phải ít nhất gấp đôi.
- **Bước 4 — Nén Đường Đi (Path Compression):** Trong hàm `find(p)`, khi lần ngược lên tìm nút gốc `root`, ta cập nhật trực tiếp `parent[x] = root` cho mọi nút $x$ đã đi qua trên đường đi.
  - Khi kết hợp cả Weighted Union và Path Compression, chi phí trung bình cho mỗi thao tác đạt xấp xỉ hằng số $O(\alpha(n))$ (với $\alpha$ là hàm Ackermann ngược, trong vũ trụ thực tế luôn $\le 4$).

---

### 2.3. Cây Tìm Kiếm Nhị Phân Cân Bằng: Từ 2-3 Tree Đến Cây Đỏ-Đen Nghiêng Trái (LLRB)

Sinh viên thường rất sợ Cây Đỏ-Đen (Red-Black Tree) vì sách giáo khoa truyền thống liệt kê hàng chục trường hợp xoay cây phức tạp. CS61B của Josh Hug giảng giải Cây Đỏ-Đen một cách cực kỳ thanh lịch thông qua **Cây 2-3 (2-3 Tree)**:

1. **Ý tưởng Cây 2-3:** Cho phép một nút chứa 1 khóa (2 con) hoặc 2 khóa (3 con). Khi chèn một khóa mới, nút tạm thời trở thành nút 3 khóa (4 con), sau đó đẩy khóa ở giữa lên nút cha. Cây luôn phát triển từ dưới lên và luôn cân bằng hoàn hảo.
2. **Hiện thực Cây 2-3 bằng Cây Đỏ-Đen Nghiêng Trái (Left-Leaning Red-Black Tree - LLRB):**
   - Ta dùng cây nhị phân thông thường, nhưng dùng **liên kết màu đỏ (Red Link)** nghiêng về bên trái để biểu diễn hai khóa nằm chung trong một nút 3 của cây 2-3!
   - Mọi quy tắc của LLRB (xoay trái, xoay phải, đổi màu) thực chất chỉ là phản chiếu trung thực các thao tác tự nhiên của Cây 2-3:
     - Có liên kết đỏ nghiêng phải? $\to$ Xoay trái (`rotateLeft`).
     - Hai liên kết đỏ liên tiếp nhau? $\to$ Xoay phải (`rotateRight`).
     - Hai con đều là liên kết đỏ? $\to$ Đổi màu (`flipColors` — tương đương việc đẩy khóa giữa lên cha).

---

## 3. Đồ Án Huyền Thoại: Gitlet (Tự Xây Dựng Git Từ Đầu)

Đỉnh cao của khóa học Berkeley CS61B là đồ án **Gitlet**: Sinh viên phải tự tay lập trình một hệ thống quản lý phiên bản phân tán (VCS) hoạt động trên dòng lệnh tương tự Git:
- **Kiến trúc hướng nội dung (Content-Addressable Storage):** Mọi commit, thư mục (tree) và tệp tin (blob) đều được băm bằng mã SHA-1 làm định danh duy nhất.
- **Cấu trúc dữ liệu đồ thị DAG:** Lịch sử commit là một Đồ thị có hướng không chu trình (Directed Acyclic Graph), trong đó mỗi commit trỏ về (các) commit cha của nó.
- **Quản lý con trỏ nhánh:** Nhánh (branch) thực chất chỉ là một con trỏ tham chiếu đến mã SHA-1 của commit đầu nhánh (`HEAD`).
- **Hợp nhất nhánh (Merge) & Giải quyết xung đột (Conflict Resolution):** Ứng dụng thuật toán tìm tổ tiên chung gần nhất (Lowest Common Ancestor - LCA) trên đồ thị commit để xác định split point.

---

## 4. Bài Học Rút Ra Cho Sinh Viên HCMUS

1. **Học OOP phải gắn liền với Cấu trúc dữ liệu:** Đừng học OOP như một mớ lý thuyết suông về "Con mèo kế thừa Động vật". Hãy áp dụng OOP để thiết kế các ADT mạnh mẽ, an toàn và dễ bảo trì.
2. **Viết Unit Test trước khi nộp bài:** Trong CS61B, sinh viên học cách viết bài kiểm thử đơn vị với các ca biên cực đoan (danh sách rỗng, 1 phần tử, mảng trùng lặp toàn bộ) để kiểm chứng mã nguồn độc lập.
