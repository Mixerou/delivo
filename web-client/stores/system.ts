export const useSystemStore = definePiniaStore('system', () => {
  const i18n = useI18n()
  const localeCookie = useCookie('locale', {
    expires: new Date(Date.now() * 2),
  })

  const locale = ref('')
  const selectedProductCategoryId: Ref<null | string> = ref(null)
  const primaryColor: Ref<number> = ref(5604982)
  const lightPrimaryColor: Ref<number> = ref(15132893)
  const textColor: Ref<number> = ref(5604982)

  function setLocale(code: string) {
    localeCookie.value = code
    locale.value = code
    i18n.locale.value = code
  }

  function setSelectedProductCategoryId(id: string) {
    selectedProductCategoryId.value = id
  }

  function resetSelectedProductCategoryId() {
    selectedProductCategoryId.value = null
  }

  function setColors(primary: number, lightPrimary: number, text: number) {
    primaryColor.value = primary
    lightPrimaryColor.value = lightPrimary
    textColor.value = text
  }

  function resetColors() {
    primaryColor.value = 5604982
    lightPrimaryColor.value = 15132893
    textColor.value = 5604982
  }

  return {
    locale,
    selectedProductCategoryId,
    primaryColor,
    lightPrimaryColor,
    textColor,
    setLocale,
    setSelectedProductCategoryId,
    resetSelectedProductCategoryId,
    setColors,
    resetColors,
  }
})
