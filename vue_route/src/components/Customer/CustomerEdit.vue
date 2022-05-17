<template>
    <div>
        <h3>The Customer Edit Page</h3>

    <!-- Nested Route -->
    <p>Your Id is: <strong>{{ $route.params.id }}</strong></p>
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