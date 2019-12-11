# async

* 当调用一个 async 函数时，会返回一个 **Promise** 对象。
* 当这个 async 函数返回一个值时，Promise 的 resolve 方法会负责传递这个值。
* 当 async 函数抛出异常时，Promise 的 reject 方法也会传递这个异常值。