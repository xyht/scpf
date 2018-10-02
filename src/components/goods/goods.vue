<template>
  <div class="goods">
    <my-header></my-header>
    <search-input></search-input>
      <div class="liubai"></div>
      <div class="wrapper-scroll" ref="wrapperScroll">
        <div class="content">
          <tab-list :tabList="tabList"></tab-list>
          <two-show :twoShow="twoShow"></two-show>
          <!--<my-swipper :Carousel="Carousel"></my-swipper>-->
          <carousel :Carousel="Carousel"></carousel>
          <recommend-top></recommend-top>
          <recommend :recommendComprehensive="recommendComprehensive"></recommend>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import myHeader from './../../components/myHeader/myHeader'
import searchInput from './../../components/searchInput/searchInput'
import tabList from './../../components/tabList/tabList'
import twoShow from './../../components/twoShow/twoShow'
import carousel from './../../components/carousel/carousel'
import recommend from './../../components/recommend/recommend'
import scroll from './../../components/scroll/scroll'
import recommendTop from './../../components/recommendTop/recommendTop'
import mySwipper from './../../components/mySwipper/mySwipper'
export default {
  data () {
    return {
      tabList: {},
      twoShow: {},
      Carousel: {},
      recommendComprehensive: {}
    }
  },
  components: {
    myHeader,
    searchInput,
    tabList,
    twoShow,
    carousel,
    recommend,
    scroll,
    recommendTop,
    mySwipper
  },
  created () {
    this.getData()
  },
  mounted () {
    this._initScroll()
  },
  methods: {
    getData () {
      this.$http.get('http://123.206.29.239/tp5/public/index.php/index/scpf/data').then(function (res) {
        // 响应成功回调
        this.tabList = res.body.good.tablist
        this.twoShow = res.body.good.twoshow
        this.Carousel = res.body.good.carousel
        this.recommendComprehensive = res.body.good.recommendComprehensive
        // 数据在res.body里面
      }, function (res) {
        // 响应错误回调
      })
    },
    _initScroll () {
      this.goodScroll = new BScroll(this.$refs.wrapperScroll, {
        click: true,
        probeType: 3
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.liubai
  width 100%
  height 15px
  background: -webkit-linear-gradient(bottom , #fff , rgba(255,255,255,0.0));
.wrapper-scroll
  position absolute
  top 85px
  left 0
  right 0
  bottom 48px
  overflow hidden
</style>
