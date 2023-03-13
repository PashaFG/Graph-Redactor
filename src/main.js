import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import components from '@/components/UI'
//external components


const app = createApp(App)

app.use(store)
  .use(router)

components.forEach((component) => {
  app.component(component.name, component)
})

app.directive('class', {
  mounted(el, binding) {
    el.className += ` ${binding.value}`
  },
})
app.directive('disabled', {
  mounted(el, binding) {
    let classes = el.className.split(" ")
    function deleteDisable(array) {
      if (array.includes('disabled')) {
        array.pop()
      }
      return array.join(" ")
    }
    function addDisable(array) {
      if (!array.includes('disabled')) {
        array.push('disabled')
      }
      return array.join(" ")
    }
    el.className = (binding.value) ? `${addDisable(classes)}` : `${deleteDisable(classes)}`
    el.disabled = (binding.value) ? true : false
  },
  updated(el, binding) {
    let classes = el.className.split(" ")
    function deleteDisable(array) {
      if (array.includes('disabled')) {
        array.pop()
      }
      return array.join(" ")
    }
    function addDisable(array) {
      if (!array.includes('disabled')) {
        array.push('disabled')
      }
      return array.join(" ")
    }
    el.className = (binding.value) ? `${addDisable(classes)}` : `${deleteDisable(classes)}`
    el.disabled = (binding.value) ? true : false
  },
})

app.mount('#app')
