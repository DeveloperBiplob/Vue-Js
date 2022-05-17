<template>
    <div>
        <h3>Please select a Customer</h3>
        <ul class="list-gorup">
            <!-- <li class="list-group-item" style="cursor: pointer">Cusomer One</li>
            <li class="list-group-item" style="cursor: pointer">Cusomer Two</li>
            <li class="list-group-item" style="cursor: pointer">Cusomer Three</li> -->

            <router-link tag="li" to="customer/1" class="list-group-item" style="cursor: pointer">Cusomer One</router-link>
            <router-link tag="li" to="customer/2" class="list-group-item" style="cursor: pointer">Cusomer Two</router-link>
            <router-link tag="li" to="customer/3" class="list-group-item" style="cursor: pointer">Cusomer Three</router-link>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'CustomeStartPage',
    data() {
        return {

        }
    },
}
</script>

<style scoped>
    
</style>