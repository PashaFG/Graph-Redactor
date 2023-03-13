<template>
  <div class="root__table">
    <div class="column" v-for="branch in this.getHeader" key="branch._id">
      <div class="cells sticky__head" :style="{
        'width': `${110 * branch.userLimit - 2 || 110}px`, 'background-color': branch.exportColor || '#DFD1C4'
      }">
        <p><strong>{{ branch.name }}</strong></p>
      </div>

      <div v-for="row in this.tableData">
        <div v-if="!branch.login" class="cells">
          <p>{{ row.name }}</p>
        </div>
        <div v-else class="users">
          <div v-for="user in row[branch.login]" class="cells__user"
            @drop="onDropTable($event, row, branch.login, user.id)" @dragenter.prevent @dragover.prevent>
            <user-colorful :user="getUserByID(user.userID)"></user-colorful>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      fullUsers: 'users/fullUsers',
      allBranches: 'branches/allBranches',
    }),
    getHeader() {
      let header = [""]
      this.allBranches.forEach((element) => { header.push(element) })
      return header
    }
  },
  methods: {
    ...mapMutations({
      setStartDate: 'table/setStartDate',
      setEndDate: 'table/setEndDate',
      updateRow: 'table/updateRow',
    }),
    ...mapActions({
      fetchRows: 'table/fetchRows',
      fetchUsers: 'users/fetchUsers',
      fetchBranches: 'branches/fetchBranches',
    }),
    getUserByID(id) {
      return this.fullUsers.find(element => element._id === id)
    },
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
      }
    },
  }
}

</script>
<style scoped>
[v-cloak] {
  display: none;
}

.root__table {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: mandatory;
  scroll-snap-align: center;
}

.column {
  display: flex;
  flex-direction: column;
}

.column:first-child {
  position: sticky;
  left: 0;

}

.users {
  display: flex;
}

.cells {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-size: 14px;
  border: 1px solid black;
  background-color: #DFD1C4;
}


.cells__user {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  min-height: 30px;
  border: 1px solid black;
}

.cells__user div {
  text-align: end;
}

.sticky__head {
  position: sticky;
  top: 0;
  min-height: 30px;
}
</style>