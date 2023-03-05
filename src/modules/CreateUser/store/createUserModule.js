export const createUserModule = {
  state: () => ({
    user: {
      name: "Иванов",
      title: "great",
      color: "#9295A6"
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
    clearUser(context) {
      context.commit('setName', "Иванов")
      context.commit('setTitle', "great")
      context.commit('setColor', "#9295A6")
    }
  },
  namespaced: true
}