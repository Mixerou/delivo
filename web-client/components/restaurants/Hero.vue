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
  margin: 2rem auto;

  @include medium-screen {
    height: 20rem;
    margin: 0 auto;
  }
}
</style>
