# 获取学校时间

### 接口

GET `https://api.hduhelp.com/time`

### 功能描述

用于获取学校时间。

### Content-Type

`application/json`

### 返回字段

| 字段名        | 	类型    | 	描述   |
|------------|--------|-------|
| schoolYear | string | 学年    |
| semester   | string | 学期    |
| timeStamp  | string | 当前时间戳 |
| weekDayNow | int    | 第几周   |
| weekNow    | int    | 星期几   |
| section    | int    | 第几节课  |

### 示例
```json
{
  "error":0,
  "msg":"success",
  "data":{
    "schoolYear":"2022-2023",
    "section":0, 
    "semester":"1",
    "timeStamp":"1663669842",
    "weekDayNow":2,
    "weekNow":4
  }
}
```
