<template>
  <div>
    <div>
      <div class="backtop-demo-box" v-for="item in 20" :key="item">
        {{item}}
      </div>
    </div>
    <w-backtop :visiblity-height="100" @scrollEnd="scrollEnd"/>
  </div>
</template>

<script>
  export default {
    name: "index",
    methods:{
      scrollEnd(){
        console.log('scroll-end')
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .backtop-demo-box{
    background: #5677fc;
    height: 100px;
    border-radius: 4px;
    margin-bottom:10px;
    color: #fff;
    padding:10px;
    font-size: 20px;
  }
</style>
