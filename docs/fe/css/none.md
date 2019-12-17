# opacity: 0、visibility: hidden、display: none

- display：none 的子孙节点消失，这是由于元素从渲染树中消失造成，visibility:hidden 会子孙节点消失是由于继承性，可以设置 visibility：visible 让子孙节点显示；（场景，显示出原来这里不存在的结构）
- display：none 不占据任何空间；visibility：hidden 仍占据空间；（场景：显示不会导致页面结构发生变动，不会撑开）
- display:none 会引起回流和重绘，visibility:hidden 会引起重绘（场景：可以跟 transition 搭配）

|              | `display:none` | `visibility:hidden` | `opacity:0` |
| ------------ | -------------- | ------------------- | ----------- |
| 渲染树消失   | 消失           | 不消失              | 不消失      |
| 渲染占据空间 | 不占据         | 占据                | 占据        |
| 点击         | 不可以         | 不可以              | 可以        |
| 继承         | 非继承         | 继承                | 非继承      |
| 性能         | 回流           | 重绘                | 重绘        |
