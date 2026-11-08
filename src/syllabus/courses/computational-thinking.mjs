export const COURSE_COMPUTATIONAL_THINKING = {
  id: 'computational-thinking',
  code: 'CS-03',
  title: 'Nhập môn CS và tư duy tính toán',
  blockId: 'block-1',
  level: 'core',
  prerequisites: [
    {
      courseId: 'computing-environment',
      type: 'co_requisite',
      reason: 'Cần mô hình tệp, byte và tiến trình để đối chiếu khái niệm biểu diễn thông tin và thực thi thuật toán.',
    },
    {
      courseId: 'math-bridge',
      type: 'co_requisite',
      reason: 'Cần lũy thừa cơ số 2, logarit cơ số 2 và dãy số để phân tích hệ nhị phân và số bước tìm kiếm.',
    },
  ],
  overview: [
    'Môn học trả lời câu hỏi nền tảng trước khi người học gõ dòng mã lệnh đầu tiên: Khoa học máy tính thực chất nghiên cứu điều gì, và làm thế nào một cỗ máy chỉ biết bật/tắt hai trạng thái vật lý lại có thể biểu diễn mọi loại thông tin và giải quyết các bài toán phức tạp? Nội dung bắt đầu từ nguyên lý biểu diễn thông tin rời rạc bằng bit và byte, hệ đếm nhị phân và thập lục phân theo giá trị vị trí, đến cách mã hóa văn bản, hình ảnh và âm thanh thành các con số.',
    'Trên nền biểu diễn dữ liệu đó, môn học định nghĩa chính xác khái niệm bài toán tính toán (computational problem), thể hiện đầu vào (instance), thuật toán (algorithm) như một quy trình hữu hạn không mơ hồ và sự khác biệt giữa thuật toán với chương trình cụ thể. Hai chương cuối rèn luyện kỹ năng cốt lõi nhất của người học lập trình: mô hình hóa trạng thái, lập bảng lần vết thực thi từng bước (dry-run execution trace), tìm kiếm tuần tự so với tìm kiếm chia đôi, phát hiện vòng lặp vô hạn, và phương pháp phân rã bài toán lớn thành các tầng trừu tượng độc lập.',
  ],
  boundaries: [
    'Tập trung hoàn toàn vào mô hình tư duy tính toán, biểu diễn thông tin, đặc tả đầu vào/đầu ra và lần vết thuật toán bằng mã giả hoặc sơ đồ rõ ràng; chưa đi vào cú pháp chi tiết của C++ (thuộc Môn CS-04).',
    'Phần so sánh số bước thực hiện (như $n$ bước của tìm kiếm tuyến tính so với $\\approx \\log_2 n$ bước của tìm kiếm nhị phân) dừng ở việc đếm trực tiếp và lập bảng so sánh; định nghĩa lượng từ hình thức của ký hiệu $O, \\Omega, \\Theta$ nằm ở Môn CS-09 và CS-16.',
    'Biểu diễn số âm bù hai (two’s complement) và chuẩn dấu chấm động IEEE 754 ở mức phần cứng chỉ được giới thiệu khái niệm tồn tại giới hạn hữu hạn bit; chi tiết mạch cộng/trừ bit và trường экспонент/mantissa nằm ở Môn CS-22 và CS-23.',
  ],
  sources: [
    {
      sourceId: 'harvard-cs50x',
      locator: 'Week 0 (Scratch / Computational Thinking: Binary, Representation, Algorithms, Pseudocode, Abstraction) & Week 3 (Linear vs Binary Search intuition)',
      relationship: 'primary',
    },
    {
      sourceId: 'composing-programs',
      locator: 'Chapter 1: §1.1–1.4 Building Abstractions with Functions (Computational Processes, Black-Box Abstraction, Designing Functions)',
      relationship: 'supplementary',
    },
  ],
  chapters: [
    {
      id: 'ct-information-representation',
      title: 'Chương 1 — Biểu diễn thông tin rời rạc: Bit, hệ nhị phân, hệ thập lục phân và mã hóa đa phương tiện',
      overview: [
        'Chương này giải thích cơ chế thống nhất phía sau mọi dữ liệu số: vì sao phần cứng máy tính chọn hệ nhị phân hai trạng thái, cách hệ đếm theo vị trí biểu diễn số tự nhiên trong cơ số $2$, $10$, $16$, và cách cùng một dãy bit có thể biểu diễn số lượng, chữ cái, màu sắc hoặc âm thanh tùy theo quy ước ngữ cảnh.',
      ],
      sources: [
        {
          sourceId: 'harvard-cs50x',
          locator: 'Week 0 Lecture Notes: Information Representation — Binary, Bits, Bytes, ASCII, Unicode, RGB, and Audio Sampling',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'ct-ir-bits-positional-numeration',
          title: 'Đơn vị thông tin nhị phân (bit), tổ hợp $2^k$ trạng thái và hệ đếm theo vị trí (cơ số 10, cơ số 2, cơ số 16)',
          level: 'core',
          paragraphs: [
            'Ở tầng vật lý, việc chế tạo các linh kiện điện tử phân biệt chính xác 10 mức điện áp khác nhau rất dễ bị nhiễu, trong khi phân biệt hai trạng thái đối lập (có điện / không có điện, cao / thấp) lại cực kỳ bền vững. Mỗi phần tử lưu trữ một trong hai trạng thái đó được gọi là một **chữ số nhị phân (binary digit — bit)**, ký hiệu là `0` hoặc `1`. Một bit biểu diễn được $2^1 = 2$ khả năng; ghép $k$ bit độc lập tạo thành $2^k$ chuỗi bit phân biệt (ví dụ 1 byte gồm $8$ bit biểu diễn được $2^8 = 256$ trạng thái khác nhau, từ `00000000` đến `11111111`, tương ứng với các số nguyên không âm từ $0$ đến $2^8 - 1 = 255$).',
            'Tiểu mục này làm rõ bản chất của **hệ đếm theo vị trí (positional numeral system)** với cơ số $b \\ge 2$: một chuỗi chữ số $d_{k-1} d_{k-2} \\dots d_1 d_0$ trong cơ số $b$ (với $0 \\le d_i < b$) luôn có giá trị bằng tổng các lũy thừa của $b$: $$\\sum_{i=0}^{k-1} d_i \\cdot b^i$$ Trong hệ thập phân ($b=10$), các cột có trọng số $10^0=1, 10^1=10, 10^2=100, \\dots$; hoàn toàn tương tự, trong **hệ nhị phân ($b=2$)**, các cột từ phải sang trái có trọng số $2^0=1, 2^1=2, 2^2=4, 2^3=8, 2^4=16, \\dots$ (ví dụ $1101_2 = 1\\cdot 8 + 1\\cdot 4 + 0\\cdot 2 + 1\\cdot 1 = 13_{10}$). Để đổi ngược một số tự nhiên $n$ sang nhị phân, ta chia liên tiếp $n$ cho $2$ và ghi lại các số dư từ dưới lên (hoặc tách $n$ thành tổng các lũy thừa của $2$ lớn nhất không vượt quá nó). Cuối cùng, tiểu mục giới thiệu **hệ thập lục phân (hexadecimal, cơ số $16$)** dùng 16 ký hiệu `0–9` và `A–F` (ứng với $10$ đến $15$): vì $16 = 2^4$, mỗi chữ số hex gom gọn đúng một cụm $4$ bit nhị phân (nibble), và 1 byte ($8$ bit) luôn viết gọn thành đúng 2 chữ số hex từ `0x00` đến `0xFF`.',
          ],
          sources: [
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 0 Notes: Binary and Positional Notation ($2^0, 2^1, 2^2, \\dots$) & Week 4 Notes: Hexadecimal (`0x` notation)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ct-ir-context-dependent-encoding',
          title: 'Mã hóa văn bản, màu sắc điểm ảnh, âm thanh số và nguyên lý diễn giải phụ thuộc ngữ cảnh',
          level: 'core',
          paragraphs: [
            'Vì bộ nhớ máy tính chỉ chứa toàn các con số nhị phân, để lưu trữ thế giới thực ta phải thiết lập các **quy ước ánh xạ (encoding schemes)** chuyển đổi các đối tượng phi số thành số. Đối với văn bản, bảng mã **ASCII** dùng 1 byte (7 bit hiệu dụng) cho 128 ký tự tiếng Anh và dấu câu cơ bản, chẳng hạn chuỗi 3 byte có giá trị thập phân `72 73 33` khi được giải mã như văn bản ASCII sẽ hiện ra chuỗi `"HI!"`. Mở rộng lên toàn bộ ngôn ngữ loài người, bộ chuẩn **Unicode** gán mỗi đơn vị nguyên tử văn bản với một **giá trị vô hướng Unicode (Unicode scalar value; loại trừ các điểm mã surrogate)** như `U+0041`, được chuẩn **UTF-8** mã hóa bằng độ dài thay đổi từ **1 đến 4 byte** cho mỗi giá trị vô hướng Unicode; đồng thời một **ký tự hoặc biểu tượng hiển thị trên màn hình (user-perceived character / extended grapheme cluster)** có thể được tạo thành từ **một hoặc nhiều điểm mã ghép lại** (như chữ tiếng Việt tổ hợp chữ cái + dấu thanh, hoặc một emoji ghép bằng ký tự nối độ rộng bằng không `ZWJ` như `👩‍💻` gồm 3 điểm mã `U+1F469` + `U+200D` + `U+1F4BB`, chiếm 11 byte UTF-8).',
            'Đối với hình ảnh kỹ thuật số dạng lưới điểm ảnh (raster bitmap), mỗi điểm ảnh (pixel) thường được biểu diễn trong mô hình màu cộng **RGB** bằng 3 byte chỉ cường độ Đỏ (Red), Lục (Green), Lam (Blue) từ $0$ đến $255$; khi đó cũng chính 3 byte có giá trị `72 73 33` nêu trên nếu nằm trong tệp ảnh lại được màn hình diễn giải thành một điểm ảnh màu vàng sẫm. Tương tự, âm thanh liên tục được số hóa bằng cách lấy mẫu (sampling) biên độ sóng âm hàng chục nghìn lần mỗi giây và lượng tử hóa (quantization) mỗi mẫu thành một số nguyên hữu hạn bit. Qua đó, người học nắm được nguyên lý cốt lõi: **cùng một dãy bit trong bộ nhớ không tự mang kiểu dữ liệu cố hữu; ý nghĩa của nó hoàn toàn do kiểu dữ liệu và ngữ cảnh mà chương trình áp đặt lên khi đọc**.',
          ],
          sources: [
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 0 Notes: Representing Text (ASCII, Unicode Code Points, UTF-8, Emoji ZWJ Sequences), Colors (RGB), Images, Video, and Sound in Binary',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ct-ir-finite-precision-limits',
          title: 'Giới hạn của biểu diễn hữu hạn bit: hiện tượng tràn số nguyên (overflow) và sai số xấp xỉ thực',
          level: 'core',
          paragraphs: [
            'Trong toán học thuần túy, tập số nguyên $\\mathbb{Z}$ là vô hạn và giữa hai số thực bất kỳ luôn có vô số số thực khác; nhưng trong máy tính thực tế, mỗi biến chỉ được cấp một số lượng bit cố định (như $8, 16, 32$ hoặc $64$ bit). Tiểu mục này giải thích hệ quả tất yếu của giới hạn vật lý đó. Thứ nhất, khi kết quả của một phép cộng hoặc nhân vượt quá giá trị lớn nhất mà $k$ bit có thể biểu diễn (ví dụ cộng thêm $1$ vào byte không dấu đang chứa $255 = 11111111_2$), bit nhớ thứ $9$ bị tràn ra ngoài phạm vi lưu trữ, gây ra hiện tượng **tràn số nguyên (integer overflow)** làm giá trị quay vòng về $00000000_2 = 0$ (giống như công-tơ-mét xe máy 5 chữ số đi qua `99999` quay về `00000`).',
            'Thứ hai, khi biểu diễn số thực bằng một số lượng bit hữu hạn (số dấu chấm động — floating-point), máy tính chỉ lưu được một tập hữu hạn các điểm rời rạc trên trục số thực. Những phân số rất đơn giản trong hệ cơ số $10$ như $1/10 = 0.1$ khi đổi sang hệ cơ số $2$ lại là phân số nhị phân vô hạn tuần hoàn $0.0001100110011\\dots_2$, buộc phải cắt cụt ở bit cuối và dẫn tới sai số làm tròn nhỏ (floating-point imprecision, khiến `0.1 + 0.2` trong máy tính xấp xỉ `0.30000000000000004`). Nhận thức sớm hai giới hạn này giúp người học không bao giờ coi số trong máy tính đồng nhất tuyệt đối với số lý tưởng trong toán học.',
          ],
          sources: [
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 1 Notes: Limitations of Finite Bits — Integer Overflow and Floating-Point Imprecision',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'ct-problems-algorithms',
      title: 'Chương 2 — Bài toán tính toán, đặc tả Đầu vào – Đầu ra và khái niệm Thuật toán',
      overview: [
        'Chương này xây dựng định nghĩa chuẩn xác về bài toán tính toán, thể hiện đầu vào (instance) và thuật toán hữu hạn, giúp người học phân biệt rõ "bài toán yêu cầu kết quả gì" với "thuật toán làm từng bước như thế nào để ra kết quả đó", đồng thời làm quen với cách đếm và so sánh chi phí số bước của hai thuật toán giải cùng một bài toán khi kích thước dữ liệu tăng.',
      ],
      sources: [
        {
          sourceId: 'harvard-cs50x',
          locator: 'Week 0 & Week 3 Notes: Algorithms, Inputs/Outputs, Searching, and Running Time Comparison',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'ct-pa-problem-instance-contract',
          title: 'Phân biệt bài toán tổng quát (computational problem), thể hiện đầu vào (instance) và hợp đồng Đầu vào – Đầu ra',
          level: 'core',
          paragraphs: [
            'Trước khi nghĩ cách giải, người học cần định nghĩa chính xác bài toán đang xét. Trong khoa học máy tính, một **bài toán tính toán (computational problem)** là một đặc tả tổng quát mô tả mối quan hệ cần thỏa mãn giữa tập các **đầu vào hợp lệ (inputs)** và **đầu ra mong muốn (outputs)** tương ứng. Một **thể hiện của bài toán (problem instance)** là một bộ dữ liệu đầu vào cụ thể được gán cho các tham số của bài toán đó. Ví dụ: "Cho một dãy gồm $n$ số nguyên và một số mục tiêu $k$, hãy tìm vị trí xuất hiện của $k$ trong dãy (hoặc báo không tồn tại)" là *bài toán tìm kiếm*; còn bộ dữ liệu cụ thể $A = [4, 9, 1, 7], k = 1$ là một *thể hiện (instance)* của bài toán đó.',
            'Tiểu mục này rèn luyện kỹ năng viết **đặc tả Đầu vào – Đầu ra (Input/Output specification)** cho mọi bài toán trước khi viết thuật toán: (1) Đầu vào gồm những đại lượng nào, kiểu gì, miền giá trị và **điều kiện biên (boundary/preconditions)** ra sao (chẳng hạn dãy có được phép rỗng $n = 0$ không? các phần tử có thể trùng nhau hoặc âm không? dãy đã được sắp xếp tăng dần chưa?); và (2) Đầu ra cần trả về giá trị gì trong trường hợp thông thường cũng như trong các trường hợp đặc biệt. Nhiều lỗi lập trình thực tế bắt nguồn từ việc bắt tay vào viết code ngay khi chưa làm rõ các trường hợp biên của đặc tả bài toán.',
          ],
          sources: [
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 0 Notes: Problem Solving as Input -> Algorithm -> Output',
              relationship: 'primary',
            },
            {
              sourceId: 'erickson-algorithms',
              locator: 'Chapter 0: §0.1 What is an algorithm? (Problems vs Instances and unambiguous specification)',
              relationship: 'supplementary',
            },
          ],
        },
        {
          id: 'ct-pa-algorithm-properties-pseudocode',
          title: 'Định nghĩa thuật toán, bốn tính chất bắt buộc và sự khác biệt giữa thuật toán, mã giả với chương trình',
          level: 'core',
          paragraphs: [
            'Một **thuật toán (algorithm)** là một dãy hữu hạn các chỉ thị được xác định rõ ràng, thực hiện theo từng bước để biến đổi một đầu vào hợp lệ của bài toán thành đầu ra đúng tương ứng. Để một quy trình được coi là một thuật toán hợp lệ, nó phải thỏa mãn bốn tính chất cốt lõi: (1) **Tính xác định / không mơ hồ (Definiteness / Unambiguity)**: mỗi bước phải rõ nghĩa tuyệt đối, không dựa vào cảm tính như "chọn một số trông có vẻ hợp lý"; (2) **Tính khả thi (Effectiveness)**: mỗi bước cơ bản phải thực hiện được bằng một lượng thao tác sơ cấp hữu hạn; (3) **Tính dừng (Finiteness / Termination)**: với mọi đầu vào hợp lệ, quy trình bắt buộc phải kết thúc sau một số hữu hạn bước chứ không rơi vào vòng lặp vô tận; và (4) **Tính đúng đắn (Correctness)**: khi kết thúc, kết quả tạo ra phải thỏa mãn đặc tả đầu ra cho **mọi** thể hiện đầu vào hợp lệ, không chỉ đúng trên vài ví dụ thử nghiệm.',
            'Tiểu mục phân biệt rõ ba mức biểu diễn: **Thuật toán** là ý tưởng và cấu trúc logic của các bước giải (độc lập với ngôn ngữ lập trình); **Mã giả (Pseudocode)** là cách diễn đạt thuật toán bằng ngôn ngữ tự nhiên có cấu trúc thụt lề rõ ràng (gồm gán biến, rẽ nhánh `if/else`, vòng lặp `while/for`) để con người đọc và kiểm tra logic mà không bị vướng vào dấu chấm phẩy hay khai báo thư viện; còn **Chương trình (Program)** là bản cài đặt cụ thể của thuật toán đó bằng quy tắc cú pháp nghiêm ngặt của một ngôn ngữ như C++ để trình biên dịch dịch được.',
          ],
          sources: [
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 0 Notes: Algorithms and Expressing Logic in Structured Pseudocode',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ct-pa-step-counting-linear-vs-binary',
          title: 'Đếm số bước thực hiện theo kích thước đầu vào n: đối chiếu tìm kiếm tuần tự và tìm kiếm chia đôi',
          level: 'core',
          paragraphs: [
            'Cùng một bài toán có thể có nhiều thuật toán đều cho kết quả đúng nhưng tiêu tốn số bước thực hiện chênh lệch nhau hàng triệu lần khi kích thước dữ liệu $n$ lớn lên. Tiểu mục này minh họa trực quan qua bài toán tìm một tên người trong danh bạ có $n$ trang: **Thuật toán 1 (Tìm kiếm tuần tự / Linear Search)** lật từng trang từ đầu đến cuối; trong trường hợp xấu nhất (tên cần tìm nằm ở trang cuối hoặc không có trong danh bạ), thuật toán phải thực hiện $n$ phép so sánh trang (tăng tuyến tính theo $n$).',
            'Ngược lại, nếu danh bạ **đã được sắp xếp theo thứ tự bảng chữ cái** (điều kiện tiên quyết bắt buộc), **Thuật toán 2 (Tìm kiếm nhị phân / Binary Search)** mở ngay trang chính giữa để so sánh: nếu chưa trúng, nhờ tính thứ tự nó biết chắc tên cần tìm chỉ có thể nằm ở nửa bên trái hoặc nửa bên phải, qua đó loại bỏ hoàn toàn ít nhất một nửa số trang còn lại chỉ sau 1 lần so sánh điểm giữa. Theo đúng sự phân biệt giữa số bước chia đôi và số phép so sánh đã học ở Môn CS-02: chỉ cần tối đa $\\lfloor \\log_2 n \\rfloor$ lần chia đôi là thu hẹp miền ứng viên từ $n$ trang về còn tối đa $1$ trang, cộng thêm $1$ lần so sánh để kiểm tra trang cuối cùng đó cho tổng cộng tối đa **$\\lfloor \\log_2 n \\rfloor + 1$ phép so sánh trang**. Vì vậy, khi $n$ tăng gấp đôi từ $1\\,000\\,000$ lên $2\\,000\\,000$ trang, tìm kiếm tuần tự tốn thêm $1\\,000\\,000$ phép so sánh, còn tìm kiếm nhị phân chỉ tốn thêm **đúng $1$ phép so sánh điểm giữa** (từ tối đa $20$ lên $21$ phép so sánh). Ví dụ kinh điển này giúp người học hiểu vì sao ta đo hiệu quả thuật toán theo tốc độ tăng của số bước theo $n$, và vì sao một thuật toán nhanh thường đòi hỏi dữ liệu đầu vào phải thỏa mãn một cấu trúc hoặc điều kiện nhất định.',
          ],
          sources: [
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 0 & Week 3 Notes: Phonebook Search — Linear Search ($n$) vs Binary Search ($\\lfloor\\log_2 n\\rfloor + 1$ comparisons) and Preconditions',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'ct-state-execution-trace',
      title: 'Chương 3 — Trạng thái, biến đổi trạng thái, điều khiển luồng và bảng lần vết thực thi (Execution Trace)',
      overview: [
        'Chương này dạy cơ chế vận hành bên trong của một thuật toán mệnh lệnh: trạng thái của quá trình tính toán được lưu trữ trong các biến như thế nào, các bước tuần tự – rẽ nhánh – lặp làm biến đổi trạng thái đó theo thời gian ra sao, và cách lập bảng lần vết bằng tay để kiểm chứng tính đúng đắn, phát hiện lỗi lệch một bước cùng điều kiện dừng.',
      ],
      sources: [
        {
          sourceId: 'harvard-cs50x',
          locator: 'Week 0 & Week 1 Notes: Variables, Conditionals, Loops, and Tracing Execution Step by Step',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'ct-set-state-variables-assignment',
          title: 'Khái niệm trạng thái (state), biến nhớ như hộp chứa có tên và bản chất cập nhật theo thời gian của phép gán',
          level: 'core',
          paragraphs: [
            'Tại mỗi thời điểm trong quá trình chạy, toàn bộ thông tin mà thuật toán đang ghi nhớ được gọi là **trạng thái (state)** của hệ thống, được biểu diễn thông qua tập hợp các giá trị hiện tại của các **biến (variables)**. Mỗi biến có thể hình dung như một ô nhớ được dán nhãn tên định danh và tại mỗi thời điểm chỉ giữ một giá trị xác định. Khi thuật toán thực hiện một **phép gán (assignment)** dạng `x <- biểu_thức` (hoặc `x = biểu_thức` trong C++), quy trình luôn diễn ra theo hai pha tách biệt theo thời gian: (Pha 1) Đọc các giá trị hiện có trong trạng thái cũ để tính xong giá trị của `biểu_thức` ở vế phải; (Pha 2) Ghi đè giá trị vừa tính được vào ô nhớ của biến `x` ở vế trái, tạo ra trạng thái mới.',
            'Hiểu rõ mô hình chuyển trạng thái hai pha này giúp người mới tránh được một trong những ngộ nhận phổ biến nhất khi mới học lập trình: bài toán **hoán đổi giá trị hai biến `a` và `b` (swap)**. Nếu viết hai bước gán liên tiếp `a <- b` rồi `b <- a`, thì ngay ở bước đầu tiên giá trị gốc của `a` đã bị ghi đè mất bởi giá trị của `b`, khiến cả hai biến cùng mang giá trị của `b`. Trong mô hình gán tuần tự từng biến đơn lẻ đang xét, cách chuẩn mực, an toàn và rõ ràng nhất để bảo toàn thông tin qua bước chuyển trạng thái là dùng một biến tạm `temp` theo 3 bước: `temp <- a`, `a <- b`, `b <- temp` (hoặc gọi hàm thư viện chuẩn `std::swap(a, b)` khi vào ngôn ngữ C++).',
          ],
          sources: [
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 0 & Week 4 Notes: State, Variables, and the Classic Swap Problem (Using a Temporary Variable)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ct-set-control-flow-trace-tables',
          title: 'Ba cấu trúc điều khiển cơ bản (tuần tự, rẽ nhánh, lặp) và kỹ thuật lập bảng lần vết trạng thái (Trace Table)',
          level: 'core',
          paragraphs: [
            'Mọi thuật toán mệnh lệnh đều được lắp ghép từ ba cấu trúc điều khiển luồng cơ bản: (1) **Tuần tự (Sequence)**: thực hiện bước $A$ xong mới chuyển sang bước $B$; (2) **Rẽ nhánh có điều kiện (Selection / Conditional)**: kiểm tra một biểu thức logic đúng/sai (Boolean condition) tại trạng thái hiện tại để quyết định đi theo nhánh lệnh này hay nhánh lệnh khác; và (3) **Lặp (Iteration / Loop)**: lặp đi lặp lại một khối bước chừng nào điều kiện duy trì vòng lặp còn đúng. Khi các cấu trúc này lồng nhau (ví dụ một câu lệnh rẽ nhánh nằm bên trong một vòng lặp), trạng thái của các biến thay đổi liên tục qua từng vòng.',
            'Để không đoán mò kết quả của thuật toán, tiểu mục này trang bị kỹ thuật **lập bảng lần vết thực thi (execution trace table / dry run)**: kẻ một bảng mà mỗi cột là một biến của thuật toán cùng cột điều kiện kiểm tra và cột đầu ra, còn mỗi hàng ghi lại chính xác giá trị của các biến sau từng bước hoặc từng vòng lặp trên một bộ đầu vào nhỏ (chẳng hạn $n = 4$). Việc tự tay điền bảng lần vết giúp người học nhìn tận mắt cơ chế tích lũy tổng (`sum`), đếm số lượng (`count`), hay cập nhật giá trị lớn nhất tạm thời (`current_max`) qua từng phần tử của dãy.',
          ],
          sources: [
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 0 & Week 1 Notes: Conditionals, Loops, Boolean Expressions, and Step-by-Step Tracing',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ct-set-termination-off-by-one-invariants',
          title: 'Điều kiện dừng vòng lặp, lỗi lệch một bước (off-by-one) và trực giác về bất biến vòng lặp',
          level: 'core',
          paragraphs: [
            'Một vòng lặp chỉ kết thúc khi trạng thái biến thay đổi theo một hướng làm cho điều kiện lặp cuối cùng phải trở thành sai. Nếu thân vòng lặp quên cập nhật biến điều khiển, hoặc cập nhật biến đi xa dần khỏi ngưỡng dừng (ví dụ lặp khi $i > 0$ nhưng mỗi bước lại tăng $i \\leftarrow i + 1$), thuật toán sẽ rơi vào **vòng lặp vô hạn (infinite loop)**, vi phạm tính dừng của thuật toán. Ngay cả khi vòng lặp dừng lại, việc dùng nhầm dấu so sánh nghiêm ngặt `$<$' + '`' + ' với ' + '`$' + '\\le$` hoặc khởi tạo chỉ số bắt đầu từ $1$ thay vì $0$ sẽ dẫn tới **lỗi lệch một đơn vị (off-by-one error / fencepost error)** — làm vòng lặp chạy thiếu phần tử cuối, thừa một bước, hoặc đọc tràn ra ngoài biên của dãy.',
            'Để kiểm soát tính đúng đắn của vòng lặp một cách có cơ sở, tiểu mục giới thiệu trực giác ban đầu về **bất biến vòng lặp (loop invariant)**: một khẳng định về mối quan hệ giữa các biến mà luôn giữ đúng ngay trước vòng lặp đầu tiên và tiếp tục được bảo toàn sau mỗi bước lặp (ví dụ: "sau khi xét xong phần tử thứ $k$, biến `max_val` luôn chứa giá trị lớn nhất trong $k$ phần tử đầu tiên"). Khi vòng lặp kết thúc ở phần tử thứ $n$, tính chất đó lập tức bảo đảm `max_val` là giá trị lớn nhất của toàn bộ $n$ phần tử. Khái niệm trực quan này sẽ được hình thức hóa bằng quy nạp toán học ở Môn CS-09 và phân tích thuật toán ở Môn CS-16.',
          ],
          sources: [
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 1 & Week 2 Notes: Infinite Loops, Off-by-One Fencepost Errors, and Loop Conditions',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'ct-abstraction-decomposition',
      title: 'Chương 4 — Trừu tượng hóa (Abstraction) và phân rã bài toán theo mô-đun',
      overview: [
        'Chương cuối của môn học giải thích nguyên lý tư duy quan trọng nhất giúp con người xây dựng được những hệ thống phần mềm hàng triệu dòng lệnh mà không bị quá tải nhận thức: nguyên lý trừu tượng hóa hộp đen tách biệt giao diện với cài đặt, phương pháp phân rã bài toán từ trên xuống kết hợp kiểm chứng từ dưới lên, và các mẫu biến đổi dữ liệu cơ sở.',
      ],
      sources: [
        {
          sourceId: 'composing-programs',
          locator: 'Chapter 1: §1.1 Getting Started, §1.2 Elements of Programming, §1.3 Defining New Functions, & §1.4 Designing Functions (Black-Box Abstraction)',
          relationship: 'primary',
        },
        {
          sourceId: 'harvard-cs50x',
          locator: 'Week 0 & Week 1 Notes: Abstraction and Problem Decomposition',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'ct-ad-black-box-abstraction',
          title: 'Nguyên lý trừu tượng hóa hộp đen (black-box abstraction): tách biệt giao diện "làm gì" với cài đặt "làm như thế nào"',
          level: 'core',
          paragraphs: [
            'Khi sử dụng một khái niệm hoặc một công cụ phức tạp, con người không thể cùng lúc giữ trong đầu mọi chi tiết cấp thấp của nó. **Trừu tượng hóa (Abstraction)** là việc ẩn đi các chi tiết thực hiện bên trong của một quy trình và chỉ giữ lại một tên gọi cùng hợp đồng giao tiếp rõ ràng ở bên ngoài. Trong mô hình **trừu tượng hóa hộp đen (black-box abstraction)**, một thành phần được nhìn nhận qua hai mặt tách biệt: **Giao diện (Interface — What it does)** quy định thành phần đó nhận đầu vào gì và cam kết trả về đầu ra gì; còn **Cài đặt (Implementation — How it works)** là chuỗi bước thuật toán cụ thể bên trong hộp đen để tạo ra kết quả đó.',
            'Lợi ích quyết định của sự tách biệt này là tính thay thế độc lập: khi phần còn lại của hệ thống chỉ phụ thuộc vào giao diện của hộp đen `SapXep(danh_sach)`, ta có thể thay thế thuật toán sắp xếp chậm bên trong hộp đen bằng một thuật toán sắp xếp nhanh hơn mà không phải sửa bất kỳ bước nào ở phần chương trình gọi nó. Toàn bộ ngành khoa học máy tính được tổ chức thành các tầng trừu tượng xếp chồng lên nhau: từ vật lý bán dẫn $\\to$ cổng logic `0/1` $\\to$ tập lệnh máy $\\to$ hệ điều hành $\\to$ ngôn ngữ lập trình bậc cao $\\to$ ứng dụng.',
          ],
          sources: [
            {
              sourceId: 'composing-programs',
              locator: 'Chapter 1: §1.2 Elements of Programming, §1.3 Defining New Functions, & §1.4 Designing Functions (Black-Box Abstraction)',
              relationship: 'primary',
            },
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 0 Notes: Abstraction — Simplifying Complexity by Layering',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'ct-ad-top-down-decomposition',
          title: 'Phân rã từ trên xuống (top-down decomposition), ghép nối từ dưới lên và kiểm chứng từng bài toán con',
          level: 'core',
          paragraphs: [
            'Khi đứng trước một bài toán lớn nhiều yêu cầu (chẳng hạn: đọc bảng điểm của một lớp học, loại bỏ các dòng dữ liệu lỗi, tính điểm trung bình từng học sinh và in ra danh sách học sinh đạt học bổng), người mới thường cố viết một mạch từ dòng đầu đến dòng cuối trong một khối duy nhất nên nhanh chóng bị rối. **Phân rã bài toán (Problem Decomposition)** giải quyết vấn đề này bằng cách chia bài toán gốc thành các **bài toán con (subproblems)** nhỏ hơn, sao cho mỗi bài toán con chỉ đảm nhận đúng một trách nhiệm rõ ràng và giao tiếp với nhau qua dữ liệu đầu vào/đầu ra minh bạch.',
            'Tiểu mục trình bày sự kết hợp giữa hai chiều thiết kế: **Thiết kế từ trên xuống (Top-down refinement)** phác thảo luồng chính của bài toán lớn bằng cách giả sử đã có sẵn các hộp đen giải các bài toán con, sau đó mới lần lượt đi sâu vào chi tiết từng hộp đen cho đến khi đủ đơn giản để viết mã trực tiếp; ngược lại, **Xây dựng và kiểm chứng từ dưới lên (Bottom-up construction)** cài đặt và kiểm tra độc lập từng hộp đen nhỏ trên các dữ liệu mẫu trước khi ghép chúng lại thành hệ thống hoàn chỉnh. Tư duy phân rã và kiểm chứng từng phần này là nền tảng trực tiếp để thiết kế hàm ở Môn CS-04 và kỹ thuật gỡ lỗi khoa học ở Môn CS-05.',
          ],
          sources: [
            {
              sourceId: 'composing-programs',
              locator: 'Chapter 1: §1.4 Designing Functions (Single Responsibility, Decomposition, and Testing Sub-components)',
              relationship: 'primary',
            },
            {
              sourceId: 'learncpp',
              locator: 'Chapter 2 (§2.1 Introduction to Functions) & Chapter 3 (§3.1–3.2 Modular Program Design and Verification)',
              relationship: 'supplementary',
            },
          ],
        },
        {
          id: 'ct-ad-data-representation-patterns',
          title: 'Trừu tượng hóa dữ liệu sơ cấp và các mẫu biến đổi dãy kinh điển (duyệt, lọc, tích lũy, tìm cực trị)',
          level: 'core',
          paragraphs: [
            'Bên cạnh trừu tượng hóa quy trình xử lý, tư duy tính toán còn dựa trên **trừu tượng hóa dữ liệu (data abstraction)**: chọn cách gom nhóm các thông tin liên quan thành một cấu trúc hợp lý để thuật toán thao tác tự nhiên nhất (chẳng hạn biểu diễn một học sinh bằng một bản ghi gồm mã số, họ tên, điểm số; hoặc biểu diễn toàn bộ lớp học bằng một dãy có thứ tự các bản ghi đó). Việc chọn cách tổ chức dữ liệu phù hợp thường quyết định trực tiếp thuật toán sẽ đơn giản hay phức tạp.',
            'Cuối cùng, tiểu mục đúc kết bốn mẫu thuật toán nền tảng (algorithmic patterns) xuất hiện lặp đi lặp lại trên mọi dãy dữ liệu mà người học sẽ cài đặt bằng C++ ngay trong Môn CS-04: (1) **Biến đổi từng phần tử (Mapping/Traversal)** — đi qua mọi phần tử $x$ và áp dụng cùng một phép tính; (2) **Lọc theo điều kiện (Filtering)** — giữ lại những phần tử thỏa mãn vị từ kiểm tra $P(x)$; (3) **Tích lũy / Thu gọn (Accumulation / Reduction)** — khởi tạo một biến tích lũy ở giá trị trung hòa (như `sum = 0` hoặc `prod = 1`) rồi gộp dần từng phần tử vào biến đó; và (4) **Tìm kiếm / Cực trị (Searching / Extrema)** — tìm phần tử đầu tiên thỏa mãn điều kiện hoặc giữ lại phần tử lớn nhất/nhỏ nhất từng gặp trong quá trình duyệt.',
          ],
          sources: [
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 0 & Week 2 Notes: Sequences, Iteration Patterns, Accumulation, and Searching',
              relationship: 'primary',
            },
            {
              sourceId: 'composing-programs',
              locator: 'Chapter 2: §2.1–2.3 Sequences and Data Abstraction Fundamentals',
              relationship: 'supplementary',
            },
          ],
        },
      ],
    },
  ],
};
