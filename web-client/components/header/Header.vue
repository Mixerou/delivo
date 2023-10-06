<script setup lang="ts">
import IconFavourite from 'assets/icons/favourite.svg'
import IconShoppingBag from 'assets/icons/shopping-bag.svg'

const userStore = useUserStore()

const isLogoAnimated = ref(false)

const onLogoClick = () => {
  isLogoAnimated.value = false

  setTimeout(() => (isLogoAnimated.value = true), 1)
}
</script>

<template>
  <header>
    <NuxtLink
      class="logo-container"
      :class="{ animated: isLogoAnimated }"
      to="/"
      @click="onLogoClick"
    >
      <DelivoLogo class="logo" />
      <p class="name">Delivo</p>
    </NuxtLink>
    <nav>
      <DelivoLink to="/restaurants">{{ $t('restaurants') }}</DelivoLink>
      <DelivoLink to="/company">{{ $t('aboutUs') }}</DelivoLink>
    </nav>
    <div class="buttons">
      <div class="button">
        <IconFavourite class="icon" />
      </div>
      <div class="button cart">
        <IconShoppingBag :key="`shopping-bag-icon`" class="icon" />
        <span class="number-of-products">
          {{ userStore.likedProductIds.length }}
        </span>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  --_padding-x: 1rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: calc(100% - var(--_padding-x) * 2);
  height: 6rem;
  padding: 0 var(--_padding-x);

  @include medium-screen {
    --_padding-x: 6rem;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    text-decoration: none;
    color: var(--black);
    transition: var(--fast-transition-duration);

    @include medium-screen {
      gap: 1rem;
    }

    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 0.8;

      .logo {
        transform: rotate(-22.5deg);
      }

      .name {
        transform: translateX(-0.25rem);
      }
    }

    &.animated {
      .logo {
        animation: logo-icon var(--default-transition);
      }

      .name {
        animation: logo-name var(--default-transition-duration);
      }
    }

    .logo {
      width: 3.25rem;
      transition: var(--fast-transition-duration);

      @include medium-screen {
        width: 4rem;
      }
    }

    .name {
      line-height: normal;
      font-size: 1.75rem;
      font-weight: 700;
      transition: var(--fast-transition-duration);

      @include medium-screen {
        font-size: 2rem;
      }
    }
  }

  // TODO: Adapt for mobile
  nav {
    display: none;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;

    @include large-screen {
      display: flex;
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 1rem;

    @include medium-screen {
      gap: 2rem;
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3.25rem;
      height: 3.25rem;
      border-radius: var(--full-radius);
      background: var(--primary);
      cursor: pointer;
      transition: var(--fast-transition-duration);

      @include medium-screen {
        width: 3.75rem;
        height: 3.75rem;
      }

      &:hover {
        background: color-with-opacity(var(--primary), 0.875);
      }

      &:active {
        background: color-with-opacity(var(--primary), 0.75);
      }

      .icon {
        width: 1.5rem;
        fill: var(--white);

        @include medium-screen {
          width: 1.75rem;
        }
      }

      &.cart {
        position: relative;

        &:hover {
          .icon {
            opacity: 0;
          }

          .number-of-products {
            opacity: 1;
          }
        }

        .icon,
        .number-of-products {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          transition: var(--fast-transition-duration);
        }

        .number-of-products {
          opacity: 0;
          color: var(--white);
        }
      }
    }
  }
}

@keyframes logo-icon {
  from {
    transform: rotate(-22.5deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes logo-name {
  from {
    transform: translateX(-0.25rem);
  }

  50% {
    transform: translateX(0.25rem);
  }

  to {
    transform: translateX(0);
  }
}
</style>
