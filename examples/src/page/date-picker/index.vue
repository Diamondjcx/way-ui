<template>
  <div>
    <h4>日期时间选择</h4>
    <p>范围选择：{{timeRange}}</p>
    <w-range-picker v-model="timeRange" :shortcuts="shortcuts"/>
    <p>时间选择：{{date}}</p>
    <w-date-picker v-model="date"/>
  </div>
</template>

<script>
  export default {
    name: "datePicker",
    data(){
      return{
        timeRange:[],
        shortcuts:[
          {
            text:'最近一周',
            range:[new Date('2001-10-2'),new Date()]
          },{
            text:'最近一个月',
            range:[new Date('2002-10-2'),new Date()]
          }
        ],
        date:new Date()
      }
    }
  }
</script>
