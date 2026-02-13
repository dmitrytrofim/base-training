import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from '@v/routers/index'
import '@v/assets/index.css'
import '@v/assets/scss/index.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
