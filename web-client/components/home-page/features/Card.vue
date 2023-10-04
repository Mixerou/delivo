<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="icon">
      <slot name="icon" />
    </div>
    <h4>
      <slot name="name" />
    </h4>
    <p>
      <slot name="description" />
    </p>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    border-radius: var(--full-radius);
    background: var(--primary-light);

    :deep(svg) {
      width: 2rem;
      fill: var(--primary);
    }
  }

  p {
    width: 24rem;
    max-width: 100%;
  }
}
</style>
