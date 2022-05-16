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
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      myName: 'Biplob Jabery',
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
