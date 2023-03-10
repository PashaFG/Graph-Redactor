import axios from "axios"

import { createBranchModule } from '@/modules/BranchesEditor/store/createBranchModule.js'

export const branchesModule = {
  state: () => ({
    branches: [],
    branchId: 0,
    currentTab: "MainBranches",
    tabs: ["MainBranches"]
  }),
  getters: {
    allBranches(state) {
      return state.branches
    },
    getCurrentTab(state) {
      return state.currentTab
    }
  },
  mutations: {
    setCurrentTab(state, tab) {
      state.currentTab = tab
    },
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
  modules: {
    create: createBranchModule
  },
  namespaced: true
}