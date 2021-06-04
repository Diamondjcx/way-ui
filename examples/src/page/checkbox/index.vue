<template>
  <div class="demo-checkbox">
    <h4>基础用法</h4>
    <w-checkbox v-model="checked">{{checked ? '选中' : '未选中'}}</w-checkbox>
    <h4>禁用状态</h4>
    <w-checkbox v-model="checked" disabled>{{checked ? '选中' : '未选中'}}</w-checkbox>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        checked: false,
        checkList: ['选项一', '选中禁用选项']
      }
    }
  }
</script>
