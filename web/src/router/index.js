import Vue from "vue"
import Router from "vue-router"
import store from "../store"

import Home from "@/components/views/Home.vue"
import Search from "@/components/views/Search.vue"
import SignUp from "@/components/views/SignUp.vue"
import SignIn from "@/components/views/SignIn.vue"
import Profile from "@/components/views/Profile.vue"
import User from "@/components/views/User.vue"

Vue.use(Router)

const router = new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { auth: false }
    },
    {
      path: "/search",
      name: "search",
      component: Search,
      meta: { auth: false }
    },
    {
      path: "/user/sign_in",
      name: "sign_in",
      component: SignIn,
      meta: { auth: false }
    },
    {
      path: "/user/sign_up",
      name: "sign_up",
      component: SignUp,
      meta: { auth: false }
    },
    {
      path: "/user/profile",
      name: "profile",
      component: Profile,
      meta: { auth: true }
    },
    {
      path: "/users/:id",
      name: "user",
      component: User,
      meta: { auth: false }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = to.matched.some(route => route.meta.auth)
  const logged = store.state.token ? true : false
  if (auth && !logged) {
    next("/user/sign_in")
  } else if (!auth && logged) {
    if (to.name == "sign_in" || to.name == "sign_up") next("/")
    else next()
  } else {
    next()
  }
})

export default router
