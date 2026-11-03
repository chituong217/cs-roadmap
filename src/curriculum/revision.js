// Mở rộng trên ID ổn định: bản sao lưu 1.0/1.1 vẫn đọc được.
const task = (id, chapter, title, todos, extra) => ({ id, chapter, title, kind: 'Học', todos, extra });

const splits = {
  'linear-eigen': [
    task('linear-eigen', 'math', 'Trị riêng và vector riêng', [
      'Dùng ma trận đối xứng 2×2, tìm nghiệm của det(A−λI)=0 rồi tìm vector v khác 0 thỏa Av=λv.',
      'Tính Av cho một vector riêng và một vector không phải vector riêng; vẽ để phân biệt hướng chỉ co giãn với hướng bị đổi.',
      'Thay từng cặp λ,v vào phương trình để kiểm tra; phân biệt bội đại số với số vector riêng độc lập khi gặp trị riêng lặp.',
      'Giải thích vai trò của các hướng riêng trong phép biến đổi và vì sao không phải mọi ma trận đều chéo hóa được.',
      'Tự giải một ma trận 2×2 mới rồi kiểm tra bằng phép nhân, không chỉ nhìn đáp án của thư viện.',
    ]),
    task('linear-svd', 'math', 'SVD và xấp xỉ hạng thấp', [
      'Ôn chuyển vị, trực giao, hạng và trị riêng trước khi đọc A=UΣVᵀ; ghi kích thước của ba ma trận trong dạng đầy đủ và dạng rút gọn.',
      'Dùng ma trận chữ nhật 3×2 để phân biệt SVD với phân rã trị riêng của ma trận vuông; kiểm tra phép nhân có đúng kích thước.',
      'Trên ma trận có sẵn phân rã, giữ một singular value lớn nhất rồi tính lại xấp xỉ hạng 1; so sai số với bản giữ cả hai.',
      'Giải thích việc bỏ hướng ít đóng góp làm giảm bộ nhớ nhưng mất thông tin; liên hệ PCA ở mức ý tưởng.',
      'Không cần tự viết bộ giải SVD số; dùng thư viện sau khi học NumPy nếu muốn kiểm tra trên dữ liệu lớn hơn.',
    ]),
  ],
  'prob-distributions': [
    task('prob-distributions', 'math', 'Bernoulli và phân phối nhị thức', [
      'Phân biệt một phép thử Bernoulli với số lần thành công trong n phép thử độc lập có cùng xác suất p.',
      'Với n=4,p=0.3, lập xác suất cho các giá trị từ 0 đến 4; kiểm tra tổng bằng 1 và tính xác suất ít nhất một thành công.',
      'Tính kỳ vọng, phương sai và giải thích ý nghĩa trong bài toán; chỉ rõ giả thiết độc lập và p không đổi.',
      'Tạo một tình huống xác suất thay đổi giữa các lần thử để giải thích vì sao không được áp dụng nhị thức máy móc.',
    ]),
    task('prob-poisson', 'math', 'Phân phối Poisson và số sự kiện', [
      'Mô tả biến đếm sự kiện trong một khoảng; giải nghĩa λ là số sự kiện kỳ vọng trên khoảng đang xét.',
      'Với trung bình 3 yêu cầu/phút, tính xác suất không có yêu cầu và có ít nhất một yêu cầu trong một phút.',
      'Đổi sang khoảng hai phút và giải thích khi nào có thể đổi λ thành 6; xét giả thiết tốc độ ổn định, các khoảng độc lập.',
      'Phân biệt mô hình Poisson với số thành công trong một số phép thử cố định; không dùng mô hình chỉ vì dữ liệu là số nguyên.',
    ]),
    task('prob-normal', 'math', 'Phân phối chuẩn và chuẩn hóa', [
      'Giải nghĩa μ,σ; phân biệt mật độ tại một điểm với xác suất trong một khoảng.',
      'Chuẩn hóa Z=(X−μ)/σ với σ>0, tính xác suất khoảng bằng bảng hoặc công cụ miễn phí, rồi diễn giải về đơn vị gốc.',
      'So hai phân phối có cùng μ nhưng khác σ; nhận xét dữ liệu lệch hoặc có ngoại lệ có thể không phù hợp giả thiết chuẩn.',
      'Phân biệt dữ liệu gốc có phân phối chuẩn với phân phối của trung bình mẫu; chưa suy ra mọi dữ liệu trở thành chuẩn khi n lớn.',
    ]),
  ],
  'db-window': [
    task('db-window', 'database', 'CTE và view để tổ chức truy vấn', [
      'Viết một truy vấn tổng hợp mượn sách bằng subquery, rồi tách cùng logic thành CTE có tên rõ; so hai kết quả.',
      'Tạo view cho một truy vấn cần dùng lại, đọc định nghĩa và phân biệt view thông thường với bản sao dữ liệu.',
      'Thay đổi dữ liệu gốc rồi truy vấn view để kiểm tra; xét quyền truy cập và sự phụ thuộc khi đổi cấu trúc bảng.',
      'Dùng EXPLAIN để quan sát thay vì mặc định CTE hoặc view luôn làm truy vấn nhanh hơn.',
    ]),
    task('db-window-functions', 'database', 'Window function và xếp hạng', [
      'Dùng dữ liệu mượn sách theo độc giả để so GROUP BY với hàm OVER: bản nào giữ được từng hàng ban đầu.',
      'Viết ROW_NUMBER,RANK và DENSE_RANK theo số lượt mượn; thêm hai hàng bằng điểm để giải thích sự khác biệt.',
      'Viết tổng lũy kế với PARTITION BY,ORDER BY và khung ROWS tường minh; thử ngày trùng nhau để phát hiện mặc định dễ gây nhầm.',
      'Kiểm tra kết quả trên bảng nhỏ tính tay được; thêm khóa phụ khi cần thứ tự xác định giữa các hàng bằng nhau.',
    ]),
  ],
  'ml-unsupervised': [
    task('ml-unsupervised', 'ai', 'K-means và phân cụm', [
      'Phân biệt nhãn có sẵn với nhóm do thuật toán tìm; không tự gán ý nghĩa nghiệp vụ cho số hiệu cluster.',
      'Chạy tay một vòng gán cụm rồi cập nhật tâm trên vài điểm 2D; tính tổng bình phương khoảng cách trước và sau.',
      'Thử thay thang đo một thuộc tính, khởi tạo và số cụm; dùng nhiều lần khởi tạo, ghi seed và kiểm tra cụm rỗng.',
      'Đánh giá bằng đặc điểm dữ liệu và mục đích sử dụng; dựng ví dụ cụm không lồi khiến K-means không phù hợp.',
    ]),
    task('ml-pca', 'ai', 'PCA và giảm chiều dữ liệu', [
      'Ôn vector riêng và phép chiếu; tạo dữ liệu 2D gần một đường thẳng để giải thích hướng giữ phương sai lớn.',
      'Fit bước chuẩn hóa và PCA chỉ trên train, dùng cùng phép biến đổi cho validation/test; không fit lại trên tập đánh giá.',
      'Đọc explained variance ratio và chọn số chiều theo mục tiêu; so chất lượng mô hình với bản không giảm chiều.',
      'Thử khôi phục dữ liệu từ tọa độ giảm chiều, đo sai số và phân biệt giảm chiều với chọn nguyên vài cột.',
      'Nếu chưa học SVD, dùng trực giác phép chiếu và vector riêng; chỉ quay lại ô SVD khi muốn hiểu cách tính số sâu hơn.',
    ]),
  ],
  'dl-modalities': [
    task('dl-modalities', 'ai', 'CNN và phép tích chập', [
      'Dùng ảnh một kênh 4×4 và kernel 2×2, chạy tay từng cửa sổ để tính một feature map; nói rõ phép đang dùng là cross-correlation như thư viện.',
      'Chọn stride,padding rồi tính kích thước đầu ra, kiểm tra bằng PyTorch; phân biệt số kênh đầu vào với số filter.',
      'Giải thích chia sẻ trọng số, vùng tiếp nhận và pooling; so số tham số với một lớp fully connected trên cùng đầu vào.',
      'Huấn luyện mạng CNN nhỏ trên dữ liệu miễn phí và CPU với tập con vừa sức; đối chiếu baseline, split và lỗi dự đoán.',
    ]),
    task('dl-embedding', 'ai', 'Embedding và biểu diễn đối tượng bằng vector', [
      'Lập bảng từ vựng nhỏ, ánh xạ token sang ID rồi dùng ma trận embedding để lấy vector; viết shape của ID và tensor kết quả.',
      'Phân biệt ID là chỉ mục với khoảng cách có nghĩa; hoán đổi ID và đổi tương ứng các hàng để kiểm tra mô hình biểu diễn.',
      'Dùng một bước cập nhật đơn giản để quan sát hàng nào nhận gradient; giải thích vector được học từ mục tiêu và dữ liệu.',
      'Xử lý token chưa biết/padding rõ ràng; không khẳng định hai vector gần nhau luôn đồng nghĩa trong mọi tác vụ.',
    ]),
    task('dl-attention', 'ai', 'Scaled dot-product attention và mask', [
      'Giải nghĩa query,key,value rồi ghi shape Q,K,V trên chuỗi ba token; xác định phép nhân QKᵀ hợp lệ.',
      'Tính điểm, chia cho căn bậc hai kích thước key, softmax theo trục key rồi nhân V trên dữ liệu nhỏ.',
      'Thêm causal mask và padding mask, kiểm tra trọng số vị trí bị chặn bằng 0 sau softmax; tránh hàng bị mask hết.',
      'So kết quả chạy tay với thư viện; không đồng nhất một phép attention với toàn bộ Transformer hoặc mô hình ngôn ngữ.',
    ]),
  ],
};

