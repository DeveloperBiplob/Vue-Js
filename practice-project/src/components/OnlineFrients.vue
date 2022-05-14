<template>
    <div>
        <h1>Online Friends</h1>
        <div v-for="(friend,index) in friends" :key='index'>
            <h6 v-if="friend.online">{{ friend.name}}</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OnlineFriends',
    props: ['friends'],
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>