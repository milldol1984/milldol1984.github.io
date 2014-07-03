---
layout: docs
title: Cloud Server - Quản lý đĩa cứng
permalink: /docs/cloud-server/dia-cung/
tag: volumes
doc_title: Đĩa cứng
---
Đĩa cứng là thiết bị để lưu trữ dữ liệu trên máy chủ ảo. Có 2 loại đĩa cứng:

- Root (Boot): đĩa sử dụng để khởi động và không thể xóa.
- Data: sử dụng để lưu trữ dữ liệu. Bạn có thể thêm tối đa 3 ổ đĩa Data cho máy chủ ảo.

Mỗi ổ đĩa chỉ được gắn với một máy chủ. 

#### Danh sách đĩa cứng
Trên trang chủ Cloud Portal (Cloud Compute) chọn menu **Đĩa cứng > Đĩa cứng** để xem danh sách các ổ đĩa hiện tại trên hệ thống.

#### Thêm đĩa cứng
Tại trang **Danh sách đĩa cứng**, chọn **Thêm HDD**. Màn hình hiển thị thông tin ổ đĩa sẽ hiển thị:

- Tên.
- Mô tả.
- Kích thước ổ cứng (đơn vị GB).
- Cloud Server: chọn máy chủ ổ cứng được gắn vào
- Chu kỳ thanh toán

```GHI CHÚ: Bạn có thể xem chi phí trong quá trình chọn thông số cho đĩa cứng.```

Chọn **Thêm HDD** để tiến hành thêm đĩa cứng.

#### Gỡ đĩa cứng khỏi máy chủ
```GHI CHÚ:```

```* Không thể gỡ đĩa cứng khởi động (đĩa Root) khỏi máy chủ.```
```* Máy chủ phải ở trạng thái "Stopped" mới có thể thực hiện tác vụ này.```

Để gỡ đĩa cứng khỏi máy chủ, thực hiện các bước sau:

- Tại danh sách đĩa cứng, chọn **Tác vụ > Gỡ đĩa cứng khỏi máy chủ** trên đĩa cứng cần gỡ bỏ.
- Xác nhận để tiến hành gỡ đĩa cứng khỏi máy chủ.

#### Gắn đĩa cứng khỏi máy chủ
```GHI CHÚ:```

```* Mỗi đĩa cứng chỉ được gắn vào một máy chủ.```
```* Máy chủ phải ở trạng thái "Stopped" mới có thể thực hiện tác vụ này.```

Để gắn đĩa cứng vào máy chủ, thực hiện các bước sau:

- Tại danh sách đĩa cứng, chọn **Tác vụ > Gắn vào máy chủ** trên đĩa cứng cần gắn.
- Màn hình sẽ hiển thị danh sách máy chủ. Chọn máy chủ cần gắn đĩa cứng. Nhấn **Gắn vào máy chủ** để thực hiện tác vụ.

#### Tạo snapshot cho đĩa cứng {#snapshot}

```GHI CHÚ: Chỉ được tạo một snapshot cho một đĩa cứng tại cùng một thời điểm.```

Tại danh sách đĩa cứng, chọn **Tác vụ > Tạo snapshot** trên đĩa cứng cần xóa. Xác nhận để tiến hành tạo snapshot.

#### Xóa đĩa cứng

```CẢNH BÁO: SAO LƯU DỮ LIỆU TRƯỚC KHI THỰC HIỆN TÁC VỤ NÀY. Toàn bộ dữ liệu trên đĩa cứng sẽ bị xóa.```
```GHI CHÚ:```

```* Không thể xóa đĩa khởi động (đĩa Root) đang gắn vào máy chủ.```
```* Máy chủ phải ở trạng thái "Stopped" mới có thể thực hiện tác vụ này.```

Tại danh sách đĩa cứng, chọn **Tác vụ > Xóa** trên đĩa cứng cần xóa. Xác nhận để tiến hành xóa đĩa cứng.