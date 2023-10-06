<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section>
    <h1>{{ $t('aboutUs') }}</h1>
    <em style="font-weight: 600">{{ t('description') }}</em>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  @include default-widths;
  margin: var(--mobile-hero-margin);

  @include medium-screen {
    height: var(--default-hero-height);
    margin: var(--default-hero-margin);
  }
}
</style>

<i18n lang="json">
{
  "en-GB": {
    "description": "We are a Food Delivery Company and our mission is to make your life easier and tastier."
  },
  "ru-RU": {
    "description": "Мы - Компания по доставке еды, и наша миссия - делать вашу жизнь проще и вкуснее."
  }
}
</i18n>
