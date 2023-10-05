<script setup lang="ts">
const dataStore = useDataStore()

onMounted(() => {
  if (dataStore.restaurants === null) dataStore.retrieveRestaurants()
})
</script>

<template>
  <div class="container">
    <Transition enter-from-class="hide" leave-to-class="hide">
      <div v-if="dataStore.restaurants == null" class="cards skeletons">
        <RestaurantsCardSkeleton
          v-for="restaurant in 3"
          :key="restaurant"
          class="card"
          :class="{ 'hide-on-mobile': restaurant !== 1 }"
        />
      </div>
      <div v-else class="cards">
        <RestaurantsCard
          v-for="restaurant in dataStore.restaurants"
          :key="restaurant.id"
          :restaurant="restaurant"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  @include default-widths;
  margin: 0 auto;

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    transition: var(--fast-transition-duration);

    @include medium-screen {
      justify-content: flex-start;
    }

    &.skeletons {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      @include large-screen {
        left: unset;
        transform: unset;
      }

      .hide-on-mobile {
        display: none;

        @include xl-screen {
          display: unset;
        }
      }
    }

    &.hide {
      opacity: 0;
    }
  }
}
</style>
