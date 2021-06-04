<template>
  <div class="w-dropdown" ref="dropdown" >
    <slot />
    <slot name="menu"></slot>
  </div>
</template>

<script>
  // const trigger = ['hover','click']
  export default {
    name: "w-dropdown",
    provide() {
      return {
        Dropdown: this
      };
    },
    props: {
      trigger:{
        type:String,
        default:'hover'
      }
    },
    data() {
      return {
        visible: false
      }
    },
    mounted(){
      this.initListener()
    },
    methods:{
      initListener(){
        const el = this.$el
        if(this.trigger === 'hover'){
          el.addEventListener('mouseenter',() => {
            setTimeout(() => {
              this.visible = true
            },100)
          })
          el.addEventListener('mouseleave',() => {
            this.visible = false
          })
        }else if(this.trigger === 'click'){
          el.addEventListener('click',(e) => {
            e.stopPropagation()
            this.visible = true
          })
          document.addEventListener('click',() => {
            this.visible = false
          })
        }
      },
      itemTrigger(val){
        this.visible = false
        this.$emit('click',val)
      }
    },
    beforeDestroy(){

    }
  }
</script>
