module.exports = {
  title: 'FE Docs',
  description: '前端知识点',
  head: [
    ['link', {
      rel: 'icon',
      href: '/img/logo.png'
    }]
  ],
  // 注入到当前页面的 HTML <head> 中的标签
  base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    sidebar: {
      '/': getBasicSidebar('HTML', 'CSS', 'JavaScript', 'vue', '浏览器', '算法','HTTP')
    }
  }
}

function getBasicSidebar() {

  return [{
      title: arguments[0],
      collapsable: false,
      children: addPath('/html/', [
        '语义化',
        'meta',
      ])
    },
    {
      title: arguments[1],
      collapsable: false,
      children: addPath('/css/', [
        'bfc.md',
        'flex.md',
        // 'grid.md',
        'position.md',
        '两栏布局.md',
        '水平垂直居中.md',
        '盒模型.md',
        'em rem.md',
        'none.md',
      ])
    },
    {
      title: arguments[2],
      collapsable: false,
      children: addPath('/JavaScript/', [
        '数据类型和数据结构.md',
        '原型.md',
        '继承.md',
        'new.md',
        'this.md',
        '闭包.md',
        'ajax.md',
        'asyncawait.md',
        'call.md',
        'class.md',
        'let.md',
        'map.md',
        'promise.md',
        '函数防抖.md',
        '懒加载.md',
        '数组去重.md',
        '数组扁平化.md',
        '模块化.md',
        '深拷贝.md',
        '箭头函数.md',
      ])
    },
    {
      title: arguments[3],
      collapsable: false,
      children: addPath('/Vue/', [
        'new Vue',
        '响应式原理',
        '路由',
        '生命周期',
        '自定义指令',
        '组件通信',
        '计算属性 VS 侦听属性',
        'Virtual DOM',
        'nextTick'
      ])
    },
    {
      title: arguments[4],
      collapsable: false,
      children: addPath('/browser/', ['浏览器渲染过程', '跨域', 'eventLoop', '事件模型', 'xss', 'csrf', '持久化', '性能优化'])
    },
    {
      title: arguments[5],
      collapsable: false,
      children: addPath('/algorithm/', [
        'sort',
        'dfs bfs',
        '柯里化函数'
      ])
    },
    {
      title: arguments[6],
      collapsable: false,
      children: addPath('/http/', [
        '304',
      ])
    }
  ]
}


function addPath(path, pathArr) {
  return pathArr.map(item => {
    return Array.isArray(item) ? [path + item[0], item[1]] : path + item
  })

}