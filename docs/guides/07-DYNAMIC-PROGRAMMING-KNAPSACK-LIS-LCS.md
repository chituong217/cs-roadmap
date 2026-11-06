# Hướng Dẫn Tư Duy Bản Chất: Quy Hoạch Động (Khung SRTBOT, Ba Lô 0/1, LIS, LCS)

> **Tài liệu học tập ngoại tuyến (Offline Conceptual Guide — 07)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — HCMUS  
> **Trọng tâm:** Khung tư duy chuẩn hóa SRTBOT, Nén mảng Ba lô 0/1 và Tối ưu LIS $O(N \log N)$

---

## 1. Bản Chất Quy Hoạch Động: Không Phải Phép Thuật, Mà Là Tìm Kiếm Thông Minh

Quy hoạch động (Dynamic Programming - DP) thường bị sinh viên xem là phần khó nhất và mang tính "đánh đố". Nhưng về bản chất, **Quy hoạch động thực chất chỉ là thuật toán vét cạn đệ quy có ghi nhớ trên một Đồ thị có hướng không chu trình (DAG) của các trạng thái!**

Một bài toán giải được bằng Quy hoạch động khi và chỉ khi thỏa mãn 2 điều kiện:
1. **Bài toán con trùng lặp (Overlapping Subproblems):** Cùng một trạng thái bài toán con bị gọi lại hàng triệu lần trong cây đệ quy. Bằng cách lưu kết quả vào mảng (memoization / tabulation), ta chỉ tính mỗi trạng thái đúng 1 lần duy nhất!
2. **Cấu trúc con tối ưu (Optimal Substructure):** Nghiệm tối ưu của bài toán lớn được xây dựng trực tiếp từ các nghiệm tối ưu của các bài toán con nhỏ hơn mà không bị ảnh hưởng bởi lịch sử đưa ra quyết định.

---

## 2. Chuẩn Hóa Tư Duy Bằng Khung SRTBOT Của MIT 6.006

Thay vì ngồi nhìn màn hình và đoán mò công thức, hãy luôn đặt bút viết đủ 6 bước của **khung SRTBOT**:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        KHUNG 6 BƯỚC S.R.T.B.O.T                        │
├───┬─────────────────────────┬──────────────────────────────────────────┤
│ S │ Subproblems             │ Ý nghĩa chính xác của trạng thái dp[...] │
│ R │ Relate                  │ Công thức truy hồi liên hệ giữa các con  │
│ T │ Topological Order       │ Thứ tự vòng for để dữ liệu luôn tính sẵn │
│ B │ Base Cases              │ Trường hợp biên nhỏ nhất không thể chia  │
│ O │ Original Problem        │ Lấy đáp án đề bài từ ô trạng thái nào    │
│ T │ Time & Space Complexity │ Đánh giá tổng chi phí tài nguyên        │
└───┴─────────────────────────┴──────────────────────────────────────────┘
```

---

## 3. Chuyên Đề 1: Bài Toán Ba Lô 0/1 (0/1 Knapsack) & Kỹ Thuật Nén Mảng Duyệt Ngược

Có $N$ món đồ, món thứ $i$ có trọng lượng $w_i$ và giá trị $v_i$. Ba lô chứa được tối đa tải trọng $W$. Mỗi món chỉ được chọn **tối đa 1 lần (0 hoặc 1)**.

### 3.1. Phân Tích SRTBOT Bảng 2 Chiều:
- **S (Subproblems):** `dp[i][w]` là giá trị lớn nhất khi chỉ xét tập hợp con gồm $i$ món đồ đầu tiên với sức chứa tải trọng là $w$.
- **R (Relate):** Tại món thứ $i$, ta có 2 lựa chọn:
  1. *Không lấy món $i$:* Giá trị là `dp[i-1][w]`.
  2. *Có lấy món $i$ (nếu $w \ge w_i$):* Giá trị là `dp[i-1][w - w_i] + v_i`.
  $$\implies dp[i][w] = \max(dp[i-1][w], \; dp[i-1][w - w_i] + v_i)$$
- **T (Topological Order):** Vòng lặp ngoài $i$ từ $1 \to N$; vòng lặp trong $w$ từ $0 \to W$.
- **B (Base Cases):** `dp[0][w] = 0` (0 món đồ thì giá trị bằng 0).
- **O (Original Problem):** `dp[N][W]`.
- **T (Complexity):** Thời gian $O(N \cdot W)$, Bộ nhớ $O(N \cdot W)$.

### 3.2. Kỹ Thuật Nén Bộ Nhớ Thành Mảng 1 Chiều: Vì Sao BẮT BUỘC Phải Duyệt Ngược?
Để ý rằng để tính dòng thứ $i$, ta chỉ cần dữ liệu của dòng thứ $i-1$. Ta có thể nén bảng thành mảng 1 chiều `dp[w]`.

Nhưng tại sao vòng lặp tải trọng $w$ **BẮT BUỘC phải duyệt lùi từ $W$ về $w_i$**?

```cpp
// CÀI ĐẶT CHUẨN MỰC BA LÔ 0/1 NÉN BỘ NHỚ:
std::vector<int> dp(W + 1, 0);
for (int i = 0; i < n; i++) {
    for (int w = W; w >= weight[i]; w--) { // DUYỆT NGƯỢC!
        dp[w] = std::max(dp[w], dp[w - weight[i]] + value[i]);
    }
}
```

- **Giải thích cơ chế:**
  - Nếu duyệt lùi: Khi ta tính `dp[w]`, giá trị `dp[w - weight[i]]` nằm ở phía trước vẫn đang lưu **dữ liệu của dòng cũ ($i-1$)**, chưa hề bị thay đổi bởi món đồ thứ $i$. Do đó mỗi món đồ chỉ được dùng tối đa 1 lần!
  - Nếu duyệt xuôi ($w$ từ $w_i \to W$): Món đồ $i$ có thể được cộng dồn nhiều lần vào cùng một túi đồ $\to$ Thuật toán biến thành bài toán **Ba lô không giới hạn (Unbounded Knapsack)**!

---

## 4. Chuyên Đề 2: Dãy Con Tăng Dài Nhất (LIS) — Bước Nhảy Từ $O(N^2)$ Lên $O(N \log N)$

Cho mảng số nguyên $a$. Tìm độ dài lớn nhất của một dãy con tăng nghiêm ngặt.

### 4.1. Quy Hoạch Động Truyền Thống $O(N^2)$
- `dp[i]` là độ dài LIS kết thúc tại vị trí $i$.
- Công thức: `dp[i] = 1 + max({dp[j] | j < i và a[j] < a[i]})`.
- Duyệt qua mọi cặp $(i, j) \implies O(N^2)$. Quá chậm khi $N \ge 10^5$.

### 4.2. Thuật Toán Tham Lam Tối Ưu $O(N \log N)$ Bằng Mảng Tails
Ta duy trì một mảng phụ `tails`, trong đó:
- **`tails[k]` là giá trị phần tử cuối cùng nhỏ nhất của một dãy con tăng có độ dài $k+1$.**

### Bất Biến Kỳ Diệu: Mảng Tails Luôn Luôn Tăng Dần Nghiêm Ngặt!
Do `tails` luôn tăng dần, ta có thể áp dụng **Tìm kiếm nhị phân (`std::lower_bound`)** trong thời gian $O(\log N)$:
- Với mỗi phần tử $x$ trong mảng ban đầu:
  1. Tìm vị trí đầu tiên trong `tails` có giá trị $\ge x$.
  2. Nếu tìm thấy tại chỉ số $idx$: Thay thế `tails[idx] = x`. (Hành động này mang tính tham lam: thay thế một đuôi lớn bằng một đuôi nhỏ hơn sẽ mở ra cơ hội nối dài cho các phần tử phía sau!).
  3. Nếu không tìm thấy (mọi phần tử trong `tails` đều $< x$): Ta vừa mở rộng được một dãy con mới dài hơn $\implies$ Đẩy $x$ vào cuối mảng (`tails.push_back(x)`).

```cpp
#include <vector>
#include <algorithm>

