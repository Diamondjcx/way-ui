<template>
  <section
    :class="[
        'w-layout',
        isVertical && 'is-vertical',
        ]">
    <slot/>
  </section>
</template>
<script>
  export default {
    name: 'w-layout',
    components: {},
    props: {
      direction: String
    },
    computed: {
      isVertical() {
        // 垂直排列 flex  column
        if (this.direction === 'vertical') {
          return true;
        } else if (this.direction === 'horizontal') {
          return false;
        }
        // 插槽 有header或footer时 垂直排列
        return this.$slots && this.$slots.default
          ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === 'w-header' || tag === 'w-footer';
          })
          : false;
      }
    },
    watch: {},
    methods: {},
  }
</script>
