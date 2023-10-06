<script setup lang="ts">
const { locale, locales, t } = useI18n()
const systemStore = useSystemStore()
const localeCookie = useCookie('locale', {
  expires: new Date(Date.now() * 2),
})

const getClientLocale = () => {
  if (
    localeCookie.value === undefined ||
    localeCookie.value === null ||
    typeof localeCookie.value !== 'string'
  ) {
    localeCookie.value = useBrowserLocale()
  }

  let clientLocale = localeCookie.value?.includes('-')
    ? locales.value.find(locale =>
        typeof locale !== 'string'
          ? locale.code === localeCookie.value
          : undefined
      )
    : locales.value.find(locale =>
        typeof locale !== 'string'
          ? locale.code.startsWith(String(localeCookie.value))
          : undefined
      )

  if (clientLocale === undefined)
    clientLocale = locales.value.find(element =>
      typeof element !== 'string'
        ? element.code === locale.value
        : locales.value[0]
    )

  return clientLocale
}

const clientLocale = getClientLocale()

systemStore.setLocale(
  typeof clientLocale === 'object' ? clientLocale.code : String(clientLocale)
)

watchEffect(() => {
  useHead({
    titleTemplate: title => (title ? `${title} - Delivo` : 'Delivo'),
    htmlAttrs: {
      lang: systemStore.locale,
    },
    meta: [
      {
        name: 'description',
        content: t('delivo.description.short'),
      },
    ],
  })
})

onMounted(() => {
  watchEffect(() => {
    const styleTag: undefined | HTMLStyleElement = Array.from(
      document.querySelectorAll('style')
    ).find((element: HTMLStyleElement) => element.innerHTML.includes('_colors'))

    if (styleTag === undefined) return

    const css = styleTag.innerHTML
    const primaryVariable = css.match(/--primary: ?#[a-fA-F0-9]{6}/)
    const lightPrimaryVariable = css.match(/--primary-light: ?#[a-fA-F0-9]{6}/)
    const textColorVariable = css.match(/--text-color: ?#[a-fA-F0-9]{6}/)

    if (
      primaryVariable === null ||
      lightPrimaryVariable === null ||
      textColorVariable === null
    )
      return

    styleTag.innerHTML = css
      .replace(
        primaryVariable[0],
        `--primary: #${systemStore.primaryColor.toString(16)}`
      )
      .replace(
        lightPrimaryVariable[0],
        `--primary-light: #${systemStore.lightPrimaryColor.toString(16)}`
      )
      .replace(
        textColorVariable[0],
        `--text-color: #${systemStore.textColor.toString(16)}`
      )
  })
})
</script>

<template>
  <div id="app-container">
    <NuxtLayout />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: 'Nunito Sans', sans-serif;
}

body {
  width: 100vw;
  @include dvh(height, 100);
  scrollbar-width: none;
  background: var(--white);
  line-height: var(--body-line-height);
  font-size: var(--body-font-size);
  font-weight: 400;
  color: var(--black);
  transition: var(--default-transition);
  transition-property: background-color, color;

  &::-webkit-scrollbar {
    display: none;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
}

h1 {
  line-height: 4.5rem;
  font-size: 3.25rem;
  font-weight: 900;

  @include medium-screen {
    line-height: 5rem;
    font-size: 3.75rem;
  }
}

h2 {
  line-height: 3rem;
  font-size: 2.25rem;

  @include medium-screen {
    line-height: 3.5rem;
    font-size: 2.5rem;
  }
}

h3 {
  line-height: 3rem;
  font-size: 2rem;

  @include medium-screen {
    line-height: 3rem;
    font-size: 2.25rem;
  }
}

h4 {
  line-height: 2.5rem;
  font-size: 1.75rem;

  @include medium-screen {
    line-height: 3rem;
    font-size: 2rem;
  }
}

h5 {
  line-height: 2rem;
  font-size: 1.25rem;

  @include medium-screen {
    line-height: 2rem;
    font-size: 1.5rem;
  }
}

h6 {
  line-height: 1.5rem;
  font-size: 1rem;

  @include medium-screen {
    line-height: 2rem;
    font-size: 1.25rem;
  }
}

strong {
  font-weight: 600;
}

#app-container {
  width: 100%;
  height: 100%;
}

.skeleton {
  background: #d9d9d9;
  animation: skeleton calc(var(--default-transition-duration) * 2) infinite;
}

@keyframes skeleton {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
}
</style>
