<template>
  <div class="w-date-edit">
    <div class="edit-date">
      <input autocomplete="off" v-model="year" @blur="inputUp" @keyup.enter="inputUp" name="date-year" placeholder="年" type="number" maxlength="4"/>
      <span>-</span>
      <input autocomplete="off" v-model="month" @blur="inputUp" @keyup.enter="inputUp" name="date-month" placeholder="月" type="number" maxlength="2" min="1" max="12"/>
      <span>-</span>
      <input autocomplete="off" v-model="day" @blur="inputUp" @keyup.enter="inputUp" name="date-day" placeholder="日" type="number" maxlength="2" min="0"
             max="31"/>
    </div>
    <div class="edit-time">
      <input autocomplete="off" v-model="hours" @blur="inputUp" @keyup.enter="inputUp" name="time-hour" placeholder="时" type="number" maxlength="2" min="0"
             max="24"/>
      <span>:</span>
      <input autocomplete="off" v-model="minutes" @blur="inputUp" @keyup.enter="inputUp" name="time-minute" placeholder="分" type="number" maxlength="2" min="0" max="59"/>
      <span>:</span>
      <input autocomplete="off" v-model="seconds" @blur="inputUp" @keyup.enter="inputUp" name="time-second" placeholder="秒" type="number" maxlength="2" min="0" max="59"/>
    </div>
  </div>
</template>

<script>
  import {fillNum,getDayCountOfMonth} from "../basic/date-utils";

  export default {
    name: "w-time-edit",
    props: {
      date: {},
      currentDate: {},
      maxDate:undefined,
      minDate:undefined
    },
    computed: {
      new_date() {
        const {year, month, day, hours, minutes, seconds} = this
        return {
          year,
          month,
          day,
          hours,
          minutes,
          seconds
        }
      }
    },
    watch: {
      currentDate(val) {
        if(val){
          this.year = val.getFullYear() ? fillNum(val.getFullYear()) : ''
          this.month = fillNum(val.getMonth() + 1)
          this.day = val.getDate() ? fillNum(val.getDate()) : ''
          this.hours = val.getHours() ? fillNum(val.getHours()) : '00'
          this.minutes = val.getMinutes() ? fillNum(val.getMinutes()) : '00'
          this.seconds = val.getSeconds() ? fillNum(val.getSeconds()) : '00'
        }else {
          this.year = this.month = this.day = this.hours = this.minutes = this.seconds = ''
        }
      }
    },
    data() {
      return {
        year: this.currentDate ? fillNum(this.currentDate.getFullYear()) : '',
        month: this.currentDate ? fillNum(this.currentDate.getMonth() + 1) : '',
        day: this.currentDate ? fillNum(this.currentDate.getDate()) : '',
        hours: this.currentDate ? fillNum(this.currentDate.getHours()) : '',
        minutes: this.currentDate ? fillNum(this.currentDate.getMinutes()) : '',
        seconds: this.currentDate ? fillNum(this.currentDate.getSeconds()) : ''
      }
    },
    methods:{
      inputUp(){
        const val = this.new_date
        console.log(this.currentDate.getMonth())
        console.log(Number(val.month))
        let update = true
        if (Number(val.month) <= 0 || Number(val.month) > 12) {
          this.month = this.currentDate ? fillNum(this.currentDate.getMonth() + 1) : this.month
          update = false
        }
        const countDay = getDayCountOfMonth(Number(val.year),Number(val.month) - 1)
        if(Number(val.day) <= 0 || Number(val.day) > countDay){
          this.day = this.currentDate ? fillNum(this.currentDate.getDate()) : this.day
          update = false
        }

        if(Number(val.hours) < 0 || Number(val.hours) >= 24){
          this.hours = this.currentDate ? fillNum(this.currentDate.getHours()) : this.hours
          update = false
        }

        if(Number(val.minutes) < 0 || Number(val.minutes) > 59){
          this.minutes = this.currentDate ? fillNum(this.currentDate.getMinutes()) : this.minutes
          update = false
        }

        if(Number(val.seconds) < 0 || Number(val.seconds) > 59){
          this.seconds = this.currentDate ? fillNum(this.currentDate.getSeconds()) : this.seconds
          update = false
        }

        if(update){

          let new_date = new Date(val.year,val.month - 1,val.day,val.hours,val.minutes,val.seconds)

          if(this.maxDate && new_date.valueOf() > this.maxDate.valueOf()){
            new_date = this.maxDate
          }
          if(this.minDate && new_date.valueOf() < this.minDate.valueOf()){
            new_date = this.minDate
          }
          this.$emit('change', new_date)
        }
      }
    }
  }
</script>
