export const COURSE_OBJECT_ORIENTED_PROGRAMMING = {
  id: 'object-oriented-programming',
  code: 'CS-08',
  title: 'Lập trình hướng đối tượng',
  blockId: 'block-2',
  level: 'core',
  prerequisites: [
    {
      courseId: 'cpp-memory-model',
      type: 'required',
      reason: 'Cần nắm vững thời gian sống đối tượng, con trỏ/tham chiếu, nguyên lý RAII, ngữ nghĩa sao chép/di chuyển và con trỏ thông minh trước khi thiết kế lớp và cây phân cấp đa hình.',
    },
  ],
  overview: [
    'Môn học nghiên cứu lập trình hướng đối tượng (Object-Oriented Programming — OOP) không phải như một nghi thức viết `class`, `get`/`set` cho mọi thứ, mà như một phương pháp kỹ thuật nhằm **bảo vệ bất biến dữ liệu (class invariants)** và **tách biệt mã nguồn gọi khỏi chi tiết biểu diễn bên trong**. Nội dung bắt đầu từ sự khác biệt giữa một bản ghi dữ liệu trần (`struct` với các trường độc lập) và một lớp (`class`) mà các trường thành viên bị ràng buộc bởi một bất biến chặt chẽ, cơ chế kiểm soát truy cập (`public`/`private`), vòng đời khởi tạo qua danh sách khởi tạo thành viên (member initializer list), hàm thành viên hằng (`const` member functions) và con trỏ ẩn `this`.',
    'Tiếp theo, môn học làm rõ cách một kiểu dữ liệu tự định nghĩa hành xử tự nhiên như các kiểu cơ sở thông qua ngữ nghĩa sao chép sâu/nông, nạp chồng toán tử (operator overloading) và sự phân biệt thiết kế giữa quan hệ hợp thành (`composition` — "có một / được ghép từ") với kế thừa (`inheritance` — "là một"). Hai chương cuối đi sâu vào cơ chế đa hình thời gian chạy (runtime polymorphism) qua hàm ảo (`virtual`), giao diện thuần ảo (abstract interfaces), điều kiện cần `virtual destructor` khi hủy đa hình, hiện tượng cắt lát đối tượng (`object slicing`), mô hình triển khai bảng hàm ảo (`vtable`/`vptr`) điển hình của ABI so với chuẩn ISO C++, cùng các nguyên lý thiết kế giảm kết dính, ba mẫu thiết kế cốt lõi (`Strategy`, `Factory`, `Observer`) và ranh giới khi nào không nên lạm dụng OOP.',
  ],
  boundaries: [
    'Phân biệt rõ quy định ngữ nghĩa của chuẩn ISO C++ về lời gọi hàm ảo (`virtual` dispatch) với cơ chế triển khai phổ biến bằng con trỏ `vptr` và bảng `vtable` trong các ABI thực tế (như Itanium C++ ABI).',
    'Không áp đặt giáo điều "mọi thứ đều phải là đối tượng và cây kế thừa sâu"; chỉ rõ những bài toán mà dữ liệu phẳng (`struct`), hàm thuần túy và đa hình tĩnh (`template`) đơn giản và hiệu quả hơn kế thừa đa hình động.',
  ],
  sources: [
    {
      sourceId: 'learncpp',
      locator: 'Chapter 14 (§14.1–14.16 Introduction to Classes), Chapter 15 (§15.1–15.9 More on Classes), Chapter 21 (§21.1–21.14 Operator Overloading), Chapter 23 (§23.1–23.3 Object Relationships / Composition), Chapter 24 (§24.1–24.9 Inheritance), and Chapter 25 (§25.1–25.11 Virtual Functions and Polymorphism)',
      relationship: 'primary',
    },
    {
      sourceId: 'swe-at-google',
      locator: 'Chapters 8–10 (Style Guides, Code Review, Documentation) & Design for Maintainability / Preferring Composition over Inheritance',
      relationship: 'supplementary',
    },
    {
      sourceId: 'composing-programs',
      locator: 'Chapter 2: §2.5 Object-Oriented Programming & §2.7 Object Abstraction',
      relationship: 'supplementary',
    },
  ],
  chapters: [
    {
      id: 'oop-classes-invariants',
      title: 'Chương 1 — Trừu tượng hóa dữ liệu, Đóng gói (Encapsulation) và Bảo vệ bất biến của lớp (Class Invariants)',
      overview: [
        'Chương mở đầu giải thích lý do tồn tại của `class`: khi nào ta nên giữ nguyên một `struct` dữ liệu công khai, khi nào ta phải đóng gói các trường dữ liệu vào vùng `private` để bảo vệ một bất biến (class invariant), cơ chế chính xác mà C++ khởi tạo từng thành viên của một đối tượng qua danh sách khởi tạo, và vai trò của con trỏ ẩn `this` cùng hàm thành viên hằng `const`.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 14 (§14.1–14.16 Classes, Member Functions, Access Specifiers, Constructors) & Chapter 15 (§15.1–15.5 The hidden `this` pointer, Destructors)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'oop-ci-invariants-encapsulation-struct-vs-class',
          title: 'Khái niệm Bất biến của lớp (Class Invariant), cơ chế Đóng gói (Encapsulation) và tiêu chuẩn chọn struct hay class',
          level: 'core',
          paragraphs: [
            'Ở mức cú pháp thuần túy của C++, từ khóa `struct` và `class` chỉ khác nhau ở mức truy cập mặc định (`public` cho `struct`, `private` cho `class`). Tuy nhiên, về mặt thiết kế phần mềm, sự khác biệt nằm ở **Bất biến của lớp (Class Invariant)**: một điều kiện ràng buộc giữa các biến thành viên mà luôn phải giữ đúng tại mọi thời điểm quan sát được từ bên ngoài lớp. Nếu một điểm tọa độ 2D `Point { double x; double y; }` cho phép `x` và `y` thay đổi hoàn toàn độc lập sang bất kỳ số thực nào mà không bao giờ tạo ra trạng thái vô lý, nó không có bất biến phức tạp và nên được thiết kế như một `struct` có các trường `public`.',
            'Ngược lại, xét kiểu phân số `Fraction` (cần bất biến mẫu số `den > 0` và tối giản), kiểu ngày tháng `Date` (không thể có ngày 31 tháng 2), hoặc lớp mảng động `Vector` (bắt buộc `size <= capacity` và con trỏ `data` khớp dung lượng): nếu cho phép mã bên ngoài tự ý gán `v.size = 1000` mà không cấp phát lại `v.data`, bất biến lập tức bị phá vỡ và dẫn tới lỗi bộ nhớ. **Đóng gói (Encapsulation)** giải quyết bài toán này bằng cách đặt các biến thành viên vào vùng `private` và chỉ cung cấp các hàm thành viên `public` có kiểm tra và duy trì bất biến: hàm tạo (constructor) thiết lập bất biến lúc đối tượng ra đời, mọi hàm thành viên giả định bất biến đang đúng khi bắt đầu và cam kết khôi phục bất biến trước khi trả về. Tiểu mục cũng chỉ ra ngộ nhận phổ biến: việc đặt biến `private` rồi lại viết cặp hàm `getX()` / `setX(val)` cho phép gán bất kỳ giá trị nào mà không kiểm tra thực chất không bảo vệ được bất biến nào cả.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 14: §14.2 Introduction to classes, §14.5 Public and private members and access specifiers, & §14.6 Access functions and encapsulation (Class invariants)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'oop-ci-constructors-initializer-lists-order',
          title: 'Hàm tạo (Constructors), Danh sách khởi tạo thành viên (Member Initializer List), thứ tự khởi tạo thực tế và từ khóa explicit',
          level: 'core',
          paragraphs: [
            'Khi một đối tượng của lớp được tạo ra, C++ đảm bảo rằng tất cả các biến thành viên của nó phải được khởi tạo trước khi dòng lệnh đầu tiên bên trong thân cặp ngoặc nhọn `{ ... }` của **hàm tạo (constructor)** bắt đầu chạy. Do đó, nếu lập trình viên viết `ten_thanh_vien = gia_tri;` bên trong thân hàm tạo, đối tượng thành viên đó thực chất bị khởi tạo mặc định trước rồi mới bị gán đè lại (vừa tốn chi phí hai lần, vừa bị lỗi biên dịch nếu thành viên đó là hằng `const`, là tham chiếu `T&`, hoặc thuộc một lớp không có hàm tạo mặc định). Cú pháp chuẩn xác là sử dụng **Danh sách khởi tạo thành viên (Member Initializer List)** ngay sau dấu hai chấm `: thanh_vien_1{...}, thanh_vien_2{...}` để khởi tạo trực tiếp từng thành viên.',
            'Một quy tắc cơ chế cực kỳ quan trọng dễ gây lỗi subtle (tinh vi) là: **các biến thành viên của lớp luôn được khởi tạo theo đúng thứ tự chúng được khai báo trong định nghĩa `class`, chứ hoàn toàn KHÔNG theo thứ tự viết trong danh sách khởi tạo của constructor**. Nếu trong `class` khai báo `int m_a;` trước `int m_b;`, nhưng trong constructor lại viết `: m_b{x}, m_a{m_b + 1}`, thì `m_a` sẽ được khởi tạo trước bằng giá trị rác chưa khởi tạo của `m_b` (gây Undefined Behavior). Cuối cùng, tiểu mục giải thích cách dùng từ khóa **`explicit`** trước các constructor nhận một đối số để ngăn trình biên dịch tự ý chuyển đổi kiểu ngầm định ngoài ý muốn.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 14: §14.9 Introduction to constructors, §14.10 Constructor member initializer lists (initialization order rule), and §14.16 Converting constructors and the explicit keyword',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'oop-ci-this-const-static-members',
          title: 'Con trỏ ẩn this, hàm thành viên hằng (const member functions) và thành viên tĩnh của lớp (static members)',
          level: 'core',
          paragraphs: [
            'Khi có 10 đối tượng `Student s1, s2, ..., s10` cùng gọi hàm thành viên `s1.gpa()`, tất cả chúng đều dùng chung một đoạn mã máy duy nhất của hàm `Student::gpa()`; vậy làm sao hàm đó biết nó đang đọc điểm của `s1` chứ không phải `s2`? Tiểu mục này giải thích cơ chế **con trỏ ẩn `this`**: khi biên dịch, trình biên dịch ngầm chuyển lời gọi `s1.gpa()` thành `Student::gpa(&s1)`, truyền địa chỉ của đối tượng gọi vào một tham số con trỏ ẩn tên là `this`. Mọi truy cập biến thành viên `m_score` bên trong hàm thực chất là `this->m_score`.',
            'Cơ chế con trỏ `this` làm sáng tỏ ngay ý nghĩa của **hàm thành viên hằng (`const` member function)** có từ khóa `const` đặt ở cuối chữ ký hàm (ví dụ `double gpa() const`): từ khóa `const` này biến con trỏ ẩn `this` từ kiểu `Student* const` thành **`const Student* const`**, nhờ đó trình biên dịch cấm hàm sửa đổi bất kỳ biến thành viên thông thường nào và cho phép gọi hàm đó trên các đối tượng hằng hoặc tham chiếu hằng (`const Student&`). Phần cuối phân biệt thành viên đối tượng thông thường với **thành viên tĩnh (`static` data members và `static` member functions)**: thành viên `static` thuộc về toàn bộ lớp chứ không nằm trong từng đối tượng riêng lẻ, do đó hàm thành viên `static` không có con trỏ `this`.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 14 (§14.4 Const class objects and const member functions) & Chapter 15 (§15.1 The hidden `this` pointer, §15.6–15.7 Static member variables and functions)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'oop-copy-operators-composition',
      title: 'Chương 2 — Ngữ nghĩa sao chép (Shallow vs Deep Copy), Nạp chồng toán tử và Hợp thành đối tượng (Composition)',
      overview: [
        'Chương này nghiên cứu cách các đối tượng tương tác và kết hợp với nhau: điều gì xảy ra trong bộ nhớ khi sao chép nông so với sao chép sâu một đối tượng quản lý tài nguyên, cách xử lý tự gán và định nghĩa các phép toán tự nhiên (`==`, `<`, `+`, `[]`, `<<`) cho lớp mà không làm biến dạng ngữ nghĩa, và cách xây dựng các hệ thống phức hợp bằng quan hệ hợp thành (`composition` / `has-a`).',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 14 (§14.14 Copy constructors), Chapter 21 (§21.1–21.14 Operator Overloading, Deep vs Shallow Copy), & Chapter 23 (§23.1–23.3 Object Relationships: Composition and Aggregation)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'oop-coc-shallow-vs-deep-copy-assignment',
          title: 'Sao chép nông (Shallow Copy) so với Sao chép sâu (Deep Copy), toán tử gán sao chép và mẫu Copy-and-Swap',
          level: 'core',
          paragraphs: [
            'Mặc định, nếu lập trình viên không tự viết hàm tạo sao chép (copy constructor `T(const T&)`) và toán tử gán sao chép (copy assignment `T& operator=(const T&)`), trình biên dịch sẽ tự sinh phiên bản mặc định thực hiện **sao chép từng thành viên (memberwise / shallow copy)**. Đối với các lớp chỉ chứa kiểu cơ sở hoặc các thành viên đã tuân thủ RAII (`std::vector`, `std::string`), sao chép mặc định hoạt động hoàn hảo. Nhưng đối với một lớp cấu trúc dữ liệu cấp thấp trực tiếp giữ một con trỏ thô `T* m_data` trỏ ra Heap, sao chép nông chỉ chép nguyên xi địa chỉ trong `m_data`, khiến hai đối tượng `a` và `b` cùng trỏ chung vào một mảng trên Heap (aliasing ngoài ý muốn): sửa `a` làm hỏng `b`, và khi cả hai ra khỏi phạm vi sẽ gây lỗi **giải phóng kép (`double free`)**.',
            'Để hai đối tượng độc lập nhau về trạng thái, lớp quản lý bộ nhớ thô phải cài đặt **sao chép sâu (deep copy)**: cấp phát một khối nhớ riêng trên Heap cho đối tượng đích rồi sao chép giá trị từng phần tử sang. Khi viết toán tử gán `operator=`, tiểu mục phân tích hai yêu cầu an toàn bắt buộc: phải xử lý đúng trường hợp **tự gán (`a = a` — self-assignment)** (nếu xóa vùng nhớ cũ của `this` trước khi chép từ tham số nguồn thì khi tự gán sẽ đọc phải vùng nhớ vừa xóa!) và phải đảm bảo an toàn ngoại lệ thông qua thành ngữ **Copy-and-Swap** (tạo bản sao tạm trước rồi hoán đổi con trỏ bằng `std::swap`).',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 21: §21.12 Overloading the assignment operator (Self-assignment) & §21.13 Shallow vs. deep copying',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'oop-coc-operator-overloading-semantics',
          title: 'Nguyên tắc nạp chồng toán tử (Operator Overloading): toán tử so sánh, số học, truy cập chỉ số [] và luồng xuất <<',
          level: 'core',
          paragraphs: [
            '**Nạp chồng toán tử (Operator Overloading)** cho phép định nghĩa ý nghĩa của các ký hiệu toán tử quen thuộc (`+`, `-`, `*`, `==`, `<`, `[]`, `()`, `<<`) cho các kiểu dữ liệu người dùng tự định nghĩa (như số phức `Complex`, phân số `Fraction`, vector toán học `Vec3`, ma trận `Matrix`). Tiểu mục này phân loại cách cài đặt theo bản chất của toán tử: (1) Các toán tử làm thay đổi vế trái hoặc gắn chặt với biểu diễn bộ nhớ như `=`, `[]`, `()`, `+=` được cài đặt làm **hàm thành viên** (trong đó `operator[]` thường cần cả phiên bản trả về `T&` để gán và phiên bản `const T&` `const` để đọc trên đối tượng hằng); (2) Các toán tử đối xứng hai ngôi như `+`, `-`, `==`, `<` hoặc toán tử luồng `std::ostream& operator<<(std::ostream&, const T&)` (mà vế trái là luồng `std::cout` chứ không phải lớp của ta) được cài đặt làm **hàm thông thường hoặc hàm `friend`**.',
            'Tiểu mục đặc biệt nhấn mạnh quy tắc kỷ luật ngữ nghĩa: chỉ nạp chồng toán tử khi phép toán đó có ý nghĩa hiển nhiên, trực quan và tuân thủ đúng các tính chất toán học mà người đọc mong đợi (chẳng hạn nạp chồng `a + b` không được phép làm thay đổi giá trị của `a` hay `b`, và toán tử `<` dùng để sắp xếp phải thỏa mãn tính chất thứ tự nghiêm ngặt — strict weak ordering). Nếu một hành động không có sự tương ứng tự nhiên với toán tử, hãy viết một hàm thành viên có tên rõ nghĩa thay vì lạm dụng toán tử gây khó hiểu.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 21: §21.1–21.10 Overloading arithmetic, I/O (`<<`, `>>`), comparison (`==`, `<`), and subscript (`[]`) operators',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'oop-coc-composition-vs-aggregation',
          title: 'Quan hệ Hợp thành (Composition — part-of) so với Kết tập (Aggregation — has-a) và cách xây dựng hệ thống từ các phần độc lập',
          level: 'core',
          paragraphs: [
            'Phần lớn các đối tượng phức tạp trong thế giới thực cũng như trong phần mềm được tạo nên bằng cách lắp ghép các đối tượng nhỏ hơn lại với nhau làm biến thành viên. Tiểu mục này phân biệt hai sắc thái của quan hệ chứa đựng: (1) **Hợp thành (Composition — quan hệ "là một bộ phận của" / `part-of`)**: đối tượng tổng thể nắm quyền sở hữu độc quyền đối với đối tượng thành phần, chịu trách nhiệm tạo ra nó và khi đối tượng tổng thể bị hủy thì thành phần đó cũng bị hủy theo (ví dụ một đối tượng `Graph` chứa `std::vector<Node>` bên trong nó); và (2) **Kết tập (Aggregation — quan hệ tham chiếu / `has-a`)**: đối tượng chứa chỉ giữ con trỏ hoặc tham chiếu không sở hữu tới một đối tượng tồn tại độc lập bên ngoài và có thể được chia sẻ bởi nhiều nơi khác.',
            'Thiết kế dựa trên **Hợp thành (Composition)** mang lại tính mô-đun rất cao: lớp bên ngoài chỉ giao tiếp với các thành viên bên trong thông qua giao diện `public` của chúng mà không phụ thuộc vào chi tiết cài đặt nội bộ của thành viên, đồng thời có thể dễ dàng thay đổi hoặc kiểm thử từng thành phần một cách độc lập.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 23: §23.1 Object relationships, §23.2 Composition, and §23.3 Aggregation',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'oop-inheritance-polymorphism',
      title: 'Chương 3 — Kế thừa (Inheritance), Đa hình động (Virtual Dispatch), Giao diện trừu tượng và Mô hình vtable/vptr',
      overview: [
        'Chương này phân tích cơ chế kế thừa và đa hình thời gian chạy: một lớp dẫn xuất mở rộng lớp cơ sở như thế nào, điều gì xảy ra khi gọi một hàm ảo (`virtual`) qua con trỏ/tham chiếu cơ sở, vì sao hủy đa hình qua base thiếu virtual destructor có thể gây hành vi không xác định, hiện tượng cắt lát đối tượng (`object slicing`) và cơ chế bảng hàm ảo bên dưới.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 24 (§24.1–24.9 Inheritance) & Chapter 25 (§25.1–25.11 Virtual Functions, Abstract Classes, Virtual Destructors, vtable, Object Slicing)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'oop-ip-inheritance-construction-order-liskov',
          title: 'Kế thừa công khai (Public Inheritance — is-a), bố cục đối tượng cơ sở – dẫn xuất, thứ tự khởi tạo/hủy và Nguyên lý thay thế Liskov (LSP)',
          level: 'core',
          paragraphs: [
            '**Kế thừa công khai (`class Derived : public Base`)** mô hình hóa quan hệ phân loại **"là một" (`is-a`)**: mọi đối tượng của lớp dẫn xuất `Derived` đồng thời là một đối tượng đặc biệt hóa của lớp cơ sở `Base`. Về mặt bố cục bộ nhớ, một đối tượng `Derived` chứa trọn vẹn một **đối tượng con lớp cơ sở (`Base` subobject)** ở phần đầu, nối tiếp bằng các biến thành viên mới được thêm riêng ở `Derived`. Chính cấu trúc lồng nhau này quy định thứ tự vòng đời bất biến: khi tạo một đối tượng `Derived`, **hàm tạo của lớp cơ sở `Base` luôn chạy hoàn tất trước**, sau đó mới đến các thành viên và thân hàm tạo của `Derived`; ngược lại, khi đối tượng bị hủy, **hàm hủy của `Derived` chạy trước**, rồi mới gọi ngược lên hàm hủy của `Base` (vì phần `Derived` có thể còn dùng tới dữ liệu của `Base`, nhưng `Base` không bao giờ biết tới `Derived`).',
            'Để kiểm tra xem một thiết kế kế thừa có đúng đắn về mặt logic hay không, tiểu mục giới thiệu **Nguyên lý thay thế Liskov (Liskov Substitution Principle — LSP)**: bất kỳ đoạn mã nào làm việc đúng với con trỏ/tham chiếu tới lớp cơ sở `Base` đều phải tiếp tục làm việc đúng theo hợp đồng khi ta truyền vào đó một đối tượng thuộc lớp dẫn xuất `Derived` mà không cần biết kiểu cụ thể của nó. Những ví dụ kinh điển như cho hình vuông `Square` kế thừa từ hình chữ nhật `Rectangle` có hàm `setWidth()` và `setHeight()` độc lập sẽ vi phạm LSP (vì hàm kiểm thử `Rectangle` kỳ vọng đổi chiều rộng không làm đổi chiều cao), chứng minh rằng "là một" trong ngôn ngữ đời thường không tự động đồng nghĩa với "là một" về mặt hành vi hợp đồng trong phần mềm.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 24: §24.1–24.5 Introduction to inheritance, Order of construction of derived classes, Constructors and initialization of derived classes, and Access specifiers (`protected`)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'oop-ip-virtual-functions-abstract-destructors',
          title: 'Liên kết tĩnh so với Liên kết động (Dynamic Dispatch), từ khóa virtual / override, Lớp thuần ảo (Interface) và Virtual Destructor',
          level: 'core',
          paragraphs: [
            'Mặc định trong C++, các lời gọi hàm thành viên thông thường sử dụng **liên kết tĩnh tại thời điểm biên dịch (static / early binding)** dựa trên kiểu tĩnh của con trỏ hoặc tham chiếu: nếu `Base* p = &derivedObj;` mà hàm `speak()` không phải hàm ảo, lời gọi `p->speak()` sẽ luôn gọi `Base::speak()`. Để chương trình quyết định hàm nào được gọi tại **thời điểm chạy (runtime / dynamic dispatch / late binding)** dựa trên **kiểu thực tế (dynamic type)** của đối tượng mà `p` đang trỏ tới, hàm đó ở lớp cơ sở phải được khai báo với từ khóa **`virtual`**, và ở lớp dẫn xuất nên gắn từ khóa **`override`** (để trình biên dịch báo lỗi ngay nếu người viết gõ lệch chữ ký hàm hoặc thiếu `const`). Khi một hàm ảo được khai báo bằng `= 0` (ví dụ `virtual double area() const = 0;`), nó trở thành **hàm thuần ảo (pure virtual function)** và lớp chứa nó trở thành **lớp cơ sở trừu tượng (abstract class / interface)** — không thể khởi tạo trực tiếp đối tượng của lớp trừu tượng mà bắt buộc các lớp dẫn xuất cụ thể phải định nghĩa đầy đủ mọi hàm thuần ảo.',
            'Thiết kế hàm hủy của lớp cơ sở phụ thuộc hợp đồng sở hữu. Nếu cho phép hủy đối tượng dẫn xuất thông qua con trỏ cơ sở với delete, lớp cơ sở cần public virtual destructor để việc hủy đa hình đúng. Một thiết kế khác là protected nonvirtual destructor, ngăn mã bên ngoài xóa đối tượng qua Base và dành việc hủy cho cơ chế sở hữu được quy định. Việc có hàm virtual không tự buộc mọi lớp phải cung cấp public virtual destructor. Trong trường hợp thông thường đang xét, delete một Derived qua Base có destructor không virtual gây hành vi không xác định; không được mô tả như bảo đảm chỉ chạy destructor Base. Tiểu mục đối chiếu quyền truy cập destructor, kiểu tĩnh của con trỏ, kiểu động của đối tượng và cách dùng std::unique_ptr<Base> để lựa chọn hợp đồng rõ ràng.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 25: §25.1 Pointers and references to the base class of derived objects, §25.2 Virtual functions and polymorphism, §25.3 The override and final specifiers, §25.4 Virtual destructors, and §25.7 Pure virtual functions, abstract base classes, and interface classes',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'oop-ip-vtable-abi-and-object-slicing',
          title: 'Mô hình triển khai bảng hàm ảo (vtable / vptr) của ABI, chi phí thực thi và hiện tượng Cắt lát đối tượng (Object Slicing)',
          level: 'core',
          paragraphs: [
            'Làm thế nào chương trình đang chạy chỉ nhìn vào một con trỏ `Base* p` lại tìm ra đúng địa chỉ hàm `Derived::speak()`? Tiểu mục này phân biệt rõ: chuẩn ISO C++ chỉ quy định hành vi ngữ nghĩa của lời gọi hàm ảo, nhưng hầu hết mọi trình biên dịch và **ABI thực tế** hiện thực hóa cơ chế này bằng **Bảng hàm ảo (`vtable` — virtual method table)** và **Con trỏ bảng ảo ẩn (`vptr`)**. Cụ thể, với mỗi lớp có hàm `virtual`, trình biên dịch tạo ra một mảng tĩnh chỉ đọc các con trỏ hàm gọi là `vtable` của lớp đó; đồng thời chèn thêm một con trỏ ẩn `vptr` (thường tốn $8$ byte ở đầu mỗi đối tượng) được constructor tự động gán trỏ vào `vtable` của đúng lớp thực tế. Khi gọi `p->speak()`, CPU thực hiện giải tham chiếu gián tiếp qua `p->vptr[chi_so_ham]` để nhảy tới đúng hàm của `Derived`. Hiểu cơ chế `vtable`/`vptr` giúp người học giải thích vì sao lớp có hàm `virtual` tăng thêm kích thước 1 con trỏ cho mỗi đối tượng, vì sao lời gọi hàm ảo tốn thêm một bước tra bảng và khó được nội tuyến hóa (`inline`) hơn hàm thường, và vì sao không được gọi hàm ảo để kỳ vọng hành vi của `Derived` ngay bên trong constructor/destructor của `Base` (vì tại thời điểm đó phần `Derived` chưa được tạo hoặc đã bị hủy, nên `vptr` đang trỏ vào `vtable` của `Base`).',
            'Phần cuối giải thích hiện tượng **Cắt lát đối tượng (Object Slicing)**: nếu một hàm nhận tham số **theo giá trị** `void xuLy(Base b)` (thay vì tham chiếu `const Base& b` hoặc con trỏ `Base*`) và người dùng truyền một đối tượng `Derived d` vào đó, thì chỉ có phần đối tượng con `Base` bên trong `d` được sao chép vào biến cục bộ `b` (với `vptr` của `b` là của `Base`), còn toàn bộ các biến thành viên và hành vi riêng của `Derived` bị "cắt bỏ" mất. Vì vậy, đa hình động trong C++ luôn phải đi qua con trỏ hoặc tham chiếu, và các container đa hình phải lưu `std::vector<std::unique_ptr<Base>>` chứ không thể lưu `std::vector<Base>`.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 25: §25.5 Early binding and late binding, §25.6 The virtual table (`vtable` and `*__vptr`), and §25.9 Object slicing',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'oop-design-tradeoffs',
      title: 'Chương 4 — Nguyên lý thiết kế hướng đối tượng, các Mẫu thiết kế cốt lõi (Strategy, Factory, Observer) và giới hạn của OOP',
      overview: [
        'Chương cuối tổng hợp cách sử dụng OOP một cách chín chắn trong kỹ nghệ phần mềm: tăng độ gắn kết nội tại (cohesion), giảm độ kết dính phụ thuộc (coupling), ưu tiên hợp thành hơn kế thừa sâu, giải quyết ba bài toán kiến trúc phổ biến bằng mẫu thiết kế (`Strategy`, `Factory`, `Observer`) và nhận biết rõ ranh giới khi nào đa hình tĩnh (`template`), `std::variant` hoặc mảng dữ liệu phẳng vượt trội hơn OOP.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 23 (§23.1–23.3 Object Relationships) & Chapter 25 (§25.7 Interface classes)',
          relationship: 'primary',
        },
        {
          sourceId: 'swe-at-google',
          locator: 'Chapters 8–10 & Software Design Principles (Modularity, Coupling, Composition over Inheritance)',
          relationship: 'primary',
        },
        {
          sourceId: 'composing-programs',
          locator: 'Chapter 2: §2.5–2.7 Object-Oriented Programming vs Functional/Generic Approaches',
          relationship: 'supplementary',
        },
      ],
      topics: [
        {
          id: 'oop-dt-coupling-cohesion-composition-over-inheritance',
          title: 'Độ gắn kết (Cohesion), Độ kết dính (Coupling), Đảo ngược phụ thuộc (DIP) và nguyên tắc Ưu tiên Hợp thành hơn Kế thừa',
          level: 'core',
          paragraphs: [
            'Chất lượng của một thiết kế mô-đun được đánh giá qua hai thước đo đối ngẫu: **Độ gắn kết nội tại cao (High Cohesion)** — mọi thành viên trong một lớp đều phục vụ chung một trách nhiệm rõ ràng duy nhất (Single Responsibility); và **Độ kết dính phụ thuộc thấp (Low Coupling)** — các lớp phụ thuộc vào nhau ít nhất có thể, chỉ giao tiếp qua các giao diện trừu tượng mỏng ổn định (**Đảo ngược phụ thuộc — Dependency Inversion Principle**: cả mô-đun cấp cao lẫn mô-đun cấp thấp đều phụ thuộc vào giao diện trừu tượng `Interface`, thay vì mô-đun cấp cao gọi trực tiếp chi tiết cài đặt cấp thấp).',
            'Từ góc nhìn giảm kết dính đó, tiểu mục phân tích vì sao kỹ nghệ phần mềm hiện đại luôn nhấn mạnh nguyên tắc **"Ưu tiên Hợp thành hơn Kế thừa cài đặt" (Prefer Composition over Inheritance)**: kế thừa lớp (`class D : public B`) tạo ra mối liên kết cứng nhất trong ngôn ngữ (lớp con bị phụ thuộc chặt vào chi tiết của lớp cha — bài toán lớp cơ sở mong manh / fragile base class problem — và dễ dẫn tới sự bùng nổ tổ hợp các lớp con như `BufferedEncryptedFileStream`, `BufferedCompressedFileStream`). Ngược lại, nếu tách từng khía cạnh hành vi (như bộ nén, bộ mã hóa, nguồn lưu trữ) thành các thành phần giao diện độc lập rồi lắp ghép chúng bằng **Hợp thành (Composition)** bên trong một đối tượng, ta có thể kết hợp linh hoạt mọi biến thể tại thời điểm chạy mà chỉ cần số lượng lớp tuyến tính.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 23 (§23.2 Composition vs Inheritance) & Chapter 25 (§25.7 Interface classes and loose coupling)',
              relationship: 'primary',
            },
            {
              sourceId: 'swe-at-google',
              locator: 'Chapters 8–12: Designing for Maintainability and Testing via Dependency Injection / Composition',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'oop-dt-core-design-patterns',
          title: 'Ba mẫu thiết kế kinh điển giải quyết bài toán thực tế: Strategy, Factory và Observer',
          level: 'core',
          paragraphs: [
            'Thay vì học thuộc lòng hai mươi mấy mẫu thiết kế như giáo điều hình thức, tiểu mục này chọn lọc ba mẫu thiết kế nền tảng xuất hiện thường xuyên nhất và giải thích đúng bài toán kỹ thuật mà mỗi mẫu giải quyết: (1) **Mẫu Chiến lược (Strategy Pattern)**: khi một lớp cần thực hiện một thuật toán có thể thay đổi linh hoạt (ví dụ tính cước vận chuyển theo đường bộ/đường hàng không, hoặc chọn chính sách nén dữ liệu), thay vì nhồi hàng chục nhánh `if/else` vào lớp chính hay tạo cây kế thừa cố định, ta đóng gói họ thuật toán đó dưới một giao diện chung (hoặc đối tượng hàm `std::function`) và truyền chiến lược vào đối tượng chính qua hợp thành; (2) **Mẫu Nhà máy (Factory Function / Factory Method)**: tách riêng logic quyết định *khởi tạo lớp dẫn xuất cụ thể nào* (trả về `std::unique_ptr<BaseInterface>`) ra khỏi đoạn mã sử dụng đối tượng đó, giúp mã nghiệp vụ hoàn toàn không cần `#include` hay biết tên các lớp cài đặt cụ thể.',
            '(3) **Mẫu Quan sát / Đăng ký – Phát hành (Observer / Publish–Subscribe Pattern)**: khi trạng thái của một đối tượng trung tâm (Subject/Model) thay đổi và cần thông báo cho nhiều thành phần khác (như giao diện hiển thị, bộ ghi nhật ký, bộ thống kê) cập nhật theo mà không muốn đối tượng trung tâm bị gắn chặt vào danh sách cố định các lớp đó, đối tượng trung tâm chỉ giữ một danh sách các con trỏ/giao diện `Observer` đăng ký nhận thông báo. Tiểu mục cũng chỉ rõ rủi ro vòng đời trong C++ khi dùng Observer: nếu một `Observer` bị hủy mà chưa hủy đăng ký khỏi `Subject`, con trỏ trong `Subject` sẽ biến thành con trỏ treo (dangling pointer).',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 25 (§25.7 Interface classes) & Chapter 20 (§20.1 Function pointers / callbacks and std::function as lightweight strategies)',
              relationship: 'primary',
            },
            {
              sourceId: 'composing-programs',
              locator: 'Chapter 2: §2.5–2.7 Generic Operations and Message Passing Patterns',
              relationship: 'supplementary',
            },
          ],
        },
        {
          id: 'oop-dt-when-not-to-use-oop',
          title: 'Ranh giới áp dụng của OOP: Đa hình động (virtual) so với Đa hình tĩnh (Templates), kiểu biến thể (std::variant) và dữ liệu phẳng',
          level: 'core',
          paragraphs: [
            'Lập trình hướng đối tượng với kế thừa và hàm ảo không phải là công cụ vạn năng cho mọi bài toán. Tiểu mục này thiết lập bảng tiêu chí rõ ràng để chọn mô hình biểu diễn phù hợp trong C++: (1) **Đa hình động qua lớp cơ sở và `virtual`** phù hợp khi tập hợp các kiểu con là **mở (open set)** và chỉ được xác định tại **thời điểm chạy** (ví dụ danh sách các thành phần giao diện không đồng nhất hoặc plugin nạp lúc chạy); (2) Ngược lại, nếu kiểu dữ liệu đã biết cố định tại **thời điểm biên dịch** (như thuật toán sắp xếp hay cấu trúc `std::vector<T>`), **Đa hình tĩnh qua Khuôn mẫu (`template`)** vượt trội hoàn toàn vì không tốn bộ nhớ cho `vptr`, không phải cấp phát từng phần tử rời rạc trên Heap, và trình biên dịch có thể nội tuyến hóa (`inline`) toàn bộ lời gọi hàm.',
            'Hơn nữa, nếu tập hợp các kiểu dữ liệu là một **tập đóng cố định đã biết trước (closed set of types)** — chẳng hạn các nút của một cây biểu thức toán học (`Number`, `Add`, `Multiply`) hoặc các trạng thái của một máy trạng thái hữu hạn — việc dùng kiểu tổng có gắn thẻ **`std::variant`** kết hợp hàm `std::visit` cho phép lưu trữ trực tiếp trên vùng nhớ phẳng không cần cấp phát Heap qua con trỏ và dễ dàng thêm các phép toán mới mà không phải sửa từng lớp. Cuối cùng, trong các bài toán xử lý mảng dữ liệu lớn đòi hỏi hiệu năng cao (đồ họa, mô phỏng vật lý, học máy), việc lưu các bản ghi dữ liệu đồng nhất nằm liền kề nhau trong `std::vector<Struct>` luôn nhanh hơn gấp nhiều lần so với mảng các con trỏ `std::vector<unique_ptr<Base>>` nhảy ngẫu nhiên khắp Heap làm trượt bộ nhớ đệm CPU (cache miss).',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 25 (§25.6 Virtual table overhead) & Chapter 16 (§16.1 Contiguous memory benefits of std::vector)',
              relationship: 'primary',
            },
            {
              sourceId: 'composing-programs',
              locator: 'Chapter 2: §2.7 Object Abstraction and Dispatching on Type vs Data-Directed Programming',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
  ],
};
