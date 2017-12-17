import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

axios.defaults.baseURL = process.env.API

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: !!localStorage.token ? JSON.parse(localStorage.token) : false
  },
  mutations: {
    signIn(state, token) {
      localStorage.token = JSON.stringify(token)
      state.token = token
    },
    signOut(state) {
      localStorage.removeItem("token")
      state.token = false
    }
  },
  actions: {
    getSkills({ commit }) {
      return axios
        .get("/skills")
        .then(response => {
          return response.data
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
      console.log(data)
      return axios
        .post("/users", data)
        .then(response => {
          commit("signIn", response.data.token)
          return response
        })
        .catch(error => {
          return { error }
        })
    },
    signIn({ commit }, data) {
      return axios
        .post("/user/sign_in", data)
        .then(response => {
          commit("signIn", response.data.token)
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
            Authorization: `Token token=${localStorage.token}`
          }
        })
        .then(response => {
          commit("signOut")
          return response
        })
        .catch(error => {
          return { error }
        })
    },
    getProfile({ commit }) {
      return axios
        .get("/user", {
          headers: {
            Authorization: `Token token=${localStorage.token}`
          }
        })
        .then(response => {
          return response.data
        })
        .catch(error => {
          return { error }
        })
    },
    getCurrentUserSkills({ commit }) {
      return axios
        .get("/user/skills", {
          headers: {
            Authorization: `Token token=${localStorage.token}`
          }
        })
        .then(response => {
          return response.data
        })
        .catch(error => {
          return { error }
        })
    },
    getUser({ commit }, data) {
      return axios
        .get(`/users/${data.id}`)
        .then(response => {
          return response.data
        })
        .catch(error => {})
    },
    getUserSkills({ commit }, data) {
      return axios
        .get(`/users/${data.id}/skills`)
        .then(response => {
          return response.data
        })
        .catch(error => {})
    }
  }
})
