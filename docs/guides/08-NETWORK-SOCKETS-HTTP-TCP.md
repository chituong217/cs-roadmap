# Hướng Dẫn Tư Duy Bản Chất: Mạng Mức Thấp, Socket TCP & Giao Thức HTTP

> **Tài liệu học tập ngoại tuyến (Offline Conceptual Guide — 08)**  
> **Dành cho:** Sinh viên Khoa học Máy tính — HCMUS  
> **Trọng tâm:** Bản chất Dòng Byte TCP, Kỹ thuật Message Framing chống dính gói và Kiến trúc HTTP Server

---

## 1. Giao Tiếp Mạng Mức Thấp & Trừu Tượng Hóa Socket API

Trong hệ điều hành chuẩn POSIX / Linux / Windows, mạng máy tính được trừu tượng hóa thành **Socket (Ổ cắm mạng)**. Về bản chất, socket hoạt động tương tự như một tệp tin (File Descriptor): Ta có thể đọc dữ liệu (`read` / `recv`) và ghi dữ liệu (`write` / `send`).

### Vòng Đời Của Một Kết Nối TCP Chuẩn Mực:
```
           MÁY CHỦ (SERVER)                      MÁY KHÁCH (CLIENT)
           ┌────────────────┐                    ┌────────────────┐
           │ socket()       │                    │ socket()       │
           │ bind(port)     │                    └──────┬─────────┘
           │ listen()       │                           │
           │ accept() (Chờ) │ <── Bắt tay 3 bước ─────> │ connect()      │
           └──────┬─────────┘   (SYN / SYN-ACK / ACK)   └──────┬─────────┘
                  │                                            │
                  ▼                                            ▼
           recv() (Đọc data) <──── Dòng byte dữ liệu ────> send() (Gửi data)
           send() (Gửi lại)  <──── Dòng byte dữ liệu ────> recv() (Nhận lại)
                  │                                            │
                  ▼                                            ▼
           close()           <─── Đóng kết nối ────────> close()
                                (FIN / ACK / FIN / ACK)
```

---

## 2. Bản Chất Then Chốt: TCP Là Dòng Byte (Byte Stream), Không Phải Gói Tin!

Đây là nguồn gốc của 90% các lỗi nghiêm trọng khi sinh viên tự lập trình mạng: **Hiểu lầm rằng một lệnh `send()` ở client sẽ tương ứng với đúng một lệnh `recv()` ở server!**

### Sự Thật Phần Cứng Của TCP:
- TCP là giao thức hướng dòng byte (**Stream-oriented**). Nó không hề biết khái niệm "thông điệp", "câu lệnh" hay "gói tin" của tầng ứng dụng.
- Đối với TCP, dữ liệu chỉ là một dòng các byte liên tục chảy từ đầu này sang đầu kia qua đường ống mạng.

```
KỊCH BẢN THỰC TẾ TRÊN ĐƯỜNG TRUYỀN MẠNG:
Client gửi 2 tin nhắn:
  Lần 1: send("HELLO")
  Lần 2: send("WORLD")

Server có thể nhận được dữ liệu theo bất kỳ kịch bản nào sau đây:
  • Kịch bản A (Dính gói - Coalescing): 1 lần recv() nhận trọn "HELLOWORLD".
  • Kịch bản B (Phân mảnh - Fragmentation):
      Lần recv 1: nhận "HEL"
      Lần recv 2: nhận "LOWO"
      Lần recv 3: nhận "RLD"
```

Nếu server viết mã ngây thơ `recv(buffer)` và coi `buffer` là một tin nhắn trọn vẹn, hệ thống sẽ sập hoặc phân tích sai lệch toàn bộ dữ liệu!

---

## 3. Kỹ Thuật Định Khung Thông Điệp (Message Framing)

