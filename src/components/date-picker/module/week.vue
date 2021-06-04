<template>
  <div class="w-date-week">
    <div v-for="(week,i) in weeks" :key="i" class="week-item">
      <span>{{week}}</span>
    </div>
  </div>
</template>

<script>
  import {weeks} from '../basic/date-utils'
  export default {
    name: "w-date-week",
    data(){
      return{
        weeks
      }
    }
  }
</script>
