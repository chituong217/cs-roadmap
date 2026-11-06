# Đặc Tả Đồ Án Capstone 05: Khung Dự Án C++ Chuẩn Công Nghiệp & CI/CD Pipeline

> **Tài liệu đặc tả kỹ thuật đồ án (Capstone Project Specification — 05)**  
> **Lĩnh vực:** Công Cụ Kỹ Sư Phần Mềm, DevOps & Tự Động Hóa Kiểm Thử  
> **Ánh xạ lộ trình:** Track 5 (Công Cụ Kỹ Sư & Tự Động Hóa)  
> **Công cụ:** C++17, Modern CMake, GoogleTest, Clang-Tidy, Clang-Format, Docker, GitHub Actions

---

## 1. Mục Tiêu & Tổng Quan Đồ Án

Xây dựng một **Khung Dự Án C++ Chuẩn Công Nghiệp (Production-Grade C++ Scaffold)** hoàn chỉnh từ đầu, đóng vai trò là "khuôn đúc" (boilerplate) cho mọi dự án phần mềm C++ chuyên nghiệp:
1. **Kiến trúc Modern CMake (Target-based):** Sử dụng triết lý hiện đại của CMake 3.20+, quản lý thư viện qua Target (`target_include_directories`, `target_link_libraries`), quản lý gói phụ thuộc bằng `FetchContent`.
2. **Hệ thống Kiểm thử Đơn vị Tự động (Unit Testing):** Tích hợp GoogleTest (GTest), tự động phát hiện và thực thi kiểm thử qua `ctest`.
3. **Cổng kiểm soát chất lượng mã nguồn (Quality Gates):** Tự động format mã theo Google Style qua `clang-format` và quét lỗi tiềm ẩn qua `clang-tidy` với cờ nghiêm ngặt `-Wall -Wextra -Wpedantic -Werror`.
4. **Quy trình Tích hợp Liên tục (CI/CD Pipeline):** Thiết lập GitHub Actions tự động biên dịch ma trận đa nền tảng (Ubuntu GCC, Ubuntu Clang, Windows MSVC), chạy kiểm toán AddressSanitizer và đóng gói Docker image.

---

## 2. Cấu Trúc Thư Mục Chuẩn Mực

```
cpp-devops-scaffold/
├── .github/
│   └── workflows/
│       ├── ci.yml                 # Matrix Build: GCC, Clang, MSVC & ASan
│       └── lint.yml               # Clang-Format & Clang-Tidy Checks
├── cmake/
│   ├── CompilerWarnings.cmake     # Cấu hình cờ cảnh báo -Wall -Wextra
│   └── Sanitizers.cmake           # Bật ASan, UBSan, TSan qua biến CMake
├── include/                       # Header công khai (.hpp)
│   └── math_engine/
│       └── calculator.hpp
├── src/                           # Mã nguồn hiện thực nội bộ (.cpp)
│   ├── calculator.cpp
│   └── main.cpp
├── tests/                         # Bộ kiểm thử tự động GoogleTest
│   ├── CMakeLists.txt
│   └── calculator_test.cpp
├── .clang-format                  # Quy chuẩn định dạng mã nguồn Google
├── .clang-tidy                    # Quy tắc quét lỗi tĩnh
├── CMakeLists.txt                 # Cấu hình CMake gốc
├── Dockerfile                     # Đóng gói môi trường chạy độc lập
└── README.md                      # Hướng dẫn build, test và đóng góp
```

---

## 3. 4 Mốc Phát Triển Dự Án (M1 – M4 Milestones)

### Mốc M1: Cấu Trúc Dự Án Modern CMake & Quản Lý Thư Viện Qua Target
- **Mục tiêu:**
  - Viết `CMakeLists.txt` gốc tuân thủ nguyên tắc **Target-based**: Không dùng các biến toàn cục cũ như `include_directories()` hay `link_libraries()`.
  - Định nghĩa thư viện logic `math_engine` dạng static/shared:
    ```cmake
    add_library(math_engine src/calculator.cpp)
    target_include_directories(math_engine PUBLIC 
        $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
        $<INSTALL_INTERFACE:include>
    )
    target_compile_features(math_engine PUBLIC cxx_std_17)
    ```
