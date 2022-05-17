import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',

  // Scroll Behavior use korar karon holo-
  // kono kata page theke onno akt page jawar somoy oi page er scroll bar ta,
  // jei position e chilo jei page e jabo oi page o scroll bar ta same positione show kore.
  // ti ata thik korar jono scroll Behavior ta use korbo.

  // scrollBehavior(){
  //   return {
  //     x: 0,
  //     y: 0
  //   }
  // }
  
  // scrollBehavior e amara paramiter use korte pari.
  // ai gulu diye kono page theke kon page e jasche tar shob inpormatin tule ana jay.
  scrollBehavior(to, from, savedPosition){
    console.log(from);
    console.log(to);
    console.log(savedPosition);
    
    return {
      x: 0,
      y: 0
    }
  }

})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
