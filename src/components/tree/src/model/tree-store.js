import Node from './node';
import { getNodeKey } from './utils';

export default class TreeStore {
    constructor (options) {
        
        for(let option in options) {
            if (options.hasOwnProperty(option)) {
                this[option] = options[option]
            }
        }
        this.nodesMap = {};
      
        this.root = new Node({
            data: this.data,
            store: this
        });

        // 如果是懒加载
        if (this.lazy && this.load) {
          const loadFun = this.load;
          loadFun(this.root, (data) => {
            this.root.doCreateChildren(data);
            // 默认要选中的节点
            this._initDefaultCheckedNodes();
          });
        } else {
          this._initDefaultCheckedNodes();
        }

        
    }
    _initDefaultCheckedNode(node) {
      const defaultCheckedKeys = this.defaultCheckedKeys || [];
  
      if (defaultCheckedKeys.indexOf(node.key) !== -1) {
        node.setChecked(true, !this.checkStrictly);
      }
    }

    _initDefaultCheckedNodes() {
      const defaultCheckedKeys = this.defaultCheckedKeys || [];
      const nodesMap = this.nodesMap;
  
      defaultCheckedKeys.forEach((checkedKey) => {
        const node = nodesMap[checkedKey];
  
        if (node) {
          node.setChecked(true, !this.checkStrictly);
        }
      });
    }

    setDefaultCheckedKey(newVal) {
      if (newVal !== this.defaultCheckedKeys) {
        this.defaultCheckedKeys = newVal;
        this._initDefaultCheckedNodes();
      }
    }

    registerNode(node) {
      const key = this.key;
      if (!key || !node || !node.data) return;
  
      const nodeKey = node.key;
      if (nodeKey !== undefined) this.nodesMap[node.key] = node;
    }
    _setCheckedKeys(key, leafOnly = false, checkedKeys) {
      const allNodes = this._getAllNodes().sort((a, b) => b.level - a.level);
      const cache = Object.create(null);
      const keys = Object.keys(checkedKeys);
      allNodes.forEach(node => node.setChecked(false, false));
      for (let i = 0, j = allNodes.length; i < j; i++) {
        const node = allNodes[i];
        const nodeKey = node.data[key].toString();
        let checked = keys.indexOf(nodeKey) > -1;
        if (!checked) {
          if (node.checked && !cache[nodeKey]) {
            node.setChecked(false, false);
          }
          continue;
        }
  
        let parent = node.parent;
        while (parent && parent.level > 0) {
          cache[parent.data[key]] = true;
          parent = parent.parent;
        }
  
        if (node.isLeaf || this.checkStrictly) {
          node.setChecked(true, false);
          continue;
        }
        node.setChecked(true, true);
  
        if (leafOnly) {
          node.setChecked(false, false);
          const traverse = function(node) {
            const childNodes = node.childNodes;
            childNodes.forEach((child) => {
              if (!child.isLeaf) {
                child.setChecked(false, false);
              }
              traverse(child);
            });
          };
          traverse(node);
        }
      }
    }
    getNode(data) {
      if (data instanceof Node) return data;
      const key = typeof data !== 'object' ? data : getNodeKey(this.key, data);
      return this.nodesMap[key] || null;
    }


    getCheckedNodes(leafOnly = false, includeHalfChecked = false) {
        const checkedNodes = [];
        const traverse = function(node) {
          const childNodes = node.root ? node.root.childNodes : node.childNodes;
    
          childNodes.forEach((child) => {
            if ((child.checked || (includeHalfChecked && child.indeterminate)) && (!leafOnly || (leafOnly && child.isLeaf))) {
              checkedNodes.push(child.data);
            }
    
            traverse(child);
          });
        };
    
        traverse(this);
    
        return checkedNodes;
    }


    getCheckedKeys(leafOnly = false) {
        return this.getCheckedNodes(leafOnly).map((data) => (data || {})[this.key]);
    }


    getHalfCheckedNodes() {
        const nodes = [];
        const traverse = function(node) {
          const childNodes = node.root ? node.root.childNodes : node.childNodes;
    
          childNodes.forEach((child) => {
            if (child.indeterminate) {
              nodes.push(child.data);
            }
    
            traverse(child);
          });
        };
    
        traverse(this);
    
        return nodes;
    }


    getHalfCheckedKeys() {
        return this.getHalfCheckedNodes().map((data) => (data || {})[this.key]);
    }

    setCheckedKeys(keys, leafOnly = false) {
      this.defaultCheckedKeys = keys;
      const key = this.key;
      const checkedKeys = {};
      keys.forEach((key) => {
        checkedKeys[key] = true;
      });
  
      this._setCheckedKeys(key, leafOnly, checkedKeys);
    }
    setDefaultExpandedKeys(keys) {
      keys = keys || [];
      this.defaultExpandedKeys = keys;
  
      keys.forEach((key) => {
        const node = this.getNode(key);
        if (node) node.expand(null, this.autoExpandParent);
      });
    }


}