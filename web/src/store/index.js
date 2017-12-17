import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

axios.defaults.baseURL = process.env.API

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: [],
    user: !!localStorage.user ? JSON.parse(localStorage.user) : false
  },
  mutations: {
    setSkills(state, skills) {
      state.skills = skills
    },
    setUser(state, user) {
      localStorage.user = JSON.stringify(user)
      state.user = user
    },
    signOut(state) {
      localStorage.removeItem("user")
      state.user = false
    }
  },
  actions: {
    getSkills({ commit }) {
      return axios
        .get("/skills")
        .then(response => {
          commit("setSkills", response.data)
        })
        .catch(error => {})
    },
    checkUniqueness({}, data) {
      return axios
        .post("/checkUniqueness", data)
        .then(response => {
          return response.data
        })
        .catch(error => {
          return { error }
        })
    },
    signUp({ commit }, data) {
      return axios
        .post("/users", data)
        .then(response => {
          commit("setUser", response.data)
          return response.data
        })
        .catch(error => {
          return { error }
        })
    },
    signIn({ commit }, data) {
      return axios
        .post("/user/sign_in", data)
        .then(response => {
          commit("setUser", response.data)
          return response
        })
        .catch(error => {
          return { error }
        })
    },
    signOut({ commit }) {
      return axios
        .delete("/user/sign_out", {
          headers: {
            Authorization: `Token token=${localStorage.user.token}`
          }
        })
        .then(response => {
          commit("signOut")
          return response
        })
        .catch(error => {
          return { error }
        })
    }
  }
})
