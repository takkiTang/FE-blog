# new

1. 创建一个新对象。
2. 这个新对象会被执行 [[原型]] 连接。
3. 属性和方法被加入到 this 引用的对象中。并执行了构造函数中的方法.
4. 如果函数没有返回其他对象，那么 this 指向这个新对象，否则 this 指向构造函数中返回的对象。


``` js
function _new(constructor,...args) {
  // 创建一个空的对象
  let target = {}
  // 链接到原型
  target.__proto__ = constructor.prototype
  // 绑定 this，执行构造函数
  let result = constructor.apply(target, args)
  // 确保 new 出来的是个对象
  return typeof result === 'object' ? result : target
}
```
