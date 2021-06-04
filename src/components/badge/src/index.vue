<template>
  <span class="w-badge">
    <slot/>
    <sup v-if="visible" class="w-badge__inner" :class="{'is-dot':dot}" :style="{backgroundColor:color}">
      <span v-if="!dot">{{val}}</span>
      <span v-if="!dot && max && value > max">+</span>
    </sup>
  </span>
</template>

<script>
  export default {
    name: "w-badge",
    props: {
      value: [String, Number],
      max: Number,
      visible: {
        type: Boolean,
        default: true
      },
      color: String,
      dot: {
        type:Boolean,
        default: false
      }
    },
    computed: {
      val() {
        if (typeof(this.value) === 'number') {
          if (this.max && this.value > this.max) {
            return this.max
          } else {
            return this.value
          }
        } else {
          return this.value
        }
      }
    }
  }
</script>
