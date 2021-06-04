## Table 表格

#### Table Attributes

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-------| ------- | -------- | -------- | -------- |
| data | 表格数据 | Array | - | - |
| columns | 表格列的配置描述，具体项见下表 | Array | - | - |
| border | 是否显示边框 |  Boolean | False | - |
| height | 高度 |  string/number | Auto | - |
| showHeader | 是否显示表头 | Boolean | True | - |
| size | 大小 | String | default | small、default、large |
| title | 表格标题 | String   |  -  | - |
| loading | 是否加载中 | Boolean | False | - |
| stripe | 是否为斑马纹 | Boolean |  False | - |
| stripeStyle | 斑马纹样式 | Array | Null | - |
| checkbox | 是否多选 | Boolean | False | - |
| radio | 是否单选 | Boolean | False | - |
| highlightRow | 单选高亮行 | Boolean | False | - |
| rowKey | 表格行 key 的取值，可以是字符串或一个函数 | string|Function(record):string | 'key' | - |

#### Columns Attributes

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-------| ------- | -------- | -------- | -------- |
| title | 列标题 | String | - | - |
| dataIndex | - | - | - | - |
| key | - | - | - | - |
| align | - | - | - | - |
| slot | - | - | - | - |
| width | - | - | - | - |
| fixed | - | - | - | - |
