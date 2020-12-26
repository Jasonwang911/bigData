import Vue from 'vue'
import VCharts from 'v-charts'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import VueECharts from 'vue-echarts'
import './styles/index.css'
const ECharts = require('echarts')

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.component('v-chart', VueECharts)

Vue.use(VCharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
