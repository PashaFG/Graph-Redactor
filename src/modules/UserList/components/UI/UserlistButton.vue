<template>
  <button class="userlist__button">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'userlist-button'
}
// font - family: Avenir, Helvetica, Arial, sans - serif;

</script>
<style scoped>
.userlist__button {
  min-height: 10px;
  min-width: 100px;
  font-size: medium;
  font-family: 'Roboto', sans-serif;
  color: white;
  background-color: #8A7062;
  border: 1px solid #594845;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
}

.userlist__button:hover {
  background-color: #594845;
  color: white;
}

.userlist__button:active {
  background-color: #8A7062;
  color: white;
}
</style>