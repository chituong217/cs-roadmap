export const COURSE_PROGRAMMING_LANGUAGES_FOUNDATIONS = {
  "id": "programming-languages-foundations",
  "code": "CS-21",
  "title": "Nền tảng ngôn ngữ lập trình",
  "blockId": "block-3",
  "level": "core",
  "prerequisites": [
    {
      "courseId": "object-oriented-programming",
      "type": "required",
      "reason": "Cần kinh nghiệm với một ngôn ngữ biên dịch tĩnh (C++) để đối chiếu các cơ chế ngôn ngữ."
    },
    {
      "courseId": "data-structures",
      "type": "required",
      "reason": "Cần cấu trúc cây (AST), bảng băm (bảng ký hiệu/môi trường) và ngăn xếp."
    },
    {
      "courseId": "formal-languages-computability",
      "type": "recommended",
      "reason": "Văn phạm phi ngữ cảnh (CFG) giúp hiểu rõ quá trình phân tích cú pháp (parsing)."
    }
  ],
  "overview": [
    "Môn học giải thích những cơ chế chung nằm sau các ngôn ngữ lập trình mà người học đã sử dụng: cách mã nguồn thành cấu trúc, cách tên được gắn với dữ liệu, cách lời gọi giữ môi trường và cách giá trị được quản lý trong khi chạy. Một bộ thông dịch nhỏ đóng vai trò mô hình xuyên suốt để nối cú pháp, đánh giá, scope, closure, trạng thái và lỗi. So sánh C++ với những ngôn ngữ động hoặc hàm giúp nhận ra các quyết định thiết kế có thể khác nhau, thay vì coi hành vi của ngôn ngữ quen thuộc là quy luật chung. Hệ thống kiểu được đặt bên cạnh ngữ nghĩa để hiểu kiểm tra tĩnh, suy luận và ý nghĩa giới hạn của an toàn kiểu. Phần cuối kết nối AST với các kiến trúc thực thi và nguyên lý thu gom rác. Đây là nền tảng về cơ chế ngôn ngữ, chưa thay khóa trình biên dịch hoàn chỉnh hoặc chứng minh hình thức cho mọi tính năng của một ngôn ngữ công nghiệp."
  ],
  "boundaries": [
    "Tập trung vào ngữ nghĩa ngôn ngữ và mô hình đánh giá; các kỹ thuật biên dịch tối ưu hóa mã máy, thanh ghi và SSA được đặt ở Nhánh chuyên sâu Compiler & Runtime (Khối VII).",
    "Nguồn Composing Programs được cố định ở Version 2 qua /pages/; Lox là mô hình động, không được dùng như nguồn chứng minh an toàn kiểu tĩnh."
  ],
  "sources": [
    {
      "sourceId": "composing-programs",
      "locator": "Version 2 (/pages/): §1.2–1.6; §2.4; §2.9; §3.3–3.5",
      "relationship": "primary"
    },
    {
      "sourceId": "crafting-interpreters",
      "locator": "Ch. 2, 4–11, 18, 26",
      "relationship": "primary"
    },
    {
      "sourceId": "cornell-cs6110-2011",
      "locator": "Lecture 26: Soundness of the Typing Rules",
      "relationship": "primary"
    },
    {
      "sourceId": "learncpp",
      "locator": "Function and class templates; specialization",
      "relationship": "primary"
    },
    {
      "sourceId": "sicp-comparison",
      "locator": "§1.1.5 The Substitution Model — Applicative order versus normal order; §4.2.2 An Interpreter with Lazy Evaluation — memoized thunks",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "plf-syntax-ast-evaluation",
      "overview": [
        "Một chương trình có nhiều cách viết bề mặt nhưng cần một cấu trúc rõ để xác định ý nghĩa. Chương này tách ký tự, token và cây cú pháp, rồi nghiên cứu cách một biểu thức được đánh giá thành giá trị hoặc tác động trạng thái. Ưu tiên toán tử quyết định cách nhóm, còn thứ tự đánh giá quyết định phần nào được tính trước; hai khái niệm không được đồng nhất. Các chiến lược háo hức, trì hoãn và đoản mạch được đối chiếu qua biểu thức có lỗi, tác dụng phụ hoặc không kết thúc."
      ],
      "sources": [
        {
          "sourceId": "composing-programs",
          "locator": "Version 2 (/pages/): §1.2 Elements of Programming; §1.5 Control; §3.4 Interpreters for Languages with Combination",
          "relationship": "primary"
        },
        {
          "sourceId": "crafting-interpreters",
          "locator": "Ch. 4 Scanning; Ch. 5 Representing Code; Ch. 6 Parsing Expressions; Ch. 7 Evaluating Expressions",
          "relationship": "primary"
        },
        {
          "sourceId": "sicp-comparison",
          "locator": "§1.1.5 The Substitution Model — Applicative order versus normal order; §4.2.2 An Interpreter with Lazy Evaluation — memoized thunks",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "plf-token-grammar-ast",
          "title": "Token, văn phạm và cây cú pháp trừu tượng",
          "level": "core",
          "paragraphs": [
            "Phân tích từ vựng nhóm ký tự thành token như tên, số và dấu toán tử; phân tích cú pháp dùng văn phạm để xác định quan hệ giữa các token. AST giữ cấu trúc có ý nghĩa cho các bước sau, có thể bỏ dấu ngoặc hoặc dấu phân cách đã được phản ánh bằng quan hệ cây. Trong 1+2*3, ưu tiên tạo nút cộng có con phải là phép nhân. Dòng và vị trí nguồn vẫn cần được giữ để báo lỗi rõ; lỗi token và lỗi cấu trúc thuộc hai giai đoạn khác nhau."
          ],
          "sources": [
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 4 Scanning; Ch. 5 Representing Code; Ch. 6 Parsing Expressions",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "plf-expression-statement-semantics",
          "title": "Biểu thức, câu lệnh và quy tắc đánh giá",
          "level": "core",
          "paragraphs": [
            "Biểu thức thường được đánh giá để tạo giá trị, còn câu lệnh tổ chức hiệu ứng và luồng điều khiển; ranh giới cụ thể phụ thuộc ngôn ngữ. Một quy tắc đánh giá cần nêu môi trường hiện tại, giá trị toán hạng và kết quả, chẳng hạn phép cộng chỉ chấp nhận các kiểu phù hợp trong ngôn ngữ đang xét. Big-step mô tả kết quả hoàn tất; small-step mô tả từng biến đổi nên thể hiện được diễn tiến trước khi dừng hoặc bị kẹt. Cả hai là mô hình ngữ nghĩa, không phải ảnh chụp mọi chi tiết CPU."
          ],
          "sources": [
            {
              "sourceId": "composing-programs",
              "locator": "Version 2 (/pages/): §1.2; §1.5; §3.4",
              "relationship": "primary"
            },
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 7 Evaluating Expressions; Ch. 8 Statements and State",
              "relationship": "primary"
            },
            {
              "sourceId": "cornell-cs6110-2011",
              "locator": "Lecture 26 §1: Operational Perspective",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "plf-eager-normal-lazy-shortcircuit",
          "title": "Thứ tự đánh giá, trì hoãn và đoản mạch",
          "level": "core",
          "paragraphs": [
            "Đánh giá háo hức tính đối số trước khi áp dụng hàm; normal-order ở mô hình lambda chọn phép rút gọn ngoài cùng trước, có thể tránh một đối số không bao giờ dùng. Call-by-need lưu kết quả đối số trì hoãn để không tính lại, nên không chỉ là tên khác của normal-order. Khi có tác dụng phụ hoặc ngoại lệ, khác biệt thứ tự trở nên quan sát được. Đoản mạch của and/or là quy tắc riêng chỉ đánh giá toán hạng sau khi cần; không thể triển khai như hàm háo hức thông thường mà vẫn giữ hành vi."
          ],
          "sources": [
            {
              "sourceId": "composing-programs",
              "locator": "Version 2 (/pages/): §1.5 Control; §3.5 Interpreters for Languages with Abstraction",
              "relationship": "primary"
            },
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 9 Control Flow: Logical Operators",
              "relationship": "primary"
            },
            {
              "sourceId": "sicp-comparison",
              "locator": "§1.1.5 The Substitution Model — Applicative order versus normal order; §4.2.2 An Interpreter with Lazy Evaluation — memoized thunks",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Cú pháp bề mặt, Cây cú pháp trừu tượng (AST) và thứ tự đánh giá biểu thức"
    },
    {
      "id": "plf-environments-scope-closures",
      "overview": [
        "Tên biến không tự chứa giá trị; ý nghĩa của nó phụ thuộc cách ngôn ngữ liên kết tên với nơi lưu hoặc đối tượng. Chương này dùng khung môi trường để mô tả lời gọi, tra cứu tên và che khuất, rồi xây lexical scope và closure. Tầm vực được phân biệt với thời gian sống: một biến ra khỏi khối cú pháp không buộc dữ liệu mà closure giữ phải biến mất. Các ví dụ hàm trả về hàm tạo cầu nối từ mã nguồn quen thuộc sang cơ chế chạy của hàm bậc cao."
      ],
      "sources": [
        {
          "sourceId": "composing-programs",
          "locator": "Version 2 (/pages/): §1.3 Defining New Functions; §1.6 Higher-Order Functions; §3.5",
          "relationship": "primary"
        },
        {
          "sourceId": "crafting-interpreters",
          "locator": "Ch. 8 Statements and State; Ch. 10 Functions; Ch. 11 Resolving and Binding",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "plf-environment-store-bindings",
          "title": "Khung môi trường, che khuất và nơi lưu",
          "level": "core",
          "paragraphs": [
            "Một môi trường ánh xạ tên tới liên kết; trong mô hình có biến khả biến, liên kết có thể trỏ tới một vị trí trong kho lưu trữ, còn kho ánh xạ vị trí tới giá trị. Tách hai tầng giải thích vì sao phép gán thay giá trị mà không nhất thiết tạo một biến mới. Khung lời gọi có tham số và biến cục bộ cùng liên kết đến môi trường ngoài. Tên cục bộ có thể che tên ngoài, nhưng khai báo mới, gán lại và thay đổi đối tượng đang trỏ tới là ba thao tác có ý nghĩa khác nhau."
          ],
          "sources": [
            {
              "sourceId": "composing-programs",
              "locator": "Version 2 (/pages/): §1.3.1 Environments; §1.6 Higher-Order Functions",
              "relationship": "primary"
            },
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 8 Statements and State: Environments",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "plf-lexical-dynamic-scope",
          "title": "Tầm vực tĩnh và tầm vực động",
          "level": "core",
          "paragraphs": [
            "Lexical scope tra tên theo các vùng định nghĩa trong mã nguồn và môi trường nơi hàm được tạo; dynamic scope tìm theo chuỗi các lời gọi đang hoạt động. Một hàm được gọi từ nơi có biến cùng tên vì vậy có thể cho kết quả khác dưới hai chính sách. Độ sâu tra cứu theo lexical scope có thể được xác định ở bước phân giải tên trước khi chạy. Tầm vực nói vị trí mã nào dùng được một liên kết, còn thời gian sống nói lúc nào liên kết hoặc vùng lưu vẫn tồn tại trong quá trình thực thi."
          ],
          "sources": [
            {
              "sourceId": "composing-programs",
              "locator": "Version 2 (/pages/): §1.6 Higher-Order Functions; §3.5",
              "relationship": "primary"
            },
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 11 Resolving and Binding: Static Scope",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "plf-closures-higher-order",
          "title": "Closure và hàm bậc cao",
          "level": "core",
          "paragraphs": [
            "Hàm bậc cao nhận hàm làm đối số hoặc trả hàm làm kết quả. Closure ghép phần mã hàm với môi trường cần cho các tên tự do của nó, nên hàm có thể tiếp tục sử dụng dữ liệu từ lần gọi đã kết thúc. Hai lần gọi hàm tạo bộ đếm có thể sinh hai môi trường độc lập; hai closure tạo cùng lần gọi có thể chia sẻ một vị trí khả biến. Cách chụp theo giá trị, theo tham chiếu hay giữ liên kết là lựa chọn của ngôn ngữ, cần phân tích riêng thay vì áp mọi hành vi Python cho lambda C++."
          ],
          "sources": [
            {
              "sourceId": "composing-programs",
              "locator": "Version 2 (/pages/): §1.6.1 Functions as Arguments; §1.6.5 Functions as Returned Values; §3.5",
              "relationship": "primary"
            },
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 10 Functions: Local Functions and Closures",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Mô hình môi trường, tầm vực tĩnh (Lexical Scope) và Bao đóng (Closures)"
    },
    {
      "id": "plf-state-mutation-type-systems",
      "overview": [
        "Trạng thái khả biến làm hành vi một đoạn mã phụ thuộc lịch sử và cách các tên chia sẻ đối tượng. Chương này bắt đầu từ định danh, bằng nhau và alias để giải thích lợi ích cũng như giới hạn của dữ liệu bất biến. Sau đó hệ thống kiểu được giới thiệu như các quy tắc dự đoán những thao tác nào hợp lệ trước hoặc trong khi chạy. An toàn kiểu là thuộc tính giữa quy tắc kiểu và ngữ nghĩa đánh giá của một mô hình, không phải lời hứa chương trình đúng mọi yêu cầu nghiệp vụ."
      ],
      "sources": [
        {
          "sourceId": "composing-programs",
          "locator": "Version 2 (/pages/): §2.4 Mutable Data; §2.7 Object Abstraction",
          "relationship": "primary"
        },
        {
          "sourceId": "crafting-interpreters",
          "locator": "Ch. 7: Design Note Static and Dynamic Typing",
          "relationship": "primary"
        },
        {
          "sourceId": "cornell-cs6110-2011",
          "locator": "Lecture 26 §1: Soundness from the Operational Perspective",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "plf-alias-identity-immutability",
          "title": "Alias, định danh và dữ liệu bất biến",
          "level": "core",
          "paragraphs": [
            "Hai tên có thể trỏ cùng một đối tượng, gọi là alias; sửa đối tượng qua một tên có thể được quan sát qua tên còn lại. Bằng nhau so sánh nội dung theo định nghĩa của kiểu, còn đồng nhất hỏi có phải cùng đối tượng hay không. Sao chép nông tạo vỏ mới nhưng có thể vẫn chia sẻ đối tượng con. Bất biến ngăn thay đổi một giá trị sau khi tạo, cho phép chia sẻ cấu trúc an toàn hơn; tuy nhiên một vỏ không đổi chứa tham chiếu tới dữ liệu đổi được chưa phải bất biến sâu."
          ],
          "sources": [
            {
              "sourceId": "composing-programs",
              "locator": "Version 2 (/pages/): §2.4 Mutable Data: Identity; Mutation; Lists and Dictionaries",
              "relationship": "primary"
            },
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 8 Statements and State",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "plf-static-dynamic-inference",
          "title": "Kiểm tra kiểu tĩnh, kiểu động và suy luận",
          "level": "core",
          "paragraphs": [
            "Kiểm tra kiểu tĩnh suy ra hoặc kiểm các phán đoán kiểu trước khi thực thi, còn kiểm tra động xét kiểu giá trị tại thao tác khi chạy. Ngôn ngữ có thể kết hợp hai cơ chế; không khai báo kiểu không tự có nghĩa là kiểu động vì kiểu có thể được suy luận. Suy luận kiểu xây ràng buộc từ cấu trúc biểu thức rồi giải chúng trong một hệ quy tắc cụ thể. Các từ mạnh hoặc yếu được dùng không thống nhất, nên cần nói rõ phép ép kiểu, kiểm tra và lỗi nào thực sự được cho phép."
          ],
          "sources": [
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 7 Evaluating Expressions: Design Note Static and Dynamic Typing",
              "relationship": "primary"
            },
            {
              "sourceId": "cornell-cs6110-2011",
              "locator": "Lecture 26: typing judgments and operational soundness",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "plf-progress-preservation",
          "title": "An toàn kiểu, tiến triển và bảo toàn",
          "level": "core",
          "paragraphs": [
            "Trong mô hình ngôn ngữ nhỏ đã xác định quy tắc, tiến triển nói biểu thức đóng có kiểu hoặc đã là giá trị hoặc còn thực hiện được một bước. Bảo toàn nói bước đánh giá giữ tính có kiểu thích hợp. Kết hợp hai điều kiện ngăn chương trình có kiểu rơi vào trạng thái bị kẹt do thiếu quy tắc đánh giá. Kết luận này không bảo đảm dừng, tránh mọi ngoại lệ hay thỏa đặc tả ứng dụng. Với tham chiếu và bộ nhớ, phát biểu phải được mở rộng cho kiểu của kho lưu trữ; không tự áp định lý ngôn ngữ nhỏ cho toàn bộ C++."
          ],
          "sources": [
            {
              "sourceId": "cornell-cs6110-2011",
              "locator": "Lecture 26 §1: Lemma 2 Type Preservation; Lemma 3 Progress",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "plf-parametric-ad-hoc-polymorphism",
          "title": "Đa hình tham số và giới hạn so sánh ngôn ngữ",
          "level": "extension",
          "paragraphs": [
            "Đa hình tham số cho một định nghĩa hoạt động đồng đều trên nhiều kiểu, ví dụ hàm trả lại đối số cùng kiểu đã nhận. Ràng buộc kiểu có thể chỉ yêu cầu những phép toán cụ thể như so sánh hoặc sao chép. Đa hình do nạp chồng chọn cách thực hiện theo kiểu là cơ chế khác. Template C++ có thể dùng chuyên biệt hóa và các phép phụ thuộc kiểu, nên không mặc nhiên mang mọi định lý đồng đều của đa hình tham số thuần. Mức này phân biệt mục đích và cơ chế; hệ suy luận đa hình đầy đủ được dành cho phần ngôn ngữ nâng cao."
          ],
          "sources": [
            {
              "sourceId": "learncpp",
              "locator": "Function templates; Class templates; Template specialization",
              "relationship": "primary"
            },
            {
              "sourceId": "cornell-cs6110-2011",
              "locator": "Lecture 26: typed functions and preservation",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Trạng thái khả biến, tính bất biến và Hệ thống kiểu dữ liệu"
    },
    {
      "id": "plf-interpreters-runtime-models",
      "overview": [
        "Thông dịch là nơi các khái niệm cú pháp, môi trường, giá trị và luồng điều khiển được ghép thành một chương trình có thể chạy. Chương này nghiên cứu bộ thông dịch đi trên AST để thấy rõ cơ chế trước khi so sánh với máy bytecode, biên dịch và JIT. Việc tạo môi trường và đối tượng mới dẫn tới nhu cầu xác định dữ liệu nào còn sống. Đếm tham chiếu và tracing được đối chiếu theo thông tin chúng dùng để thu hồi bộ nhớ, đồng thời tách việc thu hồi bộ nhớ khỏi quản lý tài nguyên bên ngoài."
      ],
      "sources": [
        {
          "sourceId": "composing-programs",
          "locator": "Version 2 (/pages/): §3.3 Exceptions; §3.4; §3.5; §2.9 Recursive Objects: Garbage Collection",
          "relationship": "primary"
        },
        {
          "sourceId": "crafting-interpreters",
          "locator": "Ch. 7–10; Ch. 18 Types of Values; Ch. 26 Garbage Collection",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "plf-eval-apply-values",
          "title": "Eval–Apply và biểu diễn giá trị",
          "level": "core",
          "paragraphs": [
            "Eval phân tích dạng AST để tính biểu thức trong một môi trường; Apply nhận hàm và các đối số rồi thực hiện phép nguyên thủy hoặc đánh giá thân trong khung mới. Giá trị lúc chạy cần biểu diễn đủ loại số, Boolean, chuỗi, hàm và đối tượng của ngôn ngữ, có thể qua kiểu có thẻ hoặc đối tượng của ngôn ngữ chủ. Một lỗi kiểu trong chương trình khách phải được chuyển thành lỗi của ngôn ngữ khách, thay vì vô tình làm lộ ngoại lệ hoặc quy tắc ép kiểu của ngôn ngữ cài đặt."
          ],
          "sources": [
            {
              "sourceId": "composing-programs",
              "locator": "Version 2 (/pages/): §3.4 Interpreters for Languages with Combination; §3.5 Interpreters for Languages with Abstraction",
              "relationship": "primary"
            },
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 7 Evaluating Expressions; Ch. 10 Functions; Ch. 18 Types of Values",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "plf-control-runtime-architectures",
          "title": "Luồng điều khiển và các kiến trúc thực thi",
          "level": "core",
          "paragraphs": [
            "Câu lệnh điều kiện và vòng lặp quyết định AST nào được đánh giá tiếp; return phải thoát đúng lời gọi hàm đang thực hiện dù nằm trong nhiều khối lồng nhau. Bộ thông dịch có thể dùng một tín hiệu điều khiển riêng hoặc ngoại lệ nội bộ để truyền việc thoát ấy. Biên dịch chuyển chương trình sang biểu diễn khác, còn thông dịch thực thi một biểu diễn; hai cơ chế có thể kết hợp trong máy bytecode hoặc JIT. Vì vậy gọi một ngôn ngữ là biên dịch hay thông dịch chỉ là mô tả cách triển khai thường gặp, không phải bản chất duy nhất của ngôn ngữ."
          ],
          "sources": [
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 2 A Map of the Territory; Ch. 9 Control Flow; Ch. 10 Functions: Return Statements",
              "relationship": "primary"
            },
            {
              "sourceId": "composing-programs",
              "locator": "Version 2 (/pages/): §3.3 Exceptions; §3.5",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "plf-gc-roots-cycles",
          "title": "Đếm tham chiếu, tracing và tập gốc",
          "level": "core",
          "paragraphs": [
            "Đếm tham chiếu thu hồi đối tượng khi không còn tham chiếu sở hữu, nhưng chu trình có thể giữ số đếm dương dù không còn đường từ chương trình tới chúng. Mark-and-sweep bắt đầu từ tập gốc như biến toàn cục, ngăn xếp và môi trường đang sống, đánh dấu mọi đối tượng khả đạt rồi quét thu hồi phần không đánh dấu. Tập gốc thiếu một liên kết sống có thể làm thu hồi nhầm dữ liệu. GC xử lý bộ nhớ không còn khả đạt, không tự bảo đảm đóng file hoặc giải phóng khóa đúng thời điểm; các tài nguyên ấy cần chính sách riêng."
          ],
          "sources": [
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 26 Garbage Collection: Reachability; Marking the Roots; Sweeping Unused Objects",
              "relationship": "primary"
            },
            {
              "sourceId": "composing-programs",
              "locator": "Version 2 (/pages/): §2.9 Recursive Objects: Garbage Collection",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Kiến trúc bộ thông dịch (Tree-Walk Interpreter) và quản lý bộ nhớ tự động"
    }
  ]
};
