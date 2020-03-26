# BFC 块级格式上下文

> BFC 元素特性表现原则就是，内部子元素再怎么翻江倒海，翻云覆雨都不会影响外部的元素

块格式化上下文（Block Formatting Context，BFC)

## 如何创建 BFC

- **根元素**或包含根元素的元素
- 浮动元素（元素的 **float** 不是 none）
- 绝对定位元素（元素的 **position** 为 absolute 或 fixed）
- **overflow** 值不为 visible 的块元素
- 弹性元素（display 为 **flex** 或 inline-flex 元素的直接子元素）
- 网格元素（display 为 **grid** 或 inline-grid 元素的直接子元素）
- display 值为 **flow-root** 的元素
- 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
- 行内块元素（元素的 display 为 inline-block）
- contain 值为 layout、content 或 strict 的元素
- 表格单元格（元素的 display 为 table-cell，HTML 表格单元格默认为该值）
- 表格标题（元素的 display 为 table-caption，HTML 表格标题默认为该值）
- 匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）
- column-span 为 all 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中。

## BFC 功能

- 用 BFC 包住浮动元素

<iframe width="100%" height="300" src="//jsfiddle.net/takkiTang/e56mro1g/8/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

- 相邻 BFC 划清界限

<iframe width="100%" height="300" src="//jsfiddle.net/takkiTang/e56mro1g/19/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

- 防止垂直 margin 重叠

> Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠

<iframe width="100%" height="300" src="//jsfiddle.net/takki/sm0n27h6/6/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>