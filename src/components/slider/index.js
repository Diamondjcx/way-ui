import Slide from './src/index.vue'

Slide.install = function (Vue) {
  Vue.component(Slide.name, Slide)
}
export default Slide
