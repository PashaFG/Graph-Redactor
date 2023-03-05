<template>
  <div class="main">
    <UserList class="users" />
    <GraphTable class="table" />
  </div>
</template>
<script>
import GraphTable from '@/modules/GraphModule/components/GraphTable.vue';
import UserList from '@/modules/GraphModule/components/UserList.vue';


export default {
  components: {
    GraphTable,
    UserList
  }
}
</script>
<style scoped>
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  top: 60px;
  height: calc(100vh - 90px);
  width: auto;
  margin: 15px;
}

.users {
  margin-bottom: 15px;
  text-align: left;
}

.table {
  width: auto;
  height: 100%;
  overflow-y: auto;


  background-color: #DFD1C4;
  border: 2px solid #594845;
  border-radius: 10px;
}
</style>