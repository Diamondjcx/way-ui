<template>
  <div class="demo-tree">
    <h4>基础用法</h4>
    <w-tree 
    :data= data
    @node-click="handleNodeClick"
    :default-expand-all="false"
    :indent= 18
    :props="props"
    :render-after-expand="true"
     node-key='nodeId' 
    :expand-on-click-node ="true"
    >
    </w-tree>
    <h4>可选择</h4>
    <w-tree 
    :data= data
    @node-click="handleNodeClick"
    :default-expand-all="false"
    :show-checkbox="true"
    :indent= 18
    :props="props"
    :render-after-expand="true"
     node-key='id' 
    :expand-on-click-node ="true"
    @check="handleCheckChange"
    >
    </w-tree>
    <h4>默认展开默认选中</h4>
      <w-tree 
      :data='defaultData'
      :show-checkbox="true"
      :props="props"
       node-key='tree_id' 
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :autoExpandParent="true"
    ></w-tree>
     <h4>禁用状态</h4>
      <w-tree 
      :data='checkData'
      :show-checkbox="true"
      :props="props"
       node-key='tree_id' 
      :autoExpandParent="true"
    ></w-tree>
     <h4>懒加载</h4>
      <w-tree 
      :props="props1"
      :load="loadNode1"
      lazy
      :show-checkbox="true"
    ></w-tree>
    <h4>自定义节点内容</h4>
     <w-tree
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent">
    </w-tree>
  </div>
</template>

<script>
let id = 1000;
  export default {
    name: "index",
    data(){
      return{
       data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        checkData: [{
          tree_id: 1,
          label: '一级 2',
          children: [{
            tree_id: 3,
            label: '二级 2-1',
            children: [{
              tree_id: 4,
              label: '三级 3-1-1'
            }, {
              tree_id: 5,
              label: '三级 3-1-2',
              disabled: true
            }]
          }, {
            tree_id: 2,
            label: '二级 2-2',
            disabled: true,
            children: [{
              tree_id: 6,
              label: '三级 3-2-1'
            }, {
              tree_id: 7,
              label: '三级 3-2-2',
              disabled: true
            }]
          }]
        }],
         defaultData: [{
          tree_id: 1,
          label: '一级 1',
          children: [{
            tree_id: 4,
            label: '二级 1-1',
            children: [{
              tree_id: 9,
              label: '三级 1-1-1'
            }, {
              tree_id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          tree_id: 2,
          label: '一级 2',
          children: [{
            tree_id: 5,
            label: '二级 2-1'
          }, {
            tree_id: 6,
            label: '二级 2-2'
          }]
        }, {
          tree_id: 3,
          label: '一级 3',
          children: [{
            tree_id: 7,
            label: '二级 3-1'
          }, {
            tree_id: 8,
            label: '二级 3-2'
          }]
        }],
        props: {
          children: 'children',
          label: 'label',
          disabled: 'disabled'
        },
         props1: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
      
      }
    },
    methods: {
      handleNodeClick (data, node, e) {
        console.log(data, node, e);
      },
      handleCheckChange(checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys ) {
        console.log(checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys);
      },
      loadNode1(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region' }]);
        }
        if (node.level > 1) return resolve([]);

        setTimeout(() => {
          const data = [{
            name: 'leaf',
            leaf: true
          }, {
            name: 'zone'
          }];

          resolve(data);
        }, 500);
      },
      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <w-button size="mini" type="text" on-click={ () => this.append(data) }>Append</w-button>
              <w-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</w-button>
            </span>
          </span>);
      },
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
    
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .demo-tree{
  }
</style>
