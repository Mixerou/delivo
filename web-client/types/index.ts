export type Multilingual<T> = {
  enGb: T
  ruRu: T
}

export function parseMultilingual<T>(object: Multilingual<T>): T {
  const { locale } = useI18n()

  switch (locale.value) {
    case 'ru-RU':
      return object.ruRu
    default:
      return object.enGb
  }
}
