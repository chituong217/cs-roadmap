// Hồ sơ người học dùng để tô vàng các node có thể đi nhanh hoặc học sau.
// Căn cứ: những gì người học đã nói (đã học Cơ sở lập trình C++ và DSA nhưng quên nhiều; kỳ này đang học OOP,
// Mạng máy tính, Xác suất thống kê) và mục tiêu (vào Khoa học máy tính, thành người thị trường cần).
// Đổi hồ sơ chỉ cần sửa file này rồi chạy: node scripts/build-map-data.mjs
export const FAST_COURSES = {
  'intro-programming': 'Bạn đã học Cơ sở lập trình (C++): chỉ cần lướt qua và tự kiểm tra, chỗ nào vướng thì mới học lại.',
  'data-structures': 'Bạn đã học Cấu trúc dữ liệu & giải thuật nhưng quên nhiều: ôn nhanh để lấy lại, không học lại từ đầu.',
  'object-oriented-programming': 'Bạn đang học OOP ở trường: đi theo lịch của lớp, dùng node này để đối chiếu.',
  'computer-networks': 'Bạn đang học Mạng máy tính ở trường: đi theo lịch của lớp, dùng node này để đối chiếu.',
  'probability': 'Bạn đang học Xác suất thống kê ở trường: đi theo lịch của lớp, dùng node này để đối chiếu.',
  'statistics-inference': 'Bạn đang học Xác suất thống kê ở trường: đi theo lịch của lớp, dùng node này để đối chiếu.',
};
export const LATER_COURSES = {
  'computer-graphics': 'Đồ họa là hướng chuyên biệt, chưa cần trước khi chọn chuyên ngành.',
  'spec-systems-os': 'Môn chuyên sâu: học khi đã chọn hướng hệ thống.',
  'spec-database-storage': 'Môn chuyên sâu: học khi đã chọn hướng cơ sở dữ liệu.',
  'spec-compilers-runtime': 'Môn chuyên sâu: học khi đã chọn hướng ngôn ngữ và trình biên dịch.',
  'spec-distributed-systems-advanced': 'Môn chuyên sâu: học khi đã chọn hướng hệ phân tán.',
  'spec-computer-vision': 'Môn chuyên sâu: học khi đã chọn hướng thị giác máy tính.',
  'spec-natural-language-processing': 'Môn chuyên sâu: học khi đã chọn hướng xử lý ngôn ngữ.',
  'spec-security-advanced': 'Môn chuyên sâu: học khi đã chọn hướng an ninh.',
};
export const EXTENSION_REASON = 'Nội dung mở rộng: chưa cần cho phần nền, học sau khi đã vững phần chính.';
