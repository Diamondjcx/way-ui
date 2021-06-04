<template>
  <div :class="{
          'w-input':true,
          'w-input-suffix':clearable
       }"
       ref="wInput">
    <input
      :disabled="disabled"
      :placeholder="placeholder"
      :class="{
        'w-input-inner':true,
        'is-disabled':disabled
      }"
      :autocomplete="autocomplete"
      :value="value"
      :readonly="readonly"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleChange"
    />
    <div v-if="clearable && value" class="w-input-clear" @click="handleClear">
      <w-icon name="x-circle"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "w-input",
    props: {
      value: {},
      placeholder: String,
      disabled: {
        type: Boolean,
        default: false
      },
      autocomplete: {
        type: String,
        default: 'on'
      },
      readonly: Boolean,
      clearable: Boolean
    },
    computed: {
      model: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    },
    watch: {},
    methods: {
      handleInput(event) {
        this.$emit('input', event.target.value);
      },
      handleChange(event) {
        this.$emit('input', event.target.value);
      },
      handleFocus(event) {
        this.$emit('input', event.target.value);
      },
      handleBlur(event) {
        this.$emit('input', event.target.value);
      },
      handleClear() {
        this.$emit('input', '');
      }
    }
  }
</script>
