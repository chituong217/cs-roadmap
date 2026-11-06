# Đặc Tả Đồ Án Capstone 01: Game Arcade 2D Space Invaders C++17

> **Tài liệu đặc tả kỹ thuật đồ án (Capstone Project Specification — 01)**  
> **Lĩnh vực:** Lập trình Hướng đối tượng C++17 & Kiến trúc Phần mềm Thực chiến  
> **Ánh xạ lộ trình:** Track 1 (OOP & Thiết Kế Phần Mềm)  
> **Công cụ:** C++17, SFML / Raylib / SDL2, CMake, AddressSanitizer (ASan)

---

## 1. Mục Tiêu & Tổng Quan Đồ Án

Xây dựng trò chơi kinh điển **Space Invaders 2D** chạy trên máy tính cá nhân bằng C++17. Đồ án không chỉ nhằm tạo ra một trò chơi có thể chơi được, mà là cơ hội thực hành chuẩn mực về:
1. **Thiết kế phân lớp Hướng đối tượng sạch:** Kế thừa đa hình động, đa hình không rò rỉ bộ nhớ, áp dụng 5 nguyên lý SOLID.
2. **Quản lý vòng đời thực thể bằng RAII & Smart Pointers:** Tuyệt đối không dùng con trỏ trần (`raw pointers`) cho việc sở hữu tài nguyên.
3. **Vòng lặp trò chơi chuẩn mực (Game Loop Pattern):** Tách bạch giữa `processInput()`, `update(dt)`, và `render()`.
4. **Kiểm tra an toàn bộ nhớ tuyệt đối:** Biên dịch và chạy với AddressSanitizer (`-fsanitize=address,undefined`), bảo đảm **0 bytes rò rỉ bộ nhớ (Zero Memory Leaks)** sau các màn chơi dài.

---

## 2. Kiến Trúc Hệ Thống & Sơ Đồ Lớp

```
                          ┌──────────────────────────┐
                          │       GameEngine         │
                          │  - Window & Game State   │
                          │  - EntityManager         │
                          │  - CollisionSystem       │
                          └────────────┬─────────────┘
                                       │ sở hữu (unique_ptr)
                                       ▼
                          ┌──────────────────────────┐
                          │      EntityManager       │
                          │  vector<unique_ptr<      │
                          │         Entity>>         │
                          └────────────┬─────────────┘
                                       │ chứa
                                       ▼
                          ┌──────────────────────────┐
                          │      Entity (Base)       │
                          │ + virtual void update()  │
                          │ + virtual void draw()    │
                          │ + virtual ~Entity() = 0  │
                          └────────────┬─────────────┘
            ┌──────────────────────────┼──────────────────────────┐
            ▼                          ▼                          ▼
  ┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
  │   PlayerShip     │       │    AlienEnemy    │       │    Projectile    │
  │ - health, speed  │       │ - score, pattern │       │ - damage, dir    │
  └──────────────────┘       └──────────────────┘       └──────────────────┘
```

---

## 3. 4 Mốc Phát Triển Dự Án (M1 – M4 Milestones)

### Mốc M1: Cấu Trúc Dự Án CMake, Vòng Lặp Game & Render Khung Cửa Sổ
- **Mục tiêu:** Thiết lập cấu hình `CMakeLists.txt` chuẩn, tích hợp thư viện đồ họa (SFML hoặc Raylib), mở cửa sổ đồ họa $800 \times 600$ và cài đặt vòng lặp game với tốc độ khung hình ổn định (60 FPS).
- **Tiêu chí nghiệm thu:**
  - Khung cửa sổ hiển thị đúng 60 FPS, đóng mở mượt mà khi bấm phím `Esc` hoặc bấm nút tắt `X`.
  - Đo được delta time (`dt`) giữa các khung hình để chuyển động của nhân vật không phụ thuộc vào xung nhịp CPU.

