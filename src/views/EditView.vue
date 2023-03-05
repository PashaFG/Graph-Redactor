<template>
  <div class="home">
    <div class="title">
      <h2 class="title__element">
        Редактор / Январь
      </h2>
      <div class="spacer__box" />
      <main-button class="title__element" @click="$router.push('/users')">К списку сотрудников</main-button>
      <main-button class="title__element">Выбрать даты</main-button>
      <button class="title__element import__btn"><exel-icon /></button>
      <button class="title__element import__btn" @click="generateReport"><print-icon /></button>
    </div>
    <EditTable />
  </div>
</template>

<script>
import EditTable from '@/components/EditTable.vue';
import html2pdf from "html2pdf.js";

export default {
  components: {
    EditTable,
  },
  methods: {
    generateReport() {
      const invoice = document.querySelector('#invoice');
      console.log(invoice);
      var opt = {
        margin: 1,
        filename: "file.pdf",
        pagebreak: { mode: ['css'] },
        html2canvas: {
          scale: 2,
          width: invoice.offsetWidth,
          height: invoice.offsetHeight,
        },
        jsPDF: { unit: "px", orientation: 'landscape', format: [invoice.offsetWidth + 2, invoice.offsetHeight + 2] }
      };
      html2pdf().from(invoice).set(opt).save();
    }
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
