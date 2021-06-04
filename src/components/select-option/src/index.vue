<template>
  <li
    @click.stop="selectOptionClick"
    :class="{'el-select-option_item':true,
    'is-disabled' : disabled,
    'is-selected': selected
    }"
    >
      <span >{{ label }}</span>
      <i :class="selected ? 'w-icon-check' : ''"></i>
  </li>
</template>
<script>
export default {
    name: 'w-select-option',
    inject: {
      Select: { default: "Select" }
    },
    props: {
      value: String,
      label: [String, Number],
      created: Boolean,
      disabled: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        selected: false,
      }
    },
    computed: {
      activeTag() {
        return this.Select.activeTag;
      },
      selectVal() {
        return this.Select.selectVal;
      },
    },
    watch: {
      activeTag(val) {
        if (val ===  this.value) {
          this.selected = false;
        }
      },
      selectVal(val) {
        if (!this.Select.multiple) {
            if (val ===  this.value) {
              this.selected = true;
            } else {
              this.selected = false;
            }
        }
      }
    },
    mounted() {
      if (this.Select.multiple) {
        this.Select.selectVal.map((item) => {
          if (item.value === this.value) {
            this.selected = true;
          }
        });
      } else {
        this.selected = this.Select.selectVal === this.value
      }
    },
    methods: {
      selectOptionClick() {
        if (this.Select.multiple) {
          this.selected = !this.selected
          }
        if(!this.Select.visible || this.disabled) return;
        this.Select.itemClick(this.value, this.label, this.selected);
      }
    },
}
</script>>