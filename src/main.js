import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import App from './App.vue'
import colored from './directives/colored'
import router from './routes'
import store from './store'

Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.config.productionTip = false

// Filters
Vue.filter('uppercase', (str) =>  str.toUpperCase());

//Directives
Vue.directive('colored', colored);

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
  store, router
}).$mount('#app')
