<template>
  <div class="header">
    <graph-button class="header_element"
      v-class="'filled'"
      @click="this.$emit('goIn')"><template #label>Добавить сотрудника</template></graph-button>
    <div class="header_element"><span>{{ this.usersCount }}</span></div>
    <div class="spacer__box"></div>
    <userlist-search class="header_element" />
  </div>
  <div class="row low_header">
    <div class="fake__cells__color" />
    <div class="cells__name"><strong>Имя</strong></div>
    <div class="cells__title"><strong>Должность</strong></div>
    <div class="spacer__box"></div>
  </div>
  <div class="list">
    <div class="row"
      v-for="user in this.allUsers"
      @click="goEdit(user._id)">
      <div class="cells__color">
        <div class="color__circle"
          :style="{ 'background-color': user.color, 'border-color': user.color }"></div>
      </div>
      <div class="cells__name">
        <span>
          {{ user.name }}
        </span>
      </div>
      <div class="cells__title">
        {{ this.getTitles[user.title] }}
      </div>
      <div class="spacer__box"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      usersCount: ""
    }
  },
  methods: {
    ...mapActions({
      fetchUsers: 'users/fetchUsers',
      changeUserId: 'changeUserId'
    }),
    setUsersCount() {
      if (this.allUsers.length === 0) {
        this.usersCount = `Ни одного сотрудника не было добавлено`
      } else {
        switch ((this.allUsers.length) % 10) {
          case 1:
            this.usersCount = `Добавлен ${this.allUsers.length} сотрудник`
            break;
          case 2:
          case 3:
          case 4:
            this.usersCount = `Добавлено ${this.allUsers.length} сотрудника`
            break;
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 0:
            this.usersCount = `Добавлено ${this.allUsers.length} сотрудников`
            break;
        }
      }
    },
    goTo() {
      this.$emit('goTo', "MainUsers")
    },
    async goEdit(id) {
      await this.changeUserId(id)
      this.$emit('goEdit')
    }
  },
  computed: {
    ...mapGetters({
      allUsers: 'users/allUsers',
      getTitles: 'users/getTitles'
    })
  },
  async mounted() {
    await this.fetchUsers();
    await this.setUsersCount()
  }
  //TODO написать наблюдателя за измением кол-ва сотрудников
}
</script>
<style scoped>
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

.list .row:hover {
  background-color: #CCBFB4;
  cursor: pointer;
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

.cells__title {
  margin-right: 10px;
  min-width: 300px;
  text-align: left;
}
</style>