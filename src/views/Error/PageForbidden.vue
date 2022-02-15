<template lang="pug">
h1 401
h2 {{ $t('error.401.title') }}
p {{ $t('error.401.hint') }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageForbidden',
});
</script>

<style lang="sass">
</style>