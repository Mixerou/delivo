export const useSystemStore = definePiniaStore('system', () => {
  const localeCookie = useCookie('locale', {
    expires: new Date(Date.now() * 2),
  })

  const locale = ref('')

  function setLocale(code: string) {
    localeCookie.value = code
    locale.value = code
  }

  return { locale, setLocale }
})
