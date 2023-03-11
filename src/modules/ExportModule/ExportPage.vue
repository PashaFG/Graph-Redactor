<template>
  <div>
    <div v-cloak class="root__table" id="invoice">
      <div class="column" v-for="branch in this.getHeader" key="branch._id">
        <div class="cells"
          :style="{ 'width': `${110 * branch.userLimit - 2 || 110}px`, 'background-color': branch.exportColor }">
          <p><strong>{{ branch.name }}</strong></p>
        </div>

        <div v-for="row in this.getRows">
          <div v-if="!branch.login" class="cells">
            <p>{{ row.name }}</p>
          </div>
          <div v-else class="users">
            <div v-for="user in row[branch.login]" class="cells__user"
              :style="{ 'background-color': this.getUserByID(user.userID).color }">
              <p>{{ this.getUserByID(user.userID).name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import html2pdf from "html2pdf.js";

export default {
  props: {
    start: {
      type: String
    },
    end: {
      type: String
    }
  },
  computed: {
    ...mapGetters({
      getRows: 'table/getRows',
      fullUsers: 'users/fullUsers',
      allBranches: 'branches/allBranches',
    }),
    getHeader() {
      let branchName = []
      this.allBranches.forEach((element) => { branchName.push(element) })
      let header = [""]
      let count = 0
      branchName.forEach((element) => {
        header.push(element)
        if (count !== 1) {
          count++
        } else {
          count = 0
          header.push("")
        }
      })
      header.push("")
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
      return this.fullUsers.find(element => element._id === id)
    },

  },
  async beforeMount() {
    this.setStartDate(this.start)
    this.setEndDate(this.end)
    this.fetchRows()
    Promise.all([this.fetchRows(), this.fetchUsers(), this.fetchBranches()])
  },
  mounted() {
    this.$nextTick(async function () {
      function close() {
        window.close()
      }
      async function generateReport() {
        const invoice = document.querySelector('#invoice');
        console.log(invoice);
        var opt = {
          margin: 1,
          filename: "file.pdf",
          pagebreak: { mode: ['css'] },
          html2canvas: {
            scale: 2,
            width: invoice.offsetWidth,
            height: invoice.offsetHeight,
          },
          jsPDF: { unit: "px", orientation: 'landscape', format: [invoice.offsetWidth + 2, invoice.offsetHeight + 2] }
        };
        await html2pdf().from(invoice).set(opt).save();
        setTimeout(close, 1000)
      }
      Promise.all([setTimeout(generateReport, 1000)])
    })
  }
}
</script>
<style scoped>
[v-cloak] {
  display: none;
}

.root__table {
  display: flex;
  width: fit-content;
  overflow: scroll;
  /* IE и Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;

}

/*Chrome, Safari и Opera */
.root__table::-webkit-scrollbar {
  display: none;
}

.column {
  display: flex;
  flex-direction: column;
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
}


.cells__user {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 30px;
  border: 1px solid black;
}

.cells__user div {
  text-align: end;
}
</style>
