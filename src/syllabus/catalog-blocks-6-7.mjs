export const BLOCKS_6_TO_7 = [
  {
    id: 'block-6',
    code: 'Khối VI',
    title: 'Khối VI — Trí tuệ, tương tác và các nền tảng',
    description:
      'Mở rộng độ rộng chương trình sang các lĩnh vực nền tảng của Khoa học Máy tính hiện đại: Trí tuệ nhân tạo cổ điển và suy luận xác suất, Học máy thống kê, Học sâu và các kiến trúc mô hình hiện đại, Đồ họa máy tính, Tương tác người–máy (HCI), Hệ thống di động – nhúng – thời gian thực, Tính toán khoa học, cùng Đạo đức và phương pháp nghiên cứu.',
  },
  {
    id: 'block-7',
    code: 'Khối VII',
    title: 'Khối VII — Syllabus chuyên sâu và tổng hợp',
    description:
      'Cung cấp các chương trình đào sâu có cấu trúc (Structured Specialization Syllabi) đi từ môn nền đã học sang các cơ chế nâng cao cho từng hướng chuyên ngành (Hệ điều hành & Hệ thống, Hệ quản trị dữ liệu & Lưu trữ, Trình biên dịch & Runtime, Hệ phân tán & Thuật toán nâng cao, Thị giác máy tính, Xử lý ngôn ngữ tự nhiên, Bảo mật chuyên sâu) và môn Đồ án tổng hợp.',
  },
];

