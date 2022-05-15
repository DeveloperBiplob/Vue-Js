<template>
  <div id="app">
      {{ name }}
      {{ age }}
    </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      name: 'Biplob',
      age: 20
    }
  },
  components: {

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
