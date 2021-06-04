<template>
  <div class="w-date-panel">
    <w-time-edit :date="date" :max-date="maxDate" :min-date="minDate" :current-date="currentDate" @change="editChange"/>
    <w-date-year-month :date="date" @change="dateChange" @triggerMonth="handleSelectMonth"/>
    <template v-if="mode === 'date'">
      <w-week :date="date" :current-date="currentDate" />
      <w-date :date="date" :max-date="maxDate" :min-date="minDate" :current-date="currentDate" @change="currentDateChange"/>
    </template>
    <template v-else-if="mode === 'month'">
      <w-month :date="date" @change="handleChangeMonth"/>
    </template>
  </div>
</template>

<script>
  import WTimeEdit from './time-edit'
  import WWeek from './week'
  import WDate from './date'
  import WDateYearMonth from "./year-month";
  import WMonth from './month'

  export default {
    name: "w-date-panel",
    components:{
      WTimeEdit,
      WWeek,
      WDate,
      WDateYearMonth,
      WMonth
    },
    props:{
      value:Date,
      minDate:undefined,
      maxDate:undefined,
      range:String
    },
    computed:{
      model: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      },
    },
    data(){
      return{
        date:this.value ? this.value : new Date(),
        currentDate:this.value,
        mode:'date'
      }
    },
    watch:{
      value(val){
        if(!val){
          this.currentDate = undefined
        }else {
          this.currentDate = val
          this.date = val
        }
      },
      currentDate(val){
        this.$emit('input', val);
      }
    },
    methods:{
      editChange(date){
        this.date = new Date(date)
        this.currentDate = new Date(date)
      },
      dateChange(date){
        this.date = new Date(date)
      },
      handleChangeMonth(date){
        this.mode = 'date'
        this.date = new Date(date)
      },
      currentDateChange(date){
        const new_date = new Date(date)
        this.date = new_date
        if(!this.value && this.range === 'start'){
          new_date.setHours(0)
          new_date.setMinutes(0)
          new_date.setSeconds(0)
        }else if(!this.value && this.range === 'end'){
          new_date.setHours(23)
          new_date.setMinutes(59)
          new_date.setSeconds(59)
        }
        this.currentDate = new_date
      },
      handleSelectMonth(){
        this.mode = this.mode === 'month' ? 'date' : 'month'
      }
    }
  }
</script>
