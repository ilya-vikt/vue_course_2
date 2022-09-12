<template>
  <div class="card">
    <h2>Комментарии</h2>
    <ul class="list">
      <li class="list-item" v-for="(comment, idx) in comments" :key="idx">
        <cv-comment :author="comment.email" :text="comment.text"></cv-comment>
      </li>
    </ul>
  </div>
</template>

<script>
import CvComment from './CvComment.vue';

export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  components: { CvComment },
};
</script>
