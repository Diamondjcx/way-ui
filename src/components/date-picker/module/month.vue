<template>
  <div class="w-date-month">
    <div class="month-init" v-for="(month,index) in months" :key="index">
      <div :class="{'month-span':true,'selected':isSelected(index)}" @click="handleSelectMonth(index)">
        <span>{{month}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {months} from "../basic/date-utils";

  export default {
    name: "month",
    props:{
      date:undefined,
      currentDate: undefined
    },
    data(){
      return{
        months
      }
    },
    methods:{
      isSelected(val){
        const today = new Date()
        const new_date = new Date(this.date)
        new_date.setDate(1)
        new_date.setMonth(val)
        if(new_date.getFullYear() === today.getFullYear() && new_date.getMonth() === today.getMonth()){
          return true
        }else {
          return false
        }
      },
      handleSelectMonth(val){
        const new_date = new Date(this.date)
        new_date.setMonth(val)
        this.$emit('change',new_date)
      }
    }
  }
</script>
