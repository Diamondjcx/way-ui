<template>
  <div class="demo-radio">
    <h4>radio单选框 基本使用</h4>
    <w-radio v-model="val" :key="0" label="选项一">选项一</w-radio>
    <w-radio v-model="val" :key="1" label="选项二">选项二</w-radio>
    <w-radio v-model="val" :key="2" label="选项三">选项三</w-radio>
    <h4>禁用状态</h4>
    <w-radio disabled >禁用</w-radio>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        val:'选项一'
      }
    }
  }
</script>
