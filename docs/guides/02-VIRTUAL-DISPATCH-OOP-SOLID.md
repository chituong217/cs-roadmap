# Hướng Dẫn Tư Duy Bản Chất: Cơ Chế Đa Hình Động (vptr/vtable) & 5 Nguyên Lý SOLID

> **Tài liệu học tập ngoại tuyến (Offline Conceptual Guide — 02)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — HCMUS  
> **Trọng tâm:** Hiểu rõ cơ chế phần cứng của Đa hình & Áp dụng thiết kế phần mềm sạch

---

## 1. Bản Chất Cơ Chế Đa Hình Động (Dynamic Polymorphism Under The Hood)

Trong Lập trình Hướng đối tượng (OOP), hầu hết sinh viên đều biết: Khi gọi một phương thức `virtual` qua con trỏ lớp cha, phương thức của lớp con tương ứng sẽ được thực thi. Nhưng **CPU thực hiện điều đó như thế nào** khi CPU chỉ hiểu các địa chỉ bộ nhớ và lệnh nhảy `JMP`?

Câu trả lời nằm ở cơ chế **Bảng Phương Thức Ảo (vtable)** và **Con Trỏ Ảo (vptr)**.

### 1.1. Cấu Trúc Bộ Nhớ Của Đối Tượng Có Phương Thức Virtual
Khi một lớp có ít nhất một hàm `virtual`, trình biên dịch sẽ âm thầm chèn thêm một trường dữ liệu ẩn vào đầu đối tượng: **`vptr` (Virtual Table Pointer)** có kích thước 8 bytes (trên kiến trúc 64-bit).

```
         VÙNG NHỚ CỦA ĐỐI TƯỢNG (HEAP / STACK)
         ┌──────────────────────────────────────┐
offset 0 │ __vptr (8 bytes)                     │───┐
         ├──────────────────────────────────────┤   │
offset 8 │ member_variable_1                    │   │
         ├──────────────────────────────────────┤   │
offset 12│ member_variable_2                    │   │
         └──────────────────────────────────────┘   │
                                                    ▼
                       VTABLE NẰM TRÊN PHÂN VÙNG READ-ONLY DATA
                       ┌──────────────────────────────────────┐
               slot 0  │ &Derived::speak()                    │──> [Mã máy của Derived]
                       ├──────────────────────────────────────┤
               slot 1  │ &Derived::~Derived() [Hàm hủy ảo]    │
                       └──────────────────────────────────────┘
```

### 1.2. 3 Bước CPU Thực Thi Khi Gọi Hàm Ảo: `ptr->speak()`
Khi bạn viết dòng lệnh `basePtr->speak();`, trình biên dịch không thể nhảy trực tiếp đến một địa chỉ cố định. Thay vào đó, nó dịch thành chuỗi chỉ thị gián tiếp:
1. **Bước 1 (Lấy vptr):** CPU đọc 8 bytes đầu tiên tại địa chỉ `basePtr` đang trỏ tới để lấy ra địa chỉ của bảng `vtable`.
2. **Bước 2 (Tra cứu slot):** CPU cộng thêm độ dịch (offset) của hàm `speak` trong bảng (ví dụ: `slot 0`).
3. **Bước 3 (Nhảy gián tiếp):** CPU giải tham chiếu con trỏ hàm tại `vtable[0]` và thực hiện lệnh gọi hàm gián tiếp (`call [rax]`).

### 1.3. Chi Phí Thực Tế Của Đa Hình Động
Đa hình không hoàn toàn "miễn phí":
- **Bộ nhớ:** Mỗi đối tượng tăng thêm 8 bytes cho con trỏ `vptr`.
- **Thời gian:** Tốn thêm 2 lần đọc bộ nhớ gián tiếp (Truy cập `vptr` $\to$ Truy cập `vtable` $\to$ Nhảy vào hàm).
- **Tối ưu hóa:** Trình biên dịch **không thể nội suy (inline)** hàm ảo tại thời điểm biên dịch vì không biết đối tượng thực sự là gì.

---

## 2. Vì Sao Lớp Cơ Sở Bắt Buộc Phải Có Hàm Hủy Ảo (`virtual ~Base()`)?

Đây là câu hỏi phỏng vấn kinh điển và là lỗi rò rỉ bộ nhớ phổ biến nhất trong C++.

### Kịch Bản Gây Lỗi:
```cpp
class Base {
public:
    ~Base() { std::cout << "Huy Base\n"; } // NGUY HIỂM: Không có virtual!
};

class Derived : public Base {
private:
    int* largeArray;
public:
    Derived() : largeArray(new int[1000000]) {}
    ~Derived() { 
        delete[] largeArray; 
        std::cout << "Huy Derived va giai phong 1M ints\n"; 
    }
};

void cleanup() {
    Base* p = new Derived();
    delete p; // THẢM HỌA XẢY RA TẠI ĐÂY!
}
```

### Chẩn Đoán Bản Chất:
- Khi gọi `delete p;`, do `~Base()` **không phải là hàm ảo**, trình biên dịch chỉ nhìn vào kiểu tĩnh của biến con trỏ (`Base*`).
- CPU lập tức gọi thẳng `~Base()`.
- **Hàm hủy `~Derived()` hoàn toàn bị bỏ qua!** Toàn bộ mảng `largeArray` (4MB bộ nhớ Heap) bị rò rỉ vĩnh viễn trong RAM.
- **Quy tắc vàng:** **Bất kỳ lớp nào có ít nhất một phương thức `virtual` thì hàm hủy của nó BẮT BUỘC phải là `virtual`!**

