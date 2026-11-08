export const COURSE_DATA_STRUCTURES = {
  "id": "data-structures",
  "code": "CS-15",
  "title": "Cấu trúc dữ liệu",
  "blockId": "block-3",
  "level": "core",
  "prerequisites": [
    {
      "courseId": "cpp-memory-model",
      "type": "required",
      "reason": "Cần nắm vững bộ nhớ liên tiếp vs cấp phát nút qua con trỏ, thời gian sống và độ cục bộ bộ nhớ."
    },
    {
      "courseId": "object-oriented-programming",
      "type": "required",
      "reason": "Cần nắm đóng gói bất biến của lớp và khuôn mẫu cơ bản để hiểu thiết kế container."
    },
    {
      "courseId": "discrete-math",
      "type": "required",
      "reason": "Cần quy nạp toán học, số học modulo, cây, đồ thị và ký hiệu tiệm cận."
    }
  ],
  "overview": [
    "Môn học đặt câu hỏi một tập dữ liệu cần được tổ chức như thế nào để các thao tác thường dùng có chi phí phù hợp. Kiểu dữ liệu trừu tượng mô tả ý nghĩa của thao tác, còn cấu trúc dữ liệu quy định cách lưu thông tin và duy trì tính đúng của biểu diễn. Từ khác biệt này, môn học phát triển mảng động, danh sách liên kết, ngăn xếp, hàng đợi, bảng băm, cây tìm kiếm, đống, cây tiền tố và tập hợp rời rạc. Mỗi cấu trúc được gắn với bất biến, cơ chế cập nhật và mô hình chi phí, bao gồm bộ nhớ phụ và khả năng truy cập cục bộ. Các nhận định về thời gian được tách thành trường hợp xấu nhất, kỳ vọng và khấu hao; một thao tác nhanh trung bình không được hiểu thành bảo đảm cho mọi lần gọi. Kiến thức con trỏ, thời gian sống, đóng gói và quy nạp được dùng để giải thích vì sao cấu trúc hoạt động, trước khi so sánh với container thư viện."
  ],
  "boundaries": [
    "Mỗi cấu trúc dữ liệu đều được định nghĩa bằng bất biến cấu trúc, bảng độ phức tạp trường hợp xấu nhất/trung bình/khấu hao và điều kiện suy biến; việc viết mã cài đặt là phương tiện minh họa cơ chế, không thay thế phân tích."
  ],
  "sources": [
    {
      "sourceId": "open-data-structures",
      "locator": "Ch. 1–3, 5–6, 9–10, 12, 14",
      "relationship": "primary"
    },
    {
      "sourceId": "mit-6006-2020",
      "locator": "Lectures 2, 4, 6–8",
      "relationship": "primary"
    },
    {
      "sourceId": "cp-algorithms",
      "locator": "Disjoint Set Union; Aho-Corasick: Construction of the trie",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "ds-adt-arrays-lists",
      "overview": [
        "Một dãy có thứ tự cung cấp truy cập theo vị trí, trong khi tập hợp quan tâm thành viên và tính duy nhất. Chương này phân biệt các đặc tả đó với biểu diễn mảng hoặc nút liên kết, rồi dùng chi phí dịch phần tử, cấp phát và tìm nút để giải thích các đánh đổi. Mảng động là ví dụ đầu tiên cho phân tích khấu hao: chi phí lớn của một lần mở rộng được xét trong toàn bộ chuỗi thao tác, không bị che bằng một nhận xét trung bình không rõ giả thiết."
      ],
      "sources": [
        {
          "sourceId": "open-data-structures",
          "locator": "Ch. 1 Introduction; Ch. 2 Array-Based Lists; Ch. 3 Linked Lists",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ds-abstract-interfaces",
          "title": "Đặc tả ADT, tiền điều kiện và bất biến biểu diễn",
          "level": "core",
          "paragraphs": [
            "Một ADT là tập giá trị cùng các thao tác được xác định theo ý nghĩa quan sát được, chẳng hạn get(i) trả phần tử tại vị trí i của một dãy. Tiền điều kiện giới hạn lời gọi hợp lệ; hậu điều kiện mô tả kết quả và thay đổi trạng thái. Bất biến biểu diễn nối bộ nhớ cụ thể với giá trị trừu tượng, ví dụ kích thước không vượt sức chứa. Cùng giao diện dãy có thể dùng mảng hoặc liên kết nhưng không có cùng bảng chi phí."
          ],
          "sources": [
            {
              "sourceId": "open-data-structures",
              "locator": "§1.2 Interfaces; §1.3 Mathematical Background",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ds-dynamic-array-amortization",
          "title": "Mảng động và chi phí khấu hao",
          "level": "core",
          "paragraphs": [
            "Mảng động giữ vùng nhớ liên tiếp với số phần tử đang dùng và sức chứa riêng biệt. Khi đầy, cơ chế tăng sức chứa theo một hệ số lớn hơn một cấp vùng mới rồi chuyển phần tử. Với chi phí chuyển mỗi phần tử hằng số, tổng số lần chuyển qua n phép thêm cuối là O(n), nên chi phí khấu hao mỗi phép là O(1); một lần mở rộng vẫn có thể tốn Θ(n). Chèn giữa dãy còn phải dịch phần tử, không hưởng cùng bảo đảm."
          ],
          "sources": [
            {
              "sourceId": "open-data-structures",
              "locator": "§2.1 ArrayStack: Fast Stack Operations Using an Array",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ds-linked-list-locality",
          "title": "Danh sách liên kết và tính cục bộ bộ nhớ",
          "level": "core",
          "paragraphs": [
            "Danh sách đơn lưu giá trị và liên kết kế tiếp; danh sách đôi bổ sung liên kết trước để tháo hoặc chèn một nút đã biết trong O(1). Tìm nút theo chỉ số vẫn tốn O(n), nên không thể suy ra chèn ở vị trí bất kỳ luôn hằng số. Nút lính canh đơn giản hóa biên đầu cuối nhưng không thay đổi độ phức tạp. So với mảng, liên kết tốn bộ nhớ con trỏ và thường giảm tính cục bộ cache; đổi lại tránh dịch toàn bộ đuôi dãy."
          ],
          "sources": [
            {
              "sourceId": "open-data-structures",
              "locator": "§3.1 SLList; §3.2 DLList",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Kiểu dữ liệu trừu tượng (ADT), mảng động và danh sách liên kết"
    },
    {
      "id": "ds-stacks-queues-deques",
      "overview": [
        "Các cấu trúc trong chương này hạn chế vị trí truy cập để biểu diễn chính sách xử lý. Ngăn xếp phục vụ phần tử vào sau trước, hàng đợi phục vụ phần tử vào trước trước, còn deque cho phép hai đầu. Việc chọn mảng hay danh sách được giải thích từ các phép toán cần hỗ trợ. Các trường hợp rỗng, đầy và vòng qua cuối bộ đệm là một phần của mô hình đúng, đồng thời kết nối đến khung lời gọi và duyệt theo mức."
      ],
      "sources": [
        {
          "sourceId": "open-data-structures",
          "locator": "§2.2 ArrayQueue; §2.3 ArrayDeque; §2.4 DualArrayDeque; Ch. 3",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ds-stack-and-call-frames",
          "title": "Ngăn xếp và lịch sử chưa hoàn tất",
          "level": "core",
          "paragraphs": [
            "Ngăn xếp hỗ trợ push, pop và xem đỉnh theo chính sách LIFO, nghĩa là phần tử thêm sau được lấy ra trước. Chính sách này phù hợp với ngoặc lồng nhau và công việc phải quay về sau một lời gọi con. Khung lời gọi lưu thông tin cần để tiếp tục hàm, nhưng ngăn xếp ADT và cách một hệ chạy lưu khung không phải cùng một đối tượng. Danh sách chèn đầu cho O(1); mảng động cho thêm cuối O(1) khấu hao."
          ],
          "sources": [
            {
              "sourceId": "open-data-structures",
              "locator": "§1.2.1 Queue, Stack, and Deque Interfaces; §2.1 ArrayStack; §3.1 SLList",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ds-circular-queue",
          "title": "Hàng đợi và mảng vòng",
          "level": "core",
          "paragraphs": [
            "Hàng đợi dùng enqueue ở cuối và dequeue ở đầu theo FIFO. Với mảng vòng, chỉ số vật lý của phần tử thứ i được tính từ vị trí đầu và sức chứa theo modulo, nên bỏ đầu chỉ cần dịch chỉ số thay vì dịch dữ liệu. Cách phân biệt đầy với rỗng phải thống nhất, chẳng hạn giữ biến số phần tử. Khi mở rộng, thứ tự logic được sao chép lại từ đầu hàng đợi, kể cả khi dữ liệu đang chia ở hai đầu vùng nhớ."
          ],
          "sources": [
            {
              "sourceId": "open-data-structures",
              "locator": "§2.2 ArrayQueue: An Array-Based Queue",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ds-deque-design",
          "title": "Deque và đánh đổi khi thao tác hai đầu",
          "level": "core",
          "paragraphs": [
            "Deque cho phép thêm và bỏ ở cả đầu lẫn cuối, khác hàng đợi ưu tiên vì không chọn phần tử theo khóa. Mảng vòng hỗ trợ các phép hai đầu nhanh nhưng việc mở rộng vẫn có chi phí đột biến; danh sách đôi hỗ trợ cập nhật đầu cuối trực tiếp nếu giữ đủ liên kết. Deque còn có thể được xây từ hai ngăn xếp với quy tắc cân bằng. Phân tích phải tính cả các lần chuyển phần tử giữa hai phía, thay vì chỉ đếm thao tác thông thường."
          ],
          "sources": [
            {
              "sourceId": "open-data-structures",
              "locator": "§2.3 ArrayDeque; §2.4 DualArrayDeque; §3.2 DLList",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Ngăn xếp, hàng đợi, hàng đợi hai đầu và mảng vòng (Circular Buffer)"
    },
    {
      "id": "ds-hash-tables",
      "overview": [
        "Từ điển động ánh xạ khóa đến giá trị và cần tìm, thêm, xóa theo khóa. Băm đưa miền khóa lớn về số ô hữu hạn nên va chạm là điều phải quản lý, không phải dấu hiệu một hàm băm luôn sai. Chương này giải thích vai trò của phép so sánh bằng, hệ số tải và chiến lược xử lý va chạm. Các cận kỳ vọng được gắn với giả thiết về hàm băm và dữ liệu, tách khỏi chi phí khấu hao của việc đổi kích thước bảng."
      ],
      "sources": [
        {
          "sourceId": "open-data-structures",
          "locator": "Ch. 5 Hash Tables",
          "relationship": "primary"
        },
        {
          "sourceId": "mit-6006-2020",
          "locator": "Lecture 4: Hashing",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ds-hash-function-contract",
          "title": "Khóa, hàm băm và giả thiết phân bố",
          "level": "core",
          "paragraphs": [
            "Hàm băm chuyển một khóa thành chỉ số hoặc mã dùng để chọn ô; hai khóa bằng nhau phải cho kết quả băm tương thích. Khóa khác nhau vẫn có thể va chạm, nên tìm kiếm cần kiểm tra khóa thực. Chương trình không được âm thầm thay đổi phần khóa ảnh hưởng đến băm sau khi chèn. Phân tích băm ngẫu nhiên lấy kỳ vọng trên lựa chọn hàm hoặc nguồn ngẫu nhiên đã nêu, không đồng nhất với giả định mọi tập dữ liệu thực đều phân bố đều."
          ],
          "sources": [
            {
              "sourceId": "open-data-structures",
              "locator": "§5.1 ChainedHashTable; §5.3 Hash Codes",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 4: Hashing",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ds-chaining-open-addressing",
          "title": "Nối chuỗi và địa chỉ mở",
          "level": "core",
          "paragraphs": [
            "Nối chuỗi lưu nhiều phần tử trong cấu trúc phụ của cùng ô; dưới giả thiết băm đều, tìm kiếm có kỳ vọng O(1+α), với α là số phần tử chia số ô. Địa chỉ mở giữ phần tử ngay trong bảng và thăm dò khi ô bận. Với thăm dò tuyến tính, cụm ô liên tiếp làm chi phí tăng khi bảng gần đầy. Xóa cần dấu đã xóa hoặc cơ chế sửa cụm để không cắt đứt đường tìm những khóa chèn sau."
          ],
          "sources": [
            {
              "sourceId": "open-data-structures",
              "locator": "§5.1 ChainedHashTable; §5.2 LinearHashTable",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ds-rehash-and-adversarial-keys",
          "title": "Đổi kích thước, khấu hao và trường hợp xấu",
          "level": "core",
          "paragraphs": [
            "Khi tải vượt ngưỡng, bảng cấp kích thước mới rồi đưa các khóa sang vị trí tương ứng với bảng mới. Một lần tái băm tốn tuyến tính theo số phần tử; các ngưỡng tăng giảm cách nhau đủ xa giúp tránh dao động liên tục. Kỳ vọng O(1) khấu hao cần cả giả thiết về băm và chính sách kích thước. Nếu nhiều khóa va chạm có chủ ý, một phép tra cứu vẫn có thể tuyến tính; yêu cầu bảo đảm thời gian khác có thể dẫn đến cây tìm kiếm."
          ],
          "sources": [
            {
              "sourceId": "open-data-structures",
              "locator": "§5.1–5.2: resize and performance analysis",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 4: Hashing",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Bảng băm, hàm băm và chiến lược giải quyết va chạm"
    },
    {
      "id": "ds-bst-balanced-trees",
      "overview": [
        "Cây tìm kiếm nhị phân khai thác quan hệ thứ tự để thu hẹp miền tìm kiếm sau mỗi lần so sánh. Tốc độ phụ thuộc chiều cao cây, vì thế dữ liệu đã sắp có thể làm cây thường suy biến thành một chuỗi. Chương này nối bất biến thứ tự với phép duyệt, cập nhật và xoay, rồi phát triển AVL như một cơ chế duy trì chiều cao logarit. Red-black và B-tree được đặt trong bức tranh thiết kế để phân biệt cân bằng chiều cao với tối ưu truy cập theo khối."
      ],
      "sources": [
        {
          "sourceId": "open-data-structures",
          "locator": "Ch. 6 Binary Trees; Ch. 9 Red-Black Trees; Ch. 14 B-Trees",
          "relationship": "primary"
        },
        {
          "sourceId": "mit-6006-2020",
          "locator": "Lectures 6–7: Binary Trees; AVL Trees",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ds-bst-order-and-delete",
          "title": "Thứ tự BST, duyệt và phép xóa",
          "level": "core",
          "paragraphs": [
            "BST quy định khóa ở cây con trái nhỏ hơn khóa nút và cây con phải lớn hơn theo một chính sách xử lý trùng được nêu rõ. Duyệt trung thứ tự vì thế cho dãy khóa đã sắp. Tìm, chèn và xóa đi qua O(h) nút, với h là chiều cao. Xóa nút hai con dùng phần tử kế tiếp hoặc trước theo thứ tự rồi xử lý nút thay thế có ít con hơn. Các liên kết cha, gốc và kích thước phụ phải được duy trì cùng bất biến khóa."
          ],
          "sources": [
            {
              "sourceId": "open-data-structures",
              "locator": "§6.1 BinaryTree; §6.2 BinarySearchTree",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ds-avl-rotations",
          "title": "Cân bằng AVL và phép xoay",
          "level": "core",
          "paragraphs": [
            "AVL yêu cầu chênh lệch chiều cao hai cây con tại mỗi nút không quá một. Từ số nút tối thiểu theo chiều cao có thể suy ra h=O(log n). Phép xoay thay đổi cấu trúc cha con cục bộ nhưng bảo toàn dãy trung thứ tự, nên giữ tính tìm kiếm. Mất cân bằng dạng trái trái hoặc phải phải được sửa bằng xoay đơn; trái phải hoặc phải trái cần xoay kép. Sau cập nhật, chiều cao và metadata phải được tính lại theo đúng thứ tự phụ thuộc."
          ],
          "sources": [
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 7: AVL Trees",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ds-red-black-btree-perspective",
          "title": "Red-black và B-tree trong thiết kế cây",
          "level": "core",
          "paragraphs": [
            "Red-black dùng các ràng buộc màu để giới hạn độ dài đường đi và đạt chiều cao O(log n) với quy tắc cân bằng khác AVL. B-tree cho một nút chứa nhiều khóa và nhiều nhánh, giữ các lá ở cùng độ sâu; số khóa mỗi nút được ràng buộc để cây không quá thưa. Khi nút tương ứng một khối lưu trữ, giảm chiều cao giúp giảm số lần đọc khối. Đây là mức nguyên lý so sánh, chưa yêu cầu thuộc toàn bộ các trường hợp sửa sau xóa của từng họ cây."
          ],
          "sources": [
            {
              "sourceId": "open-data-structures",
              "locator": "Ch. 9 Red-Black Trees; §14.1 The Block Store; §14.2 B-Trees",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Cây nhị phân, cây tìm kiếm nhị phân (BST) và cơ chế tự cân bằng (AVL)"
    },
    {
      "id": "ds-heaps-priority-queues",
      "overview": [
        "Hàng đợi ưu tiên chọn phần tử theo độ ưu tiên, nên khác chính sách đến trước của FIFO. Đống nhị phân phối hợp hai bất biến: hình dạng cây hoàn chỉnh và thứ tự giữa cha với con. Hai bất biến này cho phép biểu diễn cây trong mảng mà vẫn hỗ trợ cập nhật logarit. Chương này giải thích sự khác nhau giữa xây đống từ dưới lên và chèn từng phần tử, cùng các giới hạn khi cần tìm khóa bất kỳ hoặc thay đổi ưu tiên của một phần tử đã nằm trong đống."
      ],
      "sources": [
        {
          "sourceId": "open-data-structures",
          "locator": "§10.1 BinaryHeap",
          "relationship": "primary"
        },
        {
          "sourceId": "mit-6006-2020",
          "locator": "Lecture 8: Binary Heaps",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ds-heap-array-and-sifting",
          "title": "Biểu diễn đống và khôi phục bất biến",
          "level": "core",
          "paragraphs": [
            "Min-heap yêu cầu khóa cha không lớn hơn khóa các con, nhưng không sắp toàn bộ anh em hoặc hai cây con. Với chỉ số mảng bắt đầu từ không, các con của i nằm tại 2i+1 và 2i+2 nếu tồn tại. Thêm cuối rồi đẩy lên sửa vi phạm trên đường về gốc; lấy cực tiểu thay gốc bằng phần tử cuối rồi đẩy xuống. Chiều cao cây hoàn chỉnh là O(log n), nên các phép sửa chỉ đi qua số mức logarit."
          ],
          "sources": [
            {
              "sourceId": "open-data-structures",
              "locator": "§10.1.1 Adding and Removing Elements",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 8: Binary Heaps",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ds-linear-buildheap",
          "title": "Tạo đống tuyến tính và giao diện ưu tiên",
          "level": "core",
          "paragraphs": [
            "Tạo đống từ dưới lên gọi đẩy xuống trên các nút trong từ gần lá về gốc. Phần lớn nút có chiều cao nhỏ, nên tổng chi phí là O(n), dù một lần đẩy xuống có thể O(log n). Lặp n phép chèn chỉ cho cận O(n log n). Hàng đợi ưu tiên hỗ trợ xem cực tiểu O(1), thêm và lấy cực tiểu O(log n); tìm phần tử tùy ý vẫn có thể O(n). Giảm khóa nhanh còn cần biết vị trí phần tử và cập nhật bảng vị trí sau các lần đổi chỗ."
          ],
          "sources": [
            {
              "sourceId": "open-data-structures",
              "locator": "§10.1.2 Summary; §10.1.3 Heap-Sort",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 8: Binary Heaps",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Đống nhị phân (Binary Heap) và hàng đợi ưu tiên"
    },
    {
      "id": "ds-tries-dsu-graph-reps",
      "overview": [
        "Ba họ cấu trúc cuối cùng biểu diễn ba loại thông tin khác nhau: tiền tố chuỗi, phân hoạch tập hợp và quan hệ giữa các đỉnh. Mục tiêu là hiểu cách biểu diễn quyết định những câu hỏi được trả lời nhanh. Trie khai thác độ dài khóa, DSU khai thác việc các thành phần chỉ được gộp, còn danh sách kề khai thác độ thưa của đồ thị. Những giả thiết này được giữ rõ để không dùng một cấu trúc cho thao tác mà nó không hỗ trợ."
      ],
      "sources": [
        {
          "sourceId": "cp-algorithms",
          "locator": "Aho-Corasick: Construction of the trie; Disjoint Set Union",
          "relationship": "primary"
        },
        {
          "sourceId": "open-data-structures",
          "locator": "Ch. 12 Graphs",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ds-character-trie",
          "title": "Trie ký tự và đánh dấu kết thúc khóa",
          "level": "core",
          "paragraphs": [
            "Trie lưu mỗi cạnh bằng một ký tự và mỗi đường từ gốc bằng một tiền tố. Một nút đánh dấu kết thúc từ để phân biệt khóa hoàn chỉnh với tiền tố của khóa dài hơn, chẳng hạn an và anh. Tìm hoặc chèn chuỗi dài L cần O(L) bước nếu chọn cạnh theo ký tự trong O(1); dùng cây ánh xạ cho cạnh có thể thêm chi phí logarit. Bộ nhớ phụ thuộc tổng số tiền tố khác nhau và cách lưu các nhánh, không chỉ số từ."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/string/aho_corasick.html — Construction of the trie",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ds-union-find",
          "title": "DSU: đại diện, gộp theo hạng và nén đường đi",
          "level": "core",
          "paragraphs": [
            "DSU duy trì một phân hoạch bằng rừng cây cha; find trả đại diện của phần tử và union hợp nhất hai lớp. Gộp theo kích thước hoặc hạng tránh nối tùy tiện thành chuỗi dài, còn nén đường đi làm các lần tìm sau ngắn hơn. Kết hợp hai kỹ thuật cho chi phí khấu hao O(α(n)) trên chuỗi thao tác chuẩn, với α là hàm Ackermann ngược, không phải bảo đảm O(1) xấu nhất từng lần. DSU cơ bản không hỗ trợ tách một lớp hay xóa cạnh tùy ý."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/data_structures/disjoint_set_union.html — Path compression; Union by size/rank; Time complexity",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ds-graph-memory-representations",
          "title": "Ma trận kề, danh sách kề và danh sách cạnh",
          "level": "core",
          "paragraphs": [
            "Ma trận kề dùng Θ(V²) ô để kiểm tra cạnh trực tiếp, phù hợp hơn khi đồ thị dày hoặc cần phép toán ma trận. Danh sách kề dùng Θ(V+E) chỗ cho đồ thị thưa và duyệt hàng xóm hiệu quả; tìm một cạnh cụ thể còn phụ thuộc cấu trúc chứa hàng xóm. Danh sách cạnh thích hợp với thuật toán xử lý lần lượt mọi cạnh. Đồ thị vô hướng thường lưu mỗi cạnh ở hai danh sách, còn đa cạnh và tự khuyên cần quy ước biểu diễn rõ."
          ],
          "sources": [
            {
              "sourceId": "open-data-structures",
              "locator": "§12.1 AdjacencyMatrix; §12.2 AdjacencyLists",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 5 Basic Graph Algorithms: representations",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Cây tiền tố (Trie), tập hợp rời rạc (DSU) và biểu diễn đồ thị"
    }
  ]
};
