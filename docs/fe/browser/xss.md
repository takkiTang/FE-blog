# XSS 攻击

> 跨站脚本攻击(Cross-site scripting)

跨站脚本攻击Cross-site scripting (XSS)是一种安全漏洞，攻击者可以利用这种漏洞在网站上注入恶意的客户端代码。当被攻击者登陆网站时就会自动运行这些恶意代码，从而，攻击者可以突破网站的访问权限，冒充受害者。

![xss](/img/xss.jpg)

## 如何预防

- HttpOnly 防止劫取 Cookie
- 用户的输入检查
- 服务端的输出检查

## CSP

> 内容安全策略 (CSP) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段。

我们可以通过 CSP 来尽量减少 XSS 攻击。CSP 本质上也是建立白名单，规定了浏览器只能够执行特定来源的代码。

通常可以通过 HTTP Header 中的 Content-Security-Policy 来开启 CSP

- 只允许加载本站资源

`Content-Security-Policy: default-src ‘self’`

- 只允许加载 HTTPS 协议图片

`Content-Security-Policy: img-src https://*`

- 允许加载任何来源框架

`Content-Security-Policy: child-src 'none'`
