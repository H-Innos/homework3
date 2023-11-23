import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
  },
  getters: {
    getPosts: state => state.posts,
  },
  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts;
    },
  },
  actions: {
    fetchPosts: async ({ commit }) => {
      try {
        const response = await axios.get('http://localhost:3001/posts');
        commit('setPosts', response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
  },
});