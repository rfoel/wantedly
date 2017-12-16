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
          console.log(response.data)
          commit("setSkills", response.data)
        })
        .catch(error => {})
    }
  }
})
