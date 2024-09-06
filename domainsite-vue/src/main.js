
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import I18n from '@/i18n/index.js'

const app = createApp(App)

// app.use(I18n)
app.use(router)

app.mount('#app')
