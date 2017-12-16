import Vue from "vue"
import Router from "vue-router"

import Home from "@/components/views/Home.vue"
import SignUp from "@/components/views/SignUp.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/user/sign_up",
      name: "sign_up",
      component: SignUp
    },
  ]
})
