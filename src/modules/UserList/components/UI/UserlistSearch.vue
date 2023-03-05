<template>
  <div class="userlist__search">
    <input type="text" class="input">
    <button v-if="!currentIcon" class="element_button" @click="changeCurrentIcon">
      <search-icon></search-icon>
    </button>
    <button v-else class="element_button" @click="changeCurrentIcon">
      <cross-icon></cross-icon>
    </button>
  </div>
</template>
<script>
export default {
  name: 'userlist-search',
  data() {
    return {
      currentIcon: false
    }
  },
  methods: {
    changeCurrentIcon() {
      this.currentIcon = (this.currentIcon) ? false : true
    }
  }
}
</script>
<style scoped>
.userlist__search {
  display: flex;
  align-items: center;
  height: 30px;
  border: 1px solid #594845;
  border-radius: 6px;
  padding: 5px;
  background-color: #F2F1F0;
}

.input {
  width: 300px;
  background: none;
  text-decoration: none;
  border: none;
}

.input:focus {
  outline: none;
}

.element_button {
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  color: #594845;
}

.element_button:hover {
  color: darkturquoise;
}
</style>