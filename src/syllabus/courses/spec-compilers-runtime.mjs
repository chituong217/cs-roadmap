export const COURSE_SPEC_COMPILERS_RUNTIME = {
  "id": "spec-compilers-runtime",
  "code": "CS-45",
  "title": "Chuyên sâu Ngôn ngữ, Trình biên dịch và Máy ảo",
  "blockId": "block-7",
  "level": "specialization",
  "prerequisites": [
    {
      "courseId": "programming-languages-foundations",
      "type": "required",
      "reason": "Cần nắm vững AST, tầm vực tĩnh, bao đóng (closures) và bộ thông dịch duyệt cây."
    },
    {
      "courseId": "computer-architecture",
      "type": "required",
      "reason": "Cần hiểu thanh ghi, ngăn xếp phần cứng, lệnh nhảy và bố cục bộ nhớ."
    },
    {
      "courseId": "formal-languages-computability",
      "type": "required",
      "reason": "Cần nắm otomat hữu hạn và văn phạm phi ngữ cảnh."
    }
  ],
  "overview": [
    "Nhánh chuyên sâu này phát triển một đường đi từ mã nguồn tới thực thi để hiểu những hợp đồng giữa front-end, biểu diễn mã và runtime. Pratt parsing, phân giải scope và chẩn đoán nối văn phạm với ngữ nghĩa; bytecode và máy ảo ngăn xếp thể hiện cách mã được lưu và chạy; closure cùng upvalue giải quyết biến vượt thời gian sống khung gọi. Phần IR và SSA bổ sung một mô hình cho phân tích tối ưu hóa mà không gán những nội dung ấy cho cuốn Crafting Interpreters. Thu gom rác được xem như một thuật toán duy trì tính sống của đối tượng trong mọi điểm có thể cấp phát. Các mô hình nhỏ giúp quan sát bất biến và kiểm hành vi trước khi tiếp cận hệ công nghiệp. Mục tiêu là hiểu các quyết định thiết kế và giới hạn, không tuyên bố một trình biên dịch giảng dạy giải thích đầy đủ mọi ngôn ngữ, mọi chiến lược JIT hay mọi cơ chế quản lý bộ nhớ hiện đại."
  ],
  "boundaries": [
    "Nhánh tự chọn sau nền ngôn ngữ và hệ thống; Lox cung cấp mô hình bytecode/closure/GC, LLVM cung cấp IR/SSA và tối ưu. Chưa bao quát backend máy đích, register allocation hoặc chứng minh compiler đầy đủ."
  ],
  "sources": [
    {
      "sourceId": "crafting-interpreters",
      "locator": "Ch. 6, 11, 14–26, 30",
      "relationship": "primary"
    },
    {
      "sourceId": "llvm-language-reference",
      "locator": "LangRef: basic blocks, phi, fast-math; Kaleidoscope tutorial Ch. 3–7",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "scr-frontend-pratt-semantic-resolution",
      "overview": [
        "Front-end chuyển mã nguồn thành cấu trúc có ý nghĩa và phát hiện lỗi trước khi chương trình chạy. Chương này nối phân tích từ vựng, Pratt parsing, phân giải tên và kiểm tra ngữ nghĩa trong một ngôn ngữ nhỏ, giữ ranh giới giữa cú pháp đúng và chương trình hợp lệ. Thông tin vị trí nguồn được đi theo cấu trúc để báo lỗi có ích. Khôi phục sau lỗi là một quyết định thiết kế nhằm đưa ra thêm chẩn đoán đáng tin, không phải bỏ qua lỗi rồi tiếp tục sinh mã như thể không có vấn đề."
      ],
      "sources": [
        {
          "sourceId": "crafting-interpreters",
          "locator": "Ch. 11 Resolving and Binding; Ch. 16 Scanning on Demand; Ch. 17 Compiling Expressions",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "scr-pratt-binding-power",
          "title": "Pratt parsing và sức liên kết toán tử",
          "level": "specialization",
          "paragraphs": [
            "Pratt parser dùng các hàm xử lý token ở vị trí tiền tố hoặc trung tố và một mức precedence để quyết định biểu thức con còn được đọc tiếp tới đâu. Điều này cho phép dùng cùng khung cho số, dấu âm, ngoặc, toán tử hai ngôi và lời gọi. Tính kết hợp được thể hiện qua ngưỡng dùng khi đọc vế phải: phép trừ trái và phép gán phải không dùng cùng quy tắc. Một bảng token đúng vẫn cần kiểm token thiếu, toán tử không có vế và kết thúc biểu thức để không tạo cây sai hoặc vòng lặp parser."
          ],
          "sources": [
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 17 Compiling Expressions: A Pratt Parser; Parsing Infix Expressions",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scr-semantic-binding-context",
          "title": "Phân giải tên và ngữ cảnh ngữ nghĩa",
          "level": "specialization",
          "paragraphs": [
            "Phân giải tĩnh nối mỗi lần dùng tên với khai báo theo lexical scope, phát hiện biến chưa khai báo hoặc đọc biến trong khởi tạo chưa hoàn tất theo luật ngôn ngữ. Khoảng cách môi trường có thể được tính trước để lúc chạy không tra lại mọi khung. Kiểm tra ngữ cảnh còn xử lý return ngoài hàm, break ngoài vòng lặp và những hạn chế tương ứng. Đây không tự là hệ kiểm tra kiểu đầy đủ; Lox động và một ngôn ngữ có kiểu tĩnh cần các pha hoặc quy tắc khác nhau cho kiểu biểu thức và hàm."
          ],
          "sources": [
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 11 Resolving and Binding: Semantic Analysis; Resolving Variable Accesses",
              "relationship": "primary"
            },
            {
              "sourceId": "llvm-language-reference",
              "locator": "Kaleidoscope tutorial Ch. 3 Code Generation to LLVM IR; Ch. 5 Control Flow",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scr-error-recovery-source-maps",
          "title": "Chẩn đoán và phục hồi parser",
          "level": "specialization",
          "paragraphs": [
            "Một lỗi cú pháp có thể kéo theo nhiều thông báo giả nếu parser tiếp tục từ một trạng thái không còn khớp văn phạm. Panic-mode recovery bỏ token tới các ranh giới đồng bộ như dấu kết thúc câu hoặc token mở câu mới, rồi tiếp tục từ trạng thái được biết. Cần giữ thông báo đầu, vị trí, token mong đợi và phân biệt lỗi kéo theo. Sinh mã khi còn lỗi không được làm tạo bytecode có thể chạy tùy tiện; bộ biên dịch phải trả trạng thái thất bại rõ và không công bố artifact như đã hợp lệ."
          ],
          "sources": [
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 6 Parsing Expressions: Panic Mode Error Recovery; Ch. 17: Parsing errors",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Kiến trúc Front-End: Phân tích cú pháp Pratt, Phân giải tĩnh và Kiểm tra ngữ nghĩa"
    },
    {
      "id": "scr-bytecode-vm-closures-upvalues",
      "overview": [
        "Máy ảo bytecode tách biểu diễn mã gọn khỏi cấu trúc cây cấp phát nhiều nút, nhưng cần một hợp đồng rõ cho mỗi lệnh. Chương này xây ngăn xếp giá trị, khung gọi và cơ chế biến cục bộ trước khi hỗ trợ closure vượt thời gian sống một khung. Những lợi ích hiệu năng có thể đến từ tính cục bộ và giảm công việc phân phối, song phải được đo thay vì giả định bytecode luôn nhanh hơn. Bộ biên dịch và máy ảo phải thống nhất độ rộng toán hạng, hiệu ứng ngăn xếp và quyền sở hữu giá trị."
      ],
      "sources": [
        {
          "sourceId": "crafting-interpreters",
          "locator": "Ch. 14–15 Chunks of Bytecode and VM; Ch. 18 Types of Values; Ch. 22–25 Locals, Calls and Closures",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "scr-bytecode-dispatch-stack",
          "title": "Chunk, constant pool và vòng dispatch",
          "level": "specialization",
          "paragraphs": [
            "Chunk chứa dãy lệnh cùng toán hạng, thường có bảng hằng và thông tin liên hệ vị trí nguồn. Instruction pointer chỉ lệnh tiếp theo; vòng dispatch giải mã rồi áp dụng hiệu ứng lên ngăn xếp hoặc luồng điều khiển. Lệnh cộng có thể lấy hai giá trị và đẩy kết quả, nên compiler cần theo dõi chiều cao ngăn xếp ở mọi nhánh. Nhảy phải tới ranh giới lệnh hợp lệ và các đường hợp cần trạng thái tương thích. Bytecode từ bên ngoài còn cần kiểm định hoặc ranh giới tin cậy riêng, không mặc nhiên an toàn vì chạy trong VM."
          ],
          "sources": [
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 14 Chunks of Bytecode; Ch. 15 A Virtual Machine; Ch. 23 Jumping Back and Forth",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scr-call-frames-locals",
          "title": "Khung gọi, biến cục bộ và trở về",
          "level": "specialization",
          "paragraphs": [
            "Một khung gọi giữ hàm đang chạy, vị trí tiếp tục và đáy vùng slot của lời gọi trên ngăn xếp. Biến cục bộ được truy cập bằng offset thay vì tra bảng băm mỗi lần khi scope đã phân giải. Lời gọi kiểm số đối số theo luật ngôn ngữ rồi chuyển khung; return phục hồi khung trước và đặt kết quả vào vị trí phù hợp. Đệ quy tạo nhiều khung cho cùng một hàm, vì vậy slot tuyệt đối cố định cho biến của hàm không đủ. Cận ngăn xếp và báo lỗi tràn cần được coi là hành vi được quản lý."
          ],
          "sources": [
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 22 Local Variables; Ch. 24 Calls and Functions",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scr-open-closed-upvalues",
          "title": "Upvalue mở, đóng và chia sẻ biến",
          "level": "specialization",
          "paragraphs": [
            "Closure có thể cần một biến cục bộ sau khi hàm tạo nó đã trả về. Upvalue mở tham chiếu tới slot còn sống trên stack; khi khung hoặc scope sắp hết, giá trị được chuyển sang vùng heap và upvalue đổi nơi trỏ, trở thành đóng. Nhiều closure chụp cùng một biến phải chia sẻ cùng vị trí logic để quan sát phép gán nhất quán. Sao chép giá trị riêng cho mỗi closure sẽ đổi ngữ nghĩa. Danh sách upvalue và thứ tự đóng cần giữ đúng cả khi thoát sớm hoặc quay khỏi nhiều scope."
          ],
          "sources": [
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 25 Closures: Upvalues; Closed Upvalues; Closing Upvalues",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Biểu diễn mã Byte (Bytecode Chunk), Kiến trúc Máy ảo Ngăn xếp và Cơ chế Upvalues"
    },
    {
      "id": "scr-ir-dataflow-gc-runtime",
      "overview": [
        "Biểu diễn trung gian giúp tách ngôn ngữ bề mặt khỏi các phép phân tích và biến đổi mã, trong khi runtime quản lý những đối tượng còn sống ngoài ngăn xếp. Chương này giới thiệu CFG và SSA đủ để hiểu một số tối ưu hóa cục bộ và luồng dữ liệu, rồi nghiên cứu tracing GC và điểm cần bảo vệ khi cấp phát. Hai mảng đều dựa trên bất biến phải giữ qua biến đổi trạng thái. Một chương trình tính nhanh hơn nhưng đổi tác dụng phụ hoặc một GC thu nhầm đối tượng còn dùng đều là sai ngữ nghĩa."
      ],
      "sources": [
        {
          "sourceId": "llvm-language-reference",
          "locator": "Language Reference: functions, basic blocks, phi; Kaleidoscope Ch. 4–7",
          "relationship": "primary"
        },
        {
          "sourceId": "crafting-interpreters",
          "locator": "Ch. 26 Garbage Collection; Ch. 30 Optimization",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "scr-cfg-ssa-phi",
          "title": "Basic block, CFG và SSA",
          "level": "specialization",
          "paragraphs": [
            "Basic block là một chuỗi lệnh có luồng đi vào tại đầu và kết thúc bằng chuyển điều khiển; các cạnh giữa block tạo control-flow graph. SSA đặt mỗi tên giá trị chỉ được định nghĩa một lần, giúp theo dõi nguồn dữ liệu rõ hơn; phi tại điểm hợp chọn giá trị theo cạnh tiền nhiệm thực sự đã đi qua. Phi không phải phép lấy trung bình hay hàm được gọi đánh giá cả hai nhánh. Biến bộ nhớ khả biến vẫn cần mô hình load/store và phân tích alias, nên SSA của các giá trị thanh ghi không làm toàn chương trình trở thành bất biến."
          ],
          "sources": [
            {
              "sourceId": "llvm-language-reference",
              "locator": "LangRef: Function Structure; phi instruction; Kaleidoscope tutorial Ch. 5 Control Flow and SSA",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scr-dataflow-optimizations-semantics",
          "title": "Lan truyền hằng, mã chết và giữ ngữ nghĩa",
          "level": "specialization",
          "paragraphs": [
            "Lan truyền hằng thay một giá trị bằng hằng khi phân tích chứng minh nó cố định trên các đường liên quan; loại mã chết bỏ tính toán không còn ảnh hưởng quan sát được. Một lời gọi không dùng kết quả vẫn có thể ghi file hoặc ném lỗi, nên không được xóa chỉ vì không có người dùng giá trị trả về. Gộp biểu thức cần biết alias, tác dụng phụ và luật số học. Với float, tái kết hợp có thể đổi làm tròn hoặc NaN; các giả thiết fast-math phải được công bố thay vì coi đại số số thực luôn đúng cho mọi phép máy."
          ],
          "sources": [
            {
              "sourceId": "llvm-language-reference",
              "locator": "Kaleidoscope Ch. 4: Optimization Passes; LangRef: Fast-Math Flags; Memory Model",
              "relationship": "primary"
            },
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 30 Optimization",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scr-tricolor-roots-allocation",
          "title": "Tracing ba màu và an toàn khi cấp phát",
          "level": "specialization",
          "paragraphs": [
            "Mark-and-sweep có thể diễn giải bằng màu trắng chưa biết khả đạt, xám đã gặp nhưng chưa quét hết liên kết, và đen đã quét. Trong bộ thu stop-the-world cơ bản, đánh dấu từ tập gốc rồi xử lý xám tới khi hết trước khi thu trắng. Đối tượng mới hoặc giá trị tạm đang xây phải được đặt vào một gốc mà GC nhìn thấy nếu thao tác cấp phát có thể kích hoạt thu gom. Bỏ sót một giá trị tạm có thể tạo use-after-free dù logic chương trình khách đúng. Bộ thu tăng dần hoặc đồng thời cần thêm barrier và bất biến mạnh hơn, không tự có từ bản đơn giản."
          ],
          "sources": [
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 26 Garbage Collection: Reachability; Marking the Roots; Tracing Object References; Sweeping",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "scr-runtime-profiling-boundaries",
          "title": "Đo runtime và kiểm ngữ nghĩa qua nhiều tầng",
          "level": "specialization",
          "paragraphs": [
            "Đo riêng thời gian parse, compile, thực thi và GC giúp xác định nút thắt thay vì tối ưu vòng dispatch theo trực giác. Các chương trình chuẩn nhỏ có thể đối chiếu kết quả giữa tree-walk và bytecode để phát hiện lệch ngữ nghĩa, nhưng cần cả ngoại lệ, closure và tác dụng phụ thay vì chỉ biểu thức số. Thay biểu diễn value hoặc cách lưu chuỗi có thể ảnh hưởng cache, bộ nhớ và GC cùng lúc. JIT, đăng ký thanh ghi, tối ưu liên thủ tục và GC thế hệ là các hướng học tiếp, không được suy rằng một VM Lox đã bao quát cách mọi runtime công nghiệp vận hành."
          ],
          "sources": [
            {
              "sourceId": "crafting-interpreters",
              "locator": "Ch. 30 Optimization",
              "relationship": "primary"
            },
            {
              "sourceId": "llvm-language-reference",
              "locator": "Kaleidoscope Ch. 4 Adding JIT and Optimizer Support",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Biểu diễn trung gian (IR/SSA), Tối ưu hóa luồng dữ liệu và Thu gom rác (Garbage Collection)"
    }
  ]
};
