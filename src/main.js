import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiEditBoxFill, MdDelete, FaSave, MdCancelRound, RiSearchLine } from "oh-vue-icons/icons"
addIcons(RiEditBoxFill, MdDelete, FaSave, MdCancelRound, RiSearchLine)

import { setupCalendar } from 'v-calendar';

const app = createApp(App)

app.use(setupCalendar, {})
app.use(createPinia())
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
