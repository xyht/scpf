import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import VueResource from 'vue-resource'
import VueAwesomeSwipper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'vant/lib/vant-css/index.css'
import './commen/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(VueResource)
Vue.use(VueAwesomeSwipper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
