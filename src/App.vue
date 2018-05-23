<template>
  <div id="app">
    <Tab></Tab>
  <!--需要缓存的页面-->
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>

    <!--不需要缓存的页面-->
    <transition name="fadeIn">
       <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
  import Tab from './base/Tab/Tab.vue'
  export default {
    name: 'App',
    components:{
      Tab
    }
  }
</script>

<style>
  .content{
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
    overflow: auto
  }
  /*当进入之前*/
  .fadeIn-enter{
    transition:all 1s linear;
    opacity: 0;
  }
  /*进入*/
  .fadeIn-enter-active{
    transition:all 0.3s linear;
  }
  /*离开*/
  .fadeIn-leave-active{
      transition:all 0.3s linear;
      opacity: 0;
  }
</style>
