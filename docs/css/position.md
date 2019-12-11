# position

CSS `position`属性用于指定一个元素在文档中的定位方式。`top`，`right`，`bottom` 和 `left` 属性则决定了该元素的最终位置。


## static

- 文档流正常布局
- `top`, `right`, `bottom`, `left` 和 `z-index` 属性无效。

## relative

- 未添加定位时的位置偏移
- 预留空间（未添加定位时所在位置留下空白）

## absolute

- 非 `static` 定位祖先元素的偏移
- 不预留空间
- 脱离文档流

## fixed

- 相对于<b>屏幕视口 (viewport)</b>定位
- 当元素祖先的 `transform`  属性非 none 时，容器由视口改为该祖先
- 当元素祖先的 `transform-style: preserve-3d `的元素，容器由视口改为该祖先
- 当元素祖先的 `perspective` 值不为 none 的元素，容器由视口改为该祖先
- 当元素祖先的 `will-change` 中指定了任意 CSS 属性，容器由视口改为该祖先

<iframe width="100%" height="300" src="//jsfiddle.net/takkiTang/kargft7u/11/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## sticky

- relative和fixed混合
- 元素在跨越特定阈值前为relative，之后为fixed

## inherit

-  继承