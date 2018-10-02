<template>
<div class="my-swipper">
  <swiper :options="swiperOption" ref="mySwiper" class="swiperOption-my">
    <!-- slides -->
      <swiper-slide v-for="(item,index) in Carousel" :key="index" @click="getData()">
        <a href="#">
          <img width="100%" height="100%" :src="item.url" alt="">
        </a>
      </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--<div class="swiper-button-next" slot="button-next"></div>-->
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper>
</div>
</template>

<script type="text/ecmascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        speed: 900,
        notNextTick: true,
        autoplay: true,
        preloadImages: false,
        paginationClickable: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  props: {
    Carousel: {}
  },
  created () {
  },
  methods: {},
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.swiperOption-my >>> .swiper-pagination-bullet
  background #06bf04
.swiperOption-my >>> .swiper-pagination-bullet-active
  background #fff
.my-swipper
  width 92%
  margin 10px auto
  height:0
  overflow hidden
  padding-bottom 25.25%
</style>
