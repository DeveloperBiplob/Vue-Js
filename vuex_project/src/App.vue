<template>
    <div id="app">
        <!-- <compBookListOne :book="books"></compBookListOne>
        <compBookListTwo :book="books"></compBookListTwo> -->

        <compBookListOne></compBookListOne>
        <compBookListTwo></compBookListTwo>
        <button class="btn btn-primary mr-2" @click="reducePrice"> - Reduce Price</button>
        <button class="btn btn-primary" @click="increasePrice">Increase Price + </button>
    </div>
</template>

<script>
import compBookListOne from "./components/BookListOne"
import compBookListTwo from "./components/BookListTwo"
export default {
    data(){
        return{
            // books: [
            //   {name: "Harry Potter", price: 100},
            //   {name: "Lord of The Rings", price: 150},
            //   {name: "Night Circus", price: 90},
            //   {name: "Lost World", price: 200}
            // ]
        }
    },
    methods: {
        reducePrice(){
            this.$store.commit('reducePrice');
        },
        increasePrice(){
            this.$store.dispatch('increasePrice');
        }
    },
    components:{
      compBookListOne,
      compBookListTwo
    }
}
</script>