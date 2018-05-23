
### 项目目录

```bash
├── build                                        // webpack配置文件
├── config                                       // 项目打包路径
├── mock                                         // 模拟数据、运行server.js
├── src                                          // 源码目录
│   ├── api                                     // 请求数据接口
│   ├── base                                    // 页面主体部分
│   │   ├── NavHeader                          // 头部title部分
│   │   ├── Swiper                             // 轮播图部分
│   │   ├── Tab                                // 底部按钮
│   │   ├── Loading.vue                        // loading组件
│   ├── components                              // 组件
│   │   ├── Add                                // 购买商品的按钮组件
│   │   │   ├── Add.vue
│   │   ├── Detail                             // 点击商品出现商品详情页组件
│   │   │   └── Detail.vue
│   │   ├── Home                               // 商品页面组建
│   │   │   └── Home.vue
│   │   ├── List
│   │   │   └── List.vue                      // 头部组件
│   │   ├── ShoppingCart
│   │   │   └── ShoppingCart.vue              // 评价页面组件
│   ├── router
│   │   ├── router.js                          // 路由
│   ├── store                                   // vuex数据处理
│   │   ├── getters.js
│   │   ├── index.js
│   │   ├── type.js
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── static                                       // 静态资源文件
├── index.html                                   // 入口html文件
```
#### 项目运行
 ![image](https://github.com/wl001/ShoppingCart/blob/master/static/img/ShoppingCart.gif)

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
