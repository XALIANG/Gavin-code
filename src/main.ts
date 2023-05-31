import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import { setupStore } from '@/store';
// import '@/permission';

// 样式
import 'element-plus/theme-chalk/dark/css-vars.css';

const app = createApp(App);
setupStore(app);
app.use(router).mount('#app');
