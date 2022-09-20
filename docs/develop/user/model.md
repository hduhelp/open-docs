# 用户对象(User)
用户对象中所涉及的 ID 类数据，都仅在助手场景流通，与真实的 ID 无关。请不要理解为真实的 ID

# User
| 字段名       | 	类型      | 	描述                     |
|-----------|----------|-------------------------|
| user_id   | 	string  | 用户 id，助手独创的字段，用于统一多学号用户 |
| username  | 	string  | 用户真实姓名                  |
| nick      | string   | 用户昵称（预留字段）              |
| avatar    | 	string  | 用户头像地址（预留字段）            |
| staff_id  | string   | 用户当前正在使用的学号             |
| staff_ids | []string | 用户所有学号                  |
