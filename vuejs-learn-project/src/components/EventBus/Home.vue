<template>
    <div>
        <h1>This Is Home Page</h1>
        <p>First Name Form Home Page : {{ firstName }} </p>
        <button @click="changeName">Update Name</button>
    </div>
</template>

<script>
import {bus} from '../../main';
export default {
    name: 'HomePage',
    props: {
        firstName: {
            type: String
        }
    },
    data() {
        return {

        }
    },
    methods: {
        changeName(){
            bus.$emit('nameChange', 'Developer');
        }
    }
}
</script>

<style scoped>

</style>