export const COURSE_AI_FOUNDATIONS = {
  "id": "ai-foundations",
  "code": "CS-35",
  "title": "AI nền tảng",
  "blockId": "block-6",
  "level": "core",
  "prerequisites": [
    {
      "courseId": "graph-algorithms",
      "type": "required",
      "reason": "Cần nắm vững BFS, DFS, Dijkstra, hàng đợi ưu tiên và biểu diễn đồ thị trạng thái."
    },
    {
      "courseId": "probability",
      "type": "required",
      "reason": "Cần xác suất có điều kiện, định lý Bayes, kỳ vọng và phân phối đồng thời cho Bayes Nets và MDP."
    },
    {
      "courseId": "discrete-math",
      "type": "required",
      "reason": "Cần logic mệnh đề/vị từ và quy hoạch động cơ bản."
    }
  ],
  "overview": [
    "AI nền tảng nghiên cứu cách một tác nhân mô hình hóa tình huống, suy ra điều chưa biết và chọn hành động để đạt mục tiêu dưới những giới hạn về thông tin và tài nguyên. Môn học bắt đầu từ tìm kiếm trên không gian trạng thái, tiếp tục với ràng buộc và trò chơi, rồi xây hai ngôn ngữ suy luận là logic và xác suất. Mạng Bayes tổ chức niềm tin bất định, trong khi MDP và học tăng cường liên kết quyết định hiện tại với hệ quả dài hạn. Mỗi phương pháp được đặt trong giả thiết về khả năng quan sát, mô hình chuyển, trọng số hoặc hành vi đối thủ để hiểu phạm vi bảo đảm. Kiến thức đồ thị, quy hoạch động, logic và xác suất được dùng trực tiếp để giải thích cơ chế. Nội dung cũng làm rõ tác nhân hợp lý không phải tác nhân toàn tri, suy luận xác suất không tự chứng minh nhân quả và AI không đồng nghĩa chỉ huấn luyện mạng sâu. Các phương pháp học từ dữ liệu được phát triển kỹ hơn trong các môn học máy và học sâu kế tiếp."
  ],
  "boundaries": [
    "Không thu hẹp Trí tuệ Nhân tạo thành Học máy hay sử dụng LLM; môn học giữ đầy đủ nền tảng tìm kiếm, ràng buộc, suy luận xác suất và ra quyết định tuần tự.",
    "Các bảo đảm A*, Bellman và Q-learning đều gắn với mô hình hữu hạn/chi phí/chiết khấu hoặc lịch học thích hợp; không khái quát tự động sang hệ AI triển khai ngoài mô hình."
  ],
  "sources": [
    {
      "sourceId": "ucb-cs188-notes",
      "locator": "§1 Search; §2 CSPs; §3 Games; §4 MDPs; §5 RL; §6 Bayes Nets; §10 Logic",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "aif-agents-uninformed-informed-search",
      "overview": [
        "Một tác nhân chọn hành động từ thông tin quan sát được để tối ưu một tiêu chuẩn đã nêu. Chương này bắt đầu bằng cách mô hình hóa trạng thái, hành động, chuyển tiếp và mục tiêu, rồi so sánh các chiến lược mở rộng không gian trạng thái. Đầy đủ nghĩa là tìm được nghiệm khi tồn tại dưới giả thiết thích hợp, còn tối ưu nghĩa là tìm nghiệm tốt nhất theo chi phí; hai tính chất được phân biệt. Heuristic giúp ưu tiên nhưng cần điều kiện để tốc độ tìm kiếm không đổi lấy một kết luận tối ưu sai."
      ],
      "sources": [
        {
          "sourceId": "ucb-cs188-notes",
          "locator": "§1.1–1.4 Agents; State Spaces; Uninformed Search; Informed Search",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "aif-agent-state-abstraction",
          "title": "Tác nhân, môi trường và trừu tượng trạng thái",
          "level": "core",
          "paragraphs": [
            "Tác nhân hợp lý tối ưu kết quả kỳ vọng theo mục tiêu và thông tin có sẵn, không đồng nghĩa luôn biết hay đạt kết quả tốt nhất thực tế. Trạng thái tìm kiếm chỉ giữ thông tin cần cho lựa chọn tương lai; vị trí đủ cho một bài tìm đường đơn giản nhưng có thể phải thêm chìa khóa hoặc lượng pin trong bài khác. Quan sát khác trạng thái thật khi môi trường chỉ được thấy một phần. Một trừu tượng bỏ thông tin ảnh hưởng hành động hợp lệ sẽ giải một bài toán khác với yêu cầu ban đầu."
          ],
          "sources": [
            {
              "sourceId": "ucb-cs188-notes",
              "locator": "§1.1 Agents; §1.2 State Spaces and Search Problems",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aif-bfs-dfs-ids-ucs",
          "title": "Tìm kiếm chưa có heuristic và bảo đảm",
          "level": "core",
          "paragraphs": [
            "BFS mở rộng theo độ sâu, tối ưu số bước khi các cạnh có cùng chi phí và đầy đủ với phân nhánh hữu hạn, nghiệm hữu hạn. DFS tiết kiệm frontier nhưng có thể đi mãi vào một nhánh trong không gian vô hạn; giới hạn độ sâu rồi tăng dần tạo IDS. UCS mở rộng theo chi phí đường g và chỉ chấp nhận đích khi lấy khỏi hàng ưu tiên; bảo đảm đầy đủ trên không gian vô hạn thường cần phân nhánh hữu hạn cùng chi phí mỗi bước bị chặn dưới bởi một số dương. Chi phí âm phá lập luận chuẩn."
          ],
          "sources": [
            {
              "sourceId": "ucb-cs188-notes",
              "locator": "§1.3 Uninformed Search",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aif-astar-admissible-consistent",
          "title": "A*, heuristic chấp nhận được và nhất quán",
          "level": "core",
          "paragraphs": [
            "A* chọn nút có f=g+h nhỏ nhất, với h ước lượng chi phí còn lại. Heuristic chấp nhận được không vượt chi phí tối ưu và bằng không tại đích; heuristic nhất quán còn thỏa h(u)≤c(u,v)+h(v) trên mỗi cạnh. Tìm trên cây với các giả thiết chi phí và phân nhánh thích hợp đạt tối ưu khi h chấp nhận được. Với tìm trên đồ thị đóng trạng thái vĩnh viễn, nhất quán bảo đảm lần mở rộng đầu đã có g tốt nhất; nếu chỉ chấp nhận được, phải cho mở lại khi phát hiện đường tốt hơn."
          ],
          "sources": [
            {
              "sourceId": "ucb-cs188-notes",
              "locator": "§1.4 Informed Search: A*; Admissibility; graph search",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aif-heuristic-relaxation-dominance",
          "title": "Xây heuristic từ bài nới lỏng",
          "level": "core",
          "paragraphs": [
            "Bỏ bớt ràng buộc tạo bài dễ hơn có chi phí tối ưu không lớn hơn bài gốc, nên lời giải của bài nới lỏng có thể làm heuristic chấp nhận được. Khoảng cách Manhattan trên lưới chỉ đi bốn hướng là ví dụ khi bỏ tường và giữ chi phí bước phù hợp. Lấy max của nhiều heuristic chấp nhận được vẫn chấp nhận được; cộng chúng cần chứng minh không đếm trùng chi phí. Heuristic mạnh hơn có thể giảm số nút mở nhưng bản thân cũng tốn tính toán, nên đánh giá thời gian cần tính cả hai phần."
          ],
          "sources": [
            {
              "sourceId": "ucb-cs188-notes",
              "locator": "§1.4.1 Heuristics; §1.4.5 Dominance",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Tác nhân hợp lý, Không gian trạng thái và Tìm kiếm Heuristic (UCS, A*)"
    },
    {
      "id": "aif-csp-adversarial-games",
      "overview": [
        "Không phải mọi bài AI đều tìm một đường với hành động chỉ của một phía. CSP tìm một phép gán đồng thời thỏa nhiều ràng buộc, còn trò chơi cần dự đoán hành động đối thủ hoặc ngẫu nhiên. Chương này phân biệt việc suy ra giá trị không thể dùng với việc chọn thứ tự thử, rồi đặt minimax, alpha–beta và expectimax trong các giả thiết mô hình tương ứng. Những phương pháp cắt giảm công việc được giải thích bằng lý do không bỏ nghiệm hoặc không đổi giá trị quyết định."
      ],
      "sources": [
        {
          "sourceId": "ucb-cs188-notes",
          "locator": "§2.1–2.4 CSPs; §3.1–3.5 Games",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "aif-csp-mrv-lcv",
          "title": "CSP, quay lui và thứ tự lựa chọn",
          "level": "core",
          "paragraphs": [
            "CSP gồm biến, miền giá trị và các ràng buộc trên tổ hợp biến. Quay lui gán từng biến và bỏ nhánh ngay khi một ràng buộc đã xác định bị vi phạm. MRV chọn biến còn ít giá trị hợp lệ nhất để lộ mâu thuẫn sớm, còn LCV ưu tiên giá trị loại ít lựa chọn của các biến khác nhất. Các heuristic này thường cải thiện hiệu năng nhưng không tự thay đổi tập nghiệm. Miền đã bị thu hẹp cần được phục hồi đúng khi rời nhánh, nếu không lần thử sau có thể mất những nghiệm hợp lệ."
          ],
          "sources": [
            {
              "sourceId": "ucb-cs188-notes",
              "locator": "§2.1 Constraint Satisfaction Problems; §2.2 Solving; §2.4 Ordering",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aif-ac3-propagation",
          "title": "Forward checking và nhất quán cung AC-3",
          "level": "core",
          "paragraphs": [
            "Forward checking xóa các giá trị hàng xóm không còn tương thích sau một phép gán. AC-3 mạnh hơn: với cung X→Y, mỗi giá trị còn ở X phải có ít nhất một giá trị hỗ trợ ở Y. Khi miền X giảm, những cung đi vào X có thể cần kiểm lại. Một miền rỗng chứng minh nhánh không có nghiệm, nhưng mọi cung nhất quán chưa bảo đảm có phép gán toàn cục. Chi phí O(ed³) của bản AC-3 chuẩn phụ thuộc số cung e và miền lớn nhất d, nên lan truyền sâu hơn cũng có chi phí."
          ],
          "sources": [
            {
              "sourceId": "ucb-cs188-notes",
              "locator": "§2.3 Filtering: Arc consistency; AC-3",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aif-minimax-alpha-beta",
          "title": "Minimax, cắt tỉa và hàm đánh giá",
          "level": "core",
          "paragraphs": [
            "Trong trò chơi hai phía tổng bằng không, thông tin đầy đủ và hành động luân phiên, minimax chọn hành động tối đa hóa giá trị khi đối thủ tối thiểu hóa nó. Alpha–beta giữ các cận từ những lựa chọn đã biết để bỏ nhánh không còn đổi quyết định, vẫn cho cùng giá trị minimax nếu xử lý đúng. Thứ tự xét nước ảnh hưởng mức cắt tỉa. Khi dừng cây sớm, hàm đánh giá ước lượng trạng thái chưa kết thúc; kết quả khi đó tối ưu theo cây cắt và đánh giá, không tự là chiến lược tối ưu của toàn trò chơi."
          ],
          "sources": [
            {
              "sourceId": "ucb-cs188-notes",
              "locator": "§3.1 Games; §3.2 Minimax and Alpha-Beta Pruning",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aif-expectimax-mcts",
          "title": "Ngẫu nhiên trong trò chơi và MCTS",
          "level": "core",
          "paragraphs": [
            "Expectimax thay nút ngẫu nhiên bằng kỳ vọng theo xác suất các kết quả, nên cần thang utility có ý nghĩa số học, không chỉ giữ thứ tự như minimax. Monte Carlo Tree Search phân bổ mẫu mô phỏng vào những nhánh hứa hẹn nhưng còn bất định, thông qua chọn, mở rộng, mô phỏng và cập nhật thống kê. Số lần thắng quan sát là ước lượng có nhiễu, không phải giá trị chính xác. Chính sách mô phỏng, ngân sách và đánh đổi thăm dò khai thác ảnh hưởng kết quả; MCTS không biến một cây trò chơi lớn thành bài giải chắc chắn tối ưu sau vài mẫu."
          ],
          "sources": [
            {
              "sourceId": "ucb-cs188-notes",
              "locator": "§3.3 Expectimax; §3.5 Monte Carlo Tree Search",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Bài toán thỏa mãn ràng buộc (CSP) và Tìm kiếm đối kháng (Minimax, Alpha–Beta)"
    },
    {
      "id": "aif-logic-probabilistic-reasoning",
      "overview": [
        "Biểu diễn tri thức quyết định những kết luận nào có thể suy ra từ điều đã biết. Logic mô tả những ràng buộc phải đúng, còn mạng Bayes mô tả mức độ bất định bằng một phân phối có cấu trúc. Chương này phân biệt hệ quả logic với xác suất cao và phân biệt cạnh trong một mô hình xác suất với tuyên bố nhân quả. Suy diễn chính xác được đối chiếu với lấy mẫu để hiểu khi nào cấu trúc giúp tiết kiệm, khi nào các bảng trung gian hoặc bằng chứng hiếm làm bài toán khó."
      ],
      "sources": [
        {
          "sourceId": "ucb-cs188-notes",
          "locator": "§10.1–10.8 Logic; §6.3–6.7 Bayes Nets",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "aif-logic-entailment-resolution",
          "title": "Tri thức mệnh đề, suy diễn và tính đúng",
          "level": "core",
          "paragraphs": [
            "Một cơ sở tri thức là tập công thức mô tả các thế giới còn được cho phép. KB kéo theo α khi mọi phép gán làm KB đúng cũng làm α đúng, khác một quy tắc suy luận cụ thể đã tìm được α hay chưa. Kiểm tra thỏa của KB∧¬α là cách xem có phản mô hình không; phân giải trên các mệnh đề cung cấp một cơ chế suy diễn. Logic vị từ thêm biến, lượng từ và quan hệ để biểu diễn đối tượng, nhưng việc suy diễn tổng quát có giới hạn; không thể coi mọi truy vấn là tra bảng đơn giản."
          ],
          "sources": [
            {
              "sourceId": "ucb-cs188-notes",
              "locator": "§10.3 Propositional Logic; §10.4 Inference; §10.5 Theorem Proving; §10.7–10.8 First Order Logic",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aif-bayes-factorization-dseparation",
          "title": "Phân tích nhân tử và d-separation",
          "level": "core",
          "paragraphs": [
            "Mạng Bayes dùng DAG và các phân phối điều kiện để biểu diễn P(X₁,…,Xn) thành tích P(Xi|Parents(Xi)). Những độc lập có điều kiện được kiểm qua d-separation: chuỗi và chạc bị chặn khi quan sát nút giữa, trong khi collider thường chặn đường cho tới khi nó hoặc hậu duệ được quan sát. Đường mở nghĩa là cấu trúc không bảo đảm độc lập, không khẳng định mọi bộ tham số đều tạo phụ thuộc. Hướng cạnh chỉ mang nghĩa nhân quả khi có thêm giả thiết và cách xây mô hình nhân quả phù hợp."
          ],
          "sources": [
            {
              "sourceId": "ucb-cs188-notes",
              "locator": "§6.3 Bayesian Network Representation; §6.4 Structure; §6.5 D-Separation",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aif-exact-approximate-inference",
          "title": "Loại biến và suy diễn bằng lấy mẫu",
          "level": "core",
          "paragraphs": [
            "Suy diễn chính xác có thể nhân các nhân tử chứa một biến rồi cộng loại biến đó. Thứ tự loại quyết định kích thước nhân tử trung gian và chi phí, nên một mạng thưa vẫn có thể khó nếu cấu trúc liên kết tạo bảng lớn. Lấy mẫu thuận dễ sinh dữ liệu từ mô hình nhưng bằng chứng hiếm khiến rejection sampling lãng phí. Likelihood weighting và Gibbs sampling đổi cơ chế lấy mẫu; chúng cần được đánh giá theo sai số, số mẫu hiệu dụng và điều kiện hội tụ, không chỉ bằng việc đã chạy đủ một số vòng tùy ý."
          ],
          "sources": [
            {
              "sourceId": "ucb-cs188-notes",
              "locator": "§6.6 Exact Inference in Bayes Nets; §6.7 Approximate Inference: Sampling",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Biểu diễn tri thức Logic và Mạng Bayes (Bayesian Networks)"
    },
    {
      "id": "aif-mdp-reinforcement-learning",
      "overview": [
        "Ra quyết định tuần tự cần tính ảnh hưởng của hành động hiện tại lên cả phần thưởng và trạng thái tương lai. MDP mô tả quá trình với tính Markov; Bellman biến mục tiêu dài hạn thành quan hệ giữa các trạng thái kề. Chương này tách lập kế hoạch khi đã biết mô hình khỏi học khi chỉ quan sát chuyển tiếp. Hệ số chiết khấu và điều kiện của thuật toán được nêu rõ để không dùng một phương trình hội tụ trong mọi môi trường. Khám phá cũng được xem như thu thập dữ liệu có tác động đến hệ thống."
      ],
      "sources": [
        {
          "sourceId": "ucb-cs188-notes",
          "locator": "§4.1–4.4 MDPs; §5.1–5.4 Reinforcement Learning",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "aif-mdp-bellman",
          "title": "MDP, chính sách và phương trình Bellman",
          "level": "core",
          "paragraphs": [
            "Một MDP gồm trạng thái, hành động, xác suất chuyển, phần thưởng và tiêu chí tích lũy. Tính Markov yêu cầu phân phối tương lai phụ thuộc trạng thái hiện tại và hành động, không cần toàn bộ lịch sử nếu trạng thái đã đủ thông tin. Chính sách ánh xạ trạng thái sang hành động hoặc phân phối hành động. Với MDP hữu hạn, phần thưởng bị chặn và 0≤γ<1, giá trị chiết khấu thỏa quan hệ Bellman; phương trình tối ưu lấy max trên hành động của phần thưởng trước mắt cộng γ lần giá trị kỳ vọng tiếp theo."
          ],
          "sources": [
            {
              "sourceId": "ucb-cs188-notes",
              "locator": "§4.1 Markov Decision Processes; §4.2 Solving Markov Decision Processes",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aif-value-policy-iteration",
          "title": "Lặp giá trị và lặp chính sách",
          "level": "core",
          "paragraphs": [
            "Value iteration áp dụng toán tử Bellman tối ưu lặp lại để cải thiện ước lượng giá trị; với γ<1 trong MDP hữu hạn chuẩn, tính co cung cấp bảo đảm hội tụ. Policy iteration tách đánh giá chính sách hiện có khỏi cải thiện hành động theo giá trị đó. Dừng khi thay đổi nhỏ cần một ngưỡng gắn với sai số mong muốn, thay vì chỉ nhìn biểu đồ có vẻ phẳng. Với nhiệm vụ không chiết khấu hoặc thời gian vô hạn, cần điều kiện riêng như cách kết thúc thích hợp; không suy bảo đảm từ trường hợp γ<1."
          ],
          "sources": [
            {
              "sourceId": "ucb-cs188-notes",
              "locator": "§4.3 Value Iteration; §4.4 Policy Iteration",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "aif-td-qlearning-exploration",
          "title": "TD, Q-learning và thăm dò khai thác",
          "level": "core",
          "paragraphs": [
            "Temporal-difference cập nhật giá trị từ phần thưởng quan sát cộng ước lượng giá trị tương lai, không cần chờ toàn bộ lượt chơi kết thúc. Q-learning dùng mục tiêu r+γ max_a Q(s′,a) và là phương pháp off-policy trong mô hình bảng. Bảo đảm hội tụ chuẩn cần hữu hạn trạng thái hành động, thăm đủ các cặp, điều kiện bước học và phần thưởng thích hợp; thay bảng bằng mạng nơ-ron không tự giữ định lý ấy. Epsilon-greedy là một cách khám phá, nhưng hành động thử nghiệm trong môi trường thật vẫn phải nằm trong giới hạn cho phép."
          ],
          "sources": [
            {
              "sourceId": "ucb-cs188-notes",
              "locator": "§5.3 Model-Free Learning; §5.4 Exploration and Exploitation",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Quá trình quyết định Markov (MDP) và Học tăng cường nhập môn (Reinforcement Learning)"
    }
  ]
};
