# 获取所有教室列表

### 接口

GET `https://api.hduhelp.com/salmon_base/teaching/classroom`

### 功能描述

用于获取所有教室列表。

### Content-Type

`application/json`

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
        "Semester": 2
      },
      {
        "BuildingID": "11",
        "LocationID": "1235",
        "LocationName": "第11教研楼505",
        "SchoolYear": "2021-2022",
        "Semester": 2
      }
    ]
  },
  "error": 0,
  "msg": "success"
}
```
