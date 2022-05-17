<template>
    <div>
        <h3>The Customer Edit Page</h3>

    <!-- Nested Route -->
    <p>Your Id is: <strong>{{ $route.params.id }}</strong></p>

    <!-- Query Parameter -->
    <!-- joto isse query parameter pass korte parbo -->
    <p>User Name : {{ $route.query.userName }}</p>
    <p>User Id : {{ $route.query.userId }}</p>
    <p>User Address : {{ $route.query.address }}</p>
    </div>
</template>

<script>

export default {
    name: 'CustomerEditPage',
    data() {
        return {

        }
    },
}
</script>

<style scoped>
    
</style>