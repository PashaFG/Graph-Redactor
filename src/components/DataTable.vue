<template>
  <table class="table" id="invoice">
    <thead class="sticky__head">
      <tr>
        <td class="sticky__left">
          <h4>Дата</h4>
        </td>

        <td class="scroll__snap" v-for="branch in branchSettings" :colspan="branch.userLimit + 1">
          <h4>{{ branch.name }}</h4>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in tableData" :key="row.id">
        <td class="sticky__left">
          <span>{{ row.name }}</span>
        </td>
        <td class="hidden_cells"></td>
        <td @drop="onDropTable($event, row.id, 'gd', user.id)" @dragenter.prevent @dragover.prevent v-for="user in row.gd"
          :key="user.id">
          <user-colorful class="user__dnd" :user="getUserByID(user.userID)[0]" />
        </td>
        <td class="hidden_cells"></td>
        <td @drop="onDropTable($event, row.id, 'korney', user.id)" @dragenter.prevent @dragover.prevent
          v-for="user in row.korney" :key="user.id">
          <user-colorful class="user__dnd" :user="getUserByID(user.userID)[0]" />
        </td>
        <td class="hidden_cells"></td>
        <td @drop="onDropTable($event, row.id, 'sevenSeven', user.id)" @dragenter.prevent @dragover.prevent
          v-for="user in row.sevenSeven" :key="user.id">
          <user-colorful class="user__dnd" :user="getUserByID(user.userID)[0]" />
        </td>
        <td class="hidden_cells"></td>
        <td @drop="onDropTable($event, row.id, 'park', user.id)" @dragenter.prevent @dragover.prevent
          v-for="user in row.park" :key="user.id">
          <user-colorful class="user__dnd" :user="getUserByID(user.userID)[0]" />
        </td>
        <td class="hidden_cells"></td>
        <td @drop="onDropTable($event, row.id, 'sevenB', user.id)" @dragenter.prevent @dragover.prevent
          v-for="user in row.sevenB" :key="user.id">
          <user-colorful class="user__dnd" :user="getUserByID(user.userID)[0]" />
        </td>
        <td class="hidden_cells"></td>
        <td @drop="onDropTable($event, row.id, 'quay', user.id)" @dragenter.prevent @dragover.prevent
          v-for="user in row.quay" :key="user.id">
          <user-colorful class="user__dnd" :user="getUserByID(user.userID)[0]" />
        </td>
        <td class="hidden_cells"></td>
        <td @drop="onDropTable($event, row.id, 'quay2', user.id)" @dragenter.prevent @dragover.prevent
          v-for="user in row.quay2" :key="user.id">
          <user-colorful class="user__dnd" :user="getUserByID(user.userID)[0]" />
        </td>
        <td class="hidden_cells"></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "data-table",
  props: {
    users: {
      type: Array,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    },
    branchSettings: {
      type: Object,
      required: true
    }
  },
  methods: {
    onDropTable(event, row, branch, id) {
      let userID = Number(event.dataTransfer.getData('userID'))
      let user = this.users.find((user) => user.id === userID)
      let tdID = this.tableData[row][branch].filter((td) => td.id === id)
      this.tableData[row][branch].forEach((td) => {
        if (td.id === tdID[0].id) {
          td.userID = user.id
        }
      })
    },
    getUserByID(id) {
      return this.users.filter((user) => user.id === id)
    },
  }
}
</script>
<style scoped>
.root {
  display: flex;

}

.left__table {
  width: 130px;
}

.user__dnd {
  padding: 5px;
  margin: 5px 0;
}

.table {
  border-collapse: collapse;
  height: 100%;
}

td {
  border: 1px solid #BBBFD4;
  min-width: 130px;
  height: 39px;
}

.sticky__left {
  position: sticky;
  left: 0;
  background-color: #BBBFD4;
}

.sticky__head {
  position: sticky;
  top: 0;
  background-color: #BBBFD4;

}

.scroll__snap {
  scroll-snap-align: center;
}

.hidden_cells {
  min-width: 5px;
  background-color: #BBBFD4;
}
</style>