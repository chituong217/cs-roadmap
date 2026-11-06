# Hướng Dẫn Tư Duy Bản Chất: Cơ Sở Dữ Liệu Quan Hệ, Chỉ Mục B-Tree & Giao Dịch ACID

> **Tài liệu học tập ngoại tuyến (Offline Conceptual Guide — 09)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — HCMUS  
> **Trọng tâm:** Chuẩn hóa dữ liệu 1NF–3NF, Cơ chế chỉ mục B+Tree và 4 Tính chất ACID

---

## 1. Chuẩn Hóa Cơ Sở Dữ Liệu: Vì Sao Cần 1NF, 2NF và 3NF?

Khi thiết kế cơ sở dữ liệu cho một hệ thống phần mềm, một thiết kế cẩu thả sẽ dẫn đến **3 dị thường dữ liệu (Data Anomalies)** tai hại:
1. **Dị thường thêm (Insertion Anomaly):** Không thể thêm một khoa mới nếu chưa có sinh viên nào đăng ký học tại khoa đó.
2. **Dị thường sửa (Update Anomaly):** Tên của một giảng viên bị lưu lặp lại ở 500 dòng môn học; nếu giảng viên đổi tên mà chỉ sửa 499 dòng, dữ liệu bị mâu thuẫn nội tại!
3. **Dị thường xóa (Deletion Anomaly):** Xóa sinh viên duy nhất của một lớp học khiến toàn bộ thông tin về lớp học đó cũng bị biến mất theo!

### 3 Dạng Chuẩn Cốt Lõi:
- **Chuẩn 1 (1NF - First Normal Form):** Tính nguyên tử (Atomic). Mỗi ô trong bảng chỉ chứa đúng một giá trị đơn lẻ, không được lưu mảng, danh sách hoặc chuỗi phân cách dấu phẩy.
- **Chuẩn 2 (2NF - Second Normal Form):** Đạt 1NF + Mọi thuộc tính không khóa phải phụ thuộc hàm **đầy đủ** vào toàn bộ khóa chính (Loại bỏ sự phụ thuộc một phần khi khóa chính là khóa kết hợp).
- **Chuẩn 3 (3NF - Third Normal Form):** Đạt 2NF + Không có **phụ thuộc bắc cầu** (Thuộc tính không khóa không được phụ thuộc vào một thuộc tính không khóa khác: $X \to Y \to Z$).

---

## 2. Bản Chất Chỉ Mục B-Tree & B+Tree

Tại sao các hệ quản trị cơ sở dữ liệu quan hệ (PostgreSQL, MySQL, SQLite) không dùng Bảng băm (Hash Index) hay Cây nhị phân tìm kiếm (Red-Black Tree) làm chỉ mục mặc định?

```
┌────────────────────────────────────────────────────────────────────────┐
│                   SO SÁNH CÁC CẤU TRÚC CHỈ MỤC CSDL                    │
├─────────────────┬──────────────────────────┬───────────────────────────┤
│ Cấu trúc        │ Tìm kiếm chính xác (=)   │ Truy vấn khoảng (BETWEEN) │
├─────────────────┼──────────────────────────┼───────────────────────────┤
│ Hash Index      │ Siêu nhanh O(1)          │ HOÀN TOÀN BẤT LỰC!        │
│                 │                          │ (Phải quét toàn bộ bảng)  │
├─────────────────┼──────────────────────────┼───────────────────────────┤
│ Red-Black Tree  │ O(log_2 N)               │ Cần duyệt cây (In-order)  │
│                 │ (Cây quá cao, tốn I/O)   │ Nhiều bước nhảy ngẫu nhiên│
├─────────────────┼──────────────────────────┼───────────────────────────┤
│ B+Tree          │ O(log_B N)               │ Cực kỳ nhanh!             │
│ (Chuẩn mực)     │ (Cây lùn, tối ưu ổ đĩa)  │ (Quét danh sách liên kết) │
└─────────────────┴──────────────────────────┴───────────────────────────┘
```

### Kiến Trúc Của Cây B+Tree:
1. **Nút trung gian (Internal Nodes):** Chỉ chứa các khóa định tuyến (Routing Keys) và con trỏ trỏ xuống trang con. Bậc phân nhánh $B$ rất lớn (thường hàng trăm phần tử trên mỗi trang đĩa 4KB/8KB). Nhờ đó, cây có chiều cao cực kỳ thấp (chỉ 3–4 tầng cho hàng triệu dòng dữ liệu), giảm tối đa số lần đọc ổ đĩa vật lý (Disk I/O).
2. **Nút lá (Leaf Nodes):** Chứa dữ liệu thực tế (hoặc con trỏ trỏ tới dòng dữ liệu).
3. **Danh sách liên kết đôi giữa các lá:** Toàn bộ các nút lá được liên kết với nhau theo thứ tự tăng dần. Khi thực thi câu lệnh truy vấn khoảng (`WHERE age BETWEEN 18 AND 25`), hệ thống chỉ cần tìm vị trí bắt đầu `18` bằng tìm kiếm nhị phân trên cây, sau đó **chạy thẳng theo con trỏ `next` của danh sách lá** để lấy kết quả mà không cần leo ngược lên cây!

### Quy Tắc Tiền Tố Bên Trái Nhất (Leftmost Prefix Rule):
Khi tạo chỉ mục kết hợp trên 3 cột `INDEX(A, B, C)`:
- Hợp lệ dùng chỉ mục: `WHERE A = 1`, `WHERE A = 1 AND B = 2`, `WHERE A = 1 AND B = 2 AND C = 3`.
- **KHÔNG THỂ dùng chỉ mục:** `WHERE B = 2` hoặc `WHERE C = 3` (Vì dữ liệu được sắp xếp theo $A$ trước, sau đó mới đến $B$, rồi mới đến $C$).

