<template lang="pug">
header.app__header
  Header
nav.app__nav
  MobileNav
main.app__main
  router-view
.svgsprites
  include ./assets/sprite-icons.svg
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Header from '@/components/layout/Header.vue';
import MobileNav from '@/components/layout/MobileNav.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    MobileNav,
  },
});
</script>

<style lang="scss">
.svgsprites{
  display: none
}
</style>