# GHI CHÚ ĐỒNG BỘ MÔI TRƯỜNG CODEX (`notes/codex.md`)

**Dự án**: CS Roadmap Prototype (Lộ trình Khoa học Máy tính HCMUS)  
**Thời điểm cập nhật**: `2026-11-04T16:11:00Z`  
**Mã hội thoại liên kết**: `cb754d4a-4fdf-451e-beaf-3adf661844c5`  
**Checkpoint chung**: `.antigravity-memory/STATE.md`  

---

## 1. Tóm tắt Trạng thái Dự án cho Môi trường Codex
- **Tiến trình**: Milestone 1, Milestone 2, Milestone 3 đã hoàn tất 100%. Toàn bộ 106 bài kiểm thử tự động vượt qua (106 passed, 0 failed), lệnh build hoàn thành trong 2.21s.
- **Single Source of Truth (SSOT)**: `src/curriculum/` (7 Tracks, 27 Chapters, 355 Tasks, 5 Capstones).
- **Tài liệu Markdown chuẩn**: `public/ROADMAP.md` (~500 KB, 1,787 checkboxes).
- **Biên bản Đánh giá Phản biện**: `docs/MULTI-AGENT-REVIEW.md` (Tổng hợp ý kiến từ 11 subagent, 100% đồng thuận thông qua).
- **Giao diện Web**: Canvas 7 làn bơi đa tiến trình, Track Switcher, Bộ lọc trạng thái và loại nhiệm vụ, LocalStorage v2 tự động nâng cấp từ v1 không mất dữ liệu, Deep Linking qua Hash URL (`#task-<id>`, `#track-<id>`).

## 2. Các Thay đổi Quan trọng Đã Thực hiện
1. `src/curriculum/tracks.js`: Tạo mới mảng 7 tracks, từ điển ánh xạ `chapterToTrackId`, hàm `getTrackByChapterId`, và đặc tả 5 đồ án capstone kèm tiêu chí nghiệm thu định lượng.
2. `src/curriculum/index.js`: Nhúng `trackId` vào toàn bộ 355 tasks và 27 chapters, làm giàu 22 nhiệm vụ trọng điểm bằng các ghi chú sư phạm sâu sắc.
3. `scripts/export-roadmap.mjs`: Biên dịch tự động SSOT thành bảng 7 tracks, mục lục phân cấp, 5 capstones và danh sách checklist việc cần làm.
4. `src/main.jsx`: Xây dựng thuật toán tọa độ canvas 7 cột ($X_k = k \times 430$, $Y_j = j \times 198$), thanh Track Switcher, bộ lọc trạng thái, Drawer checklist và hộp thoại Capstone modal.
5. `src/progress.mjs`: Triển khai lược đồ LocalStorage v2 (`STORAGE_KEY_V2 = 'khmt-roadmap.progress.v2'`), hàm `migrateProgressV1ToV2`, hàm `validateProgress`, và bẫy lỗi QuotaExceededError.
6. `docs/MULTI-AGENT-REVIEW.md`: Biên bản phản biện đa tác nhân mở theo 4 chiều kích (Độ sâu kiến thức, Tính sư phạm, Độ khả thi kỹ thuật, Chiến lược xét chuyên ngành KHMT GPA $\ge 7.8 - 8.5+$).
7. `.antigravity-memory/STATE.md`: Checkpoint liên tục bảo toàn ngữ cảnh và quy trình luân chuyển mô hình.

## 3. Lệnh Kiểm chứng Dành cho Codex
Khi tiếp quản phiên làm việc trong môi trường Codex:
```powershell
cd C:\Users\XAOXIN\Documents\Codex\cs-roadmap-prototype

# Chạy toàn bộ 106 bài kiểm thử
npm test

# Chạy quy trình đóng gói sản phẩm web
npm run build
```
Kỳ vọng: 106 tests passed, build hoàn thành không lỗi.

## 4. Hành động Tiếp theo trong Codex
- Tiếp tục Milestone 4: Rà soát `git status` và thực hiện commit các thay đổi vào git repo cục bộ.
- Kiểm tra quyền truy cập remote `origin` (`https://github.com/chituong217/cs-roadmap.git`).
- Đẩy commit lên branch `main` và kiểm tra GitHub Pages workflow `.github/workflows/pages.yml`.
