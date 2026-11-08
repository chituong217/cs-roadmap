export const COURSE_SINGLE_VARIABLE_CALCULUS = {
  id: 'single-variable-calculus',
  code: 'CS-11',
  title: 'Giải tích một biến',
  blockId: 'block-2',
  level: 'core',
  prerequisites: [
    {
      courseId: 'math-bridge',
      type: 'required',
      reason: 'Cần nắm vững hàm số, miền xác định, hợp hàm, hàm ngược, đa thức, hàm mũ, logarit và lượng giác từ Môn CS-02.',
    },
  ],
  overview: [
    'Môn học xây dựng bộ công cụ toán học để phân tích sự biến thiên liên tục, tốc độ tích lũy và xấp xỉ hàm số — nền tảng không thể thiếu cho tối ưu hóa học máy, phân tích tiệm cận thuật toán, xác suất liên tục và tính toán khoa học. Theo cấu trúc của MIT 18.01SC, môn học mở đầu từ khái niệm giới hạn hữu hạn và giới hạn tại vô cùng, tính liên tục, và định nghĩa đạo hàm như giới hạn của tỉ số biến thiên $\\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x)-f(x)}{\\Delta x}$, kết nối trực tiếp ý nghĩa hình học (hệ số góc tiếp tuyến) với ý nghĩa tính toán (xấp xỉ tuyến tính cục bộ).',
    'Từ các quy tắc tính đạo hàm, quy tắc dây chuyền (chain rule) cho hàm hợp và đạo hàm của hàm ngược ($\\ln x, \\arctan x$), môn học phát triển lý thuyết cực trị hàm một biến, tính lồi/lõm (convexity — khái niệm trụ cột của tối ưu hóa), quy tắc L’Hôpital để so sánh bậc tăng trưởng tiệm cận, và thuật toán lặp số học Newton–Raphson tìm nghiệm. Nửa sau của môn học xây dựng tổng Riemann, tích phân xác định, hai phần của **Định lý cơ bản của giải tích (Fundamental Theorem of Calculus)** nối liền đạo hàm với tích phân, các kỹ thuật đổi biến và tích phân từng phần, **tích phân suy rộng** trên miền vô hạn (dùng trực tiếp cho cận kẹp tổng ở `CS-09` và biến ngẫu nhiên liên tục ở `CS-13`), rồi kết thúc bằng sự hội tụ của chuỗi số vô hạn và **khai triển chuỗi Taylor/Maclaurin kèm phần dư Lagrange**.',
  ],
  boundaries: [
    'Không cắt bỏ phần tích phân suy rộng và chuỗi Taylor/Maclaurin vì đây là cơ sở trực tiếp để chứng minh cận tổng tích phân (`CS-09`), hàm mật độ xác suất chuẩn/mũ (`CS-13`) và xấp xỉ bậc hai trong tối ưu hóa (`CS-12`, `CS-36`).',
    'Các kỹ thuật tích phân phân thức hữu tỉ bậc cao phức tạp hoặc đổi biến lượng giác đặc thù ít xuất hiện trong Khoa học Máy tính được thu gọn và đánh dấu ở mức mở rộng (`extension`).',
  ],
  sources: [
    {
      sourceId: 'mit-1801sc',
      locator: 'Units 1–5: Differentiation; Applications of Differentiation; The Definite Integral and its Applications; Techniques of Integration; Exploring the Infinite (L’Hospital and Improper Integrals, Sessions 87–93; Taylor Series, Sessions 94–101)',
      relationship: 'primary',
    },
  ],
  chapters: [
    {
      id: 'svc-limits-continuity-derivatives',
      title: 'Chương 1 — Giới hạn, Tính liên tục và Khái niệm Đạo hàm',
      overview: [
        'Chương mở đầu chuyển từ tốc độ thay đổi trung bình trên một khoảng hữu hạn $\\Delta x$ (đã biết ở Môn CS-02) sang tốc độ thay đổi tức thời tại một điểm bằng công cụ giới hạn một phía/hai phía và tính liên tục, đồng thời phân biệt tính liên tục với tính khả vi tại các điểm gãy góc và thiết lập bảng đạo hàm của các hàm sơ cấp từ định nghĩa.',
      ],
      sources: [
        {
          sourceId: 'mit-1801sc',
          locator: 'Unit 1, Part A: Definition and Basic Rules (Sessions 1–12); Part B: Implicit Differentiation and Inverse Functions (Sessions 13–20)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'svc-lcd-limits-continuity-ivt',
          title: 'Khái niệm giới hạn một phía/hai phía, giới hạn tại vô cùng, tính liên tục và Định lý giá trị trung gian (IVT)',
          level: 'core',
          paragraphs: [
            'Ký hiệu giới hạn $\\lim_{x \\to a} f(x) = L$ diễn đạt rằng giá trị $f(x)$ có thể tiến gần tùy ý tới số thực $L$ miễn là $x$ tiến đủ gần tới $a$ (nhưng $x \\neq a$) từ cả hai phía trái ($x \\to a^-$) và phải ($x \\to a^+$); giới hạn hai phía chỉ tồn tại khi và chỉ khi cả hai giới hạn một phía đều tồn tại và bằng nhau. Khi xét $x \\to \\infty$, giới hạn mô tả hành vi tiệm cận của hàm số ở quy mô lớn — cơ sở trực tiếp để định nghĩa các ký hiệu $o(g(n))$, $\\omega(g(n))$ và $\\Theta(g(n))$ trong phân tích thuật toán. Một hàm số $f$ được gọi là **liên tục tại $x = a$** nếu $\\lim_{x \\to a} f(x) = f(a)$ (hàm xác định tại $a$, có giới hạn hữu hạn khi $x \\to a$, và giá trị giới hạn khớp đúng với giá trị hàm tại điểm đó; không có bước nhảy đứt đoạn hay tiệm cận đứng).',
            'Trên một đoạn đóng hữu hạn $[a, b]$, mọi hàm liên tục đều thỏa mãn hai định lý nền tảng của giải tích và tính toán số: (1) **Định lý Giá trị trung gian (Intermediate Value Theorem — IVT)**: nếu $f$ liên tục trên $[a, b]$ và $f(a)$ trái dấu với $f(b)$ ($f(a)\\cdot f(b) < 0$), thì chắc chắn tồn tại ít nhất một nghiệm $c \\in (a, b)$ sao cho $f(c) = 0$ — đây chính là cơ sở chứng minh tính đúng đắn của **thuật toán chia đôi tìm nghiệm (bisection method)**; và (2) **Định lý Giá trị cực trị Weierstrass (Extreme Value Theorem)**: mọi hàm liên tục trên đoạn đóng và bị chặn $[a, b]$ đều đạt được giá trị lớn nhất toàn cục (global maximum) và giá trị nhỏ nhất toàn cục (global minimum) trên đoạn đó.',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 1, Sessions 4–5: Limits and Continuity; Discontinuity (foundations for intermediate and extreme value properties)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'svc-lcd-derivative-definition-differentiability',
          title: 'Định nghĩa Đạo hàm như giới hạn của tỉ số sai phân, ý nghĩa tiếp tuyến/vận tốc và quan hệ giữa Khả vi với Liên tục',
          level: 'core',
          paragraphs: [
            'Trên khoảng $[x, x + \\Delta x]$, tốc độ thay đổi trung bình của hàm $f$ là hệ số góc của dây cung (secant line) $\\frac{\\Delta y}{\\Delta x} = \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}$. Khi cho độ rộng bước $\\Delta x \\to 0$, nếu giới hạn hữu hạn tồn tại thì giới hạn đó được định nghĩa là **đạo hàm (derivative)** của $f$ tại $x$: $$f\'(x) = \\frac{df}{dx} = \\lim_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}$$ Về mặt hình học, $f\'(x_0)$ là hệ số góc của đường thẳng tiếp tuyến (tangent line) $y = f(x_0) + f\'(x_0)(x - x_0)$ ôm sát đồ thị tại điểm $(x_0, f(x_0))$; về mặt mô hình hóa, $f\'(x)$ là tốc độ thay đổi tức thời (instantaneous rate of change) cho biết độ nhạy của đầu ra $f(x)$ khi đầu vào $x$ dịch chuyển một lượng vô cùng nhỏ.',
            'Tiểu mục nhấn mạnh chiều suy luận một chiều giữa tính khả vi (differentiability — tồn tại đạo hàm hữu hạn) và tính liên tục: **nếu hàm $f$ khả vi tại $x_0$ thì nó bắt buộc phải liên tục tại $x_0$** (vì $f(x_0 + \\Delta x) - f(x_0) = \\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}\\cdot \\Delta x \\to f\'(x_0)\\cdot 0 = 0$); nhưng **ngược lại không đúng**: một hàm hoàn toàn liên tục vẫn có thể **không khả vi** tại những điểm gãy góc nhọn (corner/kink, nơi đạo hàm trái khác đạo hàm phải) hoặc tiếp tuyến thẳng đứng. Ví dụ quan trọng nhất trong Khoa học Máy tính là hàm trị tuyệt đối $f(x) = |x|$ và hàm kích hoạt mạng nơ-ron $\\operatorname{ReLU}(x) = \\max(0, x)$: cả hai đều liên tục tại $x = 0$, nhưng tại $x = 0$ đạo hàm trái (bằng $-1$ hoặc $0$) khác đạo hàm phải (bằng $+1$), nên đạo hàm $f\'(0)$ không tồn tại theo nghĩa cổ điển.',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 1, Sessions 1–5: Introduction to Derivatives, Examples, Rate of Change, Limits and Continuity, and Discontinuity',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'svc-lcd-differentiation-rules-elementary',
          title: 'Quy tắc đạo hàm của tổng, tích (Product Rule), thương (Quotient Rule), đa thức, lượng giác và tính chất đặc trưng của e^x',
          level: 'core',
          paragraphs: [
            'Từ định nghĩa giới hạn của tỉ số sai phân, tiểu mục dẫn xuất các quy tắc đại số cho phép tính đạo hàm của tổ hợp hàm mà không cần tính lại giới hạn từ đầu: tính chất tuyến tính $(af + bg)\' = af\' + bg\'$, đạo hàm của lũy thừa $(x^n)\' = n x^{n-1}$, **Quy tắc đạo hàm của tích (Product Rule)** $(uv)\' = u\'v + uv\'$ (xuất phát từ việc diện tích hình chữ nhật $(u + \\Delta u)(v + \\Delta v) - uv = v\\,\\Delta u + u\\,\\Delta v + \\Delta u\\,\\Delta v$ mà phần góc $\\Delta u\\,\\Delta v$ là vô cùng bé bậc cao), và **Quy tắc đạo hàm của thương (Quotient Rule)** $\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$ khi $v(x) \\neq 0$.',
            'Đối với các hàm siêu việt, sử dụng giới hạn lượng giác cơ bản $\\lim_{\\theta \\to 0} \\frac{\\sin\\theta}{\\theta} = 1$ (khi $\\theta$ đo bằng radian!) suy ra $(\\sin x)\' = \\cos x$ và $(\\cos x)\' = -\\sin x$. Đối với hàm mũ $a^x$ ($a > 0$), định nghĩa đạo hàm cho $(a^x)\' = a^x \\cdot \\lim_{\\Delta x \\to 0} \\frac{a^{\\Delta x} - 1}{\\Delta x}$; cơ số tự nhiên **$e \\approx 2.71828\\dots$** được định nghĩa chính xác là cơ số duy nhất làm cho hệ số tỉ lệ tại $x = 0$ bằng đúng $1$ ($\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$), nhờ đó hàm mũ tự nhiên $f(x) = e^x$ bằng chính đạo hàm của nó: $(e^x)\' = e^x$. Cuối cùng, tiểu mục giới thiệu đạo hàm cấp hai $f\'\'(x) = \\frac{d^2 f}{dx^2}$ và đạo hàm cấp $k$ $f^{(k)}(x)$ đo tốc độ thay đổi của chính đạo hàm.',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 1, Sessions 6–12: Calculating Derivatives, Sine and Cosine, Product Rule, Quotient Rule, Chain Rule, and Higher Derivatives; Part B: Exponential Functions',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'svc-chain-rule-approximations',
      title: 'Chương 2 — Quy tắc dây chuyền (Chain Rule), Đạo hàm hàm ngược và Xấp xỉ tuyến tính / bậc hai',
      overview: [
        'Chương này trang bị quy tắc tính đạo hàm quan trọng nhất đối với Khoa học Máy tính và Học máy: quy tắc dây chuyền cho hàm hợp $(f(g(x)))\'$, cách tìm đạo hàm của các hàm ngược ($\\ln x$, $a^x$, $\\arcsin x$, $\\arctan x$), và sử dụng đạo hàm bậc nhất/bậc hai để xấp xỉ hàm phức tạp quanh một điểm kèm đánh giá sai số.',
      ],
      sources: [
        {
          sourceId: 'mit-1801sc',
          locator: 'Unit 1, Session 11: Chain Rule; Part B: Implicit Differentiation and Inverse Functions; Unit 2, Part A: Approximation and Curve Sketching (Sessions 23–28)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'svc-cra-chain-rule-composite',
          title: 'Quy tắc dây chuyền (Chain Rule) cho hàm hợp y = f(u(x)): cơ chế nhân hệ số nhạy cảm qua các tầng',
          level: 'core',
          paragraphs: [
            'Khi một hàm phức hợp được tạo thành từ việc ghép nối liên tiếp hai ánh xạ $x \\mapsto u = g(x) \\mapsto y = f(u)$, một biến thiên nhỏ $\\Delta x$ ở đầu vào gây ra biến thiên $\\Delta u \\approx g\'(x)\\,\\Delta x$ ở biến trung gian, và biến thiên $\\Delta u$ đó lại được tầng thứ hai khuếch đại thành $\\Delta y \\approx f\'(u)\\,\\Delta u \\approx f\'(g(x))\\cdot g\'(x)\\,\\Delta x$. Lấy giới hạn khi $\\Delta x \\to 0$ (khi cả $g$ khả vi tại $x$ và $f$ khả vi tại $u = g(x)$), ta thu được **Quy tắc dây chuyền (Chain Rule)**: $$(f \\circ g)\'(x) = f\'(g(x)) \\cdot g\'(x) \\quad \\text{hay dưới ký hiệu Leibniz:} \\quad \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$',
            'Với chuỗi hợp gồm $m$ tầng $y = f_m(f_{m-1}(\\dots f_1(x)\\dots))$, đạo hàm tổng thể từ đầu vào $x$ tới đầu ra $y$ chính là **tích của các đạo hàm cục bộ của từng tầng dọc theo đường truyền**: $\\frac{dy}{dx} = \\frac{dy}{du_{m-1}} \\cdots \\frac{du_2}{du_1} \\cdot \\frac{du_1}{dx}$. Hiểu quy tắc dây chuyền như phép nhân độ nhạy dọc theo chuỗi biến trung gian giúp người học nắm ngay bản chất một chiều của thuật toán **lan truyền ngược (backpropagation)** và đạo hàm tự động (automatic differentiation) sẽ được mở rộng lên đồ thị nhiều biến ở Môn CS-12 và CS-37.',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 1, Part A, Session 11: Chain Rule',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'svc-cra-implicit-inverse-logarithmic-derivatives',
          title: 'Đạo hàm hàm ẩn, đạo hàm hàm ngược (ln x, arctan x) và kỹ thuật lấy đạo hàm qua logarit',
          level: 'core',
          paragraphs: [
            'Áp dụng trực tiếp quy tắc dây chuyền vào đẳng thức định nghĩa của hàm ngược $f(f^{-1}(y)) = y$ bằng cách lấy đạo hàm hai vế theo $y$, ta có $f\'(f^{-1}(y)) \\cdot (f^{-1})\'(y) = 1$, suy ra công thức tổng quát cho **đạo hàm của hàm ngược**: $$(f^{-1})\'(y) = \\frac{1}{f\'(f^{-1}(y))} \\quad \\text{(với điều kiện } f\'(x) \\neq 0 \\text{ tại } x = f^{-1}(y)\\text{)}$$ Áp dụng công thức này cho hàm ngược của $e^x$ là logarit tự nhiên $y = \\ln x \\iff e^y = x$, ta thu được ngay $(\\ln x)\' = \\frac{1}{e^y} = \\frac{1}{x}$ với $x > 0$ (và kết hợp quy tắc dây chuyền: $(\\ln |u(x)|)\' = \\frac{u\'(x)}{u(x)}$, $(a^x)\' = (e^{x \\ln a})\' = a^x \\ln a$, $(\\log_b x)\' = \\frac{1}{x \\ln b}$).',
            'Hoàn toàn tương tự, từ $(\\tan \\theta)\' = 1 + \\tan^2 \\theta$ và $(\\sin \\theta)\' = \\cos \\theta = \\sqrt{1 - \\sin^2 \\theta}$, công thức đạo hàm hàm ngược cho ta $(\\arctan x)\' = \\frac{1}{1 + x^2}$ trên toàn bộ $\\mathbb{R}$ và $(\\arcsin x)\' = \\frac{1}{\\sqrt{1 - x^2}}$ với $|x| < 1$. Tiểu mục cũng trình bày kỹ thuật **lấy đạo hàm qua logarit (logarithmic differentiation)**: khi cần lấy đạo hàm của một tích/thương gồm rất nhiều thừa số hoặc hàm vừa có biến ở cơ số vừa có biến ở số mũ như $y = x^x = e^{x \\ln x}$ ($x > 0$), việc lấy $\\ln y$ biến tích thành tổng và đưa số mũ xuống dưới giúp tính đạo hàm $\\frac{y\'}{y} = (\\ln y)\'$ dễ dàng (ví dụ $(x^x)\' = x^x(\\ln x + 1)$).',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 1, Part B: Implicit Differentiation and Inverse Functions (Sessions 13–20)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'svc-cra-linear-quadratic-approximations',
          title: 'Xấp xỉ tuyến tính (Linearization), Xấp xỉ bậc hai và các công thức xấp xỉ gần 0 thường dùng trong CS',
          level: 'core',
          paragraphs: [
            'Ở lân cận rất gần một điểm $x_0$, đường cong khả vi $y = f(x)$ gần như trùng khít với đường tiếp tuyến của nó tại $x_0$. Thay đường cong bằng tiếp tuyến cho ta **Xấp xỉ tuyến tính (Linear Approximation / Tangent Line Approximation)**: $$f(x) \\approx L(x) = f(x_0) + f\'(x_0)(x - x_0)$$ Khi cần xét thêm độ cong để biết đồ thị uốn lên trên hay xuống dưới tiếp tuyến (hoặc khi tại điểm cực trị có $f\'(x_0) = 0$ làm xấp xỉ tuyến tính chỉ còn là hằng số phẳng), ta khớp thêm đạo hàm cấp hai $f\'\'(x_0)$ để thu được **Xấp xỉ bậc hai (Quadratic Approximation)**: $$f(x) \\approx Q(x) = f(x_0) + f\'(x_0)(x - x_0) + \\frac{f\'\'(x_0)}{2}(x - x_0)^2$$ với sai số còn lại tỉ lệ với $(x - x_0)^3$ khi $x \\to x_0$.',
            'Tại gốc $x_0 = 0$ (khi $|x|$ rất nhỏ, $|x| \\ll 1$), các xấp xỉ bậc nhất và bậc hai này tạo thành bộ công cụ ước lượng nhanh xuất hiện liên tục trong phân tích thuật toán ngẫu nhiên, xác suất và giải tích tiệm cận: $\\ln(1 + x) \\approx x - \\frac{x^2}{2}$, $e^x \\approx 1 + x + \\frac{x^2}{2}$ (từ đó giải thích vì sao trong xác suất với $p$ rất nhỏ, $(1 - p)^n = e^{n \\ln(1-p)} \\approx e^{-np}$), $(1 + x)^r \\approx 1 + rx + \\frac{r(r-1)}{2}x^2$, $\\sin x \\approx x$, và $\\cos x \\approx 1 - \\frac{x^2}{2}$.',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 2, Part A, Sessions 23–26: Linear Approximation, Examples, Introduction to Quadratic Approximation, and Using Quadratic Approximations',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'svc-optimization-newton',
      title: 'Chương 3 — Cực trị hàm một biến, Tính lồi (Convexity), Quy tắc L’Hôpital và Phương pháp Newton–Raphson',
      overview: [
        'Chương này ứng dụng đạo hàm cấp một và cấp hai để giải quyết ba bài toán lớn: tìm điểm cực đại/cực tiểu địa phương và toàn cục cùng nhận diện hàm lồi (convex function — nơi mọi điểm dừng đều là cực tiểu toàn cục), khử các dạng vô định $0/0$ hoặc $\\infty/\\infty$ bằng quy tắc L’Hôpital để chứng minh thứ bậc tăng trưởng tiệm cận, và thiết kế thuật toán lặp Newton–Raphson hội tụ bậc hai.',
      ],
      sources: [
        {
          sourceId: 'mit-1801sc',
          locator: 'Unit 2, Parts A–B: Curve Sketching and Optimization; Part C, Sessions 34–35: Mean Value Theorem; Unit 5, Part A, Sessions 87–90: L’Hospital’s Rule',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'svc-on-critical-points-extrema-convexity',
          title: 'Điểm tới hạn (Critical Points), điều kiện cực trị địa phương/toàn cục, tính lồi/lõm (Convexity) và bất đẳng thức Jensen cơ sở',
          level: 'core',
          paragraphs: [
            'Để tìm điểm cực đại hoặc cực tiểu của một hàm $f$ trên một miền, trước hết ta tìm các **điểm tới hạn (critical points)** — những điểm thuộc miền xác định mà tại đó hoặc **đạo hàm bằng không ($f\'(x_0) = 0$, điểm dừng / stationary point)** hoặc **đạo hàm không tồn tại**. Theo Định lý Fermat, nếu $f$ đạt cực trị địa phương tại một điểm nằm bên trong khoảng mở và khả vi tại đó, thì bắt buộc $f\'(x_0) = 0$. Tuy nhiên, tiểu mục nhấn mạnh rằng $f\'(x_0) = 0$ mới chỉ là **điều kiện cần chứ chưa phải điều kiện đủ** (ví dụ $f(x) = x^3$ có $f\'(0) = 0$ nhưng $x = 0$ chỉ là điểm uốn đi ngang chứ không phải cực trị). Để kết luận cực trị địa phương, ta kiểm tra sự đổi dấu của $f\'(x)$ khi đi qua $x_0$ (Tiêu chuẩn đạo hàm cấp một) hoặc dùng **Tiêu chuẩn đạo hàm cấp hai**: tại điểm dừng $f\'(x_0) = 0$, nếu $f\'\'(x_0) > 0$ thì $x_0$ là **cực tiểu địa phương chặt**, nếu $f\'\'(x_0) < 0$ thì $x_0$ là **cực đại địa phương chặt**, còn nếu $f\'\'(x_0) = 0$ thì tiêu chuẩn bậc hai chưa kết luận được. Khi tìm **cực trị toàn cục (global extrema)** trên đoạn đóng $[a, b]$, ta bắt buộc phải so sánh giá trị của $f$ tại các điểm tới hạn bên trong $(a, b)$ với giá trị tại **hai đầu mút biên $f(a)$ và $f(b)$**.',
            'Đặc biệt quan trọng đối với tối ưu hóa và học máy là khái niệm **Hàm lồi (Convex function)** trên một khoảng $I$: về mặt hình học, mọi dây cung nối hai điểm trên đồ thị đều nằm phía trên hoặc trùng với đồ thị: $$f(\\theta x + (1-\\theta)y) \\le \\theta f(x) + (1-\\theta)f(y), \\quad \\forall x, y \\in I,\\; \\forall \\theta \\in [0, 1]$$ Khi $f$ khả vi hai lần, $f$ là hàm lồi trên $I$ khi và chỉ khi **$f\'\'(x) \\ge 0$ với mọi $x \\in I$** (và lồi chặt khi $f\'\'(x) > 0$; hàm $-f$ có $f\'\'(x) \\le 0$ được gọi là **hàm lõm / concave** như hàm $\\ln x$ trên $(0, \\infty)$). Tính chất quý giá nhất của hàm lồi khả vi là đồ thị của nó luôn nằm phía trên mọi đường tiếp tuyến ($f(y) \\ge f(x) + f\'(x)(y - x)$), dẫn tới hệ quả vàng của tối ưu hóa lồi: **với hàm lồi, mọi điểm dừng thỏa mãn $f\'(x^*) = 0$ đều tự động là điểm cực tiểu toàn cục (global minimum)**, không bao giờ bị mắc kẹt ở cực tiểu địa phương giả!',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 2, Sessions 27–30: Sketching Graphs and Optimization Problems (first/second derivative and concavity methods)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'svc-on-mvt-lhopital-asymptotic-rates',
          title: 'Định lý giá trị trung bình Lagrange (MVT), Quy tắc L’Hôpital và chứng minh thứ bậc tăng trưởng tiệm cận (log n << n^a << b^n)',
          level: 'core',
          paragraphs: [
            '**Định lý Giá trị trung bình (Mean Value Theorem — MVT)** phát biểu rằng nếu hàm $f$ liên tục trên đoạn đóng $[a, b]$ và khả vi trên khoảng mở $(a, b)$, thì tồn tại ít nhất một điểm $c \\in (a, b)$ sao cho tốc độ thay đổi tức thời tại $c$ bằng đúng tốc độ thay đổi trung bình trên cả đoạn: $$f\'(c) = \\frac{f(b) - f(a)}{b - a} \\iff f(b) - f(a) = f\'(c)(b - a)$$ Định lý MVT là cầu nối dùng thông tin cục bộ của đạo hàm để chặn sai số toàn cục: nếu $|f\'(x)| \\le L$ trên toàn khoảng thì $|f(b) - f(a)| \\le L|b - a|$ (tính chất Lipschitz — cực kỳ quan trọng để chứng minh sự hội tụ của các thuật toán lặp).',
            'Khi tính giới hạn của thương $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ (với $a$ hữu hạn hoặc $a = \\infty$) mà cả tử lẫn mẫu cùng tiến về $0$ (**dạng vô định $0/0$**) hoặc cùng tiến ra $\\pm\\infty$ (**dạng vô định $\\infty/\\infty$**), **Quy tắc L’Hôpital** cho biết nếu $f, g$ khả vi, $g\'(x) \\neq 0$ quanh $a$ và giới hạn của tỉ số hai đạo hàm $\\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)} = L$ tồn tại, thì $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = L$. Tiểu mục lưu ý rõ điều kiện áp dụng: tuyệt đối không được áp dụng L’Hôpital khi giới hạn **không phải** dạng vô định $0/0$ hay $\\infty/\\infty$; còn các dạng vô định như $0 \\cdot \\infty$, $1^\\infty$, $0^0$ phải được biến đổi đại số hoặc lấy logarit để đưa về $0/0$ hoặc $\\infty/\\infty$ trước. Áp dụng quy tắc L’Hôpital khi $x \\to \\infty$ chứng minh chặt chẽ bảng thứ bậc tăng trưởng tiệm cận của Khoa học Máy tính: với mọi số mũ dương $p, a > 0$ và cơ số $b > 1$, ta luôn có $\\lim_{x \\to \\infty} \\frac{(\\ln x)^p}{x^a} = 0$ (mọi lũy thừa của logarit đều tăng chậm hơn mọi lũy thừa dương của $x$, tức $(\\ln n)^p = o(n^a)$) và $\\lim_{x \\to \\infty} \\frac{x^a}{b^x} = 0$ (mọi đa thức đều tăng chậm hơn hàm mũ, tức $n^a = o(b^n)$).',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 2, Part C, Sessions 34–35: Introduction to and Using the Mean Value Theorem; Unit 5, Part A, Sessions 87–90: L’Hospital’s Rule, Examples, and Rates of Growth',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'svc-on-newtons-method-convergence',
          title: 'Thuật toán lặp Newton–Raphson tìm nghiệm f(x) = 0, tốc độ hội tụ bậc hai và các điều kiện thất bại',
          level: 'core',
          paragraphs: [
            'Nhiều phương trình thực tế như $\\cos x = x$ hoặc $x e^x = 2$ không thể giải ra nghiệm đóng bằng công thức đại số sơ cấp; tương tự trong bài toán tối ưu hóa, ta cần tìm nghiệm của phương trình đạo hàm bằng không $g\'(x) = 0$. **Phương pháp Newton–Raphson (Newton’s Method)** giải bài toán tìm nghiệm $f(x) = 0$ bằng cách lặp lại ý tưởng xấp xỉ tuyến tính: xuất phát từ một điểm đoán $x_n$, thay đường cong $y = f(x)$ bằng đường tiếp tuyến của nó tại $x_n$ là $y = f(x_n) + f\'(x_n)(x - x_n)$, rồi lấy giao điểm của tiếp tuyến đó với trục hoành ($y = 0$) làm điểm xấp xỉ tốt hơn kế tiếp $x_{n+1}$: $$x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)} \\quad \\text{(với } f\'(x_n) \\neq 0\\text{)}$$ (Ví dụ khi áp dụng cho $f(x) = x^2 - A = 0$ để tính căn bậc hai $\\sqrt{A}$, công thức Newton cho ra thuật toán trung bình cộng cực nhanh $x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{A}{x_n}\\right)$).',
            'Tiểu mục phân tích **tốc độ hội tụ bậc hai (quadratic convergence)** và **các điều kiện thất bại** của phương pháp Newton: khi điểm khởi tạo $x_0$ đã nằm đủ gần một nghiệm đơn $x^*$ (nơi $f\'(x^*) \\neq 0$ và $f\'\'$ liên tục), sai số ở bước sau tỉ lệ với **bình phương** sai số bước trước ($|x_{n+1} - x^*| \\approx \\frac{|f\'\'(x^*)|}{2|f\'(x^*)|}|x_n - x^*|^2$), nghĩa là số chữ số thập phân chính xác **tăng gấp đôi sau mỗi bước lặp**! Tuy nhiên, phương pháp Newton sẽ thất bại hoặc suy giảm hiệu năng trong ba trường hợp cần cảnh giác: (1) Nếu tại một bước lặp gặp điểm có tiếp tuyến gần nằm ngang ($f\'(x_n) \\approx 0$), phép chia cho $f\'(x_n)$ bắn $x_{n+1}$ ra rất xa; (2) Nếu chọn $x_0$ xa nghiệm, dãy lặp có thể rơi vào chu kỳ dao động tuần hoàn hoặc phân kỳ (như với $f(x) = x^{1/3}$); và (3) Nếu áp dụng Newton để giải bài toán tối ưu $g\'(x) = 0$ ($x_{n+1} = x_n - \\frac{g\'(x_n)}{g\'\'(x_n)}$), thuật toán chỉ hút về cực tiểu nhưng cũng có thể hút về cực đại nếu $g\'\'(x_n) < 0$.',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 2, Part B, Session 33: Newton’s Method',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'svc-integration-ftc',
      title: 'Chương 4 — Tổng Riemann, Tích phân xác định và Định lý cơ bản của Giải tích (FTC)',
      overview: [
        'Chương này xây dựng phép toán ngược của đạo hàm — tích phân — từ bài toán tính tổng tích lũy liên tục qua tổng Riemann trái, phải, điểm giữa và hình thang, giải thích mối liên hệ hình học với phương pháp kẹp tổng rời rạc, và trình bày hai phần của Định lý cơ bản của giải tích (FTC 1 & FTC 2) kết nối hai nhánh phép tính vi phân và tích phân thành một thể thống nhất.',
      ],
      sources: [
        {
          sourceId: 'mit-1801sc',
          locator: 'Unit 3, Part A: Definition of the Definite Integral and First Fundamental Theorem; Part B: Second Fundamental Theorem, Areas, Volumes',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'svc-iftc-riemann-sums-definite-integral',
          title: 'Tổng Riemann trái/phải/giữa, định nghĩa Tích phân xác định và liên hệ giữa tổng rời rạc với tích phân liên tục',
          level: 'core',
          paragraphs: [
            'Làm thế nào để tính tổng lượng tích lũy của một đại lượng biến thiên liên tục $f(x)$ trên đoạn $[a, b]$ (như diện tích có dấu dưới đồ thị, quãng đường đi được từ vận tốc $v(t)$, hoặc xác suất tích lũy từ hàm mật độ)? Phương pháp **Tổng Riemann (Riemann Sum)** chia đoạn $[a, b]$ thành $n$ đoạn con có độ rộng $\\Delta x = \\frac{b - a}{n}$ bởi các điểm chia $x_i = a + i\\,\\Delta x$, và xấp xỉ giá trị hàm trên mỗi đoạn thứ $i$ bằng một hình chữ nhật có chiều cao $f(x_i^*)$: $$S_n = \\sum_{i=1}^n f(x_i^*) \\, \\Delta x$$ Tùy cách chọn điểm mẫu $x_i^*$, ta có tổng Riemann đầu mút trái ($x_{i-1}$), đầu mút phải ($x_i$), điểm giữa (midpoint rule), hoặc kết hợp hai đầu mút thành hình thang (trapezoidal rule — dùng trực tiếp để ước lượng số học tích phân trên máy tính). Khi hàm $f$ liên tục (hoặc liên tục từng khúc) trên $[a, b]$, khi cho $n \\to \\infty$ ($\\Delta x \\to 0$), mọi tổng Riemann đều hội tụ về cùng một giá trị duy nhất gọi là **tích phân xác định (definite integral)**: $$\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*)\\,\\Delta x$$',
            'Góc nhìn tổng Riemann khi đặt bước chia đơn vị $\\Delta x = 1$ trên các điểm nguyên $x = 1, 2, \\dots, n$ giải thích trực tiếp cơ chế hình học của **phương pháp kẹp tổng bằng tích phân** đã gặp ở Môn CS-09: tổng rời rạc $\\sum_{i=1}^n f(i)$ chính là tổng diện tích của $n$ hình chữ nhật có đáy bằng $1$, do đó khi $f$ đơn điệu tăng hoặc giảm, diện tích các hình chữ nhật này luôn kẹp chặt hoặc bị kẹp chặt bởi diện tích đường cong liên tục $\\int_1^n f(x)\\,dx$. Tiểu mục cũng tổng hợp các tính chất cơ bản của tích phân xác định: tính tuyến tính, tính cộng tính trên khoảng $\\int_a^c f = \\int_a^b f + \\int_b^c f$, quy ước đảo cận $\\int_b^a f = -\\int_a^b f$, và tính bảo toàn bất đẳng thức (nếu $f(x) \\le g(x)$ trên $[a, b]$ thì $\\int_a^b f(x)\\,dx \\le \\int_a^b g(x)\\,dx$).',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 3, Sessions 43–46: Definite Integrals, Adding Areas of Rectangles, Easy Integrals, and Riemann Sums; Sessions 63–64: Numerical Integration',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'svc-iftc-fundamental-theorem-of-calculus',
          title: 'Nguyên hàm (Antiderivative) và Hai phần của Định lý cơ bản của Giải tích (FTC 1 & FTC 2)',
          level: 'core',
          paragraphs: [
            'Nếu chỉ dựa vào định nghĩa giới hạn của tổng Riemann $\\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i)\\,\\Delta x$, việc tính tích phân của những hàm rất đơn giản cũng cực kỳ vất vả. Bước ngoặt vĩ đại của giải tích là phát hiện ra rằng bài toán tính diện tích tích lũy (tích phân) và bài toán tìm hệ số góc tiếp tuyến (đạo hàm) thực chất là **hai phép toán ngược nhau** thông qua **Định lý cơ bản của Giải tích (Fundamental Theorem of Calculus — FTC)**.',
            'Định lý gồm hai phần gắn kết chặt chẽ: **Phần 1 (FTC 1 — Đạo hàm của hàm tích lũy diện tích theo cận trên)**: nếu $f$ là hàm liên tục trên $[a, b]$ và ta định nghĩa hàm tích lũy $F(x) = \\int_a^x f(t)\\,dt$, thì tốc độ thay đổi tức thời của diện tích $F(x)$ khi cận trên $x$ dịch chuyển chính là chiều cao đường cong tại điểm đó: $$\\frac{d}{dx} \\int_a^x f(t)\\,dt = f(x)$$ (Kết hợp với quy tắc dây chuyền khi cận trên là một hàm khả vi $g(x)$: $\\frac{d}{dx} \\int_a^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g\'(x)$ — công thức này sẽ được dùng trực tiếp ở Môn CS-13 để chứng minh đạo hàm của hàm phân phối xác suất tích lũy $F_X(x) = \\int_{-\\infty}^x f_X(t)\\,dt$ chính là hàm mật độ xác suất $f_X(x) = F_X\'(x)$!). **Phần 2 (FTC 2 — Công thức Newton–Leibniz)**: nếu $f$ liên tục trên $[a, b]$ và $G(x)$ là một **nguyên hàm (antiderivative)** bất kỳ của $f$ (tức $G\'(x) = f(x)$), thì tổng tích lũy trên cả đoạn $[a, b]$ bằng hiệu giá trị của nguyên hàm tại hai đầu mút: $$\\int_a^b f(x)\\,dx = G(b) - G(a) = \\Big[ G(x) \\Big]_a^b$$',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 2, Session 37: Antiderivatives; Unit 3, Sessions 47–52: First and Second Fundamental Theorems of Calculus and Applications',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'svc-techniques-improper-integrals',
      title: 'Chương 5 — Kỹ thuật Tích phân (Đổi biến, Từng phần) và Tích phân suy rộng (Improper Integrals)',
      overview: [
        'Chương này trang bị hai kỹ thuật biến đổi tích phân cốt lõi nhất (phép đổi biến $u$-substitution ngược với quy tắc dây chuyền, và tích phân từng phần ngược với quy tắc đạo hàm của tích) cùng lý thuyết tích phân suy rộng trên miền vô hạn $[a, \\infty)$ hoặc $( -\\infty, \\infty )$ — công cụ bắt buộc để làm việc với biến ngẫu nhiên liên tục và ước lượng tổng tiệm cận.',
      ],
      sources: [
        {
          sourceId: 'mit-1801sc',
          locator: 'Unit 2, Session 38: Integration by Substitution; Unit 4, Part B: Integration by Parts; Unit 5, Part A, Sessions 91–93: Improper Integrals, Integral Comparison, and Singularities',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'svc-tii-substitution-integration-by-parts',
          title: 'Phép đổi biến số (u-Substitution) và Tích phân từng phần (Integration by Parts) gắn với bài toán xác suất – tiệm cận',
          level: 'core',
          paragraphs: [
            'Vì tích phân là phép toán ngược của đạo hàm, mỗi quy tắc đạo hàm lớn đều sinh ra một kỹ thuật tích phân đối ngẫu: (1) Đảo ngược quy tắc dây chuyền $(F(g(x)))\' = F\'(g(x))g\'(x) = f(g(x))g\'(x)$ cho ta **Phép đổi biến số (Substitution Rule)**: bằng cách đặt biến mới $u = g(x)$ và vi phân $du = g\'(x)\\,dx$, tích phân xác định đổi cả biểu thức lẫn **đổi luôn hai cận tích phân** theo biến mới: $$\\int_a^b f(g(x))\\,g\'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du$$ (với điều kiện $g\'$ liên tục trên $[a, b]$ và $f$ liên tục trên miền giá trị của $g$).',
            '(2) Đảo ngược quy tắc đạo hàm của tích $(u(x)v(x))\' = u\'(x)v(x) + u(x)v\'(x)$ bằng cách lấy tích phân hai vế và chuyển vế cho ta công thức **Tích phân từng phần (Integration by Parts)**: $$\\int_a^b u(x)\\,v\'(x)\\,dx = \\Big[ u(x)v(x) \\Big]_a^b - \\int_a^b v(x)\\,u\'(x)\\,dx \\quad \\text{hay} \\quad \\int u\\,dv = uv - \\int v\\,du$$ Tiểu mục minh họa trực tiếp hai ứng dụng của tích phân từng phần xuất hiện ngay trong chương trình CS: tính nguyên hàm $\\int \\ln x\\,dx = x\\ln x - x + C$ (bằng cách đặt $u = \\ln x, dv = dx$) dùng để kẹp $\\ln(n!)$ ở Môn CS-09, và tính tích phân $\\int_0^\\infty x \\lambda e^{-\\lambda x}\\,dx = \\frac{1}{\\lambda}$ (bằng cách đặt $u = x, dv = \\lambda e^{-\\lambda x}dx$) dùng để tính kỳ vọng $E[X]$ và phương sai của phân phối mũ / phân phối chuẩn ở Môn CS-13.',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 2, Session 38: Integration by Substitution; Unit 4, Part B: Integration by Parts (Session 76)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'svc-tii-improper-integrals-convergence',
          title: 'Tích phân suy rộng (Improper Integrals) trên miền vô hạn và hàm không bị chặn: định nghĩa giới hạn, p-integrals và tiêu chuẩn so sánh',
          level: 'core',
          paragraphs: [
            'Định nghĩa tổng Riemann ban đầu đòi hỏi đoạn lấy tích phân $[a, b]$ phải hữu hạn và hàm $f$ phải bị chặn. Tuy nhiên, trong phân tích tiệm cận khi $n \\to \\infty$ và trong lý thuyết xác suất liên tục trên $(0, \\infty)$ hoặc $(-\\infty, \\infty)$, ta cần tính diện tích dưới đường cong kéo dài tới vô cực — gọi là **Tích phân suy rộng loại I (Improper Integral over an infinite interval)**. Tích phân suy rộng không phải là phép thế số "$\\infty$" trực tiếp vào nguyên hàm, mà được định nghĩa chặt chẽ là **giới hạn của tích phân xác định trên đoạn hữu hạn $[a, R]$ khi $R \\to \\infty$**: $$\\int_a^\\infty f(x)\\,dx = \\lim_{R \\to \\infty} \\int_a^R f(x)\\,dx$$ Nếu giới hạn bên phải tồn tại và là một số thực hữu hạn, ta nói tích phân suy rộng **hội tụ (converges)**; nếu giới hạn bằng $\\pm\\infty$ hoặc không tồn tại, tích phân **phân kỳ (diverges)**. Đối với tích phân trên toàn trục thực $\\int_{-\\infty}^\\infty f(x)\\,dx$, chuẩn định nghĩa bắt buộc phải tách tại một điểm trung gian (như $0$) thành $\\int_{-\\infty}^0 f(x)\\,dx + \\int_0^\\infty f(x)\\,dx$ và đòi hỏi **cả hai phần phải hội tụ độc lập nhau**. Tương tự, khi hàm $f(x)$ tiến ra vô cùng tại một đầu mút $a$ (như $\\int_0^1 x^{-p}\\,dx$, tích phân suy rộng loại II), ta lấy giới hạn $\\lim_{\\varepsilon \\to 0^+} \\int_{a+\\varepsilon}^b f(x)\\,dx$.',
            'Tiểu mục chứng minh chuẩn mực hội tụ quan trọng nhất để đối chiếu là họ **$p$-integrals trên $[1, \\infty)$**: $$\\int_1^\\infty \\frac{1}{x^p}\\,dx \\quad \\begin{cases} \\text{hội tụ về } \\dfrac{1}{p-1} & \\text{khi } p > 1, \\\\ \\text{phân kỳ ra } +\\infty & \\text{khi } p \\le 1 \\text{ (tại } p=1 \\text{ nguyên hàm là } \\ln R \\to \\infty\\text{)}. \\end{cases}$$ (Ngược lại, quanh điểm kỳ dị $0$ trên $(0, 1]$, $\\int_0^1 x^{-p}\\,dx$ hội tụ khi $p < 1$ và phân kỳ khi $p \\ge 1$). Đối với những hàm không tìm được nguyên hàm sơ cấp (như hàm mật độ Gaussian $e^{-x^2/2}$), ta dùng **Tiêu chuẩn so sánh trực tiếp và so sánh giới hạn (Comparison & Limit Comparison Tests)**: với $0 \\le f(x) \\le g(x)$ khi $x$ đủ lớn, nếu tích phân của hàm lớn $\\int_a^\\infty g(x)\\,dx$ hội tụ thì $\\int_a^\\infty f(x)\\,dx$ chắc chắn hội tụ (chẳng hạn với $x \\ge 1$ thì $0 < e^{-x^2} \\le e^{-x}$, mà $\\int_1^\\infty e^{-x}\\,dx = e^{-1} < \\infty$ nên tích phân Gaussian $\\int_{-\\infty}^\\infty e^{-x^2}\\,dx$ hội tụ hữu hạn về $\\sqrt{\\pi}$).',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 5, Part A, Sessions 91–93: Improper Integrals, Integral Comparison, and Indefinite Integrals and Singularities',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'svc-tii-special-substitutions-partial-fractions',
          title: 'Phân tích phân thức tối giản (Partial Fractions) và đổi biến lượng giác (Mở rộng)',
          level: 'extension',
          paragraphs: [
            'Tiểu mục mở rộng này tổng hợp hai kỹ thuật giải tích bổ trợ cho việc tìm nguyên hàm của các hàm phân thức và căn thức bậc hai: (1) **Phương pháp tách phân thức tối giản (Partial Fraction Decomposition)** chia một phân thức hữu tỉ thực sự $\\frac{P(x)}{Q(x)}$ (với $\\deg P < \\deg Q$) thành tổng các phân thức đơn giản dạng $\\frac{A}{(x - r)^k}$ hoặc $\\frac{Bx + C}{(x^2 + px + q)^k}$ để lấy nguyên hàm thành hàm logarit và $\\arctan$ — đây chính là cùng một kỹ thuật đại số được dùng để tách hàm sinh hữu tỉ ở Chương 10 của Môn CS-09.',
            '(2) **Phép đổi biến lượng giác (Trigonometric Substitution)** sử dụng các hằng đẳng thức Pythagoras trên đường tròn đơn vị để khử căn thức bậc hai: đặt $x = a \\sin\\theta$ cho $\\sqrt{a^2 - x^2}$ (chẳng hạn để chứng minh diện tích hình tròn bán kính $R$ bằng $2\\int_{-R}^R \\sqrt{R^2 - x^2}\\,dx = \\pi R^2$), đặt $x = a \\tan\\theta$ cho $\\sqrt{a^2 + x^2}$ hoặc $\\frac{1}{a^2 + x^2}$, và đặt $x = a \\sec\\theta$ cho $\\sqrt{x^2 - a^2}$.',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 4, Part A, Session 72: Trig Substitution; Part B, Sessions 74–75: Integration by Partial Fractions and Advanced Partial Fractions',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'svc-series-taylor',
      title: 'Chương 6 — Chuỗi vô hạn (Infinite Series), Chuỗi lũy thừa và Khai triển Chuỗi Taylor / Maclaurin',
      overview: [
        'Chương cuối của môn Giải tích một biến hoàn thiện lý thuyết giới hạn của tổng vô hạn $\\sum_{n=0}^\\infty a_n$ thông qua dãy tổng riêng phần, các tiêu chuẩn kiểm tra hội tụ (cấp số nhân, tiêu chuẩn tích phân, tiêu chuẩn so sánh và tỉ số D’Alembert), bán kính hội tụ của chuỗi lũy thừa và biểu diễn các hàm khả vi bằng chuỗi Taylor/Maclaurin kèm công thức đánh giá sai số phần dư Lagrange.',
      ],
      sources: [
        {
          sourceId: 'mit-1801sc',
          locator: 'Unit 5, Part A, Session 92: Integral Comparison; Part B, Sessions 94–101: Infinite Series, Series Comparison, Power Series, Taylor’s Series, and Operations on Power Series',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'svc-st-infinite-series-convergence-tests',
          title: 'Dãy tổng riêng phần, sự hội tụ của Chuỗi số vô hạn, chuỗi cấp số nhân, Tiêu chuẩn tích phân và Tiêu chuẩn tỉ số D’Alembert',
          level: 'core',
          paragraphs: [
            'Cho một dãy số thực $(a_n)_{n=1}^\\infty$, biểu thức tổng vô hạn $\\sum_{n=1}^\\infty a_n$ được định nghĩa chặt chẽ qua giới hạn của **dãy các tổng riêng phần (sequence of partial sums)** $S_N = \\sum_{n=1}^N a_n$ khi $N \\to \\infty$: nếu $\\lim_{N \\to \\infty} S_N = S$ tồn tại hữu hạn thì chuỗi **hội tụ (converges)** về tổng $S$; ngược lại chuỗi **phân kỳ (diverges)**. Điều kiện cần cơ bản nhất để một chuỗi $\\sum a_n$ hội tụ là số hạng tổng quát phải tiến về không ($\\lim_{n \\to \\infty} a_n = 0$ — nếu $\\lim a_n \\neq 0$ thì chuỗi chắc chắn phân kỳ theo **Test for Divergence**); nhưng tiểu mục nhấn mạnh rằng **$a_n \\to 0$ hoàn toàn KHÔNG đủ để suy ra chuỗi hội tụ**, với phản ví dụ kinh điển là **chuỗi điều hòa (harmonic series)** $\\sum_{n=1}^\\infty \\frac{1}{n} = +\\infty$ có $1/n \\to 0$ nhưng tổng riêng phần $H_N = \\Theta(\\ln N) \\to \\infty$.',
            'Tiểu mục hệ thống hóa các chuẩn mực hội tụ quan trọng nhất: (1) **Chuỗi cấp số nhân (Geometric series)** $\\sum_{n=0}^\\infty a r^n$ hội tụ về $\\frac{a}{1 - r}$ khi và chỉ khi $|r| < 1$, và phân kỳ khi $|r| \\ge 1$; (2) **Tiêu chuẩn tích phân (Integral Test)**: với hàm $f(x)$ dương, liên tục và đơn điệu giảm trên $[1, \\infty)$ có $a_n = f(n)$, chuỗi $\\sum_{n=1}^\\infty a_n$ và tích phân suy rộng $\\int_1^\\infty f(x)\\,dx$ cùng hội tụ hoặc cùng phân kỳ, từ đó suy ra **$p$-series $\\sum_{n=1}^\\infty \\frac{1}{n^p}$ hội tụ khi và chỉ khi $p > 1$**; (3) **Tiêu chuẩn so sánh và Tiêu chuẩn tỉ số (Ratio Test)**: xét $L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$, nếu $L < 1$ thì chuỗi hội tụ tuyệt đối (tốc độ giảm nhanh hơn cấp số nhân), nếu $L > 1$ thì chuỗi phân kỳ, còn nếu $L = 1$ thì tiêu chuẩn tỉ số chưa kết luận được; và (4) Sự khác biệt giữa **hội tụ tuyệt đối** ($\\sum |a_n| < \\infty$) với **hội tụ có điều kiện** (như chuỗi đan dấu $\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n} = \\ln 2$ theo tiêu chuẩn Leibniz).',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 5, Part A, Session 92: Integral Comparison; Part B, Sessions 94–96: Infinite Series, Series Comparison, and Stacking Blocks',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'svc-st-power-series-taylor-maclaurin-remainder',
          title: 'Chuỗi lũy thừa, bán kính hội tụ, Chuỗi Taylor / Maclaurin và Định lý Taylor với phần dư Lagrange',
          level: 'core',
          paragraphs: [
            'Một **chuỗi lũy thừa (power series)** tâm tại $x_0$ có dạng $\\sum_{n=0}^\\infty c_n (x - x_0)^n$. Khác với hàm sinh hình thức ở Môn CS-09 (nơi $x$ chỉ là ký hiệu đánh dấu vị trí và không thay số), trong giải tích ta coi chuỗi lũy thừa là một hàm số thực của $x$: theo tiêu chuẩn tỉ số, luôn tồn tại một **bán kính hội tụ (radius of convergence)** $R \\in [0, \\infty]$ sao cho chuỗi hội tụ tuyệt đối với mọi $x$ nằm trong khoảng mở $|x - x_0| < R$ và phân kỳ khi $|x - x_0| > R$; bên trong khoảng hội tụ $(-R + x_0, x_0 + R)$, chuỗi lũy thừa có thể được lấy đạo hàm và tích phân từng số hạng một cách hợp lệ.',
            'Khi một hàm $f(x)$ khả vi đến cấp $N+1$ quanh tâm $x_0$, mở rộng xấp xỉ tuyến tính và bậc hai ở Chương 2 lên bậc $N$ bằng cách khớp tất cả các đạo hàm từ cấp $0$ đến cấp $N$ tại $x_0$ cho ta **Đa thức Taylor bậc $N$** $P_N(x) = \\sum_{k=0}^N \\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$. Quan trọng hơn cả là **Định lý Taylor với phần dư Lagrange (Taylor’s Theorem with Lagrange Remainder)** cho biết chính xác sai số cắt cụt $R_N(x) = f(x) - P_N(x)$: tồn tại một điểm $c$ nằm giữa $x_0$ và $x$ sao cho: $$f(x) = \\sum_{k=0}^N \\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k + \\frac{f^{(N+1)}(c)}{(N+1)!}(x - x_0)^{N+1}$$ Khi $R_N(x) \\to 0$ lúc $N \\to \\infty$, hàm $f(x)$ bằng đúng **Chuỗi Taylor** của nó (và khi $x_0 = 0$ gọi là **Chuỗi Maclaurin**). Tiểu mục hệ thống hóa 5 khai triển Maclaurin cốt lõi cùng miền hội tụ mà mọi người học CS cần nắm vững: $$e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}\\; (\\forall x \\in \\mathbb{R}), \\qquad \\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n\\; (|x| < 1), \\qquad \\ln(1+x) = \\sum_{n=1}^\\infty (-1)^{n-1}\\frac{x^n}{n}\\; (-1 < x \\le 1)$$ cùng $\\sin x = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{(2n+1)!}$, $\\cos x = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n}}{(2n)!}$ ($\\forall x \\in \\mathbb{R}$, qua đó giải thích công thức Euler $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$) và chuỗi nhị thức tổng quát $(1+x)^\\alpha = \\sum_{n=0}^\\infty \\binom{\\alpha}{n}x^n$ ($|x| < 1$).',
          ],
          sources: [
            {
              sourceId: 'mit-1801sc',
              locator: 'Unit 5, Part B, Sessions 97–100: Power Series, Taylor’s Series, Taylor’s Series Continued, and Operations on Power Series',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
  ],
};
