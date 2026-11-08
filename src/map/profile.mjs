// Hồ sơ người học dùng để tô vàng các node có thể đi nhanh hoặc học sau.
// Căn cứ: thư mục HCMUS của người học (Năm 1: Nhập môn CNTT, Cơ sở lập trình, Toán rời rạc, Vi tích phân 1–2,
// Đại số tuyến tính, DSA; Năm 2 kỳ 1: OOP, Mạng máy tính, Toán tổ hợp, Xác suất thống kê) và mục tiêu (vào Khoa học máy tính, thành người thị trường cần).
// Đổi hồ sơ chỉ cần sửa file này rồi chạy: node scripts/build-map-data.mjs
export const FAST_COURSES = {
  'computing-environment': 'Bạn đã học Nhập môn CNTT ở trường: lướt qua, chỉ dừng lại ở phần chưa chắc.',
  'computational-thinking': 'Bạn đã học Nhập môn CNTT và Cơ sở lập trình: lướt qua, chỉ dừng lại ở phần chưa chắc.',
  'math-bridge': 'Phần toán nền đã nằm trong Vi tích phân và Đại số tuyến tính ở trường: chỉ ôn khi gặp chỗ vướng.',
  'discrete-math': 'Bạn đã học Toán rời rạc và Toán tổ hợp ở trường: ôn nhanh để lấy lại, đi sâu khi cần cho giải thuật.',
  'linear-algebra': 'Bạn đã học Đại số tuyến tính ở trường: ôn nhanh, quay lại kỹ khi học học máy.',
  'single-variable-calculus': 'Bạn đã học Vi tích phân 1 ở trường: ôn nhanh, quay lại khi cần cho học máy.',
  'multivariable-calculus-optimization': 'Bạn đã học Vi tích phân 2 ở trường: ôn nhanh, nhất là gradient và tối ưu cho học máy.',
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
