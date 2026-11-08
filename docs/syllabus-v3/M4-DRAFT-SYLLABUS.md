# M4 — Bản biên soạn đang kiểm tra

Hiện có 14/14 môn. Đây là bản nháp, chưa nghiệm thu toàn bộ nội dung.

## CS-15 — Cấu trúc dữ liệu

Môn học đặt câu hỏi một tập dữ liệu cần được tổ chức như thế nào để các thao tác thường dùng có chi phí phù hợp. Kiểu dữ liệu trừu tượng mô tả ý nghĩa của thao tác, còn cấu trúc dữ liệu quy định cách lưu thông tin và duy trì tính đúng của biểu diễn. Từ khác biệt này, môn học phát triển mảng động, danh sách liên kết, ngăn xếp, hàng đợi, bảng băm, cây tìm kiếm, đống, cây tiền tố và tập hợp rời rạc. Mỗi cấu trúc được gắn với bất biến, cơ chế cập nhật và mô hình chi phí, bao gồm bộ nhớ phụ và khả năng truy cập cục bộ. Các nhận định về thời gian được tách thành trường hợp xấu nhất, kỳ vọng và khấu hao; một thao tác nhanh trung bình không được hiểu thành bảo đảm cho mọi lần gọi. Kiến thức con trỏ, thời gian sống, đóng gói và quy nạp được dùng để giải thích vì sao cấu trúc hoạt động, trước khi so sánh với container thư viện.

Điều kiện đầu vào: cpp-memory-model (required): Cần nắm vững bộ nhớ liên tiếp vs cấp phát nút qua con trỏ, thời gian sống và độ cục bộ bộ nhớ.; object-oriented-programming (required): Cần nắm đóng gói bất biến của lớp và khuôn mẫu cơ bản để hiểu thiết kế container.; discrete-math (required): Cần quy nạp toán học, số học modulo, cây, đồ thị và ký hiệu tiệm cận.

### Kiểu dữ liệu trừu tượng (ADT), mảng động và danh sách liên kết

Một dãy có thứ tự cung cấp truy cập theo vị trí, trong khi tập hợp quan tâm thành viên và tính duy nhất. Chương này phân biệt các đặc tả đó với biểu diễn mảng hoặc nút liên kết, rồi dùng chi phí dịch phần tử, cấp phát và tìm nút để giải thích các đánh đổi. Mảng động là ví dụ đầu tiên cho phân tích khấu hao: chi phí lớn của một lần mở rộng được xét trong toàn bộ chuỗi thao tác, không bị che bằng một nhận xét trung bình không rõ giả thiết.

#### Đặc tả ADT, tiền điều kiện và bất biến biểu diễn — core

Một ADT là tập giá trị cùng các thao tác được xác định theo ý nghĩa quan sát được, chẳng hạn get(i) trả phần tử tại vị trí i của một dãy. Tiền điều kiện giới hạn lời gọi hợp lệ; hậu điều kiện mô tả kết quả và thay đổi trạng thái. Bất biến biểu diễn nối bộ nhớ cụ thể với giá trị trừu tượng, ví dụ kích thước không vượt sức chứa. Cùng giao diện dãy có thể dùng mảng hoặc liên kết nhưng không có cùng bảng chi phí.

