import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import HomeIndex from './components/home/HomeIndex'
import ProductIndex from './components/product/ProductIndex'
import AboutIndex from './components/about/AboutIndex'

Vue.component('HomeIndex', HomeIndex)
Vue.component('ProductIndex', ProductIndex)
Vue.component('AboutIndex', AboutIndex)



Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
