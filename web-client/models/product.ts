import { Multilingual, parseMultilingual } from '~/types'

export class Product {
  id: string
  restaurantId: string
  name: string | Multilingual<string>
  description: string | Multilingual<string>
  categoryIds: string[]
  logoId: string
  price: Multilingual<string>

  constructor(
    id: string,
    restaurantId: string,
    name: string | Multilingual<string>,
    description: string | Multilingual<string>,
    categoryIds: string[],
    logoId: string,
    price: Multilingual<string>
  ) {
    this.id = id
    this.restaurantId = restaurantId
    this.name = name
    this.description = description
    this.categoryIds = categoryIds
    this.logoId = logoId
    this.price = price
  }

  get localedName(): string {
    if (typeof this.name === 'string') return this.name

    return parseMultilingual(this.name)
  }

  get localedDescription(): string {
    if (typeof this.description === 'string') return this.description

    return parseMultilingual(this.description)
  }

  get localedPrice(): string {
    return parseMultilingual(this.price)
  }
}
