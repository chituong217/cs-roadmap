## 2.1.0 — 2026-11-06

- Tích hợp trên 7 commit mới nhất: giữ 7 track, filter, sidebar thu gọn, tick việc, 5 mini-project và storage v2.
- Thêm 64 nhiệm vụ, tổ chức 42 môn có đầu vào/mục tiêu/bằng chứng; debug và hệ thống lên sớm.
- Thêm Chương trình thu gọn, profile đã xác nhận, prompt theo môn và hai trạng thái ôn tập.
- Giữ 355 ID; tiếp tục nhánh tự chọn vừa học; đọc backup v1/v2 không bỏ checkedTodos.
- Sửa thông tin học hiện tại và các khẳng định quá tuyệt đối về ABI/GPA.

# Thay đổi

## 1.2.0 — 2026-11-03

- Phân biệt 321 ô bắt buộc và 34 ô nâng cao; ô nâng cao có nền vàng, nhãn rõ, tùy chọn Để học sau và tiến độ riêng.
- Thêm 9 ô tự kiểm tra đầu vào có liên kết tới phần cần ôn; tách 7 ô mới từ các nội dung quá lớn, tổng 355 nhiệm vụ trong 27 chặng.
- Chỉ rõ nguồn đọc miễn phí, chương/mục và cách truy cập; tham khảo cấu trúc Core/Advanced, điều kiện nền và phản hồi project từ OSSU.
- Thêm nút Prompt trên thanh đầu trang, điền sẵn node đang chọn hoặc mẫu trống, sao chép prompt/tên chat và nhắc @chituongedu.
- Giữ 339 ID cũ và định dạng tiến độ; không tự chấm hay tự đánh dấu học xong, không di chuyển chặng nghề nghiệp hoặc thêm lịch học.

## 1.1.0 — 2026-11-03

- Viết sâu phần Việc cần làm cho toàn bộ 339 nhiệm vụ, thêm các bước thực hiện, điều kiện, ca thử và cách kiểm tra theo từng chủ đề.
- Ghép những ý khái quát với hướng dẫn cụ thể để giảm gạch đầu dòng lặp; không đặt số ý cố định cho mỗi ô.
- Cập nhật bản đọc toàn bộ nội dung cùng website. Giữ nguyên ID, thứ tự và tiến độ đã lưu.

## 1.0.0 — 2026-11-03

- Mở rộng bản thử thành 339 nhiệm vụ thuộc 27 chặng, từ C++ tới nền tảng KHMT, đồ án và thực tập.
- Thêm bản văn bản được xuất từ cùng dữ liệu và chỉ dựng phần sơ đồ đang hiển thị.

## Bản đồ node mới (nhánh map-prototype, chưa phát hành)
- Trang chính (`index.html`) quay lại giao diện bản đồ node; bản đọc dài ở `reader.html`, bản bản đồ cũ ở `legacy.html`.
- 217 node gộp từ 683 chủ đề của 50 môn (`src/map/specs/*.mjs`); sidebar "Nội dung cần nắm" là văn xuôi, không có checklist.
- Tiến độ lưu riêng ở `cs-map.progress.v1`, không tự chuyển từ tiến độ cũ.
- Sau khi sửa specs hoặc giáo trình: `node scripts/build-map-data.mjs` để sinh lại `src/map/map-data.generated.mjs`.
