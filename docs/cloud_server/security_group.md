---
layout: docs
title: Cloud Server - Tường lửa
permalink: /docs/cloud-server/tuong-lua/
tag: security_group
doc_title: Tường lửa
---

Tường lửa là cơ chế bảo mật thiết lập các luật cho phép hoặc cấm các luồng dữ liệu ra vào máy chủ ảo. 

#### Danh sách Tường lửa
Tại trang chủ [Cloud Portal][portal], chọn **Máy chủ ảo > Tường lửa** để hiển thị danh sách tường lửa.

#### Tạo Tường lửa
Tại trang danh sách tường lửa, chọn **Tạo tường lửa**. Nhập thông tin chi tiết cho tường lửa:  

- Tên.
- Mô tả.
- Luật: thông tin luật vào ra trên máy chủ ảo. Thông tin luật bao gồm: 
  - Giao thức: giao thức luật có hiệu lực.
  - Cổng: cổng luật có hiệu lực. Nếu muốn tất cả các cổng, nhập **0**.
  - Nguồn/Đích: dải IP (subnet) luật có hiệu lực. Nếu muốn tất cả các IP nhập **0.0.0.0/0**.
  - Hành động: 
    - ACCEPT: cho phép truy cập.
    - DROP: từ chối truy cập.
  
  ```GHI CHÚ: Các luật được áp dụng theo thứ tự.```
  
Nhấn **Thêm Network ACL** để tạo mới.

#### Chỉnh sửa thông tin tường lửa
Tại danh sách tường lửa, chọn tường lửa cần sửa đổi. Các thông tin có thể sửa đổi bao gồm: 

- Thay đổi thông tin chung của Tường lửa (tên, mô tả): chọn **Tác vụ > Chỉnh sửa**.
- Các luật: thêm hoặc xóa các luật vào ra. 

    ```GHI CHÚ: sau khi sửa đổi luật, nhấn "Áp dụng luật" để hệ thống tiến hành cập nhật.```

#### Gán Tường lửa vào máy chủ ảo

Xem [Thay đổi tường lửa][1].

#### Xóa Tường lửa

```GHI CHÚ: Tường lửa chỉ xóa được khi chưa gắn với máy chủ ảo.```

Tại trang chi tiết tường lửa, chọn **Tác vụ > Xóa** và xác nhận để thực thi tác vụ.


[1]: {{site.url}}/docs/cloud-server/quan-ly-may-chu-ao#change_security_group