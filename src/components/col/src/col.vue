<template>
  <div :class="['w-col',classes]" :style="style">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "w-col",
    props:{
      span:{
        type:Number,
        default:0
      }
    },
    computed:{
      classes(){
        return `w-col-${this.span}`
      },
      gutter(){
        const parent = this.$parent
        return parent.gutter
      },
      style(){
        let style = {}
        if(this.gutter){
          style.paddingLeft = `${this.gutter/2}px`
          style.paddingRight = `${this.gutter/2}px`
        }
        return style
      }
    }
  }
</script>
