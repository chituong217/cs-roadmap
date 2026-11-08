export const COURSE_PROBABILITY = {
  id: 'probability',
  code: 'CS-13',
  title: 'Xác suất',
  blockId: 'block-2',
  level: 'core',
  prerequisites: [
    {
      courseId: 'discrete-math',
      type: 'required',
      reason: 'Cần nắm vững đại số tập hợp, nguyên lý đếm tổ hợp, công thức nhị thức, tổng hữu hạn và chuỗi từ Môn CS-09.',
    },
    {
      courseId: 'single-variable-calculus',
      type: 'required',
      reason: 'Cần nắm vững đạo hàm, Định lý cơ bản của giải tích (FTC), tích phân từng phần, tích phân suy rộng và chuỗi lũy thừa từ Môn CS-11.',
    },
    {
      courseId: 'multivariable-calculus-optimization',
      type: 'co_requisite',
      reason: 'Cần tích phân kép (Định lý Fubini) và đổi biến khi học phân phối xác suất đồng thời của hai biến ngẫu nhiên liên tục ở Chương 4.',
    },
  ],
  overview: [
    'Môn học xây dựng ngôn ngữ toán học chặt chẽ để mô hình hóa sự bất định và ngẫu nhiên — trụ cột của thuật toán ngẫu nhiên (randomized algorithms), cấu trúc dữ liệu băm, phân tích hiệu năng hệ thống và mạng máy tính, mật mã học, học máy và trí tuệ nhân tạo. Theo giáo trình MIT 18.05 kết hợp MIT 6.042J, môn học xuất phát từ không gian mẫu $\\Omega$, đại số các biến cố và ba tiên đề xác suất Kolmogorov, sau đó phát triển xác suất có điều kiện $P(A \\mid B)$, sự phân biệt cốt lõi giữa hai biến cố xung khắc (disjoint) với hai biến cố độc lập (independent), quy tắc nhân, công thức xác suất toàn phần và **Định lý Bayes** kèm phân tích sai lầm bỏ qua tỷ lệ nền (base-rate fallacy).',
    'Từ biến cố, môn học nâng lên khái niệm **Biến ngẫu nhiên (Random Variable)**: biến ngẫu nhiên rời rạc với hàm khối xác suất (PMF), kỳ vọng $E[X]$, phương sai $\\operatorname{Var}(X)$, các họ phân phối chuẩn mực (Bernoulli, Binomial, Geometric, Poisson) và đặc biệt là công cụ mạnh nhất của xác suất tổ hợp trong CS — **Tính chất tuyến tính của kỳ vọng (Linearity of Expectation)** kết hợp biến ngẫu nhiên chỉ thị (indicator random variables) áp dụng đúng ngay cả khi các biến phụ thuộc nhau. Hai chương cuối mở rộng sang biến ngẫu nhiên liên tục với hàm mật độ (PDF) và hàm phân phối tích lũy (CDF), các phân phối Uniform, Exponential (tính chất không nhớ), Normal/Gaussian, phân phối đồng thời (joint), phân phối biên (marginal), hiệp phương sai (covariance), hệ số tương quan, các bất đẳng thức đuôi (Markov, Chebyshev, Chernoff), **Luật số lớn (LLN)** và **Định lý giới hạn trung tâm (CLT)**.',
  ],
  boundaries: [
    'Phân biệt rõ biến ngẫu nhiên rời rạc (tính xác suất tại từng điểm $P(X = x)$ bằng PMF và dùng tổng $\\Sigma$) với biến ngẫu nhiên liên tục (nơi xác suất tại một điểm đơn lẻ luôn bằng $0$, $P(X = x) = 0$, và mật độ $f_X(x)$ có thể lớn hơn $1$ miễn là tích phân $\\int_{-\\infty}^\\infty f_X(x)\\,dx = 1$).',
    'Làm rõ các điều kiện áp dụng: tính tuyến tính của kỳ vọng $E[X + Y] = E[X] + E[Y]$ **không cần giả thiết độc lập**, nhưng tính cộng tính của phương sai $\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y)$ đòi hỏi các biến không tương quan/độc lập; tương quan bằng $0$ ($\operatorname{Cov}(X,Y) = 0$) không suy ra độc lập; và Định lý giới hạn trung tâm (CLT) chuẩn đòi hỏi các biến có phương sai hữu hạn.',
  ],
  sources: [
    {
      sourceId: 'mit-1805-2022',
      locator: 'Classes 1–9: Probability, Conditional Probability, Independence, Bayes’ Theorem, Discrete & Continuous Random Variables, Expectation, Variance, Joint Distributions, Covariance, Law of Large Numbers, and Central Limit Theorem',
      relationship: 'primary',
    },
    {
      sourceId: 'mit-6042j-2015',
      locator: 'MCS 2015: Chapters 16–19 — Events and Probability Spaces, Conditional Probability, Random Variables, Expectation (§18.4–18.5), and Deviation Bounds (§19.1–19.6)',
      relationship: 'primary',
    },
  ],
  chapters: [
    {
      id: 'prob-axioms-conditional-bayes',
      title: 'Chương 1 — Không gian xác suất, Tiên đề Kolmogorov, Xác suất có điều kiện, Tính độc lập và Định lý Bayes',
      overview: [
        'Chương mở đầu thiết lập nền tảng tiên đề Kolmogorov trên không gian mẫu và các biến cố (kèm cận hợp Boole Union Bound), làm rõ cơ chế cập nhật niềm tin khi có thêm thông tin mới thông qua xác suất có điều kiện, công thức xác suất toàn phần và Định lý Bayes, đồng thời sửa các ngộ nhận trực giác phổ biến nhất về sự khác biệt giữa xung khắc với độc lập, độc lập đôi một với độc lập toàn phần, và sai lầm bỏ qua tỷ lệ nền (base-rate fallacy).',
      ],
      sources: [
        {
          sourceId: 'mit-1805-2022',
          locator: 'Classes 1a–1b (Introduction; Counting and Sets), Class 2 (Probability: Terminology and Examples), and Class 3 (Conditional Probability, Independence, Bayes’ Theorem)',
          relationship: 'primary',
        },
        {
          sourceId: 'mit-6042j-2015',
          locator: 'Chapter 16 (Events and Probability Spaces) & Chapter 17 (Conditional Probability and Independence)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'prob-acb-sample-space-kolmogorov-axioms',
          title: 'Không gian mẫu (Sample Space), Biến cố (Events), Ba tiên đề Kolmogorov và các quy tắc suy diễn từ tiên đề',
          level: 'core',
          paragraphs: [
            'Mọi mô hình xác suất đều bắt đầu bằng việc định nghĩa một **Không gian mẫu (Sample Space) $\\Omega$** — tập hợp tất cả các kết quả sơ cấp (outcomes $\\omega \\in \\Omega$) loại trừ lẫn nhau của một phép thử ngẫu nhiên (không gian mẫu có thể hữu hạn, vô hạn đếm được như số lần tung đồng xu cho tới khi ngửa, hoặc liên tục không đếm được như thời gian chờ một gói tin mạng). Một **Biến cố (Event) $A \\subseteq \\Omega$** là một tập hợp con của không gian mẫu; phép hợp $A \\cup B$ biểu diễn biến cố "ít nhất một trong hai xảy ra", phép giao $A \\cap B$ biểu diễn "cả hai cùng xảy ra", và phần bù $A^c = \\Omega \\setminus A$ biểu diễn "biến cố $A$ không xảy ra". Hai biến cố được gọi là **xung khắc / rời nhau (mutually exclusive / disjoint)** nếu chúng không thể đồng thời xảy ra: $A \\cap B = \\emptyset$.',
            '**Hàm xác suất $P$** gán mỗi biến cố $A$ với một số thực $P(A)$ thỏa mãn **Ba tiên đề Kolmogorov**: (1) **Tính không âm**: $P(A) \\ge 0$ với mọi $A \\subseteq \\Omega$; (2) **Tính chuẩn hóa**: $P(\\Omega) = 1$; và (3) **Tính cộng tính đếm được (Countable Additivity)**: nếu dãy biến cố $A_1, A_2, \\dots$ đôi một xung khắc ($A_i \\cap A_j = \\emptyset$ với mọi $i \\neq j$), thì xác suất của hợp bằng tổng các xác suất: $P\\left(\\bigcup_{i=1}^\\infty A_i\\right) = \\sum_{i=1}^\\infty P(A_i)$. Chỉ từ ba tiên đề tối giản này, ta chứng minh được toàn bộ các quy tắc cơ bản: $P(\\emptyset) = 0$; quy tắc phần bù $P(A^c) = 1 - P(A)$; tính đơn điệu ($A \\subseteq B \\implies P(A) \\le P(B)$); công thức bù trừ $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$; và một công cụ cực kỳ lợi hại để chặn xác suất thất bại của thuật toán ngẫu nhiên là **Cận hợp Boole (Union Bound)**: với các biến cố $A_1, \\dots, A_n$ **bất kỳ (không cần xung khắc cũng không cần độc lập)**, luôn có: $$P(A_1 \\cup A_2 \\cup \\dots \\cup A_n) \\le \\sum_{i=1}^n P(A_i)$$',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 2: Probability: Terminology and Examples; Class 1b: Counting and Sets',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-6042j-2015',
              locator: 'MCS 2015 §16.1–16.5: Events and Probability Spaces; §16.5.2: The Union Bound',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'prob-acb-conditional-probability-independence',
          title: 'Xác suất có điều kiện P(A|B), Quy tắc nhân, Phân biệt Xung khắc với Độc lập và Độc lập đôi một so với Độc lập toàn phần',
          level: 'core',
          paragraphs: [
            'Khi biết biến cố $B$ (với $P(B) > 0$) đã xảy ra, không gian mẫu hiệu dụng bị thu hẹp từ $\\Omega$ về tập $B$, và tỷ trọng của phần biến cố $A$ nằm bên trong $B$ được định nghĩa là **Xác suất có điều kiện của $A$ khi biết $B$ (Conditional Probability)**: $$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} \\iff P(A \\cap B) = P(B) \\, P(A \\mid B)$$ Đẳng thức vế phải chính là **Quy tắc nhân xác suất (Multiplication Rule / Chain Rule)**, mở rộng tự nhiên cho $n$ biến cố dọc theo cây xác suất: $P(A_1 \\cap A_2 \\cap A_3) = P(A_1)\\,P(A_2 \\mid A_1)\\,P(A_3 \\mid A_1 \\cap A_2)$.',
            'Hai biến cố $A$ và $B$ được định nghĩa là **độc lập (independent)** nếu việc biết $B$ xảy ra hoàn toàn không làm thay đổi xác suất của $A$ (tức $P(A \\mid B) = P(A)$ khi $P(B) > 0$), hay dưới dạng đối xứng tổng quát: $$P(A \\cap B) = P(A)\\,P(B)$$ Tiểu mục này giải quyết triệt để **hai ngộ nhận phổ biến nhất** của người học xác suất: (1) **Đánh đồng "Xung khắc (Disjoint)" với "Độc lập (Independent)"**: đây là hai khái niệm gần như trái ngược nhau! Nếu $A$ và $B$ có xác suất dương ($P(A) > 0, P(B) > 0$) và **xung khắc** ($A \\cap B = \\emptyset$), thì chúng **phụ thuộc vào nhau một cách cực đoan nhất**, bởi vì biết $B$ đã xảy ra lập tức ép $P(A \\mid B) = 0 \\neq P(A)$; và (2) **Nhầm Độc lập đôi một (Pairwise Independence) với Độc lập toàn phần (Mutual Independence)**: một họ $n$ biến cố $A_1, \\dots, A_n$ là độc lập toàn phần nếu xác suất giao của **mọi tập con bất kỳ** đều bằng tích xác suất; việc chỉ có $P(A_i \\cap A_j) = P(A_i)P(A_j)$ cho từng cặp hai biến cố (độc lập đôi một) **không đủ** suy ra $P(A_1 \\cap A_2 \\cap A_3) = P(A_1)P(A_2)P(A_3)$ (phản ví dụ kinh điển trong mật mã học: tung hai đồng xu công bằng độc lập $A_1, A_2$ và đặt $A_3 = A_1 \\oplus A_2$ là phép XOR của hai đồng xu; bất kỳ 2 trong 3 biến cố đều độc lập, nhưng biết 2 biến cố sẽ xác định hoàn toàn biến cố thứ 3!).',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 3: Conditional Probability, Independence, Bayes’ Theorem',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-6042j-2015',
              locator: 'MCS 2015 §17.1–17.8: Conditional Probability, Independence, and Mutual Independence',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'prob-acb-total-probability-bayes-base-rate',
          title: 'Công thức xác suất toàn phần (Law of Total Probability), Định lý Bayes và Sai lầm bỏ qua tỷ lệ nền (Base-Rate Fallacy)',
          level: 'core',
          paragraphs: [
            'Khi không gian mẫu $\\Omega$ được chia thành một phân hoạch gồm các kịch bản rời nhau $H_1, H_2, \\dots, H_k$ (tức $H_i \\cap H_j = \\emptyset$ và $\\bigcup_{i=1}^k H_i = \\Omega$), bất kỳ biến cố quan sát $E$ nào cũng được tách thành hợp các phần xung khắc $E = \\bigcup_{i=1}^k (E \\cap H_i)$, dẫn tới **Công thức xác suất toàn phần (Law of Total Probability)**: $$P(E) = \\sum_{i=1}^k P(E \\cap H_i) = \\sum_{i=1}^k P(E \\mid H_i)\\,P(H_i)$$ Công thức này cho phép thực hiện chiến lược "chia để trị trong xác suất": tính xác suất của biến cố phức tạp $E$ bằng cách xét từng trường hợp giả định $H_i$ đơn giản rồi lấy trung bình có trọng số.',
            'Khi bài toán đảo ngược chiều — ta biết xác suất thuận $P(E \\mid H_i)$ (nếu giả thuyết $H_i$ đúng thì khả năng xuất hiện bằng chứng $E$ là bao nhiêu) và quan sát thấy bằng chứng $E$ đã xảy ra, làm thế nào để tính xác suất ngược $P(H_i \\mid E)$ (khả năng giả thuyết $H_i$ là nguyên nhân thực sự khi đã thấy $E$)? Kết hợp định nghĩa xác suất có điều kiện với công thức xác suất toàn phần ở mẫu số cho ta **Định lý Bayes (Bayes’ Theorem)**: $$P(H_i \\mid E) = \\frac{P(E \\mid H_i)\\,P(H_i)}{P(E)} = \\frac{P(E \\mid H_i)\\,P(H_i)}{\\sum_{j=1}^k P(E \\mid H_j)\\,P(H_j)}$$ Trong ngôn ngữ suy luận, $P(H_i)$ là **xác suất tiên nghiệm / tỷ lệ nền (prior / base rate)** trước khi có bằng chứng, $P(E \\mid H_i)$ là **độ hợp lý (likelihood)**, và $P(H_i \\mid E)$ là **xác suất hậu nghiệm (posterior)** sau khi cập nhật bằng chứng. Tiểu mục phân tích kỹ **Sai lầm bỏ qua tỷ lệ nền (Base-Rate Fallacy)** trong chẩn đoán y khoa và hệ thống phát hiện xâm nhập mạng / lọc rác: ngay cả khi một bộ phát hiện có độ nhạy và độ đặc hiệu lên tới $99\\%$ ($P(+\\mid \\text{Tấn công}) = 0.99$, dương tính giả $P(+\\mid \\text{Bình thường}) = 0.01$), nếu tỷ lệ nền các gói tin tấn công thực tế rất hiếm ($P(\\text{Tấn công}) = 10^{-4}$), thì khi còi báo động kêu ($+$), xác suất đó thực sự là tấn công $P(\\text{Tấn công} \\mid +)$ chỉ vào khoảng $\\frac{0.99 \\times 10^{-4}}{0.99\\times 10^{-4} + 0.01\\times 0.9999} \\approx 0.98\\%$ (hơn $99\\%$ cảnh báo là báo động giả do số lượng gói tin bình thường áp đảo)!',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 3: Conditional Probability, Independence, Bayes’ Theorem',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'prob-discrete-random-variables',
      title: 'Chương 2 — Biến ngẫu nhiên rời rạc, PMF, Kỳ vọng, Tính tuyến tính của Kỳ vọng và Phương sai',
      overview: [
        'Chương này chuyển từ các biến cố định tính sang các đại lượng định lượng qua Biến ngẫu nhiên rời rạc, trình bày hàm khối xác suất (PMF), kỳ vọng $E[X]$, phương pháp biến ngẫu nhiên chỉ thị (indicator variables) dựa trên tính tuyến tính của kỳ vọng để phân tích thuật toán ngẫu nhiên (như bài toán băm và trung bình của Quicksort), phương sai và bốn phân phối rời rạc cốt lõi.',
      ],
      sources: [
        {
          sourceId: 'mit-1805-2022',
          locator: 'Class 4a (Discrete Random Variables), Class 4b (Expected Value of Discrete Random Variables), and Class 5a (Variance of Discrete Random Variables)',
          relationship: 'primary',
        },
        {
          sourceId: 'mit-6042j-2015',
          locator: 'MCS 2015 Chapter 18: Random Variables; §18.4–18.5: Great Expectations and Linearity of Expectation; §19.3: Properties of Variance',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'prob-drv-random-variables-pmf-cdf',
          title: 'Định nghĩa Biến ngẫu nhiên như hàm X: Omega -> R, Hàm khối xác suất (PMF) và các họ phân phối rời rạc chuẩn mực (Bernoulli, Binomial, Geometric, Poisson)',
          level: 'core',
          paragraphs: [
            'Mặc dù mang tên là "biến ngẫu nhiên", về mặt toán học một **Biến ngẫu nhiên (Random Variable) $X$** không phải là một biến số đại số cũng không phải là một con số ngẫu nhiên mơ hồ, mà là một **hàm số thực xác định trên không gian mẫu $X: \\Omega \\to \\mathbb{R}$** gán mỗi kết quả sơ cấp $\\omega \\in \\Omega$ với một giá trị số thực $X(\\omega)$ (chẳng hạn số lần so sánh của thuật toán trên đầu vào $\\omega$, hoặc số gói tin bị rớt). Khi miền giá trị của $X$ là một tập hợp hữu hạn hoặc vô hạn đếm được $\\{x_1, x_2, \\dots\\}$, $X$ được gọi là **biến ngẫu nhiên rời rạc (discrete random variable)** và phân phối của nó được đặc trưng hoàn toàn bởi **Hàm khối xác suất (Probability Mass Function — PMF)** $p_X(x) = P(X = x) = P(\\{\\omega \\in \\Omega \\mid X(\\omega) = x\\})$ thỏa mãn $p_X(x) \\ge 0$ và $\\sum_x p_X(x) = 1$, cùng **Hàm phân phối tích lũy (CDF)** $F_X(x) = P(X \\le x) = \\sum_{t \\le x} p_X(t)$ (là hàm bậc thang không giảm từ $0$ lên $1$).',
            'Tiểu mục phân tích cơ chế sinh dữ liệu và PMF của **bốn họ phân phối rời rạc cốt lõi nhất**: (1) **$X \\sim \\operatorname{Bernoulli}(p)$** nhận giá trị $1$ (thành công) với xác suất $p$ và $0$ (thất bại) với xác suất $1-p$ — viên gạch cơ sở của mọi phép thử nhị phân; (2) **Phân phối Nhị thức $X \\sim \\operatorname{Binomial}(n, p)$** đếm tổng số lần thành công trong $n$ phép thử $\\operatorname{Bernoulli}(p)$ **độc lập** ($X = I_1 + \\dots + I_n$), có PMF $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$ với $k = 0, 1, \\dots, n$; (3) **Phân phối Hình học $X \\sim \\operatorname{Geometric}(p)$** đếm số lần thử độc lập cho tới lần thành công đầu tiên, có PMF $P(X = k) = (1-p)^{k-1} p$ ($k = 1, 2, \\dots$, hoặc đếm số lần thất bại trước khi thành công) với tính chất không nhớ rời rạc $P(X > m + k \\mid X > m) = P(X > k) = (1-p)^k$; và (4) **Phân phối Poisson $X \\sim \\operatorname{Poisson}(\\lambda)$** với $\\lambda > 0$ có PMF $P(X = k) = e^{-\\lambda} \\frac{\\lambda^k}{k!}$ ($k = 0, 1, 2, \\dots$, tổng bằng $1$ nhờ chuỗi Maclaurin $\\sum_{k=0}^\\infty \\frac{\\lambda^k}{k!} = e^\\lambda$), xuất hiện như giới hạn của $\\operatorname{Binomial}(n, p)$ khi số phép thử $n \\to \\infty$, xác suất đơn lẻ $p \\to 0$ sao cho tốc độ trung bình $np = \\lambda$ cố định (luật các biến cố hiếm — mô hình hóa số yêu cầu truy cập gửi tới máy chủ web hoặc số lỗi bit trong một khoảng thời gian).',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 4a: Discrete Random Variables, PMF, CDF, Bernoulli, Binomial, Geometric, and Poisson Distributions',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-6042j-2015',
              locator: 'Chapter 18: §18.1–18.4 Random Variables, Independence, and Binomial Distributions',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'prob-drv-expectation-linearity-indicators',
          title: 'Kỳ vọng E[X], Định lý Nhà thống kê vô thức (LOTUS), Tính tuyến tính của Kỳ vọng và kỹ thuật Biến ngẫu nhiên chỉ thị (Indicator Variables)',
          level: 'core',
          paragraphs: [
            '**Kỳ vọng (Expected Value / Mean) $E[X]$** (còn ký hiệu là $\\mu_X$) của biến ngẫu nhiên rời rạc $X$ là trung bình cộng có trọng số xác suất của tất cả các giá trị mà $X$ có thể nhận (với điều kiện chuỗi hội tụ tuyệt đối $\\sum_x |x| p_X(x) < \\infty$): $$E[X] = \\sum_x x \\, P(X = x)$$ Khi cần tính kỳ vọng của một hàm $g(X)$ (như $X^2$ hay $2^X$), theo **Định lý Nhà thống kê vô thức (Law of the Unconscious Statistician — LOTUS)**, ta không cần tìm PMF của biến mới $Y = g(X)$ mà tính trực tiếp từ PMF của $X$: $E[g(X)] = \\sum_x g(x) P(X = x)$ (lưu ý quan trọng: với hàm phi tuyến $g$, nói chung **$E[g(X)] \\neq g(E[X])$**, ví dụ $E[X^2] \\neq (E[X])^2$). Đối với một **Biến ngẫu nhiên chỉ thị (Indicator Random Variable)** $I_A$ của biến cố $A$ (nhận giá trị $1$ nếu $A$ xảy ra và $0$ nếu $A$ không xảy ra), kỳ vọng của nó bằng đúng xác suất của biến cố: **$E[I_A] = 1 \\cdot P(A) + 0 \\cdot P(A^c) = P(A)$**.',
            'Định lý quan trọng bậc nhất trong phân tích thuật toán ngẫu nhiên là **Tính chất tuyến tính của Kỳ vọng (Linearity of Expectation)**: với mọi hằng số $a_i \\in \\mathbb{R}$ và các biến ngẫu nhiên $X_1, X_2, \\dots, X_n$ trên cùng không gian mẫu có kỳ vọng hữu hạn (khả tích: $E[|X_i|] < \\infty$), kỳ vọng của tổng hữu hạn bằng tổng các kỳ vọng: $$E\\left[ \\sum_{i=1}^n a_i X_i \\right] = \\sum_{i=1}^n a_i E[X_i]$$ Điều kỳ diệu làm nên sức mạnh của định lý này là nó **hoàn toàn KHÔNG đòi hỏi các biến $X_1, \\dots, X_n$ phải độc lập với nhau** (trong mô hình rời rạc có thể chứng minh bằng cách phân phối tổng hữu hạn qua tổng kỳ vọng; tính khả tích đảm bảo các phép cộng hợp lệ)! Kết hợp Tính tuyến tính của kỳ vọng với Biến chỉ thị tạo ra phương pháp giải chuẩn mực trong CS: để tính kỳ vọng của một đại lượng đếm phức tạp $X$ (như số cặp xung đột trong bảng băm có $m$ ô, số điểm cố định của một hoán vị ngẫu nhiên, hay số phép so sánh của thuật toán Randomized Quicksort), ta phân rã $X = I_1 + I_2 + \\dots + I_n$ thành tổng các biến chỉ thị $I_i \\in \\{0, 1\\}$, nhờ đó $E[X] = \\sum_{i=1}^n E[I_i] = \\sum_{i=1}^n P(I_i = 1)$ mà không cần tìm phân phối phức tạp của $X$ hay bận tâm việc các $I_i$ phụ thuộc chặt vào nhau! (Ví dụ: với $X \\sim \\operatorname{Binomial}(n, p) = \\sum_{i=1}^n I_i$, ta có ngay $E[X] = n p$ chỉ trong 1 dòng mà không cần biến đổi tổng tổ hợp).',
          ],
          sources: [
            {
              sourceId: 'mit-6042j-2015',
              locator: 'MCS 2015 §18.4–18.5: Great Expectations, Indicator Random Variables, and Linearity of Expectation',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 4b: Expected Value of Discrete Random Variables',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'prob-drv-variance-standard-deviation',
          title: 'Phương sai Var(X), Độ lệch chuẩn sigma_X, công thức E[X^2] - (E[X])^2 và quy tắc biến đổi bậc hai Var(aX + b) = a^2 Var(X)',
          level: 'core',
          paragraphs: [
            'Kỳ vọng $E[X]$ chỉ cho biết vị trí trọng tâm của phân phối mà không cho biết các giá trị của $X$ tập trung sát quanh $E[X]$ hay phân tán rất xa (ví dụ biến hằng $X = 0$ và biến nhận $\\pm 1000$ với xác suất $1/2$ đều có cùng kỳ vọng $E[X] = 0$). Để đo mức độ phân tán quanh kỳ vọng $\\mu = E[X]$, ta định nghĩa **Phương sai (Variance)** là kỳ vọng của bình phương độ lệch khỏi trung bình: $$\\operatorname{Var}(X) = \\sigma_X^2 = E\\big[(X - \\mu)^2\\big] = E[X^2] - (E[X])^2 \\ge 0$$ (trong đó đẳng thức thực hành $E[(X-\\mu)^2] = E[X^2 - 2\\mu X + \\mu^2] = E[X^2] - 2\\mu E[X] + \\mu^2 = E[X^2] - \\mu^2$ suy ra trực tiếp từ tính tuyến tính của kỳ vọng; và $\\operatorname{Var}(X) = 0$ khi và chỉ khi $X$ là hằng số với xác suất bằng $1$). Vì $\\operatorname{Var}(X)$ có đơn vị là bình phương đơn vị của $X$, ta lấy căn bậc hai không âm để có **Độ lệch chuẩn (Standard Deviation)** $\\sigma_X = \\sqrt{\\operatorname{Var}(X)}$ cùng đơn vị đo với $X$.',
            'Khác với kỳ vọng ($E[aX + b] = aE[X] + b$), phép dịch chuyển cộng thêm hằng số $b$ không làm thay đổi độ phân tán của đám mây dữ liệu, còn phép co giãn nhân với $a$ được bình phương lên trong độ lệch, nên phương sai tuân theo quy tắc bậc hai: $$\\operatorname{Var}(aX + b) = a^2 \\operatorname{Var}(X)$$ Hơn nữa, nếu $X_1, \\dots, X_n$ là các biến ngẫu nhiên **độc lập** (hoặc đôi một không tương quan), thì phương sai của tổng bằng tổng các phương sai: $\\operatorname{Var}(X_1 + \\dots + X_n) = \\sum_{i=1}^n \\operatorname{Var}(X_i)$. Áp dụng cho biến chỉ thị $I \\sim \\operatorname{Bernoulli}(p)$ có $E[I^2] = E[I] = p \\implies \\operatorname{Var}(I) = p - p^2 = p(1-p)$, tổng của $n$ phép thử độc lập $X \\sim \\operatorname{Binomial}(n, p)$ có ngay phương sai $\\operatorname{Var}(X) = np(1-p)$; tương tự $\\operatorname{Geometric}(p)$ có $E[X] = 1/p, \\operatorname{Var}(X) = \\frac{1-p}{p^2}$, và $\\operatorname{Poisson}(\\lambda)$ có cả kỳ vọng lẫn phương sai đều bằng $\\lambda$.',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 5a: Variance and Standard Deviation ($\operatorname{Var}(X) = E[X^2] - E[X]^2$, $\operatorname{Var}(aX+b) = a^2\\operatorname{Var}(X)$)',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-6042j-2015',
              locator: 'MCS 2015 §19.3: Properties of Variance',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'prob-continuous-distributions',
      title: 'Chương 3 — Biến ngẫu nhiên liên tục, Hàm mật độ (PDF), Hàm phân phối tích lũy (CDF) và Phân phối Chuẩn (Gaussian)',
      overview: [
        'Chương này sử dụng phép tính đạo hàm, tích phân từng phần và tích phân suy rộng từ Môn CS-11 để xây dựng lý thuyết biến ngẫu nhiên liên tục: giải thích ý nghĩa vật lý của hàm mật độ xác suất $f_X(x)$, mối quan hệ đạo hàm – nguyên hàm với hàm phân phối tích lũy $F_X(x)$, quy tắc tìm phân phối khi đổi biến, và ba phân phối liên tục quan trọng nhất (Đều, Mũ, Chuẩn Gaussian).',
      ],
      sources: [
        {
          sourceId: 'mit-1805-2022',
          locator: 'Class 5b (Continuous Random Variables), Class 5c (Gallery of Continuous Random Variables), Class 5d (Manipulating Random Variables), and Class 6a (Continuous Expectation and Variance)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'prob-cd-pdf-cdf-continuous-lotus',
          title: 'Hàm mật độ xác suất (PDF) f_X(x), Hàm phân phối tích lũy (CDF) F_X(x), quan hệ F\'(x) = f(x) và kỳ vọng/phương sai liên tục',
          level: 'core',
          paragraphs: [
            'Khi một biến ngẫu nhiên $X$ nhận giá trị trên một khoảng liên tục của trục số thực (như thời gian phản hồi của truy vấn cơ sở dữ liệu hay sai số đo lường), xác suất để $X$ rơi trúng chính xác một số thực đơn lẻ $x$ với độ chính xác vô hạn chữ số thập phân luôn bằng $0$: **$P(X = x) = 0$** (do đó với biến liên tục, $P(a \\le X \\le b) = P(a < X < b)$). Thay vì gán xác suất cho từng điểm, một **Biến ngẫu nhiên liên tục** được xác định bởi một **Hàm mật độ xác suất (Probability Density Function — PDF) $f_X(x) \\ge 0$** sao cho xác suất để $X$ rơi vào đoạn $[a, b]$ bằng **diện tích dưới đường cong mật độ** trên đoạn đó: $$P(a \\le X \\le b) = \\int_a^b f_X(x)\\,dx, \\qquad \\text{với điều kiện chuẩn hóa } \\int_{-\\infty}^\\infty f_X(x)\\,dx = 1$$ Tiểu mục nhấn mạnh điểm rất dễ nhầm: **$f_X(x)$ KHÔNG phải là xác suất $P(X = x)$**, mà là mật độ xác suất trên một đơn vị độ dài (với khoảng rất nhỏ $dx$, $P(x \\le X \\le x + dx) \\approx f_X(x)\\,dx$); vì vậy giá trị của $f_X(x)$ hoàn toàn **có thể lớn hơn $1$** (ví dụ phân phối đều trên đoạn $[0, 1/2]$ có mật độ $f_X(x) = 2 > 1$), miễn là tổng diện tích tích phân bằng $1$.',
            '**Hàm phân phối tích lũy (Cumulative Distribution Function — CDF)** $F_X(x) = P(X \\le x) = \\int_{-\\infty}^x f_X(t)\\,dt$ luôn là một hàm liên tục không giảm có $\\lim_{x \\to -\\infty} F_X(x) = 0$, $\\lim_{x \\to +\\infty} F_X(x) = 1$, và $P(a < X \\le b) = F_X(b) - F_X(a)$. Áp dụng trực tiếp **Định lý cơ bản của Giải tích (FTC 1)** từ Môn CS-11, tại mọi điểm mà $f_X$ liên tục, đạo hàm của CDF chính là PDF: $$F_X\'(x) = \\frac{d}{dx} \\int_{-\\infty}^x f_X(t)\\,dt = f_X(x)$$ Mọi công thức kỳ vọng, LOTUS và phương sai ở Chương 2 chuyển sang trường hợp liên tục bằng cách thay tổng $\\Sigma$ bằng tích phân suy rộng: $E[X] = \\int_{-\\infty}^\\infty x f_X(x)\\,dx$, $E[g(X)] = \\int_{-\\infty}^\\infty g(x) f_X(x)\\,dx$, và $\\operatorname{Var}(X) = \\int_{-\\infty}^\\infty (x - \\mu)^2 f_X(x)\\,dx = E[X^2] - (E[X])^2$.',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 5b & Class 6a: Continuous Random Variables, PDF vs Probability, CDF and Fundamental Theorem of Calculus, Continuous Expectation and Variance',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'prob-cd-uniform-exponential-normal',
          title: 'Ba họ phân phối liên tục nền tảng: Phân phối Đều Uniform(a, b), Phân phối Mũ Exponential(lambda) và Phân phối Chuẩn Normal(mu, sigma^2)',
          level: 'core',
          paragraphs: [
            'Tiểu mục này xây dựng ba họ phân phối liên tục xuất hiện xuyên suốt trong mô phỏng hệ thống và học máy: (1) **Phân phối Đều $X \\sim \\operatorname{Uniform}(a, b)$** có mật độ phẳng $f_X(x) = \\frac{1}{b - a}$ trên $[a, b]$ (và bằng $0$ ở ngoài), với $E[X] = \\frac{a+b}{2}$ và $\\operatorname{Var}(X) = \\frac{(b-a)^2}{12}$ — phân phối đặc biệt $U \\sim \\operatorname{Uniform}(0, 1)$ chính là đầu ra cơ bản của mọi bộ sinh số giả ngẫu nhiên (PRNG) trong ngôn ngữ lập trình; (2) **Phân phối Mũ $X \\sim \\operatorname{Exponential}(\\lambda)$** (với tốc độ $\\lambda > 0$) mô hình hóa thời gian chờ liên tục giữa các sự kiện trong quá trình Poisson, có PDF $f_X(x) = \\lambda e^{-\\lambda x}$ và CDF $F_X(x) = 1 - e^{-\\lambda x}$ cho $x \\ge 0$ (tích phân từng phần cho $E[X] = 1/\\lambda$ và $\\operatorname{Var}(X) = 1/\\lambda^2$). Đây là phân phối liên tục duy nhất có **tính chất không nhớ (memoryless property)**: $P(X > s + t \\mid X > s) = \\frac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}} = e^{-\\lambda t} = P(X > t)$.',
            '(3) **Phân phối Chuẩn / Gaussian $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$** có hàm mật độ hình chuông đối xứng quanh kỳ vọng $\\mu$ với phương sai $\\sigma^2 > 0$: $$f_X(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left( -\\frac{(x - \\mu)^2}{2\\sigma^2} \\right), \\quad x \\in \\mathbb{R}$$ (tích phân trên toàn bộ $\\mathbb{R}$ bằng $1$ nhờ tích phân Gaussian $\\int_{-\\infty}^\\infty e^{-z^2/2}\\,dz = \\sqrt{2\\pi}$ đã chứng minh bằng tọa độ cực ở Chương 4 Môn CS-12). Khi $\\mu = 0, \\sigma^2 = 1$, ta có **Phân phối chuẩn tắc (Standard Normal) $Z \\sim \\mathcal{N}(0, 1)$** với hàm mật độ $\\phi(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}$ và CDF $\\Phi(z) = P(Z \\le z)$. Mọi biến chuẩn $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$ đều được **chuẩn hóa (standardization / z-score)** về $Z$ thông qua phép biến đổi tuyến tính $Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$, nhờ đó $P(a \\le X \\le b) = \\Phi\\left(\\frac{b-\\mu}{\\sigma}\\right) - \\Phi\\left(\\frac{a-\\mu}{\\sigma}\\right)$ và tuân theo quy tắc thực nghiệm $68\\% - 95\\% - 99.7\\%$ trong phạm vi $\\mu \\pm 1\\sigma, 2\\sigma, 3\\sigma$.',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 5c: Gallery of Continuous Random Variables (Uniform, Exponential, and Normal Distributions)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'prob-cd-transformations-inverse-cdf-sampling',
          title: 'Tìm phân phối của hàm biến ngẫu nhiên Y = g(X) qua CDF/Jacobian và thuật toán Sinh mẫu biến đổi ngược (Inverse Transform Sampling)',
          level: 'core',
          paragraphs: [
            'Khi biết phân phối của biến liên tục $X$ và định nghĩa một biến mới $Y = g(X)$, làm thế nào để tìm hàm mật độ $f_Y(y)$? Phương pháp tổng quát an toàn nhất luôn đi qua hai bước: (Bước 1) Viết hàm phân phối tích lũy của $Y$ theo $X$: $F_Y(y) = P(Y \\le y) = P(g(X) \\le y)$ rồi giải bất phương trình $g(X) \\le y$ để biểu diễn qua $F_X$; (Bước 2) Lấy đạo hàm $f_Y(y) = F_Y\'(y)$ bằng quy tắc dây chuyền. Đặc biệt, khi $g$ là hàm khả vi đơn điệu nghiêm ngặt có hàm ngược $x = g^{-1}(y)$, đạo hàm quy tắc dây chuyền cho công thức đổi biến một chiều với trị tuyệt đối đạo hàm Jacobian: $$f_Y(y) = f_X\\big(g^{-1}(y)\\big) \\cdot \\left| \\frac{d}{dy} g^{-1}(y) \\right|$$',
            'Ứng dụng thuật toán trực tiếp và đẹp nhất của phương pháp CDF là **Định lý Biến đổi tích phân xác suất (Probability Integral Transform)** và **Thuật toán Sinh mẫu biến đổi ngược (Inverse Transform Sampling)**: nếu máy tính chỉ có hàm `rand()` sinh số giả ngẫu nhiên phân phối đều $U \\sim \\operatorname{Uniform}(0, 1)$, làm thế nào để sinh ra một biến ngẫu nhiên $X$ tuân theo một hàm phân phối mục tiêu $F_X(x)$ bất kỳ (như phân phối mũ $\\operatorname{Exponential}(\\lambda)$ để mô phỏng lưu lượng mạng)? Định lý chứng minh rằng nếu đặt $X = F_X^{-1}(U)$, thì với mọi $x$: $$P(X \\le x) = P\\big(F_X^{-1}(U) \\le x\\big) = P\\big(U \\le F_X(x)\\big) = F_X(x)$$ (bởi vì với $U \\sim \\operatorname{Uniform}(0,1)$ thì $P(U \\le u) = u$ với mọi $u \\in [0, 1]$!). Chẳng hạn, giải $1 - e^{-\\lambda x} = U \\implies X = -\\frac{\\ln(1 - U)}{\\lambda}$ cho phép biến một số ngẫu nhiên đều $U$ thành biến ngẫu nhiên phân phối mũ chính xác chỉ bằng một phép lấy logarit.',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 5d: Manipulating Random Variables (CDF method and inverse-transform simulation)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'prob-joint-covariance-limit-theorems',
      title: 'Chương 4 — Phân phối đồng thời (Joint Distributions), Hiệp phương sai, Bất đẳng thức đuôi và Các định lý giới hạn (LLN, CLT)',
      overview: [
        'Chương cuối kết nối giải tích nhiều biến (`CS-12`) và đại số tuyến tính (`CS-10`) vào xác suất nhiều biến: phân phối đồng thời, phân phối biên, phân phối có điều kiện, hiệp phương sai và ma trận hiệp phương sai, các bất đẳng thức chặn đuôi xác suất (Markov, Chebyshev, Chernoff) và hai định lý trụ cột nối xác suất với thống kê suy luận là Luật số lớn (LLN) và Định lý giới hạn trung tâm (CLT).',
      ],
      sources: [
        {
          sourceId: 'mit-1805-2022',
          locator: 'Class 6b & Class 7 (Joint Distributions, Marginal and Conditional Distributions, Covariance and Correlation, Law of Large Numbers, and Central Limit Theorem)',
          relationship: 'primary',
        },
        {
          sourceId: 'mit-6042j-2015',
          locator: 'MCS 2015 Chapter 19: Deviation from the Mean — §19.1 Markov’s Theorem, §19.2 Chebyshev’s Theorem, §19.3 Properties of Variance, §19.4 Estimation by Random Sampling, and §19.6 Sums of Random Variables (Chernoff Bound in §19.6.2)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'prob-jclt-joint-marginal-conditional-distributions',
          title: 'Phân phối đồng thời (Joint PMF/PDF), Phân phối biên (Marginal), Phân phối có điều kiện và kiểm tra tính độc lập',
          level: 'core',
          paragraphs: [
            'Khi khảo sát đồng thời hai (hoặc nhiều) biến ngẫu nhiên $(X, Y)$ trên cùng không gian mẫu, hành vi chung của chúng được mô tả bởi **Phân phối đồng thời (Joint Distribution)**: ở trường hợp rời rạc là bảng **PMF đồng thời** $p_{X,Y}(x, y) = P(X = x, Y = y)$ với $\\sum_x \\sum_y p_{X,Y}(x, y) = 1$; ở trường hợp liên tục là mặt **PDF đồng thời** $f_{X,Y}(x, y) \\ge 0$ sao cho xác suất cặp $(X, Y)$ rơi vào miền phẳng $R \\subseteq \\mathbb{R}^2$ bằng tích phân kép $\\iint_R f_{X,Y}(x, y)\\,dx\\,dy$ (sử dụng trực tiếp Định lý Fubini từ Chương 4 Môn CS-12).',
            'Từ phân phối đồng thời của $(X, Y)$, muốn thu lại phân phối của riêng từng biến đơn lẻ — gọi là **Phân phối biên (Marginal Distribution)** — ta "cộng dồn hoặc tích phân khử đi biến kia": $p_X(x) = \\sum_y p_{X,Y}(x, y)$ trong rời rạc, và $f_X(x) = \\int_{-\\infty}^\\infty f_{X,Y}(x, y)\\,dy$ trong liên tục. Khi biết $X = x$ (với $f_X(x) > 0$), **hàm mật độ có điều kiện** của $Y$ là $f_{Y \\mid X}(y \\mid x) = \\frac{f_{X,Y}(x, y)}{f_X(x)}$. Hai biến ngẫu nhiên $X$ và $Y$ là **độc lập** khi và chỉ khi phân phối đồng thời tách thành tích của hai phân phối biên tại mọi điểm: $$p_{X,Y}(x, y) = p_X(x)\\,p_Y(y) \\quad \\text{hoặc} \\quad f_{X,Y}(x, y) = f_X(x)\\,f_Y(y)$$ (trong trường hợp liên tục, điều kiện cần đầu tiên để $X$ và $Y$ độc lập là miền giá trị hỗ trợ có mật độ dương của $(X, Y)$ phải là một hình chữ nhật tích Descartes $I_X \\times I_Y$; nếu miền hỗ trợ là hình tam giác $0 \\le x \\le y \\le 1$ hoặc hình tròn $x^2 + y^2 \\le 1$, ta kết luận ngay lập tức $X$ và $Y$ phụ thuộc nhau mà không cần tính tích phân!). Khi $X, Y$ độc lập, kỳ vọng của tích bằng tích các kỳ vọng: $E[XY] = E[X]E[Y]$.',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 7a: Joint Distributions, Independence (Discrete and Continuous Joint, Marginal, and Conditional Distributions)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'prob-jclt-covariance-correlation-matrix',
          title: 'Hiệp phương sai Cov(X, Y), Hệ số tương quan tuyến tính rho(X, Y), Ma trận hiệp phương sai và vì sao Cov = 0 không suy ra Độc lập',
          level: 'core',
          paragraphs: [
            'Để đo xu hướng hai biến ngẫu nhiên $X$ và $Y$ cùng tăng/cùng giảm hay biến thiên ngược chiều nhau, ta định nghĩa **Hiệp phương sai (Covariance)**: $$\\operatorname{Cov}(X, Y) = E\\big[(X - \\mu_X)(Y - \\mu_Y)\\big] = E[XY] - E[X]E[Y]$$ Hiệp phương sai có tính đối xứng, có $\\operatorname{Cov}(X, X) = \\operatorname{Var}(X)$, có tính song tuyến tính $\\operatorname{Cov}(aX + bY, Z) = a\\operatorname{Cov}(X, Z) + b\\operatorname{Cov}(Y, Z)$, và mở rộng công thức phương sai của tổng cho hai biến bất kỳ: $$\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) + 2\\operatorname{Cov}(X, Y)$$ Vì $\\operatorname{Cov}(X, Y)$ phụ thuộc vào đơn vị đo của $X$ và $Y$, ta chuẩn hóa nó bằng tích hai độ lệch chuẩn để thu được **Hệ số tương quan Pearson (Correlation Coefficient)** không thứ nguyên: $$\\rho(X, Y) = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma_X \\sigma_Y} \\in [-1, 1]$$ (trong đó $|\\rho| = 1$ xảy ra khi và chỉ khi $Y = aX + b$ là hàm bậc nhất hoàn hảo của $X$). Với một vector ngẫu nhiên $\\mathbf{X} = (X_1, \\dots, X_d)^T$, xếp các $\\operatorname{Cov}(X_i, X_j)$ thành bảng $d \\times d$ cho ta **Ma trận hiệp phương sai $\\Sigma = E[(\\mathbf{X}-\\boldsymbol{\\mu})(\\mathbf{X}-\\boldsymbol{\\mu})^T]$** — một ma trận luôn **đối xứng và nửa xác định dương** ($\\mathbf{u}^T \\Sigma \\mathbf{u} = \\operatorname{Var}(\\mathbf{u}^T \\mathbf{X}) \\ge 0$, kết nối trực tiếp về Chương 6 Môn CS-10).',
            'Tiểu mục đặc biệt nhấn mạnh chiều suy luận một chiều: **Nếu $X$ và $Y$ độc lập thì $E[XY] = E[X]E[Y] \\implies \\operatorname{Cov}(X, Y) = 0$ (không tương quan / uncorrelated)**; nhưng **chiều ngược lại SAI: $\\operatorname{Cov}(X, Y) = 0$ KHÔNG suy ra $X$ và $Y$ độc lập!** Lý do là $\\operatorname{Cov}(X, Y)$ và $\\rho(X, Y)$ chỉ đo **mối quan hệ tuyến tính**, hoàn toàn không phát hiện được sự phụ thuộc phi tuyến đối xứng. Phản ví dụ chuẩn: lấy $X \\sim \\operatorname{Uniform}\\{-1, 0, 1\\}$ (hoặc $X \\sim \\mathcal{N}(0, 1)$) và đặt $Y = X^2$; rõ ràng $Y$ phụ thuộc hoàn toàn vào $X$, nhưng do tính đối xứng lẻ $E[X] = 0$ và $E[XY] = E[X^3] = 0$, ta có $\\operatorname{Cov}(X, Y) = 0$.',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 7b: Covariance and Correlation (Properties, Variance of Sums, Zero Correlation vs. Independence)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'prob-jclt-tail-bounds-lln-clt',
          title: 'Các bất đẳng thức chặn đuôi (Markov, Chebyshev, Chernoff), Luật số lớn (LLN) và Định lý giới hạn trung tâm (CLT)',
          level: 'core',
          paragraphs: [
            'Trong phân tích thuật toán ngẫu nhiên và lý thuyết học thống kê, việc chỉ biết kỳ vọng $E[X]$ là chưa đủ; ta cần đảm bảo rằng xác suất để $X$ lệch xa khỏi kỳ vọng của nó là cực kỳ nhỏ thông qua hệ thống **ba bất đẳng thức chặn đuôi (tail / concentration bounds)** có độ chặt tăng dần khi biết thêm thông tin về biến ngẫu nhiên: (1) **Bất đẳng thức Markov**: nếu chỉ biết $X \\ge 0$ không âm và có kỳ vọng $E[X]$, thì với mọi $a > 0$: $$P(X \\ge a) \\le \\frac{E[X]}{a}$$ (rất tổng quát nhưng cận giảm chậm theo $1/a$); (2) **Bất đẳng thức Chebyshev**: áp dụng Markov cho biến không âm $(X - \\mu)^2 \\ge c^2$ khi biết thêm phương sai $\\operatorname{Var}(X) = \\sigma^2$, ta có: $$P(|X - \\mu| \\ge c) \\le \\frac{\\operatorname{Var}(X)}{c^2} \\quad \\text{hay} \\quad P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}$$ (cận giảm bậc hai theo $1/c^2$ mà không cần các thành phần độc lập toàn phần); và (3) **Cận Chernoff (Chernoff Bounds)**: khi $X = \\sum_{i=1}^n X_i$ là tổng của các biến chỉ thị **độc lập** (có kỳ vọng $\\mu = E[X]$), bằng cách áp dụng Markov lên hàm mũ $e^{tX}$ (hàm sinh mômen), xác suất lệch khỏi trung bình một tỉ lệ $(1+\\delta)\\mu$ giảm **nhanh theo hàm mũ** $P(X \\ge (1+\\delta)\\mu) \\le e^{-\\frac{\\delta^2 \\mu}{2+\\delta}}$ — đây là công cụ cốt lõi để chứng minh các thuật toán cân bằng tải ngẫu nhiên và băm đạt hiệu năng cao với xác suất $1 - 1/n^c$.',
            'Khi xét trung bình mẫu $\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i$ của một dãy các biến ngẫu nhiên độc lập cùng phân phối (i.i.d.) có kỳ vọng hữu hạn $\\mu$ và phương sai hữu hạn $\\sigma^2 < \\infty$, ta có $E[\\bar{X}_n] = \\mu$ và $\\operatorname{Var}(\\bar{X}_n) = \\frac{\\sigma^2}{n} \\to 0$ khi $n \\to \\infty$. Áp dụng ngay bất đẳng thức Chebyshev cho $\\bar{X}_n$ chứng minh **Luật số lớn (Law of Large Numbers — LLN)**: với mọi $\\varepsilon > 0$, $\\lim_{n \\to \\infty} P(|\\bar{X}_n - \\mu| \\ge \\varepsilon) \\le \\lim_{n \\to \\infty} \\frac{\\sigma^2}{n\\varepsilon^2} = 0$, nghĩa là trung bình mẫu $\\bar{X}_n$ hội tụ theo xác suất về đúng kỳ vọng lý thuyết $\\mu$ (cơ sở toán học của phương pháp mô phỏng Monte Carlo). Đi xa hơn nữa, **Định lý giới hạn trung tâm (Central Limit Theorem — CLT)** chỉ ra hình dáng phân phối của sai số quanh $\\mu$: khi nhân độ lệch $(\\bar{X}_n - \\mu)$ với $\\sqrt{n}/\\sigma$, biến chuẩn hóa hội tụ theo phân phối về **Phân phối Chuẩn tắc $\\mathcal{N}(0, 1)$** bất kể phân phối gốc của từng $X_i$ là rời rạc hay liên tục, lệch hay đối xứng: $$Z_n = \\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} = \\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sigma\\sqrt{n}} \\;\\xrightarrow{d}\\; \\mathcal{N}(0, 1) \\quad \\text{khi } n \\to \\infty$$ Tiểu mục nêu rõ **điều kiện áp dụng và giới hạn của CLT**: các biến phải độc lập (hoặc phụ thuộc yếu) và đặc biệt là **phải có phương sai hữu hạn $\\sigma^2 < \\infty$**; đối với các phân phối đuôi nặng có phương sai vô hạn (như phân phối Cauchy hay Pareto với $\\alpha \\le 2$), CLT chuẩn hoàn toàn không áp dụng được.',
          ],
          sources: [
            {
              sourceId: 'mit-6042j-2015',
              locator: 'MCS 2015 §19.1 Markov’s Theorem, §19.2 Chebyshev’s Theorem, §19.4 Estimation by Random Sampling, and §19.6.2 The Chernoff Bound',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 6b & Class 7: Law of Large Numbers, Central Limit Theorem (Conditions and Normal Approximation), and Monte Carlo Simulation',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
  ],
};
