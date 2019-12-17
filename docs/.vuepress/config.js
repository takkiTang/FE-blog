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
    lastUpdated: '上次更新时间',
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: "前端",
      link: '/fe/'
    }, {
      text: 'Vue源码分析',
      link: '/vuesource/'
    }, {
      text: 'Leetcode',
      link: '/leetcode/'
    }, {
      text: 'HTTP',
      link: '/http/'
    }],
    sidebar: {
      '/fe/': [
        '',
        {
          title: 'HTML',
          collapsable: false,
          children: addPath('/fe/html/', [
            '语义化',
            'meta',
          ])
        },
        {
          title: 'CSS',
          collapsable: false,
          children: addPath('/fe/css/', [
            'bfc',
            'flex',
            // 'grid',
            'position',
            '两栏布局',
            '水平垂直居中',
            '盒模型',
            'em rem',
            'none',
          ])
        },
        {
          title: 'JavaScript',
          collapsable: false,
          children: addPath('/fe/js/', [
            '数据类型和数据结构',
            '原型',
            '继承',
            'new',
            'this',
            '闭包',
            'ajax',
            'asyncawait',
            'call',
            'class',
            'let',
            'map',
            'promise',
            '函数防抖',
            '数组去重',
            '数组扁平化',
            '模块化',
            '深拷贝',
            '箭头函数',
          ])
        },
        {
          title: 'Vue',
          collapsable: false,
          children: addPath('/fe/vue/', [
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
          title: '浏览器',
          collapsable: false,
          children: addPath('/fe/browser/', ['浏览器渲染过程', '跨域', 'eventLoop', '事件模型', 'xss', 'csrf', '持久化', '性能优化'])
        },
        {
          title: '常见代码',
          collapsable: false,
          children: addPath('/fe/algorithm/', [
            'sort',
            'dfs bfs',
            '柯里化函数'
          ])
        },
      ],
      '/leetcode/': [{
        title: 'LeetCode',
        collapsable: false,
        children: addPath('/leetcode/', [
          ''
        ])
      }],
      '/vuesource/': [
        '',
        {
          title: 'Vue 源码分析',
          collapsable: false,
          children: addPath('/vuesource/', [
            '1'
          ])
        }
      ],
      '/http': [{
        title: 'HTTP',
        collapsable: false,
        children: addPath('/http/', [
          '',
          '304'
        ])
      }]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}

function addPath(path, pathArr) {
  return pathArr.map(item => {
    return Array.isArray(item) ? [path + item[0], item[1]] : path + item
  })

}