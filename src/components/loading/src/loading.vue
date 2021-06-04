<template>
  <div class="w-loading">
    <slot/>
    <transition name="w-opacity-fade">
      <div class="w-loading__inner" v-if="loading" :style="{background,color}">
        <template v-if="$slots['loadBox']">
          <slot name="loadBox"/>
        </template>
        <template v-else>
          <w-icon class="w-loading__icon" name="loader"/>
          <p v-if="text">{{text}}</p>
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "w-loading",
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default: '加载中...'
      },
      background:{
        type:String,
        default:'rgba(255,255,255,.82)'
      },
      color:{
        type:String
      }
    }
  }
</script>
