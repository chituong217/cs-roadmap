export const COURSE_LINEAR_ALGEBRA = {
  id: 'linear-algebra',
  code: 'CS-10',
  title: 'Đại số tuyến tính',
  blockId: 'block-2',
  level: 'core',
  prerequisites: [
    {
      courseId: 'math-bridge',
      type: 'required',
      reason: 'Cần nắm vững biến số, hệ phương trình cơ bản, tọa độ phẳng, lượng giác trên đường tròn đơn vị và số phức từ Môn CS-02.',
    },
    {
      courseId: 'discrete-math',
      type: 'recommended',
      reason: 'Tư duy chứng minh, tập hợp và ánh xạ đơn ánh/toàn ánh/song ánh từ Môn CS-09 giúp hiểu sâu cấu trúc không gian vector cùng hạt nhân và ảnh của ánh xạ tuyến tính.',
    },
  ],
  overview: [
    'Môn học xây dựng ngôn ngữ toán học trung tâm của học máy (Machine Learning), thị giác máy tính, đồ họa 3D, tối ưu hóa và tính toán khoa học: không gian vector và ánh xạ tuyến tính. Thay vì dạy Đại số tuyến tính như những bảng số vô hồn chỉ dùng để bấm máy giải hệ phương trình hay tính định thức cơ học, môn học đi theo đúng trục tư tưởng của Gilbert Strang (MIT 18.06SC): đặt song song góc nhìn hình học và góc nhìn đại số ngay từ phương trình $Ax = b$, trong đó tích ma trận–vector $Ax$ không chỉ là những tích vô hướng từng hàng mà chính là **tổ hợp tuyến tính các cột của ma trận $A$**.',
    'Từ thuật toán khử Gauss và phân rã $PA = LU$, môn học phát triển khái niệm không gian vector, độc lập tuyến tính, cơ sở, số chiều, hạng (rank) và **Định lý cơ bản của Đại số tuyến tính về Bốn không gian con** (Column space, Nullspace, Row space, Left nullspace). Các chương tiếp theo làm rõ bản chất của ánh xạ tuyến tính và phép đổi cơ sở, tính trực giao, phép chiếu trực giao giải bài toán xấp xỉ **Bình phương tối thiểu (Least Squares)** khi hệ $Ax = b$ vô nghiệm, trực chuẩn hóa Gram–Schmidt ($A = QR$), ý nghĩa hình học của định thức, bài toán **Trị riêng – Vector riêng (Eigenvalues & Eigenvectors)** để phân tích hệ động lực $A^k x_0$, và kết thúc ở đỉnh cao là **Ma trận đối xứng xác định dương** cùng **Phân rã giá trị kỳ dị (Singular Value Decomposition — SVD)** $A = U\\Sigma V^T$ cho ma trận kích thước bất kỳ.',
  ],
  boundaries: [
    'Môn học tự trọn vẹn trên nền tảng Toán nền (`CS-02`), hoàn toàn không yêu cầu phải học xong Giải tích nhiều biến trước; các đạo hàm theo vector/ma trận (gradient, Jacobian, Hessian) sẽ được xây dựng ở Môn CS-12 trên chính nền tảng ma trận và dạng toàn phương của môn này.',
    'Tránh lối học tính định thức cấp 4–5 bằng tay hoặc tìm ma trận nghịch đảo bằng phần bù đại số cơ học; nhấn mạnh rằng trong tính toán thực tế trên máy tính, giải hệ $Ax = b$ dùng phân rã $LU$ hoặc $QR$ chứ không tính tường minh $A^{-1}$.',
  ],
  sources: [
    {
      sourceId: 'mit-1806sc',
      locator: 'Unit I: Ax = b and the Four Subspaces, Unit II: Least Squares, Determinants and Eigenvalues, and Unit III: Positive Definite Matrices and SVD',
      relationship: 'primary',
    },
  ],
  chapters: [
    {
      id: 'la-systems-elimination-matrices',
      title: 'Chương 1 — Hệ phương trình tuyến tính Ax = b, Khử Gauss, Đại số ma trận và Phân rã PA = LU',
      overview: [
        'Chương mở đầu thiết lập hai góc nhìn nền tảng về hệ phương trình tuyến tính $Ax = b$ (hình ảnh theo hàng và hình ảnh theo cột), trình bày thuật toán khử Gauss để tìm các phần tử chốt (pivots), bốn cách hiểu phép nhân ma trận $AB$, điều kiện tồn tại ma trận nghịch đảo $A^{-1}$ và cách ghi lại toàn bộ quá trình khử Gauss thành phân rã thừa số $PA = LU$.',
      ],
      sources: [
        {
          sourceId: 'mit-1806sc',
          locator: 'Unit I: introductory lecture pages (Geometry of Linear Equations, Elimination, Matrix Operations, Inverses, Transposes, Permutations, and PA = LU)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'la-sem-row-column-pictures-matrix-vector',
          title: 'Hai góc nhìn hình học của hệ Ax = b: Giao của các siêu phẳng (Row Picture) so với Tổ hợp tuyến tính các cột (Column Picture)',
          level: 'core',
          paragraphs: [
            'Xét một hệ gồm $m$ phương trình tuyến tính với $n$ ẩn số, được viết gọn dưới dạng ma trận $Ax = b$, trong đó $A \\in \\mathbb{R}^{m \\times n}$, vector ẩn $x \\in \\mathbb{R}^n$ và vector vế phải $b \\in \\mathbb{R}^m$. Tiểu mục này đối chiếu hai cách nhìn hoàn toàn khác nhau nhưng tương đương về cùng một phương trình $Ax = b$: (1) **Hình ảnh theo hàng (Row Picture)** xem mỗi phương trình thứ $i$ (tức tích vô hướng của hàng thứ $i$ của $A$ với $x$ bằng $b_i$) là một đường thẳng (trong $\\mathbb{R}^2$), một mặt phẳng (trong $\\mathbb{R}^3$) hoặc một siêu phẳng (trong $\\mathbb{R}^n$), và nghiệm $x$ là điểm giao chung của tất cả $m$ siêu phẳng đó; (2) **Hình ảnh theo cột (Column Picture)** gọi $a_1, a_2, \\dots, a_n \\in \\mathbb{R}^m$ là $n$ vector cột của ma trận $A$, và định nghĩa tích ma trận–vector $Ax$ chính là **tổ hợp tuyến tính (linear combination)** của các cột với hệ số là các thành phần của $x$: $$Ax = x_1 a_1 + x_2 a_2 + \\dots + x_n a_n = b$$',
            'Góc nhìn theo cột chuyển câu hỏi đại số "hệ $Ax = b$ có nghiệm hay không với mọi vế phải $b \\in \\mathbb{R}^m$?" thành câu hỏi hình học sâu sắc: "các tổ hợp tuyến tính của $n$ vector cột $a_1, \\dots, a_n$ có lấp đầy toàn bộ không gian $\\mathbb{R}^m$ hay chỉ nằm gọn trong một mặt phẳng/đường thẳng suy biến?". Chính định nghĩa $Ax$ như tổ hợp các cột là chìa khóa xuyên suốt cả môn học để hiểu không gian cột, hạng ma trận và phép chiếu.',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit I, The Geometry of Linear Equations (Row Picture vs. Column Picture of Ax = b)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'la-sem-gaussian-elimination-pivots-multipliers',
          title: 'Thuật toán khử Gauss (Gaussian Elimination), phần tử chốt (Pivots), thế ngược và các trường hợp suy biến',
          level: 'core',
          paragraphs: [
            'Để giải hệ $Ax = b$ một cách có thuật toán trên máy tính, **phép khử Gauss (Gaussian Elimination)** biến đổi hệ phương trình gốc về dạng tam giác trên (hoặc dạng bậc thang — row echelon form $Ux = c$) bằng chuỗi phép biến đổi sơ cấp theo hàng bảo toàn tập nghiệm: lấy một hàng trừ đi bội số $\\ell_{ij} = \\frac{a_{ij}}{a_{jj}}$ của hàng chốt phía trên để triệt tiêu các hệ số nằm dưới đường chéo về $0$, sau đó giải từ phương trình cuối ngược lên đầu bằng **thế ngược (back substitution)**. Phần tử khác $0$ đầu tiên dùng để khử cột thứ $j$ được gọi là **phần tử chốt (pivot)** (về định nghĩa, phần tử chốt không bao giờ được bằng $0$).',
            'Tiểu mục phân tích rõ hai tình huống khi vị trí dự kiến làm chốt bị bằng $0$ trong quá trình khử: (1) **Hỏng tạm thời (Temporary failure)**: bên dưới vị trí $0$ đó trên cùng cột vẫn còn một số khác $0$; ta chỉ cần thực hiện **đổi chỗ hai hàng (row exchange / partial pivoting)** để đưa số khác $0$ (thực tế trong giải tích số thường chọn số có trị tuyệt đối lớn nhất trên cột để giảm sai số làm tròn dấu chấm động) lên làm chốt và tiếp tục khử bình thường; và (2) **Thất bại thực sự (Complete failure / Singular case)**: cả vị trí hiện tại lẫn toàn bộ các phần tử bên dưới nó trên cùng cột đều bằng $0$; lúc này cột đó không có phần tử chốt, ma trận vuông bị suy biến (không khả nghịch), và hệ phương trình hoặc vô nghiệm (nếu vế phải sau khi khử dẫn tới $0 = c \\neq 0$) hoặc có vô số nghiệm.',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit I, Elimination with Matrices (Pivots, Multipliers, Row Exchanges, Failure of Elimination)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'la-sem-matrix-multiplication-inverses-lu',
          title: 'Bốn góc nhìn của phép nhân ma trận AB, ma trận nghịch đảo, ma trận hoán vị và phân rã PA = LU',
          level: 'core',
          paragraphs: [
            'Với hai ma trận $A \\in \\mathbb{R}^{m \\times n}$ và $B \\in \\mathbb{R}^{n \\times p}$ (số cột của $A$ bắt buộc bằng số hàng của $B$), tích $C = AB \\in \\mathbb{R}^{m \\times p}$ có thể được hiểu theo bốn cách tương đương: (1) Phần tử lẻ $c_{ij}$ là tích vô hướng của hàng $i$ của $A$ với cột $j$ của $B$; (2) **Theo cột**: cột thứ $j$ của $AB$ chính là $A b_j$ (tổ hợp tuyến tính các cột của $A$); (3) **Theo hàng**: hàng thứ $i$ của $AB$ là hàng $i$ của $A$ nhân với $B$ (tổ hợp tuyến tính các hàng của $B$); và (4) **Tổng các ma trận hạng 1 (Column-times-Row)**: $AB = \\sum_{k=1}^n (\\text{cột } k \\text{ của } A)(\\text{hàng } k \\text{ của } B)$ — góc nhìn thứ tư này là nền tảng trực tiếp của phân rã giá trị kỳ dị SVD ở Chương 6. Phép nhân ma trận có tính kết hợp $(AB)C = A(BC)$, phân phối với phép cộng, nhưng **không có tính giao hoán** ($AB \\neq BA$ nói chung), và chuyển vị đảo thứ tự tích: $(AB)^T = B^T A^T$.',
            'Đối với ma trận vuông $A \\in \\mathbb{R}^{n \\times n}$, $A$ được gọi là **khả nghịch (invertible / nonsingular)** nếu tồn tại $A^{-1}$ sao cho $A^{-1}A = AA^{-1} = I_n$, tương đương với việc khử Gauss tạo ra đủ $n$ phần tử chốt khác $0$ và phương trình $Ax = 0$ chỉ có nghiệm tầm thường $x = 0$ (thuật toán Gauss–Jordan tìm $A^{-1}$ bằng cách khử ma trận ghép $[A \\mid I] \\to [I \\mid A^{-1}]$). Tuy nhiên, trong tính toán khoa học, thay vì tốn chi phí tính $A^{-1}$, mỗi bước trừ hàng trong khử Gauss được biểu diễn bằng một ma trận sơ cấp $E_{ij}$ mà nghịch đảo của nó chỉ đơn giản là đổi dấu các hệ số nhân $\\ell_{ij}$; gom toàn bộ các hệ số nhân $\\ell_{ij}$ vào một ma trận tam giác dưới có đường chéo bằng $1$ là $L$ (Lower triangular) và kết hợp với ma trận hoán vị hàng $P$ (Permutation matrix thỏa mãn $P^{-1} = P^T$), ta thu được **Phân rã $PA = LU$**. Một khi đã phân rã $PA = LU$ (tốn $\\approx \\frac{1}{3}n^3$ phép toán), với mọi vector vế phải $b$ mới, ta chỉ cần giải hai hệ tam giác cực nhanh $Lc = Pb$ (thế xuôi) rồi $Ux = c$ (thế ngược) trong $O(n^2)$ phép toán.',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit I, Multiplication and Inverse Matrices, Factorization into A = LU, Transposes and Permutations (PA = LU)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'la-vector-spaces-subspaces',
      title: 'Chương 2 — Không gian vector, Độc lập tuyến tính, Cơ sở, Số chiều và Bốn không gian con cơ bản',
      overview: [
        'Chương này xây dựng cấu trúc đại số cốt lõi của không gian vector: thế nào là một không gian con, khi nào một hệ vector là độc lập tuyến tính và tạo thành cơ sở, định nghĩa hạng (rank) của ma trận, cấu trúc nghiệm tổng quát của $Ax = b$, và Định lý cơ bản của Đại số tuyến tính kết nối bốn không gian con của mọi ma trận $m \\times n$.',
      ],
      sources: [
        {
          sourceId: 'mit-1806sc',
          locator: 'Unit I: vector-space lecture pages (Column Space, Nullspace, Solving Ax = 0 and Ax = b, Independence, Basis, Dimension, and the Four Fundamental Subspaces)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'la-vss-subspaces-column-nullspace',
          title: 'Không gian vector, điều kiện đóng của Không gian con (Subspace), Không gian cột C(A) và Không gian nghiệm thuần nhất N(A)',
          level: 'core',
          paragraphs: [
            'Một **không gian vector (vector space)** trên trường số thực $\\mathbb{R}$ (điển hình là $\\mathbb{R}^n$ hoặc không gian các ma trận, đa thức, hàm số) là một tập hợp trang bị phép cộng hai vector và phép nhân vector với một vô hướng thỏa mãn 8 tiên đề đại số chuẩn. Một tập con khác rỗng $S \\subseteq V$ được gọi là một **không gian con (subspace)** nếu và chỉ nếu nó **đóng kín đối với mọi tổ hợp tuyến tính**: với mọi $u, v \\in S$ và mọi số thực $\\alpha, \\beta \\in \\mathbb{R}$, vector $\\alpha u + \\beta v$ vẫn phải nằm trong $S$. Điều kiện này kéo theo một hệ quả kiểm tra tức thì: **mọi không gian con bắt buộc phải chứa vector không $\\mathbf{0}$** (khi chọn $\\alpha = \\beta = 0$); bất kỳ đường thẳng hay mặt phẳng nào trong $\\mathbb{R}^n$ không đi qua gốc tọa độ đều không phải là không gian con (mà chỉ là tập affine dịch chuyển).',
            'Từ một ma trận $A \\in \\mathbb{R}^{m \\times n}$, hai không gian con quan trọng nhất xuất hiện ngay lập tức ở hai phía không gian khác nhau: (1) **Không gian cột (Column Space) $C(A) \\subseteq \\mathbb{R}^m$** là tập hợp tất cả các tổ hợp tuyến tính của các cột của $A$, tức $C(A) = \\{Ax \\mid x \\in \\mathbb{R}^n\\}$; hệ phương trình $Ax = b$ có nghiệm khi và chỉ khi vector vế phải $b$ nằm trong không gian cột $C(A)$; và (2) **Không gian hạt nhân / Không gian không (Nullspace) $N(A) \\subseteq \\mathbb{R}^n$** là tập hợp tất cả các nghiệm của hệ phương trình thuần nhất $Ax = 0$, tức $N(A) = \\{x \\in \\mathbb{R}^n \\mid Ax = 0\\}$ (luôn là không gian con vì nếu $Ax_1 = 0$ và $Ax_2 = 0$ thì $A(\\alpha x_1 + \\beta x_2) = \\alpha Ax_1 + \\beta Ax_2 = 0$).',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit I, Column Space and Nullspace & Solving Ax = 0: Pivot Variables, Special Solutions',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'la-vss-rref-rank-complete-solution',
          title: 'Dạng bậc thang rút gọn RREF, biến chốt so với biến tự do, Hạng ma trận (Rank) và nghiệm tổng quát x = x_p + x_n',
          level: 'core',
          paragraphs: [
            'Để tìm toàn bộ không gian $N(A)$ của một ma trận $A \\in \\mathbb{R}^{m \\times n}$ bất kỳ, thuật toán khử Gauss tiếp tục khử ngược cả các phần tử phía trên mỗi chốt về $0$ và chia mỗi hàng có chốt cho chính giá trị chốt đó để thu được **Dạng bậc thang rút gọn theo hàng (Reduced Row Echelon Form — $R = \\operatorname{rref}(A)$)**. Số lượng các phần tử chốt khác $0$ xuất hiện trong quá trình khử là một bất biến nội tại của ma trận được gọi là **Hạng của ma trận (Rank — ký hiệu $r = \\operatorname{rank}(A)$)**, luôn thỏa mãn $r \\le \\min(m, n)$. Các cột thứ $j$ có chứa phần tử chốt tương ứng với $r$ **biến chốt (pivot variables)**, còn $n - r$ cột không có chốt tương ứng với $n - r$ **biến tự do (free variables)**.',
            'Bằng cách lần lượt gán một biến tự do bằng $1$ và các biến tự do còn lại bằng $0$, ta giải ra được đúng $n - r$ **nghiệm cơ sở đặc biệt (special solutions)** $s_1, \\dots, s_{n-r} \\in N(A)$, và mọi nghiệm của $Ax = 0$ đều là tổ hợp tuyến tính của chúng. Hơn nữa, khi xét hệ không thuần nhất $Ax = b$ (với $b \\in C(A)$), **nghiệm tổng quát đầy đủ (complete solution)** luôn có cấu trúc cộng tính: $$x_{\\text{complete}} = x_p + x_n$$ trong đó $x_p$ là một **nghiệm riêng (particular solution)** thỏa mãn $Ax_p = b$ (tìm được bằng cách đặt tất cả các biến tự do bằng $0$), còn $x_n \\in N(A)$ là nghiệm tổng quát của hệ thuần nhất $Ax_n = 0$. Tiểu mục hệ thống hóa 4 trường hợp của hạng $r$ so với $m$ và $n$: hạng cột đầy đủ ($r = n$: không có biến tự do, $N(A) = \\{0\\}$, có $0$ hoặc $1$ nghiệm), hạng hàng đầy đủ ($r = m$: $C(A) = \\mathbb{R}^m$, luôn có nghiệm với mọi $b$), ma trận vuông khả nghịch ($r = m = n$: duy nhất 1 nghiệm), và trường hợp $r < m, r < n$ ($0$ hoặc vô số nghiệm).',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit I, (Solving Ax = 0) & (Solving Ax = b: Row Reduced Form R)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'la-vss-independence-basis-dimension-four-subspaces',
          title: 'Độc lập tuyến tính, Hệ sinh, Cơ sở (Basis), Số chiều (Dimension) và Định lý cơ bản về Bốn không gian con',
          level: 'core',
          paragraphs: [
            'Một hệ các vector $v_1, v_2, \\dots, v_k$ được gọi là **độc lập tuyến tính (linearly independent)** nếu tổ hợp tuyến tính duy nhất của chúng cho ra vector không $\\mathbf{0}$ là tổ hợp tầm thường (tất cả hệ số $c_1 = c_2 = \\dots = c_k = 0$). Nếu xếp các vector đó thành các cột của ma trận $A$, thì chúng độc lập tuyến tính khi và chỉ khi không gian hạt nhân $N(A)$ chỉ chứa duy nhất vector $\\mathbf{0}$ (tức hạng $r = k$, không có biến tự do). Một tập vector vừa **sinh ra (span)** toàn bộ không gian con $V$ (mọi vector trong $V$ biểu diễn được qua chúng), vừa **độc lập tuyến tính** (không thừa vector nào) được gọi là một **cơ sở (basis)** của $V$. Tuy một không gian con có vô số bộ cơ sở khác nhau, nhưng mọi cơ sở của cùng một không gian con luôn có **cùng một số lượng vector**; con số bất biến đó được định nghĩa là **số chiều (dimension — $\\dim(V)$)** của không gian con.',
            'Kết hợp các khái niệm trên cho cả ma trận $A \\in \\mathbb{R}^{m \\times n}$ và ma trận chuyển vị $A^T \\in \\mathbb{R}^{n \\times m}$, ta đạt tới **Định lý cơ bản của Đại số tuyến tính (Fundamental Theorem of Linear Algebra — Part 1)** mô tả **Bốn không gian con cơ bản**: (1) **Không gian hàng (Row Space) $C(A^T) \\subseteq \\mathbb{R}^n$** có số chiều bằng $r$ (cơ sở là $r$ hàng khác $0$ của ma trận bậc thang $R$); (2) **Không gian cột (Column Space) $C(A) \\subseteq \\mathbb{R}^m$** cũng có số chiều đúng bằng $r$ (với quy tắc quan trọng: cơ sở của $C(A)$ là $r$ cột chốt lấy từ **ma trận gốc $A$** chứ không lấy từ $R$, vì phép biến đổi hàng làm thay đổi không gian cột); (3) **Không gian hạt nhân (Nullspace) $N(A) \\subseteq \\mathbb{R}^n$** có số chiều bằng $n - r$, thiết lập đẳng thức **Định lý Hạng – Số khuyết (Rank-Nullity Theorem)**: $$\\dim C(A) + \\dim N(A) = r + (n - r) = n$$ và (4) **Không gian hạt nhân trái (Left Nullspace) $N(A^T) \\subseteq \\mathbb{R}^m$** (gồm các vector $y$ sao cho $A^T y = 0 \\iff y^T A = 0^T$) có số chiều bằng $m - r$.',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit I, (Independence, Basis, and Dimension) & (The Four Fundamental Subspaces)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'la-linear-maps-change-of-basis',
      title: 'Chương 3 — Ánh xạ tuyến tính (Linear Transformations), Biểu diễn ma trận và Phép đổi cơ sở',
      overview: [
        'Chương này làm sáng tỏ bản chất sâu xa của ma trận: mỗi ma trận thực chất là bảng tọa độ của một ánh xạ tuyến tính (phép quay, phép chiếu, phép phản xạ, phép đạo hàm) khi ta chọn một bộ cơ sở cho không gian đầu vào và không gian đầu ra. Đổi bộ cơ sở sẽ làm thay đổi ma trận biểu diễn theo quy tắc đồng dạng $B = M^{-1}AM$.',
      ],
      sources: [
        {
          sourceId: 'mit-1806sc',
          locator: 'Unit III: (Linear Transformations and Their Matrices) & (Change of Basis; Image Compression)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'la-lmcb-linear-transformations-kernel-image',
          title: 'Định nghĩa Ánh xạ tuyến tính T: V -> W, tính chất bảo toàn tổ hợp tuyến tính, Hạt nhân (Kernel) và Ảnh (Image/Range)',
          level: 'core',
          paragraphs: [
            'Một ánh xạ $T: V \\to W$ từ không gian vector $V$ vào không gian vector $W$ được gọi là một **ánh xạ tuyến tính (linear transformation / linear map)** nếu nó bảo toàn phép cộng vector và phép nhân vô hướng, tức là thỏa mãn điều kiện gộp: $$T(\\alpha u + \\beta v) = \\alpha T(u) + \\beta T(v), \\quad \\forall u, v \\in V,\\; \\forall \\alpha, \\beta \\in \\mathbb{R}$$ Hệ quả tất yếu đầu tiên là mọi ánh xạ tuyến tính đều phải biến vector không thành vector không: $T(\\mathbf{0}_V) = \\mathbf{0}_W$ (do đó phép tịnh tiến $f(x) = x + v_0$ với $v_0 \\neq 0$ không phải là ánh xạ tuyến tính trên $\\mathbb{R}^n$). Các ví dụ trực quan trong hình học và giải tích gồm: phép quay quanh gốc tọa độ một góc $\\theta$, phép chiếu vuông góc lên một đường thẳng/mặt phẳng, phép lấy đạo hàm $D(p) = p\'(x)$ trên không gian các đa thức, và phép tính tích phân.',
            'Mỗi ánh xạ tuyến tính $T: V \\to W$ gắn liền với hai không gian con: **Hạt nhân (Kernel)** $\\ker(T) = \\{v \\in V \\mid T(v) = \\mathbf{0}_W\\} \\subseteq V$ (ánh xạ $T$ là đơn ánh / một-một khi và chỉ khi $\\ker(T) = \\{\\mathbf{0}_V\\}$) và **Ảnh (Image / Range)** $\\operatorname{Im}(T) = \\{T(v) \\mid v \\in V\\} \\subseteq W$ (ánh xạ $T$ là toàn ánh khi $\\operatorname{Im}(T) = W$). Khi biểu diễn qua ma trận $A$, $\\ker(T)$ chính là Nullspace $N(A)$ và $\\operatorname{Im}(T)$ chính là Column Space $C(A)$.',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit III, Linear Transformations and Their Matrices (Linearity conditions, geometric examples, Kernel and Range)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'la-lmcb-matrix-of-linear-map',
          title: 'Xây dựng ma trận của ánh xạ tuyến tính theo cơ sở và ý nghĩa của phép nhân ma trận như phép hợp ánh xạ',
          level: 'core',
          paragraphs: [
            'Vì ánh xạ tuyến tính bảo toàn tổ hợp tuyến tính, nếu ta biết ảnh $T(v_1), T(v_2), \\dots, T(v_n)$ của một bộ cơ sở $\\mathcal{B}_V = \\{v_1, \\dots, v_n\\}$ của $V$, thì giá trị của $T(v)$ tại **mọi** vector $v = c_1 v_1 + \\dots + c_n v_n \\in V$ đều được xác định duy nhất bởi $T(v) = c_1 T(v_1) + \\dots + c_n T(v_n)$. Khi chọn cơ sở $\\mathcal{B}_V = \\{v_1, \\dots, v_n\\}$ cho đầu vào $V$ và cơ sở $\\mathcal{B}_W = \\{w_1, \\dots, w_m\\}$ cho đầu ra $W$, ma trận biểu diễn $A \\in \\mathbb{R}^{m \\times n}$ của ánh xạ $T$ được xây dựng theo một quy tắc duy nhất: **cột thứ $j$ của ma trận $A$ chính là vector tọa độ của ảnh $T(v_j)$ được khai triển theo cơ sở đầu ra $\\mathcal{B}_W$**.',
            'Chẳng hạn trong $\\mathbb{R}^2$ với cơ sở chính tắc $e_1 = (1, 0)^T, e_2 = (0, 1)^T$, phép quay ngược chiều kim đồng hồ góc $\\theta$ biến $e_1$ thành $(\\cos\\theta, \\sin\\theta)^T$ (cột 1) và biến $e_2$ thành $(-\\sin\\theta, \\cos\\theta)^T$ (cột 2), cho ta ngay ma trận quay $R(\\theta) = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$. Góc nhìn này cũng giải thích vì sao định nghĩa phép nhân hai ma trận $AB$ lại có quy tắc hàng-nhân-cột như ở Chương 1: ma trận tích $AB$ không phải quy ước ngẫu nhiên mà chính là ma trận biểu diễn của **ánh xạ hợp $(T_A \\circ T_B)(x) = T_A(T_B(x))$** (thực hiện biến đổi $B$ trước rồi thực hiện biến đổi $A$ sau).',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit III, Constructing the Matrix of a Linear Transformation from Basis Inputs and Outputs',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'la-lmcb-change-of-basis-similarity',
          title: 'Ma trận chuyển cơ sở (Change-of-Basis Matrix), biến đổi tọa độ và hai ma trận đồng dạng B = M^{-1} A M',
          level: 'core',
          paragraphs: [
            'Cùng một vector vật lý trong không gian sẽ có các bộ số tọa độ khác nhau khi được đo trên các hệ trục cơ sở khác nhau (ví dụ trong nén ảnh JPEG hay xử lý tín hiệu, thay vì biểu diễn tín hiệu theo cơ sở điểm ảnh từng vị trí rời rạc, người ta đổi sang cơ sở sóng/tần số Fourier hoặc Wavelet để loại bỏ các hệ số tần số cao gần bằng $0$). Nếu các cột của ma trận khả nghịch $M$ là các vector của bộ cơ sở mới $w_1, \\dots, w_n$ viết trong cơ sở chuẩn, thì một vector có tọa độ $c$ trong cơ sở mới sẽ có tọa độ trong cơ sở chuẩn là $x = Mc$, và ngược lại tọa độ trong cơ sở mới là $c = M^{-1}x$.',
            'Khi xét một phép biến đổi tuyến tính $T: V \\to V$ từ một không gian vào chính nó, nếu trong cơ sở chuẩn ánh xạ $T$ có ma trận là $A$ ($x \\mapsto Ax$), thì trong bộ cơ sở mới xác định bởi các cột của $M$, cũng chính ánh xạ $T$ đó được biểu diễn bởi ma trận: $$B = M^{-1} A M$$ (bởi vì đi từ tọa độ mới $c$, nhân $M$ để đổi sang cơ sở chuẩn, nhân $A$ để thực hiện biến đổi, rồi nhân $M^{-1}$ để đổi kết quả về lại cơ sở mới). Hai ma trận $A$ và $B$ liên hệ với nhau qua $B = M^{-1}AM$ được gọi là **hai ma trận đồng dạng (similar matrices)**: chúng đại diện cho cùng một toán tử tuyến tính nhìn từ hai hệ quy chiếu khác nhau, do đó luôn có cùng hạng, cùng định thức, cùng vết (trace) và cùng tập hợp các trị riêng.',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit III, Change of Basis, Image Compression, and Similar Matrices ($B = M^{-1}AM$)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'la-orthogonality-least-squares',
      title: 'Chương 4 — Tính trực giao (Orthogonality), Phép chiếu, Bình phương tối thiểu (Least Squares) và Phân rã QR',
      overview: [
        'Chương này giải quyết bài toán thực tế phổ biến nhất trong khoa học dữ liệu và học máy: khi có nhiều phương trình quan sát hơn số ẩn ($m > n$) và dữ liệu có nhiễu làm cho hệ $Ax = b$ vô nghiệm ($b \\notin C(A)$), làm thế nào để tìm nghiệm xấp xỉ tốt nhất $\\hat{x}$ bằng phép chiếu trực giao của $b$ lên không gian cột $C(A)$?',
      ],
      sources: [
        {
          sourceId: 'mit-1806sc',
          locator: 'Unit II: orthogonality lecture pages (Orthogonal Vectors and Subspaces, Projections onto Subspaces, Projection Matrices and Least Squares, Orthogonal Matrices and Gram–Schmidt)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'la-ols-orthogonal-subspaces-complements',
          title: 'Tích vô hướng, độ dài chuẩn Euclid, tính trực giao và Phần bù trực giao của Bốn không gian con',
          level: 'core',
          paragraphs: [
            'Trên không gian $\\mathbb{R}^n$, **tích vô hướng (dot product / inner product)** của hai vector cột $x, y \\in \\mathbb{R}^n$ được viết gọn bằng phép nhân ma trận là $x^T y = \\sum_{i=1}^n x_i y_i$. Tích vô hướng định nghĩa **độ dài (norm / length)** của một vector là $\\|x\\| = \\sqrt{x^T x} \\ge 0$ và góc $\\theta$ giữa hai vector khác không qua $\\cos\\theta = \\frac{x^T y}{\\|x\\|\\|y\\|}$ (luôn thỏa mãn bất đẳng thức Cauchy–Schwarz $|x^T y| \\le \\|x\\|\\|y\\|$). Hai vector $x$ và $y$ được gọi là **trực giao / vuông góc (orthogonal)** khi và chỉ khi $x^T y = 0$, tương đương với định lý Pythagoras $\\|x + y\\|^2 = \\|x\\|^2 + \\|y\\|^2$. Mở rộng lên tập hợp, hai không gian con $V$ và $W$ là trực giao nếu mọi vector $v \\in V$ đều vuông góc với mọi vector $w \\in W$.',
            'Điều này dẫn tới **Định lý cơ bản của Đại số tuyến tính — Phần 2 (Orthogonality of the Four Subspaces)**: trong $\\mathbb{R}^n$, không gian hạt nhân $N(A)$ không chỉ có số chiều bù với không gian hàng $C(A^T)$ ($r + (n-r) = n$), mà $N(A)$ chính là **phần bù trực giao (orthogonal complement)** của $C(A^T)$ (ký hiệu $N(A) = C(A^T)^\\perp$), bởi vì $Ax = 0$ có nghĩa là $x$ vuông góc với từng hàng của $A$ nên vuông góc với mọi tổ hợp tuyến tính của các hàng. Hoàn toàn đối xứng trong $\\mathbb{R}^m$, không gian hạt nhân trái $N(A^T)$ là phần bù trực giao của không gian cột $C(A)$: $N(A^T) = C(A)^\\perp$.',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit II, Orthogonal Vectors and Subspaces (Fundamental Theorem Part 2: Row Space perp Nullspace)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'la-ols-projections-normal-equations-least-squares',
          title: 'Phép chiếu trực giao lên không gian con, ma trận chiếu P, Phương trình chuẩn A^T A x_hat = A^T b và hồi quy Bình phương tối thiểu',
          level: 'core',
          paragraphs: [
            'Khi hệ phương trình $Ax = b$ có nhiều phương trình hơn số ẩn ($m > n$) và dữ liệu thực nghiệm có nhiễu, vector $b$ hầu như chắc chắn nằm ngoài không gian cột $C(A)$ nên hệ $Ax = b$ vô nghiệm. Thay vì bỏ cuộc, ta tìm vector $\\hat{x} \\in \\mathbb{R}^n$ sao cho điểm $p = A\\hat{x} \\in C(A)$ nằm gần $b$ nhất theo nghĩa cực tiểu hóa bình phương độ dài vector sai số $\\|e\\|^2 = \\|b - A\\hat{x}\\|^2 = \\sum_{i=1}^m (b_i - (A\\hat{x})_i)^2$ — bài toán **Bình phương tối thiểu (Least Squares)**. Về mặt hình học, điểm $p = A\\hat{x}$ gần $b$ nhất trên không gian con $C(A)$ chính là **hình chiếu vuông góc (orthogonal projection)** của $b$ xuống $C(A)$, nghĩa là vector sai số $e = b - A\\hat{x}$ bắt buộc phải **vuông góc với toàn bộ không gian cột $C(A)$**.',
            'Theo định lý phần bù trực giao vừa học ở tiểu mục trước, một vector vuông góc với $C(A)$ khi và chỉ khi nó nằm trong không gian hạt nhân trái $N(A^T)$, tức là $A^T e = 0 \\iff A^T(b - A\\hat{x}) = 0$. Khai triển đẳng thức hình học này cho ta **Hệ phương trình chuẩn (Normal Equations)** trứ danh: $$A^T A \\hat{x} = A^T b$$ Tiểu mục chứng minh điều kiện áp dụng cực kỳ quan trọng: ma trận vuông đối xứng $A^T A \\in \\mathbb{R}^{n \\times n}$ là **khả nghịch khi và chỉ khi các cột của ma trận $A$ là độc lập tuyến tính** ($\\operatorname{rank}(A) = n$, bởi vì $N(A^T A) = N(A)$). Khi đó nghiệm bình phương tối thiểu duy nhất là $\\hat{x} = (A^T A)^{-1} A^T b$, hình chiếu là $p = A\\hat{x} = A(A^T A)^{-1}A^T b = Pb$, trong đó **ma trận chiếu (projection matrix)** $P = A(A^T A)^{-1}A^T$ luôn thỏa mãn hai tính chất đặc trưng: đối xứng ($P^T = P$) và lũy đẳng ($P^2 = P$ — chiếu thêm lần thứ hai lên cùng mặt phẳng không làm thay đổi hình chiếu). Đây chính là công thức cốt lõi để khớp đường thẳng/đa thức hồi quy tuyến tính qua đám mây điểm dữ liệu.',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit II, (Projections onto Subspaces) & (Projection Matrices and Least Squares)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'la-ols-orthonormal-bases-gram-schmidt-qr',
          title: 'Hệ cơ sở trực chuẩn (Orthonormal Basis), ma trận trực giao Q^T Q = I, quá trình Gram–Schmidt và phân rã A = QR',
          level: 'core',
          paragraphs: [
            'Mọi phép tính hình chiếu và tọa độ đều trở nên đơn giản triệt để nếu các vector cơ sở $q_1, q_2, \\dots, q_n$ đôi một vuông góc với nhau ($q_i^T q_j = 0$ khi $i \\neq j$) và đều có độ dài đơn vị ($\\|q_i\\| = 1$) — gọi là một **hệ trực chuẩn (orthonormal system)**. Khi ghép các cột trực chuẩn $q_1, \\dots, q_n$ thành ma trận $Q \\in \\mathbb{R}^{m \\times n}$, ta luôn có $Q^T Q = I_n$ (nếu $Q$ là ma trận vuông $n \\times n$, nó được gọi là **ma trận trực giao / orthogonal matrix** với $Q^T = Q^{-1}$, bảo toàn độ dài $\\|Qx\\| = \\|x\\|$ và góc giữa mọi vector như phép quay và phản xạ). Với cột trực chuẩn, ma trận $Q^T Q = I$ biến hệ phương trình chuẩn bình phương tối thiểu phức tạp thành phép nhân tức thời $\\hat{x} = Q^T b$ mà không cần giải hệ hay nghịch đảo ma trận nào!',
            'Làm thế nào để biến một hệ các cột độc lập tuyến tính $a_1, a_2, \\dots, a_n$ bất kỳ thành một hệ trực chuẩn $q_1, q_2, \\dots, q_n$ sinh ra cùng không gian cột? **Quá trình trực chuẩn hóa Gram–Schmidt** thực hiện tuần tự: giữ hướng của $a_1$ và chia cho độ dài của nó để được $q_1 = a_1 / \\|a_1\\|$; ở bước thứ $k$, lấy vector $a_k$ **trừ đi các hình chiếu của nó lên tất cả các hướng trực chuẩn đã xây dựng trước đó** $q_1, \\dots, q_{k-1}$ để giữ lại đúng phần dư vuông góc hoàn toàn mới: $$A_k = a_k - \\sum_{j=1}^{k-1} (q_j^T a_k) q_j, \\qquad q_k = \\frac{A_k}{\\|A_k\\|}$$ Viết ngược lại mối liên hệ tổ hợp tuyến tính giữa $a_k$ và $q_1, \\dots, q_k$ dưới dạng ma trận (với $r_{jk} = q_j^T a_k = 0$ khi $j > k$), toàn bộ quá trình Gram–Schmidt được đóng gói thành **Phân rã $A = QR$**, trong đó $Q$ có các cột trực chuẩn và $R$ là ma trận tam giác trên khả nghịch. Thay $A = QR$ vào phương trình chuẩn cho thấy $A^T A \\hat{x} = A^T b$ rút gọn thành hệ tam giác trên bền vững về mặt số học: $R\\hat{x} = Q^T b$.',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit II, Orthogonal Matrices and Gram–Schmidt ($Q^T Q = I$ and $A = QR$ Factorization)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'la-determinants-eigenvalues',
      title: 'Chương 5 — Định thức (Determinants), Trị riêng và Vector riêng (Eigenvalues & Eigenvectors) và Chéo hóa ma trận',
      overview: [
        'Chương này chuyển từ các bài toán tĩnh ($Ax = b$) sang các bài toán động lực ($A^k x_0$ và hệ phương trình vi phân/sai phân): làm thế nào để hiểu định thức như hệ số co giãn thể tích có hướng, tìm những phương đặc biệt trong không gian mà khi ma trận $A$ tác động lên chỉ bị co giãn theo một hệ số $\\lambda$ ($Ax = \\lambda x$) chứ không bị đổi hướng, và chéo hóa ma trận $A = S\\Lambda S^{-1}$.',
      ],
      sources: [
        {
          sourceId: 'mit-1806sc',
          locator: 'Unit II: determinant and eigenvalue lecture pages (Properties of Determinants, Cofactor Formulas and Volume, Eigenvalues and Eigenvectors, Diagonalization and Powers of A, Markov Matrices)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'la-de-determinant-properties-geometric-volume',
          title: 'Ba tiên đề xác định Định thức det(A), các tính chất đại số và ý nghĩa hình học là hệ số co giãn thể tích có hướng',
          level: 'core',
          paragraphs: [
            'Thay vì mở đầu bằng công thức tổng hoán vị rối rắm, định thức $\\det(A)$ của một ma trận vuông $A \\in \\mathbb{R}^{n \\times n}$ được xác định duy nhất từ **ba tính chất nền tảng**: (1) Định thức của ma trận đơn vị bằng $1$ ($\\det(I) = 1$); (2) Đổi chỗ hai hàng làm định thức đổi dấu; và (3) Định thức là hàm tuyến tính theo từng hàng riêng lẻ. Từ ba quy tắc này suy ra toàn bộ các tính chất cốt lõi: nếu hai hàng bằng nhau thì $\\det(A) = 0$; lấy một hàng trừ đi bội số của hàng khác (bước khử Gauss) **không làm thay đổi định thức**; do đó nếu khử Gauss với $k$ lần đổi chỗ hàng đưa $A$ về ma trận tam giác trên $U$, thì định thức tính được ngay trong $O(n^3)$ bằng **tích các phần tử chốt trên đường chéo**: $\\det(A) = (-1)^k u_{11} u_{22} \\cdots u_{nn}$. Nhờ vậy, $A$ khả nghịch khi và chỉ khi $\\det(A) \\neq 0$, định thức của tích bằng tích các định thức $\\det(AB) = \\det(A)\\det(B)$, và $\\det(A^T) = \\det(A)$.',
            'Về mặt ý nghĩa hình học, trị tuyệt đối $|\\det(A)|$ chính là **thể tích $n$ chiều của hình hộp (parallelepiped)** tạo bởi các hàng (hoặc các cột) của $A$ — đồng thời là **hệ số phóng đại thể tích (volume scaling factor)** khi ánh xạ tuyến tính $x \\mapsto Ax$ biến đổi một miền bất kỳ trong không gian (đó là lý do vì sao khi đổi biến trong tích phân bội ở Môn CS-12 hay đổi biến mật độ xác suất ở Môn CS-13, phần tử thể tích luôn phải nhân với trị tuyệt đối định thức Jacobian $|\\det J|$). Dấu của $\\det(A)$ cho biết phép biến đổi bảo toàn định hướng không gian ($\\det(A) > 0$, như phép quay) hay lật ngược định hướng gương ($\\det(A) < 0$, như phép phản xạ).',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit II, Properties of Determinants, Determinant Formulas and Cofactors, Cramer’s Rule, Inverse Matrix, and Volume',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'la-de-eigenvalues-eigenvectors-characteristic',
          title: 'Trị riêng (Eigenvalues), Vector riêng (Eigenvectors), đa thức đặc trưng det(A - lambda I) = 0, Vết (Trace) và Định thức',
          level: 'core',
          paragraphs: [
            'Hầu hết các vector $x$ khi nhân với ma trận vuông $A$ đều bị xoay sang một phương khác; tuy nhiên, những vector **khác không ($x \\neq \\mathbf{0}$)** mà sau khi nhân với $A$ vẫn nằm trên đúng đường thẳng phương ban đầu của chính nó được gọi là các **vector riêng (eigenvectors)** của $A$, và hệ số co giãn $\\lambda$ tương ứng được gọi là **trị riêng (eigenvalue)**: $$Ax = \\lambda x \\iff (A - \\lambda I)x = \\mathbf{0} \\quad (x \\neq \\mathbf{0})$$ Phương trình $(A - \\lambda I)x = \\mathbf{0}$ có nghiệm khác không $x \\in N(A - \\lambda I)$ khi và chỉ khi ma trận $(A - \\lambda I)$ bị suy biến (không khả nghịch), tức là $\\lambda$ phải là nghiệm của **phương trình đặc trưng (characteristic equation)** bậc $n$: $$\\det(A - \\lambda I) = 0$$ Sau khi giải tìm được mỗi trị riêng $\\lambda_i$, không gian con riêng (eigenspace) tương ứng được tìm bằng cách giải hệ thuần nhất $(A - \\lambda_i I)x = \\mathbf{0}$.',
            'Tiểu mục làm rõ hai bất biến kiểm tra cực kỳ hữu ích nối các hệ số của ma trận $A$ với toàn bộ $n$ trị riêng $\\lambda_1, \\lambda_2, \\dots, \\lambda_n$ (tính cả bội đại số): **Tổng tất cả các trị riêng luôn bằng Vết của ma trận (Trace — tổng các phần tử trên đường chéo chính)**: $\\sum_{i=1}^n \\lambda_i = \\operatorname{tr}(A) = \\sum_{i=1}^n a_{ii}$; và **Tích tất cả các trị riêng luôn bằng Định thức của ma trận**: $\\prod_{i=1}^n \\lambda_i = \\det(A)$. Tiểu mục cũng chỉ ra rằng một ma trận có các phần tử hoàn toàn là số thực vẫn có thể có các cặp **trị riêng phức liên hợp** $\\lambda = a \\pm bi$ (điển hình là ma trận quay $90^\\circ$ $\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$ không giữ nguyên phương của bất kỳ vector thực nào và có phương trình đặc trưng $\\lambda^2 + 1 = 0 \\implies \\lambda = \\pm i$, biểu thị sự xuất hiện của chuyển động quay/dao động).',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit II, Eigenvalues and Eigenvectors ($\det(A - \\lambda I) = 0$, Trace, Determinant, and Complex Eigenvalues)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'la-de-diagonalization-matrix-powers-markov',
          title: 'Điều kiện Chéo hóa ma trận A = S Lambda S^{-1}, tính lũy thừa A^k cho hệ động lực u_{k+1} = A u_k và Ma trận Markov',
          level: 'core',
          paragraphs: [
            'Giả sử ma trận $A \\in \\mathbb{R}^{n \\times n}$ có đủ **$n$ vector riêng độc lập tuyến tính** $x_1, x_2, \\dots, x_n$. Khi xếp $n$ vector riêng đó thành các cột của ma trận $S = \\begin{bmatrix} x_1 & x_2 & \\cdots & x_n \\end{bmatrix}$, tính độc lập tuyến tính đảm bảo $S$ khả nghịch, và phép nhân theo cột $AS = \\begin{bmatrix} \\lambda_1 x_1 & \\cdots & \\lambda_n x_n \\end{bmatrix} = S \\Lambda$ (với $\\Lambda = \\operatorname{diag}(\\lambda_1, \\dots, \\lambda_n)$ là ma trận đường chéo chứa các trị riêng) dẫn tới **Phân rã chéo hóa (Diagonalization)**: $$A = S \\Lambda S^{-1} \\iff S^{-1} A S = \\Lambda$$ Khi nâng lên lũy thừa bậc $k$, các cặp $S^{-1}S = I$ ở giữa tự động triệt tiêu nhau: $A^k = (S\\Lambda S^{-1})(S\\Lambda S^{-1})\\cdots(S\\Lambda S^{-1}) = S \\Lambda^k S^{-1}$, trong đó $\\Lambda^k = \\operatorname{diag}(\\lambda_1^k, \\dots, \\lambda_n^k)$. Đối với bài toán hệ động lực rời rạc $u_{k+1} = A u_k \\implies u_k = A^k u_0$, nếu khai triển trạng thái đầu theo cơ sở vector riêng $u_0 = c_1 x_1 + \\dots + c_n x_n$ (với $c = S^{-1}u_0$), thì trạng thái ở bước thứ $k$ được tách rời hoàn toàn thành: $$u_k = c_1 \\lambda_1^k x_1 + c_2 \\lambda_2^k x_2 + \\dots + c_n \\lambda_n^k x_n$$ (đây cũng chính là cách đại số tuyến tính giải hệ thức đệ quy bậc cao như Fibonacci $F_{k+1} = F_k + F_{k-1}$ bằng cách đặt vector trạng thái $u_k = (F_{k+1}, F_k)^T$). Khi $k \\to \\infty$, hệ tiến về $0$ nếu mọi $|\\lambda_i| < 1$, bùng nổ nếu có $|\\lambda_i| > 1$, và tiến về trạng thái dừng (steady state) nếu trị riêng trội có $\\lambda_1 = 1$ và các $|\\lambda_i| < 1$ còn lại tắt dần.',
            'Tiểu mục nhấn mạnh rõ **điều kiện áp dụng và giới hạn của chéo hóa**: (1) Khả năng chéo hóa ($A$ có đủ $n$ vector riêng độc lập) và khả năng nghịch đảo ($\\det A \\neq 0$, không có trị riêng $\\lambda = 0$) là **hai tính chất hoàn toàn độc lập nhau**; (2) Nếu mọi $n$ trị riêng đều phân biệt ($\\lambda_i \\neq \\lambda_j$) thì các vector riêng tương ứng chắc chắn độc lập tuyến tính và $A$ luôn chéo hóa được; nhưng nếu có **trị riêng lặp (repeated eigenvalues)**, số vector riêng độc lập tìm được từ $N(A - \\lambda I)$ (bội hình học — geometric multiplicity) có thể **nhỏ hơn** số lần lặp của nghiệm trong đa thức đặc trưng (bội đại số — algebraic multiplicity), chẳng hạn ma trận $\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$ có $\\lambda = 1$ bội 2 nhưng chỉ có 1 đường thẳng vector riêng nên **không chéo hóa được** (defective matrix). Cuối cùng, tiểu mục giới thiệu **Ma trận chuyển trạng thái Markov** (mọi phần tử $a_{ij} \\ge 0$ và tổng mỗi cột bằng $1$): luôn có trị riêng lớn nhất $\\lambda_1 = 1$, mọi $|\\lambda_i| \\le 1$, và vector riêng ứng với $\\lambda_1 = 1$ chính là phân phối xác suất dừng (nền tảng của thuật toán xếp hạng trang web PageRank và chuỗi Markov).',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit II, (Diagonalization and Powers of A) & (Markov Matrices; Fourier Series)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'la-symmetric-positive-definite-svd',
      title: 'Chương 6 — Ma trận đối xứng, Định lý phổ (Spectral Theorem), Ma trận xác định dương và Phân rã giá trị kỳ dị (SVD)',
      overview: [
        'Chương cuối đưa người học tới những cấu trúc ma trận đẹp nhất và có ứng dụng rộng nhất trong học máy, tối ưu hóa và khoa học dữ liệu hiện đại: ma trận thực đối xứng ($A = A^T$) luôn chéo hóa trực giao được ($A = Q\\Lambda Q^T$), ma trận xác định dương ($x^T A x > 0$) đóng vai trò "số dương" của thế giới ma trận, và Phân rã giá trị kỳ dị $A = U\\Sigma V^T$ chéo hóa được **mọi ma trận** chữ nhật bất kỳ.',
      ],
      sources: [
        {
          sourceId: 'mit-1806sc',
          locator: 'Unit III: Positive Definite Matrices and Applications (Symmetric Matrices, Positive Definite Matrices and Minima, Singular Value Decomposition SVD, and Pseudoinverses)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'la-spds-symmetric-matrices-spectral-theorem',
          title: 'Ma trận thực đối xứng (A = A^T) và Định lý phổ (Spectral Theorem): Trị riêng thực, Vector riêng trực chuẩn và A = Q Lambda Q^T',
          level: 'core',
          paragraphs: [
            'Một ma trận vuông thực $A \\in \\mathbb{R}^{n \\times n}$ thỏa mãn $A^T = A$ (phần tử đối xứng qua đường chéo bằng nhau $a_{ij} = a_{ji}$) sở hữu hai tính chất kỳ diệu mà ma trận vuông tổng quát không có: (1) **Tất cả các trị riêng của ma trận thực đối xứng đều là số thực** (không bao giờ có phần ảo khác 0); và (2) **Các vector riêng ứng với các trị riêng khác nhau luôn vuông góc với nhau**, hơn nữa ngay cả khi có trị riêng lặp bội $k$, không gian con riêng của nó vẫn luôn có đủ đúng $k$ chiều để chọn được một cơ sở trực chuẩn (ma trận thực đối xứng không bao giờ bị suy biến thiếu vector riêng!).',
            'Vì luôn chọn được đủ $n$ vector riêng đôi một trực chuẩn $q_1, \\dots, q_n$, ma trận vector riêng $S$ trong phân rã chéo hóa $A = S\\Lambda S^{-1}$ trở thành một ma trận trực giao $Q$ (với $Q^{-1} = Q^T$). Ta thu được **Định lý phổ (Spectral Theorem)**: mọi ma trận thực đối xứng $A$ đều phân rã được thành tích trực giao và tổng của $n$ ma trận chiếu hạng 1 vuông góc nhau: $$A = Q \\Lambda Q^T = \\sum_{i=1}^n \\lambda_i q_i q_i^T$$ Định lý phổ là trụ cột lý thuyết để phân tích ma trận hiệp phương sai (covariance matrix) trong Phân tích thành phần chính (PCA) và ma trận đạo hàm bậc hai Hessian trong tối ưu hóa.',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit III, Symmetric Matrices and Positive Definiteness (Real eigenvalues, perpendicular eigenvectors, $A = Q\\Lambda Q^T$)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'la-spds-positive-definite-quadratic-forms',
          title: 'Dạng toàn phương x^T A x, Ma trận xác định dương (Positive Definite) / nửa xác định dương và bốn tiêu chuẩn tương đương',
          level: 'core',
          paragraphs: [
            'Với một ma trận thực đối xứng $A = A^T \\in \\mathbb{R}^{n \\times n}$, hàm bậc hai $f(x) = x^T A x = \\sum_{i=1}^n \\sum_{j=1}^n a_{ij} x_i x_j$ được gọi là **dạng toàn phương (quadratic form)** gắn với $A$. Ma trận đối xứng $A$ được gọi là **xác định dương (Positive Definite — PD)** nếu năng lượng dạng toàn phương của nó thực sự dương với mọi vector khác không: $$x^T A x > 0, \\quad \\forall x \\in \\mathbb{R}^n \\setminus \\{\\mathbf{0}\\}$$ (Nếu điều kiện làm yếu thành $x^T A x \\ge 0$ với mọi $x$, $A$ được gọi là **nửa xác định dương / Positive Semidefinite — PSD**). Về mặt hình học giải tích, đồ thị của $z = x^T A x$ khi $A$ xác định dương có hình chiếc bát paraboloid hướng bề lõm lên trên với điểm cực tiểu toàn cục chặt duy nhất tại $x = \\mathbf{0}$, và các mặt mức $x^T A x = c > 0$ là các mặt cầu dẹt (ellipsoids) có các trục chính nằm dọc theo các vector riêng trực chuẩn $q_i$ của $A$.',
            'Tiểu mục trình bày **bốn tiêu chuẩn tương đương** để nhận biết một ma trận đối xứng $A$ là xác định dương mà không cần thử mọi vector $x$: (1) **Tất cả $n$ trị riêng đều dương** ($\\lambda_i > 0$); (2) **Tất cả $n$ phần tử chốt (pivots)** trong khử Gauss (không cần đổi hàng) đều dương; (3) **Tất cả $n$ định thức con chính dẫn đầu (leading principal minors)** ở góc trên bên trái cấp $1 \\times 1, 2 \\times 2, \\dots, n \\times n$ đều dương (Tiêu chuẩn Sylvester); và (4) **$A$ phân tích được dưới dạng $A = R^T R$** với $R$ là một ma trận có các cột độc lập tuyến tính (nếu các cột của $R$ phụ thuộc tuyến tính thì $R^T R$ luôn là ma trận nửa xác định dương PSD vì $x^T R^T R x = \\|Rx\\|^2 \\ge 0$).',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit III, Positive Definite Matrices and Minima (Quadratic forms, ellipsoids, eigenvalues/pivots/determinants tests, $R^T R$)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'la-spds-svd-low-rank-pseudoinverse',
          title: 'Phân rã giá trị kỳ dị (SVD: A = U Sigma V^T), xấp xỉ hạng thấp Eckart–Young và Giả nghịch đảo Moore–Penrose A^+',
          level: 'core',
          paragraphs: [
            'Phân rã chéo hóa $A = Q\\Lambda Q^T$ chỉ áp dụng được cho ma trận **vuông và đối xứng**. Vậy với một ma trận dữ liệu chữ nhật bất kỳ $A \\in \\mathbb{R}^{m \\times n}$ (có thể $m \\neq n$ và bị suy biến hạng $r$), làm thế nào để chéo hóa nó bằng các cơ sở trực chuẩn? Ý tưởng xuất phát từ việc cho phép chọn **hai bộ cơ sở trực chuẩn khác nhau**: một cơ sở trực chuẩn $v_1, \\dots, v_n$ trong không gian đầu vào $\\mathbb{R}^n$ và một cơ sở trực chuẩn $u_1, \\dots, u_m$ trong không gian đầu ra $\\mathbb{R}^m$ sao cho $A v_i = \\sigma_i u_i$. Bằng cách xét ma trận đối xứng nửa xác định dương $A^T A \\in \\mathbb{R}^{n \\times n}$, ta chọn $V = \\begin{bmatrix} v_1 & \\cdots & v_n \\end{bmatrix}$ là các vector riêng trực chuẩn của $A^T A$ ứng với các trị riêng $\\lambda_1 \\ge \\dots \\ge \\lambda_r > 0$ (và $\\lambda_{r+1} = \\dots = \\lambda_n = 0$), đặt các **giá trị kỳ dị (singular values)** $\\sigma_i = \\sqrt{\\lambda_i} > 0$, và đặt $u_i = \\frac{1}{\\sigma_i} A v_i$ (là các vector riêng trực chuẩn của $AA^T$). Kết quả là **Phân rã giá trị kỳ dị (Singular Value Decomposition — SVD)** tồn tại cho **mọi ma trận $A \\in \\mathbb{R}^{m \\times n}$**: $$A = U \\Sigma V^T = \\sum_{i=1}^r \\sigma_i u_i v_i^T$$ trong đó $U \\in \\mathbb{R}^{m \\times m}$ trực giao, $V \\in \\mathbb{R}^{n \\times n}$ trực giao, và $\\Sigma \\in \\mathbb{R}^{m \\times n}$ chỉ có các số dương $\\sigma_1 \\ge \\sigma_2 \\ge \\dots \\ge \\sigma_r > 0$ trên đường chéo. Hơn nữa, SVD phơi bày trực tiếp cơ sở trực chuẩn của cả **Bốn không gian con cơ bản**: $r$ cột đầu của $V$ là cơ sở trực chuẩn của $C(A^T)$, $n-r$ cột cuối của $V$ là cơ sở trực chuẩn của $N(A)$, $r$ cột đầu của $U$ là cơ sở trực chuẩn của $C(A)$, và $m-r$ cột cuối của $U$ là cơ sở trực chuẩn của $N(A^T)$.',
            'Từ khai triển tổng các ma trận hạng 1 $\\sum_{i=1}^r \\sigma_i u_i v_i^T$ được sắp theo thứ tự giảm dần của $\\sigma_i$, việc chỉ giữ lại $k < r$ số hạng lớn nhất $A_k = \\sum_{i=1}^k \\sigma_i u_i v_i^T$ cho ra **xấp xỉ hạng $k$ tốt nhất (Eckart–Young Theorem)** của ma trận $A$ (ứng dụng trực tiếp trong giảm chiều dữ liệu PCA, hệ gợi ý và nén ma trận trọng số). Cuối cùng, khi $A$ không vuông hoặc suy biến ($r < n$) khiến $(A^T A)^{-1}$ không tồn tại, SVD định nghĩa **Giả nghịch đảo Moore–Penrose (Pseudoinverse) $A^+ = V \\Sigma^+ U^T$** (trong đó $\\Sigma^+$ đảo chiều $\\Sigma$ và nghịch đảo các $\\sigma_i > 0$ thành $1/\\sigma_i$, giữ nguyên các số $0$): vector $x^+ = A^+ b$ chính là nghiệm bình phương tối thiểu có độ dài chuẩn $\\|x^+\\|$ nhỏ nhất.',
          ],
          sources: [
            {
              sourceId: 'mit-1806sc',
              locator: 'Unit III: Singular Value Decomposition; Left and Right Inverses; Pseudoinverse',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
  ],
};
