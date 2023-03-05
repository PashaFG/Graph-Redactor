<template>
  <button class="main__button">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'main-button'
}
</script>
<style scoped>
.main__button {
  color: white;
  background-color: #8A7062;
  border: 1px solid #594845;
  border-radius: 5px;
  cursor: pointer;
  padding: 2px 10px;
}

.main__button:hover {
  background-color: #594845;
  color: white;
}

.main__button:active {
  background-color: #8A7062;
  color: white;
}
</style>