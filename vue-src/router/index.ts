import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HoveView.vue'
import AboutView from '@/views/About.View.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