Để giải quyết triệt để hiện tượng dính gói và phân mảnh, tầng ứng dụng bắt buộc phải tự định nghĩa **Cơ chế phân định ranh giới thông điệp (Message Framing)**:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   3 KỸ THUẬT MESSAGE FRAMING KINH ĐIỂN                 │
├───────────────────────┬────────────────────────────────────────────────┤
│ 1. Ký tự phân cách    │ Ngăn cách thông điệp bằng ký tự đặc biệt       │
│    (Delimiter-based)  │ (Ví dụ: dấu xuống dòng \n, hoặc \r\n\r\n).     │
├───────────────────────┼────────────────────────────────────────────────┤
│ 2. Tiền tố độ dài     │ Gửi 4 bytes đầu chứa độ dài L của gói tin,     │
│    (Length-prefixed)  │ sau đó đọc chính xác L bytes nội dung tiếp theo│
├───────────────────────┼────────────────────────────────────────────────┤
│ 3. Kích thước cố định │ Mọi thông điệp luôn được đệm (pad) đúng kích   │
│    (Fixed-size)       │ thước chuẩn (Ví dụ: đúng 256 bytes mỗi gói).   │
└───────────────────────┴────────────────────────────────────────────────┘
```

---

## 4. Giao Thức HTTP/1.1 Dưới Lăng Kính Framing

Giao thức web HTTP/1.1 thực chất là một ứng dụng bậc thầy kết hợp cả hai kỹ thuật framing trên:
1. **Phần Headers dùng Delimiter-based:**
   - Dòng đầu tiên (Request Line) và các dòng tiêu đề (Headers) được ngăn cách bằng `\r\n`.
   - **Ranh giới kết thúc phần Headers** được đánh dấu bằng chuỗi phân cách rỗng: **`\r\n\r\n`**.
   - Server liên tục đọc byte từ socket cho đến khi tìm thấy chuỗi `\r\n\r\n`.
2. **Phần Thân (Body) dùng Length-prefixed:**
   - Trong Headers, client gửi tiêu đề `Content-Length: 1048`.
   - Server phân tích số nguyên này và biết chính xác mình cần đọc thêm đúng `1048` bytes từ dòng socket để lấy trọn vẹn nội dung Body (ví dụ: dữ liệu JSON hoặc ảnh tải lên).

---

## 5. Cấu Trúc Yêu Cầu & Phản Hồi HTTP Chuẩn Mực

### Yêu Cầu Của Client (HTTP Request):
```http
GET /api/scores?studentId=123 HTTP/1.1\r\n
Host: localhost:8080\r\n
User-Agent: C++Client/1.0\r\n
Accept: application/json\r\n
\r\n
```

### Phản Hồi Của Server (HTTP Response):
```http
HTTP/1.1 200 OK\r\n
Content-Type: application/json; charset=UTF-8\r\n
Content-Length: 38\r\n
Connection: close\r\n
\r\n
{"status":"success","score":9.5,"rank":1}
```

---

## 6. Mô Hình Máy Chủ Đa Luồng (Multi-threaded Web Server Architecture)

Để phục vụ hàng nghìn client cùng lúc mà không bị nghẽn (Blocking):
1. **Luồng chính (Main Acceptor Thread):** Chỉ làm đúng một nhiệm vụ: Lặp vô tận gọi `accept()` để đón các kết nối mới từ client.
2. **Hàng đợi công việc (Thread-Safe Task Queue):** Mỗi khi có một socket client mới được tạo ra, luồng chính đẩy con trỏ socket vào hàng đợi và báo hiệu cho các luồng thợ qua Biến điều kiện (`std::condition_variable`).
3. **Nhóm luồng công nhân (Thread Pool):** Khởi tạo sẵn một số lượng luồng cố định (ví dụ: bằng số nhân CPU $N_{threads} = 8$). Các luồng thợ liên tục lấy socket từ hàng đợi, phân tích HTTP request, xử lý logic, gửi trả HTTP response và đóng socket.
- **Ưu điểm:** Loại bỏ chi phí nặng nề của việc tạo và hủy luồng liên tục (`pthread_create`), ngăn ngừa tấn công làm tràn bộ nhớ máy chủ (DoS) khi có quá nhiều kết nối ồ ạt tràn vào.
