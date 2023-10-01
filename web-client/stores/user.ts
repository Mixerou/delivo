export const useUserStore = definePiniaStore('user', () => {
  const likedRestaurantIds: Ref<number[]> = ref([])
  const likedProductIds: Ref<number[]> = ref([])
  const productIdsInCart: Ref<number[]> = ref([])

  return { likedRestaurantIds, likedProductIds, productIdsInCart }
})
