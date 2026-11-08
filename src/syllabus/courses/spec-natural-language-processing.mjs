export const COURSE_SPEC_NATURAL_LANGUAGE_PROCESSING = {
  "id": "spec-natural-language-processing",
  "code": "CS-48",
  "title": "Chuyên sâu Xử lý ngôn ngữ tự nhiên (NLP)",
  "blockId": "block-7",
  "level": "specialization",
  "prerequisites": [
    {
      "courseId": "deep-learning-modern-models",
      "type": "required",
      "reason": "Cần nắm vững không gian nhúng, cơ chế Attention, kiến trúc Transformer và hàm mất mát Cross-Entropy."
    },
    {
      "courseId": "probability",
      "type": "required",
      "reason": "Cần quy tắc dây chuyền xác suất có điều kiện và lý thuyết thông tin cơ bản (entropy)."
    }
  ],
  "overview": [
    "Xử lý ngôn ngữ tự nhiên nghiên cứu cách biểu diễn, phân tích và sinh ngôn ngữ con người trong khi giữ rõ cấu trúc, xác suất và bối cảnh sử dụng. Nhánh này đi từ Unicode, token con, n-gram và embedding tới Seq2Seq và các kiểu Transformer tiền huấn luyện, rồi mở rộng sang tinh chỉnh, giải mã và truy hồi bổ sung. Những mô hình được giải thích qua mục tiêu học và thông tin được nhìn thấy, để người học phân biệt cơ chế thay vì chỉ gọi một API. Phần đánh giá tách độ đúng token hoặc span khỏi chất lượng văn bản và tính chính xác sự kiện. RAG và các biện pháp kiểm chứng giúp giải một số nhu cầu tri thức ngoài, nhưng vẫn cần kiểm lỗi truy hồi, trích dẫn và ranh giới tin cậy trước prompt injection. Syllabus giữ nền thống kê và bài toán ngôn ngữ bên cạnh LLM; một nhánh này chưa bao quát toàn bộ ngôn ngữ học tính toán, tiếng nói hoặc mọi phương pháp hậu huấn luyện đang phát triển."
  ],
  "boundaries": [
    "Nhánh chuyên sâu tự chọn; phân biệt rõ việc hiểu cơ chế tách token, xác suất tự hồi quy và đánh giá mô hình NLP với việc chỉ viết câu lệnh gọi chatbot.",
    "Nguồn SLP được cố định theo draft 19 August 2026; không dùng số chương của bản cũ. Nguyên nhân sinh sai là phân tích cơ chế và dữ liệu, không một định lý chung suy từ tự hồi quy."
  ],
  "sources": [
    {
      "sourceId": "jurafsky-slp3-2026",
      "locator": "19 August 2026 draft: Ch. 1–3, 5, 7–9, 11, 13, 18",
      "relationship": "primary"
    },
    {
      "sourceId": "d2l-ai",
      "locator": "§9.3; §10.6–10.8; §11.7; §15.1–15.10; §16.6",
      "relationship": "primary"
    },
    {
      "sourceId": "owasp-cheatsheets",
      "locator": "LLM Prompt Injection Prevention Cheat Sheet",
      "relationship": "primary"
    }
  ],
  "chapters": [
    {
      "id": "snlp-tokenization-language-models-embeddings",
      "overview": [
        "Ngôn ngữ tự nhiên có cấu trúc, biến thể và nhập nhằng mà chuỗi ký tự thuần chưa phản ánh đầy đủ. Chương này bắt đầu từ biểu diễn Unicode và các đơn vị token để hiểu đầu vào mô hình, rồi xây xác suất chuỗi và embedding. Những lựa chọn chuẩn hóa hoặc tách từ ảnh hưởng từ vựng, độ dài và cách đánh giá nên phải được coi là một phần mô hình. Các biểu diễn học từ ngữ cảnh mang thông tin sử dụng của từ, nhưng không tự trở thành một định nghĩa nghĩa từ hoặc sự thật về thế giới."
      ],
      "sources": [
        {
          "sourceId": "jurafsky-slp3-2026",
          "locator": "19 August 2026 draft: Ch. 2 Words and Tokens; Ch. 3 N-gram Language Models; Ch. 5 Embeddings",
          "relationship": "primary"
        },
        {
          "sourceId": "d2l-ai",
          "locator": "§9.3 Language Models; §15.1–15.6 Word Embeddings",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "snlp-unicode-tokenization-bpe",
          "title": "Unicode, tách từ và BPE",
          "level": "specialization",
          "paragraphs": [
            "Một ký tự người đọc cảm nhận có thể gồm nhiều code point, còn byte là đơn vị mã hóa khác; chuẩn hóa Unicode cần mục tiêu rõ để không làm mất phân biệt có ý nghĩa. Tách theo khoảng trắng không tương ứng với từ trong mọi ngôn ngữ, đặc biệt các ngôn ngữ không đánh dấu ranh giới từ như vậy. BPE học các phép gộp đơn vị thường gặp thành token con, còn WordPiece dùng một quy trình xây từ vựng khác. Token không phải một từ cố định; thay tokenizer làm đổi độ dài chuỗi, miền từ hiếm và cách so perplexity."
          ],
          "sources": [
            {
              "sourceId": "jurafsky-slp3-2026",
              "locator": "19 August 2026 draft: Ch. 2 Words and Tokens: Unicode; Byte-Pair Encoding; tokenization",
              "relationship": "primary"
            },
            {
              "sourceId": "d2l-ai",
              "locator": "§15.6 Subword Embedding",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "snlp-ngram-smoothing-perplexity",
          "title": "N-gram, làm trơn và perplexity",
          "level": "specialization",
          "paragraphs": [
            "Quy tắc dây chuyền biểu diễn xác suất chuỗi thành tích xác suất token theo toàn bộ tiền tố; n-gram xấp xỉ điều kiện bằng một ngữ cảnh hữu hạn. Đếm tần suất trực tiếp cho xác suất không ở những tổ hợp chưa gặp, nên smoothing phân phối lại khối xác suất thay vì chỉ thêm một giá trị tùy ý không chuẩn hóa. Perplexity là hàm mũ của cross-entropy trung bình theo đơn vị đã chọn trên tập giữ lại. So sánh chỉ có nghĩa khi cùng tokenizer, dữ liệu và protocol; perplexity thấp chưa tự bảo đảm văn bản đúng sự thật hoặc hữu ích cho một tác vụ."
          ],
          "sources": [
            {
              "sourceId": "jurafsky-slp3-2026",
              "locator": "19 August 2026 draft: Ch. 3 N-gram Language Models; Appendix C Kneser-Ney Smoothing",
              "relationship": "primary"
            },
            {
              "sourceId": "d2l-ai",
              "locator": "§9.3 Language Models",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "snlp-word2vec-negative-sampling",
          "title": "Embedding phân tán và Word2Vec",
          "level": "specialization",
          "paragraphs": [
            "Word2Vec học vector để các cặp từ và ngữ cảnh quan sát được có điểm tương thích cao hơn những cặp lấy mẫu âm theo mục tiêu đã định. Skip-gram dự đoán ngữ cảnh từ từ trung tâm, còn CBOW kết hợp ngữ cảnh để dự đoán từ trung tâm. Negative sampling là một mục tiêu phân biệt hiệu quả, không đồng nhất với tính đầy đủ softmax cho mọi từ. Vector tĩnh gán một biểu diễn cho từ nên trộn nhiều nghĩa; khoảng cách hoặc phép tương tự chịu ảnh hưởng dữ liệu, tần suất và thiên kiến, không phải phép đo nghĩa tuyệt đối."
          ],
          "sources": [
            {
              "sourceId": "jurafsky-slp3-2026",
              "locator": "19 August 2026 draft: Ch. 5 Embeddings",
              "relationship": "primary"
            },
            {
              "sourceId": "d2l-ai",
              "locator": "§15.1 Word Embedding; §15.2 Approximate Training; §15.4 Pretraining word2vec",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Tách từ con (Subword Tokenization), Mô hình ngôn ngữ xác suất và Không gian nhúng từ"
    },
    {
      "id": "snlp-seq2seq-pretrained-transformers",
      "overview": [
        "Sinh chuỗi có thể được mô hình hóa bằng phân phối điều kiện từng bước, nhưng kiến trúc huấn luyện và thuật toán giải mã giải những phần khác nhau. Chương này nối encoder–decoder và attention với các mô hình Transformer tiền huấn luyện, sau đó phân biệt thích nghi trọng số với cách chọn token lúc suy luận. Mask quyết định thông tin mô hình được nhìn, còn dữ liệu hậu huấn luyện định hình hành vi mong muốn. Không có một phương pháp giải mã hoặc tinh chỉnh luôn tốt nhất cho mọi tác vụ và ngân sách."
      ],
      "sources": [
        {
          "sourceId": "d2l-ai",
          "locator": "§10.6–10.8 Seq2Seq and Beam Search; §11.7 Transformer; §15.8–15.10 BERT",
          "relationship": "primary"
        },
        {
          "sourceId": "jurafsky-slp3-2026",
          "locator": "19 August 2026 draft: Ch. 7 Transformers and Pretraining; Ch. 8 Post-training; Ch. 9 Masked Language Models",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "snlp-seq2seq-teacher-forcing",
          "title": "Seq2Seq và huấn luyện có điều kiện",
          "level": "specialization",
          "paragraphs": [
            "Encoder–decoder biểu diễn đầu vào rồi tạo chuỗi đích theo từng token, với attention giúp truy cập thông tin nguồn thay vì nén toàn bộ vào một vector cố định. Teacher forcing dùng tiền tố đích thật khi huấn luyện, còn suy luận thường dùng token đã sinh, tạo khác biệt phân phối ngữ cảnh. Mất mát cần bỏ qua padding và giữ đúng lệch một vị trí giữa đầu vào decoder với nhãn. Việc nhìn thấy tương lai qua mask sai tạo điểm huấn luyện tốt giả; chuẩn bị dữ liệu đúng là điều kiện trước khi so sánh kiến trúc."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§10.6 Encoder–Decoder Architecture; §10.7 Sequence-to-Sequence Learning; §11.7 Transformer Architecture",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "snlp-decoding-beam-sampling",
          "title": "Greedy, beam, temperature và nucleus sampling",
          "level": "specialization",
          "paragraphs": [
            "Greedy chọn token xác suất cao nhất mỗi bước nhưng không bảo đảm chuỗi xác suất cao nhất toàn cục. Beam search giữ nhiều tiền tố có điểm tốt theo một tiêu chí, vẫn là tìm kiếm gần đúng và có thể cần xử lý thiên lệch độ dài. Temperature thay thang logits trước softmax; top-p giữ một tập token có khối xác suất tích lũy phù hợp rồi chuẩn hóa lại. Chúng thay phân phối lấy mẫu, không thêm kiến thức hoặc bảo đảm sự thật. Dịch máy, trích xuất và viết mở có yêu cầu khác nhau nên lựa chọn giải mã phải được đánh giá theo tác vụ."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§10.8 Beam Search",
              "relationship": "primary"
            },
            {
              "sourceId": "jurafsky-slp3-2026",
              "locator": "19 August 2026 draft: Ch. 7 Transformers and Pretraining: decoding and sampling",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "snlp-encoder-decoder-causal",
          "title": "BERT, tự hồi quy và ngữ cảnh hai chiều",
          "level": "specialization",
          "paragraphs": [
            "BERT học khôi phục token bị che với ngữ cảnh hai chiều, tạo biểu diễn hữu ích cho phân lớp hoặc gán nhãn. Decoder tự hồi quy học xác suất token tiếp theo với causal mask, phù hợp sinh nối tiếp; encoder–decoder mô hình hóa chuỗi đích có điều kiện trên đầu vào. Ba dạng khác nhau về mục tiêu và thông tin được nhìn, không chỉ số lớp hoặc tên thương mại. Biểu diễn contextual thay đổi theo ngữ cảnh nhưng vẫn dựa trên dữ liệu và tối ưu; việc một vector chứa thông tin có thể giải mã chưa chứng minh nó biểu diễn tri thức theo nghĩa con người."
          ],
          "sources": [
            {
              "sourceId": "d2l-ai",
              "locator": "§15.8 Bidirectional Encoder Representations from Transformers; §15.10 Pretraining BERT",
              "relationship": "primary"
            },
            {
              "sourceId": "jurafsky-slp3-2026",
              "locator": "19 August 2026 draft: Ch. 7 Transformers and Pretraining; Ch. 9 Masked Language Models",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "snlp-finetuning-lora-data",
          "title": "Tinh chỉnh, LoRA và giới hạn dữ liệu",
          "level": "specialization",
          "paragraphs": [
            "Supervised fine-tuning cập nhật mô hình bằng ví dụ đầu vào đầu ra phù hợp tác vụ; instruction tuning là một cách tổ chức dữ liệu để học đáp ứng yêu cầu đa dạng. LoRA giữ trọng số gốc và học cập nhật qua tích hai ma trận hạng thấp, giảm số tham số cần huấn luyện cùng một phần chi phí trạng thái tối ưu. Nó không tự sửa dữ liệu sai, không bảo đảm giữ mọi năng lực cũ và không loại hết bộ nhớ activation. Phân chia dữ liệu, quyền dùng văn bản và đánh giá sau tinh chỉnh vẫn cần được thiết kế như một thí nghiệm học máy."
          ],
          "sources": [
            {
              "sourceId": "jurafsky-slp3-2026",
              "locator": "19 August 2026 draft: Ch. 8 Post-training: Supervised Fine-Tuning; Parameter-Efficient Fine-Tuning; LoRA",
              "relationship": "primary"
            },
            {
              "sourceId": "d2l-ai",
              "locator": "§16.6 Fine-Tuning BERT",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Kiến trúc Seq2Seq, Tìm kiếm chùm (Beam Search) và Mô hình Transformer tiền huấn luyện"
    },
    {
      "id": "snlp-evaluation-retrieval-hallucination",
      "overview": [
        "Đánh giá NLP cần phân biệt khớp nhãn, chất lượng văn bản, độ chính xác sự kiện và tính có căn cứ. Chương này xây metric theo tác vụ trước khi nghiên cứu truy hồi bổ sung để đưa tài liệu ngoài vào quá trình trả lời. Xác suất chuỗi cao không phải chứng nhận mệnh đề đúng; lỗi có thể đến từ dữ liệu, truy hồi, suy luận hoặc cách yêu cầu đầu ra. Nội dung ngoài cũng có thể chứa chỉ dẫn không được tin, nên nguồn tri thức và quyền điều khiển hệ thống phải được tách bằng thiết kế."
      ],
      "sources": [
        {
          "sourceId": "jurafsky-slp3-2026",
          "locator": "19 August 2026 draft: Ch. 11 Information Retrieval and RAG; Ch. 18 Sequence Labeling; Ch. 8 Post-training",
          "relationship": "primary"
        },
        {
          "sourceId": "owasp-cheatsheets",
          "locator": "LLM Prompt Injection Prevention Cheat Sheet",
          "relationship": "primary"
        }
      ],
      "topics": [
        {
          "id": "snlp-task-metrics-human-evaluation",
          "title": "Metric cho nhãn, span và văn bản sinh",
          "level": "specialization",
          "paragraphs": [
            "Phân lớp cần metric theo lớp cùng cách lấy trung bình; NER thường đánh giá một span đúng khi cả ranh giới và loại khớp theo protocol, khác độ đúng từng token. Với sinh văn bản, mức trùng n-gram như BLEU hoặc ROUGE chỉ đo những quan hệ cụ thể với tham chiếu và có thể bỏ sót diễn đạt tương đương hoặc lỗi sự thật. Đánh giá người cần rubric, ví dụ chuẩn và kiểm độ nhất quán, còn dùng mô hình làm giám khảo có sai lệch riêng. Nhiều metric phối hợp với phân tích lỗi thường có ý nghĩa hơn một điểm tổng duy nhất."
          ],
          "sources": [
            {
              "sourceId": "jurafsky-slp3-2026",
              "locator": "19 August 2026 draft: Ch. 18 Sequence Labeling; Ch. 13 Machine Translation: evaluation; Ch. 8 Post-training: evaluation",
              "relationship": "primary"
            },
            {
              "sourceId": "d2l-ai",
              "locator": "§16.6 Sequence-Level and Token-Level Applications",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "snlp-retrieval-rag-grounding",
          "title": "Truy hồi, xếp hạng và RAG",
          "level": "specialization",
          "paragraphs": [
            "Truy hồi tìm tài liệu có thể liên quan bằng tín hiệu từ khóa như BM25 hoặc vector dày, rồi có thể rerank trước khi đưa các đoạn vào ngữ cảnh mô hình. RAG vì vậy có ít nhất hai phần lỗi riêng: không lấy được bằng chứng cần thiết và sinh câu trả lời không bám bằng chứng đã lấy. Chia đoạn, metadata, cập nhật chỉ mục và quyền truy cập ảnh hưởng kết quả cùng embedding. Một trích dẫn chỉ hữu ích khi đoạn thật sự hỗ trợ mệnh đề; có URL trong đầu ra không tự chứng minh mô hình đã dùng nguồn đúng hoặc nguồn đó còn đáng tin."
          ],
          "sources": [
            {
              "sourceId": "jurafsky-slp3-2026",
              "locator": "19 August 2026 draft: Ch. 11 Information Retrieval and RAG: sparse retrieval; dense retrieval; retrieval-augmented generation",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "snlp-hallucination-abstention",
          "title": "Thông tin sai, độ tin cậy và từ chối phù hợp",
          "level": "specialization",
          "paragraphs": [
            "Mục tiêu dự đoán token thưởng việc khớp phân phối văn bản quan sát, không trực tiếp kiểm mọi mệnh đề với một kho sự thật đầy đủ. Điều này giúp giải thích vì sao văn bản có thể trôi chảy nhưng sai, song không phải một định lý rằng mọi câu sinh đều bịa hoặc mọi lỗi có cùng nguyên nhân. Kiểm chứng nguồn ngoài, giới hạn câu hỏi, yêu cầu dẫn bằng chứng và cho phép trả chưa đủ dữ liệu có thể giảm một số rủi ro. Mức tự tin bằng lời không mặc nhiên được calibration; đánh giá cần kiểm thực tế trên tác vụ và miền sử dụng."
          ],
          "sources": [
            {
              "sourceId": "jurafsky-slp3-2026",
              "locator": "19 August 2026 draft: Ch. 8 Post-training: honesty and evaluation; Ch. 11 RAG; Ch. 1 Introduction",
              "relationship": "primary"
            }
          ]
        },
        {
          "id": "snlp-prompt-injection-trust-boundaries",
          "title": "Prompt injection và ranh giới dữ liệu",
          "level": "specialization",
          "paragraphs": [
            "Prompt injection xảy ra khi nội dung không được tin tìm cách đổi chỉ dẫn mà mô hình hoặc công cụ đang phải tuân theo, ví dụ một trang truy hồi tự nhận có quyền yêu cầu gửi dữ liệu. Lọc vài chuỗi cấm không tạo bảo đảm vì chỉ dẫn có thể được diễn đạt nhiều cách. Quyền công cụ tối thiểu, kiểm tham số hành động và tách quyền quyết định khỏi văn bản nguồn làm giảm tác động. Tài liệu ngoài được dùng như dữ liệu để đánh giá bằng chứng, không được tự cấp quyền mới; bước kiểm người cần được đặt ở hành động có hệ quả phù hợp."
          ],
          "sources": [
            {
              "sourceId": "owasp-cheatsheets",
              "locator": "LLM Prompt Injection Prevention Cheat Sheet: trust boundaries; tool permissions; indirect injection",
              "relationship": "primary"
            }
          ]
        }
      ],
      "title": "Đánh giá tác vụ NLP, Kết hợp truy hồi tri thức và Giới hạn của mô hình ngôn ngữ"
    }
  ]
};
