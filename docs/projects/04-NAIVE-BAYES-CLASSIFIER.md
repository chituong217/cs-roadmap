# Đặc Tả Đồ Án Capstone 04: Bộ Phân Loại Thư Rác Naive Bayes & Mô Phỏng Monte Carlo C++

> **Tài liệu đặc tả kỹ thuật đồ án (Capstone Project Specification — 04)**  
> **Lĩnh vực:** Toán Ứng Dụng Cho CS, Học Máy Thống Kê & Khoa Học Dữ Liệu  
> **Ánh xạ lộ trình:** Track 4 (Toán Nền Tảng Cho CS) & Track 6 (Chuyên Sâu)  
> **Công cụ:** C++17 thuần (Không dùng thư viện ML ngoài), CMake, GoogleTest / Catch2, ASan

---

## 1. Mục Tiêu & Tổng Quan Đồ Án

Xây dựng từ đầu một **Hệ thống Phân loại Thư rác (Spam Filter Classifier)** bằng thuật toán **Multinomial Naive Bayes** kết hợp với **Mô phỏng Thống kê Monte Carlo** hoàn toàn bằng C++17 thuần:
1. **Làm chủ nền tảng Toán học & Xác suất:** Vận dụng trực tiếp Định lý Bayes, Xác suất có điều kiện, và Kỹ thuật làm trơn Laplace (Laplace Smoothing).
2. **Kỹ thuật tính toán số học trên không gian Log (Log-space Probability):** Ngăn chặn triệt để hiện tượng tràn số thực dưới (Floating-point Underflow) khi nhân hàng nghìn xác suất nhỏ hơn 1.
3. **Mô phỏng Monte Carlo Cross-Validation:** Đánh giá độ tin cậy và khoảng tin cậy 95% của mô hình bằng cách lấy mẫu ngẫu nhiên lặp lại 1.000 lần.
4. **Hệ thống đánh giá khoa học:** Tự tính toán Ma trận nhầm lẫn (Confusion Matrix), Độ chính xác (Accuracy), Độ chuẩn xác (Precision), Độ thu hồi (Recall) và Điểm $F_1$-Score.

---

## 2. Nền Tảng Toán Học Cốt Lõi

### 2.1. Định Lý Bayes Cho Phân Loại Văn Bản
Ta cần tính xác suất một bức thư là Thư rác (Spam) dựa trên tập hợp các từ xuất hiện trong thư $W = \{w_1, w_2, \dots, w_k\}$:
$$P(\text{Spam} \mid W) = \frac{P(\text{Spam}) \cdot P(W \mid \text{Spam})}{P(W)}$$

- **Giả định "Ngây Thơ" (Naive Assumption):** Giả sử sự xuất hiện của các từ là độc lập có điều kiện với nhau:
  $$P(W \mid \text{Spam}) = \prod_{i=1}^{k} P(w_i \mid \text{Spam})$$

### 2.2. Chuyển Đổi Sang Không Gian Log Chống Tràn Số (Underflow)
Vì mỗi $P(w_i \mid \text{Spam})$ là một số thực rất nhỏ (ví dụ: $0.0001$), việc nhân hàng trăm từ sẽ khiến kết quả tiệm cận về 0 và biến thành số 0 tròn trĩnh trên máy tính (Underflow).
- **Giải pháp chuyển sang Log:**
  $$\log P(\text{Spam} \mid W) \propto \log P(\text{Spam}) + \sum_{i=1}^{k} \log P(w_i \mid \text{Spam})$$
  Phép nhân xác suất biến thành phép cộng số thực đơn giản và an toàn tuyệt đối!

### 2.3. Kỹ Thuật Làm Trơn Laplace (Laplace Add-1 Smoothing)
Nếu một từ mới chưa từng xuất hiện trong tập huấn luyện thư rác, xác suất $P(w_{new} \mid \text{Spam}) = 0$, kéo theo toàn bộ tích xác suất bằng 0!
- **Công thức làm trơn Laplace:**
  $$P(w \mid \text{Spam}) = \frac{\text{Count}(w, \text{Spam}) + 1}{\sum_{w'} \text{Count}(w', \text{Spam}) + |V|}$$
  (Với $|V|$ là tổng số lượng từ vựng phân biệt trong toàn bộ từ điển).

