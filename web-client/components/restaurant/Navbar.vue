<script setup lang="ts">
import { ProductCategory } from '~/models/productCategory'

const route = useRoute()
const dataStore = useDataStore()
const systemStore = useSystemStore()
const { t } = useI18n()

const categories: Ref<undefined | ProductCategory[]> = computed(() =>
  dataStore.findProductCategoriesByRestaurantId(
    route.params.restaurantId.toString()
  )
)

const scroll = (categoryId: string) => {
  setTimeout(() => {
    try {
      document
        .querySelector(`#category-${categoryId}`)
        ?.scrollIntoView({ behavior: 'smooth' })
    } catch (e) {}
  }, 10)
}

onMounted(() => {
  if (dataStore.productCategories === null)
    dataStore.retrieveProductCategories()
  if (
    categories.value !== undefined &&
    categories.value.length !== 0 &&
    systemStore.selectedProductCategoryId === null
  )
    systemStore.setSelectedProductCategoryId(categories.value[0].id)
})
</script>

<template>
  <nav>
    <DelivoButton
      v-if="categories === undefined || categories.length === 0"
      size="small"
      disabled
      outlined
    >
      {{ t('nothingToOrder') }}
    </DelivoButton>
    <DelivoButton
      v-for="category in categories"
      v-else
      :key="category.id"
      :outlined="systemStore.selectedProductCategoryId !== category.id"
      :to="`#category-${category.id}`"
      size="small"
      @click="scroll(category.id)"
    >
      {{ category.localedName }}
    </DelivoButton>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  gap: 1rem;
}
</style>

<i18n lang="json">
{
  "en-GB": {
    "nothingToOrder": "There's nothing to order from this restaurant yet"
  },
  "ru-RU": {
    "nothingToOrder": "В этом ресторане пока нечего заказывать"
  }
}
</i18n>
