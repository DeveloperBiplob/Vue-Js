<template>
    <div>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data(){
        return {

        }
    }
   
}
</script>

<style scoped>
nav{
    max-width: 100%;
    margin: auto;
    background: rgb(189, 177, 177);
    color: brown;
    padding: 20px 0;
    text-align: center;
}
ul li{
    list-style: none;
    display: inline-block;
}
ul li a{
    text-decoration: none;
    padding: 0 20px;
}
</style>