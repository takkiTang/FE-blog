# this

> 谁调用它，this 就指向谁

函数返回值的影响因素

- 函数调用时的参数 params 
- 函数定义时的环境 env

### 全局环境中的 this

浏览器环境：无论是否在严格模式下，在全局执行环境中（在任何函数体外部）this 都指向全局对象 **window**;

node 环境：无论是否在严格模式下，在全局执行环境中（在任何函数体外部），this 都是空对象 **{}**;

### new 绑定

如果是 new 绑定，并且构造函数中没有返回 function 或者是 object，那么 this 指向这个**新对象**。

[new 实现原理](/JavaScript/new.md)

### call,apply,bind 显式绑定

this 绑定的就是**指定对象**。

如果 call,apply,bind 传入的第一个参数值是 undefined 或者 null，严格模式下 this 的值为传入的值 null /undefined。非严格模式下，实际应用的默认绑定规则，this 指向全局对象(node 环境为 global，浏览器环境为 window)。

[call,apply,bind](/JavaScript/call.md)


### 隐式绑定，函数的调用是在某个对象上触发的，即调用位置上存在上下文对象

```js
function info() {
  console.log(this.age)
}
let person = {
  age: 20,
  info,
}
let age = 28
person.info() //20;执行的是隐式绑定
```

### 默认绑定，在不能应用其它绑定规则时使用的默认规则，通常是独立函数调用

非严格模式： node 环境，执行全局对象 global，浏览器环境，执行全局对象 window。

严格模式：执行 undefined

### 箭头函数

箭头函数没有自己的 this，继承外层上下文绑定的 this。