// Các ô vàng được bỏ qua trong vòng nền; ghi rõ lúc cần quay lại.
const optionalGroups = [
  ['dsa-balanced dsa-trie', 'Quay lại khi cần cấu trúc tra cứu chuyên sâu hoặc luyện DSA nâng cao. BST, bảng băm và heap vẫn là nền cần học.'],
  ['graph-scc graph-euler graph-flow graph-tree-dp', 'Quay lại khi đi sâu thuật toán, thi lập trình hoặc bài toán thực tế cần kỹ thuật này; không cần để học tiếp mạng hay cơ sở dữ liệu.'],
  ['algo-bitmask range-fenwick range-segment range-practice string-kmp string-hash string-compression algo-number algo-random', 'Phần đào sâu thuật toán. Có thể để sau vòng nền; ô luyện tổng hợp phía sau có lựa chọn chỉ dùng kiến thức nền.'],
  ['linear-svd', 'Đào sâu đại số tuyến tính, ML và tính toán số. PCA nhập môn phía sau có thể học từ phép chiếu và vector riêng.'],
  ['arch-project os-shell-project', 'Lab hệ thống dài hơn mức nền. Nên quay lại nếu chọn hệ thống, C++ hoặc muốn củng cố bằng project này.'],
  ['db-window-functions db-nosql', 'Quay lại khi cần phân tích dữ liệu nâng cao hoặc yêu cầu dữ liệu vượt lựa chọn SQL đang dùng.'],
  ['web-react', 'Có thể dùng JavaScript thuần cho giao diện project; quay lại React khi muốn theo frontend hoặc sản phẩm cần quản lý giao diện phức tạp hơn.'],
  ['pl-lexer pl-parser pl-interpreter', 'Project đào sâu ngôn ngữ và trình biên dịch. Các ô lý thuyết tính toán và hệ kiểu trước đó vẫn thuộc nền KHMT.'],
  ['gfx-3d hci-mini-project', 'Quay lại khi chọn đồ họa, công cụ trực quan hoặc muốn một project minh họa thuật toán; phần HCI và khả năng tiếp cận vẫn cần học.'],
  ['dl-autograd dl-network dl-modalities dl-embedding dl-attention', 'Đào sâu deep learning sau nền ML. Học theo thứ tự trong nhóm nếu chọn AI; có thể chạy ví dụ nhỏ trên CPU, không cần thuê GPU.'],
  ['dist-consensus dist-design-project', 'Quay lại khi đào sâu hệ phân tán; phần lỗi, retry, cache và thiết kế từ yêu cầu vẫn là kiến thức nền trong roadmap.'],
  ['research-reproduce', 'Đặc biệt phù hợp hướng nghiên cứu/ML; nếu chưa chọn hướng này, có thể để sau và giữ các kỹ năng đọc, kiểm chứng cơ bản.'],
];
const optional = new Map(optionalGroups.flatMap(([ids, reason]) => ids.split(' ').map(id => [id, reason])));

