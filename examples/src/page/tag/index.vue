<template>
  <div class="demo-tag">
    <h4>tag标签 基础用法</h4>
    <w-tag>
      标签一
    </w-tag>
    <w-tag 
      type="success"
    >
      标签二
    </w-tag>
    <w-tag 
      type="info"
    >
      标签三
    </w-tag>
    <w-tag 
      type="warning"
    >
      标签四
    </w-tag>
    <w-tag 
      type="danger"
    >
      标签四
    </w-tag>
    <h4>tag标签 不同尺寸</h4>
    <w-tag>
      默认标签
    </w-tag>
    <w-tag size="medium">
      中等标签
    </w-tag>
    <w-tag size="small">
      小型标签
    </w-tag>
    <w-tag size="mini">
      超小标签
    </w-tag>

    <h4>可移除标签</h4>
    <w-tag
      v-for="tag in clearTags"
      :key="tag"
      closable
      :type="tag"
      @close="handleClose(tag)"
      >
      {{tag}}
      
    </w-tag>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        clearTags:['标签一','标签二', '标签三', '标签四'],
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
        tagsPlain: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
      }
    },
    methods: {
      handleClose(tag) {
        console.log(tag);
        this.clearTags.splice(this.clearTags.indexOf(tag), 1);
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .demo-tag{
    .w-tag{
      margin-left: 10px;
    }
  }
</style>
