<template>
  <label class="w-checkbox" ref="wCheckbox" :class="{'is-checked':model,'is-disabled':disabled,'is-indeterminate':indeterminate}">
   <span class="w-checkbox-item">
    <span class="w-checkbox-input">
      <span class="w-checkbox-inner"></span>
      <input class="w-checkbox-original" :disabled="disabled" @change="handleChange" :value="label" v-model="model"
             type="checkbox"
             aria-hidden="true" :name="name" tabindex="-1"/>
    </span>
     <template v-if="showLabel">
       <span class="w-checkbox-label" v-if="$slots.default"><slot></slot></span>
       <span class="w-checkbox-label" v-else>{{label}}</span>
     </template>
   </span>
  </label>
</template>

<script>
  export default {
    name: "w-checkbox",
    props: {
      value: Boolean,
      label: {},
      name: String,
      disabled: {
        type: Boolean,
        default: false
      },
      showLabel: {
        type: Boolean,
        default: true
      },
      indeterminate:{
        type:Boolean,
        default:false
      }
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
    methods: {
      handleChange() {
        if (this.disabled) return
        this.$nextTick(() => {
          this.$emit('change', this.model);
        })
      }
    }
  }
</script>
