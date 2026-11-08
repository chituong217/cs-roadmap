// Khối III — Cấu trúc dữ liệu, thuật toán và lý thuyết
export const B3 = [
  // ── Cấu trúc dữ liệu
  { id: 'n-adt-bat-bien', t: 'Kiểu dữ liệu trừu tượng và bất biến biểu diễn', c: 'data-structures', cov: ['ds-abstract-interfaces'],
    p: [
      'Kiểu dữ liệu trừu tượng (ADT) đặc tả tập thao tác và hành vi mong đợi mà không nói cách cài đặt; tiền điều kiện cho biết khi nào lời gọi hợp lệ. Bất biến biểu diễn là điều kiện luôn đúng về cách dữ liệu được lưu bên trong, và mỗi thao tác phải nhận vào và trả ra trạng thái thỏa bất biến đó.',
      'Phân biệt ADT (giao diện) với cấu trúc dữ liệu (cài đặt cụ thể) cho phép đổi cài đặt mà không đổi chương trình dùng nó.',
    ] },
  { id: 'n-mang-dong', t: 'Mảng động và chi phí khấu hao', c: 'data-structures', cov: ['ds-dynamic-array-amortization'],
    p: [
      'Mảng động giữ vùng nhớ liên tiếp có dung lượng lớn hơn số phần tử, và khi đầy thì cấp vùng mới (thường gấp đôi) rồi chép sang. Một lần thêm đơn lẻ có thể tốn O(n), nhưng phân tích khấu hao cho thấy chi phí trung bình mỗi lần thêm cuối là O(1).',
      'Chọn hệ số tăng trưởng đánh đổi giữa lãng phí bộ nhớ và số lần chép; chèn hoặc xóa ở giữa vẫn tốn O(n) vì phải dịch phần tử.',
    ] },
  { id: 'n-dslk-don', t: 'Danh sách liên kết đơn', c: 'data-structures', cov: ['ds-linked-list-locality'], n: ['n-adt-bat-bien', 'n-con-tro'],
    x: ['Khái niệm độ phức tạp O(n) ở mức nhận biết.'],
    p: [
      'Danh sách liên kết đơn lưu dãy phần tử bằng các nút rời rạc, mỗi nút giữ một giá trị và con trỏ tới nút kế tiếp; cấu trúc được xác định bởi con trỏ đầu (và tùy chọn con trỏ đuôi). Khác với mảng, các nút không nằm liên tiếp trong bộ nhớ, nên truy cập theo chỉ số phải duyệt từ đầu và tốn O(n), trong khi chèn hoặc xóa ngay tại vị trí đã biết chỉ cần đổi vài liên kết và tốn O(1).',
      'Các thao tác cần phân biệt gồm chèn đầu, chèn sau một nút, xóa đầu, xóa nút sau một nút và duyệt; xóa hoặc chèn trước một nút bất kỳ cần nút đứng trước nó nên tốn O(n) ở danh sách đơn. Các trường hợp biên (danh sách rỗng, một phần tử, thao tác ở đầu hoặc đuôi) và thứ tự cập nhật liên kết là nguồn lỗi chính, đi cùng việc giải phóng nút để không rò rỉ.',
      'Đánh đổi so với mảng động là tính cục bộ bộ nhớ: duyệt mảng thân thiện với bộ nhớ đệm, còn duyệt danh sách phải nhảy theo con trỏ nên chậm hơn trong thực tế dù cùng O(n). Danh sách đôi thêm con trỏ trước để tháo một nút đã biết trong O(1); danh sách đơn là nền cho ngăn xếp, hàng đợi và bảng băm nối chuỗi.',
    ] },
  { id: 'n-ngan-xep-hang-doi', t: 'Ngăn xếp, hàng đợi, deque và mảng vòng', c: 'data-structures', cov: ['ds-stacks-queues-deques'],
    p: [
      'Ngăn xếp (vào sau ra trước) lưu các công việc dở dang, như chuỗi khung lời gọi hàm; hàng đợi (vào trước ra trước) giữ thứ tự đến. Hàng đợi cài trên mảng vòng dùng chỉ số đầu và cuối quay vòng để mọi thao tác tốn O(1) mà không dịch phần tử, và cần phân biệt đầy với rỗng.',
      'Deque cho thao tác ở cả hai đầu và có nhiều cài đặt (danh sách đôi, mảng vòng, mảng các khối); lựa chọn là đánh đổi giữa chi phí truy cập ngẫu nhiên, tính cục bộ và độ phức tạp cài đặt.',
    ] },
  { id: 'n-bang-bam', t: 'Bảng băm', c: 'data-structures', cov: ['ds-hash-tables'],
    p: [
      'Bảng băm ánh xạ khóa thành chỉ số nhờ hàm băm; hàm băm phải nhất quán với phép so sánh bằng và trải đều khóa, và kỳ vọng O(1) chỉ đúng dưới giả thiết phân bố đó. Va chạm giải quyết bằng nối chuỗi (mỗi ô một danh sách) hoặc địa chỉ mở (dò tìm ô khác trong chính mảng), mỗi cách có hệ quả khác về bộ nhớ, xóa và hiệu năng khi đầy.',
      'Khi hệ số tải vượt ngưỡng, bảng đổi kích thước và băm lại, với chi phí khấu hao hằng; khóa do kẻ tấn công chọn có thể gây dồn va chạm và đẩy các thao tác về O(n), nên cần hàm băm có mầm ngẫu nhiên khi dữ liệu không tin cậy.',
    ] },
  { id: 'n-cay-bst-avl', t: 'Cây tìm kiếm nhị phân và cân bằng', c: 'data-structures', cov: ['ds-bst-balanced-trees'],
    p: [
      'Cây tìm kiếm nhị phân giữ thứ tự: khóa bên trái nhỏ hơn, bên phải lớn hơn, nên duyệt trung thứ tự ra dãy sắp. Tìm, chèn, xóa tốn O(h) theo chiều cao, và phép xóa nút có hai con cần thay bằng nút kế cận; cây suy biến thành danh sách khi chèn dữ liệu đã sắp.',
      'Cây AVL giữ chiều cao hai cây con chênh nhiều nhất một bằng các phép xoay, bảo đảm O(log n). Red-black và B-tree là hai hướng khác: red-black nới lỏng cân bằng để ít xoay, B-tree nhiều con mỗi nút để hợp với đĩa và bộ nhớ đệm.',
    ] },
  { id: 'n-dong-uu-tien', t: 'Đống nhị phân và hàng đợi ưu tiên', c: 'data-structures', cov: ['ds-heaps-priority-queues'],
    p: [
      'Đống nhị phân là cây gần đầy lưu trong mảng, thỏa tính chất đống (cha không nhỏ hơn con ở max-heap); thêm và lấy phần tử đầu tốn O(log n) nhờ sàng lên và sàng xuống để khôi phục bất biến.',
      'Dựng đống từ n phần tử bằng sàng xuống từ giữa mảng chỉ tốn O(n) chứ không phải O(n log n). Hàng đợi ưu tiên là ADT, đống là một cài đặt, và nó không hỗ trợ tìm kiếm tùy ý hiệu quả.',
    ] },
  { id: 'n-trie-dsu-do-thi', t: 'Trie, DSU và cách biểu diễn đồ thị', c: 'data-structures', cov: ['ds-tries-dsu-graph-reps'],
    p: [
      'Trie lưu khóa chuỗi theo từng ký tự dọc đường đi và cần đánh dấu nút kết thúc khóa, cho phép tìm theo tiền tố với chi phí theo độ dài khóa. DSU (tập hợp rời rạc) giữ các nhóm bằng cây đại diện, và gộp theo hạng cùng nén đường đi làm mỗi thao tác gần hằng số.',
      'Đồ thị lưu bằng ma trận kề (kiểm tra cạnh O(1), tốn V² bộ nhớ), danh sách kề (tiết kiệm với đồ thị thưa) hoặc danh sách cạnh; lựa chọn phụ thuộc mật độ cạnh và thao tác thường dùng.',
    ] },

  // ── Thiết kế và phân tích thuật toán
  { id: 'n-chi-phi-truy-hoi', t: 'Mô hình chi phí, tính đúng đắn và truy hồi chia để trị', c: 'algorithms-design-analysis', cov: ['ada-cost-models-divide-conquer-recurrences'],
    p: [
      'Chi phí tính theo mô hình máy (RAM) và kích thước đầu vào, phân biệt trường hợp xấu nhất, trung bình và các loại cận. Tính đúng đắn của thuật toán lặp chứng minh bằng bất biến, quy nạp và tính dừng.',
      'Thuật toán chia để trị dẫn tới truy hồi, giải bằng cây đệ quy, phương pháp thế hoặc định lý Master; phần mở rộng xét truy hồi chia không đều và chỉ ra khi nào công thức Master không dùng được.',
    ] },
  { id: 'n-tim-kiem-sap-xep', t: 'Tìm kiếm nhị phân, sắp xếp và cận dưới', c: 'algorithms-design-analysis', cov: ['ada-searching-sorting-lower-bounds'],
    p: [
      'Tìm kiếm nhị phân áp dụng trên mọi miền có tính đơn điệu của một vị từ, không chỉ trên mảng sắp. Sắp xếp trộn và vun đống đều O(n log n) (trộn ổn định, vun đống tại chỗ), còn quicksort phân hoạch quanh chốt và O(n log n) kỳ vọng khi chốt được chọn ngẫu nhiên nhưng có trường hợp xấu O(n²).',
      'Mọi sắp xếp dựa trên so sánh cần ít nhất Ω(n log n) phép so sánh; sắp xếp theo chữ số tránh được cận này bằng cách khai thác cấu trúc khóa nguyên.',
    ] },
  { id: 'n-chia-de-tri', t: 'Chia để trị và tái sử dụng kết quả con', c: 'algorithms-design-analysis', cov: ['ada-divide-and-conquer-paradigm'],
    p: [
      'Karatsuba nhân hai số lớn bằng ba phép nhân con thay vì bốn, minh họa tái sử dụng kết quả con để hạ hằng số mũ. Chọn phần tử thứ k trong thời gian tuyến tính và tìm cặp điểm gần nhất là hai ứng dụng khác nơi bước ghép đóng vai trò quyết định.',
      'Phần mở rộng: đa thức, tích chập và ý tưởng của FFT, tính tích chập nhanh nhờ biểu diễn đa thức theo giá trị.',
    ] },
  { id: 'n-quy-hoach-dong', t: 'Quy hoạch động', c: 'algorithms-design-analysis', cov: ['ada-dynamic-programming'],
    p: [
      'Quy hoạch động áp dụng khi bài toán có cấu trúc con tối ưu và các bài toán con trùng lặp; bước then chốt là chọn trạng thái chứa đủ thông tin và chứng minh đồ thị phụ thuộc giữa các trạng thái không chu trình. Các mẫu điển hình là dãy con, đường đi trên lưới và ba lô.',
      'Chi phí bằng số trạng thái nhân chi phí chuyển; có thể nén bộ nhớ khi chỉ cần các lớp gần nhất, và truy vết lời giải cần lưu thêm quyết định.',
    ] },
  { id: 'n-tham-lam', t: 'Thuật toán tham lam', c: 'algorithms-design-analysis', cov: ['ada-greedy-algorithms'],
    p: [
      'Tham lam chọn tối ưu cục bộ ở mỗi bước và chỉ đúng khi chứng minh được: lập luận trao đổi (đổi lời giải tối ưu để chứa lựa chọn tham lam) hoặc lập luận dẫn trước. Lập lịch khoảng và mã Huffman là hai ví dụ đúng; nhiều bài toán trông giống (như đổi tiền hệ bất kỳ) có phản ví dụ.',
      'Phần mở rộng: matroid là cấu trúc đại số bảo đảm thuật toán tham lam tối ưu cho cả một lớp bài toán.',
    ] },
  { id: 'n-quay-lui-nhanh-can', t: 'Quay lui và nhánh cận', c: 'algorithms-design-analysis', cov: ['ada-backtracking-branch-bound'],
    p: [
      'Quay lui duyệt cây tìm kiếm các lựa chọn, và việc phục hồi đúng trạng thái khi quay lại là chỗ dễ sai nhất; cắt tỉa sớm các nhánh vi phạm ràng buộc giảm mạnh số trạng thái thực sự thăm.',
      'Nhánh cận thêm hàm đánh giá cận của lời giải tốt nhất trong nhánh; cận phải an toàn (không loại nhầm lời giải tối ưu), và chất lượng cận quyết định hiệu quả.',
    ] },

  // ── Thuật toán đồ thị
  { id: 'n-duyet-do-thi', t: 'BFS, DFS, sắp xếp tô-pô và thành phần liên thông mạnh', c: 'graph-algorithms', cov: ['ga-traversal-dag-scc'],
    p: [
      'BFS thăm theo lớp khoảng cách và cho đường đi ít cạnh nhất, DFS đi sâu và cho thứ tự vào ra dùng để phân loại cạnh. Chu trình có hướng được phát hiện qua DFS, và đồ thị không chu trình có thứ tự tô-pô.',
      'Thành phần liên thông mạnh tìm bằng Kosaraju hoặc Tarjan, co chúng lại cho một DAG. Đường Euler (đi hết mọi cạnh) có điều kiện bậc đơn giản, khác hẳn đường Hamilton (đi hết mọi đỉnh) không có đặc trưng hiệu quả.',
    ] },
  { id: 'n-duong-ngan-nhat', t: 'Đường đi ngắn nhất từ một nguồn', c: 'graph-algorithms', cov: ['ga-shortest-paths-sssp'],
    p: [
      'Nới lỏng cạnh là phép cập nhật khoảng cách cốt lõi; thuật toán khác nhau ở thứ tự nới lỏng. BFS cho trọng số bằng nhau, 0–1 BFS cho trọng số 0 hoặc 1, và đường đi trên DAG xử lý theo thứ tự tô-pô.',
      'Dijkstra đòi hỏi trọng số không âm vì dựa trên việc đỉnh đã chốt không thể giảm nữa; Bellman–Ford chấp nhận trọng số âm và phát hiện chu trình âm khả đạt, khi đó khoảng cách ngắn nhất không xác định.',
    ] },
  { id: 'n-duong-ngan-moi-cap', t: 'Đường đi ngắn nhất giữa mọi cặp đỉnh', c: 'graph-algorithms', cov: ['ga-all-pairs-shortest-paths'],
    p: [
      'Floyd–Warshall là quy hoạch động theo tập đỉnh trung gian cho phép dùng, O(V³) và đơn giản. Johnson tái gán trọng số bằng thế năng từ Bellman–Ford để loại trọng số âm rồi chạy Dijkstra từ mỗi đỉnh, tốt hơn trên đồ thị thưa.',
      'Giới hạn cần nhớ: Floyd–Warshall dùng ma trận V×V nên tốn V² bộ nhớ, và cả hai thuật toán đều phải xử lý chu trình âm (phát hiện được bằng phần tử đường chéo âm hoặc bằng bước Bellman–Ford), vì khi đó khoảng cách ngắn nhất không xác định.',
    ] },
  { id: 'n-cay-khung-nho-nhat', t: 'Cây khung nhỏ nhất', c: 'graph-algorithms', cov: ['ga-minimum-spanning-trees'],
    p: [
      'Tính chất lát cắt nói cạnh nhẹ nhất cắt hai phần luôn thuộc một cây khung nhỏ nhất; tính chất chu trình nói cạnh nặng nhất trên chu trình có thể bỏ. Trọng số hòa làm cây khung không duy nhất nhưng tổng trọng số vẫn xác định.',
      'Kruskal sắp xếp cạnh và dùng DSU, Prim lớn dần một cây bằng hàng đợi ưu tiên, Borůvka gộp song song các thành phần; cả ba đúng nhờ cùng hai tính chất.',
    ] },
  { id: 'n-luong-ghep-cap', t: 'Luồng cực đại, lát cắt cực tiểu và cặp ghép', c: 'graph-algorithms', cov: ['ga-flows-cuts-matching'],
    p: [
      'Luồng khả thi tuân theo dung lượng cạnh và bảo toàn tại đỉnh trung gian; mạng thặng dư cho biết còn đẩy thêm được bao nhiêu và có thể hoàn lại cạnh nào. Đường tăng luồng cùng định lý luồng cực đại bằng lát cắt cực tiểu bảo đảm tính tối ưu, còn thời gian phụ thuộc cách chọn đường tăng.',
      'Cặp ghép cực đại trong đồ thị hai phía quy về luồng, và tính nguyên của luồng bảo đảm lời giải là cặp ghép thật.',
    ] },

  // ── Thuật toán nâng cao
  { id: 'n-xu-ly-chuoi', t: 'Thuật toán xử lý chuỗi', c: 'advanced-algorithms', cov: ['aa-string-algorithms'],
    p: [
      'Hàm tiền tố (KMP) và Z-function tận dụng thông tin đã khớp để không so lại từ đầu, đạt thời gian tuyến tính cho khớp một mẫu. Băm đa thức (Rabin–Karp) so sánh bằng giá trị băm và phải kiểm tra lại vì có va chạm; Aho–Corasick khớp nhiều mẫu cùng lúc bằng trie với liên kết thất bại.',
      'Đây là các nội dung mở rộng: chúng chỉ cần khi gặp bài toán xử lý văn bản lớn, và cần phân biệt khớp chính xác (các thuật toán này) với khớp gần đúng, vốn dùng quy hoạch động.',
    ] },
  { id: 'n-truy-van-doan', t: 'Cấu trúc dữ liệu truy vấn trên đoạn', c: 'advanced-algorithms', cov: ['aa-range-query-structures'],
    p: [
      'Tổng tiền tố và bảng thưa trả lời truy vấn trên dữ liệu tĩnh; Fenwick và segment tree xử lý cả cập nhật nhờ phân rã chỉ số nhị phân và phép gộp có tính kết hợp. Cập nhật lười hoãn đẩy thay đổi xuống con, đòi hỏi các nhãn hợp thành được đúng thứ tự.',
      'Lựa chọn cấu trúc phụ thuộc loại truy vấn: tổng tiền tố chỉ cho phép đảo được phép toán, bảng thưa cần phép toán lũy đẳng như min hoặc max, còn segment tree tổng quát nhất với chi phí O(log n) mỗi thao tác. Đây là nội dung mở rộng dành cho bài toán truy vấn nhiều.',
    ] },
  { id: 'n-ngau-nhien-xap-xi', t: 'Thuật toán ngẫu nhiên và xấp xỉ', c: 'advanced-algorithms', cov: ['aa-randomized-approximation'],
    p: [
      'Las Vegas luôn đúng nhưng thời gian ngẫu nhiên, Monte Carlo nhanh nhưng đúng với xác suất, và lặp lại khuếch đại độ tin cậy. Xấp xỉ có cận bảo đảm (phủ đỉnh, phủ tập, TSP metric qua cây khung) cho lời giải trong hệ số cố định của tối ưu khi tối ưu chính xác quá khó.',
      'Lũy thừa modulo và kiểm tra nguyên tố ngẫu nhiên là ví dụ thực tế của thuật toán xác suất.',
    ] },
  { id: 'n-hinh-hoc-tinh-toan', t: 'Hình học tính toán nhập môn', c: 'advanced-algorithms', cov: ['aa-computational-geometry-intro'],
    p: [
      'Phép định hướng (dấu của tích có hướng) quyết định rẽ trái hay phải và là nền cho mọi thuật toán; độ tin cậy số học quan trọng vì sai số dấu dẫn tới kết luận hình học sai. Giao hai đoạn có nhiều trường hợp suy biến cần xét, và bao lồi dựng bằng quét với chuỗi đơn điệu.',
    ] },

  // ── Ngôn ngữ hình thức và tính tính toán được
  { id: 'n-chinh-quy-otomat', t: 'Ngôn ngữ chính quy và otomat hữu hạn', c: 'formal-languages-computability', cov: ['flc-regular-languages-automata'],
    p: [
      'Ngôn ngữ là tập chuỗi trên một bảng chữ cái, với phép hợp, ghép nối và bao đóng sao. DFA và NFA nhận cùng lớp ngôn ngữ, chuyển NFA sang DFA bằng phép dựng tập con có thể làm số trạng thái tăng mũ.',
      'Biểu thức chính quy tương đương otomat, lớp ngôn ngữ đóng với nhiều phép toán, và DFA có dạng tối thiểu duy nhất. Bổ đề bơm là công cụ chứng minh một ngôn ngữ không chính quy, nhưng nó chỉ là điều kiện cần.',
    ] },
  { id: 'n-phi-ngu-canh-pda', t: 'Văn phạm phi ngữ cảnh và otomat đẩy xuống', c: 'formal-languages-computability', cov: ['flc-context-free-grammars-pda'],
    p: [
      'Văn phạm phi ngữ cảnh sinh chuỗi bằng luật thay thế; cây dẫn xuất cho cấu trúc, và một văn phạm nhập nhằng khi một chuỗi có hai cây. Dạng chuẩn Chomsky cho phép phân tích CYK theo quy hoạch động.',
      'Otomat đẩy xuống (PDA) thêm một ngăn xếp và tương đương văn phạm phi ngữ cảnh; nó đếm được một thứ nhưng không so khớp được hai, nên có ngôn ngữ không phi ngữ cảnh.',
    ] },
  { id: 'n-may-turing', t: 'Máy Turing và luận đề Church–Turing', c: 'formal-languages-computability', cov: ['flc-turing-machines-church-turing'],
    p: [
      'Máy Turing có băng, đầu đọc và cấu hình mô tả toàn bộ trạng thái tính toán; một chương trình có thể mã hóa thành dữ liệu cho máy khác chạy. Cần phân biệt nhận biết (có thể chạy mãi khi từ chối) với quyết định (luôn dừng) và ba khả năng của một lần chạy: chấp nhận, từ chối, không dừng.',
      'Các biến thể (nhiều băng, không đơn định) tương đương về khả năng, và luận đề Church–Turing là phát biểu tương ứng giữa khái niệm tính toán trực giác và máy Turing, không phải định lý.',
    ] },
  { id: 'n-bat-kha-quyet', t: 'Bài toán dừng và tính bất khả quyết', c: 'formal-languages-computability', cov: ['flc-undecidability-reductions'],
    p: [
      'Chương trình đếm được còn bài toán thì không, nên có bài toán không giải được; chứng minh đường chéo cho thấy bài toán dừng không quyết định được. Quy dẫn ánh xạ chuyển tính bất khả quyết sang bài toán khác, và chiều quy dẫn quyết định kết luận (quy dẫn từ bài toán đã khó sang bài toán mới).',
      'Định lý Rice nói mọi thuộc tính ngữ nghĩa không tầm thường của chương trình đều bất khả quyết, nhưng không áp dụng cho thuộc tính cú pháp.',
    ] },

  // ── Độ phức tạp tính toán
  { id: 'n-p-np', t: 'Mã hóa đầu vào, lớp P và NP', c: 'computational-complexity', cov: ['cc-encoding-time-classes-p-np'],
    p: [
      'Thời gian tính được đo theo độ dài mã hóa đầu vào theo bit, nên một thuật toán chạy theo giá trị số có thể là mũ theo độ dài. P là lớp bài toán quyết định giải được trong thời gian đa thức; NP là lớp mà đáp án "có" có chứng cứ kiểm tra được trong thời gian đa thức.',
      'Phân biệt bài toán quyết định với bài toán tìm kiếm, và NP với coNP; P=NP vẫn là câu hỏi mở, và NP không có nghĩa là "không đa thức".',
    ] },
  { id: 'n-np-day-du-cook', t: 'Quy dẫn đa thức, NP-đầy đủ và Cook–Levin', c: 'computational-complexity', cov: ['cc-polynomial-reductions-cook-levin'],
    p: [
      'Quy dẫn nhiều-một thời gian đa thức biến đầu vào bài toán A thành đầu vào bài toán B giữ nguyên đáp án; B là NP-khó nếu mọi bài toán NP quy dẫn về B, NP-đầy đủ nếu thêm B thuộc NP. Định lý Cook–Levin chứng minh SAT NP-đầy đủ bằng bảng tính toán cục bộ của máy.',
      'Mạch Boolean với biến phụ chuyển được sang 3-SAT, mở đường để quy dẫn tới các bài toán khác.',
    ] },
  { id: 'n-np-day-du-kinh-dien', t: 'Các bài toán NP-đầy đủ kinh điển', c: 'computational-complexity', cov: ['cc-classic-np-complete-problems'],
    p: [
      'Independent Set, Clique và Vertex Cover quy dẫn qua lại nhờ phần bù; Hamilton, TSP và tô màu cho thấy cách mã hóa ràng buộc bằng gadget. Subset Sum và ba lô là NP-đầy đủ nhưng có thuật toán giả đa thức, vì độ khó phụ thuộc cách mã hóa số.',
      'Sai lầm thường gặp là quy dẫn ngược chiều, hoặc quy dẫn không đa thức, hoặc chỉ chứng minh trên một lớp đầu vào hẹp.',
    ] },
  { id: 'n-khong-gian-doi-pho', t: 'Độ phức tạp không gian và cách đối phó bài toán khó', c: 'computational-complexity', cov: ['cc-space-complexity-coping-strategies'],
    p: [
      'Không gian làm việc tách khỏi băng đầu vào cho các lớp L và PSPACE; định lý Savitch cho NPSPACE=PSPACE và TQBF là bài toán PSPACE-đầy đủ điển hình.',
      'Phần mở rộng: khi gặp bài toán NP-khó thực tế, có thể dùng trường hợp đặc biệt, thuật toán tham số hóa hoặc bộ giải SAT/ILP thay vì tìm thuật toán đa thức tổng quát.',
    ] },

  // ── Nền tảng ngôn ngữ lập trình
  { id: 'n-cu-phap-ast', t: 'Cú pháp, cây cú pháp trừu tượng và thứ tự đánh giá', c: 'programming-languages-foundations', cov: ['plf-syntax-ast-evaluation'],
    p: [
      'Mã nguồn được tách thành token, phân tích theo văn phạm thành cây cú pháp trừu tượng (AST) bỏ chi tiết bề mặt. Biểu thức cho giá trị còn câu lệnh gây tác dụng; quy tắc đánh giá gán nghĩa cho từng nút của cây.',
      'Thứ tự đánh giá có thể là nhiệt thành (đối số tính trước), trì hoãn (tính khi cần), và đoản mạch của toán tử logic là trường hợp đặc biệt ảnh hưởng tới nghĩa chương trình.',
    ] },
  { id: 'n-moi-truong-closure', t: 'Môi trường, tầm vực và closure', c: 'programming-languages-foundations', cov: ['plf-environments-scope-closures'],
    p: [
      'Môi trường là bảng gán tên cho giá trị hoặc vị trí lưu; khung môi trường lồng nhau và tên trong có thể che tên ngoài. Tầm vực tĩnh tra tên theo cấu trúc văn bản, tầm vực động theo chuỗi lời gọi lúc chạy, và các ngôn ngữ hiện đại chủ yếu dùng tĩnh.',
      'Closure gói một hàm cùng môi trường nơi nó được tạo, cho phép hàm bậc cao và duy trì trạng thái riêng.',
    ] },
  { id: 'n-trang-thai-he-kieu', t: 'Trạng thái khả biến và hệ thống kiểu', c: 'programming-languages-foundations', cov: ['plf-state-mutation-type-systems'],
    p: [
      'Alias là nhiều tên chỉ cùng một đối tượng nên thay đổi qua tên này lộ ra ở tên kia; dữ liệu bất biến loại bỏ lớp lỗi đó. Kiểm tra kiểu tĩnh bắt lỗi trước khi chạy, kiểu động kiểm tra khi chạy, và suy luận kiểu giảm chú thích.',
      'An toàn kiểu được phát biểu bằng tiến triển (chương trình đúng kiểu không bị kẹt) và bảo toàn (đúng kiểu giữ qua mỗi bước). Phần mở rộng: đa hình tham số và đa hình đặc biệt, cùng giới hạn khi so sánh ngôn ngữ.',
    ] },
  { id: 'n-thong-dich-gc', t: 'Bộ thông dịch, kiến trúc thực thi và thu gom rác', c: 'programming-languages-foundations', cov: ['plf-interpreters-runtime-models'],
    p: [
      'Bộ thông dịch duyệt cây theo vòng eval–apply, và cách biểu diễn giá trị (số, hàm, closure) ảnh hưởng tới cài đặt. Luồng điều khiển (ngoại lệ, tiếp diễn) và các kiến trúc thực thi như thông dịch cây, bytecode, biên dịch có đánh đổi khác nhau.',
      'Quản lý bộ nhớ tự động có đếm tham chiếu (thất bại với vòng tham chiếu) và truy vết từ tập gốc (xử lý được vòng nhưng cần tạm dừng hoặc chạy đồng thời).',
    ] },
];
