<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/signup">Sign up</router-link>
        </nav>
        <button class="icon" id="iconbtn"><img src="res/img/no-profile-picture-icon.png" alt="icon"></button>
        <!--<img src="res/img/no-profile-picture-icon.png" alt="icon">-->
        <div id="personalInfo">
            <ul class="dropdown">
                <li><p>John Doe</p></li>
                <li><p>john.doe@ut.ee</p></li>
                <li class="logout"><a href="login.html">Log out</a></li>
            </ul>
        </div>
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
        background-color: #333;
        background: none;
        border: none;
        display: block;
        float: right;
        width: 49px;
        height: 49px;
    }

    .icon:hover {
        cursor: pointer;
    }

    .icon>img {
        width: 47px;
        height: 47px;
    }

    #personalInfo {
        position: absolute;
        display: none;
        right: 5px;
        top: 45px;
        align-items: center;
        margin: 5px;
        background-color: gray;
        border-radius: 10px;
    }

    .dropdown {
        margin: 5px;
        color: white;
        list-style: none;
    }

    .logout>a{
        color: darkblue;
    }
    
    @media (max-width: 800px) {
        header{
            justify-content: center; 
        }

        #personalInfo {
            right: 32.25%
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
