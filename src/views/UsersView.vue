<template>
  <div class="home">
    <div class="title">
      <h2 class=" title__element">
        Сотрудники
      </h2>
      <div class="spacer__box"></div>
      <main-button v-if="!(this.currentTab !== 'MainUsers')" class="title__element"
        @click="this.currentTab = 'CreateUserPage'">Создать сотрудника</main-button>
      <main-button v-else class="title__element" @click="this.currentTab = 'MainUsers'">
        Вернуться к списку сотрудников
      </main-button>
    </div>
    <component :is="currentTab" @go-to="goTo" @go-in="goIn" @go-edit="goEdit"></component>
  </div>
</template>

<script>
import MainUsers from '@/modules/UserList/components/MainUsers.vue';
import CreateUserPage from '@/modules/CreateUser/components/CreateUserPage.vue';
import EditUserPage from '@/modules/EditUser/components/EditUserPage.vue';

export default {
  components: {
    MainUsers,
    CreateUserPage,
    EditUserPage
  },
  data() {
    return {
      currentTab: "MainUsers"
    }
  },
  methods: {
    goTo() {
      this.currentTab = "MainUsers"
    },
    goIn() {
      this.currentTab = "CreateUserPage"
    },
    goEdit() {
      this.currentTab = "EditUserPage"
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}

.home {
  align-items: center;
  height: 64px;
}

.title {
  top: 0;
  left: 100;
  position: fixed;
  width: calc(100vw - 110px);
  display: flex;
  justify-content: space-between;
  background-color: #DFD1C4;
  padding: 16px 0 16px 10px;
}

.title__element {
  height: 32px;
  margin-right: 15px;
}


.spacer__box {
  flex-grow: 1;
}
</style>
