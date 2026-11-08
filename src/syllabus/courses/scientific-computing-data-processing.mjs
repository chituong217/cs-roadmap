export const COURSE_SCIENTIFIC_COMPUTING_DATA_PROCESSING = {
  "id": "scientific-computing-data-processing",
  "code": "CS-41",
  "title": "Tính toán khoa học và xử lý dữ liệu",
  "blockId": "block-6",
  "level": "core",
  "prerequisites": [
    {
      "courseId": "linear-algebra",
      "type": "required",
      "reason": "Cần phân rã ma trận LU/QR/SVD và chuẩn vector/ma trận để phân tích hệ số điều kiện."
    },
    {
      "courseId": "single-variable-calculus",
      "type": "required",
      "reason": "Cần khai triển Taylor và phần dư để ước lượng sai số cắt cụt của các công thức xấp xỉ số."
    },
    {
      "courseId": "statistics-inference",
      "type": "required",
      "reason": "Cần thống kê mô tả, xử lý nhiễu và nguyên tắc biểu diễn dữ liệu."
    }
  ],
  "overview": [
    "Tính toán khoa học và xử lý dữ liệu kết nối mô hình toán học với những con số được tính bằng tài nguyên hữu hạn. Môn học nghiên cứu sai số, điều kiện và ổn định trước khi phát triển các phương pháp giải hệ, tìm nghiệm, nội suy, đạo hàm, tích phân và phương trình vi phân. Mỗi phương pháp được gắn với điều kiện áp dụng, cách ước lượng sai số và đánh đổi chi phí, để người học hiểu vì sao một công thức đúng trong số thực vẫn có thể cho kết quả máy thiếu tin cậy. Phần xử lý dữ liệu mở rộng khái niệm tính đúng sang lược đồ, đơn vị, dữ liệu khuyết và lịch sử biến đổi. Trực quan hóa cùng pipeline tái lập giúp trình bày bằng chứng mà người khác có thể kiểm tra. Đây là nền phương pháp cho mô phỏng và phân tích, chưa bao quát mọi phương trình vi phân riêng phần, tính toán hiệu năng cao hoặc mô hình khoa học chuyên ngành; lời giải số vẫn cần được đối chiếu với giả thiết của bài toán thật."
  ],
  "boundaries": [
    "Luôn phân biệt rõ tính toán ký hiệu chính xác (symbolic computation) với xấp xỉ số học (numerical approximation), và bắt buộc kèm đơn vị đo cùng điều kiện biên trong mọi mô hình.",
    "FNC cung cấp nội suy, sai phân, ODE và ổn định số còn ngoài phạm vi giải tích nhập môn; các bậc hội tụ được nêu cùng giả thiết tính trơn và miền ổn định."
  ],
  "sources": [
    {
      "sourceId": "fncbook",
      "locator": "Ch. 1–7, §9.3, absolute stability introduction",
      "relationship": "primary"
    },
    {
      "sourceId": "sklearn-user-guide",
      "locator": "Common pitfalls; Pipeline; Imputation",
      "relationship": "primary"
    },
    {
      "sourceId": "acm-ethics-keshav",
      "locator": "Experimental methodology and research artifacts",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "scdp-floating-point-conditioning-stability",
      "overview": [
        "Tính toán số thay các đối tượng toán học liên tục bằng biểu diễn và phép tính hữu hạn, nên kết quả gần đúng cần một ngôn ngữ đánh giá riêng. Chương này tách sai số dữ liệu, làm tròn và rời rạc hóa, rồi phân biệt độ nhạy vốn có của bài toán với sai số do thuật toán khuếch đại thêm. Những công thức tương đương trong số thực có thể rất khác trên máy. Mục tiêu là chọn cách tính và tiêu chí kiểm tra có căn cứ, thay vì tăng số chữ số hiển thị để tạo cảm giác chính xác."
      ],
      "sources": [
        {
          "sourceId": "fncbook",
          "locator": "Ch. 1: Floating-point numbers; Problems and conditioning; Stability",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "scdp-float-rounding-scale",
          "title": "Biểu diễn số, epsilon và sai số",
          "level": "core",
          "paragraphs": [
            "Số dấu chấm động lưu dấu, phần định trị và số mũ với số bit hữu hạn, nên nhiều số thực như 0.1 không có biểu diễn nhị phân hữu hạn. Epsilon máy thường chỉ khoảng cách từ một tới số biểu diễn kế tiếp; cận sai số làm tròn còn phụ thuộc quy tắc và miền số chuẩn hóa. Sai số tuyệt đối phù hợp gần không, còn sai số tương đối phản ánh tỷ lệ khi giá trị chuẩn khác không. Tràn, underflow, NaN và vô cực cần được phân biệt với một giá trị hữu hạn nhưng kém chính xác."
          ],
          "sources": [
            {
              "sourceId": "fncbook",
              "locator": "§1.1 Floating-point numbers",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scdp-cancellation-reformulation",
          "title": "Triệt tiêu số học và đổi công thức",
          "level": "core",
          "paragraphs": [
            "Trừ hai số gần bằng nhau có thể làm mất nhiều chữ số có nghĩa vì sai số đã có trong các toán hạng chiếm tỷ lệ lớn trong hiệu nhỏ. Ví dụ tính 1−cos x gần không có thể được thay bằng 2 sin²(x/2) để tránh phép trừ nhạy, trong khi vẫn cần xét sai số ở các bước khác. Tổng nhiều số cũng phụ thuộc thứ tự cộng do không kết hợp chính xác trong số máy. Cộng theo cặp hoặc bù sai số có thể cải thiện kết quả, nhưng không phục hồi thông tin đã mất từ dữ liệu đầu vào."
          ],
          "sources": [
            {
              "sourceId": "fncbook",
              "locator": "§1.3 Algorithms; §1.4 Stability — subtractive cancellation",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scdp-conditioning-backward-error",
          "title": "Điều kiện bài toán và ổn định ngược",
          "level": "core",
          "paragraphs": [
            "Hệ số điều kiện mô tả mức thay đổi tương đối của lời giải khi dữ liệu bị nhiễu nhỏ, theo chuẩn và loại nhiễu đã chọn. Bài toán điều kiện xấu có thể khuếch đại ngay sai số nhập liệu dù thuật toán tốt. Ổn định ngược hỏi kết quả tính có phải lời giải chính xác của một bài toán gần dữ liệu ban đầu hay không; sai số ngược nhỏ kết hợp điều kiện tốt thường cho sai số tiến nhỏ. Phần dư nhỏ của Ax=b là bằng chứng hữu ích nhưng không tự bảo đảm nghiệm gần khi A gần suy biến."
          ],
          "sources": [
            {
              "sourceId": "fncbook",
              "locator": "§1.2 Problems and conditioning; §1.4 Stability; Ch. 2 conditioning of linear systems",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Sai số dấu chấm động, Triệt tiêu số học, Hệ số điều kiện và Tính ổn định thuật toán"
    },
    {
      "id": "scdp-numerical-linear-nonlinear-ode",
      "overview": [
        "Các phương pháp số được tổ chức theo đối tượng toán học cần xấp xỉ: hệ tuyến tính, nghiệm phi tuyến, hàm từ mẫu, tích phân và diễn tiến theo thời gian. Chương này nối lựa chọn phương pháp với tính trơn, điều kiện, miền hội tụ và chi phí. Cận sai số cắt cụt không được dùng như sai số tổng khi làm tròn hoặc nhiễu dữ liệu chiếm ưu thế. Những thuật toán bậc cao được giới thiệu qua cơ chế và điều kiện, tránh suy luận càng giảm bước hoặc tăng bậc thì kết quả luôn tốt hơn."
      ],
      "sources": [
        {
          "sourceId": "fncbook",
          "locator": "Ch. 2 Linear systems; Ch. 4 Nonlinear equations; Ch. 5 Interpolation; Ch. 6 IVPs; Ch. 9 Global approximation",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "scdp-lu-pivoting-qr",
          "title": "Giải hệ bằng phân rã và chọn trụ",
          "level": "core",
          "paragraphs": [
            "Khử Gauss tạo phân rã LU để giải nhiều vế phải bằng thế tiến và thế lùi, thường rẻ và ổn định hơn tính toàn bộ nghịch đảo rồi nhân. Chọn trụ từng phần đổi hàng để tránh chia cho một trụ quá nhỏ so với các ứng viên trong cột, nhưng không sửa điều kiện xấu vốn có của hệ. Với bình phương tối thiểu, QR hoặc SVD tránh bình phương hệ số điều kiện như phương trình chuẩn. Nghiệm cần được kiểm qua phần dư, thang dữ liệu và độ nhạy; một thư viện trả kết quả không chứng nhận hệ có nghiệm duy nhất đáng tin."
          ],
          "sources": [
            {
              "sourceId": "fncbook",
              "locator": "Ch. 2: LU factorization; Row pivoting; Ch. 3: QR factorization; Ch. 7: Singular value decomposition",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scdp-root-bracketing-newton",
          "title": "Chia đôi, Newton và điều kiện dừng",
          "level": "core",
          "paragraphs": [
            "Chia đôi giữ một khoảng đổi dấu của hàm liên tục nên cho bảo đảm thu hẹp tới một nghiệm trong điều kiện chuẩn, nhưng không bắt được mọi nghiệm như nghiệm bội chẵn không đổi dấu. Newton dùng tiếp tuyến để cập nhật và có thể hội tụ nhanh gần nghiệm đơn khi đủ trơn và khởi đầu thích hợp; nó có thể phân kỳ hoặc gặp đạo hàm nhỏ. Tiêu chí dừng cần phối hợp bước thay đổi, phần dư và thang bài toán, vì bước nhỏ có thể do mất chính xác hoặc độ dốc lớn chứ chưa chắc đã gần nghiệm."
          ],
          "sources": [
            {
              "sourceId": "fncbook",
              "locator": "Ch. 4: Newton’s method; Secant methods; Safeguarded methods",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scdp-interpolation-runge-splines",
          "title": "Nội suy, Runge và lựa chọn nút",
          "level": "core",
          "paragraphs": [
            "Nội suy buộc hàm xấp xỉ đi qua các mẫu, khác hồi quy cho phép sai số tại mẫu để mô hình hóa nhiễu. Đa thức bậc cao trên nút cách đều có thể dao động mạnh gần biên với một số hàm trơn, là hiện tượng Runge; đây không chỉ là lỗi của một đoạn mã tính đa thức. Đổi phân bố nút như nút Chebyshev hoặc dùng nội suy từng đoạn và spline có thể phù hợp hơn. Khi mẫu đã nhiễu, tăng độ khớp chính xác chưa chắc cải thiện dự đoán giữa các nút hoặc ngoài miền dữ liệu."
          ],
          "sources": [
            {
              "sourceId": "fncbook",
              "locator": "Ch. 5 Piecewise interpolation; §9.3 Stability of polynomial interpolation — Runge phenomenon",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scdp-differentiation-quadrature",
          "title": "Sai phân hữu hạn và tích phân số",
          "level": "core",
          "paragraphs": [
            "Đạo hàm có thể xấp xỉ bằng sai phân tiến hoặc trung tâm, với bậc sai số cắt cụt dựa trên khai triển Taylor và tính trơn. Bước quá nhỏ có thể tăng sai số tương đối của hiệu hai giá trị gần nhau, tạo đánh đổi với cắt cụt. Quy tắc hình thang ghép và Simpson ghép xấp xỉ tích phân bằng các hàm đơn giản theo từng đoạn; Simpson chuẩn cần số khoảng con chẵn. Các bậc O(h²) hoặc O(h⁴) cần đạo hàm thích hợp bị chặn; điểm kỳ dị hoặc hàm kém trơn đòi chia miền hay kỹ thuật khác."
          ],
          "sources": [
            {
              "sourceId": "fncbook",
              "locator": "Ch. 5: Finite differences; Numerical integration; Adaptive integration",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scdp-euler-runge-kutta-stability",
          "title": "ODE, Runge–Kutta và ổn định bước thời gian",
          "level": "core",
          "paragraphs": [
            "Bài toán giá trị đầu cho u′=f(t,u) cùng u(t₀) mô tả diễn tiến cần xấp xỉ. Euler dùng độ dốc đầu bước, còn Runge–Kutta kết hợp nhiều lần đánh giá f để đạt bậc cao hơn khi nghiệm đủ trơn. Sai số cục bộ mỗi bước và sai số toàn cục là hai đại lượng khác nhau. Chọn bước theo sai số ước lượng giúp thích nghi, nhưng với hệ stiff còn có ràng buộc ổn định nghiêm ngặt cho phương pháp tường minh; bước nhỏ không tự giải quyết mọi vấn đề mô hình hoặc dữ liệu ban đầu."
          ],
          "sources": [
            {
              "sourceId": "fncbook",
              "locator": "Ch. 6: Euler’s method; §6.4 Runge–Kutta methods; Adaptive Runge–Kutta; Ch. 11 absolute stability",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Phương pháp số cho Hệ tuyến tính (Pivoting), Nội suy, Tích phân số và Phương trình vi phân"
    },
    {
      "id": "scdp-data-cleaning-visualization-reproducibility",
      "overview": [
        "Một kết quả số còn phụ thuộc chuỗi biến đổi dữ liệu trước và sau thuật toán. Chương này coi lược đồ, đơn vị, giá trị khuyết và nguồn gốc dữ liệu là điều kiện của tính đúng, rồi nối đến trực quan hóa và khả năng dựng lại thí nghiệm. Mỗi bước làm sạch cần ghi ý nghĩa và giả thiết thay vì âm thầm thay dữ liệu cho biểu đồ đẹp hơn. Tái lập một lần chạy được phân biệt với kiểm tra kết luận còn đúng khi dữ liệu hoặc tham số thay đổi trong phạm vi hợp lý."
      ],
      "sources": [
        {
          "sourceId": "sklearn-user-guide",
          "locator": "Common pitfalls; Pipelines and composite estimators; Imputation of missing values",
          "relationship": "primary"
        },
        {
          "sourceId": "acm-ethics-keshav",
          "locator": "Research artifact and experimental reporting principles",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "scdp-schema-missingness-units",
          "title": "Lược đồ, dữ liệu khuyết và đơn vị",
          "level": "core",
          "paragraphs": [
            "Lược đồ kiểm kiểu, miền, quan hệ giữa cột và định danh duy nhất để ngăn dữ liệu vô lý đi vào tính toán. Đổi đơn vị như mili giây sang giây phải được thực hiện nhất quán cùng metadata. Giá trị khuyết có thể phản ánh cơ chế thu thập có thiên lệch; điền trung bình hoặc bỏ dòng làm đổi phân phối và cần giả thiết, không phải thao tác trung tính. Trong dự đoán, tham số làm sạch học từ train rồi áp dụng sang test; dùng toàn bộ dữ liệu để điền hoặc chuẩn hóa tạo rò rỉ."
          ],
          "sources": [
            {
              "sourceId": "sklearn-user-guide",
              "locator": "Common pitfalls: Inconsistent preprocessing; Data leakage; Imputation of missing values",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scdp-visualization-uncertainty",
          "title": "Biểu đồ, tỷ lệ và độ bất định",
          "level": "core",
          "paragraphs": [
            "Biểu đồ cần xác định biến, đơn vị và kiểu trục trước khi chọn hình thức. Trục log biến tỷ lệ thành khoảng cách và không biểu diễn trực tiếp số âm; cắt trục có thể làm chênh lệch trông lớn hơn nên cần thể hiện rõ. Thanh sai số phải ghi đó là độ lệch chuẩn, sai số chuẩn hay khoảng tin cậy, vì các đại lượng trả lời câu hỏi khác nhau. Biểu diễn nhiều lần chạy cùng cấu hình và baseline phù hợp giúp phân biệt xu hướng với nhiễu. Nội suy đường nối không được làm người đọc tưởng đã đo tại những điểm chưa có dữ liệu."
          ],
          "sources": [
            {
              "sourceId": "fncbook",
              "locator": "§6.4 Runge–Kutta methods — convergence plots and work versus error",
              "relationship": "primary"
            },
            {
              "sourceId": "acm-ethics-keshav",
              "locator": "Experimental reporting and reproducibility principles",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scdp-reproducible-pipeline",
          "title": "Pipeline tái lập và kiểm chứng độ nhạy",
          "level": "core",
          "paragraphs": [
            "Một pipeline tái lập ghi dữ liệu đầu vào, phiên bản môi trường, tham số, các biến đổi và cách tạo bảng biểu từ kết quả gốc. Cố định seed giúp lặp lại một nguồn ngẫu nhiên nhưng không tự bảo đảm tính tất định giữa phần cứng, thư viện song song hoặc phiên bản khác nhau. Kiểm độ nhạy với bước tính, độ chính xác số hoặc seed bổ sung bằng chứng kết luận không phụ thuộc một cấu hình tình cờ. Dữ liệu riêng tư không cần công khai nguyên trạng để mô tả phương pháp, nhưng các giới hạn tái lập phải được báo trung thực."
          ],
          "sources": [
            {
              "sourceId": "sklearn-user-guide",
              "locator": "Common pitfalls: Controlling randomness",
              "relationship": "primary"
            },
            {
              "sourceId": "acm-ethics-keshav",
              "locator": "Research artifacts: availability, functionality and reproducibility distinctions",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Làm sạch dữ liệu, Trực quan hóa định lượng chính xác và Quy trình tính toán tái lập"
    }
  ]
};
