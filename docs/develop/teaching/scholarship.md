# 获取奖学金

### 接口

GET `https://api.hduhelp.com/salmon_base/student/reward`

### 功能描述

用于获取学生奖学金信息。

### Content-Type

`application/json`

### 返回字段

| 字段名      | 类型   | 描述       |
| ----------- | ------ | ---------- |
| staffID     | string | 学号       |
| staffName   | string | 姓名       |
| rewardName  | string | 奖学金名称 |
| schoolYear  | string | 获奖年份   |
| semester    | string | 获奖学期   |
| rewardLevel | string | 获奖级别   |

### 示例
```json
{
    "error": 0,
    "msg": "success",
    "data": [
        {
            "staffID": "21000001",
            "staffName": "张三",
            "rewardName": "二等奖学金",
            "schoolYear": "2021",
            "semester": "第一学期",
            "rewardLevel": "校级"
        }
    ]
}
```
