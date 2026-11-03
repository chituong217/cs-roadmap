# Phạm vi và cách biên soạn lộ trình 1.1

Lộ trình bổ trợ cho sinh viên năm 2 đã học C++ và đang học OOP, đi qua nền tảng KHMT, bài tập, sản phẩm và chuẩn bị thực tập. Mỗi nhiệm vụ giữ tên, việc cần làm, thông tin thêm và tài liệu khi hữu ích. Chương là mục lục; toàn bộ nhiệm vụ nối thành một chuỗi duy nhất.

## Rà độ chi tiết ở phiên bản 1.1

Toàn bộ 339 nhiệm vụ giữ ID và thứ tự, phần việc cần làm được bổ sung riêng theo chủ đề. Không áp số gạch đầu dòng cố định. Nội dung mới làm rõ các thao tác, giả thiết, cấu trúc dữ liệu, trường hợp kiểm thử và bằng chứng kiểm tra cần thiết; không thêm các đoạn mục tiêu chung hay lời hứa đầu ra học tập lặp lại.

Ví dụ: kế thừa tách quyền truy cập, constructor/destructor, thay thế lớp cha và ranh giới với đa hình; Dijkstra có khởi tạo, bản ghi heap cũ, relax, điều kiện chốt/dừng, truy vết và chi phí theo cách cài; database có lịch hai session tái hiện cạnh tranh và kiểm tra trạng thái cuối; ML có đơn vị chia dữ liệu và fit tiền xử lý chỉ trên train. Các ô project/nghề nghiệp cũng bổ sung đầu vào, phạm vi, ca kiểm tra và tài liệu/bằng chứng thực tế riêng.

Khung đối chiếu: [roadmap.sh Computer Science](https://roadmap.sh/computer-science), [OSSU](https://github.com/ossu/computer-science), [CS2023](https://csed.acm.org/knowledge-areas/). Thứ tự và bài tập được biên soạn riêng, không phải bản chép hay tuyên bố tương đương chương trình của trường. Học sâu một chuyên ngành sau khi chọn hướng; không yêu cầu thành chuyên gia mọi lĩnh vực.

## Thứ tự và quan hệ phụ thuộc

- Giữ 32 nhiệm vụ và ID bản thử; chèn phần vá nền C++, sao chép/quyền sở hữu và Git cộng tác ở đúng chỗ.
- Công cụ, toán rời rạc trước DSA; đệ quy trước duyệt cây; heap, BFS và relax trước Dijkstra; DSU và tính chất MST trước Kruskal.
- Từng thuật toán có ô riêng: insertion/selection/bubble/merge/quick/heap sort; BFS/DFS/Dijkstra/Bellman–Ford/Floyd; Kruskal và Prim; LCS/edit distance/LIS. Luyện tập và project đan xen.
- Đại số tuyến tính, giải tích và xác suất trước ML; Python/NumPy trước cài mô hình; không yêu cầu mọi môn toán phải dùng Python từ đầu.
- Kiến trúc trước hệ điều hành, hệ điều hành trước lập trình socket, SQL/transaction trước API có database.
- Bài thực hành tăng dần: thư viện C++ → tìm kiếm → mạng → database → API → vận hành. Có shell, interpreter, minh họa thuật toán, ML và đồ án tự chọn để khảo sát hướng.
- Phần thực tập ở cuối để dễ tìm nhưng có chỉ dẫn rõ không cần học hết mới ứng tuyển. Lịch học trên trường được ưu tiên đối chiếu theo học kỳ thực tế.

## Đối chiếu các lĩnh vực CS2023

| Lĩnh vực | Chặng liên quan |
|---|---|
| Algorithmic Foundations | Toán rời rạc, DSA, thuật toán, đồ thị, truy vấn/chuỗi |
| Architecture and Organization | Máy tính hoạt động như thế nào |
| Artificial Intelligence | Tìm kiếm AI, ML, neural network, đánh giá LLM |
| Data Management | SQL, thiết kế dữ liệu, giao dịch, index, backup |
| Foundations of Programming Languages | Hệ kiểu, automata, parser, interpreter |
| Graphics and Interactive Techniques | Ảnh, biến đổi 2D, pipeline 3D, công cụ tương tác |
| Human-Computer Interaction | Tác vụ người dùng, usability, accessibility |
| Mathematical and Statistical Foundations | Toán rời rạc, đại số tuyến tính, giải tích, xác suất thống kê |
| Networking and Communication | Tầng mạng, TCP/IP, DNS, HTTP, TLS, socket |
| Operating Systems | Tiến trình, lập lịch, bộ nhớ ảo, đồng thời, filesystem |
| Parallel and Distributed Computing | Luồng, producer–consumer, hệ phân tán |
| Security | Mô hình đe dọa, quyền, dữ liệu đầu vào, triển khai, kiểm thử |
| Society, Ethics, and the Profession | Dữ liệu, license, tác động, nghiên cứu và cộng tác |
| Software Development Fundamentals | C++, OOP, Git, gỡ lỗi, Python và bài thực hành |
| Software Engineering | Yêu cầu, thiết kế, test, CI, đo lường, làm nhóm |
| Specialized Platform Development | Web, API, công cụ đồ họa; di động/nhúng được giới thiệu ở bước chọn hướng |
| Systems Fundamentals | Biểu diễn dữ liệu, kiến trúc, hệ điều hành và kết nối hệ thống |

Đây là bản kiểm tra độ rộng theo lĩnh vực, không phải chứng nhận hoàn tất mọi đơn vị kiến thức hoặc số giờ của CS2023.

## Tài nguyên

Ưu tiên nguồn tác giả, tài liệu chính thức và khóa đại học. CSES được chỉ bài bằng tên, không chép lại đề. LearnCpp, MIT OCW, OSTEP, tài liệu PostgreSQL/Python, MDN, FastAPI, OWASP, scikit-learn/PyTorch và các tài liệu tác giả được gắn ở nhiệm vụ phù hợp. Một số nguồn có khóa/chương nâng cao hơn phạm vi nhiệm vụ: đọc đúng chủ đề, không cần học hết toàn bộ trang rồi mới đi tiếp.

Toàn bộ văn bản được xuất tự động ra `public/ROADMAP.md` khi build để nội dung bản đọc và website cùng một nguồn.
