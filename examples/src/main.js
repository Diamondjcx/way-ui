import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './style/index.scss'

import wayUI from '../../src/index';
import '../../src/styles/index.scss'

import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

import clipboard from 'clipboard';
Vue.prototype.clipboard = clipboard;

Vue.use(VueHighlightJS)
Vue.use(wayUI)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
