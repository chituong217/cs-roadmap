# ANTIGRAVITY PROJECT MEMORY CHECKPOINT (`.antigravity-memory/STATE.md`)

**Dự án**: CS Roadmap Prototype — Lộ trình Khoa học Máy tính Cá nhân hóa HCMUS  
**Phiên bản Lộ trình**: `2.0.0` (7-Track Architecture)  
**Đường dẫn dự án**: `C:\Users\XAOXIN\Documents\Codex\cs-roadmap-prototype`  
**Nhánh Git**: `main` (Tracking `origin/main` at `https://github.com/chituong217/cs-roadmap.git`)  
**Mã hội thoại (Conversation ID)**: `cb754d4a-4fdf-451e-beaf-3adf661844c5`  
**Thời điểm cập nhật**: `2026-11-04T16:10:00Z`  
**Trạng thái Tiến trình Tổng thể**:
- **Milestone E2E**: DONE (Tầng kiểm thử E2E 4-Tier, `tests/e2e-roadmap.test.mjs`, `TEST_READY.md`)
- **Milestone 1**: DONE (Nâng cấp SSOT 7 Tracks, 355 tasks, 27 chặng, 5 capstones, `export-roadmap.mjs`, `public/ROADMAP.md`)
- **Milestone 2**: DONE (Web UI Canvas 7 cột, Track Switcher, bộ lọc trạng thái, LocalStorage v2 migration, Deep Linking)
- **Milestone 3**: DONE (Biên bản phản biện đa tác nhân `docs/MULTI-AGENT-REVIEW.md`, Checkpoint luân chuyển mô hình `STATE.md`, ghi chú `notes/`)
- **Milestone 4**: READY FOR EXECUTION (Tự động hóa Git, commit lịch sử chỉn chu, push remote `origin/main`, báo cáo nghiệm thu hoàn tất)

---

## 1. MỤC TIÊU DỰ ÁN & BỐI CẢNH (PROJECT OBJECTIVES)

1. **Khắc phục triệt để lỗ hổng kiến thức Năm 1**:
   - Vá dứt điểm nỗi sợ con trỏ C++, số học con trỏ, phân vùng Stack vs Heap, cấp phát động, rò rỉ bộ nhớ qua RAII và con trỏ thông minh (`unique_ptr`, `shared_ptr`).
   - Củng cố bản chất các thuật toán sắp xếp (Quicksort Lomuto/Hoare, Mergesort, Heapsort), cây tự cân bằng (AVL với 4 phép xoay), đồ thị (BFS/DFS, Dijkstra, Kruskal + DSU), quy hoạch động (Knapsack, LCS, LIS).
   - Làm chủ kỹ năng kỹ nghệ thực chiến: Git CLI (rebase, merge conflicts, stash), gỡ lỗi với GDB/LLDB và AddressSanitizer/Valgrind, Linux shell scripting, CMake.
2. **Đồng hành tối ưu điểm số Học kỳ 1 Năm 2 tại HCMUS FIT**:
   - 4 môn trọng điểm: Lập trình Hướng đối tượng (CSC10003), Mạng máy tính (CSC10008), Xác suất thống kê (MTH00041), Toán rời rạc & tổ hợp (MTH00040).
3. **Chiến lược xét tuyển Chuyên ngành Khoa học Máy tính**:
   - Tối ưu hóa CPA/GPA đạt ngưỡng $\ge 7.8 - 8.5+$ để trúng tuyển chuyên ngành KHMT cuối năm 2.
   - Xây dựng 5 Practical Capstone Mini-Projects làm hồ sơ năng lực (portfolio) kỹ thuật.
4. **Nâng cấp toàn diện Ứng dụng Web & Trải nghiệm Người dùng**:
   - Kiến trúc bản đồ canvas 7 làn bơi đa tiến trình trực quan, thay thế cột đơn dọc 70,000 px cũ.
   - Hệ thống chuyển đổi track, bộ lọc đa tầng, lưu trữ tiến trình LocalStorage v2 tự động nâng cấp từ v1 không mất dữ liệu, và điều hướng Hash URL.

---

## 2. CÁC QUYẾT ĐỊNH KIẾN TRÚC THEN CHỐT (KEY ARCHITECTURE DECISIONS - ADRs)

