# Codex re-review M2 sau lượt sửa thứ nhất

Ngày: 2026-11-07. Repository: `C:/Users/XAOXIN/OneDrive/Tài liệu/ChatGPT/LXH/cs-roadmap-deploy`. Nhánh: `feature/cs-syllabus-from-zero`.

**Kết luận: phần lớn finding cũ đã sửa đúng; chưa đóng cổng M2 vì còn lỗi storage thuộc yêu cầu cũ và một suy luận toán chưa được sửa đúng. Chỉ cần một lượt sửa tập trung, không yêu cầu viết lại toàn bộ mẫu.**

## Đã kiểm chứng đạt

Codex chạy lại `npm test`: **122/122 đạt**, 19 suites. Chạy `npm run build`: **thành công**, Vite hoàn tất. Build hiện tại vẫn xây ứng dụng legacy; kết quả đó chưa xác minh Syllabus Reader hoặc luồng tiến độ v3 trong trình duyệt. Build đã sinh lại `public/ROADMAP.md`; không có diff nội dung so với bản tracked khi kiểm tra, chỉ có cảnh báo LF/CRLF.

Review kỹ thuật độc lập xác minh:

- Payload v3 chỉ có version/curriculumId đã bị từ chối; `setItem` không được gọi, tiến độ hiện tại được giữ.
- Sai ID môn authored và tổ hợp lastVisited ghép chéo môn/chương/chủ đề đã bị phát hiện.
- Lỗi `getItem`/`setItem` trên storage truyền tường minh đã được xử lý; import thất bại khi ghi giữ dữ liệu trong bộ nhớ.
- Backup mặc định xác minh, từ chối ghi đè; kiểm tra snapshot thực trả hash `78094dc6ef2f2dbc0a11caa1e04e0f89eb2ae3138a71ea1d5497c79361cb8077`, không có mục thiếu trong các nhóm đối chiếu. Không tạo lại snapshot.
- Nguồn `sources.mjs` đã bỏ `node:fs`; có kiểm tra parity với 42 bản ghi JSON.
- Legacy `src/curriculum`, `src/progress.mjs`, `src/main.jsx` không đổi so với base `ecbece0`.

Về nội dung, nhập môn đã chuyển sang trình tự chương trình → biến/biểu thức → điều khiển → hàm → dãy/chuỗi/bản ghi → I/O và gỡ lỗi; phần dịch/liên kết chi tiết và string_view chuyển thành mở rộng. Chủ đề gỡ lỗi cơ bản có tồn tại. Phần tích phân trong Toán rời rạc đã có mức extension và prerequisite CS-11; cầu nối toán đã bổ sung số phức. Phát biểu xác định duy nhất của truy hồi đã bổ sung điều kiện quan trọng. Các thay đổi này là thực, không chỉ sửa lời báo cáo.

## Những việc còn phải sửa

### 1. [P2] Lấy localStorage ở tham số mặc định vẫn có thể ném SecurityError

Vị trí: `src/syllabus-progress.mjs:297`, tương tự các hàm ở dòng `351`, `359`, `396`, `410`.

Biểu thức `storage = globalThis?.localStorage` chạy trước thân hàm, ngoài try/catch đang bọc getItem/setItem. Nếu trình duyệt chặn truy cập storage ngay tại property getter, hàm Result vẫn ném ngoại lệ. Optional chaining không bắt ngoại lệ của getter.

Ca độc lập đã tái hiện trong tiến trình kiểm tra riêng: định nghĩa getter `globalThis.localStorage` ném lỗi có tên SecurityError, rồi gọi `loadSyllabusProgressV3Result()` không truyền storage; ngoại lệ vẫn thoát ra ngoài.

Yêu cầu: resolve storage trong vùng try/catch bằng một helper dùng chung, thay vì đọc property trong default parameter. Kiểm tra cả load/save/import qua đường gọi mặc định. Các hàm Result phải trả lỗi rõ, import giữ currentProgress và không nhận lưu thành công. Phân biệt hành vi của wrapper tiện dụng với Result, dùng Result an toàn khi tích hợp UI.

### 2. [P2 học thuật] Cận tích phân đang suy ra Theta mà chưa đủ căn cứ

Vị trí: `src/syllabus/courses/discrete-math-part2.mjs:173`; lặp lại trong `REVIEW-PACKET.md:42` và các bản xuất/checkpoint liên quan.

Đoạn hiện tại đưa ra:

`n ln n − n + 1 ≤ ln(n!) ≤ (n+1)ln(n+1) − n`

rồi gọi đó là chứng minh `ln(n!) = n ln n − n + Θ(ln n)`. Hai cận vừa nêu chỉ cho phần dư R(n) nằm giữa 1 và một lượng O(ln n); chúng chưa cho cận dưới Ω(ln n). Ví dụ một phần dư hằng bằng 1 cũng thỏa khoảng cận đó, nên riêng khoảng cận không phân biệt được phần dư hằng và phần dư tăng theo logarit.

Kết quả Theta là đúng với giai thừa, nhưng lập luận đang viện dẫn chưa đủ. Sửa bằng một trong hai cách: ghi kết luận trực tiếp từ cận hình chữ nhật là **O(ln n)**; hoặc bổ sung thật cận dưới theo logarit từ một lập luận mạnh hơn, nêu rõ đó không còn chỉ là hai cận hình chữ nhật đã viết. Không dùng công thức Stirling đầy đủ để chứng minh ngược rồi nói đó là hệ quả trực tiếp của cận hình chữ nhật.

