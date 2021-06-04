<template>
  <div class="w-date-year-month">
    <div class="prev-control">
      <div class="item" @click="handlePrevYear"><w-icon name="chevrons-left"></w-icon></div>
      <div class="item" @click="handlePrevMonth"><w-icon name="chevron-left"></w-icon></div>
    </div>
    <div class="year-month">
      <span>{{year}}年</span>
      <span @click="handleMonth">{{month + 1}}月</span>
    </div>
    <div class="next-control">
      <div class="item" @click="handleNextMonth"><w-icon name="chevron-right"></w-icon></div>
      <div class="item" @click="handleNextYear"><w-icon name="chevrons-right"></w-icon></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "w-date-year-month",
    props:{
      date: {}
    },
    computed:{
      year() {
        return this.date.getFullYear();
      },
      month() {
        return this.date.getMonth();
      },
    },
    data(){
      return{

      }
    },
    methods:{
      // 上月
      handlePrevMonth(){
        const new_date = new Date(this.date)
        new_date.setDate(1)
        let new_month = 0
        if(this.month === 0){
          new_month = 11
          new_date.setFullYear(new_date.getFullYear() - 1)
        }else {
          new_month = this.month - 1
        }
        new_date.setMonth(new_month)
        this.$emit('change',new Date(new_date))
      },
      // 上年
      handlePrevYear(){
        const new_date = new Date(this.date)
        new_date.setFullYear(new_date.getFullYear() - 1)
        this.$emit('change',new Date(new_date))
      },
      // 下月
      handleNextMonth(){
        const new_date = new Date(this.date)
        new_date.setDate(1)
        let new_month = 0
        if(this.month === 11){
          new_month = 0
          new_date.setFullYear(new_date.getFullYear() + 1)
        }else {
          new_month = this.month + 1
        }
        new_date.setMonth(new_month)
        this.$emit('change',new Date(new_date))
      },
      // 下年
      handleNextYear(){
        const new_date = new Date(this.date)
        new_date.setFullYear(new_date.getFullYear() + 1)
        this.$emit('change',new Date(new_date))
      },
      // 点击月份 选择
      handleMonth(){
        this.$emit('triggerMonth')
      }
    }
  }
</script>
