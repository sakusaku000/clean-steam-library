import { createApp } from 'vue'
import App from './App.vue'

import store from './store/main.js';
import router from './router';

// CSS
import './assets/css/tailwind.css';
import './assets/css/main.css';

createApp(App).use(router).use(store).mount('#app')
