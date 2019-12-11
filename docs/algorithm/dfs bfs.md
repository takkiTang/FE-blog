## 深度优先算法

```js
const dfs = (node, nodeList = []) => {
  if (node) {
    nodeList.push(node)
    let children = node.children
    if (children) {
      children.forEach(item => {
        dfs(item, nodeList)
      })
    }
  }
  return nodeList
}
```

## 广度优先算法

```js
const bfs = node => {
  let stack = []
  let nodes = []
  if (node) {
    stack.push(node)
    while (stack.length) {
      let item = stack.shift()
      let children = item.children
      nodes.push(item)
      if (children) {
        children.forEach(item => {
          stack.push(item)
        })
      }
    }
  }
  return nodes
}
```
