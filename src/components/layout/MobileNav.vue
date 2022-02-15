<template lang="pug">
router-link(:to="{name: 'Home'}") {{ $t('pages.Home') }}
router-link(:to="{name: 'PageNotFound'}") {{ $t('pages.PageNotFound') }}
router-link(:to="{name: 'PageForbidden'}") {{ $t('pages.PageForbidden') }}
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'Header',
});
</script>