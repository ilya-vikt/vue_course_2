<template>
  <div class="card">
    <h2>Комментарии</h2>
    <ul class="list">
      <li class="list-item">
        <cv-comment author="ttt" text="text"></cv-comment>
      </li>
    </ul>
  </div>
</template>

<script>
import CvComment from './CvComment.vue';

export default {
  components: { CvComment },
};
</script>
