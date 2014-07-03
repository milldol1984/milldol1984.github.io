---
layout: docs
title: Cloud Server - Quản lý máy chủ ảo
permalink: /docs/cloud-server/quan-ly-may-chu-ao/
tag: manage_cloud_server
doc_title: Quản lý máy chủ ảo
---

#### Danh sách máy chủ ảo {#list}

Từ trang chính trong Cloud Portal, chọn mục **_Máy chủ ảo > Máy chủ ảo_** để xem danh sách các máy chủ hiện tại. Nhấn vào liên kết để xem chi tiết thông tin máy chủ ảo.

#### Các tác vụ trên máy chủ ảo
Trang chi tiết sẽ hiển thị các thông tin cụ thể về máy chủ: 

* CPU & RAM.
* IP nội bộ.
* IP tĩnh.
* Trạng thái khởi tạo (status).
* Trạng thái nguồn (power state).
* VPC & Mạng ảo: mạng mà máy chủ đang thuộc về.
* Đĩa cứng: danh sách đĩa cứng hiện tại của máy chủ.
* Tường lửa: thông tin về tường lửa đang áp dụng cho máy chủ.
* Console: màn hình console để thực hiện thao tác từ xa trên máy chủ.
* Thống kê: biểu đồ theo dõi các thông số trong máy chủ: CPU, Disk IO và Network IO.

Để thực hiện các tác vụ, chọn menu **Tác vụ**. Danh sách các tác vụ bao gồm:

1. ##### Khởi động máy chủ
    ```GHI CHÚ: Tác vụ này chỉ hiển thị khi máy chủ đang ở trạng thái "Stopped"```
    
    Chọn menu **Tác vụ > Khởi động** để khởi động máy chủ.

2. ##### Dừng máy chủ

    ```GHI CHÚ: Tác vụ này chỉ hiển thị khi máy chủ đang ở trạng thái "Running"```
    
    Chọn menu **Tác vụ > Dừng** để khởi động máy chủ.

3. ##### Khôi phục mật khẩu  {#reset_password}
    ```GHI CHÚ: Tác vụ này chỉ hiển thị khi máy chủ đang ở trạng thái "Stopped".```
    
    Chọn menu **Tác vụ > Khôi phục mật khẩu** để khôi phục lại mật khẩu. Mật khẩu mới sẽ được thông báo qua email.
    
4. ##### Cài đặt Hệ Điều Hành  {#rebuild}
    ```CẢNH BÁO: SAO LƯU DỮ LIỆU TRƯỚC KHI THỰC HIỆN TÁC VỤ NÀY. Toàn bộ dữ liệu trên đĩa khởi động sẽ bị xóa.```
    Chọn menu **Tác vụ > Cài đặt hệ điều hành**. Màn hình hướng dẫn cài đặt hệ điều hành sẽ hiển thị. 
    
    Chọn hệ điều hành có sẵn hoặc snapshot (Xem thêm [Snapshot][snapshot]). Sau đó nhấn **Cài đặt HĐH** để tiến hành cái đặt lại hệ điều hành.   
5. ##### Nâng cấp/Hạ cấp  {#upgrade}
    ```GHI CHÚ:```
    
    ```* Tác vụ này chỉ có thể thực hiện khi máy chủ đang ở trạng thái "Stopped".```
    ```* Số dư tài khoản phải đủ mới có thể tiến hành nâng cấp máy chủ.```
    
    Chọn menu **Tác vụ > Nâng cấp/Hạ cấp**. Màn hình danh sách cấu hình máy chủ sẽ hiển thị. Chọn cấu hình máy chủ phù hợp và nhấn **Nâng cấp/Hạ cấp** để thực hiện tác vụ.
    
6. ##### Thay đổi tường lửa  {#change_security_group}
    Chọn menu **Tác vụ > Thay đổi tường lửa**. Màn hình danh sách tường lửa sẽ hiển thị. Chọn tường lửa bạn muốn cấu hình cho máy chủ và nhấn **Lưu thay đổi** để thực hiện tác vụ.


[snapshot]: {{site.url}}/docs/cloud-server/snapshot