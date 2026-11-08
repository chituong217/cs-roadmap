// Khối II — Lập trình và toán nền cho CS
export const B2 = [
  // ── C++ và mô hình bộ nhớ
  { id: 'n-con-tro', t: 'Con trỏ', c: 'cpp-memory-model', cov: ['cppm-addresses-pointers-aliasing', 'cppm-lifetime-stack-heap'],
    x: ['Biến, kiểu dữ liệu, hàm và mảng trong C++ ở mức cơ bản.'],
    p: [
      'Bộ nhớ được chia thành các ô đánh địa chỉ theo byte; mỗi đối tượng chiếm một vùng liên tiếp có kích thước (sizeof) và yêu cầu căn chỉnh. Con trỏ là một đối tượng lưu địa chỉ của đối tượng khác, nên kiểu T* quyết định cách đọc vùng nhớ mà nó trỏ tới. Cần phân biệt khai báo, khởi tạo và gán; toán tử lấy địa chỉ (&) và giải tham chiếu (*) là hai chiều ngược nhau; con trỏ rỗng (nullptr) biểu thị "không trỏ tới đối tượng nào" và không được giải tham chiếu.',
      'Số học con trỏ cộng trừ theo đơn vị kích thước kiểu được trỏ, nên gắn chặt với mảng: tên mảng thường phân rã thành con trỏ tới phần tử đầu và a[i] tương đương *(a+i), nhưng mảng không phải con trỏ và mất thông tin kích thước khi truyền vào hàm. Truyền con trỏ vào hàm cho phép sửa đối tượng của nơi gọi hoặc tránh sao chép, khác với truyền giá trị và tham chiếu; const đặt trước hay sau dấu * cho hai ý nghĩa khác nhau.',
      'Vùng nhớ động được cấp bằng new và trả lại bằng delete (new[]/delete[] cho mảng), còn biến cục bộ nằm trên stack và hết hiệu lực khi hàm kết thúc. Giới hạn quan trọng là các lỗi bộ nhớ kinh điển: con trỏ treo (dùng sau khi giải phóng hoặc trả về địa chỉ biến cục bộ), rò rỉ, giải phóng hai lần và truy cập ngoài biên; các lỗi này gây hành vi không xác định chứ không luôn báo lỗi. Con trỏ thông minh và RAII là lời giải ở node sau.',
    ] },
  { id: 'n-raii-so-huu', t: 'RAII, ngữ nghĩa di chuyển và con trỏ thông minh', c: 'cpp-memory-model', cov: ['cppm-raii-ownership-move'],
    p: [
      'RAII gắn vòng đời của tài nguyên (bộ nhớ, tệp, khóa) với vòng đời của một đối tượng: tài nguyên được lấy trong hàm tạo và trả trong hàm hủy, được gọi tất định khi ra khỏi phạm vi, kể cả khi có ngoại lệ. Biểu thức phân thành lvalue (có danh tính, có địa chỉ) và rvalue (tạm thời); tham chiếu rvalue T&& cho phép chuyển tài nguyên thay vì sao chép.',
      'Quyền sở hữu được mô hình bằng unique_ptr (sở hữu duy nhất, chỉ di chuyển), shared_ptr (đếm tham chiếu, có thể tạo vòng lặp rò rỉ) và weak_ptr (quan sát không sở hữu, phá vòng); Quy tắc Số Không và Số Năm quy định khi nào lớp cần tự viết các hàm sao chép, di chuyển, hủy.',
    ] },
  { id: 'n-template-vector-sanitizer', t: 'Template, vector và công cụ sanitizer', c: 'cpp-memory-model', cov: ['cppm-templates-containers-sanitizers'],
    p: [
      'Khuôn mẫu hàm và lớp sinh mã riêng cho từng kiểu tại thời điểm biên dịch (khởi tạo khuôn mẫu), nên định nghĩa thường đặt trong tệp tiêu đề. std::vector phân biệt size (số phần tử đang dùng) với capacity (vùng nhớ đã cấp); khi vượt capacity nó cấp phát lại và các con trỏ, tham chiếu, iterator cũ bị mất hiệu lực.',
      'Chuẩn ISO C++ quy định hành vi ngôn ngữ, còn ABI quy định bố cục nhị phân giữa các thành phần biên dịch. AddressSanitizer và UBSan chèn kiểm tra lúc chạy để phát hiện lỗi bộ nhớ và hành vi không xác định, bắt được nhiều lỗi mà chạy thường không báo.',
    ] },

  // ── Lập trình hướng đối tượng
  { id: 'n-lop-bat-bien', t: 'Lớp, đóng gói và bất biến của lớp', c: 'object-oriented-programming', cov: ['oop-classes-invariants'],
    p: [
      'Bất biến của lớp là điều kiện luôn đúng với mọi đối tượng hợp lệ; đóng gói giữ dữ liệu ở trạng thái riêng để chỉ các hàm của lớp mới có thể phá hoặc giữ bất biến, và struct hợp với dữ liệu thuần còn class hợp khi có bất biến cần bảo vệ. Hàm tạo thiết lập bất biến; danh sách khởi tạo thành viên khởi tạo trực tiếp và thứ tự khởi tạo thực tế theo thứ tự khai báo chứ không theo thứ tự viết.',
      'Con trỏ ẩn this trỏ tới đối tượng đang gọi; hàm thành viên const cam kết không đổi trạng thái đối tượng; thành viên static thuộc về lớp chứ không thuộc từng đối tượng.',
    ] },
  { id: 'n-sao-chep-toan-tu', t: 'Sao chép, nạp chồng toán tử và hợp thành', c: 'object-oriented-programming', cov: ['oop-copy-operators-composition'],
    p: [
      'Sao chép nông chép con trỏ nên hai đối tượng cùng trỏ một vùng nhớ và dễ hủy đôi; sao chép sâu chép cả vùng được trỏ tới. Toán tử gán sao chép phải xử lý tự gán và an toàn ngoại lệ, mẫu copy-and-swap là cách gọn để đạt điều đó.',
      'Nạp chồng toán tử chỉ nên giữ đúng ngữ nghĩa quen thuộc (so sánh, số học, [], luồng). Hợp thành mô hình "một phần của" nơi đối tượng chứa quản lý vòng đời bộ phận, còn kết tập mô hình "có tham chiếu tới" với vòng đời độc lập.',
    ] },
  { id: 'n-ke-thua-da-hinh', t: 'Kế thừa và đa hình động', c: 'object-oriented-programming', cov: ['oop-inheritance-polymorphism'],
    p: [
      'Kế thừa công khai biểu diễn quan hệ "là một" và phải thỏa nguyên lý thay thế Liskov: đối tượng dẫn xuất dùng được ở mọi nơi dùng đối tượng cơ sở. Đối tượng cơ sở được dựng trước, hủy sau cùng; liên kết tĩnh chọn hàm lúc biên dịch, còn hàm virtual chọn lúc chạy theo kiểu thực của đối tượng.',
      'Lớp thuần ảo định nghĩa giao diện, và lớp cơ sở đa hình cần hàm hủy virtual. Cài đặt thường qua vtable/vptr có chi phí nhỏ nhưng thật, và cắt lát đối tượng xảy ra khi gán đối tượng dẫn xuất vào biến kiểu cơ sở theo giá trị.',
    ] },
  { id: 'n-thiet-ke-oop', t: 'Nguyên lý thiết kế và mẫu thiết kế cốt lõi', c: 'object-oriented-programming', cov: ['oop-design-tradeoffs'],
    p: [
      'Độ gắn kết cao trong từng mô-đun và độ kết dính thấp giữa các mô-đun làm hệ thống dễ đổi; đảo ngược phụ thuộc cho phép tầng cao phụ thuộc vào giao diện thay vì cài đặt, và nguyên tắc ưu tiên hợp thành hơn kế thừa tránh cây kế thừa cứng nhắc. Strategy, Factory và Observer là ba mẫu giải ba bài toán lặp lại: đổi thuật toán, tách việc tạo đối tượng, và thông báo thay đổi.',
      'OOP không phải lúc nào cũng phù hợp: đa hình tĩnh bằng template, kiểu biến thể std::variant hoặc dữ liệu thuần có thể gọn và nhanh hơn khi tập kiểu cố định.',
    ] },

  // ── Toán rời rạc
  { id: 'n-tap-ham-quan-he', t: 'Tập hợp, hàm và quan hệ', c: 'discrete-math', cov: ['dm-sets-functions-relations'],
    p: [
      'Tập hợp với phép hợp, giao, hiệu, tập lũy thừa và tích Descartes là ngôn ngữ chung của toán rời rạc. Hàm giữa hai tập được phân loại thành đơn ánh, toàn ánh và song ánh, và song ánh là cơ sở cho việc so sánh kích thước tập hợp.',
      'Quan hệ hai ngôi có các tính chất phản xạ, đối xứng, bắc cầu; quan hệ tương đương cả ba và chia tập thành các lớp rời nhau (phân hoạch), tương ứng một–một với phân hoạch.',
    ] },
  { id: 'n-logic', t: 'Logic mệnh đề và logic vị từ', c: 'discrete-math', cov: ['dm-logic-predicates'],
    p: [
      'Mệnh đề được nối bằng các phép nối chân trị; phép kéo theo P⇒Q chỉ sai khi P đúng mà Q sai, và cần phân biệt nó với đảo và phản đảo (chỉ phản đảo tương đương). Tương đương logic, hằng đúng và hai dạng chuẩn tắc DNF, CNF dẫn tới bài toán SAT.',
      'Logic vị từ thêm biến, miền diễn dịch và lượng từ; thứ tự lượng từ lồng nhau đổi nghĩa, và phủ định đổi lượng từ theo quy tắc De Morgan.',
    ] },
  { id: 'n-chung-minh-quy-nap', t: 'Phương pháp chứng minh và quy nạp', c: 'discrete-math', cov: ['dm-proofs-induction'],
    p: [
      'Chứng minh trực tiếp, bằng phản đảo và phản chứng là ba chiến lược cơ bản; một phản ví dụ đủ bác bỏ mệnh đề phát biểu cho mọi trường hợp. Nguyên lý thứ tự tốt dẫn tới quy nạp thường: chứng minh trường hợp cơ sở và bước quy nạp.',
      'Quy nạp mạnh cho phép dùng mọi trường hợp trước, và việc chọn đủ trường hợp cơ sở là chỗ hay sai; nhiều "chứng minh" quy nạp ngụy biện vì bước quy nạp ngầm cần điều kiện không có.',
    ] },
  { id: 'n-de-quy-bat-bien', t: 'Định nghĩa đệ quy, quy nạp cấu trúc và bất biến', c: 'discrete-math', cov: ['dm-recursive-definitions-invariants'],
    p: [
      'Kiểu dữ liệu đệ quy được định nghĩa bằng trường hợp cơ sở và quy tắc dựng; nếu định nghĩa không nhập nhằng thì quy nạp cấu trúc chứng minh được tính chất cho mọi phần tử. Máy trạng thái có trạng thái khả đạt, và bất biến bảo toàn là tính chất đúng ban đầu và giữ nguyên sau mỗi bước chuyển nên đúng ở mọi trạng thái khả đạt.',
      'Tính đúng đắn từng phần (đúng nếu dừng) khác tính đúng đắn toàn phần, và tính dừng được chứng minh bằng một đại lượng nguyên không âm giảm ngặt.',
    ] },
  { id: 'n-so-hoc-dong-du', t: 'Số học nguyên và đồng dư modulo', c: 'discrete-math', cov: ['dm-number-theory-modular'],
    p: [
      'Phép chia có dư và thuật toán Euclid tìm ước chung lớn nhất; đồng nhất thức Bézout biểu diễn ước chung lớn nhất thành tổ hợp nguyên, và mọi số nguyên phân tích duy nhất thành tích số nguyên tố. Quan hệ đồng dư modulo n tương thích với cộng và nhân, và nghịch đảo nhân modulo n chỉ tồn tại khi số đó nguyên tố cùng nhau với n.',
      'Hàm phi Euler, định lý Fermat nhỏ, định lý Euler và định lý thặng dư Trung Hoa cho phép tính lũy thừa modulo và ghép các hệ đồng dư, nền của mật mã khóa công khai.',
    ] },
  { id: 'n-do-thi-cay', t: 'Đồ thị cơ sở, cây và thứ tự bộ phận', c: 'discrete-math', cov: ['dm-graphs-trees-posets'],
    p: [
      'Đồ thị đơn vô hướng có bậc đỉnh, đường đi, chu trình và thành phần liên thông; bổ đề bắt tay nói tổng bậc bằng hai lần số cạnh. Cây là đồ thị liên thông không chu trình với nhiều định nghĩa tương đương, và cây khung là cây trải qua mọi đỉnh.',
      'Đồ thị có hướng không chu trình (DAG) mô tả quan hệ phụ thuộc; thứ tự bộ phận và sắp xếp tô-pô cho một thứ tự tuyến tính thỏa mọi ràng buộc phụ thuộc.',
    ] },
  { id: 'n-dem-to-hop', t: 'Nguyên lý đếm và tổ hợp', c: 'discrete-math', cov: ['dm-counting-combinatorics'],
    p: [
      'Quy tắc cộng, nhân và chia cùng phương pháp song ánh là công cụ đếm cơ bản; hoán vị, tổ hợp và định lý nhị thức cho các công thức quen thuộc, và chứng minh tổ hợp diễn giải cả hai vế của một đẳng thức như đếm cùng một tập.',
      'Nguyên lý bao hàm–loại trừ đếm hợp các tập giao nhau, còn nguyên lý chuồng bồ câu khẳng định sự tồn tại mà không chỉ ra phần tử cụ thể.',
    ] },
  { id: 'n-tong-tiem-can', t: 'Tổng hữu hạn và ước lượng tiệm cận', c: 'discrete-math', cov: ['dm-sums-products-asymptotics'],
    p: [
      'Tổng hữu hạn được biến đổi bằng cấp số nhân, tổng triệt tiêu và phương pháp nhiễu loạn để tìm dạng đóng hoặc cận cho các số điều hòa và tổng lũy thừa. Các ký hiệu tiệm cận O, Ω, Θ, o, ω có định nghĩa bằng lượng từ, và có những bẫy như coi O là đẳng thức hay cộng các O trong vòng lặp.',
      'Phần mở rộng: kẹp tổng bằng tích phân và xấp xỉ Stirling cho giai thừa, cần khái niệm tích phân xác định từ môn giải tích.',
    ] },
  { id: 'n-he-thuc-de-quy', t: 'Hệ thức đệ quy', c: 'discrete-math', cov: ['dm-recurrences'],
    x: ['Quy nạp toán học và ký hiệu tiệm cận O, Θ.', 'Số phức ở mức biết dạng a+bi (chỉ cho trường hợp nghiệm phức).'],
    p: [
      'Hệ thức đệ quy mô tả một dãy bằng các số hạng đứng trước cùng điều kiện đầu; bậc của hệ thức là số số hạng trước mà nó dùng. Việc đầu tiên là mô hình hóa bài toán (số lần gọi hàm, số cách đếm, độ phức tạp thuật toán) thành hệ thức, rồi tìm công thức tường minh hoặc ước lượng tăng trưởng.',
      'Có hai hướng giải: khai triển lặp rồi chứng minh bằng quy nạp, và với hệ thức tuyến tính hệ số hằng thì dùng phương trình đặc trưng. Nghiệm đặc trưng phân biệt cho tổng các lũy thừa, nghiệm bội nhân thêm đa thức theo n, nghiệm phức liên hợp cho dạng dao động; với phần không thuần nhất cần cộng một nghiệm riêng tìm bằng hệ số bất định rồi dùng điều kiện đầu để xác định hằng số.',
      'Giới hạn quan trọng: phương pháp đặc trưng chỉ áp dụng cho hệ thức tuyến tính hệ số hằng, không áp dụng trực tiếp cho truy hồi chia để trị như T(n)=2T(n/2)+n, vốn cần cây đệ quy hoặc định lý Master. Hàm sinh là công cụ giải tổng quát hơn và thuộc node sau.',
    ] },
  { id: 'n-ham-sinh-co-ban', t: 'Hàm sinh và các phép biến đổi', c: 'discrete-math', cov: ['dm-gf-formal-power-series', 'dm-gf-operations-shifting-differentiation'],
    p: [
      'Hàm sinh thường mã hóa một dãy thành hệ số của chuỗi lũy thừa hình thức; xem chuỗi chỉ như đối tượng đại số nên không cần bàn hội tụ. Một số hàm sinh cơ sở (dãy hằng, 1/(1−x), nhị thức) là viên gạch để dựng các hàm sinh khác.',
      'Các phép biến đổi trên dãy tương ứng phép toán trên hàm sinh: tổ hợp tuyến tính, dịch chỉ số, đạo hàm và tích chập (tích hai hàm sinh cho tích chập hai dãy).',
    ] },
  { id: 'n-ham-sinh-ung-dung', t: 'Hàm sinh trong bài toán đếm và truy hồi', c: 'discrete-math', cov: ['dm-gf-counting-convolutions-partitions', 'dm-gf-solving-recurrences-partial-fractions'],
    p: [
      'Bài toán đếm có ràng buộc được mô hình bằng quy tắc tích chập: mỗi ràng buộc là một hàm sinh thừa số, hệ số của tích là đáp số; phân hoạch số nguyên là ví dụ điển hình.',
      'Hệ thức đệ quy được giải bằng cách chuyển sang phương trình trên hàm sinh rồi phân tích phân thức tối giản để đọc hệ số. Cần thận trọng với phần chuỗi hình thức và điều kiện để phép biến đổi đại số hợp lệ.',
    ] },

  // ── Đại số tuyến tính
  { id: 'n-he-pt-khu-gauss', t: 'Hệ tuyến tính, khử Gauss và phân rã LU', c: 'linear-algebra', cov: ['la-systems-elimination-matrices'],
    p: [
      'Hệ Ax=b có hai góc nhìn: giao các siêu phẳng theo hàng, hoặc tổ hợp tuyến tính các cột. Khử Gauss biến hệ thành dạng tam giác bằng phần tử chốt và hệ số nhân rồi thế ngược; hệ có thể có nghiệm duy nhất, vô số nghiệm hoặc vô nghiệm.',
      'Nhân ma trận có bốn cách nhìn; ma trận nghịch đảo chỉ tồn tại khi ma trận khả nghịch, và phân rã PA=LU ghi lại quá trình khử để giải nhiều vế phải với chi phí thấp.',
    ] },
  { id: 'n-khong-gian-vector', t: 'Không gian vector, cơ sở và bốn không gian con', c: 'linear-algebra', cov: ['la-vector-spaces-subspaces'],
    p: [
      'Không gian con đóng với phép cộng và nhân vô hướng; không gian cột C(A) và không gian null N(A) cho biết b nào giải được và nghiệm nào của Ax=0. Dạng RREF phân biệt biến chốt và biến tự do, hạng ma trận bằng số biến chốt, và nghiệm tổng quát bằng nghiệm riêng cộng không gian null.',
      'Độc lập tuyến tính, hệ sinh, cơ sở và số chiều dẫn tới định lý bốn không gian con cơ bản liên hệ chiều của cột, hàng, null và null trái.',
    ] },
  { id: 'n-anh-xa-doi-co-so', t: 'Ánh xạ tuyến tính và đổi cơ sở', c: 'linear-algebra', cov: ['la-linear-maps-change-of-basis'],
    p: [
      'Ánh xạ tuyến tính bảo toàn tổ hợp tuyến tính, có hạt nhân và ảnh; mỗi ánh xạ ứng với một ma trận tùy theo cơ sở chọn cho miền và đích, và nhân ma trận là hợp ánh xạ.',
      'Đổi cơ sở thay tọa độ của cùng một vector; hai ma trận biểu diễn cùng một ánh xạ ở hai cơ sở là đồng dạng, nên các đại lượng bất biến như trị riêng không phụ thuộc cơ sở.',
    ] },
  { id: 'n-truc-giao-binh-phuong', t: 'Trực giao, phép chiếu và bình phương tối thiểu', c: 'linear-algebra', cov: ['la-orthogonality-least-squares'],
    p: [
      'Tích vô hướng cho độ dài và góc; các cặp không gian con trực giao là phần bù trực giao của nhau. Phép chiếu trực giao lên không gian con có ma trận chiếu P, và khi Ax=b vô nghiệm, nghiệm bình phương tối thiểu giải phương trình chuẩn AᵀAx̂=Aᵀb.',
      'Cơ sở trực chuẩn làm phép chiếu đơn giản (QᵀQ=I); quá trình Gram–Schmidt sinh phân rã QR, ổn định số hơn phương trình chuẩn.',
    ] },
  { id: 'n-dinh-thuc-tri-rieng', t: 'Định thức, trị riêng và chéo hóa', c: 'linear-algebra', cov: ['la-determinants-eigenvalues'],
    p: [
      'Định thức được xác định bởi ba tiên đề và đo hệ số thay đổi thể tích; bằng 0 đúng khi ma trận không khả nghịch. Trị riêng λ và vector riêng v thỏa Av=λv, là nghiệm của đa thức đặc trưng det(A−λI)=0.',
      'Ma trận có đủ vector riêng độc lập chéo hóa được thành SΛS⁻¹, giúp tính lũy thừa Aᵏ và phân tích hệ động lực rời rạc như chuỗi Markov; không phải ma trận nào cũng chéo hóa được.',
    ] },
  { id: 'n-doi-xung-svd', t: 'Ma trận đối xứng, xác định dương và SVD', c: 'linear-algebra', cov: ['la-symmetric-positive-definite-svd'],
    p: [
      'Ma trận thực đối xứng có trị riêng thực và vector riêng trực giao (định lý phổ). Dạng toàn phương xᵀAx gắn với tính xác định dương, một điều kiện cho cực tiểu và cho các bài toán tối ưu lồi.',
      'Phân rã giá trị kỳ dị A=UΣVᵀ tồn tại cho mọi ma trận; giữ k giá trị kỳ dị lớn nhất cho xấp xỉ hạng thấp tốt nhất (Eckart–Young), và giả nghịch đảo giải bài toán bình phương tối thiểu tổng quát.',
    ] },

  // ── Giải tích một biến
  { id: 'n-gioi-han-dao-ham', t: 'Giới hạn, liên tục và đạo hàm', c: 'single-variable-calculus', cov: ['svc-limits-continuity-derivatives'],
    p: [
      'Giới hạn một phía, hai phía và tại vô cùng mô tả hành vi của hàm khi biến tiến tới một giá trị; tính liên tục và định lý giá trị trung gian bảo đảm hàm liên tục không nhảy qua giá trị. Đạo hàm là giới hạn của tỉ số sai phân, ý nghĩa tiếp tuyến và tốc độ thay đổi tức thời.',
      'Hàm khả vi thì liên tục nhưng ngược lại không đúng; quy tắc đạo hàm cho tổng, tích, thương và các hàm sơ cấp đủ để tính hầu hết đạo hàm thường gặp.',
    ] },
  { id: 'n-day-chuyen-xap-xi', t: 'Quy tắc dây chuyền và xấp xỉ', c: 'single-variable-calculus', cov: ['svc-chain-rule-approximations'],
    p: [
      'Quy tắc dây chuyền nhân các hệ số nhạy cảm qua từng tầng của hàm hợp. Đạo hàm hàm ẩn, hàm ngược (ln x, arctan x) và kỹ thuật lấy đạo hàm theo logarit mở rộng phạm vi tính.',
      'Xấp xỉ tuyến tính và bậc hai thay hàm bằng đa thức gần một điểm, là cơ sở của phương pháp số và phân tích sai số.',
    ] },
  { id: 'n-cuc-tri-newton', t: 'Cực trị, L’Hôpital và phương pháp Newton', c: 'single-variable-calculus', cov: ['svc-optimization-newton'],
    p: [
      'Điểm tới hạn là ứng viên cực trị; đạo hàm bậc hai và tính lồi phân biệt cực trị địa phương với toàn cục. Định lý giá trị trung bình và quy tắc L’Hôpital xử lý dạng vô định và so sánh tốc độ tăng của các hàm.',
      'Phương pháp Newton–Raphson lặp để tìm nghiệm f(x)=0, hội tụ bậc hai khi gần nghiệm, nhưng có thể phân kỳ hoặc lệch nếu điểm đầu hoặc điều kiện hàm không tốt.',
    ] },
  { id: 'n-tich-phan-ftc', t: 'Tổng Riemann, tích phân xác định và FTC', c: 'single-variable-calculus', cov: ['svc-integration-ftc'],
    p: [
      'Tổng Riemann xấp xỉ diện tích bằng các hình chữ nhật, và tích phân xác định là giới hạn của chúng. Nguyên hàm và Định lý cơ bản của giải tích nối hai khái niệm: đạo hàm của tích phân theo cận trên là hàm lấy tích phân, và tích phân xác định tính bằng hiệu nguyên hàm tại hai cận.',
      'Cần phân biệt tích phân xác định (một con số, có thể mang dấu âm khi hàm dưới trục) với nguyên hàm (một họ hàm sai khác hằng số); tích phân tồn tại cho hàm liên tục, và tổng Riemann cho phép tính xấp xỉ bằng máy khi không có nguyên hàm sơ cấp.',
    ] },
  { id: 'n-ky-thuat-tich-phan', t: 'Kỹ thuật tích phân và tích phân suy rộng', c: 'single-variable-calculus', cov: ['svc-techniques-improper-integrals'],
    p: [
      'Đổi biến u và tích phân từng phần là hai kỹ thuật chính, ứng với quy tắc dây chuyền và quy tắc tích đảo ngược. Tích phân suy rộng trên miền vô hạn hoặc hàm không bị chặn được định nghĩa bằng giới hạn và có thể hội tụ hoặc phân kỳ.',
      'Phần mở rộng: phân tích phân thức tối giản và các phép đổi biến lượng giác cho các lớp hàm đặc biệt.',
    ] },
  { id: 'n-chuoi-taylor', t: 'Chuỗi vô hạn và khai triển Taylor', c: 'single-variable-calculus', cov: ['svc-series-taylor'],
    p: [
      'Chuỗi vô hạn hội tụ khi dãy tổng riêng có giới hạn; chuỗi cấp số nhân có tổng đóng và các tiêu chuẩn (so sánh, tỉ số, tích phân) quyết định hội tụ. Chuỗi lũy thừa có bán kính hội tụ, và Taylor/Maclaurin biểu diễn hàm trơn bằng chuỗi lũy thừa.',
      'Định lý Taylor với số dư cho biết sai số khi cắt chuỗi hữu hạn, cơ sở của xấp xỉ hàm và đánh giá sai số số học.',
    ] },

  // ── Giải tích nhiều biến và tối ưu
  { id: 'n-ham-nhieu-bien', t: 'Hàm nhiều biến và đạo hàm riêng', c: 'multivariable-calculus-optimization', cov: ['mco-multivariable-functions-partials'],
    p: [
      'Hàm nhiều biến có đồ thị là mặt, và đường hoặc mặt đồng mức cho thấy nơi giá trị không đổi; mặt phẳng và siêu phẳng mô tả cấu trúc tuyến tính. Đạo hàm riêng đạo hàm theo từng biến, và định lý Clairaut cho đổi thứ tự lấy đạo hàm riêng khi đạo hàm riêng cấp hai liên tục.',
      'Mặt phẳng tiếp diện và xấp xỉ tuyến tính chỉ hợp lệ khi hàm khả vi toàn phần; sự tồn tại các đạo hàm riêng chưa đủ.',
    ] },
  { id: 'n-gradient-jacobian', t: 'Gradient, Jacobian và quy tắc dây chuyền', c: 'multivariable-calculus-optimization', cov: ['mco-gradient-jacobian-chain-rule'],
    p: [
      'Vector gradient chỉ hướng tăng nhanh nhất, độ dài là tốc độ tăng đó, và vuông góc với đường đồng mức; đạo hàm theo hướng là tích vô hướng của gradient với hướng đơn vị. Ma trận Jacobian tổng quát hóa đạo hàm cho ánh xạ vector.',
      'Quy tắc dây chuyền nhiều biến nhân các Jacobian; trên đồ thị tính toán nó chính là nền toán học của lan truyền ngược dùng để huấn luyện mô hình.',
    ] },
  { id: 'n-toi-uu-hessian', t: 'Cực trị, Hessian, Lagrange và hạ gradient', c: 'multivariable-calculus-optimization', cov: ['mco-analytic-numerical-optimization'],
    p: [
      'Ma trận Hessian và khai triển Taylor bậc hai phân loại điểm dừng thành cực tiểu, cực đại hoặc điểm yên ngựa. Nhân tử Lagrange giải tối ưu có ràng buộc đẳng thức bằng điều kiện gradient của hàm song song gradient của ràng buộc.',
      'Hạ gradient là thuật toán số lặp bước ngược gradient; kích thước bước và độ điều kiện (tỉ lệ các trị riêng của Hessian) quyết định hội tụ nhanh, chậm hay phân kỳ.',
    ] },
  { id: 'n-tich-phan-boi', t: 'Tích phân bội và đổi biến', c: 'multivariable-calculus-optimization', cov: ['mco-multiple-integrals'],
    p: [
      'Tích phân kép và bội tính trên miền phẳng hoặc không gian, và định lý Fubini cho phép đưa về các tích phân lặp. Công thức đổi biến nhân với trị tuyệt đối của định thức Jacobian; ví dụ điển hình là tích phân Gauss.',
      'Phần mở rộng: giải tích trường vector cơ sở với tích phân đường, trường bảo toàn, divergence và định lý Stokes.',
    ] },

  // ── Xác suất
  { id: 'n-xac-suat-bayes', t: 'Không gian xác suất, xác suất có điều kiện và Bayes', c: 'probability', cov: ['prob-axioms-conditional-bayes'],
    p: [
      'Không gian xác suất gồm không gian mẫu, biến cố và độ đo thỏa ba tiên đề Kolmogorov, từ đó suy ra các quy tắc như xác suất phần bù và hợp. Xác suất có điều kiện P(A|B) cập nhật xác suất khi biết B; xung khắc khác độc lập, và hai khái niệm này hay bị nhầm.',
      'Công thức xác suất toàn phần và định lý Bayes đảo hướng điều kiện; sai lầm bỏ qua tỉ lệ nền (base rate) khiến xác suất dương tính thật thường bị đánh giá quá cao.',
    ] },
  { id: 'n-bnn-roi-rac', t: 'Biến ngẫu nhiên rời rạc, kỳ vọng và phương sai', c: 'probability', cov: ['prob-discrete-random-variables'],
    p: [
      'Biến ngẫu nhiên là hàm từ không gian mẫu sang số thực, mô tả bằng hàm khối xác suất và hàm phân phối tích lũy; các họ như Bernoulli, nhị thức, hình học, Poisson xuất hiện thường xuyên. Kỳ vọng tuyến tính ngay cả khi các biến phụ thuộc, và kỹ thuật biến chỉ thị tính kỳ vọng của số đếm một cách gọn.',
      'Phương sai đo độ phân tán, tính bằng E[X²]−(E[X])², và biến đổi tuyến tính theo quy tắc riêng.',
    ] },
  { id: 'n-bnn-lien-tuc', t: 'Biến ngẫu nhiên liên tục và các phân phối nền tảng', c: 'probability', cov: ['prob-continuous-distributions'],
    p: [
      'Hàm mật độ xác suất không phải xác suất mà là mật độ, xác suất lấy bằng tích phân, và CDF có đạo hàm bằng PDF. Phân phối đều, mũ (không nhớ) và chuẩn là ba họ nền tảng.',
      'Phân phối của Y=g(X) tìm qua CDF hoặc Jacobian, và phương pháp nghịch đảo CDF cho thuật toán sinh mẫu ngẫu nhiên từ một phân phối cho trước.',
    ] },
  { id: 'n-dong-thoi-gioi-han', t: 'Phân phối đồng thời, hiệp phương sai và định lý giới hạn', c: 'probability', cov: ['prob-joint-covariance-limit-theorems'],
    p: [
      'Phân phối đồng thời cho phép tính phân phối biên và có điều kiện; hiệp phương sai và hệ số tương quan đo phụ thuộc tuyến tính (độc lập thì không tương quan, ngược lại nói chung sai), và ma trận hiệp phương sai tổng hợp cho nhiều biến.',
      'Các bất đẳng thức chặn đuôi (Markov, Chebyshev, Chernoff) đưa cận cho xác suất lệch xa; luật số lớn và định lý giới hạn trung tâm giải thích vì sao trung bình mẫu ổn định và gần chuẩn.',
    ] },

  // ── Thống kê và suy luận
  { id: 'n-mau-mo-ta-sai-lech', t: 'Mẫu, thống kê mô tả và độ lệch – phương sai', c: 'statistics-inference', cov: ['stat-sampling-descriptive-bias'],
    p: [
      'Tham số mô tả quần thể, thống kê mô tả mẫu; mẫu i.i.d. là giả thiết nền, và các sai lệch chọn mẫu làm mẫu không đại diện. Thống kê mô tả vị trí và độ phân tán cần chọn loại bền vững (trung vị, khoảng tứ phân vị) khi có ngoại lai.',
      'Một ước lượng được đánh giá bằng độ lệch, phương sai, sai số chuẩn, MSE và tính vững; có sự đánh đổi giữa độ lệch và phương sai.',
    ] },
  { id: 'n-mle-bayes', t: 'Hàm hợp lý, MLE và suy luận Bayes', c: 'statistics-inference', cov: ['stat-likelihood-mle-bayesian'],
    p: [
      'Hàm hợp lý đo độ phù hợp của tham số với dữ liệu; MLE chọn tham số cực đại hóa log-likelihood, liên hệ trực tiếp với hàm mất mát trong học máy. Suy luận Bayes cập nhật tiên nghiệm thành hậu nghiệm bằng dữ liệu, và tiên nghiệm liên hợp cho công thức đóng.',
      'Khoảng tin cậy Bayes và phân phối dự đoán hậu nghiệm phản ánh độ bất định về tham số và dữ liệu mới; MAP chỉ lấy điểm cực đại của hậu nghiệm.',
    ] },
  { id: 'n-khoang-tin-cay-bootstrap', t: 'Khoảng tin cậy và bootstrap', c: 'statistics-inference', cov: ['stat-confidence-intervals-bootstrap'],
    p: [
      'Khoảng tin cậy tần suất mức 1−α là thủ tục phủ tham số thật với tần suất 1−α khi lặp lại, chứ không phải xác suất tham số nằm trong một khoảng cụ thể; khi chưa biết σ dùng phân phối Student-t.',
      'Bootstrap tái lấy mẫu từ dữ liệu có sẵn để ước lượng phân phối của thống kê bằng máy tính, hữu ích khi không có công thức giải tích, nhưng cần mẫu đủ đại diện.',
    ] },
  { id: 'n-kiem-dinh-hoi-quy', t: 'Kiểm định giả thuyết, hồi quy và nhân quả', c: 'statistics-inference', cov: ['stat-hypothesis-testing-regression-causality'],
    p: [
      'Kiểm định so H0 với HA; sai lầm loại I và II đánh đổi nhau, lực kiểm định là xác suất phát hiện hiệu ứng thật, và p-value không phải xác suất H0 đúng. Hồi quy tuyến tính Y=Xβ+ε có ước lượng OLS với các tính chất dưới giả thiết nhất định, và phần dư dùng để kiểm tra giả thiết.',
      'Tương quan không suy ra nhân quả: biến gây nhiễu có thể tạo tương quan giả, nên suy luận nhân quả cần thiết kế thí nghiệm hoặc giả định bổ sung.',
    ] },
];
