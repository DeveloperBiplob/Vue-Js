import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue directive 
Vue.directive('awesome', {
  bind(el){
    el.innerHTML = 'Hello World!'
  }
})

// Vue direcrtive with dynamic value pass, control in Main component file.
Vue.directive('dynamicValue', {
  bind(el, binding){
    el.innerHTML = binding.value
    el.style.color = 'red'
    el.style.background = 'yellow'
    el.style.display = 'inline-block'
    el.style.padding = '10px 20px'
  }
})

//Vue direcrtive with - Argometn.
Vue.directive('VueArgoment', {
  bind(el, binding){
    el. innerHTML = 'Hello World'
    if(binding.arg === 'blue'){
      el.style.color = 'blue'
      el.style.width = '100px'
      el.style.margin = 'auto'
      el.style.background = 'yellow'
      el.style.padding = '10px 20px'
    }
  }
})

// Vue direcrtive with - Modifieres.
Vue.directive('vueModiefirs', {
  bind(el, binding){
    el.innerHTML = 'This is Vue Modifieres'
    if(binding.modifiers.customStyle){
      el.style.width = '100px'
      el.style.margin = '20px auto'
      el.style.color = 'white'
      el.style.background = 'green'
      el.style.padding = '10px 20px'
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
