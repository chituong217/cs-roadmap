export const COURSE_ADVANCED_ALGORITHMS = {
  "id": "advanced-algorithms",
  "code": "CS-18",
  "title": "Thuật toán mở rộng",
  "blockId": "block-3",
  "level": "extension",
  "prerequisites": [
    {
      "courseId": "algorithms-design-analysis",
      "type": "required",
      "reason": "Cần nắm chắc chia để trị, quy hoạch động và phân tích tiệm cận."
    },
    {
      "courseId": "graph-algorithms",
      "type": "required",
      "reason": "Cần nền tảng đồ thị, cây và luồng."
    },
    {
      "courseId": "probability",
      "type": "required",
      "reason": "Cần xác suất cho phân tích thuật toán ngẫu nhiên và băm chuỗi."
    }
  ],
  "overview": [
    "Môn mở rộng này phát triển các thuật toán chuyên biệt từ nền tảng phân tích, cấu trúc dữ liệu, đồ thị và xác suất đã học. Nội dung gồm khớp mẫu văn bản, truy vấn đoạn tĩnh và động, thuật toán ngẫu nhiên, xấp xỉ có bảo đảm, số học modulo và hình học tính toán nhập môn. Những phần này được kết nối bằng yêu cầu nhận diện đúng thông tin có thể tái sử dụng: tiền tố đã khớp, thống kê một đoạn, cận dưới của tối ưu hoặc dấu một phép định hướng. Các cận thời gian luôn đi kèm chi phí xuất kết quả, kích thước khóa hoặc biểu diễn số khi chúng có ảnh hưởng. Môn học phân biệt rõ trả lời chính xác, sai với xác suất nhỏ và nghiệm gần tối ưu có tỷ lệ; ba cách đánh đổi đó không được gọi chung là chạy nhanh. Đây là đường mở rộng có chọn lọc để hiểu cơ chế và điều kiện ứng dụng, không phải danh mục mọi thuật toán thi đấu hay toàn bộ thuật toán hiện đại."
  ],
  "boundaries": [
    "Đánh dấu rõ là môn mở rộng (extension); không đồng nhất việc giải đố lập trình thi đấu (competitive programming) với toàn bộ nền tảng Khoa học Máy tính.",
    "Không cung cấp bằng chứng an toàn mật mã; các thuật toán hình học chính xác về mô hình vẫn cần kiểm soát sai số và tràn số khi triển khai."
  ],
  "sources": [
    {
      "sourceId": "cp-algorithms",
      "locator": "String Processing; Sparse Table; Fenwick Tree; Segment Tree; Primality tests; Geometry",
      "relationship": "primary"
    },
    {
      "sourceId": "erickson-algorithms",
      "locator": "Discrete Probability; Nuts and Bolts; Approximation Algorithms notes",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "aa-string-algorithms",
      "overview": [
        "Tìm mẫu trong văn bản có thể tận dụng những so sánh đã thực hiện thay vì bắt đầu lại từ đầu mỗi khi lệch ký tự. Chương này phát triển hai bảng mô tả trùng tiền tố và một cách tóm tắt chuỗi bằng băm, rồi mở rộng sang nhiều mẫu với trie và liên kết thất bại. Độ dài văn bản, độ dài mẫu, kích thước bảng chữ cái và số kết quả đều có thể tham gia cận thời gian. Khớp bằng băm được phân biệt với kiểm tra bằng nhau chính xác để không biến xác suất thấp thành bảo đảm tuyệt đối."
      ],
      "sources": [
        {
          "sourceId": "cp-algorithms",
          "locator": "String Processing: Prefix function; Z-function; Rabin-Karp; Aho-Corasick",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "aa-prefix-kmp-z",
          "title": "Hàm tiền tố, KMP và Z-function",
          "level": "extension",
          "paragraphs": [
            "Hàm tiền tố π[i] là độ dài tiền tố thực sự dài nhất đồng thời là hậu tố của đoạn kết thúc tại i. Khi lệch ký tự, KMP lùi theo các độ dài biên đã biết thay vì lùi vị trí quét văn bản, cho tổng O(n+m) thời gian. Z[i] đo độ dài đoạn bắt đầu tại i trùng tiền tố toàn chuỗi; duy trì cửa sổ trùng giúp tính tuyến tính. Hai bảng diễn tả quan hệ khác nhau, nên phải giữ đúng định nghĩa chỉ số và xử lý ký tự phân cách không thuộc bảng chữ cái khi ghép mẫu với văn bản."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/string/prefix-function.html — Efficient Algorithm; Knuth-Morris-Pratt",
              "relationship": "primary"
            },
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/string/z-function.html — Efficient algorithm",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aa-rolling-hash-verification",
          "title": "Băm đa thức và Rabin–Karp",
          "level": "extension",
          "paragraphs": [
            "Băm đa thức tóm tắt chuỗi bằng tổng các mã ký tự nhân lũy thừa cơ số trong một modulo, cho phép tính nhanh băm đoạn hoặc cập nhật cửa sổ. Hai chuỗi khác vẫn có thể cùng băm, nên nhận kết quả chỉ từ băm tạo khả năng báo khớp sai. Kiểm tra lại ký tự làm câu trả lời chính xác nhưng có thể tăng thời gian khi nhiều ứng viên va chạm. Chọn modulo lớn hoặc nhiều băm làm giảm rủi ro trong mô hình ngẫu nhiên đã nêu, không tạo chứng minh không bao giờ va chạm."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/string/string-hashing.html — Calculation of the hash; Improve no-collision probability",
              "relationship": "primary"
            },
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/string/rabin-karp.html — Algorithm",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aa-aho-corasick",
          "title": "Nhiều mẫu và liên kết thất bại",
          "level": "extension",
          "paragraphs": [
            "Aho–Corasick bắt đầu từ trie của các mẫu rồi thêm liên kết thất bại từ một trạng thái về hậu tố dài nhất còn là tiền tố của mẫu nào đó. Quét văn bản cập nhật trạng thái để dùng lại phần hậu tố phù hợp sau khi lệch, đồng thời phát các mẫu kết thúc tại trạng thái hoặc trên chuỗi liên kết đầu ra. Chi phí phải tính cả số lần xuất hiện được báo. Biểu diễn chuyển trạng thái bằng mảng theo bảng chữ cái hay cấu trúc thưa tạo đánh đổi thời gian và bộ nhớ khác nhau."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/string/aho_corasick.html — Construction of an automaton; Applications",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Thuật toán xử lý chuỗi và khớp mẫu chính xác"
    },
    {
      "id": "aa-range-query-structures",
      "overview": [
        "Truy vấn đoạn cần kết hợp thông tin của nhiều phần tử trong khi dữ liệu có thể thay đổi. Chương này chọn cấu trúc từ tính chất đại số của phép gộp và loại cập nhật, thay vì dùng cùng một cây cho mọi câu hỏi. Tổng có nghịch đảo cho phép lấy hiệu tiền tố, còn cực tiểu có tính lũy đẳng cho phép chồng hai khối. Khi cập nhật động, thông tin lưu tại các nút cần được sửa theo một bất biến rõ, nhất là khi trì hoãn việc truyền cập nhật xuống con."
      ],
      "sources": [
        {
          "sourceId": "cp-algorithms",
          "locator": "Sparse Table; Fenwick Tree; Segment Tree",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "aa-prefix-sparse-table",
          "title": "Tiền tố và bảng thưa cho dữ liệu tĩnh",
          "level": "extension",
          "paragraphs": [
            "Tổng đoạn nửa mở [l,r) bằng prefix[r]−prefix[l] sau O(n) tiền xử lý, nhưng thay một phần tử có thể làm nhiều tổng tiền tố đổi. Sparse table lưu kết quả trên các khối độ dài lũy thừa hai, dùng O(n log n) bộ nhớ. Với phép gộp kết hợp và lũy đẳng như min, hai khối phủ có thể chồng nhau mà không làm đổi kết quả, cho truy vấn O(1). Tổng không lũy đẳng nên không dùng mẹo chồng khối ấy; có thể tách thành các khối rời với chi phí khác."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/data_structures/sparse-table.html — Range Sum Queries; Range Minimum Queries",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aa-fenwick-bit-intervals",
          "title": "Fenwick và phân rã chỉ số nhị phân",
          "level": "extension",
          "paragraphs": [
            "Fenwick lưu tổng những đoạn có ranh giới xác định từ bit thấp nhất của chỉ số. Với quy ước chỉ số bắt đầu một, truy vấn tiền tố liên tục trừ lowbit, còn cộng một lượng tại điểm liên tục cộng lowbit để sửa các đoạn chứa điểm đó. Cả hai tốn O(log n) và bộ nhớ O(n). Lấy tổng đoạn dùng phép trừ hai tiền tố; các biến thể cho min không tự hỗ trợ thay giá trị tùy ý vì thiếu nghịch đảo. Phiên bản cập nhật cộng đơn giản dựa trên phép gộp cộng giao hoán."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/data_structures/fenwick.html — Definition of g(i); One-based indexing; Range operations",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aa-segment-monoid",
          "title": "Segment tree và phép gộp kết hợp",
          "level": "extension",
          "paragraphs": [
            "Segment tree chia đoạn thành hai nửa và lưu một thống kê của mỗi đoạn. Phép gộp phải kết hợp để trả cùng kết quả khi phân rã khác nhau; giá trị đơn vị giúp xử lý phần không giao truy vấn. Truy vấn đoạn và cập nhật điểm tốn O(log n) trong cây cân bằng chuẩn, xây cây O(n). Với phép gộp không giao hoán như nối chuỗi hoặc nhân ma trận, thứ tự trái phải phải được giữ. Chỉ biết giá trị nhỏ nhất không đủ để cập nhật mọi dạng biến đổi tùy ý."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/data_structures/segment_tree.html — Simplest form; Construction; Sum queries; Update queries",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aa-lazy-tag-composition",
          "title": "Cập nhật lười và hợp thành nhãn",
          "level": "extension",
          "paragraphs": [
            "Lazy propagation lưu một biến đổi chưa đẩy xuống con nhưng đã được phản ánh trong thống kê của nút hiện tại. Khi cộng c cho đoạn dài L, tổng tăng cL; chỉ sửa tổng thành tổng+c là sai. Các nhãn phải hợp thành theo đúng thứ tự: gán rồi cộng khác cộng rồi gán. Trước khi đi xuống một phần đoạn, nhãn còn nợ được truyền cho con và xóa tại cha. Mỗi loại cập nhật cần chứng minh có thể tác động lên thống kê mà không đọc mọi phần tử trong đoạn."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/data_structures/segment_tree.html — Range updates (Lazy Propagation): Addition; Assignment",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Cấu trúc dữ liệu truy vấn và cập nhật trên đoạn"
    },
    {
      "id": "aa-randomized-approximation",
      "overview": [
        "Ngẫu nhiên hóa và xấp xỉ trả lời hai câu hỏi khác nhau: có thể đổi cách lựa chọn để đạt bảo đảm kỳ vọng hoặc xác suất hay không, và có thể chấp nhận nghiệm gần tối ưu với cận chất lượng hay không. Chương này tách tính đúng, thời gian và xác suất sai; sau đó xây tỷ lệ xấp xỉ qua cận dưới cho nghiệm tối ưu. Số học modulo và kiểm tra nguyên tố cung cấp một ứng dụng của phân tích xác suất, nhưng không được xem như một khóa mật mã hoàn chỉnh."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Discrete Probability notes; Approximation Algorithms notes",
          "relationship": "primary"
        },
        {
          "sourceId": "cp-algorithms",
          "locator": "Primality tests; Binary Exponentiation",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "aa-las-vegas-monte-carlo",
          "title": "Las Vegas, Monte Carlo và khuếch đại",
          "level": "extension",
          "paragraphs": [
            "Las Vegas luôn trả kết quả đúng khi trả lời, còn thời gian chạy phụ thuộc ngẫu nhiên; thời gian kỳ vọng đa thức là một bảo đảm của một số thuật toán, không phải định nghĩa của cả lớp. Monte Carlo cho phép xác suất sai có cận dưới một bảo đảm thời gian đã nêu, không nhất thiết có thời gian hoàn toàn cố định. Lặp độc lập và lấy đa số có thể giảm sai số hai phía khi mỗi lần tốt hơn đoán ngẫu nhiên; lỗi một phía cần quy tắc tổng hợp tương ứng. Phải nêu đầu vào cố định và xác suất lấy trên lựa chọn ngẫu nhiên nào."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Discrete Probability notes; Nuts and Bolts notes",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aa-vertex-cover-set-cover",
          "title": "Xấp xỉ phủ đỉnh và phủ tập",
          "level": "extension",
          "paragraphs": [
            "Lấy một cặp ghép cực đại rồi chọn cả hai đầu mỗi cạnh cho một phủ đỉnh có kích thước không quá hai lần tối ưu: mọi phủ đỉnh phải chọn ít nhất một đầu của mỗi cạnh rời nhau trong cặp ghép. Cực đại theo việc không thêm được cạnh không đồng nghĩa cặp ghép lớn nhất. Với phủ tập không trọng số, chọn tập phủ nhiều phần tử chưa phủ nhất cho cận H_n≤1+ln n, được giải thích bằng tính phí từng phần tử. Hai chứng minh dùng cận dưới cho tối ưu, không chỉ đo thực nghiệm."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Approximation Algorithms notes: Vertex Cover; Set Cover",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aa-metric-tsp",
          "title": "TSP metric và đường vòng qua cây khung",
          "level": "extension",
          "paragraphs": [
            "Trong TSP metric, khoảng cách không âm, đối xứng và thỏa bất đẳng thức tam giác. Cây khung nhỏ nhất là cận dưới của một chu trình tối ưu sau khi bỏ một cạnh chu trình. Nhân đôi cạnh cây tạo hành trình Euler có chi phí hai lần cây; bỏ qua các đỉnh đã thăm không tăng độ dài nhờ tam giác, cho xấp xỉ hệ số hai. Nếu bỏ giả thiết metric, bước đi tắt có thể tăng chi phí mạnh và bảo đảm không còn đúng. Đây là nghiệm gần tối ưu có chứng minh, khác một heuristic chỉ có kết quả tốt trên vài mẫu."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Approximation Algorithms notes: Traveling Salesman",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aa-modular-primality",
          "title": "Lũy thừa modulo và kiểm tra nguyên tố",
          "level": "extension",
          "paragraphs": [
            "Bình phương liên tiếp tính a^k modulo n bằng O(log k) phép nhân modulo, nhưng chi phí bit mỗi phép nhân vẫn phụ thuộc độ dài n. Kiểm tra Fermat đơn lẻ có thể bị số giả nguyên tố và số Carmichael đánh lừa. Miller–Rabin phân tích n−1 thành 2^s d rồi tìm chứng cứ hợp số; với n lẻ hợp số, một cơ số ngẫu nhiên hợp lệ có xác suất bỏ sót bị chặn, và lặp độc lập giảm rủi ro. Một danh sách cơ số cố định chỉ cho quyết định tất định trên miền số đã được chứng minh, không phải mọi số nguyên dài tùy ý."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/algebra/binary-exp.html — Effective computation of large exponents modulo a number",
              "relationship": "primary"
            },
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/algebra/primality_tests.html — Miller-Rabin primality test",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Thuật toán ngẫu nhiên và thuật toán xấp xỉ có cận bảo đảm"
    },
    {
      "id": "aa-computational-geometry-intro",
      "overview": [
        "Hình học tính toán đòi hỏi chuyển quan hệ không gian thành phép kiểm tra có dấu và xử lý các trường hợp suy biến. Chương này dùng vector, tích vô hướng và định thức hai chiều để định nghĩa hướng rẽ, rồi xây kiểm tra giao đoạn và bao lồi. Mỗi phép so sánh đều có giả thiết về biểu diễn số; một sai dấu nhỏ có thể làm thuật toán tạo cấu trúc sai chứ không chỉ kết quả hơi lệch. Quy ước giữ hay bỏ điểm thẳng hàng được công bố như một phần đầu ra."
      ],
      "sources": [
        {
          "sourceId": "cp-algorithms",
          "locator": "Basic Geometry; Check if two segments intersect; Convex hull construction",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "aa-orientation-robustness",
          "title": "Phép định hướng và độ tin cậy số học",
          "level": "extension",
          "paragraphs": [
            "Với ba điểm A,B,C, dấu định thức (B−A)×(C−A) cho biết rẽ trái, rẽ phải hay thẳng hàng theo quy ước trục. Tọa độ nguyên cho phép kiểm tra chính xác nếu kiểu số đủ rộng cho các tích và hiệu; tràn số có thể đảo dấu. Với dấu chấm động, dùng một epsilon tùy ý không tự bảo đảm tính nhất quán của các quyết định hình học. Chương giới thiệu kiểm soát miền tọa độ và số học chính xác khi cần, thay vì tuyên bố tránh được mọi sai số chỉ bằng một hằng số nhỏ."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/geometry/basic-geometry.html — Cross product; Dot product",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aa-segment-intersection-cases",
          "title": "Giao đoạn và các trường hợp suy biến",
          "level": "extension",
          "paragraphs": [
            "Hai đoạn không thẳng hàng cắt nhau khi các đầu mút của mỗi đoạn nằm khác phía hoặc trên đường thẳng chứa đoạn kia, kết hợp kiểm tra phạm vi tương ứng. Khi cả hai thẳng hàng, phải xét chồng khoảng chiếu chứ không dùng dấu định hướng đơn thuần. Điểm trùng, đoạn độ dài không và chạm đầu mút cần quy ước có tính là giao hay không. Tách các trường hợp này giúp kiểm tra hình học khớp với định nghĩa đầu ra, tránh lấy hình minh họa tổng quát làm bằng chứng bao quát mọi biên."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/geometry/check-segments-intersection.html — Algorithm",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aa-convex-hull-scan",
          "title": "Bao lồi bằng quét và chuỗi đơn điệu",
          "level": "extension",
          "paragraphs": [
            "Bao lồi là tập lồi nhỏ nhất chứa các điểm, có biên là đa giác trong trường hợp không suy biến. Graham scan sắp theo góc rồi loại các điểm làm chuỗi rẽ sai hướng; Andrew sắp từ điển rồi dựng nửa dưới và nửa trên bằng ngăn xếp. Mỗi điểm được đẩy và bỏ số lần hằng, nên sau sắp tổng thời gian O(n log n). Cần xử lý điểm trùng, mọi điểm thẳng hàng và quyết định giữ tất cả điểm biên hay chỉ các đỉnh cực trị, vì điều này đổi điều kiện loại điểm."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/geometry/convex-hull.html — Graham’s scan Algorithm; Monotone chain Algorithm",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Hình học tính toán nhập môn"
    }
  ]
};
