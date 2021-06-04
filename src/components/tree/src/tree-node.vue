<template>
   <div class="w-tree-node" 
    @click.stop="handleClick"
    :class="{
    'is-focusable': !node.disabled,
    'is-checked': !node.disabled && node.checked
    }"
   >
       <div class="w-tree-node_content"
       :style="{ 'padding-left': (node.level - 1) * tree.indent + 'px' }"
       >
           <span 
           @click.stop="handleExpandIconClick"
           :class="[
            { 'is-leaf': node.isLeaf, expanded: !node.isLeaf && expanded },
            'w-tree-node__expand-icon',
            tree.iconClass ? tree.iconClass : 'w-icon-caret-right'
            ]"
           ></span>
           <w-checkbox 
            @click.native.stop
            @change="handleCheckChange"
            v-if="showCheckbox" 
            v-model="node.checked"
            :disabled="!!node.disabled"
            :indeterminate="node.indeterminate"
           ></w-checkbox>
           <node-content :node="node"></node-content>
       </div>
       <transition name="fade" mode="out-in">
            <div class="w-tree-node_children" 
                v-if="renderAfterExpand"
                v-show="expanded"
            >
                <w-tree-node
                v-for="child in node.childNodes"
                :key="getNodeKey(child)"
                :node="child"
                :show-checkbox="showCheckbox"
                :render-content="renderContent"
                >
                </w-tree-node>
            </div>
        </transition>
   </div>
</template>
<script>
import WCheckbox from '../../checkbox';
import { getNodeKey } from './model/utils';
    export default {
        name: 'w-tree-node',
        components: {
            WCheckbox,
            NodeContent: {
                props: {
                    node: {
                        required: true,
                        oldChecked: null,
                    },
                    
                },
                render(h) {
                    const parent = this.$parent;
                     const tree = parent.tree;
                    const node = this.node;
                    console.log('node', node);
                    const { data, store } = node;
                    return (
                        parent.renderContent
                        ? parent.renderContent.call(parent._renderProxy, h, { _self: tree.$vnode.context, node, data, store })
                        : tree.$scopedSlots.default
                            ? tree.$scopedSlots.default({ node, data })
                            : <span class="el-tree-node__label">{ node.label }</span>
                    );
                }
            }
        },
        props: {
            node: {},
            showCheckbox: {
                type: Boolean,
                default: false
            },
            renderAfterExpand: {
                type: Boolean,
                default: true
            },
            renderContent: Function,
        },
        data() {
            return {
                level: 0,
                expanded: false,
                tree: null,
            }
        },
        computed: {
        },
        watch: {
            'node.expanded'(val) {
                this.$nextTick(() => this.expanded = val);
                // if (val) {
                //     this.childNodeRendered = true;
                // }
            },
            'node.checked'(val) {
                // this.handleCheckChange(val)
            },
        },
        methods: {
            getNodeKey(node) {
                return getNodeKey(this.tree.nodekey, node.data)
            },
            handleExpandIconClick () {
                if (this.expanded) {
                    this.tree.$emit('node-collapse', this.node.data, this.node, this);
                    this.node.collapse();
                } else {
                    this.$emit('node-expand', this.node.data, this.node, this);
                    this.node.expand();
                }
                // console.log('this.node', this.node);
                this.tree.$emit('node-click', this.node.data, this.node, this);
            },
            handleClick () {
                if (this.tree.expandOnClickNode) {
                    this.handleExpandIconClick();
                }
                if (this.tree.checkOnClickNode && !this.node.disabled) {
                    this.handleCheckChange(null, {
                        target: { checked: !this.node.checked }
                    });
                }
                 this.tree.$emit('node-click', this.node.data, this.node, this);
                //  console.log(this.node, this);  
            },
            // 复选框改变
            handleCheckChange(value) {
                this.node.setChecked(value, true)
                this.$nextTick(() => {
                    const store = this.tree.store;
                    this.tree.$emit('check', this.node.data, {
                        checkedNodes: store.getCheckedNodes(),
                        checkedKeys: store.getCheckedKeys(),
                        halfCheckedNodes: store.getHalfCheckedNodes(),
                        halfCheckedKeys: store.getHalfCheckedKeys(),
                    });
                });
            }
        },
        created() {
            const parent = this.$parent;
            if (parent.isTree) {
                this.tree = parent;
            } else {
                this.tree = parent.tree;
            }
            if (parent) {
                this.level = parent.level + 1;
            }

            if (this.node.expanded) {
                this.expanded = true;
                // 渲染子节点
                // this.childNodeRendered = true;
            }
        },
        mounted() {
            // console.log(this.level);
            console.log(this.node.disabled);
        },
    }


</script>