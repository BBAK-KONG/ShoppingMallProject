import { createApp } from 'vue'
import { router } from './router'
import { VueSession } from 'vue-session'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'

const app = createApp(App);

app.use(router);

var sessionOptions = {
    persist: true
  }
app.use(VueSession, sessionOptions);

app.mount('#app'); 
