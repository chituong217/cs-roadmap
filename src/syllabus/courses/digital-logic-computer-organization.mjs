import { getCourseById } from '../catalog.mjs';

const ref = (sourceId, locator) => ({ sourceId, locator, relationship: 'primary' });
const nand = (locator) => ref('nand2tetris', locator);
const notes = (locator) => ref('ucb-cs61c-notes', locator);
const topic = (id, title, paragraphs, sources) => ({ id, title, level: 'core', paragraphs, sources });

export const COURSE_DIGITAL_LOGIC_COMPUTER_ORGANIZATION = {
  ...getCourseById('digital-logic-computer-organization'),
  overview: [
    'Logic số nghiên cứu cách biểu diễn và biến đổi thông tin bằng các trạng thái rời rạc. Một bit không tự mang ý nghĩa số nguyên, ký tự hay lệnh: ý nghĩa xuất hiện khi một quy ước giải mã được áp dụng cho dãy bit. Từ phân biệt ấy, môn học xây dựng lần lượt biểu diễn dữ liệu, cổng logic, mạch tổ hợp và mạch có trạng thái. Đích đến là giải thích được vì sao một máy gồm các khối đơn giản lại thực hiện được phép cộng, lưu kết quả và chọn câu lệnh kế tiếp.',
    'Mạch CPU Hack của Nand2Tetris là mô hình xuyên suốt vì đặc tả đủ nhỏ để theo dõi từng dây điều khiển. Biểu diễn dấu chấm động và ký tự được bổ sung để nối mô hình với dữ liệu trong chương trình C++. Người học phân biệt đặc tả chức năng với cách chế tạo transistor, và phân biệt CPU mô hình với CPU thương mại. Độ trễ, xung nhịp và tín hiệu trạng thái được giải thích trước khi dùng chúng để mô tả chu trình lệnh; cache, pipeline, đặc quyền và bộ nhớ ảo dành cho môn Kiến trúc máy tính tiếp theo.',
  ],
  boundaries: [
    'Hack là mô hình 16 bit phục vụ học tập; không suy rộng cấu trúc thanh ghi và tập lệnh của Hack thành quy luật của mọi CPU.',
    'HDL và mô phỏng logic không thay thế kiến thức thiết kế transistor, mạch tương tự hoặc kiểm định thời gian của chip vật lý.',
  ],
  sources: [nand('Course Part I, Projects 1–5: Boolean Logic through Computer Architecture'), notes('Number Representation; Floating Point; Synchronous Digital Systems')],
  chapters: [
    {
      id: 'dlco-binary-numbers-ieee754', title: 'Biểu diễn bit, số nguyên, dấu chấm động và ký tự',
      overview: ['Cùng một byte có thể được đọc như số không dấu, một phần của số có dấu hoặc một đơn vị mã hóa văn bản. Chương mở đầu đặt quy ước biểu diễn trước các phép toán, từ hệ đếm theo vị trí đến bù hai và dấu chấm động. Nhờ đó, kết quả của phép cộng trong mạch được phân biệt với quy tắc của ngôn ngữ lập trình, còn số lượng byte của một chuỗi được phân biệt với số ký tự người dùng nhìn thấy.'],
      sources: [notes('Number Representation; Floating Point')],
      topics: [
        topic('dlco-positional-bits-bytes', 'Hệ đếm theo vị trí và độ rộng biểu diễn', [
          'Với n bit, có 2^n mẫu bit khác nhau. Quy ước số nguyên không dấu gán trọng số 2^i cho bit ở vị trí i, nên miền giá trị là 0 đến 2^n−1. Ví dụ 1011₂ bằng 8+2+1=11; dạng thập lục phân gom bốn bit thành một chữ số để đọc địa chỉ dễ hơn, không tạo ra dữ liệu mới. Byte trong các nền tảng đang xét gồm tám bit; KiB bằng 1024 byte, còn kB theo SI bằng 1000 byte.',
          'Độ rộng là một phần của bài toán: mẫu 1111 có thể là 15 với bốn bit không dấu nhưng chưa đủ để kết luận giá trị có dấu. Thứ tự byte trong bộ nhớ, gọi là endianness, chỉ quy định cách sắp byte của một giá trị nhiều byte; nó không đảo thứ tự các chữ số khi viết số. Giao thức và định dạng tệp cần quy ước riêng để hai máy đọc cùng giá trị.',
        ], [notes('Number Representation; IEC and Base-10 Prefixes')]),
        topic('dlco-twos-complement-overflow', 'Bù hai, mở rộng dấu và tràn số', [
          'Trong bù hai n bit, bit cao nhất có trọng số −2^(n−1), các bit còn lại giữ trọng số dương. Miền giá trị là −2^(n−1) đến 2^(n−1)−1, nên bốn bit 1111 biểu diễn −1. Đảo bit rồi cộng một tạo số đối theo modulo 2^n; riêng giá trị âm nhỏ nhất không có số đối dương cùng độ rộng. Mở rộng dấu lặp bit cao nhất để giữ nguyên giá trị khi tăng độ rộng.',
          'Mạch cộng n bit chỉ giữ n bit thấp và có thể cung cấp carry ra ngoài. Carry của cộng không dấu khác overflow của cộng có dấu: hai số dương tạo kết quả âm là một dấu hiệu overflow có dấu. Quy tắc phần cứng không cấp phép bỏ qua ngôn ngữ: trong C++, cộng unsigned cuộn theo modulo độ rộng, còn tràn signed là hành vi không xác định. Phân biệt này ngăn việc dùng thử nghiệm một CPU để chứng minh mã C++ luôn cuộn vòng.',
        ], [notes('Number Representation: signed integers and arithmetic')]),
        topic('dlco-floating-point-unicode', 'IEEE 754, sai số và mã hóa văn bản', [
          'Dấu chấm động nhị phân tách dấu, số mũ và phần trị để đổi độ chính xác lấy miền giá trị rộng. Với binary32 chuẩn hóa, giá trị có dạng (−1)^s × 1.f × 2^(e−127); trường mũ đặc biệt dành cho zero, số dưới chuẩn, vô cực và NaN nên không áp dụng công thức ấy cho mọi mẫu bit. Làm tròn khiến 0.1 thường không được lưu chính xác; cộng không còn kết hợp trong mọi trường hợp. So sánh gần đúng cần sai số tuyệt đối, tương đối và miền bài toán, không một epsilon chung cho mọi dữ liệu.',
          'Văn bản dùng quy ước khác: Unicode gán code point, còn UTF-8 mã hóa một code point bằng một đến bốn byte. Một ký tự nhìn thấy có thể gồm nhiều code point, chẳng hạn chữ và dấu kết hợp. Vì vậy độ dài byte của std::string không đương nhiên là số ký tự, và cắt theo byte có thể phá một chuỗi UTF-8. Các ví dụ ở đây nhằm phân biệt lớp biểu diễn, chưa xây dựng bộ xử lý ngôn ngữ tự nhiên.',
        ], [notes('Floating Point'), ref('dive-into-systems', 'Chapter 4: Binary and Data Representation, character and floating-point representations')]),
      ],
    },
    {
      id: 'dlco-boolean-combinational-alu', title: 'Đại số Boolean, mạch tổ hợp và ALU',
      overview: ['Mạch tổ hợp xác định đầu ra từ đầu vào hiện tại sau một độ trễ lan truyền; nó không có trạng thái được lưu qua xung nhịp. Chương nối biểu thức Boolean với bảng chân trị rồi với kết nối cổng, để việc thiết kế mạch trở thành một lập luận kiểm tra được. Các khối chọn dữ liệu, cộng nhị phân và xử lý từng bit được ghép thành ALU; tín hiệu điều khiển quyết định phép biến đổi nào xuất hiện ở đầu ra.'],
      sources: [nand('Projects 1 Boolean Logic and 2 Boolean Arithmetic')],
      topics: [
        topic('dlco-gates-truth-tables', 'Cổng logic, bảng chân trị và biểu thức tương đương', ['AND chỉ cho ra 1 khi cả hai đầu vào là 1, OR khi ít nhất một đầu vào là 1, còn NOT đảo giá trị. Bảng chân trị liệt kê mọi tổ hợp đầu vào nên là đặc tả đầy đủ cho một hàm Boolean hữu hạn. Từ các hàng đầu ra bằng 1 có thể lập tổng các tích, rồi rút gọn bằng các đồng nhất thức như De Morgan. Hai biểu thức tương đương về logic có thể khác số cổng, độ trễ và số dây; đúng chức năng chưa đồng nghĩa tối ưu vật lý. NAND là một cơ sở đầy đủ: nối các đầu vào với nhau tạo NOT, rồi ghép để tạo AND và OR.'], [nand('Project 1: elementary gates, NAND implementation contract')]),
        topic('dlco-mux-demux-buses', 'Chọn và định tuyến dữ liệu bằng Mux, DMux và bus', ['Multiplexer chọn một trong nhiều đầu vào theo bit chọn; với hai ngõ, out = (¬s ∧ a) ∨ (s ∧ b). Demultiplexer đưa một đầu vào đến ngõ ra được chọn và đặt các ngõ khác về 0. Bus chỉ là nhóm dây được quy ước cùng đại diện một giá trị nhiều bit; việc chọn bus áp dụng phép chọn cho từng bit cùng một tín hiệu điều khiển. Khi ghép Mux nhiều tầng, thứ tự các bit chọn phải khớp đặc tả. Một đường chọn đảo sai có thể cho kết quả đúng ở vài dữ liệu trùng nhau nhưng sai về toàn bộ chức năng.'], [nand('Project 1: Mux, DMux, Mux16, Mux4Way16, DMux4Way')]),
        topic('dlco-adder-alu-flags', 'Mạch cộng và khối số học–logic có điều khiển', ['Half-adder cộng hai bit bằng sum = a XOR b và carry = a AND b. Full-adder nhận thêm carry vào; nối carry giữa các vị trí tạo bộ cộng nhiều bit. Ripple carry đơn giản nhưng đường truyền carry dài làm tăng độ trễ. ALU ghép cộng với phép AND và các bước biến đổi đầu vào, sau đó tạo cờ zero hoặc negative từ kết quả. Trong Hack, các bit điều khiển zero, negate, chọn phép toán và đảo đầu ra cho nhiều hàm từ cùng một phần cứng. Cờ negative ở đây chỉ là bit cao nhất; ý nghĩa số học của nó phụ thuộc quy ước có dấu và việc có tràn hay không.'], [nand('Project 2: HalfAdder, FullAdder, Add16, Inc16, ALU specification')]),
      ],
    },
    {
      id: 'dlco-sequential-registers-ram', title: 'Xung nhịp, mạch tuần tự, thanh ghi và RAM',
      overview: ['Khả năng lưu trạng thái là điểm khác biệt giữa một máy tính và một mạng cổng chỉ biến đổi tức thời dữ liệu. Chương dùng phần tử lưu một bit làm nền để xây thanh ghi, bộ đếm chương trình và bộ nhớ có địa chỉ. Mô hình thời gian được nêu rõ: đầu ra của mạch tổ hợp cần ổn định trước khi được phần tử trạng thái chốt lại; nhờ đó có thể suy luận trạng thái ở từng chu kỳ thay vì tưởng tượng mọi dây thay đổi đồng thời không có độ trễ.'],
      sources: [nand('Project 3: Sequential Logic'), notes('Synchronous Digital Systems')],
      topics: [
        topic('dlco-clock-state-timing', 'Trạng thái hiện tại, trạng thái kế tiếp và xung nhịp', ['Một phần tử D flip-flop lưu bit từ đầu vào D tại sự kiện xung nhịp được quy định rồi duy trì đầu ra giữa các lần cập nhật. Mạch tuần tự vì thế được mô tả bằng trạng thái hiện tại và hàm tạo trạng thái kế tiếp. Mô hình lý tưởng trong HDL bỏ qua nhiều chi tiết điện, nhưng mạch vật lý cần thời gian setup và hold quanh cạnh chốt. Đường tổ hợp dài nhất cùng các độ trễ liên quan giới hạn chu kỳ tối thiểu. Tăng tần số tùy ý có thể chốt dữ liệu chưa ổn định; xung nhịp không tự làm một phép toán tổ hợp nhanh hơn.'], [nand('Project 3: DFF and clocked chips'), notes('Synchronous Digital Systems')]),
        topic('dlco-register-counter', 'Thanh ghi có nạp và bộ đếm chương trình', ['Thanh ghi n bit ghép n phần tử lưu và dùng Mux chọn dữ liệu mới hoặc chính dữ liệu cũ. Khi load bằng 0, trạng thái được giữ; khi load bằng 1, dữ liệu vào được ghi ở thời điểm chốt. Bộ đếm chương trình thêm các khả năng tăng một, nạp đích nhảy và reset. Nếu nhiều tín hiệu cùng bật, thứ tự ưu tiên là một phần của đặc tả, không được suy đoán từ tên tín hiệu. Theo dõi PC trước và sau mỗi cạnh xung giải thích được vì sao một lệnh nhảy thay đổi lần lấy lệnh tiếp theo nhưng không quay ngược thời gian của lệnh đang thực hiện.'], [nand('Project 3: Bit, Register, PC specifications')]),
        topic('dlco-addressed-memory', 'Bộ nhớ có địa chỉ và giới hạn mô hình RAM', ['Bộ nhớ RAM mô hình nhận địa chỉ để chọn một từ dữ liệu; đọc chọn đầu ra, còn ghi kết hợp địa chỉ với tín hiệu load. Cây Mux và DMux cho thấy cách ghép nhiều khối nhỏ thành khối lớn và vì sao k bit địa chỉ chọn được 2^k từ. Dung lượng byte còn phụ thuộc số bit mỗi từ. Mô hình RAM bằng thanh ghi phục vụ lập luận logic, không mô tả chính xác DRAM vật lý với ô tụ điện, làm tươi và tổ chức hàng/cột. Quy tắc đọc hoặc ghi đồng thời cùng địa chỉ cũng phụ thuộc giao diện bộ nhớ cụ thể, không có một hành vi chung cho mọi thiết bị.'], [nand('Project 3: RAM8 through RAM16K'), notes('Synchronous Digital Systems: state elements')]),
      ],
    },
    {
      id: 'dlco-datapath-control-cpu-cycle', title: 'Datapath, điều khiển và chu trình lệnh CPU mô hình',
      overview: ['CPU phối hợp các khối đã biết thay vì cần một loại phép màu mới. Thanh ghi giữ toán hạng và địa chỉ; ALU tính kết quả; bộ điều khiển giải mã bit lệnh thành tín hiệu chọn và ghi. Chương đi qua một chu trình lấy, giải mã và thực hiện lệnh trên Hack, rồi nối CPU với bộ nhớ và thiết bị ánh xạ địa chỉ. Việc tách đường dữ liệu khỏi điều khiển giúp xác định chính xác một lệnh cần những tài nguyên nào và cập nhật trạng thái nào.'],
      sources: [nand('Project 4: Machine Language; Project 5: Computer Architecture')],
      topics: [
        topic('dlco-instruction-control', 'Lệnh máy và tín hiệu điều khiển', ['Lệnh máy là một mẫu bit được ISA quy định ý nghĩa. Trong Hack, A-instruction nạp hằng địa chỉ vào thanh ghi A; C-instruction chọn phép tính, nơi nhận kết quả và điều kiện nhảy. Các trường ấy được giải mã thành tín hiệu cho ALU, Mux, thanh ghi và đường ghi RAM. Cùng một kết quả ALU có thể được ghi vào nhiều đích nếu đặc tả cho phép. Assembly là cách đặt tên dễ đọc cho mẫu bit, còn biến và vòng lặp bậc cao phải được chuyển thành chuỗi lệnh cùng các quy ước lưu trữ; CPU không tự biết khái niệm biến C++.'], [nand('Project 4: Hack machine language; Project 5: CPU contract')]),
        topic('dlco-fetch-execute-branch', 'Theo dõi lấy lệnh, tính toán và nhảy', ['PC chọn lệnh từ bộ nhớ chương trình; các bit lệnh cùng trạng thái thanh ghi xác định dữ liệu tổ hợp và tín hiệu cập nhật ở chu kỳ đó. Với lệnh cộng rồi lưu, cần chỉ rõ toán hạng đến từ đâu, ALU làm gì, đích nào nhận kết quả và PC kế tiếp là gì. Với nhảy có điều kiện, cờ zero hoặc negative kết hợp trường jump quyết định nạp đích hay tăng PC. Mô hình này dùng cấu trúc và thời gian của Hack; một CPU pipeline hoặc CPU có lệnh dài nhiều chu kỳ sẽ chia công việc khác dù vẫn thực hiện cùng trừu tượng lệnh.'], [nand('Project 5: CPU, Computer and supplied Add/Max tests')]),
        topic('dlco-memory-map-integration', 'Bản đồ địa chỉ và ghép thành máy tính', ['Bản đồ bộ nhớ chia miền địa chỉ cho RAM thông thường, màn hình và bàn phím trong Hack. Bộ giải mã địa chỉ chọn thiết bị nhận thao tác; ghi vào địa chỉ màn hình thay đổi trạng thái được bộ hiển thị diễn giải thành điểm ảnh. Đây là ví dụ I/O ánh xạ bộ nhớ, không có nghĩa mọi địa chỉ là một ô DRAM. Ghép CPU, ROM lệnh và bộ nhớ dữ liệu thành máy hoàn chỉnh cho phép giải thích chương trình từ mã lệnh đến thay đổi hiển thị. Mô hình chưa có tiến trình, quyền truy cập hay bộ nhớ ảo; các cơ chế đó cần hỗ trợ bổ sung của phần cứng và hệ điều hành.'], [nand('Project 5: Memory and Computer; Screen and Keyboard mapping')]),
      ],
    },
  ],
};
