<template>
    <diV>
        <h1>list Helper</h1>
        <!-- default slot -->
        <slot></slot>
        <!-- name Solte -->
        <slot name="user"></slot>   

        <slot name="other">Loading...</slot>
    </diV>
</template>

<script>

export default {
  name: 'ListHelper',
  data(){
    return {

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
