# Phạm vi thay đổi 1.2 và nguồn học miễn phí

Yêu cầu đã chốt: giữ một linked list; ô bắt buộc có nền bình thường, nâng cao có nền vàng và nhãn; thêm kiểm tra đầu vào, tách ô quá lớn, tăng chất lượng kiểm chứng và nguồn đọc. Không di chuyển chặng chọn hướng/thực tập lên đầu, không thêm kế hoạch theo tuần hay lịch nhắc.

## Những điều tham khảo từ OSSU

Đọc [OSSU curriculum](https://github.com/ossu/computer-science) ngày 03/11/2026, đặc biệt Organization,Process,Core CS,Advanced CS,Final project.

1. Phân biệt nền chung với phần chọn để đào sâu. Roadmap giữ toán,OS,mạng,dữ liệu,lý thuyết và kỹ thuật phần mềm ở vòng nền; chỉ đánh dấu các kỹ thuật hoặc lab chuyên sâu cụ thể là ô vàng. Đây là lựa chọn riêng cho roadmap, không phải danh sách bắt buộc của OSSU hay HCMUS.
2. Kiến thức nền phải đứng trước nơi sử dụng. Các ô nâng cao có thể bỏ qua mà không làm ô nền sau bắt buộc phụ thuộc vào phần bị bỏ: project tra cứu có phương án hash + duyệt tuyến tính thay trie; giao diện có JavaScript thuần thay React; PCA nền có thể học từ phép chiếu/vector riêng thay vì bắt tự giải SVD.
3. Chỉ đi nhanh qua phần đã biết khi tự làm được bài kiểm tra. Thêm chín ô kiểm tra vào các chặng có khả năng đã học trước; không tự đổi trạng thái bài học hoặc chấm năng lực bằng cảm giác quen.
4. Học bằng nguồn chính có phạm vi và bài tập. Mỗi nguồn được chọn có mục/chương cần đọc; nguồn khó như MIT 6.5840 chỉ dùng đoạn phù hợp, không ép học trọn khóa sau đại học.
5. Final project cần phản hồi người khác. Bổ sung yêu cầu người khác dựng lại/chạy lại,review hoặc thử thay đổi mới ở các mốc project; không chỉ có demo do người viết chuẩn bị sẵn.

OSSU nói rõ một số khóa có phần chấm/assignment trả phí. Vì người học yêu cầu hoàn toàn miễn phí, roadmap không sao chép nguyên danh sách Coursera/edX, không dùng financial aid/trial làm điều kiện và không bắt mua giáo trình của khóa.

## Chính sách nguồn

- Chỉ trỏ tới bản đọc và bài tập công khai hợp pháp từ tác giả,đại học,dự án mã nguồn mở hoặc tài liệu chính thức.
- “Miễn phí” là toàn bộ nội dung nguồn được chỉ định có thể đọc mà không trả tiền. Nếu là sách, chọn sách có toàn bộ bản điện tử miễn phí, không chọn bản xem thử vài chương của sách thương mại.
- Nguồn có bản in hoặc bản PDF đóng gói trả phí vẫn chỉ được dùng khi tác giả cung cấp toàn bộ nội dung đọc miễn phí; chỉ rõ đường đi miễn phí. OSTEP: từng chương PDF trong Free Book Chapters. Pro Git: sách web/ebook. OpenIntro: FREE PDF với khoản đóng góp $0.
- Nand to Tetris được dùng như bộ hướng dẫn/slide/project công khai; không gọi sách thương mại của khóa là sách miễn phí.
- Ví dụ chạy tại máy/CPU,dữ liệu nhỏ và dịch vụ giả lập; không yêu cầu thuê GPU,API,cloud hay mua chứng chỉ. Một công cụ độc lập có thể có điều khoản/cấu hình riêng; nguồn đọc không buộc mua dịch vụ.
- Các ô project/nghề nghiệp tự đủ yêu cầu không bị nhồi nguồn không liên quan cho đủ số lượng.

Nguồn và phạm vi đọc được lưu trong `src/curriculum/readings.js`; UI và `public/ROADMAP.md` xuất từ cùng dữ liệu. Tài liệu mạng chính thay sách thương mại bằng sách mở của Peter Dordal. Interpreter dùng Composing Programs bản 2; toàn bộ bản sách mở được cung cấp công khai.

## Kiểm tra liên kết

`node scripts/check-reading-links.mjs` kiểm tra HTTP của từng nguồn, lưu `docs/READING-LINKS.json`. Mã HTTP chỉ xác nhận đường truyền/trang phản hồi, không tự chứng minh tài liệu miễn phí hoặc phù hợp nội dung.

Lần kiểm tra đầu có ba hạn chế do chặn máy tự động/kết nối: ACM 403,W3C WAI 403,Dive Into Systems lỗi fetch. W3C WAI và Dive Into Systems đã đọc được bằng công cụ duyệt web; ACM được đổi sang PDF chính thức. Không tắt kiểm tra chứng chỉ để vượt lỗi và không coi HTTP 403 là bằng chứng trang cần trả phí.

Lượt cuối: 43/44 nguồn phản hồi thành công; Dive Into Systems vẫn cần đối chiếu bằng công cụ web thay vì fetch của Node. Danh sách trạng thái chi tiết nằm trong JSON, không được dùng để suy rằng 44 cuốn sách đều đã được đọc hết.

Ngày rà: 03/11/2026. Số chương hoặc đường dẫn của tài liệu cập nhật có thể đổi; đối chiếu tên mục nếu số mục thay đổi. Không tuyên bố đã giải và chấm lại mọi bài trong các sách.

## Tiến độ và các ô chia nhỏ

Giữ 339 ID cũ; thêm 9 ô đầu vào và 7 ô tách mới, tổng 355. Có 34 ô nâng cao; các ô còn lại thuộc phần bắt buộc của roadmap. Trạng thái bản sao lưu cũ được giữ; các ô mới là chưa học. “Để học sau” chỉ có trong UI của ô nâng cao và không cộng vào đã hoàn thành. Thanh tiến độ nền không bị kéo xuống bởi việc để các ô nâng cao học sau.

Các nội dung được tách: eigen/SVD; Bernoulli–binomial/Poisson/normal; CTE–view/window functions; K-means/PCA; CNN/embedding/attention. Không tách mọi cặp khái niệm có liên quan một cách máy móc.

## Prompt học từng ô

Prompt có số/tên/nhiệm vụ/nguồn của ô đang chọn, nhắc plugin chituongedu và yêu cầu dạy có kiểm tra,bài luyện,phản hồi. Mẫu trống có placeholder để dùng cho ô khác. Không gửi dữ liệu sang ChatGPT từ website; người học tự sao chép/dán.

Tên chat mong muốn: `Node X: Tên node`. Viết yêu cầu trong prompt không bảo đảm thay đổi tiêu đề thanh bên. UI có nút sao chép tên và liên kết [hướng dẫn quản lý chat chính thức](https://learn.chatgpt.com/docs/projects). Cũng không bảo đảm một mention dạng văn bản tự trở thành plugin đã kích hoạt; người học chọn plugin nếu chưa có thẻ.
