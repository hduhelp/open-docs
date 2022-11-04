# 获取用户头像等信息

### 接口

GET `https://api.hduhelp.com/user/get`

### 功能描述

用于获取用户头像等信息。

### Content-Type

`application/json`

### 返回字段

| 字段名    | 	类型     | 	描述          |
|--------|---------|--------------|
| nick   | string  | 用户昵称（预留字段）   |
| avatar | 	string | 用户头像地址（预留字段） |

### 示例
```json
{
  "error": 0,
  "msg": "success",
  "data": {
    "nick": "助手用户",
    "avatar": "https://cinnamon.hduhelp.com/default_avatar.jpg"
  },
  "cache": false
}
```
