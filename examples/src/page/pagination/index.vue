<template>
  <div class="demo-radio">
    <h4>pagination 分页</h4>
    <w-pagination v-model="current" :total="total" :page-size="pageSize"/>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        current:1,
        total:1000,
        pageSize: 10
      }
    }
  }
</script>
