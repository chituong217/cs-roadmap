# Hướng Dẫn Tư Duy Bản Chất: Sắp Xếp & Tìm Kiếm Nhị Phân Trên Tập Kết Quả

> **Tài liệu học tập ngoại tuyến (Offline Conceptual Guide — 03)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — HCMUS  
> **Trọng tâm:** Mô hình tư duy Chia để trị, Bất biến vị từ đơn điệu và Kỹ thuật Search on Answer

---

## 1. Bản Chất Sắp Xếp Chia Để Trị: Merge Sort vs Quicksort

Hai thuật toán sắp xếp dựa trên so sánh kinh điển nhất thế giới đều áp dụng tư tưởng **Chia để trị (Divide and Conquer)**, nhưng phân bổ khối lượng công việc hoàn toàn đối lập nhau:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   SO SÁNH TRIẾT LÝ CHIA ĐỂ TRỊ                         │
├─────────────────┬──────────────────────────┬───────────────────────────┤
│ Tiêu chí        │ Merge Sort               │ Quicksort                 │
├─────────────────┼──────────────────────────┼───────────────────────────┤
│ Bước Chia       │ Cực rẻ: Chỉ tính trung   │ Tốn công: Phân hoạch      │
│ (Divide)        │ điểm mid = (L + R) / 2.  │ (Partition) tốn O(N).     │
│                 │ Chi phí: O(1).           │                           │
├─────────────────┼──────────────────────────┼───────────────────────────┤
│ Bước Trị        │ Đệ quy sắp xếp 2 nửa độc │ Đệ quy sắp xếp 2 nửa độc  │
│ (Conquer)       │ lập nhau.                │ lập sau khi đã phân hoạch.│
├─────────────────┼──────────────────────────┼───────────────────────────┤
│ Bước Kết hợp    │ Tốn công: Dồn 2 mảng đã  │ Cực rẻ: Mảng tự động hoàn │
│ (Combine)       │ sắp xếp lại thành một.   │ tất sắp xếp!              │
│                 │ Chi phí: O(N).           │ Chi phí: O(1).            │
├─────────────────┼──────────────────────────┼───────────────────────────┤
│ Tính ổn định    │ Ổn định (Stable)         │ Không ổn định (Unstable)  │
│ Bộ nhớ phụ      │ O(N) bộ nhớ ngoài        │ O(log N) stack tại chỗ    │
└─────────────────┴──────────────────────────┴───────────────────────────┘
```

---

## 2. Đi Sâu Vào Quicksort: Phân Hoạch Hoare vs Lomuto

Khuyết điểm lớn nhất trong cách dạy thuật toán truyền thống là chỉ dạy sơ đồ phân hoạch **Lomuto** mà bỏ quên sơ đồ **Hoare**.

### 2.1. Phân Hoạch Lomuto (Dễ viết nhưng nguy hiểm)
- Dùng một con trỏ $i$ và một con trỏ quét $j$ chạy từ trái qua phải.
- **Điểm yếu chí mạng:** Nếu mảng có nhiều phần tử trùng lặp (hoặc toàn bộ phần tử đều bằng nhau), Lomuto sẽ đưa toàn bộ các phần tử về một phía, khiến thuật toán suy biến thành độ phức tạp tồi nhất **$O(N^2)$**!

### 2.2. Phân Hoạch Hoare (Chuẩn mực tối ưu)
- Dùng hai con trỏ từ hai đầu: $i$ chạy từ trái sang, $j$ chạy từ phải sang.
- $i$ tìm phần tử đầu tiên $\ge pivot$, $j$ tìm phần tử đầu tiên $\le pivot$. Khi cả hai dừng lại, hoán đổi `swap(a[i], a[j])`.
- **Ưu điểm vượt trội:** Khi gặp các phần tử bằng $pivot$, cả hai con trỏ đều dừng lại và hoán đổi, chia mảng thành hai nửa cân bằng ngay cả khi mảng toàn số bằng nhau!

```cpp
// Cài đặt Hoare Partition chuẩn mực
int hoarePartition(std::vector<int>& a, int low, int high) {
    int pivot = a[low + (high - low) / 2]; // Chọn pivot ở giữa tránh suy biến
    int i = low - 1;
    int j = high + 1;
    while (true) {
        do { i++; } while (a[i] < pivot);
        do { j--; } while (a[j] > pivot);
        if (i >= j) return j;
        std::swap(a[i], a[j]);
    }
}
```

---

## 3. Khái Niệm Tính Ổn Định (Stability) Trong Sắp Xếp

Một thuật toán sắp xếp được gọi là **ổn định (Stable)** nếu nó **bảo toàn thứ tự tương đối ban đầu của các phần tử có cùng giá trị khóa**.
- **Vì sao quan trọng?** Ví dụ khi sắp xếp danh sách sinh viên: Lần 1 sắp xếp theo Tên (A-Z). Lần 2 sắp xếp theo Điểm thi (giảm dần). Nếu thuật toán ổn định, những sinh viên có cùng Điểm thi vẫn sẽ giữ nguyên thứ tự sắp xếp Tên A-Z của Lần 1!
- **Merge Sort là ổn định:** Trong bước trộn, khi hai phần tử ở hai nửa bằng nhau, ta luôn ưu tiên lấy phần tử ở nửa bên trái (`if (left[i] <= right[j]) take(left[i++])`).
- **Quicksort và Heapsort không ổn định:** Vì các thao tác hoán đổi diễn ra nhảy cóc qua khoảng cách xa trong mảng.

---

## 4. Bản Chất Tìm Kiếm Nhị Phân: Vị Từ Đơn Điệu (Monotonic Predicate)

Rất nhiều người học tin rằng "Tìm kiếm nhị phân chỉ áp dụng được trên mảng đã sắp xếp". **Đây là một ngộ nhận tai hại!**

Bản chất toán học thực sự của Tìm kiếm nhị phân là: **Sự tồn tại của một vị từ logic đơn điệu $P(x) \in \{\text{False}, \text{True}\}$.**

```
Không gian tìm kiếm:
x:     1      2      3      4      5      6      7      8      9
P(x): False  False  False  False  True   True   True   True   True
                                  ▲
                             Điểm chuyển tiếp
