### Tree 树形控件

|  参数  | 说明    |  类型   |  可选值  |  默认值  |
|--------|---------|---------|--------|--------|
| data   | 展示数据 | Array   | ----- | - |
| node-key | 树节点唯一标识 | String | - | - |
| props | 具体看下表 | object | - | - |
| render-after-expand | 是否在第一次展开某个树节点后才渲染其子节点 | boolean | - | true |
| default-expand-all | 是否默认展开所有节点 | boolean | - | false |
| expand-on-click-node | 是否在点击节点的时候展开或者收缩节点 | boolean | - | true | false时只点击箭头进行展开/收缩
| check-on-click-node | 是否在点击节点的时候选中节点 | boolean | - | true | false时只点击复选框进行选中
| auto-expand-parent | 展开子节点的时候是否自动展开父节点 | boolean | - | true |
| default-expanded-keys | 默认展开的节点的 key 的数组 | array | - | - |
| show-checkbox | 节点是否可被选择 | boolean | - | false |
| default-checked-keys | 默认勾选的节点的 key 的数组 | array | - | - |
| current-node-key | 当前选中的节点 | string, number | - | - |
| indent | 相邻级节点间的水平缩进，单位为像素 | number | 
| icon-class | 自定义树节点的图标 | string | - | 
| draggable | 是否开启拖拽节点功能| boolean | false |


props
|  参数  | 说明    |  类型   |  可选值  |  默认值  |
|--------|---------|---------|--------|--------|
| label | 指定节点标签为节点对象的某个属性值 | string, function(data, node) | - | - |
| children | 指定子树为节点对象的某个属性值 | string | - | - |
| disabled | 指定节点选择框是否禁用为节点对象的某个属性值 | boolean, function(data, node) | - | - |