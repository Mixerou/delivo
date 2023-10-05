<script setup lang="ts">
import { Restaurant } from '~/models/restaurant'

defineProps({
  restaurant: {
    type: Object as PropType<Restaurant>,
    required: true,
  },
})
</script>

<template>
  <NuxtLink class="card" :to="`/restaurants/${restaurant.id}`">
    <img :src="`/fake-cdn/covers/${restaurant.coverId}.webp`" />
    <div class="meta">
      <h6>{{ restaurant.localedName }}</h6>
      <p>{{ restaurant.localedSlogan }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 14.5rem;
  border-radius: var(--xl-radius);
  cursor: pointer;
  text-decoration: none;
  color: var(--black);
  transition: var(--fast-transition-duration);

  @include medium-screen {
    height: 15.5rem;
  }

  &:hover {
    width: calc(20rem - 1rem * 2);
    height: calc(14.5rem - 1rem * 2);
    padding: 1rem;
    transform: scale(1.05);
    background: var(--primary-light);

    @include medium-screen {
      height: calc(15.5rem - 1rem * 2);
    }

    img {
      height: 10.8rem;
    }

    h6 {
      transform: translate(-50%, -0.125rem);

      @include medium-screen {
        transform: translate(-50%, 0);
      }
    }

    p {
      transform: translate(-50%, 0.75rem);

      @include medium-screen {
        transform: translate(-50%, 0);
      }
    }
  }

  &:active {
    background: color-with-opacity(var(--primary-light), 0.5);

    img {
      transform: scale(0.95);
    }
  }

  img {
    width: 100%;
    height: 12rem;
    border-radius: var(--xl-radius);
    object-fit: cover;
    transition: var(--fast-transition-duration);
  }

  .meta {
    position: relative;
    width: 100%;
    height: 3.5rem;
  }

  h6,
  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: var(--fast-transition-duration);
  }

  h6 {
    top: 0.25rem;
    transform: translateX(-50%);

    @include medium-screen {
      top: 0;
    }
  }

  p {
    bottom: 0;
    line-height: var(--label-line-height);
    font-size: var(--label-font-size);
    transition: var(--fast-transition-duration);
  }
}
</style>
