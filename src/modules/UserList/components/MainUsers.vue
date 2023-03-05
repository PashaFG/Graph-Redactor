<template>
  <div class="main__table">
    <UsersTable @go-in="this.$emit('goIn')" @go-edit="this.$emit('goEdit')" />
  </div>
</template>
<script>
import UsersTable from '@/modules/UserList/components/UsersTable.vue';
export default {
  components: {
    UsersTable
  }
}
</script>
<style scoped>
.main__table {
  position: relative;
  display: flex;
  flex-direction: column;
  top: 60px;
  height: calc(100vh - 110px);
  width: auto;
  margin: 15px;
  background-color: #DFD1C4;
  border: 2px solid #594845;
  border-radius: 10px;
  padding: 10px;
}
</style>