import axios from "axios"

import { createBranchModule } from '@/modules/BranchesEditor/store/createBranchModule.js'

export const branchesModule = {
  state: () => ({
    branches: [],
    branchId: 0,
    currentTab: "MainBranches",
    branchToDelete: [],
    branchToUpdate: []
  }),
  getters: {
    getBranchToDelete(state) {
      return state.branchToDelete
    },
    getBranchToUpdate(state) {
      return state.branchToUpdate
    },
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
    },
    addBranchToDelete(state, id) {
      if (!state.branchToDelete.includes(id)) {
        state.branchToDelete.push(id)
      }
      state.branchToUpdate = state.branchToUpdate.filter((element) => element !== id)
    },
    addBranchToUpdate(state, id) {
      if (!state.branchToUpdate.includes(id)) {
        state.branchToUpdate.push(id)
      }
    },
    clearBranchToDelete(state) {
      state.branchToDelete = []
    },
    clearBranchToUpdate(state) {
      state.branchToUpdate = []
    },
    updateBranch(state, newBranch) {
      for (let branch in state.branches) {
        if (state.branches[branch]._id === newBranch._id) {
          state.branches[branch] = newBranch
        }
      }
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
    },
    deleteBranch(context, id) {
      let results = context.state.branches.filter((element) => element._id !== id)
      context.commit('setBranches', results)
      context.commit('addBranchToDelete', id)
    },
    updateBranch(context, newBranch) {
      context.commit('updateBranch', newBranch)
      context.commit('addBranchToUpdate', newBranch._id)
    }
  },
  modules: {
    create: createBranchModule
  },
  namespaced: true
}