import { Restaurant } from '~/models/restaurant'
import fakeRestaurants from 'assets/fake-db/restaurants.json'

export const useDataStore = definePiniaStore('data', () => {
  const restaurants: Ref<null | Restaurant[]> = ref(null)

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
          restaurant.lightPrimaryColor
        )
    )
  }

  function findRestaurant(id: string): undefined | Restaurant {
    if (restaurants.value === null) return undefined

    return restaurants.value.find(restaurant => restaurant.id === id)
  }

  return { restaurants, retrieveRestaurants, findRestaurant }
})
