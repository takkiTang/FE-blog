# CSS 盒模型

盒模型包含了元素内容（`content`）、内边距（`padding`）、边框（`border`）、外边距（`margin`）几个要素。如图所示：

![盒模型](/img/盒模型.png)

## 标准模型和 IE 模型的区别

IE 模型和标准模型唯一的区别是内容计算方式的不同，如下图所示：

![盒模型](/img/IE盒模型.png)

IE 模型元素宽度 width=content+padding+border，高度计算相同

![盒模型](/img/标准盒模型.png)

标准模型元素宽度 width=content，高度计算相同

## CSS 改变盒模型

`box-sizing` 属性用于更改用于计算元素宽度和高度的默认的 CSS 盒子模型

```css
box-sizing: content-box;
box-sizing: border-box; /*IE盒模型*/
box-sizing: padding-box;
```
