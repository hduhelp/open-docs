# 获取学生所有课表


## 示例
`https://api.hduhelp.com/salmon_base/student/v2/schedule?schoolYear=2022-2023&semester=1
`

```json
{
    "error": 0,
    "msg": "success",
    "data": [
        {
            "ClassID": "DD94844EF73F4788E0536164A8C07036",
            "ClassName": "(2022-2023-1)-A0302280-4",
            "ClassTime": "星期五第6-7节{1-17周}",
            "CourseID": "A0302280",
            "CourseName": "工程经济学",
            "Credit": "2",
            "Schedule": [
                {
                    "Location": "第3教研楼101",
                    "SeatsNum": 120,
                    "Section": [
                        6,
                        7
                    ],
                    "Teachers": [
                        {
                            "StaffID": "21212",
                            "StaffName": "李四",
                            "StaffType": 3
                        }
                    ],
                    "Students": [],
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
                    "WeekDay": 5,
                    "IsThisWeek": false
                }
            ],
            "SchoolYear": "2022-2023",
            "Semester": 1
        },
        {
            "ClassID": "DEC924BCFFCAF882E0536264A8C07336",
            "ClassName": "(2022-2023-1)-A1103340-3",
            "ClassTime": "星期二第6-7节{1-2周};星期二第6-7节{3-5周,7-17周};星期日第6-7节{6周}",
            "CourseID": "A1103340",
            "CourseName": "当代美国社会与文化",
            "Credit": "2.0",
            "Schedule": [
                {
                    "Location": "第6教研楼中115",
                    "SeatsNum": 48,
                    "Section": [
                        6,
                        7
                    ],
                    "Teachers": [
                        {
                            "StaffID": "12345",
                            "StaffName": "张三",
                            "StaffType": 3
                        }
                    ],
                    "Students": [],
                    "Week": [
                        3,
                        4,
                        5,
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
                    "WeekDay": 2,
                    "IsThisWeek": false
                },
                {
                    "Location": "第7教研楼北318B",
                    "SeatsNum": 22,
                    "Section": [
                        6,
                        7
                    ],
                    "Teachers": [
                        {
                            "StaffID": "12345",
                            "StaffName": "张三",
                            "StaffType": 3
                        }
                    ],
                    "Students": [],
                    "Week": [
                        1,
                        2
                    ],
                    "WeekDay": 2,
                    "IsThisWeek": false
                }
            ],
            "SchoolYear": "2022-2023",
            "Semester": 1
        }
    ]
}
```
