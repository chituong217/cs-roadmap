export const COURSE_HUMAN_COMPUTER_INTERACTION = {
  "id": "human-computer-interaction",
  "code": "CS-39",
  "title": "Tương tác người–máy",
  "blockId": "block-6",
  "level": "core",
  "prerequisites": [
    {
      "courseId": "program-design-debugging",
      "type": "required",
      "reason": "Cần hiểu thiết kế trạng thái chương trình và xử lý lỗi đầu vào."
    },
    {
      "courseId": "web-network-applications",
      "type": "recommended",
      "reason": "Có nền tảng giao diện thực tế (HTML/CSS/DOM) để áp dụng và kiểm chứng các nguyên lý tương tác."
    }
  ],
  "overview": [
    "Tương tác người–máy nghiên cứu cách con người hiểu, điều khiển và đánh giá hệ thống tính toán trong hoàn cảnh sử dụng thực tế. Môn học nối nhận thức, tác vụ và phương pháp nghiên cứu người dùng với việc tạo mẫu, thiết kế trạng thái, phòng lỗi và đánh giá. Chất lượng giao diện không chỉ là thẩm mỹ hoặc số lần bấm ít nhất; nó còn phụ thuộc khả năng nhận ra hành động, hiểu kết quả, phục hồi sai sót và sử dụng với các năng lực, công cụ khác nhau. Các mô hình như chu trình Norman, Fitts và phân tích tác vụ được dùng để tạo giả thuyết thiết kế có thể kiểm, không như các quy luật áp dụng máy móc cho mọi sản phẩm. Khả năng tiếp cận được tích hợp từ đầu bằng nguyên tắc POUR và bằng chứng từ người dùng. Môn học cung cấp nền phương pháp để lựa chọn và diễn giải phép đánh giá, phân biệt nhận xét chuyên gia, quan sát định tính và đo lường định lượng, đồng thời giữ quyền riêng tư và sự tôn trọng người tham gia."
  ],
  "boundaries": [
    "Không thu gọn môn Tương tác người–máy thành một danh sách kiểm tra thẻ HTML/ARIA hay sở thích trang trí màu sắc; trọng tâm là mô hình nhận thức, phân tích tác vụ và đánh giá thực nghiệm với người dùng.",
    "Mô hình nhận thức/vận động có điều kiện và tham số thực nghiệm; không suy từ một công cụ tự động hoặc mẫu thuận tiện rằng mọi người dùng đều thao tác được."
  ],
  "sources": [
    {
      "sourceId": "hci-dix-resources",
      "locator": "Public chapter resources Ch. 1, 3, 5–7, 9–10, 12–13, 15",
      "relationship": "primary"
    },
    {
      "sourceId": "w3c-wai-hci",
      "locator": "Accessibility Principles; Involving Users; Evaluating Web Accessibility Overview",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "hci-cognition-mental-models-norman",
      "overview": [
        "Một giao diện là cầu nối giữa mục tiêu con người và những trạng thái máy có thể biểu diễn. Chương này nghiên cứu giới hạn chú ý, trí nhớ và vận động để hiểu vì sao một chức năng đúng về kỹ thuật vẫn có thể khó sử dụng. Mô hình nhận thức của người dùng được phân biệt với mô hình người thiết kế muốn truyền đạt. Những nguyên lý như phản hồi, ánh xạ và dấu hiệu thao tác được liên hệ với khả năng đoán hành động và hiểu kết quả, không được xem chỉ là lựa chọn trang trí."
      ],
      "sources": [
        {
          "sourceId": "hci-dix-resources",
          "locator": "Ch. 1 The Human; Ch. 3 The Interaction; Ch. 12 Cognitive Models",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "hci-mental-models-gulfs",
          "title": "Mô hình nhận thức và hai khoảng cách tương tác",
          "level": "core",
          "paragraphs": [
            "Mô hình nhận thức là cách người dùng hình dung hệ thống đang hoạt động; nó có thể khác cấu trúc triển khai thật nhưng vẫn hữu ích nếu hỗ trợ dự đoán đúng. Trong chu trình Norman, khoảng cách thực thi nằm giữa mục tiêu và hành động có thể chọn, còn khoảng cách đánh giá nằm giữa trạng thái hiển thị và ý nghĩa người dùng hiểu được. Nhãn rõ, phản hồi thao tác và trạng thái nhất quán giảm các khoảng cách này. Một biểu tượng quen với người thiết kế chưa chứng minh người mới có cùng cách hiểu."
          ],
          "sources": [
            {
              "sourceId": "hci-dix-resources",
              "locator": "Ch. 3 The Interaction: execution-evaluation cycle; Ch. 12 Cognitive Models",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "hci-affordance-signifier-mapping",
          "title": "Khả năng thao tác, dấu hiệu và ánh xạ",
          "level": "core",
          "paragraphs": [
            "Affordance nói tới khả năng hành động trong quan hệ giữa đối tượng và người sử dụng; signifier là dấu hiệu giúp nhận ra hành động ấy. Hình giống nút có thể báo khả năng bấm nhưng vẫn cần thể hiện trạng thái vô hiệu hoặc đang xử lý. Ánh xạ nối điều khiển với kết quả theo một trật tự dễ đoán, còn ràng buộc loại các lựa chọn không hợp lệ. Phản hồi cần đủ nhanh và đúng nghĩa, chẳng hạn đã nhận yêu cầu khác với đã hoàn tất lưu bền; giao diện không nên nhập hai trạng thái đó thành một thông báo mơ hồ."
          ],
          "sources": [
            {
              "sourceId": "hci-dix-resources",
              "locator": "Ch. 3 The Interaction; Ch. 5 Interaction Design Basics; Ch. 7 Design Rules",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "hci-attention-fitts-hick",
          "title": "Chú ý, trí nhớ và mô hình thời gian thao tác",
          "level": "core",
          "paragraphs": [
            "Trí nhớ làm việc và chú ý có giới hạn, nên nhận diện lựa chọn đang hiển thị thường đỡ gánh nhớ lại lệnh hoặc mã đã biến mất. Định luật Fitts mô hình thời gian trỏ theo khoảng cách và độ rộng mục tiêu trong một tác vụ vận động đã đo; tăng vùng bấm và giảm khoảng di chuyển có thể hỗ trợ thao tác. Hick–Hyman liên hệ thời gian lựa chọn với lượng thông tin trong tập phương án dưới các điều kiện thí nghiệm thích hợp. Các mô hình này hướng thiết kế và phép đo, không cho phép dự đoán chính xác mọi người hoặc bỏ qua học tập, nhóm lựa chọn và bối cảnh."
          ],
          "sources": [
            {
              "sourceId": "hci-dix-resources",
              "locator": "Ch. 1 The Human; Ch. 12 Cognitive Models: predictive models",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Nhận thức con người, Mô hình nhận thức (Mental Models) và Chu trình tương tác của Norman"
    },
    {
      "id": "hci-user-research-task-analysis",
      "overview": [
        "Thiết kế cần hiểu người dùng đang cố hoàn thành điều gì trong hoàn cảnh thật, không chỉ họ thích màu hoặc bố cục nào. Chương này phân biệt quan sát hành vi, phỏng vấn, khảo sát và dữ liệu sử dụng để chọn loại bằng chứng phù hợp. Phân tích tác vụ nối nhu cầu với các bước, quyết định, ngoại lệ và phụ thuộc vào người khác. Việc lấy mẫu và bảo vệ người tham gia được xem là một phần phương pháp, vì kết luận từ nhóm thuận tiện có thể bỏ sót những người gặp rào cản lớn nhất."
      ],
      "sources": [
        {
          "sourceId": "hci-dix-resources",
          "locator": "Ch. 13 Socio-organizational Issues; Ch. 15 Task Analysis",
          "relationship": "primary"
        },
        {
          "sourceId": "w3c-wai-hci",
          "locator": "Involving Users in Web Projects for Better, Easier Accessibility",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "hci-observation-interview-context",
          "title": "Quan sát, phỏng vấn và bối cảnh sử dụng",
          "level": "core",
          "paragraphs": [
            "Quan sát cho thấy người dùng thực sự làm gì, dùng công cụ phụ nào và gặp gián đoạn ở đâu; phỏng vấn làm rõ mục tiêu, lý do và trải nghiệm mà quan sát ngắn không thấy. Câu hỏi dẫn dắt hoặc yêu cầu đánh giá một giải pháp quá sớm có thể tạo câu trả lời chiều lòng người hỏi. Dữ liệu tự báo và log hệ thống có sai lệch khác nhau nên được đối chiếu, không xem một nguồn là toàn bộ sự thật. Bối cảnh gồm thiết bị, môi trường, áp lực thời gian, khả năng tiếp cận và quan hệ xã hội của tác vụ."
          ],
          "sources": [
            {
              "sourceId": "hci-dix-resources",
              "locator": "Ch. 13 Socio-organizational Issues and Stakeholder Requirements; Ch. 15 Task Analysis",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "hci-hierarchical-task-analysis",
          "title": "Phân tích tác vụ và đường đi ngoại lệ",
          "level": "core",
          "paragraphs": [
            "Phân tích tác vụ phân cấp tách một mục tiêu thành các mục tiêu con và kế hoạch quy định thứ tự hoặc điều kiện thực hiện. Nó khác danh sách màn hình vì tập trung điều người dùng cần đạt, kể cả các bước làm ngoài phần mềm. Đường đi chính cần đi cùng ngoại lệ như dữ liệu thiếu, mạng ngắt hoặc bàn giao cho người khác. Mô hình tác vụ giúp tìm bước lặp, chuyển ngữ cảnh và điểm cần nhớ; một sơ đồ sạch nhưng bỏ qua hoàn cảnh thực tế không đủ làm bằng chứng thiết kế phù hợp."
          ],
          "sources": [
            {
              "sourceId": "hci-dix-resources",
              "locator": "Ch. 15 Task Analysis: hierarchical task analysis; plans",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "hci-sampling-consent-data",
          "title": "Lấy mẫu người dùng và đạo đức nghiên cứu",
          "level": "core",
          "paragraphs": [
            "Người tham gia cần đại diện các khác biệt có ảnh hưởng tới tác vụ, như kinh nghiệm, thiết bị và nhu cầu tiếp cận, thay vì chỉ là người quen dễ mời. Đồng thuận phải giải thích mục đích, dữ liệu thu, cách dùng và quyền dừng phù hợp; ghi màn hình có thể chứa thông tin của người thứ ba nên cần giảm dữ liệu riêng tư. Nhận xét về giao diện không được biến thành đánh giá năng lực cá nhân. Kết quả cần ghi bối cảnh và giới hạn mẫu, nhất là khi một số nhu cầu quan trọng chưa được quan sát trực tiếp."
          ],
          "sources": [
            {
              "sourceId": "hci-dix-resources",
              "locator": "Ch. 9 Evaluation Techniques: choosing participants and ethical issues",
              "relationship": "primary"
            },
            {
              "sourceId": "w3c-wai-hci",
              "locator": "Involving Users in Evaluating Web Accessibility",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Nghiên cứu nhu cầu người dùng, Phân tích tác vụ phân cấp và Bối cảnh sử dụng"
    },
    {
      "id": "hci-prototyping-error-prevention",
      "overview": [
        "Prototype là công cụ trả lời một câu hỏi thiết kế với mức đầu tư phù hợp. Chương này tách mẫu để thử cấu trúc, nội dung hoặc tương tác khỏi sản phẩm đã hoàn chỉnh, rồi dùng chu trình đánh giá và sửa để giảm bất định. Trạng thái rỗng, tải, lỗi và thành công đều mang thông tin cần thiết cho hành động. Phòng lỗi tập trung vào nguyên nhân trong cách tương tác, không chỉ thêm hộp xác nhận sau mọi lần bấm hoặc viết thông báo yêu cầu người dùng cẩn thận hơn."
      ],
      "sources": [
        {
          "sourceId": "hci-dix-resources",
          "locator": "Ch. 5 Interaction Design Basics; Ch. 6 HCI in the Software Process; Ch. 7 Design Rules",
          "relationship": "primary"
        },
        {
          "sourceId": "w3c-wai-hci",
          "locator": "Accessibility Principles: Understandable information and user interface",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "hci-prototype-fidelity-iteration",
          "title": "Độ chi tiết prototype và thiết kế lặp",
          "level": "core",
          "paragraphs": [
            "Prototype giấy hoặc wireframe phù hợp để thử cấu trúc và ngôn ngữ trước khi đầu tư phần nhìn chi tiết; prototype tương tác giúp xem thứ tự thao tác và phản hồi nhưng chỉ chứng minh những hành vi thực sự được dựng. Độ chi tiết cao có thể khiến người thử tập trung vào màu thay vì vấn đề luồng, nên fidelity phải gắn câu hỏi nghiên cứu. Mỗi vòng thiết kế cần giả thuyết, bằng chứng và thay đổi cụ thể. Không thể kết luận một mẫu khả dụng chỉ vì nhóm phát triển tự thao tác trơn tru."
          ],
          "sources": [
            {
              "sourceId": "hci-dix-resources",
              "locator": "Ch. 5 Interaction Design Basics: scenarios; navigation design; iteration; Ch. 6 Prototyping",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "hci-slips-mistakes-recovery",
          "title": "Lỗi trượt thao tác, sai mô hình và phục hồi",
          "level": "core",
          "paragraphs": [
            "Slip xảy ra khi mục tiêu đúng nhưng thao tác lệch, như bấm nhầm nút cạnh nhau; mistake xảy ra khi kế hoạch hoặc cách hiểu vấn đề đã sai. Tăng vùng bấm, tách hành động nguy hiểm và ràng buộc đầu vào có thể giảm slip, còn nhãn, mô hình và hướng dẫn phù hợp xử lý nhiều mistake. Undo và phục hồi trạng thái giảm chi phí lỗi. Xác nhận chỉ có ích khi trình bày rõ đối tượng và hậu quả của một hành động đáng cân nhắc; xác nhận lặp vô nghĩa dễ trở thành thao tác phản xạ."
          ],
          "sources": [
            {
              "sourceId": "hci-dix-resources",
              "locator": "Ch. 1 The Human: error; Ch. 7 Design Rules: recoverability",
              "relationship": "primary"
            },
            {
              "sourceId": "w3c-wai-hci",
              "locator": "Accessibility Principles: Users are helped to avoid and correct mistakes",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "hci-state-feedback-latency",
          "title": "Trạng thái, phản hồi và độ trễ quan sát được",
          "level": "core",
          "paragraphs": [
            "Một thao tác có thể đang chờ, đang xử lý, thành công hoặc thất bại; giao diện cần phân biệt các trạng thái và giữ dữ liệu người dùng khi có thể phục hồi. Phản hồi tiến độ chỉ nên hứa phần đã xác định được, không tạo phần trăm giả để che một tiến trình không biết thời lượng. Chặn bấm lặp có thể tránh gửi trùng, nhưng hệ thống vẫn cần cơ chế xử lý yêu cầu trùng đúng. Nội dung lỗi nêu vấn đề và cách tiếp tục bằng ngôn ngữ tác vụ, đồng thời hỗ trợ công cụ tiếp cận nhận ra thay đổi trạng thái."
          ],
          "sources": [
            {
              "sourceId": "hci-dix-resources",
              "locator": "Ch. 5 Interaction Design Basics; Ch. 7 Design Rules: observability; responsiveness",
              "relationship": "primary"
            },
            {
              "sourceId": "w3c-wai-hci",
              "locator": "Accessibility Principles: Notifications and Feedback; Understandable",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Tạo mẫu lặp (Iterative Prototyping), Thiết kế trạng thái và Phòng ngừa lỗi thao tác"
    },
    {
      "id": "hci-usability-evaluation-accessibility",
      "overview": [
        "Khả dụng cần bằng chứng từ tác vụ và người dùng phù hợp, còn tiếp cận đòi hỏi hệ thống không dựng các rào cản tránh được cho những khả năng tương tác khác nhau. Chương này đối chiếu đánh giá chuyên gia với thử người dùng, rồi dùng nguyên tắc POUR để tổ chức yêu cầu tiếp cận. Một công cụ tự động có thể phát hiện một số lỗi kỹ thuật nhưng không chứng nhận toàn bộ trải nghiệm. Đo thành công, thời gian, lỗi và trải nghiệm cần phù hợp mục tiêu, đồng thời không dùng một số trung bình để che nhóm bị loại khỏi tác vụ."
      ],
      "sources": [
        {
          "sourceId": "hci-dix-resources",
          "locator": "Ch. 9 Evaluation Techniques; Ch. 10 Universal Design",
          "relationship": "primary"
        },
        {
          "sourceId": "w3c-wai-hci",
          "locator": "Accessibility Principles; Evaluating Web Accessibility Overview",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "hci-heuristics-thinkaloud",
          "title": "Heuristic evaluation và thử nghĩ thành lời",
          "level": "core",
          "paragraphs": [
            "Heuristic evaluation dùng các nguyên tắc như nhất quán, phản hồi và khả năng phục hồi để chuyên gia phát hiện nguy cơ; nó không thay thế quan sát người thật. Trong think-aloud, người tham gia nói cách họ hiểu và quyết định khi làm một tác vụ, còn người điều phối tránh hướng dẫn làm mất bằng chứng vướng mắc. Nói thành lời có thể thay đổi tốc độ và cách làm, nên phép đo thời gian phải được diễn giải theo phương pháp. Vấn đề được ưu tiên theo tác động và tần suất phù hợp, không chỉ đếm số nhận xét."
          ],
          "sources": [
            {
              "sourceId": "hci-dix-resources",
              "locator": "Ch. 9 Evaluation Techniques: heuristic evaluation; think aloud; experimental evaluation",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "hci-pour-keyboard-semantics",
          "title": "POUR, bàn phím và ngữ nghĩa nội dung",
          "level": "core",
          "paragraphs": [
            "POUR tổ chức yêu cầu thành có thể cảm nhận, có thể thao tác, có thể hiểu và vững tương thích với công cụ người dùng. Văn bản thay thế ảnh phải truyền chức năng hoặc thông tin cần thiết; màu không được là dấu hiệu duy nhất. Bàn phím cần đi qua mọi điều khiển với focus nhìn thấy, thứ tự hợp lý và không mắc kẹt. Tiêu đề, nhãn form và vai trò ngữ nghĩa giúp công cụ hỗ trợ hiểu cấu trúc. Chỉ tăng cỡ chữ hoặc thêm ARIA vào một điều khiển sai không tự tạo khả năng tiếp cận đầy đủ."
          ],
          "sources": [
            {
              "sourceId": "w3c-wai-hci",
              "locator": "Accessibility Principles: Perceivable; Operable; Understandable; Robust",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "hci-evaluation-metrics-limits",
          "title": "Thiết kế phép đánh giá và giới hạn suy luận",
          "level": "core",
          "paragraphs": [
            "Tác vụ đánh giá cần mục tiêu thực, tiêu chí hoàn thành quan sát được và dữ liệu phù hợp, tránh gợi ý trực tiếp tên nút cần bấm. Tỷ lệ hoàn thành, thời gian và lỗi phản ánh các khía cạnh khác với mức hài lòng tự báo. Mẫu nhỏ giúp tìm vấn đề định tính nhưng không tự cho ước lượng chính xác cho mọi nhóm; thử A/B cũng cần phân bổ, metric và thời gian đủ để suy luận hợp lệ. Báo cáo ghi ai tham gia, phiên bản giao diện, điều kiện và những nhu cầu chưa kiểm, thay vì tuyên bố đã đạt khả dụng cho mọi người."
          ],
          "sources": [
            {
              "sourceId": "hci-dix-resources",
              "locator": "Ch. 9 Evaluation Techniques",
              "relationship": "primary"
            },
            {
              "sourceId": "w3c-wai-hci",
              "locator": "Evaluating Web Accessibility Overview: involving users; limitations of tools",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Đánh giá khả dụng (Usability Evaluation) và Thiết kế tiếp cận toàn diện (Accessibility)"
    }
  ]
};
