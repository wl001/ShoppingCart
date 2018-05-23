<template>
    <div>
      <Mheader :back="true">collect</Mheader>
      <div class="content">
        <span style="font-size: 28px">计数器</span>
        <button @click="add()" style="font-size: 28px">增加</button><br/>
        <span style="font-size: 28px">当前</span>
        <span style="font-size: 28px;margin-left: 5px">
          {{$store.state.count}}
        </span> <br/>
        <span style="font-size: 28px">计数器</span>
        <button style="font-size: 28px" @click="minus">减少</button>
          当前是{{$store.getters.val}}<br/>
         {{val}}
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Mheader from '../base/NavHeader/mheader.vue'
  import { mapActions,mapGetters} from  'vuex'
  import * as Types from '../store/type'
  export default {
    computed:mapGetters([  //store.js中的getters返回数据
      'val',//获取数据 count
    ]),
    data(){
      return {}
    },
    created(){

    },
    methods: {
      add(){
        this.$store.commit(Types.INCREMENT,2)//直接向mutations发起事件
      },
      minus(){
        this.$store.commit(Types.DECREMENT)
      }
    },
    components: {
      Mheader
    }
  };
</script>
<style>

</style>
