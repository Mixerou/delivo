<script setup lang="ts">
import fakeRestaurants from 'assets/fake-db/restaurants.json'

definePageMeta({
  validate: route => {
    return /^\d+$/.test(route.params.restaurantId.toString())
  },
})

const nuxtApp = useNuxtApp()
const route = useRoute()
const dataStore = useDataStore()
const systemStore = useSystemStore()

if (nuxtApp.ssrContext) {
  if (
    fakeRestaurants.find(
      restaurant => restaurant.id === route.params.restaurantId.toString()
    ) === undefined
  ) {
    throw showError({ statusCode: 404, statusMessage: 'Page not found' })
  }
}

const isHeroNavbarVisible = ref(true)

const restaurant = computed(() =>
  dataStore.findRestaurant(route.params.restaurantId.toString())
)

const onScroll = (_event: Event) => {
  const rect = document
    .querySelector('#restaurant-hero-navbar')
    ?.getBoundingClientRect()

  if (rect === undefined) return

  isHeroNavbarVisible.value =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
}

onMounted(() => {
  if (dataStore.restaurants === null) dataStore.retrieveRestaurants()
  if (restaurant.value === undefined)
    throw showError({ statusCode: 404, statusMessage: 'Page not found' })

  systemStore.setColors(
    restaurant.value.primaryColor,
    restaurant.value.lightPrimaryColor,
    restaurant.value.textColor
  )

  document
    .querySelector('#default-layout')
    ?.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  document
    .querySelector('#default-layout')
    ?.removeEventListener('scroll', onScroll)
  systemStore.resetSelectedProductCategoryId()
  systemStore.resetColors()
})
</script>

<template>
  <div class="page">
    <RestaurantHero
      :restaurant="restaurant === undefined ? null : restaurant"
    />
    <RestaurantMenu />
    <Transition enter-from-class="hide" leave-to-class="hide">
      <div v-if="!isHeroNavbarVisible" class="navbar">
        <RestaurantNavbar />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 1rem;
  left: 50%;
  padding: 0.5rem 1rem;
  border-radius: var(--large-radius);
  box-shadow: var(--default-shadow);
  background: var(--primary-light);
  transform: translateX(-50%);
  transition: var(--default-transition);

  &.hide {
    transform: translate(-50%, calc(-100% - 4rem));
  }
}
</style>
