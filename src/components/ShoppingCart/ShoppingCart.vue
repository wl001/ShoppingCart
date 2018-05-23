<template>
    <div>
      <Mheader :back="true">购物车</Mheader>
      <div class="content">
        <ul >
          <li v-for="l in cartList">
            <img :src="l.bookCover" alt="">
            <div style="padding-left: 15px">
              <h4>{{l.bookName}}</h4>
              <div style="margin-top:10px">
                <button @click="dwindleNum(l)" class="leftBtn">-</button>
                {{l.bookCount}}
                <button @click="addNum(l)" class="rightBtn">+</button>
                <p>小计 {{l.bookPrice*l.bookCount | toFixed(2) }}</p>
                <button  @click="removeBook(l)">删除</button>
              </div>
            </div>
          </li>
          <li>
            <span style="padding-left: 20px;width:80px">共{{count}}本</span>
            <span style="padding-left: 20px;">总价为{{totalPrice | toFixed(2) }}</span>
            <button @click="removeAll" style="margin-left: 40px;">清空购物车</button>
          </li>
        </ul>
      </div>

    </div>
</template>

<script type="text/ecmascript-6">
  import Mheader from '../../base/NavHeader/mheader.vue'
  import * as Types from  '../../store/type'
  import {mapState,mapGetters} from 'vuex'
    export default {
        computed:{
          ...mapState(['cartList']),
          ...mapGetters(['count','totalPrice','totalPricea']),

        },
      created(){

      },
        data(){
            return {}
        },
        filters:{
          toFixed(input,param1){
            return '￥'+ input.toFixed(param1)
          }
        },
        methods: {
          //删除购物车物品
          removeBook(book){
            this.$store.commit(Types.REMOVE_CART,book)
          },
          //减少数量
          dwindleNum(book){
            this.$store.commit(Types.CHANGE_COUNT,book)
          },
          //添加数量
          addNum(book){
            this.$store.commit(Types.ADD_COUNT,book)
          },
          //清空购物车
          removeAll(){
            this.$store.commit(Types.CLEAR_CART)
          }
        },
        components: {
          Mheader
        }
    };
</script>
<style scoped>
  .content ul li{
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
  }
  .content ul li img{
    width:130px;
    height: 150px;
  }
  .content h4{
    font-size: 20px;
    line-height: 35px;
  }
  .content .leftBtn{
    margin:0 15px 0 0;
    width:25px;
    height:25px;
  }
  .content .rightBtn{
     margin:0 0 0 15px;
     width:25px;
     height:25px;
   }

  .content p{
    color: #2a2a2a;
    line-height: 25px;
    margin: 10px 0 13px 0;
  }
</style>
