# Tuyển Tập Bài Tập Thực Chiến: Tìm Kiếm Nhị Phân (Binary Search Problem Set)

> **Tài liệu luyện tập ngoại tuyến (Offline Practice Set — 02)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — HCMUS  
> **Hệ thống chấm trực tuyến:** [CSES Problem Set](https://cses.fi/problemset/) | [LeetCode](https://leetcode.com/) | [VNOI](https://oj.vnoi.info/)

---

## Danh Mục Bài Tập Tuyển Chọn

| Mã bài | Tên bài toán | Nền tảng | Mức độ | Trọng tâm tư duy |
|---|---|---|---|---|
| **BS-01** | [Cài Đặt Thủ Công Lower & Upper Bound](https://cses.fi/) | Nền tảng | Khởi động | Xử lý biên $[lo, hi)$, không tìm thấy phần tử |
| **BS-02** | [Factory Machines](https://cses.fi/problemset/task/1620) | CSES 1620 | Cốt lõi | Tìm kiếm trên nghiệm (Search on Answer), hàm kiểm tra đơn điệu |
| **BS-03** | [Array Division](https://cses.fi/problemset/task/1085) | CSES 1085 | Cốt lõi | Chia mảng thành $k$ đoạn, tối thiểu hóa tổng lớn nhất (Min-Max) |
| **BS-04** | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | LeetCode 875 | Phỏng vấn | Tốc độ ăn tối thiểu $K$ trong $H$ giờ, làm tròn lên số nguyên |
| **BS-05** | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | LeetCode 33 | Nâng cao | Tìm kiếm trên mảng xoay vòng, xác định nửa mảng giữ tính đơn điệu |

---

## Chi Tiết Từng Bài Toán

### Bài 1: Cài Đặt Thủ Công Lower Bound & Upper Bound
- **Đề bài tóm tắt:** Cho mảng đã sắp xếp gồm $n$ số nguyên ($n \le 2 \cdot 10^5$) và $q$ truy vấn giá trị $x$. Hãy viết hàm tự cài đặt tìm:
  1. `lower_bound(x)`: Vị trí của phần tử đầu tiên $\ge x$. Nếu không có phần tử nào thỏa mãn, trả về $n$.
  2. `upper_bound(x)`: Vị trí của phần tử đầu tiên $> x$. Nếu không có phần tử nào thỏa mãn, trả về $n$.
- **Bất biến nửa mở $[lo, hi)$:**
  - Khởi tạo: $lo = 0, hi = n$.
  - Trong suốt quá trình chạy: Mọi phần tử có chỉ số $< lo$ đều $< x$, và mọi phần tử có chỉ số $\ge hi$ đều $\ge x$.
  - Khi $lo == hi$, khoảng tìm kiếm hội tụ về đúng vị trí biên cần tìm!
```cpp
int customLowerBound(const std::vector<int>& a, int x) {
    int lo = 0, hi = a.size();
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (a[mid] >= x) {
            hi = mid; // Thu hẹp biên phải
        } else {
            lo = mid + 1; // Biên trái chắc chắn không thỏa mãn
        }
    }
    return lo; // lo chính là vị trí đầu tiên >= x
}
```

---

### Bài 2: Factory Machines (CSES 1620)
- **Đề bài tóm tắt:** Có $n$ máy, máy thứ $i$ cần $k_i$ giây để tạo ra 1 sản phẩm. Cần tạo ra $t$ sản phẩm. Các máy làm việc độc lập song song. Tìm **thời gian tối thiểu** để hoàn thành đủ $t$ sản phẩm ($n \le 2 \cdot 10^5$, $t \le 10^9$, $k_i \le 10^9$).
- **Xác định vị từ đơn điệu:**
  $$P(T) = \left( \sum_{i=1}^{n} \left\lfloor \frac{T}{k_i} \right\rfloor \ge t \right)$$
  Nếu thời gian $T$ đủ làm $\ge t$ sản phẩm, thì mọi thời gian $> T$ cũng chắc chắn đủ $\implies$ Tính chất đơn điệu thỏa mãn!
- **Không gian nghiệm $[lo, hi]$:**
  - $lo = 1$ (tối thiểu 1 giây).
  - $hi = \min(k_i) \times t$ (tối đa lấy máy nhanh nhất làm toàn bộ $t$ sản phẩm $\implies$ lên tới $10^9 \times 10^9 = 10^{18}$).
- **Bẫy tràn số:**
  Khi cộng dồn `totalProducts += time / k[i]`, nếu không cẩn thận biến cộng dồn có thể vượt quá $10^{18}$ gây tràn số `long long`.
  $\implies$ **Khắc phục:** Ngay khi `totalProducts >= t`, lập tức `return true` để dừng sớm!

---

### Bài 3: Array Division (CSES 1085)
- **Đề bài tóm tắt:** Cho mảng gồm $n$ số nguyên dương. Chia mảng thành **đúng $k$ đoạn con liên tiếp** sao cho **tổng lớn nhất của một đoạn con là nhỏ nhất có thể**.
- **Chuyển về bài toán quyết định (Min-Max $\to$ Decision):**
  - Giả sử ta muốn giới hạn: Không có bất kỳ đoạn con nào được phép có tổng vượt quá giá trị $M$. Liệu ta có thể chia mảng thành $\le k$ đoạn con thỏa mãn điều kiện đó không?
  - **Hàm kiểm tra tham lam `canPartition(M)`:**
    Duyệt mảng từ trái sang phải, tích lũy tổng đoạn con hiện tại. Khi nạp thêm một số mà tổng vượt quá $M$, ta bắt buộc phải "cắt một nhát" tại vị trí đó để bắt đầu một đoạn con mới. Đếm tổng số đoạn con tạo ra. Nếu số đoạn con $\le k$ thì trả về `true`!
- **Không gian nghiệm:**
  - $lo = \max(a_i)$ (Vì một đoạn con tối thiểu phải chứa được phần tử lớn nhất của mảng).
  - $hi = \sum a_i$ (Trường hợp gộp toàn bộ mảng thành 1 đoạn duy nhất).

---

### Bài 4: Koko Eating Bananas (LeetCode 875)
- **Đề bài tóm tắt:** Có $N$ nải chuối, nải thứ $i$ có $p_i$ quả chuối. Bảo vệ sẽ vắng mặt trong $H$ giờ. Koko muốn chọn một tốc độ ăn $K$ (quả chuối/giờ) cố định sao cho có thể ăn hết toàn bộ chuối trong vòng $H$ giờ. Trong mỗi giờ, Koko chỉ ăn trên một nải chuối duy nhất (nếu nải chuối có ít hơn $K$ quả, Koko ăn hết nải đó và nghỉ ngơi trong phần thời gian còn lại của giờ). Tìm $K$ nhỏ nhất.
- **Tư duy bản chất:**
  - Thời gian Koko cần để ăn hết một nải có $p$ quả chuối với tốc độ $K$ là phép chia làm tròn lên:
    $$\text{hours} = \lceil p / K \rceil = \lfloor (p + K - 1) / K \rfloor$$
  - Tổng số giờ Koko cần là: $\sum \lceil p_i / K \rceil$.
  - Vị từ: $\sum \lceil p_i / K \rceil \le H$. Tốc độ $K$ càng lớn thì số giờ ăn càng ít $\implies$ Đơn điệu giảm, áp dụng tìm kiếm nhị phân trên $K \in [1, \max(p_i)]$.

---

### Bài 5: Search in Rotated Sorted Array (LeetCode 33)
- **Đề bài tóm tắt:** Cho một mảng đã sắp xếp tăng dần nhưng bị xoay vòng tại một trục không xác định (ví dụ: `[4,5,6,7,0,1,2]`). Tìm vị trí của giá trị `target` trong thời gian $O(\log N)$.
- **Tư duy bản chất:**
  - Khi chia đôi mảng tại $mid$, **chắc chắn có ít nhất một nửa mảng (nửa trái $[lo, mid]$ hoặc nửa phải $[mid, hi]$) vẫn được sắp xếp tăng dần bình thường!**
  - Ta kiểm tra xem nửa nào đang sắp xếp:
    - Nếu `a[lo] <= a[mid]`: Nửa bên trái là mảng tăng dần bình thường. Ta chỉ cần kiểm tra xem `target` có nằm lọt vào khoảng $[a[lo], a[mid]]$ hay không: Nếu có, thu hẹp về bên trái (`hi = mid - 1`); nếu không, nghiệm nằm ở bên phải (`lo = mid + 1`).
    - Ngược lại: Nửa bên phải là mảng tăng dần bình thường. Kiểm tra xem `target` có lọt vào $[a[mid], a[hi]]$ hay không để quyết định hướng đi!
- **Độ phức tạp:** $O(\log N)$ tuyệt đối, mỗi bước chia đôi không gian tìm kiếm.
