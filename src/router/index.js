import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BMap from '../views/BMap.vue'
import vChartsMap from '../views/vChartsMap.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'BMap',
    component: BMap
  },
  {
    path: '/v-charts-map',
    name: 'vChartsMap',
    component: vChartsMap
  }
]

const router = new VueRouter({
  routes
})

export default router
