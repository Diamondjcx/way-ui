<template>
  <div class="w-checkbox-group">
    <slot :checkList="value" :isGroup="true"/>
  </div>
</template>

<script>
  export default {
    name: "w-checkbox-group",
    props:{
      value: Array,
    }
  }
</script>
