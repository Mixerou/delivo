import { Restaurant } from '~/models/restaurant'
import { ProductCategory } from '~/models/productCategory'
import fakeRestaurants from 'assets/fake-db/restaurants.json'
import fakeProductCategories from 'assets/fake-db/product-categories.json'
import fakeProducts from 'assets/fake-db/products.json'
import { Product } from '~/models/product'

export const useDataStore = definePiniaStore('data', () => {
  const restaurants: Ref<null | Restaurant[]> = ref(null)
  const productCategories: Ref<null | ProductCategory[]> = ref(null)
  const products: Ref<null | Product[]> = ref(null)

  function retrieveRestaurants() {
    restaurants.value = fakeRestaurants.map(
      (restaurant: any) =>
        new Restaurant(
          restaurant.id,
          restaurant.name,
          restaurant.slogan,
          restaurant.description,
          restaurant.logoId,
          restaurant.coverId,
          restaurant.primaryColor,
          restaurant.lightPrimaryColor,
          restaurant.textColor
        )
    )
  }

  function retrieveProductCategories() {
    productCategories.value = fakeProductCategories.map(
      (productCategory: any) =>
        new ProductCategory(
          productCategory.id,
          productCategory.restaurantId,
          productCategory.name
        )
    )
  }

  function retrieveProducts() {
    products.value = fakeProducts.map(
      (product: any) =>
        new Product(
          product.id,
          product.restaurantId,
          product.name,
          product.description,
          product.categoryIds,
          product.logoId,
          product.price
        )
    )
  }

  function findRestaurant(id: string): undefined | Restaurant {
    if (restaurants.value === null) return undefined

    return restaurants.value.find(restaurant => restaurant.id === id)
  }

  function findProductCategoriesByRestaurantId(
    restaurantId: string
  ): undefined | ProductCategory[] {
    if (productCategories.value === null) return undefined

    return productCategories.value.filter(
      productCategory => productCategory.restaurantId === restaurantId
    )
  }

  function findProductsByCategoryId(categoryId: string): undefined | Product[] {
    if (products.value === null) return undefined

    return products.value.filter(product =>
      product.categoryIds.includes(categoryId)
    )
  }

  return {
    restaurants,
    productCategories,
    products,
    retrieveRestaurants,
    retrieveProductCategories,
    retrieveProducts,
    findRestaurant,
    findProductCategoriesByRestaurantId,
    findProductsByCategoryId,
  }
})
