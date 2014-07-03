---
layout: docs
title: Cloud Server - Khởi tạo máy chủ ảo
permalink: /docs/cloud-server/khoi-tao-may-chu-ao/
tag: launch_cloud_server
doc_title: Khởi tạo máy chủ ảo
---

Thực hiện các bước sau để khởi tạo Cloud Server:  
```GHI CHÚ: ```  
```* Để khởi tạo máy chủ thì số dư trong tài khoản phải lớn hơn hoặc bằng chi phí máy chủ.```
```* Máy chủ ảo khi khởi tạo mặc định chưa có IP tĩnh. Xem thêm [Gắn IP tĩnh vào máy chủ][assign_ip].```

1. Đăng nhập [Cloud Portal][1].
2. Tại trang chủ chọn dịch vụ Cloud Compute.
3. Chọn **Khởi tạo máy chủ ảo** trên menu bên trái. Khi đó màn hình các bước khởi tạo Cloud Server sẽ hiển thị.

    ```GHI CHÚ: Bạn có thể chuyển qua lại giữa các bước bằng cách nhấn "Trở lại" hoặc "Tiếp tục".```

4. **Bước 1**: Chọn hệ điều hành. Bạn có thể chọn hệ điều hành từ các mẫu có sẵn hoặc từ snapshot (Xem thêm [Snapshot][2]). 
Nhấn **Tiếp tục** để sang bước 2.
5. **Bước 2**: Nhập chi tiết thông tin Cloud Server, bao gồm:
    - Tên Cloud Server.
    - Mô tả.
    - VPC/Mạng: chọn mạng riêng cho Cloud Server. Để trống nếu không muốn chọn mạng riêng. (Xem thêm [Virtual Private Cloud (VPC)][3]).
    - Cấu hình: chọn cấu hình CPU & RAM.
    - Đĩa cứng: cấu hình số lượng & dung lượng đĩa cứng.Chu kỳ thanh toán
    ```GHI CHÚ: Bạn có thể xem chi phí của máy chủ ảo trong quá trình chọn thông số cấu hình.```
    
    Nhấn **Tiếp tục** sang bước 3.
6. **Bước 3**: Cấu hình tường lửa. Nhấn **Tiếp tục** sang bước 4.
7. **Bước 4**: Xem lại thông tin Cloud Server. Nhấn **Khởi tạo máy chủ ảo** để tiến hành tạo Cloud Server.

Sau bước khởi tạo, Cloud Portal sẽ chuyển đến đang thông tin chi tiết Cloud Server. Bạn có thể xem chi tiết quá trình khởi tạo tại trang này.
Khi quá trình khởi tạo hoàn tất, trạng thái của Cloud Server sẽ chuyển sang **Active**. Mật khẩu máy chủ sẽ được gửi qua email.

<iframe width="560" height="315" src="//www.youtube.com/embed/oKg3SQ9bULA" frameborder="0" allowfullscreen></iframe>

[1]: https://my.cloudvis.vn
[2]: {{site.url}}/docs/cloud-server/snapshot
[3]: {{site.url}}/docs/virtual-private-cloud
[assign_ip]: {{site.url}}/docs/cloud-server/dia-chi-ip