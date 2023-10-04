<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section>
    <div class="container">
      <div class="left-side">
        <div class="content">
          <h1>{{ $t('delivo.description.long') }}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet consequat magna
            tincidunt amet vivamus feugiat.
          </p>
          <DelivoInput :placeholder="t('input.placeholder')" />
          <div class="buttons">
            <DelivoButton expanded>{{ t('buttons.deliver') }}</DelivoButton>
            <span>{{ $t('or') }}</span>
            <DelivoButton expanded outlined>{{
              t('buttons.pickUp')
            }}</DelivoButton>
          </div>
        </div>
      </div>
      <div class="right-side">
        <HomePageHeroAbstraction class="abstraction" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  align-items: center;
  width: calc(100% - 0.5rem * 2);
  height: 48rem;
  min-height: calc(100vh - 6rem - 6rem - 1rem - 4rem);
  margin: 1rem auto 0;
  padding: 1rem 0;
  border-radius: var(--xl-radius);
  background: var(--primary-light);

  @include medium-screen {
    width: calc(100% - 3rem * 2);
    height: auto;
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 0.5rem * 2);
    margin: 0 auto;

    @include medium-screen {
      flex-direction: row;
      justify-content: space-between;
      width: calc(100% - 2rem);
    }

    @include large-screen {
      @include default-widths;
    }

    .left-side,
    .right-side {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }

    .left-side {
      align-items: center;

      @include xl-screen {
        align-items: flex-start;
      }
    }

    .right-side {
      display: none;

      @include xl-screen {
        display: flex;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
      width: 100%;
      max-width: 35.875rem;

      @include medium-screen {
        gap: 2rem;
      }

      h1,
      p {
        text-align: center;

        @include xl-screen {
          text-align: left;
        }
      }

      h1 {
        width: fit-content;
        text-wrap: balance;
      }

      p {
        width: 100%;
      }

      .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;

        @include medium-screen {
          flex-direction: row;
          gap: 2rem;
        }

        span {
          font-weight: 600;
          color: var(--text-color);
        }
      }
    }

    .abstraction {
      height: 36rem;
      max-height: 65vh;

      @include xl-screen {
        height: 40rem;
      }

      @include xxxl-screen {
        height: 56rem;
      }
    }
  }
}
</style>

<i18n lang="json">
{
  "en-GB": {
    "input": {
      "placeholder": "Find your address"
    },
    "buttons": {
      "deliver": "Deliver",
      "pickUp": "Pick Up"
    }
  },
  "ru-RU": {
    "input": {
      "placeholder": "Найди свой адрес"
    },
    "buttons": {
      "deliver": "Доставить",
      "pickUp": "Забрать лично"
    }
  }
}
</i18n>