- **ADR-01: Single Source of Truth (SSOT) & Dual-Compilation Pipeline**:
  - Toàn bộ dữ liệu chương trình chỉ được lưu trữ và định nghĩa tại `src/curriculum/` (`tracks.js`, `index.js`, `details/`, `revision.js`, `readings.js`).
  - Lệnh `npm run build` thực thi kịch bản `scripts/export-roadmap.mjs` trước khi Vite build, tự động xuất bản `public/ROADMAP.md` (chuẩn GitHub Markdown) và bundle vào client React. Tuyệt đối không chỉnh sửa thủ công vào `public/ROADMAP.md` vì sẽ bị ghi đè khi build.
- **ADR-02: 7-Track Multi-Track Classification**:
  - 355 nhiệm vụ được phân chia thành đúng 7 Tracks (từ `track-0` đến `track-6`), mỗi task có `trackId` khớp hoàn toàn với `trackId` của chương cha.
  - Bảo toàn 100% tính tương thích ngược cho 32 ID nhiệm vụ nguyên mẫu và 339 ID baseline.
- **ADR-03: Multi-Column Canvas Coordinate Generator**:
  - Trong chế độ "Tất cả các Track": Tính toán tọa độ theo cột $X_k = k \times 430\text{ px}$, $Y_j = j \times 198\text{ px}$, và nút tiêu đề `TrackHeaderNode` tại $(X_k, -90)$.
  - Trong chế độ Track đơn: Căn giữa làn tại $X = 0$, $Y_j = j \times 198\text{ px}$.
  - Nối cạnh (edges) tuần tự có hướng chỉ giữa các nhiệm vụ liền kề trong cùng một track, ngăn ngừa hiện tượng cạnh nối chéo làm rối canvas.
- **ADR-04: LocalStorage Schema v2 Migration & Defensive Sanitization**:
  - Khóa lưu trữ mới: `STORAGE_KEY_V2 = 'khmt-roadmap.progress.v2'`.
  - Hàm `loadProgressFromStorage` tự động kiểm tra nếu có khóa v1 cũ (`khmt-roadmap.progress.v1`), tự động chuyển đổi sang v2 qua `migrateProgressV1ToV2`, lưu vào v2 và giữ nguyên v1 làm bản đệm an toàn.
  - Sử dụng `Object.hasOwn(labels, status)` và `Number.isInteger(n) && n >= 0` để phòng thủ triệt để trước tấn công Prototype Pollution (`__proto__`, `constructor`) và mảng việc cần làm (`checkedTodos`) dị thường.
- **ADR-05: Phương pháp Sư phạm chituongedu**:
  - Dạy tuần tự, giải nghĩa cơ chế trước khi dùng cú pháp, câu hỏi chốt bản chất (Hinge questions), bậc thang gợi ý tiến thoái không mớm code, và định tuyến tự động đến ô cần ôn khi sinh viên làm sai bài kiểm tra chẩn đoán.
- **ADR-06: 5 Practical Capstone Mini-Projects với Verification Gates**:
  - Space Invaders C++ (ASan 0 bytes leak), Web Server & Socket Chat (Apache Bench `ab -n 1000 -c 20`), Graph Routing Engine (Big-O benchmarking vs CSES), Naive Bayes Spam Filter ($F_1 \ge 0.92$), C++ DevOps Scaffold (CMake, CTest, GitHub Actions CI/CD).

---

## 3. DANH MỤC TẬP TIN DỰ ÁN & QUYỀN SỞ HỮU (FILE INVENTORY)

### Mã nguồn Ứng dụng & Dữ liệu Lộ trình:
- `src/curriculum/tracks.js`: Định nghĩa 7 tracks, metadata, màu sắc, ánh xạ 27 chương, và 5 đồ án capstone.
- `src/curriculum/index.js`: Điểm tích hợp SSOT, gán `trackId` cho toàn bộ tasks và chapters, bổ sung 22 pedagogical enrichments.
- `src/curriculum.js`: Facade re-export API dữ liệu lộ trình.
- `src/main.jsx`: Ứng dụng React Flow chính, chứa Track Switcher, bộ lọc trạng thái, thuật toán tọa độ 7 cột, Deep Linking hash, hộp thoại Capstone, và checklist việc cần làm.
- `src/progress.mjs`: Động cơ lưu trữ LocalStorage v2, hàm `migrateProgressV1ToV2`, hàm `validateProgress`, hàm `loadProgressFromStorage`, và giải thuật chọn bài tiếp theo `nextTask`.
- `src/style.css`: Toàn bộ CSS phong cách, responsive từ màn hình Desktop siêu rộng (>1600px) đến điện thoại nhỏ (<360px).
- `scripts/export-roadmap.mjs`: Trình biên dịch tự động xuất bản dữ liệu SSOT ra tài liệu `public/ROADMAP.md`.
- `public/ROADMAP.md`: Tài liệu lộ trình chuẩn GitHub Markdown (~500KB, 1,787 checkboxes, 7 tracks, 27 chặng, 355 tasks, 5 capstones).

