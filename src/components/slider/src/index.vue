<template>
  <div class="w-slide">
    <div ref="slide_inner" class="w-slide__inner"/>
    <div class="w-slide__bar" :style="{width:currentPosition}"></div>
    <div class="w-slide__cursor" :style="{left:currentPosition}" ref="slide_cursor" @mousedown="onDragStart"></div>
  </div>
</template>

<script>
  export default {
    name: "w-slide",
    props: {
      value: {
        type: Number,
        default: 0
      },
      step: {
        type: Number,
        default: 1
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      }
    },
    data() {
      return {
        dragging: false,
        startX: 0,
        currentX: 0,
        startPosition: 0,
        newPosition: 0
      }
    },
    computed: {
      currentPosition() {
        return `${(this.value - this.min) / (this.max - this.min) * 100}%`
      },
      slide_step() {
        const inner = this.$refs['slide_inner']
        return inner.clientWidth * this.step / (this.max - this.min)
      }
    },
    watch: {},
    mounted() {
      console.log(this.slide_step);
    },
    methods: {
      onDragStart(e) {
        this.dragging = true
        this.startX = e.clientX
        window.addEventListener('mousemove', this.onDragging)
        window.addEventListener('mouseup', this.onDragEnd)
      },
      onDragging(e) {
        if (!this.dragging) return
        let diff = 0;
        this.currentX = e.clientX

        this.currentX = event.clientX;
        diff = (this.currentX - this.startX) / this.$refs['slide_inner'].clientWidth * 100;
        console.log(diff)
        this.newPosition = this.startPosition + diff;
        this.setPosition(this.newPosition);
      },
      onDragEnd() {
        this.dragging = false
        this.startX = 0
        this.currentX = 0
        window.removeEventListener('mousemove', this.onDragging)
        window.removeEventListener('mouseup', this.onDragEnd)
      },
      setPosition(newPosition) {
        if (newPosition === null || isNaN(newPosition)) return;
        if (newPosition < 0) {
          newPosition = 0;
        } else if (newPosition > 100) {
          newPosition = 100;
        }
        const lengthPerStep = 100 / ((this.max - this.min) / this.step);
        const steps = Math.round(newPosition / lengthPerStep);
        let value = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
        value = parseFloat(value.toFixed(0));
        this.$emit('input', value);
      }
    }
  }
</script>
