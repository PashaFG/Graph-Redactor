<template>
  <div>
    <div class="rows"
      v-if="this.getRows.length > 1">
      <DataTable :tableData="this.getRows"></DataTable>
    </div>
    <div class="blankRows"
      v-else>
      <graph-button @click="
        setDatepickerVisible($event)"
        v-class="'filled'">
        <template #label>
          Выбрать даты
        </template>
      </graph-button>
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
      getDatepickerVisible: 'table/getDatepickerVisible'
    })
  },
  methods: {
    ...mapMutations({
      setDatepickerVisible: 'table/setDatepickerVisible'
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

.blankRows {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
</style>