<template lang="pug">
h1 {{ $t('pages.Home') }}
UILabel(:text="t('testLang')" v-model:color="label.color")
UIIcon(name="home")
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Home',
  components: {
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
    const label = reactive({
      color: '#5bb9b2',
    });
    return { t, label };
  },
});
</script>

<style lang="sass">
.label
  $label-color: blue
</style>