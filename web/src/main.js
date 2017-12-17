// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"
import Buefy from "buefy"
import Vuelidate from "vuelidate"

import App from "./App"
import router from "./router"
import store from "./store"

Vue.use(VueAxios, axios)
Vue.use(Buefy, {
  defaultIconPack: "fa"
})
Vue.use(Vuelidate)

Vue.config.productionTip = process.env.NODE_ENV === "production"

new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
})
