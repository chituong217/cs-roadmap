export const COURSE_CPP_MEMORY_MODEL = {
  id: 'cpp-memory-model',
  code: 'CS-07',
  title: 'C++ và mô hình bộ nhớ',
  blockId: 'block-2',
  level: 'core',
  prerequisites: [
    {
      courseId: 'intro-programming',
      type: 'required',
      reason: 'Cần nắm chắc kiểu dữ liệu cơ sở, hàm, phạm vi khối, tham chiếu cơ bản và std::vector/std::string từ Môn CS-04.',
    },
    {
      courseId: 'program-design-debugging',
      type: 'required',
      reason: 'Cần biết đọc khung ngăn xếp lời gọi (Call Stack), sử dụng debugger và viết kiểm thử trước khi làm việc với con trỏ và cấp phát động.',
    },
  ],
  overview: [
    'Môn học mở cánh cửa đi từ lập trình cú pháp bề mặt xuống tầng cơ chế bộ nhớ thực tế của máy tính thông qua ngôn ngữ C++. Ở Môn CS-04, người học làm việc với các biến cục bộ và `std::vector` như những hộp chứa an toàn; sang môn này, người học giải phẫu những gì thực sự nằm bên dưới: địa chỉ bộ nhớ ảo của từng byte, sự khác biệt bản chất giữa tham chiếu (`T&`) và đối tượng con trỏ (`T*`), hiện tượng bí danh (aliasing) khi nhiều đường dẫn cùng trỏ vào một ô nhớ, và hệ thống kiểm soát tính hằng (`const` correctness) ở mức con trỏ.',
    'Trên nền tảng địa chỉ đó, môn học phân tích ba chế độ thời gian lưu trữ đối tượng (automatic, static, dynamic storage duration), cơ chế vận hành của vùng nhớ ngăn xếp (Stack) so với vùng nhớ tự do (Heap / Free Store), và nguyên nhân vật lý của bốn lỗi bộ nhớ nguy hiểm nhất (dangling pointer, memory leak, double free, buffer overflow). Hai chương cuối xây dựng phương pháp quản lý tài nguyên hiện đại của C++: nguyên lý gắn vòng đời tài nguyên với vòng đời đối tượng (RAII), phân loại giá trị lvalue/rvalue, ngữ nghĩa di chuyển (move semantics), con trỏ thông minh (`std::unique_ptr`, `std::shared_ptr`), khuôn mẫu tổng quát (`template`), sự mất hiệu lực của iterator khi `std::vector` cấp phát lại, và cách dùng công cụ Sanitizer (`ASan`, `UBSan`) để bắt lỗi bộ nhớ tự động.',
  ],
  boundaries: [
    'Phân biệt rạch ròi giữa **quy định của chuẩn ngôn ngữ ISO C++** (về thời gian sống đối tượng, thời điểm lưu trữ, quy tắc lvalue/rvalue và hành vi không xác định — Undefined Behavior) với **cơ chế triển khai cụ thể của trình biên dịch và hệ điều hành (ABI / Platform implementation)** như việc bố trí vùng nhớ Stack tăng/giảm theo địa chỉ hay kích thước con trỏ 64-bit.',
    'Trọng tâm của phần khuôn mẫu (`template`) ở môn này là viết hàm/lớp tổng quát theo kiểu dữ liệu để hiểu cách `std::vector<T>` và `std::unique_ptr<T>` hoạt động; không sa đà vào lập trình siêu mẫu (template metaprogramming / SFINAE) phức tạp.',
    'Chưa đi vào đồng bộ hóa bộ nhớ đa luồng (`std::atomic`, memory ordering fences) — nội dung đó thuộc Môn CS-26 (Lập trình đồng thời).',
  ],
  sources: [
    {
      sourceId: 'learncpp',
      locator: 'Chapter 7 (§7.4–7.11 Storage Duration), Chapter 11 (Function Templates), Chapter 12 (§12.1–12.14 Value Categories, References, and Pointers), Chapter 19 (§19.1–19.5 Dynamic Memory Allocation), Chapter 20 (§20.2 Stack and Heap), and Chapter 22 (§22.1–22.7 Move Semantics and Smart Pointers)',
      relationship: 'primary',
    },
    {
      sourceId: 'dive-into-systems',
      locator: 'Chapter 2: In-Depth C/C++ Pointers, Memory Allocation, Stack vs Heap, and Valgrind/Sanitizer Debugging',
      relationship: 'primary',
    },
    {
      sourceId: 'mit-missing-semester',
      locator: 'Lecture 7: Debugging and Profiling — Memory Debuggers and Sanitizers (ASan, UBSan, Valgrind)',
      relationship: 'supplementary',
    },
  ],
  chapters: [
    {
      id: 'cppm-addresses-pointers-aliasing',
      title: 'Chương 1 — Địa chỉ ô nhớ, Con trỏ (Pointers), Tham chiếu (References), Const Correctness và Bí danh (Aliasing)',
      overview: [
        'Chương này xây dựng mô hình bộ nhớ đánh địa chỉ theo byte và làm rõ cơ chế gián tiếp (indirection): làm thế nào một biến có thể lưu địa chỉ của một đối tượng khác, sự khác biệt cơ chế giữa con trỏ (`T*`), con trỏ rỗng (`nullptr`) với tham chiếu (`T&`), quy tắc `const` với con trỏ, số học con trỏ trên mảng liên tiếp và các hậu quả logic khi hai tên gọi cùng trỏ vào một vùng nhớ (aliasing).',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 12: Compound Types: References and Pointers (§12.1–12.14)',
          relationship: 'primary',
        },
        {
          sourceId: 'dive-into-systems',
          locator: 'Chapter 2: §2.1–2.3 Pointers and Indirection',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'cppm-apa-memory-addresses-layout',
          title: 'Mô hình bộ nhớ đánh địa chỉ theo byte, toán tử sizeof, căn chỉnh địa chỉ (alignment) và toán tử lấy địa chỉ (&)',
          level: 'core',
          paragraphs: [
            'Ở góc nhìn của một tiến trình đang chạy, bộ nhớ chính (RAM ảo mà hệ điều hành cấp cho tiến trình) là một dãy lớn các ô nhớ 1 byte liền kề nhau, trong đó mỗi byte được gán một con số định danh duy nhất gọi là **địa chỉ bộ nhớ (memory address)**, thường được viết dưới dạng thập lục phân (như `0x7ffd42a1b04c`). Một đối tượng kiểu `char` chiếm $1$ byte tại một địa chỉ, trong khi một đối tượng nhiều byte như `int` (thường $4$ byte) hoặc `double` ($8$ byte) chiếm một dãy các byte liên tiếp nhau, và địa chỉ của cả đối tượng chính là địa chỉ của byte đầu tiên (byte có địa chỉ nhỏ nhất) của nó.',
            'Tiểu mục này giải thích toán tử **`sizeof(T)`** trả về số byte mà kiểu `T` chiếm giữ tại thời điểm biên dịch, cùng khái niệm **căn chỉnh bộ nhớ (memory alignment — `alignof`)**: phần cứng CPU đọc/ghi dữ liệu hiệu quả nhất khi một biến kích thước $k$ byte được đặt tại địa chỉ chia hết cho $k$ (ví dụ biến `int` 4 byte đặt ở địa chỉ chia hết cho $4$). Chính quy tắc căn chỉnh này giải thích vì sao trình biên dịch đôi khi chèn thêm các byte đệm trống (padding bytes) vào giữa các trường của một `struct`, khiến `sizeof(struct)` có thể lớn hơn tổng `sizeof` của từng trường thành viên cộng lại. Khi áp dụng **toán tử lấy địa chỉ một ngôi `&x`** (address-of operator) lên một đối tượng lvalue `x` có kiểu `T`, biểu thức trả về địa chỉ bộ nhớ nơi `x` đang cư trú, có kiểu là `T*`.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 4 (§4.3 Object sizes and the sizeof operator) & Chapter 12 (§12.7 Introduction to pointers and address-of operator `&`)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'cppm-apa-pointers-dereference-nullptr',
          title: 'Kiểu con trỏ (T*), toán tử giải tham chiếu (*), con trỏ rỗng (nullptr) và sự khác biệt cơ chế giữa Con trỏ với Tham chiếu',
          level: 'core',
          paragraphs: [
            'Một **con trỏ (pointer)** có kiểu `T*` là một đối tượng biến thực thụ trong bộ nhớ mà giá trị lưu bên trong nó chính là địa chỉ của một đối tượng khác có kiểu `T` (trên kiến trúc 64-bit phổ biến hiện nay, bản thân biến con trỏ `T*` luôn có kích thước cố định 8 byte bất kể `T` là `char` 1 byte hay một `struct` rộng 1000 byte). Khi đã có một con trỏ `p` đang giữ địa chỉ hợp lệ của đối tượng `x`, áp dụng **toán tử giải tham chiếu (dereference operator `*p`)** sẽ đi theo địa chỉ lưu trong `p` để truy cập trực tiếp (đọc hoặc ghi) vào chính đối tượng `x` tại đích; tương tự, toán tử mũi tên `p->thanh_vien` là dạng viết gọn chuẩn của `(*p).thanh_vien`.',
            'Khác với tham chiếu (`T&` — vốn bắt buộc phải được gắn cố định với một đối tượng có thật ngay lúc khởi tạo và không bao giờ đổi sang trỏ đối tượng khác được), biến con trỏ `T*` có hai đặc tính linh hoạt nhưng tiềm ẩn rủi ro: (1) Con trỏ có thể được gán lại (`p = &y`) để đổi sang trỏ tới một đối tượng khác trong quá trình chạy; và (2) Con trỏ có thể ở trạng thái "không trỏ vào đối tượng nào cả", được biểu diễn chuẩn xác trong C++ hiện đại bằng từ khóa **`nullptr`** (thay thế cho macro `NULL` hay số `0` dễ gây nhập nhằng kiểu). Tiểu mục nhấn mạnh quy tắc sống còn: **giải tham chiếu một con trỏ đang bằng `nullptr` hoặc một con trỏ chưa khởi tạo (wild pointer) là Hành vi không xác định (Undefined Behavior — UB)**, thường dẫn tới lỗi phân đoạn bộ nhớ (Segmentation Fault) làm hệ điều hành chấm dứt tiến trình ngay lập tức.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 12: §12.7 Introduction to pointers, §12.8 Null pointers (`nullptr`), and Pointers vs References comparison',
              relationship: 'primary',
            },
            {
              sourceId: 'dive-into-systems',
              locator: 'Chapter 2: §2.1 Pointer Basics and Null Pointer Dereference',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'cppm-apa-const-pointers-aliasing-arithmetic',
          title: 'Tính đúng đắn của hằng với con trỏ (const T* vs T* const), hiện tượng Bí danh (Aliasing) và số học con trỏ trên mảng liên tiếp',
          level: 'core',
          paragraphs: [
            'Khi kết hợp từ khóa `const` với con trỏ, vị trí của `const` so với dấu sao `*` quyết định thành phần nào bị khóa không cho sửa: (1) **Con trỏ tới hằng (`const T* p`)** không cho phép sửa giá trị của đối tượng đích thông qua `*p`, nhưng bản thân biến con trỏ `p` vẫn có thể đổi sang trỏ tới địa chỉ khác; (2) **Con trỏ hằng (`T* const p`)** khóa chặt địa chỉ lưu trong `p` (không thể gán `p = &other`), nhưng vẫn cho phép sửa đối tượng đích qua `*p`; và (3) **`const T* const p`** khóa cả hai. Quy tắc đọc từ phải sang trái giúp người học không bao giờ nhầm lẫn chữ ký hàm nhận con trỏ.',
            'Tiểu mục cũng phân tích sâu hiện tượng **Bí danh (Aliasing)**: tình huống xảy ra khi hai hoặc nhiều tên biến, tham chiếu hoặc con trỏ cùng trỏ tới một vùng nhớ vật lý (hoặc các vùng nhớ chồng lấn nhau). Khi có aliasing, một phép ghi qua con trỏ `*p = 0` sẽ âm thầm làm thay đổi giá trị đọc được từ `*q` hoặc biến `x`, có thể làm hỏng thuật toán nếu hàm giả định hai tham số đầu vào là độc lập (ví dụ hàm nhân ma trận `nhan(A, B, A)` vừa đọc từ `A` vừa ghi đè kết quả vào chính `A`, hoặc phép gán tự thân `x = x`). Cuối cùng, tiểu mục giải thích **số học con trỏ (pointer arithmetic)**: khi `p` trỏ vào một phần tử của mảng liên tiếp các đối tượng kiểu `T`, biểu thức `p + k` không cộng thêm $k$ byte mà tiến địa chỉ lên $k \\times \\operatorname{sizeof}(T)$ byte để trỏ đúng vào phần tử thứ $k$ tiếp theo, đồng thời chỉ rõ rằng số học con trỏ chỉ hợp lệ trong phạm vi cùng một mảng liên tiếp (kể cả vị trí sát sau phần tử cuối `one-past-the-end`, nhưng không được giải tham chiếu vị trí sát sau đó).',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 12 (§12.9 Pointers and const) & Chapter 17 (§17.8–17.9 Pointer arithmetic and subscripting)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'cppm-lifetime-stack-heap',
      title: 'Chương 2 — Thời gian lưu trữ (Storage Duration), phân vùng Stack/Heap và bốn lỗi bộ nhớ kinh điển',
      overview: [
        'Chương này làm rõ vòng đời của một đối tượng từ lúc được cấp vùng nhớ, khởi tạo, tồn tại đến lúc bị hủy và thu hồi vùng nhớ, giải thích sự khác biệt cơ chế giữa bộ nhớ tự động trên ngăn xếp (Stack) với bộ nhớ cấp phát động trên vùng nhớ tự do (Heap), và cách nhận diện các lỗi bộ nhớ nghiêm trọng.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 7 (§7.4–7.11 Scope, Duration, and Linkage), Chapter 19 (§19.1–19.3 Dynamic Memory Allocation), & Chapter 20 (§20.2 The Stack and the Heap)',
          relationship: 'primary',
        },
        {
          sourceId: 'dive-into-systems',
          locator: 'Chapter 2: §2.4–2.6 Dynamic Memory Allocation, Stack vs Heap, and Memory Bugs',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'cppm-lsh-storage-duration-stack-vs-heap',
          title: 'Ba thời gian lưu trữ chuẩn (Automatic, Static, Dynamic) và cơ chế phân vùng Stack so với Heap (Free Store)',
          level: 'core',
          paragraphs: [
            'Chuẩn ISO C++ phân biệt rạch ròi giữa **Phạm vi tên gọi (Scope)** — một thuộc tính tại thời điểm biên dịch cho biết tên định danh có thể được nhìn thấy ở vùng mã nguồn nào — với **Thời gian lưu trữ (Storage Duration)** — thuộc tính tại thời điểm chạy quyết định khi nào vùng nhớ của đối tượng được tạo ra và thu hồi: (1) **Lưu trữ tự động (Automatic storage duration)**: áp dụng cho các biến cục bộ và tham số hàm; chúng được cấp phát tự động khi luồng thực thi đi vào khối lệnh và bị hủy tự động theo đúng thứ tự ngược lại (LIFO) ngay khi thoát khỏi khối lệnh; (2) **Lưu trữ tĩnh (Static storage duration)**: áp dụng cho biến toàn cục và biến `static`; được cấp phát một lần duy nhất và tồn tại xuyên suốt thời gian chạy của chương trình; và (3) **Lưu trữ động (Dynamic storage duration)**: đối tượng được tạo và hủy theo yêu cầu tường minh tại thời điểm chạy, hoàn toàn tách rời khỏi phạm vi khối nơi nó được tạo.',
            'Trên các hệ điều hành hiện đại, thời gian lưu trữ tự động và lưu trữ động được hiện thực hóa trên hai phân vùng bộ nhớ có đặc tính đối lập nhau: **Ngăn xếp (The Call Stack)** quản lý các biến tự động bằng cách chỉ dịch chuyển một thanh ghi con trỏ ngăn xếp (stack pointer) khi vào/ra hàm nên tốc độ cấp phát gần như tức thời ($O(1)$ rất nhỏ) và vùng nhớ nằm liền kề nhau rất thân thiện với bộ nhớ đệm CPU (cache), nhưng tổng dung lượng Stack bị giới hạn chặt (thường chỉ vài megabyte — đệ quy quá sâu hoặc khai báo mảng cục bộ khổng lồ sẽ gây **Tràn ngăn xếp / Stack Overflow**). Ngược lại, **Vùng nhớ tự do (The Heap / Free Store)** là bể bộ nhớ lớn hàng gigabyte cho phép cấp phát những khối dữ liệu có kích thước chỉ biết lúc chạy hoặc cần sống lâu hơn hàm tạo ra nó, đổi lại chi phí tìm kiếm/quản lý khối trống của bộ cấp phát (allocator) chậm hơn và truy cập gián tiếp qua con trỏ.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 20: §20.2 The stack and the heap & Chapter 19: §19.1 Dynamic memory allocation with new and delete',
              relationship: 'primary',
            },
            {
              sourceId: 'dive-into-systems',
              locator: 'Chapter 2: §2.4 Dynamic Memory Allocation and Stack vs. Heap Memory Layout',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'cppm-lsh-dynamic-allocation-new-delete',
          title: 'Cơ chế cấp phát động thủ công (new / delete) và vì sao quản lý thủ công dễ thất bại khi có nhiều nhánh thoát',
          level: 'core',
          paragraphs: [
            'Để hiểu cách `std::vector`, `std::string` hay các cấu trúc dữ liệu dạng nút (danh sách liên kết, cây nhị phân ở Môn CS-15) xin thêm bộ nhớ từ hệ thống, người học cần nắm cơ chế của cặp toán tử cấp phát động cấp thấp trong C++: biểu thức **`new T(...)`** thực hiện hai bước liên tiếp — xin bộ cấp phát một khối nhớ đủ kích thước trên Heap, sau đó gọi hàm tạo (constructor) để khởi tạo đối tượng kiểu `T` tại đó và trả về con trỏ `T*` giữ địa chỉ khối nhớ; ngược lại, biểu thức **`delete p`** gọi hàm hủy (destructor) của đối tượng tại `*p` rồi trả khối nhớ đó về cho Heap để tái sử dụng (đối với mảng cấp phát bằng `new T[n]`, bắt buộc phải giải phóng bằng `delete[] p`; trộn lẫn `new[]` với `delete` đơn lẻ là hành vi không xác định).',
            'Tiểu mục phân tích vì sao việc bắt lập trình viên tự viết từng cặp `new` và `delete` bằng tay trong mã ứng dụng lại rất mong manh: chỉ cần giữa dòng `new` và dòng `delete` ở cuối hàm có một câu lệnh `return` sớm khi gặp điều kiện đặc biệt, một lệnh `break`, hoặc một ngoại lệ (exception) được ném ra từ hàm con, luồng thực thi sẽ nhảy qua mặt dòng `delete` và làm vùng nhớ đó không bao giờ được thu hồi. Nhận thức về điểm yếu cấu trúc này là động lực trực tiếp dẫn tới nguyên lý RAII ở Chương 3.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 19: §19.1 Dynamic memory allocation with new and delete & §19.2 Dynamically allocating arrays',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'cppm-lsh-four-classic-memory-hazards',
          title: 'Bốn hiểm họa bộ nhớ kinh điển: Dangling Pointer (Use-After-Free), Memory Leak, Double Free và Buffer Overflow',
          level: 'core',
          paragraphs: [
            'Tiểu mục này giải phẫu cơ chế nguyên nhân và hậu quả của bốn loại lỗi bộ nhớ kinh điển trong C/C++: (1) **Con trỏ treo / Tham chiếu treo (Dangling Pointer / Dangling Reference & Use-After-Free)**: xảy ra khi một con trỏ hoặc tham chiếu vẫn giữ địa chỉ của một đối tượng đã kết thúc thời gian sống — chẳng hạn một hàm trả về địa chỉ hoặc tham chiếu tới biến cục bộ trên Stack (biến này bị hủy ngay khi hàm `return`), hoặc truy cập `*p` sau khi đã gọi `delete p`. Nguy hiểm nhất của lỗi này là vùng nhớ vừa giải phóng có thể chưa bị ghi đè ngay nên chương trình trông như vẫn chạy đúng trong vài bước trước khi vùng nhớ đó được cấp cho biến khác và gây hỏng dữ liệu ngẫu nhiên; (2) **Rò rỉ bộ nhớ (Memory Leak)**: xảy ra khi con trỏ cuối cùng giữ địa chỉ một khối nhớ trên Heap bị gán đè sang địa chỉ khác hoặc ra khỏi phạm vi mà chưa `delete`, khiến khối nhớ đó bị bỏ quên vĩnh viễn cho tới khi tiến trình kết thúc.',
            '(3) **Giải phóng kép (Double Free)**: xảy ra khi hai con trỏ cùng trỏ vào một khối nhớ trên Heap (do sao chép địa chỉ nông — shallow copy) và cả hai đều gọi `delete` lên cùng địa chỉ đó, làm hỏng cấu trúc sổ cái quản lý của bộ cấp phát Heap; và (4) **Tràn vùng đệm (Buffer Overflow / Out-of-bounds Read & Write)**: đọc hoặc ghi vượt quá biên của mảng tĩnh hoặc khối nhớ động, làm ghi đè lên các biến lân cận hoặc thông tin điều khiển trên Stack/Heap — đây đồng thời là lỗ hổng bảo mật nghiêm trọng nhất trong lịch sử phần mềm hệ thống.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 12 (§12.12 Return by reference and dangling references) & Chapter 19 (§19.1 Dangling pointers and memory leaks)',
              relationship: 'primary',
            },
            {
              sourceId: 'dive-into-systems',
              locator: 'Chapter 2: §3.3 Debugging Memory with Valgrind (Use-after-free, leaks, double free, out-of-bounds)',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'cppm-raii-ownership-move',
      title: 'Chương 3 — Nguyên lý RAII, phân loại giá trị (lvalue/rvalue), Ngữ nghĩa di chuyển (Move Semantics) và Con trỏ thông minh',
      overview: [
        'Chương này trình bày giải pháp căn cơ của C++ hiện đại để vừa giữ được hiệu năng điều khiển bộ nhớ trực tiếp vừa loại bỏ lỗi quên giải phóng tài nguyên: gói tài nguyên vào đối tượng có thời gian sống tự động (RAII), chuyển giao tài nguyên bằng move semantics và thể hiện rõ quyền sở hữu trong hệ thống kiểu bằng `std::unique_ptr` / `std::shared_ptr`.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 12 (§12.2 Value categories: lvalues and rvalues) & Chapter 22 (§22.1–22.7 Move Semantics and Smart Pointers)',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'cppm-rom-raii-deterministic-destruction',
          title: 'Nguyên lý RAII (Resource Acquisition Is Initialization) và cơ chế thu hồi tài nguyên tất định qua Hàm hủy (Destructor)',
          level: 'core',
          paragraphs: [
            'Ý tưởng trung tâm của **RAII (Resource Acquisition Is Initialization — Gắn việc chiếm giữ tài nguyên với việc khởi tạo đối tượng)** dựa trên một bảo đảm tuyệt đối của chuẩn C++: mọi đối tượng có **thời gian lưu trữ tự động (trên Stack)** đều chắc chắn được gọi **hàm hủy (destructor)** ngay khi luồng thực thi rời khỏi phạm vi khối chứa nó — bất kể hàm kết thúc ở cuối khối, thoát sớm qua `return` ở giữa hàm, hay bị tháo ngăn xếp (stack unwinding) do ngoại lệ. Do đó, thay vì cầm trực tiếp con trỏ thô tới bộ nhớ Heap (hoặc tệp đang mở, ổ cắm mạng, khóa mutex), ta bọc con trỏ đó làm thành viên bên trong một đối tượng quản lý nằm trên Stack: hàm tạo (constructor) xin cấp phát tài nguyên, còn hàm hủy (destructor) tự động thực hiện `delete` hoặc đóng tệp.',
            'Chính nguyên lý RAII giải thích vì sao ngay từ Môn CS-04 người học có thể dùng `std::vector<int>` và `std::string` để chứa hàng triệu phần tử trên Heap mà không hề phải viết một dòng `delete` nào: bản thân biến `v` là một đối tượng nhỏ trên Stack (gồm con trỏ trỏ vào mảng trên Heap, số phần tử hiện có `size` và dung lượng đã cấp `capacity`), và khi `v` ra khỏi hàm, hàm hủy `~vector()` tự động trả toàn bộ mảng trên Heap về cho hệ thống.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 15 (§15.4 Introduction to destructors) & Chapter 22 (§22.1 Introduction to smart pointers and move semantics — RAII)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'cppm-rom-lvalue-rvalue-move-semantics',
          title: 'Phân loại biểu thức lvalue / rvalue, tham chiếu rvalue (T&&) và cơ chế Ngữ nghĩa di chuyển (Move Semantics vs Copy)',
          level: 'core',
          paragraphs: [
            'Phân loại giá trị (value category) mô tả cách một biểu thức tham gia thao tác với đối tượng, không phải thời gian sống của đối tượng đó. Tiểu mục phân biệt lvalue (biểu thức xác định danh tính đối tượng, như tên biến v), prvalue (tính một giá trị hoặc khởi tạo đối tượng kết quả, như 42) và xvalue (xác định đối tượng có tài nguyên có thể được tái sử dụng). Rvalue bao gồm prvalue và xvalue. Biểu thức std::move(v) là xvalue chỉ tới chính v: phép ép kiểu này không tạo bản sao, không tự chuyển tài nguyên và không hủy v; v vẫn sống tới cuối phạm vi của nó. Người học đối chiếu phân loại biểu thức với kiểu dữ liệu và lifetime để tránh coi mọi rvalue là đối tượng tạm sắp bị hủy.',
            'Ngữ nghĩa di chuyển được thực hiện bởi move constructor hoặc move assignment được chọn qua overload resolution; std::move chỉ tạo điều kiện cho việc chọn thao tác đó. Với lớp sở hữu một vùng đệm động, một cách cài đặt là chuyển quyền sở hữu con trỏ rồi đặt nguồn vào trạng thái hợp lệ không còn sở hữu vùng đệm. Trường hợp này có thể tránh sao chép từng phần tử, nhưng không phải mọi move đều có chi phí O(1), cũng không phải mọi nguồn sau move đều rỗng hoặc null. Với kiểu thư viện chuẩn, bảo đảm chung khi không có quy định riêng là trạng thái hợp lệ nhưng không xác định cụ thể; chỉ gọi thao tác mà tiền điều kiện còn được đáp ứng. Sao chép vector có chi phí theo số phần tử; phép gán có thể tái sử dụng dung lượng sẵn có thay vì luôn cấp phát mới. Tiểu mục giới hạn ở nguyên lý sở hữu, trường hợp buffer điển hình và cách tra hợp đồng của từng kiểu.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 12 (§12.2 Value categories: lvalues and rvalues) & Chapter 22 (§22.2 R-value references, §22.3 Move constructors and move assignment, §22.4 std::move)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'cppm-rom-smart-pointers-ownership-rules',
          title: 'Mô hình quyền sở hữu bộ nhớ với std::unique_ptr, std::shared_ptr, std::weak_ptr và Quy tắc Số Không / Số Năm (Rule of Zero / Five)',
          level: 'core',
          paragraphs: [
            'Để biểu diễn rõ ràng "ai chịu trách nhiệm giải phóng đối tượng trên Heap" ngay trong chữ ký kiểu dữ liệu, thư viện chuẩn `<memory>` cung cấp các **con trỏ thông minh (smart pointers)** dựa trên RAII: (1) **`std::unique_ptr<T>` (tạo bằng `std::make_unique<T>(...)`)** thể hiện **quyền sở hữu độc quyền (exclusive ownership)**: tại mọi thời điểm chỉ có duy nhất một `unique_ptr` sở hữu đối tượng đích; nó cấm hoàn toàn phép sao chép (copy bị xóa) và chỉ cho phép chuyển giao quyền sở hữu bằng phép di chuyển (`std::move`), đồng thời có kích thước và tốc độ tương đương một con trỏ thô (`zero-overhead abstraction`); (2) **`std::shared_ptr<T>` (tạo bằng `std::make_shared<T>(...)`)** thể hiện **quyền sở hữu chia sẻ (shared ownership)** thông qua một khối điều khiển đếm số lượng tham chiếu (reference counting): đối tượng đích chỉ bị hủy khi `shared_ptr` cuối cùng trỏ tới nó bị hủy; và (3) **`std::weak_ptr<T>`** là con trỏ quan sát không tăng bộ đếm sở hữu, dùng để phá vỡ **chu trình tham chiếu vòng (reference cycle)** giữa hai `shared_ptr` trỏ lẫn nhau gây rò rỉ bộ nhớ. Những hàm chỉ mượn đối tượng để đọc/ghi tạm thời mà không can dự vào quyền sở hữu thì vẫn nhận tham chiếu `T&` / `const T&` hoặc con trỏ thô `T*` như bình thường.',
            'Từ sự phân biệt giữa lớp ứng dụng và lớp quản lý tài nguyên, tiểu mục đúc kết **Quy tắc Số Không (Rule of Zero)** và **Quy tắc Số Năm (Rule of Five)**: các lớp nghiệp vụ thông thường chỉ nên ghép từ các thành viên đã tự quản lý bộ nhớ (`std::string`, `std::vector`, `std::unique_ptr`) để **không phải tự viết** bất kỳ hàm hủy hay hàm sao chép/di chuyển nào (Rule of Zero); ngược lại, nếu viết một lớp cấu trúc dữ liệu cấp thấp trực tiếp nắm giữ tài nguyên thô và phải tự định nghĩa một trong năm hàm đặc biệt (Destructor, Copy Constructor, Copy Assignment, Move Constructor, Move Assignment), thì phải định nghĩa hoặc chỉ định rõ cả năm hàm đó (Rule of Five) để tránh lỗi sao chép nông và giải phóng kép.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 22: §22.5 std::unique_ptr, §22.6 std::shared_ptr, and §22.7 Circular dependency issues with std::shared_ptr, and std::weak_ptr',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
    {
      id: 'cppm-templates-containers-sanitizers',
      title: 'Chương 4 — Khuôn mẫu tổng quát (Templates), mất hiệu lực Iterator của Container và công cụ Sanitizer (ASan/UBSan)',
      overview: [
        'Chương cuối hoàn thiện nền tảng C++ cốt lõi trước khi bước sang Cấu trúc dữ liệu (`CS-15`): cách trình biên dịch sinh mã cho các hàm và lớp khuôn mẫu `template<typename T>`, điều gì xảy ra trong bộ nhớ khi `std::vector` đầy và phải cấp phát lại, sự khác biệt giữa chuẩn ngôn ngữ với ABI, và cách bật AddressSanitizer / UndefinedBehaviorSanitizer để bắt lỗi bộ nhớ tức thì.',
      ],
      sources: [
        {
          sourceId: 'learncpp',
          locator: 'Chapter 11 (§11.6–11.8 Function Templates), Chapter 16 (§16.9–16.10 std::vector capacity and reallocation), & Chapter 26 (§26.1 Template classes)',
          relationship: 'primary',
        },
        {
          sourceId: 'mit-missing-semester',
          locator: 'Lecture 7: Debugging and Profiling — Sanitizers (`-fsanitize=address,undefined`) and Valgrind',
          relationship: 'primary',
        },
      ],
      topics: [
        {
          id: 'cppm-tcs-function-class-templates',
          title: 'Khuôn mẫu hàm và lớp (Function & Class Templates), cơ chế khởi tạo khuôn mẫu (Template Instantiation) và lý do đặt trong Header',
          level: 'core',
          paragraphs: [
            'Khi viết một thuật toán hoán đổi hai giá trị `swap(a, b)` hoặc một cấu trúc mảng động, logic các bước hoàn toàn giống nhau cho dù phần tử là `int`, `double` hay `std::string`. Thay vì sao chép mã nguồn cho từng kiểu, C++ cung cấp **Khuôn mẫu (Templates)** với cú pháp `template <typename T>`. Tiểu mục này làm rõ rằng bản thân một khuôn mẫu **chưa phải là mã máy thực thi**, mà là một bản thiết kế (blueprint): chỉ khi trình biên dịch gặp lời gọi cụ thể như `maxVal<int>(3, 5)` hoặc khai báo `MyVector<double>`, nó mới thực hiện **khởi tạo khuôn mẫu (template instantiation)** — tự động thay thế `T` bằng kiểu cụ thể để sinh ra một hàm hoặc lớp thực sự rồi kiểm tra kiểu trên bản sinh ra đó.',
            'Hiểu cơ chế khởi tạo khuôn mẫu tại thời điểm biên dịch giải thích trực tiếp một quy tắc kỹ thuật mà người mới hay vấp phải khi tách tệp: khác với hàm thông thường (khai báo ở `.h`, định nghĩa ở `.cpp`), **toàn bộ định nghĩa của khuôn mẫu hàm và lớp thông thường bắt buộc phải nằm trọn trong tệp tiêu đề (`.h` / `.hpp`)**. Lý do là khi trình biên dịch dịch một tệp `main.cpp` có dùng `MyVector<int>`, nó phải nhìn thấy ngay toàn bộ thân hàm của `MyVector<T>` tại chỗ để sinh mã cho kiểu `int`; nếu giấu thân hàm trong `my_vector.cpp`, đơn vị dịch `main.cpp` không thể tự sinh mã và trình liên kết sẽ báo lỗi `undefined reference`.',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 11 (§11.6 Function templates, §11.7 Function template instantiation) & Chapter 26 (§26.1 Template classes and header organization)',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'cppm-tcs-vector-reallocation-iterator-invalidation',
          title: 'Bố cục bộ nhớ của std::vector (size vs capacity), cơ chế cấp phát lại (reallocation) và lỗi mất hiệu lực con trỏ/iterator',
          level: 'core',
          paragraphs: [
            'Một đối tượng `std::vector<T>` duy trì một mảng liên tiếp trên Heap thông qua hai đại lượng tách biệt: **`size()`** là số phần tử thực tế đang chứa, còn **`capacity()`** là tổng số ô nhớ phần tử mà khối Heap hiện tại có thể chứa trước khi đầy (luôn có $\\text{size} \\le \\text{capacity}$). Chừng nào $\\text{size} < \\text{capacity}$, thao tác `v.push_back(x)` chỉ đặt phần tử mới vào ô trống kế tiếp trong khối Heap sẵn có với chi phí hằng số $O(1)$. Nhưng ngay tại thời điểm $\\text{size} == \\text{capacity}$, khối nhớ cũ đã hết chỗ; để đảm bảo các phần tử vẫn nằm liên tiếp trong bộ nhớ, `std::vector` bắt buộc phải thực hiện **cấp phát lại (reallocation)**: xin một khối nhớ **hoàn toàn mới** ở địa chỉ khác trên Heap có dung lượng lớn gấp hệ số nhân (thường gấp $2$ lần hoặc $1.5$ lần), di chuyển/sao chép toàn bộ các phần tử từ khối cũ sang khối mới, rồi **giải phóng (`delete`) khối nhớ cũ**.',
            'Cơ chế cấp phát lại này dẫn tới một cạm bẫy cực kỳ quan trọng gọi là **Mất hiệu lực con trỏ, tham chiếu và bộ lặp (Pointer / Reference / Iterator Invalidation)**: nếu trước khi gọi `v.push_back(...)`, chương trình đang giữ một con trỏ `int* p = &v[0]`, một tham chiếu `int& ref = v[0]` hoặc một `iterator` trỏ vào phần tử của `v`, thì ngay sau cú `push_back` gây vượt `capacity`, khối nhớ cũ đã bị giải phóng và mọi con trỏ/tham chiếu/`iterator` cũ lập tức biến thành **con trỏ treo (dangling)** trỏ vào vùng nhớ đã chết. Nắm vững quy tắc này giúp lập trình viên không bao giờ vừa lưu địa chỉ phần tử của `vector` vừa thêm phần tử mới vào nó (hoặc phải gọi `v.reserve(N)` cấp đủ dung lượng trước).',
          ],
          sources: [
            {
              sourceId: 'learncpp',
              locator: 'Chapter 16: §16.9–16.10 std::vector length vs capacity, reallocation, and reference/iterator invalidation',
              relationship: 'primary',
            },
          ],
        },
        {
          id: 'cppm-tcs-iso-standard-abi-sanitizers',
          title: 'Phân biệt Chuẩn ngôn ngữ ISO C++ với ABI và tự động phát hiện lỗi bộ nhớ bằng AddressSanitizer (ASan) / UBSan',
          level: 'core',
          paragraphs: [
            'Để suy luận chính xác về hành vi chương trình C++, người học cần phân biệt hai tầng quy tắc: **Chuẩn ngôn ngữ ISO C++ (Language Standard)** định nghĩa máy trừu tượng, quy tắc phạm vi, thời gian sống và phân loại các hành vi thành xác định (well-defined), phụ thuộc cài đặt (implementation-defined như `sizeof(int)`), không chỉ định thứ tự (unspecified như thứ tự tính các đối số trong một số biểu thức) và **Hành vi không xác định (Undefined Behavior — UB)**; trong khi đó, **Giao diện nhị phân ứng dụng (Application Binary Interface — ABI)** (như Itanium C++ ABI trên Linux/macOS hay MSVC ABI trên Windows) là quy ước cụ thể của trình biên dịch và hệ điều hành về cách truyền tham số qua thanh ghi CPU, cách mã hóa tên hàm (name mangling) và cách sắp xếp byte trong đối tượng. Trình biên dịch có quyền tối ưu hóa mã máy dựa trên giả định rằng chương trình không bao giờ rơi vào UB; vì vậy một chương trình có UB dù hôm nay chạy "trông có vẻ đúng" trên máy này vẫn có thể sập hoặc cho kết quả sai hoàn toàn khi bật cờ tối ưu hóa `-O2` hoặc đổi phiên bản trình biên dịch.',
            'Vì các lỗi UB và lỗi bộ nhớ (như đọc vượt biên mảng 1 phần tử hoặc dùng vùng nhớ vừa `delete`) đôi khi không làm chương trình sập ngay lập tức, việc chỉ chạy thử thông thường không đủ để phát hiện chúng. Tiểu mục này trang bị cách sử dụng các công cụ kiểm chứng động hiện đại tích hợp sẵn trong GCC và Clang là **AddressSanitizer (`ASan`)** và **UndefinedBehaviorSanitizer (`UBSan`)** thông qua cờ biên dịch `-fsanitize=address,undefined -g -O1`: trình biên dịch sẽ tự động chèn các vùng đệm canh gác (redzones) và mã kiểm tra quanh mọi thao tác truy cập bộ nhớ/số học, giúp chương trình dừng lại ngay tại dòng lệnh vi phạm đầu tiên và in ra báo cáo chi tiết (kèm call stack vị trí cấp phát, vị trí giải phóng và vị trí truy cập trái phép) cho các lỗi tràn vùng đệm Stack/Heap, use-after-free, use-after-return, double free, memory leak và tràn số nguyên có dấu.',
          ],
          sources: [
            {
              sourceId: 'mit-missing-semester',
              locator: 'Lecture 7: Debugging and Profiling — Dynamic analysis with AddressSanitizer, UndefinedBehaviorSanitizer, and Valgrind',
              relationship: 'primary',
            },
            {
              sourceId: 'dive-into-systems',
              locator: 'Chapter 2: §3.3 Debugging Memory with Valgrind with Valgrind and Sanitizers',
              relationship: 'primary',
            },
          ],
        },
      ],
    },
  ],
};
