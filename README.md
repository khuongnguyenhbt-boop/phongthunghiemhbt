# Website Phòng Thí Nghiệm Máy Biến Áp HBT Việt Nam

Bộ mã nguồn website giới thiệu năng lực **Phòng Thí Nghiệm Máy Biến Áp HBT Việt Nam**, tích hợp hệ thống **Tra cứu tiêu chuẩn kỹ thuật (TCVN 6306, IEC 60076, IEEE C57, DGA)** và luồng kết nối tư vấn trực tiếp qua **Zalo `0986193195`**.

## 1. Cấu trúc thư mục
- `index.html`: Trang chủ tích hợp đầy đủ các phân khu giao diện.
- `css/styles.css`: Định dạng giao diện chuẩn công nghiệp cao áp, tương thích Mobile/Tablet/Desktop và hỗ trợ chế độ in PDF (`@media print`).
- `js/main.js`: Bộ máy tìm kiếm & lọc tiêu chuẩn thời gian thực (hỗ trợ có dấu và không dấu), hộp thoại Modal chi tiết và trình tạo phiếu yêu cầu tư vấn qua Zalo.
- `data/standards.json`: Cơ sở dữ liệu 12 tiêu chuẩn thử nghiệm & chẩn đoán máy biến áp cốt lõi.
- `assets/images/`: Thư mục chứa hình ảnh thực tế của phòng thí nghiệm.

## 2. Cách chạy thử trên máy tính
- **Cách 1 (Nhanh nhất):** Nhấp đúp mở trực tiếp file `hbt-vietnam-transformer-lab.html` (hoặc `index.html`) trên trình duyệt Chrome/Edge. Mã nguồn đã có cơ chế dữ liệu dự phòng (Fallback) nên bộ lọc tiêu chuẩn hoạt động 100% ngay cả khi mở trực tiếp qua `file://`.
- **Cách 2 (Localhost chuẩn):** Mở thư mục bằng **VS Code Live Server** hoặc chạy lệnh:
  ```bash
  python -m http.server 8000
  ```
  Sau đó truy cập `http://localhost:8000`.

## 3. Cách cập nhật thông tin & triển khai GitHub Pages
1. Tìm các nhãn giữ chỗ `[ĐỊA CHỈ PHÒNG THÍ NGHIỆM HBT VIỆT NAM]`, `[EMAIL LIÊN HỆ HBT VIỆT NAM]`, `[MÃ SỐ ISO/IEC 17025 - VILAS NẾU CÓ]` trong `index.html` để điền thông tin chính thức.
2. Tải toàn bộ thư mục lên một Repository trên GitHub -> Vào **Settings -> Pages** -> Chọn nhánh `main` / `(root)` -> Bấm **Save** để xuất bản website miễn phí.
