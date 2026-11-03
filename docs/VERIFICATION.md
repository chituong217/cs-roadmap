# Kiểm tra bản thử — 2026-11-03

## Sửa lỗi bấm trực tiếp trên roadmap

- Tái hiện trước sửa: bấm chữ Chi tiết trong ô 001 không mở dialog. Computed pointer-events của cả node và nút đều là none. Các kiểm tra trước đó qua tìm kiếm/mục lục đã không phát hiện được lỗi này.
- Nguyên nhân: tắt draggable/selectable mà không truyền onNodeClick khiến React Flow đặt pointer-events: none cho node wrapper, dù nút con có onClick riêng.
- Sửa: đăng ký onNodeClick trên ReactFlow để wrapper nhận chuột; nút con ngăn sự kiện nổi lên để không mở hai lần, đồng thời có nopan để không kéo canvas khi bấm.
- Sau build và reload: pointer-events thành all; bấm đúng chữ Chi tiết ở ô 001 mở đúng tên và 4 việc cần làm. Đóng rồi bấm tên ô cũng mở. Chuyển sang ô 002, đóng và bấm trực tiếp Chi tiết mở đúng nội dung. Lặp lại tại khung hiện tại 493px thành công, console warn/error rỗng.
- Không đánh dấu hoàn thành nhiệm vụ của người dùng khi kiểm tra bản sửa.

- `npm test`: 5 bài kiểm tra qua. Bao gồm sao lưu có trạng thái, từ chối dữ liệu sai, bỏ qua ID chưa có, chọn nhiệm vụ tiếp tục và tính nhất quán chương trình mẫu.
- `npm run build`: thành công. Preview HTTP 200 tại 127.0.0.1:4178.
- Kiểm tra trình duyệt: đánh dấu nhiệm vụ đầu hoàn thành, tải lại trang vẫn giữ tiến độ; trả về Chưa học sau khi thử.
- Tìm không dấu `ke thua` trả về nhiệm vụ 016 và nhiệm vụ có nhắc kế thừa; bấm 016 mở đúng nội dung.
- Đang học và Tiếp tục học quay về nhiệm vụ kế thừa; trả về Chưa học sau khi thử.
- Kiểm tra hình thức ở 1280×720, 390×844, 320×720 và 768×1024. Sửa lỗi không căn lại sơ đồ khi đổi kích thước. Đã xem lại bản sửa ở 320px và kiểm tra bounds ở 768px.
- Màn hình nhỏ: chọn chặng mở hộp thoại chi tiết; đóng hoạt động. Không tràn chiều ngang ở các kích thước đã đo.
- Xuất thật ra tệp Downloads/tien-do-khmt-2026-11-03.json; nhập lại qua bộ chọn tệp hiển thị thông báo thành công. Tệp thử có tiến độ trống sau khi dọn trạng thái kiểm tra; dữ liệu không rỗng đã kiểm tra bằng unit test.
- Console warn/error rỗng ở lần kiểm tra ban đầu. Chưa kiểm tra trình đọc màn hình chuyên dụng hoặc toàn bộ các trình duyệt.
- Chưa xuất bản lên GitHub Pages: đã có workflow và README. Chưa có repository đích trong yêu cầu.
- Nút mở nhanh Mo-roadmap.cmd được soạn để khởi động preview và mở URL, chưa chạy thử thao tác nhấp đúp trong Explorer.
