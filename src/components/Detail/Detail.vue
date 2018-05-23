<template>
    <div class="detail">
      <Mheader :back="true">图书详情</Mheader>
        <ul >
          <li>
            <label for="bookName">书的名称</label>
            <input type="text" v-model.number="book.bookName" id="bookName">
          </li>
          <li>
            <label for="bookInfo">书的信息</label>
            <input type="text" v-model.number="book.bookInfo" id="bookInfo">
          </li>
          <li>
            <label for="bookPrice">书的价格</label>
            <input type="text" v-model.number="book.bookPrice" id="bookPrice">
          </li>
          <li>
            <button @click="update">确认修改</button>
          </li>
        </ul>
      </div>
</template>

<script type="text/ecmascript-6">
  import Mheader from '../../base/NavHeader/mheader.vue'
  import {findOneBook,updateBook} from '../../api'
  export default {
    created(){//页面一加载需要根据id发起请求
      this.getData();
    },
    watch:{
      $route(){//监控路由只要路径变化就重新获取数据
        this.getData();
      }
    },
    data(){
      return {
        book:{}
      }
    },
    methods: {
      async getData(){
        //通过id找到某一项后赋给book
      this.book = await findOneBook(this.bid)
       //如果是空对象 需要跳转回列表页
        Object.keys(this.book).length>0?void 0:this.$router.push('/list');
      },
      async update(){ // 点击修改图书信息
        await updateBook(this.bid,this.book);
        this.$router.push('/list'); // 修改完成后跳转页面
      },
    },
    computed: {
      bid(){
        return this.$route.params.bid
      }
    },
    components: {
      Mheader
    }
  };
</script>
<style  lang="less" >
  @import "Detail.less";
</style>
