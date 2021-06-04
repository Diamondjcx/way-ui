<template>
  <div class="w-table" :class="{'is-bordered':bordered}" ref="wTable">
    <w-loading :loading="loading">
      <div class="w-table__inner">
        <div class="w-table__header-wrapper">
          <table class="w-table__header" cellspacing="0" cellpadding="0" border="0">
            <colgroup v-html="col"></colgroup>
            <thead>
            <tr>
              <th v-if="checkbox" colspan="1" rowspan="1">
                <div class="cell" style="text-align: center">
                  <w-checkbox :value="checkAll" style="margin:0;" :indeterminate="isIndeterminate" :show-label="false"
                              @change="handleSelectAll"/>
                </div>
              </th>
              <th v-if="radio" colspan="1" rowspan="1">
                <div class="cell" style="text-align: center">
                  <div style="width: 16px;"></div>
                </div>
              </th>
              <th colspan="1" rowspan="1" v-for="(item,i) in columns" :key="i">
                <div class="cell" :class="{'align-center':item.align}">
                  {{item.title}}
                </div>
              </th>
            </tr>
            </thead>
          </table>
        </div>
        <div class="w-table__body-wrapper">
          <table class="w-table__body" cellspacing="0" cellpadding="0" border="0">
            <colgroup v-html="col"></colgroup>
            <tbody>
            <tr v-for="(item,index) in data" :key="index">
              <td v-if="checkbox" colspan="1" rowspan="1">
                <div class="cell" style="text-align: center">
                  <w-checkbox :value="selectRowKey.includes(index)" style="margin:0;" :show-label="false"
                              @change="val => handleSelectCheckbox(val,index)"/>
                </div>
              </td>
              <td v-if="radio" colspan="1" rowspan="1">
                <div class="cell" style="text-align: center">
                  <w-radio style="margin:0;" :value="selectRowKey[0]" :showLabel="false" :key="index" :label="index"
                           @change="handleSelectRadio(index)"/>
                </div>
              </td>
              <td colspan="1" rowspan="1" v-for="(column,x) in columns" :key="x">
                <div class="cell">{{item[column.key]}}</div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </w-loading>
  </div>
</template>

<script>
  export default {
    name: "w-table",
    props: {
      data: Array,
      columns: Array,
      bordered: {
        type: Boolean,
        default: false
      },
      height: {
        type: String || Number,
        default: 'auto'
      },
      showHeader: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'default'
      },
      loading: {
        type: Boolean,
        default: false
      },
      stripe: {
        type: Boolean,
        default: false
      },
      checkbox: {
        type: Boolean,
        default: false
      },
      radio: {
        type: Boolean,
        default: false
      },
      highlightRow: {
        type: Boolean,
        default: false
      },
      rowKey: String || Number,
      selectRowKey: {
        type: Array,
        default: Array
      }
    },
    data() {
      return {
        col: []
      }
    },
    mounted() {
      this.setColWidth()
    },
    computed: {
      checkAll() {
        if (this.selectRowKey.length === this.data.length) {
          return true
        } else {
          return false
        }
      },
      isIndeterminate() {
        if (this.selectRowKey.length > 0 && this.selectRowKey.length < this.data.length) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      setColWidth() {
        const tabelWidth = this.$refs['wTable'].clientWidth
        let string = ''
        for (let i = 0; i < this.columns.length; i++) {
          let width = 0
          if (this.columns[i].width) {
            width = this.columns[i].width
          } else {
            const exist_width = this.columns.filter(item => item.width).map(a => a.width)
            const eWidth = exist_width.reduce((prev, next) => prev + next)
            width = parseInt((tabelWidth - eWidth) / (this.columns.length - exist_width.length))
          }
          string += `<col width="${width}"/>`
        }
        if (this.checkbox || this.radio) {
          string = `<col width="${50}"/>` + string
        }
        this.col = string
      },
      handleSelectRadio(index) {
        this.$emit('select', [index])
      },
      handleSelectCheckbox(val, index) {
        let arr = this.selectRowKey
        if (val) {
          const i = arr.findIndex(item => item === index)
          arr.splice(i, 1)
        } else {
          arr.push(index)
        }
        this.$emit('select', arr)
      },
      handleSelectAll(val) {
        if (val) {
          this.$emit('select', [])
        } else {
          const arr = this.data.map((item, index) => {
            return index
          })
          this.$emit('select', arr)
        }
      }
    }
  }
</script>
