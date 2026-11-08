export const COURSE_SPEC_COMPUTER_VISION = {
  "id": "spec-computer-vision",
  "code": "CS-47",
  "title": "Chuyên sâu Thị giác máy tính (Computer Vision)",
  "blockId": "block-7",
  "level": "specialization",
  "prerequisites": [
    {
      "courseId": "deep-learning-modern-models",
      "type": "required",
      "reason": "Cần nắm vững mạng tích chập (CNN), ResNet, Attention/Transformer và quy trình huấn luyện mạng sâu."
    },
    {
      "courseId": "linear-algebra",
      "type": "required",
      "reason": "Cần phép biến đổi chiếu, SVD và giải hệ phương trình bình phương tối thiểu cho hình học thị giác."
    }
  ],
  "overview": [
    "Thị giác máy tính tìm thông tin hình học và ngữ nghĩa từ ảnh hoặc video, những tín hiệu vốn đã bị chiếu, lấy mẫu và nhiễu bởi hệ camera. Nhánh này giữ cả nền lọc ảnh, đặc trưng, ghép hình và nhiều góc nhìn để hiểu dữ liệu trước khi dùng các mô hình học sâu. Các bài toán detection và segmentation được phát triển từ dạng nhãn và thước đo, nối tới CNN, U-Net, Mask R-CNN và ViT như những cách tạo biểu diễn và đầu ra phù hợp. Mỗi thuật toán được gắn với giả thiết về mặt phẳng, camera, tính trơn hoặc phân phối dữ liệu để giải thích lúc nào kết quả có thể sai. Phần đánh giá xét protocol AP/mAP, rò rỉ giữa các khung video, đổi miền và chi phí suy luận. Đây là hướng chuyên sâu có nền thực nghiệm và hình học, chưa bao quát toàn bộ SLAM, nhận dạng hành động hay tái dựng neural; cơ chế và bằng chứng phải được học trước khi coi một mô hình có sẵn là giải pháp tổng quát."
  ],
  "boundaries": [
    "Nhánh chuyên sâu tự chọn; giữ cả nền tảng hình học/xử lý ảnh lẫn học sâu để người học không bị bế tắc khi bài toán cần hiệu chỉnh camera hay ước lượng tọa độ không gian.",
    "Szeliski 2010 dùng cho nền hình học/xử lý ảnh; D2L và bài U-Net dùng cho kiến trúc học sâu. Các số AP/mAP chỉ so khi cùng protocol và tập dữ liệu."
  ],
  "sources": [
    {
      "sourceId": "szeliski-cv",
      "locator": "1st edition 2010: Ch. 2–4, 6–7, 11, 14",
      "relationship": "primary"
    },
    {
      "sourceId": "d2l-ai",
      "locator": "§11.8; Ch. 13–14; §4.7",
      "relationship": "primary"
    },
    {
      "sourceId": "unet-2015",
      "locator": "U-Net, MICCAI 2015, §2–3",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "scv-image-filtering-features-geometry",
      "overview": [
        "Ảnh vừa là một tín hiệu lấy mẫu vừa là kết quả chiếu một thế giới ba chiều qua camera. Chương này nối hai góc nhìn để hiểu lọc, biên, đặc trưng và các quan hệ hình học giữa nhiều ảnh. Các kỹ thuật cổ điển cung cấp những phép đo và ràng buộc rõ để kết hợp với mô hình học được. Tính trơn, biến đổi độ sáng, điểm ngoại lai và cấu hình hình học suy biến được xem là điều kiện của thuật toán, tránh coi mọi cặp ảnh đều có thể ghép bằng một biến đổi phẳng duy nhất."
      ],
      "sources": [
        {
          "sourceId": "szeliski-cv",
          "locator": "1st ed. Ch. 2 Image Formation; Ch. 3 Image Processing; Ch. 4 Features; Ch. 6 Alignment; Ch. 7 Structure from Motion; Ch. 11 Stereo",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "scv-filtering-edges-scale",
          "title": "Lọc ảnh, gradient và phát hiện biên",
          "level": "specialization",
          "paragraphs": [
            "Tích chập rời rạc kết hợp lân cận pixel bằng một kernel, với quy ước biên và phép lật kernel cần nêu rõ. Gaussian làm trơn giảm thành phần tần số cao trước lấy mẫu hoặc đạo hàm; Sobel xấp xỉ gradient theo hai hướng để đo biến thiên cường độ. Canny phối hợp làm trơn, gradient, làm mảnh cực đại và ngưỡng có liên kết để lấy đường biên. Biên cường độ không luôn là ranh giới vật thể vì bóng, texture và phản xạ cũng tạo biến thiên; thang lọc quyết định chi tiết nào được xem quan trọng."
          ],
          "sources": [
            {
              "sourceId": "szeliski-cv",
              "locator": "Ch. 3 Image Processing: linear filtering; Ch. 4: edges",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scv-local-features-matching",
          "title": "Điểm đặc trưng và mô tả cục bộ",
          "level": "specialization",
          "paragraphs": [
            "Điểm đặc trưng cần được phát hiện lặp lại qua các góc nhìn, còn descriptor tóm tắt vùng lân cận để so sánh. Các phương pháp như Harris hoặc SIFT dựa trên những tiêu chí khác nhau; chọn thang và hướng giúp giảm nhạy với một số biến đổi nhưng không tạo bất biến với mọi ánh sáng hoặc góc nhìn. Ghép gần nhất theo khoảng cách descriptor vẫn có thể sai, nhất là mẫu lặp; so tỷ lệ hai láng giềng và kiểm hình học giảm các ghép mơ hồ. Chất lượng ghép cần được đo theo bài toán, không chỉ đếm nhiều điểm hơn."
          ],
          "sources": [
            {
              "sourceId": "szeliski-cv",
              "locator": "Ch. 4 Feature Detection and Matching: points; descriptors; matching",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scv-homography-ransac",
          "title": "Homography và ước lượng chống ngoại lai",
          "level": "specialization",
          "paragraphs": [
            "Homography biểu diễn ánh xạ phối cảnh giữa các điểm trên cùng một mặt phẳng, hoặc các trường hợp camera phù hợp như quay quanh tâm quang học trong mô hình lý tưởng. Nó không mô tả đầy đủ cảnh có độ sâu khác nhau dưới tịnh tiến camera. DLT tìm ma trận tới một hệ số với chuẩn hóa tọa độ để cải thiện điều kiện. RANSAC thử các mẫu nhỏ, ước lượng mô hình rồi đếm inlier theo ngưỡng residual, sau đó tinh chỉnh; cần đủ inlier và mẫu không suy biến. Ngưỡng phải gắn đơn vị và nhiễu đo, không có bảo đảm chỉ từ nhiều vòng lặp."
          ],
          "sources": [
            {
              "sourceId": "szeliski-cv",
              "locator": "§6.1 2D and 3D feature-based alignment; §6.1.4 Robust least squares and RANSAC",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scv-epipolar-stereo-depth",
          "title": "Epipolar, hiệu chỉnh camera và độ sâu",
          "level": "specialization",
          "paragraphs": [
            "Một điểm trong ảnh đầu ràng buộc điểm tương ứng ở ảnh sau nằm trên đường epipolar theo mô hình hai camera. Ma trận fundamental làm việc với tọa độ ảnh chưa chuẩn hóa theo nội tại, còn essential dùng camera đã hiệu chỉnh trong mô hình phù hợp. Triangulation tìm vị trí ba chiều từ các tia quan sát nhưng nhạy khi baseline nhỏ hoặc góc giao yếu. Stereo sau rectification thu hẹp tìm kiếm tương ứng theo hàng; chênh lệch ảnh liên hệ nghịch với độ sâu trong cấu hình chuẩn. Che khuất, vùng ít texture và mặt phản gương làm giả thiết ghép điểm khó thỏa."
          ],
          "sources": [
            {
              "sourceId": "szeliski-cv",
              "locator": "Ch. 2: camera models; Ch. 7: epipolar geometry and triangulation; Ch. 11 Stereo Correspondence",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Lọc ảnh, Phát hiện biên/đặc trưng và Hình học nhiều góc nhìn (Multi-View Geometry)"
    },
    {
      "id": "scv-detection-segmentation-vit",
      "overview": [
        "Các bài toán hiểu ảnh yêu cầu đầu ra khác nhau: nhãn toàn ảnh, hộp vật thể, lớp từng pixel hoặc từng thực thể riêng. Chương này giữ rõ sự khác biệt ấy khi xây mô hình phát hiện, phân đoạn và Transformer thị giác. Kiến trúc cần phối hợp biểu diễn nhiều thang với định vị không gian, còn hàm mất mát và cách hậu xử lý phải khớp dạng nhãn. Tên một backbone mạnh không tự quyết định toàn hệ thống; cách gán mẫu, mask và protocol đầu ra vẫn là phần cốt lõi."
      ],
      "sources": [
        {
          "sourceId": "d2l-ai",
          "locator": "§14.3–14.11 Detection and Segmentation; §11.8 Transformers for Vision",
          "relationship": "primary"
        },
        {
          "sourceId": "unet-2015",
          "locator": "§2 Network Architecture",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "scv-boxes-iou-nms",
          "title": "Hộp bao, IoU và loại dự đoán trùng",
          "level": "specialization",
          "paragraphs": [
            "Hộp bao có thể lưu góc hoặc tâm cùng kích thước, dùng tọa độ tuyệt đối hay chuẩn hóa; đổi hệ phải nhất quán với crop và resize. IoU là diện tích giao chia diện tích hợp, đo mức trùng hình học nhưng không xác nhận lớp. NMS giữ một dự đoán điểm cao rồi loại các dự đoán cùng lớp trùng quá ngưỡng theo quy tắc đã chọn. Các vật gần hoặc che nhau có thể bị loại nhầm; threshold và hậu xử lý ảnh hưởng precision–recall. Hộp suy biến hoặc tọa độ ngoài ảnh cần xử lý rõ trước tính diện tích."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§14.3 Object Detection and Bounding Boxes; §14.4 Anchor Boxes: Non-Maximum Suppression",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scv-one-two-stage-multiscale",
          "title": "Phát hiện một và hai giai đoạn",
          "level": "specialization",
          "paragraphs": [
            "Detector hai giai đoạn đề xuất vùng rồi phân lớp và tinh chỉnh hộp, còn nhiều detector một giai đoạn dự đoán trực tiếp trên các vị trí của bản đồ đặc trưng. Anchor là một cách mã hóa các hộp tham chiếu, không phải điều kiện bắt buộc của mọi detector hiện đại. Đặc trưng nhiều thang hỗ trợ vật có kích thước khác nhau, nhưng vật rất nhỏ vẫn nhạy độ phân giải và gán mẫu. Mất mát định vị khác mất mát lớp và có thể cần cân bằng foreground–background; lựa chọn kiến trúc phải xét cả chất lượng lẫn độ trễ và bộ nhớ."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§14.4 Anchor Boxes; §14.5 Multiscale Detection; §14.7 SSD; §14.8 Region-based CNNs",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scv-semantic-instance-unet",
          "title": "Phân đoạn ngữ nghĩa, thực thể và U-Net",
          "level": "specialization",
          "paragraphs": [
            "Semantic segmentation gán lớp mỗi pixel, còn instance segmentation còn phân biệt các vật cùng lớp thành thực thể khác nhau. FCN tạo dự đoán không gian từ đặc trưng, thường cần upsampling để đưa về độ phân giải phù hợp. U-Net kết hợp đường co để thu ngữ cảnh với đường mở và liên kết đặc trưng cùng thang để phục hồi vị trí; mask và ảnh phải đi qua cùng biến đổi hình học. Mask R-CNN mở rộng detector vùng với nhánh mask cho từng thực thể. Mất cân bằng diện tích lớp làm accuracy pixel dễ gây hiểu nhầm, nên cần metric theo lớp và biên phù hợp."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§14.8 Region-based CNNs: Mask R-CNN; §14.9 Semantic Segmentation; §14.11 FCN",
              "relationship": "primary"
            },
            {
              "sourceId": "unet-2015",
              "locator": "§2 Network Architecture; §3 Training",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scv-vision-transformer-patches",
          "title": "Patch embeddings và Transformer thị giác",
          "level": "specialization",
          "paragraphs": [
            "ViT chia ảnh thành các patch, ánh xạ mỗi patch thành vector rồi thêm thông tin vị trí trước các khối Transformer. Self-attention cho tương tác theo nội dung giữa các vùng, nhưng token hóa patch đã xác định mức hạt không gian và không tự giữ mọi chi tiết pixel. So với CNN, thiên kiến cục bộ và chia sẻ tham số khác nên nhu cầu dữ liệu, tiền huấn luyện và regularization cần được xét. Fine-tuning cho định vị hoặc phân đoạn thường cần đầu ra giữ cấu trúc không gian, không thể chỉ lấy token phân lớp rồi gọi đó là đầy đủ cho mọi tác vụ."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§11.8 Transformers for Vision; §14.2 Fine-Tuning",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Phát hiện vật thể (Object Detection), Phân đoạn ảnh (Segmentation) và Vision Transformer"
    },
    {
      "id": "scv-evaluation-robustness-deployment",
      "overview": [
        "Một hệ thị giác cần được đánh giá theo dạng đầu ra và miền sử dụng, không chỉ một bộ ảnh thuận lợi. Chương này nối cách ghép dự đoán với nhãn, định nghĩa metric và chia dữ liệu với các lỗi thường gặp khi triển khai. Các ảnh gần trùng từ cùng video có thể làm phép chia ngẫu nhiên lạc quan; biến đổi ánh sáng hoặc camera có thể đổi phân phối mạnh. Ngân sách thời gian và bộ nhớ được đo cùng độ chính xác, còn những hậu quả của lỗi quyết định ngưỡng chấp nhận cho ứng dụng cụ thể."
      ],
      "sources": [
        {
          "sourceId": "d2l-ai",
          "locator": "§14.1 Image Augmentation; §14.3–14.11 evaluation context; §4.7 Distribution Shift",
          "relationship": "primary"
        },
        {
          "sourceId": "szeliski-cv",
          "locator": "Ch. 14 Recognition: evaluation and datasets",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "scv-map-protocols",
          "title": "Precision–recall, AP và mAP theo protocol",
          "level": "specialization",
          "paragraphs": [
            "Đánh giá detection trước hết cần quy tắc ghép dự đoán với ground truth theo lớp, IoU và việc mỗi vật thật được ghép bao nhiêu lần. Sắp điểm tin cậy tạo đường precision–recall; AP tổng hợp theo một quy tắc nội suy hoặc tích phân đã xác định, còn mAP lấy trung bình theo lớp và có thể thêm ngưỡng IoU. Vì các benchmark dùng protocol khác, hai số mAP không so trực tiếp nếu khác miền đánh giá. Với segmentation, IoU theo lớp và Dice trả lời câu hỏi khác accuracy pixel, đặc biệt khi nền chiếm diện tích lớn."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§14.3 Object Detection; §14.9 Semantic Segmentation; §14.11 Fully Convolutional Networks",
              "relationship": "primary"
            },
            {
              "sourceId": "szeliski-cv",
              "locator": "Recognition chapter: evaluation",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scv-domain-shift-data-splits",
          "title": "Đổi miền, augmentation và chống rò rỉ",
          "level": "specialization",
          "paragraphs": [
            "Chia train/test theo camera, đối tượng, bệnh nhân hoặc phiên quay có thể cần thiết để đo khả năng tổng quát thực, thay vì để các khung gần giống nhau ở hai phía. Augmentation phải giữ hoặc biến đổi nhãn đúng: crop đổi hộp, lật ảnh đổi mask, còn lật một ký tự có thể đổi nghĩa lớp. Ánh sáng, thời tiết, cảm biến và phong cách gán nhãn gây domain shift; thành công trên benchmark không bảo đảm giữ hiệu năng ở miền mới. Phân tích lỗi theo nhóm điều kiện giúp tìm thiếu hụt dữ liệu và giới hạn cần báo."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§14.1 Image Augmentation; §4.7 Environment and Distribution Shift; §14.2 Fine-Tuning",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scv-deployment-latency-uncertainty",
          "title": "Triển khai, tốc độ và giới hạn quyết định",
          "level": "specialization",
          "paragraphs": [
            "Độ trễ toàn luồng bao gồm đọc ảnh, tiền xử lý, chuyển thiết bị, mô hình và hậu xử lý, không chỉ thời gian một kernel GPU. Batch lớn tăng thông lượng nhưng có thể tăng thời gian chờ của từng yêu cầu. Quantization hoặc giảm độ phân giải cần đánh giá lại từng nhóm lỗi, nhất là vật nhỏ và trường hợp hiếm. Điểm tin cậy cao không tự là xác suất được calibration hay phát hiện ngoài phân phối. Hệ dùng trong quyết định quan trọng cần tiêu chí chuyển kiểm tra người và theo dõi lỗi theo thời gian phù hợp với rủi ro ứng dụng."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "Ch. 13 Computational Performance; §14.2 Fine-Tuning; §4.7 Distribution Shift",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Đánh giá hệ thống thị giác (mAP), Độ bền vững trước biến đổi miền và Giới hạn thực tế"
    }
  ]
};
