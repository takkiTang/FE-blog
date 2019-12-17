## Call,Apply,Bind

相同点：

- 改变**函数**的this对象的指向
- 第一个参数都是 this 要指向的对象
- 都可以利用后续参数传参

不同点：

- 参数传递方式不同
- bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。

基本使用：

```js
Array.prototype.slice.call(obj, 0, 1, 2)
Array.prototype.slice.apply(obj, [0, 1, 2])
Array.prototype.slice.bind(obj)(0, 1, 2)
```

简易 bind 实现

```js
// arguments参数是个伪数组，通过 Array.prototype.slice.call 转化为标准数组
Function.prototype.bind = function(context) { // 不能使用箭头函数
  return () => {
    this.apply(context, Array.prototype.slice.call(arguments))
  }
}
```

上面的 bind 只实现了方法的作用域绑定，参数已经固定，如果想要动态的参数我们得改写一下

```js
Function.prototype.bind = function(context) {
  const argus = Array.prototype.slice.apply(arguments, [1])
  return () => {
    this.apply(context, argus.concat(Array.prototype.slice.call(arguments)))
  }
}
```

### call实现

```js
Function.prototype.call = function(ctx = window,...args) {
 ctx.fn = this 
 let res = ctx.fn(...args)
 delete ctx.fn
 return res
}

```

### apply实现

```js
Function.prototype.apply = function(ctx = window,...args) {
 ctx.fn = this 
 let res = ctx.fn(args)
 delete ctx.fn
 return res
}

```

