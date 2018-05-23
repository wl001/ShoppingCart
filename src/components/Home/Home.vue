<template>
  <div class="Home">
   <Mheader :back="false">首页</Mheader>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="hot in hotBooks">
              <img  :src="hot.bookCover">
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script type="text/babel">
    import Mheader from '@/base/NavHeader/mheader.vue'
    import Swiper from '@/base/Swiper/Swiper.vue'
    import Loading from '@/base/Loading.vue'
    //import {getSliders,getHotBook} from '../../api'
    import {getAll} from '../../api'
    export default {
      created(){
        this.getData()
//        this.getSlider(); // 获取轮播图
//        this.getHot(); // 获取最新图书
        console.log(this.hotBooks)
      },
      data(){
        return {sliders: [],hotBooks:[],loading:true}
      },
      methods: {
          async getData(){
           let [sliders,hotBooks] = await getAll()//返回的是数组[sliders,hotBooks]
            this.sliders = sliders;
            this.hotBooks = hotBooks;
            //轮播图和热门图书已经获取完成
            this.loading = false
          }
//        async getHot(){
//          this.hotBooks = await getHotBook();
//        },
//        async getSlider(){
//          // 给data起别名 对象中的属性名字必须和 得到的结果名字一致
//          this.sliders = await getSliders();
//          // 将获取的数据放到sliders中
//        }
      },
      components:{
        Mheader,
        Swiper,
        Loading
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
  @import "Home.less";
</style>