Nguồn: [open-data-structures](https://opendatastructures.org/) — §1.2 Interfaces; §1.3 Mathematical Background

#### Mảng động và chi phí khấu hao — core

Mảng động giữ vùng nhớ liên tiếp với số phần tử đang dùng và sức chứa riêng biệt. Khi đầy, cơ chế tăng sức chứa theo một hệ số lớn hơn một cấp vùng mới rồi chuyển phần tử. Với chi phí chuyển mỗi phần tử hằng số, tổng số lần chuyển qua n phép thêm cuối là O(n), nên chi phí khấu hao mỗi phép là O(1); một lần mở rộng vẫn có thể tốn Θ(n). Chèn giữa dãy còn phải dịch phần tử, không hưởng cùng bảo đảm.

Nguồn: [open-data-structures](https://opendatastructures.org/) — §2.1 ArrayStack: Fast Stack Operations Using an Array

#### Danh sách liên kết và tính cục bộ bộ nhớ — core

Danh sách đơn lưu giá trị và liên kết kế tiếp; danh sách đôi bổ sung liên kết trước để tháo hoặc chèn một nút đã biết trong O(1). Tìm nút theo chỉ số vẫn tốn O(n), nên không thể suy ra chèn ở vị trí bất kỳ luôn hằng số. Nút lính canh đơn giản hóa biên đầu cuối nhưng không thay đổi độ phức tạp. So với mảng, liên kết tốn bộ nhớ con trỏ và thường giảm tính cục bộ cache; đổi lại tránh dịch toàn bộ đuôi dãy.

Nguồn: [open-data-structures](https://opendatastructures.org/) — §3.1 SLList; §3.2 DLList

### Ngăn xếp, hàng đợi, hàng đợi hai đầu và mảng vòng (Circular Buffer)

Các cấu trúc trong chương này hạn chế vị trí truy cập để biểu diễn chính sách xử lý. Ngăn xếp phục vụ phần tử vào sau trước, hàng đợi phục vụ phần tử vào trước trước, còn deque cho phép hai đầu. Việc chọn mảng hay danh sách được giải thích từ các phép toán cần hỗ trợ. Các trường hợp rỗng, đầy và vòng qua cuối bộ đệm là một phần của mô hình đúng, đồng thời kết nối đến khung lời gọi và duyệt theo mức.

#### Ngăn xếp và lịch sử chưa hoàn tất — core

Ngăn xếp hỗ trợ push, pop và xem đỉnh theo chính sách LIFO, nghĩa là phần tử thêm sau được lấy ra trước. Chính sách này phù hợp với ngoặc lồng nhau và công việc phải quay về sau một lời gọi con. Khung lời gọi lưu thông tin cần để tiếp tục hàm, nhưng ngăn xếp ADT và cách một hệ chạy lưu khung không phải cùng một đối tượng. Danh sách chèn đầu cho O(1); mảng động cho thêm cuối O(1) khấu hao.

Nguồn: [open-data-structures](https://opendatastructures.org/) — §1.2.1 Queue, Stack, and Deque Interfaces; §2.1 ArrayStack; §3.1 SLList

#### Hàng đợi và mảng vòng — core

Hàng đợi dùng enqueue ở cuối và dequeue ở đầu theo FIFO. Với mảng vòng, chỉ số vật lý của phần tử thứ i được tính từ vị trí đầu và sức chứa theo modulo, nên bỏ đầu chỉ cần dịch chỉ số thay vì dịch dữ liệu. Cách phân biệt đầy với rỗng phải thống nhất, chẳng hạn giữ biến số phần tử. Khi mở rộng, thứ tự logic được sao chép lại từ đầu hàng đợi, kể cả khi dữ liệu đang chia ở hai đầu vùng nhớ.

Nguồn: [open-data-structures](https://opendatastructures.org/) — §2.2 ArrayQueue: An Array-Based Queue

#### Deque và đánh đổi khi thao tác hai đầu — core

Deque cho phép thêm và bỏ ở cả đầu lẫn cuối, khác hàng đợi ưu tiên vì không chọn phần tử theo khóa. Mảng vòng hỗ trợ các phép hai đầu nhanh nhưng việc mở rộng vẫn có chi phí đột biến; danh sách đôi hỗ trợ cập nhật đầu cuối trực tiếp nếu giữ đủ liên kết. Deque còn có thể được xây từ hai ngăn xếp với quy tắc cân bằng. Phân tích phải tính cả các lần chuyển phần tử giữa hai phía, thay vì chỉ đếm thao tác thông thường.

Nguồn: [open-data-structures](https://opendatastructures.org/) — §2.3 ArrayDeque; §2.4 DualArrayDeque; §3.2 DLList

### Bảng băm, hàm băm và chiến lược giải quyết va chạm

Từ điển động ánh xạ khóa đến giá trị và cần tìm, thêm, xóa theo khóa. Băm đưa miền khóa lớn về số ô hữu hạn nên va chạm là điều phải quản lý, không phải dấu hiệu một hàm băm luôn sai. Chương này giải thích vai trò của phép so sánh bằng, hệ số tải và chiến lược xử lý va chạm. Các cận kỳ vọng được gắn với giả thiết về hàm băm và dữ liệu, tách khỏi chi phí khấu hao của việc đổi kích thước bảng.

#### Khóa, hàm băm và giả thiết phân bố — core

Hàm băm chuyển một khóa thành chỉ số hoặc mã dùng để chọn ô; hai khóa bằng nhau phải cho kết quả băm tương thích. Khóa khác nhau vẫn có thể va chạm, nên tìm kiếm cần kiểm tra khóa thực. Chương trình không được âm thầm thay đổi phần khóa ảnh hưởng đến băm sau khi chèn. Phân tích băm ngẫu nhiên lấy kỳ vọng trên lựa chọn hàm hoặc nguồn ngẫu nhiên đã nêu, không đồng nhất với giả định mọi tập dữ liệu thực đều phân bố đều.

Nguồn: [open-data-structures](https://opendatastructures.org/) — §5.1 ChainedHashTable; §5.3 Hash Codes

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 4: Hashing

#### Nối chuỗi và địa chỉ mở — core

Nối chuỗi lưu nhiều phần tử trong cấu trúc phụ của cùng ô; dưới giả thiết băm đều, tìm kiếm có kỳ vọng O(1+α), với α là số phần tử chia số ô. Địa chỉ mở giữ phần tử ngay trong bảng và thăm dò khi ô bận. Với thăm dò tuyến tính, cụm ô liên tiếp làm chi phí tăng khi bảng gần đầy. Xóa cần dấu đã xóa hoặc cơ chế sửa cụm để không cắt đứt đường tìm những khóa chèn sau.

Nguồn: [open-data-structures](https://opendatastructures.org/) — §5.1 ChainedHashTable; §5.2 LinearHashTable

#### Đổi kích thước, khấu hao và trường hợp xấu — core

Khi tải vượt ngưỡng, bảng cấp kích thước mới rồi đưa các khóa sang vị trí tương ứng với bảng mới. Một lần tái băm tốn tuyến tính theo số phần tử; các ngưỡng tăng giảm cách nhau đủ xa giúp tránh dao động liên tục. Kỳ vọng O(1) khấu hao cần cả giả thiết về băm và chính sách kích thước. Nếu nhiều khóa va chạm có chủ ý, một phép tra cứu vẫn có thể tuyến tính; yêu cầu bảo đảm thời gian khác có thể dẫn đến cây tìm kiếm.

Nguồn: [open-data-structures](https://opendatastructures.org/) — §5.1–5.2: resize and performance analysis

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 4: Hashing

### Cây nhị phân, cây tìm kiếm nhị phân (BST) và cơ chế tự cân bằng (AVL)

Cây tìm kiếm nhị phân khai thác quan hệ thứ tự để thu hẹp miền tìm kiếm sau mỗi lần so sánh. Tốc độ phụ thuộc chiều cao cây, vì thế dữ liệu đã sắp có thể làm cây thường suy biến thành một chuỗi. Chương này nối bất biến thứ tự với phép duyệt, cập nhật và xoay, rồi phát triển AVL như một cơ chế duy trì chiều cao logarit. Red-black và B-tree được đặt trong bức tranh thiết kế để phân biệt cân bằng chiều cao với tối ưu truy cập theo khối.

#### Thứ tự BST, duyệt và phép xóa — core

BST quy định khóa ở cây con trái nhỏ hơn khóa nút và cây con phải lớn hơn theo một chính sách xử lý trùng được nêu rõ. Duyệt trung thứ tự vì thế cho dãy khóa đã sắp. Tìm, chèn và xóa đi qua O(h) nút, với h là chiều cao. Xóa nút hai con dùng phần tử kế tiếp hoặc trước theo thứ tự rồi xử lý nút thay thế có ít con hơn. Các liên kết cha, gốc và kích thước phụ phải được duy trì cùng bất biến khóa.

Nguồn: [open-data-structures](https://opendatastructures.org/) — §6.1 BinaryTree; §6.2 BinarySearchTree

#### Cân bằng AVL và phép xoay — core

AVL yêu cầu chênh lệch chiều cao hai cây con tại mỗi nút không quá một. Từ số nút tối thiểu theo chiều cao có thể suy ra h=O(log n). Phép xoay thay đổi cấu trúc cha con cục bộ nhưng bảo toàn dãy trung thứ tự, nên giữ tính tìm kiếm. Mất cân bằng dạng trái trái hoặc phải phải được sửa bằng xoay đơn; trái phải hoặc phải trái cần xoay kép. Sau cập nhật, chiều cao và metadata phải được tính lại theo đúng thứ tự phụ thuộc.

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 7: AVL Trees

#### Red-black và B-tree trong thiết kế cây — core

Red-black dùng các ràng buộc màu để giới hạn độ dài đường đi và đạt chiều cao O(log n) với quy tắc cân bằng khác AVL. B-tree cho một nút chứa nhiều khóa và nhiều nhánh, giữ các lá ở cùng độ sâu; số khóa mỗi nút được ràng buộc để cây không quá thưa. Khi nút tương ứng một khối lưu trữ, giảm chiều cao giúp giảm số lần đọc khối. Đây là mức nguyên lý so sánh, chưa yêu cầu thuộc toàn bộ các trường hợp sửa sau xóa của từng họ cây.

Nguồn: [open-data-structures](https://opendatastructures.org/) — Ch. 9 Red-Black Trees; §14.1 The Block Store; §14.2 B-Trees

### Đống nhị phân (Binary Heap) và hàng đợi ưu tiên

Hàng đợi ưu tiên chọn phần tử theo độ ưu tiên, nên khác chính sách đến trước của FIFO. Đống nhị phân phối hợp hai bất biến: hình dạng cây hoàn chỉnh và thứ tự giữa cha với con. Hai bất biến này cho phép biểu diễn cây trong mảng mà vẫn hỗ trợ cập nhật logarit. Chương này giải thích sự khác nhau giữa xây đống từ dưới lên và chèn từng phần tử, cùng các giới hạn khi cần tìm khóa bất kỳ hoặc thay đổi ưu tiên của một phần tử đã nằm trong đống.

#### Biểu diễn đống và khôi phục bất biến — core

Min-heap yêu cầu khóa cha không lớn hơn khóa các con, nhưng không sắp toàn bộ anh em hoặc hai cây con. Với chỉ số mảng bắt đầu từ không, các con của i nằm tại 2i+1 và 2i+2 nếu tồn tại. Thêm cuối rồi đẩy lên sửa vi phạm trên đường về gốc; lấy cực tiểu thay gốc bằng phần tử cuối rồi đẩy xuống. Chiều cao cây hoàn chỉnh là O(log n), nên các phép sửa chỉ đi qua số mức logarit.

Nguồn: [open-data-structures](https://opendatastructures.org/) — §10.1.1 Adding and Removing Elements

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 8: Binary Heaps

#### Tạo đống tuyến tính và giao diện ưu tiên — core

Tạo đống từ dưới lên gọi đẩy xuống trên các nút trong từ gần lá về gốc. Phần lớn nút có chiều cao nhỏ, nên tổng chi phí là O(n), dù một lần đẩy xuống có thể O(log n). Lặp n phép chèn chỉ cho cận O(n log n). Hàng đợi ưu tiên hỗ trợ xem cực tiểu O(1), thêm và lấy cực tiểu O(log n); tìm phần tử tùy ý vẫn có thể O(n). Giảm khóa nhanh còn cần biết vị trí phần tử và cập nhật bảng vị trí sau các lần đổi chỗ.

Nguồn: [open-data-structures](https://opendatastructures.org/) — §10.1.2 Summary; §10.1.3 Heap-Sort

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 8: Binary Heaps

### Cây tiền tố (Trie), tập hợp rời rạc (DSU) và biểu diễn đồ thị

Ba họ cấu trúc cuối cùng biểu diễn ba loại thông tin khác nhau: tiền tố chuỗi, phân hoạch tập hợp và quan hệ giữa các đỉnh. Mục tiêu là hiểu cách biểu diễn quyết định những câu hỏi được trả lời nhanh. Trie khai thác độ dài khóa, DSU khai thác việc các thành phần chỉ được gộp, còn danh sách kề khai thác độ thưa của đồ thị. Những giả thiết này được giữ rõ để không dùng một cấu trúc cho thao tác mà nó không hỗ trợ.

#### Trie ký tự và đánh dấu kết thúc khóa — core

Trie lưu mỗi cạnh bằng một ký tự và mỗi đường từ gốc bằng một tiền tố. Một nút đánh dấu kết thúc từ để phân biệt khóa hoàn chỉnh với tiền tố của khóa dài hơn, chẳng hạn an và anh. Tìm hoặc chèn chuỗi dài L cần O(L) bước nếu chọn cạnh theo ký tự trong O(1); dùng cây ánh xạ cho cạnh có thể thêm chi phí logarit. Bộ nhớ phụ thuộc tổng số tiền tố khác nhau và cách lưu các nhánh, không chỉ số từ.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/string/aho_corasick.html — Construction of the trie

#### DSU: đại diện, gộp theo hạng và nén đường đi — core

DSU duy trì một phân hoạch bằng rừng cây cha; find trả đại diện của phần tử và union hợp nhất hai lớp. Gộp theo kích thước hoặc hạng tránh nối tùy tiện thành chuỗi dài, còn nén đường đi làm các lần tìm sau ngắn hơn. Kết hợp hai kỹ thuật cho chi phí khấu hao O(α(n)) trên chuỗi thao tác chuẩn, với α là hàm Ackermann ngược, không phải bảo đảm O(1) xấu nhất từng lần. DSU cơ bản không hỗ trợ tách một lớp hay xóa cạnh tùy ý.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/data_structures/disjoint_set_union.html — Path compression; Union by size/rank; Time complexity

#### Ma trận kề, danh sách kề và danh sách cạnh — core

Ma trận kề dùng Θ(V²) ô để kiểm tra cạnh trực tiếp, phù hợp hơn khi đồ thị dày hoặc cần phép toán ma trận. Danh sách kề dùng Θ(V+E) chỗ cho đồ thị thưa và duyệt hàng xóm hiệu quả; tìm một cạnh cụ thể còn phụ thuộc cấu trúc chứa hàng xóm. Danh sách cạnh thích hợp với thuật toán xử lý lần lượt mọi cạnh. Đồ thị vô hướng thường lưu mỗi cạnh ở hai danh sách, còn đa cạnh và tự khuyên cần quy ước biểu diễn rõ.

Nguồn: [open-data-structures](https://opendatastructures.org/) — §12.1 AdjacencyMatrix; §12.2 AdjacencyLists

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 5 Basic Graph Algorithms: representations

## CS-16 — Phân tích và thiết kế thuật toán

Thiết kế thuật toán là quá trình biến một đặc tả thành phương pháp luôn cho kết quả đúng trong các giả thiết đã nêu, rồi giải thích tài nguyên nó cần. Môn học phát triển mô hình chi phí, bất biến và quy nạp trước khi nghiên cứu tìm kiếm, sắp xếp, chia để trị, quy hoạch động, tham lam và tìm kiếm tổ hợp. Các kỹ thuật được đối chiếu bằng cấu trúc bài toán: phụ thuộc giữa các trạng thái, khả năng trao đổi lựa chọn, hoặc thông tin có thể dùng để cắt nhánh. Cận dưới giúp nhận ra giới hạn của một mô hình, còn phân tích đầu vào cho thấy một thuật toán tuyến tính theo giá trị số có thể vẫn rất tốn kém theo số bit. Mục tiêu là hiểu lý do chọn phương pháp và cách kiểm tra lập luận, thay vì nhận diện từ khóa để áp dụng công thức. Nội dung FFT, matroid và truy hồi tổng quát được đánh dấu mở rộng để giữ đường học cốt lõi liền mạch.

Điều kiện đầu vào: data-structures (required): Cần nắm vững mảng, bảng băm, cây, đống nhị phân và phân tích khấu hao cơ bản.; discrete-math (required): Cần quy nạp toán học, bất biến vòng lặp, tổng tiệm cận và hệ thức đệ quy.; probability (recommended): Cần kỳ vọng và biến ngẫu nhiên chỉ thị để phân tích trường hợp trung bình của Quicksort ngẫu nhiên và bảng băm.

### Mô hình chi phí, tính đúng đắn và truy hồi chia để trị (Master Theorem)

Phân tích thuật toán bắt đầu bằng việc xác định đầu vào, kết quả cần trả và những phép toán được tính chi phí. Chương này kết nối đặc tả với chứng minh đúng, sau đó dùng tổng, truy hồi và ký hiệu tiệm cận để mô tả tài nguyên. Mô hình word-RAM là một giả thiết về kích thước từ máy và các phép cơ bản; nó không cho phép coi số nguyên dài tùy ý có chi phí hằng số. Các định lý truy hồi được dùng trong phạm vi điều kiện của chúng.

#### Kích thước đầu vào và các loại cận — core

Kích thước n có thể là số phần tử, số đỉnh cạnh hoặc số bit của biểu diễn, nên phải được xác định trước khi nói O(n). Word-RAM tính một phép cơ bản trên một số từ máy là hằng số, với từ đủ chứa địa chỉ cần dùng; xử lý số nguyên nhiều từ cần tính riêng. Cận xấu nhất lấy lớn nhất trên đầu vào cùng kích thước. Cận kỳ vọng phải nêu phân bố hoặc nguồn ngẫu nhiên; cận khấu hao xét tổng chuỗi thao tác, không cần giả thiết đầu vào ngẫu nhiên.

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 1: Algorithms and Computation

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 0 Introduction: analysis

#### Bất biến, quy nạp và tính dừng — core

Chứng minh vòng lặp tách khởi tạo, bảo toàn và kết luận khi thoát, đồng thời cần một đại lượng giảm hữu hạn để bảo đảm dừng. Với đệ quy, giả thiết quy nạp chỉ áp dụng cho bài toán con nhỏ hơn theo một thứ tự hợp lệ. Tính đúng bộ phận khẳng định kết quả đúng nếu kết thúc; tính đúng toàn phần còn yêu cầu kết thúc. Chọn bất biến phải phản ánh ý nghĩa dữ liệu đang lưu, chẳng hạn đoạn đã sắp hay miền còn có thể chứa nghiệm.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 0 Introduction; Ch. 1 Recursion

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 3: Sets and Sorting

#### Cây đệ quy, phương pháp thế và Master — core

Với T(n)=aT(n/b)+f(n), a≥1 và b>1 là hằng số, cây đệ quy cộng công việc theo mức rồi xét chi phí lá. Master so sánh f(n) với n^(log_b a); các trường hợp lệch đa thức cần khoảng cách lũy thừa, và trường hợp f lớn cần điều kiện đều a f(n/b)≤c f(n) với c<1. Trường hợp bằng nhau sinh thêm nhân tử logarit trong phiên bản cơ bản. Phương pháp thế dùng quy nạp để xác nhận cận và các điều kiện cơ sở, thay vì đoán từ vài giá trị nhỏ.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Appendix II: Solving Recurrences — Guess and Confirm; Recursion Trees; Master Theorems

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 3: Sets and Sorting

#### Truy hồi không đều và giới hạn công thức — extension

Các lời gọi kích thước khác nhau như n/3 và 2n/3 không khớp trực tiếp mẫu Master đều. Cây đệ quy hoặc quy nạp vẫn cho phép phân tích khi đo đúng công việc từng mức và độ sâu các nhánh. Akra–Bazzi là hướng mở rộng cho tổng a_i T(b_i n)+g(n), với a_i>0 và 0<b_i<1 cùng các điều kiện đều thích hợp; số mũ p thỏa tổng a_i b_i^p=1. Mức học này nhận diện dạng và giả thiết, chưa coi công thức tổng quát là thay thế cho một chứng minh áp dụng hợp lệ.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Appendix II: Solving Recurrences §4 The Nuclear Bomb (Akra–Bazzi), pp. 10–11

### Tìm kiếm nhị phân, các thuật toán sắp xếp và cận dưới lý thuyết thông tin

Tìm kiếm và sắp xếp cho thấy cùng một mục tiêu có nhiều thuật toán với bảo đảm khác nhau. Chương này dùng bất biến đoạn để hiểu tìm kiếm nhị phân, phân hoạch và trộn; dùng cây quyết định để giới hạn các thuật toán chỉ so sánh. Khi khóa có cấu trúc số nguyên, thuật toán có thể khai thác thông tin ngoài so sánh nhưng phải tính miền khóa và số chữ số. Tính ổn định, bộ nhớ phụ và dữ liệu trùng lặp được xem cùng độ phức tạp thời gian.

#### Tìm kiếm nhị phân trên miền đơn điệu — core

Tìm kiếm nhị phân giữ một khoảng còn chứa ranh giới giữa hai miền của một vị từ đơn điệu. Quy ước khoảng đóng hay nửa mở quyết định cách cập nhật và điều kiện dừng; trường hợp tất cả đúng hoặc tất cả sai phải có kết quả rõ. Trên mảng đã sắp, phép so sánh tạo vị từ này. Trên không gian đáp án, mỗi phép thử có chi phí riêng, nên tổng thời gian là số lần thử nhân chi phí kiểm tra, không tự động chỉ O(log n).

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 3: Sets and Sorting

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 1 Recursion: binary search

#### Trộn, vun đống và tính ổn định — core

Merge sort sắp hai nửa rồi trộn bằng cách luôn lấy đầu nhỏ hơn; quy tắc xử lý hai khóa bằng nhau quyết định tính ổn định. Bản mảng thông thường tốn Θ(n log n) thời gian và Θ(n) bộ nhớ trộn. Heapsort tạo max-heap rồi chuyển cực đại về cuối vùng chưa sắp, đạt O(n log n) xấu nhất với O(1) bộ nhớ phụ ở bản lặp nhưng thường không ổn định. Hai thuật toán cho thấy cùng cận thời gian không đồng nghĩa cùng hành vi bộ nhớ hoặc thứ tự khóa bằng nhau.

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lectures 3, 8

Nguồn: [open-data-structures](https://opendatastructures.org/) — §11.1 Comparison-Based Sorting

#### Quicksort, phân hoạch và ngẫu nhiên hóa — core

Phân hoạch tách các phần tử quanh một chốt rồi đệ quy trên những miền còn lại. Lomuto thường đặt chốt về vị trí cuối cùng, còn Hoare trả ranh giới hai miền và không nhất thiết cố định chốt tại đó; ghép điều kiện đệ quy của hai cách có thể gây lặp vô hạn hoặc bỏ sót phần tử. Chốt ngẫu nhiên cho thời gian kỳ vọng O(n log n) với mọi đầu vào cố định, nhưng vẫn có trường hợp xấu Θ(n²). Phân hoạch ba ngả hữu ích khi nhiều khóa bằng nhau.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 1 Recursion: Quicksort

Nguồn: [open-data-structures](https://opendatastructures.org/) — §11.1.2 Quicksort

#### Cận dưới so sánh và sắp xếp theo chữ số — core

Với n khóa phân biệt, thuật toán sắp xếp dựa trên so sánh cần phân biệt n! hoán vị. Cây quyết định nhị phân vì thế có chiều cao ít nhất log₂(n!)=Ω(n log n), là cận xấu nhất trong mô hình này. Counting sort dùng O(n+k) thời gian cho khóa trong miền k giá trị; radix sort kết hợp các lượt sắp ổn định theo chữ số. Những cận tuyến tính không mâu thuẫn cận dưới vì khai thác biểu diễn khóa; số chữ số và chi phí đọc khóa vẫn phải tính.

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 5: Linear Sorting

Nguồn: [open-data-structures](https://opendatastructures.org/) — §11.1.4 Lower Bounds; §11.2 Counting Sort and Radix Sort

### Mô hình thiết kế Chia để trị (Divide and Conquer)

Chia để trị thiết kế lời giải bằng phân rã, giải các phần nhỏ và kết hợp kết quả. Mấu chốt không chỉ là gọi đệ quy mà là chọn sự phân chia giúp phần kết hợp đủ rẻ và giữ đúng thông tin cần thiết. Các ví dụ trong chương thay đổi từ số học sang chọn phần tử và hình học để chỉ ra cấu trúc chung, đồng thời phân biệt cận kỳ vọng với cận xấu nhất. FFT được giới thiệu như một sự đổi biểu diễn có ích, không như một phép biến đổi phải học thuộc công thức.

#### Karatsuba và tái sử dụng kết quả con — core

Tách hai số n chữ số thành phần cao và thấp cho phép biểu diễn tích bằng các tích nhỏ hơn. Cách trực tiếp dùng bốn tích nửa kích thước; Karatsuba dùng ba tích nhờ suy ra tích chéo từ tích của các tổng và hai tích đã biết. Truy hồi T(n)=3T(n/2)+O(n) cho Θ(n^(log₂3)) trong mô hình chi phí chữ số phù hợp. Lợi ích đến từ giảm số bài toán con, còn chi phí cộng, nhớ và độ dài kết quả không được bỏ khỏi phân tích.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 1 Recursion: Fast Multiplication

#### Chọn phần tử và cặp điểm gần nhất — core

Quickselect phân hoạch như quicksort nhưng chỉ đi vào miền chứa hạng cần tìm; với chốt ngẫu nhiên đạt thời gian kỳ vọng O(n), còn chốt xấu có thể gây Θ(n²). Trong bài toán cặp điểm gần nhất trên mặt phẳng Euclid, chia theo hoành độ cần kết hợp bằng dải gần đường chia, duy trì thứ tự tung độ và dùng lập luận đóng gói để chỉ so sánh số láng giềng hằng số. Việc sắp lại toàn bộ ở mỗi mức có thể làm mất cận O(n log n).

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 1 Recursion: Selection

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/geometry/nearest_points.html — Algorithm; Evaluation of the complexity

#### Đa thức, tích chập và ý tưởng FFT — extension

Tích hai đa thức có các hệ số là tổng các tích hệ số đầu vào, gọi là tích chập. Biểu diễn bằng giá trị tại đủ điểm biến phép nhân đa thức thành nhân từng cặp giá trị, rồi nội suy để trở lại hệ số. FFT chọn các căn đơn vị có cấu trúc đối xứng để đánh giá và nội suy trong O(n log n). Mục này cần số phức cơ bản từ khối toán, chỉ giới thiệu cơ chế và giới hạn sai số số thực; biến đổi số học modulo là một hướng chuyên sâu riêng.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Fast Fourier Transforms notes: Polynomial Multiplication; FFT

### Quy hoạch động (Dynamic Programming)

Quy hoạch động tổ chức các bài toán con có phụ thuộc chồng lặp thành một hệ trạng thái có nghĩa chính xác. Chương này đi từ định nghĩa trạng thái đến công thức chuyển, trường hợp cơ sở và thứ tự đánh giá, thay vì đoán một bảng rồi gắn công thức. Đồ thị phụ thuộc giải thích tại sao một thứ tự tính là hợp lệ. Các ví dụ còn tách giá trị tối ưu khỏi cách khôi phục nghiệm và tách số trạng thái khỏi số bước chuyển, vì đây là hai nguồn chi phí khác nhau.

#### Trạng thái đủ thông tin và đồ thị phụ thuộc — core

Một trạng thái phải tóm tắt đủ lịch sử để những lựa chọn tương lai chỉ phụ thuộc vào nó. Công thức truy hồi chia các nghiệm theo lựa chọn tiếp theo hoặc cuối cùng, rồi kết hợp giá trị các trạng thái nhỏ hơn. Nếu đồ thị phụ thuộc là DAG, có thể đánh giá theo thứ tự topo; đệ quy có nhớ thực hiện điều này theo nhu cầu. Một khóa nhớ thiếu thông tin sẽ trộn các bài toán khác nhau, nên chạy nhanh vẫn có thể cho kết quả sai.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 3: recursive structure and memoization

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 15: Dynamic Programming, Part 1

#### Dãy con, đường đi và ba lô — core

LCS dùng tiền tố hai dãy để mô tả lựa chọn ghép ký tự cuối hoặc bỏ một ký tự; bảng hai chiều làm rõ các phụ thuộc. Ba lô 0/1 dùng số món đã xét và sức chứa còn lại, phân biệt với ba lô không giới hạn. Cận O(nW) là giả đa thức khi W được mã hóa nhị phân vì độ dài đầu vào chỉ chứa log W bit. Khi nén xuống một hàng, chiều duyệt sức chứa quyết định một món có bị dùng nhiều lần hay không.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 3: Longest Common Subsequence; Subset Sum

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lectures 17–18: Sequence alignment; Knapsack

#### Đếm chi phí, nén bộ nhớ và truy vết — core

Thời gian quy hoạch động được tính bằng tổng số lựa chọn được duyệt trên mọi trạng thái, cộng chi phí biểu diễn và so sánh giá trị. Số ô đơn thuần không đủ nếu mỗi ô thử nhiều phép tách. Lưu lựa chọn tối ưu hoặc cạnh tiền nhiệm giúp khôi phục một nghiệm; hòa điểm cần quy tắc nhất quán. Nén bộ nhớ chỉ an toàn khi dữ liệu bị ghi đè không còn cần cho bước sau. Nếu vẫn cần truy vết, có thể phải lưu thêm thông tin hoặc chấp nhận tính lại.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 3 Dynamic Programming: evaluation order and reconstruction

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lectures 15–18

### Thuật toán Tham lam và kỹ thuật chứng minh tính đúng đắn

Thuật toán tham lam quyết định một lựa chọn cục bộ rồi không quay lại sửa. Khác quy hoạch động, nó không mặc nhiên so sánh mọi khả năng có thể dẫn đến tối ưu. Chương này tập trung điều kiện cho phép lựa chọn sớm mà vẫn giữ tồn tại một nghiệm tối ưu tương thích. Lập luận trao đổi và dẫn trước cung cấp hai cách chứng minh, còn phản ví dụ giúp phát hiện một tiêu chí hấp dẫn nhưng sai. Chi phí sắp và cấu trúc duy trì các ứng viên được tính cùng vòng lựa chọn.

#### Lập luận trao đổi và dẫn trước — core

Lập luận trao đổi bắt đầu từ một nghiệm tối ưu rồi thay một phần bằng lựa chọn tham lam mà không làm xấu giá trị hoặc vi phạm tính khả thi. Khi có thể lặp bước này, thuật toán dần tạo một nghiệm tối ưu. Cách chứng minh dẫn trước so sánh từng tiền tố của nghiệm tham lam với nghiệm khác theo một đại lượng phù hợp. Cả hai đều cần chỉ ra chính xác cấu trúc được bảo toàn; câu nói chọn tốt nhất hiện tại không phải lý do lựa chọn đó an toàn.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 4 Greedy Algorithms: exchange arguments

#### Lịch khoảng, mã Huffman và phản ví dụ — core

Với mục tiêu chọn nhiều khoảng không giao nhau nhất, chọn khoảng kết thúc sớm tạo chỗ lớn cho phần còn lại và có chứng minh trao đổi. Khi mỗi khoảng có trọng số, tiêu chí đó có thể thất bại và cần quy hoạch động. Huffman ghép hai tần suất nhỏ nhất để xây cây mã tiền tố có độ dài trung bình tối ưu trong mô hình mã nhị phân đã nêu. Ví dụ đổi tiền cho thấy kết luận tham lam đúng với một hệ mệnh giá không tự chuyển sang mọi hệ khác.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 4: Scheduling; Huffman Codes

#### Matroid như cấu trúc bảo đảm tham lam — extension

Matroid gồm một tập nền và họ tập độc lập đóng dưới việc lấy tập con, đồng thời thỏa tính trao đổi giữa hai tập độc lập khác kích thước. Cấu trúc này giải thích tại sao chọn phần tử theo trọng số rồi giữ tính độc lập có thể tìm một cơ sở tối ưu. Rừng cạnh của đồ thị là ví dụ nối đến Kruskal. Mục mở rộng này làm rõ tham lam có thể được bảo đảm bởi cấu trúc toán học, nhưng không gán nhãn matroid cho mọi bài toán có ràng buộc tương tự.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Matroids notes: Independence Systems; Greedy Algorithms

### Quay lui (Backtracking) và Nhánh cận (Branch and Bound)

Một số bài toán chưa có cách tránh xét nhiều khả năng. Quay lui tổ chức không gian nghiệm thành cây quyết định và chỉ mở rộng những tiền tố còn hợp lệ; nhánh cận bổ sung đánh giá tối ưu có thể đạt để loại cả một miền tìm kiếm. Chương này phân biệt loại nhánh vì vô nghiệm với loại nhánh vì không thể cải thiện nghiệm tốt nhất hiện có. Cách phục hồi trạng thái và tính an toàn của cận là điều kiện đúng, còn thứ tự duyệt chủ yếu tác động hiệu năng.

#### Cây tìm kiếm và phục hồi trạng thái — core

Mỗi nút quay lui biểu diễn một lời giải bộ phận; các cạnh là lựa chọn tiếp theo. Bất biến phải mô tả phần đã quyết định và ràng buộc còn giữ, chẳng hạn các quân hậu đã đặt không tấn công nhau. Nếu cập nhật cấu trúc dùng chung trước khi đệ quy, mọi thay đổi cần được hoàn tác khi quay về, kể cả các nhánh kết thúc sớm. Sao chép trạng thái tránh một số lỗi chia sẻ nhưng có chi phí riêng. Cận thời gian dựa trên số nút được thăm và công việc mỗi nút.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 2: N Queens; Subset Sum; Game Trees

#### Nhánh cận và tính an toàn của đánh giá — core

Trong bài toán cực tiểu, một cận dưới cho phần hoàn tất chỉ được dùng để bỏ nhánh khi nó không tốt hơn giá trị nghiệm khả thi tốt nhất đã biết. Ước lượng quá cao có thể loại nhầm nghiệm tối ưu, nên cần chứng minh cận không vượt giá trị tốt nhất thực sự của nhánh. Thứ tự tìm nhánh hứa hẹn giúp sớm có nghiệm tốt nhưng không thay thế cận đúng. Nhánh cận vẫn có thể xét số trạng thái hàm mũ trong trường hợp xấu, dù thường hữu ích trên dữ liệu thực.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 2 Backtracking: pruning; Fast Exponential Algorithms notes

## CS-17 — Thuật toán đồ thị

Môn học nghiên cứu cách thuật toán khai thác quan hệ giữa các đối tượng khi mô hình hóa bằng đỉnh và cạnh. Duyệt theo chiều rộng và chiều sâu tạo nền cho thứ tự topo, liên thông mạnh, đường đi và các chứng minh dựa trên khả đạt. Từ đó, môn học tách các bài toán tối ưu có vẻ giống nhau nhưng mang ràng buộc khác: đường đi ngắn nhất, cây khung nhỏ nhất, luồng cực đại và cặp ghép. Mỗi thuật toán đi kèm điều kiện về hướng cạnh, trọng số, chu trình và cấu trúc dữ liệu; nhờ đó người học hiểu vì sao có cạnh âm thì một phương pháp thất bại còn phương pháp khác vẫn đúng. Phân tích tính cả đỉnh không tới được, đồ thị không liên thông, đa cạnh và chi phí khôi phục nghiệm. Đường Euler được đối chiếu với Hamilton để chuẩn bị cho giới hạn thuật toán, còn chứng nhận lát cắt cho thấy đôi khi có thể kiểm tra tối ưu mà không lặp lại toàn bộ quá trình tìm.

Điều kiện đầu vào: data-structures (required): Cần hàng đợi, ngăn xếp, hàng đợi ưu tiên (min-heap), Disjoint Set Union và biểu diễn đồ thị.; algorithms-design-analysis (required): Cần tư duy tham lam, quy hoạch động và chứng minh bất biến.

### Duyệt đồ thị (BFS, DFS), sắp xếp Topo và Thành phần liên thông mạnh (SCC)

Duyệt đồ thị làm lộ cấu trúc khả đạt chứ không chỉ đánh dấu các đỉnh đã gặp. Chương này phân biệt cây tìm kiếm với toàn bộ đồ thị, khoảng cách theo số cạnh với độ sâu đệ quy, và liên thông trong đồ thị vô hướng với liên thông mạnh trong đồ thị có hướng. Thời điểm vào ra DFS dẫn đến phát hiện chu trình, thứ tự topo và phân rã SCC. Các cận tuyến tính luôn gắn với cách duyệt danh sách kề; dùng ma trận kề có thể phải quét nhiều ô không có cạnh.

#### BFS, DFS và ý nghĩa cây tìm kiếm — core

BFS dùng hàng đợi để mở rộng các đỉnh theo khoảng cách không giảm từ nguồn, nên khi khám phá đỉnh lần đầu có thể xác định số cạnh ít nhất tới nó. DFS mở sâu theo một nhánh rồi quay lại, cho cấu trúc tổ tiên và thời điểm hoàn tất. Cả hai cần trạng thái đã khám phá để tránh lặp trên chu trình. Với danh sách kề, duyệt toàn bộ có chi phí O(V+E); trong đồ thị không liên thông cần khởi động tiếp từ các đỉnh chưa được thăm.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 5: generic graph traversal; BFS; DFS

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lectures 9–10

#### Chu trình và thứ tự topo — core

DAG là đồ thị có hướng không có chu trình có hướng; thứ tự topo đặt đầu mỗi cạnh trước cuối cạnh. DFS phát hiện chu trình qua cạnh tới một đỉnh còn đang hoạt động, khác cạnh tới đỉnh đã hoàn tất. Đảo thứ tự hoàn tất tạo topo khi không có chu trình. Kahn lần lượt lấy đỉnh bậc vào bằng không; nếu chưa lấy đủ mọi đỉnh mà hàng đợi rỗng thì phần còn lại chứa chu trình. Trên đồ thị vô hướng, kiểm tra cạnh ngược phải phân biệt cạnh cha và các cạnh song song.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 6: DFS in directed graphs; topological sort

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 10: Depth-First Search

#### SCC, Kosaraju và Tarjan — core

Một thành phần liên thông mạnh là tập đỉnh cực đại mà mỗi cặp khả đạt lẫn nhau theo hướng cạnh. Co mỗi SCC thành một đỉnh tạo DAG, hữu ích cho phân tích phụ thuộc có chu trình. Kosaraju dùng thứ tự kết thúc của DFS và đồ thị đảo để tách các thành phần. Tarjan duy trì chỉ số khám phá, thông tin low-link và ngăn xếp các đỉnh chưa được gán thành phần. Chỉ những liên kết phù hợp với trạng thái ngăn xếp mới được dùng cập nhật, tránh trộn với thành phần đã hoàn tất.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 6: Strong Components

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/graph/strongly-connected-components.html — Definitions; Description of the algorithm

#### Đường Euler và câu hỏi Hamilton — core

Đường Euler đi qua mỗi cạnh đúng một lần, còn đường Hamilton đi qua mỗi đỉnh đúng một lần. Với đồ thị vô hướng, điều kiện bậc chẵn hoặc có đúng hai đỉnh bậc lẻ cần đi kèm liên thông của phần chứa cạnh để có hành trình Euler tương ứng. Hierholzer ghép các hành trình con bằng cách lần lượt sử dụng cạnh chưa đi, đạt O(V+E) khi quản lý cạnh hiệu quả. Điều kiện Euler không giải bài toán Hamilton; các câu hỏi Hamilton tổng quát dẫn tới nhóm bài toán khó ở môn độ phức tạp.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/graph/euler_path.html — Algorithm

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 12 NP-Hardness: Hamiltonian problems

### Đường đi ngắn nhất từ một nguồn và điều kiện trọng số

Khoảng cách tối ưu không được xác định chỉ bằng việc tìm thấy một đường đi. Chương này dùng phép nới lỏng để cải thiện các ước lượng, rồi nghiên cứu những thứ tự xử lý làm kết quả chắc chắn tối ưu. Điều kiện trọng số quyết định thuật toán phù hợp: số cạnh, cạnh 0/1, DAG, trọng số không âm hay có cạnh âm. Chu trình âm được giải thích theo khả đạt từ nguồn và ảnh hưởng đến đỉnh đích, tránh kết luận mọi khoảng cách đều mất nghĩa chỉ vì đồ thị có một chu trình âm ở nơi khác.

#### Nới lỏng và mô hình khoảng cách — core

Ước lượng d[v] được cải thiện qua cạnh u→v bằng cách so sánh d[v] với d[u]+w(u,v), nhưng chỉ khi u đã có đường từ nguồn. Nhãn hữu hạn biểu diễn độ dài một đường đã biết, nên là cận trên của khoảng cách tối ưu nếu khoảng cách đó tồn tại. Lưu tiền nhiệm hỗ trợ khôi phục đường, với xử lý riêng cho đỉnh không tới được. Khi tồn tại chu trình âm trên một đường từ nguồn tới đích, có thể lặp chu trình để giảm độ dài vô hạn, nên không có giá trị tối ưu hữu hạn.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 8: tense edges and relaxation

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 11: Weighted Shortest Paths

#### BFS, 0–1 BFS và đường đi trên DAG — core

Nếu mọi cạnh có cùng trọng số dương, BFS tối thiểu số cạnh và do đó tối thiểu độ dài. Khi trọng số chỉ là 0 hoặc 1, deque đưa đỉnh cải thiện bởi cạnh 0 về trước và cạnh 1 về sau để giữ thứ tự khoảng cách phù hợp, đạt O(V+E). Trên DAG, xử lý đỉnh theo topo cho phép nới lỏng mọi cạnh một lần sau khi các tiền nhiệm đã hoàn tất, kể cả khi có cạnh âm. Tính không chu trình thay cho giả thiết không âm trong trường hợp này.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/graph/01_bfs.html — Algorithm

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 8: Shortest Paths in DAGs

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 11

#### Dijkstra và điều kiện không âm — core

Dijkstra cố định đỉnh chưa xử lý có nhãn nhỏ nhất. Khi trọng số không âm, một đường đi vòng qua các đỉnh chưa cố định không thể làm nhãn đỉnh được chọn tốt hơn, tạo căn cứ cho bước tham lam. Cạnh âm phá căn cứ này ngay cả khi không có chu trình âm. Dùng heap nhị phân với danh sách kề cho cận O((V+E) log V) trong cách triển khai chuẩn; bản thêm nhiều bản ghi cần bỏ các bản đã lỗi thời để tránh xử lý lặp không cần thiết.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 8: Dijkstra’s Algorithm

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 13: Dijkstra

#### Bellman–Ford và chu trình âm khả đạt — core

Bellman–Ford nới lỏng các cạnh qua nhiều lượt; sau k lượt đầy đủ có thể bảo đảm đã xét mọi đường dùng không quá k cạnh. Nếu không có chu trình âm khả đạt, một đường tối ưu đơn dùng tối đa V−1 cạnh, nên V−1 lượt đủ. Một cải thiện ở lượt tiếp theo chỉ ra ảnh hưởng của chu trình âm khả đạt từ nguồn; các đỉnh đạt được từ vùng đó có khoảng cách không bị chặn dưới. Thời gian chuẩn O(VE); kết thúc sớm hợp lệ khi một lượt không còn cải thiện.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 8: Bellman–Ford

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 12: Bellman-Ford

### Đường đi ngắn nhất giữa mọi cặp đỉnh (APSP)

Bài toán mọi cặp đỉnh cần trả lời nhiều nguồn đích và cho thấy hai cách tận dụng cấu trúc khác nhau. Floyd–Warshall cho phép thêm dần các đỉnh trung gian vào một công thức quy hoạch động, thích hợp với biểu diễn ma trận. Johnson thay trọng số bằng một thế đỉnh để chạy Dijkstra trên đồ thị thưa có cạnh âm nhưng không có chu trình âm. Chương này chú ý thứ tự vòng lặp, các giá trị vô cực và mô hình heap khi công bố độ phức tạp.

#### Floyd–Warshall và đỉnh trung gian — core

Trạng thái D_k[i,j] là độ dài tốt nhất từ i tới j khi chỉ được dùng các đỉnh trung gian trong k đỉnh đầu. Một nghiệm hoặc không qua đỉnh k, hoặc ghép đường i→k và k→j, tạo phép cập nhật min. Với phiên bản cập nhật tại chỗ chuẩn, vòng k phải ở ngoài để giữ nghĩa này. Thuật toán dùng O(V³) thời gian và O(V²) chỗ; đường chéo âm cho thấy chu trình âm, nhưng chỉ những cặp có thể đi qua chu trình đó mới không có khoảng cách hữu hạn.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 9: Floyd–Warshall

#### Johnson và tái gán trọng số — core

Thêm nguồn phụ nối tới mọi đỉnh rồi dùng Bellman–Ford để có thế h(v), hoặc phát hiện chu trình âm. Trọng số mới w(u,v)+h(u)−h(v) không âm nhờ bất đẳng thức khoảng cách; tổng thế triệt tiêu dọc đường nên thứ tự các đường cùng nguồn đích được giữ. Sau mỗi lần chạy Dijkstra, hiệu thế khôi phục khoảng cách cũ. Cận thời gian phụ thuộc heap: với Fibonacci heap là O(VE+V² log V), còn heap nhị phân cho O(V(V+E) log V) cộng lượt Bellman–Ford.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 9: Johnson’s Algorithm

Nguồn: [mit-6006-2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) — Lecture 14: Johnson

### Cây khung nhỏ nhất (MST), tính chất lát cắt và chu trình

Cây khung nhỏ nhất tối thiểu tổng trọng số để kết nối mọi đỉnh của đồ thị vô hướng liên thông; nó không tối thiểu đường đi từ một nguồn. Chương này xây lý do cạnh nào có thể chọn an toàn qua lát cắt và trao đổi cạnh trên chu trình, rồi đối chiếu Kruskal, Prim và Borůvka. Trọng số âm không gây khó như trong đường đi ngắn nhất. Khi có các trọng số bằng nhau, có thể tồn tại nhiều nghiệm tối ưu và phát biểu tính chất phải cho phép hòa điểm.

#### Lát cắt, chu trình và hòa trọng số — core

Một cạnh nhẹ nhất băng qua lát cắt phù hợp với các cạnh đã chọn có thể được đưa vào một MST thông qua đổi cạnh mà không tăng tổng trọng số. Cạnh nặng nhất duy nhất trên một chu trình không thuộc MST nào; nếu hòa trọng số thì không được kết luận loại bỏ tất cả cạnh nặng nhất. Các phát biểu này giải thích tính an toàn của lựa chọn cục bộ. Đồ thị không liên thông không có cây khung toàn bộ, nhưng có thể tìm rừng khung nhỏ nhất cho từng thành phần.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 7: Safe Edges; Cut and Cycle Properties

#### Ba chiến lược xây cây khung — core

Kruskal xét cạnh theo trọng số tăng và dùng DSU để tránh tạo chu trình, thường tốn O(E log E). Prim mở rộng một cây bằng cạnh nhẹ nhất tới một đỉnh ngoài cây, dùng hàng đợi ưu tiên để duy trì ứng viên. Borůvka để mỗi thành phần chọn cạnh ra nhẹ nhất rồi hợp nhất, giảm nhanh số thành phần qua các pha. Khi hòa trọng số, quản lý hợp nhất hoặc thứ tự phá hòa nhất quán tránh thêm một chu trình. Cấu trúc dữ liệu và độ thưa quyết định bản cài đặt phù hợp.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 7: Borůvka; Prim; Kruskal

### Luồng cực đại, lát cắt cực tiểu và cặp ghép đồ thị hai phía

Luồng mô hình lượng được chuyển trong mạng dưới ràng buộc sức chứa và bảo toàn tại các nút trung gian. Khác đường đi đơn lẻ, một nghiệm luồng có thể phân tán qua nhiều tuyến và cần điều chỉnh những lựa chọn đã thực hiện. Đồ thị thặng dư biểu diễn cả khả năng gửi thêm và khả năng thu hồi luồng cũ. Từ đó chương phát triển đường tăng, chứng nhận tối ưu bằng lát cắt và cách biến bài toán ghép cặp hai phía thành một mạng có sức chứa nguyên.

#### Luồng khả thi và cạnh thặng dư — core

Một luồng khả thi không vượt sức chứa cạnh và có tổng vào bằng tổng ra tại mọi đỉnh ngoài nguồn đích. Cạnh thặng dư thuận biểu diễn phần sức chứa chưa dùng; cạnh ngược cho phép giảm lượng đã gửi để sửa phương án cũ. Tăng luồng trên một đường thặng dư phải cập nhật cả hai hướng tương ứng. Đồ thị có cạnh gốc ở cả hai chiều cần phân biệt chúng với cạnh ngược nội bộ, nếu không có thể làm sai sức chứa và giá trị luồng.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 10: Flows; Residual Graphs; Augmenting Paths

#### Đường tăng, lát cắt và bảo đảm thời gian — core

Mọi luồng có giá trị không vượt sức chứa của bất kỳ lát cắt nguồn đích nào. Khi không còn đường tăng trong đồ thị thặng dư, tập đỉnh còn khả đạt từ nguồn xác định lát cắt đạt bằng giá trị luồng, chứng nhận tối ưu. Ford–Fulkerson với sức chứa nguyên dừng, nhưng cận O(E|f*|) phụ thuộc giá trị luồng và là giả đa thức; chọn đường tùy ý với sức chứa vô tỷ có thể không dừng. Edmonds–Karp dùng BFS chọn ít cạnh nhất và bảo đảm O(VE²).

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 10: Max-Flow Min-Cut; Ford–Fulkerson; Edmonds–Karp

#### Cặp ghép hai phía và tính nguyên — core

Cặp ghép chọn các cạnh sao cho không hai cạnh chung đỉnh. Với đồ thị hai phía, nối nguồn tới phía trái, cạnh trái phải và phía phải tới đích, tất cả sức chứa một. Tính nguyên của luồng cực đại cho phép đọc các cạnh có luồng một thành cặp ghép, và mỗi cặp ghép tạo một luồng có giá trị bằng số cặp. Đường tăng thể hiện chuỗi thay đổi ghép và chưa ghép. Quy dẫn này không được áp dụng nguyên dạng cho đồ thị bất kỳ không có phân hoạch hai phía.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 11: Bipartite Matching; Disjoint Paths

## CS-18 — Thuật toán mở rộng

Môn mở rộng này phát triển các thuật toán chuyên biệt từ nền tảng phân tích, cấu trúc dữ liệu, đồ thị và xác suất đã học. Nội dung gồm khớp mẫu văn bản, truy vấn đoạn tĩnh và động, thuật toán ngẫu nhiên, xấp xỉ có bảo đảm, số học modulo và hình học tính toán nhập môn. Những phần này được kết nối bằng yêu cầu nhận diện đúng thông tin có thể tái sử dụng: tiền tố đã khớp, thống kê một đoạn, cận dưới của tối ưu hoặc dấu một phép định hướng. Các cận thời gian luôn đi kèm chi phí xuất kết quả, kích thước khóa hoặc biểu diễn số khi chúng có ảnh hưởng. Môn học phân biệt rõ trả lời chính xác, sai với xác suất nhỏ và nghiệm gần tối ưu có tỷ lệ; ba cách đánh đổi đó không được gọi chung là chạy nhanh. Đây là đường mở rộng có chọn lọc để hiểu cơ chế và điều kiện ứng dụng, không phải danh mục mọi thuật toán thi đấu hay toàn bộ thuật toán hiện đại.

Điều kiện đầu vào: algorithms-design-analysis (required): Cần nắm chắc chia để trị, quy hoạch động và phân tích tiệm cận.; graph-algorithms (required): Cần nền tảng đồ thị, cây và luồng.; probability (required): Cần xác suất cho phân tích thuật toán ngẫu nhiên và băm chuỗi.

### Thuật toán xử lý chuỗi và khớp mẫu chính xác

Tìm mẫu trong văn bản có thể tận dụng những so sánh đã thực hiện thay vì bắt đầu lại từ đầu mỗi khi lệch ký tự. Chương này phát triển hai bảng mô tả trùng tiền tố và một cách tóm tắt chuỗi bằng băm, rồi mở rộng sang nhiều mẫu với trie và liên kết thất bại. Độ dài văn bản, độ dài mẫu, kích thước bảng chữ cái và số kết quả đều có thể tham gia cận thời gian. Khớp bằng băm được phân biệt với kiểm tra bằng nhau chính xác để không biến xác suất thấp thành bảo đảm tuyệt đối.

#### Hàm tiền tố, KMP và Z-function — extension

Hàm tiền tố π[i] là độ dài tiền tố thực sự dài nhất đồng thời là hậu tố của đoạn kết thúc tại i. Khi lệch ký tự, KMP lùi theo các độ dài biên đã biết thay vì lùi vị trí quét văn bản, cho tổng O(n+m) thời gian. Z[i] đo độ dài đoạn bắt đầu tại i trùng tiền tố toàn chuỗi; duy trì cửa sổ trùng giúp tính tuyến tính. Hai bảng diễn tả quan hệ khác nhau, nên phải giữ đúng định nghĩa chỉ số và xử lý ký tự phân cách không thuộc bảng chữ cái khi ghép mẫu với văn bản.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/string/prefix-function.html — Efficient Algorithm; Knuth-Morris-Pratt

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/string/z-function.html — Efficient algorithm

#### Băm đa thức và Rabin–Karp — extension

Băm đa thức tóm tắt chuỗi bằng tổng các mã ký tự nhân lũy thừa cơ số trong một modulo, cho phép tính nhanh băm đoạn hoặc cập nhật cửa sổ. Hai chuỗi khác vẫn có thể cùng băm, nên nhận kết quả chỉ từ băm tạo khả năng báo khớp sai. Kiểm tra lại ký tự làm câu trả lời chính xác nhưng có thể tăng thời gian khi nhiều ứng viên va chạm. Chọn modulo lớn hoặc nhiều băm làm giảm rủi ro trong mô hình ngẫu nhiên đã nêu, không tạo chứng minh không bao giờ va chạm.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/string/string-hashing.html — Calculation of the hash; Improve no-collision probability

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/string/rabin-karp.html — Algorithm

#### Nhiều mẫu và liên kết thất bại — extension

Aho–Corasick bắt đầu từ trie của các mẫu rồi thêm liên kết thất bại từ một trạng thái về hậu tố dài nhất còn là tiền tố của mẫu nào đó. Quét văn bản cập nhật trạng thái để dùng lại phần hậu tố phù hợp sau khi lệch, đồng thời phát các mẫu kết thúc tại trạng thái hoặc trên chuỗi liên kết đầu ra. Chi phí phải tính cả số lần xuất hiện được báo. Biểu diễn chuyển trạng thái bằng mảng theo bảng chữ cái hay cấu trúc thưa tạo đánh đổi thời gian và bộ nhớ khác nhau.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/string/aho_corasick.html — Construction of an automaton; Applications

### Cấu trúc dữ liệu truy vấn và cập nhật trên đoạn

Truy vấn đoạn cần kết hợp thông tin của nhiều phần tử trong khi dữ liệu có thể thay đổi. Chương này chọn cấu trúc từ tính chất đại số của phép gộp và loại cập nhật, thay vì dùng cùng một cây cho mọi câu hỏi. Tổng có nghịch đảo cho phép lấy hiệu tiền tố, còn cực tiểu có tính lũy đẳng cho phép chồng hai khối. Khi cập nhật động, thông tin lưu tại các nút cần được sửa theo một bất biến rõ, nhất là khi trì hoãn việc truyền cập nhật xuống con.

#### Tiền tố và bảng thưa cho dữ liệu tĩnh — extension

Tổng đoạn nửa mở [l,r) bằng prefix[r]−prefix[l] sau O(n) tiền xử lý, nhưng thay một phần tử có thể làm nhiều tổng tiền tố đổi. Sparse table lưu kết quả trên các khối độ dài lũy thừa hai, dùng O(n log n) bộ nhớ. Với phép gộp kết hợp và lũy đẳng như min, hai khối phủ có thể chồng nhau mà không làm đổi kết quả, cho truy vấn O(1). Tổng không lũy đẳng nên không dùng mẹo chồng khối ấy; có thể tách thành các khối rời với chi phí khác.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/data_structures/sparse-table.html — Range Sum Queries; Range Minimum Queries

#### Fenwick và phân rã chỉ số nhị phân — extension

Fenwick lưu tổng những đoạn có ranh giới xác định từ bit thấp nhất của chỉ số. Với quy ước chỉ số bắt đầu một, truy vấn tiền tố liên tục trừ lowbit, còn cộng một lượng tại điểm liên tục cộng lowbit để sửa các đoạn chứa điểm đó. Cả hai tốn O(log n) và bộ nhớ O(n). Lấy tổng đoạn dùng phép trừ hai tiền tố; các biến thể cho min không tự hỗ trợ thay giá trị tùy ý vì thiếu nghịch đảo. Phiên bản cập nhật cộng đơn giản dựa trên phép gộp cộng giao hoán.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/data_structures/fenwick.html — Definition of g(i); One-based indexing; Range operations

#### Segment tree và phép gộp kết hợp — extension

Segment tree chia đoạn thành hai nửa và lưu một thống kê của mỗi đoạn. Phép gộp phải kết hợp để trả cùng kết quả khi phân rã khác nhau; giá trị đơn vị giúp xử lý phần không giao truy vấn. Truy vấn đoạn và cập nhật điểm tốn O(log n) trong cây cân bằng chuẩn, xây cây O(n). Với phép gộp không giao hoán như nối chuỗi hoặc nhân ma trận, thứ tự trái phải phải được giữ. Chỉ biết giá trị nhỏ nhất không đủ để cập nhật mọi dạng biến đổi tùy ý.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/data_structures/segment_tree.html — Simplest form; Construction; Sum queries; Update queries

#### Cập nhật lười và hợp thành nhãn — extension

Lazy propagation lưu một biến đổi chưa đẩy xuống con nhưng đã được phản ánh trong thống kê của nút hiện tại. Khi cộng c cho đoạn dài L, tổng tăng cL; chỉ sửa tổng thành tổng+c là sai. Các nhãn phải hợp thành theo đúng thứ tự: gán rồi cộng khác cộng rồi gán. Trước khi đi xuống một phần đoạn, nhãn còn nợ được truyền cho con và xóa tại cha. Mỗi loại cập nhật cần chứng minh có thể tác động lên thống kê mà không đọc mọi phần tử trong đoạn.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/data_structures/segment_tree.html — Range updates (Lazy Propagation): Addition; Assignment

### Thuật toán ngẫu nhiên và thuật toán xấp xỉ có cận bảo đảm

Ngẫu nhiên hóa và xấp xỉ trả lời hai câu hỏi khác nhau: có thể đổi cách lựa chọn để đạt bảo đảm kỳ vọng hoặc xác suất hay không, và có thể chấp nhận nghiệm gần tối ưu với cận chất lượng hay không. Chương này tách tính đúng, thời gian và xác suất sai; sau đó xây tỷ lệ xấp xỉ qua cận dưới cho nghiệm tối ưu. Số học modulo và kiểm tra nguyên tố cung cấp một ứng dụng của phân tích xác suất, nhưng không được xem như một khóa mật mã hoàn chỉnh.

#### Las Vegas, Monte Carlo và khuếch đại — extension

Las Vegas luôn trả kết quả đúng khi trả lời, còn thời gian chạy phụ thuộc ngẫu nhiên; thời gian kỳ vọng đa thức là một bảo đảm của một số thuật toán, không phải định nghĩa của cả lớp. Monte Carlo cho phép xác suất sai có cận dưới một bảo đảm thời gian đã nêu, không nhất thiết có thời gian hoàn toàn cố định. Lặp độc lập và lấy đa số có thể giảm sai số hai phía khi mỗi lần tốt hơn đoán ngẫu nhiên; lỗi một phía cần quy tắc tổng hợp tương ứng. Phải nêu đầu vào cố định và xác suất lấy trên lựa chọn ngẫu nhiên nào.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Discrete Probability notes; Nuts and Bolts notes

#### Xấp xỉ phủ đỉnh và phủ tập — extension

Lấy một cặp ghép cực đại rồi chọn cả hai đầu mỗi cạnh cho một phủ đỉnh có kích thước không quá hai lần tối ưu: mọi phủ đỉnh phải chọn ít nhất một đầu của mỗi cạnh rời nhau trong cặp ghép. Cực đại theo việc không thêm được cạnh không đồng nghĩa cặp ghép lớn nhất. Với phủ tập không trọng số, chọn tập phủ nhiều phần tử chưa phủ nhất cho cận H_n≤1+ln n, được giải thích bằng tính phí từng phần tử. Hai chứng minh dùng cận dưới cho tối ưu, không chỉ đo thực nghiệm.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Approximation Algorithms notes: Vertex Cover; Set Cover

#### TSP metric và đường vòng qua cây khung — extension

Trong TSP metric, khoảng cách không âm, đối xứng và thỏa bất đẳng thức tam giác. Cây khung nhỏ nhất là cận dưới của một chu trình tối ưu sau khi bỏ một cạnh chu trình. Nhân đôi cạnh cây tạo hành trình Euler có chi phí hai lần cây; bỏ qua các đỉnh đã thăm không tăng độ dài nhờ tam giác, cho xấp xỉ hệ số hai. Nếu bỏ giả thiết metric, bước đi tắt có thể tăng chi phí mạnh và bảo đảm không còn đúng. Đây là nghiệm gần tối ưu có chứng minh, khác một heuristic chỉ có kết quả tốt trên vài mẫu.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Approximation Algorithms notes: Traveling Salesman

#### Lũy thừa modulo và kiểm tra nguyên tố — extension

Bình phương liên tiếp tính a^k modulo n bằng O(log k) phép nhân modulo, nhưng chi phí bit mỗi phép nhân vẫn phụ thuộc độ dài n. Kiểm tra Fermat đơn lẻ có thể bị số giả nguyên tố và số Carmichael đánh lừa. Miller–Rabin phân tích n−1 thành 2^s d rồi tìm chứng cứ hợp số; với n lẻ hợp số, một cơ số ngẫu nhiên hợp lệ có xác suất bỏ sót bị chặn, và lặp độc lập giảm rủi ro. Một danh sách cơ số cố định chỉ cho quyết định tất định trên miền số đã được chứng minh, không phải mọi số nguyên dài tùy ý.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/algebra/binary-exp.html — Effective computation of large exponents modulo a number

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/algebra/primality_tests.html — Miller-Rabin primality test

### Hình học tính toán nhập môn

Hình học tính toán đòi hỏi chuyển quan hệ không gian thành phép kiểm tra có dấu và xử lý các trường hợp suy biến. Chương này dùng vector, tích vô hướng và định thức hai chiều để định nghĩa hướng rẽ, rồi xây kiểm tra giao đoạn và bao lồi. Mỗi phép so sánh đều có giả thiết về biểu diễn số; một sai dấu nhỏ có thể làm thuật toán tạo cấu trúc sai chứ không chỉ kết quả hơi lệch. Quy ước giữ hay bỏ điểm thẳng hàng được công bố như một phần đầu ra.

#### Phép định hướng và độ tin cậy số học — extension

Với ba điểm A,B,C, dấu định thức (B−A)×(C−A) cho biết rẽ trái, rẽ phải hay thẳng hàng theo quy ước trục. Tọa độ nguyên cho phép kiểm tra chính xác nếu kiểu số đủ rộng cho các tích và hiệu; tràn số có thể đảo dấu. Với dấu chấm động, dùng một epsilon tùy ý không tự bảo đảm tính nhất quán của các quyết định hình học. Chương giới thiệu kiểm soát miền tọa độ và số học chính xác khi cần, thay vì tuyên bố tránh được mọi sai số chỉ bằng một hằng số nhỏ.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/geometry/basic-geometry.html — Cross product; Dot product

#### Giao đoạn và các trường hợp suy biến — extension

Hai đoạn không thẳng hàng cắt nhau khi các đầu mút của mỗi đoạn nằm khác phía hoặc trên đường thẳng chứa đoạn kia, kết hợp kiểm tra phạm vi tương ứng. Khi cả hai thẳng hàng, phải xét chồng khoảng chiếu chứ không dùng dấu định hướng đơn thuần. Điểm trùng, đoạn độ dài không và chạm đầu mút cần quy ước có tính là giao hay không. Tách các trường hợp này giúp kiểm tra hình học khớp với định nghĩa đầu ra, tránh lấy hình minh họa tổng quát làm bằng chứng bao quát mọi biên.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/geometry/check-segments-intersection.html — Algorithm

#### Bao lồi bằng quét và chuỗi đơn điệu — extension

Bao lồi là tập lồi nhỏ nhất chứa các điểm, có biên là đa giác trong trường hợp không suy biến. Graham scan sắp theo góc rồi loại các điểm làm chuỗi rẽ sai hướng; Andrew sắp từ điển rồi dựng nửa dưới và nửa trên bằng ngăn xếp. Mỗi điểm được đẩy và bỏ số lần hằng, nên sau sắp tổng thời gian O(n log n). Cần xử lý điểm trùng, mọi điểm thẳng hàng và quyết định giữ tất cả điểm biên hay chỉ các đỉnh cực trị, vì điều này đổi điều kiện loại điểm.

Nguồn: [cp-algorithms](https://cp-algorithms.com/) — https://cp-algorithms.com/geometry/convex-hull.html — Graham’s scan Algorithm; Monotone chain Algorithm

## CS-19 — Ngôn ngữ hình thức và khả năng tính toán

Môn học xây một ngôn ngữ chính xác để hỏi máy tính có thể giải những bài toán nào, bắt đầu từ nhận diện chuỗi và đi tới giới hạn của thuật toán tổng quát. Máy hữu hạn và biểu thức chính quy mô tả những mẫu chỉ cần bộ nhớ hữu hạn; văn phạm phi ngữ cảnh và ngăn xếp mở rộng sang cấu trúc lồng nhau. Máy Turing sau đó cung cấp mô hình chung cho thủ tục hiệu dụng, đồng thời buộc phân biệt chấp nhận, từ chối và không kết thúc. Đường chéo hóa, bài toán dừng, quy dẫn và Rice cho thấy một giới hạn có thể được chứng minh chứ không chỉ phỏng đoán do chưa tìm được chương trình. Những lập luận này dùng kiến thức tập hợp, lượng từ, quy nạp và phản chứng từ toán rời rạc. Môn học ưu tiên mô hình đúng và chiều suy luận rõ; độ phức tạp thời gian của các bài toán quyết định được được phát triển tiếp ở môn kế sau, không bị trộn với bất khả quyết.

Điều kiện đầu vào: discrete-math (required): Cần nắm chắc logic, tập hợp, hàm song ánh, chứng minh phản chứng và quy nạp cấu trúc.; algorithms-design-analysis (required): Cần khái niệm thuật toán xác định để đối chiếu với mô hình máy Turing.

### Ngôn ngữ chính quy, Otomat hữu hạn (DFA/NFA) và Biểu thức chính quy

Ngôn ngữ hình thức là tập các chuỗi, vì thế một bài toán quyết định có thể được xem như việc nhận diện chuỗi thuộc tập đó hay không. Chương này đi từ bảng chữ cái, phép nối và lặp đến máy hữu hạn và biểu thức chính quy. Sự tương đương của các cách mô tả được xây bằng các phép chuyển đổi, không suy từ việc chúng trông giống nhau. Giới hạn bộ nhớ hữu hạn dẫn tới bổ đề bơm và cách chứng minh một ngôn ngữ không chính quy với thứ tự lượng từ chính xác.

#### Bảng chữ cái, chuỗi và phép toán ngôn ngữ — core

Một bảng chữ cái là tập hữu hạn các ký hiệu; chuỗi là dãy hữu hạn ký hiệu, có thể là chuỗi rỗng ε. Ngôn ngữ là tập con của mọi chuỗi trên bảng chữ cái đó, nên ngôn ngữ rỗng khác ngôn ngữ chỉ chứa ε. Phép nối hai ngôn ngữ lấy mọi cách nối một chuỗi từ mỗi tập; sao Kleene cho phép nối không hoặc nhiều chuỗi, do đó luôn chứa ε. Các định nghĩa này cho phép diễn đạt bài toán thành viên mà không phụ thuộc ý nghĩa tự nhiên của một từ.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Models of Computation: 1 Strings; 2 Regular Languages

#### DFA, NFA và phép dựng tập con — core

DFA lưu một trạng thái và có đúng một chuyển cho mỗi trạng thái ký hiệu; NFA cho nhiều lựa chọn và có thể có bước ε không đọc đầu vào. Một NFA chấp nhận nếu tồn tại một đường tính đọc hết chuỗi và kết thúc ở trạng thái chấp nhận. DFA tương đương có trạng thái là tập các trạng thái NFA còn có thể xảy ra, tính cả bao đóng ε. Số tập có thể tăng theo hàm mũ, nên tương đương về khả năng nhận diện không có nghĩa biểu diễn luôn cùng kích thước.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Models of Computation: 3 Finite-State Automata; 4 Nondeterministic Automata

Nguồn: [mit-6045j-2011](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/) — Lectures 3–4

#### Biểu thức chính quy, tính đóng và tối thiểu hóa — core

Biểu thức chính quy toán học dùng hợp, nối và sao để tạo ngôn ngữ; định lý tương đương với otomat được hiểu qua dựng máy từ biểu thức và loại trạng thái theo chiều ngược lại. Máy tích cho phép chứng minh đóng dưới giao và hiệu, còn bù DFA cần hoàn chỉnh các chuyển trước khi đổi tập trạng thái chấp nhận. Hai trạng thái có thể gộp nếu không có hậu tố nào phân biệt hành vi chấp nhận của chúng. Regex thực tế có backreference không còn được đồng nhất với mô hình chính quy cổ điển.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Models of Computation: 2 Regular Languages; 3 Finite-State Automata; 4 Nondeterministic Automata

Nguồn: [mit-6045j-2011](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/) — Lecture 4: NFA and regular expressions

#### Bổ đề bơm và chứng minh không chính quy — core

Với ngôn ngữ chính quy tồn tại độ dài bơm p sao cho mọi chuỗi đủ dài có một cách tách xyz với |xy|≤p, |y|>0 và xy^k z vẫn thuộc ngôn ngữ với mọi k≥0. Để bác tính chính quy, chọn chuỗi theo p rồi xử lý mọi cách tách hợp lệ, sau đó chọn k làm chuỗi ra ngoài ngôn ngữ. Chọn một cách tách tiện lợi không đủ. Bổ đề là điều kiện cần, nên việc tìm được vài chuỗi bơm được cũng không chứng minh ngôn ngữ chính quy.

Nguồn: [mit-6045j-2011](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/) — Lecture 5: Nonregular languages; pumping lemma

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Models of Computation: 3 Finite-State Automata — pumping lemma

### Văn phạm phi ngữ cảnh (CFG), cây dẫn xuất và Otomat đẩy xuống (PDA)

Cấu trúc lồng nhau như ngoặc cân bằng cần một dạng bộ nhớ mà máy hữu hạn không có. Văn phạm phi ngữ cảnh mô tả cấu trúc này bằng thay một ký hiệu chưa kết thúc bởi một chuỗi, còn PDA bổ sung ngăn xếp để kiểm tra nó khi đọc đầu vào. Chương này phân biệt cây cú pháp với thứ tự áp dụng luật, làm rõ nhập nhằng và dạng chuẩn cho phân tích cú pháp. Khả năng mô tả rộng hơn chính quy vẫn có giới hạn, nên không phải mọi quan hệ đếm giữa các phần chuỗi đều phi ngữ cảnh.

#### Luật sinh, cây dẫn xuất và nhập nhằng — core

CFG gồm ký hiệu kết thúc, ký hiệu chưa kết thúc, ký hiệu bắt đầu và luật có một ký hiệu chưa kết thúc ở vế trái. Dẫn xuất lặp thay ký hiệu đó cho tới khi chỉ còn ký hiệu kết thúc. Cây dẫn xuất lưu cấu trúc phân rã, không chỉ chuỗi cuối cùng. Một văn phạm nhập nhằng nếu có một chuỗi có hai cây dẫn xuất khác nhau; hai thứ tự thay các nhánh độc lập trong cùng một cây không đủ chứng minh nhập nhằng. Văn phạm biểu thức cần phản ánh ưu tiên và tính kết hợp để giải quyết cách nhóm.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Models of Computation: 5 Context-Free Languages and Grammars — Definitions; Parse Trees; Ambiguity

#### Dạng chuẩn Chomsky và phân tích CYK — core

Trong CNF, các luật chính có dạng A→BC hoặc A→a; trường hợp chuỗi rỗng được xử lý bằng quy ước riêng cho ký hiệu bắt đầu không xuất hiện ở vế phải. Chuyển dạng cần loại hoặc xử lý luật rỗng, luật đơn vị và ký hiệu vô ích mà vẫn giữ ngôn ngữ thích hợp. CYK lưu những ký hiệu có thể sinh từng đoạn chuỗi rồi thử mọi điểm chia, cho thời gian O(n³) khi văn phạm cố định. Bảng thành viên có thể được bổ sung con trỏ để khôi phục cây dẫn xuất.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Models of Computation: 5 Context-Free Languages and Grammars — Chomsky Normal Form; Parsing

#### PDA, ngăn xếp và giới hạn phi ngữ cảnh — core

PDA thêm ngăn xếp vào điều khiển hữu hạn; một bước có thể đọc ký hiệu, xét đỉnh ngăn xếp rồi đẩy hoặc bỏ ký hiệu theo luật. PDA không đơn định tương đương CFG: có thể mô phỏng việc mở rộng luật sinh bằng ngăn xếp, và chiều ngược mô tả những đoạn tính cân bằng của ngăn xếp. PDA tất định nhận một lớp hẹp hơn, nên không được chuyển kết luận DFA=NFA sang đây. Các CFL đóng dưới hợp, nối và sao nhưng không đóng dưới giao hoặc bù nói chung; ví dụ a^n b^n c^n vượt ngoài lớp này.

Nguồn: [illinois-cs273-notes](https://mfleck.cs.illinois.edu/cs373-notes.pdf) — Ch. 13 Pushdown Automatas; Ch. 15 CFG to PDA; Ch. 17 PDA to CFG conversion

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Models of Computation: 5 — Properties and limitations of context-free languages

### Máy Turing, tính tương đương của các mô hình và Luận đề Church–Turing

Máy Turing tách ý tưởng thuật toán khỏi một ngôn ngữ hoặc phần cứng cụ thể bằng mô hình hữu hạn điều khiển một băng có thể sử dụng không bị chặn trước. Chương này định nghĩa cấu hình và cách mô phỏng để phân biệt khả năng tính toán với hiệu năng. Việc chương trình có thể được mã hóa thành dữ liệu dẫn tới máy vạn năng. Quan trọng hơn, khả năng chấp nhận đúng các đầu vào thuộc một tập chưa bảo đảm có thể kết thúc trên mọi đầu vào không thuộc tập đó.

#### Cấu hình máy Turing và chương trình như dữ liệu — core

Một cấu hình mô tả trạng thái điều khiển, vị trí đầu đọc và phần nội dung băng cần thiết tại thời điểm đó. Hàm chuyển quyết định ký hiệu ghi, hướng di chuyển và trạng thái tiếp theo từ trạng thái cùng ký hiệu đang đọc. Một máy có mô tả hữu hạn dù số ô có thể dùng không bị chặn trước. Mã hóa máy thành chuỗi cho phép một máy khác đọc mô tả rồi mô phỏng từng bước; đó là ý nghĩa của máy vạn năng, không phải một máy tự biết đáp án mọi bài toán.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Models of Computation: 6 Turing Machines; 8 Universal Models

Nguồn: [mit-6045j-2011](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/) — Lecture 6: Turing Machines

#### Nhận biết, quyết định và ba khả năng chạy — core

Bộ nhận biết phải dừng và chấp nhận khi đầu vào thuộc ngôn ngữ; ngoài ngôn ngữ nó có thể từ chối hoặc chạy mãi. Bộ quyết định phải dừng trên mọi đầu vào và trả đúng có hoặc không. Vì thế quan sát một chương trình chưa dừng sau thời gian dài không xác nhận nó đang vòng lặp vô hạn. Nếu cả một ngôn ngữ và phần bù đều nhận biết được, có thể mô phỏng xen kẽ hai bộ nhận biết cho tới khi một máy chấp nhận, tạo bộ quyết định.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Models of Computation: 6 Turing Machines; 7 Undecidability

Nguồn: [mit-6045j-2011](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/) — Lecture 7: Decision problems and decidability

#### Biến thể mô hình và luận đề Church–Turing — core

Đa băng, cách mã hóa băng hay không đơn định có thể thay đổi chi phí mô phỏng nhưng không mở rộng lớp ngôn ngữ nhận biết được của máy Turing chuẩn. Với không đơn định, cần khám phá công bằng cây các nhánh, tránh mắc kẹt mãi trong một nhánh khi nhánh khác chấp nhận. Luận đề Church–Turing cho rằng mọi thủ tục hiệu dụng theo nghĩa trực giác đều được mô hình hóa bởi máy Turing; vì một vế là ý niệm phi hình thức, đây không phải định lý đã chứng minh như sự tương đương giữa hai máy được định nghĩa toán học.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Models of Computation: 6 Turing Machines; 9 Nondeterministic Turing Machines

Nguồn: [mit-6045j-2011](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/) — Lecture 6: Turing Machines

### Chứng minh đường chéo hóa, Bài toán dừng (Halting Problem) và Quy dẫn bất khả quyết

Bất khả quyết là giới hạn về sự tồn tại thuật toán tổng quát, khác việc một thuật toán đã biết chạy chậm. Chương này dùng mã hóa và đường chéo hóa để tạo mâu thuẫn cho giả thiết có bộ quyết định, rồi phát triển quy dẫn như công cụ chuyển giới hạn từ bài toán này sang bài toán khác. Chiều quy dẫn, tính tính được của phép biến đổi và tương đương hai chiều của đáp án đều là phần bắt buộc của lập luận. Định lý Rice được đặt đúng phạm vi thuộc tính ngữ nghĩa của ngôn ngữ được nhận.

#### Đếm chương trình, đường chéo và bài toán dừng — core

Các chương trình có mô tả hữu hạn trên bảng chữ cái hữu hạn nên có thể liệt kê, trong khi tập mọi ngôn ngữ trên một bảng chữ cái khác rỗng là không đếm được. Lập luận này cho thấy có ngôn ngữ không được chương trình nào nhận biết, nhưng chưa tự chỉ ra một bài toán cụ thể. Bài toán dừng hỏi máy M có dừng trên x không; giả sử có bộ quyết định rồi cho một máy dùng đáp án đó để làm ngược khi nhận mã của chính mình tạo mâu thuẫn. Đây là phủ định thuật toán giải mọi cặp, không cấm phân tích từng chương trình riêng.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Models of Computation: 7 Undecidability — Diagonalization; Halting

Nguồn: [mit-6045j-2011](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/) — Lecture 8: Undecidability

#### Quy dẫn ánh xạ và chiều của tính khó — core

A≤m B nghĩa là tồn tại hàm toàn phần tính được f sao cho x thuộc A khi và chỉ khi f(x) thuộc B. Nếu B quyết định được thì tính f rồi gọi bộ quyết định B sẽ quyết định A. Bởi vậy muốn chứng minh B bất khả quyết từ A đã biết bất khả quyết, cần biến đầu vào A thành đầu vào B. Chỉ biến B về A không đủ. Phép biến đổi phải kết thúc mà không bí mật sử dụng đáp án A; mô tả một mô phỏng có thể chạy mãi không tự là hàm quy dẫn toàn phần.

Nguồn: [mit-6045j-2011](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/) — Lecture 9: Mapping reducibility and Rice’s theorem

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Models of Computation: 7 Undecidability — Reductions

#### Rice, thuộc tính ngữ nghĩa và giới hạn kết luận — core

Định lý Rice nói rằng mọi thuộc tính không tầm thường của ngôn ngữ được một máy Turing nhận đều không thể được quyết định từ mã máy nói chung. Không tầm thường nghĩa là có ngôn ngữ nhận biết được thỏa và có ngôn ngữ nhận biết được không thỏa; thuộc tính ngữ nghĩa chỉ phụ thuộc ngôn ngữ, không phụ thuộc cách viết máy. Số trạng thái hoặc việc mã chứa một ký hiệu cụ thể là thuộc tính cú pháp nên không thuộc phạm vi. Kết luận không loại trừ bộ kiểm tra chỉ xử lý một lớp chương trình bị hạn chế hoặc chấp nhận trả lời chưa biết.

Nguồn: [mit-6045j-2011](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/) — Lecture 9: Rice’s theorem

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Models of Computation: 7 Undecidability

## CS-20 — Độ phức tạp tính toán

Sau khi biết một bài toán có thuật toán quyết định hay không, môn học nghiên cứu lượng thời gian và không gian cần để giải nó khi đầu vào lớn dần. Mã hóa nhị phân, mô hình máy và cách phát biểu quyết định tạo nền cho các lớp P, NP, coNP và PSPACE. Quy dẫn đa thức và Cook–Levin giải thích sự liên hệ giữa một bộ kiểm chứng ngắn với các bài toán thỏa công thức, rồi dẫn tới hệ thống bài toán NP-đầy đủ trong logic, đồ thị và số học. Nội dung phân biệt cẩn thận kết quả đã chứng minh với câu hỏi mở: chưa biết thuật toán đa thức không có nghĩa đã chứng minh không tồn tại, và NP-khó không đồng nghĩa bất khả quyết. Không gian được xem như một tài nguyên có thể tái sử dụng. Cuối môn, các cách ứng phó với bài toán khó được đặt cạnh giới hạn lý thuyết để chọn điều kiện thực tế có thể khai thác, thay vì xem nhãn NP-khó là lý do ngừng giải một ứng dụng cụ thể.

Điều kiện đầu vào: formal-languages-computability (required): Cần mô hình Máy Turing, ngôn ngữ quyết định và kỹ thuật quy dẫn.; graph-algorithms (required): Cần nắm các bài toán đồ thị đa thức (2-SAT, MST, Shortest Path, Matching) để đối chiếu với các bài toán đồ thị NP-khó (3-SAT, TSP, Clique).

### Mã hóa đầu vào, lớp phức tạp thời gian, lớp P và lớp NP

Một bài toán có thể quyết định được nhưng vẫn cần tài nguyên vượt khả năng xử lý của đầu vào lớn. Chương này đo độ dài mã hóa và định nghĩa các lớp thời gian trước khi giới thiệu P, NP và coNP. Bài toán quyết định được tách khỏi tìm nhân chứng và tối ưu để các phát biểu lớp phức tạp có đối tượng rõ. Các cận giả đa thức làm lộ vai trò của mã nhị phân, còn định nghĩa bộ kiểm chứng cho thấy NP không có nghĩa là đã biết bài toán không thể giải đa thức.

#### Độ dài mã hóa và thời gian tính — core

Độ dài đầu vào là số ký hiệu của một mã hóa hữu hạn đã chọn. Số nguyên W mã nhị phân cần Θ(log W) bit, trong khi mã nhất phân cần Θ(W), nên thuật toán O(nW) có thể giả đa thức với mã nhị phân nhưng đa thức với mã nhất phân. Lớp TIME(f(n)) được xét theo một mô hình máy đã xác định và cận thời gian trên mọi đầu vào dài n. Chuyển giữa các mô hình hợp lý thường bảo toàn tính đa thức, nhưng không cho phép bỏ chi phí của số nguyên dài tùy ý.

Nguồn: [mit-6045-2020](https://people.csail.mit.edu/rrw/6.045-2020/) — Lecture 13: Time Complexity

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 12: polynomial time and input encoding

#### P, NP và chứng cứ kiểm được — core

P gồm các ngôn ngữ có bộ quyết định tất định thời gian đa thức. NP có thể định nghĩa bằng bộ kiểm chứng đa thức V(x,y), trong đó chứng cứ y có độ dài bị chặn đa thức theo |x|, và x thuộc ngôn ngữ khi tồn tại y được chấp nhận. Một phép gán thỏa công thức SAT là ví dụ chứng cứ; kiểm một phép gán khác với tìm được phép gán. Định nghĩa tương đương dùng máy không đơn định, nhưng không có nghĩa máy thật thử mọi nhánh đồng thời mà không tốn tài nguyên.

Nguồn: [mit-6045-2020](https://people.csail.mit.edu/rrw/6.045-2020/) — Lecture 14: P and NP

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 12 NP-Hardness: P and NP

#### Quyết định, tìm kiếm, coNP và câu hỏi mở — core

Bản quyết định của một bài toán tối ưu thường hỏi có nghiệm tốt hơn một ngưỡng hay không; quan hệ với tìm nghiệm cần một phép chuyển cụ thể chứ không chỉ đổi tên. Với SAT, gọi nhiều lần bộ quyết định để cố định từng biến cho phép khôi phục phép gán nếu tồn tại. coNP gồm những ngôn ngữ có phần bù thuộc NP, không phải tập các bài toán nằm ngoài NP. P⊆NP∩coNP, còn P=NP hay NP=coNP đều chưa được giải quyết; không được biến kết quả thực nghiệm chậm thành chứng minh tách lớp.

Nguồn: [mit-6045-2020](https://people.csail.mit.edu/rrw/6.045-2020/) — Lecture 14: P and NP; Lecture 17: coNP and Friends

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 12: decision and optimization

### Quy dẫn thời gian đa thức, tính NP-khó, NP-đầy đủ và Định lý Cook–Levin

Quy dẫn đa thức cho phép so sánh độ khó bằng một phép biến đổi đầu vào tính được hiệu quả. Chương này làm rõ chiều suy luận và hai phần khác nhau của chứng minh NP-đầy đủ: thuộc NP và NP-khó. Định lý Cook–Levin cung cấp điểm xuất phát cho mạng quy dẫn bằng cách mô tả một tính toán chấp nhận dưới dạng các ràng buộc Boolean cục bộ. Chuyển SAT sang dạng ba literal được xem qua biến phụ và tính tương đương về khả năng thỏa, tránh nhầm với giữ nguyên mọi phép gán trên các biến mới.

#### Quy dẫn nhiều-một và tính NP-đầy đủ — core

A≤p B nghĩa là có hàm f tính trong thời gian đa thức với x∈A khi và chỉ khi f(x)∈B. Khi B∈P thì A∈P bằng hợp thành thuật toán. Để chứng minh B NP-khó, có thể chọn A đã NP-khó rồi dựng A≤p B, đồng thời kiểm kích thước đầu ra là đa thức. B NP-đầy đủ khi còn có B∈NP; một bài toán NP-khó không nhất thiết thuộc NP hay thậm chí quyết định được. Quy dẫn cho phép nhiều lời gọi oracle là khái niệm khác và phải được gọi tên riêng.

Nguồn: [mit-6045-2020](https://people.csail.mit.edu/rrw/6.045-2020/) — Lecture 15: Polynomial-Time Reductions

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 12: Reductions; NP-hardness and NP-completeness

#### Cook–Levin và bảng tính toán cục bộ — core

Một tính toán đa thức của máy kiểm chứng có thể biểu diễn thành bảng theo thời gian và vị trí băng, với các biến Boolean mã hóa ký hiệu, trạng thái và vị trí đầu đọc. Các ràng buộc yêu cầu cấu hình đầu đúng, chuyển cục bộ hợp lệ và có chấp nhận. Nếu có nhánh chấp nhận thì tạo được phép gán thỏa; ngược lại phép gán thỏa mô tả một tính toán chấp nhận. Số ô và ràng buộc là đa thức theo độ dài đầu vào, nên phép dựng chứng minh mọi ngôn ngữ NP quy dẫn về SAT.

Nguồn: [mit-6045-2020](https://people.csail.mit.edu/rrw/6.045-2020/) — Lecture 15: Cook–Levin Theorem

Nguồn: [mit-6045j-2011](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/) — Lecture 16: NP-completeness

#### Mạch Boolean, biến phụ và 3-SAT — core

Mỗi cổng mạch có thể được gắn một biến phụ và các mệnh đề buộc biến đó bằng kết quả của cổng trên đầu vào. Thêm ràng buộc đầu ra đúng biến Circuit-SAT thành một công thức có kích thước tuyến tính theo mạch trong cách dựng chuẩn. Việc tách mệnh đề dài thành các mệnh đề ba literal cần biến phụ và chứng minh tồn tại cách gán mở rộng khi và chỉ khi công thức gốc thỏa được. Đó là equisatisfiability; hai công thức không nhất thiết tương đương trên mọi phép gán đầy đủ của tất cả biến.

Nguồn: [mit-6045-2020](https://people.csail.mit.edu/rrw/6.045-2020/) — Lecture 15: Cook–Levin and NP-completeness

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 12: Circuit Satisfiability; 3SAT

### Hệ thống các bài toán NP-đầy đủ kinh điển và sai lầm thường gặp khi quy dẫn

Mạng bài toán NP-đầy đủ cho thấy nhiều yêu cầu ứng dụng khác nhau có thể mang cùng một dạng khó trong trường hợp xấu. Chương này nghiên cứu các phép biến đổi cụ thể từ công thức logic sang lựa chọn đỉnh, đi qua đồ thị, tô màu và cộng số. Mỗi phép dựng phải có giải thích cho cả hai chiều và cho kích thước đa thức. Những thay đổi nhỏ của đặc tả, chẳng hạn số màu hoặc mã hóa số, có thể đổi hẳn kết luận nên được giữ rõ thay vì gắn nhãn NP-khó cho cả một chủ đề.

#### Independent Set, Clique và Vertex Cover — core

Một tập độc lập không chứa hai đỉnh kề nhau; clique yêu cầu mọi cặp đỉnh khác nhau kề nhau; phủ đỉnh chạm mọi cạnh. Trong cùng đồ thị, phần bù của một tập độc lập là phủ đỉnh, nên ngưỡng k chuyển thành V−k. Tập độc lập trong G trở thành clique trong đồ thị bù, không phải cùng G. Dựng từ 3-SAT thường tạo các lựa chọn literal theo mệnh đề và cạnh cấm các lựa chọn mâu thuẫn; chứng minh phải cho thấy chọn đủ đỉnh tương ứng đúng một phép gán thỏa nhất quán.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 12: Independent Set; Clique; Vertex Cover

Nguồn: [mit-6045-2020](https://people.csail.mit.edu/rrw/6.045-2020/) — Lecture 16

#### Hamilton, TSP và các bộ phận ràng buộc — core

Một phép quy dẫn Hamilton sang TSP quyết định có thể gán chi phí một cho cạnh có thật và hai cho cạnh bổ sung trong đồ thị đầy đủ, rồi hỏi có chu trình chi phí không quá V hay không. Ngưỡng này buộc mọi cạnh được chọn phải là cạnh gốc. Các phép quy dẫn sang Hamilton hoặc 3-coloring dùng gadget để ép lựa chọn và truyền tính nhất quán; cần chứng minh gadget không có đường hoặc cách tô ngoài dự kiến. 2-coloring kiểm được bằng BFS, nên không suy tính khó chỉ từ việc bài toán cũng có từ tô màu.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 12: Hamiltonian Cycles; Traveling Salesman; Graph Coloring

#### Subset Sum, ba lô và giả đa thức — core

Subset Sum hỏi có tập con các số nguyên đầu vào có tổng đúng mục tiêu hay không; bản quyết định với số mã nhị phân là NP-đầy đủ. Quy hoạch động theo tổng mục tiêu có thời gian O(nW), giải thích vì sao kết quả không mâu thuẫn với NP-đầy đủ: W có thể hàm mũ theo số bit biểu diễn. Đây là ví dụ khó yếu trong phân loại chuẩn, khác tính NP-khó mạnh. Ba lô tối ưu và bản quyết định cần được phân biệt khi dùng nhãn lớp NP, vốn được định nghĩa cho ngôn ngữ quyết định.

Nguồn: [mit-6045-2020](https://people.csail.mit.edu/rrw/6.045-2020/) — Lecture 16: Subset Sum; Knapsack

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Ch. 12: Subset Sum and numerical reductions

### Độ phức tạp không gian (L, PSPACE) và chiến lược giải quyết bài toán NP-khó

Thời gian đã trôi không dùng lại được, nhưng bộ nhớ có thể được ghi đè nhiều lần, nên một thuật toán chậm vẫn có thể dùng ít chỗ. Chương này định nghĩa các lớp không gian, giải thích ý tưởng mô phỏng qua đồ thị cấu hình và đặt Savitch trong phạm vi giả thiết của định lý. Phần sau chuyển giới hạn lý thuyết thành lựa chọn thiết kế: hạn chế đầu vào, khai thác tham số, chấp nhận xấp xỉ hoặc sử dụng bộ giải tổng quát. Những lựa chọn ấy thay đổi yêu cầu bảo đảm chứ không xóa kết quả NP-khó.

#### Không gian làm việc, L và PSPACE — core

Không gian làm việc đếm các ô cần sử dụng ngoài vùng đầu vào chỉ đọc khi nghiên cứu cận dưới tuyến tính; quy ước này cho phép định nghĩa L bằng O(log n) ô và NL bằng phiên bản không đơn định. PSPACE là hợp các lớp không gian đa thức. Duyệt mọi phép gán cho SAT có thể dùng lại một vùng lưu phép gán nên cần không gian đa thức dù tốn thời gian hàm mũ. Các bao hàm P⊆NP⊆PSPACE⊆EXPTIME không cho phép kết luận mỗi dấu bao hàm đều nghiêm ngặt.

Nguồn: [mit-6045-2020](https://people.csail.mit.edu/rrw/6.045-2020/) — Lecture 19: Measuring Space Complexity; PSPACE; EXPTIME

#### Savitch và tính đầy đủ của TQBF — core

Máy dùng s(n) chỗ có số cấu hình bị chặn hàm mũ theo s(n) trong mô hình thông thường. Ý tưởng Savitch kiểm tra khả đạt giữa hai cấu hình bằng đoán một cấu hình giữa rồi thử các khả năng tuần tự, tái sử dụng bộ nhớ. Với s(n)≥n trong phiên bản trình bày ở nguồn, mô phỏng cho NSPACE(s(n))⊆SPACE(s(n)²), suy ra PSPACE=NPSPACE. TQBF hỏi tính đúng của công thức Boolean có lượng từ; duyệt tuần tự cây lượng từ dùng chỗ đa thức, còn tính PSPACE-đầy đủ cho thấy nó đại diện độ khó của cả lớp.

Nguồn: [mit-6045-2020](https://people.csail.mit.edu/rrw/6.045-2020/) — Lecture 19: Savitch’s Theorem; Lecture 20: PSPACE-completeness and TQBF

#### Trường hợp đặc biệt, tham số và bộ giải — extension

Một bài toán NP-khó tổng quát có thể đa thức trên cây, miền kích thước nhỏ hoặc các ràng buộc cấu trúc thích hợp. Thuật toán FPT có thời gian f(k)n^c với c độc lập tham số k; n^k chỉ là dạng XP và có thể kém khi k tăng. Xấp xỉ đổi mục tiêu thành chất lượng có cận, còn heuristic không tự có bảo đảm ấy. SAT hoặc ILP chuyển công việc tìm kiếm cho bộ giải với nhiều kỹ thuật cắt tỉa; thành công thực tế vẫn cần kiểm nghiệm và không chứng minh thuật toán đa thức trên mọi trường hợp.

Nguồn: [erickson-algorithms](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Fast Exponential Algorithms notes; Approximation Algorithms notes; Ch. 12 NP-Hardness

## CS-21 — Nền tảng ngôn ngữ lập trình

Môn học giải thích những cơ chế chung nằm sau các ngôn ngữ lập trình mà người học đã sử dụng: cách mã nguồn thành cấu trúc, cách tên được gắn với dữ liệu, cách lời gọi giữ môi trường và cách giá trị được quản lý trong khi chạy. Một bộ thông dịch nhỏ đóng vai trò mô hình xuyên suốt để nối cú pháp, đánh giá, scope, closure, trạng thái và lỗi. So sánh C++ với những ngôn ngữ động hoặc hàm giúp nhận ra các quyết định thiết kế có thể khác nhau, thay vì coi hành vi của ngôn ngữ quen thuộc là quy luật chung. Hệ thống kiểu được đặt bên cạnh ngữ nghĩa để hiểu kiểm tra tĩnh, suy luận và ý nghĩa giới hạn của an toàn kiểu. Phần cuối kết nối AST với các kiến trúc thực thi và nguyên lý thu gom rác. Đây là nền tảng về cơ chế ngôn ngữ, chưa thay khóa trình biên dịch hoàn chỉnh hoặc chứng minh hình thức cho mọi tính năng của một ngôn ngữ công nghiệp.

Điều kiện đầu vào: object-oriented-programming (required): Cần kinh nghiệm với một ngôn ngữ biên dịch tĩnh (C++) để đối chiếu các cơ chế ngôn ngữ.; data-structures (required): Cần cấu trúc cây (AST), bảng băm (bảng ký hiệu/môi trường) và ngăn xếp.; formal-languages-computability (recommended): Văn phạm phi ngữ cảnh (CFG) giúp hiểu rõ quá trình phân tích cú pháp (parsing).

### Cú pháp bề mặt, Cây cú pháp trừu tượng (AST) và thứ tự đánh giá biểu thức

Một chương trình có nhiều cách viết bề mặt nhưng cần một cấu trúc rõ để xác định ý nghĩa. Chương này tách ký tự, token và cây cú pháp, rồi nghiên cứu cách một biểu thức được đánh giá thành giá trị hoặc tác động trạng thái. Ưu tiên toán tử quyết định cách nhóm, còn thứ tự đánh giá quyết định phần nào được tính trước; hai khái niệm không được đồng nhất. Các chiến lược háo hức, trì hoãn và đoản mạch được đối chiếu qua biểu thức có lỗi, tác dụng phụ hoặc không kết thúc.

#### Token, văn phạm và cây cú pháp trừu tượng — core

Phân tích từ vựng nhóm ký tự thành token như tên, số và dấu toán tử; phân tích cú pháp dùng văn phạm để xác định quan hệ giữa các token. AST giữ cấu trúc có ý nghĩa cho các bước sau, có thể bỏ dấu ngoặc hoặc dấu phân cách đã được phản ánh bằng quan hệ cây. Trong 1+2*3, ưu tiên tạo nút cộng có con phải là phép nhân. Dòng và vị trí nguồn vẫn cần được giữ để báo lỗi rõ; lỗi token và lỗi cấu trúc thuộc hai giai đoạn khác nhau.

Nguồn: [crafting-interpreters](https://craftinginterpreters.com/contents.html) — Ch. 4 Scanning; Ch. 5 Representing Code; Ch. 6 Parsing Expressions

#### Biểu thức, câu lệnh và quy tắc đánh giá — core

Biểu thức thường được đánh giá để tạo giá trị, còn câu lệnh tổ chức hiệu ứng và luồng điều khiển; ranh giới cụ thể phụ thuộc ngôn ngữ. Một quy tắc đánh giá cần nêu môi trường hiện tại, giá trị toán hạng và kết quả, chẳng hạn phép cộng chỉ chấp nhận các kiểu phù hợp trong ngôn ngữ đang xét. Big-step mô tả kết quả hoàn tất; small-step mô tả từng biến đổi nên thể hiện được diễn tiến trước khi dừng hoặc bị kẹt. Cả hai là mô hình ngữ nghĩa, không phải ảnh chụp mọi chi tiết CPU.

Nguồn: [composing-programs](https://composingprograms.com/pages/) — Version 2 (/pages/): §1.2; §1.5; §3.4

Nguồn: [crafting-interpreters](https://craftinginterpreters.com/contents.html) — Ch. 7 Evaluating Expressions; Ch. 8 Statements and State

Nguồn: [cornell-cs6110-2011](https://www.cs.cornell.edu/courses/cs6110/2011sp/lectures/lecture26.pdf) — Lecture 26 §1: Operational Perspective

#### Thứ tự đánh giá, trì hoãn và đoản mạch — core

Đánh giá háo hức tính đối số trước khi áp dụng hàm; normal-order ở mô hình lambda chọn phép rút gọn ngoài cùng trước, có thể tránh một đối số không bao giờ dùng. Call-by-need lưu kết quả đối số trì hoãn để không tính lại, nên không chỉ là tên khác của normal-order. Khi có tác dụng phụ hoặc ngoại lệ, khác biệt thứ tự trở nên quan sát được. Đoản mạch của and/or là quy tắc riêng chỉ đánh giá toán hạng sau khi cần; không thể triển khai như hàm háo hức thông thường mà vẫn giữ hành vi.

Nguồn: [composing-programs](https://composingprograms.com/pages/) — Version 2 (/pages/): §1.5 Control; §3.5 Interpreters for Languages with Abstraction

Nguồn: [crafting-interpreters](https://craftinginterpreters.com/contents.html) — Ch. 9 Control Flow: Logical Operators

Nguồn: [sicp-comparison](https://sicp.sourceacademy.org/) — §1.1.5 The Substitution Model — Applicative order versus normal order; §4.2.2 An Interpreter with Lazy Evaluation — memoized thunks

### Mô hình môi trường, tầm vực tĩnh (Lexical Scope) và Bao đóng (Closures)

Tên biến không tự chứa giá trị; ý nghĩa của nó phụ thuộc cách ngôn ngữ liên kết tên với nơi lưu hoặc đối tượng. Chương này dùng khung môi trường để mô tả lời gọi, tra cứu tên và che khuất, rồi xây lexical scope và closure. Tầm vực được phân biệt với thời gian sống: một biến ra khỏi khối cú pháp không buộc dữ liệu mà closure giữ phải biến mất. Các ví dụ hàm trả về hàm tạo cầu nối từ mã nguồn quen thuộc sang cơ chế chạy của hàm bậc cao.

#### Khung môi trường, che khuất và nơi lưu — core

Một môi trường ánh xạ tên tới liên kết; trong mô hình có biến khả biến, liên kết có thể trỏ tới một vị trí trong kho lưu trữ, còn kho ánh xạ vị trí tới giá trị. Tách hai tầng giải thích vì sao phép gán thay giá trị mà không nhất thiết tạo một biến mới. Khung lời gọi có tham số và biến cục bộ cùng liên kết đến môi trường ngoài. Tên cục bộ có thể che tên ngoài, nhưng khai báo mới, gán lại và thay đổi đối tượng đang trỏ tới là ba thao tác có ý nghĩa khác nhau.

Nguồn: [composing-programs](https://composingprograms.com/pages/) — Version 2 (/pages/): §1.3.1 Environments; §1.6 Higher-Order Functions

Nguồn: [crafting-interpreters](https://craftinginterpreters.com/contents.html) — Ch. 8 Statements and State: Environments

#### Tầm vực tĩnh và tầm vực động — core

Lexical scope tra tên theo các vùng định nghĩa trong mã nguồn và môi trường nơi hàm được tạo; dynamic scope tìm theo chuỗi các lời gọi đang hoạt động. Một hàm được gọi từ nơi có biến cùng tên vì vậy có thể cho kết quả khác dưới hai chính sách. Độ sâu tra cứu theo lexical scope có thể được xác định ở bước phân giải tên trước khi chạy. Tầm vực nói vị trí mã nào dùng được một liên kết, còn thời gian sống nói lúc nào liên kết hoặc vùng lưu vẫn tồn tại trong quá trình thực thi.

Nguồn: [composing-programs](https://composingprograms.com/pages/) — Version 2 (/pages/): §1.6 Higher-Order Functions; §3.5

Nguồn: [crafting-interpreters](https://craftinginterpreters.com/contents.html) — Ch. 11 Resolving and Binding: Static Scope

#### Closure và hàm bậc cao — core

Hàm bậc cao nhận hàm làm đối số hoặc trả hàm làm kết quả. Closure ghép phần mã hàm với môi trường cần cho các tên tự do của nó, nên hàm có thể tiếp tục sử dụng dữ liệu từ lần gọi đã kết thúc. Hai lần gọi hàm tạo bộ đếm có thể sinh hai môi trường độc lập; hai closure tạo cùng lần gọi có thể chia sẻ một vị trí khả biến. Cách chụp theo giá trị, theo tham chiếu hay giữ liên kết là lựa chọn của ngôn ngữ, cần phân tích riêng thay vì áp mọi hành vi Python cho lambda C++.

Nguồn: [composing-programs](https://composingprograms.com/pages/) — Version 2 (/pages/): §1.6.1 Functions as Arguments; §1.6.5 Functions as Returned Values; §3.5

Nguồn: [crafting-interpreters](https://craftinginterpreters.com/contents.html) — Ch. 10 Functions: Local Functions and Closures

### Trạng thái khả biến, tính bất biến và Hệ thống kiểu dữ liệu

Trạng thái khả biến làm hành vi một đoạn mã phụ thuộc lịch sử và cách các tên chia sẻ đối tượng. Chương này bắt đầu từ định danh, bằng nhau và alias để giải thích lợi ích cũng như giới hạn của dữ liệu bất biến. Sau đó hệ thống kiểu được giới thiệu như các quy tắc dự đoán những thao tác nào hợp lệ trước hoặc trong khi chạy. An toàn kiểu là thuộc tính giữa quy tắc kiểu và ngữ nghĩa đánh giá của một mô hình, không phải lời hứa chương trình đúng mọi yêu cầu nghiệp vụ.

#### Alias, định danh và dữ liệu bất biến — core

Hai tên có thể trỏ cùng một đối tượng, gọi là alias; sửa đối tượng qua một tên có thể được quan sát qua tên còn lại. Bằng nhau so sánh nội dung theo định nghĩa của kiểu, còn đồng nhất hỏi có phải cùng đối tượng hay không. Sao chép nông tạo vỏ mới nhưng có thể vẫn chia sẻ đối tượng con. Bất biến ngăn thay đổi một giá trị sau khi tạo, cho phép chia sẻ cấu trúc an toàn hơn; tuy nhiên một vỏ không đổi chứa tham chiếu tới dữ liệu đổi được chưa phải bất biến sâu.

Nguồn: [composing-programs](https://composingprograms.com/pages/) — Version 2 (/pages/): §2.4 Mutable Data: Identity; Mutation; Lists and Dictionaries

Nguồn: [crafting-interpreters](https://craftinginterpreters.com/contents.html) — Ch. 8 Statements and State

#### Kiểm tra kiểu tĩnh, kiểu động và suy luận — core

Kiểm tra kiểu tĩnh suy ra hoặc kiểm các phán đoán kiểu trước khi thực thi, còn kiểm tra động xét kiểu giá trị tại thao tác khi chạy. Ngôn ngữ có thể kết hợp hai cơ chế; không khai báo kiểu không tự có nghĩa là kiểu động vì kiểu có thể được suy luận. Suy luận kiểu xây ràng buộc từ cấu trúc biểu thức rồi giải chúng trong một hệ quy tắc cụ thể. Các từ mạnh hoặc yếu được dùng không thống nhất, nên cần nói rõ phép ép kiểu, kiểm tra và lỗi nào thực sự được cho phép.

Nguồn: [crafting-interpreters](https://craftinginterpreters.com/contents.html) — Ch. 7 Evaluating Expressions: Design Note Static and Dynamic Typing

Nguồn: [cornell-cs6110-2011](https://www.cs.cornell.edu/courses/cs6110/2011sp/lectures/lecture26.pdf) — Lecture 26: typing judgments and operational soundness

#### An toàn kiểu, tiến triển và bảo toàn — core

Trong mô hình ngôn ngữ nhỏ đã xác định quy tắc, tiến triển nói biểu thức đóng có kiểu hoặc đã là giá trị hoặc còn thực hiện được một bước. Bảo toàn nói bước đánh giá giữ tính có kiểu thích hợp. Kết hợp hai điều kiện ngăn chương trình có kiểu rơi vào trạng thái bị kẹt do thiếu quy tắc đánh giá. Kết luận này không bảo đảm dừng, tránh mọi ngoại lệ hay thỏa đặc tả ứng dụng. Với tham chiếu và bộ nhớ, phát biểu phải được mở rộng cho kiểu của kho lưu trữ; không tự áp định lý ngôn ngữ nhỏ cho toàn bộ C++.

Nguồn: [cornell-cs6110-2011](https://www.cs.cornell.edu/courses/cs6110/2011sp/lectures/lecture26.pdf) — Lecture 26 §1: Lemma 2 Type Preservation; Lemma 3 Progress

#### Đa hình tham số và giới hạn so sánh ngôn ngữ — extension

Đa hình tham số cho một định nghĩa hoạt động đồng đều trên nhiều kiểu, ví dụ hàm trả lại đối số cùng kiểu đã nhận. Ràng buộc kiểu có thể chỉ yêu cầu những phép toán cụ thể như so sánh hoặc sao chép. Đa hình do nạp chồng chọn cách thực hiện theo kiểu là cơ chế khác. Template C++ có thể dùng chuyên biệt hóa và các phép phụ thuộc kiểu, nên không mặc nhiên mang mọi định lý đồng đều của đa hình tham số thuần. Mức này phân biệt mục đích và cơ chế; hệ suy luận đa hình đầy đủ được dành cho phần ngôn ngữ nâng cao.

Nguồn: [learncpp](https://www.learncpp.com/) — Function templates; Class templates; Template specialization

Nguồn: [cornell-cs6110-2011](https://www.cs.cornell.edu/courses/cs6110/2011sp/lectures/lecture26.pdf) — Lecture 26: typed functions and preservation

### Kiến trúc bộ thông dịch (Tree-Walk Interpreter) và quản lý bộ nhớ tự động

Thông dịch là nơi các khái niệm cú pháp, môi trường, giá trị và luồng điều khiển được ghép thành một chương trình có thể chạy. Chương này nghiên cứu bộ thông dịch đi trên AST để thấy rõ cơ chế trước khi so sánh với máy bytecode, biên dịch và JIT. Việc tạo môi trường và đối tượng mới dẫn tới nhu cầu xác định dữ liệu nào còn sống. Đếm tham chiếu và tracing được đối chiếu theo thông tin chúng dùng để thu hồi bộ nhớ, đồng thời tách việc thu hồi bộ nhớ khỏi quản lý tài nguyên bên ngoài.

#### Eval–Apply và biểu diễn giá trị — core

Eval phân tích dạng AST để tính biểu thức trong một môi trường; Apply nhận hàm và các đối số rồi thực hiện phép nguyên thủy hoặc đánh giá thân trong khung mới. Giá trị lúc chạy cần biểu diễn đủ loại số, Boolean, chuỗi, hàm và đối tượng của ngôn ngữ, có thể qua kiểu có thẻ hoặc đối tượng của ngôn ngữ chủ. Một lỗi kiểu trong chương trình khách phải được chuyển thành lỗi của ngôn ngữ khách, thay vì vô tình làm lộ ngoại lệ hoặc quy tắc ép kiểu của ngôn ngữ cài đặt.

Nguồn: [composing-programs](https://composingprograms.com/pages/) — Version 2 (/pages/): §3.4 Interpreters for Languages with Combination; §3.5 Interpreters for Languages with Abstraction

Nguồn: [crafting-interpreters](https://craftinginterpreters.com/contents.html) — Ch. 7 Evaluating Expressions; Ch. 10 Functions; Ch. 18 Types of Values

#### Luồng điều khiển và các kiến trúc thực thi — core

Câu lệnh điều kiện và vòng lặp quyết định AST nào được đánh giá tiếp; return phải thoát đúng lời gọi hàm đang thực hiện dù nằm trong nhiều khối lồng nhau. Bộ thông dịch có thể dùng một tín hiệu điều khiển riêng hoặc ngoại lệ nội bộ để truyền việc thoát ấy. Biên dịch chuyển chương trình sang biểu diễn khác, còn thông dịch thực thi một biểu diễn; hai cơ chế có thể kết hợp trong máy bytecode hoặc JIT. Vì vậy gọi một ngôn ngữ là biên dịch hay thông dịch chỉ là mô tả cách triển khai thường gặp, không phải bản chất duy nhất của ngôn ngữ.

Nguồn: [crafting-interpreters](https://craftinginterpreters.com/contents.html) — Ch. 2 A Map of the Territory; Ch. 9 Control Flow; Ch. 10 Functions: Return Statements

Nguồn: [composing-programs](https://composingprograms.com/pages/) — Version 2 (/pages/): §3.3 Exceptions; §3.5

#### Đếm tham chiếu, tracing và tập gốc — core

Đếm tham chiếu thu hồi đối tượng khi không còn tham chiếu sở hữu, nhưng chu trình có thể giữ số đếm dương dù không còn đường từ chương trình tới chúng. Mark-and-sweep bắt đầu từ tập gốc như biến toàn cục, ngăn xếp và môi trường đang sống, đánh dấu mọi đối tượng khả đạt rồi quét thu hồi phần không đánh dấu. Tập gốc thiếu một liên kết sống có thể làm thu hồi nhầm dữ liệu. GC xử lý bộ nhớ không còn khả đạt, không tự bảo đảm đóng file hoặc giải phóng khóa đúng thời điểm; các tài nguyên ấy cần chính sách riêng.

Nguồn: [crafting-interpreters](https://craftinginterpreters.com/contents.html) — Ch. 26 Garbage Collection: Reachability; Marking the Roots; Sweeping Unused Objects

Nguồn: [composing-programs](https://composingprograms.com/pages/) — Version 2 (/pages/): §2.9 Recursive Objects: Garbage Collection

## CS-22 — Logic số và tổ chức máy

Logic số nghiên cứu cách biểu diễn và biến đổi thông tin bằng các trạng thái rời rạc. Một bit không tự mang ý nghĩa số nguyên, ký tự hay lệnh: ý nghĩa xuất hiện khi một quy ước giải mã được áp dụng cho dãy bit. Từ phân biệt ấy, môn học xây dựng lần lượt biểu diễn dữ liệu, cổng logic, mạch tổ hợp và mạch có trạng thái. Đích đến là giải thích được vì sao một máy gồm các khối đơn giản lại thực hiện được phép cộng, lưu kết quả và chọn câu lệnh kế tiếp.

Mạch CPU Hack của Nand2Tetris là mô hình xuyên suốt vì đặc tả đủ nhỏ để theo dõi từng dây điều khiển. Biểu diễn dấu chấm động và ký tự được bổ sung để nối mô hình với dữ liệu trong chương trình C++. Người học phân biệt đặc tả chức năng với cách chế tạo transistor, và phân biệt CPU mô hình với CPU thương mại. Độ trễ, xung nhịp và tín hiệu trạng thái được giải thích trước khi dùng chúng để mô tả chu trình lệnh; cache, pipeline, đặc quyền và bộ nhớ ảo dành cho môn Kiến trúc máy tính tiếp theo.

Điều kiện đầu vào: discrete-math (required): Cần đại số Boolean, bảng chân trị và hệ đếm/số học nhị phân.; intro-programming (required): Cần hiểu khái niệm biến, địa chỉ và câu lệnh điều khiển để đối chiếu với thanh ghi và lệnh máy.

### Biểu diễn bit, số nguyên, dấu chấm động và ký tự

Cùng một byte có thể được đọc như số không dấu, một phần của số có dấu hoặc một đơn vị mã hóa văn bản. Chương mở đầu đặt quy ước biểu diễn trước các phép toán, từ hệ đếm theo vị trí đến bù hai và dấu chấm động. Nhờ đó, kết quả của phép cộng trong mạch được phân biệt với quy tắc của ngôn ngữ lập trình, còn số lượng byte của một chuỗi được phân biệt với số ký tự người dùng nhìn thấy.

#### Hệ đếm theo vị trí và độ rộng biểu diễn — core

Với n bit, có 2^n mẫu bit khác nhau. Quy ước số nguyên không dấu gán trọng số 2^i cho bit ở vị trí i, nên miền giá trị là 0 đến 2^n−1. Ví dụ 1011₂ bằng 8+2+1=11; dạng thập lục phân gom bốn bit thành một chữ số để đọc địa chỉ dễ hơn, không tạo ra dữ liệu mới. Byte trong các nền tảng đang xét gồm tám bit; KiB bằng 1024 byte, còn kB theo SI bằng 1000 byte.

Độ rộng là một phần của bài toán: mẫu 1111 có thể là 15 với bốn bit không dấu nhưng chưa đủ để kết luận giá trị có dấu. Thứ tự byte trong bộ nhớ, gọi là endianness, chỉ quy định cách sắp byte của một giá trị nhiều byte; nó không đảo thứ tự các chữ số khi viết số. Giao thức và định dạng tệp cần quy ước riêng để hai máy đọc cùng giá trị.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — Number Representation; IEC and Base-10 Prefixes

#### Bù hai, mở rộng dấu và tràn số — core

Trong bù hai n bit, bit cao nhất có trọng số −2^(n−1), các bit còn lại giữ trọng số dương. Miền giá trị là −2^(n−1) đến 2^(n−1)−1, nên bốn bit 1111 biểu diễn −1. Đảo bit rồi cộng một tạo số đối theo modulo 2^n; riêng giá trị âm nhỏ nhất không có số đối dương cùng độ rộng. Mở rộng dấu lặp bit cao nhất để giữ nguyên giá trị khi tăng độ rộng.

Mạch cộng n bit chỉ giữ n bit thấp và có thể cung cấp carry ra ngoài. Carry của cộng không dấu khác overflow của cộng có dấu: hai số dương tạo kết quả âm là một dấu hiệu overflow có dấu. Quy tắc phần cứng không cấp phép bỏ qua ngôn ngữ: trong C++, cộng unsigned cuộn theo modulo độ rộng, còn tràn signed là hành vi không xác định. Phân biệt này ngăn việc dùng thử nghiệm một CPU để chứng minh mã C++ luôn cuộn vòng.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — Number Representation: signed integers and arithmetic

#### IEEE 754, sai số và mã hóa văn bản — core

Dấu chấm động nhị phân tách dấu, số mũ và phần trị để đổi độ chính xác lấy miền giá trị rộng. Với binary32 chuẩn hóa, giá trị có dạng (−1)^s × 1.f × 2^(e−127); trường mũ đặc biệt dành cho zero, số dưới chuẩn, vô cực và NaN nên không áp dụng công thức ấy cho mọi mẫu bit. Làm tròn khiến 0.1 thường không được lưu chính xác; cộng không còn kết hợp trong mọi trường hợp. So sánh gần đúng cần sai số tuyệt đối, tương đối và miền bài toán, không một epsilon chung cho mọi dữ liệu.

Văn bản dùng quy ước khác: Unicode gán code point, còn UTF-8 mã hóa một code point bằng một đến bốn byte. Một ký tự nhìn thấy có thể gồm nhiều code point, chẳng hạn chữ và dấu kết hợp. Vì vậy độ dài byte của std::string không đương nhiên là số ký tự, và cắt theo byte có thể phá một chuỗi UTF-8. Các ví dụ ở đây nhằm phân biệt lớp biểu diễn, chưa xây dựng bộ xử lý ngôn ngữ tự nhiên.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — Floating Point

Nguồn: [dive-into-systems](https://diveintosystems.org/book/) — Chapter 4: Binary and Data Representation, character and floating-point representations

### Đại số Boolean, mạch tổ hợp và ALU

Mạch tổ hợp xác định đầu ra từ đầu vào hiện tại sau một độ trễ lan truyền; nó không có trạng thái được lưu qua xung nhịp. Chương nối biểu thức Boolean với bảng chân trị rồi với kết nối cổng, để việc thiết kế mạch trở thành một lập luận kiểm tra được. Các khối chọn dữ liệu, cộng nhị phân và xử lý từng bit được ghép thành ALU; tín hiệu điều khiển quyết định phép biến đổi nào xuất hiện ở đầu ra.

#### Cổng logic, bảng chân trị và biểu thức tương đương — core

AND chỉ cho ra 1 khi cả hai đầu vào là 1, OR khi ít nhất một đầu vào là 1, còn NOT đảo giá trị. Bảng chân trị liệt kê mọi tổ hợp đầu vào nên là đặc tả đầy đủ cho một hàm Boolean hữu hạn. Từ các hàng đầu ra bằng 1 có thể lập tổng các tích, rồi rút gọn bằng các đồng nhất thức như De Morgan. Hai biểu thức tương đương về logic có thể khác số cổng, độ trễ và số dây; đúng chức năng chưa đồng nghĩa tối ưu vật lý. NAND là một cơ sở đầy đủ: nối các đầu vào với nhau tạo NOT, rồi ghép để tạo AND và OR.

Nguồn: [nand2tetris](https://www.nand2tetris.org/course) — Project 1: elementary gates, NAND implementation contract

#### Chọn và định tuyến dữ liệu bằng Mux, DMux và bus — core

Multiplexer chọn một trong nhiều đầu vào theo bit chọn; với hai ngõ, out = (¬s ∧ a) ∨ (s ∧ b). Demultiplexer đưa một đầu vào đến ngõ ra được chọn và đặt các ngõ khác về 0. Bus chỉ là nhóm dây được quy ước cùng đại diện một giá trị nhiều bit; việc chọn bus áp dụng phép chọn cho từng bit cùng một tín hiệu điều khiển. Khi ghép Mux nhiều tầng, thứ tự các bit chọn phải khớp đặc tả. Một đường chọn đảo sai có thể cho kết quả đúng ở vài dữ liệu trùng nhau nhưng sai về toàn bộ chức năng.

Nguồn: [nand2tetris](https://www.nand2tetris.org/course) — Project 1: Mux, DMux, Mux16, Mux4Way16, DMux4Way

#### Mạch cộng và khối số học–logic có điều khiển — core

Half-adder cộng hai bit bằng sum = a XOR b và carry = a AND b. Full-adder nhận thêm carry vào; nối carry giữa các vị trí tạo bộ cộng nhiều bit. Ripple carry đơn giản nhưng đường truyền carry dài làm tăng độ trễ. ALU ghép cộng với phép AND và các bước biến đổi đầu vào, sau đó tạo cờ zero hoặc negative từ kết quả. Trong Hack, các bit điều khiển zero, negate, chọn phép toán và đảo đầu ra cho nhiều hàm từ cùng một phần cứng. Cờ negative ở đây chỉ là bit cao nhất; ý nghĩa số học của nó phụ thuộc quy ước có dấu và việc có tràn hay không.

Nguồn: [nand2tetris](https://www.nand2tetris.org/course) — Project 2: HalfAdder, FullAdder, Add16, Inc16, ALU specification

### Xung nhịp, mạch tuần tự, thanh ghi và RAM

Khả năng lưu trạng thái là điểm khác biệt giữa một máy tính và một mạng cổng chỉ biến đổi tức thời dữ liệu. Chương dùng phần tử lưu một bit làm nền để xây thanh ghi, bộ đếm chương trình và bộ nhớ có địa chỉ. Mô hình thời gian được nêu rõ: đầu ra của mạch tổ hợp cần ổn định trước khi được phần tử trạng thái chốt lại; nhờ đó có thể suy luận trạng thái ở từng chu kỳ thay vì tưởng tượng mọi dây thay đổi đồng thời không có độ trễ.

#### Trạng thái hiện tại, trạng thái kế tiếp và xung nhịp — core

Một phần tử D flip-flop lưu bit từ đầu vào D tại sự kiện xung nhịp được quy định rồi duy trì đầu ra giữa các lần cập nhật. Mạch tuần tự vì thế được mô tả bằng trạng thái hiện tại và hàm tạo trạng thái kế tiếp. Mô hình lý tưởng trong HDL bỏ qua nhiều chi tiết điện, nhưng mạch vật lý cần thời gian setup và hold quanh cạnh chốt. Đường tổ hợp dài nhất cùng các độ trễ liên quan giới hạn chu kỳ tối thiểu. Tăng tần số tùy ý có thể chốt dữ liệu chưa ổn định; xung nhịp không tự làm một phép toán tổ hợp nhanh hơn.

Nguồn: [nand2tetris](https://www.nand2tetris.org/course) — Project 3: DFF and clocked chips

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — Synchronous Digital Systems

#### Thanh ghi có nạp và bộ đếm chương trình — core

Thanh ghi n bit ghép n phần tử lưu và dùng Mux chọn dữ liệu mới hoặc chính dữ liệu cũ. Khi load bằng 0, trạng thái được giữ; khi load bằng 1, dữ liệu vào được ghi ở thời điểm chốt. Bộ đếm chương trình thêm các khả năng tăng một, nạp đích nhảy và reset. Nếu nhiều tín hiệu cùng bật, thứ tự ưu tiên là một phần của đặc tả, không được suy đoán từ tên tín hiệu. Theo dõi PC trước và sau mỗi cạnh xung giải thích được vì sao một lệnh nhảy thay đổi lần lấy lệnh tiếp theo nhưng không quay ngược thời gian của lệnh đang thực hiện.

Nguồn: [nand2tetris](https://www.nand2tetris.org/course) — Project 3: Bit, Register, PC specifications

#### Bộ nhớ có địa chỉ và giới hạn mô hình RAM — core

Bộ nhớ RAM mô hình nhận địa chỉ để chọn một từ dữ liệu; đọc chọn đầu ra, còn ghi kết hợp địa chỉ với tín hiệu load. Cây Mux và DMux cho thấy cách ghép nhiều khối nhỏ thành khối lớn và vì sao k bit địa chỉ chọn được 2^k từ. Dung lượng byte còn phụ thuộc số bit mỗi từ. Mô hình RAM bằng thanh ghi phục vụ lập luận logic, không mô tả chính xác DRAM vật lý với ô tụ điện, làm tươi và tổ chức hàng/cột. Quy tắc đọc hoặc ghi đồng thời cùng địa chỉ cũng phụ thuộc giao diện bộ nhớ cụ thể, không có một hành vi chung cho mọi thiết bị.

Nguồn: [nand2tetris](https://www.nand2tetris.org/course) — Project 3: RAM8 through RAM16K

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — Synchronous Digital Systems: state elements

### Datapath, điều khiển và chu trình lệnh CPU mô hình

CPU phối hợp các khối đã biết thay vì cần một loại phép màu mới. Thanh ghi giữ toán hạng và địa chỉ; ALU tính kết quả; bộ điều khiển giải mã bit lệnh thành tín hiệu chọn và ghi. Chương đi qua một chu trình lấy, giải mã và thực hiện lệnh trên Hack, rồi nối CPU với bộ nhớ và thiết bị ánh xạ địa chỉ. Việc tách đường dữ liệu khỏi điều khiển giúp xác định chính xác một lệnh cần những tài nguyên nào và cập nhật trạng thái nào.

#### Lệnh máy và tín hiệu điều khiển — core

Lệnh máy là một mẫu bit được ISA quy định ý nghĩa. Trong Hack, A-instruction nạp hằng địa chỉ vào thanh ghi A; C-instruction chọn phép tính, nơi nhận kết quả và điều kiện nhảy. Các trường ấy được giải mã thành tín hiệu cho ALU, Mux, thanh ghi và đường ghi RAM. Cùng một kết quả ALU có thể được ghi vào nhiều đích nếu đặc tả cho phép. Assembly là cách đặt tên dễ đọc cho mẫu bit, còn biến và vòng lặp bậc cao phải được chuyển thành chuỗi lệnh cùng các quy ước lưu trữ; CPU không tự biết khái niệm biến C++.

Nguồn: [nand2tetris](https://www.nand2tetris.org/course) — Project 4: Hack machine language; Project 5: CPU contract

#### Theo dõi lấy lệnh, tính toán và nhảy — core

PC chọn lệnh từ bộ nhớ chương trình; các bit lệnh cùng trạng thái thanh ghi xác định dữ liệu tổ hợp và tín hiệu cập nhật ở chu kỳ đó. Với lệnh cộng rồi lưu, cần chỉ rõ toán hạng đến từ đâu, ALU làm gì, đích nào nhận kết quả và PC kế tiếp là gì. Với nhảy có điều kiện, cờ zero hoặc negative kết hợp trường jump quyết định nạp đích hay tăng PC. Mô hình này dùng cấu trúc và thời gian của Hack; một CPU pipeline hoặc CPU có lệnh dài nhiều chu kỳ sẽ chia công việc khác dù vẫn thực hiện cùng trừu tượng lệnh.

Nguồn: [nand2tetris](https://www.nand2tetris.org/course) — Project 5: CPU, Computer and supplied Add/Max tests

#### Bản đồ địa chỉ và ghép thành máy tính — core

Bản đồ bộ nhớ chia miền địa chỉ cho RAM thông thường, màn hình và bàn phím trong Hack. Bộ giải mã địa chỉ chọn thiết bị nhận thao tác; ghi vào địa chỉ màn hình thay đổi trạng thái được bộ hiển thị diễn giải thành điểm ảnh. Đây là ví dụ I/O ánh xạ bộ nhớ, không có nghĩa mọi địa chỉ là một ô DRAM. Ghép CPU, ROM lệnh và bộ nhớ dữ liệu thành máy hoàn chỉnh cho phép giải thích chương trình từ mã lệnh đến thay đổi hiển thị. Mô hình chưa có tiến trình, quyền truy cập hay bộ nhớ ảo; các cơ chế đó cần hỗ trợ bổ sung của phần cứng và hệ điều hành.

Nguồn: [nand2tetris](https://www.nand2tetris.org/course) — Project 5: Memory and Computer; Screen and Keyboard mapping

## CS-23 — Kiến trúc máy tính

Kiến trúc máy tính nối chương trình đã biên dịch với phần cứng thực thi nó. ISA quy định trạng thái và hành vi nhìn thấy bởi phần mềm, còn vi kiến trúc quyết định cách thực hiện bằng datapath, pipeline và bộ nhớ đệm. Hai bộ xử lý có thể chạy cùng một mã máy nhưng khác độ trễ, mức song song và tiêu thụ năng lượng. Môn học dùng RISC-V làm tập lệnh minh họa, để các quyết định về địa chỉ, lời gọi hàm và truy cập bộ nhớ có một đặc tả cụ thể thay vì chỉ tồn tại như sơ đồ chung.

Sau đường đi của một lệnh, nội dung mở rộng sang nhiều lệnh chồng lấp và nhiều tầng bộ nhớ. Hiệu năng được phân tích bằng số lệnh, CPI, chu kỳ, locality và tỷ lệ cache miss; mỗi công thức đi cùng giả định của mô hình. Phần cuối giới thiệu phần cứng hỗ trợ bộ nhớ ảo, I/O và đa lõi để chuẩn bị cho lập trình hệ thống và hệ điều hành. Mục tiêu là giải thích được một chương trình bị giới hạn ở đâu, thay vì mặc định tăng xung nhịp hoặc tăng số lõi luôn giải quyết được vấn đề.

Điều kiện đầu vào: digital-logic-computer-organization (required): Cần nắm vững biểu diễn số, mạch tuần tự, thanh ghi, ALU và datapath đơn chu kỳ.; cpp-memory-model (required): Cần hiểu con trỏ, mảng, struct alignment và khung ngăn xếp ở mức ngôn ngữ C/C++.

### ISA RISC-V và quy ước gọi hàm

Một chương trình ở mức máy cần thống nhất cách biểu diễn lệnh, cách xác định toán hạng và cách các hàm phối hợp mà không biết mã nguồn của nhau. Chương phân biệt hợp đồng ISA với hợp đồng ABI, từ lệnh tính toán và load/store đến nhảy, địa chỉ trả về và stack frame. Theo dõi một lời gọi lồng nhau cho thấy vì sao chỉ biết ý nghĩa từng lệnh vẫn chưa đủ để viết một hàm có thể liên kết an toàn với thư viện.

#### Trạng thái kiến trúc và mã hóa lệnh — core

ISA mô tả thanh ghi, PC, lệnh, kiểu địa chỉ và các ngoại lệ mà chương trình quan sát được. Với RV32I, thanh ghi nguyên rộng 32 bit và x0 luôn đọc là zero; load/store di chuyển dữ liệu giữa thanh ghi và bộ nhớ còn phép số học chủ yếu tác động trên thanh ghi. Các định dạng R, I, S, B, U, J phân chia bit cho opcode, thanh ghi và immediate. Độ rộng trường giới hạn miền hằng hoặc độ xa nhảy, nên một pseudo-instruction của assembler có thể cần nhiều lệnh thật. Không suy ra số lệnh thực từ số dòng assembly có pseudo-instruction.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — RISC-V; RISC-V Instruction Formats

#### Địa chỉ, load/store và điều khiển luồng — core

Địa chỉ hiệu dụng thường được tính từ thanh ghi nền cộng độ dời. Truy cập phần tử mảng cần nhân chỉ số với kích thước phần tử; địa chỉ tăng một byte không có nghĩa luôn sang phần tử tiếp theo. Lệnh load có thể mở rộng dấu hoặc zero tùy loại, trong khi store chỉ ghi phần bit được chỉ định. Branch so sánh toán hạng rồi chọn PC kế tiếp; jump-and-link vừa đổi PC vừa lưu địa chỉ trở về. Kích thước và căn chỉnh truy cập ảnh hưởng tính hợp lệ hoặc chi phí theo nền tảng, vì vậy không lấy một ví dụ truy cập lệch hàng làm quy tắc hiệu năng chung.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — RISC-V: loads, stores, branches and jumps

#### ABI, thanh ghi được bảo toàn và stack frame — core

ABI là thỏa thuận để mã biên dịch độc lập truyền đối số, nhận kết quả và dùng thanh ghi nhất quán. Quy ước RISC-V chia thanh ghi thành nhóm caller-saved và callee-saved; hàm gọi không thể mong nhóm caller-saved giữ nguyên sau một lời gọi khác. Stack frame lưu dữ liệu cần tồn tại qua lời gọi, chẳng hạn thanh ghi phải bảo toàn và địa chỉ trả về khi hàm gọi lồng. Stack pointer phải thỏa căn chỉnh do ABI quy định. Đệ quy tạo nhiều frame cho cùng một hàm; compiler có thể bỏ frame pointer hoặc giữ giá trị trong thanh ghi, nên sơ đồ stack từ mã nguồn chỉ là mô hình có điều kiện.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — CALL: calling convention, stack and nested calls

### Pipeline và các loại xung đột

Pipeline chia công việc xử lý lệnh thành các tầng để nhiều lệnh cùng tiến triển. Lợi ích chủ yếu là thông lượng sau khi đường ống được lấp đầy, chứ không mặc nhiên giảm độ trễ của một lệnh đơn lẻ. Chương dùng mô hình năm tầng để phân tích phụ thuộc dữ liệu, tranh chấp tài nguyên và thay đổi luồng điều khiển. Các giải pháp như forwarding, stall và flush được giải thích bằng dữ liệu nào đã sẵn sàng tại thời điểm nào.

#### Chia tầng và chi phí thực tế của đường ống — core

Mô hình IF–ID–EX–MEM–WB lần lượt lấy lệnh, giải mã/đọc thanh ghi, tính toán, truy cập bộ nhớ và ghi kết quả. Thanh ghi pipeline giữ dữ liệu cùng tín hiệu điều khiển giữa các tầng. Chu kỳ phải đủ cho tầng chậm nhất cộng chi phí thanh ghi pipeline, nên chia tầng không tạo tăng tốc đúng bằng số tầng trong mọi thiết kế. Với luồng dài lý tưởng, CPI có thể gần một; lấp đầy, thoát đường ống và các lần dừng làm CPI thực lớn hơn. Một lệnh vẫn đi qua nhiều tầng, do đó throughput và latency là hai đại lượng khác nhau.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — Pipelining: stages and performance

#### Phụ thuộc dữ liệu, forwarding và stall — core

Data hazard xảy ra khi lệnh cần một kết quả chưa đến nơi mà nó định đọc. Forwarding đưa kết quả từ tầng đã tính xong đến tầng cần dùng, tránh chờ ghi rồi đọc lại register file. Tuy nhiên trong pipeline năm tầng điển hình, dữ liệu load chỉ có sau MEM nên lệnh kế tiếp cần ngay dữ liệu ấy vẫn có thể phải stall. Structural hazard là hai thao tác cần cùng tài nguyên không đủ cổng, như lấy lệnh và đọc dữ liệu trên một bộ nhớ đơn cổng. Việc tách tài nguyên hoặc đổi lịch giải quyết trường hợp này; forwarding không chữa được mọi loại hazard.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — Pipelining: data hazards, forwarding, load-use and structural hazards

#### Nhánh, suy đoán và giữ đúng trạng thái — core

Khi chưa biết nhánh có lấy hay không, CPU chưa chắc lệnh tiếp theo ở đâu. Nó có thể dừng chờ hoặc dự đoán một đường rồi thực hiện trước. Khi dự đoán sai, các lệnh trẻ trên đường sai phải bị hủy trước khi gây hiệu ứng kiến trúc không hợp lệ. Flush vì thế khác stall: flush loại bỏ công việc sai, stall giữ lại công việc đang chờ. Độ sâu pipeline và thời điểm giải quyết nhánh quyết định chi phí sai dự đoán. Lệnh độc lập có thể được sắp lịch lại nhưng phải giữ hành vi chương trình; ngoại lệ và thao tác I/O làm yêu cầu này chặt chẽ hơn việc chỉ giữ kết quả số học cuối.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — Pipelining: control hazards and branch prediction

### Phân cấp bộ nhớ và cache

Bộ nhớ nhanh thường nhỏ và đắt hơn theo mỗi bit, nên hệ thống dùng nhiều tầng thay vì một khối vừa lớn vừa nhanh. Cache khai thác việc chương trình dùng lại dữ liệu gần đây và các địa chỉ gần nhau. Chương mô tả chính xác cách một địa chỉ chọn set và kiểm tra tag, cách đọc hoặc ghi gây hit/miss, rồi nối các cơ chế ấy với cách truy cập mảng và phép đo thời gian. Mô hình cache phải nêu dung lượng, kích thước block và associativity trước khi suy luận.

#### Locality và phân rã địa chỉ — core

Temporal locality là dùng lại cùng dữ liệu trong thời gian gần; spatial locality là dùng các địa chỉ gần nhau. Cache đưa cả block từ tầng dưới lên, nên truy cập tuần tự có thể tận dụng những byte chưa được yêu cầu trực tiếp. Với block và số set là lũy thừa hai, địa chỉ chia thành offset trong block, chỉ số set và tag. Tag xác nhận block nào đang nằm ở vị trí đó; chỉ số giống nhau không có nghĩa cùng dữ liệu. Mảng hai chiều lưu theo hàng thường hưởng lợi khi vòng trong đi theo phần tử liền kề, nhưng kích thước dữ liệu và chính sách cache vẫn ảnh hưởng kết quả.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — Caches: locality, blocks, tag/index/offset

#### Ánh xạ, thay thế và chính sách ghi — core

Direct-mapped chỉ cho một vị trí cho mỗi block, set-associative cho nhiều way trong một set, còn fully-associative cho phép đặt ở bất kỳ dòng nào. Tăng associativity có thể giảm conflict miss nhưng tăng phần cứng tra cứu và có thể thay đổi thời gian hit. Chính sách thay thế chọn nạn nhân trong set khi đầy. Write-through chuyển ghi xuống tầng dưới, thường qua write buffer; write-back đánh dấu dirty rồi đẩy xuống khi cần. Write-allocate là quyết định riêng về việc có nạp block khi ghi miss. Compulsory, capacity và conflict miss giúp giải thích nguyên nhân, không phải ba tín hiệu được CPU tự động báo tách biệt trong mọi phép đo.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — Caches: mapping, replacement, write policies and miss classification

#### AMAT và suy luận hiệu năng có điều kiện — core

Mô hình một tầng có thời gian truy cập trung bình AMAT = hit time + miss rate × miss penalty, khi các đại lượng được định nghĩa nhất quán. Với nhiều tầng, penalty của tầng trên chứa chi phí truy cập tầng dưới và xác suất miss có điều kiện ở đó. CPU có thể chồng lấp nhiều truy cập, nên AMAT không trực tiếp bằng thời gian chạy toàn chương trình. Đo cache cần quan tâm warm-up, kích thước working set, compiler tối ưu và dữ liệu đầu vào. Một phép thử nhanh hơn sau đổi vòng lặp gợi ý tác động locality, nhưng kết luận nguyên nhân cần đối chiếu truy cập và số liệu phù hợp.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — Caches: average memory access time; Performance Programming

### Hỗ trợ bộ nhớ ảo, I/O và song song

Phần cứng ngoài datapath số học quyết định ứng dụng có thể chia sẻ máy tính an toàn và sử dụng thiết bị như thế nào. Chương giới thiệu dịch địa chỉ, TLB, chế độ đặc quyền và ngắt trước khi hệ điều hành nghiên cứu các chính sách sử dụng chúng. Phần hiệu năng nối số lệnh, chu kỳ và phần công việc song song được để đánh giá giới hạn tăng tốc. Những mô hình này giúp phân biệt một nút thắt phần mềm với giới hạn băng thông, độ trễ hoặc phần tuần tự của thuật toán.

#### MMU, TLB và đặc quyền — core

MMU dịch địa chỉ ảo sang địa chỉ vật lý theo bảng trang và kiểm tra quyền truy cập. TLB lưu các bản dịch gần đây, khác cache dữ liệu vốn lưu nội dung các block. TLB miss có thể được giải quyết bằng duyệt bảng trang mà trang dữ liệu vẫn hiện diện; page fault là một sự kiện khác, có thể vì chưa có ánh xạ hợp lệ hoặc vi phạm quyền. Thanh ghi điều khiển và chế độ đặc quyền ngăn ứng dụng tự đặt mọi ánh xạ tùy ý. Môn này tập trung đường đi phần cứng; cách OS cấp trang, chọn trang thay thế và phục hồi thiếu trang thuộc CS25.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — Virtual Memory: page tables, TLB and protection

#### Polling, ngắt và DMA — core

Thiết bị được điều khiển qua giao diện thanh ghi hoặc hàng đợi mà phần mềm truy cập theo quy ước của nền tảng. Polling chủ động đọc trạng thái; interrupt cho phép thiết bị báo sự kiện để CPU chuyển vào trình xử lý. Ngắt có chi phí nên không luôn hiệu quả hơn polling khi sự kiện dày đặc. DMA cho thiết bị chuyển khối dữ liệu tới hoặc từ bộ nhớ mà CPU không phải sao chép từng từ, nhưng CPU vẫn thiết lập thao tác và xử lý hoàn thành. Tính nhất quán cache, thứ tự truy cập và giới hạn quyền DMA cần được giải quyết bởi phần cứng cùng phần mềm; DMA không có nghĩa thiết bị tự do truy cập mọi vùng nhớ an toàn.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — Virtual Memory and system interfaces; Performance Programming: I/O and memory bottlenecks

#### Thời gian CPU, đa lõi và giới hạn Amdahl — core

Thời gian CPU có thể phân tích thành instruction count × CPI × cycle time cho cùng một lần chạy. Tăng tần số chỉ tác động một thành phần và có thể kéo theo thay đổi công suất hoặc thời gian chờ bộ nhớ. Nếu phần f của thời gian ban đầu được tăng tốc S lần, Amdahl cho speedup = 1 / ((1−f)+f/S), với giả định phần còn lại và quy mô bài toán giữ nguyên. Đa lõi cũng chịu chi phí giao tiếp, đồng bộ và tranh chấp băng thông. Cache coherence giúp các lõi thống nhất giá trị của cùng vị trí theo giao thức, nhưng không thay thế quy tắc đồng bộ của ngôn ngữ hoặc làm một chương trình có data race trở nên đúng.

Nguồn: [ucb-cs61c-notes](https://notes.cs61c.org/) — Performance Programming: CPU performance equation, parallelism and Amdahl’s law; Caches

## CS-24 — Linux/Unix và lập trình hệ thống

Lập trình hệ thống làm việc trực tiếp với giao diện mà hệ điều hành cung cấp cho ứng dụng: tạo tiến trình, mở tệp, truyền byte, chờ sự kiện và chia sẻ dữ liệu. Người dùng đã biết shell và Git, nhưng một pipeline trong shell vẫn cần được giải thích bằng tiến trình, file descriptor và các lời gọi hệ thống. Môn này chuyển từ việc dùng công cụ sang hiểu và viết phần mềm vận hành được trên giao diện Unix, dùng Linux làm môi trường cụ thể và C làm ngôn ngữ cầu nối với tài liệu hệ thống.

Nội dung không mặc định biết C vì đã biết C++. Khác biệt về chuỗi, cấp phát và thư viện được đặt trước khi đọc chương trình hệ thống; chuỗi biên dịch–liên kết–nạp chương trình được giải thích trước fork/exec. Các giao diện I/O luôn được trình bày cùng trường hợp kết quả một phần, lỗi và quyền sở hữu tài nguyên. Điều này hình thành thói quen suy luận theo hợp đồng API thay vì chỉ theo đường chạy thành công. Cơ chế bên trong kernel như chuyển ngữ cảnh, lập lịch và bảng trang được đào sâu ở môn Hệ điều hành; ở đây trọng tâm là điều ứng dụng có thể yêu cầu và phải chịu trách nhiệm xử lý.

Điều kiện đầu vào: git-dev-tools (required): Cần nắm vững dòng lệnh shell, đường dẫn và quy trình build cơ bản.; cpp-memory-model (required): Cần hiểu sâu con trỏ, bố cục bộ nhớ và vùng đệm byte.; computer-architecture (required): Cần hiểu chế độ đặc quyền user/kernel, thanh ghi, ngắt và ngăn xếp.

### C cầu nối, biên dịch, liên kết và ELF

Thư viện hệ thống thường mô tả giao diện bằng C dù ứng dụng được viết bằng C++. Chương giải thích những phần cần đọc đúng hợp đồng ấy: vùng đệm và kích thước, con trỏ, chuỗi kết thúc NUL, vòng đời cấp phát và mã lỗi. Sau đó chương nối mã nguồn nhiều tệp với object file, symbol và executable. Sự phân biệt giữa khai báo, định nghĩa, liên kết và nạp chương trình giúp xác định lỗi xuất hiện ở giai đoạn nào trước khi quy mọi lỗi thành lỗi cú pháp.

#### Vùng đệm C và hợp đồng kích thước — core

Mảng ký tự C là vùng byte; chỉ trở thành chuỗi theo quy ước khi có byte NUL kết thúc trong vùng hợp lệ. sizeof con trỏ không cho dung lượng vùng mà nó trỏ đến, nên hàm nhận buffer thường cần nhận thêm kích thước. malloc trả vùng nhớ chưa khởi tạo, có thể thất bại, và cần free đúng một lần; nó không gọi constructor như new trong C++. Khi dùng C++ bọc API C, đối tượng RAII có thể sở hữu tài nguyên, nhưng vẫn phải tôn trọng cặp cấp phát–giải phóng của API. Việc trộn malloc với delete hoặc dùng con trỏ sau free không được sửa bằng ép kiểu.

Nguồn: [dive-into-systems](https://diveintosystems.org/book/) — Chapter 2: C strings, arrays, pointers and dynamic memory allocation

#### Object file, symbol và liên kết — core

Biên dịch tạo object file chứa mã máy cùng symbol và thông tin relocation chưa được giải quyết đầy đủ. Linker nối các định nghĩa, giải các tham chiếu và tạo executable hoặc thư viện; thiếu định nghĩa khác với khai báo sai kiểu lúc biên dịch. ELF là định dạng chứa nhiều loại thông tin, trong đó section phục vụ tổ chức và liên kết còn program segment hướng dẫn nạp khi chạy. Thư viện tĩnh thường góp mã vào sản phẩm liên kết; thư viện dùng chung được nạp và liên kết động theo cơ chế nền tảng. Một chương trình cần tìm đúng phiên bản thư viện tại lúc chạy, nên liên kết thành công chưa bảo đảm khởi động thành công.

Nguồn: [dive-into-systems](https://diveintosystems.org/book/) — §2.9.6 Writing and using your own C libraries; Chapter 13 program loading

#### Giá trị trả về, errno và ranh giới thư viện–kernel — core

Hàm thư viện không đồng nghĩa lời gọi hệ thống: một hàm có thể xử lý hoàn toàn ở user space, gọi nhiều syscall hoặc giữ bộ đệm riêng. Hợp đồng từng hàm quyết định cách nhận biết thất bại; nhiều syscall trả −1 và đặt errno, nhưng không thể áp dụng mẫu ấy cho mọi hàm C. errno chỉ được diễn giải sau khi kết quả báo lỗi và cần lưu lại nếu thao tác kế tiếp có thể thay đổi nó. Phân biệt lỗi có thể thử lại, lỗi đối số và lỗi tài nguyên giúp thiết kế đường thoát có giải phóng đúng tài nguyên, thay vì tiếp tục dùng một descriptor chưa được mở thành công.

Nguồn: [dive-into-systems](https://diveintosystems.org/book/) — Chapter 13: OS interfaces and system calls

Nguồn: [mit-xv6-2025](https://pdos.csail.mit.edu/6.1810/2025/xv6.html) — Chapter 1: Operating system interfaces

### Lời gọi hệ thống, tiến trình và tín hiệu

Tiến trình là một thực thể đang chạy với không gian địa chỉ, tài nguyên mở và trạng thái được hệ điều hành quản lý. Chương giải thích cách ứng dụng yêu cầu dịch vụ kernel và cách Unix tách tạo tiến trình khỏi thay thế chương trình. Sự tách biệt đó làm được chuyển hướng trước exec và xây shell. Tín hiệu được giới thiệu như cơ chế thông báo bất đồng bộ có giới hạn nghiêm ngặt, không phải một lời gọi hàm bình thường có thể tùy ý thao tác mọi cấu trúc dữ liệu.

#### Chuyển đặc quyền và quản lý tiến trình — core

Syscall chuyển việc thực thi vào điểm vào được kernel kiểm soát để kiểm tra yêu cầu, quyền và đối số của ứng dụng. Chuyển từ user mode sang kernel mode không nhất thiết chuyển sang tiến trình khác; context switch là thay thực thể được chạy và có thể xảy ra vì chặn, hết lát thời gian hoặc lý do khác. PID dùng nhận diện tiến trình trong hệ thống nhưng có thể được tái sử dụng theo thời gian. Chương trình là mã và dữ liệu tĩnh trên tệp, còn nhiều tiến trình có thể chạy cùng một chương trình với trạng thái riêng. Sự phân biệt này quan trọng khi theo dõi lỗi bằng công cụ quan sát tiến trình.

Nguồn: [dive-into-systems](https://diveintosystems.org/book/) — Chapter 13: The Operating System

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapters 4 Processes and 6 Limited Direct Execution

#### fork, exec, wait và vòng đời con — core

fork tạo tiến trình con và trả hai lần theo hai luồng thực thi: con nhận zero, cha nhận PID con, còn thất bại trả giá trị báo lỗi và không có con. Cả hai tiếp tục sau fork, không bắt đầu lại từ main. exec thành công thay thế ảnh chương trình của tiến trình hiện tại và không trở về; nó không tự tạo PID mới. Cha dùng wait hoặc waitpid để thu trạng thái kết thúc; con đã kết thúc nhưng chưa được thu hồi để lại zombie với thông tin tối thiểu. Không có bảo đảm cha hay con sẽ in trước. Buffer thư viện đã chứa dữ liệu trước fork cũng có thể bị sao chép và làm xuất hiện đầu ra lặp nếu xử lý không đúng.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 5: fork, wait, exec and redirection

#### Tín hiệu, gián đoạn và handler an toàn — core

Tín hiệu báo một sự kiện cho tiến trình; hành động mặc định có thể kết thúc, dừng hoặc bỏ qua tùy loại. sigaction thiết lập handler và thuộc tính xử lý rõ hơn việc coi tín hiệu như lời gọi hàm thông thường. Handler có thể chen vào giữa thao tác thư viện nên chỉ được gọi các hàm async-signal-safe; printf hay cập nhật cấu trúc dùng chung tùy tiện có thể gây lỗi khó tái hiện. Một syscall bị ngắt có thể báo EINTR hoặc được tự khởi động lại tùy giao diện và cấu hình. SIGKILL không thể bị bắt hoặc bỏ qua; dọn tài nguyên vì thế không được dựa vào giả định handler luôn được chạy.

Nguồn: [dive-into-systems](https://diveintosystems.org/book/) — Chapter 13: process control and signals

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 5: process control API and signals

### File descriptor, I/O một phần và đường ống

Unix dùng file descriptor làm số hiệu truy cập cho nhiều tài nguyên, nhưng số hiệu ấy không phải chính tệp và không sở hữu toàn bộ trạng thái mở. Chương tách bảng descriptor của tiến trình khỏi đối tượng mở trong kernel và buffer FILE của thư viện. Từ mô hình đó, read/write, chuyển hướng, dup và pipe được giải thích thống nhất. Quan trọng nhất là một lần gọi I/O có thể truyền ít byte hơn yêu cầu, nên ứng dụng cần theo dõi phần đã xử lý và điều kiện kết thúc.

#### Descriptor, đối tượng mở và buffer thư viện — core

Descriptor là chỉ số trong bảng tài nguyên của tiến trình; một open file description trong kernel giữ trạng thái như offset và một số cờ. dup và các descriptor kế thừa qua fork có thể cùng tham chiếu một đối tượng mở nên cùng chia sẻ offset, khác với hai lần open độc lập. FILE* của stdio là một tầng khác có buffer và trạng thái thư viện, vì vậy trộn đọc stdio với read trực tiếp cần hiểu sự chênh lệch vị trí. Đóng một descriptor không nhất thiết đóng mọi tham chiếu đến tài nguyên. Sau khi close, cùng số nhỏ ấy có thể được tái sử dụng, nên giữ số cũ không chứng minh còn sở hữu tài nguyên.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 39: open file table, shared file table entries and dup

Nguồn: [mit-xv6-2025](https://pdos.csail.mit.edu/6.1810/2025/xv6.html) — Chapter 1: I/O and file descriptors

#### Đọc, ghi một phần, EOF và nonblocking — core

read trả số byte thực nhận, có thể nhỏ hơn số yêu cầu mà không phải lỗi. Với stream thông thường, zero biểu thị kết thúc đầu vào; dữ liệu nhị phân có byte zero không phải EOF. write cũng có thể ghi một phần, nên vòng lặp phải tăng con trỏ và giảm phần còn lại thay vì gửi lại toàn bộ gây lặp dữ liệu. EINTR đòi xử lý theo hợp đồng và phần đã hoàn thành; EAGAIN ở nonblocking nghĩa hiện chưa làm được, không phải bên kia đã đóng. Buffer và độ dài phải được kiểm tra trước khi gọi; một vòng thử lại không giới hạn cũng có thể làm tiến trình quay CPU khi tài nguyên chưa sẵn sàng.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 39: reading and writing files

Nguồn: [mit-xv6-2025](https://pdos.csail.mit.edu/6.1810/2025/xv6.html) — Chapter 1: file descriptor read/write interface

#### Pipe, dup2 và sở hữu các đầu đường ống — core

Pipe là luồng byte có đầu đọc và đầu ghi; nó không giữ ranh giới thông điệp của từng lần write theo cách một giao thức ứng dụng có thể mặc định tùy ý. Shell tạo pipe, fork các con rồi dùng dup2 gắn đầu phù hợp vào stdin hoặc stdout trước exec. Mọi descriptor không cần dùng phải đóng: còn một bản sao đầu ghi mở thì bên đọc có thể chưa thấy EOF dù tiến trình gửi chính đã xong. Pipe có dung lượng hữu hạn nên ghi có thể chặn; hai tiến trình cùng chờ nhau ghi đầy có thể deadlock. Cờ close-on-exec giúp tránh rò descriptor qua chương trình mới nhưng cần được thiết lập đúng thời điểm theo API.

Nguồn: [mit-xv6-2025](https://pdos.csail.mit.edu/6.1810/2025/xv6.html) — Chapter 1: Pipes and shell redirection

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 5: process API and redirection

### Tên tệp, quyền truy cập và IPC

Tên đường dẫn là một cách tìm đối tượng chứ không phải đối tượng đó. Chương phân biệt inode, directory entry và các loại liên kết, rồi giải thích quyền truy cập trong bối cảnh từng thành phần đường dẫn. Phần giao tiếp giữa tiến trình so sánh pipe, socket và shared memory theo cấu trúc dữ liệu, quyền sở hữu và yêu cầu đồng bộ. Mục tiêu là lựa chọn cơ chế theo hợp đồng giao tiếp và vòng đời tài nguyên, thay vì chọn shared memory chỉ vì nghe có vẻ nhanh nhất.

#### Inode, đường dẫn và liên kết — core

Directory ánh xạ tên thành định danh đối tượng trong hệ thống tệp. Hard link tạo thêm tên cho cùng inode trong phạm vi cho phép, còn symbolic link chứa đường dẫn và được giải tiếp khi truy cập. Đường dẫn tương đối phụ thuộc thư mục làm việc hoặc thư mục gốc của phép thao tác tương ứng; symlink tương đối được giải từ nơi đặt liên kết, không tùy ý từ nơi gọi. Unlink xóa một tên; dữ liệu của tệp đang mở có thể vẫn được truy cập qua descriptor cho tới khi không còn tham chiếu phù hợp. Điều này giải thích vì sao xóa tên tệp không bảo đảm dung lượng được giải phóng ngay và vì sao đổi tên không làm descriptor tự trỏ sang tệp mới cùng tên.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 39: directories, hard links, symbolic links, unlink

#### Quyền rwx và quyền tối thiểu — core

Quyền trên tệp và directory có ý nghĩa khác: read trên directory liên quan liệt kê tên, execute liên quan đi qua và tra cứu, còn write kết hợp quyền cần thiết cho sửa các mục tên. Chủ sở hữu, nhóm, các bit quyền, ACL và chính sách bổ sung của hệ thống quyết định truy cập; chỉ nhìn một chuỗi rwx chưa đủ trong mọi môi trường Linux. umask loại bớt quyền lúc tạo chứ không tự sửa mọi tệp đã có. Các cơ chế như setuid có thể thay đổi thẩm quyền nên không được dùng như cách chữa lỗi thiếu quyền tùy tiện. Chương trình nên giữ quyền tối thiểu, kiểm tra lỗi thực và tránh mẫu kiểm tra đường dẫn rồi mở muộn gây cửa sổ thay đổi đối tượng.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 39: permissions and access control

#### Chọn pipe, socket hoặc shared memory — core

Pipe phù hợp luồng cục bộ đơn giản; socket cung cấp điểm cuối giao tiếp cục bộ hoặc qua mạng với kiểu stream hay datagram tùy loại. Server stream thường bind và listen rồi accept tạo descriptor kết nối riêng; client connect tới địa chỉ. Stream cần framing ở tầng ứng dụng, không coi một send tương ứng một recv. Shared memory ánh xạ một vùng để nhiều tiến trình truy cập, giảm nhu cầu sao chép theo từng thông điệp nhưng đòi cơ chế đồng bộ và quy tắc sở hữu dữ liệu. MAP_SHARED và MAP_PRIVATE khác về việc thay đổi được chia sẻ; có ánh xạ không đồng nghĩa mọi ghi đã bền vững trên thiết bị. Lựa chọn còn phụ thuộc lỗi, phân quyền, backpressure và dọn tài nguyên khi một bên chết.

Nguồn: [dive-into-systems](https://diveintosystems.org/book/) — Chapter 13: memory and process interfaces

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — Chapter 17: TCP Basics, socket programming examples; Chapter 16: UDP

## CS-25 — Hệ điều hành

Hệ điều hành biến CPU, bộ nhớ và thiết bị hữu hạn thành những trừu tượng mà nhiều chương trình có thể dùng cùng lúc. Tiến trình nhìn thấy luồng lệnh và không gian địa chỉ riêng; ứng dụng nhìn thấy tệp thay cho từng block vật lý. Những khung nhìn đó cần cơ chế phần cứng, cấu trúc dữ liệu của kernel và chính sách phân phối tài nguyên phối hợp. Môn học luôn tách cơ chế làm được điều gì khỏi chính sách quyết định dùng cơ chế ấy cho ai, vào lúc nào và với chi phí nào.

Sau khi đã gọi fork, read hoặc mmap từ ứng dụng, người học nay đi vào phía bên kia giao diện: trạng thái tiến trình, trap, chuyển ngữ cảnh, hàng đợi lập lịch, bảng trang và đường đi I/O. Đồng bộ trong kernel được giới thiệu từ bất biến của dữ liệu và việc ngắt có thể xen vào giữa các bước; môn lập trình đồng thời tiếp theo sẽ đào sâu mô hình bộ nhớ và thiết kế chương trình nhiều luồng. Phần lưu trữ bổ sung một loại đúng đắn khác: cấu trúc trên đĩa phải phục hồi được ngay cả khi máy dừng giữa các lần ghi. Chương bộ nhớ ảo đã được biên soạn ở M2 được giữ nguyên như một phần của toàn bộ năm chương.

Điều kiện đầu vào: computer-architecture (required): Cần hiểu thanh ghi, ngắt phần cứng, chế độ đặc quyền CPU, bộ nhớ cache và MMU/TLB.; linux-system-programming (required): Cần hiểu giao diện tiến trình, lời gọi hệ thống và mô tả tệp từ góc nhìn người dùng trước khi mổ xẻ cơ chế bên trong kernel.; data-structures (required): Cần hàng đợi ưu tiên, cây, bảng băm và bitmap để hiểu bộ lập lịch, bảng trang và cấp phát khối đĩa.

### Cơ chế ảo hóa CPU

Một tiến trình cần chạy lệnh trực tiếp trên CPU để đủ nhanh, nhưng kernel vẫn phải có khả năng giành lại CPU và bảo vệ các tiến trình khác. Chương xây lời giải từ trạng thái tiến trình, chế độ đặc quyền, điểm vào trap và timer interrupt. Sau đó phân biệt chuyển vào kernel với chuyển sang thực thể thực thi khác. Những cấu trúc ấy tạo nền cho chính sách lập lịch ở chương sau, đồng thời giải thích vì sao trạng thái blocked khác với đơn thuần chưa được chọn chạy.

#### Trạng thái tiến trình và mô hình thực thi — core

Tiến trình gồm không gian địa chỉ, trạng thái thanh ghi, tài nguyên mở và thông tin quản lý như định danh hoặc trạng thái chờ. Kernel giữ dữ liệu này trong các cấu trúc thường gọi chung là PCB. Running là đang dùng CPU; ready là có thể chạy nhưng đang chờ CPU; blocked là chờ sự kiện như I/O nên chưa thể tiến triển chỉ bằng việc cấp CPU. Trên nhiều lõi có thể có nhiều tiến trình running cùng thời điểm. Các mũi tên chuyển trạng thái cần gắn nguyên nhân: hết quantum đưa về ready, chờ dữ liệu đưa sang blocked, còn hoàn thành I/O đánh thức tiến trình về trạng thái có thể được chọn.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 4: process state and data structures

#### Thực thi trực tiếp có giới hạn và trap — core

Ứng dụng chạy phần lớn lệnh ở user mode. Các thao tác đặc quyền và truy cập bị cấm phải được phần cứng kiểm soát; syscall chuyển vào entry point do kernel thiết lập thay vì cho ứng dụng nhảy tùy ý vào mã đặc quyền. Phần cứng và entry code lưu trạng thái cần thiết, đặt môi trường kernel và kiểm tra yêu cầu. Timer interrupt cho kernel cơ hội lấy lại điều khiển ngay cả khi chương trình không tự nhường CPU. Interrupt từ thiết bị, exception do lệnh và syscall có nguyên nhân khác nhau dù có thể dùng hạ tầng trap chung. Việc phục hồi trạng thái đúng quyết định ứng dụng tiếp tục ở đâu và với quyền nào.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 6: Limited Direct Execution

Nguồn: [mit-xv6-2025](https://pdos.csail.mit.edu/6.1810/2025/xv6.html) — Chapter 4: Traps and system calls

#### Chuyển ngữ cảnh và ranh giới cơ chế–chính sách — core

Chuyển ngữ cảnh lưu trạng thái thực thể đang chạy và khôi phục trạng thái của thực thể được chọn, bao gồm thanh ghi cần thiết và có thể cả không gian địa chỉ. Việc vào kernel để phục vụ syscall có thể trở lại cùng tiến trình mà không đổi lịch. Khi một tiến trình chặn, scheduler chọn thực thể khác; thao tác lưu/khôi phục là cơ chế, lựa chọn ai chạy tiếp là chính sách. Chi phí chuyển không chỉ là số lệnh lưu thanh ghi mà còn có tác động lên cache và TLB. xv6 tách việc chuyển giữa kernel thread và scheduler để minh họa ranh giới trạng thái, nhưng kernel khác có tổ chức nội bộ khác.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 6: context switching

Nguồn: [mit-xv6-2025](https://pdos.csail.mit.edu/6.1810/2025/xv6.html) — Chapter 7: Scheduling, code swtch

### Chính sách lập lịch CPU

Một chính sách lập lịch chỉ có ý nghĩa khi biết đang tối ưu đại lượng nào. Chương bắt đầu từ thời gian đáp ứng, hoàn thành, chờ, thông lượng và công bằng rồi thay đổi dần giả định về job và thông tin có sẵn. Từ FIFO, SJF và round-robin đến MLFQ, mỗi chính sách được giải thích bằng quyết định chọn hàng đợi và khả năng bị khai thác. Phần đa lõi thêm bài toán giữ locality và cân bằng tải, cho thấy một hàng đợi chung chưa luôn là thiết kế tốt nhất.

#### Mục tiêu, FIFO, SJF và STCF — core

Turnaround là thời điểm hoàn thành trừ thời điểm đến, còn response time là lúc được phục vụ lần đầu trừ thời điểm đến. Job dài ở đầu FIFO có thể làm nhiều job ngắn chờ, gọi là convoy effect. Khi mọi job đến cùng lúc, biết trước độ dài và không ngắt giữa job, SJF tối thiểu hóa turnaround trung bình; bỏ giả định ấy thì kết luận cần xét lại. STCF chọn thời gian còn lại ngắn nhất trong mô hình có thể preempt và biết thời lượng còn lại. Trên thực tế thời lượng thường không biết chính xác, nên đây là các mốc phân tích chứ không phải thông tin kernel luôn sở hữu.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 7: workload assumptions, metrics, SJF and STCF

#### Round-robin và phản hồi nhiều mức — core

Round-robin cho mỗi tiến trình một quantum rồi luân chuyển hàng đợi. Quantum ngắn có thể cải thiện phản hồi nhưng tăng chi phí chuyển; quantum rất dài khiến hành vi gần FIFO. MLFQ dùng nhiều mức ưu tiên và lịch sử sử dụng CPU để ước lượng loại workload: job tương tác cần phản hồi nhanh, job CPU-bound vẫn cần tiến triển. Hạ mức theo tổng thời gian đã dùng giúp chống việc tự nhường CPU ngay trước hết quantum để giữ ưu tiên. Boost định kỳ giảm nguy cơ starvation và thích nghi khi hành vi thay đổi. Hiệu quả phụ thuộc các tham số cùng workload, không phải bản thân số lượng hàng đợi càng nhiều càng tốt.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapters 7 Round Robin and 8 MLFQ

#### Chia phần CPU và lập lịch nhiều lõi — core

Lottery dùng vé để chọn xác suất nhận CPU, còn stride dùng số bước để phân phối có tính xác định hơn; tỷ lệ dài hạn khác với bảo đảm độ trễ từng lần. Trong đa lõi, hàng đợi chung đơn giản hóa cân bằng nhưng có thể gây tranh chấp khóa và làm dữ liệu di chuyển giữa cache. Hàng đợi riêng tăng locality nhưng cần work stealing hoặc migration để tránh lõi rảnh khi lõi khác quá tải. Affinity ưu tiên chạy lại gần cache đã có dữ liệu, còn NUMA khiến vị trí RAM cũng ảnh hưởng chi phí. Công bằng theo thời gian CPU không nhất thiết là công bằng theo công việc hoàn thành trên phần cứng không đồng nhất.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapters 9 Lottery and Stride; 10 Multi-CPU Scheduling

### Chương 3 (Mẫu M2) — Bộ nhớ ảo và Phân trang (Virtual Memory & Paging)

Chương này giải quyết một trong những câu hỏi nền tảng nhất của Hệ thống Máy tính: làm thế nào hàng chục tiến trình độc lập có thể cùng chia sẻ một bộ nhớ vật lý DRAM hữu hạn mà không thể đọc trộm hay ghi đè dữ liệu của nhau, đồng thời mỗi tiến trình lại nhìn thấy một không gian địa chỉ thống nhất bắt đầu từ địa chỉ cố định và có thể lớn hơn cả dung lượng RAM vật lý? Nội dung dẫn dắt tuần tự qua sáu tiểu mục từ trừu tượng hóa không gian địa chỉ, cơ chế phần cứng MMU và phân đoạn, cấu trúc phân trang và bảng trang cây đa cấp, bộ đệm tăng tốc TLB, quy trình xử lý lỗi thiếu trang và chính sách thay thế trang, đến Copy-on-Write và các giới hạn phần cứng thực tế.

#### Trừu tượng hóa Không gian địa chỉ (Address Space) và ba mục tiêu cốt lõi của Bộ nhớ ảo — core

Trong các hệ thống sơ khai không có ảo hóa bộ nhớ, chương trình ứng dụng truy cập trực tiếp vào địa chỉ bộ nhớ vật lý (physical memory), khiến việc chạy đồng thời nhiều tiến trình vừa đòi hỏi trình liên kết phải biết trước vị trí RAM trống, vừa làm toàn bộ hệ thống dễ dàng sập hoặc lộ dữ liệu nếu một tiến trình dùng con trỏ lỗi ghi đè lên vùng nhớ của tiến trình khác hoặc của chính hệ điều hành. Để giải quyết triệt để vấn đề này, hệ điều hành phối hợp với phần cứng tạo ra trừu tượng hóa Không gian địa chỉ (Address Space): một khung nhìn bộ nhớ riêng tư, tuyến tính và có trật tự gồm vùng mã lệnh (Code/Text), vùng dữ liệu tĩnh, vùng nhớ tự do (Heap) mở rộng theo một chiều và ngăn xếp lời gọi (Stack) mở rộng theo chiều ngược lại.

Mọi địa chỉ mà lập trình viên nhìn thấy khi in giá trị một con trỏ trong C/C++ hay trong trình gỡ lỗi GDB đều là *địa chỉ ảo* (virtual address), hoàn toàn không phải là địa chỉ vật lý trên thanh DRAM. Hệ thống bộ nhớ ảo được thiết kế để thỏa mãn đồng thời ba mục tiêu thiết kế: (1) *Tính trong suốt* (Transparency) — chương trình hoạt động như thể nó độc chiếm toàn bộ bộ nhớ mà không cần biết dữ liệu của mình đang được đặt rải rác ở những khung vật lý nào; (2) *Tính hiệu quả* (Efficiency) — cả về thời gian (quá trình dịch địa chỉ không làm chậm từng lệnh nạp/lưu nhờ hỗ trợ phần cứng như TLB) lẫn không gian (cấu trúc dữ liệu quản lý ánh xạ không chiếm quá nhiều RAM); và (3) *Tính bảo vệ và cô lập* (Protection & Isolation) — một tiến trình hoàn toàn không có khả năng tạo ra địa chỉ ảo ánh xạ trái phép sang vùng nhớ vật lý của tiến trình khác hay của nhân hệ điều hành.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 13: The Abstraction: Address Spaces (§13.1–13.4 The Address Space, Goals of Virtual Memory)

#### Dịch địa chỉ bằng phần cứng (MMU), Thanh ghi Cơ sở/Giới hạn (Base & Bounds) và Phân đoạn (Segmentation) — core

Để vừa đạt hiệu năng thực thi trực tiếp trên CPU vừa giữ quyền kiểm soát tuyệt đối của hệ điều hành, cơ chế Dịch địa chỉ dựa trên phần cứng (Hardware-based Address Translation) đặt một bộ phận chuyên dụng gọi là Đơn vị Quản lý Bộ nhớ (Memory Management Unit — MMU) ngay trên đường đi của mọi truy cập bộ nhớ từ CPU. Trong mô hình đơn giản nhất gọi là Định vị lại động bằng Thanh ghi Cơ sở và Giới hạn (Dynamic Relocation / Base and Bounds), mỗi khi tiến trình chạy, hệ điều hành nạp địa chỉ bắt đầu vật lý vào thanh ghi `Base` và kích thước không gian địa chỉ vào thanh ghi `Bounds` của MMU. Với mỗi địa chỉ ảo $v$, phần cứng kiểm tra song song điều kiện $0 \le v < \text{Bounds}$; nếu hợp lệ, MMU cộng trực tiếp $\text{physical address} = v + \text{Base}$ để gửi tới RAM, còn nếu vượt biên thì MMU lập tức phát sinh một ngắt ngoại lệ phần cứng (exception/trap) chuyển CPU về chế độ đặc quyền của kernel để chấm dứt tiến trình vi phạm.

Mô hình một cặp thanh ghi Base/Bounds duy nhất buộc toàn bộ không gian địa chỉ phải nằm liên tiếp trong RAM, gây lãng phí bộ nhớ nghiêm trọng cho khoảng trống chưa dùng rất lớn nằm giữa vùng Heap và vùng Stack — hiện tượng này được gọi là *phân mảnh nội bộ* (internal fragmentation). Cơ chế Phân đoạn (Segmentation) cải tiến bằng cách cấp cho mỗi vùng logic (Code, Heap, Stack) một cặp thanh ghi Base và Bounds độc lập trong MMU, cho phép đặt từng đoạn ở các vị trí vật lý khác nhau và cho phép đánh dấu quyền bảo vệ riêng (như đoạn Code chỉ có quyền Đọc–Thực thi `R-X` để có thể chia sẻ chung một bản sao vật lý giữa nhiều tiến trình, còn Heap và Stack có quyền Đọc–Ghi `RW-`). Tuy nhiên, vì mỗi đoạn vẫn yêu cầu một vùng nhớ vật lý liên tiếp có kích thước khác nhau và biến đổi động khi `mmap`/`sbrk` mở rộng Heap, bộ nhớ vật lý nhanh chóng bị chia cắt thành hàng loạt khe trống nhỏ rời rạc không đủ lớn để cấp phát cho một đoạn mới — hiện tượng *phân mảnh ngoại vi* (external fragmentation), đòi hỏi các thuật toán quản lý vùng trống phức tạp hoặc phải dọn nén bộ nhớ cực kỳ tốn kém.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 15: Mechanism: Address Translation (Base and Bounds) & Chapter 16: Segmentation (Fine-grained vs Coarse-grained, Sharing, External Fragmentation)

#### Cơ chế Phân trang (Paging), Cấu trúc mục bảng trang (PTE) và Bảng trang đa cấp (Multi-level Page Tables) — core

Để triệt tiêu hoàn toàn hiện tượng phân mảnh ngoại vi của phân đoạn, cơ chế Phân trang (Paging) chia cả không gian địa chỉ ảo lẫn bộ nhớ vật lý thành các khối có kích thước cố định bằng nhau (thường là $4\text{ KiB} = 2^{12}$ byte): đơn vị trên không gian ảo gọi là *trang* (page), còn đơn vị trên RAM vật lý gọi là *khung trang* (page frame / physical frame). Khi đó, mỗi địa chỉ ảo $m$-bit được tách làm hai phần: $p$ bit cao tạo thành Số hiệu trang ảo (Virtual Page Number — VPN) dùng làm chỉ số tra cứu trong Bảng trang (Page Table) của tiến trình, và $d$ bit thấp ($2^d = \text{kích thước trang}$, ví dụ $d = 12$ bit cho trang $4\text{ KiB}$) là Độ dời trong trang (Offset) được giữ nguyên không đổi vì kích thước trang và khung trang bằng nhau. Mỗi mục trong bảng trang (Page Table Entry — PTE) lưu Số hiệu khung vật lý (Physical Frame Number — PFN) kèm các bit điều khiển phần cứng sống còn: bit `Valid` ($V$ — trang này có thuộc phần địa chỉ hợp lệ của tiến trình không), bit `Present` ($P$ — trang hiện đang nằm trong RAM hay đã bị đẩy ra đĩa), các bit quyền truy cập `R/W/X` (Read/Write/Execute), bit `User/Supervisor` ($U$ — ngăn tiến trình chế độ user truy cập trang của kernel), cùng bit `Accessed/Reference` ($A$) và `Dirty` ($D$ — trang đã bị ghi đè kể từ khi nạp vào RAM).

Tuy nhiên, một bảng trang tuyến tính mảng phẳng (linear page table) gặp phải hai chi phí nghiêm trọng: làm chậm truy cập bộ nhớ (vì mỗi lệnh đọc/ghi phải đọc thêm PTE trong RAM) và tốn dung lượng khổng lồ (với địa chỉ 32-bit, trang $4\text{ KiB}$ và mỗi PTE 4 byte, mỗi tiến trình cần một mảng liên tiếp $2^{20} \times 4\text{ B} = 4\text{ MiB}$ dù chỉ dùng vài trang; với địa chỉ 64-bit hay 39/48-bit thì bảng phẳng là bất khả thi). Giải pháp chuẩn của phần cứng hiện đại là Bảng trang đa cấp dạng cây (Multi-level Page Tables, như cấu trúc 3 cấp Sv39 trên RISC-V của xv6 hoặc 4–5 cấp trên x86-64): phần VPN được chia thành các trường chỉ số $L_2, L_1, L_0$ (mỗi trường 9 bit tương ứng $2^9 = 512$ PTE kích thước 8 byte, vừa khít một trang $4\text{ KiB}$). Thanh ghi gốc bảng trang của CPU (như `satp` trên RISC-V hoặc `CR3` trên x86-64) trỏ tới trang thư mục gốc; nếu toàn bộ một vùng $2\text{ MiB}$ hoặc $1\text{ GiB}$ của không gian địa chỉ không được sử dụng, mục PTE ở cấp cao chỉ cần đặt bit `Valid = 0` và hệ điều hành hoàn toàn không phải cấp phát các trang bảng trang cấp dưới cho nhánh đó, giúp dung lượng bảng trang chỉ tỷ lệ thuận với lượng bộ nhớ ảo thực sự đang sử dụng.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 18: Paging: Introduction (VPN, Offset, PTE Bits) & Chapter 20: Paging: Smaller Tables (Multi-level Page Tables)

Nguồn: [mit-xv6-2025](https://pdos.csail.mit.edu/6.1810/2025/xv6.html) — Chapter 3: §3.1 Paging hardware (RISC-V Sv39 39-bit Virtual Addresses and 3-Level Page Table Tree)

#### Bộ đệm dịch địa chỉ (TLB), tính cục bộ không gian/thời gian và quản lý TLB khi chuyển ngữ cảnh — core

Mặc dù bảng trang đa cấp giải quyết triệt để bài toán dung lượng bộ nhớ cho bảng trang, bản thân việc duyệt cây bảng trang $k$ cấp (page table walk) lại đòi hỏi $k$ lần đọc bộ nhớ vật lý chỉ để lấy được địa chỉ PFN trước khi thực hiện lần truy cập thứ $k+1$ tới dữ liệu thật — làm tốc độ chương trình chậm đi nhiều lần. Để khôi phục tốc độ gần như truy cập trực tiếp, MMU tích hợp một bộ nhớ đệm phần cứng kết hợp đầy đủ hoặc kết hợp tập hợp (set-associative hardware cache) cực nhanh gọi là Bộ đệm Dịch Địa chỉ (Translation Lookaside Buffer — TLB), lưu trữ các cặp ánh xạ $\text{VPN} \to (\text{PFN}, \text{các bit quyền})$ vừa được sử dụng gần nhất. Với mỗi địa chỉ ảo, MMU tra cứu VPN trong TLB trước tiên: nếu trúng bộ đệm (TLB hit, tốn chưa đầy 1 chu kỳ xung nhịp), PFN được xuất ra ngay lập tức mà không cần chạm vào bảng trang trong RAM; chỉ khi trượt bộ đệm (TLB miss), phần cứng (trên x86-64/RISC-V) hoặc trình xử lý ngoại lệ phần mềm mới duyệt bảng trang để nạp ánh xạ mới vào TLB.

Hiệu quả của TLB phụ thuộc hoàn toàn vào hai nguyên lý cục bộ của chương trình: *tính cục bộ không gian* (spatial locality — khi chương trình đọc `a[0]`, các phần tử kế tiếp `a[1], a[2]...` nằm chung trên cùng một trang $4\text{ KiB}$ nên đều gây TLB hit sau một lần miss duy nhất) và *tính cục bộ thời gian* (temporal locality — các biến và lệnh trong vòng lặp được truy cập lặp lại liên tục trong thời gian ngắn); ngược lại, nếu một chương trình nhảy ngẫu nhiên qua số trang lớn hơn số mục của TLB (TLB reach), tỷ lệ hit sụt giảm mạnh gây hiện tượng nghẽn TLB. Ngoài ra, vì các ánh xạ $\text{VPN} \to \text{PFN}$ trong TLB chỉ đúng cho tiến trình hiện hành, mỗi khi hệ điều hành chuyển ngữ cảnh (context switch) sang tiến trình khác có bảng trang mới, phần cứng/OS hoặc phải xả bỏ toàn bộ các mục TLB không toàn cục (TLB flush — gây chi phí cold-start misses cho tiến trình mới), hoặc gắn thêm trường Định danh Không gian Địa chỉ (Address Space Identifier — ASID / PCID) vào mỗi mục TLB để nhiều tiến trình cùng tồn tại an toàn trong TLB mà không cần xóa trắng khi chuyển ngữ cảnh.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 19: Paging: Faster Translations (TLBs — Algorithm, Locality, Context Switches, ASIDs)

Nguồn: [mit-xv6-2025](https://pdos.csail.mit.edu/6.1810/2025/xv6.html) — Chapter 3: §3.1 Paging hardware (TLB and sfence.vma instruction)

#### Ngắt thiếu trang (Page Fault), Không gian hoán đổi (Swap) và Chính sách thay thế trang (OPT, FIFO, LRU, Clock, Thrashing) — core

Để hỗ trợ không gian địa chỉ lớn hơn dung lượng DRAM vật lý, hệ điều hành sử dụng một phân vùng trên thiết bị lưu trữ bền vững (SSD/HDD) làm không gian hoán đổi (swap space) để cất giữ các trang hiện chưa hoạt động. Khi CPU truy cập một địa chỉ ảo mà PTE tương ứng có bit `Present = 0` (hoặc chưa được cấp phát khung vật lý), MMU không thể tự hoàn tất việc dịch địa chỉ mà phát sinh một ngắt ngoại lệ đồng bộ gọi là *Lỗi thiếu trang* (Page Fault). Trình xử lý lỗi thiếu trang (page-fault handler) của nhân hệ điều hành được kích hoạt sẽ phân biệt ba trường hợp: (1) địa chỉ không hợp lệ (con trỏ null hoặc vượt ngoài các vùng nhớ đã đăng ký — gửi tín hiệu `SIGSEGV` chấm dứt tiến trình); (2) cấp phát lười (demand zeroing / lazy allocation — cấp một khung RAM mới xóa trắng về 0 rồi cập nhật PTE); hoặc (3) thiếu trang lớn (major page fault — trang đang nằm trên đĩa swap): hệ điều hành chọn một khung trang vật lý, phát lệnh I/O đọc trang từ đĩa vào RAM, phong tỏa tiến trình hiện tại để nhường CPU cho tiến trình khác chạy trong lúc chờ đĩa, và sau khi ngắt hoàn tất I/O báo về thì cập nhật PTE (`Present = 1`, `PFN` mới) rồi cho tiến trình thực thi lại chính câu lệnh vừa gây lỗi.

Khi bộ nhớ RAM đã cạn khung trống, trình nền thu hồi trang (swap daemon / page daemon) phải áp dụng một Chính sách thay thế trang (Page Replacement Policy) để chọn trang trục xuất nhằm cực tiểu hóa số lần đọc đĩa tốn kém (tối ưu Thời gian truy cập bộ nhớ hiệu dụng $\text{AMAT} = T_M + (1 - h) \cdot T_D$, nơi $T_D$ lớn hơn $T_M$ hàng chục nghìn lần). Chính sách Tối ưu của Belady (OPT / MIN — trục xuất trang sẽ được truy cập lại muộn nhất trong tương lai) đạt tỷ lệ miss thấp nhất nhưng chỉ dùng làm mốc lý thuyết vì đòi hỏi biết trước tương lai. Chính sách Vào trước – Ra trước (FIFO) bỏ qua tần suất sử dụng và mắc phải *Nghịch lý Belady* (Belady’s Anomaly): tăng thêm số khung RAM vật lý đôi khi lại làm tăng số lỗi thiếu trang trên cùng một chuỗi tham chiếu. Chính sách Ít dùng gần đây nhất (Least Recently Used — LRU) khai thác tính cục bộ thời gian và thỏa mãn tính chất ngăn xếp (stack property, không bị nghịch lý Belady), nhưng duy trì thứ tự LRU chính xác trên mỗi lệnh đọc/ghi RAM là quá đắt đỏ; vì vậy các hệ điều hành thực tế dùng thuật toán Kim đồng hồ (Clock / Second-Chance) quét vòng qua bit `Reference` ($A$) do phần cứng tự bật và ưu tiên giữ lại các trang sạch (`Dirty = 0`) để tránh chi phí ghi ngược ra đĩa. Khi tổng Tập làm việc (Working Set) của các tiến trình đang chạy vượt quá số khung RAM vật lý, hệ thống rơi vào trạng thái *trì trệ hoán đổi* (Thrashing): CPU dành toàn bộ thời gian chờ đọc/ghi trang ra vào đĩa mà không tiến triển được công việc thực tế, đòi hỏi cơ chế kiểm soát tải (admission control / working-set tracking) hoặc kích hoạt bộ xử lý hết bộ nhớ (OOM killer).

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 21: Beyond Physical Memory: Mechanisms (Swap Space, Present Bit, Page Fault Control Flow) & Chapter 22: Beyond Physical Memory: Policies (OPT, FIFO, Belady’s Anomaly, LRU, Clock Algorithm, Dirty Pages, Thrashing)

#### Cơ chế Sao chép khi ghi (Copy-on-Write), Ánh xạ tệp (mmap) và Giới hạn phần cứng thực tế — core

Nhờ sự tách biệt giữa trang ảo và khung vật lý cùng các bit quyền trên PTE, hệ điều hành có thể triển khai những tối ưu hóa hệ thống rất mạnh mẽ mà không cần sao chép dữ liệu thừa. Điển hình nhất là cơ chế Sao chép khi ghi (Copy-on-Write — COW) trong lời gọi hệ thống `fork()`: thay vì sao chép toàn bộ các khung trang vật lý của tiến trình cha sang tiến trình con (mà phần lớn sẽ bị vứt bỏ ngay nếu tiến trình con gọi `exec()`), kernel chỉ sao chép cấu trúc bảng trang cho tiến trình con trỏ tới chính các khung vật lý của cha, đồng thời hạ quyền ghi trên PTE của cả hai tiến trình xuống Chỉ-đọc (`Read-Only`) và tăng biến đếm tham chiếu của khung trang. Chừng nào cả hai tiến trình chỉ đọc dữ liệu, không có byte dữ liệu nào bị sao chép; ngay khi một trong hai tiến trình thực hiện lệnh ghi, MMU sẽ phát sinh ngắt lỗi bảo vệ trang (page-protection fault), trình xử lý của kernel lúc này mới cấp phát một khung vật lý mới, sao chép nội dung trang $4\text{ KiB}$ đó sang khung mới, bật lại quyền Ghi (`RW`) và giảm biến đếm tham chiếu của khung cũ. Tương tự, lời gọi `mmap()` cho phép ánh xạ trực tiếp các khối của tệp trên đĩa vào không gian địa chỉ ảo thông qua bộ đệm trang thống nhất (unified page cache), nạp dữ liệu theo yêu cầu (demand paging) khi tiến trình chạm tới từng trang.

Cuối cùng, hiểu đúng bộ nhớ ảo đòi hỏi nhận thức rõ các giới hạn phần cứng và mặt trái về bảo mật trong các hệ thống thương mại. Thứ nhất, trên các ứng dụng cơ sở dữ liệu hoặc học máy sử dụng hàng trăm gigabyte RAM, trang nhỏ $4\text{ KiB}$ khiến số lượng trang lên tới hàng chục triệu, làm tràn TLB và biến chi phí duyệt bảng trang 4–5 cấp thành điểm nghẽn lớn; phần cứng hiện đại khắc phục bằng Trang khổng lồ (Huge Pages / Superpages kích thước $2\text{ MiB}$ hoặc $1\text{ GiB}$ bằng cách dừng sớm ở PTE cấp trung gian), đổi lại nguy cơ tăng phân mảnh nội bộ. Thứ hai, các bộ xử lý thực thi suy đoán (speculative execution) có thể để lộ dấu vết vi kiến trúc qua bộ nhớ cache khi truy cập thử vào vùng nhớ kernel được ánh xạ chung trong bảng trang người dùng (lỗ hổng Meltdown), buộc các hệ điều hành hiện đại phải áp dụng Cô lập Bảng trang Nhân (Kernel Page-Table Isolation — KPTI), tách bảng trang chế độ user và chế độ kernel làm tăng chi phí chuyển đổi qua lại tại mỗi lời gọi hệ thống.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 23: Complete Virtual Memory Systems (VAX/VMS, Linux Virtual Memory, Copy-on-Write, Superpages/Huge Pages, KPTI and Meltdown)

Nguồn: [mit-xv6-2025](https://pdos.csail.mit.edu/6.1810/2025/xv6.html) — Chapter 4: §4.6 Page-fault exceptions (Copy-on-write fork, Lazy allocation, Demand paging)

### Đồng bộ trong kernel và deadlock

Ngay cả trên một lõi, interrupt hoặc preemption có thể xen vào khi kernel đang cập nhật một cấu trúc chung. Chương định nghĩa vùng găng và bất biến trước khi giới thiệu khóa, thay vì coi khóa là thao tác trang trí quanh mọi dòng mã. Sau đó phân biệt chờ bận với chặn, mô tả điều kiện hình thành deadlock và các cách xử lý. Phần này đủ để đọc kernel đơn giản; mô hình bộ nhớ C++ và các cấu trúc đồng thời ở cấp ứng dụng được dành cho CS26.

#### Bất biến, vùng găng và thao tác nguyên tử — core

Một danh sách tiến trình có bất biến như mỗi nút chỉ nằm trong một hàng đợi tại một thời điểm. Thao tác chuyển nút có thể cần nhiều lần ghi và tạm thời phá bất biến; nếu luồng khác quan sát giữa chừng, cấu trúc có thể hỏng. Khóa tạo vùng găng để các bên tuân thủ cùng giao thức không xen vào đoạn cập nhật ấy. Bản thân việc giành khóa cần thao tác nguyên tử phần cứng như test-and-set hoặc compare-and-swap. Chỉ đánh dấu biến là volatile không tạo loại trừ tương hỗ hay giao thức đồng bộ. Đúng đắn cần xác định khóa nào bảo vệ dữ liệu nào và mọi đường truy cập có tuân thủ không.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapters 26 and 28

Nguồn: [mit-xv6-2025](https://pdos.csail.mit.edu/6.1810/2025/xv6.html) — Chapter 6: locks and invariants

#### Spinlock, khóa ngủ và ngữ cảnh ngắt — core

Spinlock quay thử cho tới khi khóa được nhả; nó có thể phù hợp vùng găng ngắn khi chủ khóa đang chạy trên lõi khác. Khóa ngủ đưa bên chờ ra khỏi CPU nhưng cần scheduler và đường đánh thức, không dùng tùy tiện ở ngữ cảnh không được ngủ. Nếu handler ngắt trên cùng lõi cố lấy khóa đang do mã bị nó ngắt giữ, hệ thống có thể chờ mãi; kernel cần quy tắc về ngắt và khóa. Tắt ngắt cục bộ không ngăn lõi khác truy cập dữ liệu. Sleep/wakeup cũng cần khóa để tránh sự kiện đến giữa kiểm tra điều kiện và bắt đầu ngủ, gây mất đánh thức.

Nguồn: [mit-xv6-2025](https://pdos.csail.mit.edu/6.1810/2025/xv6.html) — Chapter 6: spinlocks and interrupt handlers; Chapter 7: sleep and wakeup

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapters 28 and 30

#### Deadlock, phòng ngừa, tránh và phục hồi — core

Deadlock là một tập thực thể chờ nhau khiến không bên nào tiến triển. Bốn điều kiện kinh điển gồm loại trừ tương hỗ, giữ và chờ, không thu hồi cưỡng bức, và vòng chờ; chúng là điều kiện cần trong mô hình tài nguyên đang xét, không phải cứ thấy từng điều kiện riêng lẻ là đã chứng minh có deadlock. Quy định thứ tự lấy khóa chung phá vòng chờ; lấy tất cả tài nguyên trước có thể phá giữ-và-chờ nhưng giảm tính linh hoạt. Tránh bằng trạng thái an toàn cần biết yêu cầu tài nguyên như mô hình Banker, còn phát hiện và phục hồi chấp nhận xử lý sau. Starvation và livelock khác deadlock nên cần quan sát tiến triển thực thay vì chỉ tìm vòng khóa.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 32: Concurrency Bugs, deadlock conditions and prevention

### I/O, lưu trữ, hệ thống tệp và crash consistency

Lưu trữ bền vững đòi hỏi một chuỗi phối hợp từ ứng dụng qua cache, driver, bộ điều khiển tới thiết bị. Chương giải thích cách OS đợi hoàn thành I/O, cách cấu trúc tệp được đặt trên block và vì sao nhiều lần ghi cho một thao tác có thể dở dang khi mất điện. Journaling được học như một giao thức thứ tự ghi và phục hồi, không như lời hứa mọi dữ liệu ứng dụng tự động an toàn. Phân biệt tính nguyên tử, tính bền vững và khả năng khôi phục giúp đọc đúng các API tệp.

#### Thiết bị, driver và hàng đợi I/O — core

Driver chuyển giao diện chung của kernel thành thao tác với một thiết bị cụ thể. Polling kiểm tra trạng thái, interrupt báo hoàn thành, còn DMA chuyển dữ liệu theo mô tả do phần mềm chuẩn bị. CPU có thể làm việc khác trong khi I/O tiến triển nhưng vẫn cần xử lý lỗi và vòng đời buffer. HDD có seek và độ trễ quay nên vị trí ảnh hưởng thời gian; SSD không có bộ phận quay nhưng có đơn vị xóa, garbage collection và write amplification. RAID có thể tăng thông lượng hoặc chịu một số lỗi đĩa tùy mức, nhưng không thay thế backup trước xóa nhầm, mã độc hoặc hỏng dữ liệu lan truyền.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapters 36, 37, 38 and 44

#### Inode, cấp phát block và tìm đường dẫn — core

Một hệ thống tệp đơn giản có superblock mô tả bố cục, bitmap đánh dấu vùng trống, inode chứa metadata và tham chiếu dữ liệu, cùng các block dữ liệu. Directory là cấu trúc ánh xạ tên; tìm /a/b cần lần lượt giải các thành phần và kiểm tra quyền phù hợp. Con trỏ trực tiếp, gián tiếp hoặc extent tạo đánh đổi giữa tệp nhỏ, tệp lớn, metadata và locality. Buffer cache giảm I/O bằng giữ block đã đọc hoặc sửa trong RAM, nhưng block dirty chưa chắc đã bền vững trên thiết bị. Sự khác biệt giữa tên, inode, descriptor và block giúp phân tích cả truy cập thường lẫn thao tác unlink khi tệp còn mở.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapters 39 and 40: VSFS and allocation

#### FSCK, journal và giao thức lưu bền — core

Một lần append có thể phải cập nhật dữ liệu, inode và bitmap. Nếu crash sau một phần các lần ghi, metadata có thể chỉ tới block chưa được cấp phát đúng hoặc làm thất thoát block. FSCK kiểm tra và sửa các quan hệ nhưng có thể chậm và không đoán được mọi ý định ứng dụng. Journaling ghi mô tả thay đổi vào log, bảo đảm thứ tự cần thiết, đánh dấu commit rồi mới cho phép hoàn tất cập nhật ở vị trí chính; phục hồi chỉ replay giao dịch đã commit theo giao thức. Metadata journaling không đồng nghĩa ghi log toàn bộ nội dung tệp.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 42: Crash Consistency, FSCK and Journaling

#### Nguyên tử khác bền vững ở giao diện ứng dụng — core

write thành công thường mới xác nhận dữ liệu được hệ điều hành chấp nhận, không bảo đảm đã vượt qua mọi cache dễ mất khi mất điện. fsync yêu cầu đồng bộ đối tượng theo hợp đồng hệ thống; quy trình thay tệp an toàn còn cần xét directory chứa tên. Rename nguyên tử về khả năng quan sát tên trong phạm vi được hỗ trợ không đồng nghĩa thay đổi đã bền vững sau crash. Mẫu ghi tệp tạm, đồng bộ, đổi tên rồi đồng bộ directory phải được đối chiếu nền tảng và hệ thống tệp. Giao thức lưu trữ đúng cần nêu loại lỗi muốn chịu được; journaling không bảo vệ khỏi mọi lỗi thiết bị hoặc thay thế backup.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 39: fsync, rename and persistence; Chapter 42: journaling ordering

## CS-26 — Lập trình đồng thời và song song

Đồng thời là tổ chức nhiều hoạt động có thể tiến triển xen kẽ, còn song song là thực hiện công việc tại cùng thời điểm trên nhiều đơn vị tính toán. Chương trình một lõi vẫn có lỗi đồng thời, và chương trình tạo nhiều thread chưa chắc tăng tốc. Môn học bắt đầu bằng sự khác biệt ấy rồi xác định chính xác dữ liệu nào được chia sẻ, hoạt động nào xung đột và quan hệ đồng bộ nào cần tồn tại để kết quả hợp lệ. Ví dụ dùng pthread và C++ ở mức giao diện, luôn phân biệt mô hình ngôn ngữ với khả năng của một CPU cụ thể.

Phần đúng đắn xây từ vùng găng đến condition variable, semaphore và giao thức chờ; phần hiệu năng xây từ đồ thị phụ thuộc đến phân rã công việc, lập lịch và chi phí bộ nhớ. Người học không chỉ nhận diện deadlock mà còn phân biệt starvation, livelock, sai thứ tự và atomicity violation. Event loop được đặt cạnh mô hình nhiều thread để thấy hai cách tổ chức I/O, không coi chúng là hai tên của cùng một cơ chế. Phép đo cuối cùng cần tính cả tạo thread, đồng bộ, locality và phần tuần tự, thay vì so số lõi với thời gian chạy một cách trực tiếp.

Điều kiện đầu vào: operating-systems (required): Cần hiểu mô hình luồng, chuyển ngữ cảnh, lập lịch và không gian địa chỉ chia sẻ.; computer-architecture (required): Cần hiểu bộ nhớ đệm (cache lines), tính nhất quán cache cơ bản và Định luật Amdahl.

### Thread, data race và mô hình bộ nhớ

Thread có thanh ghi và luồng điều khiển riêng nhưng có thể truy cập dữ liệu trong cùng không gian địa chỉ. Chương bắt đầu với phép tăng đếm bị mất cập nhật, rồi đi từ hình dung xen kẽ lệnh sang quy tắc chính xác hơn của mô hình bộ nhớ. Sự phân biệt giữa data race, race condition và thiếu nguyên tử giúp chọn cơ chế thích hợp. Atomic được giới thiệu cùng quan hệ happens-before để tránh hiểu sai rằng chỉ đổi kiểu một biến là mọi dữ liệu liên quan đã được công bố an toàn.

#### Trạng thái riêng, dữ liệu chung và vòng đời thread — core

Các thread trong một tiến trình thường dùng chung code, heap và ánh xạ bộ nhớ, còn mỗi thread có stack và thanh ghi riêng cho thực thi. Riêng stack không có nghĩa được phần cứng cấm thread khác đọc: nếu địa chỉ biến local bị chia sẻ, thread khác vẫn có thể truy cập và gây lỗi vòng đời. Tạo thread cần bảo đảm đối số còn sống tới lúc được dùng; join chờ hoàn thành và tạo quan hệ đồng bộ theo giao diện. Detached thread khó ràng buộc vòng đời hơn vì không còn thao tác join trực tiếp. Chia sẻ quyền sở hữu một con trỏ không đồng nghĩa dữ liệu mà nó trỏ đến được đồng bộ.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapters 26 and 27: thread state, create and join

#### Data race khác lỗi logic do tranh thứ tự — core

Trong C++, hai đánh giá xung đột trên cùng vị trí nhớ, có ít nhất một truy cập không atomic và không được sắp thứ tự bởi happens-before, có thể tạo data race; các điều kiện chi tiết nằm trong đặc tả ngôn ngữ. Data race gây hành vi không xác định, nên không được chỉ phân tích vài thứ tự xen kẽ rồi coi đó là tập kết quả đầy đủ. Race condition rộng hơn: chương trình có thể dùng toàn atomic mà vẫn sai vì một quyết định kiểm tra rồi hành động không được giữ nguyên tử như một giao dịch. Happens-before được xây từ thứ tự trong thread và các quan hệ đồng bộ; việc hai dòng in ra theo thứ tự không tự chứng minh quan hệ đó.

Nguồn: [cpp-draft-concurrency](https://eel.is/c++draft/intro.races) — [intro.races]: conflicting evaluations, synchronization and data race

#### Atomic RMW và công bố dữ liệu — core

Một phép fetch_add atomic giữ thao tác đọc–sửa–ghi không bị tách thành hai cập nhật cạnh tranh như load rồi store riêng. Relaxed có thể đủ cho bộ đếm chỉ cần nguyên tử của chính giá trị ấy, nhưng không công bố các biến thường khác. Mẫu công bố đơn giản ghi payload trước release-store cờ, rồi chỉ đọc payload sau acquire-load quan sát đúng giá trị từ release tương ứng; quan hệ đọc được giá trị nào là phần thiết yếu của lập luận. Sequential consistency cung cấp bảo đảm mạnh hơn cho các thao tác liên quan nhưng không biến chuỗi nhiều thao tác thành một giao dịch. Compare-and-swap cần vòng thử lại và còn gặp vấn đề ABA cùng thu hồi bộ nhớ trong cấu trúc con trỏ.

Nguồn: [cpp-draft-concurrency](https://eel.is/c++draft/intro.races) — [atomics.order]: relaxed, release/acquire and sequentially consistent operations; [intro.races]

### Mutex, condition variable và semaphore

Khóa giải quyết việc ai được cập nhật một bất biến, nhưng không tự giải quyết việc chờ một điều kiện dữ liệu. Chương nối mutex với RAII, sau đó giải thích vì sao condition variable cần predicate được bảo vệ và vì sao wait phải nhả khóa cùng lúc đi vào chờ. Semaphore cung cấp mô hình đếm khác với thông báo điều kiện. Bounded buffer và reader–writer là các ví dụ để so sánh giao thức, tiến triển và công bằng thay vì học thuộc tên primitive.

#### Mutex và phạm vi bảo vệ bất biến — core

Mutex cho một thread giữ quyền vào vùng găng tại một thời điểm theo hợp đồng khóa. Điều phải bảo vệ là quan hệ giữa dữ liệu, ví dụ head, tail và size của hàng đợi phải thống nhất, chứ không chỉ từng phép ghi độc lập. RAII như lock_guard giúp nhả khóa khi thoát phạm vi do return hoặc exception; nó không tự chọn đúng mutex hay đúng phạm vi khóa. Khóa quá rộng giảm song song, khóa quá hẹp có thể lộ trạng thái trung gian. Spinlock dùng CPU trong lúc chờ, còn mutex chặn có chi phí kernel hoặc đường chờ; lựa chọn cần xét thời lượng giữ khóa và khả năng chủ khóa đang được chạy.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapters 28 and 29

#### Predicate, wait và producer–consumer — core

Condition variable là cách chờ cho tới khi trạng thái có thể thỏa điều kiện, không phải nơi lưu một giấy phép thông báo cho tương lai. Bên chờ giữ mutex, kiểm tra predicate trong vòng while rồi wait; wait nhả mutex và vào chờ theo giao thức nguyên tử, sau khi thức sẽ lấy lại khóa trước khi kiểm tra tiếp. Vòng while cần vì đánh thức giả và vì thread khác có thể đã thay đổi trạng thái trước khi thread được chạy lại. Trong bounded buffer, producer chờ not-full, consumer chờ not-empty, cả hai sửa cùng trạng thái dưới khóa. Thông báo mà không phối hợp predicate có thể mất đánh thức hoặc làm thread tiếp tục khi điều kiện đã hết đúng.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 30: definition, producer/consumer and Mesa semantics

#### Semaphore đếm và công bằng — core

Semaphore giữ số đếm; wait giảm khi có quyền đi tiếp hoặc chờ khi chưa có, post tăng và có thể đánh thức bên đợi. Với bounded buffer, số slot rỗng khởi tạo bằng dung lượng, số item bằng zero, và mutex bảo vệ cấu trúc. Thứ tự chờ semaphore với khóa phải tránh giữ khóa mà phía có thể tạo điều kiện lại cần chính khóa ấy. Semaphore nhị phân có thể dùng cho loại trừ trong một số giao thức nhưng khác mutex về quyền sở hữu. Bài toán reader–writer cho nhiều độc giả đồng thời, song ưu tiên độc giả liên tục có thể làm writer đói; công bằng cần là yêu cầu được thiết kế chứ không tự xuất hiện từ primitive.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 31: semaphores, bounded buffer and reader-writer locks

### Lỗi đồng thời và thiết kế theo sự kiện

Lỗi đồng thời thường chỉ xuất hiện khi thời điểm xen kẽ phù hợp, nên chạy thành công nhiều lần chưa chứng minh đúng. Chương phân loại lỗi theo bất biến bị phá, thứ tự thiếu và sự chờ không tiến triển, rồi nối mỗi loại với cách quan sát và sửa. Event-driven concurrency được giới thiệu như một mô hình tổ chức I/O khác: các callback xử lý sự kiện sẵn sàng và phải giữ công việc ngắn. Nó giảm nhu cầu một thread chặn trên mỗi kết nối nhưng không loại bỏ quản lý trạng thái, tải hoặc lỗi.

#### Phân loại lỗi và giao thức tiến triển — core

Atomicity violation xảy ra khi một nhóm thao tác cần không bị xen vào nhưng lại tách rời; order violation xảy ra khi một bước dùng dữ liệu trước bước khởi tạo cần thiết. Deadlock là vòng chờ không tiến triển, livelock là liên tục đổi trạng thái hoặc thử lại mà không hoàn tất, còn starvation là một bên liên tục bị bỏ qua trong khi hệ thống khác vẫn tiến triển. Quy định thứ tự khóa phá nhiều vòng chờ, nhưng không tự chứng minh công bằng. Một sửa chữa đúng cần viết lại bất biến hoặc quan hệ thứ tự cần có, rồi xét mọi đường lỗi, timeout và hủy thao tác chứ không chỉ thêm sleep để giảm xác suất gặp lỗi.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 32: non-deadlock and deadlock bugs

#### Quan sát, kiểm thử và giới hạn của công cụ — core

Trace ghi định danh thread, thời điểm và sự kiện giúp tái hiện lịch thực thi, nhưng bản thân logging có thể đổi timing và che lỗi. ThreadSanitizer nhận diện nhiều truy cập xung đột trong những đường chạy đã quan sát; không có báo cáo không chứng minh mọi lịch và đầu vào an toàn. Kiểm thử nên tạo tải, lặp, buộc các điểm đồng bộ có chủ đích và kiểm bất biến kết quả, bên cạnh đọc giao thức khóa. Kết quả có data race không được dùng làm phép đo hiệu năng đáng tin. Thư viện có thể yêu cầu người gọi bảo vệ cả chuỗi thao tác dù từng hàm riêng được mô tả thread-safe; hợp đồng là đơn vị cần kiểm tra.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 32: understanding concurrency bugs and avoiding them

Nguồn: [cpp-draft-concurrency](https://eel.is/c++draft/intro.races) — [intro.races]: undefined behavior from data races

#### Readiness, nonblocking và backpressure — core

Event loop chờ tập descriptor sẵn sàng rồi thực hiện bước xử lý ngắn cho từng sự kiện. Readiness không hứa sẽ đọc đủ một thông điệp ứng dụng; ứng dụng vẫn giữ buffer, parse phần đã có và xử lý EAGAIN theo API. Một callback tính toán dài sẽ chặn mọi hoạt động trên cùng loop, nên có thể chuyển tác vụ nặng sang worker. Event loop một thread tạo concurrency nhưng không tự tạo CPU parallelism. Khi bên nhận chậm, hàng đợi đầu ra phải có giới hạn, ngừng nhận thêm hoặc áp dụng chính sách giảm tải; nếu chỉ tích dữ liệu vô hạn, mô hình không còn chịu được tải dù mọi syscall đều nonblocking.

Nguồn: [ostep-v110](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Chapter 33: event loop, select/poll, blocking and state management

### Phân rã song song và phân tích hiệu năng

Song song hóa bắt đầu bằng đồ thị phụ thuộc của bài toán chứ không bắt đầu bằng lệnh tạo thread. Chương tách công việc tổng cộng khỏi độ dài đường phụ thuộc dài nhất, rồi dùng reduction, chia miền và lập lịch để hiểu lượng song song có thể khai thác. Các giới hạn của bộ nhớ, granularity và false sharing giải thích vì sao chương trình đúng vẫn chậm khi thêm lõi. Phép đo phải so cùng công việc và kết quả, đồng thời tính cả overhead để kết luận tăng tốc có ý nghĩa.

#### Work, span và chia miền — core

Work T1 là tổng lượng công việc của DAG tính toán, còn span T∞ là độ dài đường phụ thuộc dài nhất nếu có vô hạn bộ xử lý. Trên P bộ xử lý, thời gian không thể nhỏ hơn T1/P hoặc T∞ trong mô hình lý tưởng; song song tiềm năng bị giới hạn bởi T1/T∞. Chia một mảng thành miền độc lập dễ hơn song song hóa một chuỗi mỗi phần tử phụ thuộc kết quả trước. Reduction cộng có thể tổ chức dạng cây để giảm span, nhưng thay đổi thứ tự cộng số thực có thể đổi kết quả vì làm tròn. Prefix scan là bài toán khác reduction vì cần mọi tổng tiền tố, không chỉ một tổng cuối.

Nguồn: [dive-into-systems](https://diveintosystems.org/book/) — Chapter 14: parallel decomposition and shared-memory algorithms

#### Granularity, cân bằng tải và false sharing — core

Tác vụ quá nhỏ tốn nhiều thời gian tạo, lập lịch và đồng bộ hơn tính toán; tác vụ quá lớn dễ mất cân bằng khi thời lượng khác nhau. Static partition rẻ và dễ giữ locality, còn dynamic scheduling hoặc work stealing thích nghi tốt hơn nhưng thêm overhead. False sharing xuất hiện khi thread sửa các biến logic khác nhau nằm cùng cache line và gây lưu chuyển quyền sở hữu line; đây không nhất thiết là data race. Chia dữ liệu theo block, tích lũy cục bộ rồi gộp và căn chỉnh có thể giảm chi phí, nhưng padding tốn RAM và cần đo. Băng thông RAM có thể bão hòa trước khi mọi lõi dùng hết khả năng tính toán.

Nguồn: [dive-into-systems](https://diveintosystems.org/book/) — Chapter 14: cache coherence, false sharing and parallel performance

#### Amdahl, quy mô bài toán và phép đo — core

Với cùng quy mô bài toán, phần tuần tự tạo trần tăng tốc theo Amdahl; chi phí đồng bộ thực tế làm kết quả còn thấp hơn mô hình lý tưởng. Khi tăng quy mô cùng số lõi, góc nhìn scaled speedup như Gustafson đặt câu hỏi khác, không phủ định Amdahl. Phép đo cần bản tuần tự hợp lý, cùng đầu vào, kết quả kiểm được và số lần chạy đủ thấy biến động. Thời gian wall-clock thích hợp đánh giá người dùng phải chờ, còn tổng CPU time có thể tăng khi nhiều lõi làm việc. Warm-up, tần số, tải nền và chi phí cấp phát có thể đổi kết quả, nên một con số tăng tốc phải đi cùng điều kiện thực nghiệm.

Nguồn: [dive-into-systems](https://diveintosystems.org/book/) — Chapter 14: scalability and measuring parallel performance

## CS-27 — Mạng máy tính

Mạng máy tính nghiên cứu cách các máy trao đổi dữ liệu qua những đường truyền có giới hạn tốc độ, độ trễ, lỗi và chia sẻ tài nguyên. Một tin nhắn ứng dụng đi qua nhiều lớp: định dạng thông điệp, giao thức vận chuyển, chuyển tiếp IP và liên kết cục bộ. Phân lớp không có nghĩa các lớp không ảnh hưởng nhau; một packet bị mất ở liên kết có thể làm transport truyền lại và ứng dụng chờ lâu hơn. Môn học theo đường đi ấy để nối từng quyết định giao thức với vấn đề mà nó giải quyết.

Người học đã làm quen giao diện socket ở Linux nhưng không được mặc định rằng một lần send tạo một lần recv hoặc một địa chỉ IP là một định danh người dùng. Chương ứng dụng đặt framing và các đại lượng đo trước, rồi mới xây truyền tin tin cậy, điều khiển luồng, chống tắc nghẽn, định tuyến và truy cập LAN. Phần TLS giải thích phạm vi bảo vệ kênh liên lạc cùng giới hạn của chứng chỉ. Nội dung trường đang học tới chương hai chỉ là điểm xuất phát cá nhân; các chương sau của syllabus được trình bày đầy đủ mà không tự đánh dấu là đã nắm vững.

Điều kiện đầu vào: linux-system-programming (required): Cần nắm mô tả tệp, vào/ra mức thấp và khái niệm tiến trình để hiểu lập trình socket và đọc/ghi từng phần trên luồng mạng.; graph-algorithms (required): Cần thuật toán đường đi ngắn nhất (Dijkstra, Bellman–Ford) để hiểu định tuyến Link-State và Distance-Vector.

### Phân lớp, đại lượng mạng và framing ứng dụng

Một luồng trao đổi chỉ có thể phân tích khi biết đơn vị đang nói tới là thông điệp, byte, packet hay frame. Chương giới thiệu đóng gói theo lớp rồi tách tốc độ đường truyền khỏi thông lượng thực và độ trễ. DNS, HTTP và socket tạo các ví dụ cụ thể để theo dõi từ tên dịch vụ tới dữ liệu gửi qua một kết nối. Framing được đặt ngay từ đầu vì transport byte-stream không thể tự biết ranh giới nội dung mà ứng dụng dự định gửi.

#### Dịch vụ, giao thức và đóng gói — core

Giao thức quy định các bên cùng lớp trao đổi và diễn giải thông điệp thế nào; dịch vụ mô tả điều lớp ấy cung cấp cho lớp trên. Dữ liệu ứng dụng được thêm header transport, IP rồi liên kết khi gửi, và được tháo theo chiều ngược khi nhận. Switch cục bộ và router không xử lý mọi lớp như ứng dụng đầu cuối; router thay header liên kết cho chặng kế nhưng vẫn chuyển tiếp packet IP. Đóng gói là mô hình giúp phân tích trách nhiệm, không hứa tất cả thiết bị chỉ nhìn một lớp: firewall, NAT và proxy có thể xử lý thông tin ở những lớp khác nhau.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — Chapter 1: Layers, Packets, Datagram Forwarding and Transport

#### Độ trễ, thông lượng và bandwidth-delay product — core

Truyền packet L bit lên liên kết tốc độ R bit/giây cần L/R giây; thời gian tín hiệu lan qua dây là thành phần khác và phụ thuộc khoảng cách cùng môi trường. Độ trễ còn gồm xử lý và chờ hàng đợi. RTT đo đi và về nên không được lấy thay độ trễ một chiều mà không có giả định đối xứng. Throughput là lượng dữ liệu chuyển được trên đơn vị thời gian, goodput chỉ tính phần hữu ích theo mục tiêu đo. Bandwidth-delay product R×RTT cho lượng bit cần đang bay để lấp một đường ống đơn giản; nhận định này cần phân biệt link bottleneck, protocol overhead và window thực được phép gửi.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §1.2 Data Rate, Throughput and Bandwidth; §7.1 Packet Delay; §8.3 Linear Bottlenecks

#### DNS và cấu trúc request–response — core

DNS ánh xạ tên thông qua hệ phân cấp và cache; recursive resolver làm việc thay client, còn các truy vấn iterative theo referrals dần tìm câu trả lời. TTL giới hạn thời gian cache chứ không bảo đảm mọi bản ghi toàn cầu đổi đồng thời; DNS không chỉ dùng UDP trong mọi trường hợp. HTTP định nghĩa method, target, status, header và nội dung theo từng ngữ cảnh. HTTP/1.1 minh họa bằng văn bản và có quy tắc xác định độ dài body; HTTP/2 có framing nhị phân, HTTP/3 dùng QUIC thay vì TCP. Hiểu semantics trước chi tiết phiên bản giúp không gắn một dạng dòng văn bản với mọi HTTP.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §10.1 DNS; Chapter 1: applications and layering

Nguồn: [mdn-learn-web](https://developer.mozilla.org/en-US/docs/Learn_web_development) — HTTP messages — https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages

#### Framing và dữ liệu không đáng tin ở đầu nhận — core

TCP cung cấp luồng byte nên dữ liệu của một send có thể được nhận qua nhiều recv, hoặc nhiều send được gộp trong một recv. Ứng dụng cần delimiter có escaping, length prefix hoặc định dạng tự phân tích rõ ranh giới. Với length prefix, bên nhận phải kiểm giới hạn độ dài trước cấp phát, tích lũy đủ header rồi đủ payload và xử lý đóng giữa chừng. Số nhiều byte cần quy ước endianness; con trỏ và padding của một struct C++ không phải định dạng mạng có thể gửi trực tiếp an toàn. Timeout, hàng đợi có giới hạn và backpressure là một phần của giao thức thực, không chỉ là xử lý lỗi phụ.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §17.6 TCP simplex-talk; §16.3 Fundamental Transport Issues

### Truyền tin tin cậy và TCP

IP không cung cấp sẵn cho ứng dụng một luồng hoàn chỉnh đúng thứ tự. Chương xây độ tin cậy từ sequence number, ACK và timeout trước khi gắn chúng vào header và trạng thái TCP. Cửa sổ trượt cho nhiều dữ liệu đang bay để tránh lãng phí RTT, nhưng cũng cần ngăn nhầm packet cũ và quản lý vùng đệm. Vòng đời kết nối được theo dõi từ mở đến đóng hai chiều, tách việc nhận hết một hướng khỏi xác nhận ứng dụng đã xử lý xong công việc.

#### UDP, mất gói và stop-and-wait — core

UDP giữ đơn vị datagram và cổng để phân phối tới ứng dụng, nhưng không tự bảo đảm giao hàng, thứ tự hay loại trùng. Checksum phát hiện nhiều lỗi bit chứ không chứng minh tính xác thực trước kẻ tấn công. Giao thức stop-and-wait gửi một đơn vị rồi chờ ACK; timeout có thể dẫn tới truyền lại dù dữ liệu hoặc ACK chỉ bị chậm. Sequence number giúp phân biệt bản mới và bản lặp, vì ACK không đến không chứng minh dữ liệu chưa được nhận. Thời gian chờ quá ngắn tăng truyền lại vô ích, quá dài tăng độ trễ phục hồi. Ứng dụng dùng UDP cần tự quyết các bảo đảm thực sự cần, không mặc định phải xây lại toàn bộ TCP.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §8.1 Building Reliable Transport: Stop-and-Wait; §16.1 UDP

#### Cửa sổ trượt và không gian số thứ tự — core

Cửa sổ cho phép gửi nhiều đơn vị chưa ACK, tăng sử dụng đường truyền khi RTT lớn. Go-back-N có thể truyền lại từ điểm mất, còn selective repeat lưu và xác nhận các phần nhận lệch thứ tự để chỉ gửi lại phần thiếu theo thiết kế. Số thứ tự hữu hạn sẽ quay vòng, nên cửa sổ và thời gian sống packet phải giới hạn để không lẫn dữ liệu cũ với vòng mới. TCP đánh số byte, không đánh số từng lần send; ACK lũy tích thường nêu byte tiếp theo mong đợi. SACK bổ sung thông tin các khoảng đã nhận, nhưng không biến TCP thành dịch vụ thông điệp hoặc chứng minh ứng dụng đã tiêu thụ dữ liệu.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §8.2 Sliding Windows; §18.7 TCP Sliding Windows; §19.6 SACK

#### Bắt tay, trạng thái và đóng từng chiều — core

Bắt tay ba bước thông thường trao đổi SYN và ACK để xác nhận hai phía cùng biết số thứ tự ban đầu và thiết lập trạng thái. TCP có thể đóng từng chiều: FIN kết thúc luồng gửi của một phía, phía kia vẫn có thể gửi dữ liệu còn lại. Một chuỗi đóng thường được vẽ thành bốn segment nhưng ACK và FIN có thể được gộp hoặc sự kiện đóng xảy ra đồng thời, nên không phải luôn bốn packet. TIME_WAIT giúp xử lý segment cũ và truyền lại ACK cuối trong mô hình TCP. EOF ở recv cho biết hướng nhận đã kết thúc có trật tự; nó không tự chứng minh giao dịch nghiệp vụ thành công.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §17.3 TCP Connection Establishment; §17.8 state diagram; §18.2 TIMEWAIT

#### Retransmission và điều khiển luồng — core

TCP ước lượng timeout từ RTT cùng biến động để thích nghi độ trễ, đồng thời phải tránh suy luận sai từ mẫu truyền lại. Receiver advertised window hạn chế lượng dữ liệu chưa được nhận để không vượt khả năng buffer của đầu nhận. Đây là flow control bảo vệ endpoint, khác congestion control bảo vệ mạng ở chương sau. Cửa sổ nhận zero không đồng nghĩa mất kết nối; giao thức có cơ chế thăm dò thích hợp. Độ tin cậy của TCP nằm trong phạm vi kết nối và bộ nhớ trạng thái của hai endpoint; server có thể nhận byte rồi crash trước khi lưu bền, nên ứng dụng vẫn cần xác nhận riêng cho tác vụ quan trọng.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §18.10 TCP Flow Control; §18.12 TCP Timeout and Retransmission

### Điều khiển tắc nghẽn và hàng đợi

Nhiều bên gửi có thể cùng dồn vào một bottleneck dù từng bên nhận còn buffer. Nếu chỉ truyền lại nhanh hơn khi mất gói, hệ thống có thể tự làm tải tăng và thông lượng hữu ích giảm. Chương phân tích feedback từ ACK, mất gói hoặc ECN để điều chỉnh lượng dữ liệu đang bay. Reno là mô hình cụ thể để học slow start và AIMD, rồi được đặt cạnh các biến thể mới cùng bài toán hàng đợi và công bằng để thấy giới hạn của một thuật toán đơn.

#### cwnd, slow start và AIMD — core

Congestion window là giới hạn do bên gửi duy trì để đáp ứng tình trạng mạng; lượng đang bay còn chịu giới hạn nhận rwnd. Trong slow start kiểu Reno, ACK làm cửa sổ tăng nhanh, xấp xỉ nhân đôi mỗi RTT dưới điều kiện lý tưởng về ACK và dữ liệu luôn có sẵn. Qua ngưỡng, congestion avoidance tăng chậm hơn để thăm dò dung lượng. Khi có tín hiệu nghẽn, cửa sổ giảm theo chính sách tương ứng. Các đồ thị răng cưa không phải lịch gửi cố định: delayed ACK, nhiều mất gói, ứng dụng ít dữ liệu hoặc giới hạn receive window làm hình dạng thay đổi. Phân tích cần nêu rõ phiên bản và điều kiện.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §19.1 Basics; §19.2 Slow Start; §21.4 AIMD Revisited

#### Fast retransmit, timeout và tín hiệu tắc nghẽn — core

Duplicate ACK có thể gợi ý một khoảng bị thiếu trong khi dữ liệu sau đã tới; fast retransmit truyền lại trước khi hết timer theo điều kiện thuật toán. Reno kết hợp fast recovery sau tín hiệu duplicate ACK, khác đường phục hồi khi timeout thường biểu thị thiếu feedback nặng hơn. Mất gói không luôn do congestion, nhất là trên đường truyền lỗi; xem mọi loss là cùng một nguyên nhân tạo đánh đổi. ECN cho router đánh dấu nghẽn thay vì phải đợi drop, nếu các bên hỗ trợ và thực hiện đúng. CUBIC và BBR dùng các ý tưởng điều khiển khác; không nên suy một trace TCP hiện đại chỉ từ công thức cửa sổ của Reno.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §19.3–19.6; §21.5 Active Queue Management; §22.15 CUBIC; §22.16 BBR

#### Bufferbloat, AQM và ý nghĩa công bằng — core

Buffer hấp thụ burst nhưng không tạo thêm băng thông bottleneck; hàng đợi luôn đầy làm RTT tăng và có thể gây bufferbloat. AQM chủ động đánh dấu hoặc drop dựa trạng thái hàng đợi để phản hồi sớm, còn fair queuing phân chia cơ hội phục vụ giữa các luồng theo quy tắc của scheduler. Công bằng theo flow khác công bằng theo người dùng vì một người có thể mở nhiều flow. Hai kết nối cùng chia đường truyền cũng không nhất thiết có throughput bằng nhau khi RTT, thuật toán và topology khác. Vì vậy mục tiêu thiết kế cần nêu rõ độ trễ, utilization, fairness và loại lưu lượng, thay vì gọi một cấu hình là tối ưu chung.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §20.1–20.3; §21.1 Notions of Fairness; §21.5 AQM; Chapter 23 Queuing and Scheduling

### IP, CIDR và định tuyến

Tầng mạng chuyển packet qua nhiều liên kết bằng địa chỉ và bảng chuyển tiếp, nhưng bảng ấy cần được xây và cập nhật qua control plane. Chương phân biệt forwarding từng packet với tính route, từ subnet và longest-prefix match tới thuật toán distance-vector, link-state và chính sách BGP. Các giao thức đi kèm như ARP, DHCP, ICMP và Neighbor Discovery được gắn đúng phạm vi. IPv4 và IPv6 được đối chiếu ở địa chỉ, fragmentation và khám phá lân cận để tránh coi IPv6 chỉ là IPv4 có số dài hơn.

#### Prefix, subnet và longest-prefix match — core

CIDR mô tả prefix bằng địa chỉ cùng độ dài /p; p bit đầu chọn mạng và phần còn lại phân biệt địa chỉ trong miền ấy. Bảng chuyển tiếp dùng prefix khớp dài nhất để chọn route cụ thể nhất, không chọn dòng đầu tiên tùy ý. Ví dụ /24 IPv4 có 256 mẫu địa chỉ nhưng số địa chỉ host dùng được phụ thuộc loại subnet và quy ước, nên không áp dụng máy móc 2^h−2 cho /31 hoặc /32. Route mặc định dùng khi không có prefix cụ thể hơn. Router chọn next hop và interface, còn địa chỉ MAC trên frame chỉ dùng cho chặng liên kết hiện tại.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §9.5 Classless IP Delivery; §9.6 Subnets; §14.1 CIDR

#### Distance-vector, link-state và BGP — core

Distance-vector trao đổi ước lượng khoảng cách với láng giềng và cập nhật theo quan hệ Bellman–Ford; thông tin cũ có thể tạo vòng hoặc count-to-infinity. Link-state phát tán trạng thái liên kết để mỗi router dựng đồ thị và tính đường như Dijkstra, với chi phí duy trì thông tin và hội tụ. BGP trao đổi reachability giữa các autonomous system, có AS path để hỗ trợ phát hiện vòng và nhiều thuộc tính chính sách. Nó không đơn thuần chọn tuyến ngắn nhất theo số router hay độ trễ. Trong lúc cập nhật chưa hội tụ, control plane có thể tạm không thống nhất; vì thế thuật toán đúng khi ổn định vẫn cần phân tích hành vi lúc topology thay đổi.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §13.1–13.5 Routing-Update Algorithms; §§15.1, 15.4 and 15.6 BGP

#### Giao thức đồng hành và NAT — core

ARP tìm địa chỉ liên kết ứng với IPv4 trên LAN; nó không tìm MAC của server ở bên kia mọi router. DHCP cấp thông số cấu hình như địa chỉ, gateway và resolver theo lease. ICMP báo lỗi hoặc thông tin chẩn đoán; traceroute khai thác TTL/hop limit và phản hồi nhưng thiếu phản hồi không chứng minh một hop đã hỏng. NAT thường giữ ánh xạ địa chỉ/cổng cho các flow và làm thay đổi giả định end-to-end; nó không tự cung cấp mọi bảo đảm bảo mật của firewall. Các dịch vụ này có phạm vi và trạng thái khác nhau, nên mất DNS, mất route và mất ánh xạ ARP có thể tạo triệu chứng gần nhau nhưng cần kiểm tra ở những điểm khác nhau.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §9.7 NAT; §§10.1–10.4 DNS, ARP, DHCP and ICMP

#### IPv6, Neighbor Discovery và MTU — core

IPv6 dùng địa chỉ 128 bit và cơ chế Neighbor Discovery qua ICMPv6 thay vì ARP, cùng các cách cấu hình địa chỉ riêng. Multicast thay nhiều vai trò broadcast của IPv4; không nên mang nguyên quy tắc broadcast address của subnet IPv4 sang IPv6. MTU giới hạn kích thước packet trên liên kết. IPv4 có thể được router fragment nếu các điều kiện cho phép, còn router IPv6 không fragment hộ; endpoint cần xử lý kích thước thích hợp và phản hồi Packet Too Big. Path MTU discovery phụ thuộc thông tin lỗi được truyền tới bên gửi, nên lọc ICMP bừa bãi có thể gây kết nối treo với dữ liệu lớn dù handshake thành công.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §9.4 Fragmentation; Chapter 11 IPv6; §12.2 ICMPv6; §18.6 Path MTU Discovery

### LAN, liên kết và bảo vệ kênh bằng TLS

Packet IP cần được mang qua một liên kết cụ thể trước khi tới router hoặc host kế tiếp. Chương giải thích địa chỉ MAC, học bảng của switch và vòng lặp Ethernet, rồi đối chiếu môi trường có dây với Wi-Fi chia sẻ sóng. Các mã phát hiện lỗi không được nhầm với bảo mật trước đối thủ chủ động. TLS được đặt ở cuối đường đi như lớp bảo vệ kênh giữa endpoint: nó giải quyết nghe lén và giả mạo trong phạm vi nhất định, không thay quyền truy cập ứng dụng hoặc che toàn bộ metadata mạng.

#### Ethernet switch, học địa chỉ và spanning tree — core

Ethernet frame có địa chỉ nguồn và đích ở tầng liên kết. Switch học địa chỉ nguồn qua cổng nhận và chuyển unicast đã biết tới cổng phù hợp; unknown unicast hoặc broadcast có thể được flood theo miền liên quan. Vòng lặp ở tầng hai có thể làm frame quay lại và nhân lên vì không có cơ chế TTL giống IP cho Ethernet thông thường. Spanning tree tạo topology chuyển tiếp không vòng bằng cách chặn một số đường dự phòng; VLAN tách miền broadcast logic nhưng không tự tạo route giữa các VLAN. Cơ chế CSMA/CD thuộc Ethernet chia sẻ half-duplex truyền thống, không phải cách Ethernet switched full-duplex hiện đại bình thường tranh đường dây.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §2.1 Classic Ethernet; §2.4 Switches; §3.1 Spanning Tree; §3.2 VLAN

#### Wi-Fi, framing và phát hiện lỗi — core

Môi trường vô tuyến chia sẻ làm bên phát khó phát hiện va chạm theo cách Ethernet cổ điển, nên Wi-Fi dùng cơ chế tránh va chạm, backoff và ACK ở liên kết. Hidden terminal cho thấy hai bên không nghe được nhau vẫn có thể cùng gây nhiễu ở bên nhận. Truyền lại cục bộ có thể giảm loss nhìn lên tầng trên nhưng cũng tăng độ trễ và jitter. Framing xác định ranh giới frame trên dòng tín hiệu, còn CRC kiểm tra lỗi bit theo mã đa thức. CRC không có khóa và không chống đối thủ sửa dữ liệu rồi tính lại mã; phát hiện lỗi truyền và xác thực thông điệp là hai bài toán khác.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §4.2 Wi-Fi; §6.1 Encoding and Framing; §7.4 Error Detection

#### TLS, chứng chỉ và giới hạn bảo vệ — core

TLS thiết lập các khóa phiên và bảo vệ tính bí mật cùng toàn vẹn dữ liệu trên kênh theo giao thức được thương lượng. Chứng chỉ liên kết danh tính với khóa công khai theo mô hình tin cậy; client phải kiểm chuỗi tin cậy, hostname và hiệu lực chứ không chỉ thấy có chứng chỉ là đủ. Các phiên bản và bộ thuật toán khác nhau nên không mô tả mọi TLS là gửi khóa phiên được mã hóa bằng RSA. HTTPS không che mọi địa chỉ IP, thời điểm và kích thước lưu lượng, cũng không ngăn server hoặc client endpoint bị xâm nhập. Xác thực kênh tới đúng server khác với phân quyền người dùng được đọc bản ghi nào trong ứng dụng.

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §29.2 Forward Secrecy; §29.3 Trust and the Man in the Middle; §29.5 SSH and TLS

## CS-28 — Hệ phân tán

Hệ phân tán gồm các thành phần phối hợp qua thông điệp nhưng không có một bộ nhớ hay đồng hồ chung đáng tin tuyệt đối. Một máy có thể dừng trong khi máy khác vẫn hoạt động, một phản hồi có thể bị mất sau khi công việc đã xong, và mạng có thể chia cụm thành các nhóm không liên lạc được. Những lỗi cục bộ ấy làm thay đổi cách suy luận về đúng đắn: chương trình không thể chỉ lấy kết quả của lời gọi hàm cục bộ rồi thêm retry để trở thành một dịch vụ chịu lỗi.

Môn học đặt mô hình lỗi và thứ tự sự kiện trước cơ chế nhân bản. Tính nhất quán được định nghĩa bằng lịch sử thao tác mà client quan sát, không bằng nhận xét chung rằng dữ liệu ở các máy giống nhau. Raft là trường hợp nghiên cứu chính để giải thích log nhân bản, bầu leader và điều kiện commit an toàn, còn CAP xác định một giới hạn dưới phân hoạch mạng. Phần cuối tách đồng thuận khỏi atomic commit, rồi nối request identity, idempotency và phân mảnh dữ liệu với tình huống crash. Đây là nền để đọc thiết kế hệ thống thực tế có điều kiện và giới hạn, chưa phải chứng nhận có thể vận hành một cụm sản xuất chỉ từ bài mô phỏng.

Điều kiện đầu vào: operating-systems (required): Cần hiểu lưu trữ bền vững, nhật ký chống sập nguồn (WAL) và quản lý tiến trình.; concurrency-parallelism (required): Cần nắm vững thực thi đan xen, điều kiện tranh chấp và tính nguyên tử.; computer-networks (required): Cần hiểu độ trễ mạng, mất gói, đóng kết nối và vì sao timeout không phân biệt được nút chết với mạng chậm.

### Mô hình lỗi, đồng hồ và thứ tự sự kiện

Một thuật toán phân tán chỉ có thể được đánh giá trong mô hình nói rõ máy, mạng và lưu trữ có thể làm gì. Chương phân biệt crash-stop, crash-recovery và hành vi Byzantine, sau đó giải thích vì sao chờ quá lâu không cho biết chắc bên kia đã dừng. Thứ tự nhân quả được xây từ các sự kiện cục bộ và thông điệp thay vì lấy giờ đồng hồ làm chân lý. Đồng hồ logic cho phép ghi lại một phần thông tin thứ tự nhưng từng loại có giới hạn và chi phí riêng.

#### Lỗi cục bộ và giả định thời gian — core

Crash-stop giả định nút dừng và không trở lại; crash-recovery cho phép khởi động lại nhưng cần phân biệt trạng thái RAM đã mất với dữ liệu bền vững còn giữ. Byzantine bao gồm hành vi tùy ý hoặc nói dối và mạnh hơn lỗi crash. Trong hệ bất đồng bộ không có chặn trên cố định cho độ trễ thông điệp hay bước tính toán, nên timeout không phân biệt được máy chết với máy hoặc mạng rất chậm. Mô hình đồng bộ một phần cho phép đặt điều kiện thời gian để thuật toán cuối cùng tiến triển. Safety là không xảy ra kết quả sai; liveness là cuối cùng có tiến triển theo giả định đã nêu, không phải mỗi request luôn xong trong một timeout tùy ý.

Nguồn: [mit-65840-raft](https://raft.github.io/) — Ongaro & Ousterhout, Raft extended paper (2014), §2 assumptions and §5.6 Timing and availability

Nguồn: [gilbert-lynch-cap](https://groups.csail.mit.edu/tds/papers/Gilbert/Brewer2.pdf) — §§1–2: safety, liveness and unreliable systems

#### RPC, retry và kết quả không biết chắc — core

RPC che chi tiết đóng gói và truyền tin nhưng không biến mạng thành lời gọi hàm cục bộ. Nếu client không nhận phản hồi, có thể request chưa tới, server chưa chạy, hoặc đã thực hiện xong rồi phản hồi bị mất. Retry tạo nguy cơ thực hiện lặp; một request ID giúp nhận diện nhưng chỉ có ích khi server lưu và kiểm tra nó trong cùng giao thức với hiệu ứng. Deadline giúp giới hạn thời gian chờ, còn hủy ở client không bảo đảm server đã ngừng mọi tác vụ. Những trạng thái không biết chắc cần được biểu diễn trong hợp đồng API thay vì báo thất bại rồi tự động làm lại một giao dịch không thể lặp an toàn.

Nguồn: [mit-65840-raft](https://raft.github.io/) — Ongaro & Ousterhout, Raft extended paper (2014), §8 Client interaction: duplicate commands and serial numbers

Nguồn: [dordal-intronetworks](https://intronetworks.cs.luc.edu/current/html/index.html) — §16.5 Remote Procedure Call (RPC)

#### Happened-before, Lamport và vector clock — core

Quan hệ happened-before gồm thứ tự trong một tiến trình, sự kiện gửi trước nhận cùng thông điệp và tính bắc cầu. Đồng hồ Lamport tăng khi có sự kiện; khi nhận, lấy lớn hơn cả đồng hồ cục bộ và timestamp thông điệp. Nếu a xảy ra trước b theo quan hệ này thì L(a)<L(b), nhưng chiều ngược không đúng: hai sự kiện độc lập vẫn có thể có timestamp khác nhau. Ghép timestamp với định danh tạo total order nhất quán với nhân quả, không biến total order ấy thành thứ tự thời gian vật lý thật.

Vector clock giữ thành phần đếm theo bên tham gia; dưới mô hình và quy tắc cập nhật phù hợp, so sánh từng thành phần có thể phân biệt tổ tiên với cập nhật đồng thời. Nó cần metadata tăng theo số danh tính được theo dõi, và việc rút gọn vector có thể làm mất thông tin. Ví dụ hai replica cùng sửa từ phiên bản cũ có thể tạo hai phiên bản không cái nào bao hàm cái kia; hệ thống cần quy tắc hòa giải chứ không được tùy tiện gọi timestamp lớn hơn là cập nhật đến sau theo nhân quả.

Nguồn: [lamport-time-clocks](https://lamport.azurewebsites.net/pubs/time-clocks.pdf) — Partial ordering and Clock Condition; logical clock implementation

Nguồn: [amazon-dynamo-2007](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf) — §4.4 Data Versioning: vector clocks and truncation

### Nhân bản, mô hình nhất quán và CAP

Nhân bản tạo nhiều bản sao để phục vụ và chịu một số lỗi, nhưng đưa vào câu hỏi các cập nhật được sắp xếp và xác nhận khi nào. Chương phân tích primary–backup và các lịch sử đọc/ghi trước khi định nghĩa linearizability, sequential consistency và eventual consistency. CAP được phát biểu đúng trong bối cảnh phân hoạch: có những request không thể vừa luôn trả lời vừa bảo đảm quan sát như một bản sao nguyên tử. Quorum là công cụ xây giao thức, không phải công thức số lượng đủ thay cho toàn bộ chứng minh.

#### Primary–backup và chuyển quyền an toàn — core

Primary sắp thứ tự cập nhật và gửi sang backup; đồng bộ trước trả lời giảm nguy cơ mất cập nhật đã xác nhận nhưng tăng độ trễ hoặc giảm khả dụng khi replica chậm. Nhân bản bất đồng bộ có thể để backup tụt sau, nên failover cần nói rõ dữ liệu đã ACK có thể mất hay không. Khi mạng chia cắt, hai phía có thể cùng tưởng mình là primary. Số term hoặc fencing token chỉ bảo vệ được nếu nơi nhận thao tác kiểm và từ chối quyền cũ; chỉ ghi một nhãn leader trong RAM không ngăn side effect từ leader cũ. Quyền đọc từ replica cũng cần hợp đồng freshness riêng chứ không tự thừa hưởng thứ tự ghi của primary.

Nguồn: [mit-65840-raft](https://raft.github.io/) — Ongaro & Ousterhout, Raft extended paper (2014), §5.1 terms; §5.2 leader election; §8 linearizable reads

#### Các mô hình nhất quán qua lịch sử thao tác — core

Linearizability đòi mỗi thao tác có thể đặt tại một điểm giữa lúc gọi và lúc trả lời, tạo thứ tự phù hợp đặc tả đối tượng và giữ thứ tự thời gian thực của các thao tác không chồng nhau. Sequential consistency chỉ đòi một thứ tự toàn cục giữ thứ tự chương trình của từng client, không nhất thiết giữ mọi thứ tự thời gian thực giữa client khác nhau. Eventual consistency hứa hội tụ theo các điều kiện như ngừng cập nhật mới, truyền đủ thông tin và quy tắc hòa giải tương thích; nó không cung cấp một chặn độ trễ tươi mới chung. Đọc thấy giá trị cũ có thể được một mô hình cho phép nhưng vẫn vi phạm hợp đồng nghiệp vụ cần read-your-writes.

Nguồn: [gilbert-lynch-cap](https://groups.csail.mit.edu/tds/papers/Gilbert/Brewer2.pdf) — §2: atomic consistency and availability

Nguồn: [mit-65840-raft](https://raft.github.io/) — Ongaro & Ousterhout, Raft extended paper (2014), §8 Client interaction

Nguồn: [amazon-dynamo-2007](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf) — §4.4 Data Versioning

#### CAP có điều kiện và giới hạn của quorum — core

Trong phát biểu CAP tiêu chuẩn, consistency là kiểu một bản sao nguyên tử/linearizable và availability yêu cầu request tới nút không lỗi cuối cùng được đáp lại theo đặc tả. Khi phân hoạch làm hai nhóm không trao đổi được, không thể bảo đảm đồng thời cả hai cho mọi lịch sử đọc/ghi. Đây không phải menu luôn chọn bất kỳ hai chữ, vì phân hoạch là một tình huống lỗi phải chịu chứ không phải tính năng tùy ý tắt.

Với N replica cố định, R+W>N tạo giao giữa tập đọc và tập ghi, còn 2W>N tạo giao giữa hai tập ghi. Giao tập hợp là điều kiện hữu ích nhưng chưa chứng minh linearizability: còn cần phiên bản, quy tắc cập nhật, xử lý thao tác chồng nhau, lỗi và thay thành viên. Sloppy quorum có thể dùng các nút khác khi lỗi nên không được áp công thức giao như thể mọi lần đều trên cùng một tập replica cố định.

Nguồn: [gilbert-lynch-cap](https://groups.csail.mit.edu/tds/papers/Gilbert/Brewer2.pdf) — §2 CAP theorem assumptions and §3 implications

Nguồn: [amazon-dynamo-2007](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf) — §4.5 Execution of get/put; §4.6 Handling Failures: Hinted Handoff

### Đồng thuận và Raft

Đồng thuận về một log cho phép các replica áp dụng cùng chuỗi lệnh lên state machine xác định. Chương dùng Raft để tách ba bài toán: bầu leader, sao chép log và giữ tính an toàn khi leader thay đổi. Term không chỉ là nhãn phiên bản mà tham gia quyết định bỏ quyền và đánh giá log ứng viên. Các quy tắc lưu bền, điều kiện commit và cập nhật state machine được đặt cạnh ví dụ crash để thấy vì sao đếm số bản sao mà không xét term vẫn có thể sai.

#### Term, bầu chọn và trạng thái bền vững — core

Raft có follower, candidate và leader; mỗi term nhận diện một vòng hoạt động logic và máy nhận term cao hơn cập nhật term rồi bỏ quyền cũ theo giao thức. Candidate xin phiếu và cần đa số trong cấu hình đang áp dụng; mỗi nút chỉ bỏ tối đa một phiếu trong một term. currentTerm, votedFor và log phải được lưu bền trước các phản hồi đòi hỏi chúng để nút khởi động lại không quên lời hứa. Timeout ngẫu nhiên giúp giảm bầu hòa và hỗ trợ liveness khi mạng đủ ổn định; safety không dựa vào giả định mọi đồng hồ chạy chính xác hoặc timeout chứng minh leader đã chết.

Nguồn: [mit-65840-raft](https://raft.github.io/) — Ongaro & Ousterhout, Raft extended paper (2014), §5.1 basics; §5.2 election; Figure 2 persistent state; §5.6 timing

#### Log matching và điều kiện ứng viên cập nhật — core

AppendEntries chứa vị trí và term ngay trước phần log được gửi để follower kiểm tra có chung tiền tố phù hợp. Nếu xung đột, phần chưa commit có thể bị thay thế theo giao thức; không được ghi đè tùy ý lệnh đã áp dụng. Điều kiện bỏ phiếu so sánh term của entry cuối trước rồi mới tới index để bảo đảm leader mới có log đủ cập nhật, không chỉ chọn máy có nhiều entry nhất. Log Matching Property cùng hạn chế bầu leader là một phần giữ Leader Completeness. Chạy state machine theo log đã commit, đúng thứ tự và có tính xác định, là cầu nối từ đồng thuận về byte log sang trạng thái dịch vụ giống nhau.

Nguồn: [mit-65840-raft](https://raft.github.io/) — Ongaro & Ousterhout, Raft extended paper (2014), §5.3 log replication and §5.4.1 election restriction

#### Commit trong term hiện tại và an toàn khi đổi leader — core

Leader có thể đưa commit index tiến lên bằng đếm đa số cho entry thuộc term hiện tại theo quy tắc Raft. Không được lấy một entry của term cũ đã xuất hiện trên đa số rồi kết luận commit chỉ bằng phép đếm ấy; các tình huống đổi leader trong bài báo cho thấy nguy cơ. Khi entry term hiện tại được commit, tiền tố trước nó được commit theo. Client chỉ được nhận kết quả theo điểm hoàn thành mà hợp đồng dịch vụ quy định. Đọc không ghi log cũng cần xác nhận leader còn thẩm quyền và state machine đủ cập nhật để phục vụ linearizable read; tự đọc RAM của một nút từng là leader không đủ.

Nguồn: [mit-65840-raft](https://raft.github.io/) — Ongaro & Ousterhout, Raft extended paper (2014), §5.4.2 Committing entries from previous terms, Figure 8; §8 Client interaction

#### Snapshot, thay thành viên và giới hạn chịu lỗi — core

Snapshot thay tiền tố log đã áp dụng bằng ảnh trạng thái cùng metadata như last included index và term; nếu bỏ metadata cần thiết, replica không còn biết cách nối log tiếp theo đúng. Thay thành viên làm đổi định nghĩa đa số, nên đổi trực tiếp từ tập cũ sang tập mới có thể tạo hai nhóm đều tưởng đủ quyền. Joint consensus dùng cấu hình chuyển tiếp với các đa số cần thiết theo giao thức để giữ giao nhau. Cụm 2f+1 nút có thể tiếp tục theo mô hình khi còn đa số phù hợp; không có nghĩa mọi lỗi f nút đều vô hại với độ trễ hoặc dữ liệu ngoài log, và không mở rộng thành chịu f nút Byzantine.

Nguồn: [mit-65840-raft](https://raft.github.io/) — Ongaro & Ousterhout, Raft extended paper (2014), §6 Cluster membership changes; §7 Log compaction; §5 assumptions

### Atomic commit, idempotency và phân mảnh

Một dịch vụ thực không chỉ cần đồng ý thứ tự lệnh mà còn phải phối hợp hiệu ứng ở nhiều nơi, nhận request lặp và mở rộng dữ liệu qua nhiều máy. Chương tách atomic commit của một giao dịch khỏi đồng thuận nhân bản, rồi đặt idempotency trong bối cảnh server có thể crash giữa hiệu ứng và phản hồi. Phân mảnh được phân tích như một thay đổi quyền sở hữu dữ liệu cần giao thức di chuyển và định tuyến. Các chủ đề này nối kiến thức cơ sở dữ liệu sắp học mà không đòi người mới đã biết triển khai một DBMS.

#### Hai pha commit và trạng thái không thể tự quyết — core

Atomic commit yêu cầu các bên cùng commit hoặc cùng abort hiệu ứng của một giao dịch. Trong 2PC, coordinator xin prepare; participant bỏ phiếu yes chỉ khi đã giữ điều kiện và ghi bền trạng thái cho phép hoàn tất sau crash. Coordinator ghi quyết định phù hợp trước khi thông báo; all-yes mới cho phép commit. Participant đã prepared không thể tự abort chỉ vì timeout, vì bên khác có thể đã nhận commit. Vì vậy 2PC cơ bản có thể block khi thiếu quyết định của coordinator. Nó không tự cung cấp isolation hoặc trở thành giao thức đồng thuận chịu mất một số participant tùy ý; có thể dùng cơ chế nhân bản để cải thiện coordinator nhưng cần phân tích giao thức ghép.

Nguồn: [mit-6824-2pc-2006](https://ocw.mit.edu/courses/6-824-distributed-computer-systems-engineering-spring-2006/e84a1d97feaac296a8ce261d591a89ef_lec13_twophase.pdf) — Lecture 13, pages 1–3: prepare, timeouts, blocking and recovery

Nguồn: [postgresql-docs](https://www.postgresql.org/docs/current/) — PostgreSQL 18: PREPARE TRANSACTION, Notes — https://www.postgresql.org/docs/18/sql-prepare-transaction.html

#### Idempotency, request identity và giới hạn exactly-once — core

Một thao tác idempotent có hiệu ứng lặp giống hiệu ứng một lần, ví dụ đặt trạng thái thành một giá trị xác định; tăng số dư thêm tiền không có tính chất ấy. Dedupe dùng request ID cùng kết quả đã lưu, nhưng ghi hiệu ứng trước rồi ghi ID sau vẫn để lại cửa sổ crash khiến retry gây hiệu ứng lặp. Cần cập nhật hiệu ứng và dấu đã xử lý trong một cơ chế nguyên tử thích hợp hoặc thiết kế side effect tự lặp an toàn. TTL của bảng dedupe, ID bị tái sử dụng và nhiều request đồng thời đều là điều kiện phải xét. Khẳng định exactly-once chỉ có nghĩa trong phạm vi giao thức và lưu trữ đã nêu, không tự bao trùm mọi hệ bên ngoài như thanh toán hoặc gửi email.

Nguồn: [mit-65840-raft](https://raft.github.io/) — Ongaro & Ousterhout, Raft extended paper (2014), §8: client serial numbers and cached responses

Nguồn: [mit-6824-2pc-2006](https://ocw.mit.edu/courses/6-824-distributed-computer-systems-engineering-spring-2006/e84a1d97feaac296a8ce261d591a89ef_lec13_twophase.pdf) — Lecture 13: persistent recovery state before messages

#### Range/hash sharding, hotspot và di chuyển dữ liệu — core

Sharding chia tập khóa giữa các chủ sở hữu, còn replication tạo nhiều bản của cùng phần dữ liệu; hai trục có thể kết hợp nhưng giải quyết vấn đề khác nhau. Chia theo range thuận lợi truy vấn khoảng nhưng có thể tập trung ghi ở một đầu; hash phân tán khóa nhưng làm truy vấn khoảng khó hơn. Consistent hashing giảm phần ánh xạ phải đổi khi thay nút, còn virtual node giúp phân bổ linh hoạt hơn; nó không tự chia tải của một khóa quá nóng. Khi di chuyển shard, hệ thống cần quyết định thời điểm đổi quyền đọc/ghi, chuyển dữ liệu cùng cập nhật đang tới và xử lý client còn route cũ. Phiên bản cấu hình hoặc redirect hỗ trợ giao thức nhưng không tự chứng minh không mất hoặc lặp cập nhật.

Nguồn: [amazon-dynamo-2007](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf) — §4.2 Partitioning Algorithm, virtual nodes; §4.3 Replication

Nguồn: [mit-65840-raft](https://raft.github.io/) — Ongaro & Ousterhout, Raft extended paper (2014), §6 configuration changes as a distinct problem
