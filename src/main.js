import Vue from 'vue';
import router from './work/router';
import App from './App.vue';
import "@style/index.less"
import store from './work/store/store'




new Vue({
  el: "#app",
  store,
  router,
  render: (h)=> h(App)
});

