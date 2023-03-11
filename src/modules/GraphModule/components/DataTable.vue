<template>
  <div class="root__table">
    <div class="column" v-for="branch in this.getHeader" key="branch._id">
      <div class="cells sticky__head" :style="{
        'width': `${110 * branch.userLimit - 2 || 110}px`, 'background-color': branch.exportColor || '#DFD1C4'
      }">
        <p><strong>{{ branch.name }}</strong></p>
      </div>

      <div v-for="row in   this.tableData">
        <div v-if="!branch.login" class="cells">
          <p>{{ row.name }}</p>
        </div>
        <div v-else class="users">
          <div v-for="user in row[branch.login]" class="cells__user">
            <user-colorful :user="getUserByID(user.userID)"></user-colorful>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <table class="table" id="invoice">
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
  </table> -->
</template>
<script>
import axios from 'axios';
import { mapGetters, mapActions, mapMutations } from 'vuex'


// export default {
//   name: "data-table",
//   props: {
//     tableData: {
//       type: Array,
//       required: true
//     }
//   },
//   computed: {
//     ...mapGetters({
//       allUsers: 'users/fullUsers',
//       allBranches: 'branches/allBranches',
//     })
//   },
//   methods: {
//     ...mapMutations({
//       updateRow: 'table/updateRow',
//     }),
//     ...mapActions({
//       fetchBranches: 'branches/fetchBranches',
//       fetchUsers: 'users/fetchUsers',
//     }),
//     async onDropTable(event, row, branch, id) {
//       let userID = Number(event.dataTransfer.getData('userID'))
//       let newRow = JSON.parse(JSON.stringify(row))
//       newRow[branch][id - 1].userID = userID
//       this.updateRow(newRow)
//       try {
//         await axios.put(`http://${window.location.hostname}:3000/v1/rows/`, {
//           row: newRow
//         });
//       } catch (e) {
//         console.log(e)
//       } finally { console.log('updatedRow') }
//     },
//     getUserByID(id) {
//       return this.allUsers.filter((user) => user._id === id)
//     },

//   }
// }

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
    }),
    ...mapActions({
      fetchRows: 'table/fetchRows',
      fetchUsers: 'users/fetchUsers',
      fetchBranches: 'branches/fetchBranches',
    }),
    getUserByID(id) {
      console.log(id);
      return this.fullUsers.find(element => element._id === id)
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