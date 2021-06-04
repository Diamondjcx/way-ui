<template>
  <div class="w-date-day">
    <div v-for="(day,i) in days" :key="i" class="day-init">
      <div :class="{
          'day-item':true,
          'otherMonth':day.otherMonth,
          'selected':day.selected,
          'today':day.today,
          'in-range':day.inRange,
          'disabled':day.disabled
        }"
           @click="handleClick(day)"
      >
        <div class="day-num"><span>{{day.date}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getDayCountOfMonth, getFirstDayByMonths, getLastDayByMonth,clearTime} from '../basic/date-utils'

  export default {
    name: "w-date-day",
    props: {
      date: undefined,
      maxDate: undefined,
      minDate: undefined,
      currentDate: {}
    },
    data() {
      return {}
    },
    mounted() {
    },
    computed: {
      year() {
        return this.date.getFullYear();
      },
      month() {
        return this.date.getMonth();
      },
      days() {

        let list = []

        let firstDay = getFirstDayByMonths(this.year, this.month);

        let prefixDaysLen = firstDay === 0 ? 7 : firstDay;

        const dateCountOfMonth = getDayCountOfMonth(this.year, this.month);
        const dateCountOfLastMonth = getDayCountOfMonth(this.year, (this.month === 0 ? 11 : this.month - 1));

        let lastDay = getLastDayByMonth(this.year, this.month);

        let suffixDaysLen = 42 - prefixDaysLen - dateCountOfMonth;

        for (let i = 1; i <= prefixDaysLen; i++) {
          const year = this.month === 0 ? this.year - 1 : this.year
          const month = this.month === 0 ? 11 : this.month - 1
          const date = dateCountOfLastMonth - prefixDaysLen + i
          list.push({
            otherMonth: true,
            year: year,
            month: month,
            date: date,
            inRange: this.isInRange(year,month,date),
            disabled: this.isDisabled(year,month,date)
          })
        }
        for (let i = 0; i < dateCountOfMonth; i++) {
          const date = i + 1
          list.push({
            otherMonth: false,
            year: this.year,
            month: this.month,
            date: date,
            today: this.isToday(this.year,this.month,date),
            selected: this.isSelected(i + 1),
            inRange: this.isInRange(this.year,this.month,date),
            disabled: this.isDisabled(this.year,this.month,date)
          })
        }
        for (let i = 0; i < suffixDaysLen; i++) {
          const year = this.month === 11 ? this.year + 1 : this.year
          const month = this.month === 11 ? 0 : this.month + 1
          const date = i + 1
          list.push({
            otherMonth: true,
            year: year,
            month: month,
            date: date,
            inRange: this.isInRange(year,month,date),
            disabled: this.isDisabled(year,month,date)
          })
        }

        return list
      },
    },
    methods: {
      // 是否选中
      isSelected(i) {
        let isSelected = false
        if(this.currentDate){
          if (this.year === this.currentDate.getFullYear() && this.month === this.currentDate.getMonth() && i === this.currentDate.getDate()) {
            isSelected = true
          }
        }
        return isSelected
      },
      // 是否今天
      isToday(year,month,date) {
        let isToday = false
          const today = new Date()
          if (year === today.getFullYear() && month === today.getMonth() && date === today.getDate()) {
            isToday = true
          }
        return isToday
      },
      // 是否在范围中
      isInRange(year,month,date) {
        const _date = new Date(year,month,date,0,0,0)
        let inRange = false
        if(this.currentDate){
          if (this.minDate) {
            const start = clearTime(this.minDate)
            if(start.valueOf() <= _date.valueOf() && _date.valueOf() <= this.currentDate.valueOf()){
              inRange = true
            }
          }else if(this.maxDate) {
            const end = clearTime(this.maxDate)
            if(this.currentDate.valueOf() <= _date.valueOf() && _date.valueOf() <= end.valueOf()){
              inRange = true
            }
          }
        }
        return inRange
      },
      // 是否禁用
      isDisabled(year,month,date){
        const _date = new Date(year,month,date,0,0,0,0)
        let disabled = false
        if(this.minDate){
          const start = clearTime(this.minDate)
          if(start.valueOf() > _date.valueOf()){
            return true
          }
        }else if(this.maxDate){
          const end = clearTime(this.maxDate)
          if(end.valueOf() < _date.valueOf()){
            return true
          }
        }
        return disabled
      },
      // 点击选中
      handleClick(day) {
        if (day.disabled) return
        const new_date = this.date
        new_date.setDate(day.date)
        new_date.setMonth(day.month)
        new_date.setFullYear(day.year)
        // if(!this.currentDate){
        //   if(this.maxDate){
        //     new_date.setHours(0)
        //     new_date.setMinutes(0)
        //     new_date.setSeconds(0)
        //   }else if(this.minDate){
        //     new_date.setHours(23)
        //     new_date.setMinutes(59)
        //     new_date.setSeconds(59)
        //   }
        // }
        this.$emit('change', new Date(new_date))
      }
    }
  }
</script>
