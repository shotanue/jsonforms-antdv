<template>
  <span>{{ text }}</span>
  <JsonForms />
</template>

<script lang="ts" setup>
  import JsonForms from './JsonForms.vue';
  const text = 'hello world';
</script>
