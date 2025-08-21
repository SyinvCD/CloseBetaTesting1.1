import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Catalog from './components/Catalog.vue'
import Blog from './components/Blog.vue'

const routes = [
  { path: '/', component: Catalog },
  { path: '/blog', component: Blog }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')