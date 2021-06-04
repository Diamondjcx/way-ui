<template>
  <div class="badge-demo">
    <div class="demo">
      <w-badge :value="10">
        <w-button>标记</w-button>
      </w-badge>
    </div>
    <div class="demo">
      <w-badge :value="1000" :max="99">
        <w-button>标记</w-button>
      </w-badge>
    </div>
    <div class="demo">
      <w-badge value="new">
        <w-button>标记</w-button>
      </w-badge>
    </div>
    <div class="demo">
      <w-badge value="我">
        <w-button>标记</w-button>
      </w-badge>
    </div>
    <div class="demo">
      <w-badge dot>
        <w-button>标记</w-button>
      </w-badge>
    </div>
  </div>
</template>
<script>
  export default {
    name: "index"
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .badge-demo {
    display: flex;
    .demo {
      margin: 0 20px;
    }
  }
</style>
