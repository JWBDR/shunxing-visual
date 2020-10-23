import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import indexModules from './modules/indexModules'

Vue.use(Vuex)

export default new Vuex.Store({
  // 不要在发布环境下启用严格模式
  strict: process.env.NODE_ENV !== 'production',
  getters,
  actions,
  modules: {
    indexModules
  }
})
