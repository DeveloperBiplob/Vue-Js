import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        books: [
            {name: "Harry Potter", price: 100},
            {name: "Lord of The Rings", price: 150},
            {name: "Night Circus", price: 90},
            {name: "Lost World", price: 200}
          ]
    },

    // Using Getters-----//
    // central store theke getters er maddome data update.
    getters: {
        saleBooks:  (state)=> {
            let saleBook = state.books.map((book)=> {
                return {
                    name: `** ${book.name} **`,
                    price: book.price / 2
                }
            });

            return saleBook;
        }   
    },

    // Mutation
    // amara joto doroner method rakhbo shob rakhbo muataion er modde
    // ta hobel seta ke debug korte subida hobe.
    mutations: {
        reducePrice: (state)=> {
            state.books.forEach((book)=>{
                book.price -=1;
            });
        },

    }
})