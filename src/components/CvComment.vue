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
    author: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
