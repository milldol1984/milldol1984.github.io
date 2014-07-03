---
layout: docs
title: Virtual Private Cloud - Quản lý VPC
permalink: /docs/virtual-private-cloud/quan-ly-vpc/
tag: manage_vpc
doc_title: Quản lý VPC
---

#### Danh sách VPC
Tại trang chủ [Cloud Portal][portal], chọn **VPC > VPC** để hiển thị danh sách VPC.

#### Khởi tạo VPC
Tại màn hình danh sách VPC, chọn **Khởi tạo VPC**.

<div class="thumbnail" markdown="1">
![Virtual Private Cloud][1]
</div>

Nhập thông tin chi tiết VPC:

- Tên.
- Mô tả.
- Chu kỳ thanh toán.

Nhấn **Khởi tạo VPC** để tiến hành khởi tạo. 

#### Thêm mạng ảo cho VPC

Xem [Thêm mạng ảo][add_network]

#### Xóa VPC  
```GHI CHÚ: VPC chỉ có thể được xóa khi không còn máy chủ ảo gắn vào.```

Tại trang thông tin chi tiết VPC, chọn **Tác vụ > Xóa** và xác nhận để thực thi tác vụ xóa.


[1]: {{site.url}}/img/docs/create_vpc.png
[portal]: https://my.cloudvis.vn/compute
[add_network]: {{site.url}}/docs/virtual-private-cloud/mang-ao#create