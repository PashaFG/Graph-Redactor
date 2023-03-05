import axios from "axios";

export const usersModule = {
  state: () => ({
    users: [
      { _id: 0, name: "___________", title: "blank", color: "" },
    ],
    titles: [
      { value: 'great', name: 'Старший смены' },
      { value: 'lower', name: 'Рядовой сотрудник' },
      { value: 'new', name: 'Стажёр' }
    ]
  }),
  getters: {
    fullUsers(state) {
      return state.users
    },
    allUsers(state) {
      return state.users.filter((user) => user._id > 0)
    },
    greatUsers(state) {
      return state.users.filter((user) => user.title === "great").sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) { return -1; }
        if (nameA > nameB) { return 1; }

        return 0;
      })
    },
    lowerUsers(state) {
      return state.users.filter((user) => user.title === "lower").sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) { return -1; }
        if (nameA > nameB) { return 1; }

        return 0;
      })
    },
    newUsers(state) {
      return state.users.filter((user) => user.title === "new").sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) { return -1; }
        if (nameA > nameB) { return 1; }

        return 0;
      })
    },
    getTitles(state) {
      let outTitles = {}
      state.titles.forEach(title => {
        outTitles[title.value] = title.name
      });
      return outTitles
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const response = await axios.get(`http://${window.location.hostname}:3000/v1/users`, {});
        context.commit('setUsers', response.data)
      } catch (e) {
        console.log(e)
      } finally {
      }
    },
  },
  namespaced: true
}