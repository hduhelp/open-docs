# 获取空教室列表

### 接口

GET ` https://api.hduhelp.com/salmon_base/teaching/classroom/unused?schoolYear=2021-2022&semester=2&week=5&weekday=1&section=5`

### 功能描述

用于获取空教室列表。

### Content-Type

`application/json`

### 返回字段

| 字段名        | 	类型    | 	描述   |
|------------|--------|-------|
| schoolYear | string | 学年    |
| semester   | string | 学期    |

### 示例
```json
{
  "cache": true,
  "data": {
    "Items": [
      {
        "BuildingID": "11",
        "LocationID": "1234",
        "LocationName": "第11教研楼504",
        "SchoolYear": "2021-2022",
        "Semester": 2,
        "available": true
      },
      {
        "BuildingID": "11",
        "LocationID": "1235",
        "LocationName": "第11教研楼505",
        "SchoolYear": "2021-2022",
        "Semester": 2,
        "available": false
      }
    ]
  },
  "error": 0,
  "msg": "success"
}
```
