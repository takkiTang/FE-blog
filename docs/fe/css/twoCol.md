# CSS 布局——两栏布局

## 左列定宽，右列自适应

- calc

```css
.box {
  display: flex;
}
.right {
  width: calc(100% - 100px);
}
```

- absolute

```css
.box {
  position: relative;
}
.left {
  postion: absolute;
}
.right {
  margin-left: 100px;
}
```

- flex

```css
.box {
  display: flex;
}
.left {
  flex-basis: 100px;
}
.right {
  flex-grow: 1;
}
```

## 左列不定宽，右列自适应

- float

```css
.left {
  float: left;
}
.right {
  display: flow-root; /*触发BFC*/
}
```

- flex

```css
.right {
  flex-grow: 1;
}
```

# 三栏布局

- flex

- float

```html
<div class="wrap">
  <div class="left">左侧</div>
  <div class="right">右侧</div>
  <div class="center">中间</div>
  /*注意*/
</div>

<style>
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .center {
    margin-left: left-width;
    margin-right: right-width;
  }
</style>
```

- position

```css
.left {
  position: absolute;
  left: 0;
}
.right {
  position: absolute;
  top: 0;
  right: 0;
}
.center {
  margin: 0 right-width 0 left-width;
}
```
