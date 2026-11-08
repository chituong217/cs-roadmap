export const COURSE_MATH_BRIDGE = {
  id: 'math-bridge',
  code: 'CS-02',
  title: 'Toán nền cần dùng',
  blockId: 'block-1',
  level: 'core',
  prerequisites: [],
  overview: [
    'Môn học xây dựng cầu nối toán học từ số 0 cho người học bị hổng kiến thức phổ thông hoặc đã lâu không dùng toán, giúp người học sẵn sàng trước khi bước vào lập trình nhập môn (`CS-04`), toán rời rạc (`CS-09`), đại số tuyến tính (`CS-10`) và giải tích (`CS-11`). Thay vì ôn dàn trải các mẹo biến đổi đánh đố, môn học đi thẳng vào bản chất của từng đối tượng toán học xuất hiện thường xuyên trong khoa học máy tính: các tập hợp số, phép chia nguyên đi kèm số dư, giá trị tuyệt đối, biến số, phương trình, bất phương trình và số phức cơ bản.',
    'Tiếp nối nền tảng đại số sơ cấp đó, môn học làm rõ quy tắc lũy thừa và căn thức, định nghĩa logarit như phép toán ngược của lũy thừa cùng ý nghĩa trực quan của $\\log_2 n$ trong các quá trình chia đôi liên tiếp. Ba chương cuối trang bị khái niệm hàm số như một ánh xạ đầu vào – đầu ra có miền xác định rõ ràng, hợp hàm, hàm một-một và hàm ngược, hệ tọa độ Descartes, khoảng cách Euclid, lượng giác trên đường tròn đơn vị cùng dạng lượng giác của số phức, và kết thúc bằng cách đọc – viết thành thạo ký hiệu chỉ số dãy $a_i$, tổng $\\Sigma$ và tích $\\Pi$.',
  ],
  boundaries: [
    'Không giả định người học còn nhớ sẵn công thức logarit, lượng giác, số phức hay ký hiệu tổng Sigma; mọi ký hiệu đều được định nghĩa từ con số cụ thể trước khi tổng quát hóa.',
    'Tập trung vào ý nghĩa cấu trúc, điều kiện xác định của biểu thức và khả năng chuyển đổi giữa công thức toán với biểu thức trong chương trình; không sa đà vào các bài toán biến đổi lượng giác hoặc bất đẳng thức sơ cấp mẹo mực.',
    'Chưa đi vào chứng minh quy nạp hình thức hay hệ thức đệ quy bậc cao (thuộc Môn CS-09), và chưa dùng giới hạn vô cùng hay đạo hàm/tích phân (thuộc Môn CS-11).',
  ],
  sources: [
    {
      sourceId: 'openstax-prealgebra-2e',
      locator: 'Chapters 1–5 (Whole Numbers, Integers, Fractions, Decimals) & Chapters 8–9 (Solving Linear Equations, Math Models)',
      relationship: 'primary',
    },
    {
      sourceId: 'openstax-precalculus-2e',
      locator: 'Chapter 1 (Functions), Chapters 2–3 (Linear/Polynomial/§3.1 Complex Numbers), Chapter 4 (Exponential and Logarithmic Functions), Chapters 5–7 (Trigonometry), Chapter 8 (§8.5 Polar Form of Complex Numbers), Chapter 11 (§11.1–11.4 Sequences and Series)',
      relationship: 'primary',
    },
  ],
  chapters: [
    {
      id: 'mb-numbers-operations',
      title: 'Chương 1 — Hệ thống các tập hợp số, thứ tự phép tính, phép chia có dư và giá trị tuyệt đối',
      overview: [
        'Chương mở đầu hệ thống hóa các tập hợp số từ tự nhiên, nguyên, hữu tỉ đến thực, quy tắc ưu tiên phép toán và hai khái niệm gắn liền trực tiếp với biểu diễn dữ liệu trong máy tính: định lý chia Euclid (thương nguyên và số dư) cùng các hàm làm tròn sàn/trần và giá trị tuyệt đối như khoảng cách hình học trên trục số.',
      ],
      sources: [
        {
          sourceId: 'openstax-prealgebra-2e',
          locator: 'Chapters 1, 3, 4, 5: Whole Numbers, Integers, Fractions, Decimals, and Order of Operations',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'mb-no-number-sets-order-of-ops',
          title: 'Các tập hợp số chuẩn (N, Z, Q, R), biểu diễn thập phân – phân số và quy tắc thứ tự ưu tiên phép toán',
          level: 'core',
          paragraphs: [
            'Tiểu mục này xây dựng bức tranh phân cấp của các tập hợp số cơ bản: tập số tự nhiên $\\mathbb{N} = \\{0, 1, 2, \\dots\\}$ dùng để đếm số lượng và đánh chỉ số vị trí; tập số nguyên $\\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$ mở rộng thêm số đối âm để biểu diễn độ dịch chuyển hai chiều; tập số hữu tỉ $\\mathbb{Q}$ gồm các tỉ số $p/q$ ($p \\in \\mathbb{Z}, q \\in \\mathbb{Z} \\setminus \\{0\\}$) có biểu diễn thập phân hữu hạn hoặc tuần hoàn; và tập số thực $\\mathbb{R}$ lấp đầy trục số liên tục bằng cách bổ sung các số vô tỉ như $\\sqrt{2}, \\pi, e$. Việc phân biệt rõ một đại lượng thuộc $\\mathbb{Z}$ hay $\\mathbb{R}$ là cơ sở trực tiếp để chọn kiểu số nguyên (`int`, `long long`) hay số dấu chấm động (`double`) khi lập trình.',
            'Nội dung tiếp theo rà soát quy tắc thứ tự thực hiện phép tính (ngoặc đơn $\\to$ lũy thừa $\\to$ nhân/chia từ trái sang phải $\\to$ cộng/trừ từ trái sang phải), các tính chất giao hoán, kết hợp, phân phối của phép cộng và phép nhân, cùng điều kiện tối giản phân số và quy đồng mẫu số. Tiểu mục nhấn mạnh các điểm dễ nhầm dấu như sự khác biệt giữa $(-a)^2 = a^2$ với $-a^2 = -(a^2)$, hoặc sai lầm khi tự ý tách mẫu số $\\frac{a}{b+c} \\neq \\frac{a}{b} + \\frac{a}{c}$.',
          ],
          sources: [
            {
              sourceId: 'openstax-prealgebra-2e',
              locator: 'Chapter 1 (§1.1–1.5), Chapter 3 (§3.1–3.5 Integers), Chapter 4 (Fractions), Chapter 5 (Decimals and Real Numbers)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mb-no-integer-division-remainder',
          title: 'Phép chia nguyên có dư, hàm sàn (floor), hàm trần (ceiling) và ứng dụng tách chữ số theo cơ số',
          level: 'core',
          paragraphs: [
            'Khác với phép chia thực tạo ra số thập phân (như $17 / 5 = 3.4$), rất nhiều bài toán tính toán rời rạc đòi hỏi chia $a$ đối tượng thành các nhóm kích thước $d > 0$ và tách riêng **thương nguyên (quotient)** $q$ cùng **số dư (remainder)** $r$ sao cho $a = q \\cdot d + r$ với $0 \\le r < d$. Tiểu mục này làm rõ ý nghĩa toán học của cặp phép toán thương nguyên và lấy dư, đồng thời chỉ ra ứng dụng cơ bản của chúng trong việc kiểm tra tính chia hết ($r = 0$), chu kỳ vòng tròn (như đồng hồ 24 giờ hoặc tuần 7 ngày) và thuật toán tách từng chữ số của một số nguyên dương $n$ trong hệ cơ số $10$ thông qua chữ số hàng đơn vị $n \\bmod 10$ và phần còn lại $\\lfloor n/10 \\rfloor$.',
            'Tiểu mục cũng định nghĩa chính xác hai hàm làm tròn chuẩn trên trục số thực: **hàm sàn (floor)** $\\lfloor x \\rfloor$ là số nguyên lớn nhất không vượt quá $x$ (ví dụ $\\lfloor 3.7 \\rfloor = 3$, nhưng $\\lfloor -3.7 \\rfloor = -4$ vì $-4 \\le -3.7 < -3$), và **hàm trần (ceiling)** $\\lceil x \\rceil$ là số nguyên nhỏ nhất không nhỏ hơn $x$ (ví dụ $\\lceil 3.1 \\rceil = 4$, $\\lceil -3.7 \\rceil = -3$). Người học được lưu ý sự khác biệt giữa làm tròn xuống theo hàm sàn $\\lfloor x \\rfloor$ với phép cắt bỏ phần thập phân về phía $0$ (truncation toward zero) của phép chia nguyên trên số âm trong C++.',
          ],
          sources: [
            {
              sourceId: 'openstax-prealgebra-2e',
              locator: 'Chapter 1 (§1.5 Divide Whole Numbers) & Chapter 3 (§3.5 Divide Integers)',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-6042j-2015',
              locator: 'Chapter 8: §8.1 Divisibility and the Division Algorithm (elementary preview)',
              relationship: 'supplementary',
            },
          ],
        },
        {
          id: 'mb-no-absolute-value-distance',
          title: 'Giá trị tuyệt đối, khoảng cách một chiều trên trục số và bất đẳng thức tam giác',
          level: 'core',
          paragraphs: [
            'Giá trị tuyệt đối $|x|$ của một số thực $x$ thường bị nhớ máy móc là "bỏ dấu trừ", dẫn tới lúng túng khi $x$ là một biểu thức chứa biến chưa biết dấu. Tiểu mục này định nghĩa $|x|$ theo hai góc nhìn tương đương: (1) Định nghĩa từng phần (piecewise): $|x| = x$ nếu $x \\ge 0$ và $|x| = -x$ nếu $x < 0$ (trong đó $-x$ là một số dương vì $x$ âm); và (2) Ý nghĩa hình học: $|x|$ là khoảng cách từ điểm $x$ tới gốc $0$ trên trục số, do đó $|a - b| = |b - a|$ chính là khoảng cách không âm giữa hai điểm $a$ và $b$ bất kỳ trên trục thực.',
            'Từ ý nghĩa khoảng cách đó, người học hiểu ngay vì sao điều kiện "sai số giữa giá trị xấp xỉ $x$ và giá trị thực $x_0$ không vượt quá $\\varepsilon > 0$" được viết gọn là $|x - x_0| \\le \\varepsilon$, tương đương với khoảng đối xứng $x_0 - \\varepsilon \\le x \\le x_0 + \\varepsilon$. Tiểu mục kết thúc bằng bất đẳng thức tam giác $|u + v| \\le |u| + |v|$ và hệ quả $|u - w| \\le |u - v| + |v - w|$, nền tảng để đánh giá tổng sai số tích lũy trong tính toán số và giải tích.',
          ],
          sources: [
            {
              sourceId: 'openstax-prealgebra-2e',
              locator: 'Chapter 3: §3.1 Introduction to Integers and Absolute Value',
              relationship: 'primary',
            },
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Chapter 1 & Appendix A: Real Numbers, Absolute Value Equations and Inequalities',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'mb-variables-equations',
      title: 'Chương 2 — Biến số, biểu thức đại số, phương trình, bất phương trình và số phức cơ bản',
      overview: [
        'Chương này chuyển từ tính toán trên các con số cố định sang lập luận tổng quát bằng ký hiệu đại số. Nội dung làm rõ vai trò của biến số trong toán học so với biến trong lập trình, các phép biến đổi tương đương trên phương trình bậc nhất/bậc hai, hệ hai phương trình tuyến tính, quy tắc đổi chiều bất phương trình và mở rộng trường số thực sang số phức $a + bi$.',
      ],
      sources: [
        {
          sourceId: 'openstax-prealgebra-2e',
          locator: 'Chapter 2 (Language of Algebra) & Chapter 8 (Solving Linear Equations)',
          relationship: 'primary',
        },
        {
          sourceId: 'openstax-precalculus-2e',
          locator: 'Chapter 2 (Linear Functions), Chapter 3 (§3.1 Complex Numbers, §3.2 Quadratic Functions)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'mb-ve-variables-identities-equations',
          title: 'Biến số, biểu thức đại số, hằng đẳng thức cơ bản và phân biệt biến toán học với biến lập trình',
          level: 'core',
          paragraphs: [
            'Trong đại số, một **biến (variable)** là một ký hiệu chữ (như $x, n, k$) đại diện cho một giá trị chưa biết hoặc một phần tử tùy ý thuộc tập xác định. Tiểu mục này giúp người học phân biệt rạch ròi hai khái niệm cùng mang tên "biến": trong toán học, một phương trình như $x = x + 1$ là mệnh đề vô nghiệm vì không có số nào bằng chính nó cộng thêm $1$; còn trong lập trình (Môn CS-04), `x = x + 1` là thao tác gán cập nhật trạng thái ô nhớ (lấy giá trị cũ của `x` cộng $1$ rồi ghi đè vào ô nhớ `x`).',
            'Nội dung tiếp theo hệ thống hóa cách thu gọn biểu thức đại số, đặt nhân tử chung và ba hằng đẳng thức bậc hai cốt lõi thường xuất hiện khi phân tích số bước chạy của thuật toán: $(a+b)^2 = a^2 + 2ab + b^2$, $(a-b)^2 = a^2 - 2ab + b^2$ và hiệu hai bình phương $a^2 - b^2 = (a-b)(a+b)$. Người học được rèn thói quen kiểm tra điều kiện mẫu số khác $0$ trước khi rút gọn phân thức đại số.',
          ],
          sources: [
            {
              sourceId: 'openstax-prealgebra-2e',
              locator: 'Chapter 2 (§2.1–2.4 Use the Language of Algebra, Evaluate and Simplify Expressions)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mb-ve-linear-quadratic-systems',
          title: 'Phương trình bậc nhất, hệ hai phương trình tuyến tính, phương trình bậc hai và biệt thức Delta',
          level: 'core',
          paragraphs: [
            'Giải một phương trình là tìm tất cả các giá trị của ẩn làm cho hai vế bằng nhau thông qua các phép biến đổi bảo toàn tập nghiệm (cộng/trừ cùng một số cho hai vế, nhân/chia hai vế với cùng một số **khác $0$**). Với phương trình bậc nhất $ax + b = 0$, việc xét riêng $a \\neq 0$ (nghiệm duy nhất $x = -b/a$) và $a = 0$ (vô nghiệm nếu $b \\neq 0$, vô số nghiệm nếu $b = 0$) dạy cho người học thói quen không bao giờ chia cho một biểu thức khi chưa kiểm tra biểu thức đó có thể bằng $0$ hay không. Với hệ hai phương trình bậc nhất hai ẩn, tiểu mục giới thiệu phương pháp thế và phương pháp khử cùng ý nghĩa hình học của giao điểm hai đường thẳng (cắt nhau tại 1 điểm, song song vô nghiệm, hoặc trùng nhau) — bước đệm trực quan cho Đại số tuyến tính (`CS-10`).',
            'Đối với phương trình bậc hai $ax^2 + bx + c = 0$ ($a \\neq 0$), tiểu mục trình bày cơ chế hoàn thành bình phương để suy ra biệt thức $\\Delta = b^2 - 4ac$ và công thức nghiệm $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$, cùng định lý Viète ($x_1 + x_2 = -b/a, x_1 x_2 = c/a$). Phương trình bậc hai sẽ xuất hiện lại trực tiếp dưới dạng phương trình đặc trưng của hệ thức truy hồi tuyến tính bậc hai ở Môn CS-09 và đa thức đặc trưng tìm trị riêng ma trận $2 \\times 2$ ở Môn CS-10.',
          ],
          sources: [
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Chapter 3 (§3.2 Quadratic Functions) & Chapter 9 (§9.1 Systems of Linear Equations: Two Variables)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mb-ve-inequalities-sign-analysis',
          title: 'Bất đẳng thức, bất phương trình, quy tắc nhân/chia với số âm và bảng xét dấu',
          level: 'core',
          paragraphs: [
            'Trong phân tích thuật toán và kiểm tra biên dữ liệu, ta làm việc với các bất đẳng thức ($<, \\le, >, \\ge$) nhiều không kém phương trình. Tiểu mục này làm rõ các tính chất bắc cầu ($a \\le b \\land b \\le c \\implies a \\le c$), cộng hai vế với cùng một đại lượng, và quy tắc quan trọng nhất về dấu: khi nhân hoặc chia hai vế của một bất phương trình với một số dương $c > 0$ thì chiều bất đẳng thức giữ nguyên, nhưng khi nhân hoặc chia với một số âm $c < 0$ thì chiều bất đẳng thức **bắt buộc phải đảo ngược** (vì phép nhân với $-1$ là phép lấy đối xứng qua gốc $0$ trên trục số).',
            'Từ quy tắc dấu đó, tiểu mục hướng dẫn cách giải bất phương trình tích/thương dạng $(x - r_1)(x - r_2) \\ge 0$ hoặc $\\frac{P(x)}{Q(x)} > 0$ bằng phương pháp lập trục xét dấu của từng nhân tử trên các khoảng được chia bởi các nghiệm, thay vì nhân chéo mẫu số $Q(x)$ khi chưa biết dấu của $Q(x)$.',
          ],
          sources: [
            {
              sourceId: 'openstax-prealgebra-2e',
              locator: 'Chapter 8: §8.4 Solve Linear Inequalities',
              relationship: 'primary',
            },
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Chapter 3: Polynomial and Rational Inequalities',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mb-ve-complex-numbers-intro',
          title: 'Mở rộng sang tập số phức C: đơn vị ảo i, dạng đại số a + bi, số phức liên hợp và môđun',
          level: 'core',
          paragraphs: [
            'Khi biệt thức $\\Delta = b^2 - 4ac < 0$, phương trình bậc hai không có nghiệm trên tập số thực $\\mathbb{R}$ vì bình phương của mọi số thực đều không âm. Để mọi phương trình đa thức đều có đủ nghiệm, toán học mở rộng $\\mathbb{R}$ sang tập **số phức $\\mathbb{C}$** bằng cách đưa vào đơn vị ảo $i$ thỏa mãn định nghĩa $i^2 = -1$. Mỗi số phức có dạng đại số $z = a + bi$ với phần thực $\\operatorname{Re}(z) = a \\in \\mathbb{R}$ và phần ảo $\\operatorname{Im}(z) = b \\in \\mathbb{R}$; hai số phức bằng nhau khi và chỉ khi cả phần thực lẫn phần ảo tương ứng bằng nhau.',
            'Tiểu mục trình bày các phép toán cộng, trừ, nhân hai số phức (theo đúng quy tắc phân phối đại số và thay $i^2 = -1$), khái niệm **số phức liên hợp (complex conjugate)** $\\bar{z} = a - bi$, và **môđun (modulus/absolute value)** $|z| = \\sqrt{a^2 + b^2}$ thỏa mãn đẳng thức then chốt $z \\cdot \\bar{z} = a^2 + b^2 = |z|^2$. Nhờ đẳng thức này, phép chia hai số phức $\\frac{z_1}{z_2}$ ($z_2 \\neq 0$) được thực hiện bằng cách nhân cả tử và mẫu với số phức liên hợp $\\bar{z}_2$ để khử $i$ ở mẫu. Nền tảng này chuẩn bị trực tiếp cho trường hợp nghiệm phức của hệ thức đệ quy (`CS-09`) và trị riêng phức của ma trận thực (`CS-10`).',
          ],
          sources: [
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Chapter 3: §3.1 Complex Numbers (Imaginary unit i, operations, complex conjugates, quadratic equations with complex roots)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'mb-exponents-logarithms',
      title: 'Chương 3 — Lũy thừa, căn thức, logarit và trực giác tăng trưởng theo cấp số nhân',
      overview: [
        'Chương này giải thích cặp phép toán xuất hiện dày đặc nhất trong khoa học máy tính: lũy thừa (đặc biệt là lũy thừa cơ số $2$ của hệ nhị phân) và phép toán ngược của nó là logarit, làm rõ điều kiện xác định, các quy tắc biến đổi đại số, công thức đổi cơ số và ý nghĩa trực quan của $\\log_2 n$ trong tìm kiếm nhị phân, chiều cao cây cân bằng cùng độ dài biểu diễn bit.',
      ],
      sources: [
        {
          sourceId: 'openstax-precalculus-2e',
          locator: 'Chapter 4: Exponential and Logarithmic Functions (§4.1–4.6)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'mb-el-exponents-radicals-rules',
          title: 'Quy tắc lũy thừa với số mũ nguyên/hữu tỉ, căn thức và ký hiệu khoa học (scientific notation)',
          level: 'core',
          paragraphs: [
            'Xuất phát từ định nghĩa $a^n = \\underbrace{a \\cdot a \\cdots a}_{n \\text{ thừa số}}$ với số nguyên dương $n$, tiểu mục này dẫn dắt vì sao quy tắc cộng số mũ khi nhân cùng cơ số $a^m \\cdot a^n = a^{m+n}$ và trừ số mũ khi chia $\\frac{a^m}{a^n} = a^{m-n}$ (với $a \\neq 0$) tất yếu dẫn tới định nghĩa nhất quán cho số mũ không $a^0 = 1$ và số mũ nguyên âm $a^{-n} = \\frac{1}{a^n}$. Tiếp theo, quy tắc lũy thừa của lũy thừa $(a^m)^n = a^{mn}$ mở rộng tự nhiên sang số mũ phân số $a^{1/k} = \\sqrt[k]{a}$ và $a^{m/k} = (\\sqrt[k]{a})^m$ (với $a > 0$).',
            'Tiểu mục cũng làm rõ **ký hiệu khoa học (scientific notation)** $m \\times 10^e$ (ví dụ $6.022 \\times 10^{23}$ hoặc $1.5 \\times 10^{-9}$, viết trong C++ là `1.5e-9`) và bảng các lũy thừa của $2$ ($2^{10} = 1\\,024 \\approx 10^3$, $2^{20} \\approx 10^6$, $2^{30} \\approx 10^9$, $2^{32} \\approx 4.29 \\times 10^9$). Sự đối chiếu này giúp người học ước lượng nhẩm ngay khả năng lưu trữ của kiểu số nguyên 32-bit/64-bit và dung lượng bộ nhớ.',
          ],
          sources: [
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Appendix A.2 & Chapter 4 (§4.1 Exponential Functions and Laws of Exponents)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mb-el-logarithm-definition-properties',
          title: 'Định nghĩa logarit như số mũ cần tìm, các quy tắc biến đổi logarit và công thức đổi cơ số',
          level: 'core',
          paragraphs: [
            'Nhiều người học sợ logarit vì quên mất câu hỏi gốc mà nó trả lời: với cơ số $b > 0, b \\neq 1$ và số dương $x > 0$, biểu thức $\\log_b(x)$ đơn giản là **"cần nâng cơ số $b$ lên lũy thừa bao nhiêu để thu được $x$?"**, tức là: $$y = \\log_b(x) \\iff b^y = x$$ Chẳng hạn $\\log_2(8) = 3$ vì $2^3 = 8$; $\\log_{10}(1000) = 3$ vì $10^3 = 1000$; $\\log_b(1) = 0$ vì $b^0 = 1$; và $\\log_b(b^k) = k$. Điều kiện xác định bắt buộc là đối số bên trong logarit phải thực sự dương ($x > 0$) vì không có lũy thừa thực nào của $b > 0$ sinh ra số âm hoặc số $0$.',
            'Vì logarit chính là số mũ, mọi tính chất của logarit đều là bản dịch trực tiếp từ quy tắc số mũ: nhân hai số tương ứng với cộng hai số mũ nên $\\log_b(u \\cdot v) = \\log_b(u) + \\log_b(v)$; chia hai số tương ứng với trừ số mũ nên $\\log_b(u / v) = \\log_b(u) - \\log_b(v)$; nâng lũy thừa tương ứng với nhân số mũ nên $\\log_b(u^k) = k \\log_b(u)$. Tiểu mục cũng chứng minh **công thức đổi cơ số** $\\log_a(x) = \\frac{\\log_b(x)}{\\log_b(a)}$, giải thích vì sao hai logarit khác cơ số ($\\log_2 n$ và $\\ln n$) chỉ chênh nhau một hằng số nhân cố định $\\frac{1}{\\ln 2}$.',
          ],
          sources: [
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Chapter 4: §4.3 Logarithmic Functions & §4.5 Logarithmic Properties (Product, Quotient, Power, Change-of-Base)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mb-el-binary-logarithm-cs-intuition',
          title: 'Ý nghĩa của log2(n) trong khoa học máy tính: số lần chia đôi liên tiếp, số phép so sánh tìm kiếm nhị phân và số chữ số biểu diễn',
          level: 'core',
          paragraphs: [
            'Trong khoa học máy tính, logarit cơ số $2$ (thường viết tắt là $\\lg n$ hoặc $\\log_2 n$) xuất hiện ở khắp mọi nơi, nhưng cần tách bạch chính xác **ba đại lượng đếm** rất dễ bị gộp chung: (1) **Số bước chia đôi liên tiếp từ $n$ về $1$ phần tử**: nếu $n = 2^k$ là lũy thừa của $2$ và mỗi bước thay kích thước hiện tại $m$ bằng $m/2$, thì chuỗi $n \\to n/2 \\to \\dots \\to 1$ có đúng **$k = \\log_2 n$ bước chia đôi** (ví dụ $n = 8$: $8 \\to 4 \\to 2 \\to 1$ gồm đúng $\\log_2 8 = 3$ bước chia đôi; với $n \\ge 1$ bất kỳ mà mỗi bước lấy phần nguyên dưới $\\lfloor m/2 \\rfloor$ cho tới khi chạm $1$, số bước chia đôi là $\\lfloor \\log_2 n \\rfloor$, hoặc là $\\lceil \\log_2 n \\rceil$ nếu chia tròn lên $\\lceil m/2 \\rceil$); (2) **Số phép so sánh phần tử tối đa của thuật toán tìm kiếm nhị phân (binary search)** trên mảng đã sắp xếp gồm $n \\ge 1$ phần tử: ngay cả sau $\\lfloor \\log_2 n \\rfloor$ lần thu hẹp miền ứng viên về còn tối đa $1$ phần tử, thuật toán vẫn cần thêm $1$ phép so sánh để kiểm tra phần tử cuối cùng đó có khớp khóa cần tìm hay không, nên tổng số phép so sánh phần tử ở trường hợp xấu nhất là tối đa **$\\lfloor \\log_2 n \\rfloor + 1$ phép so sánh** (ví dụ với $n = 8$, tối đa $\\lfloor \\log_2 8 \\rfloor + 1 = 4$ phép so sánh điểm giữa).',
            'Đại lượng thứ ba là (3) **Số chữ số (hoặc số bit) cần để biểu diễn một số nguyên dương $n \\ge 1$**: trong hệ nhị phân (cơ số $2$), vì một số nguyên dương có đúng $b$ bit (với bit cao nhất bằng $1$ mang trọng số $2^{b-1}$) nằm trong miền $2^{b-1} \\le n < 2^b \\iff b - 1 \\le \\log_2 n < b \\iff b - 1 = \\lfloor \\log_2 n \\rfloor$, nên số bit cần để viết $n$ là **$b = \\lfloor \\log_2 n \\rfloor + 1$ bit** (ví dụ $8_{10} = 1000_2$ cần $\\lfloor \\log_2 8 \\rfloor + 1 = 4$ bit); hoàn toàn tương tự, trong hệ thập phân (cơ số $10$), số chữ số cần để viết $n$ là $\\lfloor \\log_{10} n \\rfloor + 1$. Tiểu mục đặt song song tốc độ tăng của $\\log_2 n$, $n$ và $2^n$ (khi $n = 10^9$ thì $\\log_2 n \\approx 29.9$, chỉ cần tối đa $30$ phép so sánh tìm kiếm nhị phân) để người học thấy trực quan sự chênh lệch khổng lồ giữa tăng trưởng logarit, tuyến tính và hàm mũ.',
          ],
          sources: [
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Chapter 4: §4.6 Exponential and Logarithmic Equations & Modeling Growth',
              relationship: 'primary',
            },
            {
              sourceId: 'harvard-cs50x',
              locator: 'Week 0 Notes: Binary Representation, Halving Problem Size, and Binary Search Comparisons',
              relationship: 'supplementary',
            },
          ],
        },
      ],
    },
    {
      id: 'mb-functions-graphs',
      title: 'Chương 4 — Hàm số, miền xác định, hợp hàm, hàm ngược và biến đổi đồ thị',
      overview: [
        'Chương này xây dựng khái niệm hàm số (function) như một quy tắc ánh xạ tất định từ tập đầu vào (domain) sang tập đầu ra (codomain/range) — khái niệm nền tảng chung của cả giải tích, toán rời rạc lẫn thiết kế hàm trong ngôn ngữ lập trình, bao gồm hàm định nghĩa từng phần, phép hợp hàm, tính chất đơn ánh/toàn ánh/song ánh để tồn tại hàm ngược và tốc độ thay đổi trung bình trên đồ thị.',
      ],
      sources: [
        {
          sourceId: 'openstax-precalculus-2e',
          locator: 'Chapter 1: Functions (§1.1–1.7 Function Notation, Domain/Range, Composition, Transformations, Inverse Functions)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'mb-fg-function-domain-range',
          title: 'Khái niệm hàm số f: A -> B, miền xác định (domain), miền giá trị (range) và hàm cho bởi nhiều công thức',
          level: 'core',
          paragraphs: [
            'Một **hàm số (function)** $f$ từ tập hợp $A$ vào tập hợp $B$ (ký hiệu $f: A \\to B$) là một quy tắc gán **mỗi** đầu vào $x \\in A$ với **đúng một** đầu ra duy nhất $y = f(x) \\in B$. Tập hợp các đầu vào hợp lệ $A$ được gọi là **miền xác định (domain)**, tập đích $B$ là **miền đi (codomain)**, và tập hợp các giá trị thực sự được tạo ra $\\{f(x) \\mid x \\in A\\}$ là **miền giá trị / ảnh (range / image)**. Tiểu mục làm rõ rằng có thể có hai đầu vào khác nhau cùng cho ra một đầu ra (như $f(-2) = f(2) = 4$ với $f(x) = x^2$), nhưng tuyệt đối không thể có một đầu vào $x$ lại ứng với hai giá trị $f(x)$ khác nhau.',
            'Nội dung tiếp theo rèn cách xác định miền xác định tự nhiên của một biểu thức giải tích (mẫu số khác $0$, biểu thức dưới căn bậc chẵn $\\ge 0$, biểu thức trong logarit $> 0$) và cách đọc **hàm định nghĩa từng phần (piecewise-defined function)** — dạng hàm dùng các công thức khác nhau trên các miền con rời nhau của đầu vào, tương ứng trực tiếp với cấu trúc rẽ nhánh `if / else if / else` trong lập trình.',
          ],
          sources: [
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Chapter 1: §1.1 Functions and Function Notation & §1.2 Domain and Range (including piecewise functions)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mb-fg-composition-invertibility',
          title: 'Phép hợp hàm (f o g)(x), tính chất một-một (injective), toàn ánh (surjective) và điều kiện tồn tại hàm ngược',
          level: 'core',
          paragraphs: [
            'Khi nối đầu ra của hàm $g$ làm đầu vào của hàm $f$, ta thu được **hàm hợp (composite function)** $(f \\circ g)(x) = f(g(x))$, với điều kiện $g(x)$ phải nằm trong miền xác định của $f$. Tiểu mục này nhấn mạnh rằng thứ tự hợp hàm rất quan trọng vì phép hợp hàm nói chung **không có tính giao hoán**: ví dụ với $f(x) = x + 1$ và $g(x) = x^2$ thì $f(g(x)) = x^2 + 1$, khác hẳn với $g(f(x)) = (x + 1)^2$.',
            'Để trả lời câu hỏi "khi nào từ đầu ra $y = f(x)$ có thể khôi phục duy nhất đầu vào $x$ ban đầu?", tiểu mục giới thiệu khái niệm **hàm một-một / đơn ánh (one-to-one / injective)**: $x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2)$ (trên đồ thị tương ứng với tiêu chuẩn đường thẳng ngang chỉ cắt đồ thị tối đa một điểm). Khi $f: A \\to B$ vừa là một-một vừa phủ kín toàn bộ $B$ (**toàn ánh / surjective**), $f$ là một **song ánh (bijection)** và có **hàm ngược (inverse function)** $f^{-1}: B \\to A$ thỏa mãn $f^{-1}(f(x)) = x$ và $f(f^{-1}(y)) = y$. Với các hàm không một-một trên toàn bộ $\\mathbb{R}$ như $f(x) = x^2$, người học hiểu vì sao phải **thu hẹp miền xác định** về $[0, \\infty)$ thì mới định nghĩa được hàm ngược duy nhất $f^{-1}(y) = \\sqrt{y}$.',
          ],
          sources: [
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Chapter 1: §1.4 Composition of Functions & §1.7 Inverse Functions',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mb-fg-elementary-families-graphs',
          title: 'Hình dáng đồ thị, tốc độ thay đổi trung bình và sự khác biệt hành vi của các họ hàm sơ cấp',
          level: 'core',
          paragraphs: [
            'Tiểu mục này xây dựng trực giác hình học trên mặt phẳng tọa độ về các họ hàm cơ bản: hàm bậc nhất $f(x) = ax + b$ có **tốc độ thay đổi trung bình (average rate of change / hệ số góc slope)** $\\frac{f(x_2) - f(x_1)}{x_2 - x_1} = a$ không đổi trên mọi khoảng; hàm bậc hai $f(x) = ax^2 + bx + c$ có đồ thị parabol đối xứng với một đỉnh cực tiểu (khi $a > 0$) hoặc cực đại (khi $a < 0$); hàm đa thức bậc cao và hàm phân thức hữu tỉ (với các đường tiệm cận đứng và tiệm cận ngang); cùng cặp hàm ngược nhau là hàm mũ $b^x$ và hàm logarit $\\log_b x$ đối xứng nhau qua đường phân giác $y = x$.',
            'Nội dung cũng giải thích các phép biến đổi đồ thị cơ bản có quy luật rõ ràng: cộng hằng số ngoài hàm $f(x) + c$ dịch đồ thị theo phương thẳng đứng, thay $x$ bởi $x - h$ trong $f(x - h)$ dịch đồ thị theo phương ngang, và nhân hệ số làm co giãn hoặc lật đối xứng đồ thị. Khái niệm tốc độ thay đổi trung bình $\\frac{\\Delta y}{\\Delta x}$ ở chương này là bước chuẩn bị trực tiếp cho khái niệm đạo hàm ở Môn CS-11.',
          ],
          sources: [
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Chapter 1 (§1.3 Rates of Change and Behavior of Graphs, §1.5 Transformation of Functions) & Chapter 2 (§2.1 Linear Functions)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'mb-coordinates-trigonometry',
      title: 'Chương 5 — Hệ tọa độ Descartes, lượng giác trên đường tròn đơn vị và dạng cực của số phức',
      overview: [
        'Chương này trang bị nền tảng hình học giải tích và lượng giác thiết yếu cho đại số tuyến tính, giải tích, đồ họa máy tính, xử lý tín hiệu và dạng lượng giác/mũ của số phức khi giải hệ thức đệ quy: từ công thức khoảng cách Euclid và phương trình đường tròn, đến số đo góc bằng radian, định nghĩa $\\sin/\\cos/\\tan$ trên đường tròn đơn vị, công thức cộng góc và công thức De Moivre.',
      ],
      sources: [
        {
          sourceId: 'openstax-precalculus-2e',
          locator: 'Chapter 2 (§2.1 Distance Formula), Chapters 5–7 (Trigonometric Functions and Identities), Chapter 8 (§8.5 Polar Form of Complex Numbers & De Moivre’s Theorem)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'mb-ct-cartesian-distance-circles',
          title: 'Hệ tọa độ vuông góc Descartes, công thức khoảng cách Euclid hai chiều và phương trình đường tròn',
          level: 'core',
          paragraphs: [
            'Hệ tọa độ Descartes biểu diễn mỗi điểm $P$ trên mặt phẳng bằng một cặp số thực có thứ tự $(x, y)$, cho phép chuyển các bài toán hình học thành đại số và ngược lại. Áp dụng định lý Pythagoras cho tam giác vuông tạo bởi độ lệch hoành độ $\\Delta x = x_2 - x_1$ và độ lệch tung độ $\\Delta y = y_2 - y_1$, ta thu được **khoảng cách Euclid** giữa hai điểm $P_1(x_1, y_1)$ và $P_2(x_2, y_2)$: $$d(P_1, P_2) = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$ cùng tọa độ trung điểm $M\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$.',
            'Từ công thức khoảng cách, quỹ tích tất cả các điểm $(x, y)$ cách tâm $I(a, b)$ một khoảng không đổi $R > 0$ có phương trình chính tắc là $(x - a)^2 + (y - b)^2 = R^2$. Đặc biệt, khi tâm đặt tại gốc tọa độ $(0, 0)$ và bán kính $R = 1$, ta có **đường tròn đơn vị (unit circle)** $x^2 + y^2 = 1$ — cấu trúc trung tâm để định nghĩa các hàm lượng giác cho góc quay bất kỳ.',
          ],
          sources: [
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Appendix A & Chapter 5 (§5.2 Unit Circle: Sine and Cosine Functions)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mb-ct-radians-unit-circle-trig',
          title: 'Đơn vị đo góc radian, định nghĩa sin/cos/tan trên đường tròn đơn vị và các đẳng thức lượng giác cơ bản',
          level: 'core',
          paragraphs: [
            'Trong giải tích và thư viện toán của các ngôn ngữ lập trình (như `<cmath>` trong C++), góc luôn được đo bằng **radian** chứ không phải độ: góc $1\\text{ rad}$ là góc ở tâm chắn cung có độ dài đúng bằng bán kính $R$, do đó cả vòng tròn có số đo $2\\pi\\text{ rad} = 360^\\circ$ (hay $\\pi\\text{ rad} = 180^\\circ$, $\\pi/2\\text{ rad} = 90^\\circ$). Với góc định hướng $\\theta \\in \\mathbb{R}$ bất kỳ quay từ tia $Ox$ dương trên đường tròn đơn vị $x^2 + y^2 = 1$, hoành độ giao điểm được định nghĩa là $\\cos \\theta$, tung độ là $\\sin \\theta$, và tỉ số $\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}$ (khi $\\cos \\theta \\neq 0$).',
            'Cách định nghĩa trên đường tròn đơn vị làm hiển nhiên ngay các tính chất cốt lõi mà không cần học vẹt: miền giá trị bị chặn $-1 \\le \\cos \\theta, \\sin \\theta \\le 1$; tính tuần hoàn chu kỳ $2\\pi$; tính chẵn/lẻ $\\cos(-\\theta) = \\cos \\theta$, $\\sin(-\\theta) = -\\sin \\theta$; hằng đẳng thức Pythagoras $\\cos^2 \\theta + \\sin^2 \\theta = 1$; và công thức cộng góc $\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta$, $\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta$ (cơ sở của phép quay tọa độ 2D trong Đại số tuyến tính và đồ họa máy tính). Tiểu mục cũng giới thiệu các hàm lượng giác ngược $\\arcsin, \\arccos, \\arctan$ cùng hàm `atan2(y, x)` xác định góc chính xác trên cả 4 góc phần tư.',
          ],
          sources: [
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Chapter 5 (§5.1 Angles and Radians, §5.2–5.3 Unit Circle Trig) & Chapter 6–7 (§6.3 Inverse Trig, §7.1–7.2 Sum and Difference Identities)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mb-ct-complex-polar-demoivre',
          title: 'Biểu diễn hình học của số phức, dạng lượng giác r(cos theta + i sin theta) và công thức De Moivre',
          level: 'core',
          paragraphs: [
            'Khi đặt số phức $z = a + bi \\neq 0$ lên mặt phẳng tọa độ (mặt phẳng phức Argand) tại điểm $(a, b)$, khoảng cách từ gốc tới điểm đó là môđun $r = |z| = \\sqrt{a^2 + b^2} > 0$ và góc định hướng hợp với tia thực dương là đối số (argument) $\\theta$. Thay $a = r \\cos \\theta$ và $b = r \\sin \\theta$, ta thu được **dạng lượng giác (polar form)** của số phức: $$z = r(\\cos \\theta + i \\sin \\theta)$$ Dạng biểu diễn này làm sáng tỏ ý nghĩa hình học của phép nhân số phức: khi nhân hai số phức $z_1 = r_1(\\cos\\theta_1 + i\\sin\\theta_1)$ và $z_2 = r_2(\\cos\\theta_2 + i\\sin\\theta_2)$, áp dụng công thức cộng góc cho thấy môđun được nhân lại ($r_1 r_2$) còn góc quay được cộng thêm ($\\theta_1 + \\theta_2$).',
            'Lặp lại phép nhân đó $n$ lần dẫn trực tiếp tới **Công thức De Moivre**: $$[r(\\cos \\theta + i \\sin \\theta)]^n = r^n(\\cos(n\\theta) + i \\sin(n\\theta))$$ Công thức này đóng vai trò then chốt khi giải hệ thức đệ quy tuyến tính ở Môn CS-09: khi phương trình đặc trưng có cặp nghiệm phức liên hợp $r(\\cos\\theta \\pm i\\sin\\theta)$, lũy thừa bậc $n$ của chúng kết hợp lại thành tổ hợp thực $r^n(c_1 \\cos(n\\theta) + c_2 \\sin(n\\theta))$ mô tả các dãy dao động tuần hoàn.',
          ],
          sources: [
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Chapter 8: §8.5 Polar Form of Complex Numbers (Product, Quotient, and De Moivre’s Theorem)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'mb-sequences-summations',
      title: 'Chương 6 — Dãy số, ký hiệu chỉ số, tổng Sigma (Σ), tích Pi (Π) và cấp số cộng/nhân cơ sở',
      overview: [
        'Chương cuối của môn Toán nền trang bị ngôn ngữ ký hiệu chuẩn để biểu diễn các tập dữ liệu có thứ tự và các phép tính tích lũy lặp (đánh chỉ số 0-based so với 1-based, công thức tường minh so với quy tắc truy hồi, biến đổi đại số trên ký hiệu tổng $\\Sigma$ và tích $\\Pi$, cùng tổng cấp số cộng và cấp số nhân) — cầu nối trực tiếp sang mảng/vector và vòng lặp `for` trong lập trình (`CS-04`) cũng như quy nạp và phân tích độ phức tạp trong Toán rời rạc (`CS-09`).',
      ],
      sources: [
        {
          sourceId: 'openstax-precalculus-2e',
          locator: 'Chapter 11: Sequences, Probability and Counting Theory (§11.1 Sequences and Their Notations, §11.2 Arithmetic Sequences, §11.3 Geometric Sequences and Series)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'mb-ss-sequences-index-notation',
          title: 'Khái niệm dãy số, ký hiệu chỉ số (subscript), đánh chỉ số từ 0 so với từ 1, công thức tường minh và truy hồi cơ bản',
          level: 'core',
          paragraphs: [
            'Một **dãy số (sequence)** là một danh sách có thứ tự các số $a_0, a_1, a_2, \\dots, a_k, \\dots$, về bản chất là một hàm số mà miền xác định là tập các số nguyên không âm $\\mathbb{N}$ (hoặc $\\mathbb{Z}^+$). Chữ số nhỏ viết thấp ở chân ký hiệu trong $a_i$ được gọi là **chỉ số (index / subscript)** dùng để xác định vị trí của phần tử trong dãy, hoàn toàn tương ứng với truy cập phần tử `a[i]` của mảng/vector trong lập trình. Tiểu mục làm rõ mối quan hệ số lượng phần tử trên đoạn chỉ số nguyên $[L, R]$: số các số nguyên từ $L$ đến $R$ (tính cả hai đầu mút, với $L \\le R$) luôn là $R - L + 1$; do đó dãy đánh chỉ số từ $1$ đến $n$ có $n - 1 + 1 = n$ phần tử, còn dãy đánh chỉ số từ $0$ (zero-based indexing chuẩn trong C++) có $n$ phần tử nằm ở các chỉ số $0, 1, \\dots, n - 1$.',
            'Nội dung tiếp theo phân biệt hai cách xác định một dãy số: (1) **Công thức số hạng tổng quát (explicit / closed-form formula)** cho phép tính trực tiếp $a_n$ chỉ từ chỉ số $n$ (ví dụ $a_n = 2n + 1$); và (2) **Quy tắc truy hồi cơ bản (recursive definition)** định nghĩa phần tử đầu tiên (điều kiện đầu $a_0$) và quy tắc tính $a_n$ từ phần tử đứng ngay trước $a_{n-1}$ (ví dụ $a_0 = 3, a_n = a_{n-1} + 5$ với $n \\ge 1$).',
          ],
          sources: [
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Chapter 11: §11.1 Sequences and Their Notations (Explicit vs Recursive Formulas)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mb-ss-sigma-pi-notation-mechanics',
          title: 'Ký hiệu tổng Sigma (Σ) và tích Pi (Π): biến chạy, cận dưới/trên, quy tắc tuyến tính và phép đổi biến chỉ số',
          level: 'core',
          paragraphs: [
            'Thay vì viết dấu ba chấm mơ hồ $f(m) + f(m+1) + \\dots + f(n)$, toán học dùng **ký hiệu tổng Sigma** $\\sum_{i=m}^n f(i)$ để biểu diễn chính xác tổng của các số hạng $f(i)$ khi **biến chạy (index of summation / dummy variable)** $i$ lần lượt nhận các giá trị nguyên từ cận dưới $m$ đến cận trên $n$ (theo quy ước chuẩn, nếu $m > n$ thì tổng rỗng có giá trị bằng $0$, phần tử trung hòa của phép cộng). Tương tự, **ký hiệu tích Pi** $\\prod_{i=m}^n f(i) = f(m) \\cdot f(m+1) \\cdots f(n)$ biểu diễn tích liên tiếp (với tích rỗng bằng $1$ và giai thừa $n! = \\prod_{i=1}^n i$). Người học thấy ngay sự tương ứng một-một giữa $\\sum_{i=m}^n f(i)$ với một vòng lặp `for (int i = m; i <= n; ++i) sum += f(i);`.',
            'Tiểu mục trình bày chi tiết các quy tắc thao tác đại số trên ký hiệu $\\Sigma$: (1) Tên biến chạy là biến giả cục bộ ($\\sum_{i=1}^n a_i = \\sum_{k=1}^n a_k$); (2) Tổng của một hằng số $c$ không phụ thuộc biến chạy trên đoạn $[m, n]$ bằng $\\sum_{i=m}^n c = (n - m + 1)c$; (3) Tính chất tuyến tính cho phép đưa thừa số hằng ra ngoài và tách tổng: $\\sum_{i=m}^n (\\alpha a_i + \\beta b_i) = \\alpha \\sum_{i=m}^n a_i + \\beta \\sum_{i=m}^n b_i$; và (4) Phép tách khoảng chỉ số $\\sum_{i=1}^n a_i = \\sum_{i=1}^k a_i + \\sum_{i=k+1}^n a_i$ cùng phép dịch chỉ số $\\sum_{i=1}^n f(i) = \\sum_{j=0}^{n-1} f(j+1)$.',
          ],
          sources: [
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Chapter 11: §11.1 Summation Notation and Properties of Sigma',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mb-ss-arithmetic-geometric-intro',
          title: 'Cấp số cộng, cấp số nhân và hai công thức tổng nền tảng nhất cho phân tích thuật toán',
          level: 'core',
          paragraphs: [
            'Tiểu mục cuối giới thiệu hai họ dãy số có quy luật đơn giản nhất nhưng xuất hiện trong hầu hết các phép đếm bước chạy của vòng lặp: **Cấp số cộng (Arithmetic sequence)** là dãy mà hiệu hai số hạng liên tiếp luôn bằng một công sai không đổi $d$ ($a_n = a_0 + nd$), với tổng các số hạng đầu bằng trung bình cộng của số đầu và số cuối nhân với số lượng số hạng, đặc biệt là tổng $n$ số nguyên dương đầu tiên $\\sum_{i=1}^n i = 1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$ (suy ra từ việc ghép cặp đối xứng $(1+n) + (2 + (n-1)) + \\dots$).',
            'Đối ngẫu với cấp số cộng là **Cấp số nhân (Geometric sequence)** mà tỉ số giữa hai số hạng liên tiếp luôn bằng một công bội không đổi $r$ ($g_n = g_0 r^n$). Bằng kỹ thuật nhân tổng $S = \\sum_{i=0}^n r^i$ với $r$ rồi lấy hiệu $(1 - r)S = (1 + r + \\dots + r^n) - (r + r^2 + \\dots + r^{n+1}) = 1 - r^{n+1}$ để triệt tiêu các số hạng ở giữa, người học nắm được công thức đóng $\\sum_{i=0}^n r^i = \\frac{1 - r^{n+1}}{1 - r} = \\frac{r^{n+1} - 1}{r - 1}$ khi $r \\neq 1$ (và bằng $n + 1$ khi $r = 1$), đặc biệt là đẳng thức nhị phân $\\sum_{i=0}^{k-1} 2^i = 1 + 2 + 4 + \\dots + 2^{k-1} = 2^k - 1$. Các kỹ thuật chứng minh tổng cao hơn và chuỗi vô hạn sẽ được phát triển sâu ở Môn CS-09 và CS-11.',
          ],
          sources: [
            {
              sourceId: 'openstax-precalculus-2e',
              locator: 'Chapter 11: §11.2 Arithmetic Sequences and Series & §11.3 Geometric Sequences and Series',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
  ],
};
