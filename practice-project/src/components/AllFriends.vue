<template>
    <div>
        <h1>All Friends</h1>
        <div v-for="(friend,index) in friends" :key='index'>
            <h3 v-if="friend.online">{{ friend.name}}</h3>
        </div>
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