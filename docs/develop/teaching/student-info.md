# 获取学生基本信息

### 接口

GET `https://api.hduhelp.com/salmon_base/student/info`

### 功能描述

用于获取学校时间。

### Content-Type

`application/json`

### 返回字段

| 字段名         | 	类型    | 	描述    |
|-------------|--------|--------|
| staffId     | string | 学号     |
| staffName   | string | 姓名     |
| classId     | string | 教室号    |
| unitId      | string | 学院号    |
| unitName    | string | 学院名称   |
| majorId     | string | 专业号    |
| majorName   | string | 专业名称术  |
| teacherId   | string | 辅导员工号  |
| teacherName | string | 辅导员名称  |

### 示例
```json
{
  "error": 0,
  "msg": "success",
  "data": {
    "staffId": "21053456",
    "staffName": "张三",
    "classId": "21053456",
    "unitId": "05",
    "unitName": "计算机学院（软件学院）",
    "majorId": "0523",
    "majorName": "计算机科学与技术",
    "teacherId": "12345",
    "teacherName": "李四"
  }
}
```
