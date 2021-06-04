import WButton from './src/button.vue'

/* istanbul ignore next */
WButton.install = function(Vue) {
  Vue.component(WButton.name, WButton)
}
export default WButton
