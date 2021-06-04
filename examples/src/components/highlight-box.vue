<template>
  <div class="highlight-box" v-highlightjs v-if="code">
    <w-button size="small" class="copy" type="primary" @click="copyLink" data-clipboard-action="copy"  :data-clipboard-text="code">拷贝</w-button>
    <pre><code>{{code}}</code></pre>
  </div>
</template>

<script>
  export default {
    name: "highlight-box",
    props:{
      code: String
    },
    methods:{
      copyLink() {
        let _this = this;
        let clipboard = new this.clipboard('.copy');
        clipboard.on('success', function () {
          _this.$message({
            message: '拷贝成功',
            type: 'success'
          })
        });
        clipboard.on('error', function () {
          _this.$message({
            message: '拷贝失败',
            type: 'error'
          })
        });
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
.highlight-box{
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  margin-top:15px;
  width: 100%;
  .copy{
    position: absolute;
    top:5px;
    right: 5px;
    margin:0;
    opacity: 0;
    visibility: hidden;
  }
  .code{
    white-space: normal;
    word-break :break-all;
  }
  &:hover{
    .copy{
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
