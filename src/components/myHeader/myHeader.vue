<template>
  <div class="my-header">
    <div class="address-icon-wrapper">
      <div class="icons">
        <svg t="1538063346368" class="icon" style="" viewBox="0 0 1024 1024"
             version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1873"
             xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%">
          <path d="M512.1 63.9c-192.5 0-348.6 156.1-348.6 348.6s348.6 547 348.6 547 348.6-354.5 348.6-547S704.6
    63.9 512.1 63.9z m0 449.2c-73.8 0-133.7-59.8-133.7-133.7s59.8-133.7 133.7-133.7c73.8 0 133.7 59.8 133.7
    133.7s-59.9 133.7-133.7 133.7z" fill="#1296db" p-id="1874">
          </path>
        </svg>
      </div>
    </div>
    <div class="address">
      长治学院北校区
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.my-header
  position absolute
  top 0
  left: 0
  right: 0
  display flex
  width 100%
  height:50px
  .address-icon-wrapper
    flex 0 0 50px
    height:50px
    .icons
      position absolute
      top 13px
      left 13px
      width 24px
      height 24px
  .address
    flex 1
    line-height 50px
    margin-left -10px
    font-size 17px
</style>
