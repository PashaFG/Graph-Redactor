<template>
  <div class="userlist__main" v-show="users.length > 0">
    <h4 class="userlist__title">
      <slot />
    </h4>
    <div class="userlist__dnd" @drop="onDrop($event, this.titleUser)" @dragenter.prevent @dragover.prevent>
      <div class="user__dnd" v-for="user in users" :key="user.id" draggable="true" @dragstart="drag($event, user)">
        <user-colorful :user="user" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "user-list",
  props: {
    users: {
      type: Array,
      required: true
    },
    titleUser: {
      type: String,
      required: true
    }
  },
  methods: {
    getList(title) {
      return this.users.filter((user) => user.title === title).sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) { return -1; }
        if (nameA > nameB) { return 1; }

        return 0;
      })
    },
    drag(event, user) {
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('userID', user.id)
    },

    onDrop(event, title) {
      let userID = Number(event.dataTransfer.getData('userID'))
      let user = this.users.find((user) => user.id === userID)
      user.title = title
    },
  }
}
</script>
<style scoped>
.userlist__main {
  padding: 10px;
}

.userlist__title {
  margin-bottom: 10px;
}

.userlist__dnd {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.user__dnd {
  padding: 5px;
  margin: 5px 0
}
</style>