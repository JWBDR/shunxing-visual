// 导入 types.js 文件
import types from './../types'
import apis from '@/components/right/apis'
const state = {
  count: 5,
  msg: '',
  testDataList: null
}
const actions = {
  increment ({ commit }, val) {
    commit(types.INCREMENT, val)
  },
  // 测试
  // getDataTest({ commit }, val) {
  //     //val是组件内需要传的配置参数
  //     apis.getTest().then(res => {
  //         commit(types.GETDATATEXT, res)
  //     })
  // },
  async getDataTest ({ commit }, payload) {
    const res = await apis.getTest()
    // console.log(res.data.Success)
    commit(types.GETDATATEXT, res.data.Success)
  },
  decrement ({ commit, state }) {
    if (state.count > 10) {
      commit(types.DECREMENT)
    }
  }

}

const mutations = {
  [types.INCREMENT] (state, val) {
    state.msg = val
  },
  [types.DECREMENT] (state, val) {

  },
  [types.GETDATATEXT] (state, val) {
    state.testDataList = val
  }
}
export default {
  namespaced: true, // 命名空间
  state,
  actions,
  mutations
}
