export const COURSE_SPEC_SECURITY_ADVANCED = {
  "id": "spec-security-advanced",
  "code": "CS-49",
  "title": "Chuyên sâu Bảo mật hệ thống, Ứng dụng và Mạng",
  "blockId": "block-7",
  "level": "specialization",
  "prerequisites": [
    {
      "courseId": "security-privacy",
      "type": "required",
      "reason": "Cần nắm vững mô hình đe dọa, mật mã ứng dụng cơ sở và các lớp lỗ hổng phổ biến."
    },
    {
      "courseId": "linux-system-programming",
      "type": "required",
      "reason": "Cần hiểu tệp thực thi ELF, lời gọi hệ thống, mô tả tệp và tín hiệu."
    },
    {
      "courseId": "computer-networks",
      "type": "required",
      "reason": "Cần nắm chắc TCP/IP, DNS, định tuyến và TLS."
    }
  ],
  "overview": [
    "Nhánh bảo mật nâng cao kết nối phân tích nhị phân, giao thức và kiểm soát quyền trong kiến trúc ứng dụng với khả năng phát hiện và ứng phó sự cố. Mỗi cơ chế được đặt dưới một mô hình đe dọa: hardening giảm một số đường vi phạm bộ nhớ, fuzzing và phân tích ký hiệu tìm đầu vào hoặc đường lỗi, TLS bảo vệ kênh trong điều kiện xác thực đúng, còn policy quyết định hành động hợp lệ trên tài nguyên. Môn học làm rõ vì sao có một lớp phòng vệ không xóa yêu cầu ở các lớp còn lại. OAuth/OIDC, PKCE, JWT và zero trust được phân biệt theo vai trò, tránh dùng những tên công nghệ như chứng nhận an toàn. Phần kiểm toán và nhật ký tổ chức bằng chứng, giới hạn kết luận và khôi phục có kiểm. Đây là hướng chuyên sâu về cơ chế phòng vệ và kiểm thử trong phạm vi có quyền; chưa thay thế mọi chuyên ngành mật mã, pháp chứng hoặc bảo đảm an toàn cho một sản phẩm cụ thể."
  ],
  "boundaries": [
    "Nhánh chuyên sâu tự chọn; tuân thủ tuyệt đối nguyên tắc đạo đức và pháp luật: chỉ thực hành kiểm thử bảo mật trên môi trường cô lập hoặc tài sản có sự cho phép rõ ràng bằng văn bản.",
    "Các bảo đảm TLS được gắn chế độ handshake/PSK/0-RTT cụ thể. Không suy tính an toàn toàn hệ thống từ sanitizer, coverage hoặc một token xác thực thành công."
  ],
  "sources": [
    {
      "sourceId": "owasp-cheatsheets",
      "locator": "C-Based Toolchain Hardening; OAuth2; JWT; Authorization; Zero Trust; Logging; Threat Modeling",
      "relationship": "primary"
    },
    {
      "sourceId": "llvm-language-reference",
      "locator": "LibFuzzer; Clang AddressSanitizer; Clang Static Analyzer",
      "relationship": "primary"
    },
    {
      "sourceId": "rfc8446-tls13",
      "locator": "RFC 8446 §§2, 4, 8, Appendix E",
      "relationship": "primary"
    },
    {
      "sourceId": "google-sre-book",
      "locator": "Ch. 13–15",
      "relationship": "primary"
    },
    {
      "sourceId": "dordal-intronetworks",
      "locator": "Ch. 28–29 Security",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "ssa-binary-mitigations-fuzzing",
      "overview": [
        "Bảo mật nhị phân cần hiểu điều kiện một lỗi chương trình trở thành vi phạm quyền hoặc luồng điều khiển, rồi phối hợp sửa nguyên nhân với các lớp giảm tác động. Chương này đi từ an toàn bộ nhớ tới hardening, tranh chấp tài nguyên và các phương pháp tìm lỗi tự động. Công cụ chỉ quan sát hoặc phân tích trong một mô hình hữu hạn nên kết quả không phát hiện lỗi chưa chứng minh chương trình an toàn. Các ví dụ được giới hạn trong mã và môi trường có quyền kiểm thử rõ, ưu tiên cơ chế phòng vệ và khả năng tái hiện lỗi."
      ],
      "sources": [
        {
          "sourceId": "owasp-cheatsheets",
          "locator": "C-Based Toolchain Hardening; Secure Coding and Race Condition guidance",
          "relationship": "primary"
        },
        {
          "sourceId": "llvm-language-reference",
          "locator": "LibFuzzer; AddressSanitizer; Clang Static Analyzer",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ssa-memory-mitigations-limits",
          "title": "ASLR, NX, canary và CFI",
          "level": "specialization",
          "paragraphs": [
            "NX/DEP ngăn thực thi trên những trang không được cấp quyền thực thi; ASLR ngẫu nhiên hóa bố cục để giảm khả năng dự đoán địa chỉ; canary giúp phát hiện một số ghi đè stack trước khi trở về. CFI giới hạn các đích chuyển điều khiển theo một chính sách, với độ mạnh tùy thiết kế. Các lớp này làm một số đường khai thác khó hơn nhưng không sửa đọc ghi ngoài biên, use-after-free hoặc lỗi logic gốc. Rò địa chỉ, vùng không được bảo vệ và cấu hình build có thể làm giả thiết phòng vệ yếu đi, nên phải kiểm artifact thực thay vì chỉ tên cờ."
          ],
          "sources": [
            {
              "sourceId": "owasp-cheatsheets",
              "locator": "C-Based Toolchain Hardening: Stack and Memory Protections; Binary Layout and Control-Flow Mitigations",
              "relationship": "primary"
            },
            {
              "sourceId": "dordal-intronetworks",
              "locator": "§28.2 Stack Buffer Overflow; §28.3 Heap Buffer Overflow",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ssa-toctou-atomic-resource",
          "title": "TOCTOU và kiểm tra gắn với tài nguyên",
          "level": "specialization",
          "paragraphs": [
            "TOCTOU xảy ra khi điều kiện được kiểm ở một thời điểm nhưng đối tượng hoặc trạng thái có thể thay đổi trước lúc dùng, như kiểm đường dẫn rồi mở một đối tượng khác sau đổi liên kết. Thiết kế cần gắn quyết định với cùng định danh tài nguyên ổn định hoặc dùng thao tác nguyên tử, thay vì thêm một lần kiểm tương tự. Ở ứng dụng, kiểm hạn mức rồi trừ tiền trong hai giao dịch rời cũng có rủi ro cùng dạng. Khóa chỉ có ích khi mọi đường cập nhật liên quan tuân cùng giao thức và phạm vi khóa đủ bao trùm bất biến."
          ],
          "sources": [
            {
              "sourceId": "owasp-cheatsheets",
              "locator": "Secure Coding; Transaction Authorization; Business Logic Security Cheat Sheets",
              "relationship": "primary"
            },
            {
              "sourceId": "linux-man-pages",
              "locator": "open(2), openat(2): race avoidance and stable directory descriptors",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ssa-fuzzing-sanitizers-corpus",
          "title": "Fuzzing hướng độ phủ và sanitizer",
          "level": "specialization",
          "paragraphs": [
            "Coverage-guided fuzzing biến đổi các đầu vào trong corpus và ưu tiên những đầu vào mở hành vi mã mới, nên harness cần nhận dữ liệu không tin cậy và chạy lặp ổn định. Sanitizer bổ sung kiểm tra động để biến những lỗi như vượt biên hoặc dùng sau giải phóng thành tín hiệu có thể phát hiện. Corpus, từ điển, điều kiện khởi tạo và cách giảm testcase ảnh hưởng hiệu quả. Coverage cao chưa chứng minh đạt mọi trạng thái ngữ nghĩa; một testcase gây crash còn cần phân tích nguyên nhân, tác động và sửa hồi quy, không tự đồng nghĩa khai thác thành công."
          ],
          "sources": [
            {
              "sourceId": "llvm-language-reference",
              "locator": "https://llvm.org/docs/LibFuzzer.html — Introduction; Fuzz Target; Corpus",
              "relationship": "primary"
            },
            {
              "sourceId": "llvm-language-reference",
              "locator": "https://clang.llvm.org/docs/AddressSanitizer.html — Introduction; Limitations",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ssa-symbolic-analysis-boundaries",
          "title": "Thực thi ký hiệu và giới hạn phân tích",
          "level": "specialization",
          "paragraphs": [
            "Thực thi ký hiệu biểu diễn đầu vào bằng biến và tích lũy các ràng buộc đường đi, rồi dùng bộ giải để tìm đầu vào làm một nhánh hoặc lỗi có thể xảy ra. Nó có thể đi tới các điều kiện khó gặp bằng ngẫu nhiên, nhưng số đường tăng nhanh và mô hình cho thư viện, con trỏ hoặc hệ điều hành có thể không đầy đủ. Phân tích tĩnh dựa trên kỹ thuật này có thể tạo báo động cần kiểm lại; không thấy báo động không bảo đảm mọi thực thi an toàn. Kết hợp kiểm động và lập luận bất biến cho bằng chứng đa dạng hơn một công cụ đơn lẻ."
          ],
          "sources": [
            {
              "sourceId": "llvm-language-reference",
              "locator": "https://clang.llvm.org/docs/ClangStaticAnalyzer.html — path-sensitive, inter-procedural analysis and symbolic execution",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Bảo vệ thực thi nhị phân, Điều kiện tranh chấp TOCTOU và Kiểm thử mờ hướng độ phủ (Fuzzing)"
    },
    {
      "id": "ssa-protocol-security-oauth-zerotrust",
      "overview": [
        "Bảo mật giao thức cần xác định ai được xác thực, dữ liệu nào được bảo vệ và quyền hành động được gắn với tài nguyên ra sao. Chương này phân biệt kênh TLS với xác thực ứng dụng, OAuth với OIDC và danh tính với ủy quyền. Một token có chữ ký hợp lệ vẫn có thể không dành cho dịch vụ hoặc hành động đang xét. Các nguyên tắc zero trust được dùng để tránh suy quyền chỉ từ vị trí mạng, đồng thời giữ rõ các nguy cơ ở DNS, định tuyến và các phụ thuộc nằm ngoài một kênh mã hóa."
      ],
      "sources": [
        {
          "sourceId": "rfc8446-tls13",
          "locator": "§2 Protocol Overview; §4 Handshake; §8 0-RTT and Anti-Replay",
          "relationship": "primary"
        },
        {
          "sourceId": "owasp-cheatsheets",
          "locator": "OAuth2; JSON Web Token; Authorization; Zero Trust Architecture",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ssa-tls13-forward-secrecy",
          "title": "TLS 1.3, bí mật chuyển tiếp và 0-RTT",
          "level": "specialization",
          "paragraphs": [
            "TLS 1.3 kết hợp trao đổi khóa, xác thực và mã hóa có xác thực để bảo vệ phiên theo các chế độ đã chọn. Trao đổi khóa ephemeral thích hợp cung cấp forward secrecy trước việc lộ khóa dài hạn về sau, nhưng không được gán cùng bảo đảm cho mọi chế độ PSK hoặc dữ liệu 0-RTT. Early data có nguy cơ replay và không có đầy đủ tính chất như dữ liệu sau handshake, nên thao tác có hiệu ứng cần cơ chế riêng. Kiểm tên máy chủ, chuỗi chứng thư và cấu hình tin cậy vẫn thiết yếu; mã hóa không ngăn một đầu cuối đã bị chiếm quyền đọc dữ liệu."
          ],
          "sources": [
            {
              "sourceId": "rfc8446-tls13",
              "locator": "§2; §4.2.11 Pre-Shared Key; §8 0-RTT and Anti-Replay; Appendix E security properties",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ssa-oauth-oidc-pkce",
          "title": "Authorization Code, PKCE và OIDC",
          "level": "specialization",
          "paragraphs": [
            "OAuth 2.0 phục vụ ủy quyền truy cập tài nguyên, còn OIDC thêm lớp nhận dạng với ID token và các ràng buộc tương ứng. Trong Authorization Code với PKCE, client tạo verifier và challenge để ràng buộc việc đổi code với bên đã khởi tạo, giảm rủi ro code bị chặn rồi dùng bởi bên khác. Redirect URI phải khớp quy tắc đã đăng ký, còn state hoặc nonce có vai trò bảo vệ tùy luồng và ngữ cảnh. Access token và ID token không được tráo mục đích; có token không đồng nghĩa được làm mọi hành động trên mọi đối tượng."
          ],
          "sources": [
            {
              "sourceId": "owasp-cheatsheets",
              "locator": "OAuth2 Cheat Sheet: PKCE; Redirect URI; Authorization Code; OpenID Connect guidance",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ssa-jwt-object-authorization",
          "title": "Kiểm token và quyền mức đối tượng",
          "level": "specialization",
          "paragraphs": [
            "Kiểm JWT cần chính sách thuật toán, chữ ký, issuer, audience, hạn dùng và loại token phù hợp với ứng dụng; đọc payload thành công chưa xác thực được nó. Khóa xác minh không được chọn theo dữ liệu tùy ý mà token cung cấp ngoài ranh giới tin cậy. Sau xác thực, server vẫn cần kiểm quyền cho từng tài nguyên và hành động: người dùng A không được xem bản ghi B chỉ vì đổi một ID. Quyền mặc định từ chối cùng kiểm tại điểm sử dụng giảm các lỗ hổng BOLA/IDOR và leo thang ngang; giao diện ẩn nút không phải kiểm quyền."
          ],
          "sources": [
            {
              "sourceId": "owasp-cheatsheets",
              "locator": "JSON Web Token; Authorization: Deny by Default; Validate Permissions on Every Request; Insecure Direct Object Reference Prevention",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ssa-zerotrust-routing-boundaries",
          "title": "Zero trust, mTLS và ranh giới mạng",
          "level": "specialization",
          "paragraphs": [
            "Zero trust yêu cầu quyết định truy cập dựa trên danh tính, trạng thái và chính sách phù hợp thay vì mặc định tin mọi thiết bị trong mạng nội bộ. mTLS xác thực hai đầu của kênh bằng chứng thư, nhưng quyền truy cập dữ liệu vẫn cần policy và vòng đời khóa. Giả mạo phân giải tên hoặc sai định tuyến có thể chuyển lưu lượng hoặc làm gián đoạn, nên cơ chế bảo vệ DNS, kiểm nguồn và xác minh đích phải được xét theo lớp. TLS không tự sửa tính toàn vẹn BGP hoặc khả dụng; chia đoạn mạng cũng không thay thế kiểm quyền trong dịch vụ."
          ],
          "sources": [
            {
              "sourceId": "owasp-cheatsheets",
              "locator": "Zero Trust Architecture: Core Principles; Network Architecture; Transport Layer Security",
              "relationship": "primary"
            },
            {
              "sourceId": "dordal-intronetworks",
              "locator": "Security chapters and routing/DNS threat context",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Phân tích an toàn giao thức (TLS 1.3, OAuth 2.0/OIDC) và Kiểm soát truy cập phân tán"
    },
    {
      "id": "ssa-audit-incident-response",
      "overview": [
        "Kiểm toán an toàn tìm những đường dữ liệu và quyền có thể vi phạm mục tiêu bảo vệ, còn ứng phó sự cố tổ chức hành động khi có dấu hiệu vi phạm thực. Chương này nối mô hình đe dọa, bằng chứng log và quy trình khôi phục để tránh sửa riêng một triệu chứng. Khả năng truy vết cần được thiết kế trước sự cố cùng quyền truy cập và lưu giữ, vì log thiếu hoặc bị sửa sẽ giới hạn kết luận. Báo cáo phân biệt điều đã quan sát với giả thuyết, bảo vệ bằng chứng và dữ liệu cá nhân trong suốt quá trình."
      ],
      "sources": [
        {
          "sourceId": "owasp-cheatsheets",
          "locator": "Threat Modeling; Secure Code Review; Logging",
          "relationship": "primary"
        },
        {
          "sourceId": "google-sre-book",
          "locator": "Ch. 13 Emergency Response; Ch. 14 Managing Incidents; Ch. 15 Postmortem Culture",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ssa-architecture-code-audit",
          "title": "Rà thiết kế theo dữ liệu và quyền",
          "level": "specialization",
          "paragraphs": [
            "Kiểm toán bắt đầu với tài sản, tác nhân, điểm vào và ranh giới tin cậy, rồi theo dữ liệu từ nguồn không tin cậy tới các hành động nhạy cảm. Với mỗi đường, cần xác định nơi xác thực, ủy quyền, chuẩn hóa, kiểm điều kiện và lưu bền thực sự xảy ra. Tập trung vào các bất biến liên thành phần giúp phát hiện lỗi mà đọc từng hàm riêng không thấy, như cache quyết định quyền đã hết hiệu lực. Finding cần điều kiện, tác động, bằng chứng và cách sửa có thể kiểm; một mẫu mã trông đáng ngờ chưa đủ khẳng định đã có lỗ hổng khai thác được."
          ],
          "sources": [
            {
              "sourceId": "owasp-cheatsheets",
              "locator": "Threat Modeling; Secure Code Review; Authorization Cheat Sheets",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ssa-audit-log-integrity",
          "title": "Audit log, toàn vẹn và riêng tư",
          "level": "specialization",
          "paragraphs": [
            "Audit log ghi các sự kiện có ý nghĩa bảo vệ như thay đổi quyền, đăng nhập bất thường hoặc truy cập tài sản nhạy cảm với định danh và thời điểm có thể liên hệ. Không ghi mật khẩu, khóa hoặc token nguyên văn chỉ để tiện điều tra. Quyền ghi đọc tách biệt, chuyển log sang nơi lưu được bảo vệ và cơ chế phát hiện sửa đổi làm tăng độ tin cậy, nhưng không tạo log tuyệt đối không thể giả nếu toàn bộ nguồn và khóa đã bị chiếm. Thời gian, thiếu sự kiện và chính sách lưu cần được xét khi suy diễn chuỗi hành động."
          ],
          "sources": [
            {
              "sourceId": "owasp-cheatsheets",
              "locator": "Logging Cheat Sheet: Which Events to Log; Data to Exclude; Protection; Verification",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ssa-incident-containment-evidence",
          "title": "Cô lập, bảo toàn bằng chứng và khôi phục",
          "level": "specialization",
          "paragraphs": [
            "Ứng phó sự cố cần phân vai điều phối, truyền thông và thao tác kỹ thuật để tránh nhiều người sửa hệ thống đồng thời mà mất dấu. Cô lập giảm tác hại nhưng có thể làm mất trạng thái đang sống, nên quyết định phải xét mức khẩn cấp và nhu cầu bảo toàn bằng chứng. Bản sao bằng chứng nên có metadata nguồn, thời điểm và kiểm toàn vẹn; các suy luận về tác nhân cần giữ mức chắc chắn phù hợp. Khôi phục cần loại nguyên nhân và thông tin xác thực bị lộ, kiểm lại bất biến rồi theo dõi, không chỉ khởi động lại dịch vụ."
          ],
          "sources": [
            {
              "sourceId": "google-sre-book",
              "locator": "Ch. 13 Emergency Response; Ch. 14 Managing Incidents",
              "relationship": "primary"
            },
            {
              "sourceId": "owasp-cheatsheets",
              "locator": "Logging: protection and event attribution",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ssa-postmortem-regression",
          "title": "Rút kinh nghiệm và kiểm sửa lỗi",
          "level": "specialization",
          "paragraphs": [
            "Postmortem mô tả tác động, dòng thời gian, điều kiện góp phần và hành động cải thiện có thể theo dõi. Không đổ lỗi cá nhân giúp tìm cơ chế khiến một sai sót đơn lẻ lan thành sự cố, nhưng vẫn cần trách nhiệm thực hiện sửa đổi. Kiểm hồi quy nên tái hiện điều kiện gốc và xác nhận phòng vệ trên các đường tương tự, đồng thời kiểm thay đổi không làm hỏng chức năng hợp lệ. Bài học có thể là giới hạn quyền, cải thiện phát hiện hoặc thiết kế lại một ranh giới, không nhất thiết thêm cảnh báo sau mọi lỗi."
          ],
          "sources": [
            {
              "sourceId": "google-sre-book",
              "locator": "Ch. 15 Postmortem Culture: Learning from Failure",
              "relationship": "primary"
            },
            {
              "sourceId": "owasp-cheatsheets",
              "locator": "Secure Code Review; Authorization: unit and integration tests",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Phương pháp kiểm toán thiết kế an toàn, Nhật ký chống giả mạo và Ứng phó sự cố"
    }
  ]
};
