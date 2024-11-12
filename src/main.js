import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import store from './store';
import api from './services/api';

loadFonts();

const app = createApp(App);

app.config.globalProperties.$api = api;

app.use(router);
app.use(vuetify);
app.use(store);
app.mount('#app');
