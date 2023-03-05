<template>
  <div class="home">
    <div class="title">
      <h2>
        Январь
      </h2>
    </div>
    <div class="sheet">1</div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.home {
  align-items: center;
  height: 64px;
}

.title {
  top: 0;
  left: 100;
  position: fixed;
  width: 100%;
  display: flex;
  background-color: #DFD1C4;
  padding: 16px 0 16px 10px;
}

.sheet {
  margin-top: 64px;
  height: 2000px;
}
</style>
