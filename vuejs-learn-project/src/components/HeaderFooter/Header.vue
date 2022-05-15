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
    },
    data() {
        return {

        }
    },
}
</script>

<style scoped>

</style>