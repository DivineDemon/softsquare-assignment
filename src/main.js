import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// BSV CDN Links
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// BSV Plugin Initialized
Vue.use(BootstrapVue);

// Defining Environment
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
