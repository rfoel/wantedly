import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

axios.defaults.baseURL = process.env.API

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: [],
    token: !!localStorage.token ? localStorage.token : false
  },
  mutations: {
    setSkills(state, skills) {
      state.skills = skills
    },
    setToken(state, token) {
      localStorage.token = token
      state.token = token
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
          return {error}
        })
    },
    signUp({ commit }, data) {
      return axios
        .post("/users", data)
        .then(response => {
          commit("setToken", response.data.token)
          return response.data
        })
        .catch(error => {
          return {error}
        })
    },
    signIn({ commit }, data) {
      return axios
        .post("/user/sign_in", data)
        .then(response => {
          commit("setToken", response.data.token)
          return response
        })
        .catch(error => {
          return {error}
        })
    }
  }
})
