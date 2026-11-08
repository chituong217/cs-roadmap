export const COURSE_MULTIVARIABLE_CALCULUS_OPTIMIZATION = {
  id: 'multivariable-calculus-optimization',
  code: 'CS-12',
  title: 'Giải tích nhiều biến và tối ưu',
  blockId: 'block-2',
  level: 'core',
  prerequisites: [
    {
      courseId: 'single-variable-calculus',
      type: 'required',
      reason: 'Cần nắm vững đạo hàm, quy tắc dây chuyền một biến, khai triển Taylor bậc hai và tích phân xác định/suy rộng từ Môn CS-11.',
    },
    {
      courseId: 'linear-algebra',
      type: 'required',
      reason: 'Cần nắm vững không gian R^n, tích vô hướng, phép nhân ma trận, định thức, trị riêng và ma trận đối xứng xác định dương từ Môn CS-10 để làm việc với Gradient, Jacobian và Hessian.',
    },
  ],
  overview: [
    'Trong các bài toán thực tế của Khoa học Máy tính — từ huấn luyện mô hình học máy có hàng triệu trọng số, mô phỏng ánh sáng và vật lý 3D trong đồ họa, đến phân tích phân phối xác suất đồng thời của nhiều biến — hàm số hầu như không bao giờ chỉ phụ thuộc vào một biến đơn lẻ $x \\in \\mathbb{R}$ mà nhận đầu vào là một vector nhiều chiều $\\mathbf{x} = (x_1, x_2, \\dots, x_n)^T \\in \\mathbb{R}^n$. Môn học này hợp nhất hai nhánh **Giải tích một biến (`CS-11`)** và **Đại số tuyến tính (`CS-10`)** để xây dựng phép tính vi tích phân trên không gian nhiều chiều: từ hình học vector, đường/mặt đồng mức (level sets), đạo hàm riêng, mặt phẳng tiếp diện và điều kiện khả vi toàn phần, đến đạo hàm theo hướng, vector **Gradient ($\\nabla f$)**, ma trận **Jacobian ($J$)** và quy tắc dây chuyền nhiều biến trên **đồ thị tính toán (computational graph)**.',
    'Chương 3 của môn học đi sâu vào lý thuyết và thuật toán **Tối ưu hóa (Optimization)**: sử dụng khai triển Taylor bậc hai nhiều biến và ma trận đạo hàm bậc hai **Hessian ($H$)** để phân loại các điểm dừng thành cực tiểu địa phương, cực đại địa phương và **điểm yên ngựa (saddle points)**; giải bài toán tối ưu có ràng buộc bằng **Nhân tử Lagrange**; và đối chiếu giải tích cực trị với thuật toán tối ưu số học **Hạ Gradient (Gradient Descent)** kèm điều kiện bước nhảy hội tụ. Chương cuối trang bị tích phân kép/bội (Định lý Fubini) và công thức đổi biến qua định thức Jacobian (tọa độ cực/cầu, chuẩn hóa tích phân Gaussian).',
  ],
  boundaries: [
    'Phân biệt rạch ròi giữa **điều kiện cực trị giải tích** (giải hệ phương trình $\\nabla f(\\mathbf{x}) = \\mathbf{0}$ và xét tính xác định dương của ma trận Hessian) với **thuật toán tối ưu số học lặp** (như Gradient Descent $\\mathbf{x}_{k+1} = \\mathbf{x}_k - \\eta \\nabla f(\\mathbf{x}_k)$ dùng khi không thể giải nghiệm đóng của $\\nabla f(\\mathbf{x}) = \\mathbf{0}$).',
    'Phần giải tích vector trường cổ điển trong vật lý (tích phân đường/mặt của trường lực, các định lý Green, Stokes và Gauss/Divergence) được đặt ở một tiểu mục mở rộng (`extension`), không bắt buộc cho luồng Học máy và Hệ thống phần mềm cốt lõi.',
  ],
  sources: [
    {
      sourceId: 'mit-1802sc',
      locator: 'Unit 1: Vectors and Matrices; Unit 2: Partial Derivatives (Parts A–C); Unit 3, Part A: Double Integrals (Sessions 47–55); Unit 4, Part A: Triple Integrals (Sessions 74–78)',
      relationship: 'primary',
    },
  ],
  chapters: [
    {
      id: 'mco-multivariable-functions-partials',
      title: 'Chương 1 — Hàm nhiều biến, Đường/Mặt đồng mức, Đạo hàm riêng và Tính khả vi toàn phần',
      overview: [
        'Chương mở đầu xây dựng trực giác hình học cho hàm số nhiều biến $f: \\mathbb{R}^n \\to \\mathbb{R}$ thông qua các lát cắt và đường đồng mức, định nghĩa đạo hàm riêng theo từng trục tọa độ, xấp xỉ tuyến tính bằng mặt phẳng tiếp diện và làm rõ vì sao việc tồn tại mọi đạo hàm riêng chưa đủ đảm bảo hàm khả vi toàn phần.',
      ],
      sources: [
        {
          sourceId: 'mit-1802sc',
          locator: 'Unit 1, Part A: Vectors, Determinants and Planes; Unit 2, Part A, Sessions 24–31: Functions of Two Variables, Level Curves, Partial Derivatives, Approximation, and Optimization',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'mco-mfp-vectors-planes-level-sets',
          title: 'Hình học không gian R^n, phương trình mặt phẳng/siêu phẳng, đồ thị hàm nhiều biến và Đường/Mặt đồng mức (Level Sets / Contours)',
          level: 'core',
          paragraphs: [
            'Trước khi xét sự biến thiên của hàm nhiều biến, tiểu mục này củng cố ngôn ngữ hình học trong $\\mathbb{R}^n$ và $\\mathbb{R}^3$: tích vô hướng $\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{u}^T \\mathbf{v}$ đo góc và hình chiếu, tích có hướng $\\mathbf{u} \\times \\mathbf{v}$ trong $\\mathbb{R}^3$ tạo ra một vector pháp tuyến vuông góc với cả $\\mathbf{u}$ lẫn $\\mathbf{v}$ có độ dài bằng diện tích hình bình hành, và phương trình của một **mặt phẳng / siêu phẳng (hyperplane)** đi qua điểm $\\mathbf{x}_0$ có vector pháp tuyến $\\mathbf{n} \\neq \\mathbf{0}$ luôn có dạng $\\mathbf{n} \\cdot (\\mathbf{x} - \\mathbf{x}_0) = 0$ (tức $\\mathbf{w}^T \\mathbf{x} + b = 0$ — ranh giới quyết định tuyến tính cơ bản nhất trong học máy).',
            'Đối với hàm vô hướng $n$ biến $f: \\mathbb{R}^n \\to \\mathbb{R}$, **đồ thị (graph)** của nó là tập hợp các điểm $(\\mathbf{x}, z) \\in \\mathbb{R}^{n+1}$ sao cho $z = f(\\mathbf{x})$ (với $n = 2$, đồ thị $z = f(x, y)$ là một mặt cong trong không gian 3 chiều). Vì không thể vẽ trực tiếp đồ thị khi $n \\ge 3$, công cụ trực quan hóa quan trọng nhất là **Tập đồng mức (Level Set)**: tập hợp tất cả các điểm đầu vào trong $\\mathbb{R}^n$ cùng nhận một giá trị hàm không đổi $c$: $$L_c = \\{\\mathbf{x} \\in \\mathbb{R}^n \\mid f(\\mathbf{x}) = c\\}$$ Khi $n = 2$, $f(x, y) = c$ tạo thành các **đường đồng mức (level curves / contour lines)** trên mặt phẳng $(x, y)$ (giống như các đường cao độ trên bản đồ địa hình: nơi các đường đồng mức xếp khích sát nhau là nơi mặt hàm dốc đứng, nơi các đường thưa nhau là sườn thoải, và các vòng khép kín đồng tâm báo hiệu đỉnh cực đại hoặc đáy thung lũng cực tiểu). Khi $n = 3$, $f(x, y, z) = c$ là một **mặt đồng mức (level surface / isosurface)**.',
          ],
          sources: [
            {
              sourceId: 'mit-1802sc',
              locator: 'Unit 1, Part A: Vectors, Determinants and Planes; Unit 2, Sessions 24–25: Functions of Two Variables: Graphs; Level Curves and Contour Plots',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mco-mfp-partial-derivatives-clavaut',
          title: 'Đạo hàm riêng bậc nhất (Partial Derivatives), đạo hàm riêng cấp cao và Định lý Clairaut về tính đối xứng của đạo hàm hỗn hợp',
          level: 'core',
          paragraphs: [
            'Để đo tốc độ thay đổi của hàm nhiều biến $f(x_1, \\dots, x_n)$ khi chỉ cho **duy nhất một biến $x_i$ thay đổi** còn tất cả $n - 1$ biến còn lại được giữ cố định như hằng số, ta định nghĩa **Đạo hàm riêng theo $x_i$ (Partial Derivative)** tại $\\mathbf{x}$: $$\\frac{\\partial f}{\\partial x_i}(\\mathbf{x}) = f_{x_i}(\\mathbf{x}) = \\lim_{h \\to 0} \\frac{f(x_1, \\dots, x_i + h, \\dots, x_n) - f(x_1, \\dots, x_i, \\dots, x_n)}{h}$$ Về mặt hình học với $z = f(x, y)$ tại điểm $(x_0, y_0)$, việc giữ cố định $y = y_0$ tương ứng với việc dùng mặt phẳng thẳng đứng $y = y_0$ cắt mặt cong $z = f(x, y)$ tạo thành một đường cong một biến, và $f_x(x_0, y_0)$ chính là hệ số góc tiếp tuyến của đường giao tuyến đó theo hướng trục $Ox$ (tương tự $f_y(x_0, y_0)$ là độ dốc theo hướng trục $Oy$). Về mặt tính toán, mọi quy tắc đạo hàm một biến ở Môn CS-11 đều áp dụng nguyên vẹn khi xem các biến khác là hằng số.',
            'Khi lấy đạo hàm riêng tiếp lần thứ hai, từ một hàm $n$ biến ta thu được $n^2$ đạo hàm riêng cấp hai $\\frac{\\partial^2 f}{\\partial x_i \\partial x_j} = \\frac{\\partial}{\\partial x_i}\\left(\\frac{\\partial f}{\\partial x_j}\\right)$, gồm $n$ đạo hàm thuần $\\frac{\\partial^2 f}{\\partial x_i^2}$ và các **đạo hàm riêng hỗn hợp (mixed partial derivatives)**. **Định lý Clairaut (Schwarz’s Theorem)** bảo đảm rằng nếu các đạo hàm riêng cấp hai liên tục trên một lân cận mở quanh điểm đang xét (hàm lớp $C^2$), thì thứ tự lấy đạo hàm không làm thay đổi kết quả: $$\\frac{\\partial^2 f}{\\partial x_i \\partial x_j} = \\frac{\\partial^2 f}{\\partial x_j \\partial x_i}$$ Chính định lý này giải thích vì sao ma trận đạo hàm bậc hai Hessian $H(\\mathbf{x})$ của các hàm trơn luôn là một **ma trận thực đối xứng** ($H^T = H$), cho phép áp dụng trọn vẹn Định lý phổ của Môn CS-10!',
          ],
          sources: [
            {
              sourceId: 'mit-1802sc',
              locator: 'Unit 2, Session 26: Partial Derivatives; Session 30: Second Derivative Test',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mco-mfp-tangent-plane-total-differentiability',
          title: 'Mặt phẳng tiếp diện, Xấp xỉ tuyến tính nhiều biến và sự khác biệt giữa tồn tại đạo hàm riêng với Khả vi toàn phần',
          level: 'core',
          paragraphs: [
            'Ở hàm một biến, sự tồn tại của đạo hàm $f\'(x_0)$ đồng nghĩa với việc đồ thị có đường tiếp tuyến xấp xỉ tốt hàm quanh $x_0$ và hàm chắc chắn liên tục tại $x_0$. Sang hàm nhiều biến, đây là một điểm tinh tế rất dễ ngộ nhận: hai đạo hàm riêng $f_x(x_0, y_0)$ và $f_y(x_0, y_0)$ chỉ nhìn hàm dọc theo **đúng hai đường thẳng vuông góc** song song với trục $Ox$ và trục $Oy$, hoàn toàn mù thông tin về hành vi của hàm khi tiến về $(x_0, y_0)$ theo các hướng chéo như $y = x$. Do đó, một hàm hai biến có thể tồn tại cả $f_x(0, 0)$ lẫn $f_y(0, 0)$ nhưng lại bị đứt đoạn (không liên tục) ngay tại $(0, 0)$ (phản ví dụ kinh điển: $f(x, y) = \\frac{xy}{x^2 + y^2}$ với $f(0,0) = 0$ có $f_x(0,0) = f_y(0,0) = 0$, nhưng dọc theo đường chéo $y = x$ giá trị hàm luôn bằng $1/2 \\not\\to 0$).',
            'Để đảm bảo mặt cong thực sự phẳng cục bộ theo **mọi hướng** tiến về $\\mathbf{x}_0$, hàm $f: \\mathbb{R}^n \\to \\mathbb{R}$ được định nghĩa là **khả vi toàn phần (totally differentiable)** tại $\\mathbf{x}_0$ nếu tồn tại các đạo hàm riêng tại $\\mathbf{x}_0$ sao cho **xấp xỉ tuyến tính (linear approximation / tangent hyperplane)** $L(\\mathbf{x}) = f(\\mathbf{x}_0) + \\sum_{i=1}^n \\frac{\\partial f}{\\partial x_i}(\\mathbf{x}_0)(x_i - x_{0,i})$ có phần dư tiến về $0$ nhanh hơn khoảng cách Euclid $\\|\\mathbf{x} - \\mathbf{x}_0\\|$: $$\\lim_{\\mathbf{h} \\to \\mathbf{0}} \\frac{f(\\mathbf{x}_0 + \\mathbf{h}) - f(\\mathbf{x}_0) - \\sum_{i=1}^n \\frac{\\partial f}{\\partial x_i}(\\mathbf{x}_0) h_i}{\\|\\mathbf{h}\\|} = 0$$ Tiểu mục nêu rõ **điều kiện đủ thực hành (Sufficient Condition for Differentiability)**: nếu tất cả các đạo hàm riêng bậc nhất $\\frac{\\partial f}{\\partial x_i}$ tồn tại trên một lân cận mở quanh $\\mathbf{x}_0$ và **liên tục tại $\\mathbf{x}_0$** (hàm thuộc lớp $C^1$), thì $f$ chắc chắn khả vi toàn phần (và do đó liên tục) tại $\\mathbf{x}_0$.',
          ],
          sources: [
            {
              sourceId: 'mit-1802sc',
              locator: 'Unit 2, Session 27: Approximation Formula; Session 32: Total Differentials and the Chain Rule',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'mco-gradient-jacobian-chain-rule',
      title: 'Chương 2 — Đạo hàm theo hướng, Vector Gradient, Ma trận Jacobian và Quy tắc dây chuyền trên Đồ thị tính toán',
      overview: [
        'Chương này đóng gói các đạo hàm riêng thành hai đối tượng đại số tuyến tính mạnh mẽ — vector Gradient $\\nabla f$ (cho hàm vô hướng) và ma trận Jacobian $J_F$ (cho ánh xạ vector) — từ đó chứng minh hai tính chất hình học cốt lõi của Gradient (hướng tăng nhanh nhất và pháp tuyến mặt đồng mức) cùng quy tắc dây chuyền nhiều biến trên đồ thị tính toán làm cơ sở trực tiếp cho thuật toán Lan truyền ngược (Backpropagation).',
      ],
      sources: [
        {
          sourceId: 'mit-1802sc',
          locator: 'Unit 2, Part B: Chain Rule, Gradient and Directional Derivatives (Sessions 32–38)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'mco-gjcr-gradient-directional-derivative-geometry',
          title: 'Vector Gradient nabla f(x), Đạo hàm theo hướng đơn vị u và hai tính chất hình học cốt lõi của Gradient',
          level: 'core',
          paragraphs: [
            'Với một hàm vô hướng khả vi $f: \\mathbb{R}^n \\to \\mathbb{R}$, khi xếp tất cả $n$ đạo hàm riêng bậc nhất thành một vector cột trong không gian đầu vào $\\mathbb{R}^n$, ta thu được **vector Gradient**: $$\\nabla f(\\mathbf{x}) = \\begin{bmatrix} \\dfrac{\\partial f}{\\partial x_1}(\\mathbf{x}) & \\dfrac{\\partial f}{\\partial x_2}(\\mathbf{x}) & \\cdots & \\dfrac{\\partial f}{\\partial x_n}(\\mathbf{x}) \\end{bmatrix}^T \\in \\mathbb{R}^n$$ Nhờ vector Gradient, công thức xấp xỉ tuyến tính viết gọn thành tích vô hướng $f(\\mathbf{x} + \\mathbf{h}) \\approx f(\\mathbf{x}) + \\nabla f(\\mathbf{x}) \\cdot \\mathbf{h}$. Từ đây, nếu ta đứng tại $\\mathbf{x}$ và bước đi theo hướng của một **vector đơn vị $\\mathbf{u}$ bất kỳ** (với $\\|\\mathbf{u}\\| = 1$, đặt $\\mathbf{h} = s\\mathbf{u}$), tốc độ thay đổi tức thời của hàm $f$ dọc theo hướng $\\mathbf{u}$ được gọi là **Đạo hàm theo hướng (Directional Derivative)** $D_{\\mathbf{u}} f(\\mathbf{x}) = \\left.\\frac{d}{ds} f(\\mathbf{x} + s\\mathbf{u})\\right|_{s=0}$ và bằng đúng tích vô hướng: $$D_{\\mathbf{u}} f(\\mathbf{x}) = \\nabla f(\\mathbf{x}) \\cdot \\mathbf{u} = \\|\\nabla f(\\mathbf{x})\\| \\, \\|\\mathbf{u}\\| \\cos\\theta = \\|\\nabla f(\\mathbf{x})\\| \\cos\\theta$$ (Lưu ý bắt buộc: vector chỉ hướng $\\mathbf{u}$ phải được chuẩn hóa về độ dài $\\|\\mathbf{u}\\| = 1$ trước khi nhân vô hướng với $\\nabla f$).',
            'Công thức $D_{\\mathbf{u}} f(\\mathbf{x}) = \\|\\nabla f(\\mathbf{x})\\| \\cos\\theta$ (khi $\\nabla f(\\mathbf{x}) \\neq \\mathbf{0}$) lập tức chứng minh **hai định lý hình học quan trọng nhất của Giải tích nhiều biến**: (1) **Hướng tăng nhanh nhất và giảm nhanh nhất**: vì $\\cos\\theta \\in [-1, 1]$ đạt cực đại bằng $+1$ khi $\\theta = 0$ (tức $\\mathbf{u}$ cùng hướng với $\\nabla f$) và đạt cực tiểu bằng $-1$ khi $\\theta = \\pi$ (tức $\\mathbf{u}$ ngược hướng với $\\nabla f$), **vector Gradient $\\nabla f(\\mathbf{x})$ luôn chỉ đúng hướng làm hàm $f$ tăng nhanh nhất** với tốc độ tăng cực đại bằng $\\|\\nabla f(\\mathbf{x})\\|$; ngược lại, **vector âm Gradient $-\\nabla f(\\mathbf{x})$ chỉ đúng hướng làm hàm $f$ giảm nhanh nhất (steepest descent)**; và (2) **Tính vuông góc với đường/mặt đồng mức**: nếu di chuyển tiếp tuyến dọc theo đường/mặt đồng mức $f(\\mathbf{x}(t)) = c$, giá trị hàm không đổi nên đạo hàm theo hướng tiếp tuyến bằng $0$ ($\\cos\\theta = 0 \\implies \\theta = 90^\\circ$); do đó **tại mọi điểm, vector Gradient $\\nabla f(\\mathbf{x}_0)$ luôn vuông góc (là vector pháp tuyến) với đường đồng mức / mặt đồng mức đi qua điểm đó**!',
          ],
          sources: [
            {
              sourceId: 'mit-1802sc',
              locator: 'Unit 2, Sessions 35–38: Gradient Definition, Perpendicularity to Level Curves, Proof, Example, and Directional Derivatives',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mco-gjcr-jacobian-matrix-multivariable-chain-rule',
          title: 'Ma trận Jacobian J_F của ánh xạ vector F: R^n -> R^m và Quy tắc dây chuyền nhiều biến dưới dạng nhân ma trận Jacobian',
          level: 'core',
          paragraphs: [
            'Mở rộng từ hàm vô hướng $f: \\mathbb{R}^n \\to \\mathbb{R}$ sang một **ánh xạ nhận vector và trả về vector** $F: \\mathbb{R}^n \\to \\mathbb{R}^m$ gồm $m$ hàm thành phần $F(\\mathbf{x}) = (f_1(\\mathbf{x}), f_2(\\mathbf{x}), \\dots, f_m(\\mathbf{x}))^T$, đạo hàm bậc nhất toàn phần của $F$ tại $\\mathbf{x}$ là một ma trận kích thước $m \\times n$ gọi là **Ma trận Jacobian (Jacobian Matrix)** $J_F(\\mathbf{x}) = \\frac{\\partial(f_1, \\dots, f_m)}{\\partial(x_1, \\dots, x_n)}$, trong đó phần tử ở hàng $i$, cột $j$ là $\\frac{\\partial f_i}{\\partial x_j}(\\mathbf{x})$ (hay nói cách khác: **hàng thứ $i$ của ma trận Jacobian chính là chuyển vị của vector Gradient của hàm thành phần thứ $i$, $(\\nabla f_i)^T$**): $$J_F(\\mathbf{x}) = \\begin{bmatrix} \\dfrac{\\partial f_1}{\\partial x_1} & \\cdots & \\dfrac{\\partial f_1}{\\partial x_n} \\\\[6pt] \\vdots & \\ddots & \\vdots \\\\[6pt] \\dfrac{\\partial f_m}{\\partial x_1} & \\cdots & \\dfrac{\\partial f_m}{\\partial x_n} \\end{bmatrix} \\in \\mathbb{R}^{m \\times n}$$ Ý nghĩa cốt lõi nối trực tiếp về Chương 3 của Đại số tuyến tính (`CS-10`) là: tại lân cận điểm $\\mathbf{x}_0$, ánh xạ phi tuyến $F(\\mathbf{x}_0 + \\Delta\\mathbf{x}) \\approx F(\\mathbf{x}_0) + J_F(\\mathbf{x}_0)\\,\\Delta\\mathbf{x}$ được xấp xỉ bởi một **ánh xạ tuyến tính có ma trận chính là $J_F(\\mathbf{x}_0)$**.',
            'Nhờ ngôn ngữ ma trận Jacobian, **Quy tắc dây chuyền nhiều biến (Multivariable Chain Rule)** cho hàm hợp của hai ánh xạ khả vi $\\mathbf{x} \\in \\mathbb{R}^n \\xrightarrow{G} \\mathbf{u} = G(\\mathbf{x}) \\in \\mathbb{R}^k \\xrightarrow{F} \\mathbf{y} = F(G(\\mathbf{x})) \\in \\mathbb{R}^m$ có dạng hoàn toàn giống hệt một biến — đạo hàm của hàm hợp bằng **tích ma trận của các ma trận Jacobian**: $$J_{F \\circ G}(\\mathbf{x}) = J_F(G(\\mathbf{x})) \\cdot J_G(\\mathbf{x}) \\in \\mathbb{R}^{m \\times n}$$ Viết cụ thể cho từng thành phần đơn lẻ (khi một hàm vô hướng $z = f(u_1, \\dots, u_k)$ phụ thuộc vào $k$ biến trung gian $u_r(x_1, \\dots, x_n)$), đạo hàm riêng của $z$ theo một biến đầu vào $x_j$ là **tổng các tích dọc theo tất cả $k$ đường truyền trung gian nối từ $x_j$ tới $z$**: $$\\frac{\\partial z}{\\partial x_j} = \\sum_{r=1}^k \\frac{\\partial z}{\\partial u_r} \\cdot \\frac{\\partial u_r}{\\partial x_j}$$',
          ],
          sources: [
            {
              sourceId: 'mit-1802sc',
              locator: 'Unit 2, Sessions 32–34: Total Differentials and the Chain Rule, Examples, and the Chain Rule with More Variables; Unit 3, Session 53: Change of Variables',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mco-gjcr-computational-graphs-backprop-foundation',
          title: 'Quy tắc dây chuyền trên Đồ thị tính toán (Computational Graph) và cơ sở toán học của Lan truyền ngược (Reverse-Mode Autodiff)',
          level: 'core',
          paragraphs: [
            'Trong các hệ thống tính toán hiện đại và mạng nơ-ron sâu, một biểu thức toán học phức tạp tính hàm mất mát vô hướng $L(\\boldsymbol{\\theta}) \\in \\mathbb{R}$ từ hàng triệu tham số $\\boldsymbol{\\theta} \\in \\mathbb{R}^n$ được biểu diễn dưới dạng một **Đồ thị tính toán có hướng không chu trình (Computational Graph — DAG)**, trong đó mỗi nút là một biến trung gian $v_i$ thực hiện một phép toán cơ sở trên các nút cha đi vào nó. Tại mỗi nút trung gian $u$, nếu đầu ra cuối cùng $L$ phụ thuộc vào $u$ thông qua một tập các nút con trực tiếp $v_1, v_2, \\dots, v_m$ (tức có các cạnh có hướng $u \\to v_r$), thì quy tắc dây chuyền nhiều biến khẳng định đạo hàm toàn phần (độ nhạy $\\bar{u} = \\frac{\\partial L}{\\partial u}$) được gom về từ các nút con theo công thức: $$\\frac{\\partial L}{\\partial u} = \\sum_{r=1}^m \\frac{\\partial L}{\\partial v_r} \\cdot \\frac{\\partial v_r}{\\partial u}$$',
            'Tiểu mục này giải thích vì sao cấu trúc nhân ma trận Jacobian dẫn tới sự khác biệt hiệu năng khổng lồ giữa hai chiều tính đạo hàm trên đồ thị tính toán khi có $n \\gg 1$ đầu vào và chỉ có $m = 1$ đầu ra vô hướng $L$: nếu nhân các ma trận Jacobian từ trái sang phải hay từ phải sang trái? Do phép nhân ma trận có tính kết hợp, nếu tính từ đầu vào đi xuôi lên (**Forward-mode AD**), ta phải đẩy đạo hàm theo từng biến đầu vào một nên tốn $n$ lượt duyệt đồ thị; ngược lại, nếu bắt đầu từ nút đầu ra vô hướng $\\frac{\\partial L}{\\partial L} = 1$ và nhân ngược từ trái sang phải dạng **vector-hàng nhân ma trận Jacobian ($v^T J$)** đi lùi về đầu vào theo thứ tự topo ngược (**Reverse-mode Automatic Differentiation / Backpropagation**), ta tính được **đồng thời toàn bộ vector Gradient $\\nabla_{\\boldsymbol{\\theta}} L \\in \\mathbb{R}^n$ chỉ trong đúng 1 lượt truyền xuôi và 1 lượt truyền ngược**! Đây chính là cầu nối toán học trực tiếp giữa Giải tích nhiều biến và Môn Học sâu (`CS-37`).',
          ],
          sources: [
            {
              sourceId: 'mit-1802sc',
              locator: 'Unit 2, Sessions 32–34: Total Differentials and the Chain Rule; the Chain Rule with More Variables (mathematical foundation)',
              relationship: 'primary',
            },
            {
              sourceId: 'd2l-ai',
              locator: 'Chapter 2 (§2.4 Calculus, Gradients, and Chain Rule) & Chapter 5 (§5.3 Forward and Backward Propagation on Computational Graphs)',
              relationship: 'supplementary',
            },
          ],
        },
      ],
    },
    {
      id: 'mco-analytic-numerical-optimization',
      title: 'Chương 3 — Cực trị tự do, Ma trận Hessian, Nhân tử Lagrange và Thuật toán Hạ Gradient (Gradient Descent)',
      overview: [
        'Chương này tổng hợp toàn bộ kiến thức về Gradient, khai triển Taylor bậc hai và ma trận đối xứng xác định dương (`CS-10`) để giải quyết bài toán tối ưu hóa nhiều biến: phân loại cực tiểu, cực đại và điểm yên ngựa qua ma trận Hessian, giải bài toán tối ưu có ràng buộc bằng Nhân tử Lagrange, và phân tích thuật toán lặp Hạ Gradient (Gradient Descent).',
      ],
      sources: [
        {
          sourceId: 'mit-1802sc',
          locator: 'Unit 2, Part A, Sessions 28–31: Optimization Problems, Least Squares, Second Derivative Test, and Example; Part C, Sessions 39–41: Lagrange Multipliers',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'mco-ano-hessian-taylor-stationary-saddle',
          title: 'Ma trận Hessian H(x), khai triển Taylor bậc hai nhiều biến và phân loại Điểm dừng (Cực tiểu, Cực đại, Điểm yên ngựa)',
          level: 'core',
          paragraphs: [
            'Với hàm khả vi hai lần liên tục $f: \\mathbb{R}^n \\to \\mathbb{R}$, gom tất cả $n^2$ đạo hàm riêng cấp hai thành một ma trận vuông đối xứng $n \\times n$ cho ta **Ma trận Hessian**: $$H(\\mathbf{x}) = \\nabla^2 f(\\mathbf{x}) = \\left[ \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}(\\mathbf{x}) \\right]_{i,j=1}^n \\in \\mathbb{R}^{n \\times n}$$ Sử dụng vector Gradient $\\nabla f(\\mathbf{x}_0)$ cho bậc nhất và dạng toàn phương của ma trận Hessian cho bậc hai, **Khai triển Taylor bậc hai nhiều biến** quanh $\\mathbf{x}_0$ với bước dịch chuyển $\\mathbf{h} = \\mathbf{x} - \\mathbf{x}_0$ có dạng ma trận cực kỳ cô đọng: $$f(\\mathbf{x}_0 + \\mathbf{h}) = f(\\mathbf{x}_0) + \\nabla f(\\mathbf{x}_0)^T \\mathbf{h} + \\frac{1}{2} \\mathbf{h}^T H(\\mathbf{x}_0) \\mathbf{h} + o(\\|\\mathbf{h}\\|^2)$$',
            'Tại một **điểm dừng (stationary / critical point)** $\\mathbf{x}^*$ nơi $\\nabla f(\\mathbf{x}^*) = \\mathbf{0}$ (mặt phẳng tiếp diện nằm ngang, mọi đạo hàm riêng bậc nhất đều bằng $0$), số hạng bậc nhất biến mất và sự thay đổi của hàm $f(\\mathbf{x}^* + \\mathbf{h}) - f(\\mathbf{x}^*) \\approx \\frac{1}{2}\\mathbf{h}^T H(\\mathbf{x}^*) \\mathbf{h}$ hoàn toàn được quyết định bởi dấu của **dạng toàn phương của ma trận đối xứng $H(\\mathbf{x}^*)$** đã học ở Chương 6 của Môn CS-10: (1) Nếu $H(\\mathbf{x}^*)$ **xác định dương (Positive Definite — mọi trị riêng $\\lambda_i > 0$)**, thì $\\mathbf{h}^T H \\mathbf{h} > 0$ theo mọi hướng $\\mathbf{h} \\neq \\mathbf{0}$, nên $\\mathbf{x}^*$ là **điểm cực tiểu địa phương chặt (strict local minimum)** (trong 2 biến: $D = f_{xx}f_{yy} - f_{xy}^2 > 0$ và $f_{xx} > 0$); (2) Nếu $H(\\mathbf{x}^*)$ **xác định âm (Negative Definite — mọi trị riêng $\\lambda_i < 0$)**, $\\mathbf{x}^*$ là **điểm cực đại địa phương chặt**; (3) Nếu $H(\\mathbf{x}^*)$ có **cả trị riêng dương lẫn trị riêng âm (Indefinite)**, hàm cong lên theo phương vector riêng này nhưng lại cong xuống theo phương vector riêng khác, tạo thành **Điểm yên ngựa (Saddle Point)** (trong 2 biến: $D = f_{xx}f_{yy} - f_{xy}^2 < 0$, điển hình là $f(x,y) = x^2 - y^2$ tại $(0,0)$); và (4) Nếu $H(\\mathbf{x}^*)$ có trị riêng bằng $0$ (suy biến), bậc hai chưa đủ kết luận. Đặc biệt, nếu $H(\\mathbf{x})$ nửa xác định dương ($H(\\mathbf{x}) \\succeq 0$) trên toàn bộ một miền lồi, thì $f$ là **hàm lồi nhiều biến** và mọi điểm dừng $\\nabla f(\\mathbf{x}^*) = \\mathbf{0}$ đều là **cực tiểu toàn cục**.',
          ],
          sources: [
            {
              sourceId: 'mit-1802sc',
              locator: 'Unit 2, Session 30: Second Derivative Test (local extrema and saddle points); Session 31: Example',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mco-ano-lagrange-multipliers-constrained',
          title: 'Tối ưu hóa có ràng buộc đẳng thức và Phương pháp Nhân tử Lagrange (nabla f = lambda nabla g)',
          level: 'core',
          paragraphs: [
            'Trong nhiều bài toán thực tế, ta không tìm cực trị của $f(\\mathbf{x})$ trên toàn không gian tự do mà phải tuân theo một (hoặc nhiều) điều kiện ràng buộc đẳng thức $g(\\mathbf{x}) = c$ (ví dụ: cực đại hóa entropy xác suất với ràng buộc tổng xác suất $\\sum p_i = 1$, hoặc trong PCA ở Môn CS-10/CS-36 tìm phương $\\mathbf{u}$ cực đại hóa phương sai $\\mathbf{u}^T S \\mathbf{u}$ dưới ràng buộc độ dài đơn vị $g(\\mathbf{u}) = \\mathbf{u}^T \\mathbf{u} = 1$). Điểm cực trị có ràng buộc thường **không phải** là điểm có $\\nabla f = \\mathbf{0}$.',
            'Cơ chế hình học của **Phương pháp Nhân tử Lagrange (Method of Lagrange Multipliers)** dựa trực tiếp vào tính vuông góc của Gradient với mặt đồng mức: khi điểm $\\mathbf{x}$ bị buộc phải di chuyển trên mặt ràng buộc $g(\\mathbf{x}) = c$, nếu tại $\\mathbf{x}$ hình chiếu của $\\nabla f(\\mathbf{x})$ dọc theo mặt tiếp diện của mặt $g = c$ vẫn còn khác $0$, ta vẫn có thể trượt dọc theo mặt ràng buộc theo hướng đó để làm tăng (hoặc giảm) thêm giá trị của $f$. Do đó, tại điểm đạt cực trị trên mặt ràng buộc $\\mathbf{x}^*$ (với điều kiện chính quy $\\nabla g(\\mathbf{x}^*) \\neq \\mathbf{0}$), mọi hướng tiếp tuyến với mặt $g = c$ đều phải vuông góc với $\\nabla f(\\mathbf{x}^*)$, nghĩa là hai vector pháp tuyến $\\nabla f(\\mathbf{x}^*)$ và $\\nabla g(\\mathbf{x}^*)$ bắt buộc phải **song song (cùng phương) với nhau**: $$\\nabla f(\\mathbf{x}^*) = \\lambda \\, \\nabla g(\\mathbf{x}^*), \\qquad g(\\mathbf{x}^*) = c$$ Số vô hướng $\\lambda$ được gọi là **nhân tử Lagrange** (tương đương việc tìm điểm dừng của hàm Lagrange $\\mathcal{L}(\\mathbf{x}, \\lambda) = f(\\mathbf{x}) - \\lambda (g(\\mathbf{x}) - c)$). Ví dụ kinh điển: cực đại hóa $f(\\mathbf{u}) = \\mathbf{u}^T S \\mathbf{u}$ với $g(\\mathbf{u}) = \\mathbf{u}^T \\mathbf{u} = 1$ có $\\nabla f = 2S\\mathbf{u}$ và $\\nabla g = 2\\mathbf{u}$, nên điều kiện Lagrange $2S\\mathbf{u} = \\lambda (2\\mathbf{u}) \\iff S\\mathbf{u} = \\lambda \\mathbf{u}$ xác định các hướng dừng trên mặt cầu đơn vị là **vector riêng của ma trận đối xứng $S$**. Tại một vector riêng đơn vị, giá trị $f(\\mathbf{u})$ bằng trị riêng tương ứng; vì vậy để chọn cực đại toàn cục ta lấy vector riêng ứng với trị riêng lớn nhất $\\lambda_{\\max}$, còn cực tiểu toàn cục ứng với trị riêng nhỏ nhất.',
          ],
          sources: [
            {
              sourceId: 'mit-1802sc',
              locator: 'Unit 2, Part C, Sessions 39–41: Constrained Optimization and Lagrange Multipliers',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mco-ano-gradient-descent-step-size-conditioning',
          title: 'Đối chiếu cực trị giải tích với Thuật toán số Hạ Gradient (Gradient Descent), hệ số học (Learning Rate) và số điều kiện',
          level: 'core',
          paragraphs: [
            'Khi hàm mục tiêu $f(\\mathbf{x})$ là hàm bậc hai đơn giản (như bình phương tối thiểu $f(\\mathbf{x}) = \\|A\\mathbf{x} - \\mathbf{b}\\|^2$ có $\\nabla f(\\mathbf{x}) = 2A^T(A\\mathbf{x} - \\mathbf{b}) = \\mathbf{0}$), phương trình $\\nabla f(\\mathbf{x}) = \\mathbf{0}$ là hệ tuyến tính nên giải được nghiệm đóng giải tích. Nhưng với hầu hết các mô hình phi tuyến trong học máy (như hồi quy Logistic hay mạng nơ-ron), hệ $\\nabla f(\\mathbf{x}) = \\mathbf{0}$ là hệ phương trình siêu việt không có công thức nghiệm đóng, hoặc số chiều $n$ lên tới hàng triệu khiến việc lưu và nghịch đảo ma trận Hessian $n \\times n$ ($O(n^2)$ bộ nhớ, $O(n^3)$ tính toán trong phương pháp Newton $\\mathbf{x}_{k+1} = \\mathbf{x}_k - H(\\mathbf{x}_k)^{-1}\\nabla f(\\mathbf{x}_k)$) trở nên bất khả thi. Khi đó, ta sử dụng thuật toán tối ưu lặp bậc nhất **Hạ Gradient (Gradient Descent)**: xuất phát từ $\\mathbf{x}_0$, ở mỗi bước đi ngược hướng Gradient một bước nhỏ tỉ lệ với **tốc độ học / cỡ bước (step size / learning rate) $\\eta > 0$**: $$\\mathbf{x}_{k+1} = \\mathbf{x}_k - \\eta \\, \\nabla f(\\mathbf{x}_k)$$',
            'Bằng cách xét hàm bậc hai lồi chặt $f(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T A \\mathbf{x}$ (với ma trận Hessian $A$ đối xứng xác định dương có các trị riêng $0 < \\lambda_{\\min} \\le \\dots \\le \\lambda_{\\max}$), tiểu mục phân tích rõ cơ chế hội tụ và các hiện tượng thực tế của Gradient Descent: trong hệ tọa độ vector riêng của $A$, mỗi thành phần thứ $i$ thu hẹp theo cấp số nhân $z_{k+1, i} = (1 - \\eta \\lambda_i) z_{k, i}$. Do đó, thuật toán **chỉ hội tụ khi $|1 - \\eta \\lambda_{\\max}| < 1 \\iff 0 < \\eta < \\frac{2}{\\lambda_{\\max}}$**: nếu chọn $\\eta$ quá nhỏ, thuật toán bò rất chậm; nếu chọn $\\eta > \\frac{2}{\\lambda_{\\max}}$, bước nhảy vọt qua đáy thung lũng làm giá trị hàm dao động ngày càng lớn và **bùng nổ phân kỳ (divergence / exploding loss)**. Hơn nữa, khi tỉ số giữa độ cong lớn nhất và độ cong nhỏ nhất (**số điều kiện / condition number $\\kappa = \\frac{\\lambda_{\\max}}{\\lambda_{\\min}} \\gg 1$**) rất lớn (thung lũng hẹp và dốc đứng ở hai bên sườn nhưng lại gần như phẳng dọc theo đáy), cỡ bước $\\eta$ bị chặn nhỏ bởi $2/\\lambda_{\\max}$ khiến quỹ đạo Gradient Descent dội qua lại hình chữ chi (zig-zag) giữa hai vách hẹp và tiến về cực tiểu rất chậm theo hướng $\\lambda_{\\min}$ — giải thích lý do thực tế phải chuẩn hóa đặc trưng (feature scaling) và dùng các biến thể có quán tính (Momentum / Adam).',
          ],
          sources: [
            {
              sourceId: 'mit-1802sc',
              locator: 'Unit 2, Session 29: Least Squares; Sessions 35–38: Gradient and Directional Derivatives (directional foundation; algorithmic analysis is supported by Dive into Deep Learning)',
              relationship: 'primary',
            },
            {
              sourceId: 'd2l-ai',
              locator: 'Chapter 12: §12.1 Optimization and Deep Learning (Local Minima, Saddle Points) & §12.3 Gradient Descent and Conditioning',
              relationship: 'supplementary',
            },
          ],
        },
      ],
    },
    {
      id: 'mco-multiple-integrals',
      title: 'Chương 4 — Tích phân kép, Tích phân bội, Định lý Fubini và Công thức đổi biến qua Định thức Jacobian',
      overview: [
        'Chương cuối mở rộng tích phân Riemann sang miền hai chiều và nhiều chiều thông qua Định lý Fubini tính tích phân lặp, kỹ thuật dựng hình để đổi thứ tự lấy tích phân và công thức đổi biến tổng quát nhân với trị tuyệt đối định thức Jacobian $|\\det J|$ (tọa độ cực/cầu, chuẩn hóa tích phân Gaussian) — công cụ thiết yếu để tính xác suất đồng thời, phân phối biên và kỳ vọng của vector ngẫu nhiên liên tục ở Môn CS-13.',
      ],
      sources: [
        {
          sourceId: 'mit-1802sc',
          locator: 'Unit 3, Part A: Double Integrals (Sessions 47–55); Unit 4, Part A: Triple Integrals (Sessions 74–78); vector calculus extensions in Unit 3 Parts B–C and Unit 4 Parts B–C',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'mco-mi-double-triple-integrals-fubini',
          title: 'Tích phân kép và tích phân bội trên miền phẳng/không gian, Định lý Fubini tính tích phân lặp và kỹ thuật đổi thứ tự lấy tích phân',
          level: 'core',
          paragraphs: [
            'Tương tự như tích phân một biến chia đoạn $[a, b]$ thành các đoạn nhỏ $\\Delta x$, **tích phân kép (double integral)** $\\iint_R f(x, y)\\,dA$ trên một miền phẳng $R \\subseteq \\mathbb{R}^2$ chia miền $R$ thành lưới các ô chữ nhật diện tích $\\Delta A = \\Delta x \\, \\Delta y$ và lấy giới hạn của tổng Riemann hai chiều $\\sum f(x_i^*, y_j^*)\\,\\Delta A$ khi lưới chia mịn dần (biểu diễn thể tích có dấu bên dưới mặt $z = f(x, y)$ hoặc tổng xác suất khi $f(x, y) \\ge 0$ là hàm mật độ xác suất đồng thời). Theo **Định lý Fubini**, khi $f$ liên tục trên hình chữ nhật $[a, b] \\times [c, d]$ (hoặc khi tích phân của $|f|$ hữu hạn), tích phân kép có thể được tính bằng hai lần lấy tích phân một biến liên tiếp (**tích phân lặp / iterated integral**) theo bất kỳ thứ tự nào: $$\\iint_{[a,b]\\times[c,d]} f(x, y)\\,dA = \\int_a^b \\left( \\int_c^d f(x, y)\\,dy \\right) dx = \\int_c^d \\left( \\int_a^b f(x, y)\\,dx \\right) dy$$ (trong đó khi tính tích phân bên trong theo $y$, biến $x$ được giữ cố định như hằng số).',
            'Đối với các miền phẳng $R$ không phải hình chữ nhật (như miền tam giác $0 \\le x \\le y < \\infty$ khi tính xác suất biến ngẫu nhiên $X \\le Y$ ở Môn CS-13), tiểu mục hướng dẫn quy trình vẽ hình miền lấy tích phân để xác định **cận biến thiên của biến trong phụ thuộc vào biến ngoài**: nếu cắt theo các dải thẳng đứng (cố định $x \\in [a, b]$ ở ngoài), cận của $y$ ở tích phân trong sẽ chạy từ đường biên dưới $y = g_1(x)$ đến đường biên trên $y = g_2(x)$; ngược lại, nếu cắt theo dải nằm ngang (cố định $y \\in [c, d]$ ở ngoài), cận của $x$ sẽ chạy từ biên trái $x = h_1(y)$ sang biên phải $x = h_2(y)$. Kỹ thuật **đổi thứ tự lấy tích phân (`dx dy` $\\leftrightarrow$ `dy dx`)** bằng cách dựng lại miền hình học $R$ đặc biệt quan trọng khi nguyên hàm bên trong không tính được theo thứ tự ban đầu (như $\\int_0^1 \\int_x^1 e^{y^2}\\,dy\\,dx$ không có nguyên hàm sơ cấp theo $y$, nhưng đổi thứ tự thành $\\int_0^1 \\int_0^y e^{y^2}\\,dx\\,dy = \\int_0^1 y e^{y^2}\\,dy$ lại tính được ngay lập tức!).',
          ],
          sources: [
            {
              sourceId: 'mit-1802sc',
              locator: 'Unit 3, Sessions 47–49: Definition, Examples, and Exchanging the Order of Double Integration; Unit 4, Sessions 74–77: Triple Integrals in Rectangular, Cylindrical, and Spherical Coordinates',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mco-mi-jacobian-change-of-variables-gaussian',
          title: 'Công thức đổi biến trong tích phân bội với trị tuyệt đối Định thức Jacobian |det J|, tọa độ cực và tích phân chuẩn Gaussian',
          level: 'core',
          paragraphs: [
            'Khi miền lấy tích phân hoặc biểu thức dưới dấu tích phân có tính đối xứng tròn/elip hoặc phụ thuộc vào tổ hợp biến $(u, v)$, ta thực hiện phép đổi biến khả nghịch một-một $(x, y) = T(u, v) = (x(u, v), y(u, v))$ biến miền $R_{uv}$ sang miền $R_{xy}$. Một ô chữ nhật vô cùng bé diện tích $\\Delta u \\, \\Delta v$ trong mặt phẳng $(u, v)$ khi qua ánh xạ $T$ sẽ bị biến thành một hình bình hành cong trong mặt phẳng $(x, y)$ được căng bởi hai vector tiếp tuyến $\\begin{bmatrix} x_u \\\\ y_u \\end{bmatrix}\\Delta u$ và $\\begin{bmatrix} x_v \\\\ y_v \\end{bmatrix}\\Delta v$. Theo đúng ý nghĩa hình học của định thức ở Chương 5 Môn CS-10, diện tích của hình bình hành đó bằng trị tuyệt đối định thức của ma trận Jacobian nhân với $\\Delta u \\, \\Delta v$! Từ đó ta có **Công thức đổi biến tổng quát trong tích phân bội**: $$\\iint_{R_{xy}} f(x, y)\\,dx\\,dy = \\iint_{R_{uv}} f(x(u, v), y(u, v)) \\, \\left| \\det J_T(u, v) \\right| \\, du\\,dv$$ trong đó $\\det J_T(u, v) = \\frac{\\partial(x, y)}{\\partial(u, v)} = \\det \\begin{bmatrix} x_u & x_v \\\\ y_u & y_v \\end{bmatrix}$ là **định thức Jacobian** (tổng quát hoàn toàn cho $n$ biến: $d\\mathbf{x} = |\\det J_T(\\mathbf{u})|\\,d\\mathbf{u}$).',
            'Áp dụng công thức này cho phép đổi sang **tọa độ cực (polar coordinates)** $x = r\\cos\\theta, y = r\\sin\\theta$ cho ta định thức Jacobian $\\det \\begin{bmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{bmatrix} = r(\\cos^2\\theta + \\sin^2\\theta) = r$, giải thích vì sao phần tử diện tích trong tọa độ cực bắt buộc có thêm thừa số $r$: **$dx\\,dy = r\\,dr\\,d\\theta$** (và trong tọa độ cầu 3D là $\\rho^2 \\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$). Nhờ đổi biến sang tọa độ cực, tiểu mục trình bày phép chứng minh kinh điển của Poisson cho **Tích phân Gaussian chuẩn** (nền tảng của phân phối chuẩn trong Xác suất `CS-13`): đặt $I = \\int_{-\\infty}^\\infty e^{-x^2/2}\\,dx$, bình phương thành tích phân kép trên toàn mặt phẳng $\\mathbb{R}^2$: $$I^2 = \\left(\\int_{-\\infty}^\\infty e^{-x^2/2}\\,dx\\right)\\left(\\int_{-\\infty}^\\infty e^{-y^2/2}\\,dy\\right) = \\iint_{\\mathbb{R}^2} e^{-(x^2+y^2)/2}\\,dx\\,dy = \\int_0^{2\\pi} \\int_0^\\infty e^{-r^2/2} \\, r\\,dr\\,d\\theta = 2\\pi \\Big[-e^{-r^2/2}\\Big]_0^\\infty = 2\\pi \\implies \\int_{-\\infty}^\\infty e^{-x^2/2}\\,dx = \\sqrt{2\\pi}$$',
          ],
          sources: [
            {
              sourceId: 'mit-1802sc',
              locator: 'Unit 3, Session 50: Double Integrals in Polar Coordinates; Sessions 53–55: Change of Variables, Polar Coordinates, and Example; Unit 4, Sessions 76–77: Spherical Coordinates',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'mco-mi-vector-fields-divergence-stokes',
          title: 'Giải tích trường vector cơ sở: Tích phân đường, trường bảo toàn (Gradient Field), toán tử Divergence và Curl (Mở rộng)',
          level: 'extension',
          paragraphs: [
            'Tiểu mục mở rộng này giới thiệu ngôn ngữ giải tích trường vector dành cho người học đi sâu vào mô phỏng vật lý, thủy động lực học, đồ họa máy tính 3D và phương trình đạo hàm riêng: một **trường vector (vector field)** $\\mathbf{F}(\\mathbf{x})$ gắn mỗi điểm trong không gian với một vector (như trường vận tốc dòng chảy hay trường lực). Khi tích phân thành phần tiếp tuyến của $\\mathbf{F}$ dọc theo một đường cong định hướng $C$, ta được **tích phân đường (line integral)** $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$. Nếu trường vector $\\mathbf{F}$ chính là Gradient của một hàm thế năng vô hướng ($\\mathbf{F} = \\nabla f$, gọi là **trường bảo toàn / conservative field**), thì Định lý cơ bản cho tích phân đường khẳng định $\\int_C \\nabla f \\cdot d\\mathbf{r} = f(\\mathbf{B}) - f(\\mathbf{A})$ chỉ phụ thuộc vào điểm đầu $\\mathbf{A}$ và điểm cuối $\\mathbf{B}$ mà không phụ thuộc vào đường đi (và tích phân trên mọi đường cong kín đều bằng $0$).',
            'Cuối cùng, tiểu mục tóm lược ý nghĩa của hai toán tử vi phân trường vector và ba định lý tích phân biên kinh điển (đều là tổng quát hóa nhiều chiều của Định lý cơ bản của giải tích FTC — tích phân của đạo hàm bên trong miền bằng tích phân của hàm trên biên của miền): **Độ phân kỳ (Divergence)** $\\operatorname{div} \\mathbf{F} = \\nabla \\cdot \\mathbf{F} = \\sum_{i=1}^n \\frac{\\partial F_i}{\\partial x_i}$ đo mật độ nguồn phát/thu thông lượng tại một điểm (gắn với Định lý thông lượng Green–Gauss / Divergence Theorem $\\iiint_E (\\nabla \\cdot \\mathbf{F})\\,dV = \\iint_{\\partial E} \\mathbf{F}\\cdot \\mathbf{n}\\,dS$), và **Độ xoáy (Curl)** $\\operatorname{curl} \\mathbf{F} = \\nabla \\times \\mathbf{F}$ đo xu hướng quay cục bộ quanh một trục (gắn với Định lý Green trên mặt phẳng và Định lý Stokes trên mặt cong $\\iint_S (\\nabla \\times \\mathbf{F})\\cdot \\mathbf{n}\\,dS = \\oint_{\\partial S} \\mathbf{F}\\cdot d\\mathbf{r}$).',
          ],
          sources: [
            {
              sourceId: 'mit-1802sc',
              locator: 'Unit 3, Part B (Vector Calculus in 2D: Line Integrals, Conservative Fields, Green’s Theorem) & Unit 4 (Vector Calculus in 3D: Divergence Theorem and Stokes’ Theorem)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
  ],
};
