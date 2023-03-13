<template>
  <button>
    <slot name="icon"></slot>
    <span>
      <slot name="label"></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'graph-button',
}
</script>
<!-- 
  Button style on top
  Specific style on center 
  Disable style on bottom
-->
<style scoped>
button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  gap: 8px;

  font-size: medium;
  font-family: 'Roboto', sans-serif;

  min-height: 30px;
  min-width: 100px;

  border-radius: 12px;
}

button:hover,
button:focus {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
}

button:active {
  opacity: 0.9;
}


.filled {
  color: white;
  background-color: #8A7062;
  border: 1px solid #8A7062;
}

.outlined {
  color: #8A7062;
  background-color: #F2F1F0;
  border: 1px solid #8A7062;
}

.alert {
  color: white;
  background-color: #fd1c2e;
  border: 1px solid #fd1c2e;
}


.disabled,
.disabled:hover {
  box-shadow: none;
  cursor: default;
  background: rgba(28, 27, 31, 0.12);
  border: none;
  opacity: 0.38;
  color: #1C1B1F;
}
</style>