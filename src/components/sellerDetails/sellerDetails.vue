<template>
<div class="sellerDetail">
  <on-header :seller="seller"></on-header>
  <div class="tab border-1px">
    <div class="tab-item">
      <router-link :to="{ name: 'good'}">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link :to="{ name: 'ratings'}">评论</router-link>
    </div>
    <div class="tab-item">
      <router-link :to="{ name: 'seller'}">商家</router-link>
    </div>
  </div>
  <keep-alive>
    <router-view
     :seller="seller"
     @showbox="toshow" :msg="msg"
     v-show="!hasShow ()"
     @thegetfoods="thegetfoods"
     :id = "id"
       >
    </router-view>
  </keep-alive>
  <pay v-show="hasShow ()" :hasShowto="hasShow
    ()" @haspay="haspay"  :food="food"
       :seller="seller"
  >
  </pay>
</div>
</template>

<script type="text/ecmascript-6">
import OnHeader from './onheader/onheader'
import pay from './pay/pay'
export default {
  data () {
    return {
      id: '',
      strUrl: '',
      seller: {},
      hasHeader: true,
      msg: '',
      food: {
        type: Array
      }
    }
  },
  methods: {
    getUrlId () {
      this.id = this.$route.params.id
    },
    getData () {
      let url = 'http://123.206.29.239/tp5/public/index.php/index/scpf/sellerdata?id=' + this.id
      this.$http.get(url).then(function (res) {
        // 响应成功回调
        // 数据在res.body里面
        this.seller = res.data.seller
      }, function (res) {
        // 响应错误回调
      })
    },
    toshow (msg) {
      this.msg = msg
    },
    thegetfoods (selectFoods) {
      this.food = selectFoods
    },
    hasShow () {
      if (this.msg === 'enough') {
        return true
      } else { return false }
    },
    haspay (msg) {
      this.msg = msg
    }
  },
  // watch: {
  //   $route (to, form) {
  //     this.strUrl = this.$route.path
  //     console.log(this.strUrl)
  //     this.strUrl = this.strUrl.match(/\bsellerdetails/)
  //     this.getUrlId()
  //     this.getData()
  //   }
  // },
  created () {
    this.strUrl = this.$route.path
    this.strUrl = this.strUrl.match(/\bsellerdetails/)
    this.getUrlId()
    this.getData()
  },
  components: {
    OnHeader,
    pay
  },
  watch: {
    $route () {
      this.getUrlId()
      if (this.id) {
        this.getData()
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./../../commen/stylus/mixin.styl"
  .sellerDetail >>> .router-link-active
    color #06bf04
  .sellerDetail
    .tab
      position relative
      display:flex
      width :100%
      height :40px
      line-height: 40px
      //border-bottom 1px solid rgba(7,17,27,0.1)
      border-px(rgba(7,17,27,0.1))
      .tab-item
        flex: 1
        text-align: center
        background #ffffff
        .router-link-active
          color #f01414
        & > a
          display block
          font-size :14px
          color: rgb(77,85,93)
          &.active
            color :rgb(240,20,20)
</style>
