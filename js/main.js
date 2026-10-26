/* ==========================================================================
   PHÒNG THÍ NGHIỆM MÁY BIẾN ÁP HBT VIỆT NAM - INTERACTIVE SCRIPTS
   Bao gồm: Tra cứu tiêu chuẩn TCVN/IEC/IEEE, Modal chi tiết & Zalo Smart Inquiry
   ========================================================================== */

const FALLBACK_STANDARDS = [
  {
    "id": "tcvn-6306-1",
    "code": "TCVN 6306-1:2015 (IEC 60076-1:2011)",
    "category": "TCVN 6306",
    "tags": [
      "TCVN 6306",
      "IEC 60076",
      "Routine Test",
      "Dung sai"
    ],
    "title": "Máy biến áp điện lực – Phần 1: Quy định chung",
    "summary": "Quy định các điều kiện làm việc, định nghĩa, dung sai cho phép của các thông số kỹ thuật và phân loại các hạng mục thử nghiệm thường xuyên (Routine), điển hình (Type) và đặc biệt (Special).",
    "scope": "Áp dụng cho máy biến áp điện lực ba pha và một pha (kể cả máy biến áp tự ngẫu) trừ một số loại máy biến áp nhỏ và máy biến áp chuyên dụng.",
    "parameters": [
      "Dung sai tổn hao tổng (P0 + Pk): +10% của tổng tổn hao",
      "Dung sai tổn hao thành phần (P0 hoặc Pk): +15% của mỗi thành phần (nhưng không vượt quá dung sai tổng +10%)",
      "Dung sai tỷ số biến áp lúc không tải: ±0.5% tỷ số công bố hoặc ±1/10 phần trăm trở kháng ngắn mạch thực tế",
      "Dung sai dòng điện không tải (I0): +30% của dòng điện không tải công bố",
      "Danh mục phép thử thường xuyên (Routine Tests): Đo điện trở cuộn dây, đo tỷ số biến và kiểm tra độ lệch pha, đo trở kháng ngắn mạch và tổn hao có tải, đo tổn hao và dòng điện không tải, thử nghiệm điện môi."
    ],
    "status_note": "Thông tin tham chiếu tiêu chuẩn kỹ thuật – Cần đối chiếu văn bản tiêu chuẩn gốc hiện hành khi nghiệm thu pháp lý."
  },
  {
    "id": "tcvn-6306-2",
    "code": "TCVN 6306-2:2006 (IEC 60076-2)",
    "category": "TCVN 6306",
    "tags": [
      "TCVN 6306",
      "IEC 60076",
      "Type Test",
      "Tăng nhiệt"
    ],
    "title": "Máy biến áp điện lực – Phần 2: Độ tăng nhiệt",
    "summary": "Quy định giới hạn độ tăng nhiệt của lớp dầu trên cùng, cuộn dây, lõi từ và phương pháp thử nghiệm độ tăng nhiệt (Temperature Rise Test) đối với máy biến áp ngâm trong chất lỏng.",
    "scope": "Áp dụng cho phép thử điển hình (Type Test) đánh giá khả năng tản nhiệt và giới hạn nhiệt độ khi máy biến áp vận hành ở công suất định mức.",
    "parameters": [
      "Giới hạn độ tăng nhiệt của lớp dầu trên cùng (Top oil): 60 K (khi máy biến áp có bình giãn dầu hoặc hàn kín)",
      "Giới hạn độ tăng nhiệt trung bình của cuộn dây (ONAN/ONAF/OFAF): 65 K",
      "Giới hạn độ tăng nhiệt điểm nóng nhất cuộn dây (Hot-spot): 78 K",
      "Phương pháp thử nghiệm: Phương pháp ngắn mạch (Short-circuit method) nạp tổng tổn hao (P0 + Pk) cho đến khi tốc độ thay đổi nhiệt độ dầu trên cùng xuống dưới 1 K/giờ và duy trì thêm 3 giờ.",
      "Xác định nhiệt độ trung bình cuộn dây bằng phương pháp đo sự thay đổi điện trở một chiều sau khi cắt nguồn."
    ],
    "status_note": "Thông tin tham chiếu tiêu chuẩn kỹ thuật – Cần đối chiếu văn bản tiêu chuẩn gốc hiện hành khi nghiệm thu pháp lý."
  },
  {
    "id": "tcvn-6306-3",
    "code": "TCVN 6306-3:2006 (IEC 60076-3)",
    "category": "TCVN 6306",
    "tags": [
      "TCVN 6306",
      "IEC 60076",
      "Điện môi",
      "Cao áp"
    ],
    "title": "Máy biến áp điện lực – Phần 3: Mức cách điện, thử nghiệm điện môi và khoảng cách cách điện trong không khí",
    "summary": "Quy định các mức chịu thử điện áp cao áp tần số công nghiệp, điện áp cảm ứng (ACSD/ACLD), điện áp xung sét (LI) và xung đóng cắt (SI) tương ứng với cấp điện áp định mức của thiết bị (Um).",
    "scope": "Áp dụng cho việc lựa chọn mức cách điện và quy trình thử nghiệm độ bền điện môi cuộn dây máy biến áp.",
    "parameters": [
      "Cấp điện áp Um = 24 kV: Điện áp chịu thử tần số công nghiệp 50 kV (1 phút); Điện áp chịu thử xung sét 125 kVp",
      "Cấp điện áp Um = 36 kV: Điện áp chịu thử tần số công nghiệp 70 kV (1 phút); Điện áp chịu thử xung sét 170 kVp",
      "Cấp điện áp Um = 123 kV: Điện áp chịu thử tần số công nghiệp 230 kV (hoặc theo cấp cách điện giảm); Xung sét 550 kVp",
      "Thử nghiệm điện áp cảm ứng (Induced voltage withstand test): Tần số tăng cao (thường 100 Hz – 400 Hz) để tránh bão hòa mạch từ, thời gian duy trì tính theo công thức t = 120 × (f_định_mức / f_thử_nghiệm) nhưng không dưới 15 giây.",
      "Đo phóng điện cục bộ (Partial Discharge - PD) kết hợp trong phép thử điện áp cảm ứng dài hạn (ACLD)."
    ],
    "status_note": "Thông tin tham chiếu tiêu chuẩn kỹ thuật – Cần đối chiếu văn bản tiêu chuẩn gốc hiện hành khi nghiệm thu pháp lý."
  },
  {
    "id": "tcvn-6306-5",
    "code": "TCVN 6306-5:2006 (IEC 60076-5)",
    "category": "TCVN 6306",
    "tags": [
      "TCVN 6306",
      "IEC 60076",
      "Special Test",
      "Ngắn mạch"
    ],
    "title": "Máy biến áp điện lực – Phần 5: Khả năng chịu ngắn mạch",
    "summary": "Quy định các yêu cầu về khả năng chịu đựng ứng suất nhiệt và lực điện động khi xảy ra ngắn mạch bên ngoài của máy biến áp điện lực.",
    "scope": "Áp dụng cho phép thử đặc biệt (Special Test) hoặc tính toán thiết kế kiểm chứng khả năng chịu dòng ngắn mạch.",
    "parameters": [
      "Khả năng chịu nhiệt khi ngắn mạch: Tính toán nhiệt độ trung bình cao nhất của cuộn dây sau thời gian ngắn mạch (thường 2 giây) không vượt quá 250°C đối với dây đồng và 200°C đối với dây nhôm",
      "Khả năng chịu lực điện động: Thử nghiệm dòng ngắn mạch đỉnh không đối xứng hoặc đánh giá qua tính toán thiết kế",
      "Tiêu chí đạt sau thử nghiệm ngắn mạch: Độ thay đổi điện kháng ngắn mạch (ΔX) không vượt quá giới hạn quy định (thường ≤ 2% đối với cuộn dây đồng tâm tròn), chịu đạt các phép thử điện môi thường xuyên và kiểm tra bên trong không có biến dạng cơ khí."
    ],
    "status_note": "Thông tin tham chiếu tiêu chuẩn kỹ thuật – Cần đối chiếu văn bản tiêu chuẩn gốc hiện hành khi nghiệm thu pháp lý."
  },
  {
    "id": "iec-60076-11",
    "code": "IEC 60076-11:2018 (TCVN 6306-11)",
    "category": "IEC 60076",
    "tags": [
      "IEC 60076",
      "TCVN 6306",
      "MBA Khô",
      "Phóng điện cục bộ"
    ],
    "title": "Máy biến áp điện lực – Phần 11: Máy biến áp kiểu khô (Dry-type transformers)",
    "summary": "Quy định tiêu chuẩn chế tạo, cấp chịu nhiệt cách điện (F, H), giới hạn tăng nhiệt, mức phóng điện cục bộ (PD) và các thử nghiệm môi trường (E), khí hậu (C), chống cháy (F) cho máy biến áp khô.",
    "scope": "Áp dụng cho máy biến áp kiểu khô đúc epoxy chân không (Cast Resin) hoặc tẩm sơn cách điện có cấp điện áp thiết bị đến 72.5 kV.",
    "parameters": [
      "Giới hạn độ tăng nhiệt trung bình cuộn dây: 100 K (cấp cách điện F - 155°C), 125 K (cấp cách điện H - 180°C)",
      "Phép thử phóng điện cục bộ (Partial Discharge - Routine Test): Mức phóng điện cục bộ quy kiến không vượt quá 10 pC ở điện áp 1.3 × Ur",
      "Phân cấp điều kiện làm việc: Khí hậu (C1, C2, C3, C4), Môi trường (E1, E2, E3, E4), Chống cháy (F0, F1)",
      "Kiểm tra hệ thống cảm biến nhiệt PT100 và bộ điều khiển nhiệt độ bảo vệ cuộn dây."
    ],
    "status_note": "Thông tin tham chiếu tiêu chuẩn kỹ thuật – Cần đối chiếu văn bản tiêu chuẩn gốc hiện hành khi nghiệm thu pháp lý."
  },
  {
    "id": "iec-60076-7",
    "code": "IEC 60076-7:2018",
    "category": "IEC 60076",
    "tags": [
      "IEC 60076",
      "Quá tải",
      "Tuổi thọ cách điện"
    ],
    "title": "Máy biến áp điện lực – Phần 7: Hướng dẫn mang tải cho máy biến áp điện lực ngâm dầu",
    "summary": "Cung cấp mô hình toán học tính toán nhiệt độ điểm nóng nhất (Hot-spot temperature), tốc độ lão hóa nhiệt của giấy cách điện và giới hạn dòng điện/nhiệt độ khi vận hành quá tải bình thường hoặc khẩn cấp.",
    "scope": "Ứng dụng trong đánh giá khả năng mang tải, tính toán hao mòn tuổi thọ cách điện và cài đặt ngưỡng bảo vệ nhiệt độ máy biến áp.",
    "parameters": [
      "Nhiệt độ điểm nóng nhất (Hot-spot) giới hạn vận hành chu kỳ bình thường: ≤ 120°C (giấy Kraft thường) hoặc ≤ 130°C (giấy nâng cấp nhiệt)",
      "Nhiệt độ dầu lớp trên cùng tối đa trong mọi chế độ quá tải dài hạn: ≤ 105°C (ngắn hạn khẩn cấp ≤ 115°C)",
      "Hệ số lão hóa tương đối (V): Tăng gấp đôi cho mỗi 6°C tăng thêm đối với giấy Kraft thường (tính từ mốc chuẩn 98°C)",
      "Phục vụ trực tiếp cho việc cài đặt bộ chỉ thị nhiệt độ dầu/cuộn dây (như BWR-04AJ(TH) hoặc tương đương) và tỷ số biến dòng CT hình ảnh nhiệt."
    ],
    "status_note": "Thông tin tham chiếu tiêu chuẩn kỹ thuật – Cần đối chiếu văn bản tiêu chuẩn gốc hiện hành khi nghiệm thu pháp lý."
  },
  {
    "id": "iec-60599",
    "code": "IEC 60599:2022",
    "category": "Dầu & DGA",
    "tags": [
      "Dầu & DGA",
      "IEC 60076",
      "Chẩn đoán sự cố",
      "Tỷ số khí"
    ],
    "title": "Thiết bị điện ngâm dầu trong vận hành – Hướng dẫn giải thích kết quả phân tích khí hòa tan và khí tự do (DGA)",
    "summary": "Tiêu chuẩn cốt lõi của IEC hướng dẫn chẩn đoán sớm các dạng sự cố tiềm ẩn bên trong máy biến áp thông qua nồng độ và tỷ số các khí hòa tan trong dầu cách điện.",
    "scope": "Áp dụng cho máy biến áp ngâm dầu khoáng, kháng điện, máy biến dòng/biến áp đo lường và bộ điều áp dưới tải (OLTC).",
    "parameters": [
      "Các khí đặc trưng được phân tích: H2, CH4, C2H6, C2H4, C2H2 (khí cháy hydrocarbon) cùng CO, CO2, O2, N2",
      "3 tỷ số khí cơ bản của IEC: C2H2/C2H4, CH4/H2, C2H4/C2H6",
      "6 dạng sự cố chuẩn hóa: PD (Phóng điện cục bộ), D1 (Phóng điện năng lượng thấp), D2 (Phóng điện năng lượng cao/Hồ quang), T1 (Quá nhiệt < 300°C), T2 (Quá nhiệt 300°C – 700°C), T3 (Quá nhiệt > 700°C)",
      "Đánh giá phân hủy cách điện giấy/cellulose qua nồng độ CO, CO2 và tỷ số CO2/CO (< 3 hoặc > 10).",
      "Ứng dụng phương pháp Tam giác Duval 1, 4, 5 và Ngũ giác Duval để khoanh vùng lỗi lõi từ, cuộn dây và cách điện."
    ],
    "status_note": "Thông tin tham chiếu tiêu chuẩn kỹ thuật – Cần đối chiếu văn bản tiêu chuẩn gốc hiện hành khi nghiệm thu pháp lý."
  },
  {
    "id": "ieee-c57-104",
    "code": "IEEE C57.104-2019",
    "category": "Dầu & DGA",
    "tags": [
      "Dầu & DGA",
      "IEEE C57",
      "Chẩn đoán sự cố",
      "TDCG"
    ],
    "title": "Hướng dẫn giải thích các khí sinh ra trong máy biến áp ngâm dầu khoáng",
    "summary": "Tiêu chuẩn Hoa Kỳ cung cấp các bảng phân ngưỡng nồng độ khí (Bảng 1, 2, 3 theo tỷ lệ O2/N2 và tuổi thiết bị), tốc độ tăng khí và các phương pháp chẩn đoán Khí chính (Key Gas), Doernenburg, Rogers và Tam giác/Ngũ giác Duval.",
    "scope": "Áp dụng rộng rãi trong chẩn đoán sức khỏe, phân loại mức độ rủi ro (DGA Status 1, 2, 3) và lập lịch lấy mẫu giám sát máy biến áp.",
    "parameters": [
      "Phân loại 3 trạng thái DGA (DGA Status 1, 2, 3): Từ vận hành bình thường đến cảnh báo tăng cường giám sát và yêu cầu xử lý khẩn cấp",
      "Ngưỡng tham chiếu nồng độ khí thế hệ mới (phân tách theo tỷ số O2/N2 ≤ 0.2 và > 0.2)",
      "Phương pháp Khí chính (Key Gas): C2H2 đặc trưng cho hồ quang điện; H2 đặc trưng cho phóng điện cục bộ/vầng quang; C2H4 đặc trưng cho quá nhiệt dầu nghiêm trọng; CO đặc trưng cho quá nhiệt giấy cách điện",
      "Tích hợp Tam giác Duval 1 (CH4, C2H4, C2H2), Tam giác 4 (H2, CH4, C2H6), Tam giác 5 (CH4, C2H4, C2H6) để phân biệt lỗi nhiệt độ thấp."
    ],
    "status_note": "Thông tin tham chiếu tiêu chuẩn kỹ thuật – Cần đối chiếu văn bản tiêu chuẩn gốc hiện hành khi nghiệm thu pháp lý."
  },
  {
    "id": "ieee-c57-12-00",
    "code": "IEEE C57.12.00-2021",
    "category": "IEEE C57",
    "tags": [
      "IEEE C57",
      "Quy định chung",
      "Dung sai"
    ],
    "title": "Yêu cầu chung đối với máy biến áp phân phối, máy biến áp lực và máy biến áp điều chỉnh ngâm trong chất lỏng",
    "summary": "Quy định các yêu cầu về điện, cơ khí và an toàn đối với máy biến áp ngâm dầu theo hệ tiêu chuẩn Bắc Mỹ (ANSI/IEEE).",
    "scope": "Áp dụng cho việc thiết kế, nghiệm thu và đối chiếu thông số kỹ thuật các máy biến áp sản xuất hoặc kiểm định theo chuẩn IEEE.",
    "parameters": [
      "Dung sai tỷ số biến áp: ±0.5% điện áp định mức của các cuộn dây",
      "Dung sai trở kháng ngắn mạch: ±7.5% đối với MBA 2 cuộn dây (có trở kháng > 2.5%) và ±10% đối với MBA có trở kháng ≤ 2.5% hoặc MBA 3 cuộn dây",
      "Dung sai tổn hao theo chuẩn IEEE: Tổn hao không tải của một máy đơn lẻ không vượt quá +10% và tổng tổn hao không vượt quá +6% giá trị cam kết",
      "Phân loại hạng mục Routine, Design (Type) và Other (Special) tests theo bảng phân loại IEEE."
    ],
    "status_note": "Thông tin tham chiếu tiêu chuẩn kỹ thuật – Cần đối chiếu văn bản tiêu chuẩn gốc hiện hành khi nghiệm thu pháp lý."
  },
  {
    "id": "ieee-c57-12-90",
    "code": "IEEE C57.12.90-2021",
    "category": "IEEE C57",
    "tags": [
      "IEEE C57",
      "Routine Test",
      "Phương pháp thử"
    ],
    "title": "Quy chuẩn phương pháp thử nghiệm (Test Code) cho máy biến áp phân phối, truyền tải ngâm dầu",
    "summary": "Hướng dẫn chi tiết sơ đồ đấu nối, thiết bị đo, công thức quy đổi nhiệt độ tham chiếu và trình tự thực hiện tất cả các phép thử điện – nhiệt cho máy biến áp.",
    "scope": "Tài liệu cẩm nang thực hành đo lường trực tiếp tại phòng thí nghiệm máy biến áp.",
    "parameters": [
      "Quy trình đo điện trở một chiều: Dòng đo không vượt quá 15% dòng định mức cuộn dây để tránh làm nóng cuộn dây gây sai số",
      "Đo tổn hao không tải: Sử dụng nguồn sóng sin chuẩn, hiệu chỉnh tổn hao theo điện áp đo bằng vôn-mét trị trung bình và vôn-mét trị hiệu dụng",
      "Quy đổi tổn hao ngắn mạch và trở kháng về nhiệt độ tham chiếu chuẩn (75°C hoặc 85°C tùy cấp cách điện)",
      "Quy trình đo hệ số tổn hao điện môi (Power Factor / Dissipation Factor tan δ) quy đổi về 20°C."
    ],
    "status_note": "Thông tin tham chiếu tiêu chuẩn kỹ thuật – Cần đối chiếu văn bản tiêu chuẩn gốc hiện hành khi nghiệm thu pháp lý."
  },
  {
    "id": "iec-60156",
    "code": "IEC 60156:2018 (TCVN 7996-1)",
    "category": "Dầu & DGA",
    "tags": [
      "Dầu & DGA",
      "Thử nghiệm & An toàn",
      "Cao áp"
    ],
    "title": "Chất lỏng cách điện – Xác định điện áp đánh thủng ở tần số công nghiệp",
    "summary": "Quy định phương pháp thử nghiệm xác định độ bền điện môi (điện áp chọc thủng - Breakdown Voltage BDV) của dầu cách điện máy biến áp.",
    "scope": "Áp dụng cho kiểm tra dầu cách điện mới trước khi nạp vào máy biến áp và giám sát định kỳ dầu đang vận hành.",
    "parameters": [
      "Điện cực thử nghiệm: Điện cực hình cầu hoặc hình nấm bằng đồng/thép không gỉ, khoảng cách khe hở chuẩn 2.5 mm (±0.05 mm)",
      "Tốc độ tăng điện áp: Tăng đều từ 0 với tốc độ 2.0 kV/s (±0.2 kV/s) cho đến khi xảy ra phóng điện đánh thủng",
      "Số lần phóng điện: Thực hiện 6 lần liên tiếp trên cùng một cốc mẫu (có khuấy nhẹ và nghỉ tối thiểu 2 phút giữa các lần phóng), lấy giá trị trung bình của 6 lần đo",
      "Tiêu chuẩn đạt tham khảo (theo IEC 60422): Dầu đã xử lý nạp máy mới thường yêu cầu ≥ 60 kV – 70 kV/2.5mm tùy cấp điện áp."
    ],
    "status_note": "Thông tin tham chiếu tiêu chuẩn kỹ thuật – Cần đối chiếu văn bản tiêu chuẩn gốc hiện hành khi nghiệm thu pháp lý."
  },
  {
    "id": "qcvn-qt-d-5",
    "code": "QCVN QTĐ-5:2009/BCT & Thông tư 02/2025/TT-BCT",
    "category": "Thử nghiệm & An toàn",
    "tags": [
      "Thử nghiệm & An toàn",
      "TCVN 6306",
      "Kiểm định định kỳ"
    ],
    "title": "Quy chuẩn kỹ thuật quốc gia về Kiểm định trang thiết bị hệ thống điện",
    "summary": "Quy định khối lượng, hạng mục và tiêu chuẩn đánh giá khi thí nghiệm nghiệm thu đóng điện mới và kiểm định kỹ thuật an toàn định kỳ máy biến áp lực tại Việt Nam.",
    "scope": "Áp dụng cho các chủ đầu tư, nhà máy công nghiệp, đơn vị quản lý vận hành lưới điện và tổ chức kiểm định kỹ thuật an toàn.",
    "parameters": [
      "Đo điện trở cách điện cuộn dây (R15, R60): Hệ số hấp thụ Kht = R60/R15 ≥ 1.3 (ở nhiệt độ 10°C – 30°C) hoặc chỉ số phân cực PI = R10phút/R1phút",
      "Sai lệch điện trở một chiều giữa các pha (ở cùng nấc phân áp) và so với số liệu xuất xưởng không vượt quá ±2%",
      "Đo hệ số tổn hao điện môi (tan δ) của cuộn dây và sứ xuyên cao áp",
      "Kiểm tra hoạt động rơ-le hơi (Buchholz), van phòng nổ, bộ chỉ thị mức dầu và đồng hồ đo nhiệt độ dầu/cuộn dây."
    ],
    "status_note": "Thông tin tham chiếu tiêu chuẩn kỹ thuật – Cần đối chiếu văn bản tiêu chuẩn gốc hiện hành khi nghiệm thu pháp lý."
  }
];

