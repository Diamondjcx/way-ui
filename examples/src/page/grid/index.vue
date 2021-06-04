<template>
  <div>
    <w-row :gutter="20">
      <w-col :span="24">
        <div class="col-box"></div>
      </w-col>
    </w-row>
    <w-row class="row-demo" :gutter="20">
      <w-col :span="8">
        <div class="col-box"></div>
      </w-col>
      <w-col :span="8">
        <div class="col-box opa"></div>
      </w-col>
      <w-col :span="8">
        <div class="col-box"></div>
      </w-col>
    </w-row>
    <w-row class="row-demo" :gutter="10">
      <w-col :span="4">
        <div class="col-box"></div>
      </w-col>
      <w-col :span="4">
        <div class="col-box opa"></div>
      </w-col>
      <w-col :span="4">
        <div class="col-box"></div>
      </w-col>
      <w-col :span="4">
        <div class="col-box opa"></div>
      </w-col>
      <w-col :span="4">
        <div class="col-box"></div>
      </w-col>
      <w-col :span="4">
        <div class="col-box opa"></div>
      </w-col>
    </w-row>
    <w-row class="row-demo" :gutter="5">
      <w-col :span="3">
        <div class="col-box"></div>
      </w-col>
      <w-col :span="3">
        <div class="col-box opa"></div>
      </w-col>
      <w-col :span="3">
        <div class="col-box"></div>
      </w-col>
      <w-col :span="3">
        <div class="col-box opa"></div>
      </w-col>
      <w-col :span="3">
        <div class="col-box"></div>
      </w-col>
      <w-col :span="3">
        <div class="col-box opa"></div>
      </w-col>
      <w-col :span="3">
        <div class="col-box"></div>
      </w-col>
      <w-col :span="3">
        <div class="col-box opa"></div>
      </w-col>
      <w-col :span="3">
        <div class="col-box"></div>
      </w-col>
      <w-col :span="3">
        <div class="col-box opa"></div>
      </w-col>
    </w-row>
    <h3>flex 属性 align="center"</h3>
    <w-row class="row-demo" :gutter="10" align="center">
      <w-col :span="6">
        <div class="col-box" style="height: 50px"></div>
      </w-col>
      <w-col :span="6">
        <div class="col-box opa" style="height: 130px"></div>
      </w-col>
      <w-col :span="6">
        <div class="col-box" style="height: 50px"></div>
      </w-col>
      <w-col :span="6">
        <div class="col-box opa" style="height: 80px"></div>
      </w-col>
    </w-row>
    <h3>flex 属性 align="flex-end"</h3>
    <w-row class="row-demo" :gutter="10" align="flex-end">
      <w-col :span="6">
        <div class="col-box" style="height: 50px"></div>
      </w-col>
      <w-col :span="6">
        <div class="col-box opa" style="height: 130px"></div>
      </w-col>
      <w-col :span="6">
        <div class="col-box" style="height: 50px"></div>
      </w-col>
      <w-col :span="6">
        <div class="col-box opa" style="height: 80px"></div>
      </w-col>
    </w-row>
    <h3>flex 属性 justify="space-between"</h3>
    <w-row class="row-demo" :gutter="10" justify="space-between">
      <w-col :span="6">
        <div class="col-box"></div>
      </w-col>
      <w-col :span="6">
        <div class="col-box opa"></div>
      </w-col>
      <w-col :span="6">
        <div class="col-box"></div>
      </w-col>
    </w-row>
    <h3>flex 属性 justify="space-around"</h3>
    <w-row class="row-demo" :gutter="10" justify="space-around">
      <w-col :span="6">
        <div class="col-box"></div>
      </w-col>
      <w-col :span="6">
        <div class="col-box opa"></div>
      </w-col>
      <w-col :span="6">
        <div class="col-box"></div>
      </w-col>
    </w-row>
    <h3>flex 属性 justify="space-evenly"</h3>
    <w-row class="row-demo" :gutter="10" justify="space-evenly">
      <w-col :span="6">
        <div class="col-box"></div>
      </w-col>
      <w-col :span="6">
        <div class="col-box opa"></div>
      </w-col>
      <w-col :span="6">
        <div class="col-box"></div>
      </w-col>
    </w-row>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        val: true
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .col-box {
    width: 100%;
    height: 50px;
    background: rgba(86,119,252, 1);
    border-radius: 4px;
    margin-bottom: 10px;
    &.opa {
      background: rgba(86,119,252, .5);
    }
  }
</style>
