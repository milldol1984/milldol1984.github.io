---
layout: docs
title: Virtual Private Cloud - Mạng ảo
permalink: /docs/virtual-private-cloud/mang-ao/
tag: network
doc_title: Mạng ảo
---
Mạng ảo là thành phần quan trọng của [VPC][vpc]. Mạng ảo của mỗi khách hàng sẽ hoàn toàn tách biệt với nhau, do đó làm tăng tính bảo mật cho các máy chủ ảo.
Mỗi mạng ảo sẽ được gắn với một dải IP nội bộ (subnet) và có cơ chế thiết lập tường lửa ([Network ACL][acl]) riêng.

#### Danh sách mạng ảo
Tại trang chủ [Cloud Portal][portal], chọn **VPC > Mạng ảo**. Danh sách mạng ảo sẽ hiển thị.

#### Thêm mạng ảo {#create}

Tại danh sách mạng ảo, chọn **Thêm mạng ảo**. Nhập thông tin chi tiết mạng ảo:

- Tên.
- Mô tả.
- VPC: VPc mạng ảo được gắn vào.
- Network ACL: tường lửa cho mạng ảo. Xem thêm [Network ACL][acl].
- IP Range: dải IP nội bộ cho mạng ảo.  
    ```GHI CHÚ: các dải IP nội bộ của mạng ảo trong cùng VPC phải duy nhất.```  
    
Nhấn **Thêm mạng ảo** để tiến hành khởi tạo.

#### Thông tin chi tiết
Tại trang danh sách mạng ảo, chọn mạng ảo cân xem thông tin chi tiết.

<div class="thumbnail" markdown="1">
![Virtual Network][network_img]
</div>

#### Gán Network ACL cho mạng ảo {#associate-network-acl}
Tại trang thông tin chi tiết phần Network ACL, chọn **Thay đổi Network ACL**. 
Chọn Network ACL cần gán cho mạng ảo và nhấn **Lưu thay đổi** để thực thi tác vụ.

#### Cho phép truy xuất Internet

Tại trang thông tin chi tiết mạng ảo, chọn **Tác vụ > Cho phép truy cập Internet**.

#### Cấm truy xuất Internet

Tại trang thông tin chi tiết mạng ảo, chọn **Tác vụ > Cấm truy xuất Internet**.

#### Xóa mạng ảo
Tại trang thông tin chi tiết mạng ảo, chọn **Tác vụ > Xóa** và xác nhận ta1c vụ xóa mạng ảo.

[vpc]: {{site.url}}/docs/virtual-private-cloud/
[acl]: {{site.url}}/docs/virtual-private-cloud/network-acl
[portal]: https://my.cloudvis.vn/compute
[network_img]: {{site.url}}/img/docs/network_detail.png