<script setup lang="ts">
import { Restaurant } from '~/models/restaurant'

defineProps({
  restaurant: {
    type: Object as PropType<null | Restaurant>,
    required: true,
  },
})

const isLogoLoaded = ref(false)
</script>

<template>
  <section>
    <div class="container">
      <div class="left-side">
        <TransitionGroup enter-from-class="hide" leave-to-class="hide">
          <div key="skeletons" class="skeletons">
            <div v-if="restaurant === null" class="name skeleton" />
            <div v-if="restaurant === null" class="description skeleton" />
            <div v-if="restaurant === null" class="description skeleton" />
          </div>
          <h1 v-if="restaurant !== null" key="name" class="name">
            {{ restaurant.localedName }}
          </h1>
          <p v-if="restaurant !== null" key="description" class="description">
            {{ restaurant.localedDescription }}
          </p>
          <RestaurantNavbar
            v-if="restaurant !== null"
            id="restaurant-hero-navbar"
            key="navbar"
            class="navbar"
          />
        </TransitionGroup>
      </div>
      <div class="right-side">
        <img
          :class="{ hide: !isLogoLoaded }"
          :src="`/fake-cdn/logos/${restaurant?.logoId}.webp`"
          :alt="restaurant?.localedName"
          @load="isLogoLoaded = true"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  align-items: center;
  width: calc(100% - 0.5rem * 2);
  margin: var(--mobile-hero-margin);
  padding: 1rem 0;
  border-radius: var(--xl-radius);
  background: var(--primary-light);
  transition: var(--fast-transition-duration);

  @include medium-screen {
    width: calc(100% - 3rem * 2);
    height: var(--default-hero-height);
    margin: var(--default-hero-margin);
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: calc(100% - 0.5rem * 2);
    margin: 0 auto;

    @include medium-screen {
      flex-direction: row;
      justify-content: space-between;
      gap: 0;
      width: calc(100% - 2rem);
    }

    @include large-screen {
      @include default-widths;
    }

    .left-side,
    .right-side {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }

    .left-side {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;
      width: 100%;
      min-height: 10rem;

      @include medium-screen {
        gap: 1rem;
        min-height: 0;
      }

      @include xl-screen {
        align-items: flex-start;
      }

      .name,
      .description {
        text-align: center;
        transition: var(--fast-transition-duration);

        @include xl-screen {
          text-align: left;
        }
      }

      .skeletons {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        width: 100%;

        .skeleton {
          margin: 0 auto;
          border-radius: var(--default-radius);

          @include medium-screen {
            margin: unset;
          }

          &.name {
            width: 8rem;
            height: 4rem;
            margin-bottom: 0.75rem;

            @include medium-screen {
              margin-bottom: 1rem;
            }
          }

          &.description {
            width: 90%;
            height: 1.5rem;

            @include medium-screen {
              width: 100%;
            }
          }
        }
      }

      .navbar {
        transition: var(--fast-transition-duration);
      }
    }

    .right-side {
      img {
        height: 8rem;
        object-fit: contain;
        transition: var(--fast-transition-duration);

        @include medium-screen {
          height: 14rem;
        }
      }
    }
  }
}

.hide {
  opacity: 0;
  animation: none;
}
</style>
