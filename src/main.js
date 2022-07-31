//import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
//import axios from 'axios'
import store from './store'
import VueRouter from 'vue-router'

import Home from './components/Home'
import About from './components/About'
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'
import UpdatePhoto from './components/UpdatePhoto'

Vue.use(VueRouter);

const router = new VueRouter({
  routes : [
    { path: '/', redirect: '/home'},
    { path: '/home', name: 'home', component: Home},
    { path: '/about', name: 'about', component: About},
    { path: '/contacts', name: 'contacts', component: ContactList,
      children: [
        { path: 'add', name: 'addcontact', component: ContactForm },
        { path: 'update/:no', name: 'updatecontact', component: ContactForm, props: true },
        { path: 'photo/:no', name: 'updatephoto', component: UpdatePhoto, props: true },
      ]
    },
  ]
})
//Vue.prototype.$axios = axios;
//createApp(App).mount('#app')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//const app = createApp(App);

//app.config.globalProperties.$axios = axios;

//app.mount('#app');
