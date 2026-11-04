# GHI CHÚ ĐỒNG BỘ MÔI TRƯỜNG ANTIGRAVITY (`notes/antigravity.md`)

**Dự án**: CS Roadmap Prototype (Lộ trình Khoa học Máy tính HCMUS)  
**Thời điểm cập nhật**: `2026-11-04T16:11:30Z`  
**Mã hội thoại Antigravity**: `cb754d4a-4fdf-451e-beaf-3adf661844c5`  
**Hook Tự động nạp**: `continuity` (Đọc `.antigravity-memory/STATE.md`)  

---

## 1. Tóm tắt Ngữ cảnh Phục vụ Luân chuyển Mô hình trong Antigravity
- **Bối cảnh Luân chuyển**: Thiết lập nhằm đảm bảo khi chuyển đổi giữa các mô hình (ví dụ: Gemini 4 Argon sang Gemini 3.8 Flash High hoặc ngược lại khi chạm giới hạn token), agent Antigravity có thể tức thì nắm bắt toàn bộ trạng thái mà không cần người dùng giải thích lại.
- **Tiến trình Hiện tại**:
  - M-E2E: ĐÃ HOÀN THÀNH (Bộ kiểm thử 4-Tier, `TEST_READY.md`)
  - M1: ĐÃ HOÀN THÀNH (SSOT 7 Tracks, 355 Tasks, `export-roadmap.mjs`, `public/ROADMAP.md`)
  - M2: ĐÃ HOÀN THÀNH (Web UI Canvas 7 cột, Track Switcher, bộ lọc trạng thái, LocalStorage v2 migration)
  - M3: ĐÃ HOÀN THÀNH (Biên bản phản biện đa tác nhân `docs/MULTI-AGENT-REVIEW.md`, Checkpoint luân chuyển mô hình `STATE.md`, ghi chú `notes/`)
  - M4: SẴN SÀNG THỰC THI (Tự động hóa Git & Push remote `origin`)

## 2. Các Bất biến Hệ thống Cần Nhớ (System Invariants)
1. **SSOT Contract**: Mọi thay đổi dữ liệu phải thực hiện trong `src/curriculum/`. Tập tin `public/ROADMAP.md` được sinh tự động khi chạy `scripts/export-roadmap.mjs`.
2. **DAG Prerequisite Invariant**: 0 chu trình trong quan hệ tiên quyết; 100% điều kiện tiên quyết đứng trước nhiệm vụ phụ thuộc.
3. **Chapter Contiguity**: 27 chương liên tục không bị chia cắt.
4. **Backward Compatibility**: 339 baseline IDs và 32 prototype IDs được giữ nguyên vẹn 100%.
5. **Storage v2 Migration**: Dữ liệu LocalStorage v1 của người dùng tự động được nâng cấp lên v2 mà không mất trạng thái.

## 3. Nhật ký Xác thực Thực địa (Empirical Verification Log)
- **Kiểm thử tự động (`npm test`)**:
  - Lệnh: `node --test tests/*.test.mjs`
  - Kết quả: **106 tests passed / 19 suites / 0 failed / 0 skipped / ~250ms**.
- **Đóng gói sản phẩm (`npm run build`)**:
  - Lệnh: `node scripts/export-roadmap.mjs && vite build`
  - Kết quả: **1768 modules transformed / built in 2.21s / 0 errors / 0 warnings**.
- **Biên bản Đánh giá Phản biện**:
  - Tệp: `docs/MULTI-AGENT-REVIEW.md` được phê duyệt với 13/13 phiếu tán thành tuyệt đối.

## 4. Hướng dẫn Tiếp quản Phiên làm việc (Succession Protocol Checklist)
Nếu mô hình mới được kích hoạt trong phiên này:
1. Đọc `.antigravity-memory/STATE.md` và tệp này (`notes/antigravity.md`).
2. Chạy `npm test` để xác nhận toàn bộ 106 tests xanh.
3. Chạy `npm run build` để kiểm tra đóng gói thành công.
4. Chuyển sang thực thi Milestone 4: Kiểm tra `git status`, tạo commit và thực hiện `git push origin main`.