---

## 3. 5 Nguyên Lý Thiết Kế Phần Mềm Sạch (SOLID Principles)

SOLID là 5 nguyên lý thiết kế kiến trúc hướng đối tượng giúp phần mềm dễ bảo trì, dễ mở rộng và chống lại sự mục nát của mã nguồn khi dự án lớn dần.

```
┌────────────────────────────────────────────────────────┐
│                   5 NGUYÊN LÝ S.O.L.I.D                │
├───┬────────────────────────────────────────────────────┤
│ S │ Single Responsibility (Đơn trách nhiệm)            │
│ O │ Open/Closed (Mở rộng đóng sửa đổi)                 │
│ L │ Liskov Substitution (Thay thế Liskov)              │
│ I │ Interface Segregation (Phân tách giao diện)        │
│ D │ Dependency Inversion (Đảo ngược phụ thuộc)         │
└───┴────────────────────────────────────────────────────┘
```

### 3.1. S — Single Responsibility Principle (Nguyên Lý Đơn Trách Nhiệm)
> *"Một lớp chỉ nên có đúng một lý do duy nhất để thay đổi."*

- **Vi phạm:** Lớp `Student` vừa lưu thông tin sinh viên, vừa có hàm `saveToDatabase()`, vừa có hàm `renderHTMLReport()`. Khi định dạng cơ sở dữ liệu đổi $\to$ sửa `Student`. Khi giao diện web đổi $\to$ lại sửa `Student`.
- **Chuẩn hóa:** Tách thành 3 lớp độc lập: `Student` (thực thể dữ liệu), `StudentRepository` (thao tác lưu trữ CSDL), và `StudentReportFormatter` (xuất báo cáo).

### 3.2. O — Open/Closed Principle (Mở Để Mở Rộng, Đóng Để Sửa Đổi)
> *"Các thực thể phần mềm nên mở cho việc mở rộng tính năng mới, nhưng đóng trước việc sửa đổi mã nguồn đã chạy ổn định."*

- **Vi phạm:** Viết một hàm tính diện tích dùng chuỗi `if-else` kiểm tra loại hình (`if (shape.type == "Circle") ... else if (shape.type == "Rectangle") ...`). Mỗi khi thêm hình mới (Tam giác), ta phải sửa lại hàm cũ $\to$ nguy cơ làm hỏng mã nguồn đang chạy.
- **Chuẩn hóa:** Tạo lớp cơ sở trừu tượng `Shape` với hàm thuần ảo `virtual double area() const = 0;`. Khi thêm `Triangle`, ta chỉ cần tạo lớp con mới kế thừa mà không sửa một dòng mã nào của hệ thống cũ.

### 3.3. L — Liskov Substitution Principle (Nguyên Lý Thay Thế Liskov)
> *"Các đối tượng của lớp con phải có khả năng thay thế hoàn toàn cho các đối tượng của lớp cha mà không làm thay đổi tính đúng đắn của chương trình."*

- **Bài học kinh điển: Hình vuông vs Hình chữ nhật (Square extends Rectangle):**
  - Trong toán học: Hình vuông là một hình chữ nhật đặc biệt (có 2 cạnh bằng nhau).
  - Trong lập trình: Nếu lớp con `Square` kế thừa `Rectangle`, khi người dùng gọi `setHeight(5)` rồi `setWidth(10)`, diện tích kỳ vọng là 50. Nhưng vì là hình vuông, hàm `setWidth` âm thầm đổi luôn chiều cao thành 10 $\to$ diện tích nhảy lên 100!
  - **Hệ quả:** Vi phạm Liskov. Lớp con đã phá vỡ bất biến logic của lớp cha.

### 3.4. I — Interface Segregation Principle (Nguyên Lý Phân Tách Giao Diện)
> *"Khách hàng (Client) không nên bị ép buộc phải phụ thuộc vào các giao diện mà họ không sử dụng."*

- **Vi phạm:** Một interface khổng lồ `IWorker` chứa cả `work()`, `eat()`, `sleep()`. Khi một lớp `RobotWorker` cài đặt interface này, nó buộc phải viết một hàm rỗng hoặc ném lỗi cho `eat()` và `sleep()`.
- **Chuẩn hóa:** Tách thành các interface nhỏ, chuyên biệt: `IWorkable`, `IFeedable`. `HumanWorker` cài đặt cả hai; `RobotWorker` chỉ cài đặt `IWorkable`.

### 3.5. D — Dependency Inversion Principle (Nguyên Lý Đảo Ngược Phụ Thuộc)
> *"1. Các module cấp cao không nên phụ thuộc vào các module cấp thấp. Cả hai nên phụ thuộc vào sự trừu tượng (Abstractions / Interfaces).*  
> *2. Sự trừu tượng không nên phụ thuộc vào chi tiết. Chi tiết phải phụ thuộc vào sự trừu tượng."*

```
Cách làm tồi (Phụ thuộc trực tiếp):
[High-Level: OrderService] ──────> [Low-Level: MySQLDatabase]

Cách làm chuẩn SOLID (Đảo ngược qua Interface):
[OrderService] ──────> [Interface: IDatabase] <────── [MySQLDatabase]
                                              <────── [PostgreSQLDatabase]
```

- Nhờ DIP, ta có thể dễ dàng tráo đổi cơ sở dữ liệu từ MySQL sang PostgreSQL hoặc dùng cơ sở dữ liệu giả lập (Mock DB) để kiểm thử tự động mà không cần sửa mã của `OrderService`.
