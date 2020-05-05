<template>
  <div id="app">
      <keep-alive>
        <router-view/>
        
      </keep-alive>
    <div v-show="footShow" class="myFoot">
      <router-link to="/" class="tabTwo">
        <div class="font-icon-wrapper">
          <i class="icon--home"></i>
        </div>
        首页
      </router-link>
      <router-link to="/classification/10" class="tabTwo">
        <div class="font-icon-wrapper">
          <i class="icon--market"></i>
        </div>
        市场
      </router-link>
      <router-link to="/orderForm" class="tabTwo">
        <div class="font-icon-wrapper">
          <i class="icon--orderForm"></i>
        </div>
          订单
      </router-link>
      <router-link to="/user" class="tabTwo">
        <div class="font-icon-wrapper">
          <i class="icon--user add-big"></i>
        </div>
        我的
      </router-link>
    </div>
  </div>
</template>

<script>
import myHeader from './components/myHeader/myHeader'
// ls
export default {
  data () {
    return {
      footShow: true
    }
  },
  name: 'App',
  components: {
    myHeader
  },
  methods: {
    footshow () {
      var str = this.$route.path
      str = str.match(/\bsellerdetails/)
      if (str) {
        this.footShow = false
      } else {
        this.footShow = true
      }
    }
  },
  watch: {
    $route (to, from) {
      this.footshow()
    }
  },
  created () {
    this.footshow()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "assets/style.css"
@import "assets/reset.css";
#app
  position absolute
  top 0
  right:0
  left:0
  bottom 0
  .myFoot
    position absolute
    bottom 0
    right 0
    left 0
    height 48px
    display flex
    .tabTwo
      flex 1
      text-align center
      font-size 11px
      color rgba(7,17,27,0.6)
      .font-icon-wrapper
        width 100%
        height:50%
        font-size 18px
        color: #8a8a8a;
        margin-top 8px
        .add-big
          font-size 23px
    .router-link-exact-active
      color #f4ea2a
      .font-icon-wrapper
        color #f4ea2a
</style>
