# REVIEW PACKET — BÀN GIAO CHO CODEX REVIEW M3 (HOÀN THIỆN KHỐI I & KHỐI II + CHỈNH SỬA TOÁN CỤC BỘ M2)

## 1. Mốc (Milestone) và Trạng thái
- **Mốc hiện tại:**
  1. Đã thực hiện chỉnh sửa toán cục bộ ở M2 cho biểu thức cận trên của $R(n)$ tại [`src/syllabus/courses/discrete-math-part2.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/discrete-math-part2.mjs#L173) đúng như quyết định [`CODEX-M2-GATE-DECISION.md`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/docs/syllabus-v3/CODEX-M2-GATE-DECISION.md) và sinh lại [`docs/syllabus-v3/M2-SAMPLE-SYLLABUS.md`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/docs/syllabus-v3/M2-SAMPLE-SYLLABUS.md).
  2. Đã hoàn tất **Mốc M3 — Hoàn thiện nền nhập môn và toán**: biên soạn toàn văn tất cả **12 môn còn thiếu của Khối I và Khối II**, nâng tổng số môn hoàn chỉnh của Khối I (`CS-01`..`CS-06`) và Khối II (`CS-07`..`CS-14`) lên **`14/14` môn** (cùng chương mẫu `os-virtual-memory` của `CS-25` từ M2, tổng cộng `15` môn trong `AUTHORED_COURSES`, `71` chương, `225` tiểu mục = `220 core + 5 extension`, `75,926` từ văn xuôi học thuật).
- **Trạng thái cổng kiểm định:** **Trình Codex review M3 trước khi chuyển sang M4 (chưa tự nhận đã được duyệt M3, chưa viết M4–M5, chưa xuất bản GitHub Pages).**

---

## 2. Repository tuyệt đối / branch / base & Bảo toàn Backup / Legacy
- **Đường dẫn Repository tuyệt đối:** `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy`
- **Branch đang làm việc:** `feature/cs-syllabus-from-zero`
- **Base commit (`origin/main` & live GitHub Pages):** `ecbece0e91597ca2790eff51d7ff7f7b8f4a3e2b`
- **Snapshot sao lưu v2.1.0 (giữ nguyên tuyệt đối, không ghi đè):**
  - Đường dẫn: `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\docs\backups\ROADMAP-BEFORE-SYLLABUS-REWRITE.md`
  - Kích thước: `896,954 bytes` (`9,393 dòng`)
  - SHA-256: `78094dc6ef2f2dbc0a11caa1e04e0f89eb2ae3138a71ea1d5497c79361cb8077`
- **Bảo toàn Legacy & Tiến độ riêng:** Giữ nguyên `src/curriculum/`, `src/progress.mjs`, `src/main.jsx` và namespace tiến độ v3 độc lập (`cs-syllabus.progress.v3` trong `src/syllabus-progress.mjs`).

---

## 3. Xác Nhận Chỉnh Sửa Toán Cục Bộ Ở M2 Theo `CODEX-M2-GATE-DECISION.md`

| Hạng mục | Yêu cầu trong `CODEX-M2-GATE-DECISION.md` | Đã thực hiện tại tệp gốc & Preview | Kiểm chứng tự động |
| :--- | :--- | :--- | :--- |
| **Biểu thức cận trên của $R(n) = \ln(n!) - (n\ln n - n)$** | Từ $n\ln n - n + 1 \le \ln(n!) \le (n+1)\ln(n+1) - n$, sửa biểu thức cận trên của $R(n)$ thành:<br/>$$1 \le R(n) \le (n+1)\ln(n+1) - n\ln n = \ln n + (n+1)\ln(1+1/n) = O(\ln n)$$ | Đã sửa tại [`src/syllabus/courses/discrete-math-part2.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/discrete-math-part2.mjs#L173) và sinh lại [`docs/syllabus-v3/M2-SAMPLE-SYLLABUS.md`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/docs/syllabus-v3/M2-SAMPLE-SYLLABUS.md) cùng [`docs/syllabus-v3/M3-FOUNDATIONS-AND-MATH-SYLLABUS.md`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/docs/syllabus-v3/M3-FOUNDATIONS-AND-MATH-SYLLABUS.md) & [`public/SYLLABUS.md`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/public/SYLLABUS.md). | Test `Codex Re-Review Finding 2 & M2 Gate Local Fix` trong [`tests/syllabus-v3.test.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/tests/syllabus-v3.test.mjs) kiểm tra trực tiếp biểu thức rút gọn trên: **PASS**. |

---

## 4. Danh Sách Môn Đã Viết Toàn Văn Ở M3 (`14/14` Môn Khối I–II + `1` Chương Mẫu M2)

Toàn bộ `14/14` môn thuộc Khối I (`block-1`) và Khối II (`block-2`) đã được biên soạn toàn văn theo cấu trúc `Course → Chapter → Topic` bằng đoạn văn mô tả học thuật (mỗi tiểu mục có 3 đoạn văn xuôi giải thích đối tượng/khái niệm/cơ chế/phương pháp, điều kiện áp dụng/giới hạn, tiên quyết và nguồn cụ thể):

| Mã môn | ID môn (`course.id`) | Tên môn học | Khối | Tệp nguồn (`src/syllabus/courses/`) | Chương | Tiểu mục (`core` + `ext`) | Số từ | Nguồn đã đối chiếu (`SOURCE-REGISTER.json`) |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| **`CS-01`** | `computing-environment` | Môi trường tính toán, hệ tệp và dòng lệnh | Khối I | [`computing-environment.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/computing-environment.mjs) | 4 | 13 (`13 core`) | 3,651 | `mit-missing-semester` (Lectures 1–2, 4), `learncpp` (Ch. 0), `harvard-cs50x` (Week 1 CLI), `ostep-v110` (Ch. 2, 39) |
| **`CS-02`** | `math-bridge` | Toán nền và biểu diễn số cho Khoa học Máy tính | Khối I | [`math-bridge.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/math-bridge.mjs) | 6 | 19 (`19 core`) | 5,128 | `openstax-prealgebra-2e` (Ch. 1–5, 10), `openstax-precalculus-2e` (Ch. 1, 2.4, 4, 5, 7, 8.5), `mit-6042j-2015` (Ch. 13.1), `harvard-cs50x` (Weeks 0–1) |
| **`CS-03`** | `computational-thinking` | Tư duy tính toán và mô hình bài toán | Khối I | [`computational-thinking.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/computational-thinking.mjs) | 4 | 12 (`12 core`) | 3,811 | `harvard-cs50x` (Weeks 0, 3), `composing-programs` (Ch. 1.1–1.5), `erickson-algorithms` (Ch. 0), `learncpp` (Ch. 2–3) |
| **`CS-04`** | `intro-programming` | Lập trình nhập môn *(từ M2)* | Khối I | [`intro-programming.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/intro-programming.mjs) | 6 | 24 (`22 core + 2 ext`) | 4,898 | `learncpp` (Ch. 0–8, 13, 16, 28), `harvard-cs50x` (Weeks 1–4) |
| **`CS-05`** | `program-design-debugging` | Thiết kế chương trình, kiểm thử và gỡ lỗi | Khối I | [`program-design-debugging.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/program-design-debugging.mjs) | 4 | 12 (`12 core`) | 3,761 | `learncpp` (Ch. 2, 3, 9), `mit-missing-semester` (Lecture 6), `composing-programs` (Ch. 1.4–1.5), `swe-at-google` (Ch. 11–12) |
| **`CS-06`** | `git-dev-tools` | Quản lý phiên bản với Git và công cụ phát triển | Khối I | [`git-dev-tools.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/git-dev-tools.mjs) | 4 | 12 (`12 core`) | 4,029 | `pro-git-2e` (Ch. 1–3, 6, 7, 10), `mit-missing-semester` (Lectures 6, 8), `learncpp` (Ch. 0, 2) |
| **`CS-07`** | `cpp-memory-model` | C++ cốt lõi và mô hình bộ nhớ | Khối II | [`cpp-memory-model.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/cpp-memory-model.mjs) | 4 | 12 (`12 core`) | 4,276 | `learncpp` (Ch. 7, 12, 17, 19, 22), `dive-into-systems` (Ch. 2, 4), `mit-missing-semester` (Lecture 8) |
| **`CS-08`** | `object-oriented-programming` | Lập trình hướng đối tượng và thiết kế lớp | Khối II | [`object-oriented-programming.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/object-oriented-programming.mjs) | 4 | 12 (`12 core`) | 4,090 | `learncpp` (Ch. 14, 15, 20, 21, 23–27), `swe-at-google` (Ch. 1, 8, 12), `composing-programs` (Ch. 2.5–2.7) |
| **`CS-09`** | `discrete-math` | Toán rời rạc và lập luận cho CS *(từ M2 + sửa $R(n)$)* | Khối II | [`discrete-math.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/discrete-math.mjs) | 10 | 34 (`33 core + 1 ext`) | 11,895 | `mit-6042j-2015` (Ch. 1–16, 21), `dmoi-3e` (Ch. 0–4) |
| **`CS-10`** | `linear-algebra` | Đại số tuyến tính cho Khoa học Máy tính | Khối II | [`linear-algebra.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/linear-algebra.mjs) | 6 | 18 (`18 core`) | 6,845 | `mit-1806sc` (Units I–III: Lectures 1–33) |
| **`CS-11`** | `single-variable-calculus` | Giải tích một biến | Khối II | [`single-variable-calculus.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/single-variable-calculus.mjs) | 6 | 16 (`15 core + 1 ext`) | 5,715 | `mit-1801sc` (Units 1–5: Sessions 1–101) |
| **`CS-12`** | `multivariable-calculus-optimization` | Giải tích nhiều biến và tối ưu hóa nền tảng | Khối II | [`multivariable-calculus-optimization.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/multivariable-calculus-optimization.mjs) | 4 | 12 (`11 core + 1 ext`) | 4,819 | `mit-1802sc` (Parts A–D), `d2l-ai` (Ch. 2.4 & Ch. 11) |
| **`CS-13`** | `probability` | Lý thuyết xác suất cho Khoa học Máy tính | Khối II | [`probability.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/probability.mjs) | 4 | 12 (`12 core`) | 5,233 | `mit-1805-2022` (Unit 1: Classes 1–9), `mit-6042j-2015` (Ch. 16–20) |
| **`CS-14`** | `statistics-inference` | Thống kê suy luận và phân tích dữ liệu thực nghiệm | Khối II | [`statistics-inference.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/statistics-inference.mjs) | 4 | 11 (`11 core`) | 4,591 | `mit-1805-2022` (Units 2–4: Classes 10–24) |
| **`CS-25`*** | `operating-systems` *(mẫu M2)* | Hệ điều hành *(Chương mẫu: Bộ nhớ ảo và Phân trang)* | Khối IV | [`operating-systems-vm-sample.mjs`](file:///C:/Users/XAOXIN/OneDrive/Tài%20liệu/ChatGPT/LXH/cs-roadmap-deploy/src/syllabus/courses/operating-systems-vm-sample.mjs) | 1 | 6 (`6 core`) | 3,184 | `ostep-v110` (Ch. 13–23), `mit-xv6-2025` (Ch. 3) |
| **Tổng cộng** | **`15` môn trong `AUTHORED_COURSES`** | **`14/14` môn Khối I–II hoàn chỉnh + `1` mẫu M2** | — | — | **`71`** | **`225` (`220 core + 5 ext`)** | **`75,926`** | **`0` lỗi schema / source / DAG** |

### Năm tiểu mục `extension` trong `AUTHORED_COURSES` hiện tại:
1. `ip-exec-translation-linking-extension` (`CS-04` Chương 1 — Bốn giai đoạn dịch chi tiết và ODR)
2. `ip-seq-string-view-extension` (`CS-04` Chương 5 — `std::string_view` và điều kiện thời gian sống)
3. `dm-spa-harmonic-integral-stirling` (`CS-09` Chương 8 — Cận tích phân của tổng điều hòa và xấp xỉ Stirling, yêu cầu tiên quyết `single-variable-calculus`)
4. `svc-tii-special-substitutions-partial-fractions` (`CS-11` Chương 5 — Các phép thế đặc biệt và phân tích phân thức hữu tỉ)
5. `mco-mi-vector-fields-divergence-stokes` (`CS-12` Chương 4 — Trường vector, thông lượng và cái nhìn tổng quan về định lý Green, Divergence, Stokes)

---

## 5. Danh Sách Môn Chưa Viết Toàn Văn (Thuộc Phạm Vi M4 & M5 — Chờ Duyệt Cổng M3)

Hiện đã có đầy đủ khung chương (`plannedChapters`), nguồn gốc và đồ thị tiên quyết trong `src/syllabus/catalog.mjs`; việc biên soạn toàn văn các môn dưới đây thuộc hai mốc tiếp theo sau khi Codex duyệt cổng M3:

1. **Mốc M4 — Thuật toán, Lý thuyết và Hệ thống (Khối III & Khối IV — `14` môn `CS-15`..`CS-28`):**
   - **Khối III (`block-3` — 7 môn):**
     - `CS-15` (`data-structures` — Cấu trúc dữ liệu cốt lõi)
     - `CS-16` (`algorithms-design-analysis` — Thiết kế và phân tích thuật toán)
     - `CS-17` (`graph-algorithms` — Thuật toán đồ thị và tối ưu trên mạng)
     - `CS-18` (`advanced-algorithms` — Thuật toán nâng cao: xấp xỉ, ngẫu nhiên và phân摊)
     - `CS-19` (`formal-languages-computability` — Ngôn ngữ hình thức, ôtômat và khả năng tính toán)
     - `CS-20` (`computational-complexity` — Lý thuyết độ phức tạp tính toán)
     - `CS-21` (`programming-languages-foundations` — Nguyên lý ngôn ngữ lập trình và hệ kiểu)
   - **Khối IV (`block-4` — 7 môn):**
     - `CS-22` (`digital-logic-computer-organization` — Logic số và tổ chức máy tính)
     - `CS-23` (`computer-architecture` — Kiến trúc máy tính, pipeline và phân cấp bộ nhớ)
     - `CS-24` (`linux-system-programming` — Lập trình hệ thống Linux và giao diện hệ điều hành)
     - `CS-25` (`operating-systems` — Hệ điều hành: còn 4 chương ngoài chương mẫu `os-virtual-memory` đã viết ở M2)
     - `CS-26` (`concurrency-synchronization` — Lập trình đồng thời, đồng bộ hóa và mô hình bộ nhớ đa luồng)
     - `CS-27` (`computer-networks` — Mạng máy tính và giao thức truyền thông)
     - `CS-28` (`distributed-systems` — Hệ phân tán, đồng thuận và chịu lỗi)
2. **Mốc M5 — Phần mềm, Dữ liệu, AI, Độ rộng và Chuyên sâu (Khối V, VI & VII — `22` môn `CS-29`..`CS-50`):**
   - **Khối V (`block-5` — 6 môn):** `CS-29` (`databases-sql-modeling`), `CS-30` (`database-systems-internals`), `CS-31` (`software-engineering-architecture`), `CS-32` (`web-application-engineering`), `CS-33` (`software-operations-performance`), `CS-34` (`computer-security-cryptography`).
   - **Khối VI (`block-6` — 8 môn):** `CS-35` (`artificial-intelligence`), `CS-36` (`machine-learning`), `CS-37` (`deep-learning`), `CS-38` (`computer-graphics-vision`), `CS-39` (`human-computer-interaction`), `CS-40` (`numerical-computing-simulation`), `CS-41` (`compilers-introduction`), `CS-42` (`cs-ethics-research-methods`).
   - **Khối VII (`block-7` — 8 môn chuyên sâu theo quyết định Q1=A linh hoạt):** `CS-43` (`spec-compilers-program-analysis`), `CS-44` (`spec-os-kernel-engineering`), `CS-45` (`spec-cloud-large-scale-data`), `CS-46` (`spec-systems-network-security`), `CS-47` (`spec-nlp-large-language-models`), `CS-48` (`spec-computer-vision-3d-graphics`), `CS-49` (`spec-scientific-computing-verification`), `CS-50` (`spec-capstone-research-project`).

---

## 6. Kết Quả Kiểm Tra Thật Và Giới Hạn Còn Lại

### 6.1. Kết quả các lệnh kiểm tra thực tế
1. `node scripts/backup-roadmap-v21.mjs`: `exit code 0`, `action: "verified_existing_snapshot"`, `ok: true`, `sha256: "78094dc6ef2f2dbc0a11caa1e04e0f89eb2ae3138a71ea1d5497c79361cb8077"`, `totalMissing: 0`.
2. `node scripts/generate-m1-docs.mjs`: `exit code 0` (`50` môn học, `42` nguồn, DAG `0` chu trình).
3. `node scripts/export-syllabus-preview.mjs`: `exit code 0` (`0` lỗi kiểm định schema/graph; xuất `docs/syllabus-v3/M2-SAMPLE-SYLLABUS.md` [`19,977` từ] và `docs/syllabus-v3/M3-FOUNDATIONS-AND-MATH-SYLLABUS.md` + `public/SYLLABUS.md` [`15` môn, `71` chương, `225` tiểu mục, `75,926` từ]).
4. `npm test`: **`124 pass / 0 fail`** trên `19 suites`.
5. `npm run build`: `exit code 0`.

### 6.2. Giới hạn còn lại (Đúng theo phạm vi M3)
- 35 môn học của Khối III–VII (`CS-15`..`CS-24`, `CS-26`..`CS-50`) và 4 chương còn lại của `CS-25` mới có khung chương (`plannedChapters`) ở cấp danh mục `catalog.mjs`, chưa viết nội dung toàn văn vì thuộc phạm vi **M4** và **M5** sau khi Codex duyệt cổng **M3**.
- Giao diện web hiển thị syllabus v3 và kết nối `src/syllabus-progress.mjs` vào React UI chưa thực hiện vì thuộc phạm vi **M7** (sau khi qua cổng review toàn bộ nội dung **M6**).
- Chưa thực hiện `git push` hoặc xuất bản lên GitHub Pages (**M9**).

---

## 7. Đường Dẫn Tuyệt Đối Tới Bản Preview Và Gói Review M3

- **Gói bàn giao Review M3 này:**
  `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\docs\syllabus-v3\REVIEW-PACKET.md`
- **Bản preview toàn văn M3 (`15` môn = `14/14` môn Khối I–II + `1` mẫu M2, `71` chương, `225` tiểu mục, `75,926` từ):**
  `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\docs\syllabus-v3\M3-FOUNDATIONS-AND-MATH-SYLLABUS.md`
  *(Đồng bộ tại `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\public\SYLLABUS.md`)*
- **Bản preview mẫu M2 sau khi sửa cận trên $R(n)$ (`17` chương, `64` tiểu mục, `19,977` từ):**
  `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\docs\syllabus-v3\M2-SAMPLE-SYLLABUS.md`
- **Báo cáo nội dung, kiểm chứng và trạng thái:**
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\docs\syllabus-v3\CONTENT-REVIEW.md`
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\docs\syllabus-v3\VERIFICATION.md`
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\docs\syllabus-v3\IMPLEMENTATION-STATE.md`
- **12 tệp môn học mới biên soạn trong M3 (`src/syllabus/courses/`):**
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\src\syllabus\courses\computing-environment.mjs`
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\src\syllabus\courses\math-bridge.mjs`
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\src\syllabus\courses\computational-thinking.mjs`
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\src\syllabus\courses\program-design-debugging.mjs`
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\src\syllabus\courses\git-dev-tools.mjs`
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\src\syllabus\courses\cpp-memory-model.mjs`
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\src\syllabus\courses\object-oriented-programming.mjs`
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\src\syllabus\courses\linear-algebra.mjs`
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\src\syllabus\courses\single-variable-calculus.mjs`
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\src\syllabus\courses\multivariable-calculus-optimization.mjs`
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\src\syllabus\courses\probability.mjs`
  - `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\src\syllabus\courses\statistics-inference.mjs`
