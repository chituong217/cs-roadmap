export const DISCRETE_MATH_CHAPTERS_6_TO_8 = [
  {
    id: 'dm-graphs-trees-posets',
    title: 'Chương 6 — Lý thuyết đồ thị cơ sở, cây và cấu trúc phụ thuộc',
    overview: [
      'Đồ thị là ngôn ngữ toán học tự nhiên nhất để mô hình hóa mạng lưới kết nối, quan hệ phụ thuộc tiên quyết và cấu trúc phân cấp trong Khoa học Máy tính. Chương này trình bày định nghĩa hình thức và các bất biến cơ bản của đồ thị vô hướng và đồ thị có hướng: từ bậc đỉnh, đường đi, chu trình, tính liên thông và đồ thị hai phía (bipartite graphs), đến các đặc trưng tương đương của cây (trees) và cấu trúc thứ tự bộ phận cùng sắp xếp tô-pô trên đồ thị có hướng không chu trình (DAG).',
    ],
    sources: [
      {
        sourceId: 'mit-6042j-2015',
        locator: 'Chapter 9: Directed Graphs & Partial Orders (§9.1–9.11) and Chapter 11: Simple Graphs (§11.1–11.10)',
        relationship: 'primary',
      },
    ],
    topics: [
      {
        id: 'dm-gtp-undirected-degrees-connectivity',
        title: 'Đồ thị đơn vô hướng, bậc đỉnh, Bổ đề bắt tay, đường đi, chu trình và thành phần liên thông',
        level: 'core',
        paragraphs: [
          'Một đồ thị đơn vô hướng (simple undirected graph) $G = (V, E)$ bao gồm một tập đỉnh $V$ và một tập cạnh $E$, trong đó mỗi cạnh là một tập con gồm đúng 2 đỉnh phân biệt $\\{u, v\\} \\subseteq V$ (không có khuyên tự nối một đỉnh với chính nó và không có đa cạnh song song). Bậc của một đỉnh $\\deg(v)$ là số cạnh liên thuộc với đỉnh đó. Vì mỗi cạnh $\\{u, v\\} \\in E$ đóng góp đúng 1 đơn vị vào bậc của $u$ và 1 đơn vị vào bậc của $v$, việc đếm tổng bậc theo hai cách dẫn trực tiếp tới Bổ đề bắt tay (Handshaking Lemma): $\\sum_{v \\in V} \\deg(v) = 2|E|$, kéo theo hệ quả bất biến là trong mọi đồ thị hữu hạn, số đỉnh có bậc lẻ luôn là một số chẵn.',
          'Một dãy bước đi (walk) là dãy xen kẽ các đỉnh và cạnh nối tiếp nhau; một đường đi đơn (path) là dãy bước đi không lặp lại đỉnh nào; và một chu trình (cycle) là dãy bước đi đóng có độ dài ít nhất 3 chỉ trùng đỉnh đầu và đỉnh cuối. Quan hệ "tồn tại đường đi giữa $u$ và $v$" là một quan hệ tương đương trên tập đỉnh $V$, phân hoạch đồ thị thành các thành phần liên thông (connected components) rời nhau. Ngoài ra, một đồ thị được gọi là hai phía (bipartite) nếu tập đỉnh $V$ có thể phân hoạch thành hai tập $L, R$ sao cho mọi cạnh chỉ nối một đỉnh thuộc $L$ với một đỉnh thuộc $R$; định lý đặc trưng khẳng định đồ thị là hai phía khi và chỉ khi nó không chứa bất kỳ chu trình độ dài lẻ nào.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 11: §11.1 Vertex Adjacency and Degrees, §11.4 Walk Relations and Connectivity, §11.9 Bipartite Graphs and Matchings',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-gtp-trees-characterizations',
        title: 'Cây (Trees), các định nghĩa tương đương, tính chất lá và cây khung (Spanning Trees)',
        level: 'core',
        paragraphs: [
          'Một cây tự do (free tree) là một đồ thị vô hướng vừa liên thông vừa không chứa chu trình (acyclic); một đồ thị không chứa chu trình nói chung (có thể gồm nhiều thành phần liên thông) được gọi là một rừng (forest), trong đó mỗi thành phần liên thông là một cây. Mọi cây hữu hạn có ít nhất $2$ đỉnh luôn có ít nhất $2$ đỉnh lá (đỉnh có bậc bằng $1$), được chứng minh dễ dàng bằng cách xét hai đầu mút của một đường đi đơn có độ dài cực đại trong cây: vì đường đi là cực đại và cây không có chu trình, hai đầu mút đó không thể có thêm bất kỳ đỉnh kề nào khác.',
          'Trên một đồ thị hữu hạn $G = (V, E)$ với $n = |V| \\ge 1$ đỉnh, sáu tính chất sau là hoàn toàn tương đương và mỗi tính chất đều định nghĩa một cây: (1) $G$ liên thông và không có chu trình; (2) giữa mọi cặp đỉnh $u, v \\in V$ tồn tại duy nhất một đường đi đơn; (3) $G$ liên thông và xóa bất kỳ cạnh nào cũng làm đồ thị mất tính liên thông (liên thông cực tiểu); (4) $G$ không có chu trình và thêm bất kỳ cạnh mới nào cũng tạo ra đúng một chu trình (không chu trình cực đại); (5) $G$ liên thông và có đúng $|E| = n - 1$ cạnh; (6) $G$ không có chu trình và có đúng $|E| = n - 1$ cạnh. Mọi đồ thị liên thông đều chứa ít nhất một đồ thị con giữ nguyên tập đỉnh $V$ và là cây, gọi là cây khung (spanning tree).',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 11: §11.10 Forests and Trees (Leaves, Equivalent Characterizations, Spanning Trees)',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-gtp-digraphs-dags-topological-sort',
        title: 'Đồ thị có hướng, Đồ thị không chu trình (DAG), Thứ tự bộ phận (Posets) và Sắp xếp Tô-pô',
        level: 'core',
        paragraphs: [
          'Trong đồ thị có hướng (directed graph / digraph) $G = (V, E)$, mỗi cạnh là một cặp có thứ tự $(u, v) \\in V \\times V$ đi từ đuôi $u$ tới đầu $v$, tách bậc của mỗi đỉnh thành bậc vào $\\text{in-deg}(v)$ và bậc ra $\\text{out-deg}(v)$ thỏa mãn $\\sum_{v \\in V} \\text{in-deg}(v) = \\sum_{v \\in V} \\text{out-deg}(v) = |E|$. Khi đồ thị có hướng không chứa bất kỳ chu trình có hướng nào, ta thu được Đồ thị có hướng không chu trình (Directed Acyclic Graph — DAG), cấu trúc chuẩn để biểu diễn đồ thị điều kiện tiên quyết môn học, đồ thị phụ thuộc biên dịch (`Makefile`) và lịch biểu tác vụ.',
          'Về mặt đại số quan hệ, quan hệ khả đạt trên một DAG tương ứng với một Thứ tự bộ phận nghiêm ngặt (strict partial order: không phản xạ, phản xứng và bắc cầu). Trong một tập thứ tự bộ phận hữu hạn khác rỗng, luôn tồn tại ít nhất một phần tử cực tiểu (minimal element — đỉnh có bậc vào bằng $0$). Bằng cách lặp lại thao tác lấy ra một phần tử cực tiểu rồi xóa nó khỏi DAG, ta chứng minh được mọi DAG hữu hạn đều có ít nhất một Sắp xếp Tô-pô (Topological Sort / Linear Extension): một thứ tự toàn phần tuyến tính của các đỉnh sao cho với mọi cung $(u, v) \\in E$, đỉnh $u$ luôn đứng trước đỉnh $v$. Ngoài ra, độ dài chuỗi phụ thuộc dài nhất (critical path) quy định thời gian tối thiểu để hoàn tất toàn bộ tác vụ ngay cả khi có vô hạn bộ xử lý song song.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 9: §9.1–9.4 Digraphs and Walk Relations, §9.5 Directed Acyclic Graphs & Scheduling, §9.6–9.9 Partial Orders, Linear Extensions (Topological Sort), and Dilworth’s Lemma',
            relationship: 'primary',
          },
        ],
      },
    ],
  },
  {
    id: 'dm-counting-combinatorics',
    title: 'Chương 7 — Nguyên lý đếm, song ánh, bù trừ và Dirichlet',
    overview: [
      'Đếm lực lượng của một tập hợp hữu hạn là bước cốt lõi để xác định kích thước không gian tìm kiếm, phân tích độ phức tạp trung bình của thuật toán và tính xác suất rời rạc. Chương này trình bày hệ thống các nguyên lý tổ hợp từ quy tắc cộng, quy tắc nhân, ánh xạ song ánh và ánh xạ $k$-tới-$1$, đến hoán vị, tổ hợp, hệ số nhị thức và đa thức, nguyên lý bao hàm–loại trừ (Inclusion–Exclusion) và nguyên lý chuồng bồ câu (Pigeonhole Principle).',
    ],
    sources: [
      {
        sourceId: 'mit-6042j-2015',
        locator: 'Chapter 14: Cardinality Rules (§14.1–14.10 Counting by Mapping, Product/Sum/Division Rules, Binomial Theorem, Inclusion-Exclusion, Pigeonhole Principle)',
        relationship: 'primary',
      },
    ],
    topics: [
      {
        id: 'dm-cc-sum-product-bijection-division',
        title: 'Quy tắc cộng, Quy tắc nhân, Quy tắc chia ($k$-to-$1$) và Phương pháp đếm bằng Song ánh',
        level: 'core',
        paragraphs: [
          'Hai quy tắc sơ cấp nhất của tổ hợp là Quy tắc cộng (Sum Rule: nếu các tập hữu hạn $A_1, \\dots, A_m$ đôi một rời nhau thì $|A_1 \\cup \\dots \\cup A_m| = \\sum_{i=1}^m |A_i|$) và Quy tắc nhân tổng quát (Product Rule: nếu một quy trình gồm $m$ bước tuần tự, bước $1$ có $n_1$ cách chọn, và với mỗi kết quả của các bước trước, bước $i$ luôn có đúng $n_i$ cách chọn độc lập về số lượng, thì tổng số kết quả tạo thành là $n_1 \\cdot n_2 \\cdots n_m$). Quy tắc chia (Division Rule) xử lý trường hợp đếm trùng có tính đối xứng: nếu ánh xạ $f: A \\to B$ là toàn ánh sao cho mọi phần tử $b \\in B$ đều có đúng $k$ tạo ảnh trong $A$ (ánh xạ $k$-to-$1$), thì $|B| = |A| / k$.',
          'Khi một tập hợp $S$ có cấu trúc phức tạp khó đếm trực tiếp, kỹ thuật mạnh nhất là xây dựng một song ánh (bijection) tường minh $f: S \\to T$ sang một tập $T$ đã biết rõ công thức lực lượng (như tập các xâu nhị phân có ràng buộc). Chẳng hạn, bài toán chia $n$ vật giống hệt nhau vào $k$ hộp phân biệt ($x_1 + x_2 + \\dots + x_k = n$ với $x_i \\ge 0$) được giải quyết trọn vẹn bằng cách thiết lập song ánh với tập các xâu gồm $n$ ngôi sao và $k - 1$ vách ngăn (stars and bars), cho ngay kết quả $\\binom{n + k - 1}{k - 1}$ mà không cần tách trường hợp phức tạp.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 14: §14.1 Counting One Thing by Counting Another (Bijection), §14.2 Counting Sequences (Product & Sum Rules), §14.4 The Generalized Product Rule, §14.5 The Division Rule',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-cc-permutations-combinations-binomial',
        title: 'Hoán vị, Tổ hợp, Định lý Nhị thức Newton và Chứng minh Tổ hợp (Combinatorial Proofs)',
        level: 'core',
        paragraphs: [
          'Từ quy tắc nhân và quy tắc chia, số dãy có thứ tự gồm $k$ phần tử phân biệt lấy từ tập $n$ phần tử ($k$-permutations) là $P(n, k) = n(n-1)\\cdots(n-k+1) = \\frac{n!}{(n-k)!}$. Khi bỏ qua thứ tự sắp xếp giữa $k$ phần tử được chọn, mỗi tập con cỡ $k$ tương ứng với đúng $k!$ thứ tự hoán vị khác nhau; áp dụng quy tắc chia $k!$-to-$1$ ta thu được số tập con cỡ $k$ (tổ hợp) là $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$. Khi chia $n$ phần tử phân biệt vào $m$ nhóm có kích thước cố định $k_1 + k_2 + \\dots + k_m = n$, công thức tổng quát hóa thành hệ số đa thức $\\binom{n}{k_1, k_2, \\dots, k_m} = \\frac{n!}{k_1! k_2! \\cdots k_m!}$.',
          'Hệ số nhị thức $\\binom{n}{k}$ xuất hiện trong khai triển Định lý Nhị thức $(x + y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k} y^k$ vì số hạng $x^{n-k} y^k$ hình thành từ việc chọn đúng $k$ nhân tử đóng góp biến $y$ trong số $n$ nhân tử $(x+y)$. Để chứng minh các đồng nhất thức tổ hợp như đẳng thức Pascal $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$ hay đẳng thức Vandermonde $\\binom{m+n}{r} = \\sum_{k=0}^r \\binom{m}{k}\\binom{n}{r-k}$, phương pháp Chứng minh tổ hợp (double counting) đặt ra một câu hỏi đếm duy nhất rồi đếm tập kết quả theo hai cách khác nhau, giúp thấy rõ bản chất cấu trúc hơn rất nhiều so với việc biến đổi giai thừa thuần túy.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 14: §14.6 Counting Subsets, §14.7 Sequences with Repetitions (Bookkeeper Rule & Multinomials), §14.8 The Binomial Theorem, §14.10 Combinatorial Proof',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-cc-inclusion-exclusion-pigeonhole',
        title: 'Nguyên lý Bao hàm – Loại trừ (Inclusion–Exclusion) và Nguyên lý Chuồng bồ câu (Dirichlet)',
        level: 'core',
        paragraphs: [
          'Khi các tập hợp $A_1, \\dots, A_n$ không rời nhau mà giao nhau chồng chéo, việc cộng trực tiếp lực lượng $\\sum |A_i|$ sẽ đếm lặp những phần tử thuộc nhiều tập hợp. Nguyên lý Bao hàm – Loại trừ (Inclusion–Exclusion Principle) hiệu chỉnh chính xác số lần đếm bằng tổng đan dấu trên mọi giao của các tập con chỉ số khác rỗng: $|\\bigcup_{i=1}^n A_i| = \\sum_{k=1}^n (-1)^{k+1} \\sum_{1 \\le i_1 < \\dots < i_k \\le n} |A_{i_1} \\cap \\dots \\cap A_{i_k}|$. Một phần tử nằm trong đúng $m \\ge 1$ tập hợp sẽ được đếm $\\sum_{k=1}^m (-1)^{k+1} \\binom{m}{k} = 1 - (1 - 1)^m = 1$ lần, chứng minh tính đúng đắn tuyệt đối của công thức (ứng dụng kinh điển trong bài toán đếm số toàn ánh, số mất thứ tự derangements và hàm phi Euler).',
          'Ở chiều ngược lại, Nguyên lý Chuồng bồ câu (Pigeonhole Principle / Dirichlet) khẳng định một định lý tồn tại không kiến tạo: nếu xếp $N$ vật vào $K$ hộp mà $N > K$, thì chắc chắn tồn tại ít nhất một hộp chứa từ $2$ vật trở lên; tổng quát hơn, luôn tồn tại một hộp chứa ít nhất $\\lceil N / K \\rceil$ vật. Trong Khoa học Máy tính, nguyên lý này chứng minh sự tất yếu của va chạm bảng băm (hash collisions) khi không gian khóa lớn hơn kích thước bảng, chứng minh định lý không tồn tại thuật toán nén không mất dữ liệu nào làm ngắn được mọi xâu đầu vào, và chứng minh Bổ đề bơm (Pumping Lemma) trong lý thuyết ngôn ngữ hình thức.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 14: §14.9 The Pigeonhole Principle & §14.11 Inclusion-Exclusion',
            relationship: 'primary',
          },
        ],
      },
    ],
  },
  {
    id: 'dm-sums-products-asymptotics',
    title: 'Chương 8 — Tổng hữu hạn, ước lượng tiệm cận và phương pháp kẹp tích phân',
    overview: [
      'Khi phân tích số bước thực thi của vòng lặp hoặc đệ quy, kết quả ban đầu hầu như luôn xuất hiện dưới dạng các tổng hữu hạn hoặc tích hữu hạn phụ thuộc vào kích thước đầu vào $n$. Chương này trang bị trước hết các kỹ thuật đại số cốt lõi chỉ cần nền tảng CS-02: rút gọn tổng dạng đóng (cấp số cộng, cấp số nhân, tổng sai phân triệt tiêu, phương pháp nhiễu loạn), cận sơ cấp chia nhóm theo lũy thừa của $2$ cho chuỗi điều hòa $H_n$ và tích giai thừa, cùng định nghĩa lượng từ chặt chẽ của hệ thống ký hiệu tiệm cận ($O, \\Omega, \\Theta, o, \\omega$). Riêng kỹ thuật kẹp tổng bằng tích phân xác định và xấp xỉ Stirling đầy đủ được tách rõ thành tiểu mục mở rộng (extension) có khai báo tiên quyết Giải tích một biến (CS-11).',
    ],
    sources: [
      {
        sourceId: 'mit-6042j-2015',
        locator: 'Chapter 13: Sums & Asymptotics (§13.1–13.7 Closed Forms, Integral Method, Stirling’s Approximation, Asymptotic Notation)',
        relationship: 'primary',
      },
    ],
    topics: [
      {
        id: 'dm-spa-closed-form-sums-perturbation',
        title: 'Biến đổi tổng hữu hạn, cấp số nhân, tổng triệt tiêu (Telescoping) và cận sơ cấp cho số điều hòa',
        level: 'core',
        paragraphs: [
          'Mục tiêu đầu tiên khi gặp một tổng $\\sum_{i=1}^n a_i$ là tìm biểu thức dạng đóng (closed form) — một công thức có số phép toán cố định không phụ thuộc vào $n$. Ba tổng cơ sở xuất hiện liên tục trong phân tích thuật toán là tổng cấp số cộng $\\sum_{i=1}^n i = \\frac{n(n+1)}{2}$, tổng bình phương $\\sum_{i=1}^n i^2 = \\frac{n(n+1)(2n+1)}{6}$, và tổng cấp số nhân $\\sum_{i=0}^n r^i = \\frac{1 - r^{n+1}}{1 - r}$ (với $r \\neq 1$). Tổng cấp số nhân giải thích hai hiện tượng trái ngược trong thuật toán: khi $0 < r < 1$ (như $r = 1/2$), tổng bị chặn trên bởi hằng số $\\frac{1}{1-r}$ dù $n \\to \\infty$, nghĩa là số hạng đầu tiên thống trị toàn bộ tổng; ngược lại khi $r > 1$ (như $r = 2$ trên cây nhị phân đầy đủ), $\\sum_{i=0}^n 2^i = 2^{n+1} - 1$, nghĩa là riêng tầng cuối cùng đã lớn hơn tổng tất cả các tầng trước cộng lại.',
          'Với các tổng dạng $\\sum_{i=1}^n i r^i$, kỹ thuật nhiễu loạn đại số (perturbation method — nhân tổng $S_n$ với $r$ rồi lấy $S_n - r S_n$ để quy về tổng cấp số nhân mà chưa cần dùng đạo hàm giải tích) cho phép đưa về dạng đóng $\\frac{r - (n+1)r^{n+1} + n r^{n+2}}{(1-r)^2}$. Với các tổng phân thức dạng $\\sum_{i=1}^n \\frac{1}{i(i+1)}$, phép tách thành hiệu sai phân $a_i = f(i) - f(i+1) = \\frac{1}{i} - \\frac{1}{i+1}$ biến tổng thành tổng triệt tiêu (telescoping sum), nơi mọi số hạng trung gian tự khử lẫn nhau chỉ để lại biên đầu trừ biên cuối $1 - \\frac{1}{n+1}$. Đối với Số điều hòa $H_n = \\sum_{i=1}^n \\frac{1}{i}$ (không có dạng đóng sơ cấp), ngay cả khi chưa dùng tích phân, phép chia nhóm các số hạng theo lũy thừa của $2$ ($1 + \\frac{1}{2} + (\\frac{1}{3}+\\frac{1}{4}) + (\\frac{1}{5}+\\dots+\\frac{1}{8}) + \\dots$) chứng minh hoàn toàn bằng đại số sơ cấp rằng $1 + \\frac{k}{2} \\le H_{2^k} \\le 1 + k$, từ đó suy ra $H_n = \\Theta(\\log n)$; tương tự, bất đẳng thức $(n/2)^{n/2} \\le n! \\le n^n$ lấy logarit cơ số $2$ cho ngay $\\log_2(n!) = \\Theta(n \\log n)$ đủ dùng cho phân tích cận dưới sắp xếp so sánh.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 13: §13.1 The Value of an Annuity & §13.2 Sums of Powers (Perturbation Method)',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-spa-harmonic-integral-stirling',
        title: 'Phương pháp kẹp tổng bằng tích phân và xấp xỉ Stirling cho giai thừa (Mở rộng — cần Giải tích CS-11)',
        level: 'extension',
        prerequisites: [
          {
            courseId: 'single-variable-calculus',
            type: 'required',
            reason: 'Cần khái niệm tích phân xác định, liên hệ diện tích hình phẳng và nguyên hàm của 1/x cùng ln(x) từ Môn CS-11.',
          },
        ],
        paragraphs: [
          'Tiểu mục mở rộng này dành cho người học đã nắm hoặc đang học song song Giải tích một biến (CS-11) để thu được các hệ số tiệm cận sắc nét hơn cận chia nhóm sơ cấp. Khi cần ước lượng tổng $\\sum_{i=1}^n f(i)$ của một hàm dương đơn điệu khả tích $f$, phương pháp Kẹp tích phân (Integral Bound Method) so sánh tổng diện tích các hình chữ nhật đơn vị với diện tích dưới đường cong liên tục $y = f(x)$: nếu $f$ đơn điệu giảm trên $[1, \\infty)$ thì $\\int_1^{n+1} f(x)\\,dx \\le \\sum_{i=1}^n f(i) \\le f(1) + \\int_1^n f(x)\\,dx$; nếu $f$ đơn điệu tăng thì $\\int_1^n f(x)\\,dx + f(1) \\le \\sum_{i=1}^n f(i) \\le \\int_1^{n+1} f(x)\\,dx$ (hoặc kẹp với biên dịch trái $\\int_0^n f(x)\\,dx$ khi $f$ xác định trên $[0, \\infty)$). Áp dụng cận tích phân cho hàm giảm $f(x) = 1/x$, ta chứng minh được $\\ln(n+1) \\le H_n \\le 1 + \\ln n$, xác lập hệ số dẫn đầu chính xác theo logarit tự nhiên $H_n = \\ln n + O(1)$ (và sâu hơn trong giải tích là $H_n = \\ln n + \\gamma + O(1/n)$ với hằng số Euler–Mascheroni $\\gamma \\approx 0.5772$).',
          'Đối với giai thừa $n!$, việc lấy logarit biến tích thành tổng $\\ln(n!) = \\sum_{i=1}^n \\ln i$. Áp dụng trực tiếp bất đẳng thức kẹp tích phân hình chữ nhật cho hàm đơn điệu tăng $f(x) = \\ln x$ với nguyên hàm $\\int \\ln x\\,dx = x \\ln x - x$, ta thu được cận hai phía $n \\ln n - n + 1 \\le \\ln(n!) \\le (n+1)\\ln(n+1) - n$, qua đó suy ra trực tiếp rằng phần dư $R(n) = \\ln(n!) - (n \\ln n - n)$ thỏa mãn $1 \\le R(n) \\le (n+1)\\ln(n+1) - n\\ln n = \\ln n + (n+1)\\ln(1 + 1/n) = O(\\ln n)$, tức $\\ln(n!) = n \\ln n - n + O(\\ln n)$ (riêng hai cận hình chữ nhật này mới chặn trên phần dư bởi $O(\\ln n)$ chứ chưa tự chứng minh cận dưới $\\Omega(\\ln n)$ của phần dư; để có cả $\\Omega(\\ln n)$ cần kẹp tinh hơn bằng hình thang theo tính lõm của $\\ln x$ trên từng đoạn $[k, k+1]$). Cần phân biệt rõ kết quả kẹp tích phân hình chữ nhật này với **Công thức xấp xỉ Stirling** đầy đủ ở mức tương đương tiệm cận $n! \\sim \\sqrt{2\\pi n} \\left(\\frac{n}{e}\\right)^n$ (tức $\\ln(n!) = n \\ln n - n + \\frac{1}{2}\\ln(2\\pi n) + O(1/n)$): cận hình chữ nhật đơn giản chỉ cho biết phần dư là $O(\\ln n)$ chứ chưa tự suy ra hệ số $1/2$ trước $\\ln n$ và hằng số $\\sqrt{2\\pi}$; để chứng minh công thức Stirling đầy đủ cần xấp xỉ hình thang/Euler–Maclaurin kết hợp tích phân Wallis hoặc phương pháp Laplace trong giải tích.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 13: §13.3 Approximating Sums (Integral Bounds), §13.4 Hanging Out Over the Barn (Harmonic Numbers), §13.5 Products and Stirling’s Approximation',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-spa-asymptotic-notations-pitfalls',
        title: 'Hệ thống ký hiệu tiệm cận (O, Omega, Theta, o, omega), định nghĩa lượng từ và các bẫy suy luận',
        level: 'core',
        paragraphs: [
          'Ký hiệu tiệm cận mô tả hành vi tăng trưởng của các hàm không âm $f, g: \\mathbb{N} \\to \\mathbb{R}_{\\ge 0}$ khi $n \\to \\infty$ mà không phụ thuộc vào hệ số hằng của phần cứng. Cận trên tiệm cận $f(n) = O(g(n))$ được định nghĩa chính xác bằng lượng từ: $\\exists c > 0, \\exists n_0 \\in \\mathbb{N}, \\forall n \\ge n_0, f(n) \\le c \\cdot g(n)$ (tương ứng $\\limsup_{n \\to \\infty} f(n)/g(n) < \\infty$). Đối xứng lại, cận dưới tiệm cận $f(n) = \\Omega(g(n))$ đòi hỏi $\\exists c > 0, \\exists n_0 \\in \\mathbb{N}, \\forall n \\ge n_0, f(n) \\ge c \\cdot g(n)$; và cận chặt hai phía $f(n) = \\Theta(g(n))$ đòi hỏi đồng thời $f = O(g)$ và $f = \\Omega(g)$. Hai ký hiệu chặt nghiêm ngặt là $f(n) = o(g(n))$ (tức $\\lim_{n \\to \\infty} f(n)/g(n) = 0$) và $f(n) = \\omega(g(n))$ (tức $\\lim_{n \\to \\infty} f(n)/g(n) = \\infty$), thiết lập thứ bậc tăng trưởng chuẩn: $1 \\prec \\log n \\prec n^a \\prec b^n \\prec n! \\prec n^n$ (với $a > 0, b > 1$).',
          'Nắm vững định nghĩa lượng từ giúp tránh ba ngụy biện tiệm cận rất phổ biến: (1) Hằng số $c$ trong định nghĩa $O(g(n))$ bắt buộc phải cố định độc lập với $n$; do đó tổng gồm $n$ số hạng mà mỗi số hạng là $O(i)$ không thể suy luận cơ học thành "$O(1) + \\dots + O(n) = O(n)$" mà thực chất là $\\sum_{i=1}^n c i = \\Theta(n^2)$; (2) Quan hệ $f(n) = O(g(n))$ không bảo toàn qua phép lấy hàm mũ: $2n = O(n)$ nhưng $2^{2n} = 4^n \\neq O(2^n)$ vì tỷ số $4^n / 2^n = 2^n \\to \\infty$; và (3) Ký hiệu dấu bằng trong $f(n) = O(g(n))$ thực chất là quan hệ thuộc tập hợp một chiều $f \\in O(g)$ chứ không có tính đối xứng.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 13: §13.7 Asymptotic Notation (Little Oh, Big Oh, Theta, Omega, and Asymptotic Blunders)',
            relationship: 'primary',
          },
        ],
      },
    ],
  },
];
