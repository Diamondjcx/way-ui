## select 选择框

#### Attributes

|  参数  |   说明    |  类型   |  默认值  | 可选值 |
|-------|--------|--------|--------|--------|
|  width   | 宽度     |  String、Number  |  '100%'  | - |
|  size    | 尺寸     |  String  |  default  | small、default、large |
|  data    | 数据     |  Array  |  Array  |  |
|  v-model/value  |  当前选中值    |    |    |  |
|  open  |  是否展开下拉菜单    |  Boolean  |  false  |  |
|  placeholder  |  选择框默认文字    |  String/Slot  |  ''  |  |
|  mode  |  选择模式（单选、多选）    |  String  |  'default'  | 'default'/'multiple' |
|  disabled  |  是否禁用    |  Boolean  |  false  | - |
|  allowClear  |  支持清除    |  Boolean  |  false  | - |
|  autoFocus  |  自动聚焦    |  Boolean  |  false  | - |


#### 1.用处
    - 筛选的时候：根据下拉选择的选项，然后进行查询
    - 单选 改变的时候获取value值然后进行查询
    - 多选 v-model是一个数组