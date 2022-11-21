# 获取 access_token

## 在开始之前
您需要在平台配置以下内容

| 	描述         | 说明                           |
|-------------|------------------------------|
| redirectUrl | 您服务接收oauth完成后返回code和state的路由 |

##  步骤

### 发起请求（询问用户授权）

构造URL:`https://api.hduhelp.com/oauth/authorize?response_type=code&client_id=[提供的clientID]&redirect_uri=[callback对应的url]&state=[您自己生成的state]`

发起302跳转，使用户浏览器访问这个URL

用户完成授权后，将携带 code 与 state 跳转回 redirectUrl 所对应的地址 （下文将称这一步骤为 callback）

#### callback路由的格式

callback路由将使用GET方法，有两个query：code,state

（可选）注意校验请求是否来自`api.hduhelp.com`，以缓解利用助手的CSRF攻击

### 获取access_token

Method:GET

构造URL:`https://api.hduhelp.com/oauth/token?client_id=[提供的clientID]&client_secret=[提供的client_secret]&grant_type=authorization_code&code=[callback中获取的code]&state=[callback中获取的state]`

响应示例：

```json
{
  "error": 0,
  "msg": "success",
  "data": {
    "access_token": "123456",
    "access_token_expire": 123456789,
    "refresh_token": "123456",
    "refresh_token_expire": 123456789,
    "staff_id": "12345678",
    "staff_name": "张三",
    "staff_type": "1",
    "user_id": "123-123-123-123"
  }
}
```

### staff_type 对应关系

| staff_type | 对应身份 |
|------------|------|
| 1          | 本科生  |
| 2          |  教职工 |
| 3          |  研究生 |
