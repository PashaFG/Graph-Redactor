<template>
  <div class="home">
    <div class="title">
      <h2 class="title__element">
        Редактор / Январь
      </h2>
      <div class="spacer__box" />
      <main-button class="title__element" @click="$router.push('/users')">К списку сотрудников</main-button>
      <main-button class="title__element" @click="setDatepickerVisible($event)">Выбрать даты</main-button>
      <button class="title__element import__btn"><exel-icon /></button>
      <router-link :to="{ name: 'export', params: { start: this.getDatePeriod.start, end: this.getDatePeriod.end } }"
        target="_blank">
        <button class="title__element import__btn"><print-icon /></button>
      </router-link>
    </div>
    <MainGraph />
    <DatepickerModal />
  </div>
</template>

<script>
import MainGraph from '@/modules/GraphModule/MainGraph.vue';
import DatepickerModal from '@/modules/GraphModule/components/DatepickerModal.vue';
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    MainGraph,
    DatepickerModal
  },
  computed: {
    ...mapGetters({
      getRows: 'table/getRows',
      getDatePeriod: 'table/getDatePeriod',
      getDatepickerVisible: 'table/getDatepickerVisible'
    })
  },
  methods: {
    ...mapMutations({
      setDatepickerVisible: 'table/setDatepickerVisible'
    }),
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}

.home {
  align-items: center;
  height: 64px;
}

.title {
  top: 0;
  left: 100;
  position: fixed;
  width: calc(100vw - 110px);
  display: flex;
  justify-content: space-between;
  background-color: #DFD1C4;
  padding: 16px 0 16px 10px;
}

.title__element {
  height: 32px;
  margin-right: 15px;
}

.import__btn {
  background-color: unset;
  border: none;
  cursor: pointer;
  color: #594845;
}

.import__btn:hover {
  color: #000;
}

.spacer__box {
  flex-grow: 1;
}
</style>
