# promise 

Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值

![](https://mdn.mozillademos.org/files/8633/promises.png)

## promise

```js
const isFun = fn => typeof fn === 'function'

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECT = 'reject'

class promise {
  constructor(executor) {
    // 判断入参是否为函数，非函数抛出错误
    if (!isFun(executor)) {
      throw TypeError(`Promise resolver ${executor} is not a function`)
    }
    // 初始化
    this.status = PENDING
    this.value = undefined
    // 成功失败回调
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    // 执行表达式
    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (e) {
      this.reject(e)
    }
  }
  // 成功
  resolve(value) {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      this.onFulfilledCallbacks.forEach(fn => fn())
    }
  }
  // 失败
  reject(reason) {
    if (this.status === PENDING) {
      this.status = REJECT
      this.value = reason
      this.onRejectedCallbacks.forEach(fn => fn())
    }
  }
  then(onFulfilled, onRejected) {
    // 判断入参是否为函数，非函数直接返回值
    if (!isFun(onFulfilled)) {
      onFulfilled = val => val
    }
    // 判断入参是否为函数，非函数抛出错误
    if (!isFun(onRejected)) {
      onRejected = reason => {
        throw reason
      }
    }
    // 返回一个实例
    let promise2 = new promise((resolve, reject) => {
      switch (this.status) {
        case PENDING: {
          this.onFulfilledCallbacks.push(() => {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          })
          this.onRejectedCallbacks.push(() => {
            let x = onRejected(this.value)
            resolvePromise(promise2, x, resolve, reject)
          })
          break
        }
        case FULFILLED: {
          let x = onFulfilled(this.value)
          resolvePromise(promise2, x, resolve, reject)
          break
        }
        case REJECT: {
          let x = onRejected(this.value)
          resolvePromise(promise2, x, resolve, reject)
          break
        }
      }
    })
    return promise2
  }
  // 核心方法
  resolvePromise(promise, x, resolve, reject) {
    // 有可能x===promise
    if (x === promise) {
      return reject(
        new TypeError(
          'TypeError: Chaining cycle detected for promise #<Promise>'
        )
      )
    }
    // 如果是第三方的Promise
    let called // 文档要求，一旦成功，不能调用失败
    if ((x !== null && typeof x === 'object') || typeof x === 'function') {
      // x可能是一个promise
      try {
        // x = {then:function(){}}
        let then = x.then // 取then方法

        if (typeof then === 'function') {
          then.call(
            x,
            function(y) {
              if (!called) {
                called = true
              } else {
                return
              }
              resolvePromise(x, y, resolve, reject) // 递归检查promise
            },
            function(r) {
              if (!called) {
                called = true
              } else {
                return
              }
              reject(r)
            }
          )
        } else {
          resolve(x) // 普通值
        }
      } catch (error) {
        if (!called) {
          called = true
        } else {
          return
        }
        reject(error)
      }
    } else {
      // x是普通值，直接返回
      resolve(x)
    }
  }
}
```

## promise.all()

```js
const all = promises =>
  new Promise((resolve, reject) => {
    let resArr = []
    let count = 0
    promises.forEach(promise => {
      promise.then(
        res => {
          count++
          resArr.push(res)
          if (count === promises.length) {
            resolve(resArr)
          }
        },
        err => {
          reject(err)
        }
      )
    })
  })
```

## promise.race()

```js
const race = promises =>
  new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(resolve, reject)
    })
  })
```
