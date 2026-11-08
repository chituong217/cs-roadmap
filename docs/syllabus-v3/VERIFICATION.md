# Báo Cáo Kiểm Chứng Kỹ Thuật & Dữ Liệu (`VERIFICATION.md` — Cổng Review M3: Khối I & Khối II Hoàn Chỉnh)

- **Ngày chạy kiểm chứng:** `2026-11-07` (Asia/Saigon)
- **Repository:** `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy`
- **Nhánh làm việc:** `feature/cs-syllabus-from-zero` (tách từ commit gốc `ecbece0e91597ca2790eff51d7ff7f7b8f4a3e2b`)

---

## 1. Kiểm Chứng Bước 1 — Bảo Vệ & Xác Minh Bản Sao Lưu 2.1.0 (`ROADMAP-BEFORE-SYLLABUS-REWRITE.md`)

- **Website kiểm tra:** `https://chituong217.github.io/cs-roadmap/` khớp 100% với commit `ecbece0e91597ca2790eff51d7ff7f7b8f4a3e2b`.
- **Lệnh xác minh:** `node scripts/backup-roadmap-v21.mjs` (mặc định `--verify`, không ghi đè tệp đã xác minh).
- **Thông số tệp sao lưu giữ nguyên 100%:**
  - **Đường dẫn tuyệt đối:** `C:\Users\XAOXIN\OneDrive\Tài liệu\ChatGPT\LXH\cs-roadmap-deploy\docs\backups\ROADMAP-BEFORE-SYLLABUS-REWRITE.md`
  - **Kích thước:** `896,954 bytes` (`9,393 dòng`)
  - **Mã băm SHA-256 chính xác:** `78094dc6ef2f2dbc0a11caa1e04e0f89eb2ae3138a71ea1d5497c79361cb8077`
  - **Xuất xứ dữ liệu (`provenance`):** `curriculumUnmodifiedFromBase: true`, `sourceCurriculumDigest: "8cf47d8fdf5b5c532126481584856fa81bba03f39139b44332ce1e5af56b179a"`.
  - **Đối chiếu 9 nhóm thực thể (`totalMissing: 0`):** `7/7` tracks, `42/42` chapters, `419/419` tasks, `1,892/1,892` todos, `69/69` extras, `415/415` task source links, `5/5` capstones, `70/70` freeLibrary, `35/35` resources.

---

## 2. Kiểm Chứng M1, M2 & M3 — Schema, Chỉnh Sửa Toán Cục Bộ M2, 14 Môn Khối I–II và Kiểm Thử Tự Động

### 2.1. Các lệnh kiểm tra đã chạy và kết quả thực tế
1. `node scripts/backup-roadmap-v21.mjs`
   - **Kết quả:** `exit code 0`, `action: "verified_existing_snapshot"`, `ok: true`, `hashMatches: true` (`78094dc6ef2f2dbc0a11caa1e04e0f89eb2ae3138a71ea1d5497c79361cb8077`), `totalMissing: 0`.
2. `node scripts/generate-m1-docs.mjs`
   - **Kết quả:** `exit code 0` — Kiểm tra `SOURCE-REGISTER.json` (`42` nguồn): `0` lỗi; kiểm tra `50` môn học trong `CATALOG_COURSES`: `0` lỗi; kiểm tra DAG trên cạnh `required`: `0` chu trình; đồng bộ `docs/syllabus-v3/COURSE-CATALOG.md` và `docs/syllabus-v3/PREREQUISITES.md`.
3. `node scripts/export-syllabus-preview.mjs`
   - **Kết quả:** `exit code 0` — Kiểm tra toàn bộ `AUTHORED_COURSES` (`15` môn = `14` môn Khối I–II + `1` chương mẫu `CS-25`) đối chiếu với `CATALOG_COURSE_MAP` và `plannedChapters`: **`0` lỗi kiểm định schema/graph**.
   - **Sinh lại preview mẫu M2:** `docs/syllabus-v3/M2-SAMPLE-SYLLABUS.md` (`3` môn mẫu, `17` chương, `64` tiểu mục, `19,977` từ — đã chứa biểu thức cận trên $R(n)$ sửa theo quyết định cổng M2).
   - **Sinh lại preview đầy đủ M3:** `docs/syllabus-v3/M3-FOUNDATIONS-AND-MATH-SYLLABUS.md` và `public/SYLLABUS.md` (`15` môn, `71` chương, `225` tiểu mục = `220 core + 5 extension`, `75,926` từ văn xuôi học thuật).
4. `npm test` (`node --test tests/*.test.mjs`)
   - **Tổng số bài kiểm thử:** `124` tests trên `19` suites (bao gồm `112` tests hiện có và `12` tests trong `tests/syllabus-v3.test.mjs` kiểm tra: `SOURCE-REGISTER.json` 42 nguồn, DAG 50 môn học, toàn bộ 14 môn Khối I–II khớp 100% `plannedChapters`, tính duy nhất toàn cục của `71` chapter IDs và `225` topic IDs, biểu thức cận trên $R(n)$ theo `CODEX-M2-GATE-DECISION.md`, và đầy đủ các kiểm thử hồi quy `syllabus-progress.mjs` kể cả getter `localStorage` mặc định ném `SecurityError`).
   - **Kết quả:** **`124 pass`, `0 fail`**.
5. `npm run build` (`node scripts/export-roadmap.mjs && vite build --configLoader runner`)
   - **Kết quả:** `exit code 0`, bản build hiện tại hoạt động bình thường, không làm hỏng ứng dụng v2.1.0 đang vận hành.

---

## 3. Bảo Toàn Trạng Thái Git & Dữ Liệu Hiện Hành

- `git branch --show-current`: `feature/cs-syllabus-from-zero`
- Không thực hiện `git push` hay xuất bản lên GitHub Pages (`main` vẫn giữ nguyên tại `ecbece0e91597ca2790eff51d7ff7f7b8f4a3e2b`).
- `git stash list`: Bảo toàn nguyên vẹn `stash@{0}: On main: Local 2.0 draft preserved before integrating newer GitHub main`.
- Bảo toàn nguyên vẹn `.antigravity-memory/backups/before-2.0` và `.antigravity-memory/STATE.md`.