int lengthOfLIS(const std::vector<int>& nums) {
    std::vector<int> tails;
    for (int x : nums) {
        auto it = std::lower_bound(tails.begin(), tails.end(), x);
        if (it == tails.end()) {
            tails.push_back(x); // Mở rộng độ dài LIS thêm 1
        } else {
            *it = x;            // Tối ưu đuôi của dãy con có độ dài tương ứng
        }
    }
    return tails.size(); // Độ dài LIS chính là kích thước của tails!
}
```

---

## 5. Chuyên Đề 3: Xâu Con Chung Dài Nhất (Longest Common Subsequence - LCS) & Kỹ Thuật Truy Vết

Cho hai chuỗi $A$ (độ dài $n$) và $B$ (độ dài $m$). Tìm độ dài chuỗi con chung dài nhất.

### 5.1. Công Thức Truy Hồi Bảng 2 Chiều
- `dp[i][j]` là độ dài LCS của tiền tố $A[0..i-1]$ và $B[0..j-1]$.
$$\begin{cases}
dp[i][j] = 1 + dp[i-1][j-1] & \text{nếu } A[i-1] == B[j-1] \\
dp[i][j] = \max(dp[i-1][j], \; dp[i][j-1]) & \text{nếu } A[i-1] \ne B[j-1]
\end{cases}$$

### 5.2. Kỹ Thuật Truy Vết Lời Giải (Reconstruction)
Để in ra chính xác xâu con đó, ta lần ngược từ ô `dp[n][m]` về ô `dp[0][0]`:
- Nếu $A[i-1] == B[j-1]$: Ký tự này thuộc về đáp án! Đẩy vào kết quả và lùi chéo về `(i-1, j-1)`.
- Nếu khác nhau: Lùi về ô có giá trị lớn hơn: Nếu `dp[i-1][j] > dp[i][j-1]` thì lùi lên trên `i--`, ngược lại lùi sang trái `j--`.
- Đảo ngược chuỗi kết quả thu được.
