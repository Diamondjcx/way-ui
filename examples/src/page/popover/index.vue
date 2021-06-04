<template>
  <div class="popper-demo">
    <h4>popover 气泡卡片</h4>
    <w-popover>
      <w-button>点击触发</w-button>
      <div slot="content">
        <p>sasd</p>
        <w-button type="primary" >气泡按钮</w-button>
      </div>
    </w-popover>

    <w-popover trigger="hover">
      <w-button type="primary">触摸触发</w-button>
      <div slot="content">
        <p>sasd</p>
        <w-button type="primary" @click="handleClick">气泡按钮</w-button>
      </div>
    </w-popover>

    <w-popover trigger="focus">
      <w-button type="warning">focus触发</w-button>
      <div slot="content">
        <p>sasd</p>
        <w-button type="primary" @click="handleClick">气泡按钮</w-button>
      </div>
    </w-popover>

    <w-popover v-model="visible" trigger="control">
      <w-button @click="handleClick1">手动模式 model控制</w-button>
      <div slot="content">
        <p>sasd</p>
        <w-button type="primary" >气泡按钮</w-button>
      </div>
    </w-popover>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        visible:false
      }
    },
    methods:{
      handleClick1(){
        this.visible = !this.visible
      },
      handleClick(){
        this.$message({
          message:'气泡按钮点击'
        })
      }
    }
  }
</script>
<style>
  .popper-demo .w-button{
    margin-left:10px;
  }
</style>
