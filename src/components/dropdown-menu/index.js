import DropdownMenu from './src/index.vue'

DropdownMenu.install = function (Vue) {
  Vue.component(DropdownMenu.name, DropdownMenu)
}
export default DropdownMenu
