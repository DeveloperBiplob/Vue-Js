<template>
  <div class="container">
    <transition name="appear">
      <div class="p-2 mb-2 bg-success" v-if="display">Hello</div>
    </transition>
    <button @click="display=!display" class="btn btn-success btn-sm">Clck ME</button>
    <hr>

    <!-- Transition Custom Class -->
    <transition name="customClass" 
    enter-active-class="animated slideInRight slower"
    leave-active-class="animated slideInRight slower">
      <div class="p-2 mb-2 bg-success" v-if="customClass">Hello</div>
    </transition>
    <button @click="customClass=!customClass" class="btn btn-success btn-sm">Clck ME</button>

    <hr>

    <!-- Filter  -->
    <div>
      <!-- Filter Chaining. joto isse filter use korte parbo, " | " use kore -->
      {{ text | upperCase | removeText }}
      <p>{{ text }}</p>
      <p>{{ description | lowerCase }}</p>
    </div>

    <hr>
    <!-- Mixins -->
    <user-page></user-page>
    <cline-page></cline-page>
  </div>
</template>

<script>
import ClinePage from './components/Client.vue';
import UserPage from './components/User.vue';
export default {
  neme: 'App',
  data() {
    return {
      display: false,
      customClass: false,
      text: 'Hello World',
      description: 'THIS IS OUR WEBSITE DESCRIPTION'

    }
  },
  filters: {
    upperCase(value){
      return value.toUpperCase();
    },
    removeText(value){
      return value.slice(1);
    }
  },
  components: {
    ClinePage,
    UserPage,
  }
}
</script>

<style scoped>
  .appear-enter{
    opacity: 0;
    transform: translateX(100px);
  }
  .appear-enter-active{
    transition: 3s;
  }
  .appear-leave{
    opacity: 1;
  }
  .appear-leave-active{
    opacity: 0;
    transition: 3s;
    transform: translateX(100px);
  }
</style>