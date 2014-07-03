---
layout: docs
title: Virtual Private Cloud - Network ACL
permalink: /docs/virtual-private-cloud/network-acl/
tag: network_acl
doc_title: Network ACL
---

Network ACL là tường lửa cho phép thiết lập các luật cho phép hoặc cấm các luống dữ liệu ra vào mạng ảo. 

#### Danh sách Network ACL
Tại trang chủ [Cloud Portal][portal], chọn **VPC > Network ACL** để hiển thị danh sách Network ACL.

#### Tạo Network ACL
Tại trang danh sách Network ACL, chọn **Thêm Network ACL**. Nhập thông tin chi tiết cho Network ACL:  

- Tên.
- Mô tả.
- Luật: thông tin luật vào ra trên mạng ảo. Thông tin luật bao gồm: 
  - Giao thức: giao thức luật có hiệu lực.
  - Cổng: cổng luật có hiệu lực. Nếu muốn tất cả các cổng, nhập **0**.
  - Nguồn/Đích: dải IP (subnet) luật có hiệu lực. Nếu muốn tất cả các IP nhập **0.0.0.0/0**.
  - Hành động: 
    - ACCEPT: cho phép truy cập.
    - DROP: từ chối truy cập.
  
  ```GHI CHÚ: Các luật được áp dụng theo thứ tự.```
  
Nhấn **Thêm Network ACL** để tạo mới.

#### Chỉnh sửa thông tin Network ACL
Tại danh sách Network ACL, chọn Network ACL cần sửa đổi. Các thông tin có thể sửa đổi bao gồm: 

- Thay đổi thông tin chung của Network ACL (tên, mô tả): chọn **Tác vụ > Chỉnh sửa**.
- Các luật: thêm hoặc xóa các luật vào ra. 

    ```GHI CHÚ: sau khi sửa đổi luật, nhấn "Áp dụng luật" để hệ thống tiến hành cập nhật.```

#### Gán Network ACL vào mạng ảo

Xem [Gán Network ACL vào mạng ảo][1].

#### Xóa Network ACL

```GHI CHÚ: Network ACL chỉ xóa được khi chưa gắn với mạng ảo.```

Tại trang chi tiết Network ACL, chọn **Tác vụ > Xóa** và xác nhận để thực thi tác vụ.


[1]: {{site.url}}/docs/virtual-private-cloud/mang-ao#associate-network-acl
