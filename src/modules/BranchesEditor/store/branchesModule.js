import axios from "axios"

export const branchesModule = {
  state: () => ({
    branches: [],
    branchId: 0
  }),
  getters: {
    allBranches(state) {
      return state.branches
    },
  },
  mutations: {
    setBranches(state, branches) {
      state.branches = branches
    },
    setBranchID(state, id) {
      state.branchId = id
    }
  },
  actions: {
    async fetchBranches(context) {
      try {
        const response = await axios.get(`http://${window.location.hostname}:3000/v1/branches`, {});
        context.commit('setBranches', response.data)
      } catch (e) {
        console.log(e)
      } finally {
      }
    },
    changeBranchId(context, id) {
      context.commit('setBranchId', id)
    }
  },
  namespaced: true
}