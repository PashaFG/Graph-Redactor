<template>
  <table class="table" id="invoice">
    <thead class="sticky__head">
      <tr>
        <td class="sticky__left">
          <h4>Дата</h4>
        </td>

        <td class="scroll__snap" v-for="branch in this.allBranches" :colspan="branch.userLimit + 1">
          <h4>{{ branch.name }}</h4>
        </td>
      </tr>
    </thead>

    <tbody>
      <tr v-for="row in tableData" :key="row._id">
        <td class="sticky__left">
          <span>{{ row.name }}</span>
        </td>
        <td class="hidden_cells"></td>

        <td @drop="onDropTable($event, row, 'gd', user.id)" @dragenter.prevent @dragover.prevent v-for="user in row.gd"
          :key="user.id">
          <user-colorful class="user__dnd" :user="getUserByID(user.userID)[0]" />
        </td>
        <td class="hidden_cells"></td>

        <td @drop="onDropTable($event, row, 'korney', user.id)" @dragenter.prevent @dragover.prevent
          v-for="user in row.korney" :key="user.id">
          <user-colorful class="user__dnd" :user="getUserByID(user.userID)[0]" />
        </td>
        <td class="hidden_cells"></td>

        <td @drop="onDropTable($event, row, 'sevenSeven', user.id)" @dragenter.prevent @dragover.prevent
          v-for="user in row.sevenSeven" :key="user.id">
          <user-colorful class="user__dnd" :user="getUserByID(user.userID)[0]" />
        </td>
        <td class="hidden_cells"></td>

        <td @drop="onDropTable($event, row, 'park', user.id)" @dragenter.prevent @dragover.prevent
          v-for="user in row.park" :key="user.id">
          <user-colorful class="user__dnd" :user="getUserByID(user.userID)[0]" />
        </td>
        <td class="hidden_cells"></td>

        <td @drop="onDropTable($event, row, 'sevenB', user.id)" @dragenter.prevent @dragover.prevent
          v-for="user in row.sevenB" :key="user.id">
          <user-colorful class="user__dnd" :user="getUserByID(user.userID)[0]" />
        </td>
        <td class="hidden_cells"></td>

        <td @drop="onDropTable($event, row, 'quay', user.id)" @dragenter.prevent @dragover.prevent
          v-for="user in row.quay" :key="user.id">
          <user-colorful class="user__dnd" :user="getUserByID(user.userID)[0]" />
        </td>
        <td class="hidden_cells"></td>

        <td @drop="onDropTable($event, row, 'quay2', user.id)" @dragenter.prevent @dragover.prevent
          v-for="user in row.quay2" :key="user.id">
          <user-colorful class="user__dnd" :user="getUserByID(user.userID)[0]" />
        </td>
        <td class="hidden_cells"></td>

      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from 'axios';
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: "data-table",
  props: {
    tableData: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      allUsers: 'users/fullUsers',
      allBranches: 'branches/allBranches',
    })
  },
  methods: {
    ...mapMutations({
      updateRow: 'table/updateRow',
    }),
    ...mapActions({
      fetchBranches: 'branches/fetchBranches',
      fetchUsers: 'users/fetchUsers',
    }),
    async onDropTable(event, row, branch, id) {
      let userID = Number(event.dataTransfer.getData('userID'))
      let newRow = JSON.parse(JSON.stringify(row))
      newRow[branch][id - 1].userID = userID
      this.updateRow(newRow)
      try {
        await axios.put(`http://${window.location.hostname}:3000/v1/rows/`, {
          row: newRow
        });
      } catch (e) {
        console.log(e)
      } finally { console.log('updatedRow') }
    },
    getUserByID(id) {
      return this.allUsers.filter((user) => user._id === id)
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