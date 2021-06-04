<template>
  <div class="w-date" ref="wDatePicker" >
    <w-popover :content-style="{padding:0}" v-model="visible" @change="handleChange">
      <div :class="[
            'w-date-input-wrap',
             visible && 'is-focused'
          ]"
      >
        <w-input readonly class="date-input" placeholder="选择时间" :value="dateVal" />
        <div v-if="clearable && currentDate" class="w-date-input-clear" @click="handleClear">
          <w-icon name="x-circle"/>
        </div>
      </div>
      <div slot="content">
        <div class="w-date">
          <w-date-panel v-model="currentDate" />
        </div>
      </div>
    </w-popover>
  </div>
</template>

<script>
  import WDatePanel from '../module/date-panel'
  import {dateFormat} from "../basic/date-utils";

  export default {
    name: "w-date-picker",
    components: {WDatePanel},
    props: {
      value:undefined,
      clearable:{
        type:Boolean,
        default:true
      }
    },
    data(){
      return{
        visible:false,
        date:undefined,
        currentDate:this.value && new Date(this.value),
      }
    },
    computed: {
      model: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      },
      dateVal(){
        if(this.currentDate){
          return dateFormat(this.currentDate,'yyyy-MM-dd hh:mm:ss ')
        }
      },
    },
    watch:{
      value(val){
        if(val){
          this.currentDate = val
        }else {
          this.currentDate = undefined
        }
      },
      currentDate(val){
          if(val){
            this.$emit('input', val);
          }else {
            this.$emit('input', undefined);
          }
        }
    },
    methods:{
      handleChange(val){
        this.visible = val
      },
      handleShow(){
        this.visible = true
      },
      handleClear(e){
        if(!this.visible){
          e.stopPropagation()
        }
        this.currentDate = undefined
      }
    }
  }
</script>
