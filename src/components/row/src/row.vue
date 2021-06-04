<template>
  <div class="w-row" :style="style">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "w-row",
    props: {
      gutter: Number,
      align: String,
      justify: String
    },
    computed: {
      style() {
        let style = {}
        if (this.gutter) {
          style.marginLeft = `-${this.gutter / 2}px`
          style.marginRight = `-${this.gutter / 2}px`
        }
        if (this.align) {
          style.alignItems = this.align
        }
        if (this.justify) {
          style.justifyContent = this.justify
        }
        return style
      }
    }
  }
</script>