```

Khi kiểm tra một điểm $mid$:
- Nếu $P(mid) == \text{False}$: Do tính đơn điệu, toàn bộ các giá trị bên trái $mid$ chắc chắn cũng là $\text{False} \implies$ Loại bỏ nửa bên trái.
- Nếu $P(mid) == \text{True}$: Nghiệm tối ưu có thể là $mid$ hoặc nằm ở nửa bên trái $\implies$ Thu hẹp tìm kiếm về bên trái.

### 4.1. Công Thức Tính Trung Điểm An Toàn Tuyệt Đối
```cpp
// NGUY HIỂM: Gây tràn số nguyên khi lo + hi > 2^31 - 1
int mid = (lo + hi) / 2;

// AN TOÀN TUYỆT ĐỐI 100%:
int mid = lo + (hi - lo) / 2;
```

---

## 5. Kỹ Thuật Tìm Kiếm Nhị Phân Trên Không Gian Nghiệm (Binary Search on Answer)

Đây là kỹ thuật xuất hiện dày đặc nhất trong các kỳ thi học thuật và phỏng vấn chuyên ngành: **Chuyển bài toán tối ưu hóa ($\min / \max$) thành bài toán quyết định (`can(x) -> bool`)**.

### Dấu Hiệu Nhận Biết Dạng Bài:
1. Đề bài yêu cầu: *"Tìm giá trị $X$ nhỏ nhất sao cho..."* hoặc *"Tìm giá trị $X$ lớn nhất thỏa mãn..."*
2. Khó tính trực tiếp công thức của $X$.
3. **Nhưng nếu ai đó cho trước một giá trị $X$, việc kiểm tra xem $X$ có hợp lệ hay không lại cực kỳ dễ dàng (thường bằng thuật toán tham lam trong $O(N)$)!**

### Bài Toán Mẫu: CSES 1620 — Factory Machines
- **Đề bài:** Có $n$ máy, máy thứ $i$ mất $k_i$ giây để sản xuất 1 sản phẩm. Các máy hoạt động đồng thời độc lập. Cần tìm **thời gian ngắn nhất $T$** để sản xuất đủ $t$ sản phẩm.
- **Chuyển thành Vị Từ Đơn Điệu:**
  Hàm quyết định: Trong thời gian $T$, tổng số sản phẩm $n$ máy làm được là:
  $$f(T) = \sum_{i=1}^{n} \lfloor \frac{T}{k_i} \rfloor$$
  Vị từ: $P(T) = (f(T) \ge t)$.
  - Rõ ràng $f(T)$ là hàm đơn điệu tăng: Thời gian càng nhiều thì sản phẩm làm được càng nhiều.
- **Không gian nghiệm:** $lo = 1$, $hi = \min(k_i) \times t$ (tối đa $10^{18} \implies$ dùng `long long`).

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

bool canProduce(const std::vector<long long>& k, long long t, long long timeLimit) {
    long long totalProducts = 0;
    for (long long machineTime : k) {
        totalProducts += timeLimit / machineTime;
        if (totalProducts >= t) return true; // Cắt tỉa sớm chống tràn số
    }
    return totalProducts >= t;
}

long long solve(const std::vector<long long>& k, long long t) {
    long long lo = 1;
    long long hi = 1e18; // Giới hạn trên an toàn
    long long ans = hi;

    while (lo <= hi) {
        long long mid = lo + (hi - lo) / 2;
        if (canProduce(k, t, mid)) {
            ans = mid;      // Thỏa mãn, lưu lại và thử tìm thời gian ngắn hơn
            hi = mid - 1;
        } else {
            lo = mid + 1;   // Không đủ sản phẩm, bắt buộc phải tăng thời gian
        }
    }
    return ans;
}
```
- **Độ phức tạp:** $O(N \cdot \log(\text{hi})) \approx O(60 \cdot N)$, chạy trong chưa đầy $0.05$ giây với $N = 2 \times 10^5$!
