import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Ionic from '@ionic/vue'
import '@ionic/core/css/ionic.bundle.css'
import '@/plugins/ionicons'
import store from './store'

Vue.use(Ionic)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')