<template>
  <div class="w-switch" ref="wSwitch" :class="{'is-checked':model}">
    <label class="w-switch-inner">
      <input class="w-switch-input" @change="handleChange" :value="label" v-model="model"  type="checkbox" aria-hidden="true" :name="name" tabindex="-1"/>
      <span v-if="model">开</span>
      <span v-else>关</span>
    </label>
    <span class="w-switch-label" v-if="$slots.default"><slot></slot></span>
    <span class="w-switch-label" v-else>{{label}}</span>
  </div>
</template>

<script>
  export default {
    name: "w-switch",
    props:{
      value: Boolean,
      label: {},
      name:String
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
