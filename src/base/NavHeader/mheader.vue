<template>
    <div class="header">
      <slot></slot>
      <i v-if="back" @click="goBack" class="iconfont icon-fanhui1"></i>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {}
        },
        props:{
          back:{//是否显示返回
            type:Boolean,
            default:false
          }
        },
        methods: {
          goBack(){
            this.$router.go(-1)
          }
        }
    };
</script>
<style lang="less">
  @import "header.less";
</style>
