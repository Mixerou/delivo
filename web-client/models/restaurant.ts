import { Multilingual, parseMultilingual } from '~/types'

export class Restaurant {
  id: string
  name: string | Multilingual<string>
  slogan: string | Multilingual<string>
  description: string | Multilingual<string>
  logoId: string
  coverId: string
  primaryColor: number
  lightPrimaryColor: number

  constructor(
    id: string,
    name: string | Multilingual<string>,
    slogan: string | Multilingual<string>,
    description: string | Multilingual<string>,
    logoId: string,
    coverId: string,
    primaryColor: number,
    lightPrimaryColor: number
  ) {
    this.id = id
    this.name = name
    this.slogan = slogan
    this.description = description
    this.logoId = logoId
    this.coverId = coverId
    this.primaryColor = primaryColor
    this.lightPrimaryColor = lightPrimaryColor
  }

  get localedName(): string {
    if (typeof this.name === 'string') return this.name

    return parseMultilingual(this.name)
  }

  get localedSlogan(): string {
    if (typeof this.slogan === 'string') return this.slogan

    return parseMultilingual(this.slogan)
  }

  get localedDescription(): string {
    if (typeof this.description === 'string') return this.description

    return parseMultilingual(this.description)
  }
}
