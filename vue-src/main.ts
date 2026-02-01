import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from '@/router/index'
import '@/assets/index.css'
import '@/assets/scss/index.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
