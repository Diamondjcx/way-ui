import Vue from 'vue'
import Router from 'vue-router'

const Button = () => import(/* webpackChunkName: 'button' */ '../docs/button.md')
const Grid = () => import(/* webpackChunkName: 'Icon' */ '../page/grid')
const Radio = () => import(/* webpackChunkName: 'radio' */ '../page/radio')
const Checkbox = () => import(/* webpackChunkName: 'Checkbox' */ '../page/checkbox')
const Icon = () => import(/* webpackChunkName: 'Icon' */ '../page/icon')
const Switch = () => import(/* webpackChunkName: 'Switch' */ '../page/switch')
const Input = () => import(/* webpackChunkName: 'Switch' */ '../page/input')
const DatePicker = () => import(/* webpackChunkName: 'Icon' */ '../page/date-picker')
const Message = () => import(/* webpackChunkName: 'Icon' */ '../page/message')
const Popover = () => import(/* webpackChunkName: 'Icon' */ '../page/popover')
const Pagination = () => import(/* webpackChunkName: 'Icon' */ '../page/pagination')
const Modal = () => import(/* webpackChunkName: 'Icon' */ '../page/modal')
const Dropdown = () => import(/* webpackChunkName: 'Icon' */ '../page/dropdown')
const Progress = () => import(/* webpackChunkName: 'Icon' */ '../page/progress')
const Badge = () => import(/* webpackChunkName: 'Icon' */ '../page/badge')
const Backtop = () => import(/* webpackChunkName: 'Icon' */ '../page/backtop')
const ScrollPane = () => import(/* webpackChunkName: 'Icon' */ '../page/scroll-pane')
const Slide = () => import(/* webpackChunkName: 'Icon' */ '../page/slide')
const Table = () => import(/* webpackChunkName: 'Icon' */ '../page/table')
const Select = () => import(/* webpackChunkName: 'Select' */ '../page/select')
const Tag = () => import(/* webpackChunkName: 'Tag' */ '../page/tag')
const Link = () => import(/* webpackChunkName: 'Link' */ '../page/link')
const Layout = () => import(/* webpackChunkName: 'Layout' */ '../page/layout')
const Tree = () => import(/* webpackChunkName: 'Layout' */ '../page/tree')
const Loading = () => import(/* webpackChunkName: 'Loading' */ '../page/loading')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/grid',
      meta: {
        title: '主页', show: false
      }
    }, {
      path: '/grid',
      name: 'grid',
      component: Grid,
      meta: {
        title: 'Grid 栅格', show: true
      }
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      meta: {
        title: 'Layout 布局', show: true
      }
    },
    {
      path: '/icon',
      name: 'icon',
      component: Icon,
      meta: {
        title: 'icon 图标', show: true
      }
    },
    {
      path: '/button',
      name: 'button',
      component: Button,
      meta: {
        title: 'Button 按钮', show: true
      }
    },
    {
      path: '/radio',
      name: 'radio',
      component: Radio,
      meta: {
        title: 'Radio 单选框', show: true
      }
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: Checkbox,
      meta: {
        title: 'Checkbox 多选框', show: true
      }
    },
    {
      path: '/switch',
      name: 'switch',
      component: Switch,
      meta: {
        title: 'Switch 开关', show: true
      }
    },
    {
      path: '/input',
      name: 'input',
      component: Input,
      meta: {
        title: 'Input 输入框', show: true
      }
    },
    {
      path: '/datePicker',
      name: 'datePicker',
      component: DatePicker,
      meta: {
        title: 'Date Picker日历', show: true
      }
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta: {
        title: 'Message 提示', show: true
      }
    },
    {
      path: '/popover',
      name: 'popover',
      component: Popover,
      meta: {
        title: 'Popover 气泡卡片', show: true
      }
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: Pagination,
      meta: {
        title: 'Pagination 分页', show: true
      }
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal,
      meta: {
        title: 'Modal 弹出层', show: true
      }
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: Dropdown,
      meta: {
        title: 'Dropdown 下拉菜单', show: true
      }
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress,
      meta: {
        title: 'Progress 进度条', show: true
      }
    },
    {
      path: '/badge',
      name: 'badge',
      component: Badge,
      meta: {
        title: 'Badge 标记', show: true
      }
    },
    {
      path: '/backtop',
      name: 'backtop',
      component: Backtop,
      meta: {
        title: 'Backtop 返回顶部', show: true
      }
    },
    {
      path: '/scroll-pane',
      name: 'scroll-pane',
      component: ScrollPane,
      meta: {
        title: 'ScrollPane 滚动面板', show: true
      }
    },
    {
      path: '/table',
      name: 'table',
      component: Table,
      meta: {
        title: 'Table 表格', show: true
      }
    },
    // {
    //   path: '/slide',
    //   name: 'slide',
    //   component: Slide,
    //   meta: {
    //     title: 'Slide 滑动条', show: true
    //   }
    // }
    {
      path: '/select',
      name: 'select',
      component: Select,
      meta: {
        title: 'Select 下拉筛选', show: true
      }
    },
    {
      path: '/tag',
      name: 'tag',
      component: Tag,
      meta: {
        title: 'Tag 标签', show: true
      }
    },
    {
      path: '/link',
      name: 'link',
      component: Link,
      meta: {
        title: 'Link 标签', show: true
      }
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree,
      meta: {
        title: 'Tree 控件', show: true
      }
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading,
      meta: {
        title: 'Loading 加载', show: true
      }
    },
  ]
})
