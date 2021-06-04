<template>
  <span>
    <slot/>
    <transition name="w-opacity-fade">
      <div ref="popper" class="w-popover" v-show="visible" @click="(e) => e.stopPropagation()">
        <div class="w-popover__inner" :style="contentStyle" >
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </span>
</template>

<script>
  import {getClientReat} from "../../../basic/tools";

  export default {
    name: "w-popover",
    props: {
      value: Boolean,
      trigger: {
        type: String,
        default: 'click',
      },
      content: String,
      contentStyle: {},
      delay:{
        type: Number,
        default: 100
      }
    },
    data() {
      return {
        visible: false,
        popper: null,
        timer:null
      }
    },
    watch: {
      value(val) {
        this.visible = val
      },
      visible(val) {
        if (this.trigger === 'click') {
          if (val) {
            document.addEventListener('click', this.handleHide)
          } else {
            document.removeEventListener('click', this.handleHide)
            document.removeEventListener('mouseup', this.handleHide)
          }
        }
        if (val) {
          this.setPopperInbody()
        }
        this.$emit('change', val)
      }
    },
    mounted() {
      if (this.$slots.default && this.$slots.default[0]) {
        const slot_default = this.$slots.default[0].elm
        this.popper = this.$refs.popper
        if (this.trigger === 'click') {
          slot_default.addEventListener('click', this.handleClick)
        } else if (this.trigger === 'hover') {
          slot_default.addEventListener('mouseover', this.handleShow)
          this.popper.addEventListener('mouseover', this.handleShow)
          slot_default.addEventListener('mouseleave', this.handleHide)
          this.popper.addEventListener('mouseleave', this.handleHide)
        } else if (this.trigger === 'focus') {
          slot_default.addEventListener('mousedown', this.handleShow)
          document.addEventListener('mouseup', this.handleHide)
        } else if (this.trigger === 'control') {
          if (this.value) {
            this.visible = this.value
          }
        }
      }
    },
    methods: {
      handleClick(e) {
        e.stopPropagation()
        this.visible = !this.visible
      },
      handleShow() {
        if(this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          if (!this.visible) this.visible = true
        },this.delay)
      },
      handleHide() {
        if(this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          if (this.visible) this.visible = false
        },this.delay)
      },
      setPopperInbody() {
        if (this.popper) {
          document.body.appendChild(this.popper)
        }
        this.setPopperPosition()
      },
      setPopperPosition() {
        setTimeout(() => {
          const el = this.$slots.default[0].elm
          if (el) {
            const react = getClientReat(el)
            this.popper.style.position = 'fixed'
            this.popper.style.left = react.left + 'px'
            this.popper.style.paddingTop = 6 + 'px'
            this.popper.style.top = react.top + react.height + 'px'
          }
        })
      }
    },
    beforeDestroy() {
      this.visible = false
      if (this.popper && this.popper.parentNode.nodeName === 'BODY') {
        document.body.removeChild(this.popper);
      }
    },
    deactivated() {
      this.$options.beforeDestroy[0].call(this);
    }
  }
</script>
