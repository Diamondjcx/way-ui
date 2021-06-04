<template>
  <span :class="[
      'w-tag',
       type ? 'w-tag--' + type : '',
       size ? 'w-tag--' + size : '',
  ]">
    <slot/>
    <i v-if="closable" class="w-tag-close w-icon-x" @click.stop="handleClose"/>
  </span>
</template>

<script>
  export default {
    name: "w-tag",
    components: {
    },
    props:{
        type: {
            type: String,
            default: 'default'
        },
        size:String,
        closable: {
          type: Boolean,
          default: false
        },
    },
    computed:{

    },
    methods: {
      handleClose() {
        this.$emit('close', '');
      }
    },
  }
</script>
