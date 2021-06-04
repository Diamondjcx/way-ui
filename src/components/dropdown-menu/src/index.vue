<template>
  <transition name="w-scale-fade">
    <div class="w-dropdown-menu" ref="dropdown-menu" v-show="visible">
      <div class="w-dropdown-menu-main">
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
  import {getClientReat} from "../../../basic/tools";

  export default {
    name: "w-dropdown-menu",
    inject: {
      Dropdown: {default: "Dropdown"}
    },
    computed: {
      visible() {
        return this.Dropdown.visible
      }
    },
    watch: {
      visible(val) {
        if (val) {
          const el = this.$el
          const parent_el = this.Dropdown.$el
          const parent_rect = getClientReat(parent_el)
          el.style.position = 'fixed'
          el.style.top = parent_rect.top + parent_rect.height + 'px'
          el.style.left = parent_rect.left + 'px'
        }
      }
    },
    created() {

    },
  }
</script>
