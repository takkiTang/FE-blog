# CSRF 攻击

> 跨站请求伪造（英语：Cross-site request forgery)

跨站请求伪造（CSRF）是一种冒充受信任用户，向服务器发送非预期请求的攻击方式。

![csrf](/img/csrf.jpg)

## 如何预防

- 验证码
- Referer Check
- 添加 token 验证



### SameSite

可以对 Cookie 设置 SameSite 属性。该属性设置 Cookie 不随着跨域请求发送，该属性可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。

### 验证 Referer

对于需要防范 CSRF 的请求，我们可以通过验证 Referer 来判断该请求是否为第三方网站发起的。

### Token

服务器下发一个随机 Token（算法不能复杂），每次发起请求时将 Token 携带上，服务器验证 Token 是否有效。
