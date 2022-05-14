<template>
  <div id="app">
    <App-Navbar></App-Navbar>
    <AllFriends :friends="friends"></AllFriends>
    <OnlineFriends :friends="friends" @delete="deleteFriend"></OnlineFriends>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import AllFriends from './components/AllFriends.vue';
import OnlineFriends from './components/OnlineFrients.vue';
export default {
  name: 'app',
    data(){
      return {
        name: 'Biplob',
        age: 20,
        friends: [
          {name:'bipu', online:true},
          {name:'Bipob', online:true},
          {name:'jabery', online:false},
          {name:'Vipul', online:true},
      ]
      }
    },
    components:{
      'App-Navbar': Navbar,
      AllFriends,
      OnlineFriends,
    },
    methods:{
      deleteFriend(payload){
        this.friends = this.firends.filter(friend =>{
          return friend.name !== payload
        })
        console.lgo(payload)
      }
    }
}
</script>

<style >
*{
    padding: 0;
    margin: 0;
    text-align: center;
}
</style>
