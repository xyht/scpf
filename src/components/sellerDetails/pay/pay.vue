<template>
  <div class="pay-wrapper">
    <div class="pay">
      <div class="top">
        <div class="return">
          <div @click="open" class="text">返回</div>
        </div>
        <div class="title">提交订单</div>
      </div>
      <div class="scroll-wrapper" ref="scroll">
        <ul class="content">
          <div class="give">
            <div class="address">
              <input type="text" name="" placeholder="填写收货地址">
            </div>
            <div class="date-wrapper">
              <div class="title">
                立即送出
              </div>
              <div class="nr">
                大约30分钟后送达
              </div>
            </div>
          </div>
          <div class="specific">
            <div class="name">{{seller.name}}</div>
            <div class="prompt">*温馨提示：您点主食了吗</div>
            <div class="food">
              <li v-for="(item,index) in food" :key="index">
                <img width="57" height="57"  alt="" :src="item.icon">
                <div class="name-price">
                  <span class="food-name">{{item.name}}</span>
                  <span class="price">￥{{item.price*item.count}}</span>
                  <div class="count">*{{item.count}}</div>
                </div>
              </li>
            </div>
            <div class="other">
              <div class="Packing">
                <div class="names">包装费</div>
                <div class="price">￥3</div>
              </div>
              <div class="Packing">
                <div class="names">配送费</div>
                <div class="price">￥{{seller.deliveryPrice+dataPrice}}</div>
              </div>
              <div class="explain" v-show="hasDataPrice">
                夜间配送，加价四元
              </div>
            </div>
          </div>
          <div class="information">
            <div class="remarks">
              <div class="remarks-title">备注</div>
              <input type="text" class="remarks-inp" name="" placeholder="口味偏好要求">
            </div>
            <div class="remarks">
              <div class="remarks-title">餐具数量</div>
              <input type="text" class="remarks-inp" name="" placeholder="请填写">
            </div>
          </div>
        </ul>
      </div>
      <div class="foot">
        <div class="left-foot">
          <div class="other-price">其他费用￥{{3+seller.deliveryPrice+dataPrice}}</div>
          <div class="tools">合计￥
            <span class="price-tools">{{tool}}</span>
          </div>
        </div>
        <div class="right-foot">
          提交订单
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      hasDataPrice: false,
      dataPrice: 0
    }
  },
  props: {
    hasShowto: Boolean,
    food: {},
    seller: {}
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true
      })
    })
  },
  watch: {
    'hasShowto' () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.scroll, {
          click: true
        })
      })
      var date = new Date()
      let strDate = date.getHours()
      if (strDate > 21 || strDate < 6) {
        this.hasDataPrice = true
        this.dataPrice = 4
      } else {
        this.hasDataPrice = false
        this.dataPrice = 0
      }
    }
  },
  methods: {
    open () {
      this.$emit('haspay', 'not-enough') // 触发showbox方法，'the msg'为向父组件传递的数据
    }
  },
  computed: {
    tool () {
      let thetool = 0
      for (var i = 0, length = this.food.length; i < length; i++) {
        thetool = this.food[i].price * this.food[i].count + thetool
      }
      return thetool + 3 + this.seller.deliveryPrice + this.dataPrice
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./../../../commen/stylus/mixin.styl"
  .pay-wrapper
    height 100%
    width 100%
    .pay
      width 100%
      height 100%
      background: -webkit-linear-gradient(top,#ffd262 0,#fff 100%);
      .top
        display: flex
        position absolute
        top: 0
        left 0
        right 0
        height 50px
        z-index 1
        width 100%
        font-weight 400
        background-color #ffd262
        .return
          flex 2
          line-height 50px
          color rgb(7,17,27)
          .text
            padding-left:10px
            font-size 14px
        .title
          flex 3
          font-size 16px
          line-height 50px
      .scroll-wrapper
        position absolute
        top 50px
        bottom 50px
        right 0
        left:0
        z-index 0
        background: -webkit-linear-gradient(top,#ffd262 0,#fff 100%);
        .content
          .give
            height 100px
            width 95%
            margin 0 auto
            background #fff
            .address
              height 50px
              width 90%
              margin 0 auto
              border-px(rgba(7, 17, 27, 0.1))
              input
                border none
                height 48px
                width 90%
                margin-left 10px
                font-size 18px
                color #999999
                outline:none
            .date-wrapper
              height 50px
              width 85%
              margin 0 auto
              .title
                height 50px
                line-height 50px
                float left
                color #000
                font-weight 500
                font-size 14px
              .nr
                height 50px
                line-height 50px
                float right
                color #388ded
                font-size 14px
          .specific
            width 95%
            margin 0 auto
            margin-top 5px
            background #fff
            .name
              width 85%
              height 54px
              margin 0 auto
              line-height 54px
              font-size 14px
              border-px(rgba(7, 17, 27, 0.1))
            .prompt
              color:#fc675e
              width 85%
              height 54px
              margin 0 auto
              font-size 14px
              line-height 54px
            .food
              width 85%
              margin 0 auto
              border-px(rgba(7, 17, 27, 0.1))
              li
                display flex
                height 60px
                margin-top 15px
                &:first-child
                  margin-top 0
                &:last-child
                  padding-bottom 10px
                img
                  border-radius 5px
                .name-price
                  flex 4
                  padding-left 6px
                  .food-name
                    font-size 14px
                  .price
                    float right
                  .count
                    margin-top 20px
                    font-weight 600
            .other
              width 85%
              background #fff
              margin 0 auto
              border-px(rgba(7, 17, 27, 0.1))
              .Packing
                height 35px
                .names
                  float left
                  line-height 35px
                  font-size 14px
                .price
                  float right
                  line-height 35px
              .explain
                width 100%
                height 35px
                font-size 12px
                color #9a9a9a
          .information
            width 95%
            margin 0 auto
            margin-top 5px
            background #fff
            .remarks
              width 85%
              margin 0 auto
              height 50px
              .remarks-title
                line-height 50px
                float left
                font-size 14px
              .remarks-inp
                height 48px
                float right
                border none
                outline:none
                text-align center
      .foot
        position absolute
        height 48px
        bottom 0
        width 100%
        z-index 1
        display flex
        .left-foot
          flex 5
          background #333333
          height 48px
          .other-price
            float left
            line-height 48px
            font-size 14px
            color #fff
            margin-left 15px
          .tools
            float right
            line-height 48px
            margin-right 15px
            color #ffffff
            font-size 16px
            .price-tools
              font-size 20px
        .right-foot
          flex 2
          background #ffce58
          height 48px
          line-height 48px
          text-align center
          font-size 16px
</style>
