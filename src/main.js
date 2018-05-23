// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'
//图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.png',
  attempt: 1
});

Vue.config.productionTip = false
//导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);

// 在进入路由之前 每一次都会执行此方法,全局钩子,拦截功能
router.beforeEach(function(to,from,next){
  document.title = to.meta.title;
  if(to.path === '/list'){
    // next({path:'/add'})//也可以跳转
    next();
  }else{
    next();
  }
})


let a= new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

