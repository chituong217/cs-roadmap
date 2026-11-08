# BẢO TOÀN BẢN CŨ VÀ KIẾN TRÚC TIẾN ĐỘ V3 (`LEGACY-AND-PROGRESS.md`)

Phiên bản: `1.0` — Ngày lập: `2026-11-07` (Asia/Saigon)

---

## 1. Bối cảnh và Quyết định Kiến trúc (ADR-07)

### Vấn đề
- Bản 2.1.0 đang triển khai trên GitHub Pages sử dụng mô hình **419 nhiệm vụ (`tasks`)** chia vào 7 tracks, lưu tiến độ tại khóa LocalStorage:
  - `STORAGE_KEY = 'khmt-roadmap.progress.v1'` (bản 1.x)
  - `STORAGE_KEY_V2 = 'khmt-roadmap.progress.v2'` (bản 2.0 / 2.1, lưu `statuses`, `checkedTodos`, `lastTask`, `activeTrackId`, `filterStatus`)
- Chương trình mới (**Syllabus v3**) là một **curriculum hoàn toàn mới** được tổ chức theo cấu trúc 4 tầng (`Khối → Môn → Chương → Tiểu mục`) và biên soạn từ số 0 bằng các đoạn văn học thuật.
- Nếu dùng chung khóa LocalStorage hoặc tự động đánh dấu chương mới là `"Đã học"` chỉ vì một nhiệm vụ cũ có trạng thái `"done"`, người học sẽ bị ảo tưởng đã nắm toàn bộ lý thuyết của chương mới (ví dụ: từng làm một bài truy hồi chia để trị trong task cũ không đồng nghĩa đã học phương trình đặc trưng nghiệm bội, hệ không thuần nhất và hàm sinh trong chương Hệ thức đệ quy mới).

### Quyết định
1. **Cô lập tuyệt đối khóa lưu trữ LocalStorage:**
   - Khóa lưu trữ mới cho Syllabus v3:
     ```js
     export const STORAGE_KEY_SYLLABUS_V3 = 'cs-syllabus.progress.v3';
     export const CURRICULUM_ID_V3 = 'cs-syllabus-v3';
     ```
   - Không ghi đè, không xóa và không sửa đổi `khmt-roadmap.progress.v1` hay `khmt-roadmap.progress.v2`.
2. **Không tự động chuyển trạng thái hoàn thành (`No Implicit Completion Migration`):**
   - Khi khởi tạo tiến độ v3, mọi môn, chương và tiểu mục trong Syllabus v3 đều bắt đầu ở trạng thái mặc định `'unread'` (`Chưa học`).
   - Không chạy bất kỳ hàm migration ngầm nào chuyển `statuses[oldTaskId] === 'done'` hoặc `checkedTodos` sang tiến độ v3.
3. **Cơ chế gợi ý ánh xạ minh bạch (Opt-in Reference Hint Only):**
   - Nếu người dùng muốn đối chiếu lịch sử học ở bản 2.1.0, hệ thống chỉ hiển thị nhãn thông tin tham khảo (ví dụ: *"Trong lộ trình nhiệm vụ v2.1 cũ, bạn từng đánh dấu một số bài tập liên quan"*), và người dùng phải chủ động tự chọn trạng thái trong Syllabus v3 sau khi đọc nội dung chương mới.
4. **Duy trì lối mở Bản 2.1.0 (Legacy Archive Mode):**
   - Dữ liệu `src/curriculum/` và bản sao lưu `docs/backups/ROADMAP-BEFORE-SYLLABUS-REWRITE.md` được giữ nguyên để người dùng có thể tra cứu lại 419 nhiệm vụ thực hành và 5 đồ án Capstone bất cứ lúc nào.

---

## 2. Đặc tả Schema Tiến độ V3 (`src/syllabus-progress.mjs`)

```json
{
  "version": 3,
  "curriculumId": "cs-syllabus-v3",
  "updatedAt": "2026-11-07T10:36:00.000Z",
  "courseStatuses": {
    "intro-programming": "learning",
    "discrete-math": "unread"
  },
  "chapterStatuses": {
    "dm-recurrences": "learning"
  },
  "topicStatuses": {
    "dm-recurrences-modeling": "completed",
    "dm-recurrences-linear-homogeneous-distinct": "learning"
  },
  "lastVisited": {
    "courseId": "discrete-math",
    "chapterId": "dm-recurrences",
    "topicId": "dm-recurrences-linear-homogeneous-distinct"
  }
}
```

### Các trạng thái hợp lệ (`SYLLABUS_STATUS_LABELS`)
- `'unread'`: **Chưa học** (mặc định)
- `'learning'`: **Đang đọc / Đang học**
- `'completed'`: **Đã học nội dung** (do người học tự ghi nhận tiến độ đọc hiểu, không tự suy từ số lần bấm chuột hay thời gian mở trang)
- `'revisit'`: **Cần đọc lại / Ôn thêm**

*(Lưu ý: Hệ thống phân biệt rõ trạng thái tiến độ tự ghi nhận với năng lực thực tế; không tự gán nhãn "Đã làm chủ hoàn toàn" nếu không có bài kiểm tra độc lập).*

---

## 3. Quy tắc An toàn khi Nhập / Xuất (Import / Export Contract)

1. **Khi Xuất (`exportSyllabusProgressV3`):**
   - Luôn đính kèm `"version": 3` và `"curriculumId": "cs-syllabus-v3"`.
2. **Khi Nhập (`validateSyllabusProgressV3`):**
   - Nếu tệp JSON có `version: 1` hoặc `version: 2` (hoặc thiếu `curriculumId: "cs-syllabus-v3"`): **Từ chối nhập vào tiến độ v3** với thông báo rõ ràng: *"Tệp này thuộc lộ trình nhiệm vụ cũ (v1/v2), không phải tiến độ Syllabus v3. Dữ liệu hiện tại được giữ nguyên."*
   - Nếu tệp JSON bị hỏng cú pháp (`SyntaxError`), không phải Object, hoặc chứa khóa độc hại (`__proto__`, `constructor`, `prototype`): Từ chối hoặc lọc bỏ bằng `Object.hasOwn()`, bảo toàn tuyệt đối dữ liệu đang có trong trình duyệt.
   - Nếu tệp chứa các ID môn/chương/tiểu mục không tồn tại trong danh mục hiện hành: Bỏ qua các ID lạ và trả về số lượng mục đã bỏ qua (`ignoredCount`), không làm hỏng các ID hợp lệ.
