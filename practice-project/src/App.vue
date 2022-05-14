<template>
  <div id="app">
    <App-Navbar></App-Navbar>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'app',
    data(){
      return {
        name: 'Biplob',
        age: 20
      }
    },
    components:{
      'App-Navbar': Navbar
    }
}
</script>

<style >
*{
    padding: 0;
    margin: 0;
}
</style>
