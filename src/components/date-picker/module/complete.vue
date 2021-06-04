<template>
  <div class="w-date-complete">
    <div class="complete-shortcuts">
      <template v-if="shortcuts">
        <span v-for="(item,index) in shortcuts" :key="index" @click="handleTriggerShortcut(item)">
          {{item.text}}
        </span>
      </template>

    </div>
    <div class="complete-control">
      <w-button size="small" @click="handleReset">清空</w-button>
      <w-button size="small" :disabled="isDisabled" type="primary" @click="handleComplete">确定</w-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "complete",
    props:{
      date:{
        type:Array,
        default:Array
      },
      shortcuts:Array
    },
    computed:{
      isDisabled(){
        if(this.date[0] && this.date[1]){
          return false
        }else {
          return true
        }
      }
    },
    methods:{
      handleReset(){
        this.$emit('reset')
      },
      handleComplete(){
        this.$emit('complete')
      },
      handleTriggerShortcut(item){
        this.$emit('handleShortcut',item)
      }
    }
  }
</script>
