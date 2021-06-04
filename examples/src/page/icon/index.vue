<template>
  <div class="demo-icons">
    <h4>Icon图标 使用开源 feather icons</h4>
    <div class="icons">
      <div class="icon-item" v-for="(icon,index) in icons" :key="index">
        <div class="icon">
          <w-icon @click="trigger" :name="icon.name"/>
        </div>
        <span>{{icon.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import icons from './icons'
  export default {
    name: "index",
    data(){
      return{
        icons
      }
    },
    methods:{
      trigger(e){
        console.log(e)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .icons{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
    row-gap: .5rem;
    .icon-item{
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 100%;
      padding:5px;
      .icon{
        font-size:24px;
        width: 100%;
        padding: 24px 0;
        background: #fff;
        margin-bottom:5px;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);
        border-radius: 5px;
        transition:all ease .2s;
        &:hover{
          color:#00bdff;
          box-shadow: 0 2px 3px 0 rgba(0,0,0,0.1), 0 2px 2px 0 rgba(0,0,0,0.06);
        }
      }
    }
  }
</style>