let standardsList = [...FALLBACK_STANDARDS];
let currentCategory = 'ALL';
let currentKeyword = '';

// Loại bỏ dấu tiếng Việt để hỗ trợ tìm kiếm linh hoạt
function removeVietnameseTones(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

// Khởi tạo dữ liệu (hỗ trợ cả mở trực tiếp file:// và chạy qua server HTTP)
async function loadStandardsData() {
  try {
    const res = await fetch('./data/standards.json');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        standardsList = data;
      }
    }
  } catch (err) {
    // Sử dụng FALLBACK_STANDARDS khi mở trực tiếp qua giao thức file://
  }
  renderStandards();
}

function renderStandards() {
  const grid = document.getElementById('standardsGrid');
  const countEl = document.getElementById('resultCount');
  if (!grid) return;

  const kwNorm = removeVietnameseTones(currentKeyword.trim());

  const filtered = standardsList.filter((item) => {
    const matchCategory =
      currentCategory === 'ALL' ||
      item.category === currentCategory ||
      (item.tags && item.tags.includes(currentCategory));

    if (!matchCategory) return false;
    if (!kwNorm) return true;

    const haystack = removeVietnameseTones(
      `${item.code} ${item.title} ${item.summary} ${(item.tags || []).join(' ')} ${(item.parameters || []).join(' ')}`
    );
    return haystack.includes(kwNorm);
  });

  if (countEl) {
    countEl.textContent = `Hiển thị ${filtered.length} / ${standardsList.length} tiêu chuẩn kỹ thuật`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; background: #FFF; border-radius: 12px; border: 1px dashed #CBD5E1;">
        <p style="font-weight: 700; margin-bottom: 0.5rem;">Không tìm thấy tiêu chuẩn khớp với từ khóa "${currentKeyword}"</p>
        <p style="color: #475569; font-size: 0.9rem; margin-bottom: 1rem;">Anh/chị có thể thử từ khóa khác (ví dụ: 6306, DGA, C57, tăng nhiệt, BDV) hoặc nhắn trực tiếp chuyên gia HBT Việt Nam.</p>
        <a href="https://zalo.me/0986193195" target="_blank" rel="noopener noreferrer" class="btn btn-amber">Hỏi trực tiếp qua Zalo 0986 193 195</a>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (std) => `
      <article class="standard-card">
        <div>
          <span class="std-code-badge">${std.code}</span>
          <h3>${std.title}</h3>
          <p>${std.summary}</p>
        </div>
        <div class="std-card-footer">
          <div class="std-tag-list">
            ${(std.tags || [])
              .slice(0, 3)
              .map((t) => `<span class="std-mini-tag">${t}</span>`)
              .join('')}
          </div>
          <button type="button" class="btn btn-outline-blue" style="padding: 0.45rem 0.85rem; font-size: 0.82rem;" onclick="openStandardModal('${std.id}')">
            Xem chi tiết
          </button>
        </div>
      </article>
    `
    )
    .join('');
}

