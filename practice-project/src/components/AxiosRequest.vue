<template>
    <div>
        <h1>View Post</h1> <hr>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AxiosRequest',
    data(){
        return{
            posts: [],
        }
    },
    methods:{

    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.posts = res.data
        })
        .catch(err => {
            console.log(err)
        })
    }

    
}
</script>

<style scoped>
h1{
    color: red;
    text-align: center;

}

ul li{
    width: 400px;
    margin: auto;
    padding: 10px;
    border: 1px solid #000;
    margin: 20px 0;
}
</style>