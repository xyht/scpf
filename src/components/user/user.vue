<template>
<div class="user">
  <more-top>我的</more-top>
  <user-header></user-header>
  <div class="price">
    <div class="change">
      <div class="num">0.00<span>元</span></div>
      <div class="desc">钱包</div>
    </div>
    <div class="packet">
      <div class="num">0<span>个</span></div>
      <div class="desc">红包</div>
    </div>
    <div class="gold">
      <div class="num">8<span>个</span></div>
      <div class="desc">金币</div>
    </div>
  </div>
  <div class="bt-list">
    <a href="" class="address tab">
    <div class="icon-wrapper">
      <svg viewBox="0 0 16 16" id="address" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="#FFF" fill-opacity="0" d="M0 0h16v16H0z"></path><path fill="#4AA5F0" d="M8 2.667A2.667 2.667 0 1 1 8 8a2.667 2.667 0 0 1 0-5.333M2.273 6.509a5.48 5.48 0 0 1-.051-.732 5.778 5.778 0 1 1 11.556 0 5.54 5.54 0 0 1-.085.948 5.704 5.704 0 0 1-.258.999 6.565 6.565 0 0 1-.081.22c-.016.039-.03.078-.047.116C11.932 11.45 8 13.778 8 13.778S3.734 11.273 2.535 7.64a5.756 5.756 0 0 1-.262-1.132zm8.584 6.701c2.516.124 5.143.43 5.143 1.068 0 .901-5.233 1.138-8 1.138-2.768 0-8-.237-8-1.138 0-.639 2.627-.944 5.143-1.068 1.22 1.044 2.3 1.61 2.404 1.663.14.07.296.108.453.108.156 0 .314-.038.454-.109.104-.052 1.184-.618 2.403-1.662z"></path></g></svg>
    </div>
    我的地址
  </a>
    <a href="" class="address tab border-px">
      <div class="icon-wrapper">
        <svg viewBox="0 0 16 16" id="point" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="#FFF" fill-opacity="0" d="M0 0h16v16H0z"></path><path fill="#94D94A" d="M2.257.5h11.486a1 1 0 0 1 .998.936l.757 11.728a2 2 0 0 1-1.996 2.129H2.498a2 2 0 0 1-1.996-2.129L1.26 1.436A1 1 0 0 1 2.257.5zm9.658 3.782C11.82 6.452 10.14 8.18 7.95 8.18c-2.202 0-3.925-1.747-4.003-3.933a.594.594 0 0 1 .36-1.075.596.596 0 1 1 .25 1.14c.109 1.82 1.548 3.26 3.393 3.26 1.853 0 3.263-1.455 3.357-3.287a.595.595 0 0 1 .3-1.113.595.595 0 1 1 .307 1.11z"></path></g></svg>
      </div>
      金币商城
    </a>
    <a href="" class="share tab">
      <div class="icon-wrapper">
        <svg viewBox="0 0 40 40" id="commend" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="#FC7B53" d="M21 12c-.167-.434-1-1-1-1-.275.437-.767.601-1 1v7H4v-6c0-.843.716-1.562 2-2h6c-1.49.06-2.84-.711-3-2 .06-1.814 1.949-4.528 5-4 2.552.733 4.541 2.943 6 5 1.6-2.094 3.778-4.58 7-5 2.23-.288 4.282 2.198 4 4-.208 1.276-1.582 2.06-3 2h6c1.173.437 1.89 1.156 2 2v6H21v-7zm-7-6c-1.123-.321-1.966.238-3 1 .097.68-.258 1.373 0 2 1.653 1.192 5.452 1.096 8 1-1.202-1.529-2.679-3.07-5-4zm16 3c.726-1.246-1.22-3.714-3-3-2.313 1.075-3.755 2.506-5 4 1.071 0 2.158.023 3 0 1.542-.075 3.965-.16 5-1zM19 36H8c-1.326-.255-2-.907-2-2V20h13v16zm13 0H21V20h13v14c-.47 1.53-1.124 1.745-2 2z"></path></g></svg>
      </div>
      分享拿多元现金
    </a>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import moreTop from './../../components/moreTop/moreTop'
import userHeader from './userHeader/userHeader'
export default {
  components: {
    moreTop,
    userHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "./../../commen/stylus/mixin.styl"
.user
  position absolute
  top:0
  left 0
  right: 0
  bottom 48px
  background rgba(7,17,27,0.05)
  .price
    background #fff
    display flex
    width 100%
    height 73px
    .change, .packet, .gold
      flex:1
      .num
        font-size 22px
        margin-top 20px
        text-align center
        font-weight bold
        span
          font-size 12px
          font-weight lighter
      .desc
        text-align center
        font-size 12px
        margin-top 5px
    .packet
      border-right 0.5px solid rgba(1,17,27,0.1)
      .num
        color: rgb(255, 95, 62)
    .gold
      flex: 1;
      .num
        color: rgb(0, 152, 251)
    .change
      border-right 0.5px solid rgba(1,17,27,0.1)
      .num
        color: rgb(106, 194, 11)
  .bt-list
    .tab
      height 40px
      width 100%
      background #fff
      line-height 40px
      font-size 14px
      color rgba(7,17,27,0.8)
      .icon-wrapper
        width 15px
        height 15px
        margin 12px 11px 12px 11px
        float left
    .address
      display block
      margin-top 10px
      color rgba(7,17,27,0.8)
      border-px(rgba(7,17,27,0.1))
    .share
      display block
      color rgba(7,17,27,0.8)
</style>
