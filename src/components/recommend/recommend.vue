<template>
<div class="recommend">
  <div class="wrapper">
    <ul>
      <div class="liubais"></div>
      <router-link :to="{path:'/sellerdetails/'+ item.id+ '/good'}" v-for="(item, index) in recommendComprehensive" :key="index"><li>
        <div class="list-wrapper">
          <div class="img">
            <img :src="item.imgUrl" alt="" width="100%" height="100%">
          </div>
          <div class="right">
            <div class="name">{{item.name}}</div>
            <div class="fraction-wrapper">
              <div class="star-wrapper"><star :score="item.fraction" :size="24"></star></div>
              <span class="fraction">{{item.fraction}}</span>
              <span class="monthlySale">月售{{item.monthlySale}}单</span>
            </div>
            <div class="fee">
              <span class="chargingFee left-ma">￥{{item.chargingFee}}起送</span>
              <span>|</span>
              <span class="distributionFee">配送费￥{{item.distributionFee}}</span>
            </div>
            <div class="activity" v-for="(list,indexs) in item.Discount" :key="indexs">
              <div class="img-icon">
                <div :class="getPhoto(list.num)"></div>
              </div>
              <div class="desc">{{list.data}}</div>
            </div>
          </div>
        </div>
      </li></router-link>
    </ul>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import star from './../star/star'
import tabLink from './../../components/tabLink/tabLink'
export default {
  props: {
    recommendComprehensive: {}
  },
  components: {
    star,
    tabLink
  },
  methods: {
    getPhoto (num) {
      if (num === 1) {
        return 'decrease'
      }
      if (num === 2) {
        return 'discount'
      }
      if (num === 3) {
        return 'guarantee'
      }
      if (num === 4) {
        return 'invoice'
      }
      if (num === 5) {
        return 'special'
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.recommend
  width 92%
  margin 7px auto
  .wrapper
    .liubais
      height 0.5px
      width 100%
    .list-wrapper
      margin-top 15px
      margin-bottom 15px
      display flex
      .img
        flex 0 0 55px
        height 55px
        margin-right 10px
      .right
        flex 1
        display flex
        flex-direction: column
        .name
          flex 1
          font-size 13px
          font-weight 400
          color rgba(7,17,27,1)
        .fraction-wrapper
          flex 1
          display flex
          font-size 10px
          margin-top 5px
          color rgba(7,17,27,0.7)
          line-height 15px
          .star-wrapper
            margin-top 1px
          .fraction
            margin-left 5px
          .monthlySale
            margin-left 5px
        .fee
          flex 1
          display flex
          font-size 10px
          margin-top 5px
          color rgba(7,17,27,0.7)
          line-height 15px
          span
            &:first-child
              margin-right 5px
            &:last-child
              margin-left 5px
        .activity
          display flex
          flex 0 0 15px
          margin-top 6px
          .img-icon
            height 15px
            width 15px
            span
              width 15px
              height 15px
            .decrease
              background url("decrease_2@2x.png") no-repeat
              background-size 100% 100%
              width 15px
              height 15px
            .discount
              background url("discount_2@2x.png") no-repeat
              background-size 100% 100%
              width 15px
              height 15px
            .guarantee
              background url("guarantee_1@2x.png") no-repeat
              background-size 100% 100%
              width 15px
              height 15px
            .invoice
              background url("invoice_1@2x.png") no-repeat
              background-size 100% 100%
              width 15px
              height 15px
            .special
              background url("special_1@2x.png") no-repeat
              background-size 100% 100%
              width 15px
              height 15px
          .desc
            font-size 10px
            color rgba(7,17,27 0.8)
            line-height 15px
</style>
