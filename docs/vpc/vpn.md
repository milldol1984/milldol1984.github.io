---
layout: docs
title: Virtual Private Cloud - VPN
permalink: /docs/virtual-private-cloud/vpn/
tag: vpn
doc_title: VPN
---

CloudVis VPC cho phép thiết lập các kênh kết nối VPN (Virtual Private Network) an toàn đến hệ thống mạng ảo. Có hai loại VPN:

- Remote Access: kết nối từ các thiết bị đầu cuối (desktop, laptop...) đến mạng ảo.
- Site to Site: kết nối từ một hoặc nhiều site (head office, chi nhánh...) đến mạng ảo.

#### Remote Access VPN  
```GHI CHÚ: Mỗi VPC chỉ tạo được tối đa một Remote Access VPN.```

##### Thêm Remote Access VPN  
  Tại trang danh sách VPN, chọn **Thêm Remte Access VPN**. Nhập thông tin chi tiết của VPN bao gồm:
  - Tên.
  - Mô tả.
  - VPC.
  - Remote Subnet: dải IP sẽ dùng đê cấp phát IP cho các thiết bị đầu cuối.
  
  Nhấn **Thêm VPN** để tiến hành tạo VPN. Sau khi khởi tạo xong trang thái sẽ chuyển thành **Active**.
  
##### Thông tin chi tiết VPN
  Tại trang danh sách VPN, chọn Remote Access VPN để xem thông tin chi tiết.
  
##### Kích hoạt VPN
  Tại trang thông tin VPN, chọn **Tác vụ > Kích hoạt**.
  
##### Hủy kích hoạt VPN
  Tại trang thông tin VPN, chọn **Tác vụ > Hủy kích hoạt**.
  
##### Quản lý người dùng  
  - Thêm người dùng:  
    Tại trang thông tin VPN, chọn **Thêm người dùng** và nhập thông tin người dùng:
    - Tên.
    - Mạng ảo: chọn mạng ảo người dùng có thể truy cập.  
    Nhấn **Thêm người dùng** để thực thi tác vụ. Sau khi 
  - Phân quyền mạng ảo:  
    - Xóa mạng ảo: tại danh sách người dùng, chọn mạng ảo cần xóa khỏi người dùng và nhấn **Xóa**.
    - Thêm mạng ảo: tại danh sách người dùng, chọn **Tác vụ > Thêm mạng ảo** trên người dùng cần cấu hình mạng ảo. Chọn mạng ảo và nhấn **Thêm mạng ảo**.
  - Kích hoạt người dùng:  
  Tại danh sách người dùng, chọn **Tác vụ > Kích hoạt**.
  - Hủy kích hoạt người dùng:  
  Tại danh sách người dùng, chọn **Tác vụ > Hủy kích hoạt**.
  - Xóa người dùng:  
  Tại danh sách người dùng, chọn **Tác vụ > Xóa**.
  
##### Thiết lập kết nối VPN trên Linux  
  
##### Thiết lập kết nối VPN trên Windows  
Tải phần mềm kết nối VPN OpenVPN:  

- [Windows 32-bit][openvpn_windows_32]
- [Windows 64-bit][openvpn_windows_64]

Tại trang danh sách người dùng, tải token của người dùng tương ứng. Giải nén và chép vào thư mục cấu hình (config) của OpenVPN.  
Chạy chương trình OpenVPN. Trên thanh taskbar, nhấn biểu tượng OpenVPN và nhấn **Connect**. 

#### Site to Site VPN
```GHI CHÚ: Mỗi VPC có thể có nhiều Site to Site VPN.```

##### Thêm Site to Site VPN
Tại trang danh sách VPN chọn **Thêm Site to Site VPN**. Nhập thông tin chi tiết bao gồm:

- Tên.
- Mô tả.
- VPC.
- Customer Public IP: IP tĩnh phía khách hàng.
- Preshared Key: khóa bảo mật cho kết nối.

Nhấn **Thêm VPN** để tạo mới VPN.

##### Tunnel
Tunnel là một kênh kết nối an toàn đến mạng ảo của VPC. Mỗi Site to Site VPN có thể bao gồm nhiều tunnel.

###### Tạo Tunnel
Tại trang chi tiết Site to Site VPN, chọn **Thêm Tunnel**. Nhập thông tin chi tiết Tunnel:
- Remote Subnet: dải IP (subnet) phía khách hàng
- Mạng ảo: chọn mạng ảo kết nối với phía khách hàng thông qua tunnel.

Nhấn **Lưu thay đổi** để tạo tunnel.

###### Hủy kích hoạt Tunnel
Tại trang chi tiết Site to Site VPN, trên danh sách Tunnel, chọn **Tác vụ > Hủy kích hoạt** và xác nhận để hủy kích hoạt Tunnel.

###### Kích hoạt Tunnel
Tại trang chi tiết Site to Site VPN, trên danh sách Tunnel, chọn **Tác vụ > Kích hoạt** và xác nhận để Kích hoạt Tunnel.

###### Xóa Tunnel
Tại trang chi tiết Site to Site VPN, trên danh sách Tunnel, chọn **Tác vụ > Xóa** và xác nhận để xóa Tunnel.

##### Xóa Site to Site VPN
Tại trang chi tiết Site to Site VPN, chọn **Tác vụ > Xóa** và xác nhận để thực thi tác vụ xóa.

[openvpn_windows_32]: http://swupdate.openvpn.org/community/releases/openvpn-install-2.3.4-I001-i686.exe
[openvpn_windows_64]: http://swupdate.openvpn.org/community/releases/openvpn-install-2.3.4-I001-x86_64.exe