<template>
  <div class="goods">
    <div class="menu-wrapper"  ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" :key="index" class="menu-item"
            :class="{'current':currentIndex===index, $emit}" @click="selectMenu(index)">
          <span class="text border-px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"  ref="foodsWrapper">
      <ul>
        <li v-for="(item,index) in goods" :key="index" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li  v-for="(food,index_food) in item.foods" :key="index_food" class="food-item border-px">
              <div class="icon">
                <img width="57" height="57" :src="food.icon"/>
              </div>
              <div class="content">
                <p class="name">{{food.name}}</p>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span><span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopchar
      :select-foods="selectFoods"
      :delivery-price="seller.deliveryPrice"
      :min-price="seller.minPrice"
      @showbox="toshow" :msg="msg"
    >

    </shopchar>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import shopchar from '../shopchar/shopchar'
import cartcontrol from '../cartcontrol/cartcontrol'

export default {
  methods: {
    selectMenu (index, event) {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el, 200)
    },
    _initScroll () {
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      })
      this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight () {
      // 这里2.0必须用$refs
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    toshow (msg) {
      this.msg = msg
      this.hasmsg = !this.hasmsg
    },
    open () {
      this.$emit('showbox', this.msg) // 触发showbox方法，'the msg'为向父组件传递的数据
      this.$emit('thegetfoods', this.selectFood)
    },
    getData () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      let url = 'http://123.206.29.239/tp5/public/index.php/index/scpf/sellerdata?id=' + this.id
      this.$http.get(url).then((response) => {
        response = response.body
        this.goods = response.goods
        this.$nextTick(() => {
          this._initScroll()
          this._calculateHeight()
        })
      })
    }
  },
  watch: {
    'hasmsg' () {
      this.$nextTick(() => {
        this.open()
      })
    },
    'selectFoods' () {
      this.selectFood = this.selectFoods
    },
    id () {
      if (this.id) {
        this.getData()
      }
    }
  },
  props: {
    seller: {
      type: Object
    },
    id: ''
  },
  data () {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectFood: {
        type: Array
      },
      msg: '',
      hasmsg: true
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  created () {
    this.getData()
  },
  components: {
    shopchar,
    cartcontrol
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./../../../commen/stylus/mixin.styl"

  .goods
    display flex
    position absolute
    width 100%
    top 174px
    bottom 46px
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu-item
        display table
        height 54px
        width 56px
        line-height: 14px
        padding 0 12px
        &.current
          position relative
          margin-top -1px
          z-index 10
          background #fff
          font-weight:700
          transition background .4s
          .text
            border-none()
        .text
          display table-cell
          width 56px
          vertical-align middle
          font-size 12px
          border-px(rgba(7,17,27,0.1))
          .icon
            display: inline-block
            vertical-align top
            width:12px
            height:12px
            margin-right:2px;
            background-size:12px 12px
            background-repeat:no-repeat
            &.decrease
              bg-image('decrease_3')
            &.discount
              bg-image('discount_3')
            &.guarantee
              bg-image('guarantee_3')
            &.invoice
              bg-image('invoice_3')
            &.special
              bg-image('special_3')
    .foods-wrapper
      flex 1
      .title
        padding-left 14px
        height 26px
        line-height 26px
        border-left 2px solid #d9dde1
        font-size 12px
        color rgb(147,153,159)
        background #f3f5f7
      .food-item
        display flex
        margin 18px
        padding-bottom 18px
        border-px(rgba(7,17,27,0.1))
        &:last-child
          border-none()
          margin-bottom 0
        .icon
          flex 0 0 57px
          margin-right 10px
          img
            border-radius 5px
        .content
          flex 1
          .name
            margin 2px 0 8px 0
            height 14px
            line-height 14px
            font-size 14px
            color rbg(7,17,27)
          .desc,.extra
            line-height:10px
            font-size 10px
            color color rgb(147,153,159)
          .desc
            margin-bottom 8px
            line-height 12px
          .extra
            .count
              margin-right 12px
          .price
            font-weight 700
            line-height 24px
            .now
              margin-right 8px
              font-size 14px
              color rgb(240,20,20)
            .old
              text-decoration line-through
              font-size 10px
              color: rgb(147,153,159)
          .cartcontrol-wrapper
            position absolute
            right 0
            bottom 12px
</style>
