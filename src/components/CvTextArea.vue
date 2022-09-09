<template>
  <div class="form-control">
    <label :for="id">{{ label }}</label>
    <textarea :id="id" :value="modelValue" @input="change" rows="3" />
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    modelValue: String,
  },
  data() {
    return {
      id: `textarea-${Math.random()}`,
    };
  },
  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>
