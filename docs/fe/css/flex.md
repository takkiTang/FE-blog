# flex 布局

## 基本概念

Flex 的结构构成：
- Flex Container 
- Flex Item

![flex](/img/flex.png)


- 主轴是依靠 `flex-direction` 和 所有子元素在主轴方向上的 `item-size` 的总和确定的，`flex-direction` 这个属性可以控制子元素的排列方向和排列顺序。

- 侧轴是依靠 `flex-wrap` 和 所有子元素在主轴方向上的 `item-size` 的总和确定的，`flex-wrap` 可以控制子元素 在侧轴方向上的排列方式以及顺序。

| 作用在 flex 容器上               | 作用在 flex 子项上 |
| -------------------------------- | ------------------ |
| flex-flow                        | flex               |
| flex-direction                   | flex-shrink        |
| flex-wrap （单行/多行）          | flex-grow          |
| justify-content (分配主轴空间)   | flex-basis         |
| align-items （分配侧轴空间）     | order              |
| align-content (单行弹性盒子无效) | align-self         |

无论作用在 flex 容器上，还是作用在 flex 子项，都是控制的 flex 子项的呈现，只是前者控制的是整体，后者控制的是个体。
