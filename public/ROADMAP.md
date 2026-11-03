# Lộ trình KHMT · Chí Tường

27 chặng · 339 nhiệm vụ · phiên bản 1.0

Lộ trình tự học bổ trợ cho sinh viên HCMUS; không thay thế chương trình và yêu cầu tốt nghiệp chính thức.

Đọc từ trên xuống theo thứ tự đề xuất. Phần đã biết có thể tự kiểm tra để đi nhanh. Không phải đợi học hết mới ứng tuyển thực tập.

Khung tham chiếu: [roadmap.sh Computer Science](https://roadmap.sh/computer-science), [CS2023](https://csed.acm.org/knowledge-areas/), [OSSU](https://github.com/ossu/computer-science). Nhiệm vụ và thứ tự được biên soạn riêng; không phải chương trình chính thức của các nguồn này.

## Mục lục

- 01. Củng cố C++ (12 nhiệm vụ)
- 02. Lập trình hướng đối tượng (19 nhiệm vụ)
- 03. Lưu và quản lý mã nguồn (6 nhiệm vụ)
- 04. Project thư viện (7 nhiệm vụ)
- 05. Công cụ, Linux và cách tự học (9 nhiệm vụ)
- 06. Toán rời rạc cho lập trình (12 nhiệm vụ)
- 07. Cấu trúc dữ liệu (19 nhiệm vụ)
- 08. Tư duy và thuật toán cơ bản (23 nhiệm vụ)
- 09. Đồ thị và đường đi (27 nhiệm vụ)
- 10. Truy vấn, chuỗi và tổng hợp DSA (10 nhiệm vụ)
- 11. Đại số tuyến tính, giải tích và xác suất (18 nhiệm vụ)
- 12. Máy tính hoạt động như thế nào (12 nhiệm vụ)
- 13. Hệ điều hành và đồng thời (13 nhiệm vụ)
- 14. Mạng máy tính (12 nhiệm vụ)
- 15. SQL và cơ sở dữ liệu (15 nhiệm vụ)
- 16. Python để làm công cụ và xử lý dữ liệu (10 nhiệm vụ)
- 17. Web và API cho sản phẩm đầu tiên (12 nhiệm vụ)
- 18. Kỹ thuật phần mềm và làm việc nhóm (12 nhiệm vụ)
- 19. Lý thuyết tính toán và ngôn ngữ lập trình (12 nhiệm vụ)
- 20. Bảo mật ứng dụng (10 nhiệm vụ)
- 21. Đồ họa, giao diện và khả năng tiếp cận (8 nhiệm vụ)
- 22. Nền tảng AI và Machine Learning (16 nhiệm vụ)
- 23. Hệ phân tán và thiết kế hệ thống (12 nhiệm vụ)
- 24. Trách nhiệm nghề nghiệp và đọc nghiên cứu (6 nhiệm vụ)
- 25. Chọn hướng chuyên sâu có căn cứ (7 nhiệm vụ)
- 26. Đồ án lớn có người dùng và bằng chứng (10 nhiệm vụ)
- 27. Thực tập, phỏng vấn và phát triển nghề (10 nhiệm vụ)

## 01. Củng cố C++

### 001 · Tự kiểm tra nền C++

Luyện

**Việc cần làm:**

- Tự viết chương trình nhập một dãy số, tính tổng và tìm phần tử lớn nhất.
- Tách phần tính toán thành hàm; không dùng biến toàn cục.
- Thử dãy rỗng, một phần tử và toàn số âm; quy định cách xử lý dãy rỗng.
- Ghi lại chỗ phải tra cứu. Nếu đã tự làm được, chuyển nhanh qua phần tương ứng bên dưới.

### 002 · Biên dịch và chạy chương trình

Học

**Việc cần làm:**

- Biên dịch một tệp C++ bằng trình biên dịch đang dùng ở trường.
- Phân biệt lỗi biên dịch, lỗi liên kết và lỗi khi chạy bằng ba ví dụ ngắn.
- Bật cảnh báo, chọn chuẩn C++17 và ghi lại lệnh biên dịch vào README.

**Nguồn tham khảo thêm:**

- [LearnCpp — tra đúng bài theo tên chủ đề](https://www.learncpp.com/)

### 003 · Kiểu dữ liệu và biểu thức

Học

**Việc cần làm:**

- Ôn số nguyên, số thực, bool, ký tự và phép ép kiểu.
- Thử chia hai số nguyên rồi so sánh với phép chia số thực.
- Tìm giới hạn kiểu số bằng numeric_limits; giải thích vì sao tràn số nguyên có dấu không phải phép toán an toàn.

### 004 · Điều kiện, vòng lặp và nhập liệu

Luyện

**Việc cần làm:**

- Viết chương trình nhập điểm đến khi người dùng chọn dừng.
- Xử lý nhập chữ vào ô cần số, không để vòng lặp mắc kẹt.
- Thử điểm ở biên 0, 10 và ngoài khoảng; tự viết bảng kết quả mong đợi.

### 005 · Mảng và duyệt chỉ số

Luyện

**Việc cần làm:**

- Viết tìm min, max và đảo mảng bằng vòng lặp.
- Quy định độ dài hợp lệ, xử lý mảng rỗng và một phần tử.
- Tự phát hiện lỗi dùng <= thay cho < ở giới hạn vòng lặp.

### 006 · Hàm và cách truyền tham số

Học

**Việc cần làm:**

- Ôn khai báo, định nghĩa, giá trị trả về và phạm vi của biến.
- So sánh truyền giá trị, tham chiếu và tham chiếu const.
- Viết ba hàm để quan sát khi nào biến bên ngoài bị thay đổi.
- Chọn cách truyền phù hợp cho hàm hoán đổi và hàm chỉ đọc một chuỗi.

### 007 · Tách chương trình thành hàm

Luyện

**Việc cần làm:**

- Viết chương trình quản lý điểm: nhập, tính trung bình, tìm điểm cao nhất.
- Mỗi thao tác nằm trong một hàm; truyền dữ liệu bằng tham số.
- Kiểm tra không có điểm, điểm ngoài khoảng 0–10 và dữ liệu hợp lệ.
- Đọc lại mã và bỏ những đoạn xử lý bị lặp.

### 008 · string và vector

Học

**Việc cần làm:**

- Dùng string để nhập cả họ tên có khoảng trắng.
- Dùng vector để thêm phần tử, duyệt và lấy kích thước.
- Phân biệt chỉ số hợp lệ với vị trí nằm ngoài vector.
- Viết ví dụ làm rõ vì sao không được giữ tham chiếu tới phần tử sau một thao tác có thể cấp phát lại vector.

**Thông tin thêm:**

vector có thể đổi vùng nhớ khi tăng kích thước. Không giả định địa chỉ phần tử luôn giữ nguyên.

**Nguồn tham khảo thêm:**

- [LearnCpp: std::vector](https://www.learncpp.com/cpp-tutorial/introduction-to-stdvector-and-list-constructors/)

### 009 · Con trỏ, tham chiếu và thời gian sống

Học

**Việc cần làm:**

- Vẽ biến, địa chỉ và giá trị mà con trỏ đang trỏ tới trong một ví dụ nhỏ.
- Phân biệt con trỏ null với con trỏ trỏ đến một đối tượng còn sống.
- Giải thích vì sao trả về tham chiếu tới biến cục bộ gây lỗi.
- Viết hàm nhận con trỏ có thể null và xử lý trường hợp null trước khi truy cập.

**Thông tin thêm:**

Thời gian sống là khoảng thời gian đối tượng còn tồn tại và được phép sử dụng. Tránh truy cập đối tượng đã bị hủy.

### 010 · Tìm lỗi bằng debugger

Luyện

**Việc cần làm:**

- Đặt breakpoint trong chương trình quản lý điểm.
- Chạy từng bước, quan sát biến và xem thứ tự các hàm được gọi.
- Cố ý tạo lỗi lệch một chỉ số rồi tìm dòng đầu tiên gây sai.
- Bật cảnh báo trình biên dịch và sửa các cảnh báo liên quan đến mã của mình.

### 011 · Đọc, ghi tệp và kiểm tra lỗi

Học

**Việc cần làm:**

- Dùng ifstream và ofstream để đọc, ghi danh sách tên.
- Kiểm tra mở tệp thành công trước khi xử lý.
- Phân biệt hết dữ liệu với một dòng dữ liệu không hợp lệ.
- Thử đường dẫn không tồn tại và tệp rỗng; thông báo lỗi dễ hiểu.

### 012 · Lưu danh sách sách bằng C++

Áp dụng

**Việc cần làm:**

- Tạo struct Sach gồm mã sách, tên và năm xuất bản.
- Dùng vector<Sach> để thêm, tìm theo mã và hiển thị danh sách.
- Quy định mã sách không trùng và kiểm tra trước khi thêm.
- Lưu rồi đọc lại danh sách từ tệp; thử tên sách có khoảng trắng.


## 02. Lập trình hướng đối tượng

### 013 · Lớp, đối tượng và đóng gói

Học

**Việc cần làm:**

- Chuyển struct Sach thành class với dữ liệu private.
- Phân biệt lớp với hai đối tượng sách có dữ liệu khác nhau.
- Viết phương thức xem thông tin và thay đổi dữ liệu có kiểm tra.
- Giải thích vì sao không để mọi nơi tùy ý sửa mã sách.

### 014 · Viết lớp Sach

Luyện

**Việc cần làm:**

- Tạo hai đối tượng Sach và kiểm tra chúng không dùng chung dữ liệu ngoài ý muốn.
- Chỉ cho đổi tên thành chuỗi không rỗng.
- Viết hàm in thông tin một sách qua giao diện công khai.
- Thử sửa trực tiếp dữ liệu private và đọc thông báo của trình biên dịch.

### 015 · Constructor và khởi tạo đối tượng

Học

**Việc cần làm:**

- Phân biệt khởi tạo thành viên với gán giá trị trong thân constructor.
- Viết constructor có tham số và dùng danh sách khởi tạo.
- Xác định dữ liệu hợp lệ tối thiểu để một cuốn sách được tạo.
- So sánh một đối tượng được khởi tạo đầy đủ với đối tượng phải gọi nhiều setter mới dùng được.

### 016 · Khởi tạo và kiểm tra dữ liệu

Luyện

**Việc cần làm:**

- Viết lớp Ngay với ngày, tháng, năm và phương thức kiểm tra hợp lệ.
- Xét số ngày từng tháng và năm nhuận.
- Thử ngày 29/2 ở năm nhuận và năm không nhuận, ngày 0 và tháng 13.
- Quy định rõ cách chương trình phản hồi khi đầu vào không hợp lệ.

### 017 · const trong thiết kế lớp

Học

**Việc cần làm:**

- Đánh dấu phương thức chỉ đọc bằng const.
- Truyền đối tượng sách vào hàm bằng const Sach&.
- Thử gọi phương thức thay đổi dữ liệu trên đối tượng const và giải thích lỗi.
- Rà lại giao diện lớp: thao tác nào chỉ đọc, thao tác nào thay đổi trạng thái.

### 018 · Quan hệ chứa giữa các lớp

Học

**Việc cần làm:**

- Tạo lớp ThuVien chứa vector<Sach>.
- Đưa việc kiểm tra mã sách trùng vào ThuVien.
- Phân biệt ThuVien chứa Sach với Sach là một loại ThuVien.
- Vẽ sơ đồ lớp đơn giản, ghi rõ đối tượng nào sở hữu danh sách sách.

### 019 · Tổ chức lớp ThuVien

Luyện

**Việc cần làm:**

- Thêm phương thức themSach, timSach và hienThiDanhSach.
- Quy định kết quả khi không tìm thấy mã sách.
- Thử thư viện rỗng, thêm trùng mã và tìm sách sau khi thêm.
- Giữ thao tác nhập từ bàn phím ở ngoài lớp dữ liệu.

### 020 · Kế thừa trong C++

Học

**Việc cần làm:**

- Xét khi nào SinhVien có thể được xem là một Nguoi.
- Khai báo lớp cha, lớp con và kế thừa public.
- Phân biệt quyền truy cập public, protected, private.
- In thông báo để quan sát thứ tự chạy constructor và destructor của lớp cha, lớp con.

**Thông tin thêm:**

Thuộc tính giống nhau chưa đủ để quyết định kế thừa. Xét xem đối tượng lớp con có thể dùng hợp lý ở nơi cần lớp cha hay không.

### 021 · Viết Nguoi và SinhVien

Luyện

**Việc cần làm:**

- Viết Nguoi chứa họ tên; SinhVien bổ sung mã số và điểm.
- Khởi tạo phần Nguoi bằng constructor của lớp cha.
- Thử truy cập các thành viên có quyền khác nhau; giải thích những dòng không biên dịch.
- So sánh với LopHoc chứa danh sách SinhVien và giải thích vì sao đây là quan hệ chứa.

### 022 · Hàm ảo và đa hình

Học

**Việc cần làm:**

- Tạo lớp NhanVien và hai lớp con có cách tính lương khác nhau.
- Gọi tinhLuong qua tham chiếu NhanVien khi có và khi không có virtual.
- Dùng override và thử cố ý viết sai chữ ký để đọc lỗi biên dịch.
- Tìm hiểu vì sao lớp cha cần destructor ảo khi xóa đối tượng con qua con trỏ lớp cha.

**Thông tin thêm:**

Muốn quan sát đa hình lúc chạy, gọi qua con trỏ hoặc tham chiếu lớp cha. Sao chép đối tượng con thành đối tượng lớp cha có thể làm mất phần dữ liệu riêng của lớp con.

### 023 · Tính lương bằng đa hình

Luyện

**Việc cần làm:**

- Viết NhanVienToanThoiGian và NhanVienTheoGio.
- Viết một hàm nhận const NhanVien& và in lương, không kiểm tra loại nhân viên.
- Truyền từng đối tượng con vào cùng hàm và kiểm tra kết quả.
- Thử số giờ bằng 0 và dữ liệu âm; quy định dữ liệu nào bị từ chối.

### 024 · Lớp trừu tượng

Học

**Việc cần làm:**

- Đổi tinhLuong thành hàm thuần ảo.
- Quan sát vì sao không thể tạo trực tiếp đối tượng lớp trừu tượng.
- Phân biệt giao diện chung với cách cài đặt riêng của từng lớp con.
- Chỉ thêm một lớp con mới và kiểm tra hàm in lương chung vẫn dùng được.

### 025 · Quản lý tài nguyên an toàn

Học

**Việc cần làm:**

- Theo dõi constructor và destructor khi đối tượng rời khỏi phạm vi.
- Tìm hiểu RAII: gắn việc giải phóng tài nguyên với thời gian sống của đối tượng.
- Dùng string và vector để lớp tự quản lý dữ liệu mà không tự new/delete.
- Thử sao chép một Sach chỉ chứa string và số; thay đổi bản sao rồi kiểm tra bản gốc.

**Thông tin thêm:**

Khi lớp tự sở hữu con trỏ cấp phát động, sao chép mặc định có thể không đủ an toàn. Dùng string và vector trước; nhiệm vụ tiếp theo sẽ xét sâu hơn quyền sở hữu và sao chép.

**Nguồn tham khảo thêm:**

- [LearnCpp: RAII](https://www.learncpp.com/cpp-tutorial/destructors/)

### 026 · Sao chép và sở hữu dữ liệu

Học

**Việc cần làm:**

- So sánh sao chép một lớp chứa vector với lớp chứa con trỏ tự cấp phát.
- Vẽ hai đối tượng sau phép sao chép mặc định để nhận ra trường hợp cùng trỏ một vùng nhớ.
- Tìm hiểu Rule of Zero; ưu tiên thành viên tự quản lý tài nguyên.

**Thông tin thêm:**

Nếu tự sở hữu vùng nhớ, phải xét destructor, copy constructor và copy assignment cùng nhau; không chỉ thêm destructor.

**Nguồn tham khảo thêm:**

- [LearnCpp — tra đúng bài theo tên chủ đề](https://www.learncpp.com/)

### 027 · unique_ptr và quyền sở hữu

Học

**Việc cần làm:**

- Tạo đối tượng bằng make_unique và quan sát tự hủy khi ra khỏi phạm vi.
- Chuyển quyền sở hữu bằng move; không truy cập con trỏ sau khi đã chuyển.
- Dùng vector<unique_ptr<NhanVien>> để lưu nhiều loại nhân viên; lớp cha có destructor ảo.

### 028 · Nạp chồng toán tử vừa đủ

Luyện

**Việc cần làm:**

- Tìm hiểu Euclid: thay cặp số bằng số thứ hai và số dư đến khi số dư bằng 0 để tìm UCLN.
- Viết lớp PhanSo chuẩn hóa dấu và rút gọn.
- Cài + và ==; thử mẫu bằng 0, phân số âm, hai biểu diễn bằng nhau và giới hạn tránh tràn.

### 029 · Template và thư viện chuẩn

Học

**Việc cần làm:**

- Viết hàm template tìm phần tử lớn hơn trong hai giá trị.
- Dùng sort với comparator đúng; không dùng <= làm điều kiện so sánh nghiêm ngặt.
- Dùng iterator, find và lambda đơn giản trên vector sách.

### 030 · Ngoại lệ và giữ trạng thái hợp lệ

Luyện

**Việc cần làm:**

- So sánh trả mã lỗi với ném ngoại lệ ở thao tác đọc tệp.
- Bắt ngoại lệ ở lớp giao tiếp, không bỏ qua mọi lỗi bằng catch rỗng.
- Thử lỗi giữa một thao tác cập nhật; tránh để dữ liệu thay đổi một nửa.

### 031 · Rà lại thiết kế OOP

Luyện

**Việc cần làm:**

- Rà các lớp Sach, ThuVien và NhanVien: dữ liệu nào đang được bảo vệ đúng chỗ?
- Tìm một quan hệ kế thừa không hợp lý và đổi thành quan hệ chứa nếu cần.
- Tách khai báo lớp vào tệp .h và định nghĩa phương thức vào tệp .cpp.
- Biên dịch toàn bộ chương trình; kiểm tra mỗi tệp có thể được hiểu qua giao diện công khai.


## 03. Lưu và quản lý mã nguồn

### 032 · Tạo kho Git đầu tiên

Học

**Việc cần làm:**

- Khởi tạo Git trong thư mục project thử, không khởi tạo ở thư mục chứa mọi tài liệu cá nhân.
- Tạo .gitignore cho tệp biên dịch và thư mục do công cụ sinh ra.
- Xem git status, thêm đúng tệp nguồn rồi tạo commit đầu tiên.
- Xem lịch sử và đối chiếu những tệp thực sự nằm trong commit.

**Nguồn tham khảo thêm:**

- [Pro Git: Git cơ bản](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)

### 033 · Lưu một thay đổi có chủ đích

Luyện

**Việc cần làm:**

- Sửa một lỗi trong lớp ThuVien.
- Dùng git diff để xem đúng phần thay đổi.
- Tạo commit với thông điệp mô tả lỗi đã sửa.
- Dùng git show để đọc lại thay đổi; không đưa tệp dữ liệu riêng tư vào kho mã.

### 034 · Làm tính năng trên nhánh riêng

Luyện

**Việc cần làm:**

- Tạo nhánh them-tim-kiem và thêm tìm sách theo tên.
- Commit thay đổi, quay lại nhánh chính và quan sát sự khác biệt.
- Gộp nhánh sau khi biên dịch và thử chức năng thành công.
- Tự tạo một xung đột nhỏ trên tệp thử, đọc hai phía và chọn nội dung cần giữ.

### 035 · Remote, GitHub và pull request

Học

**Việc cần làm:**

- Đưa project tự viết lên repository, kiểm tra tệp công khai trước khi push.
- Phân biệt commit cục bộ, push, fetch và pull.
- Mở một pull request từ nhánh tính năng; viết mô tả thay đổi và cách đã thử.

**Nguồn tham khảo thêm:**

- [Pro Git — sách và ví dụ thực hành](https://git-scm.com/book/en/v2)

### 036 · Khôi phục thay đổi bằng Git

Luyện

**Việc cần làm:**

- Trong repository thử, sửa một tệp rồi xem diff trước khi khôi phục.
- Dùng revert để đảo một commit đã chia sẻ; đọc commit đảo ngược.
- Thực hành stash và đọc reflog; phân biệt thao tác giữ lịch sử với viết lại lịch sử.

### 037 · Đọc và góp ý mã của người khác

Luyện

**Việc cần làm:**

- Chọn một thay đổi nhỏ trong project nhóm hoặc repository luyện tập.
- Đọc yêu cầu, diff và chạy thử trước khi góp ý.
- Viết nhận xét có tình huống gây lỗi và đề xuất sửa; xử lý phản hồi bằng một commit rõ ràng.


## 04. Project thư viện

### 038 · Chốt phiên bản thư viện đầu tiên

Áp dụng

**Việc cần làm:**

- Viết danh sách chức năng: thêm sách, tìm sách, mượn, trả, lưu và đọc dữ liệu.
- Quy định một mã sách đại diện cho một bản sách vật lý.
- Quy định chưa hỗ trợ đăng nhập, nhiều người dùng cùng lúc hoặc cơ sở dữ liệu.
- Viết năm tình huống sử dụng, trong đó có mượn sách đã được mượn.

### 039 · Dựng dữ liệu và quy tắc mượn trả

Áp dụng

**Việc cần làm:**

- Bổ sung DocGia và PhieuMuon; mỗi phiếu ghi mã sách, mã độc giả, ngày mượn và trạng thái trả.
- Đưa thao tác mượn trả vào ThuVien; kiểm tra sách và độc giả tồn tại.
- Không cho cùng một bản sách có hai phiếu mượn đang hoạt động.
- Giữ quy tắc nghiệp vụ độc lập với menu nhập xuất.

### 040 · Làm menu dùng được

Áp dụng

**Việc cần làm:**

- Tạo menu để thêm sách, đăng ký độc giả, tìm kiếm, mượn và trả.
- Xử lý lựa chọn không hợp lệ mà không làm chương trình bị lặp vô hạn.
- Nhập được tên có khoảng trắng và quay lại menu sau mỗi thao tác.
- Thử một lượt từ mở chương trình đến thêm sách, mượn rồi trả.

### 041 · Lưu và khôi phục dữ liệu thư viện

Áp dụng

**Việc cần làm:**

- Chọn định dạng tệp đơn giản và mô tả cách phân tách các trường.
- Lưu sách, độc giả và phiếu mượn; đọc lại đúng quan hệ giữa các mã.
- Khi dữ liệu hỏng, báo dòng lỗi; không âm thầm ghi đè tệp gốc.
- Đóng và mở lại chương trình, kiểm tra sách đang mượn vẫn giữ đúng trạng thái.

### 042 · Thử những trường hợp dễ hỏng

Luyện

**Việc cần làm:**

- Lập bảng đầu vào và kết quả mong đợi cho thêm, tìm, mượn, trả.
- Thử mã trùng, mã không tồn tại, mượn hai lần và trả hai lần.
- Thử thư viện rỗng, tệp không tồn tại, tệp hỏng và tên có dấu.
- Sửa từng lỗi, chạy lại tình huống đã gây lỗi rồi commit thay đổi.

### 043 · Hoàn thiện để người khác chạy được

Áp dụng

**Việc cần làm:**

- Viết README: yêu cầu trình biên dịch, lệnh biên dịch, cách chạy và dữ liệu mẫu.
- Tách tệp nguồn, dữ liệu mẫu và tệp do chương trình sinh ra.
- Nhờ một người làm theo README hoặc tự thử từ thư mục sao chép sạch.
- Ghi giới hạn hiện tại và một quyết định thiết kế có lý do cụ thể.

### 044 · Tự sửa project khi yêu cầu thay đổi

Luyện

**Việc cần làm:**

- Thêm tìm kiếm sách theo một phần tên mà không phá chức năng tìm theo mã.
- Tự lần theo đường đi từ menu tới dữ liệu trước khi sửa.
- Chạy lại bảng tình huống kiểm thử và đọc git diff trước khi commit.
- Ghi lại phần còn yếu để ôn; tiếp tục công cụ, toán rời rạc rồi cấu trúc dữ liệu.


## 05. Công cụ, Linux và cách tự học

### 045 · Làm việc bằng dòng lệnh

Học

**Việc cần làm:**

- Dùng PowerShell hiện tại hoặc một môi trường Linux học tập; không cần đổi hệ điều hành chính.
- Di chuyển thư mục, liệt kê tệp và dùng đường dẫn có khoảng trắng.
- Xem trợ giúp một lệnh, kiểm tra thư mục hiện tại trước thao tác với tệp.

**Nguồn tham khảo thêm:**

- [MIT Missing Semester — công cụ lập trình](https://missing.csail.mit.edu/)

### 046 · Lọc và ghép dữ liệu văn bản

Luyện

**Việc cần làm:**

- Tạo tệp log giả chứa thời điểm, mức lỗi và thông điệp.
- Lọc các dòng lỗi, đếm và sắp xếp nhóm thông điệp bằng công cụ dòng lệnh.
- Lưu kết quả vào tệp mới và so sánh với việc tính bằng chương trình C++.

### 047 · Tiến trình và quyền trên Linux

Học

**Việc cần làm:**

- Trong môi trường Linux học tập, xem tiến trình của một chương trình do mình mở.
- Phân biệt quyền đọc, ghi và chạy trên tệp, thư mục.
- Thử cấp quyền tối thiểu cho tệp thử; dừng đúng tiến trình của mình bằng tín hiệu thông thường.

### 048 · Tự động hóa việc build C++

Áp dụng

**Việc cần làm:**

- Viết CMakeLists cho project thư viện nhiều tệp.
- Build ở thư mục riêng, cấu hình Debug và chạy debugger.
- Xóa riêng thư mục build thử rồi build lại từ mã nguồn; ghi hướng dẫn tái lập.

### 049 · Tìm lỗi bộ nhớ bằng công cụ

Luyện

**Việc cần làm:**

- Chạy chương trình thử dưới AddressSanitizer và UndefinedBehaviorSanitizer nếu bộ công cụ hỗ trợ.
- Cố ý tạo truy cập vượt mảng trong tệp thử rồi đọc vị trí được báo.
- Sửa nguyên nhân và chạy lại; không chỉ tắt cảnh báo.

### 050 · Đo trước khi tối ưu

Luyện

**Việc cần làm:**

- Chọn thao tác tìm sách và tạo ba kích thước dữ liệu tăng dần.
- Dùng đồng hồ đo hoặc profiler, lặp nhiều lần và ghi cấu hình máy.
- Tách thời gian đọc tệp khỏi thời gian tìm kiếm; ghi kết luận trong giới hạn phép đo.

### 051 · Đọc tài liệu kỹ thuật tiếng Anh

Luyện

**Việc cần làm:**

- Chọn tài liệu của vector hoặc Git, đọc một mục ngắn.
- Ghi ý nghĩa của tham số, kết quả trả về và một điều kiện dễ dùng sai.
- Viết ví dụ chạy được từ tài liệu; ghi lại từ mới trong ngữ cảnh, không chép cả trang.

### 052 · Dùng AI mà vẫn tự kiểm soát mã

Luyện

**Việc cần làm:**

- Tự giải một bài trước, rồi yêu cầu AI nhận xét một lỗi cụ thể.
- Kiểm chứng đề xuất bằng tài liệu và ca kiểm thử do mình nghĩ ra.
- Đóng câu trả lời, tự sửa lại mã và giải thích từng phần; không gửi khóa hay dữ liệu riêng tư.

### 053 · Tạo nhịp học và ôn lại

Áp dụng

**Việc cần làm:**

- Chọn vài buổi học cố định phù hợp lịch môn trên trường.
- Sau mỗi nhóm nhiệm vụ, giải lại một bài cũ không nhìn lời giải.
- Lưu nhật ký lỗi gồm tình huống, nguyên nhân và cách sửa; dùng lỗi lặp lại để chọn phần cần ôn.


## 06. Toán rời rạc cho lập trình

### 054 · Mệnh đề và phép suy luận

Học

**Việc cần làm:**

- Lập bảng chân trị cho AND, OR, NOT và kéo theo.
- Phân biệt mệnh đề đảo, phản đảo và tương đương.
- Biến một điều kiện kiểm tra dữ liệu thành biểu thức logic rồi thử phản ví dụ.

**Nguồn tham khảo thêm:**

- [MIT 6.042J — giáo trình và bài tập toán rời rạc](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/)

### 055 · Lượng từ và phủ định

Luyện

**Việc cần làm:**

- Viết phát biểu mọi phần tử dương và có ít nhất một phần tử dương bằng lượng từ.
- Phủ định đúng hai phát biểu trên.
- Tìm ví dụ cho thấy đổi thứ tự với mọi và tồn tại có thể đổi ý nghĩa.

### 056 · Tập hợp, hàm và quan hệ

Học

**Việc cần làm:**

- Làm bài hợp, giao, hiệu và tích Descartes trên tập hữu hạn.
- Phân biệt đơn ánh, toàn ánh và song ánh bằng ví dụ.
- Nhận diện quan hệ tương đương và thứ tự bộ phận trong bài toán nhóm dữ liệu.

### 057 · Chứng minh và phản ví dụ

Học

**Việc cần làm:**

- Viết một chứng minh trực tiếp và một chứng minh phản chứng ngắn.
- Bác bỏ một mệnh đề sai bằng phản ví dụ nhỏ nhất tìm được.
- Ghi giả thiết trước mỗi lập luận; không coi thử nhiều ví dụ là chứng minh.

### 058 · Quy nạp toán học

Luyện

**Việc cần làm:**

- Chứng minh tổng các số từ 1 đến n bằng quy nạp.
- Viết rõ cơ sở, giả thiết và bước chuyển.
- Áp dụng quy nạp mạnh để chứng minh một tính chất của cách phân rã số nguyên.

### 059 · Bất biến vòng lặp

Học

**Việc cần làm:**

- Xác định điều luôn đúng trước mỗi vòng của thuật toán tìm max.
- Kiểm tra khởi đầu, bảo toàn và kết thúc.
- Viết bất biến cho thao tác chèn vào đoạn đã sắp xếp; nối nó với tính đúng thuật toán.

### 060 · Quy tắc đếm và tổ hợp

Học

**Việc cần làm:**

- Phân biệt quy tắc cộng, nhân, hoán vị, chỉnh hợp và tổ hợp.
- Đếm số chuỗi và số cách chọn nhóm khi có hoặc không xét thứ tự.
- Đối chiếu kết quả bằng liệt kê với tập nhỏ.

### 061 · Nguyên lý bồ câu và bao hàm loại trừ

Luyện

**Việc cần làm:**

- Chứng minh một bài trùng số dư bằng nguyên lý bồ câu.
- Đếm hợp của hai rồi ba tập có phần giao.
- Tự tạo ví dụ cho thấy cộng số lượng từng tập sẽ đếm trùng.

### 062 · Chia hết, UCLN và số học modulo

Học

**Việc cần làm:**

- Tự cài Euclid và giải thích vì sao số dư giảm.
- Học cộng, nhân, lũy thừa modulo; xét tràn khi nhân.
- Phân biệt phép chia thông thường với nghịch đảo modulo và điều kiện tồn tại.

### 063 · Tổng và truy hồi

Học

**Việc cần làm:**

- Tính tổng cấp số cộng, cấp số nhân và tổng log đơn giản.
- Vẽ cây truy hồi cho T(n)=2T(n/2)+n ở kích thước là lũy thừa của 2.
- So sánh với đếm thao tác thực tế; ghi điều kiện khi dùng một công thức truy hồi.

### 064 · Ngôn ngữ của cây và đồ thị

Học

**Việc cần làm:**

- Phân biệt đỉnh, cạnh, đường đi, chu trình, liên thông và bậc.
- Phân biệt đồ thị có hướng, vô hướng, có trọng số.
- Chứng minh cây n đỉnh có n−1 cạnh bằng một cách phù hợp.

### 065 · Giải bài toán rời rạc có lập luận

Luyện

**Việc cần làm:**

- Chọn một bài logic, một bài đếm và một bài quy nạp trong bộ bài tập MIT.
- Tự giải trước khi xem đáp án, ghi điểm còn thiếu trong lập luận.
- Sửa lời giải để người khác kiểm tra được từng bước.

**Nguồn tham khảo thêm:**

- [MIT 6.042J — giáo trình và bài tập toán rời rạc](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/)


## 07. Cấu trúc dữ liệu

### 066 · Big-O, Theta và chi phí bộ nhớ

Học

**Việc cần làm:**

- Đếm thao tác của vòng lặp tuyến tính, lồng nhau và nhân đôi biến.
- Phân biệt chặn trên với chặn chặt; nêu trường hợp tốt, xấu khi liên quan.
- Ước lượng bộ nhớ của mảng và bảng n×n trước khi cài đặt.

**Nguồn tham khảo thêm:**

- [MIT 6.006 — bài giảng và bài tập thuật toán](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)

### 067 · Mảng động và chi phí khấu hao

Luyện

**Việc cần làm:**

- Mô phỏng mảng tự tăng dung lượng theo hệ số 2.
- Theo dõi tổng số phần tử đã sao chép sau nhiều lần thêm.
- Phân biệt chi phí một lần thêm xấu nhất với chi phí khấu hao; so sánh với vector.

### 068 · Danh sách liên kết đơn

Học

**Việc cần làm:**

- Vẽ các nút và con trỏ trước, sau khi chèn hoặc xóa.
- Cài thêm đầu, tìm và xóa theo giá trị.
- Xử lý danh sách rỗng, xóa đầu và xóa phần tử cuối; giải phóng mọi nút.

### 069 · Sửa danh sách không mất nút

Luyện

**Việc cần làm:**

- Cài đảo danh sách liên kết tại chỗ.
- Thử 0, 1, 2 và nhiều nút.
- Dùng công cụ kiểm tra bộ nhớ; ghi rõ đối tượng nào sở hữu và hủy từng nút.

### 070 · Stack và LIFO

Học

**Việc cần làm:**

- Cài push, pop, top bằng vector.
- Quy định hành vi khi lấy từ stack rỗng.
- Dùng stack kiểm tra dấu ngoặc; giải thích vì sao thứ tự vào sau ra trước phù hợp.

### 071 · Queue, deque và hàng đợi vòng

Học

**Việc cần làm:**

- Cài hàng đợi vòng bằng mảng có giới hạn.
- Phân biệt trạng thái rỗng và đầy khi đầu trùng cuối.
- Thử nhiều lần thêm, lấy vượt một vòng; so sánh queue với deque.

### 072 · Chọn stack hay queue

Luyện

**Việc cần làm:**

- Làm bài kiểm tra ngoặc và mô phỏng hàng chờ phục vụ.
- Giải CSES Nearest Smaller Values sau khi tự nghĩ cách duyệt vét cạn.
- Dùng stack đơn điệu và giải thích vì sao mỗi phần tử bị lấy ra nhiều nhất một lần.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 073 · Bảng băm và va chạm

Học

**Việc cần làm:**

- Tự cài bảng băm chuỗi với phương pháp nối chuỗi xử lý va chạm.
- Phân biệt khóa bằng nhau với hai khóa có cùng giá trị băm.
- Quan sát hệ số tải; phân biệt chi phí kỳ vọng với xấu nhất.

### 074 · Đếm và tra cứu bằng bảng băm

Luyện

**Việc cần làm:**

- Viết đếm tần suất từ và tìm hai số có tổng cho trước.
- Thử khóa lặp, không có đáp án và dữ liệu toàn giống nhau.
- So sánh unordered_map với map và nêu lý do chọn cho từng bài.

### 075 · Đệ quy và ngăn xếp lời gọi

Học

**Việc cần làm:**

- Viết giai thừa và tổng mảng bằng đệ quy với điều kiện dừng rõ.
- Vẽ từng lời gọi và giá trị trả về cho đầu vào nhỏ.
- Đổi sang vòng lặp; xét giới hạn độ sâu thay vì mặc định đệ quy luôn an toàn.

### 076 · Sinh cấu hình bằng đệ quy

Luyện

**Việc cần làm:**

- Sinh mọi chuỗi nhị phân độ dài n nhỏ.
- Giải CSES Tower of Hanoi và kiểm tra số bước.
- Giải thích chi phí theo số kết quả cần sinh.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 077 · Cây nhị phân và các kiểu duyệt

Học

**Việc cần làm:**

- Biểu diễn nút, con trái, con phải; phân biệt chiều cao với độ sâu.
- Cài preorder, inorder, postorder bằng đệ quy; vẽ thứ tự trên cùng một cây.
- Thử cây rỗng và cây lệch; tính chi phí theo số nút và chiều cao.

### 078 · Cây tìm kiếm nhị phân

Học

**Việc cần làm:**

- Cài tìm, chèn và xóa trong BST.
- Xử lý ba trường hợp xóa nút không con, một con và hai con.
- Chèn dãy tăng để quan sát BST thường có thể trở thành danh sách.

### 079 · Duy trì bất biến BST

Luyện

**Việc cần làm:**

- Viết kiểm tra BST bằng giới hạn dưới và trên.
- Tạo chuỗi chèn, xóa ngẫu nhiên và đối chiếu với std::set.
- Quy định cách xử lý khóa trùng; không chỉ kiểm tra cha với con trực tiếp.

### 080 · AVL và cây cân bằng

Học

**Việc cần làm:**

- Theo dõi hệ số cân bằng, phép xoay trái và phải của AVL.
- Tự cài chèn AVL rồi kiểm tra thứ tự inorder và chiều cao.
- Đọc vai trò của cây đỏ đen, B-tree và B+tree; chưa cần tự cài mọi biến thể.

**Nguồn tham khảo thêm:**

- [MIT 6.006 — bài giảng và bài tập thuật toán](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)

### 081 · Heap và hàng đợi ưu tiên

Học

**Việc cần làm:**

- Cài sift-up, sift-down, push và pop trên mảng.
- Phân biệt heap với một mảng đã sắp xếp.
- Tạo min-heap bằng priority_queue và kiểm tra phần tử trùng.

### 082 · Giữ phần tử tốt nhất bằng heap

Luyện

**Việc cần làm:**

- Giải bài giữ k phần tử lớn nhất của luồng dữ liệu.
- So sánh heap kích thước k với sắp xếp toàn bộ.
- Thử k=1, k=n và quy định đầu vào k không hợp lệ.

### 083 · Trie cho tiền tố chuỗi

Học

**Việc cần làm:**

- Cài thêm từ, kiểm tra từ đầy đủ và tìm tiền tố.
- Phân biệt nút kết thúc từ với nút chỉ biểu diễn tiền tố.
- Ước lượng bộ nhớ; quy định bảng chữ cái thay vì giả định mọi chuỗi Unicode là a–z.

### 084 · Nâng cấp tra cứu thư viện

Áp dụng

**Việc cần làm:**

- Lập chỉ mục mã sách bằng bảng băm và tra cứu tiền tố bằng trie với tập ký tự đã chọn.
- So sánh kết quả với cách duyệt tuyến tính ban đầu.
- Đo tốc độ, bộ nhớ và chi phí cập nhật; giữ cách đơn giản nếu chưa có lợi ích rõ.


## 08. Tư duy và thuật toán cơ bản

### 085 · Tìm kiếm tuyến tính và nhị phân

Học

**Việc cần làm:**

- Viết tìm tuyến tính rồi tìm nhị phân trên mảng đã sắp xếp.
- Chọn một quy ước đoạn tìm kiếm và giữ nhất quán.
- Tìm phần tử đầu >=x, thử mảng rỗng và mọi phần tử bằng nhau.

### 086 · Tìm kiếm nhị phân trên đáp án

Luyện

**Việc cần làm:**

- Giải CSES Factory Machines bằng hàm kiểm tra đơn điệu.
- Chứng minh vì sao thời gian lớn hơn không làm điều kiện đang đúng thành sai.
- Chọn giới hạn trên, tránh tràn tổng sản lượng và thử đáp án ở biên.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 087 · Insertion sort

Học

**Việc cần làm:**

- Cài cách chèn phần tử tiếp theo vào đoạn đầu đã sắp xếp.
- Viết bất biến của đoạn đã sắp, đếm phép dịch khi mảng tăng và giảm.
- Kiểm tra tính ổn định bằng các bản ghi có khóa bằng nhau.

### 088 · Selection sort

Học

**Việc cần làm:**

- Mỗi lượt chọn phần tử nhỏ nhất của đoạn chưa sắp và đưa về đầu.
- Đếm số so sánh, hoán đổi rồi so với insertion sort.
- Tự tạo ví dụ làm thay đổi thứ tự hai bản ghi cùng khóa để xét tính ổn định.

### 089 · Bubble sort

Học

**Việc cần làm:**

- Cài so sánh hai phần tử kề nhau và đổi chỗ khi sai thứ tự.
- Thêm cờ dừng sớm nếu cả lượt không đổi chỗ.
- Chứng minh sau một lượt phần tử lớn nhất của đoạn chưa xử lý về cuối; so trường hợp tốt và xấu.

### 090 · Merge sort và chia để trị

Học

**Việc cần làm:**

- Viết bước trộn hai đoạn đã sắp xếp trước khi ghép toàn thuật toán.
- Giải thích tính đúng qua hai nửa và bước trộn.
- Tính thời gian, bộ nhớ phụ; thử n lẻ và nhiều phần tử trùng.

### 091 · Quicksort

Học

**Việc cần làm:**

- Cài partition, kiểm tra chỉ số và điều kiện dừng.
- Tạo dữ liệu làm chọn pivot kém hiệu quả; xét chọn pivot ngẫu nhiên.
- Giải thích vì sao thời gian xấu nhất có thể là O(n²), không chỉ ghi mức trung bình O(n log n).

### 092 · Heapsort

Học

**Việc cần làm:**

- Xây max-heap rồi lần lượt đưa phần tử lớn nhất về cuối mảng.
- Thu nhỏ vùng heap và phục hồi bất biến sau mỗi lần lấy.
- So tính ổn định, bộ nhớ và thời gian với merge sort, quicksort.

### 093 · Kiểm chứng thuật toán sắp xếp

Luyện

**Việc cần làm:**

- Sinh dữ liệu nhỏ, so kết quả từng cách với std::sort.
- Thử rỗng, tăng, giảm, trùng và giá trị cực biên.
- Giải CSES Distinct Numbers; tách lỗi thuật toán khỏi lỗi nhập xuất.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 094 · Prefix sum và mảng hiệu

Học

**Việc cần làm:**

- Xây tổng tiền tố để trả lời tổng một đoạn.
- Dùng mảng hiệu cho nhiều cập nhật đoạn rồi khôi phục giá trị.
- Viết rõ chỉ số 0 hay 1; thử đoạn một phần tử và toàn mảng.

### 095 · Hai con trỏ và cửa sổ trượt

Học

**Việc cần làm:**

- Giải bài hai số có tổng cho trước trên mảng đã sắp xếp.
- Theo dõi một cửa sổ không có phần tử lặp.
- Nêu điều kiện khiến con trỏ chỉ cần đi một chiều; không dùng cửa sổ tổng dương cho dữ liệu âm tùy tiện.

### 096 · Bài tập tổng và cửa sổ

Luyện

**Việc cần làm:**

- Giải CSES Sum of Two Values, Playlist và Static Range Sum Queries.
- Viết vét cạn cho n nhỏ để đối chiếu.
- Với mỗi bài, ghi bất biến và lý do độ phức tạp giảm.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 097 · Quay lui và cắt tỉa

Học

**Việc cần làm:**

- Sinh tập con, hoán vị và lời giải n quân hậu với n nhỏ.
- Phân biệt trạng thái hiện tại với lựa chọn tiếp theo.
- Hoàn tác đúng sau mỗi nhánh; chỉ cắt khi có lý do không thể tạo lời giải hợp lệ.

### 098 · Kiểm tra lời giải quay lui

Luyện

**Việc cần làm:**

- Giải CSES Creating Strings và Chessboard and Queens.
- Tránh sinh lặp khi đầu vào có ký tự trùng.
- So số lời giải với bộ kiểm thử nhỏ tự liệt kê.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 099 · Tham lam và cách chứng minh

Học

**Việc cần làm:**

- Giải bài chọn nhiều khoảng không giao nhau bằng sắp theo thời điểm kết thúc.
- Viết lập luận trao đổi cho lựa chọn đầu tiên.
- Tạo phản ví dụ cho chọn khoảng bắt đầu sớm nhất và chọn khoảng ngắn nhất.

### 100 · Phân biệt tham lam đúng và sai

Luyện

**Việc cần làm:**

- Giải CSES Movie Festival và Ferris Wheel.
- Thử bài đổi tiền với hệ đồng 1,3,4 để thấy tham lam có thể sai.
- Giải thích lựa chọn và chứng minh, không chỉ ghi mã được chấp nhận.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 101 · Trạng thái và chuyển tiếp quy hoạch động

Học

**Việc cần làm:**

- Từ Fibonacci, phân biệt lời giải đệ quy lặp việc với ghi nhớ kết quả.
- Viết trạng thái, cơ sở và quan hệ chuyển cho bài số cách đi cầu thang.
- So top-down với bottom-up và vẽ thứ tự phụ thuộc.

### 102 · Đổi tiền bằng quy hoạch động

Luyện

**Việc cần làm:**

- Giải CSES Minimizing Coins và Coin Combinations I, II.
- Phân biệt đếm thứ tự chọn với đếm tổ hợp.
- Thử tổng bằng 0 và trường hợp không ghép được; dùng modulo khi đề yêu cầu.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 103 · Knapsack 0/1 và nén bộ nhớ

Học

**Việc cần làm:**

- Viết DP hai chiều theo số vật và sức chứa.
- Chuyển sang một chiều, giải thích vì sao duyệt sức chứa giảm cho 0/1.
- Giải CSES Book Shop và thử dữ liệu làm duyệt tăng dùng lại một vật.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 104 · Dãy con chung dài nhất LCS

Học

**Việc cần làm:**

- Định nghĩa trạng thái theo hai tiền tố chuỗi.
- Cài chuyển tiếp khi ký tự cuối giống hoặc khác, khởi tạo chuỗi rỗng.
- Truy vết một dãy con chung; phân biệt subsequence không cần liền nhau với substring liền nhau.

### 105 · Edit distance

Học

**Việc cần làm:**

- Viết DP cho chèn, xóa và thay ký tự với chi phí đã chọn.
- Giải thích mỗi nhánh chuyển và ý nghĩa hàng/cột cơ sở.
- Truy vết một chuỗi thao tác, áp dụng thật để kiểm tra ra đúng chuỗi đích.

### 106 · Dãy con tăng dài nhất LIS

Học

**Việc cần làm:**

- Cài DP O(n²), truy vết một dãy con tăng.
- Sau đó dùng mảng đuôi nhỏ nhất và tìm kiếm nhị phân để đạt O(n log n).
- Thử phần tử trùng, phân biệt tăng nghiêm ngặt với không giảm bằng cách chọn lower_bound/upper_bound đúng.

### 107 · Tự dựng trạng thái DP

Luyện

**Việc cần làm:**

- Giải CSES Grid Paths I, Edit Distance và Increasing Subsequence.
- Tự viết mô tả trạng thái trước khi code.
- Đối chiếu với vét cạn cho dữ liệu nhỏ và giải thích hai bài không dùng chung một trạng thái.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)


## 09. Đồ thị và đường đi

### 108 · Biểu diễn đồ thị trong chương trình

Học

**Việc cần làm:**

- Cài danh sách kề và ma trận kề.
- Đọc đúng cạnh vô hướng hai chiều và cạnh có hướng một chiều.
- So chi phí bộ nhớ trên đồ thị thưa, dày; thử đỉnh cô lập và cạnh trùng.

### 109 · DFS và thành phần liên thông

Học

**Việc cần làm:**

- Viết DFS đệ quy rồi phiên bản dùng stack.
- Đánh dấu đỉnh đã thăm để tránh lặp trên chu trình.
- Đếm thành phần liên thông; xét nguy cơ tràn ngăn xếp với đường rất dài.

### 110 · Duyệt vùng và nối các thành phần

Luyện

**Việc cần làm:**

- Giải CSES Counting Rooms và Building Roads.
- Biến ô lưới hợp lệ thành đỉnh, tự xác định các hướng kề.
- Kiểm tra lưới toàn tường, một phòng và nhiều vùng tách rời.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 111 · BFS và đường đi ít cạnh nhất

Học

**Việc cần làm:**

- Dùng queue duyệt theo từng lớp khoảng cách.
- Lưu đỉnh cha và khôi phục một đường đi.
- Giải thích vì sao đúng khi mỗi cạnh có cùng chi phí, không suy rộng sang trọng số bất kỳ.

### 112 · Tìm đường trên đồ thị không trọng số

Luyện

**Việc cần làm:**

- Giải CSES Message Route và Labyrinth.
- Báo không có đường khi đích chưa được thăm.
- Thử nguồn trùng đích và nhiều đường ngắn nhất.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 113 · Phát hiện chu trình vô hướng

Học

**Việc cần làm:**

- Dùng DFS, bỏ đúng cạnh cha khi xét cạnh quay về đỉnh đã thăm.
- Lưu ID cạnh để không bỏ nhầm cạnh song song.
- Truy vết một chu trình; thử cây, tam giác và đồ thị nhiều thành phần.

### 114 · Phát hiện chu trình có hướng

Học

**Việc cần làm:**

- Dùng ba trạng thái chưa thăm, đang trên đường DFS và đã kết thúc.
- Giải thích vì sao cạnh tới đỉnh đã kết thúc không đủ kết luận có chu trình.
- Truy vết chu trình qua cạnh về đỉnh đang trên đường DFS.

### 115 · Đồ thị hai phía

Học

**Việc cần làm:**

- Tô hai màu bằng BFS trên mọi thành phần.
- Phát hiện cạnh nối hai đỉnh cùng màu, thử tam giác và chu trình chẵn.
- Giải thích quan hệ với chu trình lẻ; cài bài chia nhóm không có hai người xung đột cùng nhóm.

### 116 · Sắp xếp topo trên DAG

Học

**Việc cần làm:**

- Dùng bậc vào và queue cài thuật toán Kahn.
- Phân biệt một thứ tự hợp lệ với thứ tự duy nhất.
- Phát hiện đồ thị có chu trình nếu không lấy ra được đủ đỉnh.

### 117 · Lập lịch phụ thuộc

Luyện

**Việc cần làm:**

- Giải CSES Course Schedule.
- Tạo ví dụ kế hoạch môn học và chỉ ra chu trình yêu cầu lẫn nhau.
- Tính đường dài nhất trên DAG theo thứ tự topo, không áp dụng tùy tiện cho đồ thị có chu trình.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 118 · Khoảng cách và thao tác relax

Học

**Việc cần làm:**

- Khởi tạo nguồn bằng 0, đỉnh chưa tới bằng vô cực.
- Theo dõi thao tác thử đi qua một cạnh để cải thiện khoảng cách.
- Lưu cha khi cập nhật; tránh cộng vào giá trị vô cực gây tràn.

### 119 · Dijkstra

Học

**Việc cần làm:**

- Mô phỏng Dijkstra trên đồ thị có trọng số không âm.
- Cài bằng danh sách kề và min-heap; bỏ bản ghi khoảng cách cũ.
- Giải thích vì sao đỉnh có khoảng cách nhỏ nhất có thể được chốt; tính độ phức tạp.

**Thông tin thêm:**

Dijkstra yêu cầu trọng số cạnh không âm; cạnh âm có thể làm hỏng lập luận chốt khoảng cách.

**Nguồn tham khảo thêm:**

- [MIT 6.006 — bài giảng và bài tập thuật toán](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)

### 120 · Đường đi ngắn nhất với Dijkstra

Luyện

**Việc cần làm:**

- Giải CSES Shortest Routes I.
- Khôi phục đường đi trong phiên bản tự đặt của bài.
- Thử cạnh trọng số 0, cạnh song song và đỉnh không tới được; so với vét cạn trên đồ thị rất nhỏ.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 121 · Bellman–Ford và chu trình âm

Học

**Việc cần làm:**

- Lặp relax các cạnh tối đa n−1 lượt cho đường đi đơn.
- Dùng lượt bổ sung phát hiện chu trình âm đi tới được từ nguồn.
- Phân biệt chu trình âm bất kỳ với chu trình ảnh hưởng đến bài toán đang hỏi.

### 122 · Kiểm tra Bellman–Ford

Luyện

**Việc cần làm:**

- Cài thuật toán, dừng sớm khi một lượt không còn cập nhật.
- Thử cạnh âm không có chu trình âm, chu trình âm tới được và chu trình âm tách khỏi nguồn.
- So với Dijkstra trên đồ thị không âm, chỉ so khi cả hai cùng có điều kiện áp dụng.

### 123 · Floyd–Warshall

Học

**Việc cần làm:**

- Viết DP theo tập đỉnh trung gian đã được phép dùng.
- Cài ba vòng lặp đúng thứ tự, khởi tạo đường chéo và cạnh trùng.
- Giải CSES Shortest Routes II với giới hạn n phù hợp O(n³).

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 124 · Chọn thuật toán đường đi

Luyện

**Việc cần làm:**

- Tự lập bốn dữ liệu: không trọng số, không âm, có cạnh âm, hỏi mọi cặp.
- Chọn BFS, Dijkstra, Bellman–Ford hoặc Floyd theo điều kiện và kích thước.
- Đối chiếu kết quả các thuật toán trên những dữ liệu mà chúng cùng áp dụng.

### 125 · Disjoint Set Union

Học

**Việc cần làm:**

- Cài find và union, nén đường đi và gộp theo kích thước.
- Duy trì số thành phần liên thông khi thêm cạnh.
- Thử gộp hai đỉnh vốn đã cùng tập; phân biệt DSU với cấu trúc lưu đường đi.

### 126 · Cây khung nhỏ nhất MST

Học

**Việc cần làm:**

- Phân biệt cây khung nhỏ nhất với cây đường đi ngắn nhất từ một nguồn.
- Trên đồ thị vô hướng có trọng số, tự liệt kê vài cây khung để so tổng cạnh.
- Hiểu tính chất lát cắt và trường hợp đồ thị không liên thông.

**Thông tin thêm:**

Bài MST tiêu chuẩn ở đây dùng đồ thị vô hướng. Không liên thông thì không có một cây khung phủ toàn bộ, chỉ có rừng khung.

### 127 · Kruskal

Học

**Việc cần làm:**

- Sắp cạnh theo trọng số rồi dùng DSU tránh tạo chu trình.
- Dừng khi có n−1 cạnh hoặc hết cạnh.
- Giải thích tính đúng dựa trên tính chất lát cắt; xét cạnh có cùng trọng số.

### 128 · Prim

Học

**Việc cần làm:**

- Mở rộng tập đỉnh đã thuộc cây bằng cạnh ra ngoài rẻ nhất.
- Cài bằng min-heap và danh sách kề.
- So sánh điều đang được tối thiểu hóa với Dijkstra để tránh dùng nhầm.

### 129 · Đối chiếu Prim và Kruskal

Luyện

**Việc cần làm:**

- Giải CSES Road Reparation bằng cả hai cách.
- Kiểm tra tổng trọng số bằng nhau, dù tập cạnh có thể khác khi không duy nhất.
- Thử đồ thị không liên thông, cạnh âm và chỉ một đỉnh.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 130 · Thành phần liên thông mạnh

Học

**Việc cần làm:**

- Phân biệt đi tới được một chiều với hai chiều.
- Cài Kosaraju bằng hai lượt DFS và đồ thị đảo.
- Co mỗi SCC thành một đỉnh và kiểm tra đồ thị thu được không có chu trình.

**Nguồn tham khảo thêm:**

- [MIT 6.006 — bài giảng và bài tập thuật toán](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)

### 131 · Đường đi Euler

Học

**Việc cần làm:**

- Phân biệt đi qua mỗi cạnh một lần với đi qua mỗi đỉnh một lần.
- Xét điều kiện bậc và liên thông cho đồ thị vô hướng có cạnh.
- Cài Hierholzer với ID cạnh riêng để xử lý cạnh song song.

### 132 · Luồng cực đại và mạng dư

Học

**Việc cần làm:**

- Vẽ luồng, sức chứa và cạnh ngược trong một mạng nhỏ.
- Cài Edmonds–Karp cho kích thước nhỏ; cập nhật cả cạnh thuận và ngược.
- Kiểm tra bảo toàn luồng, giới hạn sức chứa và giá trị lát cắt cuối.

**Nguồn tham khảo thêm:**

- [MIT 6.006 — bài giảng và bài tập thuật toán](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)

### 133 · Bài toán trên cây

Luyện

**Việc cần làm:**

- Tính kích thước cây con và đường kính cây không trọng số.
- Giải CSES Subordinates và Tree Diameter.
- Chọn gốc rõ ràng, tránh đi ngược về cha; thử cây dây và cây hình sao.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 134 · Project tìm đường và nối mạng

Áp dụng

**Việc cần làm:**

- Đọc một đồ thị từ tệp và cho chọn nguồn, đích.
- Hiển thị đường ngắn nhất bằng Dijkstra khi trọng số không âm.
- Thêm chế độ nối tất cả địa điểm bằng MST; giải thích vì sao kết quả phục vụ yêu cầu khác tìm đường.


## 10. Truy vấn, chuỗi và tổng hợp DSA

### 135 · Bitmask và tập con

Học

**Việc cần làm:**

- Dùng phép bit để thêm, xóa, kiểm tra một phần tử trong tập nhỏ.
- Liệt kê tập con và tránh dịch bit quá độ rộng kiểu.
- Giải một bài DP tập con nhỏ rồi nêu vì sao 2^n giới hạn kích thước đầu vào.

### 136 · Fenwick tree

Học

**Việc cần làm:**

- Cài cập nhật một điểm và tổng tiền tố.
- Giải thích lowbit và các đoạn mà một ô quản lý.
- So với prefix sum khi dữ liệu thay đổi nhiều lần.

### 137 · Segment tree

Học

**Việc cần làm:**

- Cài truy vấn min hoặc sum trên đoạn và cập nhật một điểm.
- Viết rõ phần tử trung hòa cho truy vấn ngoài đoạn.
- Giải CSES Dynamic Range Sum Queries, đối chiếu mảng thường trên dữ liệu nhỏ.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)

### 138 · Chọn cấu trúc truy vấn

Luyện

**Việc cần làm:**

- Giải một bài tổng tĩnh và một bài tổng động bằng cách phù hợp.
- Thử đoạn đầu, cuối, một phần tử và nhiều cập nhật cùng điểm.
- Giải thích khi nào prefix sum đơn giản hơn Fenwick hoặc segment tree.

### 139 · KMP và hàm tiền tố

Học

**Việc cần làm:**

- Tính bảng tiền tố bằng tay cho chuỗi có mẫu lặp.
- Cài tìm mọi lần xuất hiện, kể cả các lần chồng lên nhau.
- So kết quả với tìm kiếm vét cạn; xử lý mẫu rỗng theo quy định riêng.

### 140 · Rolling hash và giới hạn va chạm

Học

**Việc cần làm:**

- Cài băm đa thức để so chuỗi con trong một bài thử.
- Phân biệt xác suất va chạm nhỏ với bảo đảm bằng nhau.
- Đối chiếu ký tự thật khi cần kết quả chắc chắn; không dùng rolling hash làm băm mật khẩu.

### 141 · Mã hóa Huffman

Áp dụng

**Việc cần làm:**

- Đếm tần suất ký tự trong tệp thử, xây cây bằng min-heap.
- Sinh bảng mã tiền tố và giải mã lại đúng dữ liệu gốc.
- Tính cả chi phí lưu cây; xử lý tệp rỗng và chỉ có một loại ký tự.

### 142 · Sàng nguyên tố và lũy thừa nhanh

Luyện

**Việc cần làm:**

- Cài sàng Eratosthenes với giới hạn bộ nhớ rõ.
- Cài lũy thừa nhị phân và kiểm tra với phép nhân lặp ở số nhỏ.
- Viết bộ thử cho UCLN, nguyên tố và modulo; chú ý 0, 1 và giá trị lớn.

### 143 · Thuật toán ngẫu nhiên và đo thực nghiệm

Học

**Việc cần làm:**

- Dùng bộ sinh ngẫu nhiên chuẩn với seed được ghi lại để tạo dữ liệu thử.
- So pivot ngẫu nhiên với pivot cố định trong quicksort.
- Phân biệt một lần đo nhanh với lập luận về chi phí kỳ vọng.

### 144 · Tự chọn thuật toán khi không có nhãn

Luyện

**Việc cần làm:**

- Chọn 8 bài chưa làm trong CSES từ nhiều nhóm, giấu tên nhóm khi đọc.
- Với mỗi bài viết ràng buộc, cách vét cạn và hướng tối ưu trước khi code.
- Sau vài ngày giải lại các bài đã xem lời giải; giữ danh sách sai lầm thay vì chỉ đếm bài.

**Nguồn tham khảo thêm:**

- [CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ](https://cses.fi/problemset/)


## 11. Đại số tuyến tính, giải tích và xác suất

### 145 · Vector và hệ phương trình tuyến tính

Học

**Việc cần làm:**

- Biểu diễn một hệ phương trình thành Ax=b.
- Tính tổng vector, nhân vô hướng và giải hệ nhỏ bằng khử Gauss.
- Vẽ hai phương trình hai ẩn để phân biệt vô nghiệm, một nghiệm và vô số nghiệm.

**Nguồn tham khảo thêm:**

- [MIT 18.06 — đại số tuyến tính](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)

### 146 · Không gian vector, cơ sở và hạng

Học

**Việc cần làm:**

- Phân biệt độc lập tuyến tính với hai vector chỉ khác hệ số.
- Tìm cơ sở và số chiều của không gian sinh bởi một bộ vector nhỏ.
- Liên hệ hạng, số ẩn tự do và nghiệm của hệ tuyến tính.

### 147 · Ma trận là một phép biến đổi

Luyện

**Việc cần làm:**

- Viết nhân ma trận và vector bằng C++ trên kích thước nhỏ.
- Dùng ma trận 2×2 để quay hoặc kéo giãn các điểm.
- Thử hai thứ tự nhân khác nhau; giải thích vì sao AB không nhất thiết bằng BA.

### 148 · Trực giao và bình phương tối thiểu

Học

**Việc cần làm:**

- Tính tích vô hướng, độ dài và phép chiếu lên một hướng.
- Khớp một đường thẳng cho vài điểm bằng bình phương tối thiểu.
- Phân biệt nghiệm chính xác với nghiệm làm tổng bình phương sai số nhỏ nhất.

### 149 · Trị riêng, vector riêng và SVD

Học

**Việc cần làm:**

- Kiểm tra Av=λv trên ma trận dễ tính.
- Hiểu trị riêng mô tả hướng biến đổi chỉ bị co giãn.
- Đọc vai trò của SVD trong xấp xỉ hạng thấp; tự tính một ví dụ nhỏ, chưa cần tự cài bộ giải số.

### 150 · Hàm số, giới hạn và liên tục

Học

**Việc cần làm:**

- Ôn hàm mũ, logarit và lượng giác cần cho giải tích.
- Phân biệt giá trị hàm tại điểm với giới hạn tại điểm đó.
- Làm bài giới hạn và xét liên tục cho một hàm từng đoạn.

**Nguồn tham khảo thêm:**

- [MIT 18.01SC — giải tích một biến](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/)

### 151 · Đạo hàm và quy tắc dây chuyền

Học

**Việc cần làm:**

- Giải thích đạo hàm là tốc độ thay đổi cục bộ.
- Tính đạo hàm đa thức, mũ, log và hàm hợp.
- Đối chiếu đạo hàm giải tích với sai phân hữu hạn tại vài điểm không có vấn đề miền xác định.

### 152 · Tích phân và tổng tích lũy

Học

**Việc cần làm:**

- Liên hệ tổng Riemann với diện tích có dấu.
- Tính tích phân cơ bản, dùng định lý cơ bản của giải tích đúng điều kiện.
- Xấp xỉ tích phân bằng chương trình C++ và khảo sát sai số khi tăng số đoạn.

### 153 · Đạo hàm riêng và gradient

Học

**Việc cần làm:**

- Tính gradient của một hàm hai biến.
- Dùng quy tắc dây chuyền cho hàm nhiều lớp đơn giản.
- Vẽ vài đường đồng mức và giải thích hướng tăng nhanh nhất tại một điểm.

**Nguồn tham khảo thêm:**

- [MIT 18.02SC — giải tích nhiều biến](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/)

### 154 · Gradient descent trên hàm nhỏ

Luyện

**Việc cần làm:**

- Tự cài tìm cực tiểu hàm bậc hai bằng gradient descent.
- Thử bước học nhỏ, vừa và quá lớn; ghi diễn biến giá trị hàm.
- Phân biệt điểm dừng với cực tiểu toàn cục trong trường hợp tổng quát.

### 155 · Không gian mẫu và xác suất

Học

**Việc cần làm:**

- Liệt kê không gian mẫu của hai lần tung xúc xắc.
- Tính hợp, giao, xác suất có điều kiện và phân biệt độc lập với xung khắc.
- Kiểm tra kết quả bằng đếm trực tiếp khi các kết quả đồng khả năng.

**Nguồn tham khảo thêm:**

- [MIT 18.05 — xác suất thống kê](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/)

### 156 · Bayes và tỷ lệ nền

Luyện

**Việc cần làm:**

- Giải bài kiểm tra dương tính với số người thực có tình trạng hiếm được cho trước.
- Dựng bảng số lượng thay vì chỉ thay công thức.
- Đổi tỷ lệ nền và quan sát vì sao xác suất sau khi có kết quả thay đổi.

### 157 · Biến ngẫu nhiên, kỳ vọng và phương sai

Học

**Việc cần làm:**

- Viết phân phối của tổng hai xúc xắc.
- Tính kỳ vọng, phương sai và phân biệt biến rời rạc với liên tục.
- Làm ví dụ tuyến tính của kỳ vọng; kiểm tra điều kiện khi cộng phương sai.

### 158 · Bernoulli, nhị thức, Poisson và chuẩn

Học

**Việc cần làm:**

- Ghép từng phân phối với giả thiết tạo dữ liệu phù hợp.
- Tính vài xác suất bằng công cụ hoặc bảng và giải thích đại lượng.
- Không chọn phân phối chỉ vì đồ thị trông giống; kiểm tra miền và tham số.

### 159 · Lấy mẫu, ước lượng và khoảng tin cậy

Học

**Việc cần làm:**

- Phân biệt tổng thể, mẫu, tham số và thống kê mẫu.
- Mô phỏng nhiều mẫu để thấy trung bình mẫu dao động.
- Giải thích khoảng tin cậy theo quy trình lấy mẫu lặp lại, không diễn giải sai một tham số cố định.

### 160 · Kiểm định và kích thước hiệu ứng

Học

**Việc cần làm:**

- Đặt giả thuyết không, giả thuyết đối và mức ý nghĩa cho ví dụ so sánh.
- Phân biệt p-value với xác suất giả thuyết không đúng.
- Báo cả độ lớn khác biệt và độ không chắc chắn; tránh thử nhiều giả thuyết rồi chỉ giữ kết quả đẹp.

### 161 · Tương quan và hồi quy

Luyện

**Việc cần làm:**

- Tạo dữ liệu nhỏ có nhiễu và khớp hồi quy tuyến tính.
- Vẽ phần dư, nhận diện điểm ngoại lệ và quan hệ không tuyến tính.
- Tạo ví dụ một biến thứ ba gây tương quan; không suy ra nhân quả chỉ từ đường hồi quy.

### 162 · Mô phỏng và báo cáo kết quả

Áp dụng

**Việc cần làm:**

- Mô phỏng xác suất một bài đếm hoặc trò chơi xúc xắc bằng C++.
- Ghi seed, số lần thử, kết quả lý thuyết và thực nghiệm.
- Viết một trang giải thích sai khác và giới hạn; sau này chuyển sang Python để vẽ thuận tiện hơn.


## 12. Máy tính hoạt động như thế nào

### 163 · Nhị phân, hexadecimal và phép bit

Học

**Việc cần làm:**

- Đổi số giữa hệ 2, 10 và 16.
- Biểu diễn số nguyên không dấu và số âm bù hai trên số bit cố định.
- Thử AND, OR, XOR, dịch bit trên kiểu unsigned và ghi giới hạn dịch.

**Nguồn tham khảo thêm:**

- [Nand to Tetris — công cụ và project máy tính](https://www.nand2tetris.org/)

### 164 · Số thực dấu phẩy động

Học

**Việc cần làm:**

- Tách phần dấu, mũ và trị trong một biểu diễn minh họa.
- So sánh 0.1+0.2 với 0.3, thử giá trị rất lớn cộng giá trị rất nhỏ.
- Chọn so sánh gần đúng theo độ lớn và ngữ cảnh; không dùng một epsilon cố định cho mọi bài.

### 165 · ASCII, Unicode và UTF-8

Luyện

**Việc cần làm:**

- Xem byte của chuỗi tiếng Việt trong tệp UTF-8.
- Phân biệt byte, code point và ký tự người dùng nhìn thấy.
- Thử đếm string.size trong C++ để thấy vì sao không phải luôn là số chữ hiển thị.

### 166 · Cổng logic và mạch tổ hợp

Học

**Việc cần làm:**

- Lập bảng chân trị cho NAND, AND, OR và XOR.
- Dựng half adder và full adder bằng mô phỏng.
- Kiểm tra mọi đầu vào với số bit nhỏ thay vì chỉ nhìn sơ đồ.

### 167 · Mạch tuần tự và bộ nhớ

Học

**Việc cần làm:**

- Phân biệt mạch tổ hợp với mạch có trạng thái.
- Theo dõi một thanh ghi qua các nhịp clock trong mô phỏng.
- Ghép thanh ghi, bộ chọn và bộ nhớ trong một thiết kế giản lược.

**Nguồn tham khảo thêm:**

- [Nand to Tetris — công cụ và project máy tính](https://www.nand2tetris.org/)

### 168 · CPU thực thi lệnh

Học

**Việc cần làm:**

- Theo dõi chu trình lấy lệnh, giải mã và thực thi trên mô hình đơn giản.
- Phân biệt thanh ghi, ALU, bộ đếm chương trình và RAM.
- Chạy tay chương trình cộng các số, ghi giá trị thanh ghi sau từng bước.

### 169 · Đọc assembly của chương trình C++ nhỏ

Luyện

**Việc cần làm:**

- Biên dịch hàm cộng, vòng lặp và lời gọi hàm sang assembly.
- Nhận ra lệnh nạp, lưu, nhảy có điều kiện và gọi hàm.
- Đối chiếu bản Debug với bản tối ưu; không giả định mỗi dòng C++ ứng với một lệnh máy.

### 170 · Stack, heap và bố trí dữ liệu

Học

**Việc cần làm:**

- Theo dõi biến tự động, vùng cấp phát động và vùng dữ liệu tĩnh trong một chương trình.
- Kiểm tra sizeof của struct có padding.
- Đọc một dãy byte theo big-endian và little-endian; tách quy ước lưu khỏi giá trị số.

### 171 · Phân cấp bộ nhớ và locality

Học

**Việc cần làm:**

- Phân biệt cache CPU, RAM và thiết bị lưu trữ.
- So sánh duyệt mảng liên tiếp với truy cập bước nhảy lớn.
- Liên hệ locality không gian, thời gian với cách tổ chức dữ liệu; đo thay vì suy đoán tốc độ.

### 172 · Pipeline và giới hạn tăng tốc

Học

**Việc cần làm:**

- Mô phỏng các giai đoạn pipeline trên chuỗi lệnh ngắn.
- Nhận diện phụ thuộc dữ liệu và nhánh gây chờ.
- Dùng định luật Amdahl để tính giới hạn khi chỉ tăng tốc một phần chương trình.

### 173 · Ngắt, I/O và ranh giới phần cứng

Học

**Việc cần làm:**

- Theo dõi dữ liệu từ thiết bị đến chương trình ở mức khái niệm.
- Phân biệt polling với interrupt và vai trò DMA.
- Giải thích vì sao chờ I/O khác với CPU đang tính toán.

### 174 · Làm một phần Nand to Tetris

Áp dụng

**Việc cần làm:**

- Hoàn thành các bài mạch cơ bản và ALU bằng công cụ của khóa.
- Chạy bộ kiểm thử đi kèm, sửa từng đầu ra sai.
- Viết chương trình assembly nhỏ trên CPU mô phỏng; ghi liên hệ với C++ đã học.

**Nguồn tham khảo thêm:**

- [Nand to Tetris — công cụ và project máy tính](https://www.nand2tetris.org/)


## 13. Hệ điều hành và đồng thời

### 175 · Kernel, user mode và system call

Học

**Việc cần làm:**

- Phân biệt chương trình ứng dụng với nhân hệ điều hành.
- Theo dõi thao tác mở tệp đi qua system call.
- Quan sát lời gọi hệ thống của chương trình tự viết trong môi trường học tập.

**Nguồn tham khảo thêm:**

- [OSTEP — sách và project hệ điều hành](https://pages.cs.wisc.edu/~remzi/OSTEP/)

### 176 · Tiến trình và không gian địa chỉ

Học

**Việc cần làm:**

- Chạy hai bản cùng chương trình và quan sát PID, bộ nhớ riêng.
- Phân biệt chương trình trên đĩa với tiến trình đang chạy.
- Tìm hiểu tạo tiến trình, exec và wait trong môi trường POSIX.

### 177 · Tạo và chờ tiến trình con

Luyện

**Việc cần làm:**

- Viết chương trình POSIX tạo con, chạy một lệnh đơn giản rồi chờ kết quả.
- Kiểm tra mã kết thúc và xử lý tạo tiến trình thất bại.
- Phân biệt đầu ra có thể xen kẽ với một thứ tự được bảo đảm.

### 178 · Lập lịch CPU

Học

**Việc cần làm:**

- Mô phỏng FCFS, round robin và một thuật toán ưu tiên trên cùng tập tiến trình.
- Tính thời gian chờ, đáp ứng và hoàn tất.
- Thử công việc dài chen với công việc ngắn; giải thích đánh đổi công bằng và thông lượng.

### 179 · Bộ nhớ ảo và phân trang

Học

**Việc cần làm:**

- Dịch địa chỉ ảo sang trang và offset trên ví dụ số nhỏ.
- Phân biệt page table, TLB và page fault.
- Mô phỏng một chính sách thay trang; không đồng nhất cache miss với page fault.

### 180 · Luồng và dữ liệu dùng chung

Học

**Việc cần làm:**

- Tạo hai std::thread, join trước khi kết thúc chương trình.
- Phân biệt vùng dữ liệu chung với stack riêng của mỗi luồng.
- Giải thích vì sao đa luồng không mặc nhiên làm chương trình nhanh hơn.

### 181 · Tái hiện và sửa race condition

Luyện

**Việc cần làm:**

- Tạo ví dụ nhiều luồng tăng một biến chung; coi đây là ví dụ lỗi cần sửa.
- Dùng mutex và lock_guard bảo vệ thao tác.
- Chạy ThreadSanitizer nếu có; không coi một lần cho kết quả đúng là đã hết data race.

### 182 · Mutex, condition variable và semaphore

Học

**Việc cần làm:**

- Phân biệt khóa bảo vệ dữ liệu với tín hiệu thông báo điều kiện.
- Dùng condition_variable cùng predicate để chờ dữ liệu.
- Mô tả vai trò semaphore đếm tài nguyên hữu hạn và so với mutex.

### 183 · Hàng đợi producer–consumer

Luyện

**Việc cần làm:**

- Cài queue có giới hạn cho một nhóm producer và consumer.
- Chờ đúng khi đầy hoặc rỗng, mở khóa khi chờ bằng condition variable.
- Thiết kế cách dừng để mọi luồng thoát, không kẹt khi hết dữ liệu.

### 184 · Deadlock và thứ tự khóa

Học

**Việc cần làm:**

- Tạo sơ đồ chờ của hai tác vụ cần hai tài nguyên.
- Nêu các điều kiện gây deadlock và phân biệt với starvation.
- Sửa bằng thứ tự khóa thống nhất hoặc scoped_lock trên các mutex cần dùng.

### 185 · Tệp, thư mục và độ bền dữ liệu

Học

**Việc cần làm:**

- Phân biệt file descriptor, nội dung tệp và metadata.
- Theo dõi tạo, ghi, đóng, đổi tên tệp.
- Đọc vai trò buffer, flush và journal; không coi đóng chương trình bình thường là mô phỏng đủ mọi sự cố mất điện.

### 186 · Pipe và giao tiếp giữa tiến trình

Luyện

**Việc cần làm:**

- Kết nối đầu ra tiến trình con với đầu vào tiến trình khác bằng pipe.
- Đóng các đầu pipe không dùng để nhận EOF đúng.
- Thử dữ liệu lớn hơn bộ đệm và tránh chờ sai thứ tự gây kẹt.

### 187 · Project shell tối giản

Áp dụng

**Việc cần làm:**

- Viết vòng lặp đọc lệnh, chạy lệnh ngoài bằng tiến trình con và wait.
- Thêm lệnh cd nội bộ và xử lý lệnh không tồn tại.
- Thêm một pipeline hai lệnh sau khi bản cơ bản ổn; ghi giới hạn cú pháp được hỗ trợ.


## 14. Mạng máy tính

### 188 · Tầng mạng và đóng gói dữ liệu

Học

**Việc cần làm:**

- Theo dõi một yêu cầu web qua ứng dụng, vận chuyển, mạng và liên kết.
- Phân biệt thông điệp, segment, packet và frame theo tầng.
- Dùng mô hình TCP/IP làm khung, đối chiếu OSI để đọc tài liệu.

**Nguồn tham khảo thêm:**

- [Computer Networking: A Top-Down Approach — tài nguyên tác giả](https://gaia.cs.umass.edu/kurose_ross/)

### 189 · IP, subnet và định tuyến

Học

**Việc cần làm:**

- Tính phần mạng, phần host của vài địa chỉ IPv4 với CIDR.
- Phân biệt địa chỉ cục bộ, gateway, NAT và địa chỉ công khai.
- Theo dõi lựa chọn tuyến bằng tiền tố dài nhất trên một bảng nhỏ.

### 190 · Ethernet, MAC, ARP và Wi-Fi

Học

**Việc cần làm:**

- Phân biệt địa chỉ MAC trong liên kết với địa chỉ IP dùng định tuyến.
- Theo dõi một máy tìm MAC của gateway bằng ARP.
- Mô tả vì sao thông tin liên kết có thể đổi qua mỗi chặng.

### 191 · DNS từ tên đến địa chỉ

Luyện

**Việc cần làm:**

- Tra bản ghi A, AAAA và CNAME của một tên miền bằng công cụ phù hợp.
- Phân biệt recursive resolver với authoritative server.
- Quan sát cache và TTL; thử tên không tồn tại và giải thích lỗi.

### 192 · UDP và TCP

Học

**Việc cần làm:**

- Phân biệt datagram với luồng byte.
- Theo dõi bắt tay, số thứ tự, ACK, truyền lại và điều khiển luồng.
- Tự tạo ví dụ dữ liệu đến nhiều lần đọc dù phía gửi chỉ gọi send một lần.

### 193 · Độ trễ, băng thông và nghẽn

Học

**Việc cần làm:**

- Tách thời gian truyền, lan truyền, xử lý và xếp hàng.
- Tính thời gian tải tệp trong mô hình có giả thiết rõ.
- Phân biệt điều khiển luồng bảo vệ bên nhận với điều khiển nghẽn bảo vệ mạng.

### 194 · HTTP request và response

Học

**Việc cần làm:**

- Dùng curl xem method, status, header và body.
- So GET, POST, PUT, PATCH và DELETE theo ngữ nghĩa.
- Phân biệt cookie, cache HTTP và kết nối TCP; không giả định một yêu cầu luôn tạo một kết nối mới.

**Nguồn tham khảo thêm:**

- [MDN — học phát triển web](https://developer.mozilla.org/en-US/docs/Learn_web_development)

### 195 · TLS, HTTPS và chứng chỉ

Học

**Việc cần làm:**

- Theo dõi mục đích xác thực máy chủ, bảo mật và toàn vẹn.
- Xem thông tin chứng chỉ của một trang HTTPS hợp lệ.
- Phân biệt HTTPS với bảo đảm nội dung trang luôn đáng tin; không bỏ kiểm tra chứng chỉ để chữa lỗi.

### 196 · Quan sát gói tin của chính mình

Luyện

**Việc cần làm:**

- Dùng Wireshark hoặc công cụ học tập bắt lưu lượng tự tạo được phép.
- Nhận ra DNS, TCP handshake và các trường HTTP khi không mã hóa.
- Với HTTPS, chỉ mô tả phần quan sát được; không thu lưu lượng riêng tư của người khác.

**Nguồn tham khảo thêm:**

- [Computer Networking: A Top-Down Approach — tài nguyên tác giả](https://gaia.cs.umass.edu/kurose_ross/)

### 197 · Socket và đóng khung thông điệp

Học

**Việc cần làm:**

- Viết TCP echo client và server cục bộ bằng C++ trong môi trường phù hợp.
- Xử lý đọc/ghi một phần và kết nối bị đóng.
- Quy định thông điệp kết thúc bằng ký tự phân tách hoặc độ dài; không coi recv là một thông điệp hoàn chỉnh.

### 198 · Dịch vụ tra cứu sách qua mạng

Áp dụng

**Việc cần làm:**

- Cho client gửi mã sách, server trả dữ liệu hoặc lỗi không tồn tại.
- Giới hạn kích thước yêu cầu và xử lý yêu cầu sai định dạng.
- Thử nhiều client, ngắt giữa chừng và timeout; bảo vệ dữ liệu chung nếu dùng nhiều luồng.

### 199 · Chẩn đoán lỗi theo từng tầng

Luyện

**Việc cần làm:**

- Tự tạo lỗi tên miền, cổng không có dịch vụ và HTTP 404 trên môi trường thử.
- Chọn công cụ kiểm tra phù hợp từng tầng.
- Ghi bằng chứng rồi mới sửa; phân biệt không kết nối được với ứng dụng trả lỗi.


## 15. SQL và cơ sở dữ liệu

### 200 · Bảng, khóa và ràng buộc

Học

**Việc cần làm:**

- Biến Sach, DocGia và PhieuMuon thành bảng.
- Chọn khóa chính, khóa ngoại, NOT NULL và UNIQUE theo quy tắc nghiệp vụ.
- Phân biệt NULL với 0 và chuỗi rỗng.

**Nguồn tham khảo thêm:**

- [PostgreSQL — tutorial chính thức](https://www.postgresql.org/docs/current/tutorial.html)

### 201 · SELECT, lọc và sắp xếp

Luyện

**Việc cần làm:**

- Tạo dữ liệu thư viện mẫu bằng SQL.
- Viết WHERE, ORDER BY, LIMIT và phép lọc có NULL.
- Thử dữ liệu trùng và điều kiện biên; không dựa vào thứ tự hàng nếu thiếu ORDER BY.

### 202 · JOIN và quan hệ nhiều bảng

Học

**Việc cần làm:**

- Viết INNER JOIN, LEFT JOIN giữa độc giả và phiếu mượn.
- Tự tính kết quả trên tập nhỏ trước khi chạy.
- Thấy vì sao một hàng có thể xuất hiện nhiều lần do quan hệ một–nhiều.

### 203 · GROUP BY và truy vấn con

Luyện

**Việc cần làm:**

- Thống kê lượt mượn theo sách và độc giả.
- Phân biệt WHERE lọc hàng với HAVING lọc nhóm.
- Viết truy vấn sách chưa được mượn bằng NOT EXISTS; xét tác động của NULL.

### 204 · Mô hình ER và chuẩn hóa

Học

**Việc cần làm:**

- Vẽ quan hệ, lực lượng và thuộc tính cho thư viện.
- Tìm phụ thuộc hàm và ví dụ bất thường khi thêm, sửa, xóa.
- Phân rã tới dạng chuẩn phù hợp như 3NF; kiểm tra không mất thông tin khi nối lại.

### 205 · DDL và thay đổi cấu trúc

Luyện

**Việc cần làm:**

- Tạo schema bằng script thay vì chỉ thao tác tay.
- Thêm cột hoặc ràng buộc trên bản dữ liệu thử.
- Viết migration có bước kiểm tra và phương án quay lại khi phù hợp.

### 206 · Transaction và ACID

Học

**Việc cần làm:**

- Gộp kiểm tra sách và tạo phiếu mượn vào một giao dịch.
- Phân biệt atomicity, consistency, isolation và durability.
- Thử rollback ở giữa thao tác để xác nhận không lưu nửa chừng.

### 207 · Hai người cùng mượn một sách

Luyện

**Việc cần làm:**

- Mở hai phiên kết nối và tạo tình huống cạnh tranh có kiểm soát.
- Quan sát isolation, khóa hàng hoặc ràng buộc giúp ngăn kết quả sai.
- Kiểm tra deadlock hoặc serialization failure và thiết kế thử lại có giới hạn.

**Nguồn tham khảo thêm:**

- [PostgreSQL — tài liệu chi tiết](https://www.postgresql.org/docs/current/)

### 208 · Index và kế hoạch thực thi

Học

**Việc cần làm:**

- So truy vấn theo mã sách trước và sau khi có index.
- Đọc EXPLAIN, rồi EXPLAIN ANALYZE chỉ với câu lệnh thử đã hiểu sẽ thực thi.
- Phân biệt quét tuần tự, quét chỉ mục và chi phí duy trì index khi ghi.

### 209 · Chọn index theo truy vấn

Luyện

**Việc cần làm:**

- Tạo tập dữ liệu đủ lớn để đo có ý nghĩa.
- Thử index ghép với các thứ tự cột và điều kiện lọc khác nhau.
- Ghi thời gian, số hàng và kế hoạch; không thêm index cho mọi cột theo cảm tính.

### 210 · CTE, view và window function

Học

**Việc cần làm:**

- Dùng CTE để chia một truy vấn phức tạp thành bước rõ.
- Dùng ROW_NUMBER và tổng tích lũy theo nhóm.
- Phân biệt window giữ hàng với GROUP BY gom hàng; tạo view cho thống kê lặp lại.

### 211 · Truy vấn có tham số và quyền truy cập

Học

**Việc cần làm:**

- Đọc cách driver gửi giá trị tách khỏi cấu trúc SQL.
- Thử đầu vào chứa dấu nháy trong môi trường cục bộ với truy vấn tham số.
- Tạo tài khoản ứng dụng có quyền tối thiểu; không dùng tài khoản quản trị cho mọi thao tác.

### 212 · Sao lưu phải khôi phục được

Luyện

**Việc cần làm:**

- Tạo bản dump dữ liệu thử và ghi phiên bản công cụ.
- Khôi phục vào cơ sở dữ liệu thử mới, không ghi đè dữ liệu đang dùng.
- So số hàng, ràng buộc và vài truy vấn nghiệp vụ sau khôi phục.

### 213 · Khi nào cân nhắc NoSQL

Học

**Việc cần làm:**

- Phân biệt mô hình key–value, document, graph với quan hệ.
- Thiết kế cùng một yêu cầu theo SQL và một mô hình khác.
- Nêu truy vấn, nhất quán, cập nhật và vận hành cần đánh đổi; không coi NoSQL là luôn nhanh hơn.

### 214 · Chuyển thư viện sang cơ sở dữ liệu

Áp dụng

**Việc cần làm:**

- Thay tệp lưu bằng PostgreSQL qua driver phù hợp.
- Giữ giao diện nghiệp vụ tách khỏi câu SQL.
- Chạy lại ca mượn trả, cạnh tranh và khôi phục; giữ bản sao dữ liệu cũ trước khi chuyển.


## 16. Python để làm công cụ và xử lý dữ liệu

### 215 · Chuyển từ C++ sang Python

Học

**Việc cần làm:**

- Viết lại một bài xử lý danh sách bằng Python.
- So kiểu động, thụt dòng, phép chia và vòng lặp với C++.
- Giữ hiểu biết thuật toán; không học lại toàn bộ nhập môn từ đầu.

**Nguồn tham khảo thêm:**

- [Python — tutorial chính thức](https://docs.python.org/3/tutorial/)

### 216 · List, tuple, dict và set

Luyện

**Việc cần làm:**

- Giải đếm tần suất và nhóm dữ liệu bằng dict.
- Thử hai biến cùng tham chiếu một list, so với bản sao.
- Phân biệt phần tử có thể băm với dữ liệu thay đổi được; không mặc định mọi đối tượng dùng làm khóa.

### 217 · Hàm, module và môi trường ảo

Học

**Việc cần làm:**

- Tách chương trình Python thành module có điểm chạy rõ.
- Tạo venv, cài một thư viện và lưu phiên bản phụ thuộc.
- Thử bẫy đối số mặc định là list thay đổi được, rồi sửa bằng giá trị mặc định phù hợp.

### 218 · Tệp, ngoại lệ, JSON và CSV

Luyện

**Việc cần làm:**

- Đọc dữ liệu thư viện bằng context manager with.
- Bắt đúng lỗi không tìm thấy tệp và sai định dạng.
- Xuất JSON/CSV có tiếng Việt; kiểm tra round-trip đọc lại dữ liệu.

### 219 · Kiểu gợi ý và lớp trong Python

Học

**Việc cần làm:**

- Viết lớp hoặc dataclass cho dữ liệu sách.
- Thêm type hints cho hàm nhận và trả dữ liệu.
- Phân biệt gợi ý kiểu với kiểm tra dữ liệu lúc chạy; không dùng annotation thay validation.

### 220 · Iterator, generator và dữ liệu lớn

Học

**Việc cần làm:**

- Duyệt một tệp theo từng dòng thay vì đọc hết.
- Viết generator lọc bản ghi theo điều kiện.
- So thời gian và bộ nhớ trên dữ liệu tăng dần; giải thích tính lười của generator.

### 221 · Kiểm thử Python bằng pytest

Luyện

**Việc cần làm:**

- Viết test cho hàm đọc và chuẩn hóa bản ghi.
- Dùng tham số hóa cho rỗng, hợp lệ và lỗi.
- Chạy test bằng một lệnh, kiểm tra test thực sự phát hiện phiên bản cố ý sai.

**Nguồn tham khảo thêm:**

- [pytest — hướng dẫn bắt đầu](https://docs.pytest.org/en/stable/getting-started.html)

### 222 · Mảng số với NumPy

Học

**Việc cần làm:**

- Tạo mảng, đọc shape, dtype và chọn lát cắt.
- Viết phép nhân ma trận và phép toán vector hóa.
- Thử broadcasting có hình dạng khác nhau; kiểm tra kết quả bằng ví dụ nhỏ.

**Nguồn tham khảo thêm:**

- [NumPy — tài liệu người mới](https://numpy.org/doc/stable/user/absolute_beginners.html)

### 223 · Đọc và làm sạch dữ liệu bảng

Luyện

**Việc cần làm:**

- Đọc CSV bằng pandas, xem thiếu dữ liệu, trùng và kiểu cột.
- Nhóm, nối bảng và tổng hợp số lượt mượn.
- Không sửa dữ liệu gốc âm thầm; lưu quy tắc làm sạch và báo số hàng bị loại.

**Nguồn tham khảo thêm:**

- [pandas — hướng dẫn nhập môn](https://pandas.pydata.org/docs/getting_started/intro_tutorials/)

### 224 · Báo cáo dữ liệu bằng biểu đồ

Áp dụng

**Việc cần làm:**

- Vẽ lượt mượn theo thời gian và phân bố một đại lượng có ý nghĩa.
- Đặt trục, đơn vị, chú thích và khoảng thời gian rõ.
- Đối chiếu con số trên hình với bảng gốc; xuất một báo cáo ngắn tái tạo được.


## 17. Web và API cho sản phẩm đầu tiên

### 225 · HTML và cấu trúc nội dung

Học

**Việc cần làm:**

- Tạo trang danh sách sách bằng HTML có heading, danh sách và form.
- Gắn label với input, dùng button cho hành động.
- Kiểm tra điền form và đi tới các nút bằng bàn phím.

**Nguồn tham khảo thêm:**

- [MDN — học phát triển web](https://developer.mozilla.org/en-US/docs/Learn_web_development)

### 226 · CSS và bố cục đáp ứng

Luyện

**Việc cần làm:**

- Dùng box model, flex hoặc grid để làm danh sách và bảng chi tiết.
- Thử trên chiều rộng nhỏ, xử lý chữ dài không tràn.
- Đảm bảo tương phản chữ và trạng thái không chỉ phân biệt bằng màu.

### 227 · JavaScript và sự kiện giao diện

Học

**Việc cần làm:**

- Viết biến, hàm, mảng, object và xử lý sự kiện click.
- Đổi trạng thái một nhiệm vụ trên trang bằng thao tác người dùng.
- Đọc lỗi trong console; phân biệt dữ liệu ứng dụng với phần tử giao diện.

### 228 · Gọi API bất đồng bộ

Luyện

**Việc cần làm:**

- Dùng fetch và async/await lấy dữ liệu từ API cục bộ.
- Hiển thị đang tải, rỗng, lỗi và thành công.
- Phân biệt lỗi mạng với phản hồi HTTP lỗi; không mặc định fetch tự ném lỗi cho 404.

### 229 · React vừa đủ để dựng giao diện

Học

**Việc cần làm:**

- Chia danh sách sách và bảng chi tiết thành component.
- Dùng props và state; cập nhật mảng mà không sửa trực tiếp state cũ.
- Đặt key ổn định và chỉ dùng effect khi đồng bộ với hệ thống bên ngoài; không cần học cả hệ sinh thái lúc này.

### 230 · Thiết kế API theo yêu cầu

Học

**Việc cần làm:**

- Liệt kê tài nguyên sách, độc giả và phiếu mượn.
- Viết ví dụ request/response, status và định dạng lỗi cho từng thao tác.
- Quy định phân trang, tìm kiếm và hành vi khi tài nguyên không tồn tại.

### 231 · Dựng API thư viện bằng FastAPI

Áp dụng

**Việc cần làm:**

- Tạo endpoint đọc, tạo, sửa sách với schema kiểm tra dữ liệu.
- Tổ chức router, phần nghiệp vụ và truy cập dữ liệu riêng.
- Xem tài liệu OpenAPI tự sinh và thử cả dữ liệu sai.

**Nguồn tham khảo thêm:**

- [FastAPI — tutorial chính thức](https://fastapi.tiangolo.com/tutorial/)

### 232 · Kết nối API với PostgreSQL

Áp dụng

**Việc cần làm:**

- Dùng driver hoặc ORM phổ biến, học transaction và vòng đời kết nối của công cụ đã chọn.
- Giữ quy tắc mượn trả trong giao dịch đúng ranh giới.
- Không nối trực tiếp chuỗi đầu vào vào SQL; chạy lại bài cạnh tranh.

### 233 · Đăng nhập và phân quyền cơ bản

Học

**Việc cần làm:**

- Theo tutorial bảo mật của framework, dùng thư viện băm mật khẩu phù hợp.
- Phân biệt xác thực ai đang gọi với cho phép họ làm gì.
- Thêm quyền độc giả và quản lý; kiểm tra phía server cho từng thao tác nhạy cảm.

**Thông tin thêm:**

Không tự viết thuật toán mã hóa hoặc lưu mật khẩu dạng rõ. Với cookie, cần xét HttpOnly, Secure, SameSite và bảo vệ CSRF theo mô hình dùng.

**Nguồn tham khảo thêm:**

- [FastAPI — tutorial chính thức](https://fastapi.tiangolo.com/tutorial/)

### 234 · Kiểm tra API như người dùng bên ngoài

Luyện

**Việc cần làm:**

- Thử thiếu trường, sai kiểu, tài nguyên không có và không đủ quyền.
- Kiểm tra giới hạn kích thước, phân trang và thông báo lỗi không lộ chi tiết nội bộ.
- Viết test để người A không sửa hoặc xem phiếu riêng của người B.

### 235 · Ghép giao diện với API

Áp dụng

**Việc cần làm:**

- Thay dữ liệu giả trên trang sách bằng API thật.
- Hiển thị rõ kết quả mượn trả và lỗi từ server.
- Xử lý bấm hai lần và phản hồi đến không đúng thứ tự; không để trạng thái giao diện nói thành công khi giao dịch thất bại.

### 236 · Chạy sản phẩm trên môi trường thử

Áp dụng

**Việc cần làm:**

- Build frontend; triển khai backend và database ở môi trường phát triển được phép.
- Cấu hình biến môi trường, HTTPS và CORS đúng miền cần dùng.
- Kiểm tra từ một trình duyệt sạch; biết GitHub Pages chỉ chứa frontend, không chạy backend Python.


## 18. Kỹ thuật phần mềm và làm việc nhóm

### 237 · Yêu cầu, user story và tình huống biên

Học

**Việc cần làm:**

- Phỏng vấn một người dùng thử về cách họ mượn, trả và tìm sách.
- Chuyển nhu cầu thành yêu cầu quan sát được.
- Ghi các tình huống từ chối và xung đột; phân biệt mong muốn giao diện với quy tắc nghiệp vụ.

### 238 · Chia module theo trách nhiệm

Học

**Việc cần làm:**

- Vẽ luồng từ giao diện qua nghiệp vụ đến kho dữ liệu.
- Đưa phần dễ thay đổi sau một giao diện nhỏ.
- Thử đổi lưu tệp sang database mà không sửa quy tắc mượn trả; không chia lớp chỉ để có nhiều lớp.

### 239 · Dùng UML để giải thích đúng việc

Luyện

**Việc cần làm:**

- Vẽ class diagram cho dữ liệu chính và quan hệ sở hữu.
- Vẽ sequence diagram cho một lượt mượn sách.
- Vẽ state machine cho phiếu mượn; kiểm tra các sơ đồ cùng mô tả một hành vi thống nhất.

### 240 · Design pattern từ vấn đề cụ thể

Học

**Việc cần làm:**

- Dùng Strategy khi có nhiều cách tính phí hoặc sắp xếp thật sự cần thay.
- Dùng Adapter để ghép giao diện cũ với bộ lưu mới.
- Thử dependency injection qua constructor để kiểm thử; không học thuộc tên rồi nhét pattern vào mọi lớp.

### 241 · Unit test kiểm tra quy tắc nghiệp vụ

Luyện

**Việc cần làm:**

- Tách phần nghiệp vụ đủ để chạy test không cần trình duyệt.
- Viết ca sách đã mượn, trả lặp và độc giả không tồn tại.
- Sửa giả một điều kiện để xác nhận test thất bại; coverage cao chưa đủ chứng minh test có ích.

### 242 · Integration test và end-to-end test

Luyện

**Việc cần làm:**

- Viết test API với cơ sở dữ liệu thử được khởi tạo riêng.
- Thêm một luồng người dùng từ đăng nhập tới mượn rồi trả qua giao diện.
- Kiểm tra dọn dữ liệu thử và không chạm dữ liệu thật; giữ test độc lập thứ tự chạy.

### 243 · Refactor có bảo vệ hành vi

Áp dụng

**Việc cần làm:**

- Chọn một hàm dài trong project, ghi hành vi hiện tại bằng test.
- Tách phần tính toán khỏi nhập xuất và xóa mã trùng có thật.
- Chạy test trước, sau; không vừa thay kiến trúc vừa thêm nhiều tính năng trong cùng bước.

### 244 · Tự động kiểm tra mỗi thay đổi

Áp dụng

**Việc cần làm:**

- Tạo GitHub Actions chạy cài phụ thuộc, test và build.
- Thử một nhánh có test hỏng để thấy pipeline chặn đúng.
- Lưu phiên bản phụ thuộc, không in bí mật ra log và không dùng workflow lấy từ nguồn không hiểu.

**Nguồn tham khảo thêm:**

- [GitHub Actions — tài liệu chính thức](https://docs.github.com/en/actions)

### 245 · Container và môi trường tái lập

Học

**Việc cần làm:**

- Phân biệt image, container, volume và máy ảo.
- Đóng gói ứng dụng với Dockerfile tối thiểu, dùng người chạy không đặc quyền khi phù hợp.
- Chạy API cùng database trên môi trường thử; không đóng gói khóa bí mật vào image.

**Nguồn tham khảo thêm:**

- [Docker — hướng dẫn bắt đầu](https://docs.docker.com/get-started/)

### 246 · Log và dấu vết lỗi có ích

Áp dụng

**Việc cần làm:**

- Thêm request ID, mức log và thời điểm cho API.
- Ghi lỗi đủ để chẩn đoán nhưng không log mật khẩu hoặc thông tin riêng tư.
- Theo một request thất bại từ đầu tới transaction; thêm chỉ số độ trễ và tỷ lệ lỗi.

### 247 · Tối ưu theo nút thắt đo được

Luyện

**Việc cần làm:**

- Tạo kịch bản tải nhỏ trên dịch vụ của mình và ghi cấu hình.
- Đo phân vị độ trễ, throughput và số truy vấn database.
- Sửa một nút thắt, đo lại cùng điều kiện; tránh kết luận từ một lần chạy duy nhất.

### 248 · Làm một vòng phát triển theo nhóm

Áp dụng

**Việc cần làm:**

- Tách tính năng thành issue nhỏ, mỗi issue có ví dụ hành vi và cách kiểm tra.
- Chia việc qua nhánh, pull request và review.
- Tổng kết một lỗi phối hợp, cập nhật tài liệu hoặc quy ước để tránh lặp lại.


## 19. Lý thuyết tính toán và ngôn ngữ lập trình

### 249 · Ngôn ngữ hình thức và DFA

Học

**Việc cần làm:**

- Phân biệt bảng chữ cái, chuỗi và tập chuỗi hợp lệ.
- Vẽ DFA nhận chuỗi có số lượng ký tự a chẵn.
- Mô phỏng trên dữ liệu đúng, sai và chuỗi rỗng; không đồng nhất DFA với mọi chương trình.

**Nguồn tham khảo thêm:**

- [MIT 6.045J — tính toán và độ phức tạp](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/)

### 250 · NFA và regular expression

Luyện

**Việc cần làm:**

- Viết regex cho một định dạng đầu vào đơn giản.
- Chuyển NFA nhỏ sang DFA bằng tập trạng thái.
- Đối chiếu các chuỗi được chấp nhận; xét giới hạn của mô hình chính quy.

### 251 · Văn phạm phi ngữ cảnh và PDA

Học

**Việc cần làm:**

- Viết văn phạm cho biểu thức có dấu ngoặc.
- Vẽ cây phân tích và tìm ví dụ mơ hồ.
- Liên hệ stack với việc nhận dấu ngoặc lồng nhau và phân biệt với DFA.

### 252 · Máy Turing và khả năng tính toán

Học

**Việc cần làm:**

- Theo dõi máy Turing đơn giản trên một chuỗi ngắn.
- Phân biệt bài toán quyết định với bài toán tối ưu.
- Đọc ý nghĩa Church–Turing thesis như một luận đề, không coi là định lý chứng minh bằng thử nghiệm.

### 253 · Bài toán không quyết định được

Học

**Việc cần làm:**

- Trình bày phát biểu bài toán dừng với đầu vào chương trình và dữ liệu.
- Đọc một chứng minh phản chứng ở mức phù hợp.
- Phân biệt không có thuật toán tổng quát với không giải được mọi trường hợp cụ thể.

**Nguồn tham khảo thêm:**

- [MIT 6.045J — tính toán và độ phức tạp](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/)

### 254 · P, NP và phép quy dẫn

Học

**Việc cần làm:**

- Phân biệt tìm lời giải với kiểm tra chứng cứ trong thời gian đa thức.
- Giải thích NP-hard và NP-complete; NP không có nghĩa là chắc chắn không đa thức.
- Theo dõi một quy dẫn đơn giản, chú ý đúng chiều quy dẫn; P so với NP vẫn là câu hỏi mở.

### 255 · Khi bài toán không có lời giải nhanh đã biết

Luyện

**Việc cần làm:**

- So tìm đường ngắn nhất với đường Hamilton hoặc TSP.
- Tự giải chính xác trên n nhỏ bằng vét cạn/DP tập con.
- Thử heuristic trên dữ liệu lớn hơn và báo rõ không bảo đảm tối ưu.

### 256 · Hệ kiểu, phạm vi và cách đánh giá

Học

**Việc cần làm:**

- So kiểu tĩnh của C++ với kiểm tra lúc chạy trong Python.
- Phân biệt phạm vi từ vựng với thời gian sống của giá trị.
- Theo dõi truyền giá trị, tham chiếu và closure qua ví dụ ngắn.

### 257 · Cùng bài toán qua nhiều cách lập trình

Luyện

**Việc cần làm:**

- Viết xử lý danh sách theo vòng lặp, hàm thuần và đối tượng.
- Chỉ ra phần có trạng thái thay đổi, tác dụng phụ và phần dễ kiểm thử.
- Chọn cách đơn giản nhất cho bài; không coi một phong cách luôn tốt hơn.

### 258 · Viết lexer cho ngôn ngữ nhỏ

Áp dụng

**Việc cần làm:**

- Chốt cú pháp số, tên biến, dấu +−*/ và dấu ngoặc.
- Tách chuỗi thành token có vị trí để báo lỗi.
- Thử token không hợp lệ và số sai định dạng; giữ đặc tả ngắn.

**Nguồn tham khảo thêm:**

- [Crafting Interpreters — chương Scanning (bản gốc dùng Java; có thể vận dụng ý tưởng bằng Python)](https://craftinginterpreters.com/scanning.html)

### 259 · Parser và cây cú pháp trừu tượng

Áp dụng

**Việc cần làm:**

- Viết parser đệ quy xuống cho biểu thức có ưu tiên toán tử.
- Dựng AST rồi đánh giá biểu thức.
- Thử 2+3*4, biểu thức có ngoặc và thiếu ngoặc; báo đúng vị trí lỗi.

### 260 · Interpreter có biến và kiểm thử

Áp dụng

**Việc cần làm:**

- Thêm phép gán và môi trường lưu biến vào interpreter.
- Phân biệt lỗi cú pháp, tên chưa tồn tại và lỗi khi đánh giá.
- Viết test và README mô tả cú pháp được hỗ trợ; so compiler với interpreter ở mức cơ chế.


## 20. Bảo mật ứng dụng

### 261 · Tài sản, đối thủ và mô hình đe dọa

Học

**Việc cần làm:**

- Vẽ nơi dữ liệu đi qua trong ứng dụng thư viện.
- Liệt kê dữ liệu cần bảo vệ và ranh giới tin cậy.
- Chọn vài nguy cơ thực tế theo đối tượng sử dụng; ưu tiên theo tác động và khả năng xảy ra.

**Nguồn tham khảo thêm:**

- [OWASP — tài liệu kiểm thử bảo mật web](https://owasp.org/www-project-web-security-testing-guide/)

### 262 · Encoding, hashing và encryption

Học

**Việc cần làm:**

- So Base64, hàm băm và mã hóa bằng mục đích, đầu vào, đầu ra.
- Phân biệt băm toàn vẹn với băm mật khẩu có salt và chi phí tính toán.
- Dùng thư viện được duy trì; không tự thiết kế thuật toán bảo mật.

### 263 · Ngăn SQL injection trong môi trường thử

Luyện

**Việc cần làm:**

- Tạo đầu vào chứa ký tự đặc biệt cho API của mình.
- Xác nhận driver dùng tham số tách khỏi câu SQL.
- Kiểm tra phân quyền database và thông báo lỗi; chỉ thực hành trên hệ thống mình sở hữu hoặc được phép.

### 264 · XSS và đưa dữ liệu ra giao diện

Học

**Việc cần làm:**

- Phân biệt dữ liệu văn bản với HTML có thể thực thi.
- Thử tên sách chứa ký tự < và > để kiểm tra hiển thị văn bản đúng.
- Tránh chèn HTML tùy ý; nếu thật sự cần HTML, dùng cơ chế làm sạch phù hợp ngữ cảnh.

### 265 · Cookie, CORS và CSRF

Học

**Việc cần làm:**

- Phân biệt nguồn gốc trình duyệt, quyền đọc phản hồi và việc gửi yêu cầu.
- Kiểm tra cấu hình cookie và CSRF theo mô hình đăng nhập đã chọn.
- Không dùng CORS như cơ chế phân quyền phía server.

### 266 · Kiểm tra quyền theo từng đối tượng

Luyện

**Việc cần làm:**

- Tạo hai tài khoản thử có vai trò giống nhau.
- Thay ID tài nguyên trong request và xác nhận không đọc/sửa tài nguyên trái phép.
- Thêm test phân quyền ở server, không chỉ ẩn nút trên giao diện.

### 267 · Quản lý bí mật và phụ thuộc

Áp dụng

**Việc cần làm:**

- Đưa khóa, mật khẩu kết nối vào cấu hình môi trường, không commit.
- Kiểm tra lịch sử mã nguồn của project thử trước khi công khai.
- Lập cách thay khóa nếu lộ và cập nhật thư viện theo cảnh báo có liên quan.

### 268 · Đầu vào, upload và giới hạn tài nguyên

Luyện

**Việc cần làm:**

- Giới hạn độ dài chuỗi, kích thước request và loại tệp được phép.
- Không tin tên tệp người dùng để tạo đường dẫn trực tiếp.
- Thử dữ liệu rất dài và sai kiểu trên môi trường thử; kiểm tra timeout và giới hạn tần suất phù hợp.

### 269 · Cấu hình triển khai an toàn

Áp dụng

**Việc cần làm:**

- Bật HTTPS hợp lệ ở môi trường triển khai, kiểm tra cấu hình reverse proxy.
- Không công khai trang debug, cổng database hoặc stack trace nội bộ.
- Gắn quyền tối thiểu cho ứng dụng và kiểm tra bản sao lưu có kiểm soát truy cập.

### 270 · Rà bảo mật một luồng hoàn chỉnh

Luyện

**Việc cần làm:**

- Chọn đăng nhập → tìm sách → mượn → trả và lập bảng nguy cơ.
- Chạy lại các test xác thực, phân quyền, đầu vào và lỗi.
- Ghi phát hiện, cách sửa và kiểm tra lại; không tuyên bố hệ thống an toàn tuyệt đối sau một checklist.

**Nguồn tham khảo thêm:**

- [OWASP — tài liệu kiểm thử bảo mật web](https://owasp.org/www-project-web-security-testing-guide/)


## 21. Đồ họa, giao diện và khả năng tiếp cận

### 271 · Pixel, màu và biểu diễn ảnh

Học

**Việc cần làm:**

- Đọc kích thước, kênh màu và dung lượng một ảnh không nén.
- Phân biệt độ phân giải, tọa độ ảnh và tọa độ màn hình.
- Viết thao tác đổi độ sáng hoặc chuyển xám với giới hạn giá trị đúng.

### 272 · Biến đổi hình học 2D

Luyện

**Việc cần làm:**

- Dùng canvas hoặc công cụ đồ họa để vẽ một đa giác.
- Áp dụng tịnh tiến, quay, co giãn bằng ma trận tọa độ thuần nhất.
- Thử đổi thứ tự phép biến đổi, giải thích vị trí hình thay đổi ra sao.

### 273 · Pipeline đồ họa 3D

Học

**Việc cần làm:**

- Theo dõi đỉnh từ tọa độ mô hình đến camera, phép chiếu và pixel.
- Phân biệt chiếu phối cảnh với trực giao.
- Mô tả vai trò rasterization, depth buffer và shading; không cần tự xây game engine.

**Nguồn tham khảo thêm:**

- [LearnOpenGL — nền tảng đồ họa](https://learnopengl.com/)

### 274 · Thiết kế từ tác vụ người dùng

Học

**Việc cần làm:**

- Chọn một tác vụ quan trọng của thư viện và viết các bước người dùng thực hiện.
- Vẽ bản nháp giao diện trước khi code.
- Giảm việc người dùng phải nhớ, giữ phản hồi lỗi ở gần thao tác gây lỗi.

### 275 · Quan sát người dùng thử thật

Luyện

**Việc cần làm:**

- Nhờ 2–3 người thử một tác vụ với dữ liệu giả, có sự đồng ý.
- Quan sát điểm mắc mà không chỉ dẫn ngay.
- Ghi vấn đề, mức ảnh hưởng và sửa một vòng; không coi mẫu nhỏ là thống kê đại diện.

### 276 · Dùng được bằng bàn phím

Áp dụng

**Việc cần làm:**

- Đi toàn bộ luồng chính bằng Tab, Enter, Space và Escape.
- Gắn tên truy cập cho nút chỉ có biểu tượng, label cho input.
- Kiểm tra focus khi mở/đóng hộp thoại, thứ tự heading và thông báo lỗi.

**Nguồn tham khảo thêm:**

- [W3C WAI — nền tảng khả năng tiếp cận](https://www.w3.org/WAI/fundamentals/)

### 277 · Kiểm tra màn hình nhỏ và trạng thái lỗi

Luyện

**Việc cần làm:**

- Thử chiều rộng 320, 768 và màn hình desktop.
- Kiểm tra chữ dài, phóng to chữ, danh sách rỗng và mạng chậm.
- Sửa tràn ngang, vùng bấm nhỏ và nội dung bị che; dùng chữ hoặc biểu tượng cùng màu trạng thái.

### 278 · Làm một công cụ minh họa thuật toán

Áp dụng

**Việc cần làm:**

- Chọn BFS hoặc Dijkstra, hiển thị đồ thị nhỏ với số liệu kiểm soát.
- Cho chạy từng bước, làm nổi đỉnh và khoảng cách đang xét.
- Có đặt lại, chú thích điều kiện áp dụng và đối chiếu kết quả với thuật toán không giao diện.


## 22. Nền tảng AI và Machine Learning

### 279 · AI, học máy và bài toán tìm kiếm

Học

**Việc cần làm:**

- Phân biệt luật viết tay, tìm kiếm và học từ dữ liệu.
- Biểu diễn một bài tìm đường bằng trạng thái, hành động và chi phí.
- Chọn BFS, uniform-cost search hoặc A* theo điều kiện thay vì gọi mọi lời giải là học máy.

### 280 · A* và heuristic

Luyện

**Việc cần làm:**

- Tự cài A* trên lưới có chi phí bước không âm.
- Dùng heuristic không vượt chi phí còn lại và hiểu vai trò tính nhất quán khi chốt đỉnh.
- Đối chiếu với Dijkstra; thử heuristic bằng 0 và mô tả số đỉnh phải mở rộng.

### 281 · Hồi quy, phân loại và phân cụm

Học

**Việc cần làm:**

- Chọn ví dụ dự đoán số, nhãn và nhóm tương đồng.
- Xác định đặc trưng, nhãn, đơn vị dự đoán và cách lấy dữ liệu.
- Nêu một baseline đơn giản để mô hình phải vượt qua.

**Nguồn tham khảo thêm:**

- [Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course)

### 282 · Train, validation, test và rò rỉ dữ liệu

Học

**Việc cần làm:**

- Chia dữ liệu trước khi học các bước tiền xử lý.
- Phân biệt chia ngẫu nhiên, theo thời gian và theo nhóm đối tượng.
- Giữ test cho đánh giá cuối; không chọn mô hình bằng cách thử đi thử lại trên test.

### 283 · Hồi quy tuyến tính từ đầu

Luyện

**Việc cần làm:**

- Dùng NumPy cài dự đoán tuyến tính, MSE và gradient descent.
- Kiểm tra gradient bằng sai phân trên bài nhỏ.
- So với bộ giải thư viện, ghi đường học và tác động của bước học.

### 284 · Logistic regression và ngưỡng quyết định

Học

**Việc cần làm:**

- Dùng sigmoid và log loss cho bài phân loại nhị phân.
- Phân biệt điểm số, xác suất ước lượng và nhãn sau chọn ngưỡng.
- Xét chuẩn hóa dữ liệu và ổn định số; dùng hàm thư viện phù hợp khi chạy thực tế.

**Nguồn tham khảo thêm:**

- [Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course)

### 285 · Đánh giá đúng bài toán

Luyện

**Việc cần làm:**

- Tính confusion matrix, precision, recall và F1 bằng tay trên tập nhỏ.
- Tạo ví dụ lớp hiếm mà accuracy cao vẫn vô dụng.
- Chọn metric và ngưỡng theo chi phí sai lầm được nêu rõ; không chỉ báo một con số đẹp.

### 286 · Overfitting, regularization và kiểm định chéo

Học

**Việc cần làm:**

- So lỗi train với validation khi tăng độ phức tạp mô hình.
- Dùng regularization và cross-validation phù hợp cách dữ liệu được tạo.
- Giải thích bias–variance ở mức trực quan và kiểm tra bằng đường học.

**Nguồn tham khảo thêm:**

- [scikit-learn — hướng dẫn học máy](https://scikit-learn.org/stable/user_guide.html)

### 287 · Decision tree và random forest

Luyện

**Việc cần làm:**

- Huấn luyện cây quyết định, giới hạn độ sâu và quan sát overfitting.
- So random forest với baseline trên cùng cách chia dữ liệu.
- Kiểm tra tầm quan trọng đặc trưng một cách thận trọng; không suy ra quan hệ nhân quả.

### 288 · K-means và PCA

Học

**Việc cần làm:**

- Chuẩn hóa theo nhu cầu rồi phân cụm dữ liệu nhỏ.
- Quan sát ảnh hưởng của số cụm, khởi tạo và ngoại lệ.
- Dùng PCA để giảm chiều, liên hệ đại số tuyến tính; không gán ý nghĩa thật cho cụm khi chưa kiểm chứng.

### 289 · Pipeline thí nghiệm tái lập được

Áp dụng

**Việc cần làm:**

- Gói tiền xử lý và mô hình vào pipeline của thư viện.
- Lưu seed, phiên bản dữ liệu, tham số và metric.
- So ít nhất hai mô hình với cùng bộ chia; theo dõi thử nghiệm thay vì ghi đè kết quả cũ.

**Nguồn tham khảo thêm:**

- [scikit-learn — hướng dẫn học máy](https://scikit-learn.org/stable/user_guide.html)

### 290 · Tensor và đạo hàm tự động

Học

**Việc cần làm:**

- Tạo tensor có shape phù hợp trong PyTorch.
- Theo dõi forward, loss, backward và bước optimizer trên bài tuyến tính.
- So gradient của một tham số với cách tính tay; không quên xóa gradient giữa các bước.

**Nguồn tham khảo thêm:**

- [PyTorch — tutorial chính thức](https://docs.pytorch.org/tutorials/)

### 291 · Mạng neural nhỏ và vòng huấn luyện

Luyện

**Việc cần làm:**

- Huấn luyện MLP trên một bộ dữ liệu nhỏ có sẵn, ghi nguồn và cách chia.
- Phân biệt chế độ train/eval và phần không cần gradient lúc đánh giá.
- Lưu model, nạp lại và xác nhận dự đoán giống trong điều kiện đã kiểm soát.

### 292 · CNN, embedding và attention ở mức nền

Học

**Việc cần làm:**

- Theo dõi kích thước đầu vào/đầu ra của một convolution đơn giản.
- Hiểu embedding biểu diễn đối tượng thành vector học được.
- Tính attention trên ví dụ vector nhỏ; phân biệt cơ chế với việc chỉ gọi API mô hình.

### 293 · Dùng LLM và đánh giá đầu ra

Luyện

**Việc cần làm:**

- Tạo tập câu hỏi nhỏ có đáp án hoặc tiêu chí kiểm tra rõ.
- So prompt trực tiếp với thêm ngữ cảnh tài liệu; ghi nguồn cho nội dung được trích.
- Thử câu hỏi ngoài tài liệu và yêu cầu gây nhiễu; đo lỗi thay vì coi trả lời trôi chảy là đúng.

**Thông tin thêm:**

Nếu cần API trả phí, chọn hạn mức trước; có thể dùng mô hình cục bộ hoặc dữ liệu giả. Không gửi dữ liệu riêng tư vào dịch vụ chưa được phép.

### 294 · Project ML có baseline và phân tích lỗi

Áp dụng

**Việc cần làm:**

- Chọn một bộ dữ liệu công khai có giấy phép rõ, phạm vi nhỏ.
- Dựng baseline, pipeline, mô hình cải thiện và đánh giá test cuối.
- Phân tích ví dụ sai, giới hạn áp dụng và viết báo cáo để người khác chạy lại; không chỉ nộp notebook có điểm số.


## 23. Hệ phân tán và thiết kế hệ thống

### 295 · Thiết kế từ tải và yêu cầu

Học

**Việc cần làm:**

- Chốt người dùng, tính năng, độ trễ và mức sẵn sàng mong muốn cho thư viện.
- Ước lượng số yêu cầu, dữ liệu và giả thiết thay vì chọn công nghệ trước.
- Vẽ một server và một database làm phương án ban đầu.

### 296 · Tăng cấu hình và chia tải

Học

**Việc cần làm:**

- Phân biệt scale up với scale out.
- Đặt load balancer trước nhiều bản ứng dụng và xét nơi lưu session.
- Nêu phần vẫn là nút thắt nếu database chưa thay đổi.

### 297 · Cache và dữ liệu cũ

Học

**Việc cần làm:**

- Thêm cache cho truy vấn đọc nhiều, ít thay đổi.
- Chọn cache key, TTL và quy tắc vô hiệu hóa khi sửa dữ liệu.
- Thử cache miss, dữ liệu cũ và cache bị mất; hệ thống vẫn phải có nguồn dữ liệu gốc.

### 298 · Replication và sharding

Học

**Việc cần làm:**

- Phân biệt nhân bản dữ liệu với chia tập dữ liệu.
- Theo dõi một lần ghi và một lần đọc từ replica bị chậm.
- Chọn khóa chia dữ liệu và thử tình huống phân bố lệch; không chia nhỏ khi chưa có nhu cầu đo được.

### 299 · Lỗi từng phần và CAP

Học

**Việc cần làm:**

- Phân biệt server chết với server chậm mà chưa biết tình trạng.
- Mô tả đánh đổi consistency và availability khi có network partition theo định nghĩa CAP.
- Không diễn giải CAP là tùy ý chọn hai trong ba mọi lúc.

**Nguồn tham khảo thêm:**

- [MIT 6.5840 — hệ phân tán](https://pdos.csail.mit.edu/6.824/)

### 300 · Hàng đợi cho tác vụ nền

Áp dụng

**Việc cần làm:**

- Tách gửi thông báo giả khỏi request mượn sách.
- Định nghĩa trạng thái tác vụ và cách ghi nhận hoàn thành.
- Thử worker chết giữa chừng; chấp nhận thông điệp có thể được giao lại.

### 301 · Idempotency và thử lại an toàn

Luyện

**Việc cần làm:**

- Thêm idempotency key cho thao tác tạo phiếu mượn hoặc tác vụ phù hợp.
- Gửi lại cùng yêu cầu sau timeout và kiểm tra không tạo hai bản ghi.
- Dùng timeout, backoff và giới hạn số lần thử; không retry mọi lỗi vô hạn.

### 302 · Đồng thuận và leader ở mức nền tảng

Học

**Việc cần làm:**

- Tìm hiểu vì sao nhiều bản sao cần thống nhất thứ tự cập nhật.
- Theo dõi leader, term và đa số trong một ví dụ Raft nhỏ.
- Phân biệt đã nhận, đã ghi log và đã commit; không tự triển khai Raft để dùng thật ngay.

**Nguồn tham khảo thêm:**

- [MIT 6.5840 — hệ phân tán](https://pdos.csail.mit.edu/6.824/)

### 303 · Monolith, service và giao tiếp

Học

**Việc cần làm:**

- So monolith có module rõ với tách thành nhiều service.
- Phân biệt REST, RPC và sự kiện theo yêu cầu giao tiếp.
- Liệt kê chi phí triển khai, quan sát và lỗi liên dịch vụ trước khi chọn microservices.

### 304 · Theo dõi lỗi xuyên nhiều thành phần

Luyện

**Việc cần làm:**

- Gắn correlation ID từ API sang hàng đợi và worker.
- Đo độ trễ, backlog và số lần thử lại.
- Tạo lỗi ở một thành phần thử rồi chẩn đoán bằng log và chỉ số.

### 305 · Cloud, chi phí và vận hành vừa đủ

Học

**Việc cần làm:**

- Phân biệt máy ảo, container, dịch vụ quản lý và serverless.
- Lập bảng CPU, RAM, lưu trữ, băng thông và giới hạn ngân sách dự kiến.
- Dựng môi trường thử trong phạm vi được phép; thiết lập hạn mức/cảnh báo nếu dùng tài khoản tính phí.

### 306 · Thiết kế phiên bản lớn hơn của thư viện

Áp dụng

**Việc cần làm:**

- Vẽ thiết kế đáp ứng tải đã ước lượng, chọn ít thành phần nhất cần thiết.
- Mô tả ba tình huống lỗi và cách khôi phục.
- Làm một thử nghiệm cache hoặc worker, đo kết quả rồi cập nhật thiết kế; không coi sơ đồ là hệ thống đã chạy.


## 24. Trách nhiệm nghề nghiệp và đọc nghiên cứu

### 307 · Dữ liệu cá nhân và sự đồng ý

Học

**Việc cần làm:**

- Lập danh sách dữ liệu thật sự cần cho project.
- Dùng dữ liệu giả khi thử, giảm thông tin định danh trong log.
- Quy định ai được xem, thời gian giữ và cách xóa; tra yêu cầu pháp lý hiện hành nếu triển khai có dữ liệu thật.

**Nguồn tham khảo thêm:**

- [ACM — Code of Ethics (PDF)](https://www.acm.org/binaries/content/assets/about/acm-code-of-ethics-and-professional-conduct.pdf)

### 308 · Giấy phép mã nguồn và dữ liệu

Luyện

**Việc cần làm:**

- Đọc license của một thư viện, bộ dữ liệu và ảnh đang dùng.
- Ghi nguồn, yêu cầu ghi công và điều kiện phân phối liên quan.
- Thay tài nguyên không rõ quyền sử dụng; không coi nội dung có trên mạng là tự do tái sử dụng.

### 309 · Sai lệch, tác động và giới hạn hệ thống

Học

**Việc cần làm:**

- Chọn một tính năng ML hoặc xếp hạng trong project.
- Xác định nhóm có thể chịu lỗi nhiều hơn và hậu quả của lỗi.
- Thiết kế phản hồi, sửa sai hoặc người kiểm tra khi cần; nói rõ độ không chắc chắn.

**Nguồn tham khảo thêm:**

- [ACM — Code of Ethics (PDF)](https://www.acm.org/binaries/content/assets/about/acm-code-of-ethics-and-professional-conduct.pdf)

### 310 · Đọc một paper theo ba lượt

Luyện

**Việc cần làm:**

- Chọn một bài nhập môn gần project, có bản gốc từ tác giả hoặc hội nghị.
- Lượt đầu đọc vấn đề và kết luận, lượt hai đọc phương pháp và thí nghiệm, lượt ba kiểm tra lập luận quan trọng.
- Viết một trang nêu đóng góp, giả thiết, baseline và điều chưa được chứng minh.

**Nguồn tham khảo thêm:**

- [S. Keshav — How to Read a Paper](https://svr-sk818-web.cl.cam.ac.uk/keshav/publications/htrap.html)

### 311 · Tái tạo một kết quả nhỏ

Áp dụng

**Việc cần làm:**

- Chọn một bảng hoặc hình có dữ liệu, mã hay mô tả đủ để thử.
- Ghi môi trường, phiên bản, seed và cấu hình.
- So kết quả với bài gốc; giải thích sai khác trong giới hạn bằng chứng, không tự nhận xác nhận toàn bộ nghiên cứu.

### 312 · Đặt câu hỏi có thể kiểm chứng

Luyện

**Việc cần làm:**

- Từ một điểm yếu quan sát được, viết câu hỏi và giả thuyết.
- Chọn một yếu tố thay đổi, baseline và phép đo phù hợp.
- Làm thử nghiệm nhỏ hoặc đề cương để trao đổi với giảng viên; tách kết quả đo khỏi phỏng đoán.


## 25. Chọn hướng chuyên sâu có căn cứ

### 313 · Nhìn lại bằng sản phẩm đã làm

Luyện

**Việc cần làm:**

- Lập danh sách project thư viện, shell, interpreter, minh họa thuật toán và ML.
- Ghi phần mình thích làm, phần làm tốt có bằng chứng và phần còn yếu.
- Chọn hai hướng muốn tìm hiểu sâu hơn; không chọn chỉ vì tên ngành đang phổ biến.

### 314 · Đối chiếu công việc với điều mình muốn

Luyện

**Việc cần làm:**

- Đọc khoảng 10 mô tả thực tập hoặc junior hiện hành của hai hướng đã chọn.
- Ghi kỹ năng lặp lại, loại nhiệm vụ và yêu cầu thật sự bắt buộc.
- So với phần mình đã làm; phân biệt yêu cầu tuyển dụng cụ thể với danh sách công nghệ dài.

### 315 · Khảo sát hướng kỹ sư phần mềm và backend

Học

**Việc cần làm:**

- Đọc lại quyết định API, transaction, test và vận hành trong project.
- Chọn một điểm đào sâu: database, độ tin cậy hoặc hiệu năng.
- Viết kế hoạch cải thiện có phép đo; nếu chọn hướng này, tiếp tục đào sâu hệ thống thay vì học thêm hàng loạt framework.

### 316 · Khảo sát hướng ML và nghiên cứu AI

Học

**Việc cần làm:**

- Đối chiếu khả năng toán, thí nghiệm và đọc paper với project ML đã làm.
- Chọn một bài toán cụ thể như ảnh, ngôn ngữ hoặc dữ liệu bảng.
- Phân biệt công việc dùng mô hình, huấn luyện mô hình và nghiên cứu phương pháp; chọn mục tiêu phù hợp giai đoạn hiện tại.

### 317 · Khảo sát hướng hệ thống và ngôn ngữ

Học

**Việc cần làm:**

- Xem lại trải nghiệm làm shell, interpreter và xử lý đồng thời.
- Chọn một điểm đào sâu: OS, compiler, mạng hoặc hiệu năng C++.
- Tìm giáo trình/lab và yêu cầu nền của hướng đó, thiết kế một thử nghiệm có thể hoàn thành.

### 318 · Nhận diện các hướng khác trong KHMT

Học

**Việc cần làm:**

- Khảo sát đồ họa, HCI, an toàn thông tin và nền tảng di động/nhúng.
- Với một hướng quan tâm, đọc syllabus nhập môn và xem một project thật.
- Ghi kiến thức cần bổ sung; không bắt bản thân học chuyên sâu tất cả các hướng.

**Nguồn tham khảo thêm:**

- [CS2023 — các lĩnh vực kiến thức KHMT](https://csed.acm.org/knowledge-areas/)

### 319 · Chốt một hướng để tập trung

Áp dụng

**Việc cần làm:**

- Chọn một hướng chính trong 3–6 tháng tới, một câu hỏi hoặc sản phẩm cụ thể.
- Chọn một giáo trình/khóa chính và một project, tránh gom nhiều nguồn song song.
- Xếp phần đọc, bài tập và mốc demo; sau một vòng hoàn thành mới đánh giá lại hướng.


## 26. Đồ án lớn có người dùng và bằng chứng

### 320 · Chọn vấn đề đủ cụ thể

Áp dụng

**Việc cần làm:**

- Chọn nhu cầu thật có thể tiếp cận người dùng hoặc bộ dữ liệu hợp lệ.
- Mô tả người gặp vấn đề, cách đang xử lý và điểm bất tiện.
- Chốt một phiên bản nhỏ kiểm chứng được; có thể tiếp tục thư viện hoặc chọn đề tài theo hướng chính.

### 321 · Viết yêu cầu và cách nghiệm thu

Áp dụng

**Việc cần làm:**

- Viết các luồng chính cùng ví dụ đầu vào, đầu ra.
- Đặt tiêu chí chức năng, độ trễ hoặc chất lượng mô hình có số đo phù hợp.
- Ghi ngoài phạm vi và giả thiết; xin phản hồi người dùng/giảng viên trước khi mở rộng.

### 322 · Thiết kế vừa đủ để bắt tay làm

Áp dụng

**Việc cần làm:**

- Vẽ dữ liệu, thành phần và đường đi của một yêu cầu chính.
- Ghi hai lựa chọn quan trọng, phương án khác và lý do chọn.
- Chia thành các lát nhỏ mỗi lát chạy được, tránh làm toàn bộ nền tảng rồi mới có demo.

### 323 · Làm một luồng hoàn chỉnh đầu tiên

Áp dụng

**Việc cần làm:**

- Làm từ nhập liệu đến xử lý và hiển thị kết quả với phạm vi nhỏ.
- Có xử lý lỗi và lưu dữ liệu/thí nghiệm theo đúng loại project.
- Demo cho người dùng thử, ghi điều khác với dự đoán ban đầu.

### 324 · Hoàn thiện các tính năng cốt lõi

Áp dụng

**Việc cần làm:**

- Thực hiện từng lát còn lại bằng nhánh, review và test.
- Ưu tiên quy tắc nghiệp vụ hoặc đánh giá chất lượng trước trang trí.
- Cập nhật tài liệu khi quyết định thay đổi; không để README mô tả hành vi cũ.

### 325 · Kiểm chứng chức năng và chất lượng

Luyện

**Việc cần làm:**

- Chạy lại test, ca biên, dữ liệu lỗi và các luồng quan trọng.
- Đo hiệu năng hoặc metric mô hình theo tiêu chí đã chốt.
- Kiểm tra bảo mật, khả năng tiếp cận và quyền dùng dữ liệu ở mức phù hợp project.

### 326 · Đưa đồ án tới người dùng thử

Áp dụng

**Việc cần làm:**

- Triển khai môi trường demo hoặc đóng gói bản chạy theo loại sản phẩm.
- Hướng dẫn khởi động, dữ liệu mẫu và khôi phục khi lỗi.
- Kiểm tra từ máy hoặc môi trường sạch; chuẩn bị phương án khi dịch vụ ngoài không hoạt động.

### 327 · Sửa theo phản hồi và sự cố thật

Luyện

**Việc cần làm:**

- Thu phản hồi có sự đồng ý, ghi tình huống tái hiện cụ thể.
- Phân biệt lỗi, yêu cầu mới và sở thích cá nhân.
- Sửa vấn đề ảnh hưởng lớn trước, đo lại và viết ghi chú phiên bản.

### 328 · Viết báo cáo kỹ thuật có bằng chứng

Áp dụng

**Việc cần làm:**

- Mô tả vấn đề, thiết kế, phần tự làm, phần dùng thư viện và kết quả đo.
- Chọn vài quyết định khó để giải thích đánh đổi.
- Ghi giới hạn và thất bại có bài học; đính kèm cách chạy lại, không chỉ ảnh màn hình.

### 329 · Trình bày và bảo vệ đồ án

Luyện

**Việc cần làm:**

- Chuẩn bị demo ngắn đi qua một luồng thật và một trường hợp lỗi.
- Tự trả lời vì sao chọn cấu trúc dữ liệu, mô hình hoặc kiến trúc đó.
- Nhờ người khác hỏi sâu; sửa phần mình chưa giải thích được trước khi đưa vào hồ sơ.


## 27. Thực tập, phỏng vấn và phát triển nghề

### 330 · Chọn lúc bắt đầu ứng tuyển

Học

**Việc cần làm:**

- Đối chiếu yêu cầu thực tập hiện hành với project và kiến thức đang có.
- Nếu đã tự viết, kiểm thử và giải thích được một sản phẩm phù hợp, bắt đầu ứng tuyển song song học tiếp.
- Không chờ đánh dấu hết roadmap; ghi các lỗ hổng thực tế để bổ sung trước buổi phỏng vấn.

### 331 · Chọn sản phẩm đưa vào hồ sơ

Áp dụng

**Việc cần làm:**

- Chọn 2–3 project tốt nhất, mỗi project cho thấy một năng lực khác nhau.
- Dọn repository, README, dữ liệu mẫu, license và hướng dẫn chạy.
- Nêu đóng góp cá nhân trong project nhóm, không nhận toàn bộ công của nhóm.

### 332 · Viết CV dựa trên việc đã làm

Áp dụng

**Việc cần làm:**

- Viết mô tả project theo vấn đề, hành động và kết quả có thể chứng minh.
- Đưa liên kết repository/demo và kỹ năng thật sự đã sử dụng.
- Điều chỉnh CV theo vị trí cụ thể; không bịa số người dùng, tốc độ hoặc kinh nghiệm.

### 333 · Ôn DSA cho phỏng vấn

Luyện

**Việc cần làm:**

- Chọn bài mới ở mảng, hash, cây, đồ thị và DP theo vị trí mục tiêu.
- Nói rõ yêu cầu, cách đơn giản, hướng cải thiện và độ phức tạp.
- Code trong thời gian giới hạn vừa sức, tự chạy ca biên rồi xem lại lỗi; không chỉ học thuộc mẫu.

### 334 · Vấn đáp nền tảng CS

Luyện

**Việc cần làm:**

- Tự giải thích process/thread, TCP/UDP, index/transaction và stack/heap.
- Với mỗi cặp, tạo tình huống phải chọn và giải thích điều kiện.
- Nếu chỉ nhớ định nghĩa, quay lại bài thực hành tương ứng thay vì nhồi câu trả lời mẫu.

### 335 · Phỏng vấn thử bằng project thật

Luyện

**Việc cần làm:**

- Nhờ bạn hoặc người có kinh nghiệm hỏi về một phần mã đã viết.
- Vẽ luồng dữ liệu và chẩn đoán một lỗi giả định.
- Thừa nhận điều chưa biết, nêu cách kiểm chứng; ghi lại chỗ nói được nhưng chưa làm được.

### 336 · Ứng tuyển có theo dõi

Áp dụng

**Việc cần làm:**

- Chọn vị trí phù hợp mức hiện tại và đọc kỹ cách nộp.
- Lưu nơi ứng tuyển, yêu cầu, ngày, phản hồi và việc cần chuẩn bị.
- Tự kiểm tra người nhận, tệp và thông tin trước khi gửi; lịch sự hỏi phản hồi khi phù hợp.

### 337 · Làm việc trong nhóm khi mới vào nghề

Học

**Việc cần làm:**

- Đọc hướng dẫn dự án, dựng môi trường rồi hoàn thành một việc nhỏ có review.
- Báo sớm khi mắc kẹt, kèm điều đã thử và bằng chứng.
- Ghi lại kiến thức hệ thống và chủ động kiểm tra tác động trước khi sửa mã đang được dùng.

### 338 · Đóng góp mã nguồn mở vừa sức

Áp dụng

**Việc cần làm:**

- Chọn dự án đang dùng, đọc hướng dẫn đóng góp và dựng được test.
- Tái hiện một lỗi nhỏ hoặc cải thiện ví dụ/tài liệu có ích.
- Gửi thay đổi đúng phạm vi, đáp ứng review; không tạo pull request chỉ để đếm thành tích.

### 339 · Lập vòng phát triển tiếp theo

Áp dụng

**Việc cần làm:**

- Nhìn lại việc đã làm, phản hồi từ project/phỏng vấn và điểm còn yếu.
- Chọn một kỹ năng nền cần củng cố, một mảng sâu và một sản phẩm cho vòng tiếp.
- Giữ nhịp đọc, làm, nhận review và sửa; cập nhật hướng đi bằng kết quả thực tế.
