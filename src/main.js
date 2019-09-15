import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = true

Vue.use(ElementUI)
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: function(h) {
    return h(App)
  }
}).$mount('#app')
