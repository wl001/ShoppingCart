import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../components/Home/Home'
import List from '../components/List/List.vue'
//import Collect from '../components/Collect.vue'
import Detail from '../components/Detail/Detail.vue'
import Add from '../components/Add/Add.vue'
import Shopping from '../components/ShoppingCart/ShoppingCart.vue'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        //this.$router.meta.keepAlive 为true就缓存否则不缓存
        keepAlive:true,
        title:'首页'
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      meta:{
        title:'列表'
      }
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping,
      meta:{
        title:'购物车'
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      meta:{
        title:'详情'
      }
    },
    {
      path: '/add',
      name: 'Add',
      component: Add,
      meta:{
        title:'添加'
      }
    },
    //{
    //  path: '/collect',
    //  name: 'Collect',
    //  component: Collect,
    //  meta:{
    //    title:'vuex'
    //  }
    //}
  ]
})
