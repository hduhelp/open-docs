# 获取员工信息

### 接口

GET `https://api.hduhelp.com/salmon_base/person/info`

### 功能描述

用于获取员工信息。

### Content-Type

`application/json`

### 返回字段

| 字段名        | 	类型     | 	描述                         |
|------------|---------|-----------------------------|
| staffId    | string  | 学号                          |
| staffName  | string  | 姓名                          |
| staffState | string  | 在校状态                        |
| staffType  | string  | 学生类型 （1代表本科生，2代表教师，3代表研究生）  |
| unitCode   | string  | 学院名称                        |

### 示例
```json
{
  "error": 0,
  "msg": "success",
  "data": {
    "staffId": "21053456",
    "staffName": "张三",
    "staffState": "在校",
    "staffType": "1",
    "unitCode": "05"
  }
}
```
