<template>
  <div id="app">
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/signup">Sign up</router-link>
  </nav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/Footer.vue';

  export default {
    components: {
      Footer,
    },
  };
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
