<template>
  <a-form-item v-bind="props.formItemBind">
    <slot />
  </a-form-item>
</template>

<script lang="ts" setup>
  import type { FormItemProps } from 'ant-design-vue';
  type Props = {
    formItemBind: FormItemProps;
  };
  const props = defineProps<Props>();
</script>
