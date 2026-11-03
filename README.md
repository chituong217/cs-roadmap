# Lộ trình KHMT · Chí Tường — 1.2

Website React + React Flow, **355 nhiệm vụ trong 27 chặng**, gồm **321 ô bắt buộc và 34 ô nâng cao**. Toàn bộ nhiệm vụ nối thành một chuỗi dọc, bấm mở chi tiết. Bản công khai: [chituong217.github.io/cs-roadmap](https://chituong217.github.io/cs-roadmap/).

Phiên bản 1.2 thêm bài kiểm tra đầu vào, tách các ô quá lớn, chỉ rõ phạm vi đọc tài liệu miễn phí và nút Prompt điền sẵn nội dung node. Ô nâng cao có nền vàng, nhãn rõ và trạng thái Để học sau. Vẫn giữ độ chi tiết của 1.1 và không giới hạn số gạch đầu dòng.

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
- Ô vàng là nâng cao có thể để học sau trong roadmap; chọn Để học sau không có nghĩa đã hoàn thành. Tiến độ phần bắt buộc được tính riêng và chỉ phản ánh số ô, không phải điểm năng lực.
- Nút Prompt trên thanh đầu trang mở mẫu đã điền số/tên/việc cần làm/nguồn của node đang chọn, hoặc mẫu trống. Có nút sao chép prompt và tên chat; lời nhắc `@chituongedu` không bảo đảm tự kích hoạt plugin, và tên chat có thể cần đổi thủ công.
- Bài kiểm tra đầu vào có liên kết tới ô cần ôn; đây là bài tự làm/trao đổi với gia sư, chưa có chấm tự động.
- Nguồn được chọn có bản đọc miễn phí hợp pháp và phạm vi chương/mục. Không yêu cầu mua bản in, gói học, chấm bài, API hay GPU. Chính sách và cách tham khảo OSSU ở `docs/OSSU-AND-FREE-RESOURCES.md`.
- Tiến độ được lưu trong trình duyệt theo địa chỉ website. Xóa dữ liệu trình duyệt, đổi trình duyệt hoặc chuyển từ localhost lên Pages sẽ không tự chuyển tiến độ: xuất tệp JSON trước, rồi nhập ở địa chỉ mới.
- Nhập sao lưu sẽ cập nhật trạng thái những nhiệm vụ có trong tệp; các nhiệm vụ khác vẫn giữ nguyên. Tệp sai định dạng bị từ chối.

## Sửa nội dung

Nội dung ở `src/curriculum/`: `initial.js` giữ 32 ID bản thử, các nhóm mới nằm trong `foundations.js`, `systems.js`, `engineering.js`, `future.js`. `index.js` ghép và đánh số lại; `format.js` đọc định dạng nhiệm vụ và khai báo nguồn.

Chi tiết bổ sung theo từng ID nằm trong `src/curriculum/details/`. Khi thêm nhiệm vụ mới, bổ sung nội dung tương ứng ở đây; quá trình xuất/build sẽ báo lỗi nếu một ô chưa được rà hoặc có gạch đầu dòng trùng hoàn toàn. Đây là nội dung biên soạn riêng từng nhiệm vụ, không phải phần chèn mẫu giống nhau.

Giữ nguyên ID nhiệm vụ cũ để tiến độ không mất. Số thứ tự có thể đổi khi chèn phần nền còn thiếu. Mỗi nhiệm vụ có tên, loại (Học/Luyện/Áp dụng), danh sách việc cần làm, ghi chú và nguồn tùy chọn. Build lại sau khi sửa nội dung để bản văn bản và website khớp nhau.

Bản 1.2 áp dụng phần chia nhỏ, nhãn nâng cao, kiểm tra đầu vào và bằng chứng thực hành trong `src/curriculum/revision.js`; tài nguyên và phạm vi đọc trong `src/curriculum/readings.js`. Bản 1.1 có 339 ID đều được giữ. Ô mới chưa hoàn thành; ô cũ đã chia nhỏ vẫn giữ trạng thái của ID cũ, người học nên kiểm tra thêm các ô mới liên quan.

Không có tài khoản, đồng bộ trực tuyến hay chấm bài tự động. Trang dùng Google Fonts; khi không kết nối mạng, chữ chuyển sang phông hệ thống.
