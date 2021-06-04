<template>
  <div class="demo-button">
    <h4>按钮类型 type = primary、success、info、warning、danger</h4>
    <div ref="demo1">
      <w-button>普通按钮</w-button>
      <w-button type="primary">默认按钮</w-button>
      <w-button type="success">成功按钮</w-button>
      <w-button type="warning">警告按钮</w-button>
      <w-button type="danger">危险按钮</w-button>
      <w-button disabled >禁用按钮</w-button>
    </div>
    <highlight-box :code="code"/>
    <h4>加载中按钮</h4>
    <w-button :loading="true">普通按钮</w-button>
    <w-button :loading="true" type="primary">默认按钮</w-button>
    <w-button :loading="true" type="success">成功按钮</w-button>
    <w-button :loading="true" type="warning">警告按钮</w-button>
    <w-button :loading="true" type="danger">危险按钮</w-button>
    <h4>圆角按钮 round</h4>
    <w-button round >普通按钮</w-button>
    <w-button round type="primary">默认按钮</w-button>
    <w-button round type="success">成功按钮</w-button>
    <w-button round type="warning">警告按钮</w-button>
    <w-button round type="danger">危险按钮</w-button>
    <w-button round disabled >禁用按钮</w-button>
    <h4>圆形按钮 circle</h4>
    <w-button circle type="primary" ><w-icon name="x"/></w-button>
    <w-button circle type="danger"><w-icon name="search"/></w-button>
    <w-button circle type="danger">二</w-button>
    <h4>按钮大小 size = large、default、small</h4>
    <w-button size="large" type="primary">large 按钮</w-button>
    <w-button size="default" type="primary">default 按钮</w-button>
    <w-button size="small" type="primary">mini 按钮</w-button>
    <w-button size="large" type="primary" circle>一</w-button>
    <w-button size="default" type="primary" circle>二</w-button>
    <w-button size="small" type="primary" circle>三</w-button>
    <h4>占满 full</h4>
    <w-button size="small" full style="margin-bottom:10px;">成功按钮</w-button>
    <w-button type="primary" full style="margin-bottom:10px;">默认按钮</w-button>
    <w-button type="danger" full size="large">成功按钮</w-button>
  </div>
</template>
<script>
  import HighlightBox from "../../components/highlight-box";
  export default {
    name: 'index',
    components: {HighlightBox},
    data(){
      return{
        code:'<w-button>普通按钮</w-button>\n' +
          '<w-button type="primary">默认按钮</w-button>\n' +
          '<w-button type="success">成功按钮</w-button>\n' +
          '<w-button type="warning">警告按钮</w-button>\n' +
          '<w-button type="danger">危险按钮</w-button>\n' +
          '<w-button disabled >禁用按钮</w-button>'
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .demo-button{
    .w-button{
      margin:0 5px 0 5px;
    }
  }
</style>
