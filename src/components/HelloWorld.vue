<template>
  <h1>Using components from vue-components-ui</h1>
  <span>version: @0.0.1</span>
  <p>
    <UILabel text="Hello world from UILabel"/>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UILabel } from 'vue-components-ui';

export default defineComponent({
  name: 'HelloWorld',
  components: {
    UILabel,
  },
});
</script>

<style>
</style>
