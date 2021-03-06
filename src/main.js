import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index.js'
import App from './App.vue'

import Profiles from './components/Profiles.vue'

Vue.use(VueRouter)

// Define routes
const routes = [
  { path: '/', component: Profiles }
  //,
  //{ path: '/cart', component: Cart },
  //{ path: '/profiles', component: Profiles }
]

// Register routes
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
