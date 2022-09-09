<template>
  <div class="container column">
    <cv-block-creator @addblock="addBlock"></cv-block-creator>
    <cv-block-list :blocks="blocks"></cv-block-list>
  </div>

  <div class="container">
    <p>
      <cv-btn @click="getComments">Загрузить комментарии</cv-btn>
    </p>
    <cv-comment-list :comments="comments"></cv-comment-list>
    <cv-loader v-if="isLoading"></cv-loader>
  </div>
</template>

<script>
import axios from 'axios';
import CvBlockCreator from './components/CvBlockCreator.vue';
import CvBlockList from './components/CvBlockList.vue';
import CvLoader from './components/CvLoader.vue';
import CvBtn from './components/CvBtn.vue';
import CvCommentList from './components/CvCommentList.vue';

export default {
  components: { CvBlockCreator, CvBlockList, CvLoader, CvBtn, CvCommentList },
  data() {
    return {
      isLoading: false,
      blockTypes: [
        {
          caption: 'Заголовок',
          type: 'title',
          componentName: 'CvTitle',
        },
        {
          caption: 'Подзаголовок',
          type: 'subtitle',
          componentName: 'CvSubtitle',
        },
        {
          caption: 'Аватар',
          type: 'avatar',
          componentName: 'CvAvatar',
        },
        {
          caption: 'Текст',
          type: 'text',
          componentName: 'CvText',
        },
      ],
      blocks: [
        {
          type: 'title',
          data: 'Рик Nickname',
        },
        {
          type: 'avatar',
          data: 'https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png',
        },
        {
          type: 'subtitle',
          data: 'Опыт работы',
        },
        {
          type: 'text',
          data: 'главный герой американского мультсериала «Рик и Морти», гениальный учёный, изобретатель, атеист (хотя в некоторых сериях он даже молится Богу, однако, каждый раз после чудесного спасения ссылается на удачу и вновь',
        },
      ],
      comments: [],
    };
  },
  methods: {
    addBlock(type, data) {
      this.blocks.push({ type, data });
    },
    async getComments() {
      try {
        this.isLoading = true;
        this.comments = [];
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=42');
        this.comments = data.map((comment) => ({ email: comment.email, text: comment.body }));
      } catch {
        console.warn('The comments loading failed');
      } finally {
        this.isLoading = false;
      }
    },
  },
  provide() {
    return {
      blockTypes: this.blockTypes,
    };
  },
};
</script>
