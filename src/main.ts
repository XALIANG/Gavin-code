import {createApp} from 'vue';
import App from './App.vue';
import router from '@/routers/index';
import pinia from '@/stores/index';
import '@/styles/index.scss';
import '@/styles/common.scss';

createApp(App).use(router).use(pinia).mount('#app');
