# Hướng Dẫn Tư Duy Bản Chất: Hai Con Trỏ & Cửa Sổ Trượt (Two Pointers & Sliding Window)

> **Tài liệu học tập ngoại tuyến (Offline Conceptual Guide — 04)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — HCMUS  
> **Trọng tâm:** Phân tích chi phí khấu hao, Bất biến cửa sổ và Bẫy số âm

---

## 1. Bí Mật Độ Phức Tạp: Vì Sao Vòng Lặp Lồng Nhau Lại Đạt $O(N)$?

Rất nhiều sinh viên nhìn thấy cấu trúc mã:
```cpp
int left = 0;
for (int right = 0; right < n; right++) {
    while (conditionViolated()) {
        left++; // Vòng lặp while lồng bên trong vòng lặp for!
    }
}
```
Lập tức kết luận sai lầm rằng thuật toán có độ phức tạp $O(N^2)$ vì có "vòng lặp lồng vòng lặp".

### Phân Tích Khấu Hao (Amortized Analysis):
- Hãy quan sát quỹ đạo di chuyển của hai con trỏ:
  1. Con trỏ `right` tăng từ `0` đến `n - 1`: Đúng $N$ bước nhảy.
  2. Con trỏ `left` chỉ **tiến về phía trước**, không bao giờ bị lùi lại: Tối đa $N$ bước nhảy trong toàn bộ vòng đời của chương trình.
- **Tổng số thao tác con trỏ:** Tối đa $N + N = 2N$ thao tác.
- **Kết luận:** Độ phức tạp thời gian thực tế là tuyến tính **$O(N)$** tuyệt đối!

---

## 2. Hai Dạng Thức Cơ Bản Của Hai Con Trỏ

```
DẠNG 1: HAI CON TRỎ ĐỐI ĐẦU (OPPOSITE-DIRECTION)
Mảng đã sắp xếp:  [ 2,  4,  7, 11, 15, 19 ]
                   ▲                   ▲
                   L                   R
              (L tiến dần sang phải, R lùi dần sang trái)

DẠNG 2: CỬA SỔ TRƯỢT CÙNG CHIỀU (SAME-DIRECTION / SLIDING WINDOW)
Mảng bất kỳ:      [ 3,  1,  2,  5,  1,  1,  2 ]
                           [-------]
                           L       R
              (Cả L và R cùng trượt về bên phải để duy trì bất biến)
```

---

## 3. Dạng 1: Hai Con Trỏ Đối Đầu (Opposite-Direction)

### Bài Toán Kinh Điển: Sum of Two Values (Tìm 2 số có tổng bằng $X$)
- **Điều kiện tiên quyết:** Mảng phải được sắp xếp tăng dần ($O(N \log N)$).
- **Quy tắc di chuyển:**
  - Nếu `a[L] + a[R] == Target`: Tìm thấy nghiệm!
  - Nếu `a[L] + a[R] < Target`: Tổng đang quá nhỏ. Do mảng đã sắp xếp, giảm $R$ chỉ làm tổng nhỏ hơn nữa $\implies$ Lựa chọn duy nhất là **tăng $L$** để nâng tổng lên.
  - Nếu `a[L] + a[R] > Target`: Tổng đang quá lớn $\implies$ Bắt buộc phải **giảm $R$** để hạ tổng xuống.

```cpp
bool hasTwoSum(const std::vector<int>& sortedArray, int target) {
    int L = 0;
    int R = sortedArray.size() - 1;
    while (L < R) {
        int sum = sortedArray[L] + sortedArray[R];
        if (sum == target) return true;
        if (sum < target) L++;
        else R--;
    }
    return false;
}
```

---

## 4. Dạng 2: Cửa Sổ Trượt (Sliding Window)

Cửa sổ trượt được chia làm 2 biến thể:

### 4.1. Cửa Sổ Kích Thước Cố Định (Fixed Size $K$)
- Duyệt qua đoạn đầu tiên độ dài $K$ để tính giá trị khởi tạo.
- Khi dịch cửa sổ sang phải 1 bước: Ta chỉ cần **nạp phần tử mới tại `R`** và **loại bỏ phần tử cũ tại `L`** trong thời gian $O(1)$ mà không cần tính lại toàn bộ $K$ phần tử!
- Ứng dụng: Tìm tổng đoạn con độ dài $K$ lớn nhất, đếm số ký tự trùng lặp trong chuỗi con độ dài $K$.

### 4.2. Cửa Sổ Kích Thước Co Giãn (Variable Size)
- Mục tiêu: Tìm đoạn con thỏa mãn một **Bất biến (Window Invariant)** nào đó (ví dụ: không có phần tử trùng lặp, hoặc tổng $\le S$).
- **Khuôn Mẫu 3 Bước Chuẩn Mực:**
  1. Mở rộng biên phải: Nạp phần tử `a[R]` vào trạng thái cửa sổ.
  2. Thu hẹp biên trái: Khi bất biến bị vi phạm, dùng vòng lặp `while` co `L` lại cho đến khi bất biến được khôi phục.
  3. Cập nhật đáp án: Tại mọi thời điểm sau bước 2, đoạn $[L, R]$ luôn hợp lệ $\implies$ Cập nhật độ dài lớn nhất hoặc nhỏ nhất.

---

## 5. Bẫy Số Âm Chí Mạng (The Negative Numbers Trap)

Đây là lỗi phổ biến nhất của sinh viên khi thi giải thuật: **Áp dụng cửa sổ trượt cho bài toán tìm đoạn con có tổng bằng $S$ trên mảng có chứa số âm.**

### Vì Sao Cửa Sổ Trượt Thất Bại Khi Có Số Âm?
- **Tính đơn điệu bị phá vỡ:**
  - Khi toàn bộ mảng là số không âm ($a_i \ge 0$): Nạp thêm phần tử luôn làm tổng **tăng lên hoặc giữ nguyên**, loại bỏ phần tử luôn làm tổng **giảm đi**. Nhờ tính đơn điệu này, ta biết chính xác khi nào cần co `L` và khi nào cần mở `R`.
  - Khi có số âm: Nạp thêm một phần tử âm sẽ làm tổng **giảm đi**! Loại bỏ một phần tử âm lại làm tổng **tăng lên**!
  - Kết quả: Thuật toán không thể biết phải dịch con trỏ nào để tiến về nghiệm $\to$ Lời giải sai hoàn toàn.

### Giải Pháp Thay Thế: Mảng Cộng Dồn + Bảng Băm (Prefix Sums + Hash Map)
Khi mảng có số âm, bài toán "Tìm đoạn con có tổng bằng $S$" phải được chuyển về bài toán tra cứu hiệu hai mảng cộng dồn:
$$\text{Sum}(L, R) = \text{pref}[R] - \text{pref}[L-1] = S \iff \text{pref}[L-1] = \text{pref}[R] - S$$

Ta dùng `std::unordered_map` lưu các giá trị `pref` đã gặp. Khi đứng tại vị trí $R$, ta chỉ cần tra cứu xem giá trị $(\text{pref}[R] - S)$ đã từng xuất hiện trước đó hay chưa trong thời gian trung bình $O(1)$!
