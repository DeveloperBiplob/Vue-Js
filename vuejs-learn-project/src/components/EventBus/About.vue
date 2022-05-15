<template>
    <div>
        <h1>This Is About Page</h1>
        <p>First Name From About Page : {{ firstName }}</p>
    </div>
</template>

<script>
import {bus} from '../../main';
export default {
    name: 'AboutPage',
    props: {
        firstName: String,
    },
    data() {
        return {

        }
    },
    created(){
        bus.$on('nameChange', () => {
            // this.firstName = data;
        })
    }
}
</script>

<style scoped>

</style>