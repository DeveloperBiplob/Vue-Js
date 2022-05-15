<template>
  <div id="app">
    <Header 
      :myName="name" 
      :age="age" 
      :studens="myStudents"
      :firnsName="firstName"
      :lastName="lastName"
      :myAge="myAge"
      @updateValue="firstName = $event"></Header>
    <Footer></Footer>

    </div>
</template>

<script>
import Header from './components/HeaderFooter/Header.vue';
import Footer from './components/HeaderFooter/Footer.vue';
export default {
  name: 'App',
  data(){
    return {
      name: 'Biplob',
      age: 20,
      myStudents: ['biplob', 'bipu', 'bipul', 'karim'],
      firstName: 'Biplob',
      lastName: 'Jabery',
      myAge: 22,
    }
  },
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
