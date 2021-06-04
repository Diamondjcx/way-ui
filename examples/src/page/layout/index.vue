<template>
  <div class="demo-layout">
    <h4>layout 常见的页面布局</h4>
    <w-layout class="piece">
      <w-sider width="200px"> Sider</w-sider>
      <w-layout>
        <w-header height="80px">Header</w-header>
        <w-content>Content</w-content>
        <w-footer height="80px">Footer</w-footer>
      </w-layout>
    </w-layout>
    <w-layout class="piece">
      <w-header>Header</w-header>
      <w-content>Content</w-content>
      <w-footer>Footer</w-footer>
    </w-layout>
    <w-layout class="piece">
      <w-header>Header</w-header>
      <w-layout>
          <w-sider>Sider</w-sider>
          <w-layout>
              <w-content>Content</w-content>
              <w-footer>Footer</w-footer>
          </w-layout>
      </w-layout>
    </w-layout>
    <w-layout class="piece">
      <w-header>Header</w-header>
      <w-layout>
          <w-sider>Sider</w-sider>
          <w-content>Content</w-content>
      </w-layout>
      <w-footer>Footer</w-footer>
    </w-layout>
    <w-layout class="piece">
      <w-header>Header</w-header>
      <w-layout>
          <w-content>Content</w-content>
          <w-sider>Sider</w-sider>
      </w-layout>
      
    </w-layout>
  </div>
</template>
<script>
  export default {
    name: 'index',
    methods: {
     
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .demo-layout {
    .piece {
      margin-bottom: 30px;
    }
    .w-header, .w-footer {
          color: #333;
          line-height: 60px;
          text-align: center;
    }
    .w-header {
      background: rgba(86, 119, 252, 0.5);
    }
    .w-footer {
      background:  rgba(86, 119, 252, 0.5);
    }
    .w-content {
        background-color: #7892fd;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    .w-sider {
      background-color: #dde4fe;
      text-align: center;
      line-height: 200px;
    }
  }
</style>
