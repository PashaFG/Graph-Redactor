<template>
  <div class="main">
    <div class="create__row">
      <span class="label">Название</span>
      <main-input :model-value="this.branch.name"
        @update:model-value="this.setName"
        type="text"
        placeholder="Прибыльная" />
    </div>
    <div class="create__row">
      <span class="label">ID точки</span>
      <main-input :model-value="this.branch.login"
        @update:model-value="this.setLogin"
        type="text"
        placeholder="pribylnaja" />
    </div>
    <div class="create__row">
      <span class="label"> Сотрудников на смене</span>
      <div class="">
        <button @click="this.minusLimit"
          class="userlimit__btn"><minus-icon /></button>
        {{ this.branch.userLimit }}
        <button @click="this.plusLimit"
          class="userlimit__btn"><plus-icon /></button>
      </div>
    </div>
    <div class="create__row">
      <span class="label">Цвет для импорта</span>
      <main-input :model-value="this.branch.exportColor"
        @update:model-value="this.setExportColor"
        type="text"
        placeholder="#46bdc6" />
    </div>
    <div class="divider"></div>
    <div class="create__row">
      <graph-button class="row__element"
        v-class="'outlined'"
        @click="this.setCurrentTab('MainBranches')">
        <template #label>
          Отменить
        </template>
      </graph-button>
      <graph-button class="row__element"
        v-class="'filled'"
        v-disabled="!this.getIsValidBranch"
        @click="this.creteBranch">
        <template #label>
          Создать
        </template>
      </graph-button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import axios from 'axios';

export default {
  data() {
    return {
      isValidBranch: false
    }
  },
  computed: {
    ...mapGetters({
      branch: 'branches/create/getBranch'
    }),
    getIsValidBranch() {
      return this.isValidBranch
    }
  },
  methods: {
    ...mapMutations({
      setCurrentTab: 'branches/setCurrentTab',
      setName: 'branches/create/setName',
      setLogin: 'branches/create/setLogin',
      setUserLimit: 'branches/create/setUserLimit',
      setExportColor: 'branches/create/setExportColor'
    }),
    async creteBranch() {
      try {
        await axios.post(`http://${window.location.hostname}:3000/v1/branches`, this.branch);
      } catch (e) {
        console.log(e)
      } finally {
        this.setCurrentTab('MainBranches')
      }
    },
    plusLimit() {
      this.setUserLimit(this.branch.userLimit + 1)
    },
    minusLimit() {
      this.setUserLimit(this.branch.userLimit - 1)
    },
  },
  watch: {
    branch(newValue) {
      if (newValue.name && newValue.login && newValue.exportColor && newValue.userLimit >= 0) {
        this.isValidBranch = true
      } else {
        this.isValidBranch = false
      }
    }
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

.create__row {
  display: flex;
  justify-content: flex-start;
  min-height: 42px;
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
}

.row__element {
  margin-right: 50px;
}

.divider {
  border-bottom: 1px solid #594845;
  margin: 15px 0;
}

.label {
  text-align: left;
  width: 200px;
}

.userlimit__btn {
  color: #594845;
  background: none;
  border: none;
  margin: 0 20px;
  cursor: pointer;
}
</style>