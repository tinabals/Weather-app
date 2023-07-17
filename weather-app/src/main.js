import { createApp } from 'vue'

import router from './router.js'
import App from './App.vue'

import BaseCard from '../src/ui/BaseCard.vue'
const app = createApp(App)

app.use(router)
app.use('base-card', BaseCard)
app.mount('#app')
