<script setup lang="ts"></script>

<template>
  <div id="default-layout">
    <div class="top">
      <Header />
      <main>
        <NuxtPage />
      </main>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
#default-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  @include dvh(height, 100);

  main {
    height: 100%;
  }
}
</style>
