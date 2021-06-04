import WPopover from './src/popover.vue'

/* istanbul ignore next */
WPopover.install = function(Vue) {
  Vue.component(WPopover.name, WPopover)
}
export default WPopover
