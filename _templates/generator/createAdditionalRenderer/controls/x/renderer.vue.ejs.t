---
to: src/renderers/additional/<%= name %>AdditionalRenderer/<%= name %>AdditionalRenderer.vue
---
<template>
  <section>
    implement here
  </section>
</template>

<script lang="ts" setup>
  import { DispatchRenderer, rendererProps } from '@jsonforms/vue';
  import type {} from '@jsonforms/core';

  const props = defineProps({
    ...rendererProps<{}>(),
  });
</script>
