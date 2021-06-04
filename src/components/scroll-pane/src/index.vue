<template>
  <div class="w-scroll-pane" :style="{height: `${height}px`}">
    <div class="w-scroll-pane__inner" ref="inner" @scroll="innerScroll">
      <div ref="innerBox" class="w-scroll-pane__inner-box">
        <slot/>
      </div>
    </div>
    <div
      ref="bar"
      class="w-scroll-pane__bar"
      :style="{height:`${height*100/slotHeight}%`,transform:`translateY(${scrollPercentage}%)`}"
      @mousedown="handleMouseDown"
    />
  </div>
</template>

<script>
  export default {
    name: "w-scroll-pane",
    props: {
      height: {
        type: Number,
        default: 100
      }
    },
    data() {
      return {
        slotHeight: 0,
        scrollPercentage: 0,
        dragging: false,
        option: {
          y: 0,
          y1: 0
        }
      }
    },
    computed: {},
    watch: {},
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.slotHeight = this.$refs['innerBox'].clientHeight
      },
      innerScroll(e) {
        this.init()
        this.scrollPercentage = e.target.scrollTop * 100 / this.height
      },
      handleMouseDown(e) {
        this.dragging = true
        this.option.y = e.clientY
        document.addEventListener('mousemove', this.handleMouseMove)
        document.addEventListener('mouseup', this.handleMouseUp)
      },
      handleMouseUp() {
        this.dragging = false
        this.option.y = this.option.y1 = 0
        document.removeEventListener('mousemove', this.handleMouseMove)
        document.removeEventListener('mouseup', this.handleMouseUp)
      },
      handleMouseMove(e) {
        if (!this.dragging) return
        const innerBox = this.$refs['inner']
        this.option.y1 = e.clientY
        if(this.option.y1 > this.option.y ){
          innerBox.scrollTop = innerBox.scrollTop + (this.option.y1 - this.option.y) * (this.slotHeight / this.height)
        }else if(this.option.y1 < this.option.y){
          innerBox.scrollTop = innerBox.scrollTop + (this.option.y1 - this.option.y) * (this.slotHeight / this.height)
        }
        // this.$refs['bar'].style.top = this.$refs['bar'].offsetTop + (this.option.y1 - this.option.y) + 'px'
        this.option.y = e.clientY
      }
    }
  }
</script>
