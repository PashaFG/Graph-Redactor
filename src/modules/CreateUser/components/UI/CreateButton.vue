<template>
  <button class="create__button">
    <span>
      <slot></slot>
    </span>
</button>
</template>
<script>
export default {
  name: 'create-button'
}
// font - family: Avenir, Helvetica, Arial, sans - serif;

</script>
<style scoped>
.create__button {
  min-height: 30px;
  min-width: 100px;
  font-size: medium;
  font-family: 'Roboto', sans-serif;
  color: white;
  background-color: #8A7062;
  border: 1px solid #594845;
  border-radius: 5px;
  cursor: pointer;
  padding: 2px 10px;
}

.create__button:hover {
  background-color: #594845;
  color: white;
}

.create__button:active {
  background-color: #8A7062;
  color: white;
}
</style>