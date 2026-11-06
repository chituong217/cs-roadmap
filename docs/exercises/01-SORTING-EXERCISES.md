# Tuyển Tập Bài Tập Thực Chiến: Thuật Toán Sắp Xếp (Sorting Problem Set)

> **Tài liệu luyện tập ngoại tuyến (Offline Practice Set — 01)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — HCMUS  
> **Hệ thống chấm trực tuyến:** [CSES Problem Set](https://cses.fi/problemset/) | [VNOI Online Judge](https://oj.vnoi.info/) | [LeetCode](https://leetcode.com/)

---

## Danh Mục Bài Tập Tuyển Chọn

| Mã bài | Tên bài toán | Nền tảng | Mức độ | Chủ đề cốt lõi |
|---|---|---|---|---|
| **SORT-01** | [Distinct Numbers](https://cses.fi/problemset/task/1621) | CSES 1621 | Khởi động | Đếm phần tử phân biệt, sắp xếp $O(N \log N)$ |
| **SORT-02** | [Merge Sort & Inversion Count](https://oj.vnoi.info/) | VNOI / LeetCode 912 | Cốt lõi | Tự cài đặt Merge Sort, đếm số cặp nghịch thế |
| **SORT-03** | [Quicksort với Hoare Partition](https://leetcode.com/problems/sort-an-array/) | LeetCode 912 | Cốt lõi | Phân hoạch 2 đầu, pivot ngẫu nhiên, kháng test $O(N^2)$ |
| **SORT-04** | [Movie Festival](https://cses.fi/problemset/task/1629) | CSES 1629 | Vận dụng | Sắp xếp theo thời điểm kết thúc, giải thuật tham lam |
| **SORT-05** | [Restaurant Customers](https://cses.fi/problemset/task/1619) | CSES 1619 | Vận dụng | Rời rạc hóa thời gian, quét sự kiện (Sweep-line) |

---

## Chi Tiết Từng Bài Toán

### Bài 1: Distinct Numbers (CSES 1621)
- **Đề bài tóm tắt:** Cho một danh sách gồm $n$ số nguyên ($1 \le n \le 2 \cdot 10^5$, $1 \le x_i \le 10^9$). Hãy đếm số lượng giá trị phân biệt xuất hiện trong danh sách.
- **Giới hạn thời gian:** 1.00s | **Bộ nhớ:** 512 MB.
- **Tư duy bản chất:**
  - Cách ngây thơ: Dùng `std::set` tốn bộ nhớ do cấp phát nút đỏ-đen.
  - Cách tối ưu: Sắp xếp mảng tại chỗ bằng `std::sort` trong $O(N \log N)$. Khi mảng đã sắp xếp, các phần tử giống nhau sẽ đứng kề nhau. Ta chỉ cần duyệt một vòng lặp từ $1 \to n-1$: Nếu $a[i] \ne a[i-1]$ thì tăng biến đếm!
- **Bất biến:** Mảng sau khi sort thỏa mãn $a[0] \le a[1] \le \dots \le a[n-1]$.
- **Ca biên cần lưu ý:** $n = 1$ (kết quả luôn là 1).

---

### Bài 2: Merge Sort & Đếm Số Cặp Nghịch Thế (Inversion Count)
- **Đề bài tóm tắt:** Một cặp chỉ số $(i, j)$ được gọi là một nghịch thế nếu $i < j$ và $a[i] > a[j]$. Đếm tổng số cặp nghịch thế trong mảng $n$ phần tử ($n \le 2 \cdot 10^5$).
- **Tư duy bản chất:**
  - Khi thực hiện bước trộn (Merge) của Merge Sort, giả sử ta đang trộn nửa trái $L$ và nửa phải $R$.
  - Nếu $L[i] \le R[j]$: Phần tử $L[i]$ được đưa vào mảng kết quả, không tạo nghịch thế nào với $R$.
  - **Điểm mấu chốt:** Nếu $L[i] > R[j]$, vì nửa trái $L$ đã được sắp xếp tăng dần, nên **toàn bộ các phần tử từ $L[i]$ đến cuối nửa trái đều lớn hơn $R[j]$**!
  - Số lượng nghịch thế sinh ra ngay tại bước này chính là: $\text{count} += (\text{mid} - i + 1)$.
- **Bẫy tràn số:** Với $n = 2 \cdot 10^5$, số cặp nghịch thế tối đa lên tới $\frac{n(n-1)}{2} \approx 2 \cdot 10^{10} \implies$ **BẮT BUỘC dùng biến `long long` cho biến đếm nghịch thế**!

---

### Bài 3: Quicksort Với Phân Hoạch Hoare (Sort an Array)
- **Đề bài tóm tắt:** Tự cài đặt thuật toán Quicksort từ đầu, không dùng hàm có sẵn của thư viện. Thuật toán phải vượt qua các bộ kiểm thử cực đoan: mảng đã sắp xếp sẵn, mảng sắp xếp ngược, và mảng chứa $50.000$ phần tử giống hệt nhau.
- **Tư duy bản chất:**
  - Không dùng Lomuto partition vì sẽ bị Time Limit Exceeded (TLE) trên mảng trùng lặp.
  - Áp dụng **Hoare Partition** với chỉ số hai đầu co cụm lại.
  - Chọn pivot bằng cách lấy trung điểm: `pivot = a[low + (high - low) / 2]` hoặc chọn ngẫu nhiên `low + rand() % (high - low + 1)`.
- **Bất biến Hoare:** Kết thúc phân hoạch tại chỉ số $p$, mọi phần tử trong đoạn $[low, p] \le$ mọi phần tử trong đoạn $[p + 1, high]$.

---

### Bài 4: Movie Festival (CSES 1629)
- **Đề bài tóm tắt:** Có $n$ bộ phim ($n \le 2 \cdot 10^5$). Bộ phim thứ $i$ bắt đầu tại thời điểm $a_i$ và kết thúc tại thời điểm $b_i$. Một người chỉ có thể xem 1 bộ phim tại một thời điểm (kết thúc phim này có thể xem ngay phim khác bắt đầu cùng thời điểm đó). Hỏi người đó xem được **nhiều phim nhất** là bao nhiêu?
- **Tư duy bản chất:**
  - Đây là bài toán Lập lịch khoảng thời gian kinh điển (Interval Scheduling).
  - **Chiến thuật tham lam (Greedy Choice):** Ta nên ưu tiên chọn bộ phim **kết thúc sớm nhất có thể**! Vì kết thúc càng sớm thì khoảng thời gian còn lại của ngày càng nhiều, giúp ta có cơ hội xem thêm được nhiều phim nhất.
  - **Thuật toán:** Sắp xếp danh sách phim theo **thời điểm kết thúc $b_i$ tăng dần**. Duyệt qua từng phim: Nếu thời điểm bắt đầu $a_i \ge$ thời điểm kết thúc của phim vừa xem gần nhất thì chọn xem phim này và cập nhật lại mốc thời gian kết thúc.
- **Độ phức tạp:** $O(N \log N)$ cho bước sắp xếp, $O(N)$ cho bước duyệt tham lam.

---

### Bài 5: Restaurant Customers (CSES 1619)
- **Đề bài tóm tắt:** Một nhà hàng có $n$ khách hàng. Khách thứ $i$ đến lúc $a_i$ và rời đi lúc $b_i$. Tìm số lượng khách hàng có mặt đông nhất cùng một lúc trong nhà hàng.
- **Tư duy bản chất (Kỹ thuật Quét Sự Kiện - Sweep-line):**
  - Tách mỗi khách hàng thành 2 sự kiện:
    1. Sự kiện `(a_i, +1)`: Có 1 khách bước vào nhà hàng.
    2. Sự kiện `(b_i, -1)`: Có 1 khách bước ra khỏi nhà hàng.
  - Gom toàn bộ $2n$ sự kiện vào một mảng và sắp xếp theo mốc thời gian tăng dần.
  - Duyệt dòng thời gian từ đầu đến cuối: Cộng dồn biến động số lượng khách `current_customers += event.type`, liên tục cập nhật `max_customers = max(max_customers, current_customers)`.
- **Xử lý ca biên:** Nếu một khách đến và một khách đi cùng một thời điểm? Đề bài CSES quy định các mốc thời gian là phân biệt. Nếu trùng nhau, tùy quy ước để ưu tiên sự kiện $+1$ hay $-1$ trước.
