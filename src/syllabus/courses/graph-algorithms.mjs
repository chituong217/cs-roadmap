export const COURSE_GRAPH_ALGORITHMS = {
  "id": "graph-algorithms",
  "code": "CS-17",
  "title": "Thuật toán đồ thị",
  "blockId": "block-3",
  "level": "core",
  "prerequisites": [
    {
      "courseId": "data-structures",
      "type": "required",
      "reason": "Cần hàng đợi, ngăn xếp, hàng đợi ưu tiên (min-heap), Disjoint Set Union và biểu diễn đồ thị."
    },
    {
      "courseId": "algorithms-design-analysis",
      "type": "required",
      "reason": "Cần tư duy tham lam, quy hoạch động và chứng minh bất biến."
    }
  ],
  "overview": [
    "Môn học nghiên cứu cách thuật toán khai thác quan hệ giữa các đối tượng khi mô hình hóa bằng đỉnh và cạnh. Duyệt theo chiều rộng và chiều sâu tạo nền cho thứ tự topo, liên thông mạnh, đường đi và các chứng minh dựa trên khả đạt. Từ đó, môn học tách các bài toán tối ưu có vẻ giống nhau nhưng mang ràng buộc khác: đường đi ngắn nhất, cây khung nhỏ nhất, luồng cực đại và cặp ghép. Mỗi thuật toán đi kèm điều kiện về hướng cạnh, trọng số, chu trình và cấu trúc dữ liệu; nhờ đó người học hiểu vì sao có cạnh âm thì một phương pháp thất bại còn phương pháp khác vẫn đúng. Phân tích tính cả đỉnh không tới được, đồ thị không liên thông, đa cạnh và chi phí khôi phục nghiệm. Đường Euler được đối chiếu với Hamilton để chuẩn bị cho giới hạn thuật toán, còn chứng nhận lát cắt cho thấy đôi khi có thể kiểm tra tối ưu mà không lặp lại toàn bộ quá trình tìm."
  ],
  "boundaries": [
    "Tuyệt đối không gộp chung các thuật toán đường đi ngắn nhất; mỗi thuật toán phải gắn với tiền điều kiện trọng số cạnh và phản ví dụ khi vi phạm điều kiện đó.",
    "Cận thời gian gắn với biểu diễn và heap cụ thể; không gộp MST, đường ngắn nhất và luồng thành một bài toán tối ưu chung."
  ],
  "sources": [
    {
      "sourceId": "erickson-algorithms",
      "locator": "Ch. 5–11",
      "relationship": "primary"
    },
    {
      "sourceId": "mit-6006-2020",
      "locator": "Lectures 9–14",
      "relationship": "primary"
    },
    {
      "sourceId": "cp-algorithms",
      "locator": "0-1 BFS; Strongly Connected Components; Eulerian Path",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "ga-traversal-dag-scc",
      "overview": [
        "Duyệt đồ thị làm lộ cấu trúc khả đạt chứ không chỉ đánh dấu các đỉnh đã gặp. Chương này phân biệt cây tìm kiếm với toàn bộ đồ thị, khoảng cách theo số cạnh với độ sâu đệ quy, và liên thông trong đồ thị vô hướng với liên thông mạnh trong đồ thị có hướng. Thời điểm vào ra DFS dẫn đến phát hiện chu trình, thứ tự topo và phân rã SCC. Các cận tuyến tính luôn gắn với cách duyệt danh sách kề; dùng ma trận kề có thể phải quét nhiều ô không có cạnh."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 5 Basic Graph Algorithms; Ch. 6 Depth-First Search",
          "relationship": "primary"
        },
        {
          "sourceId": "mit-6006-2020",
          "locator": "Lectures 9–10",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ga-bfs-dfs-invariants",
          "title": "BFS, DFS và ý nghĩa cây tìm kiếm",
          "level": "core",
          "paragraphs": [
            "BFS dùng hàng đợi để mở rộng các đỉnh theo khoảng cách không giảm từ nguồn, nên khi khám phá đỉnh lần đầu có thể xác định số cạnh ít nhất tới nó. DFS mở sâu theo một nhánh rồi quay lại, cho cấu trúc tổ tiên và thời điểm hoàn tất. Cả hai cần trạng thái đã khám phá để tránh lặp trên chu trình. Với danh sách kề, duyệt toàn bộ có chi phí O(V+E); trong đồ thị không liên thông cần khởi động tiếp từ các đỉnh chưa được thăm."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 5: generic graph traversal; BFS; DFS",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lectures 9–10",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ga-dag-cycle-topological",
          "title": "Chu trình và thứ tự topo",
          "level": "core",
          "paragraphs": [
            "DAG là đồ thị có hướng không có chu trình có hướng; thứ tự topo đặt đầu mỗi cạnh trước cuối cạnh. DFS phát hiện chu trình qua cạnh tới một đỉnh còn đang hoạt động, khác cạnh tới đỉnh đã hoàn tất. Đảo thứ tự hoàn tất tạo topo khi không có chu trình. Kahn lần lượt lấy đỉnh bậc vào bằng không; nếu chưa lấy đủ mọi đỉnh mà hàng đợi rỗng thì phần còn lại chứa chu trình. Trên đồ thị vô hướng, kiểm tra cạnh ngược phải phân biệt cạnh cha và các cạnh song song."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 6: DFS in directed graphs; topological sort",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 10: Depth-First Search",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ga-scc-condensation",
          "title": "SCC, Kosaraju và Tarjan",
          "level": "core",
          "paragraphs": [
            "Một thành phần liên thông mạnh là tập đỉnh cực đại mà mỗi cặp khả đạt lẫn nhau theo hướng cạnh. Co mỗi SCC thành một đỉnh tạo DAG, hữu ích cho phân tích phụ thuộc có chu trình. Kosaraju dùng thứ tự kết thúc của DFS và đồ thị đảo để tách các thành phần. Tarjan duy trì chỉ số khám phá, thông tin low-link và ngăn xếp các đỉnh chưa được gán thành phần. Chỉ những liên kết phù hợp với trạng thái ngăn xếp mới được dùng cập nhật, tránh trộn với thành phần đã hoàn tất."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 6: Strong Components",
              "relationship": "primary"
            },
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/graph/strongly-connected-components.html — Definitions; Description of the algorithm",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ga-euler-hamilton-distinction",
          "title": "Đường Euler và câu hỏi Hamilton",
          "level": "core",
          "paragraphs": [
            "Đường Euler đi qua mỗi cạnh đúng một lần, còn đường Hamilton đi qua mỗi đỉnh đúng một lần. Với đồ thị vô hướng, điều kiện bậc chẵn hoặc có đúng hai đỉnh bậc lẻ cần đi kèm liên thông của phần chứa cạnh để có hành trình Euler tương ứng. Hierholzer ghép các hành trình con bằng cách lần lượt sử dụng cạnh chưa đi, đạt O(V+E) khi quản lý cạnh hiệu quả. Điều kiện Euler không giải bài toán Hamilton; các câu hỏi Hamilton tổng quát dẫn tới nhóm bài toán khó ở môn độ phức tạp."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/graph/euler_path.html — Algorithm",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 12 NP-Hardness: Hamiltonian problems",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Duyệt đồ thị (BFS, DFS), sắp xếp Topo và Thành phần liên thông mạnh (SCC)"
    },
    {
      "id": "ga-shortest-paths-sssp",
      "overview": [
        "Khoảng cách tối ưu không được xác định chỉ bằng việc tìm thấy một đường đi. Chương này dùng phép nới lỏng để cải thiện các ước lượng, rồi nghiên cứu những thứ tự xử lý làm kết quả chắc chắn tối ưu. Điều kiện trọng số quyết định thuật toán phù hợp: số cạnh, cạnh 0/1, DAG, trọng số không âm hay có cạnh âm. Chu trình âm được giải thích theo khả đạt từ nguồn và ảnh hưởng đến đỉnh đích, tránh kết luận mọi khoảng cách đều mất nghĩa chỉ vì đồ thị có một chu trình âm ở nơi khác."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 8 Shortest Paths",
          "relationship": "primary"
        },
        {
          "sourceId": "mit-6006-2020",
          "locator": "Lectures 11–13",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ga-relaxation-path-meaning",
          "title": "Nới lỏng và mô hình khoảng cách",
          "level": "core",
          "paragraphs": [
            "Ước lượng d[v] được cải thiện qua cạnh u→v bằng cách so sánh d[v] với d[u]+w(u,v), nhưng chỉ khi u đã có đường từ nguồn. Nhãn hữu hạn biểu diễn độ dài một đường đã biết, nên là cận trên của khoảng cách tối ưu nếu khoảng cách đó tồn tại. Lưu tiền nhiệm hỗ trợ khôi phục đường, với xử lý riêng cho đỉnh không tới được. Khi tồn tại chu trình âm trên một đường từ nguồn tới đích, có thể lặp chu trình để giảm độ dài vô hạn, nên không có giá trị tối ưu hữu hạn."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 8: tense edges and relaxation",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 11: Weighted Shortest Paths",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ga-bfs-zero-one-dag",
          "title": "BFS, 0–1 BFS và đường đi trên DAG",
          "level": "core",
          "paragraphs": [
            "Nếu mọi cạnh có cùng trọng số dương, BFS tối thiểu số cạnh và do đó tối thiểu độ dài. Khi trọng số chỉ là 0 hoặc 1, deque đưa đỉnh cải thiện bởi cạnh 0 về trước và cạnh 1 về sau để giữ thứ tự khoảng cách phù hợp, đạt O(V+E). Trên DAG, xử lý đỉnh theo topo cho phép nới lỏng mọi cạnh một lần sau khi các tiền nhiệm đã hoàn tất, kể cả khi có cạnh âm. Tính không chu trình thay cho giả thiết không âm trong trường hợp này."
          ],
          "sources": [
            {
              "sourceId": "cp-algorithms",
              "locator": "https://cp-algorithms.com/graph/01_bfs.html — Algorithm",
              "relationship": "primary"
            },
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 8: Shortest Paths in DAGs",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 11",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ga-dijkstra-nonnegative",
          "title": "Dijkstra và điều kiện không âm",
          "level": "core",
          "paragraphs": [
            "Dijkstra cố định đỉnh chưa xử lý có nhãn nhỏ nhất. Khi trọng số không âm, một đường đi vòng qua các đỉnh chưa cố định không thể làm nhãn đỉnh được chọn tốt hơn, tạo căn cứ cho bước tham lam. Cạnh âm phá căn cứ này ngay cả khi không có chu trình âm. Dùng heap nhị phân với danh sách kề cho cận O((V+E) log V) trong cách triển khai chuẩn; bản thêm nhiều bản ghi cần bỏ các bản đã lỗi thời để tránh xử lý lặp không cần thiết."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 8: Dijkstra’s Algorithm",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 13: Dijkstra",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ga-bellman-ford-negative-cycle",
          "title": "Bellman–Ford và chu trình âm khả đạt",
          "level": "core",
          "paragraphs": [
            "Bellman–Ford nới lỏng các cạnh qua nhiều lượt; sau k lượt đầy đủ có thể bảo đảm đã xét mọi đường dùng không quá k cạnh. Nếu không có chu trình âm khả đạt, một đường tối ưu đơn dùng tối đa V−1 cạnh, nên V−1 lượt đủ. Một cải thiện ở lượt tiếp theo chỉ ra ảnh hưởng của chu trình âm khả đạt từ nguồn; các đỉnh đạt được từ vùng đó có khoảng cách không bị chặn dưới. Thời gian chuẩn O(VE); kết thúc sớm hợp lệ khi một lượt không còn cải thiện."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 8: Bellman–Ford",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 12: Bellman-Ford",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Đường đi ngắn nhất từ một nguồn và điều kiện trọng số"
    },
    {
      "id": "ga-all-pairs-shortest-paths",
      "overview": [
        "Bài toán mọi cặp đỉnh cần trả lời nhiều nguồn đích và cho thấy hai cách tận dụng cấu trúc khác nhau. Floyd–Warshall cho phép thêm dần các đỉnh trung gian vào một công thức quy hoạch động, thích hợp với biểu diễn ma trận. Johnson thay trọng số bằng một thế đỉnh để chạy Dijkstra trên đồ thị thưa có cạnh âm nhưng không có chu trình âm. Chương này chú ý thứ tự vòng lặp, các giá trị vô cực và mô hình heap khi công bố độ phức tạp."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 9 All-Pairs Shortest Paths",
          "relationship": "primary"
        },
        {
          "sourceId": "mit-6006-2020",
          "locator": "Lecture 14: Johnson",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ga-floyd-warshall-invariant",
          "title": "Floyd–Warshall và đỉnh trung gian",
          "level": "core",
          "paragraphs": [
            "Trạng thái D_k[i,j] là độ dài tốt nhất từ i tới j khi chỉ được dùng các đỉnh trung gian trong k đỉnh đầu. Một nghiệm hoặc không qua đỉnh k, hoặc ghép đường i→k và k→j, tạo phép cập nhật min. Với phiên bản cập nhật tại chỗ chuẩn, vòng k phải ở ngoài để giữ nghĩa này. Thuật toán dùng O(V³) thời gian và O(V²) chỗ; đường chéo âm cho thấy chu trình âm, nhưng chỉ những cặp có thể đi qua chu trình đó mới không có khoảng cách hữu hạn."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 9: Floyd–Warshall",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ga-johnson-reweighting",
          "title": "Johnson và tái gán trọng số",
          "level": "core",
          "paragraphs": [
            "Thêm nguồn phụ nối tới mọi đỉnh rồi dùng Bellman–Ford để có thế h(v), hoặc phát hiện chu trình âm. Trọng số mới w(u,v)+h(u)−h(v) không âm nhờ bất đẳng thức khoảng cách; tổng thế triệt tiêu dọc đường nên thứ tự các đường cùng nguồn đích được giữ. Sau mỗi lần chạy Dijkstra, hiệu thế khôi phục khoảng cách cũ. Cận thời gian phụ thuộc heap: với Fibonacci heap là O(VE+V² log V), còn heap nhị phân cho O(V(V+E) log V) cộng lượt Bellman–Ford."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 9: Johnson’s Algorithm",
              "relationship": "primary"
            },
            {
              "sourceId": "mit-6006-2020",
              "locator": "Lecture 14: Johnson",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Đường đi ngắn nhất giữa mọi cặp đỉnh (APSP)"
    },
    {
      "id": "ga-minimum-spanning-trees",
      "overview": [
        "Cây khung nhỏ nhất tối thiểu tổng trọng số để kết nối mọi đỉnh của đồ thị vô hướng liên thông; nó không tối thiểu đường đi từ một nguồn. Chương này xây lý do cạnh nào có thể chọn an toàn qua lát cắt và trao đổi cạnh trên chu trình, rồi đối chiếu Kruskal, Prim và Borůvka. Trọng số âm không gây khó như trong đường đi ngắn nhất. Khi có các trọng số bằng nhau, có thể tồn tại nhiều nghiệm tối ưu và phát biểu tính chất phải cho phép hòa điểm."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 7 Minimum Spanning Trees",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ga-cut-cycle-properties",
          "title": "Lát cắt, chu trình và hòa trọng số",
          "level": "core",
          "paragraphs": [
            "Một cạnh nhẹ nhất băng qua lát cắt phù hợp với các cạnh đã chọn có thể được đưa vào một MST thông qua đổi cạnh mà không tăng tổng trọng số. Cạnh nặng nhất duy nhất trên một chu trình không thuộc MST nào; nếu hòa trọng số thì không được kết luận loại bỏ tất cả cạnh nặng nhất. Các phát biểu này giải thích tính an toàn của lựa chọn cục bộ. Đồ thị không liên thông không có cây khung toàn bộ, nhưng có thể tìm rừng khung nhỏ nhất cho từng thành phần."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 7: Safe Edges; Cut and Cycle Properties",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ga-kruskal-prim-boruvka",
          "title": "Ba chiến lược xây cây khung",
          "level": "core",
          "paragraphs": [
            "Kruskal xét cạnh theo trọng số tăng và dùng DSU để tránh tạo chu trình, thường tốn O(E log E). Prim mở rộng một cây bằng cạnh nhẹ nhất tới một đỉnh ngoài cây, dùng hàng đợi ưu tiên để duy trì ứng viên. Borůvka để mỗi thành phần chọn cạnh ra nhẹ nhất rồi hợp nhất, giảm nhanh số thành phần qua các pha. Khi hòa trọng số, quản lý hợp nhất hoặc thứ tự phá hòa nhất quán tránh thêm một chu trình. Cấu trúc dữ liệu và độ thưa quyết định bản cài đặt phù hợp."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 7: Borůvka; Prim; Kruskal",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Cây khung nhỏ nhất (MST), tính chất lát cắt và chu trình"
    },
    {
      "id": "ga-flows-cuts-matching",
      "overview": [
        "Luồng mô hình lượng được chuyển trong mạng dưới ràng buộc sức chứa và bảo toàn tại các nút trung gian. Khác đường đi đơn lẻ, một nghiệm luồng có thể phân tán qua nhiều tuyến và cần điều chỉnh những lựa chọn đã thực hiện. Đồ thị thặng dư biểu diễn cả khả năng gửi thêm và khả năng thu hồi luồng cũ. Từ đó chương phát triển đường tăng, chứng nhận tối ưu bằng lát cắt và cách biến bài toán ghép cặp hai phía thành một mạng có sức chứa nguyên."
      ],
      "sources": [
        {
          "sourceId": "erickson-algorithms",
          "locator": "Ch. 10 Maximum Flows and Minimum Cuts; Ch. 11 Applications",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "ga-residual-flow-conservation",
          "title": "Luồng khả thi và cạnh thặng dư",
          "level": "core",
          "paragraphs": [
            "Một luồng khả thi không vượt sức chứa cạnh và có tổng vào bằng tổng ra tại mọi đỉnh ngoài nguồn đích. Cạnh thặng dư thuận biểu diễn phần sức chứa chưa dùng; cạnh ngược cho phép giảm lượng đã gửi để sửa phương án cũ. Tăng luồng trên một đường thặng dư phải cập nhật cả hai hướng tương ứng. Đồ thị có cạnh gốc ở cả hai chiều cần phân biệt chúng với cạnh ngược nội bộ, nếu không có thể làm sai sức chứa và giá trị luồng."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 10: Flows; Residual Graphs; Augmenting Paths",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ga-maxflow-mincut-complexity",
          "title": "Đường tăng, lát cắt và bảo đảm thời gian",
          "level": "core",
          "paragraphs": [
            "Mọi luồng có giá trị không vượt sức chứa của bất kỳ lát cắt nguồn đích nào. Khi không còn đường tăng trong đồ thị thặng dư, tập đỉnh còn khả đạt từ nguồn xác định lát cắt đạt bằng giá trị luồng, chứng nhận tối ưu. Ford–Fulkerson với sức chứa nguyên dừng, nhưng cận O(E|f*|) phụ thuộc giá trị luồng và là giả đa thức; chọn đường tùy ý với sức chứa vô tỷ có thể không dừng. Edmonds–Karp dùng BFS chọn ít cạnh nhất và bảo đảm O(VE²)."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 10: Max-Flow Min-Cut; Ford–Fulkerson; Edmonds–Karp",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "ga-bipartite-matching-integrality",
          "title": "Cặp ghép hai phía và tính nguyên",
          "level": "core",
          "paragraphs": [
            "Cặp ghép chọn các cạnh sao cho không hai cạnh chung đỉnh. Với đồ thị hai phía, nối nguồn tới phía trái, cạnh trái phải và phía phải tới đích, tất cả sức chứa một. Tính nguyên của luồng cực đại cho phép đọc các cạnh có luồng một thành cặp ghép, và mỗi cặp ghép tạo một luồng có giá trị bằng số cặp. Đường tăng thể hiện chuỗi thay đổi ghép và chưa ghép. Quy dẫn này không được áp dụng nguyên dạng cho đồ thị bất kỳ không có phân hoạch hai phía."
          ],
          "sources": [
            {
              "sourceId": "erickson-algorithms",
              "locator": "Ch. 11: Bipartite Matching; Disjoint Paths",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Luồng cực đại, lát cắt cực tiểu và cặp ghép đồ thị hai phía"
    }
  ]
};
