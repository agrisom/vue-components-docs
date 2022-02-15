<template lang="pug">
h1 Homepage
<UILabel text="Hello world from UILabel"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UILabel } from 'vue-components-ui';

export default defineComponent({
  name: 'Home',
  components: {
    UILabel,
  },
});
</script>

<style lang="sass">
</style>