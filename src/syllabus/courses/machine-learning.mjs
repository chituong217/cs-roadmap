export const COURSE_MACHINE_LEARNING = {
  "id": "machine-learning",
  "code": "CS-36",
  "title": "Machine learning",
  "blockId": "block-6",
  "level": "core",
  "prerequisites": [
    {
      "courseId": "linear-algebra",
      "type": "required",
      "reason": "Cần không gian vector, phép chiếu bình phương tối thiểu, trị riêng và phân rã SVD cho hồi quy và PCA."
    },
    {
      "courseId": "multivariable-calculus-optimization",
      "type": "required",
      "reason": "Cần gradient, ma trận Hessian, tính lồi và thuật toán hạ gradient (gradient descent)."
    },
    {
      "courseId": "statistics-inference",
      "type": "required",
      "reason": "Cần ước lượng hợp lý cực đại (MLE), suy luận Bayes, phương sai mẫu và đánh đổi bias–variance."
    }
  ],
  "overview": [
    "Học máy xây dựng quy luật dự đoán hoặc biểu diễn từ dữ liệu và đánh giá khả năng dùng quy luật ấy trên những trường hợp chưa thấy. Môn học nối trực tiếp đại số tuyến tính, tối ưu và suy luận thống kê với việc chọn hàm mục tiêu, biểu diễn đặc trưng, huấn luyện và kiểm tra tổng quát hóa. Các họ mô hình được phát triển từ hồi quy và phân lớp tuyến tính đến cây, tập hợp mô hình, kernel, phân cụm và giảm chiều. Mỗi họ có cơ chế, giả thiết và tình huống thất bại riêng; một mô hình phức tạp hơn không mặc nhiên là lựa chọn tốt hơn. Phân chia dữ liệu, pipeline tiền xử lý, lựa chọn siêu tham số và metric là phần cốt lõi của kiến thức, vì sai ở những bước này có thể tạo kết quả đẹp mà không có giá trị triển khai. Môn học còn phân biệt xác suất dự báo, ngưỡng hành động và suy luận nhân quả, chuẩn bị cho học sâu mà không thu hẹp học máy thành việc gọi thư viện."
  ],
  "boundaries": [
    "Không dạy học máy như việc gọi hàm `.fit()` và `.predict()` mù quáng; mỗi mô hình đều phải gắn với hàm mục tiêu toán học, giả định về phân phối dữ liệu và kịch bản mô hình thất bại.",
    "Các ví dụ thư viện minh họa mô hình và quy trình; định nghĩa không phụ thuộc một phiên bản API. Kết quả dự báo không tự là bằng chứng nhân quả."
  ],
  "sources": [
    {
      "sourceId": "sklearn-user-guide",
      "locator": "Linear Models; Naive Bayes; SVM; Decision Trees; Ensembles; Mixtures; Clustering; PCA; Cross-validation; Metrics; Common pitfalls",
      "relationship": "primary"
    },
    {
      "sourceId": "d2l-ai",
      "locator": "§3.1, §3.6–3.7, §4.1, §4.7, §12.4–12.5",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "ml-formulation-generalization-leakage",
      "overview": [
        "Học từ dữ liệu là ước lượng một quy luật để dùng trên những trường hợp chưa được quan sát, nên điểm số trên tập đã học chưa trả lời câu hỏi hệ thống có ích hay không. Chương này mô hình hóa đầu vào, nhãn, hàm mất mát và phân phối triển khai trước khi chọn thuật toán. Tách dữ liệu và quy trình tiền xử lý được xem là một phần của phương pháp suy luận. Những giả thiết về độc lập, thời gian và nhóm người dùng quyết định cách chia tập có hợp lệ hay không."
      ],
      "sources": [
        {
          "sourceId": "d2l-ai",
          "locator": "§3.6 Generalization; §4.7 Environment and Distribution Shift",
          "relationship": "primary"
        },
        {
          "sourceId": "sklearn-user-guide",
          "locator": "Cross-validation; Common pitfalls: Data leakage",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ml-risk-erm-generalization",
          "title": "Không gian giả thuyết và rủi ro thực nghiệm",
          "level": "core",
          "paragraphs": [
            "Không gian giả thuyết là họ hàm dự đoán được phép lựa chọn; hàm mất mát đo mức sai của một dự đoán so với nhãn. Rủi ro kỳ vọng lấy trung bình mất mát trên phân phối cần phục vụ, còn rủi ro thực nghiệm lấy trung bình trên mẫu huấn luyện. ERM chọn hàm làm nhỏ rủi ro thực nghiệm trong họ đã chọn, nhưng cần kiểm soát độ phức tạp và lượng dữ liệu để tổng quát hóa. Nhãn, đặc trưng và mục tiêu phải phù hợp thời điểm dự đoán; một biến chỉ xuất hiện sau kết quả không phải tín hiệu triển khai hợp lệ."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§3.6 Generalization",
              "relationship": "primary"
            },
            {
              "sourceId": "sklearn-user-guide",
              "locator": "Common pitfalls §Data leakage",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ml-bias-variance-learning-curves",
          "title": "Quá khớp, dưới khớp và bias–variance",
          "level": "core",
          "paragraphs": [
            "Dưới khớp xảy ra khi mô hình hoặc quy trình tối ưu chưa nắm được cấu trúc cần thiết, còn quá khớp thể hiện qua việc bám nhiễu hoặc chi tiết riêng của mẫu huấn luyện. Trong phân rã bình phương sai số với các giả thiết thích hợp, bias phản ánh lệch có hệ thống của bộ ước lượng và variance phản ánh thay đổi theo mẫu huấn luyện. Đường học và khoảng cách train–validation cung cấp bằng chứng chẩn đoán, không tự chứng minh một nguyên nhân duy nhất. Tăng độ phức tạp hoặc dữ liệu có tác dụng khác nhau tùy nguồn sai số."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§3.6 Generalization; §5.5 Generalization in Deep Learning",
              "relationship": "primary"
            },
            {
              "sourceId": "sklearn-user-guide",
              "locator": "Validation curves: plotting scores to evaluate models",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ml-splits-pipelines-leakage",
          "title": "Tách tập, kiểm định chéo và pipeline",
          "level": "core",
          "paragraphs": [
            "Train dùng ước lượng tham số, validation dùng lựa chọn mô hình hoặc ngưỡng, còn test được giữ cho đánh giá cuối sau khi quyết định đã cố định. Chuẩn hóa, điền khuyết và chọn đặc trưng đều phải được fit chỉ trên phần train của từng fold, rồi áp dụng lên phần còn lại. Mẫu cùng người, cùng thiết bị hoặc theo thời gian không nên chia ngẫu nhiên như những điểm độc lập nếu mục tiêu là dự đoán người hoặc tương lai mới. Nested cross-validation giúp tách lựa chọn siêu tham số khỏi ước lượng hiệu năng khi cần."
          ],
          "sources": [
            {
              "sourceId": "sklearn-user-guide",
              "locator": "Cross-validation: evaluating estimator performance; Common pitfalls §12.2 Data leakage; Pipelines and composite estimators",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Bản chất bài toán Học máy, Tổng quát hóa, Đánh đổi Bias–Variance và Chống rò rỉ dữ liệu"
    },
    {
      "id": "ml-linear-models-regularization",
      "overview": [
        "Mô hình tuyến tính cho phép nhìn rõ quan hệ giữa biểu diễn đặc trưng, hàm mục tiêu, giả thiết nhiễu và cách tối ưu. Chương này bắt đầu với hồi quy bình phương tối thiểu, sau đó thêm chính quy hóa để kiểm soát độ nhạy và phát triển phân lớp xác suất. Naive Bayes cung cấp một cách tiếp cận sinh khác với mô hình phân biệt logistic. Các công thức được nối với điều kiện dữ liệu, đơn vị đặc trưng và cách đánh giá xác suất, tránh coi mọi hệ số lớn là một tác động nhân quả."
      ],
      "sources": [
        {
          "sourceId": "sklearn-user-guide",
          "locator": "§1.1 Linear Models; §1.5 Stochastic Gradient Descent; §1.9 Naive Bayes",
          "relationship": "primary"
        },
        {
          "sourceId": "d2l-ai",
          "locator": "§3.1 Linear Regression; §3.7 Weight Decay; §4.1 Softmax Regression",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ml-least-squares-gaussian",
          "title": "Bình phương tối thiểu và mô hình nhiễu",
          "level": "core",
          "paragraphs": [
            "Hồi quy tuyến tính giả định dự đoán có dạng wᵀx+b trên các đặc trưng đã biểu diễn, không yêu cầu đặc trưng gốc chỉ xuất hiện bậc một. Cực tiểu tổng bình phương phần dư tương ứng MLE khi nhiễu độc lập Gaussian có cùng phương sai trong mô hình điều kiện. Nghiệm có thể không duy nhất khi ma trận thiết kế thiếu hạng; QR hoặc SVD thường phù hợp hơn việc tính nghịch đảo phương trình chuẩn trực tiếp. Phân tích phần dư giúp kiểm giả thiết, còn hệ số hồi quy chỉ là liên hệ điều kiện trong mô hình nếu thiếu thiết kế nhân quả."
          ],
          "sources": [
            {
              "sourceId": "sklearn-user-guide",
              "locator": "Linear Models: Ordinary Least Squares",
              "relationship": "primary"
            },
            {
              "sourceId": "d2l-ai",
              "locator": "§3.1 Linear Regression: Maximum Likelihood Estimation",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ml-ridge-lasso-scaling",
          "title": "Ridge, Lasso và thang đo đặc trưng",
          "level": "core",
          "paragraphs": [
            "Ridge thêm λ||w||² để phạt hệ số lớn, thường làm nghiệm ổn định hơn khi đặc trưng tương quan. Lasso thêm λ||w||₁ có thể tạo hệ số bằng không, nhưng lựa chọn biến có thể không ổn định khi nhiều đặc trưng gần tương đương. Độ mạnh chính quy hóa phải được chọn bằng dữ liệu thẩm định và tính nhất quán đơn vị, vì thay thang đo đặc trưng thay ý nghĩa hình phạt. Bias thường tăng khi co hệ số, trong khi variance có thể giảm; không có giá trị λ tốt nhất cho mọi phân phối."
          ],
          "sources": [
            {
              "sourceId": "sklearn-user-guide",
              "locator": "Linear Models: Ridge regression; Lasso",
              "relationship": "primary"
            },
            {
              "sourceId": "d2l-ai",
              "locator": "§3.7 Weight Decay",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ml-logistic-naive-bayes",
          "title": "Logistic, cross-entropy và Naive Bayes",
          "level": "core",
          "paragraphs": [
            "Logistic biến điểm tuyến tính thành xác suất nhị phân qua sigmoid và tối ưu log-likelihood, tương đương giảm binary cross-entropy. Ngưỡng chuyển xác suất thành nhãn là quyết định riêng theo chi phí sai, không bắt buộc luôn bằng một nửa. Naive Bayes dùng Bayes cùng giả thiết các đặc trưng độc lập có điều kiện theo lớp; giả thiết mạnh này có thể sai nhưng mô hình vẫn hữu ích trên một số tác vụ. Xác suất dự đoán cần kiểm calibration, vì phân loại đúng nhiều chưa bảo đảm mức tin cậy được ước lượng đúng."
          ],
          "sources": [
            {
              "sourceId": "sklearn-user-guide",
              "locator": "Linear Models: Logistic regression; §1.9 Naive Bayes; §1.16 Probability calibration",
              "relationship": "primary"
            },
            {
              "sourceId": "d2l-ai",
              "locator": "§4.1 Softmax Regression",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ml-stochastic-optimization",
          "title": "Gradient ngẫu nhiên và mục tiêu tối ưu",
          "level": "core",
          "paragraphs": [
            "Gradient của một minibatch ước lượng gradient của mất mát trung bình, nên bước cập nhật có nhiễu nhưng chi phí nhỏ hơn quét toàn bộ dữ liệu. Kích thước batch, tốc độ học, chuẩn hóa và số lượt dữ liệu ảnh hưởng hội tụ. Với mục tiêu lồi, nghiệm tối ưu của mục tiêu và hiệu năng trên phân phối triển khai vẫn là hai câu hỏi khác nhau. Chọn số bước bằng validation có thể đóng vai trò chính quy hóa; dùng test để dừng sớm sẽ rò rỉ thông tin. Dữ liệu thưa và ngoại lai còn tác động cách tính mất mát và cập nhật."
          ],
          "sources": [
            {
              "sourceId": "sklearn-user-guide",
              "locator": "§1.5 Stochastic Gradient Descent",
              "relationship": "primary"
            },
            {
              "sourceId": "d2l-ai",
              "locator": "§12.4 Stochastic Gradient Descent; §12.5 Minibatch Stochastic Gradient Descent",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Mô hình tuyến tính cho Hồi quy và Phân lớp, Hàm mất mát và Chính quy hóa (L1/L2)"
    },
    {
      "id": "ml-trees-ensembles-kernels",
      "overview": [
        "Các mô hình phi tuyến khác nhau đưa vào những thiên kiến khác nhau về cấu trúc dữ liệu. Cây chia không gian thành vùng, tập hợp cây kết hợp các bộ dự đoán và kernel định nghĩa phép so sánh trong một không gian đặc trưng có thể rất lớn. Chương này tập trung mục tiêu và cơ chế của từng họ trước khi xét siêu tham số. Không gắn cứng bagging chỉ với giảm phương sai hoặc boosting chỉ với giảm độ lệch như các định nghĩa tuyệt đối; đó là những tác dụng thường được quan sát trong những điều kiện phù hợp."
      ],
      "sources": [
        {
          "sourceId": "sklearn-user-guide",
          "locator": "§1.10 Decision Trees; §1.11 Ensembles; §1.4 Support Vector Machines",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ml-tree-splitting-pruning",
          "title": "Chia nhánh, độ thuần và cắt tỉa cây",
          "level": "core",
          "paragraphs": [
            "Cây quyết định chọn đặc trưng và ngưỡng để chia mẫu thành các vùng có nhãn thuần hơn hoặc giá trị đích ít phân tán hơn. Gini và entropy đo độ lẫn lớp theo những cách khác nhau, còn hồi quy thường dùng giảm bình phương sai số. Chọn chia tốt nhất tại mỗi nút là chiến lược cục bộ, không bảo đảm cây toàn cục tối ưu. Giới hạn độ sâu, số mẫu lá và cắt tỉa kiểm soát quá khớp. Các ngưỡng theo trục có thể cần nhiều nút để xấp xỉ một ranh giới xiên đơn giản."
          ],
          "sources": [
            {
              "sourceId": "sklearn-user-guide",
              "locator": "Decision Trees: Mathematical formulation; Minimal Cost-Complexity Pruning",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ml-bagging-forest-boosting",
          "title": "Bagging, random forest và boosting",
          "level": "core",
          "paragraphs": [
            "Bagging huấn luyện nhiều mô hình trên các mẫu bootstrap rồi lấy trung bình hoặc bỏ phiếu, thường giúp giảm variance nếu sai số các thành viên không quá tương quan. Random forest thêm ngẫu nhiên ở tập đặc trưng xét khi chia để giảm tương quan giữa cây. Gradient boosting xây mô hình cộng dồn bằng cách thêm bộ học phù hợp với hướng giảm mất mát hiện tại, thường dùng gradient âm như mục tiêu. Tốc độ học, số cây và độ sâu phối hợp kiểm soát khả năng khớp; thêm nhiều cây không tự luôn cải thiện tổng quát hóa."
          ],
          "sources": [
            {
              "sourceId": "sklearn-user-guide",
              "locator": "Ensembles: Bagging meta-estimator; Random forests; Gradient-boosted trees",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ml-svm-margin-kernel",
          "title": "Lề cực đại và kernel trong SVM",
          "level": "core",
          "paragraphs": [
            "SVM tìm ranh giới có lề lớn và dùng biến nới lỏng cùng tham số phạt để xử lý dữ liệu không phân tách tuyến tính. Kernel hợp lệ biểu diễn tích vô hướng trong một không gian đặc trưng, cho phép mô hình phi tuyến mà không cần liệt kê mọi chiều của phép ánh xạ. Thang đo đầu vào và tham số như C hoặc độ rộng RBF ảnh hưởng mạnh ranh giới. SVM không tự trả xác suất được calibration; bước ước lượng xác suất là cơ chế bổ sung cần đánh giá riêng."
          ],
          "sources": [
            {
              "sourceId": "sklearn-user-guide",
              "locator": "Support Vector Machines: Kernel functions; Mathematical formulation",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Cây quyết định, Học tập hợp (Random Forest, Gradient Boosting) và Phương pháp Hạt nhân"
    },
    {
      "id": "ml-unsupervised-pca-evaluation",
      "overview": [
        "Không có nhãn không có nghĩa là không có giả thiết hoặc không cần đánh giá. Chương này phân biệt phân cụm theo khoảng cách, mô hình phân phối hỗn hợp và chiếu tuyến tính giảm chiều, rồi quay về cách đo hiệu năng phù hợp tác vụ. Cùng một tập dữ liệu có thể tạo các cụm khác nhau theo chuẩn hóa và metric. Đánh giá phân lớp tách xếp hạng, ngưỡng quyết định và calibration, đồng thời cần xem phân bố lỗi trên các nhóm hoặc thời kỳ thay vì chỉ báo một số trung bình."
      ],
      "sources": [
        {
          "sourceId": "sklearn-user-guide",
          "locator": "§2.1 Gaussian mixture models; §2.3 Clustering; §2.5 Decomposition; §3.4 Metrics; §1.16 Probability calibration",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ml-kmeans-gmm-em",
          "title": "K-means và hỗn hợp Gaussian",
          "level": "core",
          "paragraphs": [
            "K-means luân phiên gán điểm vào tâm gần nhất và cập nhật tâm để giảm tổng bình phương khoảng cách Euclid trong cụm. Thuật toán có thể dừng ở tối ưu cục bộ, nhạy khởi tạo, tỷ lệ đặc trưng và cụm có hình dạng không gần cầu. Gaussian mixture mô tả phân phối bằng tổng có trọng số các Gaussian; EM luân phiên tính trách nhiệm mềm và cập nhật tham số. Likelihood có thể tăng nhưng không bảo đảm đạt tối ưu toàn cục; covariance suy biến cần xử lý để tránh những nghiệm không có ý nghĩa."
          ],
          "sources": [
            {
              "sourceId": "sklearn-user-guide",
              "locator": "Clustering: K-means; Gaussian mixture models: Expectation-maximization",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ml-pca-svd-standardization",
          "title": "PCA qua SVD và giới hạn diễn giải",
          "level": "core",
          "paragraphs": [
            "Sau khi trừ trung bình, PCA tìm các hướng trực giao giữ phương sai lớn nhất hoặc tối thiểu sai số tái tạo bình phương cho một hạng cho trước. Các vector kỳ dị phải của ma trận dữ liệu cho các hướng chính; singular values liên hệ với phương sai giải thích. Chuẩn hóa từng đặc trưng làm đổi câu hỏi tối ưu nên phải dựa vào đơn vị và mục tiêu. Phương sai lớn không tự là thông tin dự đoán tốt nhất, và bỏ chiều có phương sai nhỏ có thể làm mất tín hiệu nhãn quan trọng."
          ],
          "sources": [
            {
              "sourceId": "sklearn-user-guide",
              "locator": "Decomposing signals in components: Principal component analysis (PCA)",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ml-metrics-thresholds-calibration",
          "title": "Thước đo, ngưỡng và phân tích sai số",
          "level": "core",
          "paragraphs": [
            "Precision đo tỷ lệ dự đoán dương đúng, recall đo tỷ lệ dương thật được tìm thấy, còn F1 là trung bình điều hòa của hai tỷ lệ. ROC và PR xem hành vi qua nhiều ngưỡng; trên dữ liệu dương hiếm, PR thường làm rõ gánh nặng dương giả hơn, nhưng lựa chọn cuối còn theo chi phí ứng dụng. Average precision và diện tích nội suy đường PR không phải mọi lúc cùng một cách tính. Calibration kiểm xác suất dự báo so với tần suất thực, tách khỏi khả năng xếp hạng. Báo cáo cần giữ tập test độc lập và độ bất định của ước lượng."
          ],
          "sources": [
            {
              "sourceId": "sklearn-user-guide",
              "locator": "Metrics and scoring: Classification metrics; Precision-recall; ROC; Probability calibration",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Học không giám sát (K-Means, PCA) và Đánh giá mô hình nghiêm ngặt"
    }
  ]
};
