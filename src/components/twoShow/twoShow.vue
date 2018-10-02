<template>
<div class="twoShow">
  <div class="wrapper">
    <a :href="item.url" class="left" v-for="(item,index) in twoShow" :key="index">
      <div class="left-wrapper">
        <div class="title">{{item.title}}</div>
        <div class="desc">{{item.desc}}</div>
        <div class="go-bug">{{item.goBuy}}</div>
        <div class="img-wrapper">
          <img :src="item.imgurl" alt="">
        </div>
      </div>
    </a>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    twoShow: {}
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .twoShow
    width 92%
    margin 0 auto
    .wrapper
      display flex
      .left
        flex 1
        height 140px
        background linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%)
        margin-right 4px
        overflow hidden
        .left-wrapper
          margin-left 14px
          margin-top 14px
          .title
            font-weight:bold
            font-size 14px
            color rgba(7,17,27,0.8)
          .desc
            font-size 10px
            margin-top 8px
            color rgba(7,17,27,0.6)
          .go-bug
            font-size 10px
            color #f8c000
            margin-top 8px
            font-weight:bold
          .img-wrapper
            height 68px
            width 100px
            float right
            margin-top 8px
            img
              height 100%
              width 100%
</style>
