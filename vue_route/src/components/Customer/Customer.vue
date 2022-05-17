<template>
    <div>
        <h3>The Customer Page</h3>
        <!-- <p>Customer Id : {{ lodedId }}</p> -->
        <button @click="navigateToHome">Go to Home</button>


        <!-- Vue Nested Route -->
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'CustomerPage',
    // data() {
    //     return {
    //         lodedId: this.$route.params.id
    //     }
    // },
    // watch: {
    //     '$route'(to){
    //         this.lodedId= to.params.id;
    //     }
    // },
    methods: {
        navigateToHome(){
            // this.$router.push('/');

            // Route name Use kore
            this.$router.push({name: 'home'});
        }
    }
}
</script>

<style scoped>
    
</style>