<script setup lang="ts">
import { Product } from '~/models/product'

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
})

const { t } = useI18n()

const isImageLoaded = ref(false)
</script>

<template>
  <div class="card">
    <div class="top">
      <h5>{{ product.localedName }}</h5>
      <img
        :class="{ hide: !isImageLoaded }"
        :src="product.logoId"
        :alt="product.localedName"
        @load="isImageLoaded = true"
      />
    </div>
    <p class="description">{{ product.localedDescription }}</p>
    <div class="bottom">
      <p class="price">{{ product.localedPrice }}</p>
      <DelivoButton size="small" disabled outlined>{{
        t('button')
      }}</DelivoButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: calc(24rem - 1rem * 2);
  height: calc(16rem - 1rem * 2);
  padding: 1rem;
  border-radius: var(--xl-radius);
  background: var(--primary-light);

  .top {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 7rem;

    h5 {
      width: 15rem;
      text-align: center;
    }

    img {
      position: absolute;
      top: -3rem;
      right: -3rem;
      height: 10rem;
      object-fit: contain;
      transition: var(--fast-transition-duration);

      &.hide {
        opacity: 0;
        transform: scale(1.125);
      }
    }
  }

  .description {
    height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: var(--label-line-height);
    font-size: var(--label-font-size);
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      font-weight: 600;
    }
  }
}
</style>

<i18n lang="json">
{
  "en-GB": {
    "button": "Add to cart"
  },
  "ru-RU": {
    "button": "Добавить в корзину"
  }
}
</i18n>
