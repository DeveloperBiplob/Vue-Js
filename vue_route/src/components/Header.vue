<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/customer/1">Customer 1</router-link>
        <router-link class="nav-link" to="/customer/2">Customer 2</router-link>
      </li>
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