function openStandardModal(stdId) {
  const std = standardsList.find((s) => s.id === stdId);
  if (!std) return;

  const modal = document.getElementById('standardModal');
  const content = document.getElementById('modalBodyContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <span class="std-code-badge">${std.code}</span>
    <h2 style="font-size: 1.35rem; margin-bottom: 0.65rem; color: #0F172A;">${std.title}</h2>
    <p style="color: #475569; font-size: 0.94rem; margin-bottom: 1rem;"><strong>Phạm vi áp dụng:</strong> ${std.scope}</p>
    <h4 style="font-size: 0.98rem; color: #0284C7; margin-bottom: 0.5rem;">Các chỉ tiêu & thông số kỹ thuật trọng tâm:</h4>
    <ul class="modal-param-list">
      ${(std.parameters || []).map((p) => `<li>${p}</li>`).join('')}
    </ul>
    <div class="modal-status-banner">
      <strong>Trạng thái dữ liệu:</strong> ${std.status_note}
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: flex-end;">
      <button type="button" class="btn btn-outline-blue" onclick="selectStandardForInquiry('${std.code}')">
        Đưa vào Phiếu yêu cầu tư vấn
      </button>
      <a href="https://zalo.me/0986193195" target="_blank" rel="noopener noreferrer" class="btn btn-amber">
        Tư vấn tiêu chuẩn này qua Zalo (0986 193 195)
      </a>
    </div>
  `;

  modal.classList.add('active');
}

function closeStandardModal() {
  const modal = document.getElementById('standardModal');
  if (modal) modal.classList.remove('active');
}

function selectStandardForInquiry(stdCode) {
  closeStandardModal();
  const stdInput = document.getElementById('inquiryStandard');
  if (stdInput) {
    stdInput.value = stdCode;
    updateInquiryPreview();
  }
  const contactSection = document.getElementById('lien-he');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
  showToast(`Đã chọn tiêu chuẩn ${stdCode} vào phiếu tư vấn!`);
}

function selectServiceForInquiry(serviceName) {
  const serviceSelect = document.getElementById('inquiryService');
  if (serviceSelect) {
    serviceSelect.value = serviceName;
    updateInquiryPreview();
  }
  const contactSection = document.getElementById('lien-he');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
  showToast(`Đã chọn dịch vụ: ${serviceName}`);
}

function updateInquiryPreview() {
  const name = document.getElementById('inquiryName')?.value.trim() || '[Tên Quý khách / Đơn vị]';
  const phone = document.getElementById('inquiryPhone')?.value.trim() || '[Số điện thoại liên hệ]';
  const service = document.getElementById('inquiryService')?.value || 'Thử nghiệm xuất xưởng & nghiệm thu MBA';
  const spec = document.getElementById('inquirySpec')?.value.trim() || '1000 kVA - 22/0.4 kV (Dầu / Khô)';
  const std = document.getElementById('inquiryStandard')?.value.trim() || 'TCVN 6306 / IEC 60076 / IEEE C57';
  const note = document.getElementById('inquiryNote')?.value.trim() || 'Cần tư vấn quy trình, lịch thử nghiệm và báo giá kỹ thuật.';

  const previewText =
`Kính gửi Phòng Thí Nghiệm Máy Biến Áp HBT Việt Nam (Zalo: 0986 193 195),
- Đơn vị / Người liên hệ: ${name} (${phone})
- Hạng mục cần tư vấn: ${service}
- Thông số thiết bị: ${spec}
- Tiêu chuẩn áp dụng: ${std}
- Ghi chú yêu cầu: ${note}`;

  const previewEl = document.getElementById('inquiryPreviewBox');
  if (previewEl) {
    previewEl.textContent = previewText;
  }
  return previewText;
}

async function copyAndOpenZalo() {
  const text = updateInquiryPreview();
  try {
    await navigator.clipboard.writeText(text);
    showToast('Đã sao chép nội dung yêu cầu! Đang mở Zalo 0986 193 195...');
  } catch (e) {
    showToast('Đang mở Zalo tư vấn kỹ thuật 0986 193 195...');
  }
  setTimeout(() => {
    window.open('https://zalo.me/0986193195', '_blank', 'noopener,noreferrer');
  }, 450);
}

async function copyInquiryOnly() {
  const text = updateInquiryPreview();
  try {
    await navigator.clipboard.writeText(text);
    showToast('Đã sao chép nội dung yêu cầu vào bộ nhớ tạm!');
  } catch (e) {
    showToast('Vui lòng bôi đen khung nội dung để sao chép.');
  }
}

function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Khởi chạy sự kiện khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  loadStandardsData();
  updateInquiryPreview();

  // Tìm kiếm theo từ khóa
  const searchInput = document.getElementById('standardSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentKeyword = e.target.value;
      renderStandards();
    });
  }

  // Bộ lọc danh mục
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category') || 'ALL';
      renderStandards();
    });
  });

  // Đóng Modal khi nhấn phím ESC hoặc click ra ngoài
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeStandardModal();
  });
  const modalBackdrop = document.getElementById('standardModal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeStandardModal();
    });
  }

  // Menu Mobile
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  // Accordion FAQ
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (item) item.classList.toggle('open');
    });
  });

  // Cập nhật Preview khi nhập form
  ['inquiryName', 'inquiryPhone', 'inquiryService', 'inquirySpec', 'inquiryStandard', 'inquiryNote'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateInquiryPreview);
      el.addEventListener('change', updateInquiryPreview);
    }
  });
});
