import { createApp } from 'vue';
import App from './App.vue';
// import router from '@/router';
import { setupStore } from '@/store';
// import '@/permission';

// 样式
import 'element-plus/theme-chalk/dark/css-vars.css';
import '@/styles/index.scss';
import 'uno.css';

const app = createApp(App);
setupStore(app);
app.mount('#app');
