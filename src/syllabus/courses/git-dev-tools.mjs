export const COURSE_GIT_DEV_TOOLS = {
  id: 'git-dev-tools',
  code: 'CS-06',
  title: 'Git và công cụ phát triển',
  blockId: 'block-1',
  level: 'core',
  prerequisites: [
    {
      courseId: 'computing-environment',
      type: 'required',
      reason: 'Cần nắm vững cây thư mục, đường dẫn tương đối/tuyệt đối, quyền tệp và thao tác cửa sổ dòng lệnh cơ bản.',
    },
    {
      courseId: 'intro-programming',
      type: 'required',
      reason: 'Cần có kinh nghiệm viết, biên dịch và chạy chương trình C++ để thực hành quản lý lịch sử mã nguồn và tách chương trình đa tệp.',
    },
  ],
  overview: [
    'Môn học giải quyết hai bài toán thực tế xuất hiện ngay khi chương trình của người học vượt quá một tệp đơn lẻ: (1) Làm thế nào để lưu lại toàn bộ lịch sử tiến hóa của mã nguồn, thử nghiệm ý tưởng mới mà không sợ làm hỏng bản đang chạy tốt, và khôi phục lại bất kỳ trạng thái nào trong quá khứ mà không phải sao chép thư mục kiểu `project_v1`, `project_final_2`? và (2) Làm thế nào để kết nối các công cụ dòng lệnh và tự động hóa việc biên dịch một dự án gồm nhiều tệp `.h`/`.cpp`? Thay vì dạy Git như một danh sách câu lệnh gõ theo quán tính, môn học bắt đầu từ số 0 bằng cách giải thích mô hình dữ liệu bên dưới của Git: một kho lưu trữ định địa chỉ theo nội dung (content-addressable storage) lưu các ảnh chụp toàn cục (snapshots) thông qua ba đối tượng bất biến `blob`, `tree`, `commit` tạo thành một đồ thị có hướng không chu trình (DAG).',
    'Khi đã hiểu một `commit` thực chất là một nút bất biến trỏ tới cây thư mục và các `commit` cha, người học tự suy luận được cơ chế của ba vùng làm việc (`Working Tree`, `Staging Area / Index`, `.git Repository`), bản chất của nhánh (`branch`) và con trỏ `HEAD`, sự khác biệt giữa hợp nhất chuyển tiếp nhanh (`fast-forward`), hợp nhất ba chiều (`3-way merge`) và tái định gốc (`rebase`), cũng như cách giải quyết xung đột (`merge conflict`) và cứu dữ liệu bằng `restore`, `revert`, `reflog`. Chương cuối mở rộng kỹ năng dòng lệnh sang các đường ống xử lý văn bản POSIX (`|`, `grep`, `find`) và cơ chế biên dịch gia tăng (incremental build) với `Make` và `CMake`.',
  ],
  boundaries: [
    'Dạy Git từ con số 0 thông qua mô hình đối tượng (`blob`, `tree`, `commit`) và đồ thị lịch sử trước khi đi vào các thao tác nhánh và khôi phục; tuyệt đối không dạy kiểu học vẹt chuỗi lệnh `git add . && git commit && git push` mà không hiểu điều gì xảy ra trong `.git`.',
    'Phần hệ thống build (`Make` và `CMake`) tập trung vào đồ thị phụ thuộc giữa tệp nguồn (`.cpp`), tệp tiêu đề (`.h`), tệp đối tượng (`.o`) và tệp thực thi cho dự án C++ vừa sức; chưa đi vào đóng gói phân phối đa nền tảng quy mô công nghiệp hay CI/CD đám mây (thuộc Môn CS-31).',
  ],
  sources: [
    {
      sourceId: 'pro-git-2e',
      locator: 'Chapters 1–3 (Git Basics & Git Branching), Chapter 7 (Git Tools: Reset, Stash, Blame), and Chapter 10 (§10.1–10.3 Git Internals: Plumbing, Porcelain, Git Objects, Git References)',
      relationship: 'primary',
    },
    {
      sourceId: 'mit-missing-semester',
      locator: 'Lecture 2 (Shell Tools and Scripting), Lecture 6 (Version Control — Git Data Model), and Lecture 8 (Metaprogramming — Build Systems & Make)',
      relationship: 'primary',
    },
    {
      sourceId: 'learncpp',
      locator: 'Chapter 2: §2.8–2.12 Programs with multiple code files, header files, and header guards',
      relationship: 'supplementary',
    },
  ],
  chapters: [
    {
      id: 'gdt-git-object-model',
      title: 'Chương 1 — Mô hình đối tượng bất biến của Git (Blob, Tree, Commit) và ba vùng làm việc',
      overview: [
        'Chương mở đầu giải thích từ gốc vì sao hệ thống quản lý phiên bản Git cần thiết và cơ chế lưu trữ định địa chỉ theo mã băm bên trong thư mục `.git`. Hiểu rõ ba đối tượng bất biến `blob`, `tree`, `commit` trên đồ thị DAG cùng sự chuyển dịch trạng thái tệp giữa ba vùng `Working Tree`, `Staging Area (Index)` và `Repository` là chìa khóa để làm chủ mọi thao tác Git về sau.',
      ],
      sources: [
        {
          sourceId: 'pro-git-2e',
          locator: 'Chapter 1 (§1.1–1.3 What is Git? Snapshots, Not Differences; The Three States), Chapter 2 (§2.1–2.3 Recording Changes), & Chapter 10 (§10.2 Git Objects)',
          relationship: 'primary',
        },
        {
          sourceId: 'mit-missing-semester',
          locator: 'Lecture 6: Version Control (Git) — Git’s Data Model from First Principles',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'gdt-gom-snapshots-content-addressable-dag',
          title: 'Bản chất ảnh chụp trạng thái (Snapshots) và ba đối tượng bất biến định địa chỉ theo mã băm: Blob, Tree, Commit',
          level: 'core',
          paragraphs: [
            'Nhiều người mới lầm tưởng Git lưu trữ lịch sử như một danh sách các bản vá "dòng nào được thêm, dòng nào bị xóa" giữa các phiên bản; thực tế, Git nhìn dữ liệu như một chuỗi các **ảnh chụp toàn cảnh (snapshots)** của toàn bộ cây thư mục dự án theo thời gian. Để lưu trữ hàng nghìn ảnh chụp mà không bị trùng lặp dữ liệu, bên dưới thư mục `.git/objects`, Git hoạt động như một **kho lưu trữ định địa chỉ theo nội dung (content-addressable filesystem)**: mỗi đối tượng dữ liệu được đưa qua hàm băm mật mã (SHA-1 40 ký tự hex hoặc SHA-256) để tạo ra một mã định danh duy nhất; nếu một tệp không thay đổi nội dung giữa hai phiên bản, mã băm của nó giữ nguyên và Git chỉ việc trỏ lại tới đúng đối tượng cũ mà không tốn thêm dung lượng.',
            'Toàn bộ lịch sử của Git được xây dựng từ đúng ba kiểu đối tượng bất biến (immutable objects): (1) **`blob` (binary large object)** chỉ lưu thuần túy mảng byte nội dung của một tệp (không lưu tên tệp hay quyền tệp); (2) **`tree`** tương ứng với một thư mục, lưu danh sách các mục gồm tên tệp/thư mục con, quyền truy cập và mã băm trỏ tới các `blob` hoặc `tree` con; và (3) **`commit`** lưu một ảnh chụp tại một thời điểm, gồm mã băm của `tree` gốc đại diện cho toàn bộ dự án, thông tin tác giả/thời gian, thông điệp mô tả lý do thay đổi (commit message), và quan trọng nhất là **mã băm của một hoặc nhiều `commit` cha (parent commits)** ngay trước nó. Nhờ các liên kết trỏ ngược về cha này, các `commit` tạo thành một **đồ thị có hướng không chu trình (Directed Acyclic Graph — DAG)** biểu diễn toàn bộ lịch sử tiến hóa của mã nguồn.',
          ],
          sources: [
            {
              sourceId: 'pro-git-2e',
              locator: 'Chapter 1 (§1.3 Snapshots, Not Differences) & Chapter 10 (§10.2 Git Objects: blob, tree, commit)',
              relationship: 'primary',
            },
            {
              sourceId: 'mit-missing-semester',
              locator: 'Lecture 6: Git’s data model — Snapshots, blobs, trees, commits, and content-addressed DAG',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'gdt-gom-three-trees-workflow',
          title: 'Cơ chế của ba vùng làm việc: Working Tree, Staging Area (Index) và .git Repository',
          level: 'core',
          paragraphs: [
            'Khi làm việc trong một thư mục dự án đã được khởi tạo bằng `git init` (tạo ra thư mục ẩn `.git`), mỗi tệp được quản lý thông qua sự phối hợp của ba vùng tách biệt: (1) **Thư mục làm việc (Working Tree / Working Directory)** là các tệp mã nguồn thực tế trên ổ đĩa mà người học đang mở và sửa bằng trình soạn thảo; (2) **Vùng chuẩn bị (Staging Area / Index)** là một tệp nhị phân trong `.git/index` đóng vai trò bản nháp định hình chính xác những thay đổi nào sẽ được đưa vào ảnh chụp (`commit`) kế tiếp; và (3) **Kho lưu trữ (`.git` Repository)** là cơ sở dữ liệu chứa vĩnh viễn các đối tượng `commit`, `tree`, `blob` đã được ghi nhận.',
            'Mô hình ba vùng này giải thích rõ vòng đời trạng thái của tệp khi chạy `git status`: một tệp mới tạo chưa từng được Git biết tới ở trạng thái **Untracked**; khi chạy `git add <tệp>`, Git tính mã băm nội dung hiện tại của tệp để tạo đối tượng `blob` và ghi nhận nó vào **Staging Area (Staged)**; khi chạy `git commit`, Git đóng gói đúng những gì đang nằm trong Staging Area thành một đối tượng `tree` và `commit` mới trong Repository. Việc có vùng trung gian Staging Area cho phép lập trình viên tách một buổi làm việc lớn đã sửa 5 tệp thành 2 `commit` độc lập có ý nghĩa logic riêng biệt (chỉ `git add` các tệp hoặc từng cụm dòng thuộc thay đổi thứ nhất rồi `commit`, sau đó mới `add` và `commit` phần còn lại).',
          ],
          sources: [
            {
              sourceId: 'pro-git-2e',
              locator: 'Chapter 1 (§1.3 The Three States) & Chapter 2 (§2.2 Recording Changes to the Repository)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'gdt-gom-gitignore-atomic-commits',
          title: 'Quy tắc loại trừ tệp sinh tự động bằng .gitignore và nguyên tắc tạo Commit nguyên tử (Atomic Commits)',
          level: 'core',
          paragraphs: [
            'Như đã học ở Môn CS-01, quá trình biên dịch và gỡ lỗi sinh ra nhiều tệp nhị phân trung gian (`.o`, `.obj`, `.exe`, `a.out`, thư mục `build/`, `.vscode/`). Nếu đưa các tệp sinh tự động này vào Git, kho lưu trữ sẽ phình to nhanh chóng và mỗi lần biên dịch lại sẽ báo hàng loạt tệp bị thay đổi gây nhiễu loạn lịch sử. Tiểu mục này hướng dẫn cách viết tệp cấu hình **`.gitignore`** với các mẫu ký tự đại diện (glob patterns như `*.o`, `*.out`, `build/`) để yêu cầu Git tự động bỏ qua các tệp sinh tự động, đồng thời lưu ý rằng `.gitignore` chỉ có tác dụng với các tệp chưa được theo dõi (untracked) — nếu lỡ `git add` một tệp nhị phân từ trước thì phải gỡ nó khỏi Index bằng `git rm --cached <tệp>`.',
            'Phần thứ hai trình bày nguyên tắc kỷ luật kỹ thuật khi ghi lịch sử: mỗi `commit` nên là một **đơn vị thay đổi nguyên tử (atomic commit)** — giải quyết trọn vẹn một mục tiêu logic duy nhất và giữ cho dự án ở trạng thái biên dịch được, accompanied bởi một thông điệp commit giải thích rõ *đã thay đổi gì và vì sao cần thay đổi như vậy*. Trước khi `git add` và `git commit`, thói quen chạy `git diff` (xem thay đổi giữa Working Tree và Staging Area) cùng `git diff --staged` (xem chính xác những dòng sắp được đưa vào commit) giúp chặn đứng việc vô tình lưu các đoạn mã thử nghiệm tạm bợ vào lịch sử.',
          ],
          sources: [
            {
              sourceId: 'pro-git-2e',
              locator: 'Chapter 2: §2.2 Ignoring Files (`.gitignore` patterns and `git diff` / `git diff --staged`)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'gdt-branching-merging',
      title: 'Chương 2 — Nhánh (Branches), con trỏ HEAD, Hợp nhất (Merge), Tái định gốc (Rebase) và giải quyết xung đột',
      overview: [
        'Chương này giải thích vì sao hệ thống nhánh của Git lại cực kỳ nhẹ và nhanh: một nhánh không phải là một bản sao toàn bộ thư mục dự án, mà chỉ là một tệp văn bản nhỏ chứa mã băm 40 ký tự trỏ vào một `commit` trên đồ thị DAG, từ đó làm rõ con trỏ `HEAD`, sự khác biệt giữa `fast-forward merge`, `3-way merge` và `rebase`, cùng quy trình xử lý xung đột hợp nhất.',
      ],
      sources: [
        {
          sourceId: 'pro-git-2e',
          locator: 'Chapter 3: Git Branching (§3.1 Branches in a Nutshell, §3.2 Basic Branching and Merging, §3.6 Rebasing)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'gdt-bm-branches-head-pointers',
          title: 'Bản chất của Nhánh (Branch) như con trỏ động trên DAG, con trỏ HEAD và trạng thái Detached HEAD',
          level: 'core',
          paragraphs: [
            'Trong Git, một **nhánh (branch)** (như `main` hay `feature/login`) thực chất chỉ là một tham chiếu có tên (lưu trong `.git/refs/heads/`) chứa mã băm của một `commit` cụ thể — tức là một nhãn dán trỏ vào đỉnh mới nhất của một chuỗi phát triển. Việc tạo một nhánh mới (`git branch ten_nhanh` hoặc `git switch -c ten_nhanh`) hoàn toàn không sao chép các tệp mã nguồn sang thư mục khác mà chỉ tốn 41 byte để ghi một mã băm mới. Vậy làm sao Git biết hiện tại người dùng đang đứng ở nhánh nào? Git dùng một con trỏ đặc biệt tên là **`HEAD`**: thông thường `HEAD` trỏ vào tên nhánh hiện tại (ví dụ `HEAD -> main`), và khi người dùng tạo một `commit` mới, cả nhánh hiện tại lẫn `HEAD` tự động dịch chuyển tiến lên trỏ vào `commit` vừa tạo.',
            'Khi người dùng chuyển nhánh (`git switch ten_nhanh`), Git thực hiện hai việc: (1) Đổi `HEAD` sang trỏ vào nhánh đích; và (2) Cập nhật các tệp trong Working Tree và Staging Area cho khớp với ảnh chụp `tree` của `commit` mà nhánh đích đang trỏ tới. Tiểu mục cũng giải thích hiện tượng **`Detached HEAD` (HEAD tách rời)**: xảy ra khi người dùng checkout trực tiếp vào một mã băm `commit` cũ thay vì tên nhánh; lúc này `HEAD` trỏ thẳng vào `commit` đó chứ không gắn với nhánh nào, nên nếu tạo thêm `commit` mới rồi chuyển sang nhánh khác mà không gắn nhãn nhánh cho nó, `commit` mới đó sẽ trở thành mồ côi (dangling/unreachable) không có nhánh nào trỏ tới.',
          ],
          sources: [
            {
              sourceId: 'pro-git-2e',
              locator: 'Chapter 3 (§3.1 Branches in a Nutshell — Switching branches, HEAD pointer) & Chapter 10 (§10.3 Git References)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'gdt-bm-fast-forward-vs-three-way-merge',
          title: 'Cơ chế hợp nhất nhánh: Fast-Forward Merge so với Three-Way Merge và tổ tiên chung gần nhất (Merge Base)',
          level: 'core',
          paragraphs: [
            'Khi công việc trên nhánh phụ `feature` đã hoàn tất và cần tích hợp vào nhánh `main` qua lệnh `git merge feature` (đang đứng tại `main`), Git xét cấu trúc hình học của đồ thị DAG giữa hai đỉnh `main` và `feature` để chọn một trong hai cơ chế: (1) **Hợp nhất chuyển tiếp nhanh (Fast-Forward Merge)**: nếu kể từ lúc tách nhánh `feature`, nhánh `main` chưa hề có thêm `commit` mới nào (tức `commit` hiện tại của `main` chính là tổ tiên trực tiếp của `feature`), Git không cần tạo `commit` mới mà chỉ việc trượt con trỏ `main` tiến thẳng lên trùng với `feature`, giữ nguyên lịch sử tuyến tính.',
            '(2) **Hợp nhất ba chiều (Three-Way Merge)**: nếu cả `main` lẫn `feature` đều đã có thêm các `commit` mới rẽ thành hai nhánh phân kỳ trên đồ thị DAG, con trỏ `main` không thể trượt thẳng sang `feature` mà không làm mất các `commit` trên `main`. Khi đó, Git tìm nút **tổ tiên chung gần nhất (common ancestor / merge base)** $B$ của hai đỉnh $M$ (`main`) và $F$ (`feature`), đối chiếu **ba ảnh chụp** $(B, M, F)$ để tự động gộp những thay đổi từ cả hai phía, rồi tạo ra một **`merge commit` mới có hai `commit` cha** là $M$ và $F$. Việc hiểu vai trò của tổ tiên chung $B$ giúp người học thấy vì sao Git biết chính xác bên nào đã sửa dòng nào kể từ khi tách nhánh.',
          ],
          sources: [
            {
              sourceId: 'pro-git-2e',
              locator: 'Chapter 3: §3.2 Basic Branching and Merging (Fast-forward vs Three-way merge and common ancestor)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'gdt-bm-conflicts-and-rebasing',
          title: 'Nguyên nhân phát sinh xung đột hợp nhất (Merge Conflict), cách giải quyết và sự đánh đổi giữa Merge với Rebase',
          level: 'core',
          paragraphs: [
            'Trong phép hợp nhất ba chiều giữa tổ tiên chung $B$ và hai nhánh $M, F$, nếu nhánh $M$ sửa tệp `a.cpp` còn nhánh $F$ sửa tệp `b.cpp` (hoặc sửa hai hàm cách xa nhau trong cùng một tệp), Git tự động gộp cả hai thay đổi. Tuy nhiên, nếu kể từ tổ tiên chung $B$, cả $M$ và $F$ **cùng sửa đổi một vùng dòng trùng nhau** theo hai cách khác nhau, thuật toán không thể tự đoán ý định con người nên tạm dừng quá trình hợp nhất và báo **Xung đột hợp nhất (Merge Conflict)**. Tại vùng xung đột trong tệp, Git chèn các dấu phân cách chuẩn: phần giữa `<<<<<<< HEAD` và `=======` là nội dung của nhánh hiện tại ($M$), còn phần giữa `=======` và `>>>>>>> feature` là nội dung đến từ nhánh đang gộp vào ($F$). Cách giải quyết chuẩn là đọc hiểu logic của cả hai bên, biên tập lại đoạn mã đúng cuối cùng, xóa bỏ hoàn toàn cả ba dòng dấu phân cách `<<<`, `===`, `>>>`, biên dịch và chạy kiểm thử xác nhận chương trình hoạt động đúng, rồi mới `git add` tệp đó để đánh dấu đã giải quyết xong và `git commit` hoàn tất.',
            'Phần cuối tiểu mục đối chiếu `git merge` với **`git rebase` (tái định gốc)**: thay vì giữ nguyên hai nhánh phân kỳ rồi nối lại bằng một `merge commit`, lệnh `rebase` lấy từng `commit` riêng của nhánh `feature`, tính lại thay đổi và **phát lại (replay) thành các `commit` hoàn toàn mới (với mã băm mới)** nối tiếp lên trên đỉnh mới nhất của `main`, tạo ra lịch sử phẳng tuyến tính. Tiểu mục nhấn mạnh **Quy tắc vàng của Rebase**: chỉ được `rebase` các `commit` cục bộ của riêng mình chưa chia sẻ cho ai; tuyệt đối không `rebase` các nhánh công khai mà người khác đã dựa vào để phát triển, vì việc viết lại mã băm lịch sử sẽ làm lệch đồ thị của toàn đội.',
          ],
          sources: [
            {
              sourceId: 'pro-git-2e',
              locator: 'Chapter 3: §3.2 Basic Merge Conflicts & §3.6 Rebasing (The Perils of Rebasing — Golden Rule)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'gdt-history-recovery-remotes',
      title: 'Chương 3 — Truy vết lịch sử, khôi phục trạng thái an toàn và đồng bộ với kho lưu trữ từ xa (Remotes)',
      overview: [
        'Chương này hướng dẫn cách khai thác đồ thị lịch sử của Git để điều tra nguyên nhân lỗi trong mã nguồn (`log --graph`, `diff`, `blame`, tìm kiếm nhị phân `bisect`), cách hoàn tác sai lầm một cách an toàn mà không làm mất mã nguồn (`restore`, `revert`, `reset`, `reflog`), và cơ chế đồng bộ với kho lưu trữ từ xa trên mạng qua các nhánh theo dõi `origin/main` (`fetch`, `pull`, `push`).',
      ],
      sources: [
        {
          sourceId: 'pro-git-2e',
          locator: 'Chapter 2 (§2.3–2.5 Viewing History, Undoing Things, Working with Remotes), Chapter 3 (§3.5 Remote Branches), & Chapter 7 (§7.7 Reset Demystified, §7.10 Debugging with Git)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'gdt-hrr-inspecting-history-blame-bisect',
          title: 'Điều tra lịch sử mã nguồn: git log --graph, git show, git blame và tìm kiếm nhị phân commit gây lỗi bằng git bisect',
          level: 'core',
          paragraphs: [
            'Lịch sử commit có chất lượng là một công cụ chẩn đoán lỗi vô giá. Tiểu mục này trình bày cách quan sát đồ thị DAG trực tiếp trên terminal bằng `git log --oneline --graph --all`, xem chi tiết bản vá của một commit bất kỳ bằng `git show <commit>`, và so sánh sự khác biệt giữa hai mốc thời gian hoặc hai nhánh bất kỳ bằng `git diff <moc_A> <moc_B>`. Khi phát hiện một dòng mã khả nghi và cần biết dòng đó được viết từ bao giờ, bởi ai và nhằm giải quyết vấn đề gì, lệnh `git blame <tệp>` sẽ gắn từng dòng trong tệp với mã commit cuối cùng đã chạm vào dòng đó, cho phép tra ngược về commit message gốc.',
            'Đặc biệt, khi phát hiện chương trình hiện tại bị lỗi (bad) nhưng biết chắc cách đây 100 commit chương trình vẫn chạy đúng (good), thay vì kiểm tra thủ công từng commit một, công cụ **`git bisect`** áp dụng trực tiếp thuật toán **tìm kiếm nhị phân trên đồ thị DAG** đã học ở Môn CS-03 và CS-05: nó tự động nhảy tới commit nằm chính giữa khoảng nghi vấn để người dùng (hoặc một script kiểm thử tự động) đánh dấu là `good` hay `bad`, qua đó chỉ cần tối đa $\\lceil \\log_2(100) \\rceil = 7$ bước kiểm tra để chỉ đích danh commit đầu tiên đã đưa lỗi vào dự án.',
          ],
          sources: [
            {
              sourceId: 'pro-git-2e',
              locator: 'Chapter 2 (§2.3 Viewing the Commit History) & Chapter 7 (§7.10 Debugging with Git: File Annotation `git blame` and Binary Search `git bisect`)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'gdt-hrr-safe-undo-restore-revert-reflog',
          title: 'Phân biệt cơ chế hoàn tác: git restore, git revert, git reset (--soft/--mixed/--hard) và lưới an toàn git reflog',
          level: 'core',
          paragraphs: [
            'Một trong những nguyên nhân lớn nhất gây mất dữ liệu ở người mới dùng Git là không phân biệt được lệnh hoàn tác nào tác động lên vùng nào trong ba vùng làm việc: (1) **`git restore`** dùng để hủy các thay đổi chưa commit ở Working Tree (`git restore <tệp>`) hoặc đưa tệp từ Staging Area quay lại trạng thái Unstaged (`git restore --staged <tệp>`); lưu ý rằng các dòng mã mới viết trong Working Tree chưa từng được `git add` hay `git commit` nếu bị `git restore` đè lên sẽ mất hẳn vì Git chưa từng tạo đối tượng `blob` cho chúng; (2) **`git revert <commit>`** là cách hoàn tác **an toàn cho lịch sử đã chia sẻ**: nó không xóa commit cũ khỏi đồ thị DAG mà tạo ra một **commit mới** chứa bản vá đảo ngược chính xác các thay đổi của `<commit>` cũ; và (3) **`git reset`** di chuyển trực tiếp con trỏ nhánh hiện tại lùi về một commit khác: `--soft` chỉ lùi con trỏ nhánh (giữ nguyên Staging và Working Tree), `--mixed` (mặc định) lùi con trỏ nhánh và cập nhật lại Staging Area (nhưng giữ nguyên Working Tree), còn `--hard` ghi đè cả Working Tree nên có nguy cơ xóa mất các thay đổi chưa được commit.',
            'Tiểu mục cũng giới thiệu "chiếc phao cứu sinh" của Git là **`git reflog` (Reference Logs)**: ngay cả khi người dùng lỡ chạy `git reset --hard` làm con trỏ nhánh lùi mất vài commit vừa tạo, hoặc xóa nhầm một nhánh vừa làm xong, các đối tượng `commit` đã từng được tạo trong `.git/objects` thực chất **chưa bị xóa ngay** (chúng vẫn tồn tại âm thầm trước khi bộ dọn rác định kỳ chạy sau nhiều tuần). Lệnh `git reflog` ghi lại nhật ký cục bộ mọi vị trí mà con trỏ `HEAD` đã từng đứng, cho phép tìm lại mã băm của commit tưởng như đã mất và khôi phục lại nhánh chỉ trong vài giây.',
          ],
          sources: [
            {
              sourceId: 'pro-git-2e',
              locator: 'Chapter 2 (§2.4 Undoing Things), Chapter 7 (§7.7 Reset Demystified), & Chapter 10 (§10.7 Maintenance and Data Recovery — `git reflog`)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'gdt-hrr-remotes-fetch-pull-push',
          title: 'Kho lưu trữ từ xa (Remotes), nhánh theo dõi từ xa (origin/main) và sự khác biệt giữa git fetch, git pull và git push',
          level: 'core',
          paragraphs: [
            'Git là một hệ thống quản lý phiên bản **phân tán (distributed)**: khi sao chép một dự án từ máy chủ (như GitHub hay GitLab) về máy cá nhân bằng `git clone <url>`, máy cá nhân nhận được toàn bộ cơ sở dữ liệu lịch sử `.git` chứ không chỉ bản chụp mới nhất. Máy chủ từ xa đó được Git lưu dưới một tên định danh mặc định là **`origin`**. Để đồng bộ hóa mà không cần kết nối mạng liên tục, Git duy trì trong máy cục bộ các **nhánh theo dõi từ xa (remote-tracking branches)** có dạng `origin/main`: đây là các con trỏ chỉ đọc (read-only bookmarks) ghi nhớ vị trí lần cuối cùng mà máy cục bộ biết về nhánh `main` trên máy chủ `origin`.',
            'Tách bạch nhánh cục bộ `main` với con trỏ theo dõi `origin/main` giúp người học hiểu rõ ba lệnh mạng: (1) **`git fetch origin`** tải về toàn bộ các đối tượng `commit`/`tree`/`blob` mới từ máy chủ và cập nhật con trỏ `origin/main`, nhưng **hoàn toàn không chạm vào** nhánh `main` hay các tệp đang làm việc của người dùng, cho phép kiểm tra thay đổi từ xa một cách an toàn trước khi gộp; (2) **`git pull`** thực chất là lệnh gộp hai bước liên tiếp: chạy `git fetch` xong rồi lập tức chạy `git merge origin/main` (hoặc `git rebase` nếu dùng `--rebase`) vào nhánh hiện tại; và (3) **`git push origin main`** đẩy các đối tượng mới từ máy cục bộ lên máy chủ và yêu cầu máy chủ tiến con trỏ `main` của nó lên — thao tác này sẽ bị máy chủ từ chối (non-fast-forward rejected) nếu trên máy chủ đã có commit mới của người khác mà máy cục bộ chưa `fetch` và tích hợp về trước.',
          ],
          sources: [
            {
              sourceId: 'pro-git-2e',
              locator: 'Chapter 2 (§2.5 Working with Remotes) & Chapter 3 (§3.5 Remote Branches — `origin/main`, `fetch` vs `pull`, and `push`)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'gdt-shell-build-systems',
      title: 'Chương 4 — Đường ống dữ liệu POSIX (Pipes) và hệ thống biên dịch đa tệp (Multi-file Builds, Make & CMake)',
      overview: [
        'Chương cuối kết nối kỹ năng dòng lệnh với quy trình xây dựng phần mềm thực tế: kết hợp các công cụ nhỏ qua luồng chuẩn `stdin`/`stdout`/`stderr` và đường ống `|` để tra cứu văn bản (`grep`, `find`), tách biệt tệp tiêu đề `.h` với tệp cài đặt `.cpp` tuân thủ quy tắc một định nghĩa (ODR), và tự động hóa việc biên dịch gia tăng theo đồ thị phụ thuộc với `Make` và `CMake`.',
      ],
      sources: [
        {
          sourceId: 'mit-missing-semester',
          locator: 'Lecture 1 (Streams & Pipes), Lecture 2 (Shell Tools: grep, find), & Lecture 8 (Metaprogramming — Build Systems, Dependencies, and Make)',
          relationship: 'primary',
        },
        {
          sourceId: 'learncpp',
          locator: 'Chapter 2: §2.8–2.12 Multi-file programs, header files (`.h`), and header guards (`#ifndef` / `#pragma once`)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'gdt-sbs-posix-streams-pipes-filters',
          title: 'Chuyển hướng luồng chuẩn (stdin, stdout, stderr), đường ống (Pipes |) và các công cụ tìm kiếm dòng lệnh (grep, find)',
          level: 'core',
          paragraphs: [
            'Triết lý thiết kế kinh điển của môi trường Unix/POSIX là: mỗi công cụ dòng lệnh chỉ làm thật tốt một việc đơn giản, nhận đầu vào là các dòng văn bản từ `stdin` và xuất kết quả ra `stdout`, để người dùng có thể ghép nối chúng lại bằng **toán tử đường ống (Pipe `|`)**. Khi viết `lenh_A | lenh_B`, hệ điều hành nối trực tiếp luồng `stdout` của tiến trình `lenh_A` vào luồng `stdin` của tiến trình `lenh_B` thông qua một vùng đệm trong bộ nhớ mà không cần ghi ra tệp tạm trên đĩa. Đồng thời, vì thông báo lỗi được xuất riêng ra kênh `stderr` (số hiệu descriptor `2`), luồng lỗi không bị trộn lẫn vào dữ liệu đi qua đường ống (hoặc có thể chuyển hướng riêng bằng `2> error.log`).',
            'Trên nền tảng đường ống đó, tiểu mục trang bị nhóm công cụ tra cứu thiết yếu khi làm việc với mã nguồn nhiều tệp: tìm kiếm nhanh mọi tệp theo tên hoặc phần mở rộng trong cây thư mục (`find`), tìm kiếm tất cả các dòng trong dự án có chứa tên một hàm, biến hoặc mẫu biểu thức chính quy cơ bản (`grep -rn` hoặc công cụ hiện đại `rg`), đếm số dòng/từ (`wc -l`), sắp xếp và lọc trùng (`sort`, `uniq`). Việc kết hợp đường ống giúp lập trình viên kiểm tra nhanh kết quả thử nghiệm hoặc lọc nhật ký lỗi lớn chỉ bằng một dòng lệnh.',
          ],
          sources: [
            {
              sourceId: 'mit-missing-semester',
              locator: 'Lecture 1 (Connecting programs: `<`, `>`, `>>`, `|`) & Lecture 2 (Shell Tools: `find`, `grep`, `rg`)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'gdt-sbs-multifile-cpp-headers-guards',
          title: 'Tổ chức chương trình C++ nhiều tệp: Tách biệt tệp tiêu đề (.h/.hpp) và tệp cài đặt (.cpp), Header Guards và Quy tắc một định nghĩa (ODR)',
          level: 'core',
          paragraphs: [
            'Khi chương trình lớn dần, việc để toàn bộ mã nguồn trong một tệp `main.cpp` duy nhất khiến thời gian biên dịch lại kéo dài và khó tái sử dụng các mô-đun. Trong C++, một dự án nhiều tệp được tổ chức bằng cách tách **khai báo giao diện (declarations)** — gồm nguyên mẫu hàm (function prototypes), định nghĩa kiểu `struct`/`class` và hằng số — vào các **tệp tiêu đề (header files `.h` / `.hpp`)**, còn phần **định nghĩa cài đặt thân hàm (definitions)** được đặt trong các **tệp mã nguồn (`.cpp`)** tương ứng. Bất kỳ tệp `.cpp` nào cần gọi hàm của mô-đun đó chỉ việc `#include "ten_module.h"` để trình biên dịch biết chữ ký hàm mà kiểm tra kiểu.',
            'Tiểu mục giải thích cơ chế vật lý của chỉ thị tiền xử lý `#include`: nó đơn thuần sao chép nguyên văn toàn bộ nội dung tệp `.h` dán đè vào vị trí `#include` trước khi biên dịch. Do đó, nếu tệp `main.cpp` include cả `a.h` và `b.h`, mà bản thân `b.h` cũng include `a.h`, thì nội dung của `a.h` sẽ bị dán hai lần vào cùng một đơn vị dịch, làm định nghĩa kiểu `struct` bị lặp lại và vi phạm **Quy tắc một định nghĩa (One Definition Rule — ODR)**. Để ngăn chặn lỗi này, mọi tệp tiêu đề bắt buộc phải được bảo vệ bởi **Header Guards** (`#ifndef TEN_MODULE_H` / `#define TEN_MODULE_H` ... `#endif` hoặc chỉ thị `#pragma once`). Đồng thời, người học nắm vững lý do vì sao không được định nghĩa thân hàm thông thường (không phải `inline` hay `template`) hoặc biến toàn cục không hằng trực tiếp trong tệp `.h`: nếu hai tệp `.cpp` cùng include tệp `.h` đó, mỗi tệp `.o` sẽ sinh ra một bản sao ký hiệu giống hệt nhau và bị trình liên kết (linker) báo lỗi `multiple definition` ở pha cuối.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 2: §2.7 Forward declarations, §2.8 Programs with multiple code files, §2.11 Header files, and §2.12 Header guards',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'gdt-sbs-dependency-graph-make-cmake',
          title: 'Đồ thị phụ thuộc biên dịch (Build Dependency Graph), biên dịch gia tăng với Make và cấu hình dự án C++ bằng CMake',
          level: 'core',
          paragraphs: [
            'Trong một dự án gồm $20$ tệp `.cpp`, nếu người học chỉ sửa đúng $1$ dòng trong tệp `math_utils.cpp`, việc gọi `g++` biên dịch lại từ đầu cả $20$ tệp là sự lãng phí lớn. Quy trình biên dịch chuẩn tách quá trình thành hai bước: (Bước 1) Biên dịch từng tệp `.cpp` độc lập thành tệp mã máy đối tượng `.o` bằng cờ `-c` (`g++ -c math_utils.cpp -o math_utils.o`); và (Bước 2) Liên kết tất cả các tệp `.o` lại thành tệp thực thi cuối cùng (`g++ main.o math_utils.o -o app`). Khi chỉ sửa `math_utils.cpp`, ta chỉ cần dịch lại duy nhất `math_utils.o` rồi liên kết lại.',
            'Để tự động hóa quy trình này mà không phải nhớ tệp nào vừa được sửa, các **hệ thống xây dựng (build systems)** như **`Make`** biểu diễn dự án dưới dạng một **đồ thị có hướng không chu trình (DAG) của các phụ thuộc tệp**: mỗi quy tắc trong `Makefile` có dạng `tep_dich: danh_sach_tep_phu_thuoc` kèm câu lệnh tạo đích; `Make` so sánh dấu thời gian sửa đổi (modification timestamps) trên hệ thống tệp — nếu bất kỳ tệp phụ thuộc nào (như `.cpp` hoặc `.h`) có thời gian mới hơn tệp đích `.o`, `Make` mới chạy lại lệnh dịch cho nhánh đó. Cuối cùng, tiểu mục giới thiệu **`CMake`** (`CMakeLists.txt` với `cmake_minimum_required`, `project`, `set(CMAKE_CXX_STANDARD 20)`, `add_executable`) như một bộ sinh cấu hình build đa nền tảng hiện đại: thay vì viết `Makefile` thủ công phụ thuộc hệ điều hành, lập trình viên khai báo các mục tiêu (targets) và tệp nguồn trong `CMakeLists.txt`, rồi chạy quy trình biên dịch ngoài thư mục nguồn (`cmake -B build && cmake --build build`) để giữ thư mục mã nguồn luôn sạch sẽ.',
          ],
          sources: [
            {
              sourceId: 'mit-missing-semester',
              locator: 'Lecture 8: Metaprogramming — Build systems, dependency graphs, targets, prerequisites, and Make',
              relationship: 'primary',
            },
            {
              sourceId: 'learncpp',
              locator: 'Chapter 0 (§0.5 Compiler and Linker) & Chapter 2 (§2.8 Compiling multi-file projects)',
              relationship: 'supplementary',
            },
          ],
        },
      ],
    },
  ],
};
