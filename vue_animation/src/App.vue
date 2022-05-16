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
  </div>
</template>

<script>
export default {
  neme: 'App',
  data() {
    return {
      display: false,
      customClass: false,

    }
  },
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