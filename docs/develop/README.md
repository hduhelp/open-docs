# 开发说明

## 接口说明

平台提供基于 REST 风格的 OPENAPI，接口域名为 https://api.hduhelp.com

**除公共api外，所有接口都必须向杭电助手申请配置后才可使用，且必须添加 Authorization 头来进行鉴权**

## 票据
申请机器人通过后，平台将会下发两个票据。具体描述如下：

| 	描述            | 票据            |
|----------------|---------------|
| client_id	     | 用于识别服务提供方的 id |
| client_secret	 | 用于证明服务方身份的密钥  |

## OPENAPI 鉴权方式
使用在 HTTP 上添加 Authorization 头来进行鉴权。

Header:`Authorization` 值：`token [access_token]`

access_token 在用户授权操作中获取

## 加密
只支持 HTTPS。不支持不安全的 HTTP。
