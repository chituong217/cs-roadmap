// Khối VI — Trí tuệ, tương tác và các nền tảng
export const B6 = [
  // ── Nền tảng AI
  { id: 'n-tim-kiem-heuristic', t: 'Tác nhân, không gian trạng thái và tìm kiếm heuristic', c: 'ai-foundations', cov: ['aif-agents-uninformed-informed-search'],
    p: [
      'Tác nhân hợp lý chọn hành động tối đa hóa đo lường hiệu quả trong một môi trường; bài toán được trừu tượng hóa thành không gian trạng thái. Tìm kiếm chưa có heuristic (BFS, DFS, lặp sâu dần, UCS) khác nhau về tính đầy đủ, tối ưu và bộ nhớ.',
      'A* dùng f=g+h và tối ưu khi h chấp nhận được (và nhất quán với tìm kiếm trên đồ thị); heuristic tốt thường dựng từ bài toán nới lỏng, và heuristic trội hơn mở rộng ít nút hơn.',
    ] },
  { id: 'n-csp-doi-khang', t: 'CSP và tìm kiếm đối kháng', c: 'ai-foundations', cov: ['aif-csp-adversarial-games'],
    p: [
      'CSP gồm biến, miền và ràng buộc, giải bằng quay lui với thứ tự chọn biến (MRV) và giá trị (LCV), cùng lan truyền ràng buộc như forward checking và nhất quán cung AC-3. Tìm kiếm đối kháng dùng minimax với cắt tỉa alpha–beta và hàm đánh giá khi không tìm hết cây được.',
      'Trò chơi có yếu tố ngẫu nhiên dùng expectimax, và MCTS thay hàm đánh giá bằng mô phỏng ngẫu nhiên.',
    ] },
  { id: 'n-logic-bayes-net', t: 'Biểu diễn tri thức logic và mạng Bayes', c: 'ai-foundations', cov: ['aif-logic-probabilistic-reasoning'],
    p: [
      'Cơ sở tri thức mệnh đề suy diễn bằng phép kéo theo và giải (resolution), với các khái niệm đúng đắn (không suy ra điều sai) và đầy đủ. Mạng Bayes phân rã phân phối đồng thời thành các nhân tử có điều kiện và d-separation đọc ra quan hệ độc lập từ đồ thị.',
      'Suy diễn chính xác bằng loại biến có thể mũ theo độ rộng cây, còn suy diễn xấp xỉ dùng lấy mẫu.',
    ] },
  { id: 'n-mdp-rl', t: 'MDP và học tăng cường nhập môn', c: 'ai-foundations', cov: ['aif-mdp-reinforcement-learning'],
    p: [
      'MDP mô tả quyết định tuần tự với chuyển trạng thái xác suất và phần thưởng; chính sách tối ưu thỏa phương trình Bellman, tìm bằng lặp giá trị hoặc lặp chính sách khi mô hình đã biết.',
      'Học tăng cường không biết mô hình: TD và Q-learning học từ trải nghiệm, và phải cân bằng thăm dò với khai thác.',
    ] },

  // ── Học máy
  { id: 'n-ml-tong-quat-ro-ri', t: 'Học máy, tổng quát hóa và rò rỉ dữ liệu', c: 'machine-learning', cov: ['ml-formulation-generalization-leakage'],
    p: [
      'Học máy chọn hàm trong một không gian giả thuyết sao cho rủi ro thực nghiệm nhỏ, hy vọng tổng quát hóa tới dữ liệu mới. Quá khớp và dưới khớp được hiểu qua đánh đổi bias–variance và đường cong học.',
      'Việc chia tập huấn luyện, kiểm định, kiểm tra và dùng kiểm định chéo phải nằm trong pipeline; rò rỉ dữ liệu (thông tin kiểm tra lọt vào huấn luyện) làm kết quả đẹp giả.',
    ] },
  { id: 'n-ml-tuyen-tinh', t: 'Mô hình tuyến tính và chính quy hóa', c: 'machine-learning', cov: ['ml-linear-models-regularization'],
    p: [
      'Bình phương tối thiểu tương ứng với ước lượng hợp lý cực đại dưới nhiễu Gauss; Ridge phạt L2 (co hệ số) và Lasso phạt L1 (đưa hệ số về 0), và cần chuẩn hóa thang đo đặc trưng cho hợp lý. Logistic với cross-entropy và Naive Bayes là hai mô hình phân lớp tuyến tính nền tảng.',
      'Gradient ngẫu nhiên tối ưu mục tiêu trên dữ liệu lớn bằng cách dùng mẫu nhỏ ở mỗi bước.',
    ] },
  { id: 'n-ml-cay-kernel', t: 'Cây quyết định, tập hợp mô hình và SVM', c: 'machine-learning', cov: ['ml-trees-ensembles-kernels'],
    p: [
      'Cây quyết định chia nhánh theo độ thuần và cần cắt tỉa chống quá khớp; bagging và random forest giảm phương sai bằng cách trung bình nhiều cây, còn boosting giảm bias bằng cách thêm mô hình sửa lỗi.',
      'SVM tìm lề cực đại, và kernel cho phép biên phi tuyến mà không tính tường minh không gian đặc trưng cao chiều.',
    ] },
  { id: 'n-ml-khong-giam-sat', t: 'Học không giám sát và đánh giá mô hình', c: 'machine-learning', cov: ['ml-unsupervised-pca-evaluation'],
    p: [
      'K-means chia cụm bằng cách luân phiên gán và cập nhật tâm, là trường hợp đặc biệt của hỗn hợp Gauss với EM. PCA tính qua SVD để giảm chiều giữ phương sai lớn nhất, và các thành phần chính chỉ là hướng thống kê chứ không luôn có ý nghĩa diễn giải.',
      'Đánh giá phân lớp cần chọn thước đo và ngưỡng phù hợp, hiệu chỉnh xác suất và phân tích sai số thay vì chỉ nhìn độ chính xác.',
    ] },

  // ── Học sâu
  { id: 'n-tensor-autodiff', t: 'Tensor, vi phân tự động và vòng huấn luyện', c: 'deep-learning-modern-models', cov: ['dl-tensors-autodiff-backprop'],
    p: [
      'Tensor là mảng nhiều chiều với hình dạng, bước nhảy trong bộ nhớ và quy tắc broadcasting. Vi phân tự động chiều ngược dựng đồ thị tính toán rồi lan truyền gradient từ đầu ra về, cho gradient mọi tham số với chi phí cùng bậc phép tính xuôi.',
      'MLP, huấn luyện theo minibatch và vòng lặp (xuôi, mất mát, ngược, cập nhật) là khung chung cho hầu hết mô hình sâu.',
    ] },
  { id: 'n-on-dinh-toi-uu-dl', t: 'Ổn định số, chuẩn hóa và tối ưu hóa', c: 'deep-learning-modern-models', cov: ['dl-optimization-stability-regularization'],
    p: [
      'Hàm kích hoạt, khởi tạo trọng số và gradient liên quan chặt chẽ: chọn sai thì gradient biến mất hoặc bùng nổ. Softmax cần logsumexp để ổn định số, và cắt gradient kiềm hãm cập nhật quá lớn.',
      'BatchNorm, LayerNorm và dropout giúp huấn luyện và chống quá khớp; Adam và AdamW dùng momentum và thích nghi tốc độ học, với weight decay tách rời khỏi gradient.',
    ] },
  { id: 'n-cnn', t: 'Mạng tích chập và kiến trúc residual', c: 'deep-learning-modern-models', cov: ['dl-convolutional-networks'],
    p: [
      'Tích chập chia sẻ trọng số và khai thác thiên kiến không gian: đa kênh và trường tiếp nhận tăng dần theo độ sâu. Kích thước đầu ra phụ thuộc padding, stride; pooling tăng bất biến địa phương nhưng làm mất độ phân giải.',
      'Kết nối residual tạo đường gradient ngắn để huấn luyện mạng rất sâu.',
    ] },
  { id: 'n-attention-transformer', t: 'Embedding, attention và Transformer', c: 'deep-learning-modern-models', cov: ['dl-sequences-attention-transformers'],
    p: [
      'Embedding biến ký hiệu rời rạc thành vector, RNN và LSTM duy trì trạng thái hồi quy nhưng khó song song. Attention tính tổ hợp có trọng số của value theo độ tương thích query–key, và multi-head chạy nhiều phép như vậy song song.',
      'Transformer dùng attention cùng mã hóa vị trí và mặt nạ (cho mô hình sinh tự hồi quy), và chi phí bình phương theo độ dài chuỗi cùng cách đánh giá là giới hạn thực tế.',
    ] },

  // ── Đồ họa máy tính
  { id: 'n-anh-mau-lay-mau', t: 'Ảnh số, màu sắc và lấy mẫu', c: 'computer-graphics', cov: ['cg-color-images-sampling'],
    p: [
      'Pixel lưu giá trị RGB và alpha, và tính toán ánh sáng đúng phải thực hiện trong không gian tuyến tính chứ không phải giá trị đã mã hóa gamma. Lấy mẫu không đủ nhanh gây aliasing (định lý Nyquist), được giảm bằng supersampling, tức ước lượng giá trị pixel như tích phân trên vùng.',
    ] },
  { id: 'n-bien-doi-camera', t: 'Biến đổi hình học, camera và phép chiếu', c: 'computer-graphics', cov: ['cg-transforms-homogeneous-camera'],
    p: [
      'Tọa độ đồng nhất biểu diễn tịnh tiến, quay, co giãn bằng ma trận cùng cỡ nên ghép được thành chuỗi biến đổi; thứ tự nhân quan trọng. Camera được mô tả bằng phép view và phép chiếu (trực giao hoặc phối cảnh).',
      'Sau chiếu, hình học bị cắt theo frustum và chia phối cảnh cho tọa độ chuẩn hóa.',
    ] },
  { id: 'n-rasterization-zbuffer', t: 'Rasterization, Z-buffer và texture', c: 'computer-graphics', cov: ['cg-rasterization-pipeline-zbuffer-textures'],
    p: [
      'Tọa độ trọng tâm xác định điểm có nằm trong tam giác và nội suy thuộc tính; nội suy phải hiệu chỉnh phối cảnh. Z-buffer giải bài toán nhìn thấy theo từng pixel nhưng không xử lý được trong suốt.',
      'Texture ánh xạ qua tọa độ UV, lọc song tuyến và mipmap giảm aliasing khi thu nhỏ.',
    ] },
  { id: 'n-ray-tracing', t: 'Dò tia, mô hình chiếu sáng và hoạt hình', c: 'computer-graphics', cov: ['cg-raytracing-shading-animation'],
    p: [
      'Dò tia tìm giao điểm của tia với cảnh, và cấu trúc phân cấp thể tích bao (BVH) tăng tốc việc đó. Mô hình chiếu sáng mô tả phản xạ, khúc xạ và tán xạ của vật liệu.',
      'Hoạt hình nội suy chuyển động theo thời gian, và lấy mẫu thời gian tạo hiệu ứng nhòe chuyển động.',
    ] },

  // ── Tương tác người–máy
  { id: 'n-nhan-thuc-norman', t: 'Nhận thức người dùng và mô hình tư duy', c: 'human-computer-interaction', cov: ['hci-cognition-mental-models-norman'],
    p: [
      'Người dùng hình thành mô hình tư duy về hệ thống, và hai khoảng cách (thực thi và đánh giá) mô tả nơi tương tác thất bại. Khả năng thao tác, dấu hiệu và ánh xạ làm ý định hiện ra qua hình thức.',
      'Chú ý và trí nhớ có giới hạn; định luật Fitts và Hick dự đoán thời gian chỉ vào mục tiêu và chọn trong nhiều lựa chọn.',
    ] },
  { id: 'n-nghien-cuu-nguoi-dung', t: 'Nghiên cứu người dùng và phân tích tác vụ', c: 'human-computer-interaction', cov: ['hci-user-research-task-analysis'],
    p: [
      'Quan sát và phỏng vấn trong bối cảnh sử dụng thật cho thấy nhu cầu mà người dùng khó tự nói ra. Phân tích tác vụ phân cấp chia mục tiêu thành tác vụ con và đường đi ngoại lệ.',
      'Lấy mẫu người dùng, sự đồng ý và xử lý dữ liệu đúng đạo đức là một phần của phương pháp.',
    ] },
  { id: 'n-mau-thu-phong-loi', t: 'Tạo mẫu lặp và phòng ngừa lỗi', c: 'human-computer-interaction', cov: ['hci-prototyping-error-prevention'],
    p: [
      'Prototype có độ chi tiết khác nhau cho các câu hỏi khác nhau, và thiết kế lặp đổi sớm vì rẻ. Lỗi trượt (làm sai điều định làm) khác lỗi nhầm (ý định sai do mô hình sai), nên cách phòng ngừa và phục hồi khác nhau.',
      'Giao diện phải hiển thị trạng thái và phản hồi kịp thời, vì độ trễ quan sát được làm người dùng thao tác lặp hoặc nghĩ hệ thống treo.',
    ] },
  { id: 'n-danh-gia-tiep-can', t: 'Đánh giá khả dụng và thiết kế tiếp cận', c: 'human-computer-interaction', cov: ['hci-usability-evaluation-accessibility'],
    p: [
      'Đánh giá heuristic do chuyên gia và thử nghiệm nghĩ thành lời với người dùng bổ sung nhau. Tiếp cận theo bốn nguyên lý POUR (nhận thức được, vận hành được, hiểu được, bền vững), gồm điều khiển bằng bàn phím và ngữ nghĩa nội dung.',
      'Thiết kế phép đánh giá cần số liệu phù hợp câu hỏi, và kết luận bị giới hạn bởi cỡ mẫu và nhiệm vụ đã chọn.',
    ] },

  // ── Di động, nhúng, thời gian thực (mở rộng)
  { id: 'n-di-dong', t: 'Hệ thống di động: vòng đời, offline-first và tài nguyên', c: 'mobile-embedded-realtime', cov: ['mer-mobile-lifecycle-offline-resource'],
    p: [
      'Ứng dụng di động bị hệ điều hành quản lý vòng đời: thành phần và tiến trình có thể bị hủy bất cứ lúc nào nên phải lưu và khôi phục trạng thái. Kiến trúc offline-first ghi vào hàng đợi bền và đồng bộ khi có mạng, cần xử lý xung đột.',
      'Luồng giao diện không được chặn, và pin, bộ nhớ, mạng là ngân sách tài nguyên.',
    ] },
  { id: 'n-nhung-mmio-ngat', t: 'Hệ thống nhúng: MMIO, ngắt và bộ đệm', c: 'mobile-embedded-realtime', cov: ['mer-embedded-mmio-interrupts-buffers'],
    p: [
      'Thanh ghi ngoại vi ánh xạ vào không gian địa chỉ (MMIO) và có tác động phụ khi đọc ghi, nên cần volatile để trình biên dịch không tối ưu bỏ qua. Trình phục vụ ngắt (ISR) phải ngắn, chuyển việc nặng cho công việc trì hoãn.',
      'Ring buffer nối ISR với luồng chính và cần chính sách khi tràn.',
    ] },
  { id: 'n-thoi-gian-thuc', t: 'Thời gian thực: deadline, lập lịch RM/EDF', c: 'mobile-embedded-realtime', cov: ['mer-realtime-scheduling-priority-inversion'],
    p: [
      'Hệ thống thời gian thực đòi hỏi đúng hạn, dựa trên WCET (thời gian thực thi xấu nhất). Lập lịch RM (ưu tiên cố định) và EDF (hạn gần nhất trước) có điều kiện khả lập lịch tính được theo mức dùng CPU.',
      'Đảo ưu tiên xảy ra khi tác vụ ưu tiên thấp giữ khóa mà tác vụ ưu tiên cao cần, được giải quyết bằng kế thừa ưu tiên.',
    ] },

  // ── Tính toán khoa học và xử lý dữ liệu
  { id: 'n-sai-so-dau-cham-dong', t: 'Sai số dấu chấm động và độ ổn định số', c: 'scientific-computing-data-processing', cov: ['scdp-floating-point-conditioning-stability'],
    p: [
      'Số thực dấu chấm động có epsilon máy và sai số làm tròn tương đối; triệt tiêu số học xảy ra khi trừ hai số gần nhau mất chữ số có nghĩa, và đổi công thức tương đương có thể tránh được. Điều kiện của bài toán (độ nhạy theo dữ liệu) khác với ổn định của thuật toán.',
      'Ổn định ngược nói thuật toán cho nghiệm đúng của bài toán bị nhiễu nhỏ, giúp tách lỗi do bài toán với lỗi do thuật toán.',
    ] },
  { id: 'n-so-tuyen-tinh-nghiem', t: 'Phương pháp số cho hệ tuyến tính, nghiệm phương trình và nội suy', c: 'scientific-computing-data-processing', cov: ['scdp-lu-pivoting-qr', 'scdp-root-bracketing-newton', 'scdp-interpolation-runge-splines'],
    p: [
      'Giải hệ bằng phân rã LU cần chọn trụ để ổn định, và QR bền hơn cho bình phương tối thiểu. Tìm nghiệm bằng chia đôi (chắc chắn, chậm) hoặc Newton (nhanh, cần điểm đầu tốt) với điều kiện dừng hợp lý.',
      'Nội suy đa thức bậc cao với nút cách đều gây dao động Runge, nên chọn nút hoặc dùng spline.',
    ] },
  { id: 'n-so-ode-tich-phan', t: 'Sai phân, tích phân số và phương trình vi phân', c: 'scientific-computing-data-processing', cov: ['scdp-differentiation-quadrature', 'scdp-euler-runge-kutta-stability'],
    p: [
      'Sai phân hữu hạn xấp xỉ đạo hàm với cân bằng giữa sai số cắt cụt và sai số làm tròn; cầu phương xấp xỉ tích phân bằng tổng có trọng số. Phương trình vi phân thường giải bằng Euler hoặc Runge–Kutta, và bước thời gian bị giới hạn bởi điều kiện ổn định.',
    ] },
  { id: 'n-lam-sach-tai-lap', t: 'Làm sạch dữ liệu, trực quan hóa và pipeline tái lập', c: 'scientific-computing-data-processing', cov: ['scdp-data-cleaning-visualization-reproducibility'],
    p: [
      'Dữ liệu cần lược đồ rõ, xử lý dữ liệu khuyết có chủ đích và thống nhất đơn vị. Biểu đồ trung thực chọn thang đo hợp lý và thể hiện độ bất định.',
      'Pipeline tái lập ghi lại từng bước và kiểm tra độ nhạy của kết luận với lựa chọn xử lý.',
    ] },

  // ── Đạo đức, xã hội và nghiên cứu
  { id: 'n-dao-duc-rieng-tu', t: 'Đạo đức nghề nghiệp, quyền riêng tư và công bằng', c: 'ethics-society-cs-research', cov: ['esr-professional-ethics-privacy-fairness'],
    p: [
      'Quy tắc nghề nghiệp ACM yêu cầu cân nhắc bên bị ảnh hưởng và nguy cơ gây hại. Quyền riêng tư gắn với mục đích sử dụng và tối thiểu hóa dữ liệu trong cả vòng đời.',
      'Thiên kiến dữ liệu dẫn tới đối xử khác biệt, và các định nghĩa công bằng không thể cùng thỏa mãn trong mọi trường hợp nên phải chọn và giải thích đánh đổi.',
    ] },
  { id: 'n-ban-quyen-giay-phep', t: 'Bản quyền, giấy phép mã nguồn mở và trách nhiệm xã hội', c: 'ethics-society-cs-research', cov: ['esr-licenses-ip-societal-impact'],
    p: [
      'Bản quyền thuộc về tác giả theo mặc định nên dùng mã cần giấy phép; MIT và Apache là cho phép (permissive), GPL có tính lây (copyleft) với điều kiện cụ thể về phân phối. Cần theo dõi nguồn gốc mã và bằng sáng chế.',
      'Công bố lỗ hổng có phối hợp cân bằng giữa thông tin cho người bảo vệ và rủi ro cho người dùng.',
    ] },
  { id: 'n-doc-bao-nghien-cuu', t: 'Đọc bài báo khoa học và phương pháp thực nghiệm', c: 'ethics-society-cs-research', cov: ['esr-reading-papers-experimental-methodology'],
    p: [
      'Đọc ba vòng đi từ cái nhìn tổng quát đến tái dựng lập luận. Thực nghiệm đáng tin có baseline hợp lý, ablation tách đóng góp từng thành phần, và ước lượng độ bất định.',
      'Artifact và mã cho phép tái lập, và báo cáo trung thực cả giới hạn của kết quả.',
    ] },
];
