// Chỉ chọn bản đọc/bài tập công khai, không cần mua sách hay đăng ký gói trả phí.
// Các phạm vi đọc bên dưới do roadmap chọn; không yêu cầu học hết mọi nguồn.
export const freeLibrary = {
  cpp: ['LearnCpp', 'https://www.learncpp.com/', 'Toàn bộ bài viết và quiz trên trang được đọc miễn phí.'],
  git: ['Pro Git, 2nd edition', 'https://git-scm.com/book/en/v2', 'Toàn bộ sách điện tử miễn phí; không cần mua bản in.'],
  tools: ['MIT Missing Semester — bản 2020', 'https://missing.csail.mit.edu/2020/', 'Bài viết, video và bài tập công khai miễn phí.'],
  discrete: ['Mathematics for Computer Science — MIT 6.042J, 2015', 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/', 'Toàn bộ giáo trình PDF được MIT cung cấp miễn phí, cùng các chương lẻ.'],
  ods: ['Open Data Structures — bản C++', 'https://opendatastructures.org/', 'Chọn C++ Edition → HTML/PDF; toàn bộ sách và code miễn phí.'],
  cph: ["Competitive Programmer’s Handbook — Antti Laaksonen", 'https://cses.fi/book/book.pdf', 'Toàn bộ PDF miễn phí từ tác giả; khác cuốn Guide to Competitive Programming bản thương mại.'],
  algorithms: ['Algorithms — Jeff Erickson', 'https://jeffe.cs.illinois.edu/teaching/algorithms/', 'Toàn bộ sách và từng chương PDF miễn phí; dùng sau nền đệ quy, cấu trúc dữ liệu và chứng minh.'],
  mitAlgo: ['MIT 6.006 — lecture notes, Spring 2020', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/', 'Lecture notes, bài tập và lời giải công khai miễn phí trên OCW.'],
  linear: ['MIT 18.06 — Linear Algebra, Spring 2010', 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', 'Dùng video, ghi chú và bài tập OCW miễn phí; không cần mua sách giáo trình của khóa.'],
  calculus: ['OpenStax — Calculus Volume 1', 'https://openstax.org/details/books/calculus-volume-1', 'Toàn bộ sách web/PDF và bài tập trong sách miễn phí; chọn bản đọc, không mua bản in.'],
  multi: ['OpenStax — Calculus Volume 3', 'https://openstax.org/details/books/calculus-volume-3', 'Toàn bộ sách web/PDF miễn phí; chỉ đọc phần được chỉ định.'],
  stats: ['OpenIntro Statistics, 4th edition', 'https://www.openintro.org/book/os/', 'Toàn bộ PDF miễn phí: chọn FREE PDF, đặt khoản đóng góp tùy chọn bằng $0. Không cần mua bản in hoặc tài nguyên giáo viên.'],
  systems: ['Dive Into Systems — sách mở', 'https://diveintosystems.org/book/', 'Toàn bộ bản web miễn phí. Ví dụ dùng C; chỉ chuyển ý tưởng sang C++ khi hai ngôn ngữ có hành vi tương ứng.'],
  nand: ['Nand to Tetris — project guidelines', 'https://www.nand2tetris.org/course', 'Chỉ dùng hướng dẫn project, slide, phần mềm và test công khai miễn phí; không yêu cầu mua sách hoặc khóa Coursera.'],
  os: ['Operating Systems: Three Easy Pieces, v1.10', 'https://pages.cs.wisc.edu/~remzi/OSTEP/', 'Đọc các chương PDF riêng trong Free Book Chapters: toàn bộ nội dung sách được đọc miễn phí. Bỏ qua Buy PDF/bản in trả phí.'],
  network: ['An Introduction to Computer Networks — Peter L. Dordal', 'https://intronetworks.cs.luc.edu/current/html/index.html', 'Toàn bộ bản sách web miễn phí từ tác giả.'],
  postgres: ['PostgreSQL — tài liệu chính thức', 'https://www.postgresql.org/docs/current/', 'Toàn bộ tài liệu miễn phí. Thử trên PostgreSQL cài tại máy, không cần thuê database.'],
  python: ['Python Tutorial — tài liệu chính thức', 'https://docs.python.org/3/tutorial/', 'Toàn bộ tutorial miễn phí; phù hợp người đã biết một ngôn ngữ lập trình.'],
  numpy: ['NumPy — Absolute basics for beginners', 'https://numpy.org/doc/stable/user/absolute_beginners.html', 'Toàn bộ tài liệu và ví dụ đọc/chạy tại máy miễn phí.'],
  pandas: ['pandas — Introductory tutorials', 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/', 'Tutorial và dữ liệu ví dụ công khai miễn phí.'],
  matplotlib: ['Matplotlib — Tutorials', 'https://matplotlib.org/stable/tutorials/index.html', 'Tài liệu miễn phí; chạy hình ở máy cá nhân.'],
  pytest: ['pytest — How-to guides', 'https://docs.pytest.org/en/stable/how-to/index.html', 'Tài liệu và thư viện miễn phí.'],
  web: ['MDN — Learn web development', 'https://developer.mozilla.org/en-US/docs/Learn_web_development', 'Chỉ dùng bài viết và bài thực hành MDN miễn phí; không yêu cầu khóa đối tác hoặc MDN Plus.'],
  react: ['React — Learn', 'https://react.dev/learn', 'Toàn bộ tài liệu và ví dụ tương tác trên trang miễn phí.'],
  fastapi: ['FastAPI — Tutorial / User Guide', 'https://fastapi.tiangolo.com/tutorial/', 'Toàn bộ tutorial miễn phí; chạy ứng dụng và test trên máy.'],
  swe: ['Software Engineering at Google — bản web', 'https://abseil.io/resources/swe-book/html/toc.html', 'Toàn bộ bản HTML của sách miễn phí; không cần O’Reilly subscription.'],
  patterns: ['Game Programming Patterns — bản web', 'https://gameprogrammingpatterns.com/contents.html', 'Toàn bộ sách web miễn phí; chỉ đọc pattern được chỉ định và áp dụng khi có vấn đề phù hợp.'],
  actions: ['GitHub Actions — tài liệu', 'https://docs.github.com/en/actions', 'Tài liệu miễn phí; có thể viết và kiểm tra cấu hình tại máy, không cần mua gói CI.'],
  docker: ['Docker — Get started', 'https://docs.docker.com/get-started/', 'Tài liệu miễn phí; thực hành trên Docker Engine cho môi trường cá nhân phù hợp, không cần dịch vụ cloud trả phí.'],
  theory: ['MIT 6.045J — Automata, Computability, and Complexity', 'https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/', 'Chỉ dùng lecture notes, video và bài tập OCW công khai miễn phí; không bắt mua sách của syllabus.'],
  composing: ['Composing Programs — 2nd edition', 'https://composingprograms.com/pages/', 'Bản sách mở miễn phí. Ví dụ Python/Scheme: đọc để hiểu cơ chế, không bắt học thêm cả ngôn ngữ trước.'],
  kmp: ['CP-Algorithms — Prefix function / KMP', 'https://cp-algorithms.com/string/prefix-function.html', 'Toàn bộ bài viết và ví dụ miễn phí từ dự án CP-Algorithms.'],
  search: ['MIT 6.034 — Artificial Intelligence', 'https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/', 'Lecture video,notes và bài tập OCW miễn phí; không cần mua sách.'],
  security: ['OWASP Cheat Sheet Series', 'https://cheatsheetseries.owasp.org/', 'Toàn bộ bài viết miễn phí; chỉ thực hành trên ứng dụng và tài khoản thử của mình.'],
  graphics: ['LearnOpenGL — bản web', 'https://learnopengl.com/', 'Toàn bộ bài viết miễn phí; không yêu cầu sách in hoặc GPU cloud.'],
  wai: ['W3C WAI — Tutorials', 'https://www.w3.org/WAI/tutorials/', 'Hướng dẫn và ví dụ W3C miễn phí.'],
  ml: ['scikit-learn — User Guide', 'https://scikit-learn.org/stable/user_guide.html', 'Tài liệu, code và dữ liệu nhỏ miễn phí; các bài trong roadmap chạy được trên CPU.'],
  d2l: ['Dive into Deep Learning — bản web', 'https://d2l.ai/', 'Toàn bộ sách, code và bài tập web miễn phí. Dùng dữ liệu nhỏ/CPU cho ô nền; không cần thuê GPU.'],
  torch: ['PyTorch — Tutorials', 'https://docs.pytorch.org/tutorials/', 'Toàn bộ tutorial miễn phí; dùng CPU cho ví dụ nhỏ.'],
  distributed: ['MIT 6.5840 — Distributed Systems', 'https://pdos.csail.mit.edu/6.824/', 'Chỉ đọc lecture notes/paper công khai miễn phí theo chủ đề; không yêu cầu đăng ký MIT, Gradescope hay dịch vụ cloud. Đây là nguồn sau đại học, chỉ đọc phạm vi đã ghi.'],
  sre: ['Site Reliability Engineering — sách web Google', 'https://sre.google/sre-book/table-of-contents/', 'Toàn bộ sách web miễn phí; chỉ chọn chương liên quan, không cần dùng Google Cloud.'],
  ethics: ['ACM Code of Ethics — PDF chính thức', 'https://www.acm.org/binaries/content/assets/about/acm-code-of-ethics-and-professional-conduct.pdf', 'Toàn bộ văn bản quy tắc đọc công khai miễn phí.'],
  paper: ['S. Keshav — How to Read a Paper', 'https://svr-sk818-web.cl.cam.ac.uk/keshav/publications/htrap.html', 'Bài viết và bản PDF tác giả công khai miễn phí.'],
  ossu: ['OSSU Computer Science — curriculum', 'https://github.com/ossu/computer-science', 'Đọc cấu trúc Core/Advanced và Final project miễn phí. Các khóa bên ngoài không được mặc định miễn phí; chỉ dùng nguồn đã chọn riêng trong roadmap.'],
  guideMemory: ['Offline Guide: Bản chất Vùng nhớ, Con trỏ & RAII', './docs/guides/01-MEMORY-POINTERS-RAII.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  guideOOP: ['Offline Guide: Cơ chế Đa hình Động vptr/vtable & 5 Nguyên lý SOLID', './docs/guides/02-VIRTUAL-DISPATCH-OOP-SOLID.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  guideSorting: ['Offline Guide: Sắp xếp Quicksort/Merge Sort & Tìm kiếm Nhị phân trên tập kết quả', './docs/guides/03-SORTING-SEARCH-BINARY-ANSWER.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  guideTwoPointers: ['Offline Guide: Hai Con Trỏ & Cửa Sổ Trượt (Two Pointers & Sliding Window)', './docs/guides/04-TWO-POINTERS-SLIDING-WINDOW.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  guideDSU: ['Offline Guide: Cấu trúc Tập hợp Rời rạc (DSU) & Cây khung nhỏ nhất Kruskal', './docs/guides/05-DISJOINT-SET-UNION-DSU.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  guideGraphs: ['Offline Guide: Thuật toán Đồ thị BFS/DFS, Tô màu 3 trạng thái & Dijkstra Min-Heap', './docs/guides/06-GRAPHS-BFS-DFS-DIJKSTRA-TOPO.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  guideDP: ['Offline Guide: Khung tư duy Quy hoạch động SRTBOT, Ba lô 0/1, LIS & LCS', './docs/guides/07-DYNAMIC-PROGRAMMING-KNAPSACK-LIS-LCS.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  guideNetwork: ['Offline Guide: Mạng mức thấp, Socket TCP & Định khung thông điệp HTTP/1.1', './docs/guides/08-NETWORK-SOCKETS-HTTP-TCP.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  guideDatabase: ['Offline Guide: CSDL Quan hệ, Chỉ mục B+Tree & Giao dịch ACID 4 mức cô lập', './docs/guides/09-DATABASE-ACID-TRANSACTIONS.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  exSorting: ['Offline Exercises: Tuyển tập bài tập Sắp xếp CSES & VNOI', './docs/exercises/01-SORTING-EXERCISES.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  exBinarySearch: ['Offline Exercises: Tuyển tập bài tập Tìm kiếm nhị phân CSES & LeetCode', './docs/exercises/02-BINARY-SEARCH-EXERCISES.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  exTwoPointers: ['Offline Exercises: Tuyển tập bài tập Hai con trỏ & Cửa sổ trượt CSES', './docs/exercises/03-TWO-POINTERS-SLIDING-WINDOW-EXERCISES.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  exDSU: ['Offline Exercises: Tuyển tập bài tập DSU & Cây khung CSES', './docs/exercises/04-DSU-EXERCISES.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  exGraphs: ['Offline Exercises: Tuyển tập bài tập Đồ thị BFS/DFS & Dijkstra CSES', './docs/exercises/05-GRAPH-EXERCISES.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  exDP: ['Offline Exercises: Tuyển tập bài tập Quy hoạch động kinh điển CSES', './docs/exercises/06-DYNAMIC-PROGRAMMING-EXERCISES.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  curriculaOSSU: ['Offline Curriculum: Bản đồ chương trình chuẩn OSSU Computer Science', './docs/curricula/01-OSSU-COMPUTER-SCIENCE.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  curriculaTYCS: ['Offline Curriculum: Hướng dẫn 9 môn học cốt lõi TeachYourselfCS', './docs/curricula/02-TEACH-YOURSELF-CS.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  curriculaMIT: ['Offline Curriculum: Phân rã giáo trình thuật toán MIT 6.006', './docs/curricula/03-MIT-6006-ALGORITHMS.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  curriculaBerkeley: ['Offline Curriculum: Tiến hóa cấu trúc dữ liệu UC Berkeley CS61B', './docs/curricula/04-BERKELEY-CS61B-DATA-STRUCTURES.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  curriculaStanford: ['Offline Curriculum: Trừu tượng hóa lập trình & Đệ quy Stanford CS106B', './docs/curricula/05-STANFORD-CS106B-ABSTRACTIONS.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  curriculaHCMUS: ['Offline Curriculum: Chiến lược điểm chuẩn xét tuyển chuyên ngành KHMT HCMUS', './docs/curricula/06-HCMUS-CS-CUTOFF-STRATEGY.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  projectArcade: ['Offline Project Spec: Game Arcade 2D Space Invaders C++17', './docs/projects/01-SPACE-INVADERS-CPP.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  projectWebServer: ['Offline Project Spec: HTTP/1.1 Socket Web Server Đa luồng C++', './docs/projects/02-MULTITHREADED-WEB-SERVER.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  projectRouting: ['Offline Project Spec: Động cơ Tìm đường Đồ thị Hiệu năng cao C++', './docs/projects/03-GRAPH-ROUTING-ENGINE.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  projectClassifier: ['Offline Project Spec: Bộ Phân loại Thư rác Naive Bayes & Monte Carlo', './docs/projects/04-NAIVE-BAYES-CLASSIFIER.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
  projectDevOps: ['Offline Project Spec: Khung Dự án C++ Chuẩn Công nghiệp & CI/CD Pipeline', './docs/projects/05-DEVOPS-CPP-SCAFFOLD.md', 'Tài liệu cục bộ offline miễn phí lưu trong repo, tự học không cần kết nối mạng.'],
};

const scopes = new Map();
function group(key, text) {
  for (const line of text.trim().split('\n')) {
    const [ids, scope] = line.split('|').map(s => s.trim());
    if (!scope) throw new Error(`Thiếu phạm vi đọc: ${line}`);
    for (const id of ids.split(' ')) {
      if (!scopes.has(id)) scopes.set(id, []);
      scopes.get(id).push([key, scope]);
    }
  }
}

group('cpp', `
cpp-check cpp-types|Chương 1 C++ Basics và 4 Fundamental Data Types; ưu tiên khởi tạo, giới hạn kiểu và undefined behavior.
cpp-build|Chương 0: compiler/linker, compiling, warning level và language standard.
cpp-control|Chương 8 Control Flow và 9 Error Detection and Handling: if, loop, kiểm tra đầu vào.
cpp-array|Chương 16 Dynamic arrays: chỉ số, duyệt và kích thước; đối chiếu thêm phần C-style arrays nếu đang dùng mảng thuần.
cpp-functions cpp-function-practice|Chương 2 Functions and Files và 12 Compound Types: truyền giá trị, tham chiếu, const reference; làm quiz cuối chương theo đúng phần đã học.
cpp-containers|Chương 5: std::string; chương 16: std::vector, thêm/xóa và giới hạn chỉ số.
cpp-pointers|Chương 12: references,pointers,null và dangling pointers; chưa học cả pointer arithmetic ở vòng này.
cpp-debug|Chương 3 Debugging: stepping,breakpoints,watch và call stack.
cpp-files cpp-apply|Chương 28 Input and Output: file I/O, trạng thái stream và lỗi mở/đọc tệp.
oop-class oop-class-practice|Chương 14 Introduction to Classes: member functions, access control, encapsulation.
oop-constructor oop-constructor-practice|Chương 14: constructors, member initializer lists, default constructors.
oop-const|Chương 14: const class objects và const member functions.
oop-composition oop-composition-practice|Chương 23 Object Relationships: composition, aggregation và association.
oop-inheritance oop-inheritance-practice|Chương 24 Inheritance: basic inheritance, constructors/destructors và access specifiers.
oop-virtual oop-virtual-practice oop-abstract|Chương 25 Virtual Functions: virtual dispatch, override, abstract classes và virtual destructor.
oop-resource cpp-smart|Chương 22 Move Semantics and Smart Pointers: RAII, resource ownership và std::unique_ptr.
cpp-copy|Chương 14/21: copy constructor, assignment, shallow/deep copying; đối chiếu quyền sở hữu trước khi tự cấp phát.
cpp-operator|Chương 21 Operator Overloading: ý nghĩa toán tử, member/non-member và operator<<.
cpp-template|Các bài Function templates trong chương 11 và Class templates trong chương 13; chỉ cú pháp và ví dụ cơ bản.
cpp-errors|Chương 27 Exceptions: throw/try/catch, stack unwinding và exception safety.
oop-review|Quiz cuối chương 14,24,25: tự làm phần lớp, kế thừa và đa hình; kiểm chứng bằng project của mình.
`);
group('git', `
git-first|Pro Git §1.6 First-Time Git Setup, §2.1 Getting a Git Repository.
git-practice|Pro Git §2.2 Recording Changes, §2.3 Viewing History; thử stage và đọc diff trước commit.
git-branch|Pro Git §3.1–3.2: branch và basic branching/merging.
git-remote|Pro Git §2.5 Working with Remotes và chương 6 GitHub: pull requests và góp thay đổi.
git-recovery|Pro Git §2.4 Undoing Things; chỉ đọc thêm reflog trong chương 7 khi cần tìm commit.
git-review|Pro Git chương 6: contributing to a project và pull request; tập đọc diff thật.
`);
group('tools', `
tools-shell|Bài Course Overview + The Shell: điều hướng, quoting và lệnh cơ bản; làm phần Exercises.
tools-pipes|Bài Shell Tools and Scripting, Data Wrangling: pipe,grep,sort,uniq và xử lý văn bản.
tools-permissions|Bài Command-line Environment: job control,processes,signals và quyền tệp trong bài Shell.
tools-build|Bài Metaprogramming: build systems,dependencies và testing; dựng Makefile nhỏ thay vì học hết các công cụ.
tools-memory tools-measure|Bài Debugging and Profiling: debugging,memory và profiling; phân biệt tìm lỗi với đo hiệu năng.
tools-docs|Bài Q&A: cách tự tìm tài liệu; áp dụng trực tiếp lên tài liệu vector/Git ở nhiệm vụ.
`);
group('discrete', `
math-logic math-quantifiers|Trong giáo trình MIT 2015: các phần Propositions,Predicate Formulas và Quantifiers; làm bài phủ định và phản ví dụ.
math-sets|Phần Mathematical Data Types: sets,sequences,functions và relations.
math-proofs math-proof-practice|Phần Proofs: direct proof,contrapositive,contradiction; chọn bài có lời giải để đối chiếu sau khi tự viết.
math-induction|Phần Induction: simple/strong induction; làm cả cơ sở và bước quy nạp.
math-invariant|Phần State Machines: invariant và termination; áp dụng cho vòng lặp đang viết.
math-counting math-pigeonhole|Phần Counting: bijection,product/sum rules,pigeonhole và inclusion–exclusion.
math-modular|Phần Number Theory: divisibility,GCD và modular arithmetic.
math-recurrence|Phần Sums and Asymptotics,Recurrences; chưa cần giải mọi dạng truy hồi.
math-graph|Phần Directed Graphs,Simple Graphs và Trees: ngôn ngữ nền, chưa cần toàn bộ định lý nâng cao.
`);
group('ods', `
dsa-complexity|Chương Introduction: Mathematical Background và phân tích thời gian/bộ nhớ.
dsa-vector|Chương Array-Based Lists: ArrayStack,Resizing và amortized analysis.
dsa-linked dsa-linked-practice|Chương Linked Lists: SLList,DLList; chỉ cài danh sách đơn trước.
dsa-stack dsa-queue dsa-stack-practice|Chương Array-Based Lists: ArrayStack,ArrayQueue,ArrayDeque; so thứ tự truy cập.
dsa-hash dsa-hash-practice|Chương Hash Tables: ChainedHashTable,LinearHashTable và điều kiện tải.
dsa-tree dsa-bst dsa-bst-practice|Chương Binary Trees: biểu diễn,traversals và BinarySearchTree.
dsa-heap dsa-heap-practice|Chương Heaps: BinaryHeap; cài và kiểm tra invariant.
`);
group('mitAlgo', `
dsa-balanced|Lecture 7: Binary Trees, Part 2: AVL; ôn Binary Trees ở Lecture 6 trước khi học phép xoay.
algo-elementary-sort algo-selection-sort algo-bubble-sort algo-merge algo-quick-heap algo-heapsort algo-sort-practice|Lecture 3 Sorting và Lecture 8 Binary Heaps; với selection/bubble, chạy tay và kiểm chứng theo nhiệm vụ, không cần tìm một video riêng cho từng thuật toán.
algo-sequence-dp algo-edit-distance|Các lecture Dynamic Programming về LCS và edit distance; làm ví dụ bảng nhỏ trước bài tập tổng hợp.
`);
group('cph', `
algo-recursion algo-recursion-practice algo-backtrack algo-backtrack-practice|Chương 5 Complete search: generating subsets/permutations,backtracking và pruning.
dsa-trie string-hash|Chương 26 String algorithms: trie,string hashing và xử lý chuỗi; chọn đúng cấu trúc của ô đang học.
algo-search algo-binary-practice|§3.3 Binary search: vị trí,điều kiện đơn điệu và tìm trên đáp án.
algo-prefix range-fenwick range-segment range-practice|Chương 9 Range queries: prefix sums,binary indexed tree và segment tree; chỉ đọc cấu trúc tương ứng ô hiện tại.
algo-two-pointers algo-two-practice|Chương 8 Amortized analysis: two pointers và sliding window.
algo-greedy algo-greedy-practice|Chương 6 Greedy algorithms: chiến lược và điều kiện đúng; viết phản ví dụ trước khi chấp nhận một greedy mới.
algo-dp algo-dp-coins algo-knapsack algo-lis algo-dp-practice|Chương 7 Dynamic programming: coin change,LIS,knapsack và trạng thái; chỉ làm chủ đề tương ứng ô đang học.
graph-represent|Chương 11 Basics of graphs: biểu diễn và thuật ngữ.
graph-dfs graph-dfs-practice graph-bfs graph-bfs-practice graph-cycle graph-directed-cycle graph-bipartite|Chương 12 Graph traversal: DFS,BFS,connectivity,cycle và bipartiteness.
graph-topological graph-dag-practice|Chương 16 Directed graphs: topological sorting và xử lý DAG.
graph-relax graph-dijkstra graph-dijkstra-practice graph-bellman graph-bellman-practice graph-floyd graph-shortest-review|Chương 13 Shortest paths: đọc đúng mục Bellman–Ford,Dijkstra hoặc Floyd–Warshall cần dùng; đối chiếu giả thiết trọng số.
graph-dsu graph-mst graph-kruskal graph-prim graph-mst-practice|Chương 15 Spanning trees: Kruskal,union-find và Prim.
graph-scc|Chương 17 Strong connectivity: SCC và đồ thị co.
graph-euler|Chương 19 Paths and circuits: Eulerian paths.
graph-flow|Chương 20 Flows and cuts: residual graph,max flow và min cut.
graph-tree-dp|Chương 14 Tree algorithms và 18 Tree queries; chỉ học duyệt cây/subtree/DP đang yêu cầu.
algo-bitmask|Chương 10 Bit manipulation: thao tác bit và biểu diễn tập con.
string-compression|Chương 6: mục Huffman coding; vẽ cây và kiểm tra prefix code.
algo-number|Chương 21 Number theory: sieve và modular exponentiation.
algo-random|Chương 24 Probability: randomized algorithms và đo xác suất/thời gian thực nghiệm.
`);
group('linear', `
linear-vectors|Lecture 1 The Geometry of Linear Equations và Lecture 2 Elimination with Matrices.
linear-space|Các bài Vector Spaces and Subspaces,Column Space and Nullspace,Independence,Basis and Dimension.
linear-transform|Các bài Matrix Multiplication và Linear Transformations and Their Matrices.
linear-projection|Các bài Orthogonal Vectors and Subspaces,Projections onto Subspaces và Least Squares Approximations.
linear-eigen|Các bài Eigenvalues and Eigenvectors,Diagonalization và Symmetric Matrices.
linear-svd|Bài Singular Value Decomposition; ôn orthogonality và eigenvalues trước, không cần cả khóa ngay trong ô này.
`);
group('kmp', `string-kmp|Đọc toàn bài Prefix function: định nghĩa pi,thuật toán tuyến tính và ứng dụng KMP; tự dựng bảng trên chuỗi có tiền tố lặp.`);
group('search', `ai-astar|Lecture videos: Search và Optimal Search — branch and bound,A* và heuristic; chạy tay đồ thị nhỏ trước khi cài.`);
group('algorithms', `algo-greedy-practice algo-dp-practice|Đọc chương Greedy Algorithms hoặc Dynamic Programming theo ô đang luyện; chọn một bài cần tự lập luận. Đây là nguồn đào sâu sau khi đã học khái niệm, không thay bài nhập môn.`);
group('torch', `dl-autograd|Tutorial Learn the Basics: Tensors và Automatic Differentiation; chạy ví dụ nhỏ trên CPU rồi so gradient tính tay.`);
group('calculus', `
calculus-limits|Chương 1 Functions and Graphs và 2 Limits: chỉ ôn hàm,giới hạn và liên tục cần cho đạo hàm.
calculus-derivative|Chương 3 Derivatives: định nghĩa,quy tắc đạo hàm và chain rule.
calculus-integral|Chương 5 Integration: Riemann sums,definite integrals và Fundamental Theorem of Calculus.
`);
group('multi', `
calculus-gradient calculus-optimize|Chương 4 Differentiation of Functions of Several Variables: partial derivatives,chain rule,gradient; phần thuật toán gradient descent thực hiện theo nhiệm vụ, không cần đọc toàn bộ tối ưu nâng cao.
`);
group('stats', `
prob-events prob-bayes|Chương 3 Probability: sample space,conditional probability,independence và Bayes.
prob-random prob-distributions prob-poisson prob-normal|Chương 3–4: random variables,expectation,variance; đọc đúng mục Bernoulli/binomial,Poisson hoặc normal theo ô hiện tại.
stats-sampling stats-testing|Chương 5 Foundations for Inference: sampling,confidence intervals và hypothesis tests; tiếp tục ví dụ một mẫu ở chương 6–7 khi cần.
stats-regression|Chương 8 Introduction to Linear Regression: association,residual và giới hạn suy luận nhân quả.
math-synthesis|Chương 1–2: dữ liệu,thiết kế nghiên cứu,tóm tắt và đồ thị; chọn lại đúng mục inference của chương 5 theo câu hỏi báo cáo.
`);
group('systems', `
arch-bits arch-float arch-encoding|Phần Binary and Data Representation: integer,floating point và text; theo dõi giới hạn biểu diễn trong chương trình nhỏ.
arch-logic arch-memory arch-cpu|Phần Computer Architecture: gates,circuits,memory và CPU execution; chưa yêu cầu toàn bộ thiết kế CPU.
arch-assembly arch-layout|Phần Assembly Programming: registers,instructions,procedure calls và stack; chọn kiến trúc máy đang dùng để đối chiếu.
arch-cache arch-pipeline arch-io|Phần Memory Hierarchy và Computer Architecture: locality,cache,pipeline và I/O; đọc mục tương ứng, không cần hết chương trong một lượt.
`);
group('nand', `
arch-project|Project 1 Boolean Logic,2 Boolean Arithmetic và 4 Machine Language: dùng hướng dẫn,slide,software và test miễn phí; ALU thuộc Project 2, không bắt mua sách.
`);
group('os', `
os-boundary|Chương 2 Introduction,4 Processes và 6 Limited Direct Execution.
os-process os-process-practice|Chương 4 Processes và 5 Process API; làm homework mô phỏng/process API đi kèm.
os-scheduling|Chương 7 CPU Scheduling,8 Multi-level Feedback và 9 Lottery Scheduling; chỉ so các chính sách đang học.
os-virtual-memory|Chương 13 Address Spaces,15 Address Translation,18 Paging và 19 TLBs.
os-threads os-race|Chương 26 Concurrency and Threads,27 Thread API và 28 Locks.
os-synchronization os-producer|Chương 28 Locks,30 Condition Variables và 31 Semaphores; đọc bài producer–consumer.
os-deadlock|Chương 32 Concurrency Bugs: deadlock và các điều kiện phát sinh.
os-filesystem|Chương 39 Files and Directories,40 File System Implementation và 42 FSCK and Journaling.
os-ipc os-shell-project|Chương 5 Process API và mục Projects: Unix shell; pipe cần đối chiếu API hệ điều hành khi cài.
`);
group('network', `
net-layers|Chương 1 An Overview of Networks: layers,packets,forwarding và IETF/OSI.
net-ip|Chương 9 IP version 4: delivery,subnets,NAT; đọc thêm routing ở chương 13 khi cần.
net-link|Chương 2 Ethernet Basics,4 Wireless LANs và §10.2 ARP.
net-dns|§1.11 và §10.1 DNS: từ tên tới địa chỉ và cache.
net-udp-tcp|Các chương UDP Transport và TCP Transport; so reliability,ordering và message/byte stream.
net-congestion|§1.2 Data Rate,Throughput and Bandwidth, chương 7 Packets và phần TCP congestion control.
net-sockets net-service-project|Các chương UDP Transport và TCP Transport: socket examples,read/write và message framing.
net-review|§1.14 Some Useful Utilities và phần ICMP; làm thí nghiệm DNS/port nhỏ theo nhiệm vụ.
`);
group('postgres', `
db-relations|Tutorial chương 2 The SQL Language và chương 5 Data Definition: primary/foreign keys,constraints.
db-select|Chương 7 Queries: SELECT,WHERE,ORDER BY,LIMIT và NULL.
db-join|Tutorial phần Joins Between Tables và chương 7 Table Expressions.
db-group|Chương 7 Table Expressions: grouping,HAVING,subqueries.
db-design|Chương 5 Data Definition: constraints,keys; phần chuẩn hóa thực hiện theo ví dụ tách bảng trong ô.
db-ddl|Chương 5: Creating Tables,Modifying Tables và Dependencies.
db-transaction db-isolation|Tutorial Transactions; chương 13 Concurrency Control: isolation,row locks và serialization failures.
db-index db-index-practice|Chương 11 Indexes và chương 14 Performance Tips: Using EXPLAIN; đo trên dữ liệu của mình.
db-window|Chương 7 WITH Queries và Tutorial Views; không chuyển sang window function trước khi xong CTE/view.
db-window-functions|Tutorial Window Functions và chương 4 Window Function Calls: partition,ordering,frame.
db-safety|Chương 21 Database Roles và phần Prepared Statements; dùng parameter binding ở thư viện kết nối.
db-backup|Chương 25 Backup and Restore: SQL dump và restore vào database mới.
db-nosql|Chương 8: JSON Types; đối chiếu giới hạn PostgreSQL với yêu cầu dữ liệu trước khi quyết định chuyển hệ khác.
db-library-project|Tutorial chương 2–3, chương 13 Concurrency Control và 25 Backup/Restore: chỉ xem lại mục cần cho project.
`);
group('python', `
py-syntax|Tutorial chương 3 An Informal Introduction và 4 More Control Flow Tools.
py-collections|Tutorial chương 5 Data Structures: lists,tuples,sets,dictionaries và copying.
py-functions|Tutorial chương 4 Defining Functions,6 Modules và 12 Virtual Environments and Packages.
py-files|Tutorial chương 7 Input and Output,8 Errors and Exceptions; phần JSON trong thư viện chuẩn.
py-typing|Tutorial chương 9 Classes; phần typing của thư viện chuẩn để đọc type hints.
py-iterators|Tutorial chương 9: Iterators,Generators và Generator Expressions.
`);
group('numpy', `py-numpy|Các mục array creation,shape,indexing,broadcasting và basic operations; tự kiểm tra shape trước khi tính.`);
group('pandas', `py-pandas|Intro tutorials: read/write tabular data,select subsets,summary statistics,reshape và combine tables.`);
group('matplotlib', `py-visualize|Quick start và các bài về Figure/Axes: line,scatter,histogram; đặt trục,đơn vị và legend đúng.`);
group('pytest', `py-tests|How-to: assertions,fixtures,parametrize và temporary directories; làm test cho code tự viết.`);
group('web', `
web-html|Core modules: Structuring content with HTML,forms và semantic structure.
web-css|Core modules: CSS styling basics,CSS layout và responsive design.
web-js|Dynamic scripting with JavaScript: variables,functions,events và DOM.
web-fetch api-ui|Dynamic scripting: asynchronous JavaScript và Fetch API; xử lý loading,error và phản hồi đến sai thứ tự.
net-http net-tls net-capture|Mục HTTP và Web security: request/response,HTTPS/TLS; bài quan sát gói tin thực hiện trên kết nối của mình.
`);
group('react', `web-react|Learn: Describing the UI,Adding Interactivity và Managing State; chưa cần toàn bộ ecosystem.`);
group('fastapi', `
api-contract api-fastapi|Tutorial: First Steps,Path/Query Parameters,Request Body,Response Model và Status Code.
api-database|Tutorial: SQL (Relational) Databases và Dependencies; đối chiếu PostgreSQL transaction trước khi ghép luồng mượn sách.
api-auth|Tutorial Security: Current User,OAuth2/JWT và password hashing; bổ sung kiểm tra quyền đối tượng tại server.
api-errors|Tutorial: Handling Errors,Testing và Security; tự gửi cả request không đi qua giao diện.
api-release|Deployment: Concepts và Server Workers; triển khai thử bằng tiến trình/container tại máy, không cần thuê dịch vụ.
`);
group('swe', `
se-requirements se-design|Chương Documentation, mục Design Docs; chương What Is Software Engineering? Chỉ áp dụng phần phù hợp project nhỏ.
se-uml|Mục Design Docs trong chương Documentation: dùng hình để giải thích quyết định; UML chỉ vẽ đúng ký hiệu cần cho nhiệm vụ.
se-unit-tests|Các chương Unit Testing và Test Doubles: test hành vi,giữ test rõ ràng và chọn fake/stub khi thật sự cần.
se-integration|Các chương Testing Overview và Larger Testing.
se-refactor|Chương Large-Scale Changes: đọc ý tưởng thay đổi có kiểm soát; áp dụng ở phạm vi nhỏ, không làm hệ thống lớn của Google.
se-collaboration git-review|Các chương Code Review,Knowledge Sharing và How to Work Well on Teams.
`);
group('patterns', `se-patterns|Chọn một chương phù hợp lỗi thiết kế đang gặp, như Observer,State hoặc Command; đọc Problem/Motivation và When to Use, không học thuộc mọi pattern.`);
group('actions', `se-ci|Các mục workflows,jobs,steps,triggers và artifacts; cấu hình pipeline test/build nhỏ của project.`);
group('docker', `se-containers|Get started: containers,images,Dockerfile,persisting data và multi-container apps; chỉ cần dựng lại môi trường project.`);
group('sre', `
se-observe dist-observe|Chương Monitoring Distributed Systems và Troubleshooting: tín hiệu,log,correlation và tái hiện lỗi.
se-performance|Chương Handling Overload và Monitoring Distributed Systems: tìm nút thắt bằng số đo trước khi tối ưu.
dist-requirements dist-scale|Các chương Service Level Objectives và Load Balancing at the Frontend: giới hạn tải và mục tiêu phục vụ.
dist-cache dist-queue dist-retry|Các chương Addressing Cascading Failures,Handling Overload và Data Processing Pipelines: lỗi,retry và kiểm soát tải; dựng ví dụ nhỏ theo nhiệm vụ.
dist-cloud|Chương Embracing Risk và Service Level Objectives: đánh đổi,ngân sách tài nguyên; lập bảng chi phí giả định, không cần mở tài khoản trả phí.
`);
group('theory', `
theory-dfa theory-nfa|Lecture notes phần finite automata,regular languages và nondeterminism; chọn bài chuyển NFA/DFA nhỏ.
theory-cfg|Phần context-free languages,grammars và pushdown automata.
theory-turing theory-undecidable|Phần Turing machines,decidability,undecidability và halting problem; chú ý mô hình và giả thiết.
theory-np theory-hard-problems|Phần polynomial time,NP-completeness và reductions; phân biệt chưa biết thuật toán nhanh với đã chứng minh không tồn tại.
`);
group('composing', `
pl-types pl-paradigms|2nd edition: chương 1 Building Abstractions with Functions,2 Building Abstractions with Data và 3 Interpreting Computer Programs; chỉ đọc scope,environment và functional/object-oriented theo nhiệm vụ.
pl-lexer pl-parser pl-interpreter|2nd edition: chương 3 Interpreting Computer Programs, mục Exceptions,Interpreters và Languages for Abstraction; đặc tả lexer/parser và test lấy từ nhiệm vụ, không phải bản chép code Scheme sang Python.
`);
group('security', `
sec-threat|Threat Modeling Cheat Sheet: assets,trust boundaries,threats và mitigations.
sec-crypto|Cryptographic Storage và Password Storage Cheat Sheets: phân biệt encoding,hashing,encryption; không tự thiết kế crypto.
sec-sql|SQL Injection Prevention Cheat Sheet: prepared statements và allow-list.
sec-xss|Cross Site Scripting Prevention Cheat Sheet: output encoding theo context và safe sinks.
sec-csrf|Cross-Site Request Forgery Prevention và Session Management Cheat Sheets; CORS đối chiếu thêm MDN.
sec-access sec-audit|Authorization và Insecure Direct Object Reference Prevention Cheat Sheets: kiểm tra quyền mỗi request và từng đối tượng.
sec-secrets|Secrets Management và Vulnerable Dependency Management Cheat Sheets.
sec-validation|Input Validation,File Upload và Denial of Service Cheat Sheets.
sec-transport|TLS và HTTP Security Headers Cheat Sheets; thử trên cấu hình của project.
api-auth|Authentication,Password Storage và Authorization Cheat Sheets: đối chiếu phần ứng dụng còn thiếu sau tutorial.
`);
group('graphics', `
gfx-pixels|Getting started: Textures; màu,kênh và dữ liệu pixel. Chỉ đọc cơ chế ảnh trước khi đụng mã OpenGL.
gfx-transform|Getting started: Transformations và Coordinate Systems; phép biến đổi theo thứ tự.
gfx-3d|Getting started: Hello Triangle,Coordinate Systems và Camera; chỉ pipeline nền.
`);
group('wai', `
hci-users hci-usability|Tutorials: Page Structure,Menus và Forms; quan sát tác vụ thật theo checklist trong ô, không chỉ kiểm tra hình thức.
hci-access|Tutorials: Keyboard access trong menus/forms và labels/instructions; kiểm tra bằng bàn phím thật.
hci-responsive|Tutorials: Page Structure,Images và Forms; thử phóng to,màn hình nhỏ,trạng thái lỗi.
hci-mini-project|Tutorials: Images,Tables và Forms; chọn cách biểu diễn thuật toán mà nhãn và thao tác vẫn dùng được.
`);
group('ml', `
ml-problem|User Guide: Supervised learning,Unsupervised learning và Choosing the right estimator.
ml-split|Common pitfalls: data leakage; Cross-validation: train_test_split,group/time split.
ml-linear|Linear Models: Ordinary Least Squares; tự cài bản nhỏ trước khi so với estimator.
ml-logistic|Linear Models: Logistic regression; Tuning the decision threshold: phân biệt score,probability và nhãn.
ml-metrics|Metrics and scoring: chọn classification/regression metric theo câu hỏi và baseline.
ml-overfit|Cross-validation,hyper-parameter tuning và validation curves; giữ test tới bước đánh giá cuối.
ml-trees|Decision Trees và Ensemble methods: random forest; xem overfitting,feature importance và giới hạn diễn giải.
ml-unsupervised|Clustering: K-means,initialization,scaling và limitations.
ml-pca|Decomposing signals in components: PCA; kết hợp Pipelines và preprocessing để tránh leakage.
ml-pipeline ml-project|Pipelines and composite estimators,Common pitfalls và Model persistence; tái lập bằng dữ liệu/seed/môi trường.
`);
group('d2l', `
ai-models|Chương 1 Introduction: learning problems,data và các giới hạn; phần tìm kiếm đọc riêng MIT AI nếu cần.
dl-autograd|§2.1 Data Manipulation và §2.5 Automatic Differentiation.
dl-network|§5.1–5.4: MLP,implementation,forward/backprop và numerical stability.
dl-modalities|§7.1–7.6: convolution,padding,stride,channels,pooling và LeNet; chỉ mạng nhỏ trước.
dl-embedding|Phần Natural Language Processing: Pretraining, mục Word Embedding và Embedding Layers; kiểm tra ID/shape trước khi đọc mô hình lớn.
dl-attention|§11.1 Queries,Keys,and Values; §11.3 Attention Scoring Functions; chưa cần toàn chương Transformer.
llm-evaluation|Phần Natural Language Processing và các mục về language models; dùng rubric và dữ liệu thử nhỏ trong nhiệm vụ, không bắt gọi API trả phí.
`);
group('distributed', `
dist-replication dist-failure|Schedule/lecture notes: replication,consistency,fault tolerance và partitions; chỉ đọc phần khái niệm,không bắt làm hết lab sau đại học.
dist-consensus|Lecture notes/paper về Raft: leader election,log replication và safety; mô phỏng ba nút trước khi thử lab.
dist-services dist-design-project|Schedule: case studies về storage/services; chọn một case để so trade-off với monolith thư viện,không sao chép quy mô hệ thống lớn.
`);
group('ethics', `
ethics-data ethics-impact|ACM Code of Ethics §1.2 Avoid harm,§1.4 Be fair và §1.6 Respect privacy; gắn vào dữ liệu của project.
ethics-license|ACM Code of Ethics §1.5 Respect the work required to produce new ideas,inventions,creative works,and computing artifacts; đọc thêm LICENSE của thư viện/dataset thực sự dùng.
`);
group('paper', `research-reading research-reproduce research-question|Đọc toàn bộ bài How to Read a Paper: three-pass approach; bài ngắn,không phải yêu cầu đọc cả một giáo trình.`);
group('ossu', `
direction-inventory direction-compare direction-backend direction-ml direction-systems direction-breadth direction-choose|Đọc mục Organization,Core CS,Advanced CS và Final project để so phạm vi; chọn một hướng,không học hết mọi nhánh Advanced và không chuyển sang khóa trả phí.
`);

// --- LIÊN KẾT TÀI LIỆU VÀ BÀI TẬP NGOẠI TUYẾN CỤC BỘ (OFFLINE) ---
group('guideMemory', `cpp-pointers oop-resource|Tài liệu hướng dẫn chuyên sâu ngoại tuyến về bản chất vùng nhớ, con trỏ và nguyên lý RAII.`);
group('guideOOP', `oop-virtual oop-abstract|Tài liệu hướng dẫn chuyên sâu ngoại tuyến về cơ chế đa hình động vptr/vtable và 5 nguyên lý SOLID.`);
group('guideSorting', `algo-merge algo-quick-heap algo-search algo-binary-practice|Tài liệu hướng dẫn chuyên sâu ngoại tuyến về tư duy chia để trị trong Merge Sort/Quicksort và tìm kiếm nhị phân.`);
group('guideTwoPointers', `algo-two-pointers algo-two-practice|Tài liệu hướng dẫn chuyên sâu ngoại tuyến về kỹ thuật hai con trỏ, cửa sổ trượt và bẫy số âm.`);
group('guideDSU', `graph-dsu|Tài liệu hướng dẫn chuyên sâu ngoại tuyến về cấu trúc DSU, chứng minh chiều cao log N và Kruskal.`);
group('guideGraphs', `graph-dfs graph-bfs graph-dijkstra graph-topological|Tài liệu hướng dẫn chuyên sâu ngoại tuyến về các giải thuật đồ thị BFS/DFS, tô màu 3 trạng thái và Dijkstra.`);
group('guideDP', `algo-knapsack algo-lis algo-sequence-dp|Tài liệu hướng dẫn chuyên sâu ngoại tuyến về khung tư duy 6 bước SRTBOT, Ba lô 0/1, LIS và LCS.`);
group('guideNetwork', `net-udp-tcp net-sockets net-http|Tài liệu hướng dẫn chuyên sâu ngoại tuyến về lập trình mạng socket mức thấp và định khung TCP.`);
group('guideDatabase', `db-design db-transaction db-index|Tài liệu hướng dẫn chuyên sâu ngoại tuyến về chuẩn hóa CSDL 1NF-3NF, chỉ mục B+Tree và giao dịch ACID.`);

group('exSorting', `algo-sort-practice|Bộ bài tập tuyển chọn bài bản về thuật toán sắp xếp trên CSES và VNOI kèm phân tích chi tiết.`);
group('exBinarySearch', `algo-binary-practice|Bộ bài tập tuyển chọn bài bản về tìm kiếm nhị phân trên tập kết quả CSES và LeetCode.`);
group('exTwoPointers', `algo-two-practice|Bộ bài tập tuyển chọn bài bản về hai con trỏ và cửa sổ trượt trên CSES kèm hướng dẫn.`);
group('exDSU', `graph-mst-practice|Bộ bài tập tuyển chọn bài bản về DSU và cây khung nhỏ nhất trên hệ thống CSES.`);
group('exGraphs', `graph-bfs-practice graph-dfs-practice graph-dijkstra-practice|Bộ bài tập tuyển chọn bài bản về duyệt đồ thị, tìm đường ngắn nhất Dijkstra trên CSES.`);
group('exDP', `algo-dp-practice|Bộ bài tập tuyển chọn bài bản về quy hoạch động ba lô, dãy con tăng và khoảng cách biến đổi chuỗi CSES.`);

// Những ô project/tự đánh giá đã có đầy đủ yêu cầu, không thêm nguồn cho đủ số lượng.
export function attachReadings(tasks) {
  const ids = new Set(tasks.map(t => t.id));
  for (const id of scopes.keys()) if (!ids.has(id)) throw new Error(`Nguồn trỏ tới ô không tồn tại: ${id}`);
  return tasks.map(t => {
    const entry = scopes.get(t.id);
    if (!entry) return { ...t, sources: undefined };
    const sources = entry.map(([key, scope]) => {
      const [label, url, access] = freeLibrary[key];
      return [label, url, scope, access];
    });
    return { ...t, sources, sourcePolicy: 'free', sourceChecked: '2026-11-03' };
  });
}
