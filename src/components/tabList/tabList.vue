<template>
<div class="tabList">
  <div class="tab-wrapper">
    <div class="tab">
      <ul>
        <swiper>
          <swiper-slide>
            <router-link tag="a" class="tab-a" v-for="(item,index) in tabList" :key="index" :to="getUrl(index)">
              <li>
                <div class="img-wrapper">
                  <div class="icon-tab">
                    <img :src="item.imgUrl" alt="">
                  </div>
                </div>
                <p class="title">{{item.name}}</p>
                </li>
            </router-link>
          </swiper-slide>
        </swiper>
      </ul>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      Tabs: [],
      len: 0
    }
  },
  props: {
    tabList: {}
  },
  methods: {
    getUrl (index) {
      return '/classification/' + index
    },
    getTab () {
      let tba = []
      var arr = Object.keys(this.tabList)
      let len = Math.ceil((arr.length) / 10)
      console.log(len)
      for (let i = 0, j = 0; j < len; i = i + 10, j++) {
        tba[j] = arr.slice(i, i + 10)
      }
      console.log(Math.ceil(tba.length / 10))
      this.len = Math.ceil(tba.length / 10)
      this.Tabs = tba
      console.log(this.Tabs)
    },
    getLength (obj) {
      var i = 0
      for (const index in this) {
        console.log(index)
        i++
      }
      console.log(i)
      return i
    }
  },
  watch: {
    tabList () {
      // this.getTab()
      // this.getLength(this.tabList)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.tabList
  height 155px
  .tab
    width 100%;
    .tab-a
      width 20%
      display block
      float left
      height 55px
      margin-top 10px
      text-decoration none
      .img-wrapper
        width 38.4px
        height 38.4px
        margin 0 auto
        .icon-tab
          width 38.4px
          height 38.4px
          font-size 15px
          img
            width 100%
            height:100%
      .title
        font-size 12px
        text-align center
        color #666
        margin-top 5px
</style>
