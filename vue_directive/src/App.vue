<template>
  <div id="app">
    <!-- Vue Custom Directive -->
    <p v-awesome></p>

    <!-- Vue Dynamic Value pass in parent component -->
    <p v-dynamicValue="myName"></p>

    <!-- Vue Argoment -->
    <p v-VueArgoment:blue></p>
    
    <!-- Vue Modifiers -->
    <!-- Isse korle akadik modiefirs use korte parbo like - [v-vueModiefirs.color.size]  only . use kore aktar por akta likhbo --> 
    <p v-vueModiefirs.customStyle></p>

    <!-- Vue Local Directive -->
    <p v-localDirective:black.yellow="myName"></p>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      myName: 'Biplob Jabery',
    }
  },
  directives:{
    'localDirective' : {
      bind(el, binding){
        el.innerHTML = binding.value
        if(binding.arg === 'black'){
          el.style.color = 'black'
          el.style.fontSize = '50px'
        }

        if(binding.modifiers.yellow){
          el.style.background = 'yellow'
          el.style.width = '600px'
          el.style.margin = 'auto'
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
