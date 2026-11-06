# Hướng Dẫn Giáo Trình: Open Source Society University (OSSU) Computer Science

> **Tài liệu học tập ngoại tuyến (Offline Curriculum Guide)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — Trường Đại học Khoa học Tự nhiên (HCMUS)  
> **Nguồn tham chiếu gốc:** [GitHub ossu/computer-science](https://github.com/ossu/computer-science)

---

## 1. Giới Thiệu Tổng Quan về OSSU

**Open Source Society University (OSSU)** là một chương trình đào tạo Khoa học Máy tính (Computer Science) toàn diện, mã nguồn mở, được xây dựng bởi cộng đồng kỹ sư và học giả toàn cầu. Triết lý của OSSU là: **Tương đương hoàn toàn với chương trình Cử nhân Khoa học Máy tính (BS in CS) chuẩn mực của các đại học hàng đầu thế giới (như MIT, Harvard, Berkeley, Stanford)**, nhưng được thiết kế để tự học 100% bằng tài liệu mở, chất lượng cao và hoàn toàn miễn phí.

### Đặc điểm cốt lõi của OSSU:
1. **Không học mẹo, không đi tắt:** OSSU không đào tạo theo kiểu "học cấp tốc 3 tháng để làm web", mà trang bị nền tảng toán học, tư duy tính toán và kiến trúc hệ thống sâu sắc.
2. **Tiêu chuẩn học thuật khắt khe:** Bám sát hướng dẫn chương trình chuẩn của hiệp hội máy tính thế giới **ACM/IEEE CS2013 & CS2023**.
3. **Thực hành độc lập:** Yêu cầu hoàn thành các bài tập lập trình lớn (assignments), bài kiểm tra (quizzes/exams) và đồ án tốt nghiệp kết thúc khóa (Capstone Project).

---

## 2. Cấu Trúc Khung Chương Trình OSSU

Toàn bộ chương trình OSSU được chia làm 4 giai đoạn lớn:

```
┌──────────────────────────────────────────────────────────────────┐
│                   1. INTRO TO COMPUTER SCIENCE                   │
│   (Tư duy tính toán, nhập môn lập trình hàm và cấu trúc mã)       │
└─────────────────────────────────┬────────────────────────────────┘
                                  ▼
┌──────────────────────────────────────────────────────────────────┐
│                          2. CORE CS                              │
│  ├── Core Programming (Systematic Program Design, OOP, Java)     │
│  ├── Core Math (Discrete Math, Calculus 1-3, Linear Algebra)     │
│  ├── Core Systems (Nand2Tetris, Computer Systems - CS:APP, OS)   │
│  ├── Core Theory (Algorithms & Data Structures, Computability)   │
│  └── Core Applications (Databases, Computer Networks, Security)  │
└─────────────────────────────────┬────────────────────────────────┘
                                  ▼
┌──────────────────────────────────────────────────────────────────┐
│                       3. ADVANCED CS                             │
│   (Chuyên sâu: Advanced Algorithms, Compilers, Distributed, ML)  │
└─────────────────────────────────┬────────────────────────────────┘
                                  ▼
┌──────────────────────────────────────────────────────────────────┐
│                      4. FINAL CAPSTONE PROJECT                   │
│   (Đồ án tổng hợp mã nguồn mở, giải quyết bài toán kỹ thuật lớn) │
└──────────────────────────────────────────────────────────────────┘
```

---

## 3. Ánh Xạ OSSU Vào 7 Tracks của CS Roadmap HCMUS

Để phục vụ tốt nhất cho sinh viên Năm 2 HCMUS chuẩn bị xét chuyên ngành Khoa học Máy tính (KHMT), lộ trình `cs-roadmap` đã tinh chỉnh và ánh xạ các khối kiến thức của OSSU vào 7 Tracks học tập:

| Track Roadmap | Tương đương trong OSSU | Môn học trọng tâm tại HCMUS | Mục tiêu năng lực then chốt |
|---|---|---|---|
| **Track 0: Vá Nền Tảng C++ & Tư Duy Máy Tính** | Core Programming & Intro to CS | Nhập môn Lập trình, Kỹ thuật Lập trình (CS161/CS162) | Xóa bỏ thói quen code mò, hiểu cơ chế bộ nhớ, con trỏ và cấu trúc dữ liệu cơ bản. |
| **Track 1: OOP & Thiết Kế Phần Mềm** | Core Programming (Object-Oriented Design) | Lập trình Hướng đối tượng (CS214) | Đa hình động (`vptr/vtable`), 5 nguyên lý SOLID, thiết kế module sạch, kiểm thử đơn vị. |
| **Track 2: DSA Cốt Lõi & Giải Thuật Thực Chiến** | Core Theory (Algorithms & Data Structures) | Cấu trúc dữ liệu & Giải thuật (CS202) | Phân tích Big-O, Merge Sort/Quicksort, Two Pointers, DSU, Dijkstra, DP (khung SRTBOT). |
| **Track 3: Hệ Thống Máy Tính & Mạng** | Core Systems (CS:APP, Nand2Tetris, OSTEP, Networks) | Kiến trúc Máy tính & HĐH (CS211), Mạng máy tính | Tiến trình, Luồng, Race condition, Socket TCP/IP, Message Framing, CSDL ACID. |
| **Track 4: Toán Nền Tảng Cho CS** | Core Math (Discrete Math, Linear Algebra, Probability) | Toán rời rạc (MTH252), Đại số tuyến tính, Xác suất thống kê | Bất biến vòng lặp, đếm tổ hợp, đồ thị lý thuyết, ma trận, phân phối xác suất. |
| **Track 5: Công Cụ Kỹ Sư & Tự Động Hóa** | The Missing Semester of Your CS Education | Kỹ năng nghề nghiệp, Môi trường phát triển | Git branching, Linux Bash CLI, Makefile/CMake, Docker, Sanitizers (ASan, Valgrind). |
| **Track 6: Chuyên Sâu & Đồ Án Capstone** | Advanced CS & Final Capstone Project | Môn chuyên ngành KHMT Năm 3-4, Đồ án tốt nghiệp | Xây dựng 5 đồ án thực tế: Space Invaders C++, Multi-threaded Web Server, Routing Engine... |

---

## 4. Chiến Lược Tự Học OSSU Hiệu Quả Cho Sinh Viên HCMUS

### 4.1. Không Học Tràn Lan — Học Theo Trọng Tâm Điểm Giao
Sinh viên chính quy tại HCMUS có áp lực điểm thi học kỳ và xét tuyển chuyên ngành. Do đó, **không nên học OSSU tách rời hoàn toàn với chương trình trường**, mà hãy dùng OSSU làm **nguồn bài giảng sâu hơn** để đạt điểm A+ các môn trên trường:
- Khi học môn **Cấu trúc dữ liệu và giải thuật (CS202)** trên trường: Học song song Module Core Theory của OSSU (sử dụng tài liệu MIT 6.006 hoặc Tim Roughgarden).
- Khi học môn **Kiến trúc máy tính & HĐH (CS211)**: Đọc ngay các chương liên quan trong cuốn *OSTEP (Operating Systems: Three Easy Pieces)* và *CS:APP (Computer Systems: A Programmer's Perspective)*.
- Khi học môn **Lập trình Hướng đối tượng (CS214)**: Không chỉ học cú pháp C++, hãy hoàn thành đồ án thiết kế phân lớp và áp dụng SOLID.

### 4.2. Kỷ Luật "Làm Bài Tập Thực Tế" (No Passive Watching)
Rất nhiều người học mắc bẫy "xem video thụ động": Xem hết bài giảng của MIT, Harvard trên Coursera/edX nhưng không viết một dòng mã nào, dẫn đến cảm giác ảo tưởng rằng mình đã hiểu bài.
- **Nguyên tắc vàng:** Mỗi giờ lý thuyết phải đi kèm ít nhất 2 giờ code và giải bài tập.
- Tất cả các bài tập thuật toán phải được nộp và chấm trên hệ thống kiểm thử tự động (CSES, VNOI, LeetCode).
- Các đồ án hệ thống phải biên dịch với cờ kiểm tra lỗi bộ nhớ: `-fsanitize=address,undefined -Wall -Wextra`.

---

## 5. Danh Mục Khóa Học & Nguồn Đọc Miễn Phí Cốt Lõi

1. **CS50: Introduction to Computer Science (Harvard)**: Nhập môn tư duy khoa học máy tính, phân tích C mức thấp.
2. **How to Code: Simple / Complex Data (UBC)**: Rèn luyện tư duy thiết kế hàm có hệ thống (Design Recipe), tránh viết code hỗn loạn.
3. **MIT 6.004 / Nand to Tetris**: Xây dựng máy tính từ cổng logic NAND đến hệ điều hành và trò chơi Tetris.
4. **MIT 6.006: Introduction to Algorithms**: Bộ bài giảng kinh điển về cấu trúc dữ liệu và giải thuật với khung tư duy SRTBOT.
5. **Operating Systems: Three Easy Pieces (Remzi Arpaci-Dusseau)**: Sách kinh điển về 3 mảnh ghép hệ điều hành: Ảo hóa (Virtualization), Đồng thời (Concurrency), và Lưu trữ bền vững (Persistence).

---

## 6. Lời Kết

OSSU là một tấm bản đồ hải trình dài hạn. Sinh viên HCMUS Năm 2 hãy sử dụng bản đồ này để định vị bản thân: **Bạn không chỉ đang học để thi cử, mà đang xây dựng nền tảng vững chắc của một Nhà khoa học Máy tính thực thụ.**
