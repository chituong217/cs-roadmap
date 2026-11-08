export const COURSE_ALGORITHMS_DESIGN_ANALYSIS = {
  "id": "algorithms-design-analysis",
  "code": "CS-16",
  "title": "Phân tích và thiết kế thuật toán",
  "blockId": "block-3",
  "level": "core",
  "prerequisites": [
    {
      "courseId": "data-structures",
      "type": "required",
      "reason": "Cần nắm vững mảng, bảng băm, cây, đống nhị phân và phân tích khấu hao cơ bản."
    },
    {
      "courseId": "discrete-math",
      "type": "required",
      "reason": "Cần quy nạp toán học, bất biến vòng lặp, tổng tiệm cận và hệ thức đệ quy."
    },
    {
      "courseId": "probability",
      "type": "recommended",
      "reason": "Cần kỳ vọng và biến ngẫu nhiên chỉ thị để phân tích trường hợp trung bình của Quicksort ngẫu nhiên và bảng băm."
    }
  ],
  "overview": [
    "Thiết kế thuật toán là quá trình biến một đặc tả thành phương pháp luôn cho kết quả đúng trong các giả thiết đã nêu, rồi giải thích tài nguyên nó cần. Môn học phát triển mô hình chi phí, bất biến và quy nạp trước khi nghiên cứu tìm kiếm, sắp xếp, chia để trị, quy hoạch động, tham lam và tìm kiếm tổ hợp. Các kỹ thuật được đối chiếu bằng cấu trúc bài toán: phụ thuộc giữa các trạng thái, khả năng trao đổi lựa chọn, hoặc thông tin có thể dùng để cắt nhánh. Cận dưới giúp nhận ra giới hạn của một mô hình, còn phân tích đầu vào cho thấy một thuật toán tuyến tính theo giá trị số có thể vẫn rất tốn kém theo số bit. Mục tiêu là hiểu lý do chọn phương pháp và cách kiểm tra lập luận, thay vì nhận diện từ khóa để áp dụng công thức. Nội dung FFT, matroid và truy hồi tổng quát được đánh dấu mở rộng để giữ đường học cốt lõi liền mạch."
  ],
  "boundaries": [
    "Không trình bày thuật toán như mẹo giải bài thi lập trình; mọi kỹ thuật thiết kế (đặc biệt Tham lam và Quy hoạch động) đều phải đi kèm điều kiện áp dụng và phương pháp chứng minh hoặc phản ví dụ.",
    "Các mô hình số học và tính ngẫu nhiên phải được công bố; các phần mở rộng nhận diện cơ chế, không tuyên bố bao quát mọi thuật toán chuyên biệt."
  ],
  "sources": [
    {
      "sourceId": "erickson-algorithms",
      "locator": "Ch. 0–4; Appendix II; Fast Fourier Transforms; Matroids",
      "relationship": "primary"
    },
    {
      "sourceId": "mit-6006-2020",
      "locator": "Lectures 1, 3, 5, 8, 15–18",
      "relationship": "primary"
    },
    {
      "sourceId": "open-data-structures",
      "locator": "Ch. 11 Sorting Algorithms",
      "relationship": "primary"
    },
    {
      "sourceId": "cp-algorithms",
      "locator": "https://cp-algorithms.com/geometry/nearest_points.html — Algorithm; Evaluation of the complexity",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "ada-cost-models-divide-conquer-recurrences",
      "overview": [
        "Phân tích thuật toán bắt đầu bằng việc xác định đầu vào, kết quả cần trả và những phép toán được tính chi phí. Chương này kết nối đặc tả với chứng minh đúng, sau đó dùng tổng, truy hồi và ký hiệu tiệm cận để mô tả tài nguyên. Mô hình word-RAM là một giả thiết về kích thước từ máy và các phép cơ bản; nó không cho phép coi số nguyên dài tùy ý có chi phí hằng số. Các định lý truy hồi được dùng trong phạm vi điều kiện của chúng."
      ],
      "sources": [
        {
          "sourceId": "mit-6006-2020",
          "locator": "Lectures 1, 3",
          "relationship": "primary"
        },
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 0–1; Appendix II: Solving Recurrences",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ada-ram-input-and-bounds",
          "title": "Kích thước đầu vào và các loại cận",
          "level": "core",
          "paragraphs": [
            "Kích thước n có thể là số phần tử, số đỉnh cạnh hoặc số bit của biểu diễn, nên phải được xác định trước khi nói O(n). Word-RAM tính một phép cơ bản trên một số từ máy là hằng số, với từ đủ chứa địa chỉ cần dùng; xử lý số nguyên nhiều từ cần tính riêng. Cận xấu nhất lấy lớn nhất trên đầu vào cùng kích thước. Cận kỳ vọng phải nêu phân bố hoặc nguồn ngẫu nhiên; cận khấu hao xét tổng chuỗi thao tác, không cần giả thiết đầu vào ngẫu nhiên."
          ],
          "sources": [
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 1: Algorithms and Computation",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 0 Introduction: analysis",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ada-invariants-induction-termination",
          "title": "Bất biến, quy nạp và tính dừng",
          "level": "core",
          "paragraphs": [
            "Chứng minh vòng lặp tách khởi tạo, bảo toàn và kết luận khi thoát, đồng thời cần một đại lượng giảm hữu hạn để bảo đảm dừng. Với đệ quy, giả thiết quy nạp chỉ áp dụng cho bài toán con nhỏ hơn theo một thứ tự hợp lệ. Tính đúng bộ phận khẳng định kết quả đúng nếu kết thúc; tính đúng toàn phần còn yêu cầu kết thúc. Chọn bất biến phải phản ánh ý nghĩa dữ liệu đang lưu, chẳng hạn đoạn đã sắp hay miền còn có thể chứa nghiệm."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 0 Introduction; Ch. 1 Recursion",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 3: Sets and Sorting",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ada-recursion-trees-master",
          "title": "Cây đệ quy, phương pháp thế và Master",
          "level": "core",
          "paragraphs": [
            "Với T(n)=aT(n/b)+f(n), a≥1 và b>1 là hằng số, cây đệ quy cộng công việc theo mức rồi xét chi phí lá. Master so sánh f(n) với n^(log_b a); các trường hợp lệch đa thức cần khoảng cách lũy thừa, và trường hợp f lớn cần điều kiện đều a f(n/b)≤c f(n) với c<1. Trường hợp bằng nhau sinh thêm nhân tử logarit trong phiên bản cơ bản. Phương pháp thế dùng quy nạp để xác nhận cận và các điều kiện cơ sở, thay vì đoán từ vài giá trị nhỏ."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Appendix II: Solving Recurrences — Guess and Confirm; Recursion Trees; Master Theorems",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 3: Sets and Sorting",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ada-unequal-recursion",
          "title": "Truy hồi không đều và giới hạn công thức",
          "level": "extension",
          "paragraphs": [
            "Các lời gọi kích thước khác nhau như n/3 và 2n/3 không khớp trực tiếp mẫu Master đều. Cây đệ quy hoặc quy nạp vẫn cho phép phân tích khi đo đúng công việc từng mức và độ sâu các nhánh. Akra–Bazzi là hướng mở rộng cho tổng a_i T(b_i n)+g(n), với a_i>0 và 0<b_i<1 cùng các điều kiện đều thích hợp; số mũ p thỏa tổng a_i b_i^p=1. Mức học này nhận diện dạng và giả thiết, chưa coi công thức tổng quát là thay thế cho một chứng minh áp dụng hợp lệ."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Appendix II: Solving Recurrences §4 The Nuclear Bomb (Akra–Bazzi), pp. 10–11",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Mô hình chi phí, tính đúng đắn và truy hồi chia để trị (Master Theorem)"
    },
    {
      "id": "ada-searching-sorting-lower-bounds",
      "overview": [
        "Tìm kiếm và sắp xếp cho thấy cùng một mục tiêu có nhiều thuật toán với bảo đảm khác nhau. Chương này dùng bất biến đoạn để hiểu tìm kiếm nhị phân, phân hoạch và trộn; dùng cây quyết định để giới hạn các thuật toán chỉ so sánh. Khi khóa có cấu trúc số nguyên, thuật toán có thể khai thác thông tin ngoài so sánh nhưng phải tính miền khóa và số chữ số. Tính ổn định, bộ nhớ phụ và dữ liệu trùng lặp được xem cùng độ phức tạp thời gian."
      ],
      "sources": [
        {
          "sourceId": "mit-6006-2020",
          "locator": "Lectures 3, 5, 8",
          "relationship": "primary"
        },
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 1 Recursion",
          "relationship": "primary"
        },
        {
          "sourceId": "open-data-structures",
          "locator": "Ch. 11 Sorting Algorithms",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ada-binary-search-monotonicity",
          "title": "Tìm kiếm nhị phân trên miền đơn điệu",
          "level": "core",
          "paragraphs": [
            "Tìm kiếm nhị phân giữ một khoảng còn chứa ranh giới giữa hai miền của một vị từ đơn điệu. Quy ước khoảng đóng hay nửa mở quyết định cách cập nhật và điều kiện dừng; trường hợp tất cả đúng hoặc tất cả sai phải có kết quả rõ. Trên mảng đã sắp, phép so sánh tạo vị từ này. Trên không gian đáp án, mỗi phép thử có chi phí riêng, nên tổng thời gian là số lần thử nhân chi phí kiểm tra, không tự động chỉ O(log n)."
          ],
          "sources": [
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 3: Sets and Sorting",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 1 Recursion: binary search",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ada-merge-heap-sort",
          "title": "Trộn, vun đống và tính ổn định",
          "level": "core",
          "paragraphs": [
            "Merge sort sắp hai nửa rồi trộn bằng cách luôn lấy đầu nhỏ hơn; quy tắc xử lý hai khóa bằng nhau quyết định tính ổn định. Bản mảng thông thường tốn Θ(n log n) thời gian và Θ(n) bộ nhớ trộn. Heapsort tạo max-heap rồi chuyển cực đại về cuối vùng chưa sắp, đạt O(n log n) xấu nhất với O(1) bộ nhớ phụ ở bản lặp nhưng thường không ổn định. Hai thuật toán cho thấy cùng cận thời gian không đồng nghĩa cùng hành vi bộ nhớ hoặc thứ tự khóa bằng nhau."
          ],
          "sources": [
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lectures 3, 8",
              "relationship": "primary"
            },
            {
              "sourceId": "open-data-structures",
              "locator": "§11.1 Comparison-Based Sorting",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ada-quicksort-partitions",
          "title": "Quicksort, phân hoạch và ngẫu nhiên hóa",
          "level": "core",
          "paragraphs": [
            "Phân hoạch tách các phần tử quanh một chốt rồi đệ quy trên những miền còn lại. Lomuto thường đặt chốt về vị trí cuối cùng, còn Hoare trả ranh giới hai miền và không nhất thiết cố định chốt tại đó; ghép điều kiện đệ quy của hai cách có thể gây lặp vô hạn hoặc bỏ sót phần tử. Chốt ngẫu nhiên cho thời gian kỳ vọng O(n log n) với mọi đầu vào cố định, nhưng vẫn có trường hợp xấu Θ(n²). Phân hoạch ba ngả hữu ích khi nhiều khóa bằng nhau."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 1 Recursion: Quicksort",
              "relationship": "primary"
            },
            {
              "sourceId": "open-data-structures",
              "locator": "§11.1.2 Quicksort",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ada-comparison-lower-bound-integer-sort",
          "title": "Cận dưới so sánh và sắp xếp theo chữ số",
          "level": "core",
          "paragraphs": [
            "Với n khóa phân biệt, thuật toán sắp xếp dựa trên so sánh cần phân biệt n! hoán vị. Cây quyết định nhị phân vì thế có chiều cao ít nhất log₂(n!)=Ω(n log n), là cận xấu nhất trong mô hình này. Counting sort dùng O(n+k) thời gian cho khóa trong miền k giá trị; radix sort kết hợp các lượt sắp ổn định theo chữ số. Những cận tuyến tính không mâu thuẫn cận dưới vì khai thác biểu diễn khóa; số chữ số và chi phí đọc khóa vẫn phải tính."
          ],
          "sources": [
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 5: Linear Sorting",
              "relationship": "primary"
            },
            {
              "sourceId": "open-data-structures",
              "locator": "§11.1.4 Lower Bounds; §11.2 Counting Sort and Radix Sort",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Tìm kiếm nhị phân, các thuật toán sắp xếp và cận dưới lý thuyết thông tin"
    },
    {
      "id": "ada-divide-and-conquer-paradigm",
      "overview": [
        "Chia để trị thiết kế lời giải bằng phân rã, giải các phần nhỏ và kết hợp kết quả. Mấu chốt không chỉ là gọi đệ quy mà là chọn sự phân chia giúp phần kết hợp đủ rẻ và giữ đúng thông tin cần thiết. Các ví dụ trong chương thay đổi từ số học sang chọn phần tử và hình học để chỉ ra cấu trúc chung, đồng thời phân biệt cận kỳ vọng với cận xấu nhất. FFT được giới thiệu như một sự đổi biểu diễn có ích, không như một phép biến đổi phải học thuộc công thức."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 1 Recursion; Fast Fourier Transforms notes",
          "relationship": "primary"
        },
        {
          "sourceId": "cp-algorithms",
          "locator": "https://cp-algorithms.com/geometry/nearest_points.html — Algorithm; Evaluation of the complexity",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ada-karatsuba-reuse",
          "title": "Karatsuba và tái sử dụng kết quả con",
          "level": "core",
          "paragraphs": [
            "Tách hai số n chữ số thành phần cao và thấp cho phép biểu diễn tích bằng các tích nhỏ hơn. Cách trực tiếp dùng bốn tích nửa kích thước; Karatsuba dùng ba tích nhờ suy ra tích chéo từ tích của các tổng và hai tích đã biết. Truy hồi T(n)=3T(n/2)+O(n) cho Θ(n^(log₂3)) trong mô hình chi phí chữ số phù hợp. Lợi ích đến từ giảm số bài toán con, còn chi phí cộng, nhớ và độ dài kết quả không được bỏ khỏi phân tích."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 1 Recursion: Fast Multiplication",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ada-selection-and-nearest-pair",
          "title": "Chọn phần tử và cặp điểm gần nhất",
          "level": "core",
          "paragraphs": [
            "Quickselect phân hoạch như quicksort nhưng chỉ đi vào miền chứa hạng cần tìm; với chốt ngẫu nhiên đạt thời gian kỳ vọng O(n), còn chốt xấu có thể gây Θ(n²). Trong bài toán cặp điểm gần nhất trên mặt phẳng Euclid, chia theo hoành độ cần kết hợp bằng dải gần đường chia, duy trì thứ tự tung độ và dùng lập luận đóng gói để chỉ so sánh số láng giềng hằng số. Việc sắp lại toàn bộ ở mỗi mức có thể làm mất cận O(n log n)."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 1 Recursion: Selection",
              "relationship": "primary"
            },
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/geometry/nearest_points.html — Algorithm; Evaluation of the complexity",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ada-fft-convolution",
          "title": "Đa thức, tích chập và ý tưởng FFT",
          "level": "extension",
          "paragraphs": [
            "Tích hai đa thức có các hệ số là tổng các tích hệ số đầu vào, gọi là tích chập. Biểu diễn bằng giá trị tại đủ điểm biến phép nhân đa thức thành nhân từng cặp giá trị, rồi nội suy để trở lại hệ số. FFT chọn các căn đơn vị có cấu trúc đối xứng để đánh giá và nội suy trong O(n log n). Mục này cần số phức cơ bản từ khối toán, chỉ giới thiệu cơ chế và giới hạn sai số số thực; biến đổi số học modulo là một hướng chuyên sâu riêng."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Fast Fourier Transforms notes: Polynomial Multiplication; FFT",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Mô hình thiết kế Chia để trị (Divide and Conquer)"
    },
    {
      "id": "ada-dynamic-programming",
      "overview": [
        "Quy hoạch động tổ chức các bài toán con có phụ thuộc chồng lặp thành một hệ trạng thái có nghĩa chính xác. Chương này đi từ định nghĩa trạng thái đến công thức chuyển, trường hợp cơ sở và thứ tự đánh giá, thay vì đoán một bảng rồi gắn công thức. Đồ thị phụ thuộc giải thích tại sao một thứ tự tính là hợp lệ. Các ví dụ còn tách giá trị tối ưu khỏi cách khôi phục nghiệm và tách số trạng thái khỏi số bước chuyển, vì đây là hai nguồn chi phí khác nhau."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 3 Dynamic Programming",
          "relationship": "primary"
        },
        {
          "sourceId": "mit-6006-2020",
          "locator": "Lectures 15–18",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ada-dp-state-dag",
          "title": "Trạng thái đủ thông tin và đồ thị phụ thuộc",
          "level": "core",
          "paragraphs": [
            "Một trạng thái phải tóm tắt đủ lịch sử để những lựa chọn tương lai chỉ phụ thuộc vào nó. Công thức truy hồi chia các nghiệm theo lựa chọn tiếp theo hoặc cuối cùng, rồi kết hợp giá trị các trạng thái nhỏ hơn. Nếu đồ thị phụ thuộc là DAG, có thể đánh giá theo thứ tự topo; đệ quy có nhớ thực hiện điều này theo nhu cầu. Một khóa nhớ thiếu thông tin sẽ trộn các bài toán khác nhau, nên chạy nhanh vẫn có thể cho kết quả sai."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 3: recursive structure and memoization",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 15: Dynamic Programming, Part 1",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ada-dp-sequences-knapsack",
          "title": "Dãy con, đường đi và ba lô",
          "level": "core",
          "paragraphs": [
            "LCS dùng tiền tố hai dãy để mô tả lựa chọn ghép ký tự cuối hoặc bỏ một ký tự; bảng hai chiều làm rõ các phụ thuộc. Ba lô 0/1 dùng số món đã xét và sức chứa còn lại, phân biệt với ba lô không giới hạn. Cận O(nW) là giả đa thức khi W được mã hóa nhị phân vì độ dài đầu vào chỉ chứa log W bit. Khi nén xuống một hàng, chiều duyệt sức chứa quyết định một món có bị dùng nhiều lần hay không."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 3: Longest Common Subsequence; Subset Sum",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lectures 17–18: Sequence alignment; Knapsack",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ada-dp-complexity-reconstruction",
          "title": "Đếm chi phí, nén bộ nhớ và truy vết",
          "level": "core",
          "paragraphs": [
            "Thời gian quy hoạch động được tính bằng tổng số lựa chọn được duyệt trên mọi trạng thái, cộng chi phí biểu diễn và so sánh giá trị. Số ô đơn thuần không đủ nếu mỗi ô thử nhiều phép tách. Lưu lựa chọn tối ưu hoặc cạnh tiền nhiệm giúp khôi phục một nghiệm; hòa điểm cần quy tắc nhất quán. Nén bộ nhớ chỉ an toàn khi dữ liệu bị ghi đè không còn cần cho bước sau. Nếu vẫn cần truy vết, có thể phải lưu thêm thông tin hoặc chấp nhận tính lại."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 3 Dynamic Programming: evaluation order and reconstruction",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lectures 15–18",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Quy hoạch động (Dynamic Programming)"
    },
    {
      "id": "ada-greedy-algorithms",
      "overview": [
        "Thuật toán tham lam quyết định một lựa chọn cục bộ rồi không quay lại sửa. Khác quy hoạch động, nó không mặc nhiên so sánh mọi khả năng có thể dẫn đến tối ưu. Chương này tập trung điều kiện cho phép lựa chọn sớm mà vẫn giữ tồn tại một nghiệm tối ưu tương thích. Lập luận trao đổi và dẫn trước cung cấp hai cách chứng minh, còn phản ví dụ giúp phát hiện một tiêu chí hấp dẫn nhưng sai. Chi phí sắp và cấu trúc duy trì các ứng viên được tính cùng vòng lựa chọn."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 4 Greedy Algorithms; Matroids notes",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ada-greedy-exchange",
          "title": "Lập luận trao đổi và dẫn trước",
          "level": "core",
          "paragraphs": [
            "Lập luận trao đổi bắt đầu từ một nghiệm tối ưu rồi thay một phần bằng lựa chọn tham lam mà không làm xấu giá trị hoặc vi phạm tính khả thi. Khi có thể lặp bước này, thuật toán dần tạo một nghiệm tối ưu. Cách chứng minh dẫn trước so sánh từng tiền tố của nghiệm tham lam với nghiệm khác theo một đại lượng phù hợp. Cả hai đều cần chỉ ra chính xác cấu trúc được bảo toàn; câu nói chọn tốt nhất hiện tại không phải lý do lựa chọn đó an toàn."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 4 Greedy Algorithms: exchange arguments",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ada-interval-huffman-counterexamples",
          "title": "Lịch khoảng, mã Huffman và phản ví dụ",
          "level": "core",
          "paragraphs": [
            "Với mục tiêu chọn nhiều khoảng không giao nhau nhất, chọn khoảng kết thúc sớm tạo chỗ lớn cho phần còn lại và có chứng minh trao đổi. Khi mỗi khoảng có trọng số, tiêu chí đó có thể thất bại và cần quy hoạch động. Huffman ghép hai tần suất nhỏ nhất để xây cây mã tiền tố có độ dài trung bình tối ưu trong mô hình mã nhị phân đã nêu. Ví dụ đổi tiền cho thấy kết luận tham lam đúng với một hệ mệnh giá không tự chuyển sang mọi hệ khác."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 4: Scheduling; Huffman Codes",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ada-matroid-scope",
          "title": "Matroid như cấu trúc bảo đảm tham lam",
          "level": "extension",
          "paragraphs": [
            "Matroid gồm một tập nền và họ tập độc lập đóng dưới việc lấy tập con, đồng thời thỏa tính trao đổi giữa hai tập độc lập khác kích thước. Cấu trúc này giải thích tại sao chọn phần tử theo trọng số rồi giữ tính độc lập có thể tìm một cơ sở tối ưu. Rừng cạnh của đồ thị là ví dụ nối đến Kruskal. Mục mở rộng này làm rõ tham lam có thể được bảo đảm bởi cấu trúc toán học, nhưng không gán nhãn matroid cho mọi bài toán có ràng buộc tương tự."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Matroids notes: Independence Systems; Greedy Algorithms",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Thuật toán Tham lam và kỹ thuật chứng minh tính đúng đắn"
    },
    {
      "id": "ada-backtracking-branch-bound",
      "overview": [
        "Một số bài toán chưa có cách tránh xét nhiều khả năng. Quay lui tổ chức không gian nghiệm thành cây quyết định và chỉ mở rộng những tiền tố còn hợp lệ; nhánh cận bổ sung đánh giá tối ưu có thể đạt để loại cả một miền tìm kiếm. Chương này phân biệt loại nhánh vì vô nghiệm với loại nhánh vì không thể cải thiện nghiệm tốt nhất hiện có. Cách phục hồi trạng thái và tính an toàn của cận là điều kiện đúng, còn thứ tự duyệt chủ yếu tác động hiệu năng."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 2 Backtracking; Fast Exponential Algorithms notes",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ada-backtracking-state-restore",
          "title": "Cây tìm kiếm và phục hồi trạng thái",
          "level": "core",
          "paragraphs": [
            "Mỗi nút quay lui biểu diễn một lời giải bộ phận; các cạnh là lựa chọn tiếp theo. Bất biến phải mô tả phần đã quyết định và ràng buộc còn giữ, chẳng hạn các quân hậu đã đặt không tấn công nhau. Nếu cập nhật cấu trúc dùng chung trước khi đệ quy, mọi thay đổi cần được hoàn tác khi quay về, kể cả các nhánh kết thúc sớm. Sao chép trạng thái tránh một số lỗi chia sẻ nhưng có chi phí riêng. Cận thời gian dựa trên số nút được thăm và công việc mỗi nút."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 2: N Queens; Subset Sum; Game Trees",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ada-branch-bound-admissibility",
          "title": "Nhánh cận và tính an toàn của đánh giá",
          "level": "core",
          "paragraphs": [
            "Trong bài toán cực tiểu, một cận dưới cho phần hoàn tất chỉ được dùng để bỏ nhánh khi nó không tốt hơn giá trị nghiệm khả thi tốt nhất đã biết. Ước lượng quá cao có thể loại nhầm nghiệm tối ưu, nên cần chứng minh cận không vượt giá trị tốt nhất thực sự của nhánh. Thứ tự tìm nhánh hứa hẹn giúp sớm có nghiệm tốt nhưng không thay thế cận đúng. Nhánh cận vẫn có thể xét số trạng thái hàm mũ trong trường hợp xấu, dù thường hữu ích trên dữ liệu thực."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 2 Backtracking: pruning; Fast Exponential Algorithms notes",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Quay lui (Backtracking) và Nhánh cận (Branch and Bound)"
    }
  ]
};

