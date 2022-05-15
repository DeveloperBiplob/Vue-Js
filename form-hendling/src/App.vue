<template>
    <div class="container">
      <button class="btn btn-primary btn-xs" @click="componentToRender='comHome'">Home</button>
      <button class="btn btn-info btn-xs ml-2" @click="componentToRender='comAbout'">About</button>
      <button class="btn btn-success btn-xs ml-2" @click="componentToRender='comContact'">Contact</button>


      <keep-alive>
        <!-- keep-alive use korle component ke destory hoyna.  -->
      <component :is="componentToRender"></component>
      </keep-alive>
    </div>
</template>

<script>
import comHome from './Components/HomePage.vue';
import comAbout from './Components/About.vue';
import comContact from './Components/Contact.vue';
    export default {
      name: 'App',
      data(){
        return {
          componentToRender: "comContact",
        }
      },
      components:{
        comHome,
        comAbout,
        comContact,
      }
    }
</script>

<style>
ul li{
  list-style-type: none;
}
 
</style>