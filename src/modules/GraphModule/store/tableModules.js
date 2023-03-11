import axios from "axios";

export const tableModule = {
  state: () => ({
    datePeriod: {
      start: 0,
      end: 0
    },
    datepickerVisible: false,
    rows: []

  }),
  getters: {
    getDatePeriod(state) {
      return state.datePeriod
    },
    getDatepickerVisible(state) {
      return state.datepickerVisible
    },
    getRows(state) {
      return state.rows
    }
  },
  mutations: {
    setStartDate(state, date) {
      state.datePeriod.start = date;
    },
    setEndDate(state, date) {
      state.datePeriod.end = date;
    },
    setDatepickerVisible(state, status) {
      state.datepickerVisible = status
    },
    setRows(state, rows) {
      state.rows = rows
    },
    updateRow(state, newRow) {
      for (let row in state.rows) {
        if (state.rows[row]._id === newRow._id) {
          state.rows[row] = newRow
        }
      }
    }
  },
  actions: {
    async fetchRows(context) {
      if (context.state.datePeriod.start !== 0 && context.state.datePeriod.end !== 0) {
        try {
          const response = await axios.get(`http://${window.location.hostname}:3000/v1/rows?start=${context.state.datePeriod.start}&end=${context.state.datePeriod.end}`, {});
          console.log(`http://${window.location.hostname}:3000/v1/rows?start=${context.state.datePeriod.start}&end=${context.state.datePeriod.end}`)
          context.commit('setRows', response.data)
        } catch (e) {
          console.log(e)
        } finally {
        }
      }
    },
    async initializationRows(context) {
      if (context.state.datePeriod.start !== 0 && context.state.datePeriod.end !== 0) {
        try {
          await axios.post(`http://${window.location.hostname}:3000/v1/rows/setNew`, {
            start: context.state.datePeriod.start,
            end: context.state.datePeriod.end
          });
        } catch (e) {
          console.log(e)
        } finally {
        }
      }
    }
  },
  namespaced: true
}