<script setup lang="ts">
import imageHomePageHeroTopPlateUrl from 'assets/images/home-page/hero-plate-top.webp?url'
import imageHomePageHeroMiddlePlateUrl from 'assets/images/home-page/hero-plate-middle.webp?url'
import imageHomePageHeroBottomPlateUrl from 'assets/images/home-page/hero-plate-bottom.webp?url'

const canLoadImages = ref(false)
const isTopPlateImageLoaded = ref(false)
const isMiddlePlateImageLoaded = ref(false)
const isBottomPlateImageLoaded = ref(false)

onMounted(() => (canLoadImages.value = true))
</script>

<template>
  <svg viewBox="0 0 522 886" xmlns="http://www.w3.org/2000/svg">
    <g class="top-meteor">
      <circle cx="151.494" cy="121.52" r="121.27" fill="#558676" />
      <path
        d="M30.2238 121.901C32.8931 240.883 191.917 342.704 263.993 378.551C263.993 378.551 145.773 308.764 250.645 190.926L30.2238 121.901Z"
        fill="#558676"
      />
      <image
        v-if="canLoadImages"
        :class="{ hide: !isTopPlateImageLoaded }"
        x="38"
        y="8"
        width="226.54"
        height="227.827"
        :href="imageHomePageHeroTopPlateUrl"
        @load="isTopPlateImageLoaded = true"
      />
    </g>
    <g class="middle-meteor">
      <circle cx="137.827" cy="544.084" r="137.621" fill="#567D4F" />
      <path
        d="M346.124 285C346.124 285 409.165 603.438 230.759 442.603L183.403 673.888C439.608 596.029 346.124 285 346.124 285Z"
        fill="#567D4F"
      />
      <image
        v-if="canLoadImages"
        :class="{ hide: !isMiddlePlateImageLoaded }"
        x="8"
        y="413"
        width="259.24"
        height="261.265"
        :href="imageHomePageHeroMiddlePlateUrl"
        @load="isMiddlePlateImageLoaded = true"
      />
    </g>
    <g class="bottom-meteor">
      <circle cx="412.339" cy="830.835" r="54.9147" fill="#558676" />
      <path
        d="M289.925 394.568C629.709 584.482 517.21 828.929 440.94 877.742L386.788 782.404C647.633 645.879 289.925 394.568 289.925 394.568Z"
        fill="#558676"
      />
      <image
        v-if="canLoadImages"
        :class="{ hide: !isBottomPlateImageLoaded }"
        x="365.73"
        y="784"
        width="93.83"
        height="93.83"
        :href="imageHomePageHeroBottomPlateUrl"
        @load="isBottomPlateImageLoaded = true"
      />
    </g>
  </svg>
</template>

<style scoped lang="scss">
image {
  transition: var(--fast-transition-duration);

  &.hide {
    opacity: 0;
  }
}
</style>
