<template>
    <div class="list">
      <Mheader>列表</Mheader>
      <div class="content" ref="scroll" @scroll="loadMore">
        <ul>
          <router-link v-for="(book,index) in books" :to="{name:'detail',params:{bid:book.bookId}}" tag="li" :key="index">
            <img v-lazy="book.bookCover">
            <div style="padding-left: 10px">
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <b>{{'￥'+book.bookPrice}}</b>
              <div class="btn-list">
                <button class="del" @click.stop="remove(book.bookId)">删除</button>
                <button class="add" @click.stop="addcart(book)">添加</button>
              </div>
            </div>
          </router-link>
         </ul>
        <div @click="more" class="more">{{more_}}</div>

      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {pagination,removeBook} from '../../api'
  import Mheader from '@/base/NavHeader/mheader.vue'
  import * as Types from  '../../store/type'
  export default {
      data(){
          return {
            more_:'加载更多',
            books:[],
            offset:0,//偏移量 总书的数据长度
            hasMore:true, //如果后台有更多数据为true
            isLoading:false //默认不是正在加载

        }
      },
      mounted(){
      let scroll = this.$refs.scroll; //获取到要拖拽的元素
      let top = scroll.offsetTop;
      let distance = 0;//下拉的距离
      let isMove = false;
        //下拉涮新
      scroll.addEventListener('touchstart',(e)=> {
        // 滚动条在最顶端时 并且当前盒子在顶端时候 才继续走
        if(scroll.scrollTop !=0 || scroll.offsetTop != top) return
        let start = e.touches[0].pageY; //手指点击的开始位置
        let move = (e)=>{
          isMove = true;
          let current = e.touches[0].pageY;
          distance = current - start; //求的拉动的距离 负的就不要了
          if(distance>0){ // 如果大于100了 认为就是100像素
            if(distance<=100){
              scroll.style.top = distance + top +'px';
            }else{
              distance = 100;
              scroll.style.top = top+100+'px';
            }
          }else{
            // 如果不在考虑范围内 移除掉move和end事件
            scroll.removeEventListener('touchmove',move);
            scroll.removeEventListener('touchend',end);
          }
        };
        let end = (e)=>{
          if(!isMove)return;
          isMove = false;
          clearInterval(this.timer1);
          this.timer1 = setInterval(()=>{ // 一共distance 每次-1
            if(distance<=0){
              clearInterval(this.timer1);
              distance = 0;
              scroll.style.top = top+'px';
              scroll.removeEventListener('touchmove',move);
              scroll.removeEventListener('touchend',end);
              this.books = []; // 先清空数据
              this.offset = 0;
              this.hasMore = true;
              this.getData();
              return
            }
            distance -=1;
            scroll.style.top =top + distance+'px';
          },1);
        };
        scroll.addEventListener('touchmove',move);
        scroll.addEventListener('touchend',end);
      },false);
    },
      created(){//初始化数据
        this.getData();
      },
      methods: {
        addcart(book){
          this.$store.commit(Types.ADD_CART,book)
        },

        loadMore(){
          // scrollTop卷去的高度   clientHeight当前可见区域  scrollHeight总高
          // 触发scroll事件 可能触发n次  先进来开一个定时器，下次触发时将上一次定时器清除掉
          clearTimeout(this.timer); // 节流
          this.timer = setTimeout(()=>{
            let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll;
            if(scrollTop+clientHeight+20>scrollHeight){
              this.getData(); // 获取更多
            }
          },60);
        },
        more(){//点击加载更多
          this.getData();
        },
        async remove(id){
          await removeBook(id); // 删除某一项
          // 要删除前台数据
          this.books = this.books.filter(item=>item.bookId!==id);
        },
        async getData(){//获取书的数据
            if(this.hasMore&&!this.isLoading){ // 有更多的时候获取数据
              this.isLoading = true;
              let {hasMore,books} = await pagination(this.offset);
              // 刚开始书的数据和新增加书的数据否 则点击加载更对之前的书就丢了
              this.books = [...this.books,...books];
              this.hasMore = hasMore;
              this.isLoading = false; // 加载完毕
              this.offset = this.books.length; //维护偏移量 就是总书的长度
              if(hasMore == false){
                this.more_ = '没有更多数据'
              }
            }
        }
      },
      components: {
        Mheader
      }
    };
</script>
<style scoped>
  .content ul{
    padding: 10px;
  }
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
  .content p{
    color: #2a2a2a;
    line-height: 25px;
  }
  .content b {
    color: red;
    display: inline-block;
    margin-top: 15px;
  }
  .content button{
    display: block;width: 60px;height: 25px; background: orangered; color: #fff;border: none; border-radius: 15px; outline: none;
  }
  .more{
    margin: 10px;
    background: #2afedd;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
  }
  .btn-list{
    position: relative;
    margin-top: 25px;
  }
  .del{
    position: absolute;
    left:80px;
  }
</style>
