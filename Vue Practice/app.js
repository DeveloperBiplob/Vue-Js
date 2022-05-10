new Vue({
    el: '#app',
    // data : {
    //     title: 'Hello World!',
    //     isItTrue: true,
    //     cars: ['Ford', 'Toyota'],
    //     robot: {
    //         name: 'Franky'
    //     }
    //     // gretting: ()=> {
    //     //     return "Hello World! Function"
    //     // }
    // },
    // methods: {
    //     // //Old Way--
    //     gretting: function(){
    //         return 'Hello Biplob'
    //     },

    //     // Es6 --
    //     grettingName(){
    //         // return 'Hello world'
    //         return this.title
    //     }
    // }

    // Directives: V-bind-----//
    // data: {
    //     src: "https://picsum.photos/id/237/200/300",
    //     alt: "This is a Dog",
    //     link: 'http://www.google.com'
    // }

    // Directives: V-text and V-html---//
    // data: {
    //     myText: 'Hello Biplob',
    //     html: "<strong>Hello Bipu</strong>",
    // }


    // Conditional Rendering---//
    // data: {
    //     name: 'Biplob',
    //     age: 20,
    //     minAge: 18
    // }

    // data: {
    //     cars: ['BMW', 'TOYTA', 'NASA'],
    //     user: {
    //         name: 'Biplob',
    //         age: 20,
    //         minAge: 18
    //     }
    // }

    // v-once-----//
    data: {
        name: 'Biplob',
    },
    methods: {
        update(){
            setTimeout(()=> {
                this.name = 'Jabery'
            }, 2000)
        }
    }




});