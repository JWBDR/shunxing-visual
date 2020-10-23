import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: '/index',
    component: () => import(/* webpackChunkName: "default" */ '@/layout/default'),
    children: [
      {
        path: '/index',
        name: 'index',
        meta: { title: '首页', tx: 1 },
        component: () => import(/* webpackChunkName: "index" */ '@/components/right/index')
      },
      {
        path: '/online',
        name: 'online',
        meta: { title: '产线在线监控', tx: 2 },
        component: () => import(/* webpackChunkName: "online" */ '@/components/right/online')
      },
      // 设备详细
      {
        path: '/facility',
        name: 'facility',
        meta: { title: '产线运行分析/设备详情', tx: 3 },
        component: () => import(/* webpackChunkName: "facility" */ '@/components/right/facility')
      },
      {
        path: '/facility:id',
        name: 'facility',
        meta: { title: '产线运行分析/设备详情/详细', tx: 4 },
        component: () => import(/* webpackChunkName: "facility" */ '@/components/right/facility')
      },
      // {
      //   path: '/gstest',
      //   name: 'gstest',
      //   meta: { title: "测试" },
      //   component: () => import(/* webpackChunkName: "gstest" */ '@/components/right/gstest'),
      // },
      {
        path: '/analyse',
        name: 'analyse',
        meta: { title: '产线分析', tx: 5 },
        component: () => import(/* webpackChunkName: "analyse" */ '@/components/right/analyse')
      },
      {
        path: '/power',
        name: 'power',
        meta: { title: '能源管理', tx: 6 },
        component: () => import(/* webpackChunkName: "power" */ '@/components/right/power')
      },
      {
        path: '/measure',
        name: 'measure',
        meta: { title: '计量管理' },
        component: () => import(/* webpackChunkName: "measure" */ '@/components/right/measure')
      }
    ]
  },
  {
    path: '/404',
    name: 'notFound',
    meta: { title: '找不到页面', tx: 8 },
    component: () =>
      import(/* webpackChunkName: "404" */ '@/components/page/404.vue')
  },
  {
    path: '*',
    redirect: '/404',
    hideInMenu: true
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  to.matched.forEach(item => {
    item.name !== undefined ? next() : next({ path: '/404' })
  })
  next()
  // to.matched.length !== 0 ? next() : next({ path: '/404' })
})
router.afterEach(() => {
  NProgress.done()
})
export default router
