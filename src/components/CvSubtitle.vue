<template>
  <h2>{{ data }}</h2>
</template>
<script>
export default {
  props: {
    data: {
      type: String,
      required: true,
    },
  },
};
</script>
