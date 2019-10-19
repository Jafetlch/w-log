import axios from 'axios'
import store from '@/store/store'
import router from '@/router'
import URL from '@/helpers/url'

var api = axios.create({
  // baseURL: URL.current,
  baseURL: URL.server,
  'headers': {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${store.getters.getUser ? store.getters.getUser.token : ''}`
  }
  return config
}, (error) => {
  store.commit('logout')
  router.push({ name: 'Home' })
  return Promise.reject(error)
})

export default api
