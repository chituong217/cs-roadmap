export const COURSE_ETHICS_SOCIETY_CS_RESEARCH = {
  "id": "ethics-society-cs-research",
  "code": "CS-42",
  "title": "Đạo đức, xã hội và nghiên cứu CS",
  "blockId": "block-6",
  "level": "core",
  "prerequisites": [
    {
      "courseId": "software-engineering",
      "type": "required",
      "reason": "Cần hiểu vòng đời xây dựng phần mềm, phụ thuộc mã nguồn mở và kiểm thử."
    },
    {
      "courseId": "statistics-inference",
      "type": "required",
      "reason": "Cần hiểu kiểm định giả thuyết, sai lệch chọn mẫu và đánh đổi sai lầm loại I/II khi phân tích tính công bằng và kết quả thực nghiệm."
    }
  ],
  "overview": [
    "Môn học xem hoạt động kỹ thuật như một chuỗi quyết định có tác động xã hội và có trách nhiệm cung cấp bằng chứng. Các nguyên tắc ACM tạo nền để phân tích tác hại, công bằng, riêng tư, quyền của người dùng và trách nhiệm nghề nghiệp. Giấy phép phần mềm được nghiên cứu từ văn bản và nguồn gốc tài sản để phân biệt truy cập công khai với quyền sử dụng hợp lệ. Phần phương pháp nghiên cứu phát triển cách đọc bài báo có mục đích, đối chiếu giả thiết với bằng chứng, thiết kế baseline và ablation, đánh giá bất định và chuẩn bị artifact có thể kiểm. Những nội dung này không tách khỏi lập trình hoặc hệ thống: lựa chọn dữ liệu, mục tiêu tối ưu, quyền truy cập và cách báo hiệu năng đều có cả mặt kỹ thuật lẫn giá trị. Môn học không đưa một chỉ số công bằng duy nhất hay lời khuyên pháp lý áp dụng mọi tình huống; mục tiêu là nhận ra điều kiện cần xem xét và trình bày kết luận trung thực, có giới hạn."
  ],
  "boundaries": [
    "Các câu hỏi về quyền riêng tư, độ tin cậy và khả năng tiếp cận được lồng ghép xuyên suốt các môn trước, nhưng môn học này cung cấp khung phân tích hệ thống cùng phương pháp đọc/kiểm chứng công trình khoa học.",
    "Các loại giấy phép được mô tả theo văn bản phiên bản cụ thể; các định lý đánh đổi công bằng không được khái quát thành mọi tiêu chuẩn đều bất khả đồng thời."
  ],
  "sources": [
    {
      "sourceId": "acm-ethics-keshav",
      "locator": "ACM Code of Ethics 2018; Keshav, How to Read a Paper",
      "relationship": "primary"
    },
    {
      "sourceId": "open-source-licenses",
      "locator": "MIT; Apache-2.0; GPLv3",
      "relationship": "primary"
    },
    {
      "sourceId": "fairness-tradeoffs-2017",
      "locator": "ITCS 2017: scope of incompatible risk-score fairness conditions",
      "relationship": "primary"
    },
    {
      "sourceId": "acm-artifact-policy",
      "locator": "Artifact Review and Badging definitions",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "esr-professional-ethics-privacy-fairness",
      "overview": [
        "Quyết định kỹ thuật phân phối lợi ích, rủi ro và quyền kiểm soát cho những người khác nhau, kể cả những người không trực tiếp dùng phần mềm. Chương này dùng các nguyên tắc nghề nghiệp để nhận diện bên liên quan và đánh đổi thay vì chỉ kiểm sản phẩm có chạy đúng hay không. Quyền riêng tư được xem theo toàn bộ vòng đời dữ liệu, còn công bằng được phân tích theo định nghĩa và bối cảnh. Một chỉ số đạt ngưỡng không tự giải quyết các câu hỏi giá trị hoặc hợp thức hóa một tác vụ gây hại."
      ],
      "sources": [
        {
          "sourceId": "acm-ethics-keshav",
          "locator": "ACM Code of Ethics 2018 §1–3",
          "relationship": "primary"
        },
        {
          "sourceId": "fairness-tradeoffs-2017",
          "locator": "Abstract: incompatibility of fairness criteria",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "esr-acm-stakeholders-harm",
          "title": "Trách nhiệm nghề nghiệp và bên chịu tác động",
          "level": "core",
          "paragraphs": [
            "ACM Code đặt lợi ích xã hội, tránh gây hại, trung thực và không phân biệt đối xử bên cạnh năng lực chuyên môn và trách nhiệm lãnh đạo. Phân tích một hệ thống cần nhận diện người hưởng lợi, người cung cấp dữ liệu, người bị quyết định tác động và người chịu chi phí khi lỗi xảy ra. Đúng đặc tả chưa đủ nếu đặc tả bỏ sót nhóm dễ tổn thương. Bằng chứng, mức bất định và giới hạn năng lực phải được truyền đạt trung thực để người khác ra quyết định, không dùng uy tín kỹ thuật thay cho kiểm chứng."
          ],
          "sources": [
            {
              "sourceId": "acm-ethics-keshav",
              "locator": "ACM Code §1.1–1.4; §2.1–2.5; §3.1",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "esr-privacy-lifecycle",
          "title": "Quyền riêng tư, mục đích và tối thiểu dữ liệu",
          "level": "core",
          "paragraphs": [
            "Quyền riêng tư bao gồm khả năng kiểm soát việc thông tin cá nhân được thu, sử dụng, liên kết và giữ lại theo bối cảnh. Chỉ thu trường cần thiết, giới hạn mục đích và thời hạn lưu làm giảm rủi ro từ đầu, khác mã hóa toàn bộ một kho dữ liệu thu quá mức. Bỏ tên không tự ẩn danh nếu các thuộc tính còn lại có thể liên kết để tái nhận diện. Truy cập nội bộ, log, bản sao và dữ liệu huấn luyện cũng thuộc vòng đời cần quản trị; đồng thuận không phải giấy phép vô hạn cho mọi sử dụng về sau."
          ],
          "sources": [
            {
              "sourceId": "acm-ethics-keshav",
              "locator": "ACM Code §1.6 Respect privacy; §1.7 Honor confidentiality; §2.9 Security",
              "relationship": "primary"
            },
            {
              "sourceId": "owasp-cheatsheets",
              "locator": "Privacy; Logging Cheat Sheets",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "esr-fairness-definitions-tradeoffs",
          "title": "Thiên kiến dữ liệu và đánh đổi thước đo",
          "level": "core",
          "paragraphs": [
            "Sai lệch có thể đến từ ai được thu mẫu, nhãn do quyết định lịch sử tạo ra, biến đại diện cho đặc điểm nhạy cảm hoặc cách phản hồi hệ thống làm đổi dữ liệu tương lai. Calibration yêu cầu điểm số khớp tần suất kết quả theo một nghĩa đã chọn; equalized odds so các tỷ lệ lỗi điều kiện theo nhãn giữa nhóm. Các định nghĩa không đồng nghĩa và nhiều điều kiện công bằng có thể không cùng thỏa ngoài những trường hợp đặc biệt, nên cần nêu rõ định lý và giả thiết khi viện dẫn. Chọn metric phải gắn tác hại và quyền lợi thực, không chỉ chọn số dễ đạt."
          ],
          "sources": [
            {
              "sourceId": "fairness-tradeoffs-2017",
              "locator": "Inherent Trade-Offs in the Fair Determination of Risk Scores: abstract and stated scope",
              "relationship": "primary"
            },
            {
              "sourceId": "acm-ethics-keshav",
              "locator": "ACM Code §1.4 Be fair and take action not to discriminate",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Đạo đức nghề nghiệp ACM, Quyền riêng tư dữ liệu và Thiên kiến thuật toán (Fairness)"
    },
    {
      "id": "esr-licenses-ip-societal-impact",
      "overview": [
        "Phần mềm, dữ liệu và tài liệu có những quyền và điều kiện sử dụng không thể suy ra chỉ từ việc tải được trên mạng. Chương này phân biệt bản quyền, giấy phép và bằng sáng chế ở mức khái niệm, rồi đối chiếu các văn bản MIT, Apache 2.0 và GPLv3. Trọng tâm là nhận diện nghĩa vụ theo tình huống phân phối và phụ thuộc cụ thể, không đưa một quy tắc pháp lý đơn giản cho mọi dự án. Trách nhiệm khi công bố lỗ hổng được nối với việc giảm tác hại cho người chịu rủi ro."
      ],
      "sources": [
        {
          "sourceId": "open-source-licenses",
          "locator": "MIT license; Apache License 2.0 §§2–4; GPLv3 §§0–6",
          "relationship": "primary"
        },
        {
          "sourceId": "acm-ethics-keshav",
          "locator": "ACM Code §1.5; §2.8",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "esr-copyright-license-patent",
          "title": "Bản quyền, giấy phép và nguồn gốc tài sản",
          "level": "core",
          "paragraphs": [
            "Bản quyền gắn với cách thể hiện một tác phẩm như mã nguồn hoặc văn bản; giấy phép quy định quyền người nhận được sử dụng tác phẩm và các điều kiện kèm theo. Bằng sáng chế là chế độ quyền khác đối với sáng chế đủ điều kiện, nên có mã nguồn không tự giải quyết mọi quyền liên quan. Kho công khai thiếu giấy phép không mặc nhiên cho phép tái phân phối tùy ý. Theo dõi nguồn gốc mã, dữ liệu, ảnh và phụ thuộc giúp xác định ai có quyền cấp phép; giấy phép của một repository không tự bao trùm mọi tài sản bên trong."
          ],
          "sources": [
            {
              "sourceId": "open-source-licenses",
              "locator": "MIT license permission and notice; Apache License 2.0 definitions and grants",
              "relationship": "primary"
            },
            {
              "sourceId": "acm-ethics-keshav",
              "locator": "ACM Code §1.5 Respect the work required to produce new ideas and artifacts",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "esr-permissive-copyleft-conditions",
          "title": "MIT, Apache và GPL theo điều kiện cụ thể",
          "level": "core",
          "paragraphs": [
            "MIT cho quyền sử dụng rộng với điều kiện giữ thông báo bản quyền và giấy phép trong các bản sao hoặc phần đáng kể. Apache 2.0 thêm các quy định rõ về cấp quyền bằng sáng chế, ghi thay đổi và NOTICE khi có. GPLv3 đặt điều kiện với việc truyền bản sao tác phẩm thuộc phạm vi giấy phép, bao gồm cung cấp mã nguồn tương ứng theo cách hợp lệ trong các trường hợp quy định; dùng riêng và phân phối không phải cùng tình huống. Tương thích giữa nhiều giấy phép cần xem phiên bản và cách kết hợp thực tế, không dựa vào nhãn miễn phí hay copyleft đơn thuần."
          ],
          "sources": [
            {
              "sourceId": "open-source-licenses",
              "locator": "MIT license; Apache License 2.0 §§2–4; GNU GPLv3 §§0–6",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "esr-coordinated-disclosure",
          "title": "Công bố lỗ hổng có phối hợp và trách nhiệm hệ thống",
          "level": "core",
          "paragraphs": [
            "Thông tin lỗ hổng có thể giúp sửa hệ thống nhưng cũng có thể tăng rủi ro cho người chưa được bảo vệ. Công bố có phối hợp xác định phạm vi được phép kiểm, thu thập bằng chứng tối thiểu, báo đúng đầu mối và thảo luận thời điểm cùng cách giảm tác hại. Dữ liệu riêng tư vô tình gặp không được xem là tài sản có thể công khai làm minh họa. Tranh luận về mức nghiêm trọng cần dựa trên điều kiện và tác động có thể kiểm; một thông báo kỹ thuật đúng vẫn cần loại bí mật và tách phát hiện thực khỏi suy đoán."
          ],
          "sources": [
            {
              "sourceId": "acm-ethics-keshav",
              "locator": "ACM Code §1.2 Avoid harm; §2.8 Access only when authorized; §2.9 Secure systems",
              "relationship": "primary"
            },
            {
              "sourceId": "owasp-cheatsheets",
              "locator": "Vulnerability Disclosure Cheat Sheet",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Bản quyền phần mềm, Giấy phép mã nguồn mở (MIT, Apache, GPL) và Trách nhiệm hệ thống"
    },
    {
      "id": "esr-reading-papers-experimental-methodology",
      "overview": [
        "Bài báo nghiên cứu trình bày một lập luận có bằng chứng, không chỉ một ý tưởng mới hoặc bảng điểm cao. Chương này xây cách đọc theo mức sâu tăng dần và cách đánh giá giả thiết, baseline, phép đo và giới hạn. Thiết kế thực nghiệm cần tách câu hỏi nghiên cứu khỏi lựa chọn công cụ và tách dữ liệu khám phá khỏi kiểm chứng cuối. Tái lập được xem như khả năng kiểm tra lại một chuỗi lập luận và artifact, đồng thời giữ rõ những hạn chế do quyền truy cập, chi phí hoặc tính ngẫu nhiên."
      ],
      "sources": [
        {
          "sourceId": "acm-ethics-keshav",
          "locator": "S. Keshav, How to Read a Paper: §2 The Three-Pass Approach; ACM research artifact distinctions",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "esr-three-pass-critical-reading",
          "title": "Đọc ba vòng và tái dựng lập luận",
          "level": "core",
          "paragraphs": [
            "Ở vòng đầu theo Keshav, người đọc xác định loại bài, bối cảnh, đóng góp và cấu trúc bằng tiêu đề, tóm tắt, phần mở kết cùng hình. Vòng tiếp theo làm rõ nội dung và bằng chứng, đánh dấu thuật ngữ hoặc giả thiết chưa hiểu thay vì cố theo mọi chi tiết ngay. Vòng sâu nhất thử tái dựng lập luận hoặc cách làm, kiểm các giả thiết và chỗ có thể thất bại. Không phải mọi bài đều cần đến vòng cuối; mức đọc phụ thuộc mục tiêu và bằng chứng liên quan, không được biến thời gian đọc thành thước đo đã hiểu."
          ],
          "sources": [
            {
              "sourceId": "acm-ethics-keshav",
              "locator": "Keshav, How to Read a Paper §2.1–2.3",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "esr-baselines-ablation-uncertainty",
          "title": "Baseline, ablation và độ bất định",
          "level": "core",
          "paragraphs": [
            "Baseline phải giải cùng tác vụ trong điều kiện tài nguyên và thông tin có thể so sánh; đối thủ cố ý yếu làm kết luận cải thiện thiếu ý nghĩa. Ablation loại hoặc thay một thành phần để xem đóng góp của nó, nhưng tương tác giữa thành phần có thể khiến kết quả không cộng tuyến tính. Nhiều seed, mẫu hoặc tải làm rõ độ biến thiên; khoảng tin cậy cần phương pháp khớp đơn vị độc lập. Chọn chỉ báo cáo lần chạy tốt nhất hoặc test đã dùng nhiều lần để chỉnh mô hình tạo thiên lệch lựa chọn."
          ],
          "sources": [
            {
              "sourceId": "acm-ethics-keshav",
              "locator": "Experimental methodology and critical reading of figures/assumptions",
              "relationship": "primary"
            },
            {
              "sourceId": "openintro-statistics",
              "locator": "Study design; sampling variability; confidence intervals",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "esr-artifacts-limitations-honesty",
          "title": "Artifact, tái lập và báo cáo giới hạn",
          "level": "core",
          "paragraphs": [
            "Một artifact có ích cung cấp dữ liệu hoặc đường truy cập hợp lệ, mã, cấu hình và chỉ dẫn tạo lại kết quả được tuyên bố. Việc tải được artifact, chạy được nó và tái hiện được kết luận là các mức bằng chứng khác nhau. Mô tả giới hạn cần nói phạm vi đầu vào, điều kiện phần cứng, giả thiết mô hình và những kết quả âm có liên quan. Khi dữ liệu không thể chia sẻ, có thể cung cấp dữ liệu tổng hợp hoặc thủ tục nhưng phải ghi rõ điều gì còn không kiểm độc lập được; không gọi một phép minh họa là tái lập đầy đủ."
          ],
          "sources": [
            {
              "sourceId": "acm-ethics-keshav",
              "locator": "ACM principles of honest reporting and research artifacts",
              "relationship": "primary"
            },
            {
              "sourceId": "acm-artifact-policy",
              "locator": "Artifact availability, evaluation and results-validation badge definitions",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Phương pháp đọc bài báo khoa học 3 vòng và Thiết kế thực nghiệm tái lập trong CS"
    }
  ]
};
