<template>
  <div class="form-control">
    <label :for="id">{{ label }}</label>
    <select :id="id" :value="modelValue" @change="change">
      <option :value="option.type" v-for="option in blockTypes" :key="option.type">{{ option.caption }}</option>
    </select>
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
      id: `input-${Math.random()}`,
    };
  },
  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
  inject: ['blockTypes'],
};
</script>
