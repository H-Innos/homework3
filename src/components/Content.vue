<template>
    <div class="content">
        <Post v-for="post in posts" :key="post.id" :post="post"></Post>
    </div>
</template>
  
<script>
import Post from '@/components/Post.vue';

export default {
  name: 'Content',
  props: {
    posts: Array,
  },
  components: {
    Post,
  },
};
</script>

<style>
    .content {
        margin: 20 0;
    }
</style>