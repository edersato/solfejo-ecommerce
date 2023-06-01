import Vue from 'vue'
import VueRouter from 'vue-router'

import Cart from '../pages/Cart.vue'
import Home from '../pages/Home.vue'
import Product from '../pages/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  }
]

const router = new VueRouter({
  routes
})

export default router
