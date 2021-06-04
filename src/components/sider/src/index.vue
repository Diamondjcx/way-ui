

<template>
  <aside class="w-sider" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'w-sider',
    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
