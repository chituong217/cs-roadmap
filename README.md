# Lộ trình KHMT · Chí Tường — 1.1

Website React + React Flow, **339 nhiệm vụ trong 27 chặng**, từ củng cố C++/OOP qua toán, DSA, hệ thống, phần mềm, AI đến chọn hướng, đồ án và thực tập. Toàn bộ nhiệm vụ nối thành một chuỗi dọc, bấm mở chi tiết.

Phiên bản 1.1 viết sâu hơn phần Việc cần làm của cả 339 nhiệm vụ: bước thực hiện, dữ liệu thử, ca biên, điều kiện áp dụng và cách kiểm tra tương ứng từng chủ đề. Số ý tùy nội dung, không có giới hạn ba gạch đầu dòng.

Đây là lộ trình tự học bổ trợ, không thay thế chương trình và yêu cầu tốt nghiệp chính thức của HCMUS. Phạm vi và đối chiếu nguồn ở `docs/CURRICULUM.md`. Bản văn bản toàn bộ nội dung ở `public/ROADMAP.md`, được cập nhật tự động khi build.

## Chạy trên máy

Trên máy hiện tại, bấm đúp `Mo-roadmap.cmd` để mở bản đã dựng. Máy chủ xem thử chạy nền trên cổng 4178; có thể đóng khi không dùng bằng cách dừng tiến trình Node tương ứng. Nếu chuyển sang máy mới, thực hiện các lệnh bên dưới trước.

Cài Node.js 22.12 trở lên (hoặc Node 24 LTS), sau đó mở terminal trong thư mục này:

```sh
npm ci
npm run dev
```

Mở địa chỉ Local mà terminal hiển thị. Dùng `npm test` để kiểm tra dữ liệu sao lưu, thứ tự nền tảng và ID nhiệm vụ; `npm run build` để xuất bản văn bản rồi tạo website trong `dist`.

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

Nội dung ở `src/curriculum/`: `initial.js` giữ 32 ID bản thử, các nhóm mới nằm trong `foundations.js`, `systems.js`, `engineering.js`, `future.js`. `index.js` ghép và đánh số lại; `format.js` đọc định dạng nhiệm vụ và khai báo nguồn.

Chi tiết bổ sung theo từng ID nằm trong `src/curriculum/details/`. Khi thêm nhiệm vụ mới, bổ sung nội dung tương ứng ở đây; quá trình xuất/build sẽ báo lỗi nếu một ô chưa được rà hoặc có gạch đầu dòng trùng hoàn toàn. Đây là nội dung biên soạn riêng từng nhiệm vụ, không phải phần chèn mẫu giống nhau.

Giữ nguyên ID nhiệm vụ cũ để tiến độ không mất. Số thứ tự có thể đổi khi chèn phần nền còn thiếu. Mỗi nhiệm vụ có tên, loại (Học/Luyện/Áp dụng), danh sách việc cần làm, ghi chú và nguồn tùy chọn. Build lại sau khi sửa nội dung để bản văn bản và website khớp nhau.

Không có tài khoản, đồng bộ trực tuyến hay chấm bài tự động. Trang dùng Google Fonts; khi không kết nối mạng, chữ chuyển sang phông hệ thống.
