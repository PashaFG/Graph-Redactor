<template>
  <div class="home">
    <div class="title">
      <h2 class="title__element">
        Заведения
      </h2>
      <div class="spacer__box"></div>
    </div>
    <component :is="this.currentTab"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MainBranches from '@/modules/BranchesEditor/components/MainBranches.vue'
import CreateBranches from '@/modules/BranchesEditor/components/CreateBranches.vue'

export default {
  components: {
    MainBranches,
    CreateBranches
  },
  computed: {
    ...mapGetters({
      currentTab: "branches/getCurrentTab"
    })
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


.spacer__box {
  flex-grow: 1;
}
</style>
