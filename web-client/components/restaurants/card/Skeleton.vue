<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="cover skeleton" />
    <div class="meta">
      <div class="name skeleton" />
      <div class="slogan skeleton" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 15.5rem;

  .cover {
    width: 100%;
    height: 12rem;
    border-radius: var(--xl-radius);
    object-fit: cover;
  }

  .meta {
    position: relative;
    width: 100%;
    height: 3.5rem;
  }

  .name,
  .slogan {
    position: absolute;
    left: 50%;
    height: 1.125rem;
    border-radius: var(--small-radius);
    transform: translateX(-50%);
    overflow: hidden;
  }

  .name {
    top: 0.75rem;
    width: 8rem;
  }

  .slogan {
    bottom: 0;
    width: 12rem;
  }
}
</style>
