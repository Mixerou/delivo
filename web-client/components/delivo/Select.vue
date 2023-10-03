<script setup lang="ts">
import IconExpandMore from 'assets/icons/expand-more.svg'

const props = defineProps({
  items: {
    type: Array as PropType<
      {
        id: number | string
        value: any
      }[]
    >,
    required: false,
    default: () => [],
  },
  selectedId: {
    type: String as PropType<null | number | string>,
    required: false,
    default: null,
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  dropdownDirection: {
    type: String as PropType<'top' | 'bottom'>,
    required: false,
    default: 'bottom',
  },
})
const emit = defineEmits(['update:selectedId'])

const isOpened = ref(false)

const onSelect = (id: number | string) => {
  if (props.disabled) return

  isOpened.value = false
  emit('update:selectedId', id)
}
</script>

<template>
  <div v-click-outside="() => (isOpened = false)" class="select">
    <div
      class="selected-value"
      :class="{ opened: isOpened && !disabled, disabled }"
      :data-dropdown-direction="props.dropdownDirection"
      @click="isOpened = disabled ? isOpened : !isOpened"
    >
      <span>
        {{
          selectedId === null
            ? placeholder
            : items.find(item => item.id === selectedId)?.value
        }}
      </span>
      <IconExpandMore class="icon" />
    </div>
    <Transition enter-from-class="hide" leave-to-class="hide">
      <div
        v-if="isOpened && !disabled"
        class="options"
        :data-direction="props.dropdownDirection"
      >
        <div
          v-for="item in items"
          :key="`option-${item.id}`"
          class="option"
          :class="{ ['selected-option']: item.id === selectedId }"
          role="option"
          @click="onSelect(item.id)"
        >
          {{ item.value }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.select {
  position: relative;
  transition-duration: var(--fast-transition-duration);

  .selected-value {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    height: 3.75rem;
    padding: 0 1.75rem;
    border: var(--default-border);
    border-radius: var(--xxl-radius) var(--xxl-radius) var(--xxl-radius)
      var(--xxl-radius);
    cursor: pointer;
    font-weight: 600;
    color: var(--text-color);
    transition: var(--fast-transition-duration);

    @include medium-screen {
      gap: 1rem;
      height: 4rem;
      padding: 0 2rem;
    }

    &.disabled {
      background: color-with-opacity(var(--primary), 0.125);
      cursor: not-allowed;
    }

    &.opened {
      height: 3rem;
      margin-top: 0.75rem;
      background: var(--primary);
      color: var(--white);

      @include medium-screen {
        margin-top: 1rem;
      }

      &[data-dropdown-direction='top'] {
        border-radius: var(--large-radius) var(--large-radius) var(--xl-radius)
          var(--xl-radius);
        transform: translateY(0.5rem);
      }

      &[data-dropdown-direction='bottom'] {
        border-radius: var(--xl-radius) var(--xl-radius) var(--large-radius)
          var(--large-radius);
        transform: translateY(-1.125rem);

        @include medium-screen {
          transform: translateY(-1.25rem);
        }
      }

      .icon {
        transform: rotate(-180deg);
        fill: var(--white);
      }
    }

    &:not(.opened):not(.disabled) {
      &:hover {
        background: color-with-opacity(var(--primary), 0.125);
      }

      &:active {
        background: color-with-opacity(var(--primary), 0.25);

        &[data-dropdown-direction='top'] {
          transform: translateY(-0.25rem);
        }

        &[data-dropdown-direction='bottom'] {
          transform: translateY(0.25rem);
        }
      }
    }

    .icon {
      width: 1.875rem;
      fill: var(--text-color);
      transition: var(--fast-transition-duration);

      @include medium-screen {
        width: 2rem;
      }
    }
  }

  .options {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    z-index: 999;
    bottom: 0;
    left: 50%;
    min-width: calc(100% - 0.5rem * 2);
    padding: 0.5rem;
    background: var(--primary);
    line-height: var(--label-line-height);
    font-size: var(--label-font-size);
    color: var(--white);
    transition: var(--fast-transition-duration);

    &[data-direction='top'] {
      border-radius: var(--xl-radius) var(--xl-radius) var(--large-radius)
        var(--large-radius);
      transform: translate(-50%, calc(-3rem));

      &.hide {
        opacity: 0;
        transform: translate(-50%, calc(-3rem - 1.5rem));

        @include medium-screen {
          transform: translate(-50%, calc(-3rem - 1.75rem));
        }
      }
    }

    &[data-direction='bottom'] {
      border-radius: var(--large-radius) var(--large-radius) var(--xl-radius)
        var(--xl-radius);
      transform: translate(-50%, calc(100% - 0.875rem));

      @include medium-screen {
        transform: translate(-50%, calc(100% - 1rem));
      }

      &.hide {
        opacity: 0;
        transform: translate(-50%, calc(100% + 0.625rem));

        @include medium-screen {
          transform: translate(-50%, calc(100% + 0.75rem));
        }
      }
    }

    .option {
      display: flex;
      align-items: center;
      width: calc(100% - 1rem * 2);
      padding: 0.25rem 1rem;
      border-radius: var(--full-radius);
      cursor: pointer;
      transition: var(--fast-transition-duration);

      &:hover,
      &.selected-option {
        background: color-with-opacity(var(--primary-light), 0.25);
      }

      &:active {
        background: color-with-opacity(var(--primary-light), 0.5);
      }
    }
  }
}
</style>
