<template>
  <div class="demo-button">
    <h4>message 提示</h4>
    <w-button type="primary" @click="handleMessage">默认按钮</w-button>
    <w-button type="success" @click="handleSuccess">成功按钮</w-button>
    <w-button type="warning" @click="handleDanger">警告按钮</w-button>
    <w-button type="danger" @click="handleError">危险按钮</w-button>
    <w-button @click="handleCloseAll">删除所有</w-button>
  </div>
</template>
<script>
  export default {
    name: 'index',
    methods: {
      handleMessage() {
        this.$message('默认样式 info')
      },
      handleSuccess() {
        this.$message({
          message: 'success样式 success',
          type: 'success'
        })
      },
      handleDanger() {
        this.$message({
          message: 'warning样式 warning',
          type: 'warning'
        })
      },
      handleError() {
        this.$message({
          message: 'error样式 error',
          type: 'error'
        })
      },
      handleCloseAll(){
        this.$message.closeAll()
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .demo-button {
    .w-button {
      margin: 0 5px 0 5px;
    }
  }
</style>
