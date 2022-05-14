<template>
    <div>
        <h1>All Friends</h1>
        <ul>
            <li v-for="(friend,index) in friends" :key='index'>
                {{ friend.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AllFriends',
    props: ['friends'],
    data(){
        return {

            
        }
    }
    
}
</script>

<style scoped>

</style>