import { Multilingual, parseMultilingual } from '~/types'

export class ProductCategory {
  id: string
  restaurantId: string
  name: string | Multilingual<string>

  constructor(
    id: string,
    restaurantId: string,
    name: string | Multilingual<string>
  ) {
    this.id = id
    this.restaurantId = restaurantId
    this.name = name
  }

  get localedName(): string {
    if (typeof this.name === 'string') return this.name

    return parseMultilingual(this.name)
  }
}
