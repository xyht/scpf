<template>
<div class="classificationTop">
  <div class="classification-top-wrapper" ref="classificationTop">
    <div class="content">
      <swiper >
        <swiper-slide>
          <div class="one-tab">
            <router-link to="/classification/0">
              <li class="list">蔬菜类</li>
            </router-link>
            <router-link to="/classification/1">
              <li class="list">肉禽类</li>
            </router-link>
            <router-link to="/classification/2">
              <li class="list">熟食类</li>
            </router-link>
            <router-link to="/classification/3">
              <li class="list">水产类</li>
            </router-link>
            <router-link to="/classification/4">
              <li class="list">粮油类</li>
            </router-link>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <router-link to="/classification/5">
              <li class="list">调味品</li>
            </router-link>
            <router-link to="/classification/6">
              <li class="list">水果类</li>
            </router-link>
            <router-link to="/classification/7">
              <li class="list">糕点类</li>
            </router-link>
            <router-link to="/classification/8">
              <li class="list">坚果类</li>
            </router-link>
            <router-link to="/classification/9">
              <li class="list">干货类</li>
            </router-link>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .classification-top-wrapper
    position absolute
    height 35px
    top:50px
    left 0
    right 0
    background-image: linear-gradient(90deg,#0af,#0085ff);
    .content
      .one-tab
        width 100%
       .list
        color #fff
        list-style none
        line-height 35px
        font-size 12px
        float left
        width 20%
        text-align center
</style>
