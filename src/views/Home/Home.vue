<template lang="pug">
h1 {{ $t('pages.Home') }}
UILabel(:text="t('testLang')")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UILabel } from 'vue-components-ui';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Home',
  components: {
    UILabel,
  },
  setup() {
    const { t } = useI18n({
      messages: {
        ca: {
          testLang: 'Hola món des de UILabel'
        },
        en: {
          testLang: 'Hello world from UILabel'
        },
        es: {
          testLang: 'Hola mundo desde UILabel'
        },
      },
    });
    return { t };
  },
});
</script>

<style lang="sass">
</style>