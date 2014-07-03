---
layout: docs
title: Cân bằng tải - Khởi tạo cân bằng tải
permalink: /docs/can-bang-tai/khoi-tao-can-bang-tai/
tag: create_load_balancer
doc_title: Khởi tạo cân bằng tải
---

Tại trang chủ [Cloud Portal][1], chọn **Cân bằng tải > Khởi tạo cân bằng tải**, màn hình sẽ hiển thị thông tin khởi tạo cân bằng tải.

<div class="thumbnail" markdown="1">
![enter image description here][2]
</div>
        
Quá trình khởi tạo cân bằng tải gồm 4 bước:

1. Bước 1: thông tin cân bằng tải
Nhập thông tin chi tiết cân bằng tải:
- Tên.
- VPC: chọn VPC/Mạng ảo cho cân bằng tải.
- Giải thuật: chọn một trong số các giải thuật cho cân bằng tải, bao gồm:
  - **Round Robin:** các request sẽ được cân bằng tải phân đều cho các máy chủ.
  - **Least Connection:** request sẽ được phân cho máy chủ đang phục vụ ít request nhất.
  - **Source:** request từ cùng một nguồn (vd: session, trình duyệt...) sẽ được phân vào cùng một máy chủ.
- Listener: thông tin các giao thức & cổng giữa cân bằng tải và máy chủ. Bạn có thể cấu hình nhiều listener cho cân bằng tải.
- Chu kỳ thanh toán.

    ```GHI CHÚ: bạn có thể xem chi phí của cân bằng tải trong quá trình nhập các thông số.```

    Nhấn **Tiếp tục** để chuyển sang bước 2.

2. Bước 2: Cấu hình Health Check
Health Check là thông tin giúp cân bằng tải xác định máy chủ có đang sẵn sàng phục vụ các request hay không. Các thông số bao gồm:
- Ping Protocol.
- Ping Port.
- Ping Path.
- Response Timeout.
- Health Check Interval: khoảng thời mgian giữa các lần kiểm tra.
- Unhealthy Threshold: 
Nhấn **Tiếp tục** để sang bước 3.
3. Bước 3: Cấu hình máy chủ

    Nhập thông tin các máy chủ cho cân bằng tải. Máy chủ có thể là máy chủ ảo (Cloud Server) hoặc máy chủ riêng của bạn.

    Nhấp **Tiếp tục** để sang bước 4.
4. Bước 4: Xem lại
    
    Xem lại thông tin của cân bằng tải. Bạn có thể tùy chỉnh lại các thông số. Nhấn **Khởi tạo cân bằng tải** để tiến hành khởi tạo.\\
    Màn hình sẽ chuyển sang thông tin chi tiết của cân bằng tải. Quá trình khởi tạo hoàn tất khi trạng thái chuyển sang **Active**.


[1]: https://my.cloudvis.vn/compute
[2]: {{site.url}}/img/docs/create_load_balancer.png