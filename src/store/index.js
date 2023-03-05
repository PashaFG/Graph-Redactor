import { createStore } from 'vuex'
import { usersModule } from '@/modules/UserList/store/usersModule.js'
import { createUserModule } from '@/modules/CreateUser/store/createUserModule.js'
import { editUserModule } from '@/modules/EditUser/store/editUserModule.js'
import { branchesModule } from '@/modules/BranchesEditor/store/branchesModule'
import { tableModule } from '@/modules/GraphModule/store/tableModules'

export default createStore({
  //Сами состояния
  state: () => ({
    userId: 0
  }),
  //Компьютед методы
  getters: {},
  //Менять напрямую состояние нельзя
  //Поэтому изменить их можем с помощью мутаций
  mutations: {
    setUserId(state, id) {
      state.userId = id
    }
  },
  //Функции, которые внутри себя используют мутации
  //Напрямую из экшенов изменять состояния не рекомендуется
  actions: {
    changeUserId(context, id) {
      context.commit('setUserId', id)
    }
  },
  //1 модуль - это 1 кусочек стора со своими состояниями, геттерами, мутациями и экшенами
  //Далее эти модули образуют один глобальный стор
  modules: {
    users: usersModule,
    createUser: createUserModule,
    editUser: editUserModule,
    branches: branchesModule,
    table: tableModule
  }
})
