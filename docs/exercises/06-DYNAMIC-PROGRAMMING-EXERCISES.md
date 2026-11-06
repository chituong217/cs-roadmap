# Tuyển Tập Bài Tập Thực Chiến: Quy Hoạch Động (Dynamic Programming Problem Set)

> **Tài liệu luyện tập ngoại tuyến (Offline Practice Set — 06)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — HCMUS  
> **Hệ thống chấm trực tuyến:** [CSES Problem Set](https://cses.fi/problemset/) | [VNOI](https://oj.vnoi.info/) | [LeetCode](https://leetcode.com/)

---

## Danh Mục Bài Tập Tuyển Chọn

| Mã bài | Tên bài toán | Nền tảng | Mức độ | Trọng tâm tư duy |
|---|---|---|---|---|
| **DP-01** | [Dice Combinations](https://cses.fi/problemset/task/1633) | CSES 1633 | Khởi động | Đếm số cách tạo tổng, số học đồng dư $10^9 + 7$ |
| **DP-02** | [Book Shop (0/1 Knapsack)](https://cses.fi/problemset/task/1158) | CSES 1158 | Cốt lõi | Bài toán Ba lô 0/1, nén mảng 1 chiều duyệt lùi |
| **DP-03** | [Coin Combinations I vs II](https://cses.fi/problemset/task/1635) | CSES 1635 / 1636 | Cốt lõi | Phân biệt Đếm Hoán vị vs Đếm Tổ hợp qua thứ tự vòng for |
| **DP-04** | [Increasing Subsequence (LIS)](https://cses.fi/problemset/task/1145) | CSES 1145 | Cốt lõi | Dãy con tăng dài nhất $O(N \log N)$ bằng `std::lower_bound` |
| **DP-05** | [Edit Distance](https://cses.fi/problemset/task/1639) | CSES 1639 | Kinh điển | Khoảng cách biến đổi chuỗi (chèn, xóa, thay thế) |

---

## Chi Tiết Từng Bài Toán

### Bài 1: Dice Combinations (CSES 1633)
- **Đề bài tóm tắt:** Đếm số cách gieo một con xúc xắc 6 mặt (các mặt từ 1 đến 6) để tổng điểm nhận được đúng bằng $n$ ($1 \le n \le 10^6$). Vì kết quả rất lớn, hãy chia lấy dư cho $10^9 + 7$.
- **Tư duy SRTBOT:**
  - **S:** `dp[i]` là số cách gieo được tổng bằng $i$.
  - **R:** Lần gieo cuối cùng có thể rơi vào các mặt $1, 2, 3, 4, 5, 6$. Do đó:
    $$dp[i] = \sum_{k=1}^{6} dp[i - k] \quad (\text{với } i - k \ge 0)$$
  - **B:** `dp[0] = 1` (Có đúng 1 cách để tạo tổng 0: không gieo lần nào).
  - **T:** $O(N)$ thời gian, $O(N)$ bộ nhớ.

---

### Bài 2: Book Shop (CSES 1158 — 0/1 Knapsack)
- **Đề bài tóm tắt:** Có $n$ cuốn sách ($n \le 1000$). Cuốn sách thứ $i$ có giá $h_i$ và số trang là $s_i$. Bạn có số tiền tối đa là $x$ ($x \le 10^5$). Mỗi cuốn sách bạn chỉ được mua tối đa 1 lần. Tìm **tổng số trang sách nhiều nhất** có thể mua được.
- **Tư duy bản chất (Nén Bộ Nhớ 1 Chiều Duyệt Ngược):**
  ```cpp
  const int MAX_PRICE = 100000;
  std::vector<int> dp(x + 1, 0);

  for (int i = 0; i < n; i++) {
      for (int p = x; p >= price[i]; p--) { // BẮT BUỘC DUYỆT NGƯỢC!
          dp[p] = std::max(dp[p], dp[p - price[i]] + pages[i]);
      }
  }
  std::cout << dp[x] << "\n";
  ```
  - **Giải thích:** Nếu duyệt xuôi, một cuốn sách có thể được tính mua lặp lại nhiều lần. Duyệt ngược bảo đảm tại thời điểm tính `dp[p]`, giá trị `dp[p - price[i]]` vẫn là kết quả của trạng thái chưa mua cuốn sách thứ $i$.

---

### Bài 3: Coin Combinations I vs Coin Combinations II (So Sánh Kinh Điển)
Đây là cặp bài toán hay nhất để hiểu bản chất của thứ tự vòng lặp trong Quy hoạch động:

| Bài toán | Yêu cầu | Thứ tự vòng lặp | Bản chất |
|---|---|---|---|
| **Coin Combinations I (CSES 1635)** | Đếm số cách tạo tổng $x$, các thứ tự khác nhau tính là cách khác nhau (ví dụ: `2+3` khác `3+2`). | **Vòng lặp Tổng ở ngoài, Đồng xu ở trong:**<br>`for (sum = 1..x)`<br>&nbsp;&nbsp;`for (c : coins)` | **Đếm Hoán vị (Permutations)** |
| **Coin Combinations II (CSES 1636)** | Đếm số cách tạo tổng $x$, thứ tự không quan trọng (ví dụ: `2+3` và `3+2` chỉ tính là 1 cách). | **Vòng lặp Đồng xu ở ngoài, Tổng ở trong:**<br>`for (c : coins)`<br>&nbsp;&nbsp;`for (sum = c..x)` | **Đếm Tổ hợp (Combinations)** |

- **Giải thích:** Khi đặt vòng lặp đồng xu ở ngoài cùng, ta xử lý từng loại đồng xu một cách tuần tự (ví dụ: dùng hết đồng 2 rồi mới xét đến đồng 3), triệt tiêu hoàn toàn sự xáo trộn thứ tự các đồng xu!

---

### Bài 4: Increasing Subsequence (CSES 1145 — LIS)
- **Đề bài tóm tắt:** Cho mảng $n$ số nguyên ($n \le 2 \cdot 10^5$). Tìm độ dài lớn nhất của một dãy con tăng nghiêm ngặt.
- **Tư duy bản chất (Thuật toán Tham lam $O(N \log N)$):**
  - Vì $n = 2 \cdot 10^5$, thuật toán $O(N^2)$ thông thường sẽ bị TLE.
  - Sử dụng mảng `tails` lưu phần tử kết thúc nhỏ nhất của các dãy con tăng có độ dài $len$.
  - Mảng `tails` luôn đơn điệu tăng $\implies$ Dùng `std::lower_bound` tìm vị trí thay thế hoặc mở rộng.
  ```cpp
  std::vector<int> tails;
  for (int x : a) {
      auto it = std::lower_bound(tails.begin(), tails.end(), x);
      if (it == tails.end()) tails.push_back(x);
      else *it = x;
  }
  std::cout << tails.size() << "\n";
  ```

---

### Bài 5: Edit Distance (CSES 1639)
- **Đề bài tóm tắt:** Cho hai xâu ký tự $s_1$ và $s_2$ (độ dài tối đa 5000 ký tự). Tìm số lượng phép biến đổi tối thiểu (Chèn 1 ký tự, Xóa 1 ký tự, hoặc Thay thế 1 ký tự) để biến đổi $s_1$ thành $s_2$.
- **Công thức truy hồi 2 chiều:**
  - `dp[i][j]` là chi phí biến đổi tiền tố $s_1[0..i-1]$ thành $s_2[0..j-1]$.
  - Nếu $s_1[i-1] == s_2[j-1]$: Không tốn chi phí $\implies dp[i][j] = dp[i-1][j-1]$.
  - Nếu khác nhau: Lấy giá trị nhỏ nhất của 3 thao tác $+ 1$:
    $$dp[i][j] = 1 + \min \begin{cases}
    dp[i][j-1] & \text{(Thao tác Chèn)} \\
    dp[i-1][j] & \text{(Thao tác Xóa)} \\
    dp[i-1][j-1] & \text{(Thao tác Thay thế)}
    \end{cases}$$
- **Độ phức tạp:** $O(|s_1| \times |s_2|) \approx 5000 \times 5000 = 2.5 \cdot 10^7$ phép tính, chạy trong $0.09$ giây!
