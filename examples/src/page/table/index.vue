<template>
  <div class="demo-radio">
    <h4>table表格</h4>
    <h3>默认</h3>
    <w-table :data="data" :columns="columns"/>
    <h3>带边框 bordered</h3>
    <w-table bordered :data="data" :columns="columns"/>
    <h3>单选表格</h3>
    <w-table radio bordered :data="data" :columns="columns" :selectRowKey="selectRadio" @select="handleSelectRadio"/>
    <h3>多选表格</h3>
    <w-table checkbox bordered :data="data" :columns="columns" :selectRowKey="selectRowKey" @select="handleSelectCheckbox"/>
  </div>
</template>

<script>
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: 100
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 100,
      align:'center'
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    }
  ];
  export default {
    name: "index",
    data() {
      return {
        columns: columns,
        data: [
          {
            name: '张三',
            age: '28',
            address: '杭州'
          }, {
            name: '李四',
            age: '31',
            address: '杭州'
          }, {
            name: '王五',
            age: '28',
            address: '深圳'
          }, {
            name: '赵六',
            age: '28',
            address: '中国黑龙江'
          }
        ],
        selectRowKey:[],
        selectRadio:[]
      }
    },
    methods:{
      handleSelectRadio(val){
        this.selectRadio = val
      },
      handleSelectCheckbox(val){
        this.selectRowKey = val
      }
    }
  }
</script>
