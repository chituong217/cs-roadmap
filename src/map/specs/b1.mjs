// Khối I — Bắt đầu từ số 0
export const B1 = [
  // ── Môi trường máy tính
  { id: 'n-tep-thu-muc', t: 'Tệp, thư mục và mã hóa văn bản', c: 'computing-environment', cov: ['ce-files-paths'],
    p: [
      'Tệp là một dãy byte có tên; phần mở rộng chỉ là gợi ý cho hệ điều hành chọn chương trình mở, không quyết định nội dung thực. Các tệp nằm trong cây thư mục phân cấp, và một vị trí được chỉ ra bằng đường dẫn tuyệt đối (từ gốc) hoặc tương đối (tính từ thư mục làm việc hiện tại), nên cùng một đường dẫn tương đối có thể trỏ tới những nơi khác nhau tùy chương trình đang chạy ở đâu.',
      'Tệp văn bản thuần khác tệp nhị phân ở chỗ mỗi byte được diễn giải theo một bảng mã như ASCII hoặc UTF-8; chọn sai bảng mã làm chữ hỏng. Ký tự xuống dòng cũng khác nhau giữa các hệ (LF và CRLF), nguồn gây lỗi quen thuộc khi chia sẻ mã nguồn giữa các máy.',
    ] },
  { id: 'n-ram-tien-trinh', t: 'RAM, ổ đĩa, tiến trình và hệ điều hành', c: 'computing-environment', cov: ['ce-storage-memory-os'],
    p: [
      'RAM là bộ nhớ chính nhanh nhưng khả biến, mất dữ liệu khi tắt máy; SSD/HDD lưu bền vững nhưng chậm hơn nhiều. Một chương trình nằm trên đĩa chỉ là tệp thụ động; khi chạy nó trở thành tiến trình với vùng nhớ riêng, và hệ điều hành là phần mềm phân chia CPU, bộ nhớ và thiết bị cho các tiến trình đó.',
      'Người dùng tương tác qua giao diện đồ họa hoặc dòng lệnh, và hệ điều hành kiểm soát quyền đọc, ghi, thực thi trên từng tệp. Hiểu ranh giới này giải thích vì sao một thao tác bị từ chối dù lệnh đúng.',
    ] },
  { id: 'n-terminal-toolchain', t: 'Terminal, shell, PATH và chuỗi công cụ biên dịch', c: 'computing-environment', cov: ['ce-terminal-toolchain'],
    p: [
      'Terminal là cửa sổ hiển thị, còn shell là chương trình đọc và thực thi lệnh; hai thứ thường bị nhầm là một. Các lệnh điều hướng và quản lý tệp cơ bản cần dùng cùng nguyên tắc an toàn, vì xóa hoặc ghi đè trên dòng lệnh thường không có thùng rác để hoàn tác.',
      'Shell tìm chương trình theo các thư mục liệt kê trong biến môi trường PATH, trả về mã thoát để báo thành công hay lỗi, và có ba luồng chuẩn (nhập, xuất, lỗi). Trình soạn thảo, IDE và trình biên dịch là ba vai trò khác nhau: soạn mã, gói công cụ tiện lợi, và dịch mã nguồn thành chương trình chạy được.',
    ] },
  { id: 'n-doc-loi-tai-lieu', t: 'Đọc thông báo lỗi và tài liệu kỹ thuật', c: 'computing-environment', cov: ['ce-docs-navigation'],
    p: [
      'Một thông báo chẩn đoán gồm vị trí, loại lỗi và mô tả; thường chỉ lỗi đầu tiên đáng tin vì các lỗi sau có thể là hệ quả của nó. Tài liệu kỹ thuật có ba loại với mục đích khác nhau: hướng dẫn để làm quen, tham chiếu chuẩn để tra cứu chính xác, và bài giải thích khái niệm; tra cứu đáng tin phải đối chiếu phiên bản và nguồn.',
      'Không gian học tập nên tách mã nguồn khỏi tệp sinh ra khi biên dịch và ghi lại cách dựng môi trường, để lỗi có thể tái lập trên máy khác.',
    ] },

  // ── Toán cầu nối
  { id: 'n-so-phep-tinh', t: 'Hệ số, phép chia có dư và giá trị tuyệt đối', c: 'math-bridge', cov: ['mb-numbers-operations'],
    p: [
      'Các tập số N, Z, Q, R lồng nhau, mỗi tập mở rộng khả năng biểu diễn của tập trước; số có thể viết dạng phân số hoặc thập phân, và thứ tự ưu tiên phép toán quyết định giá trị biểu thức. Phép chia nguyên có dư gắn với hàm sàn và hàm trần, là nền cho việc tách chữ số theo cơ số và cho số học đồng dư.',
      'Giá trị tuyệt đối là khoảng cách trên trục số, và bất đẳng thức tam giác giới hạn khoảng cách của một tổng; cần phân biệt chia nguyên với chia thực, và cách làm tròn của số âm.',
    ] },
  { id: 'n-dai-so-so-phuc', t: 'Biểu thức đại số, phương trình, bất đẳng thức và số phức', c: 'math-bridge', cov: ['mb-variables-equations'],
    p: [
      'Biến toán học là ký hiệu đại diện cho một giá trị chưa biết, khác biến lập trình vốn chứa giá trị thay đổi theo thời gian. Nội dung gồm hằng đẳng thức, phương trình bậc nhất, hệ hai ẩn, phương trình bậc hai với biệt thức Delta quyết định số nghiệm, và bất phương trình với quy tắc đổi chiều khi nhân hoặc chia số âm, giải bằng bảng xét dấu.',
      'Số phức mở rộng số thực bằng đơn vị ảo i, viết dạng a+bi, có số phức liên hợp và môđun; cần biết cách thực hiện bốn phép tính và ý nghĩa của môđun.',
    ] },
  { id: 'n-mu-logarit', t: 'Lũy thừa, căn thức và logarit', c: 'math-bridge', cov: ['mb-exponents-logarithms'],
    p: [
      'Lũy thừa nguyên và hữu tỉ cùng căn thức tuân theo các quy tắc biến đổi nhất quán; ký hiệu khoa học tách độ lớn khỏi chữ số có nghĩa. Logarit là số mũ cần tìm, có các quy tắc cho tích, thương, lũy thừa và công thức đổi cơ số.',
      'Trong khoa học máy tính, log2(n) là số lần chia đôi liên tiếp để từ n còn 1, giải thích vì sao tìm kiếm nhị phân và nhiều phép chia để trị tốn khoảng log n bước, và vì sao tăng trưởng mũ nhanh vượt mọi đa thức.',
    ] },
  { id: 'n-ham-so-do-thi', t: 'Hàm số, hợp hàm, hàm ngược và đồ thị', c: 'math-bridge', cov: ['mb-functions-graphs'],
    p: [
      'Hàm f: A→B gán mỗi phần tử miền xác định đúng một giá trị; cần phân biệt miền xác định, miền giá trị và hàm cho bởi nhiều công thức. Hợp hàm nối hai hàm liên tiếp, còn hàm ngược chỉ tồn tại khi hàm vừa đơn ánh vừa toàn ánh.',
      'Các họ hàm sơ cấp (đa thức, mũ, logarit) có hình dáng và tốc độ thay đổi trung bình khác nhau, nền cho việc so sánh tốc độ tăng của các hàm sau này.',
    ] },
  { id: 'n-toa-do-luong-giac', t: 'Tọa độ, lượng giác và dạng cực của số phức', c: 'math-bridge', cov: ['mb-coordinates-trigonometry'],
    p: [
      'Hệ tọa độ Descartes cho công thức khoảng cách Euclid và phương trình đường tròn. Góc đo bằng radian; sin, cos, tan được định nghĩa trên đường tròn đơn vị cùng các đẳng thức cơ bản.',
      'Số phức biểu diễn như điểm trong mặt phẳng và viết ở dạng lượng giác r(cos θ + i sin θ); công thức De Moivre biến lũy thừa số phức thành phép nhân góc, gắn với phép quay.',
    ] },
  { id: 'n-day-so-tong', t: 'Dãy số, ký hiệu tổng Σ và tích Π', c: 'math-bridge', cov: ['mb-sequences-summations'],
    p: [
      'Dãy số là danh sách đánh chỉ số, cho bằng công thức tường minh hoặc truy hồi; cần chú ý chỉ số bắt đầu từ 0 hay từ 1 vì lập trình và toán hay khác nhau. Ký hiệu Σ và Π có biến chạy, cận dưới và trên, thỏa tính chất tuyến tính và cho phép đổi biến chỉ số.',
      'Cấp số cộng và cấp số nhân cùng hai công thức tổng của chúng là công cụ nền cho phân tích số bước của thuật toán.',
    ] },

  // ── Tư duy tính toán
  { id: 'n-bieu-dien-thong-tin', t: 'Bit, hệ đếm và biểu diễn thông tin', c: 'computational-thinking', cov: ['ct-information-representation'],
    p: [
      'Một bit có hai trạng thái, k bit cho 2^k tổ hợp; hệ đếm theo vị trí (cơ số 2, 10, 16) là cách viết số bằng các chữ số có trọng số, và hệ thập lục phân là cách viết gọn của nhị phân. Văn bản, màu điểm ảnh và âm thanh đều là các dãy bit được diễn giải theo quy ước, nên cùng một dãy bit có thể mang nghĩa khác nhau tùy ngữ cảnh.',
      'Biểu diễn hữu hạn bit gây giới hạn: số nguyên bị tràn khi vượt miền giá trị, và số thực chỉ được lưu xấp xỉ nên phép so sánh bằng chính xác dễ sai.',
    ] },
  { id: 'n-bai-toan-thuat-toan', t: 'Bài toán, thuật toán và đếm số bước', c: 'computational-thinking', cov: ['ct-problems-algorithms'],
    p: [
      'Bài toán tổng quát được đặc tả bằng hợp đồng đầu vào–đầu ra, còn một thể hiện là một bộ dữ liệu cụ thể. Thuật toán là dãy bước hữu hạn, xác định, có đầu vào và đầu ra, kết thúc sau hữu hạn bước; mã giả khác chương trình ở chỗ không bị ràng buộc cú pháp của ngôn ngữ.',
      'Đếm số bước theo kích thước đầu vào n cho thấy tìm kiếm tuần tự cần khoảng n bước còn tìm kiếm chia đôi chỉ khoảng log n bước (với dữ liệu đã sắp), mở đầu cho phân tích độ phức tạp.',
    ] },
  { id: 'n-trang-thai-lan-vet', t: 'Trạng thái, luồng điều khiển và bảng lần vết', c: 'computational-thinking', cov: ['ct-state-execution-trace'],
    p: [
      'Chương trình là chuỗi thay đổi trạng thái: biến là ô nhớ có tên, phép gán cập nhật giá trị theo thời gian chứ không phải đẳng thức toán học. Ba cấu trúc điều khiển cơ bản là tuần tự, rẽ nhánh và lặp; bảng lần vết ghi trạng thái sau từng bước để dự đoán và kiểm tra chương trình.',
      'Điều kiện dừng của vòng lặp, lỗi lệch một bước và bất biến vòng lặp là những chỗ dễ sai nhất, và bất biến là cách nghĩ để chứng minh vòng lặp đúng.',
    ] },
  { id: 'n-truu-tuong-phan-ra', t: 'Trừu tượng hóa và phân rã bài toán', c: 'computational-thinking', cov: ['ct-abstraction-decomposition'],
    p: [
      'Trừu tượng hóa hộp đen tách giao diện "làm gì" khỏi cài đặt "làm thế nào", cho phép dùng một mô-đun mà không biết bên trong. Phân rã từ trên xuống chia bài toán lớn thành bài toán con, rồi ghép từ dưới lên và kiểm chứng từng phần.',
      'Các mẫu xử lý dãy kinh điển (duyệt, lọc, tích lũy, tìm cực trị) là kho mẫu nhỏ cho phần lớn bài toán nhập môn.',
    ] },

  // ── Nhập môn lập trình
  { id: 'n-chuong-trinh-dau-tien', t: 'Chương trình đầu tiên, biên dịch và nhập xuất', c: 'intro-programming', cov: ['ip-execution-model'],
    p: [
      'Mã nguồn được biên dịch thành chương trình chạy được, và thực thi bắt đầu từ hàm main; mô hình cơ bản là nhập, xử lý, xuất tuần tự qua std::cin và std::cout. Cần phân biệt lỗi cú pháp (bị chặn lúc biên dịch), cảnh báo (vẫn dịch được nhưng đáng nghi) và lỗi lúc chạy.',
      'Phần mở rộng: quá trình dịch gồm bốn pha (tiền xử lý, biên dịch, hợp dịch, liên kết) và đơn vị dịch là tệp sau tiền xử lý, giải thích nhiều lỗi liên kết ở môn sau.',
    ] },
  { id: 'n-bien-kieu-bieu-thuc', t: 'Biến, kiểu dữ liệu và biểu thức', c: 'intro-programming', cov: ['ip-types-expressions'],
    p: [
      'Biến có tên, kiểu và giá trị; khởi tạo khác gán, và biến chưa khởi tạo mang giá trị không xác định. Kiểu số nguyên có miền hữu hạn nên tràn số cho kết quả sai âm thầm; float và double là số thực dấu chấm động xấp xỉ, còn bool, char và hằng có vai trò riêng.',
      'Biểu thức tuân theo độ ưu tiên toán tử; chia nguyên khác chia thực, và ép kiểu tường minh (static_cast) tốt hơn để trình biên dịch tự ngầm chuyển.',
    ] },
  { id: 'n-re-nhanh-vong-lap', t: 'Rẽ nhánh và vòng lặp', c: 'intro-programming', cov: ['ip-control-flow'],
    p: [
      'Rẽ nhánh dùng if/else và switch; cần phân chia các trường hợp biên và biết rằng toán tử logic đánh giá đoản mạch, bỏ qua vế sau khi kết quả đã rõ. Vòng lặp while, for, do-while cần điều kiện dừng hữu hạn để chương trình kết thúc.',
      'Mẫu biến đếm và biến tích lũy, lỗi lệch một đơn vị, vòng lặp lồng nhau và dừng sớm bằng break, continue; số bước lặp lồng nhau thường ước lượng bằng tích các số lần lặp.',
    ] },
  { id: 'n-ham-pham-vi', t: 'Hàm, truyền tham số và phạm vi biến', c: 'intro-programming', cov: ['ip-functions-scope'],
    p: [
      'Hàm có tham số, giá trị trả về, và khai báo tách khỏi định nghĩa. Truyền theo giá trị sao chép đối số, truyền theo tham chiếu T& cho phép sửa biến của nơi gọi, và const T& tránh sao chép mà không cho sửa.',
      'Biến cục bộ có phạm vi khối và hết sống khi ra khỏi khối; tên trong khối trong có thể che tên ngoài. Mỗi lời gọi tạo một khung trên ngăn xếp lời gọi, và hàm đệ quy cơ sở dựa trên chính cơ chế này.',
    ] },
  { id: 'n-vector-chuoi-struct', t: 'Mảng động, chuỗi và bản ghi', c: 'intro-programming', cov: ['ip-sequences-strings'],
    p: [
      'std::vector lưu dãy phần tử liên tiếp, chỉ số bắt đầu từ 0 và truy cập ngoài biên là lỗi; các bài toán cơ sở trên dãy gồm duyệt, tìm tuyến tính, lọc và cực trị. std::string xử lý văn bản, struct gom các trường thành một bản ghi.',
      'Phần mở rộng: std::string_view là góc nhìn không sở hữu chuỗi, nên phải bảo đảm chuỗi gốc còn sống khi dùng.',
    ] },
  { id: 'n-nhap-xuat-tep-loi', t: 'Luồng nhập xuất, tệp và xử lý đầu vào lỗi', c: 'intro-programming', cov: ['ip-io-error-handling'],
    p: [
      'Đọc theo từ (>>) khác đọc nguyên dòng (getline), và luồng có trạng thái cần kiểm tra sau mỗi lần đọc; ifstream, ofstream và stringstream cho phép làm việc với tệp và chuỗi cùng một giao diện luồng.',
      'Đầu vào từ người dùng phải được kiểm tra miền hợp lệ, và tách hàm tính toán khỏi giao diện nhập xuất giúp kiểm thử. Quy trình gỡ lỗi cơ bản là tái hiện, lần vết trạng thái và chuẩn bị cho trình gỡ lỗi.',
    ] },

  // ── Thiết kế chương trình và gỡ lỗi
  { id: 'n-hop-dong-ham', t: 'Hợp đồng hàm, tác dụng phụ và assert', c: 'program-design-debugging', cov: ['pdd-contracts-decomposition'],
    p: [
      'Hợp đồng hàm gồm tiền điều kiện (bên gọi phải bảo đảm), hậu điều kiện (hàm cam kết) và bất biến. Hàm thuần túy chỉ tính từ đầu vào ra đầu ra, còn hàm có tác dụng phụ thay đổi trạng thái bên ngoài; tách hai loại làm mã dễ kiểm thử.',
      'assert và static_assert phát hiện lỗi lập trình nội bộ, còn dữ liệu sai do người dùng nhập phải được xử lý như lỗi bình thường chứ không bằng assert.',
    ] },
  { id: 'n-debug-khoa-hoc', t: 'Chẩn đoán lỗi theo phương pháp khoa học', c: 'program-design-debugging', cov: ['pdd-scientific-debugging'],
    p: [
      'Lỗi có chuỗi nhân quả: nguyên nhân gốc (defect) tạo trạng thái nhiễm lỗi, rồi mới lộ ra triệu chứng; chỗ thấy lỗi thường không phải chỗ gây lỗi. Gỡ lỗi khoa học là đặt giả thuyết, thử nghiệm và loại trừ, dựa trên ca tái hiện tất định và thu gọn đầu vào tối thiểu.',
      'Khoanh vùng nhị phân trong quá trình chạy và ghi vết chẩn đoán có cấu trúc thu hẹp nhanh vùng nghi ngờ, thay cho đoán mò.',
    ] },
  { id: 'n-trinh-go-loi', t: 'Trình gỡ lỗi, điểm dừng và ngăn xếp lời gọi', c: 'program-design-debugging', cov: ['pdd-debugger-callstack'],
    p: [
      'Biên dịch kèm thông tin gỡ lỗi (-g) cho phép đặt điểm dừng, kể cả điểm dừng có điều kiện. Đi từng bước có ba thao tác: step over, step into, step out; biểu thức theo dõi cho thấy trạng thái thay đổi ra sao.',
      'Ngăn xếp lời gọi là chuỗi khung kích hoạt, và vết ngăn xếp (backtrace) khi chương trình sập cho biết chuỗi lời gọi dẫn tới điểm lỗi.',
    ] },
  { id: 'n-kiem-thu', t: 'Thiết kế ca kiểm thử và kiểm thử hồi quy', c: 'program-design-debugging', cov: ['pdd-testing-edge-cases'],
    p: [
      'Phân vùng tương đương chia đầu vào thành lớp hành xử giống nhau, và phân tích giá trị biên tập trung vào chỗ lớp đổi tính chất. Kiểm thử hộp đen dựa trên đặc tả; hộp trắng dựa trên cấu trúc mã và đo bao phủ câu lệnh, nhánh, vòng lặp, nhưng bao phủ cao vẫn không chứng minh đúng.',
      'Kiểm thử đơn vị tự kiểm cho kết quả đạt hoặc không, và kiểm thử hồi quy chạy lại bộ ca để phát hiện thay đổi làm hỏng chức năng cũ.',
    ] },

  // ── Git và công cụ phát triển
  { id: 'n-git-doi-tuong', t: 'Mô hình đối tượng của Git và ba vùng làm việc', c: 'git-dev-tools', cov: ['gdt-git-object-model'],
    p: [
      'Git lưu ảnh chụp trạng thái chứ không phải chuỗi thay đổi: ba loại đối tượng bất biến blob, tree, commit được định địa chỉ bằng mã băm và nối thành đồ thị không chu trình. Ba vùng làm việc là working tree, staging area (index) và kho .git, và commit lấy nội dung từ vùng staging.',
      'Tệp sinh tự động được loại bằng .gitignore, và commit nguyên tử gói đúng một thay đổi có ý nghĩa để dễ đọc, hoàn tác.',
    ] },
  { id: 'n-git-nhanh-hop-nhat', t: 'Nhánh, hợp nhất, rebase và xung đột', c: 'git-dev-tools', cov: ['gdt-branching-merging'],
    p: [
      'Nhánh chỉ là con trỏ động tới một commit; HEAD trỏ tới nhánh hiện tại, và detached HEAD là khi HEAD trỏ thẳng vào commit. Hợp nhất có hai dạng: fast-forward khi chỉ cần dời con trỏ, và three-way merge dựa trên tổ tiên chung gần nhất.',
      'Xung đột phát sinh khi hai nhánh sửa cùng vùng và phải giải quyết bằng tay; merge giữ nguyên lịch sử còn rebase viết lại lịch sử cho tuyến tính, nên rebase không dùng trên commit đã chia sẻ.',
    ] },
  { id: 'n-git-lich-su-remote', t: 'Truy vết lịch sử, hoàn tác và kho từ xa', c: 'git-dev-tools', cov: ['gdt-history-recovery-remotes'],
    p: [
      'Lịch sử được điều tra bằng log, show, blame và tìm nhị phân commit gây lỗi bằng bisect. Hoàn tác có nhiều mức: restore sửa tệp, revert tạo commit đảo ngược, reset di chuyển nhánh với ba chế độ soft, mixed, hard; reflog là lưới an toàn ghi lại các vị trí HEAD đã đi qua.',
      'Kho từ xa có nhánh theo dõi như origin/main; fetch chỉ tải về, pull là fetch cộng hợp nhất, push đẩy commit lên.',
    ] },
  { id: 'n-pipe-build', t: 'Đường ống POSIX và biên dịch nhiều tệp', c: 'git-dev-tools', cov: ['gdt-shell-build-systems'],
    p: [
      'Ba luồng chuẩn có thể chuyển hướng, và đường ống nối đầu ra của lệnh này vào đầu vào của lệnh kia; grep và các bộ lọc dòng lệnh dựa trên mô hình này. Chương trình C++ nhiều tệp tách tệp tiêu đề (khai báo) khỏi tệp cài đặt, và header guard ngăn nạp trùng.',
      'Quan hệ phụ thuộc giữa các tệp tạo thành đồ thị; Make biên dịch gia tăng chỉ phần đã đổi, còn CMake sinh cấu hình dựng cho nhiều môi trường.',
    ] },
];
