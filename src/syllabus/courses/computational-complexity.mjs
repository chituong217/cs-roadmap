export const COURSE_COMPUTATIONAL_COMPLEXITY = {
  "id": "computational-complexity",
  "code": "CS-20",
  "title": "Độ phức tạp tính toán",
  "blockId": "block-3",
  "level": "core",
  "prerequisites": [
    {
      "courseId": "formal-languages-computability",
      "type": "required",
      "reason": "Cần mô hình Máy Turing, ngôn ngữ quyết định và kỹ thuật quy dẫn."
    },
    {
      "courseId": "graph-algorithms",
      "type": "required",
      "reason": "Cần nắm các bài toán đồ thị đa thức (2-SAT, MST, Shortest Path, Matching) để đối chiếu với các bài toán đồ thị NP-khó (3-SAT, TSP, Clique)."
    }
  ],
  "overview": [
    "Sau khi biết một bài toán có thuật toán quyết định hay không, môn học nghiên cứu lượng thời gian và không gian cần để giải nó khi đầu vào lớn dần. Mã hóa nhị phân, mô hình máy và cách phát biểu quyết định tạo nền cho các lớp P, NP, coNP và PSPACE. Quy dẫn đa thức và Cook–Levin giải thích sự liên hệ giữa một bộ kiểm chứng ngắn với các bài toán thỏa công thức, rồi dẫn tới hệ thống bài toán NP-đầy đủ trong logic, đồ thị và số học. Nội dung phân biệt cẩn thận kết quả đã chứng minh với câu hỏi mở: chưa biết thuật toán đa thức không có nghĩa đã chứng minh không tồn tại, và NP-khó không đồng nghĩa bất khả quyết. Không gian được xem như một tài nguyên có thể tái sử dụng. Cuối môn, các cách ứng phó với bài toán khó được đặt cạnh giới hạn lý thuyết để chọn điều kiện thực tế có thể khai thác, thay vì xem nhãn NP-khó là lý do ngừng giải một ứng dụng cụ thể."
  ],
  "boundaries": [
    "Khẳng định rõ: NP là viết tắt của Nondeterministic Polynomial time (thời gian đa thức không đơn định), tuyệt đối không có nghĩa là \"Not Polynomial\" (không đa thức); và P != NP hiện vẫn là giả thuyết mở chưa được chứng minh.",
    "FPT và bộ giải được giới thiệu để lựa chọn chiến lược; không thay một khóa tối ưu tổ hợp, độ phức tạp tham số hoặc lý thuyết chứng minh."
  ],
  "sources": [
    {
      "sourceId": "erickson-algorithms",
      "locator": "Ch. 12 NP-Hardness; Fast Exponential Algorithms; Approximation Algorithms",
      "relationship": "primary"
    },
    {
      "sourceId": "mit-6045-2020",
      "locator": "Lectures 13–17, 19–20",
      "relationship": "primary"
    },
    {
      "sourceId": "mit-6045j-2011",
      "locator": "Lectures 15–16: Complexity and NP-completeness",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "cc-encoding-time-classes-p-np",
      "overview": [
        "Một bài toán có thể quyết định được nhưng vẫn cần tài nguyên vượt khả năng xử lý của đầu vào lớn. Chương này đo độ dài mã hóa và định nghĩa các lớp thời gian trước khi giới thiệu P, NP và coNP. Bài toán quyết định được tách khỏi tìm nhân chứng và tối ưu để các phát biểu lớp phức tạp có đối tượng rõ. Các cận giả đa thức làm lộ vai trò của mã nhị phân, còn định nghĩa bộ kiểm chứng cho thấy NP không có nghĩa là đã biết bài toán không thể giải đa thức."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 12 NP-Hardness",
          "relationship": "primary"
        },
        {
          "sourceId": "mit-6045-2020",
          "locator": "Lectures 13–14: Time Complexity; P and NP",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "cc-input-bits-models",
          "title": "Độ dài mã hóa và thời gian tính",
          "level": "core",
          "paragraphs": [
            "Độ dài đầu vào là số ký hiệu của một mã hóa hữu hạn đã chọn. Số nguyên W mã nhị phân cần Θ(log W) bit, trong khi mã nhất phân cần Θ(W), nên thuật toán O(nW) có thể giả đa thức với mã nhị phân nhưng đa thức với mã nhất phân. Lớp TIME(f(n)) được xét theo một mô hình máy đã xác định và cận thời gian trên mọi đầu vào dài n. Chuyển giữa các mô hình hợp lý thường bảo toàn tính đa thức, nhưng không cho phép bỏ chi phí của số nguyên dài tùy ý."
          ],
          "sources": [
            {
              "sourceId": "mit-6045-2020",
              "locator": "Lecture 13: Time Complexity",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 12: polynomial time and input encoding",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cc-p-np-verifiers",
          "title": "P, NP và chứng cứ kiểm được",
          "level": "core",
          "paragraphs": [
            "P gồm các ngôn ngữ có bộ quyết định tất định thời gian đa thức. NP có thể định nghĩa bằng bộ kiểm chứng đa thức V(x,y), trong đó chứng cứ y có độ dài bị chặn đa thức theo |x|, và x thuộc ngôn ngữ khi tồn tại y được chấp nhận. Một phép gán thỏa công thức SAT là ví dụ chứng cứ; kiểm một phép gán khác với tìm được phép gán. Định nghĩa tương đương dùng máy không đơn định, nhưng không có nghĩa máy thật thử mọi nhánh đồng thời mà không tốn tài nguyên."
          ],
          "sources": [
            {
              "sourceId": "mit-6045-2020",
              "locator": "Lecture 14: P and NP",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 12 NP-Hardness: P and NP",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cc-decision-search-conp-open",
          "title": "Quyết định, tìm kiếm, coNP và câu hỏi mở",
          "level": "core",
          "paragraphs": [
            "Bản quyết định của một bài toán tối ưu thường hỏi có nghiệm tốt hơn một ngưỡng hay không; quan hệ với tìm nghiệm cần một phép chuyển cụ thể chứ không chỉ đổi tên. Với SAT, gọi nhiều lần bộ quyết định để cố định từng biến cho phép khôi phục phép gán nếu tồn tại. coNP gồm những ngôn ngữ có phần bù thuộc NP, không phải tập các bài toán nằm ngoài NP. P⊆NP∩coNP, còn P=NP hay NP=coNP đều chưa được giải quyết; không được biến kết quả thực nghiệm chậm thành chứng minh tách lớp."
          ],
          "sources": [
            {
              "sourceId": "mit-6045-2020",
              "locator": "Lecture 14: P and NP; Lecture 17: coNP and Friends",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 12: decision and optimization",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Mã hóa đầu vào, lớp phức tạp thời gian, lớp P và lớp NP"
    },
    {
      "id": "cc-polynomial-reductions-cook-levin",
      "overview": [
        "Quy dẫn đa thức cho phép so sánh độ khó bằng một phép biến đổi đầu vào tính được hiệu quả. Chương này làm rõ chiều suy luận và hai phần khác nhau của chứng minh NP-đầy đủ: thuộc NP và NP-khó. Định lý Cook–Levin cung cấp điểm xuất phát cho mạng quy dẫn bằng cách mô tả một tính toán chấp nhận dưới dạng các ràng buộc Boolean cục bộ. Chuyển SAT sang dạng ba literal được xem qua biến phụ và tính tương đương về khả năng thỏa, tránh nhầm với giữ nguyên mọi phép gán trên các biến mới."
      ],
      "sources": [
        {
          "sourceId": "mit-6045-2020",
          "locator": "Lecture 15: Polynomial-Time Reductions; Cook–Levin; NP-completeness",
          "relationship": "primary"
        },
        {
          "sourceId": "mit-6045j-2011",
          "locator": "Lecture 16: NP-completeness",
          "relationship": "primary"
        },
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 12 NP-Hardness",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "cc-manyone-hard-complete",
          "title": "Quy dẫn nhiều-một và tính NP-đầy đủ",
          "level": "core",
          "paragraphs": [
            "A≤p B nghĩa là có hàm f tính trong thời gian đa thức với x∈A khi và chỉ khi f(x)∈B. Khi B∈P thì A∈P bằng hợp thành thuật toán. Để chứng minh B NP-khó, có thể chọn A đã NP-khó rồi dựng A≤p B, đồng thời kiểm kích thước đầu ra là đa thức. B NP-đầy đủ khi còn có B∈NP; một bài toán NP-khó không nhất thiết thuộc NP hay thậm chí quyết định được. Quy dẫn cho phép nhiều lời gọi oracle là khái niệm khác và phải được gọi tên riêng."
          ],
          "sources": [
            {
              "sourceId": "mit-6045-2020",
              "locator": "Lecture 15: Polynomial-Time Reductions",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 12: Reductions; NP-hardness and NP-completeness",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cc-cook-levin-tableau",
          "title": "Cook–Levin và bảng tính toán cục bộ",
          "level": "core",
          "paragraphs": [
            "Một tính toán đa thức của máy kiểm chứng có thể biểu diễn thành bảng theo thời gian và vị trí băng, với các biến Boolean mã hóa ký hiệu, trạng thái và vị trí đầu đọc. Các ràng buộc yêu cầu cấu hình đầu đúng, chuyển cục bộ hợp lệ và có chấp nhận. Nếu có nhánh chấp nhận thì tạo được phép gán thỏa; ngược lại phép gán thỏa mô tả một tính toán chấp nhận. Số ô và ràng buộc là đa thức theo độ dài đầu vào, nên phép dựng chứng minh mọi ngôn ngữ NP quy dẫn về SAT."
          ],
          "sources": [
            {
              "sourceId": "mit-6045-2020",
              "locator": "Lecture 15: Cook–Levin Theorem",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6045j-2011",
              "locator": "Lecture 16: NP-completeness",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cc-circuit-sat-to-3sat",
          "title": "Mạch Boolean, biến phụ và 3-SAT",
          "level": "core",
          "paragraphs": [
            "Mỗi cổng mạch có thể được gắn một biến phụ và các mệnh đề buộc biến đó bằng kết quả của cổng trên đầu vào. Thêm ràng buộc đầu ra đúng biến Circuit-SAT thành một công thức có kích thước tuyến tính theo mạch trong cách dựng chuẩn. Việc tách mệnh đề dài thành các mệnh đề ba literal cần biến phụ và chứng minh tồn tại cách gán mở rộng khi và chỉ khi công thức gốc thỏa được. Đó là equisatisfiability; hai công thức không nhất thiết tương đương trên mọi phép gán đầy đủ của tất cả biến."
          ],
          "sources": [
            {
              "sourceId": "mit-6045-2020",
              "locator": "Lecture 15: Cook–Levin and NP-completeness",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 12: Circuit Satisfiability; 3SAT",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Quy dẫn thời gian đa thức, tính NP-khó, NP-đầy đủ và Định lý Cook–Levin"
    },
    {
      "id": "cc-classic-np-complete-problems",
      "overview": [
        "Mạng bài toán NP-đầy đủ cho thấy nhiều yêu cầu ứng dụng khác nhau có thể mang cùng một dạng khó trong trường hợp xấu. Chương này nghiên cứu các phép biến đổi cụ thể từ công thức logic sang lựa chọn đỉnh, đi qua đồ thị, tô màu và cộng số. Mỗi phép dựng phải có giải thích cho cả hai chiều và cho kích thước đa thức. Những thay đổi nhỏ của đặc tả, chẳng hạn số màu hoặc mã hóa số, có thể đổi hẳn kết luận nên được giữ rõ thay vì gắn nhãn NP-khó cho cả một chủ đề."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 12 NP-Hardness",
          "relationship": "primary"
        },
        {
          "sourceId": "mit-6045-2020",
          "locator": "Lecture 16: Clique; Vertex Cover; Independent Set; Subset Sum; Knapsack",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "cc-independent-clique-cover",
          "title": "Independent Set, Clique và Vertex Cover",
          "level": "core",
          "paragraphs": [
            "Một tập độc lập không chứa hai đỉnh kề nhau; clique yêu cầu mọi cặp đỉnh khác nhau kề nhau; phủ đỉnh chạm mọi cạnh. Trong cùng đồ thị, phần bù của một tập độc lập là phủ đỉnh, nên ngưỡng k chuyển thành V−k. Tập độc lập trong G trở thành clique trong đồ thị bù, không phải cùng G. Dựng từ 3-SAT thường tạo các lựa chọn literal theo mệnh đề và cạnh cấm các lựa chọn mâu thuẫn; chứng minh phải cho thấy chọn đủ đỉnh tương ứng đúng một phép gán thỏa nhất quán."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 12: Independent Set; Clique; Vertex Cover",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6045-2020",
              "locator": "Lecture 16",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cc-hamilton-tsp-coloring",
          "title": "Hamilton, TSP và các bộ phận ràng buộc",
          "level": "core",
          "paragraphs": [
            "Một phép quy dẫn Hamilton sang TSP quyết định có thể gán chi phí một cho cạnh có thật và hai cho cạnh bổ sung trong đồ thị đầy đủ, rồi hỏi có chu trình chi phí không quá V hay không. Ngưỡng này buộc mọi cạnh được chọn phải là cạnh gốc. Các phép quy dẫn sang Hamilton hoặc 3-coloring dùng gadget để ép lựa chọn và truyền tính nhất quán; cần chứng minh gadget không có đường hoặc cách tô ngoài dự kiến. 2-coloring kiểm được bằng BFS, nên không suy tính khó chỉ từ việc bài toán cũng có từ tô màu."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 12: Hamiltonian Cycles; Traveling Salesman; Graph Coloring",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cc-subset-sum-weak-hardness",
          "title": "Subset Sum, ba lô và giả đa thức",
          "level": "core",
          "paragraphs": [
            "Subset Sum hỏi có tập con các số nguyên đầu vào có tổng đúng mục tiêu hay không; bản quyết định với số mã nhị phân là NP-đầy đủ. Quy hoạch động theo tổng mục tiêu có thời gian O(nW), giải thích vì sao kết quả không mâu thuẫn với NP-đầy đủ: W có thể hàm mũ theo số bit biểu diễn. Đây là ví dụ khó yếu trong phân loại chuẩn, khác tính NP-khó mạnh. Ba lô tối ưu và bản quyết định cần được phân biệt khi dùng nhãn lớp NP, vốn được định nghĩa cho ngôn ngữ quyết định."
          ],
          "sources": [
            {
              "sourceId": "mit-6045-2020",
              "locator": "Lecture 16: Subset Sum; Knapsack",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 12: Subset Sum and numerical reductions",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Hệ thống các bài toán NP-đầy đủ kinh điển và sai lầm thường gặp khi quy dẫn"
    },
    {
      "id": "cc-space-complexity-coping-strategies",
      "overview": [
        "Thời gian đã trôi không dùng lại được, nhưng bộ nhớ có thể được ghi đè nhiều lần, nên một thuật toán chậm vẫn có thể dùng ít chỗ. Chương này định nghĩa các lớp không gian, giải thích ý tưởng mô phỏng qua đồ thị cấu hình và đặt Savitch trong phạm vi giả thiết của định lý. Phần sau chuyển giới hạn lý thuyết thành lựa chọn thiết kế: hạn chế đầu vào, khai thác tham số, chấp nhận xấp xỉ hoặc sử dụng bộ giải tổng quát. Những lựa chọn ấy thay đổi yêu cầu bảo đảm chứ không xóa kết quả NP-khó."
      ],
      "sources": [
        {
          "sourceId": "mit-6045-2020",
          "locator": "Lectures 19–20: Space Complexity; PSPACE-complete problems",
          "relationship": "primary"
        },
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 12 NP-Hardness; Approximation Algorithms; Fast Exponential Algorithms",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "cc-space-l-pspace",
          "title": "Không gian làm việc, L và PSPACE",
          "level": "core",
          "paragraphs": [
            "Không gian làm việc đếm các ô cần sử dụng ngoài vùng đầu vào chỉ đọc khi nghiên cứu cận dưới tuyến tính; quy ước này cho phép định nghĩa L bằng O(log n) ô và NL bằng phiên bản không đơn định. PSPACE là hợp các lớp không gian đa thức. Duyệt mọi phép gán cho SAT có thể dùng lại một vùng lưu phép gán nên cần không gian đa thức dù tốn thời gian hàm mũ. Các bao hàm P⊆NP⊆PSPACE⊆EXPTIME không cho phép kết luận mỗi dấu bao hàm đều nghiêm ngặt."
          ],
          "sources": [
            {
              "sourceId": "mit-6045-2020",
              "locator": "Lecture 19: Measuring Space Complexity; PSPACE; EXPTIME",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cc-savitch-tqbf",
          "title": "Savitch và tính đầy đủ của TQBF",
          "level": "core",
          "paragraphs": [
            "Máy dùng s(n) chỗ có số cấu hình bị chặn hàm mũ theo s(n) trong mô hình thông thường. Ý tưởng Savitch kiểm tra khả đạt giữa hai cấu hình bằng đoán một cấu hình giữa rồi thử các khả năng tuần tự, tái sử dụng bộ nhớ. Với s(n)≥n trong phiên bản trình bày ở nguồn, mô phỏng cho NSPACE(s(n))⊆SPACE(s(n)²), suy ra PSPACE=NPSPACE. TQBF hỏi tính đúng của công thức Boolean có lượng từ; duyệt tuần tự cây lượng từ dùng chỗ đa thức, còn tính PSPACE-đầy đủ cho thấy nó đại diện độ khó của cả lớp."
          ],
          "sources": [
            {
              "sourceId": "mit-6045-2020",
              "locator": "Lecture 19: Savitch’s Theorem; Lecture 20: PSPACE-completeness and TQBF",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cc-fpt-special-cases-solvers",
          "title": "Trường hợp đặc biệt, tham số và bộ giải",
          "level": "extension",
          "paragraphs": [
            "Một bài toán NP-khó tổng quát có thể đa thức trên cây, miền kích thước nhỏ hoặc các ràng buộc cấu trúc thích hợp. Thuật toán FPT có thời gian f(k)n^c với c độc lập tham số k; n^k chỉ là dạng XP và có thể kém khi k tăng. Xấp xỉ đổi mục tiêu thành chất lượng có cận, còn heuristic không tự có bảo đảm ấy. SAT hoặc ILP chuyển công việc tìm kiếm cho bộ giải với nhiều kỹ thuật cắt tỉa; thành công thực tế vẫn cần kiểm nghiệm và không chứng minh thuật toán đa thức trên mọi trường hợp."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Fast Exponential Algorithms notes; Approximation Algorithms notes; Ch. 12 NP-Hardness",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Độ phức tạp không gian (L, PSPACE) và chiến lược giải quyết bài toán NP-khó"
    }
  ]
};
