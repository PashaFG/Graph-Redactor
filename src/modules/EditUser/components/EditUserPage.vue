<template>
  <div class="main">
    <div class="edit__row">
      <span class="label">Фамилия</span>
      <main-input type="text" :model-value="this.getUser.name" @update:model-value="this.setName" placeholder="Иванов" />
    </div>
    <div class="edit__row">
      <span class="label">Должность</span>
      <main-select :model-value="this.getUser.title" @update:model-value="this.setTitle" :options="this.titles" />
    </div>
    <div class="edit__row">
      <span class="label">Цвет таблички</span>
      <main-input type="text" :model-value="this.getUser.color" @update:model-value="this.setColor"
        placeholder="#46bdc6" />
    </div>
    <div class="divider"></div>
    <div class="edit__row">
      <span class="label">Итоговая табличка</span>
      <user-colorful :user="this.getUser"></user-colorful>
    </div>
    <div class="edit__row">
      <edit-button class="row__element" @click="updateUser">Сохранить</edit-button>
      <edit-button class="row__element" @click="this.$emit('goTo')">Отменить</edit-button>
      <div class="spacer__box"></div>
      <alert-button class="row__element" @click="deleteUser">Удалить</alert-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import axios from 'axios';

export default {
  computed: {
    ...mapState({
      titles: state => state.users.titles,
      id: state => state.userId
    }),
    ...mapGetters({
      getUser: 'editUser/getUser'
    })
  },
  methods: {
    ...mapMutations({
      setName: 'editUser/setName',
      setTitle: 'editUser/setTitle',
      setColor: 'editUser/setColor'
    }),
    ...mapActions({
      fetchUser: 'editUser/fetchUser',
    }),
    async updateUser() {
      try {
        await axios.put(`http://${window.location.hostname}:3000/v1/users/${this.id}`, this.getUser);
      } catch (e) {
        console.log(e)
      } finally {
        this.$emit('goTo')
      }
    },
    async deleteUser() {
      try {
        await axios.delete(`http://${window.location.hostname}:3000/v1/users/${this.id}`);
      } catch (e) {
        console.log(e)
      } finally {
        this.$emit('goTo')
      }
    }
  },
  async mounted() {
    await this.fetchUser(this.id)
    console.log(this.getUser.name)
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

.edit__row {
  display: flex;
  justify-content: flex-start;
  min-height: 42px;
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
}

.spacer__box {
  flex-grow: 1;
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