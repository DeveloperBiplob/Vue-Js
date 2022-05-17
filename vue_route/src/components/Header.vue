<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link active-class="active" exact class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <!-- <router-link class="nav-link" to="/customer/1">Customer 1</router-link>
        <router-link class="nav-link" to="/customer/2">Customer 2</router-link> -->

        <!-- Vue Nested Route And Name -->
        <router-link active-class="active" exact class="nav-link" to="/customer">Customer</router-link> 
      </li>
      <!-- router link er modde tag define kore dibo -->
      <!-- <router-link tag="li" class="nav-item nav-link" to="/customer">Customer</router-link>  -->
      <router-link active-class="active" exact class="nav-link" to="/about">About</router-link>
      <!-- 
        jei route e aci sei link ta acitve dekhanor jonno [active-class="active"] use korbo. 
        sathe kato promolem pace korbo ti [exact] property tr use kobo, ate kore home route defaul vabe active hoye thakbe na.
       -->
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