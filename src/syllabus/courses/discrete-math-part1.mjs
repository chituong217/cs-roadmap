export const DISCRETE_MATH_CHAPTERS_1_TO_5 = [
  {
    id: 'dm-sets-functions-relations',
    title: 'Chương 1 — Tập hợp, dãy, hàm và quan hệ hai ngôi',
    overview: [
      'Chương mở đầu thiết lập bộ từ vựng cấu trúc cho toàn bộ Toán rời rạc và Khoa học Máy tính: cách gom nhóm các đối tượng phân biệt không thứ tự thành tập hợp, cách biểu diễn các phần tử có thứ tự và có lặp bằng dãy hay bộ (tuples), cách mô hình hóa phép biến đổi xác định bằng hàm số, và cách biểu diễn mối liên hệ tổng quát giữa các phần tử bằng quan hệ hai ngôi. Người học nắm được điều kiện để một hàm khả nghịch thông qua tính đơn ánh và toàn ánh, cũng như cách quan hệ tương đương phân hoạch một tập hợp thành các lớp tương đương rời nhau.',
    ],
    sources: [
      {
        sourceId: 'mit-6042j-2015',
        locator: 'Chapter 4: Mathematical Data Types (§4.1 Sets, §4.2 Sequences, §4.3 Functions, §4.4 Binary Relations) & Chapter 9 (§9.5–9.10 Equivalence and Partial Orders)',
        relationship: 'primary',
      },
    ],
    topics: [
      {
        id: 'dm-sfr-sets-power-cartesian',
        title: 'Tập hợp, phép toán tập hợp, tập lũy thừa (Power Set) và tích Descartes',
        level: 'core',
        paragraphs: [
          'Một tập hợp (set) là một bộ sưu tập không tính thứ tự và không tính lặp của các đối tượng toán học được xác định rõ ràng gọi là phần tử; hai tập hợp $A$ và $B$ bằng nhau khi và chỉ khi chúng có cùng các phần tử ($\\forall x, x \\in A \\iff x \\in B$). Từ quan hệ bao hàm tập con ($A \\subseteq B$), ta xây dựng các phép toán đại số tập hợp gồm hợp ($A \\cup B$), giao ($A \\cap B$), hiệu ($A \\setminus B$), hiệu đối xứng ($A \\oplus B$) và phần bù ($\\overline{A}$ trên vũ trụ $U$), tuân theo các luật kết hợp, phân phối và luật De Morgan $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$.',
          'Để mô hình hóa không gian mọi lựa chọn con hoặc các bản ghi dữ liệu có thứ tự, ta định nghĩa hai phép dựng tập hợp cốt lõi. Tập lũy thừa $\\mathcal{P}(A)$ là tập hợp chứa tất cả các tập con của $A$; nếu $A$ hữu hạn có $|A| = n$ phần tử thì $|\\mathcal{P}(A)| = 2^n$, vì mỗi phần tử của $A$ có hai trạng thái độc lập (thuộc hoặc không thuộc một tập con) — tương ứng trực tiếp với một xâu nhị phân độ dài $n$. Tích Descartes $A \\times B = \\{(a, b) \\mid a \\in A, b \\in B\\}$ tạo ra tập các cặp có thứ tự, mở rộng thành tích $n$-ngôi $A_1 \\times \\dots \\times A_n$ làm nền tảng toán học cho kiểu dữ liệu bản ghi (`struct`) và bảng trong cơ sở dữ liệu quan hệ.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 4: §4.1 Sets and §4.2 Sequences',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-sfr-functions-injections-bijections',
        title: 'Hàm số, miền xác định, ảnh, đơn ánh (Injection), toàn ánh (Surjection) và song ánh (Bijection)',
        level: 'core',
        paragraphs: [
          'Một hàm toàn phần $f: A \\to B$ là một quy tắc gán mỗi phần tử $a$ thuộc miền xác định (domain) $A$ với đúng một phần tử duy nhất $f(a)$ thuộc miền đích (codomain) $B$; trong Khoa học Máy tính, cần phân biệt hàm toàn phần với hàm bộ phận (partial function) vốn có thể không xác định trên một số đầu vào (tương ứng chương trình báo lỗi hoặc lặp vô hạn). Tập hợp các giá trị thực sự đạt được $f(A) = \\{f(a) \\mid a \\in A\\} \\subseteq B$ được gọi là ảnh (image/range) của hàm, và phép hợp hàm $(g \\circ f)(x) = g(f(x))$ đòi hỏi miền đích của $f$ phải khớp với miền xác định của $g$.',
          'Bản chất ánh xạ của hàm được phân loại qua ba tính chất nền tảng: hàm $f: A \\to B$ là đơn ánh (injective / one-to-one) nếu không có hai đầu vào khác nhau nào sinh ra cùng một đầu ra ($f(a_1) = f(a_2) \\implies a_1 = a_2$, tức phép mã hóa không va chạm); là toàn ánh (surjective / onto) nếu mọi phần tử trong miền đích $B$ đều có ít nhất một tạo ảnh trong $A$ ($f(A) = B$); và là song ánh (bijective) nếu đồng thời vừa đơn ánh vừa toàn ánh. Một hàm $f$ có hàm ngược hai phía $f^{-1}: B \\to A$ khi và chỉ khi $f$ là song ánh; trên các tập hữu hạn, sự tồn tại của một đơn ánh, toàn ánh hay song ánh giữa $A$ và $B$ kéo theo các quan hệ lực lượng tương ứng $|A| \\le |B|$, $|A| \\ge |B|$ và $|A| = |B|$.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 4: §4.3 Functions & §4.5 Finite Cardinality',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-sfr-equivalence-partitions',
        title: 'Quan hệ hai ngôi, tính chất phản xạ – đối xứng – bắc cầu, quan hệ tương đương và phân hoạch',
        level: 'core',
        paragraphs: [
          'Một quan hệ hai ngôi $R$ từ tập $A$ sang tập $B$ là một tập con bất kỳ của tích Descartes $A \\times B$; khi $A = B$, ta gọi $R \\subseteq A \\times A$ là một quan hệ trên tập $A$ và ký hiệu $a R b$ thay cho $(a, b) \\in R$. Một quan hệ trên $A$ được đặc trưng bởi các tính chất cấu trúc: tính phản xạ ($\\forall a \\in A, a R a$), tính đối xứng ($\\forall a, b \\in A, a R b \\implies b R a$), tính phản xứng ($\\forall a, b \\in A, (a R b \\land b R a) \\implies a = b$) và tính bắc cầu ($\\forall a, b, c \\in A, (a R b \\land b R c) \\implies a R c$).',
          'Một quan hệ đồng thời thỏa mãn ba tính chất phản xạ, đối xứng và bắc cầu được gọi là quan hệ tương đương (equivalence relation), tiêu biểu như quan hệ đồng dư modulo $m$ trên tập số nguyên hoặc quan hệ liên thông hai chiều trên đồ thị. Với mỗi phần tử $a \\in A$, lớp tương đương $[a]_R = \\{x \\in A \\mid x R a\\}$ gom tất cả các phần tử tương đương với $a$. Định lý cơ bản về quan hệ tương đương khẳng định rằng họ các lớp tương đương của $R$ tạo thành một phân hoạch (partition) của tập $A$ — tức là các tập con khác rỗng, đôi một rời nhau ($[a]_R \\cap [b]_R = \\emptyset$ nếu $a \\not\\!R b$) và có hợp bằng toàn bộ $A$.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 4 (§4.4 Binary Relations) & Chapter 9 (§9.10 Equivalence Relations and Partitions)',
            relationship: 'primary',
          },
        ],
      },
    ],
  },
  {
    id: 'dm-logic-predicates',
    title: 'Chương 2 — Logic mệnh đề, đại số Boolean và logic vị từ',
    overview: [
      'Chương này cung cấp hệ thống quy tắc hình thức để biểu diễn các khẳng định toán học và điều kiện trong chương trình mà không bị nhập nhằng bởi ngôn ngữ tự nhiên. Nội dung đi từ logic mệnh đề, các phép nối chân trị, bản chất của phép kéo theo $P \\implies Q$, tương đương logic và các dạng chuẩn tắc hội/tuyển (CNF/DNF), đến logic vị từ với lượng từ phổ quát $\\forall$, lượng từ tồn tại $\\exists$ và quy tắc biến đổi phủ định trên các biểu thức đa lượng từ lồng nhau.',
    ],
    sources: [
      {
        sourceId: 'mit-6042j-2015',
        locator: 'Chapter 3: Logical Formulas (§3.1–3.6 Propositions, Equivalence, Normal Forms, Predicates and Quantifiers)',
        relationship: 'primary',
      },
    ],
    topics: [
      {
        id: 'dm-lp-propositions-implication',
        title: 'Mệnh đề, phép nối chân trị, bản chất của phép kéo theo (P => Q), đảo và phản đảo',
        level: 'core',
        paragraphs: [
          'Một mệnh đề (proposition) là một câu khẳng định có giá trị chân lý xác định: hoặc đúng ($\\text{T}$), hoặc sai ($\\text{F}$), nhưng không thể vừa đúng vừa sai. Từ các mệnh đề nguyên tử, ta xây dựng các công thức phức hợp bằng phép phủ định ($\\neg P$), phép hội ($P \\land Q$), phép tuyển ($P \\lor Q$), phép tuyển loại trừ ($P \\oplus Q$), phép kéo theo ($P \\implies Q$) và phép tương đương hai chiều ($P \\iff Q$). Trong đó, phép kéo theo $P \\implies Q$ ("nếu $P$ thì $Q$") chỉ nhận giá trị sai trong duy nhất một trường hợp là giả thiết $P$ đúng nhưng kết luận $Q$ sai; khi giả thiết $P$ sai, mệnh đề $P \\implies Q$ được coi là đúng rỗng (vacuously true) vì cam kết điều kiện không bị vi phạm.',
          'Từ mệnh đề kéo theo $P \\implies Q$, việc phân biệt rõ ba mệnh đề liên đới có ý nghĩa quyết định trong chứng minh toán học và kiểm tra điều kiện lập trình: mệnh đề đảo (converse) là $Q \\implies P$, mệnh đề nghịch (inverse) là $\\neg P \\implies \\neg Q$, và mệnh đề phản đảo (contrapositive) là $\\neg Q \\implies \\neg P$. Bảng chân trị chứng minh rằng $P \\implies Q$ luôn tương đương logic hoàn toàn với mệnh đề phản đảo $\\neg Q \\implies \\neg P$ (và tương đương với $\\neg P \\lor Q$), nhưng không tương đương với mệnh đề đảo $Q \\implies P$; nhầm lẫn giữa chiều thuận và chiều đảo là nguồn gốc của ngụy biện khẳng định hậu kiện.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 3: §3.1 Propositions from Propositions & §3.2 Propositional Logic in Computer Programs',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-lp-equivalence-cnf-dnf-sat',
        title: 'Tương đương logic, hằng đúng, dạng chuẩn tắc tuyển (DNF), chuẩn tắc hội (CNF) và bài toán SAT',
        level: 'core',
        paragraphs: [
          'Một công thức mệnh đề được gọi là hằng đúng (tautology / valid) nếu nó luôn nhận giá trị $\\text{T}$ dưới mọi phép gán chân trị của các biến thành phần; được gọi là thỏa mãn được (satisfiable) nếu tồn tại ít nhất một phép gán làm nó đúng; và là mâu thuẫn (unsatisfiable) nếu luôn nhận giá trị $\\text{F}$. Hai công thức $F$ và $G$ tương đương logic ($F \\equiv G$) khi và chỉ khi $F \\iff G$ là hằng đúng. Nhờ các luật đại số mệnh đề (giao hoán, kết hợp, phân phối, hấp thụ, De Morgan $\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q$), mọi công thức phức tạp đều có thể biến đổi tương đương về dạng chuẩn.',
          'Hai dạng chuẩn tắc quan trọng nhất là Dạng chuẩn tắc tuyển (Disjunctive Normal Form — DNF, tức tuyển của các mệnh đề hội sơ cấp, đọc trực tiếp từ các dòng có giá trị $\\text{T}$ trong bảng chân trị) và Dạng chuẩn tắc hội (Conjunctive Normal Form — CNF, tức hội của các mệnh đề tuyển gọi là các mệnh đề con / clauses). Mặc dù mọi công thức đều đưa được về DNF hoặc CNF tương đương, việc chuyển trực tiếp từ DNF sang CNF bằng luật phân phối có thể làm kích thước công thức bùng nổ theo hàm mũ. Bài toán kiểm tra xem một công thức dạng CNF có thỏa mãn được hay không (CNF-SAT) chính là bài toán NP-đầy đủ gốc trong lý thuyết độ phức tạp tính toán.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 3: §3.3 Equivalence and Validity, §3.4 The Algebra of Propositions, §3.5 The SAT Problem',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-lp-predicates-quantifiers-negation',
        title: 'Logic vị từ, miền diễn dịch, lượng từ lồng nhau và quy tắc De Morgan cho lượng từ',
        level: 'core',
        paragraphs: [
          'Logic mệnh đề không đủ sức biểu đạt các khẳng định phụ thuộc biến trên tập vô hạn hoặc tập kích thước biến thiên. Logic vị từ mở rộng ngôn ngữ bằng các vị từ $P(x, y)$ (hàm trả về giá trị chân lý khi thay $x, y$ từ một miền diễn dịch $D$ xác định) kết hợp với lượng từ phổ quát $\\forall x \\in D, P(x)$ ("với mọi $x$ thuộc $D$, $P(x)$ đúng") và lượng từ tồn tại $\\exists x \\in D, P(x)$ ("tồn tại ít nhất một $x$ thuộc $D$ sao cho $P(x)$ đúng"). Khi miền $D = \\{x_1, \\dots, x_n\\}$ hữu hạn, $\\forall x \\in D, P(x)$ tương đương với hội $P(x_1) \\land \\dots \\land P(x_n)$, còn $\\exists x \\in D, P(x)$ tương đương với tuyển $P(x_1) \\lor \\dots \\lor P(x_n)$ (do đó trên tập rỗng $D = \\emptyset$, khẳng định $\\forall$ luôn đúng rỗng còn khẳng định $\\exists$ luôn sai).',
          'Khi nhiều lượng từ khác loại được đặt lồng nhau, thứ tự của chúng quyết định hoàn toàn ý nghĩa mệnh đề: khẳng định $\\forall x \\, \\exists y, P(x, y)$ cho phép chọn $y$ phụ thuộc vào từng $x$ đã cho, trong khi khẳng định mạnh hơn rất nhiều $\\exists y \\, \\forall x, P(x, y)$ đòi hỏi phải tồn tại một phần tử $y$ cố định duy nhất thỏa mãn đồng thời cho mọi $x$. Khi phủ định một mệnh đề có lượng từ, quy tắc De Morgan tổng quát đòi hỏi đổi mọi lượng từ $\\forall$ thành $\\exists$, đổi $\\exists$ thành $\\forall$ và đẩy dấu phủ định vào vị từ bên trong: $\\neg(\\forall x \\, \\exists y, P(x, y)) \\equiv \\exists x \\, \\forall y, \\neg P(x, y)$. Đây là công cụ cơ sở để xây dựng phản ví dụ hoặc viết điều kiện dừng của thuật toán tìm kiếm.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 3: §3.6 Predicate Formulas (Quantifiers, Order of Quantifiers, Negating Quantifiers)',
            relationship: 'primary',
          },
        ],
      },
    ],
  },
  {
    id: 'dm-proofs-induction',
    title: 'Chương 3 — Phương pháp chứng minh toán học và nguyên lý quy nạp',
    overview: [
      'Trong Khoa học Máy tính, kiểm thử trên vài triệu bộ đầu vào không bao giờ thay thế được chứng minh toán học cho tính đúng đắn trên mọi đầu vào khả dĩ. Chương này trình bày cấu trúc của một chứng minh hợp lệ cùng các chiến lược chứng minh cốt lõi (trực tiếp, phản đảo, phản chứng, chia trường hợp, phản ví dụ), nguyên lý thứ tự tốt (Well-Ordering Principle), quy nạp toán học thường và quy nạp mạnh, đồng thời phân tích các ngụy biện quy nạp kinh điển.',
    ],
    sources: [
      {
        sourceId: 'mit-6042j-2015',
        locator: 'Chapter 1 (§1.1–1.9 What is a Proof?), Chapter 2 (§2.1–2.4 The Well Ordering Principle), and Chapter 5 (§5.1–5.3 Induction)',
        relationship: 'primary',
      },
    ],
    topics: [
      {
        id: 'dm-pi-direct-contrapositive-contradiction',
        title: 'Chứng minh trực tiếp, chứng minh bằng phản đảo, chứng minh phản chứng và phản ví dụ',
        level: 'core',
        paragraphs: [
          'Một chứng minh toán học là một dãy hữu hạn các bước suy luận hợp lệ đi từ các tiên đề (axioms), định nghĩa và các bổ đề đã biết tới kết luận cần chứng minh. Với mệnh đề dạng kéo theo $P \\implies Q$, chứng minh trực tiếp bắt đầu bằng việc giả sử $P$ đúng và sử dụng chuỗi quy tắc suy diễn (như Modus Ponens: từ $A$ và $A \\implies B$ suy ra $B$) để dẫn tới $Q$. Khi giả thiết $P$ chứa cấu trúc phủ định hoặc khó khai thác trực tiếp (ví dụ "nếu $n^2$ chẵn thì $n$ chẵn"), phương pháp chứng minh bằng phản đảo chuyển bài toán sang chứng minh mệnh đề tương đương $\\neg Q \\implies \\neg P$ ("nếu $n$ lẻ thì $n^2$ lẻ"), giúp giả thiết mới trở nên cụ thể và dễ biến đổi đại số.',
          'Phương pháp chứng minh bằng phản chứng (proof by contradiction) dựa trên sự tương đương $\\neg P \\implies \\text{False} \\equiv P$: để chứng minh mệnh đề $S$ đúng, ta giả sử $\\neg S$ đúng rồi suy diễn logic cho đến khi thu được một mâu thuẫn вида $R \\land \\neg R$ (chẳng hạn chứng minh $\\sqrt{2}$ là số vô tỉ hoặc tập số nguyên tố là vô hạn). Ngược lại, để bác bỏ một mệnh đề phổ quát $\\forall x \\in D, P(x)$, ta không cần biến đổi đại số tổng quát mà chỉ cần chỉ ra đúng một phản ví dụ (counterexample) cụ thể $x_0 \\in D$ sao cho $P(x_0)$ sai.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 1: §1.4 Proving an Implication, §1.5 Proving an If and Only If, §1.6 Proof by Cases, §1.7 Proof by Contradiction',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-pi-well-ordering-ordinary-induction',
        title: 'Nguyên lý thứ tự tốt (Well-Ordering Principle) và Quy nạp toán học thường',
        level: 'core',
        paragraphs: [
          'Nguyên lý thứ tự tốt (Well-Ordering Principle — WOP) phát biểu rằng mọi tập con khác rỗng của tập các số nguyên không âm $\\mathbb{N}$ đều có một phần tử nhỏ nhất. Nguyên lý tưởng chừng hiển nhiên này là công cụ mạnh mẽ để chứng minh bằng phản chứng: nếu một tính chất $P(n)$ bị nghi ngờ không đúng với mọi $n \\in \\mathbb{N}$, thì tập hợp các phản ví dụ $C = \\{n \\in \\mathbb{N} \\mid \\neg P(n)\\}$ là khác rỗng, do đó theo WOP phải tồn tại phản ví dụ nhỏ nhất $m \\in C$; việc chỉ ra một phần tử nhỏ hơn $m$ cũng vi phạm tính chất (hoặc chứng minh $m$ không thể tồn tại) sẽ buộc $C = \\emptyset$.',
          'Tương đương về mặt logic với WOP là Nguyên lý quy nạp toán học thường (Ordinary Induction) dùng để chứng minh mệnh đề $\\forall n \\ge b, P(n)$. Một chứng minh quy nạp hợp lệ gồm hai phần bắt buộc: Bước cơ sở (Base case) kiểm chứng trực tiếp rằng $P(b)$ đúng tại giá trị khởi đầu $b$; và Bước quy nạp (Inductive step) chứng minh rằng với mọi $k \\ge b$ bất kỳ, nếu giả thiết quy nạp $P(k)$ đúng thì mệnh đề kế tiếp $P(k + 1)$ cũng phải đúng ($\\forall k \\ge b, P(k) \\implies P(k+1)$). Sai lầm phổ biến nhất của người mới học là nhầm mệnh đề $P(n)$ với một biểu thức số (ví dụ viết "$P(n) = n(n+1)/2$" thay vì mệnh đề có giá trị chân lý "$P(n)$: tổng $\\sum_{i=1}^n i = n(n+1)/2$").',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 2 (§2.1–2.4 Well Ordering Proofs) & Chapter 5 (§5.1 Ordinary Induction)',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-pi-strong-induction-false-proofs',
        title: 'Quy nạp mạnh (Strong Induction), lựa chọn số trường hợp cơ sở và chẩn đoán ngụy biện quy nạp',
        level: 'core',
        paragraphs: [
          'Trong nhiều bài toán Khoa học Máy tính—như phân tích thuật toán chia đôi kích thước $n \\to \\lfloor n/2 \\rfloor$, phân tích một hợp số $n = a \\cdot b$ thành tích hai số nhỏ hơn, hay giải hệ thức đệ quy bậc hai $T(n) = T(n-1) + T(n-2)$—trạng thái tại $n+1$ không chỉ phụ thuộc vào trạng thái ngay sát trước $n$ mà phụ thuộc vào các giá trị nhỏ hơn nằm sâu hơn trong quá khứ. Quy nạp mạnh (Strong Induction) giải quyết vấn đề này bằng cách cho phép giả thiết quy nạp ở bước chuyển tiếp giả sử $P(b), P(b+1), \\dots, P(k)$ đều đồng thời đúng cho mọi chỉ số từ mốc cơ sở $b$ đến $k$, để từ đó suy ra $P(k+1)$ đúng.',
          'Khi sử dụng quy nạp mạnh hoặc quy nạp nhảy nhiều bước, điều kiện sống còn để chứng minh không bị thủng là mọi chỉ số cơ sở chưa đủ điều kiện áp dụng phép lùi quy nạp đều phải được kiểm tra tường minh ở Bước cơ sở. Ví dụ, nếu bước quy nạp lùi từ $k+1$ về $k$ và $k-1$, phép lùi này chỉ hợp lệ khi $k - 1 \\ge b$, tức $k+1 \\ge b+2$; do đó Bước cơ sở bắt buộc phải kiểm tra độc lập cả hai trường hợp $P(b)$ và $P(b+1)$. Việc quên kiểm tra biên áp dụng của bước quy nạp chính là kẽ hở tạo nên ngụy biện nổi tiếng "mọi con ngựa đều có cùng màu" (nơi phép lấy giao hai tập con cỡ $k$ bị rỗng và sụp đổ tại bước chuyển từ $1$ lên $2$).',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 5: §5.1.5 A Faulty Induction Proof (All Horses are the Same Color) & §5.2 Strong Induction',
            relationship: 'primary',
          },
        ],
      },
    ],
  },
  {
    id: 'dm-recursive-definitions-invariants',
    title: 'Chương 4 — Định nghĩa đệ quy, quy nạp cấu trúc và bất biến máy trạng thái',
    overview: [
      'Chương này kết nối trực tiếp phương pháp quy nạp toán học với hai trụ cột của lập trình và hệ thống: một là các kiểu dữ liệu được định nghĩa đệ quy (như danh sách liên kết, cây nhị phân, biểu thức cú pháp) đi kèm phương pháp quy nạp cấu trúc; hai là mô hình máy trạng thái (state machines) dùng để chứng minh tính đúng đắn từng phần (partial correctness) thông qua bất biến bảo toàn và chứng minh tính dừng (termination) thông qua hàm biến thiên giảm nghiêm ngặt.',
    ],
    sources: [
      {
        sourceId: 'mit-6042j-2015',
        locator: 'Chapter 5 (§5.4 State Machines) and Chapter 6 (§6.1–6.4 Recursive Data Types and Structural Induction)',
        relationship: 'primary',
      },
    ],
    topics: [
      {
        id: 'dm-rdi-recursive-datatypes-structural-induction',
        title: 'Kiểu dữ liệu đệ quy, tính không nhập nhằng và nguyên lý quy nạp cấu trúc (Structural Induction)',
        level: 'core',
        paragraphs: [
          'Một tập hợp hoặc kiểu dữ liệu đệ quy $S$ được định nghĩa thông qua ba thành phần: một tập các phần tử cơ sở (base cases) thuộc $S$; một tập các quy tắc kiến tạo (constructor cases) cho phép ghép các phần tử đã thuộc $S$ để tạo ra phần tử mới thuộc $S$; và điều khoản đóng khẳng định không có phần tử nào thuộc $S$ ngoài những phần tử sinh ra từ số bước hữu hạn các quy tắc trên. Cây nhị phân có gốc, xâu ngoặc cân bằng và cây cú pháp trừu tượng (AST) của trình biên dịch đều được định nghĩa theo cấu trúc này, cho phép định nghĩa các hàm đệ quy (như tính số nút, chiều cao cây hay lượng giá biểu thức) bám sát từng quy tắc kiến tạo.',
          'Để chứng minh một tính chất $P(x)$ đúng với mọi phần tử $x \\in S$, phương pháp Quy nạp cấu trúc (Structural Induction) thực hiện: (1) chứng minh $P(b)$ đúng với mọi phần tử cơ sở $b$; và (2) với mỗi quy tắc kiến tạo $c(x_1, \\dots, x_m)$, giả sử giả thiết quy nạp $P(x_1), \\dots, P(x_m)$ đúng trên các thành phần con, rồi chứng minh $P(c(x_1, \\dots, x_m))$ cũng đúng. Nhờ tính tương ứng 1–1 giữa định nghĩa cấu trúc dữ liệu, định nghĩa hàm đệ quy trên cấu trúc đó và chứng minh quy nạp cấu trúc, lập trình viên có thể chứng minh chặt chẽ các định lý như "mọi cây nhị phân đầy đủ có $L$ nút lá thì có đúng $L - 1$ nút trong" mà không cần quy đổi về chỉ số số nguyên.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 6: §6.1 Recursive Data Types, §6.2 Strings of Brackets, §6.3 Functions on Recursively-Defined Data Types, §6.4 Arithmetic Expressions',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-rdi-state-machines-preserved-invariants',
        title: 'Mô hình máy trạng thái, trạng thái khả đạt và phương pháp Bất biến bảo toàn (Preserved Invariants)',
        level: 'core',
        paragraphs: [
          'Mọi thuật toán lặp, giao thức mạng hay tiến trình đồng thời đều có thể được mô hình hóa chính xác dưới dạng một Máy trạng thái (State Machine) gồm một tập trạng thái $Q$, một trạng thái khởi đầu $q_0 \\in Q$ và một quan hệ chuyển trạng thái $\\delta \\subseteq Q \\times Q$ (viết $q \\to q\'$). Một thực thi (execution) là một dãy trạng thái $q_0 \\to q_1 \\to q_2 \\to \\dots$, và một trạng thái $q$ được gọi là khả đạt (reachable) nếu tồn tại một dãy chuyển hữu hạn đi từ $q_0$ tới $q$.',
          'Để chứng minh hệ thống không bao giờ rơi vào trạng thái lỗi (hoặc khi dừng sẽ cho kết quả đúng — partial correctness), ta sử dụng Nguyên lý Bất biến (Invariant Principle): một vị từ $P(q)$ trên trạng thái là một bất biến bảo toàn (preserved invariant) nếu với mọi bước chuyển hợp lệ $q \\to q\'$, việc $P(q)$ đúng kéo theo $P(q\')$ cũng đúng ($P(q) \\land (q \\to q\') \\implies P(q\')$). Bằng quy nạp theo số bước chuyển, nếu $P(q_0)$ đúng tại trạng thái đầu và $P$ được bảo toàn qua mọi phép chuyển, thì $P(q)$ chắc chắn đúng tại mọi trạng thái khả đạt $q$. Đôi khi một tính chất đích $G(q)$ là đúng nhưng không đủ mạnh để tự chứng minh bước chuyển tiếp $G(q) \\implies G(q\')$; kỹ thuật cốt lõi khi đó là làm mạnh bất biến (strengthening the invariant) bằng cách hội thêm điều kiện về các biến phụ trợ.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 5: §5.4 State Machines (§5.4.1 States and Transitions, §5.4.2 Invariant Principle)',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-rdi-termination-ranking-functions',
        title: 'Tính đúng đắn từng phần vs Tính đúng đắn toàn phần và chứng minh tính dừng bằng biến giảm',
        level: 'core',
        paragraphs: [
          'Trong xác minh thuật toán, tính đúng đắn toàn phần (total correctness) được tách thành hai mệnh đề độc lập: (1) Tính đúng đắn từng phần (partial correctness) phát biểu rằng *nếu* thuật toán dừng tại một trạng thái kết thúc, thì trạng thái đó thỏa mãn hậu điều kiện của bài toán (được chứng minh bằng bất biến bảo toàn kết hợp với phủ định của điều kiện tiếp tục lặp); và (2) Tính dừng (termination) phát biểu rằng mọi chuỗi thực thi xuất phát từ đầu vào hợp lệ đều phải kết thúc sau một số hữu hạn bước.',
          'Công cụ chuẩn mực để chứng minh tính dừng của một máy trạng thái là xây dựng một biến dẫn xuất (derived variable / ranking function) $f: Q \\to \\mathbb{N}$ gán mỗi trạng thái với một số nguyên không âm (hoặc giá trị trong một tập có thứ tự tốt) sao cho $f$ giảm nghiêm ngặt qua mỗi bước chuyển: $\\forall (q \\to q\'), f(q\') < f(q)$. Theo Nguyên lý thứ tự tốt, một dãy các số nguyên không âm giảm nghiêm ngặt $f(q_0) > f(q_1) > f(q_2) > \\dots \\ge 0$ không thể kéo dài vô hạn (và có độ dài tối đa là $f(q_0)$ bước), do đó thuật toán bắt buộc phải dừng và đồng thời $f(q_0)$ cung cấp luôn một cận trên cho số bước thực thi.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 5: §5.4.3 Partial Correctness and Termination & Derived Variables',
            relationship: 'primary',
          },
        ],
      },
    ],
  },
  {
    id: 'dm-number-theory-modular',
    title: 'Chương 5 — Số học nguyên, ước chung lớn nhất và đồng dư modulo',
    overview: [
      'Số học nguyên từng được coi là ngành toán thuần túy nhất nhưng nay lại là nền tảng trực tiếp của hàm băm, phát hiện lỗi, bộ sinh số giả ngẫu nhiên và mật mã khóa công khai hiện đại. Chương này trình bày phép chia Euclid, thuật toán Euclid tìm ước chung lớn nhất, đồng nhất thức Bézout, định lý cơ bản của số học, vành số học đồng dư modulo $n$, điều kiện tồn tại nghịch đảo nhân và các định lý Fermat nhỏ, Euler.',
    ],
    sources: [
      {
        sourceId: 'mit-6042j-2015',
        locator: 'Chapter 8: Number Theory (§8.1–8.9 Divisibility, GCD, Prime Mysteries, Modular Arithmetic, Euler and Fermat Theorems)',
        relationship: 'primary',
      },
    ],
    topics: [
      {
        id: 'dm-ntm-divisibility-euclid-bezout',
        title: 'Phép chia có dư, thuật toán Euclid, đồng nhất thức Bézout và phân tích thừa số nguyên tố duy nhất',
        level: 'core',
        paragraphs: [
          'Định lý phép chia có dư khẳng định rằng với mọi số nguyên $a$ và số nguyên dương $b > 0$, tồn tại duy nhất cặp số nguyên thương $q$ và số dư $r$ sao cho $a = q b + r$ với $0 \\le r < b$. Dựa trên bất biến $\\gcd(a, b) = \\gcd(b, a \\bmod b)$, thuật toán Euclid thay thế cặp $(a, b)$ bằng $(b, a \\bmod b)$ lặp đi lặp lại cho tới khi số dư bằng $0$; vì sau mỗi hai bước số dư giảm đi ít nhất một nửa, thuật toán dừng sau không quá $2 \\lceil \\log_2 b \\rceil$ phép chia — một thuật toán thời gian đa thức theo số bit biểu diễn đầu vào.',
          'Bằng cách truy vết ngược các phép chia của thuật toán Euclid (Extended Euclidean Algorithm), ta thu được Bổ đề Bézout: ước chung lớn nhất $\\gcd(a, b)$ chính là số nguyên dương nhỏ nhất biểu diễn được dưới dạng tổ hợp tuyến tính nguyên $s a + t b = \\gcd(a, b)$ với $s, t \\in \\mathbb{Z}$ (hệ số Bézout). Bổ đề Bézout là chìa khóa để chứng minh Bổ đề Euclid (nếu số nguyên tố $p \\mid a b$ và $p \\nmid a$ thì $p \\mid b$), từ đó suy ra Định lý cơ bản của số học: mọi số nguyên lớn hơn $1$ đều phân tích được một cách duy nhất (không kể thứ tự) thành tích của các thừa số nguyên tố.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 8: §8.1 Divisibility, §8.2 The Greatest Common Divisor (Euclid’s Algorithm & Pulverizer/Bézout), §8.3 Prime Mysteries (Fundamental Theorem of Arithmetic)',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-ntm-modular-arithmetic-inverses',
        title: 'Quan hệ đồng dư modulo n, tính tương thích số học và điều kiện tồn tại nghịch đảo nhân',
        level: 'core',
        paragraphs: [
          'Với số nguyên dương $n > 1$, hai số nguyên $a$ và $b$ được gọi là đồng dư theo modulo $n$, ký hiệu $a \\equiv b \\pmod n$, nếu $n \\mid (a - b)$ (tương đương với việc $a$ và $b$ có cùng số dư khi chia cho $n$). Quan hệ đồng dư là một quan hệ tương đương phân hoạch $\\mathbb{Z}$ thành đúng $n$ lớp thặng dư $\\mathbb{Z}_n = \\{[0], [1], \\dots, [n-1]\\}$, và tương thích hoàn toàn với phép cộng, phép trừ và phép nhân: nếu $a \\equiv a\' \\pmod n$ và $b \\equiv b\' \\pmod n$ thì $(a + b) \\equiv (a\' + b\') \\pmod n$ và $a b \\equiv a\' b\' \\pmod n$, cho phép lấy dư ở từng bước trung gian để chống tràn số nguyên trong lập trình.',
          'Tuy nhiên, phép chia (giản ước nhân tử chung) trong đồng dư modulo không được phép thực hiện tùy tiện: từ $2 \\cdot 3 \\equiv 2 \\cdot 0 \\pmod 6$ không thể suy ra $3 \\equiv 0 \\pmod 6$. Một phần tử $a$ chỉ có thể giản ước được khi nó có nghịch đảo nhân modulo $n$, tức là tồn tại số nguyên $a^{-1}$ sao cho $a \\cdot a^{-1} \\equiv 1 \\pmod n$. Nhờ đồng nhất thức Bézout $s a + t n = \\gcd(a, n)$, ta chứng minh được điều kiện cần và đủ: $a$ có nghịch đảo nhân theo modulo $n$ khi và chỉ khi $a$ và $n$ nguyên tố cùng nhau ($\\gcd(a, n) = 1$), và hệ số Bézout $s \\bmod n$ chính là nghịch đảo $a^{-1}$ cần tìm, tính được trong thời gian $O(\\log n)$.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 8: §8.5 Modular Arithmetic & §8.6 Arithmetic with a Prime Modulus / Multiplicative Inverses',
            relationship: 'primary',
          },
        ],
      },
      {
        id: 'dm-ntm-fermat-euler-crt',
        title: 'Hàm phi Euler, Định lý Fermat nhỏ, Định lý Euler và Định lý thặng dư Trung Hoa',
        level: 'core',
        paragraphs: [
          'Tập hợp các lớp thặng dư trong $\\{1, 2, \\dots, n-1\\}$ nguyên tố cùng nhau với $n$ tạo thành nhóm nhân các phần tử khả nghịch $\\mathbb{Z}_n^*$; lực lượng của tập này được ký hiệu bởi hàm phi Euler $\\phi(n) = |\\mathbb{Z}_n^*|$ (với số nguyên tố $p$, $\\phi(p) = p - 1$; với tích hai số nguyên tố phân biệt $n = p q$, $\\phi(p q) = (p - 1)(q - 1)$). Bằng cách nhân toàn bộ các phần tử của $\\mathbb{Z}_n^*$ với một phần tử $a \\in \\mathbb{Z}_n^*$ và sử dụng tính song ánh của phép nhân với phần tử khả nghịch, ta thu được Định lý Euler: với mọi $a$ thỏa mãn $\\gcd(a, n) = 1$, ta luôn có $a^{\\phi(n)} \\equiv 1 \\pmod n$.',
          'Trong trường hợp đặc biệt khi mô-đun là một số nguyên tố $p$, định lý Euler rút gọn thành Định lý Fermat nhỏ: $a^{p-1} \\equiv 1 \\pmod p$ với mọi $p \\nmid a$, cho phép rút gọn số mũ lớn theo modulo $p - 1$ và tính nghịch đảo nhân qua lũy thừa nhanh $a^{-1} \\equiv a^{p-2} \\pmod p$. Bên cạnh đó, khi mô-đun $N = m_1 m_2 \\cdots m_k$ là tích của các thừa số đôi một nguyên tố cùng nhau, Định lý thặng dư Trung Hoa (Chinese Remainder Theorem — CRT) thiết lập một song ánh bảo toàn cả phép cộng lẫn phép nhân giữa $\\mathbb{Z}_N$ và tích trực tiếp $\\mathbb{Z}_{m_1} \\times \\dots \\times \\mathbb{Z}_{m_k}$, cho phép thực hiện các phép toán số lớn bằng cách tính song song trên các mô-đun nhỏ.',
        ],
        sources: [
          {
            sourceId: 'mit-6042j-2015',
            locator: 'Chapter 8: §8.6 Fermat’s Little Theorem, §8.7 Arithmetic with an Arbitrary Modulus (Euler’s Theorem), §8.9 RSA Public Key Encryption',
            relationship: 'primary',
          },
        ],
      },
    ],
  },
];
