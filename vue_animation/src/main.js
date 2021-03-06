import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Filter use Globaly
Vue.filter('lowerCase', (value)=>{
  return value.toLowerCase();
})

new Vue({
  render: h => h(App),
}).$mount('#app')
