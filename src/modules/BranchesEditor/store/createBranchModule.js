
export const createBranchModule = {
  state: () => ({
    name: "",
    login: "",
    userLimit: 0,
    exportColor: ""
  }),
  getters: {
    getBranch(state) {
      return {
        name: state.name,
        login: state.login,
        userLimit: state.userLimit,
        exportColor: state.exportColor
      }
    }
  },
  mutations: {
    setName(state, name) {
      state.name = name
    },
    setLogin(state, login) {
      state.login = login
    },
    setUserLimit(state, userLimit) {
      state.userLimit = userLimit
    },
    setExportColor(state, exportColor) {
      state.exportColor = exportColor
    }
  },
  actions: {
  },
  namespaced: true
}