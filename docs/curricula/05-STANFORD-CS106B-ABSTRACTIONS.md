# Hướng Dẫn Giáo Trình: Stanford CS106B — Programming Abstractions in C++

> **Tài liệu học tập ngoại tuyến (Offline Curriculum Guide)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — Trường Đại học Khoa học Tự nhiên (HCMUS)  
> **Giảng viên chính:** GS. Keith Schwarz & GS. Julie Zelenski (Đại học Stanford)  
> **Nguồn tham chiếu gốc:** [Stanford CS106B Course Reader](https://web.stanford.edu/class/cs106b/)

---

## 1. Triết Lý Sư Phạm Của Stanford CS106B: Khắc Phục Nỗi Sợ Con Trỏ & Đệ Quy

Tại Đại học Khoa học Tự nhiên (HCMUS), rất nhiều sinh viên Năm 1 và Năm 2 gặp một "hố sâu ngăn cách" sau khi học xong môn Kỹ thuật lập trình:
- **Nỗi sợ con trỏ (Pointer Phobia):** Cảm thấy hoang mang khi cấp phát động (`new`), sợ lỗi tràn bộ nhớ, con trỏ treo lơ lửng (`dangling pointer`), và lỗi `Segmentation fault`.
- **Nỗi sợ đệ quy (Recursion Paralysis):** Cố gắng dùng não để theo dõi hàng chục tầng gọi đệ quy lồng nhau dẫn đến kiệt sức và bế tắc khi giải các bài toán quay lui (Backtracking).

**Stanford CS106B** được thiết kế chính xác để chữa lành hai nỗi sợ này. Khóa học dạy sinh viên cách làm chủ **Sự trừu tượng (Abstraction)**: Sử dụng các Kiểu dữ liệu trừu tượng (ADTs) để giải quyết các vấn đề phức tạp, sau đó tháo rời từng ADT ra để tự tay cài đặt chúng bằng con trỏ và bộ nhớ cấp thấp.

---

## 2. 4 Trụ Cột Học Thuật Của Stanford CS106B

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     STANFORD CS106B: 4 TRỤ CỘT                          │
├─────────────────────────────────────────────────────────────────────────┤
│ 1. Trừu Tượng Hóa Dữ Liệu (ADTs): Vector, Grid, Stack, Queue, Map, Set │
│ 2. Tư Duy Đệ Quy & Quay Lui (Recursive Backtracking): Choose-Explore   │
│ 3. Bản Chất Bộ Nhớ & Con Trỏ: Stack vs Heap, Quản lý tài nguyên        │
│ 4. Tự Cài Đặt ADT Từ Con Trỏ: Custom Vector, LinkedList, Huffman Tree  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Phân Rã Chi Tiết Từng Trọng Tâm Sư Phạm

### 3.1. Tư Duy Đệ Quy: "The Recursive Leap of Faith" (Cú Nhảy Niềm Tin)
Một sai lầm chí mạng của người mới học đệ quy là cố gắng "vẽ cây đệ quy trong đầu" để xem máy tính nhảy đi đâu. Khi bài toán có độ sâu lớn, não người không đủ bộ nhớ để lưu trữ các khung ngăn xếp (Stack Frames).

GS. Keith Schwarz đưa ra quy tắc **Recursive Leap of Faith**:
1. **Trường hợp cơ sở (Base Case):** Xác định trạng thái đơn giản nhất mà đáp án hiển nhiên không cần tính toán (Ví dụ: mảng rỗng, chuỗi độ dài 0 hoặc 1). Xử lý xong trường hợp này và trả về kết quả ngay.
2. **Bước đệ quy (Recursive Step):** Chia bài toán lớn thành một bài toán con *nhỏ hơn nghiêm ngặt* nhưng có *cùng bản chất cấu trúc*.
3. **Cú nhảy niềm tin:** **Giả định tuyệt đối rằng hàm đệ quy sẽ giải đúng bài toán con nhỏ hơn đó!** Bạn không cần nhảy vào bên trong để xem nó chạy thế nào. Bạn chỉ cần trả lời một câu hỏi duy nhất: *"Nếu bài toán con đã được giải quyết xong, làm thế nào để kết hợp kết quả đó với phần tử hiện tại để ra đáp án của bài toán lớn?"*

### 3.2. Mẫu Tư Duy Quay Lui Kinh Điển (The Backtracking Template)
Mọi bài toán tìm kiếm không gian trạng thái, sinh hoán vị, tập hợp con, giải mê cung hay Sudoku trong CS106B đều tuân theo một khuôn mẫu bất biến gồm 3 bước: **Choose — Explore — Unchoose (Chọn — Thử — Hủy chọn)**:

```cpp
bool solveBacktracking(State& state) {
    // 1. Kiểm tra điều kiện dừng thành công
    if (isGoal(state)) {
        processSolution(state);
        return true;
    }

    // 2. Duyệt qua toàn bộ các lựa chọn khả dĩ tại bước này
    for (const auto& choice : getAvailableChoices(state)) {
        if (isValid(choice, state)) {
            // [CHOOSE]: Áp dụng lựa chọn và biến đổi trạng thái
            makeChoice(state, choice);

            // [EXPLORE]: Đệ quy đi sâu vào nhánh vừa chọn
            if (solveBacktracking(state)) {
                return true; // Tìm thấy đáp án thì dừng sớm
            }

            // [UNCHOOSE]: Hoàn tác lựa chọn (Khôi phục trạng thái ban đầu)
            undoChoice(state, choice);
        }
    }

    return false; // Không có lựa chọn nào dẫn đến lời giải
}
```

- **Bản chất của Unchoose (Hủy chọn):** Tại sao cần bước hủy chọn? Vì biến trạng thái `state` được truyền theo tham chiếu (`&`) để tiết kiệm bộ nhớ. Khi một nhánh thử nghiệm bị ngõ cụt (Dead-end), ta phải đưa môi trường trở lại trạng thái sạch sẽ trước khi thử lựa chọn tiếp theo.

---

### 3.3. Bản Chất Quản Lý Bộ Nhớ C++: Stack vs Heap

CS106B dạy sinh viên vẽ chính xác **Mô hình bộ nhớ (Memory Layout Diagram)** trong mọi bài toán con trỏ:

```
Địa chỉ cao: 0xFFFFFFFF
┌────────────────────────────────────────────────────────┐
│ STACK (Ngăn xếp cục bộ - Tự động dọn khi ra khỏi scope) │
│   [main() stack frame: int x, Node* ptr]               │
│   [solve() stack frame: int mid, char choice]          │
│                        │                               │
│                        ▼ (Phát triển xuống dưới)       │
├────────────────────────────────────────────────────────┤
│                        ▲ (Phát triển lên trên)         │
│                        │                               │
│ HEAP (Vùng nhớ cấp phát động - new/delete, malloc/free)│
│   [Nút 1: data=10, next=0x1040]                       │
│   [Mảng động: capacity=16, size=4]                     │
├────────────────────────────────────────────────────────┤
│ DATA / BSS (Biến toàn cục, hằng số tĩnh)               │
├────────────────────────────────────────────────────────┤
│ TEXT (Mã máy thực thi của chương trình)                │
└────────────────────────────────────────────────────────┘
Địa chỉ thấp: 0x00000000
```

- **Quy tắc vàng chống rò rỉ bộ nhớ (Memory Leak):** Mỗi từ khóa `new` được gọi trong vòng đời chương trình BẮT BUỘC phải có một từ khóa `delete` tương ứng được gọi. Mỗi `new[]` phải đi kèm `delete[]`.
- **Hủy giải tham chiếu con trỏ treo (Dangling Pointer):** Sau khi `delete ptr;`, giá trị địa chỉ trong biến con trỏ vẫn còn đó! Luôn gán ngay `ptr = nullptr;` để tránh vô tình truy cập vào vùng nhớ đã bị thu hồi.

---

## 4. Các Đồ Án Lớn Kinh Điển Trong Stanford CS106B

1. **Maze Generator & Solver:**
   - Dùng thuật toán Kruskal hoặc DFS ngẫu nhiên để sinh ra mê cung ngẫu nhiên luôn có đường đi.
   - Dùng BFS để tìm đường thoát ngắn nhất, so sánh với DFS để thấy sự khác biệt trực quan giữa hàng đợi FIFO và ngăn xếp LIFO.
2. **Boggle Word Finder (Trò chơi tìm từ Boggle):**
   - Cho bảng chữ cái $4 \times 4$. Tìm tất cả các từ có nghĩa trong từ điển tiếng Anh bằng cách nối các ô kề cạnh.
   - **Tư duy tối ưu hóa:** Sử dụng cấu trúc cây tiền tố **Trie (hoặc Lexicon)** để tỉa nhánh đệ quy (Pruning): Nếu chuỗi chữ cái hiện tại không phải là tiền tố của bất kỳ từ nào trong từ điển, lập tức dừng nhánh quay lui mà không cần khám phá tiếp!
3. **Huffman Data Compression (Nén dữ liệu Huffman):**
   - Đọc tệp văn bản bất kỳ, đếm tần số xuất hiện của từng byte ký tự.
   - Sử dụng Hàng đợi ưu tiên (Priority Queue / Min-Heap) để dựng Cây nhị phân Huffman tối ưu theo mã tiền tố (Prefix-free Code).
   - Tự tay thao tác với mức bit (Bitwise I/O: `readBit()`, `writeBit()`) để nén và giải nén tệp tin thực tế, chứng kiến dung lượng tệp giảm 40–60%.

---

## 5. Ứng Dụng Cho Sinh Viên HCMUS Chuẩn Bị Xét Chuyên Ngành KHMT

Stanford CS106B cung cấp nền tảng vững như bàn thạch để sinh viên HCMUS:
1. Vượt qua nỗi ám ảnh về việc tự cài đặt Cấu trúc dữ liệu trong môn **CS202 (Cấu trúc dữ liệu và giải thuật)**.
2. Hiểu bản chất các bài toán quy hoạch động và quay lui trong các kỳ thi học sinh giỏi tin học hoặc kỳ thi xét tuyển chuyên ngành.
3. Rèn luyện tư duy chia để trị và trừu tượng hóa mô hình bài toán lớn thành các module con thanh lịch.
