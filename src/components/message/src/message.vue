<template>
  <transition name="w-massage" @after-leave="handleAfterLeave">
    <div
      :class="[
         'w-message',
          type ? `is-${ type }` : '',
      ]"
      v-show="visible"
      :style="{
        'top':offsetTop + 'px'
      }"
    >
      <slot>
        <p v-html="message" class="w-message__content"></p>
      </slot>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: 'info',
        timer: null,
        closed: false,
        onClose: null,
        offsetTop: 15
      }
    },
    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
        }
      }
    },
    methods: {
      handleAfterLeave() {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      },
      close() {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },
      keydown(e) {
        if (e.keyCode === 27) { // esc关闭消息
          if (!this.closed) {
            this.close();
          }
        }
      }
    },
    mounted() {
      this.startTimer();
      document.addEventListener('keydown', this.keydown);
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.keydown);
    }
  }
</script>
