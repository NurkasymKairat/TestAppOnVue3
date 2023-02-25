<template>
    <input :value="modelValue" class="input" @input="updateModel" type="text">
</template>

<script>
export default {
    name: 'my-input',
    props: {
      modelValue: [String, Number]
    },
    methods: {
      updateModel(e) {
        this.$emit('update:modelValue', e.target.value);
      }
    }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  margin: 10px 0;
  padding: 10px 15px;
}


</style>