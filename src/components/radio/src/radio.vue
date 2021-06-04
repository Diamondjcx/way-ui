<template>
  <label class="w-radio" ref="wRadio" :class="{'is-checked':(checked || model === label), 'is-disabled': disabled}">
    <span class="w-radio-item">
      <span class="w-radio-input">
        <span class="w-radio-inner"></span>
        <input
        :disabled="disabled"
        class="w-radio-original"
        @change="handleChange"
        :value="label"
        v-model="model"
        type="radio"
        aria-hidden="true"
        :name="name"
        tabindex="-1"
        />
      </span>
      <template v-if="showLabel">
        <span class="w-radio-label" v-if="$slots.default"><slot></slot></span>
        <span class="w-radio-label" v-else>{{label}}</span>
      </template>
    </span>
  </label>
</template>

<script>
  export default {
    name: "w-radio",
    props:{
      value: {},
      label: {},
      checked:{
        type:Boolean,
        default:false
      },
      name:String,
      showLabel:{
        type:Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
    },
    computed:{
      model: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    },
    methods:{
      handleChange(){
        this.$nextTick(() => {
          this.$emit('change', this.model);
        })
      }
    }
  }
</script>
