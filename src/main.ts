import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/reset.css';
import './assets/css/global.css';
import './assets/js/global.js';

const app = createApp(App);
app.use(router);

app.use(Antd).mount('#app');
