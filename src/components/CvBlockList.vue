<template>
  <div class="card card-w70">
    <component
      v-for="block in blocks"
      :is="getComponentName(block.type)"
      :data="block.data"
      :key="block.id"
    ></component>

    <h3 v-if="blocks.length === 0">Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import CvAvatar from './CvAvatar.vue';
import CvTitle from './CvTitle.vue';
import CvSubtitle from './CvSubtitle.vue';
import CvText from './CvText.vue';

export default {
  props: {
    blocks: {
      type: Array,
      required: true,
    },
  },
  components: { CvAvatar, CvTitle, CvSubtitle, CvText },
  methods: {
    getComponentName(name) {
      return this.blockTypes.find((item) => item.type === name).componentName;
    },
  },
  inject: ['blockTypes'],
};
</script>
