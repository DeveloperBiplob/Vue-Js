<template>
    <div>
        <h3>The Customer Details Page</h3>
        <p>Your Id is: <strong>{{ $route.params.id }}</strong></p>

        <!-- Norlam Way to Use Route -->

        <!-- <router-link
        tag="button"
        :to="'/customer/' + $route.params.id + '/edit'"
        class="btn btn-xs btn-success">
        Eidt 
        </router-link> -->

        <!-- Route Name Use Kore ----------------->
        <router-link
        tag="button"
        :to="{ name: 'customerEdit', params: { params: $route.params.id }, query:{userName: 'biplob', userId: 100, address: 'Dhaka'} }"
        class="btn btn-xs btn-success">
        Eidt 
        </router-link>

    </div>
</template>

<script>

export default {
    name: 'CustomerDetailsPage',
    data() {
        return {

        }
    },
}
</script>

<style scoped>
    
</style>