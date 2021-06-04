<template>
  <div>
    <div style="margin-bottom:20px">
      <w-progress :percentage="percentage"/>
    </div>
    <div style="margin-bottom:20px">
      <w-progress :percentage="percentage" color="red"/>
    </div>
    <div style="margin-bottom:20px">
      <w-progress :percentage="percentage" color="rgb(137, 226, 174)"/>
    </div>
    <div style="margin-bottom:20px">
      <w-progress :percentage="percentage" :height="30"/>
    </div>
    <div style="margin-bottom:20px">
      <w-progress :percentage="percentage" label-width="40px" :height="20">
        <div slot="label">
          {{percentage}}
        </div>
      </w-progress>
    </div>
    <div style="margin-top:20px;">
        <w-button style="margin-right: 10px" @click="plus">+</w-button>
        <w-button @click="reduce">-</w-button>
      </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        percentage: 50
      }
    },
    methods: {
      plus() {
        if (this.percentage >= 100) return
        this.percentage = this.percentage + 10
      },
      reduce() {
        if (this.percentage <= 0) return
        this.percentage = this.percentage - 10
      }
    }
  }
</script>
