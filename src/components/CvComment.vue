<template>
  <div>
    <p>
      <strong>{{ author }}</strong>
    </p>
    <small>{{ text }}</small>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    text: String,
  },
};
</script>
