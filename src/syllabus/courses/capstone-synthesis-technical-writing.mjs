export const COURSE_CAPSTONE_SYNTHESIS_TECHNICAL_WRITING = {
  "id": "capstone-synthesis-technical-writing",
  "code": "CS-50",
  "title": "Đồ án tổng hợp và trình bày kỹ thuật",
  "blockId": "block-7",
  "level": "core",
  "prerequisites": [
    {
      "courseId": "software-engineering",
      "type": "required",
      "reason": "Cần nắm quy trình thiết kế mô-đun, kiểm thử đa tầng, quản lý phiên bản và tích hợp liên tục."
    },
    {
      "courseId": "operations-performance-reliability",
      "type": "required",
      "reason": "Cần phương pháp đo đạc hiệu năng, phân vị độ trễ và kiểm chứng độ tin cậy."
    },
    {
      "courseId": "ethics-society-cs-research",
      "type": "required",
      "reason": "Cần phương pháp thiết kế thực nghiệm tái lập, đạo đức dữ liệu và trình bày báo cáo khoa học."
    }
  ],
  "overview": [
    "Đồ án tổng hợp tạo một tình huống tích hợp để vận dụng kiến thức phần mềm, hệ thống, dữ liệu và phương pháp đánh giá vào một bài toán có phạm vi rõ. Môn học trình bày cách xây đặc tả, lựa chọn kiến trúc, triển khai tăng dần và thu bằng chứng cho những tuyên bố kỹ thuật. Tính đúng, hiệu năng và khả năng chịu lỗi được kiểm theo yêu cầu thực chứ không bằng số tính năng hay một bản demo thuận lợi. Viết báo cáo và đóng gói artifact là một phần của công việc kỹ thuật vì chúng giúp người khác hiểu quyết định, tái hiện phép đo và nhận ra giới hạn. Nội dung giữ dạng kiến thức phương pháp cùng các điều kiện đánh giá, không biến thành một danh sách nhiệm vụ cố định cho mọi dự án. Quy mô và miền ứng dụng có thể khác nhau, nhưng mọi hướng đều cần mục tiêu đo được, đối chứng công bằng, quản trị dữ liệu phù hợp và kết luận trung thực với bằng chứng đã có."
  ],
  "boundaries": [
    "Đồ án tổng hợp đánh giá năng lực tích hợp kiến thức và bằng chứng kiểm nghiệm thực tế; phần chuẩn bị hồ sơ nghề nghiệp chỉ là phụ lục tùy chọn sau khi đã hoàn thành sản phẩm kỹ thuật.",
    "Syllabus cung cấp phương pháp và tiêu chí; chất lượng một đồ án cụ thể phải được đánh giá từ artifact thực, không suy ra từ việc đã đọc chương này."
  ],
  "sources": [
    {
      "sourceId": "swe-at-google",
      "locator": "Ch. 9–14: review, documentation and testing",
      "relationship": "primary"
    },
    {
      "sourceId": "google-sre-book",
      "locator": "Ch. 4, 6, 17, 21",
      "relationship": "primary"
    },
    {
      "sourceId": "acm-artifact-policy",
      "locator": "Artifact Review and Badging policy",
      "relationship": "primary"
    },
    {
      "sourceId": "acm-ethics-keshav",
      "locator": "Ethical reporting; How to Read a Paper",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "cstw-problem-scoping-design-doc",
      "overview": [
        "Một đồ án có ý nghĩa bắt đầu bằng một câu hỏi kỹ thuật đủ rõ để có thể đánh giá, cùng giới hạn tài nguyên và trách nhiệm với dữ liệu. Chương này phát triển yêu cầu từ tình huống sử dụng, phân biệt mục tiêu với phương tiện và mô tả chất lượng bằng tiêu chí quan sát được. Tài liệu thiết kế nối bài toán với các phương án và quyết định, ghi cả những điều chưa biết cần kiểm chứng. Phạm vi nhỏ nhưng có bằng chứng sâu được xem là cơ sở để mở rộng có căn cứ."
      ],
      "sources": [
        {
          "sourceId": "swe-at-google",
          "locator": "Ch. 10 Documentation: Design Docs; Ch. 9 Code Review",
          "relationship": "primary"
        },
        {
          "sourceId": "google-sre-book",
          "locator": "Ch. 4 Service Level Objectives",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "cstw-problem-specification-scope",
          "title": "Câu hỏi, đặc tả và phạm vi",
          "level": "core",
          "paragraphs": [
            "Đặc tả mô tả ai cần kết quả gì, dữ liệu nào có sẵn, điều kiện đầu vào và những hành vi được chấp nhận. Mục tiêu như giảm độ trễ phải có tải, phân vị, ngưỡng lỗi và baseline; dùng một framework mới chỉ là lựa chọn phương tiện. Phi mục tiêu xác định phần cố ý chưa giải để tránh đánh giá đồ án theo lời hứa mơ hồ. Giả thiết về quy mô, môi trường và người dùng cần được ghi vì chúng quyết định kiến trúc và giới hạn hiệu lực của kết luận."
          ],
          "sources": [
            {
              "sourceId": "swe-at-google",
              "locator": "Ch. 10 Documentation: design documents and audience",
              "relationship": "primary"
            },
            {
              "sourceId": "google-sre-book",
              "locator": "Ch. 4: Indicators; Objectives; Choosing Indicators",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cstw-alternatives-architecture-decisions",
          "title": "Phương án, quyết định và bất định",
          "level": "core",
          "paragraphs": [
            "Tài liệu thiết kế mô tả luồng dữ liệu, thành phần, giao diện và những bất biến phải giữ, rồi đối chiếu các phương án khả thi theo cùng yêu cầu. Một phương án đơn giản có thể tốt hơn khi tải và độ tin cậy chưa đòi hệ phân tán; một phương án phức tạp cần nêu lợi ích đủ bù chi phí vận hành. Bản ghi quyết định giữ bối cảnh, lựa chọn và hệ quả để người sau hiểu lý do. Những giả thiết chưa chắc nên được kiểm bằng một thử nghiệm nhỏ có câu hỏi rõ, không che bằng sơ đồ nhiều hộp."
          ],
          "sources": [
            {
              "sourceId": "swe-at-google",
              "locator": "Ch. 10 Documentation: Design Docs; Ch. 22 Large-Scale Changes — design considerations",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cstw-plan-evidence-risk",
          "title": "Kế hoạch theo bằng chứng và rủi ro",
          "level": "core",
          "paragraphs": [
            "Một mốc có ích làm giảm một bất định quan trọng, chẳng hạn chứng minh đường dữ liệu đi hết hệ thống hoặc đo được giới hạn lưu trữ, thay vì chỉ báo hoàn thành một tỷ lệ mã nguồn. Rủi ro kỹ thuật cần được nối tới dấu hiệu phát hiện và phương án giảm tác động. Dữ liệu cá nhân, tài sản bên thứ ba và phụ thuộc có giấy phép là những ràng buộc thiết kế ngay từ đầu. Thay đổi phạm vi được ghi cùng lý do và ảnh hưởng tới tiêu chí đánh giá để đồ án không âm thầm đổi câu hỏi giữa chừng."
          ],
          "sources": [
            {
              "sourceId": "swe-at-google",
              "locator": "Ch. 10 Documentation; Ch. 11 Testing Overview",
              "relationship": "primary"
            },
            {
              "sourceId": "acm-ethics-keshav",
              "locator": "ACM Code: honest reporting; privacy; intellectual work",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Định hình bài toán, Đặc tả yêu cầu và Tài liệu thiết kế kiến trúc (Design Doc)"
    },
    {
      "id": "cstw-incremental-implementation-verification",
      "overview": [
        "Triển khai và đánh giá được phát triển cùng nhau để luôn có một phiên bản nhỏ nhưng kiểm được ý nghĩa. Chương này kết nối lát cắt đầu cuối với kiểm thử bất biến và khả năng quan sát, rồi xây thiết kế thí nghiệm cho hiệu năng, chất lượng hoặc khả năng chịu lỗi. Số test chạy qua là bằng chứng cho những trường hợp đã kiểm, không đại diện toàn bộ tính đúng. Các phép đo cần tái hiện được điều kiện, phân biệt khởi động với ổn định và bảo đảm đối chứng nhận cùng cơ hội tối ưu hợp lý."
      ],
      "sources": [
        {
          "sourceId": "swe-at-google",
          "locator": "Ch. 11–14 Testing",
          "relationship": "primary"
        },
        {
          "sourceId": "google-sre-book",
          "locator": "Ch. 6 Monitoring; Ch. 17 Testing for Reliability; Ch. 21 Handling Overload",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "cstw-incremental-skeleton-invariants",
          "title": "Lát cắt đầu cuối và kiểm thử bất biến",
          "level": "core",
          "paragraphs": [
            "Walking skeleton là phiên bản tối thiểu đi qua các ranh giới chính của hệ thống để lộ sớm lỗi tích hợp, không phải bản giả giao diện không có hành vi thật. Những bất biến như không mất bản ghi đã xác nhận hoặc tổng số lượng không âm cần được biểu diễn thành điều kiện có thể kiểm. Unit test kiểm logic hẹp, integration test kiểm giao thức giữa thành phần, còn kiểm đầu cuối xác nhận luồng sử dụng. Mock chỉ thay một quan hệ đã hiểu; quá nhiều giả lập có thể cho bộ test xanh nhưng không phát hiện hợp đồng thật đã lệch."
          ],
          "sources": [
            {
              "sourceId": "swe-at-google",
              "locator": "Ch. 11 Testing Overview; Ch. 12 Unit Testing; Ch. 13 Test Doubles; Ch. 14 Larger Testing",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cstw-benchmark-baseline-repeatability",
          "title": "Thiết kế benchmark và đối chứng",
          "level": "core",
          "paragraphs": [
            "Một benchmark ghi workload, phân bố đầu vào, quy mô, phần cứng, phiên bản và điều kiện cache để kết quả có ý nghĩa. Độ trễ trung bình, p95/p99, thông lượng và lỗi trả lời các câu hỏi khác nhau; benchmark chỉ tăng request mà không đo request bị bỏ có thể cho kết luận sai. Lặp đo, warmup và tách chi phí setup giúp thấy nhiễu, nhưng mọi loại bỏ dữ liệu cần lý do công khai. Baseline phải giải cùng đặc tả và được cấu hình hợp lý; so một bản tối ưu với đối chứng cố ý yếu không chứng minh đóng góp thiết kế."
          ],
          "sources": [
            {
              "sourceId": "google-sre-book",
              "locator": "Ch. 4 Service Level Objectives; Ch. 6 Monitoring; Ch. 21 Handling Overload",
              "relationship": "primary"
            },
            {
              "sourceId": "swe-at-google",
              "locator": "Ch. 14 Larger Testing: performance testing",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cstw-fault-testing-observability",
          "title": "Quan sát, tiêm lỗi và giới hạn bảo đảm",
          "level": "core",
          "paragraphs": [
            "Log, metric và trace cần nối một kết quả người dùng với các bước xử lý mà không ghi dư dữ liệu nhạy cảm. Thử lỗi như timeout, restart hoặc dữ liệu sai được thiết kế trong môi trường được kiểm soát với điều kiện khôi phục rõ. Sau lỗi cần kiểm cả tính khả dụng lẫn bất biến dữ liệu, vì trả lời nhanh bằng dữ liệu mất có thể vi phạm yêu cầu quan trọng hơn. Một tập lịch lỗi hữu hạn không chứng minh đúng dưới mọi lịch trình; kết quả phải ghi phạm vi và kết hợp với lập luận thiết kế khi cần."
          ],
          "sources": [
            {
              "sourceId": "google-sre-book",
              "locator": "Ch. 6 Monitoring Distributed Systems; Ch. 17 Testing for Reliability",
              "relationship": "primary"
            },
            {
              "sourceId": "swe-at-google",
              "locator": "Ch. 14 Larger Testing",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Triển khai phân đoạn, Kiểm chứng bất biến và Đánh giá thực nghiệm định lượng"
    },
    {
      "id": "cstw-technical-writing-reproducible-artifact",
      "overview": [
        "Báo cáo kỹ thuật đưa người đọc từ bài toán đến lựa chọn, phương pháp và bằng chứng để họ tự đánh giá kết luận. Chương này tổ chức văn bản, hình kiến trúc và biểu đồ theo vai trò lập luận, đồng thời chuẩn bị artifact phù hợp quyền truy cập. Báo cáo không được viết như lịch sử đã làm nhiều việc; nó cần trả lời điều gì được chứng minh và còn chưa biết. Phần hướng nghiệp chỉ có ý nghĩa khi dựa trên sản phẩm và bằng chứng thật, không thay nội dung đánh giá học thuật hoặc kỹ thuật."
      ],
      "sources": [
        {
          "sourceId": "swe-at-google",
          "locator": "Ch. 10 Documentation",
          "relationship": "primary"
        },
        {
          "sourceId": "acm-artifact-policy",
          "locator": "Artifact Review and Badging: availability; functionality; results validation",
          "relationship": "primary"
        },
        {
          "sourceId": "acm-ethics-keshav",
          "locator": "Keshav: critical reading of papers and figures",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "cstw-report-claims-evidence",
          "title": "Cấu trúc báo cáo và độ mạnh tuyên bố",
          "level": "core",
          "paragraphs": [
            "Một báo cáo có thể trình bày vấn đề, bối cảnh liên quan, thiết kế, phương pháp đánh giá, kết quả và giới hạn theo mức phù hợp đề tài. Mỗi tuyên bố chính cần trỏ tới bằng chứng: thí nghiệm, kiểm thử, phân tích hoặc nguồn gốc rõ. Cải thiện quan sát trên một workload không tự cho phép nói luôn nhanh hơn; không gặp lỗi trong thử nghiệm không đồng nghĩa đã chứng minh không thể lỗi. Đóng góp được tách khỏi phần dùng lại thư viện hoặc học liệu để người đọc đánh giá đúng công sức và tính mới."
          ],
          "sources": [
            {
              "sourceId": "swe-at-google",
              "locator": "Ch. 10 Documentation: audience; content; types of documentation",
              "relationship": "primary"
            },
            {
              "sourceId": "acm-ethics-keshav",
              "locator": "Keshav, How to Read a Paper: contributions; assumptions; figures",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cstw-figures-tables-uncertainty",
          "title": "Hình kỹ thuật và biểu diễn kết quả",
          "level": "core",
          "paragraphs": [
            "Sơ đồ kiến trúc phải phân biệt luồng dữ liệu, gọi hàm và quan hệ triển khai bằng nhãn rõ, không dùng mũi tên với nhiều ý nghĩa ngầm. Biểu đồ định lượng có trục, đơn vị, miền và giải thích đường hoặc thanh sai số; số phần trăm cải thiện phải nêu mẫu số và bối cảnh. Bảng cấu hình giúp người đọc đối chiếu các lần chạy mà không đoán. Khi hình được giản lược hoặc dữ liệu tổng hợp, ghi rõ giới hạn để nó hỗ trợ lập luận chứ không tạo một mức chính xác không có trong bằng chứng."
          ],
          "sources": [
            {
              "sourceId": "acm-ethics-keshav",
              "locator": "Keshav: second pass examination of figures",
              "relationship": "primary"
            },
            {
              "sourceId": "google-sre-book",
              "locator": "Ch. 4 Service Level Objectives: latency distributions and percentiles",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cstw-artifact-reproduction-career",
          "title": "Đóng gói artifact và trình bày năng lực",
          "level": "core",
          "paragraphs": [
            "Artifact cần điểm bắt đầu, phiên bản phụ thuộc, cấu hình mẫu, đường lấy dữ liệu hợp lệ và cách chạy lại những kết quả được báo. Secret hoặc dữ liệu riêng tư phải được thay bằng cơ chế cấu hình và mô tả quyền cần thiết, không đóng gói chung cho tiện. Người kiểm độc lập cần biết thời gian, tài nguyên và sai khác dự kiến khi chạy lại. Từ nền đó có thể viết phần trình bày dự án cho hồ sơ nghề nghiệp, nêu trách nhiệm và kết quả đo thật; hình chụp đẹp hoặc số dòng mã không thay bằng chứng hệ thống hoạt động và được hiểu."
          ],
          "sources": [
            {
              "sourceId": "acm-artifact-policy",
              "locator": "Artifact availability; Artifact evaluation; Results validated",
              "relationship": "primary"
            },
            {
              "sourceId": "swe-at-google",
              "locator": "Ch. 10 Documentation: tutorials; conceptual documentation",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Phương pháp viết báo cáo kỹ thuật, Trực quan hóa kết quả và Đóng gói tái lập"
    }
  ]
};
