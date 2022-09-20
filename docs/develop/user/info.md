# 获取用户所有学号

### 接口

GET `https://api.hduhelp.com/user/info`

### 功能描述

用于获取用户所有学号信息。

### Content-Type

`application/json`

### 返回字段

| 字段名        | 	类型      | 	描述    |
|------------|----------|--------|
| school     | string   | 学校     |
| nowStaffId | string   | 用户当前学号 |
| staffIds   | []string | 用户学号列表 |

### 示例
```json
{
  "error":0,
  "msg":"success",
  "data":{
    "school":"hdu",
    "nowStaffId":"22123456",
    "staffIds":[
      "22123456",
      "18123456"
    ]
  },
  "cache":false
}
```
