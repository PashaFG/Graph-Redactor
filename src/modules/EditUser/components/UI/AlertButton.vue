<template>
  <button class="alert__button">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'alert-button'
}
// font - family: Avenir, Helvetica, Arial, sans - serif;

</script>
<style scoped>
.alert__button {
  min-height: 30px;
  min-width: 100px;
  font-size: medium;
  font-family: 'Roboto', sans-serif;
  color: white;
  background-color: #fd1c2e;
  border: 1px solid #fd1c2e;
  border-radius: 5px;
  cursor: pointer;
  padding: 2px 10px;
  box-shadow: 0px 4px 12px 0px rgba(130, 25, 25, 0.2509);
}

.alert__button:hover {
  background-color: #b00e1a;
  border-color: #b00e1a;
  color: white;
}

.alert__button:active {
  background-color: #fd1c2e;
  border-color: #fd1c2e;
  color: white;
}
</style>