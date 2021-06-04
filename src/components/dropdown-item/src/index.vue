<template>
  <div 
    :class="{'w-dropdown-item':true,'is-disabled' : disabled}"
    @click.stop="handleTrigger">
     <slot/>
  </div>
</template>

<script>
  export default {
    name: "w-dropdown-item",
    inject: {
      Dropdown: { default: "Dropdown" }
    },
    props:{
      value:String,
      disabled:Boolean
    },
    computed:{

    },
    methods:{
      handleTrigger(){
        if(!this.Dropdown.visible || this.disabled) return
        this.Dropdown.itemTrigger(this.value)
      }
    }
  }
</script>
