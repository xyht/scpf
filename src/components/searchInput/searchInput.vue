<template>
<div class="search-input">
  <div class="inp-wrapper">
    <div class="icon-searck">
      <img src="./../../assets/img/search.svg" alt="">
    </div>
    <button type="button" name="" id="" class="bt-search">搜索商家，商品信息</button>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search-input
    position absolute
    top: 50px
    left 0
    right: 0
    height 35px
    width 100%
    .inp-wrapper
      height 100%
      width 90%
      margin 0 auto
      background #eaeaea
      border-radius 20px
      display flex
      .icon-searck
        height 35px
        width 35px
        img
          width 50%
          height 50%
          margin-top 25%
          margin-left 70px
      .bt-search
        border:0px;
        outline none
        background #eaeaea
        height 93%
        line-height 35px
        margin-left 52px
        color rgba(7,17,27,0.5)
</style>
