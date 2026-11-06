# Lộ trình KHMT · Chí Tường — 2.1

Giữ giao diện 7 track, bộ lọc, tick từng việc, sidebar thu gọn và 5 mini-project từ phiên bản GitHub trước. Bổ sung 419 nhiệm vụ trong 42 môn/chặng: 362 bắt buộc và 57 tự chọn. Bản 2.1 giữ toàn bộ 355 ID cũ, đưa debug–Git–Linux và hệ thống lên sớm, thêm tổng quan môn với đầu vào/đầu ra và điểm xuất phát cá nhân. [Cấu trúc, migration và giới hạn](docs/CURRICULUM-2.0.md).

Bấm `Mo-roadmap.cmd` để chạy bản dựng tại máy ở http://127.0.0.1:4178/. Muốn dựng lại: `npm run build`; kiểm tra dữ liệu và tiến độ: `npm test`. Môi trường mới dùng Node 22.12+ và `npm ci`. Không thay thế yêu cầu tốt nghiệp HCMUS.

Nút **Chương trình** mở toàn cảnh thu gọn từng môn; **Bắt đầu học debug** đưa tới phần mở đầu phù hợp. Đường dọc là thứ tự gợi ý, điều kiện đầu vào từng môn mới là nền cần dùng. Giữ các ô học/luyện/project và nút Prompt có ngữ cảnh môn.

Tiến độ lưu trên trình duyệt theo origin. Xuất JSON để chuyển trình duyệt hoặc từ localhost sang Pages. Hai trạng thái mới Đã học · cần kiểm tra và Cần ôn được lưu riêng với Hoàn thành. Không tự đánh dấu theo điểm hoặc lịch sử học. Giữ storage v2 và đọc backup v1/v2. Bản trước chưa đọc được hai trạng thái mới; dùng 2.1 để nhập backup mới.

Nội dung gốc 1.2 vẫn trong src/curriculum, được tổ chức lại bởi edition.js và bổ sung từ edition-content.js. Toàn bộ nội dung và điều kiện môn được xuất sang public/ROADMAP.md khi build. Nguồn phải đọc miễn phí hợp pháp; HTTP chỉ kiểm đường truyền. Chưa có chấm bài tự động hay đồng bộ tài khoản.

Build dùng configLoader runner để tránh tiến trình esbuild không đọc được đường dẫn cấu hình trong môi trường Windows hạn chế. Không cần thêm dependency.

## Xuất bản

Bản công khai cũ: https://chituong217.github.io/cs-roadmap/ . Thay đổi local không tự xuất bản. Workflow GitHub Pages chạy khi push theo cấu hình repository; chỉ thực hiện khi được yêu cầu xuất bản. Không đưa checkpoint riêng .antigravity-memory vào commit.