### Kiểm thử Tự động (106 Tests / 19 Suites):
- `tests/e2e-roadmap.test.mjs`: Bộ kiểm thử E2E 4 tầng (Feature coverage, Boundary cases, DAG invariants, Real-world simulations).
- `tests/tracks.test.mjs`: Bộ kiểm thử cấu trúc 7 tracks, ánh xạ chapter, và 5 đồ án capstone.
- `tests/progress.test.mjs`: Bộ kiểm thử unit tests cho `progress.mjs` (v2 schema, migration v1->v2, defensive sanitization).
- `tests/revision.test.mjs`: Bộ kiểm thử cho các bài chẩn đoán và thư viện đọc miễn phí.
- `tests/challenger-dag.test.mjs`: Bộ kiểm thử đối kháng cấu trúc đồ thị, chu trình 3-color DFS và Kahn topo sort.
- `tests/challenger-m2-storage.test.mjs`: 25 bài kiểm thử đối kháng cho bộ nhớ LocalStorage v2, bẫy lỗi QuotaExceeded, prototype pollution.
- `tests/challenger-m2-ui-layout.test.mjs`: 8 suite kiểm thử hoán vị tọa độ canvas (160 tổ hợp bộ lọc, spatial collision, tính nhất quán toán học).

### Báo cáo & Tài liệu Chuyển giao:
- `docs/MULTI-AGENT-REVIEW.md`: Báo cáo phản biện đa tác nhân toàn diện (13/13 phiếu đồng thuận thông qua).
- `.antigravity-memory/STATE.md`: Tệp checkpoint liên tục phục vụ luân chuyển mô hình không mất ngữ cảnh (tệp này).
- `notes/codex.md`: Ghi chú đồng bộ dành riêng cho môi trường Codex.
- `notes/antigravity.md`: Ghi chú đồng bộ dành riêng cho môi trường Antigravity.

---

## 4. LỆNH KIỂM CHỨNG & KẾT QUẢ THỰC NGHIỆM (VERIFICATION LOG)

| Lệnh Kiểm chứng | Mục tiêu Kiểm tra | Kết quả Thực nghiệm Thực tế | Trạng thái |
|---|---|---|:---:|
| `npm test` | Toàn bộ 106 bài kiểm thử tự động thuộc 19 test suites | `ℹ tests 106, pass 106, fail 0, skipped 0, duration: 252ms` | ✅ PASS 100% |
| `npm run build` | Biên dịch `ROADMAP.md` và đóng gói Vite production | `Đã xuất 355 nhiệm vụ / 27 chặng. ✓ 1768 modules transformed. built in 2.21s` | ✅ PASS 100% |
| `git status` | Rà soát trạng thái các tệp sửa đổi | Kiểm soát chặt chẽ các file thuộc quyền sở hữu M3 | ✅ CLEAN |
| SHA-256 Idempotency | Tính tất định của tài liệu Markdown | Hai lần chạy liên tiếp cho cùng mã băm SHA-256 | ✅ VERIFIED |

---

## 5. GIAO THỨC LUÂN CHUYỂN MÔ HÌNH TOÀN NĂNG (UNIVERSAL MODEL SUCCESSION PROTOCOL)

Khi chuyển giao phiên làm việc giữa các mô hình AI khác nhau (ví dụ: từ **Gemini 4 Argon** sang **Gemini 3.8 Flash High**, hoặc giữa **Codex / ChatGPT / Antigravity**) khi hết token context, mô hình kế nhiệm **BẮT BUỘC** thực hiện theo 4 bước chuẩn tắc sau để tiếp quản công việc mà không làm mất dù chỉ 1 bit ngữ cảnh:

```
┌──────────────────────────────────────────────────────────────────────────┐
│             QUY TRÌNH TIẾP QUẢN MÔ HÌNH (MODEL SUCCESSION STEPS)         │
├──────────────────────────────────────────────────────────────────────────┤
│ Bước 1: Nạp Checkpoint (.antigravity-memory/STATE.md & notes/)           │
│ Bước 2: Kiểm chứng Thực địa (Chạy npm test & npm run build)              │
│ Bước 3: Đối soát Bất biến Cấu trúc (7 Tracks, 27 Chapters, 355 Tasks)    │
│ Bước 4: Khởi động Nhiệm vụ Tiếp theo (Milestone 4 - Git Push)            │
└──────────────────────────────────────────────────────────────────────────┘
```

### Bước 1: Đọc & Phục hồi Ngữ cảnh Tức thì
1. Mô hình kế nhiệm đọc ngay tệp `.antigravity-memory/STATE.md` (tệp này) và tệp `notes/codex.md` hoặc `notes/antigravity.md` tương ứng với ứng dụng đang chạy.
2. Nắm vững:
   - Thư mục làm việc: `C:\Users\XAOXIN\Documents\Codex\cs-roadmap-prototype`.
   - Tiến độ hiện tại: Milestone 1, 2, 3 đã hoàn thành xuất sắc 100%. Nhiệm vụ duy nhất còn lại là **Milestone 4** (Tự động hóa Git và Push remote `origin`).

### Bước 2: Chạy Kiểm chứng Thực nghiệm Xác thực Thực địa (Ground Truth Check)
Trước khi chỉnh sửa bất kỳ tệp nào, mô hình kế nhiệm phải chạy ngay hai lệnh kiểm chứng thực tế:
```powershell
cd C:\Users\XAOXIN\Documents\Codex\cs-roadmap-prototype
npm test
npm run build
```
- Xác nhận: `106 tests passed` và `built in ~2s`. Nếu có bất kỳ test nào fail, đó là dấu hiệu bất thường cần cô lập trước.

### Bước 3: Đối soát Các Bất biến Cốt lõi (Invariant Assertions)
Chạy script kiểm tra nhanh tính toàn vẹn của đồ thị và dữ liệu:
```powershell
node -e "import('./src/curriculum.js').then(({ tracks, chapters, tasks, capstoneProjects }) => { console.log('Tracks:', tracks.length, '| Chapters:', chapters.length, '| Tasks:', tasks.length, '| Capstones:', capstoneProjects.length); if (tracks.length !== 7 || chapters.length !== 27 || tasks.length !== 355 || capstoneProjects.length !== 5) process.exit(1); })"
```
- Kết quả bắt buộc: `Tracks: 7 | Chapters: 27 | Tasks: 355 | Capstones: 5` và exit code 0.

### Bước 4: Thực thi Nhiệm vụ Kế tiếp (Milestone 4 Execution)
Mô hình kế nhiệm chuyển thẳng sang thực hiện Milestone 4:
1. Kiểm tra trạng thái Git qua `git status` và `git diff`.
2. Tạo commit cục bộ chỉn chu với Conventional Commits:
   `git add .`
   `git commit -m "feat: complete comprehensive CS roadmap v2.0.0 (7-track, web canvas, multi-agent review, state persistence)"`
3. Kiểm tra kết nối remote: `git remote -v`.
4. Nếu có quyền push, thực hiện `git push origin main`. Nếu môi trường chưa có quyền push, lưu lại commit an toàn tại local và hướng dẫn người dùng lệnh push thủ công.

---

## 6. TRẠNG THÁI HIỆN TẠI & HÀNH ĐỘNG TIẾP THEO

- **Hiện tại**: Worker M3 đã hoàn tất xuất sắc toàn bộ nhiệm vụ của Milestone 3:
  - Soạn thảo biên bản phản biện mở `docs/MULTI-AGENT-REVIEW.md`.
  - Thiết lập checkpoint luân chuyển mô hình `.antigravity-memory/STATE.md`.
  - Thiết lập ghi chú đồng bộ `notes/codex.md` và `notes/antigravity.md`.
  - Kiểm chứng độc lập 106/106 tests và build thành công.
- **Tiếp theo**: Chuyển giao điều khiển cho Orchestrator để kích hoạt **Milestone 4** (Worker M4 / Sentinel) thực hiện cam kết Git và hoàn tất dự án.
