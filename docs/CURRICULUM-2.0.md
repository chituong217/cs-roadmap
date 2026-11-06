# Chương trình 2.1 — cấu trúc và giới hạn

06/11/2026. 419 nhiệm vụ / 42 môn, gồm 362 bắt buộc và 57 tự chọn. 64 nhiệm vụ mới; giữ mọi ID trong 355 nhiệm vụ 1.2. Tách toán thành ba môn, lý thuyết khỏi ngôn ngữ, đồ họa khỏi HCI; đưa kiến trúc/OS/mạng trước khối thuật toán dài.

## Điểm xuất phát

Người học xác nhận C++ cơ bản ổn, chưa debug; DSA quên nhiều; OOP tới nạp chồng hàm; mạng tới chương 2; Git/Linux/OS chưa học. Toán năm 1 đã học, không tự coi đã vững. Thông tin này được hiển thị và đưa vào prompt; không gán trạng thái hoàn thành. Khi có tiến độ học mới cần cập nhật profile, không coi ảnh chụp hiện tại là đúng mãi.

## Cấu trúc

A công cụ/phục hồi nền; B hệ thống; C nền CS; D độ rộng/chuyên sâu; E tổng hợp/bước tiếp. Mỗi môn có đầu vào, mục tiêu, bằng chứng chuyển tiếp và ghi chú đường học. Các trường được xuất cùng ROADMAP.md và prompt. Bảng Chương trình thu gọn từng môn, nút mở môn đưa tới đường dọc hiện có.

Đường nối chỉ là thứ tự gợi ý. Không yêu cầu mọi môn trước làm điều kiện của môn sau. Đầu vào dạng năng lực được ghi bằng lời và chưa được ứng dụng kiểm/chấm tự động. Nguồn chính cùng chương/mục ở từng nhiệm vụ. Bài mới là bài độc lập nhỏ, không hứa được dùng máy lab/chấm bài chính thức của trường.

## Đối chiếu độ rộng CS2023

Đây là ánh xạ vùng kiến thức, chưa là chứng nhận đạt mọi đơn vị/giờ/năng lực của chuẩn.

| Vùng | Môn và bằng chứng tương ứng |
|---|---|
| Algorithmic Foundations | Rời rạc, DSA, thuật toán, đồ thị: tự lập luận/cài/test bài mới |
| Architecture and Organization | Dữ liệu/CPU/bộ nhớ: lần assembly và mô hình cache/mạch |
| Artificial Intelligence | Search, minimax, CSP, xác suất/MDP, ML và deep learning tự chọn |
| Data Management | SQL + DB internals: query, page/buffer, giao dịch/recovery |
| Foundations of Programming Languages | Scope/closure/kiểu/interpreter; compiler/VM tự chọn |
| Graphics and Interactive Techniques | Pixel, biến đổi, tia/camera/shading; renderer nhỏ |
| Human-Computer Interaction | Quan sát tác vụ, prototype, usability và accessibility |
| Mathematical and Statistical Foundations | Rời rạc, đại số, giải tích, xác suất/thống kê |
| Networking and Communication | Mạng theo tầng, quan sát gói tin, socket/framing và lỗi |
| Operating Systems | Process, VM, đồng thời, lưu trữ; xv6 tự chọn |
| Parallel and Distributed Computing | Reduction, locality, pipeline; lỗi/retry/replication; consensus tự chọn |
| Security | Threat modeling, quyền/đầu vào, hashing/encryption, kiểm thử môi trường riêng |
| Society, Ethics, and the Profession | Riêng tư, license, tác động, đọc và báo cáo nghiên cứu |
| Software Development Fundamentals | Nhập môn, C++/OOP/debug, Git, Python và các project |
| Software Engineering | Thiết kế/test/refactor/review/CI, chất lượng và đồ án |
| Specialized Platform Development | Web; đường tự chọn di động/offline và nhúng/simulator |
| Systems Fundamentals | Biểu diễn/build, CPU, process, I/O, pipe và cơ chế hệ thống |

## Tiến độ và migration

Giữ storage khmt-roadmap.progress.v2 và cơ chế migration từ v1 của phiên bản GitHub mới nhất. Schema version 2 giữ checkedTodos, activeTrackId, filterStatus; đọc backup version 1 và 2. Thêm reviewed (Đã học · cần kiểm tra), revisit (Cần ôn), giữ todo/learning/done/deferred. Phiên bản cũ chưa nhận hai trạng thái mới; hãy dùng bản 2.1 để nhập bản sao lưu mới. Những nhiệm vụ không có trong tệp import giữ nguyên trạng thái. Không tự xóa hay đổi dấu tích cũ dù số thứ tự/môn thay đổi.

Lối từ số 0 dùng level bridge, có nhãn riêng thay vì gọi là nâng cao. Tiếp tục học ưu tiên đang học, tiếp tục nhánh tự chọn vừa hoàn thành một ô, rồi cần ôn và phần bắt buộc. Lần mở đầu không có trạng thái chọn debug; có thể chọn nhập môn hoặc môn khác từ Chương trình.

## Phạm vi kiểm chứng

Kiểm tra tự động giữ 355 ID, trạng thái, thứ tự các nền quan trọng, nhóm môn liên tục, nguồn có phạm vi, prompt chứa đầu vào/đầu ra. HTTP 61 mục nguồn phản hồi trong lượt kiểm 06/11/2026, không chứng minh đã đọc và làm hết tài liệu. Một số ghi chú trường đang phát triển, cần đối chiếu giảng viên/tài liệu gốc khi có mâu thuẫn.

Không có tài khoản, đồng bộ tiến độ giữa thiết bị hoặc chấm tự động. Dấu tích là tiến độ tự ghi. Chuyên sâu là chuỗi thực hành khởi đầu có giới hạn, không tuyên bố học xong mọi chuyên môn. Nâng độ sâu theo sản phẩm và bài kiểm tra tiếp theo.

## Tích hợp GitHub

Bắt đầu từ origin/main 1e0ea25, giữ toàn bộ bảy commit đã có cùng docs/guides/exercises/projects. Không thay giao diện 7 track bằng bản một cột cũ. 112 kiểm tra tự động qua, gồm kiểm tra storage v2, DAG, track layout và migration. Các kiểm tra có tên e2e trong repo chủ yếu kiểm logic/mã nguồn; không thay cho thao tác browser thực.
