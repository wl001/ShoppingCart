<template>
    <div class="footer">
        <router-link to="/home">
          <i class="iconfont icon-shouye"></i>
          <span>首页</span>
        </router-link>
        <router-link to="/list">
          <i class="iconfont icon-zixunliebiao"></i>
          <span>列表</span>
        </router-link>
        <router-link to="/shopping">
          <i class="iconfont icon-shoucang"></i>
          <span>购物车</span>
        </router-link>
        <router-link to="/add">
          <i class="iconfont icon-tianjia"></i>
          <span>添加</span>
        </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {

    };
</script>

<style lang="less">
  @import 'tab.less';
</style>
