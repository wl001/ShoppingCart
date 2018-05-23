<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,key) in swiperSlides" :key="key">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  export default {
    name: 'carousel',
    props:['swiperSlides'], // this.swiperSlides
    data() {
      return {
        swiperOption: {
          autoplay:true,
          setWrapperSize :true,
          observeParents:true,
          pagination: {
            el: '.swiper-pagination'
          }
        },
      }
    }
  }
</script>
<style scoped>
  img{width: 100%}
</style>
