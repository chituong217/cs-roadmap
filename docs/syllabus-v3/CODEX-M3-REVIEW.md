# Codex review M3 — Nền nhập môn và toán

Ngày review: 2026-11-07. Repository: `C:/Users/XAOXIN/OneDrive/Tài liệu/ChatGPT/LXH/cs-roadmap-deploy`. Nhánh: `feature/cs-syllabus-from-zero`.

**Kết luận: yêu cầu sửa trước khi duyệt M3 sang M4. Đã có khối lượng nội dung mới đáng kể và cấu trúc đầy đủ theo catalog hiện tại; còn lỗi kiến thức nền, điều kiện áp dụng và nguồn đối chiếu. Không cần viết lại toàn bộ 14 môn.**

## 1. Đã kiểm chứng

- Codex chạy `npm test`: **124/124 đạt**, 19 suites, 0 thất bại. Những kiểm tra này xác minh cấu trúc, không chứng minh nội dung học thuật đúng.
- Đếm trực tiếp dữ liệu: **15 course objects**, gồm 14 môn Khối I–II và một chương mẫu Hệ điều hành; **71 chương, 225 chủ đề = 220 core + 5 extension**, 75.926 đơn vị từ theo hàm countWords hiện tại. Không gọi chương mẫu OS là một môn hoàn chỉnh.
- Toàn bộ 14 môn Khối I–II có danh sách ID chương khớp plannedChapters của catalog. Điều này xác minh triển khai đủ khung hiện có, không tự chứng minh khung đã bao phủ mọi nội dung cần thiết.
- Bản `public/SYLLABUS.md` khớp toàn văn `docs/syllabus-v3/M3-FOUNDATIONS-AND-MATH-SYLLABUS.md` khi so sánh trực tiếp.
- Script backup xác minh `ok:true`, `totalMissing:0`; SHA-256 nguyên `78094dc6ef2f2dbc0a11caa1e04e0f89eb2ae3138a71ea1d5497c79361cb8077`. Không ghi lại snapshot.
- Legacy `src/curriculum`, `src/progress.mjs`, `src/main.jsx` không có diff nội dung với base trong working tree hiện tại.
- Cận phụ R(n) ở `discrete-math-part2.mjs:173` đã sửa theo quyết định M2. Không mở lại finding M2 đã đóng.

Review này rà các môn mới theo nhóm, kiểm các định nghĩa/cơ chế/điều kiện trọng yếu và một số locator bằng nguồn gốc. Không chứng nhận từng câu của toàn bộ 75.926 từ hoặc mọi URL đều đã được kiểm độc lập. Không chạy lại build trong lượt này, không nghiệm thu UI v3 chưa được tích hợp. Kết quả build trong phản hồi Antigravity là kết quả bên thực hiện báo.

## 2. Findings phải sửa

### F1 — [P2] Phân loại biểu thức và move semantics đang dạy sai mô hình tổng quát

Vị trí: `src/syllabus/courses/cpp-memory-model.mjs:234–235`.

Đoạn hiện tại định nghĩa rvalue là giá trị tạm sắp biến mất sau biểu thức; coi copy vector luôn cấp phát mới, và move là lấy con trỏ trong O(1) rồi đặt nguồn về nullptr/rỗng. Đây không phải bảo đảm tổng quát. `std::move(v)` có thể tạo xvalue chỉ tới chính đối tượng v còn sống sau câu lệnh; std::move không tự di chuyển hoặc hủy v. Chi phí và trạng thái sau move phụ thuộc kiểu, thao tác và điều kiện allocator; nhiều đối tượng thư viện chỉ được bảo đảm trạng thái hợp lệ nhưng không xác định cụ thể.

Sửa bằng cách phân biệt lvalue/xvalue/prvalue ở mức vừa đủ, tách value category khỏi lifetime. Trình bày việc chuyển quyền sở hữu vùng đệm O(1) như một trường hợp phù hợp có điều kiện, không phải định nghĩa move của mọi kiểu. Không khẳng định nguồn luôn rỗng/null; không cần nhồi toàn bộ quy tắc chuẩn vào môn nhập môn, chỉ cần phát biểu giản lược đúng.

