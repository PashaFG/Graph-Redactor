<template>
  <div class="root">
    <div class="root__child">
      <span><strong>Кнопки</strong></span>
    </div>

    <div class="root__child">
      <graph-button class="element"
        v-class="'filled'">
        <template #label>Сохранить</template>
      </graph-button>
      <graph-button class="element"
        v-class="'filled'">
        <template #icon><gear-icon-24 /></template>
        <template #label>Сохранить</template>
      </graph-button>
      <graph-button class="element"
        v-class="'filled'"
        v-disabled="true">
        <template #label>Сохранить</template>
      </graph-button>
      <graph-button class="element"
        v-class="'filled'"
        v-disabled="true">
        <template #icon><gear-icon-24 /></template>
        <template #label>Сохранить</template>
      </graph-button>
    </div>

    <div class="root__child">
      <graph-button class="element"
        v-class="'outlined'">
        <template #label>Сохранить</template>
      </graph-button>
      <graph-button class="element"
        v-class="'outlined'">
        <template #icon><gear-icon-24 /></template>
        <template #label>Сохранить</template>
      </graph-button>
      <graph-button class="element"
        v-class="'outlined'"
        v-disabled="true">
        <template #label>Сохранить</template>
      </graph-button>
      <graph-button class="element"
        v-class="'outlined'"
        v-disabled="true">
        <template #icon><gear-icon-24 /></template>
        <template #label>Сохранить</template>
      </graph-button>
    </div>

    <div class="root__child">
      <graph-button class="element"
        v-class="'alert'">
        <template #label>Удалить</template>
      </graph-button>
      <graph-button class="element"
        v-class="'alert'">
        <template #icon><delete-icon /></template>
        <template #label>Удалить</template>
      </graph-button>
      <graph-button class="element"
        v-class="'alert'"
        v-disabled="true">
        <template #label>Удалить</template>
      </graph-button>
      <graph-button class="element"
        v-class="'alert'"
        v-disabled="true">
        <template #icon><delete-icon /></template>
        <template #label>Удалить</template>
      </graph-button>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.root {
  position: relative;
  left: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
}

.root__child {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}

.element {
  margin-right: 15px;
}
</style>