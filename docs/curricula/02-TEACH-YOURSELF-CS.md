# Hướng Dẫn Giáo Trình: TeachYourselfCS — 9 Môn Cốt Lõi Của Nhà Khoa Học Máy Tính

> **Tài liệu học tập ngoại tuyến (Offline Curriculum Guide)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — Trường Đại học Khoa học Tự nhiên (HCMUS)  
> **Nguồn tham chiếu gốc:** [teachyourselfcs.com](https://teachyourselfcs.com/)  
> **Tác giả:** Oz Nova & Myles Byrne (Bradfield School of Computer Science)

---

## 1. Triết Lý Cốt Lõi: Bản Chất Khác Biệt Giữa Kỹ Sư và "Thợ Code"

Trong ngành công nghệ, có hai kiểu kỹ sư phần mềm:
1. **Người chỉ biết sử dụng công cụ (Framework Chasers):** Họ thuộc lòng cú pháp của framework mới nhất (React, Spring Boot, FastAPI, Flutter), nhưng khi gặp lỗi tràn bộ nhớ, tranh chấp luồng (race condition), cơ sở dữ liệu bị thắt cổ chai hoặc hệ thống phân tán bị mất tính nhất quán, họ hoàn toàn bất lực vì không hiểu bản chất bên dưới.
2. **Nhà Khoa học Máy tính thực thụ (Computer Scientists):** Họ hiểu cách CPU thực thi lệnh, cách hệ điều hành lập lịch tiến trình, cách dữ liệu di chuyển qua các tầng mạng và cách thuật toán cân bằng giữa thời gian và không gian. Khi một công nghệ mới xuất hiện, họ chỉ mất vài ngày để làm chủ vì các công nghệ mới thực chất chỉ là lớp vỏ bọc của các nguyên lý máy tính kinh điển.

**TeachYourselfCS** được viết ra nhằm mục đích duy nhất: **Đưa một lập trình viên tự học hoặc sinh viên đại học tiếp cận 9 môn học nền tảng tinh hoa nhất của Khoa học Máy tính.**

---

## 2. 9 Môn Học Nền Tảng Cốt Lõi

TeachYourselfCS lựa chọn đúng **1 cuốn sách kinh điển** và **1 khóa học xuất sắc nhất** cho từng môn học:

```
┌──────────────────────────────────────────────────────────────────┐
│                   TEACH YOURSELF CS: 9 PILLARS                   │
├───────────────────────────────┬──────────────────────────────────┤
│ 1. Programming                │ SICP / Composing Programs        │
│ 2. Computer Architecture      │ Nand2Tetris / CS:APP             │
│ 3. Algorithms & Data Structs  │ The Algorithm Design Manual / CLRS│
│ 4. Math for Computer Science  │ MIT 6.042J (Lehman, Leighton)    │
│ 5. Operating Systems          │ OSTEP (Arpaci-Dusseau)           │
│ 6. Computer Networking        │ Kurose & Ross / Peter Dordal     │
│ 7. Databases                  │ Ramakrishnan / Database Internals│
│ 8. Languages & Compilers      │ Crafting Interpreters (Nystrom)  │
│ 9. Distributed Systems        │ Designing Data-Intensive Apps    │
└───────────────────────────────┴──────────────────────────────────┘
```

### Chi tiết từng môn và tài liệu tương ứng:

### 1. Programming (Lập trình bản chất)
- **Tài liệu khuyên đọc:** *Structure and Interpretation of Computer Programs (SICP)* của MIT (Abelson & Sussman) hoặc *Composing Programs* (UC Berkeley).
- **Trọng tâm:** Trừu tượng hóa dữ liệu (Data Abstraction), trừu tượng hóa thủ tục (Procedural Abstraction), hàm bậc cao (Higher-Order Functions), mô hình thông dịch và trạng thái có thể biến đổi (Mutable State).
- **Tư duy cần rèn:** Ngôn ngữ chỉ là công cụ thể hiện tư duy toán học và cấu trúc của bài toán.

### 2. Computer Architecture (Kiến trúc máy tính)
- **Tài liệu khuyên đọc:** *The Elements of Computing Systems (Nand to Tetris)* của Noam Nisan & Shimon Schocken; nâng cao dùng *Computer Systems: A Programmer's Perspective (CS:APP)* của Bryant & O'Hallaron.
- **Trọng tâm:** Cổng logic (AND, OR, NOT, XOR), mạch cộng ALU, thanh ghi, bộ đếm chương trình PC, tập lệnh hợp ngữ (Assembly / Hack machine language), Stack, Heap, và cơ chế chuyển đổi từ mã nguồn cấp cao sang mã máy.

### 3. Algorithms & Data Structures (Cấu trúc dữ liệu & Thuật toán)
- **Tài liệu khuyên đọc:** *The Algorithm Design Manual* của Steven Skiena hoặc *Introduction to Algorithms (CLRS)*; tài liệu luyện tập nhanh: *Competitive Programmer’s Handbook* (Antti Laaksonen).
- **Trọng tâm:** Không chỉ học thuộc mã nguồn, mà phải học **Kỹ thuật thiết kế thuật toán**: Chia để trị, Tham lam, Quy hoạch động, Duyệt đồ thị, Tìm kiếm nhị phân trên không gian nghiệm.
- **Quy tắc vàng:** Luôn phát biểu được **Bất biến vòng lặp (Loop Invariant)** và chứng minh tính đúng trước khi tối ưu tốc độ.

### 4. Math for Computer Science (Toán học cho Tin học)
- **Tài liệu khuyên đọc:** *Mathematics for Computer Science* (MIT 6.042J - Albert R. Meyer & Eric Lehman).
- **Trọng tâm:** Chứng minh quy nạp, logic vị từ, lý thuyết số (đồng dư thức, RSA), đồ thị học, đếm tổ hợp và xác suất có điều kiện.

### 5. Operating Systems (Hệ điều hành)
- **Tài liệu khuyên đọc:** *Operating Systems: Three Easy Pieces (OSTEP)* của Remzi & Andrea Arpaci-Dusseau (bản sách web miễn phí).
- **Trọng tâm:** Ba trụ cột:
  1. *Virtualization (Ảo hóa):* CPU ảo hóa qua tiến trình, bộ nhớ ảo qua phân trang (Paging) và TLB.
  2. *Concurrency (Đồng thời):* Luồng (Threads), tranh chấp dữ liệu (Race Conditions), Khóa (Mutex), Biến điều kiện (Condition Variables), Deadlock.
  3. *Persistence (Lưu trữ bền vững):* I/O thiết bị, hệ thống tệp tin (File Systems), tính toàn vẹn (FSCK & Journaling).

### 6. Computer Networking (Mạng máy tính)
- **Tài liệu khuyên đọc:** *Computer Networking: A Top-Down Approach* (Kurose & Ross) hoặc sách miễn phí *An Introduction to Computer Networks* (Peter L. Dordal).
- **Trọng tâm:** Mô hình phân tầng (Application, Transport, Network, Link). Bản chất của giao thức TCP: Bắt tay 3 bước, kiểm soát luồng (Flow Control), kiểm soát nghẽn (Congestion Control). Lập trình Socket thực tế và xử lý Framing.

### 7. Databases (Cơ sở dữ liệu)
- **Tài liệu khuyên đọc:** *Database Management Systems* (Ramakrishnan & Gehrke) và bài báo kinh điển *Architecture of a Database System* (Hellerstein, Stonebraker, Hamilton).
- **Trọng tâm:** Mô hình quan hệ, chỉ mục cây B-Tree / B+Tree, bộ tối ưu hóa truy vấn (Query Optimizer), quản lý giao dịch (Transactions), 4 tính chất ACID và các mức độ cô lập (Isolation Levels).

### 8. Languages & Compilers (Ngôn ngữ & Trình biên dịch)
- **Tài liệu khuyên đọc:** *Crafting Interpreters* của Robert Nystrom (đọc miễn phí tại craftinginterpreters.com).
- **Trọng tâm:** Bộ phân tích từ vựng (Scanning/Lexing), phân tích cú pháp (Parsing), Cây cú pháp trừu tượng (AST), Máy ảo thực thi mã bytecode (Stack-based Virtual Machine) và Bộ gom rác (Garbage Collector).

### 9. Distributed Systems (Hệ thống phân tán)
- **Tài liệu khuyên đọc:** *Designing Data-Intensive Applications (DDIA)* của Martin Kleppmann; khóa học MIT 6.824 / 6.5840.
- **Trọng tâm:** Định lý CAP, đồng thuận phân tán (Raft, Paxos), sao chép dữ liệu (Replication: Leader-Follower), phân vùng (Partitioning), đồng hồ logic (Vector Clocks).

---

## 3. Thứ Tự Ưu Tiên Cho Sinh Viên HCMUS Năm 2

Sinh viên Năm 2 HCMUS không thể học cả 9 môn cùng lúc. Dưới đây là chiến lược phân bổ ưu tiên:

```
┌──────────────────────────────────────────────────────────────────┐
│ GIAI ĐOẠN 1 (ƯU TIÊN TUYỆT ĐỐI CHO XÉT TUYỂN CHUYÊN NGÀNH KHMT)  │
│ 1. Algorithms & Data Structures (Phục vụ CS202)                  │
│ 2. Math for Computer Science (Phục vụ Toán rời rạc & Xác suất)   │
│ 3. Operating Systems (Phục vụ CS211 Kiến trúc máy tính & HĐH)    │
│ 4. Programming in depth (Làm chủ bộ nhớ C++ & OOP)               │
└─────────────────────────────────┬────────────────────────────────┘
                                  ▼
┌──────────────────────────────────────────────────────────────────┐
│ GIAI ĐOẠN 2 (NĂM 3 — XÂY DỰNG NĂNG LỰC KỸ SƯ HỆ THỐNG / AI)      │
│ 5. Computer Networking                                           │
│ 6. Databases                                                     │
│ 7. Computer Architecture                                         │
└─────────────────────────────────┬────────────────────────────────┘
                                  ▼
┌──────────────────────────────────────────────────────────────────┐
│ GIAI ĐOẠN 3 (NĂM 4 — CẤP ĐỘ CAO HỌC & ĐỒ ÁN TỐT NGHIỆP)          │
│ 8. Languages & Compilers                                         │
│ 9. Distributed Systems                                           │
└──────────────────────────────────────────────────────────────────┘
```

---

## 4. Phương Pháp Đọc Sách & Làm Bài Tập Của TeachYourselfCS

1. **Đọc chậm, suy ngẫm kỹ (Read deliberately):** Không lật trang nếu chưa hiểu một đoạn văn hay sơ đồ kỹ thuật.
2. **Tự giải bài tập cuối chương (Do the exercises):** Giá trị của cuốn sách nằm 70% ở các bài tập thực hành. Đọc OSTEP mà không viết mã C mô phỏng luồng và mutex thì xem như chưa học hệ điều hành.
3. **Loại bỏ cám dỗ "Copy-Paste":** Khi gõ mã nguồn, gõ từng ký tự và tự giải thích cho chính mình xem dòng mã đó cấp phát vùng nhớ ở đâu và giải phóng khi nào.
