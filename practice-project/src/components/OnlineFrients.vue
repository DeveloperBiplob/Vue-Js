<template>
    <div>
        <h1>Online Friends</h1>
        <div v-for="(friend,index) in friends" :key='index'>
            <h3 v-if="friend.online" @click="unFriend(friend.name)">{{ friend.name}}</h3>
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
    },
    methods:{
        unFriend(name){
            this.$emit('delete', name);
        }
    }
}
</script>

<style scoped>

</style>