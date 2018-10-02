import Vue from 'vue'
import Router from 'vue-router'
import goods from './../components/goods/goods'
import classification from './../components/classification/classification'
import sellerdetails from './../components/sellerDetails/sellerDetails'
import good from '../components/sellerDetails/good/good'
import seller from './../components/sellerDetails/seller/seller'
import ratings from './../components/sellerDetails/ratings/ratings'
import orderForm from './../components/orderForm/orderForm'
import user from './../components/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/classification/:type',
      name: 'classification',
      component: classification
    },
    {
      path: '/sellerdetails/:id',
      name: 'sellerdetails',
      component: sellerdetails,
      children: [
        {
          path: '',
          redirect: 'good'
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'good',
          name: 'good',
          component: good
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'seller',
          name: 'seller',
          component: seller
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'ratings',
          name: 'ratings',
          component: ratings
        }
      ]
    },
    {
      path: '/orderForm',
      name: 'orderForm',
      component: orderForm
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
