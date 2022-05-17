<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <!-- <router-link class="nav-link" to="/customer/1">Customer 1</router-link>
        <router-link class="nav-link" to="/customer/2">Customer 2</router-link> -->

        <!-- Vue Nested Route And Name -->
        <router-link class="nav-link" to="/customer">Customer</router-link> 
      </li>
      <!-- router link er modde tag define kore dibo -->
      <!-- <router-link tag="li" class="nav-item nav-link" to="/customer">Customer</router-link>  -->
    </ul>
  </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {

        }
    },
}
</script>