---

## 3. Giao Dịch (Transactions) & 4 Tính Chất ACID

Một **Giao dịch (Transaction)** là một chuỗi các thao tác đọc/ghi cơ sở dữ liệu được gom lại thành một đơn vị công việc logic duy nhất.

```
┌────────────────────────────────────────────────────────┐
│                   4 TÍNH CHẤT A.C.I.D                  │
├───┬────────────────────────────────────────────────────┤
│ A │ Atomicity (Tính nguyên tử — "Được ăn cả, ngã về 0")│
│ C │ Consistency (Tính nhất quán — Bảo toàn ràng buộc)  │
│ I │ Isolation (Tính cô lập — Các giao dịch độc lập)    │
│ D │ Durability (Tính bền vững — Sống sót sau sự cố)   │
└───┴────────────────────────────────────────────────────┘
```

### 3.1. A — Atomicity (Tính Nguyên Tử)
- Toàn bộ các câu lệnh trong giao dịch phải thành công 100%. Nếu có bất kỳ lỗi nào xảy ra ở giữa chừng, **toàn bộ các thay đổi phải được hoàn tác (Rollback)** về trạng thái ban đầu như thể chưa từng xảy ra.
- **Cơ chế hiện thực:** Hệ quản trị CSDL ghi chép nhật ký ghi trước (**Write-Ahead Logging - WAL / Undo Log**). Khi gặp lỗi, hệ thống đọc nhật ký lùi để khôi phục lại dữ liệu cũ.

### 3.2. C — Consistency (Tính Nhất Quán)
- Dữ liệu trước và sau giao dịch phải luôn thỏa mãn toàn bộ các quy tắc toàn vẹn, ràng buộc duy nhất (Unique), khóa ngoại (Foreign Key) và quy tắc nghiệp vụ (ví dụ: Tổng số tiền trong hệ thống ngân hàng không thể tự nhiên sinh ra hay mất đi).

### 3.3. I — Isolation (Tính Cô Lập)
- Nhiều giao dịch chạy đồng thời không được nhìn thấy dữ liệu dang dở chưa hoàn tất của nhau.

### 3.4. D — Durability (Tính Bền Vững)
- Khi giao dịch đã được xác nhận thành công (`COMMIT`), các thay đổi đó **bảo đảm không bao giờ bị mất**, ngay cả khi máy chủ bị mất điện đột ngột hoặc hệ điều hành bị sập ngay 1 mili-giây sau đó.
- **Cơ chế:** Ghi nhận lệnh vào Redo Log và ép đẩy dữ liệu xuống ổ đĩa cứng bằng hàm hệ thống `fsync()`.

---

## 4. 4 Mức Độ Cô Lập Giao Dịch (Isolation Levels) & Hiện Tượng Đọc Bất Thường

Khi các giao dịch chạy song song, việc cô lập tuyệt đối (Serializable) đòi hỏi khóa (Locking) nặng nề, làm giảm hiệu năng hệ thống. Chuẩn SQL định nghĩa 4 mức cô lập đánh đổi giữa **tính an toàn dữ liệu** và **tốc độ xử lý**:

```
┌────────────────────────────────────────────────────────────────────────┐
│               BẢNG MỨC ĐỘ CÔ LẬP & CÁC HIỆN TƯỢNG ĐỌC BẤT THƯỜNG       │
├───────────────────┬──────────────┬──────────────────┬──────────────────┤
│ Mức Cô Lập        │ Đọc bẩn      │ Đọc không lặp lại│ Đọc bóng ma      │
│ (Isolation Level) │ (Dirty Read) │(Non-repeatable)  │ (Phantom Read)   │
├───────────────────┼──────────────┼──────────────────┼──────────────────┤
│ Read Uncommitted  │ Bị ảnh hưởng │ Bị ảnh hưởng     │ Bị ảnh hưởng     │
│ Read Committed    │ An toàn      │ Bị ảnh hưởng     │ Bị ảnh hưởng     │
│ Repeatable Read   │ An toàn      │ An toàn          │ Bị ảnh hưởng*    │
│ Serializable      │ An toàn      │ An toàn          │ An toàn          │
└───────────────────┴──────────────┴──────────────────┴──────────────────┘
```
*\*Lưu ý: Các hệ thống CSDL hiện đại như PostgreSQL sử dụng cơ chế đa phiên bản (MVCC), giúp mức `Repeatable Read` ngăn chặn được hầu hết các hiện tượng Đọc bóng ma mà không cần khóa bảng.*

### Định Nghĩa 3 Hiện Tượng Đọc Bất Thường:
1. **Đọc bẩn (Dirty Read):** Giao dịch A đọc một dòng dữ liệu đang bị Giao dịch B sửa nhưng B **chưa commit**. Sau đó B bị lỗi và rollback $\implies$ Dữ liệu A vừa đọc là dữ liệu "rác" chưa từng tồn tại!
2. **Đọc không lặp lại (Non-repeatable Read):** Giao dịch A đọc dòng X có giá trị là 10. Giao dịch B sửa dòng X thành 20 và commit. Giao dịch A đọc lại dòng X và thấy giá trị biến thành 20!
3. **Đọc bóng ma (Phantom Read):** Giao dịch A truy vấn danh sách sinh viên có điểm $\ge 8$ (tìm thấy 5 người). Giao dịch B thêm một sinh viên mới có điểm 9 và commit. Giao dịch A truy vấn lại khoảng đó và thấy xuất hiện thêm 1 "bóng ma" sinh viên mới (thành 6 người)!
