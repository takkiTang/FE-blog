# new Vue 发生了什么

- 创建 Vue 实例对象
- `init` 过程会初始化 `lifecycle`，初始化 `events`，初始化 `render` ,执行 `beforeCreate` 钩子函数、初始化 `inject`,初始化 `state`（props -> methods -> **data** -> computed -> watcher）、初始化 `provider`，执行 `created`  钩子函数。
- 初始化后，调用 `$mount` 方法对 `Vue` 实例进行挂载（挂载的核心过程包括模板编译、渲染以及更新三个过程）。
- 如果定义了`template`，需要编译将 `template` -> `render function`。
  1. `parse` 正则解析 `template` 字符串形成 `AST` 
  2. `optimize` 标记静态节点跳过 `diff` 算法
  3. `genarate` 将 `AST` 转化成 `render function`
- 编译成`render function` 后，调用`$mount`的`mountComponent`方法，执行`beforeMount`钩子函数，然后核心是实例化一个渲染`Watcher`，在它的回调函数中调用`updateComponent`方法，执行`mounted`钩子函数。
  1. 调用`render`方法将`render function`渲染成`VNode`。
  2. 生成 `VNode` 后调用 `pacth`方法将 `VNode` 转化成 `DOM`。


