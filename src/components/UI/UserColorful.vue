<template>
  <div>
    <span class="user" :style="{ 'background-color': user.color }">
      {{ user.name }}
    </span>
  </div>
</template>
<script>
export default {
  name: "user-colorful",
  props: {
    user: {
      type: Object,
      required: true
    }
  }

}
</script>
<style scoped>
.user {
  padding: 2px 10px;
  border: 1px solid #594845;
  border-radius: 5px;
  height: fit-content;
  transition: cubic-bezier(0.215, 0.610, 0.355, 1);
  transition-duration: 1s;
}
</style>