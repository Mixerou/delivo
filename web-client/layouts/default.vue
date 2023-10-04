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
  gap: 4rem;
  width: 100vw;
  @include dvh(height, 100);
  overflow-y: scroll;

  main,
  :deep(.page) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
}
</style>
