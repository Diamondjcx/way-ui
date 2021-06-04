<template>
  <div class="scroll-pane-demo">
    <w-scroll-pane :height="300">
      <div class="box" v-for="item in num" :key="item">
        {{item}}
      </div>
    </w-scroll-pane>
    <div style="margin:20px;">
      <w-button @click="trigger"><w-icon name="plus"/></w-button>
    </div>
    <div style="width: 300px;">
      <w-scroll-pane :height="300">
        <div class="box" v-for="item in num" :key="item">
          {{item}}
        </div>
      </w-scroll-pane>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        num:10
      }
    },
    methods:{
      trigger(){
        this.num = this.num + 1
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .scroll-pane-demo{
    .box{
      background: #5677fc;
      height: 100px;
      border-radius: 4px;
      margin-bottom:2px;
      color: #fff;
      padding:10px;
      font-size: 20px;
    }
  }
</style>
