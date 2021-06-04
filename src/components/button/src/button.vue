<template>
    <button
      class="w-button"
      ref="wButton"
      @click="handleClick"
      :disabled="buttonDisabled"
      :class="[
        type ? 'w-button--' + type : '',
        size ? 'w-button--' + size : '',
        {
          'is-disabled':buttonDisabled,
          'is-round':round,
          'is-circle':circle,
          'is-full':full,
          'is-loading':loading
        }
      ]"
    >
      <template v-if="$slots.default">
        <span class="w-button__inner">
          <w-icon class="w-button__loading" v-if="loading" name="loader" rotate/>
          <slot/>
        </span>
      </template>
    </button>
</template>
<script>
  export default {
    name: 'w-button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      disabled: Boolean,
      size:{
        type:String,
        default: ''
      },
      round:Boolean,
      circle:Boolean,
      full:Boolean,
      loading:{
        type:Boolean,
        default:false
      }
    },
    computed: {
      buttonDisabled() {
        return this.disabled
      }
    },
    methods: {
      handleClick: function(e) {
        this.$emit('click', e)
      }
    }
  }
</script>
