<template>
<div class="orderForm">
  <more-top>订单</more-top>
  <div class="img-wrapper">
    <img src="//fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png" alt="">
  </div>
  <p class="desc">近三个月无消费记录</p>
  <a class="more">查看更早订单</a>
</div>
</template>

<script type="text/ecmascript-6">
import moreTop from './../../components/moreTop/moreTop'
export default {
  components: {
    moreTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .img-wrapper
    width 53%
    margin 0 auto
    margin-top 50px
    height 0
    padding-bottom 43%
    img
      width 100%
  .desc
    text-align center
    color rgba(7,17,27,0.6)
    font-weight bold
  .more
    display block
    width 100%
    text-align center
    font-size 12px
    color rgba(7,17,27,0.5)
</style>
