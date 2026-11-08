export const DISCRETE_MATH_CHAPTERS_9_TO_10 = [
  {
    id: 'dm-recurrences',
    title: 'Chương 9 — Hệ thức đệ quy (Recurrence Relations)',
    overview: [
      'Hệ thức đệ quy (recurrence relation) là phương trình biểu diễn số hạng thứ $n$ của một dãy thông qua một hoặc nhiều số hạng đứng trước nó từ một mốc chỉ số trở đi, kết hợp với các điều kiện đầu (initial conditions) để xác định duy nhất toàn bộ dãy. Trong Khoa học Máy tính, hệ thức đệ quy xuất hiện ở khắp nơi: từ việc đếm số cấu trúc tổ hợp có ràng buộc (xâu nhị phân tránh mẫu, lát gạch, Tháp Hà Nội) đến phương trình biểu diễn thời gian thực thi của các thuật toán đệ quy và quy hoạch động.',
      'Chương này trình bày một cách hệ thống và trọn vẹn lý thuyết giải hệ thức đệ quy: bắt đầu từ mô hình hóa bài toán thành phương trình truy hồi và vai trò của bậc truy hồi đối với số điều kiện đầu; phương pháp khai triển lặp kết hợp chứng minh quy nạp; lý thuyết không gian nghiệm của hệ thức đệ quy tuyến tính thuần nhất hệ số hằng và phương trình đặc trưng trong trường hợp nghiệm đơn phân biệt; cấu trúc nghiệm bội dạng $n^j r^n$ và nghiệm phức liên hợp khi đa thức đặc trưng có nghiệm lặp hoặc nghiệm phức; phương pháp hệ số bất định (kèm quy tắc nhân $n^s$ khi cộng hưởng) cho hệ không thuần nhất; và cuối cùng là ranh giới điều kiện áp dụng giữa phương trình đặc trưng với các hệ thức chia để trị thuộc Môn CS-16.',
    ],
    sources: [
      {
        sourceId: 'dmoi-3e',
        locator: 'Chapter 2: Sequences (§2.1 Describing Sequences & §2.4 Solving Recurrence Relations)',
        relationship: 'primary',
      },
      {
        sourceId: 'mit-6042j-2015',
        locator: 'Chapter 21: Recurrences (§21.1 The Towers of Hanoi & §21.4 Linear Recurrences)',
        relationship: 'primary',
      },
    ],
    topics: [
      {
        id: 'dm-recurrences-modeling',
        title: 'Khái niệm hệ thức đệ quy, bậc của hệ thức, điều kiện đầu và mô hình hóa bài toán',
        level: 'core',
        paragraphs: [
          'Một hệ thức đệ quy (recurrence relation) cho dãy $(a_n)_{n \\ge 0}$ là một phương trình liên hệ các số hạng của dãy tại các chỉ số lệch nhau từ một mốc $n \\ge n_0$ trở đi; khi hệ thức liên hệ $a_n$ với các số hạng đứng trước thuộc cửa sổ lùi hữu hạn $a_{n-1}, a_{n-2}, \\dots, a_{n-k}$ (trong đó cả $a_n$ và $a_{n-k}$ đều thực sự xuất hiện), số nguyên dương $k$ được gọi là bậc (order) của hệ thức truy hồi. Bản thân phương trình truy hồi chỉ quy định quy luật liên hệ giữa các số hạng liên tiếp mà chưa xác định một dãy duy nhất nếu thiếu các điều kiện đầu (initial conditions). Tuy nhiên, để $k$ điều kiện đầu $a_0, a_1, \\dots, a_{k-1}$ xác định **duy nhất** toàn bộ dãy $(a_n)_{n \\ge 0}$ theo chiều tăng của chỉ số, hệ thức đệ quy phải viết được dưới dạng truy hồi tiến tường minh đơn trị $a_n = F(n, a_{n-1}, \\dots, a_{n-k})$ mà vế phải luôn xác định trên miền giá trị của dãy với mọi $n \\ge k$ (ngược lại, các quan hệ ẩn hoặc phi tuyến đa trị như $a_n^2 = a_{n-1}$, hoặc biểu thức phân thức có mẫu số triệt tiêu tại một chỉ số $n$, có thể sinh ra nhiều dãy nghiệm hoặc không tồn tại nghiệm). Đối với lớp quan trọng nhất là hệ thức đệ quy *tuyến tính thuần nhất bậc $k$* dạng $a_n = c_1 a_{n-1} + \\dots + c_k a_{n-k}$ với $c_k \\neq 0$, điều kiện đơn trị này luôn thỏa mãn theo cả hai chiều chỉ số và tập tất cả các nghiệm tạo thành một không gian vector đúng $k$ chiều được định vị duy nhất bởi bộ $k$ giá trị đầu $(a_0, \\dots, a_{k-1})$.',
          'Kỹ năng nền tảng nhất khi làm việc với hệ thức đệ quy là mô hình hóa bài toán đếm hoặc bài toán quá trình thành phương trình truy hồi bằng cách phân hoạch tập các cấu hình kích thước $n$ theo lựa chọn ở vị trí cuối cùng (hoặc đầu tiên) thành các lớp rời nhau quy về kích thước nhỏ hơn. Trong bài toán Tháp Hà Nội với $n$ đĩa, để chuyển $n$ đĩa từ cọc nguồn sang cọc đích mà không bao giờ đặt đĩa lớn lên đĩa nhỏ, ta bắt buộc phải chuyển $n-1$ đĩa trên cùng sang cọc trung gian ($T_{n-1}$ bước), chuyển đĩa lớn nhất sang cọc đích ($1$ bước), rồi chuyển $n-1$ đĩa từ cọc trung gian về cọc đích ($T_{n-1}$ bước), thu được hệ bậc nhất $T_n = 2 T_{n-1} + 1$ với điều kiện đầu $T_0 = 0$ (hoặc $T_1 = 1$). Tương tự, khi đếm số xâu nhị phân độ dài $n$ không chứa hai bit `11` liên tiếp, ta phân hoạch theo bit cuối cùng: nếu bit cuối là `0` thì $n-1$ bit đầu là bất kỳ xâu hợp lệ nào độ dài $n-1$ (có $a_{n-1}$ xâu); nếu bit cuối là `1` thì bit kế trước bắt buộc phải là `0` và $n-2$ bit đầu là xâu hợp lệ độ dài $n-2$ (có $a_{n-2}$ xâu), dẫn tới hệ thức Fibonacci $a_n = a_{n-1} + a_{n-2}$ với $n \\ge 2$ và hai điều kiện đầu $a_0 = 1, a_1 = 2$.',
        ],
        sources: [
          {
            sourceId: 'dmoi-3e',
            locator: 'Chapter 2: §2.1 Describing Sequences & §2.4 Solving Recurrence Relations (Introduction and Modeling)',
            relationship: 'primary',
          },
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 21: §21.1 The Towers of Hanoi & §21.4.1 Climbing Stairs / Fibonacci Modeling',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-recurrences-iteration-induction',
        title: 'Phương pháp khai triển lặp (Iteration / Unrolling), sai phân triệt tiêu và chứng minh bằng quy nạp',
        level: 'core',
        paragraphs: [
          'Trước khi dùng tới các công cụ đại số bậc cao, phương pháp trực tiếp nhất để tìm công thức dạng đóng (closed-form solution) của các hệ thức đệ quy bậc nhất dạng $a_n = c \\cdot a_{n-1} + g(n)$ là phương pháp khai triển lặp ngược (backward substitution / unrolling) hoặc khai triển sai phân triệt tiêu (telescoping). Trong khai triển lặp ngược, ta thay thế liên tiếp $a_{n-1} = c \\cdot a_{n-2} + g(n-1)$, rồi thay $a_{n-2}$ qua $a_{n-3}$... sau $i$ bước khai triển ta nhận diện mẫu tổng quát $a_n = c^i a_{n-i} + \\sum_{j=0}^{i-1} c^j g(n-j)$. Khi đẩy số bước khai triển chạm tới điều kiện đầu tại $i = n$ (tức $n - i = 0$), biểu thức quy hoàn toàn về một tổng hữu hạn quen thuộc (cấp số cộng, cấp số nhân hoặc tổng sai phân): chẳng hạn với Tháp Hà Nội $T_n = 2 T_{n-1} + 1$, sau $n$ bước khai triển ta được $T_n = 2^n T_0 + \\sum_{j=0}^{n-1} 2^j = 2^n - 1$; với hệ $a_n = a_{n-1} + n$, tổng sai phân $\\sum_{k=1}^n (a_k - a_{k-1}) = a_n - a_0$ cho ngay $a_n = a_0 + \\frac{n(n+1)}{2}$.',
          'Một nguyên tắc phương pháp luận bắt buộc trong Toán rời rạc là phân biệt rõ quá trình *khám phá công thức* (heuristic discovery qua khai triển vài bước rồi nhận diện quy luật dấu chấm lửng `...`) với quá trình *chứng minh tính đúng đắn* của công thức đó. Mọi biểu thức dạng đóng dự đoán được từ phép khai triển lặp đều có thể chứa sai sót ở chỉ số biên của dấu tổng hoặc số mũ; do đó, bước khép kín quy trình chuẩn mực là sử dụng Quy nạp toán học (thường hoặc mạnh tùy theo bậc $k$ của hệ thức) để kiểm chứng rằng công thức dạng đóng thỏa mãn tất cả các điều kiện đầu và thỏa mãn chính xác phương trình truy hồi tại bước chuyển tiếp.',
        ],
        sources: [
          {
            sourceId: 'dmoi-3e',
            locator: 'Chapter 2: §2.4 Solving Recurrence Relations — Telescoping and Iteration',
            relationship: 'primary',
          },
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 21: §21.1.2 Guess and Verify by Induction',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-recurrences-linear-homogeneous-distinct',
        title: 'Hệ thức đệ quy tuyến tính thuần nhất hệ số hằng và Phương trình đặc trưng (Nghiệm đơn phân biệt)',
        level: 'core',
        paragraphs: [
          'Một hệ thức đệ quy được gọi là *tuyến tính thuần nhất hệ số hằng* (linear homogeneous recurrence relation with constant coefficients) bậc $k$ nếu nó viết được dưới dạng chuẩn $a_n - c_1 a_{n-1} - c_2 a_{n-2} - \\dots - c_k a_{n-k} = 0$, trong đó các hệ số $c_1, c_2, \\dots, c_k$ là các hằng số cố định (không phụ thuộc vào $n$), $c_k \\neq 0$, các số hạng $a_{n-i}$ chỉ xuất hiện ở bậc nhất (tuyến tính) và vế phải bằng $0$ (thuần nhất). Tính chất cấu trúc cốt lõi của hệ tuyến tính thuần nhất là Nguyên lý chồng chất nghiệm (Superposition / Linearity Principle): nếu hai dãy $(u_n)$ và $(v_n)$ đều là nghiệm của phương trình thuần nhất, thì mọi tổ hợp tuyến tính $w_n = \\alpha u_n + \\beta v_n$ (với hằng số $\\alpha, \\beta$ bất kỳ) cũng là nghiệm; hơn nữa, tập hợp tất cả các nghiệm của phương trình bậc $k$ tạo thành một không gian vector có số chiều đúng bằng $k$.',
          'Vì nghiệm của phương trình bậc nhất $a_n = c_1 a_{n-1}$ có dạng hàm mũ $a_n = r^n$, ta tìm kiếm các nghiệm cơ sở khác không có dạng $a_n = r^n$ ($r \\neq 0$) cho hệ bậc $k$. Thay $a_n = r^n$ vào phương trình thuần nhất và chia hai vế cho $r^{n-k}$, ta thu được Phương trình đặc trưng (Characteristic Equation): $r^k - c_1 r^{k-1} - c_2 r^{k-2} - \\dots - c_{k-1} r - c_k = 0$. Khi đa thức đặc trưng bậc $k$ này có đúng $k$ nghiệm đơn phân biệt $r_1, r_2, \\dots, r_k$, thì $k$ dãy hàm mũ $(r_1^n), (r_2^n), \\dots, (r_k^n)$ là độc lập tuyến tính (nhờ định thức Vandermonde của các nghiệm phân biệt khác $0$) và lập thành một cơ sở của không gian nghiệm. Khi đó, nghiệm tổng quát của hệ thuần nhất có dạng duy nhất $a_n = \\alpha_1 r_1^n + \\alpha_2 r_2^n + \\dots + \\alpha_k r_k^n$, và các hằng số $\\alpha_1, \\dots, \\alpha_k$ được xác định duy nhất bằng cách giải hệ $k$ phương trình tuyến tính sinh ra từ $k$ điều kiện đầu $a_0, a_1, \\dots, a_{k-1}$ (điển hình như công thức Binet cho dãy Fibonacci từ phương trình $r^2 - r - 1 = 0$ với hai nghiệm $r_{1,2} = \\frac{1 \\pm \\sqrt{5}}{2}$).',
        ],
        sources: [
          {
            sourceId: 'dmoi-3e',
            locator: 'Chapter 2: §2.4 Solving Recurrence Relations — The Characteristic Root Technique (Distinct Roots)',
            relationship: 'primary',
          },
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 21: §21.4.1 Solving Homogeneous Linear Recurrences (Characteristic Equation and Distinct Roots)',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-recurrences-repeated-complex-roots',
        title: 'Nghiệm bội của phương trình đặc trưng (Repeated Roots) và trường hợp Nghiệm phức liên hợp',
        level: 'core',
        paragraphs: [
          'Khi đa thức đặc trưng $P(r) = r^k - c_1 r^{k-1} - \\dots - c_k$ có nghiệm bội (repeated root), số nghiệm phân biệt ít hơn $k$ nên chỉ riêng các dãy dạng $r^n$ không đủ tạo thành cơ sở $k$ chiều cho không gian nghiệm. Cơ chế toán học giải thích các nghiệm bổ sung xuất phát từ tính chất của nghiệm bội: nếu $r$ là nghiệm có bội $m \\ge 2$ của $P(x) = 0$, thì $r$ đồng thời là nghiệm của các đạo hàm hình thức $P\'(x) = 0, P\'\'(x) = 0, \\dots, P^{(m-1)}(x) = 0$ (hoặc nhìn hoàn toàn bằng đại số sai phân qua toán tử dịch chuyển $E(a_n) = a_{n+1}$, toán tử $(E - r I)^m$ triệt tiêu mọi đa thức theo $n$ bậc nhỏ hơn $m$ nhân với $r^n$). Hệ quả là một nghiệm đặc trưng $r$ có bội $m$ đóng góp đúng $m$ nghiệm cơ sở độc lập tuyến tính là $r^n, \\, n r^n, \\, n^2 r^n, \\, \\dots, \\, n^{m-1} r^n$, tức thành phần đóng góp của nghiệm $r$ trong nghiệm tổng quát có dạng $( \\alpha_0 + \\alpha_1 n + \\alpha_2 n^2 + \\dots + \\alpha_{m-1} n^{m-1} ) r^n$. Chẳng hạn, hệ $a_n = 4 a_{n-1} - 4 a_{n-2}$ có phương trình đặc trưng $r^2 - 4r + 4 = (r - 2)^2 = 0$ với nghiệm kép $r = 2$ (bội $m = 2$), nên nghiệm tổng quát là $a_n = (\\alpha_0 + \\alpha_1 n) 2^n$.',
          'Trong trường hợp đa thức đặc trưng hệ số thực có cặp nghiệm phức liên hợp $r_{1,2} = a \\pm b i$ (với $b \\neq 0$, ví dụ hệ $a_n = a_{n-1} - a_{n-2}$ có phương trình $r^2 - r + 1 = 0$ với nghiệm $\\frac{1 \\pm i\\sqrt{3}}{2}$), công thức tổ hợp tuyến tính tổng quát $c_1 r_1^n + c_2 r_2^n$ vẫn hoàn toàn hợp lệ trên trường số phức $\\mathbb{C}$ (sử dụng kiến thức số phức và dạng lượng giác đã thiết lập ở Môn CS-02). Để biểu diễn nghiệm của một dãy thực bằng các hàm giá trị thực, ta chuyển nghiệm phức sang dạng lượng giác $r = \\rho (\\cos \\theta \\pm i \\sin \\theta)$ với mô-đun $\\rho = \\sqrt{a^2 + b^2}$ và góc $\\theta = \\text{atan2}(b, a)$. Theo công thức De Moivre, $r^n = \\rho^n (\\cos(n\\theta) \\pm i \\sin(n\\theta))$; việc kết hợp tuyến tính hai nghiệm liên hợp cho phép viết thành phần nghiệm thực tương ứng dưới dạng $\\rho^n ( A \\cos(n\\theta) + B \\sin(n\\theta) )$ với $A, B \\in \\mathbb{R}$, làm lộ rõ bản chất dao động tuần hoàn biên độ $\\rho^n$ của dãy.',
        ],
        sources: [
          {
            sourceId: 'dmoi-3e',
            locator: 'Chapter 2: §2.4 Characteristic Root Technique — Repeated Roots',
            relationship: 'primary',
          },
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 21: §21.4.1 Homogeneous Linear Recurrences (Multiple Roots Theorem and Complex Roots)',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-recurrences-nonhomogeneous-particular',
        title: 'Hệ thức đệ quy tuyến tính không thuần nhất, nghiệm riêng và phương pháp hệ số bất định',
        level: 'core',
        paragraphs: [
          'Một hệ thức đệ quy tuyến tính hệ số hằng được gọi là *không thuần nhất* (nonhomogeneous) khi xuất hiện thành phần ngoại lực khác không $f(n)$ ở vế phải: $a_n - c_1 a_{n-1} - \\dots - c_k a_{n-k} = f(n)$. Nếu gọi $(a_n^{(p)})$ là một nghiệm riêng (particular solution) bất kỳ thỏa mãn phương trình không thuần nhất, và $(a_n)$ là một nghiệm tùy ý khác của cùng phương trình đó, thì hiệu của chúng $h_n = a_n - a_n^{(p)}$ làm triệt tiêu vế phải $f(n) - f(n) = 0$ nên $(h_n)$ phải là nghiệm của phương trình thuần nhất liên kết (associated homogeneous recurrence). Do đó, nghiệm tổng quát của hệ không thuần nhất luôn bằng tổng của nghiệm tổng quát hệ thuần nhất cộng với một nghiệm riêng: $a_n = a_n^{(h)} + a_n^{(p)}$. Lưu ý quy trình bắt buộc: ta chỉ được thay các điều kiện đầu $a_0, a_1, \\dots, a_{k-1}$ vào nghiệm tổng quát đầy đủ $a_n = a_n^{(h)} + a_n^{(p)}$ ở bước cuối cùng để giải tìm các hằng số $\\alpha_i$, tuyệt đối không giải $\\alpha_i$ trên riêng phần thuần nhất $a_n^{(h)}$.',
          'Để tìm nghiệm riêng $a_n^{(p)}$ khi $f(n)$ có dạng đa thức $P_d(n)$ bậc $d$, hàm mũ $s^n$ hoặc tích $P_d(n) \\cdot s^n$, ta sử dụng Phương pháp hệ số bất định (Method of Undetermined Coefficients) có tính đến hiện tượng cộng hưởng với nghiệm đặc trưng: nếu cơ số $s$ (với đa thức thuần túy $P_d(n)$ thì xem như $s = 1^n$, tức $s = 1$) *không phải* là nghiệm của phương trình đặc trưng thuần nhất, ta chọn nghiệm riêng thử có dạng $a_n^{(p)} = (A_0 + A_1 n + \\dots + A_d n^d) s^n$. Ngược lại, nếu $s$ trùng với một nghiệm của phương trình đặc trưng có bội $m \\ge 1$, thì mọi số hạng dạng $n^j s^n$ với $j < m$ đều bị vế trái triệt tiêu về $0$; khi đó ta bắt buộc phải nhân thêm thừa số $n^m$ vào dạng thử, tức chọn $a_n^{(p)} = n^m (A_0 + A_1 n + \\dots + A_d n^d) s^n$, rồi thế vào phương trình để đồng nhất các hệ số $A_0, \\dots, A_d$.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 21: §21.4.2 Inhomogeneous Linear Recurrences (Particular Solution and Wise Guess Rule with Multiplicity)',
            relationship: 'primary',
          },
          {
            sourceId: 'dmoi-3e',
            locator: 'Chapter 2: §2.4 Solving Nonhomogeneous Recurrence Relations',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-recurrences-limits-divide-conquer-bridge',
        title: 'Giới hạn áp dụng của phương trình đặc trưng và cầu nối sang truy hồi chia để trị',
        level: 'core',
        paragraphs: [
          'Một yêu cầu học thuật cốt lõi khi sử dụng phương trình đặc trưng là nhận diện chính xác điều kiện áp dụng và giới hạn của phương pháp. Kỹ thuật nghiệm đặc trưng dựa hoàn toàn vào ba giả thiết: (1) phương trình phải là *tuyến tính* đối với các số hạng của dãy; (2) các hệ số $c_1, \\dots, c_k$ phải là *hằng số* không phụ thuộc vào $n$; và (3) các chỉ số lùi phải là *bước dịch tịnh tiến cố định* $n - 1, n - 2, \\dots, n - k$. Khi bất kỳ giả thiết nào trong ba giả thiết này bị vi phạm, việc đặt $a_n = r^n$ đều không rút gọn được về đa thức đặc trưng hằng. Cụ thể, với hệ thức hệ số biến thiên như $a_n = n a_{n-1}$ (dãy giai thừa $n!$), hoặc hệ thức phi tuyến tích chập như số Catalan $C_n = \\sum_{i=0}^{n-1} C_i C_{n-1-i}$ hay $a_n = a_{n-1}^2 + 1$, ta không thể dùng phương trình đặc trưng mà phải chuyển sang khai triển tích, đổi biến số (như lấy logarit khi chỉ có phép nhân lũy thừa) hoặc dùng công cụ Hàm sinh ở Chương 10.',
          'Đặc biệt, trong phân tích thuật toán, một lớp hệ thức đệ quy cực kỳ phổ biến khác là *hệ thức đệ quy chia để trị* (divide-and-conquer recurrences) có dạng $T(n) = a T(n/b) + f(n)$ (ví dụ Merge Sort $T(n) = 2 T(n/2) + \\Theta(n)$ hoặc Tìm kiếm nhị phân $T(n) = T(n/2) + \\Theta(1)$). Ở đây chỉ số không lùi một lượng hằng số $n - k$ mà co lại theo tỷ lệ nhân $n / b$, do đó không áp dụng trực tiếp phương trình đặc trưng theo biến $n$ (dù trong một số trường hợp đặc biệt khi đặt $n = b^m$ ta có thể đổi biến về truy hồi tuyến tính theo $m = \\log_b n$). Để giữ mạch kiến thức rõ ràng, toàn bộ các kỹ thuật chuyên biệt cho hệ thức chia để trị—bao gồm Phương pháp cây đệ quy (Recursion-Tree Method), Phương pháp thế (Substitution Method), Định lý Thầy (Master Theorem) và phương pháp Akra–Bazzi—sẽ được nghiên cứu trọn vẹn ở Chương 2 của Môn CS-16 (Phân tích và thiết kế thuật toán).',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 21: §21.2 Merge Sort & §21.3 Divide-and-Conquer Recurrences vs §21.4 Linear Recurrences',
            relationship: 'primary',
          },
          {
            sourceId: 'erickson-algorithms',
            locator: 'Chapter 1: Recursion (§1.4–1.7 Solving Divide-and-Conquer Recurrences via Recursion Trees)',
            relationship: 'supplementary',
          },
        ],
      },
    ],
  },
  {
    id: 'dm-generating-functions',
    title: 'Chương 10 — Hàm sinh và ứng dụng trong bài toán đếm – truy hồi',
    overview: [
      'Hàm sinh (generating functions) là một trong những ý tưởng đẹp và mạnh nhất của Toán rời rạc: nó đóng gói toàn bộ một dãy số vô hạn $(g_0, g_1, g_2, \\dots)$ thành một đối tượng đại số duy nhất là một chuỗi lũy thừa hình thức $G(x) = \\sum_{n=0}^{\\infty} g_n x^n$, biến các thao tác phức tạp trên chỉ số dãy (dịch chuyển, tổng chập, hệ thức đệ quy) thành các phép toán đa thức và phân thức quen thuộc. Chương này trình bày chuỗi lũy thừa hình thức, các phép toán đại số trên hàm sinh, quy tắc tổng chập (convolution) cho bài toán đếm có ràng buộc, và quy trình giải hệ thức đệ quy bằng phân tích phân thức tối giản.',
    ],
    sources: [
      {
        sourceId: 'mit-6042j-2015',
        locator: 'Chapter 15: Generating Functions (§15.1–15.5 Infinite Series, Operations on Generating Functions, Counting with Generating Functions, Solving Recurrences)',
        relationship: 'primary',
      },
    ],
    topics: [
      {
        id: 'dm-gf-formal-power-series',
        title: 'Hàm sinh thường, chuỗi lũy thừa hình thức (Formal Power Series) và các hàm sinh cơ sở',
        level: 'core',
        paragraphs: [
          'Hàm sinh thường (Ordinary Generating Function — OGF) của một dãy số vô hạn $(g_0, g_1, g_2, \\dots)$ là chuỗi lũy thừa $G(x) = g_0 + g_1 x + g_2 x^2 + \\dots = \\sum_{n=0}^{\\infty} g_n x^n$. Trong Toán rời rạc và tổ hợp, $G(x)$ được đối xử trước hết như một *chuỗi lũy thừa hình thức* (formal power series): biến $x$ không nhất thiết phải nhận một giá trị số thực cụ thể mà đóng vai trò là ký hiệu giữ chỗ (placeholder) gắn thẻ lũy thừa $x^n$ cho số hạng thứ $n$ của dãy; ta ký hiệu $[x^n] G(x) = g_n$ là toán tử trích xuất hệ số của $x^n$. Hai chuỗi lũy thừa hình thức bằng nhau khi và chỉ khi mọi hệ số tương ứng của chúng bằng nhau với mọi $n \\ge 0$.',
          'Nhờ định nghĩa phép nhân chuỗi theo quy tắc Cauchy, nghịch đảo nhân của đa thức $(1 - x)$ trong vành chuỗi lũy thừa hình thức chính là chuỗi toàn hệ số $1$: $(1 - x)(1 + x + x^2 + \\dots) = 1$, hay $\\frac{1}{1 - x} = \\sum_{n=0}^{\\infty} x^n$. Thay $x$ bởi $a x$ hoặc $x^k$, ta lập tức thu được từ điển các hàm sinh nền tảng: dãy cấp số nhân $(a^n)$ có hàm sinh $\\frac{1}{1 - a x} = \\sum_{n=0}^{\\infty} a^n x^n$; dãy xen kẽ có bước nhảy $k$ có hàm sinh $\\frac{1}{1 - x^k} = 1 + x^k + x^{2k} + \\dots$; và theo Định lý Nhị thức mở rộng, hàm sinh $\\frac{1}{(1 - x)^k} = \\sum_{n=0}^{\\infty} \\binom{n + k - 1}{k - 1} x^n$ đóng gói chính xác số nghiệm nguyên không âm của bài toán chia vật vào $k$ hộp.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 15: §15.1 Infinite Series & Formal Power Series',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-gf-operations-shifting-differentiation',
        title: 'Các phép biến đổi trên hàm sinh: Tổ hợp tuyến tính, Dịch chỉ số, Đạo hàm và Tích chập',
        level: 'core',
        paragraphs: [
          'Sức mạnh của hàm sinh nằm ở sự tương ứng 1–1 giữa các phép biến đổi trên dãy $(f_n), (g_n)$ và các phép toán đại số trên hàm sinh $F(x), G(x)$. Phép cộng tuyến tính $\\alpha F(x) + \\beta G(x)$ tạo ra hàm sinh của dãy $(\\alpha f_n + \\beta g_n)$. Phép nhân hàm sinh với $x^k$ tương ứng với phép *dịch phải chỉ số* $k$ bước (chèn $k$ số $0$ vào đầu dãy): $x^k G(x) = \\sum_{n=k}^{\\infty} g_{n-k} x^n$; ngược lại, phép trừ đi các số hạng đầu rồi chia cho $x^k$ tương ứng với phép *dịch trái chỉ số*: $\\frac{G(x) - g_0 - g_1 x - \\dots - g_{k-1} x^{k-1}}{x^k} = \\sum_{n=0}^{\\infty} g_{n+k} x^n$.',
          'Khi cần nhân số hạng $g_n$ với chính chỉ số $n$, ta sử dụng phép lấy đạo hàm hình thức: $G\'(x) = \\sum_{n=1}^{\\infty} n g_n x^{n-1}$, suy ra $x G\'(x) = \\sum_{n=0}^{\\infty} n g_n x^n$ (chẳng hạn lấy đạo hàm của $\\frac{1}{1-x}$ cho ngay $\\frac{1}{(1-x)^2} = \\sum_{n=0}^{\\infty} (n+1) x^n$). Đặc biệt, phép nhân hai hàm sinh $H(x) = F(x) G(x)$ tương ứng với phép *tích chập* (convolution) của hai dãy: hệ số của $x^n$ trong tích $F(x) G(x)$ bằng tổng mọi cách ghép cặp chỉ số có tổng bằng $n$, tức $h_n = [x^n](F(x)G(x)) = \\sum_{k=0}^n f_k g_{n-k}$; hệ quả là nhân một hàm sinh $F(x)$ với $\\frac{1}{1-x}$ sẽ tạo ra hàm sinh của dãy tổng tiền tố $s_n = \\sum_{k=0}^n f_k$.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 15: §15.2 Operations on Generating Functions (Scaling, Addition, Right-Shift, Differentiation, Products/Convolution)',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-gf-counting-convolutions-partitions',
        title: 'Mô hình hóa bài toán đếm tổ hợp có ràng buộc bằng Quy tắc Tích chập',
        level: 'core',
        paragraphs: [
          'Quy tắc tích chập biến hàm sinh thành một cỗ máy tự động cho các bài toán chọn vật có ràng buộc phức tạp: giả sử cần chọn tổng cộng $n$ phần tử từ $m$ loại khác nhau, trong đó số lượng phần tử được phép chọn từ loại thứ $i$ bị ràng buộc bởi tập điều kiện $S_i$ (hoặc có $a_{i, k}$ cách chọn $k$ phần tử thuộc loại $i$). Khi đó, loại thứ $i$ được biểu diễn bởi đa thức/chuỗi nhân tử $A_i(x) = \\sum_{k \\ge 0} a_{i, k} x^k$, và số cách chọn tổng cộng $n$ phần tử từ cả $m$ loại chính là hệ số $[x^n]$ của hàm sinh tích $A_1(x) A_2(x) \\cdots A_m(x)$.',
          'Ví dụ, nếu một loại vật chỉ được chọn số lượng chẵn ($0, 2, 4, \\dots$), nhân tử tương ứng là $1 + x^2 + x^4 + \\dots = \\frac{1}{1 - x^2}$; nếu một loại vật chỉ được chọn tối đa $c$ lần ($0, 1, \\dots, c$), nhân tử tương ứng là tổng cấp số nhân hữu hạn $1 + x + \\dots + x^c = \\frac{1 - x^{c+1}}{1 - x}$. Khi nhân các phân thức này lại với nhau, nhiều thừa số ở tử số và mẫu số tự động giản ước, rút gọn một bài toán tổ hợp tưởng như phải chia hàng chục trường hợp về việc tra cứu một hệ số nhị thức duy nhất từ khai triển $(1 - x)^{-k}$.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 15: §15.3 Counting with Generating Functions',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-gf-solving-recurrences-partial-fractions',
        title: 'Giải hệ thức đệ quy bằng Hàm sinh, Phân tích phân thức tối giản và Giới hạn chuỗi hình thức',
        level: 'core',
        paragraphs: [
          'Hàm sinh cung cấp một phương pháp thống nhất và hoàn toàn cơ giới để giải các hệ thức đệ quy tuyến tính (kể cả không thuần nhất) mà không cần nhớ riêng các mẫu đoán nghiệm. Quy trình gồm bốn bước: (1) Đặt $G(x) = \\sum_{n=0}^{\\infty} a_n x^n$, nhân hai vế của hệ thức đệ quy với $x^n$ rồi lấy tổng trên mọi chỉ số $n \\ge k$ nơi hệ thức có hiệu lực; (2) Biến đổi các tổng dịch chỉ số $\\sum_{n=k}^{\\infty} a_{n-i} x^n = x^i (G(x) - a_0 - \\dots - a_{i-1} x^{i-1})$ bằng cách thế trực tiếp các điều kiện đầu vào để thu được một phương trình đại số bậc nhất theo ẩn $G(x)$; (3) Giải phương trình đại số để biểu diễn $G(x)$ dưới dạng phân thức hữu tỉ $\\frac{P(x)}{Q(x)}$ (trong đó mẫu số $Q(x) = 1 - c_1 x - c_2 x^2 - \\dots - c_k x^k$ chính là đa thức phản chiếu $x^k P_{\\text{char}}(1/x)$ của đa thức đặc trưng); và (4) Phân tích $\\frac{P(x)}{Q(x)}$ thành tổng các phân thức tối giản (partial fraction decomposition) dạng $\\frac{A_j}{(1 - r_i x)^j}$, rồi đọc trực tiếp hệ số $[x^n]$ của từng phân thức để thu được công thức dạng đóng của $a_n$.',
          'Về mặt giới hạn học thuật, cần phân biệt rõ hai góc nhìn về chuỗi lũy thừa: trong đại số và tổ hợp, ta làm việc trên vành chuỗi lũy thừa hình thức $\\mathbb{R}[[x]]$, nơi phép cộng, nhân, đạo hàm và nghịch đảo của chuỗi có hệ số tự do $g_0 \\neq 0$ đều được định nghĩa thuần túy trên hệ số mà không cần chuỗi hội tụ tại một số thực $x \\neq 0$ nào (ví dụ chuỗi $\\sum_{n=0}^{\\infty} n! x^n$ có bán kính hội tụ bằng $0$ nhưng vẫn là chuỗi hình thức hợp lệ). Ngược lại, khi ta muốn thay một giá trị số cụ thể của $x$ vào $G(x)$ để tính tổng vô hạn hoặc ước lượng tiệm cận bằng giải tích phức, ta bắt buộc phải xét miền hội tụ tuyệt đối $|x| < R$ thuộc phạm vi môn Giải tích.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 15: §15.4 Finding a Closed Form (Partial Fractions & Solving Linear Recurrences with Generating Functions)',
            relationship: 'primary',
          },
        ],
      },
    ],
  },
];
