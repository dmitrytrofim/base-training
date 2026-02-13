import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@v/views/HomeView.vue'
import CompositionApi from '@v/views/playground/CompositionApi.vue'
import OptionsApi from '@v/views/playground/OptionsApi.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/playground/composition-api', component: CompositionApi },
  { path: '/playground/options-api', component: OptionsApi },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
