import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

axios.defaults.baseURL = process.env.API

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: []
  },
  mutations: {
    setSkills(state, skills) {
      state.skills = skills
    }
  },
  actions: {
    getSkills({ commit }) {
      axios
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
        return error
      })
    },
    signUp({ commit }, data) {
      axios
        .post("/users", data)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
