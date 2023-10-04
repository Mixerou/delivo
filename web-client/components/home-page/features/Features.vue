<script setup lang="ts">
import IconAwardStar from 'assets/icons/award-star.svg'
import IconSmartphone from 'assets/icons/smartphone.svg'
import IconFlashOn from 'assets/icons/flash-on.svg'

const { t } = useI18n()
</script>

<template>
  <section>
    <h2>{{ t('heading') }}</h2>
    <div class="cards">
      <HomePageFeaturesCard class="card">
        <template #icon>
          <IconSmartphone />
        </template>
        <template #name>{{ t('features.usage.name') }}</template>
        <template #description
          >Lorem ipsum dolor sit amet consectetur. Adipiscing in malesuada
          rhoncus tortor egestas iaculis felis interdum nec.</template
        >
      </HomePageFeaturesCard>
      <HomePageFeaturesCard class="card">
        <template #icon>
          <IconFlashOn />
        </template>
        <template #name>{{ t('features.time.name') }}</template>
        <template #description
          >Lorem ipsum dolor sit amet consectetur. Nibh morbi a feugiat nec
          nascetur.</template
        >
      </HomePageFeaturesCard>
      <HomePageFeaturesCard class="card">
        <template #icon>
          <IconAwardStar />
        </template>
        <template #name>{{ t('features.quality.name') }}</template>
        <template #description
          >Lorem ipsum dolor sit amet consectetur. Duis tristique suspendisse a
          quam at tellus etiam at suspendisse.</template
        >
      </HomePageFeaturesCard>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @include default-widths;
  margin: 0 auto;

  .cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    @include xxl-screen {
      flex-direction: row;
      gap: 0;
    }

    .card {
      width: 100%;
    }
  }
}
</style>

<i18n lang="json">
{
  "en-GB": {
    "heading": "Why Delivo?",
    "features": {
      "usage": {
        "name": "Easy To Use",
        "description": ""
      },
      "time": {
        "name": "Fastest Delivery",
        "description": ""
      },
      "quality": {
        "name": "Best Quality",
        "description": ""
      }
    }
  },
  "ru-RU": {
    "heading": "Почему Delivo?",
    "features": {
      "usage": {
        "name": "Легко использовать",
        "description": ""
      },
      "time": {
        "name": "Очень быстрая доставка",
        "description": ""
      },
      "quality": {
        "name": "Лучшее качество",
        "description": ""
      }
    }
  }
}
</i18n>
