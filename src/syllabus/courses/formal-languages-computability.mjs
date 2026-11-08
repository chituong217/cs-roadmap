export const COURSE_FORMAL_LANGUAGES_COMPUTABILITY = {
  "id": "formal-languages-computability",
  "code": "CS-19",
  "title": "Ngôn ngữ hình thức và khả năng tính toán",
  "blockId": "block-3",
  "level": "core",
  "prerequisites": [
    {
      "courseId": "discrete-math",
      "type": "required",
      "reason": "Cần nắm chắc logic, tập hợp, hàm song ánh, chứng minh phản chứng và quy nạp cấu trúc."
    },
    {
      "courseId": "algorithms-design-analysis",
      "type": "required",
      "reason": "Cần khái niệm thuật toán xác định để đối chiếu với mô hình máy Turing."
    }
  ],
  "overview": [
    "Môn học xây một ngôn ngữ chính xác để hỏi máy tính có thể giải những bài toán nào, bắt đầu từ nhận diện chuỗi và đi tới giới hạn của thuật toán tổng quát. Máy hữu hạn và biểu thức chính quy mô tả những mẫu chỉ cần bộ nhớ hữu hạn; văn phạm phi ngữ cảnh và ngăn xếp mở rộng sang cấu trúc lồng nhau. Máy Turing sau đó cung cấp mô hình chung cho thủ tục hiệu dụng, đồng thời buộc phân biệt chấp nhận, từ chối và không kết thúc. Đường chéo hóa, bài toán dừng, quy dẫn và Rice cho thấy một giới hạn có thể được chứng minh chứ không chỉ phỏng đoán do chưa tìm được chương trình. Những lập luận này dùng kiến thức tập hợp, lượng từ, quy nạp và phản chứng từ toán rời rạc. Môn học ưu tiên mô hình đúng và chiều suy luận rõ; độ phức tạp thời gian của các bài toán quyết định được được phát triển tiếp ở môn kế sau, không bị trộn với bất khả quyết."
  ],
  "boundaries": [
    "Phân biệt biểu thức chính quy trong lý thuyết ngôn ngữ hình thức với regex mở rộng có backreference trong thư viện ngôn ngữ lập trình thực tế.",
    "Sự tương đương mô hình nói về khả năng tính toán, không khẳng định cùng độ phức tạp; luận đề Church–Turing được phân biệt với định lý hình thức."
  ],
  "sources": [
    {
      "sourceId": "erickson-algorithms",
      "locator": "Models of Computation notes 1–9",
      "relationship": "primary"
    },
    {
      "sourceId": "mit-6045j-2011",
      "locator": "Lectures 3–9",
      "relationship": "primary"
    },
    {
      "sourceId": "illinois-cs273-notes",
      "locator": "Ch. 13 Pushdown Automatas; Ch. 15 CFG to PDA; Ch. 17 PDA to CFG conversion",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "flc-regular-languages-automata",
      "overview": [
        "Ngôn ngữ hình thức là tập các chuỗi, vì thế một bài toán quyết định có thể được xem như việc nhận diện chuỗi thuộc tập đó hay không. Chương này đi từ bảng chữ cái, phép nối và lặp đến máy hữu hạn và biểu thức chính quy. Sự tương đương của các cách mô tả được xây bằng các phép chuyển đổi, không suy từ việc chúng trông giống nhau. Giới hạn bộ nhớ hữu hạn dẫn tới bổ đề bơm và cách chứng minh một ngôn ngữ không chính quy với thứ tự lượng từ chính xác."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Models of Computation notes 1–4",
          "relationship": "primary"
        },
        {
          "sourceId": "mit-6045j-2011",
          "locator": "Lectures 3–5: DFA/NFA; regular expressions; pumping lemma",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "flc-strings-languages",
          "title": "Bảng chữ cái, chuỗi và phép toán ngôn ngữ",
          "level": "core",
          "paragraphs": [
            "Một bảng chữ cái là tập hữu hạn các ký hiệu; chuỗi là dãy hữu hạn ký hiệu, có thể là chuỗi rỗng ε. Ngôn ngữ là tập con của mọi chuỗi trên bảng chữ cái đó, nên ngôn ngữ rỗng khác ngôn ngữ chỉ chứa ε. Phép nối hai ngôn ngữ lấy mọi cách nối một chuỗi từ mỗi tập; sao Kleene cho phép nối không hoặc nhiều chuỗi, do đó luôn chứa ε. Các định nghĩa này cho phép diễn đạt bài toán thành viên mà không phụ thuộc ý nghĩa tự nhiên của một từ."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Models of Computation: 1 Strings; 2 Regular Languages",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "flc-dfa-nfa-equivalence",
          "title": "DFA, NFA và phép dựng tập con",
          "level": "core",
          "paragraphs": [
            "DFA lưu một trạng thái và có đúng một chuyển cho mỗi trạng thái ký hiệu; NFA cho nhiều lựa chọn và có thể có bước ε không đọc đầu vào. Một NFA chấp nhận nếu tồn tại một đường tính đọc hết chuỗi và kết thúc ở trạng thái chấp nhận. DFA tương đương có trạng thái là tập các trạng thái NFA còn có thể xảy ra, tính cả bao đóng ε. Số tập có thể tăng theo hàm mũ, nên tương đương về khả năng nhận diện không có nghĩa biểu diễn luôn cùng kích thước."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Models of Computation: 3 Finite-State Automata; 4 Nondeterministic Automata",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6045j-2011",
              "locator": "Lectures 3–4",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "flc-regex-closure-minimization",
          "title": "Biểu thức chính quy, tính đóng và tối thiểu hóa",
          "level": "core",
          "paragraphs": [
            "Biểu thức chính quy toán học dùng hợp, nối và sao để tạo ngôn ngữ; định lý tương đương với otomat được hiểu qua dựng máy từ biểu thức và loại trạng thái theo chiều ngược lại. Máy tích cho phép chứng minh đóng dưới giao và hiệu, còn bù DFA cần hoàn chỉnh các chuyển trước khi đổi tập trạng thái chấp nhận. Hai trạng thái có thể gộp nếu không có hậu tố nào phân biệt hành vi chấp nhận của chúng. Regex thực tế có backreference không còn được đồng nhất với mô hình chính quy cổ điển."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Models of Computation: 2 Regular Languages; 3 Finite-State Automata; 4 Nondeterministic Automata",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6045j-2011",
              "locator": "Lecture 4: NFA and regular expressions",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "flc-pumping-quantifiers",
          "title": "Bổ đề bơm và chứng minh không chính quy",
          "level": "core",
          "paragraphs": [
            "Với ngôn ngữ chính quy tồn tại độ dài bơm p sao cho mọi chuỗi đủ dài có một cách tách xyz với |xy|≤p, |y|>0 và xy^k z vẫn thuộc ngôn ngữ với mọi k≥0. Để bác tính chính quy, chọn chuỗi theo p rồi xử lý mọi cách tách hợp lệ, sau đó chọn k làm chuỗi ra ngoài ngôn ngữ. Chọn một cách tách tiện lợi không đủ. Bổ đề là điều kiện cần, nên việc tìm được vài chuỗi bơm được cũng không chứng minh ngôn ngữ chính quy."
          ],
          "sources": [
            {
              "sourceId": "mit-6045j-2011",
              "locator": "Lecture 5: Nonregular languages; pumping lemma",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Models of Computation: 3 Finite-State Automata — pumping lemma",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Ngôn ngữ chính quy, Otomat hữu hạn (DFA/NFA) và Biểu thức chính quy"
    },
    {
      "id": "flc-context-free-grammars-pda",
      "overview": [
        "Cấu trúc lồng nhau như ngoặc cân bằng cần một dạng bộ nhớ mà máy hữu hạn không có. Văn phạm phi ngữ cảnh mô tả cấu trúc này bằng thay một ký hiệu chưa kết thúc bởi một chuỗi, còn PDA bổ sung ngăn xếp để kiểm tra nó khi đọc đầu vào. Chương này phân biệt cây cú pháp với thứ tự áp dụng luật, làm rõ nhập nhằng và dạng chuẩn cho phân tích cú pháp. Khả năng mô tả rộng hơn chính quy vẫn có giới hạn, nên không phải mọi quan hệ đếm giữa các phần chuỗi đều phi ngữ cảnh."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Models of Computation: 5 Context-Free Languages and Grammars",
          "relationship": "primary"
        },
        {
          "sourceId": "illinois-cs273-notes",
          "locator": "Ch. 13 Pushdown Automatas; Ch. 15 CFG to PDA; Ch. 17 PDA to CFG conversion",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "flc-cfg-derivation-ambiguity",
          "title": "Luật sinh, cây dẫn xuất và nhập nhằng",
          "level": "core",
          "paragraphs": [
            "CFG gồm ký hiệu kết thúc, ký hiệu chưa kết thúc, ký hiệu bắt đầu và luật có một ký hiệu chưa kết thúc ở vế trái. Dẫn xuất lặp thay ký hiệu đó cho tới khi chỉ còn ký hiệu kết thúc. Cây dẫn xuất lưu cấu trúc phân rã, không chỉ chuỗi cuối cùng. Một văn phạm nhập nhằng nếu có một chuỗi có hai cây dẫn xuất khác nhau; hai thứ tự thay các nhánh độc lập trong cùng một cây không đủ chứng minh nhập nhằng. Văn phạm biểu thức cần phản ánh ưu tiên và tính kết hợp để giải quyết cách nhóm."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Models of Computation: 5 Context-Free Languages and Grammars — Definitions; Parse Trees; Ambiguity",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "flc-cnf-cyk",
          "title": "Dạng chuẩn Chomsky và phân tích CYK",
          "level": "core",
          "paragraphs": [
            "Trong CNF, các luật chính có dạng A→BC hoặc A→a; trường hợp chuỗi rỗng được xử lý bằng quy ước riêng cho ký hiệu bắt đầu không xuất hiện ở vế phải. Chuyển dạng cần loại hoặc xử lý luật rỗng, luật đơn vị và ký hiệu vô ích mà vẫn giữ ngôn ngữ thích hợp. CYK lưu những ký hiệu có thể sinh từng đoạn chuỗi rồi thử mọi điểm chia, cho thời gian O(n³) khi văn phạm cố định. Bảng thành viên có thể được bổ sung con trỏ để khôi phục cây dẫn xuất."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Models of Computation: 5 Context-Free Languages and Grammars — Chomsky Normal Form; Parsing",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "flc-pda-cfg-and-limits",
          "title": "PDA, ngăn xếp và giới hạn phi ngữ cảnh",
          "level": "core",
          "paragraphs": [
            "PDA thêm ngăn xếp vào điều khiển hữu hạn; một bước có thể đọc ký hiệu, xét đỉnh ngăn xếp rồi đẩy hoặc bỏ ký hiệu theo luật. PDA không đơn định tương đương CFG: có thể mô phỏng việc mở rộng luật sinh bằng ngăn xếp, và chiều ngược mô tả những đoạn tính cân bằng của ngăn xếp. PDA tất định nhận một lớp hẹp hơn, nên không được chuyển kết luận DFA=NFA sang đây. Các CFL đóng dưới hợp, nối và sao nhưng không đóng dưới giao hoặc bù nói chung; ví dụ a^n b^n c^n vượt ngoài lớp này."
          ],
          "sources": [
            {
              "sourceId": "illinois-cs273-notes",
              "locator": "Ch. 13 Pushdown Automatas; Ch. 15 CFG to PDA; Ch. 17 PDA to CFG conversion",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Models of Computation: 5 — Properties and limitations of context-free languages",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Văn phạm phi ngữ cảnh (CFG), cây dẫn xuất và Otomat đẩy xuống (PDA)"
    },
    {
      "id": "flc-turing-machines-church-turing",
      "overview": [
        "Máy Turing tách ý tưởng thuật toán khỏi một ngôn ngữ hoặc phần cứng cụ thể bằng mô hình hữu hạn điều khiển một băng có thể sử dụng không bị chặn trước. Chương này định nghĩa cấu hình và cách mô phỏng để phân biệt khả năng tính toán với hiệu năng. Việc chương trình có thể được mã hóa thành dữ liệu dẫn tới máy vạn năng. Quan trọng hơn, khả năng chấp nhận đúng các đầu vào thuộc một tập chưa bảo đảm có thể kết thúc trên mọi đầu vào không thuộc tập đó."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Models of Computation: 6 Turing Machines; 8 Universal Models; 9 Nondeterministic Turing Machines",
          "relationship": "primary"
        },
        {
          "sourceId": "mit-6045j-2011",
          "locator": "Lectures 6–7",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "flc-tm-configuration",
          "title": "Cấu hình máy Turing và chương trình như dữ liệu",
          "level": "core",
          "paragraphs": [
            "Một cấu hình mô tả trạng thái điều khiển, vị trí đầu đọc và phần nội dung băng cần thiết tại thời điểm đó. Hàm chuyển quyết định ký hiệu ghi, hướng di chuyển và trạng thái tiếp theo từ trạng thái cùng ký hiệu đang đọc. Một máy có mô tả hữu hạn dù số ô có thể dùng không bị chặn trước. Mã hóa máy thành chuỗi cho phép một máy khác đọc mô tả rồi mô phỏng từng bước; đó là ý nghĩa của máy vạn năng, không phải một máy tự biết đáp án mọi bài toán."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Models of Computation: 6 Turing Machines; 8 Universal Models",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6045j-2011",
              "locator": "Lecture 6: Turing Machines",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "flc-recognize-decide",
          "title": "Nhận biết, quyết định và ba khả năng chạy",
          "level": "core",
          "paragraphs": [
            "Bộ nhận biết phải dừng và chấp nhận khi đầu vào thuộc ngôn ngữ; ngoài ngôn ngữ nó có thể từ chối hoặc chạy mãi. Bộ quyết định phải dừng trên mọi đầu vào và trả đúng có hoặc không. Vì thế quan sát một chương trình chưa dừng sau thời gian dài không xác nhận nó đang vòng lặp vô hạn. Nếu cả một ngôn ngữ và phần bù đều nhận biết được, có thể mô phỏng xen kẽ hai bộ nhận biết cho tới khi một máy chấp nhận, tạo bộ quyết định."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Models of Computation: 6 Turing Machines; 7 Undecidability",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6045j-2011",
              "locator": "Lecture 7: Decision problems and decidability",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "flc-thesis-and-machine-variants",
          "title": "Biến thể mô hình và luận đề Church–Turing",
          "level": "core",
          "paragraphs": [
            "Đa băng, cách mã hóa băng hay không đơn định có thể thay đổi chi phí mô phỏng nhưng không mở rộng lớp ngôn ngữ nhận biết được của máy Turing chuẩn. Với không đơn định, cần khám phá công bằng cây các nhánh, tránh mắc kẹt mãi trong một nhánh khi nhánh khác chấp nhận. Luận đề Church–Turing cho rằng mọi thủ tục hiệu dụng theo nghĩa trực giác đều được mô hình hóa bởi máy Turing; vì một vế là ý niệm phi hình thức, đây không phải định lý đã chứng minh như sự tương đương giữa hai máy được định nghĩa toán học."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Models of Computation: 6 Turing Machines; 9 Nondeterministic Turing Machines",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6045j-2011",
              "locator": "Lecture 6: Turing Machines",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Máy Turing, tính tương đương của các mô hình và Luận đề Church–Turing"
    },
    {
      "id": "flc-undecidability-reductions",
      "overview": [
        "Bất khả quyết là giới hạn về sự tồn tại thuật toán tổng quát, khác việc một thuật toán đã biết chạy chậm. Chương này dùng mã hóa và đường chéo hóa để tạo mâu thuẫn cho giả thiết có bộ quyết định, rồi phát triển quy dẫn như công cụ chuyển giới hạn từ bài toán này sang bài toán khác. Chiều quy dẫn, tính tính được của phép biến đổi và tương đương hai chiều của đáp án đều là phần bắt buộc của lập luận. Định lý Rice được đặt đúng phạm vi thuộc tính ngữ nghĩa của ngôn ngữ được nhận."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Models of Computation: 7 Undecidability",
          "relationship": "primary"
        },
        {
          "sourceId": "mit-6045j-2011",
          "locator": "Lectures 8–9: Undecidability; mapping reductions and Rice’s theorem",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "flc-countability-diagonal-halting",
          "title": "Đếm chương trình, đường chéo và bài toán dừng",
          "level": "core",
          "paragraphs": [
            "Các chương trình có mô tả hữu hạn trên bảng chữ cái hữu hạn nên có thể liệt kê, trong khi tập mọi ngôn ngữ trên một bảng chữ cái khác rỗng là không đếm được. Lập luận này cho thấy có ngôn ngữ không được chương trình nào nhận biết, nhưng chưa tự chỉ ra một bài toán cụ thể. Bài toán dừng hỏi máy M có dừng trên x không; giả sử có bộ quyết định rồi cho một máy dùng đáp án đó để làm ngược khi nhận mã của chính mình tạo mâu thuẫn. Đây là phủ định thuật toán giải mọi cặp, không cấm phân tích từng chương trình riêng."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Models of Computation: 7 Undecidability — Diagonalization; Halting",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6045j-2011",
              "locator": "Lecture 8: Undecidability",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "flc-mapping-reduction-direction",
          "title": "Quy dẫn ánh xạ và chiều của tính khó",
          "level": "core",
          "paragraphs": [
            "A≤m B nghĩa là tồn tại hàm toàn phần tính được f sao cho x thuộc A khi và chỉ khi f(x) thuộc B. Nếu B quyết định được thì tính f rồi gọi bộ quyết định B sẽ quyết định A. Bởi vậy muốn chứng minh B bất khả quyết từ A đã biết bất khả quyết, cần biến đầu vào A thành đầu vào B. Chỉ biến B về A không đủ. Phép biến đổi phải kết thúc mà không bí mật sử dụng đáp án A; mô tả một mô phỏng có thể chạy mãi không tự là hàm quy dẫn toàn phần."
          ],
          "sources": [
            {
              "sourceId": "mit-6045j-2011",
              "locator": "Lecture 9: Mapping reducibility and Rice’s theorem",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Models of Computation: 7 Undecidability — Reductions",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "flc-rice-semantic-scope",
          "title": "Rice, thuộc tính ngữ nghĩa và giới hạn kết luận",
          "level": "core",
          "paragraphs": [
            "Định lý Rice nói rằng mọi thuộc tính không tầm thường của ngôn ngữ được một máy Turing nhận đều không thể được quyết định từ mã máy nói chung. Không tầm thường nghĩa là có ngôn ngữ nhận biết được thỏa và có ngôn ngữ nhận biết được không thỏa; thuộc tính ngữ nghĩa chỉ phụ thuộc ngôn ngữ, không phụ thuộc cách viết máy. Số trạng thái hoặc việc mã chứa một ký hiệu cụ thể là thuộc tính cú pháp nên không thuộc phạm vi. Kết luận không loại trừ bộ kiểm tra chỉ xử lý một lớp chương trình bị hạn chế hoặc chấp nhận trả lời chưa biết."
          ],
          "sources": [
            {
              "sourceId": "mit-6045j-2011",
              "locator": "Lecture 9: Rice’s theorem",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Models of Computation: 7 Undecidability",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Chứng minh đường chéo hóa, Bài toán dừng (Halting Problem) và Quy dẫn bất khả quyết"
    }
  ]
};