Nguồn: [C++ draft — Value category](https://eel.is/c++draft/basic.lval), [Moved-from state of library types](https://eel.is/c++draft/lib.types.movedfrom).

### F2 — [P2] Điều kiện của công thức xác suất và thống kê chưa đủ

Vị trí: `src/syllabus/courses/probability.mjs:169–170`; `src/syllabus/courses/statistics-inference.mjs:150`, `182` và overview liên quan.

- Kỳ vọng của biến ngẫu nhiên rời rạc được viết bằng tổng trên mọi singleton của Ω mà không hạn chế Ω rời rạc/đếm được. Một biến X có phân phối rời rạc vẫn có thể được định nghĩa trên không gian mẫu liên tục. Giữ công thức tổng theo các giá trị x của X; chỉ dùng tổng theo ω khi không gian xác suất thực sự rời rạc phù hợp. Tính tuyến tính với kỳ vọng hữu hạn không đòi độc lập, nhưng phải nêu điều kiện tồn tại/tính khả tích phù hợp; không gắn chứng minh tổng hữu hạn trên Ω vào mô hình Ω tổng quát.
- Khoảng credible interval viết sai vị trí điều kiện: `P(a ≤ Θ | D ≤ b)` phải là **`P(a ≤ Θ ≤ b | D)`**. Sửa cả nguồn và preview.
- Không phải cứ thay σ bằng S là thống kê có phân phối Student-t chính xác. Nêu mẫu i.i.d. chuẩn và phương sai dương cho kết quả t chính xác; phân biệt với xấp xỉ lớn mẫu ngoài mô hình chuẩn và giới hạn ở mẫu nhỏ/đuôi nặng/phụ thuộc. Đồng bộ overview để không giữ phát biểu tuyệt đối cũ ở đó.

Nguồn đối chiếu điều kiện Student-t: [MIT 18.05 Class 22, §5.1–5.2](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/mit18_05_s22_class22-prep.pdf).

Rà và sửa thêm ba chỗ cụ thể trong cùng nhóm toán:

- `statistics-inference.mjs:87`: định nghĩa tính vững bằng hội tụ theo xác suất tới tham số. Bias và variance cùng về 0 là một điều kiện đủ (thông qua MSE), không dùng thay định nghĩa tổng quát.
- `statistics-inference.mjs:231`: bỏ ví dụ khẳng định n=10^7 và khác biệt 0,001% tự cho p<10^-6. Phải nêu mô hình, cỡ mẫu từng nhóm và phương sai/tỷ lệ nền rồi tính thật, hoặc bỏ các con số. Chẳng hạn hai nhóm mỗi nhóm 10^7, tỷ lệ quanh 0,5 và chênh lệch tuyệt đối 10^-5 chỉ cho z≈0,045, không phải một hiệu ứng có p cực nhỏ. Ý chính về khác biệt giữa significance và effect size vẫn giữ.
- `multivariable-calculus-optimization.mjs:204`: điều kiện Lagrange cho ví dụ Rayleigh quotient xác định các hướng dừng là vector riêng, không riêng hướng của trị riêng lớn nhất. Cực đại ứng với trị riêng lớn nhất, cực tiểu với nhỏ nhất. Đổi câu cuối từ “cực trị” thành kết luận đúng cho bài toán cực đại và nêu bước chọn trị riêng.

Không cần triển khai lý thuyết đo đầy đủ. Mục tiêu là dạy mô hình đơn giản với điều kiện đúng và phạm vi rõ.

### F3 — [P2] Đồng nhất tính volatile của RAM với việc một tiến trình kết thúc

Vị trí: `src/syllabus/courses/computing-environment.mjs:133`.

Câu RAM “mất toàn bộ nội dung ngay khi tiến trình kết thúc hoặc máy tắt” sai. Kết thúc một tiến trình khiến hệ điều hành thu hồi các tài nguyên/ánh xạ của tiến trình đó; không làm toàn bộ RAM vật lý mất nội dung và không đồng nghĩa các bit vừa bị xóa lập tức. Tính volatile nói về việc giữ dữ liệu khi mất nguồn. Phân biệt hai ý này trong đoạn mô tả và tránh hứa rằng mọi dữ liệu tự biến mất vật lý khi chương trình thoát.

Cùng môn ở dòng 155, không khẳng định mọi truy cập sai vùng nhớ đều khiến OS chấm dứt ngay. Lỗi vi phạm bảo vệ bị phần cứng/OS phát hiện có thể làm tiến trình nhận tín hiệu/lỗi; truy cập nhầm đối tượng hoặc vượt biên nhưng vẫn trong vùng mapped có thể làm hỏng dữ liệu mà chưa crash. Giữ mô hình giản lược ở mức nhập môn với giới hạn rõ. [Dive Into Systems — Valgrind](https://diveintosystems.org/book/C3-C_debug/valgrind.html) minh họa việc phát hiện lỗi bộ nhớ mà không thể chỉ chờ chương trình crash.

### F4 — [P2] Điều kiện đầu vào authored và catalog không thống nhất

Vị trí: `src/syllabus/courses/computational-thinking.mjs` phần prerequisites; `intro-programming.mjs` phần prerequisites; `src/syllabus/catalog-blocks-1-3.mjs:91–93`, `115–117` và bộ validator/tests.

Đối chiếu tự động theo cặp courseId/type:

- CS-03 có math-bridge là co_requisite trong authored nhưng catalog thiếu cạnh này.
- CS-04 có computational-thinking là required trong authored nhưng co_requisite trong catalog.

Do tài liệu đồ thị và phép kiểm DAG dùng catalog, còn preview dùng authored, người học nhận hai lộ trình đầu vào khác nhau. Chọn quan hệ phù hợp với nội dung rồi dùng một nguồn chuẩn hoặc kiểm tra nhất quán giữa hai lớp. Bổ sung ca kiểm định phát hiện prerequisite bị đổi loại/mất cạnh; không chỉ kiểm ID có tồn tại. Chạy lại DAG và sinh lại tài liệu sau sửa.

### F5 — [P2] Đếm số lần chia đôi bị lẫn với số bit/số lần so sánh

Vị trí: `src/syllabus/courses/math-bridge.mjs:245–246`.

Đoạn “số bước cho tới khi còn 1 phần tử” dùng `floor(log2 n)+1` không đúng với mô hình đã nêu. Với n=8, 8 → 4 → 2 → 1 là 3 lần chia đôi, trong khi số bit để viết 8 là 4. Xác định quy tắc làm tròn và điều kiện dừng khi n không là lũy thừa của 2; tách số lần giảm miền, số phép so sánh của một thuật toán tìm kiếm đã chỉ rõ và số chữ số nhị phân. Đừng dùng một công thức chính xác cho ba phép đếm khác nhau.

### F6 — [P2] Unicode đang bị đồng nhất ký tự hiển thị với một code point

Vị trí: `src/syllabus/courses/computational-thinking.mjs:76`; rà cùng câu liên quan trong `computing-environment.mjs:92`.

Không phải mỗi chữ/emoji nhìn thấy tương ứng duy nhất với một code point; dấu kết hợp và emoji ghép có thể gồm nhiều code point. UTF-8 mã hóa mỗi Unicode scalar value bằng 1–4 byte, không phải mọi ký tự hiển thị đều dài tối đa 4 byte. Ví dụ emoji 👩‍💻 gồm U+1F469, U+200D, U+1F4BB.

Sửa ngắn để phân biệt byte, code point và đơn vị ký tự người đọc thấy; giữ ví dụ ASCII đơn giản hiện có. Nguồn gốc: [Unicode Emoji — sequences](https://www.unicode.org/reports/tr51/#Emoji_Sequences).

### F7 — [P2] Locator không dẫn đúng nội dung, cần rà theo phiên bản nguồn

Các ca đã đối chiếu:

- `math-bridge.mjs:27`, `336`, `384` ghi **Precalculus 2e §8.3 Polar Form of Complex Numbers**, nhưng §8.3 là Polar Coordinates; Polar Form nằm ở **§8.5**. [Mục lục chính thức Chương 8](https://openstax.org/books/precalculus-2e/pages/8-introduction-to-further-applications-of-trigonometry).
- `cpp-memory-model.mjs` phần lifetime/return reference quanh dòng 187 dẫn Learn C++ §12.6 cho return by reference/dangling; §12.6 là pass by const lvalue reference, còn return by reference/address ở **§12.12**. [Mục lục Learn C++](https://www.learncpp.com/).
- Cùng môn dẫn Dive Into Systems Chương 2 §2.6 như phần debugging memory errors; debugging memory với Valgrind ở **Chương 3 §3.3**. Không dùng mục đó như nguồn riêng cho sanitizer nếu nội dung không có. [Dive Into Systems — Memory Debugging with Valgrind](https://diveintosystems.org/book/C3-C_debug/valgrind.html).
- Missing Semester dùng số lecture của bản 2020 trong khi SOURCE_REGISTER gộp “2020 / 2026 Edition” và URL root. Chốt năm và đường dẫn tương ứng cho từng phạm vi, ưu tiên tên bài + URL thay vì số lecture mơ hồ. [Mục lục bản 2020](https://missing.csail.mit.edu/2020/).
- `computational-thinking.mjs` gọi Composing Programs §1.1 là Elements of Programming; tên đó ở §1.2, §1.1 là Getting Started. [Mục lục Chương 1](https://composingprograms.com/pages/11-getting-started.html).
- `probability.mjs:175`, `201`, `334`: trong bản MCS 2015 đang viện dẫn, expectation ở §18.4–18.5, variance §19.3, Markov §19.1, Chebyshev §19.2, Chernoff §19.6.2; không phải các locator Chương 19/20 đang gắn tương ứng. [Sách MIT MCS 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/mit6_042js15_textbook.pdf).
- `single-variable-calculus.mjs:199`, `311`, `375`: MIT 18.01SC đặt L’Hôpital ở Sessions 87–90, improper integrals 91–93, power series 97 và Taylor 98–99. Sửa các khoảng session đang chỉ sai chủ đề. [Unit 5 Part A](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-5-exploring-the-infinite/part-a-lhospitals-rule-and-improper-integrals/), [Part B](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-5-exploring-the-infinite/part-b-taylor-series/).
- `multivariable-calculus-optimization.mjs:262`, `278`: MIT 18.02SC đặt triple integrals ở Unit 4 Part A Sessions 74–77; polar double integrals ở Session 50, change of variables 53–55. [Double integrals](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/3.-double-integrals-and-line-integrals-in-the-plane/part-a-double-integrals/), [Triple integrals](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/4.-triple-integrals-and-surface-integrals-in-3-space/part-a-triple-integrals/).

Yêu cầu rà nguồn của toàn bộ các môn mới M3 theo phiên bản đã khai báo, sửa locator và source register khi cần; ghi đúng mức đã đọc. Không suy từ “source ID tồn tại” hoặc “locator đủ dài” thành đã đối chiếu nội dung nguồn.

## 3. Chỉnh nhỏ cùng lượt, không mở rộng phạm vi

- `object-oriented-programming.mjs:204`: thay quy tắc “mọi base có virtual bắt buộc destructor virtual” bằng điều kiện dùng public virtual destructor khi cho phép hủy đa hình qua base; protected nonvirtual destructor là thiết kế khác có chủ đích. Khi delete qua base không đáp ứng điều kiện, kết quả là UB, không được bảo đảm chỉ gọi destructor base như một mô tả thực thi cố định. [C++ Core Guidelines C.35](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#Rc-dtor-virtual).
- `computational-thinking.mjs:194`: đổi “bắt buộc dùng temp đúng 3 bước” thành một cách an toàn/đơn giản trong mô hình gán đang giới thiệu. Không cần đưa mẹo swap khác vào syllabus.
- `REVIEW-PACKET.md:79–80`, `101`: dùng đúng ID `linux-system-programming`; OS hiện có 5 planned chapters và đã viết 1, nên còn **4**, không phải 5. Không tạo thêm chương chỉ để khớp số báo sai. Các nhóm còn lại CS-29..50 đúng là 22 môn; không cần sửa số này.

## 4. Điều kiện bàn giao lại

Sửa từng nhóm finding trong dữ liệu gốc; đồng bộ mô tả cấp môn/chương nếu còn phát biểu cũ; sinh lại preview và bảng thống kê. Giữ nguyên snapshot và legacy. Chạy tests phù hợp; thêm kiểm tra consistency prerequisite có ý nghĩa. Nội dung học thuật phải được kiểm trực tiếp bằng nguồn/lập luận, không thay bằng các test dò chuỗi câu đã sửa.

Trả bảng F1–F7: vị trí sửa, nội dung thay đổi, nguồn gốc đã kiểm, kiểm chứng và giới hạn. Không chỉ ghi “đã sửa toàn bộ” hay “0 lỗi source” khi mới kiểm tính tồn tại của source ID. Chưa sang M4 hoặc xuất bản GitHub Pages trước khi Codex review lại M3.

## 5. Prompt chuyển Antigravity

```text
Codex đã kiểm M3: nội dung mới có thật và124/124tests đạt, nhưng M3 CHƯA được duyệt sang M4 vì còn lỗi kiến thức và nguồn đối chiếu.

Đọc TOÀN BỘ báo cáo:
C:/Users/XAOXIN/OneDrive/Tài liệu/ChatGPT/LXH/cs-roadmap-deploy/docs/syllabus-v3/CODEX-M3-REVIEW.md

Tiếp tục theo PLAN gốc:
C:/Users/XAOXIN/Documents/Codex/2026-11-06/ki/outputs/PLAN-CS-SYLLABUS-FROM-ZERO-ANTIGRAVITY.md

Sửa tập trung F1–F7 và các chỉnh nhỏ cùng lượt. Không viết lại toàn bộ14môn. Rà nguồn theo đúng phiên bản và điều kiện của các phát biểu; không chỉ sửa câu được trích trong báo cáo mà bỏ sót overview/preview còn sai. Với prerequisite, thống nhất catalog/authored và thêm kiểm định phát hiện cạnh thiếu hoặc sai loại.

Sửa dữ liệu gốc, sinh lại preview, chạy kiểm tra phù hợp và trả bảng đối chiếu từng finding bằng bằng chứng thật. Không thêm test dò văn bản để thay review học thuật. Giữ nguyên backup, legacy và tiến độ riêng. Gửi lại Codex review M3 trước M4; chưa xuất bản GitHub Pages.
```