const evidence = {
  'cpp-check': 'Không nhìn mã cũ, đổi riêng yêu cầu tính tổng thành tổng các số không âm, giữ cách tìm max ban đầu. Sửa hàm tính tổng rồi giải thích vì sao các hàm còn lại không cần đổi; nếu cần gợi ý, ghi đúng mục cần ôn, không đánh dấu cả chặng đã vững.',
  'oop-review': 'Nhận một yêu cầu thêm loại người dùng mới: chỉ ra phần nào dùng chứa, phần nào thật sự cần đa hình, sửa mã và chạy lại test cũ; tự giải thích thứ tự khởi tạo/hủy và quyền sở hữu.',
  'project-review': 'Đưa README cho một người khác dựng và chạy thử; tự xử lý một lỗi họ tái hiện được. Lưu commit trước/sau và test ngăn lỗi quay lại.',
  'math-proof-practice': 'Viết trọn một chứng minh quy nạp chưa xem mẫu, nêu mệnh đề và bước quy nạp; nhờ người khác hoặc ChatGPT tìm bước suy ra thiếu căn cứ rồi tự sửa.',
  'dsa-index-project': 'Nếu bỏ qua trie, chỉ bắt buộc lập chỉ mục mã bằng bảng băm và tra tên bằng duyệt tuyến tính; thử thêm/xóa để chứng minh chỉ mục không lệch. Trie là phần nâng cấp sau khi tự làm được ô tương ứng.',
  'algo-dp-practice': 'Làm một bài DP mới không được cho sẵn tên trạng thái; viết trạng thái, điều kiện đầu, chuyển tiếp và thứ tự tính, rồi so với vét cạn trên dữ liệu nhỏ.',
  'graph-shortest-review': 'Tự chọn BFS,Dijkstra hoặc Bellman–Ford cho ba đề không có nhãn thuật toán; nêu dữ kiện quyết định lựa chọn và dựng một phản ví dụ cho cách chọn sai.',
  'graph-mst-practice': 'Tự tính MST trên một đồ thị có trọng số bằng nhau và thành phần tách rời; giải thích lúc nào trả về cây, lúc nào chỉ có rừng khung, rồi đối chiếu hai cách cài.',
  'algo-mixed': 'Nếu đã để các ô vàng học sau, chọn tám bài chỉ cần mảng, hash, sắp xếp, tìm kiếm, đệ quy, DP cơ bản hoặc BFS/Dijkstra; không chọn bài buộc dùng Fenwick,KMP hay max flow chưa học.',
  'math-synthesis': 'Giao bản báo cáo và dữ liệu nhỏ cho người khác tính lại một kết quả; nếu dùng code mô phỏng, chờ phần Python hoặc dùng ngôn ngữ đang biết, không coi Python là điều kiện để hoàn thành toán.',
  'os-producer': 'Cho hai producer và hai consumer chạy lặp, kiểm tra mọi mã công việc xuất hiện đúng một lần; tự tái hiện lỗi trước khi sửa và giải thích bất biến được khóa bảo vệ.',
  'net-review': 'Tự chẩn đoán một lỗi DNS và một lỗi cổng dịch vụ trong môi trường của mình; ghi quan sát phân biệt hai lỗi, không chỉ chép một danh sách lệnh.',
  'db-library-project': 'Dựng database rỗng từ script, chạy ca hai phiên cùng mượn sách rồi kiểm tra trạng thái cuối; tự backup và restore sang database mới trước khi chốt.',
  'api-ui': 'Nếu không học React, dùng trang HTML và JavaScript thuần để hoàn thành cùng luồng; tiêu chí là request, trạng thái lỗi và dữ liệu đúng, không phải tên framework.',
  'api-errors': 'Tự gửi request bằng công cụ ngoài giao diện: thiếu token, sai chủ sở hữu, dữ liệu sai và request lặp; ghi status/body và kiểm tra dữ liệu không bị đổi trái phép.',
  'se-collaboration': 'Nhờ một người review pull request có thay đổi thực; trả lời góp ý, sửa và giải thích phần trách nhiệm của mình bằng diff và kết quả kiểm tra.',
  'sec-audit': 'Tạo một test truy cập tài nguyên của người khác bằng hai tài khoản thử; xác nhận server từ chối và không rò dữ liệu, rồi giữ test làm hồi quy.',
  'ml-project': 'Người khác phải chạy lại được từ hướng dẫn, dữ liệu công khai và seed; đối chiếu baseline bằng cùng split/metric và tự giải thích ba lỗi mô hình điển hình.',
  'cap-quality': 'Chọn một thay đổi yêu cầu chưa chuẩn bị trước, tự tìm chỗ sửa, bổ sung test và chạy lại luồng chính; ghi phần cần trợ giúp thay vì chỉ nộp demo chạy theo kịch bản.',
  'career-mock': 'Tắt lời giải và công cụ sinh code trong một phần phỏng vấn thử; tự giải thích một module và sửa một lỗi nhỏ để kiểm tra mình có thật sự làm chủ project.',
};

