# Quyết định cổng M2 — Codex, 2026-11-07

**Duyệt mẫu M2 làm cơ sở tiếp tục M3, kèm một chỉnh sửa biên tập toán nhỏ phải thực hiện ngay đầu M3. Không duyệt xuất bản hoặc coi toàn bộ 50 môn đã hoàn tất/đã được kiểm chứng.**

## Bằng chứng lần kiểm tra này

- Đã đối chiếu phản hồi sau lượt sửa thứ hai với mã và nội dung hiện tại trên nhánh `feature/cs-syllabus-from-zero`.
- Codex chạy `npm test`: **124/124 đạt**, 19 suites, 0 thất bại.
- Chạy script backup ở chế độ xác minh: `ok:true`, `totalMissing:0`, SHA-256 giữ nguyên `78094dc6ef2f2dbc0a11caa1e04e0f89eb2ae3138a71ea1d5497c79361cb8077`. Không ghi lại snapshot.
- Ca kiểm tra độc lập định nghĩa getter `globalThis.localStorage` ném SecurityError: loadResult/saveResult trả lỗi storage, import trả thất bại và giữ nguyên tham chiếu currentProgress. Không còn ngoại lệ getter thoát khỏi các đường Result/import đã kiểm tra.
- `docs/syllabus-v3/M2-SAMPLE-SYLLABUS.md` và `public/SYLLABUS.md` khớp toàn bộ nội dung khi đọc và so sánh trực tiếp.
- Mốc M6–M9 trong REVIEW-PACKET đã đúng PLAN. Thống kê nhập môn đã đồng bộ 22 core + 2 extension; câu std::ws đã nêu giới hạn giữ dấu cách đầu dòng và dòng trống.
- Kết luận chính của cận tích phân đã sửa về O(ln n), không còn suy ra Theta chỉ từ hai cận hình chữ nhật.

Không chạy lại build trong lượt này vì thay đổi kỹ thuật đang kiểm là module chưa tích hợp UI và các ca liên quan đã được chạy; build ở lượt trước đã đạt. Build 2.33 giây trong phản hồi mới là kết quả do Antigravity báo, không phải phép đo mới của Codex. Chưa nghiệm thu trình duyệt cho giao diện v3.

## Một chỉnh sửa nhỏ cần làm cùng đầu M3

Trong `src/syllabus/courses/discrete-math-part2.mjs:173`, kết luận O(ln n) đã đúng, nhưng biểu thức cận trên R(n) mới thêm không phải phép biến đổi trực tiếp của cận phía trên vừa nêu. Không cần đưa cận phụ phức tạp này vào syllabus.

Từ cận đang có:

`ln(n!) ≤ (n+1)ln(n+1) − n`

và `R(n)=ln(n!)−(n ln n−n)`, phép trừ trực tiếp cho:

`1 ≤ R(n) ≤ (n+1)ln(n+1) − n ln n = ln n + (n+1)ln(1+1/n) = O(ln n)`.

Hãy dùng biểu thức này, hoặc chỉ giữ kết luận O(ln n) cùng giải thích cận trên. Bỏ biểu thức hiện tại `ln(n+1)+(n+1)ln(1+1/n)−1` ở vị trí mô tả phép suy ra trực tiếp. Đây là chỉnh sửa cục bộ, không yêu cầu mở một vòng sửa M2 riêng nữa. Cập nhật đoạn tương ứng trong báo cáo và sinh lại preview.

## Chỉ thị tiếp theo dành cho Antigravity

1. Đọc PLAN gốc và quyết định này; sửa dòng toán nhỏ ở trên trước khi viết nội dung mới.
2. Thực hiện **M3 — Hoàn thiện nền nhập môn và toán** theo PLAN. Giữ nguyên các mẫu đã đạt, bổ sung các môn còn thiếu của Khối I–II theo đồ thị tiên quyết.
3. Mô tả kiến thức bằng đoạn văn syllabus: đối tượng/khái niệm, cơ chế hoặc phương pháp, các trường hợp cần phân biệt, điều kiện áp dụng, giới hạn và nguồn cụ thể. Không trở lại checklist nhiệm vụ; không áp số chương/chủ đề đồng loạt.
4. Bảo đảm công cụ máy tính, terminal/Linux, Git, debug có đường vào cho người mới; không giả định người học đã biết chúng. Toán dùng tới đâu phải có nền trước tới đó hoặc nêu rõ phần mở rộng.
5. Theo nguồn gốc thật, không tự nhận đã đọc chương chỉ vì có URL. Gắn locator đủ cụ thể; kiểm công thức, điều kiện và ví dụ trước khi nhân rộng.
6. Bàn giao **M3 trước khi sang M4**: preview từ dữ liệu gốc, thống kê tự tính, danh sách môn đã hoàn tất/chưa hoàn tất, nguồn đã đối chiếu, kiểm tra thực chạy và giới hạn còn lại. Đây là điểm review trung gian để tránh nhân rộng sai mẫu; không đổi tên các mốc M0–M9.
7. Giữ backup, legacy và namespace tiến độ riêng. Chưa xuất bản GitHub Pages.

PLAN gốc: `C:/Users/XAOXIN/Documents/Codex/2026-11-06/ki/outputs/PLAN-CS-SYLLABUS-FROM-ZERO-ANTIGRAVITY.md`.

Phạm vi phê duyệt: đủ cho việc tiếp tục biên soạn sau cổng mẫu; không phải chứng nhận mọi phát biểu của cả 64 chủ đề đã được kiểm độc lập, và không thay thế review toàn chương trình ở M6 hoặc kiểm UI ở M7–M8.
