<script setup lang="ts">
const systemStore = useSystemStore()
const { locales } = useI18n()

const computedLocales = computed(() => {
  return locales.value.map(locale => {
    if (typeof locale === 'string') return { id: locale, value: locale }
    return { id: locale.code, value: locale.name || locale.code }
  })
})
</script>

<template>
  <footer>
    <div class="container">
      <p>Copyright © 2023 <strong>Mixerou</strong></p>
      <DelivoSelect
        :items="computedLocales"
        :selected-id="systemStore.locale"
        dropdown-direction="top"
        @update:selected-id="systemStore.setLocale"
      />
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  width: calc(100% - 1rem * 2);
  margin: 1rem auto;
  padding: 1rem 0;
  border-radius: var(--xl-radius);
  background: var(--primary-light);

  @include medium-screen {
    width: calc(100% - 3rem * 2);
    height: 6rem;
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    @include medium-screen {
      flex-direction: row;
      justify-content: space-between;
      width: calc(100% - 2rem);
    }

    @include large-screen {
      @include default-widths;
    }
  }
}
</style>
