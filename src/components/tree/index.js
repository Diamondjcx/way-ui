import Tree from './src/index.vue'

Tree.install = function (Vue) {
  Vue.component(Tree.name, Tree)
}
export default Tree;