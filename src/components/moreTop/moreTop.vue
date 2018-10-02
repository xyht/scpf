<template>
<div class="moreTop">
  <div>
    <router-link to="/" class="return">
      <div class="icon"></div>
    </router-link>
    <div class="title">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .moreTop
    background-image: linear-gradient(90deg,#0af,#0085ff);
    height 50px
    .return
      position: absolute;
      line-height 60px
      margin-left 15px
      color #ffffff
      font-size 29px
      float left
      .icon
        height 50px
        width 35px
        background url("return.svg") no-repeat
        background-size 60% 60%
        background-position:center;
    .title
      line-height 50px
      color #ffffff
      font-size 17px
      text-align center
      font-weight bold
</style>