Giữ phần phân biệt công thức Stirling đầy đủ và điều kiện giải tích đã thêm. Sinh lại preview sau khi sửa dữ liệu gốc.

### 3. [P2 quy trình] Mốc M6–M9 vẫn sai so với PLAN dù báo đã đồng bộ

`docs/syllabus-v3/REVIEW-PACKET.md:14–17` hiện ghi M6 là giao diện, M7 xuất Markdown, M8 kiểm định, M9 nghiệm thu trước xuất bản. PLAN gốc thực tế quy định:

- M6: Review nội dung toàn chương trình.
- M7: Website và tiến độ mới.
- M8: Kiểm thử, tài liệu và chuẩn bị phát hành.
- M9: Xuất bản được phép và hậu kiểm.

Chép đúng ý nghĩa này vào tài liệu trạng thái và các con trỏ liên quan; đặc biệt giữ cổng review nội dung toàn chương trình trước việc hoàn tất giao diện/phát hành. Không cần đổi số mốc hoặc sửa PLAN gốc.

### 4. [P3 báo cáo] Số liệu core/extension và ID mô tả chưa khớp tệp thật

Dữ liệu import trực tiếp từ module cho kết quả nhập môn **24 chủ đề = 22 core + 2 extension**. Hai extension thực là `ip-exec-translation-linking-extension` và `ip-seq-string-view-extension`.

Nhưng `CONTENT-REVIEW.md:12–15`, `DESIGN.md:137`, `REVIEW-PACKET.md:41` và phản hồi bàn giao ghi 21 core + 3 extension, mô tả thêm `ip-cf-structured-complexity-extension` và `ip-seq-string-view-lifetime-extension` không tồn tại trong dữ liệu hiện tại.

Sửa báo cáo theo dữ liệu thực. Không cần tạo thêm chủ đề hoặc đổi level của vòng lặp chỉ để đạt con số 3 đã báo; đếm bước vòng lặp đơn giản vẫn phù hợp mức nhập môn.

## Góp ý nội dung nhỏ, xử lý cùng lượt

`intro-programming.mjs:479` nói cần std::ws khi chuyển từ >> sang getline. Làm rõ đây là một lựa chọn khi muốn bỏ mọi whitespace đầu vào, không phải quy tắc bắt buộc cho mọi văn bản. std::ws cũng bỏ dấu cách đầu dòng và các dòng trống; nếu phải giữ chúng, cần chiến lược loại phần còn lại của dòng trước phù hợp. Nguồn chính môn đang dùng cũng phân biệt getline giữ whitespace với getline kết hợp ws bỏ whitespace: [Learn C++ §5.7](https://www.learncpp.com/cpp-tutorial/introduction-to-stdstring/).

Không biến góp ý nhỏ này thành yêu cầu xây thêm chương học. Chỉ sửa phạm vi phát biểu trong đoạn mô tả hiện tại.

## Phạm vi duyệt và bước tiếp theo

Đây là re-review các finding cũ cùng đoạn đã sửa, không phải chứng nhận từng phát biểu trong toàn bộ 64 chủ đề, hoặc nghiệm thu toàn bộ chương trình 50 môn. Chưa kiểm giao diện mới trong trình duyệt vì chưa có phần tích hợp đó.

Sau khi sửa các điểm trên: chạy kiểm tra hồi quy getter storage; chạy toàn bộ kiểm tra; sinh lại preview; cập nhật bảng đối chiếu và trả gói M2 để đóng cổng. Giữ các quyết định Q1=A linh hoạt, Q2=A legacy riêng, Q3=B theo lối đi từ số 0. Chưa nhân rộng hàng loạt hoặc xuất bản GitHub Pages.

## Prompt bàn giao ngắn

```text
Codex đã re-review M2 sau sửa. Phần lớn finding đã sửa đạt, nhưng còn một số điểm cụ thể trước khi đóng cổng.

Đọc toàn bộ báo cáo mới:
C:/Users/XAOXIN/OneDrive/Tài liệu/ChatGPT/LXH/cs-roadmap-deploy/docs/syllabus-v3/CODEX-REREVIEW-M2-2026-11-07.md

Đối chiếu PLAN gốc:
C:/Users/XAOXIN/Documents/Codex/2026-11-06/ki/outputs/PLAN-CS-SYLLABUS-FROM-ZERO-ANTIGRAVITY.md

Sửa tập trung các mục còn lại: getter localStorage ném trước try/catch; cận tích phân chưa đủ suy ra Theta(log n); ý nghĩa M6–M9 chưa đúng PLAN; số lượng core/extension và ID báo cáo chưa khớp dữ liệu. Sửa luôn câu về std::ws theo giới hạn nêu trong báo cáo. Không viết lại toàn bộ mẫu hoặc tạo thêm chủ đề chỉ để khớp số đã báo sai.

Thêm kiểm tra hồi quy getter storage cho các hàm Result/import qua đường mặc định; sửa nội dung gốc rồi sinh lại preview; chạy các kiểm tra phù hợp. Giữ nguyên backup đã xác minh và legacy. Cập nhật REVIEW-PACKET cùng bảng đối chiếu bằng kết quả thật, gửi lại Codex đóng cổng M2. Chưa viết hàng loạt M3–M5, chưa xuất bản GitHub Pages.
```
