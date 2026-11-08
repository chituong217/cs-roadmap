// Dữ liệu node bản đồ mới (bản mẫu 3 node). ID riêng "n-*", không dùng lại ID nhiệm vụ cũ.
// Mỗi node gộp nhiều chủ đề nhỏ của giáo trình 50 môn (trường `covers` ghi lại các topic đã gộp)
// để kiểm tra được không mất phạm vi. `scope` là các đoạn văn mô tả, KHÔNG phải danh sách việc cần làm.

export const MAP_GROUPS = [
  { id: 'g-lap-trinh', title: 'Lập trình và bộ nhớ', accent: '#23654f' },
  { id: 'g-cau-truc', title: 'Cấu trúc dữ liệu', accent: '#3f5f77' },
  { id: 'g-toan', title: 'Toán rời rạc', accent: '#866716' },
];

export const MAP_LEVELS = { core: 'Nền tảng', extension: 'Mở rộng' };

export const MAP_NODES = [
  {
    id: 'n-con-tro',
    title: 'Con trỏ',
    groupId: 'g-lap-trinh',
    courseId: 'cpp-memory-model',
    stage: 'Địa chỉ, con trỏ và vòng đời bộ nhớ',
    order: 1,
    level: 'core',
    needs: [],
    needsText: ['Biến, kiểu dữ liệu, hàm và mảng trong C++ ở mức cơ bản.'],
    scope: [
      'Bộ nhớ được chia thành các ô đánh địa chỉ theo byte; mỗi đối tượng chiếm một vùng liên tiếp có kích thước (sizeof) và yêu cầu căn chỉnh. Con trỏ là một đối tượng lưu địa chỉ của đối tượng khác, nên kiểu T* quyết định cách đọc vùng nhớ mà nó trỏ tới. Cần phân biệt khai báo, khởi tạo và gán; toán tử lấy địa chỉ (&) và giải tham chiếu (*) là hai chiều ngược nhau; con trỏ rỗng (nullptr) biểu thị "không trỏ tới đối tượng nào" và không được giải tham chiếu.',
      'Số học con trỏ cộng trừ theo đơn vị kích thước kiểu được trỏ, nên gắn chặt với mảng: tên mảng thường phân rã thành con trỏ tới phần tử đầu và a[i] tương đương *(a+i), nhưng mảng không phải con trỏ và mất thông tin kích thước khi truyền vào hàm. Truyền con trỏ vào hàm cho phép sửa đối tượng của nơi gọi hoặc tránh sao chép, khác với truyền giá trị và tham chiếu; const đặt trước hay sau dấu * cho hai ý nghĩa khác nhau.',
      'Vùng nhớ động được cấp bằng new và trả lại bằng delete (new[]/delete[] cho mảng), còn biến cục bộ nằm trên stack và hết hiệu lực khi hàm kết thúc. Giới hạn quan trọng là các lỗi bộ nhớ kinh điển: con trỏ treo (dùng sau khi giải phóng hoặc trả về địa chỉ biến cục bộ), rò rỉ, giải phóng hai lần và truy cập ngoài biên; các lỗi này gây hành vi không xác định chứ không luôn báo lỗi. Con trỏ thông minh và RAII là lời giải ở node sau.',
    ],
    covers: [
      'cppm-apa-memory-addresses-layout',
      'cppm-apa-pointers-dereference-nullptr',
      'cppm-apa-const-pointers-aliasing-arithmetic',
      'cppm-lsh-storage-duration-stack-vs-heap',
      'cppm-lsh-dynamic-allocation-new-delete',
      'cppm-lsh-four-classic-memory-hazards',
    ],
    sources: [
      { sourceId: 'learncpp', locator: 'Chương về con trỏ, mảng, cấp phát động' },
      { sourceId: 'dive-into-systems', locator: 'Phần C: con trỏ và bộ nhớ' },
    ],
  },
  {
    id: 'n-dslk-don',
    title: 'Danh sách liên kết đơn',
    groupId: 'g-cau-truc',
    courseId: 'data-structures',
    stage: 'ADT, mảng động và danh sách',
    order: 2,
    level: 'core',
    needs: ['n-con-tro'],
    needsText: ['Khái niệm độ phức tạp O(n) ở mức nhận biết.'],
    scope: [
      'Danh sách liên kết đơn lưu dãy phần tử bằng các nút rời rạc, mỗi nút giữ một giá trị và con trỏ tới nút kế tiếp; cấu trúc được xác định bởi con trỏ đầu (và tùy chọn con trỏ đuôi). Khác với mảng, các nút không nằm liên tiếp trong bộ nhớ, nên truy cập theo chỉ số phải duyệt từ đầu và tốn O(n), trong khi chèn hoặc xóa ngay tại vị trí đã biết chỉ cần đổi vài liên kết và tốn O(1).',
      'Các thao tác cần phân biệt gồm chèn đầu, chèn sau một nút, xóa đầu, xóa nút sau một nút và duyệt; xóa hoặc chèn trước một nút bất kỳ cần nút đứng trước nó nên tốn O(n) ở danh sách đơn. Các trường hợp biên (danh sách rỗng, một phần tử, thao tác ở đầu hoặc đuôi) và thứ tự cập nhật liên kết là nguồn lỗi chính, đi cùng việc giải phóng nút để không rò rỉ.',
      'Đánh đổi so với mảng động là tính cục bộ bộ nhớ: duyệt mảng thân thiện với bộ nhớ đệm, còn duyệt danh sách phải nhảy theo con trỏ nên chậm hơn trong thực tế dù cùng O(n). Danh sách đôi thêm con trỏ trước để tháo một nút đã biết trong O(1); danh sách đơn là nền cho ngăn xếp, hàng đợi và bảng băm nối chuỗi.',
    ],
    covers: ['ds-linked-list-locality'],
    sources: [{ sourceId: 'open-data-structures', locator: '§3.1 SLList; §3.2 DLList' }],
  },
  {
    id: 'n-he-thuc-de-quy',
    title: 'Hệ thức đệ quy',
    groupId: 'g-toan',
    courseId: 'discrete-math',
    stage: 'Hệ thức đệ quy và hàm sinh',
    order: 3,
    level: 'core',
    needs: [],
    needsText: ['Quy nạp toán học và ký hiệu tiệm cận O, Θ.', 'Số phức ở mức biết dạng a+bi (chỉ cho trường hợp nghiệm phức).'],
    scope: [
      'Hệ thức đệ quy mô tả một dãy bằng các số hạng đứng trước cùng điều kiện đầu; bậc của hệ thức là số số hạng trước mà nó dùng. Việc đầu tiên là mô hình hóa bài toán (số lần gọi hàm, số cách đếm, độ phức tạp thuật toán) thành hệ thức, rồi tìm công thức tường minh hoặc ước lượng tăng trưởng.',
      'Có hai hướng giải: khai triển lặp rồi chứng minh bằng quy nạp, và với hệ thức tuyến tính hệ số hằng thì dùng phương trình đặc trưng. Nghiệm đặc trưng phân biệt cho tổng các lũy thừa, nghiệm bội nhân thêm đa thức theo n, nghiệm phức liên hợp cho dạng dao động; với phần không thuần nhất cần cộng một nghiệm riêng tìm bằng hệ số bất định rồi dùng điều kiện đầu để xác định hằng số.',
      'Giới hạn quan trọng: phương pháp đặc trưng chỉ áp dụng cho hệ thức tuyến tính hệ số hằng, không áp dụng trực tiếp cho truy hồi chia để trị như T(n)=2T(n/2)+n, vốn cần cây đệ quy hoặc định lý Master. Hàm sinh là công cụ giải tổng quát hơn và thuộc node sau.',
    ],
    covers: [
      'dm-recurrences-modeling',
      'dm-recurrences-iteration-induction',
      'dm-recurrences-linear-homogeneous-distinct',
      'dm-recurrences-repeated-complex-roots',
      'dm-recurrences-nonhomogeneous-particular',
      'dm-recurrences-limits-divide-conquer-bridge',
    ],
    sources: [
      { sourceId: 'mit-6042j-2015', locator: 'Chương về truy hồi' },
      { sourceId: 'dmoi-3e', locator: 'Chương 2.4–2.5 (dãy và truy hồi)' },
    ],
  },
];
