<template>
  <select class="select" :value="modelValue" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'main-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
.select {
  width: 312px;
  height: 42px;
  padding-left: 10px;
  background-color: #fff;
  color: #222222;
  border: 1px solid #594845;
  border-radius: 5px;
  text-align: left;
}
</style>