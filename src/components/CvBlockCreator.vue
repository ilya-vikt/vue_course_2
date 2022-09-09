<template>
  <form class="card card-w30">
    <cv-select v-model="selectedBlockType" label="Тип блока"></cv-select>
    <cv-text-area v-model="blockData" label="Значение"></cv-text-area>
    <cv-btn @click.prevent="addBlock">Добавить</cv-btn>
  </form>
</template>

<script>
import CvSelect from './CvSelect.vue';
import CvTextArea from './CvTextArea.vue';
import CvBtn from './CvBtn.vue';

export default {
  emits: ['addblock'],
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
    },
  },
};
</script>
