<script setup lang="ts">
import { ProductCategory } from '~/models/productCategory'

const props = defineProps({
  category: {
    type: Object as PropType<null | ProductCategory>,
    required: true,
  },
})

const dataStore = useDataStore()

const products = computed(() =>
  props.category === null
    ? undefined
    : dataStore.findProductsByCategoryId(props.category.id)
)
</script>

<template>
  <div :id="`category-${category?.id}`" class="category">
    <h3>{{ category?.localedName }}</h3>
    <div v-if="products !== undefined" class="cards">
      <RestaurantMenuCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.category {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 8rem;
  }
}
</style>
