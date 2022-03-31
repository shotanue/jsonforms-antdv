<script lang="ts" setup>
  import type { FormItemProps } from 'ant-design-vue';
  interface Props {
    formItemBind: FormItemProps;
  }
  const props = defineProps<Props>();
</script>

<template>
  <a-form-item v-bind="props.formItemBind">
    <slot />
  </a-form-item>
</template>
