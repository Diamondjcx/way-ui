<template>
  <span>
    <transition name="w-opacity-fade">
      <div ref="modalBg" v-if="visible" :style="{'z-index':zIndex()}" class="w-modal-bg"/>
    </transition>
    <transition name="w-top-fade" @after-enter="afterEnter" @after-leave="afterLeave">
      <div ref='modal' class="w-modal" v-if="visible" :key="1" :style="{'z-index':zIndex()}" @click="cancel">
        <div :class="['w-modal-main',fullscreen && 'is-fullscreen']" :key="2" :style="{marginTop:top,width: width}"
             @click.stop="">
          <span @click="cancel" class="w-modal-close"><w-icon name="x-circle"/></span>
          <div class="w-modal-title" v-if="title">
            {{title}}
          </div>
          <div class="w-modal-body">
            <slot/>
          </div>
          <div class="w-modal-footer">
            <w-button @click="cancel">取消</w-button>
            <w-button type="primary" @click="comfirm">确定</w-button>
          </div>
        </div>
      </div>
    </transition>
  </span>
</template>
<script>
  export default {
    name: "w-modal",
    props: {
      title: String,
      visible: Boolean,
      top: {
        type: String,
        default: '10%'
      },
      width: {
        type: String,
        default: '30%'
      },
      fullscreen: Boolean
    },
    watch: {
      visible(val) {
        if (val) {
          this.$emit('open')
          document.body.appendChild(this.$el)
          document.addEventListener('keydown', this._esc_listener, false);
        } else {
          this.$emit('close')
          document.removeEventListener('keydown', this._esc_listener, false);
          this.$WAY.zIndex -= 2
        }
      }
    },
    methods: {
      _esc_listener(e) {
        if (e.which === 27) {
          if(Number(this.$refs['modal'].style.zIndex) >= this.$WAY.zIndex - 1){
            this.cancel()
          }
        }
      },
      cancel() {
        this.$emit('cancel')
      },
      zIndex() {
        const zIndex = this.$WAY.zIndex
        this.$WAY.zIndex += 1
        return zIndex
      },
      comfirm() {
        this.$emit('comfirm')
      },
      afterEnter() {
        this.$emit('opend')
      },
      afterLeave() {
        this.$emit('closed')
      }
    },
    destroyed() {
      if (this.$el.parentNode.nodeName === 'BODY') {
        document.body.removeChild(this.$el)
      }
    }
  }
</script>
