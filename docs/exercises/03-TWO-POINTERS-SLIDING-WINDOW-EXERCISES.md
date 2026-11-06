# Tuyển Tập Bài Tập Thực Chiến: Hai Con Trỏ & Cửa Sổ Trượt (Two Pointers & Sliding Window)

> **Tài liệu luyện tập ngoại tuyến (Offline Practice Set — 03)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — HCMUS  
> **Hệ thống chấm trực tuyến:** [CSES Problem Set](https://cses.fi/problemset/) | [LeetCode](https://leetcode.com/) | [NeetCode 150](https://neetcode.io/)

---

## Danh Mục Bài Tập Tuyển Chọn

| Mã bài | Tên bài toán | Nền tảng | Mức độ | Trọng tâm tư duy |
|---|---|---|---|---|
| **TP-01** | [Sum of Two Values](https://cses.fi/problemset/task/1640) | CSES 1640 | Khởi động | Hai con trỏ đối đầu, lưu vị trí gốc khi sort |
| **TP-02** | [Sum of Three Values (3Sum)](https://cses.fi/problemset/task/1641) | CSES 1641 | Cốt lõi | Cố định 1 vị trí, chạy hai con trỏ trong $O(N^2)$ |
| **TP-03** | [Playlist](https://cses.fi/problemset/task/1141) | CSES 1141 | Cốt lõi | Cửa sổ trượt phần tử phân biệt, mảng lưu vị trí gần nhất |
| **TP-04** | [Subarray Sums I](https://cses.fi/problemset/task/1660) | CSES 1660 | Vận dụng | Cửa sổ trượt tính tổng trên mảng số dương |
| **TP-05** | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | LeetCode 76 | Thách thức | Cửa sổ trượt với bảng tần số ký tự, co dãn tối ưu |

---

## Chi Tiết Từng Bài Toán

### Bài 1: Sum of Two Values (CSES 1640)
- **Đề bài tóm tắt:** Cho mảng $n$ số nguyên và giá trị đích $x$. Hãy tìm **hai vị trí chỉ số phân biệt** trong mảng ban đầu sao cho tổng hai phần tử bằng $x$. Nếu không có, in ra `IMPOSSIBLE`.
- **Tư duy bản chất:**
  - Nếu ta sắp xếp mảng thông thường bằng `std::sort(a.begin(), a.end())`, chỉ số ban đầu của các phần tử sẽ bị xáo trộn hoàn toàn!
  - **Kỹ thuật đóng gói cặp `{giá trị, chỉ số gốc}`:**
    ```cpp
    struct Element { int val, id; };
    std::vector<Element> a(n);
    // Nhận dữ liệu và gán a[i].id = i + 1 (1-based index)
    std::sort(a.begin(), a.end(), [](const Element& x, const Element& y) {
        return x.val < y.val;
    });
    ```
  - Chạy hai con trỏ đối đầu $L = 0, R = n - 1$:
    - Nếu `a[L].val + a[R].val == x`: In ra `a[L].id` và `a[R].id` rồi kết thúc!
    - Nếu tổng $< x$: $L++$.
    - Nếu tổng $> x$: $R--$.
- **Độ phức tạp:** $O(N \log N)$ cho sắp xếp, $O(N)$ cho hai con trỏ.

---

### Bài 2: Sum of Three Values (CSES 1641)
- **Đề bài tóm tắt:** Cho mảng $n$ phần tử ($n \le 5000$). Tìm 3 vị trí phân biệt có tổng bằng $x$.
- **Tư duy bản chất (Giảm Chi Phí Từ $O(N^3)$ Xuống $O(N^2)$):**
  - Sắp xếp mảng tăng dần kèm lưu chỉ số gốc.
  - Dùng vòng lặp $i$ chạy từ $0 \to n - 3$ để **cố định phần tử thứ nhất** $a[i]$.
  - Mục tiêu chuyển thành: Tìm 2 phần tử còn lại trong đoạn $[i + 1, n - 1]$ sao cho:
    $$a[L].val + a[R].val = x - a[i].val$$
  - Bài toán quay về đúng bài toán Hai con trỏ đối đầu ở Bài 1 với chi phí $O(N)$ cho mỗi bước lặp $i$.
  - Tổng thời gian: $N \times O(N) = O(N^2)$. Với $N \le 5000$, số phép tính khoảng $1.2 \times 10^7$, chạy mượt mà trong 0.15 giây!

---

### Bài 3: Playlist (CSES 1141)
- **Đề bài tóm tắt:** Cho danh sách $n$ bài hát theo thứ tự phát, mỗi bài có một mã ID số nguyên ($1 \le k_i \le 10^9$). Tìm độ dài của **chuỗi bài hát liên tiếp dài nhất mà không có bài hát nào bị lặp lại**.
- **Tư duy bản chất (Cửa Sổ Trượt Với Mảng Vị Trí Xuất Hiện Gần Nhất):**
  - Giữ cửa sổ $[L, R]$ luôn thỏa mãn: Mọi bài hát trong đoạn $[L, R]$ đều phân biệt.
  - Dùng `std::map<int, int> last_seen` (hoặc rời rạc hóa tọa độ + mảng trực tiếp để đạt $O(1)$) lưu vị trí xuất hiện gần nhất của từng bài hát.
  - Khi duyệt đến bài hát tại vị trí $R$:
    - Nếu bài hát `k[R]` đã từng xuất hiện trước đó tại vị trí $pos$ và $pos \ge L$: Bất biến bị vi phạm!
    - **Cú nhảy con trỏ trái:** Ta không cần dùng vòng lặp co dần từng bước, mà nhảy thẳng **`L = pos + 1`**!
    - Cập nhật lại vị trí gần nhất: `last_seen[k[R]] = R`.
    - Cập nhật độ dài tối đa: `max_len = max(max_len, R - L + 1)`.
- **Độ phức tạp:** $O(N \log N)$ nếu dùng `std::map`, hoặc $O(N)$ nếu dùng bảng băm/rời rạc hóa.

---

### Bài 4: Subarray Sums I (CSES 1660)
- **Đề bài tóm tắt:** Cho mảng $n$ số nguyên **dương** ($a_i > 0$). Đếm số lượng đoạn con liên tiếp có tổng đúng bằng $x$.
- **Cơ chế Cửa Sổ Trượt Hai Con Trỏ Cùng Chiều:**
  - Khởi tạo $L = 0$, biến cộng dồn `current_sum = 0`.
  - Vòng lặp $R$ chạy từ $0 \to n - 1$:
    1. Nạp `a[R]` vào tổng: `current_sum += a[R]`.
    2. Trong khi `current_sum > x` và $L \le R$: Thu hẹp biên trái: `current_sum -= a[L]; L++;`.
    3. Nếu `current_sum == x`: Tăng biến đếm kết quả `count++`!
- **Cảnh báo sống còn:** Thuật toán trên **CHỈ ĐÚNG KHI MỌI PHẦN TỬ LÀ SỐ DƯƠNG**. Nếu đề bài cho $a_i$ có thể âm (bài toán CSES 1661 Subarray Sums II), cửa sổ trượt thất bại 100% $\implies$ bắt buộc phải dùng mảng cộng dồn + `std::unordered_map`.

---

### Bài 5: Minimum Window Substring (LeetCode 76)
- **Đề bài tóm tắt:** Cho hai chuỗi $S$ và $T$. Tìm chuỗi con ngắn nhất của $S$ chứa đầy đủ toàn bộ các ký tự của $T$ (kể cả số lần lặp lại). Nếu không có, trả về chuỗi rỗng `""`.
- **Tư duy bản chất:**
  - Dùng bảng tần số `need[128]` lưu số lượng từng ký tự của $T$, và `window[128]` cho cửa sổ hiện tại.
  - Duy trì biến `have`: Số lượng ký tự đã thỏa mãn đủ tần số yêu cầu.
  - **Mở rộng $R$:** Tăng tần số `window[S[R]]`. Nếu tần số vừa bằng `need[S[R]]`, tăng `have++`.
  - **Khi `have == need_count`:** Cửa sổ hợp lệ!
    - Ta liên tục co $L$ lại (`window[S[L]]--`) để tìm kích thước tối thiểu, cho đến khi một ký tự bị thiếu hụt làm `have < need_count`.
- **Độ phức tạp:** Tuyệt đối tuyến tính $O(|S| + |T|)$ thời gian và $O(1)$ không gian (bảng 128 ký tự ASCII).
