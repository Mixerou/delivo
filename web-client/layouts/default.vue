<script setup lang="ts"></script>

<template>
  <div id="default-layout">
    <Header />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped lang="scss">
#default-layout {
  width: 100vw;
  height: 100%;

  main {
    height: 100%;
  }
}
</style>
