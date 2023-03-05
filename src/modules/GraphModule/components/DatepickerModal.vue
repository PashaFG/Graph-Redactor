<template>
  <div class="datepicker__dialog" v-if="this.getDatepickerVisible" @click="this.setDatepickerVisible(false)">
    <div class="dialog__content" @click.stop>
      <div class="datepicker__row">
        <span class="datepicker__title">Start date</span>
        <datepicker class="datepicker" :minimumView="'day'" :maximumView="'year'" v-model="this.startDate">
        </datepicker>
      </div>
      <div class="datepicker__row">
        <span class="datepicker__title">End date</span>
        <datepicker class="datepicker" :minimumView="'day'" :maximumView="'year'" v-model="this.endDate">
        </datepicker>
      </div>
      <div class="datepicker__alert">
        <h2>ВНИМАНИЕ!</h2>
        <span>
          При нажатии <strong>"Создать новые"</strong> все внесенные изменение
        </span>
        <span>
          в данных датах будут перезаписаны!
        </span>
      </div>
      <div class="datepicker__row">
        <main-button @click="this.setDatepickerVisible(false)">Отменить</main-button>
        <main-button @click="loadOldRows">Загрузить имеющиеся</main-button>
        <main-button @click="acceptNewPeriod">Создать новые</main-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import datepicker from 'vue3-datepicker'


export default {
  components: {
    datepicker
  },
  data() {
    return {
      startDate: new Date(),
      endDate: new Date(),
    }
  },
  computed: {
    ...mapGetters({
      getDatepickerVisible: 'table/getDatepickerVisible'
    })
  },
  methods: {
    ...mapMutations({
      setStartDate: 'table/setStartDate',
      setEndDate: 'table/setEndDate',
      setDatepickerVisible: 'table/setDatepickerVisible'
    }),
    ...mapActions({
      fetchRows: 'table/fetchRows',
      initializationRows: 'table/initializationRows'
    }),
    openPicker() {
      if (!this.datePickerVisible) {
        this.datePickerVisible = true
      } else {
        this.datePickerVisible = false
      }
      // console.log(this.$refs.programaticOpen.selectDay);
    },
    async loadOldRows() {
      await this.setStartDate(Date.parse(this.startDate))
      await this.setEndDate(Date.parse(this.endDate))
      await this.fetchRows()
      this.setDatepickerVisible(false)
    },
    async acceptNewPeriod() {
      await this.setStartDate(Date.parse(this.startDate))
      await this.setEndDate(Date.parse(this.endDate))
      await this.initializationRows()
      await this.fetchRows()
      this.setDatepickerVisible(false)
    }
  }
}
</script>
<style scoped>
.datepicker__dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog__content {
  margin: auto;
  background-color: #fff;
  border-radius: 15px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}

.datepicker__row {
  justify-content: space-between;
  display: flex;
  margin-bottom: 20px;
}

.datepicker__alert {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
  margin-bottom: 20px;
  background-color: rgba(250, 250, 132, 0.973);
  border-radius: 10px;
}

.datepicker__title {
  margin: 0 10px;
  min-width: 150px;
  text-align: left;
}
</style>