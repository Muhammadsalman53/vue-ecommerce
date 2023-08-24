import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/main.css';

createApp(App).use(router).mount('#app');
