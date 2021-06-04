<template>
  <div class="demo-select">
    <h4>select 下拉筛选 基本使用</h4>
    <w-select 
      v-model="value"
      placeholder="请选择" 
      width='20%' 
      size="small"
      @change="basicChange"
    >
      <w-select-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled ="item.disabled"
      >
      </w-select-option>
    </w-select>
     <h4>select 可清空单选</h4>
     <w-select 
       v-model="value"
      placeholder="请选择" 
      width='20%' 
      size="small"
      allowClear
      @clear="handleClear"
      >
        <w-select-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled ="item.disabled"
        >
        </w-select-option>
    </w-select>
    <h4>select 多选</h4>
    <w-select 
      v-model="valueArr" 
      placeholder="请选择" 
      multiple
      @change="handleChange"
      @remove-tag="removeTag"
      >
        <w-select-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        </w-select-option>
    </w-select>
    <h4>select 大小 size = large、default、large</h4>
    <w-select 
      v-model="value" 
      placeholder="请选择" 
      size="large"
      
      >
        <w-select-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled ="item.disabled"
        >
        </w-select-option>
    </w-select>
    <w-select 
       v-model="value"
      placeholder="请选择" 
      size="default"
      style='margin-left :8px'
      >
        <w-select-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled ="item.disabled"
        >
        </w-select-option>
    </w-select>
    <w-select 
       v-model="value" 
      placeholder="请选择" 
      size="small"
      style='margin-left :8px'
      >
        <w-select-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled ="item.disabled"
        >
        </w-select-option>
    </w-select>
    <h4>select 自动对焦</h4>
    <w-select 
       v-model="value" 
      placeholder="请选择" 
      autofocus
      :options="options"
      >
        <w-select-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled ="item.disabled"
        >
        </w-select-option>
    </w-select>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
       options: [{
          value: '选项1',
          label: '黄金糕',
          disabled: false,
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: false,
        }, {
          value: '选项3',
          label: '蚵仔煎',
          disabled: false,
        }, {
          value: '选项4',
          label: '龙须面',
          disabled: true,
        }, {
          value: '选项5',
          label: '北京烤鸭',
          disabled: false,
        }, {
          value: '选项6',
          label: '蚵仔煎',
          disabled: false,
        }, {
          value: '选项7',
          label: '龙须面',
          disabled: true,
        }, {
          value: '选项8',
          label: '北京烤鸭',
          disabled: false,
        }],
        value: '',
        valueArr: [],
      }
    },
    methods: {
      basicChange(value) {
        console.log(value);
      },
      handleChange(val) {
        console.log(val);
      },
      // 移除tag
      removeTag(tag){
        // value
        console.log(tag);
      },
      handleClear(e) {
        console.log(e);
      },
    }
  }
</script>
