# Lộ trình KHMT — bản thử

Website React + React Flow, 32 nhiệm vụ mẫu thuộc 4 chặng: C++, OOP, Git và project thư viện. Đây là bản thử cách trình bày, chưa phải toàn bộ chương trình KHMT.

## Chạy trên máy

Trên máy hiện tại, bấm đúp `Mo-roadmap.cmd` để mở bản đã dựng. Máy chủ xem thử chạy nền trên cổng 4178; có thể đóng khi không dùng bằng cách dừng tiến trình Node tương ứng. Nếu chuyển sang máy mới, thực hiện các lệnh bên dưới trước.

Cài Node.js 22.12 trở lên (hoặc Node 24 LTS), sau đó mở terminal trong thư mục này:

```sh
npm ci
npm run dev
```

Mở địa chỉ Local mà terminal hiển thị. Dùng `npm test` để kiểm tra dữ liệu sao lưu và chương trình mẫu, `npm run build` để tạo website trong `dist`.

## Đưa lên GitHub Pages

1. Tạo repository và đưa mã nguồn trong thư mục này lên nhánh `main` (không tải `node_modules`). GitHub Free cần repository công khai cho Pages.
2. Trong repository, mở **Settings → Pages → Source → GitHub Actions**.
3. Chạy workflow **Publish roadmap** ở mục Actions hoặc đẩy một commit mới lên `main`.
4. Sau khi workflow thành công, địa chỉ trang xuất hiện ở Settings → Pages.

Cấu hình dùng đường dẫn tương đối nên hỗ trợ địa chỉ `https://ten.github.io/ten-repository/`. Website không có các đường dẫn con cần máy chủ chuyển hướng.

## Sử dụng

- Bấm một ô để xem nhiệm vụ. Đường nối là thứ tự học đề xuất.
- Chọn chặng hoặc tìm kiếm để chuyển tới nhiệm vụ; bấm Tiếp tục học để về nhiệm vụ đang học, hoặc nhiệm vụ chưa hoàn thành đầu tiên.
- Đánh dấu Chưa học / Đang học / Hoàn thành trong bảng chi tiết.
- Tiến độ được lưu trong trình duyệt theo địa chỉ website. Xóa dữ liệu trình duyệt, đổi trình duyệt hoặc chuyển từ localhost lên Pages sẽ không tự chuyển tiến độ: xuất tệp JSON trước, rồi nhập ở địa chỉ mới.
- Nhập sao lưu sẽ cập nhật trạng thái những nhiệm vụ có trong tệp; các nhiệm vụ khác vẫn giữ nguyên. Tệp sai định dạng bị từ chối.

## Sửa nội dung

Thay đổi `src/curriculum.js`. Giữ nguyên ID của nhiệm vụ cũ để tiến độ không mất khi thêm nội dung. Mỗi nhiệm vụ có tên, loại (Học/Luyện/Áp dụng), danh sách việc cần làm, ghi chú và nguồn tùy chọn. Mở rộng nội dung không cần sửa giao diện.

Không có tài khoản, đồng bộ trực tuyến hay chấm bài tự động. Trang dùng Google Fonts; khi không kết nối mạng, chữ chuyển sang phông hệ thống.
