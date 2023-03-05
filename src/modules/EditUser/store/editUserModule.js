import axios from "axios"

export const editUserModule = {
  state: () => ({
    user: {
      name: "",
      title: "",
      color: ""
    }
  }),
  getters: {
    getUser(state) {
      return state.user
    }
  },
  mutations: {
    setName(state, name) {
      state.user.name = name
    },
    setTitle(state, title) {
      state.user.title = title
    },
    setColor(state, color) {
      state.user.color = color
    }
  },
  actions: {
    async fetchUser(context, id) {
      try {
        const response = await axios.get(`http://${window.location.hostname}:3000/v1/users/${id}`, {});
        context.commit('setName', response.data.name)
        context.commit('setTitle', response.data.title)
        context.commit('setColor', response.data.color)
      } catch (e) {
        console.log(e)
      } finally {
      }
    }
  },
  namespaced: true
}