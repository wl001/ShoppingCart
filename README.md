# wanglei

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 路由元信息  分页面缓存

## /page
- 下拉加载 默认每次后台加载5条 前端告诉后台现在要重第几条开始给我
- /page？offset=5
- 后台返回还要告诉前端是否有更多的数据 hasMore:true

## 滚动到页面底部自动加载更多
scrollTop //方法返回或设置匹配元素的滚动条的垂直位置高度
元素.clientHeight //指的是元素内容及其边框所占据的空间大小

scrollTop + 元素.clientHeight +20(距离页面底部20px) ==元素的总高.scrollHeight

## 代码优化 coding solit代码分割
- 点击当前页面加载当前页面的数据而不是一起全部请求
