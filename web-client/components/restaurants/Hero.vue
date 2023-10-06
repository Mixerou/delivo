<script setup lang="ts"></script>

<template>
  <section>
    <h1>{{ $t('restaurants') }}</h1>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  align-items: center;
  @include default-widths;
  margin: var(--mobile-hero-margin);

  @include medium-screen {
    height: var(--default-hero-height);
    margin: var(--default-hero-margin);
  }
}
</style>
