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
    // data: {
    //     name: 'Biplob',
    // },
    // methods: {
    //     update(){
    //         setTimeout(()=> {
    //             this.name = 'Jabery'
    //         }, 2000)
    //     }
    // }

    // Event Use: V-on -------//
    // data:{
    //     name: 'Biplob',
    //     x: 0,
    //     y: 0
    // },
    // methods: {
    //     update(){
    //         this.name = 'Biplob Jabery'
    //     },

    //     getCoord(event){
    //         this.x = event.clientX,
    //         this.y = event.clientY
    //     }
    // }

    // Argument & Modifier-------//

    // data:{
    //     name: 'Biplob'
    // },
    // methods:{
    //     updateName(name, event){
    //         this.name = name
    //         console.log(event)
    //     }
    // }

    // data:{
    //     formData: {
    //         firstName: '',
    //         lastName: '',
    //     }
    // },
    // methods:{
    //     gettingData(){
    //         console.log(this.formData)
    //     }
    // }

    // Computed Property  -------//
    // 
    // data:{
    //     a: 0,
    //     b: 0,
    //     salary: 10
    // },
    // computed:{
    //     addToA(){
    //         console.log('add a')
    //         return this.a + this.salary
    //     },

    //     addToB(){
    //         console.log('add b')
    //         return this.b + this.salary
    //     }
    // }






});

// Create more instance-----//

// const firstIns = new Vue({
//     el: "#app1",
//     data: {
//         name: 'Biplob'
//     }
// })

// const secnondIns = new Vue({
//     el: "#app2",
//     data: {
//         name: 'Bipu'
//     },
//     methods: {
//         update(){
//             firstIns.name = 'Update name'
//         }
//     }

// })


// Mount and Template-----//
// const app1 = new Vue({
//     // el: "#app1",
//     data:{
//         name: 'Biplob'
//     },

//     template: `<p>This is {{ name }}</p>`,
// });

// setTimeout(() => {
//     app1.$mount("#app1")
// }, 2000);

// Component-------//

// Vue.component('name-component', {
//     data(){
//         return {
//             name: "Biplob",
//         }
//     },
//     template: `<p>{{ name }}</p>`
// });

// new Vue({
//     el: '#app11',

// });

// Vue life sycle---------//

new Vue({
    el: "#lifeSycle",
    data: {
        name: 'Biplob'
    },
    methods:{
        update(){
            this.name = 'Update Name'
        },
        destroyElement(){
            this.$destroy();
        }
    },
    beforeCreate(){
        console.log('Runing before create');
    },
    created(){
        console.log('Created');
    },
    beforeMount(){
        console.log('Runing before mount')
    },
    mounted(){
        console.log('Mounted')
    },
    beforeUpdate(){
        console.log('Runing before update')
    },
    updated(){
        console.log('Updated')
    },
    beforeDestroy(){
        console.log('Runing before destroy')
    },
    destroyed(){
        console.log('Destroyed')
    }
})