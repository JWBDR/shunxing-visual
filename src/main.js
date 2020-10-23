import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { DatePicker, Avatar, Button, Badge, Rate, Radio, Progress } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import highcharts from 'highcharts'
import Echarts from 'echarts'// 引入echarts
import './utils/log'
// highcharts3D
import VueHighCharts from 'highcharts-vue'
import highcharts3d from 'highcharts/highcharts-3d'
// 不引入雷达图不显示
import highchartsMore from 'highcharts/highcharts-more'
// __proto__
Vue.prototype.$store = store
Vue.prototype.$axios = axios
Vue.prototype.$highcharts = highcharts
Vue.prototype.$echarts = Echarts
// antv
Vue.use(DatePicker)
Vue.use(Avatar)
Vue.use(Button)
Vue.use(Badge)
Vue.use(Rate)
Vue.use(Radio)
Vue.use(Progress)
// highCharts
Vue.use(highcharts)
Vue.use(VueHighCharts)
highcharts3d(highcharts)
highchartsMore(highcharts)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
