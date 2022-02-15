<template lang="pug">
router-link(:to="{name: 'Home'}") Home
router-link(:to="{name: 'PageNotFound'}") PageNotFound
router-link(:to="{name: 'Forbidden'}") Forbidden
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'Header',
});
</script>