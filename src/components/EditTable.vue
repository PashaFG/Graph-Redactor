<template lang="">
  <div class="main">
    <!--  -->
      <div class="userlist" v-show="users.length > 1">
        <user-list :users="greatUsers" :titleUser="'great'">Старшие</user-list>
        <div class="divider"></div>
        <user-list :users="lowerUsers" :titleUser="'lower'">Сотрудники</user-list>
      </div>
      <div class="userlist" v-show="users.length <= 1">
        <h4>Не создано ни одного сотрудника</h4>
      </div>
    <!--  -->
    <div class="main__table">
      <data-table :users="users" :tableData="tableData" :branchSettings="branchSettings"/>
    </div>
    <!--  -->
  </div>
</template>
<script>
import UserList from './UserList.vue';
import DataTable from './DataTable.vue';
export default {
  components: {
    UserList,
    DataTable
  },
  data() {
    return {
      users: [
        { id: 0, name: "___________", title: "blank", color: "" },
        { id: 26, name: "Бельчева", title: "great", color: "#46bdc6" },
        { id: 1, name: "Сухов", title: "great", color: "#ffe599" },
        { id: 2, name: "Веселова", title: "great", color: "#b6d7a8" },
        { id: 3, name: "Степанов", title: "great", color: "#a2c4c9" },
        { id: 4, name: "Галахов", title: "great", color: "#b4a7d6" },
        { id: 5, name: "Гурина", title: "great", color: "#ffd966" },
        { id: 9, name: "Жариков", title: "great", color: "#b4a7d6" },
        { id: 13, name: "Шилкина", title: "great", color: "#b4a7d6" },
        { id: 14, name: "Северьянов", title: "great", color: "#f4cccc" },
        { id: 15, name: "Попова", title: "great", color: "#f4cccc" },
        { id: 16, name: "Черников", title: "great", color: "#f6b26b" },
        { id: 17, name: "Власов", title: "great", color: "#a2c4c9" },
        { id: 21, name: "Севрюков", title: "great", color: "#a6f1ff" },
        { id: 22, name: "Король", title: "great", color: "#f6b26b" },
        { id: 24, name: "Максин", title: "great", color: "#9fc5e8" },
        { id: 6, name: "Добровенко", title: "lower", color: "#9fc5e8" },
        { id: 7, name: "Николаева", title: "lower", color: "#f9cb9c" },
        { id: 8, name: "Джей Джей", title: "lower", color: "#a2c4c9" },
        { id: 10, name: "Выпна", title: "lower", color: "#45818e" },
        { id: 11, name: "Новиков", title: "lower", color: "#cfe2f3" },
        { id: 12, name: "Подкопаев", title: "lower", color: "#b6d7a8" },
        { id: 18, name: "Черняев", title: "lower", color: "#b4a7d6" },
        { id: 19, name: "Маликов", title: "lower", color: "#ffe599" },
        { id: 20, name: "Галахова", title: "lower", color: "#93c47d" },
        { id: 23, name: "Алехина", title: "lower", color: "#8e7cc3" },
        { id: 25, name: "Арсанукаева", title: "lower", color: "#9fc5e8" },
      ],
      branchSettings: {
        gd: { userLimit: 3, name: "ГД" },
        korney: { userLimit: 3, name: "Корней" },
        sevenSeven: { userLimit: 1, name: "77" },
        park: { userLimit: 2, name: "Парк" },
        sevenB: { userLimit: 2, name: "7Б" },
        quay: { userLimit: 2, name: "Набережная" },
        quay2: { userLimit: 1, name: "Набережная 2" },
      },
      tableData: [
        { id: 0, name: "09.01 пн" },
        { id: 1, name: "10.01 пн" },
        { id: 2, name: "11.01 пн" },
        { id: 3, name: "12.01 пн" },
        { id: 4, name: "13.01 пн" },
        { id: 5, name: "14.01 пн" },
        { id: 6, name: "15.01 пн" },
        { id: 7, name: "16.01 пн" },
        { id: 8, name: "17.01 пн" },
        { id: 9, name: "18.01 пн" },
        { id: 10, name: "19.01 пн" },
        { id: 11, name: "20.01 пн" },
        { id: 12, name: "21.01 пн" },
        { id: 13, name: "22.01 пн" },
        { id: 14, name: "23.01 пн" },
        { id: 15, name: "24.01 пн" },
        { id: 16, name: "25.01 пн" },
        { id: 17, name: "26.01 пн" },
        { id: 18, name: "27.01 пн" },
        { id: 19, name: "28.01 пн" },
        { id: 20, name: "29.01 пн" },
        { id: 21, name: "30.01 пн" },
      ]
    }
  },
  methods: {
    drag(event, user) {
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('userID', user.id)
    },
    onDrop(event, title) {
      let userID = Number(event.dataTransfer.getData('userID'))
      let user = this.users.find((user) => user.id === userID)
      user.title = title
    },
    branchInRow(row) {
      for (let branch in this.branchSettings) {
        if (!row[branch]) { row[branch] = [] }
        while (row[branch].length < this.branchSettings[branch].userLimit) {
          row[branch].push({ userID: 0, id: row[branch].length + 1 })
        }
      }
    }
  },
  computed: {
    greatUsers() {
      return this.users.filter((user) => user.title === "great").sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) { return -1; }
        if (nameA > nameB) { return 1; }

        return 0;
      })
    },
    lowerUsers() {
      return this.users.filter((user) => user.title === "lower").sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) { return -1; }
        if (nameA > nameB) { return 1; }

        return 0;
      })
    }
  },
  mounted() {
    this.tableData.forEach((row) => {
      this.branchInRow(row)
    })
  }
}
</script>
<style scoped>
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  top: 60px;
  height: calc(100vh - 75px);
  width: auto;
  margin: 15px;
}


.userlist {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  padding: 5px;
  background-color: #BBBFD4;
  border: 2px solid #594845;
  border-radius: 10px;
}

.main-button {
  margin: 10px;
}

.divider {
  width: 95%;
  border-bottom: 1px solid #594845;
}

.main__table {
  height: auto;
  margin: 15px 0;
  background-color: #DFD1C4;
  border: 2px solid #594845;
  border-radius: 10px;
  overflow-x: scroll;
  overflow-y: scroll;
  scroll-snap-type: x proximity;
  scrollbar-gutter: stable;
  scroll-behavior: smooth;
}
</style>