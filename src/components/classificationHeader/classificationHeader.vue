<template>
  <more-top>{{title}}</more-top>
</template>

<script type="text/ecmascript-6">
import moreTop from './../../components/moreTop/moreTop'
export default {
  data () {
    return {
      title: ''
    }
  },
  components: {
    moreTop
  },
  watch: {
    '$route' (to, from) {
      this.getTitle()
    }
  },
  methods: {
    getTitle () {
      if (this.$route.params.type === '0') {
        this.title = '蔬菜类'
      }
      if (this.$route.params.type === '1') {
        this.title = '肉禽类'
      }
      if (this.$route.params.type === '2') {
        this.title = '熟食类'
      }
      if (this.$route.params.type === '3') {
        this.title = '水产类'
      }
      if (this.$route.params.type === '4') {
        this.title = '粮油类'
      }
      if (this.$route.params.type === '5') {
        this.title = '调味品'
      }
      if (this.$route.params.type === '6') {
        this.title = '水果类'
      }
      if (this.$route.params.type === '7') {
        this.title = '糕点类'
      }
      if (this.$route.params.type === '8') {
        this.title = '坚果类'
      }
      if (this.$route.params.type === '9') {
        this.title = '干货类'
      }
      if (this.$route.params.type === '10') {
        this.title = '综合排序'
      }
      if (this.$route.params.type === '11') {
        this.title = '距离最近'
      }
      if (this.$route.params.type === '12') {
        this.title = '品质联盟'
      }
      if (this.$route.params.type === '13') {
        this.title = '其他'
      }
    }
  },
  created () {
    this.getTitle()
  },
  mounted () {
    this.getTitle()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
