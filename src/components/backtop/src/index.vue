<template>
  <transition name="w-bottom-fade">
    <span v-show="visible" class="w-backtop" @click="handleTrigger">
      <w-icon name="arrow-up"/>
    </span>
  </transition>
</template>

<script>
  const easeInOutCubic = function easeInOutCubic(t, b, c, d) {
    const cc = c - b;
    t /= d / 2;
    if (t < 1) {
      return cc / 2 * t * t * t + b;
    } else {
      return cc / 2 * ((t -= 2) * t * t + 2) + b;
    }
  };
  export default {
    name: "w-backtop",
    props: {
      speed: Number,
      visiblityHeight: {
        type: Number,
        default: 400
      }
    },
    data() {
      return {
        visible: false
      }
    },
    computed: {},
    mounted() {
      document.body.appendChild(this.$el)
      window.addEventListener('scroll', this.scrollListener)
    },
    methods: {
      scrollListener() {
        const fromTop = document.body.scrollTop || document.documentElement.scrollTop
        if (fromTop >= this.visiblityHeight && !this.visibles) {
          this.visible = true
        } else {
          this.visible = false
        }
      },
      handleTrigger() {
        this.$emit('click')
        this.scrollTop()
      },
      scrollTop() {
        const _this = this
        const scrollTop = 0
        const fromTop = document.body.scrollTop || document.documentElement.scrollTop
        const startTime = Date.now()
        const speed = this.speed || fromTop / 2
        const frameFunc = function () {
          const timestamp = Date.now()
          const time = timestamp - startTime
          _this.setScrollTop(easeInOutCubic(time, fromTop, scrollTop, speed))
          const timeOut = setTimeout(function () {
            if (time < speed) {
              frameFunc()
            } else {
              _this.setScrollTop(scrollTop)
              _this.$emit('scrollEnd')
              clearTimeout(timeOut)
            }
          }, 1000 / 60)
        }
        frameFunc()
      },
      setScrollTop(val) {
        document.body.scrollTop = document.documentElement.scrollTop = val
      },
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.scrollListener)
      document.body.removeChild(this.$el)
    }
  }
</script>
