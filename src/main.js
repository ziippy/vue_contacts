//import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'

Vue.prototype.$axios = axios;
//createApp(App).mount('#app')
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

//const app = createApp(App);

//app.config.globalProperties.$axios = axios;

//app.mount('#app');
