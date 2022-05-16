<template>
    <div>
        <h3>The Customer Page</h3>
        <button @click="navigateToHome">Go to Home</button>
    </div>
</template>

<script>

export default {
    name: 'CustomerPage',
    data() {
        return {

        }
    },
    methods: {
        navigateToHome(){
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
    
</style>