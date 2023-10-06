<script setup lang="ts">
import { ProductCategory } from '~/models/productCategory'

const route = useRoute()
const dataStore = useDataStore()
const systemStore = useSystemStore()

const categories: Ref<undefined | ProductCategory[]> = computed(() =>
  dataStore.findProductCategoriesByRestaurantId(
    route.params.restaurantId.toString()
  )
)

onMounted(() => {
  watchEffect(() => {
    if (route.hash === '') return
    systemStore.setSelectedProductCategoryId(route.hash.split('-')[1])
  })

  if (dataStore.productCategories === null)
    dataStore.retrieveProductCategories()
  if (dataStore.products === null) dataStore.retrieveProducts()

  setTimeout(() => {
    if (route.hash === '') return

    document.querySelector(route.hash)?.scrollIntoView({
      behavior: 'smooth',
    })
  }, 300)
})
</script>

<template>
  <section v-if="categories !== undefined">
    <RestaurantMenuCategory
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  @include default-widths;
  margin: 0 auto;
}
</style>
