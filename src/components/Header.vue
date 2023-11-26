<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/signup">Sign up</router-link>
        </nav>
        <img class="icon" src="/img/no-profile-picture-icon.png" alt="icon">
    </header>
</template>
  
<script>
  export default {
    name: 'Header'
  };
</script>
  
<style scoped>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    background-color: #777;
    border-radius: 10px;
    }

    .navbar {
        list-style-type: none;
        overflow: hidden;
        padding-left: 10px;
        margin: 0;
    }

    li.navitem {
        float: left;
        position: relative;
        padding: 14px 16px;
        font-size: 17px;
        text-align: center;
        color:white;
    }

    li.navitem:hover {
        background-color: #111;
    }

    li.navitem>a {
        display: block;
        color: white;
        text-decoration: none;
    }

    .icon {
        width: 49px;
        height: 49px;
    }
    
    @media (max-width: 800px) {
        header{
            justify-content: center; 
        }
    }

    nav {
      padding: 30px;
    }

    nav a {
      font-weight: bold;
      color: #2c3e50;
      padding: 10px;
    }

    nav a.router-link-exact-active {
      color: #42b983;
    }
</style>
