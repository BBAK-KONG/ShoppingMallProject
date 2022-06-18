import { createApp } from 'vue'
import { router } from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import VueCookies from 'vue-cookies'


const app = createApp(App);

app.use(router);

app.use(VueCookies);

app.mount('#app'); 
