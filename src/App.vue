<template>
  <div class="container column">
    <cv-block-creator @addblock="addBlock"></cv-block-creator>
    <cv-block-list :blocks="blocks"></cv-block-list>
  </div>

  <div class="container">
    <p v-if="commentsBtnShow">
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
      dbUrl: 'https://vue-cv-f51c8-default-rtdb.firebaseio.com/cv.json',
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
      blocks: [],
      comments: [],
    };
  },

  computed: {
    commentsBtnShow() {
      return this.comments.length === 0;
    },
  },

  methods: {
    async addBlock(type, data) {
      const block = { type, data };
      const success = await this.saveBlock(block);
      if (success) {
        this.blocks.push(block);
      } else {
        alert('Не удалось сохранить блок в базе данных');
      }
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

    async getState() {
      try {
        const param = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(this.dbUrl, param);
        const result = await response.json();
        if (result) {
          this.blocks = Object.keys(result).map((key) => ({ id: key, ...result[key] }));
        }
      } catch (err) {
        this.blocks = [];
        alert(`Не удалось загрузить сохраненное резюме: ${err}`);
      }
    },

    async saveBlock(block) {
      let success = true;
      try {
        const param = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(block),
        };
        const response = await fetch(this.dbUrl, param);
        success = response.status === 200;
      } catch (err) {
        success = false;
      }
      return success;
    },
  },

  provide() {
    return {
      blockTypes: this.blockTypes,
    };
  },

  mounted() {
    this.getState();
  },
};
</script>
