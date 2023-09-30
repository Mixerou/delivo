<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <h1>{{ t('heading') }}</h1>
</template>

<style scoped lang="scss"></style>

<i18n lang="json">
{
  "en-GB": {
    "heading": "Home Page"
  },
  "ru-RU": {
    "heading": "Домашняя страница"
  }
}
</i18n>