export function reviseTasks(tasks) {
  return tasks.flatMap(t => splits[t.id] || [t]).map(t => ({
    ...t,
    optional: optional.has(t.id),
    optionalReason: optional.get(t.id),
    todos: evidence[t.id] ? [...(t.id === 'dsa-index-project' ? [
      'Lập chỉ mục mã sách bằng bảng băm; giữ danh sách sách là nguồn dữ liệu chính và tránh con trỏ treo khi vector đổi vùng nhớ.',
      'Thử thêm,sửa,xóa và đối chiếu kết quả mọi truy vấn với duyệt tuyến tính để phát hiện chỉ mục cũ hoặc thiếu.',
      'Đo riêng truy vấn,xây/cập nhật chỉ mục và bộ nhớ phụ. Tra tên có thể duyệt tuyến tính; chỉ nâng cấp trie nếu đã học ô vàng tương ứng và có nhu cầu.',
      'Nếu bổ sung trie, chốt tập ký tự/giới hạn tiếng Việt và kiểm tra hành vi khi nhập ký tự không hỗ trợ.',
    ] : t.todos), evidence[t.id]] : t.todos,
  }));
}

const placements = [
  ['oop', 'Tự kiểm tra trước chặng OOP', [
    ['Viết hàm sửa tên một sách qua tham chiếu và dự đoán sự khác biệt nếu truyền bằng giá trị.', 'cpp-functions'],
    ['Dùng vector chứa ba cuốn sách, tìm theo mã và xử lý mã không tồn tại mà không truy cập sai chỉ số.', 'cpp-containers'],
    ['Nếu đã học lớp: tự viết lớp Sach có dữ liệu private và hàm cập nhật tên; nếu chưa học, ghi chưa học rồi bắt đầu ô Lớp, đối tượng và đóng gói.', 'oop-class'],
  ]],
  ['structures', 'Tự kiểm tra cấu trúc dữ liệu đã học', [
    ['Không mở bài 28tech cũ: đếm tần suất một dãy và giải thích chi phí của cách đang dùng.', 'dsa-hash'],
    ['Vẽ các con trỏ trước/sau khi xóa nút đầu danh sách; thử danh sách rỗng và một nút.', 'dsa-linked'],
    ['Chọn stack hay queue cho kiểm tra ngoặc và xử lý người đến trước; giải thích bằng thứ tự lấy phần tử.', 'dsa-stack'],
    ['Dự đoán kết quả một hàm đệ quy tổng từ 1 đến n, ghi điểm dừng và thứ tự trở về.', 'algo-recursion'],
  ]],
  ['algorithms', 'Tự kiểm tra thuật toán đã học ở 28tech', [
    ['Tự cài binary search trên [1,3,5,7], thử tìm 1,7 và 4; giải thích nửa mảng còn giữ lại.', 'algo-search'],
    ['Tính tổng đoạn bằng prefix sum trên dãy có số âm, nói rõ chỉ số hai đầu.', 'algo-prefix'],
    ['Đếm cách lên bậc thang khi đi 1 hoặc 2 bậc; tự nêu trạng thái và điều kiện đầu, chưa xem bài DP cũ.', 'algo-dp'],
  ]],
  ['graphs', 'Tự kiểm tra đồ thị đã học', [
    ['Từ bốn cạnh nhỏ, tự dựng danh sách kề và xử lý một đỉnh cô lập; ghi rõ có hướng hay vô hướng.', 'graph-represent'],
    ['Chạy tay BFS từ một nguồn, ghi khoảng cách theo số cạnh và cha để truy đường đi.', 'graph-bfs'],
    ['Cho một đồ thị có cạnh trọng số 5 và 1, tìm tình huống BFS không cho đường có tổng trọng số nhỏ nhất.', 'graph-dijkstra'],
  ]],
  ['math', 'Tự kiểm tra nền toán trước khi học tiếp', [
    ['Giải hệ hai phương trình hai ẩn và kiểm tra bằng thế lại; không nhớ cách khử thì ghi đúng bước bị mắc.', 'linear-vectors'],
    ['Tính đạo hàm (2x+1)² và giải thích quy tắc đã dùng.', 'calculus-derivative'],
    ['Với hai lần tung đồng xu độc lập, liệt kê không gian mẫu và tính xác suất đúng một lần ngửa.', 'prob-events'],
  ]],
  ['architecture', 'Tự kiểm tra nền máy tính và hệ thống', [
    ['Đổi 13 sang nhị phân, kiểm tra bằng cộng các lũy thừa hai.', 'arch-bits'],
    ['Giải thích vì sao con trỏ tới biến cục bộ không còn dùng được sau khi hàm kết thúc.', 'arch-layout'],
    ['Nếu đã học hệ thống, phân biệt một tiến trình với một luồng bằng ví dụ bộ nhớ dùng chung; chưa học thì ghi rõ để học ở chặng OS.', 'os-threads'],
  ]],
  ['database', 'Tự kiểm tra SQL và dữ liệu', [
    ['Từ bảng sách có mã trùng, chỉ ra cột nào có thể làm khóa và ràng buộc cần thêm.', 'db-relations'],
    ['Nếu đã học SQL, viết truy vấn lấy người đang mượn sách từ hai bảng và kiểm tra trường hợp không có lượt mượn.', 'db-join'],
    ['Mô tả hai người cùng thấy còn một sách rồi cùng mượn; đề xuất điều cần đảm bảo dù chưa biết cú pháp transaction.', 'db-transaction'],
  ]],
  ['python', 'Tự kiểm tra trước khi chuyển sang Python', [
    ['Viết bằng C++ hoặc Python một hàm đếm từ trong danh sách; nói rõ dữ liệu vào, ra và ca rỗng.', 'py-syntax'],
    ['Nếu đã dùng Python, dự đoán a=[1]; b=a; b.append(2), rồi giải thích a thay đổi hay không.', 'py-collections'],
    ['Thử đọc tệp JSON lỗi và mô tả cách báo lỗi; chưa biết Python thì đi từ ô Chuyển từ C++ sang Python.', 'py-files'],
  ]],
  ['ai', 'Tự kiểm tra trước nền tảng AI và ML', [
    ['Tính tích một ma trận 2×2 với vector, giải thích kích thước kết quả.', 'linear-transform'],
    ['Tính gradient của x²+2y² tại (1,1) và một bước đi ngược gradient; mắc nền thì quay lại ô toán liên kết.', 'calculus-gradient'],
    ['Giải thích vì sao không được dùng điểm test để chọn mô hình; nếu chưa học ML thì ghi chưa học rồi học đúng ô chia dữ liệu.', 'ml-split'],
  ]],
];

