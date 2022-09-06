<template>
  <div class="container column">
    <form class="card card-w30">
      <cv-select :options="blockTypes" v-model="selectedBlockType" label="Тип блока"></cv-select>
      <cv-text-area :v-model="blockText" label="Значение"></cv-text-area>
      <cv-btn>Добавить</cv-btn>
    </form>

    <div class="card card-w70">
      <component
        v-for="(block, idx) in blocks"
        :is="getComponentName(block.type)"
        :data="block.data"
        :key="idx"
      ></component>

      <h3>Добавьте первый блок, чтобы увидеть результат</h3>
    </div>
  </div>
  <div class="container">
    <p>
      <cv-btn>Загрузить комментарии</cv-btn>
    </p>
    <div class="card">
      <h2>Комментарии</h2>
      <ul class="list">
        <li class="list-item">
          <div>
            <p><strong>test@microsoft.com</strong></p>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, reiciendis.</small>
          </div>
        </li>
      </ul>
    </div>
    <cv-loader v-if="isLoading"></cv-loader>
  </div>
</template>

<script>
import CvLoader from './components/CvLoader.vue';
import CvSelect from './components/CvSelect.vue';
import CvTextArea from './components/CvTextArea.vue';
import CvBtn from './components/CvBtn.vue';
import CvAvatar from './components/CvAvatar.vue';
import CvTitle from './components/CvTitle.vue';
import CvSubtitle from './components/CvSubtitle.vue';
import CvText from './components/CvText.vue';

export default {
  components: { CvLoader, CvSelect, CvTextArea, CvBtn, CvAvatar, CvTitle, CvSubtitle, CvText },
  data() {
    return {
      isLoading: false,
      selectedBlockType: 'text',
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
      blockTypes: [
        {
          name: 'Заголовок',
          value: 'title',
        },
        {
          name: 'Подзаголовок',
          value: 'subtitle',
        },
        {
          name: 'Аватар',
          value: 'avatar',
        },
        {
          name: 'Текст',
          value: 'text',
        },
      ],
    };
  },
  methods: {
    getComponentName(componentType) {
      const map = {
        title: 'CvTitle',
        subtitle: 'CvSubtitle',
        avatar: 'CvAvatar',
        text: 'CvText',
      };

      return map[componentType];
    },
  },
};
</script>
