<template>
  <div class="form-control">
    <label :for="id">{{ label }}</label>
    <select :id="id" :value="modelValue" @change="change">
      <option :value="option.value" v-for="option in options" :key="option.value">{{ option.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    options: Array,
    modelValue: String,
  },
  data() {
    return {
      id: `input-${Math.random()}`,
    };
  },
  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>