export function withPlacements(tasks) {
  const entries = new Map(placements.map(([chapter, title, items]) => [chapter, {
    id: `entry-${chapter}`, chapter, title, kind: 'Luyện', diagnostic: true, optional: false,
    todos: [
      'Làm các mục sau trước khi mở lời giải cũ. Ghi từng mục: tự làm được / cần gợi ý / chưa học; không cộng thành điểm đoán mức giỏi chung.',
      ...items.map(([prompt]) => prompt),
      'Sau khi thử, chỉ ôn lại mục chưa tự làm được theo các liên kết bên dưới. Chưa học là điểm bắt đầu bình thường; không tự đánh dấu cả chặng hoàn thành và không cần làm lại toàn bộ kho 28tech.',
    ],
    reviewTargets: items.map(([, id]) => id),
    extra: 'Bài tự kiểm tra để chọn điểm ôn, không có chấm tự động. Code cũ chỉ mở sau lượt thử; khi đã tự làm được một mục, vẫn kiểm tra bằng ca biên hoặc biến thể trước khi đi nhanh qua phần tương ứng.',
  }]));
  const seen = new Set();
  return tasks.flatMap(t => {
    if (seen.has(t.chapter)) return [t];
    seen.add(t.chapter);
    return entries.has(t.chapter) ? [entries.get(t.chapter), t] : [t];
  });
}
