<template>
<div class="classification">
  <classification-header></classification-header>
  <classification-top v-show="topShow"></classification-top>
  <div class="tabLink-wrapper" v-show="!topShow">
    <tab-link class="tabLink"></tab-link>
  </div>
  <div class="recommend-wrapper" ref="recommendWrapper">
  <recommend :recommendComprehensive="recommendComprehensive" class="recommend-content"></recommend>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import classificationHeader from './../../components/classificationHeader/classificationHeader'
import classificationTop from './../../components/classificationTop/classificationTop'
import recommend from './../../components/recommend/recommend'
import tabLink from './../../components/tabLink/tabLink'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      recommendComprehensive: {},
      urlLink: '',
      topShow: true,
      code: ''
    }
  },
  components: {
    classificationTop,
    classificationHeader,
    recommend,
    tabLink
  },
  created () {
    this.getUrl()
    this.getData()
    this.tabShow()
    // this.jsonPTest()
  },
  mounted () {
    this._initScroll()
  },
  watch: {
    '$route' (to, from) {
      if (this.$route.params.type) {
        this.getUrl()
        this.getData()
        this.tabShow()
        this._initScroll()
      }
    }
  },
  methods: {
    getUrl () {
      if (this.$route.params.type === '0') {
        this.urlLink = 'Vegetables'
      }
      if (this.$route.params.type === '1') {
        this.urlLink = 'Meat'
      }
      if (this.$route.params.type === '2') {
        this.urlLink = 'CookedFood'
      }
      if (this.$route.params.type === '3') {
        this.urlLink = 'Aquaculture'
      }
      if (this.$route.params.type === '4') {
        this.urlLink = 'StapleFood'
      }
      if (this.$route.params.type === '5') {
        this.urlLink = 'Condiment'
      }
      if (this.$route.params.type === '6') {
        this.urlLink = 'Fruits'
      }
      if (this.$route.params.type === '7') {
        this.urlLink = 'CakesAndPastries'
      }
      if (this.$route.params.type === '8') {
        this.urlLink = 'Nut'
      }
      if (this.$route.params.type === '9') {
        this.urlLink = 'DriedFood'
      }
      if (this.$route.params.type === '10') {
        this.urlLink = 'Comprehensive'
      }
      if (this.$route.params.type === '11') {
        this.urlLink = 'Distance'
      }
      if (this.$route.params.type === '12') {
        this.urlLink = 'Quality'
      }
      if (this.$route.params.type === '13') {
        this.urlLink = 'Others'
      }
    },
    getData () {
      let url = 'http://123.206.29.239/tp5/public/index.php/index/scpf/sellerall?orderby=' + this.urlLink
      this.$http.get(url).then(function (res) {
        // 响应成功回调
        this.recommendComprehensive = res.body.Vegetables
        // 数据在res.body里面
      }, function (res) {
        // 响应错误回调
      })
    },
    jsonPTest () {
      this.$http.jsonp('http://127.0.0.1:8080/static/jsonp.json?callback=_jsonpwxpvivp1a4f', {
      }).then((resp) => {
        console.log(resp)
      }, response => {
        console.log('发送失败' + response.status + ',' + response.statusText)
        console.log(response)
      })
    },
    _initScroll () {
      this.goodScroll = new BScroll(this.$refs.recommendWrapper, {
        click: true,
        probeType: 3
      })
    },
    tabShow () {
      if (this.$route.params.id === '12' || this.$route.params.id === '10' || this.$route.params.id === '11' || this.$route.params.id === '13') {
        this.topShow = false
      } else {
        this.topShow = true
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.classification
  background rgba(255,255,255,0)
  .recommend-wrapper
    position absolute
    top: 88px
    left 0
    right 0
    bottom 48px
    overflow hidden
  .tabLink-wrapper
    width 92%
    margin 0 auto
    .tabLink
      margin-top 10px
</style>
