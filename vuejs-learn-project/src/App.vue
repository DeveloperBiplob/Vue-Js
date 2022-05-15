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

    <Home-Page :firstName="firstName"></Home-Page>
    <About-Page :firstName="firstName"></About-Page>
    <hr>
    <List-Helper>
      <ul>
        <li v-for="list in lists" :key="list">
          {{ list }}
        </li>
      </ul>

      <!-- Name Slot -->
      <p slot="user">Use also knows PHP</p>
      <p :slot="loader">Successfully Loging This Website</p>
    </List-Helper>
    <Footer></Footer>

    </div>
</template>

<script>
import Header from './components/HeaderFooter/Header.vue';
import Footer from './components/HeaderFooter/Footer.vue';
import HomePage from './components/EventBus/Home.vue';
import AboutPage from './components/EventBus/About.vue';
import ListHelper from './components/SlotsPractice/ListHelper.vue';
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
      lists: ['Html', 'Css', 'Javascript'],
      loader: '',
    }
  },
  components: {
    Header,
    Footer,
    HomePage,
    AboutPage,
    ListHelper,
  },
  created(){
    setTimeout(()=> {
      this.loader = 'other';
    }, 3000)
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
