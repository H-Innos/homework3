<template>
  <div class="home">
    <div class="container">
      <aside id="left-bar"></aside>
      <div class="content-and-buttons">
        <div class="content">
          <div v-for="post in posts" :key="post.id">
          <Post :post="post" @incrementLikes="incrementLikes"></Post>
          </div>
        </div>
        <button class="reset-likes" @click="resetLikes">Reset Likes</button> <!-- NOT NECESSARY ANYMORE -->
      </div>
      <aside id="right-bar"></aside>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post.vue';

export default {
  name: 'HomeView',
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
    };
  },
  computed: {
  },
  methods: {
    resetLikes() {
      // NOT NECESSARY 
    },
    incrementLikes(postId) { 
      fetch(`http://localhost:3000/api/posts/increment-likes/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((updatedPost) => {
          const updatedPosts = this.posts.map((post) => {
            if (post.id === updatedPost.id) {
              return updatedPost;
            }
            return post;
          });
          this.posts = updatedPosts;
        })
        .catch((err) => console.log(err.message));
      },
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  .home {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    height: 90%;
  }

  .container {
      display:flex;
      flex-direction: row;
      height: 100%;
  }

  .content-and-buttons {
    flex: 2;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  aside {
    flex: 1;  
    margin: 0 10px;
    background-color: #3b7097;
    border-radius: 10px;
    height: 100%;
  }

  .reset-likes {
    width: 10%;
    padding: 5px;
    margin: 10px auto 10px auto;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    bottom: 0;
    margin-top: auto;
  }

  .content {
      overflow-y: auto;
  }

</style>
