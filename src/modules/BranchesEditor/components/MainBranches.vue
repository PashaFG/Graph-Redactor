<template>
  <div class="main__table">
    <div class="header">
      <graph-button class="header_element"
        v-class="'filled'"
        @click="this.setCurrentTab('CreateBranches')">
        <template #label>
          Добавить заведение
        </template>
      </graph-button>
      <div class="header_element"><span>{{ this.branchesCount }}</span></div>
      <div class="spacer__box"></div>
      <userlist-search class="header_element" />
    </div>
    <div class="row low_header">
      <div class="fake__cells__color" />
      <div class="cells__name"><strong>Имя</strong></div>
      <div class="cells__userlimit"><strong>Сотрудников в смене</strong></div>
      <div class="spacer__box"></div>
    </div>
    <div class="list">
      <div class="row"
        v-for="branch in this.allBranches"
        :key="branch._id">
        <div class="cells__color">
          <div class="color__circle"
            :style="{ 'background-color': branch.exportColor, 'border-color': branch.exportColor }"></div>
        </div>
        <div class="cells__name">
          <span>
            {{ branch.name }}
          </span>
        </div>
        <div class="cells__userlimit">
          <button class="userlimit__btn"
            @click="minusUserLimit(branch)"><minus-icon /></button>
          {{ branch.userLimit }}
          <button class="userlimit__btn"
            @click="plusUserLimit(branch)"><plus-icon /></button>
        </div>
        <div class="spacer__box"></div>
        <div class="cells__delete">
          <button class="delete__btn"
            @click="this.deleteBranch(branch._id)"><delete-icon /></button>
        </div>
      </div>
    </div>
    <div class="footer">
      <graph-button class="footer_element"
        v-class="'filled'"
        @click="this.save">
        <template #label>
          Сохранить изменения
        </template>
      </graph-button>
      <graph-button class="footer_element"
        v-class="'outlined'"
        @click="this.cancel">
        <template #label>
          Отменить изменения
        </template>
      </graph-button>
      <div class="spacer__box"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
      branchesCount: ""
    }
  },
  methods: {
    ...mapMutations({
      setCurrentTab: 'branches/setCurrentTab',
      clearBranchToDelete: 'branches/clearBranchToDelete',
      clearBranchToUpdate: 'branches/clearBranchToUpdate',
    }),
    ...mapActions({
      fetchBranches: 'branches/fetchBranches',
      changeBranchId: 'branches/changeBranchId',
      deleteBranch: 'branches/deleteBranch',
      updateBranch: 'branches/updateBranch',
    }),
    setBranchesCount() {
      if (this.allBranches.length === 0) {
        this.branchesCount = `Ни одного сотрудника не было добавлено`
      } else {
        switch ((this.allBranches.length) % 10) {
          case 1:
            this.branchesCount = `Добавлено ${this.allBranches.length} заведение`
            break;
          case 2:
          case 3:
          case 4:
            this.branchesCount = `Добавлено ${this.allBranches.length} заведения`
            break;
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 0:
            this.branchesCount = `Добавлено ${this.allBranches.length} заведений`
            break;
        }
      }
    },
    cancel() {
      this.fetchBranches()
      this.clearBranchToDelete()
      this.clearBranchToUpdate()
    },
    async save() {
      const promises = []
      this.getBranchToDelete.forEach((branchId) => {
        let res = this.fetchDeleteBranch(branchId)
        promises.push(res)
      })
      this.getBranchToUpdate.forEach((branchId) => {
        let branch = this.allBranches.find(element => element._id === branchId)
        this.fetchEditBranch(branchId, branch)
      })
      this.clearBranchToDelete()
      this.clearBranchToUpdate()
      Promise.all(promises)
      setTimeout(this.fetchBranches, 500)
    },
    fetchDeleteBranch(id) {
      try {
        let { data } = axios.delete(`http://${window.location.hostname}:3000/v1/branches/${id}`);
        return data
      } catch (e) {
        console.log(e)
      }
    },
    async fetchEditBranch(id, branch) {
      try {
        await axios.put(`http://${window.location.hostname}:3000/v1/branches/${id}`, {
          name: branch.name,
          login: branch.login,
          exportColor: branch.exportColor,
          userLimit: branch.userLimit
        });
      } catch (e) {
        console.log(e)
      }
    },
    plusUserLimit(branch) {
      branch.userLimit++
      this.updateBranch(branch)
    },
    minusUserLimit(branch) {
      if (branch.userLimit > 0) {
        branch.userLimit += -1
        this.updateBranch(branch)
      }
    }
  },
  computed: {
    ...mapGetters({
      allBranches: 'branches/allBranches',
      getBranchToDelete: 'branches/getBranchToDelete',
      getBranchToUpdate: 'branches/getBranchToUpdate',
      getBranchById: 'branches/getBranchById'
    })
  },
  async mounted() {
    await this.fetchBranches();
    await this.setBranchesCount()
  }
  //TODO написать наблюдателя за измением кол-ва сотрудников
}
</script>
<style scoped>
.main__table {
  position: relative;
  display: flex;
  flex-direction: column;
  top: 60px;
  height: calc(100vh - 110px);
  width: auto;
  margin: 15px;
  background-color: #DFD1C4;
  border: 2px solid #594845;
  border-radius: 10px;
  padding: 10px;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  padding: 10px;
  border-bottom: 1px solid #9295A6;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;

  padding-bottom: 15px;
  border-bottom: 1px solid #594845;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  padding-top: 15px;
  border-top: 1px solid #594845;
}

.footer_element {
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 10px;
}

.list {
  height: 100%;
  overflow-y: auto;
  /* IE и Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
}

/*Chrome, Safari и Opera */
.list::-webkit-scrollbar {
  display: none;
}

.spacer__box {
  flex-grow: 1;
}

.header_element {
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 10px;
}

.fake__cells__color {
  min-width: 20px;
  margin-right: 10px;
  padding: 0 10px;
}

.cells__color {
  min-width: 20px;
  margin-right: 10px;
  padding: 0 10px;

}

.color__circle {
  width: 18px;
  height: 18px;
  border: 1px solid #fff;
  border-radius: 9px;
  background-color: #fff;
}

.cells__name {
  margin-right: 10px;
  min-width: 300px;
  text-align: left;
}

.cells__userlimit {
  display: flex;
  align-items: center;
  margin-right: 10px;
  min-width: 300px;
  text-align: left;
}

.userlimit__btn {
  color: #594845;
  background: none;
  border: none;
  margin: 0 20px;
  cursor: pointer;
}

.delete__btn {
  color: #fd1c2e;
  background: none;
  border: none;
  margin: 0 20px;
  cursor: pointer;
}

.delete__btn:hover {
  color: #b00e1a;
}

.userlimit__btn:hover {
  box-shadow: 0px 4px 12px 0px rgba(89, 72, 69, 0.5);
  background-color: rgba(89, 72, 69, 0.25);
  border-radius: 10px;
}
</style>