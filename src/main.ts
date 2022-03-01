import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { i18n } from './lang/configI18n';
import vueComponentsUi from 'vue-components-ui';

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');

vueComponentsUi(app);