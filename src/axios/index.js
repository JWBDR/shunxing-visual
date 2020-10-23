import Vue from 'vue'
import axios from 'axios'
// axios.defaults.baseURL = "http://10.100.6.46:9000"; //正式
// axios.defaults.baseURL = "http://10.1.5.217:63158";
axios.defaults.baseURL = 'http://10.1.5.90:9000'// 本地
/// http://10.1.5.50:9000/api/ProductionLine/HomePageDayData//测试
// axios.defaults.baseURL = "http://10.1.5.88:63158";//本地2 _9/22

axios.interceptors.request.use(
  function (config) {
    config.params = {
      ...config.params
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axios
