# Kiểm tra bản thử — 2026-11-03

## Viết sâu phần Việc cần làm — 1.1

- Đã thêm phần biên soạn riêng cho đủ 339 ID. Bộ ghép báo lỗi nếu thiếu nhiệm vụ, dùng ID lạ, lặp ID hoặc lặp hoàn toàn một gạch trong ô.
- Số gạch theo nội dung: 3–9, tổng 1.654; đây là kết quả biên soạn, không phải giới hạn bắt buộc. Ý khái quát và bước cụ thể được ghép khi cùng một yêu cầu để tránh tách lặp chỉ làm dài danh sách.
- Giữ 27 chặng, 339 ID/số thứ tự và định dạng sao lưu cũ; không sửa trạng thái đã học của người dùng.
- 8 nhóm test hiện có đều qua. Build thành công: nội dung/ứng dụng khoảng 346 kB và thư viện khoảng 407 kB, không có cảnh báo chunk quá lớn.
- Browser desktop: Dijkstra 119 có 9 việc, đọc được gạch cuối; detail-scroll có nội dung cao 1.230px trong khung cao 494px và cuộn tới cuối được.
- Browser ở khung 493px: mở và cuộn tới gạch cuối của kế thừa 020 (6 ý), cạnh tranh database 207 (6 ý), chia tập ML 282 (6 ý), CV 332 (5 ý). Console warn/error rỗng.
- Máy chủ preview cũ không còn chạy lúc mở kiểm tra; đã khởi động lại bằng tiến trình Node nền, cửa sổ ẩn, localhost:4178. Không thay đổi cấu hình tường lửa hay mạng.
- public/ROADMAP.md và dist/ROADMAP.md được xuất từ cùng dữ liệu 1.1; chưa đăng lên GitHub Pages.

## Mở rộng lộ trình 1.0

- 339 nhiệm vụ / 27 chặng, ID của 32 nhiệm vụ cũ giữ nguyên. Tự kiểm tra 8 nhóm test: thêm thứ tự tiên quyết, chương liên tiếp và khả năng nhận bản sao lưu của bản thử.
- Khởi động giao diện mới vẫn đọc nhiệm vụ đang chọn trước đó theo ID, hiển thị đúng số thứ tự mới.
- Trong trình duyệt, tìm Dijkstra → mở 119, xem điều kiện trọng số không âm và nguồn MIT. Bấm trực tiếp Chi tiết của ô 120 mở bài luyện đúng tên.
- Nhảy tới nhiệm vụ 339 ở cuối chuỗi thành công; nút tiếp theo bị khóa đúng tại cuối.
- Chỉ khoảng 3 node đang nằm trong khung được dựng; cả chuỗi vẫn giữ quan hệ liên tiếp. Console warn/error rỗng tại các lần kiểm tra nội dung và cuối chuỗi.
- Bản đầy đủ có thêm public/ROADMAP.md xuất từ cùng dữ liệu. Không có hoạt động nào tự đánh dấu người dùng đã học xong nhiệm vụ mới.
- Build cuối: tách thư viện ~407 kB và nội dung/ứng dụng ~134 kB, không còn cảnh báo chunk trên 500 kB. Các node ngoài khung không dựng đồng loạt.
- Màn hình 390×844: không tràn ngang, chọn chặng đồ thị mở đúng; tìm Kruskal ra 127/129; bấm trực tiếp Chi tiết của ô 127 mở đúng nội dung. Đã trả viewport về mặc định sau khi thử.

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
