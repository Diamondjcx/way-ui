<template>
  <div>
    <h4>switch开关 基础用法</h4>
    <w-switch v-model="val"/>
    {{val}}
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        val:true
      }
    }
  }
</script>
