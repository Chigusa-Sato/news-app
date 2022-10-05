import { createApp } from 'vue';
import { createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';

import createRouter from './routes.js';
import App from './App.vue';
import './index.css';
import 'tailwindcss/tailwind.css';
//ここから追加
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faStar);
//ここまで追加

const store = createPinia();
const router = createRouter(createWebHistory());
const app = createApp(App);

app.component('fa', FontAwesomeIcon);
// #appはindex.htmlで指定したid
app.use(router).use(store).mount('#app');
