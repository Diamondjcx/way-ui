<template>
   <div class="w-tree">
       <w-tree-node
       v-for="(child) in root.childNodes"
       :key="getNodeKey(child)"
       :node="child"
       :props="props"
       :show-checkbox="showCheckbox"
       :default-Expand-All="defaultExpandAll"    
       :render-content="renderContent"
       >
       </w-tree-node>
   </div>
</template>
<script>
    import TreeStore from './model/tree-store';
    import WTreeNode from './tree-node';
    import { getNodeKey } from './model/utils';
    export default {
        name: 'w-tree',
        components: {
            WTreeNode
        },
        props: {
            data: {
                type: Array,
            },
            nodeKey: String,
            showCheckbox: {
                type: Boolean,
                default: false
            },
            defaultExpandAll: {
                type: Boolean,
                default: false
            },
            indent: {
                type: Number,
                default: 18
            },
            renderAfterExpand: {
                type: Boolean,
                default: true
            },
            expandOnClickNode: {
                type: Boolean,
                default: true,
            },
            defaultCheckedKeys: Array,
            defaultExpandedKeys: Array,
            autoExpandParent: {
                type: Boolean,
                default: true
            },
            lazy:{
                type: Boolean,
                default: false
            },
            load:Function,
            renderContent: Function,
            props: {
                default() {
                    return {
                        children: 'children',
                        label: 'label',
                        disabled: 'disabled'
                    };
                }
            },
        },
        data() {
            return {
                level: 0,
                store: null,
                root: null,
            }
        },
        computed: {
            children: {
                set(value) {
                    this.data = value;
                },
                get() {
                    return this.data;
                }
            },
        },
        watch: {
            defaultCheckedKeys(newVal) {
                this.store.setDefaultCheckedKey(newVal);
            },
            defaultExpandedKeys(newVal) {
                console.log(newVal);
                this.store.defaultExpandedKeys = newVal;
                this.store.setDefaultExpandedKeys(newVal);
            },
            data(newVal) {
                this.store.setData(newVal);
            },
        },
        methods: {
            getNodeKey(node) {
                return getNodeKey(this.nodeKey, node.data)
            },
            getCheckedNodes(leafOnly, includeHalfChecked) {
                return this.store.getCheckedNodes(leafOnly, includeHalfChecked);
            },

            getCheckedKeys(leafOnly) {
                return this.store.getCheckedKeys(leafOnly);
            },
            getHalfCheckedNodes() {
                return this.store.getHalfCheckedNodes();
            },
            getHalfCheckedKeys() {
                return this.store.getHalfCheckedKeys();
            }
        },
        created() {
            this.isTree = true;
            this.store = new TreeStore({
                key : this.nodeKey,
                data: this.data,
                props: this.props,
                defaultExpandAll: this.defaultExpandAll,
                indent: this.indent,
                showCheckbox: this.showCheckbox,
                autoExpandParent: this.autoExpandParent,
                defaultCheckedKeys: this.defaultCheckedKeys,
                defaultExpandedKeys: this.defaultExpandedKeys,
                lazy: this.lazy,
                load: this.load
            });

            this.root = this.store.root;
        },
    }















</script>