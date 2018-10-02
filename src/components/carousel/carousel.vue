<template>
<div class="carousel">
  <div class="carousel-wrapper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,index) in Carousel" :key="index"><a href="">
        <img width="100%" height="100%" :src="item.url" alt="">
      </a></van-swipe-item>
    </van-swipe>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    Carousel: {}
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .carousel
    margin-top 5px
    .carousel-wrapper
      width 92%
      margin 0 auto
</style>
