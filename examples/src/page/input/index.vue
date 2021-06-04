<template>
  <div class="demo-checkbox">
    <h4>默认状态：{{input}}</h4>
    <w-input v-model="input" placeholder="请输入内容"
    />
    <h4>禁用状态</h4>
    <w-input disabled placeholder="请输入内容"/>
    <h4>清空：{{input}}</h4>
    <w-input v-model="input" clearable placeholder="请输入内容"/>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        input:123
      }
    },
    methods: {
    }
  }
</script>