### Mốc M2: Hệ Thống Thực Thể Đa Hình (Entity Component System Mini)
- **Mục tiêu:** Thiết kế lớp cơ sở trừu tượng `Entity` với hàm hủy ảo `virtual ~Entity() = default;`. Tạo các lớp con `PlayerShip`, `AlienEnemy`, và `Projectile`.
- **Cơ chế quản lý:** Sử dụng `std::vector<std::unique_ptr<Entity>> entities;`.
- **Tiêu chí nghiệm thu:**
  - Người chơi điều khiển tàu bay di chuyển trái/phải bằng phím mũi tên hoặc `A`/`D`.
  - Bấm phím `Space` bắn ra đạn (Projectile) bay thẳng lên trên.
  - Hàng ngũ quái vật (Aliens) xuất hiện thành lưới $5 \times 11$, tự động di chuyển ngang và đổi hướng dịch xuống khi chạm biên màn hình.

### Mốc M3: Hệ Thống Va Chạm AABB & Quản Lý Vòng Đời Thực Thể (Cleanup)
- **Mục tiêu:** Cài đặt thuật toán kiểm tra va chạm hộp bao trục tọa độ (Axis-Aligned Bounding Box - AABB Collision):
  ```cpp
  bool checkCollision(const BoundingBox& a, const BoundingBox& b) {
      return (a.x < b.x + b.w && a.x + a.w > b.x &&
              a.y < b.y + b.h && a.y + a.h > b.y);
  }
  ```
- **Xóa thực thể chết an toàn (Erase-Remove Idiom):**
  - Khi đạn trúng quái vật, cả đạn và quái vật đều được đánh dấu `isDestroyed = true`.
  - Cuối mỗi khung hình, `EntityManager` dọn dẹp các thực thể chết trong một lần quét duy nhất:
    ```cpp
    entities.erase(
        std::remove_if(entities.begin(), entities.end(),
                       [](const auto& e) { return e->isDead(); }),
        entities.end()
    );
    ```
- **Tiêu chí nghiệm thu:** Đạn bắn trúng quái vật $\to$ quái vật biến mất, tăng điểm số (Score), âm thanh nổ vang lên. Bộ nhớ của thực thể chết được giải phóng tức thì qua `std::unique_ptr`.

### Mốc M4: Điểm Số, Màn Hình Chờ/Thua & Kiểm Thử Kiểm Toán ASan 0 Bytes Leak
- **Mục tiêu:** Hoàn thiện bảng điểm, số mạng (Lives = 3), trạng thái trò chơi (StartMenu, Playing, GameOver, Victory).
- **Kiểm toán an toàn bộ nhớ:** Biên dịch dự án bằng cờ AddressSanitizer:
  ```bash
  cmake -B build -DCMAKE_CXX_FLAGS="-fsanitize=address,undefined -g"
  cmake --build build
  ./build/SpaceInvaders
  ```
- **Tiêu chí nghiệm thu:** Chơi thử ít nhất 5 màn chơi liên tục, cố ý bắn hàng nghìn viên đạn và để quái vật tràn xuống. Khi đóng game, báo cáo AddressSanitizer in ra: **`0 errors, 0 bytes leaked`**.

---

## 4. Tiêu Chí Nghiệm Thu Định Lượng

1. **Hiệu năng:** Tốc độ khung hình giữ vững $\ge 58$ FPS trong suốt quá trình có ít nhất 100 thực thể trên màn hình.
2. **Kiến trúc mã nguồn:**
   - 100% không dùng biến toàn cục (`global variables`).
   - Lớp `PlayerShip` không truy cập trực tiếp vào biến nội bộ của `AlienEnemy` (Đóng gói hoàn toàn).
   - Hàm hủy ảo được khai báo chính xác ở tất cả các lớp cơ sở kế thừa.
3. **An toàn bộ nhớ:** Đạt chứng nhận AddressSanitizer và LeakSanitizer không có bất kỳ cảnh báo nào.
