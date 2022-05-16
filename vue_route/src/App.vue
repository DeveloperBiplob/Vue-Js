<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
        <h2>Routing</h2>
        <header-component></header-component>
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
export default {
  name: 'App',
  components:{
    HeaderComponent,
  }

}
</script>

<style>

</style>
