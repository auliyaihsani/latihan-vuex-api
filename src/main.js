import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
  // Import component
  import Loading from 'vue-loading-overlay';
  // Import stylesheet
 import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading)
Vue.component('sani-load', Loading)
Vue.config.productionTip = false

new Vue({
  store, 
  render: h => h(App),
}).$mount('#app')
