<template>
    <div>
        <h1>Home Page</h1>
        <button @click="showAllPosts" class="btn btn-success btn-sm">Show all posts</button>
        <div v-for="(post, id) in posts" :key="id" class="vue_post">
          <h3>{{ post.title }}</h3>
          <p> {{ post.body }} </p>
        </div>
    </div>
</template>

<script>

    export default {
      name: 'HomePage',
      data(){
        return {
          posts: '',
        }
      },
      methods: {
        showAllPosts(){
          this.$http.get('https://jsonplaceholder.typicode.com/posts')
          .then((res)=> {
            this.posts = res.data.slice(0, 10);
          })
          .catch((err)=> {
            console.log(err);
          })
        }
      }

    }
</script>

<style>
  .vue_post{
    width: 1000px;
    border: 1px solid rgb(216, 194, 194);
    padding: 20px;
    margin: 10px 0;
  }
</style>