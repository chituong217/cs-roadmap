# Đặc Tả Đồ Án Capstone 02: HTTP/1.1 Socket Web Server Đa Luồng C++

> **Tài liệu đặc tả kỹ thuật đồ án (Capstone Project Specification — 02)**  
> **Lĩnh vực:** Hệ Thống Máy Tính, Lập Trình Socket Mức Thấp & Đồng Thời (Concurrency)  
> **Ánh xạ lộ trình:** Track 3 (Hệ Thống Máy Tính & Mạng)  
> **Công cụ:** C++17, POSIX Sockets (hoặc Winsock), Thread Pool tự viết, ApacheBench (`ab`), TSan/ASan

---

## 1. Mục Tiêu & Tổng Quan Đồ Án

Xây dựng một **Máy chủ Web (HTTP/1.1 Web Server)** đa luồng hiệu năng cao từ các hàm API socket nguyên thủy của hệ điều hành mà **không sử dụng bất kỳ framework mạng bên ngoài nào** (như Boost.Asio hay Crow).

### Mục Tiêu Năng Lực Then Chốt:
1. **Làm chủ Socket API mức thấp:** Hiểu rõ cơ chế `socket()`, `bind()`, `listen()`, `accept()`, `send()`, `recv()`.
2. **Kiến trúc Nhóm Luồng (Thread Pool):** Tự tay lập trình cấu trúc dữ liệu Hàng đợi công việc an toàn luồng (Thread-safe Queue) với `std::mutex` và `std::condition_variable`.
3. **Phân tích giao thức & Message Framing:** Giải quyết triệt để hiện tượng phân mảnh và dính gói TCP khi đọc các tiêu đề HTTP/1.1 (`\r\n\r\n`) và nội dung Body (`Content-Length`).
4. **Kiểm tra an toàn đồng thời:** Vượt qua kiểm toán ThreadSanitizer (`-fsanitize=thread`), bảo đảm **0 lỗi tranh chấp dữ liệu (Zero Data Races)** dưới tải trọng $10.000$ requests đồng thời.

---

## 2. Kiến Trúc Hệ Thống

```
                        CLIENTS TRÊN INTERNET
                      [Client 1] [Client 2] [Client 3]
                            │          │          │
                            ▼          ▼          ▼
┌────────────────────────────────────────────────────────────────────────┐
│ MÁY CHỦ HTTP (SERVER PROCESS)                                          │
│                                                                        │
│   LUỒNG CHÍNH (MAIN ACCEPTOR THREAD)                                   │
│   ├── socket() -> bind(8080) -> listen()                               │
│   └── while(true) { client_fd = accept(); task_queue.push(client_fd); }│
│                                │                                       │
│                                ▼                                       │
│   HÀNG ĐỢI AN TOÀN LUỒNG (THREAD-SAFE TASK QUEUE)                      │
│   └── std::mutex + std::condition_variable                             │
│                                │                                       │
│                                ▼                                       │
│   NHÓM CÔNG NHÂN (THREAD POOL - CỐ ĐỊNH 8 LUỒNG)                       │
│   ├── Worker 1: [Đọc Request -> Parse HTTP -> Đọc File -> Gửi 200 OK]  │
│   ├── Worker 2: [Xử lý API /api/health -> Gửi JSON -> close(fd)]       │
│   └── Worker ...:                                                      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. 4 Mốc Phát Triển Dự Án (M1 – M4 Milestones)

### Mốc M1: Máy Chủ Socket Đơn Luồng & Echo Server
- **Mục tiêu:** Thiết lập kết nối TCP lắng nghe tại cổng `8080`, chấp nhận một client kết nối, nhận chuỗi byte và gửi trả ngược lại đúng chuỗi byte đó (Echo).
- **Tiêu chí nghiệm thu:**
  - Dùng lệnh terminal `curl http://localhost:8080/` hoặc `telnet localhost 8080` kết nối thành công và nhận lại phản hồi.
  - Xử lý đóng kết nối an toàn khi client ngắt kết nối mà server không bị văng lỗi.

### Mốc M2: Tự Viết Lớp Thread Pool Hoàn Chỉnh
- **Mục tiêu:** Xây dựng lớp `ThreadPool` tái sử dụng được:
  ```cpp
  class ThreadPool {
  public:
      ThreadPool(size_t numThreads);
      void enqueue(std::function<void()> task);
      ~ThreadPool(); // Graceful shutdown
  private:
      std::vector<std::thread> workers;
      std::queue<std::function<void()>> tasks;
      std::mutex queueMutex;
      std::condition_variable cv;
      bool stop;
  };
  ```
- **Tiêu chí nghiệm thu:** Luồng chính gọi `accept()` và đẩy trực tiếp công việc xử lý socket vào `ThreadPool`. Máy chủ có thể phục vụ cùng lúc nhiều tab trình duyệt mở đồng thời mà không bị treo.

### Mốc M3: Bộ Phân Tích HTTP/1.1 & Phục Vụ Tệp Tĩnh (Static File Server)
- **Mục tiêu:**
  - Đọc dòng byte từ socket cho đến khi gặp ranh giới `\r\n\r\n`.
  - Tách lấy: Phương thức (`GET`, `POST`), Đường dẫn URI (`/index.html`), Phiên bản (`HTTP/1.1`), và các cặp Headers (`Host`, `User-Agent`, `Content-Length`).
  - Đọc tệp tin từ thư mục `public/` và trả về đúng kiểu MIME (`text/html`, `text/css`, `image/png`, `application/json`).
  - Xử lý các mã phản hồi chuẩn: `200 OK`, `400 Bad Request`, `404 Not Found`, `405 Method Not Allowed`.
- **Bảo mật cơ bản (Path Traversal Protection):** Chặn các yêu cầu chứa `../` để ngăn hacker đọc các tệp nhạy cảm trên hệ điều hành (`/etc/passwd`).

### Mốc M4: Kiểm Thử Tải Trọng ApacheBench & Kiểm Toán ThreadSanitizer
- **Mục tiêu:** Đánh giá hiệu năng và độ ổn định của máy chủ dưới áp lực tải lớn bằng công cụ `ab` (ApacheBench):
  ```bash
  ab -n 10000 -c 100 http://localhost:8080/index.html
  ```
- **Kiểm toán an toàn đồng thời:**
  - Biên dịch bằng ThreadSanitizer:
    ```bash
    g++ -std=c++17 -O2 -fsanitize=thread -g src/*.cpp -o server
    ./server
    ```
- **Tiêu chí nghiệm thu:**
  - Phục vụ thành công $10.000$ requests với 100 kết nối đồng thời.
  - Tỷ lệ lỗi: **0.00%**.
  - ThreadSanitizer không phát hiện bất kỳ cảnh báo **Data Race** nào trên biến chia sẻ.

---

## 4. Tiêu Chí Nghiệm Thu Định Lượng

1. **Hiệu năng thông lượng (Throughput):** Đạt tối thiểu **$\ge 5.000$ Requests Per Second (RPS)** trên máy cá nhân khi phục vụ tệp HTML tĩnh nhỏ.
2. **Quản lý tài nguyên:**
   - 100% các socket descriptors được đóng (`close(fd)`) sau khi hoàn tất phiên làm việc, không bị cạn kiệt file descriptors (lỗi `Too many open files`).
   - Bộ nhớ RAM tiêu thụ ổn định, không tăng dần theo thời gian chạy (No Memory Leak).