- **Tiêu chí nghiệm thu:** Biên dịch thành công tệp thực thi `scaffold_app`, chạy và in ra kết quả tính toán chính xác trên terminal.

### Mốc M2: Tích Hợp GoogleTest Bằng CMake `FetchContent`
- **Mục tiêu:**
  - Tự động tải và biên dịch GoogleTest từ kho GitHub chính thức trong quá trình cấu hình CMake mà không yêu cầu người dùng phải cài đặt GTest thủ công vào hệ điều hành:
    ```cmake
    include(FetchContent)
    FetchContent_Declare(
      googletest
      GIT_REPOSITORY https://github.com/google/googletest.git
      GIT_TAG        v1.14.0
    )
    FetchContent_MakeAvailable(googletest)
    ```
  - Viết các test case kiểm chứng các hàm tính toán, xử lý ca biên (chia cho 0, số âm, số nguyên lớn).
- **Tiêu chí nghiệm thu:** Chạy lệnh `ctest --output-on-failure` thực thi toàn bộ bài test và vượt qua 100%.

### Mốc M3: Cổng Kiểm Soát Chất Lượng Mã Nguồn (Clang-Format & Clang-Tidy)
- **Mục tiêu:**
  - Cấu hình tệp `.clang-format` dựa trên chuẩn `BasedOnStyle: Google`.
  - Tạo mục tiêu CMake `cmake --build build --target format` để tự động định dạng toàn bộ mã nguồn.
  - Cấu hình `.clang-tidy` để phát hiện các lỗi thiết kế: biến chưa khởi tạo, con trỏ treo, chuyển kiểu dữ liệu nguy hiểm (narrowing conversions), thiếu `const` reference...
  - Bật cờ nghiêm ngặt: `-Werror` (mọi cảnh báo warning đều bị coi là lỗi biên dịch).
- **Tiêu chí nghiệm thu:** Chạy kiểm tra tĩnh không có bất kỳ vi phạm nào được báo cáo.

### Mốc M4: Thiết Lập GitHub Actions CI/CD Pipeline & Đóng Gói Docker
- **Mục tiêu:**
  - Viết tệp `.github/workflows/ci.yml`:
    - Chạy trên ma trận hệ điều hành (Matrix): `ubuntu-latest (gcc)`, `ubuntu-latest (clang)`, `windows-latest (msvc)`.
    - Tự động chạy `ctest`.
    - Chạy bước kiểm toán **AddressSanitizer (ASan)**.
  - Viết `Dockerfile` nhiều giai đoạn (Multi-stage build) để đóng gói ứng dụng siêu nhẹ trên nền Alpine Linux.
- **Tiêu chí nghiệm thu:** Đẩy mã lên GitHub, biểu tượng trạng thái CI (Build Badge) chuyển sang màu xanh **Passing** trên toàn bộ các nhánh kiểm thử.

---

## 4. Tiêu Chí Nghiệm Thu Định Lượng

1. **Tự động hóa hoàn toàn:** Chỉ cần 2 lệnh duy nhất để build và test trên bất kỳ máy tính nào có cài CMake và trình biên dịch C++:
   ```bash
   cmake -B build
   cmake --build build --target test
   ```
2. **Kháng lỗi tuyệt đối:** Dự án biên dịch sạch 100% không có bất kỳ warning nào dưới các cờ kiểm tra khắt khe nhất (`-Wall -Wextra -Wpedantic -Werror`).
3. **Kiểm toán bộ nhớ:** Bật cấu hình Sanitizer:
   ```bash
   cmake -B build -DENABLE_SANITIZERS=ON
   cmake --build build
   ctest --test-dir build
   ```
   Kết quả kiểm tra: **0 bytes leak, 0 undefined behavior**.
