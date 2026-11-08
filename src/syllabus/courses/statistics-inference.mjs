export const COURSE_STATISTICS_INFERENCE = {
  id: 'statistics-inference',
  code: 'CS-14',
  title: 'Thống kê và thiết kế suy luận',
  blockId: 'block-2',
  level: 'core',
  prerequisites: [
    {
      courseId: 'probability',
      type: 'required',
      reason: 'Cần nắm vững biến ngẫu nhiên, kỳ vọng, phương sai, định lý Bayes và Định lý giới hạn trung tâm (CLT) từ Môn CS-13.',
    },
    {
      courseId: 'linear-algebra',
      type: 'required',
      reason: 'Cần phép chiếu trực giao và phương trình chuẩn bình phương tối thiểu (A^T A x_hat = A^T b) từ Môn CS-10 cho mô hình hồi quy tuyến tính.',
    },
  ],
  overview: [
    'Nếu Xác suất (`CS-13`) là bài toán thuận — cho biết trước quy luật phân phối và tham số $\\theta$, hãy tính xác suất của các kết quả dữ liệu — thì Thống kê và Suy luận (`CS-14`) là **bài toán ngược (inverse problem)**: đứng trước một mẫu dữ liệu hữu hạn có nhiễu $x_1, x_2, \\dots, x_n$ được sinh ra từ một quy luật mà tham số thực $\\theta$ chưa biết, làm thế nào để ước lượng $\\theta$, định lượng độ bất định của ước lượng đó và ra quyết định khoa học? Bám sát cấu trúc của MIT 18.05 (Classes 10b–26), môn học bắt đầu từ sự phân biệt giữa quần thể (population) và mẫu (sample), các nguồn sai lệch dữ liệu (sampling/survivorship bias), thống kê mô tả bền vững, và sự phân rã **Độ lệch – Phương sai (Bias–Variance Decomposition)** của sai số bình phương trung bình (MSE).',
    'Từ đó, môn học trình bày song song hai trường phái suy luận thống kê chính: **Ước lượng hợp lý cực đại (Maximum Likelihood Estimation — MLE)** và **Suy luận Bayes (Bayesian Inference)** với cập nhật tiên nghiệm $\\to$ hậu nghiệm cùng khoảng tin cậy Bayes (credible intervals); tiếp nối bằng **Khoảng tin cậy tần suất (Frequentist Confidence Intervals)**, phân phối Student-$t$ chính xác cho mẫu i.i.d. chuẩn với phương sai dương, phân biệt xấp xỉ lớn mẫu ngoài mô hình chuẩn, và phương pháp tái lấy mẫu **Bootstrap** trên máy tính. Chương cuối giải phẫu bản chất toán học của **Kiểm định giả thuyết (NHST)** (sai lầm loại I/II, lực kiểm định power, định nghĩa xác suất có điều kiện chính xác của $p$-value, kiểm định đa giả thuyết trong A/B testing), **Hồi quy tuyến tính** dưới góc nhìn thống kê và ranh giới sống còn giữa **Tương quan dự đoán (Prediction/Correlation)** với **Suy luận nhân quả (Causal Inference / Confounding)**.',
  ],
  boundaries: [
    'Sửa triệt để hai ngộ nhận phổ biến nhất trong khoa học thực nghiệm và khoa học dữ liệu: (1) **$p$-value KHÔNG phải là xác suất để giả thuyết không $H_0$ đúng** ($P(H_0 \\mid \\text{data})$), mà là xác suất quan sát được thống kê kiểm định cực đoan như mẫu hiện tại *giả sử rằng $H_0$ đang đúng* ($P(\\text{data cực đoan} \\mid H_0)$); và (2) **Khoảng tin cậy tần suất $95\\%$** là phát biểu về xác suất bao phủ của quy trình tạo khoảng khi lấy mẫu lặp lại (trước khi cố định mẫu), chứ sau khi đã thay số ra một khoảng cố định $[a, b]$ thì tham số hằng $\\theta$ nằm trong đó hoặc không (xác suất là $0$ hoặc $1$), khác về bản chất với khoảng tin cậy hậu nghiệm Bayes (credible interval) nơi $\\Theta$ được mô hình hóa là biến ngẫu nhiên.',
    'Phân biệt rõ ý nghĩa thống kê ($p < \\alpha$, dễ dàng đạt được chỉ bằng cách tăng kích thước mẫu $n$ lên thật lớn) với ý nghĩa thực tiễn / độ lớn hiệu ứng (effect size).',
  ],
  sources: [
    {
      sourceId: 'mit-1805-2022',
      locator: 'Classes 10a–10b: Introduction to Statistics and Maximum Likelihood Estimates; Classes 11–16: Bayesian Updating and Probability Intervals; Classes 17–20: NHST and Comparison of Inference; Classes 22–24: Confidence Intervals and Bootstrap; Class 26: Linear Regression',
      relationship: 'primary',
    },
  ],
  chapters: [
    {
      id: 'stat-sampling-descriptive-bias',
      title: 'Chương 1 — Quần thể, Mẫu ngẫu nhiên, Thống kê mô tả, Sai lệch dữ liệu và Phân rã Độ lệch – Phương sai (Bias–Variance)',
      overview: [
        'Chương mở đầu thiết lập khung khái niệm của suy luận thống kê: phân biệt tham số cố định của quần thể với thống kê biến thiên theo mẫu, nhận diện các sai lệch hệ thống trong thu thập dữ liệu mà thuật toán không thể tự sửa, và đánh giá chất lượng của một bộ ước lượng điểm qua Độ lệch (Bias) và Phương sai (Variance).',
      ],
      sources: [
        {
          sourceId: 'mit-1805-2022',
          locator: 'Class 10a: Introduction to Statistics; Class 22: Confidence Intervals Based on Normal Data (statistics and sample variance); Class 23b: Confidence Intervals for the Mean of Non-normal Data',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'stat-sdb-population-sample-biases',
          title: 'Phân biệt Tham số quần thể (Parameter) với Thống kê mẫu (Statistic), mẫu i.i.d. và các sai lệch thu thập dữ liệu (Sampling & Survivorship Bias)',
          level: 'core',
          paragraphs: [
            'Trong thống kê suy luận, ta cần phân biệt rạch ròi hai tầng đối tượng: **Quần thể / Phân phối sinh dữ liệu (Population / Data-generating distribution)** được đặc trưng bởi các **tham số thực chưa biết (parameters)** như kỳ vọng lý thuyết $\\mu$, phương sai $\\sigma^2$ hoặc tỷ lệ $p$; và **Mẫu quan sát (Sample)** gồm $n$ biến ngẫu nhiên $X_1, X_2, \\dots, X_n$ được rút ra từ quần thể đó (trong mô hình chuẩn là **mẫu ngẫu nhiên đơn giản độc lập cùng phân phối — i.i.d.**). Bất kỳ hàm số nào tính toán thuần túy từ dữ liệu mẫu mà không chứa tham số chưa biết — chẳng hạn trung bình mẫu $\\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i$ hay phương sai mẫu $S^2$ — đều được gọi là một **Thống kê (Statistic)** hoặc **Bộ ước lượng (Estimator) $\\hat{\\theta}(X_1, \\dots, X_n)$**. Vì phụ thuộc vào mẫu ngẫu nhiên $X_1, \\dots, X_n$, bản thân mỗi thống kê $\\hat{\\theta}$ là một **biến ngẫu nhiên** có một phân phối xác suất riêng gọi là **Phân phối mẫu (Sampling Distribution)**.',
            'Trước khi áp dụng bất kỳ công thức toán học nào, người học phải kiểm tra giả định đại diện của mẫu: nếu quá trình thu thập dữ liệu bị nhiễm **Sai lệch chọn mẫu (Sampling / Selection Bias)** (chỉ thu thập từ một nhóm con không đại diện cho quần thể mục tiêu), **Sai lệch sống sót (Survivorship Bias)** (chỉ quan sát các trường hợp còn tồn tại/thành công mà bỏ sót các trường hợp đã thất bại/rời bỏ hệ thống), hoặc **Sai lệch không phản hồi (Non-response Bias)**, thì ngay cả khi kích thước mẫu $n$ lên tới hàng chục triệu bản ghi (Big Data), trung bình mẫu vẫn hội tụ theo Luật số lớn về một giá trị **sai lệch hoàn toàn** so với tham số thực của quần thể.',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 10a: Introduction to Statistics; Class 17a: The Frequentist School of Statistics (parameters and repeated sampling)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'stat-sdb-descriptive-robust-summaries',
          title: 'Thống kê mô tả vị trí và độ phân tán: Trung bình (Mean) so với Trung vị (Median), Phương sai mẫu chia (n - 1) và Khoảng tứ phân vị (IQR)',
          level: 'core',
          paragraphs: [
            'Để tóm tắt một tập dữ liệu thực nghiệm $x_1, \\dots, x_n$, ta dùng các thước đo vị trí trung tâm và độ phân tán, nhưng mỗi thước đo có **độ bền vững (robustness)** rất khác nhau trước **dữ liệu ngoại lai (outliers)** và các phân phối lệch đuôi nặng (như độ trễ mạng tail latency hay phân phối thu nhập): **Trung bình mẫu (Sample Mean)** $\\bar{x} = \\frac{1}{n}\\sum_{i=1}^n x_i$ sử dụng mọi giá trị dữ liệu nhưng cực kỳ nhạy cảm với ngoại lai (chỉ cần 1 giá trị cực lớn cũng kéo lệch toàn bộ $\\bar{x}$); ngược lại, **Trung vị (Median — phân vị thứ $50\\%$, $Q_2$)** chỉ phụ thuộc vào phần tử đứng giữa sau khi sắp xếp nên hoàn toàn không bị ảnh hưởng khi một vài điểm ở đuôi tăng vọt. Đó là lý do trong kỹ nghệ hệ thống (`CS-33`), người ta luôn báo cáo độ trễ theo các phân vị `p50` (trung vị), `p95`, `p99` thay vì chỉ nhìn trung bình cộng.',
            'Tương tự đối với độ phân tán, bên cạnh **Khoảng tứ phân vị bền vững (Interquartile Range — $\\operatorname{IQR} = Q_3 - Q_1$)** chứa $50\\%$ dữ liệu ở giữa, thước đo phổ biến nhất là **Phương sai mẫu không chệch (Sample Variance)**: $$S^2 = \\frac{1}{n - 1} \\sum_{i=1}^n (X_i - \\bar{X})^2$$ Tiểu mục chứng minh đại số rõ ràng vì sao mẫu số của $S^2$ lại chia cho **$n - 1$ (hiệu chỉnh Bessel / Bessel’s correction)** thay vì chia cho $n$: bởi vì trung bình mẫu $\\bar{X}$ chính là điểm làm cực tiểu hóa tổng bình phương độ lệch trên chính mẫu đó, nên trung bình của $\\sum_{i=1}^n (X_i - \\bar{X})^2 = \\sum_{i=1}^n (X_i - \\mu)^2 - n(\\bar{X} - \\mu)^2$ có kỳ vọng bằng $n\\sigma^2 - n(\\sigma^2/n) = (n - 1)\\sigma^2$; chia cho $n - 1$ giúp kỳ vọng của bộ ước lượng khớp chính xác với phương sai thực của quần thể: $E[S^2] = \\sigma^2$.',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 6a: Continuous Random Variables: Expectation and Variance; Class 22: Confidence Intervals Based on Normal Data (sample mean and sample variance)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'stat-sdb-bias-variance-mse-consistency',
          title: 'Độ lệch (Bias), Phương sai (Variance), Sai số chuẩn (Standard Error), tính vững (Consistency) và Phân rã MSE = Bias^2 + Variance',
          level: 'core',
          paragraphs: [
            'Khi dùng một thống kê $\\hat{\\theta} = \\hat{\\theta}(X_1, \\dots, X_n)$ để ước lượng tham số thực $\\theta$, sai số ước lượng được đánh giá qua hai khía cạnh độc lập: (1) **Độ chệch / Độ lệch (Bias)**: $\\operatorname{Bias}(\\hat{\\theta}) = E[\\hat{\\theta}] - \\theta$ đo xem về trung bình qua nhiều lần lấy mẫu, bộ ước lượng có bắn trúng tâm $\\theta$ hay bị lệch hệ thống sang một bên (nếu $E[\\hat{\\theta}] = \\theta$, ta nói $\\hat{\\theta}$ là **bộ ước lượng không chệch / unbiased estimator**, như $E[\\bar{X}] = \\mu$ và $E[S^2] = \\sigma^2$); và (2) **Phương sai của bộ ước lượng $\\operatorname{Var}(\\hat{\\theta})$** cùng căn bậc hai của nó là **Sai số chuẩn (Standard Error — $\\operatorname{SE}(\\hat{\\theta}) = \\sqrt{\\operatorname{Var}(\\hat{\\theta})}$)** (ví dụ sai số chuẩn của trung bình mẫu là $\\operatorname{SE}(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}}$, giảm chậm theo căn bậc hai của kích thước mẫu $1/\\sqrt{n}$).',
            'Khi đo tổng chất lượng của bộ ước lượng bằng **Sai số bình phương trung bình (Mean Squared Error — $\\operatorname{MSE}(\\hat{\\theta}) = E\\big[(\\hat{\\theta} - \\theta)^2\\big]$)**, bằng cách thêm bớt kỳ vọng $E[\\hat{\\theta}]$ ở bên trong bình phương, tiểu mục chứng minh **Đẳng thức phân rã Độ lệch – Phương sai (Bias–Variance Decomposition)** — nguyên lý nền tảng của cả thống kê lẫn học máy (`CS-36`): $$\\operatorname{MSE}(\\hat{\\theta}) = E\\big[(\\hat{\\theta} - \\theta)^2\\big] = \\operatorname{Var}(\\hat{\\theta}) + \\big(\\operatorname{Bias}(\\hat{\\theta})\\big)^2$$ Đẳng thức này giải thích vì sao trong học máy và thống kê hiện đại (như hồi quy chính quy hóa Ridge/Lasso), đôi khi người ta chủ động chấp nhận một độ chệch nhỏ ($\\operatorname{Bias} \\neq 0$) để đổi lấy việc làm giảm mạnh phương sai $\\operatorname{Var}(\\hat{\\theta})$, giúp tổng sai số $\\operatorname{MSE}$ thấp hơn hẳn bộ ước lượng không chệch! Cuối cùng, một dãy ước lượng $\\hat{\\theta}_n$ được gọi là **vững (consistent)** nếu nó hội tụ theo xác suất tới tham số thực: với mọi $\\varepsilon > 0$, $P(|\\hat{\\theta}_n - \\theta| > \\varepsilon) \\to 0$ khi $n \\to \\infty$. Khi Bias và Variance đều tiến về $0$, MSE cũng tiến về $0$ và suy ra tính vững; đây là một **điều kiện đủ**, không phải định nghĩa tương đương cho mọi bộ ước lượng.',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 10a: Introduction to Statistics (estimator foundations); Class 22: Confidence Intervals Based on Normal Data (standard errors); the bias–variance identity in this topic is derived algebraically',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'stat-likelihood-mle-bayesian',
      title: 'Chương 2 — Hàm hợp lý (Likelihood), Ước lượng hợp lý cực đại (MLE) và Suy luận Bayes (Bayesian Inference)',
      overview: [
        'Chương này trình bày hai phương pháp xây dựng bộ ước lượng tham số từ nguyên lý gốc: cực đại hóa hàm log-hợp lý $L(\\theta) = P(\\text{data} \\mid \\theta)$ trong MLE (cơ sở của hầu hết các hàm mất mát Cross-Entropy và bình phương tối thiểu trong học máy), và cập nhật phân phối hậu nghiệm $f(\\theta \\mid \\text{data}) \\propto f(\\text{data} \\mid \\theta) f(\\theta)$ trong suy luận Bayes.',
      ],
      sources: [
        {
          sourceId: 'mit-1805-2022',
          locator: 'Class 10b: Maximum Likelihood Estimates; Classes 11–14: Discrete Priors, Probabilistic Prediction, and Continuous Priors/Data; Class 15: Beta Distributions and Conjugate Priors; Class 16b: Probability Intervals',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'stat-lmb-likelihood-function-mle-loss',
          title: 'Hàm hợp lý L(theta), Hàm Log-Likelihood ell(theta), Ước lượng hợp lý cực đại (MLE) và liên hệ với hàm mất mát Học máy',
          level: 'core',
          paragraphs: [
            'Giả sử mẫu dữ liệu quan sát được $x_1, x_2, \\dots, x_n$ được sinh độc lập từ phân phối có PMF hoặc PDF là $f(x \\mid \\theta)$. Khi giữ dữ liệu $x_1, \\dots, x_n$ cố định tại các giá trị thực tế vừa thu được và xem xác suất/mật độ đồng thời của mẫu như một **hàm số của tham số chưa biết $\\theta$**, ta thu được **Hàm hợp lý (Likelihood Function)**: $$L(\\theta) = f(x_1, x_2, \\dots, x_n \\mid \\theta) = \\prod_{i=1}^n f(x_i \\mid \\theta)$$ Nguyên lý **Ước lượng hợp lý cực đại (Maximum Likelihood Estimation — MLE)** chọn giá trị $\\hat{\\theta}_{\\text{MLE}}$ làm cho dữ liệu thực tế vừa quan sát được có khả năng xuất hiện cao nhất: $\\hat{\\theta}_{\\text{MLE}} = \\arg\\max_\\theta L(\\theta)$. Vì hàm logarit tự nhiên $\\ln(\cdot)$ là hàm tăng nghiêm ngặt bảo toàn điểm cực trị và biến tích $n$ thừa số (rất dễ bị tràn dưới số thực `underflow` về `0.0` trên máy tính khi $n$ lớn) thành **tổng các logarit**, trong cả giải tích lẫn lập trình ta luôn cực đại hóa **Hàm Log-Likelihood**: $$\\ell(\\theta) = \\ln L(\\theta) = \\sum_{i=1}^n \\ln f(x_i \\mid \\theta)$$ bằng cách giải phương trình đạo hàm (hoặc gradient) $\\frac{d\\ell}{d\\theta} = 0$ và kiểm tra điều kiện biên (chẳng hạn với $\\operatorname{Uniform}(0, \\theta)$ trên $x_i \\in [0, \\theta]$, $L(\\theta) = \\theta^{-n}$ giảm nghiêm ngặt trên $\\theta \\ge \\max_i x_i$ nên $\\hat{\\theta}_{\\text{MLE}} = \\max_i x_i$ nằm ngay tại biên chứ không phải nơi đạo hàm bằng $0$!).',
            'Tiểu mục chỉ ra mối liên hệ trực tiếp giữa MLE và **Học máy (`CS-36`, `CS-37`)**: việc cực đại hóa Log-Likelihood $\\max_\\theta \\sum_{i=1}^n \\ln P(y_i \\mid x_i; \\theta)$ hoàn toàn tương đương với việc **cực tiểu hóa hàm mất mát Âm Log-Likelihood (Negative Log-Likelihood — NLL)**: (1) Nếu giả thiết nhiễu tuân theo phân phối chuẩn Gaussian $y_i \\sim \\mathcal{N}(\\mathbf{w}^T \\mathbf{x}_i, \\sigma^2)$, thì cực đại hóa $\\ell(\\mathbf{w})$ chính là **cực tiểu hóa tổng bình phương sai số (Least Squares / MSE Loss)** $\\sum (y_i - \\mathbf{w}^T \\mathbf{x}_i)^2$; và (2) Nếu nhãn phân loại $y_i \\in \\{0, 1\\}$ tuân theo phân phối Bernoulli với xác suất dự đoán $\\hat{p}_i$, thì âm Log-Likelihood $-\\sum [y_i \\ln \\hat{p}_i + (1-y_i)\\ln(1-\\hat{p}_i)]$ chính là **hàm mất mát Binary Cross-Entropy**!',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 10b: Maximum Likelihood Estimates (Likelihood and Log-Likelihood)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'stat-lmb-bayesian-updating-conjugate-map',
          title: 'Suy luận Bayes: Phân phối tiên nghiệm (Prior), Hậu nghiệm (Posterior), Tiên nghiệm liên hợp (Beta–Binomial) và ước lượng MAP',
          level: 'core',
          paragraphs: [
            'Khác với trường phái tần suất (Frequentist — xem tham số $\\theta$ là một hằng số cố định chưa biết), **Trường phái suy luận Bayes (Bayesian Inference)** mô hình hóa sự bất định của chúng ta về tham số bằng cách xem bản thân $\\Theta$ là một **biến ngẫu nhiên** có **phân phối tiên nghiệm (Prior distribution) $f(\\theta)$** trước khi nhìn thấy dữ liệu. Khi thu thập được dữ liệu $D = (x_1, \\dots, x_n)$ có hàm hợp lý $f(D \\mid \\theta) = L(\\theta)$, định lý Bayes cập nhật niềm tin tiên nghiệm thành **phân phối hậu nghiệm (Posterior distribution) $f(\\theta \\mid D)$**: $$f(\\theta \\mid D) = \\frac{f(D \\mid \\theta)\\,f(\\theta)}{\\int f(D \\mid \\theta\')\\,f(\\theta\')\\,d\\theta\'} \\;\\propto\\; L(\\theta) \\cdot f(\\theta) \\quad (\\text{Posterior} \\propto \\text{Likelihood} \\times \\text{Prior})$$ (Mẫu số $\\int f(D \\mid \\theta\')f(\\theta\')\\,d\\theta\'$ không phụ thuộc vào $\\theta$ nên chỉ đóng vai trò hằng số chuẩn hóa giúp diện tích dưới hàm hậu nghiệm bằng $1$). Quá trình cập nhật có tính tuần tự tự nhiên: phân phối hậu nghiệm của ngày hôm nay trở thành phân phối tiên nghiệm khi có thêm dữ liệu mới vào ngày mai.',
            'Tiểu mục minh họa sức mạnh của **Tiên nghiệm liên hợp (Conjugate Priors)** qua cặp mô hình kinh điển **Beta–Binomial**: khi ước lượng xác suất thành công $p \\in [0, 1]$ của đồng xu hoặc tỷ lệ nhấp chuột (CTR), nếu chọn tiên nghiệm thuộc họ phân phối $\\operatorname{Beta}(a, b)$ có mật độ $f(p) \\propto p^{a-1}(1-p)^{b-1}$ và quan sát thấy $k$ lần thành công cùng $n - k$ lần thất bại (Likelihood $\\propto p^k(1-p)^{n-k}$), thì nhân Likelihood với Prior chỉ việc cộng số mũ để cho ngay phân phối hậu nghiệm cùng họ là **$\\operatorname{Beta}(a + k, b + n - k)$**! Nhờ đó, khi mới có rất ít dữ liệu (ví dụ tung $1$ lần ra ngửa: $n=1, k=1$), trong khi MLE kết luận cực đoan $\\hat{p}_{\\text{MLE}} = 1/1 = 100\\%$, thì kỳ vọng hậu nghiệm Bayes $\\frac{a + k}{a + b + n}$ (công thức làm trơn Laplace / additive smoothing khi $a=b=1$: $\\frac{k+1}{n+2}$) điều tiết ước lượng một cách hợp lý nhờ thông tin tiên nghiệm; còn khi dữ liệu $n \\to \\infty$, dữ liệu áp đảo hoàn toàn tiên nghiệm và hậu nghiệm hội tụ về cùng kết quả với MLE. Cuối cùng, điểm cực đại của mật độ hậu nghiệm $\\hat{\\theta}_{\\text{MAP}} = \\arg\\max_\\theta [\\ln L(\\theta) + \\ln f(\\theta)]$ được gọi là **Ước lượng hậu nghiệm cực đại (MAP)** — trong đó số hạng $-\\ln f(\\theta)$ với tiên nghiệm Gaussian chính là **số hạng chính quy hóa $L_2$ (Weight Decay / Ridge Regularization)** trong học máy!',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Classes 11, 13, and 14: Bayesian Updating with Discrete and Continuous Priors/Data; Class 15: Beta Distributions, Conjugate Priors: Beta and Normal',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'stat-lmb-credible-intervals-posterior-predictive',
          title: 'Khoảng tin cậy Bayes (Bayesian Credible Intervals) và Phân phối dự đoán hậu nghiệm (Posterior Predictive Distribution)',
          level: 'core',
          paragraphs: [
            'Vì suy luận Bayes cung cấp trọn vẹn hàm mật độ hậu nghiệm $f(\\theta \\mid D)$ của tham số $\\Theta$ khi đã biết dữ liệu $D$, ta định lượng độ bất định trực tiếp bằng một **Khoảng tin cậy Bayes mức $1 - \\alpha$ (Bayesian Credible Interval)** $[a, b]$ sao cho tích phân mật độ hậu nghiệm trên đoạn đó bằng $1 - \\alpha$ (ví dụ $95\\%$): $$P(a \\le \\Theta \\le b \\mid D) = \\int_a^b f(\\theta \\mid D)\\,d\\theta = 1 - \\alpha$$ (thường chọn khoảng đối xứng theo hai phân vị đuôi $\\alpha/2$ và $1 - \\alpha/2$ của phân phối hậu nghiệm, hoặc khoảng có mật độ hậu nghiệm cao nhất — HPD). Trong khung Bayes, phát biểu "sau khi quan sát dữ liệu $D$, xác suất để tham số $\\Theta$ nằm trong $[a, b]$ bằng $95\\%$" là hoàn toàn hợp lệ về mặt toán học.',
            'Hơn nữa, khi cần dự đoán một quan sát mới $X_{\\text{new}}$ trong tương lai, thay vì chỉ cắm một điểm ước lượng đơn lẻ $\\hat{\\theta}$ vào $f(x_{\\text{new}} \\mid \\hat{\\theta})$ (bỏ qua độ bất định của bản thân $\\hat{\\theta}$), suy luận Bayes lấy trung bình có trọng số qua mọi giá trị có thể của $\\theta$ theo mật độ hậu nghiệm để tạo ra **Phân phối dự đoán hậu nghiệm (Posterior Predictive Distribution)**: $f(x_{\\text{new}} \\mid D) = \\int f(x_{\\text{new}} \\mid \\theta)\\,f(\\theta \\mid D)\\,d\\theta$.',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 12a: Bayesian Updating: Probabilistic Prediction; Class 16b: Probability Intervals',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'stat-confidence-intervals-bootstrap',
      title: 'Chương 3 — Khoảng tin cậy tần suất (Frequentist Confidence Intervals), Phân phối Student-t và Tái lấy mẫu Bootstrap',
      overview: [
        'Chương này trình bày cách trường phái tần suất định lượng độ bất định khi tham số $\\theta$ được xem là hằng số cố định: xây dựng khoảng tin cậy ngẫu nhiên dựa trên thống kê chốt chuẩn hóa, sử dụng phân phối Student-$t$ với $n-1$ bậc tự do khi mẫu i.i.d. chuẩn có phương sai dương chưa biết, phân biệt kết quả chính xác này với xấp xỉ ngoài mô hình chuẩn, giải thích đúng xác suất bao phủ dài hạn và áp dụng phương pháp tái lấy mẫu Bootstrap bằng máy tính khi không biết phân phối lý thuyết.',
      ],
      sources: [
        {
          sourceId: 'mit-1805-2022',
          locator: 'Class 22 (Confidence Intervals Based on Normal Data), Class 23a (Confidence Intervals: Three Views), Class 23b (Mean of Non-normal Data), and Class 24 (Bootstrap Confidence Intervals)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'stat-cib-frequentist-ci-student-t',
          title: 'Xây dựng Khoảng tin cậy tần suất mức (1 - alpha), phân phối Student-t khi chưa biết sigma và giải thích đúng xác suất bao phủ',
          level: 'core',
          paragraphs: [
            'Trong thống kê tần suất, tham số thực $\\mu$ của quần thể là một **hằng số cố định**, còn trung bình mẫu $\\bar{X}$ là biến ngẫu nhiên. Dựa vào Định lý giới hạn trung tâm (hoặc khi dữ liệu chuẩn), biến chuẩn hóa $Z = \\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\approx \\mathcal{N}(0, 1)$ nằm trong đoạn đối xứng $[-z_{\\alpha/2}, z_{\\alpha/2}]$ với xác suất $1 - \\alpha$ (ví dụ với $1 - \\alpha = 95\\%, \\alpha = 0.05$, phân vị chuẩn $z_{0.025} \\approx 1.96$). Giải bất đẳng thức $-z_{\\alpha/2} \\le \\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\le z_{\\alpha/2}$ để cô lập $\\mu$ ở giữa cho ta **Khoảng tin cậy tần suất mức $1 - \\alpha$**: $$\\left[ \\bar{X} - z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}, \\; \\bar{X} + z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} \\right]$$ Trong thực tế, phương sai quần thể $\\sigma^2$ hầu như không bao giờ biết trước mà phải thay bằng độ lệch chuẩn mẫu $S = \\sqrt{\\frac{1}{n-1}\\sum (X_i - \\bar{X})^2}$. Nếu $X_1, \\dots, X_n$ là mẫu i.i.d. từ $\\mathcal{N}(\\mu, \\sigma^2)$ với $n \\ge 2$ và $\\sigma^2 > 0$, việc thay $\\sigma$ bằng độ lệch chuẩn mẫu $S$ cho thống kê $\\frac{\\bar{X} - \\mu}{S / \\sqrt{n}}$ có **phân phối Student-$t$ chính xác với $n - 1$ bậc tự do ($t_{n-1}$)** — một phân phối hình chuông đối xứng quanh $0$ nhưng có **đuôi dày hơn** $\\mathcal{N}(0, 1)$ (và hội tụ về $\\mathcal{N}(0, 1)$ khi $n \\to \\infty$), cho khoảng tin cậy chính xác trong mô hình chuẩn là $\\bar{X} \\pm t_{n-1, \\alpha/2} \\frac{S}{\\sqrt{n}}$. Ngoài mô hình chuẩn, không thể suy ra phân phối Student-$t$ chính xác chỉ từ việc thay $\\sigma$ bằng $S$: với mẫu i.i.d. đủ lớn và phương sai hữu hạn dương có thể dùng xấp xỉ lớn mẫu, nhưng phải thận trọng khi mẫu nhỏ, đuôi nặng hoặc các quan sát phụ thuộc nhau.',
            'Tiểu mục giải thích rõ **ý nghĩa đúng đắn của Khoảng tin cậy tần suất $95\\%$**: trong biểu thức $P\\left(\\mu \\in \\left[\\bar{X} - c, \\bar{X} + c\\right]\\right) = 0.95$, cái ngẫu nhiên là **hai đầu mút của khoảng $\\left[\\bar{X} - c, \\bar{X} + c\\right]$** (nó nhảy sang vị trí mới mỗi khi lấy một mẫu dữ liệu mới), còn $\\mu$ đứng yên! Vì vậy, "độ tin cậy $95\\%$" là phát biểu về **tỷ lệ thành công dài hạn của quy trình tạo khoảng**: nếu lặp lại việc lấy mẫu độc lập $100$ lần và tính $100$ khoảng tin cậy, thì về kỳ vọng có khoảng $95$ khoảng sẽ chụp trúng hằng số $\\mu$ và $5$ khoảng trượt ra ngoài. Một khi đã thu thập xong một mẫu cụ thể và tính ra con số $[12.4, 15.8]$, tuyệt đối không được nói "tham số $\\mu$ có xác suất $95\\%$ rơi vào $[12.4, 15.8]$" trong khung tần suất.',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 22, §5.1–5.2: t-Confidence Intervals for the Mean from Normal Data; Class 23a–23b: Three Views and Non-normal Data',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'stat-cib-bootstrap-resampling-principle',
          title: 'Phương pháp Tái lấy mẫu Bootstrap (Empirical & Parametric Bootstrap): dùng máy tính ước lượng phân phối mẫu của thống kê bất kỳ',
          level: 'core',
          paragraphs: [
            'Các công thức giải tích dùng $\\mathcal{N}(0, 1)$ hay $t_{n-1}$ ở trên chỉ áp dụng thuận lợi cho **trung bình mẫu $\\bar{X}$**. Vậy nếu ta cần tìm sai số chuẩn và khoảng tin cậy cho **trung vị mẫu (sample median)**, phân vị `p99` của độ trễ hệ thống, hệ số tương quan, hay tỷ số hai đại lượng mà không hề có công thức giải tích cho phân phối mẫu của chúng và cũng không thể đi thu thập thêm $1000$ mẫu mới từ thế giới thực thì làm thế nào? **Phương pháp Bootstrap** (do Bradley Efron đề xuất) giải quyết bài toán này bằng nguyên lý thay thế (plug-in principle): vì hàm phân phối thực nghiệm của mẫu hiện tại $(x_1, x_2, \\dots, x_n)$ là xấp xỉ tốt nhất mà ta có về phân phối của quần thể, ta dùng máy tính để **lấy mẫu lại có hoàn lại (resampling with replacement)** từ chính mẫu gốc!',
            'Cụ thể, trong **Bootstrap thực nghiệm (Empirical / Nonparametric Bootstrap)**, từ mẫu gốc kích thước $n$, máy tính rút ngẫu nhiên **có hoàn lại** $n$ phần tử để tạo thành một mẫu giả lập $x_1^*, x_2^*, \\dots, x_n^*$ và tính giá trị thống kê mục tiêu $\\hat{\\theta}^*$ trên mẫu đó; lặp lại quy trình này $B$ lần (ví dụ $B = 10\\,000$ lần trên CPU chỉ mất vài mili-giây) tạo ra $B$ giá trị $\\hat{\\theta}_1^*, \\dots, \\hat{\\theta}_B^*$. Độ lệch chuẩn của $B$ giá trị này ước lượng trực tiếp sai số chuẩn $\\operatorname{SE}(\\hat{\\theta})$, và độ lệch phân phối của $(\\hat{\\theta}^* - \\hat{\\theta})$ quanh $0$ ước lượng trực tiếp phân phối của $(\\hat{\\theta} - \\theta)$ để lập khoảng tin cậy Bootstrap. Tiểu mục cũng nêu rõ **giới hạn của Bootstrap**: nếu mẫu gốc ban đầu quá nhỏ ($n$ rất bé) hoặc bị lệch chọn mẫu không đại diện cho quần thể, hoặc thống kê phụ thuộc vào cực trị biên (như $\\max X_i$), thì việc lấy mẫu lại từ chính mẫu gốc đó không thể tự sinh ra thông tin còn thiếu.',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 24: Bootstrap Confidence Intervals',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'stat-hypothesis-testing-regression-causality',
      title: 'Chương 4 — Kiểm định giả thuyết (NHST, p-value, Power), Hồi quy tuyến tính và Ranh giới Dự đoán – Nhân quả',
      overview: [
        'Chương cuối trang bị khung lý thuyết chặt chẽ cho việc ra quyết định dựa trên dữ liệu và thiết kế thử nghiệm A/B (A/B testing): kiểm định giả thuyết thống kê (sai lầm loại I/II, lực kiểm định power, định nghĩa xác suất có điều kiện của $p$-value, hiệu chỉnh đa giả thuyết), phân tích hồi quy tuyến tính và phân biệt mối tương quan dự đoán với tác động nhân quả trước biến gây nhiễu (confounder).',
      ],
      sources: [
        {
          sourceId: 'mit-1805-2022',
          locator: 'Classes 17a–19: The Frequentist School of Statistics and NHST I–III; Class 26: Linear Regression',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'stat-htrc-nhst-errors-power-pvalue',
          title: 'Kiểm định giả thuyết (H0 vs HA), Sai lầm loại I/II, Lực kiểm định (Power), bản chất xác suất có điều kiện của p-value và Kiểm định đa giả thuyết',
          level: 'core',
          paragraphs: [
            'Trong **Kiểm định giả thuyết thống kê (Null Hypothesis Significance Testing — NHST)** (chẳng hạn kiểm tra xem thuật toán gợi ý mới $B$ có làm tăng tỷ lệ chuyển đổi so với thuật toán hiện hành $A$ trong một thử nghiệm A/B hay không), ta thiết lập hai giả thuyết đối lập: **Giả thuyết không (Null Hypothesis $H_0$)** đại diện cho trạng thái mặc định "không có sự khác biệt thực sự / hiệu ứng bằng $0$" (mọi chênh lệch quan sát được chỉ là do biến thiên ngẫu nhiên của mẫu), và **Giả thuyết đối (Alternative Hypothesis $H_A$)** đại diện cho hiệu ứng thực sự tồn tại. Từ mẫu dữ liệu, ta tính một **Thống kê kiểm định (Test Statistic) $T$** (như thống kê $z$, thống kê $t$ một mẫu/hai mẫu, hoặc thống kê $\\chi^2$ kiểm định tính độc lập / độ khớp). Vì quyết định bác bỏ hay không bác bỏ $H_0$ dựa trên mẫu ngẫu nhiên, luôn có hai loại sai lầm: **Sai lầm loại I (Type I Error — False Positive)** là bác bỏ $H_0$ khi thực tế $H_0$ đúng (được khống chế bởi **mức ý nghĩa $\\alpha = P(\\text{Bác bỏ } H_0 \\mid H_0)$**, thường đặt $\\alpha = 0.05$ hoặc $0.01$); và **Sai lầm loại II (Type II Error — False Negative)** là không bác bỏ được $H_0$ khi thực tế $H_A$ đúng (với xác suất $\\beta$). Đại lượng **$1 - \\beta = P(\\text{Bác bỏ } H_0 \\mid H_A)$** được gọi là **Lực kiểm định (Statistical Power)** — khả năng phát hiện ra hiệu ứng thực khi nó tồn tại, phụ thuộc vào cỡ mẫu $n$, độ lớn hiệu ứng thực (effect size) và mức $\\alpha$ (dùng để tính cỡ mẫu cần thiết trước khi chạy thí nghiệm).',
            '**Giá trị $p$ ($p$-value)** được định nghĩa chính xác là: **xác suất (tính dưới giả định $H_0$ là đúng!) để thống kê kiểm định $T$ nhận giá trị cực đoan bằng hoặc hơn giá trị $t_{\\text{obs}}$ vừa quan sát được trong mẫu**: $$p\\text{-value} = P(T \\text{ cực đoan hơn } t_{\\text{obs}} \\mid H_0 \\text{ đúng})$$ Ta bác bỏ $H_0$ ở mức $\\alpha$ khi $p\\text{-value} \\le \\alpha$. Tiểu mục nhấn mạnh ba sai lầm nghiêm trọng phải tránh: (1) **$p$-value KHÔNG phải là $P(H_0 \\mid \\text{data})$** (nhầm lẫn chiều điều kiện $P(\\text{data} \\mid H_0)$ với $P(H_0 \\mid \\text{data})$ mà quên tỷ lệ nền Prior của Định lý Bayes); (2) **$p$-value nhỏ (ý nghĩa thống kê) không đồng nghĩa với hiệu ứng lớn (ý nghĩa thực tiễn)**: với cùng một độ lớn hiệu ứng khác $0$ và mô hình phù hợp, tăng cỡ mẫu thường giúp phát hiện những khác biệt rất nhỏ; mức $p$ cụ thể còn phụ thuộc tỷ lệ nền, phương sai và thiết kế lấy mẫu, nên luôn phải báo cáo kèm **Khoảng tin cậy của độ lớn hiệu ứng (Effect Size)**; và (3) **Bẫy kiểm định đa giả thuyết (Multiple Testing / $p$-hacking)**: nếu thử nghiệm đồng thời $m = 20$ đặc trưng hoàn toàn vô tác dụng ($H_0$ đúng hết) ở mức $\\alpha = 0.05$, thì kỳ vọng sẽ có $20 \\times 0.05 = 1$ đặc trưng ngẫu nhiên vượt ngưỡng $p < 0.05$ (nếu các phép kiểm định độc lập, xác suất có ít nhất 1 báo động giả là $1 - 0.95^{20} \\approx 64\\%$!), do đó bắt buộc phải hiệu chỉnh ngưỡng (như **Hiệu chỉnh Bonferroni** chia mức ý nghĩa cho số phép thử $\\alpha / m$, hoặc kiểm soát tỷ lệ phát hiện sai — FDR).',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Classes 17b–19: NHST I–III (test statistics, p-values, z/t tests, and chi-square tests)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'stat-htrc-linear-regression-residuals',
          title: 'Mô hình Hồi quy tuyến tính thống kê Y = X beta + epsilon, tính chất của ước lượng OLS, hệ số R^2 và chẩn đoán phần dư',
          level: 'core',
          paragraphs: [
            'Ở Chương 4 của Đại số tuyến tính (`CS-10`), ta đã tìm nghiệm bình phương tối thiểu $\\hat{\\boldsymbol{\\beta}} = (X^T X)^{-1} X^T \\mathbf{y}$ như một bài toán hình học chiếu vector $\\mathbf{y}$ lên không gian cột $C(X)$. Sang môn Thống kê, ta đặt mô hình xác suất sinh dữ liệu $Y_i = \\beta_0 + \\beta_1 x_{i,1} + \\dots + \\beta_p x_{i,p} + \\varepsilon_i$ (viết dưới dạng ma trận $\\mathbf{Y} = X\\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon}$), trong đó các sai số ngẫu nhiên $\\varepsilon_i$ có kỳ vọng bằng $0$ ($E[\\varepsilon_i] = 0$), có cùng phương sai không đổi $\\operatorname{Var}(\\varepsilon_i) = \\sigma^2$ (**tính phương sai đồng nhất / homoscedasticity**) và đôi một không tương quan. Dưới các giả định này (và khi thêm giả định $\\varepsilon_i \\sim \\mathcal{N}(0, \\sigma^2)$ thì ước lượng bình phương tối thiểu OLS trùng khớp hoàn toàn với ước lượng hợp lý cực đại MLE!), bộ ước lượng $\\hat{\\boldsymbol{\\beta}} = (X^T X)^{-1} X^T \\mathbf{Y}$ là **không chệch ($E[\\hat{\\boldsymbol{\\beta}}] = \\boldsymbol{\\beta}$)** và có ma trận hiệp phương sai $\\operatorname{Cov}(\\hat{\\boldsymbol{\\beta}}) = \\sigma^2 (X^T X)^{-1}$.',
            'Nhờ Định lý Pythagoras trực giao giữa vector khớp $\\hat{\\mathbf{y}} = X\\hat{\\boldsymbol{\\beta}}$ và vector phần dư $\\mathbf{e} = \\mathbf{y} - \\hat{\\mathbf{y}}$, tổng biến thiên toàn phần $\\operatorname{TSS} = \\sum (y_i - \\bar{y})^2$ tách thành tổng biến thiên giải thích được bởi mô hình $\\operatorname{ESS} = \\sum (\\hat{y}_i - \\bar{y})^2$ cộng với tổng bình phương phần dư $\\operatorname{RSS} = \\sum (y_i - \\hat{y}_i)^2$, định nghĩa **Hệ số xác định $R^2 = 1 - \\frac{\\operatorname{RSS}}{\\operatorname{TSS}} \\in [0, 1]$**. Tiểu mục lưu ý rõ việc kiểm tra đồ thị phần dư (residual plots) để phát hiện quan hệ phi tuyến bị bỏ sót hoặc phương sai thay đổi (heteroscedasticity), cũng như hiện tượng đa cộng tuyến (multicollinearity) khi các cột của $X$ gần phụ thuộc tuyến tính làm ma trận $X^T X$ suy biến và đẩy phương sai của $\\hat{\\boldsymbol{\\beta}}$ tăng vọt.',
          ],
          sources: [
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 26: Linear Regression (Reading and Slides: Linear and Multiple Regression)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'stat-htrc-correlation-confounding-causality',
          title: 'Ranh giới giữa Tương quan dự đoán và Suy luận nhân quả: Biến gây nhiễu (Confounder), Nghịch lý Simpson và Thí nghiệm ngẫu nhiên hóa (RCT / A/B Test)',
          level: 'core',
          paragraphs: [
            'Một mô hình thống kê hay học máy có thể đạt độ chính xác dự đoán rất cao nhờ khai thác mối tương quan giữa biến đầu vào $X$ và biến kết quả $Y$ (tức $P(Y \\mid X)$), nhưng **Tương quan không suy ra Nhân quả (Correlation does not imply Causation)**: việc quan sát thấy những người dùng nhận nhiều email thông báo ($X$ cao) có mức độ chi tiêu cao ($Y$ cao) hoàn toàn không chứng minh rằng "nếu hệ thống chủ động gửi dồn dập thêm email cho người dùng (can thiệp lên $X$) thì họ sẽ chi tiêu nhiều hơn". Nguyên nhân phổ biến nhất tạo ra tương quan giả tạo giữa $X$ và $Y$ là sự tồn tại của một **Biến gây nhiễu ẩn (Confounding Variable / Confounder) $Z$** cùng tác động lên cả $X$ lẫn $Y$ ($X \\leftarrow Z \\to Y$, chẳng hạn mức độ gắn bó sẵn có của người dùng $Z$ vừa khiến họ bật nhận nhiều thông báo $X$, vừa khiến họ mua hàng nhiều $Y$). Thậm chí, khi một biến gây nhiễu phân tầng bị gộp chung lại mà không kiểm soát, chiều của mối liên hệ có thể **đảo ngược hoàn toàn** giữa từng nhóm con và toàn thể — hiện tượng nổi tiếng gọi là **Nghịch lý Simpson (Simpson’s Paradox)**.',
            'Tiểu mục chốt lại sự khác biệt cơ chế giữa hai câu hỏi: (1) **Câu hỏi dự đoán quan sát**: "Khi thấy $X = x$, giá trị kỳ vọng của $Y$ là bao nhiêu?" — chỉ cần phân phối có điều kiện $E[Y \\mid X = x]$ từ dữ liệu quan sát thụ động; và (2) **Câu hỏi can thiệp nhân quả (Causal Intervention)**: "Nếu ta thay đổi chính sách/thuật toán để áp đặt $X := x$, kết quả $Y$ sẽ thay đổi ra sao?". Để trả lời câu hỏi nhân quả mà hạn chế sai lệch do phân bổ điều trị liên quan tới biến gây nhiễu $Z$, tiêu chuẩn vàng trong khoa học máy tính và khoa học thực nghiệm là **Thí nghiệm đối chứng ngẫu nhiên hóa (Randomized Controlled Trial — RCT / Online A/B Testing)**: việc dùng bộ sinh ngẫu nhiên chia người dùng vào nhóm thử nghiệm (Treatment $T=1$) và nhóm đối chứng (Control $T=0$) làm phân bổ điều trị độc lập với các đặc điểm có trước can thiệp theo cơ chế ngẫu nhiên hóa. Hai mẫu hữu hạn vẫn có thể mất cân bằng ngẫu nhiên; chênh lệch quan sát phải được phân tích cùng độ bất định. Diễn giải tác động nhân quả còn cần giả định phù hợp về tuân thủ phân bổ, thiếu dữ liệu, đo lường và sự can thiệp giữa người dùng; không phải mọi chênh lệch trong một lần thử đều là hiệu ứng thực sự.',
          ],
          sources: [
            { sourceId: 'openintro-statistics', locator: 'Chapter 1 resources, §1.3 Data collection principles and §1.4 Experiments (random assignment, controls and experimental design)', relationship: 'primary' },
            {
              sourceId: 'mit-1805-2022',
              locator: 'Class 7b: Covariance and Correlation; Class 26: Linear Regression (association foundations, not a complete treatment of causal inference)',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-6042j-2015',
              locator: 'MCS 2015 §17.6: Simpson’s Paradox (aggregation and the reversal of conditional associations)',
              relationship: 'supplementary',
            },
          ],
        },
      ],
    },
  ],
};
