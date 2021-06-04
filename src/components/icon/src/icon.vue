<template>
  <i :class="[`w-icon-${name}`,{'is-rotate':rotate}]"></i>
</template>

<script>
  export default {
    name: "wIcon",
    props:{
      name:String,
      rotate:{
        type:Boolean,
        default:false
      }
    }
  }
</script>
