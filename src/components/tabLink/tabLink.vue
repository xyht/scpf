<template>
<div class="tabLists">
  <router-link to="/classification/10" class="tabs">
    综合排序
  </router-link>
  <router-link to="/classification/11" class="tabs">
    距离最近
  </router-link>
  <router-link to="/classification/12" class="tabs">
    品质联盟
  </router-link>
  <router-link to="/classification/13" class="tabs">
    筛选￥
  </router-link>
</div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "./../../commen/stylus/mixin.styl"
.tabLists
  height 30px
  width 100%
  margin 0 auto
  line-height 30px
  display: flex
  border-px(rgba(7,17,27,0.2))
  .tabs
    flex 1
    font-size 12px
    color rgba(7,17,27,0.6)
    text-align center
    margin-top -5px
    &:first-child
      text-align left
    &:last-child
      text-align right
    &:nth-child(3)
      text-align right
</style>
