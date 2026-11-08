export const COURSE_MOBILE_EMBEDDED_REALTIME = {
  "id": "mobile-embedded-realtime",
  "code": "CS-40",
  "title": "Di động, nhúng và hệ thời gian thực",
  "blockId": "block-6",
  "level": "extension",
  "prerequisites": [
    {
      "courseId": "computer-architecture",
      "type": "required",
      "reason": "Cần hiểu ngắt phần cứng, Memory-Mapped I/O và thanh ghi."
    },
    {
      "courseId": "operating-systems",
      "type": "required",
      "reason": "Cần hiểu lập lịch tiến trình/luồng, đồng bộ hóa và quản lý bộ nhớ."
    },
    {
      "courseId": "computer-networks",
      "type": "required",
      "reason": "Cần hiểu đặc tính kết nối không dây mất gói và đồng bộ trạng thái."
    }
  ],
  "overview": [
    "Môn mở rộng này nghiên cứu những hệ thống mà thời gian sống, tài nguyên hoặc thời hạn phản hồi bị ràng buộc mạnh hơn một chương trình desktop thông thường. Hệ di động phải phục hồi sau đổi vòng đời và mất mạng, hệ nhúng phải tương tác với thanh ghi và ngắt, còn hệ thời gian thực phải đáp ứng deadline trong một mô hình tải cụ thể. Ba hướng được đặt cạnh nhau để thấy các vấn đề chung về trạng thái, bất đồng bộ, bộ đệm và quá tải, đồng thời không trộn chúng thành một nền tảng duy nhất. Kiến thức hệ điều hành, đồng thời và bộ nhớ được dùng để giải thích cơ chế nền trước khi nói tới API. Nội dung đặc biệt phân biệt volatile với đồng bộ, activity với tiến trình và tốc độ trung bình với cận xấu nhất. Mục tiêu là hiểu các đánh đổi để chọn một nhánh học tiếp có căn cứ; một môn nhập môn chung chưa đủ chứng nhận hệ điều khiển an toàn hoặc bao quát mọi nền tảng di động và vi điều khiển."
  ],
  "boundaries": [
    "Sử dụng bộ mô phỏng và chương trình kiểm chứng cơ chế; không bắt buộc người học phải mua bo mạch vi điều khiển vật lý hay thiết bị di động riêng.",
    "Các cận RM/EDF chỉ áp dụng khi thỏa giả thiết đã công bố; Android và Zephyr là ví dụ cụ thể, không định nghĩa chung cho mọi nền tảng."
  ],
  "sources": [
    {
      "sourceId": "android-architecture",
      "locator": "Activity lifecycle; Save UI states; Offline-first data layer",
      "relationship": "primary"
    },
    {
      "sourceId": "zephyr-kernel-docs",
      "locator": "Device Driver Model; Interrupts; Ring Buffers",
      "relationship": "primary"
    },
    {
      "sourceId": "cmu-realtime-scheduling",
      "locator": "Distributed Embedded Scheduling, Philip Koopman, 26 October 2015",
      "relationship": "primary"
    },
    {
      "sourceId": "ostep-v110",
      "locator": "Ch. 36 I/O Devices",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "mer-mobile-lifecycle-offline-resource",
      "overview": [
        "Thiết bị di động có thể đổi hướng màn hình, mất mạng, chuyển ứng dụng hoặc bị hệ điều hành thu hồi tiến trình trong lúc người dùng còn muốn tiếp tục công việc. Chương này nghiên cứu các trạng thái của thành phần giao diện và tiến trình như những lớp khác nhau, rồi nối chúng với lưu dữ liệu, đồng bộ và giới hạn năng lượng. Các khái niệm được minh họa bằng Android nhưng không coi mọi nền tảng có cùng danh sách trạng thái. Phản hồi nhanh trên màn hình được tách khỏi việc tác vụ nền đã hoàn tất bền vững."
      ],
      "sources": [
        {
          "sourceId": "android-architecture",
          "locator": "The activity lifecycle; Save UI states; Build an offline-first app",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "mer-lifecycle-restoration",
          "title": "Vòng đời thành phần, tiến trình và khôi phục",
          "level": "extension",
          "paragraphs": [
            "Một activity Android có thể trải qua tạo, hiển thị, tương tác, tạm dừng, dừng và hủy; tiến trình chứa activity còn có thể bị hệ thống kết thúc để lấy tài nguyên. ViewModel có thể giữ trạng thái qua một số thay đổi cấu hình nhưng không tự sống qua mọi lần chết tiến trình. Trạng thái UI tạm thời, dữ liệu nghiệp vụ bền vững và tài nguyên đang mở cần các cơ chế lưu khôi phục khác nhau. Không được dựa vào callback hủy chắc chắn sẽ chạy để lưu dữ liệu quan trọng khi tiến trình có thể bị chấm dứt bất ngờ."
          ],
          "sources": [
            {
              "sourceId": "android-architecture",
              "locator": "https://developer.android.com/guide/components/activities/activity-lifecycle — Activity state and ejection from memory; https://developer.android.com/topic/libraries/architecture/saving-states",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "mer-offline-durable-sync",
          "title": "Offline-first, hàng đợi bền và xung đột",
          "level": "extension",
          "paragraphs": [
            "Offline-first cung cấp dữ liệu cục bộ để các chức năng cốt lõi vẫn hữu ích khi mạng không ổn định. Một thay đổi có thể được lưu cùng bản ghi cần đồng bộ trong giao dịch cục bộ, sau đó tác vụ nền gửi lại với định danh ổn định để tránh nhân đôi hiệu ứng. Thử lại cần backoff và giới hạn, còn cập nhật đồng thời từ nhiều thiết bị cần chính sách giải xung đột theo yêu cầu dữ liệu. Có kết nối mạng không bảo đảm máy chủ truy cập được hoặc thao tác đã được chấp nhận; trạng thái đồng bộ cần được hiển thị trung thực."
          ],
          "sources": [
            {
              "sourceId": "android-architecture",
              "locator": "https://developer.android.com/topic/architecture/data-layer/offline-first — Writes; Queued writes; Synchronization; Conflict resolution",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "mer-main-thread-energy-budget",
          "title": "Luồng giao diện và ngân sách tài nguyên",
          "level": "extension",
          "paragraphs": [
            "Vòng lặp giao diện phải xử lý input và tạo khung hình trong ngân sách phù hợp tốc độ màn hình; tác vụ I/O hoặc tính toán kéo dài trên luồng đó gây giật hoặc không phản hồi. Chuyển việc ra nền cần quản lý hủy, vòng đời và cách đưa kết quả trở lại đúng trạng thái hiện tại. Đánh thức CPU, GPS và radio liên tục tốn năng lượng, nên gom việc và chọn điều kiện mạng hoặc sạc thích hợp có thể giảm chi phí. Chính sách nền của hệ điều hành là giới hạn thực thi cần thiết kế cùng, không phải trở ngại có thể bỏ qua bằng một vòng lặp vô hạn."
          ],
          "sources": [
            {
              "sourceId": "android-architecture",
              "locator": "Build an offline-first app — Battery and data status; Background work and synchronization; The activity lifecycle — resource management",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Hệ thống di động: Vòng đời bị quản lý, Kiến trúc Offline-First và Ngân sách năng lượng"
    },
    {
      "id": "mer-embedded-mmio-interrupts-buffers",
      "overview": [
        "Trong hệ nhúng, chương trình tương tác trực tiếp với thiết bị và các sự kiện không chờ vòng xử lý chính. Chương này nối địa chỉ thanh ghi với tác động phần cứng, phân biệt polling với interrupt và xây cách chuyển việc khỏi ISR. Bất biến bộ đệm, thứ tự truy cập và giới hạn dung lượng quyết định dữ liệu có bị mất hoặc đọc sai hay không. Từ khóa ngôn ngữ và cơ chế đồng bộ phần cứng được phân biệt rõ; một khai báo volatile không tự giải quyết mọi vấn đề đồng thời hoặc cache."
      ],
      "sources": [
        {
          "sourceId": "zephyr-kernel-docs",
          "locator": "Device Driver Model: Memory Mapping; Interrupts: Concepts; Offloading ISR Work",
          "relationship": "primary"
        },
        {
          "sourceId": "ostep-v110",
          "locator": "Ch. 36 I/O Devices",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "mer-mmio-registers-volatile",
          "title": "MMIO, tác động thanh ghi và volatile",
          "level": "extension",
          "paragraphs": [
            "Memory-mapped I/O ánh xạ thanh ghi thiết bị vào miền địa chỉ có thể đọc ghi bằng các thao tác phù hợp kiến trúc. Một lần đọc có thể xóa cờ, một lần ghi có thể phát lệnh, nên không được xem thanh ghi như biến RAM thông thường. Volatile yêu cầu trình biên dịch giữ các truy cập quan sát được theo quy tắc ngôn ngữ, nhưng không cung cấp tính nguyên tử, khóa, đồng bộ liên lõi hoặc mọi bảo đảm thứ tự phần cứng. Truy cập thiết bị còn cần độ rộng, căn chỉnh, memory attributes và barrier hoặc accessor theo tài liệu nền tảng."
          ],
          "sources": [
            {
              "sourceId": "zephyr-kernel-docs",
              "locator": "Device Driver Model: Memory Mapping",
              "relationship": "primary"
            },
            {
              "sourceId": "ostep-v110",
              "locator": "Ch. 36: canonical device protocol; memory-mapped I/O",
              "relationship": "primary"
            },
            {
              "sourceId": "learncpp",
              "locator": "Const, constexpr, and volatile qualifiers: volatile",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "mer-isr-deferred-work",
          "title": "Ngắt, ISR và trì hoãn công việc",
          "level": "extension",
          "paragraphs": [
            "Interrupt chuyển điều khiển để xử lý một sự kiện, còn ISR chạy trong ngữ cảnh có những giới hạn khác luồng thường. ISR nên ghi nhận hoặc đọc dữ liệu cần thiết, xác nhận nguồn ngắt đúng quy trình rồi chuyển công việc dài sang luồng hoặc hàng việc. Chờ một khóa có thể ngủ hoặc gọi thao tác chặn trong ISR có thể không hợp lệ và gây bế tắc. Tắt ngắt cục bộ chỉ ngăn ngắt trên lõi hiện tại, không tự loại truy cập từ lõi khác hoặc DMA; cơ chế bảo vệ phải khớp mô hình thiết bị."
          ],
          "sources": [
            {
              "sourceId": "zephyr-kernel-docs",
              "locator": "Interrupts: Concepts; Preventing Interruptions; Offloading ISR Work",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "mer-ring-buffer-overflow",
          "title": "Ring buffer và chính sách quá tải",
          "level": "extension",
          "paragraphs": [
            "Bộ đệm vòng dùng chỉ số đọc, chỉ số ghi và quy ước đầy rỗng để giữ dữ liệu sự kiện mà không dịch phần tử. Trong mô hình một producer một consumer, có thể giảm khóa nếu chứng minh được quyền sở hữu chỉ số, tính nguyên tử và thứ tự công bố dữ liệu. Viết payload phải được quan sát trước khi công bố vị trí ghi mới. Khi producer nhanh hơn consumer, bộ đệm hữu hạn sẽ đầy; chính sách bỏ mới, bỏ cũ hoặc báo quá tải cần công bố. Không thể bảo đảm không mất dữ liệu chỉ bằng tăng dung lượng nếu tải dài hạn vượt khả năng xử lý."
          ],
          "sources": [
            {
              "sourceId": "zephyr-kernel-docs",
              "locator": "Interrupts: Offloading ISR Work; Data Passing: Ring Buffers",
              "relationship": "primary"
            },
            {
              "sourceId": "ostep-v110",
              "locator": "Ch. 36 I/O Devices",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Hệ thống nhúng: Memory-Mapped I/O, Ngoại vi, Trình phục vụ ngắt (ISR) và Bộ đệm vòng"
    },
    {
      "id": "mer-realtime-scheduling-priority-inversion",
      "overview": [
        "Thời gian thực đặt thời điểm trả kết quả vào điều kiện đúng của hệ thống, nên tốc độ trung bình nhanh chưa đủ. Chương này mô hình hóa tác vụ bằng chu kỳ, thời gian thực thi xấu nhất, deadline và thời gian bị chặn để xét khả lập lịch. RM và EDF được đặt trong các giả thiết một bộ xử lý, tiền nhiệm và tác vụ độc lập thích hợp. Chia sẻ tài nguyên tạo đảo ưu tiên và có thể phá một phân tích chỉ xét sử dụng CPU; các giao thức khóa cần được tính trong cận thời gian."
      ],
      "sources": [
        {
          "sourceId": "cmu-realtime-scheduling",
          "locator": "Slides: Real-Time Review; Five Standard Assumptions; Rate Monotonic; EDF; Blocking",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "mer-deadline-wcet-model",
          "title": "Deadline và thời gian thực thi xấu nhất",
          "level": "extension",
          "paragraphs": [
            "Hard real-time yêu cầu không trễ deadline trong phạm vi mô hình được bảo đảm, còn soft real-time cho phép chất lượng giảm khi trễ. Một tác vụ tuần hoàn được mô tả bằng chu kỳ T, deadline D và cận thời gian tính C; jitter và blocking bổ sung những độ trễ không nằm trong C thuần. WCET là cận trong điều kiện đã xác định, không đơn giản là thời gian lớn nhất thấy qua vài lần chạy. Cache, ngắt, chia sẻ bus và thay đổi tần số có thể làm một phép đo trên hệ không khớp mô hình phân tích."
          ],
          "sources": [
            {
              "sourceId": "cmu-realtime-scheduling",
              "locator": "Slides 4–11: Real Time Review; Periodic Messages and Tasks; Five Standard Assumptions",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "mer-rm-edf-conditions",
          "title": "RM, EDF và điều kiện khả lập lịch",
          "level": "extension",
          "paragraphs": [
            "Với tác vụ tuần hoàn độc lập, tiền nhiệm trên một CPU, deadline bằng chu kỳ, WCET đã biết và bỏ qua chi phí chuyển ngữ cảnh, RM gán ưu tiên cố định cao hơn cho chu kỳ ngắn hơn. Cận sử dụng n(2^(1/n)−1) là điều kiện đủ của bộ n tác vụ, không phải điều kiện cần; vượt cận chưa chứng minh không lập lịch được. EDF ưu tiên deadline tuyệt đối sớm nhất và trong mô hình implicit-deadline tương ứng có điều kiện sử dụng tổng C_i/T_i≤1. Deadline khác chu kỳ hoặc có blocking cần phép kiểm khác."
          ],
          "sources": [
            {
              "sourceId": "cmu-realtime-scheduling",
              "locator": "Slides: Five Standard Assumptions; Rate Monotonic Scheduling; Schedulability; Earliest Deadline First",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "mer-priority-inversion-inheritance",
          "title": "Đảo ưu tiên và kế thừa ưu tiên",
          "level": "extension",
          "paragraphs": [
            "Một tác vụ ưu tiên cao chờ khóa do tác vụ thấp giữ có thể bị trì hoãn thêm khi tác vụ trung bình liên tục chiếm CPU của bên giữ khóa. Đó là đảo ưu tiên ngoài thứ tự trực giác của lịch. Priority inheritance tạm nâng ưu tiên bên giữ tài nguyên theo bên đang chờ để nó sớm giải phóng khóa; các chuỗi khóa có thể đòi truyền kế thừa. Cơ chế này không tự chữa deadlock, thời gian giữ khóa vô hạn hoặc mọi giao thức khóa lồng nhau. Phân tích response time cần cận blocking phù hợp với giao thức thực dùng."
          ],
          "sources": [
            {
              "sourceId": "cmu-realtime-scheduling",
              "locator": "Slides: Blocking; Priority Inversion; Priority Inheritance",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Hệ thống thời gian thực: Ràng buộc Deadline, Lập lịch RM/EDF và Đảo ngược độ ưu tiên"
    }
  ]
};
