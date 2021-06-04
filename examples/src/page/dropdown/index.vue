<template>
  <div>
    <w-dropdown trigger="hover" @click="handleTrigger">
      <w-button >hover触发</w-button>
      <w-dropdown-menu slot="menu">
        <w-dropdown-item :key="1" value="狮子">狮子</w-dropdown-item>
        <w-dropdown-item :key="2" value="老虎">老虎</w-dropdown-item>
        <w-dropdown-item :key="3" value="大象">大象</w-dropdown-item>
      </w-dropdown-menu>
    </w-dropdown>
    <w-dropdown trigger="click" style="margin-left:20px;" @click="handleTrigger">
      <w-button type="primary">点击触发</w-button>
      <w-dropdown-menu slot="menu">
        <w-dropdown-item :key="1" value="选项一">选项一</w-dropdown-item>
        <w-dropdown-item :key="2" value="选项二">选项二</w-dropdown-item>
        <w-dropdown-item :key="3" value="选项三" disabled>选项三</w-dropdown-item>
        <w-dropdown-item :key="4" value="选项四">选项四</w-dropdown-item>
      </w-dropdown-menu>
    </w-dropdown>
  </div>
</template>

<script>
  export default {
    name: "dropdown",
    data(){
      return{

      }
    },
    created(){

    },
    methods:{
      handleTrigger(val){
        this.$message({
          message: `${val}`
        })
      }
    }
  }
</script>
