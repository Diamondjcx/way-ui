<template>
  <div class="w-date" ref="wDatePicker">
    <w-popover :content-style="{padding:0}" v-model="visible" @change="handleChange">
      <div :class="[
            'w-date-input-wrap',
            'is-range',
             visible && 'is-focused'
          ]"
      >
        <w-input readonly class="date-input" placeholder="开始时间" :value="startVal"/>
        <span>至</span>
        <w-input readonly class="date-input" placeholder="结束时间" :value="endVal"/>
        <div v-if="clearable && currentStartDate && currentEndDate" class="w-date-input-clear" @click="handleClear">
          <w-icon name="x-circle"/>
        </div>
      </div>
      <div slot="content">
        <div class="w-date">
          <div class="w-date-range">
            <w-date-panel range="start" v-model="currentStartDate" :max-date="currentEndDate"/>
            <div class="w-date-division"></div>
            <w-date-panel range="end" v-model="currentEndDate" :min-date="currentStartDate"/>
          </div>
          <w-complete :shortcuts="shortcuts" :date="[currentStartDate,currentEndDate]" @reset="handleReset" @complete="handleComplete" @handleShortcut="handleShortcut"/>
        </div>
      </div>
    </w-popover>
  </div>
</template>

<script>
  import WDatePanel from '../module/date-panel'
  import WComplete from '../module/complete'
  import {dateFormat} from "../basic/date-utils";

  export default {
    name: "w-range-picker",
    components: {WDatePanel, WComplete},
    props: {
      value: Array,
      clearable: {
        type: Boolean,
        default: true
      },
      shortcuts:Array
    },
    data() {
      return {
        visible: false,
        currentStartDate: this.value[0] ? new Date(this.value[0]) : undefined,
        currentEndDate: this.value[1] ? new Date(this.value[1]) : undefined
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
      timeRange() {
        const {currentStartDate, currentEndDate} = this
        return {currentStartDate, currentEndDate}
      },
      startVal() {
        if (this.value[0]) {
          return dateFormat(new Date(this.value[0]), 'yyyy-MM-dd hh:mm:ss ')
        }else {
          return ''
        }
      },
      endVal() {
        if (this.value[1]) {
          return dateFormat(new Date(this.value[1]), 'yyyy-MM-dd hh:mm:ss ')
        }else {
          return ''
        }
      }
    },
    watch: {
      value(val) {
        if (val[0] && val[1]) {
          this.currentStartDate = val[0]
          this.currentEndDate = val[1]
        } else if (!val[0] || !val[1]) {
          this.currentStartDate = undefined
          this.currentEndDate = undefined
        }
      },
      timeRange(val) {
        if (val.currentStartDate && val.currentEndDate) {
          this.$emit('input', [val.currentStartDate, val.currentEndDate]);
        }
      }
    },
    methods: {
      handleChange(val) {
        this.visible = val
      },
      handleShow() {
        this.visible = true
      },
      handleClear(e) {
        if (!this.visible) {
          e.stopPropagation()
        }
        this.currentStartDate = undefined
        this.currentEndDate = undefined
        this.$emit('input', []);
      },
      handleReset(){
        this.currentStartDate = undefined
        this.currentEndDate = undefined
        this.$emit('input', []);
      },
      handleComplete(){
        this.visible = false
      },
      handleShortcut(item){
        if (item.range){
          this.currentStartDate = new Date(item.range[0])
          this.currentEndDate = new Date(item.range[1])
          this.visible = false
        }
      }
    }
  }
</script>
