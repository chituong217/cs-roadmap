export const COURSE_COMPUTER_GRAPHICS = {
  "id": "computer-graphics",
  "code": "CS-38",
  "title": "Đồ họa máy tính",
  "blockId": "block-6",
  "level": "core",
  "prerequisites": [
    {
      "courseId": "linear-algebra",
      "type": "required",
      "reason": "Cần phép nhân ma trận, tích vô hướng, tích có hướng, đổi cơ sở và biến đổi tuyến tính."
    },
    {
      "courseId": "multivariable-calculus-optimization",
      "type": "required",
      "reason": "Cần vector pháp tuyến mặt cong, hình học không gian và tích phân mặt cơ sở."
    },
    {
      "courseId": "cpp-memory-model",
      "type": "required",
      "reason": "Cần viết và tối ưu hóa bộ kết xuất (renderer) trên mảng bộ nhớ khung hình (framebuffer)."
    }
  ],
  "overview": [
    "Đồ họa máy tính nghiên cứu cách biểu diễn cảnh và tạo hình ảnh từ mô hình hình học, vật liệu, ánh sáng và camera. Môn học bắt đầu với pixel, màu và lấy mẫu, sau đó dùng đại số tuyến tính để theo dấu một điểm từ hệ cục bộ tới ảnh. Hai hướng kết xuất được phát triển song song về ý tưởng: rasterization xác định độ phủ tam giác và quản lý độ sâu, còn ray tracing tìm giao tia rồi ước lượng tương tác ánh sáng. Nội suy phối cảnh, texture, chống răng cưa, phản xạ, khúc xạ và BVH đều được giải thích từ vấn đề chúng giải quyết. Các biểu diễn số và quy ước tọa độ phải nhất quán để tránh kết quả có vẻ đẹp nhưng sai hình học hoặc màu. Nội dung ưu tiên một mô hình phần mềm đủ nhỏ để hiểu cơ chế trước khi liên hệ GPU. Chuyển động và lấy mẫu thời gian cung cấp nền nhập môn hoạt hình; mô phỏng vật lý, kết xuất phổ và hoạt hình nhân vật đầy đủ là những hướng học tiếp."
  ],
  "boundaries": [
    "Trọng tâm là hiểu toán học của phép chiếu, rasterization và ray tracing bằng bộ kết xuất phần mềm nhỏ chạy được trên CPU trước khi dùng API phần cứng GPU.",
    "Sử dụng In One Weekend cho tia/vật liệu, The Next Week cho BVH/chuyển động, LearnOpenGL và Scratchapixel cho rasterization; không gán mọi nội dung vào một cuốn ray tracing."
  ],
  "sources": [
    {
      "sourceId": "raytracing-in-one-weekend",
      "locator": "Series v4.0.2: In One Weekend; The Next Week: Motion Blur and BVH",
      "relationship": "primary"
    },
    {
      "sourceId": "learnopengl",
      "locator": "Transformations; Coordinate Systems; Textures; Depth testing; Gamma Correction; Advanced Lighting",
      "relationship": "primary"
    },
    {
      "sourceId": "scratchapixel-rasterization",
      "locator": "Rasterization chapter collection",
      "relationship": "primary"
    },
    {
      "sourceId": "pbrt-4e",
      "locator": "Ch. 8 Sampling and Reconstruction",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "cg-color-images-sampling",
      "overview": [
        "Ảnh số là một biểu diễn rời rạc của lượng ánh sáng đến cảm biến hoặc màn ảnh, không chỉ một bảng số có thể cộng tùy ý. Chương này phân biệt tín hiệu tuyến tính, cách mã hóa màu và việc lấy mẫu theo không gian. Các đường chéo răng cưa, chi tiết nhấp nháy hoặc màu pha sai đều liên hệ tới lựa chọn biểu diễn và lọc. Mục tiêu là hiểu một pixel đang ước lượng đại lượng gì trước khi xây một thuật toán tạo ảnh nhiều hình học hơn."
      ],
      "sources": [
        {
          "sourceId": "raytracing-in-one-weekend",
          "locator": "In One Weekend: Output an Image; Antialiasing; Gamma correction",
          "relationship": "primary"
        },
        {
          "sourceId": "learnopengl",
          "locator": "Advanced Lighting: Gamma Correction",
          "relationship": "primary"
        },
        {
          "sourceId": "pbrt-4e",
          "locator": "Ch. 8 Sampling and Reconstruction",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "cg-rgb-alpha-linear-light",
          "title": "Pixel, RGB, alpha và ánh sáng tuyến tính",
          "level": "core",
          "paragraphs": [
            "Một pixel có thể lưu các kênh RGB biểu diễn màu theo một không gian màu và một hàm truyền đã chọn. Mã sRGB không tuyến tính theo ánh sáng, nên trộn màu hoặc cộng đóng góp chiếu sáng cần chuyển về miền tuyến tính rồi mã hóa lại khi xuất ảnh. Alpha thường mô tả độ phủ hoặc độ trong theo mô hình compositing, không tự là một kênh độ sáng. Dữ liệu premultiplied alpha nhân màu với alpha trước khi ghép, nên phải dùng công thức tương ứng; trộn hai quy ước dễ tạo viền sai."
          ],
          "sources": [
            {
              "sourceId": "learnopengl",
              "locator": "Advanced Lighting/Gamma-Correction; Advanced OpenGL/Blending",
              "relationship": "primary"
            },
            {
              "sourceId": "raytracing-in-one-weekend",
              "locator": "In One Weekend: Gamma correction",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cg-sampling-nyquist-aliasing",
          "title": "Lấy mẫu không gian và aliasing",
          "level": "core",
          "paragraphs": [
            "Lưới pixel lấy các thông tin rời rạc từ một tín hiệu liên tục theo vị trí. Tín hiệu chứa tần số cao hơn khả năng lấy mẫu có thể xuất hiện thành mẫu giả hoặc răng cưa, gọi là aliasing. Định lý lấy mẫu áp dụng cho tín hiệu bị giới hạn băng tần với tần số lấy mẫu đủ cao; cảnh hình học có biên sắc không tự thỏa giả thiết ấy. Lọc trước khi giảm mẫu và tái tạo bằng bộ lọc thích hợp làm rõ sự khác nhau giữa thêm mẫu và chỉ làm mờ ảnh sau khi thông tin đã bị trộn sai."
          ],
          "sources": [
            {
              "sourceId": "pbrt-4e",
              "locator": "Ch. 8 Sampling and Reconstruction; §8.1 Sampling Theory",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cg-antialiasing-integration",
          "title": "Supersampling và ước lượng giá trị pixel",
          "level": "core",
          "paragraphs": [
            "Thay vì bắn một tia cố định ở tâm pixel, supersampling lấy nhiều mẫu trong miền pixel rồi tổng hợp để ước lượng đóng góp trung bình có lọc. Lấy mẫu ngẫu nhiên chuyển một số mẫu aliasing có cấu trúc thành nhiễu; tăng số mẫu thường giảm nhiễu nhưng có chi phí tính. Trung bình phải được tính trong miền ánh sáng tuyến tính trước mã hóa gamma. MSAA chủ yếu tăng lấy mẫu độ phủ trong đường raster nên không tự chống mọi loại aliasing do shader hoặc texture; mỗi loại tín hiệu cần phương pháp lấy mẫu phù hợp."
          ],
          "sources": [
            {
              "sourceId": "raytracing-in-one-weekend",
              "locator": "In One Weekend: Antialiasing",
              "relationship": "primary"
            },
            {
              "sourceId": "pbrt-4e",
              "locator": "Ch. 8 Sampling and Reconstruction",
              "relationship": "primary"
            },
            {
              "sourceId": "learnopengl",
              "locator": "Advanced OpenGL/Anti Aliasing",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Biểu diễn ảnh số, Không gian màu, Lấy mẫu (Sampling) và Chống răng cưa"
    },
    {
      "id": "cg-transforms-homogeneous-camera",
      "overview": [
        "Hình học đi qua nhiều hệ tọa độ trước khi thành vị trí trên màn hình. Chương này dùng ma trận đồng nhất để phối hợp quay, co giãn, tịnh tiến và đổi góc nhìn, đồng thời giữ rõ thứ tự nhân và quy ước vector. Camera được trình bày như một phép xác định các tia hoặc phép chiếu, không phải vật thể thần kỳ làm mọi điểm tự thành pixel. Phép chia phối cảnh là bước phi tuyến quan trọng giải thích vì sao nội suy sau chiếu cần điều chỉnh."
      ],
      "sources": [
        {
          "sourceId": "learnopengl",
          "locator": "Getting Started: Transformations; Coordinate Systems; Camera",
          "relationship": "primary"
        },
        {
          "sourceId": "raytracing-in-one-weekend",
          "locator": "In One Weekend: Positionable Camera",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "cg-homogeneous-affine",
          "title": "Tọa độ đồng nhất và chuỗi biến đổi",
          "level": "core",
          "paragraphs": [
            "Trong tọa độ đồng nhất, điểm ba chiều được biểu diễn với thành phần w khác không, thường chuẩn hóa về một, còn vector hướng dùng w bằng không. Ma trận 4×4 vì vậy có thể chứa cả tịnh tiến cùng quay và co giãn. Thứ tự nhân không giao hoán: quay rồi tịnh tiến thường cho kết quả khác tịnh tiến rồi quay. Với quy ước vector cột, biến đổi áp dụng trước nằm bên phải. Pháp tuyến dưới co giãn không đều cần biến đổi bằng nghịch đảo chuyển vị phần tuyến tính phù hợp để giữ vuông góc với tiếp tuyến."
          ],
          "sources": [
            {
              "sourceId": "learnopengl",
              "locator": "Getting Started/Transformations; Getting Started/Coordinate Systems; Lighting/Basic Lighting",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cg-camera-view-projection",
          "title": "Camera, view và phép chiếu",
          "level": "core",
          "paragraphs": [
            "Ma trận model đưa tọa độ cục bộ ra thế giới, view đưa thế giới về hệ camera, còn projection đưa tới clip space. Chiếu trực giao giữ kích thước theo độ sâu trong mô hình cơ bản; chiếu phối cảnh làm vật xa nhỏ đi bằng phép chia cho w sau biến đổi. Camera ray tracing có thể tạo tia trực tiếp từ vị trí camera qua mặt ảnh, nhưng dùng cùng ý niệm cơ sở và trường nhìn. Cần nêu hệ tay trái hay phải, hướng nhìn và miền độ sâu vì các API có thể chọn quy ước khác nhau."
          ],
          "sources": [
            {
              "sourceId": "learnopengl",
              "locator": "Getting Started/Coordinate Systems; Getting Started/Camera",
              "relationship": "primary"
            },
            {
              "sourceId": "raytracing-in-one-weekend",
              "locator": "In One Weekend: Positionable Camera; Camera Viewing Geometry",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cg-clipping-perspective-divide",
          "title": "Frustum, clipping và chia phối cảnh",
          "level": "core",
          "paragraphs": [
            "Viewing frustum giới hạn vùng có thể nhìn thấy bằng các mặt phẳng near, far và biên trường nhìn. Tam giác giao biên cần được cắt trong không gian phù hợp trước khi chia phối cảnh; bỏ cả tam giác chỉ vì một đỉnh ngoài sẽ mất phần còn nhìn được. Phép chia x,y,z cho w đưa tọa độ đồng nhất về tọa độ chuẩn hóa, rồi viewport ánh xạ ra pixel. Near quá gần so với far có thể làm phân bố độ chính xác depth buffer bất lợi trong phép chiếu phối cảnh thông thường."
          ],
          "sources": [
            {
              "sourceId": "learnopengl",
              "locator": "Getting Started/Coordinate Systems; Advanced OpenGL/Depth testing",
              "relationship": "primary"
            },
            {
              "sourceId": "scratchapixel-rasterization",
              "locator": "Rasterization: The Projection Stage",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Biến đổi hình học 3D, Tọa độ đồng nhất (Homogeneous Coordinates) và Mô hình Camera"
    },
    {
      "id": "cg-rasterization-pipeline-zbuffer-textures",
      "overview": [
        "Rasterization hỏi những mẫu màn hình nào được một primitive như tam giác che phủ, rồi tính thuộc tính cần cho màu và kiểm tra độ sâu. Chương này tách độ phủ, nội suy, shading và compositing để hiểu lỗi xuất hiện ở đâu. Barycentric là công cụ biểu diễn vị trí trong tam giác, nhưng trọng số trong ảnh chiếu không dùng trực tiếp cho mọi thuộc tính ba chiều. Texture là một tín hiệu được lấy mẫu thêm, nên bộ lọc và mức chi tiết trở thành phần cần thiết của kết xuất đúng."
      ],
      "sources": [
        {
          "sourceId": "scratchapixel-rasterization",
          "locator": "Rasterization: Rasterization Stage; Visibility; Perspective Correct Interpolation",
          "relationship": "primary"
        },
        {
          "sourceId": "learnopengl",
          "locator": "Getting Started/Textures; Advanced OpenGL/Depth testing",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "cg-barycentric-coverage-interpolation",
          "title": "Độ phủ tam giác và nội suy phối cảnh",
          "level": "core",
          "paragraphs": [
            "Tọa độ trọng tâm biểu diễn điểm bằng tổ hợp ba đỉnh với tổng trọng số một, hỗ trợ kiểm tra điểm trong tam giác và nội suy thuộc tính. Sau chiếu phối cảnh, một thuộc tính a ở đỉnh được nội suy bằng cách gộp a_i/w_i và 1/w_i theo trọng số màn hình rồi lấy tỷ số, thay vì gộp a_i tuyến tính trực tiếp. Cách này giữ quan hệ trên bề mặt trước chiếu. Quy tắc xử lý cạnh chung cần nhất quán để hai tam giác kề không tạo khe hở hoặc vẽ đôi mẫu biên."
          ],
          "sources": [
            {
              "sourceId": "scratchapixel-rasterization",
              "locator": "Perspective Correct Interpolation and Vertex Attributes; Rasterization Stage",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cg-zbuffer-visibility",
          "title": "Z-buffer và giới hạn độ nhìn thấy",
          "level": "core",
          "paragraphs": [
            "Z-buffer lưu độ sâu tốt nhất đã ghi tại mỗi mẫu và chỉ chấp nhận fragment thỏa phép so sánh đã chọn. Với vật đục và trạng thái depth phù hợp, thứ tự vẽ không cần sắp toàn cảnh từ gần tới xa để có bề mặt trước nhất. Độ sâu hữu hạn có thể làm hai bề mặt gần nhau gây z-fighting; điều này liên hệ phép chiếu và độ chính xác lưu. Trong suốt cần chính sách compositing và thường có vấn đề thứ tự riêng, nên depth test không tự giải mọi bài toán nhìn thấy."
          ],
          "sources": [
            {
              "sourceId": "learnopengl",
              "locator": "Advanced OpenGL/Depth testing; Advanced OpenGL/Blending",
              "relationship": "primary"
            },
            {
              "sourceId": "scratchapixel-rasterization",
              "locator": "The Visibility Problem, the Depth Buffer Algorithm and Depth Interpolation",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cg-texture-filtering-mipmap",
          "title": "UV, lọc song tuyến và mipmap",
          "level": "core",
          "paragraphs": [
            "Tọa độ UV ánh xạ điểm bề mặt sang vị trí trên một ảnh texture; cách lặp hoặc chặn biên và cách nội suy cần được quy định. Lọc song tuyến trộn bốn texel gần mẫu nhưng khi một pixel phủ nhiều texel, chỉ lọc ở mức gốc vẫn có thể aliasing. Mipmap lưu các mức ảnh đã lọc giảm dần để chọn độ phân giải phù hợp với footprint; lọc giữa hai mức giảm chuyển mức đột ngột. Với footprint xiên kéo dài, một mức vô hướng không mô tả đủ hướng nên anisotropic filtering có thể hữu ích."
          ],
          "sources": [
            {
              "sourceId": "learnopengl",
              "locator": "Getting Started/Textures: Texture Filtering; Mipmaps",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Đường ống Rasterization, Nội suy trọng tâm (Barycentric), Z-Buffer và Kết cấu (Textures)"
    },
    {
      "id": "cg-raytracing-shading-animation",
      "overview": [
        "Dò tia giải câu hỏi giao hình học theo từng tia thay vì chiếu mọi tam giác lên màn hình trước. Chương này đi từ phương trình tia và giao vật thể đến mô hình phản xạ, khúc xạ và tăng tốc bằng thể tích bao. Ray tracing là cách tìm và theo đường tia, còn mức mô phỏng ánh sáng phụ thuộc mô hình shading và cách tích phân. Chuyển động theo thời gian được đưa vào cả vị trí vật và thời điểm mẫu để phân biệt ảnh động liên tiếp với nhòe chuyển động trong một khung hình."
      ],
      "sources": [
        {
          "sourceId": "raytracing-in-one-weekend",
          "locator": "In One Weekend: Rays; Spheres; Materials; Positionable Camera; The Next Week: Motion Blur; Bounding Volume Hierarchies",
          "relationship": "primary"
        },
        {
          "sourceId": "learnopengl",
          "locator": "Advanced Lighting/Advanced Lighting",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "cg-ray-intersection-bvh",
          "title": "Giao tia và phân cấp thể tích bao",
          "level": "core",
          "paragraphs": [
            "Tia P(t)=A+t b gồm gốc A, hướng b và miền tham số t được phép; b không bắt buộc đơn vị nếu phép tính dùng nhất quán. Giao mặt cầu giải phương trình bậc hai và chọn nghiệm trong khoảng hợp lệ; giao tam giác kiểm vị trí mặt phẳng và miền trọng tâm. Epsilon hoặc khoảng t tối thiểu tránh tự giao cần gắn với thang cảnh. BVH nhóm vật trong các hộp bao để bỏ các nhóm không giao tia, tăng tốc nhiều cảnh nhưng không tạo bảo đảm O(log n) cho mọi phân bố và mọi tia."
          ],
          "sources": [
            {
              "sourceId": "raytracing-in-one-weekend",
              "locator": "In One Weekend: Rays, a Simple Camera, and Background; Adding a Sphere; The Next Week: Bounding Volume Hierarchies",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cg-shading-reflection-refraction",
          "title": "Mô hình chiếu sáng và tán xạ vật liệu",
          "level": "core",
          "paragraphs": [
            "Lambertian mô tả phản xạ khuếch tán với đáp ứng không phụ thuộc hướng quan sát trong mô hình lý tưởng, còn gương phản hướng tia theo pháp tuyến. Điện môi cần định luật Snell và trường hợp phản xạ toàn phần; tỷ lệ phản xạ và truyền còn thay đổi theo góc. Blinn–Phong là mô hình chiếu sáng cục bộ dựa trên hướng pháp tuyến và vector nửa để tạo thành phần sáng bóng, không tự giải vận chuyển ánh sáng toàn cục. Path tracing lấy mẫu các hướng tán xạ qua nhiều lần gặp bề mặt để ước lượng tích phân ánh sáng với nhiễu hữu hạn mẫu."
          ],
          "sources": [
            {
              "sourceId": "raytracing-in-one-weekend",
              "locator": "In One Weekend: Diffuse Materials; Metal; Dielectrics",
              "relationship": "primary"
            },
            {
              "sourceId": "learnopengl",
              "locator": "Advanced Lighting/Advanced Lighting: Blinn-Phong",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "cg-time-animation-motionblur",
          "title": "Nội suy chuyển động và lấy mẫu thời gian",
          "level": "core",
          "paragraphs": [
            "Hoạt hình mô tả trạng thái cảnh theo thời gian, chẳng hạn nội suy tuyến tính vị trí giữa hai mốc. Nội suy từng phần tử ma trận quay không tự giữ tính trực giao, nên chuyển động quay cần biểu diễn và nội suy phù hợp khi học sâu hơn. Một khung hình có motion blur tích hợp tín hiệu trong khoảng màn trập mở; bắn tia với thời điểm ngẫu nhiên rồi đánh giá vật thể tại thời điểm đó là một cách Monte Carlo. Tăng số khung hình và tích hợp thời gian trong mỗi khung là hai lựa chọn khác nhau."
          ],
          "sources": [
            {
              "sourceId": "raytracing-in-one-weekend",
              "locator": "The Next Week: Motion Blur; Introduction of SpaceTime Ray Tracing",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Dò tia (Ray Tracing), Mô hình chiếu sáng bề mặt và Nguyên lý hoạt hình cơ sở"
    }
  ]
};
