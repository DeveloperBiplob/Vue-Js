<template>
    <div>
        <h3>user page</h3>
        <p>{{ text }}</p>
      <ul>
        <li v-for="car in cars" :key="car">{{ car }}</li>
      </ul>
    </div>
</template>

<script>
import {carMixin} from './js/custom'
export default {
    name: 'UserPage',
    data() {
       return {

       } 
    },
    mixins: [carMixin]
}
</script>

<style scoped>
    
</style>