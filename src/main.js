import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Ionic from '@ionic/vue'
import '@ionic/pwa-elements'
import '@ionic/core/css/ionic.bundle.css'
import '@/plugins/ionicons'
import { firestorePlugin } from 'vuefire'
import store from './store'

import { defineCustomElements } from '@ionic/pwa-elements/loader'

Vue.use(Ionic)
Vue.use(firestorePlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

defineCustomElements(window)
