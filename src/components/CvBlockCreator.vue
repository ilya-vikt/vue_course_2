<template>
  <form class="card card-w30">
    <cv-select v-model="selectedBlockType" label="Тип блока"></cv-select>
    <cv-text-area v-model="blockData" label="Значение"></cv-text-area>
    <cv-btn @click.prevent="addBlock" :disabled="isAddBtnDisabled">Добавить</cv-btn>
  </form>
</template>

<script>
import CvSelect from './CvSelect.vue';
import CvTextArea from './CvTextArea.vue';
import CvBtn from './CvBtn.vue';

export default {
  emits: {
    addblock(blockType, blockData) {
      const checkPass = blockType && blockData;
      if (!checkPass) {
        console.warn("Not enought parameters in a 'addBlock' method");
      }
      return checkPass;
    },
  },
  data() {
    return {
      selectedBlockType: 'title',
      blockData: '',
    };
  },
  components: {
    CvSelect,
    CvTextArea,
    CvBtn,
  },
  methods: {
    addBlock() {
      this.$emit('addblock', this.selectedBlockType, this.blockData);
      this.selectedBlockType = 'title';
      this.blockData = '';
    },
  },
  computed: {
    isAddBtnDisabled() {
      return this.blockData.length < 4;
    },
  },
};
</script>
