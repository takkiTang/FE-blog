# 排序算法

!['sort'](/img/sort.png)

## 时间复杂度

通常使用最差的时间复杂度来衡量一个算法的好坏。

常数时间 O(1) 代表这个操作和数据量没关系，是一个固定时间的操作，比如说四则运算。

对于一个算法来说，可能会计算出如下操作次数 aN + 1，N 代表数据量。那么该算法的时间复杂度就是 O(N)。因为我们在计算时间复杂度的时候，数据量通常是非常大的，这时候低阶项和常数项可以忽略不计。

当然可能会出现两个算法都是 O(N) 的时间复杂度，那么对比两个算法的好坏就要通过对比低阶项和常数项了

## 冒泡排序

核心： 相邻两两比较

```js
function bubble(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
```

时间复杂度： O(n^2)

## 快速排序

核心：从数组中选取一个元素并将其表示为基准点，把数组中的所有其他元素分为两类 - 它们小于或大于此基准点

```js
function quickSort(arr) {
  /*
   * 创建len保存数组的长度，每次获取数组的长度都要实时查询不利于性能；
   * pivot保存比较参照物；
   * left、right作为子数组的容器；
   */
  let len = arr.length
  if (len <= 1) {
    return arr 
  }
  let left = []
  let right = []
  let pivot = arr[0] // 选取基准点
  for (let i = 1; i < len; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
  }
  return quickSort(left).concat(pivot, quickSort(right))
}
```

时间复杂度：o(nlogn)