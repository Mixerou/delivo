<script setup lang="ts">
defineProps({
  to: {
    type: String as PropType<null | string>,
    required: false,
    default: null,
  },
})
</script>

<template>
  <span v-if="to === null" class="link">
    <slot />
  </span>
  <NuxtLink v-else class="link" :to="to">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
.link {
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: var(--black);
  transition: var(--fast-transition-duration);

  &::after {
    content: ' ';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0.125rem;
    border-radius: var(--full-radius);
    opacity: 0;
    transform: translateX(-50%);
    background: var(--black);
    transition: var(--fast-transition-duration);
  }

  &:hover {
    color: color-with-opacity(var(--black), 0.75);

    &::after {
      width: 100%;
      opacity: 1;
      transform: translateX(-50%);
    }
  }

  &:active {
    transform: translateY(0.125rem);
    color: color-with-opacity(var(--black), 0.5);

    &::after {
      width: 125%;
      opacity: 1;
      transform: translate(-50%, -0.125rem);
    }
  }
}
</style>
