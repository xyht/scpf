<template>
<div class="user-header">
  <div class="layout">
    <img src="http://shadow.elemecdn.com/faas/h5/static/sprite.3ffb5d8.png" class="head-img"/>
  </div>
  <div class="data">
    <div class="name">轩辕昊天</div>
    <div class="phone">18135434588 </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.user-header
  height 95px
  width 100%
  display flex
  background-image: linear-gradient(90deg,#0af,#0085ff);
  .layout
    .head-img
      width 53px
      height 53px
      margin 21px
      overflow hidden
      border-radius 50px
  .data
    flex 1
    .name
      font-weight bold
      font-size 17px
      color #fff
      margin-top 29px
    .phone
      color #fff
      margin-top 10px
      font-size 12px
</style>
