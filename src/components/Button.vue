<template>
  <a-button>Test button</a-button>
</template>

<script lang="ts" setup>
  import { defineEmits } from 'vue';

  const onClick = () => {
    console.log('hoge');
  };
  const emit = defineEmits(['clicked']);
</script>
