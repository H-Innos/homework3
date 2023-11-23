<template>
  <div class="home">
    <div class="container">
      <aside id="left-bar"></aside>
      <Content :posts="posts"></Content>
      <aside id="right-bar"></aside>
    </div>
  </div>
</template>

<script>
import Content from '@/components/Content.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    Content,
  },
  computed: {
    ...mapState(['posts']),
  },
  methods: {
    ...mapActions(['fetchPosts']),
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: lightgray;
  }
  .container {
      flex-grow: 1;
      display:flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 10px 0;
  }

  aside {
      margin: 0 10px;
      width: 25%;
      background-color: #333;
      border-radius: 10px;
  }

  Content {
      display: flex;
      flex-direction: column;
      overflow: auto;
      width: 50%;
  }

  @media (max-width: 600px) {
    Content {
        width: 90%;
    }
    aside{
        display: none;
      }
  } 
  
@media (max-width: 800px) {
    .container {
        justify-content: center;
    } 
  }

</style>
