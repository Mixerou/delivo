<script setup lang="ts">
defineProps({
  size: {
    type: String as PropType<'default' | 'small'>,
    required: false,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  expanded: {
    type: Boolean,
    required: false,
    default: false,
  },
  outlined: {
    type: Boolean,
    required: false,
    default: false,
  },
  to: {
    type: String as PropType<null | string>,
    required: false,
    default: null,
  },
})
</script>

<template>
  <button
    v-if="to === null"
    :class="{ expanded, outlined }"
    :disabled="disabled"
    :data-size="size"
  >
    <slot />
  </button>
  <NuxtLink v-else :to="to" :class="{ expanded, outlined }" :data-size="size">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
button,
a {
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 var(--_padding-x);
  border: var(--default-border);
  border-color: transparent;
  border-radius: var(--full-radius);
  background: var(--primary);
  cursor: pointer;
  font-weight: 600;
  color: var(--white);
  transition: var(--fast-transition-duration);

  &:not(:disabled) {
    &:hover {
      background: color-with-opacity(var(--primary), 0.875);
    }

    &:active {
      background: color-with-opacity(var(--primary), 0.75);
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  &[data-size='default'] {
    --_padding-x: 1.75rem;

    gap: 0.75rem;
    height: 3.75rem;

    @include medium-screen {
      --_padding-x: 2rem;

      gap: 1rem;
      height: 4rem;
    }
  }

  &[data-size='small'] {
    --_padding-x: 1.25rem;

    gap: 0.5rem;
    height: 1.75rem;

    @include medium-screen {
      --_padding-x: 1.5rem;

      gap: 0.75rem;
      height: 2rem;
    }
  }

  &.expanded {
    width: calc(100% - var(--_padding-x) * 2);
  }

  &.outlined {
    border-color: var(--primary);
    background: transparent;
    color: var(--text-color);

    &:not(:disabled) {
      &:hover {
        background: color-with-opacity(var(--primary), 0.125);
      }

      &:active {
        border-color: transparent;
        background: color-with-opacity(var(--primary), 0.75);
        color: var(--white);
      }
    }
  }
}
</style>
