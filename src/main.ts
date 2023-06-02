import { createApp } from 'vue'
import './style.css'
import ChattingAi from './components/widget.vue'
import App from './App.vue'


createApp(App).component('ChattingAi', ChattingAi).mount('#app')
