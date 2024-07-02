import './assets/css/app.css'
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
// pinia store
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)
// router
import router from './router'
app.use(router)
// set default settings
import appSetting from './app-setting'
appSetting.init()
// popper
import Popper from 'vue3-popper'
app.component('Popper', Popper)

app.mount('#app')
