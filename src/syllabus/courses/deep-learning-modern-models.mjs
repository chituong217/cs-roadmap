export const COURSE_DEEP_LEARNING_MODERN_MODELS = {
  "id": "deep-learning-modern-models",
  "code": "CS-37",
  "title": "Deep learning và mô hình hiện đại",
  "blockId": "block-6",
  "level": "core",
  "prerequisites": [
    {
      "courseId": "machine-learning",
      "type": "required",
      "reason": "Cần nắm vững hàm mất mát, tổng quát hóa, chính quy hóa, đánh giá mô hình và quy trình huấn luyện."
    },
    {
      "courseId": "multivariable-calculus-optimization",
      "type": "required",
      "reason": "Cần quy tắc dây chuyền nhiều biến (chain rule) và ma trận Jacobian để hiểu cơ chế lan truyền ngược."
    },
    {
      "courseId": "linear-algebra",
      "type": "required",
      "reason": "Cần phép nhân ma trận theo lô (batched matrix multiplication) và không gian tích vô hướng."
    }
  ],
  "overview": [
    "Học sâu nghiên cứu những mô hình nhiều tầng có thể học biểu diễn dữ liệu bằng tối ưu một mục tiêu vi phân. Môn học xây từ tensor và đồ thị tính toán để hiểu gradient được tính như thế nào, rồi phát triển cơ chế huấn luyện ổn định và các thiên kiến kiến trúc cho ảnh, chuỗi và tương tác theo nội dung. MLP, CNN, RNN, LSTM và Transformer được so sánh bằng cách chia sẻ tham số, truyền thông tin và sử dụng tài nguyên, không chỉ bằng tên hoặc thứ hạng trên một benchmark. Các kỹ thuật khởi tạo, chuẩn hóa, dropout và tối ưu được giải thích theo vấn đề chúng tác động, cùng những điều kiện và giới hạn liên quan. Kiến thức từ môn học máy về dữ liệu, tổng quát hóa và đánh giá tiếp tục là nền bắt buộc; autodiff hoặc mô hình có sẵn không thay thế các bước ấy. Phần cuối xem cả chi phí triển khai và phạm vi kiến thức để tạo đường nối sang CV, NLP mà không tuyên bố một kiến trúc chung đã bao quát các ngành ứng dụng đó."
  ],
  "boundaries": [
    "Không coi một chương giới thiệu Transformer là đã bao quát toàn bộ Xử lý ngôn ngữ tự nhiên (NLP) hay Thị giác máy tính (CV); các bài toán đặc thù của từng miền được tách thành các nhánh chuyên sâu riêng ở Khối VII.",
    "Phân biệt tích chập equivariant với bất biến tuyệt đối; phân biệt tính gradient đúng với tối ưu và tổng quát hóa tốt. Không cố định syllabus vào một API hoặc phần cứng."
  ],
  "sources": [
    {
      "sourceId": "d2l-ai",
      "locator": "§2.1–2.5; Ch. 5; Ch. 7–13; §15.8",
      "relationship": "primary"
    },
    {
      "sourceId": "adamw-2019",
      "locator": "Decoupled Weight Decay Regularization, ICLR 2019 §2 and Algorithm 2",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "dl-tensors-autodiff-backprop",
      "overview": [
        "Mạng sâu là một hàm có nhiều phép biến đổi liên tiếp với tham số học được. Trước khi xét kiến trúc, chương này làm rõ tensor biểu diễn dữ liệu như thế nào và đồ thị tính toán lưu những quan hệ phụ thuộc nào. Lan truyền ngược được xây từ quy tắc dây chuyền như một cách tính tích vector–Jacobian hiệu quả, không phải phép tìm đạo hàm bằng hiệu sai phân. Hình dạng dữ liệu, chia sẻ bộ nhớ và phép cộng gradient từ nhiều nhánh đều được giữ rõ để tránh mô hình chạy được nhưng tính sai mục tiêu."
      ],
      "sources": [
        {
          "sourceId": "d2l-ai",
          "locator": "§2.1 Data Manipulation; §2.3 Linear Algebra; §2.5 Automatic Differentiation; §5.3 Computational Graphs",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "dl-tensor-shape-strides",
          "title": "Hình dạng tensor, broadcasting và vùng nhớ",
          "level": "core",
          "paragraphs": [
            "Tensor trong tính toán ở đây là mảng số nhiều chiều với shape và kiểu dữ liệu; thứ tự chiều phải gắn với nghĩa như batch, kênh hoặc thời gian. Stride mô tả bước dịch trong vùng lưu khi tăng một chỉ số, nên chuyển vị có thể đổi cách nhìn mà chưa sao chép dữ liệu. Broadcasting mở rộng các chiều tương thích theo quy tắc xác định, không phải ghép tùy ý hai mảng. Nhầm chiều batch và chiều đặc trưng có thể cho phép toán hợp lệ về shape nhưng sai ý nghĩa, vì thế cần theo dõi cả hai."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§2.1 Data Manipulation: Operations; Broadcasting; Conversion; §2.3 Linear Algebra",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "dl-reverse-autodiff",
          "title": "Đồ thị tính toán và vi phân tự động chiều ngược",
          "level": "core",
          "paragraphs": [
            "Đồ thị tính toán có nút phép toán và cạnh phụ thuộc dữ liệu. Forward pass tính các giá trị trung gian; reverse pass truyền độ nhạy của mất mát theo thứ tự topo đảo, dùng đạo hàm cục bộ và cộng đóng góp khi một biến được dùng nhiều nơi. Với đầu ra vô hướng và nhiều tham số, reverse-mode tránh tính riêng một đạo hàm xuôi cho từng tham số. Việc cắt đồ thị, cập nhật tại chỗ hoặc quên xóa gradient tích lũy có thể đổi kết quả; autodiff thực hiện quy tắc của chương trình đã viết, không xác nhận chương trình ấy đúng bài toán."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§2.5 Automatic Differentiation; §5.3 Forward Propagation, Backward Propagation, and Computational Graphs",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "dl-mlp-loss-training-loop",
          "title": "MLP, minibatch và vòng huấn luyện",
          "level": "core",
          "paragraphs": [
            "MLP phối hợp các biến đổi affine với hàm phi tuyến; nếu chỉ chồng các lớp tuyến tính thì toàn mạng vẫn là một biến đổi tuyến tính hoặc affine. Huấn luyện tính dự đoán và mất mát trên minibatch, lấy gradient theo tham số rồi cập nhật bằng bộ tối ưu. Chế độ huấn luyện và suy luận có thể khác với dropout hoặc batch normalization. Kiểm tra mất mát giảm trên một tập rất nhỏ có thể phát hiện lỗi quy trình, nhưng đánh giá tổng quát hóa vẫn cần validation và test độc lập như ở môn học máy."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§5.1 Multilayer Perceptrons; §5.2 Implementation; §5.3",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Đại số Tensor, Đồ thị tính toán và Cơ chế Vi phân tự động (Backpropagation)"
    },
    {
      "id": "dl-optimization-stability-regularization",
      "overview": [
        "Mạng có gradient chính xác chưa chắc học được ổn định. Khi nhiều lớp hợp thành, tỷ lệ độ lớn đạo hàm và thang giá trị có thể làm gradient biến mất, bùng nổ hoặc gây mất chính xác số học. Chương này kết nối khởi tạo, kích hoạt, chuẩn hóa, tối ưu và chính quy hóa thành một hệ thống cần phối hợp. Mỗi kỹ thuật tác động vào một cơ chế khác nhau; đổi bộ tối ưu không thay thế việc chọn mục tiêu, kiểm tra dữ liệu hoặc tách tập đánh giá đúng."
      ],
      "sources": [
        {
          "sourceId": "d2l-ai",
          "locator": "§5.4 Numerical Stability and Initialization; §5.6 Dropout; §8.5 Batch Normalization; §11.7 Transformer Architecture; Ch. 12 Optimization",
          "relationship": "primary"
        },
        {
          "sourceId": "adamw-2019",
          "locator": "§2 Decoupled Weight Decay",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "dl-activation-initialization",
          "title": "Kích hoạt, gradient và khởi tạo",
          "level": "core",
          "paragraphs": [
            "Đạo hàm của một hợp nhiều lớp có thể co hoặc nở qua các phép nhân liên tiếp. Sigmoid bão hòa có đạo hàm nhỏ; ReLU tránh một số vấn đề bão hòa phía dương nhưng có thể tạo đơn vị không hoạt động. GELU điều chỉnh đầu vào theo một trọng số trơn liên hệ với hàm phân phối Gaussian. Khởi tạo Xavier và He chọn thang phương sai theo số kết nối và kích hoạt để kiểm soát tín hiệu trong những giả thiết xấp xỉ. Chúng giảm rủi ro bất ổn chứ không bảo đảm hội tụ cho mọi kiến trúc hoặc dữ liệu."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§5.1 Multilayer Perceptrons; §5.4 Numerical Stability and Initialization; §15.8 BERT",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "dl-logsumexp-clipping",
          "title": "Ổn định softmax và kiểm soát gradient",
          "level": "core",
          "paragraphs": [
            "Tính exp trực tiếp trên logits lớn có thể tràn số dù xác suất cuối hợp lệ. Trừ logit lớn nhất trước khi lấy exp giữ softmax không đổi, còn log-sum-exp cho cách tính log xác suất ổn định. Gradient clipping giới hạn chuẩn gradient để hạn chế một cập nhật quá lớn, thường hữu ích với chuỗi dài nhưng không sửa nguyên nhân mô hình sai. Độ chính xác hỗn hợp cần kiểm giá trị quá nhỏ hoặc quá lớn và có thể dùng loss scaling; mất mát hữu hạn không tự chứng minh mọi gradient đều hữu hạn."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§4.1 Softmax Regression; §5.4 Numerical Stability; §9.5 Recurrent Neural Network Implementation: Gradient Clipping",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "dl-normalization-dropout",
          "title": "BatchNorm, LayerNorm và dropout",
          "level": "core",
          "paragraphs": [
            "BatchNorm chuẩn hóa dựa trên thống kê minibatch theo các chiều đã quy định và thường dùng thống kê chạy khi suy luận, nên batch nhỏ hoặc đổi phân phối có thể ảnh hưởng kết quả. LayerNorm chuẩn hóa trong từng mẫu theo các chiều đặc trưng phù hợp và không cần cùng kiểu thống kê batch. Dropout ngẫu nhiên bỏ một số hoạt động khi huấn luyện với hệ số co giãn tương ứng, rồi đổi hành vi khi đánh giá. Cả ba kỹ thuật đều cần xác định đúng chiều và chế độ; chúng không làm dữ liệu test được phép tham gia huấn luyện."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§5.6 Dropout; §8.5 Batch Normalization; §11.7 Transformer Architecture: Add and Norm",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "dl-sgd-adam-adamw",
          "title": "Momentum, Adam và weight decay tách rời",
          "level": "core",
          "paragraphs": [
            "Momentum tích lũy hướng cập nhật để giảm dao động và tăng tiến theo xu hướng gradient. Adam dùng các ước lượng mômen bậc một, bậc hai và hiệu chỉnh sai lệch khởi đầu để tạo thang bước khác nhau theo tham số. Thêm phạt L2 vào gradient không tương đương weight decay đơn giản dưới bộ tối ưu thích nghi; AdamW tách bước co trọng số khỏi cập nhật gradient. Tốc độ học, warmup và lịch giảm cần được chọn theo validation và ngân sách, không được mô tả AdamW như bảo đảm luôn thắng SGD."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§12.6 Momentum; §12.10 Adam; §12.11 Learning Rate Scheduling",
              "relationship": "primary"
            },
            {
              "sourceId": "adamw-2019",
              "locator": "§2 Decoupled Weight Decay; Algorithm 2",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Ổn định số học, Khởi tạo trọng số, Chuẩn hóa (Normalization) và Tối ưu hóa mạng sâu"
    },
    {
      "id": "dl-convolutional-networks",
      "overview": [
        "Dữ liệu ảnh có cấu trúc lân cận và sự lặp lại mẫu theo vị trí mà lớp kết nối đầy đủ không khai thác trực tiếp. Chương này dùng chia sẻ tham số và trường tiếp nhận để xây CNN, rồi phát triển các khối nhiều kênh và kết nối residual. Tính tương đương theo dịch chuyển được phân biệt với bất biến dịch chuyển: đặc trưng có thể dịch theo đầu vào chứ không tự giữ nguyên. Padding, stride và biên ảnh làm các phát biểu đối xứng cần điều kiện cụ thể."
      ],
      "sources": [
        {
          "sourceId": "d2l-ai",
          "locator": "Ch. 7 Convolutional Neural Networks; §8.6 Residual Networks",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "dl-convolution-channels-receptive",
          "title": "Tích chập, đa kênh và trường tiếp nhận",
          "level": "core",
          "paragraphs": [
            "Một bộ lọc áp dụng cùng tham số lên các vùng cục bộ, sinh bản đồ đặc trưng theo vị trí. Nhiều kênh đầu vào được kết hợp để tạo từng kênh đầu ra; số tham số phụ thuộc kích thước kernel và số kênh, không tăng trực tiếp theo diện tích ảnh. Phép thường gọi convolution trong thư viện học sâu thực chất thường là cross-correlation không lật kernel. Trường tiếp nhận cho biết vùng đầu vào có thể ảnh hưởng một đầu ra, tăng qua các lớp; mức ảnh hưởng thực tế trong vùng không nhất thiết đồng đều."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§7.1 From Fully Connected Layers to Convolutions; §7.2 Convolutions for Images; §7.4 Multiple Input and Output Channels",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "dl-padding-stride-pooling",
          "title": "Kích thước đầu ra, pooling và đối xứng",
          "level": "core",
          "paragraphs": [
            "Padding thêm giá trị biên, stride quy định bước dịch và dilation giãn khoảng lấy mẫu; cả ba ảnh hưởng kích thước đầu ra và trường tiếp nhận. Pooling tổng hợp cục bộ như max hoặc trung bình để giảm kích thước và độ nhạy với một số dịch chuyển nhỏ. Giảm mẫu có thể mất thông tin và gây aliasing nếu không kiểm soát tần số. Chia sẻ tham số tạo tính equivariant lý tưởng với dịch chuyển trong các điều kiện phù hợp, còn bất biến thường cần thêm tổng hợp; không nên gọi mọi CNN bất biến dịch chuyển tuyệt đối."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§7.3 Padding and Stride; §7.5 Pooling",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "dl-residual-training",
          "title": "Kết nối residual và đường gradient",
          "level": "core",
          "paragraphs": [
            "Một khối residual biểu diễn đầu ra x+F(x) khi kích thước tương thích, thay vì buộc lớp học toàn bộ ánh xạ từ đầu. Đường tắt cho phép truyền tín hiệu và gradient trực tiếp hơn, hỗ trợ tối ưu mạng sâu. Khi shape hoặc số kênh đổi, đường tắt cần phép chiếu hoặc cách điều chỉnh tương ứng. Khả năng tối ưu tốt hơn không đồng nghĩa cứ tăng lớp là tăng hiệu năng trên mọi dữ liệu; độ sâu, chi phí tính và tổng quát hóa vẫn phải đánh giá. ResNet là cơ chế kiến trúc, không chỉ tên một mô hình có sẵn."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§8.6 Residual Networks (ResNet) and ResNeXt",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Mạng tích chập (CNN), Thiên kiến quy nạp không gian và Kiến trúc Residual"
    },
    {
      "id": "dl-sequences-attention-transformers",
      "overview": [
        "Chuỗi đòi hỏi biểu diễn thứ tự và phụ thuộc có độ dài thay đổi. Chương này bắt đầu từ embedding và trạng thái hồi quy, sau đó chuyển sang attention để chọn thông tin theo nội dung. Transformer kết hợp attention, mã hóa vị trí và các khối theo token, cho phép song song hóa nhiều bước huấn luyện nhưng tạo chi phí tương tác lớn khi chuỗi dài. Các mặt nạ và kiểu kiến trúc được nối với thông tin mô hình được phép nhìn thấy, để tránh rò rỉ tương lai trong bài toán dự đoán tự hồi quy."
      ],
      "sources": [
        {
          "sourceId": "d2l-ai",
          "locator": "§9.2–9.7 Recurrent Neural Networks; §10.1 LSTM; §11.1–11.7 Attention and Transformers; Ch. 13 Computational Performance",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "dl-embeddings-rnn-lstm",
          "title": "Embedding và trạng thái hồi quy",
          "level": "core",
          "paragraphs": [
            "Embedding ánh xạ một chỉ số rời rạc sang vector học được, tạo biểu diễn liên tục để các phép tính tiếp theo có thể tối ưu bằng gradient. RNN cập nhật trạng thái từ trạng thái trước và đầu vào hiện tại, chia sẻ tham số theo thời gian. Backpropagation through time mở các bước thành đồ thị phụ thuộc, nên chuỗi dài làm chi phí bộ nhớ và vấn đề gradient rõ hơn. LSTM dùng các cổng và trạng thái ô để điều tiết dòng thông tin, nhưng không xóa hoàn toàn phụ thuộc tuần tự hoặc bảo đảm nhớ mọi chi tiết dài hạn."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§9.4 Recurrent Neural Networks; §9.7 Backpropagation Through Time; §10.1 Long Short-Term Memory",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "dl-attention-query-key-value",
          "title": "Query, key, value và multi-head attention",
          "level": "core",
          "paragraphs": [
            "Attention tạo trọng số từ mức tương thích giữa query và các key rồi lấy tổng có trọng số các value. Scaled dot-product attention chia tích vô hướng cho căn bậc hai chiều key để kiểm soát thang logits trước softmax; mask loại các liên kết không được phép. Nhiều head học các phép chiếu khác nhau trước khi ghép kết quả, không đơn thuần sao chép cùng một attention. Trọng số attention thể hiện một cơ chế tính toán và không tự là lời giải thích nhân quả đáng tin về lý do mô hình dự đoán."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§11.1 Queries, Keys, and Values; §11.3 Attention Scoring Functions; §11.5 Multi-Head Attention",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "dl-transformer-positions-masks",
          "title": "Transformer, vị trí và các kiểu kiến trúc",
          "level": "core",
          "paragraphs": [
            "Self-attention thuần không tự biết thứ tự token nếu thiếu thông tin vị trí, nên cần positional encoding hoặc cơ chế vị trí tương ứng. Encoder có thể dùng ngữ cảnh hai chiều, decoder tự hồi quy dùng causal mask để không thấy token tương lai, còn encoder–decoder thêm cross-attention tới biểu diễn đầu vào. Mỗi khối còn có mạng feed-forward theo vị trí, residual và normalization. Khi huấn luyện nhiều vị trí có thể tính song song, nhưng sinh tự hồi quy vẫn phải tạo token nối tiếp; không được đồng nhất song song hóa huấn luyện với sinh toàn chuỗi một bước."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§11.6 Self-Attention and Positional Encoding; §11.7 The Transformer Architecture",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "dl-resource-evaluation-limits",
          "title": "Chi phí tài nguyên và đánh giá mạng sâu",
          "level": "core",
          "paragraphs": [
            "Attention đầy đủ trên chuỗi dài L tạo số tương tác O(L²) cho mỗi head, còn chi phí toàn mô hình còn phụ thuộc chiều ẩn, số lớp, batch và cách triển khai. Bộ nhớ huấn luyện chứa tham số, trạng thái bộ tối ưu và activation cần cho gradient; giảm batch hoặc checkpoint activation tạo các đánh đổi khác nhau. Đánh giá cần tách chất lượng, độ trễ, thông lượng và bộ nhớ trên cấu hình cụ thể. Một chương Transformer chỉ cung cấp cơ chế chung; dữ liệu, metric và lỗi đặc thù CV hoặc NLP cần được học trong nhánh ứng dụng tương ứng."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§11.6 Self-Attention and Positional Encoding: Computational Complexity; Ch. 13 Computational Performance",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Biểu diễn chuỗi, Không gian nhúng (Embeddings), Cơ chế Attention và Kiến trúc Transformer"
    }
  ]
};
