<template>
    <div>
        <h1>This is a main header</h1>
        <p>{{ myName }}</p>
        <p>My age: {{ age }}</p>
        <ul>
            <li v-for="student in studens" :key="student">
                {{ student }}
            </li>
        </ul>
        <hr>
        <p>First Name : {{ firnsName }}</p>
        <p>Last Name : {{ lastName}}</p>
        <p>Age : {{ myAge}}</p>
        <button @click="changeFirstName">Change FirstName</button>
    </div>
</template>

<script>

export default {
    name: 'App-Header',
    //Prents component theke chaild component ke controll korar jonnno proos use korlam.
    // props: ['myName'],
    props: {
        myName:{
            type: String,
            require: true
        },
        age:{
            type: Number,
            require: true
        },
        studens:{
            type: Array
        },
        // Child component theke parent component er control or update.
        firnsName: String,
        lastName: String,
        myAge: Number,
    },
    data() {
        return {

        }
    },
    methods: {
        changeFirstName(){
            // return this.firnsName = 'Bipu';
            // child component theke parent component er valu change korte chaile custo event make korte hoy,
            // and seta ke parent component e call kort hoy. like - @updateValue="firstName = $event" 
            this.$emit('updateValue', 'Jabery');
        }
    }
}
</script>

<style scoped>

</style>