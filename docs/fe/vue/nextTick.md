# nextTick

> 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

Vue 在更新 DOM 时是**异步**执行的

只要侦听到数据变化，Vue 将开启一个**队列**，并**缓冲**在**同一事件循环**中发生的所有数据变更

如果**同一个 watcher** 被多次触发，只会被 **推入到队列中一次**。这种在缓冲时去除重复数据对于避免不必要的**计算**和 **DOM 操作**是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作

Vue 在内部对异步队列尝试使用原生的 `Promise.then`、`MutationObserver`(监视对DOM树所做更改的能力) 和 `setImmediate`，如果执行环境不支持，则会采用 `setTimeout(fn, 0)` 代替。

**Vue 2.6降级方案 Promise.then > MutationObserver > setImmediate > setTimeout**