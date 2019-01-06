import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import router from "./router";
import Axios from "axios";
import store from "./store";

Vue.config.productionTip = false;
Axios.defaults.headers.common.Accept = "application/json";
Axios.defaults.baseURL = "https://infinite-dawn-93085.herokuapp.com";

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
