import axios from '@/axios'
var api = {
  getTest (params) {
    return axios.get('/api/ProductionLine/HomePageDayData', params)
  }

}
export default api
