<template>
  <div>
    <div class="rows" v-if="this.getRows.length > 1">
      <DataTable :tableData="this.getRows"></DataTable>
    </div>
    <div v-else>
      <main-button @click="this.fetchRows">Загрузить график</main-button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import DataTable from '@/modules/GraphModule/components/DataTable.vue';

export default {
  components: {
    DataTable
  },
  computed: {
    ...mapGetters({
      getDatePeriod: 'table/getDatePeriod',
      getRows: 'table/getRows',
    })
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
      fetchBranches: 'branches/fetchBranches',
      fetchRows: 'table/fetchRows',
      fetchUsers: 'users/fetchUsers',
    }),
  },
  async mounted() {
    await this.fetchUsers();
    await this.fetchBranches();
  }
}
</script>
<style scoped>
.rows {
  height: 100%;
}
</style>