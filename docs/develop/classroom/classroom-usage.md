# 获取空教室列表

### 接口

GET ` https://api.hduhelp.com/salmon_base/teaching/classroom/unused?schoolYear=2021-2022&semester=2&week=5&weekday=1&section=5`

### 功能描述

用于获取某一教室使用情况。

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
  "cache": false,
  "data": {
    "Items": [
      {
        "ClassID": "07-2008-1)-A123456-12345-1",
        "Classroom": {
          "BuildingID": "11",
          "LocationID": "111504",
          "LocationName": "第11教研楼504",
          "SchoolYear": "2021-2022",
          "Semester": 2
        },
        "CourseCode": "A0102360",
        "CourseName": "微机原理与接口技术",
        "Section": [
          3,
          4,
          5
        ],
        "Week": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17
        ],
        "Weekday": 3
      },
      {
        "ClassID": "12-2013-2)-A123456-12345-1",
        "Classroom": {
          "BuildingID": "11",
          "LocationID": "111504",
          "LocationName": "第11教研楼504",
          "SchoolYear": "2021-2022",
          "Semester": 2
        },
        "CourseCode": "A0102610",
        "CourseName": "互换性与技术测量",
        "Section": [
          1,
          2
        ],
        "Week": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12
        ],
        "Weekday": 5
      }
    ]
  },
  "error": 0,
  "msg": "success"
}
```
