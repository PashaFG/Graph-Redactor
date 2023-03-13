<template>
  <div class="main">
    <div class="create__row">
      <span class="label">Фамилия</span>
      <main-input type="text"
        :model-value="this.getUser.name"
        @update:model-value="this.setName"
        placeholder="Иванов" />
    </div>
    <div class="create__row">
      <span class="label">Должность</span>
      <main-select :model-value="this.title"
        @update:model-value="this.setTitle"
        :options="this.titles" />
    </div>
    <div class="create__row">
      <span class="label">Цвет таблички</span>
      <main-input type="text"
        :model-value="this.getUser.color"
        @update:model-value="this.setColor"
        placeholder="#46bdc6" />
    </div>
    <div class="divider"></div>
    <div class="create__row">
      <span class="label">Итоговая табличка</span>
      <user-colorful :user="this.getUser"></user-colorful>
    </div>
    <div class="create__row">
      <graph-button class="row__element"
        v-class="'outlined'"
        @click="this.clearUser"><template #label>Отчистить</template></graph-button>
      <graph-button class="row__element"
        v-class="'filled'"
        @click="this.createUser"><template #label>Создать</template></graph-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import axios from 'axios';

export default {
  data() {
    return {
      title: ""
    }
  },
  computed: {
    ...mapState({
      titles: state => state.users.titles
    }),
    ...mapGetters({
      getUser: 'createUser/getUser'
    })
  },
  methods: {
    ...mapMutations({
      setName: 'createUser/setName',
      setTitle: 'createUser/setTitle',
      setColor: 'createUser/setColor'
    }),
    ...mapActions({
      clearUser: 'createUser/clearUser',
    }),
    async createUser() {
      try {
        await axios.post(`http://${window.location.hostname}:3000/v1/users`, this.getUser);
      } catch (e) {
        console.log(e)
      } finally {
        this.$emit('goTo')
        console.log("Go back");
      }
    },
  },
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
</style>