---

## 3. 4 Mốc Phát Triển Dự Án (M1 – M4 Milestones)

### Mốc M1: Bộ Tiền Xử Lý Văn Bản (Text Tokenizer & Vocabulary Builder)
- **Mục tiêu:**
  - Đọc tệp dữ liệu huấn luyện (SMS Spam Collection dataset: gồm hàng nghìn tin nhắn gán nhãn `ham` hoặc `spam`).
  - Chuẩn hóa văn bản: Chuyển về chữ thường, loại bỏ dấu câu, tách từ theo khoảng trắng, loại bỏ các từ dừng (Stop Words: "the", "is", "at"...).
  - Tách tập dữ liệu thành 2 tập độc lập: Tập Huấn luyện (Train Set: 80%) và Tập Kiểm thử (Test Set: 20%).
- **Tiêu chí nghiệm thu:** Xây dựng thành công từ điển $|V|$, đếm chính xác tần số xuất hiện của từng từ cho hai nhãn `ham` và `spam`.

### Mốc M2: Huấn Luyện Mô Hình Naive Bayes & Dự Đoán Trên Không Gian Log
- **Mục tiêu:**
  - Tính toán xác suất tiên nghiệm (Prior): $\log P(\text{Spam})$ và $\log P(\text{Ham})$.
  - Lưu bảng xác suất có điều kiện $\log P(w \mid \text{Class})$ cho toàn bộ từ vựng với Laplace Smoothing.
  - Cài đặt hàm dự đoán:
    ```cpp
    std::string predict(const std::string& messageText);
    ```
- **Tiêu chí nghiệm thu:** Phân loại thành công các câu kiểm thử cơ bản (ví dụ: "Free lottery tickets win cash now" được dự đoán chính xác là `spam`).

### Mốc M3: Đánh Giá Định Lượng Mô Hình & Confusion Matrix
- **Mục tiêu:** Chạy dự đoán trên toàn bộ Tập Kiểm thử (Test Set) gồm hơn $1.000$ tin nhắn chưa từng học, tự động tính toán:
  - $\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}$
  - $\text{Precision} = \frac{TP}{TP + FP}$
  - $\text{Recall} = \frac{TP}{TP + FN}$
  - $F_1\text{-Score} = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}$
- **Tiêu chí nghiệm thu:** Điểm $F_1$-Score đạt tối thiểu $\ge 0.92$ trên tập SMS Spam Dataset.

### Mốc M4: Mô Phỏng Monte Carlo Cross-Validation & Kiểm Toán Bộ Nhớ
- **Mục tiêu:**
  - Thực hiện $1.000$ vòng lặp Monte Carlo: Ở mỗi vòng lặp, xáo trộn ngẫu nhiên dữ liệu, chia lại tập train/test 80/20, huấn luyện và ghi nhận điểm số $F_1$.
  - Tính toán kỳ vọng toán học $\mu(F_1)$ và độ lệch chuẩn $\sigma(F_1)$, xuất biểu đồ phân phối tần số dạng text.
- **Kiểm toán bộ nhớ:** Chạy toàn bộ quá trình huấn luyện và mô phỏng dưới AddressSanitizer bảo đảm 0 bytes rò rỉ bộ nhớ.

---

## 4. Tiêu Chí Nghiệm Thu Định Lượng

1. **Hiệu năng phân loại:**
   - Điểm $F_1$-Score trên nhãn `spam`: **$\ge 0.92$** (vượt trội yêu cầu cơ bản).
   - Tốc độ suy luận (Inference Latency): **$< 0.5$ mili-giây** cho mỗi tin nhắn văn bản.
2. **Kỷ luật toán học:**
   - 100% các phép tính xác suất được thực hiện trên miền Log, không để xảy ra bất kỳ lỗi `NaN` hoặc `-inf` nào.
3. **An toàn bộ nhớ:** Biên dịch với `-fsanitize=address,undefined -Wall -Wextra`, kết quả 0 lỗi.
