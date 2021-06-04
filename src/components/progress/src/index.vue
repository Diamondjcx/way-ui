<template>
  <div class="w-progress" :class="[type ? 'w-progress--' + type : '']">
    <div class="w-progress__outer" :style="{height: `${height}px`}">
      <div class="w-progress__inner" :style="{width:`${percentage}%`,backgroundColor:color}"></div>
    </div>
    <div :style="{width:labelWidth}" class="w-progress__label">
      <template v-if="$slots['label']">
        <slot name="label"/>
      </template>
      <template v-else>
        <span>{{`${percentage}%`}}</span>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "w-progress",
    props: {
      type: {
        type: String,
        default: ''
      },
      percentage: Number,
      color: String,
      height: Number,
      labelWidth: {
        type: String,
        default: 'auto'
      }
    },
    computed: {},
    created() {
      console.log(this.$slots)
    }
  }
</script>
