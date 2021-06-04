<template>
  <div class="demo-loading">
    <h4>基础用法</h4>
    <w-loading :loading="loading" :text="'loading...'">
      <div class="demo-loading-item1" style="">
        <w-button @click="handleClick">加载</w-button>
      </div>
    </w-loading>
    <h4>自定义加载内容</h4>
    <w-loading :loading="loading1" :text="'loading...'" background="rgba(0,0,0,.7)">
      <div slot="loadBox">
        <div>自定义loading</div>
      </div>
      <div class="demo-loading-item1" style="">
        <w-button @click="handleClick1">加载</w-button>
      </div>
    </w-loading>
    <h4>表格加载</h4>
    <w-table :columns="columns" :data="data" bordered :loading="tableLoading"></w-table>
    <w-button :loading="tableLoading" type="primary" @click="handleTableLoading">加载表格</w-button>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
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
      return {
        loading: false,
        loading1: false,
        columns,
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
        tableLoading:false
      }
    },
    methods: {
      handleClick() {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 1000 * 10)
      },
      handleClick1() {
        this.loading1 = true
        setTimeout(() => {
          this.loading1 = false
        }, 1000 * 10)
      },
      handleTableLoading(){
        this.tableLoading = true
        setTimeout(() => {
          this.tableLoading = false
        }, 1000 * 10)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .demo-loading-item1 {
    width: 200px;
    height: 200px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