export const COURSES_BLOCKS_6_TO_7 = [
  {
    id: 'ai-foundations',
    code: 'CS-35',
    title: 'AI nền tảng',
    blockId: 'block-6',
    level: 'core',
    overview: [
      'Môn học nghiên cứu Trí tuệ Nhân tạo dưới góc nhìn tổng quát về các tác nhân hợp lý (rational agents) ra quyết định trong môi trường xác định, đối kháng hoặc bất định — rộng hơn rất nhiều so với việc chỉ huấn luyện mạng nơ-ron hay gọi API mô hình ngôn ngữ lớn. Nội dung bao quát: mô hình hóa không gian trạng thái, tìm kiếm không có thông tin (BFS, DFS, Uniform Cost Search) và tìm kiếm có thông tin (Greedy Best-First, A* với điều kiện heuristic chấp nhận được — admissible và nhất quán — consistent); tìm kiếm đối kháng trong trò chơi (Minimax, cắt tỉa Alpha–Beta, hàm đánh giá và Monte Carlo Tree Search cơ sở); bài toán thỏa mãn ràng buộc (CSP: backtracking, lan truyền ràng buộc AC-3, heuristic MRV/LCV); biểu diễn tri thức và suy diễn logic; mạng Bayes và suy diễn xác suất; cùng Quá trình quyết định Markov (MDP: phương trình Bellman, Value Iteration, Policy Iteration) và Học tăng cường nhập môn (Q-Learning, đánh đổi thăm dò–khai thác).',
    ],
    prerequisites: [
      { courseId: 'graph-algorithms', type: 'required', reason: 'Cần nắm vững BFS, DFS, Dijkstra, hàng đợi ưu tiên và biểu diễn đồ thị trạng thái.' },
      { courseId: 'probability', type: 'required', reason: 'Cần xác suất có điều kiện, định lý Bayes, kỳ vọng và phân phối đồng thời cho Bayes Nets và MDP.' },
      { courseId: 'discrete-math', type: 'required', reason: 'Cần logic mệnh đề/vị từ và quy hoạch động cơ bản.' },
    ],
    plannedChapters: [
      { id: 'aif-agents-uninformed-informed-search', title: 'Tác nhân hợp lý, Không gian trạng thái và Tìm kiếm Heuristic (UCS, A*)', summary: 'Đặc tả bài toán tìm kiếm, tính đầy đủ và tối ưu của BFS/IDS/UCS, tìm kiếm A* và chứng minh tính tối ưu trên cây/đồ thị khi hàm heuristic thỏa tính chấp nhận được (admissibility) và nhất quán (consistency).', primaryLocator: 'UC Berkeley CS 188 Textbook: Search Problems, Uninformed & Informed Search' },
      { id: 'aif-csp-adversarial-games', title: 'Bài toán thỏa mãn ràng buộc (CSP) và Tìm kiếm đối kháng (Minimax, Alpha–Beta)', summary: 'Đồ thị ràng buộc, kiểm tra tiến (forward checking), nhất quán cung AC-3; cây trò chơi tổng bằng không, thuật toán Minimax, cắt tỉa Alpha–Beta, Expectimax cho trò chơi có yếu tố ngẫu nhiên.', primaryLocator: 'UC Berkeley CS 188 Textbook: Constraint Satisfaction Problems & Games' },
      { id: 'aif-logic-probabilistic-reasoning', title: 'Biểu diễn tri thức Logic và Mạng Bayes (Bayesian Networks)', summary: 'Suy diễn trong logic mệnh đề, biểu diễn phân phối xác suất đồng thời gọn qua DAG của mạng Bayes, tính độc lập có điều kiện (d-separation) và suy diễn chính xác/xấp xỉ.', primaryLocator: 'UC Berkeley CS 188 Textbook: Logic & Bayes Nets' },
      { id: 'aif-mdp-reinforcement-learning', title: 'Quá trình quyết định Markov (MDP) và Học tăng cường nhập môn (Reinforcement Learning)', summary: 'Ra quyết định tuần tự dưới chuyển trạng thái ngẫu nhiên, hệ số chiết khấu gamma, phương trình tối ưu Bellman, Value/Policy Iteration, và học không cần mô hình biết trước qua Temporal-Difference / Q-Learning.', primaryLocator: 'UC Berkeley CS 188 Textbook: MDPs & Reinforcement Learning' },
    ],
    boundaries: [
      'Không thu hẹp Trí tuệ Nhân tạo thành Học máy hay sử dụng LLM; môn học giữ đầy đủ nền tảng tìm kiếm, ràng buộc, suy luận xác suất và ra quyết định tuần tự.',
    ],
    sources: [
      { sourceId: 'ucb-cs188-notes', locator: 'Search, CSPs, Games, Logic, Bayes Nets, MDPs, and Reinforcement Learning Chapters', relationship: 'primary' },
    ],
  },
  {
    id: 'machine-learning',
    code: 'CS-36',
    title: 'Machine learning',
    blockId: 'block-6',
    level: 'core',
    overview: [
      'Môn học nghiên cứu các nguyên lý toán học và thuật toán cho phép hệ thống tự ước lượng quy luật từ dữ liệu và tổng quát hóa trên dữ liệu chưa từng thấy. Nội dung liên kết trực tiếp Đại số tuyến tính, Giải tích tối ưu và Xác suất thống kê vào quy trình học máy chuẩn mực: biểu diễn đặc trưng, phân chia tập huấn luyện/thẩm định/kiểm tra (train/validation/test split), kiểm định chéo (cross-validation) và phòng chống rò rỉ dữ liệu (data leakage); cực tiểu hóa rủi ro thực nghiệm (ERM), các hàm mất mát và tối ưu hóa; hồi quy tuyến tính (L2/Ridge, L1/Lasso), hồi quy logistic và phân lớp tuyến tính; cây quyết định (entropy/Gini) và các phương pháp tập hợp (Bagging/Random Forest, Gradient Boosting); phương pháp hạt nhân (SVM cơ sở); học không giám sát (phân cụm K-Means, mô hình hỗn hợp Gaussian/EM cơ sở, giảm chiều bằng PCA thông qua SVD); đánh đổi độ lệch–phương sai (bias–variance tradeoff), chính quy hóa và các thước đo đánh giá (Precision, Recall, F1, ROC-AUC, Calibration).',
    ],
    prerequisites: [
      { courseId: 'linear-algebra', type: 'required', reason: 'Cần không gian vector, phép chiếu bình phương tối thiểu, trị riêng và phân rã SVD cho hồi quy và PCA.' },
      { courseId: 'multivariable-calculus-optimization', type: 'required', reason: 'Cần gradient, ma trận Hessian, tính lồi và thuật toán hạ gradient (gradient descent).' },
      { courseId: 'statistics-inference', type: 'required', reason: 'Cần ước lượng hợp lý cực đại (MLE), suy luận Bayes, phương sai mẫu và đánh đổi bias–variance.' },
    ],
    plannedChapters: [
      { id: 'ml-formulation-generalization-leakage', title: 'Bản chất bài toán Học máy, Tổng quát hóa, Đánh đổi Bias–Variance và Chống rò rỉ dữ liệu', summary: 'Không gian giả thuyết, cực tiểu hóa rủi ro thực nghiệm, hiện tượng quá khớp (overfitting) và dưới khớp (underfitting), tách tập dữ liệu nghiêm ngặt và các dạng rò rỉ thông tin từ tập test.', primaryLocator: 'Scikit-learn User Guide §3.1 (Cross-validation) & D2L Ch. 3.6' },
      { id: 'ml-linear-models-regularization', title: 'Mô hình tuyến tính cho Hồi quy và Phân lớp, Hàm mất mát và Chính quy hóa (L1/L2)', summary: 'Liên hệ giữa bình phương tối thiểu và MLE dưới nhiễu Gaussian, hồi quy Ridge/Lasso, hồi quy Logistic với hàm mất mát Cross-Entropy, phân lớp Naive Bayes và tối ưu hóa bằng Stochastic Gradient Descent.', primaryLocator: 'Scikit-learn User Guide §1.1 (Linear Models), §1.9 (Naive Bayes) & D2L Ch. 3–4' },
      { id: 'ml-trees-ensembles-kernels', title: 'Cây quyết định, Học tập hợp (Random Forest, Gradient Boosting) và Phương pháp Hạt nhân', summary: 'Chia vùng không gian đặc trưng bằng độ lợi thông tin (Information Gain / Gini), giảm phương sai bằng Bagging/Random Forest, giảm độ lệch bằng Boosting và ý tưởng lề cực đại trong Support Vector Machines.', primaryLocator: 'Scikit-learn User Guide §1.4 (SVM), §1.10 (Decision Trees), §1.11 (Ensembles)' },
      { id: 'ml-unsupervised-pca-evaluation', title: 'Học không giám sát (K-Means, PCA) và Đánh giá mô hình nghiêm ngặt', summary: 'Phân cụm K-Means và giới hạn hình cầu của cụm, giảm số chiều bảo toàn phương sai cực đại bằng Phân tích thành phần chính (PCA qua SVD), lựa chọn metric trên dữ liệu mất cân bằng (PR-AUC vs ROC-AUC) và phân tích sai số.', primaryLocator: 'Scikit-learn User Guide §2.3 (Clustering), §2.5 (Decompositions/PCA), §3.3 (Metrics)' },
    ],
    boundaries: [
      'Không dạy học máy như việc gọi hàm `.fit()` và `.predict()` mù quáng; mỗi mô hình đều phải gắn với hàm mục tiêu toán học, giả định về phân phối dữ liệu và kịch bản mô hình thất bại.',
    ],
    sources: [
      { sourceId: 'sklearn-user-guide', locator: 'Sections 1.1, 1.4, 1.9–1.11 (Supervised Learning), Sections 2.3, 2.5 (Unsupervised Learning), Section 3 (Model Selection and Evaluation)', relationship: 'primary' },
      { sourceId: 'd2l-ai', locator: 'Chapters 3–4 (Linear Neural Networks for Regression and Classification)', relationship: 'supplementary' },
    ],
  },
  {
    id: 'deep-learning-modern-models',
    code: 'CS-37',
    title: 'Deep learning và mô hình hiện đại',
    blockId: 'block-6',
    level: 'core',
    overview: [
      'Môn học nghiên cứu cách xây dựng và huấn luyện các biểu diễn phân cấp có khả năng vi phân đầu–cuối (end-to-end differentiable representations). Nội dung bắt đầu từ đại số tensor, đồ thị tính toán động và cơ chế vi phân tự động chiều ngược (reverse-mode automatic differentiation / backpropagation), cùng các vấn đề ổn định số học (triệt tiêu và bùng nổ gradient, khởi tạo trọng số Xavier/He, chuẩn hóa BatchNorm/LayerNorm) và thuật toán tối ưu thích nghi (SGD với Momentum, Adam/AdamW). Trên nền đó, môn học phân tích các kiến trúc cốt lõi theo cấu trúc dữ liệu: mạng tích chập (CNN — tính bất biến dịch chuyển, trường tiếp nhận, kết nối tắt Residual/ResNet) cho dữ liệu lưới không gian, mô hình chuỗi và không gian nhúng (Embeddings, RNN/LSTM), cơ chế chú ý (Scaled Dot-Product Attention, Multi-Head Attention) và kiến trúc Transformer, kết thúc bằng giới hạn tài nguyên tính toán, đánh giá mô hình và kết nối sang các nhánh chuyên sâu CV/NLP.',
    ],
    prerequisites: [
      { courseId: 'machine-learning', type: 'required', reason: 'Cần nắm vững hàm mất mát, tổng quát hóa, chính quy hóa, đánh giá mô hình và quy trình huấn luyện.' },
      { courseId: 'multivariable-calculus-optimization', type: 'required', reason: 'Cần quy tắc dây chuyền nhiều biến (chain rule) và ma trận Jacobian để hiểu cơ chế lan truyền ngược.' },
      { courseId: 'linear-algebra', type: 'required', reason: 'Cần phép nhân ma trận theo lô (batched matrix multiplication) và không gian tích vô hướng.' },
    ],
    plannedChapters: [
      { id: 'dl-tensors-autodiff-backprop', title: 'Đại số Tensor, Đồ thị tính toán và Cơ chế Vi phân tự động (Backpropagation)', summary: 'Biểu diễn tensor đa chiều trong bộ nhớ (strides, broadcasting), xây dựng đồ thị tính toán hướng dữ liệu, lan truyền xuôi (forward pass) lưu giá trị trung gian và lan truyền ngược theo quy tắc dây chuyền.', primaryLocator: 'D2L Ch. 2 (§2.1–2.5) & Ch. 5 (§5.1–5.3)' },
      { id: 'dl-optimization-stability-regularization', title: 'Ổn định số học, Khởi tạo trọng số, Chuẩn hóa (Normalization) và Tối ưu hóa mạng sâu', summary: 'Hiện tượng vanishing/exploding gradients, hàm kích hoạt phi tuyến (ReLU, GELU, Softmax ổn định log-sum-exp), khởi tạo He/Xavier, Dropout, Weight Decay, Batch/Layer Normalization và bộ tối ưu AdamW.', primaryLocator: 'D2L Ch. 5 (§5.4–5.6), Ch. 8 (§8.5) & Ch. 12' },
      { id: 'dl-convolutional-networks', title: 'Mạng tích chập (CNN), Thiên kiến quy nạp không gian và Kiến trúc Residual', summary: 'Chia sẻ tham số và tương tác cục bộ trong phép tích chập, padding/stride/pooling, đa kênh đặc trưng (channels), trường tiếp nhận hiệu dụng (receptive field) và đường tắt cộng (skip connections) trong ResNet.', primaryLocator: 'D2L Ch. 7–8' },
      { id: 'dl-sequences-attention-transformers', title: 'Biểu diễn chuỗi, Không gian nhúng (Embeddings), Cơ chế Attention và Kiến trúc Transformer', summary: 'Từ biểu diễn rời rạc sang vector dày đặc, hạn chế tuần tự của RNN, cơ chế truy vấn–khóa–giá trị (Query–Key–Value Scaled Dot-Product Attention), mã hóa vị trí (Positional Encoding), kiến trúc Encoder/Decoder Transformer và giới hạn chi phí bậc hai theo độ dài chuỗi.', primaryLocator: 'D2L Ch. 9–11 (RNNs, Attention Mechanisms, and Transformers)' },
    ],
    boundaries: [
      'Không coi một chương giới thiệu Transformer là đã bao quát toàn bộ Xử lý ngôn ngữ tự nhiên (NLP) hay Thị giác máy tính (CV); các bài toán đặc thù của từng miền được tách thành các nhánh chuyên sâu riêng ở Khối VII.',
    ],
    sources: [
      { sourceId: 'd2l-ai', locator: 'Chapters 2, 5, 7, 8, 9, 10, 11, 12 (Preliminaries, MLP/Backprop, CNNs, Modern CNNs, RNNs, Attention & Transformers, Optimization)', relationship: 'primary' },
    ],
  },
  {
    id: 'computer-graphics',
    code: 'CS-38',
    title: 'Đồ họa máy tính',
    blockId: 'block-6',
    level: 'core',
    overview: [
      'Môn học nghiên cứu các mô hình toán học, vật lý và thuật toán để biểu diễn hình học 3 chiều và tổng hợp hình ảnh 2 chiều. Thay vì chỉ hướng dẫn gọi hàm của một thư viện đồ họa cụ thể, nội dung đi từ bản chất của ánh sáng, không gian màu, lấy mẫu tín hiệu và hiện tượng răng cưa (aliasing/anti-aliasing), đến đại số hình học 3D (hệ tọa độ đồng nhất — homogeneous coordinates, ma trận biến đổi affine, phép chiếu phối cảnh và trực giao, mô hình camera). Tiếp theo, môn học đối chiếu hai phương pháp kết xuất nền tảng: (1) Đường ống Rasterization (biến đổi đỉnh, cắt xén, nội suy trọng tâm — barycentric interpolation, bộ đệm độ sâu Z-buffer, ánh xạ kết cấu và mipmapping); và (2) Dò tia (Ray Tracing: phát tia, giao điểm tia–mặt cầu/tam giác, cấu trúc tăng tốc không gian BVH, mô hình chiếu sáng cục bộ Blinn–Phong và nguyên lý phản xạ/khúc xạ đệ quy).',
    ],
    prerequisites: [
      { courseId: 'linear-algebra', type: 'required', reason: 'Cần phép nhân ma trận, tích vô hướng, tích có hướng, đổi cơ sở và biến đổi tuyến tính.' },
      { courseId: 'multivariable-calculus-optimization', type: 'required', reason: 'Cần vector pháp tuyến mặt cong, hình học không gian và tích phân mặt cơ sở.' },
      { courseId: 'cpp-memory-model', type: 'required', reason: 'Cần viết và tối ưu hóa bộ kết xuất (renderer) trên mảng bộ nhớ khung hình (framebuffer).' },
    ],
    plannedChapters: [
      { id: 'cg-color-images-sampling', title: 'Biểu diễn ảnh số, Không gian màu, Lấy mẫu (Sampling) và Chống răng cưa', summary: 'Lưới điểm ảnh (raster image), kênh màu RGB/Alpha, hiệu chỉnh gamma, lấy mẫu tín hiệu không gian 2D, tần số Nyquist và lọc chống răng cưa (supersampling).', primaryLocator: 'Ray Tracing in One Weekend Ch. 2–3 & Graphics Foundations' },
      { id: 'cg-transforms-homogeneous-camera', title: 'Biến đổi hình học 3D, Tọa độ đồng nhất (Homogeneous Coordinates) và Mô hình Camera', summary: 'Biểu diễn thống nhất phép quay, co giãn và tịnh tiến bằng ma trận 4x4 trong tọa độ đồng nhất; chuỗi biến đổi Model–View–Projection (MVP), hình chóp cụt nhìn (viewing frustum) và phép chia phối cảnh.', primaryLocator: 'Ray Tracing in One Weekend Ch. 11–12 & Transformation Matrices' },
      { id: 'cg-rasterization-pipeline-zbuffer-textures', title: 'Đường ống Rasterization, Nội suy trọng tâm (Barycentric), Z-Buffer và Kết cấu (Textures)', summary: 'Rời rạc hóa tam giác lên lưới pixel, hệ tọa độ trọng tâm để nội suy chuẩn xác theo phối cảnh, giải quyết độ nhìn thấy bằng Z-buffer, ánh xạ tọa độ UV, lọc song tuyến (bilinear) và Mipmap.', primaryLocator: 'LearnOpenGL Getting Started / Coordinate Systems / Depth Testing' },
      { id: 'cg-raytracing-shading-animation', title: 'Dò tia (Ray Tracing), Mô hình chiếu sáng bề mặt và Nguyên lý hoạt hình cơ sở', summary: 'Phương trình tia P(t) = A + t b, kiểm tra giao điểm tia–vật thể, phân cấp thể tích bao (BVH), tán xạ khuếch tán (Lambertian), phản xạ gương và điện môi (định luật Snell), cùng nội suy chuyển động theo thời gian.', primaryLocator: 'Ray Tracing in One Weekend Ch. 4–14' },
    ],
    boundaries: [
      'Trọng tâm là hiểu toán học của phép chiếu, rasterization và ray tracing bằng bộ kết xuất phần mềm nhỏ chạy được trên CPU trước khi dùng API phần cứng GPU.',
    ],
    sources: [
      { sourceId: 'raytracing-in-one-weekend', locator: 'Chapters 1–14 (Output Image, Vectors, Rays, Spheres, Antialiasing, Diffuse/Metal/Dielectric Materials, Positionable Camera)', relationship: 'primary' },
    ],
  },
  {
    id: 'human-computer-interaction',
    code: 'CS-39',
    title: 'Tương tác người–máy',
    blockId: 'block-6',
    level: 'core',
    overview: [
      'Môn học nghiên cứu quá trình thiết kế, triển khai và đánh giá các hệ thống tính toán tương tác dựa trên năng lực nhận thức, vận động và bối cảnh thực tế của con người. Nội dung đi từ tâm lý học nhận thức trong tương tác (mô hình nhận thức — mental models vs conceptual model của hệ thống, dấu hiệu gợi mở — affordances & signifiers, ánh xạ tự nhiên, phản hồi, vòng lặp thực thi–đánh giá của Norman, giới hạn trí nhớ làm việc và Định luật Fitts/Hick), đến phương pháp nghiên cứu người dùng và phân tích tác vụ (contextual inquiry, task analysis, tránh câu hỏi dẫn dắt), tạo mẫu độ trung thực thấp/cao (prototyping), các nguyên lý thiết kế giao diện và phòng ngừa lỗi của con người, phương pháp đánh giá khả dụng định tính/định lượng (think-aloud usability testing, heuristic evaluation), và thiết kế tiếp cận toàn diện (accessibility) cùng đạo đức nghiên cứu trên người dùng.',
    ],
    prerequisites: [
      { courseId: 'program-design-debugging', type: 'required', reason: 'Cần hiểu thiết kế trạng thái chương trình và xử lý lỗi đầu vào.' },
      { courseId: 'web-network-applications', type: 'recommended', reason: 'Có nền tảng giao diện thực tế (HTML/CSS/DOM) để áp dụng và kiểm chứng các nguyên lý tương tác.' },
    ],
    plannedChapters: [
      { id: 'hci-cognition-mental-models-norman', title: 'Nhận thức con người, Mô hình nhận thức (Mental Models) và Chu trình tương tác của Norman', summary: 'Khoảng cách thực thi (Gulf of Execution) và khoảng cách đánh giá (Gulf of Evaluation), signifiers, constraints, phản hồi tức thời, giới hạn chú ý/trí nhớ và Định luật Fitts trong thiết kế mục tiêu tương tác.', primaryLocator: 'HCI Cognitive Foundations & Interaction Design Principles' },
      { id: 'hci-user-research-task-analysis', title: 'Nghiên cứu nhu cầu người dùng, Phân tích tác vụ phân cấp và Bối cảnh sử dụng', summary: 'Quan sát người dùng thực hiện tác vụ thật thay vì chỉ hỏi ý kiến chủ quan, phân rã tác vụ (Hierarchical Task Analysis), xác định các điểm nghẽn nhận thức và đạo đức bảo vệ người tham gia nghiên cứu.', primaryLocator: 'User Research & Task Analysis Methodology' },
      { id: 'hci-prototyping-error-prevention', title: 'Tạo mẫu lặp (Iterative Prototyping), Thiết kế trạng thái và Phòng ngừa lỗi thao tác', summary: 'Phân biệt lỗi trượt thao tác (slips) với lỗi mô hình tư duy (mistakes), thiết kế cơ chế hoàn tác (undo), xác nhận có ý nghĩa cho hành động không thể đảo ngược và kiểm soát tải nhận thức.', primaryLocator: 'Prototyping & Human Error Prevention Principles' },
      { id: 'hci-usability-evaluation-accessibility', title: 'Đánh giá khả dụng (Usability Evaluation) và Thiết kế tiếp cận toàn diện (Accessibility)', summary: 'Đánh giá theo bộ tiêu chuẩn (Heuristic Evaluation của Nielsen), tổ chức phiên thử nghiệm người dùng nghĩ thành lời (Think-Aloud Protocol), và bốn nguyên tắc khả năng tiếp cận POUR (Perceivable, Operable, Understandable, Robust).', primaryLocator: 'W3C WAI Accessibility Fundamentals & Usability Evaluation Guides' },
    ],
    boundaries: [
      'Không thu gọn môn Tương tác người–máy thành một danh sách kiểm tra thẻ HTML/ARIA hay sở thích trang trí màu sắc; trọng tâm là mô hình nhận thức, phân tích tác vụ và đánh giá thực nghiệm với người dùng.',
    ],
    sources: [
      { sourceId: 'w3c-wai-hci', locator: 'W3C Accessibility Principles (POUR) and Usability Evaluation Foundations', relationship: 'primary' },
    ],
  },
  {
    id: 'mobile-embedded-realtime',
    code: 'CS-40',
    title: 'Di động, nhúng và hệ thời gian thực',
    blockId: 'block-6',
    level: 'extension',
    overview: [
      'Môn học khảo sát cách các nguyên lý hệ thống và phần mềm thay đổi khi bước ra khỏi môi trường máy chủ/máy tính để bàn sang các nền tảng chịu ràng buộc vật lý nghiêm ngặt về năng lượng, bộ nhớ, kết nối chập chờn và thời hạn phản hồi cứng (deadlines). Nội dung được chia thành ba phần tách biệt rõ ràng: (1) Hệ thống di động — vòng đời ứng dụng do hệ điều hành thu hồi bất kỳ lúc nào, bảo toàn trạng thái, kiến trúc ưu tiên ngoại tuyến (offline-first, đồng bộ hóa xung đột khi có mạng lại) và ngân sách pin/luồng giao diện (UI thread jank); (2) Hệ thống nhúng — tương tác phần cứng qua thanh ghi ánh xạ bộ nhớ (Memory-Mapped I/O, từ khóa `volatile`), giao tiếp ngoại vi (GPIO, UART/SPI/I2C ở mức giao thức), xử lý ngắt (ISR) ngắn gọn kết hợp bộ đệm vòng (ring buffer) và lập trình không cấp phát động; (3) Hệ thống thời gian thực (Real-Time Systems) — phân biệt thời gian thực cứng (hard) và mềm (soft), tính tất định về thời gian thực thi xấu nhất (WCET), lập lịch tuần hoàn Rate-Monotonic (RM) và Earliest Deadline First (EDF), cùng hiện tượng đảo ngược độ ưu tiên (priority inversion) và giao thức kế thừa độ ưu tiên.',
    ],
    prerequisites: [
      { courseId: 'computer-architecture', type: 'required', reason: 'Cần hiểu ngắt phần cứng, Memory-Mapped I/O và thanh ghi.' },
      { courseId: 'operating-systems', type: 'required', reason: 'Cần hiểu lập lịch tiến trình/luồng, đồng bộ hóa và quản lý bộ nhớ.' },
      { courseId: 'computer-networks', type: 'required', reason: 'Cần hiểu đặc tính kết nối không dây mất gói và đồng bộ trạng thái.' },
    ],
    plannedChapters: [
      { id: 'mer-mobile-lifecycle-offline-resource', title: 'Hệ thống di động: Vòng đời bị quản lý, Kiến trúc Offline-First và Ngân sách năng lượng', summary: 'Máy trạng thái vòng đời tiến trình di động (Active, Background, Suspended/Killed), lưu và khôi phục trạng thái giao diện, hàng đợi đồng bộ bền vững khi mạng chập chờn và tách tác vụ nặng khỏi luồng vẽ màn hình.', primaryLocator: 'Mobile Systems Lifecycle & Offline Architecture Principles' },
      { id: 'mer-embedded-mmio-interrupts-buffers', title: 'Hệ thống nhúng: Memory-Mapped I/O, Ngoại vi, Trình phục vụ ngắt (ISR) và Bộ đệm vòng', summary: 'Đọc/ghi thanh ghi phần cứng qua địa chỉ cố định, ý nghĩa thực sự của volatile (ngăn trình biên dịch tối ưu hóa bỏ lệnh đọc/ghi MMIO, không thay thế khóa đồng bộ), thiết kế ISR không chặn đẩy dữ liệu vào ring buffer cho vòng lặp chính.', primaryLocator: 'Dive Into Systems Ch. 10–11 & Embedded Systems Foundations' },
      { id: 'mer-realtime-scheduling-priority-inversion', title: 'Hệ thống thời gian thực: Ràng buộc Deadline, Lập lịch RM/EDF và Đảo ngược độ ưu tiên', summary: 'Tại sao "chạy nhanh trung bình" không đồng nghĩa với "thời gian thực", điều kiện khả lập lịch của Rate-Monotonic và Earliest Deadline First, phân tích sự cố đảo ngược độ ưu tiên (kinh điển trên tàu Mars Pathfinder) và giải pháp Priority Inheritance.', primaryLocator: 'OSTEP Scheduling Extensions & Real-Time Scheduling Theory' },
    ],
    boundaries: [
      'Sử dụng bộ mô phỏng và chương trình kiểm chứng cơ chế; không bắt buộc người học phải mua bo mạch vi điều khiển vật lý hay thiết bị di động riêng.',
    ],
    sources: [
      { sourceId: 'ostep-v110', locator: 'Chapters 6–9 (Scheduling & Preemption) and Chapter 36 (I/O Devices, Interrupts, Polling, DMA)', relationship: 'primary' },
      { sourceId: 'dive-into-systems', locator: 'Chapter 11 & Embedded / Low-level C Memory Representation', relationship: 'supplementary' },
    ],
  },
  {
    id: 'scientific-computing-data-processing',
    code: 'CS-41',
    title: 'Tính toán khoa học và xử lý dữ liệu',
    blockId: 'block-6',
    level: 'core',
    overview: [
      'Môn học nghiên cứu khoảng cách giữa toán học liên tục trên tập số thực lý tưởng và tính toán số học hữu hạn bit trên máy tính, đồng thời trang bị quy trình xử lý dữ liệu thực nghiệm có thể tái lập. Nội dung mở đầu bằng phân tích sai số tuyệt đối/tương đối, số học dấu chấm động IEEE 754, hiện tượng triệt tiêu thảm họa (catastrophic cancellation) khi trừ hai số xấp xỉ nhau, sự khác biệt giữa độ nhạy nội tại của bài toán (conditioning — hệ số điều kiện kappa(A)) và độ ổn định của thuật toán (numerical stability). Tiếp theo là các phương pháp số cốt lõi: giải phương trình phi tuyến, giải hệ phương trình tuyến tính bằng khử Gauss có chọn phần tử trụ (partial pivoting), nội suy đa thức/spline, tính đạo hàm số (sai phân hữu hạn và đánh đổi sai số cắt cụt với sai số làm tròn), tích phân số và phương trình vi phân thường (Euler, Runge–Kutta). Phần xử lý dữ liệu trình bày làm sạch dữ liệu khuyết/ngoại lai, biến đổi bảng dữ liệu, nguyên lý trực quan hóa trung thực (đúng tỷ lệ trục, đơn vị, không bóp méo thông tin) và đóng gói quy trình phân tích tái lập.',
    ],
    prerequisites: [
      { courseId: 'linear-algebra', type: 'required', reason: 'Cần phân rã ma trận LU/QR/SVD và chuẩn vector/ma trận để phân tích hệ số điều kiện.' },
      { courseId: 'single-variable-calculus', type: 'required', reason: 'Cần khai triển Taylor và phần dư để ước lượng sai số cắt cụt của các công thức xấp xỉ số.' },
      { courseId: 'statistics-inference', type: 'required', reason: 'Cần thống kê mô tả, xử lý nhiễu và nguyên tắc biểu diễn dữ liệu.' },
    ],
    plannedChapters: [
      { id: 'scdp-floating-point-conditioning-stability', title: 'Sai số dấu chấm động, Triệt tiêu số học, Hệ số điều kiện và Tính ổn định thuật toán', summary: 'Epsilon máy, mất chữ số có nghĩa khi trừ hai số gần bằng nhau, biến đổi biểu thức để tránh triệt tiêu, phân biệt bài toán có điều kiện xấu (ill-conditioned problem) với thuật toán không ổn định (unstable algorithm).', primaryLocator: 'Numerical Analysis Foundations & CS61C Floating Point Notes' },
      { id: 'scdp-numerical-linear-nonlinear-ode', title: 'Phương pháp số cho Hệ tuyến tính (Pivoting), Nội suy, Tích phân số và Phương trình vi phân', summary: 'Tại sao không tính A^-1 trực tiếp mà dùng phân rã LU có chọn trụ, nội suy và hiện tượng dao động Runge, công thức hình thang/Simpson, sai phân hữu hạn và mô phỏng hệ động lực bằng Runge–Kutta.', primaryLocator: 'MIT 18.01SC Numerical Integration & MIT 18.06SC Numerical Linear Algebra' },
      { id: 'scdp-data-cleaning-visualization-reproducibility', title: 'Làm sạch dữ liệu, Trực quan hóa định lượng chính xác và Quy trình tính toán tái lập', summary: 'Kiểm tra lược đồ, đơn vị đo và miền giá trị, xử lý dữ liệu khuyết có ghi nhận giả định, thiết kế biểu đồ giữ đúng tỷ lệ trục và đơn vị, cố định hạt giống ngẫu nhiên (random seed) và tự động hóa đường ống dữ liệu.', primaryLocator: 'Data Processing & Reproducible Research Guidelines' },
    ],
    boundaries: [
      'Luôn phân biệt rõ tính toán ký hiệu chính xác (symbolic computation) với xấp xỉ số học (numerical approximation), và bắt buộc kèm đơn vị đo cùng điều kiện biên trong mọi mô hình.',
    ],
    sources: [
      { sourceId: 'mit-1806sc', locator: 'Unit I & III: Elimination with Pivoting, Conditioning, and SVD', relationship: 'primary' },
      { sourceId: 'mit-1801sc', locator: 'Part 2 & 3: Linear/Quadratic Approximations, Newton\'s Method, and Numerical Integration (Riemann/Trapezoidal/Simpson)', relationship: 'primary' },
    ],
  },
  {
    id: 'ethics-society-cs-research',
    code: 'CS-42',
    title: 'Đạo đức, xã hội và nghiên cứu CS',
    blockId: 'block-6',
    level: 'core',
    overview: [
      'Môn học tổng hợp các khía cạnh trách nhiệm nghề nghiệp, tác động xã hội–pháp lý của hệ thống tính toán và phương pháp luận nghiên cứu khoa học trong Khoa học Máy tính. Nội dung phần đạo đức và xã hội phân tích sâu: quyền riêng tư và giám sát dữ liệu, tính công bằng và thiên kiến thuật toán (algorithmic bias — định lý bất khả đồng thời thỏa mãn các tiêu chí công bằng thống kê khác nhau khi tỷ lệ nền khác biệt), tính minh bạch và trách nhiệm giải trình của hệ thống tự động hóa, khả năng tiếp cận như quyền cơ bản, cùng bản quyền và hệ sinh thái giấy phép mã nguồn mở (permissive như MIT/Apache-2.0 so với copyleft như GPL). Phần nghiên cứu khoa học trang bị phương pháp đọc bài báo khoa học ba vòng (three-pass method của Keshav), cách đặt câu hỏi nghiên cứu, thiết kế thực nghiệm có baseline công bằng, kiểm soát biến nhiễu, đánh giá độ tái lập (reproducibility) và trình bày báo cáo kỹ thuật trung thực.',
    ],
    prerequisites: [
      { courseId: 'software-engineering', type: 'required', reason: 'Cần hiểu vòng đời xây dựng phần mềm, phụ thuộc mã nguồn mở và kiểm thử.' },
      { courseId: 'statistics-inference', type: 'required', reason: 'Cần hiểu kiểm định giả thuyết, sai lệch chọn mẫu và đánh đổi sai lầm loại I/II khi phân tích tính công bằng và kết quả thực nghiệm.' },
    ],
    plannedChapters: [
      { id: 'esr-professional-ethics-privacy-fairness', title: 'Đạo đức nghề nghiệp ACM, Quyền riêng tư dữ liệu và Thiên kiến thuật toán (Fairness)', summary: 'Phân tích các nguyên tắc cốt lõi của ACM Code of Ethics, nguồn gốc sai lệch dữ liệu lịch sử, sự đánh đổi toán học giữa các thước đo công bằng (Calibration vs Equalized Odds) và giới hạn của quyết định tự động hóa.', primaryLocator: 'ACM Code of Ethics (2018) & Algorithmic Fairness Foundations' },
      { id: 'esr-licenses-ip-societal-impact', title: 'Bản quyền phần mềm, Giấy phép mã nguồn mở (MIT, Apache, GPL) và Trách nhiệm hệ thống', summary: 'Phân biệt bản quyền (copyright), bằng sáng chế (patent) và giấy phép sử dụng (license); điều kiện kế thừa của giấy phép Copyleft so với Permissive; trách nhiệm khi công bố lỗ hổng bảo mật (coordinated vulnerability disclosure).', primaryLocator: 'Open Source Licensing & SWE at Google Dependency Policies' },
      { id: 'esr-reading-papers-experimental-methodology', title: 'Phương pháp đọc bài báo khoa học 3 vòng và Thiết kế thực nghiệm tái lập trong CS', summary: 'Quy trình 3 vòng của S. Keshav (nắm khung tổng quát -> nắm luận điểm và đồ thị -> tái tạo lập luận và tìm giả định ẩn), cách thiết lập baseline không thiên vị, ablation study, báo cáo phương sai và đóng gói artifact tái lập.', primaryLocator: 'S. Keshav: How to Read a Paper (2007)' },
    ],
    boundaries: [
      'Các câu hỏi về quyền riêng tư, độ tin cậy và khả năng tiếp cận được lồng ghép xuyên suốt các môn trước, nhưng môn học này cung cấp khung phân tích hệ thống cùng phương pháp đọc/kiểm chứng công trình khoa học.',
    ],
    sources: [
      { sourceId: 'acm-ethics-keshav', locator: 'ACM Code of Ethics and Professional Conduct (Sections 1–4) & S. Keshav "How to Read a Paper"', relationship: 'primary' },
    ],
  },
  {
    id: 'spec-systems-os',
    code: 'CS-43',
    title: 'Chuyên sâu Hệ điều hành và Hệ thống (xv6 Kernel)',
    blockId: 'block-7',
    level: 'specialization',
    overview: [
      'Nhánh chuyên sâu đưa người học từ việc hiểu các cơ chế hệ điều hành ở mức khái niệm (Môn 25) sang việc đọc hiểu, phân tích và mở rộng trực tiếp mã nguồn một nhân hệ điều hành đa xử lý thực thụ dựa trên kiến trúc RISC-V (MIT xv6). Nội dung đi xuyên suốt từ quá trình khởi động máy (bootstrapping) ở chế độ M-mode/S-mode, thiết lập bảng trang hạt nhân và không gian địa chỉ người dùng Sv39, cơ chế chuyển đổi ngữ cảnh qua bảng vector trap (`trampoline` và `trapframe`), thực thi lời gọi hệ thống, cài đặt Copy-on-Write `fork()` qua xử lý ngắt thiếu trang, đồng bộ hóa nhân đa lõi bằng spinlock và sleeplock, tầng đệm khối (buffer cache) và nhật ký giao dịch (logging) của hệ thống tệp, đến giao diện trình điều khiển mạng.',
    ],
    prerequisites: [
      { courseId: 'operating-systems', type: 'required', reason: 'Cần nắm vững lý thuyết ảo hóa CPU, bảng trang bộ nhớ ảo, khóa đồng bộ và hệ thống tệp.' },
      { courseId: 'linux-system-programming', type: 'required', reason: 'Cần thành thạo ngôn ngữ C hệ thống, con trỏ hàm và giao diện lời gọi hệ thống.' },
      { courseId: 'computer-architecture', type: 'required', reason: 'Cần nắm tập lệnh RISC-V, thanh ghi điều khiển trạng thái (CSR) và quy ước gọi hàm.' },
    ],
    plannedChapters: [
      { id: 'ssos-boot-pagetables-traps', title: 'Khởi động nhân RISC-V, Bảng trang Sv39 và Cơ chế Trap/Syscall trong xv6', summary: 'Quá trình chuyển từ M-mode sang S-mode, ánh xạ bộ nhớ nhân, trang trampoline chia sẻ biên user/kernel, lưu thanh ghi vào trapframe và đường đi toàn trình của một lời gọi hệ thống.', primaryLocator: 'MIT xv6 Book Ch. 2–4' },
      { id: 'ssos-cow-lazy-allocation-scheduling', title: 'Cấp phát trang lười (Lazy Allocation), Copy-on-Write Fork và Bộ lập lịch đa nhân', summary: 'Sử dụng bit PTE và trình xử lý page fault để trì hoãn cấp phát trang vật lý và chia sẻ trang chỉ đọc giữa tiến trình cha–con cho tới khi có lệnh ghi, cùng cơ chế chuyển ngữ cảnh `swtch` trong xv6.', primaryLocator: 'MIT xv6 Book Ch. 4–5 & 6.1810 Labs (Page Tables, Traps, COW)' },
      { id: 'ssos-kernel-locking-fs-logging', title: 'Khóa đồng bộ trong Kernel, Tầng Buffer Cache và Nhật ký hệ thống tệp (Crash Recovery)', summary: 'Tại sao phải tắt ngắt trên lõi hiện tại khi giữ spinlock, khi nào dùng sleeplock, thiết kế tầng bio/log/inode/directory trong xv6 và đảm bảo tính nguyên tử của thao tác tệp qua giao dịch log.', primaryLocator: 'MIT xv6 Book Ch. 6–8' },
    ],
    boundaries: [
      'Nhánh chuyên sâu tự chọn dành cho hướng Hệ thống; tập trung vào sự chính xác của bất biến kernel, quản lý trang vật lý và đồng bộ hóa đa lõi.',
    ],
    sources: [
      { sourceId: 'mit-xv6-2025', locator: 'xv6 RISC-V Book Chapters 1–9 and MIT 6.1810 Schedule/Lab Specifications', relationship: 'primary' },
      { sourceId: 'ostep-v110', locator: 'Chapters 18–23, 28–32, 40–42', relationship: 'supplementary' },
    ],
  },
  {
    id: 'spec-database-storage',
    code: 'CS-44',
    title: 'Chuyên sâu Hệ quản trị dữ liệu và Lưu trữ',
    blockId: 'block-7',
    level: 'specialization',
    overview: [
      'Nhánh chuyên sâu đào sâu vào kỹ thuật thiết kế và cài đặt các thành phần cốt lõi của động cơ lưu trữ và xử lý truy vấn hiệu năng cao, đồng thời mở rộng từ hệ cơ sở dữ liệu giao dịch trên một máy (OLTP) sang hệ thống lưu trữ phân tích hướng cột (OLAP) và lưu trữ phân tán. Nội dung gồm thiết kế Buffer Pool có kiểm soát ghim trang và chính sách thay thế chống quét tuần tự (LRU-K), cài đặt B+Tree hỗ trợ truy cập đồng thời bằng kỹ thuật giữ chốt lan truyền (latch crabbing), kiến trúc cây LSM (MemTable, WAL, SSTable, Bloom Filter và chiến lược Compaction tầng/kích thước), thực thi truy vấn vector hóa và biên dịch truy vấn (JIT), kiểm soát đồng thời đa phiên bản (MVCC với thu gom phiên bản cũ — vacuum/garbage collection) và lưu trữ cột có nén dữ liệu.',
    ],
    prerequisites: [
      { courseId: 'database-internals', type: 'required', reason: 'Cần nắm vững kiến trúc trang đĩa, B+Tree cơ bản, các thuật toán Join, 2PL và ARIES WAL.' },
      { courseId: 'concurrency-parallelism', type: 'required', reason: 'Cần nắm vững khóa hạt mịn, reader-writer latches và thao tác nguyên tử.' },
    ],
    plannedChapters: [
      { id: 'sdbs-concurrent-bplustree-lsm', title: 'Đồng bộ hóa hạt mịn trên B+Tree (Latch Crabbing) và Kiến trúc động cơ LSM-Tree', summary: 'Phân biệt Lock (mức giao dịch logic) với Latch (mức cấu trúc dữ liệu vật lý), điều kiện nút an toàn cho phép nhả sớm latch tổ tiên, và thiết kế MemTable/SSTable/Bloom Filter/Compaction trong LSM-Tree.', primaryLocator: 'CMU 15-445 Lectures 7–8' },
      { id: 'sdbs-vectorized-execution-mvcc-gc', title: 'Thực thi truy vấn Vector hóa, Thiết kế MVCC thực chiến và Thu gom phiên bản rác', summary: 'So sánh mô hình Volcano tuple-at-a-time với vectorized batch execution trên cache CPU, bố cục lưu trữ phiên bản (append-only vs delta storage) và thu hồi phiên bản không còn giao dịch nào nhìn thấy.', primaryLocator: 'CMU 15-445 Lectures 11–12, 18' },
      { id: 'sdbs-columnar-olap-distributed-storage', title: 'Lưu trữ hướng cột (Columnar Storage), Nén dữ liệu (Run-Length, Dictionary) và Truy vấn phân tán', summary: 'Đánh đổi giữa bố cục hàng (NSM) và bố cục cột (DSM), thực thi trực tiếp trên dữ liệu nén, phân vùng bảng và thực thi kết nối phân tán (Broadcast vs Shuffle Hash Join).', primaryLocator: 'CMU 15-445 Lectures 4, 21–24' },
    ],
    boundaries: [
      'Nhánh chuyên sâu tự chọn dành cho hướng Kỹ thuật Dữ liệu và Hệ thống Lưu trữ; đòi hỏi nền tảng vững về C++, đồng thời và kiến trúc bộ nhớ.',
    ],
    sources: [
      { sourceId: 'cmu-15445', locator: 'Lectures 4, 7–8, 11–12, 18, 21–24 and Project Specifications (Buffer Pool, B+Tree, Query Execution, Concurrency)', relationship: 'primary' },
      { sourceId: 'ucb-cs186-notes', locator: 'B+ Trees, Concurrency Control, and Recovery Notes', relationship: 'supplementary' },
    ],
  },
  {
    id: 'spec-compilers-runtime',
    code: 'CS-45',
    title: 'Chuyên sâu Ngôn ngữ, Trình biên dịch và Máy ảo',
    blockId: 'block-7',
    level: 'specialization',
    overview: [
      'Nhánh chuyên sâu nghiên cứu toàn bộ đường ống chuyển đổi một ngôn ngữ bậc cao thành mã thực thi hiệu quả cùng hệ thống thời gian chạy (runtime system). Tiếp nối bộ thông dịch duyệt cây ở Môn 21, môn học đi sâu vào: phân tích từ vựng và phân tích cú pháp tiền tố/Pratt parser có phục hồi lỗi; phân tích ngữ nghĩa tĩnh, phân giải biến theo tầm vực tĩnh (static variable resolution) và kiểm tra kiểu; thiết kế biểu diễn trung gian (Intermediate Representation — từ mã byte ngăn xếp, mã ba địa chỉ đến dạng gán đơn tĩnh SSA); phân tích luồng điều khiển (CFG) và luồng dữ liệu (liveness analysis, constant propagation, dead-code elimination); kiến trúc máy ảo mã byte (Bytecode VM: khung gọi hàm, đối tượng chuỗi/hàm, bắt giữ biến tự do qua Upvalues cho Closures); và bộ thu gom rác đánh dấu–quét (Mark-and-Sweep GC) chính xác.',
    ],
    prerequisites: [
      { courseId: 'programming-languages-foundations', type: 'required', reason: 'Cần nắm vững AST, tầm vực tĩnh, bao đóng (closures) và bộ thông dịch duyệt cây.' },
      { courseId: 'computer-architecture', type: 'required', reason: 'Cần hiểu thanh ghi, ngăn xếp phần cứng, lệnh nhảy và bố cục bộ nhớ.' },
      { courseId: 'formal-languages-computability', type: 'required', reason: 'Cần nắm otomat hữu hạn và văn phạm phi ngữ cảnh.' },
    ],
    plannedChapters: [
      { id: 'scr-frontend-pratt-semantic-resolution', title: 'Kiến trúc Front-End: Phân tích cú pháp Pratt, Phân giải tĩnh và Kiểm tra ngữ nghĩa', summary: 'Xử lý độ ưu tiên toán tử bằng Vaughan Pratt parser, phát hiện lỗi cú pháp không sập (panic-mode recovery), phân giải khoảng cách khung môi trường tại thời điểm biên dịch và kiểm tra tính hợp lệ của câu lệnh.', primaryLocator: 'Crafting Interpreters Ch. 11, 16–17' },
      { id: 'scr-bytecode-vm-closures-upvalues', title: 'Biểu diễn mã Byte (Bytecode Chunk), Kiến trúc Máy ảo Ngăn xếp và Cơ chế Upvalues', summary: 'Tại sao duyệt AST chậm do phân mảnh bộ nhớ và nhảy con trỏ, thiết kế tập lệnh bytecode đặc khít, vòng lặp giải mã lệnh, quản lý ngăn xếp giá trị/khung gọi hàm và cơ chế đóng (close) upvalue từ stack sang heap.', primaryLocator: 'Crafting Interpreters Part III: A Bytecode Virtual Machine (Ch. 14–15, 18–25)' },
      { id: 'scr-ir-dataflow-gc-runtime', title: 'Biểu diễn trung gian (IR/SSA), Tối ưu hóa luồng dữ liệu và Thu gom rác (Garbage Collection)', summary: 'Đồ thị luồng điều khiển (CFG), các phép biến đổi tối ưu bảo toàn ngữ nghĩa, và cài đặt bộ thu gom rác Tracing Mark-and-Sweep ba màu (trắng–xám–đen) an toàn khi cấp phát.', primaryLocator: 'Crafting Interpreters Ch. 26–30' },
    ],
    boundaries: [
      'Nhánh chuyên sâu tự chọn; giúp người học hiểu tận gốc cách các ngôn ngữ hiện đại (Java, Python, JS, C#, Go, Rust) biên dịch và quản lý bộ nhớ bên dưới tầng cú pháp.',
    ],
    sources: [
      { sourceId: 'crafting-interpreters', locator: 'Part III: A Bytecode Virtual Machine (Chapters 14–30)', relationship: 'primary' },
    ],
  },
  {
    id: 'spec-distributed-systems-advanced',
    code: 'CS-46',
    title: 'Chuyên sâu Hệ phân tán và Đồng thuận chịu lỗi',
    blockId: 'block-7',
    level: 'specialization',
    overview: [
      'Nhánh chuyên sâu đi vào thiết kế, cài đặt và kiểm chứng các hệ thống lưu trữ và tính toán phân tán chịu lỗi dưới các kịch bản mạng khắc nghiệt (mất gói, phân vùng mạng kéo dài, khởi động lại nút mất bộ nhớ khả biến, gói tin đến trễ sau khi đã đổi leader). Nội dung tập trung vào: phân tích đầy đủ bốn tính chất an toàn của Raft (Election Safety, Leader Append-Only, Log Matching, Leader Completeness, State Machine Safety); xây dựng dịch vụ Khóa–Giá trị chịu lỗi (Fault-Tolerant Key-Value Store) trên nền Raft với cơ chế phát hiện yêu cầu trùng lặp từ client để bảo đảm tính tuyến tính hóa (Linearizability); kỹ thuật cắt tỉa và cài đặt ảnh chụp trạng thái (Log Compaction & InstallSnapshot); và hệ thống phân mảnh đa nhóm Raft (Sharded KV) với cấu hình động và di chuyển phân mảnh nguyên tử.',
    ],
    prerequisites: [
      { courseId: 'distributed-systems', type: 'required', reason: 'Cần nắm vững mô hình lỗi, đồng hồ logic, tính tuyến tính hóa và nguyên lý cơ bản của Raft/2PC.' },
      { courseId: 'concurrency-parallelism', type: 'required', reason: 'Cần thành thạo xử lý đồng thời đa luồng, khóa và kênh truyền thông không đồng bộ.' },
    ],
    plannedChapters: [
      { id: 'sdsa-raft-safety-persistence-snapshots', title: 'Chứng minh an toàn của Raft, Lưu trữ bền vững qua sự cố khởi động lại và Cắt tỉa nhật ký (Snapshots)', summary: 'Tại sao Leader không được trực tiếp đánh dấu commit cho các mục log từ nhiệm kỳ trước chỉ bằng đếm số bản sao (Figure 8 trong bài báo Raft), trạng thái bắt buộc phải ghi đĩa trước khi phản hồi RPC, và giao thức InstallSnapshot.', primaryLocator: 'Raft Paper §5–§7 & MIT 6.5840 Labs 3A–3D' },
      { id: 'sdsa-linearizable-kv-deduplication', title: 'Dịch vụ Key-Value Tuyến tính hóa (Linearizable KV) và Khử trùng lặp yêu cầu qua đổi Leader', summary: 'Xử lý tình huống Leader bị cô lập mạng (stale leader) khi phục vụ lệnh đọc, gắn số thứ tự tuần tự cho mỗi phiên client và lưu bảng kết quả cuối cùng trong máy trạng thái nhân bản để thử lại an toàn.', primaryLocator: 'MIT 6.5840 Lecture Notes & Lab 4 (Fault-tolerant Key/Value Service)' },
      { id: 'sdsa-sharded-raft-reconfiguration', title: 'Hệ thống Lưu trữ Phân mảnh động (Sharded KV) và Phối hợp liên nhóm đồng thuận', summary: 'Kiến trúc nhóm điều khiển cấu hình (Shard Controller) tách biệt với các nhóm lưu trữ dữ liệu (Replica Groups), di chuyển dữ liệu phân mảnh khi đổi cấu hình mà không làm mất tính nhất quán hay chặn toàn cục.', primaryLocator: 'MIT 6.5840 Lab 5 (Sharded Key/Value Service) & Spanner/Bigtable Readings' },
    ],
    boundaries: [
      'Nhánh chuyên sâu tự chọn mức cao (dựa trên học liệu công khai của MIT 6.5840); tập trung vào việc duy trì bất biến trạng thái dưới mọi lịch trình đan xen lỗi mạng và sập nút.',
    ],
    sources: [
      { sourceId: 'mit-65840-raft', locator: 'Raft Paper (§5–§8) and MIT 6.5840 Public Lecture Notes & Lab Architectures', relationship: 'primary' },
    ],
  },
  {
    id: 'spec-computer-vision',
    code: 'CS-47',
    title: 'Chuyên sâu Thị giác máy tính (Computer Vision)',
    blockId: 'block-7',
    level: 'specialization',
    overview: [
      'Nhánh chuyên sâu nghiên cứu cách trích xuất thông tin cấu trúc, hình học và ngữ nghĩa từ ảnh số và chuỗi video. Nội dung kết hợp cả thị giác máy tính cổ điển dựa trên xử lý tín hiệu/hình học lẫn các kiến trúc học sâu hiện đại: quá trình hình thành ảnh, phép lọc không gian và miền tần số, phát hiện biên và đặc trưng cục bộ bất biến tỷ lệ, hình học nhiều góc nhìn (ma trận Homography, hình học Epipolar, ước lượng độ sâu lập thể), các kiến trúc mạng tích chập và Vision Transformer (ViT), bài toán phát hiện vật thể (Object Detection: vùng đề xuất, khung neo, Non-Maximum Suppression), phân đoạn ảnh ngữ nghĩa và thực thể (Semantic/Instance Segmentation: U-Net, Mask R-CNN), cùng đánh giá định lượng bằng IoU/mAP.',
    ],
    prerequisites: [
      { courseId: 'deep-learning-modern-models', type: 'required', reason: 'Cần nắm vững mạng tích chập (CNN), ResNet, Attention/Transformer và quy trình huấn luyện mạng sâu.' },
      { courseId: 'linear-algebra', type: 'required', reason: 'Cần phép biến đổi chiếu, SVD và giải hệ phương trình bình phương tối thiểu cho hình học thị giác.' },
    ],
    plannedChapters: [
      { id: 'scv-image-filtering-features-geometry', title: 'Lọc ảnh, Phát hiện biên/đặc trưng và Hình học nhiều góc nhìn (Multi-View Geometry)', summary: 'Tích chập 2D rời rạc, bộ lọc Gaussian/Sobel/Canny, mô tả đặc trưng cục bộ, phép biến đổi phẳng Homography, khớp ảnh bằng RANSAC chống ngoại lai và hình học Epipolar.', primaryLocator: 'D2L Ch. 14 & Computer Vision Foundations' },
      { id: 'scv-detection-segmentation-vit', title: 'Phát hiện vật thể (Object Detection), Phân đoạn ảnh (Segmentation) và Vision Transformer', summary: 'Biểu diễn hộp bao, giao trên hợp (IoU), thuật toán lọc hộp trùng Non-Maximum Suppression (NMS), kiến trúc phát hiện một/hai giai đoạn, mạng tích chập đầy đủ và U-Net cho phân đoạn mức điểm ảnh, cùng biểu diễn mảng ảnh (patch embeddings) trong ViT.', primaryLocator: 'D2L Ch. 14 (§14.1–14.11: Object Detection, Semantic Segmentation, Style Transfer)' },
      { id: 'scv-evaluation-robustness-deployment', title: 'Đánh giá hệ thống thị giác (mAP), Độ bền vững trước biến đổi miền và Giới hạn thực tế', summary: 'Tính toán đường cong Precision–Recall và Mean Average Precision (mAP) qua nhiều ngưỡng IoU, tăng cường dữ liệu bảo toàn nhãn, hiện tượng suy giảm hiệu năng khi thay đổi ánh sáng/góc máy và tối ưu hóa suy luận.', primaryLocator: 'D2L Ch. 14' },
    ],
    boundaries: [
      'Nhánh chuyên sâu tự chọn; giữ cả nền tảng hình học/xử lý ảnh lẫn học sâu để người học không bị bế tắc khi bài toán cần hiệu chỉnh camera hay ước lượng tọa độ không gian.',
    ],
    sources: [
      { sourceId: 'd2l-ai', locator: 'Chapter 14: Computer Vision (Image Augmentation, Object Detection, Bounding Boxes, Multiscale Detection, R-CNNs, Semantic Segmentation, Fully Convolutional Networks)', relationship: 'primary' },
    ],
  },
  {
    id: 'spec-natural-language-processing',
    code: 'CS-48',
    title: 'Chuyên sâu Xử lý ngôn ngữ tự nhiên (NLP)',
    blockId: 'block-7',
    level: 'specialization',
    overview: [
      'Nhánh chuyên sâu nghiên cứu các mô hình tính toán để phân tích, biểu diễn và sinh ngôn ngữ tự nhiên của con người. Nội dung đi từ đặc thù cấu trúc và sự nhập nhằng của ngôn ngữ, chuẩn hóa văn bản Unicode, các thuật toán tách từ con (Subword Tokenization: Byte-Pair Encoding — BPE, WordPiece), mô hình ngôn ngữ thống kê N-gram, độ hỗn loạn (perplexity) và kỹ thuật làm trơn, đến biểu diễn từ phân tán (Word2Vec Skip-gram/CBOW, lấy mẫu âm), mô hình chuỗi–sang–chuỗi (Seq2Seq, tìm kiếm chùm — Beam Search), các kiến trúc Transformer tiền huấn luyện (Encoder-only như BERT cho biểu diễn hai chiều, Decoder-only tự hồi quy cho sinh văn bản, Encoder-Decoder), tinh chỉnh có giám sát, cơ chế truy hồi bổ sung (Retrieval-Augmented Generation), phương pháp đánh giá và phân tích hiện tượng sinh thông tin sai lệch (hallucination).',
    ],
    prerequisites: [
      { courseId: 'deep-learning-modern-models', type: 'required', reason: 'Cần nắm vững không gian nhúng, cơ chế Attention, kiến trúc Transformer và hàm mất mát Cross-Entropy.' },
      { courseId: 'probability', type: 'required', reason: 'Cần quy tắc dây chuyền xác suất có điều kiện và lý thuyết thông tin cơ bản (entropy).' },
    ],
    plannedChapters: [
      { id: 'snlp-tokenization-language-models-embeddings', title: 'Tách từ con (Subword Tokenization), Mô hình ngôn ngữ xác suất và Không gian nhúng từ', summary: 'Tại sao tách từ theo khoảng trắng thất bại trước từ hiếm và ngôn ngữ đa hình thái, thuật toán BPE, mô hình ngôn ngữ tự hồi quy P(w_1...w_T), thước đo Perplexity, và học biểu diễn ngữ nghĩa qua ngữ cảnh trong Word2Vec.', primaryLocator: 'D2L Ch. 9.3, Ch. 15 (§15.1–15.4: Word2Vec, Subword Embedding/BPE)' },
      { id: 'snlp-seq2seq-pretrained-transformers', title: 'Kiến trúc Seq2Seq, Tìm kiếm chùm (Beam Search) và Mô hình Transformer tiền huấn luyện', summary: 'Giải mã chuỗi bằng Greedy vs Beam Search vs lấy mẫu nhiệt độ/top-p, sự khác biệt giữa mặt nạ hai chiều (Masked Language Modeling — BERT) và mặt nạ nhân quả tự hồi quy (Causal Language Modeling — GPT), cùng kỹ thuật tinh chỉnh hiệu quả tham số.', primaryLocator: 'D2L Ch. 10 (§10.7–10.8), Ch. 11 & Ch. 15 (§15.8–15.10: BERT & Pretraining)' },
      { id: 'snlp-evaluation-retrieval-hallucination', title: 'Đánh giá tác vụ NLP, Kết hợp truy hồi tri thức và Giới hạn của mô hình ngôn ngữ', summary: 'Đánh giá phân lớp/trích xuất thực thể ở mức span so với đánh giá văn bản sinh, nguyên nhân toán học của hiện tượng bịa đặt thông tin (hallucination) trong mô hình xác suất tự hồi quy, tiêm nhiễm câu lệnh (prompt injection) và kiểm chứng bằng nguồn ngoài.', primaryLocator: 'D2L Ch. 16 (Natural Language Processing: Applications)' },
    ],
    boundaries: [
      'Nhánh chuyên sâu tự chọn; phân biệt rõ việc hiểu cơ chế tách token, xác suất tự hồi quy và đánh giá mô hình NLP với việc chỉ viết câu lệnh gọi chatbot.',
    ],
    sources: [
      { sourceId: 'd2l-ai', locator: 'Chapters 10, 11, 15 (Pretraining: Word2Vec, BPE, BERT), and 16 (NLP Applications)', relationship: 'primary' },
    ],
  },
  {
    id: 'spec-security-advanced',
    code: 'CS-49',
    title: 'Chuyên sâu Bảo mật hệ thống, Ứng dụng và Mạng',
    blockId: 'block-7',
    level: 'specialization',
    overview: [
      'Nhánh chuyên sâu đào sâu vào phương pháp phân tích an toàn hệ thống ở ba lớp: nhị phân/hệ điều hành, giao thức mạng và kiến trúc ứng dụng phức tạp. Nội dung trình bày cách phân tích điều kiện khai thác và cơ chế phòng vệ phần cứng/trình biên dịch ở mức nhị phân (Control-Flow Integrity, ASLR, DEP/NX, fuzzing hướng độ phủ — coverage-guided fuzzing và kiểm thử thực thi ký hiệu cơ sở); bảo mật tầng mạng và hệ thống phân tán (tấn công giả mạo DNS/BGP, phân tích bắt tay TLS 1.3, cô lập mạng Zero-Trust, mTLS); kiểm toán mã nguồn và kiến trúc xác thực/ủy quyền tập trung (OAuth 2.0 / OIDC với PKCE, lỗ hổng kiểm soát truy cập mức đối tượng BOLA/IDOR, điều kiện tranh chấp TOCTOU trong giao dịch tài nguyên); cùng quy trình ứng phó sự cố và pháp chứng số cơ bản.',
    ],
    prerequisites: [
      { courseId: 'security-privacy', type: 'required', reason: 'Cần nắm vững mô hình đe dọa, mật mã ứng dụng cơ sở và các lớp lỗ hổng phổ biến.' },
      { courseId: 'linux-system-programming', type: 'required', reason: 'Cần hiểu tệp thực thi ELF, lời gọi hệ thống, mô tả tệp và tín hiệu.' },
      { courseId: 'computer-networks', type: 'required', reason: 'Cần nắm chắc TCP/IP, DNS, định tuyến và TLS.' },
    ],
    plannedChapters: [
      { id: 'ssa-binary-mitigations-fuzzing', title: 'Bảo vệ thực thi nhị phân, Điều kiện tranh chấp TOCTOU và Kiểm thử mờ hướng độ phủ (Fuzzing)', summary: 'Cơ chế bảo vệ khung ngăn xếp và vùng nhớ động hiện đại, lỗ hổng Time-of-Check to Time-of-Use (TOCTOU) ở tầng hệ thống tệp/ứng dụng, và tự động phát hiện đầu vào gây lỗi bằng coverage-guided fuzzing kết hợp sanitizers.', primaryLocator: 'OSTEP Ch. 53–56 & OWASP Testing Guide' },
      { id: 'ssa-protocol-security-oauth-zerotrust', title: 'Phân tích an toàn giao thức (TLS 1.3, OAuth 2.0/OIDC) và Kiểm soát truy cập phân tán', summary: 'Các tính chất bảo mật tiên tiến của TLS 1.3 (Forward Secrecy, loại bỏ thuật toán yếu), luồng ủy quyền OAuth 2.0 Authorization Code + PKCE, các lỗi xác thực chữ ký token và phòng chống leo thang đặc quyền ngang/dọc.', primaryLocator: 'OWASP OAuth2, JWT, and Authorization Cheat Sheets & Dordal Ch. 29' },
      { id: 'ssa-audit-incident-response', title: 'Phương pháp kiểm toán thiết kế an toàn, Nhật ký chống giả mạo và Ứng phó sự cố', summary: 'Rà soát kiến trúc theo luồng dữ liệu, thiết kế nhật ký kiểm toán (audit logs) phục vụ truy vết, quy trình cô lập, khắc phục nguyên nhân gốc và rút kinh nghiệm không đổ lỗi sau sự cố bảo mật.', primaryLocator: 'OWASP Logging & Incident Response Guidance' },
    ],
    boundaries: [
      'Nhánh chuyên sâu tự chọn; tuân thủ tuyệt đối nguyên tắc đạo đức và pháp luật: chỉ thực hành kiểm thử bảo mật trên môi trường cô lập hoặc tài sản có sự cho phép rõ ràng bằng văn bản.',
    ],
    sources: [
      { sourceId: 'owasp-cheatsheets', locator: 'Authorization, OAuth2, JWT, Transaction Authorization, and Logging Cheat Sheets', relationship: 'primary' },
      { sourceId: 'ostep-v110', locator: 'Chapters 53–58 (Security, Access Control, Cryptography, Distributed Security)', relationship: 'primary' },
    ],
  },
  {
    id: 'capstone-synthesis-technical-writing',
    code: 'CS-50',
    title: 'Đồ án tổng hợp và trình bày kỹ thuật',
    blockId: 'block-7',
    level: 'core',
    overview: [
      'Môn học đóng vai trò đỉnh tích hợp của toàn bộ chương trình Khoa học Máy tính: nơi người học vận dụng đồng thời nền tảng cấu trúc dữ liệu – thuật toán, tư duy hệ thống, mô hình dữ liệu, kỹ nghệ phần mềm và phương pháp đánh giá thực nghiệm để giải quyết một bài toán kỹ thuật hoặc nghiên cứu có chiều sâu. Thay vì cung cấp một danh sách việc làm rập khuôn, môn học trình bày phương pháp luận xác định phạm vi bài toán, lập tài liệu thiết kế kiến trúc (System Design Document & ADR) nêu rõ các phương án đã cân nhắc và lý do đánh đổi, xây dựng hệ thống có kiểm thử tự động và khả năng quan sát, thiết kế bộ thí nghiệm đo kiểm định lượng (độ trễ, thông lượng, bộ nhớ, độ chính xác hoặc hành vi khi gặp lỗi) và viết báo cáo kỹ thuật rõ ràng, trung thực về cả kết quả đạt được lẫn giới hạn của hệ thống.',
    ],
    prerequisites: [
      { courseId: 'software-engineering', type: 'required', reason: 'Cần nắm quy trình thiết kế mô-đun, kiểm thử đa tầng, quản lý phiên bản và tích hợp liên tục.' },
      { courseId: 'operations-performance-reliability', type: 'required', reason: 'Cần phương pháp đo đạc hiệu năng, phân vị độ trễ và kiểm chứng độ tin cậy.' },
      { courseId: 'ethics-society-cs-research', type: 'required', reason: 'Cần phương pháp thiết kế thực nghiệm tái lập, đạo đức dữ liệu và trình bày báo cáo khoa học.' },
    ],
    plannedChapters: [
      { id: 'cstw-problem-scoping-design-doc', title: 'Định hình bài toán, Đặc tả yêu cầu và Tài liệu thiết kế kiến trúc (Design Doc)', summary: 'Xác định mục tiêu và phi mục tiêu (non-goals), ước lượng quy mô và ràng buộc tài nguyên, phân tích ít nhất hai phương án kiến trúc khả thi và ghi lại lý do đánh đổi.', primaryLocator: 'SWE at Google Ch. 8–10 & OSSU Final Project Guidelines' },
      { id: 'cstw-incremental-implementation-verification', title: 'Triển khai phân đoạn, Kiểm chứng bất biến và Đánh giá thực nghiệm định lượng', summary: 'Xây dựng trục xương sống (walking skeleton) từ sớm, kiểm thử tự động các bất biến cốt lõi, thiết lập kịch bản đo tải/độ chính xác có đối chứng (baseline comparison) và kiểm tra hành vi dưới đầu vào biên/lỗi.', primaryLocator: 'SWE at Google Ch. 11–14 & Google SRE Book Ch. 4, 21' },
      { id: 'cstw-technical-writing-reproducible-artifact', title: 'Phương pháp viết báo cáo kỹ thuật, Trực quan hóa kết quả và Đóng gói tái lập', summary: 'Cấu trúc một báo cáo kỹ thuật hoặc bài báo hệ thống, trình bày sơ đồ kiến trúc và biểu đồ thực nghiệm đúng chuẩn mực, viết hướng dẫn để người độc lập dựng và kiểm chứng lại toàn bộ kết quả, cùng phụ lục tự chọn về định hướng nghề nghiệp.', primaryLocator: 'S. Keshav Paper Writing/Reading Notes & ACM Reproducibility Guidelines' },
    ],
    boundaries: [
      'Đồ án tổng hợp đánh giá năng lực tích hợp kiến thức và bằng chứng kiểm nghiệm thực tế; phần chuẩn bị hồ sơ nghề nghiệp chỉ là phụ lục tùy chọn sau khi đã hoàn thành sản phẩm kỹ thuật.',
    ],
    sources: [
      { sourceId: 'swe-at-google', locator: 'Chapters 8–14 (Design Docs, Code Review, Testing)', relationship: 'primary' },
      { sourceId: 'ossu-cs', locator: 'Final Project & Evaluation Guidelines', relationship: 'supplementary' },
      { sourceId: 'acm-ethics-keshav', locator: 'Technical Writing, Reproducibility, and Ethical Reporting', relationship: 'supplementary' },
    ],
  },
];
