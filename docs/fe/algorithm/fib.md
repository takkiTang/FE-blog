# 斐波那契数列

## 递归

```js
const fib = n =>
  n == 2 ? 1 :
  n == 1 ? 1 :
  fib(n - 1) + fib(n - 2)
```

### 尾递归

```js
const fib = n =>
  n === 1 ? 1 :
  n === 2 ? 1 :
  fib_inner(2, n, 1, 0)

const fib_inner = (start, end, prev1, prev2) =>
  start === end ? prev1 + prev2 :
  fib_inner(start + 1, end, prev1 + prev2, prev1)
```

### 迭代

```js
const fib = n => {
  if (n <= 2) return 1
  let prev = 1
  let next = 1
  for (let i = 2; i < n; i++) {
    let cur = prev + next
    next = prev
    prev = cur
  }
  return prev
}
```