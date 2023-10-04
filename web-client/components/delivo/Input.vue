<script setup lang="ts">
defineProps({
  value: {
    type: String,
    required: false,
    default: '',
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
})
const emit = defineEmits(['update:value'])
const updateValue = (value: string) => emit('update:value', value)
</script>

<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="value"
    @update:value="updateValue"
  />
</template>

<style scoped lang="scss">
input {
  all: unset;
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0 2rem;
  border-radius: var(--full-radius);
  background: var(--white);
  line-height: var(--body-line-height);
  font-size: var(--body-font-size);
  color: var(--black);

  &::placeholder {
    opacity: 0.75;
    line-height: var(--body-line-height);
    font-size: var(--body-font-size);
    color: var(--black);
  }
}
</style>
