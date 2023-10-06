<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section>
    <h3>{{ t('ourHistory.heading') }}</h3>
    <p>{{ t('ourHistory.paragraph') }}</p>
    <ol>
      <li>{{ t('ourHistory.list.first') }}</li>
      <li>{{ t('ourHistory.list.second') }}</li>
      <li>{{ t('ourHistory.list.third') }}</li>
    </ol>
    <h3>{{ t('features.heading') }}</h3>
    <p>{{ t('features.paragraphs.first') }}</p>
    <ul>
      <li>{{ t('features.list.first') }}</li>
      <li>{{ t('features.list.second') }}</li>
      <li>{{ t('features.list.third') }}</li>
    </ul>
    <p>
      {{ t('features.paragraphs.second') }}
      <br />
      {{ t('features.paragraphs.third') }}
    </p>
    <h3>{{ t('thanks.heading') }}</h3>
    <video
      autoplay
      muted
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
    />
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @include default-widths;
  margin: 0 auto;

  video {
    height: 28rem;
    object-fit: cover;
  }
}
</style>

<i18n lang="json">
{
  "en-GB": {
    "ourHistory": {
      "heading": "Our History",
      "paragraph": "Our story is divided into three points:",
      "list": {
        "first": "Our journey began in 2020 with a dream of creating a service that would help people enjoy their favorite foods without having to leave the house.",
        "second": "Since then, we've grown into the largest food delivery network serving thousands of customers every day.",
        "third": "Today, we are proud to offer a wide selection of food from the city's best restaurants right to your doorstep."
      }
    },
    "features": {
      "heading": "Why Choose Us?",
      "paragraphs": {
        "first": "We believe that quality, speed and great service is what makes us the best choice for food delivery:",
        "second": "We care about every customer and strive to provide you with the best food ordering experience possible.",
        "third": "Thank you for choosing our company!"
      },
      "list": {
        "first": "We carefully select our partner restaurants and regularly check the quality of the food.",
        "second": "We understand that time is precious, so we strive to deliver your order as quickly as possible.",
        "third": "Our support team is always available to help you with any questions or concerns you may have."
      }
    },
    "thanks": {
      "heading": "Thank You For Staying With Us!"
    }
  },
  "ru-RU": {
    "ourHistory": {
      "heading": "Наша история",
      "paragraph": "Наша история делится на три пункта:",
      "list": {
        "first": "Наше путешествие началось в 2020 году с мечты о создании сервиса, который поможет людям наслаждаться любимой едой без необходимости выходить из дома.",
        "second": "С тех пор мы выросли в крупнейшую сеть доставки еды, обслуживающую тысячи клиентов каждый день.",
        "third": "Сегодня мы гордимся тем, что предлагаем широкий выбор блюд из лучших ресторанов города прямо на ваш порог."
      }
    },
    "features": {
      "heading": "Почему выбирают нас?",
      "paragraphs": {
        "first": "Мы верим, что качество, скорость и отличный сервис - это то, что делает нас лучшим выбором для доставки еды:",
        "second": "Мы заботимся о каждом клиенте и стремимся предоставить вам лучший опыт заказа еды.",
        "third": "Благодарим вас за выбор нашей компании!"
      },
      "list": {
        "first": "Мы тщательно отбираем рестораны-партнеры и регулярно проверяем качество еды.",
        "second": "Мы понимаем, что время - это ценность, поэтому мы стремимся доставить ваш заказ как можно быстрее.",
        "third": "Наша команда поддержки всегда готова помочь вам с любыми вопросами или проблемами."
      }
    },
    "thanks": {
      "heading": "Спасибо, что остётесь с нами!"
    }
  }
}
</i18n>
