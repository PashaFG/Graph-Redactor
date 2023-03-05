<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: 'main-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 295px;
  height: 30px;
  padding: 5px 5px 5px 10px;
  background-color: #fff;
  color: #222222;
  border: 1px solid #594845;
  border-radius: 5px;
}
</style>