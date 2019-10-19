// import '@/assets/css/markdown.css'

import Vue from 'vue'
import '@/plugins/vuetify'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/store'
import { inilializer } from '@/plugins/inilializer'

inilializer(store, router)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
