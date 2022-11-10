import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('gfocus', {
  inserted(e) {
    e.focus()
  },
})

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
