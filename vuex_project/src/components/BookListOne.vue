<template>
    <div id="book-list-one">
        <h2>Book List One</h2>
        <ul>
            <!-- <li v-for="(b,id) in book" :key="id"> -->
            <li v-for="(b,id) in saleBooks" :key="id">
                <span class="name">{{b.name}}</span>
                <span class="price">${{b.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    // props: ['book'],
    data(){
        return{
            
        }
    },
    computed: {
        book(){
            return this.$store.state.books;
        },

        // Without Use VUEX: Getters-------//
        // saleBooks(){
        //     let saleBook = this.$store.state.books.map((book)=> {
        //         return {
        //             name: `** ${book.name} **`,
        //             price: book.price / 2
        //         }
        //     });

        //     return saleBook;
        // }

        //Using Geters----//
        // getters use korar karon holo amara jodi aki type er data onek gulu component e use kore thaki,
        // and jodi data ta update korar dorkar pore ta hole jate akta jayate change korle sob gulu component e change hoy jay.
        // saleBooks(){
        //     return this.$store.getters.saleBooks;
        // }

        // MapGetters
        // akti website toh onek gulu getters thakte pare.
        // r sei gulu ke sohoje component e use korar jonno MapGetters use korbo.
        // getters gulu koma koma diye likhbo
        ...mapGetters([
            'saleBooks'
        ])
    }
}
</script>

<style scoped>
    #book-list-one{
    background: rgb(218, 201, 14);
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 10px;
    padding: 10px 20px;
}
#book-list-one ul{
    padding: 0;
}
#book-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>