import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import SignUpView from '../views/SignUpView.vue'
import AddPostView from '../views/AddPostView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/api/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/api/contactUs',
    name: 'contactUs',
    component : ContactUsView
  }, 
  {
    path: '/api/addPost',
    name: 'addPost',
    component : AddPostView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
