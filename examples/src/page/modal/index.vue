<template>
  <div>
    <w-button type="primary" @click="showModal">弹出层</w-button>
    <w-modal :visible="visibles" @cancel="cancel" title="标题">
      <p>
        <label>用户名：</label>
        <w-input placeholder="请输入用户名" />
      </p>
      <p>弹出层组件</p>
      <p>弹出层组件</p>
      <p>弹出层组件</p>
      <p>弹出层组件</p>
      <p>弹出层组件</p>
      <p>弹出层组件</p>
      <p>弹出层组件</p>
      <p>弹出层组件</p>
      <p>弹出层组件</p>
      <p>弹出层组件</p>
      <p>弹出层组件</p>
      <p>弹出层组件</p>
      <p>弹出层组件</p>
      <p>弹出层组件</p>
      <p>弹出层组件</p>
      <w-button type="primary" @click="visibles1 = true">弹出层2</w-button>
    </w-modal>
    <w-modal fullscreen :visible="visibles1" @cancel="visibles1 = false" title="标题" width="60%">
      <p>弹出层2</p>
    </w-modal>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        visibles:false,
        visibles1:false
      }
    },
    created(){
    },
    methods:{
      showModal(){
        this.visibles = true
      },
      cancel(){
        this.visibles = false
      }
    }
  }
</script>
