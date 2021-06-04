<template>
  <div class="slider-demo">
    <w-slide v-model="value" :min="0" :max="100" :step="1"/>
    {{value}}
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        value:0
      }
    }
  }
</script>

<style scoped>

</style>
