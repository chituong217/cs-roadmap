# Codex — Tiếp quản triển khai

Cập nhật 2026-11-07. Codex hiện vừa thực hiện vừa điều phối; Antigravity không còn là bên nhận prompt.

## Đã thực hiện sau bàn giao

- Sửa mô hình value category/move và điều kiện destructor ảo; giữ những sửa đổi dở của Antigravity.
- Tích hợp các sửa đổi xác suất/thống kê/giải tích và locator theo review M3, bổ sung giới hạn cho diễn giải RCT.
- Thống nhất prerequisite catalog/authored và bổ sung kiểm tra cạnh thiếu/sai loại.
- Chốt Missing Semester 2020, bổ sung nguồn OpenIntro cho thiết kế thí nghiệm; hai nguồn MIT/Cornell bổ sung cho độ phức tạp không gian và type soundness phục vụ M4. Tổng45nguồn, mức đã đọc ghi trong register.
- Sinh lại M3:71chương/225tiểu mục/76859đơn vị từ;125/125tests đạt. Build sau sửaC++/toán đạt; chưa kiểmUIv3.

## Đang thực hiện

M4: viết14môn thuật toán/lý thuyết/hệ thống theo plannedChapters. Các module mới được kiểm riêng bằng `node scripts/verify-authored-modules.mjs`; chưa coi file chưa tích hợp là đã xuất hiện trên website. Khi đủ module sẽ tích hợp index, export toàn văn và kiểm lại dữ liệu/nguồn.

## Chưa hoàn tất

Review độc lập cuối M3/M4; M5 nội dung còn lại; M6 review toàn chương trình; M7 giao diện syllabus; M8 kiểm UI/build; M9 phát hành theo chỉ dẫn. Chưa xuất bản Pages. Không gắn nhãn hoàn tất toàn bộ dự án dựa vào số test đạt.
