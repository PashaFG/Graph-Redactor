<template>
  <div>
    <div v-show="this.allUsers" class="tabs">
      <input type="radio" name="tab-btn" id="tab-btn-1" value="" checked>
      <label v-show="this.greatUsers.length > 0" for="tab-btn-1">Старшие</label>

      <input type="radio" name="tab-btn" id="tab-btn-2" value="">
      <label v-show="this.lowerUsers.length > 0" for="tab-btn-2">Рядовые сотрудники</label>

      <input type="radio" name="tab-btn" id="tab-btn-3" value="">
      <label v-show="this.newUsers.length > 0" for="tab-btn-3">Стажёры</label>

      <input type="radio" name="tab-btn" id="tab-btn-4" value="">
      <label for="tab-btn-4">Все сотрудники</label>

      <div class="content" id="content-1">
        <div class="user__dnd" v-for="user in this.greatUsers" :key="user.id" draggable="true"
          @dragstart="drag($event, user)">
          <user-colorful :user="user" />
        </div>
      </div>

      <div class="content" id="content-2">
        <div class="user__dnd" v-for="user in this.lowerUsers" :key="user.id" draggable="true"
          @dragstart="drag($event, user)">
          <user-colorful :user="user" />
        </div>
      </div>

      <div class="content" id="content-3">
        <div class="user__dnd" v-for="user in this.newUsers" :key="user.id" draggable="true"
          @dragstart="drag($event, user)">
          <user-colorful :user="user" />
        </div>
      </div>

      <div class="content" id="content-4">
        <div class="user__dnd" v-for="user in this.allUsers" :key="user.id" draggable="true"
          @dragstart="drag($event, user)">
          <user-colorful :user="user" />
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    drag(event, user) {
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('userID', user._id)
    },
  },
  computed: {
    ...mapGetters({
      allUsers: 'users/allUsers',
      greatUsers: 'users/greatUsers',
      lowerUsers: 'users/lowerUsers',
      newUsers: 'users/newUsers',
    }),
  }
}
</script>
<style scoped>
.user__dnd {
  margin: 5px;
}

.tabs {
  font-size: 0;
}

.tabs>input[type="radio"] {
  display: none;
}

.tabs>div {
  /* скрыть контент по умолчанию */
  display: none;
  border: 1px solid #594845;
  background-color: #DFD1C4;
  border-radius: 10px;
  border-top-left-radius: 0;
  padding: 15px;
  font-size: 16px;
}

/* отобразить контент, связанный с вабранной радиокнопкой (input type="radio") */
#tab-btn-1:checked~#content-1,
#tab-btn-2:checked~#content-2,
#tab-btn-3:checked~#content-3,
#tab-btn-4:checked~#content-4 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.tabs>label {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  color: #fff;
  background-color: #8A7062;
  border: 1px solid #594845;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 2px 8px;
  font-size: 16px;
  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  cursor: pointer;
  position: relative;
  top: 1px;
  margin-right: 5px;
}

.tabs>input[type="radio"]:checked+label {
  background-color: #DFD1C4;
  border-bottom: 1px solid #DFD1C4;
  color: #2c3e50;
}
</style>