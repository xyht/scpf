<template>
<div class="recommend-top">
  <div class="title">
    一 推荐商家 一
  </div>
  <tab-link></tab-link>
</div>
</template>

<script type="text/ecmascript-6">
import tabLink from './../../components/tabLink/tabLink'
export default {
  components: {
    tabLink
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.recommend-top
  width 92%
  margin 15px auto
  .title
    text-align center
    font-size 13px
    margin-bottom 10px
</style>
