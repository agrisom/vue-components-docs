<template lang="pug">
h1 404
h2 {{ $t('error.404.title') }}
p {{ $t('error.404.hint') }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageNotFound',
});
</script>

<style lang="sass">
</style>